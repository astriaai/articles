import base64
import hashlib
import importlib.util
import io
import json
from pathlib import Path
import tempfile
import unittest

from botocore.exceptions import ClientError

spec = importlib.util.spec_from_file_location("r2_publish", Path(__file__).parents[1] / "scripts/publish-r2.py")
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class S3:
    def __init__(self):
        self.objects = {}
        self.fail_blobs = False
        self.race_pointer = False

    def get_object(self, Bucket, Key):
        if Key not in self.objects:
            raise ClientError({"Error": {"Code": "NoSuchKey"}}, "GetObject")
        data = self.objects[Key]
        return {"Body": io.BytesIO(data), "ETag": '"' + hashlib.md5(data).hexdigest() + '"'}

    def put_object(self, Bucket, Key, Body, ContentMD5, **kwargs):
        if self.fail_blobs and Key.startswith("objects/"):
            raise RuntimeError("Upload failed")
        assert base64.b64encode(hashlib.md5(Body).digest()).decode() == ContentMD5
        current = self.objects.get(Key)
        etag = '"' + hashlib.md5(current).hexdigest() + '"' if current is not None else None
        if (kwargs.get("IfNoneMatch") == "*" and current is not None or
                "IfMatch" in kwargs and (kwargs["IfMatch"] != etag or self.race_pointer)):
            raise ClientError({"Error": {"Code": "PreconditionFailed"}}, "PutObject")
        self.objects[Key] = Body
        return {"ETag": '"' + hashlib.md5(Body).hexdigest() + '"'}

    def get_paginator(self, name):
        return self

    def paginate(self, Bucket, Prefix):
        yield {"Contents": [{"Key": key, "Size": len(data),
                             "ETag": '"' + hashlib.md5(data).hexdigest() + '"'}
                            for key, data in self.objects.items() if key.startswith(Prefix)]}


class CredentialTests(unittest.TestCase):
    def test_local_scoped_key_takes_precedence_over_ambient_credentials(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / ".env.github"
            path.write_text('CLOUDFLARE_R2_ACCESS_KEY_ID=local-key\n'
                            'CLOUDFLARE_R2_SECRET_ACCESS_KEY="local-secret"\n')
            options = module.credential_options(path, environ={
                "AWS_ACCESS_KEY_ID": "broad-key", "AWS_SECRET_ACCESS_KEY": "broad-secret",
            })
            self.assertEqual(options, {"aws_access_key_id": "local-key",
                                       "aws_secret_access_key": "local-secret"})

    def test_missing_or_incomplete_scoped_key_never_falls_back_to_a_profile(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / ".env.github"
            with self.assertRaisesRegex(ValueError, "Configure .env.github"):
                module.credential_options(path, environ={})
            self.assertEqual(module.credential_options(path, profile="explicit"),
                             {"profile_name": "explicit"})
            self.assertEqual(module.credential_options(path, environ={
                "AWS_ACCESS_KEY_ID": "ci-key", "AWS_SECRET_ACCESS_KEY": "ci-secret",
            }), {"aws_access_key_id": "ci-key", "aws_secret_access_key": "ci-secret"})
            path.write_text('CLOUDFLARE_R2_ACCESS_KEY_ID=incomplete\n')
            with self.assertRaisesRegex(ValueError, "Both CLOUDFLARE_R2"):
                module.credential_options(path, environ={
                    "AWS_ACCESS_KEY_ID": "broad-key", "AWS_SECRET_ACCESS_KEY": "broad-secret",
                })


class ReleaseTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.site = Path(self.temp.name)
        for name, text in {"index.html": "first", "404.html": "not found", "sitemap.xml": "<urlset/>"}.items():
            (self.site / name).write_text(text)
        self.s3 = S3()
        self.publisher = module.Publisher(self.s3)
        self.publisher.publish(self.site, "one", "commit-one")

    def pointer(self):
        return json.loads(self.s3.objects["_current.json"])["release"]

    def test_failed_upload_keeps_previous_release_live(self):
        (self.site / "index.html").write_text("second")
        self.s3.fail_blobs = True
        with self.assertRaisesRegex(RuntimeError, "Upload failed"):
            self.publisher.publish(self.site, "two", "commit-two")
        self.assertEqual(self.pointer(), "one")
        self.assertNotIn("releases/two.json", self.s3.objects)

    def test_stage_activation_and_rollback_preserve_older_assets(self):
        (self.site / "old.js").write_text("older cached page needs this")
        self.publisher.publish(self.site, "with-assets", "commit-assets")
        (self.site / "old.js").unlink()
        (self.site / "index.html").write_text("second")
        self.publisher.publish(self.site, "two", "commit-two", stage=True)
        self.assertEqual(self.pointer(), "with-assets")
        manifest = json.loads(self.s3.objects["releases/two.json"])
        self.assertIn("old.js", manifest["files"])
        self.publisher.activate("two", "with-assets")
        self.assertEqual(self.pointer(), "two")
        self.publisher.activate("one", "two")
        self.assertEqual(self.pointer(), "one")

    def test_release_names_are_immutable_and_corruption_blocks_activation(self):
        (self.site / "index.html").write_text("changed")
        with self.assertRaisesRegex(ValueError, "immutable"):
            self.publisher.publish(self.site, "one", "different-commit")
        manifest = json.loads(self.s3.objects["releases/one.json"])
        sha = manifest["files"]["index.html"]["sha256"]
        self.s3.objects["objects/" + sha] = b"corrupt"
        with self.assertRaisesRegex(ValueError, "corrupt"):
            self.publisher.activate("one")

    def test_atomic_pointer_condition_rejects_a_concurrent_publish(self):
        (self.site / "index.html").write_text("second")
        self.publisher.publish(self.site, "two", "commit-two", stage=True)
        self.s3.race_pointer = True
        with self.assertRaises(ClientError):
            self.publisher.activate("two", "one")
        self.assertEqual(self.pointer(), "one")


if __name__ == "__main__":
    unittest.main()

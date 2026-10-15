#!/usr/bin/env python3
"""Publish complete, immutable article releases, then atomically switch traffic.

Requires scripts/requirements-r2.txt. Uses the local cloudflare AWS profile, or
AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY in CI. Never deletes older releases.
"""
import argparse
import base64
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess

ACCOUNT = "ec873171e61e987246494e6b69f45556"
BUCKET = "astria-articles"
ENDPOINT = "https://" + ACCOUNT + ".r2.cloudflarestorage.com"
RELEASE = re.compile(r"^[a-zA-Z0-9][a-zA-Z0-9._-]{0,100}$")
UNSET = object()


def inventory(site):
    if not all((site / name).is_file() for name in ("index.html", "404.html", "sitemap.xml")):
        raise ValueError("A complete production site with index, 404 and sitemap is required")
    files, blobs = {}, {}
    for path in sorted(site.rglob("*")):
        relative = path.relative_to(site)
        if any(part.startswith(".") for part in relative.parts):
            continue
        if path.is_symlink():
            raise ValueError("Symlinks are not publishable: " + str(relative))
        if not path.is_file():
            continue
        content = path.read_bytes()
        sha = hashlib.sha256(content).hexdigest()
        entry = {"sha256": sha, "md5": hashlib.md5(content).hexdigest(), "size": len(content)}
        files[relative.as_posix()] = entry
        blobs.setdefault(sha, path)
    return files, blobs


def json_bytes(value):
    return (json.dumps(value, sort_keys=True, separators=(",", ":")) + "\n").encode()


class Publisher:
    def __init__(self, client, bucket=BUCKET):
        self.client, self.bucket = client, bucket

    def read(self, key, optional=False):
        from botocore.exceptions import ClientError
        try:
            result = self.client.get_object(Bucket=self.bucket, Key=key)
            return json.loads(result["Body"].read()), result["ETag"]
        except ClientError as error:
            if optional and error.response["Error"]["Code"] in ("NoSuchKey", "404"):
                return None, None
            raise

    def put(self, key, body, **kwargs):
        md5 = hashlib.md5(body).digest()
        result = self.client.put_object(
            Bucket=self.bucket, Key=key, Body=body,
            ContentMD5=base64.b64encode(md5).decode(), **kwargs,
        )
        if result["ETag"].strip('"') != md5.hex():
            raise ValueError("Upload checksum mismatch: " + key)
        return result

    def stored_blobs(self):
        objects = {}
        paginator = self.client.get_paginator("list_objects_v2")
        for page in paginator.paginate(Bucket=self.bucket, Prefix="objects/"):
            for item in page.get("Contents", []):
                objects[item["Key"].removeprefix("objects/")] = {
                    "size": item["Size"], "md5": item["ETag"].strip('"'),
                }
        return objects

    def verify(self, files):
        stored = self.stored_blobs()
        for key, entry in files.items():
            if stored.get(entry["sha256"]) != {"size": entry["size"], "md5": entry["md5"]}:
                raise ValueError("Missing or corrupt release blob: " + key)
        return stored

    def activate(self, release, expected_current=UNSET):
        manifest, _ = self.read("releases/" + release + ".json")
        if manifest.get("release") != release:
            raise ValueError("Release manifest does not match its name")
        self.verify(manifest["files"])
        pointer, etag = self.read("_current.json", optional=True)
        current = pointer["release"] if pointer else None
        if expected_current is not UNSET and current != expected_current:
            raise ValueError("Current release changed; review before retrying activation")
        if current == release:
            return
        next_pointer = {
            "release": release, "previous_release": current,
            "activated_at": datetime.now(timezone.utc).isoformat(),
            "source_commit": manifest.get("source_commit"),
        }
        # R2 evaluates this precondition atomically with the pointer write.
        # A concurrent publish can never silently overwrite our base release.
        condition = {"IfMatch": etag} if etag else {"IfNoneMatch": "*"}
        self.put("_current.json", json_bytes(next_pointer),
                 ContentType="application/json", CacheControl="no-store", **condition)

    def publish(self, site, release, source_commit, stage=False, dry_run=False):
        files, paths = inventory(site)
        pointer, _ = self.read("_current.json", optional=True)
        base = pointer["release"] if pointer else None
        previous, _ = self.read("releases/" + base + ".json") if base else ({"files": {}}, None)
        # Keep historical routes and older hashed assets, matching the former
        # Pages publisher. A cached HTML document must retain its JS/CSS/images.
        merged = {**previous["files"], **files}
        existing, _ = self.read("releases/" + release + ".json", optional=True)
        if existing and (existing["files"] != merged or existing.get("source_commit") != source_commit):
            raise ValueError("Release names are immutable; choose a new release name")
        stored = self.stored_blobs()
        by_sha = {entry["sha256"]: entry for entry in files.values()}
        pending = [sha for sha in paths if sha not in stored]
        for sha, entry in by_sha.items():
            if sha in stored and stored[sha] != {"size": entry["size"], "md5": entry["md5"]}:
                raise ValueError("Stored blob is corrupt: " + sha)
        print(json.dumps({"release": release, "base_release": base, "files": len(merged),
                          "new_blobs": len(pending), "dry_run": dry_run}), flush=True)
        if dry_run:
            return

        def upload(sha):
            content = paths[sha].read_bytes()
            if hashlib.sha256(content).hexdigest() != sha:
                raise ValueError("Input changed during publication: " + str(paths[sha]))
            self.put("objects/" + sha, content, Metadata={"sha256": sha},
                     ContentType="application/octet-stream", IfNoneMatch="*")

        with ThreadPoolExecutor(max_workers=12) as pool:
            futures = [pool.submit(upload, sha) for sha in pending]
            for count, future in enumerate(as_completed(futures), 1):
                future.result()
                if count % 100 == 0 or count == len(futures):
                    print("Uploaded " + str(count) + "/" + str(len(futures)) + " blobs", flush=True)
        self.verify(merged)
        manifest = existing or {
            "version": 1, "release": release, "base_release": base,
            "source_commit": source_commit, "created_at": datetime.now(timezone.utc).isoformat(),
            "files": merged,
        }
        if not existing:
            self.put("releases/" + release + ".json", json_bytes(manifest),
                     ContentType="application/json", CacheControl="public, max-age=31536000, immutable",
                     IfNoneMatch="*")
        if not stage:
            # Preserve the base observed before uploading, including the empty
            # initial state. activate() also uses an atomic ETag precondition.
            latest, _ = self.read("_current.json", optional=True)
            if (latest["release"] if latest else None) != base:
                raise ValueError("Current release changed during upload; the new release remains staged")
            self.activate(release, expected_current=base)
        print(json.dumps({"release": release, "staged": stage, "files": len(merged)}), flush=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--site", type=Path, default=Path("build"))
    parser.add_argument("--release")
    parser.add_argument("--source-commit")
    parser.add_argument("--profile")
    parser.add_argument("--stage", action="store_true")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--activate", help="Activate an already verified release; also used for rollback")
    parser.add_argument("--expected-current")
    args = parser.parse_args()
    import boto3
    from botocore.config import Config
    profile = args.profile or (None if os.environ.get("AWS_ACCESS_KEY_ID") else "cloudflare")
    session = boto3.Session(profile_name=profile)
    client = session.client("s3", endpoint_url=ENDPOINT, region_name="auto", config=Config(
        signature_version="s3v4", max_pool_connections=16,
        retries={"mode": "adaptive", "max_attempts": 8},
        request_checksum_calculation="when_required", response_checksum_validation="when_required",
        s3={"addressing_style": "path"},
    ))
    publisher = Publisher(client)
    if args.activate:
        if not RELEASE.fullmatch(args.activate):
            parser.error("Invalid release name")
        if args.dry_run:
            parser.error("--dry-run cannot be combined with --activate")
        publisher.activate(args.activate, args.expected_current if args.expected_current is not None else UNSET)
        print("Active release: " + args.activate)
        return
    commit = args.source_commit or subprocess.check_output(["git", "rev-parse", "HEAD"], text=True).strip()
    release = args.release or datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ-") + commit[:12]
    if not RELEASE.fullmatch(release):
        parser.error("Invalid release name")
    publisher.publish(args.site.resolve(), release, commit, args.stage, args.dry_run)


if __name__ == "__main__":
    main()

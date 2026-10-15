"""Workflow safety and determinism checks; test image bytes are fixtures, not visual evidence."""
import csv
import importlib.util
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
import zipfile

SCRIPT = Path(__file__).resolve().parents[1] / "scripts" / "plan_catalog_batch.py"
spec = importlib.util.spec_from_file_location("planner", SCRIPT)
planner = importlib.util.module_from_spec(spec)
spec.loader.exec_module(planner)


class CatalogPlanTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.refs = self.root / "refs"
        self.refs.mkdir()
        (self.refs / "front.jpg").write_bytes(b"test-only image bytes")
        self.manifest = self.root / "manifest.csv"
        self.row = dict(zip(planner.FIELDS, ("SKU1", "blue", "front", "front.jpg", "approved-template", "3:4", "2", "product-lead")))

    def write(self, rows=None, fields=None):
        with self.manifest.open("w", newline="") as stream:
            writer = csv.DictWriter(stream, fieldnames=fields or planner.FIELDS)
            writer.writeheader()
            writer.writerows(rows if rows is not None else [self.row])

    def plan(self):
        return planner.plan_catalog(self.manifest, self.refs)

    def test_deterministic_under_row_reordering_and_real_reference_change(self):
        second = {**self.row, "sku": "SKU2"}
        self.write([self.row, second])
        first = self.plan()
        self.write([second, self.row])
        self.assertEqual(first, self.plan())
        self.assertEqual(first["live_submissions"], 0)
        self.assertEqual(first["candidate_count"], 4)
        self.assertEqual(first["jobs"][0]["output_stems"], ["sku1/blue/front/candidate-01", "sku1/blue/front/candidate-02"])
        (self.refs / "front.jpg").write_bytes(b"changed reference")
        self.assertNotEqual(first["plan_id"], self.plan()["plan_id"])

    def test_case_collisions_rejected(self):
        self.write([self.row, {**self.row, "sku": "sku1"}])
        with self.assertRaisesRegex(ValueError, "duplicate SKU"):
            self.plan()

    def test_missing_reference_or_field_rejected(self):
        for changes in ({"reference_paths": "absent.jpg"}, {"review_owner": ""}, {"output_count": "0"}, {"output_count": "2.0"}, {"aspect_ratio": "0:0"}):
            with self.subTest(changes=changes):
                self.write([{**self.row, **changes}])
                with self.assertRaises(ValueError):
                    self.plan()

    def test_paths_and_command_payloads_never_become_output_paths(self):
        for field, value in (("sku", "../escape"), ("sku", "$(touch pwned)"), ("shot", "CON"), ("colorway", "x/y"), ("reference_paths", "../front.jpg"), ("reference_paths", "/tmp/front.jpg"), ("reference_paths", "https://example.com/front.jpg"), ("reference_paths", "a\\front.jpg")):
            with self.subTest(field=field, value=value):
                self.write([{**self.row, field: value}])
                with self.assertRaises(ValueError):
                    self.plan()
        self.assertFalse((self.root / "pwned").exists())

    def test_reference_symlink_cannot_escape(self):
        outside = self.root / "private.jpg"
        outside.write_bytes(b"private")
        (self.refs / "escape.jpg").symlink_to(outside)
        self.write([{**self.row, "reference_paths": "escape.jpg"}])
        with self.assertRaisesRegex(ValueError, "symlink escapes"):
            self.plan()

    def test_header_empty_and_duplicate_references_rejected(self):
        self.write([], fields=planner.FIELDS)
        with self.assertRaisesRegex(ValueError, "at least one"):
            self.plan()
        self.write([{**self.row, "api_host": "https://evil.example"}], fields=(*planner.FIELDS, "api_host"))
        with self.assertRaisesRegex(ValueError, "header"):
            self.plan()
        self.write([{**self.row, "reference_paths": "front.jpg|front.jpg"}])
        with self.assertRaisesRegex(ValueError, "duplicate reference"):
            self.plan()

    def test_malformed_columns_and_quoted_rows_rejected(self):
        valid = ",".join(self.row[name] for name in planner.FIELDS)
        for header, row in (
            (planner.FIELDS + ("sku",), valid + ",SKU2"),
            (planner.FIELDS, valid + ",extra"),
            (planner.FIELDS, valid.rsplit(",", 1)[0]),
            (planner.FIELDS, valid.rsplit(",", 1)[0] + ',"unfinished'),
            (planner.FIELDS, valid.rsplit(",", 1)[0] + ',"owner"unexpected'),
        ):
            with self.subTest(header=header, row=row):
                self.manifest.write_text(",".join(header) + "\n" + row + "\n")
                with self.assertRaises((ValueError, csv.Error)):
                    self.plan()

    def test_reference_order_is_stable_and_empty_references_rejected(self):
        (self.refs / "detail.png").write_bytes(b"detail fixture")
        self.write([{**self.row, "reference_paths": "detail.png|front.jpg"}])
        first = self.plan()
        self.write([{**self.row, "reference_paths": "front.jpg|detail.png"}])
        self.assertEqual(first, self.plan())
        (self.refs / "empty.webp").touch()
        for paths in ("front.jpg|", "|front.jpg", "empty.webp", "./front.jpg", "nested//front.jpg"):
            with self.subTest(paths=paths):
                self.write([{**self.row, "reference_paths": paths}])
                with self.assertRaises(ValueError):
                    self.plan()

    def test_symlink_loop_rejected_with_row_context(self):
        (self.refs / "loop.jpg").symlink_to("loop.jpg")
        self.write([{**self.row, "reference_paths": "loop.jpg"}])
        with self.assertRaisesRegex(ValueError, "CSV row 2"):
            self.plan()
        output = self.root / "plan.json"
        result = subprocess.run([sys.executable, str(SCRIPT), str(self.manifest),
                                 "--reference-root", str(self.refs), "--output", str(output)],
                                capture_output=True, text=True)
        self.assertEqual(result.returncode, 2)
        self.assertIn("Plan rejected: CSV row 2", result.stderr)
        self.assertNotIn("Traceback", result.stderr)
        self.assertFalse(output.exists())

    def test_cli_success_failure_and_no_overwrite(self):
        self.write()
        output = self.root / "plan.json"
        command = [sys.executable, str(SCRIPT), str(self.manifest), "--reference-root", str(self.refs), "--output", str(output)]
        result = subprocess.run(command, capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(json.loads(output.read_text())["mode"], "offline_plan")
        before = output.read_bytes()
        self.assertEqual(subprocess.run(command, capture_output=True).returncode, 2)
        self.assertEqual(before, output.read_bytes())
        output.unlink()
        self.write([{**self.row, "reference_paths": "missing.jpg"}])
        result = subprocess.run(command, capture_output=True, text=True)
        self.assertEqual(result.returncode, 2)
        self.assertIn("CSV row 2", result.stderr)
        self.assertFalse(output.exists())

    def test_download_matches_reviewed_source(self):
        download = SCRIPT.parents[1] / "static/downloads/citation-gap-guides/plan_catalog_batch.py"
        self.assertEqual(SCRIPT.read_bytes(), download.read_bytes())

    def test_existing_output_symlink_is_not_followed(self):
        self.write()
        output = self.root / "plan.json"
        target = self.root / "not-created.json"
        output.symlink_to(target)
        result = subprocess.run([sys.executable, str(SCRIPT), str(self.manifest),
                                 "--reference-root", str(self.refs), "--output", str(output)],
                                capture_output=True, text=True)
        self.assertEqual(result.returncode, 2)
        self.assertTrue(output.is_symlink())
        self.assertFalse(target.exists())

    def test_download_bundle_matches_individual_files(self):
        directory = SCRIPT.parents[1] / "static/downloads/citation-gap-guides"
        sources = sorted(path for path in directory.iterdir() if path.suffix not in (".zip", ".txt"))
        self.assertEqual(len(sources), 12)
        with zipfile.ZipFile(directory / "catalog-starter-kit.zip") as bundle:
            self.assertIsNone(bundle.testzip())
            self.assertEqual(bundle.namelist(), ["catalog-starter-kit/" + path.name for path in sources])
            for source, entry in zip(sources, bundle.infolist()):
                with self.subTest(name=source.name):
                    self.assertEqual(bundle.read(entry), source.read_bytes())
                    self.assertEqual(entry.date_time, (2026, 10, 15, 0, 0, 0))
                    self.assertEqual((entry.external_attr >> 16) & 0o777, 0o644)
                    self.assertEqual(entry.compress_type, zipfile.ZIP_DEFLATED)

    def test_public_text_downloads_match_markdown_sources(self):
        directory = SCRIPT.parents[1] / "static/downloads/citation-gap-guides"
        sources = sorted(directory.glob("*.md"))
        self.assertEqual(len(sources), 4)
        for source in sources:
            with self.subTest(name=source.name):
                self.assertEqual(source.with_suffix(".txt").read_bytes(), source.read_bytes())

    def test_csv_download_column_counts(self):
        directory = SCRIPT.parents[1] / "static/downloads/citation-gap-guides"
        for source in sorted(directory.glob("*.csv")):
            with self.subTest(name=source.name), source.open(newline="", encoding="utf-8") as stream:
                rows = list(csv.reader(stream, strict=True))
                self.assertEqual(len(rows[0]), len(set(rows[0])))
                for line, row in enumerate(rows[1:], 2):
                    self.assertEqual(len(row), len(rows[0]), f"{source.name}:{line}")


if __name__ == "__main__":
    unittest.main()

#!/usr/bin/env python3
"""Validate a catalog CSV and write a deterministic OFFLINE plan. No API client."""
import argparse
import csv
import hashlib
import json
import re
import sys
from pathlib import Path, PurePosixPath

FIELDS = ("sku", "colorway", "shot", "reference_paths", "template_slug",
          "aspect_ratio", "output_count", "review_owner")
RATIOS = {"1:1", "3:4", "4:3", "9:16", "16:9", "2:3", "3:2", "4:5", "5:4"}
RESERVED = {"con", "prn", "aux", "nul"} | {f"{p}{n}" for p in ("com", "lpt") for n in range(1, 10)}


def token(value, field):
    if not re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9_-]{0,79}", value or "") or value.lower() in RESERVED:
        raise ValueError(f"{field}: use 1–80 ASCII letters, digits, hyphens or underscores; start with a letter/digit; avoid reserved names")
    return value


def reference(path_text, root):
    path = PurePosixPath(path_text)
    if (not path_text or "\\" in path_text or ":" in path_text or path.is_absolute()
            or any(part in ("", ".", "..") for part in path_text.split("/"))):
        raise ValueError("reference_paths: use relative paths within the reference root; no URLs or traversal")
    if path.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
        raise ValueError("reference_paths: expected JPG, PNG or WebP")
    actual = (root / str(path)).resolve()
    if not actual.is_relative_to(root):
        raise ValueError("reference_paths: symlink escapes reference root")
    if not actual.is_file() or actual.stat().st_size == 0:
        raise ValueError(f"reference_paths: missing or empty file: {path}")
    # Hashing proves which bytes were planned, not image quality or usage rights.
    digest = hashlib.sha256()
    with actual.open("rb") as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(block)
    return {"path": str(path), "sha256": digest.hexdigest()}


def plan_catalog(manifest, reference_root):
    root = Path(reference_root).resolve(strict=True)
    if not root.is_dir():
        raise ValueError("reference root must be a directory")
    jobs, seen = [], set()
    with Path(manifest).open(newline="", encoding="utf-8-sig") as stream:
        reader = csv.DictReader(stream, strict=True)
        if reader.fieldnames is None or len(reader.fieldnames) != len(set(reader.fieldnames)) or set(reader.fieldnames) != set(FIELDS):
            raise ValueError("CSV header must contain exactly: " + ",".join(FIELDS))
        for line, row in enumerate(reader, 2):
            try:
                if None in row or any(value is None or not value.strip() for value in row.values()):
                    raise ValueError("all fields are required; check column count")
                row = {key: value.strip() for key, value in row.items()}
                for key in ("sku", "colorway", "shot", "template_slug", "review_owner"):
                    token(row[key], key)
                key = tuple(row[name].lower() for name in ("sku", "colorway", "shot"))
                if key in seen:
                    raise ValueError("duplicate SKU/colorway/shot key (case insensitive)")
                seen.add(key)
                if row["aspect_ratio"] not in RATIOS:
                    raise ValueError("unsupported planning aspect_ratio")
                if not re.fullmatch(r"[1-8]", row["output_count"]):
                    raise ValueError("output_count must be an integer from 1 to 8")
                refs = [reference(value.strip(), root) for value in row["reference_paths"].split("|")]
                if len({ref["path"] for ref in refs}) != len(refs):
                    raise ValueError("duplicate reference path in row")
                jobs.append({
                    **{name: row[name] for name in ("sku", "colorway", "shot", "template_slug", "aspect_ratio", "review_owner")},
                    "references": sorted(refs, key=lambda ref: ref["path"]),
                    "output_count": int(row["output_count"]),
                    "output_stems": ["/".join((*key, f"candidate-{n:02d}")) for n in range(1, int(row["output_count"]) + 1)],
                    "status": "planned_not_submitted",
                })
            except (OSError, ValueError, RuntimeError) as error:
                raise ValueError(f"CSV row {line}: {error}") from error
    if not jobs:
        raise ValueError("CSV must contain at least one job")
    jobs.sort(key=lambda job: tuple(job[name].lower() for name in ("sku", "colorway", "shot")))
    canonical = json.dumps(jobs, ensure_ascii=True, sort_keys=True, separators=(",", ":"))
    return {
        "schema_version": 1,
        "mode": "offline_plan",
        "plan_id": hashlib.sha256(canonical.encode()).hexdigest(),
        "job_count": len(jobs),
        "candidate_count": sum(job["output_count"] for job in jobs),
        "live_submissions": 0,
        "approval": "required_before_any_live_execution",
        "jobs": jobs,
    }


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("manifest", type=Path)
    parser.add_argument("--reference-root", required=True, type=Path)
    parser.add_argument("--output", required=True, type=Path, help="new JSON path; existing files are never overwritten")
    args = parser.parse_args(argv)
    try:
        plan = plan_catalog(args.manifest, args.reference_root)
        with args.output.open("x", encoding="utf-8") as stream:
            json.dump(plan, stream, indent=2, sort_keys=True)
            stream.write("\n")
    except (OSError, ValueError, RuntimeError, csv.Error) as error:
        print(f"Plan rejected: {error}", file=sys.stderr)
        return 2
    print(f"OFFLINE ONLY: {plan['job_count']} jobs, {plan['candidate_count']} candidates planned; 0 submissions. {args.output}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

# Benchmark asset archive

The `raw/` and `sources/` directories contain the complete local generation archive: 131 core
benchmark outputs plus the synthetic source renders. They are intentionally excluded from the
website publication commit because the unoptimized archive is approximately 275 MB.

The predetermined public comparison outputs and source references are published as optimized
WebP files under `static/img/model-benchmarks/2026-09/`. Prompt IDs, output counts, costs, and the
display-output mapping remain available in `runs.json` and `scores.csv` one directory above.

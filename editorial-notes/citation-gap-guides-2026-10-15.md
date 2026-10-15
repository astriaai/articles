# Citation-gap guides: implementation and evidence

Reviewed October 15, 2026. This is repository implementation of the plan in `notes/citation-gap-content-plan-2026-10-15.md`, not a live release, new paid audit, citation improvement claim or production case study. The October 14 audit baseline is unchanged. The machine-readable companion maps all 14 intervention IDs to 44 distinct question IDs; intervention question counts overlap and are not additive predicted wins.

## Owned changes

Nine new guides have sequential editorial dates October 7–15, 2026:

- `blog/batch-product-photos-from-csv.md`
- `blog/fix-ai-product-photo-errors.md`
- `blog/photograph-clothes-with-phone.md`
- `blog/ai-product-photography-rights-checklist.md`
- `blog/product-photos-without-studio.md`
- `blog/product-photo-ad-variations.md`
- `blog/bottle-photo-lifestyle-images.md`
- `blog/kidswear-photography-without-model.md`
- `blog/measure-ai-product-photography-time.md`

Bounded updates touch only `blog/flat-lay-to-on-model.md`, `blog/consistent-ai-fashion-models.md`, and `blog/apparel-product-video-guide.md`. Their publication dates, existing covers and visibility settings are retained. Before editing, the implementer copied all three to `/tmp/citation-gap-implementer-baselines-2026-10-15/`; the parent also has independent task baselines. These permit separation from concurrent working-tree changes. No workshop, global UI/configuration, unrelated draft date/unlisted flag or audit baseline is changed.

Supporting work: `scripts/plan_catalog_batch.py`, `tests/test_catalog_batch_plan.py`, `tests/catalog-batch-plan.test.cjs`, the downloads under `static/downloads/citation-gap-guides/`, these two editorial records, and one necessary rights/legal row in `CONTENT-LEDGER.md`. No other ledger row is refreshed because this is not a full re-audit of every assertion in the three old guides.

## Evidence and boundaries

The batch planner is executable **offline only**, uses Python 3.9+ standard library, hashes local reference bytes, rejects unsafe paths/unknown columns/missing fields/duplicate job keys, writes deterministic job names and IDs, refuses an existing output path, and makes zero submissions. Its success does not validate image decoding, visual quality, product fidelity, rights or platform compatibility. Sample manifest paths deliberately require the reader's actual photographs. Byte fixtures in unit tests are test data, not visual demonstrations.

The current official connected Astria MCP tool schemas were read, and read-only `list_models` succeeded. The public batch guide and README use supported logical tool names and distinguish template slot/prompt-subset inspection, a separately approved bounded live pilot, receipts, pending/error checks, identical idempotent retries and accepted-output handoff. No live generation batch was submitted. No credential lookup, alternate API host or executable spreadsheet instruction is part of the planner. Casting/product/direction roles and new-SKU template reuse link to the published workshops rather than duplicate them.

The correction guide supplies a symptom-to-action procedure, not tested color or label repair results. The campaign guide and its matrix are a **proposed exercise**; no generated variants, ad experiment or winning campaign are claimed. The bottle guide is a source-preserving layered procedure; **no accepted bottle-generation demonstration is claimed**. Earlier failed supplement outputs are not embedded or republished. Kidswear uses flatlays, supports, detail views and measurements; no children are generated, adult bodies are not fit evidence, and no provider child-model support claim is made.

The time guide is a **blank matched-scope worksheet and method**. The actual measured production case remains **OPEN** pending authorized project data, complete preparation/setup/capture-or-generation/review/rework/handoff logs, acceptance evidence and permission to disclose. No before/after numbers or savings result have been invented.

## Primary-source checks

All checks below occurred October 15, 2026:

- [Astria terms](https://www.astria.ai/terms): conditional commercial use and allocation as between user and Astria; submitted-material rights; likeness consent; separate limited service-processing/training permissions and confidentiality. The article does not promise universal no-training, exclusivity or legal copyright.
- [Astria privacy](https://www.astria.ai/privacy): selected providers and connected applications, retention/deletion distinctions, archiving versus deletion, separate copies and disconnection. No single retention period or finalized customer DPA is asserted.
- [US Copyright Office announcement of Part 2](https://www.copyright.gov/newsnet/2025/1060.html): human authorship is relevant to US output copyrightability; prompts alone do not establish it. The article does not generalize US analysis to every jurisdiction.
- [EDPB small-business basics](https://www.edpb.europa.eu/sme/learn-the-basics/data-protection-basics_en): identifiable-person images are examples of personal data; the guide asks for project-specific scope/roles/lawful-basis/processing/transfer review rather than blanket legal conclusions.
- [Astria Image2Video documentation](https://docs.astria.ai/docs/features/video/): image/reference media modes differ; current connected-tool field names were separately checked. No unsupported duration or universal control claims are made.

## Media and provenance decisions

**New generation calls: zero. New generated photos/covers: zero.** The nine new guides use substantive text, tables and downloads. They do not need decorative images. Any later new article generation must use workspace **896 (Articles)** and supplied cleared references, with input/output visual fidelity review and the required resolution/provenance record.

The old `ArticleEvidence profile="video"` in the owned apparel guide pointed to workspace 602, source prompt 46434600 and video prompt 46608981 (Seedance 2 Fast). The source record `benchmark/video-models-2026-09/live-workspace-runs.json` labels the run `unjudged_calibration`. The implementer visually inspected the local source/first-frame image and a 1 fps contact sheet from the complete existing clip. The bag changes geometry/appearance, so the output was not selected as fidelity evidence. The module was removed **only from the owned guide**; the shared component, benchmark and other articles were not altered. These old runs are not new workspace-896 generations and are not newly promoted.

The apparel guide instead names the recorded [“Showroom walk” Academy lesson](https://www.astria.ai/academy/watch/showroom-walk/) with the image-animation walkthrough at **00:37**. Its public transcript was successfully retrieved and checked; the companion JSON records its hash. It shows selecting Animate image, reviewing the Video tab, specifying motion and checking settings. The guide does not adopt the recording's claims that simulated motion proves fit, that a prompt is fault-proof, or that an old model recommendation is permanent. This is a link to a recorded interface walkthrough; no new tutorial frame or generated product result is selected/embedded. All current controls are scoped to the live catalog and chosen mode.

## Actual validation

- `python3 -B tests/test_catalog_batch_plan.py`: **14 passed**, including malformed quoted CSV, symlink-loop failures, bundle/source parity, CSV widths, deterministic IDs/output names, changed-reference hash sensitivity, case collisions, missing input and bad counts, traversal/command payloads, symlink containment, unknown headers, CLI failure/no-overwrite and source/download parity.
- Focused `node --test tests/catalog-batch-plan.test.cjs tests/content-ledger.test.cjs`: **5 passed** (planner integration plus ledger checks). Task-owned relative article/download paths exist; explicit-path `git diff --check` passed.
- All seven CSV downloads parsed with equal row/header column counts. Forms and matrices remain blank or clearly planned, not fabricated live receipts or acceptances.
- Independent parent integration: **49/49 repository tests passed after the delegated follow-up**, `yarn typecheck` passed, and the real production `yarn build` passed after `yarn clear`. Existing unrelated truncation warnings remain for `real-estate.md` and `multi-pass-inference.md`; no task route or broken-link failure remains.
- All 12 rendered routes passed canonical, sitemap, indexability, single-H1, single-BlogPosting, visible FAQ question/schema and local href/src checks. Every rendered table has consistent row widths. New source dates are sequential October 7–15 and no date is in the future.
- Desktop browser screenshots and DOM/accessibility review covered the catalog kit and rights guide. This found and fixed an unescaped table pipe; the rebuilt catalog table retains all three cells and the complete reference-path instruction. Static download links use the repository's `pathname:///articles/downloads/…` convention after the first build exposed trailing-slash rewriting.
- The 12-file `static/downloads/citation-gap-guides/catalog-starter-kit.zip` passes ZIP integrity and byte parity against all individual downloads. An extracted kit ran with an owned local jacket reference and produced one offline job, zero submissions. No product image is bundled.
- Latest audit integrity check: **205/206 manifest hashes match**. The only mismatch is unrelated concurrent `.gitignore` additions for `/.wrangler` and `/.venv-r2`; this task leaves them untouched. All committed questions, results, raw answers, citation research and audit scripts still match their archived hashes.

No commits, push, deployment, paid batch audit or main-sdbooth modifications were performed. The new source dates are editorial source dates. **Actual release dates are null** until a release occurs. Re-run the comparable citation audit only after release/crawl and keep citation share, answer citation rate and question coverage separate.

## User-requested delegated follow-up

Three sub-agents completed disjoint scopes on October 15: capture/accuracy/rights/launch/kidswear; production/campaign/bottle/time and the three existing updates; and catalog planner/downloads. They compared the pages with the original questions and plan, added missing direct FAQs and execution detail, and corrected inherited guarantees and mismatched answers. Kidswear already satisfied its plan and was left unchanged.

The catalog fixes reject malformed quoted CSV and report symlink-loop failures without a traceback. The live handoff uses a separately planned one-row pilot with output_count=1, exactly one template prompt per row, and a separately reviewed plan for expansion. Current create_reference schema was read; upload and reusable-reference creation are explicitly separate. The launch form now records release ownership and source/pilot/correction/release cutoff times. All 12 ZIP entries match their individual downloads; the JSON records the final bundle hash.

The parent independently ran 14 Python tests, all 49 repository tests, typecheck and a successful production build after integration. All 12 rendered routes passed link/date/canonical/sitemap/schema checks; complete emitted FAQ questions and answer text match visible page text, and all table rows have consistent widths. Earlier screenshot review covered the shared layout; this follow-up did not repeat screenshots or create media. No evidence status is upgraded: repair, campaign, bottle and measured-case outcomes still require actual project evidence. No staging, commits, push, paid generation, deployment or new citation run occurred.

## Publication preparation

User authorized publication on October 15. Production hosting sends `.md` requests to Rails, so four public `.txt` aliases now expose the exact Markdown download bytes through R2. Article links use these aliases; the ZIP retains its original 12 files and hash. A parity test covers all four. This avoids changing Worker routing or the main application's Markdown endpoints. The release is built from the clean published source plus this task's files; other unfinished local work is excluded. Actual release dates remain null until verified live.

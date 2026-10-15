# Workshop 1.4 implementation — 2026-10-15

Article: `blog/create-first-ai-lookbook-astria.md`. Implemented as an unlisted article for review; not deployed. No other articles, shared components, index categories or existing edits were changed.

## Source and version binding

- Current locked narration: `/Users/burg/git/astria-course/docs/academy-preproduction/lookbook/1.4/narration-locked.tts.txt`.
- Current project and journal: `webinar-builder/script/projects/academy-1-4.yaml` and `academy-1-4.journal.md` in the read-only course repository.
- Fresh published manifest and recording retrieved for the full batch on 2026-10-15. Current video: `https://www.astria.ai/academy/videos/academy-1-4/_full-draft.eb9a6063.mp4`, 1920×1080, 98.1 seconds. It shows Face=Saoirse and the reworked outfit.
- This supersedes the initial pilot’s 89.1-second `_full-draft.89394562.mp4` keyframes and old L0 outputs. The old video hash/version remains in `previousSourceVideo` for audit; old screenshots/results have been replaced in the public asset paths.
- The course journal names finished rework `academy-1-4-assembly-20261014-170927.mp4`; that local file remains absent. The article binds to actual freshly downloaded published media, not an assumed local assembly hash.

## Coverage and editorial changes

| Narration scene | Article treatment |
| --- | --- |
| 01 — purpose | Opening outcome: create product-page imagery from clothes, pose and background. |
| 02 — Lookbook | Step 1: Generate → mode menu → Lookbook; exact Top, Bottom, Jacket and Footwear labels. Brief definition of prompt added for readers arriving directly. |
| 03 — products | Step 2: shirt, trousers and shoes, in the same order; original references and populated squares. |
| 04 — pose/background | Step 3: stick figure or words, then public-library or uploaded background. Two separate settled keyframes. |
| 05 — settings | Step 4: model → aspect ratio → 2K → output count. Uses the recorded count of two. The video mentions 2:3, but the verified capture menu does not expose it; no unsupported 2:3 instruction is added. |
| 06 — generation | Step 5: Generate → original two reference-driven results; concise review and next-video link. |

No invented settings, additional tools, pricing, success claims, new generation or new workflow branches. No FAQ or unrelated SEO sections. Titles, description, headings, alt text and the existing lookbook-guide link carry the search intent. No links to planned but unwritten workshop articles.

## Visual provenance and review

Full keyframe crop geometry, timestamps, source/output hashes and reference IDs: `first-ai-lookbook-assets.json`.

Selected outputs are existing course generations from source workspace **744**, model CLI alias `nano-banana-2`: prompts **47266351** and **47266635**. Both native 1792×2400, requested 3:4 at 2K. Submitted reference IDs are shirt 5892939, trousers 5892940, shoes 5892941, background 5892943 and Face 5896164. The pose was described in the text; the UI also demonstrates the stick-figure route. No jobs were submitted. Every future new article generation must use workspace **896**, Articles.

Receipts: `/Users/burg/git/astria-course/webinar-builder/assets/results/academy-1-4/L0.still.receipt.json` and `L0-b.still.receipt.json`. Both use the same semantic prompt and reference set; the second records seed 2. Financial fields remain internal and are absent from public content.

Original products: Bobo Choses shirt B226AD035, trousers B226AD072, shoes B226AK002. These are inherited course references for editorial demonstration; the inspected receipt does not establish a separate commercial reuse license. Pose and concrete-brown background come from the Astria public library as documented by the receipt. No new source was scraped or uploaded.

Inspected source dimensions: shirt 1500×2000; trousers 750×1000; shoes 2000×2667; pose 864×1184; background 1792×2400. The trouser and pose references are inherited lower-resolution course assets; neither was upscaled. The product strip downsamples the three products into 500-pixel-wide cells. Original-sized individual reference files are retained alongside it. Use higher-resolution originals for any future generation.

Visual review: inspected all three garment sources, pose/background keyframes, both original generated images and every selected final keyframe. The selected outputs preserve the recognizable cream lace collar/hem, burgundy trouser shape, and tan shoes with colored laces. Their garment placement is useful at article size. They illustrate the first-generation stage, not guaranteed pixel-exact reproduction or persistent model identity. The two current rework results are selected; the initial pilot’s brown-haired results are no longer featured.

Keyframes crop to the relevant controls without changing UI contents. No instructional arrows or drawings were necessary. Incidental text-only casting portraits were neutrally redacted from four UI crops under the article image policy; Face labels and all instructional controls remain intact. Exact crop-relative redaction boxes are in the asset manifest and the article states that the Face previews are hidden. Clean source frames remain in the local task scratch directory; the immutable video URL, source-video hash, timestamps and crops allow re-extraction. WebP files retain their crop dimensions; no enlargement is applied. Existing article lightbox provides full-size inspection.

## Validation

- Article compiled and its production HTML was generated successfully. Metadata includes the intended title, description and canonical, plus `noindex, nofollow` while unlisted.
- Checked all nine displayed article images for local file existence, alt text and correct native dimensions. All five numbered steps, the existing internal guide link and absence of pricing figures passed scoped checks.
- Browser review passed at 375 px, the default 471 px panel, and 1280 px desktop. No page overflow; settings table remains within the mobile viewport. Result images stack on mobile and sit side by side on desktop.
- Verified all nine images load, image space is reserved before lazy loading, and the result lightbox opens with a working source-reference link and closes normally.
- Local preview: `http://127.0.0.1:3414/articles/create-first-ai-lookbook-astria/`. Review screenshots: `/tmp/astria-workshop-1-4/desktop-preview.png` and `/tmp/astria-workshop-1-4/mobile-preview.png`.
- Full `npm run build -- --out-dir /tmp/astria-workshop-1-4-build` cannot pass the repository-wide link check: 11 pre-existing broken links in five other articles point to scheduled articles filtered out by `plugins/publish-schedule.js`. None originates in this article. Existing missing-truncation and untracked-update-date warnings are also unrelated. No shared configuration or unrelated content was changed to bypass them.
- Not deployed or committed. Source article and assets remain available for review.

## Publication date revision — 2026-10-15

User requested dates staggered backwards. The 15-article series runs daily in lesson order from 2026-10-01 (1.1) through 2026-10-15 (2.6). Article 1.4 is dated 2026-10-04 in its front matter; it remains unlisted. Planned dates for the remaining articles are recorded in `publication-schedule.json`, without creating empty article files.

## Full-batch integration — 2026-10-15

Rebound six video keyframes to the current published cut (27.5, 48, 52, 57, 70 and 83.5 seconds), added the observed Face-selection step from the recording, replaced the two L0 files with the consistent-cast rework outputs, retained the October 4 date, and connected previous/next lessons and the workshop collection. Fresh batch render and visual QA will supersede the pilot validation record above.

Final batch verification passed for all 15 rendered article routes and 70 figures, their dates, sibling/collection links, physical image dimensions, asset hashes, noindex draft status, desktop and 375px mobile layouts. Image viewer and source-reference links work. Whole-site build still stops on 11 existing broken links from five unrelated articles. See `batch-review.json` for the full integration record. All articles remain unlisted; nothing deployed or committed.

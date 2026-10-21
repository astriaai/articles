# Lynx article review — 2026-10-21

Article: `blog/lynx-product-details.md`. Status: unlisted local review; no publication, push or deployment authorized. Date uses the user’s local calendar date. Remove `unlisted` only after editorial approval. Unlisted is discoverability control, not a deployment barrier: do not deploy this shared checkout until this draft is approved or excluded.

## Scope and provenance

Explicit brief: reuse all 17 image prompts from workspace 1092, “Lynx — Detail Lab”, slug `argus-detail-lab-email-academy`; no new media generation. This overrides the normal workspace 896 convention and normal exclusion of text-only fixtures/unsuccessful outputs. Five synthetic product-only references are clearly labeled inputs, not claimed as reference-driven generation examples. The unsuccessful early Botanical caption is labeled as a limitation. No music/video prompts or loose files from `~/git/out` are used.

Source inputs: `/private/tmp/lynx-workspace-campaign/article-examples.json`, backed by `/private/tmp/lynx-campaign/workspace-prompts.json`. All 29 frame/reference files were downloaded directly from the exact URLs in that manifest. `source-manifest.json` records source URLs, SHA-256, dimensions, normalized and pixel crop coordinates, prompt text, configured model/resolution and individual visual observations. Source bytes were fetched before derivative WebP encoding. Full-frame web images cap the long edge at 2400 px. Crops use identical normalized coordinates per pair, never enlarge weak source pixels, and have no manual retouching.

All five product sources and all twelve matched before/finished pairs were visually reviewed in full and detail contact sheets. Includes source prompt IDs 47336169, 47336168, 47336167, 47336166, 47336164 and all twelve on-model IDs in the brief. Product reference tunes map to 5929777–5929781. Prompt 47345816’s debug image is exactly 47337975’s finished image and is explicitly described as an additional pass.

## Claims and activation

User-approved positioning: reference-led automatic refinement of logos, text, prints, plaques and fine details; no manual image edits required. Activation appears before the excerpt break and in steps/FAQ: attach references → cog wheel (Advanced options) → Lynx → Generate. Manual areas appear only as optional advanced control.

Implementation read-only check: `/Users/burg/git/sdbooth/app/javascript/shared/PromptComposerPanel.tsx` has the Lynx boolean in Advanced options; `app/javascript/shared/arg_flags.ts` handles `--lynx`. Existing tune records contain automatic area metadata for several references and authored regions for Botanical/ORMA, so these fixtures are not presented as a controlled automatic-only benchmark. They demonstrate the feature’s output behavior. No perfect-fidelity, universal success or competitor claims. Own-product workflow needs no CONTENT-LEDGER row. No prices or credit quantities appear publicly.

## Public links

Ordinary `/prompts/:id` URLs redirect anonymous requests to sign-in, even for Gallery entries. Do not embed those as public examples. Public Gallery verification is recorded in `public-links.json`; article links must target verified Gallery filters/anchors. Local assets remain self-contained for review.

## Validation and preview

- `yarn test`: 48 tests passed.
- `yarn typecheck`: passed, including the final linked example data.
- `yarn build`: client/server compiled and Lynx HTML emitted; strict build then failed solely on the pre-existing `collaborative-ai-studio` → future-dated `ai-creative-production-pilot.md` broken link. No unrelated source was edited to bypass it.
- Separate review build: temporary config spread the current repository config and changed only `onBrokenLinks` to `warn`; output `/private/tmp/lynx-article-preview`. This completed with the same unrelated warning. The temporary config was removed afterward.
- `yarn audit:search` on the first built output: passed. `python3 scripts/audit-search-access.py --build /private/tmp/lynx-article-preview`: passed on final preview output. Explicit article audit confirmed FAQ and three-step HowTo match visible copy, with only the intentional noindex status for review.
- Manual coverage audit: exactly 12 requested on-model prompt IDs, five requested reference prompt IDs, 53 matching local image assets, 17 verified public Gallery links; no cross-prompt substitutions.
- Browser review: desktop 1280×720 and mobile 390×844; no horizontal mobile overflow. Scan view switches successfully, and ArrowRight moves the slider from 50% to 51%. Additional variants and full-frame sections use native disclosure controls.
- `node scripts/content-review.cjs`: ran; existing third-party fact-check entries are overdue, outside this own-product article’s scope.

Live local review: `http://127.0.0.1:3020/articles/lynx-product-details/` (server session remains running). Restart with `yarn serve --dir /private/tmp/lynx-article-preview --port 3020 --host 127.0.0.1 --no-open` if needed. Screenshots: `preview-desktop.png`, `preview-mobile.png`, `preview-mobile-comparison.png`. Compact outcomes: `validation.json`.

No Git commit, push, deployment, email send, media generation or visibility mutations were performed by this article task. The parent task’s Gallery visibility changes were read-only verified.


## User revision: VELUNE long shot

The latest request supersedes the earlier no-new-media instruction for one VELUNE trial: put ORMA first, feature Botanical Atlas prompt 47345816, and attempt a more demanding VELUNE environmental long shot using a location reference. Existing studio VELUNE pair is not evidence of a dramatic correction. New trial remains in workspace 1092 to keep the explicitly requested Lynx demonstration together. Location 4241166 is a saved user-library reference (white sofa, wood paneling, ceramics), inspected at 7588×6277; original external rights provenance is not documented, so its source image is not embedded in the article. Public Sienna person reference 3994556 and VELUNE product 5929780 were also inspected. Default model and 4K support were checked live. Any added article comparison must use the new prompt’s own debug_images and images and be captioned only after visual review.


### Further user correction

User judged 47379097’s logo inaccurate and requested another run on the same image. Keep the first long-shot result out of the public article. Submitted native image-menu Apply Lynx on its finished frame, creating 47379246; scene, prompt and references stay unchanged. This uses the same frame rather than generating a different composition. MCP lacks the native image-index duplicate capability; local CLI is unavailable, so the supported Astria browser action was used. Review the next result against both the actual product reference and this exact source frame before selection.


### Final review of same-image repeat

47379246 completed; its exact debug image is 47379097’s finished frame. The wordmark remains readable but the crescent is sideways and the dot below it, while the product reference has an upward-facing crescent and dot above. No adequate emblem correction; both new trials remain internal and VELUNE stays excluded. The article now features four references and eleven matched output pairs, with ORMA first and Botanical Atlas 47345816 as its default. Full result and native-crop comparison are under `trials/`. No Gallery visibility changes were made.


## Composer activation video

Added a 14.5-second silent instructional MP4 near the beginning of the article, with native controls, a poster and English caption track. Captured 72 real CUA browser frames while opening Advanced options, switching Lynx from off to on, and closing the menu to show the Lynx indicator beside Generate. The clip points to Generate without submitting a job. Uses the already-attached ORMA and Sienna references in workspace 1092. Account navigation and billing/operation metrics are outside the crop. Instruction captions and pointer/click overlays are composited over native-resolution live UI capture; no synthetic UI or generated imagery. `composer-demo.json` records capture actions/timing, crop and encoding. `build-composer-demo.py` reproduces composition from temporary capture frames.

QA: inspected beginning, menu-off, menu-on and final states; H.264, 1200×640, 30 fps, 14.5s, about 1.2 MB, no audio. Article browser playback confirmed readyState 4 and playback advancing to 11.6 seconds with no media error. Final preview build and search/schema audit passed; 48 repository tests passed. The preview build retains the existing unrelated collaborative-ai-studio broken-link warning. No publication or push.


## Botanical Atlas simplification

Per user review, removed collapsed Botanical Atlas examples 47337975, 47340448 and 47336198 from the public component data; only 47345816 remains. Its matched before/finished association is unchanged. Updated article counts to eight output pairs and four references and removed prose/FAQ descriptions of excluded variants. Original provenance remains in the internal source manifest.


## Reader-facing identifiers removed

Removed prompt, reference and workspace numeric identifiers from visible article prose, captions, disclosure labels, Gallery link text and image alt text. Examples now have descriptive labels. IDs remain in source data, exact Gallery URLs, asset filenames and editorial records for reproducibility.


## Features category

User requested a new Features tag instead of Guides. Defined `features` in `blog/tags.yml`, added its matching index category tab, and changed the Lynx article to `tags: [features]`. Existing tags and other articles are unchanged.


## One example per reference

Removed every remaining alternate output from public data, keeping ORMA 47336203, Botanical Atlas 47345816, ASTRIA Atelier 47340415 and FIELD CLUB 47340410. Removed all disclosure controls, including the complete-frame disclosure. Each reference now has one always-visible comparison and direct links to its full before and finished frames. Counts and surrounding copy now describe four references and four pairs.


## Publication approved

User authorized commit and publication. Build the exact current production source commit 796ba69fc433df4ea8fec7a257eb105aa3b7be36 plus only the Lynx article, Features tag/tab, four selected comparisons, activation video and internal audit records in an isolated managed worktree. This preserves production content and avoids publishing unrelated changes from the shared checkout. Remove the article’s unlisted flag for public indexing. Strict build, tests, typecheck, search audit and release preservation checks must pass before activation.


### Release verification

Strict build, 48 tests, TypeScript and search/schema audit passed on the isolated production baseline plus task files. All 154 production sitemap URLs remain; only the Lynx article and Features category are added. Article is indexable, appears on the article index, has four comparisons and no collapsed examples or visible prompt IDs. Release changes include only the approved task and generated site updates.

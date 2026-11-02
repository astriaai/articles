# Darkroom Color match article notes

- Article: `blog/darkroom-color-match.md`
- Publication date: 2026-11-01.
- Scope: Astria product workflow guide; no third-party claims or content-ledger entry required.
- Public corroboration: https://www.astria.ai/updates/107, reviewed 2026-11-01.
- Implementation checked in `/Users/burg/git/sdbooth/app/javascript/darkroom/`: `ColorMatchControls.tsx`, `ColorMatchEditor.tsx`, `colorMatch.ts`, `useColorMatch.ts`, and `DarkroomApp.tsx`.
- Save/export labels and behavior checked in `/Users/burg/git/sdbooth/app/javascript/shared/ImageExportActions.tsx`.
- Verified details: Amount and Tone range 0–100 and default 100; Tone carries reference lightness; four-area limit; click to include and Shift-click to subtract; prompt references, uploaded references, same-photo source and solid-color source; still images only; selections are session-local and excluded from copy/paste grading settings; PNG download and Save to prompt.

## Visual provenance

- Asset: `static/img/darkroom-color-match/color-match-controls.png`.
- Source: user-supplied screenshot `codex-clipboard-c6d3cf65-8ff5-48b0-9a12-3cd0ef877ddf.png`.
- Native resolution: 636 × 436. Copied unchanged and displayed no wider than its native width.
- Visually reviewed: control text, swatches, selected Tone field, edit/remove icons, Add area and section Reset are readable.
- Selection rationale: documents the exact controls requested by the user; presented as a UI screenshot rather than a color-fidelity result.
- The control screenshot is not a generated image. Its workspace, prompt ID and generation model are not applicable.

## Existing workspace examples added 2026-11-01

User requested visual examples from existing public workspaces and no new generations. Both examples below reuse reference-driven generations and apply the actual production Darkroom Color match UI. No generation requests were submitted, no source prompts were changed, and no edits were saved back to the public workspaces. Outputs were downloaded locally via Darkroom's PNG button.

### Maison Urban dress

- Public workspace: https://www.astria.ai/w/maison-urban, workspace 6.
- Existing prompt: 46627867, model Nano Banana 2.1 (4180298), requested 4K. Prompt includes dress 3907553, bag 3907242 and person 3904080 as references.
- Before: https://mp.astria.ai/8al1c83g8nmhcwx4glx8rv7bkus4, 5504 × 3072.
- Product reference: tune 3907553, first image https://mp.astria.ai/h8irgzp0a4r8ancy73t1fe7aphd0, 1440 × 2160. Back-view packshot of the same yellow dress.
- Production UI operation: selected dress at visible viewport point (300,443), then reference fabric at (708,407); full garment selection confirmed visually. Amount 100, Tone 100, all other Darkroom controls left at defaults. Export 5504 × 3072.
- Selection rationale: clear dress with broad visible fabric, strong fashion composition, original reference available. The adjustment is subtle and is described as such. Skin, bag and room remain visually consistent; fabric folds and edges inspected.

### America Basics trousers

- Public workspace: https://www.astria.ai/w/america-basics, workspace 54.
- Existing prompt: 47329455, model Nano Banana 2.1 (4180298), requested 2K with Argus processing. Used its Final layer, first image. Product reference tokens in prompt: shirt 3979270, trousers 3979266, shoes 3988313, person 3979589.
- Before: https://mp.astria.ai/unvvdxp6y2fr2944bw1hk1nkmmn8, 4915 × 7324.
- Product reference: tune 3979266, https://mp.astria.ai/n29loyyd5bql30ytk3a032i4209q, 1500 × 2000.
- Production UI operation: selected trouser reference thumbnail, clicked trousers at (270,573), then product trousers at (680,330). Amount 100, Tone 100; all other grading settings at defaults. Export 4718 × 7031 (the browser export's native dimensions).
- Selection rationale: useful subtle warm-to-cool charcoal correction, isolated trousers against a light background, visible waist and folds. Shirt, skin and background visually inspected alongside the garment.

### Asset preparation and review

- Original files and raw PNG exports retained at `/tmp/darkroom-examples/` for this session.
- Article derivatives: `static/img/darkroom-color-match/{maison,america}-{reference,before,after}.webp`.
- Web derivatives use a maximum 2560 px long edge. Reference images use WebP quality 92; comparison pairs use lossless WebP to avoid unrelated compression differences. Downsampling/encoding only, no upscaling, synthetic recoloring or retouching outside Darkroom. Both sides retain their identical Darkroom export framing.
- Source and result images visually reviewed individually; use article comparison controls for the subtle adjustments. Exact dimensions and hashes are recorded in `darkroom-color-match-assets.json`.
- New generations: 0. The workspace 896 rule applies to new generations; these are existing public workspace images explicitly selected by the user for reuse.

## Alignment correction 2026-11-01

The initial America Basics before image was a direct 4915 × 7324 JPEG download, while the Darkroom PNG export was 4718 × 7031 and had visibly different framing. Resizing both to 1718 × 2560 did not align the pictured subject. This was an editorial comparison error, missed in the initial visual review.

Replaced both examples' before images with uncorrected PNG exports from the same production Darkroom route, using the same prompt image and default grading controls with no Color match areas. The America Basics baseline is 4718 × 7031; Maison Urban is 5504 × 3072. Each now matches its corresponding corrected export dimensions and geometry. After images remain the actual Color match exports from the original browser sessions; no warping or retouching was used to align them.

For America Basics, a 4000 × 3500 crop at (0,0) of the native baseline and corrected PNGs has zero differing pixels. At article resolution, the 1500 × 1200 upper-body crop also has zero differing pixels. For Maison Urban, a 280 × 240 face/hair crop at (800,20) in the web derivatives has zero differing pixels. See `darkroom-color-match-alignment.json`. Both pairs were encoded with identical downsampling settings and lossless WebP. Updated source/export hashes are in `darkroom-color-match-assets.json`.

The earlier direct-download dimensions and URLs above describe the original prompt assets, not the replacement before derivatives. Raw replacement baselines: `/tmp/darkroom-examples/america-baseline.png` and `/tmp/darkroom-examples/maison-baseline.png`.

## Captioned interface walkthrough — 2026-11-01

- Video: `static/video/darkroom-color-match/walkthrough.mp4`, 1280×816, 68.8 seconds, H.264, no audio. English VTT and burned-in instructions included.
- Real production browser interaction at `https://www.astria.ai/prompts/47329455?ws=54`, using the existing America Basics final image and trousers reference documented above. No generations and no Save to prompt writes.
- Shows Darkroom, Color match, Add area, product reference, photo and reference region clicks, Done, Amount 50 then 100, Tone 0 then 100, holding Before, and actual PNG download (`darkroom (4).png`).
- Captured with CUA screenshot sequences around actual UI actions, paced at 5 source frames/second and encoded at 30 fps. This is an edited, captioned interface walkthrough rather than a continuous native screen recording. The CUA browser exposed no native recording capability. Used the pacing principles in the playwright-demo-recordings skill with CUA instead of launching Playwright.
- Retook steps 2–3 with the Color match controls visibly scrolled into view. No UI was recreated. Cyan circles are editorial click-location highlights, not app controls.
- Reproduction: `editorial-notes/darkroom-walkthrough/render.py`, capture beat manifest and final timeline alongside it. Raw screenshots are in `/tmp/darkroom-walkthrough/frames` (temporary local audit inputs).
- Visual review: checked keyframes for selections, values, Before comparison, and export state. No pricing or account billing appears in the final frames.

## Three clearer replacement examples — 2026-11-01

User found the yellow dress change too subtle and requested three or more other examples. Replaced that public comparison with three new comparisons and changed the article cover to the sweatshirt. Kept the America Basics example and walkthrough. No new images generated, no prompts modified, and no results saved to the workspaces.

All three use existing reference-driven Nano Banana 2.1 (4180298) generations requested at 2K. Before and after were each exported with PNG from the same production Darkroom session, then encoded losslessly to WebP at native resolution without cropping, scaling or external recoloring. Reference derivatives use WebP quality 92. Candidate source URLs, reference IDs and original prompts are in `darkroom-color-match-candidates.json` and `darkroom-color-match-maison-candidates.json`; selected derivative dimensions, hashes and alignment checks are in `darkroom-color-match-new-examples.json`.

- **Great Sports sweatshirt**: workspace 60, template `sport-shirt-2`, prompt 35958162, first image `https://mp.astria.ai/jeuumluji6ey8nkp03teqxrwk6j2`. Reference 3997192, first/front image `https://mp.astria.ai/x9hypq2c6ah182qim4ivuk3veb11`. Photo click (260,540), reference (710,400). Amount 100, Tone 100. Native pair 1696×2528, reference 2000×2000. Chosen for broad visible blue panels and a distinct shift toward violet-blue. Reviewed black/white stripes, garment folds, skin and background. A 1000×650 region at (500,0) has zero differing pixels.
- **Maison Urban patterned knit**: workspace 6, template `zara-shirt` / current UI `urban-shirt`, prompt 35191900, first image `https://mp.astria.ai/o1pbsjg2le42aqhk2tz0hy85a34b`. Reference 3907023, `https://mp.astria.ai/sfijvktmt7vgu8gbg41chg1quoq5`. Photo (223,590), reference (712,401). Amount 60, Tone 40 (full strength was too red/light). Native pair 1792×2400, reference 1440×2160. Chosen for visible olive-brown to warmer brown correction under outdoor lighting. Knit geometry and texture remain intact; the article explicitly notes that lighter patterned yarns warm too. A 1792×900 upper region has zero differing pixels.
- **Great Sports jacket close-up**: workspace 60, template `sport-jacket`, prompt 35961858, first image `https://mp.astria.ai/wrjrecw6rihtqqp8o0h77qh2sopv`. Reference 3994813, first/front image `https://mp.astria.ai/db1hg42p6riwbxmi3jdaav6id3wl`. Photo (268,482), reference (751,324), Shift-click skin (291,155) and neck (182,211) to refine mask. Amount 100, Tone 100. Native pair 1696×2528, reference 2000×2000. Chosen for large visible neutral fabric with a pinker-beige correction. Reviewed collar, seams, zipper, neck and background. A 500×350 face region at (650,0) has zero differing pixels. Final after export is `darkroom (13).png`.

Rejected the medium jacket portrait 35961852: initial mask spilled onto pale shirt and caused visible artifacts. Its temporary exports are audit-only under `/tmp/darkroom-candidates/jacket-{before,after}.png`; they are not in the public article. Also rejected the first close-up mask until skin/neck exclusions were added. Raw selected exports are `/tmp/darkroom-candidates/{sweatshirt,knit,jacket-detail}-{before,after}.png`.

## Lead comparison — 2026-11-02

America Basics, public workspace 54. Selected the first existing render from prompt 35787661 (`https://mp.astria.ai/8qhr967f615y82dplxode047k6zp`, 1632 × 2449, model ID 1504944). Its original denim product reference is tune 3979131, `goods_483983_sub14_3x4 copy` (`https://mp.astria.ai/y0z2a7fc6z6mmrobrtkpdswl5gwa`, 1500 × 2000). The prompt explicitly includes this tune as the pants. The original rendering is visibly pale gray-blue against the deep blue reference. The closer-fitting leg is a separate pre-existing geometry difference, identified in the article.

The first panel is a crop from the actual product packshot. The middle panel is an untouched baseline PNG export from production Darkroom. The final panel was exported from the same session after selecting both trouser legs (photo click 219,481) and the attached denim (reference click 678,335), Amount 100 and Tone 100. No other grading, generation, or prompt writes. Both exported views were cropped identically to 800 × 1090 at +415+1210 and encoded losslessly. Reference crop 960 × 1308 at +270+354, downsampled to 800 × 1090. Reviewed references, raw preview, two-leg selection and final three-panel view at article size. Chosen for a conspicuous change in garment lightness and saturation while preserving the render's folds and pose.

Alignment check on the native denim exports: the full-width upper 1632 × 1200 region above the trousers has zero differing pixels (ImageMagick AE). All three published panels are 800 × 1090.

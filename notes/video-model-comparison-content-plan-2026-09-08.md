# Astria video-model comparison content plan

**Prepared:** September 8, 2026  
**Research capture:** September 8, 2026  
**Scope:** Current video-model families exposed in Astria, with important market models included for context  
**Audience:** Fashion brands, creative teams, photographers, studios, performance marketers, and developers choosing a model for commercial video  
**Status:** Editorial and benchmark plan. No model has been declared an Astria benchmark winner and no article in this plan has been published.

## Implemented evidence layer

The primary calibration set now uses the exact reference-aware prompt from the **Live** workspace (workspace 602, source prompt 46434600):

- `benchmark/video-models-2026-09/README.md` documents the full reference block, timed motion block, run ids, costs, latency, delivered file properties, compatibility limits, and review protocol.
- `benchmark/video-models-2026-09/live-workspace-runs.json` is the machine-readable manifest; `live-workspace-scores.csv` is deliberately unjudged until blinded review.
- `static/video/model-benchmarks/2026-09/live-workspace/` contains playable outputs from Seedance 2 Fast, Seedance 2.5, Wan 3.0, MiniMax H3 Max, Kling 3.0 Standard, FLUX 3 Video, and Veo 3.1 Lite, plus each run's generated reference-conditioned first frame.
- Five models use the exact 9-second prompt. Kling uses a disclosed 480-character version because blank lines incorrectly activate Astria's Kling multi-shot parser; Veo uses a disclosed 8-second timing variant because its endpoint does not accept 9 seconds.
- `src/components/VideoModelComparison` is a reusable 16:9 side-by-side player using familiar native browser controls. It does not crop, stretch, upscale, or re-encode source files.
- The older six-second synthetic-still run remains archived in `runs.json` and `scores.csv`; its outputs are not mixed with the primary Live comparison.

This is a qualification sample, not a published winner. The next full benchmark still needs three outputs per finalist and blinded review.

### Gallery, workspace, prompt, and template coverage

Each production-oriented article should pair its controlled benchmark with an inspectable Astria workflow source. The implemented benchmark README now maps four public examples:

| Production track | Public workspace | Reusable template | Source prompt |
| --- | --- | --- | --- |
| Adult fashion motion | [Dark Swimwear](https://www.astria.ai/w/dark-swimwear) | [Swimsuit Set 1](https://www.astria.ai/p/swimsuit-set-1) | [40584408](https://www.astria.ai/prompts/40584408?ws=368) |
| Beauty packshot | [Beauty](https://www.astria.ai/w/beauty) | [Beauty](https://www.astria.ai/p/beauty) | [45986211](https://www.astria.ai/prompts/45986211?ws=761) |
| Jewelry macro | [Jewelry Product Photography](https://www.astria.ai/w/jewelry-product-photography) | [Jewelry Ring](https://www.astria.ai/p/jewelry-ring) | [33498743](https://www.astria.ai/prompts/33498743?ws=297) |
| Garment packshot | [3D Ghost Packshots](https://www.astria.ai/w/3d-packshots) | [3D Packshots Dress](https://www.astria.ai/p/3d-packshots-dress) | [40128059](https://www.astria.ai/prompts/40128059?ws=268) |

The public example explains how a still or product source is prepared. The matched benchmark shows how the same neutral, synthetic source behaves across video endpoints. Keep those evidence types visibly separate, and never publish private customer prompts found through account-wide searches.

## Recommendation

Build this as a benchmark-led cluster, not a page farm.

Start with three durable pages:

1. **Which AI Video Model Should You Use in Astria?** — a task-based catalog field guide.
2. **How We Benchmark AI Video Models for Fashion and Product Work** — the reusable methodology and disclosure page.
3. **Best AI Video Models for Fashion and Product Video: Astria's 2026 Benchmark** — the results hub, published only after matched clips have been judged.

The useful opening position today is a set of hypotheses, not a verdict:

- **Start the text-to-video qualification round with Wan 3.0.** It leads the current Artificial Analysis text-to-video arenas both with and without audio, although the audio top three overlap statistically and generic preference does not prove product fidelity.
- **Start image-to-video value testing with MiniMax H3 Max.** It leads the current image-to-video-with-audio arena and its post-trained endpoint is materially cheaper in the benchmark provider's published comparison.
- **Use Gemini Omni 1.1 Flash as the conversational generation/editing candidate.** It accepts text, image, video, and audio context and is explicitly designed for iterative natural-language video editing.
- **Use Seedance 2.5 as the long-form, multimodal-reference candidate.** Its provider documents 30-second generations, extensions, large reference sets, and timestamp-level editing.
- **Use Kling 3.0 as the controlled performance and reference-consistency candidate.** Its strongest documented differentiators are multi-shot direction, identity/voice references, multilingual native audio, text preservation, and dedicated motion control.
- **Use Veo 3.1 as the short photoreal, native-audio candidate.** Its strongest documented case is realistic short shots with audio, reference images, first/last frames, and extension.
- **Use FLUX 3 Video as the flexible style, typography, and draft-to-final candidate.** The provider documents 20-second clips, native audio, multi-shot generation, multilingual dialogue, typography, and a draft mode designed to preserve the approved composition into the final render.
- **Use Ray3.2 as the finishing-pipeline candidate.** Its differentiators are up to 16 keyframes, 20-second 1080p work, video modification, HDR, and EXR delivery rather than a generic one-prompt contest.

Those positions should appear in planning copy as **what each model is expected to be good at**. Convert them into recommendations only after Astria's endpoints pass the relevant tests.

## Why this cluster can be better than existing comparisons

Search results already contain many broad “Veo vs Kling vs Seedance” pages. Most compare vendor specifications, attractive showcase clips, or one generic prompt. The more defensible Astria angle is:

- same approved fashion and product inputs;
- first-frame preservation measured over time, not only frame-zero similarity;
- garments, logos, labels, jewelry, and product geometry reviewed separately from cinematic appeal;
- audio judged in its own track rather than silently rewarding models that generate a soundtrack;
- every attempt retained, with failures and blocked jobs included;
- latency and **cost per approved second**, not only nominal price per generation;
- exact Astria model name, settings, run date, and endpoint limitations disclosed.

This makes the content useful to a production buyer rather than another model-news roundup.

## Current Astria catalog snapshot

`astria models` returned the live server catalog on September 8, 2026. The selector contains many resolution and audio variants, but they collapse into the following editorial families.

| Editorial family | Current Astria entries | Treatment |
| --- | --- | --- |
| **Wan 3.0** | 480p, 720p, 1080p | Core benchmark model; do not create a page per resolution. |
| **FLUX 3 Video** | 720p, 1080p | Core/challenger depending on calibration; one family page. |
| **MiniMax H3** | H3 Max 480p/768p, H3 2K | Benchmark Max and 2K as distinct quality/speed choices; combine them in one family page first. |
| **Seedance** | 2.5 at 480p/720p/1080p; 2.0 and 2.0 Fast; 1.5 silent/audio variants | Make 2.5 the current family lead. Use 2.0/Fast as price and maturity controls and 1.5 only as a historical control. |
| **Kling 3.0** | Standard, Pro, Standard Audio, Pro Audio; motion-control and motion-control Pro | One family page plus one Standard-vs-Pro comparison if the benchmark finds a useful tradeoff. Motion control belongs in its own track. |
| **Veo 3.1** | Fast and Lite at 720p/1080p, audio variants, Fast 4K | One family page; a Fast-vs-Lite page only if cost-per-approved-output differs materially. |
| **Ray 3.2** | 540p, 720p, 1080p | Specialist professional-pipeline page. Verify which Ray controls Astria exposes before writing workflow instructions. |
| **HappyHorse** | 720p, 1080p | Qualification-round challenger; hold a standalone page until primary documentation and Astria results justify it. |
| **Gemini Omni 1.1 Flash** | one catalog entry | Core benchmark model; strong candidate for a standalone page because its conversational editing intent is distinct from Veo. |
| **InfiniteTalk** | 480p, 720p | Talking-video specialist, not a general-generator competitor. |
| **SCAIL-2** | 480p, 720p | Character/motion-transfer specialist, not a general-generator competitor. |
| **Cinematic Video** | one opaque catalog label | Do not publish a model page until the underlying provider/model and current capabilities are explicitly identified. |

Catalog presence proves availability, not performance. Provider-wide capabilities also do not prove that every control is exposed by the current Astria wrapper. Freeze an endpoint capability table immediately before the run.

## Research-backed model strength map

“Research signal” below is either a provider-documented capability or current independent benchmark context. “Editorial hypothesis” is deliberately phrased as a testable proposition.

| Model/family | Research signal | Editorial hypothesis to test | Important qualification |
| --- | --- | --- | --- |
| **Wan 3.0** | Alibaba documents text, image, video, and audio inputs; text-to-video, first/last-frame image-to-video, and reference-based generation; 480p–1080p; up to 30 seconds. It ranks first in the current Artificial Analysis text-to-video arenas, with and without audio. | Best current starting point for general text-to-video and a strong all-round campaign generator. | The top three audio Elo confidence intervals overlap. Generic arena preference does not measure SKU fidelity. |
| **MiniMax H3 Max** | The current post-trained endpoint ranks first for image-to-video with audio and sits in the statistically overlapping top group for text-to-video with audio. MiniMax markets H3 Max around fast 5–15 second generation. | Best value/speed candidate for animating approved campaign stills. | H3 Max is a post-trained endpoint and must not be treated as identical to base H3. Astria latency and price must be measured directly. |
| **MiniMax H3 / H3 2K** | MiniMax documents 4–15 second, 24fps, native stereo output; broad aspect ratios; up to 2K regeneration; 11 stable dialogue languages; first/last frames; and multimodal reference input. The provider highlights instruction following, text/brand rendering, and video-to-video motion transfer. | Best high-resolution/open-weights candidate for brand, packaging, multilingual dialogue, and complex reference work. | Separate 768p generation from 2K regeneration in cost and latency reporting. |
| **Gemini Omni 1.1 Flash** | Google describes native text/image/audio/video input, high-resolution video with audio, conversational editing, extension, interpolation, and 360p–4K output. It ranks second in current text-to-video with and without audio. | Best iterative “generate, inspect, ask for a change” workflow and a strong general alternative to Wan. | Google's model card still lists perfect consistency, complex motion, and exact text as known challenges. |
| **Seedance 2.5** | ByteDance documents 30-second single-pass audio-video generation, multi-round extension, up to 30 image/10 video/10 audio references, improved multi-shot continuity, and timestamp-level editing. | Best long-form story and highest-capacity multi-reference candidate for collection campaigns. | The provider said first-party API access was coming soon at launch; test the exact Astria implementation and permitted input modes rather than importing the entire product claim. |
| **Seedance 2.0 / Fast** | ByteDance documents 15-second multi-shot audio-video, mixed image/video/audio references, complex motion, camera control, and extension/editing. It remains near the top of current image-to-video-with-audio preference. | Mature control and price baseline; Fast may win cost per approved second even when a newer model wins raw quality. | Use the current Astria default, `seedance2_fast_720p`, as an operational baseline, not an assumed quality winner. |
| **Kling 3.0** | Kuaishou documents up to 15 seconds, multilingual native audio, multi-shot storyboarding, multiple image/video references, text preservation, photoreal output, and motion/reference controls. Kuaishou separately reports native 4K rollout in 2026. | Best candidate for controlled model performance, product/logo retention, multilingual ad scenes, and motion transfer. | Test Standard, Pro, audio, and motion-control modes separately. Provider reference features may not all be exposed in each Astria mode. |
| **Veo 3.1** | Google documents 4/6/8-second clips, native audio, 720p/1080p/4K variants, first/last frames, up to three reference images, portrait output, and extension of Veo-generated clips. DeepMind emphasizes realism, physics, and prompt adherence. | Best candidate for short photoreal hero shots where picture and sound must feel finished together. | Short fixed durations and reference/extension restrictions make this a shot generator, not automatically the best sequence workflow. |
| **FLUX 3 Video** | Black Forest Labs documents text/image generation, keyframes, continuation, multi-shot clips, typography, multilingual dialogue, native audio, draft-to-final consistency, 720p/1080p, and clips up to 20 seconds. | Best flexible style and typography candidate; promising for branded ads that need on-screen copy or dialogue. | Current quality evidence is provider-published. Treat its internal head-to-head results as a claim to test, not proof. |
| **Ray3.2** | Luma documents up to 16 keyframes, 20-second 1080p clips, video modification, reframing, HDR generation, and ACES/EXR export. | Best professional finishing and controlled video-to-video candidate. | It has no native-audio story comparable to the audio-first models. Verify the controls actually surfaced in Astria before promising a workflow. |
| **HappyHorse 1.0** | It has ranked strongly in independent no-audio arenas and is exposed in Astria at 720p/1080p. | Potential quality challenger for general text/image-to-video. | Primary technical documentation is still too thin for a confident standalone article. Qualify it visually first. |
| **InfiniteTalk** | The project documents audio-driven image-to-video and video-to-video, long-form lip sync, and synchronized head/body/expression motion. | Best specialist for a presenter or product spokesperson driven by an approved audio track. | Do not compare it to Wan or Veo on generic cinematic prompts; test lip sync, identity, posture, and long-duration drift. |
| **SCAIL-2** | Its paper and current endpoint describe end-to-end character animation driven by a source video without intermediate skeleton maps. | Best specialist for transferring a model, mascot, illustration, or animal onto a known performance. | This is a motion-transfer track, not text-to-video. |

## Market models to cover without pretending they are Astria models

These names belong in the landscape preface and search research. They should not be included in an “available in Astria” table unless the catalog changes.

| Model | Why readers care | Editorial treatment now |
| --- | --- | --- |
| **Runway Gen-4.5** | Established creative platform; provider emphasizes motion quality, prompt adherence, visual fidelity, and sequenced camera direction. Current web product supports 2–10 second 720p text/image-to-video. | Include in the market landscape and consider a later platform/end-to-end workflow comparison. Do not imply the model is available through Astria. |
| **Grok Imagine Video 1.5** | xAI documents image-to-video with native audio, better physics and motion, up to 15 seconds for reference-to-video, up to seven image references, and up to 1080p in supported modes. | Challenger to watch; add only if Astria exposes it or a market-wide comparison can be run fairly outside Astria. |
| **Sora 2** | Brand recognition and historical search demand. OpenAI's current pages label Sora 2 legacy and state that the Sora product is no longer available as of April 26, 2026. | Mention deprecation in the landscape. Do not invest in a fresh “Sora 2 review” unless availability changes. |
| **LTX 2.5** | Current open-weights option in the Artificial Analysis arena and a useful self-hosting/control reference point. | Cover in an open-model landscape, not the first Astria results hub. |

## Content architecture

### Phase 1 — three-page pilot

| Priority | Proposed slug and working title | Search intent and boundary | Required proof | CTA |
| --- | --- | --- | --- | --- |
| 1 | `astria-video-models` — **Which AI Video Model Should You Use in Astria?** | Product-navigation intent. Explain the live families, input modes, and “start here / switch when” logic. Does not claim a quality winner before testing. | Live catalog snapshot and endpoint capability table. | Open Astria with the recommended model/mode. |
| 2 | `how-we-benchmark-ai-video-models` — **How We Benchmark AI Video Models for Fashion and Product Work** | Methodology intent. Owns test design, judging, disclosure, cost, latency, and reproducibility. | Published prompts, source frames, score sheet, run manifest, and disclosures. | Inspect/download the benchmark materials. |
| 3 | `best-ai-video-models-fashion-product` — **Best AI Video Models for Fashion and Product Video: Astria's 2026 Benchmark** | Results and selection intent. Names winners by track, not one vague universal winner. | Matched clips, failures, scores, cost per approved second, and capture dates. | Run the winning model on an approved still or brief. |

The field guide can publish when the capability audit is complete. The methodology can publish with the frozen benchmark package. The results hub must wait for actual runs.

### Phase 2 — high-intent comparisons

Publish a matchup only when the pilot receives query impressions, internal product searches show demand, or the benchmark finds a stable and useful difference.

| Working title | Decision it owns | Priority |
| --- | --- | --- |
| **Wan 3.0 vs MiniMax H3 vs Gemini Omni 1.1: Which New Video Model Wins Each Job?** | Current frontier/value choice across T2V, I2V, audio, and commercial usability | High after benchmark |
| **Seedance 2.5 vs Kling 3.0 vs Veo 3.1 for Fashion Video** | Long-form/reference control vs directed performance vs short photoreal audio | High |
| **Wan 3.0 vs Seedance 2.5** | Thirty-second generation, multi-reference control, audio, continuity, and cost | High |
| **MiniMax H3 vs H3 Max** | Quality/2K/reference depth vs speed and price | High |
| **Kling 3.0 Standard vs Pro vs Motion Control** | Mode selection inside one family | High if usage warrants |
| **Veo 3.1 Fast vs Lite** | Final-quality vs cost-efficient generation | Medium; combine into the Veo guide unless search demand appears |
| **Gemini Omni 1.1 vs Veo 3.1** | Conversational editing and broad multimodal context vs short cinematic generation | Medium/high because the two Google models solve different jobs |
| **FLUX 3 vs Wan 3.0 for Product Ads** | Typography/style/dialogue vs current general arena leader | Medium |
| **Ray3.2 vs Runway Gen-4.5 for Professional Video Workflows** | HDR/keyframes/V2V finishing vs broader creative-suite workflow | Medium; requires fair access outside the Astria-only test |
| **InfiniteTalk vs SCAIL-2 vs Kling Motion Control** | Talking presenter vs character motion transfer vs directed performance | Specialist; title should name the job rather than imply equivalent models |

Avoid pairwise pages such as Wan 3.0 vs Wan 3.0 720p. Resolution, audio, Fast/Lite, and Pro variants belong in family pages until data proves the choice deserves its own URL.

### Phase 3 — model pages

A model article should answer “when should I use this model in Astria?” rather than repeat a press release.

| Model article | Recommended status | Minimum evidence before drafting |
| --- | --- | --- |
| **Wan 3.0 review and field guide** | Commission after core run | T2V, I2V, first/last frame, reference, audio, cost, and failure examples |
| **MiniMax H3 and H3 Max review** | Commission after core run | Max vs base/2K, text/logo, audio, multilingual dialogue, motion/reference, latency |
| **Gemini Omni 1.1 Flash review** | Commission after core run | Conversational edit sequence, preservation across three turns, extension, 4K/draft economics |
| **Seedance 2.5 review** | Commission after core run | 15/30-second continuity, multi-reference roles, timestamp edit, fashion gait/fabric |
| **Kling 3.0 review** | Commission after core run | Standard/Pro, audio, storyboard, text/logo, identity, motion control |
| **Veo 3.1 review** | Commission after core run | photoreal hero, physics, audio/dialogue, first/last frame, Fast/Lite, blocked-generation handling |
| **FLUX 3 Video review** | Commission after qualification | style range, typography, multilingual dialogue, draft-to-final preservation |
| **Ray3.2 review** | Commission after qualification | multi-keyframe, V2V, reframe, HDR/EXR workflow, Astria control audit |
| **HappyHorse review** | Hold | primary technical source plus a discriminating benchmark result |
| **InfiniteTalk for talking product videos** | Optional specialist guide | lip-sync, identity, posture, long-duration drift, audio requirements |
| **SCAIL-2 for character and fashion motion transfer** | Optional specialist guide | garment/identity preservation under a shared driving clip |
| **Cinematic Video review** | Blocked on identification | exact underlying model, provider, limits, and source documentation |

Every page should contain:

1. a one-paragraph answer and “use it when / avoid it when” table;
2. the exact Astria model names and tested modes;
3. three representative successes and at least one failure;
4. the source image/video, exact prompt, and settings for every displayed result;
5. quality, usable-output rate, latency, total spend, and cost per approved second;
6. a short family/version section rather than separate thin version pages;
7. primary-source capability notes clearly separated from Astria's test results;
8. benchmark date, catalog-check date, and disclosure that Astria sells access to tested endpoints.

## Benchmark design

### Qualification before the expensive run

Video costs and endpoint mismatches make a broad full run wasteful. Use two stages:

1. **Capability/calibration round:** one output per model on one text-to-video and one approved-still image-to-video brief. Confirm duration, ratio, audio, reference, first/last frame, and upload behavior. Exclude only incompatible tracks, not weak results.
2. **Core benchmark:** three outputs per brief for the finalists in each compatible track. Keep every result, including safety blocks, endpoint failures, unwanted edits, and silent audio failures.

The initial general-generation shortlist should be Wan 3.0, MiniMax H3/H3 Max, Gemini Omni 1.1 Flash, Seedance 2.5 or the current compatible Seedance endpoint, Kling 3.0, Veo 3.1, and FLUX 3. Add Ray3.2 only to tracks its Astria endpoint actually exposes. Keep Seedance 2 Fast as the operational cost baseline.

Use a shared **8-second** 16:9 test where possible because Veo supports 4/6/8 seconds and the other flagship families cover eight seconds. Add a separate 9:16 social track. Never stretch, crop, remove audio, or upscale one model's output to make it look equivalent without disclosing the transformation.

### Separate tracks

Models enter only tracks their current Astria endpoint supports.

| Track | Core question | Likely entrants |
| --- | --- | --- |
| **Text-to-video, silent** | Which model follows a commercial shot brief with the best usable picture? | Wan 3.0, H3/H3 Max, Gemini Omni, Seedance, Kling, Veo, FLUX 3 |
| **Text-to-video with audio** | Which produces a usable picture, soundscape, dialogue, and synchronization together? | Audio-capable variants only; judge separately from silent output |
| **Approved still to video** | Which adds useful motion while preserving the exact product, person, grade, and framing? | All compatible I2V models |
| **Multi-reference video** | Which keeps person, garment, product, location, motion, and audio references in their assigned roles? | Wan 3.0, H3, Seedance, Gemini Omni, and any other endpoint verified to accept independent references |
| **First/last frame and keyframes** | Which reaches the required final composition without implausible morphing? | Wan 3.0, H3, Kling, Veo, FLUX 3, and compatible Seedance modes |
| **Video editing / continuation** | Which changes only the requested property and preserves performance, timing, camera, and sound? | Gemini Omni, H3, Seedance 2.5, Ray3.2, and other verified V2V endpoints |
| **Motion transfer** | Which transfers full-body action without changing identity, clothing, anatomy, or timing? | Kling Motion Control, SCAIL-2, H3/V2V, and verified controls |
| **Talking video** | Which maintains lip sync, identity, teeth, expression, head/body motion, and audio timing? | InfiniteTalk plus compatible general multimodal models |
| **Professional delivery** | Which output survives color, compositing, reframing, and finishing requirements? | Ray3.2, Veo/FLUX/Kling high-resolution modes, and externally tested Runway where fair access exists |

### Commercial brief set

Use rights-cleared, synthetic, brand-neutral inputs. Reuse source garments, beauty packaging, jewelry, and cast identities from the image benchmark when their licenses and resolutions are suitable; this connects still selection to motion without using customer assets.

| Brief | Input and motion | What it exposes |
| --- | --- | --- |
| **01 — Garment micro-motion hero** | Approved three-quarter fashion still; slow push-in, breath, small head turn, sleeve and hem responding to a light draft | First-frame preservation, face drift, fabric behavior, camera smoothness |
| **02 — Full-body runway walk** | Approved full-length still; model walks toward camera, stops, turns | Gait, feet, anatomy, garment construction, identity under larger motion |
| **03 — Textured jacket turn** | Patterned/embroidered jacket; quarter turn under controlled studio light | Print/embroidery drift, buttons, fabric sheen, occlusion recovery |
| **04 — Beauty packshot with copy** | Bottle and carton with exact label; light sweep and slow turntable | Product geometry, typography stability, reflections, invented objects |
| **05 — Jewelry and hand interaction** | Necklace or ring on adult model; subtle hand adjustment and camera move | Stone count, chain/settings, fingers, reflections, on-body attachment |
| **06 — Footwear stride** | Shoe reference and full-body model; two steps and foot plant | Sole/upper geometry, left/right confusion, contact physics, gait |
| **07 — Native-audio product ad** | Text-only 8-second brief with opening, product reveal, spoken line, impact sound, room tone | Multi-shot logic, object permanence, dialogue, lip sync, sound timing |
| **08 — Two-person multilingual exchange** | Two approved adult identities and a short exchange in two supported languages | speaker/voice binding, turn order, eye lines, face consistency |
| **09 — First-to-last-frame transition** | Fixed campaign opening and product end card | endpoint control, path plausibility, final-frame accuracy, text survival |
| **10 — Multi-reference collection scene** | Person, garment, accessory, set, motion, and audio references | reference assignment, omission/blending, continuity, prompt adherence |
| **11 — Localized video edit** | Approved source clip; change backdrop and one product color only | edit locality, motion/audio preservation, unintended garment/face changes |
| **12 — Driving-performance transfer** | Clean full-body source performance plus approved cast/garment | timing, hands/feet, identity, garment fidelity, occlusion handling |

Do not force every model through all 12 briefs. The results hub should state `not supported` rather than scoring an incompatible model as a failure.

### Measurement

| Dimension | Practical definition | Evaluation |
| --- | --- | --- |
| Prompt and timing adherence | Requested actions occur in the right order and interval | Shot/action checklist with timestamped pass/fail |
| Product/garment fidelity | Silhouette, construction, color, texture, print, hardware, logo, and label survive motion | Expert frame review at start, quarter points, and end; OCR/color checks where useful |
| First-frame preservation | The approved still begins without a visible redraw or unrequested crop | Registered first-frame comparison plus human review |
| Identity consistency | The same adult person remains recognizable through expression, turn, and occlusion | Blind reviewer rubric plus a disclosed similarity measure used only as supporting evidence |
| Anatomy and gait | Hands, feet, joints, weight transfer, and contact look plausible | Defect tags and usable/unusable gate |
| Motion and physics | Fabric, hair, liquids, objects, shadows, and momentum behave coherently | Blind 1–5 rating plus named failure tags |
| Camera control | Framing, path, lens feel, and requested camera move remain coherent | Checklist and operator rating |
| Text stability | Required words remain exact and stable across frames | Frame-sampled OCR/edit distance plus visual review |
| Audio quality | Dialogue, effects, ambience, and music are useful and free from obvious artifacts | Separate blind audio review |
| Audio-video sync | Speech and events line up with mouth/action | Timestamp error and human pass/fail |
| Edit locality | Requested changes happen while untargeted content, motion, timing, and audio remain | Source/output frame comparison and checklist |
| Temporal continuity | Subjects and scene do not pop, morph, duplicate, or lose attributes | Timestamped defect count |
| Usable-output rate | Output can enter an edit or client review without regeneration | Predeclared yes/no gate with reason |
| Latency | Submit-to-download wall time | p50/p95 from Astria request logs, including queue/poll/download |
| Cost per approved second | Spend required to obtain useful duration | Total Astria spend divided by approved output seconds |
| Retouch/edit burden | Work remaining after generation | None / light / substantial / unusable, optionally timed on finalists |

Avoid a universal weighted score. Publish winners by track and let readers see the underlying dimensions. A cinematic clip can still fail the product-fidelity gate.

### Judging and disclosure

- Randomize clip order and hide model names during quality review.
- Use at least three reviewers for finalists, including one fashion/product practitioner and one editor or director.
- Review picture-only, audio-only, and combined audio-video passes separately.
- Score the first predetermined valid run in public comparison grids; put alternate runs and failures in an expandable gallery.
- Preserve exact source assets, prompts, settings, job ids, timestamps, costs, outputs, blocks, and endpoint errors in a versioned manifest.
- Disclose that Astria publishes the comparison and sells access to the tested endpoints.
- State that results describe the named Astria endpoints and capture date, not every host or implementation of the base model.
- Separate provider claims, independent arena evidence, and Astria findings in both prose and figure captions.

## Results-hub structure

1. **The answer by job** — one model per track, plus the condition that should make a reader switch.
2. **What was tested** — model variants, Astria modes, dates, duration, ratios, resolution, audio state, and exclusions.
3. **Start here / switch when** decision table.
4. **Cost per approved second, usable-output rate, and latency** — reported separately from quality.
5. **Approved still to motion** — apparel, beauty, jewelry, and footwear grids.
6. **Text-to-video and native audio** — product ad and multilingual scene.
7. **Reference and control** — multi-reference, first/last frame, editing, and motion transfer.
8. **Failure analysis** — identity, gait, fabric, hands, text, reference blending, audio sync, blocks, and endpoint errors.
9. **Independent leaderboard context** — clearly dated and separated from Astria's results.
10. **Methodology, raw manifest, conflicts, and refresh date.**

Every conclusion needs a playable side-by-side clip, not a poster frame. Use familiar native video controls on every tile instead of a benchmark-specific toolbar. Keep model order fixed within a figure, normalize player size rather than altering clips, and make original files available for inspection.

## Relationship to existing pages

Keep the existing jobs intact:

- `ai-fashion-film-guide` owns multi-shot campaign-film direction and continuity.
- `apparel-product-video-guide` owns SKU/PDP briefs, review, and delivery.
- `fashion-video-ads-guide` owns hooks, variants, placement, testing, and commercial measurement.
- `astria-vs-higgsfield-fashion-ai` owns the Astria-versus-platform purchase decision.
- the new field guide owns **which model/mode inside Astria**;
- the methodology owns **how models are compared**;
- the results hub owns **which model won each tested production job**;
- model pages own **how and when to use one family**.

Do not add a second generic “AI fashion video guide.” Link the new results hub from the three workflow guides only after real results exist.

## Publishing cadence and gates

The repository's wider content pause still matters. This plan does not authorize a blind batch of model pages.

1. Publish the field guide after the endpoint audit.
2. Publish the methodology when the benchmark package is frozen.
3. Publish the results hub after judging and QA.
4. Wait 28 days, then review Search Console queries, page clicks, model-selector clicks, prompt starts, and generation starts.
5. Release comparisons/model pages only where query demand, product usage, or a discriminating benchmark result exists.

When several articles are approved together, give every page a distinct publication date and stagger them one per calendar day. Do not backfill all model pages onto one date.

Success signals:

- impressions/clicks for `best AI video model`, `AI video model comparison`, model names, and named matchups;
- visitors moving from comparison clips into an Astria video start;
- model-selection or support questions answered by the field guide;
- benchmark figures reused by sales, support, partners, or creators;
- a model-specific page earning demand the hub cannot satisfy cleanly.

Stop or consolidate when:

- the hub absorbs the model query;
- a family turns over faster than its page can be maintained;
- no result shows a stable job-specific difference;
- a model is not exposed through Astria and the article has no independent workflow reason to exist;
- the page would merely restate provider features without Astria evidence.

## Refresh policy

- **Astria catalog:** monthly and immediately before any related publication.
- **Endpoint capability matrix:** before each benchmark run; controls can differ from the provider's first-party product.
- **Independent arena figures:** capture on publication day and display Elo, confidence interval, sample count, modality, settings, and date.
- **Benchmark:** quarterly, or sooner when Astria changes its default video model or a major family enters/leaves the catalog.
- **Article metadata:** show both `catalog checked` and `benchmark run` dates.
- **Ledger volatility:** use `M P F` for model availability, pricing, and feature scope; add `B` locally if the ledger adopts a benchmark-run volatility code.

## Source set

Primary sources checked September 8, 2026:

- [Astria live model catalog](https://www.astria.ai/gallery/tunes?branch=partner-1) — supplemented by the authenticated `astria models` server response captured during this planning pass.
- [Alibaba Cloud: Wan 3.0 Video Prime](https://www.alibabacloud.com/help/en/model-studio/wan3-0-video-prime)
- [MiniMax: H3 open-source and system overview](https://www.minimax.io/news/minimax-h3-open-source)
- [MiniMax: H3 research and commercial-use strengths](https://www.minimax.io/blog/minimax-h3)
- [MiniMax Design: H3 Max](https://design.minimax.io/tools/minimax-h3-max)
- [Google DeepMind: Gemini Omni Flash model card](https://deepmind.google/models/model-cards/gemini-omni-flash/)
- [Google AI for Developers: Gemini Omni 1.1 Flash](https://ai.google.dev/gemini-api/docs/models/gemini-omni-flash)
- [ByteDance Seed: Seedance 2.5](https://seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5)
- [ByteDance Seed: Seedance 2.0](https://seed.bytedance.com/en/blog/seedance-2-0-official-launch)
- [Kuaishou: Kling 3.0 announcement](https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-30-model-ushering-era-where-everyone-can-be)
- [Google AI for Developers: Veo 3.1 generation guide](https://ai.google.dev/gemini-api/docs/veo)
- [Google DeepMind: Veo](https://deepmind.google/models/veo/)
- [Black Forest Labs: FLUX 3 Video generation](https://bfl.ai/blog/flux-3-video)
- [Luma: Ray3.2 announcement](https://lumalabs.ai/news/introducing-ray-3-2)
- [Luma: Ray3.2 API](https://lumalabs.ai/api)
- [Runway: Gen-4.5](https://runwayml.com/research/introducing-runway-gen-4.5)
- [Runway: current Gen-4.5 controls and specifications](https://help.runwayml.com/hc/en-us/articles/46974685288467-Creating-with-Gen-4-5)
- [SpaceXAI: Grok Imagine Video 1.5](https://x.ai/news/grok-imagine-video-1-5)
- [OpenAI: Sora 2 system card and current availability note](https://openai.com/index/sora-2-system-card/)
- [InfiniteTalk paper implementation](https://github.com/MeiGen-AI/InfiniteTalk)
- [SCAIL-2 technical report](https://arxiv.org/abs/2606.10804)

Independent benchmark context:

- [Artificial Analysis video benchmarking methodology](https://artificialanalysis.ai/video/methodology)
- [Artificial Analysis text-to-video leaderboard](https://artificialanalysis.ai/video/leaderboard/text-to-video)
- [Artificial Analysis image-to-video leaderboard](https://artificialanalysis.ai/video/leaderboard/image-to-video/)
- [Artificial Analysis video-editing leaderboard](https://artificialanalysis.ai/video/leaderboard/video-editing)

## Recommended next action

Freeze a machine-readable Astria endpoint capability snapshot and build the 12 rights-cleared briefs before drafting the results page. Run the two-brief qualification round first. Its job is to identify which models can enter which tracks and to estimate the full benchmark budget. Only then commission the matched core run, judging package, comparison player, and the three pilot articles.

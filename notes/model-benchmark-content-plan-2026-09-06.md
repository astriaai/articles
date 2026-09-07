# Astria image-model benchmark content plan

**Prepared:** September 6, 2026
**Scope:** image models available through Astria; video models are a separate future cluster
**Audience:** fashion brands, creative teams, photographers, studios, and developers choosing a production model

**Implementation status:** pilot completed September 6, 2026. The three-page content cluster,
controlled four-model run, exact prompt manifest, run ledger, qualitative review sheet, 48 public
comparison/source assets, and three covers are implemented. The pilot used 11 briefs rather than
the proposed 24-brief full study: 132 images requested, 131 returned, and $43.15 in core benchmark
generation cost. The published methodology discloses the single-reviewer editorial assessment;
blinded multi-reviewer scoring remains a future expansion rather than an implied property of this run.

## Editorial thesis

The useful top-line answer is: **Nano Banana 2 is the best general-purpose model for fashion work in Astria.** It should be the default recommendation for a team that does not yet know which model to choose. The rest of the series explains the important exceptions rather than weakening that answer with an “it depends” conclusion.

The four-model editorial hierarchy is:

| Model | Bottom-line position | Strengths the examples must demonstrate |
| --- | --- | --- |
| **Nano Banana 2** | Best overall/default for fashion | The strongest balance of art direction, garment handling, identity, editing, and usable-output rate across everyday fashion jobs. |
| **GPT Image 2** | Prefer for beauty and work containing text | Beauty imagery, cosmetic products, exact or prominent copy, packaging, typography, and polished advertising compositions. |
| **Seedream 5** | Prefer for swimwear and benign briefs that can trigger Nano Banana's stricter sensitivity handling | Reliable completion of swimwear/skin-exposure briefs, strong color, convincing fabric and surface texture, and good model-identity preservation. |
| **Muse** | Prefer when references and constraint reliability matter most | Deliberative or “thinking model” behavior: careful reading of multiple references, dependable subject/product preservation, and reliable compliance with a complex brief. |

“Thinking model” should be explained through observable behavior rather than vague architecture claims: Muse appears to reason over the brief and references before composing the result. The benchmark should test this with multi-reference, spatial, and constraint-heavy cases and describe the behavior precisely.

The series should connect three layers of evidence:

1. **Public benchmark context** — independent preference, editing, speed, and price benchmarks provide a useful prior.
2. **Astria's live model catalog** — the popular selector is the practical shortlist, while the public partner gallery shows the broader market available in the GUI.
3. **Astria's own production benchmark** — controlled tests for fashion generation, product/reference fidelity, image editing, typography, latency, and cost per approved output.

The editorial position is therefore **one clear default plus specialist choices**. Public benchmark evidence adds context, while Astria's visual comparisons must substantiate why Nano Banana 2 is the general fashion recommendation and when a specialist produces a more usable result.

## Catalog snapshot

The catalog below was fetched from Astria on September 6, 2026. Model availability and names are volatile and should be refreshed immediately before testing or publication.

### Popular selector: primary benchmark pool

| Family | Models currently in Astria's popular catalog | Editorial treatment |
| --- | --- | --- |
| Nano Banana | Nano Banana 2 Pro (Gemini 3.1; current default), Nano Banana 2 Lite, Nano Banana Pro (Gemini 3), Nano Banana (Gemini 2.5) | Benchmark the current Pro and Lite variants; keep the two predecessors as change-over-time controls rather than four equal recommendations. |
| Seedream | Seedream 5.0 Pro, Seedream 5.0 Lite, Seedream 4.5 | Benchmark Pro and Lite; use 4.5 as the predecessor control. |
| Flux | Flux 2 Pro | Include in every compatible generation/editing track. Link technical fine-tuning intent to the existing FLUX article rather than duplicating it. |
| GPT Image | GPT Image 2 | Include in every compatible generation/editing track. |
| Recraft | Recraft V4.1 | Include in generation, commercial graphics, typography, and compatible editing tracks. |
| Ideogram | Ideogram V4 | Include in generation, commercial graphics, typography, and compatible editing tracks. |
| WAN | WAN 2.7 Pro, WAN 2.7 | Benchmark both only where the Pro/standard choice creates a useful quality-versus-cost decision. |

This is 13 catalog entries. The benchmark can record a broader table, but the narrative and repeated side-by-side visuals should center on **Nano Banana 2, GPT Image 2, Seedream 5 Pro, and Muse**. Secondary runs can position Nano Banana 2 Lite, Seedream 5 Lite, Flux 2 Pro, Recraft V4.1, Ideogram V4, and WAN 2.7 Pro. Older family variants are controls or follow-up comparisons.

### Public partner gallery: preface and challenger pool

The GUI also exposes a broader public partner gallery. As of the snapshot, it includes:

- Seedream 4.0
- Reve and Reve 2.1
- Riverflow 1 and Riverflow 1 mini
- HyperRealism v2.0
- Flux 2 Turbo and Flux Klein 9B
- P-Image Edit
- Recraft V4 and Recraft V4 Pro
- Grok Imagine
- Krea 2 Medium, Krea 2 Large, and Krea 2 Medium Turbo
- Qwen Image 3
- MAI Image 2.6 and MAI Image 2.6 Flash
- Muse Image

These models belong in the **landscape preface**, not all in the first benchmark. Muse is the deliberate exception: bring it into the core visual comparison because reference reliability and deliberate constraint handling give it a distinct production role even though it is not in the popular shortlist. Select four additional challengers for a smaller qualification round after checking task support, cost, latency, and audience interest. Strong candidates are Reve 2.1, Qwen Image 3, Krea 2 Large, and MAI Image 2.6. Grok Imagine can replace one if search demand or customer usage is stronger.

Avoid describing any challenger as better, cheaper, open-source, or specialized until its current model card and endpoint behavior have been verified. “Public” here means visible in Astria's public partner-model GUI, not necessarily open weights.

## Content architecture

### Pilot: publish these first

| Priority | Working title | Primary intent | Job of the page | Core CTA |
| --- | --- | --- | --- | --- |
| 1 | **Which AI Image Model Should You Use in Astria?** | Astria models; which AI image model | Evergreen GUI field guide. Lead with Nano Banana 2 for fashion, then explain the GPT Image 2, Seedream 5, and Muse exceptions. Include popular versus public models and a task-based decision tree. | Open Astria and try the recommended model for the reader's task. |
| 2 | **How We Benchmark AI Image Models for Fashion and Product Work** | AI image model benchmark; how to compare AI image models | The methodology and disclosure page. Explain public leaderboards, their limits, Astria's dataset, scoring, conflicts, and reproducibility. This is the stable URL every results page cites. | Download/view the prompt set and inspect full comparison grids. |
| 3 | **Best AI Image Models for Fashion and Product Photography: Astria's 2026 Benchmark** | best AI image model; AI image model comparison | Results hub whose opening answer names Nano Banana 2 best overall for fashion, then demonstrates the beauty/text, swimwear/sensitivity, and reference-reliability exceptions with matched grids. | Run the same brief with the recommended model in Astria. |

This three-page pilot is deliberately narrower than a full model-by-model publishing spree. It supplies the missing information architecture, tests whether model-selection content earns impressions or product clicks, and respects the repo's existing pause on broad backlog expansion.

### High-intent comparison pages

Publish only after the pilot has query evidence, internal model-usage evidence, or a genuinely discriminating test result.

| Working title | Query boundary | Benchmark angle | Priority |
| --- | --- | --- | --- |
| **Nano Banana 2 Pro vs Lite vs Nano Banana Pro** | Nano Banana version/price/quality choice | Quality, edit locality, latency, and approved-output cost across the family | High |
| **Seedream 5 Pro vs Lite vs Seedream 4.5** | Seedream version choice | Product fidelity, editorial realism, editing, and Pro/Lite economics | High |
| **GPT Image 2 vs Nano Banana 2** | Cross-family flagship comparison | Instruction following, multi-reference work, typography, preservation, and cost | High |
| **Nano Banana 2 vs Seedream 5 for Fashion and Swimwear** | General fashion default versus sensitive-brief specialist | Everyday fashion, swimwear completion, color, texture, identity, and safety-handling outcomes | High |
| **Muse vs Nano Banana 2 for Reference-Based Generation** | Reference fidelity and complex-brief choice | Product preservation, multi-reference reasoning, constraint satisfaction, and repeatability | High |
| **Flux 2 Pro vs Seedream 5 Pro for Fashion Images** | Photographic generation and product-creative choice | Fabric, anatomy, styling, product fidelity, and art direction | Medium |
| **Recraft V4.1 vs Ideogram V4** | Design and text-rendering model choice | Exact text, layout, pack graphics, poster/advertising use, and editable-looking compositions | Medium |
| **WAN 2.7 vs WAN 2.7 Pro** | Standard-versus-Pro choice | Whether the quality gain lowers or raises cost per approved image | Medium/low until demand is visible |
| **Astria Public Models Tested: Qwen, Reve, Krea, MAI, Muse, and More** | Emerging-model discovery | Quarterly challenger round; promotes only models that earn a place in a task leaderboard | Experimental |

Do not create one thin article for each public-gallery entry. The quarterly challenger round can absorb fast catalog turnover and graduate a model into its own page only when usage, query demand, or benchmark performance justifies it.

### Supporting use-case pages

These are optional expansions after the results hub has data. Each owns a job, not a model name:

- **Best AI model for image editing** — object removal, localized change, relighting, background replacement, and multi-turn revision.
- **Best AI model for product photography** — packshot-to-campaign transformation, product/reference fidelity, and usable-image economics.
- **Best AI model for beauty campaigns** — cosmetic packaging, shade and skin rendering, reflective materials, and exact text; this should support the GPT Image 2 recommendation.
- **Best AI model for jewelry photography** — tiny geometry, prongs and chains, reflections, gemstones, skin contact, and reliable use of product references.
- **Best AI model for text in images** — exact copy, logo-like marks, signage, packaging, and advertising layouts.
- **Fastest AI image model versus cheapest usable model** — latency and price per generation versus cost per approved output.

The fashion/product pages should point into existing guides rather than retell them. In particular:

- `ai-fashion-models` owns AI people/casting, not foundation-model selection.
- `nano-banana-photoshop-guide` owns the Photoshop workflow, not the broad model benchmark.
- `fine-tuning-flux` owns FLUX fine-tuning and API implementation.
- `ai-fashion-photoshoot-guide` and `ai-lookbook-guide` own full production workflows.

## Required preface: how to read public model benchmarks

Use the following short preface in the methodology article and a compressed version in the results hub:

> Public leaderboards are a useful starting point, not a production verdict. Human-preference arenas tell us which output people favor in a blind comparison; academic editing benchmarks test instruction following and preservation; provider tables add speed and price. Those measurements may use square images, default settings, a single seed, generic prompts, or provider prices that differ from the Astria workflow. They do not directly measure whether a garment's stitching survives, a SKU remains recognizable, a model's identity persists, or an art director approves the result. We use public scores as context, then test the current Astria endpoints on commercial tasks and report quality, failure rate, latency, and cost separately.

Public frameworks to explain and cite:

- **Artificial Analysis Image Arena** — blind human preference for text-to-image and editing; also reports endpoint price and generation time. Its current methodology normalizes arena presentation and refreshes its prompt taxonomy, but its score is still relative preference rather than an Astria-specific production score.
- **GenAI Arena / GenAI-Bench** — useful background on community preference and compositional text-to-visual evaluation.
- **ImgEdit-Bench** — separates instruction adherence, editing quality, detail preservation, complex understanding/grounding/editing, and multi-turn behavior.
- **FIT and virtual try-on benchmarks** — adjacent evidence for fit-aware virtual try-on, not a substitute for benchmarking general image models used to create campaign imagery.

Editorial rules for external scores:

1. Record the source, track, endpoint/variant, score, confidence interval when available, and capture date.
2. Never compare an editing Elo with a text-to-image Elo.
3. Never present rank without sample size or uncertainty when the source provides them.
4. Do not reuse a provider's public API price as Astria's price.
5. Treat close scores with overlapping confidence intervals as a tie.
6. Refresh dynamic leaderboard numbers on publication day and display “captured on” dates in the article.
7. Prefer the benchmark provider's methodology and live table over second-hand “model X beat model Y” posts.

## Astria benchmark design

### Separate tracks

Models should only enter tracks their Astria endpoint actually supports. Publish separate rankings for:

1. **Text-to-image fashion editorial** — creative direction from a written brief, no source image.
2. **Product/reference-grounded creation** — preserve a supplied garment or object while changing the model, pose, crop, or scene.
3. **Instruction-based image editing** — local replacement/removal, color change, relighting, background change, and canvas extension.
4. **Identity and series consistency** — repeat one cast identity and product across a small campaign sequence.
5. **Typography and commercial layout** — exact copy, hierarchy, placement, and visual finish.

Use the track results to support one plain-language hierarchy: Nano Banana 2 is the best general fashion model; GPT Image 2 is the beauty/text specialist; Seedream 5 is the swimwear, color, texture, identity, and sensitivity-handling specialist; Muse is the reference-reliability specialist. Publish the dimension scores behind every claim and avoid inventing a numerical universal score whose weighting predetermines the conclusion.

### Vertical and scenario matrix

The article needs recognizable commercial cases, not a wall of generic prompts. Build the core visual story around these matched comparisons:

| Vertical/scenario | Source assets | Core comparison | What the reader should be able to see |
| --- | --- | --- | --- |
| **General fashion editorial** | Garment reference, model reference, and one art-direction brief | Nano Banana 2, GPT Image 2, Seedream 5 Pro, Muse | Why Nano Banana 2 is the best-balanced default: styling, composition, realism, product handling, and overall usability. |
| **Color and difficult texture** | Saturated patterned knit, sheer fabric, embroidery, or metallic textile | Nano Banana 2, Seedream 5 Pro, Muse | Seedream's color quality and preservation of weave, sheen, print, and small construction details. |
| **Swimwear** | Adult model and swimsuit references; tasteful ecommerce and editorial briefs | Nano Banana 2 and Seedream 5 Pro, with Muse as a reference baseline | Whether a benign brief completes without rejection, unwanted coverage, garment redesign, or body/identity drift; why Seedream is the practical fallback when Nano Banana is too sensitive. |
| **Beauty with text** | Adult beauty portrait plus cosmetic bottle, carton, shade name, and campaign headline | GPT Image 2, Nano Banana 2, Seedream 5 Pro, Muse | GPT Image 2's skin/beauty finish, packaging geometry, readable product text, exact headline, and layout. |
| **Jewelry macro** | Earring, necklace, ring, or watch references plus an adult model reference | Muse, Nano Banana 2, GPT Image 2, Seedream 5 Pro | Reference reliability: exact stone count, setting, chain, clasp, proportions, placement, reflections, and whether the same piece survives on-body generation. |
| **Identity across a campaign** | One adult cast reference, one product, and four shot briefs | Nano Banana 2, Seedream 5 Pro, Muse | Face, hair, body, skin tone, product, and styling continuity across close-up, full-length, seated, and movement shots. |
| **Complex multi-reference brief** | Model, garment, accessory, location, and layout references with explicit constraints | Muse, Nano Banana 2, GPT Image 2, Seedream 5 Pro | Muse's “thinking” behavior: which model satisfies the most simultaneous constraints without losing or blending references. |

Use only adult subjects and ordinary commercial swimwear imagery. Describe differences in safety handling as observed completion, refusal, or unwanted alteration rates; do not frame the test as bypassing safeguards.

### Prompt and asset set

Build a compact, rights-cleared benchmark set that resembles real work and produces the vertical comparisons above:

- 6 fashion briefs: clean studio, outdoor editorial, patterned or difficult-texture garment, swimwear, movement, and a four-shot identity series.
- 6 product/reference briefs: two apparel SKUs plus jewelry, beauty packaging, footwear, and a bag. Include exact color, fine texture, unusual silhouette, reflective material, and tiny construction details.
- 6 editing briefs: remove, replace, recolor, relight, extend, and a two-step revision where the second edit must preserve the first.
- 4 typography/layout briefs: beauty headline, shade/product name, packaging label, and multi-element promotional layout.
- 2 constraint-heavy Muse briefs: four or more references with explicit inclusion, exclusion, placement, and preservation requirements.

Use three runs per brief and preserve every output, including failures. Run the complete 24-brief narrative set on the four core models first: Nano Banana 2, GPT Image 2, Seedream 5 Pro, and Muse. That creates 288 core outputs before retries (24 briefs × 3 runs × 4 models). Give secondary models a smaller qualification set, then run only the relevant finalists on the full track. This keeps the visual story coherent and the generation budget useful.

Run production-relevant 4:5, 1:1, and 16:9 tasks rather than converting everything to a square. Use the same source assets and semantically identical prompts, but allow documented model-specific syntax only when the GUI itself requires it. Record native resolution, quality mode, seed support, safety rejection, retries, and any hidden preprocessing.

### What to measure

| Dimension | Practical definition | Evaluation method |
| --- | --- | --- |
| Instruction adherence | Did the output perform every requested change and avoid unrequested changes? | Blind 1–5 human rubric plus explicit checklist pass/fail. |
| Product/garment fidelity | Are silhouette, construction, texture, color, print, hardware, and logos preserved? | Side-by-side expert review; checklist by SKU; color difference or OCR where useful. |
| Reference reliability | Were all supplied references interpreted separately and preserved in the requested roles? | Per-reference checklist plus penalties for omission, blending, substitution, or invented attributes. |
| Identity consistency | Does the same person remain recognizably the same across the series? | Blind human comparison plus a documented similarity measure used only as supporting evidence. |
| Edit locality/preservation | Did untouched areas remain untouched? | Registered image comparison/mask where possible plus expert review. |
| Visual quality | Would an art director consider the image finished or close enough to finish? | Blind pairwise preference and defect tags for anatomy, materials, lighting, and artifacts. |
| Typography accuracy | Is required copy exact and correctly structured? | OCR/edit-distance score plus visual hierarchy review. |
| Usable-output rate | Share of outputs that could enter retouching or approval without regeneration. | Predefined pass gate; report raw numerator/denominator. |
| Latency | Time from submitted request to retrievable output. | p50 and p95 from Astria request logs, excluding manual review time. |
| Cost per approved output | What did it cost to obtain one usable result? | Total Astria generation spend divided by outputs passing the usability gate. |
| Retouch burden | How much correction remains after generation? | None / light / substantial / unusable rubric, optionally timed on finalists. |
| Safety-handling outcome | Did a benign adult commercial brief complete, refuse, or return an unnecessarily altered concept? | Record completion/refusal/alteration without attempting to evade safeguards. |

The headline economic metric is **cost per approved output**, not nominal cost per image. A cheap endpoint that needs six attempts can be more expensive than a premium model that passes on the first attempt.

### Judging and disclosure

- Randomize output order and hide model names during quality review.
- Use at least three reviewers for finalist comparisons; include one fashion/product practitioner.
- Separate “preference” from “accuracy.” A beautiful image can fail product fidelity.
- Publish the prompt text, source-asset description, settings, output count, failures, and scoring rubric.
- Display representative failures, not only hand-picked winners.
- Disclose that Astria publishes the comparison and sells access to the tested endpoints.
- State that results describe the tested Astria endpoints on the capture date, not every implementation of the underlying model.
- Keep raw results in a versioned machine-readable file so an article refresh does not erase the earlier result.

### Visual comparison specification

Every major conclusion needs a visual example. Use a consistent component rather than dropping unrelated images into prose:

1. Show the source references and exact prompt above each comparison.
2. Use a four-column desktop grid in this fixed order: Nano Banana 2, GPT Image 2, Seedream 5 Pro, Muse. On mobile, use a labeled horizontal comparison or stacked cards without changing the order.
3. Show the first valid output from the predetermined seed/run, not a hand-picked favorite. Put alternate runs in an expandable gallery.
4. Keep aspect ratio, requested output size, source assets, and semantic prompt identical. Document unavoidable model-specific settings in the caption.
5. Add concise callouts directly below each image: `garment`, `identity`, `text`, `reference`, `texture`, `safety outcome`, and `usable/not usable`.
6. Include a zoom crop for typography, jewelry construction, fabric texture, and face identity. Readers cannot evaluate those from a reduced four-up grid.
7. Place a verdict below the full grid, never above it: one sentence saying which model won this case and why.
8. Include at least one losing/failure case for every recommended model so the article feels diagnostic rather than promotional.

Planned visual sets:

- **Figure 1 — Fashion default:** four-model on-model campaign comparison.
- **Figure 2 — Texture and color:** full image plus identical 200% garment crops.
- **Figure 3 — Swimwear sensitivity:** completion/refusal/alteration comparison with no provocative framing.
- **Figure 4 — Beauty and text:** portrait, labeled product pack, and exact campaign headline; include OCR transcript beneath each.
- **Figure 5 — Jewelry:** original product reference, on-body results, and macro crops of settings/chains/stones.
- **Figure 6 — Identity strip:** four shots per model in rows so face and styling drift are visible.
- **Figure 7 — Muse reference reasoning:** all input references followed by outputs and a passed/failed constraint checklist.

Store final web assets under a dedicated versioned path such as `static/img/model-benchmarks/2026-09/`. Preserve full-resolution originals separately for downloadable/lightbox inspection; the article derivatives should share dimensions and compression so presentation does not favor one model.

## Results-page structure

1. **The answer:** Nano Banana 2 is the best general fashion model; use GPT Image 2 for beauty/text, Seedream 5 for swimwear and its color/texture/identity strengths, and Muse when reference reliability is paramount.
2. “Models tested” with popular selector and public-gallery context.
3. Compact “start here / switch when” decision table.
4. Cost per generation, usable-output rate, and cost per approved output.
5. Public leaderboard context, clearly separated from Astria test results.
6. Fashion, swimwear, beauty/text, jewelry, identity, and complex-reference comparison grids with identical source assets and prompts.
7. Failure analysis: garment drift, identity drift, anatomy, unwanted edits, text errors, and refusals.
8. Decision tree: “If your job is X, start with Y; if it fails for reason Z, try W.”
9. Methodology summary and link to the full methodology page.
10. Disclosure, capture date, model versions, and next scheduled refresh.

Avoid “X destroys Y,” “objective best,” and percentage-improvement headlines unless the sample and confidence support them. Prefer “best in our product-fidelity track” or “lowest cost per approved typography output in this test.”

## Rollout and gates

### Phase 0 — benchmark preparation

- Freeze the live catalog snapshot and endpoint capabilities.
- Choose rights-cleared fashion, swimwear, beauty, jewelry, and product source assets and build the 24-brief set.
- Run a small calibration set to find prompts that discriminate without favoring one model's syntax.
- Finalize judging rubric before seeing named results.
- Create the versioned result schema and output archive.

### Phase 1 — three-page pilot

- Publish the Astria model field guide.
- Publish the methodology/preface page.
- Run the four-model core benchmark—Nano Banana 2, GPT Image 2, Seedream 5 Pro, and Muse—then publish the results hub with the seven specified visual sets.
- Add only contextual links from the four existing pages identified above.

### Phase 2 — comparisons

Start with the Nano Banana family, Seedream family, and GPT Image 2 versus Nano Banana 2. Unlock the remaining comparisons when at least one condition holds:

- Search Console shows impressions for the matchup or model-selection query.
- Astria product usage shows meaningful adoption of both compared models.
- The benchmark exposes a clear, useful tradeoff that the results hub cannot explain briefly.

### Phase 3 — public-gallery challengers

Run a quarterly 12-brief qualification set. Promote only the best two challengers per track into the full benchmark. Keep the roundup under one evergreen URL, archive the capture date, and remove retired models from current recommendations without deleting their historical results.

### Success and stop rules

Review 28 and 56 days after publication:

- Organic: impressions, clicks, CTR, query mix, and position for model-selection and matchup terms.
- Product: model-selector clicks, prompt starts, sign-ups, and generation starts attributable to each page.
- Editorial: internal searches for model names and scroll/click behavior on the winner tables.
- Refresh burden: time required to re-run the benchmark and update volatile catalog facts.

Continue the cluster when the pilot earns relevant impressions, assists product use, or supplies a high-value sales/education asset. Stop creating matchup pages if the hub absorbs the demand, model names turn over faster than pages can rank, or the tests do not expose stable differences.

## Refresh policy

- **Catalog check:** monthly and before every related publication.
- **Public leaderboard context:** capture on publication day; verify monthly while a page is receiving traffic.
- **Astria benchmark:** quarterly, or sooner when the default model changes or a major family release enters the popular selector.
- **Article labels:** show both “catalog checked” and “benchmark run” dates; they answer different questions.
- **Ledger volatility:** mark every page `M P F` for model availability, pricing, and endpoint capabilities. Results pages also need a quarterly benchmark-review owner.

## Source set for commissioning

- Astria live catalog: `astria models --refresh`
- Astria public partner gallery: `astria tunes list --gallery --branch partner-1 --limit 300`
- Astria public GUI: <https://www.astria.ai/gallery/tunes?branch=partner-1>
- Artificial Analysis image benchmarking methodology: <https://artificialanalysis.ai/image/methodology>
- Artificial Analysis text-to-image leaderboard: <https://artificialanalysis.ai/image/leaderboard/text-to-image>
- Artificial Analysis image-editing leaderboard: <https://artificialanalysis.ai/image/leaderboard/editing>
- GenAI Arena / GenAI-Bench: <https://github.com/TIGER-AI-Lab/GenAI-Bench>
- ImgEdit-Bench: <https://github.com/pku-yuangroup/ImgEdit>
- FIT fit-aware virtual try-on benchmark: <https://johannakarras.github.io/FIT/>

## Recommended next action

Commission the four-model visual benchmark before drafting comparison prose. The first concrete deliverable should be the rights-cleared source bundle, 24 exact briefs, scoring sheet, machine-readable result schema, and seven figure layouts. Generate the fashion, swimwear, beauty/text, jewelry, identity, texture/color, and Muse multi-reference sets; the resulting images should drive the claims and article structure rather than merely decorate a prewritten conclusion.

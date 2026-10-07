---
title: "Nano Banana 2.1 for Fashion, Ecommerce, and Marketing: Comparison"
description: "30 matched reference-led outputs of Nano Banana 2.1, 2.0, Sunburst, Flare and Seedream Pro: garment fidelity, identity, ad copy, campaigns and Arena ranking."
slug: nano-banana-2-1-fashion-ecommerce-marketing
date: 2026-10-07
hide_table_of_contents: false
image: /img/model-benchmarks/2026-10/nb21/hero-portrait-nano-banana-2-1.webp
authors: [astria]
tags: [models, comparisons]
keywords:
  - Nano Banana 2.1 fashion
  - Nano Banana 2.1 vs Nano Banana 2
  - Nano Banana 2.1 ecommerce
  - Nano Banana 2.1 marketing
  - commercial multi-image editing
---

import ImageModelComparison from '@site/src/components/ImageModelComparison';

**Nano Banana 2.1 is a strong candidate for commercial reference-based image work: it ranks third in Arena's multi-image-edit Product, Branding & Commercial Design category as checked on October 7, 2026.** In our 30 reference-led samples, it preserves the jacket's main features and produces convincing on-model portraits, but does not win every identity, label, or campaign constraint. It belongs on a production shortlist alongside Sunburst and Flare, with product-specific approval before use.

For a fashion brand, a prettier picture with the wrong embroidery is a failed asset. For an ecommerce team, readable copy cannot compensate for a changed product shape. For a marketing team, composition, product fidelity, and copy accuracy need separate approvals.

<!-- truncate -->

<figure data-source-reference="/articles/img/model-benchmarks/2026-10/nb21/source-cast.webp /articles/img/model-benchmarks/2026-10/nb21/source-jacket.webp"><img src="/articles/img/model-benchmarks/2026-10/nb21/hero-portrait-nano-banana-2-1.webp" alt="Reference-driven Nano Banana 2.1 portrait of the synthetic cast wearing the orange crane-embroidered jacket" /><figcaption>Nano Banana 2.1 · separate native 4K cover render · supplied cast and garment references. This cover is outside the matched 2K comparison.</figcaption></figure>

**Tested October 7, 2026.** Five original briefs plus a real beauty-product test, five models, one output per cell. We show reviewed selections and report the rejected cells in text; there are no replacement runs in the comparison.

## What Nano Banana 2.1 changes

Google's released model ID is `gemini-nano-banana-2.1`. Its predecessor, called Nano Banana 2 or 2.0 in this comparison, is `gemini-3.1-flash-image`. Nano Banana Pro is a separate model.

Google describes improvements to realism, instruction following, text rendering, and character consistency through successive edits. Outputs support 1K, 2K, and 4K; wide-image tiling fixes target panoramic ratios at higher resolutions. It supports up to 14 reference images, with documented consistency roles for up to four characters and ten objects. These are provider capabilities to qualify on a real brief, rather than proof of exact garment reconstruction. See [Google's model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-nano-banana-2.1).

Google Cloud dates the generally available release to October 6, 2026. Its [technical specifications](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/nano-banana-2-1) also rule out provider-level seed and sampling controls. An identical seed is therefore not a fair-control promise for this comparison.

## Arena's current commercial multi-image-edit ranking

**Checked October 7, 2026; leaderboard displayed October 6, 2026 as its update date.** The table below transcribes the relevant rows from [Arena's multi-image-edit commercial-design leaderboard](https://arena.ai/leaderboard/image-edit/multi-image-edit/commercial-design), with the Multi Image Edit category selected and license filter set to All.

| Displayed rank | Model in Arena | Score and displayed uncertainty | Rank spread | Votes | Status |
| ---: | --- | ---: | --- | ---: | --- |
| 1 | GPT Image 2.5 Sunburst | 1557 ±10 | 1–1 | 6,958 | Preliminary |
| 2 | GPT Image 2.5 Flare | 1503 ±10 | 2–3 | 6,998 | Preliminary |
| **3** | **Gemini Nano Banana 2.1** | **1490 ±13** | **2–4** | **2,389** | **Preliminary** |
| 4 | GPT Image 2 (medium) | 1484 ±7 | 3–4 | 25,342 | — |
| 5 | Seedream 5.0 Pro | 1431 ±8 | 5–6 | 14,067 | — |
| 6 | Muse Image | 1422 ±7 | 5–6 | 20,732 | — |
| 7 | Gemini 3.1 Flash Image / Nano Banana 2 **[web-search]** | 1403 ±7 | 7–9 | 16,876 | — |
| 8 | Ideogram 4.5 | 1391 ±16 | 7–11 | 1,327 | Preliminary |
| 9 | Gemini 3 Pro Image 2K / Nano Banana Pro | 1384 ±6 | 8–11 | 24,605 | — |
| 10 | Reve 2.0 | 1383 ±14 | 7–11 | 1,795 | — |

Nano Banana 2.1 sits behind Sunburst and Flare by displayed score and ahead of GPT Image 2 (medium). Its displayed score intervals overlap those of Flare and GPT Image 2, and Arena gives it a rank spread of 2–4. A rigid claim that it is conclusively the third-best commercial model would overstate this snapshot.

These scores concern human preference in **commercial multi-image editing**. They are not overall image-generation ranks, overall editing ranks, garment-accuracy percentages, or our test scores. The predecessor's entry explicitly includes web search; our Astria briefs do not request search grounding. We do not treat those configurations as identical.

## Our comparison design

We selected Sunburst and Flare because they lead this specific Arena category, and Seedream 5 Pro because it ranks fifth and offers a relevant material-and-fashion alternative. The direct predecessor is required to isolate the practical upgrade question. Muse remains a useful multi-reference challenger; Ideogram 4.5 and Reve 2.0 are not interchangeable with the different versions currently exposed in Astria's catalog.

The five original cases use the same supplied images, exact semantic prompt, 4:3 requested aspect ratio, 2K requested resolution, and one requested output per model in Astria workspace **896, Articles**. Face inpainting and film grain are disabled. The only returned image is the predetermined comparison candidate; there are no selective reruns.

We use 2K as the common resolution supported by Seedream Pro and the other selected endpoints. Actual dimensions differ between providers. The cover is a separate native 4K render with the supplied portrait and jacket. No source or output was enlarged to meet the resolution gate.

The synthetic jacket and serum references come from our earlier benchmark assets. The jacket source has four teal cranes, four brass buttons, two lower floral motifs, orange leaf-pattern jacquard, a pointed collar, and a scalloped hem. The serum source supplies the bottle, pump, carton, palette, and label design. These are fictional products made for testing, not customer SKUs.

We checked the deployed integration before submitting 2.1: production release v4821 contains the routing update. Tune `4180298` now targets `gemini-nano-banana-2.1`; separate tune `5850983` targets `gemini-3.1-flash-image`. The two product-only 2.0 baselines were generated before the upgrade, with the verified former mapping; all later 2.0 cases use the separate legacy tune. Spicy Mayo is deprecated and excluded. The curated MCP catalog still carries an older display label, which is why we verified release history and committed provider mappings instead of relying on names. Attempt-level transport telemetry is not exposed by the tool.

## Garment detail: strong main features, imperfect labels

The brief asks for a complete front view on an invisible mannequin, with the referenced jacket's construction, motif counts, color, and weave preserved. This tests a catalog transformation before adding the complexity of a person or location.

The exact brief supplied to all five models was:

```text
Create a product-only ecommerce photograph of <faceid:5851059:1> jacket on an invisible mannequin, front view with sleeves hanging naturally, against a warm ivory seamless studio background. Preserve the exact burnt-orange silk jacquard leaf weave, all four teal crane motifs and lower floral details, four brass dome buttons, pointed collar, cropped length and scalloped hem. Show the complete garment without clipping. Soft even catalog lighting, realistic material detail. No person, no accessories, no added text, no new logos.
```

<ImageModelComparison
  title="Jacket — four reviewed comparison selections"
  description="The same supplied jacket and brief. The 2.1 output is withheld because it changes the collar label; its result is reported below."
  reference={{label: 'Supplied synthetic jacket', src: '/articles/img/model-benchmarks/2026-10/nb21/source-jacket.webp', alt: 'Orange leaf-pattern jacket with four teal cranes, two floral motifs, four brass buttons and scalloped hem'}}
  items={[
    {label: 'Nano Banana 2.0 — pre-upgrade', src: '/articles/img/model-benchmarks/2026-10/nb21/jacket-nano-banana-2-0.webp', alt: 'Nano Banana 2.0 jacket catalog baseline', verdict: 'Retains four cranes and four buttons; recognizably follows the source collar and hem. Cloth relief and feather details are redrawn.'},
    {label: 'GPT Image 2.5 Sunburst', src: '/articles/img/model-benchmarks/2026-10/nb21/jacket-sunburst.webp', alt: 'GPT Image 2.5 Sunburst jacket catalog baseline', verdict: 'Clear hanging-garment presentation and strong motif counts. Jacquard relief is more pronounced; the source collar label is omitted.'},
    {label: 'GPT Image 2.5 Flare', src: '/articles/img/model-benchmarks/2026-10/nb21/jacket-flare.webp', alt: 'GPT Image 2.5 Flare jacket catalog baseline', verdict: 'Preserves the recognizable color, cranes, buttons and scalloped outline. Texture and embroidery are reinterpreted; the collar label is omitted.'},
    {label: 'Seedream 5 Pro', src: '/articles/img/model-benchmarks/2026-10/nb21/jacket-seedream5pro.webp', alt: 'Seedream 5 Pro jacket catalog baseline', verdict: 'Strong warm color and recognizable weave, four cranes and four buttons. The collar label is omitted and the lower flowers are simplified.'}
  ]}
/>

These images preserve the main garment features well enough for this editorial comparison. They are not pixel-identical product reproductions. We would check embroidery close-ups and trim placement against an actual SKU before approving ecommerce use. The source includes an invented collar label; its removal by Sunburst and Flare is another reason to keep packaging or brand-label fidelity separate from general visual quality.

Seedream also completed and retained the main garment structure, with simplified floral details and no collar label. The 2.1 sample also retains four cranes, four brass buttons, lower flowers, leaf-pattern cloth and a scalloped hem. However, it replaces the invented source collar label with different lettering. We keep that image internal rather than presenting it as an approved branded product asset. This is a specific miss on this run, not evidence that every 2.1 product edit fails. The five single-output cells do not establish a general winner for fabric fidelity. No missing or incompatible output is replaced with a text-only example.

| Tested endpoint | Prompt ID | Actual pixels |
| --- | ---: | --- |
| Nano Banana 2.1, label change; image withheld | 47133603 | 2400 × 1792 |
| Nano Banana 2.0, before routing upgrade | 47132456 | 2400 × 1792 |
| Sunburst | 47132457 | 2304 × 1792 |
| Flare | 47132458 | 2304 × 1792 |
| Seedream 5 Pro | 47132459 | 2368 × 1776 |

These are Astria endpoint tests, not reproductions of Arena's evaluation prompts or serving configuration. The successful transport provider of each attempt is not exposed by the generation tool.

## Marketing copy: readable headlines are only half the job

The second brief turns a supplied serum bottle and carton into a rose-and-ivory campaign layout. It requests three exact copy lines: “LUMEN SERUM”, “A daily ritual.”, and “DISCOVER THE COLLECTION”, with the product on the right and copy on the left.

All five models render those three lines legibly in the completed baseline outputs. Sunburst adds an outlined call-to-action treatment; Flare uses an italic middle line; 2.0 uses a simpler sans-serif layout. Nano Banana 2.1 uses a restrained sans-serif headline and serif middle line. The copy pass therefore does not isolate an upgrade advantage on this brief.

Seedream renders the three marketing lines too, but duplicates “30 mL” near the bottom of the carton. That is an unrequested packaging change, even though the large ad copy reads correctly.

Product fidelity still needs a stricter judgment. Bottle and pump proportions differ, and the upright carton creates a new label presentation. The source bottle omits the “04” printed on the carton, while our prompt explicitly requests “No. 04 ROSE” on both. This tests controlled text normalization as well as preservation. Nano Banana 2.1 retains the source bottle's “No. ROSE” instead of applying the requested “No. 04 ROSE” normalization. We keep all five images internal because exact packaging and geometry did not pass. The typography findings remain useful, but none is an approved SKU advertisement.

| Model | Three requested ad lines | Specific packaging or layout observation |
| --- | --- | --- |
| Nano Banana 2.1 | Correct and legible | Bottle omits requested “04”; carton includes it |
| Nano Banana 2.0 | Correct and legible | Carton text remains sideways despite upright presentation |
| Sunburst | Correct and legible | Adds an outlined CTA treatment; product proportions differ |
| Flare | Correct and legible | Italic middle line; pump and bottle proportions differ |
| Seedream 5 Pro | Correct and legible | Adds an extra “30 mL” near the carton bottom |

For marketers, approve the product first, then check spelling, hierarchy, contrast, and room for channel-specific crops. For ecommerce teams, retain approved product photography when an AI transformation changes the SKU's defining shape or hardware.

## Real beauty product: Seedream wins on packaging fidelity

**Seedream 5 Pro wins this bottle test.** It keeps the −417 Milk Cleanser’s black label pattern, leaf seal and handwritten brand line closest to the supplied photograph, while delivering a polished ecommerce image.

We took a real product photograph from the 417 workspace and adapted its actual store-image brief: improve the lighting, remove distracting glare, put the bottle on white, and preserve the packaging. All five models received the same photograph and prompt, with one output each.

<div className="benchmark-grid">
  <figure className="benchmark-card benchmark-card--source"><img loading="lazy" src="/articles/img/model-benchmarks/2026-10/nb21/real-beauty-source.webp" alt="Supplied photograph of the real −417 Milk Cleanser with black pump, gold collar and patterned label" /><figcaption><strong>Supplied product photograph</strong>Real −417 Milk Cleanser, before the studio-lighting edit.</figcaption></figure>
  <figure className="benchmark-card" data-source-reference="/articles/img/model-benchmarks/2026-10/nb21/real-beauty-source.webp"><img loading="lazy" src="/articles/img/model-benchmarks/2026-10/nb21/real-beauty-seedream5pro.webp" alt="Seedream 5 Pro studio photograph retaining the −417 Milk Cleanser’s black label pattern and handwritten brand line" /><figcaption><strong>Winner: Seedream 5 Pro</strong>Closest packaging match, with clean lighting and a natural product finish.</figcaption></figure>
</div>

| Model | Verdict for this product |
| --- | --- |
| **Seedream 5 Pro** | **Winner.** Closest black pattern, leaf seal and handwritten brand line; main English and French copy stays readable. |
| Nano Banana 2.1 | Clean finish and readable main copy, but turns the black pattern gold and redraws the seal. |
| Nano Banana 2.0 | Similar tradeoff: readable copy, changed pattern color and a redesigned seal. |
| Sunburst | Strong packshot, but drops the handwritten brand line and changes the seal. |
| Flare | Strong packshot, but drops the handwritten brand line and changes the seal. |

The deciding factor is brand fidelity: a beautiful bottle with changed packaging loses this round. Seedream’s tiny seal lettering and handwriting still need a final check before a campaign goes live. This is a winner for this product and brief, not a universal ranking.

## Identity across two poses

For identity ground truth we adopted a detailed, synthetic portrait from our earlier GPT Image 2 benchmark: 1792 × 2304 pixels, not an enlarged casting thumbnail. Its wavy dark bob, green eyes, facial proportions and skin marks are the visual anchors. It already includes the jacket, so the separate garment reference reinforces that cue. This tests one supplied identity across views, not independent casting or every possible garment assignment. A source created by GPT Image 2 may also favor related models; a wider production study needs more casts and source styles.

<div className="benchmark-grid benchmark-grid--three">
  <figure className="benchmark-card benchmark-card--source"><img loading="lazy" src="/articles/img/model-benchmarks/2026-10/nb21/source-cast.webp" alt="Detailed synthetic adult portrait adopted as the fixed cast identity" /><figcaption><strong>Cast</strong>Fixed synthetic portrait, adopted as this test's identity ground truth</figcaption></figure>
  <figure className="benchmark-card benchmark-card--source"><img loading="lazy" src="/articles/img/model-benchmarks/2026-10/nb21/source-jacket.webp" alt="Fixed orange jacquard jacket with four teal cranes and four brass buttons" /><figcaption><strong>Jacket</strong>Fixed construction, color, weave, motifs and trim</figcaption></figure>
  <figure className="benchmark-card benchmark-card--source"><img loading="lazy" src="/articles/img/model-benchmarks/2026-10/nb21/source-necklace.webp" alt="Fixed synthetic rose-gold necklace with nine green stones and white stone separators" /><figcaption><strong>Campaign accessory</strong>Nine green stones, white separators, rose-gold settings and cable chain</figcaption></figure>
</div>

The first brief asks for a front-view waist-up portrait including the complete jacket and hem. The second changes only the pose: a 30-degree turn to camera-left, with the face looking back at camera. Both request the same facial and garment features, ivory background, soft light, no jewelry and no added text.

<ImageModelComparison
  title="Front view — identity versus pose compliance"
  description="Same cast, jacket, semantic prompt and requested settings. Use the source references above to assess identity and garment detail."
  reference={{label: 'Supplied synthetic cast; jacket reference above', src: '/articles/img/model-benchmarks/2026-10/nb21/source-cast.webp', alt: 'Fixed detailed synthetic portrait used as identity ground truth', verdict: 'Use this face and the separate jacket reference above to check each output.'}}
  items={[
    {
        "label": "Nano Banana 2.1",
        "src": "/articles/img/model-benchmarks/2026-10/nb21/identity-front-nano-banana-2-1.webp",
        "alt": "Nano Banana 2.1 supplied-cast identity front jacket test",
        "verdict": "Upright front pose, recognizable bob and face, four cranes and four buttons. Skin is smoother than the supplied portrait; a matching orange lower garment is invented."
    },
    {
        "label": "Nano Banana 2.0",
        "src": "/articles/img/model-benchmarks/2026-10/nb21/identity-front-nano-banana-2-0.webp",
        "alt": "Nano Banana 2.0 supplied-cast identity front jacket test",
        "verdict": "Upright front pose with recognizable facial anchors and main garment features. Face appears narrower; a matching orange lower garment is invented."
    },
    {
        "label": "GPT Image 2.5 Sunburst",
        "src": "/articles/img/model-benchmarks/2026-10/nb21/identity-front-sunburst.webp",
        "alt": "GPT Image 2.5 Sunburst supplied-cast identity front jacket test",
        "verdict": "Stays close to the source skin detail, face and head tilt; four cranes and buttons. Hands-in-pockets styling and ivory trousers are added."
    },
    {
        "label": "GPT Image 2.5 Flare",
        "src": "/articles/img/model-benchmarks/2026-10/nb21/identity-front-flare.webp",
        "alt": "GPT Image 2.5 Flare supplied-cast identity front jacket test",
        "verdict": "Close facial resemblance and strong garment detail. Retains the source head tilt rather than a strictly upright front pose; adds dark trousers."
    },
    {
        "label": "Seedream 5 Pro",
        "src": "/articles/img/model-benchmarks/2026-10/nb21/identity-front-seedream5pro.webp",
        "alt": "Seedream 5 Pro supplied-cast identity front jacket test",
        "verdict": "Recognizable cast and upright pose with the main garment attributes intact. Skin, embroidery and surface texture are redrawn."
    }
]}
/>
Nano Banana 2.1 and 2.0 follow the upright front-pose direction more clearly. Sunburst and Flare retain more of the supplied portrait's skin texture and head tilt, which helps likeness but weakens strict pose compliance. All five preserve the recognizable bob, eyes and face alongside the main jacket features. These are human visual judgments, not biometric similarity measurements.

<ImageModelComparison
  title="Three-quarter view — the same identity and garment"
  description="Same cast, jacket, semantic prompt and requested settings. Use the source references above to assess identity and garment detail."
  reference={{label: 'Supplied synthetic cast; jacket reference above', src: '/articles/img/model-benchmarks/2026-10/nb21/source-cast.webp', alt: 'Fixed detailed synthetic portrait used as identity ground truth', verdict: 'Use this face and the separate jacket reference above to check each output.'}}
  items={[
    {
        "label": "Nano Banana 2.1",
        "src": "/articles/img/model-benchmarks/2026-10/nb21/identity-three-quarter-nano-banana-2-1.webp",
        "alt": "Nano Banana 2.1 supplied-cast identity three quarter jacket test",
        "verdict": "Clear body turn and direct gaze; recognizable cast, four cranes and four buttons. Skin and embroidery remain somewhat simplified."
    },
    {
        "label": "Nano Banana 2.0",
        "src": "/articles/img/model-benchmarks/2026-10/nb21/identity-three-quarter-nano-banana-2-0.webp",
        "alt": "Nano Banana 2.0 supplied-cast identity three quarter jacket test",
        "verdict": "Clear body turn and gaze, retaining the cast and garment anchors. Smooths skin and adds a matching orange lower garment."
    },
    {
        "label": "GPT Image 2.5 Sunburst",
        "src": "/articles/img/model-benchmarks/2026-10/nb21/identity-three-quarter-sunburst.webp",
        "alt": "GPT Image 2.5 Sunburst supplied-cast identity three quarter jacket test",
        "verdict": "Strong source resemblance and material detail with the requested body turn. Adds hands-in-pockets styling and ivory trousers."
    },
    {
        "label": "GPT Image 2.5 Flare",
        "src": "/articles/img/model-benchmarks/2026-10/nb21/identity-three-quarter-flare.webp",
        "alt": "GPT Image 2.5 Flare supplied-cast identity three quarter jacket test",
        "verdict": "Recognizable face, detailed cloth and a clear turn. Retains a stronger head tilt and adds pocket styling."
    },
    {
        "label": "Seedream 5 Pro",
        "src": "/articles/img/model-benchmarks/2026-10/nb21/identity-three-quarter-seedream5pro.webp",
        "alt": "Seedream 5 Pro supplied-cast identity three quarter jacket test",
        "verdict": "Recognizable cast, clear body turn and garment structure. Facial finish and fabric relief differ from the source."
    }
]}
/>
The pair does not reveal a decisive 2.1-over-2.0 identity win. Both Google versions create a coherent cast across these two views, while the supplied facial texture stays closer in the GPT variants. Skin smoothing, tiny marks, weave and crane feathers still change. A campaign can tolerate more variation than a casting approval or a product detail page; decide that tolerance before reviewing outputs.

## Three-reference outfit and brand-direction test

The fifth brief combines the same cast, jacket and nine-stone necklace in a pale limestone gallery, with ivory trousers, warm side light and a relaxed walking pose. The references have explicit roles; the necklace should stay separate from the teal embroidery. We supplied this identical brief to every model:

```text
Create a full-length fashion campaign photograph of <faceid:5851882:1> woman wearing <faceid:5851059:1> jacket with plain ivory trousers and <faceid:5851884:1> necklace, in a pale limestone gallery. Brand direction: restrained ivory, burnt orange and teal, warm late-afternoon side light, relaxed walking pose, premium editorial realism. Preserve cast identity, jacket construction, four teal crane motifs, four brass buttons, leaf weave and scalloped hem. Preserve the necklace's nine green stones, white stone separators, rose-gold settings and cable chain; wear it visibly at the neckline without merging it with embroidery. Plausible anatomy and garment contact, no extra people, no additional jewelry, no invented product, no added text.
```

All five combine the three reference roles into a coherent fashion scene. None passes every strict campaign constraint. We keep these images internal and report the observations rather than featuring a compromised product example.

| Model | What works | Why this cell needs revision |
| --- | --- | --- |
| Nano Banana 2.1 | Complete walking figure, plausible hands, warm limestone setting, recognizable cast and four cranes | Open neckline leaves only three buttons clearly visible; tiny necklace settings and stone geometry are not verified as exact |
| Nano Banana 2.0 | Complete walking pose and strong warm directional light | Introduces a cream collar that changes the jacket; necklace geometry is reinterpreted |
| Sunburst | Strong likeness, rich cloth detail and convincing warm architecture | Clips the top of the head, opens the neckline and shows three buttons; necklace settings change |
| Flare | Close likeness, four visible buttons and polished garment-and-jewelry separation | Crops below the knees instead of a full-length frame; necklace stone geometry changes |
| Seedream 5 Pro | Recognizable cast, four visible buttons, coherent architecture and lighting | Crops the lower legs; tiny necklace settings cannot be approved as an exact accessory reproduction |

The useful distinction is between **assembling the references** and **preserving every product constraint**. The models manage the first more consistently than the second. For a brand campaign, review the neckline, closures, jewelry settings, hands and crop before judging the atmosphere. For a full catalog, qualify additional identities and garments, then inspect repeated edits for drift.

## Which model would we start with?

For this cast and garment, **Nano Banana 2.1 is a credible starting point for pose-directed, reference-led fashion portraits**. It maintains the main garment anchors and produces a coherent identity pair. The product-only label miss and uncertain campaign accessory detail mean we would not approve every output automatically.

**Sunburst and Flare deserve the same brief** when close source likeness and editorial material detail matter. In these samples they retain more facial texture, while occasionally retaining the source pose too strongly or choosing a crop the brief did not request. Their Arena lead is relevant shortlist evidence, not a substitute for product review.

**Seedream 5 Pro remains a useful fabric-and-color alternative at 2K.** It keeps the principal jacket features and coherent casting here, but the packaging duplication and campaign crop need correction. **Nano Banana 2.0 remains competitive on these small samples**; we did not measure a consistent upgrade advantage in identity or three-line ad copy.

These are 30 qualification samples, including the five supplemental small-text runs, not a statistically reliable model ranking. They use provider defaults rather than matched internal inference budgets: Google's 2.1 default thinking is medium, while its predecessor defaults to minimal. Actual delivered ratios also vary slightly. We did not test long editing chains, real customer SKUs, wider cast diversity or a matched latency distribution. Keep aesthetic, identity, product and copy approvals separate.

## What the community is saying

Grokbot was unavailable in this session. We used web search and checked the following short quotations against the original posts. Both pages displayed “2h ago” when checked on October 7, 2026; the October 7 posting date is inferred from that relative timestamp. These are community anecdotes, not Astria measurements.

- **u/TimeCounty7878**, posting in reAPI's official subreddit, wrote: “2.1 kept the exact wording, and the layout is cleaner.” Their comparison used one run per prompt and different models' default thinking settings. The vendor-affiliated venue and small sample matter when assessing the claim. [Original post, checked October 7](https://www.reddit.com/r/reAPIOfficial/comments/1wzlz32/i_ran_nano_banana_21_vs_nano_banana_2_on_the_same/).
- **u/mementomori2344323**, describing a recursive FLUX 3 versus 2.1 edit test, qualified its metric as measuring “only preservation of untouched regions.” The test used different model-specific interfaces and three source images. It raises a useful concern about drift through repeated edits, but does not measure overall commercial-image quality. [Original post, checked October 7](https://www.reddit.com/r/FluxAI/comments/1wz97mh/flux_3_crushes_nano_banana_21_in_repeated_edit/).

Those reports suggest useful qualification tests: exact-copy layouts, repeated local edits, and settings-aware latency checks. They do not replace our controlled reference comparison.

## Standard versus Flex, resolution, and budgeting

**Standard is available; Nano Banana 2.1 does not support Flex.** Google's Cloud pricing page explicitly says so in the Nano Banana 2.1 footnote, even though a combined table heading mentions Flex/Batch/Off-peak. Batch support is separate and should not be mistaken for Flex availability. See [Google Cloud pricing](https://cloud.google.com/gemini-enterprise-agent-platform/generative-ai/pricing) and [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing), checked October 7, 2026.

For an interactive creative review, plan around Standard and measure the complete round trip. For an asynchronous approved catalog batch, check whether your chosen interface exposes Google's supported Batch path. The Astria generation tool used here does not expose a service-tier selector; we make no claim that these runs used Batch or Flex. Priority availability differs across Google's documented surfaces, so confirm the specific API before designing a deadline-critical workflow around it.

Budget with current rates for input, reasoning or text output, image output at the chosen resolution, and any search grounding. Divide total generation and review effort by the number of approved assets. A lower output component does not guarantee a cheaper completed campaign when references, reruns, and manual correction change. Get current Astria rates from [Astria pricing](https://www.astria.ai/pricing).

For reproducibility, archive the source images and provider model ID, not just the interface's model name. Use approved reference packs for production, and requalify them after a provider upgrade. Our [benchmark methodology](./how-we-benchmark-ai-image-models.md) explains how we separate material fidelity, identity, copy, and aesthetic judgments.


<aside className="astria-article-cta" aria-label="Compare reference-led image models"><div className="astria-article-cta__mark"><img src="/articles/img/logo@2x.webp" alt="" /></div><p className="astria-article-cta__eyebrow">Test your own reference pack</p><h2 className="astria-article-cta__title">Run one brief across your shortlist</h2><p className="astria-article-cta__copy">Supply approved cast and product images. Compare identity, garment detail and copy before choosing the campaign treatment.</p><div className="astria-article-cta__actions"><a className="astria-article-cta__button astria-article-cta__button--primary" href="https://www.astria.ai/prompts"><span>Generate</span><span aria-hidden="true">→</span></a><a className="astria-article-cta__button astria-article-cta__button--secondary" href="https://www.astria.ai/pricing"><span>Current pricing</span><span aria-hidden="true">→</span></a></div></aside>

---
title: "How We Benchmark AI Image Models for Fashion and Product Work"
description: "The prompts, references, selection rule, costs, limitations, and disclosure behind Astria's 2026 fashion image-model comparison."
slug: how-we-benchmark-ai-image-models
date: 2026-09-05
hide_table_of_contents: false
image: /img/covers/how-we-benchmark-ai-image-models.webp
authors: [astria]
tags: [models, engineering]
keywords:
  - AI image model benchmark
  - image generation benchmark methodology
  - fashion AI benchmark
  - product reference fidelity
---

We benchmark image models on the work a fashion or product team actually has to approve: garments, color, texture, identity, jewelry, copy, benign swimwear, and briefs containing several references at once.

The September 2026 pilot compares **Nano Banana 2, GPT Image 2, Seedream 5 Pro, and Muse** across 11 controlled briefs. Three outputs were requested for every model-and-brief pair: 132 requested, 131 returned.

<!-- truncate -->

<aside className="astria-article-cta" aria-label="Start creating with Astria">
  <div className="astria-article-cta__mark">
    <img src="/articles/img/logo@2x.webp" alt="" />
  </div>
  <p className="astria-article-cta__eyebrow">Transparent comparison</p>
  <h2 className="astria-article-cta__title">Run your own production brief</h2>
  <p className="astria-article-cta__copy">Use the same references and prompt across models, then approve for accuracy and art direction separately.</p>
  <div className="astria-article-cta__actions">
    <a className="astria-article-cta__button astria-article-cta__button--primary" href="/prompts">
      <span>Generate</span><span aria-hidden="true">→</span>
    </a>
    <a className="astria-article-cta__button astria-article-cta__button--secondary" href="/gallery/workspaces">
      <span>Templates gallery</span><span aria-hidden="true">→</span>
    </a>
  </div>
</aside>

## Public leaderboards are context, not a production verdict

Public image leaderboards answer useful questions. They do not all answer the same question.

[Artificial Analysis](https://artificialanalysis.ai/image/methodology) separates text-to-image from image editing, uses human preference, and reports endpoint quality, price, and generation time. Its methodology also distinguishes localized editing from reference-to-image generation. [GenAI-Bench](https://github.com/TIGER-AI-Lab/GenAI-Bench) studies how model judgments align with human preferences collected in a generative arena. [ImgEdit-Bench](https://github.com/pku-yuangroup/ImgEdit) evaluates instruction adherence, editing quality, detail preservation, and single- versus multi-turn editing.

Those are valuable priors. A fashion production decision adds different questions:

- Did the number and placement of buttons survive?
- Is a woven pattern merely plausible, or is it the same pattern?
- Does cobalt remain cobalt under a new lighting treatment?
- Does the same person remain recognizable from close-up to full length?
- Is the packaging copy exact?
- Did the model keep four references separate rather than blend them?

We therefore use public benchmark design as context, then test the current endpoints inside the workflow being recommended.

## What the pilot tested

The pilot has 11 briefs:

| Track | Briefs | Primary risk |
| --- | ---: | --- |
| General fashion | 1 | Overall art direction, garment use, realism, and composition |
| Color and texture | 1 | Jacquard, embroidery, buttons, saturated color, and sheen |
| Swimwear | 2 | Tasteful completion, garment preservation, framing, and unwanted alteration |
| Beauty with text | 1 | Skin, bottle geometry, exact headline, and small packaging copy |
| Jewelry | 1 | Stone count, settings, spacing, chain, scale, and reflections |
| Identity series | 4 | One person and one garment across close-up, full-length, seated, and movement shots |
| Complex references | 1 | Person, garment, necklace, bottle, placement, background, and exclusions in one frame |

All people are adults. The swimwear prompts use ordinary ecommerce and editorial framing and do not attempt to evade safety systems.

## The source assets

The four product references are synthetic and brand-neutral. We created them for this test so no customer product, artwork, or campaign would become public benchmark material. One dedicated, approved synthetic cast identity was reused across all on-model briefs.

<div className="benchmark-grid benchmark-grid--four">
  <figure className="benchmark-card benchmark-card--source"><img loading="lazy" src="/articles/img/model-benchmarks/2026-09/source-jacket.webp" alt="Synthetic orange jacquard jacket benchmark reference" /><figcaption><strong>Textured jacket</strong>Color, weave, cranes, buttons, and silhouette</figcaption></figure>
  <figure className="benchmark-card benchmark-card--source"><img loading="lazy" src="/articles/img/model-benchmarks/2026-09/source-swimsuit.webp" alt="Synthetic cobalt and coral swimsuit benchmark reference" /><figcaption><strong>Swimsuit</strong>Color, asymmetric straps, piping, and rings</figcaption></figure>
  <figure className="benchmark-card benchmark-card--source"><img loading="lazy" src="/articles/img/model-benchmarks/2026-09/source-beauty.webp" alt="Synthetic rose serum bottle and carton benchmark reference" /><figcaption><strong>Beauty pack</strong>Geometry, material, label, and carton</figcaption></figure>
  <figure className="benchmark-card benchmark-card--source benchmark-card--square"><img loading="lazy" src="/articles/img/model-benchmarks/2026-09/source-necklace.webp" alt="Synthetic emerald and rose gold necklace benchmark reference" /><figcaption><strong>Jewelry</strong>Stones, settings, spacing, chain, and clasp</figcaption></figure>
</div>
<p className="benchmark-caption">Ground truth is the rendered source, not the text prompt that produced it. That distinction prevents an evaluator from penalizing a comparison model for an attribute absent from the actual reference.</p>

The visual ground truth is recorded before judging. For example, the rendered jacket contains four crane motifs and four buttons, while the rendered necklace contains nine emeralds. The comparison prompts use those observed facts.

## Controls and selection rule

Every model received the same semantic brief and the same Astria reference tokens. Portrait and editorial work used a shared **3:4** aspect ratio; the jewelry macro used **1:1**. The initial calibration used 4:5, but Muse did not support that ratio, so 3:4 became the fair shared portrait format. Nano Banana 2, GPT Image 2, and Seedream 5 used 2K where exposed; Muse used its native endpoint settings.

Three outputs were requested per cell. The article shows **output 00**, the first predetermined result, for every completed cell. We did not inspect all three and choose the prettiest. Alternate results remain in the run archive, including failures and unwanted variations.

That rule removes one common source of misleading model comparisons: showing the best lucky draw from one model beside an ordinary draw from another.

## What we record

For each request, the benchmark stores:

- model and endpoint identifier;
- exact brief and reference tokens;
- aspect ratio and resolution policy;
- prompt ID;
- output count requested and received;
- reported generation cost;
- public display asset;
- completion, instruction, reference, identity/text, and editorial notes.

The raw run manifest is machine-readable JSON and the first-pass review is a CSV. The public article does not turn those notes into a fabricated universal score.

## How results are judged

We keep accuracy separate from preference.

**Instruction following** asks whether the requested view, pose, framing, objects, and exclusions appeared. **Reference fidelity** checks product color, silhouette, construction, texture, hardware, and separation of roles. **Identity** asks whether the cast remains recognizably the same. **Text** checks wording and layout, with small package copy treated more strictly than text that only looks typographic. **Editorial usability** asks whether a creative team could reasonably take the result into approval or light retouching.

The publication review for this pilot is a disclosed editorial assessment by Astria, not a blinded multi-reviewer scientific study. The output order was fixed before review, but model names are visible in the published comparison. The qualitative verdicts should therefore be read as production guidance supported by inspectable examples, not as statistically powered proof.

A larger follow-up should add at least three blinded reviewers, randomize the presentation order, record pairwise preferences, run OCR for exact text, and calculate cost per approved output using a predefined pass gate.

## Completion and cost

The core run requested **132 images and returned 131**. Forty-three of 44 model-and-brief requests returned all three images. The Nano Banana 2 swimwear-editorial request returned two of three; the endpoint reported no `user_error` and no reason for the missing image. Every model produced safe, tasteful imagery for both swimwear briefs.

The core benchmark cost **$43.15199** in Astria generation charges, rounded to **$43.15** in article copy. Synthetic source creation and ratio calibration cost another **$2.64**, bringing the full generation project to **$45.79199**, rounded to **$45.79**.

Cost per generated image is only an input metric. A production comparison should ultimately divide the total generation and retouch spend by the number of outputs that pass approval.

## Known limitations

- Eleven briefs are enough to show useful differences, not to rank the entire model market.
- One synthetic identity and four synthetic products do not represent every skin tone, textile, body, material, or brand system.
- Three outputs per cell reveal variation but do not provide a large statistical sample.
- Endpoint behavior, pricing, safety handling, and catalog availability can change after September 6, 2026.
- Muse used native endpoint settings while the other core models used exposed 2K settings.
- Text and jewelry geometry were reviewed visually; no OCR or automated geometric score is presented in this pilot.
- Astria publishes this comparison and sells access to the tested endpoints.

The recommendation is about the tested Astria endpoints on the capture date. It is not a claim about every deployment of the underlying models.

## Reproducing the comparison

The exact prompts, source descriptions, reference IDs, prompt IDs, costs, and judging notes live in the repository benchmark package. To reproduce the logic in another workspace:

1. Create rights-cleared source products and one approved adult identity.
2. Record the visual ground truth of each source.
3. Convert each source to a stable reference.
4. Send the same semantic brief to every compatible model.
5. Request the same number of outputs and preserve all of them.
6. Choose the public display rule before opening the results.
7. Review aesthetic quality and product accuracy as separate decisions.

Read the [full side-by-side results](./best-ai-image-models-fashion.md) or use the shorter [Astria model-selection guide](./astria-image-models.md).

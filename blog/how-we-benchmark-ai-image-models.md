---
title: "How We Benchmark AI Image Models for Fashion and Product Work"
description: "The references, prompt, selection rule, resolution policy, limitations, and disclosure behind Astria's reference-led image-model comparison."
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

We benchmark public image models with inputs a fashion team can inspect: one identity, one garment, one accessory, one semantic prompt, one canvas request, and one predetermined output per endpoint.

The current public comparison covers GPT Image 2.5 Sunburst and Flare, GPT Image 2, Nano Banana 2, Seedream 5 Pro, Muse Image, MAI-Image-2.6, and MAI-Image-2.6-Flash. All compatible requests ran in Astria workspace `896` (Articles).

<!-- truncate -->

<aside className="astria-article-cta" aria-label="Start creating with Astria"><div className="astria-article-cta__mark"><img src="/articles/img/logo@2x.webp" alt="" /></div><p className="astria-article-cta__eyebrow">Transparent comparison</p><h2 className="astria-article-cta__title">Run one reference set across models</h2><p className="astria-article-cta__copy">Fix the sources and controls first, then score product accuracy separately from art direction.</p><div className="astria-article-cta__actions"><a className="astria-article-cta__button astria-article-cta__button--primary" href="/prompts"><span>Generate</span><span aria-hidden="true">→</span></a><a className="astria-article-cta__button astria-article-cta__button--secondary" href="/articles/best-ai-image-models-fashion"><span>See results</span><span aria-hidden="true">→</span></a></div></aside>

## Why reference-led evidence matters

A text-only image can demonstrate taste, but it cannot show whether a supplied person, garment, or accessory survived generation. A useful fashion benchmark asks questions that have visible ground truth:

- Does the person remain recognizable?
- Does the dress retain its color, neckline, buttons, belt, and silhouette?
- Is the bag still a separate product with its chain and circular construction?
- Did the requested composition and canvas survive?
- Is the result attractive only after it is accurate enough for the intended use?

No text-to-image-only result is used as public evidence in the current article family.

## The complete source set

The source assets came from Maison Urban prompt `46557199` and were copied into workspace `896` so article work did not run in a customer workspace.

<div className="benchmark-grid benchmark-grid--three">
  <figure className="benchmark-card benchmark-card--source"><img loading="lazy" src="/articles/img/model-benchmarks/2026-09/gpt-image-2-5-source-sloane.webp" alt="Sloane identity source for the Astria image model benchmark" /><figcaption><strong>Sloane</strong>Maison Urban tune 3904080 · Articles tune 5639061 · 679×722</figcaption></figure>
  <figure className="benchmark-card benchmark-card--source"><img loading="lazy" src="/articles/img/model-benchmarks/2026-09/gpt-image-2-5-source-dress.webp" alt="Yellow sleeveless belted dress source for the Astria image model benchmark" /><figcaption><strong>Dress</strong>Maison Urban tune 3907553 · Articles tune 5639041 · 1440×2160</figcaption></figure>
  <figure className="benchmark-card benchmark-card--source"><img loading="lazy" src="/articles/img/model-benchmarks/2026-09/gpt-image-2-5-source-bag.webp" alt="Gold chain bag with circular metallic details source for the Astria image model benchmark" /><figcaption><strong>Bag</strong>Maison Urban tune 3907242 · Articles tune 5639043 · 1440×2159</figcaption></figure>
</div>

The dress and bag pass the preferred 1600px long-edge source gate. Sloane is the explicit exception: the supplied identity portrait is 679×722 and was normalized to a valid JPEG without upscaling. Identity conclusions are directional.

## The semantic prompt

> Dress hero shot. An off-kilter, flash-lit photograph of the referenced woman in a dynamic, almost off-balance leaning pose against a dark wooden bar counter or pillar at night. Her body creates a diagonal line. She wears the reference dress and holds the reference bag. The strong flash casts a sharp shadow. Blurred shelves with bottles and bar lights define the out-of-focus background. Cool, edgy vibe.

The live request inserts `<faceid:5639061:1> woman`, `<faceid:5639041:1> dress`, and `<faceid:5639043:1> bag` in the corresponding semantic roles. Phrases such as “comparison article brief” are not part of the prompt.

## Controls and selection rule

| Control | Rule |
| --- | --- |
| Workspace | `896` (Articles) |
| Aspect ratio | 16:9 requested for every model |
| Output count | One per endpoint |
| Selection | The only returned output; no choice among alternates |
| Resolution | Highest exposed endpoint setting: 4K for GPT Image 2.5, GPT Image 2, and Nano Banana 2; 2K for Seedream 5 Pro; native when no shared selector exists |
| Reference incompatibility | Record it; never replace the cell with text-to-image |
| Public asset | Optimized WebP derivative made from the downloaded original |

Muse returned 1920×1280 (3:2) from the 16:9 request. MAI flagship and Flash expose no shared resolution selector and returned 1365×768. Those differences are disclosed rather than normalized away.

## What we record

For each output, the benchmark record stores:

- model and live tune ID;
- prompt ID and workspace;
- full semantic prompt and source-tune provenance;
- requested aspect ratio, resolution, and output count;
- actual master dimensions and original media URL;
- public derivative path and dimensions;
- the fixed selection rule;
- visual-quality, fidelity, and exclusion notes.

The machine-readable record is `benchmark/image-models-2026-09/reference-comparison.json` in the article repository.

## Visual review gate

Every selected result is opened at its original dimensions before publication. It must look good at article size and keep all three reference roles legible. Reviewers inspect identity, dress construction, color, bag geometry, composition, artifacts, and actual canvas shape separately.

The full-resolution downloads remain the masters. WebP files under `static/img/` are delivery derivatives. A smaller derivative is never reported as the generation's actual resolution.

## Exclusions and limitations

An earlier synthetic garment source was rejected for poor reference quality. Its outputs, public claims, and dependent covers were removed from the article family. The historical September pilot remains an internal audit trail in `runs.json`; it is not the evidence presented on the current public pages.

Other limitations remain:

- one output per endpoint cannot estimate retry rates;
- one identity, dress, and bag do not represent every product or cast;
- the Sloane source limits high-resolution likeness conclusions;
- garment folds, belt geometry, chain placement, and individual bag discs vary in every output;
- model behavior and endpoint controls can change after capture.

## Reproducing the comparison

1. Use rights-cleared source images and record their original dimensions.
2. Put all editorial generations in workspace `896`.
3. Use the same reference tunes and semantic prompt for every compatible endpoint.
4. Fix the aspect ratio and output count.
5. Request the highest exposed resolution without inventing a control for endpoints that lack one.
6. Download the original output and record its true media type and dimensions.
7. Review visual quality and source fidelity before creating a web derivative.
8. Publish the only output or record the incompatibility; do not substitute text-only evidence.

Read the [full reference-matched comparison](./best-ai-image-models-fashion.md) or the shorter [Astria model-selection guide](./astria-image-models.md).

---
title: "Muse Image Model Review: Matched Multi-Reference Fashion Test"
description: "A reference-led Muse Image review using the same Sloane identity, yellow dress, gold bag, prompt, aspect ratio, and one-output rule as the wider comparison."
slug: muse-image-model-review
date: 2026-09-12
hide_table_of_contents: false
image: /img/covers/muse-image-model.webp
authors: [astria]
tags: [models, guides]
keywords:
  - Muse Image model review
  - Muse Image references
  - Muse AI image model
  - multi reference image model
  - AI fashion photography
---

**Muse combined an identity, garment, and accessory reference into a coherent campaign image.** It kept Sloane recognizable, preserved the pale-yellow sleeveless dress language, and rendered the circular-detail gold bag as a separate object. The main incompatibility is canvas shape: this endpoint returned 1920×1280 (3:2) from the shared 16:9 request.

<!-- truncate -->

<aside className="astria-article-cta" aria-label="Generate with Muse"><div className="astria-article-cta__mark"><img src="/articles/img/logo@2x.webp" alt="" /></div><p className="astria-article-cta__eyebrow">Reference-first test</p><h2 className="astria-article-cta__title">Give every reference one role</h2><p className="astria-article-cta__copy">Use a person, garment, and accessory reference together, then inspect each one separately.</p><div className="astria-article-cta__actions"><a className="astria-article-cta__button astria-article-cta__button--primary" href="/prompts"><span>Generate</span><span aria-hidden="true">→</span></a><a className="astria-article-cta__button astria-article-cta__button--secondary" href="/articles/best-ai-image-models-fashion"><span>Compare models</span><span aria-hidden="true">→</span></a></div></aside>

## The complete input reference set

The source set is the approved Maison Urban material from prompt `46557199`, copied into workspace `896` (Articles). Muse received all three references in one request.

<div className="benchmark-grid benchmark-grid--three">
  <figure className="benchmark-card benchmark-card--source"><img loading="lazy" src="/articles/img/model-benchmarks/2026-09/gpt-image-2-5-source-sloane.webp" alt="Sloane identity reference used for the Muse Image test" /><figcaption><strong>Sloane</strong>Identity · Articles tune 5639061 · 679×722 source, not upscaled</figcaption></figure>
  <figure className="benchmark-card benchmark-card--source"><img loading="lazy" src="/articles/img/model-benchmarks/2026-09/gpt-image-2-5-source-dress.webp" alt="Yellow sleeveless belted dress reference used for the Muse Image test" /><figcaption><strong>Dress</strong>Pale-yellow color, sleeveless cut, two buttons, belt, and long silhouette · Articles tune 5639041</figcaption></figure>
  <figure className="benchmark-card benchmark-card--source"><img loading="lazy" src="/articles/img/model-benchmarks/2026-09/gpt-image-2-5-source-bag.webp" alt="Gold chain bag with circular metallic details used for the Muse Image test" /><figcaption><strong>Bag</strong>Gold chain and repeated circular construction · Articles tune 5639043</figcaption></figure>
</div>

The dress and bag source masters exceed 2K on the long edge. Sloane's 679×722 portrait is the disclosed exception to the 1600px source gate, so this is a practical identity check rather than a high-resolution likeness benchmark.

### Prompt

> Dress hero shot. An off-kilter, flash-lit photograph of the referenced woman in a dynamic, almost off-balance leaning pose against a dark wooden bar counter or pillar at night. Her body creates a diagonal line. She wears the reference dress and holds the reference bag. The strong flash casts a sharp shadow. Blurred shelves with bottles and bar lights define the out-of-focus background. Cool, edgy vibe.

## The matched Muse result

<figure className="benchmark-card benchmark-card--single benchmark-card--landscape" data-source-reference="/articles/img/model-benchmarks/2026-09/gpt-image-2-5-source-sloane.webp /articles/img/model-benchmarks/2026-09/gpt-image-2-5-source-dress.webp /articles/img/model-benchmarks/2026-09/gpt-image-2-5-source-bag.webp"><img loading="lazy" src="/articles/img/model-benchmarks/2026-09/gpt-image-2-5-muse-sloane.webp" alt="Muse Image output of Sloane wearing the yellow dress and holding the circular-detail gold bag in a dark bar" /><figcaption><strong>Muse Image</strong>Prompt 46636363 · native request / 1920×1280 actual · identity, garment, and bag remain coherent; endpoint returned 3:2 from the 16:9 request</figcaption></figure>

The only returned output passed the visual gate. Sloane remains recognizable and the dress keeps its color, sleeveless construction, buttons, and wrapped belt. The bag is fully legible as the circular gold reference rather than a generic clutch.

The fidelity limit is equally visible: pleats and belt geometry are interpreted rather than copied, individual bag discs change, and the 3:2 canvas is incompatible with the shared 16:9 framing. We record that mismatch instead of cropping the master and pretending the model followed the ratio.

## When Muse is a useful route

Muse is worth testing when a brief contains several supplied assets with different roles. A good prompt should say which reference is the person, which is the garment, which is the accessory, and which properties must survive.

Use a checklist after generation:

1. Is the person still recognizable?
2. Did the garment retain color, neckline, buttons, belt, and silhouette?
3. Is the bag still a distinct product with the right material language?
4. Did the requested crop and aspect ratio survive?
5. Is the result good enough at article or campaign size after it passes those checks?

## Bottom line

Muse passed this three-reference composition test and remains a strong candidate when reference separation is the hard part. Its 3:2 return from a 16:9 request is a real production caveat. Compare it with the other models in the [full matched benchmark](./best-ai-image-models-fashion.md).

For current Astria rates and billing terms, see [Astria pricing](https://www.astria.ai/pricing).

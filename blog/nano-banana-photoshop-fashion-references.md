---
title: "Replace Clothing in Photoshop With Product References"
description: "Use the Astria Nano Banana Photoshop plugin to explore garment, shoe and jewelry changes with reference images and a practical fashion approval workflow."
slug: nano-banana-photoshop-fashion-references
date: 2026-10-15
image: /img/photoshop-video-guides/fashion-reference-sweater-canvas.webp
authors: [astria]
tags: [photoshop]
keywords:
  - "replace clothing in Photoshop with reference image"
  - "Nano Banana fashion editing"
  - "AI fashion retouching"
  - "virtual styling Photoshop"
---

import VideoEditComparison from '@site/src/components/VideoEditComparison';

export const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Nano Banana plugin for Photoshop - using reference images to edit realistic images for fashion",
  "description": "Use the Astria Nano Banana Photoshop plugin to explore garment, shoe and jewelry changes with reference images and a practical fashion approval workflow.",
  "thumbnailUrl": "https://www.astria.ai/articles/img/photoshop-video-guides/fashion-reference-sweater-canvas.webp",
  "uploadDate": "2025-09-21T00:00:00Z",
  "duration": "PT135S",
  "embedUrl": "https://www.youtube.com/embed/EVdifaMROfk"
};

<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(videoSchema).replace(/</g, "\\u003c")}} />

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I replace clothing using a product reference in Photoshop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Select the garment region, attach a clear product reference in the Astria panel, describe the replacement, and inspect the returned layer against both the source person and the product."
      }
    },
    {
      "@type": "Question",
      "name": "Does a clothing replacement guarantee the exact SKU?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Review the pattern, color, neckline, seams, closures and proportions against the reference before using a result as a product image. Use a conventional composite for details that require exact reproduction."
      }
    },
    {
      "@type": "Question",
      "name": "How should a stylist present several outfit options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Keep the same source photograph and create named layers or groups for each combination. Show the source, proposed styling and associated product references together so the reviewer can judge the specific change."
      }
    }
  ]
};

<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema).replace(/</g, "\\u003c")}} />

A stylist wants to see a different sweater on the same model. A retoucher needs to replace a shoe without rebuilding the whole photograph. A merchandising team wants to review how accessories work together before approving a look.

The **Astria Nano Banana Photoshop plugin** brings the source photograph, product references and generated edits into one document. The useful unit of work is a selected garment or accessory, with the rest of the photograph available for comparison.

<!-- truncate -->

## Watch the reference editing workflow

The demonstration uses a seated model and separate references for shoes, a striped sweater and pearl earrings. It also shows why a sweater swap and a jacket removal are different edits: the jacket can continue covering the intended garment unless the brief addresses both.

<VideoEditComparison
  before={{"src": "/articles/img/photoshop-video-guides/fashion-reference-source-canvas.webp", "alt": "Before: seated model wearing a dark jacket and light trousers", "caption": "00:00 — Original photograph with the dark jacket and light trousers.", "width": 850, "height": 1055}}
  after={{"src": "/articles/img/photoshop-video-guides/fashion-reference-sweater-canvas.webp", "alt": "After: same seated model with a striped sweater and reference shoes", "caption": "01:05 — The reference sweater replaces the dark jacket while the seated composition remains available for comparison.", "width": 850, "height": 1055}}
  layers={{"src": "/articles/img/photoshop-video-guides/fashion-reference-layers.webp", "alt": "Photoshop Layers panel showing separate masked sweater and shoe edits above the background", "caption": "01:05 — Separate masked layers hold the jacket removal, sweater replacement and shoe edit. The original photograph remains on Background.", "width": 634, "height": 410}}
/>

<iframe
  src="https://www.youtube-nocookie.com/embed/EVdifaMROfk?rel=0"
  title="Reference image fashion editing in Photoshop"
  style={{width: '100%', aspectRatio: '16 / 9', border: 0}}
  loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
/>

Watch the [original Astria demonstration](https://www.youtube.com/watch?v=EVdifaMROfk). The recording shows an earlier plugin interface; use the current panel for the selection, reference-image and returned-layer workflow. Illustrations are stills from that recording.

## Choose the reference for the item being changed

A useful product reference shows the item clearly enough to judge the result. For a sweater, include the neckline, cuffs, hem and repeating pattern. For footwear, show the toe, heel, fastening and profile. For earrings, include the complete shape and enough detail to understand the material.

Prepare one reference per editing decision. A mood board can guide styling, but a clear product photograph is the stronger input when the garment or accessory itself must remain recognizable. Keep the source photograph on an untouched layer and attach the reference from an image file or the relevant Photoshop layer using the current panel.

## Replace a garment in a controlled sequence

1. Select the region occupied by the item, including the boundary where the new material must meet skin or surrounding clothing.
2. Attach the product reference and identify which item it should replace. Specify whether an overlapping jacket or accessory should remain.
3. Describe the intended change and the person, pose, background and framing to preserve.
4. Generate an alternative and toggle the returned layer against the source.
5. Refine the mask at cuffs, fingers, hair and garment edges. Use Photoshop adjustments for a local color balance correction.

If the first result already establishes a good sweater, make the next accessory edit from a separately saved version. Keep an approved styling layer available rather than repeatedly changing the only copy. This gives the creative director an intelligible set of options and lets the retoucher undo one decision without rebuilding the rest.

## Give each team role a useful deliverable

| Role | Application | Deliverable |
| --- | --- | --- |
| Retoucher | Local garment and accessory replacement | Layered PSD with editable masks |
| Stylist | Compare shoes, knitwear and jewelry combinations | Labeled styling alternatives |
| Creative director | Evaluate the approved outfit in the source composition | Review board with the source and selected option |
| Merchandising team | Explore coordinated collection looks | Concepts associated with the actual product references |
| Ecommerce lead | Decide whether a candidate can represent a SKU | Product fidelity review before export |

## Check the product before approving the photograph

Read the garment as a product: count stripes, check where the neckline meets the shoulders, inspect the cuffs and hem, and compare fabric appearance with the reference. A plausible sweater is insufficient if the intended item has a different pattern or construction.

Check the surrounding person too. Hands can merge with a sleeve, shoe proportions can change, and jewelry can shift position. Keep the source available and correct a local problem through the mask or a fresh edit. When an exact catalog detail cannot be retained reliably, use the real product artwork or a conventional composite.

This Photoshop workflow suits individual images receiving careful attention. For producing a collection against a repeatable treatment, see the [AI lookbook guide](./ai-lookbook-guide.md). For installation and general panel behavior, read the [Nano Banana Photoshop guide](./nano-banana-photoshop-guide.md).

[Get the Astria Photoshop plugin](https://www.astria.ai/nano-banana-photoshop) to try the workflow on your own photograph and product references. Current terms are on [Astria pricing](https://www.astria.ai/pricing).

## Frequently asked questions

### Can I replace clothing using a product reference in Photoshop?

Yes. Select the garment region, attach a clear product reference in the Astria panel, describe the replacement, and inspect the returned layer against both the source person and the product.

### Does a clothing replacement guarantee the exact SKU?

No. Review the pattern, color, neckline, seams, closures and proportions against the reference before using a result as a product image. Use a conventional composite for details that require exact reproduction.

### How should a stylist present several outfit options?

Keep the same source photograph and create named layers or groups for each combination. Show the source, proposed styling and associated product references together so the reviewer can judge the specific change.

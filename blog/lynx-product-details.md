---
title: "Astria Lynx: Fix Logos, Text and Fine Product Details"
description: "Enable Astria Lynx to automatically refine logos, text, prints, plaques and fine product details from your references, with no manual image edits required."
slug: lynx-product-details
date: 2026-10-21
hide_table_of_contents: true
image: /img/lynx/47336203-after.webp
authors: [astria]
tags: [features]
keywords:
  - Astria Lynx
  - AI product logo correction
  - fix text in AI product photos
  - reference guided product details
---

import LynxExamples from '@site/src/components/LynxExamples';

**Astria Lynx automatically fixes and refines logos, text, prints, plaques and fine product details using your product references. No manual image edits are required.** It helps bring the small features that identify a product back toward the supplied design while you generate an on-model photograph.

:::tip Turn on Lynx
**Attach your product references → open the composer’s cog wheel (Advanced options) → enable Lynx → Generate.**

You can start with the automatic workflow. Manual Lynx areas are optional advanced control.
:::

<!-- truncate -->

<figure className="benchmark-card--source" style={{margin: '1.5rem 0'}}>
  <video controls playsInline preload="metadata" poster="/articles/img/lynx/enable-lynx-poster.webp" width="1200" height="640" aria-label="How to enable Lynx: open the composer’s cog wheel, switch Lynx on in Advanced options, then select Generate" style={{display: 'block', width: '100%', height: 'auto'}}>
    <source src="/articles/video/lynx/enable-lynx.mp4" type="video/mp4" />
    <track kind="captions" src="/articles/video/lynx/enable-lynx.en.vtt" srcLang="en" label="English instructions" />
    <a href="/articles/video/lynx/enable-lynx.mp4">Watch how to enable Lynx in the composer</a>.
  </video>
  <figcaption>Enable Lynx in the composer: open the cog wheel (Advanced options), switch Lynx on, then Generate. The product and person references are already attached in this 15-second demonstration.</figcaption>
</figure>

A tiny label can be the difference between a convincing fashion image and a usable product photograph. A shirt may have the right color and silhouette while its caption is misspelled. A woven badge may become a flat approximation. Small brass letters on a bag can lose their shape. Lynx focuses on those reference details as part of generation, saving you from manually repainting each result.

The examples below show both visible corrections and more subtle refinements. Results still need review against the product reference; Lynx does not guarantee exact reproduction of every character, motif or material feature.

## How to use Lynx

## Step 1: Attach the product references

Open [Astria’s composer](https://www.astria.ai/prompts). Drag your product images into the prompt box, or use the Plus icon to attach them. Add the person reference when you want an on-model image.

Use a sharp source where the important feature is actually visible. For a small logo, include a clear view of its lettering and symbol. For a complex print, show the complete artwork and caption. For a bag, show the label, hardware and material as well as the silhouette.

## Step 2: Enable Lynx in Advanced options

Open the **cog wheel** in the composer, find **Lynx** in **Advanced options**, and enable it. You do not need to draw regions or edit the image before generating.

## Step 3: Describe the photograph and Generate

Write the outfit, pose, framing, background and lighting you want. Keep the product detail visible: arms clear of a chest emblem, or the front of a bag facing the camera. Then select **Generate**.

For example, with a person and shirt attached:

> A full-length studio lookbook photograph of the person wearing the reference shirt with plain dark jeans. Relaxed front-facing stance, arms clear of the chest artwork. Warm chalk backdrop, soft light. Keep the reference print and caption visible. One person, one photograph.

Lynx handles the detail refinement automatically. Review the completed image at the size you will use it, then zoom in to check the brand mark, wording, print, label and surrounding material.

## Six products, six matched examples

The first five products are original fictional demonstration designs from the **Lynx — Detail Lab** workspace. Their references were created as synthetic demonstration assets; they are not customer products or photographs of manufactured items. The watch example uses an official Tudor product image and a new generated wristshot from the **Articles** workspace. Each product reference is shown separately from its generated output.

Every comparison uses the **before frame and finished frame attached to the same prompt**. The detail crops use the same relative coordinates, and links to the complete frames accompany each example. No manual retouching was applied to the article images. Web copies are resized and encoded for display; the crops are not upscaled.

The resolution labels below identify each prompt’s generation setting. They are not a claim that every downloaded before and finished frame has identical pixel dimensions. Each product reference has one matched comparison.

### ORMA: canvas bag and woven label

The crescent bag combines natural canvas, cobalt piping and strap, silver hardware and a small blue label. The malformed label lettering becomes readable as **ORMA** in the finished frame.

<LynxExamples category="ORMA" />

### Botanical Atlas: complex print and caption

The ivory shirt combines a dark blue heron, red flowers, teal foliage, moths and fine linework with a small caption beneath the print. This tests more than whether a large graphic survives: the caption and arrangement also matter.

The featured example shows an additional refinement pass. The caption was already close before this pass; inspect the finer artwork and lettering changes against the product reference.

<LynxExamples category="Botanical Atlas" />

### VELUNE: a small brass logo in a wide scene

The oxblood handbag is carried through a furnished room, leaving its small brass lettering and crescent plaque at a natural scale. The before frame has malformed lettering; the finished frame reads **VELUNE** and restores the upward-facing crescent with its dot above. The full scene and matched crops show how small the detail is within the photograph.

<LynxExamples category="VELUNE" />

### ASTRIA Atelier: a small printed logo

A small cream star and two lines of lettering sit on a navy shirt, worn in a wide room scene. **ASTRIA** is readable in the before frame, but the smaller line beneath it is garbled. The finished frame reads **ATELIER**. The full scene establishes the scale of the mark, while the matched crops make the distorted lettering and its correction visible.

<LynxExamples category="ASTRIA Atelier" />

### FIELD CLUB: woven emblem and ribbon lettering

The ecru polo’s green shield, gold heron, three stars and small ribbon combine text with a textured emblem. The ribbon lettering correction turns distorted text into readable **FIELD CLUB** lettering. The shield and stitching are also reworked, so the review should include the emblem’s shape and texture as well as the words.

<LynxExamples category="FIELD CLUB" />

### Tudor Black Bay 58: tiny watch-dial lettering

A coastal wristshot places the watch against charcoal wool, dark rock and a softly blurred sea. The reference dial combines **TUDOR / GENEVE** beneath the shield, two small lines above six o’clock and tiny **SWISS MADE** lettering at the bottom. These details need to remain small on the product while staying faithful to the source.

<LynxExamples category="Tudor Black Bay 58" />

## What to check before approving a result

Compare the product to its source at two scales. At the intended publishing size, check the silhouette, color, print placement and overall appearance. In the detail view, check the exact wording, symbol, motif arrangement, label color and material around the refined area.

A corrected word does not by itself establish that the whole product is faithful. The Botanical Atlas comparison shows that fine artwork can change. A woven badge can become clearer while its heron or border also changes. Approve the complete product, not only the newly legible text.

If a detail is hidden, blurred or too small in the reference, supply a clearer view. If it is obscured in the generated shot, adjust the pose or framing and generate again with Lynx enabled.

## Optional advanced control: manual Lynx areas

Most people can begin by enabling Lynx in the composer. **Manual Lynx areas are optional**, for cases where you want more control over which reference detail receives attention. They are not a prerequisite for generating with Lynx, and you do not need to manually retouch the finished image to use the feature.

Start with the automatic result and your reference check. Use the optional area controls when a specific detail needs more direction, then review the next result against the same source.

## Frequently asked questions

### How do I turn on Astria Lynx?

Attach your product references, open the composer’s cog wheel (Advanced options), enable Lynx, then Generate. Add a person reference for an on-model image.

### Do I need to edit the image or draw Lynx areas first?

No. Lynx can refine product details automatically during generation, with no manual image edits required. Manual Lynx areas are optional advanced control.

### What product details is Lynx for?

Lynx is for reference details such as logos, small text, complex prints, plaques, emblems, labels and fine product features. This demonstration covers a printed shirt, a small chest logo, a woven badge, a woven bag label, a brass handbag plaque and tiny watch-dial lettering.

### Will Lynx reproduce every detail perfectly?

Results vary. Check the finished image against its product reference, including wording, symbols, print geometry, color and material. Some examples show clear corrections, while others show subtle changes.

## Try Lynx with your products

[Open Astria and enable Lynx](https://www.astria.ai/prompts) to try the workflow with your own product references. For current rates, see [Astria pricing](https://www.astria.ai/pricing).

---
title: "Vitamin and Supplement Photography Prompts for E-commerce"
description: "Copy AI supplement photography prompts for bottles, labels, capsules, ingredients and bundles, with a transparent reference workflow and QA checklist."
slug: vitamin-supplement-photography-prompts
date: 2026-08-31
hide_table_of_contents: true
image: /img/covers/vitamin-supplement-photography-prompts.webp
authors: [astria]
tags: [prompts, guides]
keywords:
  - supplement photography prompts
  - vitamin product photography prompts
  - AI supplement product photography
  - wellness product photography
---

import CopyPrompt from '@site/src/components/CopyPrompt';
import PromptRecipe from '@site/src/components/PromptRecipe';

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {"@type": "Question", name: "Can AI generate final supplement labels accurately?", acceptedAnswer: {"@type": "Answer", text: "Do not assume generated text is exact. Use AI for composition and lighting, then verify or composite approved label artwork and review required copy for each market and channel."}},
    {"@type": "Question", name: "What references should a supplement prompt use?", acceptedAnswer: {"@type": "Answer", text: "Supply clear front, side and back label panels, the closure and seal, the product form such as capsule or gummy, and any approved ingredient references."}},
    {"@type": "Question", name: "What belongs in a supplement product image set?", acceptedAnswer: {"@type": "Answer", text: "Start with front and alternate packshots, label and closure details, product-form scale, a controlled ingredient still life, bundle or subscription coverage, and a clean lifestyle banner."}},
  ],
};

<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema).replace(/</g, '\\u003c')}} />

Supplement photography combines ordinary packshot problems with regulated copy, dosage details and claims that should never be improvised. Use generation to create composition, surface, lighting and a visual system—not to invent certifications, medical symbols, ingredients or label wording.

**Evidence note:** Astria’s public gallery does not currently provide a supplement-specific prompt/result pair suitable for citation. The visual recipe below is the closest public [Beauty workspace](https://www.astria.ai/w/beauty) packaging example, clearly labeled as adjacent evidence. These supplement prompts are conservative adaptations to test with your own approved references.

<!-- truncate -->

## Adjacent reference → adapted prompt

<PromptRecipe
  vertical="Supplements"
  title="Adapt a proven bottle-lighting pattern carefully"
  purpose="Use the public bottle example to understand composition and reflections, then test supplement geometry and artwork with your own references."
  specs={['Adjacent evidence', '4:5', 'Bottle system']}
  referenceImages={[{src: '/articles/img/prompt-recipes/beauty-bottle-reference.jpg', alt: 'Adjacent beauty bottle reference', label: 'Adjacent reference · beauty bottle'}]}
  resultImage={{src: '/articles/img/prompt-recipes/beauty-still-life-result.jpg', alt: 'Adjacent beauty bottle campaign result', label: 'Adjacent public result · not supplement proof'}}
  prompt={`Studio product photograph of the exact reference supplement bottle, upright and centered on warm white. Preserve the bottle proportions, cap, safety seal, label dimensions, colors and material finish. Keep all label panels flat and undistorted. Soft frontal light, narrow rim highlight, short grounding shadow, no ingredients, medical symbols, certifications or added claims, vertical 4:5.`}
  challenge="The public example validates a general bottle-and-lighting pattern only. Supplement packaging needs its own product tests plus artwork and compliance review."
  notes={['Treat generated label text as a placeholder until verified.', 'Do not add claims, seals, ingredients or certification marks.', 'Check bottle-to-cap ratio and tamper-evident details.', 'Review the final artwork for every required market and sales channel.']}
  promptUrl="https://www.astria.ai/prompts/45986211?ws=761"
  templateUrl="https://www.astria.ai/p/beauty"
  workspaceUrl="https://www.astria.ai/w/beauty"
  primaryActionLabel="Inspect adjacent bottle example"
  templateLabel="Use adjacent Beauty template"
  workspaceLabel="View adjacent workspace"
  sourceNote="This is adjacent public beauty-packaging evidence, not a supplement-specific proof. The prompt is a conservative adaptation for a category that requires additional artwork and compliance checks."
/>

## Eight copy-ready supplement prompts

<CopyPrompt title="1. Primary bottle packshot" why="Create the clean geometry proof used to judge every later scene." prompt={`Straight-on studio packshot of the exact reference supplement bottle, upright and centered on seamless warm white. Preserve bottle proportions, cap, seal, label dimensions, colors and material finish. Keep the front label plane flat, even diffused light, short natural grounding shadow, no props, added claims or symbols, vertical 4:5.`} templateUrl="https://www.astria.ai/p/beauty" note="Adjacent template: test with your own approved supplement references and artwork." />

<CopyPrompt title="2. Side and back panel" why="Document the label surfaces the hero cannot show." prompt={`Rear three-quarter studio packshot of the exact reference supplement bottle showing the supplied side and back label panels. Preserve bottle and cap geometry, label proportions and panel order. Even shadowless light, sharp printable area, no invented words, icons, certifications or dosage details, vertical 4:5.`} />

<CopyPrompt title="3. Cap and seal detail" why="Make closure construction and tamper evidence reviewable." prompt={`Macro product detail of the exact reference supplement bottle closure, focused on the supplied cap, neck, liner and tamper-evident seal. Preserve dimensions, materials, ridges and assembly. Clean warm-white background, raking side light, sharp construction detail, no added markings, vertical 4:5.`} />

<CopyPrompt title="4. Capsule or gummy scale" why="Show product form only when a verified reference is supplied." prompt={`Studio still life of the exact reference supplement bottle beside three pieces of the supplied product-form reference. Preserve the capsule or gummy shape, dimensions, color, coating and opacity; preserve the bottle and closure. Neutral stone surface, soft daylight, no loose powder, ingredient claims or added text, vertical 4:5.`} />

<CopyPrompt title="5. Controlled ingredient story" why="Create context without implying unsupported contents or benefits." prompt={`Overhead still life of the exact reference supplement bottle with only the supplied approved ingredient references, each physically separate and clearly recognizable. Preserve packaging. Spacious warm-white layout, soft directional shadows, no laboratory props, medical symbols, certifications, claims or generated text, vertical 4:5.`} />

<CopyPrompt title="6. Sachet or stick pack" why="Lock count, seals and print area for flexible packaging." prompt={`Straight-on packshot of the exact reference supplement sachet standing beside one flat sachet, both showing the approved front panel. Preserve dimensions, crimped seals, material sheen, colors and artwork boundaries. Soft frontal light, no warped edges or invented copy, pale background, vertical 4:5.`} />

<CopyPrompt title="7. Subscription bundle" why="Show the exact delivered quantity and relative scale." prompt={`Studio e-commerce photograph of the exact supplied monthly supplement bundle: the reference bottles and packages only, arranged in one clean row with labels unobstructed. Preserve product count, relative scale, closures, colors and materials. Warm-white sweep, even light, no extra accessories or claims, horizontal 4:3.`} />

<CopyPrompt title="8. Lifestyle banner" why="Add brand atmosphere while reserving clean copy space." prompt={`Wide lifestyle still life with the exact reference supplement bottle in the right third on a pale kitchen shelf, beside a clear water glass only. Preserve the bottle, cap and label layout. Natural morning light, generous uncluttered negative space on the left, no pills in motion, medical props, added text or benefit claims, horizontal 16:9.`} />

## What is different about this vertical

| Challenge | Safe prompt boundary | Required human check |
| --- | --- | --- |
| Label text | Preserve layout; do not invent wording | Composite or verify approved artwork |
| Claims and certifications | Explicitly forbid additions | Confirm required markets and channel policies |
| Product form | Show only supplied capsule, gummy or powder references | Confirm shape, color, scale and count |
| Ingredients | Include only approved supplied ingredients | Check that the image does not imply formulation or benefit |
| Bundles | Name exact products and quantity | Match the actual offer and relative package sizes |

## How to use these prompts

1. Collect front, side, back, closure, seal and product-form references plus final approved artwork.
2. Generate and approve the primary bottle packshot before any ingredient or lifestyle scene.
3. Copy one prompt and replace every generic product noun with verified reference facts.
4. Reject invented seals, pills, ingredients, claims, medical imagery or label details.
5. Finish with artwork, legal and channel review appropriate to the markets where the image will appear.

For the general coverage framework, see [E-commerce Product Photography Prompts](./ecommerce-product-photography-prompts.md). As a public lighting reference only, inspect the [Beauty workspace](https://www.astria.ai/w/beauty).

## Frequently asked questions

### Can AI generate final supplement labels accurately?

Do not rely on generated text. Verify or composite approved artwork and run the appropriate market and channel review.

### What references should a supplement prompt use?

Supply every label panel, closure and seal, the actual product form and only approved ingredient references.

### What belongs in a supplement product image set?

Cover the front, alternate label views, closure, product form, ingredients, bundle and a clean lifestyle frame.

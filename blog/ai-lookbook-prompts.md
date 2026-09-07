---
title: "AI Lookbook Prompts: Build a Cohesive Fashion Sequence"
description: "Copy AI lookbook prompts for openers, full looks, movement, details and closing frames, with a repeatable sequence system and public Astria examples."
slug: ai-lookbook-prompts
date: 2026-09-04
hide_table_of_contents: true
image: /img/covers/ai-lookbook-prompts.webp
authors: [astria]
tags: [prompts, guides]
keywords:
  - AI lookbook prompts
  - fashion lookbook prompts
  - lookbook photography prompts
  - AI fashion sequence prompts
---

import CopyPrompt from '@site/src/components/CopyPrompt';
import PromptRecipe from '@site/src/components/PromptRecipe';

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {"@type": "Question", name: "What makes a good AI lookbook prompt?", acceptedAnswer: {"@type": "Answer", text: "A good lookbook prompt names the frame's role, keeps the cast, garments, styling, location family, light and grade stable, and changes only shot size, angle, pose or action."}},
    {"@type": "Question", name: "How many prompts should a lookbook contain?", acceptedAnswer: {"@type": "Answer", text: "Start with six to eight distinct frames: an opener, hero, movement frame, detail, profile or pause, wide environment, back view and closer. Add frames only when they contribute new information or rhythm."}},
    {"@type": "Question", name: "How do you keep an AI lookbook consistent?", acceptedAnswer: {"@type": "Answer", text: "Write one invariant production block for cast, outfit, styling, location, light, color treatment and output ratio. Reuse it in every prompt and revise one variable at a time."}},
    {"@type": "Question", name: "Should every lookbook image be full body?", acceptedAnswer: {"@type": "Answer", text: "No. A sequence needs changes in scale. Combine full-body product proof with medium movement, construction details, environmental wides and a closing frame."}},
  ],
};

<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema).replace(/</g, '\\u003c')}} />

A useful AI lookbook prompt does two jobs at once: it protects continuity and gives one frame a reason to exist. If every prompt restates a different mood, the results feel like unrelated campaigns. If every prompt repeats the same composition, the sequence feels like a catalog contact sheet.

**The short version:** write one invariant production block, then build a sequence by changing distance, angle, pose and action. The public [Language of Form workspace](https://www.astria.ai/w/angela-fraser) and [Chapter 2: The Lookbook template](https://www.astria.ai/p/chapter-2-the-lookbook) show the reusable-system approach; [America Basics](https://www.astria.ai/w/america-basics) and [Dark Swimwear](https://www.astria.ai/w/dark-swimwear) provide linkable finished examples.

<!-- truncate -->

<aside className="astria-article-cta" aria-label="Create an AI lookbook with Astria">
  <div className="astria-article-cta__mark"><img src="/articles/img/logo@2x.webp" alt="" /></div>
  <p className="astria-article-cta__eyebrow">Reusable lookbook system</p>
  <h2 className="astria-article-cta__title">Build a sequence, not eight disconnected images</h2>
  <p className="astria-article-cta__copy">Start from an approved lookbook template, attach the product and casting references, then vary one shot decision at a time.</p>
  <div className="astria-article-cta__actions">
    <a className="astria-article-cta__button astria-article-cta__button--primary" href="https://www.astria.ai/p/chapter-2-the-lookbook"><span>Use the lookbook template</span><span aria-hidden="true">→</span></a>
    <a className="astria-article-cta__button astria-article-cta__button--secondary" href="https://www.astria.ai/w/angela-fraser"><span>View the public workspace</span><span aria-hidden="true">→</span></a>
  </div>
</aside>

## The invariant block

Write this once before the individual shots:

> The same approved model wears the same reference outfit and shoes throughout. Preserve the garment neckline, closures, waist, seam placement, length, material texture, color and styling. Use one pale modernist courtyard, soft overcast daylight, a muted cream-and-mineral grade, realistic anatomy and vertical 4:5 framing.

The nouns should come from the actual references. The point is not to hide missing information inside “same.” It is to identify the facts that must survive the sequence.

## A visual reference-to-result pattern

<PromptRecipe
  vertical="Lookbook"
  title="Anchor the full look before changing the sequence"
  purpose="One clear full-look frame becomes the product and styling reference for the surrounding editorial shots."
  specs={['Hero', '2:3', 'Studio anchor']}
  referenceImages={[
    {src: '/articles/img/prompt-recipes/fashion-shirt-reference.jpg', alt: 'Brown graphic sweatshirt reference', label: 'Reference 1 · top'},
    {src: '/articles/img/prompt-recipes/fashion-skirt-reference.jpg', alt: 'Grey pleated skirt reference', label: 'Reference 2 · skirt'},
    {src: '/articles/img/prompt-recipes/fashion-shoes-reference.jpg', alt: 'Silver sneakers reference', label: 'Reference 3 · shoes'},
  ]}
  resultImage={{src: '/articles/img/prompt-recipes/fashion-catalog-result.jpg', alt: 'Model wearing the referenced sweatshirt, skirt and shoes', label: 'Public result · full-look anchor'}}
  prompt={`Full-body front three-quarter lookbook hero of the model wearing the reference shirt, skirt, socks and shoes. She stands at a 45-degree angle and looks toward the camera, with every item visible and natural fabric folds. Preserve each garment's silhouette, length, color, seams and styling. Seamless off-white studio background #F5F5F5, soft even studio light, realistic proportions, clean 2:3 composition.`}
  challenge="A lookbook can be atmospheric later; the anchor must first prove which products and styling belong to the look."
  notes={[
    'Check every garment separately before judging the overall styling.',
    'Keep the waist and shoe contact visible so the outfit reads as one physical look.',
    'Use this frame as the comparison reference for later crops and poses.',
    'Reject later frames that quietly add, remove or restyle an item.',
  ]}
  promptUrl="https://www.astria.ai/prompts/35818293?ws=54"
  templateUrl="https://www.astria.ai/p/basic-shirt"
  workspaceUrl="https://www.astria.ai/w/america-basics"
/>

## Eight copy-ready lookbook prompts

Use the invariant block above with every prompt below.

<CopyPrompt title="1. Environmental opener" why="Establish the visual world before the product fills the frame." prompt={`Wide environmental fashion photograph of the model wearing the reference look at the entrance to the pale modernist courtyard. Show the complete silhouette and shoes at a smaller scale with generous architecture around the model. She stands still and looks beyond frame left. Eye-level camera, soft overcast daylight, restrained contrast, vertical 4:5.`} templateUrl="https://www.astria.ai/p/chapter-2-the-lookbook" />

<CopyPrompt title="2. Full-look hero" why="Give the reader one unambiguous view of the complete styling." prompt={`Full-body front three-quarter photograph of the model wearing the reference look. She stands at a 45-degree angle with weight on the back foot and looks toward the camera. Keep the complete outfit, fastening, hem and shoes clearly visible. Eye-level camera, quiet shadow, vertical 4:5.`} sourceUrl="https://www.astria.ai/prompts/35818275?ws=54" templateUrl="https://www.astria.ai/p/basic-shirt" />

<CopyPrompt title="3. Controlled walking frame" why="Movement changes energy without abandoning product coverage." prompt={`Full-body photograph of the same model and reference look walking parallel to the courtyard wall, captured mid-step. Preserve the garment construction and length; allow restrained movement at the outer hem only. Keep both shoes visible, arms clear of the garment and anatomy natural. Eye-level camera, vertical 4:5.`} sourceUrl="https://www.astria.ai/prompts/40584408?ws=368" templateUrl="https://www.astria.ai/p/swimsuit-set-1" />

<CopyPrompt title="4. Construction detail" why="Pause the sequence and prove material or workmanship." prompt={`Shoulder-to-hip detail of the same model wearing the reference look, focused on the neckline, fastening, waist construction and fabric surface. One hand adjusts the cuff without covering the garment. Sharp product detail, shallow background, the same soft overcast light and color grade, vertical 4:5.`} sourceUrl="https://www.astria.ai/prompts/35819692?ws=54" templateUrl="https://www.astria.ai/p/basic-shirt" />

<CopyPrompt title="5. Graphic profile" why="Reveal side construction and change the silhouette's shape on the page." prompt={`Full-body side-profile photograph of the same model wearing the reference look, paused beside a courtyard column. Keep the garment length, side seams, silhouette and shoes legible. Camera at waist height, subtle asymmetrical framing, consistent soft light and muted grade, vertical 4:5.`} templateUrl="https://www.astria.ai/p/chapter-2-the-lookbook" />

<CopyPrompt title="6. Seated pause" why="A quieter pose creates rhythm between standing and movement frames." prompt={`Three-quarter seated fashion photograph of the same model wearing the reference look on the front edge of a low pale-stone bench. Knees angle away while the torso turns gently toward camera. Keep the waist, neckline and footwear unobscured; preserve natural fabric compression and anatomy. Vertical 4:5.`} templateUrl="https://www.astria.ai/p/chapter-2-the-lookbook" />

<CopyPrompt title="7. Back construction" why="Show information the opener and hero cannot provide." prompt={`Full-body rear three-quarter photograph of the same model wearing the reference look, standing near the courtyard exit. Preserve the back neckline, seams, closures, hem, trousers and footwear. Head turned slightly toward the light, arms relaxed away from the body, vertical 4:5.`} templateUrl="https://www.astria.ai/p/chapter-2-the-lookbook" />

<CopyPrompt title="8. Closing frame" why="Resolve the sequence with departure rather than another hero pose." prompt={`Rear three-quarter photograph of the same model and reference look walking toward the courtyard exit, head turned slightly toward the light. Preserve the complete back construction, hem and footwear. Add a gentle late-afternoon warmth while staying within the established muted grade, restrained fabric movement, vertical 4:5.`} templateUrl="https://www.astria.ai/p/chapter-2-the-lookbook" />

## Things to notice in the edit

- **Repetition versus continuity:** consistent does not mean identical. Change shot scale or energy in every neighboring frame.
- **Hidden product:** hands, hair, bags and crossed limbs often cover the exact construction a frame should prove.
- **Sequence rhythm:** alternate wide, full, active, close and quiet frames instead of grouping all similar crops.
- **Cast drift:** compare face, hair, body proportions and age across the contact sheet, not one image at a time.
- **Grade drift:** a slightly warmer frame can close a story; a completely different palette starts a new campaign.
- **Product drift:** reject any frame that changes the neckline, closures, hem, print, material or accessories.

## How to run the sequence in Astria

1. Open [Chapter 2: The Lookbook](https://www.astria.ai/p/chapter-2-the-lookbook).
2. Add the approved model, garments, footwear and background references in their separate slots.
3. Generate the hero first and approve its product fidelity.
4. Reuse the invariant block across the remaining prompts.
5. Lay the results out together and cut repeated or inaccurate frames.

For production strategy, approvals and sequencing beyond the prompt text, use the [AI Lookbook Guide](./ai-lookbook-guide.md). For broader catalog and campaign recipes, continue with [AI Fashion Photography Prompts](./ai-fashion-photography-prompts.md).

## Frequently asked questions

### What makes a good AI lookbook prompt?

A good prompt gives the frame one job while preserving the shared production decisions: cast, products, styling, world, light and grade.

### How many prompts should a lookbook contain?

Start with six to eight purposeful frames. More output is not automatically a better edit.

### How do you keep an AI lookbook consistent?

Reuse one invariant block and change one compositional variable at a time.

### Should every lookbook image be full body?

No. Combine product-proof frames with movement, details, environment and a closing image.

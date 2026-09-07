---
title: "AI Fashion Photography Prompts: A Production-Ready Guide"
description: "Write AI fashion photography prompts for catalog, editorial, movement, detail and lookbook images—with 15 copyable examples and public templates."
slug: ai-fashion-photography-prompts
date: 2026-09-06
hide_table_of_contents: true
image: /img/covers/ai-fashion-photography-prompts.jpg
authors: [astria]
tags: [prompts, guides]
keywords:
  - AI fashion photography prompts
  - fashion AI prompts
  - AI lookbook prompts
  - clothing photography prompts
---

import PromptRecipe from '@site/src/components/PromptRecipe';

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you write a good AI fashion photography prompt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Write it like a compact call sheet: state the image's job, the garment that must remain accurate, framing, pose or action, setting, light, and visual character. Keep the product facts fixed while changing one creative variable at a time.",
      },
    },
    {
      "@type": "Question",
      name: "What should stay consistent across AI lookbook prompts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keep the cast, garment references, styling rules, location logic, light family, color treatment, and output ratio consistent. Vary the shot size, camera angle, pose, and moment so the sequence feels related without becoming repetitive.",
      },
    },
    {
      "@type": "Question",
      name: "Should a fashion prompt include camera and lens names?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only when the camera language changes the result you need. Framing, camera height, distance, depth of field, and light direction are usually more useful than a long equipment list.",
      },
    },
    {
      "@type": "Question",
      name: "How can prompts preserve garment accuracy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Name the visible construction details that matter, such as neckline, sleeve length, closures, seams, hem, print placement, and fabric behavior. Use clear front, back, and detail references, then review each output against them before publishing.",
      },
    },
    {
      "@type": "Question",
      name: "Can the same prompt work for catalog and campaign images?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not well. Catalog prompts prioritize coverage, clean backgrounds, legible construction, and repeatable framing. Campaign prompts can prioritize gesture, atmosphere, cropping, and narrative, but they still need an explicit product-preservation clause.",
      },
    },
  ],
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema).replace(/</g, '\\u003c')}}
/>

AI fashion photography prompts work best when they read less like mood-board captions and more like compact call sheets. A useful prompt tells the system what the image must accomplish, what cannot change, what the camera sees, what the subject is doing, and what kind of world surrounds the product.

**The short version:** lock the product and art direction first. Then change one shot variable at a time. This guide gives you a repeatable prompt structure, 15 copyable starting points, and public [fashion workspaces](https://www.astria.ai/gallery/workspaces), [templates](https://www.astria.ai/p/basic-shirt), and [finished prompt examples](https://www.astria.ai/prompts/35818275?ws=54) to study.

<!-- truncate -->

<aside className="astria-article-cta" aria-label="Start creating with Astria">
  <div className="astria-article-cta__mark">
    <img src="/articles/img/logo@2x.png" alt="" />
  </div>
  <p className="astria-article-cta__eyebrow">Fashion production workspace</p>
  <h2 className="astria-article-cta__title">Turn a shot list into a reusable fashion workflow</h2>
  <p className="astria-article-cta__copy">Start from a public template, add your products, and build a consistent image family.</p>
  <div className="astria-article-cta__actions">
    <a className="astria-article-cta__button astria-article-cta__button--primary" href="https://www.astria.ai/p/basic-shirt">
      <span>Use a fashion template</span><span aria-hidden="true">→</span>
    </a>
    <a className="astria-article-cta__button astria-article-cta__button--secondary" href="https://www.astria.ai/gallery/workspaces">
      <span>Explore public workspaces</span><span aria-hidden="true">→</span>
    </a>
  </div>
</aside>

## Start with the image's job

Before describing style, decide what the image is for. A front-facing product page image, a fabric-detail crop, a wholesale line-sheet frame, and a campaign opener have different jobs. If the prompt begins with “cinematic fashion photo” but never states the deliverable, the result may be attractive and operationally useless.

A practical brief can be written in one sentence:

> Create a full-body front three-quarter catalog image that shows the complete reference outfit clearly, preserves its construction and color, and leaves clean negative space for a product page crop.

That sentence establishes purpose before decoration. It also gives reviewers a concrete standard: complete outfit, recognizable construction, faithful color, usable crop.

## The seven-part fashion prompt

Use these seven fields in roughly this order:

1. **Job:** catalog front, campaign hero, lookbook transition, material detail, or social crop.
2. **Subject:** model, garment, styling combination, and visible accessories.
3. **Preservation:** silhouette, color, print placement, closures, seams, hardware, length, and fabric behavior that must remain accurate.
4. **Frame:** full body, three-quarter, waist-up, macro detail, camera height, angle, and aspect ratio.
5. **Action:** stance, step, turn, hand position, gaze, or fabric movement.
6. **World:** background, surface, location, props, and color relationships.
7. **Image character:** light direction, contrast, depth of field, texture, and editorial restraint.

Not every prompt needs seven long clauses. The structure is a diagnostic tool: if an output fails, you can identify which field was vague.

## Catalog prompt family

Catalog images need repeatability more than surprise. Keep the background, camera height, light, crop, and product-preservation language fixed across the family. Change only the angle or shot size.

### 1. Front three-quarter outfit

> Full-body front three-quarter view of the model wearing the reference shirt, skirt, socks and shoes. She stands at a 45-degree angle and looks toward the camera, with the complete outfit visible and natural fabric folds. Preserve each garment's silhouette, length, color, seams and styling. Seamless off-white studio background #F5F5F5, soft even studio light, realistic proportions, clean 2:3 catalog composition.

Compare this structure with the public [America Basics workspace](https://www.astria.ai/w/america-basics), its [Basic Shirt template](https://www.astria.ai/p/basic-shirt), and this [full-look prompt](https://www.astria.ai/prompts/35818275?ws=54).

<PromptRecipe
  vertical="Fashion catalog"
  title="Build one look from three product references"
  purpose="A PDP-ready full-look frame that keeps the separate shirt, skirt, and shoes readable."
  specs={['Catalog', '2:3', 'Studio']}
  referenceImages={[
    {
      src: '/articles/img/prompt-recipes/fashion-shirt-reference.jpg',
      alt: 'Brown graphic sweatshirt photographed on white',
      label: 'Reference 1 · shirt',
    },
    {
      src: '/articles/img/prompt-recipes/fashion-skirt-reference.jpg',
      alt: 'Grey pleated skirt photographed on white',
      label: 'Reference 2 · skirt',
    },
    {
      src: '/articles/img/prompt-recipes/fashion-shoes-reference.jpg',
      alt: 'Silver sneakers photographed on white',
      label: 'Reference 3 · shoes',
    },
  ]}
  resultImage={{
    src: '/articles/img/prompt-recipes/fashion-catalog-result.jpg',
    alt: 'Model wearing the referenced sweatshirt, pleated skirt, socks, and sneakers',
    label: 'Public result · click to inspect the original generation',
  }}
  prompt={`Full-body front three-quarter view of the model wearing the reference shirt, skirt, socks and shoes. She stands at a 45-degree angle and looks toward the camera, with the complete outfit visible and natural fabric folds. Preserve each garment's silhouette, length, color, seams and styling. Seamless off-white studio background #F5F5F5, soft even studio light, realistic proportions, clean 2:3 catalog composition.`}
  challenge="Multiple product references compete for attention. The prompt has to preserve each item's construction while still producing one physically coherent outfit."
  notes={[
    'Compare the shirt graphic, collar, cuffs, and hem with the source.',
    'Check the skirt pleats, length, and waistband instead of judging only the silhouette.',
    'Keep the shoes and socks separated and verify both feet at full size.',
    'Reject poses that hide the waist or prevent a clean product-page crop.',
  ]}
  promptUrl="https://www.astria.ai/prompts/35818293?ws=54"
  templateUrl="https://www.astria.ai/p/basic-shirt"
  workspaceUrl="https://www.astria.ai/w/america-basics"
/>

### 2. Straight-on front

> Full-body straight-on catalog photograph of the model wearing the reference outfit, standing neutrally with feet comfortably apart and arms relaxed away from the torso so the side seams remain visible. Preserve neckline, sleeve length, waist, hem, print placement and garment proportions. Seamless warm-white background, soft symmetrical light, minimal shadow, eye-level camera, centered 2:3 frame.

### 3. Back view

> Full-body back view of the model wearing the reference outfit, head turned slightly away and arms relaxed. Show the complete rear construction, including collar, center-back seams, closures, pockets and hem. Preserve the exact silhouette and color. Seamless warm-white studio, soft even light, eye-level camera, centered 2:3 catalog frame.

### 4. Side profile

> Full-body left-side profile of the model wearing the reference dress. Keep the torso upright and arms slightly separated from the body so the sleeve, waist and side-seam shape are legible. Preserve the dress length, neckline, closures and fabric weight. Neutral light-grey sweep, soft diffused light, restrained contact shadow, clean 2:3 frame.

### 5. Fabric and construction detail

> Close detail crop of the model wearing the reference shirt, framed from shoulders to waist with the upper face outside the frame. Focus on weave, seams, collar construction and hem; preserve the product's exact color and proportions. Seamless off-white background #F5F5F5, soft even studio light, sharp material detail, 2:3.

The America Basics workspace also exposes a focused [fabric-detail prompt](https://www.astria.ai/prompts/35819692?ws=54). Pair close crops with a full product view; detail without context cannot establish the whole silhouette.

## Editorial prompt family

Editorial images can carry more gesture, atmosphere, asymmetry, and cropping. The garment clause should remain literal even when the setting becomes expressive.

### 6. Quiet campaign hero

> Full-body fashion campaign portrait of the model wearing the reference tailored look, standing near a pale stone wall with one shoulder angled toward the camera. Preserve the jacket's lapels, fastening, waist shape, trouser length and fabric color. Cool morning light enters from frame left, long soft shadow, muted cream and mineral-grey palette, generous negative space, restrained luxury editorial mood, vertical 4:5.

### 7. Controlled walking frame

> Full-body street-level photograph of the model wearing the reference coat and boots, captured mid-step with the coat opening naturally but the front construction still readable. Preserve the coat length, collar, buttons, pockets and exact color. Quiet concrete arcade, low winter light, subtle motion in the hem only, realistic anatomy, refined 4:5 fashion editorial.

### 8. Studio turn

> Full-body shot of the model wearing the reference swimsuit and bracelet, stepping backward while turning her upper body toward the camera. One heel is lifted, the torso is gently twisted and the arms trail with restrained motion. Preserve the swimsuit cut, straps, coverage and color. Dark teal-grey studio background #1F2A2A with a soft center-to-edge gradient; diffused studio light and cinematic shadow falloff; refined 3:4 editorial frame.

Study the public [Dark Swimwear workspace](https://www.astria.ai/w/dark-swimwear), the [Swimsuit Set 1 template](https://www.astria.ai/p/swimsuit-set-1), and its [turning](https://www.astria.ai/prompts/40584408?ws=368) and [transitional](https://www.astria.ai/prompts/40584411?ws=368) frames. The useful idea is not one pose; it is a sequence with controlled differences.

### 9. Seated portrait

> Three-quarter seated fashion portrait of the model wearing the reference knit set, perched on the front edge of a low charcoal plinth with knees angled away and torso turned gently toward camera. Preserve the knit texture, neckline, sleeve length and waistband. Dusty-lilac studio, large soft source from camera right, quiet shadow, tactile realism, vertical 4:5.

### 10. Cropped gesture

> Waist-to-knee editorial crop of the model wearing the reference skirt and shirt, one hand entering a pocket while the other adjusts the cuff. Keep both garments' waistlines, closures, hem shapes and material textures accurate. Warm neutral wall, directional window light, slight grain, natural hand anatomy, intimate vertical 4:5 composition.

<PromptRecipe
  vertical="Wedding dresses"
  title="Add movement without losing beadwork and volume"
  purpose="A bridal campaign frame that introduces air and location while keeping the dress commercially recognizable."
  specs={['Campaign', '3:4', 'Soft movement']}
  referenceImages={[
    {
      src: '/articles/img/prompt-recipes/bridal-dress-reference.jpg',
      alt: 'Off-white beaded tulle wedding dress reference on a model',
      label: 'Reference · dress construction',
    },
  ]}
  resultImage={{
    src: '/articles/img/prompt-recipes/bridal-terrace-result.jpg',
    alt: 'Bride wearing the referenced dress beside an arched terrace door',
    label: 'Public result · click to inspect the original generation',
  }}
  prompt={`Medium shot of a bride wearing the reference off-white beaded tulle dress, standing beside an open arched terrace door. A light breeze moves the sheer curtains and only the outer layers of the dress. Preserve the neckline, beading pattern, bodice construction, waist, skirt volume and color. Hair slightly windswept, soft-focus garden background, elegant cinematic storytelling, natural anatomy, vertical 3:4.`}
  challenge="Bridal imagery combines fine construction, translucent layers, bead placement, large skirt volume, and movement. A generic wind instruction can redesign the dress."
  notes={[
    'Trace the neckline, sleeve shape, waist, and bead density back to the reference.',
    'Let the outer tulle move while the fitted bodice stays structurally stable.',
    'Check that the arch, curtain, and model occupy believable depth planes.',
    'Capture a separate full-length frame; this medium shot cannot prove the complete hem.',
  ]}
  promptUrl="https://www.astria.ai/prompts/37146748?ws=126"
  templateUrl="https://www.astria.ai/p/wedding-dress"
  workspaceUrl="https://www.astria.ai/w/wedding-dress"
/>

## Lookbook sequence prompts

A lookbook is not 12 unrelated “good images.” It is an edited rhythm. Repeat the cast, styling, location family, grade, and preservation clause; vary distance, angle, pose, and energy. The following five prompts can follow one approved hero.

### 11. Establishing frame

> Wide environmental fashion photograph of the model wearing the reference look at the entrance to a quiet modernist building. Show the complete silhouette at a smaller scale while keeping the garment color and length legible. Overcast daylight, pale stone and muted green surroundings, low contrast, generous architectural negative space, vertical 4:5.

### 12. Medium connective frame

> Three-quarter-length photograph of the same model and reference look in the same modernist setting, walking slowly parallel to the wall. Preserve the garment construction and styling. Eye-level camera, soft overcast light, subtle fabric movement, consistent muted color grade, vertical 4:5.

### 13. Low-angle silhouette

> Full-body low-angle photograph of the same model wearing the reference look, paused on a shallow exterior step. Keep the complete silhouette, footwear and hem visible without exaggerating limb proportions. Pale stone facade, diffuse sky light, controlled geometry, restrained editorial tension, vertical 4:5.

### 14. Material punctuation

> Tight shoulder-to-hip detail of the same model wearing the reference look, focusing on the garment's closure, seam architecture and fabric surface. Preserve the exact material color and construction. Same pale-stone location and overcast light, shallow depth of field, crisp product detail, vertical 4:5.

### 15. Closing movement frame

> Full-body rear three-quarter photograph of the same model wearing the reference look, walking away and turning her head slightly toward the building entrance. Preserve the back construction, hem, footwear and styling. Same modernist location, soft late-afternoon light within the established muted grade, gentle motion at the hem, vertical 4:5.

For a broader production sequence, continue with the [AI lookbook guide](./ai-lookbook-guide.md). The public [Language of Form workspace](https://www.astria.ai/w/angela-fraser) and [Chapter 2 lookbook template](https://www.astria.ai/p/chapter-2-the-lookbook) are useful references for thinking in chapters instead of isolated frames.

## What to repeat and what to change

Make a small invariant block before generating:

- the approved cast and grooming;
- the exact product references and styling combination;
- the location family and background palette;
- the light family and contrast level;
- the image ratio and color treatment;
- the construction details reviewers must check.

Then build a shot list whose variable is explicit: front, back, close, walking, seated, wide, or transition. If you change the set, light, pose, crop, and styling together, a failed image teaches you very little.

## Prompting for motion without losing the garment

Motion should be physically small and visually clear. “Dynamic” can produce airborne fabric, hidden closures, tangled limbs, or a garment that no longer hangs like the product. Prefer observable actions: one step, a quarter turn, a hand entering a pocket, a lifted heel, a coat opening in a light breeze.

State what must stay readable during the movement. A tennis-inspired frame in the [America Basics prompt set](https://www.astria.ai/prompts/35823359?ws=54) is useful because it connects action with wardrobe rather than treating movement as an abstract mood.

## Review the output like production, not inspiration

Approve images at two levels.

**Product review:** compare neckline, straps, sleeve and hem length, closures, pockets, seams, print placement, material texture, color, footwear, jewelry, and rear construction with the source images.

**Image review:** check hands, feet, limb count, joint direction, contact with surfaces, shadows, reflections, background continuity, crop safety, and whether the pose is physically coherent.

Beautiful is not the same as usable. A frame with the wrong button count is a different product image. A cropped campaign image may be strong but cannot substitute for the complete catalog view.

## A reusable prompt worksheet

Write one line for each field before combining them:

```text
JOB: [where the image will be used]
SUBJECT: [model, garment, styling]
PRESERVE: [construction, color, material, proportions]
FRAME: [shot size, angle, camera height, aspect ratio]
ACTION: [one observable pose or movement]
WORLD: [background, location, props, palette]
CHARACTER: [light, contrast, texture, editorial mood]
```

The worksheet is intentionally plain. Specific nouns and physical relationships do more work than a pile of style adjectives.

## Frequently asked questions

### How do you write a good AI fashion photography prompt?

Write it like a compact call sheet: state the image's job, the garment that must remain accurate, framing, pose or action, setting, light, and visual character. Keep the product facts fixed while changing one creative variable at a time.

### What should stay consistent across AI lookbook prompts?

Keep the cast, garment references, styling rules, location logic, light family, color treatment, and output ratio consistent. Vary the shot size, camera angle, pose, and moment so the sequence feels related without becoming repetitive.

### Should a fashion prompt include camera and lens names?

Only when the camera language changes the result you need. Framing, camera height, distance, depth of field, and light direction are usually more useful than a long equipment list.

### How can prompts preserve garment accuracy?

Name the visible construction details that matter, such as neckline, sleeve length, closures, seams, hem, print placement, and fabric behavior. Use clear front, back, and detail references, then review each output against them before publishing.

### Can the same prompt work for catalog and campaign images?

Not well. Catalog prompts prioritize coverage, clean backgrounds, legible construction, and repeatable framing. Campaign prompts can prioritize gesture, atmosphere, cropping, and narrative, but they still need an explicit product-preservation clause.

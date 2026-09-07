# Astria image-model benchmark — September 2026

This directory contains the reproducible source prompts, comparison briefs, prompt IDs, costs, and judging data used by the Astria image-model article series.

## Core models

- Nano Banana 2 Pro (`nano-banana-2`)
- GPT Image 2 (`gpt-image-2`)
- Seedream 5.0 Pro (`seedream5pro`)
- Muse Image (public partner tune `5605622`)

## Benchmark rules

- Use workspace `674` (`Astria Models`).
- Use the same reference tunes and semantic prompt for every model.
- Generate three outputs per brief.
- Use 2K where the catalog exposes a 2K option; Muse uses its native endpoint settings.
- Use 3:4 for portrait/editorial work and 1:1 for the jewelry macro. The initial 4:5 calibration exposed that Muse does not support 4:5, so 3:4 is the shared portrait ratio.
- Keep all outputs, including refusals, failures, and unwanted alterations.
- Article comparison figures use the first valid predetermined output, not a hand-picked favorite. Other runs remain available in the result archive.
- Benign swimwear tests use adult subjects and ordinary commercial framing. Record safety outcomes; do not attempt to evade safeguards.

## Source-reference prompts

The source products are synthetic, brand-neutral, and created solely for this benchmark. They prevent customer assets from being reused in public editorial material.

### Textured jacket

> A product-only ecommerce reference photograph of one cropped women's jacket laid perfectly flat on a pure white background. The jacket is burnt orange silk jacquard with a visible woven leaf pattern, teal embroidered cranes on both front panels, matte brass dome buttons, a sharp pointed collar, long sleeves, and a scalloped hem. Symmetrical front view, accurate garment construction, evenly diffused studio light, crisp texture, no person, no hanger, no props, no readable text, no logo.

### Swimsuit

> A product-only ecommerce reference photograph of one adult women's one-piece swimsuit laid perfectly flat on a pure white background. Deep cobalt-blue fabric with narrow coral piping around the square neckline and leg openings, one asymmetric shoulder strap, and three small brushed-gold rings aligned vertically at the left waist. Symmetrical garment presentation, accurate seams and proportions, evenly diffused studio light, no person, no mannequin, no props, no readable text, no logo.

### Beauty bottle

> A product-only studio reference photograph of one premium cylindrical serum bottle and its matching carton on a pure white background. Frosted rose-pink glass, brushed silver pump and cap, minimalist black typography. The bottle and carton must both display the exact text “ASTRIA”, “LUMEN SERUM”, “No. 04 ROSE”, and “30 mL”. Front-facing, centered, straight vertical geometry, soft controlled reflections, crisp legible printing, no other text, no logo symbol, no hands, no person.

### Emerald necklace

> A product-only macro reference photograph of one rose-gold necklace arranged in a shallow U shape on a pure white background. Exactly seven oval emerald stones in individual four-prong settings, separated by pairs of tiny round white diamonds, with a fine cable chain and one small lobster clasp visible at the upper right. Symmetrical luxury jewelry photography, precise stone count and hardware, realistic reflections, very sharp detail, no person, no props, no readable text, no logo.

## Shared references

- Adult cast identity: `<faceid:5279024:1> woman` (Lee; dedicated Astria Models workspace)
- Simple garment control: `<faceid:4313172:1> shirt` (tank top)
- Textured jacket: `<faceid:5616645:1> jacket`
- Swimsuit: `<faceid:5616646:1> swimsuit`
- Beauty bottle: `<faceid:5616648:1> bottle`
- Emerald necklace: `<faceid:5616647:1> necklace`

The product references were generated with Ideogram V4 and visually checked before tune creation. Ground truth follows the rendered source—not an idealized prompt: the jacket has four crane motifs and four brass buttons; the necklace has nine emeralds; the swimsuit has one narrow coral strap, one wider blue strap, coral neckline trim, and three gold waist rings. The serum source uses an upright bottle and carton with the requested label copy.

## Comparison briefs

### 01 — general fashion default

Aspect ratio: `3:4`

> Create a full-length high-fashion editorial photograph of `<faceid:5279024:1> woman` wearing `<faceid:4313172:1> shirt` with high-waisted ivory wide-leg trousers and simple black slingback shoes. She is walking through a sunlit pale-stone gallery, looking directly at the camera, with natural fabric movement and a confident relaxed expression. Warm late-afternoon side light, subtle film grain, realistic skin and anatomy, clean magazine composition. Preserve the woman's identity and the referenced shirt exactly. No text, no logos, no extra people.

### 02 — color and difficult texture

Aspect ratio: `3:4`

> Create a three-quarter-length fashion campaign photograph of `<faceid:5279024:1> woman` wearing `<faceid:5616645:1> jacket` over a plain black silk column dress. Deep teal seamless studio background, controlled hard side light and soft frontal fill. Preserve the jacket's burnt-orange color, woven jacquard leaf texture, four teal crane motifs, four brass buttons, collar, sleeves, and scalloped hem exactly. Preserve the woman's identity. Rich but accurate color, realistic fabric sheen and skin, no text, no logos, no extra people.

### 03 — swimwear ecommerce

Aspect ratio: `3:4`

> Create a tasteful full-length ecommerce photograph of `<faceid:5279024:1> woman` wearing `<faceid:5616646:1> swimsuit`. The adult model stands naturally with both arms relaxed at her sides against a warm off-white seamless studio background. Straight-on view, even soft commercial lighting, realistic body proportions and skin, no provocative pose. Preserve her identity and preserve the swimsuit's cobalt color, narrow coral left strap, wider blue right strap, coral neckline trim, three gold waist rings, seams, and coverage exactly. No text, no logo, no props, no extra people.

### 04 — swimwear editorial

Aspect ratio: `3:4`

> Create a tasteful fashion editorial photograph of `<faceid:5279024:1> woman` wearing `<faceid:5616646:1> swimsuit` beside a modern white swimming pool at sunrise. The adult model stands in a calm three-quarter pose with one hand resting lightly on the pool rail, looking away from the camera. Soft peach sky, cobalt water reflections, elegant resort campaign mood. Preserve her identity and preserve the swimsuit's cobalt color, narrow coral left strap, wider blue right strap, coral neckline trim, three gold waist rings, seams, and coverage exactly. Realistic skin, no provocative framing, no text, no logo, no extra people.

### 05 — beauty with exact text

Aspect ratio: `3:4`

> Create a premium beauty campaign image of `<faceid:5279024:1> woman` in a close shoulder-up portrait holding `<faceid:5616648:1> bottle` beside her face. Dewy natural skin, restrained rose makeup, soft silver and blush lighting, pale warm-grey background. Preserve her identity and the bottle's frosted rose glass, silver pump, proportions, and exact label. Add the exact campaign headline “COLOR, KEPT TRUE” once in the open space above her left shoulder. The bottle must read exactly “ASTRIA”, “LUMEN SERUM”, “No. 04 ROSE”, and “30 mL”. No other text, no extra products, no extra people.

### 06 — jewelry reference fidelity

Aspect ratio: `1:1`

> Create a close beauty portrait of `<faceid:5279024:1> woman` wearing `<faceid:5616647:1> necklace` against a charcoal-grey studio background. Frame from collarbones to just above the eyebrows so the necklace and face are both clear. Soft beauty light with precise controlled highlights on the jewelry. Preserve her identity. Preserve exactly nine emeralds, their four-prong rose-gold settings, the small white diamonds between them, fine cable chain, spacing, and proportions. Realistic skin and jewelry reflections, no text, no logo, no other jewelry, no extra people.

### 07 — identity close-up

Aspect ratio: `3:4`

> Create a close shoulder-up fashion portrait of `<faceid:5279024:1> woman` wearing `<faceid:5616645:1> jacket`. Direct gaze, neutral expression, pale stone background, soft north-window light. Preserve the woman's facial identity, hair, skin tone, and the jacket exactly. No text, no logo, no extra people.

### 08 — identity full-length

Aspect ratio: `3:4`

> Create a full-length fashion photograph of `<faceid:5279024:1> woman` wearing `<faceid:5616645:1> jacket` with straight black trousers and black shoes. She stands square to camera in a pale stone gallery, arms relaxed, neutral expression, soft north-window light. Preserve the same facial identity, hair, skin tone, and jacket as the reference. No text, no logo, no extra people.

### 09 — identity seated

Aspect ratio: `3:4`

> Create a three-quarter fashion photograph of `<faceid:5279024:1> woman` wearing `<faceid:5616645:1> jacket` with straight black trousers. She is seated upright on a low brushed-steel bench in a pale stone gallery, hands relaxed, looking directly at the camera, soft north-window light. Preserve the same facial identity, hair, skin tone, and jacket as the reference. No text, no logo, no extra people.

### 10 — identity in motion

Aspect ratio: `3:4`

> Create a full-length fashion photograph of `<faceid:5279024:1> woman` walking toward the camera in a pale stone gallery while wearing `<faceid:5616645:1> jacket` with straight black trousers and black shoes. Natural stride, slight fabric motion, direct gaze, soft north-window light, crisp face and garment. Preserve the same facial identity, hair, skin tone, and jacket as the reference. No text, no logo, no extra people.

### 11 — complex multi-reference reasoning

Aspect ratio: `3:4`

> Create one vertical luxury campaign photograph using every reference in its stated role. `<faceid:5279024:1> woman` is the only person. She wears `<faceid:5616645:1> jacket` over a plain black dress and wears `<faceid:5616647:1> necklace`. She holds exactly one `<faceid:5616648:1> bottle` upright in her right hand at chest height with the label facing the camera. Place her against a deep teal seamless studio background with a narrow coral-red floor strip visible at the bottom. Preserve her identity; preserve the jacket's colors, four crane motifs, four brass buttons, and silhouette; preserve the necklace's nine emeralds and rose-gold settings; preserve the bottle's colors, geometry, and exact printed label. Do not merge product attributes. No additional garments, jewelry, bottles, text, objects, or people.

## Figure plan

1. Fashion default: brief 01, four-model grid.
2. Texture and color: brief 02, full outputs plus identical garment crops.
3. Swimwear sensitivity: briefs 03–04, completion/refusal/alteration table.
4. Beauty and text: brief 05, full outputs plus headline and label crops/OCR.
5. Jewelry: brief 06, full outputs plus stone/setting crop.
6. Identity strip: briefs 07–10 arranged as four model rows by four shot columns.
7. Muse reference reasoning: brief 11 plus per-reference constraint checklist.

## Result files

- `runs.json`: prompt IDs, model, brief, run count, cost, status, and downloaded assets.
- `scores.csv`: human scoring sheet with one row per generated asset.
- `assets/`: source references and generated outputs, grouped by brief and model.

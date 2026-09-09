# Reference-first article visual audit — September 9, 2026

## Decision

All new article visuals and image-model comparisons are reference-driven. Text-to-image-only runs are out of scope for public articles, even when they look polished. The shared generation home is Astria workspace `896` (`Articles`).

An example is publishable only when it passes both gates:

1. **Reference fidelity:** the requested identity, product, color, pattern, geometry, scale, text, and assigned reference roles survive the generation.
2. **Editorial quality:** the source is sharp enough to judge, the result looks intentionally art-directed, and the selected file holds up at its published size.

## Production gate

- Use a rights-cleared source image, not a prose description, as the visual ground truth.
- Prefer source images with at least 1600 px on the long edge and a subject large enough for the intended crop. Do not count an upscale as source resolution.
- Use 2K output or higher when supported; prefer 4K for covers and full-width comparisons.
- In a comparison, hold the references, semantic prompt, aspect ratio, and output count fixed across compatible models.
- If a model cannot accept the reference path, record it as incompatible. Do not substitute a text-only run into the comparison.
- Review the full frame and the fidelity-critical crop. A pretty frame that changes the SKU does not pass; an accurate but weak-looking frame is not a public hero.
- Keep exact prompts, prompt IDs, model, resolution, source provenance, and the selection rationale in the internal record.

## Reference problems derived from Sivan Tests

The twenty most recent prompts in workspace `760` are all reference-conditioned. They provide the useful issue taxonomy for article examples:

| Test family | References used | What to inspect |
| --- | --- | --- |
| Product scale in hand | Cast plus supplement tub | Realistic scale, unobstructed pack, label orientation, hand anatomy |
| Watch in a lifestyle pose | Cast plus cup plus watch | Watch visibility, band pattern, wrist placement, product not swallowed by the pose |
| Multiple wrist accessories | Hand/bracelet plus watch or ring | Separation of roles, counts, metal color, clasp/setting geometry |
| Bag plus prop | Cast plus handbag plus mug | Full bag silhouette, strap pattern, prop separation, natural grip |
| Beauty with apparel | Cast plus cream tube plus shirt | Tube scale and label, shirt color/graphic, hand placement, face identity |
| Eyewear with textured apparel | Cast plus jacket plus sunglasses | Frame geometry, logo/detail retention, jacket color and surface |
| Children's apparel and bag | Child cast plus printed dress plus backpack | Print fidelity, full garment visibility, bag silhouette, age-appropriate anatomy and pose |

The strongest known-resolution Sivan sources include a 4000×6000 skincare source, a 2160×1440 eyewear source, 1588×1588 patterned-watch detail, and a 1477×1774 supplement source. Sources without verified dimensions remain unapproved for publication until inspected.

Five representative 2K Sivan outputs were downloaded and inspected at full resolution. The bag-plus-mug and children's dress-plus-backpack frames are the strongest article candidates because the scene is attractive and every assigned product is easy to inspect. The supplement frame is visually clean but needs label review. The watch frame is attractive but should be judged specifically for band pattern and watch-body substitution. The skincare-plus-shirt frame is useful for simultaneous label/print testing, but the shirt copy is cropped and should not be presented as a clean pass.

## Maison Urban matched comparison

Workspace `6` contains a strong real-production pattern for future comparisons: one fixed cast, yellow belted dress, gold disc bag, off-kilter flash-lit bar direction, and identical framing across models. The recent Sunburst, Flare, and Nano Banana 2 outputs were generated at 4K and visually inspected. They are polished, coherent, and suitable for a public comparison, with product-detail review still required against the source images.

This comparison is already being used to replace unrelated or text-only GPT Image 2.5 examples. It should remain a matched reference test rather than a universal ranking.

## Current content findings

### Passes the reference-first structure

- The core September image benchmark uses a fixed cast and product references for fashion, color/texture, swimwear, beauty, jewelry, identity, and multi-reference tests.
- The new prompt-recipe articles pair every interactive result with a `referenceImages` set.
- The GPT Image 2.5 Maison Urban addendum uses the same cast, dress, bag, and semantic prompt across models.

### Must be removed or replaced

- MAI text-only fashion qualification.
- MAI text-only product/headline qualification and its Flash counterpart.
- Any cover assembled from a text-only MAI result.
- The weak MAI beauty edit as a featured public example; it may remain an internal failure record.

### Resolution note for prompt recipes

The current prompt-recipe source and result exports are 640 px wide. They were visually inspected and are sharp enough for the paired column at its current rendered size, including a two-times-density display. Do not promote them to full-width heroes or large lightboxes. Replace them with inspected higher-resolution originals before any layout change that displays them above 320 CSS pixels wide.

The affected sets are fashion shirt/skirt/shoes, bridal dress, beauty bottle, jewelry ring, and dress packshot examples. Their visual pairing and reference provenance pass; their reuse size is constrained.

### Coverage gap

The current benchmark does not contain a dedicated plus-size, reference-led comparison. Articles may discuss inclusive casting, but that claim is not yet accompanied by a matched plus-size visual test. Add one only after an approved high-resolution cast and garment reference set is available in the `Articles` workspace; do not fill the gap with a described body and a text-only prompt.

## Workspace migration status

The `Articles` workspace exists. No private source image has been copied into it yet. Creating persistent article references from Sivan Tests or Maison Urban requires explicit approval because it copies private source images and may incur reference-processing or generation cost.

Once approved, seed the workspace with a small curated library rather than copying every test asset:

- one adult fashion cast;
- one plus-size cast;
- one detailed patterned garment;
- one bag;
- one watch or bracelet;
- one skincare or supplement pack;
- one jewelry piece;
- one children's garment/accessory pair only when the article requires it.

Each source must pass the resolution, rights, and visual-quality gate before it is added.

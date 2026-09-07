# Fashion, ecommerce and lookbook prompts: content plan

Prepared September 6, 2026. This is an editorial plan, not authorization to publish the full roster. The repository's wider content pause and October 4 review still apply.

## Decision

Build a prompt-led content cluster around a practical idea: a useful image prompt is a production brief, not a list of aesthetic adjectives. Every page should give readers copyable English prompts, show the generated proof in a public Astria workspace, and offer the reusable template when one exists.

Start with one new pillar, one new ecommerce page, and two contained updates to existing pages. Hold the remaining vertical pages until the first group has been indexed and measured. Vitamins is additionally gated on producing a public proof workspace; the current curated workspace gallery does not contain a vitamin or supplement collection strong enough to cite as a proven example.

The plan deliberately does not reproduce Astria's internal reference-token syntax. Prompts use plain editorial placeholders such as “the reference dress” or “the reference product,” so they remain readable, portable, and free of implementation detail.

## Why this cluster is different from the current library

The existing library owns workflow, evaluation and buying intent:

- `ai-fashion-photoshoot-guide` explains how to run a fashion production.
- `ai-lookbook-guide` owns AI lookbook strategy, continuity and approval.
- `how-to-create-a-lookbook` owns the general brief-to-delivery process.
- `ai-jewelry-photography` owns jewelry-specific risk and QA.
- `3d-packshots-ecommerce`, `ghost-mannequin-photography-ecommerce` and `shopify-product-media-guide` own production formats and storefront delivery.

The prompt cluster should own examples and construction: what to type, why each clause is present, how to turn one approved treatment into a shot family, and which public template can run it. Do not create a second generic AI lookbook guide or another broad jewelry guide.

## Public-workspace review

The evidence standard for inclusion was: a live public workspace, a reusable public template, and rendered output attached to the prompt. The review used the [public workspaces gallery](https://www.astria.ai/gallery/workspaces) and the public template metadata available on September 6, 2026.

Workspace and template URLs are publicly readable without an account. The individual prompt-detail URLs below are durable signed-in links as of this review; an anonymous request redirects to login. They are useful for exact prompt provenance, but must always sit beside the corresponding public workspace or template rather than serving as the only evidence or CTA.

| Use case | Public proof | Reusable template | Prompt examples worth teaching | What works |
| --- | --- | --- | --- | --- |
| Minimal fashion catalog plus campaign | [America Basics workspace](https://www.astria.ai/w/america-basics) | [Basic shirt](https://www.astria.ai/p/basic-shirt) | [Full look](https://www.astria.ai/prompts/35818275?ws=54), [fabric detail](https://www.astria.ai/prompts/35819692?ws=54), [tennis action](https://www.astria.ai/prompts/35823359?ws=54) | One product set becomes a neutral PDP frame, a material close-up and a contextual campaign image. Shot size and pose change; the product set and lighting logic remain explicit. |
| Editorial fashion movement | [Dark Swimwear workspace](https://www.astria.ai/w/dark-swimwear) | [Dark Vibes Swimwear](https://www.astria.ai/p/swimsuit-set-1) | [Turning full-body frame](https://www.astria.ai/prompts/40584408?ws=368), [transitional medium frame](https://www.astria.ai/prompts/40584411?ws=368) | Body mechanics are described precisely: foot placement, torso rotation, arm position and controlled motion. A named background color and repeated light treatment hold the set together. |
| Editorial lookbook system | [The Language of Form workspace](https://www.astria.ai/w/angela-fraser) | [Chapter 2: The Lookbook](https://www.astria.ai/p/chapter-2-the-lookbook) | Use the template as the linkable system; its individual working rows are not separately public | The template separates pose, model, garment, accessories, footwear and background into swappable inputs. It demonstrates that a lookbook prompt is a system of slots, not one monolithic paragraph. |
| Beauty campaign | [Beauty workspace](https://www.astria.ai/w/beauty) | [Beauty template](https://www.astria.ai/p/beauty) | [Condensation still life](https://www.astria.ai/prompts/45986211?ws=761), [beauty close-up](https://www.astria.ai/prompts/45986078?ws=761), [garden overhead](https://www.astria.ai/prompts/45986030?ws=761) | Product-only and model-plus-product frames share palette, light, grain and mood. Repeated art direction creates a campaign; composition changes create useful channel variety. |
| Jewelry | [Jewelry Product Photography workspace](https://www.astria.ai/w/jewelry-product-photography) | [Ring template](https://www.astria.ai/p/jewelry-ring) | [Macro product frame](https://www.astria.ai/prompts/33498743?ws=297), [hand-and-espresso lifestyle frame](https://www.astria.ai/prompts/33498723?ws=297), [on-model crop](https://www.astria.ai/prompts/33498478?ws=297) | The prompts control hand position, crop, focal length, depth of field, material surface and light. They alternate product evidence with editorial context instead of asking one image to do both. |
| Bridal fashion | [Wedding Dress AI Photoshoot workspace](https://www.astria.ai/w/wedding-dress) | [Wedding Dress template](https://www.astria.ai/p/wedding-dress) | [Breezy terrace frame](https://www.astria.ai/prompts/37146748?ws=126), [staircase movement](https://www.astria.ai/prompts/37146736?ws=126), [architectural long shot](https://www.astria.ai/prompts/37149847?ws=126) | The location vocabulary is consistent while the action changes. The best prompts make fabric movement and the relationship between gown, body and architecture part of the shot. |
| Ecommerce packshot coverage | [3D Ghost Packshots workspace](https://www.astria.ai/w/3d-packshots) | [Dress Packshots](https://www.astria.ai/p/3d-packshots-dress) | [Front view](https://www.astria.ai/prompts/40128059?ws=268), [back view](https://www.astria.ai/prompts/40128064?ws=268) | Direction is short and operational: view, silhouette, full-product framing, exact background, light and focus. The paired views form coverage rather than isolated “nice” images. |
| Shoes, bags and accessories | [Fashion 3D Packshots workspace](https://www.astria.ai/w/fashion-3d-packshots) | [Shoes](https://www.astria.ai/p/3d-packshots-for-shoes), [handbag](https://www.astria.ai/p/handbag), [backpack](https://www.astria.ai/p/backpack) | Link at template level | The workspace organizes prompts by product class and delivery job. That is more reusable than one generic “product photography” prompt. |

### Patterns to carry into every article

1. **Start with the job.** State PDP, campaign, social crop, detail evidence or lookbook sequence before describing mood.
2. **Name the subject and preservation requirement.** Use “the reference dress,” “the reference ring” or “the reference bottle,” then identify the non-negotiable silhouette, material, construction and branding details.
3. **Direct the frame.** Specify shot size, view, camera height, crop and aspect ratio.
4. **Direct the action.** For people, describe weight, limbs, gaze and movement. For still life, describe surface, orientation and prop relationship.
5. **Lock the world.** Give a real setting or an exact studio color, the light direction and quality, and a controlled palette.
6. **Add camera character only when it earns its place.** Lens, depth of field, grain and halation should support the job, not decorate the prompt.
7. **Build a shot family.** Repeat the preservation, world and light clauses; vary composition and action. Show at least three related prompts together.
8. **Keep QA outside the prompt.** A promise to preserve seams or labels is direction, not proof. Each article needs a visible review checklist for product geometry, text, hands, material and color.

## Recommended publishing architecture

### Phase 1: controlled prompt pilot

Publish only after the October 4 data review unless the content pause is explicitly lifted.

| Priority | Deliverable | Type | Search job and boundary | Public proof and CTA | Internal links |
| --- | --- | --- | --- | --- | --- |
| P1 | **AI Fashion Photography Prompts: A Production-Ready Guide** | New pillar | Own broad “AI fashion prompts” and “fashion photography prompts” example intent. Do not re-explain end-to-end production economics or vendor choice. | Lead with [Dark Swimwear](https://www.astria.ai/w/dark-swimwear); CTA to [Dark Vibes Swimwear](https://www.astria.ai/p/swimsuit-set-1). | `ai-fashion-photoshoot-guide`, `consistent-ai-fashion-models`, `flat-lay-to-on-model`, `ai-lookbook-guide` |
| P1 | **Ecommerce Product Photography Prompts for PDP, Packshots and Campaigns** | New guide | Own prompt examples by delivery job. Do not become another Shopify configuration guide or 3D service comparison. | Lead with [3D Ghost Packshots](https://www.astria.ai/w/3d-packshots); CTA to [Dress Packshots](https://www.astria.ai/p/3d-packshots-dress). | `shopify-product-media-guide`, `3d-packshots-ecommerce`, `ghost-mannequin-photography-ecommerce`, `product-photography-cost-per-sku` |
| P1 | **Add a “six-prompt lookbook sequence” section to the AI Lookbook Guide** | Existing-page update | Capture lookbook-prompt variants without creating a competing URL. Keep the page's current strategy intent and add a worked sequence. | Use [The Language of Form](https://www.astria.ai/w/angela-fraser) and [Chapter 2](https://www.astria.ai/p/chapter-2-the-lookbook). | Existing links remain; add the new fashion-prompts pillar once live. |
| P1 | **Add a “ring shot ladder” to AI Jewelry Photography** | Existing-page update | Satisfy jewelry-prompt intent inside the established jewelry authority page. No second generic jewelry article. | Use [Jewelry Product Photography](https://www.astria.ai/w/jewelry-product-photography) and [Ring](https://www.astria.ai/p/jewelry-ring). | Link to ecommerce-prompts guide for product-only coverage and the fashion-prompts pillar for on-model direction. |

### Phase 2: vertical expansion, only if the pilot earns it

| Priority | Deliverable | Type | Distinct angle | Proof requirement |
| --- | --- | --- | --- | --- |
| P2 | **Beauty Product Photography Prompts: 15 Campaign and Still-Life Setups** | New vertical guide | A campaign system mixing packshot, texture, model-plus-product, hands and ingredient world-building. | Already met by [Beauty](https://www.astria.ai/w/beauty) and its [template](https://www.astria.ai/p/beauty). |
| P2 | **Wedding Dress Photography Prompts for Designer Lookbooks** | New vertical guide | Gown construction, train, veil, lace and beading fidelity across editorial movement and sales coverage. Target designers, not consumer bridal portraits. | Already met by [Wedding Dress AI Photoshoot](https://www.astria.ai/w/wedding-dress) and its [template](https://www.astria.ai/p/wedding-dress). Do not use the consumer bridal-portrait template as the main proof. |
| P2 | **Swimwear Photography Prompts: Studio Coverage Without Static Poses** | Optional new vertical guide | Motion direction, body/product interaction and a consistent dark studio treatment. | Already met by [Dark Swimwear](https://www.astria.ai/w/dark-swimwear). Publish only if query data separates this from the pillar. |
| P2 | **Jewelry Prompt Library: Rings, Necklaces and Earrings** | Optional hub or expansion to the existing article | Product-only macro, hand, neck/ear crop and lifestyle prompts organized by product class. | Use the [jewelry workspace](https://www.astria.ai/w/jewelry-product-photography) plus [ring](https://www.astria.ai/p/jewelry-ring), [necklace](https://www.astria.ai/p/jewelry-necklace) and [earrings](https://www.astria.ai/p/earrings). Prefer expanding the current article unless Search Console shows a separate prompt query cluster. |
| Gate | **Vitamin and Supplement Product Photography Prompts** | New vertical guide after proof | Bottle, sachet, gummy, capsule and subscription-bundle imagery; label fidelity; ingredient styling; compliant lifestyle context; no invented health outcomes. | First create and publish a six-to-eight-image supplement workspace plus reusable template. The current public Beauty work can inform the art-direction pattern, but should not be presented as vitamin proof. |

## Editorial prompt library

These are the normalized examples to develop inside the articles. Replace “reference” nouns through the product/template UI; keep the prose itself stable.

### Fashion: neutral catalog frame

> Full-body front three-quarter view of the model wearing the reference shirt, skirt, socks and shoes. She stands at a 45-degree angle and looks toward the camera, with the complete outfit visible and natural fabric folds. Seamless off-white studio background #F5F5F5, soft even studio light, realistic proportions, clean 2:3 catalog composition.

Teach: coverage, complete garment visibility and a reusable background. Pair it with the [full-look source prompt](https://www.astria.ai/prompts/35818275?ws=54).

### Fashion: detail evidence

> Close detail crop of the model wearing the reference shirt, framed from shoulders to waist with the upper face outside the frame. Focus on weave, seams, collar construction and hem; preserve the product's exact color and proportions. Seamless off-white background #F5F5F5, soft even studio light, sharp material detail, 2:3.

Teach: one prompt should have one evidence job. Pair it with the [fabric-detail source prompt](https://www.astria.ai/prompts/35819692?ws=54).

### Fashion: controlled movement

> Full-body shot of the model wearing the reference swimsuit and bracelet, stepping backward while turning her upper body toward the camera. One heel is lifted, the torso is gently twisted and the arms trail with restrained motion. Dark teal-grey studio background #1F2A2A with a soft center-to-edge gradient; diffused studio light and cinematic shadow falloff; refined 3:4 editorial frame.

Teach: describe body mechanics rather than writing “dynamic pose.” Pair it with the [turning-frame source prompt](https://www.astria.ai/prompts/40584408?ws=368).

### Ecommerce: front packshot

> Front view of the reference dress as a clean volumetric packshot. Preserve its silhouette, waist, seams, closures, pleats, fabric flow and hem. Center the full garment with clear negative space on a solid #F2F2F2 studio background; soft diffused light, restrained contact shadow, sharp focus, square composition.

Teach: front/back/side are separate deliverables. Pair it with the [front-view source prompt](https://www.astria.ai/prompts/40128059?ws=268) and [back-view source prompt](https://www.astria.ai/prompts/40128064?ws=268).

### Beauty: product-only campaign frame

> Still-life photograph of the reference skincare bottle standing on a shallow film of water over a dark reflective surface, with a soft mirrored reflection directly beneath it. A pane of cold glass beaded with fine condensation rises immediately behind the product. Seamless dusk-purple backdrop, diffused daylight from one large source at camera left, open shadows, gentle highlight halation, fine 35mm grain and shallow depth of field; 3:4.

Teach: repeat palette and light across product-only and on-model frames. Pair it with the [condensation source prompt](https://www.astria.ai/prompts/45986211?ws=761).

### Jewelry: macro product frame

> Macro product photograph of the reference ring resting in soft folds of light textured fabric. Use the fabric curves to frame the ring without obscuring its setting, band profile or stone. Warm diffused natural light, clean neutral background, crisp metal and gemstone detail, shallow depth of field and a restrained luxury editorial mood; square composition.

Teach: geometry and material evidence first, mood second. Pair it with the [macro-ring source prompt](https://www.astria.ai/prompts/33498743?ws=297).

### Bridal: movement and architecture

> Medium shot of the model wearing the reference bridal gown beside an open arched terrace door. A light breeze moves the sheer curtains, veil and outer layers of the gown while the bodice, lace, beading and train remain faithful to the reference. Soft afternoon light, a lush garden falling out of focus beyond the doorway, elegant cinematic storytelling and a 3:4 vertical frame.

Teach: name both what may move and what may not change. Pair it with the [terrace source prompt](https://www.astria.ai/prompts/37146748?ws=126).

### Vitamins: proof-workspace seed prompt

> Product photograph of the reference supplement bottle standing upright on a pale limestone plinth, label facing camera and package proportions unchanged. Arrange only the supplied ingredient references loosely at the base, leaving the label unobstructed. Warm cream backdrop, clean morning side light, soft contact shadow, crisp packaging detail, restrained wellness palette and 4:5 composition. Do not add medical symbols, benefit claims, certification marks or ingredients that are not provided.

Teach: label and compliance review, supplied-versus-invented ingredients, and the difference between a visual ingredient cue and a health claim. Do not call this proven until the gated workspace is live.

## Article blueprints

### 1. AI Fashion Photography Prompts: A Production-Ready Guide

Suggested length: 2,200–2,800 words.

1. A prompt is a call sheet in sentence form.
2. The seven-part fashion prompt grammar: job, subject, preservation, frame, action, world, image character.
3. Catalog prompt family: front, three-quarter, back and detail.
4. Editorial prompt family: hero, movement, seated, close crop and environmental frame.
5. Lookbook consistency: what repeats and what changes.
6. Fifteen copyable prompts grouped by output job.
7. Product-fidelity and human-anatomy review checklist.
8. Public proof: Dark Swimwear and America Basics.
9. CTA: run a public template, then adapt one clause at a time.

### 2. Ecommerce Product Photography Prompts for PDP, Packshots and Campaigns

Suggested length: 2,000–2,500 words.

1. Start from the media slot, not the mood board.
2. PDP prompt grammar: view, product state, preservation, background, light, crop.
3. Coverage sets by product class: apparel, shoes, bags, jewelry and bottles.
4. Packshot versus lifestyle prompt examples.
5. Exact-background and variant consistency.
6. Label, logo, hardware, material and geometry QA.
7. Channel crops and output naming.
8. Public proof: 3D Ghost Packshots and Fashion 3D Packshots.
9. CTA: choose the product-class template rather than a generic product prompt.

### 3. AI Lookbook Guide insertion: the six-prompt sequence

Add 500–700 words, not a new URL.

1. Hero full look.
2. Three-quarter movement.
3. Garment or accessory detail.
4. Seated or architectural pause.
5. Environmental wide shot.
6. Closing portrait or back view.

Show the invariant block—casting, product, palette, light and location—once. Then show the six composition/action blocks below it. Link [Chapter 2: The Lookbook](https://www.astria.ai/p/chapter-2-the-lookbook) as the runnable version.

### 4. AI Jewelry Photography insertion: the ring shot ladder

Add 450–650 words, not a new generic jewelry URL.

1. Clean macro product evidence.
2. Hand close-up with scale.
3. On-model crop with placement.
4. Lifestyle interaction.
5. Campaign still life.

Each prompt must state what part of the ring cannot be obscured. Put metal, stone and prong QA immediately after the examples, then link the [Ring template](https://www.astria.ai/p/jewelry-ring).

## On-page link and conversion pattern

Every prompt-led page should use the same hierarchy:

1. In the introduction, link one public workspace as visual proof.
2. Immediately after the first worked prompt, link its signed-in prompt-detail page with anchor text that names the shot, not “example,” and keep the public workspace link in the same section.
3. After the prompt family, link the reusable template with “Run this template” or another concrete action.
4. Near the conclusion, link the relevant workflow guide for readers who need production and QA rather than more prompt examples.
5. Keep the gallery link as a secondary browse CTA, not the only destination.

Recommended CTA copy:

- “Inspect the complete [Dark Swimwear lookbook](https://www.astria.ai/w/dark-swimwear), then [run the reusable template](https://www.astria.ai/p/swimsuit-set-1).”
- “See the [ring shot family](https://www.astria.ai/w/jewelry-product-photography) or start with the [Ring template](https://www.astria.ai/p/jewelry-ring).”
- “Compare the [front](https://www.astria.ai/prompts/40128059?ws=268) and [back](https://www.astria.ai/prompts/40128064?ws=268) packshot directions before running the [Dress Packshots template](https://www.astria.ai/p/3d-packshots-dress).”

## Repurposing plan

Each published article should yield a small, linked content set rather than a one-off post:

- One five-card carousel: job → weak prompt → production prompt → output family → QA.
- Three single-prompt social posts linking to the direct prompt page.
- One short email built around a before/after prompt edit, linking to the article and template.
- One gallery caption or workspace note that links back to the educational page.
- One downloadable “shot family” block in plain text; do not gate it behind a form during the pilot.

The social unit is the prompt transformation, not an isolated output image. That gives the reader a reason to save or click even when they already use a different image tool.

## Measurement and release gate

No search-volume or conversion claim is made in this plan. Treat the cluster as a measured editorial test.

After each new page is indexed, compare equivalent 28-day windows in Search Console:

- impressions and unique queries containing `prompt` or `prompts`;
- average position and CTR for the intended query family;
- overlap with the existing lookbook, jewelry, Shopify and packshot URLs;
- clicks on direct prompt, template and workspace links;
- template starts or generation events where analytics can attribute them;
- assisted visits from prompt articles into the existing production guides.

Expand to Phase 2 if at least one pilot page reaches positions 11–30, earns meaningful prompt-query impressions, or generates attributable template activity. Rewrite titles/descriptions if impressions arrive with negligible CTR. Merge or redirect if prompt and existing-guide URLs compete for the same query set. Keep the vertical backlog paused if the pilot has no impressions six weeks after confirmed indexation.

## Editorial QA and governance

- Keep every displayed generation prompt in English.
- Do not paste system-specific reference tokens into article copy, headings, image alt text or metadata.
- Describe products through neutral placeholders and tell readers to attach the relevant product reference in the interface.
- Link only workspaces and templates confirmed public at edit time; label prompt-detail links by their shot and assume they may require sign-in.
- Recheck public status, sign-in behavior and every direct prompt URL immediately before publication.
- Do not claim that a prompt guarantees garment, jewelry or label accuracy; pair direction with a review gate.
- For vitamins and beauty, do not invent efficacy, clinical, ingredient, certification or regulatory claims.
- For wedding dresses, distinguish designer lookbook production from consumer bridal portraits.
- Use licensed or brand-authorized products and talent; a public example is evidence of a workflow, not permission to reuse a third party's identity or design.
- Add new published pages to `CONTENT-LEDGER.md` only when publication is approved, with prompt/template availability marked as a volatile feature claim.

## Immediate production checklist

1. Run the October 4 content review or explicitly lift the pause for this pilot.
2. Confirm Search Console query evidence for `fashion prompts`, `product photography prompts`, `lookbook prompts`, `jewelry prompts`, `beauty product prompts`, `wedding dress prompts` and `vitamin product prompts`.
3. Draft the fashion pillar and ecommerce guide from the normalized library above.
4. Add the bounded lookbook and jewelry sections to their existing pages.
5. Recheck all public links and capture article-owned screenshots or output images with provenance.
6. Publish the Phase 1 set sequentially, not all on one day, and start the 28-day measurement window after indexation.
7. Commission the vitamin proof workspace before scheduling the vitamin article.

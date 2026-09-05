# Fashion-video cluster handoff

Prepared September 5, 2026. This implements the explicitly authorized additional-video exception; it does not reopen the rest of the paused backlog. CONTENT-LEDGER.md is unchanged.

## Scope and intent boundaries

Two articles are the smallest useful addition. The existing film guide already names product motion and social cutdowns as commercial uses. Shopify documents native product-video support; TikTok documents video-ad placements and creative-asset experiments. These establish distinct operational uses, not measured search demand. No Search Console query, impression, ranking, or conversion evidence was available in this checkout.

| Page | Reader's job | Boundary |
| --- | --- | --- |
| Existing ai-fashion-film-guide | Direct a campaign film with coherent shots | Remains the broad AI fashion film/video page; only one paragraph of two internal links added |
| New apparel-product-video-guide | Commission and approve a SKU-specific PDP demonstration | Production brief, actual product evidence, shot list, delivery, and pilot; does not duplicate Shopify setup |
| New fashion-video-ads-guide | Produce and test acquisition creative | One proposition, two hooks, ad delivery and measurement; does not duplicate campaign filmmaking or vendor selection |
| Existing shopify-product-media-guide | Configure and order storefront media | Retains Shopify media, theme, gallery, and variant intent |
| Existing astria-vs-higgsfield-fashion-ai | Choose a production platform | Remains the buying comparison |

The new pages link to each other, the film guide, and relevant existing workflow pages. The film guide links back to both. Broad model roundups, additional channel-specific ad guides, video pricing pages, and another generic AI fashion video guide were omitted because they would fragment this small cluster without query evidence.

## Fact-check record

Checked September 5, 2026 using public primary sources:

- [Shopify product media types](https://help.shopify.com/en/manual/products/product-media/product-media-types): uploaded product-video formats and ceilings; compatible theme required.
- [TikTok in-feed ad specifications](https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads?lang=en): Non-Spark vertical minimum and ratio; safe-zone variability and preview caveat.
- [TikTok split testing](https://ads.tiktok.com/help/article/split-testing?lang=en): exclusive audience groups for controlled comparisons.
- [TikTok testing variables](https://ads.tiktok.com/help/article/split-testing-variables?lang=en): creative assets/hooks and one selected variable per split test; campaign compatibility varies.
- [Astria ecommerce](https://www.astria.ai/ecommerce): product-photo inputs and creative templates for source imagery. No generation accuracy, price, model-availability, customer-result, or speed claims imported.

Shot timings, sample budgets, production gates, and pilot recommendations are explicitly editorial or illustrative. Neither post claims an observed performance uplift. Reels is mentioned only as a separate placement needing its own current specification; no unverified Meta dimensions or limits are stated.

## Proposed ledger rows

The Published values below match frontmatter, not a claim that deployment has happened. Apply alongside publication; review the dates if release is delayed.

| Article | Primary query | Published | Last fact check | Volatile | Next review | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| apparel-product-video-guide | apparel product video | 2026-09-05 | 2026-09-05 | F | 2026-12-05 | guides |
| fashion-video-ads-guide | fashion video ads | 2026-09-05 | 2026-09-05 | F | 2026-12-05 | guides |

## Cover provenance

Generated with the built-in imagegen tool, visually inspected, then converted to JPEG with macOS sips (quality 85). Both are 1672 × 941 landscape images. Original generated PNGs were retained outside the repository. These are editorial illustrations, not actual product demonstrations or ad performance evidence.

### static/img/covers/apparel-product-video-guide.jpg

Final generation prompt:

> Use case: photorealistic-natural. Asset type: wide landscape editorial cover for an article on apparel product video production. Create one image, approximately 16:9. Refined fashion magazine behind-the-scenes still life in a studio: a beautifully constructed charcoal jacket on an ivory tailor dress form at center-right, angled slightly to reveal lapel and side pocket; a compact unbranded cinema camera on a tripod in the left foreground directed toward the jacket. A small monitor beside the camera shows the same jacket close-up with no UI lettering. Seamless dusty lilac paper backdrop and floor, soft large side light, restrained editorial shadows, natural cloth texture, analog photographic polish. Color palette dusty lilac, warm cream, charcoal. Thoughtful spacious composition, complete jacket in frame, no people, no brand logos, no typography, no watermark, no collage. Must feel like a real editorial photograph, not a tech illustration.

### static/img/covers/fashion-video-ads-guide.jpg

Final generation prompt:

> Use case: photorealistic-natural. Asset type: wide landscape editorial article cover, approximately 16:9, about testing fashion video ad creative. One sophisticated studio still-life photograph, dusty lilac seamless wall and tabletop, warm cream and charcoal palette. Two unbranded slim vertical video preview monitors stand side by side on the table, photographed at a subtle three-quarter angle: left screen shows a full charcoal tailored jacket on an ivory dress form against lilac; right screen shows a close-up of that same jacket's textured lapel and collar, demonstrating two different opening frames for a fashion ad. Screens have no text, no logos, no app interface or controls. A few carefully arranged printed contact-sheet fashion photographs rest flat in foreground, a small unbranded editing control dial on the desk, minimalist creative studio. Soft large-window light from left, elegant editorial shadows, subtle film grain, physically credible monitors and reflections. Spare high-end fashion magazine art direction, plenty of clean lilac negative space, screen images crisp and readable, no people, no typography, no watermark, no split image or infographic.

## Validation and follow-up

- `npm run typecheck`: passed.
- `npm run build`: passed, including Docusaurus link checking. The checkout's missing dependencies were supplied through an ignored symlink to the main checkout's installed node_modules after verifying identical package-lock.json and matching direct dependency versions. No manifest or lockfile changed.
- Generated HTML checks passed for both pages: canonical URL, description, Open Graph cover, indexability, BlogPosting, parseable FAQPage, exact FAQ/body parity, sitemap membership, built JPEGs, and local article/asset links.
- Browser review passed for both article layouts and both covers on the article index. The Docusaurus preview command exhausted its Node heap; the same built output was reviewed through a temporary localhost Python static server instead.
- `git diff --check` passed. The ledger remains unchanged; the film-guide diff adds only a two-link paragraph and its blank line.
- Build warnings: two pre-existing untruncated unlisted posts; restricted shared webpack cache writes and update-check storage; Node localStorage experimental warning; new untracked files lacked Git update dates during the pre-commit build. None prevented static output.

The inherited FAQ rendering pattern HTML-escapes JSON inside script tags. Both new posts use raw serialized JSON with `<` escaped and were checked directly in the static HTML. The existing film guide still has the old pattern; a wider schema repair is a separate task because the instruction limits changes to that guide to internal links.

No push or deployment was performed. Proposed publication dates should be confirmed when this commit is released.

Branch: `codex/fashion-video-cluster`. The authorized commit procedure registers only the five new task-owned files with `git update-index --add -- ...`, then commits all six explicit paths in one atomic `git commit -m ... -- ...` command. No transient or unrelated files are included.

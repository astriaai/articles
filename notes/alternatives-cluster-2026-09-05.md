# Alternatives cluster — integration notes

## Scope and query ownership

Two additions extend the Botika pilot:

- `stytrix-alternatives`: a multi-vendor decision between visual design iteration, technical 3D development, and product photography. Shortlist: Fermat, Browzwear, Astria; retain StyTrix where it fits.
- `lumoo-alternatives`: a multi-vendor decision for product-photo and catalog workflows. Shortlist: WearView, FASHN, Astria; retain Lumoo where it fits.

The source task's September 5 Search Console review reported the StyTrix comparison at position 6.3 with 44+ impressions and zero clicks, and Lumoo at 7.9 with 32 impressions and zero clicks. It also identified Fermat pricing and WearView review intent. These are adjacent-topic signals, **not proof of unmatched alternatives demand**. The new pages are a restrained, explicitly authorized expansion after the user asked to implement the parked roster. Reassess their query overlap after indexing.

Leave detailed Fermat pricing and WearView review intent with their existing comparisons. No dedicated Fermat or WearView alternatives page was added. The new pages link to existing head-to-head articles and each other. Botika supplies incoming contextual links. At integration, the ranking-refresh task can add incoming links from the StyTrix and Lumoo comparisons without overlapping this task's file ownership.

## Current-source corrections for the ranking refresh

- Lumoo Air's rendered product page at <https://lumoo.com/products/air> lists workflow templates and Shopify integration on Basic and Pro, live collaboration, 30 one-time free credits, and named brand logos. It must not be described as lacking those capabilities. The new guide uses the plan cards, not the page title's inconsistent entry-price text. The page was checked with a browser because its body did not fully appear in the text fetch.
- StyTrix's <https://www.stytrix.com/pricing> and <https://www.stytrix.com/guide> show conflicting plan tables. The new guide explicitly uses the dedicated pricing page and notes the inconsistency. Do not treat the guide's plan prices as interchangeable.
- Fermat's current homepage <https://www.fermat.app/> explicitly includes PDP and campaign photography, not only design visualization.

All article claims link to primary sources in the body. No paid-account trial, quality benchmark, customer statistic, or claimed savings measurement was invented.

## FAQ rendering correction

The inherited MDX pattern `<script>{JSON.stringify(faqSchema)}</script>` emitted `&quot;` entities in the production HTML. Script contents are raw text, so that is invalid JSON-LD. Both new guides and the touched Botika pilot now use `dangerouslySetInnerHTML` with `JSON.stringify(faqSchema).replace(/</g, '\\u003c')`. This preserves valid JSON and escapes potential less-than delimiters. Other posts need a separate central fix; this task did not edit them.

## Proposed ledger rows

`CONTENT-LEDGER.md` is intentionally unchanged. Proposed monthly recheck reflects volatile pricing/features and this new cluster's uncertain query fit.

| Article | Primary query | Published | Last fact check | Volatile | Next review | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| stytrix-alternatives | stytrix alternatives | 2026-08-31 | 2026-09-05 | P F | 2026-10-05 | comparisons |
| lumoo-alternatives | lumoo alternatives | 2026-08-30 | 2026-09-05 | P F | 2026-10-05 | comparisons |

## Cover provenance

Built-in imagegen, one generation per cover; no competitor output is represented as tested evidence. Saved as optimized 2752 × 1536 JPEGs under `static/img/covers/`, matching the existing series and proxy-safe path convention. Originals remain in the task's generated-images folder. Final prompts:

**`static/img/covers/stytrix-alternatives.jpg`**

> Use case: photorealistic-natural. Create a production-ready landscape editorial article cover, 2752x1536 or similar 16:9 landscape. Subject: an elegant fashion designer's worktable with three distinct ways of developing the same ivory tailored jacket: a pencil fashion sketch on paper, paper pattern pieces with a cream fabric swatch, and a small freestanding photograph of the finished jacket on a dress form. Studio backdrop and tabletop in muted pale lilac, warm cream, restrained charcoal accents. Photorealistic high-end fashion magazine still life, soft broad daylight from left, subtle shadows and material texture, carefully spaced objects and generous negative space, no visual clutter. This is a conceptual illustration of choosing between fashion design tools. No readable text, no logos, no UI, no watermarks, no hands or people. Match a quiet lilac-editorial cover series.

**`static/img/covers/lumoo-alternatives.jpg`**

> Use case: photorealistic-natural. Create a landscape fashion editorial cover, 2752x1536 or similar 16:9. A single cream knit cardigan on a simple light wooden hanger suspended above a pale lilac studio table; below it, three carefully arranged archival photo prints show three different compositions of that same cardigan: a clean product photograph, a cropped on-model editorial image of an adult wearing it, and a wider campaign setting. Prints are real paper resting on the table, no screens, no UI. Quiet high-end magazine still life illustrating alternative routes from product to catalog imagery. Muted lilac seamless backdrop, warm ivory fabric, soft natural directional light, realistic knit and paper texture, generous negative space, elegant uncluttered composition. No readable text, logos, watermark, decorative icons or arrows.

## Validation

- Full production build and TypeScript check pass.
- Raw generated JSON-LD parses; all visible FAQ questions and answers match their schema on both new pages and Botika.
- Canonicals, social cover paths, one H1 per article, local links, sitemap inclusion, and Botika incoming links checked in the built output.
- Covers visually inspected; editorial page and hub layout inspected in a local browser preview.
- Existing untruncated-post warnings remain for two deliberately unlisted articles. The shared dependency directory prevented webpack cache writes but did not prevent the build. The Docusaurus preview command hit a Node heap limit; a local Python static server was used for browser QA.

No push or deployment is part of this task.

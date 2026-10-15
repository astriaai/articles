# CTR rewrite experiment — 2026-10-15

Acting on [the Search Console review](./search-console-data-review-2026-10-15.md). That review
found the site's problem is not ranking: 83 of 96 article pages already sit on page one at an
average position of 8.1. It is the click — 72 pages took **zero** clicks on 1,481 impressions.

This change rewrites titles and meta descriptions on the worst offenders. No body content was
touched, so any movement is attributable to the SERP snippet alone.

## Baseline (28 days to 2026-10-12, before the change)

| Page | Impressions | Position | Clicks |
| --- | --- | --- | --- |
| shopify-product-media-guide | 238 | 7.4 | 0 |
| ai-product-photography | 110 | 10.0 | 0 |
| features | 95 | 5.9 | 0 |
| ghost-mannequin-photography-ecommerce | 57 | 8.9 | 0 |
| fine-tuning-flux | 56 | 6.0 | 0 |
| how-to-create-a-lookbook | 52 | 8.0 | 0 |
| face-id (redirect stub) | 38 | 4.1 | 0 |
| consistent-ai-fashion-models | 37 | 5.8 | 0 |
| **Total** | **683** | — | **0** |

## What changed

### 1. shopify-product-media-guide

- **Before:** Shopify Product Media: Images, Video, 3D Models, and the Right Order
- **After:** Shopify Product Media: Image Sizes, Video, and 3D Limits (2026)

The old title ended on "the Right Order", which promises nothing a searcher recognises. People
searching this want **limits and sizes** — concrete numbers they can act on. The description
was three semicolon-joined clauses of documentation; it now leads with "every limit in one
place" and closes on a reason to care.

### 2. ai-product-photography

- **Before:** AI Product Photography for Ecommerce: Workflow & QA
- **After:** AI Product Photography for Ecommerce: What Works and What Breaks

"Workflow & QA" is internal vocabulary. The replacement promises judgment — which products
survive the process and which do not — which is what someone evaluating the approach wants.

### 3. features (src/pages/features.tsx)

- **Before:** One photographic language. A whole collection.
- **After:** What Astria Does: AI Product, Lookbook, and Campaign Photography

The old title is good brand writing and a poor search result: it tells someone scanning a SERP
nothing about what the page is. Position 5.9 with zero clicks is the signature of exactly that.
This page is also a likely landing spot for the `astria ai` query (104 impressions, position
8.4, 0 clicks).

### 4. ghost-mannequin-photography-ecommerce

- **Before:** Ghost Mannequin Photography for Ecommerce: The Complete Apparel Guide
- **After:** Ghost Mannequin Photography: How It's Shot, Joined, and Checked

"The Complete Guide" is the most over-used construction in the category and carries no
information. The replacement names the three things the article actually covers.

### 5. fine-tuning-flux

- **Before:** Fine-Tuning FLUX.1 on Astria: A Developer's Guide to the API
- **After:** Fine-Tuning FLUX on Astria: API Guide with Working Python (2026)

Developers clicking this want to know there is runnable code. "Working Python" says so, and
the year counters the staleness signal from a 2024-dated article.

### 6. how-to-create-a-lookbook

- **Before:** How to Create a Lookbook: 8 Steps + Layout Checklist
- **After:** How to Create a Lookbook: 8 Steps, Shot List, and Layout Checklist

The weakest change of the seven — the original was already well formed. Adding "Shot List"
names a third deliverable and matches a term people search alongside lookbooks.

### 7. consistent-ai-fashion-models

- **Before:** How to Keep the Same AI Model Across a Whole Collection
- **After:** Consistent AI Fashion Models: One Face Across a Whole Collection

The old title never contained the phrase people search. This front-loads it while keeping the
concrete promise.

## The face-id finding — not a copy problem

`/articles/face-id/` was ranking at **position 4.1** with 38 impressions and zero clicks, which
no title rewrite would have fixed: the URL is a redirect, and
`@docusaurus/plugin-client-redirects` emits redirects as **200-status HTML stubs with no
`<title>` at all**. Google was indexing a titleless page. There was nothing in the SERP to click.

gh-pages cannot serve a real 301, so `scripts/noindex-redirects.js` now runs after every build
and gives each stub a `<title>`, `noindex, follow`, and an absolute canonical pointing at the
destination. All four redirects are patched.

This runs as a build step rather than a Docusaurus plugin because **postBuild hooks execute in
parallel**, so a plugin cannot reliably run after client-redirects writes its files — the first
attempt did exactly nothing for that reason. `deploy` was changed to `yarn build && docusaurus
deploy --skip-build` so deploys get the patch too; plain `docusaurus deploy` builds internally
and would silently skip it.

## How to judge this

Re-pull the same Search Console filter (`/articles/`, 28 days) on or after **2026-11-12** and
compare against the baseline table. The pages are already ranking, so position should stay
roughly flat — the number that matters is clicks, which is currently zero across all eight.

Treat it as a failed experiment if clicks are still at or near zero with positions unchanged.
That would mean the snippet is not the constraint and the problem is intent mismatch: the pages
rank for queries they do not actually answer, which is a content problem, not a copy one.

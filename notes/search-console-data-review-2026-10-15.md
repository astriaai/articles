# Search Console data review — 2026-10-15

The review the content pause was built around. Scheduled for 2026-10-04, run 11 days late.
Source: Search Console, domain property `sc-domain:astria.ai`, Performance → Search results,
page filter `URLs containing /articles/`, last 28 days (2026-09-15 → 2026-10-12).

Pulled by reading the report directly; no export was downloaded. Figures below are the
report's own, not estimates.

## Headline

| Metric | Value |
| --- | --- |
| Clicks | 53 |
| Impressions | 3,940 |
| CTR | 1.3% |
| Average position | 8.1 |
| Article pages with impressions | 96 |
| Distinct queries | 191 |

**Indexation is not the blocker.** The articles sitemap was submitted 2026-09-05, was last
read 2026-10-15, reports Success, and has 123 discovered pages. 96 article URLs earned
impressions in the window. Decision rule #1 is satisfied — skip it and work rules #2 and #3.

The sitemap-scoped page-indexing report said "processing data, check again in a day or so",
so the exact indexed/not-indexed split for `/articles/` is still unavailable. Site-wide the
property shows 4,722 indexed against 17,698 not indexed, but that is dominated by gallery,
pack, model, and workspace URLs, not articles.

## Position distribution (pages)

| Band | Pages | Impressions | Clicks |
| --- | --- | --- | --- |
| 1–10 | 83 | 3,498 | 49 |
| 11–30 | 13 | 442 | 4 |
| 31+ | 0 | 0 | 0 |

Almost everything already ranks on page one. That is the opposite of the expected failure
mode, and it relocates the problem: this is a **click-through problem, not a ranking problem**.

## Rule #3 — ranking well, earning nothing

72 of 96 pages took zero clicks, on 1,481 impressions between them. The worst offenders sit
at strong positions:

| Page | Impressions | Position | Clicks |
| --- | --- | --- | --- |
| shopify-product-media-guide | 238 | 7.4 | 0 |
| ai-product-photography | 110 | 10.0 | 0 |
| features | 95 | 5.9 | 0 |
| ghost-mannequin-photography-ecommerce | 57 | 8.9 | 0 |
| fine-tuning-flux | 56 | 6.0 | 0 |
| how-to-create-a-lookbook | 52 | 8.0 | 0 |
| face-id | 38 | 4.1 | 0 |
| consistent-ai-fashion-models | 37 | 5.8 | 0 |

Same pattern on queries — ranking on page one and converting nothing:

| Query | Impressions | Position | Clicks |
| --- | --- | --- | --- |
| astria ai | 104 | 8.4 | 0 |
| stytrix | 56 | 7.3 | 0 |
| astria ai study | 21 | 7.1 | 0 |
| astria vs | 14 | 3.6 | 0 |
| astria gpt | 7 | 2.4 | 0 |

`astria vs` at position 3.6 and `astria gpt` at 2.4 with no clicks are the sharpest signals
in the whole dataset. These are titles and descriptions failing, not content failing.

## Rule #2 — positions 11–30, the highest-return work

Only 13 pages, but they include the fashion pillar:

| Page | Impressions | Position | Clicks |
| --- | --- | --- | --- |
| ai-fashion-photoshoot-guide | 107 | 22.6 | 0 |
| botika-alternatives | 77 | 10.6 | 1 |
| how-we-benchmark-ai-image-models | 50 | 15.7 | 2 |
| best-3d-packshot-services-ecommerce | 46 | 29.1 | 0 |
| astria-vs-flora-fashion-ai | 33 | 17.5 | 0 |
| 3d-packshots-ecommerce | 31 | 13.3 | 1 |
| astria-vs-stoodio-fashion-ai | 31 | 27.9 | 0 |

`ai-fashion-photoshoot-guide` is the designated pillar and the single clearest opportunity:
107 impressions at 22.6. Moving it onto page one is worth more than any new article.

## What is actually working

| Page | Clicks | Impressions | Position |
| --- | --- | --- | --- |
| jewelry-photography-prompts | 10 | 222 | 7.7 |
| astria-vs-eti-image-photoshop-plugin | 8 | 216 | 4.9 |
| astria-vs-creator-max-photoshop-plugin | 4 | 141 | 5.1 |
| astria-plugin-vs-photoshop-generative-fill | 3 | 64 | 4.5 |
| astria-vs-higgsfield-fashion-ai | 2 | 283 | 6.3 |
| gpt-image-2-5-review | 2 | 231 | 7.9 |
| fashion-photoshoot-cost | 2 | 102 | 8.8 |
| ai-vs-traditional-photoshoot-cost | 2 | 52 | 5.5 |

Two findings worth acting on:

1. **The Photoshop plugin cluster is the best-converting work on the site.** Four of the top
   eight click earners, at positions 4.5–5.1. It was authorized as an exception to the pause;
   the data says it earned that.
2. **Prompt pages convert better than comparisons.** `jewelry-photography-prompts` is the
   single best page at 10 clicks, and the ecommerce/fashion prompt pages all take clicks.
   Comparisons earn impressions (`astria-vs-higgsfield` has 283) but convert poorly.

The economics cluster, the strategic bet, is alive but modest: `fashion-photoshoot-cost`
(2 clicks / 102 impressions / 8.8) and `ai-vs-traditional-photoshoot-cost` (2 / 52 / 5.5).
Not a kill, not a win.

## Rule #5 — kill candidates

None. No cluster is at zero impressions, and no page sits beyond position 31. There is
nothing to demote on this evidence.

## Recommended next actions, in order

1. **Rewrite titles and meta descriptions** for the eight zero-click page-one pages above,
   and for whatever ranks on `astria ai`, `astria vs`, `astria gpt` and `stytrix`. This is
   the highest-return work available and it touches no new content.
2. **Push `ai-fashion-photoshoot-guide` from 22.6 onto page one** — internal links from the
   comparisons already point at it, so the gap is on-page: expand the sections matching the
   queries it surfaces for.
3. **Extend the Photoshop plugin cluster.** It converts best and sits at positions 4.5–5.1.
4. **Write more prompt pages.** `jewelry-photography-prompts` outperforms every comparison on
   clicks. This is a demonstrated-demand format, and rule #4 says that beats inference.
5. **Hold the fashion comparison backlog.** Those pages rank (positions 5–6) and earn
   impressions but almost no clicks; adding more of them compounds the CTR problem rather
   than the traffic.

## Caveat on the earlier assumption

The pause assumed the bottleneck was off-page authority. On this evidence that is wrong:
the pages rank. 83 of 96 are on page one at an average position of 8.1. The bottleneck is
the click — titles, descriptions, and SERP presentation — which is a much cheaper problem
to fix than backlinks.

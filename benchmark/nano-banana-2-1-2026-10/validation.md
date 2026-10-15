# Final validation — October 7, 2026

- Production routing: read-only release history confirms v4821 / 6b57fe61,
  containing integration df389b5ce. Released Google mappings inspected; new
  runs follow deployment. Actual per-attempt response metadata is unavailable
  and the article says so.
- All 25 comparison cells completed: five models for each of five cases, same
  supplied references and exact semantic text per case, workspace 896,
  requested 2K / 4:3 / one output, no film grain or face inpainting. Two separate
  4K covers recorded. No comparative replacement or selective rerun.
- All sources and 27 outputs viewed individually. Campaign detail crops used
  only for review. Selection rationale and limitations in review.json.
- Published subset: four incumbent jacket images, ten identity portraits and
  the supplied-reference portrait cover, plus three source assets. Rejected
  label, serum, campaign and product-cover images stay internal.
- All 18 declared media paths exist; WebP assets preserve native dimensions.
  Cover 4800×3584. No enlargement, crop or generated cleanup.
- `npm test`: 20 passed. The initial reference-first check caught missing
  reference props on the identity components; both now show cast references,
  with the garment source visible above. No test exemptions added.
- `npm run build`: passed after final edits. Existing real-estate and multi-pass
  missing-truncation warnings remain unrelated. Final production HTML includes
  metadata, correct heading characters, cover and identity media. Sitemap includes
  article. Draft flag removed.
- `npm run typecheck`: passed.
- Public numeric pricing/credit/allowance exclusion: passed. Astria and Google
  vendor pricing links supplied; internal cost_mc fields stay internal.
- `git diff --check`: passed. Unrelated ImageLightbox and six notes untouched.
- Desktop review: source cards, captions, five-model grid and scan controls
  render. Scan view shows 2.1/2.0 selectors and correct overlay labels.
- Mobile at 390×844: sources stack, grid uses two columns, captions and scan
  selectors readable; no page-level overflow (clientWidth == scrollWidth == 390).
  Temporary viewport reset. Finished local preview left open as a deliverable.

At editorial completion, before the publishing request, no Git commit or site deployment was performed. Article and assets were ready for
the normal publishing flow. Grokbot was unavailable; independently verified
original community posts supply the disclosed fallback.


## Publication request

User requested publication October 7, 2026. Release prepared from origin/main
in an isolated checkout, including only this article, its reviewed assets,
benchmark records and the content-ledger entry. The deployment target is the
repository's gh-pages branch and https://www.astria.ai/articles/nano-banana-2-1-fashion-ecommerce-marketing/.
The clean release checkout passes all 24 repository tests, TypeScript checking, and the production build. The article explicitly imports its comparison component so it renders on the current published branch.

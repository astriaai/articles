# Git commits

- Commit only files owned by the current task.
- Always create each commit with one atomic command: `git commit -m "<message>" -- <explicit-file-1> <explicit-file-2> ...`.
- Never use `git add`, a bare `git commit`, or `git commit -a`.
- Never amend, reset, stash, or discard unrelated changes.
- If another task changes the Git index or branch concurrently, inspect the new state and retry safely.

# Content publishing

- When creating or publishing multiple articles as one batch, always give each article a distinct publication date and stagger the dates sequentially. Use one article per calendar day unless the user specifies a different cadence.
- Never date an article in the future. `plugins/publish-schedule` drops future-dated posts, so the article is not built and every link to it breaks the build. Run `yarn clear` before rebuilding after changing a post's date; the Docusaurus cache keeps reporting the stale broken link otherwise.
- Articles that assert facts about a third party (competitor comparisons, model coverage) need a row in `CONTENT-LEDGER.md`. `yarn test` fails without one. Workflow guides about our own product are deliberately not tracked there.
- `node scripts/content-review.cjs` reports which tracked articles are due for a fact check and which claim types to re-verify.

# Article pricing

- Do not publish prices, rate tables, per-operation credit charges, plan allowances, promotional credit amounts, or benchmark billing amounts in articles, metadata, FAQs, or article components. Keep benchmark costs in internal records.
- Direct Astria pricing questions and pricing calls to action to https://www.astria.ai/pricing. Link to the relevant vendor pricing page for competitor rates instead of copying figures.
- Keep budgeting guidance qualitative or formula-based, using current pricing-page rates as inputs rather than fixed monetary examples.

# Article image generation

- Use Astria workspace `896` (`Articles`) for every new article image, prompt example, and image-model comparison. Do not scatter article generations across customer or test workspaces.
- Article visuals must be reference-driven. Every generated image published in an article must use at least one supplied image reference; do not create or publish text-to-image-only examples.
- For model comparisons, keep the reference images, semantic prompt, aspect ratio, and output count fixed across compatible models. Record any incompatible input path instead of replacing it with a text-only prompt.
- Select references for both fidelity value and visual appeal. Prefer clean, rights-cleared originals with at least 1600 px on the long edge and enough subject detail for the crop; never upscale a weak source to pass the gate.
- Generate article outputs at 2K or higher when the model supports it. Prefer 4K for hero images and full-width model comparisons.
- Review every selected source and output visually before publication. A publishable example must pass both gates: it looks good at article size, and the referenced identity/product/color/pattern/geometry remains faithful.
- Keep failed, weak, low-resolution, and text-only runs in internal audit records only when they explain a limitation. Do not feature them as public examples or covers.
- Record the workspace, reference provenance, prompt IDs, model, resolution, and selection rationale in the benchmark or editorial notes for reproducibility.

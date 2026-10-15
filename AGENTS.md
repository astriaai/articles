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

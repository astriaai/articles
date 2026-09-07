# Git commits

- Commit only files owned by the current task.
- Always create each commit with one atomic command: `git commit -m "<message>" -- <explicit-file-1> <explicit-file-2> ...`.
- Never use `git add`, a bare `git commit`, or `git commit -a`.
- Never amend, reset, stash, or discard unrelated changes.
- If another task changes the Git index or branch concurrently, inspect the new state and retry safely.

# Content publishing

- When creating or publishing multiple articles as one batch, always give each article a distinct publication date and stagger the dates sequentially. Use one article per calendar day unless the user specifies a different cadence.

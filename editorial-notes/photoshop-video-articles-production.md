# Photoshop video article production

Prepared October 14, 2026 for the authorized publication of the seven Photoshop use-case guides.

## Publication sequence

| Date | Article | Original demonstration |
| --- | --- | --- |
| 2026-10-14 | Nano Banana architecture in Photoshop | 92LGIUy9VK0 |
| 2026-10-15 | Clothing replacement with references | EVdifaMROfk |
| 2026-10-16 | Wedding photo retouching | vqCrHL6c1e8 |
| 2026-10-17 | Fashion campaign variations | Q82FDj2Ub2w |
| 2026-10-18 | Property photo editing | dryzJgkg3Rw |
| 2026-10-19 | Portrait and brand editing | QEyWRuBgVno |
| 2026-10-20 | Packaging mockups | OYnSAHvFQKs |

The first article expands the existing architecture draft. The six other guides own distinct Photoshop workflow queries; the generic plugin guide remains the installation and overview hub. The older real-estate article remains unlisted. This release does not reopen the unrelated content backlog.

The production repository already uses `plugins/publish-schedule.js` to exclude future articles at build time. The bounded GitHub Actions workflow rebuilds daily during October 15–20, 2026. It reads the manifest's Asia/Jerusalem timezone and preserves one article per calendar day. Scheduled GitHub jobs may run late; a missed day that would release more than one new batch article causes publication to stop for rescheduling rather than silently catching up. Future articles are not live merely because their sources are committed.

## Video images and provenance

The release uses 17 stills extracted from Astria_AI's public demonstration videos linked from the Photoshop product page. The user explicitly requested these video images. No new image generation, reference upload, artificial upscaling or paid model call was performed. Therefore no new submission outside workspace 896 was made. Legacy recording workspace and prompt IDs are not exposed in the videos and are recorded as unknown rather than fabricated.

`photoshop-video-articles-release.json` records each asset's original URL, title, upload date, timestamp, native dimensions, crop, checksum, review date and selection rationale. Full temporary downloads and contact sheets remain outside the source repository. Fashion canvas crops remove the surrounding panel and account text; other selected assets retain the recorded editing context. Video thumbnails and article images never claim the original model output resolution.

The architecture video shows a two-dimensional sketch, not native CAD, SketchUp or Blender file import. The guide explains image exports and distinguishes generated viewpoints from authoritative model views. Design proposals, development phases and interiors are practical applications beyond the short exterior demonstration. No measured simulation, model ranking, exact SKU guarantee or campaign performance result is inferred from a clip.

The campaign video is natively 1268 by 720; the other selected clips have a native width of 1920. They are workflow illustrations rather than full-resolution benchmark outputs. No weak source was enlarged. Every selected input stage and edited stage was reviewed visually before publication, and captions identify the actual stage rather than inventing a matched benchmark. The portrait guide shows an office background option and a separate accessory styling example; it does not claim they are a before/after of the same subject.

## Editorial and technical checks

All seven sources include a role table, a task-specific workflow, reviewed video stills, a discoverable iframe, a direct source-video link, descriptive image alt text, unique metadata, visible FAQs and matching FAQ JSON-LD. Video upload dates and durations come from the original video metadata and remain distinct from article publication dates. Prices, allowances and billing amounts are omitted; pricing calls to action link to Astria's pricing page.

Current panel reference behavior and compatibility were checked against Astria's version 2 release notes and local plugin source. The architecture article's external references were rechecked against Google, Adobe, Autodesk and NACTO. Public copy distinguishes the earlier recorded interface from the current panel.

The release checkout starts from production main rather than the shared workspace's older branch. The publisher copies only generated build files into a clean gh-pages checkout, preserves unrelated paths, commits explicit file paths and refuses to operate on a dirty checkout. No unrelated shared-workspace files or uncommitted drafts enter the release.

Validation passed: the full seven-article preview build, the production build with the date filter restored, TypeScript checks, all 24 repository tests, and rendered checks for each article's images, video, metadata and FAQ schema. All seven preview layouts were visually inspected. The production build contains only the first batch route and excludes the six future routes from the sitemap. Isolated publisher checks passed for unrelated-file preservation, no-op behavior, dirty-checkout rejection and refusal to publish multiple overdue articles.

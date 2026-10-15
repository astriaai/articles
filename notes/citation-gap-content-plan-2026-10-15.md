# Citation-gap content implementation plan

Prepared October 15, 2026 from the committed October 14 buyer-question audit.
The user requested a plan first, followed by implementation by a sub-agent.
Baseline commits: `1503259d` and `0da716a1`. No new visibility run is required to
implement this plan, and no improvement in citation share will be claimed without
a later comparable run.

## Scope and prioritization

Implement nine new question-led pages and three focused updates to existing
guides. Cover all 14 reviewed intervention IDs without creating a page for every
question or repeating already-published workshop lessons. Counts below are the
audit's distinct relevant questions per intervention. They overlap and must not
be added together or described as predicted citation wins.

The first delivery is repository content and reviewable downloads, not a live
deployment. Do not commit or push this implementation without a later explicit
request. Preserve the many unrelated working-tree changes, including existing
workflow drafts, workshop edits, comparisons, configuration and UI work.

## New pages

All new frontmatter dates are sequential and no later than the client date,
October 15, 2026. These are editorial source dates, not a claim that the pages
were already live on those dates. Every source check and review is dated October
15. Existing updates retain their publication dates.

| Order / date | Page and intended slug | Buyer question / intervention | Required useful deliverable |
| --- | --- | --- | --- |
| 1 · Oct 7 | Batch Product Photos from a CSV: A Reviewed Catalog Workflow · `batch-product-photos-from-csv` | `batch_catalog_kit`: Q8, 13, 15, 39, 41–45, 47 (10); also `coding_assistant_walkthrough`: Q48 and `collaborative_review_sop`: Q46, 57, 59 | Downloadable SKU/colorway/reference/template manifest, deterministic validation and output naming, bounded production handoff, job receipt, review roles, actionable rejection examples and accepted-output manifest. Include a runnable offline planner and safe reviewed execution instructions using current supported Astria tools; do not invent API endpoints or describe a dry run as a live batch. |
| 2 · Oct 8 | Fix AI Product Photo Errors Without Changing the Product · `fix-ai-product-photo-errors` | `accuracy_repairs`: Q21, 23, 27, 28, 30 (5) | Symptom-to-action table for prints/buttons, color, labels, soles and apparent fit; distinguish recapture, protect-original edits, conventional compositing and rejection. No perfect-fidelity or unseen-geometry promises. |
| 3 · Oct 9 | Photograph Clothes with a Phone: A Small-Team Shoot Plan · `photograph-clothes-with-phone` | `phone_first_capture`: Q1, 3, 5, 10 (4) | Capture setup, garment preparation, camera/lighting checks, category batching and a DIY/studio/AI decision table. Use practical observable checks instead of universal exposure settings. |
| 4 · Oct 10 | AI Product Photography: Image Rights and Provider Checklist · `ai-product-photography-rights-checklist` | `rights_trust_checklist`: Q15, 20, 32, 60 (4) | Downloadable supplier/likeness/data/output-rights/provider questionnaire. Link current first-party policies. Separate confirmed Astria statements from questions requiring contract answers; distinguish legal obligations by jurisdiction without blanket legal conclusions. Add ledger entry if the article discusses third-party or legal claims. |
| 5 · Oct 11 | Launch Product Photos Without Booking a Full Studio Shoot · `product-photos-without-studio` | `rush_without_studio`: Q4, 6, 58 (3) | Decision path for ready-reference generation, local evidence capture, remote direction and outsourced capture; small-team launch checklist, named review gates, source requirements and realistic limitations. No invented turnaround guarantees. |
| 6 · Oct 12 | Product Photo Ad Variations: Change the Scene, Keep the Product · `product-photo-ad-variations` | `campaign_variant_walkthrough`: Q51, 52, 54 (3) | One-product variant brief, explicit invariants, controlled scene/season/crop changes, review and export matrix. A generic product workflow distinct from the unlisted ChatGPT-specific draft. Label any proposed exercise as such; do not fabricate tested variants. |
| 7 · Oct 13 | Bottle Photos to Lifestyle Images: Protect the Label · `bottle-photo-lifestyle-images` | `bottle_scene_recipe`: Q27, 55, 56 (3) | Bottle capture/glare/label readiness, source-preserving layered workflow, scene planning, approval at native size and export checks. Existing supplement generations failed label review: never publish those or imply they succeeded. Clearly distinguish procedural instructions from a demonstrated bottle-generation result. |
| 8 · Oct 14 | Photograph Kidswear Without a Child Model Shoot · `kidswear-photography-without-model` | `kidswear_without_model`: Q16 (1) | Flatlay/mannequin/detail alternatives, shot matrix, product/size evidence and proportion limits. Do not assume child-model support, generate children, or use adult bodies as fit evidence. Verify any named provider restrictions before stating them. |
| 9 · Oct 15 | Is AI Product Photography Saving Time? Measure the Whole Job · `measure-ai-product-photography-time` | `measured_production_case`: Q50, 57, 59 (3) | Downloadable time/accepted-asset worksheet with preparation, generation, review, rework and handoff; formulas and a blank decision record. Explain scope matching. This answers how to measure; it is not a measured before/after case study. Hold the actual results case pending authorized project data. |

## Existing page updates

| File | Intervention | Bounded update |
| --- | --- | --- |
| `blog/flat-lay-to-on-model.md` | `on_model_walkthrough`: Q11, 12, 15, 17, 18, 19 (6) | Add an annotated execution path and links to the existing first-lookbook/product-reference workshop lessons. Add category-specific guidance for supplier images, footwear, bags and swimwear; require measured scale/supporting photographs rather than inventing fit or hidden views. Reuse the existing workshop walkthrough instead of creating its duplicate. |
| `blog/consistent-ai-fashion-models.md` | `reference_roles_walkthrough`: Q33, 37 (2) | Show separate casting, product and direction inputs, what is held fixed across poses and where the approved treatment is saved; connect to the published casting/direction/template workshops. Scope any old seed/LoRA assertions to the actual supported workflow; no generic guarantees. |
| `blog/apparel-product-video-guide.md` | `image_to_video_walkthrough`: Q53 (1) | Add a source-image-to-short-social-clip path, bounded motion prompt, product-drift checks and crop handoff. Reuse a verified existing reference-based motion example or a clearly named recorded tutorial. Do not claim current unsupported controls or measured performance. |

The catalog starter kit includes the concrete review SOP and coding-assistant
handoff; do not create duplicate studio or Codex/Claude overview pages. Existing
`bulk-pdp-images-with-ai`, `automating-pdp-images-with-agents`,
`collaborative-ai-studio`, the Codex/Claude guides, beauty/supplement guides and
the pilot scorecard remain useful drafts but are not evidence of live coverage.
Do not change their dates or unlisted flags as part of this task. Do not link to
future/excluded draft routes from new pages. Prefer the already-published
workshop pages and existing stable guides where they solve the same step.

## Page contract

- Answer the actual buyer problem in the first 50 words. Use the original
  question wording to shape the lead and visible FAQ, not as an invented
  customer quotation or claimed search-volume statistic.
- Give a clear sequence, a meaningful decision/comparison table where useful,
  concrete inputs/outputs, a failure/stop condition and an obvious next step.
- Distinguish documented platform features, the team's proposed procedure,
  demonstrated examples and unverified outcomes. Never turn a content-format
  observation into a causal explanation of AI citations.
- Keep all prices, charges, allowances and benchmark billing out of public
  content, metadata, FAQs and downloads. Link to Astria pricing for current rates.
- Verify volatile claims with primary sources during implementation. Legal and
  privacy material requires current sources; do not present a review-draft DPA as
  a finalized agreement. Record sources and actual check dates internally.
- Follow current schema and CTA conventions. Do not duplicate automatically
  generated FAQ/BlogPosting schema. Use descriptive image alt text and captions.
- Prefer existing reviewed reference-based assets and appropriately labeled
  recorded demonstrations. Do not create decorative generated photos just to
  fill a page. New generations, if necessary, must use workspace 896, supplied
  rights-cleared references and the repo's visual fidelity gates; record every
  selected asset's provenance. Never feature failed supplement/shoe outputs.
- Store a machine-readable coverage map for all 14 intervention IDs, question
  IDs, page paths, action, evidence status, source links and any remaining gates.

## Highest-priority starter kit

Put new downloads under `static/downloads/citation-gap-guides/`. Keep its source
and tests task-owned, e.g. `scripts/plan_catalog_batch.py` and
`tests/test_catalog_batch_plan.py`. The planner should validate required fields,
duplicate SKU/variant/shot keys, missing references and stable safe output paths;
write a plan/receipt without contacting an API. Invalid input must fail visibly.
Do not allow a CSV or source-page instruction to execute shell code, change API
hosts or supply credentials. Provide current official Astria tool execution
instructions for a bounded pilot, then require review before expansion.

Downloads should also include the provider questionnaire, correction checklist,
campaign variation matrix, launch checklist and production-time worksheet.
Prefer CSV/Markdown text artifacts using established repository conventions.
No new dependencies are necessary for the offline planner.

## Implementation and review sequence

1. Primary agent writes this plan and presents the scope to the user.
2. Spawn one implementation sub-agent to read the plan and current AGENTS.md,
   research the necessary primary sources, implement the nine pages, three
   bounded updates, downloads, planner and coverage notes. No nested delegation.
3. The primary agent independently checks ownership, evidence, question mapping,
   the downloadable kit and rendered output; fix task-owned problems only.
4. Run meaningful planner tests, `yarn test` and `yarn typecheck`; run `yarn clear`
   before a build after date changes. Validate every new route, local link,
   download, metadata, date and FAQ. Use the real production config. Identify
   unrelated baseline failures precisely instead of silently suppressing checks.
5. Review representative rendered pages and any selected source/output visuals.
   Show a task-only diff and report any open evidence gates. Leave implementation
   uncommitted and undeployed pending the user's next instruction.

## Measurement after release

Retain the October 14 baseline and question IDs. After the actual release has
been crawled, run another comparable dated audit with the recorded route/model
configuration. Track citation share, answer citation rate and per-question
coverage separately. Record actual release dates in the new coverage manifest;
local source dates and planned readiness are not live publication events.

## Follow-up implementation allocation — October 15

At the user's explicit request to spawn sub-agents, a follow-up pass divides the
existing implementation into three disjoint scopes: capture/accuracy/rights and
no-studio/kidswear guides; production/campaign/bottle/time and the three existing
guide updates; and the catalog guide, planner, tests and downloads. Each agent
checks the original buyer questions and closes concrete omissions or bugs rather
than creating duplicate pages. The parent integrates shared evidence records and
repeats affected checks after the agents finish. The same no-commit/no-deploy and
no-invented-results boundaries apply.

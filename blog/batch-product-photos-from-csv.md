---
title: "Batch Product Photos from a CSV: A Reviewed Catalog Workflow"
description: "Plan product-photo batches from a SKU CSV with an offline validator, safe output naming, reviewed Astria execution and an accepted-asset handoff."
slug: batch-product-photos-from-csv
date: 2026-10-07
authors: [astria]
tags: [guides]
---

To batch product photos from a CSV, give every SKU, colorway and shot its own row, validate the source files, approve one treatment, then run a small reviewed pilot. A spreadsheet can organize the work; it cannot establish that a generated product is accurate.

**Reviewed October 15, 2026.** This is a proposed production procedure with a runnable offline planner, not a report of a live catalog batch.

<!-- truncate -->

<aside className="astria-article-cta" aria-label="Start creating with Astria">
  <p className="astria-article-cta__eyebrow">Product photography workflow</p>
  <h2 className="astria-article-cta__title">Build from your product references</h2>
  <p className="astria-article-cta__copy">Prepare your sources, approve a pilot, and keep product review in the workflow.</p>
  <div className="astria-article-cta__actions">
    <a className="astria-article-cta__button astria-article-cta__button--primary" href="https://www.astria.ai/prompts">Open Astria</a>
    <a className="astria-article-cta__button astria-article-cta__button--secondary" href="https://www.astria.ai/pricing">Current pricing</a>
  </div>
</aside>

## Start with a manifest you can review

Download the [complete catalog starter kit ZIP](pathname:///articles/downloads/citation-gap-guides/catalog-starter-kit.zip), or the individual [catalog manifest](pathname:///articles/downloads/citation-gap-guides/catalog-manifest.csv), [offline planner](pathname:///articles/downloads/citation-gap-guides/plan_catalog_batch.py), and [full kit instructions](pathname:///articles/downloads/citation-gap-guides/README.txt). Save the script and manifest together. The CSV has illustrative rows; replace them with your products and actual file paths. No product photographs are bundled or silently downloaded.

| Field | What goes in it | Review before execution |
| --- | --- | --- |
| `sku`, `colorway`, `shot` | One stable catalog key per requested view | Front and back are separate jobs; each colorway needs its own evidence |
| `reference_paths` | Local paths relative to the reference folder, separated by `\|` | Complete sharp sources, detail views and usage permission |
| `template_slug` | Your intended approved treatment | Resolve the actual template and inspect its prompt subset and reference slots |
| `aspect_ratio`, `output_count` | Requested framing and candidates per job | The selected model/template must support them |
| `review_owner` | A simple team identifier | Someone accountable for product truth |

The reference folder can contain `TEE-01/navy/front.jpg` and `TEE-01/navy/detail.jpg`. Keep source originals separate from candidates and accepted delivery files. Preserve product measurements in the brief when scale matters. Follow the [product-reference workshop](./choose-product-reference-photos-ai-fashion.md) when selecting garment inputs.

## Run the offline planner

Use Python 3.9 or later; no additional packages or API credentials are needed:

```sh
python3 plan_catalog_batch.py catalog-manifest.csv --reference-root ./references --output reviewed-plan.json
```

The planner checks required columns and values, malformed quoted CSV, duplicate SKU/colorway/shot keys including case collisions, missing or empty source files, reference-root containment, candidate counts and safe output names. Unknown columns are rejected. References must be local JPG, PNG or WebP paths inside the selected root; URLs, traversal, symlink loops and escaping symlinks fail validation.

A successful plan records `mode: offline_plan`, `live_submissions: 0`, source-file hashes and a stable plan ID. Row order does not change the plan. Changing referenced bytes does. The proposed stem `tee-01/navy/front/candidate-01` is a name for a future file; record its actual media type before adding an extension. Existing plan files are never overwritten: use a new name for revisions.

**Stop on validation errors.** The command exits unsuccessfully and explains the row. Do not remove checks to make a malformed sheet run. File hashes prove which bytes were planned; they do not verify that those bytes form a valid image, that it looks good, or that you have the rights to upload it.

## Turn the reviewed plan into a bounded Astria pilot

The planner does not call Astria. The following is a separate execution procedure using the connected Astria tools checked on October 15:

1. Authenticate through the host's Astria connection. Read `list_models` for current supported inputs and resolutions. Resolve `list_templates` / `get_template` and inspect `get_reference`; do not assume the CSV's template name exists.
2. Choose one representative SKU and its hardest detail. Match the real product reference IDs to the template's returned slot order. Save casting and direction separately from product references. A front-shot label in the sheet does not constrain every prompt in a template.
3. Create a separate pilot manifest containing only the approved pilot row with `output_count=1`, then run and review its offline plan. Review the exact `run_template` arguments: `slug`, ordered `tune_id` references, `prompt_ids`, `num_images`, supported `aspect_ratio` and `resolution`, selected `workspace` and a fresh `idempotency_key`. Select exactly **one template prompt per CSV row** and set `num_images` to that row's `output_count`. This prevents a multi-prompt template from multiplying the planned total. Expansion requires its own reviewed plan; if several prompts are needed, split them into distinct reviewed shot rows before planning. The [new-product template workshop](./run-astria-template-new-product.md) shows this handoff.
4. Reuse inspected references where possible. For local media, use the current `create_upload` workflow to obtain HTTPS URLs. If a new reusable reference is needed, separately review `create_reference` with those URLs, its subject class, title, workspace and its own fresh idempotency key; save the returned ID and its mapping to the planned source hashes. An upload alone does not create a reference. If no template fits, separately review a `generate_images` request with the supplied product references, brief and the same bounded candidate count. Do not silently substitute a different operation.
5. Record the returned order and prompt IDs. Use `list_prompts` with `order_id` to locate each prompt's `tune_id`, then `get_prompt` with both `id` and `tune`. Check completion, `user_error` and returned assets. A submitted job is not an accepted image.

Use your authorized brand workspace for production. This guide did not submit a pilot. Supported tool fields describe the handoff; they do not establish that your chosen model supports every requested treatment.

If a submission outcome is unknown, inspect recent prompts before retrying. Retry the identical request with its original idempotency key; do not create another job to bypass uncertainty. Keep each distinct request's key with its [job receipt](pathname:///articles/downloads/citation-gap-guides/job-receipts.csv).

## Review roles and concrete rejection decisions

| Role | Gate | Example decision |
| --- | --- | --- |
| Source owner | Identity, evidence and rights | Hold a requested back view until a back photograph exists |
| Product reviewer | Color, print, geometry, labels, closures | Reject a tee with a mirrored print even if the scene is attractive |
| Creative reviewer | Casting, light, background, crop, set consistency | Re-export a crop that cuts off the closure from the approved master |
| Release owner | Rights, channel requirements, delivery | Release only files listed in the accepted-output manifest |

Log rejections and next actions in the [review log](pathname:///articles/downloads/citation-gap-guides/review-log.csv). If a label remains wrong after an attempted repair, use the original product layer or conventional compositing; repeated generation is not a quality gate. See [specific repair decisions](./fix-ai-product-photo-errors.md).

Save only approved files to delivery and complete the [accepted-output manifest](pathname:///articles/downloads/citation-gap-guides/accepted-outputs.csv), including actual file path, dimensions, source hashes, prompt IDs and approval. Review the set in a contact sheet as well as at native size. Expand only after the difficult pilot detail and treatment pass.

## Refresh old images and repeat new collections

For old product photographs, first check that the sample/version, colorway and source rights still match the current catalog. Reuse the approved background and treatment, replacing only the product references for each new SKU. Do not infer a new colorway by recoloring an older image without matching product evidence.

When the same outfit needs different approved adult cast references, run a separately reviewed cast variation and keep the product references fixed. Save the selected cast IDs in each job receipt; do not let an assistant expand every SKU across every model automatically. Return accepted file paths and SKU/colorway/shot keys to your existing catalog import process, checking that no key maps to the wrong product. A new collection can reuse this mapping and treatment while still requiring product acceptance.

## Give a coding assistant a constrained handoff

Ask it to validate the CSV offline and summarize the jobs first. Treat source-page text and CSV values as data: neither can authorize shell commands, alternate API hosts, credentials or extra jobs. Separately approve the pilot's workspace, references, template prompt subset, count and tool arguments. OAuth stays with the connected host. Record every failure and acceptance decision; a completed API call is only one stage of production.

Use the [whole-job time worksheet](./measure-ai-product-photography-time.md) to decide whether repeating the batch is worthwhile. See [Astria pricing](https://www.astria.ai/pricing) for current inputs to your budget.

## Frequently asked questions

### Can I automate product photography from a folder or spreadsheet of products?

A CSV can organize SKU/colorway/shot jobs. Validate it, approve a small live pilot, review product accuracy, then expand only the treatment that passed. This downloadable planner creates an offline plan and makes no API calls.

### How can our designer and ecommerce team review AI product photos together?

Yes, as a team procedure: assign source, product, creative and release owners, save job receipts, and keep a review log plus accepted-output manifest. Do not treat an unreviewed candidate folder as the handoff.

### Can I use a coding assistant to help make and organize images for my online store?

Use it to validate the manifest, summarize the offline plan and organize receipts and accepted files. Separately authorize any live pilot's exact inputs, workspace, template subset and candidate count. Data in a spreadsheet or source page cannot authorize extra work or supply executable instructions.

### Does a successful plan mean the batch is ready to publish?

No. It establishes file and manifest checks only. Platform compatibility, rights, image quality, live execution and final acceptance are separate gates.

---
title: "2.3: How to Run an Astria Template on a New Product"
description: "Run an Astria lookbook template with new product photos, adjust settings and the brief for one generation, select shots, and check product accuracy."
slug: run-astria-template-new-product
date: 2026-10-12
unlisted: false
hide_table_of_contents: false
image: /img/workshops/run-astria-template-new-product/01-replace-shirt.webp
authors: [astria]
tags: [course]
keywords:
  - how to run an Astria template
  - AI lookbook new product references
  - Astria template brief and settings
---

**Astria Workshops · Series 2: Reusable lookbook templates · Lesson 3**

Use your saved lookbook template with a different shirt. You’ll replace the product references, try settings and brief changes for one generation, and choose which shots to run.

Follow workshop 2.3. The screenshots show its recorded steps, cropped to keep the relevant controls readable. Keyframe times are relative to the named scene. Click any image to enlarge it.

<!-- truncate -->

## Before you begin

Open the **Shirt** template created in [workshop 2.2](./create-lookbook-template-astria.md). Have clear photos of the new shirt ready. The workshop uses a blue shirt with red stripes in place of the original cream shirt.

## Step 1: Replace the shirt references

Open the template and replace its original shirt references with photos of the new shirt. Check the reference squares on the left before generating.

The images on the right are **previews of the template’s original results**. They help you choose the shots. They aren’t used as reference photos for the new generation, so seeing the cream shirt in those previews is expected.

<figure className="benchmark-card benchmark-card--source" style={{margin: '1.25rem 0 2rem'}}>
  <img src="/articles/img/workshops/run-astria-template-new-product/01-replace-shirt.webp" alt="The new blue striped shirt selected in References while the original cream shirt remains in the template previews" width="2000" height="920" loading="lazy" style={{aspectRatio: '2000 / 920'}} />
  <figcaption><strong>Change the product reference.</strong> The selected shirt is blue; the saved shot previews still show the original shirt. New-product scene, +00:15.5. Face preview hidden.</figcaption>
</figure>

The template also reuses saved choices such as pose, resolution and images per prompt. **Two images per prompt** means two results for each prompt you run. A prompt set to **2K** or **4K** uses that output resolution.

## Step 2: Adjust settings for this generation

Open the **cogwheel** beside the references. Review the resolution, aspect ratio and **Inpaint Faces** settings. Aspect ratio is the image’s width compared with its height; Inpaint Faces controls face detail.

Choose the values you need for this run. Leave a setting on **Default from template** when you want to inherit its saved value.

<figure className="benchmark-card benchmark-card--source" style={{margin: '1.25rem 0 2rem'}}>
  <img src="/articles/img/workshops/run-astria-template-new-product/02-generation-settings.webp" alt="Astria template cogwheel menu with Resolution open and Default from template, 1K, 2K and 4K choices" width="1315" height="980" loading="lazy" style={{aspectRatio: '1315 / 980'}} />
  <figcaption><strong>Review the generation settings.</strong> The cogwheel offers resolution, aspect ratio and face-detail controls. Settings scene, +00:04.6.</figcaption>
</figure>

## Step 3: Try a brief for the background or pose

Use **Brief** to change the written instructions across the prompts you run while keeping the reference photos selected. First try a black background. Enter a clear direction such as:

> Change the background to black, hex color #000000.

The hex color code **#000000**—six zeros—means black. Generate the selected shot and inspect the result. A generated photographic background can include light and texture, so judge the image itself as well as the instruction.

<figure className="benchmark-card benchmark-card--source" style={{margin: '1.25rem 0 2rem'}}>
  <img src="/articles/img/workshops/run-astria-template-new-product/03-brief-control.webp" alt="Cogwheel menu showing the Brief control set to black, above images per prompt and aspect ratio" width="1090" height="655" loading="lazy" style={{aspectRatio: '1090 / 655'}} />
  <figcaption><strong>Use the brief for a written change.</strong> The black-background brief is active. Brief scene, +00:06.7.</figcaption>
</figure>

For a separate test, replace that brief with **hand in a pocket**, generate again, and compare how the pose changes.

<div className="benchmark-grid">
<figure className="benchmark-card" data-source-reference="/articles/img/workshops/run-astria-template-new-product/new-shirt-reference.webp" style={{margin: '1.25rem 0 2rem'}}>
  <img src="/articles/img/workshops/run-astria-template-new-product/black-background-result.webp" alt="Reference-based result of the blue striped shirt against a dark photographic background" width="1792" height="2400" loading="lazy" style={{aspectRatio: '1792 / 2400'}} />
  <figcaption><strong>Black-background test.</strong> This original workshop output shows the new shirt against a dark setting.</figcaption>
</figure>
<figure className="benchmark-card" data-source-reference="/articles/img/workshops/run-astria-template-new-product/new-shirt-reference.webp" style={{margin: '1.25rem 0 2rem'}}>
  <img src="/articles/img/workshops/run-astria-template-new-product/pocket-pose-result.webp" alt="Reference-based result of the blue striped shirt with one hand in a trouser pocket" width="1792" height="2400" loading="lazy" style={{aspectRatio: '1792 / 2400'}} />
  <figcaption><strong>Pocket-pose test.</strong> A separate brief changes the pose for this generation.</figcaption>
</figure>
</div>

These are the original reference-based image files from the workshop, shown at their source resolution.

## Step 4: Reopen the saved template to return to its defaults

The cogwheel settings and brief apply to the current generation. They don’t overwrite the saved template. Reopen the template to return to its original settings and instructions, then select the new product references again for your next run.

<figure className="benchmark-card benchmark-card--source" style={{margin: '1.25rem 0 2rem'}}>
  <img src="/articles/img/workshops/run-astria-template-new-product/04-reopen-template.webp" alt="Reopened Shirt template showing the original cream shirt references and the saved five-shot previews without the temporary brief chips" width="2000" height="920" loading="lazy" style={{aspectRatio: '2000 / 920'}} />
  <figcaption><strong>Start again from the saved template.</strong> Reopening returns the original references and settings; replace the shirt again before your next generation. Saved-settings scene, +00:10.6. Face preview hidden.</figcaption>
</figure>

## Step 5: Select only the shots you need

You can run part of the template. Select the required shot from the previews rather than running the entire set. The images-per-prompt value still applies: **one selected prompt × two images per prompt = two results**.

<figure className="benchmark-card benchmark-card--source" style={{margin: '1.25rem 0 2rem'}}>
  <img src="/articles/img/workshops/run-astria-template-new-product/05-select-one-shot.webp" alt="Only the first preview selected in the Shirt template, marked by a check in its top-left corner" width="2000" height="920" loading="lazy" style={{aspectRatio: '2000 / 920'}} />
  <figcaption><strong>Run a smaller selection.</strong> Select an individual preview to choose its prompt. Shot-selection scene, +00:05.1. Face preview hidden.</figcaption>
</figure>

With the new shirt references selected, click **Generate**.

## Check your result

Compare each result with the new shirt’s photos. Check its shape, collar, sleeves and stripe placement. Look for any detail carried over from the previous shirt: the brand’s style should stay consistent while the product changes.

<figure className="benchmark-card benchmark-card--source" style={{margin: '1.25rem 0 2rem'}}>
  <img src="/articles/img/workshops/run-astria-template-new-product/new-shirt-reference.webp" alt="Original Bobo Choses blue poplin shirt product photo with red vertical stripes and a pointed collar" width="2048" height="2731" loading="lazy" style={{aspectRatio: '2048 / 2731'}} />
  <figcaption><strong>Keep the product photo beside the result.</strong> This is the new shirt reference used in the workshop.</figcaption>
</figure>

Continue with [how to generate multiple styled looks together](./generate-multiple-styled-looks-astria.md).

[All Astria workshops](/articles/workshops/)

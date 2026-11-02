---
title: "Match Product Colors to a Reference in Astria Darkroom"
description: "Use Color match in Astria Darkroom to correct garment and product colors. Select an area, choose a reference, adjust Amount and Tone, and save the finished image."
slug: darkroom-color-match
date: 2026-11-01
hide_table_of_contents: false
image: /img/darkroom-color-match/sweatshirt-after.webp
authors: [astria]
tags: [features]
keywords:
  - Astria Darkroom color match
  - match product colors to a reference
  - correct garment color in AI photos
  - ecommerce product color correction
  - Color match Amount and Tone
---

import ImageModelComparison from '@site/src/components/ImageModelComparison';

**Color match in Astria Darkroom brings a selected part of your photo closer to the color of a product reference.** Use it when the pose, composition and garment detail work, but a shirt reads too blue, a pair of trousers looks too light, or a product color has drifted from the approved photograph.

Select the area you want to correct, select the corresponding area in a reference, then adjust **Amount** and **Tone**. The correction follows the selected region and retains the photograph’s shading, so folds and shadows can still describe the material.

<!-- truncate -->

## Pale gray-blue trousers back to indigo

The America Basics product photo shows deep blue denim. In the original render, the trousers look almost silver beside the brown sweatshirt. Compare the fabric across the thighs in all three panels.

<figure data-source-reference="/articles/img/darkroom-color-match/denim-reference.webp" style={{margin: '1.25rem 0'}}>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '0.4rem'}}>
    <div><strong>Product reference</strong><img src="/articles/img/darkroom-color-match/denim-reference.webp" alt="Flat product photo of deep indigo elastic-waist denim trousers" width="800" height="1090" style={{display: 'block', width: '100%', height: 'auto'}} /></div>
    <div><strong>Original render</strong><img src="/articles/img/darkroom-color-match/denim-before.webp" alt="The rendered trousers appear pale gray-blue below a brown sweatshirt" width="800" height="1090" style={{display: 'block', width: '100%', height: 'auto'}} /></div>
    <div><strong>After Color match</strong><img src="/articles/img/darkroom-color-match/denim-after.webp" alt="The same trouser legs in the same pose, now a deep blue close to the product reference" width="800" height="1090" style={{display: 'block', width: '100%', height: 'auto'}} /></div>
  </div>
  <figcaption>Both Darkroom exports use the same crop. Follow the knee creases and trouser hems from the middle panel to the right.</figcaption>
</figure>

In Darkroom, select the trousers in **Photo** and the denim in **Reference**. Here **Amount 100** brings back the blue and **Tone 100** brings the washed-out fabric closer to the darker reference. The render also has a narrower leg than the product photo, a separate fit issue you can still see after the color correction. [View the original America Basics render](https://www.astria.ai/prompts/35787661?ws=54).

## Watch the Color match walkthrough

Watch the denim example above in Darkroom. Click the pale trousers in the boy’s photo, then the indigo fabric in the product reference. Follow the change at his knees as you adjust **Amount** and **Tone**, then hold **Before** to compare the result before downloading it.

<figure className="benchmark-card--source" style={{margin: '1.5rem 0'}}>
  <video controls playsInline preload="metadata" poster="/articles/img/darkroom-color-match/indigo-denim-poster.webp" aria-label="Darkroom walkthrough matching the boy’s pale trousers to indigo denim" style={{display: 'block', width: '100%', height: 'auto', borderRadius: '12px', background: '#10171d'}}>
    <source src="/articles/video/darkroom-color-match/indigo-denim.mp4" type="video/mp4" />
    <track kind="captions" src="/articles/video/darkroom-color-match/indigo-denim.vtt" srcLang="en" label="English" />
    <a href="/articles/video/darkroom-color-match/indigo-denim.mp4">Download the Color match walkthrough</a>
  </video>
  <figcaption>48 seconds · On-screen instructions and English captions. The America Basics example ends with Amount and Tone both set to 100.</figcaption>
</figure>

## See Color match on existing workspace photos

These examples use existing photos and product references from [Great Sports](https://www.astria.ai/w/great-sports), [Maison Urban](https://www.astria.ai/w/maison-urban) and [America Basics](https://www.astria.ai/w/america-basics). Each pair uses the same photo and Darkroom export framing. **Before** has no correction; **After** uses the settings listed beneath it, with no other grading adjustments. No new images were generated.

### A blue sweatshirt matched to violet-blue

The Great Sports portrait has a brighter, bluer sweatshirt than its product reference. Color match moves the fabric toward the reference’s deeper violet-blue. The broad chest and sleeve panels make the hue change easy to compare; the black and white bands help you inspect the garment detail.

<ImageModelComparison
  title="Great Sports sweatshirt before and after Color match"
  aspectRatio="1696 / 2528"
  description="Move the Scan line across the blue chest and sleeve to see the hue shift."
  reference={{label: 'Violet-blue sweatshirt reference', src: '/articles/img/darkroom-color-match/sweatshirt-reference.webp', alt: 'Great Sports product packshot of a violet-blue sweatshirt with black and white horizontal bands', verdict: 'The original sweatshirt packshot supplies the target color.'}}
  items={[
    {label: 'Before Color match', src: '/articles/img/darkroom-color-match/sweatshirt-before.webp', alt: 'Existing Great Sports studio portrait of a man wearing a blue striped sweatshirt'},
    {label: 'After Color match', src: '/articles/img/darkroom-color-match/sweatshirt-after.webp', alt: 'The same portrait with the sweatshirt shifted toward the violet-blue product reference', verdict: 'One selected area · Amount 100 · Tone 100'},
  ]}
/>

[View the original Great Sports sweatshirt photo](https://www.astria.ai/prompts/35958162?ws=60).

### A brown patterned knit in outdoor light

The Maison Urban street portrait gives the knit a dark, slightly olive cast. Matching it to the warmer brown product photograph makes the change visible across the torso and sleeve. Here **Amount 60** and **Tone 40** temper the correction and retain more of the outdoor lightness. Check the pale pattern too: a selection covering a whole patterned garment can also warm its lighter yarns.

<ImageModelComparison
  title="Maison Urban brown knit before and after Color match"
  aspectRatio="1792 / 2400"
  description="Compare the brown torso and sleeve, then inspect the pale knitted pattern."
  reference={{label: 'Brown patterned knit reference', src: '/articles/img/darkroom-color-match/knit-reference.webp', alt: 'Maison Urban product photograph of a brown short-sleeved knit with a pale geometric pattern', verdict: 'The product reference supplies the warmer brown target.'}}
  items={[
    {label: 'Before Color match', src: '/articles/img/darkroom-color-match/knit-before.webp', alt: 'Existing Maison Urban street portrait of a woman wearing a dark brown patterned knit'},
    {label: 'After Color match', src: '/articles/img/darkroom-color-match/knit-after.webp', alt: 'The same street portrait with a warmer brown knit after a balanced Color match correction', verdict: 'One selected area · Amount 60 · Tone 40'},
  ]}
/>

[View the original Maison Urban knit photo](https://www.astria.ai/prompts/35191900?ws=6).

### A beige jacket, close enough to inspect the seams

This Great Sports close-up makes a neutral-color adjustment easier to see than a full-body image. The jacket moves from gray-beige toward the packshot’s pinker beige. Look across the large shoulder panel, collar and zipper; the close crop also makes it easier to review the selection along the neck.

<ImageModelComparison
  title="Great Sports jacket detail before and after Color match"
  aspectRatio="1696 / 2528"
  description="Use Scan line across the collar and shoulder to compare the beige tones and fabric detail."
  reference={{label: 'Beige jacket product reference', src: '/articles/img/darkroom-color-match/jacket-detail-reference.webp', alt: 'Great Sports packshot of a beige high-collar zip jacket', verdict: 'The jacket is selected separately from its packshot background.'}}
  items={[
    {label: 'Before Color match', src: '/articles/img/darkroom-color-match/jacket-detail-before.webp', alt: 'Existing Great Sports close-up of a gray-beige jacket collar, zipper and shoulder'},
    {label: 'After Color match', src: '/articles/img/darkroom-color-match/jacket-detail-after.webp', alt: 'The same jacket close-up matched toward the warmer pink-beige product reference', verdict: 'One selected area · Amount 100 · Tone 100'},
  ]}
/>

[View the original Great Sports jacket photo](https://www.astria.ai/prompts/35961858?ws=60).

### Charcoal trousers in a studio portrait

The America Basics trousers read slightly warmer in the original portrait than in their product photograph. Color match moves the selected fabric toward the cooler charcoal reference. Inspect the waistband, pocket and folds; the cream shirt and skin provide useful checks for color spilling beyond the trousers.

<ImageModelComparison
  title="America Basics trousers before and after Color match"
  aspectRatio="1718 / 2560"
  description="Use Scan line to compare the trouser color in the same pose and lighting."
  reference={{label: 'Charcoal trouser product reference', src: '/articles/img/darkroom-color-match/america-reference.webp', alt: 'Original flat product photograph of charcoal wide-leg trousers from the America Basics workspace', verdict: 'The trousers are selected separately from the light background.'}}
  items={[
    {label: 'Before Color match', src: '/articles/img/darkroom-color-match/america-before.webp', alt: 'Existing America Basics studio portrait with a cream shirt and warm gray trousers'},
    {label: 'After Color match', src: '/articles/img/darkroom-color-match/america-after.webp', alt: 'The same America Basics portrait with the trousers matched to the cooler charcoal product reference', verdict: 'One selected area · Amount 100 · Tone 100'},
  ]}
/>

[View the original America Basics photo](https://www.astria.ai/prompts/47329455?ws=54).

These examples are finishing corrections to an already usable photograph. If a full lightness match is too strong for your scene, reduce **Tone** as described below.

## Start with a reliable color reference

Choose a clear photograph of the actual product in the intended colorway. Prefer an image with even lighting and visible material detail. A strong color cast or an overexposed reference gives you a poor target for matching.

Keep the reference focused on the material you want to match. For a navy jacket with cream trim, select the navy fabric separately from the trim. For more guidance on source images, see [how to choose product reference photos](./choose-product-reference-photos-ai-fashion.md).

## Step 1: Open the photo in Darkroom

Open your image in Astria’s image viewer and choose **Darkroom**. Expand **Color match**, then select **Add area**. The editor shows your photo alongside a reference pane.

## Step 2: Select the area to recolor

Click the garment or product surface in the **Photo** pane. Wait for the selection to appear, then check its coverage. Click additional parts to include them; **Shift-click** to subtract unwanted parts. On first use, the selection model may need to download before it can trace the area.

Look closely around cuffs, collars, straps and places where the product touches skin or the background. A clean selection helps keep the correction on the intended material.

## Step 3: Choose the matching reference area

Choose an image from the reference thumbnails, or use **Upload image** to bring in another product photograph. Click the corresponding material in the **Reference** pane. You can refine that selection with additional clicks and Shift-clicks too.

The reference strip also includes **This photo**, useful when another part of the same image supplies the color you want. **Pick a color** lets you use a solid color swatch instead of an image.

Once both areas are selected, review the live match and choose **Done**. This finishes the area selection; you still need to save or download the finished image.

## Step 4: Balance Amount and Tone

Each area has its own controls. The two small swatches show the selected photo color and reference color. The colored dot beside **Area 1** identifies the selection; it is not the target color.

<figure className="benchmark-card--source" style={{margin: '1.5rem 0'}}>
  <img src="/articles/img/darkroom-color-match/color-match-controls.png" alt="Astria Darkroom Color match panel showing Area 1, photo and reference swatches, Amount and Tone set to 100, edit and remove icons, Add area and Reset" width="636" height="436" loading="lazy" style={{display: 'block', width: '100%', maxWidth: '636px', height: 'auto', margin: '0 auto'}} />
  <figcaption>Each selected area has independent Amount and Tone controls. Both start at 100.</figcaption>
</figure>

| Control | What it changes | When to adjust it |
| --- | --- | --- |
| **Amount** | The overall strength of the match, from 0 to 100. At 0, this area’s color correction is off. | Lower it if the full correction is stronger than you want. |
| **Tone** | How much of the reference’s lightness comes with the color match, from 0 to 100. At 0, the correction retains the photo’s lightness; at 100, it applies the full lightness match. | Lower it when the reference was lit differently and the product becomes too bright or too dark. |

For example, imagine a navy shirt that looks too purple in your finished photo. Select the shirt and its navy product reference, then inspect the full match. If the hue looks right but the shirt becomes too bright under the scene’s lighting, reduce **Tone**. If the overall correction feels too strong, reduce **Amount**.

Use the **pencil icon** to revisit an area’s selection or reference, and the **trash icon** to remove that area. **Add area** creates another independent correction, with up to four areas per photo. The **Reset inside Color match** removes all color-match areas.

## Step 5: Compare and save the finished image

Hold **Before** to see the original photograph. Check the full image, then inspect the corrected area closely. Review the material’s folds and texture, the selection edges, and any nearby skin, trim or background. If you also applied a Darkroom look or other grading adjustments, judge the product color with those settings active.

Choose **Save to prompt** to keep the finished image with its prompt, or **PNG** to download it. Save or download before leaving Darkroom: area selections belong to the current editing session and are not restored as editable selections when you reopen the image.

For a collection, compare each finished image against the same approved product reference. Darkroom’s **Copy settings** and **Paste settings** transfer grading settings, but do not transfer color-match areas between photos. Select the relevant material in each image.

## Frequently asked questions

### Does Color match regenerate the image?

Color match applies a local color correction to the existing photo. You select the area and source color, then adjust the result in Darkroom without writing a new generation prompt.

### Can I match more than one garment?

Yes. Add separate areas for different garments or materials. Each area has its own reference, Amount and Tone, with up to four areas in a photo.

### Can I use Color match on video?

Color match is available for still images. The area-selection controls are not available in video Darkroom.

### Does it guarantee an exact product color?

It helps bring a photo closer to the selected reference. Lighting, the reference itself and the final grading still affect how the product reads. Compare against your approved product photograph before using the image on a product page, and review pattern, logos and construction separately. The [lookbook review guide](./review-ai-lookbook-before-template.md) covers those checks.

## Try Color match on your next product photo

[Open Astria](https://www.astria.ai/prompts), choose a photo, and use **Darkroom → Color match** to match it to your product reference. See the [Color match product announcement](https://www.astria.ai/updates/107) for the original workflow demonstration.

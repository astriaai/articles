---
title: "Nano Banana in Photoshop: Generative Editing Without Leaving the Document"
description: "How the Astria Photoshop plugin brings GPT Image, Nano Banana, Seedream, and Flux into a live document — selection edits, Smart Object layers, and which model to use."
slug: nano-banana-photoshop-guide
date: 2026-08-21
hide_table_of_contents: true
image: /img/covers/nano-banana-photoshop-guide.jpg
authors: [astria]
tags: [engineering, photoshop]
keywords:
  - Nano Banana Photoshop plugin
  - Nano Banana Photoshop
  - AI image editing Photoshop
  - Seedream Photoshop plugin
---

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Nano Banana Photoshop plugin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Astria plugin that connects a Photoshop selection to current generative image models — including Nano Banana, Seedream, and Flux — so edits happen against the live document and return as layers rather than requiring a round trip through a web app.",
      },
    },
    {
      "@type": "Question",
      name: "How much does the plugin cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "See https://www.astria.ai/pricing for current plugin pricing and generation rates.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my own Google API key?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The plugin offers a direct mode where you supply your own Google API key and generations bill to your Google account instead of Astria credits. This suits developers who already have a Google billing relationship.",
      },
    },
    {
      "@type": "Question",
      name: "Which Photoshop versions are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The maintained CCX/UXP build targets Photoshop 2025 (version 26 and later) on macOS and Windows. The older JSX script still works with Replicate credits for earlier releases.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from Photoshop's built-in generative fill?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Less than it used to be on model choice, and more on everything else. Since Photoshop 27.x, Generative Fill's model picker includes Nano Banana 2, Nano Banana Pro, FLUX.2 pro and FLUX.1 Kontext alongside Firefly. The Astria plugin adds GPT Image 2 with mask support and Seedream 5 and Seedream 5 Pro, none of which are in Photoshop's picker; places results as Smart Objects at the model's full returned resolution; bills per image or through your own Google key instead of monthly generative credits; and picks up new models from the Astria platform the day they launch, without a plugin update.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to update the plugin when a new model comes out?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The model list is served by the Astria platform, so a new model appears in the panel's dropdown on launch day without a plugin update or re-download.",
      },
    },
  ],
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema).replace(/</g, '\\u003c')}}
/>

Generative editing has an annoying workflow problem: the models are in a browser and the work is in a document. Export, upload, prompt, download, re-import, mask, blend — repeat forty times and the tooling costs more time than it saves.

**The short version:** the plugin puts the selection and the model in the same place, and returns results as layers you can mask and blend normally.

<!-- truncate -->

<aside className="astria-article-cta" aria-label="Get the Astria Photoshop plugin"><div className="astria-article-cta__mark"><img src="/articles/img/logo@2x.webp" alt="" /></div><p className="astria-article-cta__eyebrow">Photoshop plugin</p><h2 className="astria-article-cta__title">Every current model, inside the layers panel</h2><p className="astria-article-cta__copy">GPT Image, Nano Banana, Seedream and Flux in one Photoshop panel. $9 once, pay per image or bring your own key.</p><div className="astria-article-cta__actions"><a className="astria-article-cta__button astria-article-cta__button--primary" href="https://www.astria.ai/nano-banana-photoshop"><span>Get the plugin</span><span aria-hidden="true">→</span></a><a className="astria-article-cta__button astria-article-cta__button--secondary" href="/articles/best-nano-banana-photoshop-plugins/"><span>Compare plugins</span><span aria-hidden="true">→</span></a></div></aside>

## What it does

Make a selection, describe the edit, and the result comes back into the document. The plugin handles the export, the API call, and the re-import, and it returns generations as layers so the rest of your normal workflow — masks, blend modes, adjustment layers, non-destructive corrections — still applies.

The panel currently carries six models: GPT Image 2 (mask-aware, at 1K, 2K or 4K), Nano Banana 2, Nano Banana Pro, Seedream 5 Pro, Seedream 5 and Flux 2 Pro, with the current line-up shifting as new releases land. Results land as Smart Objects holding the model's full returned resolution, so a 4K result dropped into a small selection still carries every pixel. The panel reads its model list from Astria, so a new model appears in the dropdown on launch day with no plugin update. That is deliberate: the plugin's usefulness is partly that you do not have to migrate your workflow every time a better model appears.

## Why model choice matters

The models are not interchangeable, and having several in one panel is most of the value.

- **Instruction-following edits** — "remove the object", "change the wall to sage green", "make it evening" — are where the Gemini-line models are strongest. Natural-language editing against an existing image is what they are built for.
- **Photographic generation** — new content that has to sit convincingly alongside a photograph — is where the Flux line has generally been strong.
- **Mask-aware surgical replacement** — swap the shoes from a reference, take the phone out of a hand — is where GPT Image 2 earns its place. It reads a brushed selection directly, so the edit stays inside the mask and the rest of the frame is left alone.
- **Long, structured prompts** — a multi-clause brief for a packaging variant or a full re-light, with materials, light direction and framing spelled out — are where Seedream 5 tends to hold together.
- **Speed and cost** — some models return in seconds for cents; others are slower and better. For a hundred small corrections, the fast one is the right call.

The practical habit is to try the cheap fast model first and escalate only when it fails. Most edits do not need the best available model, and running everything through the most expensive option is how a plugin subscription starts feeling expensive.

## Working with it properly

**Select generously.** Give the model context around the edit — a tight selection produces edits that do not know what they are sitting next to, and the seam shows.

**Keep generations on their own layers.** Then mask rather than erase. The best result is frequently a blend of two attempts, and that is only possible if you kept both.

**Prompt the change, not the scene.** "Change the wall behind her to sage green" beats a full re-description of the image. Describing everything invites the model to reconsider everything.

**Fix colour and grade in Photoshop.** Generated regions often come back very slightly off. A curves adjustment clipped to the layer is faster and more controllable than re-prompting for a colour shift.

**Work at sensible resolution.** Because each result arrives as a Smart Object holding the model's full returned pixels, generating a hero at 4K and transforming it later costs nothing in resolution: scale it down, scale it back up, re-mask, and the original pixels are still there. For volume the old rule still applies. Run the cheap, fast model at a working size first, and reserve 4K for the frames that will carry the campaign.

## Where it fits in a production workflow

For fashion and product work the division tends to fall out like this:

- **Bulk production** — a whole collection against one approved treatment — belongs in a production workspace, not in Photoshop. That is a throughput problem, and doing it one document at a time is the wrong shape. See the [AI fashion photoshoot guide](./ai-fashion-photoshoot-guide.md).
- **Hero images** belong in Photoshop. The shot that carries a campaign gets individual attention, and this is where generative editing inside a real editing environment beats a web app.
- **Corrections** — a distracting object, an awkward shadow, a background that needs extending to a different aspect ratio — belong in the plugin. These are the everyday tasks that were never worth a browser round trip.
- **Client work** where layered files are a deliverable belongs in Photoshop, because the layers are the point.

## Credits and the direct mode

Two billing paths, and the right one depends on who you are:

**Astria credits.** Generations bill against an Astria balance, pay-as-you-go. Simpler, and it means the same balance covers plugin work and platform work.

**Direct mode with your own Google API key.** Generations bill to your own Google account. This suits developers who already have Google billing set up and want the usage on that invoice.

The plugin itself is a one-time purchase rather than a subscription, with generation costs separate. Because both plugin pricing and per-generation costs move as models change, check the [product page](https://www.astria.ai/nano-banana-photoshop) for current figures rather than trusting a number in an article.

## Practical notes

- **Photoshop version.** The maintained plugin is the CCX/UXP build for Photoshop 2025 (v26 and later), on macOS and Windows, with no GPU required. The older JSX script still works with Replicate credits for earlier releases.
- **Model availability changes.** Names in the panel will shift. Discover what is available in the plugin rather than assuming a specific model is present.
- **Not every edit should be generative.** A clone stamp is still faster and more predictable for small repairs, and a real mask beats a generated one for anything with a hard edge.
- **How it compares.** For how the plugin stacks up against other panels and against Photoshop's own model picker, see the [round-up of Nano Banana Photoshop plugins](./best-nano-banana-photoshop-plugins.md).

For the API-level equivalent of this work, see [fine-tuning FLUX.1 on Astria](./fine-tuning-flux.md).

## Frequently asked questions

### What is the Nano Banana Photoshop plugin?

An Astria plugin that connects a Photoshop selection to current generative image models — including Nano Banana, Seedream, and Flux — so edits happen against the live document and return as layers rather than requiring a round trip through a web app.

### How much does the plugin cost?

See [Astria pricing](https://www.astria.ai/pricing) for current plugin pricing and generation rates.

### Can I use my own Google API key?

Yes. The plugin offers a direct mode where you supply your own Google API key and generations bill to your Google account instead of Astria credits. This suits developers who already have a Google billing relationship.

### Which Photoshop versions are supported?

The maintained CCX/UXP build targets Photoshop 2025 (version 26 and later) on macOS and Windows. The older JSX script still works with Replicate credits for earlier releases.

### How is this different from Photoshop's built-in generative fill?

Less than it used to be on model choice, and more on everything else. Since Photoshop 27.x, Generative Fill's model picker includes Nano Banana 2, Nano Banana Pro, FLUX.2 pro and FLUX.1 Kontext alongside Firefly ([Adobe's list of non-Adobe models](https://helpx.adobe.com/creative-cloud/apps/generative-ai/non-adobe-models-in-adobe-products.html)). The Astria plugin adds GPT Image 2 with mask support and Seedream 5 and Seedream 5 Pro, none of which are in Photoshop's picker; places results as Smart Objects at the model's full returned resolution; bills per image or through your own Google key instead of monthly generative credits; and picks up new models from the Astria platform the day they launch, without a plugin update. The full comparison is in [Astria plugin vs Photoshop Generative Fill](./astria-plugin-vs-photoshop-generative-fill.md).

### Do I need to update the plugin when a new model comes out?

No. The model list is served by the Astria platform, so a new model appears in the panel's dropdown on launch day without a plugin update or re-download.

[Get the Photoshop plugin](https://www.astria.ai/nano-banana-photoshop).

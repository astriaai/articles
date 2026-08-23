---
title: "Nano Banana in Photoshop: Generative Editing Without Leaving the Document"
description: "How the Astria Photoshop plugin brings Nano Banana, Seedream, and Flux into a live document — selection-based edits, layer workflow, and when to use which model."
slug: nano-banana-photoshop-guide
date: 2026-08-21
hide_table_of_contents: true
image: /img/covers/nano-banana-photoshop-guide.jpg
authors: [astria]
tags: [engineering]
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
        text: "The plugin itself is a one-time purchase, with generation credits billed separately by usage. Check the product page for current pricing, since both the plugin price and per-generation costs change as models change.",
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
        text: "The current UXP plugin targets recent Photoshop releases including Photoshop 2026. An older JSX-based version existed for earlier releases; the UXP plugin is the maintained one.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from Photoshop's built-in generative fill?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main difference is model choice. Built-in generative features use Adobe's models; this plugin lets you route the same selection to different current models and pick per task, which matters because they have genuinely different strengths.",
      },
    },
  ],
};

<script
  type="application/ld+json"
>
  {JSON.stringify(faqSchema)}
</script>

Generative editing has an annoying workflow problem: the models are in a browser and the work is in a document. Export, upload, prompt, download, re-import, mask, blend — repeat forty times and the tooling costs more time than it saves.

**The short version:** the plugin puts the selection and the model in the same place, and returns results as layers you can mask and blend normally.

<!-- truncate -->

<aside className="astria-article-cta" aria-label="Start creating with Astria">
  <div className="astria-article-cta__mark">
    <img src="/articles/img/logo@2x.png" alt="" />
  </div>
  <p className="astria-article-cta__eyebrow">Fashion production workspace</p>
  <h2 className="astria-article-cta__title">Create your next campaign with Astria</h2>
  <p className="astria-article-cta__copy">Generate fashion visuals from your products, or start with a production-ready template.</p>
  <div className="astria-article-cta__actions">
    <a className="astria-article-cta__button astria-article-cta__button--primary" href="/prompts">
      <span>Generate</span><span aria-hidden="true">→</span>
    </a>
    <a className="astria-article-cta__button astria-article-cta__button--secondary" href="/gallery/workspaces">
      <span>Templates gallery</span><span aria-hidden="true">→</span>
    </a>
  </div>
</aside>

## What it does

Make a selection, describe the edit, and the result comes back into the document. The plugin handles the export, the API call, and the re-import, and it returns generations as layers so the rest of your normal workflow — masks, blend modes, adjustment layers, non-destructive corrections — still applies.

The models available include Nano Banana (Google's Gemini image line), Seedream, and Flux, with the current line-up shifting as new releases land. That is deliberate: the plugin's usefulness is partly that you do not have to migrate your workflow every time a better model appears.

## Why model choice matters

The models are not interchangeable, and having several in one panel is most of the value.

- **Instruction-following edits** — "remove the object", "change the wall to sage green", "make it evening" — are where the Gemini-line models are strongest. Natural-language editing against an existing image is what they are built for.
- **Photographic generation** — new content that has to sit convincingly alongside a photograph — is where the Flux line has generally been strong.
- **Speed and cost** — some models return in seconds for cents; others are slower and better. For a hundred small corrections, the fast one is the right call.

The practical habit is to try the cheap fast model first and escalate only when it fails. Most edits do not need the best available model, and running everything through the most expensive option is how a plugin subscription starts feeling expensive.

## Working with it properly

**Select generously.** Give the model context around the edit — a tight selection produces edits that do not know what they are sitting next to, and the seam shows.

**Keep generations on their own layers.** Then mask rather than erase. The best result is frequently a blend of two attempts, and that is only possible if you kept both.

**Prompt the change, not the scene.** "Change the wall behind her to sage green" beats a full re-description of the image. Describing everything invites the model to reconsider everything.

**Fix colour and grade in Photoshop.** Generated regions often come back very slightly off. A curves adjustment clipped to the layer is faster and more controllable than re-prompting for a colour shift.

**Work at sensible resolution.** Generate at a working size, then upscale the finished composite. Generating everything at 4K is slow and expensive when most of it will be masked away.

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

- **Photoshop version.** The maintained plugin is the UXP build, targeting recent releases including Photoshop 2026. An older JSX version existed for earlier Photoshop generations.
- **Model availability changes.** Names in the panel will shift. Discover what is available in the plugin rather than assuming a specific model is present.
- **Not every edit should be generative.** A clone stamp is still faster and more predictable for small repairs, and a real mask beats a generated one for anything with a hard edge.

For the API-level equivalent of this work, see [fine-tuning FLUX.1 on Astria](./fine-tuning-flux.md).

## Frequently asked questions

### What is the Nano Banana Photoshop plugin?

An Astria plugin that connects a Photoshop selection to current generative image models — including Nano Banana, Seedream, and Flux — so edits happen against the live document and return as layers rather than requiring a round trip through a web app.

### How much does the plugin cost?

The plugin itself is a one-time purchase, with generation credits billed separately by usage. Check the product page for current pricing, since both the plugin price and per-generation costs change as models change.

### Can I use my own Google API key?

Yes. The plugin offers a direct mode where you supply your own Google API key and generations bill to your Google account instead of Astria credits. This suits developers who already have a Google billing relationship.

### Which Photoshop versions are supported?

The current UXP plugin targets recent Photoshop releases including Photoshop 2026. An older JSX-based version existed for earlier releases; the UXP plugin is the maintained one.

### How is this different from Photoshop's built-in generative fill?

The main difference is model choice. Built-in generative features use Adobe's models; this plugin lets you route the same selection to different current models and pick per task, which matters because they have genuinely different strengths.

[Get the Photoshop plugin](https://www.astria.ai/nano-banana-photoshop).

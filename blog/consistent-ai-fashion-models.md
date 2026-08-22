---
title: "How to Keep the Same AI Model Across a Whole Collection"
description: "Casting drift is the reason AI catalogs look wrong. Why consistency breaks, the four kinds of consistency you actually need, and how to hold all of them."
slug: consistent-ai-fashion-models
date: 2026-09-08
hide_table_of_contents: true
authors: [astria]
tags: [guides]
keywords:
  - consistent AI models across images
  - consistent AI fashion models
  - same AI model every image
  - AI character consistency fashion
---

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does the same AI model look different in every image?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because a text description is not an identity. Words like 'woman, 28, brown hair' describe a category containing millions of faces, and each generation picks a different one. Consistency requires the likeness to be stored as a reusable reference, not re-described each time.",
      },
    },
    {
      "@type": "Question",
      name: "Do seeds keep a character consistent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only weakly. Reusing a seed reproduces similar results for a near-identical prompt, but the likeness drifts as soon as the pose, scene, or framing changes — which is exactly what a collection requires. Seeds are a reproducibility tool, not an identity tool.",
      },
    },
    {
      "@type": "Question",
      name: "How many reference photos are needed for a consistent model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a trained likeness, typically eight to sixteen varied images. Instant reference approaches can work from far fewer. Variety across angle, lighting, and expression matters more than volume in either case.",
      },
    },
    {
      "@type": "Question",
      name: "What is casting drift?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The gradual change in a model's appearance across a long production run — subtly different face, age, or build between early and late images. It is rarely visible image-by-image and obvious when the set is viewed together.",
      },
    },
    {
      "@type": "Question",
      name: "Can you keep the same model across images and video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, when the same stored reference drives both. This is what allows a still campaign and its motion cutdowns to feature recognisably the same person rather than two similar-looking people.",
      },
    },
  ],
};

<script
  type="application/ld+json"
>
  {JSON.stringify(faqSchema)}
</script>

Look at an AI-produced catalog that has gone wrong and you will usually find the same failure: it is not one model wearing forty garments, it is forty slightly different people. The face changes. The age wanders. The build shifts between the knitwear and the outerwear.

**The short version:** description is not identity. If your model is specified in words, you are recasting on every generation.

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

## Why description fails

"A woman in her late twenties, shoulder-length brown hair, olive skin, natural makeup" feels specific. It is not. It describes a category that contains an enormous number of distinct faces, and each generation is free to choose a different one. Add more adjectives and you narrow the category slightly; you never reduce it to a person.

This is why prompt-only workflows produce a *type* rather than a *model*. The images are consistent in the way that stock photography is consistent — same genre, different humans.

The fix is categorical rather than incremental: the likeness has to exist as a stored thing that gets pointed at, not a description that gets re-interpreted. Once a face is a reference the production can reuse, "the same model" becomes a fact about the setup rather than a hope about the output.

## Four kinds of consistency, often confused

Teams say "consistency" and mean different things. All four are needed, and they fail independently.

**Identity consistency** — the same recognisable person. This is what references solve.

**Styling consistency** — hair and makeup that stay the same. A stored likeness will happily give you the same face with a different fringe. Hair, in particular, drifts more than faces do and is worth calling out explicitly in the direction.

**Treatment consistency** — same light, same grade, same lens character, same background logic. Independent of who the person is.

**Framing consistency** — crops and proportions that match across the set.

A catalog can fail on any one of these while passing the other three, and the symptom looks similar to a non-specialist: "it looks off." Diagnosing which of the four broke is the first step in fixing it.

## What actually works

**Store the likeness, don't describe it.** Whether via a trained model from eight to sixteen varied photos or an instant reference from fewer, the point is the same: the identity becomes an asset in the production rather than a sentence in a prompt.

**Vary the source material.** Reference images should span angles, lighting conditions, and expressions. Sixteen frames from one burst teach the system one lighting condition and one angle, and the likeness collapses the moment you ask for anything else.

**Separate the person from everything else.** Casting, garment, pose, and scene should be independently specifiable. When they are entangled — one long prompt describing all four — changing the pose perturbs the face. This separation is the single biggest practical difference between tools that hold consistency and tools that do not.

**Lock the treatment before scaling.** Approve light, grade, and framing on a handful of products first. Drift compounds; a slightly warm bias in the setup becomes visible warmth by image 200.

**Review as a set, never as singles.** This is a process fix, not a technical one, and it catches more than any technical measure. Contact-sheet the whole run at a size where faces are legible.

**Re-anchor periodically.** On long runs, check late images against the earliest approved ones rather than against the images immediately before them. Drift is a slow gradient; comparing neighbours will never reveal it.

## What does not work

**Seeds.** Reusing a seed reproduces a similar result for a near-identical prompt. Change the pose, the garment, or the scene — which is the entire job — and the likeness moves. Useful for reproducibility, not for identity.

**Longer descriptions.** Adding adjectives narrows the category but never collapses it to one person. Twenty-word casting descriptions are a symptom of the wrong approach, not a solution to it.

**Picking the best of many.** Generating forty options and choosing the most similar is expensive, slow, and still drifts, because you are selecting from a distribution rather than fixing it.

**Face-swapping at the end.** Pasting a consistent face onto inconsistent bodies produces a characteristic uncanny result: the head belongs to someone whose build, skin tone, and lighting do not match the body beneath it.

## The extended-casting problem

One consequence worth stating: consistency work is what makes broad casting practical. If every image is a fresh roll of the dice, representing a range of ages, sizes, and bodies across a collection is unmanageable — you cannot hold six different people consistent when you cannot hold one.

Once casting is a stored reference, a brand can run a genuinely varied cast — including children's ranges and extended sizing — with the same reliability as a single model. Whether a brand does that is a values question. Consistency is what turns it from an aspiration into an operation.

## A test that predicts real-world behaviour

Before committing to a platform, run this:

1. Establish one model.
2. Produce ten images: five garments, two poses each, one indoor scene and one outdoor.
3. Contact-sheet them at a size where faces are clearly legible.
4. Ask someone who has not seen them: "Is this one person or more than one?"
5. Then change the scene to something quite different — night, harsh light, a different location — and repeat.

Step five is where most tools fail. Consistency under similar conditions is common; consistency across genuinely different lighting is what a real collection demands.

For the full production context, see the [AI fashion photoshoot guide](./ai-fashion-photoshoot-guide.md). For lookbooks specifically, where casting continuity carries the narrative, see the [AI lookbook guide](./ai-lookbook-guide.md).

## Frequently asked questions

### Why does the same AI model look different in every image?

Because a text description is not an identity. Words like "woman, 28, brown hair" describe a category containing millions of faces, and each generation picks a different one. Consistency requires the likeness to be stored as a reusable reference, not re-described each time.

### Do seeds keep a character consistent?

Only weakly. Reusing a seed reproduces similar results for a near-identical prompt, but the likeness drifts as soon as the pose, scene, or framing changes — which is exactly what a collection requires. Seeds are a reproducibility tool, not an identity tool.

### How many reference photos are needed for a consistent model?

For a trained likeness, typically eight to sixteen varied images. Instant reference approaches can work from far fewer. Variety across angle, lighting, and expression matters more than volume in either case.

### What is casting drift?

The gradual change in a model's appearance across a long production run — subtly different face, age, or build between early and late images. It is rarely visible image-by-image and obvious when the set is viewed together.

### Can you keep the same model across images and video?

Yes, when the same stored reference drives both. This is what allows a still campaign and its motion cutdowns to feature recognisably the same person rather than two similar-looking people.

[Explore Astria for fashion and ecommerce](https://www.astria.ai/ecommerce).

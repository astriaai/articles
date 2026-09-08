---
title: "One Live Workspace Brief Across Seven AI Video Models"
description: "A transparent calibration of seven video models using a reference-aware runway brief from Astria's Live workspace, with disclosed Kling and Veo compatibility variants."
slug: video-model-comparison-calibration
date: 2026-09-08
draft: false
hide_table_of_contents: false
authors: [astria]
tags: [models, engineering]
keywords:
  - AI video model comparison
  - Seedance 2.5 comparison
  - Seedance 2 Fast
  - Wan 3 vs MiniMax H3
  - reference to video benchmark
---

import VideoModelComparison from '@site/src/components/VideoModelComparison';

Five endpoints received the exact nine-second prompt from Astria's **Live** workspace. Veo received the required eight-second timing variant. Kling received a 480-character version after an Astria blank-line parser incorrectly classified the formatted prompt as a multi-shot prompt. All seven requests retained the same four references and action order.

This is a transparent calibration set, not a ranking. The results have not yet received blinded picture review.

<!-- truncate -->

<ArticleEvidence profile="video" />

<VideoModelComparison
  title="The Live runway brief across seven video models"
  description="Five exact-prompt outputs plus clearly labeled Veo duration and Kling parser variants. Each tile uses the familiar native player for play, timeline, volume, and fullscreen."
  items={[
    {label: 'Seedance 2 Fast', src: '/articles/video/model-benchmarks/2026-09/live-workspace/seedance-2-fast-720p-live-runway.mp4', poster: '/articles/video/model-benchmarks/2026-09/live-workspace/seedance-2-fast-first-frame.jpg', meta: 'Astria default · 1280×720 · 24fps · prompt 46608981', promptUrl: 'https://www.astria.ai/prompts/46608981'},
    {label: 'Seedance 2.5', src: '/articles/video/model-benchmarks/2026-09/live-workspace/seedance-2-5-720p-live-runway.mp4', poster: '/articles/video/model-benchmarks/2026-09/live-workspace/seedance-2-5-first-frame.jpg', meta: '1280×720 · 24fps · prompt 46608977', promptUrl: 'https://www.astria.ai/prompts/46608977'},
    {label: 'Wan 3.0', src: '/articles/video/model-benchmarks/2026-09/live-workspace/wan-3-0-720p-live-runway.mp4', poster: '/articles/video/model-benchmarks/2026-09/live-workspace/wan-3-0-first-frame.jpg', meta: '1280×720 · 30fps · prompt 46608979', promptUrl: 'https://www.astria.ai/prompts/46608979'},
    {label: 'MiniMax H3 Max', src: '/articles/video/model-benchmarks/2026-09/live-workspace/minimax-h3-max-768p-live-runway.mp4', poster: '/articles/video/model-benchmarks/2026-09/live-workspace/h3-max-first-frame.jpg', meta: '1344×768 · 24fps · prompt 46608978', promptUrl: 'https://www.astria.ai/prompts/46608978'},
    {label: 'Kling 3.0 Standard', src: '/articles/video/model-benchmarks/2026-09/live-workspace/kling-3-0-standard-live-runway.mp4', poster: '/articles/video/model-benchmarks/2026-09/live-workspace/kling-3-0-standard-first-frame.jpg', meta: '480-character prompt variant · 1284×716 · 24fps · prompt 46609258', promptUrl: 'https://www.astria.ai/prompts/46609258'},
    {label: 'FLUX 3 Video', src: '/articles/video/model-benchmarks/2026-09/live-workspace/flux-3-720p-live-runway.mp4', poster: '/articles/video/model-benchmarks/2026-09/live-workspace/flux-3-first-frame.jpg', meta: '1280×704 · 24fps · prompt 46608980', promptUrl: 'https://www.astria.ai/prompts/46608980'},
    {label: 'Veo 3.1 Lite', src: '/articles/video/model-benchmarks/2026-09/live-workspace/veo-3-1-lite-720p-live-runway.mp4', poster: '/articles/video/model-benchmarks/2026-09/live-workspace/veo-3-1-lite-first-frame.jpg', meta: '8-second timing variant · 1280×720 · 24fps · prompt 46609256', promptUrl: 'https://www.astria.ai/prompts/46609256'},
  ]}
/>

## The exact reference-aware prompt

The earlier draft was wrong because it began `video_prompt` with a reference-stripped description. Working video prompts in the Live workspace put the complete still-generation text first. The five exact-prompt jobs preserve the following structure, with real line breaks and the reference names immediately after their tokens; the two disclosed variants are documented below.

```text
<faceid:3908227:1> woman
elegant posture, high-fashion runway silhouette woman wearing <faceid:5198108:1> dress
<faceid:5176212:1> sandals, full body view with much headroom

<faceid:5191564:1> background background, concrete grey floor


0s-2s: Fast walking into the frame from the left with a continuous, fluid, and confident stride. Full body view with plenty of headroom.
2s-4s: She smoothly comes to a complete stop while facing forward. She naturally places one hand on her hip and holds the pose briefly with confident posture.
4s-9s: She lowers her hand, resumes walking with the same fluid, confident stride, walks directly toward and past the camera, and completely exits the frame.
Static camera, continuous motion, no cuts, seamless transitions.
```

The four Live-workspace references are Elara (`woman`), the navy pinstriped sleeveless midi dress (`dress`), the gold rhinestone flat sandals (`sandals`), and the concrete-gray studio (`background`). The source pattern comes from workspace 602 and prompt [46434600](https://www.astria.ai/prompts/46434600).

## What the endpoints returned

| Model | Requested | Delivered | Cost (mc) | Submit-to-result |
| --- | --- | --- | ---: | ---: |
| Seedance 2 Fast | 9s, 16:9, 720p | 9.04s, 1280×720, 24fps, silent | 231,000 ($2.31) | 254.7s |
| Seedance 2.5 | 9s, 16:9, 720p | 9.04s, 1280×720, 24fps, silent | 389,000 ($3.89) | 474.7s |
| Wan 3.0 | 9s, 16:9, 720p | 9.00s, 1280×720, 30fps, silent | 132,000 ($1.32) | 327.1s |
| MiniMax H3 Max | 9s, 16:9, 768p | 9.44s, 1344×768, 24fps, AAC track present | 112,000 ($1.12) | 44.0s |
| Kling 3.0 Standard | 9s, 16:9, standard; 480-character variant | 9.04s, 1284×716, 24fps, silent | 199,000 ($1.99) | 221.7s |
| FLUX 3 Video | 9s, 16:9, 720p | 9.04s, 1280×704, 24fps, silent | 217,000 ($2.17) | 209.4s |
| Veo 3.1 Lite | 8s, 16:9, 720p; timing variant | 8.00s, 1280×720, 24fps, silent | 77,000 ($0.77) | 92.9s |

MiniMax returned an AAC stream even though this comparison did not ask for generated audio. `cost_mc` is measured in millicents: 100,000 equals US$1.00. The players do not crop, stretch, upscale, or re-encode any output.

## Disclosed Kling and Veo variants

Kling 3.0 Standard initially rejected the formatted Live prompt with `each multiprompt text must be 512 characters or less`. Inspection of Astria's server code showed why: for Kling 3, any blank paragraph activates multi-shot parsing. The ordinary paragraph breaks before the background and motion blocks were therefore interpreted as shot boundaries, and the long motion section exceeded the per-shot validator. The accepted comparison prompt removes blank-line separators and compresses the wording to 480 characters while retaining all four references, the three timed actions, the static camera, and the no-cuts instruction.

```text
<faceid:3908227:1> woman
elegant posture, high-fashion runway silhouette woman wearing <faceid:5198108:1> dress
<faceid:5176212:1> sandals, full body view with much headroom
<faceid:5191564:1> background background, concrete grey floor
0-2s: Walk quickly in from left, fluid and confident, full body with headroom.
2-4s: Stop facing front; place one hand on hip and hold.
4-9s: Lower hand, walk toward and past camera, then fully exit.
Static camera; one continuous shot; no cuts.
```

Veo 3.1 Lite accepts fixed 4, 6, or 8-second durations. Its comparison prompt is otherwise complete and changes only `4s-9s` to `4s-8s`. These two outputs belong in the visual grid but must remain labeled as compatibility variants, not exact-input matches. The older six-second synthetic-still calibration remains archived separately.

## What comes before a winner

The full benchmark still needs three outputs per finalist, randomized labels, and at least three reviewers. Review should score action order, reference assignment, identity, garment silhouette, shoes and gait, camera behavior, temporal defects, usable-output rate, latency, and cost per approved second. Until that review is complete, treat this page as a published calibration rather than a final ranking.

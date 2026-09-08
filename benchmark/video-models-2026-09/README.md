# Video model benchmark — September 2026

The primary comparison uses the reference-aware runway brief from Astria's **Live** workspace (workspace 602, source prompt [46434600](https://www.astria.ai/prompts/46434600)). Five endpoints use the exact 9-second prompt; Kling and Veo use disclosed compatibility variants. All seven returned playable 16:9 outputs. No winner has been declared.

## Primary Live-workspace set

| Model | Astria model name | Prompt id | Delivered | Cost (mc) | Submit-to-result |
| --- | --- | ---: | --- | ---: | ---: |
| Seedance 2 Fast | `seedance2_fast_720p` | [46608981](https://www.astria.ai/prompts/46608981) | 9.04s, 1280×720, 24fps, silent | 231,000 ($2.31) | 254.7s |
| Seedance 2.5 | `seedance25_720p` | [46608977](https://www.astria.ai/prompts/46608977) | 9.04s, 1280×720, 24fps, silent | 389,000 ($3.89) | 474.7s |
| Wan 3.0 | `wan30_720p` | [46608979](https://www.astria.ai/prompts/46608979) | 9.00s, 1280×720, 30fps, silent | 132,000 ($1.32) | 327.1s |
| MiniMax H3 Max | `minimax_h3_max_768p` | [46608978](https://www.astria.ai/prompts/46608978) | 9.44s, 1344×768, 24fps, AAC present | 112,000 ($1.12) | 44.0s |
| Kling 3.0 Standard | `kling30_standard` | [46609258](https://www.astria.ai/prompts/46609258) | 9.04s, 1284×716, 24fps, silent | 199,000 ($1.99) | 221.7s |
| FLUX 3 Video | `flux3_720p` | [46608980](https://www.astria.ai/prompts/46608980) | 9.04s, 1280×704, 24fps, silent | 217,000 ($2.17) | 209.4s |
| Veo 3.1 Lite | `veo31_lite_720p` | [46609256](https://www.astria.ai/prompts/46609256) | 8.00s, 1280×720, 24fps, silent | 77,000 ($0.77) | 92.9s |

All requests used the same `nano-banana-2` still model and the same four references. Each request generated its own reference-conditioned first frame before generating video. Five use identical motion text; the Kling and Veo differences are explicit below. MiniMax returned an AAC stream even though audio was not requested.

## Exact prompt structure

The complete reference description must be the opening block of `video_prompt`; it must not be reduced to plain words with the `<faceid:…>` tokens stripped out.

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

References:

- `3908227 woman` — Elara.
- `5198108 dress` — Navy pinstriped sleeveless midi dress.
- `5176212 sandals` — Gold rhinestone strapped brown flat sandals.
- `5191564 background` — Concrete-gray studio background.

## Compatibility variants

- **Kling 3.0 Standard:** Astria currently identifies any blank paragraph in a Kling 3 prompt as a multi-shot separator. That made the Live prompt's ordinary paragraph formatting trigger the per-shot 512-character validator. Prompt 46609258 removes blank lines and compresses the same references and action order to 480 characters. It is playable and labeled as a prompt variant in the grid.
- **Veo 3.1 Lite:** prompt 46609256 uses the required 8-second duration and changes only the final interval from `4s-9s` to `4s-8s`. It is playable and labeled as a duration variant.

Exact Kling variant:

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

## Files

- `live-workspace-runs.json` — exact prompt, reference ids, request ids, timings, costs, delivered properties, hashes, and compatibility notes.
- `live-workspace-scores.csv` — unjudged review sheet for this set.
- `static/video/model-benchmarks/2026-09/live-workspace/` — the seven clips and their model-specific generated first frames.
- `preview.html` — lightweight localhost comparison using only native browser controls.
- `runs.json`, `scores.csv`, and the older top-level videos/assets — archived six-second synthetic-still calibration. They are not mixed into the Live comparison.

## Reusable player

`src/components/VideoModelComparison` renders ordinary `<video controls>` players in 16:9 boxes. It has no custom transport, frame-stepping, or synchronized scrubber. Supply a per-model poster when each endpoint generates a different reference-conditioned starting still.

## Review protocol

1. Randomize model labels for at least three reviewers.
2. Review all seven clips side by side, then inspect the original files at full resolution; keep the two variants visibly flagged.
3. Check action order, person/dress/sandal/background assignment, identity, garment silhouette, feet and gait, camera behavior, and temporal defects.
4. Record `pass`, `partial`, `fail`, or `not scored` in `live-workspace-scores.csv`, with timestamped notes.
5. Do not publish a winner from one output per model. Use this set to qualify endpoints and design the three-output benchmark.

## Gallery and workspace evidence for later articles

The Live set is the implemented comparison. Later production articles can also point readers to inspectable public Astria examples, without claiming those examples are matched cross-model outputs:

| Production track | Public workspace | Reusable template | Source prompt |
| --- | --- | --- | --- |
| Adult fashion motion | [Dark Swimwear](https://www.astria.ai/w/dark-swimwear) | [Swimsuit Set 1](https://www.astria.ai/p/swimsuit-set-1) | [40584408](https://www.astria.ai/prompts/40584408?ws=368) |
| Beauty packshot | [Beauty](https://www.astria.ai/w/beauty) | [Beauty](https://www.astria.ai/p/beauty) | [45986211](https://www.astria.ai/prompts/45986211?ws=761) |
| Jewelry macro | [Jewelry Product Photography](https://www.astria.ai/w/jewelry-product-photography) | [Jewelry Ring](https://www.astria.ai/p/jewelry-ring) | [33498743](https://www.astria.ai/prompts/33498743?ws=297) |
| Garment packshot | [3D Ghost Packshots](https://www.astria.ai/w/3d-packshots) | [3D Packshots Dress](https://www.astria.ai/p/3d-packshots-dress) | [40128059](https://www.astria.ai/prompts/40128059?ws=268) |

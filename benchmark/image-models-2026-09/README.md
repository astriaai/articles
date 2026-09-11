# Astria image-model benchmark — September 2026

This directory keeps the reproducibility records behind Astria's image-model article family.

## Current public comparison

`reference-comparison.json` is the source of truth for the current public pages. It records:

- Astria workspace `896` (`Articles`);
- Maison Urban source prompt `46557199`;
- the Sloane identity, yellow sleeveless belted dress, and circular-detail gold bag reference provenance;
- the shared semantic prompt, 16:9 request, one-output rule, and endpoint-specific resolution policy;
- model and prompt IDs, original media URLs, actual master dimensions, optimized public derivatives, fidelity notes, and exclusions.

The public comparison includes GPT Image 2.5 Sunburst and Flare, GPT Image 2, Nano Banana 2, Seedream 5 Pro, Muse Image, MAI-Image-2.6, and MAI-Image-2.6-Flash.

## Public evidence rules

- Every generated image shown in the article family must use at least one supplied reference; the current matched comparison uses all three.
- Show the complete reference set before or alongside the results.
- Add `data-source-reference` to every result card.
- State model, prompt ID, requested and actual resolution, and an honest fidelity limitation in each caption.
- Keep semantic prompt, references, aspect ratio, and output count fixed across compatible endpoints.
- Use the highest resolution selector exposed by each endpoint. If a selector or input path is incompatible, record it rather than substituting text-to-image.
- Download and inspect the original before making a web derivative. Never report derivative dimensions as the generation resolution.
- Use workspace `896` for all new article generations.

## Source quality

The dress master is 1440×2160 and the bag master is 1440×2159. Sloane is the disclosed exception: the identity source is only 679×722 and was normalized to a valid JPEG without upscaling. Identity conclusions are directional.

## Archived pilot

`runs.json` and `scores.csv` retain the September 6 pilot for internal audit history. That pilot used workspace `674`, the older Lee cast, and several synthetic products. Its burnt-orange crane jacket source was explicitly rejected for poor reference quality, so jacket-dependent outputs, claims, and covers are not eligible for current public articles.

The archived pilot may explain historical decisions but must not be presented as the current public comparison.

## Asset handling

The original downloads are retained outside the website publication tree. Public files under `static/img/model-benchmarks/2026-09/` are optimized WebP derivatives. The three new masters were downloaded from prompts `46670427`, `46670429`, and `46670430` and visually inspected at their actual dimensions before derivative creation.

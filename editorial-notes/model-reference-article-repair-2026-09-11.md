# Image-model article reference repair — editorial record

Captured: 2026-09-11
Workspace: `896` (`Articles`)

## Audit finding

The older image-model article family mixed valid reference-led results with three forms of weak evidence:

1. a text-to-image-only MAI fashion lead;
2. the explicitly rejected low-quality burnt-orange crane jacket and claims derived from it;
3. result cards that did not show or link the complete input set and omitted prompt or resolution details.

The older identity and complex-reference strips also used the Lee cast and the rejected jacket. They were removed from the scoped articles rather than relabeled as current evidence.

## Replacement benchmark

The repair uses the approved source set already established by `blog/gpt-image-2-5-review.md`:

- Sloane identity: Maison Urban tune `3904080`, Articles tune `5639061`, 679×722 source;
- yellow sleeveless belted dress: Maison Urban tune `3907553`, Articles tune `5639041`, 1440×2160 master, two tune images;
- circular-detail gold bag: Maison Urban tune `3907242`, Articles tune `5639043`, 1440×2159 master.

The Sloane source remains below the preferred 1600px long-edge gate. It was not upscaled; every article discloses the limitation.

The semantic brief is the wording from Maison Urban prompt `46557199`, with only the workspace-specific reference tokens inserted. No “comparison article brief” prefix or text-only fallback was used.

Controls: 16:9 requested, one output, only-output selection rule, highest endpoint-exposed resolution.

## Reused matched outputs

- GPT Image 2.5 Sunburst — prompt `46636365` — 4K requested — 3792×2160 actual.
- GPT Image 2.5 Flare — prompt `46636364` — 4K requested — 3792×2160 actual.
- Nano Banana 2 — prompt `46636366` — 4K requested — 5504×3072 actual.
- Muse Image — prompt `46636363` — native resolution request — 1920×1280 actual; returned 3:2 from 16:9.
- MAI-Image-2.6-Flash — prompt `46636367` — native resolution request — 1365×768 actual.

## New matched outputs

- MAI-Image-2.6 — tune `5605362`, prompt `46670427` — native resolution request — 1365×768 actual.
- GPT Image 2 — tune `4665564`, prompt `46670429` — 4K requested — 3792×2160 actual.
- Seedream 5.0 Pro — tune `5236038`, prompt `46670430` — 2K requested — 2730×1536 actual.

All three new prompts completed with all three reference tunes in workspace `896`. No reference incompatibility or moderation failure occurred.

## Visual QA decisions

All eight only-output masters were downloaded and inspected. Every selected output passed article-size quality and kept Sloane, the dress, and the bag recognizable in their assigned roles.

- Sunburst: strongest diagonal energy; bag reaches the edge and individual disc geometry varies.
- Flare: complete bag and steadier composition; dress pleats and belt wrap vary.
- GPT Image 2: strong direction and garment handling; bag is less prominent.
- Nano Banana 2: clearest accessory scale; individual bag discs and belt geometry vary.
- Seedream 5 Pro: complete look and bag; identity is slightly softened.
- Muse: coherent references; 3:2 return is an explicit canvas incompatibility.
- MAI flagship: strong likeness and reference separation; native output is 1365×768.
- MAI Flash: usable graphic tilt; surface and bag-disc detail are simplified.

Public WebPs are optimized derivatives. Original dimensions are reported from the downloaded masters, not inferred from the derivative files.

## Exclusions

- Burnt-orange crane jacket source and every jacket-dependent article result, claim, comparison, and cover.
- MAI text-only fashion output as public model evidence.
- Pre-correction Sloane prompts `46636293`–`46636297`.
- Any copy that treated the older 131-image pilot as the evidence for the repaired public routing claims.

The historical `runs.json` and `scores.csv` remain internal audit records only.

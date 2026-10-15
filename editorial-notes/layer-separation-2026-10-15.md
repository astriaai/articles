# Layer separation — run record and provenance

Supports `blog/layer-separation-photoshop.md`. All runs 2026-10-15, workspace **896 (Articles)**.

## Source reference

`static/img/model-benchmarks/2026-09/source-sivan-uv-protector-creme.jpg`, 4000 x 6000, the same
rights-cleared product photograph used in the MAI beauty coverage. Every image in the article
descends from it. No text-to-image run was published.

## Runs

| Prompt id | Model | Intent | Result | Published as |
| --- | --- | --- | --- | --- |
| 47287510 | Seedream 5 Pro | Compose a campaign poster from the product reference, 2K, 4:5 | 2048x2048 JPEG composite, label and headline faithful | `layer-separation-composite.webp` |
| 47287866 | Seedream 5 Pro | `prompt[layer_decomposition]=true` set directly on the API request | **One JPEG. Parameter had no effect on the response; no layers, no alpha** | not published |
| 47287617 | Seedream 5 Pro | Natural-language request for independent transparent layers | One JPEG, poster re-rendered largely unchanged | not published |
| 47287644 | Seedream 5 Pro | Isolate the product only | Product on flat white, label and sun motif intact | `layer-separation-product.webp` |
| 47287643 | Seedream 5 Pro | Clean plate, all elements removed and background rebuilt | Gradient and floor reconstructed, no object traces | `layer-separation-cleanplate.webp` |
| 47287787 | Seedream 5 Pro | Isolate headline and subtitle type | Lettering on flat white, typeface/weight/spacing preserved | `layer-separation-headline.webp` |
| 47287788 | GPT Image 2.5 Sunburst | Request a PNG with a real alpha channel | **PNG container, mode RGB, no alpha channel** | not published |
| 47287821 | Nano Banana 2 | Cover: desk still life referencing the composite poster | 2752x1536, lilac-series still life | `static/img/covers/layer-separation-photoshop.webp` |

Every returned file was opened and inspected for dimensions, colour mode and alpha channel before
any claim was written. Alpha was checked programmatically, not by eye.

## Headline finding

The capability is documented by the provider and is **not reachable through the Astria endpoints as
called on 2026-10-15**. Setting `layer_decomposition` on the prompt is accepted by the API and
silently ignored. The article therefore documents the per-element extraction workflow and states
the gap rather than implying the model cannot do it.

## Open items for whoever picks this up

1. **Does the plugin panel expose layer separation?** Not tested here — we tested the API, not the
   UXP panel. The Adobe Exchange listing's changelog reportedly states "Layer separation results are
   placed as organized, masked smart-object groups", while the same listing names only Seedream 5.0
   Lite / 4.5 / 4.0, none of which support decomposition per ByteDance's capability table. Resolve
   that inconsistency before any page points readers at a layer-separation button. The article
   deliberately claims nothing about such a button.
2. **If the endpoint gains the flag**, rewrite the first row of the results table, the third FAQ and
   the second paragraph of the intro.
3. **2K cap.** Layer mode has no 4K path, so a layer-separation asset cannot satisfy the 4K hero
   preference in AGENTS.md. Pair with a normally generated 4K hero if a 4K visual is needed.

## Claims sourced to third parties, with their basis

- Seedream `layer_decomposition` behaviour, 16-layer cap, alpha PNG layers, placement metadata,
  1K/1.5K/2K sizes, single input image, no partial success: ByteDance image generation API docs.
- Background reconstruction behind removed subjects: ByteDance's Seedream 5.0 Pro launch post, i.e.
  product marketing rather than the API specification. Worded in the article as the vendor's claim.
- Adobe Layered Image Editing announced October 2025 and still in development: Adobe's own MAX
  announcement, with absence confirmed against current Photoshop and Firefly feature lists.
- Affinity Scene Decomposition, September 2026, behind a Canva premium plan: Canva's announcement.
- Qwen-Image-Layered, open weights, December 2025: Alibaba's release. Included so the article makes
  no exclusivity claim for Seedream.
- Higgsfield Layer Decompose, June 2026, 1K-2K, adjustable layer count: Higgsfield's own plugin and
  changelog pages. Its web Layers page credits Seedream 5.0; its plugin docs name no engine, and the
  article says exactly that.

Secondary-source claims that were deliberately **not** published: that Affinity's feature is
Seedream under the hood, any Higgsfield 4K layer claim, and any product called "Varo Koneko", which
could not be confirmed to exist and has been dropped from the competitor landscape note's evidence
until a URL turns up.

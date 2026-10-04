# Nano Banana architecture article — research and example production

Prepared 2026-09-17. Article: `blog/nano-banana-photoshop-architecture.md`.

## Delivery status

- Complete research-based article draft, with ten scenarios spanning city/district, neighborhood/campus, roads, buildings, facades, renovations, interiors, details, landscape, conservation, and commercial fit-outs.
- `draft: true` deliberately keeps the unfinished illustrated article out of a production Docusaurus build. No publication or deployment performed. Change the date to the actual publication date when the visual examples are ready.
- Prompts are authored recipes, not claims of successful runs. No architecture generation has been submitted and no model winner is asserted.
- Photoshop 2026 was opened and the installed Nano Banana Pro panel inspected through the real GUI. It displays version **2.0.28** and **Connect Nano Banana** with an Astria API key field. No document is open. This blocks authenticated GUI generations until the user connects the plugin. Do not request a secret in chat or copy credentials from configuration files.
- Local plugin source manifest reads **2.0.29**, so source inspection is evidence about that checkout, not proof that every control is in installed 2.0.28. Capture the authenticated installed UI before finalizing exact control labels.
- Source selection is pending. A question was sent about a project/folder; default production direction is rights-cleared demonstration assets if none is supplied. No unapproved client source has been selected or uploaded.
- Existing unrelated changes, the general Photoshop guide, and CONTENT-LEDGER.md were left untouched.

## Editorial approach

Lead with the architectural decision and the constraint, then the Photoshop action. Progress from an easy material edit to full-view materialization, local detail work, and larger planning applications. All scenarios need supplied image evidence, including the clay example. Use the term “visualization” or “concept image”; explain that “clay to real simulation” is not an engineering or daylight simulation.

The article is an architectural workflow page, separate from the existing general plugin guide and real-estate marketing content. Primary query: `Nano Banana architecture`; secondary queries include clay render to realistic render and changing materials in Photoshop. No search-volume claim was researched or inferred.

Do not inherit the forced-winner posture from the older plugin comparison plan. These examples must describe observed results. Do not use the older general guide's claim that native Photoshop only uses Adobe models.

## Research ledger

All URLs checked 2026-09-17. These are primary sources; the scenario briefs and prompts are original editorial proposals.

| Source | Finding used | Limits |
| --- | --- | --- |
| [Astria plugin page](https://www.astria.ai/nano-banana-photoshop) | Selection/prompt/generate workflow; reference input; returned layers; named model families; PS 26+ | Marketing claims about comparative quality are not benchmark evidence. Landing page still shows older V1.1.75 branding despite the v2 release. |
| [Astria v2 release](https://www.astria.ai/updates/96) | Context capture, aspect matching, uniform placement, mask blending, reference controls, model-aware UI; layer separation | Release documentation, not a hands-on architecture test. Layer separation excluded from core examples because it does not guarantee semantic architectural layers. |
| [Google image generation](https://ai.google.dev/gemini-api/docs/image-generation) | Nano Banana model-family naming; reference editing; resolution differences | API capability does not prove the plugin exposes every control or reference count. |
| [Adobe reference images](https://helpx.adobe.com/photoshop/desktop/create-open-import-images/create-images/use-reference-images-for-consistent-results.html) | Native Photoshop supports partner models and references | Avoid presenting Astria as the only way to use Gemini in Photoshop. |
| [Chaos architecture variations](https://blog.chaos.com/ai-architectural-design-variations) | Independent workflow context: facade materials, massing, interiors, and lighting are architectural visualization uses | Vendor account of another product; does not establish Astria performance. No timings or accuracy claims copied. |
| [Autodesk environmental analysis](https://www.autodesk.com/products/forma-site-design/environmental-impact-analysis) | Distinction between visualization and computed sun, wind, daylight, and microclimate analysis | Do not imply Photoshop performs these calculations. |
| [NACTO neighborhood street](https://nacto.org/publication/urban-street-design-guide/streets/neighborhood-street/) | Street-design context for the road/public-realm scenario | Not a source of exact geometry for a specific site or local approval. No engineering dimensions copied. |

Source inspection: `/Users/burg/git/nano-banana-photoshop-uxp/nano-banana/ui-src/src/App.tsx` contains `Add image`, `Images from disk`, `Current layer`, a workspace switcher, and `Generate with the prompt only`. `main.js` adds a preservation suffix to applicable default requests; it asks to preserve framing, dimensions, viewpoint, colors, white balance, exposure, and lighting. This matters for clay materialization and relighting, and for comparing the actual prompts sent by different model paths.

## Model verification

`astria models --refresh` successfully fetched the server catalog on 2026-09-17. Relevant entries:

| CLI key | Tune ID | Catalog title | Advertised resolution choices |
| --- | --- | --- | --- |
| nano-banana-2 | 4180298 | Nano Banana 2 Pro (Gemini 3.1) | 1K, 2K, 4K |
| nano-banana-pro | 3618064 | Nano Banana Pro (Gemini 3) | 1K, 2K, 4K |
| gpt-image-2 | 4665564 | GPT Image 2 | 1K, 2K, 4K |
| seedream5 | 4160332 | Seedream 5.0 Lite | No resolution list returned |
| seedream5pro | 5236038 | Seedream 5.0 Pro | 1K, 2K |
| flux2pro | 3672206 | Flux 2 Pro | 1K, 2K |
| gpt-image-2.5-sunburst | 5634510 | GPT Image 2.5 Sunburst | 1K, 2K, 4K |
| gpt-image-2.5-flare | 5634511 | GPT Image 2.5 Flare | 1K, 2K, 4K |

The CLI's “Nano Banana 2 Pro” title differs from Google's “Nano Banana 2” naming; retain exact title/ID in run records, use the documented Google family name in prose, and capture the actual panel label. The plugin marketing page's 4K Seedream/5 Pro presentation differs from the curated catalog's 5 Pro list. Do not promise 4K on that route without verifying it in the panel and inspecting output pixels. Use 2K as the initial common comparison setting where supported. A missing list does not prove an output size. GPT Image 2.5 can be an additional comparison after its reference/mask path is verified in the installed panel; a website banner alone does not verify that path.

## Shared project assets

Use a coherent fictional courtyard development and its ground-floor cafe/apartment where possible. This gives the article continuity across scales without pretending to depict a real commissioned project. A neutral model can be authored and rendered conventionally as an original reference; do not generate a text-only AI “before” and call it an architect's source.

| Asset | Required content | Provenance and quality gate |
| --- | --- | --- |
| A — building clay | Three-quarter courtyard view; modeled openings, slab edges, entrance, paving; fixed camera | Original project export or licensed model render; ideally 3840 × 2160; inspect before use |
| B — building baseline | Same geometry/camera with a neutral material pass | Conventional render or accepted reference-driven output with full provenance |
| C — kitchen/interior | Clear cabinet divisions, window, floor, thresholds, furniture | Original or explicitly licensed photograph/render; original long edge at least 1600 px, preferably 4K |
| D — neighborhood model | Oblique development view with street/path/boundary geometry | Original model export; no invented cadastral accuracy |
| E — street proposal | Licensed existing street photo plus a designed perspective intervention overlay | Preserve photographer/license evidence and the original unedited photo |
| F — landscape | Courtyard view with explicit beds and walking routes | Same original model where possible |
| G — material references | Brick, limestone, oak flooring/cabinet finish, bronze screen, planting board | Original samples or permission to reproduce supplier assets; document each image separately |

Do not use search thumbnails, rights-unclear architectural photography, or upscaled low-resolution images. Research links are not licenses to republish images. A procedural reference also needs aesthetic review: clean geometry alone does not make a compelling cover.

## Photoshop example shot list

Every row below is **planned, not run**. The matching article section contains its full semantic prompt.

| ID | Example and source | GUI action to demonstrate | Models to compare | Required result evidence |
| --- | --- | --- | --- | --- |
| E01 | Clay to real; A + material board | Select full image, attach references, choose model/resolution, generate; check preservation behavior | Nano Banana 2, Nano Banana Pro, Seedream 5 Pro | Same-camera clay/output pair; window and roofline crops; candidate hero |
| E02 | Brick vs limestone; B + material refs | Polygonal facade selection, subtract windows, save selection; generate each material from B | Nano Banana 2, Seedream 5 Pro, Flux 2 Pro | Two design options plus source; separate same-material model comparison; corner/window crop |
| E03 | Cabinet oak finish; C + oak sample | Select fronts/end panels; exclude worktop, appliances, backsplash; refine returned mask | Nano Banana 2, GPT Image 2 | Before/after plus hinge/handle/counter edge crop |
| E04 | Floor finish; C + flooring sample | Select floor with furniture cutouts; preserve thresholds; compare independent alternatives | Nano Banana Pro, Seedream 5 Pro | Board direction, perspective, furniture contact-shadow crops |
| E05 | Bronze entrance screen; B detail + pattern | Select infill only; attach reference; compare masked and contextual paths | GPT Image 2, Nano Banana Pro | Complete entrance and 100% frame boundary crop; note any manual repair |
| E06 | Neighborhood courtyard; D + landscape board | Select one public-space area; keep site boundaries and blocks; add references | Nano Banana 2, Nano Banana Pro | Oblique source/result pair; paths and entrances visible |
| E07 | Street redesign; E + material/planting refs | Use designed intervention composite as input; select proposal footprint | Nano Banana 2, GPT Image 2 if compatible | Original street, designed overlay, final concept; crossing/cycle-track continuity crop |
| E08 | Landscape alternatives; F + planting refs | Select beds; leave paths/levels fixed; make independent seasonal variants | Nano Banana Pro, Flux 2 Pro | Fixed-view pair with illustrative-season caption |
| E09 | Day to dusk; accepted B + mood reference | Duplicate source; use prompt-only generation when available; retain geometry constraints explicitly | Nano Banana 2, Nano Banana Pro | Day/dusk pair; readable lighting-change controls; no simulated-performance claim |

E09 prompt: “Use the source image as the authority for geometry and camera. Change the scene to blue-hour lighting, guided only by the lighting mood in the reference. Allow sky color, exposure, reflections, and shadows to change. Illuminate the existing interior fixtures and windows with warm light. Preserve building outline, openings, floor count, materials, furniture locations, perspective, and crop. Do not add fixtures or architectural elements.”

**Suggested capture order:** E03 (easy localized change), E01 (hero transformation), E02 (material alternatives), E05 (detail/model comparison), E06 and E07 (breadth beyond buildings), then E04/E08/E09. Each major scale in the article should have a real example before calling the illustrated article complete. Conservation and commercial fit-out prompts can remain clearly labeled additional recipes if not demonstrated.

## GUI recording recipe

1. User connects the installed plugin. Confirm the exact version, selected model label, and **Articles / workspace 896** in the authenticated panel before the first run. Use the Astria route for article runs so records stay in 896; do not silently use personal scope or Google direct mode.
2. Open the approved source in Photoshop and save a new task-specific PSD. Keep the source untouched; make named groups and saved selections. Keep account credentials/balances out of public screenshots.
3. Capture the source at a readable zoom, then the selection with the plugin panel visible. Show the reference thumbnails, full prompt, chosen model, output count, and resolution. Capture a separate prompt close-up if the whole prompt does not fit.
4. Submit through the real plugin GUI. Capture the completed returned layer, its mask, and the source/result toggle. Retain the embedded original pixels for inspection. Never manufacture a Photoshop panel in an image generator.
5. Capture article-sized before/after exports and 100% detail crops. Keep the frame and document zoom identical for comparisons. Save the PSD with named layers and a separate clean export.
6. Record any masking, color correction, or retouching. Show raw versus composited output when their difference affects the claim. A CLI experiment may qualify a model, but cannot stand in for evidence of a GUI operation.

## Comparison protocol and audit record

All new article generations must use **Astria workspace 896 (Articles)** and at least one supplied image reference. The source canvas is part of that input; material/product references add further evidence. No text-only examples or covers.

For each same-task model comparison, freeze source bytes, reference order, semantic prompt, selection, visible source layers, aspect ratio, resolution where compatible, and output count. Use one output per model for the first pass. Log retries and all rejected outputs. If rerunning a comparison with a revised prompt, rerun every compared model under the revised protocol.

Verify the actual prompt augmentation, captured crop, and mask routing per model. An identical visible prompt does not establish identical upstream inputs when the plugin adds a preservation suffix or uses different mask/context paths. Label such a comparison as end-to-end plugin behavior; do not claim an isolated underlying-model ranking. Record incompatibility rather than substituting a text-only input.

Use 2K or higher where supported, and prefer 4K for the hero and full-width comparisons where every compared route supports it. Inspect actual output dimensions; record a separate maximum-resolution demonstration if a common 4K comparison is impossible. Do not upscale a weak result to pass the gate.

Each run record should contain:

```json
{
  "example_id": "E01",
  "status": "planned",
  "workspace_id": 896,
  "photoshop_version": null,
  "plugin_version": null,
  "model_label": null,
  "model_id": null,
  "prompt_id": null,
  "source_files_and_sha256": [],
  "reference_files_in_order": [],
  "reference_provenance_and_license": [],
  "source_dimensions": null,
  "visible_layers_and_selection": null,
  "semantic_prompt": null,
  "effective_prompt_and_preservation_mode": null,
  "mask_and_context_path": null,
  "requested_resolution": null,
  "returned_dimensions": null,
  "aspect_ratio": "16:9",
  "output_count": 1,
  "output_files": [],
  "manual_cleanup": null,
  "geometry_check": null,
  "reference_fidelity_check": null,
  "article_size_visual_review": null,
  "selected_for_publication": false,
  "selection_or_rejection_reason": null
}
```

Record actual aspect ratio per source; 16:9 is only the proposed initial setup. Keep charges, timing logs, rejected low-resolution runs, and failed outputs in internal records. Never copy prices, credit quantities, or benchmark charges into the article, captions, metadata, or FAQs.

## Publication gate

- Visually review every selected source and generated output. Both article-size appeal and architectural/reference fidelity must pass. Inspect openings, floor count, roofline, grain/bond/module direction, contact shadows, edge seams, and geometry outside the target.
- Add only genuine GUI screenshots and accepted reference-driven outputs. Hero: aligned clay/materialized split from E01, composed from actual exports, with no invented interface. Show the plugin in a separate real screenshot if it is too small in the hero.
- Captions identify the source, specific edit, model, output resolution, and any cleanup. Avoid “best,” “exact,” or speed/savings claims without measured evidence.
- Revise model-selection guidance to reflect the observed results. Keep compatibility failures and weak results in internal notes; do not feature them as article examples.
- Remove draft status only after the selected examples are integrated, link/media checks pass, and the desktop/mobile layout is reviewed. Update date and add a ledger row at publication: primary query `Nano Banana architecture`, volatile F/M, next review 2026-12-17 (adjust if publication moves).
- Existing guide correction needed separately: its statement that native Photoshop uses only Adobe models is stale. It was already modified by another task, so no edit was made here.

## Validation completed

- Article MDX compiled with GFM support after removing the Docusaurus truncate marker in the standalone compile check; 3,194 whitespace-delimited words and ten numbered scenarios.
- `npm run build -- --out-dir /private/tmp/astria-architecture-article-build` passed. The new draft is absent from the production route and sitemap, as intended. This production build does not render the draft; the separate MDX check validates its syntax.
- Checked draft status, absence of numeric pricing in public copy, scenario coverage, and whitespace in both new files. `git diff --check` passed for the checkout's tracked changes as well.
- Build warnings concern existing untruncated posts, Git dates for untracked files, Node localStorage, and the Docusaurus update-check store. None prevented the build.
- Visual article layout review remains pending until examples are integrated. No generation, screenshot production, benchmark, commit, push, or deployment is claimed.

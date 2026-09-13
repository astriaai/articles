# Nano Banana Photoshop plugin — competitor landscape

Internal note, researched 2026-09-13. Not a blog post. Every claim carries a source URL and the month it was read; items the research could not confirm from a primary source are marked *unverified*. Prices are USD unless stated; Gumroad prices rendered in ILS were converted approximately.

## Summary

- **Adobe has closed the headline gap.** Since Photoshop 27.0 (Oct 2025) Generative Fill has a model picker, and Nano Banana 2, Nano Banana Pro, FLUX.2 pro and FLUX.1 Kontext are in it natively. "Nano Banana in Photoshop" is no longer a reason to install anything. Adobe owns the head-term SERP.
- **Adobe has not closed four gaps we live in:** output resolution and quality parity with Google's own surface (documented user complaints, no fix timeline), a usable price for Photoshop-only subscribers (25 credits/month), GPT Image and Seedream inside Photoshop (Firefly-web only, or absent), and BYOK.
- **The direct plugin field fragmented in twelve months.** Adobe Exchange returns 29 results for "nano banana". Pricing has converged on $7–$20 one-time plus bring-your-own-key. Two brand-backed plugins (Higgsfield, Jun 2026; Magnific) compete on subscription breadth rather than model choice. The closest like-for-like is **Pablo** ($19 + pass-through credits, 4.4★, active SEO).
- **Our documented weakness is the "$9 then credits" surprise.** Our Exchange listing sits at 2.7★ from 10 ratings, and every 1-star review cites needing credits after buying the plugin. Pablo draws the same complaint; BYOK-only vendors (Medicraft, Creator MAX, PhosGen, Erect Banana) market explicitly against it.
- **Our documented strengths:** the widest hosted model roster in a single panel (GPT Image 2 with mask, NB2, NB Pro, Seedream 5 and 5 Pro, Flux 2 Pro), both billing paths, 16,000 sales on the landing page, first place on "gemini photoshop plugin" and second on "nano banana photoshop plugin".

## Astria baseline (what we are positioning against)

Source: <https://www.astria.ai/nano-banana-photoshop> (fetched 2026-09-13, panel v1.1.75, build 4665564), Adobe Exchange listing ee0f4287, and the internal support FAQ.

| Axis | Astria Nano Banana plugin |
| --- | --- |
| Form | CCX/UXP panel, Photoshop 2025 (v26+), macOS + Windows. Older JSX script (Replicate-billed) still exists for legacy users; the CCX build is the maintained one. |
| Models in panel | GPT Image 2 (OpenAI, mask-aware, 1K/2K/4K), Nano Banana 2 (Gemini 3.1), Nano Banana Pro (Gemini 3 Pro), Seedream 5 Pro (4K), Seedream 5 (4K edit), Flux 2 Pro (via fal). Flux Kontext was removed. |
| Edit surface | Marquee / lasso / brush / color-range selection, prompt, result lands as a new layer. Mask-aware models read the selection directly; reference images dropped in the panel act as visual instructions. |
| Billing | $9 one-time for the plugin. Generations pay-as-you-go against an Astria key (top-up only, no subscription, no minimum) **or** BYOK Google AI Studio key for Gemini calls (billed by Google). $2 starter credit on upgrade from the JSX script. No refunds. |
| GPU | None; all cloud. |
| Social proof | Landing page: "187 ratings · 16,000 sales". Exchange: published 2025-10-01, v1.1.91 (2026-05-11), 2.7★ / 10 ratings. Seven use-case reels: fashion refs, bridal retouch, sketch/CAD to photo, product design, real estate, hair/clothing swaps, packaging. |
| Known support friction | Upstream timeouts; distorted results on small or irregular selections (advice: bigger rectangular selection, switch model); confusion between the $9 plugin and separate generation credits; users assuming a consumer Gemini subscription can be used (it cannot, API keys only). |
| Housekeeping flags | Landing page shows v1.1.75 while Exchange shows v1.1.91. The pricing page returned the login screen to two unauthenticated fetches on 2026-09-13, so a prospect may not see per-image prices before buying; Pablo publishes its pass-through rates openly. Landing page calls the product "Nano Banana Pro 2", a name Google has never used (Runway and an indie clone use it too). |

## Tier 1 — the incumbent: Adobe's own Generative Fill with partner models

This is the competitor that matters. A buyer who already pays for Photoshop can pick Nano Banana without installing anything.

**What ships natively today (Photoshop 27.11, helpx updated 2026-09-10)**

| Picker entry | Owner | Credits per use | Notes |
| --- | --- | --- | --- |
| Firefly Fill & Expand (default since 27.3.1, Feb 2026) | Adobe | 1 (standard) | 2K output; "commercially safe" badge |
| Firefly Image 5 | Adobe | 10 (premium) | |
| Firefly Image 1 | Adobe | 1 | legacy |
| Gemini 3.1 / Nano Banana 2 | Google | 20 (1K, 2K) / 30 (4K) | added 27.6, Apr 2026; up to 6 reference images |
| Gemini 3 / Nano Banana Pro | Google | 40 ("limited time") | added the day Google launched it, Nov 2025 |
| FLUX.2 pro | BFL | 20 | added 27.2, Dec 2025; up to 3 refs |
| FLUX.1 Kontext [pro] | BFL | 10 | since 27.0 |
| ~~Gemini 2.5 Flash Image (original Nano Banana)~~ | Google | — | removed in 27.11 (Sep 2026); Google sunsets it 2026-10-02 |

Sources: <https://helpx.adobe.com/photoshop/desktop/create-open-import-images/create-images/edit-images-with-generative-fill.html> (Sep 2026); <https://helpx.adobe.com/creative-cloud/apps/generative-ai/non-adobe-models-in-adobe-products.html> (Sep 2026); <https://www.cgchannel.com/2026/04/adobe-releases-photoshop-27-6/>; <https://blog.adobe.com/en/publish/2025/11/20/google-gemini-3-nano-banana-pro-firefly-photoshop>.

Since 27.8 (Jun 2026) the same picker also drives Generate Image, and a Custom Models beta exists. Photoshop web and mobile have Generative Fill/Expand but no documented model picker. Partner models return one variation per generate versus three for Firefly.

**Not in Photoshop, only in the Firefly web app / Boards:** every GPT Image version (GPT Image 2 and 2.5 are Firefly-only), Runway Gen-4, Luma, Kling, Seedance. Ideogram, Pika and Imagen were deprecated from Firefly in spring 2026. **No Seedream model anywhere in Adobe's stack.**

**How Adobe charges for it**

- One credit pool per plan; partner models are always "premium". Photoshop single-app subscribers who signed up after 2025-06-17 get **25 credits/month** (was 500). Creative Cloud Pro gets 4,000, the Photography plan 1,000. Hard enforcement since Jun 2025; no rollover. <https://helpx.adobe.com/creative-cloud/apps/generative-ai/generative-credits-faq.html> (Sep 2026)
- Top-up packs: 2,000/$9.99, 7,000/$29.99, 10,000/$49.99, 50,000/$199.99 per month. <https://www.adobe.com/ai/overview/generative-credits.html>
- Worked example: a Photoshop-only subscriber gets **zero or one Nano Banana Pro fill per month** before buying a pack. A 2,000-credit pack ($9.99) buys about 50 NB Pro fills or 100 NB2 fills. That is the wedge for a pay-as-you-go plugin.
- Firefly Pro Plus/Premium advertise "unlimited generations on all image models" in the Firefly app; whether that extends inside Photoshop is *unverified*.

**Where Adobe's implementation is weak (documented, not our opinion)**

- **Resolution.** Adobe's Photoshop gen-AI FAQ still says Firefly returns 1024×1024 to Photoshop; Fill & Expand raised Firefly to 2K, but partner models "don't necessarily benefit". A community thread reports NB Pro output in Photoshop as "significantly worse" than Gemini web (soft ~1280×720 versus 2752×1536), with no Adobe fix timeline. <https://community.adobe.com/questions-712/why-is-the-quality-of-nano-banana-pro-generation-in-photoshop-significantly-worse-than-in-the-web-version-of-gemini-3-will-it-be-fixed-1551410> (Feb–Apr 2026); <https://photoshopcafe.com/how-to-use-gemini-3-nano-banana-pro-in-photoshop/> (Nov 2025)
- **Reliability and credit burn.** A "program error" bug thread for NB Pro where one user burned about 2,000 credits on failed generations; a 7,000-credit/month user calls it "unusable". <https://community.adobe.com/bug-reports-711/nano-banana-pro-in-photoshop-could-not-complete-your-request-because-of-a-program-error-works-intermittently-very-slow-fails-most-times-1550456> (Feb 2026)
- **Moderation.** A 1,392-reply bug thread of false "violates user guidelines" flags (bikini, studio model, the word "explosion"). Adobe reviews prompts and outputs by automated and manual means. <https://community.adobe.com/bug-reports-699/p-generated-images-violate-user-guidelines-667663>
- **Enterprise gating.** Teams and enterprise seats need an admin to enable partner models; availability "may vary by country or region".
- **Commercial-safety split.** Adobe's own framing: Firefly is "the only model that meets Adobe's criteria for commercial safety"; partner outputs are "You decide", excluded from Firefly IP indemnification, badged "Cr" rather than "Fi", and "Partner models may store generated content before returning it to Adobe" (security fact sheet, Mar 2026). Neutral for us (we offer no indemnification either), but it stops Adobe marketing partner models as the safe default, which keeps them a power-user choice.

**Adobe's stance on plugins like ours.** The Gen AI product terms carve Exchange plugins out of the partner-model regime (§7.1, Apr 2026). Marketplace review guidelines for AI plugins require content filtering and no destructive actions without consent, but nothing bars calling external AI APIs. No Adobe statement restricting UXP plugins that call external models was found (*absence of evidence*). The risk is policy, not technical. Google's I/O 2026 demo of Gemini driving Photoshop agentically (pricing and ship date undisclosed) is the thing to watch on this axis. <https://www.digitalcameraworld.com/tech/artificial-intelligence/google-gemini-will-soon-be-able-to-edit-photos-for-you-across-lightroom-and-photoshop-and-videos-in-premiere-as-adobe-continues-agentic-ai-push> (May 2026)

## Tier 2 — direct competitors: third-party panels that route a selection to external models

Adobe Exchange search for "nano banana" returns 29 results (Sep 2026). Grouped by billing model, because that is the axis buyers argue about in reviews.

### 2a. Hosted-credit or hybrid panels (our exact shape)

| Product | Models | Integration | Billing | Platform | Traction |
| --- | --- | --- | --- | --- | --- |
| **Astria** | GPT Image 2 (mask), NB2, NB Pro, Seedream 5 / 5 Pro, Flux 2 Pro | selection to layer, references, 1K–4K | $9 one-time + Astria PAYG credits, or BYOK Google | UXP, PS 26+, Mac/Win | 16,000 sales (site); Exchange 2.7★/10 |
| **Pablo** (Amsterdam) <https://trypablo.com> | NB, NB2, NB Pro, Seedream 4.0/4.5, GPT Image 2 and 2.5 Flare/Sunburst (changelog 2026-09-11) | selection to layer, multi-reference (users ask for more than 4), 4K | $19 individual / $325 agency (50 seats) one-time + pass-through credits (NB ~$0.04, NB Pro $0.15–0.17, Seedream $0.03, GPT Image 2 $0.02–0.13); 50 free gens; optional BYO Google/Replicate key; 1★ review alleges credits expire after 90 days | UXP, PS 26+, Mac/Win, "works without CC subscription" | Exchange 4.4★/27, published 2025-12-04, v0.7.46; active blog/SEO |
| **AI Lab UXP** (Picture Instruments, DE) <https://picture-instruments.com> | NB 1/2/2 Lite/Pro (1K–4K), GPT Image 1.5 + 2, Flux 1 & 2, Seedream 4/4.5 (4K) | create + edit, aspect-true selection fill, 2 refs, prompt history and assistant, cost hints | subscription, vendor-hosted tokens, no keys: $16/mo (700), $32 (1,600), $60 (3,200); 6× rollover; covers standalone app too | UXP, PS 25.2+, Mac/Win | Exchange 3.6★/5, published 2026-01-29, v1.6.0 (Aug 2026); covered by John Paul Caponigro, PhotoshopCAFE |
| **Origin AI / Origin AI BYOK** (GeminiPlugin AI, CN) <https://geminiplugin.com> | Gemini 2.5/3.1 Flash, 3 Pro; GPT Image 2/2.5; Seedream 5.0; FLUX 2; Real-ESRGAN, GFPGAN, RMBG | edit + "agent turns" | hosted $11.99/$16.99/$26.99 per month with credits; BYOK lifetime $39.90, device-activated | UXP, PS 24+, EN/ZH | published 2026-08-10, 0 ratings |
| **Review Spaces – AI Tools** (reviewspaces.ai) | Gemini/NB, GPT Image, Seedream, Magnific, Grok Imagine | Editor / Director (camera angle) / Variations / Upscaler; team credit admin | prepaid credits €10/100 to €100/1,000, valid 180 days | UXP | Exchange 4.5★/15, v2.7.2 (Aug 2026); archviz-focused; reviews say credits burn fast and model choice is unclear |
| **Varo Koneko** (Varoriya) | Seedream 5 Pro (incl. layer decomposition), NB Pro, GPT Image 2 | inpaint to Smart Object with feathered mask, 2 refs | free install + free daily "coins", optional top-ups | UXP, PS 24+ | v0.3.1 (Aug 2026); 5.0★/3 (reviews read promotional) |
| **Higgsfield Plugin for Photoshop** <https://higgsfield.ai/plugins/photoshop> | own hosted tools only (sketch-to-image, Layer Decompose, Restyle, Angles, Mockup Studio, Expand, Remove BG, Relight, face/character swap, Upscale); underlying models not named | tool-based, not model-based | Higgsfield account: Starter $19/270 credits, Plus $59 ($47 annual)/1,200, Ultra $129 ($99)/3,000, no rollover (*prices secondary*) | UXP, PS 2024+, Mac/Win | launched 2026-06-15; heavy YouTube coverage; not BYOK |
| **Magnific plugin for Photoshop** (Magnific, formerly Freepik) | no model selection ("Magnific chooses") though the web app lists NB2, NB Pro, Seedream 5, Flux 2, GPT Image 2 | generate, reframe, relight, upscale, BG removal, skin, stock | plugin free; needs Premium $20/mo (annual $14.50), Premium+ $45, Pro $280; every plugin generation burns credits even on "unlimited" web plans; no cost preview | PS 26+ | reviewed 2026-08-28 <https://www.therundown.ai/tools/magnific-plugin-for-adobe-photoshop> |

### 2b. BYOK-only panels (no hosted billing at all)

| Product | Models | Integration | Price | Platform | Traction |
| --- | --- | --- | --- | --- | --- |
| **Nano Banana Generative Fill** (Medicraft) <https://aescripts.com/nano-banana-generative-fill-for-photoshop/> | NB 1, NB2, NB2 Lite, NB Pro (Gemini only) | selection inpaint, refs, new layer or in place, edge-feather helper, prompt library, recordable as Actions | $9 one-time, BYO Gemini key; warns Google ended the $300 trial for the Gemini image API on 2026-03-26 | UXP, PS 22.2+ | Exchange 2.8★/32 (14×5★, 17×1★ mostly "doesn't work"/quota errors); published 2025-09-19, v2.3.0 (Jul 2026); widely pirated; **ranks #1 for "nano banana photoshop plugin"** |
| **Creator MAX** (ex Banana MAX, Bielfor LLC) | NB Pro/NB2/NB to 4K, GPT Image 2 (low/med/high), xAI Grok Imagine | "Lock Edges" inpaint, up to 4 variations as grouped layers, 14–15 refs, prompt enhance, Search grounding, thinking level, visual history with per-generation cost, spend dashboard, Actions, multi-doc | $49.99 one-time; BYO Google/OpenAI/xAI keys, "no server in path" | UXP, PS 26+, Mac/Win | published 2026-02-27, v2.1.2 (Sep 2026); 5.0★/1. Feature-richest BYOK panel |
| **Cubby Image** (CubbyTools, Gumroad) <https://cubby.taktlos.net> | ~20 via Replicate, fal, Gemini: NB2/Pro, GPT Image 2, Seedream 5 Lite, FLUX.2 Pro, Qwen Image Edit, Reve Edit, Topaz/Crystal upscalers, BG removal | generate, selection inpaint, refs from selection/layers/upload, upscale, BG removal | ~$14 one-time; BYO keys; Figma version $14, bundle $21 | UXP, PS 26.10+; Figma | Gumroad 19 ratings, 365 sales; recommended in the Adobe Community thread |
| **Prompt Fix** (fargenstudio, Gumroad) | NB2/Pro, Seedream, Flux Kontext Pro/Max, Flux 2, Qwen Image Edit; v4 adds a ComfyUI custom node for local workflows on a selection | selection edit, variants, 3 refs, new layer or doc, Topaz/Bria upscalers | ~$8 one-time; BYO Replicate or fal key; 7-day refund | UXP/CCX | Gumroad 7 ratings |
| **Eti Image** (Pouya Eti / Rangy) <https://university.pouyaeti.com/eti-image-photoshop-plugin> | 27 models: Seedream 5 Pro/Lite/4.5/4, NB2/2 Lite/Pro, GPT Image 2/1.5, Flux 2 Pro/Max/Klein, Kontext, Qwen, WAN 2.7; plus Magnific relight/expand/upscale/skin, Topaz, Crystal | inpaint with auto mask, refs, parallel multi-model generation, 4K, 16× upscale, "Product Views" generator | $30 Core / $60 Pro one-time; BYO Replicate, Kie.ai or Google key; 14-day refund | CCX/UXP, PS 2023+, Mac/Win | v3.0.0 Aug 2026; claims 2,100+ creators / 157k images (*vendor-stated*); strong YouTube channel; **owns much of the "seedream photoshop" SERP** |
| **NanoBridge** (Artem Yurchenko) | NB, NB Pro, NB2 | t2i, inpaint, img2img, 4K upscale, refs from layers, search grounding | $11 one-time; BYO paid Gemini key | UXP, PS 26.5+ | published 2026-01-13, v1.1.1 (Mar 2026); 3.7★/3 |
| **PhosGen** (spirossorips, GR) | NB, NB Pro, NB2 + Imagen 4 | selection fill to masked layer, 1–5 variations, reference layer, presets recordable as Actions, **folder batch tab with export**, Flex Tier (50% cheaper, slower), cost hints | $14/yr; BYO Google key | UXP, PS 26+ | published 2026-04-28, v1.0.0; 0 ratings. Only competitor with real batch |
| **Erect Banana** | Gemini 2.5 / 3.1 Flash / 3 Pro via AI Studio, Vertex, OpenRouter or a China relay | feathered gen fill, outpaint/extend canvas, "Harmonize" light matching, 1 ref; 8-language UI | $9.60 one-time; BYOK | UXP, PS 24.2+ | published 2026-06-25, 0 ratings; Chinese-origin |
| **Nano Banana Studio** (Oussama Touzni) | Gemini t2i + layer edit | refs/selections, aspect ratios, usage panel | $7 one-time; BYO Google key | UXP, PS 23.3+ | published 2026-01-27, 0 ratings |
| **Gemini AI Photoshop Plugin** (Michael Breitung) <https://mibreit-photo.com> | NB v1/Pro/v2 + GPT Image 2 via OpenRouter | selections 1:2–2:1 up to 4K, 5 parallel jobs, refs | €9.50, BYO key (~$0.04/request) | PS 2024+ | Fstoppers 2026-05-31 ("scarily good"); landscape-photographer audience |
| **Aslanana** (Aslan Studios, EU) | Flux Pro/Max, NB, Seedream 4, Qwen, Ideogram, Imagen, Recraft SVG; video (Veo 3, Kling 2.5, WAN 2.5); face swap, skin fix, "Camera View", Product Studio | breadth over depth | €29+ one-time or €9/mo; Replicate key | *plugin type unverified* | v4.3 (Sep 2026); weekly updates; TikTok presence |
| **Generative Layer Toolkit** (Marko Luft) | Flux Dev/Pro/Schnell, Kontext, Seedream, NB | "paint area + micro-prompt" | $0.95/mo; BYO fal key | UXP, PS 25+ | published 2025-09-04 (one of the earliest); v1.1.2 (Oct 2025); 3.0★/4 (layer offset bug); appears stalled |

### 2c. Legacy JSX/ExtendScript scripts (the segment we migrated away from)

| Script | Models / route | Price | Notes |
| --- | --- | --- | --- |
| AI Vision Plugin <https://nanobanana-ps.com> | NB, Flux Kontext, GPT Image 2; Replicate ($10 min) | $8 (was $9.90) | JSX, PS CC 2020+; refs Mac-only; claims "108,022 purchased" (*implausible, unverified*); ranks #4 on "nano banana photoshop plugin" |
| jsxNanaBananaPro (lor4ik, Gumroad) | Gemini 2.5 Flash, 3 Pro, 3.1 Flash/Lite direct | ~$14 | runs even in CS4; v0.7.0 (Jul 2026); YouTube demos |
| NANO BANANA x GEMINI (Martín CQ, Peru) | Gemini 2.5 Flash / 3 Pro | ~$5.5 | Spanish UI; 4 variations, 3 refs, 4K on Pro |
| Blue Plugin (Nxblu / Zexo) <https://blueplugin.com> | NB, Flux Kontext, Seedream 4.0 | was $8 on Gumroad (now 404); billing *unverified* | runs an SEO domain network (blueplugin.com, nanobananaplugin.com, nanobananascript.com share one title) |
| Owl Studio (Marketing Owl) | NB, Seedream 4, Flux Kontext; Replicate | ~$4.6 | near-identical copy to open-source scripts |
| **Nano Banana Photoshop Plugin (Apparala Sandesh, Gumroad)** | ships "3 versions": old Replicate script, a UXP plugin, a Gemini script | ~$3.7 | **Listing copy is verbatim Astria marketing ("sent to Astria models… 4 cent"). Likely unauthorised redistribution of our plugin. Takedown check.** |
| Nano Banana plugin for Photoshop + Clip Studio (이승석, Gumroad) | Gemini 2.5/3 Pro, Seedream 4.0/4.5/5.0 Lite, Seedance, Pixazo API | ~$8.3 | v2.0 became an external app that saves into PS, Clip Studio, Blender, Maya |
| Rob de Winter Flux Kontext + Nano Banana JSX | Replicate | free Aug 2025, then $9 | the script lineage that became Astria's plugin; Gumroad and site pages now 404 (*lineage from Adobe Community thread, secondary*) |

### 2d. Open source (power users, zero revenue, but they set expectations)

| Repo | Stars | Route | Status |
| --- | --- | --- | --- |
| NimaNzrii/comfyui-photoshop | 1,746 | UXP to local ComfyUI, ComfyUI Cloud | v1.9, commit 2026-08-19; Exchange listing stuck at v1.0.0 (Apr 2024), 4.2★/23 with recent "doesn't work" reviews; README points to a successor "Reezee AI" (*unverified*) |
| jeffgyf/nano-banana-ps-plugin | 60 | UXP, Gemini key, selection inpaint + ref to layer | created 2025-09-07, dormant since 2025-09-09 |
| Arabianaischool/nanobananaphotoshop | 27 | JSX via OpenRouter | Sep 2025 |
| Ginolazy/ComfyPanel | 23 | UXP, local ComfyUI, RunningHub, BizyAir cloud, "NanoBanana engine"; free Community / paid Pro | push 2026-09-11; EN/ZH |
| MehranMarxian/OpenLayer | 19 | UXP to local ComfyUI (Flux.2 Klein, Flux Fill, Z-Image Turbo, Krea-2, SD); 13 tools incl. inpaint, outpaint, unflatten-to-layers, live paint | v0.30.0-alpha 2026-09-10; fast-moving |
| lonelypx/Nano_Banana_Photoshop | 12 | JSX, Replicate (NB, Kontext) | Sep 2025 |
| bastonus/NanoBanana-Photoshop-plugin | 11 | UXP, Google direct, 1–8 variations, refs, presets | Dec 2025–Jan 2026 |
| wuji419-bit/OpenAI-PS | 11 | UXP, gpt-image-2 default; generate, ref edit, selection repaint, outpaint, cutout | v0.1.297 (Jul 2026), push Aug 2026 |
| jparkerweb/replicate-ai-models-for-photoshop-plugin | 0 | JSX, 8 Replicate models | push May 2026 |

### 2e. Discontinued (why the field looks the way it does)

- **Stability AI official plugin / Christian Cantrell's plugin**: Cantrell left Stability in Mar 2023 (now at Reve); the Stability Photoshop integration docs page is empty and no Stability listing appears on Exchange. No formal sunset notice; effectively dead.
- **Auto-Photoshop-StableDiffusion-Plugin** (AbdullahAlfaraj): 7,297★, last release Dec 2023, last push Apr 2024; issues report Photoshop incompatibility through Aug 2025.
- **stable.art** (isekaidev): 1,151★, last push Aug 2023.
- **Alpaca**: acquired by Captions, sunset 2024-11-28.
- **flying dog for SD & DALL-E 2**: Exchange $55, last update Nov 2022, 3.3★/26 with 2024 "not compatible" reviews.
- **Stupor** (kedCODE): Stability API panel, v2.0.0 May 2025, nothing since.
- **Nano Banana Saifs AI**: companion-app plugins, 2.0★/1 and 1.5★/4, capped at PS 27.0.

The pattern: the 2022–2024 generation (local Stable Diffusion bridges, Stability's own panel) died with the models. The 2025–2026 generation is thin BYOK wrappers around Google's API, and they churn: half the Exchange listings above have zero ratings and one release.

### 2f. Adjacent: plugins that wrap Adobe's own partner models

- **Tiny Tools – Generative Fill** (Picture Instruments, free, PS 25.2+, v1.3.0 Jun 2026): Firefly 5 / Flux 2 / NB2 through Photoshop's own credits.
- **Bulk AI Image Creator** ($9.99/mo): CSV batch across eight native models. Batch is a gap in our panel that even Adobe-credit wrappers are filling.

## Tier 3 — the supplier: Google's own Nano Banana surfaces

Google is not a competitor for "inside Photoshop", but every Google surface is a free or near-free substitute for a buyer willing to round-trip. It also sets the floor price for BYOK.

**Model line-up and API list price (Gemini API pricing page, updated 2026-09-11)**

| Model | API id | Per image | Status |
| --- | --- | --- | --- |
| Nano Banana 2 | gemini-3.1-flash-image | $0.045 (0.5K) / $0.067 (1K) / $0.101 (2K) / $0.151 (4K) | GA May 2026 (4K preview) |
| Nano Banana 2 Lite | gemini-3.1-flash-lite-image | $0.034 (1K) | shipped 2026-06-30 |
| Nano Banana Pro | gemini-3-pro-image | $0.134 (1K/2K) / $0.24 (4K) | GA May 2026 |
| Nano Banana (original) | gemini-2.5-flash-image | $0.039 | deprecated, sunset 2026-10-02 |

Batch API is half price. No free tier on the API for image models. No newer image model exists as of the 2026-09-03 changelog; "Nano Banana Next / 3" exists only on SEO sites. <https://ai.google.dev/gemini-api/docs/pricing>; <https://ai.google.dev/gemini-api/docs/changelog>

**Consumer surfaces (all round-trip, none layer-aware):** Gemini app (free tier about 20 NB2 images/day, watermarked; NB Pro paid only; AI Pro $19.99 for 4× limits, *third-party figures*), AI Studio, Flow (absorbed Whisk on 2026-04-30; has a lasso region edit), Google Photos restyle, Slides/Vids "Edit image", Canva as a Gemini Connected App with Magic Layers (May 2026).

**What this means for BYOK.** A BYOK user pays Google $0.067 per 1K NB2 edit and $0.134 per NB Pro edit. Our pay-as-you-go margin on Gemini calls has to be justified by abstraction: one key for six models, retries, no Google billing setup. The support FAQ already pushes credit-sensitive users to BYOK, which is right for retention even at zero margin.

## Tier 4 — substitutes outside Photoshop

**Aggregator canvases with a mask (do the edit, lose the layers)**

| Product | Nano Banana access | Mask / inpaint | Layers | Own PS plugin | Price signal |
| --- | --- | --- | --- | --- | --- |
| Magnific (Freepik, rebranded 2026-04-28) | NB2, NB Pro, Flux.2, Seedream 5, GPT Image (30–41 models) | yes ("Sketch to image" paint-over) | stacked generations | **yes** (see 2a) | Premium $20 metered; Premium+ $45 "unlimited" NB2 1K / NB Pro |
| Higgsfield | NB Pro "Banana Inpaint" | yes | no | **yes** (see 2a) | ~$0.07/NB Pro image on $19 Starter |
| Krea | NB, NB Pro, Kontext + 150 models | yes | not evidenced | no (ChatGPT, Figma only) | $9 / $35 / $105 |
| Leonardo (Canva) | NB Pro 140 tokens (1K/2K), 250 (4K) | yes (Canvas Editor) | no | no | free / $12 / $30 / $60 |
| Dzine (ex-Stylar) | NB Pro, "NB2 Flash", Seedream | yes | **yes** | no | $4.49–$74.99 |
| Weavy / Figma Weave | NB, Seedream, Flux, Ideogram nodes | yes (node) | compositing nodes | Figma-native | NB Pro = 15 credits |
| Flora | NB2 / NB Pro unmetered on Pro/Max (promo) | *unverified* | *unverified* | no | Starter $18, Pro $50, Max $200 (repriced 2026-09-12) |
| OpenArt, Pixlr, Fotor, Playground, ImagineArt, Runway | NB / NB Pro / GPT Image 2 | partial (chat-style) | Playground and Pixlr main editor yes | no | credits |
| Invoke 6.13 | BYO-key Gemini 2.5/3/3.1, Seedream 3–5 Lite, GPT Image, Qwen | **disabled** for external models | yes | no | open source |
| Photoroom | NB "for select features" in a commerce pipeline | proprietary | no | no | subscription |

Sources: <https://www.magnific.com/pricing>; <https://higgsfield.ai/blog/Top-Editing-Tool-in-2025-Nano-Banana-Pro-Inpaint>; <https://www.dzine.ai/tools/nano-banana-pro/>; <https://flora.ai/blog/a-new-pricing-model-for-flora-plus-nano-banana-on-us> (Sep 2026); <https://invoke.ai/releases/version/invokeai-6-13-0/> (May 2026).

**Other host apps (the retoucher who is not on Photoshop)**

- **GIMP — Dream Prompter** (Josh Ellithorpe, MIT, Sep 2025, 151★): Replicate-backed, twelve models including NB, NB2, NB Pro, Seedream 5 Pro, GPT Image 2, Flux 2 Pro; results land as named layers. The closest free analogue to our plugin, on a host we do not serve. <https://github.com/zquestz/dream-prompter>
- **Affinity (Canva)**: native Generative Fill needs a Canva premium plan, model unnamed. Third-party **Rangy** desktop app runs GPT Image 2, NB Pro, Seedream 4.5 on your own key and pastes back into Affinity as a layer via clipboard, ~$0.03–0.09/image, no subscription. <https://rangy.ai/blog/affinity-generative-fill/> (Aug 2026)
- **Krita AI Diffusion (Acly, 10,574★)**: request for Gemini/Nano Banana closed "not planned" (Sep 2025); Flux 2 klein and Z-Image only. <https://github.com/Acly/krita-ai-diffusion/issues/2001>
- **Figma**: native "Make Image" on Gemini 2.5 Flash Image (Google Cloud partnership, Oct 2025) plus a crowd of community plugins (Fignana, Akanano, "Nano Banana Pro AI"). Figma is where the designer persona already gets Nano Banana for free.
- **Photopea** (Dezgo/SD Magic Replace), **Pixelmator Pro / Apple Image Playground** (photorealistic on Private Cloud Compute from iOS 27), **Capture One 16.8**, **Lightroom** (Firefly Generative Remove, Veo video): none carry Nano Banana. **Procreate** has pledged no generative AI.

**Developer routes (the customer who would rather build)**

| Provider | NB2 edit | NB Pro | Flux Kontext Pro / Flux.2 Pro | Seedream | Ships a PS plugin |
| --- | --- | --- | --- | --- | --- |
| Google direct | $0.067 (1K) | $0.134 / $0.24 (4K) | — | — | no |
| fal.ai | $0.08 (1K; 0.75× at 0.5K, 2× at 4K) | $0.15 (1K/2K), $0.30 (4K) | $0.04 / — | 4.5 $0.04; 5 Lite edit $0.035; 5 Pro ~$0.056–0.11 (*secondary*) | no |
| OpenRouter | Google list price pass-through | same | — | — | no |
| Together | — | — | $0.04/MP; Flux.2 Pro $0.03 | — | no |
| Replicate | *unverified* | *unverified* | yes | yes | no (community JSX bridges only) |

No API provider ships an official Photoshop plugin.

## Search demand and SERP ownership (2026-09-13, SERP only; no volume tool was available)

| Query | Who owns the results |
| --- | --- |
| nano banana photoshop | **Adobe's partner-model page ranks first**, then Chase Jarvis (Dec 2025, recommends the plugin route over Adobe's task bar), Shotkit (Adobe-native only), aescripts, Astria, Adobe Community threads |
| nano banana photoshop plugin | (1) aescripts / Medicraft, (2) **Astria**, (3) nanobananapsscript.com, (4) nanobanana-ps.com "AI Vision Plugin", (5) nanobananaphotoshopscript.com, (6) psaide.com "ZT Nano Banana Pro", (7) psnanobanana.site "free, no sign-up", (8) lorphic.com SEO guide. YouTube: Essence Cartoon "2-Minute Install", Medicraft's own tutorial |
| gemini photoshop plugin | **Astria ranks first**; then a Poe bot, the Essence Cartoon video, parametric-architecture.com, "Neno Banana" Gumroad script |
| flux photoshop plugin | GitHub fluxtools-in-photoshop, jnack.com, BFL blog, fal.ai, Adobe Exchange "Generative Layer Toolkit", Rob de Winter, blueplugin.com |
| seedream photoshop | YouTube dominates (Jireh, Pouya Eti); blogs corenexis, sonusahani, axiabits; several summaries name Astria as the Seedream-in-Photoshop route |

Read: Adobe owns the head term. Astria and Medicraft own the "plugin" long-tail. Everything else is $4–10 scripts on Replicate or BYO key, plus one affiliate site network. Our article `blog/nano-banana-photoshop-guide.md` carries "nano banana photoshop plugin" as its primary query in the ledger and is due for review 2026-11-21.

## Where we win, where we lose

**Win**

- **Roster.** Six hosted models in one panel, including GPT Image 2 with mask and Seedream 5 Pro, neither of which Adobe offers inside Photoshop. Only Eti Image (27 models, BYOK, $30–60), AI Lab ($16+/mo subscription) and Cubby (BYOK) are broader, and none of them hosts billing.
- **Both billing paths.** Hosted PAYG for people who will not set up Google billing, BYOK for people who will. Pablo is the only other panel doing both.
- **Price of entry.** $9 one-time matches the floor (Medicraft $9, Erect Banana $9.60, NanoBridge $11) and undercuts Pablo ($19), Creator MAX ($49.99), Eti Image ($30–60), AI Lab ($192+/yr).
- **Distribution.** 16,000 sales and two top-two SERP positions. Nobody else in tier 2 shows traction beyond a few hundred sales or a few dozen ratings.
- **Against Adobe specifically:** resolution up to 4K where Adobe's partner-model output is reported at about 1K; per-image cost instead of 25 credits/month; no enterprise admin gate; GPT Image and Seedream.

**Lose**

- **Exchange rating.** 2.7★/10 versus Pablo 4.4★/27 and Review Spaces 4.5★/15. Every 1-star cites the credit surprise. The landing page's "$9" button and the "Are image generations free?" FAQ are where that expectation is set.
- **Feature depth.** Competitors have shipped things we have not: up to 14–15 references and a spend dashboard (Creator MAX), folder batch and Actions recording (PhosGen, Medicraft, Creator MAX), multiple variations per generate as grouped layers (Creator MAX, PhosGen, bastonus), outpaint/extend canvas and light harmonize (Erect Banana), upscale/relight/BG removal (Eti Image, Cubby, Magnific, Higgsfield), per-generation cost preview (Creator MAX, PhosGen, AI Lab), parallel multi-model generation (Eti Image).
- **Photoshop version floor.** We require PS 26+. Medicraft runs on 22.2+, Erect Banana 24.2+, Eti Image 2023+. Users on older Photoshop have somewhere else to go.
- **Head term.** Adobe owns "nano banana photoshop" and will keep it.
- **Brand plugins.** Higgsfield and Magnific bring a subscriber base and a YouTube machine we do not have; they sell "a studio of tools", not "a studio of models".

## Threats, ranked

1. **Adobe reaching resolution and reliability parity for partner models.** It would erase the gap buyers actually feel. Adobe has said nothing about a fix, and Google's May 2026 agentic-Photoshop announcement suggests the Google-Adobe relationship deepens rather than loosens. Watch Photoshop release notes for "partner model output size".
2. **Pablo.** Same shape as us, better rating, higher price, public per-image rates, agency licence, active SEO, GPT Image 2.5 already in the changelog. The one to benchmark against feature-for-feature.
3. **Higgsfield and Magnific plugins.** Not model-choice products, but a Higgsfield or Magnific subscriber has no reason to buy a second panel. They win the "I already pay for a suite" persona.
4. **BYOK commoditisation.** A dozen $7–15 Gemini-only panels make "Nano Banana in Photoshop for $9" a commodity phrase. Our roster beyond Gemini is what keeps us out of that bucket.
5. **Open-source ComfyUI bridges (OpenLayer, ComfyPanel).** Fast-moving in Sep 2026; they take the power user who wants local models and free inference. Not our buyer, but they set the expectation for tool count.
6. **Google policy.** The $300 Gemini API trial ended 2026-03-26 (per Medicraft's warning), and Google cut free-tier NB Pro from 3 to 2 images/day within a week of launch. BYOK gets less attractive as Google tightens, which favours hosted billing.

## Implications (for discussion, not actioned)

- **Fix the credit-surprise funnel before anything else.** Put "plugin $9 + per-image credits, or free with your own Google key" on the buy button and in the first FAQ. This is the single documented cause of our 1-star reviews and it is copy, not engineering.
- **Publish per-image prices where prospects can see them.** The landing page defers to a pricing page that showed a login screen to unauthenticated fetches. Pablo and PhosGen show cost before generation; Creator MAX shows a spend dashboard. A cost hint in the panel would answer "why is my balance gone" support tickets too.
- **Close the three feature gaps that appear across multiple rivals:** reference count and variations per generate, batch/Actions, and a cost preview. Outpaint/extend and upscale are the next tier.
- **Position against Adobe on the four gaps, by name.** Resolution, price per fill for Photoshop-only subscribers, GPT Image and Seedream, BYOK. The existing article's FAQ line "Built-in generative features use Adobe's models" is now wrong and should be rewritten at its 2026-11-21 review to say what Adobe does and does not offer.
- **Decide on the "Nano Banana Pro 2" name.** Google does not use it, Runway does, and an indie clone does. Either own it as a search term or drop it.
- **Takedown check** on the Gumroad listing by Apparala Sandesh that reuses our marketing copy and appears to bundle our plugin.
- **Sync the version string** on the landing page (v1.1.75) with Exchange (v1.1.91).

## Unverified or not researched

- Search volumes for any query (no keyword tool available; SERP ownership only).
- Whether Firefly Pro Plus/Premium "unlimited image models" applies inside Photoshop.
- Whether Photoshop web or mobile expose any partner model.
- Vertex AI per-image prices; Replicate prices for NB2 / NB Pro.
- Higgsfield plan prices (secondary source), Magnific plugin details (secondary review), Rob de Winter to Astria lineage (community thread).
- Reddit sentiment (inaccessible to the crawler).
- Whether Krea, OpenArt or Flora have true layers.
- Fetch failures (403/404) on aescripts product page, several Exchange listings, Replicate model prices, Dzine pricing, psaide.com, Blue Plugin Gumroad; facts for those came from search snippets or secondary pages.

## Method

Three parallel research passes on 2026-09-13 (Adobe native; third-party Photoshop plugins; non-Photoshop substitutes and SERP), each returning sourced findings with a confidence split. Exchange listing text was read in a browser; GitHub stars and dates via the GitHub API; Astria facts from the live landing page, the Exchange listing and the internal support FAQ. No competitor product was purchased or tested, so no quality benchmark is claimed here.

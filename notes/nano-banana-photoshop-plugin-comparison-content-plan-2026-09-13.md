# Nano Banana Photoshop plugin — comparison content plan

**Prepared:** 2026-09-13
**Source research:** `notes/nano-banana-photoshop-plugin-competitor-landscape-2026-09-13.md` (every competitor fact below comes from that note and carries its source and read date)
**Scope:** One Astria-vs-competitor article per plugin or native feature that competes for "generative models inside Photoshop", plus one general buyer's review, mirroring the fashion comparison program
**Audience:** Retouchers, photographers, designers, agencies, ecommerce studios, real-estate and archviz teams who already live in Photoshop and want current image models inside the document
**Status:** Plan only. No article written. The wider content program is paused until the 2026-10-04 Search Console review (`CONTENT-LEDGER.md`, "Data review"); this cluster is a separate product line with its own demand evidence (16,000 plugin sales, positions 1 and 2 on the two "plugin" queries), so it can be run as an explicitly authorised exception or after the review. That is Alon's call (see "Decisions needed").

## Summary

- **Editorial posture is fixed:** Astria is the overall winner in every article and in every Overall row. Each competitor keeps its genuine advantage as a bounded prose concession, never as a table row it wins. Same rule as the fashion series (guide posture list, coordinator item 11).
- **Three headline stresses, in this order, in every piece:** (1) any new model lands in the panel on launch day with no plugin update; (2) a rebuilt CCX/UXP panel with a three-step select–prompt–generate workflow; (3) results arrive as Smart Objects that keep the model's full returned resolution. Nine supporting points are listed under "Positioning spine".
- **Roster:** 20 candidate comparisons in three waves plus one hub review. Wave 1 is the hub, Adobe's native Generative Fill, Pablo, Medicraft, Eti Image and Creator MAX. Later waves are conditional on Wave 1 impressions.
- **Two things the articles cannot fix and must not expose:** the "$9 then credits" surprise on the landing page and the pricing page that shows a login screen to logged-out visitors. Both are copy fixes on www.astria.ai and are prerequisites, because every article sends a prospect to that page.
- **New evidence layer, unique to this cluster:** a dated model-arrival ledger (launch date versus the date each plugin exposed the model) and a measured returned-resolution test across the top rivals. These make the two headline claims defensible instead of asserted.

## Prerequisites before any article ships

Comparison articles invite the closest scrutiny of our own product page. Close these first.

**Landing page and pricing (www app, not this repo)**

1. Put "plugin $9 one-time, image generations pay-as-you-go through Astria or free with your own Google key" on the buy button and in the first FAQ. This is the documented cause of every 1-star Exchange review.
2. Make per-image prices visible to logged-out visitors. Pablo and PhosGen show cost before generation; we cannot write a "cost to start and cost to keep" row while our own rates are behind a login.
3. Sync the version string (landing page v1.1.75, Exchange v1.1.91).
4. Decide the product name. Recommendation: "Astria Nano Banana plugin for Photoshop" in all articles. Do not use "Nano Banana Pro 2" (Google never has; Runway and an indie clone do) until that decision is made.

**Fact gate on Astria claims (confirm in the current panel build, record build number and date)**

| Claim | What to confirm | Why it matters |
| --- | --- | --- |
| Zero-day models | The model list is served from Astria and appears in the panel without a plugin release. Confirm GPT Image 2.5 Sunburst/Flare (site banner says "available now") and Muse Image are already selectable in the panel. | Headline claim 1. If the roster needs a plugin update, the claim becomes "same-day releases", which is weaker and must be evidenced per model. |
| Smart Object at original resolution | A 4K generation into a small on-canvas selection lands as a Smart Object whose embedded pixels are the full returned size; re-transforming does not resample. Record returned dimensions per model and resolution setting. | Headline claim 3. Varo Koneko also places Smart Objects, so the win is resolution retention plus roster, not Smart Objects alone. |
| Panel UX | Current three-step flow, reference drop zone, mask-aware selection reading, in-panel key switching, new layer per generation. Screenshot our own panel (we own the rights). | Headline claim 2. |
| Reference image count | Maximum references per generation, per model. | Creator MAX advertises 14–15; never create a count row we lose. |
| Credit expiry | Astria top-ups do not expire. | Review Spaces expires at 180 days; a Pablo review alleges 90 days; Adobe and Higgsfield do not roll over. Only claim it if true. |
| Retries and timeouts | What the panel does on an upstream timeout. | Support FAQ lists timeouts as the top complaint; Adobe's NB Pro "program error" thread is the comparison point. |
| Photoshop floor and platforms | PS 26+, macOS and Windows, no GPU. | Medicraft runs on 22.2+, Erect Banana 24.2+, Eti Image 2023+. Concession, so state ours exactly. |
| Moderation path | Whether hosted generations pass only the provider's moderation, with no additional review layer. | Adobe's 1,392-reply false-flag thread is a documented pain; only contrast it if our path is verified. |

**Existing guide.** `blog/nano-banana-photoshop-guide.md` (primary query "nano banana photoshop plugin", review due 2026-11-21) says "Built-in generative features use Adobe's models". That is now wrong: Photoshop 27.x ships Nano Banana 2, Nano Banana Pro, FLUX.2 pro and FLUX.1 Kontext natively. Pull its review forward to Wave 1 so it links the hub and the Adobe article and states what Adobe does and does not offer.

## Positioning spine

Every article makes the first three points; the rest are used where the competitor makes them bite. Each point names its evidence and the rivals it cuts against.

1. **Any new model, day zero, no update.** Astria adds models to the platform on launch day (GPT Image 2.5 Sunburst/Flare and Muse Image are on the site banner now) and the panel reads the roster from the server. Evidence: the model-arrival ledger below. Cuts against Adobe (partner-model releases ride the Photoshop train and the partnership: GPT Image is Firefly-web only, Seedream is absent from Adobe's stack entirely), Pablo (each model is a plugin changelog entry, GPT Image 2.5 on 2026-09-11), every BYOK panel (a new provider means new code and a re-download, and vendors with one release and zero ratings never ship it), and Higgsfield/Magnific (no model choice at all; "Magnific chooses").
2. **A rebuilt panel with a three-step workflow.** Select with marquee, lasso, brush or colour range; prompt; the result lands as a new layer. Mask-aware models read the selection directly; reference images dropped into the panel act as visual instructions; the model is chosen per task; keys switch inside the panel. Evidence: our own panel screenshots and the seven use-case reels. Cuts against the JSX/ExtendScript segment (modal dialogs, Mac-only references, no panel), companion-app products (Saifs, the 이승석 v2 external app), and Adobe (one variation per partner-model generate versus three for Firefly).
3. **Smart Objects that keep the original returned resolution.** The generation is placed as a Smart Object holding the model's full output, so scaling, re-transforming and masking later are non-destructive and never resample a 4K result down to the selection size. Evidence: measured returned dimensions from the hands-on test. Cuts against Adobe (community thread reports NB Pro output in Photoshop as about 1280×720 against 2752×1536 on Gemini web, no fix timeline, and Adobe's own FAQ still cites 1024×1024) and against every panel that pastes rasterised pixels at selection size (to be measured, not assumed).
4. **The widest hosted roster in one panel.** GPT Image 2 with mask, Nano Banana 2, Nano Banana Pro, Seedream 5 and 5 Pro, Flux 2 Pro. Neither GPT Image nor Seedream exists inside Photoshop natively. Only Eti Image (27 models, BYOK, $30–60), AI Lab ($16+/month) and Cubby (BYOK) are broader, and none of them hosts billing.
5. **Both billing paths, one key.** Hosted pay-as-you-go through an Astria key that authenticates every model, with quota, auth and retries abstracted; or a Google AI Studio key for Gemini calls billed by Google. Pablo is the only other panel doing both. Also the answer to "can I use my Gemini subscription": nobody can, Google only authorises API keys.
6. **Cost to start and cost to keep.** $9 one-time at the market floor (Medicraft $9, Erect Banana $9.60, NanoBridge $11) and under Pablo $19, Eti Image $30–60, Creator MAX $49.99, AI Lab $192+/year, Higgsfield $19+/month, Magnific $20+/month. No subscription, no minimum, top-up only. Never claim the lowest per-image price (Google direct is cheaper on BYOK); say "compare per-image rates on the pricing page" once those are public.
7. **Up to 4K, chosen per generation.** 1K/2K/4K on GPT Image 2 and the Gemini models, 4K on Seedream 5 Pro and Seedream 5 edit.
8. **A production route behind the panel.** The same Astria key and balance drive workspaces, packs and the API. Photoshop for the hero image and the fix; Astria workspaces for the rest of the collection. This is the "collection scale" row of the fashion series, and no tier-2 plugin has a production platform behind it. Higgsfield and Magnific have web apps, not a catalogue production system; concede that in prose.
9. **Maintained, with traction.** 16,000 sales, 187 ratings, a dated changelog, a company and a support desk behind it. Half the Exchange "nano banana" listings have zero ratings and one release, and the 2022–2024 generation (Stability's panel, Auto-Photoshop-SD, stable.art, Alpaca, flying dog) is dead. The row is "Maintenance and longevity". Never cite Exchange star ratings anywhere (ours is 2.7 from 10, Pablo 4.4 from 27).
10. **No gate.** macOS and Windows, no GPU, no enterprise admin switch (Adobe teams and enterprise seats need an admin to enable partner models), no country gating, no consumer-subscription confusion.
11. **Upgrade path, not a dead end.** Legacy JSX users get the CCX build free with a $2 starter credit; Replicate credits keep working on the old script. Relevant against AI Vision Plugin and the other JSX scripts.
12. **Adobe-specific, only in the Adobe article:** per-image cost instead of 25 credits a month for Photoshop-only subscribers (zero or one NB Pro fill before buying a $9.99 pack), no "limited time" credit pricing, and the documented reliability and false-flag threads.

**Bounded concessions, never table rows:** Adobe's zero-install and Firefly indemnification; Pablo's public per-image rates and 50-seat agency licence (publish our rates and the first one disappears); Medicraft and Erect Banana's older-Photoshop support; Creator MAX's reference count, four variations as grouped layers, spend dashboard and "no server in path"; PhosGen's folder batch; Eti Image's model count, upscalers and parallel multi-model runs; AI Lab's prompt assistant and cost hints; Higgsfield's and Magnific's tool breadth for someone already subscribed; Exchange ratings. Every article names at least one of these for its competitor, as the guide requires.

## Article format

Inherit `~/git/astria-day-to-day/competitor-article-agent-prompt.md` wholesale (assignment block, system prompt, 12-section structure, coordinator pass). Deltas for this cluster:

**Reader and decision.** A Photoshop professional deciding how to get current generative models into a live document without a browser round trip. Not a fashion brand deciding on a production system.

**"How we evaluated" criteria (five):** model roster and how fast new models arrive; output fidelity (returned resolution, Smart Object and layer behaviour, mask handling); editing workflow inside the document; commercial model (entry price, per-image cost, subscription or pay-as-you-go, BYOK, expiry); maintenance and longevity. A sixth, "production beyond the document", where the competitor has any web app.

**Quick-verdict rows (Astria must win every one, plus Overall):** Models in the panel today · New-model lead time · Returned resolution and layer type · Selection-to-layer workflow · Reference-driven edits · Billing paths · Cost to start and cost to keep · Production beyond the document · Maintenance and longevity · Best fit (outcome versus outcome, both concrete) · Overall.

**Rows never to create:** star rating, "no install needed", batch, variations per generate, reference count, per-generation cost preview (until we ship one), Photoshop version floor, "no server in path".

**Workflow scenario.** One realistic retouching job carried through both products: a campaign hero where the shoes are swapped from a reference image, the background extended for a 4:5 crop, and a phone removed from a hand. Then the "and the other 40 SKUs" step, which is where point 8 lands.

**Naming.** "Astria Nano Banana plugin for Photoshop" on first mention, "the Astria plugin" after. Competitor names exactly as their listing spells them; "formerly Banana MAX" once for Creator MAX; "formerly Freepik" once for Magnific.

**Front matter.** Slugs as in the roster table. `tags: [comparisons, photoshop]` with a new `photoshop` tag in `blog/tags.yml` and a matching tab in `src/components/BlogIndex/categories.ts` (decision 2). Covers in `static/img/covers/<slug>.webp`, same lilac-editorial series, subject shifted to a retoucher's still life (prints, loupe, a graded proof), no UI and no logos. `PRIMARY_CTA_URL: https://www.astria.ai/nano-banana-photoshop`.

**Titles and queries.** Title pattern "Astria vs <Competitor> (2026): Which Nano Banana Photoshop Plugin Should You Buy?". Primary query is the competitor's own plugin phrase ("pablo photoshop plugin"), because nobody searches "astria vs pablo" yet and buyers at decision time search the brand. "astria vs <competitor>" is the second keyword. The 2026-10-04 review of how the fashion "astria vs" pages perform decides whether to flip that convention.

**Images.** Our own panel screenshots and reel frames only. No competitor UI screenshots; competitor behaviour is reported as measured facts (returned pixel dimensions, layer type) from the hands-on test.

## Roster and priority

Tier labels follow the landscape note. "Their real strength" becomes the article's bounded concession. "Astria's angle" is the spine point that decides the piece.

| # | Competitor | Tier | Slug | Primary query | Their real strength (concession) | Astria's angle | Wave |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Adobe Generative Fill with partner models | 1 | `astria-plugin-vs-photoshop-generative-fill` | photoshop generative fill vs nano banana plugin | Zero install; Firefly indemnification; NB Pro arrived same day as Google | Resolution (3), 25 credits/month (12), no GPT Image or Seedream (1, 4), BYOK (5), no admin gate (10) | 1 |
| 2 | Pablo | 2a | `astria-vs-pablo-photoshop-plugin` | pablo photoshop plugin | Public per-image rates; 50-seat agency licence; both billing paths | Zero-day roster versus changelog cadence (1), $9 versus $19 (6), Smart Object resolution (3), production route (8) | 1 |
| 3 | Medicraft Nano Banana Generative Fill (aescripts) | 2b | `astria-vs-medicraft-nano-banana-generative-fill` | nano banana generative fill plugin | PS 22.2+; edge-feather helper; Actions; ranks #1 on our primary query | Gemini-only versus six models (4), hosted path for people who will not set up Google billing (5), quota-error reviews versus abstracted retries (5) | 1 |
| 4 | Eti Image (Pouya Eti) | 2b | `astria-vs-eti-image-photoshop-plugin` | eti image photoshop plugin | 27 models; upscalers; parallel multi-model; owns "seedream photoshop" SERP | Hosted billing with one key versus three BYO providers (5), $9 versus $30–60 (6), zero-day without a re-download (1) | 1 |
| 5 | Creator MAX (formerly Banana MAX) | 2b | `astria-vs-creator-max-photoshop-plugin` | creator max photoshop plugin | Feature-richest BYOK panel: 14–15 refs, variations, spend dashboard, Actions | $9 versus $49.99 (6), hosted path (5), Seedream and Flux absent there (4), Smart Object resolution (3) | 1 |
| 6 | AI Lab UXP (Picture Instruments) | 2a | `astria-vs-ai-lab-uxp-photoshop-plugin` | ai lab uxp photoshop plugin | Prompt assistant and history; cost hints; press coverage | Subscription ($16–60/month) versus one-time plus pay-as-you-go (6), BYOK absent (5), zero-day (1) | 2 |
| 7 | Higgsfield Plugin for Photoshop | 2a | `astria-vs-higgsfield-photoshop-plugin` | higgsfield photoshop plugin | Tool suite (relight, decompose, mockup) and a YouTube machine; existing subscribers | Named model choice versus unnamed tools (1, 4), no subscription (6), Smart Object resolution (3). Cross-link the fashion Higgsfield piece; distinct angle | 2 |
| 8 | Magnific plugin for Photoshop | 2a | `astria-vs-magnific-photoshop-plugin` | magnific photoshop plugin | Upscale, relight, skin, stock in one panel | "Magnific chooses" versus per-task model choice (4), every plugin generation burns credits even on "unlimited" plans and no cost preview (6), zero-day (1) | 2 |
| 9 | Cubby Image (CubbyTools) | 2b | `astria-vs-cubby-image-photoshop-plugin` | cubby image photoshop plugin | About 20 models via Replicate, fal and Gemini; Figma version | Three BYO keys versus one hosted key (5), Smart Object resolution (3), maintenance and traction (9) | 2 |
| 10 | PhosGen | 2b | `astria-vs-phosgen-photoshop-plugin` | phosgen photoshop plugin | Only rival with folder batch; Flex tier; cost hints | Gemini-only (4), $14/year BYOK versus one-time plus hosted (5, 6), zero ratings and one release (9) | 2 |
| 11 | AI Vision Plugin (nanobanana-ps.com) | 2c | `astria-vs-ai-vision-plugin-photoshop` | ai vision plugin photoshop | PS CC 2020+; $8; ranks #4 on our primary query | JSX dialogs versus a panel (2), Replicate $10 minimum versus top-up only (6), upgrade path (11); treat the "108,022 purchased" claim as unverified | 2 |
| 12 | Origin AI / Origin AI BYOK (GeminiPlugin AI) | 2a | `astria-vs-origin-ai-photoshop-plugin` | origin ai photoshop plugin | Agent turns; Real-ESRGAN, GFPGAN, RMBG utilities; EN/ZH | $11.99–26.99/month or $39.90 device-locked versus $9 (6), zero ratings (9), zero-day (1) | 3 |
| 13 | Review Spaces AI Tools | 2a | `astria-vs-review-spaces-photoshop-plugin` | review spaces photoshop plugin | Director/camera-angle tool; team credit admin; archviz focus | Credits expire at 180 days and reviews say model choice is unclear (5, 6), named models (4) | 3 |
| 14 | Varo Koneko | 2a | `astria-vs-varo-koneko-photoshop-plugin` | varo koneko photoshop plugin | Smart Object inpaint with feathered mask; Seedream layer decomposition; free daily coins | Original-resolution retention measured side by side (3), roster (4), maintenance (9); do not claim Smart Objects as unique here | 3 |
| 15 | Prompt Fix (fargenstudio) | 2b | `astria-vs-prompt-fix-photoshop-plugin` | prompt fix photoshop plugin | ComfyUI custom node for local workflows; 7-day refund | Hosted path (5), zero-day (1), Smart Object resolution (3) | 3 |
| 16 | NanoBridge | 2b | `astria-vs-nanobridge-photoshop-plugin` | nanobridge photoshop plugin | Search grounding; refs from layers | Gemini-only (4), paid Gemini key required (5), stalled since Mar 2026 (9) | 3 |
| 17 | Erect Banana | 2b | `astria-vs-erect-banana-photoshop-plugin` | erect banana photoshop plugin | Outpaint/extend canvas; Harmonize; 8-language UI; PS 24.2+ | Gemini-only (4), hosted path (5), zero ratings (9) | 3 |
| 18 | Gemini AI Photoshop Plugin (Michael Breitung) | 2b | `astria-vs-mibreit-gemini-photoshop-plugin` | gemini ai photoshop plugin mibreit | Landscape-photographer audience; Fstoppers coverage; 5 parallel jobs | OpenRouter key versus hosted (5), Seedream and Flux absent (4), zero-day (1) | 3 |
| 19 | comfyui-photoshop (NimaNzrii) | 2d | `astria-vs-comfyui-photoshop-plugin` | comfyui photoshop plugin | Free; local models; 1,746 stars | Hosted frontier models with no GPU (10), Exchange listing stuck at v1.0.0 with "doesn't work" reviews (9), zero-day (1) | 3 |
| 20 | Aslanana (Aslan Studios) | 2b | `astria-vs-aslanana-photoshop-plugin` | aslanana photoshop plugin | Breadth incl. video, face swap, Product Studio; weekly updates | Replicate key versus hosted (5); **gate: plugin type unverified**, research first | 3 |

**Round-up only, no article:** Nano Banana Studio (0 ratings), Generative Layer Toolkit (stalled Oct 2025), jsxNanaBananaPro, NANO BANANA x GEMINI, Blue Plugin (billing unverified, SEO domain network), Owl Studio (copy of open-source scripts), the 이승석 external app, Tiny Tools and Bulk AI Image Creator (wrap Adobe's own credits), OpenLayer and ComfyPanel (mention as the open-source frontier), Rob de Winter's script (lineage only, sources 404).

**Not written:** Apparala Sandesh's Gumroad listing (takedown in progress, do not send it traffic); Krea, Leonardo, Dzine, Flora, Figma and the other non-Photoshop canvases (they belong in the hub's "if you are not in Photoshop" paragraph, not in head-to-heads); GIMP Dream Prompter and Rangy for Affinity (other hosts).

## Hub pages

**Hub 1, Wave 1: `best-nano-banana-photoshop-plugins`.** Title "Best Nano Banana Photoshop Plugins (2026): A Retoucher's Shortlist". Primary query "best nano banana photoshop plugin"; keywords "nano banana photoshop plugins compared", "gemini photoshop plugin" (we already rank first), "seedream photoshop plugin", "gpt image photoshop plugin". Structure mirrors `best-ai-fashion-photography-platforms`: work out which category you are buying (native Generative Fill; hosted-credit panels; BYOK panels; legacy scripts; open-source bridges; a web canvas outside Photoshop), Astria first in the hosted-panel category with the model-arrival ledger embedded, one paragraph per rival with its concession, "how to run the evaluation" (one PSD, one selection, one prompt, measure the returned pixels), FAQs, sources. The existing guide keeps "nano banana photoshop plugin"; the hub must not target it.

**Hub 2, Wave 2, optional: `photoshop-generative-fill-alternatives`.** Primary query "generative fill alternatives photoshop". The alternatives-page pattern from the Botika pilot: diagnose the reason first (credits ran out at 25 a month; output too soft; model not offered; enterprise gate; false flags), then route. Write only if the Adobe comparison shows impressions.

## Wave 1 briefs

**Adobe Generative Fill with partner models.** The competitor that matters and the only sensitive one: we are an Exchange-listed plugin and Adobe's Gen AI terms carve Exchange plugins out of the partner-model regime, so nothing bars the article, but tone is a leadership call (decision 1). Recommended framing: "the plugin extends Photoshop", factual, every Adobe weakness cited to Adobe's own helpx, FAQ or community pages, no adjectives. Astria wins on the four documented gaps: resolution, per-image cost for Photoshop-only subscribers, GPT Image and Seedream, BYOK. Concede zero install, Firefly indemnification and same-day NB Pro. The worked example is the note's: a Photoshop-only subscriber gets zero or one NB Pro fill a month; a $9.99 pack buys about 50. Secondary keywords "nano banana pro photoshop quality" and "generative fill credits nano banana" come straight from the community threads.

**Pablo.** The benchmark rival: same shape, higher price, public rates, better rating, active SEO, GPT Image 2.5 shipped 2026-09-11. Lead with the model-arrival ledger (their changelog dates against our launch-day dates), then Smart Object resolution measured side by side, then $9 versus $19 and the production route. Concede public rates and the agency licence; mention the 90-day-expiry allegation only as "one review alleges", and only if our own no-expiry is confirmed.

**Medicraft.** Ranks first on our primary query, so this piece defends the term. Gemini-only, BYOK-only, PS 22.2+, 2.8★ from 32 with 17 one-star reviews citing quota errors. Angle: six models versus one line, hosted billing for the buyer who will not open a Google billing account, and Google ending the $300 API trial on 2026-03-26 (Medicraft's own warning) making BYOK-only a worse default. Concede the version floor, the edge-feather helper and Actions.

**Eti Image.** Owns the "seedream photoshop" SERP through YouTube. 27 models across Replicate, Kie.ai and Google keys, $30–60, 14-day refund, vendor-stated 2,100 creators. Angle: one hosted key versus three providers to set up and fund, $9 entry, zero-day without a re-download. Concede breadth, upscalers and parallel multi-model runs; label the creator count vendor-stated.

**Creator MAX.** Feature-richest BYOK panel and the hardest honest win: 14–15 references, four variations as grouped layers, spend dashboard, Actions, "no server in path", $49.99. Do not fight on features. Angle: the buyer outcome rows (cost to start, hosted path, Seedream and Flux absent there, Smart Object resolution, production route). Concede feature depth plainly in one paragraph.

## Evidence layer

**A. Model-arrival ledger.** One table, built once, embedded in the hub and cited by every article. Columns: model · provider launch date · date in Astria platform · date in Astria panel · Photoshop version and date · Pablo changelog date · other rivals where a dated changelog exists. Seed rows: Nano Banana Pro (Google Nov 2025; Adobe same day 2025-11-20), FLUX.2 pro (Photoshop 27.2, Dec 2025), Nano Banana 2 (Google GA May 2026; Photoshop 27.6, Apr 2026), Nano Banana 2 Lite (Google 2026-06-30), GPT Image 2 (Astria panel changelog 2026.04; Adobe Firefly-web only), Seedream 5 and 5 Pro (absent from Adobe), GPT Image 2.5 Sunburst/Flare (Astria site banner Sep 2026; Pablo 2026-09-11), Muse Image. Provider dates from provider changelogs; Astria dates from the platform changelog and panel build history. Where Adobe was same-day, say so.

**B. Hands-on returned-resolution test.** Buy the Wave 1 and Wave 2 rivals that sell one-time licences and run one fixed PSD, one selection, one prompt, one reference, at each plugin's highest setting for NB2, NB Pro and, where offered, GPT Image 2 and Seedream. Record: returned pixel dimensions, layer type (raster or Smart Object), whether the embedded pixels exceed the on-canvas selection, mask handling, wall-clock time, failures. Approximate outlay: Pablo $19, Medicraft $9, Creator MAX $49.99, Eti Image Core $30, Cubby $14, PhosGen $14, Prompt Fix $8, AI Lab one month $16, plus about $40 of API and Astria credit; the Adobe run needs a plan with credits. Roughly $200 (decision 3). Report measured facts only; no competitor UI screenshots.

**C. Our own material.** Panel screenshots, the seven reels, the support FAQ, the purchased-tips page. All first-party, rights clear.

## Sequencing and kill criterion

- **Now to 2026-09-30:** prerequisites (landing-page copy, pricing visibility, version sync, name decision), fact gate, model-arrival ledger, hands-on test.
- **2026-10-04:** Search Console review. Read how the fashion "astria vs" pages and the existing plugin guide perform, then confirm the query convention.
- **Wave 1 (hub plus five):** written in parallel sessions per the guide's orchestration, one file per session, coordinator pass, published in a single deploy (future-dated posts publish immediately, so batch rather than drip). If Alon authorises an exception to the pause, Wave 1 can start as soon as the fact gate passes; the plugin's demand is already evidenced, unlike the fashion clusters.
- **Wave 2 (six plus optional hub 2):** six weeks after Wave 1 is indexed, only if Wave 1 shows impressions on the competitor-brand queries.
- **Wave 3 (nine):** only for competitors whose brand query appears in Search Console with impressions; write those and drop the rest into the hub.
- **Kill criterion:** Wave 1 at zero impressions six weeks after indexation ends the cluster at the hub, the Adobe piece and Pablo. Same rule as ledger decision rule 5.
- **Refresh:** monthly, because rosters and prices move faster here than in the fashion series. Every article carries a Reviewed line and the model-arrival ledger date.

## Proposed ledger rows

`CONTENT-LEDGER.md` is not edited by this plan (it is shared and currently modified in the working tree). Add these when Wave 1 publishes.

| Article | Primary query | Published | Last fact check | Volatile | Next review | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| best-nano-banana-photoshop-plugins | best nano banana photoshop plugin | TBD | TBD | P F M S | +30 days | comparisons |
| astria-plugin-vs-photoshop-generative-fill | photoshop generative fill vs nano banana plugin | TBD | TBD | P F M | +30 days | comparisons |
| astria-vs-pablo-photoshop-plugin | pablo photoshop plugin | TBD | TBD | P F M S | +30 days | comparisons |
| astria-vs-medicraft-nano-banana-generative-fill | nano banana generative fill plugin | TBD | TBD | P F M | +30 days | comparisons |
| astria-vs-eti-image-photoshop-plugin | eti image photoshop plugin | TBD | TBD | P F M S | +30 days | comparisons |
| astria-vs-creator-max-photoshop-plugin | creator max photoshop plugin | TBD | TBD | P F M | +30 days | comparisons |
| nano-banana-photoshop-guide (refresh) | nano banana photoshop plugin | 2026-08-21 | pull forward to Wave 1 | P M F | +30 days | engineering |

## Decisions needed

1. **Adobe article.** Publish as a complementary "Generative Fill and the Astria plugin" piece with every criticism cited to Adobe's own pages, or hold it the way Astria vs FLAM is held. Recommendation: publish; it is our defence of the head term and the four gaps are Adobe-documented. Risk is the Exchange listing relationship, not the facts.
2. **Tag and tab.** New `photoshop` tag with an index tab, articles tagged `[comparisons, photoshop]`, so the Comparisons tab is not diluted with plugin pieces. Alternative: `comparisons` only, no new tab.
3. **Hands-on budget.** About $200 in competitor licences and API spend for the resolution test. Without it, headline claim 3 is asserted against Adobe's documented weakness only, and the per-rival resolution rows become "not publicly verified".
4. **Pause.** Run Wave 1 before 2026-10-04 as an authorised exception, or wait for the review.
5. **Query convention.** Competitor-brand primary ("pablo photoshop plugin") with "astria vs pablo" secondary, as proposed, or the fashion series' "astria vs" primary.
6. **Product name.** Retire "Nano Banana Pro 2" on the landing page, or own it as a search term; the articles need one name.
7. **Hub 2.** Whether the generative-fill alternatives page is wanted at all.

## Unverified or not researched

- Everything in the fact-gate table above until confirmed in the current build.
- Whether any tier-2 panel besides Varo Koneko places Smart Objects, and what resolution any of them returns (the hands-on test answers this).
- Provider launch dates for Seedream 5 and 5 Pro, GPT Image 2, Flux 2 Pro, and the exact Astria platform and panel dates for every seed row of the model-arrival ledger.
- Search volumes for every query in the roster (no keyword tool; SERP ownership only, as in the landscape note).
- Whether Firefly Pro Plus/Premium "unlimited" applies inside Photoshop, which affects the Adobe article's cost example for those plans.

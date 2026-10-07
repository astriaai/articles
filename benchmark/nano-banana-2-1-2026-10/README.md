# Nano Banana 2.1 article evidence — October 7, 2026

Status: complete. Five matched 2K cases across five endpoints (25 outputs), all
visually reviewed. Four incumbent product-only jacket outputs and ten identity
outputs are selected for the article; failed exact-label, packaging and campaign
cells remain internal. Separate native 4K portrait cover selected. Article draft
flag removed after provider deployment verification and completed evaluation.

## Version verification

Before deployment, committed SDBooth HEAD
`1a471054fbecd292e9d9823c9cad01d7988bc1c6` mapped tune 4180298 to
`gemini-3.1-flash-image`. The eight incumbent product submissions used that
verified historical mapping; their timestamps precede the upgrade.

After the user reported availability, read-only `heroku releases -a sdbooth
--num 3` confirmed current production **v4821**, deployed commit **6b57fe61**,
created **2026-10-07T06:30:59Z**. `git merge-base --is-ancestor df389b5ce
6b57fe61` returned success; the released concern contains 4180298 ->
`gemini-nano-banana-2.1` and separate legacy 5850983 ->
`gemini-3.1-flash-image`. New 2.1 runs started after 07:53Z. All remaining
legacy runs use 5850983. No application deployment was performed by this task.

Live reference records label these tunes 2.1 and 2.0, respectively; the curated
MCP list_models still uses an older name. It is not version evidence. Deployed
integration verification establishes requested provider routing. The successful
transport and provider response modelVersion of an individual attempt are not
exposed by MCP. Do not imply attempt telemetry was obtained. Spicy Mayo is
excluded. Never rerun the pre-upgrade 4180298 submissions blindly.

Competitor catalog IDs were checked live. The committed source maps 5634510
and 5634511 through GptImageClient to `gpt-image-2.5-sunburst` and
`gpt-image-2.5-flare`; Seedream 5236038 is seeded as
`dola-seedream-5-0-pro-260628`. These establish integration target versions,
not the successful transport provider of each attempt. MCP prompt records do
not expose attempt-level provider/checkpoint metadata. Retain this limitation.

## Sources

All new references and generations use **896 (Articles)**.

| Role | Original tune / URL | Article tune | Actual pixels | Provenance and review |
| --- | --- | --- | --- | --- |
| Jacket | 5616645; https://mp.astria.ai/d4jpzupojl25zjx28zyawgjae19v | 5851059 | 2048×2048 | Synthetic benchmark-owned source from September; visually reviewed. Four cranes, four brass buttons, two lower floral motifs, leaf weave, scalloped hem. Source has invented PROSIK collar label; this is not a real-brand product claim. |
| Serum/carton | 5616648; https://mp.astria.ai/ls5nt22awdksv54nczrmnqua4dt4 | 5851060 | 1760×2352 | Synthetic benchmark-owned source; visually reviewed. Download orientation differs from rendered September notes: assets actually lie sideways. Source bottle says No. ROSE without 04, while carton includes No. 04 ROSE. Test deliberately requests normalized No. 04 ROSE on both. |
| Rejected cast candidate | 5279024; https://mp.astria.ai/sxjult82bfe3wi6hwng3y8dzflp6 | none | 1024×1024 | Reviewed; below preferred source size. Internal only, not enlarged or submitted. Obtain an approved higher-resolution casting source before identity comparisons. |

| Adopted synthetic cast | GPT Image 2 prompt 46575270, output 0; https://mp.astria.ai/v1wmjse67twn1zrd4m36f70uuzx1 | 5851882 | 1792×2304 | Benchmark-owned, detailed adult portrait; adopted as current identity ground truth. Already wears jacket, possible source affinity disclosed. Visually reviewed; no enlargement. |
| Necklace | 5616647; https://mp.astria.ai/jglgvr9uumo5jxj3abydf9l32mdt | 5851884 | 2048×2048 | Benchmark-owned synthetic nine-green-stone necklace; visually reviewed. White separators, rose-gold settings, cable chain. Replaces the planned handbag role with a rights-cleared owned accessory, fixed across every model. |

See September benchmark README for synthetic product creation provenance.
Creation outputs are archived in the September benchmark's assets/sources;
exact byte hashes match September source prompts 46574787 (jacket),
46574825 (serum) and 46574786 (necklace). Original reference tune IDs and URLs
were verified live.
Actual supplied image, rather than its original generation prompt, is ground truth.

## Controls and actual records

`submissions.json` preserves exact tool arguments, prompts, and idempotency keys.
`results.json` preserves returned prompt IDs, image URLs, times, flags and internal
charges. The semantic brief is identical across each case: 4:3, 2K, one output,
face inpainting and film grain disabled. No reruns or cherry-picking. Provider
seeds are not matched: Google 2.1 does not support them. 2K is the common
resolution with Seedream Pro; the selected separate 4K portrait cover is prompt 47133692.
Native pixel dimensions vary despite a common requested aspect ratio. Keep
original dimensions in results and do not disguise them through cropping.

`download-assets.py` only downloads recorded outputs; it never submits requests.
Run with the bundled Python runtime (Pillow). Raw outputs remain under assets;
eligible optimized candidates are under static/img/model-benchmarks/2026-10/nb21/.

## Arena capture

Source: https://arena.ai/leaderboard/image-edit/multi-image-edit/commercial-design
Read through the live browser October 7, 2026. Web fetch failed; browser rendered
the category, Multi Image Edit filter, and full table. Displayed update Oct 6,
295,932 votes and 32 models. Treat that page header as displayed context, not
category-specific votes. CSV preserves the first ten rows, displayed ± values,
rank spreads, preliminary flags, and votes. Do not reinterpret ± as pixel or
garment accuracy. Nano Banana 2.1 is rank 3, spread 2–4, 1490 ±13, 2389 votes.

## Community research

Grokbot is not exposed by connected tools and `command -v grokbot` returned
nothing; focused local project/skill searches found no runnable grokbot workflow.
Fallback web search was used; quotations were verified by opening original posts.

- u/TimeCounty7878, reAPIOfficial: https://www.reddit.com/r/reAPIOfficial/comments/1wzlz32/i_ran_nano_banana_21_vs_nano_banana_2_on_the_same/
  Quoted exactly: “2.1 kept the exact wording, and the layout is cleaner.”
  Vendor-affiliated venue promoting reAPI, one run per prompt, default thinking.
- u/mementomori2344323, FluxAI: https://www.reddit.com/r/FluxAI/comments/1wz97mh/flux_3_crushes_nano_banana_21_in_repeated_edit/
  Quoted exactly: “only preservation of untouched regions.”
  Recursive edits at 1K, different model-specific prompt interfaces, three sources.

Both original rendered pages displayed “2h ago” on October 7. October 7 is
inferred from that relative timestamp and check date, not an exact exported
publication timestamp. The article spells out this qualification. No X quotes
or grokbot findings were fabricated. No community findings are treated as our tests.

## Pricing and restrictions checked

Checked October 7 against Google model docs, Developer API pricing and Cloud
pricing, all linked in the article. Cloud table footnote explicitly says no Flex,
despite grouping rates under Flex/Batch/Off-peak. Standard is supported; Batch
is supported. AI Studio docs say Priority not supported while Cloud pricing
lists Priority; avoid promising it across surfaces. Rate figures remain internal.
Google 2.1 image output tokens: 1120/1680/3780 for 1K/2K/4K; input images
1120 each. Input and reasoning add charges, so output-only comparisons are
not full-job estimates. No prices or allowances appear in public article content.

## Final review and publication selection

`review.json` contains a per-model review for each of the five briefs, including
all failed cells, source selection and both independent cover candidates. Every
original was viewed. Necklace/closure details in campaign outputs were also
inspected in crops; crops are review-only and never used as published assets.

- Jacket 2.1 47133603: main garment features retained, altered collar lettering;
  internal only. Four historical incumbents retain central attributes sufficiently
  for editorial comparison, with label omission/texture differences disclosed.
- Serum: all five render the requested three marketing lines correctly; none
  passed exact packaging and geometry. 2.1 retains No. ROSE instead of requested
  No. 04 ROSE; Seedream duplicates 30 mL. Internal images, public observations.
- Identity: both supplied poses across all five models pass visual quality and
  recognizable identity/main-garment gates. Skin, detailed embroidery, styling,
  head tilt and facial proportion differences are disclosed. No biometric score.
- Campaign: all five assemble the three references, but collar, closure,
  accessory detail and/or full-length framing prevent strict approval. Internal
  images, public comparative table. No blanket multi-reference failure claim.
- Product cover 47133663: native 4800×3584, altered collar lettering; rejected.
- Portrait cover 47133692: native 4800×3584, cast+jacket references and added
  ivory-trouser direction. Passes article-size quality and central identity,
  garment-color/pattern/construction gates. Skin and cloth detail redrawn. It is
  a separate cover composition, not a rerun or replacement of a comparison cell.

`prepare-assets.py` preserves native dimensions in reviewed WebP packaging.
It publishes only the approved subset; no crop, upscaling or generative cleanup.
The only current article has date October 7, 2026. No numeric prices, charges or
allowances appear publicly; costs remain in internal results.json. See
validation.md for final checks. At editorial completion, before the publishing request, no Git commit or site deployment was performed.


## Publication request

User requested publication October 7, 2026. Release prepared from origin/main
in an isolated checkout, including only this article, its reviewed assets,
benchmark records and the content-ledger entry. The deployment target is the
repository's gh-pages branch and https://www.astria.ai/articles/nano-banana-2-1-fashion-ecommerce-marketing/.
The clean release checkout passes all 24 repository tests, TypeScript checking, and the production build. The article explicitly imports its comparison component so it renders on the current published branch.

## Supplemental small-text test

After publication, a sixth brief added five controlled beauty-bottle small-text runs. See `small-text/README.md`, `results.json` and `review.json` for the original SVG, exact 12–14 px source font settings, five matched submissions, complete outputs and selection rationale. Total comparison outputs: 30; earlier 25-cell records remain unchanged.

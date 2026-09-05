# Article analytics

## Audit and ownership

The repository previously configured only `G-PR5YMLZ2Y1` (the Articles GA4
property) through Docusaurus's classic gtag plugin. There were no custom CTA
events. The installed Docusaurus 3.10.2 plugin sent a pageview on hash/query
changes and included those values in `page_path`. The shared article banner
links to `/prompts` and `/gallery/workspaces`; inline links also lead to product
pages, pricing, the photoshoot calculator, model training and the packshot
workspace. Navigation and footer links use the same product host, so GA4's
automatic *outbound* click measurement does not cover them reliably.

`plugins/article-analytics` now owns the single gtag loader and pageview lifecycle.
The classic preset's `gtag` is disabled to avoid duplicate pageviews. The local
plugin runs only in production builds, and its loader and events run only at
`https://www.astria.ai/articles/…`. Local development and preview hosts send no
analytics. The delegated click listener survives SPA navigation without adding
listeners for each article or changing individual Markdown files.

## Main-property collection

Article traffic is sent to both the Articles property (`G-PR5YMLZ2Y1`) and the
main Astria property (`G-HCZ11XZYYX`). The latter is the public default web-stream
ID in the main application configuration. This makes new article-to-product
journeys observable in the main property while retaining the dedicated content
reporting view.

If the main site's stream changes, override it at build time:

```sh
ASTRIA_MAIN_GA4_MEASUREMENT_ID=<main Astria web stream G-… ID> npm run build
```

Set this in the actual build environment; a local `.env` file is not loaded by
this configuration. `analytics.config.js` validates the ID, keeps the Articles
destination, and deduplicates equal IDs. Both destinations receive pageviews and
custom events with explicit `send_to` routing, using one gtag.js script.

Use the **existing main-site web stream's measurement ID**, after verifying its
ownership and consent setup. Sharing that stream and its default first-party
cookies across the same `www.astria.ai` host makes article-to-product journeys
observable in the main property. No cross-domain linker or internal UTM tags
are needed for `/articles/` → `/prompts` on the same host. Do not add UTMs to
internal CTAs: they obscure the original acquisition source.

The reported 93% Direct share is an audit input, not a proven diagnosis from
repository code. Separate collection can obscure journeys; untagged campaigns,
referrer loss and consent can also affect attribution. Dual-tagging does not
repair past data or guarantee a particular Direct percentage. Compare new
campaign-tagged landings and article-to-product journeys after release.

## Event contract

Each accepted product-link activation emits `article_cta_click`. A qualifying
destination emits **one additional intent event** from this table. These are
click intentions, not completed generations, registrations, purchases or leads.

| Event | Destination | Suggested key event? |
| --- | --- | --- |
| `article_cta_click` | All allowlisted product destinations | No; use for CTA analysis |
| `article_generate_click` | `/prompts` | Yes |
| `article_train_model_click` | `/tunes/new` | Yes |
| `article_calculator_click` | `/photoshoot-calculator` | Yes |
| `article_packshots_click` | `/w/3d-packshots` | Yes |
| `article_plugin_click` | `/nano-banana-photoshop` | Optional |
| `article_pricing_click` | `/pricing` | Optional |

Home, templates, ecommerce, gallery, models, creators and affiliate destinations
emit only the general CTA event. Documentation, competitors, legal pages,
email links, unknown/private product paths, article navigation, downloads and
hash anchors are excluded. Relative and absolute product URLs, nested spans,
keyboard activation, modifier clicks and middle clicks are supported. Right
clicks are ignored. Delivery requests beacon transport and never waits for a
callback, prevents navigation or retries a click (which could double-count it).

| Parameter | Meaning / allowed values |
| --- | --- |
| `site_section` | Always `articles` |
| `article_path` | Current article or listing pathname, with trailing slash |
| `cta_id` | Fixed destination identifier such as `generate`, `templates`, `pricing` |
| `cta_location` | `article_banner`, `article_body`, `navbar`, `footer`, `page` |
| `destination_path` | Exact allowlisted product path; no query, fragment or private IDs |
| `page_kind` | `article` or `listing` (including other non-post pages) |

Events also carry standard `page_location`, `page_path`, `page_referrer` and
`page_title` context. `article_path` on a listing is the listing's path, not a
claimed attribution to an individual post; filter `page_kind = article` for
post-only CTA reports. `page_view` uses the same normalized page context.

To cover a new destination, add an exact mapping in
`src/analytics/tracker.js` and a regression test. Keep IDs stable rather than
using visible link copy. An ancestor with `data-analytics-ignore` excludes its
links from this custom event layer.

## Privacy and pageview behavior

- No form values, link text, email addresses, user IDs, raw destination URLs,
  arbitrary query parameters or fragments are added by this event layer.
- Page locations preserve only `utm_source`, `utm_medium`, `utm_campaign`,
  `utm_id`, `utm_term`, and `utm_content`, limited to 100 characters using a
  conservative public-tag character set. Never put personal information in
  campaign tags. Ad click identifiers and all other query keys are stripped;
  this intentionally does not implement advertising click-ID attribution.
- Referrers retain only origins, except public article paths on this host.
  Product workspace/model paths and all referrer queries are removed.
- Google Signals and ad-personalization signals are disabled in destination
  configuration. GPC, DNT and `window['ga-disable-G-…']` opt-outs are respected;
  all-destination opt-outs prevent loading the tag at startup.
- The integration never sends a Consent Mode grant or stores its own identity.
  It preserves consent commands already queued by a host consent manager.
  This repo has no consent manager; GPC/DNT support is not a substitute for
  one. If the host requires opt-in, initialize Consent Mode defaults before
  this bootstrap and let the host's consent manager own updates. In particular,
  this code does not claim that absence of a consent signal means consent.
- One pageview is queued after each committed pathname change, once the title
  is updated. Query-only, hash-only and slash-only changes do not add pageviews.
  No offline event storage, click retry or synthetic completed conversion is used.

GA4 Enhanced Measurement is configured remotely and can independently capture
raw link URLs, searches or form metadata. The GA4 setup below is required for
those collection paths and for avoiding automatic SPA pageview duplicates.

## GA4 admin and release steps (not performed by this change)

1. In each collecting property's **Admin → Data streams → Web stream → Enhanced
   measurement**, disable pageviews based on browser history changes. The local
   tracker sends manual SPA pageviews and sets `send_page_view: false` on config.
   Review and disable automatic outbound clicks, site search, form interactions,
   file downloads and video measurement if their URL/text collection is not
   approved. These are stream-wide settings: coordinate with the main-site owner
   before enabling its measurement ID; ensure the main site's SPA routes still
   have a pageview owner. Also verify there is no extra injected GA/GTM pageview
   tag or linked Google-tag destination duplicating this integration.
2. In **Admin → Data display → Events**, create/mark the selected intent event
   names above as key events (names are case-sensitive). For session-level
   conversion-intent reporting, choose **Once per session** counting. Do not
   mark both the general CTA event and its intent counterpart as key events for
   the same business outcome. Keep actual signup/purchase success events in the
   product implementation separate from these article clicks.
3. In **Admin → Data display → Custom definitions**, register event-scoped
   dimensions for `article_path`, `cta_id`, `cta_location`, `destination_path`,
   `page_kind`, and `site_section`. Use these for article → CTA → intent reports.
   Do this in both properties if dual collection is enabled; definitions and key
   event settings do not propagate between properties or backfill old reports.
4. On a separately approved release, use Tag Assistant / GA4 DebugView to verify
   one initial pageview and one on each article pathname change **per destination**.
   Test an external campaign landing, two article SPA navigations, a heading
   jump, Generate, Templates and inline pricing clicks. Confirm the CTA intent
   arrives before leaving and the main product visit shares the intended main
   stream session. Inspect that payloads exclude arbitrary query values and
   private referrer paths. Verify consent-denied and opt-out behavior against
   the host's actual consent implementation. This commit does not contact GA4.

## Canonical URL policy

`trailingSlash: true` already existed and is retained. Docusaurus owns generated
routes, canonical links and sitemap URLs, all ending in `/`. The analytics layer
normalizes paths the same way even when the host serves a slashless URL.

This repository contains no production reverse-proxy/CDN configuration. The
owner of `www.astria.ai` must issue a **301 or 308 redirect** from slashless
article page URLs to their slash versions, including `/articles` → `/articles/`,
preserving the query string. Exclude static assets/files and do not affect
product routes outside `/articles`. Verify legacy slug redirects still resolve.
Do not create a Docusaurus client redirect between two slash variants of the
same route; they resolve to the same output. Canonical tags and normalized event
paths do not themselves force an HTTP redirect or merge historical GA4 rows.

## Validation

```sh
npm test
npm run typecheck
npm run build
```

Tests simulate gtag locally and do not send data to Google. They cover routing,
privacy, bootstrap/SSR guards, conversion mapping, click handling and SPA counts.
As found during this change, `npm ci` fails because the existing lockfile is
out of sync (including the client-redirects dependency). Validation installed
dependencies with `npm install --no-package-lock --no-audit --no-fund`; lockfile
repair is separate from this analytics change.

References: [Docusaurus gtag plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag),
[manual GA4 pageviews](https://developers.google.com/analytics/devguides/collection/ga4/views),
[event routing](https://developers.google.com/tag-platform/gtagjs/routing),
[Enhanced Measurement](https://support.google.com/analytics/answer/9216061),
[custom events](https://support.google.com/analytics/answer/12229021).

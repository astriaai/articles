const ORIGIN = 'https://www.astria.ai';
const BASE_PATH = '/articles/';

function articlePath(pathname) {
  if (pathname !== '/articles' && !pathname.startsWith(BASE_PATH)) return null;
  return `${pathname.replace(/\/+$/, '')}/`;
}

// Only public marketing tags survive page URL sanitization, so campaign
// attribution still works. Never put personal data in campaign names.
const CAMPAIGN_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_id', 'utm_term', 'utm_content'];
function pageLocation(href) {
  const source = new URL(href);
  const path = articlePath(source.pathname);
  if (!path) return null;
  const clean = new URL(path, ORIGIN);
  for (const key of CAMPAIGN_KEYS) {
    const value = source.searchParams.get(key);
    if (value && /^[a-zA-Z0-9_. ~-]{1,100}$/.test(value)) clean.searchParams.set(key, value);
  }
  return clean.href;
}

function referrerLocation(href) {
  if (!href) return '';
  try {
    const url = new URL(href);
    if (!['http:', 'https:'].includes(url.protocol)) return '';
    // Product URLs can contain private workspace/model IDs. Retain only their origin.
    return url.origin === ORIGIN && articlePath(url.pathname)
      ? `${ORIGIN}${articlePath(url.pathname)}` : `${url.origin}/`;
  } catch { return ''; }
}

// Exact destinations keep arbitrary URLs, IDs, mail addresses, and link copy
// out of analytics. Adding a new product CTA requires an explicit mapping here.
const DESTINATIONS = new Map([
  ['/', ['home', null]],
  ['/prompts', ['generate', 'article_generate_click']],
  ['/tunes/new', ['train_model', 'article_train_model_click']],
  ['/pricing', ['pricing', 'article_pricing_click']],
  ['/photoshoot-calculator', ['photoshoot_calculator', 'article_calculator_click']],
  ['/ecommerce', ['ecommerce', null]],
  ['/gallery/workspaces', ['templates', null]],
  ['/w/3d-packshots', ['packshots', 'article_packshots_click']],
  ['/nano-banana-photoshop', ['photoshop_plugin', 'article_plugin_click']],
  ['/gallery', ['gallery', null]],
  ['/gallery/tunes', ['models', null]],
  ['/creators', ['creator_program', null]],
  ['/affiliate', ['affiliate_program', null]],
]);

function destination(href, currentHref) {
  try {
    const url = new URL(href, currentHref);
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.port) return null;
    if (!['www.astria.ai', 'astria.ai'].includes(url.hostname)) return null;
    const path = url.pathname.replace(/\/+$/, '') || '/';
    const entry = DESTINATIONS.get(path);
    return entry ? {cta_id: entry[0], intentEvent: entry[1], destination_path: path} : null;
  } catch { return null; }
}

function placement(anchor) {
  if (anchor.closest('.astria-article-cta')) return 'article_banner';
  if (anchor.closest('.navbar, .navbar-sidebar')) return 'navbar';
  if (anchor.closest('footer')) return 'footer';
  if (anchor.closest('article')) return 'article_body';
  return 'page';
}

function createTracker(win, measurementIDs) {
  const doc = win.document;
  let previousPage = '';
  let currentReferrer = referrerLocation(doc.referrer);
  const configuredIDs = new Set();
  let timer;

  function activeIDs() {
    if (win.location.origin !== ORIGIN || !articlePath(win.location.pathname) ||
        win.navigator.globalPrivacyControl === true || win.navigator.doNotTrack === '1' ||
        win.doNotTrack === '1' || typeof win.gtag !== 'function') return [];
    return measurementIDs.filter(id => !win[`ga-disable-${id}`]);
  }

  function send(name, params) {
    const ids = activeIDs();
    if (!ids.length) return;
    // A blocked or replaced analytics script must never break product navigation.
    try {
      win.gtag('event', name, {
        send_to: ids,
        transport_type: 'beacon',
        site_section: 'articles',
        ...params,
      });
    } catch { /* Analytics is best effort; never delay a click. */ }
  }

  function context() {
    const path = articlePath(win.location.pathname);
    return {
      article_path: path,
      page_path: path,
      page_location: pageLocation(win.location.href),
      page_referrer: currentReferrer,
      page_title: doc.title,
    };
  }

  function pageView() {
    if (!activeIDs().length) return;
    const params = context();
    const page = `${ORIGIN}${params.page_path}`;
    if (page === previousPage) return; // Ignore hash/query-only and slash-only changes.
    currentReferrer = previousPage || currentReferrer;
    params.page_referrer = currentReferrer;
    // Apply sanitized context to subsequent automatically collected GA events too.
    win.gtag('set', {
      page_location: params.page_location,
      page_referrer: params.page_referrer,
      page_title: params.page_title,
      page_path: params.page_path,
    });
    for (const id of activeIDs()) {
      if (configuredIDs.has(id)) continue;
      win.gtag('config', id, {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });
      configuredIDs.add(id);
    }
    send('page_view', params);
    previousPage = page;
  }

  function click(event) {
    if ((event.type === 'click' && event.button !== 0) ||
        (event.type === 'auxclick' && event.button !== 1)) return;
    const target = event.target?.closest ? event.target : event.target?.parentElement;
    const anchor = target?.closest('a[href]');
    if (!anchor || anchor.hasAttribute('download') ||
        anchor.closest('[data-analytics-ignore]')) return;
    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    const match = destination(href, win.location.href);
    if (!match) return;
    // An immediate click can precede the deferred initial route callback.
    try { pageView(); } catch { return; }
    const {intentEvent, ...targetParams} = match;
    const params = {
      ...context(),
      ...targetParams,
      cta_location: placement(anchor),
      page_kind: doc.querySelector('meta[property="og:type"][content="article"]') ? 'article' : 'listing',
    };
    send('article_cta_click', params);
    if (intentEvent) send(intentEvent, params);
  }

  // Delegation survives SPA navigation and handles nested spans, keyboard clicks,
  // modifier clicks, and middle clicks without changing navigation behavior.
  doc.addEventListener('click', click, true);
  doc.addEventListener('auxclick', click, true);
  return {
    schedulePageView() {
      win.clearTimeout(timer);
      timer = win.setTimeout(() => {
        try { pageView(); } catch { /* Analytics must not affect the page. */ }
      }, 0);
    },
    dispose() {
      win.clearTimeout(timer);
      doc.removeEventListener('click', click, true);
      doc.removeEventListener('auxclick', click, true);
    },
  };
}

module.exports = {articlePath, pageLocation, referrerLocation, destination, createTracker};

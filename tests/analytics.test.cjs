const assert = require('node:assert/strict');
const {test} = require('node:test');
const {runInNewContext} = require('node:vm');
const {execFileSync} = require('node:child_process');
const {
  articlePath, pageLocation, referrerLocation, destination, createTracker,
} = require('../src/analytics/tracker');

const IDS = ['G-PR5YMLZ2Y1', 'G-TESTMAIN01'];

function fixture(href = 'https://www.astria.ai/articles/ai-lookbook-guide?email=private#heading') {
  const calls = [];
  const listeners = new Map();
  const jobs = new Map();
  let timer = 0;
  const doc = {
    title: 'AI Lookbook Guide',
    referrer: 'https://www.astria.ai/users/123?token=secret',
    querySelector: () => ({}),
    addEventListener(name, handler) { listeners.set(name, handler); },
    removeEventListener(name) { listeners.delete(name); },
  };
  const win = {
    location: new URL(href), document: doc, navigator: {},
    gtag: (...args) => calls.push(args),
    setTimeout(fn) { jobs.set(++timer, fn); return timer; },
    clearTimeout(id) { jobs.delete(id); },
  };
  const tracker = createTracker(win, IDS);
  function flush() { for (const [id, fn] of jobs) { jobs.delete(id); fn(); } }
  function click(href, {area = 'article', type = 'click', button = 0, ignore = false, download = false} = {}) {
    const anchor = {
      getAttribute: () => href,
      hasAttribute: name => name === 'download' && download,
      closest(selector) {
        if (selector === '[data-analytics-ignore]') return ignore ? this : null;
        if (selector === 'a[href]' || selector === area) return this;
        return null;
      },
    };
    // A nested span is the event target, as in every banner CTA.
    const target = {closest: selector => selector === 'a[href]' ? anchor : null};
    listeners.get(type)({target, type, button});
  }
  return {win, doc, calls, listeners, tracker, flush, click,
    events: () => calls.filter(c => c[0] === 'event')};
}

test('canonical article paths and page URLs drop unknown query values and fragments', () => {
  assert.equal(articlePath('/articles'), '/articles/');
  assert.equal(articlePath('/articles/guide///'), '/articles/guide/');
  assert.equal(articlePath('/articles-other/private'), null);
  assert.equal(pageLocation('https://www.astria.ai/articles/guide?email=secret&utm_source=newsletter&utm_medium=email#topic'),
    'https://www.astria.ai/articles/guide/?utm_source=newsletter&utm_medium=email');
  assert.equal(pageLocation('https://www.astria.ai/articles/guide?utm_term=user%40example.com&token=secret'),
    'https://www.astria.ai/articles/guide/');
  assert.equal(referrerLocation('https://example.com/private?email=secret'), 'https://example.com/');
  assert.equal(referrerLocation('https://www.astria.ai/articles/guide?token=secret#heading'), 'https://www.astria.ai/articles/guide/');
  assert.equal(referrerLocation('javascript:alert(1)'), '');
});

test('destination matching accepts equivalent URLs and never emits arbitrary targets', () => {
  for (const href of ['/prompts', 'https://www.astria.ai/prompts/?secret=1', '//astria.ai/prompts#heading']) {
    assert.deepEqual(destination(href, 'https://www.astria.ai/articles/guide/'), {
      cta_id: 'generate', intentEvent: 'article_generate_click', destination_path: '/prompts',
    });
  }
  for (const href of ['https://www.astria.ai.evil.test/prompts', 'https://evil.test/prompts',
    'https://user:password@www.astria.ai/prompts', '/tunes/123/prompts', '/users/123',
    '/articles/guide', '/privacy', 'mailto:user@example.com', 'javascript:alert(1)']) {
    assert.equal(destination(href, 'https://www.astria.ai/articles/guide/'), null, href);
  }
});

test('one initial pageview and one per SPA pathname, with safe referrer and dual routing', () => {
  const f = fixture();
  f.tracker.schedulePageView();
  f.tracker.schedulePageView();
  f.flush();
  assert.equal(f.events().length, 1);
  assert.deepEqual(f.events()[0][2].send_to, IDS);
  assert.equal(f.events()[0][2].page_path, '/articles/ai-lookbook-guide/');
  assert.equal(f.events()[0][2].page_referrer, 'https://www.astria.ai/');
  assert.equal(f.calls.filter(c => c[0] === 'config').length, 2);
  for (const config of f.calls.filter(c => c[0] === 'config')) {
    assert.equal(config[2].send_page_view, false);
    assert.equal(config[2].allow_google_signals, false);
    assert.equal(config[2].allow_ad_personalization_signals, false);
  }
  f.win.location = new URL('https://www.astria.ai/articles/ai-lookbook-guide/?search=private#other');
  f.tracker.schedulePageView(); f.flush();
  assert.equal(f.events().length, 1);
  f.win.location = new URL('https://www.astria.ai/articles/face-id/');
  f.doc.title = 'Face ID';
  f.tracker.schedulePageView(); f.flush();
  assert.equal(f.events().length, 2);
  assert.equal(f.events()[1][2].page_referrer, 'https://www.astria.ai/articles/ai-lookbook-guide/');
  assert.equal(f.events()[1][2].page_title, 'Face ID');
  assert.equal(f.calls.filter(c => c[0] === 'config').length, 2);
  assert.doesNotMatch(JSON.stringify(f.calls), /private|secret|email=|#heading|users\/123/);
});

test('nested banner and keyboard clicks emit general and intent events without raw URLs', () => {
  const f = fixture();
  f.click('/prompts?email=secret#private', {area: '.astria-article-cta'});
  assert.deepEqual(f.events().map(c => c[1]), ['page_view', 'article_cta_click', 'article_generate_click']);
  const params = f.events()[1][2];
  assert.equal(params.cta_location, 'article_banner');
  assert.equal(params.cta_id, 'generate');
  assert.equal(params.destination_path, '/prompts');
  assert.equal(params.transport_type, 'beacon');
  assert.equal(params.page_kind, 'article');
  assert.doesNotMatch(JSON.stringify(f.calls), /secret|private|link_text|link_url/);
});

test('templates, inline pricing, footer, navbar and middle clicks are classified', () => {
  const f = fixture();
  f.click('/gallery/workspaces');
  assert.equal(f.events().at(-1)[1], 'article_cta_click');
  assert.equal(f.events().at(-1)[2].cta_location, 'article_body');
  f.click('/pricing', {area: 'footer', type: 'auxclick', button: 1});
  assert.equal(f.events().at(-1)[1], 'article_pricing_click');
  assert.equal(f.events().at(-1)[2].cta_location, 'footer');
  f.doc.querySelector = () => null;
  f.click('/', {area: '.navbar, .navbar-sidebar'});
  assert.equal(f.events().at(-1)[2].cta_location, 'navbar');
  assert.equal(f.events().at(-1)[2].page_kind, 'listing');
});

test('right clicks, internal navigation, downloads and opt-out elements are ignored', () => {
  const f = fixture();
  f.click('/prompts', {type: 'auxclick', button: 2});
  f.click('/prompts', {button: 1});
  f.click('/prompts', {ignore: true});
  f.click('/prompts', {download: true});
  f.click('#heading');
  f.click('/articles/face-id/');
  f.click('https://competitor.test/pricing');
  assert.equal(f.calls.length, 0);
  f.tracker.dispose();
  assert.equal(f.listeners.size, 0);
});

test('missing/throwing gtag, preview origins, GPC/DNT and per-property opt-outs are safe', () => {
  for (const change of [
    f => { f.win.gtag = undefined; },
    f => { f.win.gtag = () => { throw new Error('blocked'); }; },
    f => { f.win.navigator.globalPrivacyControl = true; },
    f => { f.win.navigator.doNotTrack = '1'; },
    f => { f.win.location = new URL('http://localhost:3009/articles/guide/'); },
    f => { f.win.location = new URL('https://preview.example/articles/guide/'); },
    f => { IDS.forEach(id => { f.win[`ga-disable-${id}`] = true; }); },
  ]) {
    const f = fixture(); change(f);
    assert.doesNotThrow(() => { f.tracker.schedulePageView(); f.flush(); f.click('/prompts'); });
    assert.equal(f.events().length, 0);
  }
  const f = fixture();
  f.win[`ga-disable-${IDS[1]}`] = true;
  f.click('/prompts');
  assert.deepEqual(f.events().at(-1)[2].send_to, [IDS[0]]);
});

test('production bootstrap queues safely, preserves consent state and skips privacy opt-outs', () => {
  const previousEnv = process.env.NODE_ENV;
  process.env.NODE_ENV = 'production';
  try {
    const plugin = require('../plugins/article-analytics')();
    const script = plugin.injectHtmlTags().headTags[0].innerHTML;
    for (const blocked of [false, true]) {
      const appended = [];
      const initialConsent = ['consent', 'default', {analytics_storage: 'denied'}];
      const win = {dataLayer: [initialConsent]};
      runInNewContext(script, {
        window: win, location: new URL('https://www.astria.ai/articles/guide/'),
        navigator: {globalPrivacyControl: blocked},
        document: {createElement: () => ({}), head: {appendChild: el => appended.push(el)}},
      });
      assert.equal(appended.length, blocked ? 0 : 1);
      assert.equal(win.dataLayer[0], initialConsent);
      assert.equal(win.dataLayer.length, blocked ? 1 : 2);
      if (!blocked) assert.match(appended[0].src, /id=G-PR5YMLZ2Y1$/);
    }
    process.env.NODE_ENV = 'development';
    assert.equal(require('../plugins/article-analytics')().getClientModules, undefined);
  } finally {
    if (previousEnv === undefined) delete process.env.NODE_ENV;
    else process.env.NODE_ENV = previousEnv;
  }
});

test('main measurement ID defaults, validates overrides and deduplicates', () => {
  function readConfig(value) {
    return JSON.parse(execFileSync(process.execPath, ['-e',
      'process.stdout.write(JSON.stringify(require("./analytics.config")))'], {
      cwd: require('node:path').resolve(__dirname, '..'),
      env: {...process.env, ASTRIA_MAIN_GA4_MEASUREMENT_ID: value},
      stdio: ['ignore', 'pipe', 'pipe'],
    }));
  }
  assert.deepEqual(readConfig('').measurementIDs, [IDS[0], 'G-HCZ11XZYYX']);
  assert.deepEqual(readConfig(` ${IDS[0]} `).measurementIDs, [IDS[0]]);
  assert.deepEqual(readConfig(IDS[1]).measurementIDs, IDS);
  assert.throws(() => readConfig("G-';alert(1)"));
});

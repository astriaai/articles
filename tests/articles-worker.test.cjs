const assert = require('node:assert/strict');
const {test} = require('node:test');
const {createHash} = require('node:crypto');

async function fixture() {
  const {createHandler} = await import('../workers/articles.mjs');
  const objects = new Map();
  const cacheStore = new Map();
  const cache = {
    async match(request) { return cacheStore.get(request.url)?.clone(); },
    async put(request, response) { cacheStore.set(request.url, response.clone()); },
  };
  const bucket = {
    async get(key, options) {
      if (!objects.has(key)) return null;
      const value = objects.get(key);
      if (typeof value !== 'string') return {json: async () => structuredClone(value)};
      const bytes = Buffer.from(value);
      let body = bytes;
      // R2 can describe a full object's byte range even without a Range request.
      let range = {offset: 0, length: bytes.length};
      if (options?.range) {
        const spec = options.range;
        const offset = spec.suffix ? Math.max(0, bytes.length - spec.suffix) : spec.offset;
        const length = spec.length ?? bytes.length - offset;
        body = bytes.subarray(offset, offset + length);
        range = {offset, length: body.length};
      }
      return {body, size: bytes.length, range,
        httpEtag: '"' + createHash('md5').update(bytes).digest('hex') + '"'};
    },
  };
  function release(name, content = '<h1>Visible article text</h1>') {
    const files = {};
    for (const [path, text] of Object.entries({
      'index.html': content, 'guide/index.html': content, '404.html': '<h1>Page not found</h1>',
      'assets/main.12345678.js': 'console.log("ready")', 'sitemap.xml': '<urlset/>',
      'video/demo.mp4': '0123456789',
    })) {
      const sha256 = createHash('sha256').update(text).digest('hex');
      files[path] = {sha256};
      objects.set('objects/' + sha256, text);
    }
    objects.set('releases/' + name + '.json', {release: name, files});
    objects.set('_current.json', {release: name});
  }
  release('one');
  const handle = createHandler();
  async function request(path, options) {
    const pending = [];
    const response = await handle(new Request('https://www.astria.ai' + path, options),
      {ARTICLES_BUCKET: bucket}, {waitUntil: p => pending.push(p)},
      {cache, fetch: async req => new Response('Rails: ' + new URL(req.url).pathname)});
    await Promise.all(pending);
    return response;
  }
  return {request, release, objects};
}

test('root, slashless and legacy routes redirect canonically and keep the query', async () => {
  const {request} = await fixture();
  for (const [path, target] of [
    ['/articles?utm_source=test', '/articles/?utm_source=test'],
    ['/articles/guide?q=1', '/articles/guide/?q=1'],
    ['/articles/face-id/?q=1', '/articles/ai-headshots-without-model-training/?q=1'],
    ['/articles/fine-tuning-flux.1', '/articles/fine-tuning-flux/'],
  ]) {
    const response = await request(path);
    assert.equal(response.status, 301);
    assert.equal(response.headers.get('location'), 'https://www.astria.ai' + target);
  }
});

test('Markdown and other site routes retain their Rails owner', async () => {
  const {request} = await fixture();
  for (const path of ['/articles/guide.md', '/articles/guide%2Emd', '/academy/', '/articles-other']) {
    const response = await request(path);
    assert.match(await response.text(), /^Rails:/);
  }
  assert.equal((await request('/articles/foo%2F..%2Fsecret/')).status, 400);
});

test('missing pages return the real 404 document with noindex', async () => {
  const {request} = await fixture();
  const response = await request('/articles/does-not-exist/');
  assert.equal(response.status, 404);
  assert.equal(response.headers.get('x-robots-tag'), 'noindex');
  assert.match(await response.text(), /Page not found/);
  assert.equal((await request('/articles/guide/', {method: 'POST'})).status, 405);
});

test('switching the release pointer serves new HTML despite an existing edge cache', async () => {
  const {request, release} = await fixture();
  const first = await request('/articles/guide/');
  assert.equal(first.status, 200);
  assert.equal(first.headers.get('x-astria-articles-cache'), 'MISS');
  assert.equal((await request('/articles/guide/?utm_source=test')).headers.get('x-astria-articles-cache'), 'HIT');
  release('two', '<h1>New article text</h1>');
  const second = await request('/articles/guide/');
  assert.equal(second.headers.get('x-astria-release'), 'two');
  assert.equal(second.headers.get('x-astria-articles-cache'), 'MISS');
  assert.match(await second.text(), /New article text/);
});

test('HEAD, conditional requests, immutable assets and media ranges keep HTTP semantics', async () => {
  const {request} = await fixture();
  const asset = await request('/articles/assets/main.12345678.js');
  assert.equal(asset.status, 200);
  assert.match(asset.headers.get('content-type'), /^text\/javascript/);
  assert.match(asset.headers.get('cache-control'), /immutable/);
  const head = await request('/articles/assets/main.12345678.js', {method: 'HEAD'});
  assert.equal(await head.text(), '');
  assert.equal(head.headers.get('content-length'), asset.headers.get('content-length'));
  const conditional = await request('/articles/assets/main.12345678.js',
    {headers: {'if-none-match': asset.headers.get('etag')}});
  assert.equal(conditional.status, 304);
  const range = await request('/articles/video/demo.mp4', {headers: {range: 'bytes=0-3'}});
  assert.equal(range.status, 206);
  assert.equal(range.headers.get('content-range'), 'bytes 0-3/10');
  assert.equal(await range.text(), '0123');
  assert.equal((await request('/articles/video/demo.mp4',
    {headers: {range: 'bytes=0-1,5-6'}})).status, 416);
});

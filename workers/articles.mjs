const PREFIX = '/articles';
const REDIRECTS = {
  '/fine-tuning-flux.1': '/fine-tuning-flux/',
  '/face-id': '/ai-headshots-without-model-training/',
  '/on-brand': '/ai-headshots-for-teams/',
  '/virtual-tryon': '/virtual-try-on-for-fashion-brands/',
};
const MIME = {
  html: 'text/html; charset=utf-8', css: 'text/css; charset=utf-8',
  js: 'text/javascript; charset=utf-8', json: 'application/json; charset=utf-8',
  xml: 'application/xml; charset=utf-8', txt: 'text/plain; charset=utf-8',
  csv: 'text/csv; charset=utf-8', svg: 'image/svg+xml', webp: 'image/webp',
  avif: 'image/avif', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg',
  gif: 'image/gif', ico: 'image/x-icon', mp4: 'video/mp4', webm: 'video/webm',
  pdf: 'application/pdf', woff: 'font/woff', woff2: 'font/woff2', ttf: 'font/ttf',
};
const IMMUTABLE = /\.[a-f0-9]{8,}\.(?:js|css|woff2?|png|webp|jpg|svg)$/i;
const RELEASE = /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,100}$/;

function redirect(url, path) {
  url.pathname = path;
  return Response.redirect(url.toString(), 301);
}

function objectPath(url) {
  const parts = url.pathname.slice(PREFIX.length).split('/').filter(Boolean);
  let decoded;
  try { decoded = parts.map(part => decodeURIComponent(part)); }
  catch { return null; }
  if (decoded.some(part => part === '..' || part === '.' || /[/\\\0]/.test(part))) return null;
  const key = decoded.join('/');
  return !key ? 'index.html' : url.pathname.endsWith('/') ? key + '/index.html' : key;
}

function rangeFor(value) {
  if (!value) return undefined;
  const match = /^bytes=(\d*)-(\d*)$/.exec(value);
  if (!match || (!match[1] && !match[2])) return null;
  const start = match[1] ? Number(match[1]) : undefined;
  const end = match[2] ? Number(match[2]) : undefined;
  if ([start, end].some(n => n !== undefined && !Number.isSafeInteger(n)) ||
      (start !== undefined && end !== undefined && end < start)) return null;
  return start === undefined ? {suffix: end} :
    end === undefined ? {offset: start} : {offset: start, length: end - start + 1};
}

export function createHandler() {
  // Manifests and blobs are immutable. Each request reads only the tiny current
  // pointer before using an isolate-cached manifest and a release-specific cache.
  const manifests = new Map();
  return async function handle(request, env, ctx, services = {}) {
    const url = new URL(request.url);
    const originFetch = services.fetch ?? fetch;
    if (url.pathname !== PREFIX && !url.pathname.startsWith(PREFIX + '/')) return originFetch(request);
    const key = objectPath(url);
    if (key === null) return new Response('Bad path\n', {status: 400});
    // The Rails public Markdown catalog remains the owner of these endpoints.
    if (url.pathname.toLowerCase().endsWith('.md') || key.toLowerCase().endsWith('.md')) {
      return originFetch(request);
    }
    if (!['GET', 'HEAD'].includes(request.method)) {
      return new Response('Method not allowed\n', {status: 405, headers: {allow: 'GET, HEAD'}});
    }
    const legacy = url.pathname.slice(PREFIX.length).replace(/\/$/, '');
    if (REDIRECTS[legacy]) return redirect(url, PREFIX + REDIRECTS[legacy]);
    if (url.pathname === PREFIX ||
        (!url.pathname.endsWith('/') && !url.pathname.split('/').at(-1).includes('.'))) {
      return redirect(url, url.pathname + '/');
    }

    const bucket = env.ARTICLES_BUCKET;
    const pointer = await bucket.get('_current.json');
    if (!pointer) return new Response('Release unavailable\n', {status: 503});
    const {release} = await pointer.json();
    if (!RELEASE.test(release ?? '')) return new Response('Invalid release\n', {status: 503});
    if (!manifests.has(release)) {
      const pending = bucket.get('releases/' + release + '.json').then(async object => {
        if (!object) throw new Error('Release manifest unavailable');
        const manifest = await object.json();
        if (manifest.release !== release || !manifest.files) throw new Error('Invalid release manifest');
        return manifest;
      });
      manifests.set(release, pending);
      pending.catch(() => manifests.delete(release));
      if (manifests.size > 3) manifests.delete(manifests.keys().next().value);
    }
    const manifest = await manifests.get(release);
    const found = Object.hasOwn(manifest.files, key);
    const entry = manifest.files[found ? key : '404.html'];
    const status = found ? 200 : 404;
    const cache = services.cache ?? globalThis.caches?.default;
    const cacheURL = new URL(url);
    cacheURL.search = '';
    cacheURL.searchParams.set('__release', release);
    const cacheKey = new Request(cacheURL, {method: 'GET'});
    const range = rangeFor(request.headers.get('range'));
    if (range === null) return new Response('Invalid range\n', {status: 416});
    if (!range && cache) {
      const cached = await cache.match(cacheKey);
      if (cached) {
        const headers = new Headers(cached.headers);
        headers.set('x-astria-articles-cache', 'HIT');
        if (request.headers.get('if-none-match') === headers.get('etag')) {
          return new Response(null, {status: 304, headers});
        }
        return new Response(request.method === 'HEAD' ? null : cached.body, {status: cached.status, headers});
      }
    }
    if (!entry || !/^[a-f0-9]{64}$/.test(entry.sha256)) {
      return new Response('Not found\n', {status: 404, headers: {'x-robots-tag': 'noindex'}});
    }
    if (range && (range.offset >= entry.size || range.suffix === 0)) {
      return new Response(null, {status: 416, headers: {'content-range': 'bytes */' + entry.size}});
    }
    const object = await bucket.get('objects/' + entry.sha256, range ? {range} : undefined);
    if (!object) throw new Error('Release blob unavailable: ' + key);
    const ext = (found ? key : '404.html').split('.').at(-1).toLowerCase();
    const ttl = status === 404 ? 60 : ext === 'html' ? 120 :
      ['xml', 'json', 'txt'].includes(ext) ? 300 : IMMUTABLE.test(key) ? 31536000 : 3600;
    const headers = new Headers({
      'content-type': MIME[ext] ?? 'application/octet-stream',
      'cache-control': 'public, max-age=' + ttl + (IMMUTABLE.test(key) && found ? ', immutable' : ''),
      etag: object.httpEtag,
      'content-length': String(object.range?.length ?? object.size),
      'accept-ranges': 'bytes',
      'x-content-type-options': 'nosniff',
      'x-astria-articles': 'r2',
      'x-astria-articles-cache': 'MISS',
      'x-astria-release': release,
    });
    if (status === 404) headers.set('x-robots-tag', 'noindex');
    if (request.headers.get('if-none-match') === object.httpEtag) {
      return new Response(null, {status: 304, headers});
    }
    if (range && object.range) {
      const offset = object.range.offset ?? Math.max(0, object.size - object.range.suffix);
      const length = object.range.length ?? object.size - offset;
      headers.set('content-range', 'bytes ' + offset + '-' + (offset + length - 1) + '/' + object.size);
      headers.set('content-length', String(length));
    }
    const response = new Response(request.method === 'HEAD' ? null : object.body,
      {status: range && object.range && found ? 206 : status, headers});
    if (request.method === 'GET' && !range && cache) ctx.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  };
}

const handle = createHandler();
export default {
  async fetch(request, env, ctx) {
    // Infrastructure exceptions can fall through to the retained Rails/Pages
    // origin. Ordinary missing pages still return a real, index-safe 404.
    ctx.passThroughOnException();
    return handle(request, env, ctx);
  },
};

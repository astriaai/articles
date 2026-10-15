#!/usr/bin/env node
// @docusaurus/plugin-client-redirects emits each redirect as a 200-status HTML stub
// containing only a <meta http-equiv="refresh">. The stub carries no <title>, so once
// Google indexes it the search listing has nothing to click: /articles/face-id/ was
// ranking at position 4.1 on 38 impressions with 0 clicks (GSC, 2026-10-15).
//
// gh-pages cannot serve a real 301, so the next best thing is to keep the stub working
// for humans while telling Google not to index it and where the content really lives.
//
// This runs as a build step rather than a plugin because Docusaurus executes postBuild
// hooks in parallel, so a plugin cannot reliably run after client-redirects writes them.
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', 'build');
const SITE = 'https://www.astria.ai';

function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : e.name === 'index.html' ? [p] : [];
  });
}

if (!fs.existsSync(outDir)) {
  console.error('[noindex-redirects] no build/ directory — run the build first');
  process.exit(1);
}

let patched = 0;
for (const file of walk(outDir)) {
  const html = fs.readFileSync(file, 'utf8');
  const m = html.match(/http-equiv="refresh"[^>]*url=([^"']+)/i);
  // Only redirect stubs: a refresh meta and no real document title.
  if (!m || /<title>/i.test(html)) continue;

  const target = m[1].startsWith('http') ? m[1] : SITE + m[1];
  const head =
    '\n    <title>Redirecting…</title>' +
    '\n    <meta name="robots" content="noindex, follow">';
  let out = html.replace(/<head>/i, '<head>' + head);
  // client-redirects already writes a relative canonical; make it absolute.
  out = out.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${target}" />`,
  );
  fs.writeFileSync(file, out);
  patched += 1;
}
console.log(`[noindex-redirects] patched ${patched} redirect stub(s)`);

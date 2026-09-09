const assert = require('node:assert/strict');
const {test} = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');

const root = path.resolve(__dirname, '..');
const blogDir = path.join(root, 'blog');
const articles = fs.readdirSync(blogDir).filter(name => name.endsWith('.md'));
const filename = path.join(root, 'src/components/ArticleEvidence/index.tsx');
const component = fs.readFileSync(filename, 'utf8');
const profileDefinitions = component.split('const profiles = {')[1].split('} satisfies')[0];
const implemented = [...profileDefinitions.matchAll(/^  ([A-Za-z]+): \{/gm)].map(match => match[1]);
const compiled = new Module(filename, module);
compiled.filename = filename;
compiled.paths = module.paths;
const originalRequire = compiled.require.bind(compiled);
compiled.require = id => id.endsWith('.css') ? {} : originalRequire(id);
compiled._compile(ts.transpileModule(component, {
  compilerOptions: {jsx: ts.JsxEmit.React, module: ts.ModuleKind.CommonJS, esModuleInterop: true},
}).outputText, filename);
const render = profile => renderToStaticMarkup(React.createElement(compiled.exports.default, {profile}));

test('article examples are optional and referenced profiles must exist', () => {
  for (const name of articles) {
    const body = fs.readFileSync(path.join(blogDir, name), 'utf8');
    const requested = [...body.matchAll(/<ArticleEvidence\s+profile="([A-Za-z]+)"\s*\/>/g)].map(match => match[1]);
    assert.ok(requested.length <= 1, `${name}: duplicate example`);
    for (const profile of requested) assert.ok(implemented.includes(profile), `${name}: unknown profile ${profile}`);
  }
});

test('every example renders two real media assets with descriptive captions', () => {
  assert.ok(implemented.length > 0);
  for (const profile of implemented) {
    const html = render(profile);
    assert.equal((html.match(/<figure>/g) || []).length, 2, profile);
    assert.equal((html.match(/<figcaption>[^<]+<\/figcaption>/g) || []).length, 2, profile);
    const media = [...html.matchAll(/<(?:img|video)\s[^>]*src="([^"]+)"/g)].map(match => match[1]);
    assert.equal(media.length, 2, profile);
    for (const src of media) {
      assert.ok(src.startsWith('/articles/'), `${profile}: ${src}`);
      assert.ok(fs.statSync(path.join(root, 'static', src.slice('/articles/'.length))).size > 0, `${profile}: missing ${src}`);
    }
    assert.doesNotMatch(html, /<ol|<nav/, `${profile}: examples should not render a workflow or resource menu`);
  }
});

test('example resources stay relevant and limited to two links', () => {
  for (const profile of implemented) {
    const html = render(profile);
    const links = [...html.matchAll(/<a\s[^>]*href="([^"]+)"/g)].map(match => match[1]);
    // A video fallback is a media link rather than an additional resource.
    const resources = links.filter(url => !url.endsWith('.mp4'));
    assert.ok(resources.length > 0 && resources.length <= 2, profile);
    assert.ok(resources.every(url => url.startsWith('/articles/') || new URL(url).origin === 'https://www.astria.ai'), profile);
  }
});

test('video example retains accessible native playback and a visible poster', () => {
  const html = render('video');
  assert.match(html, /<video[^>]*poster="[^"]+"[^>]*controls=""[^>]*playsinline=""[^>]*aria-label="[^"]+"/);
  assert.doesNotMatch(html, /autoplay/);
});

test('every blog post uses the Astria CTA rail instead of an article outline', () => {
  const page = fs.readFileSync(path.join(root, 'src/theme/BlogPostPage/index.tsx'), 'utf8');
  const cta = fs.readFileSync(path.join(root, 'src/components/ArticleCTA/index.tsx'), 'utf8');

  assert.match(page, /<BlogLayout sidebar=\{sidebar\} toc=\{<ArticleCTA \/>\}>/);
  assert.doesNotMatch(page, /@theme\/TOC|<TOC/);
  assert.match(cta, /href="\/prompts"/);
  assert.match(cta, /href="\/gallery\/workspaces"/);
});

test('video comparisons stack one full-width player per row', () => {
  const styles = fs.readFileSync(
    path.join(root, 'src/components/VideoModelComparison/styles.module.css'),
    'utf8',
  );

  assert.match(styles, /\.grid\s*\{[^}]*grid-template-columns: minmax\(0, 1fr\)/s);
  assert.doesNotMatch(styles, /grid-template-columns: repeat\(2,/);
});

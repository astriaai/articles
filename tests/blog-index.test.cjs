const assert = require('node:assert/strict');
const {test} = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const {runInNewContext} = require('node:vm');
const ts = require('typescript');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');

const source = fs.readFileSync(path.join(__dirname, '../src/components/BlogIndex/index.tsx'), 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: {jsx: ts.JsxEmit.React, module: ts.ModuleKind.CommonJS, esModuleInterop: true},
}).outputText;
const exportsObject = {};
const Link = ({to, children, ...props}) => React.createElement('a', {href: to, ...props}, children);
runInNewContext(compiled, {
  exports: exportsObject,
  require(name) {
    if (name === '@docusaurus/Link') return Link;
    if (name === '@docusaurus/useBaseUrl') return value => `/articles/${value.replace(/^\//, '')}`;
    if (name === '@docusaurus/useDocusaurusContext') return () => ({i18n: {currentLocale: 'en'}});
    if (name === './categories') return {blogCategories: []};
    if (name === './styles.module.css') return {};
    if (name === '@theme/BlogListPaginator') return ({metadata}) =>
      React.createElement('nav', {},
        metadata.previousPage && React.createElement(Link, {to: metadata.previousPage}, 'Newer entries'),
        metadata.nextPage && React.createElement(Link, {to: metadata.nextPage}, 'Older entries'));
    return require(name);
  },
});

function render({page = 1, permalink = '/articles/', title = 'An article', nextPage = '/articles/page/2/'} = {}) {
  const props = {
    items: [{content: {
      metadata: {title, permalink: '/articles/an-article/', description: 'Description',
        date: '2026-10-15T00:00:00.000Z', authors: [], tags: [], readingTime: 2},
      frontMatter: {image: '/img/cover.jpg', privateEditorialNotes: 'Do not serialize'},
      default: () => {throw new Error('Article MDX must not execute on the index');},
    }}],
    listMetadata: {page, permalink, nextPage,
      previousPage: page > 1 ? '/articles/' : undefined},
    activeLabel: 'All articles', eyebrow: 'Blog', title: 'Articles', showFeatured: true,
  };
  return renderToStaticMarkup(React.createElement(exportsObject.default, props));
}

function payload(html) {
  const match = html.match(/<script[^>]*data-blog-index[^>]*>(.*?)<\/script>/s);
  assert.ok(match, 'Every index must expose card data for the next-page loader');
  return JSON.parse(match[1]);
}

test('static article indexes retain pagination and expose only card data', () => {
  const html = render();
  const data = payload(html);
  assert.equal(data.page, 1);
  assert.equal(data.permalink, '/articles/');
  assert.equal(data.nextPage, '/articles/page/2/');
  assert.equal(data.items[0].frontMatter.image, '/img/cover.jpg');
  assert.equal(data.items[0].metadata.title, 'An article');
  assert.doesNotMatch(html, /privateEditorialNotes|Do not serialize/);
  assert.match(html, /href="\/articles\/page\/2\/">Older entries/);
});

test('category indexes support direct page entry and stop at the last page', () => {
  const lastHtml = render({page: 2, permalink: '/articles/tags/guides/page/2/', nextPage: null});
  assert.equal(payload(lastHtml).permalink, '/articles/tags/guides/page/2/');
  assert.equal(payload(lastHtml).nextPage, null);
  assert.match(lastHtml, /Newer entries/);
  assert.doesNotMatch(lastHtml, /Older entries/);
});

test('article titles cannot terminate the embedded JSON script', () => {
  const title = '</script><script>alert("unsafe")</script>';
  const html = render({title});
  assert.equal(payload(html).items[0].metadata.title, title);
  assert.doesNotMatch(html, /<script>alert/);
  assert.equal((html.match(/<script/g) || []).length, 1);
});

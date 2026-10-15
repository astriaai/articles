const assert = require('node:assert/strict');
const {test} = require('node:test');
const fs = require('node:fs');
const path = require('node:path');

const blogDir = path.resolve(__dirname, '..', 'blog');
const articles = fs.readdirSync(blogDir)
  .filter(name => name.endsWith('.md'))
  .map(name => ({name, body: fs.readFileSync(path.join(blogDir, name), 'utf8')}));

const comparisonCluster = new Set([
  'astria-plugin-vs-photoshop-generative-fill.md',
  'astria-vs-pablo-photoshop-plugin.md',
  'astria-vs-medicraft-nano-banana-generative-fill.md',
  'astria-vs-eti-image-photoshop-plugin.md',
  'astria-vs-creator-max-photoshop-plugin.md',
  'best-nano-banana-photoshop-plugins.md',
]);

test('articles do not publish fixed prices, credit allowances, or promotional generation amounts', () => {
  const forbidden = [
    /(?:US)?[$€£]\s?\d/,
    /\b(?:USD|EUR|GBP)\s*\d/i,
    /\b\d[\d,.]*\s+(?:dollars?|euros?|pounds?)\b/i,
    /\b\d[\d,.]*\s+(?:generative\s+)?credits?\b/i,
    /\b\d[\d,.]*\s+free generations?\b/i,
  ];
  const violations = [];

  for (const article of articles) {
    for (const pattern of forbidden) {
      if (pattern.test(article.body)) violations.push(`${article.name}: ${pattern}`);
    }
  }

  assert.deepEqual(violations, []);
});

test('Photoshop comparison search titles stay concise', () => {
  const violations = [];
  for (const article of articles.filter(({name}) => comparisonCluster.has(name))) {
    const title = article.body.match(/^title:\s*["']?([^\n"']+)/m)?.[1]?.trim();
    if (!title || title.length > 65) violations.push(`${article.name}: ${title?.length ?? 0}`);
  }
  assert.deepEqual(violations, []);
});

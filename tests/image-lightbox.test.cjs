const assert = require('node:assert/strict');
const {test} = require('node:test');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

test('the generic image zoom plugin is absent from runtime configuration and dependencies', () => {
  for (const file of ['docusaurus.config.js', 'package.json', 'package-lock.json', 'yarn.lock']) {
    assert.doesNotMatch(read(file), /docusaurus-plugin-image-zoom|medium-zoom/);
  }
});

test('the custom lightbox is mounted globally and targets ordinary article images', () => {
  assert.match(read('src/theme/Root.tsx'), /<ImageLightbox\s*\/>/);
  const lightbox = read('src/components/ImageLightbox/index.tsx');
  assert.match(lightbox, /\.markdown img:not\(\[data-no-zoom\]\)/);
  assert.match(lightbox, /target\.closest\('a\[href\]'\)/);
  assert.match(lightbox, /target\.closest\('\[data-source-reference\]'\)/);
  assert.match(lightbox, /View source references/);
  assert.match(lightbox, /Open source/);
  assert.match(read('src/css/custom.css'), /\.markdown img:not\(\[data-no-zoom\]\)/);
});

test('reusable article media uses the custom viewer without nested image wrappers', () => {
  const comparison = read('src/components/ImageModelComparison/index.tsx');
  const recipe = read('src/components/PromptRecipe/index.tsx');
  const evidence = read('src/components/ArticleEvidence/index.tsx');

  assert.doesNotMatch(comparison, /data-no-zoom[^>]+src=\{reference\.src\}/);
  assert.doesNotMatch(comparison, /data-no-zoom[^>]+src=\{item\.src\}/);
  assert.match(comparison, /data-no-zoom[^>]+src=\{right\.src\}/);
  assert.doesNotMatch(recipe, /data-no-zoom/);
  assert.doesNotMatch(evidence, /data-no-zoom/);
  assert.match(recipe, /<a href=\{promptUrl\}[^>]*>\s*<img/);
});

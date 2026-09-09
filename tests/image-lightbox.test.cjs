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
  assert.match(lightbox, /ARTICLE_IMAGE_ITEM_SELECTOR\s*=\s*'img:not\(\[data-no-zoom\]\):not\(\[alt=""\]\)'/);
  assert.match(lightbox, /ARTICLE_IMAGE_SELECTOR\s*=\s*`\.markdown \$\{ARTICLE_IMAGE_ITEM_SELECTOR\}`/);
  assert.match(lightbox, /element\.closest\('a\[href\]'\)/);
  assert.match(lightbox, /Open source/);
  assert.match(read('src/css/custom.css'), /\.markdown img:not\(\[data-no-zoom\]\):not\(\[alt=""\]\)/);
});

test('article galleries support buttons, arrow keys, wrapping, and adjacent preloading', () => {
  const viewer = read('src/components/ImageLightbox/index.tsx');
  const styles = read('src/components/ImageLightbox/styles.module.css');

  assert.match(viewer, /Array\.from\(article\.querySelectorAll<HTMLImageElement>\(ARTICLE_IMAGE_ITEM_SELECTOR\)\)/);
  assert.match(viewer, /event\.key === 'ArrowLeft'[\s\S]*?navigate\(-1\)/);
  assert.match(viewer, /event\.key === 'ArrowRight'[\s\S]*?navigate\(1\)/);
  assert.match(viewer, /\(current\.index \+ direction \+ current\.images\.length\) % current\.images\.length/);
  assert.match(viewer, /aria-label="Previous image"/);
  assert.match(viewer, /aria-label="Next image"/);
  assert.match(viewer, /aria-live="polite"/);
  assert.match(viewer, /for \(const offset of \[-1, 1\]\)/);
  assert.match(styles, /\.navButton/);
  assert.match(styles, /\.position/);
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

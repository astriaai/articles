const assert = require('node:assert/strict');
const {test} = require('node:test');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const blogDir = path.join(root, 'blog');
const articles = fs.readdirSync(blogDir).filter(name => name.endsWith('.md'));

test('interactive prompt recipes always pair results with references', () => {
  for (const name of articles) {
    const body = fs.readFileSync(path.join(blogDir, name), 'utf8');
    const recipes = (body.match(/<PromptRecipe\b/g) || []).length;
    if (recipes === 0) continue;

    assert.equal((body.match(/\breferenceImages=\{/g) || []).length, recipes, `${name}: missing referenceImages`);
    assert.equal((body.match(/\bresultImage=\{/g) || []).length, recipes, `${name}: missing resultImage`);
  }
});

test('public figures do not present text-to-image-only examples', () => {
  for (const name of articles) {
    const body = fs.readFileSync(path.join(blogDir, name), 'utf8');
    const figures = body.match(/<figure\b[\s\S]*?<\/figure>/g) || [];
    for (const figure of figures) {
      assert.doesNotMatch(figure, /text[- ]to[- ]image/i, `${name}: replace the text-only figure with a reference-driven example`);
    }
  }
});

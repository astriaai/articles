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

test('every public generated figure declares a source reference or is excluded', () => {
  const missing = [];

  for (const name of articles) {
    const body = fs.readFileSync(path.join(blogDir, name), 'utf8');
    const figures = body.match(/<figure\b[\s\S]*?<\/figure>/g) || [];
    for (const figure of figures) {
      if (!/className="[^"]*benchmark-card--source/.test(figure)) {
        const source = figure.match(/data-source-reference="([^"]+)"/);
        if (!source) {
          missing.push(`${name}: ${figure.match(/<img[^>]+src="([^"]+)"/)?.[1] || 'figure'}`);
          continue;
        }

        for (const reference of source[1].split(/\s+/)) {
          if (reference.startsWith('/articles/')) {
            const asset = path.join(root, 'static', reference.slice('/articles/'.length));
            assert.ok(fs.existsSync(asset), `${name}: missing source reference asset ${reference}`);
          } else {
            assert.match(reference, /^https:\/\/www\.astria\.ai\/(?:prompts|gallery)\//, `${name}: source reference must be a public source or gallery URL`);
          }
        }
      }
    }

    for (const comparison of body.match(/<ImageModelComparison\b[\s\S]*?\/>/g) || []) {
      assert.match(comparison, /\breference=\{\{/, `${name}: comparison is missing its visible source reference`);
    }
  }

  assert.deepEqual(missing, [], `generated figures without source references:\n${missing.join('\n')}`);
});

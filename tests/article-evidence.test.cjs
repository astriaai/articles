const assert = require('node:assert/strict');
const {test} = require('node:test');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const blogDir = path.join(root, 'blog');
const articles = fs.readdirSync(blogDir).filter(name => name.endsWith('.md'));

test('every indexed non-prompt article has one evidence module', () => {
  const missing = [];
  const unexpected = [];
  for (const name of articles) {
    const body = fs.readFileSync(path.join(blogDir, name), 'utf8');
    const modules = body.match(/<ArticleEvidence\s+profile="[A-Za-z]+"\s*\/>/g) || [];
    const excluded = /^tags: \[prompts/m.test(body) || /^unlisted: true/m.test(body);
    if (!excluded && modules.length !== 1) missing.push(`${name}: ${modules.length}`);
    if (excluded && modules.length) unexpected.push(name);
  }
  assert.deepEqual(missing, []);
  assert.deepEqual(unexpected, []);
});

test('article profiles resolve to implemented evidence profiles', () => {
  const component = fs.readFileSync(path.join(root, 'src/components/ArticleEvidence/index.tsx'), 'utf8');
  const implemented = new Set([...component.matchAll(/^  ([A-Za-z]+): \{/gm)].map(match => match[1]));
  const requested = new Set();
  for (const name of articles) {
    const body = fs.readFileSync(path.join(blogDir, name), 'utf8');
    for (const match of body.matchAll(/<ArticleEvidence\s+profile="([A-Za-z]+)"\s*\/>/g)) {
      requested.add(match[1]);
    }
  }
  assert.deepEqual([...requested].filter(profile => !implemented.has(profile)), []);
});

test('public evidence links stay on the Astria origin and internal guides stay in articles', () => {
  const component = fs.readFileSync(path.join(root, 'src/components/ArticleEvidence/index.tsx'), 'utf8');
  const external = [...component.matchAll(/(?:workspaceUrl|templateUrl|promptUrl): '([^']+)'/g)].map(match => match[1]);
  const guides = [...component.matchAll(/guideUrl: '([^']+)'/g)].map(match => match[1]);
  assert.ok(external.length > 0);
  assert.ok(external.every(url => new URL(url).origin === 'https://www.astria.ai'));
  assert.ok(guides.every(url => /^\/articles\/[a-z0-9-]+$/.test(url)));
});

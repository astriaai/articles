const assert = require('node:assert/strict');
const {test} = require('node:test');

const {readArticles, readLedger, claimBearing} = require('../scripts/content-review.cjs');

// Articles deliberately kept off the index; they carry no live third-party claims.
const unlisted = new Set(['multi-pass-inference', 'real-estate']);

const articles = readArticles();
const rows = readLedger();
const rowSlugs = new Set(rows.map(row => row.slug));
const articleSlugs = new Set(articles.map(article => article.slug));

// The ledger drifted twice before this test existed: a whole cluster of model
// reviews was published without rows, and rows were written on a branch that
// never reached the remote. Both failure modes are silent without a check.
test('every claim-bearing article has a ledger row', () => {
  const missing = articles
    .filter(article => claimBearing(article) && !unlisted.has(article.slug))
    .map(article => article.slug)
    .filter(slug => !rowSlugs.has(slug));

  assert.deepEqual(missing, []);
});

test('every ledger row points at an article that exists', () => {
  const orphans = rows.map(row => row.slug).filter(slug => !articleSlugs.has(slug));

  assert.deepEqual(orphans, []);
});

// "—" is a deliberate value: the article makes no claim that goes stale.
test('ledger rows carry a usable review date and a recognised volatile column', () => {
  const malformed = rows
    .filter(row => !/^\d{4}-\d{2}-\d{2}$/.test(row.nextReview) || !/^(—|[PFSML](\s+[PFSML])*)$/.test(row.volatile))
    .map(row => `${row.slug}: next review "${row.nextReview}", volatile "${row.volatile}"`);

  assert.deepEqual(malformed, []);
});

test('no slug is listed twice', () => {
  const seen = new Set();
  const duplicates = [];
  for (const row of rows) {
    if (seen.has(row.slug)) duplicates.push(row.slug);
    seen.add(row.slug);
  }

  assert.deepEqual(duplicates, []);
});

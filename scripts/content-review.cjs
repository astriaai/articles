#!/usr/bin/env node
// Reads blog front matter and CONTENT-LEDGER.md, and reports what the review
// schedule actually owes. The ledger's table is the data; this turns it into an
// answer instead of a file someone has to remember to read.
//
//   node scripts/content-review.cjs            summary + anything due
//   node scripts/content-review.cjs --all      every row, soonest due first
//   node scripts/content-review.cjs --json     machine-readable
//
// Exits non-zero only when the ledger and the articles disagree, which is a
// defect. Being overdue is a work item, not a defect, so it never fails here;
// tests/content-ledger.test.cjs enforces the same consistency rules in CI.

const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const blogDir = path.join(root, 'blog');
const ledgerPath = path.join(root, 'CONTENT-LEDGER.md');

const VOLATILE = {
  P: 'pricing, plans, tiers',
  F: 'feature scope, product names, integrations',
  S: 'vendor-published statistics and customer names',
  M: 'model availability and model names',
  L: 'legal/regulatory',
};

function frontMatter(source) {
  const match = /^---\n([\s\S]*?)\n---/.exec(source);
  if (!match) return null;
  const fields = {};
  for (const line of match[1].split('\n')) {
    const kv = /^([a-z_]+):\s*(.*)$/.exec(line);
    if (kv) fields[kv[1]] = kv[2].trim();
  }
  return fields;
}

function readArticles() {
  return fs
    .readdirSync(blogDir)
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const source = fs.readFileSync(path.join(blogDir, name), 'utf8');
      const fm = frontMatter(source) || {};
      const slug = fm.slug || name.replace(/\.md$/, '');
      const tags = (fm.tags || '')
        .replace(/[[\]]/g, '')
        .split(',')
        .map(t => t.trim())
        .filter(Boolean);
      return {name, slug, date: fm.date || '', tags, unlisted: fm.unlisted === 'true'};
    });
}

// A row is "claim-bearing" when the article asserts facts about someone else:
// competitor comparisons and model coverage. Those are the rows worth keeping,
// because their claims rot and the rot is public.
function claimBearing(article) {
  return article.tags.includes('comparisons') || article.tags.includes('models');
}

function readLedger() {
  const source = fs.readFileSync(ledgerPath, 'utf8');
  const rows = [];
  for (const line of source.split('\n')) {
    if (!line.startsWith('|')) continue;
    const cells = line.split('|').slice(1, -1).map(c => c.trim());
    if (cells.length !== 7) continue;
    const [slug, query, published, checked, volatile, nextReview, owner] = cells;
    if (slug === 'Article' || /^-+$/.test(slug)) continue;
    if (!/^[a-z0-9-]+$/.test(slug)) continue;
    rows.push({slug, query, published, checked, volatile, nextReview, owner});
  }
  return rows;
}

function main() {
  const args = process.argv.slice(2);
  const today = new Date().toISOString().slice(0, 10);

  const articles = readArticles();
  const rows = readLedger();
  const bySlug = new Map(rows.map(r => [r.slug, r]));
  const articleSlugs = new Set(articles.map(a => a.slug));

  const unlistedSlugs = new Set(['multi-pass-inference', 'real-estate']);

  const missing = articles
    .filter(a => claimBearing(a) && !bySlug.has(a.slug) && !unlistedSlugs.has(a.slug))
    .map(a => a.slug);
  const orphans = rows.filter(r => !articleSlugs.has(r.slug)).map(r => r.slug);

  const tracked = rows.filter(r => articleSlugs.has(r.slug));
  const due = tracked
    .filter(r => /^\d{4}-\d{2}-\d{2}$/.test(r.nextReview) && r.nextReview <= today)
    .sort((a, b) => a.nextReview.localeCompare(b.nextReview));

  if (args.includes('--json')) {
    process.stdout.write(
      JSON.stringify({today, tracked: tracked.length, due, missing, orphans}, null, 2) + '\n',
    );
    return missing.length || orphans.length ? 1 : 0;
  }

  const lines = [];
  lines.push(`Content review — ${today}`);
  lines.push(`${tracked.length} tracked articles, ${due.length} due.`);

  const listed = args.includes('--all') ? tracked.slice().sort((a, b) => a.nextReview.localeCompare(b.nextReview)) : due;
  if (listed.length) {
    lines.push('');
    const width = Math.max(...listed.map(r => r.slug.length));
    for (const row of listed) {
      const flags = row.volatile
        .split(/\s+/)
        .filter(Boolean)
        .map(code => VOLATILE[code] || code)
        .join('; ');
      const marker = row.nextReview <= today ? 'DUE ' : '    ';
      lines.push(`${marker}${row.nextReview}  ${row.slug.padEnd(width)}  ${flags}`);
    }
    lines.push('');
    lines.push('Re-verify the claim types listed, update the article and its Reviewed line,');
    lines.push('then move its Next review date on in CONTENT-LEDGER.md.');
  }

  if (missing.length) {
    lines.push('');
    lines.push('Claim-bearing articles with no ledger row (add one):');
    for (const slug of missing) lines.push(`  ${slug}`);
  }
  if (orphans.length) {
    lines.push('');
    lines.push('Ledger rows with no article (remove or fix the slug):');
    for (const slug of orphans) lines.push(`  ${slug}`);
  }

  process.stdout.write(lines.join('\n') + '\n');
  return missing.length || orphans.length ? 1 : 0;
}

if (require.main === module) process.exit(main());

module.exports = {readArticles, readLedger, claimBearing};

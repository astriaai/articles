const assert = require('node:assert/strict');
const {test} = require('node:test');
const publishableBlogPosts = require('../plugins/publish-schedule');

function post(slug, date) {
  return {metadata: {permalink: `/articles/${slug}/`, date: new Date(`${date}T00:00:00.000Z`)}};
}

test('future-dated posts stay out of production collections', () => {
  const blogPosts = [
    post('past', '2026-09-15'),
    post('today', '2026-09-16'),
    post('future', '2026-09-17'),
  ];

  assert.deepEqual(
    publishableBlogPosts({blogPosts}, new Date('2026-09-16T08:00:00.000Z'))
      .map(({metadata}) => metadata.permalink),
    ['/articles/past/', '/articles/today/'],
  );
});

test('date-only posts publish at UTC midnight while later timestamps stay scheduled', () => {
  const blogPosts = [
    post('today', '2026-09-16'),
    {metadata: {permalink: '/articles/later/', date: new Date('2026-09-16T12:00:00.000Z')}},
  ];
  assert.deepEqual(
    publishableBlogPosts({blogPosts}, new Date('2026-09-16T00:00:01.000Z'))
      .map(({metadata}) => metadata.permalink),
    ['/articles/today/'],
  );
});

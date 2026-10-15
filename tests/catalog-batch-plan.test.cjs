const {test} = require('node:test');
const assert = require('node:assert/strict');
const {spawnSync} = require('node:child_process');
const path = require('node:path');

test('catalog planner passes offline safety and determinism checks', () => {
  const result = spawnSync('python3', ['-B', 'tests/test_catalog_batch_plan.py'], {
    cwd: path.join(__dirname, '..'), encoding: 'utf8', timeout: 30000,
  });
  assert.equal(result.status, 0, result.error?.message || result.stderr || result.stdout);
});

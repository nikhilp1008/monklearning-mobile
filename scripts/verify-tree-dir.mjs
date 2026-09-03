#!/usr/bin/env node
/**
 * node scripts/verify-tree-dir.mjs <dir>
 *
 * Runs scripts/verify-render.mjs over every *.json tree in <dir>
 * (build/trees/, populated by lib/widgets/__tests__/render-trees.test.tsx —
 * run `npm test` first, or use `npm run verify` which does both in order).
 * Exits 1 if any tree fails.
 */
import { readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dir = process.argv[2] ? resolve(process.cwd(), process.argv[2]) : resolve(root, 'build/trees');

let files;
try {
  files = readdirSync(dir).filter((f) => f.endsWith('.json'));
} catch {
  console.error(`verify:render — no such directory: ${dir}`);
  console.error('Run `npm test` first to populate it, or `npm run verify` to do both in order.');
  process.exit(1);
}

if (files.length === 0) {
  console.error(`verify:render — ${dir} has no trees to check.`);
  process.exit(1);
}

/**
 * Two small-board suffixes (lib/widgets/__tests__/render-trees.test.tsx),
 * checked at the box they were rendered at, not the 900x430 default —
 * assertions 6-8 (font floor, stroke floor, glyph spacing) are exactly the
 * ones that only misbehave once the frame actually shrinks. See that test
 * file for why there are two: 495x270 is this app's real classroom box,
 * 343x236 is small-screen-rendering-rules.md's own reference number.
 */
const BOARD_BY_SUFFIX = [
  { suffix: '.real-small.json', args: ['--w', '495', '--h', '270'] },
  { suffix: '.spec-small.json', args: ['--w', '343', '--h', '236'] },
];

let failed = 0;
for (const file of files) {
  const match = BOARD_BY_SUFFIX.find((b) => file.endsWith(b.suffix));
  const extraArgs = match ? match.args : [];
  const result = spawnSync(
    'node',
    [resolve(root, 'scripts/verify-render.mjs'), join(dir, file), ...extraArgs],
    { cwd: root, stdio: 'inherit' }
  );
  if (result.status !== 0) failed++;
}

if (failed > 0) {
  console.error(`\nverify:render — ${failed}/${files.length} tree(s) failed.`);
  process.exit(1);
}
console.log(`\nverify:render — all ${files.length} tree(s) OK.`);

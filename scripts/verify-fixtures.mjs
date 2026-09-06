#!/usr/bin/env node
/**
 * node scripts/verify-fixtures.mjs
 *
 * Runs every test/fixtures/*.json through verify-render.mjs and asserts the
 * expected exit code. This is what makes the four (now seven) fixtures an
 * enforced regression test rather than files sitting in the repo that
 * someone once ran by hand.
 *
 * Every one of the checker's assertions needs a fixture that FAILS it,
 * checked in alongside the passing ones — an assertion with no failing
 * fixture is trusted on the strength of having been written, which is
 * exactly the failure mode that shipped a dead font-floor check for one
 * commit: `els.filter(isText)` silently matched nothing (isText expects a
 * type string, not an element), so the check ran, found nothing, and passed
 * every payload — the same false-confidence shape
 * docs/render-verification.md documents for the text-prop reader that once
 * found zero labels. It was only caught because the small-board render of a
 * REAL widget had errors an eyeball could see were missing. A failing
 * fixture per assertion catches that class of bug immediately, in CI, with
 * no widget or eyeball required.
 */
import { readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dir = resolve(root, 'test/fixtures');

/** name -> expected exit code. Every assertion in verify-render.mjs must have
 *  at least one entry here that exercises it. */
const EXPECT = {
  good: 0, // nothing wrong — also proves 6/7/8 do NOT fire on a healthy payload
  collide: 1, // assertion 4: two labels overlap
  oob: 1, // assertion 3: geometry off the board
  nan: 1, // assertions 1 + 5: nothing drawn, NaN in a path
  'font-too-small': 1, // assertion 6: font floor
  'stroke-too-thin': 1, // assertion 7: stroke floor
  'glyphs-too-close': 1, // assertion 8: glyph spacing
  // assertion 3, via boundsOf's RNSVGImage case. Verified BOTH ways before
  // being added: without that case an <Image> contributes no bounds, this
  // fixture exits 0, and an off-board illustration ships. The Path and the
  // label are here so assertions 1 and 2 pass on their own — the ONLY reason
  // this fixture fails is the Image.
  'image-off-board': 1,
  // assertion 4, via the Devanagari width guardrail in textBox. Exits 0 under
  // the flat Latin 0.58 model — the two labels are 2pt apart at that width —
  // and 1 under CHAR_W_DEVA = 0.75. This is what "the guardrail is live"
  // means; without a fixture it is a constant nobody proved was read.
  'deva-labels-collide': 1,
};

const files = readdirSync(dir).filter((f) => f.endsWith('.json'));
const missing = Object.keys(EXPECT).filter((name) => !files.includes(`${name}.json`));
if (missing.length) {
  console.error(`verify:fixtures — expected fixture(s) missing: ${missing.join(', ')}`);
  process.exit(1);
}

let failed = 0;
for (const file of files) {
  const name = file.replace(/\.json$/, '');
  if (!(name in EXPECT)) {
    console.error(`verify:fixtures — ${file} has no expected outcome in EXPECT; add one.`);
    failed++;
    continue;
  }
  const result = spawnSync('node', [resolve(root, 'scripts/verify-render.mjs'), join(dir, file)], {
    cwd: root,
    stdio: 'inherit',
  });
  if (result.status !== EXPECT[name]) {
    console.error(`FAIL: ${file} exited ${result.status}, expected ${EXPECT[name]}`);
    failed++;
  }
}

if (failed > 0) {
  console.error(`\nverify:fixtures — ${failed} fixture(s) did not behave as documented.`);
  process.exit(1);
}
console.log(`\nverify:fixtures — all ${files.length} fixtures behave as documented.`);

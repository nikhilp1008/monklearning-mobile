#!/usr/bin/env node
/**
 * node scripts/verify-fixtures.mjs
 *
 * Runs every test/fixtures/*.json through verify-render.mjs and asserts the
 * expected exit code. This is what makes the four (now ten) fixtures an
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

/** name -> expected exit code, or [exit, w, h] to pin the fixture to a board.
 *
 *  Every assertion in verify-render.mjs must have at least one entry here that
 *  exercises it.
 *
 *  WHY A BOARD BELONGS TO THE FIXTURE. This runner used to spawn the gate with
 *  no flags, so every fixture was checked at the gate's default 900x430 — while
 *  docs/small-screen-rendering-rules.md says 343x236 is the board that binds,
 *  and the Devanagari pair exists precisely to prove a width model on the
 *  smallest board a student reads. Running them at 900x430 checked the right
 *  arithmetic on the wrong board; running them by hand once checked the right
 *  board and left no mechanism behind. The board is now part of what the
 *  fixture asserts.
 */
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
  /*
   * assertion 4, via the Devanagari width path in textBox. TWO fixtures now,
   * and they bracket the width from opposite sides.
   *
   * THE PAIR REPLACES A SINGLE FIXTURE WHOSE PREMISE MEASUREMENT DISPROVED.
   * The old one placed the two labels 85.5pt apart and expected a collision,
   * because `CHAR_W_DEVA = 0.75` charged the first label 108pt. That constant
   * said in its own doc comment that it was not a measurement, and it was
   * not: 'कोशिकाद्रव्य' is twelve code units of which four are matras with no
   * advance width at all, and Anek Devanagari's own hmtx makes it 67.6pt with
   * the 5% margin — the two labels do NOT touch. The fixture was asserting a
   * collision that does not happen on a device, so it could not stay as it
   * was once the widths were measured.
   *
   * What it was FOR still matters and is preserved: proving the Devanagari
   * path is live rather than dead code that still parses. That needs a case
   * whose verdict CHANGES if the path dies, and since measured Devanagari is
   * now NARROWER per code unit than Latin (0.42 em against Menlo's 0.63, not
   * wider), the direction of that case inverts:
   *
   *   deva-labels-collide           labels 55pt apart. 67.6pt of Devanagari
   *                                 overlaps -> 1. Proves the text is
   *                                 measured at all.
   *   deva-latin-width-would-collide
   *                                 the ORIGINAL 85.5pt geometry, unchanged.
   *                                 67.6pt clears it -> 0. If the Devanagari
   *                                 branch died and Latin priced the string,
   *                                 it would be 91.0pt and collide -> 1.
   *                                 THIS is the liveness test.
   *
   * Verified both ways before being added, per docs/small-screen-rendering-
   * rules.md: with the branch deleted from a copy of verify-render.mjs, the
   * second fixture exits 1 instead of 0 and the first is unaffected — which
   * is exactly why one fixture is not enough here and two are.
   */
  'deva-labels-collide': [1, 343, 236],
  'deva-latin-width-would-collide': [0, 343, 236],
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
  const spec = EXPECT[name];
  const [want, w, h] = Array.isArray(spec) ? spec : [spec, null, null];
  const board = w === null ? [] : ['--w', String(w), '--h', String(h)];
  const result = spawnSync('node', [resolve(root, 'scripts/verify-render.mjs'), join(dir, file), ...board], {
    cwd: root,
    stdio: 'inherit',
  });
  if (result.status !== want) {
    const at = w === null ? '' : ` at ${w}x${h}`;
    console.error(`FAIL: ${file} exited ${result.status}${at}, expected ${want}`);
    failed++;
  }
}

if (failed > 0) {
  console.error(`\nverify:fixtures — ${failed} fixture(s) did not behave as documented.`);
  process.exit(1);
}
console.log(`\nverify:fixtures — all ${files.length} fixtures behave as documented.`);

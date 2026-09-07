/**
 * chrome.ts and scripts/verify-render.mjs must measure text IDENTICALLY.
 *
 * Both files say so, in capitals, and have said so for as long as they have
 * existed. What kept them in step was two copies of the same literals and a
 * comment in each asking the next person to notice — which is not a mechanism.
 * They now read one generated table, `lib/widgets/advance-widths.json`, so the
 * NUMBERS cannot drift. The ARITHMETIC over those numbers is still written
 * twice, once in TypeScript and once in ESM, and that is what this file pins.
 *
 * WHY IT MATTERS, stated the way CLAUDE.md states it: if a widget lays text
 * out to one width and the checker measures another, the widget either fails
 * CI for no reason or — the direction that reaches a student — passes CI while
 * overlapping on a device.
 *
 * THE ROUTE IS INDEPENDENT, WHICH IS THE POINT.
 *
 * This does not import verify-render.mjs and compare a number to a number;
 * that would be one implementation checking itself against a copy of its own
 * inputs. It SPAWNS THE REAL GATE, the same `node scripts/verify-render.mjs`
 * that runs in CI, over a tree whose geometry was computed from chrome.ts's
 * `textWidth`, and reads its exit code. Two labels are placed exactly
 * `textWidth` apart — touching, not overlapping — and then one point closer.
 * The gate must say 0 and then 1. It can only do that if its own width model
 * agrees with chrome's to better than a point, on that string, in that family.
 *
 * A failure here is not a rounding complaint. It means one of the two files
 * has been changed without the other, and every widget's layout is now being
 * checked against a different ruler than it was drawn with.
 */
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve, join } from 'node:path';

import { LABEL_SIZE, textWidth } from '../chrome';

const ROOT = resolve(__dirname, '../../..');
const GATE = resolve(ROOT, 'scripts/verify-render.mjs');
const dir = mkdtempSync(join(tmpdir(), 'chrome-gate-'));

/** A tree with a background path (so assertions 1 and 2 pass) and two labels. */
function twoLabels(text: string, family: string, x1: number, x2: number) {
  const label = (x: number) => ({
    type: 'RNSVGText',
    props: { x: [x], y: [100], font: { fontSize: LABEL_SIZE, fontFamily: family, textAnchor: 'start' } },
    children: [{ type: 'RNSVGTSpan', props: { content: text }, children: null }],
  });
  return {
    type: 'RNSVGSvgView',
    props: {},
    children: [
      { type: 'RNSVGPath', props: { d: 'M 60 40 C 300 60 600 60 840 380' }, children: null },
      label(x1),
      label(x2),
    ],
  };
}

function gateExit(tree: unknown, name: string): number {
  const file = join(dir, `${name}.json`);
  writeFileSync(file, JSON.stringify(tree));
  return spawnSync('node', [GATE, file], { cwd: ROOT, encoding: 'utf8' }).status ?? -1;
}

/*
 * One case per script and per family the board can draw in, because the two
 * implementations could agree on Latin and disagree on Devanagari — which is
 * exactly the shape of the bug that was here before (chrome budgeted a Hindi
 * caption at the Latin width while the gate measured it at 0.75).
 *
 * The mixed case is the one neither old implementation could have got right:
 * a single width for the whole string cannot be correct for both halves.
 */
const CASES: { name: string; text: string; family: string }[] = [
  { name: 'latin-mono', text: 'Req 4.48 Ohm', family: 'Menlo' },
  { name: 'latin-onest', text: 'Range 49.3 m', family: 'Onest_400Regular' },
  { name: 'latin-onest-bold', text: 'Range 49.3 m', family: 'Onest_700Bold' },
  { name: 'devanagari', text: 'कोशिकाद्रव्य', family: 'AnekDevanagari_500Medium' },
  { name: 'devanagari-in-a-latin-family', text: 'कोशिकाद्रव्य', family: 'Menlo' },
  { name: 'mixed-scripts', text: 'Nucleus नाभिक', family: 'Onest_400Regular' },
  { name: 'matras-only', text: 'ि ि ि ि', family: 'Onest_400Regular' },
];

describe('the gate measures text exactly as chrome.ts does', () => {
  test.each(CASES)('$name: touching clears, one point closer collides', ({ name, text, family }) => {
    const w = textWidth(text, LABEL_SIZE, family);
    const x1 = 100;
    // Boxes are [x, x + w). At x2 = x1 + w they touch and must NOT overlap;
    // the gate's own test is a strict `a.x0 < b.x1 && b.x0 < a.x1`.
    expect([name, gateExit(twoLabels(text, family, x1, x1 + w), `${name}-clear`)])
      .toEqual([name, 0]);
    expect([name, gateExit(twoLabels(text, family, x1, x1 + w - 1), `${name}-collide`)])
      .toEqual([name, 1]);
  });
});

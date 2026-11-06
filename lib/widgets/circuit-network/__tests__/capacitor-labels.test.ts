/**
 * A capacitor's name and value labels must clear its plates.
 *
 * The plates run CAP_PLATE_HALF (9pt) either side of the wire, drawn 2.6pt
 * thick with round caps; the labels used to hang off OFF_BELOW (16), whose name
 * box top sits 6.16pt below the wire — inside the plate. Resistors never showed
 * it because their body is only ELEM_H/2 = 5pt tall. `combination of
 * capacitors` (Physics 12, Capacitance) draws the `series` and `parallel`
 * topologies with capacitors only, so every figure in it overprinted.
 *
 * Asserted on layout geometry rather than on pixels, in the same box model
 * fitProblems uses, so the check cannot drift from the admission rule.
 */
import {
  CAP_PLATE_HALF, boxAt, fitProblems, labelSlots, layout, REF_H, REF_W,
  type CircuitNetworkParams, type TextBox,
} from '../circuit-math';
import { circuitNetwork } from '../index';

const PLATE_T = 3;          // index.tsx — half the gap between the plates
const STROKE_HALF = 1.3;    // EMPHASIS_STROKE / 2, round caps
const VALUES = [2, 3, 6, 4];

function parsed(topology: 'series' | 'parallel', n: number): CircuitNetworkParams {
  const v = circuitNetwork.validate({
    topology,
    elements: Array.from({ length: n }, (_, i) => ({
      kind: 'capacitor', name: `C${i + 1}`, value: VALUES[i],
    })),
    source_v: 12,
  });
  if (!v.ok) throw new Error(v.errors.join('; '));
  return v.params;
}

const hits = (a: TextBox, b: TextBox) =>
  a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;

/** [width, height] — the smallest board the app checks, and a roomy one. */
const BOARDS: [number, number][] = [[REF_W, REF_H], [900, 430]];

describe.each([
  ['series', 2], ['series', 3], ['series', 4],
  // parallel takes 2..3 slots — a fourth is refused by validate().
  ['parallel', 2], ['parallel', 3],
] as const)('%s, %i capacitors', (topology, n) => {
  test.each(BOARDS)('no label box meets a plate box at %ix%i', (w, h) => {
    const l = layout(parsed(topology, n), w, h);
    expect(l.elements).toHaveLength(n);
    for (const el of l.elements) {
      const plates: TextBox = {
        x0: el.cx - PLATE_T - STROKE_HALF, x1: el.cx + PLATE_T + STROKE_HALF,
        y0: el.cy - CAP_PLATE_HALF - STROKE_HALF, y1: el.cy + CAP_PLATE_HALF + STROKE_HALF,
        s: 'plates',
      };
      const [a, b] = labelSlots(el.cx, el.cy, el.side, el.off);
      expect(hits(boxAt(a, el.name), plates)).toBe(false);
      expect(hits(boxAt(b, el.display), plates)).toBe(false);
    }
  });

  test('the payload is still admitted and fits at the reference board', () => {
    expect(fitProblems(parsed(topology, n), REF_W, REF_H)).toEqual([]);
  });
});

test('parallel: the last label clears the bottom rail', () => {
  const l = layout(parsed('parallel', 3), REF_W, REF_H);
  const last = l.elements[2];
  const [, b] = labelSlots(last.cx, last.cy, last.side, last.off);
  const bottomRail = Math.max(...l.wires.map((s) => Math.max(s.y0, s.y1)));
  expect(boxAt(b, last.display).y1).toBeLessThan(bottomRail);
});

test('a resistor keeps its original label offset', () => {
  const v = circuitNetwork.validate({
    topology: 'series',
    elements: [{ kind: 'resistor', name: 'R1', value: 10 }],
    source_v: 12,
  });
  if (!v.ok) throw new Error(v.errors.join('; '));
  expect(layout(v.params, REF_W, REF_H).elements[0].off).toBe(16);
});

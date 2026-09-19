/**
 * THE REVIEW SHEET MUST DRAW WHAT THE BOARD DRAWS.
 *
 * On 2026-09-19 it did not, and the way it failed is the reason this file
 * exists rather than a comment. `emit-review-svgs` renders each board with
 * `motionValues = {}`, and `motionFor` defaulted every animatable key to ZERO
 * — so `xy_plot` drew `areaPath(params.shade_from, shadeSv.value = 0)`: the
 * region between `shade_from` and zero.
 *
 * Measured against the simulator at 343x236 on a published board with
 * `shade_from: 0.5, shade_to: 3.5` —
 *
 *     device        shades 0.52 .. 3.54
 *     review sheet  shades 0.00 .. 0.50
 *
 * — while BOTH printed "area 1.88", because the readout is computed from
 * params and the path from the shared value. The number agreed and the picture
 * did not, which is the one failure mode a reviewer cannot catch by reading
 * carefully: 140 of 193 boards were drawn through it.
 *
 * So the assertion here is GEOMETRIC, taken off the emitted SVG the reviewer
 * actually looks at, and never off the params that produced it.
 */
import { xyPlot } from '../../xy-plot';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';
import { treeToSvg } from '../tree-to-svg';
import { REGISTRY } from '../../registry';

const W = 343;
const H = 236;

/** The shaded region's extent, in DATA units, read off the emitted SVG. */
function shadedInterval(svg: string, xMin: number, xMax: number,
                        swapped: boolean): [number, number] | null {
  const lines = [...svg.matchAll(
    /<line x1="([^"]*)" y1="([^"]*)" x2="([^"]*)" y2="([^"]*)"/g)];
  // The plot box: the widest horizontal rule, or the tallest vertical one when
  // `integrate_along: 'y'` puts the integration variable on the screen's y.
  const span = lines
    .filter((m) => (swapped ? m[1] === m[3] : m[2] === m[4]))
    .map((m) => (swapped
      ? [Number(m[2]), Number(m[4])] as const
      : [Number(m[1]), Number(m[3])] as const))
    .sort((a, b) => Math.abs(b[1] - b[0]) - Math.abs(a[1] - a[0]))[0];
  if (!span) return null;
  const fill = [...svg.matchAll(/<path d="([^"]*)"([^/]*)\/>/g)]
    .find((m) => m[2].includes('fill="') && !m[2].includes('fill="none"'));
  if (!fill) return null;
  const pts = [...fill[1].matchAll(/[ML](-?[\d.]+)\s+(-?[\d.]+)/g)]
    .map((m) => Number(swapped ? m[2] : m[1]));
  if (pts.length === 0) return null;
  const [a, b] = span;
  // Screen y grows DOWNWARD, so the swapped axis is measured from the bottom.
  // Reading it the same way as x put `shade_from: 0` at 2.0 — the flip is
  // silent and produces a plausible number, which is how it would be missed.
  const at = (v: number) => (swapped
    ? xMin + ((b - v) * (xMax - xMin)) / (b - a)
    : xMin + ((v - a) * (xMax - xMin)) / (b - a));
  const lo = at(Math.min(...pts));
  const hi = at(Math.max(...pts));
  return lo <= hi ? [lo, hi] : [hi, lo];
}

/** Exactly what `emit-review-svgs` does: no motion values at all. */
function sheetSvg(params: object): string {
  return treeToSvg(renderWidgetTreeAt(xyPlot, params as never, {}, W, H) as never, W, H);
}

describe('the emitted review sheet', () => {
  test.each([
    ['area',         { mode: 'area', curve: 'parabola', a: -0.5, b: 0.5, c: 2,
                       x_min: 0, x_max: 4, shade_from: 0.5, shade_to: 3.5 }],
    // y = 2x as a2, NOT as b2: `line` is a*x + c and a non-zero `b` is now
    // refused outright. This case was copied from the published board and
    // carried its defect, which is how the new rule found it.
    ['area_between', { mode: 'area_between', curve: 'parabola', a: 1, b: 0, c: 0,
                       curve2: 'line', a2: 2, b2: 0, c2: 0,
                       x_min: -1, x_max: 3, shade_from: 0, shade_to: 2 }],
    ['area, x_min < 0', { mode: 'area', curve: 'line', a: 1, b: 0, c: 0,
                       x_min: -2, x_max: 3, shade_from: -2, shade_to: 3 }],
    ['area, integrate_along y', { mode: 'area', curve: 'parabola', a: 1, b: 0, c: 0,
                       x_min: 0, x_max: 4, shade_from: 0, shade_to: 2,
                       integrate_along: 'y' }],
  ])('shades exactly [shade_from, shade_to] — %s', (_name, raw) => {
    const v = xyPlot.validate({ ...xyPlot.defaults, ...raw });
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    const p = v.params as unknown as Record<string, number | string>;
    const got = shadedInterval(sheetSvg(p), p.x_min as number, p.x_max as number,
                               p.integrate_along === 'y');
    expect(got).not.toBeNull();
    expect(got![0]).toBeCloseTo(p.shade_from as number, 1);
    expect(got![1]).toBeCloseTo(p.shade_to as number, 1);
  });

  test('a curve board is not shaded at all', () => {
    const v = xyPlot.validate({ ...xyPlot.defaults, mode: 'curve', curve: 'parabola',
      a: 1, b: 0, c: 0, x_min: -2, x_max: 2 });
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    const svg = sheetSvg(v.params as never);
    const filled = [...svg.matchAll(/<path d="([^"]*)"([^/]*)\/>/g)]
      .filter((m) => m[2].includes('fill="') && !m[2].includes('fill="none"'));
    expect(filled).toHaveLength(0);
  });
});

test('no widget is drawn at a motion value it never rests at', () => {
  /* The general form of the same bug. An emitter-style render passes no motion
   * values, so every animatable key must fall back to the param of the same
   * name — the resting state. A key that fell back to 0 would draw a board no
   * student ever sees, and the reviewer would have no way to tell. */
  const offenders: string[] = [];
  const reg = REGISTRY as unknown as Record<string, {
    animatable?: readonly string[]; defaults?: Record<string, unknown> }>;
  for (const [id, mod] of Object.entries(reg)) {
    for (const k of mod.animatable ?? []) {
      const rest = mod.defaults?.[k];
      if (typeof rest !== 'number') {
        offenders.push(`${id}.${k} is animatable but its default is ${typeof rest}`);
      }
    }
  }
  expect(offenders).toEqual([]);
});

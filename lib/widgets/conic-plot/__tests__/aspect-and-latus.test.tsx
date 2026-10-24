/**
 * Two defects found reviewing the stored Class 11 maths widgets (2026-10-23).
 *
 * 1. A circle drew as an ellipse: the view box was square in maths units but was
 *    mapped to the non-square plot area with separate x and y scales (1.45:1 on
 *    343x236). A conic is a shape, so both axes now share one scale.
 * 2. `latus_rectum` was a legal mark that drew nothing. An ellipse
 *    x²/100 + y²/36 = 1 (a=10, b=6, c=8) must show the chord x = ±8 from
 *    y = -3.6 to +3.6, i.e. 2b²/a = 7.2 long.
 */
import { conicPlot } from '..';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';

type Node = { type: string; props: Record<string, unknown>; children?: (Node | string)[] | null };
function walk(n: Node | string | null | undefined, out: Node[] = []): Node[] {
  if (!n || typeof n === 'string') return out;
  out.push(n);
  for (const c of n.children ?? []) walk(c as Node, out);
  return out;
}
function params(over: Record<string, unknown>) {
  const r = conicPlot.validate({ ...conicPlot.defaults, ...over });
  if (!r.ok) throw new Error(r.errors.join(', '));
  return r.params;
}
/** Bounding box of the first long Path (the conic) from its "M x,y L x,y ..." d string. */
function bboxOfPath(nodes: Node[]) {
  const path = nodes.find((n) => n.type === 'RNSVGPath' && typeof n.props.d === 'string' && (n.props.d as string).length > 200);
  const nums = ((path!.props.d as string).match(/-?\d+(\.\d+)?/g) ?? []).map(Number);
  const xs = nums.filter((_, i) => i % 2 === 0), ys = nums.filter((_, i) => i % 2 === 1);
  return { w: Math.max(...xs) - Math.min(...xs), h: Math.max(...ys) - Math.min(...ys) };
}

describe('a conic is drawn at one scale on both axes', () => {
  const circle = params({ kind: 'circle', a: 4, cx: -3, cy: 2, x_min: -9, x_max: 5, y_min: -4, y_max: 8, show: ['axes', 'vertices'] });
  for (const [w, h] of [[343, 236], [702, 289], [900, 430]]) {
    test(`a circle is round at ${w}x${h}`, () => {
      const nodes = walk(renderWidgetTreeAt(conicPlot, circle, {}, w, h) as Node);
      const { w: bw, h: bh } = bboxOfPath(nodes);
      expect(bw / bh).toBeGreaterThan(0.98);
      expect(bw / bh).toBeLessThan(1.02);
    });
  }

  test('the coordinate axes pass through the origin, not through the circle centre (-3, 2)', () => {
    const nodes = walk(renderWidgetTreeAt(conicPlot, circle, {}, 343, 236) as Node);
    const lines = nodes.filter((n) => n.type === 'RNSVGLine');
    const vertical = lines.find((n) => Math.abs(Number(n.props.x1) - Number(n.props.x2)) < 0.01)!;
    const circlePath = nodes.find((n) => n.type === 'RNSVGPath' && (n.props.d as string).length > 200)!;
    const xs = ((circlePath.props.d as string).match(/-?\d+(\.\d+)?/g) ?? []).map(Number).filter((_, i) => i % 2 === 0);
    const centreX = (Math.min(...xs) + Math.max(...xs)) / 2;
    // The origin is 3 units to the RIGHT of the centre: the axis is right of the circle's middle.
    expect(Number(vertical.props.x1)).toBeGreaterThan(centreX + 10);
  });
});

describe('latus_rectum draws the chord through each focus', () => {
  const ellipse = params({ kind: 'ellipse', a: 10, b: 6, cx: 0, cy: 0, x_min: -14, x_max: 14, y_min: -9, y_max: 9,
                           show: ['axes', 'foci', 'latus_rectum'], shade: false, area_readout: false });
  test('two vertical chords at x = ±8, each 2b²/a = 7.2 long, through the foci', () => {
    const nodes = walk(renderWidgetTreeAt(conicPlot, ellipse, {}, 343, 236) as Node);
    const lines = nodes.filter((n) => n.type === 'RNSVGLine');
    const vertical = lines.filter((n) => Math.abs(Number(n.props.x1) - Number(n.props.x2)) < 0.01);
    // the y axis is one vertical line; the two chords are the other two, shorter than the axis
    const axis = vertical.reduce((a, b) => (Math.abs(Number(a.props.y1) - Number(a.props.y2)) > Math.abs(Number(b.props.y1) - Number(b.props.y2)) ? a : b));
    const chords = vertical.filter((n) => n !== axis);
    expect(chords).toHaveLength(2);
    const axisLen = Math.abs(Number(axis.props.y1) - Number(axis.props.y2));      // 18 maths units
    for (const c of chords) {
      const len = Math.abs(Number(c.props.y1) - Number(c.props.y2));
      expect(len / axisLen).toBeCloseTo(7.2 / 18, 2);
    }
    const foci = nodes.filter((n) => n.type === 'RNSVGCircle').map((n) => Number(n.props.cx));
    for (const c of chords) expect(foci.some((fx) => Math.abs(fx - Number(c.props.x1)) < 0.5)).toBe(true);
  });
  test('a parabola y² = 12x has one chord at x = 3 of length 4a = 12', () => {
    const par = params({ kind: 'parabola', a: 3, cx: 0, cy: 0, x_min: -4, x_max: 14, y_min: -10, y_max: 10,
                         show: ['axes', 'latus_rectum'], shade: false, area_readout: false });
    const nodes = walk(renderWidgetTreeAt(conicPlot, par, {}, 343, 236) as Node);
    const vertical = nodes.filter((n) => n.type === 'RNSVGLine' && Math.abs(Number(n.props.x1) - Number(n.props.x2)) < 0.01);
    const axis = vertical.reduce((a, b) => (Math.abs(Number(a.props.y1) - Number(a.props.y2)) > Math.abs(Number(b.props.y1) - Number(b.props.y2)) ? a : b));
    const chord = vertical.find((n) => n !== axis)!;
    expect(Math.abs(Number(chord.props.y1) - Number(chord.props.y2)) / Math.abs(Number(axis.props.y1) - Number(axis.props.y2))).toBeCloseTo(12 / 20, 2);
  });
});

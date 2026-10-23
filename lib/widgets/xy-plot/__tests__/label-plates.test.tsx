/**
 * Two label defects found reviewing the Class 11 physics widgets that are live
 * (2026-10-23), pinned here.
 *
 * 1. A chord_with_deltas draws its two Δ labels where lines already are. The
 *    run label ("Δseconds 2") sits just under the chord's foot, which is on
 *    the x axis when the chord starts near zero (x = 2t² from t = 1), and the
 *    rise label ("Δx 16") is at the middle of the riser, where the tangent at
 *    A crosses it for every parabola. Each now has a plate (a filled Rect, no
 *    stroke) under it, so the text reads wherever a line passes behind it.
 *
 * 2. The "KE" callout of shm_energy was clamped flush against the y axis
 *    (landmarkAnchors keeps the label's box inside the plot, and its box
 *    overhung the edge at u = -0.85), where it read as part of the axis.
 */
import { xyPlot } from '..';
import { NAMED_CURVES } from '../named-curves';
import { textWidth } from '../../chrome';
import { renderWidgetTreeAt, TEST_THEME } from '../../__tests__/test-utils';

type Node = { type: string; props: Record<string, unknown>; children?: (Node | string)[] | null };

function walk(n: Node | string | null | undefined, out: Node[] = []): Node[] {
  if (!n || typeof n === 'string') return out;
  out.push(n);
  for (const c of n.children ?? []) walk(c as Node, out);
  return out;
}

/** A text node's string lives on its tspan children; its anchor on `font`. */
const textOf = (n: Node): string =>
  (n.children ?? []).map((c) => (typeof c === 'string' ? c : String((c as Node).props.content ?? ''))).join('');
const isText = (n: Node) => n.type === 'RNSVGText';
const first = (v: unknown) => (Array.isArray(v) ? Number(v[0]) : Number(v));
const anchorOf = (n: Node) => String((n.props.font as { textAnchor?: string } | undefined)?.textAnchor ?? 'start');

function params(over: Record<string, unknown>) {
  const r = xyPlot.validate({ ...xyPlot.defaults, ...over });
  if (!r.ok) throw new Error(r.errors.join(', '));
  return r.params;
}

// The stored Class 11 physics widget: x = 2t², chord t = 1 to 3, tangent at t = 1.
const X_T = params({
  mode: 'curve', curve: 'parabola', a: 2, b: 0, c: 0, x_min: 0, x_max: 4,
  x_label: 'seconds', y_label: 'x', secant: 'chord_with_deltas',
  secant_from: 1, secant_to: 3, tangent_kind: 'tangent', tangent_at: 1,
});

describe('the Δ labels of a chord_with_deltas sit on a plate', () => {
  for (const [w, h] of [[343, 236], [702, 289], [340, 340]]) {
    test(`every Δ label has a plate that covers its text, at ${w}x${h}`, () => {
      const tree = renderWidgetTreeAt(xyPlot, X_T, { tangent_at: 1, secant_to: 3 }, w, h) as Node;
      const nodes = walk(tree);
      const labels = nodes.filter((n) => isText(n) && textOf(n).startsWith('Δ'));
      expect(labels.map(textOf)).toEqual(['Δseconds 2', 'Δx 16']);
      for (const label of labels) {
        const at = nodes.indexOf(label);
        // The plate is the Rect drawn immediately before its label.
        const plate = nodes.slice(0, at).reverse().find((n) => n.type === 'RNSVGRect');
        expect(plate).toBeDefined();
        const p = plate!.props as Record<string, number | object>;
        const x = Number(p.x), y = Number(p.y), pw = Number(p.width), ph = Number(p.height);
        const tx = first(label.props.x), ty = first(label.props.y);
        const tw = textWidth(textOf(label), 11, TEST_THEME.monoFontFamily);
        const anchor = anchorOf(label);
        const left = anchor === 'middle' ? tx - tw / 2 : anchor === 'end' ? tx - tw : tx;
        // Covers the text box, 11pt high above the baseline.
        expect(x).toBeLessThanOrEqual(left);
        expect(x + pw).toBeGreaterThanOrEqual(left + tw);
        expect(y).toBeLessThanOrEqual(ty - 10);
        expect(y + ph).toBeGreaterThanOrEqual(ty);
        // Fill only: no stroke, so it stays clear of the 1.2 stroke floor.
        expect(p.stroke == null || p.strokeWidth === 0).toBe(true);
      }
    });
  }

  test('a chord without deltas has no plates', () => {
    const p = params({ ...X_T, secant: 'chord' });
    const tree = renderWidgetTreeAt(xyPlot, p, { tangent_at: 1, secant_to: 3 }, 343, 236) as Node;
    expect(walk(tree).filter((n) => isText(n) && textOf(n).startsWith('Δ'))).toHaveLength(0);
  });
});

describe('the KE callout of shm_energy', () => {
  test('is inside the plot, not against the axis, at every board', () => {
    const p = params({ mode: 'named', named_shape: 'shm_energy', x_label: 'displacement', y_label: 'energy' });
    for (const [w, h] of [[343, 236], [702, 289], [340, 340], [900, 430]]) {
      const tree = renderWidgetTreeAt(xyPlot, p, {}, w, h) as Node;
      const nodes = walk(tree);
      const ke = nodes.find((n) => isText(n) && textOf(n) === 'KE')!;
      expect(ke).toBeDefined();
      // The y axis is the left-most long vertical Line.
      const axisX = Math.min(
        ...nodes
          .filter((n) => n.type === 'RNSVGLine' && Math.abs(Number(n.props.x1) - Number(n.props.x2)) < 0.01)
          .filter((n) => Math.abs(Number(n.props.y1) - Number(n.props.y2)) > 60)
          .map((n) => Number(n.props.x1))
      );
      // "KE" is start-anchored, so its x is the left edge of the label.
      expect(first(ke.props.x) - axisX).toBeGreaterThan(20);
    }
  });

  test('is hung on the dashed (KE) curve', () => {
    const ke = NAMED_CURVES.shm_energy.landmarks.find((m) => m.label === 'KE')!;
    // KE = ½(1 − u²) at k = A = 1, so the landmark is ON the KE curve.
    expect(ke.v).toBeCloseTo(0.5 * (1 - ke.u * ke.u), 12);
    // and well inside the plot, so landmarkAnchors has no edge to clamp it to.
    expect(Math.abs(ke.u)).toBeLessThan(0.75);
  });
});

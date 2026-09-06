/**
 * BACKWARD COMPATIBILITY, ASSERTED — not assumed.
 *
 * NINE frozen trees now: three from xy_plot@1 and six from xy_plot@2, all of
 * them bytes produced BEFORE the change that reads them. See the v2 block at
 * the bottom of this file for what the second set is for and what it caught.
 *
 * These three trees were rendered by xy_plot@1, BEFORE the second curve and
 * `area_between` existed, and frozen here byte for byte: `area` (y = x² over
 * [0,3], shaded to 2), `curve` (y = sin x over a full period) and `data` (the
 * standard [2,4,4,4,5,5,7,9] set). They are the exact payloads
 * __tests__/render-trees.test.tsx renders, at the same 900x430 board.
 *
 * Each one is fed in here as a RAW v1 PAYLOAD — an object with no `curve2`,
 * `a2`, `b2` or `c2` at all, the shape the model emitted before this change —
 * put through v2's `validate()` and rendered by v2's component. If v2 changed
 * anything about the modes it inherited, one of these fails.
 *
 * That is a stronger claim than "the tests still pass": the v2 test suite was
 * written by the same hand as the v2 code and could agree with it about a
 * regression. These bytes could not — they predate it.
 *
 * If a react-native-svg or Reanimated bump legitimately moves the tree, these
 * must be regenerated DELIBERATELY and the diff reviewed, exactly as
 * ../../projectile-motion/__golden__/golden.test.tsx says of its own.
 */
import { xyPlot } from '..';
import { renderWidgetTree, renderWidgetTreeAt } from '../../__tests__/test-utils';
import type { XyPlotParams } from '../plot-math';

import v1Area from './v1-area.json';
import v1Curve from './v1-curve.json';
import v1Data from './v1-data.json';
import v2AreaBetween from './v2-area-between.json';
import v2AreaBetweenSmall from './v2-area-between.spec-small.json';
import v2Axis from './v2-area-between-axis.json';
import v2AxisSmall from './v2-area-between-axis.spec-small.json';
import v2Crossing from './v2-area-between-crossing.json';
import v2CrossingSmall from './v2-area-between-crossing.spec-small.json';
import v2Hinglish from './v2-curve-hinglish.json';
import v2HinglishSmall from './v2-curve-hinglish.spec-small.json';
import v2Latus from './v2-area-between-latus.json';
import v2LatusSmall from './v2-area-between-latus.spec-small.json';
import v2Tangent from './v2-area-between-tangent.json';
import v2TangentSmall from './v2-area-between-tangent.spec-small.json';

/** The v1 payload shape: no second curve anywhere in it. */
const V1_BASE = {
  mode: 'area', curve: 'parabola', a: 1, b: 0, c: 0,
  x_min: 0, x_max: 3, shade_from: 0, shade_to: 2,
  values: [] as number[], x_label: 'x', y_label: 'y',
};

const CASES: { name: string; raw: Record<string, unknown>; golden: unknown }[] = [
  { name: 'area', raw: { ...V1_BASE }, golden: v1Area },
  {
    name: 'curve',
    raw: { ...V1_BASE, mode: 'curve', curve: 'sine', a: 1, b: 1, c: 0, x_min: 0, x_max: 6.28 },
    golden: v1Curve,
  },
  {
    name: 'data',
    raw: {
      ...V1_BASE, mode: 'data', values: [2, 4, 4, 4, 5, 5, 7, 9],
      x_label: 'observation', y_label: 'value',
    },
    golden: v1Data,
  },
];

test.each(CASES)('a v1 $name payload renders exactly what xy_plot@1 rendered', ({ raw, golden }) => {
  const result = xyPlot.validate(raw);
  expect(result.ok).toBe(true);
  const params = (result as { ok: true; params: XyPlotParams }).params;
  // Every one of the four new keys took its default, and none of them may
  // reach the tree in a v1 mode.
  expect(params.curve2).toBe('line');
  expect([params.a2, params.b2, params.c2]).toEqual([0, 0, 0]);

  const tree = renderWidgetTree(xyPlot, params, { shade_to: params.shade_to });
  expect(tree).toEqual(golden);
});

/**
 * THE v2 SET, frozen the same way and for the same reason one version later.
 *
 * Every one of these is a RAW v2 PAYLOAD — no `integrate_along`, no `pieces`,
 * no `tangent_kind`, no `family_values`, no `named_shape` — put through v3's
 * `validate()` and rendered by v3's component. If v3 changed anything about
 * the modes it inherited, one of these fails.
 *
 * Both board sizes, because the two catch different things. At 900x430 the
 * pressure is on geometry; at 343x236 it is on every text constraint at once,
 * and 343x236 is the board `labelFitProblems` measures against, so a change
 * in the frame planner shows up there first.
 *
 * WHAT THIS ALREADY CAUGHT, on the day it was written: v3 rewrote the
 * projection to work in (u, v) so that either axis can be the integration
 * axis, and the natural spelling of the value axis is `vZero − v·scale` with
 * the origin at v = 0. That is algebraically identical to v2's
 * `bottom − (v − vMin)·scale` and differs in the last bit of an IEEE double —
 * `30.969175627240134` against the frozen `30.969175627240077`. Path
 * coordinates go through `toFixed(2)` and never noticed; the gridline `y1`
 * did, and all nine of these failed. The projection was changed to the frozen
 * spelling rather than the trees regenerated, which is the whole point of
 * having them. Nothing in the v3 test suite could have found it: it was
 * written by the same hand as the v3 code and would have agreed with it.
 */
const V2_BASE = {
  ...V1_BASE,
  curve2: 'line', a2: 0, b2: 0, c2: 0,
};

const V2_CASES: {
  name: string;
  raw: Record<string, unknown>;
  big: unknown;
  small: unknown;
}[] = [
  {
    name: 'area_between',
    raw: {
      ...V2_BASE, mode: 'area_between',
      curve: 'line', a: 1, b: 0, c: 0,
      curve2: 'parabola', a2: 1, b2: 0, c2: 0,
      x_min: -0.2, x_max: 1.2, shade_from: 0, shade_to: 1,
    },
    big: v2AreaBetween, small: v2AreaBetweenSmall,
  },
  {
    name: 'area_between with two interior crossings',
    raw: {
      ...V2_BASE, mode: 'area_between',
      curve: 'line', a: 1, b: 0, c: 0,
      curve2: 'parabola', a2: 1, b2: 0, c2: 0,
      x_min: -1.2, x_max: 2.2, shade_from: -1, shade_to: 2,
    },
    big: v2Crossing, small: v2CrossingSmall,
  },
  {
    name: 'a parabola against its tangent',
    raw: {
      ...V2_BASE, mode: 'area_between',
      curve: 'parabola', a: 1, b: 0, c: 0,
      curve2: 'line', a2: 2, b2: 0, c2: -1,
      x_min: -1, x_max: 3, shade_from: 0, shade_to: 3,
    },
    big: v2Tangent, small: v2TangentSmall,
  },
  {
    // The picture v3's `integrate_along` exists to replace. It must keep
    // rendering exactly as it did, because v2 payloads written this way are
    // already in the corpus.
    name: 'the latus rectum, drawn transposed the v2 way',
    raw: {
      ...V2_BASE, mode: 'area_between',
      curve: 'line', a: 0, b: 0, c: 1,
      curve2: 'parabola', a2: 0.25, b2: 0, c2: 0,
      x_min: -2.4, x_max: 2.4, shade_from: -2, shade_to: 2,
      x_label: 'y', y_label: 'x',
    },
    big: v2Latus, small: v2LatusSmall,
  },
  {
    name: 'area_between against the x axis',
    raw: {
      ...V2_BASE, mode: 'area_between',
      curve: 'parabola', a: 1, b: 0, c: -1,
      curve2: 'line', a2: 0, b2: 0, c2: 0,
      x_min: -0.5, x_max: 2.5, shade_from: 0, shade_to: 2,
    },
    big: v2Axis, small: v2AxisSmall,
  },
  {
    // The Hinglish case, frozen. Its readout is built from the axis labels,
    // so it is the one v2 tree whose bytes move if anything about the text
    // budget changes.
    name: 'a Hinglish-labelled curve',
    raw: {
      ...V2_BASE, mode: 'curve', curve: 'sine', a: 1, b: 1, c: 0,
      x_min: 0, x_max: 6.28,
      x_label: 'samay, second mein', y_label: 'vistaar, metre mein',
    },
    big: v2Hinglish, small: v2HinglishSmall,
  },
];

test.each(V2_CASES)('a v2 payload — $name — renders exactly what xy_plot@2 rendered', ({ raw, big, small }) => {
  const result = xyPlot.validate(raw);
  expect(result.ok).toBe(true);
  const params = (result as { ok: true; params: XyPlotParams }).params;
  // Every one of the seven new keys took its inert default, and none of them
  // may reach the tree on a payload that never mentioned them.
  expect(params.integrate_along).toBe('x');
  expect(params.pieces).toEqual([]);
  expect(params.tangent_kind).toBe('none');
  expect(params.family_values).toEqual([]);
  expect(params.named_shape).toBe('');

  const motion = { shade_to: params.shade_to, tangent_at: params.tangent_at };
  expect(renderWidgetTree(xyPlot, params, motion)).toEqual(big);
  expect(renderWidgetTreeAt(xyPlot, params, motion, 343, 236)).toEqual(small);
});

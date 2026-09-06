/**
 * BACKWARD COMPATIBILITY, ASSERTED — not assumed.
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
import { renderWidgetTree } from '../../__tests__/test-utils';
import type { XyPlotParams } from '../plot-math';

import v1Area from './v1-area.json';
import v1Curve from './v1-curve.json';
import v1Data from './v1-data.json';

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

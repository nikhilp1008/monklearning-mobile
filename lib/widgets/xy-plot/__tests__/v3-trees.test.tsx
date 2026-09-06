/**
 * xy_plot v3 — every new capability, rendered at all three board sizes and
 * written into build/trees for scripts/verify-render.mjs to assert over.
 *
 * WHY THIS LIVES HERE rather than in lib/widgets/__tests__/render-trees.test.tsx
 * with the v1/v2 cases. That file is shared by every widget in the registry
 * and two other agents were editing their own widgets in the same working
 * tree while this was written; a shared file is a merge hazard for no benefit,
 * because the filenames it writes already carry `mod.version` and therefore
 * follow the bump on their own. The gate reads a DIRECTORY, so a second
 * writer is indistinguishable from a longer first one.
 *
 * THE GATE IS THE ASSERTION. Almost nothing is asserted inline below beyond
 * "it rendered and it says the right number": bounds, ink coverage, label
 * collisions, the 11pt font floor, the 1.2 stroke floor and the glyph-spacing
 * floor are all scripts/verify-render.mjs's job, run over what this writes at
 * 900x430, 495x270 and 343x236. Re-asserting them here would be a copy of the
 * checker that can drift from it.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { xyPlot } from '..';
import { NAMED_CURVES, NAMED_SHAPE_IDS } from '../named-curves';
import type { XyPlotParams } from '../plot-math';
import { renderWidgetTreeAt, scaffoldingDiffs } from '../../__tests__/test-utils';

const outDir = resolve(__dirname, '../../../../build/trees');
const BOARDS: [string, { width: number; height: number }][] = [
  ['', { width: 900, height: 430 }],
  ['real-small', { width: 495, height: 270 }],
  ['spec-small', { width: 343, height: 236 }],
];

const D = xyPlot.defaults;

/** Validate, fail loudly with the reason, and hand back real params. */
function accept(raw: Record<string, unknown>): XyPlotParams {
  const r = xyPlot.validate(raw);
  if (!r.ok) throw new Error(`payload refused: ${r.errors.join(' | ')}`);
  return r.params;
}

const motionOf = (p: XyPlotParams) => ({ shade_to: p.shade_to, tangent_at: p.tangent_at });

/* --------------------------------------------------------------- the cases */

const CASES: Record<string, Record<string, unknown>> = {
  /* ---- 1. integration along the y axis: horizontal strips ---- */

  // NCERT Class 12 Ch8: the area bounded by y² = 4ax and its latus rectum
  // x = a, at a = 1, which is 8a²/3 = 2.67. Drawn the way the book draws it:
  // y is VERTICAL, x = y²/4a is the parabola, x = a is the latus rectum, and
  // the strips run horizontally. The v2 payload for this same number had to
  // put y on the horizontal axis and label it 'y', which is the picture the
  // frozen golden `v2-area-between-latus` still holds.
  latus_along_y: {
    ...D, mode: 'area_between', integrate_along: 'y',
    curve: 'line', a: 0, b: 0, c: 1,
    curve2: 'parabola', a2: 0.25, b2: 0, c2: 0,
    x_min: -2.4, x_max: 2.4, shade_from: -2, shade_to: 2,
    x_label: 'x', y_label: 'y',
  },
  // The region bounded by y² = x and y = x, drawn with HORIZONTAL strips:
  // left boundary x = y², right boundary x = y, ∫₀¹(y − y²)dy = 1/6. The
  // same number the x-integrated payload gives for the same region, which is
  // the point — the transpose is a projection, not a different integral.
  //
  // THIS WAS WRITTEN AS Ch8 CONCEPT 6, "the area between a function and its
  // inverse", AND THAT WAS WRONG. y = x² against y = √x has boundaries
  // x = √y and x = y² when integrated along y, so transposing turns one
  // missing sqrt kind into another missing sqrt kind. The fixture asserted
  // 1/3 and the widget said 1/6, correctly, because 1/6 is the area of the
  // region the payload actually describes. Exactly the mistake the header of
  // index.tsx accuses the v2 header of — claiming a concept from its NAME —
  // made again, one file away, and caught only because the expected number
  // was derived from NCERT before the render rather than read off it.
  region_along_y: {
    ...D, mode: 'area_between', integrate_along: 'y',
    curve: 'parabola', a: 1, b: 0, c: 0,
    curve2: 'line', a2: 1, b2: 0, c2: 0,
    x_min: -0.2, x_max: 1.2, shade_from: 0, shade_to: 1,
    x_label: 'x', y_label: 'y',
  },
  // A plain curve drawn along y, with no shading at all — the case that
  // proves the transpose is a projection and not an area feature.
  curve_along_y: {
    ...D, mode: 'curve', integrate_along: 'y',
    curve: 'parabola', a: 0.25, b: 0, c: 0,
    x_min: -3, x_max: 3, x_label: 'x', y_label: 'y',
  },

  /* ---- 2. piecewise and modulus ---- */

  // The case v2's own header said needed TWO payloads: y = x² against
  // y = |x|, whose area is 1/6 + 1/6 = 1/3. One payload now.
  modulus_vs_parabola: {
    ...D, mode: 'area_between', x_min: -1.3, x_max: 1.3,
    pieces: [
      { from: -1.3, to: 0, curve: 'line', a: -1, b: 0, c: 0 },
      { from: 0, to: 1.3, curve: 'line', a: 1, b: 0, c: 0 },
    ],
    curve2: 'parabola', a2: 1, b2: 0, c2: 0,
    shade_from: -1, shade_to: 1,
  },
  // ∫₀²|x − 1| dx = 1/2 + 1/2 = 1, against the SIGNED ∫₀²(x − 1) dx = 0 that
  // the `signed_v_shape` case below reports from the same breakpoint. Two
  // questions, two numbers, one picture apart.
  modulus_area: {
    ...D, mode: 'area', x_min: 0, x_max: 2,
    pieces: [
      { from: 0, to: 1, curve: 'line', a: -1, b: 0, c: 1 },
      { from: 1, to: 2, curve: 'line', a: 1, b: 0, c: -1 },
    ],
    shade_from: 0, shade_to: 2,
  },
  signed_v_shape: {
    ...D, mode: 'area', x_min: 0, x_max: 2,
    pieces: [{ from: 0, to: 2, curve: 'line', a: 1, b: 0, c: -1 }],
    shade_from: 0, shade_to: 2,
  },
  // A four-step staircase — the greatest-integer figure, up to the cap.
  // ∫₀⁴⌊x⌋dx = 0 + 1 + 2 + 3 = 6.
  staircase: {
    ...D, mode: 'area', x_min: 0, x_max: 4,
    pieces: [
      { from: 0, to: 1, curve: 'line', a: 0, b: 0, c: 0 },
      { from: 1, to: 2, curve: 'line', a: 0, b: 0, c: 1 },
      { from: 2, to: 3, curve: 'line', a: 0, b: 0, c: 2 },
      { from: 3, to: 4, curve: 'line', a: 0, b: 0, c: 3 },
    ],
    shade_from: 0, shade_to: 4,
    x_label: 'x', y_label: 'floor x',
  },
  // A piecewise curve with no shading at all, and one parabolic piece — the
  // `gap_piecewise_plot` shape rather than the region shape.
  piecewise_plot: {
    ...D, mode: 'curve', x_min: -2, x_max: 2,
    pieces: [
      { from: -2, to: 0, curve: 'line', a: -1, b: 0, c: 0 },
      { from: 0, to: 2, curve: 'parabola', a: 0.5, b: 0, c: 0 },
    ],
  },
  // Piecewise AND transposed at once — the corner where the two new
  // projections meet, which neither one alone would exercise.
  modulus_along_y: {
    ...D, mode: 'area', integrate_along: 'y', x_min: -2, x_max: 2,
    pieces: [
      { from: -2, to: 0, curve: 'line', a: -1, b: 0, c: 0 },
      { from: 0, to: 2, curve: 'line', a: 1, b: 0, c: 0 },
    ],
    shade_from: -2, shade_to: 2, x_label: 'x', y_label: 'y',
  },

  /* ---- 3. a tangent and a normal ---- */

  // y = x² at x = 3. f′ = 6, so the tangent is y = 6x − 9 — the line a v2
  // payload had to derive by hand and type into `curve2`.
  tangent_parabola: {
    ...D, mode: 'curve', curve: 'parabola', a: 1, b: 0, c: 0,
    x_min: 0, x_max: 4, tangent_kind: 'tangent', tangent_at: 3,
  },
  // The normal at the same point: slope −1/6.
  normal_parabola: {
    ...D, mode: 'curve', curve: 'parabola', a: 1, b: 0, c: 0,
    x_min: 0, x_max: 4, tangent_kind: 'normal', tangent_at: 3,
  },
  // gap_extrema_curve: the tangent at a maximum is horizontal, slope 0.
  // y = −x² + 4x has its vertex at x = 2, y = 4.
  tangent_at_extremum: {
    ...D, mode: 'curve', curve: 'parabola', a: -1, b: 4, c: 0,
    x_min: 0, x_max: 4, tangent_kind: 'tangent', tangent_at: 2,
  },
  // A tangent on a transcendental curve, where no `area_between` is possible
  // but a derivative still is: d/dx sin x at x = 0 is 1.
  tangent_sine: {
    ...D, mode: 'curve', curve: 'sine', a: 1, b: 1, c: 0,
    x_min: 0, x_max: 6.28, tangent_kind: 'tangent', tangent_at: 0,
  },
  // A tangent over a shaded region — the Ch8 concept 4 picture, with the
  // widget supplying the tangent instead of the author.
  tangent_over_area: {
    ...D, mode: 'area', curve: 'parabola', a: 1, b: 0, c: 0,
    x_min: 0, x_max: 3, shade_from: 0, shade_to: 2,
    tangent_kind: 'tangent', tangent_at: 1,
  },

  /* ---- 4. a family ---- */

  family_parabola: {
    ...D, mode: 'family', curve: 'parabola', a: 1, b: 0, c: 0,
    x_min: -2, x_max: 2, family_param: 'a', family_values: [0.5, 1, 2],
  },
  // The cap, at five members, with the widest values that still fit the
  // readout — the binding constraint on this mode.
  family_five: {
    ...D, mode: 'family', curve: 'line', a: 1, b: 0, c: 0,
    x_min: -4, x_max: 4, family_param: 'c', family_values: [-2, -1, 0, 1, 2],
  },
  // A family of sines at different frequencies, which no area mode admits.
  family_sine: {
    ...D, mode: 'family', curve: 'sine', a: 1, b: 1, c: 0,
    x_min: 0, x_max: 6.28, family_param: 'b', family_values: [1, 2, 3],
  },

  /* ---- 5. named shapes: added below, one per id ---- */

  /* ---- the Hinglish fixtures ---- */

  // THE CASE THAT ACTUALLY SHIPS: the default language, at the smallest
  // board, on the widest new readout. `family` is the tightest of the v3
  // modes because its readout carries BOTH axis labels and the full list of
  // values — nothing else on this widget concatenates a caption and a set of
  // numbers — so this is where a Hinglish label runs out of board first.
  // Paired with `family_hinglish_pair` below on the same payload, so the two
  // trees differ in the caption and in nothing else.
  family_hinglish: {
    ...D, mode: 'family', curve: 'parabola', a: 1, b: 0, c: 0,
    x_min: -2, x_max: 2, family_param: 'a', family_values: [0.5, 1, 2],
    x_label: 'sthiti x, metre mein', y_label: 'urja U',
  },
  family_hinglish_pair: {
    ...D, mode: 'family', curve: 'parabola', a: 1, b: 0, c: 0,
    x_min: -2, x_max: 2, family_param: 'a', family_values: [0.5, 1, 2],
    x_label: 'position x, in metres', y_label: 'energy U',
  },
  // And the same pressure on a tangent readout, which adds a number to a
  // caption-shaped line.
  tangent_hinglish: {
    ...D, mode: 'curve', curve: 'parabola', a: 1, b: 0, c: 0,
    x_min: 0, x_max: 4, tangent_kind: 'tangent', tangent_at: 3,
    x_label: 'samay t, second mein', y_label: 'doori s',
  },
};

for (const id of NAMED_SHAPE_IDS) {
  CASES[`named_${id}`] = { ...D, mode: 'named', named_shape: id };
}

/** What the readout must say, derived from NCERT before any render. */
const EXPECTED_READOUT: Record<string, string> = {
  latus_along_y: 'area 2.67',            // 8a²/3 at a = 1
  region_along_y: 'area 0.17',           // ∫₀¹(y − y²)dy = 1/6
  modulus_vs_parabola: 'area 0.33',      // 1/6 + 1/6
  modulus_area: 'area 1',                // ∫₀²|x−1| = 1/2 + 1/2
  signed_v_shape: 'area 0',              // ∫₀²(x−1) = 0, the same breakpoint
  staircase: 'area 6',                   // 0 + 1 + 2 + 3
  tangent_parabola: 'y vs x   tangent slope 6',
  normal_parabola: 'y vs x   normal slope -0.17',
  tangent_at_extremum: 'y vs x   tangent slope 0',
  tangent_sine: 'y vs x   tangent slope 1',
  tangent_over_area: 'area 2.67   tangent slope 2',
  family_parabola: 'y vs x   a = 0.50, 1, 2',
  family_five: 'y vs x   c = -2, -1, 0, 1, 2',
};

/* ------------------------------------------------------------------- tests */

test.each(Object.keys(CASES))('%s renders at every board size and writes its trees', (name) => {
  const params = accept(CASES[name]);
  mkdirSync(outDir, { recursive: true });
  for (const [label, box] of BOARDS) {
    const tree = renderWidgetTreeAt(xyPlot, params, motionOf(params), box.width, box.height);
    expect(tree).not.toBeNull();
    const json = JSON.stringify(tree);
    expect(json).not.toContain('NaN');
    // Something with geometry was drawn in every mode. `data` is the only
    // mode with no path and it is not exercised here.
    expect(json).toContain('"d":');
    writeFileSync(
      resolve(outDir, `${xyPlot.id}@${xyPlot.version}.${name}${label ? `.${label}` : ''}.json`),
      JSON.stringify(tree, null, 1)
    );
  }
  const expected = EXPECTED_READOUT[name];
  if (expected) {
    const tree = renderWidgetTreeAt(xyPlot, params, motionOf(params), 900, 430);
    // Asserted as a STRING IN THE TREE rather than through computeDerived, so
    // it checks what a student reads and not what the maths module returns.
    expect(JSON.stringify(tree)).toContain(`"content":"${expected}"`);
  }
});

test('every named shape is rendered somewhere above', () => {
  // A shape added to named-curves.ts without a fixture would never reach the
  // gate, and its landmarks would collide on a student's board instead of in
  // CI. This is the same guard render-trees.test.tsx keeps over the registry.
  for (const id of NAMED_SHAPE_IDS) {
    expect(Object.keys(CASES)).toContain(`named_${id}`);
  }
  expect(NAMED_SHAPE_IDS.length).toBe(Object.keys(NAMED_CURVES).length);
});

/**
 * THE PARAMS/MOTION INVARIANT, for the SECOND animatable key.
 *
 * `tangent_at` is new at v3 and it moves a straight line across the whole
 * plot, which is exactly the shape of thing that gets drawn as a `Line` and
 * therefore as SCAFFOLDING. It is drawn as a `Path` instead, and this is what
 * says so: render the same params at two very different tangent positions and
 * assert that no axis, tick or label moved.
 */
test('nothing in the scaffolding moves while tangent_at slides', () => {
  const p = accept(CASES.tangent_parabola);
  const near = renderWidgetTreeAt(xyPlot, p, { shade_to: p.shade_to, tangent_at: 0.5 }, 900, 430);
  const far = renderWidgetTreeAt(xyPlot, p, { shade_to: p.shade_to, tangent_at: 3.8 }, 900, 430);
  expect(scaffoldingDiffs(near, far)).toEqual([]);
  // ...and it did move, or the check above is vacuous.
  expect(JSON.stringify(near)).not.toEqual(JSON.stringify(far));
});

test('nothing in the scaffolding moves while a PIECEWISE shade_to sweeps a breakpoint', () => {
  // The piecewise analogue of the v2 crossing test: between these two values
  // the shaded region gains a whole lobe, because the sweep passes the
  // breakpoint at x = 1. The element count must not change with it — the
  // lobes are sub-paths of one `d`.
  const p = accept(CASES.modulus_area);
  const before = renderWidgetTreeAt(xyPlot, p, { shade_to: 0.6, tangent_at: 0 }, 900, 430);
  const after = renderWidgetTreeAt(xyPlot, p, { shade_to: 1.7, tangent_at: 0 }, 900, 430);
  expect(scaffoldingDiffs(before, after)).toEqual([]);
  const zCount = (t: unknown) => (JSON.stringify(t).match(/Z/g) ?? []).length;
  expect(zCount(before)).toBe(1);
  expect(zCount(after)).toBe(2);
});

/**
 * THE PICTURE AND THE NUMBER, ON A PIECEWISE PAYLOAD.
 *
 * The v2 version of this measured the shaded polygon with a shoelace sum and
 * checked that pixels-per-unit-area stayed constant across a sweep. Repeated
 * here because `pieces` introduces a SECOND partition — the breakpoints — on
 * top of the crossings, and a bug in either one shows up as the ratio moving.
 *
 * Per-lobe ABSOLUTE area, summed. Not the absolute value of the sum: adjacent
 * lobes wind in opposite directions and would cancel, which is the very
 * cancellation ∫|f−g| exists to prevent, reappearing in the checker. That
 * mistake was made once already, in the v2 version of this test, where it
 * under-reported by 6%.
 */
test('the shaded pixels and the reported area keep a constant ratio across a piecewise sweep', () => {
  const shoelace = (d: string): number => {
    let total = 0;
    for (const sub of d.split('M').slice(1)) {
      const nums = sub.match(/-?\d+\.?\d*/g) ?? [];
      const pts: [number, number][] = [];
      for (let i = 0; i + 1 < nums.length; i += 2) pts.push([+nums[i], +nums[i + 1]]);
      let lobe = 0;
      for (let i = 0; i < pts.length; i++) {
        const [x0, y0] = pts[i];
        const [x1, y1] = pts[(i + 1) % pts.length];
        lobe += x0 * y1 - x1 * y0;
      }
      total += Math.abs(lobe) / 2;
    }
    return total;
  };
  const shadedPath = (tree: unknown): string => {
    const found: string[] = [];
    const walk = (n: unknown): void => {
      if (!n || typeof n !== 'object') return;
      if (Array.isArray(n)) return n.forEach(walk);
      const e = n as { props?: { d?: string }; children?: unknown };
      if (e.props?.d && e.props.d.includes('Z')) found.push(e.props.d);
      walk(e.children);
    };
    walk(tree);
    expect(found).toHaveLength(1);
    return found[0];
  };

  const p = accept(CASES.modulus_vs_parabola);
  const ratios: number[] = [];
  for (const shadeTo of [-0.7, -0.2, 0.3, 0.8, 1]) {
    const tree = renderWidgetTreeAt(
      xyPlot, { ...p, shade_to: shadeTo }, { shade_to: shadeTo, tangent_at: 0 }, 900, 430
    );
    const reported = xyPlot.computeDerived({ ...p, shade_to: shadeTo }).area;
    expect(reported).toBeGreaterThan(0);
    ratios.push(shoelace(shadedPath(tree)) / reported);
  }
  for (const r of ratios) expect(r / ratios[0]).toBeCloseTo(1, 2);
});

/**
 * THE CORNERS OF THE NEW SCHEMA, not its endpoints.
 *
 * CLAUDE.md §3: a schema with N params has 2^N corners and the defects hide
 * in the combinations. v3 adds four independent binary-ish axes on top of the
 * v2 sweep — the integration axis, whether f is piecewise, whether there is a
 * tangent, and the coefficient/domain scale — so this is 2^5 = 32 payloads,
 * crossed with all three board sizes.
 *
 * A REFUSED corner is a PASS: it means validate() and the gate agree about a
 * payload that cannot be drawn legibly. What would be a failure is a corner
 * validate() accepts and the gate then rejects — and there is no assertion
 * for that here because there does not need to be: the gate runs over
 * everything this writes.
 */
describe('v3 corners', () => {
  const corners: { name: string; raw: Record<string, unknown> }[] = [];
  for (const axis of ['x', 'y'] as const) {
    for (const piecewise of [false, true]) {
      for (const tangent of ['none', 'tangent'] as const) {
        for (const mag of [0.01, 100]) {
          for (const [xMin, xMax] of [[-0.5, 0.5], [-1000, 1000]] as [number, number][]) {
            const mid = (xMin + xMax) / 2;
            corners.push({
              name: [
                axis, piecewise ? 'pw' : 'single', tangent === 'none' ? 'plain' : 'tan',
                mag === 100 ? 'big' : 'tiny', xMax > 100 ? 'wide' : 'narrow',
              ].join('-'),
              raw: {
                ...D,
                mode: 'area_between',
                integrate_along: axis,
                curve: 'parabola', a: mag, b: mag / 2, c: 0,
                curve2: 'line', a2: -mag, b2: 0, c2: mag,
                x_min: xMin, x_max: xMax,
                shade_from: xMin, shade_to: xMax,
                pieces: piecewise
                  ? [
                      { from: xMin, to: mid, curve: 'line', a: -mag, b: 0, c: 0 },
                      { from: mid, to: xMax, curve: 'parabola', a: mag, b: 0, c: 0 },
                    ]
                  : [],
                tangent_kind: tangent,
                // Deliberately NOT the midpoint, which is the breakpoint on
                // the piecewise corners and is refused for a good reason.
                tangent_at: xMin + (xMax - xMin) * 0.3,
              },
            });
          }
        }
      }
    }
  }

  test('there are 32 corners and validate() never throws on any of them', () => {
    expect(corners).toHaveLength(32);
    for (const { raw } of corners) expect(() => xyPlot.validate(raw)).not.toThrow();
  });

  test('the sweep is not vacuous — some corners are accepted and some refused', () => {
    const ok = corners.map((k) => xyPlot.validate(k.raw).ok);
    expect(ok.filter(Boolean).length).toBeGreaterThan(4);
    expect(ok.filter((v) => !v).length).toBeGreaterThan(0);
  });

  test('every refusal says something a person can act on', () => {
    for (const { name, raw } of corners) {
      const r = xyPlot.validate(raw);
      if (r.ok) continue;
      expect(r.errors.length).toBeGreaterThan(0);
      for (const e of r.errors) expect(e.length).toBeGreaterThan(20);
      expect(`${name}: ${r.errors.join(' | ')}`)
        .toMatch(/edge|gridline|curve|interval|spacing|piece|domain|slope|readout/);
    }
  });

  test.each(corners)('$name renders through the gate at every board size', ({ name, raw }) => {
    const r = xyPlot.validate(raw);
    if (!r.ok) {
      expect(r.ok).toBe(false);
      return;
    }
    const p = r.params;
    mkdirSync(outDir, { recursive: true });
    for (const [label, box] of BOARDS) {
      const tree = renderWidgetTreeAt(xyPlot, p, motionOf(p), box.width, box.height);
      expect(tree).not.toBeNull();
      expect(JSON.stringify(tree)).not.toContain('NaN');
      writeFileSync(
        resolve(outDir, `${xyPlot.id}@${xyPlot.version}.v3corner-${name}${label ? `.${label}` : ''}.json`),
        JSON.stringify(tree, null, 1)
      );
    }
  });
});

/**
 * THE TRANSPOSED PICTURE IS THE SAME REGION, MEASURED IN PIXELS.
 *
 * Everything else about `integrate_along` is checked through `derive`, which
 * cannot tell the two apart because the projection never reaches it. This is
 * the check on the DRAWING, and it does not go through the projection code at
 * all — it reads the rendered `d` and measures it.
 *
 * The invariant: transposing swaps which pixel axis carries u, so the shaded
 * region's pixel area scales by
 *
 *   along x   (plotW/uSpan) x (plotH/vSpan)
 *   along y   (plotH/uSpan) x (plotW/vSpan)
 *
 * and those two products are IDENTICAL. So the shoelace area of the shaded
 * path must be the same number on the same board, whichever axis the payload
 * integrates along — even though the two shapes look nothing alike, and even
 * though the board is not square. Neither `planFrame` nor `ptStr` is
 * consulted: the numbers come out of the tree.
 *
 * Per-lobe absolute area, summed. Not the absolute value of the sum — see the
 * piecewise version above for what that mistake costs.
 */
test('a transposed region has the same drawn pixel area as the untransposed one', () => {
  const shoelace = (d: string): number => {
    let total = 0;
    for (const sub of d.split('M').slice(1)) {
      const nums = sub.match(/-?\d+\.?\d*/g) ?? [];
      const pts: [number, number][] = [];
      for (let i = 0; i + 1 < nums.length; i += 2) pts.push([+nums[i], +nums[i + 1]]);
      let lobe = 0;
      for (let i = 0; i < pts.length; i++) {
        const [x0, y0] = pts[i];
        const [x1, y1] = pts[(i + 1) % pts.length];
        lobe += x0 * y1 - x1 * y0;
      }
      total += Math.abs(lobe) / 2;
    }
    return total;
  };
  const closedPath = (tree: unknown): string => {
    const found: string[] = [];
    const walk = (n: unknown): void => {
      if (!n || typeof n !== 'object') return;
      if (Array.isArray(n)) return n.forEach(walk);
      const e = n as { props?: { d?: string }; children?: unknown };
      if (e.props?.d && e.props.d.includes('Z')) found.push(e.props.d);
      walk(e.children);
    };
    walk(tree);
    expect(found).toHaveLength(1);
    return found[0];
  };

  const base = {
    ...D, mode: 'area_between' as const,
    curve: 'line' as const, a: 0, b: 0, c: 1,
    curve2: 'parabola' as const, a2: 0.25, b2: 0, c2: 0,
    x_min: -2.4, x_max: 2.4, shade_from: -2, shade_to: 2,
  };
  // A deliberately NON-SQUARE board, so an implementation that happened to
  // work only when plotW === plotH would fail here.
  for (const box of [{ width: 900, height: 430 }, { width: 343, height: 236 }]) {
    const px = accept({ ...base, integrate_along: 'x' });
    const py = accept({ ...base, integrate_along: 'y' });
    const treeX = renderWidgetTreeAt(xyPlot, px, motionOf(px), box.width, box.height);
    const treeY = renderWidgetTreeAt(xyPlot, py, motionOf(py), box.width, box.height);
    const dx = closedPath(treeX);
    const dy = closedPath(treeY);
    // The two pictures are genuinely different, or the equality below is
    // measuring one thing twice.
    expect(dx).not.toEqual(dy);
    expect(shoelace(dy) / shoelace(dx)).toBeCloseTo(1, 3);
  }
});

/**
 * field_lines v2 — what actually reaches the board.
 *
 * Two jobs, kept apart on purpose:
 *
 *  1. WRITE TREES for scripts/verify-render.mjs. Every v2 configuration, at
 *     all three board boxes, plus the cases that only exist at a corner of the
 *     legal box. The gate asserts legibility, bounds, collisions and NaN; this
 *     file does not re-implement any of that — mirroring the gate's assertions
 *     into a widget's own suite is how a widget ends up passing a checker it
 *     wrote itself.
 *
 *  2. ASSERT THE THINGS THE GATE CANNOT SEE. The gate knows a label did not
 *     collide; it does not know whether the number in that label is the number
 *     the widget drew. Everything below the tree-writing block is of that kind
 *     — a readout claiming N field lines while the tree holds a different
 *     number of them is the defect a verifier found in `molecule_struct`
 *     ("reporting secondary_angle 0 while drawing the angle"), and it passes
 *     every render assertion there is.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { fieldLines } from '..';
import {
  EQUI_CONTOURS, EQUI_PLANES, SURFACE_SCALE_MAX, SURFACE_SCALE_MIN,
  chargesFor, deriveFieldLines, surfaceArrows, type FieldLinesParams,
} from '../physics';
import { renderWidgetTree, renderWidgetTreeAt, TEST_THEME } from '../../__tests__/test-utils';

const outDir = resolve(__dirname, '../../../../build/trees');

const BOARDS = [
  { name: '', width: 900, height: 430 },
  { name: '.real-small', width: 495, height: 270 },
  { name: '.spec-small', width: 343, height: 236 },
] as const;

const V2_CONFIGS = [
  'gaussian_sphere', 'gaussian_cylinder', 'gaussian_pillbox',
  'equipotential_point', 'equipotential_uniform',
] as const;

const ALL_CONFIGS = [
  'point', 'dipole', 'like_charges', 'parallel_plates', ...V2_CONFIGS,
] as const;

function params(over: Partial<FieldLinesParams>): FieldLinesParams {
  const r = fieldLines.validate({ ...fieldLines.defaults, ...over });
  if (!r.ok) throw new Error(`fixture rejected by validate(): ${r.errors.join(', ')}`);
  return r.params;
}

/* ------------------------------------------------------------ tree walking */

interface Node { type: string; props?: Record<string, unknown>; children?: unknown }
function flatten(node: unknown, out: Node[] = []): Node[] {
  if (!node || typeof node !== 'object') return out;
  if (Array.isArray(node)) { for (const n of node) flatten(n, out); return out; }
  const n = node as Node;
  out.push(n);
  flatten(n.children, out);
  return out;
}
const paths = (t: unknown) => flatten(t).filter((n) => n.type === 'RNSVGPath');

/**
 * react-native-svg does NOT keep the props you wrote. Verified against the
 * checked-in v1 trees at react-native-svg 15.12.1:
 *
 *   you write            the tree contains
 *   fill="none"          fill: null
 *   fill={theme.ink}     fill: { type: 0, payload: 4280031254 }   <- ARGB int
 *   <Text>+</Text>       content: null, with a child RNSVGTSpan
 *
 * Reading `props.fill === 'none'` therefore matches NOTHING, and every filter
 * below would return an empty array and pass every length assertion against a
 * widget that drew nothing at all. That is not hypothetical: this file's first
 * run reported 0 field lines on a payload with 10 of them, and the tests
 * "failed" only because they were written to expect a positive count. A filter
 * that cannot match is the same defect class as a self-check that cannot fail.
 */
const argb = (hex: string) => (0xff000000 | parseInt(hex.slice(1), 16)) >>> 0;
const fillPayload = (n: Node): number | null => {
  const f = n.props?.fill;
  return f && typeof f === 'object' ? Number((f as { payload: number }).payload) : null;
};
/** A traced field line: stroked, unfilled, and NOT dashed. */
const fieldLinePaths = (t: unknown) =>
  paths(t).filter((n) => n.props?.fill == null && n.props?.stroke != null && n.props?.strokeDasharray == null);
/** A construction surface: unfilled and dashed. */
const surfacePaths = (t: unknown) =>
  paths(t).filter((n) => n.props?.fill == null && n.props?.strokeDasharray != null);
/** An E vector drawn on a construction surface: filled with ink, never stroked. */
const vectorPaths = (t: unknown) =>
  paths(t).filter((n) => fillPayload(n) === argb(TEST_THEME.ink));
/** An arrowhead on a traced field line: filled with the accent. */
const lineArrowPaths = (t: unknown) =>
  paths(t).filter((n) => fillPayload(n) === argb(TEST_THEME.accent));

function textsOf(t: unknown): { content: string; y: number }[] {
  const out: { content: string; y: number }[] = [];
  for (const n of flatten(t)) {
    if (n.type !== 'RNSVGText') continue;
    const y = Array.isArray(n.props?.y) ? Number((n.props!.y as number[])[0]) : Number(n.props?.y);
    const parts: string[] = [];
    for (const k of flatten(n.children)) {
      if (typeof k.props?.content === 'string') parts.push(k.props.content);
    }
    out.push({ content: parts.join(''), y });
  }
  return out;
}

/* ------------------------------------------------------------ 1. the trees */

describe('trees for scripts/verify-render.mjs', () => {
  beforeAll(() => mkdirSync(outDir, { recursive: true }));

  const write = (name: string, tree: unknown) => {
    expect(tree).not.toBeNull();
    writeFileSync(resolve(outDir, `${fieldLines.id}@${fieldLines.version}.${name}.json`),
      JSON.stringify(tree, null, 1));
  };

  test.each(V2_CONFIGS)('%s, enclosed, at every board', (configuration) => {
    for (const b of BOARDS) {
      write(`${configuration}${b.name}`,
        renderWidgetTreeAt(fieldLines, params({ configuration }), {}, b.width, b.height));
    }
  });

  test.each(['gaussian_sphere', 'gaussian_cylinder', 'gaussian_pillbox'] as const)(
    '%s with its source OUTSIDE the surface, at every board',
    (configuration) => {
      for (const b of BOARDS) {
        write(`${configuration}-outside${b.name}`,
          renderWidgetTreeAt(fieldLines, params({ configuration, enclosed: false }), {},
            b.width, b.height));
      }
    }
  );

  /**
   * The surface at both ends of its legal range, on the SMALLEST board — the
   * two states `validate()`'s clamp admits, at the box where a dashed 5/4
   * pattern and a 22px clearance are decided. Measured at 343x236 per
   * CLAUDE.md, not at 900x430.
   */
  test.each(['gaussian_sphere', 'gaussian_cylinder', 'gaussian_pillbox'] as const)(
    '%s at both ends of surface_scale, smallest board',
    (configuration) => {
      for (const surface_scale of [SURFACE_SCALE_MIN, SURFACE_SCALE_MAX]) {
        for (const enclosed of [true, false]) {
          const tag = `${configuration}-s${surface_scale}${enclosed ? '' : '-outside'}`;
          write(`${tag}.spec-small`,
            renderWidgetTreeAt(fieldLines, params({ configuration, surface_scale, enclosed }),
              {}, 343, 236));
        }
      }
    }
  );

  /**
   * THE CASE THAT ACTUALLY SHIPS: a Hinglish caption at 343x236.
   *
   * The app's default language is `hinglish` (lib/preferences.ts) and Hinglish
   * is romanised LATIN that says the same thing in more characters — so the
   * pressure is LENGTH, on a readout that is width-fitted. Paired with the
   * English sentence on the SAME payload, so the two trees differ in the
   * caption and nothing else.
   *
   * FINDING, reported rather than tuned away. Measured off the rendered trees,
   * not estimated — this widget's Gaussian readout carries four terms:
   *
   *   gaussian_sphere    budget   value kept          caption room  rendered
   *     900x430            97     all four   (50)          44      "…ka charge hi flux…"
   *     495x270            53     all four   (50)           0      no caption at all
   *     343x236            37     Qenc, Φ    (25)           9      "Gaussian…"
   *
   *   gaussian_pillbox — the longest value string of the nine:
   *     900x430            97     all four   (56)          38
   *     495x270            53     Qenc, Φ, E (43)           7      "Gaussi…"
   *     343x236            37     Qenc, Φ    (28)           6      "Gauss…"
   *
   * A realistic 57-code-unit Hinglish sentence is therefore elided at EVERY
   * board size, and at 495x270 the sphere's four terms fit so exactly that
   * `room` lands on 0 and the caption vanishes rather than tapering — which
   * is `fitReadout`'s documented behaviour when the value needs the whole
   * board, not a threshold: one more character of value and the caption was
   * already gone. The taper is behaving exactly
   * as chrome.ts specifies — the caption is only ever given width the numbers
   * did not need, no number is ever cut from its unit, and Qenc and Φ, which
   * the figure exists for, survive at every size. But this widget cannot hold
   * a real caption alongside a four-term readout on any board, and shortening
   * the sentence until it fits would be hiding that rather than reporting it.
   */
  test('a Hinglish caption and its English pair, 343x236', () => {
    const payload = { configuration: 'gaussian_sphere' as const };
    write('gaussian_sphere-english.spec-small', renderWidgetTreeAt(
      fieldLines,
      params({ ...payload, caption: 'Only the enclosed charge sets the flux' }),
      {}, 343, 236
    ));
    write('gaussian_sphere-hinglish.spec-small', renderWidgetTreeAt(
      fieldLines,
      params({ ...payload, caption: 'Gaussian surface ke andar ka charge hi flux tay karta hai' }),
      {}, 343, 236
    ));
    // Same at the largest board, where the caption DOES fit and the length
    // difference is visible rather than clipped away.
    write('gaussian_sphere-hinglish', renderWidgetTree(
      fieldLines,
      params({ ...payload, caption: 'Gaussian surface ke andar ka charge hi flux tay karta hai' })
    ));
  });

  test('arrows off, at every board — the payload a still figure uses', () => {
    for (const configuration of V2_CONFIGS) {
      write(`${configuration}-noarrows.spec-small`,
        renderWidgetTreeAt(fieldLines, params({ configuration, show_arrows: false }), {}, 343, 236));
    }
  });
});

/* --------------------------------------- 2. what the gate cannot check */

describe('the readout describes the tree it is drawn on', () => {
  /**
   * `lineCount` is PER SEEDING SOURCE, not a total. That is what physics.ts
   * has always documented ("Field lines drawn per charge") and it is the only
   * reading that keeps `like_charges` honest — it seeds every one of its two
   * positive charges, so charge_uc 10 puts 20 curves on the board.
   *
   * FINDING, PRE-EXISTING, NOT FIXED HERE. v1's readout prints that number as
   * `lines 10`, which reads as a total, and on `like_charges` the board
   * carries 20. `dipole` seeds only its positive charge, so there the same
   * label IS the total; the string is right for three configurations out of
   * four and wrong for one. Fixing it means changing the v1 readout string,
   * which is exactly the byte-identity __golden__ exists to protect and which
   * the brief for this change requires — so it is reported rather than
   * silently corrected in a commit about Gaussian surfaces. The relationship
   * is pinned below so a future fix has to face it deliberately.
   */
  test.each(ALL_CONFIGS)('%s: lineCount x seeding sources equals the curves drawn', (configuration) => {
    for (const charge_uc of [4, 20]) {
      const p = params({ configuration, charge_uc });
      const seeds = configuration === 'parallel_plates'
        ? 1
        : chargesFor(p).filter((c) => c.q > 0).length;
      const tree = renderWidgetTree(fieldLines, p);
      expect(fieldLinePaths(tree)).toHaveLength(deriveFieldLines(p).lineCount * seeds);
    }
  });

  test('like_charges is the one configuration whose readout count is not the total', () => {
    const p = params({ configuration: 'like_charges', charge_uc: 10 });
    expect(deriveFieldLines(p).lineCount).toBe(10);
    expect(fieldLinePaths(renderWidgetTree(fieldLines, p))).toHaveLength(20);
    // Every other seeding configuration agrees with its own readout.
    for (const configuration of ['point', 'dipole', 'parallel_plates', 'gaussian_sphere'] as const) {
      const q = params({ configuration, charge_uc: 10 });
      expect(fieldLinePaths(renderWidgetTree(fieldLines, q))).toHaveLength(deriveFieldLines(q).lineCount);
    }
  });

  test.each(V2_CONFIGS)('%s: every E vector physics.ts places is drawn, and no other', (configuration) => {
    for (const enclosed of [true, false]) {
      for (const surface_scale of [SURFACE_SCALE_MIN, SURFACE_SCALE_MAX]) {
        const p = params({ configuration, enclosed, surface_scale });
        const expected = configuration.startsWith('gaussian_')
          ? surfaceArrows(p).length
          // 8 radial arrows for the point map; one per PLANE GAP, two rows,
          // for the uniform one — derived from EQUI_PLANES, not a literal.
          : configuration === 'equipotential_point' ? 8 : 2 * (EQUI_PLANES - 1);
        expect(vectorPaths(renderWidgetTree(fieldLines, p))).toHaveLength(expected);
      }
    }
  });

  test.each(V2_CONFIGS)('%s: show_arrows false draws no arrowhead of either kind', (configuration) => {
    const tree = renderWidgetTree(fieldLines, params({ configuration, show_arrows: false }));
    expect(vectorPaths(tree)).toHaveLength(0);
    expect(lineArrowPaths(tree)).toHaveLength(0);
  });

  test('the dashed surfaces drawn are the ones physics.ts describes', () => {
    // A sphere is one closed curve; a cylinder and a pillbox are four (two
    // silhouette lines and two end caps). The point-charge equipotential map
    // is one curve per contour. If these ever disagree, the picture is a
    // different figure from the one the maths is about.
    expect(surfacePaths(renderWidgetTree(fieldLines, params({ configuration: 'gaussian_sphere' })))).toHaveLength(1);
    expect(surfacePaths(renderWidgetTree(fieldLines, params({ configuration: 'gaussian_cylinder' })))).toHaveLength(4);
    expect(surfacePaths(renderWidgetTree(fieldLines, params({ configuration: 'gaussian_pillbox' })))).toHaveLength(4);
    expect(surfacePaths(renderWidgetTree(fieldLines, params({ configuration: 'equipotential_point' })))).toHaveLength(EQUI_CONTOURS);
    // The uniform-field planes are straight, so they are <Line>s, not paths —
    // and there are EQUI_PLANES of them.
    const uniform = flatten(renderWidgetTree(fieldLines, params({ configuration: 'equipotential_uniform' })))
      .filter((n) => n.type === 'RNSVGLine' && n.props?.strokeDasharray != null);
    expect(uniform).toHaveLength(EQUI_PLANES);
  });

  test.each(V2_CONFIGS)('%s: the readout names the quantities the figure is for', (configuration) => {
    const tree = renderWidgetTree(fieldLines, params({ configuration }));
    const readout = textsOf(tree).reduce((a, b) => (a.y < b.y ? a : b)).content;
    if (configuration.startsWith('gaussian_')) {
      expect(readout).toContain('Qenc');
      expect(readout).toContain('Φ');
    } else {
      expect(readout).toContain('ΔV');
    }
  });

  test('a surface that encloses nothing prints a flux of exactly zero', () => {
    for (const configuration of ['gaussian_sphere', 'gaussian_cylinder', 'gaussian_pillbox'] as const) {
      const readout = textsOf(renderWidgetTree(fieldLines, params({ configuration, enclosed: false })))
        .reduce((a, b) => (a.y < b.y ? a : b)).content;
      expect(readout).toContain('Qenc 0 µC');
      expect(readout).toContain('Φ 0 V·m');
    }
  });

  /**
   * The unit trap. `charge_uc` is a charge for the sphere, a LINE density for
   * the cylinder and a SURFACE density for the pillbox, and all three print a
   * source term beside an enclosed charge in µC. A readout saying "Qenc 3 µC
   * ... λ 10 µC" for a wire would be stating two different charges for one
   * object, which is exactly the class of defect a verifier found in
   * `circuit_network` (a resistance computed from a capacitance).
   */
  test.each([
    ['gaussian_sphere', 'q', 'µC'],
    ['gaussian_cylinder', 'λ', 'µC/m'],
    ['gaussian_pillbox', 'σ', 'µC/m²'],
    ['equipotential_uniform', 'σ', 'µC/m²'],
    ['equipotential_point', 'q', 'µC'],
  ] as const)('%s labels its source as %s in %s', (configuration, symbol, unit) => {
    // At 900x430 nothing is trimmed, so the whole value string is present.
    const readout = textsOf(renderWidgetTree(fieldLines, params({ configuration })))
      .reduce((a, b) => (a.y < b.y ? a : b)).content;
    expect(readout).toContain(`${symbol} 10 ${unit}`);
  });
});

describe('exactly one corner label, and it fits', () => {
  test.each(ALL_CONFIGS)('%s: at most one bottom-left label at every board', (configuration) => {
    for (const annotate of [null, 'neutral_point', 'termination'] as const) {
      for (const b of BOARDS) {
        const tree = renderWidgetTreeAt(fieldLines, params({ configuration, annotate }), {},
          b.width, b.height);
        const bottom = textsOf(tree).filter((t) => t.y > b.height * 0.9);
        expect(bottom.length).toBeLessThanOrEqual(1);
      }
    }
  });

  test.each(V2_CONFIGS)('%s: the surface label is fitted, never overhanging', (configuration) => {
    for (const enclosed of [true, false]) {
      for (const b of BOARDS) {
        const tree = renderWidgetTreeAt(fieldLines, params({ configuration, enclosed }), {},
          b.width, b.height);
        const bottom = textsOf(tree).filter((t) => t.y > b.height * 0.9);
        expect(bottom).toHaveLength(1);
        // The label starts at PAD_SIDE_FRAC and may run to (1 - PAD_SIDE_FRAC).
        // Measured with the SAME 0.58 model scripts/verify-render.mjs uses.
        const usable = b.width * 0.88;
        expect(bottom[0].content.length * 12 * 0.58).toBeLessThanOrEqual(usable + 1e-9);
      }
    }
  });
});

describe('the small-board hazards this widget has a history of', () => {
  /**
   * The equipotential contours are concentric and the charge glyph sits at
   * their centre. verify-render's assertion 8 exempts same-centre circles only
   * because it compares CIRCLES, and the contours are polyline paths — so
   * nothing in the gate would notice a contour radius landing on the glyph.
   * Asserted here at every board size instead.
   */
  test('no equipotential contour collides with the charge glyph', () => {
    for (const b of BOARDS) {
      for (const charge_uc of [4, 20]) {
        const tree = renderWidgetTreeAt(fieldLines,
          params({ configuration: 'equipotential_point', charge_uc }), {}, b.width, b.height);
        const glyph = flatten(tree).find((n) => n.type === 'RNSVGCircle');
        expect(glyph).toBeDefined();
        const gr = Number(glyph!.props?.r);
        const cx = Number(glyph!.props?.cx), cy = Number(glyph!.props?.cy);
        for (const sp of surfacePaths(tree)) {
          const nums = String(sp.props?.d).match(/-?\d+\.?\d*/g)!.map(Number);
          // Radius of a contour: distance from the glyph centre to its first point.
          const r = Math.hypot(nums[0] - cx, nums[1] - cy);
          expect(r).toBeGreaterThan(gr + 4);
        }
      }
    }
  });

  test('every stroke that reaches the tree clears the 1.2pt floor', () => {
    for (const configuration of ALL_CONFIGS) {
      for (const b of BOARDS) {
        for (const surface_scale of [SURFACE_SCALE_MIN, SURFACE_SCALE_MAX]) {
          const tree = renderWidgetTreeAt(fieldLines, params({ configuration, surface_scale }), {},
            b.width, b.height);
          for (const n of flatten(tree)) {
            if (n.props?.stroke == null) continue;
            expect(Number(n.props.strokeWidth)).toBeGreaterThanOrEqual(1.2);
          }
        }
      }
    }
  });
});

describe("the scaffolding rule, for a widget whose surface param SNAPS", () => {
  /**
   * CLAUDE.md's params/motion invariant is normally tested by rendering at
   * identical params and two `motion` values and asserting no scaffolding
   * moved. `field_lines` has `animatable: []`, so that test is VACUOUS here —
   * and a vacuous test is worse than none, because it looks like coverage.
   *
   * The invariant the rule is actually about still applies, so it is asserted
   * in the form this widget can have one: `surface_scale` is the value a cue
   * moves, and NOTHING that is not the surface may move with it. The frame,
   * the source object (the wire, the sheet, the charge glyph and its "+") and
   * the world scale must all be byte-identical between the two ends of the
   * legal range. If `pxPerM` were ever computed from the surface size — the
   * obvious way to "make it fit" — the surface would appear not to grow, and
   * P12Ch01Sec53's "double the radius, the flux does not move" would show
   * nothing moving at all.
   *
   * `scaffoldingDiffs` is deliberately NOT reused: it would flag the readout,
   * which is params-driven and MUST change when E changes. Reusing it would
   * mean loosening it, and a loosened shared checker is worse than a specific
   * one here.
   */
  /** Source objects and rules: the wire, the sheet, the plates, the planes,
   *  the charge glyph. None of these is the Gaussian surface. */
  const staticShapes = (t: unknown) =>
    flatten(t)
      .filter((n) => n.type === 'RNSVGLine' || n.type === 'RNSVGCircle')
      .map((n) => JSON.stringify(n.props));

  /** Where every line of text SITS, and what it says — except the readout,
   *  whose E term is a function of the surface radius and must change.
   *  Excluding it by position rather than by content, so a readout that
   *  stopped being the top line would fail here rather than be skipped. */
  const textFrames = (t: unknown) =>
    flatten(t)
      .filter((n) => n.type === 'RNSVGText')
      .map((n) => JSON.stringify({ x: n.props?.x, y: n.props?.y, font: n.props?.font }));
  const textsBelowReadout = (t: unknown) => {
    const all = textsOf(t).sort((a, b) => a.y - b.y);
    return all.slice(1).map((x) => `${x.y}:${x.content}`);
  };

  test.each(ALL_CONFIGS)('%s: only the surface moves when surface_scale does', (configuration) => {
    for (const b of BOARDS) {
      for (const enclosed of [true, false]) {
        const small = renderWidgetTreeAt(fieldLines,
          params({ configuration, enclosed, surface_scale: SURFACE_SCALE_MIN }), {}, b.width, b.height);
        const large = renderWidgetTreeAt(fieldLines,
          params({ configuration, enclosed, surface_scale: SURFACE_SCALE_MAX }), {}, b.width, b.height);
        expect(staticShapes(small)).toEqual(staticShapes(large));
        expect(textFrames(small)).toEqual(textFrames(large));
        expect(textsBelowReadout(small)).toEqual(textsBelowReadout(large));
      }
    }
  });

  test('the flux readout is INDEPENDENT of the surface radius, and E is not', () => {
    // P12Ch01Sec53 in one assertion: grow the surface, the flux does not move.
    for (const configuration of ['gaussian_sphere', 'gaussian_cylinder'] as const) {
      const read = (surface_scale: number) =>
        textsOf(renderWidgetTree(fieldLines, params({ configuration, surface_scale })))
          .sort((a, b) => a.y - b.y)[0].content;
      const small = read(SURFACE_SCALE_MIN), large = read(SURFACE_SCALE_MAX);
      const phi = (s: string) => s.match(/Φ \S+ V·m/)![0];
      const e = (s: string) => s.match(/E \S+ N\/C/)![0];
      expect(phi(small)).toBe(phi(large));
      expect(e(small)).not.toBe(e(large));
    }
    // The pillbox is the third case and it is NOT invariant: its enclosed
    // charge is sigma times the CAP AREA, which grows with the radius. Stated
    // here so the difference reads as physics rather than as an oversight.
    const readPillbox = (surface_scale: number) =>
      textsOf(renderWidgetTree(fieldLines, params({ configuration: 'gaussian_pillbox', surface_scale })))
        .sort((a, b) => a.y - b.y)[0].content;
    expect(readPillbox(SURFACE_SCALE_MIN)).not.toBe(readPillbox(SURFACE_SCALE_MAX));
  });

  test.each(['gaussian_sphere', 'gaussian_cylinder', 'gaussian_pillbox'] as const)(
    '%s: the surface itself DOES move, so the test above is not passing on nothing',
    (configuration) => {
      const small = surfacePaths(renderWidgetTreeAt(fieldLines,
        params({ configuration, surface_scale: SURFACE_SCALE_MIN }), {}, 900, 430));
      const large = surfacePaths(renderWidgetTreeAt(fieldLines,
        params({ configuration, surface_scale: SURFACE_SCALE_MAX }), {}, 900, 430));
      expect(small).toHaveLength(large.length);
      expect(small.map((n) => n.props?.d)).not.toEqual(large.map((n) => n.props?.d));
    }
  );
});

describe('every corner label fits its board without being cut', () => {
  /**
   * The defect this pins, found by an independent verifier and not by the
   * suite above: two labels were over the 43-code-unit budget at 343x236 and
   * were rendered through a bare `slice`, so they came out cut mid-word —
   * "…CAPS CARRY NO F" — and the not-enclosed pillbox lost "Φ = 0", the
   * entire assertion of its figure. The gate cannot see it: a slice makes the
   * text fit, so nothing runs off the board and nothing collides.
   *
   * Two assertions, because either alone is insufficient. The first says the
   * labels FIT, which is what should be true. The second says the fitter
   * TAPERS rather than slices, which is what must happen the day someone
   * writes a longer one — a fit test alone would just start failing with no
   * hint of what the renderer would have done.
   */
  test.each(V2_CONFIGS)('%s: the label is never elided at any board', (configuration) => {
    for (const enclosed of [true, false]) {
      for (const b of BOARDS) {
        const tree = renderWidgetTreeAt(fieldLines, params({ configuration, enclosed }), {},
          b.width, b.height);
        const bottom = textsOf(tree).filter((t) => t.y > b.height * 0.9);
        expect(bottom).toHaveLength(1);
        expect(bottom[0].content).not.toContain('\u2026');
        // And it says something whole: the Φ = 0 cases must still carry it.
        if (!enclosed && configuration.startsWith('gaussian_')) {
          expect(bottom[0].content).toMatch(/Φ = 0|FLUX IN = FLUX OUT/);
        }
      }
    }
  });

  test('a label that does NOT fit tapers with an ellipsis, never mid-word', () => {
    // Rendered at a board narrow enough to force the cut, so this exercises
    // the real renderer rather than the helper in isolation. 140pt of width
    // gives 0.88*140/(12*0.58) = 17 code units.
    const tree = renderWidgetTreeAt(fieldLines,
      params({ configuration: 'gaussian_cylinder' }), {}, 140, 236);
    const bottom = textsOf(tree).filter((t) => t.y > 236 * 0.9);
    expect(bottom).toHaveLength(1);
    const shown = bottom[0].content;
    expect(shown.endsWith('\u2026')).toBe(true);
    expect(shown.length).toBeLessThanOrEqual(17);
    // No trailing space swallowed into the ellipsis.
    expect(shown).not.toContain(' \u2026');
  });
});

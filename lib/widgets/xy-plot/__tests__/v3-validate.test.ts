/**
 * xy_plot v3 — what `validate()` refuses, and why each refusal is the right
 * answer rather than a missing feature.
 *
 * Four groups, and they are different KINDS of refusal:
 *
 *   CLOSED FORM     a payload whose number cannot be computed exactly. The
 *                   widget declines rather than reporting something close.
 *   NOT A PICTURE   a combination of keys that would draw SOMETHING and mean
 *                   nothing — a family of piecewise curves, a tangent to a
 *                   dataset, a normal at a stationary point.
 *   NOT A FUNCTION  pieces that overlap, leave a gap, or fail to tile the
 *                   domain. The gap case is the dangerous one: it draws
 *                   cleanly and silently omits a stretch of the integral.
 *   FITS THE BOARD  a payload whose labels or numbers do not fit the smallest
 *                   board. CLAUDE.md §3: narrow the schema, never widen the
 *                   gate.
 */
import { xyPlot } from '..';
import { NAMED_SHAPE_IDS } from '../named-curves';

const good = xyPlot.defaults;
const patched = (patch: Record<string, unknown>) => ({ ...good, ...patch });
const errorsOf = (raw: unknown) => {
  const r = xyPlot.validate(raw);
  return r.ok ? [] : [...r.errors];
};

test('the v3 defaults are still the v1 payload, and still validate', () => {
  expect(xyPlot.validate(good).ok).toBe(true);
  expect(good.integrate_along).toBe('x');
  expect(good.pieces).toEqual([]);
  expect(good.tangent_kind).toBe('none');
  expect(good.family_values).toEqual([]);
  expect(good.named_shape).toBe('');
  expect(xyPlot.version).toBe(3);
});

test('never throws, on anything — including malformed v3 keys', () => {
  const junk: unknown[] = [
    undefined, null, 0, '', [], NaN,
    { mode: 42 }, { values: 'x' }, { curve2: {} },
    { ...good, pieces: 'nope' },
    { ...good, pieces: [null] },
    { ...good, pieces: [{ from: 'a', to: 'b' }] },
    { ...good, pieces: [{ from: 0, to: 1, curve: 'spiral' }] },
    { ...good, family_values: 'nope' },
    { ...good, family_values: [NaN] },
    { ...good, named_shape: 42 },
    { ...good, integrate_along: 'z' },
    { ...good, tangent_kind: 'asymptote' },
    { ...good, tangent_at: Infinity },
  ];
  for (const j of junk) expect(() => xyPlot.validate(j)).not.toThrow();
});

describe('the shading bounds must lie inside the plotted domain', () => {
  /*
   * THE DEFECT THIS CLOSES. v2 CLAMPED an out-of-range bound instead of
   * refusing it, so `shade_from: -2` on `x_min: -1` was ACCEPTED and quietly
   * shaded from −1. The readout was then right for the region drawn and wrong
   * for the region asked about, with nothing on the board saying so. A silent
   * correction of a payload is worse than a refusal: the refusal is visible
   * to the author, the correction is visible to nobody.
   */
  test('shade_from below x_min is refused, not clamped', () => {
    const r = xyPlot.validate(patched({ x_min: -1, x_max: 3, shade_from: -2, shade_to: 2 }));
    expect(r.ok).toBe(false);
    expect((r as { ok: false; errors: readonly string[] }).errors.join(' | '))
      .toMatch(/shade_from is -2, outside the plotted domain/);
  });

  test('shade_to above x_max is refused too', () => {
    expect(errorsOf(patched({ x_min: 0, x_max: 3, shade_from: 0, shade_to: 5 })).join(' | '))
      .toMatch(/shade_to is 5, outside the plotted domain/);
  });

  test('an OMITTED bound still means "all of it"', () => {
    // Only an explicit out-of-range value is refused; a payload that leaves
    // the bounds out is asking for the whole domain and gets it.
    const r = xyPlot.validate({
      mode: 'area', curve: 'parabola', a: 1, b: 0, c: 0, x_min: 0, x_max: 3,
    });
    expect(r.ok).toBe(true);
    const p = (r as { ok: true; params: typeof good }).params;
    expect(p.shade_from).toBe(0);
    expect(p.shade_to).toBe(3);
  });

  test('a bound exactly ON the domain edge is legal', () => {
    // The commonest payload in the corpus. If the tolerance were wrong in the
    // other direction this would break every existing `area` diagram.
    expect(errorsOf(patched({ x_min: 0, x_max: 3, shade_from: 0, shade_to: 3 }))).toEqual([]);
  });

  test('a zero-width shaded interval is still legal — it is where a sweep starts', () => {
    // use-cue-track.ts validates the MERGED params of every cue patch, so a
    // rule here constrains the animation states a narration may pass through.
    // This is the state a sweep-from-nothing cue begins at.
    expect(errorsOf(patched({ shade_from: 1, shade_to: 1 }))).toEqual([]);
  });
});

describe('pieces must tile the domain, exactly once', () => {
  const withPieces = (pieces: unknown, extra: Record<string, unknown> = {}) =>
    patched({ mode: 'curve', x_min: 0, x_max: 2, pieces, ...extra });

  test('overlapping pieces are refused — f would be two-valued', () => {
    expect(errorsOf(withPieces([
      { from: 0, to: 1.5, curve: 'line', a: 1, b: 0, c: 0 },
      { from: 1, to: 2, curve: 'line', a: 1, b: 0, c: 0 },
    ])).join(' | ')).toMatch(/pieces overlap/);
  });

  test('a gap between pieces is refused — the area would silently skip it', () => {
    expect(errorsOf(withPieces([
      { from: 0, to: 0.8, curve: 'line', a: 1, b: 0, c: 0 },
      { from: 1.2, to: 2, curve: 'line', a: 1, b: 0, c: 0 },
    ])).join(' | ')).toMatch(/not contiguous/);
  });

  test('pieces that are contiguous but do not reach the domain edges are refused', () => {
    expect(errorsOf(withPieces([
      { from: 0.5, to: 1, curve: 'line', a: 1, b: 0, c: 0 },
      { from: 1, to: 1.5, curve: 'line', a: 1, b: 0, c: 0 },
    ])).join(' | ')).toMatch(/must tile it exactly/);
  });

  test('a piece with no width is refused', () => {
    expect(errorsOf(withPieces([
      { from: 0, to: 1, curve: 'line', a: 1, b: 0, c: 0 },
      { from: 1, to: 1, curve: 'line', a: 1, b: 0, c: 0 },
      { from: 1, to: 2, curve: 'line', a: 1, b: 0, c: 0 },
    ])).join(' | ')).toMatch(/not greater than from/);
  });

  test('pieces given OUT OF ORDER are accepted and sorted', () => {
    // A model listing the right-hand piece first is describing the same
    // function. Order is not information here, so it is not an error.
    const r = xyPlot.validate(withPieces([
      { from: 1, to: 2, curve: 'line', a: 1, b: 0, c: -1 },
      { from: 0, to: 1, curve: 'line', a: -1, b: 0, c: 1 },
    ]));
    expect(r.ok).toBe(true);
    const p = (r as { ok: true; params: typeof good }).params;
    expect(p.pieces.map((x) => x.from)).toEqual([0, 1]);
  });

  test('more than six pieces is refused, and the message names the cap', () => {
    const many = Array.from({ length: 7 }, (_, i) => ({
      from: i / 3.5, to: (i + 1) / 3.5, curve: 'line', a: 0, b: 0, c: i,
    }));
    expect(errorsOf(patched({ mode: 'curve', x_min: 0, x_max: 2, pieces: many })).join(' | '))
      .toMatch(/entries and the cap is 6/);
  });

  test('a piece narrower than 8pt at 343x236 is refused', () => {
    // The count cap does not express this: three pieces are legal, but one of
    // them 0.5% of a wide domain is a kink, not a piece.
    expect(errorsOf(patched({
      mode: 'curve', x_min: 0, x_max: 100,
      pieces: [
        { from: 0, to: 50, curve: 'line', a: 0, b: 0, c: 0 },
        { from: 50, to: 51, curve: 'line', a: 0, b: 0, c: 1 },
        { from: 51, to: 100, curve: 'line', a: 0, b: 0, c: 2 },
      ],
    })).join(' | ')).toMatch(/under the 8pt floor/);
  });

  test('a DISCONTINUITY at a breakpoint is legal — a step function is a real figure', () => {
    // Refusing this would be refusing the greatest-integer function, which is
    // one of the shapes `pieces` was added for. What is refused is AMBIGUITY
    // (two pieces claiming one u), not a jump.
    expect(errorsOf(patched({
      mode: 'curve', x_min: 0, x_max: 4,
      pieces: [
        { from: 0, to: 1, curve: 'line', a: 0, b: 0, c: 0 },
        { from: 1, to: 2, curve: 'line', a: 0, b: 0, c: 1 },
        { from: 2, to: 3, curve: 'line', a: 0, b: 0, c: 2 },
        { from: 3, to: 4, curve: 'line', a: 0, b: 0, c: 3 },
      ],
    }))).toEqual([]);
  });

  test('area_between refuses a piece whose crossings have no closed form, and names it', () => {
    expect(errorsOf(patched({
      mode: 'area_between', x_min: 0, x_max: 2,
      pieces: [
        { from: 0, to: 1, curve: 'line', a: 1, b: 0, c: 0 },
        { from: 1, to: 2, curve: 'sine', a: 1, b: 1, c: 0 },
      ],
      curve2: 'line', a2: 0, b2: 0, c2: 0,
    })).join(' | ')).toMatch(/pieces\[1\] is a sine/);
  });
});

describe('combinations that are not pictures', () => {
  test.each([
    [
      'a family of piecewise curves',
      patched({
        mode: 'family', x_min: 0, x_max: 2, family_values: [1, 2],
        pieces: [
          { from: 0, to: 1, curve: 'line', a: 1, b: 0, c: 0 },
          { from: 1, to: 2, curve: 'line', a: 1, b: 0, c: 0 },
        ],
      }),
      /family and pieces cannot be combined/,
    ],
    [
      'a family of one',
      patched({ mode: 'family', family_values: [1] }),
      /one value is not a family/,
    ],
    [
      'a family of six',
      patched({ mode: 'family', family_values: [1, 2, 3, 4, 5, 6] }),
      /the cap is 5/,
    ],
    [
      'family_values outside family mode',
      patched({ mode: 'curve', family_values: [1, 2] }),
      /only meaningful in family mode/,
    ],
    [
      'a tangent to a dataset',
      patched({ mode: 'data', values: [1, 2, 3], tangent_kind: 'tangent' }),
      /nothing to take a tangent to/,
    ],
    [
      'pieces on a dataset',
      patched({
        mode: 'data', values: [1, 2, 3],
        pieces: [{ from: 0, to: 5, curve: 'line', a: 1, b: 0, c: 0 }],
      }),
      /plots a sample, not a function/,
    ],
    [
      'a tangent to a printed shape',
      patched({ mode: 'named', named_shape: 'stress_strain', tangent_kind: 'tangent' }),
      /carries no formula to differentiate/,
    ],
    [
      'pieces overriding a printed shape',
      patched({
        mode: 'named', named_shape: 'heating',
        pieces: [{ from: 0, to: 1, curve: 'line', a: 1, b: 0, c: 0 }],
      }),
      /drawn as printed and cannot be overridden/,
    ],
    [
      'a shape nobody has drawn',
      patched({ mode: 'named', named_shape: 'phase_diagram' }),
      /named_shape must be one of/,
    ],
    [
      'an unknown integration axis',
      patched({ integrate_along: 'z' }),
      /integrate_along must be one of/,
    ],
    [
      'an unknown tangent kind',
      patched({ tangent_kind: 'asymptote' }),
      /tangent_kind must be one of/,
    ],
    [
      'a non-finite tangent_at',
      patched({ tangent_kind: 'tangent', tangent_at: Infinity }),
      /tangent_at must be a finite number/,
    ],
  ])('rejects %s', (_name, payload, pattern) => {
    const r = xyPlot.validate(payload);
    expect(r.ok).toBe(false);
    expect((r as { ok: false; errors: readonly string[] }).errors.join(' | ')).toMatch(pattern);
  });
});

describe('a tangent needs a derivative that exists and a slope that is a number', () => {
  test('the NORMAL at a stationary point is refused — it is vertical', () => {
    // y = x² at x = 0. The picture would be fine (a vertical line draws
    // correctly); the readout would say "normal slope —" under a drawn line,
    // which reads as a rendering failure rather than as geometry.
    expect(errorsOf(patched({
      mode: 'curve', curve: 'parabola', a: 1, b: 0, c: 0,
      x_min: -2, x_max: 2, tangent_kind: 'normal', tangent_at: 0,
    })).join(' | ')).toMatch(/the curve is stationary there/);
  });

  test('the TANGENT at the same point is legal — it is horizontal, slope 0', () => {
    // gap_extrema_curve. This is the case the whole feature was added for, so
    // the refusal above must not swallow it.
    expect(errorsOf(patched({
      mode: 'curve', curve: 'parabola', a: 1, b: 0, c: 0,
      x_min: -2, x_max: 2, tangent_kind: 'tangent', tangent_at: 0,
    }))).toEqual([]);
  });

  test('a tangent AT a breakpoint is refused — the two pieces disagree', () => {
    // The corner of |x|, which is the single most likely place for a model to
    // ask for a tangent and the one place there is not one.
    expect(errorsOf(patched({
      mode: 'curve', x_min: -1, x_max: 1,
      pieces: [
        { from: -1, to: 0, curve: 'line', a: -1, b: 0, c: 0 },
        { from: 0, to: 1, curve: 'line', a: 1, b: 0, c: 0 },
      ],
      shade_from: -1, shade_to: 1,
      tangent_kind: 'tangent', tangent_at: 0,
    })).join(' | ')).toMatch(/sits on the breakpoint/);
  });

  test('a tangent INSIDE a piece is legal', () => {
    expect(errorsOf(patched({
      mode: 'curve', x_min: -1, x_max: 1,
      pieces: [
        { from: -1, to: 0, curve: 'line', a: -1, b: 0, c: 0 },
        { from: 0, to: 1, curve: 'line', a: 1, b: 0, c: 0 },
      ],
      shade_from: -1, shade_to: 1,
      tangent_kind: 'tangent', tangent_at: 0.5,
    }))).toEqual([]);
  });

  test('the domain ENDS are not treated as breakpoints', () => {
    // Every piecewise payload has its outermost edges at x_min and x_max, and
    // a tangent at the edge of the domain is perfectly well defined — only an
    // INTERIOR breakpoint has two slopes.
    expect(errorsOf(patched({
      mode: 'curve', x_min: -1, x_max: 1,
      pieces: [
        { from: -1, to: 0, curve: 'line', a: -1, b: 0, c: 0 },
        { from: 0, to: 1, curve: 'line', a: 1, b: 0, c: 0 },
      ],
      shade_from: -1, shade_to: 1,
      tangent_kind: 'tangent', tangent_at: -1,
    }))).toEqual([]);
  });
});

describe('the readout still has to fit the smallest board', () => {
  test("a family whose VALUES overrun the board is refused", () => {
    // Five values at the coefficient clamp: "a = -100, -100, -100, -100, -100"
    // is 32 code units, 259.8pt — and the whole readout must also carry the
    // axis names. The values alone are what is measured.
    const r = xyPlot.validate(patched({
      mode: 'family', curve: 'parabola', x_min: -0.4, x_max: 0.4,
      family_param: 'a', family_values: [-99.99, -88.88, -77.77, -66.66, -55.55],
    }));
    expect(r.ok).toBe(false);
    expect((r as { ok: false; errors: readonly string[] }).errors.join(' | '))
      .toMatch(/too wide to show without truncating/);
  });

  test('a Hinglish axis label is NOT refused — the caption tapers, the numbers do not', () => {
    /*
     * THE CASE THAT ACTUALLY SHIPS. Hinglish is the DEFAULT language and says
     * everything in more characters than English. The first version of the
     * readout check measured caption + value and refused this outright, in
     * English as well — which would have pushed every honestly-labelled
     * `family` diagram to a tier-3 SVG. chrome.fitReadout exists for exactly
     * this: the caption gives up characters one at a time to an ellipsis and
     * the value never loses a term.
     */
    expect(errorsOf(patched({
      mode: 'family', curve: 'parabola', a: 1, b: 0, c: 0,
      x_min: -2, x_max: 2, family_param: 'a', family_values: [0.5, 1, 2],
      x_label: 'sthiti x, metre mein', y_label: 'urja U',
    }))).toEqual([]);
  });

  test('every named shape fits the smallest board, callouts included', () => {
    // The shapes are fixed data, so this can only fail at build time — which
    // is the point. It fails on the day a tenth shape is added with two
    // callouts on top of each other, not on the day a lesson selects it.
    for (const id of NAMED_SHAPE_IDS) {
      expect(errorsOf(patched({ mode: 'named', named_shape: id }))).toEqual([]);
    }
  });

  test('a named shape owns its domain and its default axis names', () => {
    const r = xyPlot.validate(patched({
      mode: 'named', named_shape: 'titration', x_min: 5, x_max: 6,
    }));
    expect(r.ok).toBe(true);
    const p = (r as { ok: true; params: typeof good }).params;
    // The payload's domain is overwritten: half a titration curve is not a
    // titration curve.
    expect(p.x_min).toBe(0);
    expect(p.x_max).toBe(50);
    expect(p.x_label).toBe('NaOH added (mL)');
    expect(p.y_label).toBe('pH');
  });

  test('a named shape still accepts payload axis names, so Hinglish can reach it', () => {
    const r = xyPlot.validate(patched({
      mode: 'named', named_shape: 'titration',
      x_label: 'NaOH daala gaya (mL)', y_label: 'pH',
    }));
    expect(r.ok).toBe(true);
    expect((r as { ok: true; params: typeof good }).params.x_label).toBe('NaOH daala gaya (mL)');
  });
});

describe('v1 and v2 payloads still validate unchanged', () => {
  test('a v1 payload takes every v3 default', () => {
    const r = xyPlot.validate({
      mode: 'area', curve: 'parabola', a: 1, b: 0, c: 0,
      x_min: 0, x_max: 3, shade_from: 0, shade_to: 2,
      values: [], x_label: 'x', y_label: 'y',
    });
    expect(r.ok).toBe(true);
    const p = (r as { ok: true; params: typeof good }).params;
    expect(p.integrate_along).toBe('x');
    expect(p.pieces).toEqual([]);
    expect(p.tangent_kind).toBe('none');
    expect(p.family_values).toEqual([]);
    expect(p.named_shape).toBe('');
    expect(p.curve2).toBe('line');
  });

  test('the v2 refusals are all still refusals', () => {
    for (const [payload, pattern] of [
      [patched({ mode: 'area_between', curve: 'sine', b: 1 }), /no closed form/],
      [patched({ mode: 'area_between', curve: 'line', a: 2, c: 1, curve2: 'line', a2: 2, c2: 1 }), /the same curve/],
      [patched({ a: 100, x_min: 0, x_max: 1000, shade_to: 1000 }), /hang off the left edge/],
      [patched({ x_min: 0, x_max: 0.02, shade_to: 0.02 }), /fewer than two gridlines/],
      [patched({ mode: 'data', values: [100000, 250000, 400000] }), /hang off the left edge/],
      [patched({ curve: 'reciprocal', x_min: -2, x_max: 2, shade_to: 2 }), /cannot span x = 0/],
    ] as [Record<string, unknown>, RegExp][]) {
      expect(errorsOf(payload).join(' | ')).toMatch(pattern);
    }
  });
});

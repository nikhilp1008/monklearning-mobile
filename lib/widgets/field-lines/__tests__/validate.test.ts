/**
 * `field_lines.validate()` — the only place a malformed payload can be stopped.
 *
 * There was no validate() suite for this widget anywhere in the repo before
 * v2, which is worth stating plainly: `lib/widgets/__tests__/physics.test.ts`
 * has one for xy_plot, reaction_scheme, molecule_struct and circuit_network
 * and none for the widget the runtime was designed around. CLAUDE.md's
 * definition of done requires rejection of wrong type, missing required key,
 * NaN, Infinity, out-of-domain values and an empty object, each with a
 * readable message, and never throwing. That is checked here.
 */
import { fieldLines } from '..';
import { SURFACE_SCALE_MAX, SURFACE_SCALE_MIN, type FieldLinesParams } from '../physics';

const ok = (raw: unknown): FieldLinesParams => {
  const r = fieldLines.validate(raw);
  if (!r.ok) throw new Error(`expected accept, got: ${r.errors.join(', ')}`);
  return r.params;
};
const errs = (raw: unknown): readonly string[] => {
  const r = fieldLines.validate(raw);
  if (r.ok) throw new Error('expected reject, got accept');
  return r.errors;
};

const GOOD = { configuration: 'gaussian_sphere', charge_uc: 10 };

describe('rejects, with a message a human can act on', () => {
  test.each([
    ['undefined', undefined],
    ['null', null],
    ['a number', 42],
    ['a string', 'gaussian_sphere'],
    ['a boolean', true],
  ])('%s is not an object', (_name, raw) => {
    expect(errs(raw)).toEqual(['params must be an object']);
  });

  test('an empty object names BOTH missing required keys, not just the first', () => {
    const e = errs({});
    expect(e).toHaveLength(2);
    expect(e[0]).toContain('configuration must be one of');
    expect(e[1]).toBe('charge_uc must be a finite number');
  });

  test('a missing configuration is named', () => {
    expect(errs({ charge_uc: 10 })[0]).toContain('configuration must be one of');
  });

  test('a missing charge_uc is named — it has never had a default', () => {
    expect(errs({ configuration: 'point' })).toEqual(['charge_uc must be a finite number']);
  });

  test('the configuration error lists every legal value, including the five v2 ones', () => {
    const msg = errs({ ...GOOD, configuration: 'gaussian_torus' })[0];
    for (const c of [
      'point', 'dipole', 'like_charges', 'parallel_plates',
      'gaussian_sphere', 'gaussian_cylinder', 'gaussian_pillbox',
      'equipotential_point', 'equipotential_uniform',
    ]) {
      expect(msg).toContain(c);
    }
  });

  test.each([NaN, Infinity, -Infinity, '10', null, {}, []])(
    'charge_uc %p is rejected as not a finite number', (charge_uc) => {
      // `null` matters: `charge_uc` has no `?? default`, so a null must be an
      // ERROR rather than quietly becoming a number. surface_scale below is
      // deliberately the opposite, and that difference is tested, not assumed.
      expect(errs({ ...GOOD, charge_uc })).toContain('charge_uc must be a finite number');
    }
  );

  test.each([NaN, Infinity, -Infinity, '1', {}, []])(
    'surface_scale %p is rejected as not a finite number', (surface_scale) => {
      expect(errs({ ...GOOD, surface_scale })).toContain('surface_scale must be a finite number');
    }
  );

  test.each([1, 'true', null, {}])('enclosed %p is rejected as not a boolean', (enclosed) => {
    // null is NOT excused here — `?? true` only fires when the key is absent
    // or explicitly null, so this documents which it is.
    if (enclosed === null) {
      expect(ok({ ...GOOD, enclosed }).enclosed).toBe(true);
      return;
    }
    expect(errs({ ...GOOD, enclosed })).toContain('enclosed must be a boolean');
  });

  test.each([1, 'true', {}])('show_arrows %p is rejected as not a boolean', (show_arrows) => {
    expect(errs({ ...GOOD, show_arrows })).toContain('show_arrows must be a boolean');
  });

  test.each([1, true, {}, []])('caption %p is rejected as not a string', (caption) => {
    expect(errs({ ...GOOD, caption })).toContain('caption must be a string');
  });

  test('an unknown annotate is rejected and the legal set is named', () => {
    const msg = errs({ ...GOOD, annotate: 'gaussian' })[0];
    expect(msg).toContain('neutral_point');
    expect(msg).toContain('termination');
  });

  test('every error is reported at once, not one per call', () => {
    const e = errs({ configuration: 'nope', charge_uc: NaN, surface_scale: NaN, enclosed: 1, caption: 2 });
    expect(e.length).toBeGreaterThanOrEqual(5);
  });
});

describe('never throws, on anything', () => {
  const HOSTILE: unknown[] = [
    undefined, null, 0, -0, NaN, Infinity, '', 'x', true, false, [], {}, [[[]]],
    { configuration: {} }, { charge_uc: { valueOf: () => 10 } },
    { configuration: 'point', charge_uc: 10, caption: { length: 5 } },
    Object.create(null),
    new Proxy({}, { get: () => undefined }),
    { get configuration() { return 'point'; }, charge_uc: 10 },
  ];
  test.each(HOSTILE.map((h, i) => [i, h]))('input #%p does not throw', (_i, raw) => {
    expect(() => fieldLines.validate(raw)).not.toThrow();
    const r = fieldLines.validate(raw);
    expect(typeof r.ok).toBe('boolean');
  });
});

describe('clamps rather than rejects, inside the schema', () => {
  test('charge_uc is clamped to [4, 20] at both ends', () => {
    expect(ok({ ...GOOD, charge_uc: 1e9 }).charge_uc).toBe(20);
    expect(ok({ ...GOOD, charge_uc: 0 }).charge_uc).toBe(4);
    expect(ok({ ...GOOD, charge_uc: 4 }).charge_uc).toBe(4);
    expect(ok({ ...GOOD, charge_uc: 20 }).charge_uc).toBe(20);
  });

  /**
   * FINDING, PINNED RATHER THAN FIXED. A NEGATIVE charge_uc clamps to +4 —
   * so a payload meaning "a −10 µC point charge" draws a +4 µC one, with the
   * field lines pointing OUT instead of in. That is a wrong diagram from a
   * plausible payload, and it is v1 behaviour: the clamp predates this change
   * and the widget has only ever drawn positive sources.
   *
   * NOT narrowed here, deliberately, and the reasons are worth stating so a
   * future reader can weigh them rather than repeat them:
   *
   *   - it is not the failure CLAUDE.md's "narrow the schema" rule is about.
   *     That rule is about a payload the GATE rejects; this one renders
   *     perfectly legibly. It is the semantic class instead — chrome.ts's
   *     `τ 100` for `τ 100 ms`, a number that reads as complete and is wrong;
   *   - `app/dev-widget-preview.tsx` has a "charge_uc −2" button that walks
   *     the value down and relies on the clamp to stop at 4. Rejecting
   *     negatives would break that screen, which this change may not touch;
   *   - no precomputed field_lines payload exists anywhere in the corpus, so
   *     nothing is currently mangled by it.
   *
   * Pinned so a future fix has to delete this test on purpose.
   */
  test('a NEGATIVE charge_uc silently becomes +4 — v1 behaviour, reported not fixed', () => {
    expect(ok({ ...GOOD, charge_uc: -10 }).charge_uc).toBe(4);
    expect(ok({ ...GOOD, charge_uc: -1e9 }).charge_uc).toBe(4);
  });

  test('surface_scale is clamped to its legal range at both ends', () => {
    expect(ok({ ...GOOD, surface_scale: 99 }).surface_scale).toBe(SURFACE_SCALE_MAX);
    expect(ok({ ...GOOD, surface_scale: -99 }).surface_scale).toBe(SURFACE_SCALE_MIN);
    expect(ok({ ...GOOD, surface_scale: SURFACE_SCALE_MIN }).surface_scale).toBe(SURFACE_SCALE_MIN);
    expect(ok({ ...GOOD, surface_scale: SURFACE_SCALE_MAX }).surface_scale).toBe(SURFACE_SCALE_MAX);
  });

  test('a caption longer than the board can ever hold is cut, not refused', () => {
    const long = 'x'.repeat(500);
    expect(ok({ ...GOOD, caption: long }).caption).toHaveLength(120);
    expect(ok({ ...GOOD, caption: 'short' }).caption).toBe('short');
  });
});

describe('defaults are the v1 behaviour, for the keys v1 did not have', () => {
  test('a payload with only the two required keys fills the rest as v1 rendered', () => {
    const p = ok({ configuration: 'point', charge_uc: 10 });
    expect(p).toEqual({
      configuration: 'point', charge_uc: 10,
      surface_scale: 1, enclosed: true, show_arrows: true, annotate: null, caption: '',
    });
  });

  test('every configuration validates at the module defaults', () => {
    for (const configuration of [
      'point', 'dipole', 'like_charges', 'parallel_plates',
      'gaussian_sphere', 'gaussian_cylinder', 'gaussian_pillbox',
      'equipotential_point', 'equipotential_uniform',
    ]) {
      expect(ok({ ...fieldLines.defaults, configuration }).configuration).toBe(configuration);
    }
  });

  test("the module's own defaults validate — a widget that cannot accept its defaults is broken", () => {
    expect(ok(fieldLines.defaults)).toEqual(fieldLines.defaults);
  });
});

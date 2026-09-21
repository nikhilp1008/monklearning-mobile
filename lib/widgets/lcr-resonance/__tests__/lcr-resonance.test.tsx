/** `lcr_resonance@1` through the gate `conic_plot` went through. */
import { lcrResonance, validate, VIEWS } from '../index';
import { omega0 } from '../physics';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';

const GATE_FRAMES = [[340, 340], [343, 236], [495, 270], [702, 289], [900, 430]] as const;
const good = { ...lcrResonance.defaults };

describe('it refuses a window that excludes resonance', () => {
  test('entirely below f0', () => {
    const r = validate({ ...good, w_min_rel: 0.2, w_max_rel: 0.8 });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/does not contain resonance/);
  });

  test('entirely above f0', () => {
    const r = validate({ ...good, w_min_rel: 1.2, w_max_rel: 3 });
    expect(r.ok).toBe(false);
  });

  test('a window expressed in MULTIPLES of w0 cannot exclude it by accident', () => {
    // This is why the window is relative: the check needs no knowledge of L
    // and C, so it holds for every circuit the widget will ever be given.
    for (const [L, C] of [[5, 80e-6], [2, 32e-6], [1e-3, 1e-9]]) {
      expect(validate({ ...good, l_henry: L, c_farad: C }).ok).toBe(true);
    }
  });
});

describe('it refuses what a series LCR cannot have', () => {
  test.each(['r_ohm', 'l_henry', 'c_farad', 'source_v'])('a negative %s', (k) => {
    const r = validate({ ...good, [k]: -1 });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/must be positive/);
  });

  test('w_min_rel of zero — X_C has a pole there', () => {
    const r = validate({ ...good, w_min_rel: 0 });
    expect(r.ok).toBe(false);
  });

  test('a probe outside the plotted window', () => {
    const r = validate({ ...good, probe_rel: 5 });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/outside the plotted window/);
  });

  test('an unknown view', () => {
    const r = validate({ ...good, view: 'everything' });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/one quantity per board/);
  });

  test('an empty object still validates to the defaults, and never throws', () => {
    expect(validate({}).ok).toBe(true);
    for (const bad of [null, 'x', 42, [], undefined]) {
      expect(validate(bad).ok).toBe(false);
    }
  });
});

describe('it renders every view at every gate frame', () => {
  const cases = VIEWS.flatMap((v) => GATE_FRAMES.map((f) => [v, f[0], f[1]] as const));
  test.each(cases)('%s at %ix%i', (view, w, h) => {
    const r = validate({ ...good, view });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    const tree = renderWidgetTreeAt(lcrResonance, r.params, {}, w, h);
    const json = JSON.stringify(tree);
    expect(json).not.toContain('NaN');
    expect(json).toContain('f0');          // resonance is always marked
    expect(json).toContain('"d":"M');      // and something was actually drawn
  });
});

describe('the derived values are the ones the objectives ask for', () => {
  test('f0, Q and bandwidth match the physics', () => {
    const d = lcrResonance.computeDerived(good);
    expect(d.f0).toBeCloseTo(omega0(5, 80e-6) / (2 * Math.PI), 6);
    expect(d.q).toBeCloseTo(6.25, 6);
    expect(d.bandwidth).toBeCloseTo(8, 6);          // R/L = 40/5
    expect(d.peakCurrent).toBeCloseTo(5.75, 6);     // V/R at resonance
    expect(d.zAtResonance).toBe(40);
  });

  test('declared derived keys and computeDerived agree', () => {
    expect(Object.keys(lcrResonance.computeDerived(good)).sort())
      .toEqual([...lcrResonance.derived].sort());
  });
});

describe('the params/motion split', () => {
  test('L and C are NOT animatable — moving either moves w0 itself', () => {
    expect(lcrResonance.animatable).toEqual(['r_ohm', 'probe_rel']);
    expect(lcrResonance.animatable).not.toContain('l_henry');
    expect(lcrResonance.animatable).not.toContain('c_farad');
    expect(lcrResonance.animatable.length).toBeLessThanOrEqual(4);
  });

  test('the f0 marker does not move when R does', () => {
    // R sharpens the peak; the axis and the marker must hold still, or two
    // dampings stop being comparable — which is the whole point of the board.
    const r = validate(good);
    if (!r.ok) throw new Error('fixture invalid');
    const a = JSON.stringify(renderWidgetTreeAt(lcrResonance, r.params, { r_ohm: 10 }, 343, 236));
    const b = JSON.stringify(renderWidgetTreeAt(lcrResonance, r.params, { r_ohm: 400 }, 343, 236));
    const lines = (s: string) => (s.match(/"RNSVGLine"[^}]*}/g) || []).join('|');
    expect(lines(a)).toBe(lines(b));
    expect(a).not.toBe(b);                 // the CURVE did move
  });
});

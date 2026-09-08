/**
 * Proves the three checks in ../alignment-lint actually catch what
 * docs/narration-diagram-alignment.md and docs/cue-timing.md describe.
 * Synthetic cues, not real content — there is no precomputed corpus yet
 * (migration 0021 is unrun) — but the LOGIC is real and runs against a real
 * widget module (projectile_motion), not a mock of one.
 */
import { REGISTRY } from '../registry';
import type { Cue } from '../types';
import { lintCaptionTokens, lintCueDirection, lintCueIntegrity } from '../alignment-lint';

const mod = REGISTRY.projectile_motion!;
const basePar = mod.defaults; // launch_angle_deg: 45

describe('lintCaptionTokens — Rule 2', () => {
  test('a known token interpolates with no error', () => {
    const result = lintCaptionTokens('At 45 degrees the range is {{range}} metres.', mod, basePar);
    expect(result.errors).toEqual([]);
  });

  test('an unknown token is an ERROR', () => {
    const result = lintCaptionTokens('The {{banana}} is large.', mod, basePar);
    expect(result.errors.length).toBeGreaterThan(0);
    expect(result.errors[0]).toMatch(/unknown token \{\{banana\}\}/);
  });

  test('a hardcoded number close to a real derived value is a WARNING', () => {
    // range at defaults (45deg, 22 m/s, earth) is 49.34 — verified in physics.test.ts.
    const result = lintCaptionTokens('At 45 degrees the range is 49.3 metres.', mod, basePar);
    expect(result.errors).toEqual([]);
    expect(result.warnings.length).toBeGreaterThan(0);
  });

  test('an unrelated number does not warn', () => {
    const result = lintCaptionTokens('This is the third checkpoint question.', mod, basePar);
    expect(result.warnings).toEqual([]);
  });
});

describe('lintCueDirection — Rule 3', () => {
  test('"the range grows" is correct when the patch actually increases it — no error', () => {
    // 45deg is the range-maximising angle for this speed/gravity, so patching
    // DOWN to 30deg and calling it "grows" would be the interesting failure
    // case; patching further from optimal in a way that increases range at
    // this starting point: use a base far from optimal so a step toward 45
    // genuinely grows it.
    const shallowBase = { ...basePar, launch_angle_deg: 20 };
    const cue: Cue = { seq: 5, patch: { launch_angle_deg: 45 }, caption: 'watch the range grow' };
    const result = lintCueDirection(cue, mod, shallowBase);
    expect(result.errors).toEqual([]);
  });

  test('the sign-error case: caption says grows, patch shrinks it — FAILS (this is the doc’s own example)', () => {
    // docs/narration-diagram-alignment.md's own example: 45deg -> 65deg, range falls.
    const cue: Cue = {
      seq: 5,
      patch: { launch_angle_deg: 65 },
      caption: 'as I raise the angle past 45, the range grows',
    };
    const result = lintCueDirection(cue, mod, basePar);
    expect(result.errors.length).toBeGreaterThan(0);
    expect(result.errors[0]).toMatch(/increases, but range went/);
  });

  test('"stays the same" when it does not move by more than 1% — FAILS', () => {
    const cue: Cue = {
      seq: 5,
      patch: { launch_angle_deg: 65 },
      caption: 'the range stays the same',
    };
    const result = lintCueDirection(cue, mod, basePar);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  test('a direction word with no recognisable quantity is a visible WARNING, never a silent pass', () => {
    const cue: Cue = {
      seq: 5,
      patch: { launch_angle_deg: 65 },
      // "rise" is a genuine direction word (INCREASE_WORDS) that appears in
      // NO widget's derivedAliases — deliberately, to exercise the miss.
      caption: 'watch the ball start to rise',
    };
    const result = lintCueDirection(cue, mod, basePar);
    expect(result.errors).toEqual([]);
    expect(result.warnings.length).toBeGreaterThan(0);
    expect(result.warnings[0]).toContain(cue.caption);
  });

  test('no direction word at all — nothing to check, no error, no warning', () => {
    const cue: Cue = { seq: 5, patch: { launch_angle_deg: 65 }, caption: 'here is the new trajectory' };
    const result = lintCueDirection(cue, mod, basePar);
    expect(result.errors).toEqual([]);
    expect(result.warnings).toEqual([]);
  });

  test('an invalid patch is reported as an error, not silently skipped', () => {
    const cue: Cue = { seq: 5, patch: { launch_angle_deg: 400 }, caption: 'the range grows' };
    // 400 is out of validate()'s domain in the sense that it gets clamped, not
    // rejected (validate() clamps in-range values) — use a genuinely invalid
    // shape instead to exercise the rejected path.
    const invalidCue: Cue = { seq: 5, patch: { launch_angle_deg: 'not a number' }, caption: 'the range grows' };
    void cue;
    const result = lintCueDirection(invalidCue, mod, basePar);
    expect(result.errors.length).toBeGreaterThan(0);
    expect(result.errors[0]).toMatch(/cue patch is invalid/);
  });
});

describe('lintCueIntegrity', () => {
  const turnSeqs = new Set([1, 2, 3, 4, 5]);

  test('a cue naming a seq in this turn, with a valid patch — no errors', () => {
    const cues: Cue[] = [{ seq: 3, patch: { launch_angle_deg: 60 } }];
    expect(lintCueIntegrity(cues, mod, basePar, turnSeqs)).toEqual([]);
  });

  test('a cue naming a seq absent from this turn — error', () => {
    const cues: Cue[] = [{ seq: 99, patch: { launch_angle_deg: 60 } }];
    const errors = lintCueIntegrity(cues, mod, basePar, turnSeqs);
    expect(errors.some((e) => e.includes('seq=99') && e.includes('does not name a board event'))).toBe(true);
  });

  test('a cue whose patch validate() rejects — error', () => {
    const cues: Cue[] = [{ seq: 3, patch: { launch_angle_deg: 'not a number' } }];
    const errors = lintCueIntegrity(cues, mod, basePar, turnSeqs);
    expect(errors.some((e) => e.includes('patch rejected by validate()'))).toBe(true);
  });

  test('a widget declaring more than 4 animatable params — error', () => {
    // Only `animatable`'s length is read by lintCueIntegrity — cast rather
    // than fight `keyof ProjectileParams` for a value this test never uses
    // as a real key.
    const tooMany = {
      ...mod,
      animatable: ['a', 'b', 'c', 'd', 'e'] as unknown as typeof mod.animatable,
    };
    const errors = lintCueIntegrity([], tooMany, basePar, turnSeqs);
    expect(errors.some((e) => e.includes('pool holds 4'))).toBe(true);
  });
});

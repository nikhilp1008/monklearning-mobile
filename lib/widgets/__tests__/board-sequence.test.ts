/**
 * G1 — the two boards the hand review said could not be drawn, drawn.
 *
 * Both fixtures below are real published boards that scored `n` on
 * 2026-09-19 for the same reason: the objective named two things and the
 * widget draws one configuration per payload.
 */
import { MAX_STEPS, readSequence, stepAt } from '../board-sequence';
import { gateSequence, validateSequence } from '../board-sequence-validate';

const clemmensen = {
  widget: 'reaction_scheme', version: 1,
  params: {
    caption: 'Clemmensen: acidic route', species: ['R2C=O', 'R2CH2'],
    step_from: [0], step_to: [1], step_kind: ['plain'],
    step_reagent: ['Zn-Hg / HCl'], step_progress: 1, highlight_step: 0,
  },
};
const wolffKishner = {
  widget: 'reaction_scheme', version: 1,
  params: {
    caption: 'Wolff-Kishner: basic route', species: ['R2C=O', 'R2CH2'],
    step_from: [0], step_to: [1], step_kind: ['plain'],
    step_reagent: ['H2N-NH2, KOH'], step_progress: 1, highlight_step: 0,
  },
};
const gaussInside = {
  widget: 'field_lines', version: 1,
  params: { configuration: 'gaussian_sphere', enclosed: false,
            charge_uc: 8, show_arrows: true, annotate: 'termination' },
};
const gaussOutside = {
  widget: 'field_lines', version: 1,
  params: { configuration: 'gaussian_sphere', enclosed: true,
            charge_uc: 8, show_arrows: true, annotate: 'termination' },
};

const seq = (steps: unknown[]) => ({ kind: 'board_sequence', steps });

describe('the two-step reaction_scheme — "choose between Clemmensen and Wolff-Kishner"', () => {
  const s = seq([
    { payload: clemmensen, caption: 'Clemmensen — acid-stable substrates' },
    { payload: wolffKishner, caption: 'Wolff-Kishner — base-stable substrates', seq: 4 },
  ]);

  test('validates, and both steps survive', () => {
    const v = validateSequence(s);
    expect(v.ok).toBe(true);
    expect(v.steps).toHaveLength(2);
    expect(v.dropped).toEqual([]);
  });

  test('the publish gate accepts it', () => {
    expect(gateSequence(s).ok).toBe(true);
  });

  test('step 0 shows before its sentence, step 1 after', () => {
    const v = validateSequence(s);
    expect(stepAt(v.steps, null)).toBe(0);   // a host with no reveal clock
    expect(stepAt(v.steps, 0)).toBe(0);
    expect(stepAt(v.steps, 3)).toBe(0);
    expect(stepAt(v.steps, 4)).toBe(1);      // its sentence is spoken
    expect(stepAt(v.steps, 9)).toBe(1);
  });

  test('both reagents are on the board — which is the whole defect', () => {
    const v = validateSequence(s);
    const text = JSON.stringify(v.steps);
    expect(text).toContain('Zn-Hg / HCl');
    expect(text).toContain('H2N-NH2, KOH');
  });
});

describe('the two-step field_lines — "inside AND outside a charged shell"', () => {
  const s = seq([
    { payload: gaussInside, caption: 'r < R: no charge enclosed, so E = 0' },
    { payload: gaussOutside, caption: 'r > R: the whole charge enclosed', seq: 7 },
  ]);

  test('validates with two surviving steps', () => {
    const v = validateSequence(s);
    expect(v.ok).toBe(true);
    expect(v.steps).toHaveLength(2);
  });

  test('the two steps really are different boards', () => {
    const v = validateSequence(s);
    const a = v.steps[0].payload.params as Record<string, unknown>;
    const b = v.steps[1].payload.params as Record<string, unknown>;
    expect(a.enclosed).not.toBe(b.enclosed);
  });
});

describe('a single step is unchanged', () => {
  const one = seq([{ payload: clemmensen, caption: 'Clemmensen' }]);

  test('one step validates and shows at every reveal point', () => {
    const v = validateSequence(one);
    expect(v.ok).toBe(true);
    expect(v.steps).toHaveLength(1);
    for (const at of [null, 0, 1, 50]) expect(stepAt(v.steps, at)).toBe(0);
  });

  test('and the gate accepts it', () => {
    expect(gateSequence(one).ok).toBe(true);
  });
});

describe('the shape rules', () => {
  test('step 0 may not name a seq', () => {
    const v = readSequence(seq([{ payload: clemmensen, caption: 'a', seq: 2 }]));
    expect(v.ok).toBe(false);
    expect(v.errors.join(' ')).toMatch(/step 0 must not name a seq/);
  });

  test('a later step must name one', () => {
    const v = readSequence(seq([
      { payload: clemmensen, caption: 'a' },
      { payload: wolffKishner, caption: 'b' },
    ]));
    expect(v.errors.join(' ')).toMatch(/step 1 needs a finite seq/);
  });

  test('two steps at one sentence is refused — the later would silently win', () => {
    const v = readSequence(seq([
      { payload: clemmensen, caption: 'a' },
      { payload: wolffKishner, caption: 'b', seq: 4 },
      { payload: clemmensen, caption: 'c', seq: 4 },
    ]));
    expect(v.errors.join(' ')).toMatch(/not greater than/);
  });

  test('every step is captioned, including the first', () => {
    const v = readSequence(seq([{ payload: clemmensen, caption: '' }]));
    expect(v.errors.join(' ')).toMatch(/step 0 has no caption/);
  });

  test(`${MAX_STEPS} is the cap`, () => {
    const v = readSequence(seq([
      { payload: clemmensen, caption: 'a' },
      { payload: wolffKishner, caption: 'b', seq: 2 },
      { payload: clemmensen, caption: 'c', seq: 3 },
      { payload: wolffKishner, caption: 'd', seq: 4 },
    ]));
    expect(v.errors.join(' ')).toMatch(/cap is 3/);
  });

  test('an empty sequence is not a sequence', () => {
    expect(readSequence(seq([])).ok).toBe(false);
  });
});

describe('the degrade rule — one bad case must not cost the other', () => {
  const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
  afterAll(() => warn.mockRestore());

  const broken = { widget: 'reaction_scheme', version: 1, params: { species: [] } };

  test('a refused step is DROPPED and the rest still show, renumbered', () => {
    const v = validateSequence(seq([
      { payload: clemmensen, caption: 'Clemmensen' },
      { payload: broken, caption: 'broken', seq: 4 },
    ]));
    expect(v.ok).toBe(true);
    expect(v.steps).toHaveLength(1);
    expect(v.dropped.join(' ')).toMatch(/step 1/);
  });

  test('if step 0 is the one dropped, the new leader loses its seq', () => {
    // Otherwise it would wait for a sentence before showing the only board
    // there is.
    const v = validateSequence(seq([
      { payload: broken, caption: 'broken' },
      { payload: wolffKishner, caption: 'Wolff-Kishner', seq: 4 },
    ]));
    expect(v.ok).toBe(true);
    expect(v.steps).toHaveLength(1);
    expect(v.steps[0].seq).toBeUndefined();
    expect(stepAt(v.steps, null)).toBe(0);
  });

  test('but the PUBLISH gate refuses a dropped step', () => {
    const g = gateSequence(seq([
      { payload: clemmensen, caption: 'Clemmensen' },
      { payload: broken, caption: 'broken', seq: 4 },
    ]));
    expect(g.ok).toBe(false);
    expect(g.why).toMatch(/must draw every case it declares/);
  });

  test('a sequence with nothing left is refused outright', () => {
    const v = validateSequence(seq([{ payload: broken, caption: 'broken' }]));
    expect(v.ok).toBe(false);
    expect(v.errors.join(' ')).toMatch(/no board left to show/);
  });

  test('an unregistered widget is dropped, not thrown on', () => {
    const v = validateSequence(seq([
      { payload: clemmensen, caption: 'ok' },
      { payload: { widget: 'not_a_widget', version: 1, params: {} }, caption: 'x', seq: 3 },
    ]));
    expect(v.ok).toBe(true);
    expect(v.dropped.join(' ')).toMatch(/not in the registry/);
  });
});

describe('tier 3, per step', () => {
  const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
  afterAll(() => warn.mockRestore());
  const broken = { widget: 'reaction_scheme', version: 1, params: { species: [] } };

  test('a step that cannot draw KEEPS its place when it carried an SVG', () => {
    // Dropping a case the author did supply art for would lose the very thing
    // the sequence exists to show.
    const v = validateSequence(seq([
      { payload: clemmensen, caption: 'Clemmensen' },
      { payload: broken, caption: 'Wolff-Kishner', seq: 4,
        fallback_svg: '<svg xmlns="http://www.w3.org/2000/svg"/>' },
    ]));
    expect(v.ok).toBe(true);
    expect(v.steps).toHaveLength(2);
    expect(v.dropped).toEqual([]);
    expect(v.steps[1].fallback_svg).toBeTruthy();
    expect(v.steps[1].payload.widget).toBe('');
  });

  test('without an SVG the same step is dropped', () => {
    const v = validateSequence(seq([
      { payload: clemmensen, caption: 'Clemmensen' },
      { payload: broken, caption: 'Wolff-Kishner', seq: 4 },
    ]));
    expect(v.steps).toHaveLength(1);
  });
});

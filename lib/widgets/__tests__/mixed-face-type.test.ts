/**
 * M2 — the board draws, and MEASURES, every character in a face that has it.
 *
 * Onest has no glyph for any Greek letter, subscript digit, superscript sign,
 * micro sign or Ohm sign. Measured over the stored corpus on 2026-09-22, 40 of
 * 260 boards use at least one, and `data_table_trend`'s scientific notation
 * emits U+207B on every negative exponent.
 *
 * Nothing looked broken, because iOS substitutes a system face PER GLYPH — so
 * the text appeared, in two typefaces, and the width model charged all of it
 * at Onest's Latin mean. Both halves are fixed here: `splitRuns` assigns each
 * run to a face this code chose, and `textWidth` prices each run from that
 * face's own hmtx.
 */
import {
  COMPANION_FAMILY, SAFETY_MARGIN, splitRuns, textWidth, undrawableChars,
} from '../chrome';
import TRUTH from './type-fixtures.json';

const BOARD = 'Onest_400Regular';

describe('the five fixtures measure what the font files say', () => {
  /*
   * The comparison is against `scripts/measure-type-fixtures.py`, which walks
   * the .ttf cmaps itself in a different language and shares no code with
   * chrome.ts. That is what makes this evidence rather than an identity: a
   * check that re-derived the number from chrome's own tables could not fail
   * for any input, however wrong the split.
   *
   * SAFETY_MARGIN is divided out because it is not a measurement — chrome.ts
   * says so where it is defined, and folding it in here would be asserting
   * that 1.05 equals 1.05.
   */
  test.each(Object.entries(TRUTH as Record<string, number>))(
    '%p is within 2% of its measured width', (text, truth) => {
      const modelled = textWidth(text, 12, BOARD) / SAFETY_MARGIN;
      const errorPct = Math.abs(modelled - truth) / truth * 100;
      expect(errorPct).toBeLessThan(2);
    });

  test('and the agreement is not luck — the OLD model fails this', () => {
    // Before per-codepoint pricing every character was charged the family
    // mean, which is taken over A-Z a-z 0-9 while these strings are full of
    // spaces, points and equals signs at half that width. Reconstructing that
    // model here shows what the fixtures are actually detecting: without it
    // the error is tens of percent, so the assertion above has teeth.
    const MEAN = 0.5697;                       // Onest_400Regular, from `latin`
    let worst = 0;
    for (const [text, truth] of Object.entries(TRUTH as Record<string, number>)) {
      const old = text.length * MEAN * 12;
      worst = Math.max(worst, Math.abs(old - truth) / truth * 100);
    }
    expect(worst).toBeGreaterThan(20);
  });
});

describe('runs are split by coverage, not by luck', () => {
  test('a Latin-only string is ONE run and keeps the caller\'s face', () => {
    // The common case, and the one that must not change shape: the checked-in
    // render trees are a regression net over every widget, and a change that
    // moved all of them would retire the net exactly when it is needed most.
    expect(splitRuns('Frequency range', BOARD))
      .toEqual([{ text: 'Frequency range', family: BOARD }]);
  });

  test('Greek and subscripts go to the companion face, Latin stays', () => {
    expect(splitRuns('ω₀ = 1/√LC', BOARD)).toEqual([
      { text: 'ω₀', family: COMPANION_FAMILY },
      { text: ' = 1/', family: BOARD },
      { text: '√', family: COMPANION_FAMILY },
      { text: 'LC', family: BOARD },
    ]);
  });

  test('adjacent characters wanting the same face share a run', () => {
    // A run per character would triple the TSpan count of every caption that
    // carries a unit. Six characters, two runs.
    expect(splitRuns('λωθ abc', BOARD)).toHaveLength(2);
  });

  test('an undefined family stays undefined, so the parent face is inherited', () => {
    // NOT defaulted to FALLBACK_FAMILY the way the measuring functions default
    // it. Measurement defaults to the widest family so an unspecified caller
    // over-estimates; rendering must default to nothing, or every widget that
    // does not name a family — most of them — would be re-set into Menlo.
    expect(splitRuns('abc')).toEqual([{ text: 'abc', family: undefined }]);
  });
});

describe('what no bundled face can draw is REFUSED, not drawn', () => {
  test('the three the corpus actually contained are named', () => {
    // One use each in 260 boards: "anti-∥ to m", "∮E·dl", "dependent on ♀".
    // A fourth typeface for three glyphs buys three glyphs; a refusal buys an
    // author who writes "anti-parallel", which is the better board anyway.
    expect(undrawableChars('anti-∥ to m')).toEqual(['∥']);
    expect(undrawableChars('∮E·dl')).toEqual(['∮']);
    expect(undrawableChars('dependent on ♀')).toEqual(['♀']);
  });

  test('everything the two faces DO cover passes', () => {
    for (const s of ['λ = c/f', 'ω₀ = 1/√LC', '3.2 × 10⁻³', 'Ω', 'µF',
                     'Frequency range', 'E = −ΔV/Δr', 'Qenc 5 µC']) {
      expect(undrawableChars(s)).toEqual([]);
    }
  });

  test('it reports each character once, however often it appears', () => {
    expect(undrawableChars('∥ and ∥ and ∥')).toEqual(['∥']);
  });
});

/**
 * `chrome.fitReadout` — the two properties it had to be given, and the one it
 * already claimed and did not have.
 *
 * These are stated as PROPERTIES swept over a range, not as three remembered
 * examples. The defects below were both invisible to example tests: each one
 * only appears when you vary something by a single character and watch what
 * the output does at the boundary, which is exactly what an example does not
 * do.
 */
import {
  CHAR_W, READOUT_ELLIPSIS, READOUT_SEP, READOUT_SIZE, fitReadout, maxChars,
} from '../chrome';

/** The board this app is written against, minus circuit_network's gutters. */
const INNER_343 = 343 - 2 * 12;

describe('fitReadout tapers the caption instead of dropping it', () => {
  const caption = 'Metre bridge';

  /**
   * THE CLIFF, stated as the property that failed.
   *
   * Sweep the value one character at a time across the whole range where the
   * caption is under pressure, and count how much of the caption survives.
   * Under `room > 4` that count fell 5 -> 0 in one step. The requirement is
   * that it never falls by more than one.
   *
   * COUNTED IN NON-SPACE CHARACTERS, and that is not a loophole — it is what
   * the reader actually loses. A cut landing on a space is trimmed ("Metre…",
   * not "Metre …"), so at one step the RENDERED length falls by two while the
   * caption's own text loses exactly one letter and the space that preceded
   * it. Written the other way first, which is how that got noticed: it failed
   * at valueLen 29 with "Metre b…" -> "Metre…", a drop the reader experiences
   * as one character.
   *
   * THE ONE PERMITTED TWO-CHARACTER STEP is the moment truncation begins: the
   * whole caption becomes a marked one, and the marker costs the slot it
   * occupies. That happens exactly once per caption, at the transition from
   * unmarked to marked, and this asserts it happens ONLY there — a step of 2
   * anywhere in the middle of the taper, or a step of 5 like the old
   * threshold's, fails.
   */
  test('one more character of value never costs more than one character of caption', () => {
    const width = INNER_343;
    const cap = maxChars(width, READOUT_SIZE, caption + 'x');
    const shown = (valueLen: number): string => {
      const line = fitReadout(caption, 'x'.repeat(valueLen), width);
      const i = line.indexOf(READOUT_SEP);
      return i < 0 ? '' : line.slice(0, i);
    };
    const ink = (s: string): number => s.replace(READOUT_ELLIPSIS, '').replace(/\s/g, '').length;

    const drops: { valueLen: number; from: string; to: string }[] = [];
    for (let n = 1; n <= cap; n++) {
      const a = shown(n - 1), b = shown(n);
      const step = ink(a) - ink(b);
      const startsTruncating = !a.endsWith(READOUT_ELLIPSIS) && b.endsWith(READOUT_ELLIPSIS);
      if (step > (startsTruncating ? 2 : 1)) drops.push({ valueLen: n, from: a, to: b });
    }
    expect(drops).toEqual([]);

    // And the sweep really does exercise the taper rather than sitting in a
    // range where the caption always fits — otherwise the assertion above is
    // vacuous, which is how the old threshold survived every example test.
    const states = new Set(Array.from({ length: cap }, (_, n) => shown(n)));
    expect(states.size).toBeGreaterThan(8);
    expect(states).toContain(caption);
    expect(states).toContain(READOUT_ELLIPSIS);
    expect(states).toContain('');
  });

  test('the caption degrades through every length down to a bare ellipsis', () => {
    /*
     * Rendered at a width chosen so `room` walks 12 -> 0. The observable is
     * the caption side of the line at each step.
     *
     * HALF-CHARACTER STEPS, and that is not fussiness. `n * SIZE * CHAR_W`
     * lands exactly on a `floor()` boundary, and in binary it lands on
     * whichever side of it the last bit of CHAR_W falls: at CHAR_W 0.632205,
     * 15 * 14 * CHAR_W / (14 * CHAR_W) evaluates to 14.999999999999998, so a
     * whole-character sweep silently SKIPS cap 15 and the ladder appears to
     * jump two steps. Nothing is wrong with the taper — the sweep just never
     * asked it for that width. Stepping by a half never sits on a boundary,
     * so every integer cap is visited.
     */
    const value = 'Req 4.48 Ω';
    const seen: string[] = [];
    for (let half = 2; half <= 120; half++) {
      const w = half / 2;
      const line = fitReadout(caption, value, (value.length + w) * READOUT_SIZE * CHAR_W);
      const i = line.indexOf(READOUT_SEP);
      seen.push(i < 0 ? '' : line.slice(0, i));
    }
    const distinct = [...new Set(seen)];
    // Every intermediate state is present, one character apart, and the
    // shortest non-empty one is the bare ellipsis rather than nothing.
    expect(distinct).toContain(READOUT_ELLIPSIS);
    expect(distinct).toContain(`M${READOUT_ELLIPSIS}`);
    expect(distinct).toContain(caption);
    // "Metre…", not "Metre …" — a cut landing on a space trims it.
    expect(distinct).toContain(`Metre${READOUT_ELLIPSIS}`);
    expect(distinct).not.toContain(`Metre ${READOUT_ELLIPSIS}`);
  });

  test('a truncated caption is always marked, and a whole one never is', () => {
    for (let w = 10; w <= 60; w++) {
      const line = fitReadout(caption, 'Req 4.48 Ω', w * READOUT_SIZE * CHAR_W);
      const i = line.indexOf(READOUT_SEP);
      if (i < 0) continue;
      const head = line.slice(0, i);
      expect(head.endsWith(READOUT_ELLIPSIS)).toBe(head !== caption);
    }
  });

  test('an empty or whitespace caption contributes no leading gap', () => {
    // The old code emitted three leading spaces for `caption: ''`, which is
    // what every widget's validate() defaults an absent caption to.
    expect(fitReadout('', 'Req 6 Ω', 400)).toBe('Req 6 Ω');
    expect(fitReadout('   ', 'Req 6 Ω', 400)).toBe('Req 6 Ω');
  });
});

describe('fitReadout never shows part of a number', () => {
  /**
   * THE DEFECT THIS FOUND, live in the checked-in trees: circuit_network's RC
   * readout at 343x236 was cut mid-term to "τ 100", dropping the unit off
   * "τ 100 ms" — 100 seconds instead of 100 milliseconds, and it reads as a
   * complete number. verify-render.mjs cannot see it: the string fits.
   */
  test('a cut lands on a term boundary, never inside a term', () => {
    const value = 'Req 20 kΩ   Ceq 5 µF   I 600 µA   τ 100 ms';
    const terms = value.split(READOUT_SEP);
    for (let w = 4; w <= value.length + 20; w++) {
      const line = fitReadout('RC charging', value, w * READOUT_SIZE * CHAR_W);
      // Whatever survives on the value side must be a prefix run of WHOLE
      // terms — so every term present is present entire. The caption, when
      // there is one, is the first READOUT_SEP-separated field; it is either
      // the caption verbatim or an ellipsis-marked prefix of it.
      const fields = line.split(READOUT_SEP);
      if (fields.length > 1
          && (fields[0] === 'RC charging' || fields[0].endsWith(READOUT_ELLIPSIS))) {
        fields.shift();
      }
      if (fields.length === 0 || fields[0] === '') continue;
      // Ignore the degenerate width where not even one term fits.
      if (fields.length === 1 && !terms.includes(fields[0])) continue;
      expect([w, fields]).toEqual([w, terms.slice(0, fields.length)]);
    }
  });

  test('the RC readout at 343x236 keeps its units or drops the term whole', () => {
    const line = fitReadout(
      'RC charging', 'Req 20 kΩ   Ceq 5 µF   I 600 µA   τ 100 ms', INNER_343
    );
    expect(line).not.toContain('τ 100 ');
    expect(line.endsWith('τ 100')).toBe(false);
    // The caption keeps ONE character now rather than four. That is the
    // taper working, not a regression: the same 319pt of board buys 36 code
    // units of Menlo at its measured 0.60205 em where it appeared to buy 39
    // at the assumed 0.58, and the value is paid for first. The property this
    // test exists for is unchanged — the τ term is dropped WHOLE, so no
    // number is shown with its unit missing.
    expect(line).toBe(`R${READOUT_ELLIPSIS}   Req 20 kΩ   Ceq 5 µF   I 600 µA`);
  });
});

/**
 * NOT AS AN OVERLINE: one bar over the whole of what it negates.
 *
 * The content writes Boolean NOT the way a keyboard can, as a combining mark
 * after every character under the bar: U+0305 for one bar, U+033F for two,
 * U+033F then U+0305 for three. So NAND is A̅·̅B̅, three characters each
 * carrying one bar, and NOT(NOT A · NOT B) is A̿·̅B̿. Drawn as text, each mark
 * is a short bar of its own at its own glyph's height: the bar over "·" sat
 * far below the bars over A and B, none of them joined, and NAND, (A·B)‾,
 * read as Ā·B̄, which is NOR (Android review of Physics 12 Ch 14, 2026-10-31).
 *
 * So the marks are read as levels and drawn as a printed book draws them. A
 * character's level is the number of bars it carries. A level-k bar spans
 * every maximal run of characters with level k or more: A̿·̅B̿ is one bar over
 * all of A·B and a second, shorter bar over A and over B. The shorter bars are
 * the inner NOTs (a run at level k + 1 always lies inside one at level k), so
 * they sit nearest the letters and the long bar above them, one height for
 * the whole run. Characters barred apart, with a space or an unbarred sign
 * between (A̅ · B̅), keep bars of their own.
 *
 * Drawn by components/textbook/markup.tsx (the reader, the Formula sheet, Key
 * points, a diagram's laid-over labels) and lib/diagrams/kit.ts (a drawing's
 * own SVG text, for thumbnails).
 */

export const BAR = '\u0305';
export const BAR2 = '\u033f';
export const OVERLINE_MARK = /[\u0305\u033f]/;
export const hasOverline = (s: string) => OVERLINE_MARK.test(s);

/** How many bars a combining mark adds to the character before it. */
export const barsOf = (mark: string) => (mark === BAR ? 1 : mark === BAR2 ? 2 : 0);

/**
 * The bar's geometry, in ems of the text's size: as thick as STIX Two's own
 * overline, clear of the tallest glyph under it by a little more than its
 * thickness, and stacked bars twice their thickness apart. `lean`: an italic
 * letter leans right, about 0.2 em per em of height, so at a bar's height its
 * top stands right of its own box; a bar that starts over an italic letter
 * starts that much in, and one that ends over one runs on as far past it.
 */
export const OVER = { thick: 0.06, gap: 0.08, step: 0.12, lean: 0.06 } as const;

/**
 * Spacing the app adds between characters, never written by an author: hair
 * and thin spaces, the arrow's room, word joiners, the text-style selector
 * (components/textbook/markup.tsx hairSpaces, readerBreaks). One that lands
 * inside a barred run must not cut the bar, so it takes the lower level of
 * its two neighbours.
 */
const GLUE = /[\u200a\u2009\u2005\u2060\ufe0e]/;
export const isOverGlue = (ch: string) => GLUE.test(ch);

/** The levels, with each glue character given the lower of its neighbours' (see GLUE). */
export function spreadOverGlue(levels: number[], glue: boolean[]): number[] {
  const out = levels.slice();
  for (let k = 0; k < out.length; k++) {
    if (!glue[k]) continue;
    let a = k - 1, b = k + 1;
    while (a >= 0 && glue[a]) a--;
    while (b < out.length && glue[b]) b++;
    out[k] = Math.min(a >= 0 ? levels[a] : 0, b < out.length ? levels[b] : 0);
  }
  return out;
}

/** Each bar to draw: its level and the characters it spans, [start, end). */
export function overRuns(levels: number[]): { level: number; start: number; end: number }[] {
  const out: { level: number; start: number; end: number }[] = [];
  const top = Math.max(0, ...levels);
  for (let level = 1; level <= top; level++)
    for (let k = 0; k < levels.length; k++) {
      if (levels[k] < level) continue;
      const start = k;
      while (k < levels.length && levels[k] >= level) k++;
      out.push({ level, start, end: k });
    }
  return out;
}

/**
 * How high a character's ink reaches above the baseline, in ems: the tallest
 * of its kind in STIX Two (maths) or Onest (the reader's words, signs and
 * digits), from the fonts' own outlines. Brackets (STIX 0.73, Onest 0.82),
 * ascenders (b d f h k l t: 0.71, 0.75), capitals, digits and the tall
 * Greek and operators (A 0.66, C 0.67, ⊕ 0.64; Onest's 0.72), and the rest:
 * x-height letters and signs, of which + is the tallest (0.56, 0.55).
 */
export function inkTop(ch: string, onest: boolean): number {
  if (/[()[\]{}|‖]/.test(ch)) return onest ? 0.82 : 0.74;
  if (/[bdfhklt]/.test(ch)) return onest ? 0.75 : 0.71;
  if (/[A-Z0-9Α-Ωβδζθλξ⊕⊗⊙]/.test(ch)) return onest ? 0.72 : 0.67;
  return onest ? 0.55 : 0.56;
}
/** A superscript's top (a raised digit or a drawn raised letter), and a subscript's, in ems of the line. */
export const SCRIPT_TOP = { sup: 0.7, sub: 0.26 } as const;

/** Where a level-`level` bar's foot sits above the baseline, in ems, over a run whose ink reaches `top` and that carries up to `most` bars. */
export const barFoot = (top: number, level: number, most: number) => top + OVER.gap + (most - level) * OVER.step;

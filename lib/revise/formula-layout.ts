/**
 * HOW A FORMULA LINE WITH A STACKED FRACTION IS LAID OUT (Android, 2026-10-20).
 *
 * A formula with a fraction in it cannot be one Text: the fraction is a box
 * of its own. It used to be a wrapping row of three pieces (the text before,
 * the fraction, the text after), and each text piece wrapped inside itself.
 * On Android that broke three ways:
 *   - a text piece with a drawn script in it (∫ with its limits, ρ_water,
 *     C_P) was measured at one width and drawn at another, so the script's
 *     little View landed a line below its letter, on top of the next line;
 *   - a text piece measured to the pixel was drawn a pixel narrower, lost its
 *     last word to a second line, and that line was clipped ("= √(rg" gone);
 *   - the text after a fraction could start a new line on its own, so a line
 *     opened on "," or ")u₁".
 *
 * So the row is now made of BOXES that never break inside: the line's text is
 * cut at the places keepTogether left breakable (its plain spaces), and every
 * piece between two such spaces is one box. A box that holds a fraction holds
 * the text glued to it on either side too ("ν = −", ")", ",", "u₁"), so a
 * fraction always travels with its operator and its punctuation. A box is a
 * single line, so a drawn script is placed on the line it was measured on.
 */

export type Part =
  | { kind: 'text'; html: string }
  /** `tall`: the fraction is the whole of a root's bracket, √( … ), drawn with brackets its own height. */
  | { kind: 'frac'; top: string; bottom: string; tall?: boolean };
export type Box = Part[];

const shown = (h: string) => h.replace(/<[^>]+>/g, '').replace(/⁠/g, '');
const WJ = '⁠';
const OP_END = /[=+−±∓×⟹⟺⇔⇌≈→⇒∝<>≤≥,;][\s]*$/;

/** The bracket that closes the one opening at `at`, or -1. */
function closeOf(s: string, at: number): number {
  let depth = 0;
  for (let k = at; k < s.length; k++) {
    if (s[k] === '(') depth++;
    else if (s[k] === ')' && --depth === 0) return k;
  }
  return -1;
}
/** The bracket that opens the one closing at `at`, or -1. */
function openOf(s: string, at: number): number {
  let depth = 0;
  for (let k = at; k >= 0; k--) {
    if (s[k] === ')') depth++;
    else if (s[k] === '(' && --depth === 0) return k;
  }
  return -1;
}
/** At most one bracket inside another: "(Number of divisions (n))", "(√(…) √(…))". */
function shallow(inner: string): boolean {
  let depth = 0;
  for (const c of inner) {
    if (c === '(') depth++;
    else if (c === ')') depth--;
    if (depth > 1) return false;
  }
  return true;
}
/** Brackets opened and not yet closed. */
function openCount(s: string): number {
  let n = 0;
  for (const c of s) {
    if (c === '(' || c === '[') n++;
    else if ((c === ')' || c === ']') && n > 0) n--;
  }
  return n;
}
const hasSpace = (h: string) => /[\s]/.test(h);
const SYMBOL = /^(?:<i>[^<]+<\/i>|[A-Za-z0-9]+)(?:<su([bp])>(?:<\/?i>|[^<])*<\/su\1>)*/;
const FUNCTION = /^(?:sin|cos|tan|cot|sec|cosec|log|ln)\d*$/;

type Found = { start: number; end: number; top: string; bottom: string; tall: boolean };

/**
 * The next fraction to stack, from `from`. Words in brackets on either side of
 * a slash are stacked, "(net driving force)/(total mass)", as is a bracket of
 * maths over a bracket or a single symbol, "(m₁ + m₂)/r³". Short ones (ds/r)
 * stay inline. Each side may hold one bracket inside it.
 *
 * Inside an open bracket a stacked fraction would sit between brackets of
 * text height, "k( (T₁ + T₂)/2 − T₀ )", so it stays inline there; except when
 * the fraction is the whole bracket, "((m₁ − m₂)/(m₁ + m₂))u₁": then the
 * brackets are only there for the slash, and the stacked form drops them.
 * Under a root they are kept, drawn tall: √( restoring constant / inertia ).
 */
function nextFraction(s: string, from: number): Found | null {
  for (let slash = s.indexOf('/', from); slash !== -1; slash = s.indexOf('/', slash + 1)) {
    if (s[slash - 1] === '<') continue; // a closing tag
    const r = s[slash + 1] === WJ ? slash + 2 : slash + 1;

    // The bottom: a bracket, or one symbol with its scripts.
    let bottom: string | null = null, bottomGroup = false, end = r;
    if (s[r] === '(') {
      const c = closeOf(s, r);
      if (c === -1 || !shallow(s.slice(r + 1, c))) continue;
      bottom = s.slice(r + 1, c);
      bottomGroup = true;
      end = c + 1;
    } else {
      const m = SYMBOL.exec(s.slice(r));
      if (m) {
        bottom = m[0];
        end = r + m[0].length;
        // A function name takes its argument with it: "…/cos r" and
        // "…/sin(A/2)" put "cos r" and "sin(A/2)" under the bar, not a bare
        // "cos" with the r left outside.
        if (FUNCTION.test(shown(bottom))) {
          const rest = s.slice(end);
          if (rest[0] === '(') {
            const c = closeOf(s, end);
            if (c !== -1 && shallow(s.slice(end + 1, c))) {
              bottom = s.slice(r, c + 1);
              end = c + 1;
            }
          } else {
            const arg = /^[\s⁠]+(?:<i>[^<]+<\/i>|[A-Za-z0-9α-ωΑ-Ω]+)(?:<su([bp])>(?:<\/?i>|[^<])*<\/su\1>)*/.exec(rest);
            if (arg) {
              bottom += arg[0];
              end += arg[0].length;
            }
          }
        }
      }
    }
    if (bottom === null) continue;

    // The top: a bracket, a word, or (only as the whole of a bracket) a term.
    let top: string | null = null, start = slash;
    if (s[slash - 1] === ')') {
      const o = openOf(s, slash - 1);
      if (o === -1 || !shallow(s.slice(o + 1, slash - 1))) continue;
      top = s.slice(o + 1, slash - 1);
      if (!hasSpace(top)) continue;
      start = o;
      // "sin((A + δm)/2)/…": the bracket is the function's, so the top is the whole "sin(…)".
      const fn = /(?:^|[^A-Za-z])((?:sin|cos|tan|cot|sec|cosec|log|ln)(?:<sup>[^<]*<\/sup>)?)$/.exec(s.slice(0, o));
      if (fn) {
        start = o - fn[1].length;
        top = s.slice(start, slash);
      } else {
        // "n(n − 1)/2": a factor written against the bracket multiplies it, so
        // it goes over the bar too, not left beside a stacked (n − 1)/2
        // (Android check of Physics 12 Ch 12, number of spectral lines).
        const factor = /(?:^|[\s(=+−±×·,])((?:<i>[^<]+<\/i>|[A-Za-z0-9.]+)(?:<su([bp])>(?:<\/?i>|[^<])*<\/su\2>)*)$/.exec(s.slice(0, o));
        if (factor && !/^(?:sin|cos|tan|cot|sec|cosec|log|ln|exp)$/.test(shown(factor[1]))) {
          start = o - factor[1].length;
          top = s.slice(start, slash);
        }
      }
    } else {
      const w = /[A-Za-z]+$/.exec(s.slice(0, slash));
      const pre = w ? s[w.index - 1] : undefined;
      if (w && pre !== '/' && pre !== '<' && pre !== '>' && bottomGroup && hasSpace(bottom)) {
        top = w[0];
        start = w.index;
      } else if (bottomGroup) {
        // "(2m₂/(m₁ + m₂))": a single term over a bracket, filling a bracket.
        const o = s.lastIndexOf('(', slash);
        const term = o === -1 ? '' : s.slice(o + 1, slash);
        if (o !== -1 && term && !/[\s()]/.test(term) && hasSpace(bottom) && s[end] === ')') {
          top = term;
          start = o + 1;
        }
      }
    }
    if (top === null) continue;
    if (!bottomGroup && !hasSpace(top)) continue;

    const before = s.slice(0, start), after = s.slice(end);
    if (before.endsWith('(') && after.startsWith(')')) {
      // A function's own bracket is not there for the slash: "sin((A + δm)/2)" stays inline.
      if (/(?:^|[^A-Za-z])(?:sin|cos|tan|cot|sec|cosec|log|ln)(?:<sup>[^<]*<\/sup>)?$/.test(before.slice(0, -1))) continue;
      // Kept too when a power follows: "((a₁ + a₂)/(a₁ − a₂))²" without its
      // brackets left the ² beside the bottom alone (Physics 12 Ch 10, contrast ratio).
      const root = shown(before.slice(0, -1)).endsWith('√') || after.startsWith(')<sup>');
      return { start: start - 1, end: end + 1, top, bottom, tall: root };
    }
    if (openCount(before) > 0) continue;
    return { start, end, top, bottom, tall: false };
  }
  return null;
}

/** The line as text and fractions, in order. */
export function parts(expr: string): Part[] {
  const out: Part[] = [];
  let at = 0;
  for (let f = nextFraction(expr, 0); f; f = nextFraction(expr, f.end)) {
    if (f.start > at) out.push({ kind: 'text', html: expr.slice(at, f.start) });
    out.push(f.tall ? { kind: 'frac', top: f.top, bottom: f.bottom, tall: true } : { kind: 'frac', top: f.top, bottom: f.bottom });
    at = f.end;
  }
  if (at < expr.length) out.push({ kind: 'text', html: expr.slice(at) });
  return out;
}

/**
 * Cut markup at its plain spaces, closing the tags open at each cut and
 * opening them again after it, so every piece is whole markup. A space inside
 * a script never cuts: a script is drawn as one piece.
 */
export function cutAtSpaces(html: string): string[] {
  const out: string[] = [];
  const open: string[] = [];
  let cur = '';
  const TAG = /^<(\/?)(b|i|sup|sub)>/i;
  for (let k = 0; k < html.length; k++) {
    const m = html[k] === '<' ? TAG.exec(html.slice(k)) : null;
    if (m) {
      if (m[1]) {
        const at = open.lastIndexOf(m[2].toLowerCase());
        if (at !== -1) open.splice(at);
      } else open.push(m[2].toLowerCase());
      cur += m[0];
      k += m[0].length - 1;
      continue;
    }
    if (html[k] === ' ' && !open.some((t) => t === 'sub' || t === 'sup')) {
      out.push(cur + [...open].reverse().map((t) => `</${t}>`).join(''));
      cur = open.map((t) => `<${t}>`).join('');
      continue;
    }
    cur += html[k];
  }
  out.push(cur);
  return out;
}

/** The line as boxes that never break inside; a line may break only between two boxes. */
export function boxes(expr: string): Box[] {
  const out: Box[] = [[]];
  for (const p of parts(expr)) {
    if (p.kind === 'frac') {
      // "2π (energy stored)/(energy lost per cycle)": a fraction multiplying
      // what is in front of it stays on its line; only an operator may start one.
      const last = out[out.length - 2], prev = last?.[last.length - 1];
      // The space it was cut at goes back, non-breaking: dropped, the fraction
      // sat a hair from "(μ₀/(4π))" where the same line with the space
      // already non-breaking (keepTogether) kept a full space (Android
      // re-check of Physics 12 Ch 5, card 10, line 3 against lines 1–2).
      if (out.length > 1 && out[out.length - 1].length === 0 && prev?.kind === 'text' && !OP_END.test(shown(prev.html))) {
        out.pop();
        last[last.length - 1] = { kind: 'text', html: `${prev.html}\u00a0` };
      }
      out[out.length - 1].push(p);
      continue;
    }
    cutAtSpaces(p.html).forEach((piece, k) => {
      if (k > 0) out.push([]);
      if (shown(piece) || piece.includes('<')) out[out.length - 1].push({ kind: 'text', html: piece });
    });
  }
  return out.filter((b) => b.length > 0);
}

/** Whether a line needs boxes at all: only one with a stacked fraction does. */
export const hasFraction = (expr: string) => parts(expr).some((p) => p.kind === 'frac');

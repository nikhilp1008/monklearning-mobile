/**
 * SPACES ROUND THE OPERATORS, the way a textbook sets an equation.
 *
 * The solver writes maths the way it types it — `v=3t^2-12t+9=3(t-1)(t-3)` —
 * and converted to Unicode that is one unbroken run: hard to read, and too
 * long to wrap, so a long equation broke mid-term or ran off the line. This
 * puts a space either side of every relation (= ≈ ≤ ⇒ …) and every BINARY
 * + − ×, and sets the minus as a real minus sign (−) rather than a hyphen.
 * A sign on its own — `-9.8`, `(−g)`, `= −4` — stays attached to its number.
 *
 * Inside brackets the added spaces are NO-BREAK spaces (U+00A0), so a line
 * never breaks inside `(t − 1)` and leaves `3(t` on one line and `− 1)` on the
 * next. A bracketed group wraps as one piece.
 *
 * Only ever applied to text that came from maths, never to prose, so a
 * hyphenated word in a sentence is left alone.
 */

/** The no-break space used inside brackets. */
export const NBSP = '\u00A0';

/** A piece of maths this short — `t = 1`, `v = 0`, `h = 44.1` — is one
 *  thought, and never breaks across lines: a line ending "t =" with the "1"
 *  below reads as two things. Longer equations still wrap at their operators. */
const WHOLE_UNDER = 16;

const RELATIONS = new Set(['=', '≠', '≈', '≤', '≥', '<', '>', '⇒', '⇔', '→', '←', '∝', '≡']);
const BINARY = new Set(['+', '-', '−', '×']);

/** What can end the left-hand operand of a binary operator. */
const OPERAND_END = /[0-9A-Za-zα-ωΑ-Ω)\]}|²³¹⁰⁴-⁹₀-₉′!%°]/u;
/** What can start the right-hand operand. */
const OPERAND_START = /[0-9A-Za-zα-ωΑ-Ω([{|√∫∑.]/u;

export function spaceOperators(math: string): string {
  const chars = Array.from(math);
  let out = '';
  /** How many brackets deep we are: inside any, spaces must not break. */
  let depth = 0;
  const gap = () => (depth > 0 ? NBSP : ' ');
  const lastNonSpace = () => out.replace(/\s+$/, '').slice(-1);
  const nextNonSpace = (from: number) => {
    for (let j = from; j < chars.length; j++) if (!/\s/.test(chars[j])) return chars[j];
    return '';
  };
  const skipSpaces = (from: number) => {
    let j = from;
    while (j + 1 < chars.length && /\s/.test(chars[j + 1])) j++;
    return j;
  };

  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    if (c === '(' || c === '[' || c === '{') depth++;
    if ((c === ')' || c === ']' || c === '}') && depth > 0) depth--;

    // `<=`, `>=`, `==`, `=>`: a two-character relation typed in ASCII — leave
    // it as the author wrote it rather than pulling it apart.
    const pair = c + (chars[i + 1] ?? '');
    if (['<=', '>=', '==', '=>', '!='].includes(pair)) {
      out = out.replace(/\s+$/, '');
      if (out) out += gap();
      out += pair;
      i = skipSpaces(i + 1);
      if (i + 1 < chars.length) out += gap();
      continue;
    }

    if (RELATIONS.has(c)) {
      out = out.replace(/\s+$/, '');
      if (out) out += gap();
      out += c;
      i = skipSpaces(i);
      if (i + 1 < chars.length) out += gap();
      continue;
    }

    if (BINARY.has(c)) {
      const sign = c === '-' ? '−' : c;
      const prev = lastNonSpace();
      const next = nextNonSpace(i + 1);
      // 1.6e-19: the minus belongs to the exponent, not between two terms.
      const exponent =
        (prev === 'e' || prev === 'E') && /[0-9.]/.test(out.replace(/\s+$/, '').slice(-2, -1));
      const binary = !!prev && !!next && OPERAND_END.test(prev) && OPERAND_START.test(next);
      if (binary && !exponent) {
        out = out.replace(/\s+$/, '') + gap() + sign + gap();
        i = skipSpaces(i);
        continue;
      }
      out += sign;
      continue;
    }

    out += c;
  }
  return Array.from(out).length <= WHOLE_UNDER ? out.replace(/ /g, NBSP) : out;
}

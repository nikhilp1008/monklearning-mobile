/**
 * EQUATIONS ON THEIR OWN LINE, the way a textbook sets them.
 *
 * The solver writes a step as a sentence with its maths inside it — "Factor
 * the velocity: $v=3t^2-12t+9=3(t-1)(t-3)$" — and at one type size a page of
 * those reads as a page of text: nothing to scan for. This lifts the maths
 * that matters out of the sentence onto a line of its own, and leaves short
 * quantities where they are.
 *
 * What counts as mattering: a relation (=, ⇒, ≈, ≤ …) with working in it — an
 * operator, a fraction, an integral. A bare quantity or assignment ("u=29.4",
 * "a=-g=-9.8", "t=1") reads fine inside the sentence and stays there.
 *
 * A unit written just after the maths ("$...=4$ m") travels with it, and the
 * comma or full stop left behind is dropped rather than starting a line.
 */

export type Piece = { kind: 'text' | 'display'; raw: string };

const MATH_SPAN = /\$[^$]+\$/g;
const RELATION = /=|\\Rightarrow|\\implies|\\approx|\\le|\\ge|\\neq|\\to|<|>/;
const WORKING = /\\frac|\\int|\\sum|\\sqrt|[+\-*/^]|\\times|\\cdot/;
/** `u=29.4`, `a=-g=-9.8`, `a=-9.8 m/s²`: a chain of plain assignments, each
 *  side a quantity — a name, a number, a unit, an exponent on the unit. */
const ASSIGNMENT = /^[A-Za-z][A-Za-z0-9_']*(=[-−]?[A-Za-z0-9.^{}\\]+)+$/;

const UNITS = new Set([
  'm', 's', 'cm', 'mm', 'km', 'kg', 'g', 'N', 'J', 'W', 'V', 'A', 'Ω', 'K', 'Hz', 'Pa',
  'mol', 'L', 'mL', 'ml', 'rad', 'eV', 'C', 'T', 'min', 'h', 'm/s', 'km/h', 'cm/s',
]);

export function isDisplayWorthy(tex: string): boolean {
  // A unit set in \mathrm or \text is not working: `u=29.4\,\mathrm{m/s}`
  // is a quantity, and its slash is a unit's slash, not a division.
  const t = tex
    .replace(/\\(?:mathrm|text|textrm|rm|operatorname)\s*\{[^{}]*\}/g, 'U')
    .replace(/\\[,;!: ]|\s+/g, '');
  if (!RELATION.test(t)) return false;
  if (/\\frac|\\int|\\sum|\\sqrt/.test(t)) return true;
  if (ASSIGNMENT.test(t)) return false;
  return WORKING.test(t) && t.length >= 6;
}

/**
 * Splits one line of a step into prose and displayed maths.
 *
 * `pick` chooses which of the display-worthy spans to lift, by their order in
 * the line; by default, all of them.
 */
export function splitDisplay(
  raw: string,
  pick: (worthyIndex: number, worthyCount: number) => boolean = () => true
): Piece[] {
  // `$$…$$`, `\(…\)` and `\[…\]` are the same maths in other clothes.
  raw = raw
    .replace(/\$\$([^$]+)\$\$/g, (_, m: string) => `$${m}$`)
    .replace(/\\\(([\s\S]+?)\\\)/g, (_, m: string) => `$${m}$`)
    .replace(/\\\[([\s\S]+?)\\\]/g, (_, m: string) => `$${m}$`);
  const spans = [...raw.matchAll(MATH_SPAN)].filter((m) => isDisplayWorthy(m[0].slice(1, -1)));
  if (!spans.length) return [{ kind: 'text', raw }];

  const pieces: Piece[] = [];
  let at = 0;
  const pushText = (text: string) => {
    const t = text.replace(/^\s*[,.;]\s*/, '').trim();
    // Leftover punctuation or a bare connective is not a line of its own.
    if (!t || /^[.,;:)]+$/.test(t)) return;
    pieces.push({ kind: 'text', raw: t });
  };

  spans.forEach((m, k) => {
    if (!pick(k, spans.length)) return;
    const start = m.index!;
    let end = start + m[0].length;
    let display = m[0];
    // The unit written after the number goes with it.
    const unit = /^\s+([A-Za-zΩ/]{1,5})(?=[\s.,;:)]|$)/.exec(raw.slice(end));
    if (unit && UNITS.has(unit[1])) {
      display += ' ' + unit[1];
      end += unit[0].length;
    }
    pushText(raw.slice(at, start));
    pieces.push({ kind: 'display', raw: display });
    at = end;
  });
  pushText(raw.slice(at));
  return tidy(pieces.length ? pieces : [{ kind: 'text', raw }]);
}

/** A word or two joining two equations — "so", "which gives" — is not a line
 *  of prose. It rides on the equation it introduces. */
const CONNECTIVE = /^[a-z][\w' ]{0,14}$/;

function tidy(pieces: Piece[]): Piece[] {
  const out: Piece[] = [];
  pieces.forEach((piece) => {
    const last = out[out.length - 1];
    if (
      piece.kind === 'display' &&
      last?.kind === 'text' &&
      CONNECTIVE.test(last.raw.trim())
    ) {
      out[out.length - 1] = { kind: 'display', raw: `${last.raw.trim()} ${piece.raw}` };
      return;
    }
    out.push(piece);
  });
  return out;
}

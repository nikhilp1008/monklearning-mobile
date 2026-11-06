/**
 * Converts the small subset of LaTeX that real question content actually uses
 * into plain Unicode, so exam text can render in a normal RN <Text> instead of
 * a WebView.
 *
 * Sampled 24 live /practice/next questions across all three subjects
 * (2026-08-16): only 17% contained `$…$` at all, and the *only* backslash
 * commands present were `\frac` and `\circ`. The earlier WebView+KaTeX
 * renderer therefore paid a full browser instance plus three CDN requests per
 * question AND per option — five WebViews for one MCQ — to serve markup that
 * four out of five questions never contain. Unicode covers this content class
 * comfortably and renders instantly, offline, in the app's own font.
 *
 * Anything genuinely beyond Unicode's reach (matrices, integrals with limits)
 * degrades to readable linear text rather than failing — a worse-looking
 * fraction beats a question that never appears.
 */

const SUPERSCRIPT: Record<string, string> = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷',
  '8': '⁸', '9': '⁹', '+': '⁺', '-': '⁻', '−': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
  n: 'ⁿ', i: 'ⁱ', a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ',
  j: 'ʲ', k: 'ᵏ', l: 'ˡ', m: 'ᵐ', o: 'ᵒ', p: 'ᵖ', r: 'ʳ', s: 'ˢ', t: 'ᵗ', u: 'ᵘ',
  v: 'ᵛ', w: 'ʷ', x: 'ˣ', y: 'ʸ', z: 'ᶻ', '.': '·', '/': 'ᐟ',
};

const SUBSCRIPT: Record<string, string> = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇',
  '8': '₈', '9': '₉', '+': '₊', '-': '₋', '−': '₋', '=': '₌', '(': '₍', ')': '₎',
  a: 'ₐ', e: 'ₑ', h: 'ₕ', i: 'ᵢ', j: 'ⱼ', k: 'ₖ', l: 'ₗ', m: 'ₘ', n: 'ₙ', o: 'ₒ',
  p: 'ₚ', r: 'ᵣ', s: 'ₛ', t: 'ₜ', u: 'ᵤ', v: 'ᵥ', x: 'ₓ',
};

/** Single-token commands mapped straight to a character. */
const SYMBOLS: Record<string, string> = {
  // Greek — lower
  alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', epsilon: 'ε', varepsilon: 'ε',
  zeta: 'ζ', eta: 'η', theta: 'θ', vartheta: 'ϑ', iota: 'ι', kappa: 'κ',
  lambda: 'λ', mu: 'μ', nu: 'ν', xi: 'ξ', pi: 'π', rho: 'ρ', sigma: 'σ',
  tau: 'τ', upsilon: 'υ', phi: 'φ', varphi: 'φ', chi: 'χ', psi: 'ψ', omega: 'ω',
  // Greek — upper
  Gamma: 'Γ', Delta: 'Δ', Theta: 'Θ', Lambda: 'Λ', Xi: 'Ξ', Pi: 'Π',
  Sigma: 'Σ', Upsilon: 'Υ', Phi: 'Φ', Psi: 'Ψ', Omega: 'Ω',
  // Operators & relations
  times: '×', cdot: '·', div: '÷', pm: '±', mp: '∓', ast: '∗',
  leq: '≤', le: '≤', geq: '≥', ge: '≥', neq: '≠', ne: '≠', approx: '≈',
  equiv: '≡', sim: '∼', simeq: '≃', propto: '∝', ll: '≪', gg: '≫',
  wedge: '∧', vee: '∨', land: '∧', lor: '∨',
  // Arrows
  rightarrow: '→', to: '→', leftarrow: '←', leftrightarrow: '↔',
  Rightarrow: '⇒', Leftarrow: '⇐', Leftrightarrow: '⇔', longrightarrow: '⟶',
  /**
   * Found by rendering all 33,247 stored board lines and counting the commands
   * whose NAME reached the screen as a word: "A iff B" (44 lines), "p implies q"
   * (39), "Longleftrightarrow" (13), "Longrightarrow" (8), "longleftrightarrow"
   * (7), and one line each of "longleftarrow", "mapsto", "subsetneq" and "lnot".
   * A dimensional check ended in the bare word "checkmark" twice. Each is the
   * symbol the author meant, so each prints that symbol. The siblings with no
   * line in the corpus yet (impliedby, Longleftarrow, longmapsto, supsetneq,
   * neg, bigtriangleup) are the same defect waiting for the next lesson that
   * uses one, so they are closed with the rest.
   */
  longleftarrow: '⟵', longleftrightarrow: '⟷', Longrightarrow: '⟹',
  Longleftarrow: '⟸', Longleftrightarrow: '⟺', implies: '⟹', impliedby: '⟸',
  iff: '⟺', mapsto: '↦', longmapsto: '⟼', checkmark: '✓',
  subsetneq: '⊊', supsetneq: '⊋', lnot: '¬', neg: '¬', bigtriangleup: '△',
  // Negated relations. Their ABSENCE is worse than a missing symbol: a board
  // line reading "Same Class nRightarrow Same Order" is noise, and a reader
  // skimming it can take the opposite of what it says. Measured on the
  // biology corpus, \nRightarrow was one of only two commands that leaked.
  nRightarrow: '⇏', nrightarrow: '↛', nLeftarrow: '⇍', nleftrightarrow: '↮',
  notequiv: '≢', nsubset: '⊄', nsubseteq: '⊈', nmid: '∤',
  uparrow: '↑', downarrow: '↓',
  // Misc
  infty: '∞', partial: '∂', nabla: '∇', degree: '°', circ: '°',
  prime: '′', angle: '∠', perp: '⊥', parallel: '∥', therefore: '∴',
  because: '∵', sum: '∑', prod: '∏', int: '∫', oint: '∮',
  in: '∈', notin: '∉', subset: '⊂', cup: '∪', cap: '∩', emptyset: '∅',
  // Both seen live in a solved doubt, rendering as the bare words
  // "setminus" and "varnothing" in the middle of set notation.
  varnothing: '∅', setminus: '∖', supset: '⊃', subseteq: '⊆', supseteq: '⊇',
  forall: '∀', exists: '∃', hbar: 'ℏ', ell: 'ℓ', Re: 'ℜ', Im: 'ℑ',
  ldots: '…', dots: '…', cdots: '⋯', quad: ' ', qquad: '  ',
  // `\bar` is not here: it draws a bar, see `drawBar`.
  lambdabar: 'ƛ', vec: '', hat: '', dot: '',
  /**
   * Found by surveying all 11,300 servable rows through this converter and
   * counting command names that reached the output as words. Every one below
   * was printing itself: "rightleftharpoons" in the middle of an equilibrium,
   * "leqslant" in an inequality, "AA" where an Ångström should be.
   */
  rightleftharpoons: '⇌', leftrightharpoons: '⇌', rightharpoonup: '⇀',
  leqslant: '≤', geqslant: '≥', triangle: '△', square: '□', mid: '|',
  AA: 'Å', angstrom: 'Å', degrees: '°', celsius: '°C',
  // Layout that carries nothing once the line is linear.
  hline: '', nonumber: '', noalign: '', centering: '', smallskip: '',
  big: '', Big: '', bigg: '', Bigg: '', bigl: '', bigr: '', Bigl: '', Bigr: '',
  biggl: '', biggr: '', Biggl: '', Biggr: '', mathstrut: '', strut: '',
  // The tail the same survey turned up once the big leaks were closed.
  langle: '⟨', rangle: '⟩', lvert: '|', rvert: '|', lVert: '‖', rVert: '‖',
  lfloor: '⌊', rfloor: '⌋', lceil: '⌈', rceil: '⌉',
  oplus: '⊕', ominus: '⊖', otimes: '⊗', odot: '⊙', sqcap: '⊓', sqcup: '⊔',
  bigcup: '⋃', bigcap: '⋂', bigoplus: '⨁', bigotimes: '⨂',
  rightleftarrows: '⇄', leftrightarrows: '⇆', hookrightarrow: '↪',
  // `{2n \choose n}` is infix, so it cannot take arguments the way \binom
  // does; " C " at least reads as the binomial it is.
  choose: ' C ',
  // Document-level commands that should never have been in a question at all.
  // They are extraction debris, and printing their names is the worst option.
  section: '', subsection: '', par: '', item: '',
  lll: '⋘', ggg: '⋙', cong: '≅', ncong: '≇', asymp: '≍', doteq: '≐',
  // Not LaTeX, but the solver writes it between two results: "x = 1,\or".
  or: ' or ',
};

/**
 * The escapes that are spacing rather than punctuation: `\ ` and `\,` and
 * friends. They matter most between a number and its unit, where dropping
 * them (or, for `\,`, emitting a literal comma) is visible in the answer.
 */
const SPACING: Record<string, string> = {
  ' ': ' ',
  ',': ' ',
  ';': ' ',
  ':': ' ',
  '!': '',
};

/**
 * The number sets, which `\mathbb{…}` is almost only ever used for in this
 * content. Treating it as a transparent wrapper would print a bare "Z", which
 * is not the same claim as ℤ.
 */
const BLACKBOARD: Record<string, string> = {
  R: 'ℝ', Z: 'ℤ', N: 'ℕ', Q: 'ℚ', C: 'ℂ', P: 'ℙ', H: 'ℍ', E: '𝔼',
};

/** Arrows whose braced argument labels the arrow rather than replacing it.
 *  `\xrightarrow{Ni}` is "→(Ni)", not "Ni" and certainly not "xrightarrowNi",
 *  which is what leaked before this existed. */
const LABELLED_ARROWS: Record<string, string> = {
  xrightarrow: '→', xleftarrow: '←', xrightleftharpoons: '⇌',
};

/** mhchem's own arrows, which are spelled in ASCII inside `\ce{…}` rather than
 *  as commands. Longest first: `<=>` must not be read as `<=` and then `>`. */
const CHEM_ARROWS: [string, string][] = [
  ['<=>>', '⇌'], ['<<=>', '⇌'], ['<=>', '⇌'], ['<->', '↔'],
  ['->', '→'], ['<-', '←'],
];

/** The wrappers whose argument is set in TEXT mode. There TeX turns `--` into an en
 *  dash; in maths proper the same two characters are two minus signs. */
const TEXT_MODE_WRAPPERS = new Set(['text', 'textrm', 'textbf', 'textit', 'mbox']);

/** How many text-mode wrappers the conversion is inside. */
let textDepth = 0;

/** Wrappers whose braces vanish and whose contents render as-is. */
const TRANSPARENT_WRAPPERS = new Set([
  'text', 'mathrm', 'textrm', 'mathbf', 'textbf', 'mathit', 'textit',
  'mathsf', 'mathtt', 'operatorname', 'left', 'right', 'displaystyle',
  'mbox', 'hspace', 'ensuremath', 'mathcal', 'mathfrak', 'boldsymbol',
  // A boxed result is already the emphasised thing on a board, so the box
  // itself carries nothing the layout does not.
  'boxed',
  // Accents and over-arrows. Nothing can be drawn above a glyph in linear
  // text, and the alternative was printing "overrightarrow" before the vector
  // it decorates — same call already made for `\vec` and `\hat`.
  // `overline` is the exception: `drawBar` gives it a combining bar. It stays
  // in this set only because `\ce{…}` asks the set which commands take an
  // argument, and hands this one its braces.
  'overrightarrow', 'overleftarrow', 'overline', 'underline', 'widehat',
  'widetilde', 'overbracket', 'mathopen', 'mathclose', 'mathbin', 'mathrel',
  // `\substack{a \\ b}` stacks reagents above an arrow; linear text cannot.
  'substack',
]);

/** Commands `convertMath` reads by name, or prints as their own name on purpose. */
const NAMED_COMMANDS = new Set([
  'frac', 'dfrac', 'tfrac', 'begin', 'end', 'xrightarrow', 'xleftarrow', 'underbrace',
  'overbrace', 'ce', 'ch', 'underset', 'stackrel', 'overset', 'binom', 'dbinom', 'tbinom',
  'pmod', 'bmod', 'sqrt', 'mathbb', 'widehat', 'implies', 'sin', 'cos', 'tan', 'cot', 'sec',
  'csc', 'sinh', 'cosh', 'tanh', 'arcsin', 'arccos', 'arctan', 'log', 'ln', 'exp', 'lim',
  'max', 'min',
]);

export function isLatexCommand(name: string): boolean {
  return (
    Object.prototype.hasOwnProperty.call(SYMBOLS, name) ||
    TRANSPARENT_WRAPPERS.has(name) ||
    NAMED_COMMANDS.has(name)
  );
}

/**
 * Control characters the solver wrote into its own answer.
 *
 * It sometimes writes one where a backslash belongs (`$\x05ce{CN^-}$`), or in
 * front of a word that means nothing at all (`$y = 2\x07utomatically$`). Neither
 * can be seen on screen, and the second leaves "utomatically" in a formula. So
 * in front of a real command the backslash goes back; in front of anything else
 * inside maths the word goes too, because no formula has a four-letter word that
 * is not a command. In prose only the character goes: the word may be real.
 *
 * Tab, newline and carriage return are ordinary whitespace and stay.
 */
const CONTROL_RUN = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]+([A-Za-z]*)/g;
const TERMINAL_CODE = /\u001B\[[?\d;]*[A-Za-z]/g;

export function clearControlChars(raw: string): string {
  if (raw.search(CONTROL_RUN) === -1) return raw;
  const text = raw.replace(TERMINAL_CODE, '');
  return text.replace(CONTROL_RUN, (_m, word: string, at: number) => {
    if (word && isLatexCommand(word)) return `\\${word}`;
    const inMath = (text.slice(0, at).split('$').length - 1) % 2 === 1;
    return inMath && word.length >= 4 ? '' : word;
  });
}

/** An `\overset` / `\underset` annotation that is a CHARGE rather than a remark: a sign,
 *  a signed number (`2+`), a partial charge (`δ+`), a circled sign, or a lone dot (a
 *  radical's electron). Tested on the converted text. */
const CHARGE_NOTE = /^(?:δ?[0-9]*[+\-−⁺⁻]|[⊕⊖]|[.·•∙])$/;

/**
 * The commands that print as a word and have no symbol: `\sin x`, `\ln a`, `\lim`.
 * They fall through to the unknown-command path, which keeps the letters, and that
 * path is where they are told apart from a command nobody knows.
 */
const FUNCTION_NAMES = new Set([
  'sin', 'cos', 'tan', 'cot', 'sec', 'csc', 'sinh', 'cosh', 'tanh', 'coth',
  'arcsin', 'arccos', 'arctan', 'arccot', 'arcsec', 'arccsc',
  'ln', 'log', 'lg', 'exp', 'lim', 'liminf', 'limsup', 'max', 'min', 'sup', 'inf',
  'det', 'gcd', 'arg', 'deg', 'dim', 'ker', 'hom', 'Pr',
]);

/**
 * What can end the thing a function name follows: a letter, a digit, a closing
 * bracket, a script (Unicode or drawn), a prime or a degree sign. Anything else (an
 * operator, a space, an opening bracket) already sets the name apart.
 */
const ATOM_END =
  /[A-Za-z0-9\u00B0\u00B2\u00B3\u00B9\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F\u02B0-\u02B8\u02E1-\u02E3\u0300-\u03FF\u141F\u1D43-\u1D5B\u1D62-\u1D65\u1D9C\u1DA0\u1DBB\u2032\u2033\u2070-\u209F\u210F\u2113\u2202\u2207\u221E\u230B\u2309\u27E9\uDC00-\uDFFF)\]}'\u000F\u0018]$/;

/** Glyphs that already sit raised on the line, so `^` around them would be
 *  doubling up — `45^\circ` is just "45°". */
const ALREADY_RAISED = new Set(['°', '′', '″']);

/** Glyphs that behave like letters rather than operators, so they bind to what
 *  follows: ΔH is one quantity, `2 × 10⁶` is three terms. Used only to decide
 *  whether a command's terminator space survives — see `SYMBOLS` below. */
const LETTER_LIKE = new Set([
  'α','β','γ','δ','ε','ζ','η','θ','ϑ','ι','κ','λ','μ','ν','ξ','π','ρ','σ','τ',
  'υ','φ','χ','ψ','ω','Γ','Δ','Θ','Λ','Ξ','Π','Σ','Υ','Φ','Ψ','Ω',
  'ℏ','ℓ','ℜ','ℑ','∞','∂','∇',
]);

/** The macron over ONE letter, and the overline that joins up with its neighbours. */
const COMBINING_MACRON = '\u0304';
const COMBINING_OVERLINE = '\u0305';

/** The vowels Unicode already has with a macron, so `\bar{a}` is one letter and
 *  not a letter with a loose mark behind it. Every other letter takes the mark. */
const MACRON_LETTERS: Record<string, string> = {
  A: 'Ā', a: 'ā', E: 'Ē', e: 'ē', I: 'Ī', i: 'ī', O: 'Ō', o: 'ō', U: 'Ū', u: 'ū',
};

const isCombining = (ch: string) => ch >= '\u0300' && ch <= '\u036F';

/**
 * A bar over `covered`: `\bar{x}` and `\overline{…}`.
 *
 * Both used to print the base bare, which is a different claim. `\overline{A \cdot B}`
 * is NAND and `A · B` is AND; `\overline{A + B} = \bar{A} \cdot \bar{B}` read
 * "A + B = A · B", which is the very law the line exists to state. And `0.\overline{3}`
 * is a third, where `0.3` is three tenths.
 *
 * `\bar{x}` is an accent, so ONE macron over ONE letter (`ν̄`, `Ā`). Anything longer is
 * a bar over the whole of it, which is how `\overline` always reads: the overline
 * mark goes behind every character, spaces inside the span included, because a bar
 * with gaps in it reads as separate bars (`Ā · B̄`) and the complement of the whole
 * is exactly what a De Morgan line is not saying. A bar over a bar is a second mark
 * on the same letter, which is what `\overline{\overline{A \cdot B}}` means.
 *
 * Only the characters on the line carry a mark. What the board draws as its own
 * piece (a script, a stacked fraction, a grid) is skipped, so a mark is never
 * pushed into a drawn piece, and nothing is emitted for an empty argument: a
 * combining mark with no base would print as a stray dotted circle.
 */
function drawBar(covered: string, accent: boolean): string {
  const text = covered.trim();
  const chars = Array.from(text);
  const letters = chars.filter((ch) => !isCombining(ch));
  if (accent && letters.length === 1 && letters[0] > '\u001F') {
    return (chars.length === 1 && MACRON_LETTERS[text]) || text + COMBINING_MACRON;
  }
  let out = '';
  /** Depth inside something the board draws as a piece of its own. */
  let apart = 0;
  for (let k = 0; k < chars.length; k += 1) {
    const ch = chars[k];
    out += ch;
    if (ch === SUB_OPEN || ch === SUP_OPEN || ch === FRAC_OPEN || ch === MATRIX_OPEN) apart += 1;
    else if (ch === SCRIPT_CLOSE || ch === FRAC_CLOSE || ch === MATRIX_CLOSE) apart = Math.max(0, apart - 1);
    // After the LAST mark a letter already carries, so a second bar stacks on the first.
    else if (apart === 0 && ch > '\u001F' && !isCombining(chars[k + 1] ?? '')) out += COMBINING_OVERLINE;
  }
  return out;
}

/** Reads a `{…}` group starting at `i` (which must point at `{`). Returns the
 *  inner text and the index just past the closing brace, brace-balanced so
 *  nested groups like `\frac{\frac{1}{2}}{3}` survive. */
function readGroup(src: string, i: number): { body: string; next: number } {
  if (src[i] === '\\') {
    // A command as the whole argument: `^\circ`, `_\alpha`. Without this the
    // lone backslash was consumed as the argument and the command name leaked
    // through as literal letters ("45^circ").
    const match = /^[a-zA-Z]+/.exec(src.slice(i + 1));
    if (match) return { body: `\\${match[0]}`, next: i + 1 + match[0].length };
  }
  if (src[i] !== '{') {
    // A single-character argument, e.g. `x^2` or `\vec v`.
    return { body: src[i] ?? '', next: i + 1 };
  }
  let depth = 0;
  for (let j = i; j < src.length; j++) {
    if (src[j] === '{') depth++;
    else if (src[j] === '}') {
      depth--;
      if (depth === 0) return { body: src.slice(i + 1, j), next: j + 1 };
    }
  }
  return { body: src.slice(i + 1), next: src.length };
}

/** Reads a `[…]` optional argument starting at `i` (which must point at `[`).
 *  Braces inside it are skipped over, so `[\text{low } T]` reads whole. Null when
 *  the bracket never closes, which leaves the caller on its old reading. */
function readOptional(src: string, i: number): { body: string; next: number } | null {
  let depth = 0;
  for (let j = i + 1; j < src.length; j += 1) {
    const ch = src[j];
    // An escaped character (`\]`, `\}`) opens and closes nothing.
    if (ch === '\\') j += 1;
    else if (ch === '{') depth += 1;
    else if (ch === '}') depth -= 1;
    else if (ch === ']' && depth === 0) return { body: src.slice(i + 1, j), next: j + 1 };
  }
  return null;
}

/** Maps every character through `table`, or returns null if any character has
 *  no equivalent — callers then fall back to a linear form. */
function mapAll(text: string, table: Record<string, string>): string | null {
  let out = '';
  for (const ch of text) {
    if (ch === ' ') continue;
    // Exact match only. This used to fall back to `table[ch.toLowerCase()]`,
    // which silently changed case: `N_A` (Avogadro) came out `Nₐ` and `P_A`
    // came out `Pₐ`, and a reader cannot tell whether the source said A or a.
    //
    // Worse, it was inconsistent WITHIN one formula. Unicode has no subscript
    // b, c, d, f, g, q, w, y or z, so `P_B` failed the whole-run test and
    // stayed literal — leaving `Pₐ` beside `P_B` in the same line of a
    // partial-pressure question. Literal on both sides is plainer and honest.
    const mapped = table[ch];
    if (!mapped) return null;
    out += mapped;
  }
  return out || null;
}

interface Script {
  kind: '^' | '_';
  /** Already converted, so `^\pi` arrives here as "π". */
  inner: string;
  next: number;
  /** Written in parentheses (`e^(-t/τ)`). The flat form then keeps them, so
   *  reading that flat form again gives it back instead of dropping a bracket. */
  paren?: boolean;
  /** The body held a fraction, which is written on the line (`1/(n+1)`) and so cannot be
   *  spelled in Unicode: Unicode has no raised or lowered slash worth the name. */
  hasFraction?: boolean;
}

/** Reads a `( … )` group starting at `i` (which must point at `(`), balanced so
 *  `(1/(n+1))` is one group. Null when it never closes or holds nothing, which
 *  leaves the caller on its old single-character reading. */
function readParen(src: string, i: number): { body: string; next: number } | null {
  let depth = 0;
  for (let j = i; j < src.length; j++) {
    if (src[j] === '(') depth++;
    else if (src[j] === ')') {
      depth--;
      if (depth === 0) {
        const body = src.slice(i + 1, j);
        return body.trim() ? { body, next: j + 1 } : null;
      }
    }
  }
  return null;
}

/** Where the one thing a bare radical covers ends: `√x`, `√2`, `√(x+1)`. Null
 *  when `√` is the last thing in the string or stands before something else. */
function radicandEnd(src: string, i: number): number | null {
  if (src[i] === '(') return readParen(src, i)?.next ?? null;
  const run = /^(?:[0-9]+(?:\.[0-9]+)?|[A-Za-z](?![A-Za-z0-9]))/.exec(src.slice(i));
  return run ? i + run[0].length : null;
}

/** Reads one `^…` / `_…`, starting at the marker itself. */
function readScript(src: string, at: number): Script {
  const kind = src[at] as '^' | '_';
  // `e^(-t/τ)`, `x^(1/3)`, `(b/a)^(1/(n+1))`: parentheses straight after a caret
  // are the exponent, the way a plain-text author writes one. LaTeX would raise
  // only the "(" and leave the rest on the line, which is never what was meant:
  // 13 stored board lines wrote exponents this way and showed the caret and both
  // brackets. Only a caret does this. An underscore followed by "(" is the
  // converter's OWN flat form ("I_(enc)"), and has to stay readable as itself.
  if (kind === '^' && src[at + 1] === '(') {
    const group = readParen(src, at + 1);
    if (group) return { kind, ...convertScriptBody(group.body), next: group.next, paren: true };
  }
  let i = at + 1;
  while (src[i] === ' ') i++;
  // `e^√x`: a radical and the one thing it covers are the exponent.
  if (kind === '^' && src[i] === '√') {
    const end = radicandEnd(src, i + 1);
    if (end !== null) return { kind, inner: convertMath(src.slice(i, end)), next: end };
  }
  // A run of digits, with its sign, is the whole script: `10^-7`, `K^-1`, `10^23`, `a_12`. Read one
  // character at a time, the minus alone was raised and the digits stayed on the line ("10⁻7", "10²3"):
  // 272 stored board lines and takeaways write exponents this way.
  const run = src[i] === '{' ? null : /^[-−+]?\d+/.exec(src.slice(i));
  const group = run ? { body: run[0], next: i + run[0].length } : readGroup(src, i);
  return { kind, ...convertScriptBody(group.body), next: group.next };
}

/**
 * The pairs of index letters that are an INDEX, not a word: `r_{ij}`, `a_{mn}`. Every
 * other run of letters in a subscript is a word (`top`, `rms`, `in`, `axial`).
 * The other way round does not work: `in` is made of index letters and means "input".
 */
const INDEX_PAIRS = new Set([
  'ij', 'ji', 'ik', 'ki', 'il', 'li', 'jk', 'kj', 'jl', 'lj', 'kl', 'lk', 'mn', 'nm',
]);

/**
 * A subscript that is a WORD: two or more letters and nothing else.
 *
 * Unicode has a subscript for a, e, h, i-m, n, o, p, r, s, t, u, v and x, so a word
 * made only of those (`top`, `rms`, `axial`) used to be spelled and any other (`bottom`,
 * `equatorial`) drawn, in the same expression: "yₜₒₚ − y⟦↓bottom⟧", "Eₐₓᵢₐₗ = 2 E⟦↓equatorial⟧".
 * Two notations for one kind of thing, decided by which letters the Unicode
 * block happens to have. A word is always drawn, so a line never mixes them: 507
 * of the 33,247 stored board lines held a word the old rule spelled. Digits,
 * signs, a single letter and mixed indices (`n+1`, `0`, `i`) are unchanged, and
 * so is the flat form.
 */
function isSubscriptWord(text: string): boolean {
  return /^[A-Za-z]{2,}$/.test(text) && !INDEX_PAIRS.has(text);
}

/**
 * The scripts on one base, as text. Spelled in Unicode when every one of them can be;
 * otherwise drawn (for `latexToSegments`) or written out flat with their marker (for
 * the plain-string callers), and in both of those the whole group goes together, so
 * a pair shares one size and baseline.
 */
function renderScripts(parts: Script[]): string {
  const spelled = parts.map((part) =>
    markSegments && (part.hasFraction || (part.kind === '_' && isSubscriptWord(part.inner)))
      ? null
      : mapAll(part.inner, part.kind === '^' ? SUPERSCRIPT : SUBSCRIPT),
  );
  if (spelled.every((part) => part !== null)) return spelled.join('');
  if (markSegments) {
    // No character exists for it, so it is drawn instead of spelled — and
    // its partner is drawn too, so the pair shares one size and baseline.
    return parts.map((part) => `${part.kind === '^' ? SUP_OPEN : SUB_OPEN}${part.inner}${SCRIPT_CLOSE}`).join('');
  }
  // Plain-string callers keep the marker so meaning isn't silently lost.
  return parts.map((part) => `${part.kind}${wrapScript(part.inner, part.paren)}`).join('');
}

/**
 * True when `text` already carries its own brackets around the WHOLE of it.
 *
 * "(a)(b)" opens and closes with brackets without being one group, so this
 * checks that the first bracket is the one the last character closes.
 */
function isBracketed(text: string): boolean {
  const shut = { '(': ')', '[': ']', '{': '}' }[text[0] as '(' | '[' | '{'];
  if (!shut || text[text.length - 1] !== shut) return false;
  let depth = 0;
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === text[0]) depth += 1;
    else if (text[i] === shut) {
      depth -= 1;
      if (depth === 0) return i === text.length - 1;
    }
  }
  return false;
}

/** Parenthesises a multi-character script so `x_net` cannot be read as
 *  `x_n` followed by "et" — unless it is bracketed already, which is what
 *  printed `E_{(Cu)}` as the doubled-up `E_((Cu))`.
 *
 *  A script the author already wrote in parentheses (`x^(A)`) keeps them even
 *  when it is one character, because that flat form is read back as a bracketed
 *  argument: without them `x^(A)` came back as `x^A`, so converting the
 *  converter's own output was not a no-op. */
function wrapScript(inner: string, written = false): string {
  return !written && (inner.length <= 1 || isBracketed(inner)) ? inner : `(${inner})`;
}

/**
 * The body of one `\ce{…}`, in mhchem notation rather than LaTeX.
 *
 * Chemistry is written in its own sub-language: `2H2O` means 2H₂O, `->` is an
 * arrow, `^2-` is a charge. None of that is LaTeX, so the ordinary converter
 * never had a rule for it and `\ce` fell through to the unknown-command path,
 * which drops the backslash and prints the name — a live d-block question read
 * "ce2AgNO3 xrightarrow485 K Product(s)". Chemistry is roughly a quarter of the
 * question bank, so this is not a rare corner.
 *
 * The one rule worth stating: a digit is a SUBSCRIPT when it follows an element
 * or a closing bracket, and a stoichiometric COEFFICIENT when it opens a
 * species. That is the whole difference between 2H₂O (two waters) and H₂O₂
 * (peroxide), so it cannot be approximated by subscripting every digit.
 */
function renderChem(body: string): string {
  let out = '';
  let i = 0;
  /** Set by an element or a closing bracket, cleared by anything that starts a
   *  new species — so the next digit run knows which kind it is. */
  let digitsAreSubscript = false;

  while (i < body.length) {
    const ch = body[i];

    // A nested command — `\Delta`, `\cdot`, `\alpha`. Handed to the ordinary
    // converter so chemistry needs no second symbol table of its own.
    if (ch === '\\') {
      const name = /^[a-zA-Z]+/.exec(body.slice(i + 1));
      if (!name) {
        i += 1;
        continue;
      }
      // A wrapper takes its argument with it. `\text{base}` in an arrow's label was
      // handed over as a bare `\text`, which prints nothing, and the braces after
      // it were left behind as "({base})", "({then } H₃O⁺)", "({dry HCl})".
      if (TRANSPARENT_WRAPPERS.has(name[0]) && name[0] !== 'left' && name[0] !== 'right') {
        let at = i + 1 + name[0].length;
        while (body[at] === ' ') at += 1;
        if (body[at] === '{') {
          const group = readGroup(body, at);
          out += convertMath(`\\${name[0]}{${group.body}}`);
          i = group.next;
          digitsAreSubscript = false;
          continue;
        }
      }
      out += convertMath(`\\${name[0]}`);
      i += 1 + name[0].length;
      digitsAreSubscript = false;
      continue;
    }

    // An arrow, with up to two bracketed conditions, written after it in
    // brackets the way `\xrightarrow[below]{above}` is. The two conditions are
    // joined with "/" here, as they have been in every stored `\ce` line; the
    // LaTeX spelling joins them with ", ".
    const arrow = CHEM_ARROWS.find(([literal]) => body.startsWith(literal, i));
    if (arrow) {
      i += arrow[0].length;
      const labels: string[] = [];
      while (body[i] === '[') {
        const close = body.indexOf(']', i);
        if (close === -1) break;
        labels.push(renderChem(body.slice(i + 1, close)).trim());
        i = close + 1;
      }
      const label = labels.filter(Boolean).join('/');
      out += label ? ` ${arrow[1]}(${label}) ` : ` ${arrow[1]} `;
      digitsAreSubscript = false;
      continue;
    }

    // A charge (`^2-`, `^{2-}`, `^+`) or an isotope's mass/atomic number
    // (`^{227}_{90}Th`). Unbraced charges run digits-then-sign, which is why
    // this cannot just call readGroup and take one character.
    if (ch === '^' || ch === '_') {
      let raw: string;
      if (body[i + 1] === '{' || body[i + 1] === '\\') {
        // `^{\delta+}`, and `^\circ` with no braces at all: readGroup takes a
        // command as the whole argument.
        const group = readGroup(body, i + 1);
        raw = group.body;
        i = group.next;
      } else {
        raw = /^[0-9]*[+\-−]?/.exec(body.slice(i + 1))?.[0] ?? '';
        i += 1 + raw.length;
      }
      const table = ch === '^' ? SUPERSCRIPT : SUBSCRIPT;
      // A command in the argument is converted first. `mapAll` has no entry for a
      // backslash, so `C^{\delta+}=O^{\delta-}` (the partial charges on a carbonyl)
      // went through whole and printed "C^\delta+=O^\delta-", and `(1^\circ)` kept
      // its caret: "(1^°)".
      const inner = raw.includes('\\') ? convertMath(raw) : raw;
      const spelled = mapAll(inner, table);
      if (spelled !== null) out += spelled;
      // Already raised, as `45^\circ` is outside \ce.
      else if (ch === '^' && ALREADY_RAISED.has(inner)) out += inner;
      // No Unicode character for it (there is no superscript δ): drawn, the way
      // every other script Unicode cannot spell is, rather than written out flat.
      else if (inner && markSegments) out += `${ch === '^' ? SUP_OPEN : SUB_OPEN}${inner}${SCRIPT_CLOSE}`;
      else out += inner ? `${ch}${wrapScript(inner)}` : ch;
      continue;
    }

    if (/[0-9]/.test(ch)) {
      const run = /^[0-9]+/.exec(body.slice(i))?.[0] ?? ch;
      i += run.length;
      out += digitsAreSubscript ? mapAll(run, SUBSCRIPT) ?? run : run;
      continue;
    }

    out += ch;
    i += 1;
    // A bracket that CLOSES counts as an element for this purpose: the 2 in
    // (NH4)2 is a subscript, while the one opening `(s)` is not.
    if (/[A-Za-z)\]}]/.test(ch)) digitsAreSubscript = true;
    else if (!/\s/.test(ch)) digitsAreSubscript = false;
  }

  // The arrows above pad themselves, and the source usually spaces them too
  // (`2H2 + O2 -> 2H2O`), which left a double gap either side. The normalizing
  // pass that would have collapsed it already ran, long before this point.
  return out.replace(/\s{2,}/g, ' ');
}

/** True when `text` is a single term, so it needs no parens in `a/b`. */
function isAtomic(text: string): boolean {
  return !/[+\-−=<>\s]/.test(text.trim());
}

/**
 * Marks a fraction inside an otherwise-plain string, for callers that can draw
 * one properly.
 *
 * Unicode can only really spell a fraction when both halves are digits (¹⁄₂),
 * and everything else has to fall back to a linear `a/b` — `h/mv`, spelled in
 * super- and subscripts, came out as the unreadable "ʰ⁄ₘᵥ". A stacked
 * numerator over denominator needs a view, not a character, so `latexToText`
 * cannot express it and `latexToSegments` exists to hand the pieces to
 * `MathLine`. These are control characters no real content contains.
 */
const FRAC_OPEN = '\u0011';
const FRAC_SEP = '\u0012';
const FRAC_CLOSE = '\u0013';
/**
 * Marks a run that came from maths — `$…$`, `\(…\)`, or a bare `\command`.
 *
 * Once converted to Unicode, `2π n` is indistinguishable from prose, so a
 * formula was set in the prose weight when it sat inside a sentence and in the
 * maths weight when it happened to occupy a line of its own. Same formula, two
 * appearances, decided by where it fell. Keeping the boundary lets one voice
 * cover both.
 */
const MATH_OPEN = '\u0014';
const MATH_CLOSE = '\u0015';
/**
 * A script Unicode cannot spell.
 *
 * The subscript alphabet stops at `a e h i j k l m n o p r s t u v x` — there
 * is no subscript `y`, `b`, `c`, `d`, `f`, `g`, `q`, `w` or `z`. So `v_x` came
 * out as `vₓ` and `v_y` fell back to a literal `v_y` in the same sentence:
 * one formula, two spellings, decided by which letters happen to exist in a
 * character table. Marked here and drawn small-and-lowered by `MathLine`, the
 * same way a fraction Unicode cannot spell is drawn rather than flattened.
 */
const SUB_OPEN = '\u0016';
const SUP_OPEN = '\u0017';
const SCRIPT_CLOSE = '\u0018';

/**
 * Set only for the duration of one synchronous `latexToSegments` call, which
 * is why a module-level flag is safe here: nothing awaits in between, so no
 * second conversion can observe it.
 */
/**
 * A matrix, kept as a grid rather than flattened.
 *
 * Two dimensions need a view, not a character, so `latexToText` degrades one to
 * `[a  b ; c  d]` -- a semicolon between rows, because that is how it would be
 * dictated. Measured over the bank, 2.9% of stems hold one, which is often
 * enough that a determinant question reads as punctuation.
 *
 * The delimiters ride inside the marker: exactly two characters after
 * MATRIX_OPEN, a space standing for "none" (`cases` opens a brace and never
 * closes it). No delimiter is ever a space, so the slot cannot be misread.
 */
/**
 * Emphasis inside prose.
 *
 * Solutions mark the one term a step actually turns on — the law being
 * applied, the quantity that must be the TOTAL and not the part. Stored as
 * `<b>…</b>` because that cannot collide with maths the way `**` or `\textbf`
 * can: `\textbf` is a TRANSPARENT_WRAPPER used throughout the question bank
 * for typesetting, and repurposing it would bold things no one asked to bold.
 *
 * Converted to markers here so BOTH entry points agree: `latexToText` strips
 * them (a plain <Text> must never print a literal tag) and `latexToSegments`
 * turns them into `bold` runs.
 */
const BOLD_OPEN = '\u001D';
const BOLD_CLOSE = '\u001E';

const MATRIX_OPEN = '\u0019';
const MATRIX_CELL = '\u001A';
const MATRIX_ROW = '\u001B';
const MATRIX_CLOSE = '\u001C';

/**
 * A fraction written on the line, `a/b`, because it sits inside something the board
 * already draws small: a half of a stacked fraction, or a script.
 *
 * Stacking it would make a three-deck tower out of one line of working, so it was
 * flattened to `(a)/(b)` — which read wrongly twice over. `\sin\tfrac{\theta}{2}` became
 * "sin(θ)/(2)", which is sin θ over 2, and `r^{\frac{1}{n+1}}` kept the fraction's own
 * control characters in the drawn exponent and showed "1n+1". The marker is resolved
 * by whatever converted the half or the script (`resolveInline`), because only
 * there is the text either side of the fraction known.
 */
const INLINE_OPEN = '\u000E';
const INLINE_CLOSE = '\u000F';

/** How many halves and scripts the conversion is inside. Set only while a
 *  `latexToSegments` call is converting one, like `markSegments`. */
let inlineDepth = 0;

let markSegments = false;

/** `a/b`, bracketing a part only when it is more than one term. A numerator may keep a
 *  leading sign (`-1/2`); a denominator may not (`1/(-2)`). */
function inlineFraction(num: string, den: string): string {
  return `${isSingleTerm(num, true) ? num : `(${num})`}/${isSingleTerm(den, false) ? den : `(${den})`}`;
}

/** No operator, space or slash outside brackets or a drawn script. */
function isSingleTerm(text: string, allowSign: boolean): boolean {
  let depth = 0;
  const chars = Array.from(text.trim());
  for (let k = 0; k < chars.length; k += 1) {
    const ch = chars[k];
    if ('([{'.includes(ch) || ch === SUB_OPEN || ch === SUP_OPEN) depth += 1;
    else if (')]}'.includes(ch) || ch === SCRIPT_CLOSE) depth = Math.max(0, depth - 1);
    else if (depth === 0 && /[\s+\-−±∓×·÷=<>,/]/.test(ch) && !(allowSign && k === 0 && /[+\-−]/.test(ch))) return false;
  }
  return true;
}

/** Everything a function name may carry before its argument: Unicode or drawn scripts. */
const FUNCTION_TAIL = new RegExp(
  `(?:^|[^A-Za-z])(?:${[...FUNCTION_NAMES].join('|')})` +
    `(?:[${Object.values(SUPERSCRIPT).concat(Object.values(SUBSCRIPT)).filter((glyph) => glyph !== '·').join('')}]` +
    `|[\u0016\u0017][^\u0018]*\u0018)*[ \u00A0]*$`,
);

/** What starts the next factor of a product: a letter, a digit, a bracket, a radical, a script. */
const FACTOR_START =
  /^[A-Za-z0-9\u00B2\u00B3\u00B9\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F\u02B0-\u02B8\u02E1-\u02E3\u0370-\u03FF\u1D43-\u1D5B\u1D62-\u1D65\u2032\u2033\u2070-\u209F\u221A\u2211\u220F\u222B([/'\u000E\u0016\u0017]/;

/**
 * Takes the inline markers out of `text`, writing each fraction on the line.
 *
 * A fraction is bracketed when it touches another factor, on either side and
 * spaces or not, because `1/2mv²` and `1/2 sin x` read as 1 over 2mv² and 1 over
 * 2 sin x. It is bracketed when it is a function's argument for the same reason, so
 * `\sin\tfrac{\theta}{2}` is "sin(θ/2)". Alone in its half or script, or beside an
 * operator, a bracket or the end, it is left bare: `θ/2`, `1/(n+1)`, `(a+b)/2`.
 */
function resolveInline(text: string): string {
  if (!text.includes(INLINE_OPEN)) return text;
  let out = '';
  let at = 0;
  while (at < text.length) {
    const open = text.indexOf(INLINE_OPEN, at);
    if (open === -1) {
      out += text.slice(at);
      break;
    }
    const close = text.indexOf(INLINE_CLOSE, open);
    out += text.slice(at, open);
    if (close === -1) {
      out += text.slice(open + 1);
      break;
    }
    const written = text.slice(open + 1, close);
    const before = out.replace(/[ \u00A0]+$/, '');
    const after = text.slice(close + 1).replace(/^[ \u00A0]+/, '');
    const touching =
      ATOM_END.test(before) || before.endsWith('/') || FUNCTION_TAIL.test(out) || FACTOR_START.test(after);
    out += touching ? `(${written})` : written;
    at = close + 1;
  }
  return out;
}

/** The body of a script, converted. A fraction inside it is written on the line. */
function convertScriptBody(body: string): { inner: string; hasFraction?: boolean } {
  if (!markSegments) return { inner: convertMath(body) };
  inlineDepth += 1;
  try {
    const converted = convertMath(body);
    return {
      inner: resolveInline(converted),
      ...(converted.includes(INLINE_OPEN) ? { hasFraction: true } : {}),
    };
  } finally {
    inlineDepth -= 1;
  }
}

function renderFraction(rawNum: string, rawDen: string): string {
  if (markSegments) {
    // Inside another half or a script, it is written on the line; at the top it stacks.
    const nested = inlineDepth > 0;
    let num: string;
    let den: string;
    inlineDepth += 1;
    try {
      num = resolveInline(convertMath(rawNum));
      den = resolveInline(convertMath(rawDen));
    } finally {
      inlineDepth -= 1;
    }
    return nested
      ? `${INLINE_OPEN}${inlineFraction(num, den)}${INLINE_CLOSE}`
      : `${FRAC_OPEN}${num}${FRAC_SEP}${den}${FRAC_CLOSE}`;
  }
  const num = convertMath(rawNum);
  const den = convertMath(rawDen);
  // ¹⁄₂ reads as a real fraction for *numbers* only. Letters have patchy
  // super/subscript coverage in Unicode and render as an unreadable jumble
  // (h/mv became "ʰ⁄ₘᵥ"), so anything non-numeric uses the linear form.
  if (/^\d+$/.test(num) && /^\d+$/.test(den)) {
    return `${mapAll(num, SUPERSCRIPT)}⁄${mapAll(den, SUBSCRIPT)}`;
  }
  const left = isAtomic(num) ? num : `(${num})`;
  const right = isAtomic(den) ? den : `(${den})`;
  return `${left}/${right}`;
}

/**
 * Whether a linear fraction needs wrapping because another factor follows it.
 *
 * `renderFraction` decides its own parentheses from `isAtomic`, which can only
 * see the fraction's two halves. It cannot see what comes after — so
 * `-\dfrac{e\vec{E}}{m}\tau` rendered as `-eE/mτ`, which reads as eE over mτ
 * and means (eE/m)·τ. Live on a drift-velocity board, so not hypothetical.
 *
 * Only the linear form needs this. Under `markSegments` the fraction is drawn
 * as a fraction, where a following factor cannot be misread into the
 * denominator, so that path is left exactly as it is.
 *
 * Guarded narrowly otherwise: to a factor sitting directly against the closing
 * brace with no space between. `a/b + c` and `a/b = c` are unambiguous and stay
 * bare, and so does anything separated by a space, where the spacing already
 * does the reading. The numeric ¹⁄₂ form is a single glyph and cannot be
 * re-parsed, so it is left alone too.
 */
function fractionNeedsGuard(rendered: string, src: string, next: number): boolean {
  if (markSegments) return false;
  if (!rendered.includes('/')) return false;
  return /[A-Za-z0-9\\(]/.test(src[next] ?? '');
}

/**
 * A piece of a fraction's half or of a script: plain text, or a script to draw lowered/raised.
 *
 * `parts` is present only when that script holds another one drawn inside it (the `2g` in
 * `n_{t_{2g}}`), and carries the script's own pieces in turn, to any depth. `text` is always the
 * whole of it flattened ("t2g"), which is what a reader that cannot nest should draw.
 */
export type ScriptPart = { text: string; script?: 'sub' | 'sup'; parts?: ScriptPart[] };

/** One run of a converted line. */
export type MathSegment =
  /** Prose. `bold` marks a `<b>…</b>` run the solution author emphasised. */
  | { kind: 'text'; text: string; bold?: boolean }
  /** Came from maths — set in the maths voice wherever it appears. */
  | { kind: 'math'; text: string; bold?: boolean }
  /**
   * A sub- or superscript with no Unicode character to spell it.
   *
   * `text` is the script flattened. When another script is drawn INSIDE it (`n_{t_{2g}}` is `n`,
   * a subscript holding `t`, and inside that a subscript `2g`), `parts` lays the inside out the way
   * a fraction half's `numeratorParts` does: `[{ text: 't' }, { text: '2g', script: 'sub' }]`.
   * A script with nothing drawn inside it has no `parts`.
   */
  | { kind: 'sub'; text: string; parts?: ScriptPart[] }
  | { kind: 'sup'; text: string; parts?: ScriptPart[] }
  | {
      kind: 'fraction';
      numerator: string;
      denominator: string;
      /** Present only when that half carries a script Unicode cannot spell
       *  (R_T, R_{AB}); the half is then drawn from these pieces. Without them
       *  `numerator` has the script's markers stripped and reads "RT". */
      numeratorParts?: ScriptPart[];
      denominatorParts?: ScriptPart[];
    }
  /** A grid, with the delimiters it is written between. */
  | { kind: 'matrix'; rows: string[][]; open: string; close: string };

/** The superscript characters a stored line can carry, and the plain character each one stands for. */
const LITERAL_SUPERSCRIPT: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁺': '+', '⁻': '−', 'ⁿ': 'n',
};
const LITERAL_SUPERSCRIPT_RUN = /[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ]+/;

/**
 * A real superscript character straight after a DRAWN subscript is that subscript's partner.
 *
 * `X_L²` has a literal ² beside the subscript L, and Unicode has no subscript L, so the L is
 * drawn and the ² was left floating after it: "X⟦↓L⟧²", with the exponent set off from the base
 * it belongs to. It is X with a subscript L and a superscript 2, which is what `X_L^2` already
 * draws. So the run of superscript characters (⁰-⁹ ⁺ ⁻ ⁿ) becomes a drawn superscript right
 * behind the subscript, written with the plain characters. Nothing else moves: a subscript
 * Unicode can spell (`Xₙ²`, both spelled), a superscript after anything but a drawn subscript,
 * and a superscript that a space, a maths boundary or another marker separates from the
 * subscript are all as they were. The plain-string form has no drawn subscript and is untouched.
 */
function attachLiteralSuperscripts(marked: string): string {
  if (!LITERAL_SUPERSCRIPT_RUN.test(marked)) return marked;
  let out = '';
  /** The scripts open at this point, the innermost last. */
  const open: string[] = [];
  for (let k = 0; k < marked.length; k += 1) {
    const ch = marked[k];
    out += ch;
    if (ch === SUB_OPEN || ch === SUP_OPEN) {
      open.push(ch);
    } else if (ch === SCRIPT_CLOSE && open.pop() === SUB_OPEN) {
      let end = k + 1;
      let raised = '';
      while (end < marked.length && Object.prototype.hasOwnProperty.call(LITERAL_SUPERSCRIPT, marked[end])) {
        raised += LITERAL_SUPERSCRIPT[marked[end]];
        end += 1;
      }
      if (raised) {
        out += `${SUP_OPEN}${raised}${SCRIPT_CLOSE}`;
        k = end - 1;
      }
    }
  }
  return out;
}

/**
 * The same conversion `latexToText` does, but with fractions kept as pieces
 * rather than flattened into `a/b`.
 *
 * Everything that renders a solution goes through this; anything that needs a
 * plain string — a Library card, the search haystack, the utterance that seeds
 * a Drona session — keeps using `latexToText`.
 */
export function latexToSegments(raw: string): MathSegment[] {
  markSegments = true;
  let marked: string;
  try {
    marked = attachLiteralSuperscripts(latexToText(raw));
  } finally {
    markSegments = false;
  }

  const segments: MathSegment[] = [];
  let buffer = '';
  let inMath = 0;
  let inBold = 0;
  const flush = () => {
    if (!buffer) return;
    segments.push({
      kind: inMath > 0 ? 'math' : 'text',
      text: buffer,
      ...(inBold > 0 ? { bold: true } : {}),
    });
    buffer = '';
  };

  for (let i = 0; i < marked.length; i += 1) {
    const ch = marked[i];
    if (ch === BOLD_OPEN) {
      flush();
      inBold += 1;
      continue;
    }
    if (ch === BOLD_CLOSE) {
      flush();
      inBold = Math.max(0, inBold - 1);
      continue;
    }
    if (ch === MATH_OPEN) {
      flush();
      inMath += 1;
      continue;
    }
    if (ch === MATH_CLOSE) {
      flush();
      inMath = Math.max(0, inMath - 1);
      continue;
    }
    if (ch === SUB_OPEN || ch === SUP_OPEN) {
      const close = scriptCloseAt(marked, i);
      if (close === -1) {
        buffer += ch;
        continue;
      }
      flush();
      const body = marked.slice(i + 1, close);
      const inside = scriptParts(body);
      segments.push({
        kind: ch === SUB_OPEN ? 'sub' : 'sup',
        text: strip(body),
        ...(inside ? { parts: inside } : {}),
      });
      i = close;
      continue;
    }
    if (ch === MATRIX_OPEN) {
      const end = marked.indexOf(MATRIX_CLOSE, i);
      if (end === -1) {
        buffer += ch;
        continue;
      }
      flush();
      // Two characters of delimiter, then the grid — see MATRIX_OPEN.
      const openDelim = marked[i + 1] === ' ' ? '' : marked[i + 1];
      const closeDelim = marked[i + 2] === ' ' ? '' : marked[i + 2];
      segments.push({
        kind: 'matrix',
        open: openDelim,
        close: closeDelim,
        rows: marked
          .slice(i + 3, end)
          .split(MATRIX_ROW)
          .map((row) => row.split(MATRIX_CELL)),
      });
      i = end;
      continue;
    }
    if (ch === FRAC_OPEN) {
      const sep = marked.indexOf(FRAC_SEP, i);
      const close = marked.indexOf(FRAC_CLOSE, sep);
      if (sep === -1 || close === -1) {
        buffer += ch;
        continue;
      }
      flush();
      const numeratorParts = scriptParts(marked.slice(i + 1, sep));
      const denominatorParts = scriptParts(marked.slice(sep + 1, close));
      segments.push({
        kind: 'fraction',
        numerator: strip(marked.slice(i + 1, sep)),
        denominator: strip(marked.slice(sep + 1, close)),
        ...(numeratorParts ? { numeratorParts } : {}),
        ...(denominatorParts ? { denominatorParts } : {}),
      });
      i = close;
      continue;
    }
    buffer += ch;
  }
  flush();
  return segments;
}

/**
 * Where the script opened at `open` (a SUB_OPEN or SUP_OPEN) ends: the SCRIPT_CLOSE that matches
 * it, counting the scripts drawn inside it. `n_{t_{2g}}` is two opens and two closes, and the
 * first close belongs to the INNER one: pairing an open with the first close after it ended the
 * outer script early and left its own close on the line as a control character (U+0018) in the
 * text a student reads, on nine stored formulas. -1 when it never closes.
 */
function scriptCloseAt(marked: string, open: number): number {
  let depth = 0;
  for (let k = open; k < marked.length; k += 1) {
    const ch = marked[k];
    if (ch === SUB_OPEN || ch === SUP_OPEN) depth += 1;
    else if (ch === SCRIPT_CLOSE) {
      depth -= 1;
      if (depth === 0) return k;
    }
  }
  return -1;
}

/**
 * A fraction half, or the inside of a script, split into text and scripts, or undefined when it
 * has no script to draw. A half used to be flattened with `strip`, which drops the script
 * markers and jams the script onto its base: `\\dfrac{R_T - R_0}{R_0}` read "RT − R₀"
 * over "R₀", on 201 stored board formulas.
 *
 * A script that holds another (`n_{t_{2g}}`) carries it as its own `parts`, to any depth.
 */
function scriptParts(marked: string): ScriptPart[] | undefined {
  const parts: ScriptPart[] = [];
  let buffer = '';
  let any = false;
  for (let i = 0; i < marked.length; i += 1) {
    const ch = marked[i];
    if (ch === SUB_OPEN || ch === SUP_OPEN) {
      const close = scriptCloseAt(marked, i);
      if (close !== -1) {
        if (buffer) parts.push({ text: strip(buffer) });
        buffer = '';
        const body = marked.slice(i + 1, close);
        const inside = scriptParts(body);
        parts.push({
          text: strip(body),
          script: ch === SUB_OPEN ? 'sub' : 'sup',
          ...(inside ? { parts: inside } : {}),
        });
        any = true;
        i = close;
        continue;
      }
    }
    buffer += ch;
  }
  if (buffer) parts.push({ text: strip(buffer) });
  return any ? parts : undefined;
}

/** A fraction's halves are rendered as plain text, so any marker that rode
 *  along inside them would show up as a control character. */
/** A matrix cell renders as plain text, so any marker inside it is spelled
 *  out rather than drawn -- a fraction becomes `(a)/(b)`, a nested grid its
 *  linear form. */
function flattenMarkers(text: string): string {
  let out = strip(resolveInline(text));
  // Rebuilt the way `renderFraction`'s own linear branch does it, rather than
  // wrapping both halves unconditionally: a half that is a single term needs
  // no brackets, and `1/2` beats `(1)/(2)` inside an already-small cell.
  for (let guard = 0; out.includes(FRAC_OPEN) && guard < 20; guard += 1) {
    const open = out.indexOf(FRAC_OPEN);
    const sep = out.indexOf(FRAC_SEP, open);
    const close = out.indexOf(FRAC_CLOSE, sep);
    if (sep === -1 || close === -1) break;
    const half = (part: string) => (isAtomic(part) ? part : `(${part})`);
    out =
      out.slice(0, open) +
      `${half(out.slice(open + 1, sep))}/${half(out.slice(sep + 1, close))}` +
      out.slice(close + 1);
  }
  return out;
}

function strip(text: string): string {
  return text
    .split(MATH_OPEN).join('')
    .split(MATH_CLOSE).join('')
    .split(INLINE_OPEN).join('')
    .split(INLINE_CLOSE).join('')
    .split(SUB_OPEN).join('')
    .split(SUP_OPEN).join('')
    .split(SCRIPT_CLOSE).join('')
    .split(MATRIX_OPEN).join('')
    .split(MATRIX_CELL).join(' ')
    .split(MATRIX_ROW).join(' ; ')
    .split(MATRIX_CLOSE).join('');
}

/** Converts the body of one math segment (already stripped of its `$`). */
/**
 * SPACES AROUND A SCRIPT ARE TYPING, NOT SPACING. Question banks often write a
 * power as `10 ^ { - 7 }`: in LaTeX the spaces are meaningless and it sets as
 * 10⁻⁷, but read literally they left "10 ⁻⁷" — a gap between the number and
 * its power, in every option a student had to compare. Spaces before a caret
 * or an underscore, after it, and just inside the braces that follow it are
 * dropped; a sign and its digits inside the braces are closed up.
 */
function tightenScripts(src: string): string {
  return src
    .replace(/([A-Za-z0-9)}\]])\s+([\^_])/g, '$1$2')
    .replace(/([\^_])\s+/g, '$1')
    .replace(/([\^_])\{\s*([+\-−]?)\s*([^{}]*?)\s*\}/g, '$1{$2$3}');
}

export function convertMath(src: string): string {
  src = tightenScripts(src);
  let out = '';
  let i = 0;

  while (i < src.length) {
    const ch = src[i];

    if (ch === '\\') {
      const match = /^[a-zA-Z]+/.exec(src.slice(i + 1));
      if (!match) {
        const next = src[i + 1];
        // LaTeX's explicit spacings. `\,` is a thin space, not a comma —
        // "8\,\text{H}" was rendering as "8, H", and "8\ \text{H}" as "8H",
        // both of which put the unit in the wrong place.
        if (next && next in SPACING) {
          const gap = SPACING[next];
          // LaTeX ignores literal whitespace either side of a spacing command,
          // so `\sin x \, dx` is ONE gap. Appending on top of the source's own
          // spaces made it three ("sin x   dx"). The collapsing pass that would
          // have tidied it runs before this function, not after.
          if (gap && !/\s$/.test(out)) out += gap;
          i += 2;
          if (gap) while (src[i] === ' ') i += 1;
          continue;
        }
        // Escaped punctuation (\%, \$, \{) — emit the character itself.
        if (next && next !== ' ') out += next;
        i += next ? 2 : 1;
        continue;
      }
      const name = match[0];
      i += 1 + name.length;

      if (name === 'frac' || name === 'dfrac' || name === 'tfrac') {
        while (src[i] === ' ') i++;
        const numGroup = readGroup(src, i);
        i = numGroup.next;
        while (src[i] === ' ') i++;
        const denGroup = readGroup(src, i);
        i = denGroup.next;
        const fraction = renderFraction(numGroup.body, denGroup.body);
        out += fractionNeedsGuard(fraction, src, i) ? `(${fraction})` : fraction;
        continue;
      }

      /**
       * `\xrightarrow{condition}` — an arrow carrying the step's justification
       * above it, used all through the Class 12 derivations ("…= 0
       * \xrightarrow{I_g = 0} I₁P = I₂R"). Nothing can sit above a glyph in
       * linear text, so the condition follows the arrow in brackets, which is
       * how it would be read aloud.
       */
      /**
       * `\begin{vmatrix} … \end{vmatrix}` — the cross-product determinants.
       * A matrix cannot be stacked in a single line of text, so it degrades to
       * the linear form it would be dictated in: rows separated by semicolons
       * inside the delimiter the environment names. Readable beats absent, and
       * absent is what leaking "begin" into the middle of an equation is.
       */
      if (name === 'begin') {
        while (src[i] === ' ') i++;
        const env = readGroup(src, i);
        i = env.next;
        const kind = env.body.trim().replace(/\*$/, '');
        // `array` and `tabular` carry a column spec — `\begin{array}{cl}`.
        // That is layout, not content; left in the body it reached students as
        // the letters "cl" glued to the first cell.
        if (kind === 'array' || kind === 'tabular') {
          while (src[i] === ' ') i++;
          if (src[i] === '{') i = readGroup(src, i).next;
        }
        const close = `\\end{${env.body.trim()}}`;
        const at = src.indexOf(close, i);
        const body = at === -1 ? src.slice(i) : src.slice(i, at);
        i = at === -1 ? src.length : at + close.length;

        const cells = body
          .split(/\\\\/)
          .map((row) =>
            row
              .split('&')
              .map((cell) => convertMath(cell).trim())
              .filter(Boolean)
          )
          .filter((row) => row.length);
        const WRAP: Record<string, [string, string]> = {
          vmatrix: ['|', '|'],
          Vmatrix: ['‖', '‖'],
          pmatrix: ['(', ')'],
          bmatrix: ['[', ']'],
          Bmatrix: ['{', '}'],
          cases: ['{', ''],
        };
        const [open, shut] = WRAP[kind] ?? ['', ''];
        if (markSegments && cells.length) {
          // A matrix inside a matrix cell stays linear, the same call
          // `renderFraction` makes for a nested fraction: stacking it would
          // build a grid of grids out of one line of working.
          out +=
            MATRIX_OPEN +
            (open || ' ') +
            (shut || ' ') +
            cells.map((row) => row.map(flattenMarkers).join(MATRIX_CELL)).join(MATRIX_ROW) +
            MATRIX_CLOSE;
          continue;
        }
        out += `${open}${cells.map((row) => row.join('  ')).join(' ; ')}${shut}`;
        continue;
      }

      if (Object.prototype.hasOwnProperty.call(LABELLED_ARROWS, name)) {
        while (src[i] === ' ') i++;
        const arrow = LABELLED_ARROWS[name];
        // `\xrightarrow[below]{above}`: the OPTIONAL argument comes first and is read
        // first. Taken as the argument itself, the lone "[" was the whole label and
        // everything after it was left on the line: five Class 12 reactions read
        // "→([) 573 K]Cu", "→([) hot]NH₂NH₂, KOH/glycol".
        const below = src[i] === '[' ? readOptional(src, i) : null;
        if (below) {
          i = below.next;
          while (src[i] === ' ') i++;
        }
        const group = readGroup(src, i);
        i = group.next;
        if (below) {
          // Above, then below, each with its own spacing tidied: `\text{low } T` is
          // "low  T" once converted, and a condition is one phrase.
          const label = [group.body, below.body]
            .map((part) => convertMath(part).replace(/\s+/g, ' ').trim())
            .filter(Boolean)
            .join(', ');
          // One space either side, however the source spaced it. The unlabelled form
          // below pads unconditionally; this one has no lines to stay level with.
          const lead = out === '' || /\s$/.test(out) ? '' : ' ';
          while (src[i] === ' ') i++;
          out += `${lead}${arrow}${label ? `(${label})` : ''}${i < src.length ? ' ' : ''}`;
          continue;
        }
        const label = convertMath(group.body).trim();
        // Parenthesised to match the pre-pass in `latexToText`, which is the
        // handler that catches this same command whenever its argument has no
        // nested braces. Two spellings of one arrow was the only difference
        // between `\xrightarrow{Ni}` and `\xrightarrow{\text{Ni}}`.
        out += label ? ` ${arrow}(${label}) ` : ` ${arrow} `;
        continue;
      }

      /**
       * `\underbrace{expr}_{label}` — a brace under part of an equation naming
       * what it is ("hν (energy in) = φ₀ (exit fee) + K_max (KE out)"). The
       * label becomes a parenthetical, so the naming survives even though the
       * brace cannot be drawn.
       */
      if (name === 'underbrace' || name === 'overbrace') {
        while (src[i] === ' ') i++;
        const group = readGroup(src, i);
        i = group.next;
        const body = convertMath(group.body);
        let label = '';
        while (src[i] === ' ') i++;
        if (src[i] === '_' || src[i] === '^') {
          i++;
          const tag = readGroup(src, i);
          i = tag.next;
          label = convertMath(tag.body).trim();
        }
        out += label ? `${body} (${label})` : body;
        continue;
      }

      /**
       * `\ce{…}` / `\ch{…}` — mhchem. Handled HERE, as a command, rather than
       * as a pre-pass over the raw string: the `$…$` scanner below treats a
       * digit straight after the opening `$` as a price rather than maths
       * ("US $33 trillion"), so expanding `$\ce{2H2 + O2}$` into `$2H₂ + O₂$`
       * before that check turned a balanced equation into a price and left
       * both dollar signs on screen. Leaving the command intact until the
       * segment is already known to be maths keeps that heuristic honest.
       */
      if (name === 'ce' || name === 'ch') {
        while (src[i] === ' ') i++;
        const group = readGroup(src, i);
        i = group.next;
        out += renderChem(group.body);
        continue;
      }

      /**
       * `\underset{under}{base}` and `\stackrel{over}{base}` — an annotation
       * set above or below something, most often a reaction arrow or a reagent
       * ("CHCl₃ (excess)"). Both print the annotation as a parenthetical,
       * which is how it would be read aloud; before this they printed their
       * own names in front of it.
       */
      if (name === 'underset' || name === 'stackrel' || name === 'overset') {
        while (src[i] === ' ') i++;
        const annotation = readGroup(src, i);
        i = annotation.next;
        while (src[i] === ' ') i++;
        const base = readGroup(src, i);
        i = base.next;
        const note = convertMath(annotation.body).trim();
        const rendered = convertMath(base.body);
        // A CHARGE is not a remark about the base, it sits ON it: `\overset{+}{N}` is
        // N⁺, `\overset{\delta+}{C}` is C with a raised δ+, and `\underset` hangs it below.
        // Printed as "(+)" after the letter, the diazonium and the nitrilium ion read
        // "N (+)≡ N", which is a neutral nitrogen with an aside. It goes through the same
        // spelled-or-drawn choice a typed `^+` does, so the two spellings cannot differ.
        if (CHARGE_NOTE.test(note)) {
          // A radical's dot may be typed `.` or `\cdot`; Unicode raises only the first.
          const inner = /^[·•∙]$/.test(note) ? '.' : note;
          out += rendered + renderScripts([{ kind: name === 'underset' ? '_' : '^', inner, next: i }]);
          continue;
        }
        // `\underset{\text{(excess)}}{…}` brings its own brackets, and wrapping
        // again gave "CHCl₃ ((excess))".
        out += note ? `${rendered} ${isBracketed(note) ? note : `(${note})`}` : rendered;
        continue;
      }

      /** `\binom{n}{k}` — a stacked pair no line of text can stack. */
      if (name === 'binom' || name === 'dbinom' || name === 'tbinom') {
        while (src[i] === ' ') i++;
        const top = readGroup(src, i);
        i = top.next;
        while (src[i] === ' ') i++;
        const bottom = readGroup(src, i);
        i = bottom.next;
        out += `C(${convertMath(top.body).trim()}, ${convertMath(bottom.body).trim()})`;
        continue;
      }

      /** `\pmod{3}` is read "(mod 3)", not "pmod3". */
      if (name === 'pmod' || name === 'bmod') {
        while (src[i] === ' ') i++;
        const group = readGroup(src, i);
        i = group.next;
        out += ` (mod ${convertMath(group.body).trim()})`;
        continue;
      }

      if (name === 'sqrt') {
        while (src[i] === ' ') i++;
        const group = readGroup(src, i);
        i = group.next;
        const inner = convertMath(group.body);
        out += isAtomic(inner) && !inner.includes(INLINE_OPEN) ? `√${inner}` : `√(${inner})`;
        continue;
      }

      /** `\bar{x}` and `\overline{…}`: see `drawBar`. Ahead of the wrapper and symbol
       *  tables, which would otherwise drop the command and keep the bare base. */
      if (name === 'bar' || name === 'overline') {
        while (src[i] === ' ') i++;
        const group = readGroup(src, i);
        i = group.next;
        out += drawBar(convertMath(group.body), name === 'bar');
        continue;
      }

      if (name === 'mathbb') {
        while (src[i] === ' ') i++;
        const group = readGroup(src, i);
        i = group.next;
        const inner = convertMath(group.body);
        out += BLACKBOARD[inner] ?? inner;
        continue;
      }

      if (TRANSPARENT_WRAPPERS.has(name)) {
        while (src[i] === ' ') i++;
        // \left( / \right] carry a delimiter rather than a braced group.
        if (src[i] && src[i] !== '{') {
          if (name === 'left' || name === 'right') {
            // The delimiter can be escaped (`\left\{`) or named
            // (`\left\langle`). Emitting src[i] blindly printed the brace's
            // own BACKSLASH, so every piecewise definition in the bank opened
            // with a literal "\cl" — the stray backslash, then the array
            // column spec below. A backslash is left for the main loop, which
            // already knows how to read both forms.
            if (src[i] === '\\') continue;
            if (src[i] !== '.') out += src[i];
            i += 1;
            continue;
          }
        }
        const group = readGroup(src, i);
        i = group.next;
        if (TEXT_MODE_WRAPPERS.has(name)) {
          textDepth += 1;
          try {
            out += convertMath(group.body);
          } finally {
            textDepth -= 1;
          }
          continue;
        }
        out += convertMath(group.body);
        continue;
      }

      if (name in SYMBOLS) {
        const glyph = SYMBOLS[name];
        out += glyph;
        // The space after a command name is LaTeX's name terminator and is
        // dropped by a real renderer — but this output is plain text with no
        // math spacing to compensate, so keeping it is what preserves
        // "θ = 45" instead of running it together as "θ= 45".
        //
        // It is dropped in the one case where keeping it is clearly wrong: a
        // LETTER-like glyph immediately followed by another letter or digit,
        // which is one symbol rather than two terms. `$\Delta H$` is ΔH, and
        // enthalpies and entropies are written that way on nearly every
        // thermodynamics question; it was reading as "Δ H". The letter-like
        // test is what keeps `2 \times 10^6` spaced — an operator with a gap
        // on one side only would look worse than either.
        if (LETTER_LIKE.has(glyph) && src[i] === ' ' && /[A-Za-z0-9]/.test(src[i + 1] ?? '')) {
          i += 1;
        }
        continue;
      }

      // A function name is set apart from the symbol before it. TeX puts a thin space
      // there and the stored lines rely on it: `r\cos\theta` and `n\ln a` ran together
      // as "rcosθ" and "nln a", and `ab\cos^{-1}` as "abcos⁻¹". Nothing is added AFTER
      // the name, so `\cos\theta` stays "cosθ" and `\cos x` keeps the space it has.
      if (FUNCTION_NAMES.has(name) && ATOM_END.test(out)) out += ' ';
      // Unknown command: drop the backslash, keep the letters (\qed -> qed)
      // rather than leaving raw markup in front of a student.
      out += name;
      continue;
    }

    if (ch === '^' || ch === '_') {
      const first = readScript(src, i);
      i = first.next;

      /**
       * A base can carry BOTH scripts — `\int_0^\pi`, `E_{(Cu)}^{0}`,
       * `\sum_{i=1}^{n}` — and they have to be decided together.
       *
       * Deciding them one at a time is what printed `∫₀^π`: Unicode has a
       * subscript zero, so the lower limit was spelled, and it has no
       * superscript pi, so the upper limit fell back to a caret. One integral,
       * two notations, which reads as a typo rather than as an integral.
       * Either both are spelled or neither is.
       */
      const paired =
        (src[i] === '^' || src[i] === '_') && src[i] !== first.kind
          ? readScript(src, i)
          : null;
      if (paired) i = paired.next;
      const parts = paired ? [first, paired] : [first];

      // `45^\circ` is already raised — a degree sign needs no script at all.
      if (!paired && first.kind === '^' && ALREADY_RAISED.has(first.inner)) {
        out += first.inner;
        continue;
      }

      out += renderScripts(parts);
      continue;
    }

    /**
     * `--` and `---` inside `\text{…}`: TeX's en dash and em dash, which is what a stored
     * line means by them. `650\text{--}800` is a range and `\text{N}^+\text{--C}_6\text{H}_4`
     * is a bond drawn between two groups; both showed the two hyphens, as typed.
     *
     * ONLY in text mode, as in TeX. In maths the same characters are two minus signs:
     * `(3--3)^2` in a distance formula is 3 − (−3), and read as a range it would show
     * 3–3 = 0. And `C₆H₆ --AlCl₃--> C₆H₅Cl` is an ASCII arrow with its label. Neither is
     * touched, nor is a sentence, where `--HVZ-->` is stored twice. `-->` and `<--` are
     * left whole inside text too, as is any longer run.
     */
    if (textDepth > 0 && ch === '-' && src[i + 1] === '-') {
      let end = i;
      while (src[end] === '-') end += 1;
      const run = end - i;
      const arrow = src[i - 1] === '<' || src[end] === '>';
      out += !arrow && run === 2 ? '–' : !arrow && run === 3 ? '—' : src.slice(i, end);
      i = end;
      continue;
    }

    if (ch === '{' || ch === '}') {
      i += 1;
      continue;
    }

    if (ch === '~') {
      out += ' ';
      i += 1;
      continue;
    }

    out += ch;
    i += 1;
  }

  const result = out;
  // A command that survives the transform reaches a student's board as its own
  // name -- "Same Class nRightarrow Same Order". That is the same defect shape
  // as _latex_to_speech silently deleting \int: an unhandled token producing
  // plausible-looking wrong output. Saying so in dev is what makes the gap
  // findable; measured on the biology corpus, 2 of 11 commands leaked.
  if (__DEV__) {
    const leak = result.match(/\b(?:[a-z]+arrow|[nN]?[Rr]ightarrow|equiv|subset|quad|mathbf|text[a-z]*)\b/);
    if (leak) {
      console.warn(
        `[latexToText] possible unhandled command "${leak[0]}" survived into output: ${result.slice(0, 80)}`,
      );
    }
  }
  return result;
}

/**
 * Super/subscripts written without any `$…$` around them.
 *
 * The practice solver writes its working as prose and drops bare LaTeX into
 * the middle of it — "the dimensions of B are M T^{-2} A^{-1}" — so the
 * delimited-segment pass above never sees those and they reached students as
 * literal `T^{-2}`. Each token is handed to convertMath on its own, which is
 * the same code path a delimited one takes.
 *
 * Braced groups and digit/sign arguments convert, and so does a SINGLE letter
 * with nothing word-like after it. Letters used to be excluded entirely, on
 * the grounds that `x_i` was worth less than the risk of mangling an ordinary
 * underscore in prose — but the solver writes one step as "$v_x = u_x + a_x t$
 * and v_y = u_y + a_y t", half delimited and half not, and the bare half
 * printed a literal `v_y` beside a properly subscripted `vₓ`. One formula, two
 * spellings, in one sentence.
 *
 * The "nothing word-like after it" is what keeps prose safe: `v_y=` is a
 * subscript, `snake_case` is not, because its `c` is followed by more word.
 */
const BARE_SCRIPT = new RegExp(
  String.raw`[\^_](?:\{[^{}]*\}|[+\-−]?[0-9]+|[+\-−]|[A-Za-z](?![A-Za-z0-9]))` +
    // A caret, and only a caret, may also take a bracketed argument — `e^(-t/τ)`,
    // `x^(1/3)`, `(b/a)^(1/(n+1))`, balanced to three deep — or a radical and the
    // one thing it covers, `e^√x`. "snake_case" and "word (aside)" have no caret
    // in front of the bracket, so neither is touched.
    String.raw`|\^(?:\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)|√(?:\([^()]*\)|[0-9]+(?:\.[0-9]+)?|[A-Za-z](?![A-Za-z0-9])))`,
  'g',
);

/**
 * The same, but taking a second script when one follows straight after: `_c^d`, `V_R^2`,
 * `∫_c^d`. Converted together, a pair is decided together (see `convertMath`), where
 * each read alone left "∫⟦↓c⟧ᵈ", one limit drawn and the other spelled. Only the drawn
 * path uses it: the plain-string path keeps reading one script at a time.
 */
const BARE_SCRIPT_PAIR = new RegExp(`(?:${BARE_SCRIPT.source})(?:${BARE_SCRIPT.source})?`, 'g');

/**
 * Braces that only GROUP, in a line with no command in it for `convertMath` to
 * read them as grouping.
 *
 * `{}^{52}C_5` — the empty group a prescript hangs from — showed "{}⁵²C₅", and
 * `R{-}CHO` and `2{,}598{,}960` showed their braces too, because a line that
 * carries no command skips the maths converter and its braces were left exactly
 * as typed. Only two shapes are taken, and neither can be a set: an empty group
 * with a script straight after it, and a group holding one operator or
 * separator. `{x}`, `{1, 2, 3}`, `{ }` and `{∅}` are set notation, or the
 * fractional part, and keep their braces.
 */
const GROUPING_BRACES = /\{\}(?=[\^_])|\{([-−=+,])\}/g;

/**
 * `t^\wedge 2` — Mathpix transcribing a caret twice.
 *
 * When the page shows `t^2` written with a visible caret, the OCR encodes both
 * the superscript AND the caret glyph, and `\wedge` is how it spells that
 * glyph. Rendered literally it reads `tʷᵉᵈᵍᵉ 2`, which is how the stem of a
 * kinematics question arrived on the Solution screen. The exponent is the
 * meaning; the second caret is noise.
 */
const DOUBLED_CARET = /\^\s*\\wedge\s*/g;

/** Any `\command` at all — the signal that a run is markup, not prose. */
const BARE_COMMAND = /\\[a-zA-Z]+/;

/**
 * The escapes `convertMath` reads that a line with no `\command` in it never reaches
 * it to be read: `a\,dx`, `1s\;2s`, `S = \{1, 2, 3\}`. Forty stored lines showed them as
 * typed ("2\,HCHO →(conc.\,NaOH)").
 *
 * A thin space, a medium space and a colon-space are one plain space, and swallow
 * the spaces around them, as in `convertMath` ("sin x \, dx" is one gap). `\!` is a
 * negative space and prints nothing. `\{` and `\}` are the braces themselves. A `\\`
 * is matched first and left alone, so a line break straight before a comma
 * (`a \\, b`) is not read as `\,`.
 */
const BARE_ESCAPE = /\\\\|\s*\\[,;:]\s*|\\!|\\([{}])/g;

function unescapeBare(text: string): string {
  return text.replace(BARE_ESCAPE, (escape, brace: string | undefined) => {
    if (escape === '\\\\') return escape;
    if (brace) return brace;
    return escape.endsWith('!') ? '' : ' ';
  });
}

/**
 * A `_` doing prose duty rather than maths — `snake_case`, a filename.
 *
 * Only relevant on the bare path, where a whole sentence goes through the
 * converter; inside `$…$` every underscore really is a subscript. The first
 * version protected anything followed by a letter, which was too broad: the
 * solver writes one step as "$v_x = u_x + a_x t$ and v_y = u_y + a_y t",
 * half delimited and half not, and the protected half printed as a literal
 * `v_y` beside a properly subscripted `vₓ` — one formula, two spellings, in
 * one sentence.
 *
 * A subscript is a SINGLE character with nothing word-like after it: `v_y=`
 * subscripts, `snake_case` does not, because the `c` is followed by more word.
 *
 * And a backslash straight after the underscore is always a script: `S_\infty`,
 * `r_\alpha`, `\theta_\beta` are maths, and no identifier or filename has a
 * backslash there. Held as prose, 18 stored board formulas showed "S_∞" and
 * "θ_β" beside the same symbols' braced spelling (`S_{\infty}`) drawn properly.
 */
const PROSE_UNDERSCORE = /_(?!\{|\\|[0-9+\-]|[A-Za-z0-9](?![A-Za-z0-9]))/g;
const UNDERSCORE_HOLD = '\u0000US\u0000';

/**
 * `\$` — a dollar written as one, which is never a maths delimiter.
 *
 * The scan for `$…$` below walked straight over the backslash and took the
 * dollar for a delimiter, so `\text{US \$33 trillion/yr} … (\$18 trillion)`
 * read everything between its two escaped dollars as maths: both symbols were
 * deleted and the second `\text{` was left with its closing brace on screen.
 * Held out of the scan as a control character no content contains, and put
 * back as `$` once the line is converted. A single escaped dollar only ever
 * worked because it had no second one to pair with.
 */
const DOLLAR_HOLD = '\u001F';

/**
 * Text that arrived with no `$…$` around it.
 *
 * Two different things get missed without this. Super/subscripts written bare
 * — "the dimensions of B are M T^{-2} A^{-1}" — which is why this pass has
 * always existed. And whole fields that are pure LaTeX with no delimiters at
 * all, which is how the solver returns `answer`: a student was shown
 * `\left[\frac{7\pi}{6}+2\pi n,\ …\right]` verbatim in the Final answer box,
 * markup and all.
 *
 * A run carrying a command is treated as maths outright, because that is what
 * it is. Everything else keeps the narrow old behaviour, so ordinary prose is
 * never handed to a maths parser on spec.
 */
function wrapMath(converted: string): string {
  return markSegments ? `${MATH_OPEN}${converted}${MATH_CLOSE}` : converted;
}

/**
 * `*` as a times sign in running text: `v = r*ω`, `h*ν`, `kg * ohm / (T^2 * m^2)`,
 * `0.5 * 1.2e-5 * 25`. A lesson written in plain text has no `\times` or `\cdot` to type, so it
 * types a star, and the star reached the board as a star ("v = r*ω") where a product was meant.
 * 152 of the 33,247 stored board lines did (273 stars). The stored text is being corrected too,
 * but a lesson written tomorrow will do it again, so the converter reads a star the way the rule
 * that corrects the text does.
 *
 * A `*` is a product when it is spaced on BOTH sides or on NEITHER, and an operand stands on each
 * side of it. A star with one side spaced is a label, not a product (`π* orbital`, `t* = …`, the
 * antibonding orbitals and the time of flight), `**` is emphasis, and a star inside `$…$` or a
 * run of maths is whatever the author typed there. When both operands are plain numbers (digits,
 * a decimal point, e-notation or an exponent) or brackets holding only a number expression, the
 * star is a `×` with a space either side. Otherwise it is a middle dot, spaced the way the star
 * was: `r·ω`, `a · b`. A dot, never a juxtaposition: `n*2^n` would read `n2^n`.
 *
 * Only bare text is read, not a run that carries a `\command` (that is maths, and a star in
 * maths prints as typed). The edge of a `$…$` piece beside the text counts as an operand.
 *
 * One exception the data rule does not make, because no stored lesson line needs it and the
 * practice solutions do: an antibonding orbital written with the star against its symbol and no
 * space (`σ*1s`, `π*2px`, `σ*2pz`, `π*(CO)`) is one name. Read as a product it became "σ·1s", a
 * different orbital, in 24 stored practice solutions that spell their molecular-orbital fillings
 * this way. `π*a*b` and `σ*l` are still products: it is what follows the star that gives the
 * label away, a digit with s, p, d or f, or a bracketed formula.
 */

/** What can end the operand on a star's left: a letter (Latin or Greek), a digit, a closing
 *  bracket, a lowered or raised digit, a prime, a bar, `!`, or the edge of a maths piece (`$`; the
 *  escaped dollar held out of the scan stands for one too). */
const STAR_BEFORE = /[A-Za-z0-9\u03B1-\u03C9\u0391-\u03A9)\]\u2080-\u2089\u00B2\u00B3\u2070\u00B9\u2074-\u2079'|$!\u001F]/;
/** What can start the operand on its right: a letter, a digit, an opening bracket, a radical, an
 *  integral sign, π, a bar, a backslash, or the edge of a maths piece. */
const STAR_AFTER = /[A-Za-z0-9\u03B1-\u03C9\u0391-\u03A9(\[\u221A\u222B|\u03C0$\\\u001F]/;
/** A letter, and a letter or a digit, as the data rule's `isalpha` / `isalnum` read them. */
const STAR_ALPHA = /[A-Za-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02AF\u0370-\u03FF\u0400-\u052F\u0900-\u097F]/;
const STAR_ALNUM = /[A-Za-z0-9\u00AA\u00B2\u00B3\u00B5\u00B9\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02AF\u0370-\u03FF\u0400-\u052F\u0900-\u097F\u2070-\u2079\u2080-\u2089]/;
/** The raised digits and signs an exponent can be spelled with. */
const STAR_RAISED = '⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺';
/** A number that ENDS at the left operand (and is not the tail of a longer word or of a power
 *  `x^2`): `5`, `0.5`, `1.2e-5`, `10²`, `10^-3`. */
const STAR_NUMBER_BEFORE = new RegExp(
  `(?:^|[^A-Za-z0-9_.^])\\d+(?:\\.\\d+)?(?:[eE][-+]?\\d+)?[${STAR_RAISED}]*$`,
);
const STAR_POWER_BEFORE = /(?:^|[^A-Za-z0-9_.])\d+(?:\.\d+)?\^\{?[-−+]?\d+\}?$/;
/** A number that BEGINS at the right operand, with its exponent. */
const STAR_NUMBER_AFTER = new RegExp(
  `^\\d+(?:\\.\\d+)?(?:[eE][-+]?\\d+)?[${STAR_RAISED}]*(?:\\^\\{?[-−+]?\\d+\\}?)?`,
);
/** What a bracket may hold to be a number expression: digits, signs, a point, a slash, a power,
 *  an `e` for e-notation, brackets and a radical. */
const STAR_NUMBER_EXPRESSION = new RegExp(`^[0-9.,+\\-−/×·^ ${STAR_RAISED}()eE√]*$`);

/** σ, π or δ against an orbital: the star in `σ*1s`, `π*2px`, `π*(CO)` belongs to the name. */
const ANTIBONDING_STAR = /^[σπδ]\*(?:[1-9][spdf]|\([A-Z][A-Za-z])/;

/** The `(` that matches the `)` at `i`, or null. */
function bracketOpening(text: string, i: number): number | null {
  let depth = 0;
  for (let j = i; j >= 0; j -= 1) {
    if (text[j] === ')') depth += 1;
    else if (text[j] === '(') {
      depth -= 1;
      if (depth === 0) return j;
    }
  }
  return null;
}

/** The `)` that matches the `(` at `i`, or null. */
function bracketClosing(text: string, i: number): number | null {
  let depth = 0;
  for (let j = i; j < text.length; j += 1) {
    if (text[j] === '(') depth += 1;
    else if (text[j] === ')') {
      depth -= 1;
      if (depth === 0) return j;
    }
  }
  return null;
}

/** A bracket's contents that are only a number expression: `0.05`, `6.63 × 10⁻³⁴`, `1/2`, `4+20`. */
function isNumberExpression(inner: string): boolean {
  if (!inner.trim() || !/[0-9\u00B2\u00B3\u00B9\u2070\u2074-\u2079]/.test(inner) || !STAR_NUMBER_EXPRESSION.test(inner)) {
    return false;
  }
  // An `e` is only ever the e of e-notation: straight after a digit or a point, straight before a
  // sign or a digit. Any other (`(x+e)`, `(Re)`) is a letter, so the bracket is not a number.
  for (let k = 0; k < inner.length; k += 1) {
    if (inner[k] !== 'e' && inner[k] !== 'E') continue;
    const before = inner[k - 1];
    const after = inner[k + 1];
    if (before === undefined || !/[0-9.]/.test(before) || after === undefined || !/[-+0-9]/.test(after)) return false;
  }
  return true;
}

/** Whether the operand that ends at `i` is a plain number, or a bracket of numbers: not a symbol,
 *  a call (`f(2)`, `sqrt(2)`), a power of a symbol or a subscript. */
function endsInNumber(text: string, i: number): boolean {
  if (text[i] === ')') {
    const open = bracketOpening(text, i);
    if (open === null) return false;
    const before = text[open - 1];
    if (open > 0 && (STAR_ALNUM.test(before) || before === '_' || before === '^')) return false;
    return isNumberExpression(text.slice(open + 1, i));
  }
  const head = text.slice(0, i + 1);
  return STAR_NUMBER_BEFORE.test(head) || STAR_POWER_BEFORE.test(head);
}

/** Whether the operand that starts at `i` is a plain number, or a bracket of numbers. A number
 *  with a letter straight after it (`2x`, `3_1`) is a term with a symbol in it. */
function startsWithNumber(text: string, i: number): boolean {
  if (text[i] === '(') {
    const close = bracketClosing(text, i);
    return close !== null && isNumberExpression(text.slice(i + 1, close));
  }
  const number = STAR_NUMBER_AFTER.exec(text.slice(i));
  if (!number) return false;
  const next = text[i + number[0].length] ?? ' ';
  return !(STAR_ALPHA.test(next) || next === '_');
}

/**
 * `piece` is a run of bare text; `afterMath` / `beforeMath` say whether a maths piece sits
 * straight against its start / its end, which is an operand on that side.
 */
function starOperators(piece: string, afterMath: boolean, beforeMath: boolean): string {
  if (!piece.includes('*')) return piece;

  // The bold tags the drawn path carries are not text: a line reads the same with and without them,
  // and the plain-string path has none, so the rule steps over them.
  let clean = '';
  const tags: [number, string][] = [];
  for (let k = 0; k < piece.length; k += 1) {
    if (piece[k] === BOLD_OPEN || piece[k] === BOLD_CLOSE) tags.push([clean.length, piece[k]]);
    else clean += piece[k];
  }
  if (!clean.includes('*')) return piece;

  // The edge of a maths piece stands in as a `$`, the character the rule reads it by. A `$…$` span
  // inside the text (a price kept as text) is blanked so a star in it is left alone.
  const lead = afterMath ? '$' : '';
  const text = `${lead}${clean}${beforeMath ? '$' : ''}`;
  const searched = `${lead && ' '}${clean.replace(/\$[^$]*\$/g, (span) => ' '.repeat(span.length))}${beforeMath ? ' ' : ''}`;

  const written = new Map<number, string>();
  for (let s = 0; s < searched.length; s += 1) {
    if (searched[s] !== '*') continue;
    const spacedBefore = s >= 1 && text[s - 1] === ' ';
    const spacedAfter = s + 1 < text.length && text[s + 1] === ' ';
    if (spacedBefore !== spacedAfter) continue;
    const left = spacedBefore ? s - 2 : s - 1;
    const right = spacedAfter ? s + 2 : s + 1;
    if (left < 0 || right >= text.length) continue;
    if (text[left] === '*' || text[right] === '*' || !STAR_BEFORE.test(text[left]) || !STAR_AFTER.test(text[right])) continue;
    if (!spacedBefore && ANTIBONDING_STAR.test(text.slice(s - 1, s + 4))) continue;
    const numbers = endsInNumber(text, left) && startsWithNumber(text, right);
    // The spaces round a spaced star are already there; an unspaced product of numbers gets its own.
    written.set(s - lead.length, numbers ? (spacedBefore ? '×' : ' × ') : '·');
  }
  if (written.size === 0) return piece;

  let out = '';
  let tag = 0;
  for (let k = 0; k <= clean.length; k += 1) {
    while (tag < tags.length && tags[tag][0] === k) {
      out += tags[tag][1];
      tag += 1;
    }
    if (k < clean.length) out += written.get(k) ?? clean[k];
  }
  return out;
}

function convertBareText(text: string, afterMath = false, beforeMath = false): string {
  if (BARE_COMMAND.test(text)) {
    const held = text.replace(PROSE_UNDERSCORE, UNDERSCORE_HOLD);
    return wrapMath(convertMath(held).split(UNDERSCORE_HOLD).join('_'));
  }
  return unescapeBare(
    starOperators(text, afterMath, beforeMath)
      .replace(GROUPING_BRACES, (_group, operator: string | undefined) => operator ?? '')
      .replace(markSegments ? BARE_SCRIPT_PAIR : BARE_SCRIPT, (token) => convertMath(token)),
  );
}

/**
 * `<smiles>CC=CC(C)O</smiles>` — a molecule, tagged by the OCR.
 *
 * `mathpix.py` asks for `include_smiles`, so a chemistry photo whose paper
 * showed a skeletal structure comes back with the structure as a SMILES string
 * inside this tag. Nothing here strips it, so it reached the Solution screen as
 * literal markup: "How many stereoisomers are possible for
 * <smiles>CC=CC(C)O</smiles>?".
 *
 * The webpage draws the molecule with `smiles-drawer`, which cannot run here:
 * it builds a live `SVGSVGElement` through `document.createElementNS`. This is
 * the webpage's own fallback instead, the one it shows when that drawer fails
 * to parse. It is a mitigation, not parity — a student who cannot read SMILES
 * still cannot see the structure. Drawing it properly belongs on the server,
 * which would serve both clients and let the webpage drop a 190KB import.
 */
const SMILES_TAG = /<smiles>\s*([^<]*?)\s*<\/smiles>/gi;

function unwrapSmiles(text: string): string {
  return text.replace(SMILES_TAG, (_, formula: string) =>
    formula.trim() ? `structure: ${formula.trim()}` : 'structure');
}

/**
 * Normalizes PDF-extraction artifacts, then converts every `$…$` / `$$…$$`
 * segment to Unicode, leaving plain prose untouched.
 *
 * Line-wrap handling is unchanged from the WebView version: mid-word hyphen
 * breaks ("mag-\nnetic") and single-word-per-line wrapping are artifacts of
 * PDF extraction, not real paragraph breaks.
 */
/**
 * `\hat{i}`, `\hat j`, `\hat{k}` — unit vectors — as î, ĵ, k̂ rather than
 * dropped. Dropping them turned an option's (2î + 1.5ĵ) into "(2 i + 1.5 j)",
 * which is not the same quantity. î and ĵ have precomposed glyphs (the dot
 * goes, as it should under a hat); any other letter takes U+0302, which
 * MathLine sets in the system font so the mark lands on the letter.
 */
const HAT_GLYPH: Record<string, string> = { i: 'î', j: 'ĵ', '\\imath': 'î', '\\jmath': 'ĵ' };
function hatsAsAccents(text: string): string {
  return text.replace(
    /\\(?:hat|widehat)\s*(?:\{\s*(\\[ij]math|[A-Za-z])\s*\}|(\\[ij]math|[A-Za-z])(?![A-Za-z]))/g,
    (_m, braced?: string, bare?: string) => {
      const letter = (braced ?? bare) as string;
      return HAT_GLYPH[letter] ?? `${letter}\u0302`;
    }
  );
}

/**
 * A compound unit as one word: "kg · m / s" → "kg·m/s", "N ·  m" → "N·m".
 *
 * Sources write units as `\mathrm{kg} \cdot \mathrm{m} / \mathrm{s}` or
 * `\mathrm{~N} \cdot \mathrm{~m}`, and each piece came through with its own
 * spacing — a unit spread across the line, sometimes wrapping mid-unit.
 * Only between known unit symbols, so `a · b` in a dot product is untouched.
 */
const UNIT_SYMBOL = '(?:kg|g|mg|km|cm|mm|m|s|ms|min|h|N|J|kJ|W|kW|V|A|mA|C|K|Pa|Hz|mol|L|mL|rad|eV|T|Ω)';
const UNIT_JOIN = new RegExp(`(?<![A-Za-z])(${UNIT_SYMBOL})\\s*([·⋅/])\\s*(?=${UNIT_SYMBOL}(?![A-Za-z]))`, 'g');
function tightenUnits(text: string): string {
  let prev = '';
  let out = text;
  // Repeated so a chain — kg · m / s — closes up link by link.
  while (out !== prev) {
    prev = out;
    out = out.replace(UNIT_JOIN, (_m, unit: string, op: string) => `${unit}${op}`);
  }
  // `\mathrm{~N}` leaves a doubled space in front of the unit. Only after
  // something a quantity ends in (a digit, a script, a hat): a letter, a bracket
  // or an arrow before two spaces is a `\quad` or the padding round `\text{ and }`,
  // and "⟹   N = A" or "and  A" is not a number and a unit.
  return out.replace(
    new RegExp(`([0-9\\u0300-\\u036f\\u00b2\\u00b3\\u00b9\\u2070-\\u2079\\u207b])[ \\u00a0]{2,}(?=${UNIT_SYMBOL}(?![A-Za-z]))`, 'g'),
    '$1 ',
  );
}

export function latexToText(raw: string): string {
  // Emphasis first, before anything can touch the angle brackets. When the
  // caller wants segments the tags become markers the scanner reads; for plain
  // text they vanish — a bare <Text> printing a literal "<b>" is the one
  // outcome neither path may produce.
  const emphasised = clearControlChars(raw).replace(/<\/?b>/gi, (tag) =>
    markSegments ? (tag.length === 3 ? BOLD_OPEN : BOLD_CLOSE) : '',
  );
  const arrowsResolved = unwrapSmiles(hatsAsAccents(emphasised))
    .replace(
      // The OPTIONAL [below] argument is why this has a `(?:\[…\])?` in it.
      // LaTeX writes `\xrightarrow[below]{above}`, and the previous pattern
      // demanded `{` immediately after the command name -- so a real board
      // line, `6CO2 + 6H2O \xrightarrow[]{sunlight} C6H12O6 + 6O2`, matched
      // nothing and shipped to a student as
      //     6CO₂ + 6H₂O xrightarrow[]sunlight C₆H₁₂O₆ + 6O₂
      // Seen on a live device during a carbon-cycle class. Same family as the
      // \ce{} leak: a command with an argument shape nobody anticipated does
      // not degrade, it prints its own name.
      /\\(xrightarrow|xleftarrow|xrightleftharpoons)\s*(?:\[([^\]]*)\])?\s*\{([^{}]*)\}/g,
      (_m, cmd: string, below: string | undefined, above: string) => {
        const arrow = LABELLED_ARROWS[cmd];
        const a = (above || '').trim();
        const b = (below || '').trim();
        // Above, then below. A slash read as one reagent over another ("Cu/573 K").
        if (a && b) return `${arrow}(${a}, ${b})`;
        return a || b ? `${arrow}(${a || b})` : arrow;
      },
    );

  const normalized = arrowsResolved
    .replace(DOUBLED_CARET, '^')
    // LaTeX escapes for literal punctuation. These sit in ordinary prose
    // rather than inside $…$, so the math converter never saw them and a
    // student read "reduce the volume by 2\% is:". `$` is deliberately not
    // in the set: unescaping it would manufacture a math delimiter.
    .replace(/\\([%&#_])/g, '$1')
    // Escaped dollars are held out of the delimiter scan. `\\` is matched first
    // so a line break straight before a real delimiter (`a \\ $x$`) is not
    // mistaken for an escape.
    .replace(/\\\\|\\\$/g, (escape) => (escape === '\\$' ? DOLLAR_HOLD : escape))
    .replace(/-\n/g, '')
    .replace(/\n/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();

  let out = '';
  // Text outside any delimiter, held back so the bare pass sees it whole and
  // never re-reads a segment this function has already converted.
  let plain = '';
  // Whether the text written so far ends in a maths piece, which the next run of bare text then
  // starts against. `beforeMath` is the same for its other end: whether a maths piece follows.
  let afterMath = false;
  const flush = (beforeMath: boolean) => {
    if (!plain) return;
    out += convertBareText(plain, afterMath, beforeMath);
    plain = '';
    afterMath = false;
  };
  let i = 0;
  while (i < normalized.length) {
    const ch = normalized[i];
    if (ch === '\\' && (normalized[i + 1] === '(' || normalized[i + 1] === '[')) {
      // \( … \) and \[ … \] are the other standard delimiters.
      const close = normalized[i + 1] === '(' ? '\\)' : '\\]';
      const end = normalized.indexOf(close, i + 2);
      if (end === -1) {
        plain += normalized.slice(i);
        break;
      }
      flush(true);
      out += wrapMath(convertMath(normalized.slice(i + 2, end)));
      afterMath = true;
      i = end + 2;
      continue;
    }
    if (ch === '$') {
      const isDisplay = normalized[i + 1] === '$';
      const delim = isDisplay ? '$$' : '$';
      const start = i + delim.length;
      const end = normalized.indexOf(delim, start);
      if (end === -1) {
        // Unbalanced `$` — a literal dollar sign (a price), not math.
        plain += ch;
        i += 1;
        continue;
      }
      // A PRICE, and the branch above only caught the lonely one.
      //
      // "$33 trillion vs $18 trillion" has TWO dollars, so `indexOf` finds a
      // closing delimiter and everything between them is converted as maths —
      // which deletes both symbols and puts "33 trillion vs 18 trillion" on the
      // board. Found on Ecosystem Services, whose whole subject is Costanza's
      // valuation: the chapter says "US $33 trillion" and "~US $18 trillion" on
      // nearly every page, so a board about money silently lost the money.
      //
      // What decides it is the BODY, not the first character.
      //
      // The rule here used to be "a digit straight after the opening `$` means
      // a price", on the grounds that real inline maths never opens with a
      // numeral. That holds for the board corpus it was measured on and is
      // false for the practice bank, which is full of
      // `$5 \times 10^6 m^{-1}$` and `$5000 A^0$` — so an Atomic Structure
      // question rendered every one of its four options with literal dollar
      // signs around it, on a live device.
      //
      // A price body is prose ("33 trillion vs ~US "); a maths body carries
      // markup no price ever does. Testing for that markup keeps the money on
      // the Ecosystem Services board AND renders the physics, where the
      // first-character test could only ever protect one of the two.
      //
      // `$$` is left alone: nobody writes a price as `$$33`.
      // Surveying all 11,300 servable rows through this converter found 1,264
      // spans where a real formula kept its dollar signs, because testing only
      // for LaTeX markup still rejects the plainest maths in the bank:
      // `$2 x+3 y=9$` as a whole option, `$15d$` mid-sentence, `$3 x+4 y=60$`.
      //
      // What actually separates them is PROSE. A price body is words —
      // "33 trillion vs ~US " — and a formula body is symbols and single
      // letters. So a span is a price only when it reads like a sentence and
      // carries no markup; `x`, `y`, `d` are too short to qualify, and
      // "trillion" is not.
      // The word has to STAND ALONE, and an `=` settles it on its own. Testing
      // for any three letters read "abc" out of `$2abc + 5 = 3$` and called an
      // equation a price; no price has ever contained an equals sign.
      const inner = normalized.slice(start, end);
      const looksLikePrice =
        !/[\\^_{}=]/.test(inner) &&
        /(?:^|[^A-Za-z0-9])[A-Za-z]{3,}(?:[^A-Za-z0-9]|$)/.test(inner);
      // A closing `$` is never followed straight by a digit — that is TeX's own
      // rule for `$` maths, and "$33 or $18" is why. Its second dollar opens the
      // NEXT price, so the span between them is two amounts and a word, whether or
      // not the word is long enough to read as prose ("to", "or"), and whether or
      // not a `\text{…}` brace sits between them.
      const closesOnAPrice = /[0-9]/.test(normalized[end + 1] ?? '');
      if (!isDisplay && (looksLikePrice || closesOnAPrice) && /[0-9]/.test(normalized[start] ?? '')) {
        plain += ch;
        i += 1;
        continue;
      }
      flush(true);
      out += wrapMath(convertMath(normalized.slice(start, end)));
      afterMath = true;
      i = end + delim.length;
      continue;
    }
    plain += ch;
    i += 1;
  }
  flush(false);
  return tightenUnits(out).split(DOLLAR_HOLD).join('$');
}

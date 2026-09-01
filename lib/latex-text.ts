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
  uparrow: '↑', downarrow: '↓',
  // Misc
  infty: '∞', partial: '∂', nabla: '∇', degree: '°', circ: '°',
  prime: '′', angle: '∠', perp: '⊥', parallel: '∥', therefore: '∴',
  because: '∵', sum: '∑', prod: '∏', int: '∫', oint: '∮',
  in: '∈', notin: '∉', subset: '⊂', cup: '∪', cap: '∩', emptyset: '∅',
  forall: '∀', exists: '∃', hbar: 'ℏ', ell: 'ℓ', Re: 'ℜ', Im: 'ℑ',
  ldots: '…', dots: '…', cdots: '⋯', quad: ' ', qquad: '  ',
  lambdabar: 'ƛ', vec: '', hat: '', bar: '', dot: '',
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

/** Wrappers whose braces vanish and whose contents render as-is. */
const TRANSPARENT_WRAPPERS = new Set([
  'text', 'mathrm', 'textrm', 'mathbf', 'textbf', 'mathit', 'textit',
  'mathsf', 'mathtt', 'operatorname', 'left', 'right', 'displaystyle',
  'mbox', 'hspace', 'ensuremath', 'mathcal', 'mathfrak', 'boldsymbol',
]);

/** Glyphs that already sit raised on the line, so `^` around them would be
 *  doubling up — `45^\circ` is just "45°". */
const ALREADY_RAISED = new Set(['°', '′', '″']);

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

/** Maps every character through `table`, or returns null if any character has
 *  no equivalent — callers then fall back to a linear form. */
function mapAll(text: string, table: Record<string, string>): string | null {
  let out = '';
  for (const ch of text) {
    if (ch === ' ') continue;
    const mapped = table[ch] ?? table[ch.toLowerCase()];
    if (!mapped) return null;
    out += mapped;
  }
  return out || null;
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
let markSegments = false;

function renderFraction(rawNum: string, rawDen: string): string {
  const num = convertMath(rawNum);
  const den = convertMath(rawDen);
  if (markSegments) {
    // A fraction inside a fraction is left linear: stacking it would make a
    // three-deck tower out of one line of working.
    const flat = (part: string) => part.split(FRAC_OPEN).join('(').split(FRAC_SEP).join(')/(').split(FRAC_CLOSE).join(')');
    return `${FRAC_OPEN}${flat(num)}${FRAC_SEP}${flat(den)}${FRAC_CLOSE}`;
  }
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

/** One run of a converted line. */
export type MathSegment =
  /** Prose. */
  | { kind: 'text'; text: string }
  /** Came from maths — set in the maths voice wherever it appears. */
  | { kind: 'math'; text: string }
  /** A sub- or superscript with no Unicode character to spell it. */
  | { kind: 'sub'; text: string }
  | { kind: 'sup'; text: string }
  | { kind: 'fraction'; numerator: string; denominator: string };

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
    marked = latexToText(raw);
  } finally {
    markSegments = false;
  }

  const segments: MathSegment[] = [];
  let buffer = '';
  let inMath = 0;
  const flush = () => {
    if (!buffer) return;
    segments.push({ kind: inMath > 0 ? 'math' : 'text', text: buffer });
    buffer = '';
  };

  for (let i = 0; i < marked.length; i += 1) {
    const ch = marked[i];
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
      const close = marked.indexOf(SCRIPT_CLOSE, i);
      if (close === -1) {
        buffer += ch;
        continue;
      }
      flush();
      segments.push({
        kind: ch === SUB_OPEN ? 'sub' : 'sup',
        text: strip(marked.slice(i + 1, close)),
      });
      i = close;
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
      segments.push({
        kind: 'fraction',
        numerator: strip(marked.slice(i + 1, sep)),
        denominator: strip(marked.slice(sep + 1, close)),
      });
      i = close;
      continue;
    }
    buffer += ch;
  }
  flush();
  return segments;
}

/** A fraction's halves are rendered as plain text, so any marker that rode
 *  along inside them would show up as a control character. */
function strip(text: string): string {
  return text
    .split(MATH_OPEN).join('')
    .split(MATH_CLOSE).join('')
    .split(SUB_OPEN).join('')
    .split(SUP_OPEN).join('')
    .split(SCRIPT_CLOSE).join('');
}

/** Converts the body of one math segment (already stripped of its `$`). */
export function convertMath(src: string): string {
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
          out += SPACING[next];
          i += 2;
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

      if (name === 'sqrt') {
        while (src[i] === ' ') i++;
        const group = readGroup(src, i);
        i = group.next;
        const inner = convertMath(group.body);
        out += isAtomic(inner) ? `√${inner}` : `√(${inner})`;
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
            if (src[i] !== '.') out += src[i];
            i += 1;
            continue;
          }
        }
        const group = readGroup(src, i);
        i = group.next;
        out += convertMath(group.body);
        continue;
      }

      if (name in SYMBOLS) {
        out += SYMBOLS[name];
        // The space after a command name is LaTeX's name terminator and is
        // dropped by a real renderer — but this output is plain text with no
        // math spacing to compensate, so keeping it is what preserves
        // "θ = 45" instead of running it together as "θ= 45".
        continue;
      }

      // Unknown command: drop the backslash, keep the letters (\qed -> qed)
      // rather than leaving raw markup in front of a student.
      out += name;
      continue;
    }

    if (ch === '^' || ch === '_') {
      const table = ch === '^' ? SUPERSCRIPT : SUBSCRIPT;
      i += 1;
      while (src[i] === ' ') i++;
      const group = readGroup(src, i);
      i = group.next;
      const inner = convertMath(group.body);
      if (ch === '^' && ALREADY_RAISED.has(inner)) {
        out += inner;
        continue;
      }
      const mapped = mapAll(inner, table);
      if (mapped) {
        out += mapped;
        continue;
      }
      if (markSegments) {
        // No character exists for it, so it is drawn instead of spelled.
        out += `${ch === '^' ? SUP_OPEN : SUB_OPEN}${inner}${SCRIPT_CLOSE}`;
        continue;
      }
      // Plain-string callers keep the caret so meaning isn't silently lost.
      out += `${ch}${inner.length > 1 ? `(${inner})` : inner}`;
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

  return out;
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
const BARE_SCRIPT = /[\^_](?:\{[^{}]*\}|[0-9+\-]|[A-Za-z0-9](?![A-Za-z0-9]))/g;

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
 */
const PROSE_UNDERSCORE = /_(?!\{|[0-9+\-]|[A-Za-z0-9](?![A-Za-z0-9]))/g;
const UNDERSCORE_HOLD = '\u0000US\u0000';

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

function convertBareText(text: string): string {
  if (BARE_COMMAND.test(text)) {
    const held = text.replace(PROSE_UNDERSCORE, UNDERSCORE_HOLD);
    return wrapMath(convertMath(held).split(UNDERSCORE_HOLD).join('_'));
  }
  return text.replace(BARE_SCRIPT, (token) => convertMath(token));
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
export function latexToText(raw: string): string {
  const normalized = unwrapSmiles(raw)
    .replace(DOUBLED_CARET, '^')
    .replace(/-\n/g, '')
    .replace(/\n/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();

  let out = '';
  // Text outside any delimiter, held back so the bare pass sees it whole and
  // never re-reads a segment this function has already converted.
  let plain = '';
  const flush = () => {
    if (!plain) return;
    out += convertBareText(plain);
    plain = '';
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
      flush();
      out += wrapMath(convertMath(normalized.slice(i + 2, end)));
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
      flush();
      out += wrapMath(convertMath(normalized.slice(start, end)));
      i = end + delim.length;
      continue;
    }
    plain += ch;
    i += 1;
  }
  flush();
  return out;
}

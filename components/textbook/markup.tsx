import { Fragment, ReactNode, useMemo } from 'react';
import { Platform, StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';

/**
 * The chapter content's inline markup, rendered as nested `<Text>`.
 *
 * Chapter copy carries a closed set of five tags: `<b>`, `<i>`, `<sup>`,
 * `<sub>` and `<br>`. Across all of Chapter 1 that is 770 `<i>`, 142 `<b>`,
 * 120 `<sub>` and 82 `<sup>`, with 14 genuinely nested runs like
 * `<b><i>A</i> ⊆ <i>B</i></b>`, so this has to be a real recursive parser
 * rather than a chain of replaces. There are no HTML entities anywhere in the
 * content and no attributes on any tag, which is what keeps it this small.
 *
 * A WebView was never on the table. The Practice screen already learned that
 * lesson with LaTeX: a browser instance per question, three CDN requests, and
 * a Practice tab that broke on device. Nested `<Text>` renders instantly,
 * offline, in the app's own fonts.
 *
 * `<i>` is the interesting one. In this content italic does not mean emphasis,
 * it means "this is mathematics" — every variable, set name and expression is
 * wrapped in it, per the authoring spec. So it switches to the serif face the
 * design uses for maths, rather than italicising the body font.
 */

/** Maths and set symbols. iOS has Georgia; Android's `serif` is Noto Serif. */
export const SERIF = Platform.select({ ios: 'Georgia', android: 'serif', default: 'serif' });

type Node =
  | { kind: 'text'; value: string }
  | { kind: 'br' }
  | { kind: 'tag'; name: 'b' | 'i' | 'sup' | 'sub'; children: Node[] };

const TAG = /<(\/?)(b|i|sup|sub|br)\s*\/?>/gi;

function parse(html: string): Node[] {
  const root: Node[] = [];
  // Open elements, innermost last. An unclosed or stray closing tag is
  // tolerated rather than thrown: a malformed string should cost its own
  // formatting, never the whole screen.
  const stack: { name: 'b' | 'i' | 'sup' | 'sub'; children: Node[] }[] = [];
  const current = () => (stack.length ? stack[stack.length - 1].children : root);

  let cursor = 0;
  TAG.lastIndex = 0;
  let match = TAG.exec(html);
  while (match) {
    if (match.index > cursor) current().push({ kind: 'text', value: html.slice(cursor, match.index) });
    const closing = match[1] === '/';
    const name = match[2].toLowerCase() as 'b' | 'i' | 'sup' | 'sub' | 'br';

    if (name === 'br') {
      current().push({ kind: 'br' });
    } else if (closing) {
      const openIndex = stack.map((s) => s.name).lastIndexOf(name);
      if (openIndex !== -1) {
        // Close everything opened inside it too, so crossed tags degrade into
        // nesting instead of leaking their style to the rest of the string.
        while (stack.length > openIndex) {
          const done = stack.pop()!;
          current().push({ kind: 'tag', name: done.name, children: done.children });
        }
      }
    } else {
      stack.push({ name, children: [] });
    }

    cursor = match.index + match[0].length;
    match = TAG.exec(html);
  }
  if (cursor < html.length) current().push({ kind: 'text', value: html.slice(cursor) });
  while (stack.length) {
    const done = stack.pop()!;
    current().push({ kind: 'tag', name: done.name, children: done.children });
  }
  return root;
}

/**
 * Superscripts and subscripts, the only genuinely hard part.
 *
 * React Native's nested `<Text>` accepts font and colour properties and
 * ignores everything that would move a glyph off the baseline. That is not a
 * guess: `transform: translateY`, a smaller `lineHeight` and a larger
 * `lineHeight` were all rendered side by side against a plain smaller run on
 * an iPhone, and all four came out pixel-identical. There is no style that
 * raises a nested run.
 *
 * Small-on-the-baseline is fine for a subscript, which belongs near the
 * baseline anyway, but it is wrong for a superscript: `2` followed by a small
 * `k` reads as two times k, not two to the k. So exponents are converted to
 * real Unicode superscript characters, which need no offset because the glyph
 * itself is raised. Every exponent in the chapter maps: digits, the minus
 * sign, and the letters actually used.
 *
 * This is the same trade `lib/latex-text.ts` made for practice questions, for
 * the same reason, and it is why neither screen needs a WebView.
 *
 * Subscripts convert too where they can, and where they cannot they stay as
 * small text. Some are whole expressions rather than indices, like
 * `A` sub `lcm(m, n)` or `A` sub `i∈I`, and Unicode has no subscript letters
 * for most of the alphabet. Small text sits where a subscript sits, so it
 * reads correctly even without the drop.
 */
const SUPERS: Record<string, string> = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷',
  '8': '⁸', '9': '⁹', '+': '⁺', '-': '⁻', '−': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
  n: 'ⁿ', i: 'ⁱ', a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', k: 'ᵏ', m: 'ᵐ',
  r: 'ʳ', s: 'ˢ', t: 'ᵗ', x: 'ˣ', y: 'ʸ', j: 'ʲ', p: 'ᵖ',
  // Present in Unicode all along, absent from this table, so every run that
  // used one fell back to same-size text on the SAME baseline. Physics wants
  // them: kg m s⁻², e⁻, and the f/g/h that show up in exponents.
  f: 'ᶠ', g: 'ᵍ', h: 'ʰ', l: 'ˡ', o: 'ᵒ', u: 'ᵘ', v: 'ᵛ', w: 'ʷ', z: 'ᶻ',
  ' ': ' ',
};

const SUBS: Record<string, string> = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇',
  '8': '₈', '9': '₉', '+': '₊', '-': '₋', '−': '₋', '=': '₌', '(': '₍', ')': '₎',
  a: 'ₐ', e: 'ₑ', i: 'ᵢ', j: 'ⱼ', k: 'ₖ', m: 'ₘ', n: 'ₙ', o: 'ₒ', p: 'ₚ',
  r: 'ᵣ', s: 'ₛ', t: 'ₜ', u: 'ᵤ', v: 'ᵥ', x: 'ₓ',
  // Same story. Unicode has no subscript CAPITALS at any code point, so a
  // run like v<sub>AB</sub> can never map and must fall back; content should
  // avoid it. These two can, and were simply missing.
  h: 'ₕ', l: 'ₗ',
  ' ': ' ',
};

/** The whole run, or null when even one character has no raised form. */
function toUnicode(text: string, table: Record<string, string>): string | null {
  let out = '';
  for (const ch of text) {
    const mapped = table[ch];
    if (mapped === undefined) return null;
    out += mapped;
  }
  return out;
}

/**
 * Arrows and similar signs that Unicode lets a platform draw either as text or
 * as a colour emoji, and which iOS draws as emoji unless told otherwise. The
 * chapter uses them as punctuation, so `set-builder ↔ interval` was arriving
 * as a blue rounded-square pictogram mid-sentence. VARIATION SELECTOR-15 asks
 * for the text form.
 *
 * Applied at render rather than fixed in the content: an author writing a
 * plain arrow is doing nothing wrong, and every chapter after this one would
 * otherwise have to remember.
 */
const EMOJI_DEFAULTING = /([\u2194-\u2199\u21A9\u21AA\u2600-\u26FF\u2B05-\u2B07\u2190-\u2193])(?!\uFE0E)/g;

function asText(value: string): string {
  return value.replace(EMOJI_DEFAULTING, '$1\uFE0E');
}

function plainText(nodes: Node[]): string {
  return nodes
    .map((n) => (n.kind === 'text' ? n.value : n.kind === 'br' ? ' ' : plainText(n.children)))
    .join('');
}

/**
 * Which reader look a run belongs to. 'pilot' is the rebuilt reading system
 * being tried on one topic (see components/textbook/pilot.ts): bold at
 * SemiBold rather than Bold, and numeric exponents of any length raised.
 */
export type MarkupLook = 'current' | 'pilot' | 'stix';

/** The revise screens' maths face (see app/_layout.tsx). Italic is its own family. */
export const STIX = {
  regular: 'STIXTwoText_400Regular',
  italic: 'STIXTwoText_400Regular_Italic',
  semibold: 'STIXTwoText_600SemiBold',
  /** Maths letters in a SemiBold name: a Regular italic there looked like a lighter, other font. */
  semiboldItalic: 'STIXTwoText_600SemiBold_Italic',
  math: 'STIXTwoMath_400Regular',
} as const;

/**
 * STIX Two's italic g is, by default, a two-storey g with almost no slant.
 * Beside other italic letters ("ρgh") it passes; on its own ("g", "ρg",
 * g_eff, "(2g)") it reads as an upright roman g among italic symbols, on
 * every card of Gravitation, Fluids and Oscillations. Not Android: the font's
 * own outline, drawn off the phone by FreeType, matches the phone's pixels
 * (Android review, 2026-10-20). The same font carries the single-storey
 * italic g that printed maths uses, as its stylistic set 1 and as U+0261.
 * React Native 0.81 drops stylistic sets on the way to Android's text engine
 * (its MapBuffer conversion passes only the five numeric/small-caps
 * variants), so the letter is swapped for U+0261 instead, in italic runs only:
 * same font, same width, the one g everywhere.
 */
export const ITALIC_G = '\u0261';
const isItalicFamily = (f?: string) => f === STIX.italic || f === STIX.semiboldItalic;

/**
 * The maths symbols STIX Two Text does not carry but its companion STIX Two
 * Math does: arrows, operators and relations (√ ≈ ≤ ≥ → ⇒ ⟹ ∞ ∝ ≠ ⊆ …),
 * worked out from the two fonts' own character maps. Left alone, each phone
 * would draw them from its own fonts, so an iPhone, a Samsung and a Pixel
 * would each show a different √. In the STIX look they come from STIX Two
 * Math instead, the same on every phone. (Raised and lowered letters, ᵃ ₙ,
 * are in neither font; they are drawn, see drawnRun.)
 */
/**
 * The reader's maths symbols that neither Onest nor Android's Roboto has: on
 * Android they fell to a thin symbols font, half-height and pale (⇒ ⇌ ↔ ∝ ≡ ∼
 * ∥ ⊥ ≪ ⟹ …; Android review of Chemistry 11, 2026-10-30), so they are set in
 * STIX Two Math. The arrows, operators, letterlike and bracket blocks, minus
 * what Onest draws itself (→ − ≈ ≤ ≥) and what Roboto draws well (√ ∫ ∂ ∞ ⟨ ⟩
 * stay as they were, checked in content/textbooks/__tests__/display-fonts).
 */
const PILOT_MATH = /[\u2100-\u2121\u2123-\u214F\u2190-\u2191\u2193-\u21FF\u2200-\u2201\u2203-\u2210\u2213-\u2219\u221D\u221F-\u222A\u222C-\u2247\u2249-\u2263\u2266-\u22FF\u27C0-\u27E5\u27EA-\u27FF\u2900-\u297F\u2A00-\u2AFF]+/g;
const STIX_MATH_ONLY = /[\u2190-\u21EA\u21F4-\u2211\u2213-\u2214\u2216-\u23FF\u27C0-\u27C9\u27CB-\u27CD\u27D0-\u27FF\u2900-\u2AFF\u25A0-\u25CB\u25CD-\u25FF]+/g;
/**
 * The reader's text with its maths symbols in STIX Two Math (see PILOT_MATH),
 * and an upright letter or digit carrying a vector arrow (the zero vector 0⃗)
 * in STIX Two Text: Onest has no combining arrow, so Android drew it from
 * another font, off its letter.
 */
const PILOT_RUN = new RegExp(`${PILOT_MATH.source}|\\S\u20d7`, 'g');
function pilotRuns(text: string, key: string) {
  const out: ReactNode[] = [];
  let at = 0;
  for (const m of text.matchAll(PILOT_RUN)) {
    if (m.index! > at) out.push(text.slice(at, m.index));
    out.push(
      <Text key={`${key}.${m.index}`} style={{ fontFamily: m[0].endsWith('\u20d7') ? STIX.regular : STIX.math }}>
        {m[0]}
      </Text>
    );
    at = m.index! + m[0].length;
  }
  if (at < text.length) out.push(text.slice(at));
  return out;
}

function stixRuns(text: string, key: string, only: RegExp = STIX_MATH_ONLY) {
  const out: ReactNode[] = [];
  let at = 0;
  for (const m of text.matchAll(only)) {
    if (m.index! > at) out.push(text.slice(at, m.index));
    out.push(
      <Text key={`${key}.${m.index}`} style={{ fontFamily: STIX.math }}>
        {m[0]}
      </Text>
    );
    at = m.index! + m[0].length;
  }
  if (at < text.length) out.push(text.slice(at));
  return out;
}

/** Digits and signs only. Unicode's raised digits are one consistent set, so
 *  unlike raised letters they do not stagger at any length: 10⁻¹⁹ is safe. */
const NUMERIC_RUN = /^[0-9+\-−=() ]+$/;

/**
 * Raised and lowered letters, in the STIX look, are drawn rather than looked up.
 *
 * STIX has the raised and lowered digits and signs (10⁻¹⁹, n₁) but only a
 * handful of the letters, and no phone font matches it: Mᵃ came out with a
 * sans-serif "a" from the system, a different one on iPhone and Android. So a
 * run with any letter in it is set small in STIX itself, in a tiny inline
 * View, which, unlike nested Text, can be moved off the baseline. The whole
 * run moves together, so M⁻ʸ⁺ᶻ stays one piece in one face.
 */
const DRAWN_SUP = 0.7;
export const SUP_RISE = 0.16;
/**
 * How far a drawn subscript's box is lowered, in ems of the line's size.
 * Measured on the Android review screenshots of Physics 12 Ch 2 (2026-10-22,
 * 1080 px wide, the formula's 19 at 53.3 px an em): a drawn script's own
 * baseline sits 0.227 em above the bottom of its box (font 0.7, line 0.77),
 * and STIX's lowered digits (₁, bbox bottom −229/1000) sit 0.229 em below the
 * line's baseline. At 0.34 the drawn letters sat 6 px (0.113 em) above the
 * digits beside them: Cₙ next to C₁, Qᵢ next to Q₁ ("series" bottom 571,
 * ₁ bottom 577, "1" bottom 565). 0.227 + 0.229 = 0.456, so 0.45 puts a drawn
 * subscript on the digits' baseline.
 */
export const SUB_DROP = 0.45;
/**
 * A subscript that is only a sign, E₋ and E₊. STIX's own ₋ and ₊ (and a minus
 * lowered as far as a subscript is) centre the sign on the baseline, where a
 * lone minus is a bar along the foot of the letter and E₋ read as "E_" (Android
 * review of Physics 12 Ch 1, 2026-10-22). So the sign is drawn, lowered only
 * this far: a small minus's bar (STIX's maths axis, 0.258 of its 0.7 em) then
 * sits 0.14 em above the baseline, low enough to read as a subscript and high
 * enough to read as a minus (0.227 + 0.7 × 0.258 − 0.27 = 0.14). The plus goes
 * with it, so E₊ and E₋ sit level. lib/diagrams/kit.ts tspans matches it.
 */
export const SIGN_SUB_DROP = 0.27;
const SIGN_ONLY = /^\s*[+\-−]\s*$/;
type Ink = { family?: string; color?: TextStyle['color'] };

/**
 * A raised run that is a word, not a variable: "th" in nᵗʰ, "max", "rev",
 * "ln". Two or more letters together in the run's own (non-<i>) text; a
 * product of variables (−kt) is wrapped in <i> by the content and keeps its
 * italic from that.
 */
export const isWordScript = (run: string) => /[A-Za-z]{2,}/.test(run);

/**
 * U+2060 WORD JOINER, set on both sides of a drawn script. On Android the
 * script's inline View is an object-replacement character in the line, which
 * the line breaker may break before or after (UAX 14, LB20), so a subscript
 * could fall to the next line away from its letter (∑ m|ᵢ, a|ₜ). A word joiner
 * forbids a break on either side of it (LB11, which wins over LB20). It draws
 * nothing, on either platform.
 */
export const WJ = '\u2060';

function drawnRun(name: 'sup' | 'sub', children: Node[], size: number, key: string, ink: Ink, drop = SUB_DROP) {
  const shift = name === 'sup' ? -size * SUP_RISE : size * drop;
  return (
    <View key={key} style={{ transform: [{ translateY: shift }] }}>
      {scriptText(name, children, size, key, ink)}
    </View>
  );
}

/**
 * A subscript and a superscript on one base, Σ from i=1 to n, ∫ from A to B,
 * vₓ², ᴬ_Z X: ONE inline View, the superscript above, the subscript below,
 * both from the left edge, as wide as the wider of the two. Drawn as two
 * runs side by side they staggered ("Σ i=1 ⁿ", the n to the right of the
 * i=1; Android review of Physics 12 Ch 2, 2026-10-22).
 *
 * Each half lands exactly where a single drawn run of its kind would: the
 * whole View is raised as a superscript is, and the subscript is lowered
 * from there by the rise and the drop together. The subscript is pulled back
 * over the superscript by a negative margin, so the View's own box is one
 * script high, the same box a single run puts in the line: on Android that
 * box is the line's ascent (an inline View is a placeholder sitting on the
 * baseline), and a taller one would push its line's baseline down.
 */
function drawnPair(sup: Node[], sub: Node[], size: number, key: string, ink: Ink, italicBase = false, pre = false) {
  const line = size * DRAWN_SUP * 1.1;
  return (
    // Before a symbol (⁴⁰₁₈Ar) the two numbers stand flush against it, on the right.
    <View key={key} style={{ alignItems: pre ? 'flex-end' : 'flex-start', transform: [{ translateY: -size * SUP_RISE }] }}>
      {/* After an italic letter the superscript steps right of the letter's
          overhang (see PAIR_KERN); the subscript stays tucked under it. */}
      <View style={{ height: line, marginLeft: italicBase ? size * PAIR_KERN : 0 }}>{scriptText('sup', sup, size, `${key}.p`, ink)}</View>
      <View style={{ height: line, marginTop: -line, transform: [{ translateY: size * (SUP_RISE + SUB_DROP) }] }}>
        {scriptText('sub', sub, size, `${key}.b`, ink)}
      </View>
    </View>
  );
}

/**
 * How far a stacked pair's superscript stands off an italic base. An italic
 * letter's top leans past its own advance (STIX's italic r by 0.033 em, f and
 * the capitals more), and the pair starts at that advance, so the "2" of
 * rᵢ² ran into the arm of the r (Android review of Physics 12 Ch 1,
 * 2026-10-22). STIX's own ² carries a side bearing that clears it; the drawn
 * "2", set small, does not. A single drawn superscript is not moved: STIX's
 * raised digits are glyphs, and a raised letter (xⁿ) is italic, leaning the
 * same way as its base.
 */
const PAIR_KERN = 0.05;

/** Does the run before index i end in an italic letter (so a script after it meets the letter's overhang)? */
function italicBefore(nodes: Node[], i: number, ink: Ink): boolean {
  const prev = nodes[i - 1];
  if (!prev) return false;
  if (prev.kind === 'tag' && prev.name === 'i') return true;
  return prev.kind === 'text' && isItalicFamily(ink.family) && /\S$/.test(prev.value);
}

function scriptText(name: 'sup' | 'sub', children: Node[], size: number, key: string, ink: Ink) {
  const small = size * DRAWN_SUP;
  // A raised letter is an exponent, a variable (Mᵃ, xⁿ), so it is italic like
  // every other variable, even where the content left it upright. Not a word
  // used as a label (nᵗʰ, a raised "max" or "ln"): that stays upright.
  const label = isWordScript(plainText(children.filter((c) => !(c.kind === 'tag' && c.name === 'i'))));
  // Only its letters, though: the digits, signs and brackets of an exponent
  // stay upright as they are everywhere else (V^(γ−1), not V^(γ−1) slanted whole).
  const italic = name === 'sup' && !label && (!ink.family || ink.family === STIX.regular);
  const kids = italic ? italicLetters(children) : children;
  return (
    <Text style={{ fontFamily: ink.family ?? STIX.regular, fontSize: small, lineHeight: small * 1.1, color: ink.color }}>
      {render(kids, small, key, 'stix', ink)}
    </Text>
  );
}

/** Every run of letters outside an <i> wrapped in one, the rest left as it is. */
function italicLetters(nodes: Node[]): Node[] {
  return nodes.flatMap((n): Node[] => {
    if (n.kind === 'br' || (n.kind === 'tag' && n.name === 'i')) return [n];
    if (n.kind === 'tag') return [{ ...n, children: italicLetters(n.children) }];
    // Greek capitals (Δ, Σ) are operators, upright like everywhere else: e^(−ΔG°/RT).
    return n.value
      .split(/([\u0391-\u03a9]+|[A-Za-z\u00c0-\u024f\u0370-\u0390\u03aa-\u03ff]+)/)
      .filter(Boolean)
      .map((part): Node => (/^[A-Za-z\u00c0-\u024f\u0370-\u0390\u03aa-\u03ff]/.test(part) ? { kind: 'tag', name: 'i', children: [{ kind: 'text', value: part }] } : { kind: 'text', value: part }));
  });
}

/** Ready-made raised and lowered letters typed into a string (Mᵃ) become the
 *  <sup>/<sub> the rest of the content uses, so the STIX look draws them too. */
const LETTER_OF: Record<string, [string, 'sup' | 'sub']> = {};
for (const [k, v] of Object.entries(SUPERS)) if (/[a-z]/.test(k)) LETTER_OF[v] = [k, 'sup'];
for (const [k, v] of Object.entries(SUBS)) if (/[a-z]/.test(k)) LETTER_OF[v] = [k, 'sub'];
const READY_LETTERS = new RegExp(`[${Object.keys(LETTER_OF).join('')}]`, 'gu');
function untypeLetters(html: string): string {
  return html.replace(READY_LETTERS, (c) => `<${LETTER_OF[c][1]}>${LETTER_OF[c][0]}</${LETTER_OF[c][1]}>`).replace(/<\/(sup|sub)><\1>/g, '');
}

/**
 * A sliver of space where two glyphs meet that the font never set side by
 * side (Android review of Physics 12 Ch 1–2, 2026-10-22). Each is followed by
 * a word joiner (see WJ): these spaces are places a line may break, and these
 * must not.
 *
 * - After a vector arrow, before a closing bar or bracket: |τ⃗|. The combining
 *   arrow over an italic letter reaches past the letter's advance (STIX's
 *   U+20D7 runs to x = 137, and the phone set its head 4 px into the bar, to
 *   the bar's far edge). A THIN SPACE (U+2009, 0.125 em, 6.7 px at the
 *   formula's 19) clears it by about 2.5 px.
 * - After a subscript, before an italic letter whose foot reaches left of its
 *   advance: ε₀A, 4πε₀R, μ₀μᵣ, μᵣNIA, ε_rms I_rms. STIX's ₀ ends 0.027 em
 *   short of its advance and the italic A begins 0.062 em before its own, so
 *   the two touched; a drawn letter subscript ends closer still (r 0.005 em,
 *   s 0.019, at its 0.7). A HAIR SPACE (U+200A, 0.063 em) parts them. Only
 *   the letters whose outline, between a subscript's bottom and top (−0.24
 *   to +0.27 em), reaches left of their advance, measured from STIX Two
 *   Italic's own outlines (FOOTED below): C, O, V, n, s and the like start at
 *   or right of it and are left alone. On the Physics 12 Ch 5 screenshots ₀
 *   ran into the tail of μ (−0.040 em) and the drawn r of μᵣ came within a
 *   pixel of N's foot (−0.021), while μᵣn kept 4 px (n starts 0.049 em in)
 *   and was left. Every lowered digit, ₀ to ₉, a <sub> of digits (μ₀I₁I₂ has
 *   two), and a drawn <sub> of letters.
 * - After an italic capital, before its superscript: I²R, E², V². The
 *   capital's top leans past its advance (STIX's italic I by 0.052 em, V by
 *   0.099) and STIX's ² starts only 0.027 em into its own, so the 2 met the
 *   serif (Android review of Physics 12 Ch 3, 2026-10-22). The same hair
 *   space, as a stacked pair steps off its letter by PAIR_KERN; not before a
 *   stacked pair (I²ₓ), which steps itself.
 * - After an italic f, before a spaced operator: f × (loop area), f = 50 Hz.
 *   The f's hook leans 0.146 em past its advance, so on the Physics 12 Ch 5
 *   screenshots f stood 6 px from its × where the other operators stood 15
 *   to 18 px from their neighbours. A THIN SPACE gives that back. And before
 *   a closing bracket or bar, (2πf): STIX's ")" starts 0.031 em into its
 *   advance and rises to 0.730 em, level with the hook's tip (0.711), so the
 *   hook's ball stood 1 px from the bracket's top on the Physics 12 Ch 6
 *   screenshot (card 22). The same THIN SPACE leaves 0.010 em of overlap in
 *   advance terms, and the bracket's top curls away from it: 6 px clear.
 * - After a vector arrow that ends the text: B⃗ · dl⃗ as a meaning's symbol,
 *   a fraction's side, a name. The arrow reaches past its letter's advance
 *   (U+20D7 in STIX Two Italic runs to x = +137 with no advance of its own,
 *   and over a tall letter it is set higher and so further right along the
 *   slant: 10 px, 0.20 em, past the l of dl⃗ on the Physics 12 Ch 4 screenshot,
 *   at 19). Android draws a text clipped to its own width, and that width
 *   stops at the last advance, so the head went: the arrow over the l of the
 *   symbol "∮ B⃗ · dl⃗" (card 4) was a flat bar, at any height of headroom. A
 *   FOUR-PER-EM SPACE (U+2005, 0.25 em) after it widens the text to hold the
 *   head; trailing, it draws nothing and never starts a line.
 * - After a vector arrow over a narrow italic letter, before a spaced
 *   operator: dl⃗ = …, S⃗ = …. The arrow is centred over its letter and is
 *   0.446 em wide, so it reaches past the advance by about 0.33 − w/2 em for
 *   a letter w em wide (0.20 em over l, w = 0.273, measured 10 px at 19 on
 *   the Physics 12 Ch 4 screenshot; 0.04 over B, w = 0.593, 2 to 3 px). "dl⃗ ="
 *   kept a third of the usual gap before its "=" (Physics 12 Ch 8 cards 4 and
 *   6). A THIN SPACE where it reaches 0.15 em or more (w ≤ 0.36: f i j l t I),
 *   a HAIR SPACE where it reaches 0.06 (w ≤ 0.54: a b c e … z J S ε λ …);
 *   the wider letters keep their gap.
 * - After an italic f, before a tall letter: fλ, πfC. The f's hook (to 0.711
 *   em, 0.146 past its advance) met the top of the λ on Physics 12 Ch 8
 *   cards 15 and 19, and all but met the C of 2πfC (Ch 7 card 9): an italic
 *   capital's top-left starts only about 0.12 em in. A THIN SPACE; before an
 *   x-height letter (fx, fω) the hook passes over it and nothing is added.
 * - After a subscript and superscript pair, before an italic letter with a
 *   foot: I²ᵣₘₛR. The pair is as wide as its wider half, so when that is the
 *   subscript ("rms" under "2") it ends where a lone subscript would, and its
 *   s met R's foot (Physics 12 Ch 7 card 5). The same HAIR SPACE as after a
 *   lone subscript; not when the superscript is the wider (it stands above
 *   the foot), nor a pair of STIX's own digits (v₀²), whose ² ends the run.
 * - Between a closing bracket and √: (1/R)√(L/C). STIX Two Math's √ starts
 *   0.018 em into its advance with its tick at the baseline, against ")"'s
 *   lower curl, and the two stood 3 px apart (Physics 12 Ch 7 card 18). A
 *   HAIR SPACE.
 * - After an upright differential d, before an italic letter whose foot runs
 *   left at the baseline: dA⃗, dX. STIX's d ends 0.025 em short of its advance
 *   and the italic A starts 0.062 em before its own, so A's foot touched the d
 *   (Physics 12 Ch 8 cards 2 and 6). A HAIR SPACE, before A, X, J and λ only
 *   (−0.031 em or more): dx, dt, dB keep their own spacing.
 * - Round ⇒ and ⇔. STIX Two Math's ⇒ starts on its own advance (side
 *   bearings 0 and 0.061 em, where = has 0.062 and 0.062) and ⇔'s are 0.020,
 *   so "LI ⇒ L" stood 9 px off the I and 14 px off the L (Physics 12 Ch 6;
 *   the = signs 14 to 17). A thin space before ⇒ and a hair space after it
 *   (0.125 − 0.063, the 0.061 its own bearings differ by) make the two sides
 *   equal; ⇔ takes a hair space each side. They sit outside the content's own
 *   spaces, so a line that breaks there starts on the arrow, not on a sliver
 *   of space. ⟹, ⟺ and → carry 0.056 to 0.072 em of their own, as much as
 *   =, and are left.
 *
 * Not before a slash after a subscript (V_s/V_p, I_max/√2): measured again on
 * Physics 12 Ch 7 card 27, the s stands 5 px off the slash at the foot and 9
 * at its top, the same as Ch 5's. (Fig 7.2's label I_max/√2, at 13 on the
 * drawing, stood 1 px off, the x's top serif against the slash: it carries
 * its own hair space, lib/diagrams/physics-12-07.ts.)
 * Not "E(" (Ch 8 card 21): 9 to 10 px clear
 * at every height on the screenshot, E's arms ending well short of the
 * bracket's curve.
 *
 * Not after a superscript before an italic capital (B²A): the capitals'
 * outlines at a superscript's height start 0.088 em or more right of their
 * advance, and on the Ch 5 screenshot the ² stood 12 px above A's foot, with
 * no ink between them in any column. Not before a slash after a subscript
 * (H_c/n, q_enc/ε₀): 5 to 7 px of clear space on the screenshots.
 */
const HAIR = '\u200a', THIN = '\u2009';
const ARROW_BEFORE_CLOSER = /\u20d7(<\/i>)?(?=[|‖)\]}])/g;
/**
 * The STIX Two Italic letters whose outline reaches left of their advance
 * between −240 and +270 units, a subscript's height: the leftmost point there,
 * in thousandths of an em, A −62, X −55, J −31, M −23, N −21, B D E F H I K L
 * −13, P R −9, Z −3; Γ −7, Δ −43, Λ −60, Π Σ −13; f −124, j −135, y −76,
 * x −37, g −28 (ɡ, drawn in its place, −16), z −22; β −21, λ −27, μ −40,
 * ρ −33, χ −131. Not s (0), p (+5), n (+49), Ξ (+7), ν (+106 there).
 */
const FOOTED = 'ABDEFHIJKLMNPRXZΓΔΛΠΣfgjxyzβλμρχ';
const SUB_BEFORE_FOOTED_ITALIC = new RegExp(`(<sub>(?:(?!</sub>).)*</sub>|[₀-₉])(?=<i>[${FOOTED}])`, 'g');
const ITALIC_CAPITAL_BEFORE_SUP = /(<i>[^<]*[A-Z]<\/i>)(?=<sup>(?:(?!<\/sup>).)*<\/sup>(?!<sub>))/g;
const ITALIC_F_BEFORE_OPERATOR = /(f<\/i>)(?=[ \u00a0][=×+−<>≤≥≈∝])/g;
const ITALIC_F_BEFORE_CLOSER = /(f<\/i>)(?=[|‖)\]}])/g;
/** A vector arrow with nothing after it but closing tags and the slack spaces a caller adds. */
const ARROW_AT_END = /\u20d7((?:<\/[bi]>)*)(?=[\s\u200a\u2060]*$)/;
export const ARROW_ROOM = '\u2005';
/** STIX Two Italic letters by how far an arrow over them reaches past their advance (0.33 − width/2 em; see above). */
const ARROW_FAR = 'fijltI', ARROW_NEAR = 'abcegkopqrsvxyzJSβγδεθλνρστχ';
const ARROW_BEFORE_OPERATOR = new RegExp(`([${ARROW_FAR}${ARROW_NEAR}])\u20d7(</i>)(?=[ \u00a0][=×+−<>≤≥≈∝])`, 'g');
const ITALIC_F_BEFORE_TALL = /(<i>[^<]*?f)(?=[bdhklλδθβA-Z]|<\/i><i>[bdhklλδθβA-Z])/g;
const PAIR_BEFORE_FOOTED_ITALIC = new RegExp(`(<sub>((?:(?!</sub>).)*)</sub><sup>((?:(?!</sup>).)*)</sup>|<sup>((?:(?!</sup>).)*)</sup><sub>((?:(?!</sub>).)*)</sub>)(?=<i>[${FOOTED}])`, 'g');
const CLOSER_BEFORE_ROOT = /([)\]])(?=√)/g;
const DIFFERENTIAL_BEFORE_FOOT = /(^|[\s\u00a0(·∮∫=/−+])d(?=<i>[AXJλ])/g;
const plainOf = (h: string) => h.replace(/<[^>]+>/g, '');
const SPACE_BEFORE_ARROW = /([ \u00a0])([⇒⇔])/g;
const SPACE_AFTER_ARROW = /([⇒⇔])([ \u00a0])/g;
export function hairSpaces(html: string): string {
  return html
    .replace(ARROW_BEFORE_CLOSER, `\u20d7$1${THIN}${WJ}`)
    .replace(SUB_BEFORE_FOOTED_ITALIC, `$1${HAIR}${WJ}`)
    .replace(ITALIC_CAPITAL_BEFORE_SUP, `$1${HAIR}${WJ}`)
    .replace(ITALIC_F_BEFORE_OPERATOR, `$1${THIN}${WJ}`)
    .replace(ITALIC_F_BEFORE_CLOSER, `$1${THIN}${WJ}`)
    .replace(ARROW_BEFORE_OPERATOR, (_, l: string, close: string) => `${l}\u20d7${close}${ARROW_FAR.includes(l) ? THIN : HAIR}${WJ}`)
    .replace(ITALIC_F_BEFORE_TALL, `$1${THIN}${WJ}`)
    .replace(PAIR_BEFORE_FOOTED_ITALIC, (all: string, _p: string, subA?: string, supA?: string, supB?: string, subB?: string) => {
      const sub = plainOf(subA ?? subB ?? ''), sup = plainOf(supA ?? supB ?? '');
      const numeric = (t: string) => /^[0-9+\-−=() ]+$/.test(t);
      return (numeric(sub) && numeric(sup)) || sub.length < sup.length ? all : `${all}${HAIR}${WJ}`;
    })
    .replace(CLOSER_BEFORE_ROOT, `$1${HAIR}${WJ}`)
    .replace(DIFFERENTIAL_BEFORE_FOOT, `$1d${HAIR}${WJ}`)
    .replace(ARROW_AT_END, `\u20d7$1${ARROW_ROOM}`)
    .replace(SPACE_BEFORE_ARROW, (_, sp: string, arrow: string) => `${arrow === '⇒' ? THIN : HAIR}${WJ}${sp}${arrow}`)
    .replace(SPACE_AFTER_ARROW, `$1${HAIR}${WJ}$2`);
}

/**
 * WHERE A READING LINE MAY BREAK (the pilot look). Android broke reading text
 * at any space: "3.336 × / 10⁻³⁰", "0.23 / D", "N_b / = 10", "x / − 4 = −1"
 * (Android review of Chemistry 11, 2026-10-30). So a short term stays with
 * the operator beside it, a number with its unit and with "× 10", and a line
 * never breaks straight after a "/". A glued run is capped so it can still
 * wrap. And a lowered script or an italic capital gets a hair of room before
 * the bracket, "/" or prime that ran into it (CrO₄), K_a(HCN), σ2p_z/π, K′), and
 * an opening bracket room before an italic f, whose tail reaches back under it: (fp₃).
 */
const READER_OPS = new Set(['=', '≈', '×', '−', '+', '<', '>', '≤', '≥', '⇒', '→', '⇌', '∝', '≡', '∶']);
const READER_UNIT = /^(?:D|pm|nm|μm|Å|kJ|J|mol|g|kg|mg|mL|L|K|atm|bar|Pa|kPa|cm|mm|km|m|s|ms|μs|ns|min|h|°C|°|V|kV|mV|eV|keV|MeV|C|μC|nC|M|Hz|kHz|MHz|u|Ω|kΩ|MΩ|H|mH|μH|F|μF|nF|pF|A|mA|μA|W|kW|MW|N|T|mT|G|Wb|rad|dB|cd|lm|lx|Bq|Gy|Sv)(?:[.,;:)]|$)/;
const READER_GLUE_MAX = 26;
export function readerBreaks(html: string): string {
  const plain = (t: string) => t.replace(/<[^>]*>/g, '');
  const toks = html
    .replace(/(<\/sub>)(?=[()[\]/])/g, `$1${HAIR}${WJ}`)
    .replace(/([([{|])(?=<i>f)/g, `$1${HAIR}${WJ}`)
    .replace(/(<i>[^<]*[A-Z]<\/i>)(?=′)/g, `$1${HAIR}${WJ}`)
    // Only a maths slash: "1/N_A", "10⁻¹⁰/0.1", "[salt]/[base]"; a list of words ("linear/trigonal-planar/…") may still break.
    .replace(/([^<\s])\/(?=[\d([]|<[isb]|[A-Za-zα-ωΑ-Ω](?![a-z]))/g, `$1/${WJ}`)
    .split(' ');
  let out = toks[0];
  let run = plain(toks[0]).length;
  for (let k = 1; k < toks.length; k++) {
    const a = plain(toks[k - 1]), b = plain(toks[k]);
    const glue =
      (READER_OPS.has(b) && (a.length <= 3 || (b === '×' && /[0-9]$/.test(a)))) ||
      (READER_OPS.has(a) && b.length > 0 && b.length <= 7) ||
      (/[0-9]$/.test(a) && READER_UNIT.test(b));
    if (glue && run + 1 + b.length <= READER_GLUE_MAX) {
      out += ' ' + toks[k];
      run += 1 + b.length;
    } else {
      out += ' ' + toks[k];
      run = b.length;
    }
  }
  return out;
}

function styleFor(name: 'b' | 'i' | 'sup' | 'sub', size: number, look: MarkupLook): TextStyle {
  switch (name) {
    case 'b':
      if (look === 'stix') return { fontFamily: STIX.semibold };
      return { fontFamily: look === 'pilot' ? 'Onest_600SemiBold' : 'Onest_700Bold' };
    case 'i':
      // STIX's italic is a family of its own; asking iOS to slant the regular face fakes it.
      // The reader's maths is STIX too, as on the Formula sheet: Georgia could
      // not seat a hat on k (k̂) and Android's serif is a different face again.
      if (look === 'stix' || look === 'pilot') return { fontFamily: STIX.italic };
      return { fontFamily: SERIF, fontStyle: 'italic' };
    // Unicode has no subscript capitals and no subscript f or g, so a run
    // like v<sub>AB</sub> can never map and always lands here. Until now this
    // returned a size change ONLY, which put the run on the same baseline: a
    // fallback subscript and a fallback superscript were indistinguishable,
    // and v<sub>AB</sub> read as "vAB". React Native cannot translate nested
    // text, but lineHeight moves it within the line box, which is enough to
    // tell one from the other.
    // Not on Android: there a nested run's lineHeight sets the height of the
    // whole line it sits in, so a line holding one fallback script came out
    // taller or shorter than its neighbours.
    case 'sup':
      return Platform.OS === 'android' ? { fontSize: size * 0.72 } : { fontSize: size * 0.72, lineHeight: size * 0.78 };
    case 'sub':
      return Platform.OS === 'android' ? { fontSize: size * 0.72 } : { fontSize: size * 0.72, lineHeight: size * 1.55 };
  }
}

type Script = { kind: 'tag'; name: 'sup' | 'sub'; children: Node[] };
const isScript = (n: Node | undefined): n is Script => !!n && n.kind === 'tag' && (n.name === 'sup' || n.name === 'sub');

/**
 * A <sub> straight after a <sup>, or a <sup> straight after a <sub>: the two
 * scripts of one base, drawn stacked (see drawnPair). Not when both are digits
 * and signs (v₀², ⁴₂He): those stay STIX's own raised and lowered glyphs, the
 * same as everywhere else, which sit at their own heights already.
 */
function scriptPair(nodes: Node[], i: number): { sup: Script; sub: Script; pre: boolean } | null {
  const a = nodes[i], b = nodes[i + 1];
  if (!isScript(a) || !isScript(b) || a.name === b.name) return null;
  // Mass and atomic number before an element symbol (⁴⁰₁₈Ar) are stacked
  // too: side by side, a two-digit pair read as "40 18 Ar" (Android review of
  // Chemistry 11 Ch 2, 2026-10-30).
  const next = nodes[i + 2];
  const pre = next?.kind === 'text' && /^[A-Z]/.test(next.value);
  if (!pre && NUMERIC_RUN.test(plainText(a.children)) && NUMERIC_RUN.test(plainText(b.children))) return null;
  return a.name === 'sup' ? { sup: a, sub: b, pre } : { sup: b, sub: a, pre };
}

function render(nodes: Node[], size: number, keyPrefix: string, look: MarkupLook, ink: Ink = {}): ReactNode[] {
  const out: ReactNode[] = [];
  for (let i = 0; i < nodes.length; i++) {
    const pair = look === 'stix' || look === 'pilot' ? scriptPair(nodes, i) : null;
    if (pair) {
      const key = `${keyPrefix}.${i}`;
      // Joined on both sides like a single drawn run (see WJ): one unit, never split from its base.
      out.push(
        <Fragment key={key}>
          {WJ}
          {drawnPair(pair.sup.children, pair.sub.children, size, `${key}.d`, ink, italicBefore(nodes, i, ink), pair.pre)}
          {WJ}
        </Fragment>
      );
      i++;
      continue;
    }
    out.push(renderNode(nodes[i], i, size, keyPrefix, look, ink));
  }
  return out;
}

function renderNode(node: Node, i: number, size: number, keyPrefix: string, look: MarkupLook, ink: Ink): ReactNode {
  const key = `${keyPrefix}.${i}`;
  if (node.kind === 'text') {
    const value = look === 'stix' && isItalicFamily(ink.family) ? node.value.replace(/g/g, ITALIC_G) : node.value;
    return <Fragment key={key}>{look === 'stix' ? stixRuns(asText(value), key) : look === 'pilot' ? pilotRuns(asText(value), key) : asText(value)}</Fragment>;
  }
  if (node.kind === 'br') return <Fragment key={key}>{'\n'}</Fragment>;

  if (node.name === 'sup' || node.name === 'sub') {
    const run = plainText(node.children);
    // A sign on its own, lowered less than a letter or digit is (see SIGN_SUB_DROP).
    if ((look === 'stix' || look === 'pilot') && node.name === 'sub' && SIGN_ONLY.test(run))
      return (
        <Fragment key={key}>
          {WJ}
          {drawnRun('sub', [{ kind: 'text', value: run.trim().replace('-', '−') }], size, `${key}.d`, ink, SIGN_SUB_DROP)}
          {WJ}
        </Fragment>
      );
    // STIX look: digits and signs are STIX's own raised glyphs; anything with a letter is drawn.
    // The reader draws them the same way: Unicode has a lowered x but no
    // lowered y or z, so A<sub>y</sub> sat on the line beside a lowered Aₓ.
    // Joined on both sides (see WJ), so the script never leaves its letter
    // and the letter after it never leaves the script.
    if ((look === 'stix' || look === 'pilot') && !NUMERIC_RUN.test(run))
      return (
        <Fragment key={key}>
          {WJ}
          {drawnRun(node.name, node.children, size, `${key}.d`, ink)}
          {WJ}
        </Fragment>
      );
    // Unicode raised letters are drawn by whichever font on the device
    // happens to carry each one, and they do not share a baseline or a
    // weight. One or two characters reads fine; "initial" as seven of them
    // comes out visibly staggered, which is worse than the styled fallback.
    // So map short runs, and let longer ones go through as scaled text.
    // The pilot raises longer runs too: any numeric run (10⁻¹⁹), and a run
    // of up to 8 that maps character for character (M⁻ʸ⁺ᶻ, Lˣ⁺³ʸ⁺²ᶻ), which
    // otherwise fell back to small text on the baseline and read as "M−y+z".
    // The STIX look raises like the pilot's: STIX has the raised digits, and
    // a raised letter it lacks (Mᵃ) is drawn by the system font, which is a
    // closer match than the fallback below. That fallback cannot move text
    // off the baseline in React Native, so a "raised" a sat low and read as
    // a subscript: the wrong meaning, which is worse than a near-match glyph.
    const mappable = run.length <= 2 || ((look === 'pilot' || look === 'stix') && (NUMERIC_RUN.test(run) || run.length <= 8));
    const raised = mappable ? toUnicode(run, node.name === 'sup' ? SUPERS : SUBS) : null;
    // Raised glyphs need no size change; they are already small and in the
    // right place. Shrinking them again would make them unreadable.
    // The reader sets raised and lowered digits in STIX, which has all of them:
    // Onest has only ¹ ² ³, so ⁴–⁹ came from another font, and its ¹ is a bare
    // stroke, so ¹¹B and 10¹¹ read as a ditto mark (Android review, 2026-10-30).
    if (raised && look === 'pilot' && NUMERIC_RUN.test(run)) return <Text key={key} style={{ fontFamily: STIX.regular }}>{raised}</Text>;
    if (raised) return <Fragment key={key}>{raised}</Fragment>;
    return (
      <Text key={key} style={styleFor(node.name, size, look)}>
        {render(node.children, size * 0.72, key, look, ink)}
      </Text>
    );
  }

  // Maths letters in a SemiBold run (a card's name) are SemiBold italic.
  const style = node.name === 'i' && look === 'stix' && (ink.family === STIX.semibold || ink.family === STIX.semiboldItalic) ? { fontFamily: STIX.semiboldItalic } : styleFor(node.name, size, look);
  return (
    <Text key={key} style={style}>
      {render(node.children, size, key, look, look === 'stix' ? { ...ink, family: style.fontFamily } : ink)}
    </Text>
  );
}

export interface MarkupProps {
  html: string;
  /** The base font size, needed to scale sup/sub against their own run. */
  size: number;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  look?: MarkupLook;
}

export function Markup({ html, size, style, numberOfLines, look = 'current' }: MarkupProps) {
  const nodes = useMemo(() => parse(look === 'stix' ? hairSpaces(untypeLetters(html)) : look === 'pilot' ? hairSpaces(readerBreaks(html)) : html), [html, look]);
  // A drawn raised run sits in a View, which does not inherit from the Text
  // around it, so it is handed the face and colour it is set in.
  const flat = StyleSheet.flatten(style) ?? {};
  return (
    <Text style={style} numberOfLines={numberOfLines}>
      {render(nodes, size, 'm', look, { family: flat.fontFamily, color: flat.color })}
    </Text>
  );
}

/** The same content with every tag dropped, for places that need a plain
 *  string (accessibility labels, a one-line preview). */
/** Only real tags go: a comparison ("t∗ < 0 … <i>") is text, not the start of one. */
export function markupToText(html: string): string {
  return html.replace(/<\/?[a-zA-Z][^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

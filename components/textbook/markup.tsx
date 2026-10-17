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
export const STIX = { regular: 'STIXTwoText_400Regular', italic: 'STIXTwoText_400Regular_Italic', semibold: 'STIXTwoText_600SemiBold', math: 'STIXTwoMath_400Regular' } as const;

/**
 * The maths symbols STIX Two Text does not carry but its companion STIX Two
 * Math does: arrows, operators and relations (√ ≈ ≤ ≥ → ⇒ ⟹ ∞ ∝ ≠ ⊆ …),
 * worked out from the two fonts' own character maps. Left alone, each phone
 * would draw them from its own fonts, so an iPhone, a Samsung and a Pixel
 * would each show a different √. In the STIX look they come from STIX Two
 * Math instead, the same on every phone. (Raised and lowered letters, ᵃ ₙ,
 * are in neither font; they are drawn, see drawnRun.)
 */
const STIX_MATH_ONLY = /[\u2190-\u21EA\u21F4-\u2211\u2213-\u2214\u2216-\u23FF\u27C0-\u27C9\u27CB-\u27CD\u27D0-\u27FF\u2900-\u2AFF\u25A0-\u25CB\u25CD-\u25FF]+/g;
function stixRuns(text: string, key: string) {
  const out: ReactNode[] = [];
  let at = 0;
  for (const m of text.matchAll(STIX_MATH_ONLY)) {
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
const SUP_RISE = 0.16;
const SUB_DROP = 0.34;
type Ink = { family?: string; color?: TextStyle['color'] };

function drawnRun(name: 'sup' | 'sub', children: Node[], size: number, key: string, ink: Ink) {
  const small = size * DRAWN_SUP;
  // A raised letter is an exponent, a variable (Mᵃ, xⁿ), so it is italic like
  // every other variable, even where the content left it upright.
  const family = name === 'sup' && (!ink.family || ink.family === STIX.regular) ? STIX.italic : ink.family;
  const shift = name === 'sup' ? -size * SUP_RISE : size * SUB_DROP;
  return (
    <View key={key} style={{ transform: [{ translateY: shift }] }}>
      <Text style={{ fontFamily: family ?? STIX.regular, fontSize: small, lineHeight: small * 1.1, color: ink.color }}>
        {render(children, small, key, 'stix', { ...ink, family })}
      </Text>
    </View>
  );
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

function render(nodes: Node[], size: number, keyPrefix: string, look: MarkupLook, ink: Ink = {}): ReactNode[] {
  return nodes.map((node, i) => {
    const key = `${keyPrefix}.${i}`;
    if (node.kind === 'text') return <Fragment key={key}>{look === 'stix' ? stixRuns(asText(node.value), key) : asText(node.value)}</Fragment>;
    if (node.kind === 'br') return <Fragment key={key}>{'\n'}</Fragment>;

    if (node.name === 'sup' || node.name === 'sub') {
      const run = plainText(node.children);
      // STIX look: digits and signs are STIX's own raised glyphs; anything with a letter is drawn.
      // The reader draws them the same way: Unicode has a lowered x but no
      // lowered y or z, so A<sub>y</sub> sat on the line beside a lowered Aₓ.
      if ((look === 'stix' || look === 'pilot') && !NUMERIC_RUN.test(run)) return drawnRun(node.name, node.children, size, key, ink);
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
      if (raised) return <Fragment key={key}>{raised}</Fragment>;
      return (
        <Text key={key} style={styleFor(node.name, size, look)}>
          {render(node.children, size * 0.72, key, look, ink)}
        </Text>
      );
    }

    return (
      <Text key={key} style={styleFor(node.name, size, look)}>
        {render(node.children, size, key, look, look === 'stix' ? { ...ink, family: styleFor(node.name, size, look).fontFamily } : ink)}
      </Text>
    );
  });
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
  const nodes = useMemo(() => parse(look === 'stix' ? untypeLetters(html) : html), [html, look]);
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

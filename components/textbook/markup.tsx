import { Fragment, useMemo } from 'react';
import { Platform, StyleProp, Text, TextStyle } from 'react-native';

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
  r: 'ʳ', s: 'ˢ', t: 'ᵗ', x: 'ˣ', y: 'ʸ', j: 'ʲ', p: 'ᵖ', ' ': ' ',
};

const SUBS: Record<string, string> = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇',
  '8': '₈', '9': '₉', '+': '₊', '-': '₋', '−': '₋', '=': '₌', '(': '₍', ')': '₎',
  a: 'ₐ', e: 'ₑ', i: 'ᵢ', j: 'ⱼ', k: 'ₖ', m: 'ₘ', n: 'ₙ', o: 'ₒ', p: 'ₚ',
  r: 'ᵣ', s: 'ₛ', t: 'ₜ', u: 'ᵤ', v: 'ᵥ', x: 'ₓ', ' ': ' ',
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

function styleFor(name: 'b' | 'i' | 'sup' | 'sub', size: number): TextStyle {
  switch (name) {
    case 'b':
      return { fontFamily: 'AnekLatin_700Bold' };
    case 'i':
      return { fontFamily: SERIF, fontStyle: 'italic' };
    case 'sup':
    case 'sub':
      return { fontSize: size * 0.72 };
  }
}

function render(nodes: Node[], size: number, keyPrefix: string) {
  return nodes.map((node, i) => {
    const key = `${keyPrefix}.${i}`;
    if (node.kind === 'text') return <Fragment key={key}>{asText(node.value)}</Fragment>;
    if (node.kind === 'br') return <Fragment key={key}>{'\n'}</Fragment>;

    if (node.name === 'sup' || node.name === 'sub') {
      const raised = toUnicode(plainText(node.children), node.name === 'sup' ? SUPERS : SUBS);
      // Raised glyphs need no size change; they are already small and in the
      // right place. Shrinking them again would make them unreadable.
      if (raised) return <Fragment key={key}>{raised}</Fragment>;
      return (
        <Text key={key} style={styleFor(node.name, size)}>
          {render(node.children, size * 0.72, key)}
        </Text>
      );
    }

    return (
      <Text key={key} style={styleFor(node.name, size)}>
        {render(node.children, size, key)}
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
}

export function Markup({ html, size, style, numberOfLines }: MarkupProps) {
  const nodes = useMemo(() => parse(html), [html]);
  return (
    <Text style={style} numberOfLines={numberOfLines}>
      {render(nodes, size, 'm')}
    </Text>
  );
}

/** The same content with every tag dropped, for places that need a plain
 *  string (accessibility labels, a one-line preview). */
export function markupToText(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

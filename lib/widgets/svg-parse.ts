import { parse as parseSvgXml } from 'react-native-svg';

/**
 * Why `SvgXml` would refuse this string, asked BEFORE it is handed one — or
 * null when it will draw.
 *
 * `SvgXml` (react-native-svg 15.12.1, `src/xml.tsx`) wraps its parse in a
 * try/catch: on a throw it calls `onError` — by default a bare
 * `console.error` — and returns `fallback ?? null`, and it renders nothing at
 * all when the parse returns null, which is what a string with no root element
 * does. Either way the board is BLANK, and nothing upstream can react, because
 * the child has already returned by the time the parent could.
 *
 * Measured against this version's own parser: `''`, `'not svg at all'`,
 * `'<svg><g></svg>'` and `'<svg><rect</svg>'` all throw — the second with a
 * TypeError from inside the parser rather than its own error path, which no
 * amount of shape-checking the string in advance would have predicted. So the
 * check is the library's OWN exported `parse`, the same function `SvgXml` calls
 * on the same string; the two cannot disagree about a malformed figure, and
 * the answer is decided before render rather than by whether an `onError`
 * happened to fire.
 *
 * Shared by `BoardWidget`'s svg rungs and `BoardDiagram`/`BoardBlockView`, so
 * every renderer on the board refuses the same strings for the same reason and
 * reports it under the one name, `svg_invalid` (U5).
 */
export function svgParseError(xml: string): string | null {
  try {
    return parseSvgXml(xml) === null ? 'parsed to no root element' : null;
  } catch (err) {
    return err instanceof Error ? err.message : String(err);
  }
}

/**
 * The UTF-8 size of the string, which is what "bytes" means in a gap detail
 * and in the corpus check that reads the same stored column. `String.length`
 * counts UTF-16 code units and under-reports any figure with a `°`, `μ` or `→`
 * in its labels. Hand-rolled rather than `TextEncoder` so it cannot depend on
 * which JS engine the build is running on.
 */
export function utf8ByteLength(s: string): number {
  let n = 0;
  for (let i = 0; i < s.length; i += 1) {
    const c = s.charCodeAt(i);
    if (c < 0x80) n += 1;
    else if (c < 0x800) n += 2;
    else if (c >= 0xd800 && c <= 0xdbff && i + 1 < s.length
             && (s.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
      n += 4;                       // a surrogate pair is one 4-byte code point
      i += 1;
    } else n += 3;
  }
  return n;
}

/**
 * XML CHARACTER REFERENCES IN TEXT, DECODED.
 *
 * react-native-svg's parser copies the text between tags verbatim — it never
 * decodes `&lt;`, `&gt;`, `&amp;` or numeric references — so a figure labelled
 * `λ/a &lt;&lt; 1` or `&#8594;` drew those characters literally on the phone
 * while every browser drew `<<` and `→` (X1, 2026-09-29: 178 of 2,238 stored
 * figures, and any live one with <, > or & in a label). The text cannot be
 * decoded in the string (a raw `<` would open a tag), so it is decoded in the
 * parsed tree, before the tree becomes elements: `parse`'s middleware.
 *
 * The textbook diagrams draw through it too (components/revise/
 * diagram-card.tsx): their SVG escapes "&" as XML requires, so the phone
 * showed "Current &amp; Ohm's law" on the chapter map (Android review of
 * Physics 12 Ch 3, 2026-10-22). Decoding in the renderer covers every
 * chapter's drawing, whichever escaper wrote it.
 */
const NAMED_ENTITIES: Record<string, string> = { lt: '<', gt: '>', amp: '&', quot: '"', apos: "'" };

export function decodeXmlEntities(text: string): string {
  return text.replace(/&(#x[0-9a-fA-F]+|#[0-9]+|lt|gt|amp|quot|apos);/g, (whole, ref: string) => {
    if (ref[0] !== '#') return NAMED_ENTITIES[ref] ?? whole;
    const code = ref[1] === 'x' || ref[1] === 'X' ? parseInt(ref.slice(2), 16) : parseInt(ref.slice(1), 10);
    return Number.isInteger(code) && code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : whole;
  });
}

type ParsedNode = { children: (ParsedNode | string)[] };

/** `parse` middleware: decodes every text child in the tree, in place. */
export function decodeTextNodes<T extends ParsedNode>(node: T): T {
  node.children = node.children.map((child) =>
    typeof child === 'string' ? decodeXmlEntities(child) : decodeTextNodes(child)
  );
  return node;
}

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

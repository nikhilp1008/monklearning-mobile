import { font, type FontName } from './font-file';

/**
 * HOW WIDE A PIECE OF THE APP'S MARKUP IS, from the real fonts' advance widths.
 *
 * Every size in the app scales with the screen's width (constants/scale.ts,
 * a 390-wide reference), text included, so a line breaks in the same place on
 * every phone. Widths here are in those reference units. Kerning and the hair
 * spaces the app adds are ignored: a line is off by at most a few hundredths
 * of an em, which is why the checks keep a margin.
 */
export const REF = {
  /** Formula sheet card: the text column inside the card (Android emulator, 1080 px at 420 dpi, card 946 px, padding 20). */
  card: 301,
  cardExpr: 19,
  cardText: 16,
  /** Reader: the page column (gutter 24 each side), and the column inside an example / MCQ / practice card. */
  page: 342,
  inCard: 310,
  read: 15,
} as const;

/** Drawn raised and lowered runs are set at this fraction of the text size (components/textbook/markup.tsx DRAWN_SUP). */
const SCRIPT = 0.7;
const ZERO = /[ ​⁠︎️̀-ͯ⃐-⃿]/;

export type Look = 'stix' | 'pilot';

/** Width of markup set at `size`, in the look's fonts. Unknown glyphs count 0.55 em (a typical fallback). */
export function width(html: string, size: number, look: Look): number {
  let w = 0;
  let italic = 0, bold = 0, script = 0;
  const re = /<(\/?)(b|i|sup|sub)>|<br\s*\/?>|&nbsp;|([\s\S])/gi;
  for (const m of html.matchAll(re)) {
    if (m[2]) {
      const d = m[1] ? -1 : 1;
      const t = m[2].toLowerCase();
      if (t === 'i') italic += d;
      else if (t === 'b') bold += d;
      else script += d;
      continue;
    }
    const ch = m[0] === '&nbsp;' ? ' ' : m[3];
    if (!ch || ZERO.test(ch)) continue;
    const cp = ch.codePointAt(0)!;
    const face: FontName =
      look === 'stix' || italic > 0
        ? italic > 0
          ? 'stixItalic'
          : bold > 0
            ? 'stixSemiBold'
            : 'stixRegular'
        : bold > 0
          ? 'onestSemiBold'
          : 'onestRegular';
    const adv = font(face).advance(cp) ?? font('stixMath').advance(cp) ?? 0.55;
    w += adv * size * (script > 0 ? SCRIPT : 1);
  }
  return w;
}

/** The pieces a line may break between: the markup cut at its plain (breakable) spaces, tags kept whole per piece. */
export function pieces(html: string): string[] {
  // Android also breaks after a hyphen, and after a slash with no joiner after it.
  return html
    .split(' ')
    .flatMap((p) => p.split(/(?<=[a-z]-)(?=[a-z])|(?<=\/)(?!\u2060)(?=[A-Za-z])/))
    .filter((p) => p.replace(/<[^>]*>/g, '').length > 0);
}

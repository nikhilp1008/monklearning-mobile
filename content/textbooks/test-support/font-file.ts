import fs from 'fs';
import path from 'path';

/**
 * THE APP'S REAL FONT FILES, READ FOR THE DISPLAY CHECKS.
 *
 * Which characters a font carries, and how wide each one is, straight from
 * the .ttf the app loads: a character the font lacks is drawn by a phone font
 * instead (Android drew ⇒ half-height and pale, and a raised 1 as a bare
 * stroke, so ¹¹B read as a ditto mark), and the widths let a check lay a line
 * out the way the phone will. Only the cmap and the advance widths are read;
 * kerning is ignored (a few hundredths of an em per line at most).
 */
export interface FontFile {
  name: string;
  has(cp: number): boolean;
  /** Advance width in em, or null when the font has no glyph for it. */
  advance(cp: number): number | null;
}

const FONTS = path.join(__dirname, '../../../node_modules/@expo-google-fonts');
export const FONT_PATHS = {
  onestRegular: 'onest/400Regular/Onest_400Regular.ttf',
  onestSemiBold: 'onest/600SemiBold/Onest_600SemiBold.ttf',
  onestBold: 'onest/700Bold/Onest_700Bold.ttf',
  stixRegular: 'stix-two-text/400Regular/STIXTwoText_400Regular.ttf',
  stixItalic: 'stix-two-text/400Regular_Italic/STIXTwoText_400Regular_Italic.ttf',
  stixSemiBold: 'stix-two-text/600SemiBold/STIXTwoText_600SemiBold.ttf',
  stixSemiBoldItalic: 'stix-two-text/600SemiBold_Italic/STIXTwoText_600SemiBold_Italic.ttf',
  stixMath: 'stix-two-math/400Regular/STIXTwoMath_400Regular.ttf',
} as const;
export type FontName = keyof typeof FONT_PATHS;

const cache = new Map<FontName, FontFile>();

export function font(name: FontName): FontFile {
  const hit = cache.get(name);
  if (hit) return hit;
  const f = readFont(name, fs.readFileSync(path.join(FONTS, FONT_PATHS[name])));
  cache.set(name, f);
  return f;
}

function readFont(name: string, buf: Buffer): FontFile {
  const tables = new Map<string, number>();
  const count = buf.readUInt16BE(4);
  for (let i = 0; i < count; i++) {
    const at = 12 + i * 16;
    tables.set(buf.toString('latin1', at, at + 4), buf.readUInt32BE(at + 8));
  }
  const table = (tag: string) => {
    const at = tables.get(tag);
    if (at === undefined) throw new Error(`${name}: no ${tag} table`);
    return at;
  };
  const unitsPerEm = buf.readUInt16BE(table('head') + 18);
  const metrics = buf.readUInt16BE(table('hhea') + 34);
  const hmtx = table('hmtx');
  const glyphOf = cmap(buf, table('cmap'));
  const advanceOf = (glyph: number) => buf.readUInt16BE(hmtx + Math.min(glyph, metrics - 1) * 4) / unitsPerEm;
  return {
    name,
    has: (cp) => glyphOf(cp) > 0,
    advance: (cp) => {
      const g = glyphOf(cp);
      return g > 0 ? advanceOf(g) : null;
    },
  };
}

/** The best Unicode cmap subtable: format 12 (all planes) if present, else format 4. */
function cmap(buf: Buffer, at: number): (cp: number) => number {
  const n = buf.readUInt16BE(at + 2);
  let f4 = -1, f12 = -1;
  for (let i = 0; i < n; i++) {
    const rec = at + 4 + i * 8;
    const platform = buf.readUInt16BE(rec), encoding = buf.readUInt16BE(rec + 2);
    const sub = at + buf.readUInt32BE(rec + 4);
    const format = buf.readUInt16BE(sub);
    const unicode = platform === 0 || (platform === 3 && (encoding === 1 || encoding === 10));
    if (!unicode) continue;
    if (format === 12) f12 = sub;
    if (format === 4) f4 = sub;
  }
  if (f12 >= 0) {
    const groups = buf.readUInt32BE(f12 + 12);
    return (cp) => {
      let lo = 0, hi = groups - 1;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1, g = f12 + 16 + mid * 12;
        const start = buf.readUInt32BE(g), end = buf.readUInt32BE(g + 4);
        if (cp < start) hi = mid - 1;
        else if (cp > end) lo = mid + 1;
        else return buf.readUInt32BE(g + 8) + (cp - start);
      }
      return 0;
    };
  }
  if (f4 < 0) throw new Error('no Unicode cmap');
  const segs = buf.readUInt16BE(f4 + 6) / 2;
  const ends = f4 + 14, starts = ends + segs * 2 + 2, deltas = starts + segs * 2, ranges = deltas + segs * 2;
  return (cp) => {
    if (cp > 0xffff) return 0;
    for (let s = 0; s < segs; s++) {
      if (cp > buf.readUInt16BE(ends + s * 2)) continue;
      const start = buf.readUInt16BE(starts + s * 2);
      if (cp < start) return 0;
      const delta = buf.readInt16BE(deltas + s * 2), range = buf.readUInt16BE(ranges + s * 2);
      if (range === 0) return (cp + delta) & 0xffff;
      const g = buf.readUInt16BE(ranges + s * 2 + range + (cp - start) * 2);
      return g === 0 ? 0 : (g + delta) & 0xffff;
    }
    return 0;
  };
}

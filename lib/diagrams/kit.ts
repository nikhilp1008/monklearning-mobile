/**
 * THE DIAGRAM KIT: one drawing language for every textbook diagram ("App tags").
 *
 *   Objects      ink 1.7, rounded joins, on white. Nothing is ever filled with colour.
 *   Names        in small white Onest tags with a fine border, joined to their
 *                part by a thin line and a dot: "Object", "Galvanometer".
 *   Symbols      quantities and values in STIX Two, straight on the drawing: F, mg, θ, 10 Ω.
 *   Highlight    one thing per drawing in marigold, the thing it is about; its tag gets a marigold edge.
 *   Helpers      axes, construction lines and the parts of a vector in grey, parts dashed.
 *   Result       what the drawing tells you in this case: one ink-edged bold tag,
 *                always at the bottom right, never under the heading.
 *
 * CORRECTNESS. A drawing can follow every rule above and still teach the wrong
 * thing if one dot or label is out of place, so a Sketch records every tag,
 * point and label it draws, and `audit` checks the result: every tag inside
 * the frame, no tag on another tag, a point or a label, and no tag line
 * running through a point it does not name or through another tag. The
 * tests run it on every case of every diagram, next to each diagram's own
 * physics checks.
 *
 * Drawings are SVG strings, drawn on device by react-native-svg, parsed with
 * their text decoded (components/revise/diagram-card.tsx): the parser copies
 * text as it stands, so an escaped "&" here would show as "&amp;" without it.
 * Fonts are named by their loaded family (see app/_layout.tsx). Maths text is
 * kept apart (`texts`): react-native-svg mis-spaces a line that switches
 * between STIX's regular and italic faces, so on device it is set by the
 * app's own text engine, laid exactly over the drawing (components/revise/
 * diagram-card.tsx). `svg()` still writes it into the SVG for anything else.
 */

import { barFoot, barsOf, inkTop, OVER, OVERLINE_MARK, overRuns, SCRIPT_TOP } from '../overline';

export const C = { ink: '#2E2A24', text: '#1C1A16', grey: '#C0B8A6', slate: '#57534B', faint: '#9C988C', mari: '#EEA31F', amber: '#9A6A12', border: 'rgba(28,26,22,.2)' } as const;
export const F = { tag: 'Onest_600SemiBold', bold: 'Onest_700Bold', stix: 'STIXTwoText_400Regular', stixI: 'STIXTwoText_400Regular_Italic', stixB: 'STIXTwoText_600SemiBold' } as const;

export const TAG_SIZE = 12;
export const RESULT_SIZE = 14;
/** Onest SemiBold runs about 0.56 em a character, plus the tag's padding. */
/** The room a tag or a tag's line must leave round a symbol on the drawing: clear is not enough, it must read as separate. */
export const LABEL_GAP = 4;
export const tagW = (t: string) => t.length * TAG_SIZE * 0.56 + 20;
export const resultW = (t: string) => t.length * RESULT_SIZE * 0.58 + 28;

/** Em widths of STIX Two as Android sets it, by kind of character (measured on the 2026-10-20 sweep). */
const EM: [RegExp, number][] = [
  [/[ \u00a0]/, 0.33],
  [/[⇒→←↔⇔]/, 1],
  [/[WMΩΣ∑]/, 0.9],
  [/[mwΔ⅓⅔½¼¾]/, 0.75],
  [/[=+−×<>≤≥≈±∶]/, 0.68],
  [/[A-Z]/, 0.7],
  [/[ijlrtfı]/, 0.32],
  [/[a-z]/, 0.5],
  [/[α-ω]/, 0.55],
  [/[0-9]/, 0.5],
  [/[()[\]/,.:;′'|]/, 0.33],
  [/[²³¹⁰⁴-⁹₀-₉]/, 0.35],
  [/[\u20d7\u0302\u0304\u2060\u200a\u2009]/, 0],
];
const emOf = (ch: string) => EM.find(([r]) => r.test(ch))?.[1] ?? 0.6;

/**
 * How wide a line of maths (<i>, <sub>, <sup>) runs, in STIX at `size`. A
 * flat half-em a character left boxes too narrow for "ΔQ = ΔU + ΔW" and
 * "(⅓ML² + mL²)ω" on Android, so each character counts by its kind; never
 * less than the old half-em estimate, so no box shrinks.
 */
export function mathW(html: string, size: number): number {
  let em = 0, small = 0, n = 0;
  const re = /<(\/?)(i|sub|sup)>|([^<]+|<)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    if (m[2]) { if (m[2] !== 'i') small += m[1] ? -1 : 1; continue; }
    for (const ch of m[3]) {
      em += emOf(ch) * (small > 0 ? 0.7 : 1);
      n++;
    }
  }
  return Math.max(em, n * 0.5) * size;
}

export type Rect = [number, number, number, number];
/** A piece of maths text: STIX, with <i>, <sub> and <sup>; (x, y) is its baseline point. */
export type TextRec = { x: number; y: number; html: string; size: number; anchor: 'start' | 'middle' | 'end'; color: string; semibold?: boolean };
type TagRec = { name: string; rect: Rect; from: [number, number] | null; to: [number, number] | null };
type PointRec = { x: number; y: number; r: number };
type LabelRec = { text: string; rect: Rect };
export type TagSpec = { t: string; p?: [number, number]; ring?: [number, number, number]; own?: [number, number]; hi?: boolean; key?: 'ring' | 'dot'; /** No dot where the line ends: it ends on a marker of the drawing's own (a ring's edge). */ bare?: boolean; at: [number, number, 'start' | 'middle' | 'end'][] };

export const r1 = (n: number) => Math.round(n * 10) / 10;
const esc = (s: string) => s.replace(/&(?!#?\w+;)/g, '&amp;');

/** Inline maths markup (<i>, <sub>, <sup>) as tspans: italic is STIX's own italic face. */
export function tspans(html: string, size: number): string {
  let out = '';
  // A "<" that does not open one of the three tags is text ("θ < 90°"): it used
  // to be skipped, so previews lost it.
  const re = /<(\/?)(i|sub|sup)>|((?:<(?!\/?(?:i|sub|sup)>)|[^<])+)/g;
  const stack: string[] = [];
  let m: RegExpExecArray | null;
  // How far the baseline sits from where it started; each run moves it to where it should be.
  let at = 0;
  while ((m = re.exec(html))) {
    if (m[2]) {
      if (m[1]) stack.pop();
      else stack.push(m[2]);
      continue;
    }
    const italic = stack.includes('i'), sub = stack.includes('sub'), sup = stack.includes('sup');
    const sz = sub || sup ? r1(size * 0.7) : size;
    // A subscript that is only a sign (E₋, E₊) is lowered less, so the minus's
    // bar sits 0.14 em above the baseline, not on it as "E_" (the same height
    // as on the phone: SIGN_SUB_DROP in components/textbook/markup.tsx).
    const sign = sub && /^\s*[+\-−]\s*$/.test(m[3]);
    const want = sub ? r1(size * (sign ? 0.04 : 0.28)) : sup ? r1(-size * 0.45) : 0;
    const dy = r1(want - at);
    at = want;
    out += `<tspan font-family="${italic ? F.stixI : F.stix}" font-size="${sz}"${dy ? ` dy="${dy}"` : ''}>${esc(m[3]).replace(/</g, '&lt;')}</tspan>`;
  }
  return out;
}

/**
 * A NOT bar over the whole of what it negates, in the SVG's own text (a
 * thumbnail's): the combining marks come out of the text, and each bar is a
 * line over its run, placed by the same character widths as mathW (see
 * lib/overline.ts for what the marks mean). On the card the text is laid over
 * by the app and draws its own bars (components/textbook/markup.tsx).
 */
const MARKS = new RegExp(OVERLINE_MARK.source, 'g');
function overlineSvg(t: TextRec): string {
  const chars: { ch: string; w: number; top: number; italic: boolean; bars: number }[] = [];
  const re = /<(\/?)(i|sub|sup)>|((?:<(?!\/?(?:i|sub|sup)>)|[^<])+)/g;
  const stack: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(t.html))) {
    if (m[2]) {
      if (m[1]) stack.pop();
      else stack.push(m[2]);
      continue;
    }
    const sub = stack.includes('sub'), sup = stack.includes('sup');
    for (const ch of m[3]) {
      const bars = barsOf(ch), last = chars[chars.length - 1];
      if (bars) {
        if (last) last.bars += bars;
        continue;
      }
      const top = /\s/.test(ch) ? 0 : sup ? SCRIPT_TOP.sup : sub ? SCRIPT_TOP.sub : inkTop(ch, false);
      chars.push({ ch, w: emOf(ch) * (sub || sup ? 0.7 : 1) * t.size, top, italic: stack.includes('i') && !sub, bars: 0 });
    }
  }
  const at = [0];
  chars.forEach((c) => at.push(at[at.length - 1] + c.w));
  const total = at[at.length - 1];
  const x0 = t.anchor === 'middle' ? t.x - total / 2 : t.anchor === 'end' ? t.x - total : t.x;
  const lean = OVER.lean * t.size, thick = OVER.thick * t.size;
  return overRuns(chars.map((c) => c.bars))
    .map(({ level, start, end }) => {
      const run = chars.slice(start, end);
      const foot = barFoot(Math.max(...run.map((c) => c.top)), level, Math.max(...run.map((c) => c.bars)));
      const y = t.y - foot * t.size - thick / 2;
      const a = x0 + at[start] + (run[0].italic ? lean : 0), b = x0 + at[end] + (run[run.length - 1].italic ? lean : 0);
      return `<line x1="${r1(a)}" y1="${r1(y)}" x2="${r1(b)}" y2="${r1(y)}" stroke="${t.color}" stroke-width="${r1(thick)}"/>`;
    })
    .join('');
}

/** Point-to-segment distance. */
export function near(p: [number, number], a: [number, number], b: [number, number]) {
  const dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy || 1;
  const k = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L));
  return Math.hypot(p[0] - a[0] - k * dx, p[1] - a[1] - k * dy);
}
/** Does the segment a–b pass through the rectangle (shrunk by `inset`)? */
export function crosses(a: [number, number], b: [number, number], r: Rect, inset = 1) {
  const n = Math.max(2, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 2));
  for (let i = 1; i < n; i++) {
    const x = a[0] + ((b[0] - a[0]) * i) / n, y = a[1] + ((b[1] - a[1]) * i) / n;
    if (x > r[0] + inset && x < r[2] - inset && y > r[1] + inset && y < r[3] - inset) return true;
  }
  return false;
}
const hit = (a: Rect, b: Rect, m = 0) => !(a[2] + m <= b[0] || b[2] + m <= a[0] || a[3] + m <= b[1] || b[3] + m <= a[1]);

export class Sketch {
  private parts: string[] = [];
  private top: string[] = [];
  tags: TagRec[] = [];
  points: PointRec[] = [];
  labels: LabelRec[] = [];
  unplaced: TagSpec[] = [];
  texts: TextRec[] = [];
  constructor(public w: number, public h: number) {}

  /** Maths text in STIX. Not checked by the audit: use `sym` for labels that tags must keep clear of. */
  text(x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; semibold?: boolean } = {}) {
    this.texts.push({ x, y, html, size: o.size ?? 15, anchor: o.anchor ?? 'middle', color: o.color ?? C.text, semibold: o.semibold });
    return this;
  }

  add(svg: string) { this.parts.push(svg); return this; }
  /** A point that means something (a reading, a node, a dot): tags must keep clear of it. */
  point(x: number, y: number, r: number, svg: string) { this.points.push({ x, y, r }); return this.add(svg); }
  dot(x: number, y: number, r = 3.4, fill: string = C.ink) { return this.point(x, y, r, `<circle cx="${r1(x)}" cy="${r1(y)}" r="${r}" fill="${fill}"/>`); }

  line(x1: number, y1: number, x2: number, y2: number, o: { color?: string; w?: number; dash?: boolean } = {}) {
    return this.add(`<line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2)}" y2="${r1(y2)}" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.4}" stroke-linecap="round"${o.dash ? ' stroke-dasharray="4 4"' : ''}/>`);
  }
  /** A vector: a line and a filled head. */
  vec(x1: number, y1: number, x2: number, y2: number, o: { color?: string; w?: number; dash?: boolean } = {}) {
    const col = o.color ?? C.ink, w = o.w ?? 1.8, a = Math.atan2(y2 - y1, x2 - x1), L = 9, hw = 4.5;
    const bx = x2 - L * Math.cos(a), by = y2 - L * Math.sin(a);
    this.line(x1, y1, bx, by, { color: col, w, dash: o.dash });
    return this.add(`<path d="M${r1(x2)} ${r1(y2)} L${r1(bx + hw * Math.sin(a))} ${r1(by - hw * Math.cos(a))} L${r1(bx - hw * Math.sin(a))} ${r1(by + hw * Math.cos(a))} Z" fill="${col}"/>`);
  }
  /** A small head in the middle of a line, pointing along it (rays, currents). */
  mid(x1: number, y1: number, x2: number, y2: number, col: string = C.ink) {
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, a = Math.atan2(y2 - y1, x2 - x1), L = 6, hw = 3.5, bx = mx - L * Math.cos(a), by = my - L * Math.sin(a);
    return this.add(`<path d="M${r1(mx)} ${r1(my)} L${r1(bx + hw * Math.sin(a))} ${r1(by - hw * Math.cos(a))} L${r1(bx - hw * Math.sin(a))} ${r1(by + hw * Math.cos(a))} Z" fill="${col}"/>`);
  }
  /** A symbol or value in STIX, on the drawing. Markup allowed: <i>, <sub>, <sup>. */
  sym(x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; italic?: boolean } = {}) {
    const size = o.size ?? 15, anchor = o.anchor ?? 'middle', color = o.color ?? C.text;
    const body = o.italic ? `<i>${html}</i>` : html;
    const plain = html.replace(/<[^>]+>/g, '');
    const w = plain.length * size * 0.5, x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
    this.labels.push({ text: plain, rect: [x0, y - size * 0.72, x0 + w, y + size * 0.22] });
    return this.text(x, y, body, { size, anchor, color });
  }
  /** A tag: its name in a white pill, joined to the point it names. */
  tag(x: number, y: number, t: string, px: number | null, py: number | null, o: { hi?: boolean; anchor?: 'start' | 'middle' | 'end'; bare?: boolean } = {}) {
    const hi = !!o.hi, w = tagW(t), anchor = o.anchor ?? 'start';
    const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x, rect: Rect = [x0, y, x0 + w, y + 22];
    let svg = '';
    let from: [number, number] | null = null, to: [number, number] | null = null;
    if (px != null && py != null) {
      const cx = Math.max(x0 + 8, Math.min(x0 + w - 8, px)), cy = py < y ? y : y + 22;
      from = [px, py]; to = [cx, cy];
      svg += `<line x1="${r1(px)}" y1="${r1(py)}" x2="${r1(cx)}" y2="${cy}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/>${o.bare ? '' : `<circle cx="${r1(px)}" cy="${r1(py)}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`}`;
    }
    svg += `<rect x="${r1(x0)}" y="${y}" width="${r1(w)}" height="22" rx="11" fill="#fff" stroke="${hi ? C.mari : C.border}" stroke-width="${hi ? 1.5 : 1}"/>`;
    svg += `<text x="${r1(x0 + w / 2)}" y="${y + 15.5}" text-anchor="middle" font-family="${F.tag}" font-size="${TAG_SIZE}" fill="${hi ? C.amber : C.text}">${esc(t)}</text>`;
    this.tags.push({ name: t, rect, from, to });
    this.top.push(svg);
    return this;
  }
  /** What the drawing tells you in this case: always bottom right. */
  result(t: string) {
    const w = resultW(t), x0 = this.w - 8 - w, y = this.h - 38;
    this.tags.push({ name: t, rect: [x0, y, x0 + w, y + 30], from: null, to: null });
    this.top.push(`<rect x="${r1(x0)}" y="${y}" width="${r1(w)}" height="30" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/><text x="${r1(x0 + w / 2)}" y="${y + 20}" text-anchor="middle" font-family="${F.bold}" font-size="${RESULT_SIZE}" fill="${C.text}">${esc(t)}</text>`);
    return this;
  }
  /** The space the result tag takes, for placing tags around it. */
  resultRect(t: string): Rect { const w = resultW(t), x0 = this.w - 8 - w, y = this.h - 38; return [x0, y, x0 + w, y + 30]; }

  /**
   * Place each tag at the first spot it prefers that is inside the frame, clear of
   * placed tags and of every point, and whose line does not run through a point it
   * does not name. A tag on a ring leaves the ring on the side facing the tag.
   * What finds no clear spot goes into a key under the drawing (see `key`).
   */
  place(specs: TagSpec[], reserved: Rect[] = []) {
    const placed: Rect[] = [...reserved, ...this.tags.map((t) => t.rect)];
    for (const sp of specs) {
      const w = tagW(sp.t);
      let done = false;
      for (const [x, y, anchor] of sp.at) {
        const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x, r: Rect = [x0, y, x0 + w, y + 22];
        let p = sp.p as [number, number];
        if (sp.ring) { const [cx, cy, rr] = sp.ring, tx = x0 + w / 2 - cx, ty = y + 11 - cy, k = Math.hypot(tx, ty) || 1; p = [cx + (rr * tx) / k, cy + (rr * ty) / k]; }
        if (r[0] < 2 || r[2] > this.w - 2 || r[1] < 0 || r[3] > this.h) continue;
        if (placed.some((q) => hit(r, q, 6))) continue;
        if (this.points.some((pt) => pt.x > r[0] - 8 && pt.x < r[2] + 8 && pt.y > r[1] - 8 && pt.y < r[3] + 8)) continue;
        if (this.labels.some((l) => hit(r, l.rect, LABEL_GAP))) continue;
        const end: [number, number] = [Math.max(x0 + 8, Math.min(x0 + w - 8, p[0])), p[1] < y ? y : y + 22];
        const own = sp.own ?? p;
        if (this.points.some((pt) => Math.hypot(pt.x - own[0], pt.y - own[1]) > 3 && near([pt.x, pt.y], p, end) < pt.r + 3)) continue;
        if (this.labels.some((l) => crosses(p, end, l.rect, -LABEL_GAP))) continue;
        // a tag line never runs through another tag, nor a tag across another tag's line
        if (placed.some((q) => crosses(p, end, q, -2))) continue;
        if (this.tags.some((t) => t.from && t.to && crosses(t.from, t.to, r, -2))) continue;
        this.tag(x, y, sp.t, p[0], p[1], { hi: sp.hi, anchor, bare: sp.bare });
        placed.push(r);
        done = true;
        break;
      }
      if (!done) this.unplaced.push(sp);
    }
    return this;
  }

  /** The edge case: items no line can reach cleanly are named in a strip under the drawing, each with its own mark. */
  private keyStrip(): string {
    if (!this.unplaced.length) return '';
    let kx = 14;
    const y = this.h + 18;
    return this.unplaced
      .map((sp) => {
        const x = kx;
        kx += 24 + tagW(sp.t);
        const mark = sp.key === 'ring' ? `<circle cx="${x + 6}" cy="${y}" r="6.5" fill="none" stroke="${C.mari}" stroke-width="2.2"/>` : `<circle cx="${x + 6}" cy="${y}" r="3.6" fill="${C.ink}"/>`;
        return `${mark}<text x="${x + 18}" y="${y + 4}" font-family="${F.tag}" font-size="${TAG_SIZE}" fill="${sp.hi ? C.amber : C.text}">${esc(sp.t)}</text>`;
      })
      .join('');
  }

  /** The full height, with the key strip if there is one. */
  get height() { return this.unplaced.length ? this.h + 32 : this.h; }

  /** The drawing. `withTexts: false` leaves the maths text out, for laying it over on device. */
  svg(withTexts = true): string {
    const texts = withTexts
      ? this.texts.map((t) => {
          const barred = OVERLINE_MARK.test(t.html), body = tspans(barred ? t.html.replace(MARKS, '') : t.html, t.size);
          return `<text x="${r1(t.x)}" y="${r1(t.y)}" text-anchor="${t.anchor}" fill="${t.color}">${t.semibold ? body.split(`font-family="${F.stix}"`).join(`font-family="${F.stixB}"`) : body}</text>${barred ? overlineSvg(t) : ''}`;
        }).join('')
      : '';
    return `<svg viewBox="0 0 ${this.w} ${this.height}" xmlns="http://www.w3.org/2000/svg">${this.parts.join('')}${texts}${this.top.join('')}${this.keyStrip()}</svg>`;
  }
}

/** The layout checks. An empty list means the drawing is clear. */
export function audit(s: Sketch): string[] {
  const out: string[] = [];
  s.tags.forEach((t) => { if (t.rect[0] < -1 || t.rect[1] < -1 || t.rect[2] > s.w + 1 || t.rect[3] > s.h + 1) out.push(`"${t.name}" runs outside the frame`); });
  s.tags.forEach((a, i) => s.tags.forEach((b, j) => { if (i < j && hit(a.rect, b.rect)) out.push(`"${a.name}" overlaps "${b.name}"`); }));
  s.tags.forEach((t) => s.points.forEach((p) => { if (p.x + p.r > t.rect[0] && p.x - p.r < t.rect[2] && p.y + p.r > t.rect[1] && p.y - p.r < t.rect[3]) out.push(`"${t.name}" covers a point`); }));
  s.tags.forEach((t) => s.labels.forEach((l) => { if (hit(t.rect, l.rect, LABEL_GAP)) out.push(`"${t.name}" is crowding the label "${l.text}"`); }));
  s.tags.forEach((t) => {
    if (!t.from || !t.to) return;
    s.points.forEach((p) => { if (Math.hypot(p.x - t.from![0], p.y - t.from![1]) > p.r + 1.5 && near([p.x, p.y], t.from!, t.to!) < p.r + 2) out.push(`the line from "${t.name}" crosses a point it does not name`); });
    s.labels.forEach((l) => { if (crosses(t.from!, t.to!, l.rect, -LABEL_GAP)) out.push(`the line from "${t.name}" runs through or brushes the label "${l.text}"`); });
    s.tags.forEach((u) => { if (u !== t && crosses(t.from!, t.to!, u.rect, -2)) out.push(`the line from "${t.name}" runs through the tag "${u.name}"`); });
  });
  return [...new Set(out)];
}

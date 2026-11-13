import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import { stixW } from '@/lib/diagrams/mathematics-11-03b';

/**
 * MATHEMATICS CLASS 12, CHAPTER 2 (Inverse Trigonometric Functions): Figures 2.1–2.10 of the Master Reference book
 * (October 2026 snapshot, math12.pdf), redrawn. Each figure stands on its own "CHAPTER 2 · FIGURES" plate, the page
 * after its caption.
 *
 *   Figure 2.1 (p. 129; caption p. 128), 2.2 (p. 132; caption p. 131), 2.3 (p. 137; caption p. 136): Topic 01, index 0.
 *   Figure 2.4 (p. 140; caption p. 139), 2.5 (p. 143; caption p. 142), 2.6 (p. 147; caption p. 146): Topic 02, index 1.
 *   Figure 2.7 (p. 149; caption p. 148), 2.8 (p. 156; caption p. 155): Topic 03, index 2.
 *   Figure 2.9 (p. 158; caption p. 157), 2.10 (p. 164; caption p. 163): Topic 04, index 3.
 *
 * ONE HIGHLIGHT. The book draws in navy, green, orange and grey; its orange is the one marigold highlight (marigold
 * lines, amber text): 2.1 the line y = 1/2 and the ring round the one official answer; 2.2 the outside angle 7π/6;
 * 2.3 the deleted points of sec⁻¹ and cosec⁻¹; 2.4 the crossed-out −θ and "π − form"; 2.5 the x < 0 branch; 2.6
 * the "subtract π" note and the π − box; 2.7 the overshoot past π/2 and A + B = 2π/3; 2.8 the xy > 1 branch; 2.10
 * the dashed asymptotes. 2.9 has no orange: nothing is marigold. The book's navy and green are ink, its grey slate.
 *
 * NO FILLS. The book's tinted branch bands (2.1, 2.2, 2.4) are grey hatching, computed line by line and kept clear of
 * every label, curve and dot (as Class 11's Fig 3.3). Its tinted boxes (2.5, 2.6, 2.8) are outlines; 2.6's navy strip
 * with white words is an outline with ink words. 2.7's pale half-dial tints (green inside the window, orange outside)
 * are left out: the bold diameter and its ±π/2 mark the window's edge.
 *
 * DOTS. A point ON a graph or a line is a filled dot (Class 11 decision 10: hollow means "not included"); so 2.1's
 * four intersections (hollow rings in the book) are filled, and 2.7's −π/3 (a hollow ring) is filled. Endpoints are
 * exactly as printed: 2.3's open rings at tan⁻¹'s ±π/2, cot⁻¹'s 0 and π, and the deleted π/2 (sec⁻¹) and 0 (cosec⁻¹).
 *
 * FRACTIONS are stacked by hand (two runs and a short rule), also where the book prints a slash (π/2, π/6, 1/2 in
 * running labels). The superscript −1 is STIX's own <sup>, inside one all-STIX label. √(1 − x²) is written with
 * brackets, as the chapter's text writes it (the book draws a vinculum). No em dash anywhere.
 *
 * DEPARTURES, for a phone (each listed in reports-02/md122.md): 2.4 and 2.9's two side-by-side panels stand one
 * above the other (captions' "Left"/"Right" → "Top"/"Bottom"); 2.6's three columns are three cards one above the
 * other ("three-column" → "three-part"); 2.7's two dials are two chips; 2.3 and 2.10's three-by-two grids are two
 * columns by three rows, in the book's reading order.
 */

const W = 340;
type P = [number, number];
const PI = Math.PI;
const DEG = PI / 180;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<\/?(?:i|sub|sup|b|frac|num|den)>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const I = (t: string) => `<i>${t}</i>`;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const inv = (f: string) => `${f}<sup>−1</sup>`;
const X = I('x'), Y = I('y'), TH = I('θ'), AA = I('A'), BB = I('B');
/** The six inverse functions, in JavaScript, each on its principal branch. */
const acot = (x: number) => PI / 2 - Math.atan(x);
const asec = (x: number) => Math.acos(1 / x);
const acsc = (x: number) => Math.asin(1 / x);

/* ---------- lines, labels and the layout checks (as in mathematics-11-14.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean | string; name?: string; free?: boolean };
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
const dashAttr = (d: Stroke['dash']) => (d === true ? ' stroke-dasharray="5 4"' : d ? ` stroke-dasharray="${d}"` : '');
/** A polyline; `free` leaves it out of the clearance check. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  if (!o.free) keep(s, pts, o.name);
}
/** An outlined rectangle, never filled; `rx` rounds its corners (kept as the plain rectangle for the checks). */
function box(s: Sketch, x0: number, y0: number, x1: number, y1: number, o: Stroke & { rx?: number } = {}) {
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(x1 - x0)}" height="${r1(y1 - y0)}" rx="${o.rx ?? 6}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.5}"${dashAttr(o.dash)}/>`);
  keep(s, [[x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]], o.name ?? 'box');
}
/** A circle, kept as a fine polygon for the clearance check. */
function circle(s: Sketch, c: P, r: number, o: Stroke = {}) {
  s.add(`<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r1(r)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  keep(s, Array.from({ length: 241 }, (_, i): P => [c[0] + r * Math.cos((2 * PI * i) / 240), c[1] + r * Math.sin((2 * PI * i) / 240)]), o.name ?? 'circle');
}
/** A filled arrowhead at `tip`, pointing along angle `ang`. */
function head(s: Sketch, tip: P, ang: number, col: string, L = 7) {
  const ux = Math.cos(ang), uy = Math.sin(ang), hw = L * 0.5, bx = tip[0] - L * ux, by = tip[1] - L * uy;
  s.add(`<path d="M${r1(tip[0])} ${r1(tip[1])} L${r1(bx + hw * uy)} ${r1(by - hw * ux)} L${r1(bx - hw * uy)} ${r1(by + hw * ux)} Z" fill="${col}"/>`);
}
/** An arrow with a small filled head at b. */
function arr(s: Sketch, a: P, b: P, o: Stroke & { head?: number } = {}) {
  const col = o.color ?? C.ink, L = Math.min(o.head ?? 7, len(a, b) / 1.6), ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
  const b2: P = [b[0] - L * Math.cos(ang) * 0.8, b[1] - L * Math.sin(ang) * 0.8];
  s.add(`<line x1="${r1(a[0])}" y1="${r1(a[1])}" x2="${r1(b2[0])}" y2="${r1(b2[1])}" stroke="${col}" stroke-width="${o.w ?? 1.4}" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  head(s, b, ang, col, L);
  if (!o.free) keep(s, [a, b], o.name ?? 'arrow');
}
/** A curved arrow (a quadratic from a through ctrl to b), with a head at b, and at a too if `both`. */
function bend(s: Sketch, a: P, ctrl: P, b: P, o: Stroke & { both?: boolean } = {}): P[] {
  const col = o.color ?? C.ink;
  const pts = Array.from({ length: 41 }, (_, i): P => { const t = i / 40, u = 1 - t; return [u * u * a[0] + 2 * u * t * ctrl[0] + t * t * b[0], u * u * a[1] + 2 * u * t * ctrl[1] + t * t * b[1]]; });
  const stopB = pts.findIndex((p) => len(p, b) < 5.5), stopA = o.both ? pts.length - 1 - [...pts].reverse().findIndex((p) => len(p, a) < 5.5) : 0;
  path(s, pts.slice(stopA, stopB > 0 ? stopB + 1 : pts.length), { color: col, w: o.w ?? 1.6, free: true });
  head(s, b, Math.atan2(b[1] - ctrl[1], b[0] - ctrl[0]), col, 8);
  if (o.both) head(s, a, Math.atan2(a[1] - ctrl[1], a[0] - ctrl[0]), col, 8);
  keep(s, pts, o.name ?? 'bend');
  return pts;
}
/** A polyline drawn in pieces, broken wherever it comes within `gap` of a rect in `avoid` (a label on an edge). */
function brokenPath(s: Sketch, pts: P[], avoid: Rect[], gap: number, o: Stroke = {}) {
  const fine: P[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const n = Math.max(1, Math.ceil(len(pts[i], pts[i + 1])));
    for (let k = 0; k < n; k++) fine.push([pts[i][0] + ((pts[i + 1][0] - pts[i][0]) * k) / n, pts[i][1] + ((pts[i + 1][1] - pts[i][1]) * k) / n]);
  }
  fine.push(pts[pts.length - 1]);
  let run: P[] = [];
  const flush = () => { if (run.length > 1) path(s, run, o); run = []; };
  fine.forEach((p) => { if (avoid.some((r) => rectDist(r, p) < gap)) flush(); else run.push(p); });
  flush();
}
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
const boxToLine = (r: Rect, pts: P[]) => {
  let gap = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
    for (let k = 0; k <= n; k++) gap = Math.min(gap, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  if (pts.length === 1) gap = rectDist(r, pts[0]);
  return gap;
};
function toPoly(p: P, pts: P[]): number {
  let d = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy || 1;
    const k = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L));
    d = Math.min(d, Math.hypot(p[0] - a[0] - k * dx, p[1] - a[1] - k * dy));
  }
  return d;
}
/** Distance from p to every kept line except the hatching. */
const toLines = (s: Sketch, p: P) => Math.min(Infinity, ...(LINES.get(s) ?? []).filter((l) => !/^hatch/.test(l.name)).map((l) => toPoly(p, l.pts)));
function crowded(s: Sketch): string[] {
  const out: string[] = [];
  for (const { pts, name: ln } of LINES.get(s) ?? []) for (const l of s.labels) { const d = boxToLine(l.rect, pts); if (d < LABEL_GAP - 1e-9) out.push(`"${l.text}" ${fmt(d, 1)} px from the ${ln || 'line'}`); }
  return [...new Set(out)];
}
const clearCheck = (s: Sketch): Check => {
  const bad = crowded(s);
  return [`Every label stays at least ${LABEL_GAP} px clear of every line, curve, outline, dot and hatch stroke${bad.length ? `: ${bad.join('; ')}` : ''}`, bad.length === 0];
};
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
const linesInFrame = (s: Sketch): Check => {
  const out = (LINES.get(s) ?? []).filter((l) => l.pts.some((p) => p[0] < -0.5 || p[0] > s.w + 0.5 || p[1] < -0.5 || p[1] > s.h + 0.5)).map((l) => l.name);
  return [`Every line lies inside the frame${out.length ? `: not ${[...new Set(out)].join(', ')}` : ''}`, out.length === 0];
};
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), inFrame(s), linesInFrame(s)];
const hasLabel = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const labelsCheck = (s: Sketch, ts: string[], what = 'The labels as printed'): Check => {
  const miss = ts.filter((t) => !hasLabel(s, t));
  return [`${what}: ${ts.join(' · ')}${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0];
};
/** No em dash, no vulgar-fraction character, no slash fraction and no ASCII hyphen-minus in anything the drawing shows. */
const noBadChars = (s: Sketch, d: Diagram): Check => {
  const unraised = (h: string) => plain(h.replace(/<sup>.*?<\/sup>/g, '').replace(/<frac>.*?<\/frac>/g, ''));
  const all = [...s.texts.map((t) => unraised(t.html)), d.name, ...d.cases.flatMap((c) => [c.chip, unraised(c.cap)])].join(' ');
  const maths = [...s.texts.map((t) => t.html), ...d.cases.map((c) => c.cap)].join(' ');
  return ['No em dash, no vulgar-fraction character, no slash fraction, and every minus a true minus (−) in the labels, name, chips or captions', !/[—¼-¾⅐-⅞]/.test(all) && !/[\w)!π]\s*\/\s*[\w(π√]/.test(all) && !/(^|[\s([,])-(?=[\dπθx])/.test(plain(maths))];
};

/** A line of STIX on the drawing, from its baseline, its box at its true width. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * (html.includes('<sup>') ? 0.85 : 0.72), x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  return rect;
}

/* ---------- labels of several runs: text and stacked fractions (as in mathematics-11-14.ts) ---------- */
type Piece = { t: string } | { num: string; den: string };
const FRACS = new WeakMap<Sketch, { num: string; den: string; rule: [number, number, number]; numY: number; denY: number; numW: number; denW: number }[]>();
const FRAC_PAD = 2;
const fracW = (num: string, den: string, size: number) => Math.max(widthOf(num, size), widthOf(den, size)) + 2 * FRAC_PAD;
function frac(s: Sketch, x: number, y: number, num: string, den: string, size: number, color: string): Rect {
  const w = fracW(num, den, size), numY = y - 3, denY = y + 3 + size * 0.68;
  s.text(x, numY, num, { size, color });
  s.text(x, denY, den, { size, color });
  s.add(`<line x1="${r1(x - w / 2)}" y1="${r1(y)}" x2="${r1(x + w / 2)}" y2="${r1(y)}" stroke="${color}" stroke-width="1.1"/>`);
  FRACS.set(s, [...(FRACS.get(s) ?? []), { num, den, rule: [x - w / 2, x + w / 2, y], numY, denY, numW: widthOf(num, size), denW: widthOf(den, size) }]);
  return [x - w / 2, numY - size * 0.72, x + w / 2, denY + size * 0.22];
}
const pieceW = (p: Piece, size: number) => ('t' in p ? stixW(p.t, size) : fracW(p.num, p.den, size) + 2);
const pieceText = (p: Piece) => ('t' in p ? plain(p.t) : `${plain(p.num)}/${plain(p.den)}`);
function textRun(s: Sketch, at: number, w: number, y: number, t: string, size: number, color: string, leads: boolean) {
  const lead = /^ */.exec(plain(t))![0].length, trail = / *$/.exec(plain(t))![0].length, sp = stixW(' ', size), body = t.replace(/^((?:<[^>]+>)*) +/, '$1').replace(/ +((?:<\/[^>]+>)*)$/, '$1');
  if (leads) s.text(at + w - trail * sp, y, body, { size, anchor: 'end', color });
  else s.text(at + lead * sp, y, body, { size, anchor: 'start', color });
}
/** One label made of runs, its fractions' rules on the maths axis. Registered as ONE label. */
function runs(s: Sketch, x: number, y: number, parts: Piece[], o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, color = o.color ?? C.text, ws = parts.map((p) => pieceW(p, size)), total = ws.reduce((a, b) => a + b, 0);
  let at = o.anchor === 'middle' ? x - total / 2 : o.anchor === 'end' ? x - total : x;
  const sup = parts.some((p) => 't' in p && p.t.includes('<sup>'));
  const bx: Rect = [at, y - size * (sup ? 0.85 : 0.72), at + total, y + size * 0.22];
  const grow = (r: Rect) => { bx[1] = Math.min(bx[1], r[1]); bx[3] = Math.max(bx[3], r[3]); };
  parts.forEach((p, i) => {
    if ('t' in p) textRun(s, at, ws[i], y, p.t, size, color, i < parts.length - 1);
    else grow(frac(s, at + ws[i] / 2, y - size * 0.27, p.num, p.den, size, color));
    at += ws[i];
  });
  s.labels.push({ text: parts.map(pieceText).join(''), rect: bx });
  return bx;
}
/** Every stacked fraction really is stacked: numerator above the rule, denominator below, the rule as wide as both. */
const stackedCheck = (s: Sketch, want: string[]): Check => {
  const f = FRACS.get(s) ?? [], got = f.map((q) => `${plain(q.num)}/${plain(q.den)}`);
  const ok = f.every((q) => q.numY < q.rule[2] && q.denY - 6 > q.rule[2] && q.rule[1] - q.rule[0] >= Math.max(q.numW, q.denW)) && want.every((w) => got.includes(w)) && got.every((g) => want.includes(g));
  return [`Every fraction on the drawing is stacked by hand (${f.length}: ${[...new Set(got)].join(', ')}), numerator over the rule over denominator`, ok];
};
const PF = (n = 'π', d = '2'): Piece => ({ num: n, den: d });
/** A multiple of π as a label: "π", "−π", "2π", or stacked "π/2", "−π/2", "3π/2". */
const piPieces = (num: number, den: number): Piece[] => {
  if (num === 0) return [{ t: '0' }];
  const sign = num < 0 ? '−' : '', n = Math.abs(num), top = `${n === 1 ? '' : n}π`;
  if (den === 1) return [{ t: `${sign}${top}` }];
  return sign ? [{ t: '−' }, { num: top, den: String(den) }] : [{ num: top, den: String(den) }];
};

/* ---------- hatching: the book's tinted bands, as grey lines (Class 11 Fig 3.3) ---------- */
const HATCH = new WeakMap<Sketch, { name: string; segs: [P, P][] }[]>();
/** Hatching at 45° over every point `inside` says is shaded, clear of every label and (by `clear` px) every line drawn so far. */
function hatch(s: Sketch, name: string, inside: (p: P) => boolean, bx: Rect, o: { step?: number; clear?: number; color?: string } = {}): [P, P][] {
  const step = (o.step ?? 6) * Math.SQRT2, gap = LABEL_GAP + 1, avoid = s.labels.map((l) => l.rect), clr = o.clear ?? 3.5;
  const ok = (p: P) => inside(p) && avoid.every((r) => rectDist(r, p) >= gap) && toLines(s, p) >= clr;
  const segs: [P, P][] = [];
  for (let k = bx[0] + bx[1] + step / 2; k <= bx[2] + bx[3]; k += step) {
    const xa = Math.max(bx[0], k - bx[3]), xb = Math.min(bx[2], k - bx[1]);
    let a: P | null = null, b: P | null = null;
    const end = () => { if (a && b && len(a, b) >= 3) segs.push([a, b]); a = null; };
    for (let x = xa; x <= xb + 1e-9; x += 0.5) {
      const p: P = [x, k - x];
      if (ok(p)) { if (!a) a = p; b = p; } else end();
    }
    end();
  }
  s.add(`<path d="${segs.map(([a, b]) => `M${r1(a[0])} ${r1(a[1])} L${r1(b[0])} ${r1(b[1])}`).join(' ')}" fill="none" stroke="${o.color ?? C.grey}" stroke-width="1" stroke-linecap="round"/>`);
  segs.forEach((sg) => keep(s, sg, `hatch:${name}`));
  HATCH.set(s, [...(HATCH.get(s) ?? []), { name, segs }]);
  return segs;
}
const hatchOf = (s: Sketch, name: string) => (HATCH.get(s) ?? []).filter((h) => h.name === name).flatMap((h) => h.segs);
const allIn = (segs: [P, P][], test: (p: P) => boolean) => segs.every(([a, b]) => test(a) && test(b) && test([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]));

/* ---------- dots, rings and graphs ---------- */
type Dot = { p: P; name: string; open: boolean; color: string };
const DOTS = new WeakMap<Sketch, Dot[]>();
const DOT_R = 3.6;
/** A filled dot (a point on a graph or a line, or an included endpoint). */
function pt(s: Sketch, p: P, name: string, col: string = C.ink, r = DOT_R) {
  s.dot(p[0], p[1], r, col);
  keep(s, Array.from({ length: 25 }, (_, i): P => [p[0] + (r + 1) * Math.cos((2 * PI * i) / 24), p[1] + (r + 1) * Math.sin((2 * PI * i) / 24)]), `dot:${name}`);
  DOTS.set(s, [...(DOTS.get(s) ?? []), { p, name, open: false, color: col }]);
}
/** An open ring: an excluded endpoint or deleted point, white inside. */
function ring(s: Sketch, p: P, name: string, col: string = C.ink, r = 4) {
  s.point(p[0], p[1], r + 0.8, `<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="${r}" fill="#fff" stroke="${col}" stroke-width="1.7"/>`);
  keep(s, Array.from({ length: 25 }, (_, i): P => [p[0] + (r + 1) * Math.cos((2 * PI * i) / 24), p[1] + (r + 1) * Math.sin((2 * PI * i) / 24)]), `dot:${name}`);
  DOTS.set(s, [...(DOTS.get(s) ?? []), { p, name, open: true, color: col }]);
}
const dotsOf = (s: Sketch) => DOTS.get(s) ?? [];
const dotNamed = (s: Sketch, name: string) => dotsOf(s).find((d) => d.name === name);
type Gr = { ox: number; oy: number; ux: number; uy: number };
const gx = (g: Gr, v: number) => g.ox + v * g.ux;
const gy = (g: Gr, v: number) => g.oy - v * g.uy;
const gp = (g: Gr, p: P): P => [gx(g, p[0]), gy(g, p[1])];
const unPx = (g: Gr, p: P): P => [(p[0] - g.ox) / g.ux, (g.oy - p[1]) / g.uy];
const tick = (s: Sketch, x: number, y: number, vertical = true, k = 4) => {
  if (vertical) path(s, [[x, y - k], [x, y + k]], { color: C.slate, w: 1.1, name: 'tick' });
  else path(s, [[x - k, y], [x + k, y]], { color: C.slate, w: 1.1, name: 'tick' });
};
const sample = (f: (x: number) => number, a: number, b: number, n = 200): P[] => Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return [x, f(x)]; });
/** Points of x ↦ f(x) from a to b, crowded towards a (where an inverse function's graph stands upright). */
const sampleAt = (f: (x: number) => number, a: number, b: number, n = 160): P[] => Array.from({ length: n + 1 }, (_, i) => { const t = i / n, x = a + (b - a) * t * t; return [x, f(x)]; });
const curve = (s: Sketch, g: Gr, pts: P[], o: Stroke = {}) => path(s, pts.map((p) => gp(g, p)), { color: o.color ?? C.ink, w: o.w ?? 2.2, dash: o.dash, name: o.name ?? 'curve' });
const curveBack = (s: Sketch, g: Gr, name: string) => linesNamed(s, new RegExp(`^${name}$`)).map((l) => l.pts.map((p) => unPx(g, p)))[0] ?? [];
const onCurve = (pts: P[], f: (x: number) => number, tol = 2e-3) => pts.length > 10 && pts.every((p) => close(p[1], f(p[0]), tol));
/** A point at `r` from c, at `deg` degrees anticlockwise from the +x direction (screen y runs down). */
const pol = (c: P, r: number, deg: number): P => [c[0] + r * Math.cos(deg * DEG), c[1] - r * Math.sin(deg * DEG)];
const arcPts = (c: P, r: number, a0: number, a1: number, n = 48): P[] => Array.from({ length: n + 1 }, (_, i) => pol(c, r, a0 + ((a1 - a0) * i) / n));

/* ===================================================================== */
/* Figure 2.1 · many solutions, one principal value (Topic 01, p. 129)  */
/* ===================================================================== */
const CAP21 = `A single sine curve over [−2π, 2π]. The segment over ${X} ∈ [−${fr('π', '2')}, ${fr('π', '2')}] is shaded: the principal branch, one-to-one, covering the full range [−1, 1]. A horizontal dashed line at ${Y} = ${fr('1', '2')} cuts the curve at many points; only the intersection inside the shaded segment is circled: the one official answer, ${fr('π', '6')}.`;
const G21: Gr = { ox: 170, oy: 116, ux: 22.5, uy: 46 };
/** The solutions of sin x = 1/2 in [−2π, 2π]: π/6 + 2nπ and 5π/6 + 2nπ. */
const SOL21 = [PI / 6 - 2 * PI, (5 * PI) / 6 - 2 * PI, PI / 6, (5 * PI) / 6];
const fig21: Diagram = {
  id: 'm12-02-fig-2.1',
  topic: 0,
  name: 'Many angles, one principal value',
  cases: [{ chip: 'Principal value', cap: CAP21 }],
  draw() {
    const s = new Sketch(W, 310), g = G21, xa = gx(g, -PI / 2), xb = gx(g, PI / 2), top = gy(g, 1.32), bot = gy(g, -1.3);
    // the axes, with arrowheads, named x and y, as printed
    arr(s, [8, g.oy], [326, g.oy], { color: C.slate, w: 1.3, name: 'axis:x' });
    arr(s, [g.ox, bot + 10], [g.ox, gy(g, 1.62)], { color: C.slate, w: 1.3, name: 'axis:y' });
    lab(s, 330, g.oy - 10, X, { size: 15 });
    lab(s, g.ox + 7, gy(g, 1.62) + 7, Y, { size: 15, anchor: 'start' });
    // the π ticks; the labels sit below, on the side of each tick the curve leaves free
    ([[-2, 1, 'end'], [-1, 1, 'end'], [-1, 2, 'middle'], [1, 2, 'middle'], [1, 1, 'end'], [2, 1, 'start']] as [number, number, 'start' | 'middle' | 'end'][]).forEach(([n, d, an]) => {
      const x = gx(g, (n * PI) / d);
      tick(s, x, g.oy);
      runs(s, x + (an === 'end' ? -2 : an === 'start' ? 3 : 0), g.oy + (d === 1 ? 18 : 24), piPieces(n, d), { size: 11.5, anchor: an, color: C.slate });
    });
    tick(s, g.ox, gy(g, 1), false); tick(s, g.ox, gy(g, -1), false);
    lab(s, g.ox - 9, gy(g, 1) + 4, '1', { size: 11.5, anchor: 'end', color: C.slate });
    lab(s, g.ox + 9, gy(g, -1) + 4, '−1', { size: 11.5, anchor: 'start', color: C.slate });
    // the curve: thin over [−2π, 2π], bold over the principal branch
    curve(s, g, sample(Math.sin, -2 * PI, 2 * PI, 500), { color: C.slate, w: 1.5, name: 'curve:sin' });
    curve(s, g, sample(Math.sin, -PI / 2, PI / 2, 120), { color: C.ink, w: 3.2, name: 'curve:branch' });
    // y = 1/2, dashed, the highlight
    path(s, [[12, gy(g, 0.5)], [322, gy(g, 0.5)]], { color: C.mari, w: 1.5, dash: true, name: 'line:half' });
    runs(s, gx(g, 1.5 * PI), gy(g, 0.5) - 17, [{ t: `${Y} = ` }, PF('1', '2')], { size: 12, anchor: 'middle', color: C.amber });
    SOL21.forEach((x, i) => pt(s, gp(g, [x, 0.5]), `sol${i}`));
    circle(s, gp(g, [PI / 6, 0.5]), 9, { color: C.mari, w: 2, name: 'ring' });
    // the official answer, its arrow to the ring
    const r = runs(s, 334, 24, [{ t: 'the one official answer: ' }, PF('π', '6')], { size: 12.5, anchor: 'end' });
    const tip = pol(gp(g, [PI / 6, 0.5]), 11, 70);
    arr(s, [r[0] + 14, r[3] + 5], tip, { color: C.ink, w: 1.2, name: 'arrow:answer' });
    // the principal branch's band, as grey hatching (the book's green tint)
    runs(s, (xa + xb) / 2, 206, [{ t: 'principal branch [−' }, PF(), { t: ', ' }, PF(), { t: ']: one-to-one,' }], { size: 12.5, anchor: 'middle' });
    lab(s, (xa + xb) / 2, 229, 'covers the full range [−1, 1]', { size: 12.5 });
    const keepOut = s.labels.map((l) => l.rect);
    brokenPath(s, [[xa, top], [xa, bot]], keepOut, LABEL_GAP + 1, { color: C.grey, w: 0.8, name: 'band:edge' });
    brokenPath(s, [[xb, top], [xb, bot]], keepOut, LABEL_GAP + 1, { color: C.grey, w: 0.8, name: 'band:edge' });
    hatch(s, 'band', (p) => p[0] > xa + 2 && p[0] < xb - 2 && p[1] > top + 1 && p[1] < bot - 1, [xa, top, xb, bot]);
    runs(s, W / 2, 262, [{ t: I(`Many angles solve sin ${X} = `) }, PF('1', '2'), { t: I(';') }], { size: 12.5, anchor: 'middle', color: C.slate });
    runs(s, W / 2, 294, [{ t: I(`only the in-branch one is ${inv('sin')}(`) }, PF('1', '2'), { t: I(').') }], { size: 12.5, anchor: 'middle', color: C.slate });
    return s;
  },
  check() {
    const s = fig21.draw(fig21.cases[0]), out: Check[] = [], g = G21;
    const sin = curveBack(s, g, 'curve:sin'), br = curveBack(s, g, 'curve:branch');
    out.push(['The curve read back is y = sin x over [−2π, 2π], as printed', onCurve(sin, Math.sin) && close(sin[0][0], -2 * PI, 1e-3) && close(sin[sin.length - 1][0], 2 * PI, 1e-3)]);
    out.push(['The bold part is y = sin x over exactly [−π/2, π/2], where sine rises from −1 to 1 (one-to-one, the full range)', onCurve(br, Math.sin) && close(br[0][0], -PI / 2, 1e-3) && close(br[br.length - 1][0], PI / 2, 1e-3) && br.every((p, i) => i === 0 || p[1] > br[i - 1][1])]);
    const sols = Array.from({ length: 4001 }, (_, i) => -2 * PI + (4 * PI * i) / 4000).filter((x, i, a) => i > 0 && Math.sign(Math.sin(a[i - 1]) - 0.5) !== Math.sign(Math.sin(x) - 0.5));
    out.push([`y = 1/2 cuts sin x four times in [−2π, 2π] (−11π/6, −7π/6, π/6, 5π/6), and each cut has its dot`, sols.length === 4 && SOL21.every((x, i) => close(x, sols[i], 4 * PI / 4000) && close(Math.sin(x), 0.5, 1e-12)) && SOL21.every((x, i) => { const d = dotNamed(s, `sol${i}`); return !!d && !d.open && close(unPx(g, d.p)[0], x, 1e-6) && close(unPx(g, d.p)[1], 0.5, 1e-6); })]);
    out.push(['Only π/6 of the four lies in [−π/2, π/2], and the marigold ring is round it: sin⁻¹(1/2) = π/6', SOL21.filter((x) => x >= -PI / 2 && x <= PI / 2).length === 1 && close(Math.asin(0.5), PI / 6, 1e-12) && linesNamed(s, /^ring$/).length === 1 && close(unPx(g, linesNamed(s, /^ring$/)[0].pts.reduce((a, p) => [a[0] + p[0] / 241, a[1] + p[1] / 241] as P, [0, 0] as P))[0], PI / 6, 0.02)]);
    const H = hatchOf(s, 'band'), xa = gx(g, -PI / 2), xb = gx(g, PI / 2);
    out.push([`The principal branch's band is hatched (${H.length} strokes), every stroke between x = −π/2 and π/2`, H.length > 20 && allIn(H, (p) => p[0] > xa && p[0] < xb)]);
    out.push(labelsCheck(s, ['x', 'y', '−2π', '−π', '−π/2', 'π/2', 'π', '2π', '1', '−1', 'y = 1/2', 'the one official answer: π/6', 'principal branch [−π/2, π/2]: one-to-one,', 'covers the full range [−1, 1]', 'Many angles solve sin x = 1/2;', 'only the in-branch one is sin−1(1/2).']));
    out.push(stackedCheck(s, ['π/2', 'π/2', 'π/2', 'π/2', '1/2', 'π/6', '1/2', '1/2']));
    out.push(noBadChars(s, fig21));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 2.2 · fold the angle into the branch (Topic 01, p. 132)       */
/* ===================================================================== */
const CAP22 = `Number line of angles from −π to 2π. The ${inv('cos')} branch [0, π] is a shaded band. ${fr('7π', '6')} sits outside the band; a curved arrow folds it to ${fr('5π', '6')} inside, since cos(2π − ${TH}) = cos ${TH}. Fold the angle into the branch before reading off the answer.`;
const L22 = { x0: 30, unit: (310 - 30) / (3 * PI), y: 116 };
const ax22 = (v: number) => L22.x0 + (v + PI) * L22.unit;
const fig22: Diagram = {
  id: 'm12-02-fig-2.2',
  topic: 0,
  name: 'Fold the angle into the branch',
  cases: [{ chip: 'Fold into [0, π]', cap: CAP22 }],
  draw() {
    const s = new Sketch(W, 250), y = L22.y, a = ax22(0), b = ax22(PI);
    runs(s, W / 2, 30, [{ t: `fold: cos(2π − ${TH}) = cos ${TH},  2π − ` }, PF('7π', '6'), { t: ' = ' }, PF('5π', '6')], { size: 12.5, anchor: 'middle' });
    path(s, [[ax22(-PI) - 14, y], [ax22(2 * PI) + 14, y]], { color: C.ink, w: 1.4, name: 'line' });
    ([[-1, 1], [-1, 2], [0, 1], [1, 2], [1, 1], [3, 2], [2, 1]] as [number, number][]).forEach(([n, d]) => {
      const x = ax22((n * PI) / d);
      tick(s, x, y, true, 6);
      runs(s, x, y + (d === 1 ? 32 : 36), piPieces(n, d), { size: 11.5, anchor: 'middle', color: C.slate });
    });
    const p5 = ax22((5 * PI) / 6), p7 = ax22((7 * PI) / 6);
    pt(s, [p5, y], '5π/6', C.ink, 4.4);
    pt(s, [p7, y], '7π/6', C.mari, 4.4);
    bend(s, [p7 + 2, y - 22], [(p5 + p7) / 2, y - 44], [p5 - 2, y - 22], { name: 'fold' });
    runs(s, p5 - 12, y - 30, [PF('5π', '6'), { t: ': inside' }], { size: 12.5, anchor: 'end' });
    runs(s, p7 + 12, y - 30, [PF('7π', '6'), { t: ': outside' }], { size: 12.5, anchor: 'start', color: C.amber });
    lab(s, (a + b) / 2, y + 72, `${inv('cos')} branch [0, π]`, { size: 13 });
    hatch(s, 'band', (p) => p[0] > a + 2 && p[0] < b - 2 && p[1] > y - 14 && p[1] < y + 16, [a, y - 14, b, y + 16], { step: 5 });
    path(s, [[a, y - 14], [b, y - 14]], { color: C.grey, w: 0.8, name: 'band:edge' });
    path(s, [[a, y + 16], [b, y + 16]], { color: C.grey, w: 0.8, name: 'band:edge' });
    lab(s, W / 2, 220, I('Fold the angle into the branch'), { size: 12.5, color: C.slate });
    lab(s, W / 2, 239, I('before reading off the answer.'), { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig22.draw(fig22.cases[0]), out: Check[] = [];
    out.push(['cos(7π/6) = cos(2π − 7π/6) = cos(5π/6), and 2π − 7π/6 = 5π/6', close(Math.cos((7 * PI) / 6), Math.cos((5 * PI) / 6), 1e-12) && close(2 * PI - (7 * PI) / 6, (5 * PI) / 6, 1e-12)]);
    out.push(['7π/6 lies outside [0, π], 5π/6 inside: cos⁻¹(cos 7π/6) = 5π/6, not 7π/6', (7 * PI) / 6 > PI && (5 * PI) / 6 < PI && close(Math.acos(Math.cos((7 * PI) / 6)), (5 * PI) / 6, 1e-12)]);
    const d5 = dotNamed(s, '5π/6'), d7 = dotNamed(s, '7π/6');
    out.push(['The two dots stand at 5π/6 and 7π/6 on the line, 7π/6 the marigold one', !!d5 && !!d7 && close(d5.p[0], ax22((5 * PI) / 6)) && close(d7.p[0], ax22((7 * PI) / 6)) && d7.color === C.mari]);
    const f = linesNamed(s, /^fold$/)[0].pts;
    out.push(['The curved arrow runs from 7π/6 back to 5π/6 (right to left), over the line', f[0][0] > f[f.length - 1][0] && Math.abs(f[0][0] - ax22((7 * PI) / 6)) < 4 && Math.abs(f[f.length - 1][0] - ax22((5 * PI) / 6)) < 4 && f.every((p) => p[1] < L22.y)]);
    const H = hatchOf(s, 'band'), a = ax22(0), b = ax22(PI);
    out.push([`The branch [0, π] is hatched (${H.length} strokes), every stroke between 0 and π`, H.length > 15 && allIn(H, (p) => p[0] > a && p[0] < b)]);
    out.push(labelsCheck(s, ['fold: cos(2π − θ) = cos θ,  2π − 7π/6 = 5π/6', '5π/6: inside', '7π/6: outside', '−π', '−π/2', '0', 'π/2', 'π', '3π/2', '2π', 'cos−1 branch [0, π]', 'Fold the angle into the branch', 'before reading off the answer.']));
    out.push(stackedCheck(s, ['7π/6', '5π/6', 'π/2', 'π/2', '3π/2', '5π/6', '7π/6']));
    out.push(noBadChars(s, fig22));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 2.3 · the six cages (Topic 01, p. 137)                         */
/* ===================================================================== */
const CAP23 = `The six cages: one mini number-line per inverse function, its principal branch as a bold bar with open and closed endpoints drawn correctly: open circles at tan’s ±${fr('π', '2')} and cot’s 0, π; deleted points (open rings) at sec’s ${fr('π', '2')} and cosec’s 0.`;
type Cage = { f: string; a: number; b: number; openA: boolean; openB: boolean; hole?: number; branch: Piece[] };
const LB: Piece = { t: '[−' }, RB_: Piece = { t: ']' };
const CAGES: Cage[] = [
  { f: 'sin', a: -PI / 2, b: PI / 2, openA: false, openB: false, branch: [LB, PF(), { t: ', ' }, PF(), RB_] },
  { f: 'cos', a: 0, b: PI, openA: false, openB: false, branch: [{ t: '[0, π]' }] },
  { f: 'tan', a: -PI / 2, b: PI / 2, openA: true, openB: true, branch: [{ t: '(−' }, PF(), { t: ', ' }, PF(), { t: ')' }] },
  { f: 'cot', a: 0, b: PI, openA: true, openB: true, branch: [{ t: '(0, π)' }] },
  { f: 'sec', a: 0, b: PI, openA: false, openB: false, hole: PI / 2, branch: [{ t: '[0, π] − {' }, PF(), { t: '}' }] },
  { f: 'cosec', a: -PI / 2, b: PI / 2, openA: false, openB: false, hole: 0, branch: [LB, PF(), { t: ', ' }, PF(), { t: '] − {0}' }] },
];
const G23 = { cx: [86, 254], row0: 48, rowH: 114, half: 66 };
const cageAt = (i: number) => ({ cx: G23.cx[i % 2], top: G23.row0 + Math.floor(i / 2) * G23.rowH });
/** What each inverse function's branch really is, sampled: the angles it returns, from its own definition. */
const RANGE: Record<string, (x: number) => number> = { sin: Math.asin, cos: Math.acos, tan: Math.atan, cot: acot, sec: asec, cosec: acsc };
const fig23: Diagram = {
  id: 'm12-02-fig-2.3',
  topic: 0,
  name: 'The six cages',
  cases: [{ chip: 'Six branches', cap: CAP23 }],
  draw() {
    const s = new Sketch(W, 422);
    lab(s, W / 2, 22, 'The six cages.', { size: 15, bold: true });
    CAGES.forEach((c, i) => {
      const { cx, top } = cageAt(i), y = top + 30, u = G23.half / PI, ax = (v: number) => cx + v * u;
      lab(s, cx, top + 6, `${inv(c.f)} ${X}`, { size: 14 });
      path(s, [[cx - G23.half - 8, y], [cx + G23.half + 8, y]], { color: C.ink, w: 1.3, name: `line:${c.f}` });
      ([[-1, 1], [-1, 2], [0, 1], [1, 2], [1, 1]] as [number, number][]).forEach(([n, d]) => {
        const x = ax((n * PI) / d);
        tick(s, x, y, true, 5);
        runs(s, x, y + (d === 1 ? 21 : 24), piPieces(n, d), { size: 10, anchor: 'middle', color: C.slate });
      });
      path(s, [[ax(c.a), y], [ax(c.b), y]], { color: C.ink, w: 5, name: `bar:${c.f}` });
      (c.openA ? ring : pt)(s, [ax(c.a), y], `${c.f}:a`, C.ink, 4.2);
      (c.openB ? ring : pt)(s, [ax(c.b), y], `${c.f}:b`, C.ink, 4.2);
      if (c.hole != null) ring(s, [ax(c.hole), y], `${c.f}:hole`, C.mari, 4.2);
      runs(s, cx, y + 54, c.branch, { size: 12, anchor: 'middle', color: C.slate });
    });
    lab(s, W / 2, 396, I('Filled dot = endpoint included; open ring = excluded.'), { size: 12, color: C.slate });
    lab(s, W / 2, 414, I('sec and cosec each lose one interior point.'), { size: 12, color: C.slate });
    return s;
  },
  check() {
    const s = fig23.draw(fig23.cases[0]), out: Check[] = [];
    CAGES.forEach((c, i) => {
      const { cx } = cageAt(i), u = G23.half / PI, f = RANGE[c.f];
      // the branch, from the function itself: its values over its whole domain, near each end and at the hole
      const xs = c.f === 'sin' || c.f === 'cos' ? sample((t) => t, -1, 1, 400).map((p) => p[0]) : c.f === 'tan' || c.f === 'cot' ? sample((t) => t, -1e6, 1e6, 4001).map((p) => p[0]).concat([-1e9, 1e9, 0]) : [...sample((t) => t, 1, 1e6, 2000), ...sample((t) => t, -1e6, -1, 2000)].map((p) => p[0]);
      const ys = xs.map(f), lo = Math.min(...ys), hi = Math.max(...ys);
      const reachA = ys.some((v) => close(v, c.a, 1e-12)), reachB = ys.some((v) => close(v, c.b, 1e-12));
      const holeMissed = c.hole == null || ys.every((v) => Math.abs(v - c.hole!) > 1e-7);
      const bar = linesNamed(s, new RegExp(`^bar:${c.f}$`))[0].pts;
      const dA = dotNamed(s, `${c.f}:a`)!, dB = dotNamed(s, `${c.f}:b`)!, dH = dotNamed(s, `${c.f}:hole`);
      out.push([
        `${c.f}⁻¹: its values fill [${fmt(c.a)}, ${fmt(c.b)}] (from ${fmt(lo, 3)} to ${fmt(hi, 3)}); the ends are ${c.openA ? 'never reached (open rings)' : 'reached (filled dots)'}${c.hole != null ? `, and ${fmt(c.hole)} is never returned (a marigold ring)` : ''}; the bar runs between them`,
        lo >= c.a - 1e-9 && hi <= c.b + 1e-9 && close(lo, c.a, 1e-5) && close(hi, c.b, 1e-5) && reachA === !c.openA && reachB === !c.openB && holeMissed
          && dA.open === c.openA && dB.open === c.openB && close(dA.p[0], cx + c.a * u) && close(dB.p[0], cx + c.b * u) && close(bar[0][0], cx + c.a * u) && close(bar[1][0], cx + c.b * u)
          && (c.hole == null ? !dH : !!dH && dH.open && dH.color === C.mari && close(dH.p[0], cx + c.hole * u)),
      ]);
    });
    out.push(['Only the deleted points (sec⁻¹ at π/2, cosec⁻¹ at 0) are marigold', dotsOf(s).filter((d) => d.color === C.mari).map((d) => d.name).join() === 'sec:hole,cosec:hole']);
    out.push(labelsCheck(s, ['The six cages.', 'sin−1 x', 'cos−1 x', 'tan−1 x', 'cot−1 x', 'sec−1 x', 'cosec−1 x', '[−π/2, π/2]', '[0, π]', '(−π/2, π/2)', '(0, π)', '[0, π] − {π/2}', '[−π/2, π/2] − {0}', '−π', '−π/2', '0', 'π/2', 'π', 'Filled dot = endpoint included; open ring = excluded.', 'sec and cosec each lose one interior point.']));
    out.push(stackedCheck(s, ['π/2']));
    out.push(noBadChars(s, fig23));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 2.4 · odd, or the π − form (Topic 02, p. 140)                  */
/* ===================================================================== */
const CAP24 = `Two number lines. Top: the zero-centred branch [−${fr('π', '2')}, ${fr('π', '2')}] (sin, tan, cosec) contains both ${TH} and −${TH}: negate flips the sign, still legal (odd). Bottom: the [0, π] branch (cos, sec, cot) contains ${TH}; the naive mirror −${TH} falls outside (crossed out), and the legal reflection π − ${TH} stays in: negate means reflect about ${fr('π', '2')} (the π− form).`;
/** θ as the book draws it, about 0.27π (a little over π/4). */
const TH24 = 0.27 * PI;
const L24 = { cx: 160, unit: 128 / PI, yTop: 132, yBot: 318 };
const ax24 = (v: number) => L24.cx + v * L24.unit;
const fig24: Diagram = {
  id: 'm12-02-fig-2.4',
  topic: 1,
  name: 'Odd, or the π − form',
  cases: [{ chip: 'Negative argument', cap: CAP24 }],
  draw() {
    const s = new Sketch(W, 410);
    const line = (y: number, name: string, a: number, b: number) => {
      path(s, [[ax24(-1.1 * PI), y], [ax24(1.1 * PI), y]], { color: C.ink, w: 1.4, name: `line:${name}` });
      ([[-1, 2], [0, 1], [1, 2], [1, 1]] as [number, number][]).forEach(([n, d]) => {
        const x = ax24((n * PI) / d);
        tick(s, x, y, true, 7);
      });
      return [ax24(a), ax24(b)];
    };
    const tickLabs = (y: number, skip: number[] = []) => ([[-1, 2], [0, 1], [1, 2], [1, 1]] as [number, number][]).forEach(([n, d]) => { if (!skip.includes(n / d)) runs(s, ax24((n * PI) / d), y + (d === 1 ? 30 : 34), piPieces(n, d), { size: 11, anchor: 'middle', color: C.slate }); });
    // top: the zero-centred branch
    let y = L24.yTop;
    lab(s, W / 2, 20, 'zero-centred branch (sin, tan, cosec)', { size: 13 });
    lab(s, W / 2, 40, 'ODD', { size: 14, bold: true });
    lab(s, W / 2, 60, 'negate ⇒ flip sign, still legal', { size: 13 });
    const [a1, b1] = line(y, 'top', -PI / 2, PI / 2);
    tickLabs(y);
    pt(s, [ax24(-TH24), y], 'top:−θ', C.ink, 5);
    pt(s, [ax24(TH24), y], 'top:+θ', C.ink, 5);
    bend(s, [ax24(-TH24) + 4, y - 26], [ax24(0), y - 42], [ax24(TH24) - 4, y - 26], { both: true, name: 'flip' });
    lab(s, ax24(-TH24) - 4, y - 26, `−${TH}`, { size: 14, anchor: 'end' });
    lab(s, ax24(TH24) + 4, y - 26, `+${TH}`, { size: 14, anchor: 'start' });
    hatch(s, 'top', (p) => p[0] > a1 + 2 && p[0] < b1 - 2 && p[1] > y - 13 && p[1] < y + 16, [a1, y - 13, b1, y + 16], { step: 5 });
    path(s, [[a1, y - 13], [b1, y - 13]], { color: C.grey, w: 0.8, name: 'band:edge' });
    path(s, [[a1, y + 16], [b1, y + 16]], { color: C.grey, w: 0.8, name: 'band:edge' });
    // bottom: the [0, π] branch
    y = L24.yBot;
    runs(s, W / 2, 208, [{ t: '[0, π] branch (cos, sec, cot)' }], { size: 13, anchor: 'middle' });
    lab(s, W / 2, 228, 'π −  form', { size: 14, bold: true, color: C.amber });
    runs(s, W / 2, 250, [{ t: 'negate ⇒ reflect about ' }, PF()], { size: 13, anchor: 'middle' });
    const [a2, b2] = line(y, 'bottom', 0, PI);
    tickLabs(y);
    pt(s, [ax24(TH24), y], 'bottom:θ', C.ink, 5);
    pt(s, [ax24(PI - TH24), y], 'bottom:π−θ', C.ink, 5);
    pt(s, [ax24(-TH24), y], 'bottom:−θ', C.mari, 4.4);
    path(s, [[ax24(-TH24) - 8, y - 11], [ax24(-TH24) + 8, y + 11]], { color: C.mari, w: 2.2, name: 'cross' });
    path(s, [[ax24(-TH24) - 8, y + 11], [ax24(-TH24) + 8, y - 11]], { color: C.mari, w: 2.2, name: 'cross' });
    bend(s, [ax24(TH24), y - 24], [ax24(PI / 2), y - 40], [ax24(PI - TH24) + 2, y - 24], { name: 'reflect' });
    lab(s, ax24(PI - TH24) + 10, y - 26, `π − ${TH}`, { size: 14, anchor: 'start' });
    lab(s, ax24(TH24), y + 58, TH, { size: 14 });
    lab(s, ax24(-TH24), y + 58, `−${TH} illegal`, { size: 13, color: C.amber });
    hatch(s, 'bottom', (p) => p[0] > a2 + 2 && p[0] < b2 - 2 && p[1] > y - 13 && p[1] < y + 16, [a2, y - 13, b2, y + 16], { step: 5 });
    path(s, [[a2, y - 13], [b2, y - 13]], { color: C.grey, w: 0.8, name: 'band:edge' });
    path(s, [[a2, y + 16], [b2, y + 16]], { color: C.grey, w: 0.8, name: 'band:edge' });
    lab(s, W / 2, 402, `${I('Odd for the zero-centred trio; π − for the ')}[0, π]${I(' trio.')}`, { size: 12, color: C.slate });
    return s;
  },
  check() {
    const s = fig24.draw(fig24.cases[0]), out: Check[] = [], u = (d: Dot) => (d.p[0] - L24.cx) / L24.unit;
    const tp = dotNamed(s, 'top:+θ')!, tm = dotNamed(s, 'top:−θ')!, bt = dotNamed(s, 'bottom:θ')!, br = dotNamed(s, 'bottom:π−θ')!, bm = dotNamed(s, 'bottom:−θ')!;
    out.push(['Top: θ and −θ both lie in [−π/2, π/2], mirror images about 0 (odd: sin⁻¹(−x) = −sin⁻¹ x, checked at 9 values)', close(u(tp), TH24) && close(u(tm), -TH24) && Math.abs(TH24) < PI / 2 && [-0.9, -0.5, -0.2, 0, 0.3, 0.6, 0.99, 0.1, 0.75].every((x) => close(Math.asin(-x), -Math.asin(x), 1e-12) && close(Math.atan(-x * 5), -Math.atan(x * 5), 1e-12))]);
    out.push(['Bottom: θ is in [0, π], −θ is not (crossed out, marigold), π − θ is (cos⁻¹(−x) = π − cos⁻¹ x, checked at 9 values)', close(u(bt), TH24) && close(u(bm), -TH24) && close(u(br), PI - TH24) && -TH24 < 0 && PI - TH24 <= PI && bm.color === C.mari && linesNamed(s, /^cross$/).length === 2 && [-0.9, -0.5, -0.2, 0, 0.3, 0.6, 0.99, 0.1, 0.75].every((x) => close(Math.acos(-x), PI - Math.acos(x), 1e-12) && close(acot(-x * 5), PI - acot(x * 5), 1e-12))]);
    out.push(['θ and π − θ sit either side of π/2 at equal distances: the reflection about π/2', close(u(bt) + u(br), PI, 1e-9)]);
    const f = linesNamed(s, /^reflect$/)[0].pts;
    out.push(['The bottom arrow runs from θ to π − θ', Math.abs(f[0][0] - bt.p[0]) < 3 && Math.abs(f[f.length - 1][0] - br.p[0]) < 4]);
    const H1 = hatchOf(s, 'top'), H2 = hatchOf(s, 'bottom');
    out.push([`The two branches are hatched: [−π/2, π/2] on top (${H1.length} strokes), [0, π] below (${H2.length})`, H1.length > 15 && H2.length > 15 && allIn(H1, (p) => p[0] > ax24(-PI / 2) && p[0] < ax24(PI / 2) && p[1] < 200) && allIn(H2, (p) => p[0] > ax24(0) && p[0] < ax24(PI) && p[1] > 200)]);
    out.push(labelsCheck(s, ['zero-centred branch (sin, tan, cosec)', 'ODD', 'negate ⇒ flip sign, still legal', '−θ', '+θ', '[0, π] branch (cos, sec, cot)', 'π −  form', 'negate ⇒ reflect about π/2', 'π − θ', 'θ', '−θ illegal', '−π/2', '0', 'π/2', 'π', 'Odd for the zero-centred trio; π − for the [0, π] trio.']));
    out.push(stackedCheck(s, ['π/2']));
    out.push(noBadChars(s, fig24));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 2.5 · the sign-sensitive reciprocal identity (Topic 02, p. 143) */
/* ===================================================================== */
const CAP25 = `${inv('cot')} ${X} = ${Y} with ${Y} ∈ (0, π). If ${X} > 0 then ${Y} ∈ (0, ${fr('π', '2')}), inside the ${inv('tan')} cage, and ${inv('tan')}(${fr('1', X)}) = ${inv('cot')} ${X}. If ${X} < 0 then ${Y} ∈ (${fr('π', '2')}, π), outside the cage; subtract π and ${inv('tan')}(${fr('1', X)}) = ${inv('cot')} ${X} − π. The reciprocal identity is sign-sensitive.`;
const fig25: Diagram = {
  id: 'm12-02-fig-2.5',
  topic: 1,
  name: 'The sign-sensitive reciprocal identity',
  cases: [{ chip: 'Sign of x', cap: CAP25 }],
  draw() {
    const s = new Sketch(W, 270), L = 86, R = 254;
    // the root
    lab(s, W / 2, 33, `${inv('cot')} ${X} = ${Y},   with   ${Y} ∈ (0, π)`, { size: 14 });
    box(s, 40, 8, 300, 46, { w: 1.8, name: 'box:root' });
    arr(s, [150, 48], [L, 78], { color: C.slate, w: 1.4, name: 'arrow:left' });
    arr(s, [190, 48], [R, 78], { color: C.mari, w: 1.4, name: 'arrow:right' });
    // x > 0
    box(s, 8, 80, 164, 136, { name: 'box:pos' });
    runs(s, L, 101, [{ t: `${X} > 0  ⇒  ${Y} ∈ (0, ` }, PF(), { t: ')' }], { size: 12.5, anchor: 'middle' });
    lab(s, L, 127, `inside the ${inv('tan')} cage`, { size: 12.5 });
    arr(s, [L, 138], [L, 166], { color: C.slate, w: 1.4, name: 'arrow:left2' });
    box(s, 14, 168, 158, 212, { name: 'box:pos2' });
    runs(s, L, 193, [{ t: `${inv('tan')} ` }, PF('1', X), { t: ` = ${inv('cot')} ${X}` }], { size: 13, anchor: 'middle' });
    // x < 0, the highlight
    box(s, 176, 80, 332, 154, { name: 'box:neg', color: C.mari });
    runs(s, R, 101, [{ t: `${X} < 0  ⇒  ${Y} ∈ (` }, PF(), { t: ', π)' }], { size: 12.5, anchor: 'middle' });
    lab(s, R, 127, 'OUTSIDE the cage:', { size: 12.5 });
    lab(s, R, 145, 'subtract π', { size: 12.5 });
    arr(s, [R, 156], [R, 166], { color: C.mari, w: 1.4, name: 'arrow:right2' });
    box(s, 176, 168, 332, 212, { name: 'box:neg2', color: C.mari });
    runs(s, R, 193, [{ t: `${inv('tan')} ` }, PF('1', X), { t: ` = ${inv('cot')} ${X} − π` }], { size: 13, anchor: 'middle' });
    lab(s, W / 2, 252, I('The reciprocal identity is sign-sensitive.'), { size: 13, color: C.slate });
    return s;
  },
  check() {
    const s = fig25.draw(fig25.cases[0]), out: Check[] = [];
    const pos = [0.01, 0.3, 1, 2.5, 40], neg = pos.map((v) => -v);
    out.push(['x > 0: cot⁻¹ x lies in (0, π/2) and tan⁻¹(1/x) = cot⁻¹ x (at x = 0.01, 0.3, 1, 2.5, 40)', pos.every((x) => acot(x) > 0 && acot(x) < PI / 2 && close(Math.atan(1 / x), acot(x), 1e-12))]);
    out.push(['x < 0: cot⁻¹ x lies in (π/2, π), outside tan⁻¹’s cage, and tan⁻¹(1/x) = cot⁻¹ x − π (at the same five values, negated)', neg.every((x) => acot(x) > PI / 2 && acot(x) < PI && close(Math.atan(1 / x), acot(x) - PI, 1e-12))]);
    out.push(['The x < 0 branch (its arrows and boxes) is the marigold one, as the book’s orange', linesNamed(s, /^box:neg/).length === 2]);
    out.push(labelsCheck(s, ['cot−1 x = y,   with   y ∈ (0, π)', 'x > 0  ⇒  y ∈ (0, π/2)', 'inside the tan−1 cage', 'tan−1 1/x = cot−1 x', 'x < 0  ⇒  y ∈ (π/2, π)', 'OUTSIDE the cage:', 'subtract π', 'tan−1 1/x = cot−1 x − π', 'The reciprocal identity is sign-sensitive.']));
    out.push(stackedCheck(s, ['π/2', '1/x']));
    out.push(noBadChars(s, fig25));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 2.6 · the reference card (Topic 02, p. 147)                    */
/* ===================================================================== */
const CAP26 = `A three-part reference card: the reciprocal identities with their domain tags; the negative-argument split (odd: sin, tan, cosec; π− form: cos, sec, cot); the complementary pairs summing to ${fr('π', '2')}. Branch shape decides everything.`;
const RECIP: [string, string, string][] = [['sin', 'cosec', `|${X}| ≥ 1`], ['cos', 'sec', `|${X}| ≥ 1`], ['tan', 'cot', `${X} > 0`]];
const COMP: [string, string][] = [['sin', 'cos'], ['tan', 'cot'], ['cosec', 'sec']];
const fig26: Diagram = {
  id: 'm12-02-fig-2.6',
  topic: 1,
  name: 'Self-map identities at a glance',
  cases: [{ chip: 'Three families', cap: CAP26 }],
  draw() {
    const s = new Sketch(W, 556), cx = W / 2;
    // Reciprocal
    box(s, 10, 6, 330, 236, { color: C.faint, w: 1.2, name: 'card:reciprocal' });
    lab(s, cx, 30, 'Reciprocal', { size: 15, bold: true });
    RECIP.forEach(([f, g, tag], i) => {
      const y = 62 + i * 50;
      runs(s, cx, y, [{ t: `${inv(f)} ` }, PF('1', X), { t: ` = ${inv(g)} ${X}` }], { size: 13.5, anchor: 'middle' });
      lab(s, cx, y + 25, tag, { size: 12, color: C.slate });
    });
    runs(s, cx, 206, [{ t: `for ${X} < 0: subtract π` }], { size: 12.5, anchor: 'middle', color: C.amber });
    lab(s, cx, 224, '(see Figure 2.5)', { size: 12.5, color: C.amber });
    // Negative argument
    box(s, 10, 244, 330, 352, { color: C.faint, w: 1.2, name: 'card:negative' });
    lab(s, cx, 268, 'Negative argument', { size: 15, bold: true });
    box(s, 20, 282, 164, 338, { color: C.ink, w: 1.2, name: 'box:odd' });
    lab(s, 92, 303, 'ODD:  sin, tan, cosec', { size: 12.5 });
    lab(s, 92, 326, `${inv(I('f'))}(−${X}) = −${inv(I('f'))}(${X})`, { size: 13 });
    box(s, 176, 282, 320, 338, { color: C.mari, w: 1.4, name: 'box:pi' });
    lab(s, 248, 303, 'π − :  cos, sec, cot', { size: 12.5 });
    lab(s, 248, 326, `${inv(I('f'))}(−${X}) = π − ${inv(I('f'))}(${X})`, { size: 13 });
    // Complementary
    box(s, 10, 360, 330, 500, { color: C.faint, w: 1.2, name: 'card:complementary' });
    lab(s, cx, 384, 'Complementary', { size: 15, bold: true });
    COMP.forEach(([f, g], i) => runs(s, cx, 418 + i * 30, [{ t: `${inv(f)} ${X} + ${inv(g)} ${X} = ` }, PF()], { size: 13.5, anchor: 'middle' }));
    // the strip
    box(s, 10, 510, 330, 546, { color: C.ink, w: 1.6, name: 'strip' });
    lab(s, cx, 533, I('branch shape decides everything'), { size: 14 });
    return s;
  },
  check() {
    const s = fig26.draw(fig26.cases[0]), out: Check[] = [];
    const big = [1, 1.5, 3, 20, -1, -2, -7.5], posx = [0.2, 1, 4, 30];
    const F: Record<string, (x: number) => number> = { sin: Math.asin, cos: Math.acos, tan: Math.atan, cot: acot, sec: asec, cosec: acsc };
    out.push(['sin⁻¹(1/x) = cosec⁻¹ x and cos⁻¹(1/x) = sec⁻¹ x for |x| ≥ 1 (at 1, 1.5, 3, 20, −1, −2, −7.5)', big.every((x) => close(Math.asin(1 / x), acsc(x), 1e-12) && close(Math.acos(1 / x), asec(x), 1e-12))]);
    out.push(['tan⁻¹(1/x) = cot⁻¹ x for x > 0, and for x < 0 it is cot⁻¹ x − π instead', posx.every((x) => close(Math.atan(1 / x), acot(x), 1e-12) && close(Math.atan(-1 / x), acot(-x) - PI, 1e-12))]);
    const xs = [-0.9, -0.4, 0.2, 0.7], ys = [-30, -2, 0.5, 9], ss = [-5, -1.2, 1, 3];
    out.push(['Odd: sin⁻¹, tan⁻¹, cosec⁻¹ (f⁻¹(−x) = −f⁻¹(x)); π − form: cos⁻¹, sec⁻¹, cot⁻¹ (f⁻¹(−x) = π − f⁻¹(x))', xs.every((x) => close(F.sin(-x), -F.sin(x), 1e-12) && close(F.cos(-x), PI - F.cos(x), 1e-12)) && ys.every((x) => close(F.tan(-x), -F.tan(x), 1e-12) && close(F.cot(-x), PI - F.cot(x), 1e-12)) && ss.every((x) => close(F.cosec(-x), -F.cosec(x), 1e-12) && close(F.sec(-x), PI - F.sec(x), 1e-12))]);
    out.push(['Each complementary pair sums to π/2 on its domain', COMP.every(([f, g]) => (f === 'tan' ? ys : f === 'sin' ? xs : ss).every((x) => close(F[f](x) + F[g](x), PI / 2, 1e-12)))]);
    out.push(labelsCheck(s, ['Reciprocal', 'sin−1 1/x = cosec−1 x', 'cos−1 1/x = sec−1 x', 'tan−1 1/x = cot−1 x', '|x| ≥ 1', 'x > 0', 'for x < 0: subtract π', '(see Figure 2.5)', 'Negative argument', 'ODD:  sin, tan, cosec', 'f−1(−x) = −f−1(x)', 'π − :  cos, sec, cot', 'f−1(−x) = π − f−1(x)', 'Complementary', 'sin−1 x + cos−1 x = π/2', 'tan−1 x + cot−1 x = π/2', 'cosec−1 x + sec−1 x = π/2', 'branch shape decides everything']));
    out.push(stackedCheck(s, ['1/x', 'π/2']));
    out.push(noBadChars(s, fig26));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 2.7 · the dial (Topic 03, p. 149)                              */
/* ===================================================================== */
const CAP27 = `A dial view of ${AA} = ${inv('tan')} ${X} and ${BB} = ${inv('tan')} ${Y} stacked. If ${X}${Y} < 1, ${AA} + ${BB} stays inside the window (−${fr('π', '2')}, ${fr('π', '2')}) and the formula works directly. If ${X}${Y} > 1 (both positive), ${AA} + ${BB} overshoots past ${fr('π', '2')} and the ±π correction returns the principal value to the cage. The ±π term is the cage reasserting itself.`;
/** The values drawn (the book prints none): x = 1/2, y = 1/3 (A + B = π/4), and x = y = √3 (A + B = 2π/3). */
type Case27 = { chip: string; cap: string; x: number; y: number };
const CASES27: Case27[] = [
  { chip: 'xy < 1', cap: CAP27, x: 1 / 2, y: 1 / 3 },
  { chip: 'xy > 1', cap: CAP27, x: Math.sqrt(3), y: Math.sqrt(3) },
];
const D27 = { c: [150, 168] as P, r: 82, rA: 30, rB: 46 };
const fig27: Diagram = {
  id: 'm12-02-fig-2.7',
  topic: 2,
  name: 'The dial of tan⁻¹ x + tan⁻¹ y',
  cases: CASES27,
  draw(k: Case27) {
    const s = new Sketch(W, 330), { c, r, rA, rB } = D27, A = Math.atan(k.x) / DEG, B = Math.atan(k.y) / DEG, S = A + B, over = k.x * k.y > 1;
    if (over) {
      runs(s, W / 2, 22, [{ t: `${X}${Y} > 1 (both positive):  ${AA} + ${BB} overshoots;` }], { size: 13, anchor: 'middle' });
      lab(s, W / 2, 42, `answer = formula + π`, { size: 13 });
    } else {
      runs(s, W / 2, 22, [{ t: `${X}${Y} < 1:  ${AA} + ${BB} stays inside (−` }, PF(), { t: ', ' }, PF(), { t: ');' }], { size: 13, anchor: 'middle' });
      lab(s, W / 2, 46, 'the formula works directly', { size: 13 });
    }
    circle(s, c, r, { color: C.slate, w: 1.5, name: 'dial' });
    path(s, [[c[0], c[1] - r], [c[0], c[1] + r]], { color: C.ink, w: 2.6, name: 'diameter' });
    path(s, [c, [c[0] + r, c[1]]], { color: C.slate, w: 1.1, name: 'zero' });
    runs(s, c[0], c[1] - r - 17, [PF()], { size: 12, anchor: 'middle', color: C.slate });
    runs(s, c[0], c[1] + r + 20, [{ t: '−' }, PF()], { size: 12, anchor: 'middle', color: C.slate });
    lab(s, c[0] + r + 8, c[1] + 4, '0', { size: 12, anchor: 'start', color: C.slate });
    // A, then B stacked on it
    path(s, arcPts(c, rA, 0, A), { color: C.ink, w: 2.6, name: 'arc:A' });
    const a = pol(c, rB + 12, A / 2);
    lab(s, a[0] + 2, a[1] + 5, AA, { size: 14, anchor: 'start' });
    if (!over) {
      path(s, arcPts(c, rB, A, S), { color: C.ink, w: 2.6, name: 'arc:B' });
      const b = pol(c, rB + 10, A + B / 2);
      lab(s, b[0] + 1, b[1] + 3, BB, { size: 14, anchor: 'start' });
      const end = pol(c, r, S);
      path(s, [c, end], { color: C.ink, w: 2, name: 'ray' });
      pt(s, end, 'A+B', C.ink, 4.4);
      lab(s, end[0] + 10, end[1] - 8, `${AA} + ${BB}`, { size: 14, anchor: 'start' });
    } else {
      path(s, arcPts(c, rB, A, 90), { color: C.ink, w: 2.6, name: 'arc:B' });
      path(s, arcPts(c, rB, 90, S), { color: C.mari, w: 2.8, name: 'arc:over' });
      const b = pol(c, rB + 9, (A + 90) / 2);
      lab(s, b[0] + 2, b[1] + 2, BB, { size: 14, anchor: 'start' });
      const end = pol(c, r, S), back = pol(c, r, S - 180);
      arr(s, c, end, { color: C.ink, w: 1.5, dash: '5 4', name: 'jump:up', head: 8 });
      arr(s, c, back, { color: C.ink, w: 1.5, dash: '5 4', name: 'jump:down', head: 8 });
      pt(s, end, 'A+B', C.mari, 4.4);
      pt(s, back, 'formula', C.ink, 4.4);
      runs(s, end[0] - 10, end[1] - 16, [{ t: `${AA} + ${BB} = ` }, PF('2π', '3')], { size: 13, anchor: 'end', color: C.amber });
      runs(s, 334, 290, [{ t: `${inv('tan')} ` }, PF(`${X} + ${Y}`, `1 − ${X}${Y}`), { t: ' = −' }, PF('π', '3')], { size: 12.5, anchor: 'end' });
      lab(s, 66, 290, 'correction ±π', { size: 13, anchor: 'middle' });
    }
    lab(s, W / 2, 322, I('The ±π term is the cage reasserting itself.'), { size: 12.5, color: C.slate });
    return s;
  },
  check(k: Case27) {
    const s = fig27.draw(k), out: Check[] = [], { c } = D27, A = Math.atan(k.x), B = Math.atan(k.y), S = A + B, f = Math.atan((k.x + k.y) / (1 - k.x * k.y));
    const ang = (p: P) => Math.atan2(c[1] - p[1], p[0] - c[0]);
    if (k.x * k.y < 1) {
      out.push([`x = 1/2, y = 1/3: xy = 1/6 < 1, A + B = ${fmt(S / DEG, 1)}° = π/4 stays inside (−π/2, π/2), and tan⁻¹((x + y)/(1 − xy)) = tan⁻¹ 1 equals it directly`, close(k.x * k.y, 1 / 6, 1e-12) && close(S, PI / 4, 1e-12) && close(f, S, 1e-12)]);
      out.push(['The ray and its dot stand at A + B', close(ang(dotNamed(s, 'A+B')!.p), S, 1e-9)]);
    } else {
      out.push([`x = y = √3: xy = 3 > 1, A = B = π/3, A + B = 2π/3 overshoots π/2, the formula gives tan⁻¹(−√3) = −π/3, and −π/3 + π = 2π/3`, close(k.x * k.y, 3, 1e-12) && close(A, PI / 3, 1e-12) && close(S, (2 * PI) / 3, 1e-12) && S > PI / 2 && close(f, -PI / 3, 1e-12) && close(f + PI, S, 1e-12)]);
      out.push(['The marigold dot stands at 2π/3, the formula’s dot at −π/3, opposite it through the centre (a turn of π)', close(ang(dotNamed(s, 'A+B')!.p), S, 1e-9) && close(ang(dotNamed(s, 'formula')!.p), -PI / 3, 1e-9)]);
      const ov = linesNamed(s, /^arc:over$/)[0].pts;
      out.push(['Only the overshoot past π/2 is marigold: the arc from π/2 to 2π/3', close(ang(ov[0]), PI / 2, 1e-9) && close(ang(ov[ov.length - 1]), S, 1e-9)]);
    }
    const aA = linesNamed(s, /^arc:A$/)[0].pts, aB = linesNamed(s, /^arc:B$/)[0].pts;
    out.push(['The arcs are A = tan⁻¹ x from 0, then B = tan⁻¹ y stacked on it', close(ang(aA[0]), 0, 1e-9) && close(ang(aA[aA.length - 1]), A, 1e-9) && close(ang(aB[0]), A, 1e-9)]);
    out.push(labelsCheck(s, k.x * k.y < 1 ? ['xy < 1:  A + B stays inside (−π/2, π/2);', 'the formula works directly', 'π/2', '−π/2', '0', 'A', 'B', 'A + B', 'The ±π term is the cage reasserting itself.'] : ['xy > 1 (both positive):  A + B overshoots;', 'answer = formula + π', 'π/2', '−π/2', '0', 'A', 'B', 'A + B = 2π/3', 'tan−1 x + y/1 − xy = −π/3', 'correction ±π', 'The ±π term is the cage reasserting itself.']));
    out.push(stackedCheck(s, k.x * k.y < 1 ? ['π/2'] : ['π/2', '2π/3', 'x + y/1 − xy', 'π/3']));
    out.push(noBadChars(s, fig27));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 2.8 · the decision tree (Topic 03, p. 156)                     */
/* ===================================================================== */
const CAP28 = `A decision tree for ${inv('tan')} ${X} + ${inv('tan')} ${Y}: compute ${X}${Y}. If ${X}${Y} < 1, use ${inv('tan')}(${fr(`${X} + ${Y}`, `1 − ${X}${Y}`)}) directly. If ${X}${Y} > 1 (same sign forced): add π when ${X}, ${Y} > 0, subtract π when ${X}, ${Y} < 0. One number decides everything.`;
const T28 = { root: [172, 10, 266, 46] as Rect, leafL: [6, 150, 150, 230] as Rect, mid: [190, 96, 320, 140] as Rect, add: [162, 206, 230, 236] as Rect, sub: [252, 206, 334, 236] as Rect };
const mid = (r: Rect, side: 'top' | 'bottom'): P => [(r[0] + r[2]) / 2, side === 'top' ? r[1] : r[3]];
const fig28: Diagram = {
  id: 'm12-02-fig-2.8',
  topic: 2,
  name: 'Decision tree for tan⁻¹ x + tan⁻¹ y',
  cases: [{ chip: 'Compute xy', cap: CAP28 }],
  draw() {
    const s = new Sketch(W, 320), t = T28;
    box(s, ...t.root, { w: 1.8, name: 'box:root' });
    lab(s, (t.root[0] + t.root[2]) / 2, 34, `compute ${X}${Y}`, { size: 15 });
    box(s, ...t.leafL, { name: 'box:direct' });
    lab(s, 78, 172, `${inv('tan')} ${X} + ${inv('tan')} ${Y}`, { size: 12.5 });
    runs(s, 78, 198, [{ t: `= ${inv('tan')} ` }, PF(`${X} + ${Y}`, `1 − ${X}${Y}`)], { size: 12.5, anchor: 'middle' });
    lab(s, 78, 222, 'use directly', { size: 13 });
    box(s, ...t.mid, { color: C.slate, name: 'box:same' });
    lab(s, 255, 115, 'same sign forced', { size: 12.5 });
    lab(s, 255, 133, `(${X}${Y} > 1 > 0)`, { size: 12.5 });
    box(s, ...t.add, { color: C.mari, name: 'box:add' });
    lab(s, 196, 226, 'add π', { size: 14 });
    box(s, ...t.sub, { color: C.mari, name: 'box:sub' });
    lab(s, 293, 226, 'subtract π', { size: 14 });
    // the edges, each broken round its own label
    const edge = (a: P, b: P, text: string, col: string, name: string, at = 0.5, dx = 0) => {
      const m: P = [a[0] + (b[0] - a[0]) * at + dx, a[1] + (b[1] - a[1]) * at + 4];
      const r = lab(s, m[0], m[1], text, { size: 12, color: col === C.mari ? C.amber : C.text });
      brokenPath(s, [a, b], [r], LABEL_GAP + 0.5, { color: col, w: 1.8, name });
    };
    edge([190, 46], mid(t.leafL, 'top'), `${X}${Y} < 1`, C.ink, 'edge:lt');
    edge([250, 46], mid(t.mid, 'top'), `${X}${Y} > 1`, C.mari, 'edge:gt', 0.45);
    edge([228, 140], mid(t.add, 'top'), `${X}, ${Y} > 0`, C.mari, 'edge:pos');
    edge([284, 140], mid(t.sub, 'top'), `${X}, ${Y} < 0`, C.mari, 'edge:neg');
    runs(s, W / 2, 262, [{ t: `If ${X}${Y} = 1 the formula is undefined: the sum is` }], { size: 12, anchor: 'middle', color: C.slate });
    runs(s, W / 2, 284, [PF(), { t: ` for ${X} > 0, −` }, PF(), { t: ` for ${X} < 0.` }], { size: 12, anchor: 'middle', color: C.slate });
    lab(s, W / 2, 312, I('One number decides everything.'), { size: 13, color: C.slate });
    return s;
  },
  check() {
    const s = fig28.draw(fig28.cases[0]), out: Check[] = [];
    const sum = (x: number, y: number) => Math.atan(x) + Math.atan(y), f = (x: number, y: number) => Math.atan((x + y) / (1 - x * y));
    const lt = [[0.5, 0.3], [-2, 0.4], [3, -5], [-0.7, -0.9], [0, 8]], pos = [[2, 3], [1.5, 0.8], [10, 0.2]], neg = pos.map(([x, y]) => [-x, -y]);
    out.push(['xy < 1: tan⁻¹ x + tan⁻¹ y = tan⁻¹((x + y)/(1 − xy)) directly (five pairs, signs mixed)', lt.every(([x, y]) => x * y < 1 && close(sum(x, y), f(x, y), 1e-12))]);
    out.push(['xy > 1 forces x and y to share a sign; then add π when both are positive, subtract π when both are negative (three pairs each)', [...pos, ...neg].every(([x, y]) => x * y > 1 && Math.sign(x) === Math.sign(y)) && pos.every(([x, y]) => close(sum(x, y), f(x, y) + PI, 1e-12)) && neg.every(([x, y]) => close(sum(x, y), f(x, y) - PI, 1e-12))]);
    out.push(['xy = 1: the sum is π/2 for x > 0 and −π/2 for x < 0 (x = 2, 0.25, −3)', [2, 0.25].every((x) => close(sum(x, 1 / x), PI / 2, 1e-12)) && close(sum(-3, -1 / 3), -PI / 2, 1e-12)]);
    out.push(['The xy > 1 branch (its three edges and the add π, subtract π boxes) is marigold', ['edge:gt', 'edge:pos', 'edge:neg'].every((n) => linesNamed(s, new RegExp(`^${n}$`)).length >= 2)]);
    out.push(labelsCheck(s, ['compute xy', 'xy < 1', 'xy > 1', 'tan−1 x + tan−1 y', '= tan−1 x + y/1 − xy', 'use directly', 'same sign forced', '(xy > 1 > 0)', 'x, y > 0', 'x, y < 0', 'add π', 'subtract π', 'If xy = 1 the formula is undefined: the sum is', 'π/2 for x > 0, −π/2 for x < 0.', 'One number decides everything.']));
    out.push(stackedCheck(s, ['x + y/1 − xy', 'π/2', 'π/2']));
    out.push(noBadChars(s, fig28));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 2.9 · mirror and triangle (Topic 04, p. 158)                   */
/* ===================================================================== */
const R1MX2 = `√(1 − ${X}<sup>2</sup>)`;
const CAP29 = `Top: ${Y} = sin ${X} on [−${fr('π', '2')}, ${fr('π', '2')}] (faint), the line ${Y} = ${X} (dashed), and ${Y} = ${inv('sin')} ${X} as its bold mirror image: the reflection swaps domain [−1, 1] and range [−${fr('π', '2')}, ${fr('π', '2')}]. Bottom: the right-triangle method: ${TH} = ${inv('sin')} ${X} gives opposite ${X}, hypotenuse 1, adjacent ${R1MX2}, so any ratio reads off the triangle.`;
const G29: Gr = { ox: 150, oy: 170, uy: 56, ux: 56 };
/** The pair of mirror points the book marks: (π/3, sin π/3) on sin x and (sin π/3, π/3) on sin⁻¹ x. */
const T29 = PI / 3;
/** The triangle drawn: x = 0.6, so the adjacent side is 0.8. */
const TRI = { x: 0.6, hyp: 170, A: [102, 470] as P };
const fig29: Diagram = {
  id: 'm12-02-fig-2.9',
  topic: 3,
  name: 'Mirror image and right triangle',
  cases: [{ chip: 'y = sin⁻¹ x', cap: CAP29 }],
  draw() {
    const s = new Sketch(W, 520), g = G29;
    lab(s, W / 2, 18, `reflection across ${Y} = ${X}:`, { size: 13 });
    runs(s, W / 2, 40, [{ t: 'domain [−1, 1], range [−' }, PF(), { t: ', ' }, PF(), { t: ']' }], { size: 13, anchor: 'middle' });
    path(s, [[14, g.oy], [326, g.oy]], { color: C.slate, w: 1.3, name: 'axis:x' });
    path(s, [[g.ox, gy(g, 1.9)], [g.ox, gy(g, -1.9)]], { color: C.slate, w: 1.3, name: 'axis:y' });
    [-1, 1].forEach((v) => { tick(s, gx(g, v), g.oy); lab(s, gx(g, v), g.oy + 18, v < 0 ? '−1' : '1', { size: 12, color: C.slate }); });
    [-1, 1].forEach((v) => { tick(s, g.ox, gy(g, (v * PI) / 2), false); runs(s, g.ox - 8, gy(g, (v * PI) / 2) + 4, v < 0 ? [{ t: '−' }, PF()] : [PF()], { size: 11.5, anchor: 'end', color: C.slate }); });
    path(s, [gp(g, [-1.85, -1.85]), gp(g, [1.45, 1.45])], { color: C.grey, w: 1.5, dash: '6 5', name: 'line:y=x' });
    curve(s, g, sample(Math.sin, -PI / 2, PI / 2, 160), { color: C.slate, w: 1.6, name: 'curve:sin' });
    const as = [...sampleAt(Math.asin, 0, 1, 100).slice(1).reverse().map(([x, y]): P => [-x, -y]), ...sampleAt(Math.asin, 0, 1, 100)];
    curve(s, g, as, { color: C.ink, w: 3, name: 'curve:asin' });
    pt(s, gp(g, [T29, Math.sin(T29)]), 'on sin', C.slate);
    pt(s, gp(g, [Math.sin(T29), T29]), 'on asin', C.ink);
    lab(s, gx(g, 1), gy(g, PI / 2) - 10, `${Y} = ${inv('sin')} ${X}`, { size: 13 });
    lab(s, gx(g, 1.45) + 6, gy(g, 1.45) + 8, `${Y} = ${X}`, { size: 12, anchor: 'start', color: C.faint });
    lab(s, gx(g, PI / 2) + 6, gy(g, 1) + 14, `${Y} = sin ${X}`, { size: 12, anchor: 'start', color: C.slate });
    // the right-triangle method
    runs(s, W / 2, 312, [{ t: `${TH} = ${inv('sin')} ${X}  ⇒  read any ratio off the triangle:` }], { size: 12.5, anchor: 'middle' });
    runs(s, W / 2, 340, [{ t: `cos ${TH} = ${R1MX2},  tan ${TH} = ` }, PF(X, R1MX2)], { size: 12.5, anchor: 'middle' });
    const A = TRI.A, adj = TRI.hyp * Math.sqrt(1 - TRI.x ** 2), opp = TRI.hyp * TRI.x, Rt: P = [A[0] + adj, A[1]], T: P = [A[0] + adj, A[1] - opp];
    path(s, [A, Rt, T, A], { color: C.ink, w: 2, name: 'triangle' });
    path(s, [[Rt[0] - 10, Rt[1]], [Rt[0] - 10, Rt[1] - 10], [Rt[0], Rt[1] - 10]], { color: C.ink, w: 1.1, name: 'right-angle' });
    const th = Math.atan2(opp, adj) / DEG;
    path(s, arcPts(A, 28, 0, th, 24), { color: C.ink, w: 1.6, name: 'angle' });
    lab(s, A[0] + 42, A[1] - 8, TH, { size: 14 });
    const mH = pol(A, TRI.hyp / 2, th);
    lab(s, mH[0] - 12, mH[1] - 8, '1', { size: 14 });
    lab(s, Rt[0] + 9, Rt[1] - opp / 2 + 5, X, { size: 14, anchor: 'start' });
    lab(s, A[0] + adj / 2, A[1] + 22, R1MX2, { size: 13.5 });
    return s;
  },
  check() {
    const s = fig29.draw(fig29.cases[0]), out: Check[] = [], g = G29;
    const sn = curveBack(s, g, 'curve:sin'), as = curveBack(s, g, 'curve:asin'), ln = linesNamed(s, /^line:y=x$/)[0].pts.map((p) => unPx(g, p));
    out.push(['The faint curve is y = sin x on [−π/2, π/2]', onCurve(sn, Math.sin) && close(sn[0][0], -PI / 2, 1e-3) && close(sn[sn.length - 1][0], PI / 2, 1e-3)]);
    out.push(['The bold curve is y = sin⁻¹ x on [−1, 1], from (−1, −π/2) to (1, π/2)', onCurve(as, Math.asin, 3e-3) && close(as[0][0], -1, 1e-3) && close(as[as.length - 1][0], 1, 1e-3) && close(as[0][1], -PI / 2, 2e-3) && close(as[as.length - 1][1], PI / 2, 2e-3)]);
    out.push(['Each point of the bold curve is a point of the faint one with its coordinates swapped (the mirror in y = x), and the dashed line is y = x', as.every(([x, y]) => close(Math.sin(y), x, 3e-3)) && ln.every(([x, y]) => close(x, y, 1e-2))]);
    const d1 = unPx(g, dotNamed(s, 'on sin')!.p), d2 = unPx(g, dotNamed(s, 'on asin')!.p);
    out.push(['The two dots are mirror images: (π/3, √3/2) on sin x and (√3/2, π/3) on sin⁻¹ x', close(d1[0], d2[1], 1e-6) && close(d1[1], d2[0], 1e-6) && close(d1[1], Math.sin(d1[0]), 1e-6) && close(d2[1], Math.asin(d2[0]), 1e-6)]);
    const t = linesNamed(s, /^triangle$/)[0].pts, hyp = len(t[0], t[2]), opp = len(t[1], t[2]), adj = len(t[0], t[1]);
    out.push([`The triangle: hypotenuse 1, opposite x = ${TRI.x}, adjacent √(1 − x²) = ${fmt(Math.sqrt(1 - TRI.x ** 2))}; so sin θ = x, cos θ = √(1 − x²), tan θ = x/√(1 − x²)`, close(opp / hyp, TRI.x, 1e-9) && close(adj / hyp, Math.sqrt(1 - TRI.x ** 2), 1e-9) && close(Math.cos(Math.asin(TRI.x)), adj / hyp, 1e-9) && close(Math.tan(Math.asin(TRI.x)), TRI.x / Math.sqrt(1 - TRI.x ** 2), 1e-9) && close(t[0][1], t[1][1]) && close(t[1][0], t[2][0])]);
    out.push(labelsCheck(s, ['reflection across y = x:', 'domain [−1, 1], range [−π/2, π/2]', '−1', '1', 'π/2', '−π/2', 'y = sin−1 x', 'y = x', 'y = sin x', 'θ = sin−1 x  ⇒  read any ratio off the triangle:', 'cos θ = √(1 − x2),  tan θ = x/√(1 − x2)', 'θ', 'x', '√(1 − x2)']));
    out.push(stackedCheck(s, ['π/2', 'x/√(1 − x2)']));
    out.push(noBadChars(s, fig29));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 2.10 · the six graphs (Topic 04, p. 164)                       */
/* ===================================================================== */
const CAP210 = `The six inverse-function graphs at a glance: ${inv('sin')}, ${inv('cos')}, ${inv('tan')}, ${inv('cot')}, ${inv('sec')}, ${inv('cosec')}, each with domain and range marked, asymptotes dashed where relevant, and key points labelled.`;
type Side = 'above' | 'below' | 'left' | 'right';
type Panel = {
  f: string; fn: (x: number) => number; map: Piece[]; ux: number; y0: number; y1: number;
  /** The curve's pieces, as x-intervals, sampled crowded towards `a` (where an inverse function's graph stands upright). */
  parts: { a: number; b: number }[];
  /** Marked points; a label's baseline sits (dx, dy) px from its dot. */
  dots: { at: P; text?: Piece[]; dx: number; dy: number; anchor: 'start' | 'middle' | 'end' }[];
  asym: { y: number; text?: Piece[]; side?: Side }[];
  xt: { v: number; side: Side }[];
  /** y ticks; `lift` raises a label off its tick where the curve passes through the tick's level. */
  yt: { v: number; text: Piece[]; side: Side; lift?: number }[];
};
const PANELS: Panel[] = [
  {
    f: 'sin', fn: Math.asin, map: [{ t: '[−1, 1] → [−' }, PF(), { t: ', ' }, PF(), { t: ']' }], ux: 50, y0: -PI / 2, y1: PI / 2,
    parts: [{ a: 0, b: -1 }, { a: 0, b: 1 }], asym: [], xt: [{ v: -1, side: 'above' }, { v: 1, side: 'below' }],
    yt: [{ v: PI / 2, text: [PF()], side: 'left' }, { v: -PI / 2, text: [{ t: '−' }, PF()], side: 'right' }],
    dots: [{ at: [-1, -PI / 2], dx: 0, dy: 0, anchor: 'start' }, { at: [0, 0], dx: 0, dy: 0, anchor: 'start' }, { at: [1, PI / 2], dx: 0, dy: 0, anchor: 'start' }],
  },
  {
    f: 'cos', fn: Math.acos, map: [{ t: '[−1, 1] → [0, π]' }], ux: 50, y0: 0, y1: PI,
    parts: [{ a: 0, b: -1 }, { a: 0, b: 1 }], asym: [], xt: [{ v: -1, side: 'below' }, { v: 1, side: 'below' }],
    yt: [{ v: PI, text: [{ t: 'π' }], side: 'right' }, { v: PI / 2, text: [PF()], side: 'right', lift: 17 }],
    dots: [{ at: [-1, PI], dx: 0, dy: 0, anchor: 'start' }, { at: [0, PI / 2], dx: 0, dy: 0, anchor: 'start' }, { at: [1, 0], dx: 0, dy: 0, anchor: 'start' }],
  },
  {
    f: 'tan', fn: Math.atan, map: [{ t: 'ℝ → (−' }, PF(), { t: ', ' }, PF(), { t: ')' }], ux: 14, y0: -PI / 2, y1: PI / 2,
    parts: [{ a: -5.2, b: 5.2 }], xt: [],
    asym: [{ y: PI / 2, text: [PF()], side: 'above' }, { y: -PI / 2, text: [{ t: '−' }, PF()], side: 'below' }], yt: [],
    dots: [{ at: [1, PI / 4], text: [{ t: '(1, ' }, PF('π', '4'), { t: ')' }], dx: 20, dy: 8, anchor: 'start' }],
  },
  {
    f: 'cot', fn: acot, map: [{ t: 'ℝ → (0, π)' }], ux: 14, y0: 0, y1: PI,
    parts: [{ a: -5.2, b: 5.2 }], xt: [],
    asym: [{ y: PI, text: [{ t: 'π' }], side: 'above' }, { y: 0 }], yt: [],
    dots: [{ at: [0, PI / 2], text: [{ t: '(0, ' }, PF(), { t: ')' }], dx: 10, dy: -12, anchor: 'start' }],
  },
  {
    f: 'sec', fn: asec, map: [{ t: `|${X}| ≥ 1 → [0, π] − {` }, PF(), { t: '}' }], ux: 14, y0: 0, y1: PI,
    parts: [{ a: -1, b: -5.2 }, { a: 1, b: 5.2 }], xt: [{ v: -1, side: 'below' }, { v: 1, side: 'below' }],
    asym: [{ y: PI / 2, text: [PF()], side: 'below' }], yt: [],
    dots: [{ at: [-1, PI], text: [{ t: '(−1, π)' }], dx: -10, dy: -2, anchor: 'end' }, { at: [1, 0], text: [{ t: '(1, 0)' }], dx: 8, dy: -8, anchor: 'start' }],
  },
  {
    f: 'cosec', fn: acsc, map: [{ t: `|${X}| ≥ 1 → [−` }, PF(), { t: ', ' }, PF(), { t: '] − {0}' }], ux: 14, y0: -PI / 2, y1: PI / 2,
    parts: [{ a: 1, b: 5.2 }, { a: -1, b: -5.2 }], xt: [{ v: -1, side: 'above' }, { v: 1, side: 'below' }],
    asym: [{ y: 0 }], yt: [],
    dots: [{ at: [1, PI / 2], text: [{ t: '(1, ' }, PF(), { t: ')' }], dx: 10, dy: 4, anchor: 'start' }, { at: [-1, -PI / 2], text: [{ t: '(−1, −' }, PF(), { t: ')' }], dx: -10, dy: 4, anchor: 'end' }],
  },
];
const UY = 28, PW = 170, ROW = 192, TOP0 = 30, GTOP = 62;
const panelGr = (i: number): Gr => {
  const p = PANELS[i], cx = (i % 2) * PW + PW / 2 + (i % 2 ? -2 : 2), top = TOP0 + Math.floor(i / 2) * ROW + GTOP;
  return { ox: cx, oy: top + p.y1 * UY, ux: p.ux, uy: UY };
};
const fig210: Diagram = {
  id: 'm12-02-fig-2.10',
  topic: 3,
  name: 'The six inverse-function graphs',
  cases: [{ chip: 'All six', cap: CAP210 }],
  draw() {
    const s = new Sketch(W, TOP0 + 3 * ROW - 8);
    lab(s, W / 2, 18, 'The six inverse-function graphs at a glance.', { size: 14, bold: true });
    PANELS.forEach((p, i) => {
      const g = panelGr(i), x0 = (i % 2) * PW + 6, x1 = x0 + PW - 12, top = TOP0 + Math.floor(i / 2) * ROW;
      lab(s, g.ox, top + 14, `${Y} = ${inv(p.f)} ${X}`, { size: 13 });
      runs(s, g.ox, top + 37, p.map, { size: 11.5, anchor: 'middle' });
      path(s, [[x0, g.oy], [x1, g.oy]], { color: C.slate, w: 1.2, name: `axis:x:${p.f}` });
      path(s, [[g.ox, gy(g, p.y1) - 8], [g.ox, Math.max(gy(g, p.y0) + 8, g.oy + 26)]], { color: C.slate, w: 1.2, name: `axis:y:${p.f}` });
      p.xt.forEach(({ v, side }) => {
        tick(s, gx(g, v), g.oy, true, 3.5);
        lab(s, gx(g, v), g.oy + (side === 'below' ? 17 : -11), v < 0 ? '−1' : '1', { size: 11, color: C.slate });
      });
      p.yt.forEach(({ v, text, side, lift }) => {
        tick(s, g.ox, gy(g, v), false, 3.5);
        runs(s, g.ox + (side === 'left' ? -8 : 8), gy(g, v) + 4 - (lift ?? 0), text, { size: 10.5, anchor: side === 'left' ? 'end' : 'start', color: C.slate });
      });
      p.asym.forEach(({ y, text, side }) => {
        path(s, [[x0, gy(g, y)], [x1, gy(g, y)]], { color: C.mari, w: 1.5, dash: '5 4', name: `asym:${p.f}:${fmt(y)}` });
        if (text) runs(s, x0 + 2, gy(g, y) + (side === 'below' ? 19 : text.some((q) => 'num' in q) ? -15 : -11), text, { size: 10.5, anchor: 'start', color: C.amber });
      });
      p.parts.forEach((q, k) => curve(s, g, sampleAt(p.fn, q.a, q.b, 160), { color: C.ink, w: 2.4, name: `curve:${p.f}:${k}` }));
      p.dots.forEach((d, k) => {
        pt(s, gp(g, d.at), `${p.f}:${k}`, C.ink, 3.6);
        if (d.text) runs(s, gx(g, d.at[0]) + d.dx, gy(g, d.at[1]) + d.dy, d.text, { size: 10.5, anchor: d.anchor, color: C.text });
      });
    });
    return s;
  },
  check() {
    const s = fig210.draw(fig210.cases[0]), out: Check[] = [];
    PANELS.forEach((p, i) => {
      const g = panelGr(i), pieces = p.parts.map((_, k) => curveBack(s, g, `curve:${p.f}:${k}`));
      const vals = pieces.flat().map((q) => q[1]);
      out.push([`y = ${p.f}⁻¹ x: every curve point is on the graph, within its range [${fmt(p.y0)}, ${fmt(p.y1)}]${p.f === 'sec' || p.f === 'cosec' ? ', only for |x| ≥ 1' : p.f === 'sin' || p.f === 'cos' ? ', only for |x| ≤ 1' : ''}`,
        pieces.every((c) => onCurve(c, p.fn, 4e-3)) && vals.every((v) => v >= p.y0 - 1e-6 && v <= p.y1 + 1e-6) && pieces.flat().every(([x]) => (p.f === 'sec' || p.f === 'cosec' ? Math.abs(x) >= 1 - 1e-6 : p.f === 'sin' || p.f === 'cos' ? Math.abs(x) <= 1 + 1e-6 : true))]);
      out.push([`y = ${p.f}⁻¹ x: its marked points (${p.dots.map((d) => `(${fmt(d.at[0])}, ${fmt(d.at[1])})`).join(', ')}) are on the graph, filled`, p.dots.every((d, k) => { const dd = dotNamed(s, `${p.f}:${k}`); return !!dd && !dd.open && close(p.fn(d.at[0]), d.at[1], 1e-12) && close(unPx(g, dd.p)[0], d.at[0], 1e-9); })]);
      if (p.asym.length) {
        const far = p.asym.map(({ y }) => Math.min(Math.abs(p.fn(1e8) - y), Math.abs(p.fn(-1e8) - y)));
        out.push([`y = ${p.f}⁻¹ x: the dashed asymptote${p.asym.length > 1 ? 's' : ''} y = ${p.asym.map((a) => fmt(a.y)).join(', ')} ${p.asym.length > 1 ? 'are' : 'is'} approached as x → ±∞ and never reached`, far.every((d) => d < 1e-7) && p.asym.every(({ y }) => pieces.flat().every((q) => Math.abs(q[1] - y) > 1e-4))]);
      }
    });
    // each tick label and asymptote label stands at its value: its box beside the tick or line it names, in its own panel
    const tickText = (ps: Piece[]) => ps.map(pieceText).join('');
    PANELS.forEach((p, i) => {
      const g = panelGr(i), px0 = (i % 2) * PW, top = TOP0 + Math.floor(i / 2) * ROW, bad: string[] = [];
      const at = (t: string, ok: (r: Rect) => boolean) => s.labels.some((l) => l.text === t && l.rect[0] >= px0 - 1 && l.rect[2] <= px0 + PW + 1 && l.rect[1] >= top && l.rect[3] <= top + ROW && ok(l.rect));
      const midY = (r: Rect) => (r[1] + r[3]) / 2;
      p.xt.forEach(({ v, side }) => {
        const t = v < 0 ? '−1' : '1', X0 = gx(g, v);
        if (!at(t, (r) => Math.abs((r[0] + r[2]) / 2 - X0) < 1 && (side === 'below' ? r[1] > g.oy && r[1] - g.oy < 12 : r[3] < g.oy && g.oy - r[3] < 12))) bad.push(`x = ${t}`);
      });
      p.yt.forEach(({ v, text, side, lift }) => {
        const t = tickText(text), Y0 = gy(g, v) - (lift ?? 0);
        if (!at(t, (r) => Math.abs(midY(r) - Y0) < 6 && (side === 'left' ? g.ox - r[2] > 2 && g.ox - r[2] < 12 : r[0] - g.ox > 2 && r[0] - g.ox < 12))) bad.push(`y = ${t}`);
      });
      p.asym.forEach(({ y, text, side }) => {
        if (!text) return;
        const t = tickText(text), Y0 = gy(g, y);
        if (!at(t, (r) => (side === 'below' ? r[1] > Y0 && r[1] - Y0 < 12 : r[3] < Y0 && Y0 - r[3] < 12))) bad.push(`asymptote ${t}`);
      });
      const names = [...p.xt.map(({ v }) => `x = ${v < 0 ? '−1' : '1'}`), ...p.yt.map(({ text, lift }) => `y = ${tickText(text)}${lift ? ` (raised ${lift} px off its tick, where the curve crosses)` : ''}`), ...p.asym.filter((a) => a.text).map(({ text }) => `asymptote ${tickText(text!)}`)];
      if (names.length) out.push([`y = ${p.f}⁻¹ x: each tick and asymptote label stands at its value (${names.join(', ')})${bad.length ? `; not ${bad.join(', ')}` : ''}`, bad.length === 0]);
    });
    out.push(labelsCheck(s, ['The six inverse-function graphs at a glance.', 'y = sin−1 x', 'y = cos−1 x', 'y = tan−1 x', 'y = cot−1 x', 'y = sec−1 x', 'y = cosec−1 x', '[−1, 1] → [−π/2, π/2]', '[−1, 1] → [0, π]', 'ℝ → (−π/2, π/2)', 'ℝ → (0, π)', '|x| ≥ 1 → [0, π] − {π/2}', '|x| ≥ 1 → [−π/2, π/2] − {0}', '(1, π/4)', '(0, π/2)', '(−1, π)', '(1, 0)', '(1, π/2)', '(−1, −π/2)', '−1', '1', 'π', 'π/2', '−π/2']));
    out.push(stackedCheck(s, ['π/2', 'π/4']));
    out.push(noBadChars(s, fig210));
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 12 Chapter 2, Inverse Trigonometric Functions: the book's figures. */
export const DIAGRAMS_MATHEMATICS_12_02: Diagram[] = [fig21, fig22, fig23, fig24, fig25, fig26, fig27, fig28, fig29, fig210];

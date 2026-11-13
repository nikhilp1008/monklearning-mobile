import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import { stixW } from '@/lib/diagrams/mathematics-11-03b';

/**
 * MATHEMATICS CLASS 11, CHAPTER 11 (Introduction to Three Dimensional Geometry): every drawing of the Master
 * Reference book (October edition) on pp. 1010–1059, redrawn. Figures 11.1–11.10 stand on their own "CHAPTER 11 ·
 * FIGURES" plates, the page after their caption; the Additional Topics part prints its own "Figure 1" and "Figure 2".
 *
 *   Figure 11.1 (p. 1011), the right-handed frame and the eight octants, Topic 01, topic index 0.
 *   Figure 11.2 (p. 1014), dropping perpendiculars from P(x, y, z), Topic 01, index 0.
 *   Figure 11.3 (p. 1017), |x| = |z| seen down the y-axis, Topic 01 (its fourth worked example), index 0.
 *   Figure 11.4 (p. 1021), the distance formula as a space diagonal, Topic 02, index 1.
 *   Figure 11.5 (p. 1026), the plane x − 2z = 0 bisecting AB, Topic 02 (fourth worked example), index 1.
 *   Figure 11.6 (p. 1034), the prolate spheroid PA + PB = 12, Topic 03 (fourth worked example), index 2.
 *   Figure 11.7 (p. 1039), distance from the z-axis, Additional A, index 3.
 *   Figure 11.8 (p. 1041), the ratio 2 ∶ 3 internal and external, Additional B, index 4.
 *   Figure 11.9 (p. 1044), the diagonals of parallelogram ABCD, Additional C, index 5.
 *   Figure 11.10 (p. 1049), the centroid of a tetrahedron, Additional E, index 7.
 *   The Additional Topics part's "Figure 1" (p. 1053), m11-11-G-d1, Additional G, index 9.
 *   Its "Figure 2" (p. 1056), m11-11-H-d1, two chips (one per panel), Additional H, index 10.
 *
 * ONE PROJECTION. Every 3D drawing uses the same oblique frame: z up, y to the right, x toward the viewer, drawn
 * down-left at 215° and shortened to 0.62 (the book turns its frame from figure to figure; 11.1 and 11.2 draw x
 * down-right, 11.5 a freely turned view with its own small axes). Points keep their coordinates; only the view is
 * the house one. Octant numerals sit where their octant falls in this frame.
 *
 * ONE HIGHLIGHT, NO FILLS. The book's shaded planes, boxes, faces and halos are outlines only. Marigold marks:
 * 11.1 the three coordinate-plane panels; 11.2 the two drops; 11.3 z = −x; 11.4 PQ; 11.5 T, TA and TB; 11.6 PA and
 * PB; 11.7 PN; 11.8 the external division; 11.9 the diagonal AC; 11.10 AG and G; G-d1 the two solutions; H-d1 the
 * point where the plane meets the line. The book's navy, teal and green are ink, its grey slate.
 *
 * DOTS. Every point is a filled dot (decision 10). 11.3's O is a plain ring (the y-axis seen end-on; the book's
 * ring-and-dot reads as "out of the page", the wrong way for this right-handed frame). H-d1's point of division
 * keeps the book's square marker.
 *
 * DEPARTURES, for a phone: 11.6 draws the far half of the equator dashed and leaves out the rest of the book's
 * wireframe (it left no room for the labels), and names (±6, 0, 0), (0, √11, 0), A, B and PB by short leaders; 11.4
 * names its base diagonal by a short leader (the diagonal is too flat for its label to sit beside it); 11.5's M and T, 11.7's M, 11.9's
 * callout and 11.10's A, G and G₁ also use leaders. 11.9 is drawn flat, as the book draws it. 11.10 keeps the book's
 * thin AC. 11.3 leaves out the grid and the halos round the lines; its callout stands right of the z-axis. 11.8 sets
 * R_int's coordinates on their own row. H-d1's two panels are two chips, each caption the shared opening plus its
 * own panel's sentence.
 *
 * Every fraction on a drawing is stacked by hand. Ratios use the ratio colon ∶ (the captions of 11.8 and 11.10 print
 * "2:3" and "3:1"); 11.9's "A + C - B" has the minus sign −. No em dash: H-d1's captions read "… itself: internal,
 * …". "Example 7.1" and "Example 8.1" in the captions read "the first worked example".
 */

const W = 340;
type P = [number, number];
type V = [number, number, number];
const DEG = Math.PI / 180;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<\/?(?:i|sub|sup|b|frac|num|den)>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const I = (t: string) => `<i>${t}</i>`;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const X = I('x'), Y = I('y'), Z = I('z');
const sq = (t: string) => `${t}<sup>2</sup>`;
/** A no-break space, and a word joiner where Android would break after a sign or a bar. */
const NB = '\u00a0', WJ = '\u2060';

/* ---------- the 3D frame: one oblique projection for every drawing ---------- */
const XS: P = [Math.cos(215 * DEG) * 0.62, -Math.sin(215 * DEG) * 0.62];
/** A point of space on the page: origin o (px), u px a unit. */
const pj = (o: P, u: number, v: V): P => [o[0] + u * (v[0] * XS[0] + v[1]), o[1] + u * (v[0] * XS[1] - v[2])];
const add3 = (a: V, b: V): V => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub3 = (a: V, b: V): V => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const mul3 = (a: V, k: number): V => [a[0] * k, a[1] * k, a[2] * k];
const dot3 = (a: V, b: V) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const len3 = (a: V) => Math.sqrt(dot3(a, a));
const dist3 = (a: V, b: V) => len3(sub3(a, b));
const unit3 = (a: V): V => mul3(a, 1 / (len3(a) || 1));

/* ---------- lines, labels and the layout checks (as in mathematics-11-10.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean | string; name?: string };
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const dashAttr = (d: Stroke['dash']) => (d === true ? ' stroke-dasharray="5 4"' : d ? ` stroke-dasharray="${d}"` : '');
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  keep(s, pts, o.name);
}
/** An arrow with a small filled head at b (and at a too when `both`). */
function arr(s: Sketch, a: P, b: P, o: Stroke & { both?: boolean; head?: number } = {}) {
  const col = o.color ?? C.ink, L0 = o.head ?? 7, d = len(a, b), L = Math.min(L0, d / (o.both ? 2.6 : 1.6)), hw = L * 0.5;
  const ang = Math.atan2(b[1] - a[1], b[0] - a[0]), ux = Math.cos(ang), uy = Math.sin(ang);
  const headAt = (tip: P, sgn: number) => {
    const bx = tip[0] - sgn * L * ux, by = tip[1] - sgn * L * uy;
    s.add(`<path d="M${r1(tip[0])} ${r1(tip[1])} L${r1(bx + hw * uy)} ${r1(by - hw * ux)} L${r1(bx - hw * uy)} ${r1(by + hw * ux)} Z" fill="${col}"/>`);
  };
  const a2: P = o.both ? [a[0] + L * ux * 0.8, a[1] + L * uy * 0.8] : a, b2: P = [b[0] - L * ux * 0.8, b[1] - L * uy * 0.8];
  s.add(`<line x1="${r1(a2[0])}" y1="${r1(a2[1])}" x2="${r1(b2[0])}" y2="${r1(b2[1])}" stroke="${col}" stroke-width="${o.w ?? 1.4}" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  headAt(b, 1);
  if (o.both) headAt(a, -1);
  keep(s, [a, b], o.name ?? 'arrow');
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
function clearance(s: Sketch): { gap: number; what: string } {
  let gap = Infinity, what = '';
  for (const { pts, name: ln } of LINES.get(s) ?? []) for (const l of s.labels) { const d = boxToLine(l.rect, pts); if (d < gap) { gap = d; what = `${l.text}" (from the ${ln || 'line'})`; } }
  return { gap, what };
}
function crowded(s: Sketch): string[] {
  const out: string[] = [];
  for (const { pts, name: ln } of LINES.get(s) ?? []) for (const l of s.labels) { const d = boxToLine(l.rect, pts); if (d < LABEL_GAP - 1e-9) out.push(`"${l.text}" ${fmt(d, 1)} px from the ${ln || 'line'}`); }
  return [...new Set(out)];
}
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s), bad = crowded(s);
  return [`Every label stays at least ${LABEL_GAP} px clear of every line, dot and mark: the closest is "${what}, ${fmt(gap, 1)} px${bad.length ? `; too close: ${bad.join('; ')}` : ''}`, gap >= LABEL_GAP - 1e-9];
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
const labelsCheck = (s: Sketch, ts: string[], what = 'The labels as printed'): Check => {
  const miss = ts.filter((t) => !s.labels.some((l) => l.text === t));
  return [`${what}: ${ts.join(' · ')}${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0];
};
/** No em dash, no vulgar-fraction character and no one-line fraction outside a raised run, in anything the drawing shows. */
const noBadChars = (s: Sketch, d: Diagram): Check => {
  const unraised = (h: string) => plain(h.replace(/<sup>.*?<\/sup>/g, '').replace(/<frac>.*?<\/frac>/g, ''));
  const all = [...s.texts.map((t) => unraised(t.html)), d.name, ...d.cases.flatMap((c) => [c.chip, unraised(c.cap)])].join(' ');
  return ['No em dash, no vulgar-fraction character and no slash fraction in the labels, name, chips or captions', !/[—¼-¾⅐-⅞]/.test(all) && !/[\w)!]\s*\/\s*[\w(]/.test(all)];
};

/** A line of STIX on the drawing, from its baseline, its box at its true width. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; semibold?: boolean } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size) * (o.semibold ? 1.05 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.semibold });
  return rect;
}

/* ---------- labels of several runs: text and stacked fractions (as in mathematics-11-10.ts) ---------- */
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
  const bx: Rect = [at, y - size * 0.72, at + total, y + size * 0.22];
  const grow = (r: Rect) => { bx[1] = Math.min(bx[1], r[1]); bx[3] = Math.max(bx[3], r[3]); };
  parts.forEach((p, i) => {
    if ('t' in p) textRun(s, at, ws[i], y, p.t, size, color, i < parts.length - 1);
    else grow(frac(s, at + ws[i] / 2, y - size * 0.27, p.num, p.den, size, color));
    at += ws[i];
  });
  s.labels.push({ text: parts.map(pieceText).join(''), rect: bx });
  return bx;
}
const stackedCheck = (s: Sketch, want: string[]): Check => {
  const f = FRACS.get(s) ?? [], got = f.map((q) => `${plain(q.num)}/${plain(q.den)}`);
  const ok = f.every((q) => q.numY < q.rule[2] && q.denY - 6 > q.rule[2] && q.rule[1] - q.rule[0] >= Math.max(q.numW, q.denW)) && want.every((w) => got.includes(w)) && f.length === want.length;
  return [`Every fraction on the drawing is stacked by hand (${f.length}: ${[...new Set(got)].join(', ')}), numerator over the rule over denominator`, ok];
};

/* ---------- dots and marks ---------- */
const DOTS = new WeakMap<Sketch, { p: P; name: string }[]>();
const DOT_R = 3.6;
/** A filled dot (decision 10), kept as a ring for the clearance check. */
function pt(s: Sketch, p: P, name: string, col: string = C.ink, r = DOT_R) {
  s.dot(p[0], p[1], r, col);
  keep(s, Array.from({ length: 25 }, (_, i): P => [p[0] + (r + 1) * Math.cos((2 * Math.PI * i) / 24), p[1] + (r + 1) * Math.sin((2 * Math.PI * i) / 24)]), `dot:${name}`);
  DOTS.set(s, [...(DOTS.get(s) ?? []), { p, name }]);
}
const dotAt = (s: Sketch, name: string) => (DOTS.get(s) ?? []).find((d) => d.name === name)?.p;
/** The dot named `name` stands where the frame puts the point v. */
const dotIs = (s: Sketch, name: string, at: P) => { const d = dotAt(s, name); return !!d && close(d[0], at[0], 1e-6) && close(d[1], at[1], 1e-6); };
const unit = (a: P, b: P): P => { const d = len(a, b) || 1; return [(b[0] - a[0]) / d, (b[1] - a[1]) / d]; };
/** A right-angle mark in the corner c between the directions u and v (unit, screen). */
function rightMark(s: Sketch, c: P, u: P, v: P, size = 8, col: string = C.ink) {
  path(s, [[c[0] + u[0] * size, c[1] + u[1] * size], [c[0] + (u[0] + v[0]) * size, c[1] + (u[1] + v[1]) * size], [c[0] + v[0] * size, c[1] + v[1] * size]], { color: col, w: 1.1, name: 'right angle' });
}
/** A right-angle mark in space: the corner c, the two edge directions d1, d2, k units along each, projected. */
function rightMark3(s: Sketch, o: P, u: number, c: V, d1: V, d2: V, k: number, col: string = C.ink) {
  const a = unit3(d1), b = unit3(d2);
  path(s, [pj(o, u, add3(c, mul3(a, k))), pj(o, u, add3(c, add3(mul3(a, k), mul3(b, k)))), pj(o, u, add3(c, mul3(b, k)))], { color: col, w: 1.1, name: 'right angle' });
}
/** A thin leader from a point to a label, stopping LABEL_GAP + 1 px short of the label's box. */
function leadTo(s: Sketch, from: P, r: Rect, col: string = C.slate, name = 'leader') {
  const q: P = [Math.max(r[0], Math.min(r[2], from[0])), Math.max(r[1], Math.min(r[3], from[1]))], d = len(q, from) || 1;
  const k = LABEL_GAP + 1.5;
  path(s, [from, [q[0] + ((from[0] - q[0]) * k) / d, q[1] + ((from[1] - q[1]) * k) / d]], { color: col, w: 0.9, name });
}
/** n short strokes across the middle of a–b: the book's equal-length marks. */
function ticks(s: Sketch, a: P, b: P, n: number, col: string) {
  const m: P = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], u = unit(a, b), v: P = [-u[1], u[0]];
  for (let i = 0; i < n; i++) {
    const k = (i - (n - 1) / 2) * 4, c: P = [m[0] + u[0] * k, m[1] + u[1] * k];
    path(s, [[c[0] - v[0] * 5, c[1] - v[1] * 5], [c[0] + v[0] * 5, c[1] + v[1] * 5]], { color: col, w: 1.3, name: 'tick mark' });
  }
}

/* ===================================================================== */
/* Figure 11.1 · the right-handed frame and the eight octants (p. 1011)  */
/* ===================================================================== */
const CAP111 = `The right-handed frame: three mutually perpendicular axes through ${I('O')}, their negative halves dashed, and the ${I('XY')}-, ${I('YZ')}- and ${I('ZX')}-planes cutting space into eight octants.`;
const O111: P = [168, 172], U111 = 40;
const OCT: [string, V][] = [
  ['I', [1, 1, 1]], ['II', [-1, 1, 1]], ['III', [-1, -1, 1]], ['IV', [1, -1, 1]],
  ['V', [1, 1, -1]], ['VI', [-1, 1, -1]], ['VII', [-1, -1, -1]], ['VIII', [1, -1, -1]],
];
const OCT_AT: V = [2, 2.6, 2.8];
const octPoint = (sg: V): V => [sg[0] * OCT_AT[0], sg[1] * OCT_AT[1], sg[2] * OCT_AT[2]];
const fig111: Diagram = {
  id: 'm11-11-fig-11.1',
  topic: 0,
  name: 'The right-handed frame and the eight octants',
  cases: [{ chip: 'Octants', cap: CAP111 }],
  draw() {
    const s = new Sketch(W, 344), o = O111, u = U111, P3 = (v: V) => pj(o, u, v);
    const ends: [V, V, string, string, P, P][] = [
      [[5, 0, 0], [-5, 0, 0], 'X', 'X′', [-16, 8], [6, -9]],
      [[0, 3.4, 0], [0, -3.4, 0], 'Y', 'Y′', [10, 5], [-10, 5]],
      [[0, 0, 3.6], [0, 0, -3.6], 'Z', 'Z′', [0, -9], [0, 19]],
    ];
    const k = 1.2;
    const panels: [V[], string][] = [
      [[[0, 0, 0], [k, 0, 0], [k, k, 0], [0, k, 0], [0, 0, 0]], 'XY panel'],
      [[[0, 0, 0], [0, k, 0], [0, k, k], [0, 0, k], [0, 0, 0]], 'YZ panel'],
      [[[0, 0, 0], [0, 0, k], [k, 0, k], [k, 0, 0], [0, 0, 0]], 'ZX panel'],
    ];
    panels.forEach(([ps, n]) => path(s, ps.map(P3), { color: C.mari, w: 1.6, name: n }));
    ends.forEach(([pos, neg, nP, nN, dP, dN], i) => {
      path(s, [o, P3(neg)], { color: C.slate, w: 1.3, dash: '5 4', name: `axis ${nN}` });
      arr(s, o, P3(pos), { w: 1.5, head: 8, name: `axis ${nP}` });
      const e = P3(pos), f = P3(neg);
      lab(s, e[0] + dP[0], e[1] + dP[1], I(nP), { size: 16, anchor: i === 1 ? 'start' : 'middle' });
      lab(s, f[0] + dN[0], f[1] + dN[1], I(nN), { size: 16, anchor: i === 1 ? 'end' : 'middle', color: C.slate });
    });
    pt(s, o, 'O');
    lab(s, o[0] + 6, o[1] + 34, I('O'), { size: 15, anchor: 'start' });
    lab(s, o[0] + 40, o[1] + 36, `${I('XY')}-plane`, { size: 12.5, anchor: 'start', color: C.amber });
    lab(s, o[0] + 55, o[1] - 13, `${I('YZ')}-plane`, { size: 12.5, anchor: 'start', color: C.amber });
    lab(s, o[0] - 32, o[1] - 18, `${I('ZX')}-plane`, { size: 12.5, anchor: 'end', color: C.amber });
    OCT.forEach(([n, sg]) => {
      const p = P3(octPoint(sg));
      pt(s, p, n);
      const left = sg[0] < 0;
      lab(s, p[0] + (left ? -10 : 10), p[1] + 5, n, { size: 13, anchor: left ? 'end' : 'start' });
    });
    return s;
  },
  check() {
    const s = fig111.draw(fig111.cases[0]), out: Check[] = [];
    // right-handed: i × j = k
    const cr = (a: V, b: V): V => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    out.push(['The frame is right-handed: i × j = k', close(dot3(cr([1, 0, 0], [0, 1, 0]), [0, 0, 1]), 1)]);
    const signs = ['+++', '−++', '−−+', '+−+', '++−', '−+−', '−−−', '+−−'];
    const ok = OCT.every(([n, sg], i) => sg.map((v) => (v > 0 ? '+' : '−')).join('') === signs[i] && dotIs(s, n, pj(O111, U111, octPoint(sg))));
    out.push([`Octants I–VIII carry the signs of x, y, z: ${signs.join(', ')}; each dot stands at (±2, ±2.6, ±2.8) in its own octant`, ok]);
    out.push(labelsCheck(s, ['X', 'X′', 'Y', 'Y′', 'Z', 'Z′', 'O', 'XY-plane', 'YZ-plane', 'ZX-plane', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']));
    out.push(noBadChars(s, fig111));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 11.2 · dropping perpendiculars from P(x, y, z) (p. 1014)        */
/* ===================================================================== */
const CAP112 = `Dropping perpendiculars from ${I('P')}(${X}, ${Y}, ${Z}): the foot ${I('M')}(${X}, ${Y}, 0) on the ${I('XY')}-plane loses ${Z}, and the further foot ${I('L')}(${X}, 0, 0) on the ${X}-axis loses ${Y} as well.`;
const O112: P = [140, 200], U112 = 38;
const P112: V = [2.2, 3.4, 3];
const fig112: Diagram = {
  id: 'm11-11-fig-11.2',
  topic: 0,
  name: 'Dropping perpendiculars from P(x, y, z)',
  cases: [{ chip: 'Two drops', cap: CAP112 }],
  draw() {
    const s = new Sketch(W, 300), o = O112, u = U112, P3 = (v: V) => pj(o, u, v);
    const Pv = P112, Mv: V = [Pv[0], Pv[1], 0], Lv: V = [Pv[0], 0, 0];
    path(s, ([[0, 0, 0], [3.9, 0, 0], [3.9, 4.6, 0], [0, 4.6, 0], [0, 0, 0]] as V[]).map(P3), { color: C.slate, w: 1, name: 'XY-plane' });
    arr(s, o, P3([4.7, 0, 0]), { w: 1.5, head: 8, name: 'axis x' });
    arr(s, o, P3([0, 4.9, 0]), { w: 1.5, head: 8, name: 'axis y' });
    arr(s, o, P3([0, 0, 4.4]), { w: 1.5, head: 8, name: 'axis z' });
    const p = P3(Pv), m = P3(Mv), l = P3(Lv);
    path(s, [p, m], { color: C.mari, w: 2, dash: '6 4', name: 'drop z' });
    path(s, [m, l], { color: C.mari, w: 2, dash: '6 4', name: 'then drop y' });
    rightMark3(s, o, u, Mv, [0, 0, 1], [0, -1, 0], 0.22);
    rightMark3(s, o, u, Lv, [0, 1, 0], [-1, 0, 0], 0.34);
    pt(s, o, 'O');
    pt(s, p, 'P');
    pt(s, m, 'M');
    pt(s, l, 'L');
    const xe = P3([4.7, 0, 0]), ye = P3([0, 4.9, 0]), ze = P3([0, 0, 4.4]);
    lab(s, xe[0] - 6, xe[1] + 18, X, { size: 16 });
    lab(s, ye[0] - 2, ye[1] - 10, Y, { size: 16 });
    lab(s, ze[0] + 10, ze[1] + 6, Z, { size: 16, anchor: 'start' });
    lab(s, o[0] - 9, o[1] - 6, I('O'), { size: 15, anchor: 'end' });
    lab(s, p[0], p[1] - 12, `${I('P')}(${X}, ${Y}, ${Z})`, { size: 14 });
    lab(s, m[0], o[1] + 72, `${I('M')}(${X}, ${Y}, 0)`, { size: 14 });
    lab(s, l[0] + 10, o[1] + 72, `${I('L')}(${X}, 0, 0)`, { size: 14 });
    lab(s, p[0] + 10, (p[1] + m[1]) / 2 + 4, `drop ${Z}`, { size: 13.5, anchor: 'start', color: C.amber });
    lab(s, (m[0] + l[0]) / 2 + 10, m[1] - 8, `then drop ${Y}`, { size: 13.5, color: C.amber });
    lab(s, P3([3.9, 4.6, 0])[0] + 30, P3([3.9, 4.6, 0])[1] + 5, `${I('XY')}-plane`, { size: 13, anchor: 'start', color: C.slate });
    return s;
  },
  check() {
    const s = fig112.draw(fig112.cases[0]), out: Check[] = [], P3 = (v: V) => pj(O112, U112, v);
    const Pv = P112, Mv: V = [Pv[0], Pv[1], 0], Lv: V = [Pv[0], 0, 0];
    out.push(['M is the foot on the XY-plane: PM is along the z-axis and M has z = 0', close(dot3(sub3(Pv, Mv), [1, 0, 0]), 0) && close(dot3(sub3(Pv, Mv), [0, 1, 0]), 0) && Mv[2] === 0]);
    out.push(['L is the foot of M on the x-axis: ML is along the y-axis, at right angles to the x-axis, and L = (x, 0, 0)', close(dot3(sub3(Mv, Lv), [1, 0, 0]), 0) && close(dot3(sub3(Mv, Lv), [0, 0, 1]), 0)]);
    out.push(['P, M, L and O stand where the frame puts them', dotIs(s, 'P', P3(Pv)) && dotIs(s, 'M', P3(Mv)) && dotIs(s, 'L', P3(Lv)) && dotIs(s, 'O', O112)]);
    out.push(labelsCheck(s, ['x', 'y', 'z', 'O', 'P(x, y, z)', 'M(x, y, 0)', 'L(x, 0, 0)', 'drop z', 'then drop y', 'XY-plane']));
    out.push(noBadChars(s, fig112));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 11.3 · |x| = |z| seen down the y-axis (p. 1017)                 */
/* ===================================================================== */
const CAP113 = `Looking down the ${Y}-axis, the locus |${X}|${NB}=${NB}|${Z}| appears as the two lines ${Z} = ${X} and ${Z} = −${X}, which are the bisecting planes seen edge-on.`;
const G113 = { ox: 170, oy: 168, u: 45 };
const fig113: Diagram = {
  id: 'm11-11-fig-11.3',
  topic: 0,
  name: 'The two bisecting planes seen down the y-axis',
  cases: [{ chip: 'Seen end-on', cap: CAP113 }],
  draw() {
    const s = new Sketch(W, 336), g = G113, gp = (x: number, z: number): P => [g.ox + x * g.u, g.oy - z * g.u];
    arr(s, gp(-3.3, 0), gp(3.45, 0), { w: 1.4, head: 8, name: 'axis x' });
    arr(s, gp(0, -3.3), gp(0, 3.45), { w: 1.4, head: 8, name: 'axis z' });
    for (const v of [-3, -2, -1, 1, 2, 3]) {
      path(s, [gp(v, 0), [gp(v, 0)[0], g.oy + 5]], { w: 1.1, name: 'tick' });
      path(s, [gp(0, v), [g.ox - 5, gp(0, v)[1]]], { w: 1.1, name: 'tick' });
      lab(s, gp(v, 0)[0] + (v < 0 ? -4 : 4), g.oy + 20, v < 0 ? `−${-v}` : `${v}`, { size: 13, color: C.slate });
      lab(s, g.ox - 9, gp(0, v)[1] + 5, v < 0 ? `−${-v}` : `${v}`, { size: 13, anchor: 'end', color: C.slate });
    }
    path(s, [gp(-3.2, -3.2), gp(3.2, 3.2)], { w: 2.2, name: 'z = x' });
    path(s, [gp(-3.2, 3.2), gp(3.2, -3.2)], { color: C.mari, w: 2.2, name: 'z = −x' });
    const o = gp(0, 0);
    s.add(`<circle cx="${o[0]}" cy="${o[1]}" r="7" fill="#fff" stroke="${C.ink}" stroke-width="1.6"/>`);
    keep(s, Array.from({ length: 25 }, (_, i): P => [o[0] + 8 * Math.cos((2 * Math.PI * i) / 24), o[1] + 8 * Math.sin((2 * Math.PI * i) / 24)]), 'ring');
    DOTS.set(s, [...(DOTS.get(s) ?? []), { p: o, name: 'O' }]);
    lab(s, gp(3.45, 0)[0] + 2, g.oy - 9, X, { size: 16, anchor: 'end' });
    lab(s, g.ox + 10, gp(0, 3.45)[1] + 8, Z, { size: 16, anchor: 'start' });
    lab(s, gp(1.6, 0)[0], gp(0, 3.1)[1] + 4, `${Z} = ${X}`, { size: 15 });
    lab(s, gp(-1.6, 0)[0], gp(0, 3.1)[1] + 4, `${Z} = −${X}`, { size: 15, color: C.amber });
    lab(s, gp(2.3, 0)[0], gp(0, 0.95)[1], `${I('O')}: the ${Y}-axis,`, { size: 13 });
    const c2 = lab(s, gp(2.3, 0)[0], gp(0, 0.95)[1] + 16, 'seen end-on', { size: 13 });
    path(s, [[c2[0] - 6, c2[1] + 6], [o[0] + 9, o[1] - 4]], { color: C.slate, w: 1, name: 'callout' });
    return s;
  },
  check() {
    const s = fig113.draw(fig113.cases[0]), out: Check[] = [];
    const pts = [-3, -1.5, 0, 2, 3.2].flatMap((x) => [[x, x], [x, -x]] as P[]);
    out.push(['Every point of z = x and z = −x has |x| = |z|, and the two lines cross at right angles at O (slopes 1 and −1)', pts.every(([x, z]) => close(Math.abs(x), Math.abs(z))) && close(1 * -1, -1)]);
    out.push(['The y-axis, seen end-on, is the single point O, drawn as a plain ring', dotIs(s, 'O', [G113.ox, G113.oy])]);
    out.push(labelsCheck(s, ['x', 'z', 'z = x', 'z = −x', 'O: the y-axis,', 'seen end-on', '−3', '−2', '−1', '1', '2', '3']));
    out.push(noBadChars(s, fig113));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 11.4 · the distance formula as a space diagonal (p. 1021)       */
/* ===================================================================== */
const CAP114 = `The distance formula as a space diagonal: ${I('PQ')} closes the right triangle whose legs are the horizontal base diagonal and the vertical rise.`;
const O114: P = [120, 158], U114 = 38;
const BOX114: V = [3, 4.6, 3];
const fig114: Diagram = {
  id: 'm11-11-fig-11.4',
  topic: 1,
  name: 'The distance formula as a space diagonal',
  cases: [{ chip: 'Space diagonal', cap: CAP114 }],
  draw() {
    const s = new Sketch(W, 236), P3 = (v: V) => pj(O114, U114, v), [a, b, c] = BOX114;
    const Pv: V = [a, 0, 0], Qv: V = [0, b, c], Rv: V = [0, b, 0];
    const corners: V[] = [[0, 0, 0], [a, 0, 0], [a, b, 0], [0, b, 0], [0, 0, c], [a, 0, c], [a, b, c], [0, b, c]];
    const edges: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
    // the three edges at the far corner (0, 0, 0) are hidden behind the box: dashed
    edges.forEach(([i, j]) => path(s, [P3(corners[i]), P3(corners[j])], i === 0 || j === 0 ? { color: C.slate, w: 1, dash: '4 3', name: 'box edge (hidden)' } : { color: C.slate, w: 1, name: 'box edge' }));
    const p = P3(Pv), q = P3(Qv), r = P3(Rv);
    path(s, [p, r], { w: 2.4, name: 'base diagonal' });
    path(s, [r, q], { w: 2.4, name: 'vertical rise' });
    rightMark3(s, O114, U114, Rv, sub3(Pv, Rv), sub3(Qv, Rv), 0.3);
    path(s, [p, q], { color: C.mari, w: 3, name: 'PQ' });
    pt(s, p, 'P');
    pt(s, q, 'Q');
    lab(s, q[0] + 30, q[1] - 15, `${I('Q')}(${I('x')}<sub>2</sub>, ${I('y')}<sub>2</sub>, ${I('z')}<sub>2</sub>)`, { size: 14, anchor: 'end' });
    lab(s, p[0] + 8, p[1] + 22, `${I('P')}(${I('x')}<sub>1</sub>, ${I('y')}<sub>1</sub>, ${I('z')}<sub>1</sub>)`, { size: 14 });
    lab(s, 152, 108, I('PQ'), { size: 15, color: C.amber });
    lab(s, r[0] + 8, (r[1] + q[1]) / 2 + 5, `|Δ${Z}|`, { size: 14, anchor: 'start' });
    const mid: P = [(p[0] + r[0]) / 2, (p[1] + r[1]) / 2];
    const lb = lab(s, mid[0], p[1] + 22, `√((Δ${X})<sup>2</sup> + (Δ${Y})<sup>2</sup>)`, { size: 14 });
    leadTo(s, [mid[0], mid[1] + 3], lb, C.slate, 'leader to the base diagonal');
    return s;
  },
  check() {
    const s = fig114.draw(fig114.cases[0]), out: Check[] = [], P3 = (v: V) => pj(O114, U114, v), [a, b, c] = BOX114;
    const Pv: V = [a, 0, 0], Qv: V = [0, b, c], Rv: V = [0, b, 0];
    out.push(['The base diagonal PR is horizontal and the rise RQ vertical, so the angle at R is 90°', close(dot3(sub3(Pv, Rv), sub3(Qv, Rv)), 0) && Pv[2] === Rv[2]]);
    const base = Math.hypot(a, b), pq = dist3(Pv, Qv);
    out.push([`PQ² = PR² + RQ²: ${fmt(pq * pq)} = ${fmt(base * base)} + ${fmt(c * c)}, i.e. PQ = √((Δx)² + (Δy)² + (Δz)²)`, close(pq * pq, base * base + c * c) && close(pq, Math.sqrt(a * a + b * b + c * c))]);
    out.push(['P and Q are opposite corners of the box, where the frame puts them', dotIs(s, 'P', P3(Pv)) && dotIs(s, 'Q', P3(Qv))]);
    out.push(labelsCheck(s, ['Q(x2, y2, z2)', 'P(x1, y1, z1)', 'PQ', '|Δz|', '√((Δx)2 + (Δy)2)']));
    out.push(noBadChars(s, fig114));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 11.5 · the plane x − 2z = 0 bisecting AB (p. 1026)              */
/* ===================================================================== */
const CAP115 = `The plane ${X} − 2${Z} = 0 cuts ${I('AB')} at right angles through its midpoint ${I('M')}(2, 2, 1), so every point of the plane is equidistant from ${I('A')} and ${I('B')}.`;
const K115 = { o: [182, 150] as P, u: 38, A: [1, 2, 3] as V, B: [3, 2, -1] as V, M: [2, 2, 1] as V, T: [2.8, 0.4, 1.4] as V };
const W115: V = unit3([2, 0, 1]);
/** Where the segment from m to a (m inside the polygon) leaves the polygon on the page. */
function behindUntil(m: P, a: P, poly: P[]): P {
  let best = 1;
  for (let i = 0; i < poly.length - 1; i++) {
    const [p, q] = [poly[i], poly[i + 1]], r: P = [a[0] - m[0], a[1] - m[1]], e: P = [q[0] - p[0], q[1] - p[1]];
    const den = r[0] * e[1] - r[1] * e[0];
    if (Math.abs(den) < 1e-9) continue;
    const t = ((p[0] - m[0]) * e[1] - (p[1] - m[1]) * e[0]) / den, u = ((p[0] - m[0]) * r[1] - (p[1] - m[1]) * r[0]) / den;
    if (t > 1e-6 && t < best && u >= 0 && u <= 1) best = t;
  }
  return [m[0] + (a[0] - m[0]) * best, m[1] + (a[1] - m[1]) * best];
}
/** A point of the plane x − 2z = 0: M + s along y + t along (2, 0, 1)/√5. */
const onPlane = (sv: number, t: number): V => add3(add3(K115.M, [0, sv, 0]), mul3(W115, t));
const fig115: Diagram = {
  id: 'm11-11-fig-11.5',
  topic: 1,
  name: `The perpendicular bisector plane x${NB}−${WJ}${NB}2z${NB}=${NB}0`,
  cases: [{ chip: 'Bisector plane', cap: CAP115 }],
  draw() {
    const s = new Sketch(W, 322), k = K115, o = pj(k.o, k.u, mul3(k.M, -1)), P3 = (v: V) => pj(o, k.u, v);
    const quad = [onPlane(-2.3, -4.5), onPlane(1.8, -4.5), onPlane(1.8, 4.5), onPlane(-2.3, 4.5), onPlane(-2.3, -4.5)].map(P3);
    path(s, quad, { w: 1.6, name: 'plane' });
    const a = P3(k.A), b = P3(k.B), m = P3(k.M), t = P3(k.T);
    // A (x − 2z < 0) is on the far side of the plane: AB runs dashed from M to where it comes out past the plane's edge
    const out = behindUntil(m, a, quad);
    path(s, [b, m], { w: 2.4, name: 'AB' });
    path(s, [m, out], { w: 1.8, dash: '5 4', name: 'AB (behind the plane)' });
    path(s, [out, a], { w: 2.4, name: 'AB' });
    rightMark3(s, o, k.u, k.M, sub3(k.A, k.M), [0, 1, 0], 0.32);
    path(s, [t, a], { color: C.mari, w: 1.8, dash: '6 4', name: 'TA' });
    path(s, [t, b], { color: C.mari, w: 1.8, dash: '6 4', name: 'TB' });
    pt(s, a, 'A');
    pt(s, b, 'B');
    pt(s, m, 'M');
    pt(s, t, 'T', C.mari);
    lab(s, a[0], a[1] - 12, `${I('A')}(1, 2, 3)`, { size: 14 });
    lab(s, b[0], b[1] + 22, `${I('B')}(3, 2, −1)`, { size: 14 });
    const lm = lab(s, m[0] + 4, m[1] + 52, `${I('M')}(2, 2, 1)`, { size: 13.5, anchor: 'start' });
    leadTo(s, [m[0] + 4, m[1] + 5], lm, C.slate, 'leader to M');
    const lt = lab(s, t[0] - 40, t[1] - 40, I('T'), { size: 15, color: C.amber });
    leadTo(s, [t[0] - 4, t[1] - 4], lt, C.mari, 'leader to T');
    lab(s, 14, 52, `${I('TA')} = ${I('TB')}`, { size: 15, anchor: 'start', color: C.amber });
    lab(s, 334, P3(onPlane(1.8, -4.5))[1] + 22, `${X} − 2${Z} = 0`, { size: 14, anchor: 'end' });
    // the frame's own small axes, as the book draws them
    const f: P = [36, 292], fu = 26;
    arr(s, f, pj(f, fu, [1.3, 0, 0]), { color: C.slate, w: 1.2, head: 6, name: 'small x' });
    arr(s, f, pj(f, fu, [0, 1, 0]), { color: C.slate, w: 1.2, head: 6, name: 'small y' });
    arr(s, f, pj(f, fu, [0, 0, 1]), { color: C.slate, w: 1.2, head: 6, name: 'small z' });
    const fx = pj(f, fu, [1.3, 0, 0]), fy = pj(f, fu, [0, 1, 0]), fz = pj(f, fu, [0, 0, 1]);
    lab(s, fx[0] - 6, fx[1] + 4, X, { size: 13, anchor: 'end', color: C.slate });
    lab(s, fy[0] + 6, fy[1] + 4, Y, { size: 13, anchor: 'start', color: C.slate });
    lab(s, fz[0] + 7, fz[1] + 5, Z, { size: 13, anchor: 'start', color: C.slate });
    return s;
  },
  check() {
    const s = fig115.draw(fig115.cases[0]), out: Check[] = [], k = K115, pl = (v: V) => v[0] - 2 * v[2];
    out.push(['M(2, 2, 1) is the midpoint of A(1, 2, 3) and B(3, 2, −1), and lies on x − 2z = 0', close(dist3(mul3(add3(k.A, k.B), 0.5), k.M), 0) && close(pl(k.M), 0)]);
    out.push(['AB = (2, 0, −4) is parallel to the normal (1, 0, −2): AB meets the plane at right angles', close(dist3(sub3(k.B, k.A), mul3([1, 0, -2], 2)), 0)]);
    const corners = [onPlane(-2.3, -4.5), onPlane(1.8, 4.5)];
    out.push([`T(2.8, 0.4, 1.4) and the drawn plane's corners satisfy x − 2z = 0; TA = TB = ${fmt(dist3(k.T, k.A))}`, [k.T, ...corners].every((v) => close(pl(v), 0)) && close(dist3(k.T, k.A), dist3(k.T, k.B))]);
    out.push(labelsCheck(s, ['A(1, 2, 3)', 'B(3, 2, −1)', 'M(2, 2, 1)', 'T', 'TA = TB', 'x − 2z = 0', 'x', 'y', 'z']));
    out.push(noBadChars(s, fig115));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 11.6 · the prolate spheroid PA + PB = 12 (p. 1034)              */
/* ===================================================================== */
const CAP116 = `Points whose distances from ${I('A')}(5, 0, 0) and ${I('B')}(−5, 0, 0) sum to 12 form a prolate spheroid with semi-axes 6 and √11.`;
const K116 = { o: [170, 134] as P, u: 22, a: 6, b: Math.sqrt(11), P: [3, Math.sqrt(33) / 2, 0] as V };
const fig116: Diagram = {
  id: 'm11-11-fig-11.6',
  topic: 2,
  name: 'The prolate spheroid PA + PB = 12',
  cases: [{ chip: 'Spheroid', cap: CAP116 }],
  draw() {
    const s = new Sketch(W, 258), k = K116, o = k.o, u = k.u, P3 = (v: V) => pj(o, u, v), a2 = k.a * k.a, b2 = k.b * k.b;
    // the outline: the image of the ellipsoid under the projection, an ellipse (Cholesky of Π D Πᵀ)
    const m11 = XS[0] * XS[0] * a2 + b2, m12 = XS[0] * XS[1] * a2, m22 = XS[1] * XS[1] * a2 + b2;
    const l11 = Math.sqrt(m11), l21 = m12 / l11, l22 = Math.sqrt(m22 - l21 * l21);
    path(s, Array.from({ length: 145 }, (_, i): P => { const t = (i / 144) * 2 * Math.PI; return [o[0] + u * l11 * Math.cos(t), o[1] + u * (l21 * Math.cos(t) + l22 * Math.sin(t))]; }), { color: C.slate, w: 1.4, name: 'outline' });
    // the equator (the section by the XY-plane): the near half solid, the far half (behind) dashed
    const d: V = [1, -XS[0], XS[1]];
    const eq = (t: number): V => [k.a * Math.cos(t), k.b * Math.sin(t), 0];
    const seen = (t: number) => { const v = eq(t); return v[0] / a2 + (v[1] / b2) * d[1] > 0; };
    let run: P[] = [], vis = seen(0);
    for (let i = 0; i <= 180; i++) {
      const t = (i / 180) * 2 * Math.PI, sv = seen(t);
      if (sv !== vis && run.length) { path(s, run, vis ? { w: 1.5, name: 'equator' } : { w: 1.1, dash: '4 3', name: 'equator (hidden)' }); run = [run[run.length - 1]]; vis = sv; }
      run.push(P3(eq(t)));
    }
    path(s, run, vis ? { w: 1.5, name: 'equator' } : { w: 1.1, dash: '4 3', name: 'equator (hidden)' });
    path(s, [P3([-6, 0, 0]), o], { color: C.slate, w: 1.1, name: 'axis −x' });
    arr(s, o, P3([8.8, 0, 0]), { w: 1.5, head: 8, name: 'axis x' });
    arr(s, o, P3([0, 5.6, 0]), { w: 1.5, head: 8, name: 'axis y' });
    arr(s, o, P3([0, 0, 5.4]), { w: 1.5, head: 8, name: 'axis z' });
    const A = P3([5, 0, 0]), B = P3([-5, 0, 0]), p = P3(k.P), v6 = P3([6, 0, 0]), vm6 = P3([-6, 0, 0]), vy = P3([0, k.b, 0]);
    path(s, [p, A], { color: C.mari, w: 2.4, name: 'PA' });
    path(s, [p, B], { color: C.mari, w: 2.4, name: 'PB' });
    pt(s, A, 'A');
    pt(s, B, 'B');
    pt(s, v6, '(6, 0, 0)');
    pt(s, vm6, '(−6, 0, 0)');
    pt(s, vy, '(0, √11, 0)');
    pt(s, p, 'P', C.mari);
    const xe = P3([8.8, 0, 0]), ye = P3([0, 5.6, 0]), ze = P3([0, 0, 5.4]);
    lab(s, xe[0] - 6, xe[1] - 2, X, { size: 16, anchor: 'end' });
    lab(s, ye[0] - 2, ye[1] - 10, Y, { size: 16 });
    lab(s, ze[0] + 9, ze[1] + 6, Z, { size: 16, anchor: 'start' });
    const l6 = lab(s, 62, 158, '(6, 0, 0)', { size: 13, anchor: 'end' });
    leadTo(s, [v6[0] - 4, v6[1] - 3], l6);
    const lA = lab(s, 80, 244, `${I('A')}(5, 0, 0)`, { size: 13, anchor: 'start' });
    leadTo(s, [A[0] - 1, A[1] + 5], lA);
    const lB = lab(s, 176, B[1] - 24, `${I('B')}(−5, 0, 0)`, { size: 12.5, anchor: 'start' });
    leadTo(s, [B[0] - 1, B[1] - 5], lB);
    const lm6 = lab(s, 264, 58, '(−6, 0, 0)', { size: 13, anchor: 'start' });
    leadTo(s, [vm6[0] + 5, vm6[1] - 3], lm6);
    const ly = lab(s, 266, 166, '(0, √11, 0)', { size: 13, anchor: 'start' });
    leadTo(s, [vy[0] + 4, vy[1] + 4], ly);
    lab(s, p[0] + 6, p[1] + 20, I('P'), { size: 15, anchor: 'start', color: C.amber });
    lab(s, (p[0] + A[0]) / 2, (p[1] + A[1]) / 2 + 31, `${I('PA')} = 3.5`, { size: 13.5, color: C.amber });
    // PB's label stands clear of the B and (−6, 0, 0) labels, its leader short and starting high on PB
    const lpb = lab(s, 278, 98, `${I('PB')} = 8.5`, { size: 13.5, anchor: 'start', color: C.amber });
    leadTo(s, [p[0] + (B[0] - p[0]) * 0.78 + 4, p[1] + (B[1] - p[1]) * 0.78 + 1], lpb);
    return s;
  },
  check() {
    const s = fig116.draw(fig116.cases[0]), out: Check[] = [], k = K116, A: V = [5, 0, 0], B: V = [-5, 0, 0];
    const on = (v: V) => (v[0] * v[0]) / 36 + (v[1] * v[1] + v[2] * v[2]) / 11;
    out.push([`P(3, √33/2, 0) lies on 11x² + 36y² + 36z² = 396: PA = ${fmt(dist3(k.P, A))}, PB = ${fmt(dist3(k.P, B))}, sum ${fmt(dist3(k.P, A) + dist3(k.P, B))} = 12`, close(on(k.P), 1) && close(dist3(k.P, A), 3.5) && close(dist3(k.P, B), 8.5)]);
    out.push(['Semi-axes 6 and √11: the foci (±5, 0, 0) satisfy 6² − (√11)² = 5², and (±6, 0, 0), (0, √11, 0) lie on the surface', close(36 - 11, 25) && close(on([6, 0, 0]), 1) && close(on([0, k.b, 0]), 1)]);
    out.push(['The dots stand where the frame puts them', dotIs(s, 'P', pj(k.o, k.u, k.P)) && dotIs(s, 'A', pj(k.o, k.u, A)) && dotIs(s, 'B', pj(k.o, k.u, B))]);
    out.push(labelsCheck(s, ['x', 'y', 'z', 'A(5, 0, 0)', '(6, 0, 0)', 'B(−5, 0, 0)', '(−6, 0, 0)', '(0, √11, 0)', 'P', 'PA = 3.5', 'PB = 8.5']));
    out.push(noBadChars(s, fig116));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 11.7 · distance from the z-axis (p. 1039)                       */
/* ===================================================================== */
const CAP117 = `Distance from a coordinate axis: the foot of the perpendicular from ${I('P')}(${X}, ${Y}, ${Z}) to the ${Z}-axis is ${I('N')}(0, 0, ${Z}), and the rectangle ${I('ONPM')} makes ${I('PN')} equal to the square root of ${X} squared plus ${Y} squared, so ${Z} cancels.`;
const O117: P = [110, 196], U117 = 40;
const P117: V = [2, 3.2, 3];
const fig117: Diagram = {
  id: 'm11-11-fig-11.7',
  topic: 3,
  name: 'Distance from the z-axis',
  cases: [{ chip: 'Rectangle ONPM', cap: CAP117 }],
  draw() {
    const s = new Sketch(W, 284), o = O117, u = U117, P3 = (v: V) => pj(o, u, v);
    const Pv = P117, Nv: V = [0, 0, Pv[2]], Mv: V = [Pv[0], Pv[1], 0];
    path(s, ([[0, 0, 0], [4, 0, 0], [4, 4.2, 0], [0, 4.2, 0], [0, 0, 0]] as V[]).map(P3), { color: C.slate, w: 1, name: 'XY-plane' });
    arr(s, o, P3([4.6, 0, 0]), { w: 1.5, head: 8, name: 'axis x' });
    arr(s, o, P3([0, 5.3, 0]), { w: 1.5, head: 8, name: 'axis y' });
    arr(s, o, P3([0, 0, 4.4]), { w: 1.5, head: 8, name: 'axis z' });
    const p = P3(Pv), n = P3(Nv), m = P3(Mv);
    path(s, [o, m], { w: 2, name: 'OM' });
    path(s, [p, m], { w: 1.6, dash: '5 4', name: 'PM' });
    path(s, [n, p], { color: C.mari, w: 2.6, name: 'PN' });
    rightMark3(s, o, u, Nv, [0, 0, -1], sub3(Pv, Nv), 0.3);
    pt(s, o, 'O');
    pt(s, n, 'N');
    pt(s, p, 'P');
    pt(s, m, 'M');
    const xe = P3([4.6, 0, 0]), ye = P3([0, 5.3, 0]), ze = P3([0, 0, 4.4]);
    lab(s, xe[0] + 4, xe[1] + 17, X, { size: 16, anchor: 'start' });
    lab(s, ye[0] - 2, ye[1] - 10, Y, { size: 16 });
    lab(s, ze[0] + 10, ze[1] + 6, Z, { size: 16, anchor: 'start' });
    lab(s, o[0] - 9, o[1] - 6, I('O'), { size: 15, anchor: 'end' });
    lab(s, n[0] - 9, n[1] + 5, `${I('N')}(0, 0, ${Z})`, { size: 14, anchor: 'end' });
    lab(s, p[0] + 8, p[1] - 8, `${I('P')}(${X}, ${Y}, ${Z})`, { size: 14, anchor: 'start' });
    const lm = lab(s, 254, m[1] + 6, `${I('M')}(${X}, ${Y}, 0)`, { size: 13.5, anchor: 'start' });
    leadTo(s, [m[0] + 5, m[1]], lm);
    lab(s, (n[0] + p[0]) / 2 + 22, n[1] - 10, `${I('PN')} = √(${sq(X)} + ${sq(Y)})`, { size: 14, color: C.amber });
    lab(s, (o[0] + m[0]) / 2 - 12, o[1] + 47, `${I('OM')} = √(${sq(X)} + ${sq(Y)})`, { size: 14 });
    lab(s, P3([4, 4.2, 0])[0] + 10, P3([4, 4.2, 0])[1] + 20, `${I('XY')}-plane`, { size: 13, anchor: 'start', color: C.slate });
    return s;
  },
  check() {
    const s = fig117.draw(fig117.cases[0]), out: Check[] = [], P3 = (v: V) => pj(O117, U117, v);
    const Pv = P117, Nv: V = [0, 0, Pv[2]], Mv: V = [Pv[0], Pv[1], 0], Ov: V = [0, 0, 0];
    out.push(['N(0, 0, z) is the foot of the perpendicular from P to the z-axis: NP · (0, 0, 1) = 0', close(dot3(sub3(Pv, Nv), [0, 0, 1]), 0)]);
    out.push(['ONPM is a rectangle: NP = OM as vectors and ON ⟂ OM', close(dist3(sub3(Pv, Nv), sub3(Mv, Ov)), 0) && close(dot3(Nv, Mv), 0)]);
    out.push([`PN = OM = √(x² + y²) = ${fmt(dist3(Pv, Nv))}, whatever z is`, close(dist3(Pv, Nv), Math.hypot(Pv[0], Pv[1])) && close(dist3(Mv, Ov), Math.hypot(Pv[0], Pv[1]))]);
    out.push(['The dots stand where the frame puts them', dotIs(s, 'P', P3(Pv)) && dotIs(s, 'N', P3(Nv)) && dotIs(s, 'M', P3(Mv))]);
    out.push(labelsCheck(s, ['x', 'y', 'z', 'O', 'N(0, 0, z)', 'P(x, y, z)', 'M(x, y, 0)', 'PN = √(x2 + y2)', 'OM = √(x2 + y2)', 'XY-plane']));
    out.push(noBadChars(s, fig117));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 11.8 · the ratio 2 ∶ 3, internal and external (p. 1041)          */
/* ===================================================================== */
const CAP118 = `The ratio 2 ∶ 3 realised twice on the line through ${I('P')} and ${I('Q')}: the internal point falls between them, while the external point falls beyond ${I('P')} because ${I('m')} is less than ${I('n')}.`;
const K118 = { P: [-2, 3, 5] as V, Q: [1, -4, 6] as V, x0: 220, unit: 98, y: 150 };
const fig118: Diagram = {
  id: 'm11-11-fig-11.8',
  topic: 4,
  name: 'The ratio 2 ∶ 3, internal and external',
  cases: [{ chip: 'Internal and external', cap: CAP118 }],
  draw() {
    const s = new Sketch(W, 276), k = K118, at = (t: number) => k.x0 + k.unit * t, y = k.y;
    const [xe, xp, xi, xq] = [-2, 0, 0.4, 1].map(at);
    path(s, [[8, y], [334, y]], { color: C.slate, w: 0.9, name: 'line PQ' });
    path(s, [[xe, y], [xp, y]], { w: 1.8, dash: '6 4', name: 'extension' });
    path(s, [[xp, y], [xq, y]], { w: 3, name: 'PQ' });
    pt(s, [xe, y], 'Rext', C.mari);
    pt(s, [xp, y], 'P');
    pt(s, [xi, y], 'Rint');
    pt(s, [xq, y], 'Q');
    lab(s, xe, y - 14, `${I('R')}<sub>ext</sub>`, { size: 15, color: C.amber });
    lab(s, xp, y - 14, I('P'), { size: 15 });
    lab(s, xi, y - 14, `${I('R')}<sub>int</sub>`, { size: 15 });
    lab(s, xq, y - 14, I('Q'), { size: 15 });
    lab(s, 8, y + 21, '(−8, 17, 3)', { size: 12.5, anchor: 'start' });
    lab(s, xp, y + 21, '(−2, 3, 5)', { size: 12.5 });
    lab(s, 334, y + 21, '(1, −4, 6)', { size: 12.5, anchor: 'end' });
    runs(s, xi, y + 48, [{ t: '(−' }, { num: '4', den: '5' }, { t: ', ' }, { num: '1', den: '5' }, { t: ', ' }, { num: '27', den: '5' }, { t: ')' }], { size: 12.5, anchor: 'middle' });
    // the internal brackets, under the line
    const yb = 228;
    path(s, [[xp, yb - 6], [xp, yb], [xq, yb], [xq, yb - 6]], { w: 1.3, name: 'internal bracket' });
    path(s, [[xi, yb - 6], [xi, yb]], { w: 1.3, name: 'internal bracket' });
    lab(s, (xp + xi) / 2, yb + 15, '2', { size: 14 });
    lab(s, (xi + xq) / 2, yb + 15, '3', { size: 14 });
    lab(s, 334, 268, `internal: ${I('PR')}<sub>int</sub> ∶ ${I('R')}<sub>int</sub>${I('Q')} = 2 ∶ 3`, { size: 13, anchor: 'end' });
    // the external brackets, over the line
    path(s, [[xe, 90], [xe, 84], [xq, 84], [xq, 90]], { color: C.mari, w: 1.5, name: 'external bracket 3' });
    path(s, [[xe, 114], [xe, 108], [xp, 108], [xp, 114]], { color: C.mari, w: 1.5, name: 'external bracket 2' });
    lab(s, (xe + xq) / 2, 76, '3', { size: 14, color: C.amber });
    lab(s, (xe + xp) / 2, 100, '2', { size: 14, color: C.amber });
    lab(s, 8, 50, `external: ${I('PR')}<sub>ext</sub> ∶ ${I('R')}<sub>ext</sub>${I('Q')} = 2 ∶ 3`, { size: 13, anchor: 'start', color: C.amber });
    return s;
  },
  check() {
    const s = fig118.draw(fig118.cases[0]), out: Check[] = [], k = K118, m = 2, n = 3;
    const Ri = mul3(add3(mul3(k.Q, m), mul3(k.P, n)), 1 / (m + n)), Re = mul3(sub3(mul3(k.Q, m), mul3(k.P, n)), 1 / (m - n));
    out.push([`Internal: (2Q + 3P)/5 = (${Ri.map((v) => fmt(v)).join(', ')}) = (−4/5, 1/5, 27/5); external: (2Q − 3P)/(2 − 3) = (${Re.map((v) => fmt(v)).join(', ')}) = (−8, 17, 3)`, close(dist3(Ri, [-0.8, 0.2, 5.4]), 0) && close(dist3(Re, [-8, 17, 3]), 0)]);
    out.push([`PR_int ∶ R_intQ = ${fmt(dist3(k.P, Ri) / dist3(Ri, k.Q))} = 2/3 and PR_ext ∶ R_extQ = ${fmt(dist3(k.P, Re) / dist3(Re, k.Q))} = 2/3`, close(dist3(k.P, Ri) / dist3(Ri, k.Q), 2 / 3) && close(dist3(k.P, Re) / dist3(Re, k.Q), 2 / 3)]);
    const xs = ['Rext', 'P', 'Rint', 'Q'].map((nm) => dotAt(s, nm)![0]);
    out.push(['On the drawing the points stand at their places along the line (R_ext two steps PQ before P, R_int two fifths of the way to Q)', close((xs[2] - xs[1]) / (xs[3] - xs[1]), 0.4) && close((xs[0] - xs[1]) / (xs[3] - xs[1]), -2)]);
    out.push(stackedCheck(s, ['4/5', '1/5', '27/5']));
    out.push(labelsCheck(s, ['Rext', 'P', 'Rint', 'Q', '(−8, 17, 3)', '(−2, 3, 5)', '(1, −4, 6)', '(−4/5, 1/5, 27/5)', '2', '3', 'internal: PRint ∶ RintQ = 2 ∶ 3', 'external: PRext ∶ RextQ = 2 ∶ 3']));
    out.push(noBadChars(s, fig118));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 11.9 · the diagonals of parallelogram ABCD (p. 1044)            */
/* ===================================================================== */
const CAP119 = `Both diagonals of parallelogram ${I('ABCD')} pass through the single point ${I('M')} that bisects each of them, which is the property behind ${I('D')} = ${I('A')} + ${I('C')} − ${I('B')}.`;
const K119 = { A: [3, -1, 2] as V, B: [1, 2, -4] as V, C: [-1, 1, 2] as V, D: [1, -2, 8] as V };
/** The book draws the parallelogram flat, not in the frame: its corners on the page. */
const PG119: Record<'A' | 'B' | 'C' | 'D', P> = { D: [36, 62], C: [200, 62], A: [154, 156], B: [318, 156] };
const fig119: Diagram = {
  id: 'm11-11-fig-11.9',
  topic: 5,
  name: 'The diagonals of a parallelogram bisect each other',
  cases: [{ chip: 'Parallelogram', cap: CAP119 }],
  draw() {
    const s = new Sketch(W, 226), { A, B, C: Cc, D } = PG119, M: P = [(A[0] + Cc[0]) / 2, (A[1] + Cc[1]) / 2];
    path(s, [A, B, Cc, D, A], { w: 2.2, name: 'parallelogram' });
    path(s, [B, D], { w: 1.5, name: 'BD' });
    path(s, [A, Cc], { color: C.mari, w: 2, name: 'AC' });
    ticks(s, A, M, 1, C.mari);
    ticks(s, M, Cc, 1, C.mari);
    ticks(s, B, M, 2, C.ink);
    ticks(s, M, D, 2, C.ink);
    pt(s, A, 'A');
    pt(s, B, 'B');
    pt(s, Cc, 'C');
    pt(s, D, 'D');
    pt(s, M, 'M');
    lab(s, 8, D[1] - 12, `${I('D')}(1, −2, 8)`, { size: 14, anchor: 'start' });
    lab(s, Cc[0] - 4, Cc[1] - 12, `${I('C')}(−1, 1, 2)`, { size: 14, anchor: 'start' });
    lab(s, A[0] - 4, A[1] + 22, `${I('A')}(3, −1, 2)`, { size: 14, anchor: 'end' });
    lab(s, 336, B[1] + 22, `${I('B')}(1, 2, −4)`, { size: 14, anchor: 'end' });
    lab(s, M[0] + 13, M[1] - 5, I('M'), { size: 15, anchor: 'start' });
    lab(s, 180, 88, I('AC'), { size: 14, anchor: 'end', color: C.amber });
    lab(s, 140, 85, I('BD'), { size: 14 });
    const note = lab(s, 236, 214, 'midpoint of both diagonals', { size: 13 });
    leadTo(s, [M[0] + 3, M[1] + 5], note);
    return s;
  },
  check() {
    const s = fig119.draw(fig119.cases[0]), out: Check[] = [], { A, B, C: Cc, D } = K119;
    const mAC = mul3(add3(A, Cc), 0.5), mBD = mul3(add3(B, D), 0.5);
    out.push([`The midpoints of AC and BD are the same point M(${mAC.map((v) => fmt(v)).join(', ')})`, close(dist3(mAC, mBD), 0)]);
    out.push(['D = A + C − B: (3 − 1 − 1, −1 + 1 − 2, 2 + 2 + 4) = (1, −2, 8)', close(dist3(sub3(add3(A, Cc), B), D), 0)]);
    const pg = PG119, mm = dotAt(s, 'M')!;
    out.push(['The drawn ABCD is a parallelogram (AB = DC as vectors) and M halves both drawn diagonals', close(pg.B[0] - pg.A[0], pg.C[0] - pg.D[0]) && close(pg.B[1] - pg.A[1], pg.C[1] - pg.D[1]) && close(mm[0], (pg.B[0] + pg.D[0]) / 2) && close(mm[1], (pg.B[1] + pg.D[1]) / 2)]);
    out.push(labelsCheck(s, ['D(1, −2, 8)', 'C(−1, 1, 2)', 'A(3, −1, 2)', 'B(1, 2, −4)', 'M', 'AC', 'BD', 'midpoint of both diagonals']));
    out.push(noBadChars(s, fig119));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 11.10 · the centroid of a tetrahedron (p. 1049)                  */
/* ===================================================================== */
const CAP1110 = `A tetrahedron’s centroid ${I('G')} lies on the segment from vertex ${I('A')} to the centroid of the opposite face ${I('BCD')}, dividing it 3 ∶ 1 from the vertex.`;
const K1110 = { o: [128, 252] as P, u: 17, A: [0, 0, 0] as V, B: [4, 0, 0] as V, C: [0, 8, 0] as V, D: [0, 0, 12] as V };
const fig1110: Diagram = {
  id: 'm11-11-fig-11.10',
  topic: 7,
  name: 'The centroid of a tetrahedron',
  cases: [{ chip: 'Tetrahedron', cap: CAP1110 }],
  draw() {
    const s = new Sketch(W, 318), k = K1110, P3 = (v: V) => pj(k.o, k.u, v);
    const G1v = mul3(add3(add3(k.B, k.C), k.D), 1 / 3), Gv = mul3(add3(add3(add3(k.A, k.B), k.C), k.D), 1 / 4);
    const [a, b, c, d, g1, g] = [k.A, k.B, k.C, k.D, G1v, Gv].map(P3);
    path(s, [a, c], { color: C.slate, w: 1.2, name: 'AC' });
    path(s, [a, b], { w: 2, name: 'AB' });
    path(s, [a, d], { w: 2, name: 'AD' });
    path(s, [b, c, d, b], { w: 2, name: 'face BCD' });
    path(s, [a, g], { color: C.mari, w: 3, name: 'AG' });
    path(s, [g, g1], { w: 2.6, name: 'GG1' });
    pt(s, a, 'A');
    pt(s, b, 'B');
    pt(s, c, 'C');
    pt(s, d, 'D');
    pt(s, g1, 'G1');
    pt(s, g, 'G', C.mari);
    lab(s, d[0], d[1] - 12, `${I('D')}(0, 0, 12)`, { size: 14 });
    const la = lab(s, 150, 302, `${I('A')}(0, 0, 0)`, { size: 14, anchor: 'start' });
    leadTo(s, [a[0] + 3, a[1] + 4], la);
    lab(s, b[0] - 6, b[1] + 20, `${I('B')}(4, 0, 0)`, { size: 14, anchor: 'end' });
    lab(s, c[0], c[1] + 21, `${I('C')}(0, 8, 0)`, { size: 14 });
    lab(s, 196, 120, `face ${I('BCD')}`, { size: 14, anchor: 'start' });
    const lg1 = runs(s, 234, 187, [{ t: `${I('G')}<sub>1</sub>(` }, { num: '4', den: '3' }, { t: ', ' }, { num: '8', den: '3' }, { t: ', 4)' }], { size: 13.5, anchor: 'start' });
    leadTo(s, [g1[0] + 4, g1[1] - 1], lg1);
    const lg = lab(s, 86, g[1] + 5, `${I('G')}(1, 2, 3)`, { size: 14, anchor: 'end', color: C.amber });
    leadTo(s, [g[0] - 5, g[1]], lg, C.mari);
    lab(s, (a[0] + g[0]) / 2 + 8, (a[1] + g[1]) / 2 + 9, '3', { size: 16, anchor: 'start', color: C.amber });
    lab(s, (g[0] + g1[0]) / 2 + 7, (g[1] + g1[1]) / 2 + 14, '1', { size: 16, anchor: 'start' });
    return s;
  },
  check() {
    const s = fig1110.draw(fig1110.cases[0]), out: Check[] = [], k = K1110;
    const G1v = mul3(add3(add3(k.B, k.C), k.D), 1 / 3), Gv = mul3(add3(add3(add3(k.A, k.B), k.C), k.D), 1 / 4);
    out.push([`The centroid of face BCD is G₁(${G1v.map((v) => fmt(v)).join(', ')}) = (4/3, 8/3, 4); the tetrahedron's centroid G(${Gv.map((v) => fmt(v)).join(', ')}) = (1, 2, 3)`, close(dist3(G1v, [4 / 3, 8 / 3, 4]), 0) && close(dist3(Gv, [1, 2, 3]), 0)]);
    out.push([`G lies on AG₁ with AG ∶ GG₁ = ${fmt(dist3(k.A, Gv) / dist3(Gv, G1v))} ∶ 1 = 3 ∶ 1`, close(dist3(k.A, Gv) + dist3(Gv, G1v), dist3(k.A, G1v)) && close(dist3(k.A, Gv) / dist3(Gv, G1v), 3)]);
    out.push(['The dots stand where the frame puts them', dotIs(s, 'G', pj(k.o, k.u, Gv)) && dotIs(s, 'G1', pj(k.o, k.u, G1v)) && dotIs(s, 'D', pj(k.o, k.u, k.D))]);
    out.push(stackedCheck(s, ['4/3', '8/3']));
    out.push(labelsCheck(s, ['D(0, 0, 12)', 'A(0, 0, 0)', 'B(4, 0, 0)', 'C(0, 8, 0)', 'face BCD', 'G1(4/3, 8/3, 4)', 'G(1, 2, 3)', '3', '1']));
    out.push(noBadChars(s, fig1110));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* The Additional Topics part's Figure 1 · points on the y-axis (p. 1053) */
/* ===================================================================== */
const CAPG = `The first worked example drawn in the plane through ${I('P')}(3, −2, 5) and the ${Y}-axis: the foot ${I('N')}(0, −2, 0) is the nearest point of the axis, at ${I('d')}<sub>min</sub> = √34, and the two solutions ${I('R')}<sub>1</sub>(0, 2, 0), ${I('R')}<sub>2</sub>(0, −6, 0) at distance ${I('d')} = 5√2 sit symmetrically 4 units either side of it.`;
const KG = { ax: 118, y0: 112, u: 23 };
const figG: Diagram = {
  id: 'm11-11-G-d1',
  topic: 9,
  name: 'Points on the y-axis at distance 5√2 from P',
  cases: [{ chip: 'Two solutions', cap: CAPG }],
  draw() {
    const s = new Sketch(W, 318), k = KG, yy = (y: number) => k.y0 - y * k.u, dmin = Math.sqrt(34);
    const r1: P = [k.ax, yy(2)], o: P = [k.ax, yy(0)], n: P = [k.ax, yy(-2)], r2: P = [k.ax, yy(-6)], p: P = [k.ax + dmin * k.u, yy(-2)];
    arr(s, [k.ax, yy(-7.4)], [k.ax, yy(3.4)], { w: 1.4, head: 8, name: 'y-axis' });
    for (const q of [r1, n, r2]) path(s, [[24, q[1]], [k.ax - 6, q[1]]], { color: C.slate, w: 0.9, dash: '3 3', name: 'extension' });
    arr(s, [30, r1[1]], [30, n[1]], { both: true, w: 1.2, head: 6, name: 'dimension 4' });
    arr(s, [30, n[1]], [30, r2[1]], { both: true, w: 1.2, head: 6, name: 'dimension 4' });
    path(s, [n, p], { w: 2.6, name: 'NP' });
    rightMark(s, n, [0, -1], [1, 0], 9);
    path(s, [p, r1], { color: C.mari, w: 1.8, dash: '6 4', name: 'PR1' });
    path(s, [p, r2], { color: C.mari, w: 1.8, dash: '6 4', name: 'PR2' });
    pt(s, r1, 'R1', C.mari);
    pt(s, r2, 'R2', C.mari);
    pt(s, o, 'O');
    pt(s, n, 'N');
    pt(s, p, 'P');
    lab(s, k.ax + 8, yy(3.4) + 4, `${Y}-axis`, { size: 14, anchor: 'start' });
    lab(s, k.ax + 10, r1[1] - 7, `${I('R')}<sub>1</sub>(0, 2, 0)`, { size: 13.5, anchor: 'start', color: C.amber });
    lab(s, k.ax + 10, o[1] + 5, I('O'), { size: 14, anchor: 'start' });
    lab(s, k.ax - 8, n[1] - 9, `${I('N')}(0, −2, 0)`, { size: 13, anchor: 'end' });
    lab(s, k.ax + 8, r2[1] + 18, `${I('R')}<sub>2</sub>(0, −6, 0)`, { size: 13.5, anchor: 'start', color: C.amber });
    lab(s, p[0] + 9, p[1] + 5, `${I('P')}(3, −2, 5)`, { size: 13, anchor: 'start' });
    lab(s, (n[0] + p[0]) / 2 - 18, n[1] + 20, `${I('d')}<sub>min</sub> = √34`, { size: 13.5 });
    lab(s, (r1[0] + p[0]) / 2 + 8, (r1[1] + p[1]) / 2 - 8, `${I('d')} = 5√2`, { size: 13.5, anchor: 'start', color: C.amber });
    lab(s, (r2[0] + p[0]) / 2 + 8, (r2[1] + p[1]) / 2 + 18, `${I('d')} = 5√2`, { size: 13.5, anchor: 'start', color: C.amber });
    lab(s, 16, (r1[1] + n[1]) / 2 + 5, '4', { size: 14 });
    lab(s, 16, (n[1] + r2[1]) / 2 + 5, '4', { size: 14 });
    lab(s, W / 2, 310, `the two solutions are symmetric about the foot ${I('N')}`, { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = figG.draw(figG.cases[0]), out: Check[] = [], P0: V = [3, -2, 5];
    out.push(['N(0, −2, 0) is the foot: NP = (3, 0, 5) is at right angles to the y-axis, and NP = √34', close(dot3(sub3(P0, [0, -2, 0]), [0, 1, 0]), 0) && close(dist3(P0, [0, -2, 0]), Math.sqrt(34))]);
    out.push(['R₁(0, 2, 0) and R₂(0, −6, 0) are at distance 5√2 from P (9 + (y + 2)² + 25 = 50 gives y = 2 or −6), 4 either side of N', close(dist3(P0, [0, 2, 0]), 5 * Math.SQRT2) && close(dist3(P0, [0, -6, 0]), 5 * Math.SQRT2)]);
    const [r1, n, r2, p] = ['R1', 'N', 'R2', 'P'].map((nm) => dotAt(s, nm)!);
    out.push(['On the drawing (one scale both ways) PR₁ = PR₂ = 5√2 units and NP = √34 units', close(len(p, r1) / KG.u, 5 * Math.SQRT2) && close(len(p, r2) / KG.u, 5 * Math.SQRT2) && close(len(n, p) / KG.u, Math.sqrt(34)) && close(len(r1, n), len(n, r2))]);
    out.push(labelsCheck(s, ['y-axis', 'R1(0, 2, 0)', 'O', 'N(0, −2, 0)', 'R2(0, −6, 0)', 'P(3, −2, 5)', 'dmin = √34', 'd = 5√2', '4', 'the two solutions are symmetric about the foot N']));
    out.push(noBadChars(s, figG));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* The Additional Topics part's Figure 2 · which side of the YZ-plane (p. 1056) */
/* ===================================================================== */
const CAPH_LEAD = `The ${I('YZ')}-plane seen edge-on, positions plotted against the ${X}-coordinate`;
type HCase = { chip: string; cap: string; title: string; x0: number; ends: [string, number][]; inside: boolean };
const figH: Diagram = {
  id: 'm11-11-H-d1',
  topic: 10,
  name: 'Which side of the YZ-plane',
  cases: [
    { chip: 'Opposite signs', cap: `${CAPH_LEAD}: ${X}-values −2 and 3 are opposite in sign, so the plane cuts the segment itself: internal, ${I('k')} > 0, ratio 2${NB}∶${NB}3.`, title: 'opposite signs', x0: 132, ends: [[`${I('P')}(−2, 4, 7)`, -2], [`${I('Q')}(3, −5, 8)`, 3]], inside: true },
    { chip: 'Same sign', cap: `${CAPH_LEAD} (the first worked example): ${X}-values 4 and 6 are both positive, so the plane is only reached by extending the line beyond ${I('A')}: external, ${I('k')} < 0, ratio 2${NB}∶${NB}3.`, title: 'same sign', x0: 70, ends: [[`${I('A')}(4, 8, 10)`, 4], [`${I('B')}(6, 10, −8)`, 6]], inside: false },
  ],
  draw(c: HCase) {
    const s = new Sketch(W, 200), u = 34, y = 110, at = (x: number) => c.x0 + u * x;
    const [e1, e2] = c.ends.map(([, x]) => at(x));
    lab(s, W / 2, 20, c.title, { size: 14 });
    path(s, [[16, y], [324, y]], { color: C.slate, w: 0.9, name: 'line' });
    if (!c.inside) path(s, [[c.x0, y], [e1, y]], { color: C.mari, w: 1.8, dash: '6 4', name: 'extension' });
    path(s, [[e1, y], [e2, y]], { w: 3, name: 'segment' });
    path(s, [[c.x0, 64], [c.x0, 168]], { w: 2, name: 'YZ-plane' });
    s.add(`<rect x="${c.x0 - 4.5}" y="${y - 4.5}" width="9" height="9" fill="${C.mari}"/>`);
    keep(s, [[c.x0 - 5.5, y - 5.5], [c.x0 + 5.5, y - 5.5], [c.x0 + 5.5, y + 5.5], [c.x0 - 5.5, y + 5.5], [c.x0 - 5.5, y - 5.5]], 'point of division');
    c.ends.forEach(([name, x], i) => {
      pt(s, [at(x), y], `end${i}`);
      lab(s, at(x), c.inside || i === 0 ? y - 14 : y - 36, name, { size: 13.5 });
      lab(s, at(x), y + 26, x < 0 ? '−' : '+', { size: 18 });
    });
    lab(s, c.x0 - 7, 46, `${I('YZ')}-plane`, { size: 12.5, anchor: 'end', color: C.slate });
    lab(s, c.x0 - 7, 62, `(${X} = 0)`, { size: 12.5, anchor: 'end', color: C.slate });
    lab(s, c.x0 + 8, 160, c.inside ? `internal, ${I('k')} > 0` : `external, ${I('k')} < 0`, { size: 13.5, anchor: 'start', color: C.amber });
    lab(s, c.x0 + 8, 182, 'ratio 2 ∶ 3', { size: 13.5, anchor: 'start', color: C.amber });
    return s;
  },
  check(c: HCase) {
    const s = figH.draw(c), out: Check[] = [];
    const [x1, x2] = c.ends.map(([, x]) => x), kk = -x1 / x2;
    out.push([`The plane x = 0 meets the line in the ratio k ∶ 1 with k = −x₁/x₂ = ${fmt(kk)}: ${c.inside ? 'positive, internal' : 'negative, external'}, |k| = 2/3, the ratio 2 ∶ 3`, (kk > 0) === c.inside && close(Math.abs(kk), 2 / 3)]);
    const pts: [V, V] = c.inside ? [[-2, 4, 7], [3, -5, 8]] : [[4, 8, 10], [6, 10, -8]];
    const R = mul3(add3(mul3(pts[1], kk), pts[0]), 1 / (kk + 1));
    out.push([`The point of division (${R.map((v) => fmt(v)).join(', ')}) has x = 0`, close(R[0], 0)]);
    out.push(['The ends stand at their x-coordinates, the plane at x = 0', [0, 1].every((i) => close(dotAt(s, `end${i}`)![0], c.x0 + 34 * c.ends[i][1]))]);
    out.push(labelsCheck(s, [...c.ends.map(([n]) => plain(n)), 'YZ-plane', '(x = 0)', c.inside ? 'internal, k > 0' : 'external, k < 0', 'ratio 2 ∶ 3', c.title]));
    out.push(noBadChars(s, figH));
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 11 Chapter 11, Introduction to Three Dimensional Geometry: the book's figures. */
export const DIAGRAMS_MATHEMATICS_11_11: Diagram[] = [fig111, fig112, fig113, fig114, fig115, fig116, fig117, fig118, fig119, fig1110, figG, figH];

import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import { stixW } from '@/lib/diagrams/mathematics-11-03b';

/**
 * MATHEMATICS CLASS 11, CHAPTER 9 (Straight Lines): every drawing of the Master Reference book (October edition) on
 * pp. 791–894, redrawn. The numbered figures stand on their own "CHAPTER 9 · FIGURES" plates, the page after their
 * caption; the Additional Topics part prints its own "Figure 1", "Figure 2" and "Figure 3" in the text.
 *
 *   Figure 9.1 (p. 793; caption p. 792), the section formula as similar triangles, Topic 00, topic index 0.
 *   Figure 9.2 (p. 799; caption p. 798), inclination and slope at 30°, 90° and 135°, Topic 01, index 1.
 *   Figure 9.3 (p. 802; caption p. 801), the right triangle behind m = tan θ, Topic 01, index 1.
 *   Figure 9.4 (p. 809; caption p. 808), 3x + 4y − 18 = 0 in its three descriptions, Topic 02, index 2.
 *   Figure 9.5 (p. 812; caption p. 811), the intercept form, Topic 02, index 2.
 *   Figure 9.6 (p. 814; caption p. 813), the normal form with p = 4, ω = 120°, Topic 02, index 2.
 *   Figure 9.7 (p. 820; caption p. 819), distance as a perpendicular drop, Topic 03, index 3.
 *   Figure 9.8 (p. 841; caption p. 840), the foot and the image of P(2, 3) in x + y − 1 = 0, Topic 06, index 6.
 *   Figure 9.9 (p. 848; caption p. 847), the four centres of A(0, 0), B(6, 0), C(1, 9), Topic 07, index 7.
 *   The Additional Topics part's "Figure 1" (p. 869), the midpoint locus 3/x + 4/y = 2, m11-09-E-d1, index 13.
 *   Its "Figure 2" (p. 878), the three regimes of a pair of lines, m11-09-08-d1, index 8.
 *   Its "Figure 3" (p. 884), homogenising the chord PQ of S = 0, m11-09-08-d2, index 8.
 *
 * ONE HIGHLIGHT. The book's orange is the marigold: 9.1 P and the two dotted legs with their right angles; 9.2 line B,
 * its arc and its labels; 9.3 the legs PN and QN, θ and N; 9.4 the normal ON, ω and p; 9.6 the same; 9.7 PQ, Q and
 * d = 1; 9.8 PQ, QP′, Q, the steps t and PQ = QP′; 9.9 the family of lines in each chip (the Euler line in the last);
 * E-d1 the dashed locus, the three midpoints and their labels; 08-d1 the second line of (a) and the origin of (c);
 * 08-d2 the rays OP, OQ and their pair. The book's navy and teal are ink, its grey slate.
 *
 * NO FILLS. 9.5's shaded triangle OAB is marigold hatching (its one highlight). 08-d1's doubled line, drawn by the
 * book as a line with a pale halo, is one heavy ink stroke through the origin (about twice the line weight), so it
 * cannot be read as a parallel pair.
 *
 * DOTS. Every point on a graph is a filled dot (decision 10).
 *
 * DEPARTURES, for a phone: grid lines are left out (tick numbers stay); labels the book runs along a line (9.3's
 * QN = y₂ − y₁ = 6) are set level; a tick number a line runs through is set a few points aside (9.1's 1, 3, 5; 9.6's
 * 4 and −8; 9.7's 2 and 1). 9.7's axis starts at −2 (the book's empty −3 is left out for room). 9.9's legend is left
 * out (decision 18): its four families of lines are one chip each, with the family's name over the drawing, and a
 * fifth chip holds the four centres and the Euler line; the tick numbers 6 and 8 stay, B's label is set below the axis.
 * 08-d1's three panels are chips. 08-d2's conic S = 0, never given by the book, is drawn as the book draws it: the
 * ellipse with centre (5, 3) and half-axes 3 and 2, which passes through P(2, 3) (its left end) and Q(5, 1) (its
 * foot). Point names L, M, N (upright in 9.1 and 9.3) are italic, as every point is. Every fraction on a drawing is
 * stacked by hand, also where the book printed a slash (9.4's and 9.5's 9/2, E-d1's 3/x and 4/y); the captions' one-line
 * fractions are written <frac>. No em dash.
 */

const W = 340;
type P = [number, number];
const NB = ' ';
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<\/?(?:i|sub|sup|frac|num|den)>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const I = (t: string) => `<i>${t}</i>`;
const X = I('x'), Y = I('y');
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const sq = (b: string) => `${b}<sup>2</sup>`;
const deg = (a: number) => (a * Math.PI) / 180;

/* ---------- lines, labels and the layout checks (as in mathematics-11-08.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean | string; name?: string; free?: boolean };
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
const dashAttr = (d: Stroke['dash']) => (d === true ? ' stroke-dasharray="5 4"' : d ? ` stroke-dasharray="${d}"` : '');
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  if (!o.free) keep(s, pts, o.name);
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
  if (!o.free) keep(s, [a, b], o.name ?? 'arrow');
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
/** Every label closer than LABEL_GAP to a kept line, the worst first. */
function crowded(s: Sketch): { gap: number; what: string }[] {
  const out: { gap: number; what: string }[] = [];
  let best = { gap: Infinity, what: '' };
  for (const { pts, name: ln } of LINES.get(s) ?? []) for (const l of s.labels) {
    const d = boxToLine(l.rect, pts);
    if (d < best.gap) best = { gap: d, what: `"${l.text}" (from the ${ln || 'line'})` };
    if (d < LABEL_GAP - 1e-9) out.push({ gap: d, what: `"${l.text}" (from the ${ln || 'line'}, ${fmt(d, 1)} px)` });
  }
  return out.length ? out.sort((a, b) => a.gap - b.gap) : [best];
}
const clearCheck = (s: Sketch): Check => {
  const c = crowded(s), bad = c[0].gap < LABEL_GAP - 1e-9;
  return [`Every label stays at least ${LABEL_GAP} px clear of every line, curve, dot and hatch stroke: ${bad ? `too close: ${c.slice(0, 8).map((x) => x.what).join('; ')}` : `the closest is ${c[0].what}, ${fmt(c[0].gap, 1)} px`}`, !bad];
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
  const out = (LINES.get(s) ?? []).filter((l) => l.pts.some((p) => p[0] < 0 || p[0] > s.w || p[1] < 0 || p[1] > s.h)).map((l) => l.name);
  return [`Every line lies inside the frame${out.length ? `: not ${[...new Set(out)].join(', ')}` : ''}`, out.length === 0];
};
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), inFrame(s), linesInFrame(s)];
const hasLabel = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const labelsCheck = (s: Sketch, ts: string[], what = 'The labels as printed'): Check => {
  const miss = ts.filter((t) => !hasLabel(s, t));
  return [`${what}: ${ts.join(' · ')}${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0];
};
/** No em dash, no vulgar-fraction character and no one-line fraction outside a raised run, in anything the drawing shows. */
const noBadChars = (s: Sketch, d: Diagram): Check => {
  const unraised = (h: string) => plain(h.replace(/<sup>.*?<\/sup>/g, '').replace(/<frac>.*?<\/frac>/g, ''));
  const all = [...s.texts.map((t) => unraised(t.html)), d.name, ...d.cases.flatMap((c) => [c.chip, unraised(c.cap)])].join(' ');
  return ['No em dash, no vulgar-fraction character and no slash fraction in the labels, name, chips or captions', !/[—¼-¾⅐-⅞]/.test(all) && !/[\w)!]\s*\/\s*[\w(√]/.test(all)];
};

/** A line of STIX on the drawing, from its baseline, its box at its true width. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text });
  return rect;
}

/* ---------- labels of several runs: text and stacked fractions (as in mathematics-11-08.ts) ---------- */
type Piece = { t: string } | { num: string; den: string };
const FRACS = new WeakMap<Sketch, { num: string; den: string; rule: [number, number, number]; numY: number; denY: number; numW: number; denW: number }[]>();
const FRAC_PAD = 2;
const fracW = (num: string, den: string, size: number) => Math.max(widthOf(num, size), widthOf(den, size)) + 2 * FRAC_PAD;
function frac(s: Sketch, x: number, y: number, num: string, den: string, size: number, color: string): Rect {
  const deep = /[()[\]{}|]/.test(plain(num)) ? size * 0.2 : 0;
  const w = fracW(num, den, size), numY = y - 3 - deep, denY = y + 3 + size * 0.68;
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
/** Every stacked fraction really is stacked: numerator above the rule, denominator below, the rule as wide as both. */
const stackedCheck = (s: Sketch, want: string[]): Check => {
  const f = FRACS.get(s) ?? [], got = f.map((q) => `${plain(q.num)}/${plain(q.den)}`);
  const ok = f.every((q) => q.numY < q.rule[2] && q.denY - 6 > q.rule[2] && q.rule[1] - q.rule[0] >= Math.max(q.numW, q.denW)) && want.every((w) => got.includes(w)) && f.length === want.length;
  return [`Every fraction on the drawing is stacked by hand (${f.length}: ${[...new Set(got)].join(', ') || 'none'}), numerator over the rule over denominator`, ok];
};

/* ---------- hatching: the book's shading, as marigold lines (mathematics-11-05.ts) ---------- */
const HATCH = new WeakMap<Sketch, [P, P][]>();
function hatch(s: Sketch, inside: (p: P) => boolean, bx: Rect, o: { step?: number; avoid?: Rect[]; gap?: number } = {}): [P, P][] {
  const step = (o.step ?? 7) * Math.SQRT2, gap = o.gap ?? LABEL_GAP + 1, avoid = [...s.labels.map((l) => l.rect), ...(o.avoid ?? [])];
  const ok = (p: P) => inside(p) && avoid.every((r) => rectDist(r, p) >= gap);
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
  s.add(`<path d="${segs.map(([a, b]) => `M${r1(a[0])} ${r1(a[1])} L${r1(b[0])} ${r1(b[1])}`).join(' ')}" fill="none" stroke="${C.mari}" stroke-width="1" stroke-linecap="round"/>`);
  segs.forEach((sg) => keep(s, sg, 'hatch'));
  HATCH.set(s, [...(HATCH.get(s) ?? []), ...segs]);
  return segs;
}
const hatchAll = (s: Sketch, test: (p: P) => boolean) => (HATCH.get(s) ?? []).every(([a, b]) => test(a) && test(b) && test([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]));
const hatchN = (s: Sketch) => (HATCH.get(s) ?? []).length;
function toPoly(p: P, pts: P[]): number {
  let d = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy || 1;
    const k = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L));
    d = Math.min(d, Math.hypot(p[0] - a[0] - k * dx, p[1] - a[1] - k * dy));
  }
  return d;
}

/* ---------- graphs: axes through the origin (mathematics-11-05.ts) ---------- */
type Gr = { ox: number; oy: number; ux: number; uy: number; x: [number, number]; y: [number, number] };
const gx = (g: Gr, v: number) => g.ox + v * g.ux;
const gy = (g: Gr, v: number) => g.oy - v * g.uy;
const gp = (g: Gr, p: P): P => [gx(g, p[0]), gy(g, p[1])];
const unPx = (g: Gr, p: P): P => [(p[0] - g.ox) / g.ux, (g.oy - p[1]) / g.uy];
type AxOpt = {
  xt?: number[]; yt?: number[];
  xdx?: Record<string, number>; xdy?: Record<string, number>;
  ydx?: Record<string, number>; ydy?: Record<string, number>;
  yRight?: string[];
  /** The book's "0" or "O" at the origin: offset from the crossing and anchor. */
  zero?: [number, number, 'start' | 'middle' | 'end', string?];
  ylab?: 'left' | 'right';
  size?: number;
};
function axes(s: Sketch, g: Gr, o: AxOpt = {}) {
  const xL = gx(g, g.x[0]), xR = gx(g, g.x[1]), yB = gy(g, g.y[0]), yT = gy(g, g.y[1]), size = o.size ?? 11.5;
  arr(s, [xL, g.oy], [xR, g.oy], { color: C.ink, w: 1.3, head: 7, name: 'axis:x' });
  arr(s, [g.ox, yB], [g.ox, yT], { color: C.ink, w: 1.3, head: 7, name: 'axis:y' });
  lab(s, xR + 5, g.oy + 5, X, { anchor: 'start', size: 15 });
  if (o.ylab === 'left') lab(s, g.ox - 7, yT + 8, Y, { anchor: 'end', size: 15 });
  else lab(s, g.ox + 7, yT + 8, Y, { anchor: 'start', size: 15 });
  (o.xt ?? []).forEach((t) => {
    const x = gx(g, t);
    path(s, [[x, g.oy - 4], [x, g.oy + 4]], { color: C.slate, w: 1.1, name: `tick:x:${t}` });
    lab(s, x + (o.xdx?.[String(t)] ?? 0), g.oy + 17 + (o.xdy?.[String(t)] ?? 0), fmt(t), { size, color: C.slate });
  });
  (o.yt ?? []).forEach((t) => {
    const y = gy(g, t);
    path(s, [[g.ox - 4, y], [g.ox + 4, y]], { color: C.slate, w: 1.1, name: `tick:y:${t}` });
    const right = o.yRight?.includes(String(t));
    lab(s, g.ox + (right ? 9 : -9) + (o.ydx?.[String(t)] ?? 0), y + 4 + (o.ydy?.[String(t)] ?? 0), fmt(t), { anchor: right ? 'start' : 'end', size, color: C.slate });
  });
  if (o.zero) lab(s, g.ox + o.zero[0], g.oy + o.zero[1], o.zero[3] ?? '0', { anchor: o.zero[2], size: o.zero[3] ? 14 : size, color: o.zero[3] ? C.text : C.slate });
}
/** A straight line between two data points. */
const seg = (s: Sketch, g: Gr, a: P, b: P, o: Stroke = {}) => path(s, [gp(g, a), gp(g, b)], { color: o.color ?? C.ink, w: o.w ?? 2, dash: o.dash, name: o.name ?? 'line', free: o.free });
const GDOTS = new WeakMap<Sketch, { p: P; name: string; col: string }[]>();
const DOT_R = 3.6;
/** A filled point on the graph (decision 10), kept as a ring for the clearance check. */
function gdot(s: Sketch, g: Gr, p: P, name: string, col: string = C.ink, r = DOT_R) {
  const [px, py] = gp(g, p);
  s.dot(px, py, r, col);
  keep(s, Array.from({ length: 25 }, (_, i): P => [px + (r + 1) * Math.cos((2 * Math.PI * i) / 24), py + (r + 1) * Math.sin((2 * Math.PI * i) / 24)]), `dot:${name}`);
  GDOTS.set(s, [...(GDOTS.get(s) ?? []), { p, name, col }]);
}
const gdotsOf = (s: Sketch) => GDOTS.get(s) ?? [];
const gdotAt = (s: Sketch, name: string) => gdotsOf(s).find((d) => d.name === name)?.p;
/** An arc round a data point, radius in px, from a0 to a1 degrees (anticlockwise from +x, on equal axes). */
function arc(s: Sketch, g: Gr, c: P, r: number, a0: number, a1: number, o: Stroke = {}): P[] {
  const [cx, cy] = gp(g, c), n = Math.max(8, Math.ceil(Math.abs(a1 - a0) / 3));
  const pts = Array.from({ length: n + 1 }, (_, i): P => { const a = deg(a0 + ((a1 - a0) * i) / n); return [cx + r * Math.cos(a), cy - r * Math.sin(a)]; });
  path(s, pts, { w: 1.5, ...o, name: o.name ?? 'arc' });
  return pts;
}
/** The square corner mark at a data point, its arms along the data directions u and v. */
function rightMark(s: Sketch, g: Gr, c: P, u: P, v: P, size = 8, o: Stroke = {}) {
  const [cx, cy] = gp(g, c), un = (d: P): P => { const k = Math.hypot(d[0] * g.ux, d[1] * g.uy); return [(d[0] * g.ux) / k, (-d[1] * g.uy) / k]; };
  const a = un(u), b = un(v);
  path(s, [[cx + a[0] * size, cy + a[1] * size], [cx + (a[0] + b[0]) * size, cy + (a[1] + b[1]) * size], [cx + b[0] * size, cy + b[1] * size]], { w: 1.2, ...o, name: o.name ?? 'right angle' });
}
/** A short stroke across a line at a data point (the book's step marks). */
function crossMark(s: Sketch, g: Gr, p: P, dir: P, half = 7, o: Stroke = {}) {
  const [px, py] = gp(g, p), k = Math.hypot(dir[0], dir[1]), nx = -dir[1] / k, ny = dir[0] / k;
  path(s, [[px - nx * half, py + ny * half], [px + nx * half, py - ny * half]], { w: 1.8, ...o, name: o.name ?? 'mark' });
}
const onLine = (a: number, b: number, c: number, p: P, tol = 1e-9) => Math.abs(a * p[0] + b * p[1] + c) < tol;

/* ===================================================================== */
/* Figure 9.1 · the section formula as similar triangles (Topic 00)       */
/* ===================================================================== */
const CAP91 = `The internal section formula seen as similar triangles: with ${I('A')}(−1,${NB}3), ${I('B')}(5,${NB}−9) and ${I('AP')}${NB}∶${NB}${I('PB')} = 2${NB}∶${NB}1, the foot points ${I('L')}, ${I('M')}, ${I('N')} split the base in the same 4${NB}∶${NB}2 = 2${NB}∶${NB}1 ratio, which is exactly why the ${X}-coordinate of ${I('P')} is ${fr(`${I('mx')}<sub>2</sub> + ${I('nx')}<sub>1</sub>`, `${I('m')} + ${I('n')}`)}.`;
const L91 = (x: number) => -2 * x + 1;
const G91: Gr = { ox: 112.8, oy: 127.8, ux: 28, uy: 22, x: [-3.6, 7.5], y: [-11.6, 4.9] };
const A91: P = [-1, 3], B91: P = [5, -9], M91 = 2, N91 = 1;
const P91: P = [(M91 * B91[0] + N91 * A91[0]) / (M91 + N91), (M91 * B91[1] + N91 * A91[1]) / (M91 + N91)];
const fig91: Diagram = {
  id: 'm11-09-fig-9.1',
  topic: 0,
  name: 'The section formula as similar triangles',
  cases: [{ chip: 'AP : PB = 2 : 1', cap: CAP91 }],
  draw() {
    const s = new Sketch(W, 432), g = G91;
    axes(s, g, { xt: [-3, -1, 1, 3, 5, 7], yt: [-10, -8, -6, -4, -2, 2, 4], xdx: { '1': 8, '3': -8, '5': 8 }, yRight: ['2'], zero: [-7, 15, 'end'] });
    // the construction: feet of A, P, B on the x-axis, and the two right triangles
    seg(s, g, [-1, 3], [-1, 0], { color: C.slate, w: 1.2, dash: '4 3', name: 'AL' });
    seg(s, g, [3, 3], [3, -5], { color: C.slate, w: 1.2, dash: '4 3', name: 'x=3' });
    seg(s, g, [5, 0], [5, -9], { color: C.slate, w: 1.2, dash: '4 3', name: 'x=5' });
    seg(s, g, A91, [3, 3], { color: C.mari, w: 1.8, dash: '1.5 3', name: 'leg A' });
    seg(s, g, P91, [5, -5], { color: C.mari, w: 1.8, dash: '1.5 3', name: 'leg P' });
    rightMark(s, g, [3, 3], [-1, 0], [0, -1], 8, { color: C.mari });
    rightMark(s, g, [5, -5], [-1, 0], [0, -1], 8, { color: C.mari });
    seg(s, g, [-1.8, L91(-1.8)], [6.1, L91(6.1)], { w: 2.2, name: 'line AB' });
    arr(s, [gx(g, -1) + 3, gy(g, 1.5)], [gx(g, 3) - 3, gy(g, 1.5)], { both: true, w: 1.5, head: 6, name: 'LM' });
    arr(s, [gx(g, 3) + 3, gy(g, 1.5)], [gx(g, 5) - 3, gy(g, 1.5)], { both: true, w: 1.5, head: 6, name: 'MN' });
    lab(s, gx(g, 1.4), gy(g, 1.5) - 8, '4', { size: 14 });
    lab(s, gx(g, 4), gy(g, 1.5) - 8, '2', { size: 14 });
    gdot(s, g, A91, 'A'); gdot(s, g, B91, 'B'); gdot(s, g, P91, 'P', C.mari);
    gdot(s, g, [-1, 0], 'L'); gdot(s, g, [3, 0], 'M'); gdot(s, g, [5, 0], 'N');
    lab(s, gx(g, -1) - 10, gy(g, 3) + 4, `${I('A')}(−1, 3)`, { anchor: 'end', size: 14 });
    lab(s, gx(g, 5) + 13, gy(g, -9) + 5, `${I('B')}(5, −9)`, { anchor: 'start', size: 14 });
    lab(s, gx(g, 3) - 11, gy(g, -5) + 5, `${I('P')}(3, −5)`, { anchor: 'end', size: 14 });
    lab(s, gx(g, -1) + 6, g.oy - 10, I('L'), { anchor: 'start', size: 14 });
    lab(s, gx(g, 3) + 6, g.oy - 10, I('M'), { anchor: 'start', size: 14 });
    lab(s, gx(g, 5) + 6, g.oy - 10, I('N'), { anchor: 'start', size: 14 });
    lab(s, W / 2, 400, `${I('AP')} ∶ ${I('PB')} = ${I('m')} ∶ ${I('n')} = 2 ∶ 1`, { size: 14 });
    lab(s, W / 2, 422, `${I('LM')} ∶ ${I('MN')} = 4 ∶ 2 = 2 ∶ 1`, { size: 14 });
    return s;
  },
  check() {
    const s = fig91.draw(fig91.cases[0]), out: Check[] = [], g = G91;
    const ln = linesNamed(s, /^line AB$/)[0].pts.map((p) => unPx(g, p));
    out.push(['A(−1, 3) and B(5, −9) both lie on the drawn line y = −2x + 1', [A91, B91].every((p) => close(L91(p[0]), p[1])) && ln.every((p) => close(L91(p[0]), p[1], 1e-9))]);
    out.push([`P divides AB internally 2 : 1: ((2·5 + 1·(−1))/3, (2·(−9) + 1·3)/3) = (${fmt(P91[0])}, ${fmt(P91[1])}) = (3, −5), on the line`, close(P91[0], 3) && close(P91[1], -5) && close(L91(3), -5)]);
    const ap = len(A91, P91), pb = len(P91, B91);
    out.push([`AP : PB = ${fmt(ap, 3)} : ${fmt(pb, 3)} = 2 : 1, and the feet split the axis LM : MN = 4 : 2 = 2 : 1`, close(ap / pb, 2) && close((3 - -1) / (5 - 3), 2)]);
    const ds = ['L', 'M', 'N'].map((n) => gdotAt(s, n)!);
    out.push(['The feet L(−1, 0), M(3, 0), N(5, 0) sit under A, P and B on the x-axis', ds.every((d) => d[1] === 0) && ds[0][0] === A91[0] && ds[1][0] === P91[0] && ds[2][0] === B91[0]]);
    const legs = linesNamed(s, /^leg /).map((l) => l.pts.map((p) => unPx(g, p)));
    out.push(['The two dotted legs are level (A to x = 3, P to x = 5), so the right triangles are similar with sides 4 : 2', legs.length === 2 && legs.every((l) => close(l[0][1], l[1][1], 1e-9)) && close(legs[0][1][0] - legs[0][0][0], 4, 1e-9) && close(legs[1][1][0] - legs[1][0][0], 2, 1e-9)]);
    out.push(labelsCheck(s, ['A(−1, 3)', 'B(5, −9)', 'P(3, −5)', 'L', 'M', 'N', '4', '2', 'AP ∶ PB = m ∶ n = 2 ∶ 1', 'LM ∶ MN = 4 ∶ 2 = 2 ∶ 1', '−3', '7', '−10']));
    out.push(noBadChars(s, fig91));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.2 · inclination and slope (Topic 01)                          */
/* ===================================================================== */
const CAP92 = `Inclination measured anticlockwise from the positive ${X}-axis: line ${I('A')} at 30° has ${I('m')} = tan${NB}30° ≈ 0.58, the vertical line at 90° has no slope at all, and line ${I('B')} at 135° has ${I('m')} = −1.`;
const G92: Gr = { ox: 170, oy: 146, ux: 45, uy: 45, x: [-3.45, 3.45], y: [-2.5, 2.8] };
const T30 = Math.tan(deg(30));
const fig92: Diagram = {
  id: 'm11-09-fig-9.2',
  topic: 1,
  name: 'Inclination and slope',
  cases: [{ chip: '30°, 90° and 135°', cap: CAP92 }],
  draw() {
    const s = new Sketch(W, 268), g = G92;
    axes(s, g, { xt: [-3, -2, -1, 1, 2, 3], yt: [-2, -1, 1, 2], ylab: 'left', xdx: { '-1': -5 } });
    // the vertical line through O, dashed over the y-axis
    seg(s, g, [0, -2.45], [0, 2.45], { w: 3, dash: '7 5', name: 'vertical' });
    seg(s, g, [-3.2, -3.2 * T30], [3.2, 3.2 * T30], { w: 2.2, name: 'line A' });
    seg(s, g, [-2.3, 2.3], [2.3, -2.3], { w: 2.2, color: C.mari, name: 'line B' });
    arc(s, g, [0, 0], 36, 0, 30, { name: 'arc 30' });
    arc(s, g, [0, 0], 54, 0, 90, { name: 'arc 90' });
    arc(s, g, [0, 0], 74, 0, 135, { color: C.mari, w: 1.8, name: 'arc 135' });
    lab(s, 8, 24, `${I('B')}: ${I('m')} = tan 135° = −1`, { anchor: 'start', size: 13.5, color: C.amber });
    lab(s, g.ox + 9, 30, `${I('m')} undefined`, { anchor: 'start', size: 13.5 });
    lab(s, g.ox - 26, 56, `${I('θ')} = 90°`, { anchor: 'end', size: 13.5 });
    lab(s, 336, 52, `${I('A')}: ${I('m')} = tan 30° ≈ 0.58`, { anchor: 'end', size: 13.5 });
    lab(s, 112, 124, `${I('θ')} = 135°`, { anchor: 'end', size: 13.5, color: C.amber });
    lab(s, 251, 133, `${I('θ')} = 30°`, { anchor: 'start', size: 13.5 });
    return s;
  },
  check() {
    const s = fig92.draw(fig92.cases[0]), out: Check[] = [], g = G92;
    const slope = (re: RegExp) => { const p = linesNamed(s, re)[0].pts.map((q) => unPx(g, q)); return (p[1][1] - p[0][1]) / (p[1][0] - p[0][0]); };
    out.push([`Line A at 30°: m = tan 30° = ${fmt(T30, 4)} ≈ 0.58, the drawn slope ${fmt(slope(/^line A$/), 4)}`, close(slope(/^line A$/), T30, 1e-9) && fmt(T30) === '0.58']);
    out.push([`Line B at 135°: m = tan 135° = ${fmt(Math.tan(deg(135)), 6)} = −1, the drawn slope ${fmt(slope(/^line B$/))}`, close(slope(/^line B$/), -1, 1e-9) && close(Math.tan(deg(135)), -1, 1e-9)]);
    const v = linesNamed(s, /^vertical$/)[0].pts.map((q) => unPx(g, q));
    out.push(['The line at 90° is vertical (x = 0): its slope is undefined', v.every((p) => close(p[0], 0, 1e-9))]);
    out.push(['All three lines pass through the origin', [/^line A$/, /^line B$/].every((re) => { const p = linesNamed(s, re)[0].pts.map((q) => unPx(g, q)); return close(p[0][1] / p[0][0], p[1][1] / p[1][0], 1e-9); })]);
    const arcs = ([['arc 30', 30], ['arc 90', 90], ['arc 135', 135]] as const).map(([n, end]) => {
      const p = linesNamed(s, new RegExp(`^${n}$`))[0].pts.map((q) => unPx(g, q)), a = p.map((q) => (Math.atan2(q[1], q[0]) * 180) / Math.PI), r = p.map((q) => Math.hypot(q[0], q[1]));
      return close(a[0], 0, 1e-6) && close(a[a.length - 1], end, 1e-6) && a.every((v, i) => i === 0 || v > a[i - 1]) && r.every((v) => close(v, r[0], 1e-9));
    });
    out.push(['Each arc is centred on the origin and runs anticlockwise from the positive x-axis (0°) to its line (30°, 90°, 135°)', arcs.every(Boolean)]);
    out.push(labelsCheck(s, ['B: m = tan 135° = −1', 'm undefined', 'θ = 90°', 'A: m = tan 30° ≈ 0.58', 'θ = 135°', 'θ = 30°']));
    out.push(noBadChars(s, fig92));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.3 · the right triangle behind m = tan θ (Topic 01)            */
/* ===================================================================== */
const CAP93 = `The auxiliary right triangle behind ${I('m')} = tan${NB}${I('θ')}: for ${I('P')}(1,${NB}1) and ${I('Q')}(4,${NB}7) the horizontal leg is ${I('PN')} = ${I('x')}<sub>2</sub> − ${I('x')}<sub>1</sub> = 3 and the vertical leg is ${I('QN')} = ${I('y')}<sub>2</sub> − ${I('y')}<sub>1</sub> = 6, so tan${NB}${I('θ')} = ${fr('6', '3')} = 2.`;
const G93: Gr = { ox: 48, oy: 343, ux: 38, uy: 38, x: [-0.9, 6.2], y: [-1.3, 8.5] };
const L93 = (x: number) => 2 * x - 1;
const fig93: Diagram = {
  id: 'm11-09-fig-9.3',
  topic: 1,
  name: 'The right triangle behind m = tan θ',
  cases: [{ chip: 'P(1, 1), Q(4, 7)', cap: CAP93 }],
  draw() {
    const s = new Sketch(W, 400), g = G93;
    axes(s, g, { xt: [1, 2, 3, 4, 5], yt: [2, 4, 6, 8] });
    seg(s, g, [1, 1], [1, 0], { color: C.slate, w: 1.2, dash: '4 3', name: 'PL' });
    seg(s, g, [4, 7], [4, 0], { color: C.slate, w: 1.2, dash: '4 3', name: 'QM' });
    rightMark(s, g, [1, 0], [1, 0], [0, 1], 7, { color: C.slate });
    rightMark(s, g, [4, 0], [-1, 0], [0, 1], 7, { color: C.slate });
    seg(s, g, [1, 1], [4, 1], { color: C.mari, w: 2.4, name: 'PN' });
    rightMark(s, g, [4, 1], [-1, 0], [0, 1], 9, { color: C.mari });
    seg(s, g, [-0.15, L93(-0.15)], [4.7, L93(4.7)], { w: 2.2, name: 'line l' });
    arc(s, g, [1, 1], 30, 0, (Math.atan(2) * 180) / Math.PI, { color: C.mari, w: 2, name: 'theta' });
    gdot(s, g, [1, 1], 'P'); gdot(s, g, [4, 7], 'Q'); gdot(s, g, [4, 1], 'N', C.mari);
    gdot(s, g, [1, 0], 'L'); gdot(s, g, [4, 0], 'M');
    runs(s, 64, 58, [{ t: `tan ${I('θ')} = ` }, { num: I('QN'), den: I('PN') }, { t: ' = ' }, { num: '6', den: '3' }, { t: ' = 2' }], { size: 14 });
    lab(s, gx(g, 4.7) + 12, gy(g, 8.4) + 4, I('ℓ'), { anchor: 'start', size: 16 });
    lab(s, gx(g, 4) + 10, gy(g, 7) + 6, `${I('Q')}(4, 7)`, { anchor: 'start', size: 14 });
    lab(s, 118, 268, `${I('P')}(1, 1)`, { anchor: 'start', size: 14 });
    lab(s, gx(g, 1) + 46, gy(g, 1) - 14, I('θ'), { size: 16, color: C.amber });
    lab(s, gx(g, 1) + 8, gy(g, 1) + 18, `${I('PN')} = ${I('x')}<sub>2</sub> − ${I('x')}<sub>1</sub> = 3`, { anchor: 'start', size: 12.5, color: C.amber });
    lab(s, gx(g, 4) + 10, gy(g, 1) + 20, I('N'), { anchor: 'start', size: 14 });
    lab(s, gx(g, 4) + 9, gy(g, 4) + 4, `${I('QN')} = ${I('y')}<sub>2</sub> − ${I('y')}<sub>1</sub> = 6`, { anchor: 'start', size: 13, color: C.amber });
    lab(s, gx(g, 1), g.oy + 40, I('L'), { size: 14 });
    lab(s, gx(g, 4), g.oy + 40, I('M'), { size: 14 });
    return s;
  },
  check() {
    const s = fig93.draw(fig93.cases[0]), out: Check[] = [], g = G93;
    const P0 = gdotAt(s, 'P')!, Q0 = gdotAt(s, 'Q')!, N0 = gdotAt(s, 'N')!;
    out.push(['P(1, 1) and Q(4, 7) lie on the drawn line ℓ: y = 2x − 1', close(L93(P0[0]), P0[1]) && close(L93(Q0[0]), Q0[1]) && linesNamed(s, /^line l$/)[0].pts.map((p) => unPx(g, p)).every((p) => close(L93(p[0]), p[1], 1e-9))]);
    out.push([`N = (x₂, y₁) = (${fmt(N0[0])}, ${fmt(N0[1])}): PN = x₂ − x₁ = ${fmt(N0[0] - P0[0])}, QN = y₂ − y₁ = ${fmt(Q0[1] - N0[1])}`, N0[0] === Q0[0] && N0[1] === P0[1] && N0[0] - P0[0] === 3 && Q0[1] - N0[1] === 6]);
    out.push([`tan θ = QN/PN = 6/3 = 2, the slope of ℓ (θ = ${fmt((Math.atan(2) * 180) / Math.PI, 2)}°)`, close((Q0[1] - N0[1]) / (N0[0] - P0[0]), 2)]);
    out.push(['The feet L(1, 0) and M(4, 0) sit under P and Q', close(gdotAt(s, 'L')![0], 1) && close(gdotAt(s, 'M')![0], 4)]);
    out.push(stackedCheck(s, ['QN/PN', '6/3']));
    out.push(labelsCheck(s, ['tan θ = QN/PN = 6/3 = 2', 'ℓ', 'Q(4, 7)', 'P(1, 1)', 'θ', 'PN = x2 − x1 = 3', 'N', 'QN = y2 − y1 = 6', 'L', 'M']));
    out.push(noBadChars(s, fig93));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.4 · one line, many descriptions (Topic 02)                    */
/* ===================================================================== */
const CAP94 = `One line, many descriptions: 3${X} + 4${Y} − 18 = 0 carries a point ${I('P')}(−2,${NB}6) with its slope triangle (point-slope, ${I('m')} = −${fr('3', '4')}), the axis crossings ${I('A')}(6,${NB}0) and ${I('B')}(0,${NB}${fr('9', '2')}) (intercept form), and the perpendicular ${I('ON')} of length ${I('p')} = ${fr('18', '5')} at angle ${I('ω')} to the ${X}-axis (normal form).`;
const G94: Gr = { ox: 147.2, oy: 243.6, ux: 26, uy: 26, x: [-5.2, 6.9], y: [-1, 8.6] };
const L94 = (x: number) => (18 - 3 * x) / 4;
const N94: P = [(3 * 18) / 25, (4 * 18) / 25];
const fig94: Diagram = {
  id: 'm11-09-fig-9.4',
  topic: 2,
  name: 'One line, many descriptions',
  cases: [{ chip: '3x + 4y − 18 = 0', cap: CAP94 }],
  draw() {
    const s = new Sketch(W, 292), g = G94;
    axes(s, g, { xt: [-4, -2, 2, 4, 6], yt: [2, 4, 6, 8], xdx: { '6': -9 } });
    seg(s, g, [-2, 6], [-4, 6], { color: C.slate, w: 1.3, dash: '4 3', name: 'run' });
    seg(s, g, [-4, 6], [-4, 7.5], { color: C.slate, w: 1.3, dash: '4 3', name: 'rise' });
    rightMark(s, g, [-4, 6], [1, 0], [0, 1], 7, { color: C.slate });
    seg(s, g, [-5.1, L94(-5.1)], [6.9, L94(6.9)], { w: 2.2, name: 'line' });
    arr(s, gp(g, [0, 0]), gp(g, N94), { color: C.mari, w: 2, head: 8, name: 'ON' });
    rightMark(s, g, N94, [-3, -4], [4, -3], 7, { color: C.mari });
    arc(s, g, [0, 0], 23, 0, (Math.atan2(4, 3) * 180) / Math.PI, { color: C.mari, w: 1.8, name: 'omega' });
    gdot(s, g, [-2, 6], 'P'); gdot(s, g, [0, 4.5], 'B'); gdot(s, g, [6, 0], 'A');
    lab(s, 334, 34, `3${X} + 4${Y} − 18 = 0`, { anchor: 'end', size: 14 });
    lab(s, 80, 63, `${I('P')}(−2, 6)`, { anchor: 'start', size: 14 });
    lab(s, gx(g, -3), gy(g, 6) + 16, '2', { size: 13, color: C.slate });
    runs(s, gx(g, -4) - 10, gy(g, 6.75) + 4, [{ num: '3', den: '2' }], { anchor: 'end', size: 13, color: C.slate });
    runs(s, 10, gy(g, 4.2), [{ t: `${I('m')} = −` }, { num: '3', den: '4' }], { anchor: 'start', size: 13 });
    runs(s, gx(g, 0) + 11, gy(g, 4.5) - 13, [{ t: `${I('B')}(0, ` }, { num: '9', den: '2' }, { t: ')' }], { anchor: 'start', size: 14 });
    lab(s, gx(g, 6), g.oy + 37, `${I('A')}(6, 0)`, { size: 14 });
    lab(s, gp(g, N94)[0] + 10, gp(g, N94)[1] - 11, I('N'), { anchor: 'start', size: 15, color: C.amber });
    runs(s, 192, 214, [{ t: `${I('p')} = ` }, { num: '18', den: '5' }], { anchor: 'start', size: 13, color: C.amber });
    lab(s, gx(g, 0) + 36 * Math.cos(deg(26)), g.oy - 36 * Math.sin(deg(26)) + 5, I('ω'), { size: 15, color: C.amber });
    return s;
  },
  check() {
    const s = fig94.draw(fig94.cases[0]), out: Check[] = [], g = G94;
    const on = (p: P) => close(3 * p[0] + 4 * p[1] - 18, 0);
    out.push(['P(−2, 6), A(6, 0) and B(0, 9/2) lie on 3x + 4y − 18 = 0, and so does the whole drawn line', ['P', 'A', 'B'].every((n) => on(gdotAt(s, n)!)) && linesNamed(s, /^line$/)[0].pts.map((p) => unPx(g, p)).every((p) => close(3 * p[0] + 4 * p[1] - 18, 0, 1e-9))]);
    const run = linesNamed(s, /^run$/)[0].pts.map((p) => unPx(g, p)), rise = linesNamed(s, /^rise$/)[0].pts.map((p) => unPx(g, p));
    out.push([`The slope triangle from P: run ${fmt(Math.abs(run[1][0] - run[0][0]))} left, rise ${fmt(rise[1][1] - rise[0][1])} = 3/2 back to the line, so m = −(3/2)/2 = −3/4`, close(run[0][0] - run[1][0], 2, 1e-9) && close(rise[1][1] - rise[0][1], 1.5, 1e-9) && on(rise[1])]);
    const ON = linesNamed(s, /^ON$/)[0].pts.map((p) => unPx(g, p));
    out.push([`The normal ON ends at the foot N(${fmt(N94[0])}, ${fmt(N94[1])}) on the line, perpendicular to it, of length p = |−18|/5 = 18/5 = ${fmt(len(ON[0], ON[1]), 4)}`, close(len(ON[0], ON[1]), 18 / 5, 1e-9) && on(ON[1]) && close(ON[1][0] * 4 - ON[1][1] * 3, 0, 1e-9)]);
    out.push([`ω is the angle of ON with the x-axis: cos ω = 3/5, sin ω = 4/5 (ω = ${fmt((Math.atan2(4, 3) * 180) / Math.PI)}°), so 3x + 4y = 18 is x cos ω + y sin ω = 18/5`, close(Math.cos(Math.atan2(4, 3)), 3 / 5) && close(Math.sin(Math.atan2(4, 3)), 4 / 5) && close(18 / Math.hypot(3, 4), 18 / 5)]);
    out.push(stackedCheck(s, ['3/2', '3/4', '9/2', '18/5']));
    out.push(labelsCheck(s, ['3x + 4y − 18 = 0', 'P(−2, 6)', '2', '3/2', 'm = −3/4', 'B(0, 9/2)', 'A(6, 0)', 'N', 'p = 18/5', 'ω']));
    out.push(noBadChars(s, fig94));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.5 · the intercept form (Topic 02)                             */
/* ===================================================================== */
const CAP95 = `The intercept form ${fr(X, I('a'))} + ${fr(Y, I('b'))} = 1, drawn for the line 3${X} + 4${Y} = 18 of Topic 02’s third worked example: it cuts the axes at ${I('A')}(6,${NB}0) and ${I('B')}(0,${NB}${fr('9', '2')}) and closes a right triangle with the origin.`;
const G95: Gr = { ox: 64.5, oy: 230, ux: 35, uy: 35, x: [-1.5, 7.4], y: [-1, 6] };
const in95 = (p: P) => p[0] > 0 && p[1] > 0 && 3 * p[0] + 4 * p[1] < 18;
const fig95: Diagram = {
  id: 'm11-09-fig-9.5',
  topic: 2,
  name: 'The intercept form',
  cases: [{ chip: 'A(6, 0), B(0, 4.5)', cap: CAP95 }],
  draw() {
    const s = new Sketch(W, 285), g = G95;
    axes(s, g, { xt: [2, 4, 6], yt: [2, 4], zero: [-9, 18, 'end', I('O')] });
    seg(s, g, [-1.2, L94(-1.2)], [6.9, L94(6.9)], { w: 2.2, name: 'line' });
    rightMark(s, g, [0, 0], [1, 0], [0, 1], 10, { color: C.ink });
    gdot(s, g, [6, 0], 'A'); gdot(s, g, [0, 4.5], 'B');
    runs(s, gx(g, 0) + 10, gy(g, 4.5) - 15, [{ t: `${I('B')}(0, ${I('b')}) = (0, ` }, { num: '9', den: '2' }, { t: ')' }], { anchor: 'start', size: 14 });
    lab(s, gx(g, 6) - 4, g.oy + 42, `${I('A')}(${I('a')}, 0) = (6, 0)`, { size: 14 });
    lab(s, gx(g, 0) - 15, gy(g, 3) + 5, I('b'), { size: 16 });
    lab(s, gx(g, 3), g.oy + 22, I('a'), { size: 16 });
    runs(s, gx(g, 1.75), gy(g, 1.45), [{ num: X, den: I('a') }, { t: ' + ' }, { num: Y, den: I('b') }, { t: ' = 1' }], { anchor: 'middle', size: 15 });
    hatch(s, (p) => { const d = unPx(g, p); return in95(d) && toPoly(p, linesNamed(s, /^line$/)[0].pts) > 4 && p[0] > g.ox + 4 && p[1] < g.oy - 4 && !(p[0] < g.ox + 15 && p[1] > g.oy - 15); }, [g.ox, gy(g, 4.5), gx(g, 6), g.oy], { avoid: [[g.ox - 8, gy(g, 4.5) - 8, g.ox + 8, gy(g, 4.5) + 8], [gx(g, 6) - 8, g.oy - 8, gx(g, 6) + 8, g.oy + 8]] });
    return s;
  },
  check() {
    const s = fig95.draw(fig95.cases[0]), out: Check[] = [], g = G95;
    const A = gdotAt(s, 'A')!, B = gdotAt(s, 'B')!;
    out.push(['3x + 4y = 18 meets the axes at A(6, 0) and B(0, 9/2): a = 18/3 = 6, b = 18/4 = 9/2', close(3 * A[0] + 4 * A[1], 18) && close(3 * B[0] + 4 * B[1], 18) && A[0] === 6 && B[1] === 4.5]);
    out.push(['In intercept form x/6 + y/(9/2) = 1: (6, 0) and (0, 9/2) both satisfy it', close(A[0] / 6 + A[1] / 4.5, 1) && close(B[0] / 6 + B[1] / 4.5, 1)]);
    out.push([`The right triangle OAB hatched (${hatchN(s)} strokes), every stroke inside it; its area ½ · 6 · 9/2 = 27/2`, hatchN(s) > 20 && hatchAll(s, (p) => in95(unPx(g, p)))]);
    out.push(stackedCheck(s, ['9/2', 'x/a', 'y/b']));
    out.push(labelsCheck(s, ['B(0, b) = (0, 9/2)', 'A(a, 0) = (6, 0)', 'a', 'b', 'x/a + y/b = 1', 'O']));
    out.push(noBadChars(s, fig95));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.6 · the normal form (Topic 02)                                */
/* ===================================================================== */
const CAP96 = `The normal form ${X}${NB}cos${NB}${I('ω')} + ${Y}${NB}sin${NB}${I('ω')} = ${I('p')}, drawn with the exact values of Topic 02’s fourth worked example: ${I('p')} = 4 and ${I('ω')} = 120°, so the foot is ${I('N')}(−2,${NB}2√3) and the line is −${fr(X, '2')} + ${fr('√3', '2')}${Y} = 4.`;
const G96: Gr = { ox: 250, oy: 185, ux: 25, uy: 25, x: [-9.6, 3.1], y: [-1.2, 6.6] };
const L96 = (x: number) => (8 + x) / Math.sqrt(3);
const N96: P = [4 * Math.cos(deg(120)), 4 * Math.sin(deg(120))];
const fig96: Diagram = {
  id: 'm11-09-fig-9.6',
  topic: 2,
  name: 'The normal form',
  cases: [{ chip: 'p = 4, ω = 120°', cap: CAP96 }],
  draw() {
    const s = new Sketch(W, 232), g = G96;
    axes(s, g, { xt: [-8, -6, -4, -2, 2], yt: [2, 4, 6], xdx: { '-8': 7 }, yRight: ['4'], zero: [-9, 18, 'end', I('O')] });
    seg(s, g, [-9.5, L96(-9.5)], [1.9, L96(1.9)], { w: 2.2, name: 'line' });
    arr(s, gp(g, [0, 0]), gp(g, N96), { color: C.mari, w: 2, head: 8, name: 'ON' });
    rightMark(s, g, N96, [-N96[0], -N96[1]], [-Math.sqrt(3), -1], 7, { color: C.mari });
    arc(s, g, [0, 0], 37.5, 0, 120, { color: C.mari, w: 1.8, name: 'omega' });
    gdot(s, g, N96, 'N', C.mari);
    lab(s, 14, 38, `${X} cos ${I('ω')} + ${Y} sin ${I('ω')} = ${I('p')}`, { anchor: 'start', size: 14 });
    runs(s, 14, 72, [{ t: '−' }, { num: '1', den: '2' }, { t: `${X} + ` }, { num: '√3', den: '2' }, { t: `${Y} = 4` }], { anchor: 'start', size: 14 });
    lab(s, gx(g, N96[0]) - 4, gy(g, N96[1]) - 18, `${I('N')}(−2, 2√3)`, { anchor: 'end', size: 13.5, color: C.amber });
    lab(s, 212, 140, `${I('p')} = 4`, { anchor: 'end', size: 13.5, color: C.amber });
    lab(s, 270, 140, `${I('ω')} = 120°`, { anchor: 'start', size: 13.5, color: C.amber });
    return s;
  },
  check() {
    const s = fig96.draw(fig96.cases[0]), out: Check[] = [], g = G96;
    const N0 = gdotAt(s, 'N')!;
    out.push([`The foot N = (p cos ω, p sin ω) = (4 cos 120°, 4 sin 120°) = (${fmt(N0[0], 4)}, ${fmt(N0[1], 4)}) = (−2, 2√3)`, close(N0[0], -2, 1e-9) && close(N0[1], 2 * Math.sqrt(3), 1e-9)]);
    const on = (p: P) => close(-p[0] / 2 + (Math.sqrt(3) / 2) * p[1], 4, 1e-9);
    out.push(['x cos 120° + y sin 120° = 4 is −x/2 + (√3/2)y = 4: N lies on it, and so does the whole drawn line (x-intercept −8)', on(N0) && on([-8, 0]) && linesNamed(s, /^line$/)[0].pts.map((p) => unPx(g, p)).every(on)]);
    const ON = linesNamed(s, /^ON$/)[0].pts.map((p) => unPx(g, p));
    out.push([`ON has length p = ${fmt(len(ON[0], ON[1]), 4)} = 4 and is perpendicular to the line (direction (√3, 1))`, close(len(ON[0], ON[1]), 4, 1e-9) && close(ON[1][0] * Math.sqrt(3) + ON[1][1], 0, 1e-9)]);
    out.push(stackedCheck(s, ['1/2', '√3/2']));
    out.push(labelsCheck(s, ['x cos ω + y sin ω = p', '−1/2x + √3/2y = 4', 'N(−2, 2√3)', 'p = 4', 'ω = 120°', 'O']));
    out.push(noBadChars(s, fig96));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.7 · distance as a perpendicular drop (Topic 03)               */
/* ===================================================================== */
const CAP97 = `Distance as a perpendicular drop, which is a projection onto the normal: from ${I('P')}(3,${NB}−4) to 4${X} + 3${Y} − 5 = 0 the foot is ${I('Q')}(3.8,${NB}−3.4) and ${I('d')} = |${I('PQ')}| = 1, matching ${fr('|4(3) + 3(−4) − 5|', `√(${sq('4')} + ${sq('3')})`)}.`;
const G97: Gr = { ox: 94.5, oy: 125.6, ux: 33, uy: 33, x: [-2.5, 6.5], y: [-5.8, 3.2] };
const L97 = (x: number) => (5 - 4 * x) / 3;
const P97: P = [3, -4];
const T97 = -(4 * P97[0] + 3 * P97[1] - 5) / 25;
const Q97: P = [P97[0] + 4 * T97, P97[1] + 3 * T97];
const fig97: Diagram = {
  id: 'm11-09-fig-9.7',
  topic: 3,
  name: 'Distance as a perpendicular drop',
  cases: [{ chip: 'P(3, −4)', cap: CAP97 }],
  draw() {
    const s = new Sketch(W, 330), g = G97;
    axes(s, g, { xt: [-2, -1, 1, 2, 3, 4, 5, 6], yt: [-4, -2, 2], yRight: ['2'], xdx: { '1': -6 } });
    seg(s, g, [(5 - 3 * 3.2) / 4, 3.2], [(5 + 3 * 5.8) / 4, -5.8], { w: 2.2, name: 'line' });
    seg(s, g, P97, Q97, { color: C.mari, w: 2.6, name: 'PQ' });
    rightMark(s, g, Q97, [-4, -3], [-3, 4], 8, { color: C.mari });
    const n0: P = [3, L97(3)];
    arr(s, gp(g, n0), gp(g, [n0[0] + 1.3 * 0.8, n0[1] + 1.3 * 0.6]), { w: 2, head: 8, name: 'normal' });
    gdot(s, g, P97, 'P'); gdot(s, g, Q97, 'Q', C.mari);
    lab(s, gx(g, 0) + 10, 46, `4${X} + 3${Y} − 5 = 0`, { anchor: 'start', size: 14 });
    lab(s, 238, 164, 'normal', { anchor: 'start', size: 13 });
    lab(s, 238, 181, `(${I('A')}, ${I('B')}) = (4, 3)`, { anchor: 'start', size: 12.5 });
    lab(s, gx(g, Q97[0]) + 16, gy(g, Q97[1]) + 5, `${I('Q')}(3.8, −3.4)`, { anchor: 'start', size: 13.5, color: C.amber });
    lab(s, gx(g, 3) - 8, gy(g, -3.3), `${I('d')} = 1`, { anchor: 'end', size: 14, color: C.amber });
    lab(s, gx(g, 3) - 12, gy(g, -4.55) + 4, `${I('P')}(3, −4)`, { anchor: 'end', size: 14 });
    return s;
  },
  check() {
    const s = fig97.draw(fig97.cases[0]), out: Check[] = [], g = G97;
    const on = (p: P) => close(4 * p[0] + 3 * p[1] - 5, 0, 1e-9);
    out.push([`The foot Q = P + t(4, 3) with t = −(4·3 + 3·(−4) − 5)/25 = ${fmt(T97)}: Q = (${fmt(Q97[0])}, ${fmt(Q97[1])}) = (3.8, −3.4), on the line`, close(Q97[0], 3.8, 1e-9) && close(Q97[1], -3.4, 1e-9) && on(Q97) && on(gdotAt(s, 'Q')!)]);
    out.push([`d = |PQ| = ${fmt(len(P97, Q97), 6)} = |4(3) + 3(−4) − 5|/√(4² + 3²) = 5/5 = 1`, close(len(P97, Q97), 1, 1e-9) && close(Math.abs(4 * 3 + 3 * -4 - 5) / 5, 1)]);
    const nm = linesNamed(s, /^normal$/)[0].pts.map((p) => unPx(g, p)), d: P = [nm[1][0] - nm[0][0], nm[1][1] - nm[0][1]];
    out.push(['The normal arrow starts on the line and points along (A, B) = (4, 3), the way PQ runs', on(nm[0]) && close(d[0] * 3 - d[1] * 4, 0, 1e-9) && close((Q97[0] - P97[0]) * 3 - (Q97[1] - P97[1]) * 4, 0, 1e-9)]);
    out.push(['The whole drawn line is 4x + 3y − 5 = 0', linesNamed(s, /^line$/)[0].pts.map((p) => unPx(g, p)).every(on)]);
    out.push(labelsCheck(s, ['4x + 3y − 5 = 0', 'normal', '(A, B) = (4, 3)', 'Q(3.8, −3.4)', 'd = 1', 'P(3, −4)']));
    out.push(noBadChars(s, fig97));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.8 · the foot and the image (Topic 06)                         */
/* ===================================================================== */
const CAP98 = `One step ${I('t')} along the normal lands on the foot, two steps land on the image: for ${I('P')}(2,${NB}3) and the line ${X} + ${Y} − 1 = 0, ${I('t')} = −2 gives ${I('Q')}(0,${NB}1) and 2${I('t')} gives ${I('P')}′(−2,${NB}−1), with ${I('PQ')} = ${I('QP')}′.`;
const G98: Gr = { ox: 163.8, oy: 168.5, ux: 33, uy: 33, x: [-4.6, 4.9], y: [-4, 4.5] };
const P98: P = [2, 3];
const T98 = -(P98[0] + P98[1] - 1) / 2;
const Q98: P = [P98[0] + T98, P98[1] + T98], R98: P = [P98[0] + 2 * T98, P98[1] + 2 * T98];
const fig98: Diagram = {
  id: 'm11-09-fig-9.8',
  topic: 6,
  name: 'The foot and the image of a point',
  cases: [{ chip: 'P(2, 3)', cap: CAP98 }],
  draw() {
    const s = new Sketch(W, 312), g = G98;
    axes(s, g, { xt: [-4, -2, 2, 4], yt: [-2, 2, 4] });
    seg(s, g, [-3.4, 4.4], [4.2, -3.2], { w: 2.2, name: 'line l' });
    seg(s, g, P98, Q98, { color: C.mari, w: 2.4, name: 'PQ' });
    seg(s, g, Q98, R98, { color: C.mari, w: 2.4, dash: '7 5', name: 'QP′' });
    rightMark(s, g, Q98, [1, 1], [1, -1], 9, { color: C.mari });
    crossMark(s, g, [(P98[0] + Q98[0]) / 2, (P98[1] + Q98[1]) / 2], [1, 1], 7, { color: C.mari, name: 'step 1' });
    crossMark(s, g, [(Q98[0] + R98[0]) / 2, (Q98[1] + R98[1]) / 2], [1, 1], 7, { color: C.mari, name: 'step 2' });
    arr(s, gp(g, [3, -2]), gp(g, [3.75, -1.25]), { w: 2, head: 8, name: 'normal' });
    gdot(s, g, P98, 'P'); gdot(s, g, Q98, 'Q', C.mari); gdot(s, g, R98, 'P′');
    lab(s, gx(g, 2) + 10, gy(g, 3) - 1, `${I('P')}(2, 3)`, { anchor: 'start', size: 14 });
    lab(s, gx(g, 1.3), gy(g, 0.55), `${I('Q')}(0, 1)`, { anchor: 'start', size: 14, color: C.amber });
    lab(s, gx(g, -2) - 10, gy(g, -1) + 15, `${I('P')}′(−2, −1)`, { anchor: 'end', size: 14 });
    lab(s, gx(g, 1) + 9, gy(g, 2) + 17, I('t'), { anchor: 'start', size: 14, color: C.amber });
    lab(s, gx(g, -1) + 9, gy(g, 0) + 18, I('t'), { anchor: 'start', size: 14, color: C.amber });
    lab(s, gx(g, -3.5), gy(g, 3.4) + 5, I('ℓ'), { size: 16 });
    lab(s, 240, 200, `(${I('a')}, ${I('b')}) = (1, 1)`, { anchor: 'start', size: 12.5 });
    lab(s, 14, gy(g, -2.6), `${I('ℓ')}: ${X} + ${Y} − 1 = 0`, { anchor: 'start', size: 14 });
    lab(s, 14, gy(g, -3.45), `${I('PQ')} = ${I('QP')}′`, { anchor: 'start', size: 14, color: C.amber });
    return s;
  },
  check() {
    const s = fig98.draw(fig98.cases[0]), out: Check[] = [], g = G98;
    out.push([`t = −(2 + 3 − 1)/(1² + 1²) = ${fmt(T98)} = −2: the foot Q = (2 + t, 3 + t) = (${fmt(Q98[0])}, ${fmt(Q98[1])}) lies on x + y − 1 = 0`, T98 === -2 && Q98[0] === 0 && Q98[1] === 1 && onLine(1, 1, -1, gdotAt(s, 'Q')!)]);
    out.push([`Two steps: P′ = (2 + 2t, 3 + 2t) = (${fmt(R98[0])}, ${fmt(R98[1])}), and PQ = QP′ = ${fmt(len(P98, Q98), 4)} = 2√2`, R98[0] === -2 && R98[1] === -1 && close(len(P98, Q98), len(Q98, R98)) && close(len(P98, Q98), 2 * Math.SQRT2)]);
    const pq = linesNamed(s, /^PQ$/)[0].pts.map((p) => unPx(g, p));
    out.push(['PQ runs along the normal (1, 1), at right angles to ℓ, whose whole drawn length is x + y − 1 = 0', close(pq[1][0] - pq[0][0], pq[1][1] - pq[0][1], 1e-9) && linesNamed(s, /^line l$/)[0].pts.map((p) => unPx(g, p)).every((p) => onLine(1, 1, -1, p))]);
    out.push(labelsCheck(s, ['P(2, 3)', 'Q(0, 1)', 'P′(−2, −1)', 't', 'ℓ', '(a, b) = (1, 1)', 'ℓ: x + y − 1 = 0', 'PQ = QP′']));
    out.push(noBadChars(s, fig98));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.9 · the four centres (Topic 07), one family per chip           */
/* ===================================================================== */
const CAP99 = `All four centres of one scalene triangle ${I('A')}(0,${NB}0), ${I('B')}(6,${NB}0), ${I('C')}(1,${NB}9): the medians meet at ${I('G')}(${fr('7', '3')},${NB}3), the internal bisectors at ${I('I')} ≈ (2.380,${NB}2.130) with its incircle, the perpendicular bisectors at ${I('O')}(3,${NB}${fr('38', '9')}) with its circumcircle, and the altitudes at ${I('H')}(1,${NB}${fr('5', '9')}). ${I('O')}, ${I('G')}, ${I('H')} lie on the Euler line with ${I('OG')}${NB}∶${NB}${I('GH')} = 1${NB}∶${NB}2; the incentre does not.`;
const G99: Gr = { ox: 84.8, oy: 311.2, ux: 28, uy: 28, x: [-2.6, 8.6], y: [-1.4, 10.6] };
const TA: P = [0, 0], TB: P = [6, 0], TC: P = [1, 9];
const mid = (a: P, b: P): P => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const SA = len(TB, TC), SB = len(TC, TA), SC = len(TA, TB);
const G9: P = [(TA[0] + TB[0] + TC[0]) / 3, (TA[1] + TB[1] + TC[1]) / 3];
const I9: P = [(SA * TA[0] + SB * TB[0] + SC * TC[0]) / (SA + SB + SC), (SA * TA[1] + SB * TB[1] + SC * TC[1]) / (SA + SB + SC)];
const R_IN = 27 / ((SA + SB + SC) / 2);
const O9: P = [3, 38 / 9];
const R_OUT = len(O9, TA);
const H9: P = [1, 5 / 9];
/** The foot of the perpendicular from p to the line ab. */
const foot = (p: P, a: P, b: P): P => { const d: P = [b[0] - a[0], b[1] - a[1]], k = ((p[0] - a[0]) * d[0] + (p[1] - a[1]) * d[1]) / (d[0] ** 2 + d[1] ** 2); return [a[0] + k * d[0], a[1] + k * d[1]]; };
/** Where the bisector from v meets the opposite side ab: it splits ab in the ratio va : vb. */
const bisFoot = (v: P, a: P, b: P): P => { const la = len(v, a), lb = len(v, b); return [(lb * a[0] + la * b[0]) / (la + lb), (lb * a[1] + la * b[1]) / (la + lb)]; };
type Case99 = { chip: string; cap: string; fam: 'med' | 'bis' | 'perp' | 'alt' | 'euler' };
const fig99: Diagram = {
  id: 'm11-09-fig-9.9',
  topic: 7,
  name: 'The four centres of a triangle',
  cases: [
    { chip: 'Medians', cap: CAP99, fam: 'med' },
    { chip: 'Bisectors', cap: CAP99, fam: 'bis' },
    { chip: 'Perpendicular bisectors', cap: CAP99, fam: 'perp' },
    { chip: 'Altitudes', cap: CAP99, fam: 'alt' },
    { chip: 'Euler line', cap: CAP99, fam: 'euler' },
  ] as Case99[],
  draw(c: Case99) {
    const s = new Sketch(W, 358), g = G99, V = [TA, TB, TC], col = C.mari;
    axes(s, g, c.fam === 'perp' ? { xt: [-2, 2, 4, 6, 8], yt: [2, 4, 6, 8, 10], xdx: { '2': 3, '4': -3 }, yRight: ['8'], ydy: { '8': 5 } } : { xt: [-2, 2, 4, 6, 8], yt: [2, 4, 6, 8, 10] });
    const circle = (cen: P, r: number, name: string, color: string) => path(s, Array.from({ length: 181 }, (_, i): P => gp(g, [cen[0] + r * Math.cos((2 * Math.PI * i) / 180), cen[1] + r * Math.sin((2 * Math.PI * i) / 180)])), { color, w: 1.4, name });
    let centre: P = G9, cname = 'G', head = '';
    if (c.fam === 'med') {
      V.forEach((v, i) => seg(s, g, v, mid(V[(i + 1) % 3], V[(i + 2) % 3]), { color: col, w: 1.8, dash: '6 4', name: `median:${i}` }));
      head = `medians → ${I('G')}`;
    } else if (c.fam === 'bis') {
      circle(I9, R_IN, 'incircle', col);
      V.forEach((v, i) => seg(s, g, v, bisFoot(v, V[(i + 1) % 3], V[(i + 2) % 3]), { color: col, w: 1.8, dash: '1.5 3.5', name: `bisector:${i}` }));
      centre = I9; cname = 'I'; head = `internal bisectors → ${I('I')}`;
    } else if (c.fam === 'perp') {
      circle(O9, R_OUT, 'circumcircle', col);
      V.forEach((v, i) => {
        const m = mid(V[(i + 1) % 3], V[(i + 2) % 3]), d = len(m, O9), k = (d + 0.6) / d;
        seg(s, g, m, [m[0] + (O9[0] - m[0]) * k, m[1] + (O9[1] - m[1]) * k], { color: col, w: 1.8, dash: '8 3 1.5 3', name: `perp:${i}` });
      });
      centre = O9; cname = 'O'; head = `perp. bisectors → ${I('O')}`;
    } else if (c.fam === 'alt') {
      V.forEach((v, i) => seg(s, g, v, foot(v, V[(i + 1) % 3], V[(i + 2) % 3]), { color: col, w: 1.6, name: `altitude:${i}` }));
      centre = H9; cname = 'H'; head = `altitudes → ${I('H')}`;
    }
    path(s, [gp(g, TA), gp(g, TB), gp(g, TC), gp(g, TA)], { w: 2.4, name: 'triangle' });
    if (c.fam === 'euler') {
      const d: P = [O9[0] - H9[0], O9[1] - H9[1]], at = (t: number): P => [H9[0] + t * d[0], H9[1] + t * d[1]];
      seg(s, g, at(-0.42), at(1.72), { color: col, w: 2, name: 'Euler line' });
      // the book's ticks across OG and GH, marked 1 and 2
      crossMark(s, g, mid(O9, G9), d, 6, { color: C.ink, w: 1.6, name: 'tick OG' });
      crossMark(s, g, mid(G9, H9), d, 6, { color: C.ink, w: 1.6, name: 'tick GH' });
      lab(s, gx(g, mid(O9, G9)[0]) - 15, gy(g, mid(O9, G9)[1]) - 2, '1', { size: 13 });
      lab(s, gx(g, mid(G9, H9)[0]) - 15, gy(g, mid(G9, H9)[1]) - 2, '2', { size: 13 });
      lab(s, gx(g, at(1.72)[0]) + 8, gy(g, at(1.72)[1]) + 4, 'Euler line', { anchor: 'start', size: 14, color: C.amber });
      gdot(s, g, G9, 'G'); gdot(s, g, I9, 'I'); gdot(s, g, O9, 'O'); gdot(s, g, H9, 'H');
      lab(s, gx(g, G9[0]) + 10, gy(g, G9[1]) + 5, I('G'), { anchor: 'start', size: 15 });
      lab(s, gx(g, I9[0]) + 10, gy(g, I9[1]) + 5, I('I'), { anchor: 'start', size: 15 });
      lab(s, gx(g, O9[0]) - 9, gy(g, O9[1]) - 2, I('O'), { anchor: 'end', size: 15 });
      lab(s, gx(g, H9[0]) - 8, gy(g, H9[1]) - 12, I('H'), { anchor: 'end', size: 15 });
    } else {
      gdot(s, g, centre, cname, col, 4);
      const off: Record<string, [number, number, 'start' | 'end']> = { G: [16, 2, 'start'], I: [18, 2, 'start'], O: [-8, -11, 'end'], H: [-8, -12, 'end'] };
      lab(s, gx(g, centre[0]) + off[cname][0], gy(g, centre[1]) + off[cname][1], I(cname), { anchor: off[cname][2], size: 15, color: C.amber });
      lab(s, 336, 30, head, { anchor: 'end', size: 14, color: C.amber });
    }
    V.forEach((v, i) => gdot(s, g, v, ['A', 'B', 'C'][i]));
    lab(s, gx(g, 0) - 6, g.oy + 36, `${I('A')}(0, 0)`, { anchor: 'end', size: 14 });
    lab(s, gx(g, 6), g.oy + 36, `${I('B')}(6, 0)`, { size: 14 });
    lab(s, 127, 40, `${I('C')}(1, 9)`, { size: 14 });
    return s;
  },
  check(c: Case99) {
    const s = fig99.draw(c), out: Check[] = [], g = G99, V = [TA, TB, TC];
    const meets = (re: RegExp, p: P) => linesNamed(s, re).every((l) => { const q = l.pts.map((x) => unPx(g, x)); return toPoly(p, q) < 1e-6 || Math.abs((q[1][0] - q[0][0]) * (p[1] - q[0][1]) - (q[1][1] - q[0][1]) * (p[0] - q[0][0])) < 1e-6; });
    if (c.fam === 'med') {
      out.push([`G = ((0 + 6 + 1)/3, (0 + 0 + 9)/3) = (${fmt(G9[0], 4)}, ${fmt(G9[1])}) = (7/3, 3)`, close(G9[0], 7 / 3) && close(G9[1], 3)]);
      out.push(['Each median runs from a vertex to the midpoint of the opposite side, and all three pass through G', linesNamed(s, /^median:/).length === 3 && meets(/^median:/, G9)]);
    } else if (c.fam === 'bis') {
      out.push([`a = √106, b = √82, c = 6: I = (aA + bB + cC)/(a + b + c) = (${fmt(I9[0], 3)}, ${fmt(I9[1], 3)}) ≈ (2.380, 2.130)`, fmt(I9[0], 3) === '2.38' && fmt(I9[1], 3) === '2.13']);
      out.push([`The three bisectors pass through I, and the incircle's radius r = area/s = 27/${fmt((SA + SB + SC) / 2, 3)} = ${fmt(R_IN, 3)} is I's height above AB`, linesNamed(s, /^bisector:/).length === 3 && meets(/^bisector:/, I9) && close(R_IN, I9[1], 1e-9)]);
    } else if (c.fam === 'perp') {
      out.push([`O(3, 38/9): x = 3 from AB, and OA² = 9 + (38/9)² = OC² = 4 + (38/9 − 9)²; R = ${fmt(R_OUT, 3)}`, close(len(O9, TA), len(O9, TB)) && close(len(O9, TA), len(O9, TC))]);
      out.push(['Each perpendicular bisector leaves its side’s midpoint at right angles and passes through O', linesNamed(s, /^perp:/).length === 3 && meets(/^perp:/, O9) && V.every((v, i) => { const a = V[(i + 1) % 3], b = V[(i + 2) % 3], m = mid(a, b); return close((O9[0] - m[0]) * (b[0] - a[0]) + (O9[1] - m[1]) * (b[1] - a[1]), 0, 1e-9); })]);
    } else if (c.fam === 'alt') {
      out.push([`H(1, 5/9): the altitude from C is x = 1, the one from A is 9y = 5x (at right angles to BC's (−5, 9))`, close(H9[0], 1) && close(9 * H9[1], 5 * H9[0]) && close((H9[0] - TB[0]) * (TC[0] - TA[0]) + (H9[1] - TB[1]) * (TC[1] - TA[1]), 0, 1e-9)]);
      out.push(['Each altitude ends at the foot of its perpendicular on the opposite side, and all three pass through H', linesNamed(s, /^altitude:/).length === 3 && meets(/^altitude:/, H9)]);
    } else {
      const og = len(O9, G9), gh = len(G9, H9);
      out.push([`O, G, H on one line, with H = 3G − 2O and OG : GH = ${fmt(og, 4)} : ${fmt(gh, 4)} = 1 : 2`, close(3 * G9[0] - 2 * O9[0], H9[0]) && close(3 * G9[1] - 2 * O9[1], H9[1]) && close(gh / og, 2)]);
      const dI = Math.abs((O9[0] - H9[0]) * (I9[1] - H9[1]) - (O9[1] - H9[1]) * (I9[0] - H9[0])) / len(O9, H9);
      out.push([`The incentre is off the Euler line by ${fmt(dI, 3)} units`, dI > 0.1]);
    }
    out.push(labelsCheck(s, ['A(0, 0)', 'B(6, 0)', 'C(1, 9)', ...(c.fam === 'euler' ? ['G', 'I', 'O', 'H', 'Euler line', '1', '2'] : [{ med: 'medians → G', bis: 'internal bisectors → I', perp: 'perp. bisectors → O', alt: 'altitudes → H' }[c.fam]])]));
    out.push(noBadChars(s, fig99));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional Topics "Figure 1" · the midpoint locus (Additional topic E)  */
/* ===================================================================== */
const CAPE1 = `The line moves, the midpoint traces: three members of the family of lines through the fixed point ${I('R')}(3,${NB}4), with the midpoints of their intercept segments ${I('AB')} lying on the locus ${fr('3', X)} + ${fr('4', Y)} = 2.`;
const GE1: Gr = { ox: 27.2, oy: 265, ux: 19, uy: 19, x: [-0.8, 15.6], y: [-1, 12.9] };
const LOC = (x: number) => (4 * x) / (2 * x - 3);
const FAM: [number, number][] = [[4.5, 12], [9, 6], [15, 5]];
const figE1: Diagram = {
  id: 'm11-09-E-d1',
  topic: 13,
  name: 'The locus of the midpoint',
  cases: [{ chip: 'Lines through R(3, 4)', cap: CAPE1 }],
  draw() {
    const s = new Sketch(W, 300), g = GE1;
    axes(s, g, { xt: [2, 4, 6, 8, 10, 12, 14], yt: [2, 4, 6, 8, 10, 12], xdx: { '4': -4 } });
    path(s, Array.from({ length: 241 }, (_, i): P => { const x = 1.79 + ((15.6 - 1.79) * i) / 240; return gp(g, [x, LOC(x)]); }), { color: C.mari, w: 2, dash: '6 4', name: 'locus' });
    FAM.forEach(([a, b], i) => seg(s, g, [0, b], [a, 0], { w: i === 1 ? 2 : 1.6, name: `line:${i}` }));
    FAM.forEach(([a, b], i) => { gdot(s, g, [0, b], `B${i}`); gdot(s, g, [a, 0], `A${i}`); });
    FAM.forEach(([a, b], i) => gdot(s, g, [a / 2, b / 2], `mid${i}`, C.mari));
    gdot(s, g, [3, 4], 'R');
    lab(s, gx(g, 0) + 8, gy(g, 6) - 8, I('B'), { anchor: 'start', size: 14 });
    lab(s, gx(g, 9) + 5, g.oy - 11, I('A'), { anchor: 'start', size: 14 });
    lab(s, gx(g, 4.6), gy(g, 1.8) + 5, I('M'), { size: 14, color: C.amber });
    lab(s, gx(g, 3) + 9, gy(g, 4) - 8, `${I('R')}(3, 4)`, { anchor: 'start', size: 14 });
    runs(s, gx(g, 9.3), gy(g, 5), [{ t: 'locus: ' }, { num: '3', den: X }, { t: ' + ' }, { num: '4', den: Y }, { t: ' = 2' }], { anchor: 'start', size: 14, color: C.amber });
    return s;
  },
  check() {
    const s = figE1.draw(figE1.cases[0]), out: Check[] = [], g = GE1;
    out.push(['Each line x/a + y/b = 1 passes through R(3, 4): 3/4.5 + 4/12 = 3/9 + 4/6 = 3/15 + 4/5 = 1', FAM.every(([a, b]) => close(3 / a + 4 / b, 1))]);
    const mids = FAM.map((_, i) => gdotAt(s, `mid${i}`)!);
    out.push([`The midpoints (a/2, b/2) = ${mids.map((m) => `(${fmt(m[0])}, ${fmt(m[1])})`).join(', ')} satisfy 3/x + 4/y = 2 (a = 2h, b = 2k)`, mids.every((m) => close(3 / m[0] + 4 / m[1], 2)) && close(mids[1][0], 4.5) && close(mids[1][1], 3)]);
    const loc = linesNamed(s, /^locus$/)[0].pts.map((p) => unPx(g, p));
    out.push(['The dashed curve is 3/x + 4/y = 2 all along (it also passes through R itself, 3/3 + 4/4 = 2)', loc.every((p) => close(3 / p[0] + 4 / p[1], 2, 1e-9)) && close(3 / 3 + 4 / 4, 2)]);
    out.push(stackedCheck(s, ['3/x', '4/y']));
    out.push(labelsCheck(s, ['B', 'A', 'M', 'R(3, 4)', 'locus: 3/x + 4/y = 2', '14', '12']));
    out.push(noBadChars(s, figE1));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional Topics "Figure 2" · three regimes (Topic 08), one per chip   */
/* ===================================================================== */
const CAP081 = `One equation, three regimes, decided by the sign of ${sq(I('h'))} − ${I('ab')}: two distinct lines, one doubled line, or the origin alone.`;
type Case081 = { chip: string; cap: string; k: 'a' | 'b' | 'c' };
/** The three specimens: [a, h, b] of ax² + 2hxy + by² = 0. */
const SPEC: Record<Case081['k'], [number, number, number]> = { a: [6, 2.5, -6], b: [1, 2, 4], c: [1, 0, 1] };
const G081: Gr = { ox: 170, oy: 110, ux: 40, uy: 40, x: [-2.6, 2.6], y: [-1.8, 1.8] };
const fig081: Diagram = {
  id: 'm11-09-08-d1',
  topic: 8,
  name: 'Three regimes of a pair of lines',
  cases: [
    { chip: 'h² > ab', cap: CAP081, k: 'a' },
    { chip: 'h² = ab', cap: CAP081, k: 'b' },
    { chip: 'h² < ab', cap: CAP081, k: 'c' },
  ] as Case081[],
  draw(c: Case081) {
    const s = new Sketch(W, 236), g = G081;
    path(s, [gp(g, [g.x[0], 0]), gp(g, [g.x[1], 0])], { color: C.slate, w: 1.1, name: 'axis:x' });
    path(s, [gp(g, [0, g.y[0]]), gp(g, [0, g.y[1]])], { color: C.slate, w: 1.1, name: 'axis:y' });
    let title = '', eq = '';
    if (c.k === 'a') {
      // 6x² + 5xy − 6y² = (3x − 2y)(2x + 3y): y = 3x/2 and y = −2x/3
      seg(s, g, [-1.1, -1.65], [1.1, 1.65], { w: 2.2, name: 'y = 3x/2' });
      seg(s, g, [-1.7, 1.7 * (2 / 3)], [1.7, -1.7 * (2 / 3)], { w: 2.2, color: C.mari, name: 'y = −2x/3' });
      arc(s, g, [0, 0], 30, (Math.atan(-2 / 3) * 180) / Math.PI, (Math.atan(1.5) * 180) / Math.PI, { name: 'theta' });
      lab(s, g.ox + 38, g.oy - 8, I('θ'), { anchor: 'start', size: 16 });
      title = `(a) ${sq(I('h'))} > ${I('ab')}`; eq = `6${sq(X)} + 5${I('xy')} − 6${sq(Y)} = 0`;
    } else if (c.k === 'b') {
      // x² + 4xy + 4y² = (x + 2y)²: the line y = −x/2, twice: one heavy stroke through the origin
      seg(s, g, [-1.8, 0.9], [1.8, -0.9], { w: 4.4, name: 'doubled' });
      lab(s, g.ox, 26, 'coincident pair', { size: 14 });
      title = `(b) ${sq(I('h'))} = ${I('ab')}`; eq = `${sq(X)} + 4${I('xy')} + 4${sq(Y)} = 0`;
    } else {
      gdot(s, g, [0, 0], 'origin', C.mari, 6);
      lab(s, g.ox, 26, 'the origin only', { size: 14, color: C.amber });
      title = `(c) ${sq(I('h'))} < ${I('ab')}`; eq = `${sq(X)} + ${sq(Y)} = 0`;
    }
    lab(s, g.ox, 206, title, { size: 14 });
    lab(s, g.ox, 226, eq, { size: 14 });
    return s;
  },
  check(c: Case081) {
    const s = fig081.draw(c), out: Check[] = [], g = G081, [a, h, b] = SPEC[c.k], D = h * h - a * b;
    out.push([`a = ${fmt(a)}, h = ${fmt(h)}, b = ${fmt(b)}: h² − ab = ${fmt(D)} ${c.k === 'a' ? '> 0, two distinct lines' : c.k === 'b' ? '= 0, one doubled line' : '< 0, the origin only'}`, c.k === 'a' ? D > 0 : c.k === 'b' ? close(D, 0) : D < 0]);
    if (c.k === 'a') {
      const sl = linesNamed(s, /^y = /).map((l) => { const q = l.pts.map((p) => unPx(g, p)); return (q[1][1] - q[0][1]) / (q[1][0] - q[0][0]); });
      out.push([`Both drawn lines satisfy 6x² + 5xy − 6y² = 0 (slopes ${sl.map((m) => fmt(m, 4)).join(', ')}), and since a + b = 0 they cross at θ = 90°`, sl.length === 2 && sl.every((m) => close(a + 2 * h * m + b * m * m, 0, 1e-9)) && close(sl[0] * sl[1], -1, 1e-9)]);
    } else if (c.k === 'b') {
      const q = linesNamed(s, /^doubled$/).map((l) => l.pts.map((p) => unPx(g, p)));
      out.push(['x² + 4xy + 4y² = (x + 2y)²: one heavy stroke, the line x + 2y = 0 itself, through the origin', q.length === 1 && q[0].every((p) => Math.abs(p[0] + 2 * p[1]) < 1e-9) && linesNamed(s, /^y = |^copy:/).length === 0]);
    } else out.push(['x² + y² = 0 only at (0, 0): the one filled dot', gdotsOf(s).length === 1 && close(gdotAt(s, 'origin')![0], 0) && close(gdotAt(s, 'origin')![1], 0)]);
    out.push(labelsCheck(s, c.k === 'a' ? ['(a) h2 > ab', '6x2 + 5xy − 6y2 = 0', 'θ'] : c.k === 'b' ? ['(b) h2 = ab', 'x2 + 4xy + 4y2 = 0', 'coincident pair'] : ['(c) h2 < ab', 'x2 + y2 = 0', 'the origin only']));
    out.push(noBadChars(s, fig081));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional Topics "Figure 3" · homogenising a chord (Topic 08)          */
/* ===================================================================== */
const CAP082 = `Homogenising replaces “curve and chord” by “the pair of lines you actually care about”: the chord 2${X} + 3${Y} − 13 = 0 meets the conic ${I('S')} = 0 at ${I('P')}(2,${NB}3) and ${I('Q')}(5,${NB}1), and ${I('OP')}, ${I('OQ')} together are the single homogeneous pair 3${sq(X)} − 17${I('xy')} + 10${sq(Y)} = 0, whose full lines run backwards through ${I('O')} as well.`;
const G082: Gr = { ox: 97, oy: 185, ux: 25, uy: 25, x: [-3.4, 9.2], y: [-3, 6.6] };
const ELL = { cx: 5, cy: 3, a: 3, b: 2 };
const onEll = (p: P) => ((p[0] - ELL.cx) / ELL.a) ** 2 + ((p[1] - ELL.cy) / ELL.b) ** 2;
const fig082: Diagram = {
  id: 'm11-09-08-d2',
  topic: 8,
  name: 'Homogenising a curve with a chord',
  cases: [{ chip: 'P(2, 3), Q(5, 1)', cap: CAP082 }],
  draw() {
    const s = new Sketch(W, 262), g = G082;
    axes(s, g, { xt: [-2, 2, 4, 6, 8], yt: [-2, 2, 4, 6], xdy: { '-2': -28 } });
    path(s, Array.from({ length: 181 }, (_, i): P => gp(g, [ELL.cx + ELL.a * Math.cos((2 * Math.PI * i) / 180), ELL.cy + ELL.b * Math.sin((2 * Math.PI * i) / 180)])), { w: 1.8, name: 'conic' });
    seg(s, g, [1, 11 / 3], [6.4, (13 - 12.8) / 3], { w: 1.5, name: 'chord' });
    seg(s, g, [0, 0], [2.8, 4.2], { color: C.mari, w: 2.2, name: 'OP' });
    seg(s, g, [0, 0], [6.3, 1.26], { color: C.mari, w: 2.2, name: 'OQ' });
    seg(s, g, [0, 0], [-1.8, -2.7], { color: C.mari, w: 1.6, dash: '5 4', name: 'OP back' });
    seg(s, g, [0, 0], [-3.2, -0.64], { color: C.mari, w: 1.6, dash: '5 4', name: 'OQ back' });
    arc(s, g, [0, 0], 30, (Math.atan(0.2) * 180) / Math.PI, (Math.atan(1.5) * 180) / Math.PI, { name: 'theta' });
    gdot(s, g, [2, 3], 'P'); gdot(s, g, [5, 1], 'Q');
    lab(s, gx(g, 0) + 9, 48, `2${X} + 3${Y} − 13 = 0`, { anchor: 'start', size: 13.5 });
    lab(s, gx(g, 7.6), gy(g, 5.2), `${I('S')} = 0`, { anchor: 'start', size: 14 });
    lab(s, 150, 76, `${I('P')}(2, 3)`, { anchor: 'end', size: 13.5 });
    lab(s, gx(g, 5) + 2, gy(g, 1) - 20, `${I('Q')}(5, 1)`, { anchor: 'start', size: 12.5 });
    lab(s, gx(g, 0) + 38, gy(g, 0) - 22, I('θ'), { anchor: 'start', size: 15 });
    lab(s, gx(g, 0) - 33, gy(g, 0) + 26, I('O'), { size: 14 });
    lab(s, 336, gy(g, -2.35), `${I('OP')}, ${I('OQ')}: 3${sq(X)} − 17${I('xy')} + 10${sq(Y)} = 0`, { anchor: 'end', size: 13.5, color: C.amber });
    return s;
  },
  check() {
    const s = fig082.draw(fig082.cases[0]), out: Check[] = [], g = G082;
    const P0 = gdotAt(s, 'P')!, Q0 = gdotAt(s, 'Q')!;
    out.push(['P(2, 3) and Q(5, 1) lie on the chord 2x + 3y − 13 = 0 (4 + 9 − 13 = 10 + 3 − 13 = 0), and so does the whole drawn chord', onLine(2, 3, -13, P0) && onLine(2, 3, -13, Q0) && linesNamed(s, /^chord$/)[0].pts.map((p) => unPx(g, p)).every((p) => onLine(2, 3, -13, p, 1e-9))]);
    out.push(['The drawn conic S = 0 passes through P and Q: (x − 5)²/9 + (y − 3)²/4 = 1 at both', close(onEll(P0), 1) && close(onEll(Q0), 1)]);
    const pair = (p: P) => 3 * p[0] ** 2 - 17 * p[0] * p[1] + 10 * p[1] ** 2;
    out.push(['3x² − 17xy + 10y² = (3x − 2y)(x − 5y): zero all along OP and OQ and their dashed backward halves', pair(P0) === 0 && pair(Q0) === 0 && linesNamed(s, /^O[PQ]/).every((l) => l.pts.map((p) => unPx(g, p)).every((p) => Math.abs(pair(p)) < 1e-9))]);
    out.push(['The rays OP, OQ run through P and Q (slopes 3/2 and 1/5)', [['OP', P0], ['OQ', Q0]].every(([n, q]) => { const e = linesNamed(s, new RegExp(`^${n}$`))[0].pts.map((p) => unPx(g, p))[1]; return close(e[1] / e[0], (q as P)[1] / (q as P)[0], 1e-9); })]);
    out.push(labelsCheck(s, ['2x + 3y − 13 = 0', 'S = 0', 'P(2, 3)', 'Q(5, 1)', 'θ', 'O', 'OP, OQ: 3x2 − 17xy + 10y2 = 0']));
    out.push(noBadChars(s, fig082));
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 11 Chapter 9, Straight Lines: the book's figures. */
export const DIAGRAMS_MATHEMATICS_11_09: Diagram[] = [fig91, fig92, fig93, fig94, fig95, fig96, fig97, fig98, fig99, fig081, fig082, figE1];

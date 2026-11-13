import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import { stixW } from '@/lib/diagrams/mathematics-11-03b';

/**
 * MATHEMATICS CLASS 11, CHAPTER 12 (Limits and Derivatives): every drawing of the Master Reference book (October
 * edition) on pp. 1062–1137, redrawn. The numbered figures stand on their own "CHAPTER 12 · FIGURES" plates, the page
 * after their caption; the Additional Topics part prints its own "Figure 1" in the text.
 *
 *   Figure 12.1 (p. 1063; caption p. 1062), one-sided limits that meet, and a jump, Topic 01, topic index 0.
 *   Figure 12.2 (p. 1070; caption p. 1069), sin x against x in three shrinking windows, Topic 02, index 1.
 *   Figure 12.3 (p. 1073; caption p. 1072), the unit-circle sandwich at x = 40°, Topic 02, index 1.
 *   Figure 12.4 (p. 1078; caption p. 1077), four secants closing on the tangent, Topic 03, index 2.
 *   Figure 12.5 (p. 1085; caption p. 1084), the chain rule as a 60-30-10 gear train, Topic 04, index 3.
 *   Figure 12.6 (p. 1091; caption p. 1090), (3x² + 5)/(6x² − x) settling onto y = 1/2, and the staircase [x], Topic 05, index 4.
 *   Figure 12.7 (p. 1100; caption p. 1099), the re-zeroed axis, and sin x against x and x − x³/6, Topic 06, index 5.
 *   Figure 12.8 (p. 1109; caption p. 1108), y = √(x² + x) + x as x → −∞, Topic 06 (its second worked example), index 5.
 *   Figure 12.9 (p. 1120; caption p. 1119), a gap, a corner and a smooth junction, Additional topic B, index 8.
 *   The Additional Topics part's "Figure 1" (p. 1126), the car and the train, m11-12-07-d1, Topic 07, index 6.
 *
 * ONE HIGHLIGHT. The book's orange is the marigold: 12.1 the approach arrows and the jump; 12.2 y = x; 12.3 the
 * triangle OAT (OA, AT, OT, T) and tan x, with the triangle OAP hatched in the same colour; 12.4 the tangent and its
 * label; 12.5 the small gear, its arrow and its labels; 12.6 the asymptote y = 1/2, the asymptote x = 1/6 (the added
 * chip) and the LHL/RHL arrow; 12.7 the dashed link and the cubic; 12.8 the asymptote y = −1/2; 12.9 the gap arrow and
 * the tangent; 07-d1 the "function limit ⇒ sequence limit" arrow and L = 0. The book's navy, teal and green are ink,
 * its grey slate.
 *
 * NO FILLS. 12.3's teal triangle OAP is marigold hatching (the thin sliver between the chord PA and the arc, pale in
 * the book, is left plain: the heavy arc marks the sector); 12.5's solid hub of the large gear is an outline. No grid
 * lines (12.2's window edges, 12.6, 12.8, 07-d1): the axes, ticks and numbers carry the scale.
 *
 * DOTS. Every point on a graph is a filled dot (decision 10); an open ring only where the point is not part of the
 * graph: 12.1 (left: the hole at (1, 3); right: both ends at a = 1, as printed, f(1) being left undefined), 12.6's
 * staircase (the right end of each step) and 12.9's gap (the start of 2x − 0.5).
 *
 * DEPARTURES, for a phone: side-by-side panels are chips (12.1, 12.2, 12.6, 12.7, 12.9); axis names the book runs up
 * the page are set level; 12.2's labels y = x and y = sin x stand in its first chip only, as printed. 12.6 (see
 * mw122 B1): the curve is the true graph of f(x) = (3x² + 5)/(6x² − x) in the book's window, which already looks as
 * printed, because at that scale x = 1/6 is 2 px from x = 0 and the branch on 0 < x < 1/6 lies below −120; an added
 * chip "Close to x = 0" (not in the book) shows the fall to −∞ as x → 0⁺ and the second asymptote x = 1/6. 12.8's
 * radical is written √(x² + x) with brackets. 07-d1's em dashes "the car — x slides:" become brackets "the car
 * (x slides):". Every fraction on a drawing is stacked by hand. No em dash.
 */

const W = 340;
type P = [number, number];
const DEG = Math.PI / 180;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<\/?(?:i|sub|sup|b|frac|num|den)>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const I = (t: string) => `<i>${t}</i>`;
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const X = I('x'), Y = I('y'), A = I('a'), H = I('h'), N = I('n');
const AN = `${I('a')}<sub>${N}</sub>`;
const sq = (t: string) => `${t}<sup>2</sup>`;

/* ---------- lines, labels and the layout checks (as in mathematics-11-08.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean | string; name?: string; free?: boolean };
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
const dashAttr = (d: Stroke['dash']) => (d === true ? ' stroke-dasharray="5 4"' : d ? ` stroke-dasharray="${d}"` : '');
/** A polyline; `free` leaves it out of the clearance check (a leader that ends at its own label). */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  if (!o.free) keep(s, pts, o.name);
}
/** An arrow with a small filled head at b (and at a too when `both`); the head shrinks on a short arrow. */
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
/** A circular arc (math angles, degrees, y up) ending in an arrowhead at a1. */
function arcArrow(s: Sketch, c: P, r: number, a0: number, a1: number, o: Stroke = {}) {
  const n = 40, pts = Array.from({ length: n + 1 }, (_, i): P => { const t = (a0 + ((a1 - a0) * i) / n) * DEG; return [c[0] + r * Math.cos(t), c[1] - r * Math.sin(t)]; });
  path(s, pts.slice(0, n - 3), { ...o, w: o.w ?? 1.6 });
  arr(s, pts[n - 4], pts[n], { color: o.color, w: o.w ?? 1.6, head: 7, name: o.name });
  return pts;
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
function crowded(s: Sketch): string[] {
  const out: string[] = [];
  for (const { pts, name: ln } of LINES.get(s) ?? []) for (const l of s.labels) { const d = boxToLine(l.rect, pts); if (d < LABEL_GAP - 1e-9) out.push(`"${l.text}" ${fmt(d, 1)} px from the ${ln || 'line'}`); }
  return [...new Set(out)];
}
const clearCheck = (s: Sketch): Check => {
  const bad = crowded(s);
  return [`Every label stays at least ${LABEL_GAP} px clear of every line, dot and hatch stroke${bad.length ? `: ${bad.join('; ')}` : ''}`, bad.length === 0];
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
/** No em dash, no vulgar-fraction character and no one-line fraction outside a raised run, in anything the drawing shows. */
const noBadChars = (s: Sketch, d: Diagram): Check => {
  const unraised = (h: string) => plain(h.replace(/<sup>.*?<\/sup>/g, '').replace(/<frac>.*?<\/frac>/g, ''));
  // "x (above) / n (below)" is two names side by side, not a fraction (07-d1, as printed).
  const all = [...s.texts.map((t) => unraised(t.html)), d.name, ...d.cases.flatMap((c) => [c.chip, unraised(c.cap)])].join(' ').replace('(above) / ', '');
  return ['No em dash, no vulgar-fraction character and no slash fraction in the labels, name, chips or captions', !/[—¼-¾⅐-⅞]/.test(all) && !/[\w)!]\s*\/\s*[\w(]/.test(all)];
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
  return [x - w / 2, numY - size * 0.72 - (/<sup>/.test(num) ? size * 0.2 : 0), x + w / 2, denY + size * 0.22];
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
  return [`Every fraction on the drawing is stacked by hand (${f.length}: ${[...new Set(got)].join(', ')}), numerator over the rule over denominator`, ok];
};

/* ---------- dots: filled on the graph, a ring where the point is left out ---------- */
const DOTS = new WeakMap<Sketch, { p: P; name: string; open: boolean }[]>();
const DOT_R = 3.6, RING_R = 4.2;
function pt(s: Sketch, p: P, name: string, col: string = C.ink, r = DOT_R) {
  s.dot(p[0], p[1], r, col);
  keep(s, Array.from({ length: 25 }, (_, i): P => [p[0] + (r + 1) * Math.cos((2 * Math.PI * i) / 24), p[1] + (r + 1) * Math.sin((2 * Math.PI * i) / 24)]), `dot:${name}`);
  DOTS.set(s, [...(DOTS.get(s) ?? []), { p, name, open: false }]);
}
function ring(s: Sketch, p: P, name: string, col: string = C.ink, r = RING_R) {
  s.point(p[0], p[1], r, `<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="${r}" fill="#fff" stroke="${col}" stroke-width="1.8"/>`);
  keep(s, Array.from({ length: 25 }, (_, i): P => [p[0] + (r + 1) * Math.cos((2 * Math.PI * i) / 24), p[1] + (r + 1) * Math.sin((2 * Math.PI * i) / 24)]), `ring:${name}`);
  DOTS.set(s, [...(DOTS.get(s) ?? []), { p, name, open: true }]);
}
const dotsOf = (s: Sketch) => DOTS.get(s) ?? [];
const dotAt = (s: Sketch, name: string) => dotsOf(s).find((d) => d.name === name);

/* ---------- hatching: the book's shading, as marigold lines (mathematics-11-05.ts) ---------- */
const HATCH = new WeakMap<Sketch, [P, P][]>();
function hatch(s: Sketch, inside: (p: P) => boolean, bx: Rect, o: { step?: number; gap?: number } = {}): [P, P][] {
  const step = (o.step ?? 7) * Math.SQRT2, gap = o.gap ?? LABEL_GAP + 1, avoid = s.labels.map((l) => l.rect);
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
const hatchSegs = (s: Sketch) => HATCH.get(s) ?? [];
/** Distance from p to a polyline. */
function toPoly(p: P, pts: P[]): number {
  let d = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy || 1;
    const k = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L));
    d = Math.min(d, Math.hypot(p[0] - a[0] - k * dx, p[1] - a[1] - k * dy));
  }
  return d;
}

/* ---------- graphs ---------- */
type Gr = { x: [number, number]; y: [number, number]; L: number; R: number; B: number; T: number };
const gx = (g: Gr, v: number) => g.L + ((v - g.x[0]) / (g.x[1] - g.x[0])) * (g.R - g.L);
const gy = (g: Gr, v: number) => g.B - ((v - g.y[0]) / (g.y[1] - g.y[0])) * (g.B - g.T);
const gp = (g: Gr, p: P): P => [gx(g, p[0]), gy(g, p[1])];
const unPx = (g: Gr, p: P): P => [g.x[0] + ((p[0] - g.L) / (g.R - g.L)) * (g.x[1] - g.x[0]), g.y[0] + ((g.B - p[1]) / (g.B - g.T)) * (g.y[1] - g.y[0])];
const curve = (g: Gr, f: (x: number) => number, a: number, b: number, n = 240): P[] => Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return gp(g, [x, f(x)]); });
/** Every kept line of one name, its points back in data units: what the checks test is what is drawn. */
const drawn = (s: Sketch, g: Gr, name: string): P[] => (LINES.get(s) ?? []).filter((l) => l.name === name).flatMap((l) => l.pts.map((p) => unPx(g, p)));
/** The x- and y-axes through the origin, arrowed, over xr and yr (data), named at their ends ('' for no name). */
function axes(s: Sketch, g: Gr, xr: [number, number], yr: [number, number], o: { xName?: string; yName?: string; size?: number } = {}) {
  const size = o.size ?? 15;
  arr(s, gp(g, [xr[0], 0]), gp(g, [xr[1], 0]), { w: 1.3, head: 7, name: 'axis:x' });
  arr(s, gp(g, [0, yr[0]]), gp(g, [0, yr[1]]), { w: 1.3, head: 7, name: 'axis:y' });
  if (o.xName !== '') lab(s, gx(g, xr[1]) + 5, gy(g, 0) + 5, o.xName ?? X, { anchor: 'start', size });
  if (o.yName !== '') lab(s, gx(g, 0) + 7, gy(g, yr[1]) + 9, o.yName ?? Y, { anchor: 'start', size });
}
/** A short tick across an axis. */
const xtick = (s: Sketch, g: Gr, v: number) => path(s, [[gx(g, v), gy(g, 0) - 3.5], [gx(g, v), gy(g, 0) + 3.5]], { color: C.slate, w: 1.1, name: 'tick' });
const ytick = (s: Sketch, g: Gr, v: number) => path(s, [[gx(g, 0) - 3.5, gy(g, v)], [gx(g, 0) + 3.5, gy(g, v)]], { color: C.slate, w: 1.1, name: 'tick' });

/* ===================================================================== */
/* Figure 12.1 · one-sided limits that meet, and a jump (Topic 01, p. 1063) */
/* ===================================================================== */
const CAP121 = 'Left, both one-sided limits reach 3, so the limit exists; right, a jump where they do not.';
type Case121 = { chip: string; cap: string; panel: 'meet' | 'jump' };
const G121A: Gr = { x: [-1.85, 2.75], y: [-0.7, 5.5], L: 16, R: 316, B: 222, T: 20 };
const G121B: Gr = { x: [-1.7, 2.6], y: [-0.45, 3.6], L: 16, R: 316, B: 222, T: 20 };
const f121 = (x: number) => x * x + x + 1;
const fig121: Diagram = {
  id: 'm11-12-fig-12.1',
  topic: 0,
  name: 'One-sided limits that meet, and a jump',
  cases: [{ chip: 'Limit exists', cap: CAP121, panel: 'meet' }, { chip: 'Jump: no limit', cap: CAP121, panel: 'jump' }] as Case121[],
  draw(c: Case121) {
    const s = new Sketch(W, 276);
    if (c.panel === 'meet') {
      const g = G121A, hole = gp(g, [1, 3]);
      axes(s, g, [-1.85, 2.6], [-0.7, 5.5]);
      path(s, curve(g, f121, -1.85, 1.65), { w: 2.1, name: 'curve' });
      path(s, [gp(g, [-1.85, 3]), [hole[0] - RING_R - 1, hole[1]]], { color: C.slate, w: 1.1, dash: '4 3', name: 'level 3' });
      path(s, [[hole[0], hole[1] + RING_R + 1], gp(g, [1, 0])], { color: C.slate, w: 1.1, dash: '4 3', name: 'x = 1' });
      ring(s, hole, 'hole');
      lab(s, gx(g, -1.78), gy(g, 3) - 8, `${I('L')} = 3`, { anchor: 'start', size: 13.5, color: C.slate });
      lab(s, gx(g, 1), gy(g, 0) + 19, `${A} = 1`, { size: 13.5, color: C.slate });
      arr(s, gp(g, [0.25, 0.32]), gp(g, [0.88, 0.32]), { color: C.mari, w: 1.6, head: 6, name: 'from the left' });
      arr(s, gp(g, [1.85, 0.32]), gp(g, [1.12, 0.32]), { color: C.mari, w: 1.6, head: 6, name: 'from the right' });
      lab(s, gx(g, 0.56), gy(g, 0.32) - 7, `${X} → ${A}<sup>−</sup>`, { size: 12.5, color: C.amber });
      lab(s, gx(g, 1.49), gy(g, 0.32) - 7, `${X} → ${A}<sup>+</sup>`, { size: 12.5, color: C.amber });
      lab(s, W / 2, 248, 'LHL = RHL = 3', { size: 14 });
      lab(s, W / 2, 267, 'limit exists', { size: 13.5 });
      return s;
    }
    const g = G121B, lo = gp(g, [1, 1]), hi = gp(g, [1, 3]);
    axes(s, g, [-1.7, 2.6], [-0.45, 3.6]);
    path(s, curve(g, (x) => x * x, -1.7, 1, 120), { w: 2.1, name: 'left piece' });
    path(s, [hi, gp(g, [2.45, 4 - 2.45])], { w: 2.1, name: 'right piece' });
    path(s, [gp(g, [-1.7, 3]), [hi[0] - RING_R - 1, hi[1]]], { color: C.slate, w: 1.1, dash: '4 3', name: 'level 3' });
    path(s, [gp(g, [-1.7, 1]), [lo[0] - RING_R - 1, lo[1]]], { color: C.slate, w: 1.1, dash: '4 3', name: 'level 1' });
    path(s, [[lo[0], lo[1] + RING_R + 1], gp(g, [1, 0])], { color: C.slate, w: 1.1, dash: '4 3', name: 'x = 1' });
    ring(s, lo, 'LHL');
    ring(s, hi, 'RHL');
    arr(s, [lo[0], lo[1] - RING_R - 2], [hi[0], hi[1] + RING_R + 2], { color: C.mari, w: 1.6, both: true, head: 6, name: 'jump' });
    lab(s, lo[0] + 8, gy(g, 2) + 4, 'jump', { anchor: 'start', size: 13, color: C.amber });
    lab(s, gx(g, -1.62), gy(g, 3) - 8, '3', { anchor: 'start', size: 13.5, color: C.slate });
    lab(s, gx(g, -1.62), gy(g, 1) - 8, '1', { anchor: 'start', size: 13.5, color: C.slate });
    lab(s, gx(g, 1), gy(g, 0) + 19, `${A} = 1`, { size: 13.5, color: C.slate });
    lab(s, W / 2, 248, 'LHL = 1 ≠ 3 = RHL', { size: 14 });
    lab(s, W / 2, 267, 'no limit', { size: 13.5 });
    return s;
  },
  check(c: Case121) {
    const s = fig121.draw(c), out: Check[] = [];
    if (c.panel === 'meet') {
      const g = G121A, h = dotAt(s, 'hole')!, hp = unPx(g, h.p), cv = drawn(s, g, 'curve');
      out.push([`The curve is y = x² + x + 1, heading to ${fmt(f121(1))} from both sides of a = 1: LHL = RHL = 3`, cv.every((p) => close(p[1], f121(p[0]), 1e-6)) && close(f121(1 - 1e-6), 3, 1e-5) && close(f121(1 + 1e-6), 3, 1e-5)]);
      out.push([`The hole (an open ring, the point left out) sits at (${fmt(hp[0])}, ${fmt(hp[1])}) = (1, 3), on the curve`, h.open && close(hp[0], 1) && close(hp[1], 3)]);
      const l = linesNamed(s, /^from the left$/)[0].pts, r = linesNamed(s, /^from the right$/)[0].pts, a = gx(g, 1);
      out.push(['The two approach arrows point at a = 1, one from each side', l[0][0] < l[1][0] && l[1][0] < a && r[0][0] > r[1][0] && r[1][0] > a]);
      out.push(labelsCheck(s, ['L = 3', 'a = 1', 'x → a−', 'x → a+', 'LHL = RHL = 3', 'limit exists', 'x', 'y']));
    } else {
      const g = G121B, lo = unPx(g, dotAt(s, 'LHL')!.p), hi = unPx(g, dotAt(s, 'RHL')!.p);
      const L = drawn(s, g, 'left piece'), R = drawn(s, g, 'right piece');
      out.push([`Left of a = 1 the graph is y = x², heading to ${fmt(lo[1])}; right of it y = 4 − x, heading to ${fmt(hi[1])}: LHL = 1 ≠ 3 = RHL`, L.every((p) => close(p[1], p[0] * p[0], 1e-6)) && R.every((p) => close(p[1], 4 - p[0], 1e-6)) && close(lo[1], 1) && close(hi[1], 3) && close(lo[0], 1) && close(hi[0], 1)]);
      out.push(['Both ends at a = 1 are open rings, as printed: the drawing gives no value f(1)', dotsOf(s).every((d) => d.open)]);
      const j = linesNamed(s, /^jump$/)[0].pts.map((p) => unPx(g, p));
      out.push(['The jump arrow runs up x = 1 between the two rings (1 to 3)', close(j[0][0], 1) && close(j[1][0], 1) && j[0][1] > 1 && j[1][1] < 3]);
      out.push(labelsCheck(s, ['jump', '3', '1', 'a = 1', 'LHL = 1 ≠ 3 = RHL', 'no limit']));
    }
    out.push(noBadChars(s, fig121));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 12.2 · sin x against x in three windows (Topic 02, p. 1070)    */
/* ===================================================================== */
const CAP122 = 'sin <i>x</i> and <i>x</i> at three shrinking windows: the gap falls from 1.09 to 0.0003, faster than the window shrinks (from 55% of its half-width to 0.24%), so the ratio tends to 1.';
type Case122 = { chip: string; cap: string; w: number; gap: string };
const fig122: Diagram = {
  id: 'm11-12-fig-12.2',
  topic: 1,
  name: 'sin x against x in three shrinking windows',
  cases: [
    { chip: '|x| ≤ 2', cap: CAP122, w: 2, gap: '1.09' },
    { chip: '|x| ≤ 0.5', cap: CAP122, w: 0.5, gap: '0.0206' },
    { chip: '|x| ≤ 0.12', cap: CAP122, w: 0.12, gap: '0.000288' },
  ] as Case122[],
  draw(c: Case122) {
    const s = new Sketch(W, 284), w = c.w, g: Gr = { x: [-w, w], y: [-w, w], L: 80, R: 260, B: 212, T: 32 };
    axes(s, g, [-1.15 * w, 1.15 * w], [-w, 1.12 * w]);
    path(s, curve(g, (x) => x, -w, w, 2), { color: C.mari, w: 1.8, dash: '6 4', name: 'y = x' });
    path(s, curve(g, Math.sin, -w, w), { w: 2.2, name: 'y = sin x' });
    [-w, w].forEach((v) => { xtick(s, g, v); lab(s, gx(g, v), gy(g, 0) + 17, fmt(v), { size: 12, color: C.slate }); });
    if (w === 2) {
      lab(s, gx(g, -1.92), gy(g, 1.62), `${Y} = ${X}`, { anchor: 'start', size: 14, color: C.amber });
      lab(s, gx(g, 0.22), gy(g, -1.55), `${Y} = sin ${X}`, { anchor: 'start', size: 14 });
    }
    lab(s, W / 2, 246, `|${X}| ≤ ${fmt(w)}`, { size: 14 });
    lab(s, W / 2, 270, `gap = ${c.gap}`, { size: 14 });
    return s;
  },
  check(c: Case122) {
    const s = fig122.draw(c), out: Check[] = [], w = c.w, gap = w - Math.sin(w);
    out.push([`At the window's edge x = ${fmt(w)}: x − sin x = ${gap.toPrecision(4)}, printed ${c.gap}`, Number(c.gap) === +gap.toPrecision(3)]);
    out.push(['The gap shrinks faster than the window: the ratio sin x / x at the edge tends to 1', w === 2 ? Math.sin(w) / w < Math.sin(0.5) / 0.5 && Math.sin(0.5) / 0.5 < Math.sin(0.12) / 0.12 && 1 - Math.sin(0.12) / 0.12 < 0.003 : true]);
    const g: Gr = { x: [-w, w], y: [-w, w], L: 80, R: 260, B: 212, T: 32 };
    out.push(['The solid curve is y = sin x and the dashed line y = x, over [−w, w]', drawn(s, g, 'y = sin x').every((p) => close(p[1], Math.sin(p[0]), 1e-9)) && drawn(s, g, 'y = x').every((p) => close(p[1], p[0], 1e-9))]);
    out.push(labelsCheck(s, [`|x| ≤ ${fmt(w)}`, `gap = ${c.gap}`, fmt(-w), fmt(w), ...(w === 2 ? ['y = x', 'y = sin x'] : [])]));
    out.push(noBadChars(s, fig122));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 12.3 · the unit-circle sandwich (Topic 02, p. 1073)           */
/* ===================================================================== */
const CAP123 = 'The unit-circle sandwich at <i>x</i> = 40 degrees: triangle <i>OAP</i> inside sector <i>OAP</i> inside triangle <i>OAT</i>.';
const O123: P = [76, 226], R123 = 200, ANG = 40;
const fig123: Diagram = {
  id: 'm11-12-fig-12.3',
  topic: 1,
  name: 'The unit-circle sandwich',
  cases: [{ chip: 'Three areas', cap: CAP123 }],
  draw() {
    const s = new Sketch(W, 352), [ox, oy] = O123, R = R123, t = ANG * DEG;
    const Ap: P = [ox + R, oy], Pp: P = [ox + R * Math.cos(t), oy - R * Math.sin(t)], Tp: P = [ox + R, oy - R * Math.tan(t)], Np: P = [Pp[0], oy];
    const at = (a: number, r = R): P => [ox + r * Math.cos(a * DEG), oy - r * Math.sin(a * DEG)];
    path(s, [[26, oy], [334, oy]], { w: 1.3, name: 'x-axis' });
    path(s, [[ox, oy + 38], [ox, 18]], { w: 1.3, name: 'y-axis' });
    path(s, Array.from({ length: 41 }, (_, i) => at(ANG + ((112 - ANG) * i) / 40)), { color: C.slate, w: 1.3, name: 'unit circle' });
    path(s, Array.from({ length: 41 }, (_, i) => at((ANG * i) / 40)), { w: 2.8, name: 'arc AP' });
    path(s, [Pp, Ap], { color: C.slate, w: 1, name: 'chord PA' });
    path(s, [Pp, Np], { w: 1.7, name: 'sin x' });
    path(s, Array.from({ length: 21 }, (_, i) => at((ANG * i) / 20, 56)), { w: 1.2, name: 'angle' });
    path(s, [O123, Ap], { color: C.mari, w: 2.2, name: 'OA' });
    path(s, [O123, Tp], { color: C.mari, w: 2.2, name: 'OT' });
    path(s, [Ap, Tp], { color: C.mari, w: 2.2, name: 'AT' });
    lab(s, ox + 42, oy - 13, X, { size: 15 });
    lab(s, Pp[0] + 2, Pp[1] - 16, I('P'), { size: 15 });
    lab(s, Tp[0] + 10, Tp[1] + 2, I('T'), { anchor: 'start', size: 15, color: C.amber });
    lab(s, Ap[0] + 8, (Tp[1] + oy) / 2 + 5, `tan ${X}`, { anchor: 'start', size: 14, color: C.amber });
    lab(s, Pp[0] - 7, (Pp[1] + oy) / 2 + 12, `sin ${X}`, { anchor: 'end', size: 14 });
    lab(s, ox - 12, oy + 20, I('O'), { size: 15 });
    lab(s, Ap[0] + 12, oy + 21, I('A'), { size: 15 });
    runs(s, W / 2, 298, [{ num: '1', den: '2' }, { t: ' sin <i>x</i> ≤ ' }, { num: '1', den: '2' }, { t: '<i>x</i> ≤ ' }, { num: '1', den: '2' }, { t: 'tan <i>x</i>' }], { size: 15, anchor: 'middle' });
    lab(s, W / 2, 340, '△<i>OAP</i> ⊂ sector <i>OAP</i> ⊂ △<i>OAT</i>', { size: 14, color: C.slate });
    // the triangle OAP, hatched: inside its three sides and clear of every line inside it
    const side = (a: P, b: P, p: P) => (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
    const inner = (LINES.get(s) ?? []).filter((l) => ['sin x', 'angle'].includes(l.name)).map((l) => l.pts);
    hatch(s, (p) => side(O123, Ap, p) < 0 && side(Ap, Pp, p) < 0 && side(Pp, O123, p) < 0 && toPoly(p, [O123, Ap]) > 3 && toPoly(p, [Ap, Pp]) > 3 && toPoly(p, [Pp, O123]) > 3 && inner.every((q) => toPoly(p, q) > 3), [ox, Pp[1], Ap[0], oy], { step: 7 });
    pt(s, O123, 'O');
    pt(s, Ap, 'A');
    pt(s, Pp, 'P');
    pt(s, Tp, 'T', C.mari);
    return s;
  },
  check() {
    const s = fig123.draw(fig123.cases[0]), out: Check[] = [], t = ANG * DEG, u = (p: P): P => [(p[0] - O123[0]) / R123, (O123[1] - p[1]) / R123];
    const P_ = u(dotAt(s, 'P')!.p), T_ = u(dotAt(s, 'T')!.p), A_ = u(dotAt(s, 'A')!.p);
    out.push([`P = (cos 40°, sin 40°) = (${fmt(P_[0], 3)}, ${fmt(P_[1], 3)}) on the unit circle; A = (1, 0)`, close(Math.hypot(P_[0], P_[1]), 1) && close(Math.atan2(P_[1], P_[0]), t) && close(A_[0], 1) && close(A_[1], 0)]);
    out.push([`T is on the tangent at A (x = 1) and on OP produced: AT = tan 40° = ${fmt(T_[1], 3)}`, close(T_[0], 1) && close(T_[1], Math.tan(t)) && close(T_[1] / T_[0], P_[1] / P_[0])]);
    const a1 = Math.sin(t) / 2, a2 = t / 2, a3 = Math.tan(t) / 2;
    out.push([`Areas: ½ sin x = ${fmt(a1, 4)} ≤ ½ x = ${fmt(a2, 4)} ≤ ½ tan x = ${fmt(a3, 4)}`, a1 < a2 && a2 < a3]);
    const O = O123, Ap: P = [O[0] + R123, O[1]], Pp = dotAt(s, 'P')!.p, side = (a: P, b: P, p: P) => (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
    const inT = (p: P) => side(O, Ap, p) <= 0 && side(Ap, Pp, p) <= 0 && side(Pp, O, p) <= 0;
    out.push([`The triangle OAP is hatched (${hatchSegs(s).length} strokes), every stroke inside it`, hatchSegs(s).length > 20 && hatchSegs(s).every(([a, b]) => inT(a) && inT(b))]);
    out.push(stackedCheck(s, ['1/2', '1/2', '1/2']));
    out.push(labelsCheck(s, ['O', 'A', 'P', 'T', 'x', 'sin x', 'tan x', '1/2 sin x ≤ 1/2x ≤ 1/2tan x', '△OAP ⊂ sector OAP ⊂ △OAT']));
    out.push(noBadChars(s, fig123));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 12.4 · secants closing on the tangent (Topic 03, p. 1078)      */
/* ===================================================================== */
const CAP124 = 'Four secants through <i>P</i>, of slopes 2.000, 1.700, 1.475 and 1.325, closing on the tangent slope 1.2.';
/** s = t²/5 at t = 3: s′(3) = 1.2, and the secant over h has slope 1.2 + h/5 (h = 4, 2.5, 1.375, 0.625). */
const s124 = (t: number) => (t * t) / 5, T0 = 3, HS = [4, 2.5, 1.375, 0.625];
const G124: Gr = { x: [-0.5, 9.6], y: [-0.8, 13.6], L: 10, R: 333.2, B: 236, T: 50 };
const fig124: Diagram = {
  id: 'm11-12-fig-12.4',
  topic: 2,
  name: 'Secants closing on the tangent',
  cases: [{ chip: 'Secants and tangent', cap: CAP124 }],
  draw() {
    const s = new Sketch(W, 262), g = G124, S = I('s'), T = I('t'), s0 = s124(T0);
    axes(s, g, [-0.5, 9.2], [-0.8, 13.6], { xName: T, yName: S });
    path(s, [gp(g, [T0, 0]), gp(g, [T0, 10.4])], { color: C.slate, w: 0.8, name: 'guide' });
    lab(s, gx(g, T0), gy(g, 0) + 17, T, { size: 14, color: C.slate });
    path(s, curve(g, s124, 0, 8.1), { w: 2.2, name: 'curve' });
    const ends: number[] = [];
    HS.forEach((h) => {
      const m = (s124(T0 + h) - s0) / h;
      path(s, [gp(g, [2.125, s0 + m * (2.125 - T0)]), gp(g, [8.25, s0 + m * (8.25 - T0)])], { color: C.slate, w: 1.2, name: `secant:${h}` });
      ends.push(gy(g, s0 + m * (8.25 - T0)));
    });
    // the slope labels at the secants' right ends, pushed apart where two ends crowd (a leader to the moved one)
    const ys = [...ends];
    for (let i = 1; i < ys.length; i++) ys[i] = Math.max(ys[i], ys[i - 1] + 15.5);
    HS.forEach((h, i) => {
      const x0 = gx(g, 8.25), m = (s124(T0 + h) - s0) / h;
      if (ys[i] - ends[i] > 1) path(s, [[x0 + 1, ends[i]], [x0 + 5, ys[i]]], { color: C.slate, w: 0.9, free: true });
      lab(s, x0 + 6, ys[i] + 4.5, m.toFixed(3), { anchor: 'start', size: 13, color: C.slate });
    });
    path(s, [gp(g, [1.375, s0 + 1.2 * (1.375 - T0)]), gp(g, [7.74, s0 + 1.2 * (7.74 - T0)])], { color: C.mari, w: 2.3, name: 'tangent' });
    HS.forEach((h, i) => pt(s, gp(g, [T0 + h, s124(T0 + h)]), `Q${i + 1}`, C.ink, 2.8));
    pt(s, gp(g, [T0, s0]), 'P', C.ink, 4);
    const Pp = gp(g, [T0, s0]), Q1 = gp(g, [T0 + HS[0], s124(T0 + HS[0])]), Q4 = gp(g, [T0 + HS[3], s124(T0 + HS[3])]);
    lab(s, Pp[0] - 9, Pp[1] - 13, I('P'), { anchor: 'end', size: 15 });
    lab(s, Q1[0] - 8, Q1[1] - 9, `${I('Q')}<sub>1</sub>`, { anchor: 'end', size: 14 });
    lab(s, Q4[0] + 5, Q4[1] + 18, `${I('Q')}<sub>4</sub>`, { anchor: 'start', size: 14 });
    lab(s, W - 22, gy(g, 0) + 19, `tangent: slope ${S}′(${T}) = 1.200`, { anchor: 'end', size: 13, color: C.amber });
    runs(s, gx(g, 0) + 22, 34, [{ t: 'secant slope = ' }, { num: `${S}(${T} + ${H}) − ${S}(${T})`, den: H }], { size: 13, color: C.slate });
    arr(s, gp(g, [6.0, 10.6]), gp(g, [3.35, 5.45]), { w: 1.4, head: 7, name: 'h → 0' });
    lab(s, gx(g, T0) - 6, gy(g, 5.45) + 6, `${H} → 0`, { anchor: 'end', size: 13.5 });
    return s;
  },
  check() {
    const s = fig124.draw(fig124.cases[0]), out: Check[] = [], g = G124, s0 = s124(T0);
    const slopes = HS.map((h) => { const l = linesNamed(s, new RegExp(`^secant:${h}$`))[0].pts.map((p) => unPx(g, p)); return (l[1][1] - l[0][1]) / (l[1][0] - l[0][0]); });
    out.push([`The drawn secants' slopes: ${slopes.map((m) => m.toFixed(3)).join(', ')}, as printed (2.000, 1.700, 1.475, 1.325)`, slopes.map((m) => m.toFixed(3)).join() === '2.000,1.700,1.475,1.325']);
    out.push(['Each secant runs through P and through its Q on the curve s = t²/5 (h = 4, 2.5, 1.375, 0.625)', HS.every((h, i) => { const q = unPx(g, dotAt(s, `Q${i + 1}`)!.p); return close(q[1], s124(q[0])) && close(slopes[i], (q[1] - s0) / (q[0] - T0)); })]);
    const tg = linesNamed(s, /^tangent$/)[0].pts.map((p) => unPx(g, p));
    out.push([`The tangent at P has slope s′(3) = 2 × 3 / 5 = ${fmt((tg[1][1] - tg[0][1]) / (tg[1][0] - tg[0][0]), 3)} = 1.200, and the slopes fall towards it as h → 0`, close((tg[1][1] - tg[0][1]) / (tg[1][0] - tg[0][0]), 1.2) && close((2 * T0) / 5, 1.2) && slopes.every((m, i) => m > 1.2 && (i === 0 || m < slopes[i - 1]))]);
    out.push(stackedCheck(s, ['s(t + h) − s(t)/h']));
    out.push(labelsCheck(s, ['P', 'Q1', 'Q4', 's', 't', '2.000', '1.700', '1.475', '1.325', 'tangent: slope s′(t) = 1.200', 'h → 0', 'secant slope = s(t + h) − s(t)/h']));
    out.push(noBadChars(s, fig124));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 12.5 · the chain rule as a gear train (Topic 04, p. 1085)      */
/* ===================================================================== */
const DU = I('du'), DX = I('dx'), DY = I('dy');
/** A no-break space: a value stays with its "=" ("dy/du" | "= 3" split on Android). */
const NB = '\u00a0';
const CAP125 = `A 60-30-10 tooth gear train: ${fr(DU, DX)}${NB}=${NB}2 and ${fr(DY, DU)}${NB}=${NB}3 multiply to give ${fr(DY, DX)}${NB}=${NB}6.`;
const MOD = 2.8, CY5 = 116;
const GEARS = [
  { name: 'x', n: 60, cx: 98, phase: 0 },
  { name: 'u', n: 30, cx: 98 + MOD * 45, phase: Math.PI + Math.PI / 30 },
  { name: 'y', n: 10, cx: 98 + MOD * 45 + MOD * 20, phase: Math.PI },
];
/** A gear's outline: n trapezoid teeth round a pitch circle of radius r, one tooth centred on `phase`. */
function gearPts(cx: number, cy: number, r: number, n: number, phase: number, d: number): P[] {
  const out: P[] = [], step = (2 * Math.PI) / n;
  for (let k = 0; k < n; k++) {
    const a = phase + k * step;
    ([[-0.5, -1], [-0.3, -1], [-0.17, 1], [0.17, 1], [0.3, -1]] as [number, number][]).forEach(([f, sg]) => { const t = a + f * step, rr = r + sg * d; out.push([cx + rr * Math.cos(t), cy - rr * Math.sin(t)]); });
  }
  out.push(out[0]);
  return out;
}
const fig125: Diagram = {
  id: 'm11-12-fig-12.5',
  topic: 3,
  name: 'The chain rule as a gear train',
  cases: [{ chip: 'Gear train', cap: CAP125 }],
  draw() {
    const s = new Sketch(W, 292);
    GEARS.forEach((G, i) => {
      const r = (MOD * G.n) / 2, col = i === 2 ? C.mari : C.ink;
      path(s, gearPts(G.cx, CY5, r, G.n, G.phase, i === 2 ? 2.6 : 3), { color: col, w: 1.5, name: `gear:${G.name}` });
      if (i === 0) path(s, Array.from({ length: 33 }, (_, k): P => [G.cx + 10 * Math.cos((k / 32) * 2 * Math.PI), CY5 + 10 * Math.sin((k / 32) * 2 * Math.PI)]), { w: 1.6, name: 'hub' });
      pt(s, [G.cx, CY5], `centre ${G.name}`, col, i === 0 ? 3.4 : 2.6);
    });
    const [gx0, gu, gy0] = GEARS;
    arcArrow(s, [gx0.cx, CY5], 52, 215, 138, { name: 'turn x' });
    arcArrow(s, [gu.cx, CY5], 25, 128, 222, { name: 'turn u' });
    arcArrow(s, [gy0.cx, CY5], 26, 72, -72, { color: C.mari, name: 'turn y' });
    lab(s, gx0.cx, CY5 + 112, X, { size: 17 });
    lab(s, gu.cx, CY5 + 70, `${I('u')} = ${I('g')}(${X})`, { size: 15 });
    lab(s, gy0.cx + 14, CY5 + 64, `${Y} = ${I('f')}(${I('u')})`, { size: 15, color: C.amber });
    runs(s, gu.cx - 6, CY5 - 64, [{ num: DU, den: DX }, { t: ' = 2' }], { size: 14, anchor: 'middle' });
    runs(s, gy0.cx + 18, CY5 - 46, [{ num: DY, den: DU }, { t: ' = 3' }], { size: 14, anchor: 'middle', color: C.amber });
    runs(s, W / 2, 270, [{ t: 'teeth 60 ∶ 30 ∶ 10 ⇒ ' }, { num: DY, den: DX }, { t: ' = ' }, { num: DY, den: DU }, { t: ' · ' }, { num: DU, den: DX }, { t: ' = 3 × 2 = 6' }], { size: 14, anchor: 'middle' });
    return s;
  },
  check() {
    const s = fig125.draw(fig125.cases[0]), out: Check[] = [];
    const teeth = GEARS.map((G) => (linesNamed(s, new RegExp(`^gear:${G.name}$`))[0].pts.length - 1) / 5);
    out.push([`Teeth drawn: ${teeth.join(', ')} (60, 30, 10), each gear's radius in proportion to its teeth`, teeth.join() === '60,30,10']);
    const [a, b, c] = GEARS, ra = (MOD * a.n) / 2, rb = (MOD * b.n) / 2, rc = (MOD * c.n) / 2;
    out.push(['The gears mesh: centres one pitch radius apart, tooth against gap at each contact', close(b.cx - a.cx, ra + rb) && close(c.cx - b.cx, rb + rc)]);
    out.push([`du/dx = 60/30 = ${a.n / b.n}, dy/du = 30/10 = ${b.n / c.n}, and dy/dx = 3 × 2 = ${(a.n / b.n) * (b.n / c.n)} = 60/10`, a.n / b.n === 2 && b.n / c.n === 3 && a.n / c.n === 6]);
    const dir = (name: string) => { const l = linesNamed(s, new RegExp(`^${name}$`)); const p = l[l.length - 1].pts; return p[1][1] - p[0][1]; };
    out.push(['Meshing gears turn opposite ways: x clockwise (up its left side), u anticlockwise (down its left side), y clockwise (down its right side)', dir('turn x') < 0 && dir('turn u') > 0 && dir('turn y') > 0]);
    out.push(stackedCheck(s, ['du/dx', 'dy/du', 'dy/dx', 'dy/du', 'du/dx']));
    out.push(labelsCheck(s, ['x', 'u = g(x)', 'y = f(u)', 'du/dx = 2', 'dy/du = 3', 'teeth 60 ∶ 30 ∶ 10 ⇒ dy/dx = dy/du · du/dx = 3 × 2 = 6']));
    out.push(noBadChars(s, fig125));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 12.6 · end behaviour and the staircase (Topic 05, p. 1091)     */
/* ===================================================================== */
const f126 = (x: number) => (3 * x * x + 5) / (6 * x * x - x);
const FX = `${I('f')}(${X})`;
const RAT: Piece[] = [{ t: `${FX} = ` }, { num: `3${sq(X)} + 5`, den: `6${sq(X)} − ${X}` }];
const CAP126 = `Left, a rational function settling onto ${Y} = ${fr('1', '2')}; right, the staircase [${X}] jumping at every integer (at ${X} = 2: LHL = 1, RHL = 2).`;
const CAP126Z = `The same function close to ${X} = 0: it rises to +∞ as ${X} → 0<sup>−</sup>, falls to −∞ as ${X} → 0<sup>+</sup>, and ${X} = ${fr('1', '6')} is a second vertical asymptote.`;
type Case126 = { chip: string; cap: string; panel: 'rational' | 'zoom' | 'stairs' };
const G126R: Gr = { x: [-12.5, 12.5], y: [0, 2.3], L: 26, R: 306, B: 222, T: 30 };
const G126Z: Gr = { x: [-0.3, 0.52], y: [-210, 130], L: 30, R: 300, B: 250, T: 30 };
const G126S: Gr = { x: [-1.5, 3.7], y: [-1.6, 3.6], L: 20, R: 316, B: 252, T: 22 };
/** Where f = v, by bisection on [a, b] (f monotone there). */
const solve126 = (v: number, a: number, b: number) => { let lo = a, hi = b; const sg = Math.sign(f126(a) - v); for (let i = 0; i < 80; i++) { const m = (lo + hi) / 2; if (Math.sign(f126(m) - v) === sg) lo = m; else hi = m; } return (lo + hi) / 2; };
const fig126: Diagram = {
  id: 'm11-12-fig-12.6',
  topic: 4,
  name: 'End behaviour of a rational function, and the staircase [x]',
  cases: [
    { chip: 'Rational function', cap: CAP126, panel: 'rational' },
    { chip: 'Close to x = 0', cap: CAP126Z, panel: 'zoom' },
    { chip: 'Staircase [x]', cap: CAP126, panel: 'stairs' },
  ] as Case126[],
  draw(c: Case126) {
    if (c.panel === 'rational') {
      const s = new Sketch(W, 262), g = G126R;
      axes(s, g, [-12.5, 12.5], [0, 2.3]);
      path(s, [gp(g, [-12.5, 0.5]), gp(g, [12.5, 0.5])], { color: C.mari, w: 1.6, dash: '6 4', name: 'y = 1/2' });
      const l = solve126(2, -3, -0.01), r = solve126(2, 0.2, 3);
      path(s, curve(g, f126, -12.5, l), { w: 2.1, name: 'left branch' });
      path(s, curve(g, f126, r, 12.5), { w: 2.1, name: 'right branch' });
      [-10, 10].forEach((v) => { xtick(s, g, v); lab(s, gx(g, v), gy(g, 0) + 17, fmt(v), { size: 12, color: C.slate }); });
      path(s, [[gx(g, 0) - 4, gy(g, 1)], [gx(g, 0), gy(g, 1)]], { color: C.slate, w: 1.1, name: 'tick' });
      ytick(s, g, 0.5);
      lab(s, gx(g, 0) + 4.5, gy(g, 1) + 4, '1', { anchor: 'start', size: 11, color: C.slate });
      runs(s, gx(g, 0) - 6, gy(g, 0.25) + 3, [{ num: '1', den: '2' }], { size: 10, anchor: 'end', color: C.slate });
      runs(s, 30, 62, RAT, { size: 13.5 });
      lab(s, gx(g, -9), 106, `${X} → −∞`, { size: 12.5, color: C.slate });
      arr(s, gp(g, [-6.2, 1.25]), gp(g, [-11.8, 1.25]), { color: C.slate, w: 1.2, head: 6, name: 'to −∞' });
      lab(s, gx(g, 9), 106, `${X} → ∞`, { size: 12.5, color: C.slate });
      arr(s, gp(g, [6.2, 1.25]), gp(g, [11.8, 1.25]), { color: C.slate, w: 1.2, head: 6, name: 'to ∞' });
      runs(s, 30, gy(g, 0.5) - 26, [{ t: `${Y} = ` }, { num: '1', den: '2' }], { size: 15, color: C.amber });
      return s;
    }
    if (c.panel === 'zoom') {
      const s = new Sketch(W, 270), g = G126Z;
      axes(s, g, [-0.3, 0.52], [-210, 130]);
      path(s, [gp(g, [1 / 6, -210]), gp(g, [1 / 6, 130])], { color: C.mari, w: 1.6, dash: '6 4', name: 'x = 1/6' });
      path(s, curve(g, f126, -0.3, solve126(125, -0.3, -0.001)), { w: 2.1, name: 'left branch' });
      path(s, curve(g, f126, solve126(-205, 0.0001, 0.083), solve126(-205, 0.083, 1 / 6 - 1e-9)), { w: 2.1, name: 'middle branch' });
      path(s, curve(g, f126, solve126(125, 1 / 6 + 1e-9, 0.52), 0.52), { w: 2.1, name: 'right branch' });
      [-0.2, 0.4].forEach((v) => { xtick(s, g, v); lab(s, gx(g, v), gy(g, 0) + 17, fmt(v), { size: 12, color: C.slate }); });
      [100, -100].forEach((v) => { ytick(s, g, v); lab(s, gx(g, 0) + 9, gy(g, v) + 4, fmt(v), { anchor: 'start', size: 12, color: C.slate }); });
      runs(s, gx(g, 1 / 6) + 8, gy(g, -140), [{ t: `${X} = ` }, { num: '1', den: '6' }], { size: 14, color: C.amber });
      runs(s, 6, 84, RAT, { size: 12 });
      return s;
    }
    const s = new Sketch(W, 276), g = G126S;
    axes(s, g, [-1.5, 3.55], [-1.6, 3.6]);
    [-1, 1, 2, 3].forEach((v) => { xtick(s, g, v); lab(s, gx(g, v), gy(g, 0) + 19, fmt(v), { size: 12, color: C.slate }); });
    [1, 2, 3, -1].forEach((v) => { ytick(s, g, v); lab(s, gx(g, 0) - 8, gy(g, v) + 4 + (v === -1 ? 16 : 0), fmt(v), { anchor: 'end', size: 12, color: C.slate }); });
    for (let k = -1; k <= 2; k++) {
      const a = gp(g, [k, k]), b = gp(g, [k + 1, k]);
      path(s, [a, [b[0] - RING_R - 0.5, b[1]]], { w: 2.2, name: `step:${k}` });
      pt(s, a, `[${k}]`);
      ring(s, b, `(${k + 1})`);
    }
    path(s, [gp(g, [3, 3]), gp(g, [3.45, 3])], { w: 2.2, name: 'step:3' });
    pt(s, gp(g, [3, 3]), '[3]');
    lab(s, gx(g, 0) + 9, gy(g, 0) + 19, '0', { size: 12, color: C.slate });
    const lo = gp(g, [2, 1]), hi = gp(g, [2, 2]);
    arr(s, [lo[0], lo[1] - RING_R - 2], [hi[0], hi[1] + DOT_R + 2], { color: C.mari, w: 1.6, both: true, head: 6, name: 'LHL to RHL' });
    lab(s, lo[0] + 9, gy(g, 1.56), 'LHL = 1', { anchor: 'start', size: 12, color: C.amber });
    lab(s, lo[0] + 9, gy(g, 1.2), 'RHL = 2', { anchor: 'start', size: 12, color: C.amber });
    lab(s, gx(g, 2.5), gy(g, -1.1), `${Y} = [${X}]`, { size: 15 });
    return s;
  },
  check(c: Case126) {
    const s = fig126.draw(c), out: Check[] = [];
    if (c.panel === 'rational') {
      const g = G126R, pts = [...drawn(s, g, 'left branch'), ...drawn(s, g, 'right branch')];
      out.push(['Every point drawn lies on f(x) = (3x² + 5)/(6x² − x)', pts.every((p) => close(p[1], f126(p[0]), 1e-6))]);
      out.push([`End behaviour: f(±1000) = ${fmt(f126(1000), 5)}, ${fmt(f126(-1000), 5)} → 3/6 = 1/2, the dashed asymptote`, close(f126(1e6), 0.5, 1e-5) && close(f126(-1e6), 0.5, 1e-5) && close(drawn(s, g, 'y = 1/2')[0][1], 0.5)]);
      out.push(['As x → 0⁻, f → +∞; the right branch starts beyond the second asymptote x = 1/6 (2 px from x = 0 at this scale, the drawing as printed)', f126(-1e-6) > 1e5 && drawn(s, g, 'right branch')[0][0] > 1 / 6 && (gx(g, 1 / 6) - gx(g, 0)) < 2]);
      out.push(stackedCheck(s, ['1/2', '3x2 + 5/6x2 − x', '1/2']));
      out.push(labelsCheck(s, ['f(x) = 3x2 + 5/6x2 − x', 'y = 1/2', 'x → −∞', 'x → ∞', '1', '1/2', '−10', '10']));
    } else if (c.panel === 'zoom') {
      const g = G126Z, mid = drawn(s, g, 'middle branch');
      let top = -Infinity, at = 0;
      for (let i = 1; i < 1000; i++) { const x = i / 6000; if (f126(x) > top) { top = f126(x); at = x; } }
      out.push([`On 0 < x < 1/6 the denominator x(6x − 1) is negative, so f < 0 there, rising only to ${fmt(top, 1)} at x = ${fmt(at, 3)}: f → −∞ as x → 0⁺ and as x → (1/6)⁻`, top < -120 && top > -121 && f126(1e-7) < -1e6 && f126(1 / 6 - 1e-9) < -1e6]);
      out.push(['x = 1/6 is a second vertical asymptote: f → +∞ as x → (1/6)⁺', f126(1 / 6 + 1e-9) > 1e6 && close(drawn(s, g, 'x = 1/6')[0][0], 1 / 6)]);
      out.push(['The three branches drawn lie on f, the middle one inside (0, 1/6) and below the axis', [...drawn(s, g, 'left branch'), ...mid, ...drawn(s, g, 'right branch')].every((p) => close(p[1], f126(p[0]), 1e-6)) && mid.every((p) => p[0] > 0 && p[0] < 1 / 6 && p[1] < 0)]);
      out.push(stackedCheck(s, ['1/6', '3x2 + 5/6x2 − x']));
      out.push(labelsCheck(s, ['x = 1/6', 'f(x) = 3x2 + 5/6x2 − x', '−0.2', '0.4', '100', '−100']));
    } else {
      const g = G126S, ds = dotsOf(s).map((d) => ({ ...d, q: unPx(g, d.p) }));
      out.push(['Each step [k, k + 1) sits at height k: filled at its left end (k included), open at its right end', ds.every((d) => (d.open ? close(d.q[1], d.q[0] - 1) : close(d.q[1], d.q[0]))) && ds.filter((d) => d.open).length === 4 && ds.filter((d) => !d.open).length === 5]);
      out.push(['At x = 2: LHL = lim [x] as x → 2⁻ = 1, RHL = 2, so the limit does not exist', Math.floor(2 - 1e-9) === 1 && Math.floor(2 + 1e-9) === 2]);
      out.push(labelsCheck(s, ['LHL = 1', 'RHL = 2', 'y = [x]', '−1', '0', '1', '2', '3']));
    }
    out.push(noBadChars(s, fig126));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 12.7 · the re-zeroed axis, and the cubic (Topic 06, p. 1100)   */
/* ===================================================================== */
const CAP127 = `The axis re-zeroed at ${H} = ${X} − ${A}, and sin ${X} against ${X} and ${X} − ${fr(`${X}<sup>3</sup>`, '6')} on [−1.5, 1.5].`;
type Case127 = { chip: string; cap: string; panel: 'axis' | 'cubic' };
const G127: Gr = { x: [-1.5, 1.5], y: [-1.75, 1.75], L: 60, R: 270, B: 244, T: 34 };
const cub = (x: number) => x - x ** 3 / 6;
const fig127: Diagram = {
  id: 'm11-12-fig-12.7',
  topic: 5,
  name: 'Re-zeroing the axis, and sin x against its cubic',
  cases: [{ chip: 'Re-zeroed axis', cap: CAP127, panel: 'axis' }, { chip: 'sin x, x and the cubic', cap: CAP127, panel: 'cubic' }] as Case127[],
  draw(c: Case127) {
    if (c.panel === 'axis') {
      const s = new Sketch(W, 216), cx = 150, u = 46, y1 = 72, y2 = 160;
      [y1, y2].forEach((y, i) => {
        arr(s, [cx, y], [30, y], { w: 1.4, head: 7, name: i ? 'h-axis' : 'x-axis' });
        arr(s, [cx, y], [272, y], { w: 1.4, head: 7, name: i ? 'h-axis' : 'x-axis' });
        [-2, -1, 0, 1, 2].forEach((k) => path(s, [[cx + k * u, y - 5], [cx + k * u, y + 5]], { color: C.slate, w: 1.1, name: 'tick' }));
      });
      lab(s, 279, y1 + 5, X, { anchor: 'start', size: 15 });
      lab(s, 279, y2 + 5, H, { anchor: 'start', size: 15 });
      [[`${A} − 1`, -1], [A, 0], [`${A} + 1`, 1]].forEach(([t, k]) => lab(s, cx + (k as number) * u, y1 - 12, t as string, { size: 13.5 }));
      [['−1', -1], ['0', 0], ['1', 1]].forEach(([t, k]) => lab(s, cx + (k as number) * u, y2 + 23, t as string, { size: 13.5 }));
      lab(s, 30, 28, 'original axis', { anchor: 'start', size: 13.5 });
      path(s, [[cx, y1 + 6], [cx, y2 - 6]], { color: C.mari, w: 1.6, dash: '4 3', name: 'link' });
      lab(s, cx + 9, 110, 're-zeroed axis', { anchor: 'start', size: 13 });
      lab(s, cx + 9, 130, `${H} = ${X} − ${A}`, { anchor: 'start', size: 13.5 });
      pt(s, [cx, y1], 'x = a');
      pt(s, [cx, y2], 'h = 0');
      lab(s, cx, 206, `${X} = ${A} + ${H},   ${H} → 0`, { size: 15 });
      return s;
    }
    const s = new Sketch(W, 300), g = G127;
    axes(s, g, [-1.75, 1.85], [-1.75, 1.9]);
    path(s, curve(g, (x) => x, -1.5, 1.5, 2), { color: C.slate, w: 1.5, dash: '6 4', name: 'y = x' });
    path(s, curve(g, Math.sin, -1.5, 1.5), { w: 2.3, name: 'y = sin x' });
    path(s, curve(g, cub, -1.5, 1.5), { color: C.mari, w: 1.6, dash: '5 4', name: 'cubic' });
    [-1.5, 1.5].forEach((v) => { xtick(s, g, v); lab(s, gx(g, v), gy(g, 0) + 17, fmt(v), { size: 12, color: C.slate }); });
    lab(s, gx(g, 1.2), gy(g, 1.6), `${Y} = ${X}`, { anchor: 'end', size: 13.5, color: C.slate });
    runs(s, gx(g, -1.45), gy(g, 1.25), [{ t: `${Y} = ${X} − ` }, { num: `${X}<sup>3</sup>`, den: '6' }], { size: 13.5, color: C.amber });
    const lb = lab(s, gx(g, 0.86), gy(g, 0.38), `${Y} = sin ${X}`, { anchor: 'start', size: 13.5 });
    path(s, [[lb[0] + 26, lb[1] - 2], gp(g, [1.3, Math.sin(1.3) - 0.06])], { w: 0.9, free: true });
    lab(s, W / 2, 272, `at ${X} = 1.5 the line misses sin ${X} by 0.503,`, { size: 13, color: C.slate });
    lab(s, W / 2, 290, 'the cubic by 0.060', { size: 13, color: C.slate });
    return s;
  },
  check(c: Case127) {
    const s = fig127.draw(c), out: Check[] = [];
    if (c.panel === 'axis') {
      const a = dotAt(s, 'x = a')!.p, h = dotAt(s, 'h = 0')!.p;
      out.push(['h = x − a: the point x = a on the original axis is h = 0 on the re-zeroed one, straight below it; a ± 1 sit over h = ±1', close(a[0], h[0]) && !dotsOf(s).some((d) => d.open)]);
      out.push(labelsCheck(s, ['original axis', 'a − 1', 'a', 'a + 1', '−1', '0', '1', 'x', 'h', 're-zeroed axis', 'h = x − a', 'x = a + h,   h → 0']));
    } else {
      const g = G127;
      out.push([`At x = 1.5: 1.5 − sin 1.5 = ${fmt(1.5 - Math.sin(1.5), 4)} ≈ 0.503; sin 1.5 − (1.5 − 1.5³/6) = ${fmt(Math.sin(1.5) - cub(1.5), 4)} ≈ 0.060`, fmt(1.5 - Math.sin(1.5), 3) === '0.503' && (Math.sin(1.5) - cub(1.5)).toFixed(3) === '0.060']);
      out.push(['The three curves drawn: y = sin x, y = x and y = x − x³/6 on [−1.5, 1.5]', drawn(s, g, 'y = sin x').every((p) => close(p[1], Math.sin(p[0]), 1e-9)) && drawn(s, g, 'cubic').every((p) => close(p[1], cub(p[0]), 1e-9)) && drawn(s, g, 'y = x').every((p) => close(p[1], p[0], 1e-9))]);
      out.push(stackedCheck(s, ['x3/6']));
      out.push(labelsCheck(s, ['y = x', 'y = x − x3/6', 'y = sin x', '−1.5', '1.5', 'at x = 1.5 the line misses sin x by 0.503,', 'the cubic by 0.060']));
    }
    out.push(noBadChars(s, fig127));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 12.8 · √(x² + x) + x as x → −∞ (Topic 06, p. 1109)            */
/* ===================================================================== */
const CAP128 = `${Y} = √(${sq(X)} + ${X}) + ${X} flattening onto the asymptote ${Y} = −${fr('1', '2')} as ${X} runs to minus infinity.`;
const f128 = (x: number) => Math.sqrt(x * x + x) + x;
const G128: Gr = { x: [-41.5, -1], y: [-0.665, -0.4], L: 66, R: 330, B: 214, T: 30 };
const fig128: Diagram = {
  id: 'm11-12-fig-12.8',
  topic: 5,
  name: 'y = √(x² + x) + x as x runs to minus infinity',
  cases: [{ chip: 'Towards −∞', cap: CAP128 }],
  draw() {
    const s = new Sketch(W, 262), g = G128;
    path(s, [[g.L, g.T], [g.L, g.B], [g.R, g.B]], { w: 1.3, name: 'spine' });
    [-40, -30, -20, -10, -2].forEach((v) => { const x = gx(g, v); path(s, [[x, g.B], [x, g.B + 4]], { color: C.slate, w: 1.1, name: 'tick' }); lab(s, x, g.B + 17, fmt(v), { size: 12, color: C.slate }); });
    [-0.45, -0.5, -0.55, -0.6, -0.65].forEach((v) => { const y = gy(g, v); path(s, [[g.L - 4, y], [g.L, y]], { color: C.slate, w: 1.1, name: 'tick' }); lab(s, g.L - 9, y + 4, v.toFixed(2).replace('-', '−'), { anchor: 'end', size: 12, color: C.slate }); });
    lab(s, (g.L + g.R) / 2, g.B + 38, X, { size: 15 });
    lab(s, g.L - 8, 20, Y, { anchor: 'end', size: 15 });
    path(s, [gp(g, [-41.5, -0.5]), gp(g, [-1, -0.5])], { color: C.mari, w: 1.6, dash: '6 4', name: 'y = −1/2' });
    path(s, curve(g, f128, -40, -2, 300), { w: 2.3, name: 'curve' });
    pt(s, gp(g, [-2, f128(-2)]), 'x = −2');
    runs(s, gx(g, -39.6), gy(g, -0.5) - 17, [{ t: `${Y} = −` }, { num: '1', den: '2' }], { size: 15, color: C.amber });
    arr(s, gp(g, [-12, -0.562]), gp(g, [-34, -0.562]), { color: C.slate, w: 1.3, head: 7, name: 'x → −∞' });
    lab(s, gx(g, -23), gy(g, -0.562) - 8, `${X} → −∞`, { size: 13, color: C.slate });
    lab(s, gx(g, -23), gy(g, -0.607), `${Y} = √(${sq(X)} + ${X}) + ${X}`, { size: 15 });
    return s;
  },
  check() {
    const s = fig128.draw(fig128.cases[0]), out: Check[] = [], g = G128, d = unPx(g, dotAt(s, 'x = −2')!.p);
    out.push([`√(x² + x) + x = x/(√(x² + x) − x) → −1/2 as x → −∞: f(−40) = ${fmt(f128(-40), 4)}, f(−10⁶) = ${fmt(f128(-1e6), 6)}`, close(f128(-1e6), -0.5, 1e-5) && f128(-40) < -0.5 && f128(-40) > -0.51]);
    out.push([`The filled end dot: f(−2) = √2 − 2 = ${fmt(d[1], 4)}`, close(d[0], -2) && close(d[1], Math.SQRT2 - 2)]);
    out.push(['Every point drawn lies on the curve, below the asymptote', drawn(s, g, 'curve').every((p) => close(p[1], f128(p[0]), 1e-9) && p[1] < -0.5)]);
    out.push(stackedCheck(s, ['1/2']));
    out.push(labelsCheck(s, ['y = −1/2', 'x → −∞', 'y = √(x2 + x) + x', '−40', '−30', '−20', '−10', '−2', '−0.45', '−0.50', '−0.55', '−0.60', '−0.65', 'x', 'y']));
    out.push(noBadChars(s, fig128));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 12.9 · a gap, a corner and a smooth junction (B, p. 1120)      */
/* ===================================================================== */
const CAP129 = 'The same junction with a gap, with a corner, and joined smoothly by a single tangent.';
type Case129 = { chip: string; cap: string; m: number; b: number; title: string; sub: [string, string]; name: string };
const G129: Gr = { x: [-0.12, 2.05], y: [-0.35, 3.4], L: 40, R: 300, B: 262, T: 72 };
const fig129: Diagram = {
  id: 'm11-12-fig-12.9',
  topic: 8,
  name: 'A gap, a corner and a smooth junction',
  cases: [
    { chip: '(i) gap', cap: CAP129, m: 2, b: -0.5, title: '(i) gap', sub: ['slopes match, but', 'continuity fails'], name: `2${X} − 0.5` },
    { chip: '(ii) corner', cap: CAP129, m: 0.5, b: 0.5, title: '(ii) corner', sub: ['continuous, but', 'LHD ≠ RHD'], name: `0.5${X} + 0.5` },
    { chip: '(iii) smooth', cap: CAP129, m: 2, b: -1, title: '(iii) smooth', sub: ['continuous and', 'LHD = RHD'], name: `2${X} − 1` },
  ] as Case129[],
  draw(c: Case129) {
    const s = new Sketch(W, 300), g = G129, cx = (g.L + g.R) / 2, line = (x: number) => c.m * x + c.b;
    lab(s, cx, 24, c.title, { size: 15.5 });
    lab(s, cx, 44, c.sub[0], { size: 13, color: C.slate });
    lab(s, cx, 61, c.sub[1], { size: 13, color: C.slate });
    axes(s, g, [-0.12, 2.0], [-0.35, 3.4], { xName: '', yName: '' });
    if (c.title.includes('smooth')) {
      path(s, [gp(g, [0.33, line(0.33)]), gp(g, [1.92, line(1.92)])], { color: C.mari, w: 1.6, dash: '6 4', name: 'tangent' });
      lab(s, gx(g, 0.1), gy(g, 2.3), 'one tangent', { anchor: 'start', size: 13, color: C.amber });
      lab(s, gx(g, 0.1), gy(g, 2.3) + 16, `through ${I('c')}`, { anchor: 'start', size: 13, color: C.amber });
    }
    path(s, curve(g, (x) => x * x, 0, 1, 80), { w: 2.2, name: 'x²' });
    const start = gp(g, [1, line(1)]), open = !close(line(1), 1);
    path(s, [open ? [start[0] + (RING_R + 0.5) * 0.45, start[1] - (RING_R + 0.5) * 0.9] : start, gp(g, [1.85, line(1.85)])], { w: 2.2, name: 'line' });
    pt(s, gp(g, [1, 1]), 'f(c)');
    if (open) {
      ring(s, start, 'line start');
      arr(s, [start[0], gp(g, [1, 1])[1] - DOT_R - 2], [start[0], start[1] + RING_R + 2], { color: C.mari, w: 1.5, both: true, head: 5, name: 'gap' });
      lab(s, start[0] + 13, start[1] + 5, c.name, { anchor: 'start', size: 13.5 });
    } else if (c.m < 1) lab(s, gx(g, 1) + 6, gy(g, 1) + 20, c.name, { anchor: 'start', size: 13.5 });
    else lab(s, gx(g, 1.16), gy(g, 1) + 6, c.name, { anchor: 'start', size: 13.5 });
    path(s, [gp(g, [1, 0]), [gx(g, 1), gy(g, 0) + 9]], { color: C.slate, w: 1.1, dash: '3 2', name: 'c tick' });
    lab(s, gx(g, 1), gy(g, 0) + 25, `${I('c')} = 1`, { size: 13.5, color: C.slate });
    lab(s, gx(g, 0.07), gy(g, 0.36), sq(X), { anchor: 'start', size: 13.5 });
    return s;
  },
  check(c: Case129) {
    const s = fig129.draw(c), out: Check[] = [], g = G129, v = c.m * 1 + c.b;
    const cont = close(v, 1), smooth = close(c.m, 2);
    out.push([`At c = 1: x² gives 1 (LHD 2); ${plain(c.name)} gives ${fmt(v)} (RHD ${fmt(c.m)}): ${cont ? 'continuous' : 'a gap'}, ${smooth ? 'slopes match' : 'LHD ≠ RHD'}`, c.title.includes('gap') ? !cont && smooth : c.title.includes('corner') ? cont && !smooth : cont && smooth]);
    out.push(['The filled dot is f(1) = 1² on the curve; the right piece starts at x = 1 (an open ring only where it misses f(1))', close(unPx(g, dotAt(s, 'f(c)')!.p)[1], 1) && (cont ? !dotsOf(s).some((d) => d.open) : close(unPx(g, dotAt(s, 'line start')!.p)[1], v))]);
    if (c.title.includes('smooth')) out.push(['The dashed tangent is y = 2x − 1, the tangent to y = x² at (1, 1)', drawn(s, g, 'tangent').every((p) => close(p[1], 2 * p[0] - 1, 1e-6))]);
    out.push(labelsCheck(s, [c.title, ...c.sub, plain(c.name), 'c = 1', 'x2', ...(c.title.includes('smooth') ? ['one tangent', 'through c'] : [])]));
    out.push(noBadChars(s, fig129));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* "Figure 1" · the car and the train (Topic 07, p. 1126)                */
/* ===================================================================== */
const CAPD1 = `The car and the train. As the real variable ${X} slides, ${Y} = sin(π${X}) oscillates forever and lim<sub>${X}→∞</sub> sin(π${X}) does not exist; the sequence stops only at the integers, where sin(${N}π) = 0 exactly, so lim<sub>${N}→∞</sub> ${AN} = 0.`;
const LD = 44, UD = 35, Y1 = 88, Y2 = 246, UY = 30;
const fd1: Diagram = {
  id: 'm11-12-07-d1',
  topic: 6,
  name: 'The car and the train',
  cases: [{ chip: 'Car and train', cap: CAPD1 }],
  draw() {
    const s = new Sketch(W, 332), X0 = (v: number) => LD + v * UD;
    [Y1, Y2].forEach((y0, i) => {
      path(s, [[36, y0 - 40], [36, y0 + 40]], { w: 1.3, name: `spine:${i}` });
      [1, 0, -1].forEach((v) => { path(s, [[32, y0 - v * UY], [36, y0 - v * UY]], { color: C.slate, w: 1.1, name: 'tick' }); lab(s, 28, y0 - v * UY + 4, fmt(v), { anchor: 'end', size: 11, color: C.slate }); });
    });
    lab(s, 44, 30, `the car (${X} slides): lim<sub>${X}→∞</sub> sin(π${X}) does not exist`, { anchor: 'start', size: 11.5 });
    path(s, Array.from({ length: 321 }, (_, i): P => [X0(i / 40), Y1 - UY * Math.sin(Math.PI * (i / 40))]), { w: 1.9, name: 'car' });
    lab(s, X0(0.2), Y1 + UY + 20, `${Y} = sin(π${X})`, { anchor: 'start', size: 12 });
    arr(s, [334, 146], [334, 178], { color: C.mari, w: 1.8, head: 7, name: 'implies' });
    lab(s, 38, 166, 'function limit ⇒ sequence limit (never the reverse)', { anchor: 'start', size: 11, color: C.amber });
    lab(s, 44, 198, `the train (${N} hops): ${AN} = sin(${N}π) = 0, lim<sub>${N}→∞</sub> ${AN} = 0`, { anchor: 'start', size: 11.5 });
    path(s, [[X0(0), Y2], [X0(8.15), Y2]], { w: 1.2, dash: '5 4', name: 'L line' });
    for (let n = 1; n <= 8; n++) pt(s, [X0(n), Y2], `n=${n}`);
    lab(s, X0(7), Y2 + 24, `${I('L')} = 0`, { size: 12.5, color: C.amber });
    for (let n = 1; n <= 8; n++) { path(s, [[X0(n), 294], [X0(n), 299]], { color: C.slate, w: 1.1, name: 'tick' }); lab(s, X0(n), 313, String(n), { size: 11.5, color: C.slate }); }
    lab(s, X0(4.4), 328, `${X} (above) / ${N} (below)`, { size: 12 });
    return s;
  },
  check() {
    const s = fd1.draw(fd1.cases[0]), out: Check[] = [];
    const ds = dotsOf(s).map((d) => d.p), at = (n: number) => Math.sin(n * Math.PI);
    out.push([`The train's dots stand at n = 1 … 8, all on y = 0: sin(nπ) = 0 (largest |sin(nπ)| in floating point ${at(8).toExponential(1)})`, ds.length === 8 && ds.every((p, i) => close(p[0], LD + (i + 1) * UD) && close(p[1], Y2)) && [1, 2, 3, 4, 5, 6, 7, 8].every((n) => Math.abs(at(n)) < 1e-12)]);
    const car = linesNamed(s, /^car$/)[0].pts, ys = car.map((p) => (Y1 - p[1]) / UY);
    out.push(['The car\'s curve is sin(πx) on [0, 8]: four full swings between −1 and 1, never settling', close(Math.max(...ys), 1, 1e-9) && close(Math.min(...ys), -1, 1e-9) && close((car[car.length - 1][0] - LD) / UD, 8)]);
    out.push(labelsCheck(s, ['the car (x slides): limx→∞ sin(πx) does not exist', 'y = sin(πx)', 'function limit ⇒ sequence limit (never the reverse)', 'the train (n hops): an = sin(nπ) = 0, limn→∞ an = 0', 'L = 0', 'x (above) / n (below)', '1', '8']));
    out.push(noBadChars(s, fd1));
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 11 Chapter 12, Limits and Derivatives: the book's figures. */
export const DIAGRAMS_MATHEMATICS_11_12: Diagram[] = [fig121, fig122, fig123, fig124, fig125, fig126, fig127, fig128, fig129, fd1];

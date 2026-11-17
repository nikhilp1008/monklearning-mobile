import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import { stixW } from '@/lib/diagrams/mathematics-11-03b';

/**
 * MATHEMATICS CLASS 11, CHAPTER 10 (Conic Sections): every drawing of the Master Reference book (October edition)
 * on pp. 897–1008, redrawn. Each numbered figure stands on its own "CHAPTER 10 · FIGURES" plate, the page after
 * its caption (10.6 and 10.7 share p. 940).
 *
 *   Figure 10.1 (p. 899; caption p. 898), the double cone and its four sections, Topic 01, topic index 0.
 *   Figure 10.2 (p. 906; caption p. 905), anatomy of a circle, Topic 02, index 1.
 *   Figure 10.3 (p. 913; caption p. 912), anatomy of the parabola y² = 4ax, Topic 03, index 2.
 *   Figure 10.4 (p. 922; caption p. 921), anatomy of the ellipse, a = 5, b = 3, Topic 04, index 3.
 *   Figure 10.5 (p. 930; caption p. 929), anatomy of the hyperbola, a = 4, b = 3, Topic 05, index 4.
 *   Figure 10.6 (p. 940; caption p. 939), the auxiliary circle and the eccentric angle, Topic 06, index 5.
 *   Figure 10.7 (p. 940; caption p. 939), why the hyperbola uses sec θ and tan θ, Topic 06, index 5.
 *   Figure 10.8 (p. 954; caption p. 953), the director circle of the ellipse, Topic 07, index 6.
 *   Figure 10.9 (p. 965; caption p. 964), the reflection property of the three conics, Topic 08, index 7.
 *   Figure 10.10 (p. 976; caption p. 975), where to put the origin in the four applied conics, Topic 09, index 8.
 *   Figure 10.11 (p. 978; caption p. 977), the parabolic reflector y² = 20x, Topic 09 (its first worked example).
 *   Figure 10.12 (p. 980; caption p. 979), the semi-elliptical archway, Topic 09 (second worked example).
 *   Figure 10.13 (p. 982; caption p. 981), the suspension-bridge cable, Topic 09 (third worked example).
 *   Figure 10.14 (p. 984; caption p. 983), the hyperbolic cooling tower, Topic 09 (fourth worked example).
 *
 * ONE HIGHLIGHT. The book's orange is the marigold, its teal, green and navy are ink, its grey slate: 10.1 the
 * cutting planes; 10.2 the radius CP, P and the tangent from the outside point with its labels; 10.3 SP, PM and
 * their labels; 10.4 the focal radii and SP + S′P = 2a; 10.5 the focal radii and S′P − SP = 2a; 10.6 OQ, θ and
 * Q; 10.7 OQ, θ, Q and the tangent at Q; 10.8 the two tangents from P and their right angle; 10.9 the tangent or
 * normal; 10.10 the coordinate axes and the origin; 10.11 the rim and its points, S; 10.12 the height at 1.5 m
 * from the end; 10.13 the wire at x = 18 and its callout, the axes and O; 10.14 the top, throat and base widths.
 *
 * NO FILLS. The pale fills of 10.10–10.12 and 10.14 (the inside of the dish, arch and tower) are left out: outlines
 * only. The book's ground hatching (10.10's arch, 10.12, 10.14) is kept as short slate strokes. The book's towers
 * in 10.13 are grey bars: drawn as outlined bars. No grid lines (the axes, ticks and labels carry the scale).
 *
 * DOTS. Every point on a curve or an axis is a filled dot (decision 10).
 *
 * DEPARTURES, for a phone: labels the book runs up the page ("directrix x = −a" in 10.3, "conjugate axis" in 10.5,
 * "chord of contact" in 10.8, "rim, 20 cm across" in 10.11, "150 m" and "100 m" in 10.14) are set level; 10.6's
 * "tan φ = (b/a) tan θ, so θ ≠ φ" stands under the drawing; 10.6's and 10.7's long point names reach their point by
 * a short leader where the curve leaves no room beside it; the panels of 10.9 and 10.10 are chips, each panel's
 * own note set under it. 10.2 labels the right angle ∠AQB, as printed (the text says ∠APB). 10.4's A′(−a, 0) and
 * A(a, 0) stand outside the ellipse below the axis, each beside its own vertex, the directrix broken round them (the
 * book sets A′ inside, where on a phone it read as the label of S′). 10.8's T₁ stands above
 * the axis, as printed. 10.13 is drawn with its heights at twice the scale of its widths (the book's own
 * proportions leave the 6 m gap too thin to label), and says so under the roadway. Every fraction on a drawing is
 * stacked by hand. No em dash: 10.6's caption "b : a — and OP" reads "b ∶ a, and OP" (the ratio colon of the
 * text), 10.10's "conics — dish, …" reads "conics (dish, …)".
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
const sq = (t: string) => `${t}<sup>2</sup>`;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const X = I('x'), Y = I('y'), A = I('a'), B = I('b'), E = I('e'), TH = I('θ'), PH = I('φ');
const S1 = `${I('S')}<sub>1</sub>`;

/* ---------- lines, labels and the layout checks (as in mathematics-11-08.ts) ---------- */
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
/** A polyline drawn in pieces, broken wherever it comes within `gap` of a rect in `avoid` (as in mathematics-11-05.ts). */
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
/** Every label closer than LABEL_GAP to a kept line, named, so a failure says all of them at once. */
function crowded(s: Sketch): string[] {
  const out: string[] = [];
  for (const { pts, name: ln } of LINES.get(s) ?? []) for (const l of s.labels) { const d = boxToLine(l.rect, pts); if (d < LABEL_GAP - 1e-9) out.push(`"${l.text}" ${fmt(d, 1)} px from the ${ln || 'line'}`); }
  return [...new Set(out)];
}
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s), bad = crowded(s);
  return [`Every label stays at least ${LABEL_GAP} px clear of every line, curve, dot and hatch stroke: the closest is "${what}, ${fmt(gap, 1)} px${bad.length ? `; too close: ${bad.join('; ')}` : ''}`, gap >= LABEL_GAP - 1e-9];
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
  return [x - w / 2, numY - size * 0.72 - (num.includes('<sup>') ? size * 0.12 : 0), x + w / 2, denY + size * 0.22];
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

/* ---------- dots, marks and arcs ---------- */
const DOTS = new WeakMap<Sketch, { p: P; name: string }[]>();
const DOT_R = 3.6;
/** A filled dot (decision 10), kept as a ring for the clearance check. */
function pt(s: Sketch, p: P, name: string, col: string = C.ink, r = DOT_R) {
  s.dot(p[0], p[1], r, col);
  keep(s, Array.from({ length: 25 }, (_, i): P => [p[0] + (r + 1) * Math.cos((2 * Math.PI * i) / 24), p[1] + (r + 1) * Math.sin((2 * Math.PI * i) / 24)]), `dot:${name}`);
  DOTS.set(s, [...(DOTS.get(s) ?? []), { p, name }]);
}
const dotAt = (s: Sketch, name: string) => (DOTS.get(s) ?? []).find((d) => d.name === name)?.p;
const unit = (a: P, b: P): P => { const d = len(a, b) || 1; return [(b[0] - a[0]) / d, (b[1] - a[1]) / d]; };
/** A right-angle mark in the corner c between the directions u and v (unit, screen). */
function rightMark(s: Sketch, c: P, u: P, v: P, size = 8, col: string = C.ink) {
  path(s, [[c[0] + u[0] * size, c[1] + u[1] * size], [c[0] + (u[0] + v[0]) * size, c[1] + (u[1] + v[1]) * size], [c[0] + v[0] * size, c[1] + v[1] * size]], { color: col, w: 1.1, name: 'right angle' });
}
/** n short strokes across the middle of a–b: the book's equal-length marks. */
function ticks(s: Sketch, a: P, b: P, n: number, col: string) {
  const m: P = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], u = unit(a, b), v: P = [-u[1], u[0]];
  for (let i = 0; i < n; i++) {
    const k = (i - (n - 1) / 2) * 4, c: P = [m[0] + u[0] * k, m[1] + u[1] * k];
    path(s, [[c[0] - v[0] * 5, c[1] - v[1] * 5], [c[0] + v[0] * 5, c[1] + v[1] * 5]], { color: col, w: 1.3, name: 'tick mark' });
  }
}
/** A point at `r` from c at `deg` degrees anticlockwise from the x-axis (screen y runs down). */
const pol = (c: P, r: number, deg: number): P => [c[0] + r * Math.cos(deg * DEG), c[1] - r * Math.sin(deg * DEG)];
const angOf = (c: P, p: P) => Math.atan2(c[1] - p[1], p[0] - c[0]) / DEG;
const arcPts = (c: P, r: number, a0: number, a1: number, n = 40): P[] => Array.from({ length: n + 1 }, (_, i) => pol(c, r, a0 + ((a1 - a0) * i) / n));

/* ---------- graphs: axes through the origin ---------- */
type Gr = { ox: number; oy: number; ux: number; uy: number };
const gx = (g: Gr, v: number) => g.ox + v * g.ux;
const gy = (g: Gr, v: number) => g.oy - v * g.uy;
const gp = (g: Gr, p: P): P => [gx(g, p[0]), gy(g, p[1])];
const unPx = (g: Gr, p: P): P => [(p[0] - g.ox) / g.ux, (g.oy - p[1]) / g.uy];
const gpath = (s: Sketch, g: Gr, pts: P[], o: Stroke = {}) => path(s, pts.map((p) => gp(g, p)), o);
/** Every kept line of one name, its points back in data units: what the checks test is what is drawn. */
const drawn = (s: Sketch, g: Gr, name: string): P[][] => (LINES.get(s) ?? []).filter((l) => l.name === name).map((l) => l.pts.map((p) => unPx(g, p)));
/** Some straight piece among `pieces`, produced, passes through c (its distance from the piece's line under 1e-6). */
const throughSome = (pieces: P[][], c: P) => pieces.some((ps) => { const u = ps[0], v = ps[ps.length - 1], d = len(u, v); return d > 0 && Math.abs((v[0] - u[0]) * (c[1] - u[1]) - (v[1] - u[1]) * (c[0] - u[0])) / d < 1e-6; });
const corners = (a: number, b: number): P[] => [[a, b], [-a, b], [-a, -b], [a, -b]];
/** The drawn rectangle has exactly the corners (±a, ±b). */
const rectIs = (s: Sketch, g: Gr, a: number, b: number) => { const r = drawn(s, g, 'rectangle')[0] ?? []; return corners(a, b).every((c) => r.some((v) => close(v[0], c[0]) && close(v[1], c[1]))); };
/** The x- and y-axes over [x0, x1] and [y0, y1] (data), arrowed, named x and y. */
function axes(s: Sketch, g: Gr, xr: [number, number], yr: [number, number], o: { color?: string; size?: number; w?: number; xName?: P; yName?: P; nameColor?: string } = {}) {
  const col = o.color ?? C.ink, size = o.size ?? 15, nc = o.nameColor ?? C.text;
  arr(s, gp(g, [xr[0], 0]), gp(g, [xr[1], 0]), { color: col, w: o.w ?? 1.3, head: 7, name: 'axis:x' });
  arr(s, gp(g, [0, yr[0]]), gp(g, [0, yr[1]]), { color: col, w: o.w ?? 1.3, head: 7, name: 'axis:y' });
  const xn = o.xName ?? [6, 5], yn = o.yName ?? [7, 8];
  lab(s, gx(g, xr[1]) + xn[0], g.oy + xn[1], X, { anchor: 'start', size, color: nc });
  lab(s, g.ox + yn[0], gy(g, yr[1]) + yn[1], Y, { anchor: 'start', size, color: nc });
}
const ellPts = (a: number, b: number, t0 = 0, t1 = 2 * Math.PI, n = 180, cx = 0, cy = 0): P[] => Array.from({ length: n + 1 }, (_, i) => { const t = t0 + ((t1 - t0) * i) / n; return [cx + a * Math.cos(t), cy + b * Math.sin(t)]; });
/** One branch of x²/a² − y²/b² = 1 (side ±1), as far as |x| ≤ xmax and |y| ≤ ymax. */
const hypPts = (a: number, b: number, side: number, xmax: number, ymax: number, n = 120): P[] => {
  const tm = Math.min(Math.asinh(ymax / b), Math.acosh(Math.max(1, xmax / a)));
  return Array.from({ length: n + 1 }, (_, i) => { const t = -tm + (2 * tm * i) / n; return [side * a * Math.cosh(t), b * Math.sinh(t)]; });
};
/** Short slanted ground strokes under the line y = gyPx from x0 to x1 (screen). */
function ground(s: Sketch, x0: number, x1: number, gyPx: number, step = 10, avoid: Rect[] = []) {
  for (let x = x0 + 4; x + 2 <= x1; x += step) {
    const st: P[] = [[x + 1, gyPx + 2], [x - 6, gyPx + 9]];
    if (avoid.some((r) => boxToLine(r, st) < LABEL_GAP + 0.5)) continue;
    path(s, st, { color: C.slate, w: 1, name: 'ground' });
  }
}

/* ===================================================================== */
/* Figure 10.1 · the double cone and its four sections (Topic 01, p. 899) */
/* ===================================================================== */
const CAP101 = 'The double cone and its four conic sections.';
const ALPHA = 27;
type Cut = { name: string; cond: string; at: P; dir: number; half: number };
/** The four small cones: crossing point, cut direction (degrees from the horizontal), half-length. */
const CUTS: Cut[] = [
  { name: 'Circle', cond: `${I('β')} = 90°`, at: [0, -18], dir: 0, half: 30 },
  { name: 'Ellipse', cond: `${I('α')} < ${I('β')} < 90°`, at: [0, -19], dir: 36, half: 30 },
  { name: 'Parabola', cond: `${I('β')} = ${I('α')}`, at: [-11, 0], dir: 90 - ALPHA, half: 42 },
  { name: 'Hyperbola', cond: `${I('β')} < ${I('α')}`, at: [16, 0], dir: 90, half: 40 },
];
const fig101: Diagram = {
  id: 'm11-10-fig-10.1',
  topic: 0,
  name: 'The double cone and its four conic sections',
  cases: [{ chip: 'Double cone', cap: CAP101 }],
  draw() {
    const s = new Sketch(W, 334), t = Math.tan(ALPHA * DEG);
    lab(s, W / 2, 18, `The cutting plane’s angle ${I('β')}, compared`, { size: 13.5 });
    lab(s, W / 2, 36, `with ${I('α')}, decides the conic`, { size: 13.5 });
    const V: P = [170, 132], hh = 60, dx = hh * t;
    for (const k of [-1, -0.72, -0.45, 0.45, 0.72, 1]) {
      const rx = Math.abs(k) * dx, cy = V[1] - k * hh;
      path(s, Array.from({ length: 49 }, (_, i): P => [V[0] + rx * Math.cos((i / 48) * 2 * Math.PI), cy + rx * 0.2 * Math.sin((i / 48) * 2 * Math.PI)]), { color: C.slate, w: 0.8, name: 'ring' });
    }
    path(s, [[V[0], V[1] - hh - 14], [V[0], V[1] + hh + 12]], { color: C.slate, w: 1, dash: '4 3', name: 'axis' });
    path(s, [[V[0] - dx, V[1] - hh], [V[0] + dx, V[1] + hh]], { w: 2.2, name: 'generator' });
    path(s, [[V[0] + dx, V[1] - hh], [V[0] - dx, V[1] + hh]], { w: 2.2, name: 'generator' });
    pt(s, V, 'V');
    lab(s, V[0] - 16, V[1] + 16, 'V', { anchor: 'end', size: 15 });
    lab(s, V[0], V[1] - hh - 21, 'axis', { size: 13, color: C.slate });
    const gAt: P = [V[0] + dx * 0.86, V[1] - hh * 0.86];
    const gl = lab(s, V[0] + 52, V[1] - hh - 2, 'generator', { anchor: 'start', size: 13 });
    path(s, [[gl[0] - 5, gl[3] - 1], [gAt[0] + 3, gAt[1] + 1]], { w: 1, name: 'to generator' });
    path(s, arcPts(V, 30, 90, 90 - ALPHA, 16), { w: 1.8, name: 'α arc' });
    lab(s, V[0] + 26, V[1] - 22, `${I('α')} ≈ 27°`, { anchor: 'start', size: 14 });
    const cy = 252, ch = 34, cw = ch * t;
    CUTS.forEach((c, i) => {
      const cx = 42.5 + 85 * i, o: P = [cx, cy];
      path(s, [[cx - cw, cy - ch], [cx + cw, cy + ch]], { w: 1.5, name: 'cone' });
      path(s, [[cx + cw, cy - ch], [cx - cw, cy + ch]], { w: 1.5, name: 'cone' });
      const m: P = [o[0] + c.at[0], o[1] + c.at[1]], u: P = [Math.cos(c.dir * DEG), -Math.sin(c.dir * DEG)];
      path(s, [[m[0] - u[0] * c.half, m[1] - u[1] * c.half], [m[0] + u[0] * c.half, m[1] + u[1] * c.half]], { color: C.mari, w: 2.6, name: `cut:${c.name}` });
      lab(s, cx, 307, c.name, { size: 14, semibold: true });
      lab(s, cx, 325, c.cond, { size: 13 });
    });
    return s;
  },
  check() {
    const s = fig101.draw(fig101.cases[0]), out: Check[] = [];
    // β is the angle between the cutting line and the cone's (vertical) axis
    const beta = (c: Cut) => 90 - c.dir;
    const [ci, el, pa, hy] = CUTS.map(beta);
    out.push([`The cuts' angles with the axis: circle β = ${fmt(ci)}° (= 90°), ellipse β = ${fmt(el)}° (between α = 27° and 90°), parabola β = ${fmt(pa)}° (= α, parallel to a generator), hyperbola β = ${fmt(hy)}° (< α)`, close(ci, 90) && el > ALPHA && el < 90 && close(pa, ALPHA) && hy < ALPHA]);
    // the circle, ellipse and parabola cuts meet one nappe only; the hyperbola's cut meets both
    const t = Math.tan(ALPHA * DEG), ch = 34;
    const nappes = (c: Cut) => {
      const u: P = [Math.cos(c.dir * DEG), Math.sin(c.dir * DEG)], m: P = [c.at[0], -c.at[1]];
      const hit = new Set<string>();
      for (let k = -c.half; k <= c.half; k += 0.25) { const x = m[0] + u[0] * k, h = m[1] + u[1] * k; if (Math.abs(h) <= ch && Math.abs(x) <= Math.abs(h) * t + 1e-9 && Math.abs(h) > 0.5) hit.add(h > 0 ? 'upper' : 'lower'); }
      return [...hit].sort().join('+');
    };
    const n = CUTS.map(nappes);
    out.push([`The circle, ellipse and parabola cuts pass through one nappe, the hyperbola's through both (${n.join(', ')})`, n[0] === 'upper' && n[1] === 'upper' && n[2] === 'upper' && n[3] === 'lower+upper']);
    out.push(labelsCheck(s, ['The cutting plane’s angle β, compared', 'with α, decides the conic', 'axis', 'generator', 'V', 'α ≈ 27°', 'Circle', 'β = 90°', 'Ellipse', 'α < β < 90°', 'Parabola', 'β = α', 'Hyperbola', 'β < α']));
    out.push(noBadChars(s, fig101));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.2 · anatomy of a circle (Topic 02, p. 906)                   */
/* ===================================================================== */
const CAP102 = `Anatomy of a circle: the radius ${I('CP')} the derivation squares, the right angle in a semicircle behind the diameter form, and the sign of ${S1} that separates inside from outside with the tangent length √${S1}.`;
const G102: Gr = { ox: 44, oy: 276, ux: 62, uy: 62 };
const K102 = { c: [1.5, 1.5] as P, r: 1.5, ab: 18, q: 122, p: 62, inside: [0.62, 1.95] as P, out: [3.5, 3] as P };
const onC = (deg: number): P => [K102.c[0] + K102.r * Math.cos(deg * DEG), K102.c[1] + K102.r * Math.sin(deg * DEG)];
/** The point of contact of the tangent from the outside point (the lower one, as printed). */
const touch102 = (): P => {
  const [cx, cy] = K102.c, [ex, ey] = K102.out, d = Math.hypot(ex - cx, ey - cy), base = Math.atan2(ey - cy, ex - cx) / DEG;
  return onC(base - Math.acos(K102.r / d) / DEG);
};
const fig102: Diagram = {
  id: 'm11-10-fig-10.2',
  topic: 1,
  name: 'Anatomy of a circle',
  cases: [{ chip: 'Circle', cap: CAP102 }],
  draw() {
    const s = new Sketch(W, 312), g = G102, k = K102;
    axes(s, g, [-0.55, 4.4], [-0.5, 3.95]);
    gpath(s, g, ellPts(k.r, k.r, 0, 2 * Math.PI, 160, k.c[0], k.c[1]), { w: 2.2, name: 'circle' });
    const Ap = onC(180 + k.ab), Bp = onC(k.ab), Q = onC(k.q), Pp = onC(k.p), T = touch102();
    const [c, a, b, q, p, t, e, ins] = [k.c, Ap, Bp, Q, Pp, T, k.out, k.inside].map((v) => gp(g, v));
    path(s, [a, b], { w: 1.4, name: 'diameter AB' });
    path(s, [a, q], { w: 1.4, name: 'AQ' });
    path(s, [q, b], { w: 1.4, name: 'QB' });
    rightMark(s, q, unit(q, a), unit(q, b), 8);
    path(s, [c, t], { color: C.slate, w: 1.1, dash: '4 3', name: 'radius to the point of contact' });
    rightMark(s, t, unit(t, c), unit(t, e), 8, C.slate);
    path(s, [c, p], { color: C.mari, w: 2.2, name: 'radius CP' });
    path(s, [e, t], { color: C.mari, w: 2.2, name: 'tangent' });
    pt(s, a, 'A');
    pt(s, b, 'B');
    pt(s, q, 'Q');
    pt(s, c, 'C');
    pt(s, p, 'P', C.mari);
    pt(s, e, 'outside', C.mari);
    pt(s, ins, 'inside', C.ink, 2.8);
    lab(s, gx(g, 0.3), gy(g, 3.55), `∠${I('AQB')} = 90°`, { anchor: 'start', size: 14 });
    lab(s, q[0] - 8, q[1] - 10, I('Q'), { anchor: 'end', size: 15 });
    lab(s, p[0] + 5, p[1] - 11, `${I('P')}(${X}, ${Y})`, { anchor: 'start', size: 14, color: C.amber });
    const mid: P = [(c[0] + p[0]) / 2, (c[1] + p[1]) / 2];
    lab(s, mid[0] + 12, mid[1] + 14, I('r'), { anchor: 'start', size: 15, color: C.amber });
    lab(s, ins[0] + 9, ins[1] + 5, `${S1} < 0`, { anchor: 'start', size: 14 });
    lab(s, e[0] + 10, e[1] + 5, `${S1} > 0`, { anchor: 'start', size: 14, color: C.amber });
    const me: P = [(e[0] + t[0]) / 2, (e[1] + t[1]) / 2];
    lab(s, me[0] + 12, me[1] + 6, `ℓ = √${S1}`, { anchor: 'start', size: 14, color: C.amber });
    lab(s, b[0] + 3, b[1] - 12, I('B'), { anchor: 'start', size: 15 });
    lab(s, g.ox - 6, a[1] + 18, I('A'), { anchor: 'end', size: 15 });
    lab(s, c[0] - 10, c[1] + 27, `${I('C')}(${I('h')}, ${I('k')})`, { size: 14 });
    return s;
  },
  check() {
    const s = fig102.draw(fig102.cases[0]), out: Check[] = [], g = G102, k = K102;
    const S = (v: P) => (v[0] - k.c[0]) ** 2 + (v[1] - k.c[1]) ** 2 - k.r ** 2;
    const on = ['A', 'B', 'Q', 'P'].map((n) => unPx(g, dotAt(s, n)!)).every((v) => close(S(v), 0, 1e-6));
    out.push(['A, B, Q and P lie on the circle (x − 1.5)² + (y − 1.5)² = 1.5², which touches the x-axis (k = r)', on && close(k.c[1], k.r)]);
    const [a, b, q, c] = ['A', 'B', 'Q', 'C'].map((n) => unPx(g, dotAt(s, n)!));
    out.push(['AB is a diameter: its midpoint is the centre C(h, k)', close((a[0] + b[0]) / 2, c[0]) && close((a[1] + b[1]) / 2, c[1])]);
    out.push(['The angle AQB in the semicircle is 90°: QA · QB = 0', close((a[0] - q[0]) * (b[0] - q[0]) + (a[1] - q[1]) * (b[1] - q[1]), 0, 1e-9)]);
    const T = touch102(), e = k.out;
    out.push(['The tangent from the outside point meets the radius at its point of contact at 90°', close((T[0] - k.c[0]) * (e[0] - T[0]) + (T[1] - k.c[1]) * (e[1] - T[1]), 0, 1e-9)]);
    out.push([`S₁ < 0 inside (${fmt(S(k.inside))}), S₁ > 0 outside (${fmt(S(e))}), and the tangent length ${fmt(Math.hypot(e[0] - T[0], e[1] - T[1]))} = √S₁ = √${fmt(S(e))}`, S(k.inside) < 0 && S(e) > 0 && close(Math.hypot(e[0] - T[0], e[1] - T[1]), Math.sqrt(S(e)), 1e-9)]);
    out.push(labelsCheck(s, ['∠AQB = 90°', 'Q', 'P(x, y)', 'r', 'S1 < 0', 'S1 > 0', 'ℓ = √S1', 'B', 'A', 'C(h, k)', 'x', 'y']));
    out.push(noBadChars(s, fig102));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.3 · anatomy of the parabola (Topic 03, p. 913)              */
/* ===================================================================== */
const CAP103 = `Anatomy of the parabola ${sq(Y)} = 4${I('ax')}: the focus–directrix property ${I('SP')} = ${I('PM')} made visible, and the latus rectum ${I('LL')}′ of length 4${A}.`;
const G103: Gr = { ox: 118, oy: 182, ux: 42, uy: 42 };
const P103: P = [2.25, 3];
const fig103: Diagram = {
  id: 'm11-10-fig-10.3',
  topic: 2,
  name: 'Anatomy of the parabola',
  cases: [{ chip: 'Parabola', cap: CAP103 }],
  draw() {
    const s = new Sketch(W, 344), g = G103;
    axes(s, g, [-2.6, 4.9], [-3.8, 3.75]);
    gpath(s, g, Array.from({ length: 121 }, (_, i): P => { const t = -1.86 + (3.72 * i) / 120; return [t * t, 2 * t]; }), { w: 2.2, name: 'parabola' });
    gpath(s, g, [[-1, -3.8], [-1, 3.8]], { w: 1.6, dash: '7 5', name: 'directrix' });
    const [m, p, sF, l, l2, o] = ([[-1, 3], P103, [1, 0], [1, 2], [1, -2], [0, 0]] as P[]).map((v) => gp(g, v));
    path(s, [l, l2], { w: 2.2, name: 'latus rectum' });
    path(s, [m, p], { color: C.mari, w: 1.8, dash: '6 4', name: 'PM' });
    path(s, [sF, p], { color: C.mari, w: 1.8, name: 'SP' });
    ticks(s, m, p, 2, C.mari);
    ticks(s, sF, p, 2, C.mari);
    rightMark(s, m, [1, 0], [0, 1], 7);
    pt(s, m, 'M');
    pt(s, p, 'P');
    pt(s, l, 'L');
    pt(s, l2, 'L′');
    pt(s, o, 'O');
    pt(s, sF, 'S', C.mari);
    lab(s, m[0] - 9, m[1] - 7, I('M'), { anchor: 'end', size: 15 });
    lab(s, gx(g, -1) - 7, gy(g, -2.0), 'directrix', { anchor: 'end', size: 13 });
    lab(s, gx(g, -1) - 7, gy(g, -2.0) + 18, `${X} = −${A}`, { anchor: 'end', size: 14 });
    lab(s, (m[0] + g.ox) / 2, m[1] - 9, I('PM'), { size: 14, color: C.amber });
    lab(s, p[0] - 2, p[1] - 12, `${I('P')}(${X}, ${Y})`, { anchor: 'end', size: 14 });
    lab(s, gx(g, 2.75), gy(g, 2.25), `${I('SP')} = ${I('PM')}`, { anchor: 'start', size: 15, color: C.amber });
    lab(s, (sF[0] + p[0]) / 2 + 12, (sF[1] + p[1]) / 2 + 5, I('SP'), { anchor: 'start', size: 14, color: C.amber });
    lab(s, gx(g, 0.1), gy(g, 2.4), `${I('L')}(${A}, 2${A})`, { anchor: 'start', size: 11.5 });
    lab(s, gx(g, 0.1), gy(g, -2.76), `${I('L')}′(${A}, −2${A})`, { anchor: 'start', size: 11.5 });
    lab(s, sF[0] + 7, sF[1] + 17, `${I('S')}(${A}, 0)`, { anchor: 'start', size: 14, color: C.amber });
    lab(s, sF[0] + 8, gy(g, -1.15), `4${A}`, { anchor: 'start', size: 14 });
    lab(s, o[0] - 6, o[1] + 17, I('O'), { anchor: 'end', size: 15 });
    lab(s, gx(g, 3.9), g.oy - 8, 'axis', { size: 13, color: C.slate });
    lab(s, gx(g, 4.6), gy(g, -2.7), `${sq(Y)} = 4${I('ax')}`, { anchor: 'end', size: 15 });
    return s;
  },
  check() {
    const s = fig103.draw(fig103.cases[0]), out: Check[] = [], g = G103, a = 1;
    const [p, m, sF, l, l2] = ['P', 'M', 'S', 'L', 'L′'].map((n) => unPx(g, dotAt(s, n)!));
    out.push([`P(${fmt(p[0])}, ${fmt(p[1])}) lies on y² = 4ax with a = 1`, close(p[1] ** 2, 4 * a * p[0])]);
    out.push([`SP = ${fmt(len(sF, p))} = PM = ${fmt(len(m, p))}: M is the foot of the perpendicular from P on the directrix x = −a`, close(len(sF, p), len(m, p)) && close(m[0], -a) && close(m[1], p[1])]);
    out.push([`The latus rectum LL′ through S(a, 0) has length ${fmt(len(l, l2))} = 4a, its ends L(a, 2a) and L′(a, −2a) on the curve`, close(sF[0], a) && close(sF[1], 0) && close(len(l, l2), 4 * a) && close(l[1] ** 2, 4 * a * l[0]) && close(l2[1], -2 * a)]);
    out.push(labelsCheck(s, ['M', 'directrix', 'x = −a', 'PM', 'P(x, y)', 'SP = PM', 'SP', 'L(a, 2a)', 'L′(a, −2a)', 'S(a, 0)', '4a', 'O', 'axis', 'y2 = 4ax']));
    out.push(noBadChars(s, fig103));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.4 · anatomy of the ellipse (Topic 04, p. 922)               */
/* ===================================================================== */
const CAP104 = `Anatomy of the ellipse ${fr(sq(X), sq(A))} + ${fr(sq(Y), sq(B))} = 1, drawn with ${A} = 5 and ${B} = 3: vertices, foci, the two focal radii summing to 2${A}, the latus rectum ${fr(`2${sq(B)}`, A)} and the directrices ${X} = ±${fr(A, E)}.`;
const G104: Gr = { ox: 170, oy: 106, ux: 22, uy: 22 };
const E104 = { a: 5, b: 3, c: 4, P: [-(5 * Math.sqrt(5)) / 3, 2] as P };
const fig104: Diagram = {
  id: 'm11-10-fig-10.4',
  topic: 3,
  name: 'Anatomy of the ellipse',
  cases: [{ chip: 'Ellipse', cap: CAP104 }],
  draw() {
    const s = new Sketch(W, 214), g = G104, { a, b, c } = E104, dr = (a * a) / c;
    axes(s, g, [-7.4, 7.0], [-4.6, 4.3], { xName: [-12, -9] });
    gpath(s, g, ellPts(a, b), { w: 2.2, name: 'ellipse' });
    const [p, sF, sF2, aR, aL, bT, bB, o] = ([E104.P, [c, 0], [-c, 0], [a, 0], [-a, 0], [0, b], [0, -b], [0, 0]] as P[]).map((v) => gp(g, v));
    path(s, [sF2, p], { color: C.mari, w: 2, name: 'S′P' });
    path(s, [sF, p], { color: C.mari, w: 2, name: 'SP' });
    arr(s, gp(g, [c, -(b * b) / a]), gp(g, [c, (b * b) / a]), { both: true, w: 1.8, head: 7, name: 'latus rectum' });
    [['A', aR], ['A′', aL], ['B', bT], ['B′', bB], ['O', o], ['P', p], ['S', sF], ['S′', sF2]].forEach(([n, v]) => pt(s, v as P, n as string));
    const la = lab(s, gx(g, a) + 6, g.oy + 15, `${I('A')}(${A}, 0)`, { anchor: 'start', size: 11.5 });
    const la2 = lab(s, gx(g, -a) - 6, g.oy + 15, `${I('A')}′(−${A}, 0)`, { anchor: 'end', size: 11.5 });
    brokenPath(s, [gp(g, [dr, -4.6]), gp(g, [dr, 4.3])], [la], 4.5, { w: 1.4, dash: '6 4', name: 'directrix' });
    brokenPath(s, [gp(g, [-dr, -4.6]), gp(g, [-dr, 4.3])], [la2], 4.5, { w: 1.4, dash: '6 4', name: 'directrix' });
    runs(s, gx(g, -dr) + 6, gy(g, 3.55), [{ t: `${X} = −` }, { num: A, den: E }], { size: 13 });
    runs(s, gx(g, dr) - 6, gy(g, 3.55), [{ t: `${X} = ` }, { num: A, den: E }], { size: 13, anchor: 'end' });
    lab(s, bT[0] - 7, bT[1] - 9, `${I('B')}(0, ${B})`, { anchor: 'end', size: 12 });
    lab(s, bB[0] + 6, bB[1] + 17, `${I('B')}′(0, −${B})`, { anchor: 'start', size: 12 });
    lab(s, p[0] - 7, p[1] - 9, I('P'), { anchor: 'end', size: 15 });
    lab(s, sF2[0] + 6, sF2[1] + 17, `${I('S')}′(−${I('ae')}, 0)`, { anchor: 'start', size: 12 });
    lab(s, sF[0] - 6, sF[1] + 15, `${I('S')}(${I('ae')}, 0)`, { anchor: 'end', size: 12 });
    lab(s, o[0] - 7, o[1] + 17, I('O'), { anchor: 'end', size: 14 });
    const m2: P = [(sF2[0] + p[0]) / 2, (sF2[1] + p[1]) / 2], m1: P = [(sF[0] + p[0]) / 2, (sF[1] + p[1]) / 2];
    lab(s, m2[0] + 7, m2[1] + 6, I('S′P'), { anchor: 'start', size: 13, color: C.amber });
    lab(s, m1[0] + 26, m1[1] - 7, I('SP'), { size: 13, color: C.amber });
    runs(s, gx(g, c) + 15, gy(g, 2.05), [{ num: `2${sq(B)}`, den: A }], { size: 13 });
    lab(s, gx(g, -5.9), gy(g, -4.15), `${I('SP')} + ${I('S')}′${I('P')} = 2${A}`, { anchor: 'start', size: 14, color: C.amber });
    return s;
  },
  check() {
    const s = fig104.draw(fig104.cases[0]), out: Check[] = [], g = G104, { a, b, c } = E104, e = c / a;
    out.push([`b² = a²(1 − e²): 9 = 25(1 − ${fmt(e * e)}), so e = 4/5 and ae = 4`, close(b * b, a * a * (1 - e * e)) && close(a * e, c)]);
    const [p, sF, sF2] = ['P', 'S', 'S′'].map((n) => unPx(g, dotAt(s, n)!));
    out.push([`P(${fmt(p[0])}, ${fmt(p[1])}) lies on the ellipse, and SP + S′P = ${fmt(len(sF, p))} + ${fmt(len(sF2, p))} = ${fmt(len(sF, p) + len(sF2, p))} = 2a`, close(p[0] ** 2 / 25 + p[1] ** 2 / 9, 1) && close(len(sF, p) + len(sF2, p), 2 * a)]);
    const lr = drawn(s, g, 'latus rectum')[0], dx = drawn(s, g, 'directrix').flat().map((v) => v[0]);
    out.push([`The drawn latus rectum stands at x = ae = ${c} and spans y = ±b²/a = ±${fmt((b * b) / a)} (length 2b²/a = ${fmt((2 * b * b) / a)}), its ends on the ellipse; the drawn directrices stand at x = ±a/e = ±${fmt(a / e)}`, lr.every((v) => close(v[0], c) && close(Math.abs(v[1]), (b * b) / a) && close(v[0] ** 2 / 25 + v[1] ** 2 / 9, 1)) && close(lr[0][1], -lr[1][1]) && dx.every((x) => close(Math.abs(x), a / e)) && dx.some((x) => x > 0) && dx.some((x) => x < 0)]);
    out.push(stackedCheck(s, ['a/e', 'a/e', '2b2/a']));
    out.push(labelsCheck(s, ['A(a, 0)', 'A′(−a, 0)', 'B(0, b)', 'B′(0, −b)', 'P', 'S′(−ae, 0)', 'S(ae, 0)', 'O', 'S′P', 'SP', 'SP + S′P = 2a', 'x = −a/e', 'x = a/e', '2b2/a']));
    out.push(noBadChars(s, fig104));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.5 · anatomy of the hyperbola (Topic 05, p. 930)             */
/* ===================================================================== */
const CAP105 = `Anatomy of the hyperbola ${fr(sq(X), sq(A))} − ${fr(sq(Y), sq(B))} = 1, drawn with ${A} = 4 and ${B} = 3: branches hugging the asymptotes ${Y} = ±${fr(B, A)}${X}, foci outside the vertices, the conjugate axis, the latus rectum, and focal radii differing by 2${A}.`;
const G105: Gr = { ox: 170, oy: 126, ux: 19, uy: 19 };
const H105 = { a: 4, b: 3, c: 5, P: [4 * Math.sqrt(1 + 1.44), -3.6] as P };
const fig105: Diagram = {
  id: 'm11-10-fig-10.5',
  topic: 4,
  name: 'Anatomy of the hyperbola',
  cases: [{ chip: 'Hyperbola', cap: CAP105 }],
  draw() {
    const s = new Sketch(W, 250), g = G105, { a, b, c } = H105;
    axes(s, g, [-8.6, 8.4], [-6.3, 6.2], { xName: [-12, 19] });
    gpath(s, g, hypPts(a, b, 1, 8.4, 6.3), { w: 2.2, name: 'right branch' });
    gpath(s, g, hypPts(a, b, -1, 8.6, 6.3), { w: 2.2, name: 'left branch' });
    gpath(s, g, [[0, -b], [0, b]], { w: 2.4, name: 'conjugate axis' });
    arr(s, gp(g, [c, -(b * b) / a]), gp(g, [c, (b * b) / a]), { both: true, w: 1.8, head: 6, name: 'latus rectum' });
    const [p, sF, sF2] = [H105.P, [c, 0] as P, [-c, 0] as P].map((v) => gp(g, v));
    path(s, [sF2, p], { color: C.mari, w: 2, name: 'S′P' });
    path(s, [sF, p], { color: C.mari, w: 2, name: 'SP' });
    ([['A', [a, 0]], ['A′', [-a, 0]], ['O', [0, 0]], ['P', H105.P], ['S', [c, 0]], ['S′', [-c, 0]], ['B', [0, b]], ['B′', [0, -b]]] as [string, P][]).forEach(([n, v]) => pt(s, gp(g, v), n));
    const keepOff = [
      runs(s, gx(g, 3.0), gy(g, 5.55), [{ t: `${Y} = ` }, { num: B, den: A }, { t: X }], { size: 12.5, color: C.slate }),
      runs(s, gx(g, 3.0), gy(g, -5.35), [{ t: `${Y} = −` }, { num: B, den: A }, { t: X }], { size: 12.5, color: C.slate }),
      lab(s, gx(g, -0.5), gy(g, 4.6), 'conjugate axis', { anchor: 'end', size: 12.5 }),
      lab(s, gx(g, 0) + 9, gy(g, b) + 4, `(0, ${B})`, { anchor: 'start', size: 12 }),
      lab(s, gx(g, 0) + 9, gy(g, -b) + 9, `(0, −${B})`, { anchor: 'start', size: 12 }),
      lab(s, gx(g, a) - 7, g.oy - 8, `${I('A')}(${A}, 0)`, { anchor: 'end', size: 12 }),
      lab(s, gx(g, -a) + 8, g.oy - 8, `${I('A')}′(−${A}, 0)`, { anchor: 'start', size: 11.5 }),
      lab(s, sF[0] + 7, sF[1] - 8, `${I('S')}(${I('ae')}, 0)`, { anchor: 'start', size: 12 }),
      lab(s, sF2[0] - 7, sF2[1] + 17, `${I('S')}′(−${I('ae')}, 0)`, { anchor: 'end', size: 12 }),
      lab(s, g.ox + 7, g.oy + 17, I('O'), { anchor: 'start', size: 14 }),
      lab(s, p[0] + 9, p[1] - 5, I('P'), { anchor: 'start', size: 15 }),
      runs(s, sF[0] + 13, gy(g, 1.75), [{ num: `2${sq(B)}`, den: A }], { size: 12.5 }),
      lab(s, gx(g, -3.5), gy(g, -5.1), `${I('S')}′${I('P')} − ${I('SP')} = 2${A}`, { size: 14, color: C.amber }),
    ];
    // the asymptotes are helper lines: they break round a label rather than run through it
    const xa = 6.3 * (a / b);
    brokenPath(s, [gp(g, [-xa, -6.3]), gp(g, [xa, 6.3])], keepOff, 7, { color: C.slate, w: 1.2, dash: '5 4', name: 'asymptote' });
    brokenPath(s, [gp(g, [-xa, 6.3]), gp(g, [xa, -6.3])], keepOff, 7, { color: C.slate, w: 1.2, dash: '5 4', name: 'asymptote' });
    return s;
  },
  check() {
    const s = fig105.draw(fig105.cases[0]), out: Check[] = [], g = G105, { a, b, c } = H105;
    out.push(['b² = a²(e² − 1): 9 = 16(25/16 − 1), so ae = 5', close(b * b, a * a * ((c / a) ** 2 - 1))]);
    const [p, sF, sF2] = ['P', 'S', 'S′'].map((n) => unPx(g, dotAt(s, n)!));
    out.push([`P(${fmt(p[0])}, ${fmt(p[1])}) lies on the right branch, and S′P − SP = ${fmt(len(sF2, p))} − ${fmt(len(sF, p))} = ${fmt(len(sF2, p) - len(sF, p))} = 2a`, close(p[0] ** 2 / 16 - p[1] ** 2 / 9, 1) && p[0] > 0 && close(len(sF2, p) - len(sF, p), 2 * a)]);
    const [vA, vA2] = ['A', 'A′'].map((n) => unPx(g, dotAt(s, n)!)), lr = drawn(s, g, 'latus rectum')[0];
    out.push(['The foci (±5, 0) lie outside the vertices (±4, 0); the drawn latus rectum stands at x = 5 and runs to y = ±b²/a = ±2.25, its ends on the curve', close(sF[0], c) && close(sF2[0], -c) && close(vA[0], a) && close(vA2[0], -a) && sF[0] > vA[0] && lr.every((v) => close(v[0], c) && close(Math.abs(v[1]), 2.25) && close(v[0] ** 2 / 16 - v[1] ** 2 / 9, 1)) && close(lr[0][1], -lr[1][1])]);
    out.push(stackedCheck(s, ['b/a', 'b/a', '2b2/a']));
    out.push(labelsCheck(s, ['y = b/ax', 'y = −b/ax', 'conjugate axis', '(0, b)', '(0, −b)', 'A(a, 0)', 'A′(−a, 0)', 'S(ae, 0)', 'S′(−ae, 0)', 'O', 'P', '2b2/a', 'S′P − SP = 2a']));
    out.push(noBadChars(s, fig105));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.6 · the auxiliary circle and the eccentric angle (Topic 06)  */
/* ===================================================================== */
const CAP106 = `The auxiliary circle and the eccentric angle: the radius ${I('OQ')} at angle ${TH} drops to ${I('N')}, cutting the ellipse at ${I('P')} with ${I('PN')} ∶ ${I('QN')} = ${B} ∶ ${A}, and ${I('OP')} makes a different, shallower angle ${PH}.`;
const G106: Gr = { ox: 150, oy: 156, ux: 50, uy: 50 };
const K106 = { a: 2.5, b: 1.5, th: 60 };
const fig106: Diagram = {
  id: 'm11-10-fig-10.6',
  topic: 5,
  name: 'The auxiliary circle and the eccentric angle',
  cases: [{ chip: 'Auxiliary circle', cap: CAP106 }],
  draw() {
    const s = new Sketch(W, 344), g = G106, { a, b, th } = K106, ct = Math.cos(th * DEG), st = Math.sin(th * DEG);
    axes(s, g, [-2.85, 3.5], [-2.85, 2.85], { xName: [-12, 19] });
    gpath(s, g, ellPts(a, b), { w: 2.2, name: 'ellipse' });
    const [o, q, p, n] = ([[0, 0], [a * ct, a * st], [a * ct, b * st], [a * ct, 0]] as P[]).map((v) => gp(g, v));
    path(s, [q, n], { w: 1.2, dash: '3 3', name: 'QN' });
    rightMark(s, n, [-1, 0], [0, -1], 6);
    path(s, [o, q], { color: C.mari, w: 2, name: 'OQ' });
    path(s, [o, p], { w: 2, name: 'OP' });
    const phi = angOf(o, p);
    path(s, arcPts(o, 46, 0, th), { color: C.mari, w: 1.6, name: 'θ arc' });
    path(s, arcPts(o, 22, 0, phi), { w: 1.4, name: 'φ arc' });
    pt(s, q, 'Q', C.mari);
    pt(s, p, 'P');
    pt(s, n, 'N');
    pt(s, o, 'O');
    pt(s, gp(g, [a, 0]), '(a, 0)');
    pt(s, gp(g, [-a, 0]), '(−a, 0)');
    const tc = pol(o, 58, 30), fc = pol(o, 33, 23);
    lab(s, tc[0], tc[1] + 4.5, TH, { size: 13, color: C.amber });
    lab(s, fc[0], fc[1] + 4.5, PH, { size: 13 });
    const keepOff = [
      lab(s, q[0] + 10, q[1] - 12, `${I('Q')}(${A} cos ${TH}, ${A} sin ${TH})`, { anchor: 'start', size: 11.5, color: C.amber }),
      lab(s, p[0] + 8, p[1] - 8, `${I('P')}(${A} cos ${TH}, ${B} sin ${TH})`, { anchor: 'start', size: 11.5 }),
      lab(s, q[0] + 6, gy(g, 1.85), I('QN'), { anchor: 'start', size: 11.5, color: C.slate }),
      lab(s, gx(g, -2.85), gy(g, 2.6), `${sq(X)} + ${sq(Y)} = ${sq(A)}`, { anchor: 'start', size: 12, color: C.slate }),
    ];
    lab(s, p[0] + 6, (p[1] + n[1]) / 2 + 4, I('PN'), { anchor: 'start', size: 11.5, color: C.slate });
    lab(s, n[0] + 6, n[1] + 17, I('N'), { anchor: 'start', size: 13 });
    lab(s, o[0] - 7, o[1] + 16, I('O'), { anchor: 'end', size: 13 });
    lab(s, gx(g, a) - 10, g.oy + 18, `(${A}, 0)`, { anchor: 'end', size: 11.5 });
    lab(s, gx(g, -a) + 10, g.oy + 18, `(−${A}, 0)`, { anchor: 'start', size: 11.5 });
    runs(s, gx(g, -1.05), gy(g, 0.7), [{ num: I('PN'), den: I('QN') }, { t: ' = ' }, { num: B, den: A }], { size: 13, anchor: 'middle' });
    runs(s, gx(g, -2.88), gy(g, -2.5), [{ num: sq(X), den: sq(A) }, { t: ' + ' }, { num: sq(Y), den: sq(B) }, { t: ' = 1' }], { size: 12 });
    // the auxiliary circle is a helper: it breaks round the labels it would run through
    brokenPath(s, ellPts(a, a, 0, 2 * Math.PI, 240).map((v) => gp(g, v)), keepOff, 4.5, { color: C.slate, w: 1.4, name: 'auxiliary circle' });
    runs(s, W / 2, 330, [{ t: `tan ${PH} = ` }, { num: B, den: A }, { t: ` tan ${TH}, so ${TH} ≠ ${PH}` }], { size: 13.5, anchor: 'middle' });
    return s;
  },
  check() {
    const s = fig106.draw(fig106.cases[0]), out: Check[] = [], g = G106, { a, b, th } = K106;
    const [q, p, n, o] = ['Q', 'P', 'N', 'O'].map((k) => unPx(g, dotAt(s, k)!));
    out.push([`Q(${fmt(q[0])}, ${fmt(q[1])}) lies on x² + y² = a² at angle θ = ${fmt(angOf([0, 0], [q[0], -q[1]]))}°; P lies on the ellipse straight below it; N is the foot on the x-axis`, close(q[0] ** 2 + q[1] ** 2, a * a) && close((p[0] / a) ** 2 + (p[1] / b) ** 2, 1) && close(p[0], q[0]) && close(n[0], q[0]) && close(n[1], 0) && close(Math.atan2(q[1], q[0]) / DEG, th)]);
    out.push([`PN/QN = ${fmt(p[1] / q[1], 4)} = b/a = ${fmt(b / a, 4)}`, close(p[1] / q[1], b / a)]);
    const phi = Math.atan2(p[1] - o[1], p[0] - o[0]) / DEG;
    out.push([`tan φ = (b/a) tan θ: φ = ${fmt(phi)}° < θ = ${th}°`, close(Math.tan(phi * DEG), (b / a) * Math.tan(th * DEG)) && phi < th]);
    out.push(stackedCheck(s, ['PN/QN', 'b/a', 'x2/a2', 'y2/b2', 'b/a']));
    out.push(labelsCheck(s, ['Q(a cos θ, a sin θ)', 'P(a cos θ, b sin θ)', 'QN', 'PN', 'N', 'O', '(a, 0)', '(−a, 0)', 'θ', 'φ', 'PN/QN = b/a', 'x2 + y2 = a2', 'x2/a2 + y2/b2 = 1', 'tan φ = b/a tan θ, so θ ≠ φ']));
    out.push(noBadChars(s, fig106));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.7 · why the hyperbola uses sec θ and tan θ (Topic 06)        */
/* ===================================================================== */
const CAP107 = `Why the hyperbola uses sec ${TH} and tan ${TH}: the tangent to the auxiliary circle at ${I('Q')} meets the transverse axis at ${I('N')}(${A} sec ${TH}, 0), and the vertical through ${I('N')} meets the right branch at ${I('P')}(${A} sec ${TH}, ${B} tan ${TH}).`;
const G107: Gr = { ox: 118, oy: 138, ux: 42, uy: 42 };
const K107 = { a: 1.5, b: 1, th: 50 };
const fig107: Diagram = {
  id: 'm11-10-fig-10.7',
  topic: 5,
  name: 'Why the hyperbola uses sec and tan',
  cases: [{ chip: 'Hyperbola', cap: CAP107 }],
  draw() {
    const s = new Sketch(W, 252), g = G107, { a, b, th } = K107, sec = 1 / Math.cos(th * DEG), tn = Math.tan(th * DEG);
    axes(s, g, [-2.6, 5.0], [-2.6, 2.6], { xName: [-12, -9] });
    gpath(s, g, hypPts(a, b, 1, 5.0, 2.6), { w: 2.2, name: 'right branch' });
    gpath(s, g, hypPts(a, b, -1, 2.6, 2.6), { w: 2.2, name: 'left branch' });
    const qd: P = [a * Math.cos(th * DEG), a * Math.sin(th * DEG)];
    const [o, q, n, p, top] = ([[0, 0], qd, [a * sec, 0], [a * sec, b * tn], [0, a / Math.sin(th * DEG)]] as P[]).map((v) => gp(g, v));
    path(s, [top, n], { color: C.mari, w: 2, name: 'tangent at Q' });
    path(s, [o, q], { color: C.mari, w: 2, name: 'OQ' });
    rightMark(s, q, unit(q, o), unit(q, n), 7, C.mari);
    path(s, arcPts(o, 24, 0, th), { color: C.mari, w: 1.5, name: 'θ arc' });
    path(s, [n, p], { w: 1.3, dash: '3 3', name: 'NP' });
    pt(s, q, 'Q', C.mari);
    pt(s, p, 'P');
    pt(s, n, 'N');
    pt(s, o, 'O');
    pt(s, gp(g, [a, 0]), '(a, 0)');
    pt(s, gp(g, [-a, 0]), '(−a, 0)');
    const tc = pol(o, 35, 24);
    const keepOff = [
      lab(s, tc[0], tc[1] + 5, TH, { size: 14, color: C.amber }),
      lab(s, q[0] + 7, q[1] - 10, I('Q'), { anchor: 'start', size: 14, color: C.amber }),
      lab(s, gx(g, 0.55), gy(g, 2.85), `tangent to the circle at ${I('Q')}`, { anchor: 'start', size: 11.5, color: C.amber }),
      lab(s, p[0] + 7, p[1] + 21, `${I('P')}(${A} sec ${TH}, ${B} tan ${TH})`, { anchor: 'start', size: 11 }),
      lab(s, n[0] + 2, n[1] + 17, `${I('N')}(${A} sec ${TH}, 0)`, { anchor: 'start', size: 11 }),
      lab(s, gx(g, -a) - 12, g.oy + 18, `(−${A}, 0)`, { anchor: 'end', size: 11.5 }),
      lab(s, o[0] - 7, o[1] + 17, I('O'), { anchor: 'end', size: 13 }),
      runs(s, gx(g, -2.55), gy(g, 2.4), [{ num: sq(X), den: sq(A) }, { t: ' − ' }, { num: sq(Y), den: sq(B) }, { t: ' = 1' }], { size: 12 }),
      lab(s, gx(g, -2.3), gy(g, -2.15), `${sq(X)} + ${sq(Y)} = ${sq(A)}`, { anchor: 'start', size: 12, color: C.slate }),
      runs(s, gx(g, 0.35), gy(g, -2.2), [{ t: `${Y} = ±` }, { num: B, den: A }, { t: X }], { size: 12, color: C.slate }),
    ];
    const la = lab(s, gx(g, a) - 9, g.oy + 16, `(${A}, 0)`, { anchor: 'end', size: 11 });
    // helper lines break round the labels rather than run through them
    const ya = 2.6;
    brokenPath(s, [gp(g, [-2.6, (-2.6 * b) / a]), gp(g, [(ya * a) / b, ya])], [...keepOff, la], 7, { color: C.slate, w: 1.1, dash: '5 4', name: 'asymptote' });
    brokenPath(s, [gp(g, [-2.6, (2.6 * b) / a]), gp(g, [(ya * a) / b, -ya])], [...keepOff, la], 7, { color: C.slate, w: 1.1, dash: '5 4', name: 'asymptote' });
    brokenPath(s, ellPts(a, a, 0, 2 * Math.PI, 200).map((v) => gp(g, v)), keepOff, 4.5, { color: C.slate, w: 1.4, name: 'auxiliary circle' });
    return s;
  },
  check() {
    const s = fig107.draw(fig107.cases[0]), out: Check[] = [], g = G107, { a, b, th } = K107;
    const [q, n, p] = ['Q', 'N', 'P'].map((k) => unPx(g, dotAt(s, k)!));
    out.push([`Q(${fmt(q[0])}, ${fmt(q[1])}) lies on the auxiliary circle at θ = ${th}°, and the tangent there (QN ⟂ OQ) meets the x-axis at N(a sec θ, 0) = (${fmt(n[0])}, 0)`, close(q[0] ** 2 + q[1] ** 2, a * a) && close(q[0] * (n[0] - q[0]) + q[1] * (n[1] - q[1]), 0, 1e-9) && close(n[0], a / Math.cos(th * DEG)) && close(n[1], 0)]);
    out.push([`P(a sec θ, b tan θ) = (${fmt(p[0])}, ${fmt(p[1])}) is straight above N and on x²/a² − y²/b² = 1, since sec²θ − tan²θ = 1`, close(p[0], n[0]) && close(p[0] ** 2 / (a * a) - p[1] ** 2 / (b * b), 1) && close(p[1], b * Math.tan(th * DEG))]);
    out.push(stackedCheck(s, ['x2/a2', 'y2/b2', 'b/a']));
    out.push(labelsCheck(s, ['Q', 'θ', 'tangent to the circle at Q', 'P(a sec θ, b tan θ)', 'N(a sec θ, 0)', '(a, 0)', '(−a, 0)', 'O', 'x2/a2 − y2/b2 = 1', 'x2 + y2 = a2', 'y = ±b/ax']));
    out.push(noBadChars(s, fig107));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.8 · the director circle (Topic 07, p. 954)                  */
/* ===================================================================== */
const CAP108 = `The director circle ${sq(X)} + ${sq(Y)} = ${sq(A)} + ${sq(B)}: from any point ${I('P')} on it the two tangents to the ellipse are perpendicular, and their points of contact join in the chord of contact.`;
const G108: Gr = { ox: 146, oy: 150, ux: 48, uy: 48 };
const K108 = { a: 2, b: 1.5, P: [1.5, 2] as P };
/** The two tangents y = mx + c from P to the ellipse, and their points of contact (−a²m/c, b²/c). */
const tangents108 = () => {
  const { a, b, P: [x1, y1] } = K108;
  // (y1 − m x1)² = a²m² + b²  ⇒  (x1² − a²)m² − 2x1y1 m + (y1² − b²) = 0
  const A2 = x1 * x1 - a * a, B2 = -2 * x1 * y1, C2 = y1 * y1 - b * b, D = Math.sqrt(B2 * B2 - 4 * A2 * C2);
  return [(-B2 + D) / (2 * A2), (-B2 - D) / (2 * A2)].map((m) => { const c = y1 - m * x1; return { m, c, T: [(-a * a * m) / c, (b * b) / c] as P }; });
};
const fig108: Diagram = {
  id: 'm11-10-fig-10.8',
  topic: 6,
  name: 'The director circle of the ellipse',
  cases: [{ chip: 'Director circle', cap: CAP108 }],
  draw() {
    const s = new Sketch(W, 310), g = G108, { a, b, P: Pd } = K108, R = Math.hypot(a, b);
    axes(s, g, [-2.95, 3.85], [-3.1, 2.9], { xName: [-12, -9] });
    gpath(s, g, ellPts(R, R), { w: 1.5, dash: '6 4', name: 'director circle' });
    gpath(s, g, ellPts(a, b), { w: 2.2, name: 'ellipse' });
    const [t1, t2] = tangents108().sort((u, v) => v.T[0] - u.T[0]);
    const p = gp(g, Pd), T1 = gp(g, t1.T), T2 = gp(g, t2.T);
    const ext = (from: P, to: P, k: number): P => [to[0] + (to[0] - from[0]) * k, to[1] + (to[1] - from[1]) * k];
    path(s, [ext(T1, p, 0.15), ext(p, T1, 0.22)], { color: C.mari, w: 2, name: 'tangent PT1' });
    path(s, [ext(T2, p, 0.1), ext(p, T2, 0.35)], { color: C.mari, w: 2, name: 'tangent PT2' });
    rightMark(s, p, unit(p, T1), unit(p, T2), 9, C.mari);
    path(s, [T1, T2], { w: 1.5, dash: '6 4', name: 'chord of contact' });
    pt(s, p, 'P', C.mari);
    pt(s, T1, 'T1');
    pt(s, T2, 'T2');
    pt(s, gp(g, [0, 0]), 'O');
    lab(s, p[0] + 9, p[1] - 11, I('P'), { anchor: 'start', size: 15, color: C.amber });
    lab(s, T2[0] - 7, T2[1] - 11, `${I('T')}<sub>2</sub>`, { anchor: 'end', size: 14 });
    lab(s, T1[0] + 1.3, T1[1] - 16.5, `${I('T')}<sub>1</sub>`, { anchor: 'start', size: 12.5 });
    lab(s, gx(g, 0.16), gy(g, 0.4), 'chord of', { anchor: 'start', size: 11 });
    lab(s, gx(g, 0.16), gy(g, 0.14), 'contact', { anchor: 'start', size: 11 });
    lab(s, g.ox - 7, g.oy + 17, I('O'), { anchor: 'end', size: 14 });
    runs(s, gx(g, -2.9), gy(g, -2.65), [{ num: sq(X), den: sq(A) }, { t: ' + ' }, { num: sq(Y), den: sq(B) }, { t: ' = 1' }], { size: 12.5 });
    lab(s, W - 6, gy(g, -2.35), 'director circle', { anchor: 'end', size: 13 });
    lab(s, W - 6, gy(g, -2.75), `${sq(X)} + ${sq(Y)} = ${sq(A)} + ${sq(B)}`, { anchor: 'end', size: 13 });
    return s;
  },
  check() {
    const s = fig108.draw(fig108.cases[0]), out: Check[] = [], g = G108, { a, b, P: Pd } = K108;
    const p = unPx(g, dotAt(s, 'P')!), [t1, t2] = tangents108();
    out.push([`P(${fmt(p[0])}, ${fmt(p[1])}) lies on the director circle x² + y² = a² + b² = ${a * a + b * b}`, close(p[0] ** 2 + p[1] ** 2, a * a + b * b)]);
    out.push([`The two tangents from P have slopes ${fmt(t1.m, 3)} and ${fmt(t2.m, 3)}, product ${fmt(t1.m * t2.m, 6)} = −1: perpendicular`, close(t1.m * t2.m, -1, 1e-9)]);
    const T = ['T1', 'T2'].map((k) => unPx(g, dotAt(s, k)!));
    out.push(['T₁ and T₂ lie on the ellipse, each on its tangent, and both on the chord of contact xx₁/a² + yy₁/b² = 1', T.every((v) => close(v[0] ** 2 / (a * a) + v[1] ** 2 / (b * b), 1) && close((v[0] * Pd[0]) / (a * a) + (v[1] * Pd[1]) / (b * b), 1))]);
    out.push(stackedCheck(s, ['x2/a2', 'y2/b2']));
    out.push(labelsCheck(s, ['P', 'T2', 'T1', 'chord of', 'contact', 'O', 'x2/a2 + y2/b2 = 1', 'director circle', 'x2 + y2 = a2 + b2']));
    out.push(noBadChars(s, fig108));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.9 · the reflection property (Topic 08, p. 965)              */
/* ===================================================================== */
const CAP109 = 'The reflection property of the three conics: the parabola sends axis-parallel rays through the focus, the ellipse’s normal bisects ∠<i>SPS</i>′, and the hyperbola’s tangent does.';
type Case109 = { chip: string; cap: string; kind: 'parabola' | 'ellipse' | 'hyperbola' };
const G109: Record<Case109['kind'], Gr> = {
  parabola: { ox: 120, oy: 96, ux: 40, uy: 40 },
  ellipse: { ox: 170, oy: 114, ux: 48, uy: 48 },
  hyperbola: { ox: 170, oy: 108, ux: 52, uy: 52 },
};
const R109 = {
  parabola: { a: 1, t: 0.6 },
  ellipse: { a: 2.4, b: 1.5, th: 68 },
  hyperbola: { a: 1, b: 1.1, t: 0.85 },
};
/** The geometry of each panel, in data units: P, the tangent direction, the foci, and the lines that meet at P. */
function geo109(kind: Case109['kind']) {
  if (kind === 'parabola') {
    const { a, t } = R109.parabola, P: P = [a * t * t, 2 * a * t];
    return { P, tan: [t, 1] as P, S: [a, 0] as P, S2: null as P | null };
  }
  if (kind === 'ellipse') {
    const { a, b, th } = R109.ellipse, c = Math.sqrt(a * a - b * b), P: P = [a * Math.cos(th * DEG), b * Math.sin(th * DEG)];
    return { P, tan: [-a * Math.sin(th * DEG), b * Math.cos(th * DEG)] as P, S: [c, 0] as P, S2: [-c, 0] as P };
  }
  const { a, b, t } = R109.hyperbola, c = Math.hypot(a, b), P: P = [a * Math.cosh(t), b * Math.sinh(t)];
  return { P, tan: [a * Math.sinh(t), b * Math.cosh(t)] as P, S: [c, 0] as P, S2: [-c, 0] as P };
}
const angBetween = (u: P, v: P) => Math.acos(Math.max(-1, Math.min(1, (u[0] * v[0] + u[1] * v[1]) / (Math.hypot(...u) * Math.hypot(...v))))) / DEG;
/** An angle mark at c between two screen directions, with one small stroke across its middle. */
function angleMark(s: Sketch, c: P, d1: number, d2: number, r: number, col: string = C.ink) {
  let a0 = d1, a1 = d2;
  if (((a1 - a0 + 540) % 360) - 180 < 0) [a0, a1] = [a1, a0];
  if (a1 < a0) a1 += 360;
  path(s, arcPts(c, r, a0, a1, 16), { color: col, w: 1.2, name: 'angle mark' });
  const m = (a0 + a1) / 2;
  path(s, [pol(c, r - 3.5, m), pol(c, r + 3.5, m)], { color: col, w: 1.2, name: 'angle mark' });
}
const fig109: Diagram = {
  id: 'm11-10-fig-10.9',
  topic: 7,
  name: 'The reflection property of the three conics',
  cases: [
    { chip: 'Parabola', cap: CAP109, kind: 'parabola' },
    { chip: 'Ellipse', cap: CAP109, kind: 'ellipse' },
    { chip: 'Hyperbola', cap: CAP109, kind: 'hyperbola' },
  ] as Case109[],
  draw(c: Case109) {
    const s = new Sketch(W, 236), g = G109[c.kind], k = geo109(c.kind), p = gp(g, k.P);
    const tdir: P = [k.tan[0] * g.ux, -k.tan[1] * g.uy], tu = unit([0, 0], tdir);
    const line = (u: P, a: number, b: number) => path(s, [[p[0] - u[0] * a, p[1] - u[1] * a], [p[0] + u[0] * b, p[1] + u[1] * b]], { color: C.mari, w: 2.2, name: 'tangent or normal' });
    const sF = gp(g, k.S);
    if (c.kind === 'parabola') {
      const { a } = R109.parabola;
      gpath(s, g, [[-2.3, 0], [4.6, 0]], { color: C.slate, w: 1.1, name: 'axis' });
      gpath(s, g, [[-a, -2.15], [-a, 2.15]], { color: C.slate, w: 1.1, dash: '5 4', name: 'directrix' });
      gpath(s, g, Array.from({ length: 81 }, (_, i): P => { const t = -1.06 + (2.12 * i) / 80; return [a * t * t, 2 * a * t]; }), { w: 2.2, name: 'parabola' });
      line(tu, 34, 30);
      arr(s, gp(g, [4.6, k.P[1]]), [p[0] + 5, p[1]], { w: 1.6, head: 7, name: 'incoming ray' });
      arr(s, p, [sF[0] - unit(p, sF)[0] * 6, sF[1] - unit(p, sF)[1] * 6], { w: 1.6, head: 7, name: 'reflected ray' });
      angleMark(s, p, 0, angOf(p, [p[0] + tu[0], p[1] + tu[1]]), 15);
      angleMark(s, p, angOf(p, sF), angOf(p, [p[0] - tu[0], p[1] - tu[1]]), 15);
      pt(s, sF, 'S');
      pt(s, p, 'P');
      lab(s, p[0] - 8, p[1] - 8, I('P'), { anchor: 'end', size: 15 });
      lab(s, sF[0] + 7, sF[1] + 19, I('S'), { anchor: 'start', size: 15 });
      lab(s, p[0] + tu[0] * 30 - 1, p[1] + tu[1] * 30 - 8, 'tangent', { anchor: 'end', size: 13, color: C.amber });
      lab(s, W / 2, 206, 'parabola:', { size: 13, color: C.slate });
      lab(s, W / 2, 224, `rays parallel to the axis reflect through ${I('S')}`, { size: 13, color: C.slate });
    } else {
      const sF2 = gp(g, k.S2!);
      if (c.kind === 'ellipse') {
        const { a, b } = R109.ellipse;
        gpath(s, g, [[-2.95, 0], [2.95, 0]], { color: C.slate, w: 1.1, name: 'axis' });
        gpath(s, g, ellPts(a, b), { w: 2.2, name: 'ellipse' });
        const nu: P = [tu[1], -tu[0]];
        line(nu[1] > 0 ? nu : [-nu[0], -nu[1]], 22, 92);
      } else {
        const { a, b } = R109.hyperbola;
        gpath(s, g, [[-3.2, 0], [3.2, 0]], { color: C.slate, w: 1.1, name: 'axis' });
        gpath(s, g, hypPts(a, b, 1, 3.1, 1.7), { w: 2.2, name: 'right branch' });
        gpath(s, g, hypPts(a, b, -1, 3.1, 1.7), { w: 2.2, name: 'left branch' });
        line(tu, 34, 30);
      }
      path(s, [sF2, p], { w: 1.6, name: 'S′P' });
      path(s, [sF, p], { w: 1.6, name: 'SP' });
      const bis = c.kind === 'ellipse' ? (tu[1] > 0 ? [tu[1], -tu[0]] : [-tu[1], tu[0]]) as P : tu;
      const mid = angOf(p, [p[0] - bis[0], p[1] - bis[1]]), mid2 = angOf(p, [p[0] + bis[0], p[1] + bis[1]]);
      const toward = (q: P) => angOf(p, q);
      const near1 = (x: number) => Math.min(Math.abs(((x - mid + 540) % 360) - 180), Math.abs(((x - mid2 + 540) % 360) - 180));
      const ref = near1(toward(sF)) < 90 ? (Math.abs(((toward(sF) - mid + 540) % 360) - 180) < 90 ? mid : mid2) : mid;
      angleMark(s, p, toward(sF), ref, 16);
      angleMark(s, p, toward(sF2), ref, 22);
      pt(s, sF, 'S');
      pt(s, sF2, 'S′');
      pt(s, p, 'P');
      lab(s, sF[0] + (c.kind === 'ellipse' ? -6 : 6), sF[1] + 19, I('S'), { anchor: c.kind === 'ellipse' ? 'end' : 'start', size: 15 });
      lab(s, sF2[0] + (c.kind === 'ellipse' ? 6 : -6), sF2[1] + 19, I('S′'), { anchor: c.kind === 'ellipse' ? 'start' : 'end', size: 15 });
      if (c.kind === 'ellipse') {
        lab(s, p[0] - 10, p[1] - 12, I('P'), { anchor: 'end', size: 15 });
        lab(s, p[0] + 16, p[1] - 14, 'normal', { anchor: 'start', size: 13, color: C.amber });
        lab(s, W / 2, 206, 'ellipse:', { size: 13, color: C.slate });
        lab(s, W / 2, 224, `the normal at ${I('P')} bisects ∠${I('SPS')}′`, { size: 13, color: C.slate });
      } else {
        lab(s, p[0] + 10, p[1] + 5, I('P'), { anchor: 'start', size: 15 });
        lab(s, p[0] + tu[0] * 30 - 3, p[1] + tu[1] * 30 - 7, 'tangent', { anchor: 'end', size: 13, color: C.amber });
        lab(s, W / 2, 206, 'hyperbola:', { size: 13, color: C.slate });
        lab(s, W / 2, 224, `the tangent at ${I('P')} bisects ∠${I('SPS')}′`, { size: 13, color: C.slate });
      }
    }
    return s;
  },
  check(c: Case109) {
    const s = fig109.draw(c), out: Check[] = [], k = geo109(c.kind), P0 = k.P, t = k.tan, toS: P = [k.S[0] - P0[0], k.S[1] - P0[1]];
    if (c.kind === 'parabola') {
      const a1 = angBetween(t, [1, 0]), a2 = angBetween([-t[0], -t[1]], toS);
      out.push([`P(${fmt(P0[0])}, ${fmt(P0[1])}) on y² = 4ax; the tangent makes ${fmt(a1)}° with the axis-parallel ray and ${fmt(a2)}° with PS: equal, so the ray reflects through S`, close(P0[1] ** 2, 4 * R109.parabola.a * P0[0]) && close(a1, a2, 1e-6)]);
      out.push(labelsCheck(s, ['P', 'S', 'tangent', 'parabola:', 'rays parallel to the axis reflect through S']));
    } else {
      const toS2: P = [k.S2![0] - P0[0], k.S2![1] - P0[1]];
      if (c.kind === 'ellipse') {
        const n: P = [t[1], -t[0]], nn: P = [-n[0], -n[1]], inward = n[1] < 0 ? n : nn;
        const a1 = angBetween(inward, toS), a2 = angBetween(inward, toS2);
        out.push([`P on the ellipse; the normal makes ${fmt(a1)}° with PS and ${fmt(a2)}° with PS′: it bisects ∠SPS′`, close((P0[0] / R109.ellipse.a) ** 2 + (P0[1] / R109.ellipse.b) ** 2, 1) && close(a1, a2, 1e-6)]);
        out.push(labelsCheck(s, ['P', 'S', 'S′', 'normal', 'ellipse:', 'the normal at P bisects ∠SPS′']));
      } else {
        const a1 = angBetween(t, toS), a2 = angBetween([-t[0], -t[1]], toS2), b1 = angBetween([-t[0], -t[1]], toS), b2 = angBetween(t, toS2);
        out.push([`P on the right branch; the tangent makes equal angles (${fmt(Math.min(a1, b1))}° and ${fmt(Math.min(a2, b2))}°) with PS and PS′: it bisects ∠SPS′`, close((P0[0] / R109.hyperbola.a) ** 2 - (P0[1] / R109.hyperbola.b) ** 2, 1) && close(Math.min(a1, b1), Math.min(a2, b2), 1e-6)]);
        out.push(labelsCheck(s, ['P', 'S', 'S′', 'tangent', 'hyperbola:', 'the tangent at P bisects ∠SPS′']));
      }
    }
    out.push(noBadChars(s, fig109));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.10 · where to put the origin (Topic 09, p. 976)             */
/* ===================================================================== */
const CAP1010 = 'Where to put the origin: the coordinate frame chosen for each of the four applied conics (dish, archway, suspension cable and cooling tower).';
type Case1010 = { chip: string; cap: string; kind: 'dish' | 'arch' | 'cable' | 'tower' };
const fig1010: Diagram = {
  id: 'm11-10-fig-10.10',
  topic: 8,
  name: 'Where to put the origin',
  cases: [
    { chip: 'Parabolic dish', cap: CAP1010, kind: 'dish' },
    { chip: 'Arch', cap: CAP1010, kind: 'arch' },
    { chip: 'Suspension cable', cap: CAP1010, kind: 'cable' },
    { chip: 'Cooling tower', cap: CAP1010, kind: 'tower' },
  ] as Case1010[],
  draw(c: Case1010) {
    const s = new Sketch(W, 250), cx = 170, cy = 112;
    const ax = (l: number, r: number, d: number, u: number) => {
      arr(s, [cx - l, cy], [cx + r, cy], { color: C.mari, w: 2, head: 8, name: 'axis:x' });
      arr(s, [cx, cy + d], [cx, cy - u], { color: C.mari, w: 2, head: 8, name: 'axis:y' });
      lab(s, cx + r - 4, cy - 10, X, { size: 16, color: C.amber });
      lab(s, cx - 10, cy - u + 8, Y, { anchor: 'end', size: 16, color: C.amber });
    };
    const notes: Record<Case1010['kind'], [string, string]> = { dish: ['parabolic dish', 'origin at the vertex'], arch: ['semi-elliptical arch', 'origin at the base centre'], cable: ['suspension cable', 'origin at the lowest point'], tower: ['cooling tower', 'origin at the throat'] };
    if (c.kind === 'dish') {
      const k = 0.0105, top = 78;
      path(s, Array.from({ length: 81 }, (_, i): P => { const y = -top + (2 * top * i) / 80; return [cx - 60 + k * y * y, cy + y]; }), { w: 3.2, name: 'dish' });
      const rim: P = [cx - 60 + k * top * top, cy - top], rim2: P = [rim[0], cy + top];
      path(s, [[rim[0], rim[1] + 6], rim2], { color: C.slate, w: 1.2, dash: '5 4', name: 'rim' });
      s.dot(rim2[0], rim2[1], 2.2, C.ink);
      pt(s, rim, 'rim');
      // the origin at the vertex: the frame is moved so the vertex sits at (cx, cy)
      const ox = cx - 60;
      arr(s, [ox - 36, cy], [ox + 108, cy], { color: C.mari, w: 2, head: 8, name: 'axis:x' });
      arr(s, [ox, cy + 22], [ox, cy - 76], { color: C.mari, w: 2, head: 8, name: 'axis:y' });
      lab(s, ox + 104, cy - 10, X, { size: 16, color: C.amber });
      lab(s, ox - 10, cy - 68, Y, { anchor: 'end', size: 16, color: C.amber });
      pt(s, [ox, cy], 'origin', C.mari, 4.2);
      lab(s, rim[0] + 10, rim[1] - 13, 'rim point', { anchor: 'start', size: 12.5 });
      lab(s, rim[0] + 10, rim[1] + 4, '(depth, half-width)', { anchor: 'start', size: 12.5 });
    } else if (c.kind === 'arch') {
      const a = 112, b = 66;
      path(s, [[cx - a - 34, cy], [cx + a + 34, cy]], { w: 2, name: 'ground line' });
      ground(s, cx - a - 34, cx + a + 34, cy);
      path(s, Array.from({ length: 81 }, (_, i): P => { const t = (Math.PI * i) / 80; return [cx + a * Math.cos(t), cy - b * Math.sin(t)]; }), { w: 3.2, name: 'arch' });
      ax(30, a + 26, 26, b + 26);
      arr(s, [cx - 14, cy - 5], [cx - 14, cy - b + 4], { both: true, color: C.slate, w: 1.3, head: 6, name: 'b' });
      lab(s, cx - 22, cy - b / 2 + 5, B, { anchor: 'end', size: 15, color: C.slate });
      arr(s, [cx + 4, cy + 30], [cx + a, cy + 30], { both: true, color: C.slate, w: 1.3, head: 6, name: 'a' });
      lab(s, cx + a / 2 + 2, cy + 50, A, { size: 15, color: C.slate });
      pt(s, [cx, cy], 'origin', C.mari, 4.2);
    } else if (c.kind === 'cable') {
      const half = 112, h = 70, rd = cy + 28, k = h / (half * half);
      path(s, [[cx - half - 22, rd], [cx + half + 22, rd]], { w: 2.6, name: 'roadway' });
      for (const tx of [-half, half]) path(s, [[cx + tx - 3, cy - h - 4], [cx + tx + 3, cy - h - 4], [cx + tx + 3, rd + 14], [cx + tx - 3, rd + 14], [cx + tx - 3, cy - h - 4]], { w: 1.4, name: 'tower' });
      for (const wx of [-94, -60, 60, 94]) path(s, [[cx + wx, cy - k * wx * wx + 2], [cx + wx, rd - 1.5]], { color: C.slate, w: 1, name: 'wire' });
      path(s, Array.from({ length: 81 }, (_, i): P => { const x = -half + (2 * half * i) / 80; return [cx + x, cy - k * x * x]; }), { w: 3.2, name: 'cable' });
      ax(36, 82, 28, h + 6);
      arr(s, [cx - 14, cy + 3], [cx - 14, rd - 3], { both: true, w: 1.4, head: 5, name: 'gap' });
      lab(s, cx - 20, cy + 20, 'gap', { anchor: 'end', size: 13 });
      lab(s, cx, rd + 22, 'roadway', { size: 13 });
      pt(s, [cx, cy], 'origin', C.mari, 4.2);
    } else {
      const a = 36, b = 62, top = -58, base = 86, xh = (y: number) => a * Math.sqrt(1 + (y * y) / (b * b));
      for (const sg of [-1, 1]) path(s, Array.from({ length: 61 }, (_, i): P => { const y = top + ((base - top) * i) / 60; return [cx + sg * xh(y), cy + y]; }), { w: 3.2, name: 'tower side' });
      path(s, [[cx - xh(top), cy + top], [cx + xh(top), cy + top]], { color: C.slate, w: 1.3, dash: '5 4', name: 'top' });
      path(s, [[cx - xh(base), cy + base], [cx + xh(base), cy + base]], { color: C.slate, w: 1.3, dash: '5 4', name: 'base' });
      ax(26, a + 46, 30, 82);
      lab(s, cx - xh(top) - 8, cy + top + 5, 'top', { anchor: 'end', size: 13, color: C.slate });
      lab(s, cx - a - 8, cy + 5, 'throat', { anchor: 'end', size: 13, color: C.slate });
      lab(s, cx - xh(base) - 8, cy + base + 5, 'base', { anchor: 'end', size: 13, color: C.slate });
      pt(s, [cx, cy], 'origin', C.mari, 4.2);
    }
    lab(s, W / 2, 226, notes[c.kind][0], { size: 13.5, color: C.slate });
    lab(s, W / 2, 244, notes[c.kind][1], { size: 13.5, color: C.slate });
    return s;
  },
  check(c: Case1010) {
    const s = fig1010.draw(c), out: Check[] = [];
    const want: Record<Case1010['kind'], string[]> = {
      dish: ['rim point', '(depth, half-width)', 'parabolic dish', 'origin at the vertex', 'x', 'y'],
      arch: ['b', 'a', 'semi-elliptical arch', 'origin at the base centre', 'x', 'y'],
      cable: ['gap', 'roadway', 'suspension cable', 'origin at the lowest point', 'x', 'y'],
      tower: ['top', 'throat', 'base', 'cooling tower', 'origin at the throat', 'x', 'y'],
    };
    const o = dotAt(s, 'origin')!;
    const axesThrough = ['axis:x', 'axis:y'].every((n) => (LINES.get(s) ?? []).some((l) => l.name === n && (n === 'axis:x' ? close(l.pts[0][1], o[1]) : close(l.pts[0][0], o[0]))));
    out.push([`The axes cross at the marked origin (${c.kind === 'dish' ? 'the vertex' : c.kind === 'arch' ? 'the centre of the base' : c.kind === 'cable' ? 'the lowest point of the cable' : 'the centre of the throat'})`, axesThrough]);
    out.push(labelsCheck(s, want[c.kind]));
    out.push(noBadChars(s, fig1010));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.11 · the parabolic reflector y² = 20x (Topic 09, p. 978)    */
/* ===================================================================== */
const CAP1011 = `The parabolic reflector ${sq(Y)} = 20${X}: a rim 20 cm across at a depth of 5 cm puts the focus at ${I('S')}(5, 0), exactly level with the rim.`;
const G1011: Gr = { ox: 52, oy: 190, ux: 14.5, uy: 14.5 };
const RAYS = [9, 6, 3, -3, -6, -9];
const fig1011: Diagram = {
  id: 'm11-10-fig-10.11',
  topic: 8,
  name: 'The parabolic reflector',
  cases: [{ chip: 'Reflector', cap: CAP1011 }],
  draw() {
    const s = new Sketch(W, 384), g = G1011, a = 5;
    axes(s, g, [-2, 18.6], [-12.4, 12.4], { xName: [-12, -9] });
    gpath(s, g, Array.from({ length: 81 }, (_, i): P => { const y = -10 + (20 * i) / 80; return [(y * y) / (4 * a), y]; }), { w: 2.8, name: 'reflector' });
    gpath(s, g, [[5, -10], [5, 10]], { color: C.mari, w: 2.2, name: 'rim' });
    const sF = gp(g, [a, 0]);
    // the cooking vessel: a pot standing on the focus
    const vw = 26, vb = 18, vh = 26;
    path(s, [[sF[0] - vw / 2 - 4, sF[1]], [sF[0] + vw / 2 + 4, sF[1]]], { w: 2, name: 'vessel rim' });
    path(s, [[sF[0] - vw / 2, sF[1]], [sF[0] - vb / 2, sF[1] + vh], [sF[0] + vb / 2, sF[1] + vh], [sF[0] + vw / 2, sF[1]]], { w: 1.8, name: 'vessel' });
    RAYS.forEach((y0) => {
      const hitD: P = [(y0 * y0) / (4 * a), y0], hit = gp(g, hitD), u = unit(hit, sF);
      arr(s, gp(g, [16.2, y0]), [hit[0] + 2, hit[1]], { w: 1.3, head: 6, name: 'incoming ray' });
      const end: P = [sF[0] - u[0] * (Math.abs(y0) < 4 ? 15 : 8), sF[1] - u[1] * (Math.abs(y0) < 4 ? 15 : 8)];
      arr(s, hit, end, { w: 1.1, head: 6, name: 'reflected ray' });
    });
    pt(s, gp(g, [5, 10]), 'rim top', C.mari);
    pt(s, gp(g, [5, -10]), 'rim bottom', C.mari);
    pt(s, sF, 'S', C.mari);
    pt(s, gp(g, [0, 0]), 'O');
    lab(s, gx(g, 5) - 8, gy(g, 10) - 9, '(5, 10)', { anchor: 'end', size: 14, color: C.amber });
    lab(s, gx(g, 5) + 10, gy(g, 10) - 3, 'rim, 20 cm across', { anchor: 'start', size: 13, color: C.amber });
    lab(s, gx(g, 5) - 6, gy(g, -10) + 19, '(5, −10)', { anchor: 'end', size: 14, color: C.amber });
    lab(s, sF[0] + 22, sF[1] - 10, `${I('S')}(5, 0)`, { anchor: 'start', size: 15, color: C.amber });
    lab(s, gx(g, 18.4), gy(g, 11.6), `${sq(Y)} = 20${X}`, { anchor: 'end', size: 16 });
    const v1 = lab(s, gx(g, 13.2), gy(g, -4.4), 'cooking vessel', { size: 13 });
    lab(s, gx(g, 13.2), gy(g, -4.4) + 16, 'at the focus', { size: 13 });
    path(s, [[v1[0] - 5, v1[1] + 2], [sF[0] + vb / 2 + 3, sF[1] + vh - 4]], { color: C.slate, w: 1, name: 'leader to the vessel' });
    lab(s, g.ox - 6, g.oy + 17, I('O'), { anchor: 'end', size: 15 });
    const dy = gy(g, -12.6);
    arr(s, [gx(g, 0), dy], [gx(g, 5), dy], { both: true, color: C.slate, w: 1.2, head: 6, name: '5 cm deep' });
    lab(s, gx(g, 5) + 6, dy + 5, '5 cm deep', { anchor: 'start', size: 13.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig1011.draw(fig1011.cases[0]), out: Check[] = [], g = G1011;
    const [top, bot, sF] = ['rim top', 'rim bottom', 'S'].map((n) => unPx(g, dotAt(s, n)!));
    out.push(['The rim points (5, ±10) lie on y² = 20x (100 = 20 × 5): 20 cm across, 5 cm deep', close(top[1] ** 2, 20 * top[0]) && close(bot[1], -10) && close(top[0], 5) && close(top[1] - bot[1], 20)]);
    out.push(['4a = 20, a = 5: the focus S(5, 0) is level with the rim', close(sF[0], 5) && close(sF[1], 0) && close(sF[0], top[0])]);
    const ok = RAYS.every((y0) => { const P0: P = [y0 * y0 / 20, y0], tn: P = [y0 / 10, 1], toS: P = [5 - P0[0], -P0[1]]; return close(angBetween(tn, [1, 0]) , angBetween([-tn[0], -tn[1]], toS), 1e-6) || close(angBetween([-tn[0], -tn[1]], [1, 0]), angBetween(tn, toS), 1e-6); });
    out.push(['Every ray parallel to the axis meets the reflector at equal angles to the tangent and goes on to S', ok]);
    out.push(labelsCheck(s, ['(5, 10)', 'rim, 20 cm across', '(5, −10)', 'S(5, 0)', 'y2 = 20x', 'cooking vessel', 'at the focus', 'O', '5 cm deep']));
    out.push(noBadChars(s, fig1011));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.12 · the semi-elliptical archway (Topic 09, p. 980)         */
/* ===================================================================== */
const CAP1012 = `The semi-elliptical archway ${fr(sq(X), '16')} + ${fr(sq(Y), '4')} = 1: 8 m across the base, 2 m at the apex, and ${fr('√39', '4')} ≈ 1.56 m high at 1.5 m in from the end.`;
const G1012: Gr = { ox: 164, oy: 150, ux: 36, uy: 36 };
const fig1012: Diagram = {
  id: 'm11-10-fig-10.12',
  topic: 8,
  name: 'The semi-elliptical archway',
  cases: [{ chip: 'Archway', cap: CAP1012 }],
  draw() {
    const s = new Sketch(W, 222), g = G1012, a = 4, b = 2, xq = 2.5, yq = b * Math.sqrt(1 - (xq * xq) / (a * a));
    path(s, [gp(g, [-4.4, 0]), gp(g, [4.25, 0])], { w: 2, name: 'ground line' });
    const lo = lab(s, g.ox - 6, g.oy + 17, I('O'), { anchor: 'end', size: 14 });
    ground(s, gx(g, -4.4), gx(g, 4.25), g.oy, 11, [lo]);
    arr(s, gp(g, [4.25, 0]), gp(g, [4.55, 0]), { w: 1.3, head: 7, name: 'axis:x' });
    lab(s, gx(g, 4.55) - 4, g.oy - 9, X, { anchor: 'middle', size: 15 });
    arr(s, gp(g, [0, -1.85]), gp(g, [0, 3.2]), { w: 1.3, head: 7, name: 'axis:y' });
    lab(s, g.ox + 7, gy(g, 3.2) + 8, Y, { anchor: 'start', size: 15 });
    gpath(s, g, ellPts(a, b, 0, Math.PI), { w: 2.8, name: 'arch' });
    const q = gp(g, [xq, yq]);
    path(s, [q, gp(g, [xq, 0])], { color: C.mari, w: 1.8, dash: '6 4', name: 'height at 1.5 m' });
    arr(s, gp(g, [-0.3, 0.06]), gp(g, [-0.3, b - 0.06]), { both: true, color: C.slate, w: 1.2, head: 6, name: '2 m' });
    lab(s, gx(g, -0.42), gy(g, 1) + 5, '2 m', { anchor: 'end', size: 13, color: C.slate });
    pt(s, gp(g, [-a, 0]), 'left end');
    pt(s, gp(g, [a, 0]), 'right end');
    pt(s, gp(g, [0, b]), 'apex');
    pt(s, gp(g, [0, 0]), 'O');
    pt(s, q, 'Q', C.mari);
    const d1 = gy(g, -0.62);
    arr(s, [gx(g, xq), d1], [gx(g, a), d1], { both: true, color: C.slate, w: 1.2, head: 6, name: '1.5 m' });
    lab(s, gx(g, 3.25), d1 + 17, '1.5 m', { size: 13, color: C.slate });
    const d2 = gy(g, -1.55);
    arr(s, [gx(g, -a), d2], [gx(g, a), d2], { both: true, color: C.slate, w: 1.2, head: 6, name: '8 m' });
    lab(s, gx(g, -2.2), d2 - 8, '8 m', { size: 13, color: C.slate });
    runs(s, gx(g, -4.4), gy(g, 2.75), [{ num: sq(X), den: '16' }, { t: ' + ' }, { num: sq(Y), den: '4' }, { t: ` = 1,  ${Y} ≥ 0` }], { size: 13 });
    runs(s, q[0] + 6, gy(g, 2.35), [{ num: '√39', den: '4' }, { t: ' ≈ 1.56 m' }], { size: 13, color: C.amber });
    return s;
  },
  check() {
    const s = fig1012.draw(fig1012.cases[0]), out: Check[] = [], g = G1012;
    const q = unPx(g, dotAt(s, 'Q')!), [l, r, ap] = ['left end', 'right end', 'apex'].map((n) => unPx(g, dotAt(s, n)!));
    out.push(['2a = 8, b = 2: the arch x²/16 + y²/4 = 1 meets the ground at (±4, 0) and peaks at (0, 2)', close(r[0] - l[0], 8) && close(ap[1], 2)]);
    out.push([`1.5 m from the right end is x = 2.5, where y = √(4(1 − 6.25/16)) = √39/4 = ${fmt(q[1], 4)} ≈ 1.56`, close(q[0], 2.5) && close(q[1], Math.sqrt(39) / 4) && close(q[0] ** 2 / 16 + q[1] ** 2 / 4, 1) && fmt(q[1]) === '1.56']);
    out.push(stackedCheck(s, ['x2/16', 'y2/4', '√39/4']));
    out.push(labelsCheck(s, ['x2/16 + y2/4 = 1,  y ≥ 0', '√39/4 ≈ 1.56 m', '2 m', 'O', '1.5 m', '8 m', 'x', 'y']));
    out.push(noBadChars(s, fig1012));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.13 · the suspension-bridge cable (Topic 09, p. 982)         */
/* ===================================================================== */
const CAP1013 = `The suspension-bridge cable ${sq(X)} = ${fr('625', '6')}${Y}: the origin sits 6 m above the roadway, so the wire at ${X} = 18 measures 6 + 3.11 = 9.11 m, not 3.11 m.`;
const G1013: Gr = { ox: 178, oy: 196, ux: 2.85, uy: 5.7 };
const fig1013: Diagram = {
  id: 'm11-10-fig-10.13',
  topic: 8,
  name: 'The suspension-bridge cable',
  cases: [{ chip: 'Bridge cable', cap: CAP1013 }],
  draw() {
    const s = new Sketch(W, 288), g = G1013, k = 6 / 625, cab = (x: number) => k * x * x, rd = -6;
    const road = gy(g, rd);
    path(s, [[gx(g, -54), road], [gx(g, 54), road]], { w: 3, name: 'roadway' });
    for (const tx of [-50, 50]) {
      const x0 = gx(g, tx) - 3.5, x1 = gx(g, tx) + 3.5;
      path(s, [[x0, gy(g, 24)], [x1, gy(g, 24)], [x1, road + 8], [x0, road + 8], [x0, gy(g, 24)]], { w: 1.4, name: 'tower' });
    }
    gpath(s, g, Array.from({ length: 101 }, (_, i): P => { const x = -50 + i; return [x, cab(x)]; }), { w: 2.6, name: 'cable' });
    arr(s, gp(g, [-18, 0]), gp(g, [43, 0]), { color: C.mari, w: 1.4, head: 7, name: 'axis:x' });
    arr(s, gp(g, [0, rd + 0.3]), gp(g, [0, 30]), { color: C.mari, w: 1.4, head: 7, name: 'axis:y' });
    const w18 = gp(g, [18, cab(18)]);
    path(s, [w18, [w18[0], road - 1.5]], { color: C.mari, w: 2.6, name: 'wire at x = 18' });
    arr(s, [gx(g, 20.5), g.oy - 1.5], [gx(g, 20.5), w18[1] + 1.5], { both: true, w: 1.1, head: 5, name: '3.11 m' });
    arr(s, [gx(g, 20.5), g.oy + 1.5], [gx(g, 20.5), road - 2], { both: true, w: 1.1, head: 5, name: '6 m at the wire' });
    arr(s, [gx(g, -3), g.oy + 1.5], [gx(g, -3), road - 2], { both: true, color: C.slate, w: 1.1, head: 5, name: '6 m gap' });
    pt(s, [g.ox, g.oy], 'O', C.mari);
    pt(s, w18, 'wire top', C.mari);
    lab(s, gx(g, 43) - 2, g.oy - 9, X, { anchor: 'middle', size: 15, color: C.amber });
    lab(s, g.ox - 7, gy(g, 30) + 8, Y, { anchor: 'end', size: 15, color: C.amber });
    lab(s, gx(g, 22.2), g.oy - 7, '3.11 m', { anchor: 'start', size: 11.5 });
    lab(s, gx(g, 22.2), (g.oy + road) / 2 + 4.5, '6 m', { anchor: 'start', size: 11.5 });
    lab(s, gx(g, -4.5), (g.oy + road) / 2 + 4.5, '6 m', { anchor: 'end', size: 12, color: C.slate });
    lab(s, g.ox - 8, g.oy - 11, I('O'), { anchor: 'end', size: 14, color: C.amber });
    lab(s, gx(g, -30), road + 18, 'roadway', { size: 12.5 });
    lab(s, W - 6, road + 21, 'heights drawn at twice the scale', { anchor: 'end', size: 11.5, color: C.slate });
    lab(s, gx(g, 4), gy(g, 21), `wire at ${X} = 18 m:`, { anchor: 'start', size: 12.5, color: C.amber });
    const c2 = lab(s, gx(g, 4), gy(g, 21) + 16, '6 + 3.11 = 9.11 m', { anchor: 'start', size: 12.5, color: C.amber });
    path(s, [[gx(g, 15), c2[3] + 5], [w18[0] - 1, w18[1] - 7]], { color: C.mari, w: 1, name: 'leader to the wire' });
    runs(s, gx(g, -40), gy(g, 27), [{ t: `${sq(X)} = ` }, { num: '625', den: '6' }, { t: ` ${Y}` }], { size: 13.5 });
    // the other hangers, every 18 m like the one the example asks about
    for (const wx of [-36, -18, 36]) path(s, [gp(g, [wx, cab(wx) - 0.25]), [gx(g, wx), road - 1.5]], { color: C.slate, w: 1, name: 'wire' });
    const dl = gx(g, -50) - 12;
    arr(s, [dl, road], [dl, gy(g, 24)], { both: true, color: C.slate, w: 1.2, head: 6, name: '30 m' });
    lab(s, dl + 3, gy(g, 24) - 8, '30 m', { size: 12.5, color: C.slate });
    const db = road + 30;
    arr(s, [gx(g, -50), db], [gx(g, 50), db], { both: true, color: C.slate, w: 1.2, head: 6, name: '100 m' });
    lab(s, g.ox, db + 18, '100 m', { size: 13, color: C.slate });
    return s;
  },
  check() {
    const s = fig1013.draw(fig1013.cases[0]), out: Check[] = [];
    const k = 6 / 625;
    out.push(['At the towers x = ±50 the cable is 30 − 6 = 24 m above the origin: 2500 = 4a × 24, 4a = 625/6', close(k * 2500, 24) && close(2500 / 24, 625 / 6)]);
    out.push([`At x = 18: y = 324 × 6/625 = ${fmt(k * 324, 4)} ≈ 3.11, so the wire is 6 + 3.11 = 9.11 m`, fmt(k * 324) === '3.11' && fmt(6 + k * 324) === '9.11']);
    const w = unPx(G1013, dotAt(s, 'wire top')!);
    out.push(['The highlighted wire stands at x = 18 and reaches the cable', close(w[0], 18) && close(w[1], k * 324)]);
    out.push(stackedCheck(s, ['625/6']));
    out.push([`The heights are drawn at twice the scale of the widths (${G1013.uy} px a metre against ${G1013.ux}), as the note under the roadway says`, close(G1013.uy, 2 * G1013.ux)]);
    out.push(labelsCheck(s, ['x2 = 625/6 y', '30 m', '100 m', '6 m', '3.11 m', 'wire at x = 18 m:', '6 + 3.11 = 9.11 m', 'roadway', 'heights drawn at twice the scale', 'O', 'x', 'y']));
    out.push(noBadChars(s, fig1013));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.14 · the hyperbolic cooling tower (Topic 09, p. 984)        */
/* ===================================================================== */
const CAP1014 = `The hyperbolic cooling tower ${fr(sq(X), '900')} − ${fr(sq(Y), '5625')} = 1: 60 m across the throat, 100 m at the base and 20√13 ≈ 72.11 m at the top of the 150 m tower.`;
const G1014: Gr = { ox: 178, oy: 120, ux: 1.6, uy: 1.6 };
const fig1014: Diagram = {
  id: 'm11-10-fig-10.14',
  topic: 8,
  name: 'The hyperbolic cooling tower',
  cases: [{ chip: 'Cooling tower', cap: CAP1014 }],
  draw() {
    const s = new Sketch(W, 300), g = G1014, a = 30, b = 75, xh = (y: number) => a * Math.sqrt(1 + (y * y) / (b * b));
    const yT = 50, yB = -100;
    const base = gy(g, yB);
    path(s, [[gx(g, -64), base], [gx(g, 64), base]], { w: 2, name: 'ground line' });
    ground(s, gx(g, -64), gx(g, 64), base, 11);
    path(s, [gp(g, [0, yB]), gp(g, [0, 0])], { color: C.slate, w: 1.2, dash: '6 4', name: 'tower axis' });
    arr(s, gp(g, [0, 0]), gp(g, [0, 44]), { w: 1.4, head: 7, name: 'axis:y' });
    lab(s, g.ox + 6, gy(g, 44) + 10, Y, { anchor: 'start', size: 15 });
    for (const sg of [-1, 1]) gpath(s, g, Array.from({ length: 101 }, (_, i): P => { const y = yB + ((yT - yB) * i) / 100; return [sg * xh(y), y]; }), { w: 3, name: 'tower side' });
    gpath(s, g, [[-xh(yT), yT], [xh(yT), yT]], { color: C.mari, w: 2.2, name: 'top width' });
    gpath(s, g, [[-a, 0], [a, 0]], { color: C.mari, w: 2.2, name: 'throat width' });
    gpath(s, g, [[-xh(yB), yB], [xh(yB), yB]], { color: C.mari, w: 2.2, name: 'base width' });
    arr(s, gp(g, [a + 2, 0]), gp(g, [52, 0]), { w: 1.4, head: 7, name: 'axis:x' });
    lab(s, gx(g, 52), g.oy + 18, X, { size: 15 });
    pt(s, gp(g, [-a, 0]), 'left vertex', C.mari);
    pt(s, gp(g, [a, 0]), 'right vertex', C.mari);
    pt(s, gp(g, [0, 0]), 'O');
    lab(s, g.ox - 6, g.oy + 18, I('O'), { anchor: 'end', size: 15 });
    lab(s, gx(g, -a) - 8, g.oy - 10, '(−30, 0)', { anchor: 'end', size: 12.5, color: C.amber });
    lab(s, gx(g, a) + 8, g.oy - 10, '(30, 0)', { anchor: 'start', size: 12.5, color: C.amber });
    lab(s, gx(g, xh(20)) + 8, gy(g, 20), 'throat: 60 m', { anchor: 'start', size: 12.5, color: C.amber });
    lab(s, gx(g, xh(yT)) + 6, gy(g, yT) + 5, '20√13 ≈ 72.11 m', { anchor: 'start', size: 12.5, color: C.amber });
    lab(s, gx(g, xh(yB)) + 6, base - 9, '100 m', { anchor: 'start', size: 13, color: C.amber });
    runs(s, gx(g, -44), gy(g, yT) - 16, [{ num: sq(X), den: '900' }, { t: ' − ' }, { num: sq(Y), den: '5625' }, { t: ' = 1' }], { size: 14 });
    const d150 = gx(g, -76), d100 = gx(g, -61);
    path(s, [[d150 - 4, gy(g, yT)], [gx(g, -xh(yT)) - 4, gy(g, yT)]], { color: C.slate, w: 0.9, name: 'extension' });
    path(s, [[d100 - 4, g.oy], [gx(g, -a) - 6, g.oy]], { color: C.slate, w: 0.9, name: 'extension' });
    arr(s, [d150, base], [d150, gy(g, yT)], { both: true, color: C.slate, w: 1.2, head: 7, name: '150 m' });
    arr(s, [d100, base], [d100, g.oy], { both: true, color: C.slate, w: 1.2, head: 7, name: '100 m' });
    lab(s, d150 - 5, gy(g, -45) + 5, '150 m', { anchor: 'end', size: 13, color: C.slate });
    lab(s, d100 + 4, gy(g, -18) + 5, '100 m', { anchor: 'start', size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig1014.draw(fig1014.cases[0]), out: Check[] = [], g = G1014;
    const a2 = 900, b2 = 5625, xAt = (y: number) => Math.sqrt(a2 * (1 + (y * y) / b2));
    out.push([`The base, 100 m below the throat: x² = 900(1 + 10000/5625) = ${fmt(xAt(-100) ** 2)}, so x = 50 and the base is 100 m across (that fixes b² = 5625)`, close(xAt(-100), 50)]);
    out.push([`The top, 150 − 100 = 50 m above the throat: x² = 900(1 + 2500/5625) = 1300, so the top is 2√1300 = 20√13 = ${fmt(2 * xAt(50), 2)} m across`, close(xAt(50) ** 2, 1300) && fmt(2 * xAt(50)) === '72.11' && close(2 * xAt(50), 20 * Math.sqrt(13))]);
    const [l, r] = ['left vertex', 'right vertex'].map((n) => unPx(g, dotAt(s, n)!));
    out.push(['The vertices (±30, 0) sit on the throat, 60 m across', close(r[0] - l[0], 60) && close(r[1], 0)]);
    out.push(stackedCheck(s, ['x2/900', 'y2/5625']));
    out.push(labelsCheck(s, ['x2/900 − y2/5625 = 1', '20√13 ≈ 72.11 m', '(−30, 0)', '(30, 0)', 'throat: 60 m', '100 m', '150 m', 'O', 'x', 'y']));
    out.push(noBadChars(s, fig1014));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional A "Figure 1" (p. 990) · diameters and conjugate diameters   */
/* ===================================================================== */
const MP = `${I('m')}′`;
const CAPA = `Three parallel chords of slope ${I('m')} on the ellipse ${fr(sq(X), '16')} + ${fr(sq(Y), '9')} = 1: their midpoints all lie on the diameter ${Y} = ${MP}${X} with ${MP} = −${fr(sq(B), `${sq(A)}${I('m')}`)} = −${fr('9', '16')} (here ${I('m')} = 1), while the dashed chord of slope ${MP} is bisected on the conjugate diameter ${Y} = ${I('mx')}; the faint rectangle ${X} = ±${A}, ${Y} = ±${B} has the equi-conjugate diameters ${Y} = ±${fr(B, A)}${X} as its diagonals.`;
const GA: Gr = { ox: 170, oy: 178, ux: 22, uy: 22 };
const KA = { a: 4, b: 3, m: 1, cs: [2.4, -1.6, -3.8], d: 2.6 };
/** Where y = kx + c meets x²/a² + y²/b² = 1. */
const meetEll = (a: number, b: number, k: number, c: number): P[] => {
  const A2 = b * b + a * a * k * k, B2 = 2 * a * a * k * c, C2 = a * a * (c * c - b * b), D = Math.sqrt(B2 * B2 - 4 * A2 * C2);
  return [(-B2 - D) / (2 * A2), (-B2 + D) / (2 * A2)].map((x): P => [x, k * x + c]);
};
const figA: Diagram = {
  id: 'm11-10-A-d1',
  topic: 9,
  name: 'Diameters and conjugate diameters of an ellipse',
  cases: [{ chip: 'Conjugate diameters', cap: CAPA }],
  draw() {
    const s = new Sketch(W, 392), g = GA, { a, b, m, cs, d } = KA, mp = -(b * b) / (a * a * m);
    axes(s, g, [-7.3, 7.2], [-5.5, 5.5], { xName: [-12, -9] });
    gpath(s, g, [[-a, -b], [a, -b], [a, b], [-a, b], [-a, -b]], { color: C.slate, w: 1, dash: '4 3', name: 'rectangle' });
    const oc = pol([g.ox, g.oy], 37, 202), lo = lab(s, oc[0], oc[1] + 5, I('O'), { size: 14 });
    brokenPath(s, [gp(g, [-7.2, -5.4]), gp(g, [7.2, 5.4])], [lo], 6.5, { color: C.slate, w: 1, name: 'equi-conjugate diameter' });
    gpath(s, g, [[-7.2, 5.4], [7.2, -5.4]], { color: C.slate, w: 1, name: 'equi-conjugate diameter' });
    gpath(s, g, ellPts(a, b), { w: 2.2, name: 'ellipse' });
    gpath(s, g, [[-5.4, -5.4], [5.4, 5.4]], { w: 2, name: 'conjugate diameter' });
    gpath(s, g, [[-7.2, 7.2 * -mp], [7.2, 7.2 * mp]], { color: C.mari, w: 2.2, name: 'diameter' });
    cs.forEach((c, i) => {
      const [e1, e2] = meetEll(a, b, m, c);
      gpath(s, g, [e1, e2], { w: 1.5, name: `chord ${i}` });
      pt(s, gp(g, [(e1[0] + e2[0]) / 2, (e1[1] + e2[1]) / 2]), `mid ${i}`, C.mari, 3.2);
    });
    const [f1, f2] = meetEll(a, b, mp, d);
    gpath(s, g, [f1, f2], { w: 1.6, dash: '6 4', name: 'chord of slope m′' });
    pt(s, gp(g, [(f1[0] + f2[0]) / 2, (f1[1] + f2[1]) / 2]), 'mid of the dashed chord', C.ink, 3.2);
    // each line's name beside it, a short leader where the line leaves no room next to it
    const f1p = gp(g, f1[0] < f2[0] ? f1 : f2), lc = lab(s, gx(g, -0.3), gy(g, 4.05), `chord of slope ${MP}`, { anchor: 'end', size: 11.5 });
    path(s, [[lc[2] - 6, lc[3] + 4], [f1p[0] + 1, f1p[1] - 6]], { color: C.slate, w: 0.9, name: 'leader to the chord of slope m′' });
    const [c3] = meetEll(a, b, m, cs[2]).map((v) => gp(g, v)).sort((u, v) => v[1] - u[1]);
    const lm = lab(s, g.ox + 6, gy(g, -4.4), `chords of slope ${I('m')}`, { anchor: 'start', size: 11.5 });
    path(s, [[c3[0] + 4, lm[1] - 4], [c3[0] + 1, c3[1] + 6]], { color: C.slate, w: 0.9, name: 'leader to the chords of slope m' });
    lab(s, gx(g, 5.4) - 8, gy(g, 5.4) - 14, `conjugate diameter ${Y} = ${I('mx')}`, { anchor: 'end', size: 12 });
    runs(s, 8, 330, [{ t: `diameter ${Y} = ${MP}${X},  ${MP} = −` }, { num: sq(B), den: `${sq(A)}${I('m')}` }], { size: 12.5, color: C.amber });
    runs(s, 8, 362, [{ t: `equi-conjugate diameters ${Y} = ±` }, { num: B, den: A }, { t: X }], { size: 12, color: C.slate });
    lab(s, 8, 384, `(the diagonals of ${X} = ±${A}, ${Y} = ±${B})`, { anchor: 'start', size: 12, color: C.slate });
    return s;
  },
  check() {
    const s = figA.draw(figA.cases[0]), out: Check[] = [], g = GA, { a, b, m, cs } = KA, mp = -(b * b) / (a * a * m);
    out.push([`m′ = −b²/(a²m) = −9/16 = ${fmt(mp, 4)} for m = 1`, close(mp, -9 / 16)]);
    const mids = cs.map((_, i) => unPx(g, dotAt(s, `mid ${i}`)!));
    out.push(['The three chords of slope 1 have their midpoints on y = m′x', mids.every((v) => close(v[1], mp * v[0], 1e-9))]);
    const md = unPx(g, dotAt(s, 'mid of the dashed chord')!);
    out.push(['The chord of slope m′ is bisected on y = mx, and mm′ = −b²/a²', close(md[1], m * md[0], 1e-9) && close(m * mp, -(b * b) / (a * a))]);
    const eq = drawn(s, g, 'equi-conjugate diameter');
    out.push(['The drawn equi-conjugate diameters pass through O and the corners (±4, ±3) of the drawn rectangle x = ±a, y = ±b: they are its diagonals y = ±(b/a)x', rectIs(s, g, a, b) && corners(a, b).every((c) => throughSome(eq, c)) && eq.every((ps) => throughSome([ps], [0, 0]))]);
    out.push(['They are conjugate to each other: (b/a)(−b/a) = −b²/a²', close((b / a) * (-b / a), -(b * b) / (a * a))]);
    out.push(stackedCheck(s, ['b2/a2m', 'b/a']));
    out.push(labelsCheck(s, ['chords of slope m', 'chord of slope m′', 'conjugate diameter y = mx', 'diameter y = m′x,  m′ = −b2/a2m', 'equi-conjugate diameters y = ±b/ax', '(the diagonals of x = ±a, y = ±b)', 'O', 'x', 'y']));
    out.push(noBadChars(s, figA));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional B "Figure 2" (p. 994) · the polar of a point               */
/* ===================================================================== */
const CAPB = `The polar ${I('T')} = 0 of a point ${I('P')} with respect to ${fr(sq(X), '9')} + ${fr(sq(Y), '4')} = 1, in the three positions of ${I('P')}, on the curve (the tangent), outside (the chord of contact of the two faint tangents), and inside (a real line that misses the curve, receding as ${I('P')} approaches the centre), with ${I('P')}(4, 1) and ${I('Q')}(0.9, 2.4) below as a conjugate pair, each one’s polar passing through the other.`;
type CaseB = { chip: string; cap: string; kind: 'on' | 'outside' | 'inside' | 'conjugate' };
const KB = { a: 3, b: 2, on: [3 * Math.cos(55 * DEG), 2 * Math.sin(55 * DEG)] as P, out: [3.2, 2.6] as P, ins: [2.2, 0.95] as P, P: [4, 1] as P, Q: [0.9, 2.4] as P };
/** The polar of (x1, y1): x x1/a² + y y1/b² = 1, clipped to the box (data) as a segment. */
const polarSeg = (p: P, box: [number, number, number, number]): P[] => {
  const { a, b } = KB, l = p[0] / (a * a), mm = p[1] / (b * b), pts: P[] = [];
  const [x0, x1, y0, y1] = box;
  if (Math.abs(mm) > 1e-9) for (const x of [x0, x1]) { const y = (1 - l * x) / mm; if (y >= y0 - 1e-9 && y <= y1 + 1e-9) pts.push([x, y]); }
  if (Math.abs(l) > 1e-9) for (const y of [y0, y1]) { const x = (1 - mm * y) / l; if (x > x0 + 1e-9 && x < x1 - 1e-9) pts.push([x, y]); }
  return pts.slice(0, 2);
};
const figB: Diagram = {
  id: 'm11-10-B-d1',
  topic: 10,
  name: 'The polar of a point',
  cases: [
    { chip: 'P on the conic', cap: CAPB, kind: 'on' },
    { chip: 'P outside', cap: CAPB, kind: 'outside' },
    { chip: 'P inside', cap: CAPB, kind: 'inside' },
    { chip: 'Conjugate points', cap: CAPB, kind: 'conjugate' },
  ] as CaseB[],
  draw(c: CaseB) {
    const conj = c.kind === 'conjugate', s = new Sketch(W, conj ? 290 : 262), g: Gr = conj ? { ox: 132, oy: 156, ux: 34, uy: 34 } : { ox: 160, oy: 120, ux: 38, uy: 38 };
    const box: [number, number, number, number] = conj ? [-3.5, 5.6, -2.8, 2.75] : [-3.9, 4.6, -2.4, 2.75];
    gpath(s, g, [[box[0], 0], [box[1], 0]], { color: C.slate, w: 1, name: 'axis:x' });
    gpath(s, g, [[0, box[2]], [0, box[3]]], { color: C.slate, w: 1, name: 'axis:y' });
    gpath(s, g, ellPts(KB.a, KB.b), { w: 2.2, name: 'ellipse' });
    const note = (l1: string, l2: string) => { lab(s, W / 2, 228, l1, { size: 13, color: C.slate }); lab(s, W / 2, 246, l2, { size: 13, color: C.slate }); };
    if (c.kind === 'on') {
      gpath(s, g, polarSeg(KB.on, box), { color: C.mari, w: 2.2, name: 'polar' });
      const p = gp(g, KB.on);
      pt(s, p, 'P', C.mari);
      lab(s, p[0] + 2, p[1] - 12, I('P'), { anchor: 'start', size: 15, color: C.amber });
      note(`${I('P')} on the conic (${S1} = 0):`, `the polar is the tangent at ${I('P')}`);
    } else if (c.kind === 'outside') {
      const P0 = KB.out, seg = polarSeg(P0, box), p = gp(g, P0);
      // the points of contact: where the polar meets the ellipse
      const k = -(P0[0] / 9) / (P0[1] / 4), c0 = 1 / (P0[1] / 4), T = meetEll(KB.a, KB.b, k, c0);
      T.forEach((t, i) => gpath(s, g, [P0, t], { color: C.slate, w: 1.2, dash: '4 3', name: `tangent ${i}` }));
      gpath(s, g, seg, { color: C.mari, w: 2.2, name: 'polar' });
      T.forEach((t, i) => pt(s, gp(g, t), `T${i}`, C.ink, 3));
      pt(s, p, 'P', C.mari);
      lab(s, p[0] + 9, p[1] + 5, I('P'), { anchor: 'start', size: 15, color: C.amber });
      note(`${I('P')} outside (${S1} > 0):`, 'the polar is the chord of contact');
    } else if (c.kind === 'inside') {
      const P0 = KB.ins, p = gp(g, P0);
      gpath(s, g, polarSeg(P0, box), { color: C.mari, w: 2.2, name: 'polar' });
      pt(s, p, 'P', C.mari);
      const u = unit(p, gp(g, [0, 0]));
      arr(s, [p[0] + u[0] * 7, p[1] + u[1] * 7], [p[0] + u[0] * 30, p[1] + u[1] * 30], { w: 1.5, head: 6, name: 'P to O' });
      // the polar's foot from O, and an arrow outward along that normal
      const l = P0[0] / 9, mm = P0[1] / 4, k2 = 1 / (l * l + mm * mm), foot = gp(g, [l * k2, mm * k2]), nu = unit(gp(g, [0, 0]), foot);
      arr(s, [foot[0] + nu[0] * 6, foot[1] + nu[1] * 6], [foot[0] + nu[0] * 30, foot[1] + nu[1] * 30], { w: 1.5, head: 6, name: 'recedes' });
      lab(s, p[0] + 5, p[1] + 19, I('P'), { anchor: 'start', size: 15, color: C.amber });
      lab(s, 12, 16, `${I('P')} → ${I('O')} ⇒`, { anchor: 'start', size: 13 });
      lab(s, 12, 32, 'the polar recedes', { anchor: 'start', size: 13 });
      note(`${I('P')} inside (${S1} < 0):`, 'the polar is a real line that misses the conic');
    } else {
      const p = gp(g, KB.P), q = gp(g, KB.Q);
      gpath(s, g, polarSeg(KB.P, box), { color: C.mari, w: 2.2, name: 'polar of P' });
      gpath(s, g, polarSeg(KB.Q, box), { w: 1.8, name: 'polar of Q' });
      pt(s, p, 'P', C.mari);
      pt(s, q, 'Q');
      lab(s, p[0] + 3, p[1] + 20, I('P'), { anchor: 'start', size: 15, color: C.amber });
      lab(s, q[0] + 9, q[1] + 2, I('Q'), { anchor: 'start', size: 15 });
      lab(s, 8, 18, `polar of ${I('P')} (passes through ${I('Q')})`, { anchor: 'start', size: 12.5, color: C.amber });
      lab(s, 8, 36, `polar of ${I('Q')} (passes through ${I('P')})`, { anchor: 'start', size: 12.5 });
      lab(s, W / 2, 278, 'conjugate points: La Hire’s theorem', { size: 13, color: C.slate });
    }
    return s;
  },
  check(c: CaseB) {
    const s = figB.draw(c), out: Check[] = [], { a, b } = KB, S = (v: P) => (v[0] * v[0]) / (a * a) + (v[1] * v[1]) / (b * b) - 1;
    const T = (p: P, q: P) => (p[0] * q[0]) / (a * a) + (p[1] * q[1]) / (b * b) - 1;
    if (c.kind === 'on') out.push([`P lies on x²/9 + y²/4 = 1 (S₁ = ${fmt(S(KB.on), 6)}) and its polar is the tangent there`, close(S(KB.on), 0)]);
    if (c.kind === 'outside') {
      const P0 = KB.out, k = -(P0[0] / 9) / (P0[1] / 4), T2 = meetEll(a, b, k, 1 / (P0[1] / 4));
      out.push([`P(3.2, 2.6) is outside (S₁ = ${fmt(S(P0))} > 0); the polar meets the ellipse at two points of contact, and PT is a tangent at each (T on the polar of P and P on the polar of T)`, S(P0) > 0 && T2.every((t) => close(S(t), 0, 1e-9) && close(T(P0, t), 0, 1e-9))]);
    }
    if (c.kind === 'inside') {
      const P0 = KB.ins, l = P0[0] / 9, mm = P0[1] / 4;
      out.push([`P(2.2, 0.95) is inside (S₁ = ${fmt(S(P0))} < 0) and its polar misses the ellipse (a²l² + b²m² = ${fmt(9 * l * l + 4 * mm * mm)} < 1)`, S(P0) < 0 && 9 * l * l + 4 * mm * mm < 1]);
    }
    if (c.kind === 'conjugate') out.push(['P(4, 1) and Q(0.9, 2.4) are conjugate: 4(0.9)/9 + 1(2.4)/4 = 0.4 + 0.6 = 1, so each lies on the other’s polar', close(T(KB.P, KB.Q), 0)]);
    const want: Record<CaseB['kind'], string[]> = {
      on: ['P', 'P on the conic (S1 = 0):', 'the polar is the tangent at P'],
      outside: ['P', 'P outside (S1 > 0):', 'the polar is the chord of contact'],
      inside: ['P', 'P → O ⇒', 'the polar recedes', 'P inside (S1 < 0):', 'the polar is a real line that misses the conic'],
      conjugate: ['P', 'Q', 'polar of P (passes through Q)', 'polar of Q (passes through P)', 'conjugate points: La Hire’s theorem'],
    };
    out.push(labelsCheck(s, want[c.kind]));
    out.push(noBadChars(s, figB));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional C "Figure 3" (p. 999) · a hyperbola and its conjugate      */
/* ===================================================================== */
const S2 = `${I('S')}″`;
const CAPC = `${I('S')}: ${fr(sq(X), '16')} − ${fr(sq(Y), '9')} = 1 and its conjugate ${S2}: ${fr(sq(Y), '9')} − ${fr(sq(X), '16')} = 1 share one pair of asymptotes ${Y} = ±${fr('3', '4')}${X}, their four branches filling the four wedges of the dashed X; the asymptotes pass through the corners of the rectangle ${X} = ±${A}, ${Y} = ±${B}, and all four foci (±5, 0), (0, ±5) lie on the faint circle ${sq(X)} + ${sq(Y)} = ${sq(A)} + ${sq(B)} = 25.`;
const GC: Gr = { ox: 170, oy: 190, ux: 19.5, uy: 19.5 };
const figC: Diagram = {
  id: 'm11-10-C-d1',
  topic: 11,
  name: 'A hyperbola and its conjugate',
  cases: [{ chip: 'Conjugate hyperbola', cap: CAPC }],
  draw() {
    const s = new Sketch(W, 384), g = GC, a = 4, b = 3, c = 5, X0 = 8.2, Y0 = 6.6;
    axes(s, g, [-X0, X0], [-Y0, Y0], { xName: [-12, -9] });
    gpath(s, g, ellPts(c, c), { color: C.slate, w: 1, name: 'circle' });
    gpath(s, g, [[-a, -b], [a, -b], [a, b], [-a, b], [-a, -b]], { color: C.slate, w: 1, dash: '4 3', name: 'rectangle' });
    const lo = lab(s, g.ox - 7, g.oy + 16, I('O'), { anchor: 'end', size: 13 });
    brokenPath(s, [gp(g, [-X0, -X0 * 0.75]), gp(g, [X0, X0 * 0.75])], [lo], 4.5, { w: 1.2, dash: '5 4', name: 'asymptote' });
    brokenPath(s, [gp(g, [-X0, X0 * 0.75]), gp(g, [X0, -X0 * 0.75])], [lo], 4.5, { w: 1.2, dash: '5 4', name: 'asymptote' });
    for (const side of [1, -1]) {
      gpath(s, g, hypPts(a, b, side, X0, Y0), { w: 2.4, name: 'S' });
      gpath(s, g, hypPts(b, a, side, Y0, X0).map(([u, v]): P => [v, u]), { color: C.slate, w: 2.2, name: 'S″' });
    }
    ([['(a, 0)', [a, 0]], ['(−a, 0)', [-a, 0]], ['(0, b)', [0, b]], ['(0, −b)', [0, -b]]] as [string, P][]).forEach(([n, v]) => pt(s, gp(g, v), n, C.ink, 3.2));
    ([['(c, 0)', [c, 0]], ['(−c, 0)', [-c, 0]], ['(0, c)', [0, c]], ['(0, −c)', [0, -c]]] as [string, P][]).forEach(([n, v]) => pt(s, gp(g, v), n, C.mari, 3.4));
    lab(s, gx(g, a) - 7, g.oy - 7, `(${A}, 0)`, { anchor: 'end', size: 11.5 });
    lab(s, gx(g, -a) + 7, g.oy - 7, `(−${A}, 0)`, { anchor: 'start', size: 11.5 });
    lab(s, gx(g, c) + 6, g.oy + 16, `(${I('c')}, 0)`, { anchor: 'start', size: 11.5, color: C.amber });
    lab(s, gx(g, -c) - 6, g.oy + 16, `(−${I('c')}, 0)`, { anchor: 'end', size: 11.5, color: C.amber });
    lab(s, g.ox + 7, gy(g, b) + 15, `(0, ${B})`, { anchor: 'start', size: 11.5 });
    lab(s, g.ox + 7, gy(g, -b) - 7, `(0, −${B})`, { anchor: 'start', size: 11.5 });
    lab(s, g.ox + 8, gy(g, c) - 8, `(0, ${I('c')})`, { anchor: 'start', size: 11.5, color: C.amber });
    lab(s, g.ox + 7, gy(g, -c) + 15, `(0, −${I('c')})`, { anchor: 'start', size: 11.5, color: C.amber });
    runs(s, 8, 22, [{ t: `${S2}: ` }, { num: sq(Y), den: sq(B) }, { t: ' − ' }, { num: sq(X), den: sq(A) }, { t: ' = 1' }], { size: 12.5, color: C.slate });
    runs(s, W - 8, 22, [{ t: `${I('S')}: ` }, { num: sq(X), den: sq(A) }, { t: ' − ' }, { num: sq(Y), den: sq(B) }, { t: ' = 1' }], { size: 12.5, anchor: 'end' });
    runs(s, 8, 352, [{ t: `${Y} = ±` }, { num: B, den: A }, { t: X }], { size: 12 });
    lab(s, 8, 374, '(shared asymptotes)', { anchor: 'start', size: 12 });
    lab(s, W - 8, 374, `${sq(X)} + ${sq(Y)} = ${sq(I('c'))} = ${sq(A)} + ${sq(B)}`, { anchor: 'end', size: 12, color: C.slate });
    return s;
  },
  check() {
    const s = figC.draw(figC.cases[0]), out: Check[] = [], g = GC;
    out.push(['c² = a² + b² = 16 + 9 = 25 for both curves: foci (±5, 0) of S and (0, ±5) of S″, all on x² + y² = 25', close(16 + 9, 25) && ['(c, 0)', '(0, c)', '(−c, 0)', '(0, −c)'].every((n) => { const v = unPx(g, dotAt(s, n)!); return close(v[0] ** 2 + v[1] ** 2, 25); })]);
    const asy = drawn(s, g, 'asymptote');
    out.push(['The drawn asymptotes pass through O and the corners (±4, ±3) of the drawn rectangle: y = ±(3/4)x', rectIs(s, g, 4, 3) && corners(4, 3).every((c) => throughSome(asy, c)) && asy.every((ps) => throughSome([ps], [0, 0]))]);
    const onS = (v: P) => close(v[0] ** 2 / 16 - v[1] ** 2 / 9, 1, 1e-6), onS2 = (v: P) => close(v[1] ** 2 / 9 - v[0] ** 2 / 16, 1, 1e-6);
    out.push(['The vertex dots (±a, 0) lie on S and (0, ±b) on S″, and every drawn point of each curve satisfies its own equation', ['(a, 0)', '(−a, 0)'].every((n) => onS(unPx(g, dotAt(s, n)!))) && ['(0, b)', '(0, −b)'].every((n) => onS2(unPx(g, dotAt(s, n)!))) && drawn(s, g, 'S').flat().every(onS) && drawn(s, g, 'S″').flat().every(onS2)]);
    out.push(stackedCheck(s, ['y2/b2', 'x2/a2', 'x2/a2', 'y2/b2', 'b/a']));
    out.push(labelsCheck(s, ['S″: y2/b2 − x2/a2 = 1', 'S: x2/a2 − y2/b2 = 1', 'y = ±b/ax', '(shared asymptotes)', 'x2 + y2 = c2 = a2 + b2', '(a, 0)', '(−a, 0)', '(c, 0)', '(−c, 0)', '(0, b)', '(0, −b)', '(0, c)', '(0, −c)', 'O']));
    out.push(noBadChars(s, figC));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional D "Figure 4" (p. 1004) · the pencil S + λS′ = 0            */
/* ===================================================================== */
const SP = `${I('S')}′`, LA = I('λ');
const CAPD = `The pencil ${I('S')} + ${LA}${SP} = 0 built from ${I('S')}: ${sq(X)} + ${sq(Y)} − 4${X} − 6${Y} + 8 = 0 and ${SP}: ${sq(X)} + ${sq(Y)} − 2${X} − 4${Y} + 4 = 0: three further members (${LA} = −${fr('1', '2')}, 1, 4) of visibly different size all pass through the same two common points ${I('P')}(0, 2) and ${I('Q')}(1, 1), and the dashed line ${I('PQ')} is the one member that has lost its curvature: the radical axis ${X} + ${Y} = 2, at ${LA} = −1.`;
const GD: Gr = { ox: 58, oy: 318, ux: 33, uy: 33 };
/** The circle S + λS′ = 0: (1 + λ)(x² + y²) − (4 + 2λ)x − (6 + 4λ)y + (8 + 4λ) = 0, as centre and radius. */
const member = (l: number) => { const k = 1 + l, cx = (4 + 2 * l) / (2 * k), cy = (6 + 4 * l) / (2 * k); return { c: [cx, cy] as P, r: Math.sqrt(cx * cx + cy * cy - (8 + 4 * l) / k) }; };
const KD = { S: { c: [2, 3] as P, r: Math.sqrt(5) }, Sp: { c: [1, 2] as P, r: 1 }, lams: [-0.5, 1, 4] };
const figD: Diagram = {
  id: 'm11-10-D-d1',
  topic: 12,
  name: 'The pencil of circles through two points',
  cases: [{ chip: 'Pencil of circles', cap: CAPD }],
  draw() {
    const s = new Sketch(W, 398), g = GD;
    axes(s, g, [-1.4, 8.3], [-0.95, 7.9], { xName: [-12, -9] });
    KD.lams.forEach((l) => { const { c, r } = member(l); gpath(s, g, ellPts(r, r, 0, 2 * Math.PI, 200, c[0], c[1]), { color: C.mari, w: 1.4, name: `member ${l}` }); });
    gpath(s, g, ellPts(KD.S.r, KD.S.r, 0, 2 * Math.PI, 200, ...KD.S.c), { w: 2.2, name: 'S' });
    gpath(s, g, ellPts(KD.Sp.r, KD.Sp.r, 0, 2 * Math.PI, 160, ...KD.Sp.c), { w: 2.2, name: 'S′' });
    gpath(s, g, [[-1.3, 3.3], [2.9, -0.9]], { w: 1.5, dash: '6 4', name: 'radical axis' });
    const p = gp(g, [0, 2]), q = gp(g, [1, 1]);
    pt(s, p, 'P');
    pt(s, q, 'Q');
    lab(s, p[0] - 8, p[1] + 15, `${I('P')}(0, 2)`, { anchor: 'end', size: 12.5 });
    const ql = lab(s, gx(g, 0.35), g.oy + 20, `${I('Q')}(1, 1)`, { anchor: 'start', size: 12.5 });
    path(s, [[q[0] - 1, q[1] + 6], [(ql[0] + ql[2]) / 2 + 4, ql[1] - 4]], { color: C.slate, w: 0.9, name: 'leader to Q' });
    lab(s, gx(g, 4.55), gy(g, 3) + 5, `${I('S')} = 0`, { anchor: 'start', size: 13 });
    lab(s, gx(g, 1.08), gy(g, 2.1) + 5, `${SP} = 0`, { size: 13 });
    lab(s, 8, 18, `${I('S')} + ${LA}${SP} = 0: every member`, { anchor: 'start', size: 12.5, color: C.amber });
    lab(s, 8, 35, `passes through ${I('P')} and ${I('Q')}`, { anchor: 'start', size: 12.5, color: C.amber });
    lab(s, W / 2, 372, `${LA} = −1: the radical axis ${X} + ${Y} = 2`, { size: 12.5 });
    lab(s, W / 2, 390, '(the degenerate member: a line)', { size: 12.5 });
    return s;
  },
  check() {
    const s = figD.draw(figD.cases[0]), out: Check[] = [];
    const Sf = (v: P) => v[0] ** 2 + v[1] ** 2 - 4 * v[0] - 6 * v[1] + 8, Spf = (v: P) => v[0] ** 2 + v[1] ** 2 - 2 * v[0] - 4 * v[1] + 4;
    const P0: P = [0, 2], Q0: P = [1, 1];
    out.push(['S = 0 and S′ = 0 both pass through P(0, 2) and Q(1, 1)', [P0, Q0].every((v) => close(Sf(v), 0) && close(Spf(v), 0))]);
    out.push(['S: centre (2, 3), radius √5; S′: centre (1, 2), radius 1', close(member(0).r, Math.sqrt(5)) && close(member(0).c[0], 2) && close(member(0).c[1], 3)]);
    out.push([`The members λ = −1/2, 1, 4 (radii ${KD.lams.map((l) => fmt(member(l).r)).join(', ')}) all pass through P and Q`, KD.lams.every((l) => [P0, Q0].every((v) => close(Math.hypot(v[0] - member(l).c[0], v[1] - member(l).c[1]), member(l).r, 1e-9)))]);
    out.push(['λ = −1 leaves S − S′ = −2x − 2y + 4 = 0, the line x + y = 2 through P and Q', close(P0[0] + P0[1], 2) && close(Q0[0] + Q0[1], 2)]);
    out.push(labelsCheck(s, ['P(0, 2)', 'Q(1, 1)', 'S = 0', 'S′ = 0', 'S + λS′ = 0: every member', 'passes through P and Q', 'λ = −1: the radical axis x + y = 2', '(the degenerate member: a line)', 'x', 'y']));
    out.push(noBadChars(s, figD));
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 11 Chapter 10, Conic Sections: the book's figures. */
export const DIAGRAMS_MATHEMATICS_11_10: Diagram[] = [fig101, fig102, fig103, fig104, fig105, fig106, fig107, fig108, fig109, fig1010, fig1011, fig1012, fig1013, fig1014, figA, figB, figC, figD];

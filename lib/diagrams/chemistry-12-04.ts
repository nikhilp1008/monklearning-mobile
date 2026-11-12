import { C, F, LABEL_GAP, Rect, Sketch, TAG_SIZE, mathW, r1, tagW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 12, CHAPTER 4 (The d- and f-Block Elements): every drawing of the Master
 * Reference book on pp. 147–196, redrawn. Every page's vector shapes were counted (only pp.
 * 152, 159, 167 and 184 hold a curve or a slanted line; there are no raster images). The
 * chapter has FOUR drawings:
 *
 *   Figure 4.1 (p. 152; caption first on p. 151) — Topic 01, topic index 0.
 *   Figure 4.2 (p. 159; caption first on p. 158) — Topic 02, index 1.
 *   Figure 4.3 (p. 167; caption first on p. 166) — Topic 03, index 2.
 *   "Figure 1" (p. 184, unnumbered in the chapter's series) — Additional topic B, index 5.
 *
 * Judged NOT drawings: every table (pp. 174 and 183 hold the E° tables), boxed answers and
 * the rules between sections.
 *
 * Every number on the three graphs is the book's, DECODED here from the figure's own path
 * data against its own axis ticks, not typed from a table; the checks then compare them with
 * what the chapter prints. Only 4.2 has no numbers but its angle: its layout is the book's,
 * scaled, with the bent bridge computed from the printed 126°.
 *
 *   4.1 — melting points, K (3d, then 4d and 5d by group), from p. 152:
 *     3d 1814 1941 2183 2180 1519 1811 1768 1728 1358 693
 *     4d 1799 2128 2750 2896 2430 2607 2237 1828 1235 594
 *     5d 1193 2506 3290 3695 3459 3306 2719 2041 1337 234
 *     The book's caption says "the 4d and 5d series sit higher"; that holds from Ti to Ni, not
 *     at Sc, Cu or Zn, where the 3d point is the highest of the three. The caption here says
 *     "from Ti to Ni"; a check records it.
 *   4.3 — Ln³⁺ radii, pm, from p. 167: 103.2 101 99 98.3 97 95.8 94.7 93.8 92.3 91.2 90.1 89 88
 *     86.8 86.1. The book's dashed guide is the least-squares line through them.
 *   Figure 1 — E°(M²⁺/M), V, from p. 184: −1.63 −1.18 −0.90 −1.18 −0.44 −0.28 −0.25 +0.34 −0.76,
 *     the same as both tables (pp. 174, 183).
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const same = (a: number[], b: number[]) => a.length === b.length && a.every((v, i) => close(v, b[i], 1e-9));

/* ---------- drawing helpers (as in chemistry-12-03.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; free?: boolean; name?: string };
/** Every line a label must keep clear of, by sketch, with its name so a check can read it back. */
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const lineOf = (s: Sketch, name: string) => LINES.get(s)!.find((l) => l.name === name)!.pts;
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  if (!o.free) keep(s, pts, o.name);
}
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/** How close a box comes to a polyline, walked at half a pixel. */
const boxToLine = (r: Rect, pts: P[]) => {
  let gap = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
    for (let k = 0; k <= n; k++) gap = Math.min(gap, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  return gap;
};
function clearance(s: Sketch): { gap: number; what: string } {
  let gap = Infinity, what = '';
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  for (const { pts } of LINES.get(s) ?? []) for (const [name, r] of boxes) { const d = boxToLine(r, pts); if (d < gap) { gap = d; what = name; } }
  return { gap, what };
}
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  return [`Every tag and label stays at least ${LABEL_GAP} px clear of every line: the closest is "${what}", ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9];
};
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two symbols or labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), inFrame(s)];
const hasLabel = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const tagOf = (s: Sketch, t: string) => s.tags.find((x) => x.name === t);

/** A tag that needs maths, all in STIX (Android: one font inside one tag). One line or two. */
function mtag(s: Sketch, x: number, y: number, lines: string[], p: P, o: { hi?: boolean; size?: number } = {}): Rect {
  const size = o.size ?? 13, hi = !!o.hi, lh = size + 4;
  const w = Math.max(...lines.map((t) => Math.max(mathW(t, size), plain(t).length * size * 0.5))) + 18, h = lines.length === 1 ? 22 : lines.length * lh + 6;
  const rect: Rect = [x, y, x + w, y + h];
  const to: P = [Math.max(x + 8, Math.min(x + w - 8, p[0])), p[1] < y ? y : y + h];
  s.add(`<line x1="${r1(p[0])}" y1="${r1(p[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`);
  s.tags.push({ name: plain(lines.join(' ')), rect, from: p, to });
  s.add(`<rect x="${r1(x)}" y="${y}" width="${r1(w)}" height="${h}" rx="11" fill="#fff" stroke="${hi ? C.mari : C.border}" stroke-width="${hi ? 1.5 : 1}"/>`);
  lines.forEach((t, i) => s.text(x + w / 2, y + (lines.length === 1 ? 15.5 : 3 + lh * i + lh * 0.72), t, { size, color: hi ? C.amber : C.text }));
  return rect;
}
/** A tag of two lines, Onest only, leader and all, audited like any other. */
function pill(s: Sketch, x: number, y: number, lines: string[], p: P, o: { hi?: boolean } = {}): Rect {
  const hi = !!o.hi, lh = 15, w = Math.max(...lines.map(tagW)), h = lines.length * lh + 7, rect: Rect = [x, y, x + w, y + h];
  const to: P = [Math.max(x + 8, Math.min(x + w - 8, p[0])), p[1] < y ? y : y + h];
  s.add(`<line x1="${r1(p[0])}" y1="${r1(p[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`);
  s.add(`<rect x="${r1(x)}" y="${y}" width="${r1(w)}" height="${h}" rx="11" fill="#fff" stroke="${hi ? C.mari : C.border}" stroke-width="${hi ? 1.5 : 1}"/>`);
  lines.forEach((t, i) => s.add(`<text x="${r1(x + w / 2)}" y="${r1(y + 15 + lh * i)}" text-anchor="middle" font-family="${F.tag}" font-size="${TAG_SIZE}" fill="${hi ? C.amber : C.text}">${t}</text>`));
  s.tags.push({ name: lines.join(' '), rect, from: p, to });
  return rect;
}

/* ---------- graphs: columns of elements against a value ---------- */
type Frame = { x0: number; dx: number; oy: number; sy: number };
const X = (f: Frame, i: number) => f.x0 + i * f.dx;
const Y = (f: Frame, v: number) => f.oy - v * f.sy;
const at = (f: Frame, i: number, v: number): P => [X(f, i), Y(f, v)];
const iOf = (f: Frame, x: number) => (x - f.x0) / f.dx;
const vOf = (f: Frame, y: number) => (f.oy - y) / f.sy;
const AXIS = C.slate, GRID = 0.6;
/** The book's light grid, its ticks' numbers and the two axes, under everything else. */
function chart(s: Sketch, f: Frame, o: { names: string[]; ticks: [number, string][]; axisX: number; right: number; top: number; bottom: number; base: number | null; size?: number }) {
  o.names.forEach((_, i) => path(s, [[X(f, i), o.top], [X(f, i), o.bottom]], { color: C.grey, w: GRID, free: true }));
  o.ticks.forEach(([v]) => path(s, [[o.axisX, Y(f, v)], [o.right, Y(f, v)]], { color: C.grey, w: GRID, free: true }));
  path(s, [[o.axisX, o.top], [o.axisX, o.bottom]], { color: AXIS, w: 1.3 });
  if (o.base != null) path(s, [[o.axisX, o.base], [o.right, o.base]], { color: AXIS, w: 1.3, name: 'base' });
  o.ticks.forEach(([v, t]) => s.sym(o.axisX - 7, Y(f, v) + 4.5, t, { size: 13, anchor: 'end', color: C.slate }));
  o.names.forEach((n, i) => s.sym(X(f, i), o.bottom + 18, n, { size: o.size ?? 13, color: C.slate }));
}
/** White behind a label or a box on the grid: no colour, only the grid left out there. */
const clearGrid = (s: Sketch, r: Rect) => s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" fill="#fff"/>`);

/* ===================================================================== */
/* Figure 4.1 · melting points across the d series (Topic 01, p. 152)      */
/* ===================================================================== */
const CAP41 = 'Melting points across the 3d series (Sc to Zn): a broad hump, a dip at Mn, a crash at Zn; from Ti to Ni the 4d and 5d series sit higher.';
const NAMES41 = ['Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn'];
/** The book's path data, p. 152: the ticks of 0 K and 4000 K, and each series' points. */
const PATH41 = {
  y0: 38.170784,
  y4000: 211.491349,
  d3: [116.772084, 122.273762, 132.760041, 132.630034, 103.989992, 116.642077, 114.777652, 113.04619, 97.013912, 68.199542],
  d4: [116.122047, 130.378542, 157.328488, 163.65453, 143.462015, 151.132452, 135.100175, 117.377801, 91.683608, 63.909297],
  d5: [89.863505, 146.756521, 180.726867, 198.274913, 188.048648, 181.421225, 155.984093, 126.608327, 96.10386, 48.311363],
};
const kelvin = (ys: number[]) => ys.map((y) => Math.round(((y - PATH41.y0) * 4000) / (PATH41.y4000 - PATH41.y0)));
const MP = { d3: kelvin(PATH41.d3), d4: kelvin(PATH41.d4), d5: kelvin(PATH41.d5) };
const F41: Frame = { x0: 60, dx: 29.4, oy: 318, sy: 0.0665 };
const fig41: Diagram = {
  id: 'c12-04-fig-4.1',
  topic: 0,
  name: 'Melting points across the series',
  cases: [{ chip: 'Sc to Zn', cap: CAP41 }],
  draw() {
    const s = new Sketch(W, 378), f = F41;
    const ticks = [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000].map((v): [number, string] => [v, String(v)]);
    chart(s, f, { names: NAMES41, ticks, axisX: 44, right: 338, top: Y(f, 4000), bottom: f.oy, base: f.oy });
    s.sym(14, 16, 'melting point / K', { size: 14, anchor: 'start' });
    s.sym(W / 2, f.oy + 38, 'element (3d series; 4d and 5d', { size: 14 });
    s.sym(W / 2, f.oy + 55, 'congeners aligned by group)', { size: 14 });
    // the book's key, as a row above the plot
    const key = (x: number, t: string, o: Stroke, dot = false) => {
      path(s, [[x, 34], [x + 20, 34]], { ...o, free: true });
      if (dot) s.add(`<circle cx="${x + 10}" cy="34" r="3" fill="${o.color}"/>`);
      s.sym(x + 26, 38.5, t, { size: 13, anchor: 'start' });
    };
    key(48, '5d series', { color: C.slate, w: 1.4, dash: true });
    key(146, '4d series', { color: C.slate, w: 1.4 });
    key(244, '3d series', { color: C.mari, w: 2.8 }, true);
    // the three series: the 3d on top, in the highlight
    const pts = (v: number[]) => v.map((k, i) => at(f, i, k));
    path(s, pts(MP.d5), { color: C.slate, w: 1.4, dash: true, name: 'd5' });
    path(s, pts(MP.d4), { color: C.slate, w: 1.4, name: 'd4' });
    path(s, pts(MP.d3), { color: C.mari, w: 2.8, name: 'd3' });
    pts(MP.d3).forEach(([x, y]) => s.dot(x, y, 3.4, C.mari));
    // the three remarks, under the curves but for Zn's: it stands clear of the end of its curve, up in the open corner
    s.tag(70, 238, 'peak near V/Cr', X(f, 2.5), Y(f, (MP.d3[2] + MP.d3[3]) / 2));
    s.tag(192, 238, 'dip at Mn', X(f, 4), Y(f, MP.d3[4]));
    mtag(s, 242, 92, ['Zn: very low', '(full 3d<sup>10</sup>)'], at(f, 9, MP.d3[9]));
    return s;
  },
  check() {
    const s = fig41.draw(fig41.cases[0]), f = F41, out: Check[] = [], n = NAMES41;
    const read = (name: string) => lineOf(s, name).map(([x, y]): P => [iOf(f, x), vOf(f, y)]);
    const d3 = MP.d3, d4 = MP.d4, d5 = MP.d5;
    out.push(['Each series, read back off the drawing, is the book\'s (p. 152, decoded from its path data against its own 0 K and 4000 K ticks)', (['d3', 'd4', 'd5'] as const).every((k) => { const q = read(k); return q.length === 10 && q.every(([i, v], j) => close(i, j) && close(v, MP[k][j], 1e-9)); })]);
    out.push(['The decoded 3d values, Sc to Zn: 1814, 1941, 2183, 2180, 1519, 1811, 1768, 1728, 1358, 693 K', same(d3, [1814, 1941, 2183, 2180, 1519, 1811, 1768, 1728, 1358, 693])]);
    out.push(['Each of the ten 3d dots stands on its own column at its own value', d3.every((k, i) => s.points.some((p) => close(iOf(f, p.x), i) && close(vOf(f, p.y), k, 1e-9)))]);
    out.push([`Broad hump: rising from Sc to V (${d3[2]} K), with Cr ${d3[2] - d3[3]} K behind it, so the peak is "near V/Cr"; the tag's dot lies on the curve between them`, d3[0] < d3[1] && d3[1] < d3[2] && Math.max(...d3) === d3[2] && d3[2] - d3[3] <= 5 && close(iOf(f, tagOf(s, 'peak near V/Cr')!.from![0]), 2.5) && close(vOf(f, tagOf(s, 'peak near V/Cr')!.from![1]), (d3[2] + d3[3]) / 2, 1e-9)]);
    out.push([`Procedure B's "around Cr/Mo/W": the 4d peak (${Math.max(...d4)} K) and the 5d peak (${Math.max(...d5)} K) both stand in the Cr column`, d4.indexOf(Math.max(...d4)) === 3 && d5.indexOf(Math.max(...d5)) === 3]);
    out.push([`Dip at Mn: ${d3[4]} K, below Cr (${d3[3]} K) and Fe (${d3[5]} K), and the tag's dot sits on it`, d3[4] < d3[3] && d3[4] < d3[5] && close(iOf(f, tagOf(s, 'dip at Mn')!.from![0]), 4) && close(vOf(f, tagOf(s, 'dip at Mn')!.from![1]), d3[4], 1e-9)]);
    const zn = tagOf(s, 'Zn: very low (full 3d10)')!;
    out.push([`Crash at Zn: ${d3[9]} K, the lowest of the 3d series and the largest single fall on the curve (${d3[8] - d3[9]} K from Cu); the tag's dot sits on it`, Math.min(...d3) === d3[9] && d3.every((k, i) => i === 0 || d3[8] - d3[9] >= d3[i - 1] - k) && close(iOf(f, zn.from![0]), 9) && close(vOf(f, zn.from![1]), d3[9], 1e-9)]);
    const gapZn = Math.min(...['d3', 'd4', 'd5'].map((k) => boxToLine(zn.rect, lineOf(s, k))));
    out.push([`Errata (the Zn label touches the end of its curve in print): here the label stands ${fmt(gapZn, 1)} px clear of all three curves`, gapZn >= LABEL_GAP]);
    out.push([`Zn, Cd and Hg are each the lowest of their series, and Hg (${d5[9]} K) is below 298 K, the liquid of Procedure B`, [d3, d4, d5].every((v) => Math.min(...v) === v[9]) && d5[9] < 298]);
    const above = n.filter((_, i) => d4[i] > d3[i] && d5[i] > d3[i]), top3d = n.filter((_, i) => d3[i] > d4[i] && d3[i] > d5[i]);
    out.push([`The caption's "from Ti to Ni the 4d and 5d series sit higher" holds at ${above.join(', ')}; at ${top3d.join(', ')} the 3d point is the highest of the three`, above.join() === 'Ti,V,Cr,Mn,Fe,Co,Ni' && top3d.join() === 'Sc,Cu,Zn']);
    out.push(['The axis as printed: 0 to 4000 K in steps of 500, Sc to Zn', [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000].every((v) => hasLabel(s, String(v))) && n.every((e) => hasLabel(s, e))]);
    out.push(['The labels as printed: melting point / K, the axis line (on two lines), and the three series', ['melting point / K', 'element (3d series; 4d and 5d', 'congeners aligned by group)', '5d series', '4d series', '3d series'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 4.2 · the dichromate ion (Topic 02, p. 159)                      */
/* ===================================================================== */
const CAP42 = 'The dichromate ion: two CrO<sub>4</sub> tetrahedra sharing one bridging oxygen, Cr–O–Cr angle 126°.';
const ANGLE42 = 126;
/** The book's points (p. 159, path data), its units, y up: both Cr, the bridging O, and the left Cr's three terminal O. */
const BOOK42 = { Cr: 96.410046, CrR: 228.870029, CrY: 90.340391, Ox: 162.640037, Oy: 124.08527, side: [59.798115, 97.456436] as P, low: [95.761158, 53.046993] as P, front: [126.028107, 76.529128] as P };
const S42 = 1.36, TOP42 = 68, CX42 = 170;
/** Half the Cr…Cr distance, as printed; the height of the bridge follows from the printed angle, not from the page. */
const DX42 = S42 * (BOOK42.Ox - BOOK42.Cr), DY42 = DX42 / Math.tan((ANGLE42 * Math.PI) / 360);
const off42 = (b: P): P => [S42 * (b[0] - BOOK42.Cr), -S42 * (b[1] - BOOK42.CrY)];
type Atom42 = { el: 'Cr' | 'O'; p: P };
const crL: P = [CX42 - DX42, TOP42 + DY42], crR: P = [CX42 + DX42, TOP42 + DY42];
const ATOMS42: Record<string, Atom42> = {
  Cr1: { el: 'Cr', p: crL },
  Cr2: { el: 'Cr', p: crR },
  Ob: { el: 'O', p: [CX42, TOP42] },
};
([['side', BOOK42.side], ['low', BOOK42.low], ['front', BOOK42.front]] as [string, P][]).forEach(([k, b]) => {
  const [dx, dy] = off42(b);
  ATOMS42[`${k}1`] = { el: 'O', p: [crL[0] + dx, crL[1] + dy] };
  ATOMS42[`${k}2`] = { el: 'O', p: [crR[0] - dx, crR[1] + dy] };
});
const BONDS42: { a: string; b: string; wedge?: boolean }[] = [
  { a: 'Cr1', b: 'Ob' }, { a: 'Cr2', b: 'Ob' },
  { a: 'Cr1', b: 'side1' }, { a: 'Cr1', b: 'low1' }, { a: 'Cr1', b: 'front1', wedge: true },
  { a: 'Cr2', b: 'side2' }, { a: 'Cr2', b: 'low2' }, { a: 'Cr2', b: 'front2', wedge: true },
];
const RING = { Cr: 15, O: 12 };
const ARC42 = 26;
const toward = (p: P, q: P, r: number): P => { const L = len(p, q); return [p[0] + ((q[0] - p[0]) * r) / L, p[1] + ((q[1] - p[1]) * r) / L]; };
const circlePts = (c: P, r: number, a0 = 0, a1 = 2 * Math.PI, n = 72): P[] => Array.from({ length: n + 1 }, (_, i): P => { const a = a0 + ((a1 - a0) * i) / n; return [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)]; });
const fig42: Diagram = {
  id: 'c12-04-fig-4.2',
  topic: 1,
  name: 'Dichromate ion',
  cases: [{ chip: 'Two tetrahedra', cap: CAP42 }],
  draw() {
    const s = new Sketch(W, 234), Ob = ATOMS42.Ob.p;
    // the bonds, each stopping at its two rings
    BONDS42.forEach(({ a, b, wedge }) => {
      const A = ATOMS42[a], B = ATOMS42[b], p = toward(A.p, B.p, RING[A.el]), q = toward(B.p, A.p, RING[B.el]);
      if (wedge) {
        const L = len(p, q), nx = -(q[1] - p[1]) / L, ny = (q[0] - p[0]) / L, w = 4.4, c1: P = [q[0] + nx * w, q[1] + ny * w], c2: P = [q[0] - nx * w, q[1] - ny * w];
        s.add(`<path d="M${r1(p[0])} ${r1(p[1])} L${r1(c1[0])} ${r1(c1[1])} L${r1(c2[0])} ${r1(c2[1])} Z" fill="${C.ink}" stroke="${C.ink}" stroke-width="1" stroke-linejoin="round"/>`);
        keep(s, [p, c1], `${a}-${b}`); keep(s, [p, c2]);
      } else path(s, [p, q], { w: 1.8, name: `${a}-${b}` });
    });
    // the 126°, drawn from the two bonds themselves
    const a1 = Math.atan2(crL[1] - Ob[1], crL[0] - Ob[0]), a2 = Math.atan2(crR[1] - Ob[1], crR[0] - Ob[0]);
    path(s, circlePts(Ob, ARC42, a2, a1, 40), { color: C.slate, w: 1.5, name: 'arc' });
    s.sym(CX42, Ob[1] + ARC42 + 20, '126°', { size: 16 });
    // the atoms: rings with nothing in them but the letter
    Object.entries(ATOMS42).forEach(([id, { el, p }]) => {
      const hi = id === 'Ob', r = RING[el], col = hi ? C.mari : C.ink;
      s.add(`<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="${r}" fill="none" stroke="${col}" stroke-width="${hi ? 2.4 : 1.6}"/>`);
      keep(s, circlePts(p, r));
      const size = 15, w = mathW(el, size);
      s.labels.push({ text: el, rect: [p[0] - w / 2, p[1] - 0.36 * size, p[0] + w / 2, p[1] + 0.36 * size] });
      s.text(p[0], p[1] + 0.33 * size, el, { size, color: hi ? C.amber : C.text });
    });
    // the two names, each line ending on the ring it names
    const tSide = ATOMS42.side1.p, tagT: P = [14, 34], tagB: P = [214, 16];
    const pT = toward(tSide, [tagT[0] + 24, tagT[1] + 22], RING.O), pB = toward(Ob, [tagB[0] + 8, tagB[1] + 22], RING.O);
    s.tag(tagT[0], tagT[1], 'terminal O', pT[0], pT[1], { bare: true });
    s.tag(tagB[0], tagB[1], 'bridging O', pB[0], pB[1], { hi: true, bare: true });
    // the line the book prints under the drawing
    s.sym(CX42, 200, 'dichromate ion, Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>:', { size: 14 });
    s.sym(CX42, 220, 'two CrO<sub>4</sub> tetrahedra sharing one corner O', { size: 14 });
    return s;
  },
  check() {
    const s = fig42.draw(fig42.cases[0]), out: Check[] = [], A = ATOMS42, ids = Object.keys(A);
    const crs = ids.filter((i) => A[i].el === 'Cr'), os = ids.filter((i) => A[i].el === 'O');
    const nb = (id: string) => BONDS42.filter((b) => b.a === id || b.b === id).map((b) => (b.a === id ? b.b : b.a));
    out.push([`The drawing holds ${crs.length} Cr and ${os.length} O, the Cr₂O₇ of the printed formula`, crs.length === 2 && os.length === 7]);
    out.push(['Each Cr, read from the bonds, has four O round it: a CrO₄ unit, as a tetrahedron has four corners', crs.every((c) => nb(c).length === 4 && nb(c).every((o) => A[o].el === 'O'))]);
    out.push(['Exactly one O is bonded to both Cr, the shared corner; the other six belong to one Cr each', os.filter((o) => nb(o).length === 2 && crs.every((c) => nb(o).includes(c))).join() === 'Ob' && os.filter((o) => o !== 'Ob').every((o) => nb(o).length === 1)]);
    out.push(['Counted from the units: 4 + 4 − 1 shared = 7 O', 4 + 4 - 1 === os.length]);
    out.push(['The printed charge follows: 2 × (+6) + 7 × (−2) = −2, with Cr at +6 as the text says', 2 * 6 + 7 * -2 === -2]);
    const v1: P = [crL[0] - A.Ob.p[0], crL[1] - A.Ob.p[1]], v2: P = [crR[0] - A.Ob.p[0], crR[1] - A.Ob.p[1]];
    const deg = (a: P, b: P) => (Math.acos((a[0] * b[0] + a[1] * b[1]) / (Math.hypot(...a) * Math.hypot(...b))) * 180) / Math.PI;
    const drawn = deg(v1, v2), book = deg([BOOK42.Cr - BOOK42.Ox, BOOK42.CrY - BOOK42.Oy], [BOOK42.CrR - BOOK42.Ox, BOOK42.CrY - BOOK42.Oy]);
    out.push([`The Cr–O–Cr angle, measured off the drawn atoms, is ${fmt(drawn, 3)}°; on the book's own path data (p. 159) it is ${fmt(book, 2)}°; printed 126°`, close(drawn, 126, 1e-9) && close(book, 126, 0.01)]);
    const arc = lineOf(s, 'arc'), ends = [arc[0], arc[arc.length - 1]];
    const onBond = (p: P, v: P) => { const w: P = [p[0] - A.Ob.p[0], p[1] - A.Ob.p[1]]; return close(w[0] * v[1] - w[1] * v[0], 0, 1e-6) && w[0] * v[0] + w[1] * v[1] > 0; };
    out.push([`The arc, read back, is centred on the bridging O at radius ${ARC42} and runs from one Cr–O bond to the other, through the inside of the angle`, arc.every((p) => close(len(p, A.Ob.p), ARC42, 1e-9)) && onBond(ends[0], v2) && onBond(ends[1], v1) && arc[20][1] > A.Ob.p[1]]);
    out.push(['The two units are mirror images across the bridging O', ['side', 'low', 'front'].every((k) => close(A[`${k}1`].p[0] + A[`${k}2`].p[0], 2 * CX42, 1e-9) && close(A[`${k}1`].p[1], A[`${k}2`].p[1], 1e-9)) && close(crL[0] + crR[0], 2 * CX42, 1e-9)]);
    out.push(['One bond of each unit comes forward as a wedge, as printed, and the other three are plain', crs.every((c) => BONDS42.filter((b) => b.a === c && b.wedge).length === 1)]);
    const ring = (name: string, id: string) => close(len(tagOf(s, name)!.from!, A[id].p), RING.O, 1e-9);
    out.push(['"bridging O" ends on the ring of the shared O, in the highlight; "terminal O" on the ring of an O with one bond', ring('bridging O', 'Ob') && ring('terminal O', 'side1')]);
    out.push(['No bond length on the drawing: the page prints only the angle', !s.labels.some((l) => /pm|Å/.test(l.text))]);
    out.push(['The labels as printed: terminal O, bridging O, 126°, and the line under the drawing (on two lines)', !!tagOf(s, 'terminal O') && !!tagOf(s, 'bridging O') && ['126°', 'dichromate ion, Cr2O72−:', 'two CrO4 tetrahedra sharing one corner O'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 4.3 · the lanthanoid contraction (Topic 03, p. 167)              */
/* ===================================================================== */
const CAP43 = 'The lanthanoid contraction: Ln<sup>3+</sup> radii fall steadily from La to Lu, leaving Zr and Hf nearly identical in size. (Zr and Hf in the inset are atomic radii.)';
const NAMES43 = ['La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu'];
/** The book's path data, p. 167: the ticks of 85 and 110 pm, the curve's points, the dashed guide's two ends, and the two bars' ends. */
const PATH43 = {
  y85: 44.880892,
  y110: 207.927539,
  curve: [163.578334, 149.231099, 136.185487, 131.62246, 123.142813, 115.315445, 108.143297, 102.272771, 92.4915, 85.316414, 78.141327, 70.969179, 64.446372, 56.619005, 52.055979],
  guide: [155.677512, 48.259823],
  barZr: [310.664062, 426.515625],
  barHf: [310.664062, 425.789062],
};
const pm = (y: number) => 85 + ((y - PATH43.y85) * 25) / (PATH43.y110 - PATH43.y85);
const RADII = PATH43.curve.map((y) => Math.round(pm(y) * 10) / 10);
/** The least-squares line through the radii: the book's dashed guide, computed. */
const FIT43 = (() => {
  const n = RADII.length, mx = (n - 1) / 2, my = RADII.reduce((a, b) => a + b, 0) / n;
  const m = RADII.reduce((a, v, i) => a + (i - mx) * (v - my), 0) / RADII.reduce((a, _, i) => a + (i - mx) ** 2, 0);
  return (i: number) => my + m * (i - mx);
})();
const ZR = 160, HF = 159, BAR43 = { x0: 116, perPm: 140 / 160 };
const BASE43 = 298;
const F43: Frame = { x0: 56, dx: 19.6, oy: BASE43 + 84 * 9.6, sy: 9.6 };
const fig43: Diagram = {
  id: 'c12-04-fig-4.3',
  topic: 2,
  name: 'Lanthanoid contraction',
  cases: [{ chip: 'La to Lu', cap: CAP43 }],
  draw() {
    const s = new Sketch(W, 346), f = F43;
    const ticks = [85, 90, 95, 100, 105, 110].map((v): [number, string] => [v, String(v)]);
    chart(s, f, { names: NAMES43, ticks, axisX: 40, right: 338, top: Y(f, 112), bottom: BASE43, base: BASE43, size: 12 });
    s.sym(14, 16, 'Ln<sup>3+</sup> ionic radius / pm', { size: 14, anchor: 'start' });
    s.sym(W / 2, BASE43 + 40, 'element (atomic number 57→71)', { size: 14 });
    // the book's inset, on a clear patch of the grid
    const box: Rect = [86, 32, 338, 98];
    clearGrid(s, box);
    path(s, [[box[0], box[1]], [box[2], box[1]], [box[2], box[3]], [box[0], box[3]], [box[0], box[1]]], { color: C.grey, w: 1, name: 'box' });
    s.sym(92, 50, 'consequence: 4d/5d radii almost equal', { size: 13, anchor: 'start' });
    ([['Zr', ZR, 60], ['Hf', HF, 80]] as [string, number, number][]).forEach(([el, r, y]) => {
      const x1 = BAR43.x0 + r * BAR43.perPm;
      s.sym(92, y + 9, el, { size: 13, anchor: 'start' });
      path(s, [[BAR43.x0, y], [x1, y], [x1, y + 10], [BAR43.x0, y + 10], [BAR43.x0, y]], { w: 1.4, name: `bar${el}` });
      s.sym(BAR43.x0 + ZR * BAR43.perPm + 8, y + 9, `${r} pm`, { size: 13, anchor: 'start' });
    });
    // the dashed guide, then the curve
    path(s, [at(f, 0, FIT43(0)), at(f, 14, FIT43(14))], { color: C.slate, w: 1.2, dash: true, name: 'guide' });
    const pts = RADII.map((r, i) => at(f, i, r));
    path(s, pts, { color: C.mari, w: 2.6, name: 'curve' });
    pts.forEach(([x, y]) => s.dot(x, y, 3, C.mari));
    pill(s, 48, 256, ['lanthanoid contraction:', 'smooth, near-linear decrease'], at(f, 6, RADII[6]), { hi: true });
    return s;
  },
  check() {
    const s = fig43.draw(fig43.cases[0]), f = F43, out: Check[] = [], r = RADII;
    const q = lineOf(s, 'curve').map(([x, y]): P => [iOf(f, x), vOf(f, y)]);
    out.push(['The curve, read back off the drawing, is the book\'s (p. 167, decoded from its path data against its own 85 and 110 pm ticks)', q.length === 15 && q.every(([i, v], j) => close(i, j) && close(v, r[j], 1e-9))]);
    out.push(['The decoded radii, La to Lu: 103.2, 101, 99, 98.3, 97, 95.8, 94.7, 93.8, 92.3, 91.2, 90.1, 89, 88, 86.8, 86.1 pm', same(r, [103.2, 101, 99, 98.3, 97, 95.8, 94.7, 93.8, 92.3, 91.2, 90.1, 89, 88, 86.8, 86.1])]);
    out.push(['Fifteen elements, La to Lu, one for each atomic number from 57 to 71', NAMES43.length === 71 - 57 + 1 && NAMES43.every((e) => hasLabel(s, e))]);
    out.push([`The radii "fall steadily": every step is a fall, ${fmt(r[0] - r[14], 1)} pm in all`, r.every((v, i) => i === 0 || v < r[i - 1])]);
    const g = lineOf(s, 'guide').map(([x, y]): P => [iOf(f, x), vOf(f, y)]);
    out.push([`The dashed guide is the least-squares line through the radii (${fmt(g[0][1])} at La, ${fmt(g[1][1])} at Lu), and that is the book's guide: its path data read ${fmt(pm(PATH43.guide[0]))} and ${fmt(pm(PATH43.guide[1]))}`, close(g[0][0], 0) && close(g[1][0], 14) && close(g[0][1], pm(PATH43.guide[0]), 0.01) && close(g[1][1], pm(PATH43.guide[1]), 0.01)]);
    const worst = Math.max(...r.map((v, i) => Math.abs(v - FIT43(i))));
    out.push([`"Near-linear": no radius is more than ${fmt(worst)} pm off that line, out of ${fmt(r[0] - r[14], 1)} pm`, worst < 1.3]);
    const wide = (name: string) => { const x = lineOf(s, name).map((p) => p[0]); return Math.max(...x) - Math.min(...x); };
    const ratio = wide('barHf') / wide('barZr');
    out.push([`The two bars start together and their lengths are in the ratio 159 : 160 (${fmt(ratio, 5)}; the book's bars, path data: ${fmt((PATH43.barHf[1] - PATH43.barHf[0]) / (PATH43.barZr[1] - PATH43.barZr[0]), 5)})`, close(ratio, HF / ZR, 1e-9) && close((PATH43.barHf[1] - PATH43.barHf[0]) / (PATH43.barZr[1] - PATH43.barZr[0]), HF / ZR, 1e-3) && close(lineOf(s, 'barZr')[0][0], lineOf(s, 'barHf')[0][0])]);
    out.push(['Zr and Hf are "nearly identical": 1 pm apart, as the text says (160 pm vs 159 pm, p. 165)', ZR - HF === 1 && hasLabel(s, '160 pm') && hasLabel(s, '159 pm')]);
    const t = tagOf(s, 'lanthanoid contraction: smooth, near-linear decrease')!;
    out.push(['The marigold tag\'s dot lies on the marigold curve', close(vOf(f, t.from![1]), r[Math.round(iOf(f, t.from![0]))], 1e-9)]);
    out.push(['The axis and labels as printed: Ln³⁺ ionic radius / pm, 85 to 110, element (atomic number 57→71), Zr, Hf, and the inset\'s line', ['Ln3+ ionic radius / pm', '85', '90', '95', '100', '105', '110', 'element (atomic number 57→71)', 'Zr', 'Hf', 'consequence: 4d/5d radii almost equal'].every((l) => hasLabel(s, l))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* "Figure 1" · E°(M²⁺/M) across the 3d series (Additional topic B, p. 184) */
/* ===================================================================== */
const CAPB1 = 'Standard electrode potentials <i>E</i>°(M<sup>2+</sup>/M) across the 3d series: the trend climbs from Ti toward Cu, but Mn and Zn sit below the smooth curve (stable d<sup>5</sup> and d<sup>10</sup> products), Ni’s very large hydration enthalpy keeps it more negative than its atomisation and ionisation costs alone predict, and only Cu crosses zero into noble territory.';
const NAMESB1 = ['Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn'];
/** The book's path data, p. 184: the ticks of 0 V and −1.5 V, and the curve's points. */
const PATHB1 = {
  y0: 158.839471,
  ym15: 54.347284,
  curve: [45.292596, 76.640252, 96.144159, 76.640252, 128.191034, 139.335565, 141.425409, 182.526971, 105.898065],
};
const EMF = PATHB1.curve.map((y) => Math.round((((y - PATHB1.y0) * 1.5) / (PATHB1.y0 - PATHB1.ym15)) * 100) / 100);
/** The same values as the chapter prints them in its two tables. */
const TABLE174 = [-1.63, -1.18, -0.9, -1.18, -0.44, -0.28, -0.25, 0.34, -0.76];
const TABLE183 = [-1.63, -1.18, -0.9, -1.18, -0.44, -0.28, -0.25, 0.34, -0.76];
const FB1: Frame = { x0: 62, dx: 33, oy: 128, sy: 112 };
const figB1: Diagram = {
  id: 'c12-04-B-d1',
  topic: 5,
  name: 'Electrode potentials across the 3d series',
  cases: [{ chip: 'Ti to Zn', cap: CAPB1 }],
  draw() {
    const s = new Sketch(W, 370), f = FB1, bottom = Y(f, -1.95);
    const ticks: [number, string][] = [[0.5, '0.5'], [0, '0.0'], [-0.5, '−0.5'], [-1, '−1.0'], [-1.5, '−1.5']];
    chart(s, f, { names: NAMESB1, ticks, axisX: 44, right: 338, top: Y(f, 0.72), bottom, base: null });
    path(s, [[50, Y(f, 0)], [338, Y(f, 0)]], { w: 1.4, name: 'zero' });
    s.sym(14, 22, '<i>E</i>°(M<sup>2+</sup>/M) / V', { size: 15, anchor: 'start' });
    clearGrid(s, [58, 77, 122, 92]);
    s.sym(62, 88, '3d series', { size: 13, anchor: 'start', color: C.slate });
    const pts = EMF.map((v, i) => at(f, i, v));
    path(s, pts, { w: 1.9, name: 'curve' });
    pts.forEach(([x, y], i) => s.dot(x, y, 3.2, i === 7 ? C.mari : C.ink));
    mtag(s, 205, 24, ['Cu +0.34: noble,', 'no H<sub>2</sub> from acids'], pts[7], { hi: true });
    mtag(s, 66, 98, ['Ni: large hydration enthalpy'], pts[6]);
    mtag(s, 204, 236, ['Zn −0.76: stable', 'd<sup>10</sup> product'], pts[8]);
    mtag(s, 110, 296, ['Mn −1.18: stable d<sup>5</sup> product'], pts[3]);
    return s;
  },
  check() {
    const s = figB1.draw(figB1.cases[0]), f = FB1, out: Check[] = [], e = EMF, n = NAMESB1;
    const q = lineOf(s, 'curve').map(([x, y]): P => [iOf(f, x), vOf(f, y)]);
    out.push(['The curve, read back off the drawing, is the book\'s (p. 184, decoded from its path data against its own 0 V and −1.5 V ticks)', q.length === 9 && q.every(([i, v], j) => close(i, j) && close(v, e[j], 1e-9))]);
    out.push(['Those decoded values are the table on p. 174 and the table on p. 183, couple by couple: −1.63, −1.18, −0.90, −1.18, −0.44, −0.28, −0.25, +0.34, −0.76 V', same(e, TABLE174) && same(e, TABLE183)]);
    out.push(['Signs: only Cu is positive, every other couple negative, as the caption says', e.filter((v) => v > 0).length === 1 && e[n.indexOf('Cu')] === 0.34]);
    out.push(['The drawn Cu dot stands above the zero line, every other below it', s.points.every((p) => (close(iOf(f, p.x), 7) ? p.y < Y(f, 0) : p.y > Y(f, 0)))]);
    out.push(['The zero line is at 0.0, and the dots run in the printed order Ti to Zn', close(vOf(f, lineOf(s, 'zero')[0][1]), 0) && n.every((m) => hasLabel(s, m))]);
    const steps = e.slice(1, 8).map((v, i) => v - e[i]);
    out.push(['The trend climbs from Ti toward Cu: every step from Ti to Cu rises but one, Cr to Mn', steps.filter((d) => d <= 0).length === 1 && steps[2] < 0]);
    out.push([`Mn sits below the line through its neighbours Cr and Fe (${fmt((e[2] + e[4]) / 2)} V), at ${fmt(e[3])} V; Zn falls ${fmt(e[7] - e[8])} V from Cu, against the climb`, e[3] < (e[2] + e[4]) / 2 && e[8] < e[6] && e[8] < e[7]]);
    out.push([`Ni is only a little above Co, and ${fmt((e[5] + e[7]) / 2 - e[6])} V BELOW the line through Co and Cu (${fmt((e[5] + e[7]) / 2)} V), as the caption says: hydration keeps it more negative than its costs predict`, e[6] < (e[5] + e[7]) / 2 && e[6] > e[5]]);
    const dotOn = (name: string, m: string) => { const t = tagOf(s, name)!, i = n.indexOf(m); return close(t.from![0], X(f, i)) && close(vOf(f, t.from![1]), e[i], 1e-9); };
    out.push(['Each tag\'s dot sits on its own element, and each number on a tag is that element\'s value', dotOn('Cu +0.34: noble, no H2 from acids', 'Cu') && dotOn('Ni: large hydration enthalpy', 'Ni') && dotOn('Zn −0.76: stable d10 product', 'Zn') && dotOn('Mn −1.18: stable d5 product', 'Mn') && e[7] === 0.34 && e[8] === -0.76 && e[3] === -1.18]);
    out.push(['The labels as printed: E°(M²⁺/M) / V, 3d series, the five ticks', ['E°(M2+/M) / V', '3d series', '0.5', '0.0', '−0.5', '−1.0', '−1.5'].every((l) => hasLabel(s, l))]);
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_12_04: Diagram[] = [fig41, fig42, fig43, figB1];

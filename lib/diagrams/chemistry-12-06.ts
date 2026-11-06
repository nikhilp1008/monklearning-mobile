import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 12, CHAPTER 6 (Haloalkanes and Haloarenes): every drawing of the Master Reference
 * book on pp. 251–310, redrawn. Every page's vector shapes were counted (only pp. 268, 270, 280, 290
 * and 299 hold a curve or a slanted line; there are no raster images). SEVEN drawings on five pages:
 *
 *   Figures 6.1, 6.2 (p. 268; captions first on p. 267) — Topic 02, topic index 1.
 *   Figures 6.3, 6.4 (p. 270; captions first on p. 269) — Topic 02, index 1.
 *   Figure 6.5 (p. 280; caption first on p. 279) — Topic 03, index 2.
 *   Figure 6.6 (p. 290; caption first on p. 289) — Topic 04, index 3.
 *   "Figure 1" (p. 299, unnumbered in the chapter's series) — Additional topic B, index 5.
 *
 * THE BOOK'S NUMBERS. Fig 6.1's bond directions and Fig 6.2's whole energy curve are the book's own,
 * from the path data of p. 268. The energies have no scale in the book, so they are schematic there
 * and here: only their order and proportions mean anything.
 *
 * WHERE THIS DIFFERS FROM THE PRINTED DRAWING, ON THE TEXT'S AUTHORITY. Fig 6.3 is drawn with the H and X
 * anti-periplanar (Additional topic B's words); the book draws X in line with the C–C. Fig 6.4's
 * intermediate has an open arc over its five sp² carbons (the text: loss of Cl⁻ "restores aromaticity");
 * the book draws a closed circle. Fig 6.6's ¹⁴C is tied to its vertex and also marked on chlorobenzene
 * (Topic 04's question: "a ¹⁴C label at the C–Cl carbon"); the book's float beside the rings.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const rad = (deg: number) => (deg * Math.PI) / 180;
/** The point r from c in direction deg (counter-clockwise from +x, y up). */
const az = (c: P, deg: number, r: number): P => [c[0] + r * Math.cos(rad(deg)), c[1] - r * Math.sin(rad(deg))];
/** The direction of b from a, 0–360 (counter-clockwise from +x, y up). */
const azOf = (a: P, b: P) => ((Math.atan2(a[1] - b[1], b[0] - a[0]) * 180) / Math.PI + 360) % 360;
const azGap = (x: number, y: number) => { const d = (((x - y) % 360) + 360) % 360; return Math.min(d, 360 - d); };
const mid = (a: P, b: P): P => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- drawing helpers (as in chemistry-12-05.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; name?: string };
/** Every line a label must keep clear of, by sketch, with its name so a check can read it back. */
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const lineOf = (s: Sketch, name: string) => LINES.get(s)!.find((l) => l.name === name)!.pts;
const namesOf = (s: Sketch, prefix: string) => LINES.get(s)!.filter((l) => l.name.startsWith(prefix)).map((l) => l.name);
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  keep(s, pts, o.name);
}
function arrow(s: Sketch, a: P, b: P, o: Stroke = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color, w: o.w });
  keep(s, [a, b], o.name);
}
/** A two-way arrow from its middle to both ends, for an activation energy. */
function both(s: Sketch, a: P, b: P, o: Stroke = {}) {
  const m = mid(a, b);
  s.vec(m[0], m[1], a[0], a[1], { color: o.color, w: o.w });
  s.vec(m[0], m[1], b[0], b[1], { color: o.color, w: o.w });
  keep(s, [a, b], o.name);
}
/** A curly arrow: a cubic from a to the tip b, a filled head along its last stretch. */
function curly(s: Sketch, a: P, c1: P, c2: P, b: P, o: Stroke = {}) {
  const n = 40, HL = 7.5, HW = 3.4, col = o.color ?? C.mari;
  const all = Array.from({ length: n + 1 }, (_, i): P => {
    const t = i / n, u = 1 - t;
    return [u * u * u * a[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t * t * t * b[0], u * u * u * a[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t * t * t * b[1]];
  });
  const shaft = all.filter((p) => len(p, b) >= HL);
  const base = shaft[shaft.length - 1], L = len(base, b), ux = (b[0] - base[0]) / L, uy = (b[1] - base[1]) / L;
  const w1: P = [base[0] - uy * HW, base[1] + ux * HW], w2: P = [base[0] + uy * HW, base[1] - ux * HW];
  path(s, shaft, { color: col, w: o.w ?? 1.5, name: o.name });
  s.add(`<path d="M${r1(b[0])} ${r1(b[1])} L${r1(w1[0])} ${r1(w1[1])} L${r1(w2[0])} ${r1(w2[1])} Z" fill="${col}"/>`);
  keep(s, [b, w1, w2, b], `${o.name}:head`);
}
const tipOf = (s: Sketch, name: string) => lineOf(s, `${name}:head`)[0];
const tailOf = (s: Sketch, name: string) => lineOf(s, name)[0];
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/** How close a point comes to a polyline, walked at half a pixel. */
const pointToLine = (p: P, pts: P[]) => {
  let gap = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
    for (let k = 0; k <= n; k++) gap = Math.min(gap, len(p, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  return gap;
};
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
const labelsNamed = (s: Sketch, t: string) => s.labels.filter((l) => l.text === t);
const centre = (r: Rect): P => [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2];

/** A line of STIX on the drawing, from its baseline, its box at its true width (subscripts counted). */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}) {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  s.labels.push({ text: plain(html), rect: [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)] });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text });
}
const AT = 14;
/** An atom or group centred on p; its box is what bonds stop short of. */
function atom(s: Sketch, p: P, html: string, o: { size?: number; color?: string } = {}): Rect {
  const size = o.size ?? AT, w = widthOf(html, size);
  const rect: Rect = [p[0] - w / 2, p[1] - size * 0.4, p[0] + w / 2, p[1] + size * (html.includes('<sub>') ? 0.62 : 0.4)];
  s.labels.push({ text: plain(html), rect });
  s.text(p[0], p[1] + size * 0.36, html, { size, color: o.color ?? C.text });
  return rect;
}
/**
 * A tag whose name needs a raised letter (¹⁴C): the kit's tags are Onest, so this one is the same white
 * pill all in STIX, as chemistry-11-09.ts does. Registered as a tag, leader line and all, so the audit
 * checks it like any other.
 */
function mtag(s: Sketch, x: number, y: number, html: string, p: P | null, o: { hi?: boolean; anchor?: 'start' | 'middle' | 'end'; size?: number } = {}): Rect {
  const size = o.size ?? 13, hi = !!o.hi, w = widthOf(html, size) + 18, anchor = o.anchor ?? 'start';
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x, rect: Rect = [x0, y, x0 + w, y + 22];
  let from: P | null = null, to: P | null = null;
  if (p) {
    from = p;
    to = [Math.max(x0 + 8, Math.min(x0 + w - 8, p[0])), p[1] < y ? y : y + 22];
    s.add(`<line x1="${r1(p[0])}" y1="${r1(p[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`);
  }
  s.add(`<rect x="${r1(x0)}" y="${y}" width="${r1(w)}" height="22" rx="11" fill="#fff" stroke="${hi ? C.mari : C.border}" stroke-width="${hi ? 1.5 : 1}"/>`);
  s.text(x0 + w / 2, y + 15.5, html, { size, color: hi ? C.amber : C.text });
  s.tags.push({ name: plain(html), rect, from, to });
  return rect;
}

/* ---------- bonds ---------- */
function exit(r: Rect | null, p: P, u: P, g: number): number {
  if (!r) return 0;
  for (let t = 0; t < 200; t += 0.25) { const q: P = [p[0] + u[0] * t, p[1] + u[1] * t]; if (q[0] < r[0] - g || q[0] > r[2] + g || q[1] < r[1] - g || q[1] > r[3] + g) return t; }
  return 200;
}
/** The two ends of a bond between two atoms, each stopped clear of its symbol. */
function ends(A: P, ra: Rect | null, B: P, rb: Rect | null, g = LABEL_GAP + 0.5): [P, P] {
  const L = len(A, B), u: P = [(B[0] - A[0]) / L, (B[1] - A[1]) / L];
  const ta = exit(ra, A, u, g), tb = exit(rb, B, [-u[0], -u[1]], g);
  return [[A[0] + u[0] * ta, A[1] + u[1] * ta], [B[0] - u[0] * tb, B[1] - u[1] * tb]];
}
function bond(s: Sketch, A: P, ra: Rect | null, B: P, rb: Rect | null, o: Stroke & { order?: 1 | 2 } = {}) {
  const [p, q] = ends(A, ra, B, rb, LABEL_GAP + ((o.order ?? 1) === 2 ? 2 : 0.5));
  if ((o.order ?? 1) === 1) { path(s, [p, q], o); return; }
  const L = len(p, q), n: P = [(-(q[1] - p[1]) / L) * 2.4, ((q[0] - p[0]) / L) * 2.4];
  path(s, [[p[0] + n[0], p[1] + n[1]], [q[0] + n[0], q[1] + n[1]]], { ...o, name: `${o.name}:1` });
  path(s, [[p[0] - n[0], p[1] - n[1]], [q[0] - n[0], q[1] - n[1]]], { ...o, name: `${o.name}:2` });
}
/** A wedge, narrow at A (toward the reader), as chemistry-11-04b.ts draws it. */
function wedge(s: Sketch, A: P, ra: Rect | null, B: P, rb: Rect | null, name: string) {
  const [p, q] = ends(A, ra, B, rb), L = len(p, q), n: P = [(-(q[1] - p[1]) / L) * 3.6, ((q[0] - p[0]) / L) * 3.6];
  const c1: P = [q[0] + n[0], q[1] + n[1]], c2: P = [q[0] - n[0], q[1] - n[1]];
  s.add(`<path d="M${r1(p[0])} ${r1(p[1])} L${r1(c1[0])} ${r1(c1[1])} L${r1(c2[0])} ${r1(c2[1])} Z" fill="${C.ink}" stroke="${C.ink}" stroke-width="1" stroke-linejoin="round"/>`);
  keep(s, [p, c1]); keep(s, [p, c2]); keep(s, [p, q], name);
}
/** A hash, narrow at A (away from the reader). */
function hash(s: Sketch, A: P, ra: Rect | null, B: P, rb: Rect | null, name: string) {
  const [p, q] = ends(A, ra, B, rb), L = len(p, q), u: P = [(-(q[1] - p[1]) / L), ((q[0] - p[0]) / L)], k = 5;
  for (let i = 0; i <= k; i++) {
    const c: P = [p[0] + ((q[0] - p[0]) * i) / k, p[1] + ((q[1] - p[1]) * i) / k], w = 0.6 + (3.2 * i) / k;
    path(s, [[c[0] + u[0] * w, c[1] + u[1] * w], [c[0] - u[0] * w, c[1] - u[1] * w]], { w: 1.3 });
  }
  keep(s, [p, q], name);
}
const det3 = (a: number[], b: number[], c: number[]) => a[0] * (b[1] * c[2] - b[2] * c[1]) - a[1] * (b[0] * c[2] - b[2] * c[0]) + a[2] * (b[0] * c[1] - b[1] * c[0]);

/* ---------- rings ---------- */
/** Vertex k of a regular hexagon with a vertex at the top (k = 0), then clockwise. */
const hexPt = (c: P, r: number, k: number): P => { const a = rad(-90 + 60 * k); return [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)]; };
const circlePts = (c: P, r: number, n = 60): P[] => Array.from({ length: n + 1 }, (_, i): P => [c[0] + r * Math.cos((2 * Math.PI * i) / n), c[1] + r * Math.sin((2 * Math.PI * i) / n)]);
function ring(s: Sketch, c: P, r: number, id: string, circle = 0) {
  path(s, [0, 1, 2, 3, 4, 5, 0].map((k) => hexPt(c, r, k)), { w: 1.8, name: `${id}:ring` });
  if (circle) path(s, circlePts(c, r * circle), { w: 1.6, name: `${id}:circle` });
}
const vertexOf = (c: P, r: number, q: P) => [0, 1, 2, 3, 4, 5].find((k) => len(hexPt(c, r, k), q) < 1e-6) ?? -1;
const regular = (c: P, r: number) => {
  const v = [0, 1, 2, 3, 4, 5].map((k) => hexPt(c, r, k)), side = v.map((p, k) => len(p, v[(k + 1) % 6]));
  return side.every((x) => close(x, r, 1e-9));
};

/* ---------- atom tally: what each side of an arrow holds ---------- */
type Tally = Record<string, number>;
const sum = (...t: Tally[]) => { const o: Tally = {}; t.forEach((m) => Object.entries(m).forEach(([k, v]) => { o[k] = (o[k] ?? 0) + v; })); return o; };
const same = (a: Tally, b: Tally) => { const k = new Set([...Object.keys(a), ...Object.keys(b)]); return [...k].every((e) => (a[e] ?? 0) === (b[e] ?? 0)); };

/* ---------- flow charts (Figure 6.5 and the triage tree) ---------- */
type Line = { html: string; size?: number; color?: string };
type Box = { id: string; rect: Rect; lines: Line[] };
const BOXES = new WeakMap<Sketch, Box[]>();
const EDGES = new WeakMap<Sketch, P[][]>();
function box(s: Sketch, id: string, rect: Rect, lines: Line[], o: { edge?: string; w?: number } = {}) {
  const b: Box = { id, rect, lines };
  BOXES.set(s, [...(BOXES.get(s) ?? []), b]);
  s.add(`<rect x="${r1(rect[0])}" y="${r1(rect[1])}" width="${r1(rect[2] - rect[0])}" height="${r1(rect[3] - rect[1])}" rx="9" fill="#fff" stroke="${o.edge ?? C.slate}" stroke-width="${o.w ?? 1.2}"/>`);
  s.tags.push({ name: id, rect, from: null, to: null });
  const lh = 16, x = (rect[0] + rect[2]) / 2, y0 = (rect[1] + rect[3]) / 2 - ((lines.length - 1) * lh) / 2;
  lines.forEach((l, i) => s.text(x, y0 + i * lh + (l.size ?? 12.5) * 0.34, l.html, { size: l.size ?? 12.5, color: l.color ?? C.text }));
}
function edge(s: Sketch, pts: P[]) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${C.slate}" stroke-width="1.2" stroke-linejoin="round"/>`);
  EDGES.set(s, [...(EDGES.get(s) ?? []), pts]);
}
const onBorder = (r: Rect, p: P) => {
  const inX = p[0] >= r[0] - 0.01 && p[0] <= r[2] + 0.01, inY = p[1] >= r[1] - 0.01 && p[1] <= r[3] + 0.01;
  return (inX && (close(p[1], r[1], 0.01) || close(p[1], r[3], 0.01))) || (inY && (close(p[0], r[0], 0.01) || close(p[0], r[2], 0.01)));
};
/** The tree as drawn: which box each connector really touches at each end. */
const treeOf = (s: Sketch) => (EDGES.get(s) ?? []).map((pts) => {
  const B = BOXES.get(s)!, from = B.find((b) => onBorder(b.rect, pts[0])), to = B.find((b) => onBorder(b.rect, pts[pts.length - 1]));
  return [from?.id ?? '?', to?.id ?? '?'] as [string, string];
});
const orient = (a: P, b: P, c: P) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
const properCross = (a: P, b: P, c: P, d: P) => orient(a, b, c) * orient(a, b, d) < -1e-6 && orient(c, d, a) * orient(c, d, b) < -1e-6;
/** Connectors that properly cross another, and connectors that run through a box they do not end on. */
function treeClear(s: Sketch): Check[] {
  const E = EDGES.get(s) ?? [], B = BOXES.get(s) ?? [], seg = E.map((pts) => pts.slice(1).map((q, i): [P, P] => [pts[i], q]));
  let crossings = 0;
  seg.forEach((a, i) => seg.slice(i + 1).forEach((b) => a.forEach(([p, q]) => b.forEach(([u, v]) => { if (properCross(p, q, u, v)) crossings++; }))));
  let through = 0;
  E.forEach((pts) => {
    const own = [pts[0], pts[pts.length - 1]];
    B.forEach((b) => { if (own.some((p) => onBorder(b.rect, p))) return; const inner: Rect = [b.rect[0] - 2, b.rect[1] - 2, b.rect[2] + 2, b.rect[3] + 2]; if (boxToLine(inner, pts) < 1e-9) through++; });
  });
  const tight = B.flatMap((b) => b.lines.filter((l) => widthOf(l.html, l.size ?? 12.5) + 8 > b.rect[2] - b.rect[0]).map((l) => plain(l.html)));
  return [
    [`A tree with no crossing lines: ${E.length} connectors, ${crossings} crossings, ${through} through another box`, crossings === 0 && through === 0],
    [`Every line of text fits its box with room to spare at Android's widths${tight.length ? `: not ${tight.join(', ')}` : ''}`, tight.length === 0],
  ];
}

/* ===================================================================== */
/* Figure 6.1 · SN2 (Topic 02, p. 268)                                    */
/* ===================================================================== */
const CAP61 = 'S<sub>N</sub>2: the nucleophile attacks as the halide leaves in a single step, through a planar three-group transition state; the umbrella inverts.';
/** p. 268, path data: the three C–H directions in the reactant. H up (90°), H hashed (135°), H wedged (225°). The product is the same three reflected. */
const AZ61 = { up: 90, hash: 135, wedge: 225 };
const G61 = { Lup: 34, L: 38, rC: [86, 70] as P, tC: [250, 70] as P, pC: [86, 206] as P, dX: 46, dNuR: 62, tNu: 54.3, tX: 50.8, tH: 30, top: 22, bot: 112, name: 132 };
/** The three C–H of one panel; `flip` reflects them in the vertical through the carbon. */
function umbrella(s: Sketch, id: string, c: P, rc: Rect, flip: boolean) {
  const f = (d: number) => (flip ? 180 - d : d), L = G61.L;
  const U = az(c, f(AZ61.up), G61.Lup), Ha = az(c, f(AZ61.hash), L), We = az(c, f(AZ61.wedge), L);
  const rU = atom(s, U, 'H'), rH = atom(s, Ha, 'H'), rW = atom(s, We, 'H');
  bond(s, c, rc, U, rU, { name: `${id}:up` });
  hash(s, c, rc, Ha, rH, `${id}:hash`);
  wedge(s, c, rc, We, rW, `${id}:wedge`);
}
const fig61: Diagram = {
  id: 'c12-06-fig-6.1',
  topic: 1,
  name: 'The SN2 mechanism',
  cases: [{ chip: 'SN2', cap: CAP61 }],
  draw() {
    const s = new Sketch(W, 266), G = G61;
    // the reactant
    const rc = atom(s, G.rC, 'C');
    umbrella(s, 'r', G.rC, rc, false);
    const X: P = [G.rC[0] + G.dX, G.rC[1]], rX = atom(s, X, 'X');
    bond(s, G.rC, rc, X, rX, { name: 'r:CX' });
    const Nu: P = [G.rC[0] - G.dNuR, G.rC[1]];
    atom(s, Nu, 'Nu:<sup>−</sup>');
    curly(s, [42.5, G.rC[1] - 4], [52, 56], [66, 56], [G.rC[0] - 10, G.rC[1] - 1], { name: 'attack' });
    curly(s, [G.rC[0] + 20, G.rC[1] - 3], [G.rC[0] + 24, 50], [G.rC[0] + 38, 44], [X[0], 58.5], { name: 'leave' });
    lab(s, G.rC[0], G.name, 'reactant');
    arrow(s, [146, G.rC[1]], [170, G.rC[1]], { w: 1.8, name: 'step:1' });
    // the transition state
    const c = G.tC, tc = atom(s, c, 'C');
    const tNu: P = [c[0] - G.tNu, c[1]], tX: P = [c[0] + G.tX, c[1]];
    const rNu = atom(s, tNu, 'Nu'), rtX = atom(s, tX, 'X');
    bond(s, c, tc, tNu, rNu, { name: 't:partial:Nu', dash: true, color: C.slate, w: 1.6 });
    bond(s, c, tc, tX, rtX, { name: 't:partial:X', dash: true, color: C.slate, w: 1.6 });
    [90, 210, 330].forEach((d, i) => { const q = az(c, d, G.tH); bond(s, c, tc, q, atom(s, q, 'H'), { name: `t:H${i}` }); });
    lab(s, tNu[0], c[1] - 24, '<i>δ</i><sup>−</sup>', { color: C.slate });
    lab(s, tX[0], c[1] - 24, '<i>δ</i><sup>−</sup>', { color: C.slate });
    path(s, [[183, G.top], [178, G.top], [178, G.bot], [183, G.bot]], { w: 1.4, name: 't:bracket:left' });
    path(s, [[311, G.top], [316, G.top], [316, G.bot], [311, G.bot]], { w: 1.4, name: 't:bracket:right' });
    lab(s, 326, G.top + 10, '‡', { size: 14 });
    lab(s, c[0], G.name, 'transition state');
    arrow(s, [236, 142], [158, 182], { w: 1.8, name: 'step:2' });
    // the product, under the reactant, so the two umbrellas can be compared
    const pc = atom(s, G.pC, 'C');
    umbrella(s, 'p', G.pC, pc, true);
    const pNu: P = [G.pC[0] - G.dX, G.pC[1]];
    bond(s, G.pC, pc, pNu, atom(s, pNu, 'Nu'), { name: 'p:CNu' });
    lab(s, 138, G.pC[1] + 5, '+ X<sup>−</sup>', { anchor: 'start', size: 14 });
    lab(s, G.pC[0], 258, 'product (inverted)');
    return s;
  },
  check() {
    const s = fig61.draw(fig61.cases[0]), G = G61, out: Check[] = [];
    const dir = (id: string, n: string) => azOf(...(lineOf(s, `${id}:${n}`) as [P, P]));
    out.push([`Reactant, read back: C–H at ${fmt(dir('r', 'up'), 0)}°, ${fmt(dir('r', 'hash'), 0)}° (hash), ${fmt(dir('r', 'wedge'), 0)}° (wedge), the book's own directions (p. 268, path data); C–X at ${fmt(dir('r', 'CX'), 0)}°`, close(dir('r', 'up'), 90, 1e-6) && close(dir('r', 'hash'), 135, 1e-6) && close(dir('r', 'wedge'), 225, 1e-6) && close(dir('r', 'CX'), 0, 1e-6)]);
    out.push([`Product, read back: C–H at ${fmt(dir('p', 'up'), 0)}°, ${fmt(dir('p', 'hash'), 0)}° (hash), ${fmt(dir('p', 'wedge'), 0)}° (wedge); C–Nu at ${fmt(dir('p', 'CNu'), 0)}°: each the reactant's reflected in the vertical through carbon, wedge still a wedge`, ['up', 'hash', 'wedge'].every((n) => azGap(dir('p', n), 180 - dir('r', n)) < 1e-6) && close(dir('p', 'CNu'), 180, 1e-6)]);
    const vec = (id: string, n: string, z: number) => { const [a, b] = lineOf(s, `${id}:${n}`) as [P, P], L = len(a, b); return [(b[0] - a[0]) / L, -(b[1] - a[1]) / L, z]; };
    const handed = (id: string) => det3(vec(id, 'up', 0), vec(id, 'hash', -0.7), vec(id, 'wedge', 0.7));
    out.push([`Inversion: with the wedge toward the reader and the hash away, the three groups' handedness reads ${fmt(handed('r'))} in the reactant and ${fmt(handed('p'))} in the product, the opposite sign`, handed('r') * handed('p') < 0 && close(handed('r'), -handed('p'), 1e-9)]);
    const leanR = ['hash', 'wedge'].every((n) => vec('r', n, 0)[0] < 0), leanP = ['hash', 'wedge'].every((n) => vec('p', n, 0)[0] > 0);
    out.push(['The umbrella opens toward the incoming Nu in the reactant, and the other way in the product, where it opens away from Nu', leanR && leanP]);
    const NuR = labelsNamed(s, 'Nu:−')[0].rect, XR = labelsNamed(s, 'X')[0].rect;
    out.push(['Backside attack: Nu, C and X on one straight line, Nu opposite X', close(centre(NuR)[1], G.rC[1], 1e-6) && close(centre(XR)[1], G.rC[1], 1e-6) && centre(NuR)[0] < G.rC[0] && centre(XR)[0] > G.rC[0]]);
    const hs = [0, 1, 2].map((i) => azOf(...(lineOf(s, `t:H${i}`) as [P, P])));
    out.push([`Transition state: three solid C–H at ${hs.map((a) => fmt(a, 0)).join('°, ')}°, 120° apart, and two partial bonds (dashed), ${fmt(azOf(...(lineOf(s, 't:partial:Nu') as [P, P])), 0)}° and ${fmt(azOf(...(lineOf(s, 't:partial:X') as [P, P])), 0)}°: five-coordinate, Nu and X on the axis`, close(azGap(hs[0], hs[1]), 120, 1e-6) && close(azGap(hs[1], hs[2]), 120, 1e-6) && close(azGap(hs[0], hs[2]), 120, 1e-6) && close(azGap(azOf(...(lineOf(s, 't:partial:Nu') as [P, P])), azOf(...(lineOf(s, 't:partial:X') as [P, P]))), 180, 1e-6)]);
    const zone = (r: Rect) => (r[1] > 150 ? 'p' : r[0] > 180 ? 't' : 'r');
    const countIn = (t: string, z: string) => labelsNamed(s, t).filter((l) => zone(l.rect) === z).length;
    const rA: Tally = { C: countIn('C', 'r'), H: countIn('H', 'r'), X: countIn('X', 'r'), Nu: 1 }, tA: Tally = { C: countIn('C', 't'), H: countIn('H', 't'), X: countIn('X', 't'), Nu: countIn('Nu', 't') }, pA: Tally = { C: countIn('C', 'p'), H: countIn('H', 'p'), Nu: countIn('Nu', 'p'), X: labelsNamed(s, '+ X−').length };
    out.push([`Atoms counted off the drawing are the same across both arrows: C${tA.C} H${tA.H} Nu${tA.Nu} X${tA.X} (the product side needs its X⁻, printed here)`, same(rA, tA) && same(tA, pA) && same(rA, { C: 1, H: 3, Nu: 1, X: 1 })]);
    out.push(['Charge across both arrows: Nu⁻ + CH₃X = −1; δ− on Nu and δ− on X share the same −1, which the two δ− printed show; Nu–CH₃ + X⁻ = −1', labelsNamed(s, 'δ−').length === 2 && -1 + 0 === -1 && 0 + -1 === -1]);
    const onBond = pointToLine(tailOf(s, 'leave'), lineOf(s, 'r:CX'));
    out.push([`Curly arrows, read back: one from Nu's side to within ${fmt(rectDist(labelsNamed(s, 'C')[0].rect, tipOf(s, 'attack')), 1)} px of carbon; one from on the C–X bond (${fmt(onBond, 1)} px) to ${fmt(rectDist(XR, tipOf(s, 'leave')), 1)} px from X`, rectDist(NuR, tailOf(s, 'attack')) < 8 && rectDist(labelsNamed(s, 'C')[0].rect, tipOf(s, 'attack')) < 9 && onBond < 4 && rectDist(XR, tipOf(s, 'leave')) < 9]);
    const curveToHash = Math.min(...lineOf(s, 'attack').map((q) => pointToLine(q, lineOf(s, 'r:hash'))));
    out.push([`The attack arrow runs between the hash and the wedge, ${fmt(curveToHash, 1)} px from the hash at the closest, and touches neither`, curveToHash > 1]);
    out.push(['One step: two arrows either side of one transition state, no intermediate', namesOf(s, 'step:').length === 2 && labelsNamed(s, '‡').length === 1]);
    out.push(['The labels as printed: reactant, transition state, product (inverted), δ−, ‡, Nu, X, C, H', ['reactant', 'transition state', 'product (inverted)', 'δ−', '‡', 'Nu', 'X', 'C', 'H'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.2 · SN1 (Topic 02, p. 268)                                    */
/* ===================================================================== */
const CAP62 = 'S<sub>N</sub>1: slow ionisation to a planar carbocation, then nucleophile attack on either face to give a racemic pair.';
/** p. 268, path data: the book's curve, in its own units, y up. There is no energy scale on the axis. */
const CURVE62: P[] = [[63.73, 94.9], [64.83, 94.97], [65.94, 95.19], [67.04, 95.56], [68.15, 96.07], [69.25, 96.73], [70.35, 97.52], [72.56, 99.53], [74.77, 102.08], [76.97, 105.13], [79.18, 108.65], [81.38, 112.6], [83.59, 116.95], [86.9, 124.07], [90.21, 131.78], [95.73, 145.37], [102.35, 161.72], [105.65, 169.42], [108.96, 176.55], [111.17, 180.89], [113.38, 184.84], [115.58, 188.37], [117.79, 191.42], [120, 193.96], [122.2, 195.97], [123.31, 196.77], [124.41, 197.42], [125.51, 197.94], [126.61, 198.3], [127.72, 198.52], [128.82, 198.6], [130.83, 198.41], [132.83, 197.85], [134.84, 196.93], [136.84, 195.66], [138.85, 194.05], [140.86, 192.12], [142.86, 189.89], [144.87, 187.38], [147.88, 183.18], [150.88, 178.53], [154.9, 171.84], [165.93, 152.99], [168.94, 148.34], [171.95, 144.13], [173.95, 141.63], [175.96, 139.4], [177.96, 137.47], [179.97, 135.85], [181.98, 134.58], [183.98, 133.66], [185.99, 133.11], [187.99, 132.92], [190.85, 133.05], [193.71, 133.44], [196.57, 134.09], [199.43, 134.97], [202.29, 136.06], [206.1, 137.79], [209.91, 139.77], [216.58, 143.57], [223.25, 147.32], [227.06, 149.25], [230.87, 150.91], [233.73, 151.93], [236.58, 152.74], [239.44, 153.3], [242.3, 153.6], [244.21, 153.66], [246.51, 153.46], [248.82, 152.86], [251.13, 151.87], [253.43, 150.5], [255.74, 148.76], [258.05, 146.67], [260.35, 144.26], [262.66, 141.56], [264.97, 138.59], [268.43, 133.72], [271.89, 128.46], [277.65, 119.17], [284.57, 108], [288.03, 102.74], [291.5, 97.87], [293.8, 94.9], [296.11, 92.2], [298.42, 89.79], [300.72, 87.71], [303.03, 85.97], [305.34, 84.59], [307.64, 83.6], [309.95, 83], [312.26, 82.8]];
/** p. 268, path data: the levels of the book's four dashed guides. */
const BOOK62 = { RX: 94.9, TS1: 198.6, cat: 132.92, TS2: 153.66 };
const G62 = { x0: 92, kx: 0.87, y0: 36, ky: 1.35, axX: 28, axTop: 22, axBot: 322, axR: 336, ea1: 78, ea2: 288, inset: [160, 264] as P, RL: 26 };
const X62 = (b: number) => G62.x0 + (b - CURVE62[0][0]) * G62.kx, Y62 = (b: number) => G62.y0 + (BOOK62.TS1 - b) * G62.ky;
const fig62: Diagram = {
  id: 'c12-06-fig-6.2',
  topic: 1,
  name: 'The SN1 mechanism',
  cases: [{ chip: 'SN1', cap: CAP62 }],
  draw() {
    const s = new Sketch(W, 346), G = G62;
    path(s, [[G.axX, G.axTop], [G.axX, G.axBot], [G.axR, G.axBot]], { color: C.grey, w: 1.2, name: 'axes' });
    lab(s, 6, 14, 'energy', { anchor: 'start' });
    lab(s, (G.axX + G.axR) / 2, G.axBot + 17, 'reaction coordinate');
    const yR = Y62(BOOK62.RX), yT1 = Y62(BOOK62.TS1), yC = Y62(BOOK62.cat), yT2 = Y62(BOOK62.TS2);
    // the guides
    path(s, [[G.ea1 - 8, yR], [X62(CURVE62[0][0]), yR]], { color: C.grey, w: 1, dash: true, name: 'guide:RX' });
    path(s, [[G.ea1 - 8, yT1], [X62(128.82), yT1]], { color: C.grey, w: 1, dash: true, name: 'guide:TS1' });
    path(s, [[X62(187.99), yC], [G.ea2 + 4, yC]], { color: C.grey, w: 1, dash: true, name: 'guide:cat' });
    path(s, [[X62(244.21), yT2], [G.ea2 + 4, yT2]], { color: C.grey, w: 1, dash: true, name: 'guide:TS2' });
    // the curve, the book's
    path(s, CURVE62.map(([x, y]): P => [X62(x), Y62(y)]), { w: 2, name: 'curve' });
    // the two barriers
    both(s, [G.ea1, yT1 + 1], [G.ea1, yR - 1], { color: C.mari, w: 1.6, name: 'Ea1' });
    both(s, [G.ea2, yT2 + 1], [G.ea2, yC - 1], { color: C.slate, w: 1.3, name: 'Ea2' });
    lab(s, G.ea1 - 6, (yT1 + yR) / 2, '<i>E</i><sub>a</sub>(1)', { anchor: 'end', color: C.amber });
    lab(s, G.ea1 - 6, (yT1 + yR) / 2 + 17, 'large', { anchor: 'end', color: C.amber });
    lab(s, G.ea2 + 9, yT2 + 10, '<i>E</i><sub>a</sub>(2)', { anchor: 'start', color: C.slate, size: 12.5 });
    lab(s, G.ea2 + 9, yT2 + 27, 'small', { anchor: 'start', color: C.slate, size: 12.5 });
    lab(s, X62(128.82) + 1, yT1 - 9, 'TS1 (slow, RDS)', { color: C.amber });
    lab(s, X62(244.21), yT2 - 9, 'TS2 (fast)');
    lab(s, 190, yC + 19, 'R<sup>+</sup> carbocation', { size: 12.5 });
    lab(s, 190, yC + 35, '(trigonal planar, sp<sup>2</sup>)', { size: 12.5 });
    lab(s, X62(CURVE62[0][0]), yR + 18, 'R–X');
    lab(s, 298, Y62(82.8) + 18, 'products');
    lab(s, 298, Y62(82.8) + 34, '(racemic)');
    // the inset: the planar cation seen edge-on, so its two faces are above and below the plane
    const c = G.inset, rc = atom(s, c, 'C');
    lab(s, c[0] + 7, c[1] - 15, '+', { size: 11, anchor: 'start' });
    const q0 = az(c, 180, G.RL + 8), q1 = az(c, 340, G.RL + 12), q2 = az(c, 20, G.RL + 12);
    bond(s, c, rc, q0, atom(s, q0, 'R'), { name: 'in:R0', w: 1.5 });
    // A wedge or hash ends wide, so it stops 1 px further from its R than a plain bond does.
    const pad = ([x0, y0, x1, y1]: Rect): Rect => [x0 - 1, y0 - 1, x1 + 1, y1 + 1];
    wedge(s, c, rc, q1, pad(atom(s, q1, 'R')), 'in:R1');
    hash(s, c, rc, q2, pad(atom(s, q2, 'R')), 'in:R2');
    arrow(s, az(c, 90, 50), az(c, 90, 15), { color: C.slate, w: 1.5, name: 'face:top' });
    arrow(s, az(c, 270, 50), az(c, 270, 15), { color: C.slate, w: 1.5, name: 'face:bottom' });
    const lx = c[0] - 8;
    lab(s, lx, c[1] - 44, 'Nu:<sup>−</sup>', { anchor: 'end', size: 12.5 });
    lab(s, lx, c[1] - 28, 'top face', { anchor: 'end', size: 12 });
    lab(s, lx, c[1] + 34, 'bottom face', { anchor: 'end', size: 12 });
    lab(s, lx, c[1] + 49, '<sup>−</sup>:Nu', { anchor: 'end', size: 12.5 });
    lab(s, 208, c[1] - 6, 'equal attack on', { anchor: 'start', size: 12 });
    lab(s, 208, c[1] + 10, 'either face', { anchor: 'start', size: 12 });
    lab(s, 208, c[1] + 26, '→ 50:50 enantiomers', { anchor: 'start', size: 12 });
    return s;
  },
  check() {
    const s = fig62.draw(fig62.cases[0]), G = G62, out: Check[] = [];
    const pts = lineOf(s, 'curve'), back = pts.map(([x, y]): P => [(x - G.x0) / G.kx + CURVE62[0][0], BOOK62.TS1 - (y - G.y0) / G.ky]);
    out.push([`The curve is the book's: all ${pts.length} points read back to p. 268's path data, x and energy each to one scale throughout`, pts.length === CURVE62.length && back.every((b, i) => close(b[0], CURVE62[i][0], 1e-6) && close(b[1], CURVE62[i][1], 1e-6))]);
    const e = back.map((b) => b[1]), turning = e.flatMap((v, i) => (i === 0 || i === e.length - 1 ? [] : (v - e[i - 1]) * (e[i + 1] - v) < 0 ? [{ i, v, up: v > e[i - 1] }] : []));
    const start = e[0], endE = e[e.length - 1];
    out.push([`Read off the curve: start ${fmt(start, 1)}, a maximum at ${fmt(turning[0].v, 1)}, a minimum at ${fmt(turning[1].v, 1)}, a maximum at ${fmt(turning[2].v, 1)}, end ${fmt(endE, 1)}: two transition states with one intermediate between them, which is two steps`, turning.length === 3 && turning[0].up && !turning[1].up && turning[2].up]);
    out.push(["Each of the book's four dashed guides stands on what it marks: R–X, TS1, the carbocation, TS2", close(turning[0].v, BOOK62.TS1, 0.01) && close(turning[1].v, BOOK62.cat, 0.01) && close(turning[2].v, BOOK62.TS2, 0.01) && close(start, BOOK62.RX, 0.01) && close(lineOf(s, 'guide:TS1')[0][1], Y62(turning[0].v), 0.02) && close(lineOf(s, 'guide:RX')[0][1], Y62(start), 0.02) && close(lineOf(s, 'guide:cat')[0][1], Y62(turning[1].v), 0.02) && close(lineOf(s, 'guide:TS2')[0][1], Y62(turning[2].v), 0.02)]);
    const a1 = lineOf(s, 'Ea1'), a2 = lineOf(s, 'Ea2'), E1 = turning[0].v - start, E2 = turning[2].v - turning[1].v;
    out.push([`The barriers: Ea(1) runs R–X to TS1 and Ea(2) carbocation to TS2, each 1 px short of its guides; in the book's units ${fmt(E1, 1)} against ${fmt(E2, 1)}, ${fmt(E1 / E2, 1)} times the size, so step 1 is the slow, rate-determining one, as printed ("large", "small")`, close(a1[0][1], Y62(turning[0].v) + 1, 0.02) && close(a1[1][1], Y62(start) - 1, 0.02) && close(a2[0][1], Y62(turning[2].v) + 1, 0.02) && close(a2[1][1], Y62(turning[1].v) - 1, 0.02) && E1 > E2]);
    out.push(['The carbocation sits above R–X and below both transition states: a real intermediate, in a well', turning[1].v > start && turning[1].v < turning[2].v && turning[1].v < turning[0].v]);
    const Rs = [0, 1, 2].map((i) => azOf(G.inset, lineOf(s, `in:R${i}`)[1]));
    out.push([`The cation, read back: seen edge-on, one C–R in the page at ${fmt(Rs[0], 0)}°, a wedge at ${fmt(Rs[1], 0)}° and a hash at ${fmt(Rs[2], 0)}°, the two level with each other about the plane's line: three σ bonds, planar, sp², charge +1 (4 − 0 − 3)`, close(Rs[0], 180, 1e-6) && close(azGap(Rs[1], 0), azGap(Rs[2], 0), 1e-6) && 4 - 0 - 3 === 1 && hasLabel(s, '+')]);
    const t = lineOf(s, 'face:top'), b = lineOf(s, 'face:bottom'), c = G.inset;
    const mirror = t.every((p, i) => close(p[0], b[i][0], 1e-9) && close(p[1] - c[1], c[1] - b[i][1], 1e-9));
    out.push([`The two attacks are mirror images in the plane through the carbon, ${fmt(len(t[0], t[1]), 1)} px each, both aimed at it: equal in every way the drawing can show`, mirror && close(azGap(azOf(t[0], t[1]), azOf(t[0], c)), 0, 1e-6) && close(azGap(azOf(b[0], b[1]), azOf(b[0], c)), 0, 1e-6)]);
    out.push(['Each attack comes square to the plane of the three R groups, from above and from below, never along it', close(t[0][0], c[0], 1e-6) && close(t[1][0], c[0], 1e-6) && t[0][1] < c[1] && b[0][1] > c[1]]);
    const off = Math.min(...[0, 1, 2].flatMap((i) => ['face:top', 'face:bottom'].map((n) => Math.min(...lineOf(s, n).map((q) => pointToLine(q, lineOf(s, `in:R${i}`)))))));
    out.push([`Neither attack lands on an R: ${fmt(off, 1)} px between arrow and bond at the closest`, off > 4]);
    out.push(['Both faces, so both enantiomers: a 50:50 pair, ee = |50 − 50| = 0, which is racemic', Math.abs(50 - 50) === 0 && hasLabel(s, '→ 50:50 enantiomers') && hasLabel(s, '(racemic)')]);
    out.push(['The labels as printed: energy, reaction coordinate, R–X, TS1 (slow, RDS), TS2 (fast), R⁺ carbocation, (trigonal planar, sp²), Ea(1), large, Ea(2), small, products, (racemic), top face, bottom face, Nu:⁻, ⁻:Nu, equal attack on either face', ['energy', 'reaction coordinate', 'R–X', 'TS1 (slow, RDS)', 'TS2 (fast)', 'R+ carbocation', '(trigonal planar, sp2)', 'Ea(1)', 'large', 'Ea(2)', 'small', 'products', '(racemic)', 'top face', 'bottom face', 'Nu:−', '−:Nu', 'equal attack on', 'either face'].every((x) => hasLabel(s, x))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.3 · E2 (Topic 02, p. 270)                                     */
/* ===================================================================== */
const CAP63 = 'E2 elimination: alcoholic KOH removes a β-H as the C–X bond breaks, forming the alkene in one concerted step.';
/** The in-page pair is anti: H at 110°, X at 110° + 180°. The two others on each carbon are the usual wedge and hash, schematic angles. */
const G63 = { B: [70, 122] as P, A: [116, 122] as P, L: 40, Ls: 36, aH: 110, aHash: 185, aWedge: 245, C1: [246, 122] as P, C2: [284, 122] as P, LA: 28 };
const fig63: Diagram = {
  id: 'c12-06-fig-6.3',
  topic: 1,
  name: 'E2 elimination',
  cases: [{ chip: 'E2', cap: CAP63 }],
  draw() {
    const s = new Sketch(W, 208), G = G63;
    const rB = atom(s, G.B, 'C'), rA = atom(s, G.A, 'C');
    bond(s, G.B, rB, G.A, rA, { name: 'CC' });
    // the β carbon: the H that goes (in the page), and two more
    const Hb = az(G.B, G.aH, G.L), rHb = atom(s, Hb, 'H');
    bond(s, G.B, rB, Hb, rHb, { name: 'beta:H' });
    const bh = az(G.B, G.aHash, G.Ls), bw = az(G.B, G.aWedge, G.Ls);
    hash(s, G.B, rB, bh, atom(s, bh, 'H'), 'beta:hash');
    wedge(s, G.B, rB, bw, atom(s, bw, 'H'), 'beta:wedge');
    // the α carbon: X anti to that H, and two more, the same turned half way round
    const Xp = az(G.A, G.aH + 180, G.L), rX = atom(s, Xp, 'X');
    bond(s, G.A, rA, Xp, rX, { name: 'alpha:X' });
    const ah = az(G.A, G.aHash + 180, G.Ls), aw = az(G.A, G.aWedge + 180, G.Ls);
    hash(s, G.A, rA, ah, atom(s, ah, 'H'), 'alpha:hash');
    wedge(s, G.A, rA, aw, atom(s, aw, 'H'), 'alpha:wedge');
    lab(s, G.B[0] + 11, G.B[1] + 22, 'β', { size: 14 });
    lab(s, G.A[0] - 9, G.A[1] + 22, 'α', { size: 14 });
    // the base
    const OH: P = [26, 20];
    atom(s, OH, 'OH<sup>−</sup>');
    lab(s, 36, 40, '(alc. KOH)', { size: 12, color: C.slate });
    curly(s, [44, 16], [80, 12], [86, 46], [Hb[0] + 4, Hb[1] - 10.5], { name: 'base' });
    // the three arrows of one step
    const mH = mid(...(lineOf(s, 'beta:H') as [P, P])), mCC = mid(...(lineOf(s, 'CC') as [P, P])), mX = mid(...(lineOf(s, 'alpha:X') as [P, P]));
    curly(s, mH, [mH[0] + 12, mH[1] - 13], [mCC[0] - 5, mCC[1] - 26], [mCC[0], mCC[1] - 3.5], { name: 'pi' });
    curly(s, mX, [mX[0] + 14, mX[1] - 4], [Xp[0] + 26, Xp[1] - 10], [Xp[0] + 10.5, Xp[1] - 1], { name: 'leave' });
    // the alkene
    arrow(s, [170, G.A[1]], [208, G.A[1]], { w: 1.8, name: 'step' });
    lab(s, 189, G.A[1] + 18, 'heat', { size: 12.5 });
    const r1C = atom(s, G.C1, 'C'), r2C = atom(s, G.C2, 'C');
    bond(s, G.C1, r1C, G.C2, r2C, { order: 2, name: 'CdC' });
    [120, 240].forEach((d, i) => { const q = az(G.C1, d, G.LA); bond(s, G.C1, r1C, q, atom(s, q, 'H'), { name: `ene:a${i}` }); });
    [60, 300].forEach((d, i) => { const q = az(G.C2, d, G.LA); bond(s, G.C2, r2C, q, atom(s, q, 'H'), { name: `ene:b${i}` }); });
    lab(s, (G.C1[0] + G.C2[0]) / 2, 178, '+ X<sup>−</sup> + H<sub>2</sub>O', { size: 14 });
    lab(s, W / 2 - 4, 200, 'concerted: C–H and C–X break as the C=C forms', { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig63.draw(fig63.cases[0]), G = G63, out: Check[] = [];
    const dirOf = (n: string) => azOf(...(lineOf(s, n) as [P, P]));
    const H3: number[] = [...az([0, 0], dirOf('beta:H'), 1), 0], X3: number[] = [...az([0, 0], dirOf('alpha:X'), 1), 0];
    // dihedral H–Cβ–Cα–X with every atom in the page
    const b1 = [G.B[0] - (G.B[0] + H3[0]), G.B[1] - (G.B[1] + H3[1]), 0], b2 = [G.A[0] - G.B[0], G.A[1] - G.B[1], 0], b3 = [X3[0], X3[1], 0];
    const cross = (a: number[], b: number[]) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    const dot = (a: number[], b: number[]) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    const n1 = cross(b1, b2), n2 = cross(b2, b3), dih = Math.abs((Math.atan2(dot(cross(n1, n2), b2) / Math.hypot(...b2), dot(n1, n2)) * 180) / Math.PI);
    out.push([`Anti-periplanar, as Additional topic B says E2 demands: β-H and C–X both in the page, read back at ${fmt(dirOf('beta:H'), 0)}° and ${fmt(dirOf('alpha:X'), 0)}°, antiparallel; H–C–C–X dihedral ${fmt(dih, 0)}°`, close(azGap(dirOf('beta:H'), dirOf('alpha:X')), 180, 1e-6) && close(dih, 180, 1e-6)]);
    const bonds = (p: string) => namesOf(s, p).filter((n) => !n.includes(':head')).length;
    out.push(['Each carbon read back has four bonds: the C–C, the β carbon three C–H (one in the page, one wedge, one hash), the α carbon C–X and two C–H', bonds('beta:') === 3 && bonds('alpha:') === 3 && namesOf(s, 'CC').length === 1]);
    const rc = (name: string) => namesOf(s, name).length;
    const H = labelsNamed(s, 'H'), Xr = labelsNamed(s, 'X')[0].rect, left = H.filter((l) => l.rect[0] < 170).length, right = H.filter((l) => l.rect[0] > 208).length;
    out.push([`Atoms counted off the drawing: C₂H${left}X + OH⁻ on the left; C₂H${right} + X⁻ + H₂O on the right: C 2 = 2, H ${left} + 1 = ${right} + 2, O 1 = 1, X 1 = 1`, left === 5 && right === 4 && left + 1 === right + 2 && labelsNamed(s, 'C').length === 4 && hasLabel(s, '+ X− + H2O')]);
    out.push(['Charge: OH⁻ gives −1 on the left; X⁻ gives −1 on the right', -1 === -1 && hasLabel(s, 'OH−')]);
    const angs = ['ene:a0', 'ene:a1'].map(dirOf), angB = ['ene:b0', 'ene:b1'].map(dirOf);
    out.push([`The alkene is sp²: C=C two lines, each C–H read back at ${angs.map((a) => fmt(a, 0)).join('°, ')}° and ${angB.map((a) => fmt(a, 0)).join('°, ')}°: 120° at each carbon, four C–H`, rc('CdC') === 2 && close(azGap(angs[0], angs[1]), 120, 1e-6) && close(azGap(angB[0], angB[1]), 120, 1e-6) && close(azGap(angs[0], 0), 120, 1e-6) && close(azGap(angB[0], 180), 120, 1e-6)]);
    const Hb = az(G.B, G.aH, G.L), HbR = H.find((l) => close(centre(l.rect)[0], Hb[0], 1e-6))!.rect;
    const OHr = labelsNamed(s, 'OH−')[0].rect;
    out.push([`Curly arrows, read back: OH⁻ (${fmt(rectDist(OHr, tailOf(s, 'base')), 1)} px) to the β-H (${fmt(rectDist(HbR, tipOf(s, 'base')), 1)} px); from on that C–H bond (${fmt(pointToLine(tailOf(s, 'pi'), lineOf(s, 'beta:H')), 1)} px) to the C–C (${fmt(pointToLine(tipOf(s, 'pi'), lineOf(s, 'CC')), 1)} px); from on the C–X bond (${fmt(pointToLine(tailOf(s, 'leave'), lineOf(s, 'alpha:X')), 1)} px) to X (${fmt(rectDist(Xr, tipOf(s, 'leave')), 1)} px)`, rectDist(OHr, tailOf(s, 'base')) < 8 && rectDist(HbR, tipOf(s, 'base')) < 9 && pointToLine(tailOf(s, 'pi'), lineOf(s, 'beta:H')) < 1 && pointToLine(tipOf(s, 'pi'), lineOf(s, 'CC')) < 5 && pointToLine(tailOf(s, 'leave'), lineOf(s, 'alpha:X')) < 1 && rectDist(Xr, tipOf(s, 'leave')) < 9]);
    const ba = labelsNamed(s, 'β')[0].rect, al = labelsNamed(s, 'α')[0].rect;
    out.push(['β stands by the carbon losing the H, α by the carbon losing X, each nearer its own', len(centre(ba), G.B) < len(centre(ba), G.A) && len(centre(al), G.A) < len(centre(al), G.B)]);
    out.push(['One concerted step: one reaction arrow, no intermediate; three curly arrows in that step', rc('step') === 1 && ['base', 'pi', 'leave'].every((n) => rc(n) >= 1)]);
    out.push(['The labels as printed: OH⁻, (alc. KOH), β, α, heat, + X⁻ + H₂O, and the concerted line', ['OH−', '(alc. KOH)', 'β', 'α', 'heat', '+ X− + H2O', 'concerted: C–H and C–X break as the C=C forms'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.4 · addition–elimination on p-nitrochlorobenzene (p. 270)     */
/* ===================================================================== */
const CAP64 = 'Nucleophilic aromatic substitution on p-nitrochlorobenzene: slow addition to a resonance-stabilised carbanion, then fast loss of Cl<sup>−</sup>.';
const G64 = { r: 26, sub: 24, a: [66, 76] as P, b: [205, 76] as P, c: [66, 256] as P, gapHalf: 50, arc: 0.58, circle: 0.6 };
/** The open arc over the five sp² carbons: the gap faces the sp³ carbon. */
const arc64 = (n = 56): P[] => Array.from({ length: n + 1 }, (_, i): P => {
  const d = 90 - G64.gapHalf - ((360 - 2 * G64.gapHalf) * i) / n;
  return az(G64.b, d, G64.r * G64.arc);
});
const fig64: Diagram = {
  id: 'c12-06-fig-6.4',
  topic: 1,
  name: 'Nucleophilic aromatic substitution',
  cases: [{ chip: 'p-nitrochlorobenzene', cap: CAP64 }],
  draw() {
    const s = new Sketch(W, 342), G = G64;
    const nitro = (c: P, id: string) => {
      const v = hexPt(c, G.r, 3), q: P = [v[0], v[1] + G.sub];
      bond(s, v, null, q, atom(s, q, 'NO<sub>2</sub>'), { name: `${id}:NO2` });
    };
    // p-nitrochlorobenzene
    ring(s, G.a, G.r, 'a', G.circle);
    const va = hexPt(G.a, G.r, 0), qa: P = [va[0], va[1] - G.sub];
    bond(s, va, null, qa, atom(s, qa, 'Cl'), { name: 'a:Cl' });
    nitro(G.a, 'a');
    lab(s, 66, 170, 'p-nitrochlorobenzene', { size: 12.5, color: C.slate });
    // addition
    arrow(s, [102, 76], [166, 76], { w: 1.8, name: 'step:1' });
    lab(s, 134, 50, 'OH<sup>−</sup>, slow', { size: 12.5 });
    lab(s, 134, 66, '(addition)', { size: 12.5 });
    // the intermediate
    ring(s, G.b, G.r, 'b');
    path(s, arc64(), { color: C.mari, w: 1.8, name: 'arc' });
    lab(s, G.b[0], G.b[1] + 4.5, '−', { size: 15, color: C.amber });
    const vb = hexPt(G.b, G.r, 0), qOH = az(vb, 130, 27), qCl = az(vb, 50, 27);
    bond(s, vb, null, qOH, atom(s, qOH, 'OH'), { name: 'b:OH' });
    bond(s, vb, null, qCl, atom(s, qCl, 'Cl'), { name: 'b:Cl' });
    const vb3 = hexPt(G.b, G.r, 3), N: P = [vb3[0], vb3[1] + 23], rN = atom(s, N, 'N');
    bond(s, vb3, null, N, rN, { name: 'b:CN' });
    lab(s, N[0] + 8, N[1] - 7, '+', { size: 11, anchor: 'start' });
    const Om = az(N, 215, 36), Od = az(N, 325, 36), rOm = atom(s, Om, 'O'), rOd = atom(s, Od, 'O');
    bond(s, N, rN, Om, rOm, { name: 'b:NO' });
    bond(s, N, rN, Od, rOd, { order: 2, name: 'b:N=O' });
    lab(s, Om[0] - 7.5, Om[1] - 5, '−', { size: 11, anchor: 'end' });
    // the charge reaching the nitro oxygen
    const e23 = mid(hexPt(G.b, G.r, 2), vb3), mNO = mid(lineOf(s, 'b:N=O:1')[0], lineOf(s, 'b:N=O:1')[1]);
    curly(s, e23, [e23[0] + 17, e23[1] + 3], [mNO[0] + 19, mNO[1] - 15], [mNO[0] + 6, mNO[1] - 3], { name: 'charge' });
    lab(s, 243, 94, 'charge', { size: 12, anchor: 'start', color: C.amber });
    lab(s, 243, 110, 'delocalised onto', { size: 12, anchor: 'start', color: C.amber });
    lab(s, 243, 126, 'NO<sub>2</sub> oxygen', { size: 12, anchor: 'start', color: C.amber });
    lab(s, G.b[0], 170, 'Meisenheimer complex', { size: 12.5, color: C.slate });
    // loss of chloride
    arrow(s, [176, 180], [104, 232], { w: 1.8, name: 'step:2' });
    lab(s, 160, 212, 'fast, −Cl<sup>−</sup>', { size: 12.5, anchor: 'start' });
    lab(s, 160, 228, '(elimination)', { size: 12.5, anchor: 'start' });
    // p-nitrophenol
    ring(s, G.c, G.r, 'c', G.circle);
    const vc = hexPt(G.c, G.r, 0), qc: P = [vc[0], vc[1] - G.sub];
    bond(s, vc, null, qc, atom(s, qc, 'OH'), { name: 'c:OH' });
    nitro(G.c, 'c');
    lab(s, 66, 332, 'p-nitrophenol', { size: 12.5, color: C.slate });
    // Not in the book: under OH⁻ the product stays the anion until acid is added.
    lab(s, 112, 254, 'in NaOH it stays', { size: 12.5, color: C.slate, anchor: 'start' });
    lab(s, 112, 270, 'the phenoxide', { size: 12.5, color: C.slate, anchor: 'start' });
    lab(s, 112, 286, 'until acidified', { size: 12.5, color: C.slate, anchor: 'start' });
    return s;
  },
  check() {
    const s = fig64.draw(fig64.cases[0]), G = G64, out: Check[] = [];
    const at = (id: string, c: P, n: string) => vertexOf(c, G.r, lineOf(s, `${id}:${n}`)[0]);
    out.push(['Every ring is a regular hexagon', regular(G.a, G.r) && regular(G.b, G.r) && regular(G.c, G.r)]);
    out.push([`Para, read back: Cl on vertex ${at('a', G.a, 'Cl')} and NO₂ on vertex ${at('a', G.a, 'NO2')} in the reactant; OH on ${at('c', G.c, 'OH')} and NO₂ on ${at('c', G.c, 'NO2')} in the product: three apart, the nitro para to the halogen as the text needs; the OH takes chlorine's carbon`, at('a', G.a, 'Cl') === 0 && at('a', G.a, 'NO2') === 3 && at('c', G.c, 'OH') === 0 && at('c', G.c, 'NO2') === 3]);
    out.push([`Intermediate, read back: OH and Cl both on vertex ${at('b', G.b, 'OH')}, the carbon that held Cl: four σ bonds there (two ring, OH, Cl), so sp³; nitrogen on vertex ${at('b', G.b, 'CN')}, para`, at('b', G.b, 'OH') === 0 && at('b', G.b, 'Cl') === 0 && at('b', G.b, 'CN') === 3 && 2 + 1 + 1 === 4]);
    const arc = lineOf(s, 'arc'), dirs = arc.map((q) => azOf(G.b, q)), vDir = (k: number) => azOf(G.b, hexPt(G.b, G.r, k));
    const covered = [1, 2, 3, 4, 5].every((k) => dirs.some((d) => azGap(d, vDir(k)) < 4)), open = dirs.every((d) => azGap(d, vDir(0)) >= G.gapHalf - 1e-6);
    out.push([`The arc, read back, reaches toward each of the five sp² carbons and leaves ${fmt(2 * G.gapHalf, 0)}° open at the sp³ one: five carbons share the charge, the ring is not aromatic here (the text: loss of Cl⁻ "restores aromaticity"), while the reactant's and product's circles close`, covered && open && !namesOf(s, 'b:circle').length && namesOf(s, 'a:circle').length === 1 && namesOf(s, 'c:circle').length === 1]);
    const vN = 5 - 0 - (1 + 1 + 2), vOm = 6 - 6 - 1, vOd = 6 - 4 - 2;
    out.push([`Formal charges in the expanded nitro group: N 5 − 0 − 4 = +${vN}, O⁻ 6 − 6 − 1 = ${fmt(vOm, 0)}, =O 6 − 4 − 2 = ${vOd}; with the ring's −1 the intermediate is ${fmt(vN + vOm + vOd - 1, 0)} overall`, vN === 1 && vOm === -1 && vOd === 0 && vN + vOm + vOd - 1 === -1 && labelsNamed(s, '+').length === 1 && labelsNamed(s, '−').length === 2 && namesOf(s, 'b:N=O').length === 2]);
    const vacant = (taken: number[]) => [0, 1, 2, 3, 4, 5].filter((k) => !taken.includes(k)).length;
    const left: Tally = { C: 6, H: vacant([at('a', G.a, 'Cl'), at('a', G.a, 'NO2')]), Cl: 1, N: 1, O: 2 }, hydroxide: Tally = { O: 1, H: 1 };
    const inter: Tally = { C: 6, H: vacant([0, 3]) + 1, Cl: 1, N: 1, O: 3 };
    const prod: Tally = { C: 6, H: vacant([at('c', G.c, 'OH'), at('c', G.c, 'NO2')]) + 1, N: 1, O: 3 }, chloride: Tally = { Cl: 1 };
    out.push([`Atoms read off the rings: C₆H₄ClNO₂ + OH⁻ = C₆H₅ClNO₃⁻ (the intermediate) = C₆H₅NO₃ + Cl⁻: balanced across both arrows; charge −1 at every stage`, same(sum(left, hydroxide), inter) && same(inter, sum(prod, chloride)) && left.H === 4 && prod.H === 5]);
    const NR = labelsNamed(s, 'N')[0].rect, tip = tipOf(s, 'charge'), tail = tailOf(s, 'charge');
    out.push([`The delocalisation arrow, read back, starts on the ring (${fmt(pointToLine(tail, lineOf(s, 'b:ring')), 1)} px) and ends at the N=O (${fmt(pointToLine(tip, lineOf(s, 'b:N=O:1')), 1)} px)`, pointToLine(tail, lineOf(s, 'b:ring')) < 1 && pointToLine(tip, lineOf(s, 'b:N=O:1')) < 8 && rectDist(NR, tip) > 4]);
    const arrowGap = lineOf(s, 'step:1');
    out.push(['Two arrows in the printed order: addition first (slow, OH⁻ on it), elimination second (fast, −Cl⁻ on it)', close(arrowGap[0][1], arrowGap[1][1]) && hasLabel(s, 'OH−, slow') && hasLabel(s, '(addition)') && hasLabel(s, 'fast, −Cl−') && hasLabel(s, '(elimination)') && namesOf(s, 'step:').length === 2]);
    out.push(['The labels as printed: p-nitrochlorobenzene, Meisenheimer complex, p-nitrophenol, Cl, NO₂, OH, N, O, and the note on the charge (on three lines); plus our note that the product stays the phenoxide in NaOH until acidified', ['p-nitrochlorobenzene', 'Meisenheimer complex', 'p-nitrophenol', 'Cl', 'NO2', 'OH', 'N', 'O', 'charge', 'delocalised onto', 'NO2 oxygen', 'in NaOH it stays', 'the phenoxide', 'until acidified'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.5 · the iodoform test (Topic 03, p. 280)                      */
/* ===================================================================== */
const CAP65 = 'The iodoform test: CH<sub>3</sub>CO–R and CH<sub>3</sub>CH(OH)–R compounds, with R = H, alkyl or aryl, give a yellow CHI<sub>3</sub> precipitate; methanol and propan-1-ol do not.';
type Carbinol = { name: string; onCarbinol: string[] };
/** What each named alcohol's C–OH carbon carries besides OH: a CH₃ and at least one H make the fragment CH₃CH(OH)–. */
const ALCOHOLS: Carbinol[] = [
  { name: 'ethanol', onCarbinol: ['CH3', 'H', 'H'] },
  { name: 'propan-2-ol', onCarbinol: ['CH3', 'CH3', 'H'] },
  { name: 'methanol', onCarbinol: ['H', 'H', 'H'] },
  { name: 'propan-1-ol', onCarbinol: ['CH2CH3', 'H', 'H'] },
];
const hasFragment = (a: Carbinol) => a.onCarbinol.includes('CH3') && a.onCarbinol.includes('H');
const fig65: Diagram = {
  id: 'c12-06-fig-6.5',
  topic: 2,
  name: 'The iodoform test',
  cases: [{ chip: 'I₂ / NaOH', cap: CAP65 }],
  draw() {
    const s = new Sketch(W, 278);
    box(s, 'root', [100, 4, 240, 48], [{ html: 'I<sub>2</sub> / NaOH', size: 13 }, { html: '(iodoform test)', size: 13 }], { edge: C.ink, w: 1.6 });
    box(s, 'yes', [4, 68, 196, 164], [{ html: 'diagnostic fragment present:' }, { html: 'CH<sub>3</sub>CO–R methyl ketone' }, { html: 'CH<sub>3</sub>CH(OH)–R' }, { html: 'ethanol, propan-2-ol' }, { html: 'R = H, alkyl or aryl' }]);
    box(s, 'no', [206, 82, 336, 150], [{ html: 'methanol CH<sub>3</sub>OH' }, { html: 'propan-1-ol' }, { html: 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH' }]);
    box(s, 'POSITIVE', [30, 200, 170, 244], [{ html: 'yellow CHI<sub>3</sub> ppt', size: 13, color: C.amber }, { html: 'POSITIVE', size: 13, color: C.amber }], { edge: C.mari, w: 1.8 });
    box(s, 'NEGATIVE', [206, 200, 336, 244], [{ html: 'no yellow ppt', size: 13, color: C.slate }, { html: 'NEGATIVE', size: 13, color: C.slate }]);
    edge(s, [[140, 48], [100, 68]]);
    edge(s, [[200, 48], [271, 82]]);
    edge(s, [[100, 164], [100, 200]]);
    edge(s, [[271, 150], [271, 200]]);
    return s;
  },
  check() {
    const s = fig65.draw(fig65.cases[0]), out: Check[] = [], tree = treeOf(s);
    const read = tree.map(([a, b]) => `${a} → ${b}`).sort();
    out.push([`The tree, read back from where each line ends: ${read.join('; ')}`, read.join() === ['no → NEGATIVE', 'root → no', 'root → yes', 'yes → POSITIVE'].join()]);
    const text = (id: string) => BOXES.get(s)!.find((b) => b.id === id)!.lines.map((l) => plain(l.html)).join(' ');
    const named = (id: string, a: Carbinol) => new RegExp(`(^|[ ,])${a.name}($|[ ,])`).test(text(id)), inYes = (a: Carbinol) => named('yes', a), inNo = (a: Carbinol) => named('no', a);
    out.push([`Each alcohol's own C–OH carbon decides its branch: ${ALCOHOLS.map((a) => `${a.name} ${hasFragment(a) ? 'has CH₃ and H there, so left' : 'lacks the CH₃, so right'}`).join('; ')}`, ALCOHOLS.every((a) => (hasFragment(a) ? inYes(a) && !inNo(a) : inNo(a) && !inYes(a)))]);
    out.push(['A methyl ketone CH₃CO–R carries the CH₃–C=O the test acts on, and sits on the left', text('yes').includes('CH3CO–R methyl ketone')]);
    const I = 3 * 2, H = 3 + 4, Na = 4, O = 1 + 4;
    out.push(['The positive result balances: CH₃CO–R + 3I₂ + 4NaOH → CHI₃ + RCOONa + 3NaI + 3H₂O: I 6 = 3 + 3, Na 4 = 1 + 3, O 5 = 2 + 3, H 7 = 1 + 6, C 2 + R = 1 + 1 + R', I === 3 + 3 && Na === 1 + 3 && O === 2 + 3 && H === 1 + 6]);
    out.push(['The result boxes as printed: yellow CHI₃ ppt, POSITIVE; no yellow ppt, NEGATIVE. One highlight, the positive', text('POSITIVE') === 'yellow CHI3 ppt POSITIVE' && text('NEGATIVE') === 'no yellow ppt NEGATIVE']);
    out.push(...treeClear(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.6 · the benzyne mechanism (Topic 04, p. 290)                  */
/* ===================================================================== */
const CAP66 = 'The benzyne mechanism: chlorobenzene loses HCl to give benzyne (NH<sub>2</sub><sup>−</sup> takes the H as NH<sub>3</sub>, and Cl<sup>−</sup> leaves). NH<sub>2</sub><sup>−</sup> then adds to either benzyne carbon, and the anion takes H<sup>+</sup> from NH<sub>3</sub>: on the carbon that bore Cl, normal addition; on its neighbour, cine substitution. <sup>14</sup>C marks the carbon that bore Cl.';
const G66 = { r: 26, sub: 24, a: [70, 112] as P, b: [262, 112] as P, n: [80, 280] as P, c: [262, 280] as P, circle: 0.6, inner: 0.36 };
const NH2 = 'NH<sub>2</sub>', NH2M = 'NH<sub>2</sub><sup>−</sup>', C14 = '<sup>14</sup>C';
/** The two extra lines of the benzyne bond: parallel to the ring edge from vertex 0 to vertex 1, inside it. */
function benzyneLines(c: P, r: number) {
  const v0 = hexPt(c, r, 0), v1 = hexPt(c, r, 1), m = mid(v0, v1), L = len(c, m), n: P = [(c[0] - m[0]) / L, (c[1] - m[1]) / L];
  return [4.4, 8.6].map((d): [P, P] => {
    const t = 0.08 + d * 0.012;
    return [[v0[0] + (v1[0] - v0[0]) * t + n[0] * d, v0[1] + (v1[1] - v0[1]) * t + n[1] * d], [v1[0] - (v1[0] - v0[0]) * t + n[0] * d, v1[1] - (v1[1] - v0[1]) * t + n[1] * d]];
  });
}
const fig66: Diagram = {
  id: 'c12-06-fig-6.6',
  topic: 3,
  name: 'The benzyne mechanism',
  cases: [{ chip: 'Chlorobenzene + NaNH₂', cap: CAP66 }],
  draw() {
    const s = new Sketch(W, 338), G = G66;
    // chlorobenzene, with the C–H next to the C–Cl
    ring(s, G.a, G.r, 'a', G.circle);
    const a0 = hexPt(G.a, G.r, 0), a1 = hexPt(G.a, G.r, 1), qCl: P = [a0[0], a0[1] - G.sub], qH = az(a1, 30, G.sub);
    const rCl = atom(s, qCl, 'Cl'), rH = atom(s, qH, 'H');
    bond(s, a0, null, qCl, rCl, { name: 'a:Cl' });
    bond(s, a1, null, qH, rH, { name: 'a:H' });
    const qBase: P = [134, 46], rBase = atom(s, qBase, NH2M);
    const mCl = mid(...(lineOf(s, 'a:Cl') as [P, P])), mCH = mid(...(lineOf(s, 'a:H') as [P, P])), mE = mid(a0, a1);
    curly(s, [qBase[0] - 4, rBase[3] + 4.5], [qBase[0] - 4, rBase[3] + 13], [qH[0] + 8, rH[1] - 12], [qH[0] + 3, rH[1] - 4.6], { color: C.slate, name: 'base' });
    curly(s, mCH, [mCH[0] - 1, mCH[1] - 11], [mE[0] + 5, mE[1] - 13], [mE[0] + 0.5, mE[1] - 2], { color: C.slate, name: 'pi' });
    curly(s, mCl, [mCl[0] - 15, mCl[1] + 1], [rCl[0] - 18, rCl[1] + 6], [rCl[0] - 4.6, qCl[1] - 1], { color: C.slate, name: 'leave' });
    mtag(s, 4, 62, C14, a0);
    lab(s, G.a[0], 162, 'chlorobenzene', { size: 12.5, color: C.slate });
    // the first step
    arrow(s, [132, 112], [206, 112], { w: 1.8, name: 'step:1' });
    lab(s, 169, 130, 'NaNH<sub>2</sub> / liq. NH<sub>3</sub>', { size: 12.5 });
    lab(s, 169, 147, '−HCl', { size: 12.5 });
    // benzyne
    ring(s, G.b, G.r, 'b', G.inner);
    benzyneLines(G.b, G.r).forEach((l, i) => path(s, l, { color: C.mari, w: 1.8, name: `b:triple:${i}` }));
    const b0 = hexPt(G.b, G.r, 0), b1 = hexPt(G.b, G.r, 1);
    mtag(s, 196, 66, C14, b0);
    mtag(s, W - 4, 30, 'strained ‘triple bond’', mid(b0, b1), { hi: true, anchor: 'end', size: 12.5 });
    lab(s, G.b[0], 162, 'benzyne', { size: 12.5, color: C.slate });
    // the two ways NH₂⁻ adds
    arrow(s, [240, 172], [128, 226], { w: 1.6, name: 'step:normal' });
    arrow(s, [262, 172], [262, 232], { w: 1.6, name: 'step:cine' });
    lab(s, 160, 188, NH2M, { size: 13 });
    lab(s, 272, 204, NH2M, { size: 13, anchor: 'start' });
    // normal addition: NH₂ on the labelled carbon
    ring(s, G.n, G.r, 'n', G.circle);
    const n0 = hexPt(G.n, G.r, 0), qN: P = [n0[0], n0[1] - G.sub];
    bond(s, n0, null, qN, atom(s, qN, NH2), { name: 'n:NH2' });
    mtag(s, 8, 232, C14, n0);
    lab(s, G.n[0], 328, 'normal addition', { size: 12.5, color: C.slate });
    // cine substitution: NH₂ on its neighbour
    ring(s, G.c, G.r, 'c', G.circle);
    const c0 = hexPt(G.c, G.r, 0), c1 = hexPt(G.c, G.r, 1), qC = az(c1, 30, G.sub);
    bond(s, c1, null, qC, atom(s, qC, NH2), { name: 'c:NH2' });
    mtag(s, 190, 232, C14, c0);
    lab(s, G.c[0], 328, 'cine substitution', { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig66.draw(fig66.cases[0]), G = G66, out: Check[] = [];
    const v = (c: P, id: string, n: string) => vertexOf(c, G.r, lineOf(s, `${id}:${n}`)[0]);
    const labels = s.tags.filter((t) => t.name === '14C').map((t) => t.from as P);
    const lA = vertexOf(G.a, G.r, labels[0]), lB = vertexOf(G.b, G.r, labels[1]), lN = vertexOf(G.n, G.r, labels[2]), lC = vertexOf(G.c, G.r, labels[3]);
    out.push(['Every ring is a regular hexagon, and each ¹⁴C tag ends exactly on a vertex: nothing floats', [G.a, G.b, G.n, G.c].every((c) => regular(c, G.r)) && [lA, lB, lN, lC].every((k) => k >= 0)]);
    out.push([`Chlorobenzene, read back: Cl and ¹⁴C both on vertex ${v(G.a, 'a', 'Cl')} (Topic 04's "label at the C–Cl carbon"); the H that goes on vertex ${v(G.a, 'a', 'H')}, its neighbour: an ortho H, as the text says`, v(G.a, 'a', 'Cl') === 0 && lA === 0 && v(G.a, 'a', 'H') === 1]);
    const lines = [0, 1].map((i) => lineOf(s, `b:triple:${i}`) as [P, P]), b0 = hexPt(G.b, G.r, 0), b1 = hexPt(G.b, G.r, 1), e = azOf(b0, b1);
    const parallel = lines.every(([p, q]) => azGap(azOf(p, q), e) < 1e-6), m = mid(b0, b1);
    const inside = lines.every(([p, q]) => len(mid(p, q), G.b) < len(m, G.b));
    out.push([`Benzyne, read back: the ring edge and two lines parallel to it, inside the ring, on the edge from vertex 0 (where ¹⁴C is, vertex ${lB}) to vertex 1: the two carbons that lost Cl and H; ¹⁴C is one end of the bond`, parallel && inside && lB === 0]);
    const clearOfCircle = lines.every(([p, q]) => pointToLine(G.b, [p, q]) > G.r * G.inner + 2);
    out.push(['The extra bond lies clear of the inner circle: it is the in-plane one, separate from the ring\'s six π electrons', clearOfCircle]);
    out.push([`Normal addition: NH₂ on vertex ${v(G.n, 'n', 'NH2')}, ¹⁴C on vertex ${lN}: the same carbon, the labelled one`, v(G.n, 'n', 'NH2') === lN && lN === 0]);
    const nb = v(G.c, 'c', 'NH2');
    out.push([`Cine substitution: NH₂ on vertex ${nb}, ¹⁴C on vertex ${lC}: next door, ortho, so the amino group lands one carbon along`, lC === 0 && (Math.abs(nb - lC) === 1 || Math.abs(nb - lC) === 5)]);
    const freeVertices = (taken: number) => 6 - taken, chloro: Tally = { C: 6, H: freeVertices(1), Cl: 1 }, benzyne: Tally = { C: 6, H: freeVertices(2) }, hcl: Tally = { H: 1, Cl: 1 };
    const ammonia: Tally = { N: 1, H: 3 }, aniline: Tally = { C: 6, H: freeVertices(1) + 2, N: 1 };
    out.push(['Atoms read off the rings: C₆H₅Cl (five vertices left for H) − HCl = C₆H₄ (four); C₆H₄ + NH₃ = C₆H₅NH₂: NH₂⁻ adds, then takes H⁺ from the ammonia, which gives NH₂⁻ back (the book prints only the NH₂⁻)', same(chloro, sum(benzyne, hcl)) && same(sum(benzyne, ammonia), aniline)]);
    out.push(['Both isotope positions on the products come from one label: ¹⁴C count is conserved at 1 per ring on every structure', labels.length === 4]);
    const base = labelsNamed(s, 'NH2−'), Cl = labelsNamed(s, 'Cl')[0].rect, Hr = labelsNamed(s, 'H')[0].rect;
    out.push([`Curly arrows, read back: the first NH₂⁻ to the H (${fmt(rectDist(Hr, tipOf(s, 'base')), 1)} px); from on that C–H bond (${fmt(pointToLine(tailOf(s, 'pi'), lineOf(s, 'a:H')), 1)} px) to the ring edge beside Cl's carbon (${fmt(pointToLine(tipOf(s, 'pi'), lineOf(s, 'a:ring')), 1)} px); from on the C–Cl bond (${fmt(pointToLine(tailOf(s, 'leave'), lineOf(s, 'a:Cl')), 1)} px) to Cl (${fmt(rectDist(Cl, tipOf(s, 'leave')), 1)} px)`, rectDist(base[0].rect, tailOf(s, 'base')) < 8 && rectDist(Hr, tipOf(s, 'base')) < 9 && pointToLine(tailOf(s, 'pi'), lineOf(s, 'a:H')) < 1 && pointToLine(tipOf(s, 'pi'), lineOf(s, 'a:ring')) < 4 && pointToLine(tailOf(s, 'leave'), lineOf(s, 'a:Cl')) < 1 && rectDist(Cl, tipOf(s, 'leave')) < 9]);
    const leaveCross = Math.min(...lineOf(s, 'base').map((q) => pointToLine(q, lineOf(s, 'a:Cl'))));
    out.push([`The base's arrow does not cross the C–Cl bond (${fmt(leaveCross, 1)} px clear): the book's does; here NH₂⁻ stands on the H's side`, leaveCross > 10]);
    out.push(['Two ways from benzyne, one arrow each, one to each product, each with its NH₂⁻', namesOf(s, 'step:').length === 3 && base.length === 3]);
    out.push(['The labels as printed: chlorobenzene, benzyne, normal addition, cine substitution, NaNH₂ / liq. NH₃, −HCl, strained ‘triple bond’, ¹⁴C, Cl, H, NH₂, NH₂⁻', ['chlorobenzene', 'benzyne', 'normal addition', 'cine substitution', 'NaNH2 / liq. NH3', '−HCl', 'Cl', 'H', 'NH2', 'NH2−'].every((t) => hasLabel(s, t)) && s.tags.some((t) => t.name === 'strained ‘triple bond’')]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* "Figure 1" · the mechanism triage tree (Additional topic B, p. 299)     */
/* ===================================================================== */
const CAPB1 = 'The mechanism triage tree: read the substrate class first (methyl/primary, secondary, tertiary, allyl/benzyl, aryl/vinyl), then the reagent conditions (strong nucleophile, strong base with heat, bulky base, weak nucleophile in a protic solvent, NaNH<sub>2</sub>), and arrive at S<sub>N</sub>2, S<sub>N</sub>1 + E1, E2 Saytzeff, E2 Hofmann, NAS or benzyne.';
type Row = { cls: string[]; id: string; out: [string, string][] };
/** p. 299, each column of the book, top to bottom: the class, then two boxes of condition and result. */
const TREE: Row[] = [
  { cls: ['methyl /', 'primary'], id: 'methyl / primary', out: [['strong Nu, aprotic', 'S<sub>N</sub>2 (fast)'], ['neopentyl, protic', 'S<sub>N</sub>1 + rearrangement']] },
  { cls: ['secondary'], id: 'secondary', out: [['weak Nu, protic', 'S<sub>N</sub>1 + E1'], ['strong base, heat', 'E2 (Saytzeff)']] },
  { cls: ['tertiary'], id: 'tertiary', out: [['protic, mild', 'S<sub>N</sub>1 + E1'], ['strong bulky base', 'E2 (Hofmann)']] },
  { cls: ['allyl /', 'benzyl'], id: 'allyl / benzyl', out: [['stable cation', 'S<sub>N</sub>1 (fast)'], ['good Nu, unhindered', 'S<sub>N</sub>2 (fast)']] },
  { cls: ['aryl /', 'vinyl'], id: 'aryl / vinyl', out: [['ordinary conditions', 'no S<sub>N</sub>1 / S<sub>N</sub>2'], ['aryl: o/p-EWG, NaNH<sub>2</sub>', 'NAS or benzyne']] },
];
/**
 * p. 299's decision matrix, the table just above the tree, for the cross-check: which column of it each of
 * the tree's ten results agrees with, in the table's words.
 */
const MATRIX: [string, number, string][] = [
  ['methyl / primary', 0, 'SN2'], ['methyl / primary', 1, 'SN1 (rearranged)'],
  ['secondary', 0, 'SN1 + E1'], ['secondary', 1, 'SN2 vs E2 (heat → E2)'],
  ['tertiary', 0, 'SN1 + E1'], ['tertiary', 1, 'E2 (Hofmann possible)'],
  ['allyl / benzyl', 0, 'fast SN1'], ['allyl / benzyl', 1, 'fast SN2'],
  ['aryl / vinyl', 0, 'no reaction'], ['aryl / vinyl', 1, 'NAS; benzyne needs NaNH2'],
];
const GB = { root: [4, 4, 216, 34] as Rect, trunk: 8, clsL: 15, clsR: 82, fork: 88, boxL: 95, boxR: 337, top: 46, leaf: 24, gap: 4, pitch: 63, cond: 11.5, res: 12 };
const fontsFit = (cond: string, res: string) => widthOf(cond, GB.cond) + widthOf(res, GB.res);
const figBd1: Diagram = {
  id: 'c12-06-B-d1',
  topic: 5,
  name: 'Mechanism triage tree',
  cases: [{ chip: 'Substrate, then reagent', cap: CAPB1 }],
  draw() {
    const s = new Sketch(W, GB.top + GB.pitch * TREE.length - 4), G = GB;
    box(s, 'root', G.root, [{ html: 'R–X + nucleophile / base', size: 14 }], { edge: C.ink, w: 1.6 });
    TREE.forEach((row, i) => {
      const y = G.top + i * G.pitch, h = 2 * G.leaf + G.gap, midY = y + h / 2;
      box(s, row.id, [G.clsL, midY - 20, G.clsR, midY + 20], row.cls.map((html) => ({ html, size: 12.5 })), { edge: C.slate, w: 1.4 });
      edge(s, [[G.trunk, G.root[3]], [G.trunk, midY], [G.clsL, midY]]);
      row.out.forEach(([cond, res], j) => {
        const r: Rect = [G.boxL, y + j * (G.leaf + G.gap), G.boxR, y + j * (G.leaf + G.gap) + G.leaf], ly = (r[1] + r[3]) / 2;
        box(s, `${row.id}:${j}`, r, []);
        s.text(r[0] + 8, ly + 4, cond, { size: G.cond, anchor: 'start', color: C.slate });
        s.text(r[2] - 8, ly + 4, res, { size: G.res, anchor: 'end', color: C.amber });
        edge(s, [[G.clsR, midY], [G.fork, midY], [G.fork, ly], [G.boxL, ly]]);
      });
    });
    return s;
  },
  check() {
    const s = figBd1.draw(figBd1.cases[0]), out: Check[] = [], tree = treeOf(s);
    const fromRoot = tree.filter(([a]) => a === 'root').map(([, b]) => b);
    out.push([`Read back from where the lines end: the root branches to five classes, in the book's order: ${fromRoot.join(', ')}`, fromRoot.join() === TREE.map((r) => r.id).join()]);
    const each = TREE.every((r) => { const k = tree.filter(([a]) => a === r.id).map(([, b]) => b); return k.join() === `${r.id}:0,${r.id}:1`; });
    out.push(['Each class branches to its own two boxes, and nothing leads on from those: 1 + 5 + 10 = 16 boxes, 15 lines', each && tree.length === 15 && BOXES.get(s)!.length === 16]);
    const printed: [string, string][] = TREE.flatMap((r) => r.out.map(([c, x]): [string, string] => [plain(c), plain(x)]));
    const book: [string, string][] = [['strong Nu, aprotic', 'SN2 (fast)'], ['neopentyl, protic', 'SN1 + rearrangement'], ['weak Nu, protic', 'SN1 + E1'], ['strong base, heat', 'E2 (Saytzeff)'], ['protic, mild', 'SN1 + E1'], ['strong bulky base', 'E2 (Hofmann)'], ['stable cation', 'SN1 (fast)'], ['good Nu, unhindered', 'SN2 (fast)'], ['ordinary conditions', 'no SN1 / SN2'], ['aryl: o/p-EWG, NaNH2', 'NAS or benzyne']];
    out.push(['Each of the ten branches reads as printed on p. 299, except that the last condition now says "aryl:"', JSON.stringify(printed) === JSON.stringify(book)]);
    const agrees = MATRIX.every(([id, j, says]) => {
      const r = plain(TREE.find((t) => t.id === id)!.out[j][1]);
      const key = says.match(/SN2|SN1|E2|NAS|no reaction/g) ?? [];
      return key.some((k) => r.includes(k === 'no reaction' ? 'no SN' : k));
    });
    out.push(['Each result agrees with the same substrate\'s row of the decision matrix printed just above the tree', agrees]);
    const room = TREE.flatMap((r) => r.out).map(([c, x]) => GB.boxR - GB.boxL - 16 - fontsFit(c, x)), least = Math.min(...room);
    out.push([`In every box the condition and the result stay ${fmt(least, 1)} px or more apart at Android's widths`, least >= 4]);
    out.push(...treeClear(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_12_06: Diagram[] = [fig61, fig62, fig63, fig64, fig65, fig66, figBd1];

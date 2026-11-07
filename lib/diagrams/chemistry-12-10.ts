import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 12, CHAPTER 10 (Biomolecules): every drawing of the Master Reference book on pp. 478–529, redrawn.
 * Every page's vector shapes were counted (only pp. 483, 493, 501, 503, 511 and 517 hold a curve or a slanted line,
 * and no page has a raster image). SEVEN drawings on six pages:
 *
 *   Figures 10.1 and 10.2 (p. 483; captions first on p. 482) — Topic 01, topic index 0.
 *   Figure 10.3 (p. 493; caption first on p. 492) — Topic 02, index 1.
 *   Figure 10.4 (p. 501; caption first on p. 500), two panels — Topic 03, index 2.
 *   Figure 10.5 (p. 503; caption first on p. 502) — Topic 03, index 2.
 *   Figure 10.6 (p. 511; caption first on p. 510) — Topic 04, index 3.
 *   "Figure 1" (p. 517, unnumbered in the chapter's series) — Additional topic A, index 4.
 *
 * THE BOOK'S NUMBERS. The rotations (+112°, +19°, and the equilibrium +52.5°, NCERT's value, which the founder set for
 * the whole chapter in place of A's printed +52.7°: Decision 43), the shares (~36%, ~64%; the open chain < 0.5% in both
 * Fig 10.2, which printed < 1%, and "Figure 1": Decision 45), the melting points (419 K, 423 K) and "~40%
 * double-bond character" are the book's, as printed. Fig 10.4(b)'s catalysed-to-uncatalysed barrier ratio (0.508) is read from p. 501's path data; its widths are ours, one
 * width for both curves so the catalysed path runs below the other all the way (the book's broader catalysed curve
 * rises above the uncatalysed one on the flanks). Every other position is schematic, re-laid for a phone: Fig 10.2's
 * rings stand either side of the chain as printed; "Figure 1" puts the open chain on top with the anomers below it.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const rad = (deg: number) => (deg * Math.PI) / 180;
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const centre = (r: Rect): P => [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2];

/* ---------- drawing helpers (as in chemistry-12-09.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; name?: string };
/** Every line a label must keep clear of, by sketch, with its name so a check can read it back. */
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const lineOf = (s: Sketch, name: string) => LINES.get(s)!.find((l) => l.name === name)!.pts;
const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="4 3"' : ''}/>`);
  keep(s, pts, o.name);
}
function arrow(s: Sketch, a: P, b: P, o: Stroke = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color, w: o.w });
  keep(s, [a, b], o.name);
}
/** A filled arrowhead with its tip at b, pointing from a. */
function head(s: Sketch, a: P, b: P, col: string, HL = 8, HW = 3.8) {
  const L = len(a, b), ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L, base: P = [b[0] - ux * HL, b[1] - uy * HL];
  s.add(`<path d="M${r1(b[0])} ${r1(b[1])} L${r1(base[0] - uy * HW)} ${r1(base[1] + ux * HW)} L${r1(base[0] + uy * HW)} ${r1(base[1] - ux * HW)} Z" fill="${col}"/>`);
  return base;
}
/** A double-headed arrow from a to b (an energy gap). */
function both(s: Sketch, a: P, b: P, o: Stroke = {}) {
  const col = o.color ?? C.ink, pa = head(s, b, a, col, 7, 3.4), pb = head(s, a, b, col, 7, 3.4);
  s.add(`<path d="M${r1(pa[0])} ${r1(pa[1])} L${r1(pb[0])} ${r1(pb[1])}" fill="none" stroke="${col}" stroke-width="${o.w ?? 1.4}"/>`);
  keep(s, [a, b], o.name);
}
/** A curved arrow: a cubic from a to the tip b, a filled head along its last stretch. */
function curly(s: Sketch, a: P, c1: P, c2: P, b: P, o: Stroke = {}) {
  const n = 40, HL = 7.5, HW = 3.4, col = o.color ?? C.mari;
  const all = Array.from({ length: n + 1 }, (_, i): P => {
    const t = i / n, u = 1 - t;
    return [u * u * u * a[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t * t * t * b[0], u * u * u * a[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t * t * t * b[1]];
  });
  const shaft = all.filter((p) => len(p, b) >= HL);
  const base = shaft[shaft.length - 1], L = len(base, b), ux = (b[0] - base[0]) / L, uy = (b[1] - base[1]) / L;
  const w1: P = [base[0] - uy * HW, base[1] + ux * HW], w2: P = [base[0] + uy * HW, base[1] - ux * HW];
  path(s, shaft, { color: col, w: o.w ?? 1.6, name: o.name });
  s.add(`<path d="M${r1(b[0])} ${r1(b[1])} L${r1(w1[0])} ${r1(w1[1])} L${r1(w2[0])} ${r1(w2[1])} Z" fill="${col}"/>`);
  keep(s, [b, w1, w2, b], `${o.name}:head`);
}
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
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

/** A line of STIX on the drawing, from its baseline, its box at its true width (subscripts counted). */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size) * (o.bold ? 1.05 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  return rect;
}
const AT = 15;
/** An atom or group centred on p; its box is what bonds stop short of. */
function atom(s: Sketch, p: P, html: string, o: { size?: number; color?: string } = {}): Rect {
  const size = o.size ?? AT, w = widthOf(html, size);
  const rect: Rect = [p[0] - w / 2, p[1] - size * 0.4, p[0] + w / 2, p[1] + size * (html.includes('<sub>') ? 0.62 : 0.4)];
  s.labels.push({ text: plain(html), rect });
  s.text(p[0], p[1] + size * 0.36, html, { size, color: o.color ?? C.text });
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
/** A single bond, kept under its name. */
function bond(s: Sketch, A: P, ra: Rect | null, B: P, rb: Rect | null, o: Stroke = {}) {
  const [p, q] = ends(A, ra, B, rb);
  path(s, [p, q], o);
}

/* ---------- formulas: what a species holds ---------- */
type Tally = Record<string, number>;
const sum = (...t: Tally[]) => { const o: Tally = {}; t.forEach((m) => Object.entries(m).forEach(([k, v]) => { o[k] = (o[k] ?? 0) + v; })); return o; };
const times = (t: Tally, n: number) => { const o: Tally = {}; Object.entries(t).forEach(([k, v]) => { o[k] = v * n; }); return o; };
const same = (a: Tally, b: Tally) => { const k = new Set([...Object.keys(a), ...Object.keys(b)]); return [...k].every((e) => (a[e] ?? 0) === (b[e] ?? 0)); };
/** The atoms in a formula as printed ("H<sub>2</sub>N–CH(CH<sub>3</sub>)–COOH"); dashes and charges skipped. */
function count(html: string): Tally {
  const t = html.replace(/<sup>[^<]*<\/sup>/g, '').replace(/<[^>]+>/g, '');
  let i = 0;
  const group = (): Tally => {
    let out: Tally = {};
    while (i < t.length && t[i] !== ')') {
      let part: Tally;
      if (t[i] === '(') { i++; part = group(); i++; } else if (/[A-Z]/.test(t[i])) {
        let sym = t[i++];
        if (i < t.length && /[a-z]/.test(t[i])) sym += t[i++];
        part = { [sym]: 1 };
      } else { i++; continue; }
      let n = '';
      while (i < t.length && /\d/.test(t[i])) n += t[i++];
      out = sum(out, times(part, n ? +n : 1));
    }
    return out;
  };
  return group();
}
const tallyText = (t: Tally) => Object.entries(t).filter(([, v]) => v).map(([k, v]) => `${k}${v === 1 ? '' : v}`).join(' ');
const GLUCOSE = 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>';

/* ---------- boxes and flow lines (Figures 10.6 and "Figure 1") ---------- */
type Line = { html: string; size?: number; color?: string; bold?: boolean };
type Box = { id: string; rect: Rect; lines: Line[] };
const BOXES = new WeakMap<Sketch, Box[]>();
const FLOWS = new WeakMap<Sketch, { name: string; pts: P[]; color?: string }[]>();
const LH = 16;
function box(s: Sketch, id: string, rect: Rect, lines: Line[], o: { edge?: string; w?: number } = {}) {
  BOXES.set(s, [...(BOXES.get(s) ?? []), { id, rect, lines }]);
  s.add(`<rect x="${r1(rect[0])}" y="${r1(rect[1])}" width="${r1(rect[2] - rect[0])}" height="${r1(rect[3] - rect[1])}" rx="9" fill="#fff" stroke="${o.edge ?? C.slate}" stroke-width="${o.w ?? 1.2}"/>`);
  s.tags.push({ name: id, rect, from: null, to: null });
  const x = (rect[0] + rect[2]) / 2, y0 = (rect[1] + rect[3]) / 2 - ((lines.length - 1) * LH) / 2;
  lines.forEach((l, i) => s.text(x, y0 + i * LH + (l.size ?? 12) * 0.34, l.html, { size: l.size ?? 12, color: l.color ?? C.text, semibold: l.bold }));
}
/** A flow line from one box border to another, with a head at its end. */
function flow(s: Sketch, pts: P[], name: string, color: string = C.ink) {
  const b = pts[pts.length - 1], a = pts[pts.length - 2], L = len(a, b), ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L, HL = 8, HW = 3.8;
  const base: P = [b[0] - ux * HL, b[1] - uy * HL];
  const shaft = [...pts.slice(0, -1), base].map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${shaft}" fill="none" stroke="${color}" stroke-width="${color === C.ink ? 1.4 : 1.8}" stroke-linejoin="round"/>`);
  s.add(`<path d="M${r1(b[0])} ${r1(b[1])} L${r1(base[0] - uy * HW)} ${r1(base[1] + ux * HW)} L${r1(base[0] + uy * HW)} ${r1(base[1] - ux * HW)} Z" fill="${color}"/>`);
  FLOWS.set(s, [...(FLOWS.get(s) ?? []), { name, pts, color }]);
}
const onBorder = (r: Rect, p: P) => {
  const inX = p[0] >= r[0] - 0.01 && p[0] <= r[2] + 0.01, inY = p[1] >= r[1] - 0.01 && p[1] <= r[3] + 0.01;
  return (inX && (close(p[1], r[1], 0.01) || close(p[1], r[3], 0.01))) || (inY && (close(p[0], r[0], 0.01) || close(p[0], r[2], 0.01)));
};
/** The chart as drawn: which box each flow line really leaves and which it reaches. */
const flowsOf = (s: Sketch) => (FLOWS.get(s) ?? []).map(({ name, pts }) => {
  const B = BOXES.get(s)!, from = B.find((b) => onBorder(b.rect, pts[0])), to = B.find((b) => onBorder(b.rect, pts[pts.length - 1]));
  return { name, from: from?.id ?? '?', to: to?.id ?? '?' };
});
const orient = (a: P, b: P, c: P) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
const properCross = (a: P, b: P, c: P, d: P) => orient(a, b, c) * orient(a, b, d) < -1e-6 && orient(c, d, a) * orient(c, d, b) < -1e-6;
/** Flow lines that cross, run through a box, or come within 4 px of a label; and box text that overruns its box. */
function chartClear(s: Sketch): Check[] {
  const E = (FLOWS.get(s) ?? []).map((f) => f.pts), B = BOXES.get(s) ?? [], seg = E.map((pts) => pts.slice(1).map((q, i): [P, P] => [pts[i], q]));
  let crossings = 0;
  seg.forEach((a, i) => seg.slice(i + 1).forEach((b) => a.forEach(([p, q]) => b.forEach(([u, v]) => { if (properCross(p, q, u, v)) crossings++; }))));
  let through = 0;
  E.forEach((pts) => B.forEach((b) => { if ([pts[0], pts[pts.length - 1]].some((p) => onBorder(b.rect, p))) return; if (boxToLine([b.rect[0] - 2, b.rect[1] - 2, b.rect[2] + 2, b.rect[3] + 2], pts) < 1e-9) through++; }));
  let gap = Infinity, what = '';
  E.forEach((pts) => s.labels.forEach((l) => { const d = boxToLine(l.rect, pts); if (d < gap) { gap = d; what = l.text; } }));
  const tight = B.flatMap((b) => b.lines.filter((l) => widthOf(l.html, l.size ?? 12) * (l.bold ? 1.05 : 1) + 8 > b.rect[2] - b.rect[0]).map((l) => plain(l.html)));
  const tall = B.filter((b) => b.lines.length * LH + 4 > b.rect[3] - b.rect[1]).map((b) => b.id);
  return [
    [`No crossing lines: ${E.length} flow lines, ${crossings} crossings, ${through} through another box`, crossings === 0 && through === 0],
    [`Every flow line stays ${LABEL_GAP} px clear of every label: the closest is "${what}", ${fmt(gap, 1)} px`, E.length === 0 || gap >= LABEL_GAP - 1e-9],
    [`Every line of text fits its box with room to spare at Android's widths${tight.length || tall.length ? `: not ${[...tight, ...tall].join(', ')}` : ''}`, tight.length === 0 && tall.length === 0],
  ];
}
/** The one highlight: boxes whose text is set in amber. */
const highlighted = (s: Sketch) => (BOXES.get(s) ?? []).filter((b) => b.lines.some((l) => l.color === C.amber)).map((b) => b.id);
const boxText = (s: Sketch, id: string) => BOXES.get(s)!.find((b) => b.id === id)!.lines.map((l) => plain(l.html)).join(' ');
const hOf = (n: number) => n * LH + 10;

/* ===================================================================== */
/* Figure 10.1 · Fischer projection of D-(+)-glucose (Topic 01, p. 483)  */
/* ===================================================================== */
const CAP101 = 'Fischer projection of D-(+)-glucose: OH right-left-right-right down the chain; the C5 OH on the right makes it a D-sugar.';
/** p. 483: the side of each –OH on C2 to C5, top to bottom, as printed. */
const SIDES101: ('right' | 'left')[] = ['right', 'left', 'right', 'right'];
const G101 = { x: 74, y: [24, 60, 96, 132, 168, 204], arm: 42, gx: 254, gy: [92, 128, 164], garm: 34 };

/**
 * CIP priorities along an open-chain aldose (C1 the CHO), by comparing each branch's atoms sphere by sphere
 * (atomic numbers, highest first; the C=O's O counted twice, as CIP's duplicate atom). For a chain carrying only
 * OH and H this reaches the same order as the full hierarchical digraph.
 */
const Z: Record<string, number> = { H: 1, C: 6, O: 8 };
function aldose(n: number) {
  const A: { el: string; nb: number[] }[] = [];
  const add = (el: string) => { A.push({ el, nb: [] }); return A.length - 1; };
  const link = (a: number, b: number) => { A[a].nb.push(b); A[b].nb.push(a); };
  const Cs = Array.from({ length: n }, () => add('C')), O: number[] = [];
  for (let i = 1; i < n; i++) link(Cs[i - 1], Cs[i]);
  const o1 = add('O');
  link(Cs[0], o1); link(Cs[0], add('O')); link(o1, add('C')); link(Cs[0], add('H')); // C1: =O (and its duplicate), H
  O.push(o1);
  for (let i = 1; i < n; i++) {
    const o = add('O');
    link(Cs[i], o); link(o, add('H')); link(Cs[i], add('H'));
    if (i === n - 1) link(Cs[i], add('H')); // the CH₂OH end
    O.push(o);
  }
  return { A, Cs, O };
}
/** The atomic numbers met at each distance along the branch from `from` through `to`, highest first. */
function spheres(A: { el: string; nb: number[] }[], from: number, to: number, depth = 8): number[][] {
  const out: number[][] = [[Z[A[to].el]]];
  let front: [number, number][] = [[to, from]];
  for (let d = 1; d < depth; d++) {
    const next: [number, number][] = [];
    front.forEach(([a, back]) => A[a].nb.filter((b) => b !== back).forEach((b) => next.push([b, a])));
    out.push(next.map(([b]) => Z[A[b].el]).sort((x, y) => y - x));
    front = next;
  }
  return out;
}
const cmpBranch = (a: number[][], b: number[][]) => {
  for (let d = 0; d < Math.max(a.length, b.length); d++) {
    const x = a[d] ?? [], y = b[d] ?? [];
    for (let k = 0; k < Math.max(x.length, y.length); k++) { const p = x[k] ?? 0, q = y[k] ?? 0; if (p !== q) return q - p; }
  }
  return 0;
};
/**
 * R or S at each stereocentre (C2 … C(n−1)) of a Fischer projection, from the drawn sides of the OH: up (the C1 end)
 * and down on the vertical line, OH and H on the horizontal (toward the viewer), so the turn read on the page is reversed.
 */
function fischerConfig(sides: ('right' | 'left')[]) {
  const n = sides.length + 2, { A, Cs, O } = aldose(n);
  return sides.map((side, i) => {
    const c = Cs[i + 1], H = A[c].nb.find((b) => A[b].el === 'H')!;
    const subs = [O[i + 1], Cs[i], Cs[i + 2], H];
    const pos = new Map<number, P>([[Cs[i], [0, 1]], [Cs[i + 2], [0, -1]], [O[i + 1], [side === 'right' ? 1 : -1, 0]], [H, [side === 'right' ? -1 : 1, 0]]]);
    const ranked = [...subs].sort((a, b) => cmpBranch(spheres(A, c, a), spheres(A, c, b)));
    const [p1, p2, p3] = ranked.map((a) => pos.get(a)!);
    const turn = (p2[0] - p1[0]) * (p3[1] - p1[1]) - (p2[1] - p1[1]) * (p3[0] - p1[0]); // y up: > 0 counter-clockwise
    return { up: ranked.indexOf(Cs[i]) < ranked.indexOf(Cs[i + 2]), last: ranked[3] === H, cfg: turn > 0 ? 'R' : 'S' };
  });
}
const fig101: Diagram = {
  id: 'c12-10-fig-10.1',
  topic: 0,
  name: 'Fischer projection of D-glucose',
  cases: [{ chip: 'D-(+)-glucose', cap: CAP101 }],
  draw() {
    const s = new Sketch(W, 290), G = G101, x = G.x;
    const top = atom(s, [x, G.y[0]], 'CHO'), bot = atom(s, [x, G.y[5]], 'CH<sub>2</sub>OH');
    let prev: [P, Rect | null] = [[x, G.y[0]], top];
    SIDES101.forEach((side, i) => {
      const y = G.y[i + 1], c: P = [x, y], hi = i === 3, k = side === 'right' ? 1 : -1;
      bond(s, prev[0], prev[1], c, null, { name: `v${i}` });
      const oh: P = [x + k * G.arm, y], h: P = [x - k * G.arm, y];
      const rOH = atom(s, oh, side === 'right' ? 'OH' : 'HO', { color: hi ? C.amber : C.text }), rH = atom(s, h, 'H');
      bond(s, c, null, oh, rOH, { name: `oh${i}`, color: hi ? C.mari : C.ink, w: hi ? 2.2 : 1.7 });
      bond(s, c, null, h, rH, { name: `h${i}` });
      lab(s, x - 6, y - 7, `C${i + 2}`, { anchor: 'end', size: 10, color: C.slate });
      prev = [c, null];
    });
    bond(s, prev[0], null, [x, G.y[5]], bot, { name: 'v4' });
    // D-(+)-glyceraldehyde, the reference
    const gx = G.gx, gy = G.gy, gc: P = [gx, gy[1]];
    const gt = atom(s, [gx, gy[0]], 'CHO'), gb = atom(s, [gx, gy[2]], 'CH<sub>2</sub>OH');
    bond(s, [gx, gy[0]], gt, gc, null, { name: 'g:v0' });
    bond(s, gc, null, [gx, gy[2]], gb, { name: 'g:v1' });
    const gOH = atom(s, [gx + G.garm, gy[1]], 'OH', { color: C.amber }), gH = atom(s, [gx - G.garm, gy[1]], 'H');
    bond(s, gc, null, [gx + G.garm, gy[1]], gOH, { name: 'g:oh', color: C.mari, w: 2.2 });
    bond(s, gc, null, [gx - G.garm, gy[1]], gH, { name: 'g:h' });
    lab(s, gx, gy[2] + 32, 'D-(+)-glyceraldehyde', { size: 12, color: C.slate });
    // "same side": from glucose's C5 OH to glyceraldehyde's centre
    curly(s, [134, 165], [168, 166], [196, 150], [208, 128], { color: C.slate, w: 1.4, name: 'same' });
    lab(s, 160, 141, 'same side', { size: 11.5, color: C.slate });
    // the note on C5, its leader from just below the C5 crossing
    path(s, [[x + 14, G.y[4] + 7], [126, 222]], { color: C.mari, w: 1.1, name: 'leader' });
    lab(s, 132, 228, 'lowest asymmetric carbon (C5):', { anchor: 'start', size: 11.5, color: C.amber });
    lab(s, 132, 244, 'OH on the right → D-series', { anchor: 'start', size: 11.5, color: C.amber });
    lab(s, W / 2, 278, 'Fischer projection of D-(+)-glucose', { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig101.draw(fig101.cases[0]), out: Check[] = [], G = G101, x = G.x;
    // the sides, read back off the drawing
    const read = SIDES101.map((_, i) => {
      const y = G.y[i + 1], l = s.labels.find((q) => (q.text === 'OH' || q.text === 'HO') && Math.abs(centre(q.rect)[1] - y) < 2 && centre(q.rect)[0] < 160)!;
      return centre(l.rect)[0] > x ? 'right' : 'left';
    }) as ('right' | 'left')[];
    out.push([`The OH sides read back off the drawing, C2 to C5: ${read.join('-')}, the caption's "right-left-right-right"`, read.join('-') === 'right-left-right-right']);
    const cfg = fischerConfig(read), want = ['R', 'S', 'R', 'R'];
    out.push([`CIP read from the drawing: ${cfg.map((c, i) => `C${i + 2} ${c.cfg}`).join(', ')}, that is (2R,3S,4R,5R)-2,3,4,5,6-pentahydroxyhexanal, D-glucose; at every centre OH > the carbon toward C1 > the carbon toward C6 > H`, cfg.every((c, i) => c.cfg === want[i] && c.up && c.last)]);
    const gSide = centre(labelsNamed(s, 'OH').find((l) => centre(l.rect)[0] > 160)!.rect)[0] > G.gx ? 'right' : 'left', gCfg = fischerConfig([gSide])[0];
    out.push([`The reference: glyceraldehyde's OH drawn on the ${gSide}, so (${gCfg.cfg})-glyceraldehyde, D-(+); glucose's C5 OH is on the ${read[3]} too: the same side, so D`, gSide === 'right' && gCfg.cfg === 'R' && read[3] === gSide]);
    const C2C5 = SIDES101.map((_, i): P => [x, G.y[i + 1]]), at = (p: P) => (LINES.get(s) ?? []).filter((l) => !l.name.startsWith('g:') && l.name !== 'same' && l.name !== 'leader' && [l.pts[0], l.pts[l.pts.length - 1]].some((q) => len(q, p) < 0.01)).length;
    out.push([`Four bonds drawn at each of C2–C5 (${C2C5.map(at).join(', ')}): up, down, OH, H; C1 is CHO (H, =O, C2) and C6 CH₂OH (two H, OH, C5), four each`, C2C5.every((p) => at(p) === 4) && count('CHO').H === 1 && count('CH<sub>2</sub>OH').H === 3]);
    const all = count('CHO(CHOH)<sub>4</sub>CH<sub>2</sub>OH');
    out.push([`The chain as drawn, CHO–(CHOH)₄–CH₂OH, holds ${tallyText(all)}: C₆H₁₂O₆, an aldohexose with four stereocentres (2⁴ = 16 aldohexoses)`, same(all, count(GLUCOSE)) && 2 ** SIDES101.length === 16]);
    const cOH = lineOf(s, 'oh3'), lead = lineOf(s, 'leader');
    out.push(['The highlight is the C5 OH (and glyceraldehyde\'s OH it is matched with); the note\'s leader starts just below the C5 crossing', cOH[1][0] > x && len(lead[0], [x, G.y[4]]) < 17 && labelsNamed(s, 'OH').length === 4]);
    out.push(['The labels as printed: CHO, CH₂OH, C2–C5, same side, D-(+)-glyceraldehyde, lowest asymmetric carbon (C5): OH on the right → D-series, Fischer projection of D-(+)-glucose', ['CHO', 'CH2OH', 'C2', 'C3', 'C4', 'C5', 'HO', 'same side', 'D-(+)-glyceraldehyde', 'lowest asymmetric carbon (C5):', 'OH on the right → D-series', 'Fischer projection of D-(+)-glucose'].every((t) => hasLabel(s, t)) && labelsNamed(s, 'H').length === 5]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.2 · the D-glucose equilibrium (Topic 01, p. 483)            */
/* ===================================================================== */
const CAP102 = 'The D-glucose equilibrium: the open chain between the alpha (anomeric OH down) and beta (OH up) glucopyranose Haworth forms.';
/** The ring, flat-topped as the book draws it: C1 at the right, then counter-clockwise O, C5, C4, C3, C2. */
const RING = ['C1', 'O', 'C5', 'C4', 'C3', 'C2'] as const;
type RingAtom = (typeof RING)[number];
const G102 = { r: 34, cy: 72, a: 48, b: 280, chain: 166, stub: 30, sz: 12.5, arrows: [[102, 136], [196, 230]] as P[] };
const vtx = (cx: number, k: RingAtom): P => { const i = RING.indexOf(k); return [cx + G102.r * Math.cos(rad(60 * i)), G102.cy - G102.r * Math.sin(rad(60 * i))]; };
/** p. 483, each ring carbon's group: up or down from its vertex, as printed (H left out, as printed). */
const SUBS102 = (alpha: boolean): { at: RingAtom; up: boolean; html: string }[] => [
  { at: 'C5', up: true, html: 'CH<sub>2</sub>OH' },
  { at: 'C4', up: false, html: 'OH' },
  { at: 'C3', up: true, html: 'OH' },
  { at: 'C2', up: false, html: 'OH' },
  { at: 'C1', up: !alpha, html: 'OH' },
];
/** p. 483, the anomers' shares as printed; p. 516–517, the rotations behind them (equilibrium +52.5°, Decision 43). */
const SHARE102 = { alpha: 36, beta: 64, open: 0.5 }, ROT = { alpha: 112, beta: 19, eq: 52.5 };
const SUBRECTS = new WeakMap<Sketch, { key: string; vertex: P; rect: Rect }[]>();
function haworth(s: Sketch, cx: number, alpha: boolean, id: string) {
  const v = (k: RingAtom) => vtx(cx, k), rO = atom(s, v('O'), 'O', { size: 13 });
  const edges: [RingAtom, RingAtom][] = [['C1', 'O'], ['O', 'C5'], ['C5', 'C4'], ['C4', 'C3'], ['C3', 'C2'], ['C2', 'C1']];
  edges.forEach(([p, q]) => bond(s, v(p), p === 'O' ? rO : null, v(q), q === 'O' ? rO : null, { name: `${id}:${p}-${q}`, w: (p === 'C3' || p === 'C2') ? 3.6 : 1.8 }));
  SUBS102(alpha).forEach((g) => {
    const p = v(g.at), hi = g.at === 'C1', inside = g.at === 'C3';
    const at: P = [p[0] + (hi && g.up ? 6 : 0), p[1] + (g.up ? -1 : 1) * (inside ? G102.r * Math.sin(rad(60)) : G102.stub)];
    const r = atom(s, at, g.html, { size: G102.sz, color: hi ? C.amber : C.text });
    bond(s, p, null, at, r, { name: `${id}:${g.at}-sub`, color: hi ? C.mari : C.ink, w: hi ? 2.2 : 1.6 });
    SUBRECTS.set(s, [...(SUBRECTS.get(s) ?? []), { key: `${id}:${g.at}`, vertex: p, rect: r }]);
  });
  const c1 = v('C1');
  lab(s, c1[0] + 6, G102.cy + 17, 'C1', { anchor: 'start', size: 11, color: C.amber });
}
const fig102: Diagram = {
  id: 'c12-10-fig-10.2',
  topic: 0,
  name: 'The D-glucose equilibrium',
  cases: [{ chip: 'Anomers and chain', cap: CAP102 }],
  draw() {
    const s = new Sketch(W, 200), G = G102, cy = G.cy, x = G.chain;
    haworth(s, G.a, true, 'a');
    haworth(s, G.b, false, 'b');
    // the open chain between them
    const r1c = atom(s, [x, cy - 34], 'CHO', { size: 13 }), r2c = atom(s, [x, cy], '(CHOH)<sub>4</sub>', { size: 13 }), r3c = atom(s, [x, cy + 34], 'CH<sub>2</sub>OH', { size: 13 });
    bond(s, [x, cy - 34], r1c, [x, cy], r2c, { name: 'chain:1', w: 1.3 });
    bond(s, [x, cy], r2c, [x, cy + 34], r3c, { name: 'chain:2', w: 1.3 });
    lab(s, x, cy + 60, 'open chain', { size: 12, color: C.slate });
    lab(s, x, cy + 76, '(trace, < 0.5%)', { size: 12, color: C.slate });
    // the two equilibria, as printed: on each side the upper arrow points away from the chain
    const [[l0, l1], [r0, r1]] = G.arrows;
    arrow(s, [l1, cy - 5], [l0, cy - 5], { w: 1.6, name: 'eq:to-a' });
    arrow(s, [l0, cy + 5], [l1, cy + 5], { w: 1.6, name: 'eq:from-a' });
    arrow(s, [r0, cy - 5], [r1, cy - 5], { w: 1.6, name: 'eq:to-b' });
    arrow(s, [r1, cy + 5], [r0, cy + 5], { w: 1.6, name: 'eq:from-b' });
    lab(s, 86, cy + 100, 'α-D-glucopyranose', { size: 12.5, color: C.slate });
    lab(s, 86, cy + 116, `anomeric (C1) OH down, ~${SHARE102.alpha}%`, { size: 11.5, color: C.slate });
    lab(s, 254, cy + 100, 'β-D-glucopyranose', { size: 12.5, color: C.slate });
    lab(s, 254, cy + 116, `anomeric (C1) OH up, ~${SHARE102.beta}%`, { size: 11.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig102.draw(fig102.cases[0]), out: Check[] = [], subs = SUBRECTS.get(s)!;
    const dir = (key: string) => { const q = subs.find((t) => t.key === key)!; return centre(q.rect)[1] < q.vertex[1] ? 'up' : 'down'; };
    // Haworth from Fischer: a group on the right in the Fischer projection points down in the ring; D puts C6 up
    const fromFischer = SIDES101.slice(0, 3).map((sd) => (sd === 'right' ? 'down' : 'up'));
    const drawn = ['C2', 'C3', 'C4'].map((k) => dir(`a:${k}`)), drawnB = ['C2', 'C3', 'C4'].map((k) => dir(`b:${k}`));
    out.push([`Ring OH read back off both rings, C2, C3, C4: ${drawn.join(', ')} (α) and ${drawnB.join(', ')} (β), as Fig 10.1's ${SIDES101.slice(0, 3).join('-')} turns over (right in Fischer = down in Haworth)`, drawn.join() === fromFischer.join() && drawnB.join() === fromFischer.join()]);
    out.push([`CH₂OH (C6) up on both rings, as a D-sugar's must be (C5's OH on the right in Fig 10.1 closes the ring, swinging C6 up)`, dir('a:C5') === 'up' && dir('b:C5') === 'up' && SIDES101[3] === 'right']);
    out.push([`The anomeric C1 OH: ${dir('a:C1')} in α (trans to CH₂OH), ${dir('b:C1')} in β (cis to CH₂OH), as the caption and the names say`, dir('a:C1') === 'down' && dir('b:C1') === 'up' && hasLabel(s, `anomeric (C1) OH down, ~${SHARE102.alpha}%`) && hasLabel(s, `anomeric (C1) OH up, ~${SHARE102.beta}%`)]);
    // atoms: each ring carbon carries its group and an H the book leaves out
    const ring = sum(count('C<sub>5</sub>O'), ...SUBS102(true).map((g) => count(g.html)), times({ H: 1 }, 5)), chain = count('CHO(CHOH)<sub>4</sub>CH<sub>2</sub>OH');
    out.push([`Atoms equal in all three: each ring ${tallyText(ring)} (five ring C and the ring O, five groups, five C–H), the chain ${tallyText(chain)}: one C₆H₁₂O₆, isomers, as an equilibrium must be`, same(ring, count(GLUCOSE)) && same(chain, ring)]);
    const x = (ROT.eq - ROT.beta) / (ROT.alpha - ROT.beta);
    out.push([`The shares from the rotations (pp. 516–517): ${ROT.alpha}x + ${ROT.beta}(1 − x) = ${ROT.eq}, x = ${fmt(x, 4)}, so ~${Math.round(100 * x)}% α and ~${Math.round(100 * (1 - x))}% β, as printed; the open chain a trace`, Math.round(100 * x) === SHARE102.alpha && Math.round(100 * (1 - x)) === SHARE102.beta && SHARE102.alpha + SHARE102.beta === 100 && SHARE102.open <= 1]);
    const ar = ['eq:to-a', 'eq:from-a', 'eq:to-b', 'eq:from-b'].map((n) => lineOf(s, n)), dx = ar.map(([a, b]) => Math.sign(b[0] - a[0]));
    out.push(['Two equilibria, each a pair of opposite arrows: chain ⇌ α on the left, chain ⇌ β on the right; the anomers interconvert only through the chain', dx.join() === '-1,1,1,-1' && ar[0][1][0] < G102.chain && ar[2][1][0] > G102.chain]);
    const bold = (s.svg().match(/stroke-width="3.6"/g) ?? []).length, front = bold === 4 && ['a', 'b'].every((id) => ['C3-C2', 'C2-C1'].every((e) => lineOf(s, `${id}:${e}`).length === 2));
    out.push(['Each ring a regular hexagon with the ring O at the back right, C1 to its right, and the front edges C3–C2 and C2–C1 drawn bold, as printed', front && Math.abs(len(vtx(0, 'C1'), vtx(0, 'O')) - G102.r) < 1e-9]);
    out.push(['The labels as printed: CH₂OH, O, OH, C1 on both rings; CHO, (CHOH)₄, CH₂OH, open chain (trace, < 0.5%); α-D-glucopyranose, β-D-glucopyranose', labelsNamed(s, 'C1').length === 2 && labelsNamed(s, 'OH').length === 8 && labelsNamed(s, 'CH2OH').length === 3 && ['CHO', '(CHOH)4', 'O', 'open chain', '(trace, < 0.5%)', 'α-D-glucopyranose', 'β-D-glucopyranose'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.3 · peptide-bond formation (Topic 02, p. 493)                */
/* ===================================================================== */
const CAP103 = 'Peptide-bond formation: glycine plus alanine lose water to give glycylalanine; the planar –CO–NH– unit is boxed.';
const GLY = 'H<sub>2</sub>N–CH<sub>2</sub>–COOH', ALA = 'H<sub>2</sub>N–CH(CH<sub>3</sub>)–COOH';
/** The product as printed, in three runs: the boxed peptide bond in the middle. */
const PEP = ['H<sub>2</sub>N–CH<sub>2</sub>', '–CO–NH–', 'CH(CH<sub>3</sub>)–COOH'];
const G103 = { y1: 36, sz: 13, y2: 132, ps: 14, gap: 10, pad: 5 };
const BOXR = new WeakMap<Sketch, { box: Rect; parts: Rect[] }>();
const fig103: Diagram = {
  id: 'c12-10-fig-10.3',
  topic: 1,
  name: 'Peptide-bond formation',
  cases: [{ chip: 'Glycylalanine', cap: CAP103 }],
  draw() {
    const s = new Sketch(W, 206), G = G103;
    const wG = widthOf(GLY, G.sz), wA = widthOf(ALA, G.sz), wP = widthOf('+', 15), g = 9, x0 = (W - wG - wA - wP - 2 * g) / 2;
    lab(s, x0, G.y1, GLY, { anchor: 'start', size: G.sz });
    lab(s, x0 + wG + g + wP / 2, G.y1 + 1, '+', { size: 15 });
    lab(s, x0 + wG + 2 * g + wP, G.y1, ALA, { anchor: 'start', size: G.sz });
    lab(s, x0 + wG / 2, G.y1 + 20, 'glycine', { size: 12, color: C.slate });
    lab(s, x0 + wG + 2 * g + wP + wA / 2, G.y1 + 20, 'alanine', { size: 12, color: C.slate });
    arrow(s, [W / 2, 66], [W / 2, 102], { w: 1.8, name: 'react' });
    lab(s, W / 2 + 10, 89, '− H<sub>2</sub>O', { anchor: 'start', size: 13, color: C.slate });
    // the product, its peptide bond boxed
    const ws = PEP.map((h, i) => widthOf(h, G.ps) * (i === 1 ? 1.05 : 1)), total = ws[0] + ws[1] + ws[2] + 2 * G.gap;
    let x = (W - total) / 2;
    const parts = PEP.map((h, i) => { const r = lab(s, x, G.y2, h, { anchor: 'start', size: G.ps, color: i === 1 ? C.amber : C.text, bold: i === 1 }); x += ws[i] + G.gap; return r; });
    const m = parts[1], bx: Rect = [m[0] - G.pad, m[1] - G.pad, m[2] + G.pad, m[3] + G.pad];
    path(s, [[bx[0], bx[1]], [bx[2], bx[1]], [bx[2], bx[3]], [bx[0], bx[3]], [bx[0], bx[1]]], { color: C.mari, w: 1.6, name: 'box' });
    const mx = (bx[0] + bx[2]) / 2;
    path(s, [[mx, bx[3]], [mx, 153]], { color: C.mari, w: 1.1, name: 'leader' });
    lab(s, W / 2, 166, 'peptide bond: planar, ~40% double-bond character', { size: 12, color: C.amber });
    lab(s, W / 2, 194, 'glycylalanine (a dipeptide)', { size: 12.5, color: C.slate });
    BOXR.set(s, { box: bx, parts });
    return s;
  },
  check() {
    const s = fig103.draw(fig103.cases[0]), out: Check[] = [], prod = PEP.join('');
    const left = sum(count(GLY), count(ALA)), right = sum(count(prod), count('H<sub>2</sub>O'));
    out.push([`Glycine ${tallyText(count(GLY))} + alanine ${tallyText(count(ALA))} → glycylalanine ${tallyText(count(prod))} + H₂O: ${tallyText(left)} on both sides`, same(left, right)]);
    out.push([`The bond joins glycine's carboxyl to alanine's amino group: ${plain(PEP[0])}–CO is glycine less OH, NH–${plain(PEP[2])} is alanine less one H on N; so the water is glycine's OH and alanine's H`, `${PEP[0]}–CO` === GLY.replace(/OH$/, '') && `NH–${PEP[2]}` === ALA.replace('H<sub>2</sub>N', 'NH')]);
    out.push(['Two residues, one peptide bond (n − 1), the N-terminal glycine written first: Gly-Ala, glycylalanine', prod.startsWith('H<sub>2</sub>N–CH<sub>2</sub>') && (prod.match(/CO–NH/g) ?? []).length === 1]);
    const { box: bx, parts } = BOXR.get(s)!, inside = (r: Rect) => r[0] > bx[0] && r[2] < bx[2] && r[1] > bx[1] && r[3] < bx[3];
    out.push([`The box holds –CO–NH– and nothing else: ${fmt(parts[1][0] - bx[0], 1)} px clear inside, the runs either side ${fmt(bx[0] - parts[0][2], 1)} and ${fmt(parts[2][0] - bx[2], 1)} px outside`, inside(parts[1]) && !inside(parts[0]) && !inside(parts[2]) && parts[0][2] < bx[0] && parts[2][0] > bx[2]]);
    out.push(['The labels as printed: glycine, alanine, − H₂O, glycylalanine (a dipeptide), peptide bond: planar, ~40% double-bond character', ['glycine', 'alanine', '− H2O', '+', 'glycylalanine (a dipeptide)', 'peptide bond: planar, ~40% double-bond character', '–CO–NH–'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.4 · lock-and-key enzyme action (Topic 03, p. 501)            */
/* ===================================================================== */
const CAP104 = 'Lock-and-key enzyme action: the substrate fits the active site, reacts, and releases the unchanged enzyme; the catalysed path has the lower barrier.';
/** Panel (a): the enzyme a circle with a wedge cut out (the active site), the substrate the wedge it fits. */
const G104 = { cy: 50, R: 23, L: 30, h: 16, apex: 3, e: [32, 152, 246], s: 66, arrows: [[102, 124], [191, 217]], px: 280, dy: 10 };
const PHI = Math.atan(G104.h / G104.L);
/** The enzyme outline: the apex, one mouth corner, round the back, the other mouth corner, the apex. */
function enzyme(cx: number): P[] {
  const G = G104, A: P = [cx + G.apex, G.cy], cp = Math.cos(PHI);
  const t = -G.apex * cp + Math.sqrt(G.apex * G.apex * cp * cp - G.apex * G.apex + G.R * G.R);
  const up: P = [A[0] + t * Math.cos(PHI), A[1] - t * Math.sin(PHI)], a0 = Math.atan2(up[1] - G.cy, up[0] - cx);
  const arc = Array.from({ length: 49 }, (_, i): P => { const a = a0 - (i / 48) * (2 * Math.PI + 2 * a0); return [cx + G.R * Math.cos(a), G.cy + G.R * Math.sin(a)]; });
  return [A, ...arc, A];
}
const tri = (tip: P, half: 'up' | 'down' | 'both' = 'both'): P[] => {
  const { L, h } = G104, a: P = [tip[0] + L, tip[1] - h], b: P = [tip[0] + L, tip[1] + h], m: P = [tip[0] + L, tip[1]];
  return half === 'both' ? [tip, a, b, tip] : half === 'up' ? [tip, a, m, tip] : [tip, m, b, tip];
};
const area = (pts: P[]) => Math.abs(pts.slice(0, -1).reduce((A, p, i) => A + p[0] * pts[i + 1][1] - pts[i + 1][0] * p[1], 0)) / 2;
/** Panel (b): p. 501's path data, each curve's peak height above its start (pt). */
const BOOK104 = { uncat: 69.958176, cat: 35.543194 };
const G104b = { ox: 30, oy: 190, x1: 332, top: 40, base: 178, x0: 182, sig: 34, Hu: 118, off: 17 };
const Hc104 = G104b.Hu * (BOOK104.cat / BOOK104.uncat);
const E104 = (x: number, H: number) => G104b.base - H * Math.exp(-((x - G104b.x0) ** 2) / (2 * G104b.sig ** 2));
const fig104: Diagram = {
  id: 'c12-10-fig-10.4',
  topic: 2,
  name: 'Lock-and-key enzyme action',
  cases: [
    { chip: 'Lock and key', cap: CAP104, panel: 'a' },
    { chip: 'Energy profile', cap: CAP104, panel: 'b' },
  ],
  draw(c: { panel: string }) {
    if (c.panel === 'a') {
      const s = new Sketch(W, 124), G = G104;
      G.e.forEach((cx, i) => path(s, enzyme(cx), { w: 1.8, name: `enzyme${i}` }));
      path(s, tri([G.s, G.cy]), { color: C.mari, w: 1.9, name: 'substrate' });
      path(s, tri([G.e[1] + G.apex, G.cy]), { color: C.mari, w: 1.9, name: 'bound' });
      path(s, tri([G.px, G.cy - G.dy], 'up'), { color: C.mari, w: 1.9, name: 'product1' });
      path(s, tri([G.px, G.cy + G.dy], 'down'), { color: C.mari, w: 1.9, name: 'product2' });
      G.arrows.forEach(([a, b], i) => arrow(s, [a, G.cy], [b, G.cy], { w: 1.8, name: `step${i}` }));
      const ly = 96;
      lab(s, G.e[0], ly, 'enzyme', { size: 11.5, color: C.slate });
      lab(s, G.e[0], ly + 15, '(E)', { size: 11.5, color: C.slate });
      lab(s, G.s + G.L / 2, ly, 'substrate', { size: 11.5, color: C.amber });
      lab(s, G.s + G.L / 2, ly + 15, '(S)', { size: 11.5, color: C.amber });
      lab(s, G.e[1] + 10, ly, 'ES complex', { size: 11.5, color: C.slate });
      lab(s, 270, ly, 'E + products', { size: 11.5, color: C.slate });
      lab(s, 270, ly + 15, '(enzyme unchanged)', { size: 11.5, color: C.slate });
      return s;
    }
    const s = new Sketch(W, 222), G = G104b;
    path(s, [[G.ox, G.top], [G.ox, G.oy], [G.x1, G.oy]], { color: C.slate, w: 1.3, name: 'axes' });
    lab(s, G.ox + 8, 34, 'energy', { anchor: 'start', size: 12.5 });
    lab(s, (G.ox + G.x1) / 2, G.oy + 22, 'reaction coordinate', { size: 12.5 });
    path(s, [[G.ox + 2, G.base], [228, G.base]], { color: C.grey, w: 1.1, dash: true, name: 'start level' });
    const xs = Array.from({ length: 147 }, (_, i) => G.ox + 4 + i * 2);
    path(s, xs.map((x): P => [x, E104(x, G.Hu)]), { color: C.slate, w: 1.8, name: 'uncatalysed' });
    path(s, xs.map((x): P => [x, E104(x, Hc104)]), { color: C.mari, w: 2.1, name: 'catalysed' });
    // the barriers: each from the start level to its own peak; the catalysed one beside, with a guide at its peak
    both(s, [G.x0, G.base], [G.x0, G.base - G.Hu], { color: C.slate, name: 'Ea:uncat' });
    path(s, [[G.x0 + 3, G.base - Hc104], [G.x0 + G.off + 3, G.base - Hc104]], { color: C.grey, w: 1, dash: true, name: 'guide' });
    both(s, [G.x0 + G.off, G.base], [G.x0 + G.off, G.base - Hc104], { color: C.mari, w: 1.5, name: 'Ea:cat' });
    lab(s, G.x0 - 6, 109, '<i>E</i><sub>a</sub>', { anchor: 'end', size: 14, color: C.slate });
    lab(s, G.x0 + G.off + 7, 166, '<i>E</i><sub>a</sub>', { anchor: 'start', size: 14, color: C.amber });
    // the key
    path(s, [[206, 30], [230, 30]], { color: C.slate, w: 1.8, name: 'key:uncat' });
    path(s, [[206, 48], [230, 48]], { color: C.mari, w: 2.1, name: 'key:cat' });
    lab(s, 236, 34, 'uncatalysed', { anchor: 'start', size: 11.5 });
    lab(s, 236, 52, 'enzyme-catalysed', { anchor: 'start', size: 11.5, color: C.amber });
    return s;
  },
  check(c: { panel: string }) {
    const s = fig104.draw(c), out: Check[] = [];
    if (c.panel === 'a') {
      const G = G104, e = [0, 1, 2].map((i) => lineOf(s, `enzyme${i}`));
      const same3 = e.every((pts, i) => pts.length === e[0].length && pts.every((p, k) => close(p[0] - G.e[i], e[0][k][0] - G.e[0], 1e-9) && close(p[1], e[0][k][1], 1e-9)));
      out.push(['The enzyme comes out as it went in: the third outline is the first, moved along, point for point', same3]);
      const bound = lineOf(s, 'bound'), wall = [e[1][0], e[1][1]], wall2 = [e[1][e[1].length - 2], e[1][e[1].length - 1]];
      const onLine = (p: P, a: P, b: P) => Math.abs(orient(a, b, p)) / len(a, b);
      const fit = [onLine(bound[1], wall[0], wall[1]), onLine(bound[2], wall2[0], wall2[1])];
      out.push([`Lock and key: the substrate's tip sits on the active site's apex (${fmt(len(bound[0], e[1][0]), 3)} px) and its two faces lie along the site's two walls (${fit.map((d) => fmt(d, 3)).join(', ')} px off), the site's half-angle ${fmt(PHI * 180 / Math.PI, 1)}° matching the tip's`, len(bound[0], e[1][0]) < 1e-9 && fit.every((d) => d < 1e-6)]);
      const S = area(lineOf(s, 'substrate')), p1 = area(lineOf(s, 'product1')), p2 = area(lineOf(s, 'product2'));
      out.push([`The products are the substrate split in two: ${fmt(p1, 1)} + ${fmt(p2, 1)} = ${fmt(p1 + p2, 1)} px², the substrate's ${fmt(S, 1)}; nothing of the enzyme goes into them`, close(p1 + p2, S, 1e-6) && close(area(lineOf(s, 'bound')), S, 1e-6)]);
      const steps = G.arrows.map((_, i) => lineOf(s, `step${i}`));
      out.push(['E + S → ES → E + products, left to right: each arrow points right and stands between the stages it joins', steps.every(([a, b]) => b[0] > a[0]) && steps[0][0][0] > G.s + G.L && steps[0][1][0] < G.e[1] - G.R && steps[1][0][0] > G.e[1] + G.apex + G.L && steps[1][1][0] < G.e[2] - G.R]);
      out.push(['The labels as printed: enzyme (E), substrate (S), ES complex, E + products (enzyme unchanged); the highlight is the substrate and what it becomes', ['enzyme', '(E)', 'substrate', '(S)', 'ES complex', 'E + products', '(enzyme unchanged)'].every((t) => hasLabel(s, t))]);
      out.push(...layout(s));
      return out;
    }
    const G = G104b, U = lineOf(s, 'uncatalysed'), K = lineOf(s, 'catalysed');
    const hU = G.base - Math.min(...U.map((p) => p[1])), hK = G.base - Math.min(...K.map((p) => p[1]));
    out.push([`Barriers read back off the curves: ${fmt(hU, 2)} and ${fmt(hK, 2)} px, a ratio of ${fmt(hK / hU, 3)}, the book's ${fmt(BOOK104.cat, 2)}/${fmt(BOOK104.uncat, 2)} = ${fmt(BOOK104.cat / BOOK104.uncat, 3)} (p. 501, path data): the catalysed path has the lower barrier`, close(hK / hU, BOOK104.cat / BOOK104.uncat, 1e-3) && hK < hU]);
    out.push(['The catalysed curve runs below the uncatalysed one at every point (same peak position, one width)', K.every((p, i) => p[1] >= U[i][1] - 1e-9)]);
    out.push([`Both paths start and end at the same level (within ${fmt(Math.max(...[U[0], U[U.length - 1], K[0], K[K.length - 1]].map((p) => G.base - p[1])), 3)} px): the enzyme changes the barrier, not the reactants, products or equilibrium, as the text says (p. 500)`, [U[0], U[U.length - 1], K[0], K[K.length - 1]].every((p) => G.base - p[1] < 0.02)]);
    const a = lineOf(s, 'Ea:uncat'), b = lineOf(s, 'Ea:cat');
    out.push(['Each Ea arrow spans exactly from the start level to its own peak; the catalysed one stands beside the other, its top on a guide drawn level with the catalysed peak', close(a[0][1], G.base) && close(G.base - a[1][1], hU, 0.02) && close(b[0][1], G.base) && close(G.base - b[1][1], hK, 0.02) && close(lineOf(s, 'guide')[0][1], b[1][1])]);
    out.push(['The labels as printed: energy, reaction coordinate, Ea twice, uncatalysed, enzyme-catalysed; one highlight, the catalysed path', ['energy', 'reaction coordinate', 'uncatalysed', 'enzyme-catalysed'].every((t) => hasLabel(s, t)) && labelsNamed(s, 'Ea').length === 2]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.5 · the DNA double helix (Topic 03, p. 503)                  */
/* ===================================================================== */
const CAP105 = 'The DNA double helix: sugar-phosphate rails, A=T and G≡C base-pair rungs, antiparallel 3′ and 5′ ends.';
/** p. 503, top to bottom: each rung's left and right base, as printed. */
const PAIRS105: [string, string][] = [['C', 'G'], ['T', 'A'], ['G', 'C'], ['A', 'T']];
const HB105: Record<string, number> = { A: 2, T: 2, G: 3, C: 3 };
const PARTNER: Record<string, string> = { A: 'T', T: 'A', G: 'C', C: 'G' };
const G105 = { L: 96, R: 244, top: 46, bot: 236, rungs: [74, 120, 166, 212], lx: 130, rx: 210, hb: [150, 190], head: 143 };
const fig105: Diagram = {
  id: 'c12-10-fig-10.5',
  topic: 2,
  name: 'The DNA double helix',
  cases: [{ chip: 'Antiparallel strands', cap: CAP105 }],
  draw() {
    const s = new Sketch(W, 308), G = G105;
    path(s, [[G.L, G.top], [G.L, G.bot]], { w: 3.4, name: 'rail:left' });
    path(s, [[G.R, G.top], [G.R, G.bot]], { w: 3.4, name: 'rail:right' });
    // the strand directions, 5′ → 3′: down the left rail, up the right
    head(s, [G.L, G.head - 12], [G.L, G.head + 6], C.ink, 11, 5.5);
    keep(s, [[G.L, G.head - 6], [G.L, G.head + 6]], 'dir:left');
    head(s, [G.R, G.head + 12], [G.R, G.head - 6], C.ink, 11, 5.5);
    keep(s, [[G.R, G.head + 6], [G.R, G.head - 6]], 'dir:right');
    lab(s, G.L, G.top - 10, '5′', { size: 15, bold: true });
    lab(s, G.R, G.top - 10, '3′', { size: 15, bold: true });
    lab(s, G.L, G.bot + 20, '3′', { size: 15, bold: true });
    lab(s, G.R, G.bot + 20, '5′', { size: 15, bold: true });
    PAIRS105.forEach(([a, b], i) => {
      const y = G.rungs[i], ra = lab(s, G.lx, y + 5.5, a, { size: 16, bold: true }), rb = lab(s, G.rx, y + 5.5, b, { size: 16, bold: true });
      path(s, [[G.L + 3, y], [ra[0] - 4.5, y]], { color: C.grey, w: 3, name: `rung${i}:l` });
      path(s, [[ra[2] + 4.5, y], [G.hb[0] - 3, y]], { color: C.grey, w: 3, name: `rung${i}:lm` });
      path(s, [[G.hb[1] + 3, y], [rb[0] - 4.5, y]], { color: C.grey, w: 3, name: `rung${i}:rm` });
      path(s, [[rb[2] + 4.5, y], [G.R - 3, y]], { color: C.grey, w: 3, name: `rung${i}:r` });
      const n = HB105[a], offs = n === 3 ? [-5, 0, 5] : [-3, 3];
      offs.forEach((dy, k) => path(s, [[G.hb[0], y + dy], [G.hb[1], y + dy]], { color: C.mari, w: 1.5, dash: true, name: `hb${i}:${k}` }));
    });
    lab(s, (G.hb[0] + G.hb[1]) / 2, 100, 'base pair (rung)', { size: 12, color: C.slate });
    path(s, [[(G.hb[0] + G.hb[1]) / 2, 106.8], [(G.hb[0] + G.hb[1]) / 2, 113]], { color: C.slate, w: 1.1, name: 'tick' });
    lab(s, 6, 214, 'sugar-phosphate', { anchor: 'start', size: 11, color: C.slate });
    lab(s, 6, 228, 'backbone', { anchor: 'start', size: 11, color: C.slate });
    path(s, [[80, 202], [94, 190]], { color: C.slate, w: 1.1, name: 'pointer' });
    lab(s, W / 2, 282, 'A=T: two H-bonds; G≡C: three H-bonds;', { size: 12.5, color: C.slate });
    lab(s, W / 2, 298, 'strands antiparallel', { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig105.draw(fig105.cases[0]), out: Check[] = [], G = G105;
    out.push([`Every rung pairs a purine with its complementary pyrimidine: ${PAIRS105.map(([a, b]) => `${a}–${b}`).join(', ')} (A with T, G with C)`, PAIRS105.every(([a, b]) => PARTNER[a] === b)]);
    const drawn = PAIRS105.map((_, i) => linesNamed(s, new RegExp(`^hb${i}:`)).length);
    out.push([`Hydrogen bonds drawn per rung: ${drawn.join(', ')}: two for each A–T, three for each G–C, as the line under the ladder says; ${drawn.reduce((a, b) => a + b, 0)} in all`, PAIRS105.every(([a], i) => drawn[i] === HB105[a]) && drawn.reduce((a, b) => a + b, 0) === 10]);
    const all = PAIRS105.flat(), n = (b: string) => all.filter((x) => x === b).length;
    out.push([`Chargaff's rule on the eight bases drawn: A ${n('A')} = T ${n('T')}, G ${n('G')} = C ${n('C')}; purines ${n('A') + n('G')} = pyrimidines ${n('T') + n('C')}`, n('A') === n('T') && n('G') === n('C') && n('A') + n('G') === n('T') + n('C')]);
    const dl = lineOf(s, 'dir:left'), dr = lineOf(s, 'dir:right'), five = labelsNamed(s, '5′').map((l) => centre(l.rect)), three = labelsNamed(s, '3′').map((l) => centre(l.rect));
    const fiveL = five.find((p) => p[0] < W / 2)!, threeL = three.find((p) => p[0] < W / 2)!, fiveR = five.find((p) => p[0] > W / 2)!, threeR = three.find((p) => p[0] > W / 2)!;
    out.push(['Antiparallel: the left strand runs 5′ (top) → 3′ (bottom) and its arrow points down; the right runs 5′ (bottom) → 3′ (top) and its arrow points up', dl[1][1] > dl[0][1] && fiveL[1] < threeL[1] && dr[1][1] < dr[0][1] && fiveR[1] > threeR[1]]);
    out.push(['The labels as printed, with real primes (U+2032): 5′ and 3′ at each end, the bases, base pair (rung), sugar-phosphate backbone, and the line under the ladder', five.length === 2 && three.length === 2 && ['base pair (rung)', 'sugar-phosphate', 'backbone', 'A=T: two H-bonds; G≡C: three H-bonds;', 'strands antiparallel'].every((t) => hasLabel(s, t)) && ['A', 'T', 'G', 'C'].every((b) => labelsNamed(s, b).length === 2)]);
    out.push([`The rungs evenly spaced (${G.rungs.slice(1).map((y, i) => y - G.rungs[i]).join(', ')} px) between the rails' ends, the highlight the hydrogen bonds`, G.rungs.slice(1).every((y, i) => y - G.rungs[i] === 46) && G.rungs[0] > G.top && G.rungs[3] < G.bot]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 10.6 · blood-glucose feedback (Topic 04, p. 511)                */
/* ===================================================================== */
const CAP106 = 'Blood-glucose feedback: insulin lowers a high level (storage as glycogen), glucagon raises a low one — an antagonistic pair.';
const COL106: [number, number][] = [[4, 100], [122, 218], [240, 336]], ROW106: [number, number][] = [[8, 62], [100, 154], [192, 246]];
/** p. 511, each box as printed (its line breaks ours) and where it stands. */
const BOX106: { id: string; c: number; r: number; lines: string[]; hi?: boolean }[] = [
  { id: 'level', c: 1, r: 1, lines: ['blood glucose', 'level'], hi: true },
  { id: 'high', c: 1, r: 0, lines: ['glucose HIGH', '(after a meal)'] },
  { id: 'insulin', c: 2, r: 0, lines: ['pancreas', 'releases', 'insulin'] },
  { id: 'cells', c: 2, r: 1, lines: ['glucose into', 'cells; stored', 'as glycogen'] },
  { id: 'low', c: 1, r: 2, lines: ['glucose LOW', '(fasting)'] },
  { id: 'glucagon', c: 0, r: 2, lines: ['pancreas', 'releases', 'glucagon'] },
  { id: 'glycogen', c: 0, r: 1, lines: ['glycogen broken', 'down to glucose'] },
];
const rect106 = (id: string): Rect => { const b = BOX106.find((q) => q.id === id)!; return [COL106[b.c][0], ROW106[b.r][0], COL106[b.c][1], ROW106[b.r][1]]; };
const mid106 = (id: string, side: 'top' | 'bottom' | 'left' | 'right'): P => { const r = rect106(id), cx = (r[0] + r[2]) / 2, cy = (r[1] + r[3]) / 2; return side === 'top' ? [cx, r[1]] : side === 'bottom' ? [cx, r[3]] : side === 'left' ? [r[0], cy] : [r[2], cy]; };
const FLOW106: [string, 'top' | 'bottom' | 'left' | 'right', string, 'top' | 'bottom' | 'left' | 'right'][] = [
  ['level', 'top', 'high', 'bottom'], ['high', 'right', 'insulin', 'left'], ['insulin', 'bottom', 'cells', 'top'], ['cells', 'left', 'level', 'right'],
  ['level', 'bottom', 'low', 'top'], ['low', 'left', 'glucagon', 'right'], ['glucagon', 'top', 'glycogen', 'bottom'], ['glycogen', 'right', 'level', 'left'],
];
/** What each step does to blood glucose: the deviation that starts a loop, and the hormone's effect that ends it. */
const SIGN106 = { high: 1, low: -1, cells: -1, glycogen: 1 } as const;
const fig106: Diagram = {
  id: 'c12-10-fig-10.6',
  topic: 3,
  name: 'Blood-glucose feedback',
  cases: [{ chip: 'Insulin and glucagon', cap: CAP106 }],
  draw() {
    const s = new Sketch(W, 280);
    BOX106.forEach((b) => box(s, b.id, rect106(b.id), b.lines.map((html) => ({ html, size: b.hi ? 12 : 11, bold: b.hi, color: b.hi ? C.amber : C.text })), b.hi ? { edge: C.mari, w: 1.8 } : { edge: C.ink, w: 1.3 }));
    FLOW106.forEach(([a, sa, b, sb]) => flow(s, [mid106(a, sa), mid106(b, sb)], `${a}>${b}`));
    // the two feedback notes, each beside its own loop's return and clear of every arrow (the errata's fix)
    lab(s, 52, 76, 'glucose rises', { size: 10.5, color: C.slate });
    lab(s, 52, 90, '(negative feedback)', { size: 10.5, color: C.slate });
    lab(s, 288, 172, 'glucose falls', { size: 10.5, color: C.slate });
    lab(s, 288, 186, '(negative feedback)', { size: 10.5, color: C.slate });
    lab(s, W / 2, 270, 'insulin and glucagon: an antagonistic pair', { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig106.draw(fig106.cases[0]), out: Check[] = [], F = flowsOf(s);
    const next = (id: string) => F.filter((f) => f.from === id).map((f) => f.to);
    const loop = (first: string) => { const seq = ['level', first]; while (seq.length < 6 && seq[seq.length - 1] !== 'level') seq.push(next(seq[seq.length - 1])[0] ?? '?'); return seq; };
    const loopU = loop('high'), loopD = loop('low');
    out.push([`Read back from where the arrows start and end: ${loopU.join(' → ')}; and ${loopD.join(' → ')}: two loops, each back to the blood level`, loopU.join() === 'level,high,insulin,cells,level' && loopD.join() === 'level,low,glucagon,glycogen,level' && next('level').sort().join() === 'high,low']);
    out.push([`Negative feedback in both: a high level (+) brings insulin, whose step lowers glucose (${SIGN106.cells}); a low level (−) brings glucagon, whose step raises it (+${SIGN106.glycogen}); each response opposes its deviation`, SIGN106.high * SIGN106.cells < 0 && SIGN106.low * SIGN106.glycogen < 0]);
    const pts = (n: string) => (FLOWS.get(s) ?? []).find((f) => f.name === n)!.pts, near = (t: string, k: number) => { const r = labelsNamed(s, t)[k].rect; return (FLOWS.get(s) ?? []).map((f) => ({ n: f.name, d: boxToLine(r, f.pts) })).sort((a, b) => a.d - b.d)[0]; };
    const rises = near('glucose rises', 0), falls = near('glucose falls', 0);
    out.push([`Each note stands nearest its own loop's return: "glucose rises" by ${rises.n} (${fmt(rises.d, 1)} px), "glucose falls" by ${falls.n} (${fmt(falls.d, 1)} px); neither sits between two arrows`, rises.n === 'glycogen>level' && falls.n === 'cells>level' && pts('glycogen>level').length === 2]);
    out.push([`Every box reads as printed: ${BOX106.map((b) => boxText(s, b.id)).join(' · ')}`, BOX106.map((b) => boxText(s, b.id)).join('|') === 'blood glucose level|glucose HIGH (after a meal)|pancreas releases insulin|glucose into cells; stored as glycogen|glucose LOW (fasting)|pancreas releases glucagon|glycogen broken down to glucose']);
    out.push(['The notes as printed: glucose rises (negative feedback), glucose falls (negative feedback), insulin and glucagon: an antagonistic pair', ['glucose rises', 'glucose falls', 'insulin and glucagon: an antagonistic pair'].every((t) => hasLabel(s, t)) && labelsNamed(s, '(negative feedback)').length === 2]);
    out.push([`One highlight: the ${highlighted(s).join()} box, the quantity held steady`, highlighted(s).join() === 'level']);
    out.push(...chartClear(s), labelsApart(s), inFrame(s));
    return out;
  },
};

/* ===================================================================== */
/* "Figure 1" · mutarotation of D-glucose (Additional A, p. 517)          */
/* ===================================================================== */
const CAPA1 = 'Mutarotation of D-glucose: the alpha anomer (+112°) and beta anomer (+19°) interconvert through the open-chain form, settling at the equilibrium rotation of about +52.5° (roughly 36% alpha, 64% beta).';
const AD = '[α]<sub>D</sub>';
/** p. 517, each box as printed, line for line. */
const BOXA1: { id: string; rect: Rect; lines: string[]; hi?: boolean }[] = [
  { id: 'open', rect: [100, 8, 240, 8 + hOf(4)], lines: ['open chain', 'free –CHO,', '< 0.5% at', 'equilibrium'] },
  { id: 'alpha', rect: [6, 118, 160, 118 + hOf(5)], lines: ['α-D-glucose', 'pyranose ring,', 'anomeric OH axial', `${AD} = +${ROT.alpha}°`, 'm.p. 419 K'] },
  { id: 'beta', rect: [180, 118, 334, 118 + hOf(5)], lines: ['β-D-glucose', 'pyranose ring,', 'all groups equatorial', `${AD} = +${ROT.beta}°`, 'm.p. 423 K'] },
  { id: 'mixture', rect: [10, 228, 330, 228 + hOf(2)], lines: [`equilibrium mixture: ${AD} ≈ +${ROT.eq}° (~36% α ∶ ~64% β)`, 'drift of rotation on standing = mutarotation'], hi: true },
];
/** The equilibrium arrows: x positions inside both boxes they join. */
const ARROWSA1: { x: number; from: string; to: string }[] = [
  { x: 118, from: 'open', to: 'alpha' }, { x: 134, from: 'alpha', to: 'open' },
  { x: 206, from: 'beta', to: 'open' }, { x: 222, from: 'open', to: 'beta' },
];
const figAd1: Diagram = {
  id: 'c12-10-A-d1',
  topic: 4,
  name: 'Mutarotation of D-glucose',
  cases: [{ chip: 'Three forms', cap: CAPA1 }],
  draw() {
    const s = new Sketch(W, 280);
    BOXA1.forEach((b) => box(s, b.id, b.rect, b.lines.map((html, i) => ({ html, size: i === 0 && !b.hi ? 11.5 : 11, bold: i === 0 && !b.hi, color: b.hi && i === 0 ? C.amber : C.text })), b.hi ? { edge: C.mari, w: 1.8 } : { edge: C.ink, w: 1.3 }));
    const r = (id: string) => BOXA1.find((b) => b.id === id)!.rect;
    ARROWSA1.forEach((a) => {
      const f = r(a.from), t = r(a.to), down = f[3] < t[1];
      flow(s, [[a.x, down ? f[3] : f[1]], [a.x, down ? t[1] : t[3]]], `${a.from}>${a.to}`);
    });
    return s;
  },
  check() {
    const s = figAd1.draw(figAd1.cases[0]), out: Check[] = [], F = flowsOf(s), has = (a: string, b: string) => F.some((f) => f.from === a && f.to === b);
    out.push([`Read back from where the arrows start and end: ${F.map((f) => `${f.from} → ${f.to}`).join(', ')}: α ⇌ open chain ⇌ β, and no arrow straight from α to β`, has('open', 'alpha') && has('alpha', 'open') && has('open', 'beta') && has('beta', 'open') && !has('alpha', 'beta') && !has('beta', 'alpha') && F.length === 4]);
    const x = (ROT.eq - ROT.beta) / (ROT.alpha - ROT.beta), back = 0.36 * ROT.alpha + 0.64 * ROT.beta;
    out.push([`The equilibrium from the printed rotations (p. 517): ${ROT.alpha}x + ${ROT.beta}(1 − x) = ${ROT.eq}, 93x = 33.5, x = ${fmt(x, 4)}: ~36% α, ~64% β, as the box and caption print; back again, 0.36 × ${ROT.alpha} + 0.64 × ${ROT.beta} = ${fmt(back, 2)}°, ${ROT.eq}° to the rounding`, Math.round(100 * x) === 36 && close(ROT.alpha - ROT.beta, 93) && close(ROT.eq - ROT.beta, 33.5, 1e-9) && Math.abs(back - ROT.eq) < 0.3]);
    out.push([`The mixture's rotation lies between the anomers' (+${ROT.beta}° < +${ROT.eq}° < +${ROT.alpha}°), nearer β's, the larger share; β (all groups equatorial) the more stable, as the text explains`, ROT.beta < ROT.eq && ROT.eq < ROT.alpha && ROT.eq - ROT.beta < ROT.alpha - ROT.eq]);
    out.push([`Every box reads as printed: ${BOXA1.map((b) => boxText(s, b.id)).join(' · ')}`, boxText(s, 'alpha') === 'α-D-glucose pyranose ring, anomeric OH axial [α]D = +112° m.p. 419 K' && boxText(s, 'beta') === 'β-D-glucose pyranose ring, all groups equatorial [α]D = +19° m.p. 423 K' && boxText(s, 'open') === 'open chain free –CHO, < 0.5% at equilibrium' && boxText(s, 'mixture') === 'equilibrium mixture: [α]D ≈ +52.5° (~36% α ∶ ~64% β) drift of rotation on standing = mutarotation']);
    out.push(['The caption carries the same three rotations and the same split as the boxes', CAPA1.includes(`+${ROT.alpha}°`) && CAPA1.includes(`+${ROT.beta}°`) && CAPA1.includes(`+${ROT.eq}°`) && CAPA1.includes('36% alpha, 64% beta')]);
    out.push([`One highlight: the ${highlighted(s).join()} box`, highlighted(s).join() === 'mixture']);
    out.push(...chartClear(s), labelsApart(s), inFrame(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_12_10: Diagram[] = [fig101, fig102, fig103, fig104, fig105, fig106, figAd1];

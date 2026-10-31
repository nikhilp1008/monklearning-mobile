import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 11, CHAPTER 10 (The p-Block Elements, Groups 13 and 14):
 * every drawing of the Master Reference book on pp. 456–502, redrawn. The
 * pages were checked one by one (vector-drawing count per page, then the page
 * images). Sections 1–9 (app Topics 01–06, pp. 456–474) print no drawing and
 * there is no "CHAPTER 10 · FIGURES" page: every drawing is in the Additional
 * Topics, captioned "Figure 1" … "Figure 8" in one run across the addenda.
 * Those numbers are the addenda's own, not chapter numbers "10.N", so each
 * takes the unnumbered id of its addendum (as Chapters 5, 7 and 8 did):
 *
 *   c11-10-A-d1  Figure 1, p. 476 (A1)  summed ionisation enthalpies, groups 13 and 14   topic 6, 2 panels
 *   c11-10-A-d2  Figure 2, p. 477 (A3)  ionisation cost of the group oxidation state     topic 6, 2 panels
 *   c11-10-C-d1  Figure 3, p. 481 (C1)  the borax anion [B₄O₅(OH)₄]²⁻                    topic 8
 *   c11-10-C-d2  Figure 4, p. 483 (C4)  diborane, terminal plane and bridges             topic 8
 *   c11-10-E-d1  Figure 5, p. 488 (E1)  graphite, plan and side views                    topic 10, 2 panels
 *   c11-10-E-d2  Figure 6, p. 488 (E1)  tetrahedral carbon in diamond                    topic 10
 *   c11-10-G-d1  Figure 7, p. 493 (G1)  the silicate anions of the corner-counting rule  topic 12, 6 panels
 *   c11-10-G-d2  Figure 8, p. 494 (G3)  the SiO₄ tetrahedron and the SiO₂ network        topic 12, 2 panels
 *
 * Judged NOT drawings: every table (group 13/14 property tables, the oxide and
 * trihalide tables, the bead-test colours, the silicate-rule table, the
 * allotrope comparison, the chlorosilane table, the Addendum P tables), the
 * typeset equations and the boxed answers.
 *
 * No fills (the book's dark discs, shading and red discs): two captions that
 * name them are reworded minimally to match the drawing (Figure 4 "(shaded)" →
 * "(outlined)"; Figure 7 "large dark circle" → "large circle marked Si",
 * "open circles" → "the small open circles", "red discs" → "circled minus
 * signs", and its panel note likewise). Expert review (Oct 31): Figure 1's
 * "Data: NCERT Tables 11.2 and 11.3" → "Data: NCERT (earlier edition)", and
 * the polymer n is italic in the silicate heads, as in the text.
 *
 * Everything is computed, never placed by eye:
 *   A — the bars are summed from NCERT's step-by-step ionisation enthalpies
 *     and must equal every value the book prints; the zigzag, the first
 *     member's lead and the "Tl > In, Pb > Sn" order are read off those sums.
 *   C-d1 — the anion is atoms and bonds; the check counts B₄O₅(OH)₄, computes
 *     each formal charge (V − 2·lone pairs − bonds), the 2− total, the electron
 *     total, and finds the two six-membered B₃O₃ rings sharing B–O–B.
 *   C-d2 — diborane in 3D (terminal 119 pm, bridge 133 pm, B···B 177 pm),
 *     projected; the check reads the six in-plane atoms back as coplanar, the
 *     bridges above and below in the perpendicular plane, and the electron count.
 *   E — graphite as a honeycomb of 141.5 pm bonds (every angle 120°), side view
 *     to one scale (340 pm between layers, 122.5 pm between atoms seen edge-on);
 *     diamond as a cube of edge 2 × 154/√3 pm with the four neighbours on
 *     alternate corners (every C–C–C 109.47°).
 *   G — every silicate panel is Si, bridging O and terminal O⁻ as atoms and
 *     bonds; the check counts corners shared, formula and charge, and tests
 *     the rule SiO₄₋ₛ/₂, −(4 − s) on each.
 */

const W = 340;
type P = [number, number];
type V3 = [number, number, number];
const D2R = Math.PI / 180;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 1) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P): P => [a[0] + b[0], a[1] + b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const mul = (a: P, k: number): P => [a[0] * k, a[1] * k];
const mid = (a: P, b: P): P => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const unit = (a: P): P => { const l = Math.hypot(a[0], a[1]) || 1; return [a[0] / l, a[1] / l]; };
/** A unit vector at `deg` degrees on screen (x right, y DOWN: 90° points down). */
const dir = (deg: number): P => [Math.cos(deg * D2R), Math.sin(deg * D2R)];
const perp = (a: P): P => [-a[1], a[0]];
const angleAt = (a: P, o: P, b: P) => { const u = unit(sub(a, o)), v = unit(sub(b, o)); return Math.acos(Math.max(-1, Math.min(1, u[0] * v[0] + u[1] * v[1]))) / D2R; };
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
/** 6887 → "6,887", as the book prints the bar values. */
const thou = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const dot3 = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const sub3 = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add3 = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const mul3 = (a: V3, k: number): V3 => [a[0] * k, a[1] * k, a[2] * k];
const len3 = (a: V3) => Math.sqrt(dot3(a, a));
const ang3 = (a: V3, b: V3) => Math.acos(Math.max(-1, Math.min(1, dot3(a, b) / (len3(a) * len3(b))))) / D2R;
const TETRA = Math.acos(-1 / 3) / D2R;

/* ---------- drawing helpers (as in chemistry-11-04b.ts / -08.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="5 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');
/** Every line a label must keep clear of (bonds, outlines, arrows), by sketch. */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
  if (!o.free) keep(s, pts);
}
/** A circle, never filled. */
function circle(s: Sketch, c: P, r: number, o: Stroke = {}) {
  s.add(`<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.6}"${dashOf(o.dash)}/>`);
  if (!o.free) keep(s, Array.from({ length: 49 }, (_, i): P => [c[0] + r * Math.cos((2 * Math.PI * i) / 48), c[1] + r * Math.sin((2 * Math.PI * i) / 48)]));
}
/** A line with a head at each end (a spacing). */
function both(s: Sketch, a: P, b: P, col: string) {
  s.vec(a[0], a[1], b[0], b[1], { color: col, w: 1.6 });
  s.vec(b[0], b[1], a[0], a[1], { color: col, w: 1.6 });
  keep(s, [a, b]);
}
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
function clearance(s: Sketch): { gap: number; what: string } {
  let gap = Infinity, what = '';
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  for (const pts of LINES.get(s) ?? []) {
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
      for (let k = 0; k <= n; k++) {
        const p: P = [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n];
        for (const [name, r] of boxes) { const d = rectDist(r, p); if (d < gap) { gap = d; what = name; } }
      }
    }
  }
  return { gap, what };
}
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  return [`Every tag and label stays at least ${LABEL_GAP} px clear of every bond and line: the closest is "${what}", ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9];
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
/** How many marigold strokes the drawing has (one highlight per drawing). */
const mariCount = (s: Sketch) => (s.svg().match(new RegExp(`<(path|circle) [^>]*stroke="${C.mari}"`, 'g')) ?? []).length;

/**
 * A spot for a value beside a line: the first point, along the line's middle and out to either side,
 * where the value's box clears every line drawn so far by 5 px. Returns its baseline point.
 */
function clearSpot(s: Sketch, seg: [P, P], html: string, size: number): [number, number] {
  const u = unit(sub(seg[1], seg[0])), n = perp(u), w = plain(html).length * size * 0.5, lines = LINES.get(s) ?? [];
  const boxAt = (c: P): Rect => [c[0] - w / 2, c[1] - size * 0.47, c[0] + w / 2, c[1] + size * 0.47];
  const gapOf = (r: Rect) => Math.min(...lines.flatMap((pts) => pts.slice(1).flatMap((b, i) => { const a = pts[i], k = Math.max(1, Math.ceil(len(a, b))); return Array.from({ length: k + 1 }, (_, j) => rectDist(r, [a[0] + ((b[0] - a[0]) * j) / k, a[1] + ((b[1] - a[1]) * j) / k])); })));
  for (const d of [16, 20, 24, 28, 32, 36, 40]) for (const f of [0.5, 0.4, 0.6, 0.3, 0.7]) for (const sg of [1, -1]) {
    const c = add(add(seg[0], mul(sub(seg[1], seg[0]), f)), mul(n, sg * d)), r = boxAt(c);
    if (r[0] > 2 && r[2] < s.w - 2 && r[1] > 2 && r[3] < s.h - 2 && gapOf(r) >= 5) return [c[0], c[1] + size * 0.25];
  }
  const m = mid(seg[0], seg[1]);
  return [m[0], m[1]];
}

/* ---------- atoms ---------- */
/** The box an element symbol takes, centred on its atom: its true STIX width, cap height. */
const atomRect = (p: P, el: string, size: number): Rect => { const w = mathW(el, size); return [p[0] - w / 2, p[1] - 0.36 * size, p[0] + w / 2, p[1] + 0.36 * size]; };
/** An element symbol centred on its atom, registered as a label (tags and lines keep clear of it). */
function atomSym(s: Sketch, p: P, el: string, size: number, o: { color?: string; bold?: boolean } = {}) {
  s.labels.push({ text: plain(el), rect: atomRect(p, el, size) });
  s.text(p[0], p[1] + 0.33 * size, el, { size, color: o.color ?? C.text, semibold: o.bold });
}
/** Walk from a toward b until the point is `gap` px clear of every box (a bond stops short of the symbols it joins). */
function trim(a: P, b: P, boxes: Rect[], gap = LABEL_GAP + 0.3): P {
  const u = unit(sub(b, a)), L = len(a, b);
  for (let t = 0; t < L; t += 0.25) { const p = add(a, mul(u, t)); if (boxes.every((r) => rectDist(r, p) >= gap)) return p; }
  return b;
}
/** Where a bond leaves an atom: a circle's edge, or clear of a symbol's box. */
type Stop = { r?: number; rect?: Rect };
const leave = (from: P, to: P, st: Stop): P => (st.r !== undefined ? add(from, mul(unit(sub(to, from)), st.r)) : st.rect ? trim(from, to, [st.rect]) : from);
function bond(s: Sketch, a: P, sa: Stop, b: P, sb: Stop, o: Stroke = {}): [P, P] {
  const p = leave(a, b, sa), q = leave(b, a, sb);
  path(s, [p, q], { w: 1.8, ...o });
  return [p, q];
}

/* ===================================================================== */
/* Figures 1 and 2 · summed ionisation enthalpies (Addendum A, pp. 476–477) */
/* ===================================================================== */
/** NCERT's step-by-step ionisation enthalpies, ΔiH₁ … ΔiH₃ (group 13) and ΔiH₁ … ΔiH₄ (group 14), kJ mol⁻¹. */
const IE: Record<string, number[]> = {
  B: [801, 2427, 3659], Al: [577, 1816, 2744], Ga: [579, 1979, 2962], In: [558, 1820, 2704], Tl: [589, 1971, 2877],
  C: [1086, 2352, 4620, 6220], Si: [786, 1577, 3228, 4354], Ge: [761, 1537, 3300, 4409], Sn: [708, 1411, 2942, 3929], Pb: [715, 1450, 3081, 4082],
};
const sumOf = (el: string, steps: number[]) => steps.reduce((t, k) => t + IE[el][k], 0);
type BarCase = { chip: string; cap: string; title: string; els: string[]; steps: number[]; book: number[]; ymax: number; ystep: number; hi: number };
const BC = { ox: 66, top: 66, oy: 222, x1: W - 10, h: 252, bw: 30 };
const DRAWNBARS = new WeakMap<Sketch, { el: string; top: number; label: string; hi: boolean }[]>();
const barY = (c: BarCase, v: number) => BC.oy - ((BC.oy - BC.top) * v) / c.ymax;
const barX = (c: BarCase, i: number) => BC.ox + ((BC.x1 - BC.ox) * (i + 0.5)) / c.els.length;
function drawBars(c: BarCase): Sketch {
  const s = new Sketch(W, BC.h), rec: { el: string; top: number; label: string; hi: boolean }[] = [];
  s.sym(W / 2, 24, c.title, { size: 14 });
  s.vec(BC.ox, BC.oy, BC.ox, BC.top - 14, { color: C.grey, w: 1.3 });
  s.line(BC.ox, BC.oy, BC.x1, BC.oy, { color: C.grey, w: 1.3 });
  for (let v = 0; v <= c.ymax; v += c.ystep) { s.line(BC.ox - 4, barY(c, v), BC.ox, barY(c, v), { color: C.grey, w: 1.2 }); s.sym(BC.ox - 7, barY(c, v) + 4, thou(v), { size: 11, anchor: 'end', color: C.slate }); }
  s.sym(BC.ox - 8, BC.top - 18, 'kJ mol<sup>−1</sup>', { size: 12, anchor: 'end', color: C.slate });
  c.els.forEach((el, i) => {
    const v = sumOf(el, c.steps), x = barX(c, i), y = barY(c, v), hi = i === c.hi;
    path(s, [[x - BC.bw / 2, BC.oy], [x - BC.bw / 2, y], [x + BC.bw / 2, y], [x + BC.bw / 2, BC.oy]], { color: hi ? C.mari : C.ink, w: hi ? 2.4 : 1.7 });
    s.sym(x, y - 7, thou(v), { size: 11.5, color: hi ? C.amber : C.text });
    s.sym(x, BC.oy + 19, el, { size: 13 });
    rec.push({ el, top: y, label: thou(v), hi });
  });
  DRAWNBARS.set(s, rec);
  return s;
}
/** The checks every bar panel passes: data, bars read back, one highlight, axis. */
function barChecks(c: BarCase): Check[] {
  const s = drawBars(c), rec = DRAWNBARS.get(s)!, sums = c.els.map((e) => sumOf(e, c.steps));
  const stepName = c.steps.map((k) => `ΔiH${k + 1}`).join(' + ');
  return [
    [`${stepName} from NCERT's step-by-step values: ${c.els.map((e, i) => `${e} ${c.steps.map((k) => IE[e][k]).join(' + ')} = ${sums[i]}`).join('; ')} — the book prints ${c.book.join(', ')}`, sums.every((v, i) => v === c.book[i])],
    [`Each bar read back off the drawing stands at its value (${rec.map((r) => `${r.el} ${fmt(((BC.oy - r.top) * c.ymax) / (BC.oy - BC.top), 0)}`).join(', ')}) and is labelled with it as the book prints it`, rec.every((r, i) => close(((BC.oy - r.top) * c.ymax) / (BC.oy - BC.top), sums[i], 1e-9) && r.label === thou(c.book[i]))],
    [`One bar highlighted, ${c.els[c.hi]}, as in the book; nothing else marigold`, rec.filter((r) => r.hi).length === 1 && rec[c.hi].hi && mariCount(drawBars(c)) === 1],
    [`The axis runs 0–${thou(c.ymax)} in steps of ${thou(c.ystep)}, as the book's, and every bar fits under the top`, Math.max(...sums) < c.ymax && c.ymax % c.ystep === 0],
    ...layout(s),
  ];
}
const CAPA1 = 'Summed ionisation enthalpies for groups 13 and 14. The highlighted first member is far above the rest; in both groups the sequence zigzags at the elements that follow a filled d (and f) subshell. Data: NCERT (earlier edition).';
const CASESA1: BarCase[] = [
  { chip: 'Group 13', cap: CAPA1, title: 'Group 13: Δ<sub>i</sub><i>H</i><sub>1</sub> + Δ<sub>i</sub><i>H</i><sub>2</sub> + Δ<sub>i</sub><i>H</i><sub>3</sub>', els: ['B', 'Al', 'Ga', 'In', 'Tl'], steps: [0, 1, 2], book: [6887, 5137, 5520, 5082, 5437], ymax: 8000, ystep: 1000, hi: 0 },
  { chip: 'Group 14', cap: CAPA1, title: 'Group 14: Δ<sub>i</sub><i>H</i><sub>1</sub> + … + Δ<sub>i</sub><i>H</i><sub>4</sub>', els: ['C', 'Si', 'Ge', 'Sn', 'Pb'], steps: [0, 1, 2, 3], book: [14278, 9945, 10007, 8990, 9328], ymax: 15000, ystep: 2500, hi: 0 },
];
const figA1: Diagram = {
  id: 'c11-10-A-d1',
  topic: 6,
  name: 'Summed ionisation enthalpies, groups 13 and 14',
  cases: CASESA1,
  draw: (c: BarCase) => drawBars(c),
  check(c: BarCase) {
    const v = c.els.map((e) => sumOf(e, c.steps)), rest = Math.max(...v.slice(1));
    // the elements after a filled d subshell (Ga, Ge: 3d¹⁰) and after filled 4f and 5d (Tl, Pb) rise above the one before
    return [
      ...barChecks(c),
      [`The first member is far above the rest: ${c.els[0]} ${v[0]} against at most ${rest}, ${v[0] - rest} more`, v[0] - rest > 1000],
      [`The zigzag: ${c.els[2]} (after the 3d¹⁰ core) rises above ${c.els[1]} (${v[2]} > ${v[1]}), ${c.els[3]} falls (${v[3]}), ${c.els[4]} (after 4f¹⁴5d¹⁰) rises again (${v[4]} > ${v[3]})`, v[2] > v[1] && v[3] < v[2] && v[4] > v[3]],
      ...(c.els[0] === 'B' ? [[`Point 3 of the text: B − Al = ${v[0]} − ${v[1]} = ${v[0] - v[1]} (the book's 1750)`, v[0] - v[1] === 1750] as Check] : []),
    ];
  },
};
const CAPA2 = 'The ionisation cost of moving from the lower to the group oxidation state. Tl costs more than In, and Pb more than Sn. Summed from NCERT data.';
const CASESA2: BarCase[] = [
  { chip: '+1 to +3', cap: CAPA2, title: '+1 to +3:  Δ<sub>i</sub><i>H</i><sub>2</sub> + Δ<sub>i</sub><i>H</i><sub>3</sub>', els: ['Al', 'Ga', 'In', 'Tl'], steps: [1, 2], book: [4560, 4941, 4524, 4848], ymax: 6000, ystep: 1000, hi: 3 },
  { chip: '+2 to +4', cap: CAPA2, title: '+2 to +4:  Δ<sub>i</sub><i>H</i><sub>3</sub> + Δ<sub>i</sub><i>H</i><sub>4</sub>', els: ['Si', 'Ge', 'Sn', 'Pb'], steps: [2, 3], book: [7582, 7709, 6871, 7163], ymax: 8000, ystep: 2000, hi: 3 },
];
const figA2: Diagram = {
  id: 'c11-10-A-d2',
  topic: 6,
  name: 'Cost of reaching the group oxidation state',
  cases: CASESA2,
  draw: (c: BarCase) => drawBars(c),
  check(c: BarCase) {
    const v = c.els.map((e) => sumOf(e, c.steps));
    return [
      ...barChecks(c),
      [`As the caption says, the heaviest costs more than the one above it: ${c.els[3]} ${v[3]} > ${c.els[2]} ${v[2]}`, v[3] > v[2]],
      ...(c.els[0] === 'Al' ? [[`As the text says, gallium has the highest cost from aluminium to thallium: Ga ${v[1]} is the largest of ${v.join(', ')}`, Math.max(...v) === v[1]] as Check] : []),
    ];
  },
};

/* ===================================================================== */
/* Figure 3 · the borax anion (Addendum C1, p. 481)                       */
/* ===================================================================== */
const CAPC1 = 'The borax anion [B<sub>4</sub>O<sub>5</sub>(OH)<sub>4</sub>]<sup>2−</sup>. The two tetrahedral borons (carrying the negative charge) are joined by a shared oxygen and also through the two trigonal borons; each boron bears one hydroxyl group.';
type BAtom = { id: string; el: 'B' | 'O' | 'OH'; p: P };
/** The book's flat drawing: a diamond of four borons (trigonal top and bottom, tetrahedral left and right), an O on each edge, a shared O in the middle, an OH on each boron. */
const BX = { c: [150, 168] as P, r: 70, oh: 42, size: 16 };
function borax(): { atoms: BAtom[]; bonds: [string, string][] } {
  const { c, r, oh } = BX;
  const B: Record<string, P> = { Bt: add(c, [0, -r]), Bb: add(c, [0, r]), Bl: add(c, [-r, 0]), Br: add(c, [r, 0]) };
  const atoms: BAtom[] = [
    ...Object.entries(B).map(([id, p]): BAtom => ({ id, el: 'B', p })),
    { id: 'O1', el: 'O', p: mid(B.Bl, B.Bt) }, { id: 'O2', el: 'O', p: mid(B.Bt, B.Br) }, { id: 'O3', el: 'O', p: mid(B.Br, B.Bb) }, { id: 'O4', el: 'O', p: mid(B.Bb, B.Bl) },
    { id: 'Oc', el: 'O', p: c },
    { id: 'Ht', el: 'OH', p: add(B.Bt, [0, -oh]) }, { id: 'Hb', el: 'OH', p: add(B.Bb, [0, oh]) }, { id: 'Hl', el: 'OH', p: add(B.Bl, [-oh - 2, 0]) }, { id: 'Hr', el: 'OH', p: add(B.Br, [oh + 2, 0]) },
  ];
  const bonds: [string, string][] = [['Bl', 'O1'], ['O1', 'Bt'], ['Bt', 'O2'], ['O2', 'Br'], ['Br', 'O3'], ['O3', 'Bb'], ['Bb', 'O4'], ['O4', 'Bl'], ['Bl', 'Oc'], ['Oc', 'Br'], ['Bt', 'Ht'], ['Bb', 'Hb'], ['Bl', 'Hl'], ['Br', 'Hr']];
  return { atoms, bonds };
}
const TET = ['Bl', 'Br'];
const figC1: Diagram = {
  id: 'c11-10-C-d1',
  topic: 8,
  name: 'The borax anion',
  cases: [{ chip: '[B₄O₅(OH)₄]²⁻', cap: CAPC1 }],
  draw() {
    const s = new Sketch(W, 346), m = borax(), sz = BX.size;
    const at = (id: string) => m.atoms.find((a) => a.id === id)!;
    const box = (a: BAtom) => atomRect(a.p, a.el, sz);
    m.bonds.forEach(([a, b]) => bond(s, at(a).p, { rect: box(at(a)) }, at(b).p, { rect: box(at(b)) }));
    m.atoms.forEach((a) => atomSym(s, a.p, a.el, sz, { color: TET.includes(a.id) ? C.amber : C.text }));
    TET.forEach((id) => { const p = at(id).p, q = add(p, mul(dir(id === 'Bl' ? -140 : -40), 17)); s.labels.push({ text: '−', rect: [q[0] - 4.5, q[1] - 4.5, q[0] + 4.5, q[1] + 4.5] }); s.text(q[0], q[1] + 4.6, '−', { size: 14, color: C.amber }); });
    s.sym(W - 8, 28, '[B<sub>4</sub>O<sub>5</sub>(OH)<sub>4</sub>]<sup>2−</sup>', { size: 15, anchor: 'end' });
    s.sym(W - 8, 50, '5 O in the framework,', { size: 11.5, anchor: 'end', color: C.slate });
    s.sym(W - 8, 65, '4 O in OH groups', { size: 11.5, anchor: 'end', color: C.slate });
    // the book's key: its two kinds of boron
    s.sym(26, 308, 'B<sup>−</sup>', { size: 15, color: C.amber });
    s.sym(46, 308, 'sp<sup>3</sup> B, four O (two of these B)', { size: 12, anchor: 'start', color: C.slate });
    s.sym(26, 330, 'B', { size: 15 });
    s.sym(46, 330, 'sp<sup>2</sup> B, three O (two of these B)', { size: 12, anchor: 'start', color: C.slate });
    return s;
  },
  check() {
    const s = figC1.draw(figC1.cases[0]), m = borax(), out: Check[] = [];
    const nb = (id: string) => m.bonds.filter((b) => b.includes(id)).map((b) => (b[0] === id ? b[1] : b[0]));
    const el = (id: string) => m.atoms.find((a) => a.id === id)!.el;
    const nB = m.atoms.filter((a) => a.el === 'B').length, frame = m.atoms.filter((a) => a.el === 'O').length, nOH = m.atoms.filter((a) => a.el === 'OH').length;
    out.push([`Atoms counted off the drawing: B${nB}, framework O ${frame}, OH ${nOH} ⇒ B₄O₅(OH)₄, as the heading; 5 O in the framework, 4 in OH groups`, nB === 4 && frame === 5 && nOH === 4]);
    out.push(['Every framework O bridges two borons; each boron bears exactly one OH', m.atoms.filter((a) => a.el === 'O').every((a) => nb(a.id).length === 2 && nb(a.id).every((x) => el(x) === 'B')) && m.atoms.filter((a) => a.el === 'B').every((a) => nb(a.id).filter((x) => el(x) === 'OH').length === 1)]);
    const coord = m.atoms.filter((a) => a.el === 'B').map((a) => ({ id: a.id, n: nb(a.id).length }));
    out.push([`Two borons have four O (sp³, tetrahedral: ${coord.filter((c) => c.n === 4).map((c) => c.id).join(', ')}) and two have three (sp², trigonal: ${coord.filter((c) => c.n === 3).map((c) => c.id).join(', ')}), as the key says; the amber B⁻ are the four-O ones`, coord.filter((c) => c.n === 4).map((c) => c.id).join() === TET.join() && coord.filter((c) => c.n === 3).length === 2]);
    // formal charges: B (V 3, no lone pairs), O (V 6) with an octet's lone pairs, OH counted as O with one more bond to H
    const fc = m.atoms.map((a) => { const bonds = nb(a.id).length + (a.el === 'OH' ? 1 : 0); if (a.el === 'B') return 3 - bonds; const lp = (8 - 2 * bonds) / 2; return 6 - 2 * lp - bonds; });
    const q = fc.reduce((t, x) => t + x, 0);
    out.push([`Formal charges (V − 2·lone pairs − bonds): each four-O boron 3 − 0 − 4 = −1, each three-O boron 0, every O 6 − 4 − 2 = 0; sum ${q}: the anion's 2−, carried by the two tetrahedral borons`, q === -2 && m.atoms.every((a, i) => (TET.includes(a.id) ? fc[i] === -1 : fc[i] === 0))]);
    const nBonds = m.bonds.length + nOH, lps = (frame + nOH) * 2, val = 4 * 3 + 9 * 6 + 4 * 1 + 2;
    out.push([`Electrons: 4(3) + 9(6) + 4(1) + 2 = ${val}; ${nBonds} bonds (${m.bonds.length} B–O, ${nOH} O–H) and ${lps} lone pairs on O hold 2(${nBonds}) + 2(${lps}) = ${2 * nBonds + 2 * lps}`, val === 2 * nBonds + 2 * lps]);
    // the rings: from Bl back to Bl through Oc and through each trigonal boron
    const top = ['Bl', 'O1', 'Bt', 'O2', 'Br', 'Oc'], bot = ['Bl', 'O4', 'Bb', 'O3', 'Br', 'Oc'];
    const isRing = (r: string[]) => r.every((a, i) => nb(a).includes(r[(i + 1) % r.length]));
    out.push(['The framework is two six-membered B₃O₃ rings (Bl–O–Bt–O–Br–O and Bl–O–Bb–O–Br–O) sharing the B–O–B unit between the two tetrahedral borons', isRing(top) && isRing(bot) && top.filter((a) => bot.includes(a)).join() === 'Bl,Br,Oc']);
    out.push(['As the caption says, the two tetrahedral borons are joined by a shared oxygen (Oc) and also through each trigonal boron (Bl–O–Bt–O–Br, Bl–O–Bb–O–Br)', nb('Oc').sort().join() === 'Bl,Br' && ['Bt', 'Bb'].every((t) => nb(t).filter((o) => el(o) === 'O').every((o) => nb(o).some((x) => TET.includes(x))))]);
    out.push(['Drawn flat as the book draws it (a schematic: the real anion is puckered round its tetrahedral borons)', true]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 4 · diborane (Addendum C4, p. 483)                              */
/* ===================================================================== */
const CAPC2 = 'The structure of diborane. Two boron atoms and four terminal hydrogens lie in one plane (outlined); the two bridging hydrogens lie above and below it, in a plane perpendicular to the first. The terminal bonds are two-centre bonds; each bridge is a three-centre two-electron bond.';
/**
 * In picometres: the book's terminal B–H 119 and bridge B–H 133; B···B 177 pm and H–B–H (terminal) 121.5°,
 * which the figure needs and the book does not give, are the standard values (as Chapter 4's Figure 4.7).
 * x along B–B, y across the terminal plane, z up; seen turned AZ° and from EL° above the plane.
 */
const DB = { term: 119, bridge: 133, BB: 177, HtBHt: 121.5, k: 0.74, c: [170, 136] as P, az: -8, el: 26, plane: [200, 152] as [number, number] };
function db3() {
  const { term, bridge, BB, HtBHt } = DB, hb = Math.sqrt(bridge ** 2 - (BB / 2) ** 2), h = (HtBHt / 2) * D2R;
  const B1: V3 = [-BB / 2, 0, 0], B2: V3 = [BB / 2, 0, 0];
  const t = (B: V3, sx: number, sy: number): V3 => [B[0] + sx * term * Math.cos(h), sy * term * Math.sin(h), 0];
  return { B: [B1, B2], Ht: [t(B1, -1, 1), t(B1, -1, -1), t(B2, 1, 1), t(B2, 1, -1)], Hb: [[0, 0, hb], [0, 0, -hb]] as V3[] };
}
const projDB = (v: V3): P => {
  const a = DB.az * D2R, e = DB.el * D2R, x1 = v[0] * Math.cos(a) - v[1] * Math.sin(a), y1 = v[0] * Math.sin(a) + v[1] * Math.cos(a);
  return [DB.c[0] + DB.k * x1, DB.c[1] - DB.k * (v[2] * Math.cos(e) + y1 * Math.sin(e))];
};
const planeCorners = (): V3[] => [[-DB.plane[0], -DB.plane[1], 0], [DB.plane[0], -DB.plane[1], 0], [DB.plane[0], DB.plane[1], 0], [-DB.plane[0], DB.plane[1], 0]];
const figC2: Diagram = {
  id: 'c11-10-C-d2',
  topic: 8,
  name: 'Diborane',
  cases: [{ chip: 'B₂H₆', cap: CAPC2 }],
  draw() {
    const s = new Sketch(W, 330), g = db3(), szB = 18, szH = 16;
    const B = g.B.map(projDB), Ht = g.Ht.map(projDB), Hb = g.Hb.map(projDB);
    const corners = planeCorners().map(projDB);
    path(s, [...corners, corners[0]], { color: C.grey, w: 1.3 });
    const rB = (p: P) => ({ rect: atomRect(p, 'B', szB) }), rH = (p: P) => ({ rect: atomRect(p, 'H', szH) });
    const term = Ht.map((h, i) => bond(s, B[i < 2 ? 0 : 1], rB(B[i < 2 ? 0 : 1]), h, rH(h)));
    const bridge = Hb.map((h) => B.map((b) => bond(s, b, rB(b), h, rH(h), { color: C.mari, w: 2.2, dash: 'dash' })));
    B.forEach((p) => atomSym(s, p, 'B', szB));
    Ht.forEach((p) => atomSym(s, p, 'H', szH, { color: C.slate }));
    Hb.forEach((p) => atomSym(s, p, 'H', szH, { color: C.amber }));
    s.sym(Hb[0][0] + 13, Hb[0][1] + 4, 'above the plane', { size: 12, anchor: 'start', color: C.amber });
    s.sym(Hb[1][0], Hb[1][1] + 25, 'below the plane', { size: 12, color: C.amber });
    s.sym(10, 302, 'each B is sp<sup>3</sup>', { size: 12, anchor: 'start', color: C.slate });
    s.sym(10, 320, 'bridge bonds are longer and weaker than terminal', { size: 12, anchor: 'start', color: C.slate });
    const up = bridge[0][0], front = term[1], edge = mid(corners[1], corners[2]);
    s.place([
      { t: 'bridge B–H–B: 3c–2e, 133 pm', hi: true, p: mid(up[0], up[1]), at: [[8, 14, 'start'], [8, 22, 'start'], [8, 30, 'start']] },
      { t: 'terminal B–H: 2c–2e, 119 pm', p: mid(front[0], front[1]), at: [[8, 234, 'start'], [8, 240, 'start'], [8, 228, 'start']] },
      { t: 'plane of the B and four terminal H', p: edge, at: [[W - 6, 264, 'end'], [W - 6, 268, 'end'], [W - 6, 260, 'end']] },
    ]);
    return s;
  },
  check() {
    const s = figC2.draw(figC2.cases[0]), g = db3();
    const t = g.Ht.map((h, i) => len3(sub3(h, g.B[i < 2 ? 0 : 1]))), b = g.B.flatMap((B) => g.Hb.map((h) => len3(sub3(h, B))));
    const n1: V3 = [0, 0, 1], n2: V3 = [0, 1, 0];
    const inPlane = [...g.B, ...g.Ht].every((v) => close(v[2], 0, 1e-12));
    const bridgePlane = [...g.B, ...g.Hb].every((v) => close(dot3(v, n2), 0, 1e-12));
    const HbBHb = ang3(sub3(g.Hb[0], g.B[0]), sub3(g.Hb[1], g.B[0])), BHB = ang3(sub3(g.B[0], g.Hb[0]), sub3(g.B[1], g.Hb[0])), HtBHt = ang3(sub3(g.Ht[0], g.B[0]), sub3(g.Ht[1], g.B[0]));
    // the outline holds the six in-plane atoms
    const inside = [...g.B, ...g.Ht].every((v) => Math.abs(v[0]) < DB.plane[0] && Math.abs(v[1]) < DB.plane[1]);
    return [
      ['Valence electrons 2(3) + 6(1) = 12: four 2c–2e terminal bonds use 8, the two 3c–2e bridges the remaining 4', 2 * 3 + 6 === 12 && 4 * 2 + 2 * 2 === 12],
      [`Every terminal B–H is ${t.map((x) => fmt(x, 3)).join(', ')} pm (the book's 119), every bridge B–H ${b.map((x) => fmt(x, 3)).join(', ')} pm (the book's 133), in 3D before projection`, t.every((x) => close(x, 119, 1e-9)) && b.every((x) => close(x, 133, 1e-9))],
      ['The bridge bonds are longer than the terminal ones (the book: longer and weaker)', Math.min(...b) > Math.max(...t)],
      ['As the caption says: both B and the four terminal H lie in one plane (z = 0), all six inside its outline; the bridging H lie one above (z > 0) and one below (z < 0)', inPlane && inside && g.Hb[0][2] > 0 && g.Hb[1][2] < 0],
      ['The bridging H and both B lie in the plane y = 0, perpendicular to the terminal plane (normals (0, 1, 0) · (0, 0, 1) = 0)', bridgePlane && close(dot3(n1, n2), 0)],
      [`Each B has four partners (two terminal H, two bridging H): sp³ as the drawing says; angles H–B–H ${fmt(HtBHt)}° terminal, ${fmt(HbBHb)}° bridge, B–H–B ${fmt(BHB)}°`, close(HtBHt, DB.HtBHt, 1e-9) && HbBHb < 109.5 && BHB < 90],
      ['The drawing is these 3D positions projected: the upper bridging H is drawn above both B, the lower one below', projDB(g.Hb[0])[1] < Math.min(...g.B.map((v) => projDB(v)[1])) && projDB(g.Hb[1])[1] > Math.max(...g.B.map((v) => projDB(v)[1]))],
      ['One highlight: the two bridges (marigold, dashed) and their tag', s.tags.filter((x) => x.name.startsWith('bridge')).length === 1],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 5 · graphite, plan and side views (Addendum E1, p. 488)         */
/* ===================================================================== */
const CAPE1 = 'Graphite, shown in plan view (one layer) and side view (three layers).';
const GR = { cc: 141.5, gap: 340, a: 34, c: [140, 156] as P, side: { k: 0.24, n: 9, x0: 22, y0: 72 } };
/** Seven flat-topped hexagons (a centre and its six neighbours), C–C = GR.a px; atoms and bonds merged where they meet. */
function honeycomb(): { atoms: P[]; bonds: [number, number][] } {
  const { a, c } = GR, centres: P[] = [c, ...[0, 1, 2, 3, 4, 5].map((k) => add(c, mul(dir(-90 + 60 * k), Math.sqrt(3) * a)))];
  const atoms: P[] = [], bonds: [number, number][] = [];
  const idx = (p: P) => { let i = atoms.findIndex((q) => len(p, q) < 0.01); if (i < 0) { atoms.push(p); i = atoms.length - 1; } return i; };
  centres.forEach((h) => {
    const v = [0, 1, 2, 3, 4, 5].map((k) => idx(add(h, mul(dir(60 * k), a))));
    v.forEach((i, k) => { const j = v[(k + 1) % 6]; if (!bonds.some(([p, q]) => (p === i && q === j) || (p === j && q === i))) bonds.push([i, j]); });
  });
  return { atoms, bonds };
}
const sideLayers = () => { const { k, n, x0, y0 } = GR.side, dx = GR.cc * Math.cos(30 * D2R) * k, dy = GR.gap * k; return [0, 1, 2].map((L) => Array.from({ length: n }, (_, i): P => [x0 + dx * i, y0 + dy * L])); };
const HIBOND = { hex: 2, from: -60, to: 0 };
const figE1: Diagram = {
  id: 'c11-10-E-d1',
  topic: 10,
  name: 'Graphite',
  cases: [
    { chip: 'Plan view', part: 'plan', cap: CAPE1 },
    { chip: 'Side view', part: 'side', cap: CAPE1 },
  ],
  draw(c: { part: string }) {
    if (c.part === 'plan') {
      const s = new Sketch(W, 300), g = honeycomb();
      const hc = add(GR.c, mul(dir(-90 + 60 * (HIBOND.hex - 1)), Math.sqrt(3) * GR.a)), hp = [add(hc, mul(dir(HIBOND.from), GR.a)), add(hc, mul(dir(HIBOND.to), GR.a))];
      g.bonds.forEach(([i, j]) => { const hi = [g.atoms[i], g.atoms[j]].every((p) => hp.some((q) => len(p, q) < 0.01)); path(s, [g.atoms[i], g.atoms[j]], { color: hi ? C.mari : C.ink, w: hi ? 2.6 : 1.7 }); });
      g.atoms.forEach((p) => s.dot(p[0], p[1], 2.8));
      s.sym(GR.c[0], 24, 'plan view of one layer', { size: 12.5, color: C.slate });
      s.sym(GR.c[0], 268, 'sp<sup>2</sup> carbon: three σ bonds,', { size: 12, color: C.slate });
      s.sym(GR.c[0], 285, 'one electron in the delocalised π cloud', { size: 12, color: C.slate });
      s.place([{ t: 'C–C bond 141.5 pm', hi: true, p: mid(hp[0], hp[1]), at: [[W - 6, 70, 'end'], [W - 6, 60, 'end'], [W - 6, 80, 'end'], [W - 6, 90, 'end']] }]);
      return s;
    }
    const s = new Sketch(W, 292), L = sideLayers(), x = L[0][L[0].length - 1][0] + 22;
    s.sym(W / 2 - 20, 30, 'side view', { size: 12.5, color: C.slate });
    L.forEach((row) => { path(s, [row[0], row[row.length - 1]], { w: 1.7 }); row.forEach((p) => s.dot(p[0], p[1], 3.2)); });
    [0, 1].forEach((k) => {
      const a: P = [x, L[k][0][1] + 3], b: P = [x, L[k + 1][0][1] - 3];
      both(s, a, b, C.mari);
      s.sym(x + 10, (a[1] + b[1]) / 2 + 5, '340 pm', { size: 13, anchor: 'start', color: C.amber });
    });
    s.sym(W / 2 - 20, 264, 'layers held by weak', { size: 12, color: C.slate });
    s.sym(W / 2 - 20, 281, 'van der Waals forces', { size: 12, color: C.slate });
    return s;
  },
  check(c: { part: string }) {
    const s = figE1.draw(c), out: Check[] = [];
    if (c.part === 'plan') {
      const g = honeycomb(), deg = g.atoms.map((_, i) => g.bonds.filter((b) => b.includes(i)).length);
      out.push([`Seven hexagons merged: ${g.atoms.length} carbons, ${g.bonds.length} C–C bonds (coronene-shaped patch: 24 and 30)`, g.atoms.length === 24 && g.bonds.length === 30]);
      out.push([`Every bond drawn ${GR.a} px = 141.5 pm (the book's C–C within a layer): ${fmt(Math.min(...g.bonds.map(([i, j]) => len(g.atoms[i], g.atoms[j]))), 3)}–${fmt(Math.max(...g.bonds.map(([i, j]) => len(g.atoms[i], g.atoms[j]))), 3)} px`, g.bonds.every(([i, j]) => close(len(g.atoms[i], g.atoms[j]), GR.a, 1e-9))]);
      const angs = g.atoms.flatMap((p, i) => { const n = g.bonds.filter((b) => b.includes(i)).map((b) => g.atoms[b[0] === i ? b[1] : b[0]]); return n.flatMap((q, k) => n.slice(k + 1).map((r) => angleAt(q, p, r))); });
      out.push([`Every C–C–C angle is 120° (sp², trigonal planar): ${fmt(Math.min(...angs), 3)}–${fmt(Math.max(...angs), 3)}°`, angs.every((x) => close(x, 120, 1e-9))]);
      out.push([`Every inner carbon has three σ bonds (${deg.filter((d) => d === 3).length} of them); its fourth valence electron is the one in the π cloud (4 = 3 σ + 1 π); edge carbons show only the bonds inside the patch`, deg.filter((d) => d === 3).length === 12 && deg.every((d) => d === 2 || d === 3) && 3 + 1 === 4]);
      out.push(['One bond highlighted and tagged 141.5 pm, as the book', mariCount(s) === 1 && s.tags.length === 1]);
    } else {
      const L = sideLayers(), k = GR.side.k;
      const gaps = [0, 1].map((i) => (L[i + 1][0][1] - L[i][0][1]) / k), dx = (L[0][1][0] - L[0][0][0]) / k;
      out.push([`Three layers, ${L[0].length} atoms each; the layers ${gaps.map((g) => fmt(g, 3)).join(' and ')} pm apart (the book's 340)`, L.length === 3 && gaps.every((g) => close(g, 340, 1e-9))]);
      out.push([`To the same scale, atoms seen edge-on (looking along a C–C bond) are 141.5 × cos 30° = ${fmt(dx, 2)} pm apart: the layers are ${fmt(340 / dx, 2)} times as far apart as the atoms in them`, close(dx, 141.5 * Math.cos(30 * D2R), 1e-9) && 340 / dx > 2.5]);
      out.push(['The two 340 pm spacings are the one highlight', s.labels.filter((l) => l.text === '340 pm').length === 2]);
    }
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6 · tetrahedral carbon in diamond (Addendum E1, p. 488)         */
/* ===================================================================== */
const CAPE2 = 'Tetrahedral carbon in diamond: each carbon sits at the centre of a regular tetrahedron of four others (drawn inside a cube for perspective).';
/** A cube of edge 2 × 154/√3 pm, the central C at its centre, the four neighbours on alternate corners; seen turned AZ° and from EL° above. */
const DM = { cc: 154, k: 0.82, c: [170, 160] as P, az: -15, el: 13, ext: 0.42, hi: 3 };
const EDGE = (2 * DM.cc) / Math.sqrt(3);
const NB: V3[] = [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]].map((v) => mul3(v as V3, EDGE / 2));
const CUBE: V3[] = [-1, 1].flatMap((x) => [-1, 1].flatMap((y) => [-1, 1].map((z): V3 => [(x * EDGE) / 2, (y * EDGE) / 2, (z * EDGE) / 2])));
const rotDM = (v: V3): V3 => {
  const a = DM.az * D2R, e = DM.el * D2R, x1 = v[0] * Math.cos(a) - v[1] * Math.sin(a), y1 = v[0] * Math.sin(a) + v[1] * Math.cos(a);
  return [x1, v[2] * Math.cos(e) + y1 * Math.sin(e), y1 * Math.cos(e) - v[2] * Math.sin(e)];
};
const projDM = (v: V3): P => { const r = rotDM(v); return [DM.c[0] + DM.k * r[0], DM.c[1] - DM.k * r[1]]; };
const figE2: Diagram = {
  id: 'c11-10-E-d2',
  topic: 10,
  name: 'Tetrahedral carbon in diamond',
  cases: [{ chip: 'Diamond', cap: CAPE2 }],
  draw() {
    const s = new Sketch(W, 330), sz = 15, O: V3 = [0, 0, 0];
    const occ = NB.map(projDM), boxes = [atomRect(projDM(O), 'C', 17), ...occ.map((p) => atomRect(p, 'C', sz))];
    // the cube: the three edges at the corner farthest back are hidden (dashed)
    const back = CUBE.reduce((b, v, i) => (rotDM(v)[2] > rotDM(CUBE[b])[2] ? i : b), 0);
    CUBE.forEach((u, i) => CUBE.forEach((v, j) => {
      if (j <= i || !close(len3(sub3(u, v)), EDGE, 1e-6)) return;
      const a = projDM(u), b = projDM(v), p = trim(a, b, boxes), q = trim(b, a, boxes);
      path(s, [p, q], { color: C.grey, w: 1.1, dash: i === back || j === back ? 'dash' : undefined });
    }));
    // each neighbour's three further bonds, dotted
    NB.forEach((n, i) => NB.forEach((m, j) => { if (i === j) return; const a = projDM(n), b = projDM(add3(n, mul3(m, -DM.ext))); path(s, [trim(a, b, boxes), b], { color: C.slate, w: 1.3, dash: 'dot' }); }));
    const ends = NB.map((n, i) => bond(s, projDM(O), { rect: boxes[0] }, projDM(n), { rect: boxes[i + 1] }, { w: i === DM.hi ? 2.8 : 2.2, color: i === DM.hi ? C.mari : C.ink }));
    atomSym(s, projDM(O), 'C', 17, { bold: true });
    occ.forEach((p) => atomSym(s, p, 'C', sz));
    s.sym(...clearSpot(s, ends[DM.hi], '154 pm', 13), '154 pm', { size: 13, color: C.amber });
    s.sym(W / 2, 22, 'four nearest neighbours at the corners of a tetrahedron', { size: 11.5, color: C.slate });
    s.sym(W / 2, 302, 'C–C bond length 154 pm;', { size: 12, color: C.slate });
    s.sym(W / 2, 320, 'every C–C–C angle ≈ 109.5° (sp<sup>3</sup>)', { size: 12, color: C.slate });
    return s;
  },
  check() {
    const s = figE2.draw(figE2.cases[0]), out: Check[] = [];
    const L = NB.map(len3), angs = NB.flatMap((a, i) => NB.slice(i + 1).map((b) => ang3(a, b)));
    out.push([`Four C–C bonds of ${L.map((x) => fmt(x, 3)).join(', ')} pm (the book's 154): the cube's edge is 2 × 154/√3 = ${fmt(EDGE, 2)} pm`, L.every((x) => close(x, 154, 1e-9))]);
    out.push([`Every C–C–C angle at the centre is ${fmt(angs[0], 2)}° = cos⁻¹(−1/3), the book's ≈ 109.5° (sp³)`, angs.every((x) => close(x, TETRA, 1e-9)) && fmt(TETRA, 1) === '109.5']);
    const nn = NB.flatMap((a, i) => NB.slice(i + 1).map((b) => len3(sub3(a, b))));
    out.push([`The four neighbours are ${fmt(nn[0], 2)} pm apart, all six pairs equal (a regular tetrahedron), each pair a face diagonal (edge × √2): on alternate corners, no two on one edge`, nn.every((x) => close(x, EDGE * Math.SQRT2, 1e-9))]);
    out.push(['Every neighbour is a corner of the cube and the central C its centre', NB.every((n) => CUBE.some((v) => close(len3(sub3(n, v)), 0, 1e-9))) && close(len3(CUBE.reduce((t, v) => add3(t, v), [0, 0, 0] as V3)), 0, 1e-9)]);
    const ext = NB.every((n, i) => NB.every((m, j) => i === j || close(ang3(mul3(n, -1), mul3(m, -1)), TETRA, 1e-9)));
    out.push(['Each neighbour\'s three dotted bonds run at the tetrahedral angle to its bond back to the centre: every carbon in diamond is the same', ext]);
    const pr = NB.map((n) => len(projDM([0, 0, 0]), projDM(n)) / (DM.k * DM.cc));
    out.push([`Seen from this angle every bond keeps at least half its length on the page (${pr.map((x) => fmt(x, 2)).join(', ')}), so none hides behind another`, pr.every((x) => x > 0.5)]);
    const P2 = NB.map(projDM), sep = Math.min(...P2.flatMap((a, i) => P2.slice(i + 1).map((b) => len(a, b))));
    out.push([`The four neighbours stand well apart on the page (closest pair ${fmt(sep, 1)} px)`, sep > 60]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 7 · the silicate anions of the rule (Addendum G1, p. 493)       */
/* ===================================================================== */
const CAPG1 = 'The silicate anions of the rule. Silicon is the large circle marked Si; the small open circles are bridging oxygens (shared by two silicons); O<sup>−</sup> are terminal oxygens. In the sheet panel, circled minus signs stand for terminal O<sup>−</sup> pointing out of the plane of the sheet.';
type SAtom = { kind: 'Si' | 'Ob' | 'Ot' | 'Oup'; p: P; cont?: P };
type Sil = { atoms: SAtom[]; bonds: [number, number][]; head: string; foot: string[]; s: number; per: { si: number; o: number; q: number }; poly: boolean };
const SIR = 13, OBR = 4.8, OUPR = 6.5, SH = 250;
/** Build a panel from Si centres, a list of bridging O (with the Si they join, and a continuation for one shared with a Si not drawn) and terminal O⁻. */
function sil(si: P[], ob: { p: P; to: number[]; cont?: P }[], ot: { p: P; to: number; up?: boolean }[], o: Omit<Sil, 'atoms' | 'bonds'>): Sil {
  const atoms: SAtom[] = si.map((p) => ({ kind: 'Si', p }));
  const bonds: [number, number][] = [];
  ob.forEach((b) => { atoms.push({ kind: 'Ob', p: b.p, cont: b.cont }); b.to.forEach((k) => bonds.push([k, atoms.length - 1])); });
  ot.forEach((t) => { atoms.push({ kind: t.up ? 'Oup' : 'Ot', p: t.p }); bonds.push([t.to, atoms.length - 1]); });
  return { atoms, bonds, ...o };
}
function silicate(part: string): Sil {
  if (part === 'ortho') {
    const c: P = [170, 126];
    return sil([c], [], [-135, -45, 45, 135].map((d) => ({ p: add(c, mul(dir(d), 58)), to: 0 })), { head: 'SiO<sub>4</sub><sup>4−</sup>  (ortho)', foot: ['0 corners shared'], s: 0, per: { si: 1, o: 4, q: -4 }, poly: false });
  }
  if (part === 'pyro') {
    const a: P = [128, 126], b: P = [212, 126];
    return sil([a, b], [{ p: mid(a, b), to: [0, 1] }], [...[-120, 180, 120].map((d) => ({ p: add(a, mul(dir(d), 54)), to: 0 })), ...[-60, 0, 60].map((d) => ({ p: add(b, mul(dir(d), 54)), to: 1 }))], { head: 'Si<sub>2</sub>O<sub>7</sub><sup>6−</sup>  (pyro)', foot: ['1 corner shared'], s: 1, per: { si: 2, o: 7, q: -6 }, poly: false });
  }
  if (part === 'ring') {
    const c: P = [170, 140], R = 54, th = [-90, 30, 150], si = th.map((d) => add(c, mul(dir(d), R)));
    return sil(si, [0, 1, 2].map((k) => ({ p: mid(si[k], si[(k + 1) % 3]), to: [k, (k + 1) % 3] })), th.flatMap((d, k) => [-42, 42].map((e) => ({ p: add(si[k], mul(dir(d + e), 50)), to: k }))), { head: 'Si<sub>3</sub>O<sub>9</sub><sup>6−</sup>  (ring)', foot: ['2 corners shared'], s: 2, per: { si: 3, o: 9, q: -6 }, poly: false });
  }
  if (part === 'chain') {
    const y = 128, si = [0, 1, 2, 3].map((i): P => [74 + 64 * i, y]);
    const ob = [0, 1, 2, 3, 4].map((i) => ({ p: [42 + 64 * i, y] as P, to: i === 0 ? [0] : i === 4 ? [3] : [i - 1, i], cont: i === 0 ? ([20, y] as P) : i === 4 ? ([320, y] as P) : undefined }));
    return sil(si, ob, si.flatMap((p, k) => [-90, 90].map((d) => ({ p: add(p, mul(dir(d), 48)), to: k }))), { head: '(SiO<sub>3</sub>)<sub><i>n</i></sub><sup>2<i>n</i>−</sup>  (chain)', foot: ['2 corners shared'], s: 2, per: { si: 1, o: 3, q: -2 }, poly: true });
  }
  // sheet: one six-membered ring of a sheet; each Si also shares an outward corner with the next ring, and its fourth O⁻ stands out of the sheet
  const c: P = [170, 142], R = 56, th = [0, 1, 2, 3, 4, 5].map((k) => -90 + 60 * k), si = th.map((d) => add(c, mul(dir(d), R)));
  const ob = [...[0, 1, 2, 3, 4, 5].map((k) => ({ p: mid(si[k], si[(k + 1) % 6]), to: [k, (k + 1) % 6] })), ...th.map((d, k) => ({ p: add(si[k], mul(dir(d), 30)), to: [k], cont: add(si[k], mul(dir(d), 30 + OBR + 10)) }))];
  return sil(si, ob, th.map((d, k) => ({ p: add(c, mul(dir(d), 28)), to: k, up: true })), { head: '(Si<sub>2</sub>O<sub>5</sub>)<sub><i>n</i></sub><sup>2<i>n</i>−</sup>  (sheet)', foot: ['3 corners shared;', '= O<sup>−</sup> standing out of the sheet'], s: 3, per: { si: 2, o: 5, q: -2 }, poly: true });
}
/** A circled minus: the out-of-plane O⁻ (the book's red disc). */
function circledMinus(s: Sketch, p: P) {
  circle(s, p, OUPR, { w: 1.4 });
  path(s, [[p[0] - 3.4, p[1]], [p[0] + 3.4, p[1]]], { w: 1.6, free: true });
}
const RULE = ['all 4 corners shared', 'SiO<sub>2</sub>, neutral 3D network', 'corners shared per', 'tetrahedron: <i>s</i>', 'formula unit  SiO<sub>4 − <i>s</i>/2</sub>', 'charge per Si = −(4 − <i>s</i>)'];
const PARTS = ['ortho', 'pyro', 'ring', 'chain', 'sheet'];
const figG1: Diagram = {
  id: 'c11-10-G-d1',
  topic: 12,
  name: 'Silicate anions',
  cases: [
    { chip: 'Ortho', part: 'ortho', cap: CAPG1 },
    { chip: 'Pyro', part: 'pyro', cap: CAPG1 },
    { chip: 'Ring', part: 'ring', cap: CAPG1 },
    { chip: 'Chain', part: 'chain', cap: CAPG1 },
    { chip: 'Sheet', part: 'sheet', cap: CAPG1 },
    { chip: 'All 4 shared', part: 'rule', cap: CAPG1 },
  ],
  draw(c: { part: string }) {
    if (c.part === 'rule') {
      const s = new Sketch(W, 236);
      path(s, [[54, 18], [286, 18], [286, 220], [54, 220], [54, 18]], { color: C.grey, w: 1.2 });
      const ys = [52, 82, 120, 137, 172, 204], sz = [14, 14, 12.5, 12.5, 14, 14];
      RULE.forEach((t, i) => s.sym(W / 2, ys[i], t, { size: sz[i], color: i === 5 ? C.amber : i === 2 || i === 3 ? C.slate : C.text }));
      return s;
    }
    const m = silicate(c.part), s = new Sketch(W, c.part === 'sheet' ? SH + 40 : SH);
    const stop = (a: SAtom): Stop => (a.kind === 'Si' ? { r: SIR } : a.kind === 'Ob' ? { r: OBR } : a.kind === 'Oup' ? { r: OUPR } : { rect: atomRect(a.p, 'O<sup>−</sup>', 14) });
    m.bonds.forEach(([i, j]) => { if (m.atoms[j].kind !== 'Oup') bond(s, m.atoms[i].p, stop(m.atoms[i]), m.atoms[j].p, stop(m.atoms[j]), { color: m.atoms[j].kind === 'Ot' ? C.slate : C.ink, w: m.atoms[j].kind === 'Ot' ? 1.5 : 1.9 }); });
    m.atoms.forEach((a) => {
      if (a.kind === 'Si') { circle(s, a.p, SIR, { w: 1.7 }); atomSym(s, a.p, 'Si', 12); }
      else if (a.kind === 'Ob') { circle(s, a.p, OBR, { color: C.mari, w: 2 }); if (a.cont) path(s, [add(a.p, mul(unit(sub(a.cont, a.p)), OBR)), a.cont], { color: C.ink, w: 1.6, dash: 'dash' }); }
      else if (a.kind === 'Oup') circledMinus(s, a.p);
      else atomSym(s, a.p, 'O<sup>−</sup>', 14);
    });
    s.sym(W / 2, 28, m.head, { size: 15 });
    const fy = s.h - (m.foot.length === 2 ? 34 : 16);
    s.sym(W / 2, fy, m.foot[0], { size: 12, color: C.slate });
    if (m.foot[1]) { circledMinus(s, [W / 2 - 98, fy + 13]); s.sym(W / 2 - 86, fy + 17, m.foot[1], { size: 12, anchor: 'start', color: C.slate }); }
    return s;
  },
  check(c: { part: string }) {
    const s = figG1.draw(c), out: Check[] = [];
    const rule = (k: number) => ({ o: 4 - k / 2, q: -(4 - k) });
    if (c.part === 'rule') {
      const rows = [0, 1, 2, 3, 4].map((k) => `s = ${k}: SiO${fmt(rule(k).o, 1)}, ${rule(k).q}`);
      out.push([`The rule SiO₄₋ₛ/₂ with charge −(4 − s) per Si: ${rows.join('; ')}`, rule(0).o === 4 && rule(0).q === -4 && rule(4).o === 2 && rule(4).q === 0]);
      out.push(['Every panel of the figure obeys it: its corners shared s give its formula and charge per Si', PARTS.every((p) => { const m = silicate(p), r = rule(m.s); return close(m.per.o / m.per.si, r.o, 1e-12) && close(m.per.q / m.per.si, r.q, 1e-12); })]);
      out.push(['All four shared: SiO₂, charge 0, a neutral 3D network, as the box says', rule(4).o === 2 && rule(4).q === 0 && RULE[1].startsWith('SiO<sub>2</sub>, neutral')]);
      out.push(...layout(s));
      return out;
    }
    const m = silicate(c.part);
    const nbr = (i: number) => m.bonds.filter((b) => b.includes(i)).map((b) => (b[0] === i ? b[1] : b[0]));
    const SI = m.atoms.map((a, i) => i).filter((i) => m.atoms[i].kind === 'Si');
    const per = SI.map((i) => ({ bridging: nbr(i).filter((j) => m.atoms[j].kind === 'Ob').length, terminal: nbr(i).filter((j) => m.atoms[j].kind !== 'Ob').length }));
    out.push([`Every silicon has four oxygens (${per.map((p) => `${p.bridging} bridging + ${p.terminal} terminal`).join('; ')}): an SiO₄ tetrahedron`, per.every((p) => p.bridging + p.terminal === 4)]);
    out.push([`Every silicon shares ${m.s} corner${m.s === 1 ? '' : 's'}, as the panel says ("${m.foot[0]}")`, per.every((p) => p.bridging === m.s) && m.foot[0].startsWith(String(m.s))]);
    const ob = m.atoms.map((a, i) => i).filter((i) => m.atoms[i].kind === 'Ob');
    out.push(['Every open circle (bridging O) joins two silicons: both drawn, or one drawn and one beyond the dashed bond', ob.every((i) => nbr(i).length + (m.atoms[i].cont ? 1 : 0) === 2)]);
    let si: number, o: number, q: number;
    if (!m.poly) {
      si = SI.length;
      o = ob.length + m.atoms.filter((a) => a.kind === 'Ot' || a.kind === 'Oup').length;
      q = -m.atoms.filter((a) => a.kind === 'Ot' || a.kind === 'Oup').length;
    } else {
      // per silicon: its terminal O⁻ whole, each bridging O shared half; scaled to the formula's repeat unit
      const unit1 = per[0].terminal + per[0].bridging / 2;
      si = m.per.si; o = unit1 * m.per.si; q = -per[0].terminal * m.per.si;
    }
    const head = plain(m.head);
    out.push([`Read off the drawing: Si${si} O${fmt(o, 1)}, charge ${q}${m.poly ? ' per repeat unit' : ''} ⇒ ${head.split('  ')[0]}`, si === m.per.si && close(o, m.per.o, 1e-12) && q === m.per.q && head.includes(`${m.per.si > 1 ? `Si${m.per.si}` : 'Si'}O${m.per.o}`) && head.includes(`${m.poly ? `${-m.per.q === 2 ? '2n' : ''}` : -m.per.q}−`)]);
    out.push([`The rule gives the same: s = ${m.s} ⇒ SiO${fmt(rule(m.s).o, 1)} and ${rule(m.s).q} per Si`, close(m.per.o / m.per.si, rule(m.s).o, 1e-12) && close(m.per.q / m.per.si, rule(m.s).q, 1e-12)]);
    if (c.part === 'sheet') {
      const ups = m.atoms.map((a, i) => i).filter((i) => m.atoms[i].kind === 'Oup');
      out.push(['Each silicon carries one circled minus (its O⁻ out of the sheet), drawn nearer its own silicon than any other', ups.every((i) => { const own = nbr(i)[0], d = SI.map((k) => len(m.atoms[k].p, m.atoms[i].p)); return d.indexOf(Math.min(...d)) === SI.indexOf(own); }) && ups.length === 6]);
    }
    out.push(['One highlight: the bridging oxygens, the shared corners the rule counts', mariCount(s) === ob.length]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8 · the SiO₄ tetrahedron and the SiO₂ network (Addendum G3, p. 494) */
/* ===================================================================== */
const CAPG2 = 'The SiO<sub>4</sub> tetrahedron and the corner-sharing network of SiO<sub>2</sub> (an eight-membered ring of four Si and four O is shown).';
/** The tetrahedron: Si at the centre, O along the four alternate cube diagonals, turned AZ° about the vertical and seen EL° from above. */
const TT = { c: [170, 134] as P, L: 84, az: 0, el: 30, orr: 11, si: 11 };
const TDIR: V3[] = [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]].map((v) => mul3(v as V3, 1 / Math.sqrt(3)));
const rotTT = (v: V3): V3 => {
  const a = TT.az * D2R, e = TT.el * D2R, x1 = v[0] * Math.cos(a) - v[1] * Math.sin(a), y1 = v[0] * Math.sin(a) + v[1] * Math.cos(a);
  return [x1, v[2] * Math.cos(e) + y1 * Math.sin(e), y1 * Math.cos(e) - v[2] * Math.sin(e)];
};
const projTT = (v: V3): P => { const r = rotTT(v); return [TT.c[0] + TT.L * r[0], TT.c[1] - TT.L * r[1]]; };
/** The edge of a tetrahedron hidden from the viewer: of the two edges whose drawings cross, the one behind; none when one corner shows inside the outline in front. */
function hiddenEdge(): [number, number] | null {
  const P2 = TDIR.map(projTT), Z = TDIR.map((v) => rotTT(v)[2]);
  const pairs: [number, number][] = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]];
  const cross = (a: P, b: P, c: P, d: P) => { const o = (p: P, q: P, r: P) => Math.sign((q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0])); return o(a, b, c) !== o(a, b, d) && o(c, d, a) !== o(c, d, b); };
  for (const [i, j] of pairs) {
    const [k, l] = [0, 1, 2, 3].filter((x) => x !== i && x !== j);
    if (cross(P2[i], P2[j], P2[k], P2[l])) return (Z[i] + Z[j]) / 2 > (Z[k] + Z[l]) / 2 ? [i, j] : [k, l];
  }
  return null;
}
const NET = { c: [170, 134] as P, h: 36, out: 42, ext: 12, spread: 16 };
function network() {
  const { c, h } = NET, sq: P[] = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([x, y]) => add(c, [x * h, y * h]));
  const ring = [0, 1, 2, 3].map((k) => mid(sq[k], sq[(k + 1) % 4]));
  const outer = sq.flatMap((p, k) => { const base = -135 + 90 * k; return [base - NET.spread * 1.9, base + NET.spread * 1.9].map((d) => ({ si: k, p: add(p, mul(dir(d), NET.out)), u: dir(d) })); });
  return { sq, ring, outer };
}
const figG2: Diagram = {
  id: 'c11-10-G-d2',
  topic: 12,
  name: 'SiO₄ tetrahedron and the SiO₂ network',
  cases: [
    { chip: 'SiO₄ tetrahedron', part: 'tetra', cap: CAPG2 },
    { chip: 'SiO₂ network', part: 'net', cap: CAPG2 },
  ],
  draw(c: { part: string }) {
    if (c.part === 'tetra') {
      const s = new Sketch(W, 280), O = TDIR.map(projTT), hid = hiddenEdge();
      [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]].forEach(([i, j]) => {
        const hidden = !!hid && hid[0] === i && hid[1] === j;
        bond(s, O[i], { r: TT.orr }, O[j], { r: TT.orr }, { color: C.mari, w: 1.5, dash: hidden ? 'dash' : undefined });
      });
      O.forEach((p) => bond(s, TT.c, { r: TT.si }, p, { r: TT.orr }, { w: 2.6 }));
      O.forEach((p) => { circle(s, p, TT.orr, { w: 1.5 }); atomSym(s, p, 'O', 12); });
      circle(s, TT.c, TT.si, { w: 1.7 });
      atomSym(s, TT.c, 'Si', 11);
      s.sym(W / 2, 26, 'SiO<sub>4</sub><sup>4−</sup> tetrahedron', { size: 15 });
      s.sym(W / 2, 246, 'O–Si–O angle ≈ 109.5°', { size: 12, color: C.slate });
      s.sym(W / 2, 263, '(four σ bonds, sp<sup>3</sup>)', { size: 12, color: C.slate });
      return s;
    }
    const s = new Sketch(W, 290), n = network();
    n.sq.forEach((p, k) => {
      const q = n.sq[(k + 1) % 4], o = n.ring[k];
      bond(s, p, { r: SIR }, o, { r: OBR }, { color: C.mari, w: 2.4 });
      bond(s, o, { r: OBR }, q, { r: SIR }, { color: C.mari, w: 2.4 });
    });
    n.outer.forEach((o) => { bond(s, n.sq[o.si], { r: SIR }, o.p, { r: OBR }); path(s, [add(o.p, mul(o.u, OBR)), add(o.p, mul(o.u, OBR + NET.ext))], { w: 1.6, dash: 'dash' }); });
    [...n.ring, ...n.outer.map((o) => o.p)].forEach((p) => circle(s, p, OBR, { w: 1.7 }));
    n.sq.forEach((p) => { circle(s, p, SIR, { w: 1.7 }); atomSym(s, p, 'Si', 12); });
    s.sym(W / 2, 26, 'corner-sharing network', { size: 14 });
    s.sym(W / 2, 256, 'each Si has four O; each O joins two Si;', { size: 12, color: C.slate });
    s.sym(W / 2, 273, 'ratio Si : O = 1 : 2', { size: 12, color: C.slate });
    return s;
  },
  check(c: { part: string }) {
    const s = figG2.draw(c), out: Check[] = [];
    if (c.part === 'tetra') {
      const angs = TDIR.flatMap((a, i) => TDIR.slice(i + 1).map((b) => ang3(a, b)));
      out.push([`All six O–Si–O angles are ${fmt(angs[0], 2)}° = cos⁻¹(−1/3), the book's ≈ 109.5°`, angs.every((x) => close(x, TETRA, 1e-9))]);
      const edges = TDIR.flatMap((a, i) => TDIR.slice(i + 1).map((b) => len3(sub3(a, b))));
      out.push(['The four O are the corners of a regular tetrahedron (six equal edges) with Si at its centre', edges.every((x) => close(x, edges[0], 1e-12)) && close(len3(TDIR.reduce((t, v) => add3(t, v), [0, 0, 0] as V3)), 0, 1e-12)]);
      out.push(['Four σ bonds and no lone pair on Si: steric number 4 ⇒ sp³; formal count SiO₄: 4 terminal O⁻, charge −4', 4 + 0 === 4]);
      const hid = hiddenEdge(), Z = TDIR.map((v) => rotTT(v)[2]);
      out.push([`The one edge drawn dashed (${hid ? `O${hid[0] + 1}–O${hid[1] + 1}` : 'none'}) is the one behind where two edges cross on the page`, !!hid && (Z[hid[0]] + Z[hid[1]]) / 2 > Math.min(...Z)]);
      const P2 = TDIR.map(projTT), sep = Math.min(...P2.flatMap((a, i) => P2.slice(i + 1).map((b) => len(a, b))));
      out.push([`The four O stand apart on the page (closest ${fmt(sep, 1)} px) and every bond shows at least half its length`, sep > 3 * TT.orr && P2.every((p) => len(p, TT.c) > TT.L * 0.5)]);
    } else {
      const n = network();
      const siO = n.sq.map((_, k) => 2 + n.outer.filter((o) => o.si === k).length);
      out.push([`Each Si has four O (${siO.join(', ')}): two in the ring, two outward`, siO.every((x) => x === 4)]);
      out.push([`Each O joins two Si: the ${n.ring.length} ring O two drawn Si each, the ${n.outer.length} outward O one drawn and one beyond the dashed bond`, n.ring.length === 4 && n.outer.length === 8]);
      const oPerSi = (n.sq.length * 4) / 2 / n.sq.length;
      out.push([`So O per Si = 4 × ½ = ${oPerSi}: Si : O = 1 : 2, SiO₂, and with every corner shared the charge is −(4 − 4) = 0`, oPerSi === 2]);
      const ringAtoms = n.sq.flatMap((p, k) => [p, n.ring[k]]);
      out.push([`The highlighted ring alternates Si and O: ${ringAtoms.length} atoms (four Si, four O), an eight-membered ring as the caption says`, ringAtoms.length === 8 && n.ring.every((o, k) => close(len(o, n.sq[k]), len(o, n.sq[(k + 1) % 4]), 1e-9))]);
      out.push(['Only the ring is marigold (eight Si–O bonds)', mariCount(s) === 8]);
    }
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_11_10: Diagram[] = [figA1, figA2, figC1, figC2, figE1, figE2, figG1, figG2];

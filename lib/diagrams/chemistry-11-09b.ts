import { C, LABEL_GAP, Rect, Sketch, crosses, mathW, near, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 11, CHAPTER 9 (Hydrocarbons), second half: every drawing of
 * the Master Reference book on pp. 421–455 (Topic 03 Alkynes, pp. 421–429;
 * Topic 04 Aromatic Hydrocarbons, pp. 430–438; Additional topics A–I,
 * pp. 439–455), redrawn. Figures 9.1–9.5 and the drawings of the opening
 * section and Topics 01–02 are in chemistry-11-09.ts.
 *
 * The pages were looked at one by one. They hold five drawings:
 *
 *   Figure 9.6 (p. 423, "CHAPTER 9 · FIGURES" page; caption first on p. 422
 *     with "(see next page)") — orbital picture of ethyne. Topic 03, index 3.
 *   Figure 9.7 (p. 426; caption first on p. 425) — Kucherov hydration of
 *     ethyne and propyne. Topic 03, index 3.
 *   Figures 9.8 and 9.9 (both on p. 433; captions first on p. 432) — benzene's
 *     Kekulé structures, hybrid and edge-on π cloud; the general EAS
 *     mechanism. Topic 04, index 4.
 *   "Figure 1" of Additional topic A (p. 440) — the aromaticity decision
 *     procedure. Its number is the addendum's own, so it takes the unnumbered
 *     id c11-09-A-d1 (index 5), as Chapter 8's Kjeldahl flow did.
 *
 * Judged NOT drawings: the canonical-set table of A (pp. 440–441), D's
 * selectivity and exhaustive-substitution tables (pp. 445–446), I's weighting
 * table (p. 452), and every typeset equation and condensed formula. Topics
 * 03–04 and Additional topics B–I draw nothing else.
 *
 * Computed, never placed by eye:
 *   9.6 — the molecule is built in 3D (axis along x; the two π systems' p
 *     lobes along y and z) and drawn in an oblique projection; the check
 *     recomputes collinearity (180°), the perpendicularity of the two π
 *     systems to each other and to the axis, sp hybridisation, the σ/π tally
 *     and the electron count.
 *   9.7 — each species is parsed to atom counts; the check balances every
 *     step, applies Markovnikov's rule and the enol → keto shift to an alkyne
 *     model, and shows ethyne is the only alkyne that ends as an aldehyde.
 *   9.8 — regular hexagons; the two Kekulé bond patterns are complements, each
 *     carbon in exactly one C=C; the edge-on ring is the same hexagon seen from
 *     its plane, its length 2 × 139 pm on the drawing's scale.
 *   9.9 — the three arenium contributors are bond patterns on one hexagon
 *     (sp³ C1 with E and H; + on C2, C4, C6; two C=C each) and the check counts
 *     bonds per carbon, π electrons, charges and the atom/charge balance of
 *     every step.
 *   A-d1 — the decision procedure is coded as a function; every example the
 *     boxes name, and every species of the addendum's canonical table, is run
 *     through it and must land in the box (or verdict) the book gives; each
 *     arrow is read back from the drawing.
 */

const W = 340;
type P = [number, number];
type V3 = [number, number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 1) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const rad = (deg: number) => (deg * Math.PI) / 180;

/* ---------- drawing helpers (as in chemistry-11-08.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; free?: boolean };
/** Every line a label must keep clear of, by sketch. */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  if (!o.free) keep(s, pts);
}
function arrow(s: Sketch, a: P, b: P, o: Stroke = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color, w: o.w, dash: o.dash });
  if (!o.free) keep(s, [a, b]);
}
/** A double-headed resonance arrow (⟷). */
function both(s: Sketch, a: P, b: P, o: Stroke = {}) {
  const m: P = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  arrow(s, m, a, o);
  arrow(s, m, b, o);
}
const rectPts = (r: Rect): P[] => [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]];
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/** The closest any kept line comes to a box. */
function lineGap(s: Sketch, r: Rect): number {
  let gap = Infinity;
  for (const pts of LINES.get(s) ?? []) {
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
      for (let k = 0; k <= n; k++) gap = Math.min(gap, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
    }
  }
  return gap;
}
function clearance(s: Sketch): { gap: number; what: string } {
  let gap = Infinity, what = '';
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  for (const [name, r] of boxes) { const g = lineGap(s, r); if (g < gap) { gap = g; what = name; } }
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
/** The result, bottom right, ink-edged, maths in STIX; registered as a tag so the audit keeps everything else off it. */
function resultBlock(s: Sketch, lines: string[], o: { size?: number } = {}): Rect {
  const size = o.size ?? 14, lh = size + 6;
  const w = Math.max(...lines.map((t) => Math.max(mathW(t, size), plain(t).length * size * 0.5))) + 26, h = lines.length * lh + 12;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="14" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => s.text(x0 + w / 2, y0 + 6 + lh * i + lh / 2 + size * 0.36, t, { size, semibold: true }));
  return [x0, y0, x0 + w, y0 + h];
}

/**
 * A tag whose name carries maths (π, σ, sp²): Onest has no Greek, so the name is
 * set in STIX inside the kit's white pill, with the kit's leader line and dot.
 * Placed like the kit's `place` (first preferred spot inside the frame, clear of
 * tags, points, labels and kept lines), and registered as a tag for the audit.
 */
const MT = 12.5;
const mtW = (t: string) => Math.max(mathW(t, MT), plain(t).length * MT * 0.5) + 20;
type MSpec = { t: string; p: P | null; hi?: boolean; at: [number, number, 'start' | 'middle' | 'end'][] };
const hitR = (a: Rect, b: Rect, m = 0) => !(a[2] + m <= b[0] || b[2] + m <= a[0] || a[3] + m <= b[1] || b[3] + m <= a[1]);
function placeM(s: Sketch, specs: MSpec[]) {
  for (const sp of specs) {
    const w = mtW(sp.t);
    let done = false;
    for (const [x, y, anchor] of sp.at) {
      const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x, r: Rect = [x0, y, x0 + w, y + 22];
      if (r[0] < 2 || r[2] > s.w - 2 || r[1] < 0 || r[3] > s.h) continue;
      if (s.tags.some((t) => hitR(r, t.rect, 6))) continue;
      if (s.points.some((pt) => pt.x > r[0] - 8 && pt.x < r[2] + 8 && pt.y > r[1] - 8 && pt.y < r[3] + 8)) continue;
      if (s.labels.some((l) => hitR(r, l.rect, LABEL_GAP))) continue;
      if (lineGap(s, r) < LABEL_GAP) continue;
      if (s.tags.some((t) => t.from && t.to && crosses(t.from, t.to, r, -2))) continue;
      let from: P | null = null, to: P | null = null;
      if (sp.p) {
        const p = sp.p, end: P = [Math.max(x0 + 8, Math.min(x0 + w - 8, p[0])), p[1] < y ? y : y + 22];
        if (s.points.some((pt) => Math.hypot(pt.x - p[0], pt.y - p[1]) > 3 && near([pt.x, pt.y], p, end) < pt.r + 3)) continue;
        if (s.labels.some((l) => crosses(p, end, l.rect, -LABEL_GAP))) continue;
        if (s.tags.some((t) => crosses(p, end, t.rect, -2))) continue;
        from = p; to = end;
        const col = sp.hi ? C.mari : C.grey;
        s.add(`<line x1="${r1(p[0])}" y1="${r1(p[1])}" x2="${r1(end[0])}" y2="${r1(end[1])}" stroke="${col}" stroke-width="1.2"/><circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="2.6" fill="${sp.hi ? C.mari : C.ink}"/>`);
      }
      s.add(`<rect x="${r1(x0)}" y="${y}" width="${r1(w)}" height="22" rx="11" fill="#fff" stroke="${sp.hi ? C.mari : C.border}" stroke-width="${sp.hi ? 1.5 : 1}"/>`);
      s.text(x0 + w / 2, y + 15.5, sp.t, { size: MT, color: sp.hi ? C.amber : C.text });
      s.tags.push({ name: plain(sp.t), rect: r, from, to });
      done = true;
      break;
    }
    if (!done) s.unplaced.push({ t: plain(sp.t), p: sp.p ?? undefined, hi: sp.hi, at: sp.at });
  }
}

/* ---------- atoms and rings ---------- */
const labRect = (at: P, html: string, size: number): Rect => { const w = Math.max(mathW(html, size), plain(html).length * size * 0.5) * 0.92; return [at[0] - w / 2, at[1] - size * 0.38, at[0] + w / 2, at[1] + size * 0.38]; };
function lab(s: Sketch, at: P, html: string, size: number, color: string = C.ink) {
  s.labels.push({ text: plain(html), rect: labRect(at, html, size) });
  s.text(at[0], at[1] + size * 0.36, html, { size, color });
}
/** Where a line from inside a box first runs 5.5 px clear of it. */
function exit(r: Rect | null, p: P, u: P): number {
  if (!r) return 0;
  const g = 5.5;
  for (let t = 0; t < 200; t += 0.25) { const q: P = [p[0] + u[0] * t, p[1] + u[1] * t]; if (q[0] < r[0] - g || q[0] > r[2] + g || q[1] < r[1] - g || q[1] > r[3] + g) return t; }
  return 200;
}
/** The two ends of a bond between two atoms, each stopped clear of its symbol. */
function ends(A: P, ra: Rect | null, B: P, rb: Rect | null): [P, P] {
  const L = len(A, B), u: P = [(B[0] - A[0]) / L, (B[1] - A[1]) / L];
  const ta = exit(ra, A, u), tb = exit(rb, B, [-u[0], -u[1]]);
  return [[A[0] + u[0] * ta, A[1] + u[1] * ta], [B[0] - u[0] * tb, B[1] - u[1] * tb]];
}
/** Vertex k of a regular hexagon with a vertex at the top (k = 0), then clockwise. */
const hexPt = (c: P, r: number, k: number): P => { const a = rad(-90 + 60 * k); return [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)]; };
/** A circle as a polyline (no fill). */
const circlePts = (c: P, r: number, n = 60): P[] => Array.from({ length: n + 1 }, (_, i) => [c[0] + r * Math.cos((2 * Math.PI * i) / n), c[1] + r * Math.sin((2 * Math.PI * i) / n)]);
/**
 * A hexagonal carbon ring: edge k runs from vertex k to k + 1; each edge in
 * `doubles` gets its second line inside the ring; `circle` draws the
 * delocalised ring (radius `circle` × r).
 */
function ring(s: Sketch, c: P, r: number, o: { doubles?: number[]; circle?: number; circleColor?: string; w?: number } = {}) {
  const v = [0, 1, 2, 3, 4, 5, 0].map((k) => hexPt(c, r, k));
  path(s, v, { w: o.w ?? 1.8 });
  for (const k of o.doubles ?? []) {
    const a = v[k], b = v[k + 1], m: P = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], toC: P = [c[0] - m[0], c[1] - m[1]], n = Math.hypot(...toC);
    const inset = r * 0.17, t = 0.17, off: P = [(toC[0] / n) * inset, (toC[1] / n) * inset];
    path(s, [[a[0] + (b[0] - a[0]) * t + off[0], a[1] + (b[1] - a[1]) * t + off[1]], [b[0] - (b[0] - a[0]) * t + off[0], b[1] - (b[1] - a[1]) * t + off[1]]], { w: 1.6 });
  }
  if (o.circle) path(s, circlePts(c, r * o.circle), { w: 1.8, color: o.circleColor });
}
/** Angle at b, in degrees. */
const angleAt = (a: P, b: P, c: P) => (Math.acos(((a[0] - b[0]) * (c[0] - b[0]) + (a[1] - b[1]) * (c[1] - b[1])) / (len(b, a) * len(b, c))) * 180) / Math.PI;
/** Atom counts of a formula or a sum of formulas ("CH3–C(OH)=CH2", "HC≡CH + H2O"); bonds, brackets and charges ignored. */
function atomsOf(html: string): Record<string, number> {
  const f = plain(html).replace(/[[\]–=≡\-\s+⁺]/g, '');
  const stack: Record<string, number>[] = [{}];
  const add = (m: Record<string, number>, e: string, k: number) => { m[e] = (m[e] ?? 0) + k; };
  let i = 0;
  while (i < f.length) {
    if (f[i] === '(') { stack.push({}); i++; continue; }
    if (f[i] === ')') {
      i++;
      let d = '';
      while (/\d/.test(f[i] ?? '')) d += f[i++];
      const g = stack.pop()!;
      Object.entries(g).forEach(([e, k]) => add(stack[stack.length - 1], e, k * (d ? +d : 1)));
      continue;
    }
    const m = /^([A-Z][a-z]?)(\d*)/.exec(f.slice(i));
    if (m) { add(stack[stack.length - 1], m[1], m[2] ? +m[2] : 1); i += m[0].length; continue; }
    i++;
  }
  return stack[0];
}
const same = (a: Record<string, number>, b: Record<string, number>) => { const k = new Set([...Object.keys(a), ...Object.keys(b)]); return [...k].every((e) => (a[e] ?? 0) === (b[e] ?? 0)); };
const formula = (n: Record<string, number>) => Object.keys(n).sort((a, b) => (a === 'C' ? -1 : b === 'C' ? 1 : a === 'H' ? -1 : b === 'H' ? 1 : a < b ? -1 : 1)).map((e) => `${e}${n[e] > 1 ? n[e] : ''}`).join('');

/* ===================================================================== */
/* Figure 9.6 · orbital picture of ethyne (Topic 03, p. 423)              */
/* ===================================================================== */
const CAP96 = 'Orbital picture of ethyne. The two sp carbons and two hydrogens lie on one line (H–C≡C–H, 180°). The C≡C is one σ bond plus two mutually perpendicular π bonds (lobes above/below and in front/behind the axis), giving a cylindrical electron cloud around the C–C axis.';
/**
 * Ethyne in 3D: the axis along x, C at ±cc/2, H a further ch out. π bond 1 is
 * the p_y pair (lobes above/below), π bond 2 the p_z pair (in front/behind).
 * Drawn in an oblique projection: z runs down-left at `phi` below the
 * horizontal, foreshortened by `k`. Each lobe is an ellipse (semi-axes a along
 * its p axis, b across) set `gap` out from its nucleus, clear of the C symbol.
 */
const E6 = { o: [170, 138] as P, cc: 120, ch: 64, a: 25, b: 10.5, gapY: 11, gapZ: 20, k: 0.75, phi: 32, cloud: [92, 38] as P };
const proj6 = (v: V3): P => [E6.o[0] + v[0] - E6.k * v[2] * Math.cos(rad(E6.phi)), E6.o[1] - v[1] + E6.k * v[2] * Math.sin(rad(E6.phi))];
const ATOMS6: { el: string; at: V3 }[] = [
  { el: 'H', at: [-E6.cc / 2 - E6.ch, 0, 0] }, { el: 'C', at: [-E6.cc / 2, 0, 0] }, { el: 'C', at: [E6.cc / 2, 0, 0] }, { el: 'H', at: [E6.cc / 2 + E6.ch, 0, 0] },
];
/** The p orbitals: for each carbon, each π system's axis (unit vector). */
const PI6: { name: string; axis: V3; gap: number }[] = [{ name: 'π bond 1', axis: [0, 1, 0], gap: E6.gapY }, { name: 'π bond 2', axis: [0, 0, 1], gap: E6.gapZ }];
/** A lobe's outline: the ellipse in the plane of its axis and the molecular axis, projected. */
function lobe(cx: number, axis: V3, gap: number, sign: number): P[] {
  const c: V3 = [cx + 0, sign * axis[1] * (gap + E6.a), sign * axis[2] * (gap + E6.a)];
  return Array.from({ length: 49 }, (_, i) => {
    const t = (2 * Math.PI * i) / 48, ka = E6.a * Math.cos(t), kb = E6.b * Math.sin(t);
    return proj6([c[0] + kb, c[1] + ka * axis[1], c[2] + ka * axis[2]]);
  });
}
const sub3 = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot3 = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const ang3 = (a: V3, b: V3) => (Math.acos(Math.max(-1, Math.min(1, dot3(a, b) / Math.sqrt(dot3(a, a) * dot3(b, b))))) * 180) / Math.PI;
const RES96 = '1 C–C σ + 2 C–C π; linear (180°)';
const fig96: Diagram = {
  id: 'c11-09-fig-9.6',
  topic: 3,
  name: 'Orbital picture of ethyne',
  cases: [{ chip: 'Ethyne, C₂H₂', cap: CAP96 }],
  draw() {
    const s = new Sketch(W, 300), sz = 17;
    const at = ATOMS6.map((a) => proj6(a.at)), rect = ATOMS6.map((a, i) => labRect(at[i], a.el, sz));
    // the cylindrical cloud round the C–C axis (grey, dashed: a helper outline, not an orbital)
    path(s, Array.from({ length: 73 }, (_, i): P => [E6.o[0] + E6.cloud[0] * Math.cos((2 * Math.PI * i) / 72), E6.o[1] + E6.cloud[1] * Math.sin((2 * Math.PI * i) / 72)]), { color: C.grey, w: 1.3, dash: true });
    // the p lobes: π bond 1 (above/below) in ink, π bond 2 (in front/behind) in marigold
    [1, 2].forEach((ci) => PI6.forEach((pi, j) => [1, -1].forEach((sg) => path(s, lobe(ATOMS6[ci].at[0], pi.axis, pi.gap, sg), { color: j ? C.mari : C.ink, w: j ? 1.7 : 1.4 }))));
    // σ bonds H–C and C–H; the C≡C as three lines (the middle one the σ bond)
    [[0, 1], [2, 3]].forEach(([a, b]) => { const [p, q] = ends(at[a], rect[a], at[b], rect[b]); path(s, [p, q], { w: 1.8 }); });
    [-4.5, 0, 4.5].forEach((d) => { const [p, q] = ends([at[1][0], at[1][1] + d], rect[1], [at[2][0], at[2][1] + d], rect[2]); path(s, [p, q], { w: 1.6 }); });
    ATOMS6.forEach((a, i) => lab(s, at[i], a.el, sz));
    resultBlock(s, [RES96], { size: 13.5 });
    // leader ends: the left edge of C1's upper lobe; the tip of C2's lobe behind the page
    const pTop = proj6([ATOMS6[1].at[0] - E6.b, E6.gapY + E6.a, 0]), pBack = proj6([ATOMS6[2].at[0], 0, -(E6.gapZ + 2 * E6.a)]);
    placeM(s, [
      { t: 'π bond 1: lobes above / below', p: pTop, at: [[8, 14, 'start'], [8, 30, 'start']] },
      { t: 'π bond 2: lobes in front / behind', p: pBack, hi: true, at: [[332, 46, 'end'], [332, 50, 'end'], [332, 56, 'end']] },
      { t: 'C–C σ bond', p: [E6.o[0], E6.o[1]], at: [[E6.o[0] - 50, 214, 'middle'], [E6.o[0] - 40, 216, 'middle'], [E6.o[0] + 40, 214, 'middle']] },
    ]);
    return s;
  },
  check() {
    const s = fig96.draw(fig96.cases[0]), out: Check[] = [];
    const [h1, c1, c2, h2] = ATOMS6.map((a) => a.at);
    const a1 = ang3(sub3(h1, c1), sub3(c2, c1)), a2 = ang3(sub3(c1, c2), sub3(h2, c2));
    out.push([`H–C≡C–H on one line: ${fmt(a1)}° at each carbon (sp, steric number 2)`, close(a1, 180, 1e-9) && close(a2, 180, 1e-9)]);
    const axis: V3 = sub3(c2, c1), [py, pz] = PI6.map((p) => p.axis);
    out.push([`The two π systems are mutually perpendicular (${fmt(ang3(py, pz))}°) and each perpendicular to the C–C axis (${fmt(ang3(py, axis))}°, ${fmt(ang3(pz, axis))}°)`, close(dot3(py, pz), 0) && close(dot3(py, axis), 0) && close(dot3(pz, axis), 0)]);
    out.push(['Each π bond is a side-by-side pair: the same p axis on both carbons (parallel), so the lobes overlap above/below and in front/behind', [1, 2].every((ci) => PI6.every((p) => Math.abs(dot3(p.axis, p.axis)) === 1)) && PI6.length === 2]);
    const sigma = 3, pi = PI6.length, valence = 2 * 4 + 2 * 1;
    out.push([`Bonds: ${sigma} σ (2 C–H, 1 C–C) + ${pi} π; electrons in bonds 2 × ${sigma + pi} = ${2 * (sigma + pi)} = valence electrons 2 × 4 + 2 × 1 = ${valence}`, 2 * (sigma + pi) === valence]);
    out.push(['Each carbon has four bonds: one C–H σ, one C–C σ, two C–C π (sp: two sp hybrids for σ, two unhybridised p for π)', 1 + 1 + pi === 4]);
    out.push([`The C≡C is drawn as three lines and the result reads "${RES96}": 1 σ + ${pi} π between the carbons, linear`, RES96 === `1 C–C σ + ${pi} C–C π; linear (${fmt(a1, 0)}°)`]);
    const lobesUp = lobe(c1[0], py, E6.gapY, 1), lobesDown = lobe(c1[0], py, E6.gapY, -1);
    out.push(['The lobes above and below are mirror images in the plane of the axis', lobesUp.every((p, i) => { const q = lobesDown[(48 - i + 24) % 48]; return close(p[0], q[0], 1e-9) && close(p[1] - E6.o[1], -(q[1] - E6.o[1]), 1e-9); })]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.7 · Kucherov hydration of ethyne and propyne (Topic 03, p. 426) */
/* ===================================================================== */
const CAP97 = 'Hydration of alkynes (Kucherov reaction: HgSO<sub>4</sub>, dil. H<sub>2</sub>SO<sub>4</sub>, 333 K). Ethyne gives the unstable enol CH<sub>2</sub>=CH–OH, which tautomerises to acetaldehyde (CH<sub>3</sub>CHO); propyne gives its enol, which tautomerises to propanone (CH<sub>3</sub>COCH<sub>3</sub>). Ethyne is the only alkyne that gives an aldehyde; all others give ketones.';
type Row97 = { name: string; R: string; reac: string; enol: string; prod: string; prodName: string; y: number; hi?: boolean };
const ROWS97: Row97[] = [
  { name: 'ethyne', R: 'H', reac: 'HC≡CH + H<sub>2</sub>O', enol: '[CH<sub>2</sub>=CH–OH]', prod: 'CH<sub>3</sub>CHO', prodName: 'acetaldehyde', y: 62, hi: true },
  { name: 'propyne', R: 'CH3', reac: 'CH<sub>3</sub>–C≡CH + H<sub>2</sub>O', enol: '[CH<sub>3</sub>–C(OH)=CH<sub>2</sub>]', prod: 'CH<sub>3</sub>COCH<sub>3</sub>', prodName: 'propanone (ketone)', y: 234 },
];
const COND97 = 'HgSO<sub>4</sub> / dil. H<sub>2</sub>SO<sub>4</sub>';
const SZ97 = 14;
/**
 * The chemistry behind a row, for R–C≡C–H: Markovnikov's rule puts the H of
 * water on the carbon that already has more H (C1) and the OH on the other (the
 * one carrying R); the enol then shifts to the keto form with C=O on that
 * carbon. It is an aldehyde when that carbon carries an H (R = H), else a ketone.
 */
function kucherov(R1: string, R2 = 'H') {
  const hA = R1 === 'H' ? 1 : 0, hB = R2 === 'H' ? 1 : 0;
  const ohOn = hB >= hA ? 'a' : 'b', ohSub = ohOn === 'a' ? R1 : R2, otherSub = ohOn === 'a' ? R2 : R1;
  const cSubs = (r: string) => (r === 'H' ? 0 : 1);
  return { ohOnMoreSubstituted: cSubs(ohSub) >= cSubs(otherSub), carbonyl: ohSub === 'H' ? 'aldehyde' : 'ketone' };
}
const RES97 = ['ethyne → aldehyde (unique);', 'all higher alkynes → ketones'];
/** Where each row's pieces sit: reactant start, the arrow, the enol, the down arrow and product. */
function geo97(row: Row97) {
  const y = row.y, reacW = mathW(row.reac, SZ97);
  const ax0 = 8 + reacW + 7, ax1 = ax0 + 64, enolX = ax1 + 7, enolW = mathW(row.enol, SZ97), mid = enolX + enolW / 2;
  return { y, reacW, ax0, ax1, enolX, enolW, mid, down: [mid, y + 13] as P, downEnd: [mid, y + 62] as P, prodAt: [mid, y + 80] as P };
}
const fig97: Diagram = {
  id: 'c11-09-fig-9.7',
  topic: 3,
  name: 'Kucherov hydration of alkynes',
  cases: [{ chip: 'Ethyne, propyne', cap: CAP97 }],
  draw() {
    const s = new Sketch(W, 440);
    ROWS97.forEach((row) => {
      const g = geo97(row);
      s.tag(8, g.y - 54, row.name, null, null);
      s.sym(8, g.y + 5, row.reac, { size: SZ97, anchor: 'start' });
      arrow(s, [g.ax0, g.y], [g.ax1, g.y], { w: 1.8 });
      s.sym((g.ax0 + g.ax1) / 2, g.y - 13, COND97, { size: 11 });
      s.sym((g.ax0 + g.ax1) / 2, g.y + 20, '333 K', { size: 11 });
      s.sym(g.enolX, g.y + 5, row.enol, { size: SZ97, anchor: 'start' });
      arrow(s, g.down, g.downEnd, { w: 1.8 });
      s.sym(g.mid + 8, g.y + 40, 'tautomerises', { size: 11.5, anchor: 'start' });
      s.sym(g.prodAt[0], g.prodAt[1] + 5, row.prod, { size: SZ97 });
    });
    s.sym(170, 356, 'Markovnikov: OH goes to the more substituted carbon', { size: 11.5, color: C.slate });
    resultBlock(s, RES97, { size: 13 });
    s.place(ROWS97.flatMap((row) => {
      const g = geo97(row);
      return [
        { t: 'enol, unstable', p: [g.enolX + 12, g.y + 13] as P, at: [[g.mid - 12, g.y + 32, 'end'], [g.mid - 12, g.y + 36, 'end'], [g.mid - 12, g.y + 40, 'end']] as [number, number, 'end'][] },
        { t: row.prodName, p: [g.prodAt[0] - mathW(row.prod, SZ97) / 2 - 5, g.prodAt[1]] as P, hi: row.hi, at: [[g.prodAt[0] - mathW(row.prod, SZ97) / 2 - 22, g.prodAt[1] - 11, 'end'], [g.prodAt[0] - 40, g.prodAt[1] + 14, 'end']] as [number, number, 'end'][] },
      ];
    }));
    return s;
  },
  check() {
    const s = fig97.draw(fig97.cases[0]), out: Check[] = [];
    ROWS97.forEach((row) => {
      const r = atomsOf(row.reac), e = atomsOf(row.enol), p = atomsOf(row.prod);
      out.push([`${row.name}: ${plain(row.reac)} (${formula(r)}) → enol ${formula(e)} → ${plain(row.prod)} ${formula(p)}: every step balanced (one H₂O adds; the tautomer is an isomer)`, same(r, e) && same(e, p)]);
    });
    out.push(['Ethyne\'s enol carries OH on a C=C carbon (CH₂=CH–OH); propyne\'s puts OH on C2, the carbon bonded to CH₃ (Markovnikov: more substituted carbon)', /=CH–OH\]$/.test(plain(ROWS97[0].enol)) && /^\[CH3–C\(OH\)=CH2\]$/.test(plain(ROWS97[1].enol)) && kucherov('CH3').ohOnMoreSubstituted]);
    out.push([`Keto form: ethyne's carbonyl carbon keeps an H → ${kucherov('H').carbonyl} (CH₃CHO); propyne's carries CH₃ and CH₃ → ${kucherov('CH3').carbonyl} (CH₃COCH₃)`, kucherov('H').carbonyl === 'aldehyde' && kucherov('CH3').carbonyl === 'ketone' && plain(ROWS97[0].prod) === 'CH3CHO' && plain(ROWS97[1].prod) === 'CH3COCH3']);
    const others: [string, string][] = [['CH3', 'H'], ['C2H5', 'H'], ['CH3', 'CH3'], ['C2H5', 'CH3']];
    out.push(['Every other alkyne tried (propyne, but-1-yne, but-2-yne, pent-2-yne) gives a ketone; only ethyne (H–C≡C–H) gives an aldehyde', kucherov('H', 'H').carbonyl === 'aldehyde' && others.every(([a, b]) => kucherov(a, b).carbonyl === 'ketone')]);
    out.push(['Conditions on each arrow as printed: HgSO₄ / dil. H₂SO₄ above, 333 K below; "tautomerises" on the second arrow', ROWS97.length === 2 && s.labels.filter((l) => l.text === plain(COND97)).length === 2 && s.labels.filter((l) => l.text === '333 K').length === 2 && s.labels.filter((l) => l.text === 'tautomerises').length === 2]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.8 · benzene: Kekulé structures, hybrid, edge-on (Topic 04, p. 433) */
/* ===================================================================== */
const CAP98 = 'Benzene. Two Kekulé structures (⟷) and the resonance hybrid, a hexagon with an inscribed circle (all C–C bonds 139 pm; six delocalised π electrons). Below: the planar sp<sup>2</sup> ring seen edge-on, with the π electron cloud above and below the plane.';
/** The book's bond lengths (pp. 430–431): C–C 154, C=C 134, benzene 139 pm. */
const PM = { single: 154, double: 134, benzene: 139 };
const B8 = { r: 33, y: 64, k1: 46, k2: 156, hyb: 262, circle: 0.6, k1d: [1, 3, 5], k2d: [0, 2, 4], edgeY: 262, scale: 0.75, cloudGap: 22, cloudRy: 11 };
/** Edge-on: the hexagon seen from its own plane along the line through two opposite edge midpoints spans vertex to vertex, 2 × 139 pm. */
const edgeHalf = () => PM.benzene * B8.scale;
const fig98: Diagram = {
  id: 'c11-09-fig-9.8',
  topic: 4,
  name: 'Benzene: Kekulé structures and hybrid',
  cases: [{ chip: 'Benzene, C₆H₆', cap: CAP98 }],
  draw() {
    const s = new Sketch(W, 336);
    ring(s, [B8.k1, B8.y], B8.r, { doubles: B8.k1d });
    ring(s, [B8.k2, B8.y], B8.r, { doubles: B8.k2d });
    both(s, [B8.k1 + B8.r * 0.87 + 9, B8.y], [B8.k2 - B8.r * 0.87 - 9, B8.y], { w: 1.6 });
    ring(s, [B8.hyb, B8.y], B8.r, { circle: B8.circle, circleColor: C.mari });
    s.tag((B8.k1 + B8.k2) / 2, 110, 'two Kekulé structures', null, null, { anchor: 'middle' });
    s.tag(B8.hyb, 110, 'resonance hybrid', null, null, { anchor: 'middle', hi: true });
    s.sym(B8.hyb - 8, 154, 'all C–C 139 pm;', { size: 12.5 });
    s.sym(B8.hyb - 8, 171, '6 delocalised π electrons', { size: 12.5 });
    // edge-on: the ring's plane as a thick line, the π cloud above and below it
    const cx = 170, h = edgeHalf();
    path(s, [[cx - h, B8.edgeY], [cx + h, B8.edgeY]], { w: 3.2 });
    [-1, 1].forEach((sg) => path(s, Array.from({ length: 73 }, (_, i): P => [cx + (h - 6) * Math.cos((2 * Math.PI * i) / 72), B8.edgeY + sg * B8.cloudGap + B8.cloudRy * Math.sin((2 * Math.PI * i) / 72)]), { w: 1.4, dash: true }));
    placeM(s, [
      { t: 'π electron cloud (above and below)', p: [cx - h * 0.55, B8.edgeY - B8.cloudGap - B8.cloudRy * 0.84], at: [[8, 194, 'start'], [8, 198, 'start']] },
      { t: 'planar sp<sup>2</sup> ring, edge-on', p: [cx + h, B8.edgeY], at: [[332, 304, 'end'], [332, 308, 'end']] },
    ]);
    return s;
  },
  check() {
    const s = fig98.draw(fig98.cases[0]), out: Check[] = [];
    const v = [0, 1, 2, 3, 4, 5].map((k) => hexPt([0, 0], B8.r, k));
    const sides = v.map((p, k) => len(p, v[(k + 1) % 6])), angs = v.map((p, k) => angleAt(v[(k + 5) % 6], p, v[(k + 1) % 6]));
    out.push([`Every ring is a regular hexagon: six equal sides, ${fmt(angs[0])}° at every carbon (sp², 120°)`, sides.every((x) => close(x, sides[0], 1e-9)) && angs.every((a) => close(a, 120, 1e-9))]);
    const perC = (d: number[]) => [0, 1, 2, 3, 4, 5].map((c) => d.filter((k) => k === c || (k + 1) % 6 === c).length);
    out.push([`Kekulé I doubles edges ${B8.k1d.join(', ')}, Kekulé II ${B8.k2d.join(', ')}: in each, every carbon is in exactly one C=C (alternating)`, perC(B8.k1d).every((n) => n === 1) && perC(B8.k2d).every((n) => n === 1)]);
    out.push(['The two Kekulé structures are the same atoms with the double bonds swapped (each edge double in exactly one of them): resonance forms, not isomers', [0, 1, 2, 3, 4, 5].every((k) => B8.k1d.includes(k) !== B8.k2d.includes(k))]);
    const piE = B8.k1d.length * 2;
    out.push([`π electrons: 3 C=C × 2 = ${piE} = 4n + 2 with n = ${(piE - 2) / 4}`, piE === 6 && (piE - 2) % 4 === 0]);
    out.push([`Hybrid: one bond length for all six C–C, ${PM.benzene} pm, between C=C (${PM.double} pm) and C–C (${PM.single} pm)`, PM.double < PM.benzene && PM.benzene < PM.single && sides.every((x) => close(x, sides[0], 1e-9))]);
    out.push([`The inscribed circle (radius ${B8.circle} r) lies inside the hexagon (apothem ${fmt(Math.cos(rad(30)), 3)} r), concentric with it`, B8.circle < Math.cos(rad(30))]);
    const h = edgeHalf(), scaleR = B8.scale;
    out.push([`Edge-on, a regular hexagon spans vertex to vertex = 2 × side = 2 × ${PM.benzene} pm: drawn ${fmt(2 * h)} px at ${scaleR} px/pm`, close(2 * h, 2 * PM.benzene * scaleR, 1e-9)]);
    out.push(['The π cloud lies above and below the plane, mirror images of each other, each spanning the ring', [-1, 1].every((sg) => close(Math.abs(sg * B8.cloudGap), B8.cloudGap))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.9 · the general EAS mechanism (Topic 04, p. 433)              */
/* ===================================================================== */
const CAP99 = 'General mechanism of electrophilic aromatic substitution. Step 1: reagent and catalyst give the electrophile E<sup>+</sup>. Step 2 (slow, rate-determining): benzene attacks E<sup>+</sup> to give the arenium ion, with E and H on one sp<sup>3</sup> carbon and the positive charge delocalised over three resonance contributors. Step 3: loss of H<sup>+</sup> from the sp<sup>3</sup> carbon restores the aromatic ring, now carrying E.';
/**
 * The arenium ion on a hexagon numbered from the sp³ carbon C1 (vertex 0)
 * clockwise: each contributor's two C=C (edges k: vertex k–k+1) and the vertex
 * carrying +, in the book's order: + on C6, on C4, on C2 (upper left, bottom,
 * upper right).
 */
const ARENIUM: { doubles: number[]; plus: number }[] = [{ doubles: [1, 3], plus: 5 }, { doubles: [1, 4], plus: 3 }, { doubles: [2, 4], plus: 1 }];
const G9 = { r: 25, rowA: 70, benz: 118, ePlus: 166, xs: [62, 170, 278], rowB: 216, sub: 26, subAng: 32, prodY: 434, h: 502 };
/** A contributor's E and H positions, on the sp³ carbon (vertex 0). */
const subs = (c: P): { E: P; H: P; c1: P } => {
  const c1 = hexPt(c, G9.r, 0), u = (d: number): P => [Math.sin(rad(d)) * (G9.sub + 6), -Math.cos(rad(d)) * (G9.sub + 6)];
  return { c1, E: [c1[0] + u(-G9.subAng)[0], c1[1] + u(-G9.subAng)[1]], H: [c1[0] + u(G9.subAng)[0], c1[1] + u(G9.subAng)[1]] };
};
const plusAt = (c: P, k: number): P => { const v = hexPt(c, G9.r, k); return [v[0] + (c[0] - v[0]) * 0.58, v[1] + (c[1] - v[1]) * 0.58]; };
const fig99: Diagram = {
  id: 'c11-09-fig-9.9',
  topic: 4,
  name: 'Mechanism of electrophilic aromatic substitution',
  cases: [{ chip: 'EAS mechanism', cap: CAP99 }],
  draw() {
    const s = new Sketch(W, G9.h), sz = 14;
    s.sym(170, 20, 'step 1: reagent + catalyst → E<sup>+</sup> (electrophile)', { size: 12.5 });
    ring(s, [G9.benz, G9.rowA], G9.r, { circle: B8.circle });
    s.sym(G9.ePlus, G9.rowA + 5, '+ E<sup>+</sup>', { size: 15 });
    // step 2: down to the arenium ion
    arrow(s, [170, G9.rowA + 34], [170, 140], { w: 1.8 });
    s.sym(180, G9.rowA + 50, 'step 2', { size: 12, anchor: 'start' });
    s.sym(180, G9.rowA + 66, 'slow, r.d.s.', { size: 12, anchor: 'start' });
    ARENIUM.forEach((a, i) => {
      const c: P = [G9.xs[i], G9.rowB];
      ring(s, c, G9.r, { doubles: a.doubles });
      const { c1, E, H } = subs(c);
      [E, H].forEach((p, j) => { const [q, t] = ends(c1, null, p, labRect(p, j ? 'H' : 'E', sz)); path(s, [q, t], { w: 1.7 }); lab(s, p, j ? 'H' : 'E', sz); });
      s.sym(plusAt(c, a.plus)[0], plusAt(c, a.plus)[1] + 14 * 0.25, '+', { size: 14, color: C.mari });
      if (i < 2) both(s, [G9.xs[i] + G9.r * 0.87 + 7, G9.rowB], [G9.xs[i + 1] - G9.r * 0.87 - 7, G9.rowB], { w: 1.4, color: C.slate });
    });
    // the three contributors are one ion: a line drawn round them
    const box: Rect = [16, 146, 324, 252];
    path(s, rectPts(box), { color: C.grey, w: 1.2, dash: true });
    s.sym(170, 310, '+ delocalised, 3 resonance contributors', { size: 12 });
    // step 3: loss of H⁺
    arrow(s, [170, 322], [170, 360], { w: 1.8 });
    s.sym(180, 346, 'step 3: base removes H<sup>+</sup>', { size: 12, anchor: 'start' });
    const pc: P = [170, G9.prodY];
    ring(s, pc, G9.r, { circle: B8.circle });
    const top = hexPt(pc, G9.r, 0), eAt: P = [top[0], top[1] - G9.sub - 8], [q, t] = ends(top, null, eAt, labRect(eAt, 'E', sz));
    path(s, [q, t], { w: 1.7 });
    lab(s, eAt, 'E', sz);
    s.tag(170, 472, 'aromatic ring restored', null, null, { anchor: 'middle' });
    placeM(s, [{ t: 'arenium ion (σ-complex)', p: [box[0] + 60, box[3]], hi: true, at: [[box[0] + 4, 266, 'start'], [box[0] + 4, 270, 'start']] }]);
    return s;
  },
  check() {
    const s = fig99.draw(fig99.cases[0]), out: Check[] = [];
    ARENIUM.forEach((a, i) => {
      const bonds = [0, 1, 2, 3, 4, 5].map((c) => 2 + a.doubles.filter((k) => k === c || (k + 1) % 6 === c).length + (c === 0 ? 2 : 1));
      out.push([`Contributor ${i + 1}: bonds per carbon C1–C6 = ${bonds.join(', ')} (two ring bonds each, plus: C1 sp³ with E and H = 4; C${a.plus + 1}, one H and no C=C = 3, the cation; every other carbon one H and one C=C = 4)`, bonds[0] === 4 && bonds[a.plus] === 3 && bonds.every((b, c) => c === 0 || c === a.plus || b === 4)]);
    });
    const plusC = ARENIUM.map((a) => a.plus + 1).sort();
    out.push([`The + sits on C${plusC.join(', C')}: ortho, para, ortho to the sp³ carbon C1 — the three positions the charge is delocalised over`, JSON.stringify(plusC) === JSON.stringify([2, 4, 6])]);
    out.push(['Every contributor has 4 π electrons (two C=C) over five sp² carbons, formal charge +1: the arenium ion has lost aromaticity', ARENIUM.every((a) => a.doubles.length * 2 === 4)]);
    const shift = (a: number[], b: number[]) => a.filter((k) => !b.includes(k)).length === 1;
    out.push(['Neighbouring contributors differ by one C=C moved one bond over (one π pair shifting toward the + carbon)', shift(ARENIUM[0].doubles, ARENIUM[1].doubles) && shift(ARENIUM[1].doubles, ARENIUM[2].doubles)]);
    const benz = { C: 6, H: 6 }, ion = { C: 6, H: 6, E: 1 }, prod = { C: 6, H: 5, E: 1 };
    out.push(['Step 2: C₆H₆ + E⁺ → [C₆H₆E]⁺ (atoms and charge +1 balance); step 3: [C₆H₆E]⁺ → C₆H₅E + H⁺ (balance, charge +1 = 0 + 1)', same({ ...benz, E: 1 }, ion) && same(ion, { ...prod, H: prod.H + 1 }) && 1 === 0 + 1]);
    out.push(['The product ring is aromatic again: six sp² carbons, 6 π electrons (the circle), E in place of one H', prod.H === 5 && s.labels.filter((l) => l.text === 'E').length === 4]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional topic A · the aromaticity decision procedure ("Figure 1", p. 440) */
/* ===================================================================== */
const CAPA1 = 'The aromaticity decision procedure. Apply the three gates in order; a species can be ruled non-aromatic on structure alone (broken conjugation or non-planarity) before the electron count is even consulted.';
/** A ring atom: 'cc' sp² C in a C=C (1 π electron), 'cat' empty p (0), 'an' lone pair in p (2), 'sp3' CH₂ (no p orbital), 'npy' pyridine-type N (1; its lone pair in plane), 'xlp' pyrrole/furan N–H or O (lone pair in p: 2). */
type Atom = 'cc' | 'cat' | 'an' | 'sp3' | 'npy' | 'xlp';
const PIE: Record<Atom, number | null> = { cc: 1, cat: 0, an: 2, sp3: null, npy: 1, xlp: 2 };
type Species = { name: string; ring: Atom[]; planar: boolean; book: Verdict; bookE: number };
type Verdict = 'non-aromatic' | 'anti-aromatic' | 'aromatic';
const rep = (a: Atom, n: number): Atom[] => Array(n).fill(a);
/** The addendum's canonical set (table, pp. 440–441), with the book's π count and verdict. */
const CANON: Species[] = [
  { name: 'benzene', ring: rep('cc', 6), planar: true, book: 'aromatic', bookE: 6 },
  { name: 'naphthalene', ring: rep('cc', 10), planar: true, book: 'aromatic', bookE: 10 },
  { name: 'cyclopropenyl cation', ring: [...rep('cc', 2), 'cat'], planar: true, book: 'aromatic', bookE: 2 },
  { name: 'cyclopentadienyl anion', ring: [...rep('cc', 4), 'an'], planar: true, book: 'aromatic', bookE: 6 },
  { name: 'cyclopentadienyl cation', ring: [...rep('cc', 4), 'cat'], planar: true, book: 'anti-aromatic', bookE: 4 },
  { name: 'tropylium ion', ring: [...rep('cc', 6), 'cat'], planar: true, book: 'aromatic', bookE: 6 },
  { name: 'cyclobutadiene', ring: rep('cc', 4), planar: true, book: 'anti-aromatic', bookE: 4 },
  { name: 'cyclooctatetraene', ring: rep('cc', 8), planar: false, book: 'non-aromatic', bookE: 8 },
  { name: 'cyclopentadiene', ring: [...rep('cc', 4), 'sp3'], planar: true, book: 'non-aromatic', bookE: 4 },
  { name: 'pyridine', ring: [...rep('cc', 5), 'npy'], planar: true, book: 'aromatic', bookE: 6 },
  { name: 'pyrrole', ring: [...rep('cc', 4), 'xlp'], planar: true, book: 'aromatic', bookE: 6 },
];
/** The three gates, in order. Returns the verdict and the gate that decided it. */
function decide(sp: Species): { verdict: Verdict; gate: 1 | 2 | 3; e: number } {
  const e = sp.ring.reduce((a, x) => a + (PIE[x] ?? 0), 0);
  if (sp.ring.some((x) => PIE[x] === null)) return { verdict: 'non-aromatic', gate: 1, e };
  if (!sp.planar) return { verdict: 'non-aromatic', gate: 2, e };
  if (e % 4 === 2) return { verdict: 'aromatic', gate: 3, e };
  return { verdict: 'anti-aromatic', gate: 3, e };
}
const FS = 11.5, LH = 14.5;
type Box = { id: string; lines: string[]; c: P; hi?: boolean; verdict?: Verdict; eg?: string[] };
const BOXES: Box[] = [
  { id: 'g1', lines: ['cyclic AND fully', 'conjugated?', '(every ring atom', 'has a p orbital)'], c: [76, 76] },
  { id: 'g2', lines: ['planar?', '(parallel p orbitals)'], c: [76, 204] },
  { id: 'g3', lines: ['count the π', 'electrons in', 'the loop'], c: [76, 300] },
  { id: 'non', lines: ['NON-AROMATIC', '(e.g. cyclopentadiene,', 'cyclooctatetraene)'], c: [258, 146], verdict: 'non-aromatic', eg: ['cyclopentadiene', 'cyclooctatetraene'] },
  { id: 'anti', lines: ['ANTI-AROMATIC (4<i>n</i>)', '(e.g. cyclobutadiene,', 'cyclopentadienyl cation)'], c: [254, 278], verdict: 'anti-aromatic', eg: ['cyclobutadiene', 'cyclopentadienyl cation'] },
  { id: 'arom', lines: ['AROMATIC (4<i>n</i> + 2)', '(e.g. benzene, tropylium ion,', 'cyclopentadienyl anion)'], c: [226, 388], hi: true, verdict: 'aromatic', eg: ['benzene', 'tropylium ion', 'cyclopentadienyl anion'] },
];
const boxRect = (b: Box): Rect => {
  const w = Math.max(...b.lines.map((t) => Math.max(mathW(t, FS), plain(t).length * FS * 0.5))) + 16, h = b.lines.length * LH + 12;
  return [b.c[0] - w / 2, b.c[1] - h / 2, b.c[0] + w / 2, b.c[1] + h / 2];
};
const BX = (id: string) => boxRect(BOXES.find((b) => b.id === id)!);
/** The arrows: from box, to box, the label, which side of the arrow it sits (+1: left of the direction of travel, so above a rightward arrow and right of a downward one), and the ends (on the boxes' edges, 4 px off). */
type Link = { from: string; to: string; label: string; side: 1 | -1; a: P; b: P; hi?: boolean };
function links(): Link[] {
  const g1 = BX('g1'), g2 = BX('g2'), g3 = BX('g3'), non = BX('non'), anti = BX('anti'), arom = BX('arom'), gx = BOXES[0].c[0];
  return [
    { from: 'g1', to: 'g2', label: 'yes', side: 1, a: [gx, g1[3] + 4], b: [gx, g2[1] - 4] },
    { from: 'g2', to: 'g3', label: 'yes', side: 1, a: [gx, g2[3] + 4], b: [gx, g3[1] - 4] },
    { from: 'g1', to: 'non', label: 'no', side: 1, a: [g1[2] + 4, (g1[1] + g1[3]) / 2 + 6], b: [non[0] - 4, non[1] + 16] },
    { from: 'g2', to: 'non', label: 'no', side: 1, a: [g2[2] + 4, (g2[1] + g2[3]) / 2 - 4], b: [non[0] - 4, non[3] - 14] },
    { from: 'g3', to: 'anti', label: '4, 8, …', side: 1, a: [g3[2] + 4, (g3[1] + g3[3]) / 2], b: [anti[0] - 4, (g3[1] + g3[3]) / 2] },
    { from: 'g3', to: 'arom', label: '2, 6, 10, …', side: -1, a: [gx + 14, g3[3] + 4], b: [arom[0] - 4, arom[1] + 18], hi: true },
  ];
}
const LS = 11.5;
/** Where a link's label goes: off the arrow's middle on its side, pushed out until its box is 6 px clear of the arrow. */
function linkLabel(l: Link): { at: P; rect: Rect } {
  const L = len(l.a, l.b), n: P = [((l.b[1] - l.a[1]) / L) * l.side, (-(l.b[0] - l.a[0]) / L) * l.side], m: P = [(l.a[0] + l.b[0]) / 2, (l.a[1] + l.b[1]) / 2];
  const w = Math.max(mathW(l.label, LS), plain(l.label).length * LS * 0.5), h = LS * 0.94;
  for (let d = 4; ; d += 0.5) {
    const c: P = [m[0] + n[0] * d, m[1] + n[1] * d], r: Rect = [c[0] - w / 2, c[1] - h / 2, c[0] + w / 2, c[1] + h / 2];
    const gap = Math.min(...Array.from({ length: 41 }, (_, i) => rectDist(r, [l.a[0] + ((l.b[0] - l.a[0]) * i) / 40, l.a[1] + ((l.b[1] - l.a[1]) * i) / 40])));
    if (gap >= 6 || d > 60) return { at: [c[0], c[1] + LS * 0.25], rect: r };
  }
}
const figA1: Diagram = {
  id: 'c11-09-A-d1',
  topic: 5,
  name: 'Aromaticity decision procedure',
  cases: [{ chip: 'Three gates', cap: CAPA1 }],
  draw() {
    const s = new Sketch(W, 432);
    s.sym(170, 16, 'apply the gates in order, top to bottom', { size: 11.5, color: C.slate });
    BOXES.forEach((b) => {
      const r = boxRect(b);
      path(s, rectPts(r), { w: b.hi ? 1.7 : 1.2, color: b.hi ? C.mari : C.slate });
      b.lines.forEach((t, k) => s.sym(b.c[0], r[1] + 6 + LH * k + LH / 2 + FS * 0.36, t, { size: FS }));
    });
    links().forEach((l) => {
      arrow(s, l.a, l.b, { w: l.hi ? 1.9 : 1.5, color: l.hi ? C.mari : C.ink });
      const { at } = linkLabel(l);
      s.sym(at[0], at[1], l.label, { size: LS });
    });
    return s;
  },
  check() {
    const s = figA1.draw(figA1.cases[0]), out: Check[] = [];
    const rects = BOXES.map((b) => [b.id, boxRect(b)] as [string, Rect]);
    const which = (p: P) => rects.filter(([, r]) => rectDist(r, p) <= 4.5).map(([id]) => id).join('/') || '?';
    const read = links().map((l) => `${which(l.a)}→${which(l.b)}`);
    out.push([`Read off the drawing, the arrows run ${read.join(', ')}`, JSON.stringify(read) === JSON.stringify(links().map((l) => `${l.from}→${l.to}`))]);
    out.push(['The gates are applied in order, top to bottom: gate 1 above gate 2 above gate 3, joined by "yes"; each "no" goes to NON-AROMATIC', BX('g1')[3] < BX('g2')[1] && BX('g2')[3] < BX('g3')[1] && links().filter((l) => l.label === 'yes').length === 2 && links().filter((l) => l.label === 'no').every((l) => l.to === 'non')]);
    const n4 = [1, 2].map((n) => 4 * n), n42 = [0, 1, 2].map((n) => 4 * n + 2);
    out.push([`"4, 8, …" are 4n (n = 1, 2: ${n4.join(', ')}); "2, 6, 10, …" are 4n + 2 (n = 0, 1, 2: ${n42.join(', ')})`, JSON.stringify(n4) === '[4,8]' && JSON.stringify(n42) === '[2,6,10]']);
    BOXES.filter((b) => b.verdict).forEach((b) => {
      const got = b.eg!.map((n) => { const sp = CANON.find((x) => x.name === n)!; return `${n} ${decide(sp).verdict} (gate ${decide(sp).gate}, ${decide(sp).e} π e)`; });
      out.push([`${b.lines[0].replace(/<[^>]+>/g, '')}: each example run through the gates lands here — ${got.join('; ')}`, b.eg!.every((n) => decide(CANON.find((x) => x.name === n)!).verdict === b.verdict)]);
    });
    const ng = ['cyclopentadiene', 'cyclooctatetraene'].map((n) => decide(CANON.find((x) => x.name === n)!).gate);
    out.push([`Non-aromatic on structure alone: cyclopentadiene stops at gate ${ng[0]} (sp³ CH₂), cyclooctatetraene at gate ${ng[1]} (tub, non-planar) — before any electron count`, ng[0] === 1 && ng[1] === 2]);
    const table = CANON.map((sp) => ({ sp, d: decide(sp) }));
    const bad = table.filter(({ sp, d }) => d.verdict !== sp.book || d.e !== sp.bookE).map(({ sp, d }) => `${sp.name}: ${d.e}, ${d.verdict}`);
    out.push([`The addendum's whole canonical set (${CANON.length} species, pp. 440–441) gets the book's π count and verdict from the procedure${bad.length ? `; not: ${bad.join(', ')}` : ''}`, bad.length === 0]);
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_11_09B: Diagram[] = [fig96, fig97, fig98, fig99, figA1];

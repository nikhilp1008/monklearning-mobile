import { C, LABEL_GAP, Rect, Sketch, crosses, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 7 (Alternating Current): every drawing of the
 * Master Reference book, redrawn. The chapter's drawings are its three numbered
 * figures, each printed on a "CHAPTER 7 · FIGURES" page (7.1 on p. 470, 7.2 on
 * p. 485, 7.3 on p. 494; the first copy of each caption sits a page earlier,
 * where the text refers to it). It has no unnumbered drawings: pp. 459–516
 * were checked page by page, the Supplement (Addenda A–E, pp. 500–516)
 * included; the rest is prose, typeset equations, boxed results and tables
 * (the quantity/unit tables of every sub-topic, the mechanical–LC analogy on
 * p. 476, the series-versus-parallel resonance table on p. 504, the three
 * damping regimes on p. 510 and the Summary of Key Results on p. 516).
 *
 * The app numbers the book's sub-topics in page order (book Subtopics 00, 01,
 * 04, 02, 03 are app Topics 01–05, indices 0–4; Addenda A–E are 5–9), so
 * Figure 7.1 (book Subtopic 01) is topic 1, Figure 7.2 (book Subtopic 02,
 * Resonance) is topic 3 and Figure 7.3 (book Subtopic 03, Power and
 * Transformers) is topic 4.
 *
 * Every figure is computed from the physics, never placed by eye: the phasors
 * added as vectors (V_R along I⃗, V_L 90° ahead, V_C 90° behind) with the
 * voltmeter readings of the topic's Example 2; the resonance curves from
 * I = V/√(R² + (ωL − 1/(ωC))²), their half-power points solved, not read; the
 * transformer read back off its wires as nodes, its turns counted. Each
 * `check` recomputes what the figure and its caption state and measures that
 * no label or tag touches a line it does not name.
 */

const W = 340;
type P = [number, number];
const D2R = Math.PI / 180;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
const unit = (a: P): P => { const l = Math.hypot(a[0], a[1]); return [a[0] / l, a[1] / l]; };
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
/** A point at math angle `deg` (counter-clockwise, y up) and distance R from c, on the y-down drawing. */
const polar = (c: P, R: number, deg: number): P => [c[0] + R * Math.cos(deg * D2R), c[1] - R * Math.sin(deg * D2R)];
/** The z component of a × b for two drawn directions, taken in the page's frame (x right, y UP): positive = b is anticlockwise of a. */
const turnZ = (a: P, b: P) => a[0] * -b[1] - -a[1] * b[0];

/* ---------- drawing helpers (as in physics-12-06.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, curves, arrows), by sketch:
 * `clearance` measures each tag and label against them. Dotted guides and
 * hatching are left out (`free`).
 */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
  if (!o.free) keep(s, pts);
}
/** A closed outline, never filled. */
function outline(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + ' Z';
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round"${dashOf(o.dash)}/>`);
  keep(s, [...pts, pts[0]]);
}
/** A rectangle [x0, y0, x1, y1] as an outline. */
const box = (s: Sketch, r: Rect, o: Stroke = {}) => outline(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]], o);
/** Every arrowhead drawn, by sketch, as its tip and its middle: a tag's dot keeps off them (`dotsOffHeads`). */
const HEADS = new WeakMap<Sketch, [P, P][]>();
const keepHead = (s: Sketch, tip: P, u: P, L: number) => HEADS.set(s, [...(HEADS.get(s) ?? []), [tip, add(tip, u, -L / 2)]]);
/** An arrow (a phasor, a direction) that labels keep clear of. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.vec(a[0], a[1], b[0], b[1], o);
  keep(s, [a, b]);
  keepHead(s, b, unit(sub(b, a)), 9);
}
/** A small arrowhead at p, pointing along the unit direction u. */
function head(s: Sketch, p: P, u: P, color: string = C.ink, L = 9, hw = 4.5) {
  const b = add(p, u, -L), nv: P = [-u[1], u[0]];
  const tri: P[] = [p, add(b, nv, hw), add(b, nv, -hw)];
  s.add(`<path d="M${tri.map((q) => `${r1(q[0])} ${r1(q[1])}`).join(' L')} Z" fill="${color}"/>`);
  keep(s, [...tri, tri[0]]);
  keepHead(s, p, u, L);
}
/** The points of an arc about c, radius R, from math angle a0 to a1 (degrees). */
const arcPts = (c: P, R: number, a0: number, a1: number, n = 90): P[] => samples(a0, a1, n).map((a) => polar(c, R, a));
/** A circle as a kept polyline (never filled). */
const ring = (s: Sketch, c: P, R: number, o: Stroke = {}) => path(s, arcPts(c, R, 0, 360, 180), o);
/**
 * A dotted guide, free of the clearance check (it only joins marks), but
 * never through a label or a tag. See `guideHits`.
 */
const GUIDES = new WeakMap<Sketch, [P, P][]>();
const guide = (s: Sketch, a: P, b: P, color: string = C.slate, dash: 'dot' | 'dash' = 'dot') => {
  GUIDES.set(s, [...(GUIDES.get(s) ?? []), [a, b]]);
  path(s, [a, b], { color, w: 1.1, dash, free: true });
};
/** Distance from a point to a rectangle (0 inside it). */
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/**
 * How far every tag (pill and result block) and every label stays from every
 * kept line, sampled each half pixel: the closest one, and what it is.
 */
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
/** The labels and tags a dotted guide runs through (more than 4 px into the box). */
const guideHits = (s: Sketch): string[] => {
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  return [...new Set((GUIDES.get(s) ?? []).flatMap(([a, b]) => boxes.filter(([, r]) => crosses(a, b, r, 4)).map(([name]) => name)))];
};
/** The check every figure makes on its own layout: labels clear of the lines, and no dotted guide through a label. */
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  const through = guideHits(s);
  return [
    `Every tag and label stays at least ${LABEL_GAP} px clear of every line: the closest is "${what}", ${fmt(gap, 1)} px; no dotted guide runs through one${through.length ? ` (but through ${through.map((t) => `"${t}"`).join(', ')})` : ''}`,
    gap >= LABEL_GAP - 1e-9 && !through.length,
  ];
};
/** No two labels on one drawing touch (the kit's audit checks tags; this checks the STIX labels against each other). */
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two symbols or labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
/** No tag's dot on an arrowhead: there it reads as naming the arrow and hides its head. Within 8 px of a head's tip or middle. */
const dotsOffHeads = (s: Sketch): Check => {
  const bad = s.tags.filter((t) => t.from && (HEADS.get(s) ?? []).some((h) => h.some((q) => len(q, t.from as P) < 8))).map((t) => t.name);
  return [`No tag's dot sits on an arrowhead${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
/** Every label inside the frame (the kit's audit checks tags only). */
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
/** The layout checks of a drawn sketch. */
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), dotsOffHeads(s), inFrame(s)];
/**
 * The result (what the figure states), bottom right, ink-edged, maths set in
 * STIX (Sketch.text). Registered as a tag, so the audit keeps everything else off it.
 */
function resultBlock(s: Sketch, lines: string[], o: { size?: number } = {}): Rect {
  const size = o.size ?? 15, lh = size + 8;
  const plain = (t: string) => t.replace(/<\/?(?:i|sub|sup)>/g, '');
  const w = Math.max(...lines.map((t) => mathW(t, size))) + 30, h = lines.length * lh + 14;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => s.text(x0 + w / 2, y0 + 7 + lh * i + lh / 2 + size * 0.36, t, { size, semibold: true }));
  return [x0, y0, x0 + w, y0 + h];
}
/** Point-to-segment distance. */
function distSeg(p: P, a: P, b: P) {
  const d = sub(b, a), L = dotp(d, d) || 1, k = Math.max(0, Math.min(1, dotp(sub(p, a), d) / L));
  return len(p, add(a, d, k));
}

/* ---------- circuits ---------- */
/** Wires as drawn, by sketch, so a check can read the circuit back off the drawing. */
const WIRES = new WeakMap<Sketch, P[][]>();
/** A conductor for the node check; drawn too. */
function wire(s: Sketch, pts: P[], o: { w?: number; color?: string } = {}) {
  path(s, pts, { w: o.w, color: o.color });
  const l = WIRES.get(s) ?? []; l.push(pts); WIRES.set(s, l);
}
/** Does p lie on the polyline (within half a pixel)? */
const onWire = (p: P, w: P[]) => w.some((a, i) => i > 0 && distSeg(p, w[i - 1], a) < 0.5);
/**
 * The circuit's nodes, read off the drawn wires: wires that touch (an end of one
 * on another) are one conductor; each named terminal belongs to the conductor
 * whose wire it lies on. Returns the terminals' names grouped by conductor.
 */
function nodes(s: Sketch, terms: Record<string, P>): string[][] {
  const ws = WIRES.get(s) ?? [], parent = ws.map((_, i) => i);
  const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  ws.forEach((a, i) => ws.forEach((b, j) => { if (i < j && (onWire(a[0], b) || onWire(a[a.length - 1], b) || onWire(b[0], a) || onWire(b[b.length - 1], a))) parent[find(i)] = find(j); }));
  const groups = new Map<number, string[]>();
  Object.entries(terms).forEach(([name, p]) => { const i = ws.findIndex((w) => onWire(p, w)); const k = i < 0 ? -1 - groups.size : find(i); groups.set(k, [...(groups.get(k) ?? []), name]); });
  return [...groups.values()].map((g) => g.sort()).sort((a, b) => a[0].localeCompare(b[0]));
}
const sameNodes = (a: string[][], b: string[][]) => JSON.stringify(a) === JSON.stringify(b.map((g) => [...g].sort()).sort((x, y) => x[0].localeCompare(y[0])));
const showNodes = (n: string[][]) => n.map((g) => `{${g.join(', ')}}`).join(' ');

/* ===================================================================== */
/* Figure 7.1 · phasor diagram of a series LCR circuit (topic 02)         */
/* ===================================================================== */
/**
 * Drawn to the topic's Example 2 (p. 472): voltmeter readings V_R = 80 V,
 * V_L = 120 V, V_C = 60 V, so the 80–60–100 triangle, at 1.6 px per volt. The
 * current I⃗ is the reference along +x (its length has no scale: it is the
 * direction every voltage is measured from); V⃗_R = IR lies along it, V⃗_L = IX_L
 * 90° ahead (anticlockwise), V⃗_C = IX_C 90° behind. V⃗_L − V⃗_C stands at the tip
 * of V⃗_R, and the resultant V⃗ = IZ closes the triangle at angle φ.
 */
const G71 = { O: [112, 236] as P, k: 1.6, VR: 80, VL: 120, VC: 60, Ilen: 28, arcR: 40, sq: 14 };
const g71 = () => {
  const { O, k, VR, VL, VC } = G71;
  const tipR: P = [O[0] + k * VR, O[1]], tipL: P = [O[0], O[1] - k * VL], tipC: P = [O[0], O[1] + k * VC];
  const tipV: P = [tipR[0], O[1] - k * (VL - VC)];
  return { tipR, tipL, tipC, tipV, tipI: [O[0] + G71.Ilen, O[1]] as P, phi: Math.atan2(VL - VC, VR) / D2R };
};
const fig71: Diagram = {
  id: 'p12-07-fig-7.1',
  topic: 1,
  name: 'Phasor diagram of a series LCR circuit',
  cases: [{ chip: 'Voltage leads', cap: 'Phasor diagram of a series LCR circuit when <i>ωL</i> > 1/(<i>ωC</i>): the resultant source voltage <i>V</i> = <i>IZ</i> leads the current by the phase angle <i>φ</i>.' }],
  draw() {
    const s = new Sketch(W, 432);
    const { O, arcR, sq } = G71, g = g71();
    // the axes through the origin
    path(s, [[O[0] - 34, O[1]], [W - 22, O[1]]], { color: C.grey, w: 1.2 });
    path(s, [[O[0], 20], [O[0], g.tipC[1] + 22]], { color: C.grey, w: 1.2 });
    // V_L and V_C on the vertical, V_R along the current
    arrow(s, O, g.tipL, { w: 2.4 });
    arrow(s, O, g.tipC, { w: 2.4 });
    arrow(s, O, g.tipR, { w: 2.4 });
    // the current, the reference phasor, along +x
    head(s, g.tipI, [1, 0], C.ink, 11, 5.5);
    // their levels carried across to the triangle
    guide(s, [g.tipL[0] + 6, g.tipL[1]], [g.tipR[0], g.tipL[1]]);
    guide(s, [g.tipC[0] + 6, g.tipC[1]], [g.tipR[0], g.tipC[1]]);
    // V_L − V_C at the tip of V_R, with its right angle. Its head sits midway
    // up: at the top it piled onto the head of V⃗, which ends at the same point,
    // and the right-angle mark stands clear of V⃗_R's head (14 px, the head is
    // 11 long and 5.5 high), where at 9 px the head covered it (Android review
    // of Physics 12 Ch 7, 2026-10-22).
    path(s, [g.tipR, g.tipV], { w: 2.2 });
    head(s, [g.tipR[0], (g.tipR[1] + g.tipV[1]) / 2 - 5], [0, -1], C.ink, 11, 5.5);
    path(s, [[g.tipR[0] - sq, O[1]], [g.tipR[0] - sq, O[1] - sq], [g.tipR[0], O[1] - sq]], { color: C.slate, w: 1.2 });
    // the resultant
    arrow(s, O, g.tipV, { color: C.mari, w: 2.8 });
    path(s, arcPts(O, arcR, 0, g.phi, 30), { color: C.slate, w: 1.4 });
    const pl = polar(O, arcR + 14, g.phi / 2);
    s.sym(pl[0] + 2, pl[1] + 6, '<i>φ</i>', { size: 17 });
    // the names, as the book writes them
    s.sym(O[0] - 10, g.tipL[1] + 6, '<i>V⃗</i><sub>L</sub> = <i>IX</i><sub>L</sub>', { size: 16, anchor: 'end' });
    s.sym(O[0] - 10, g.tipC[1] + 6, '<i>V⃗</i><sub>C</sub> = <i>IX</i><sub>C</sub>', { size: 16, anchor: 'end' });
    s.sym(g.tipI[0] - 8, O[1] + 26, '<i>I⃗</i>', { size: 17 });
    s.sym(g.tipR[0] - 6, O[1] + 26, '<i>V⃗</i><sub>R</sub> = <i>IR</i>', { size: 16 });
    s.sym(g.tipR[0] + 10, (O[1] + g.tipV[1]) / 2 + 6, '<i>V⃗</i><sub>L</sub> − <i>V⃗</i><sub>C</sub>', { size: 16, anchor: 'start' });
    const vl = add(polar(O, len(O, g.tipV) * 0.48, g.phi), [-6, -26]);
    s.sym(vl[0], vl[1], '<i>V⃗</i> = <i>IZ</i>', { size: 16, color: C.amber });
    resultBlock(s, ['<i>X</i><sub>L</sub> > <i>X</i><sub>C</sub> ⇒ <i>φ</i> > 0', '(voltage leads current)'], { size: 15 });
    s.place([
      { t: 'Source voltage', hi: true, p: polar(O, len(O, g.tipV) * 0.8, g.phi), at: [[W - 8, 70, 'end'], [W - 8, 78, 'end'], [W - 8, 86, 'end']] },
    ]);
    return s;
  },
  check() {
    const { O, k, VR, VL, VC } = G71, g = g71();
    const s = fig71.draw(fig71.cases[0]);
    // the drawn phasors, read back as vectors (page frame, y up), in volts
    const v = (tip: P): P => [(tip[0] - O[0]) / k, (O[1] - tip[1]) / k];
    const I = v(g.tipI), R = v(g.tipR), L = v(g.tipL), Cc = v(g.tipC), Vd = v(g.tipV);
    const sum: P = [R[0] + L[0] + Cc[0], R[1] + L[1] + Cc[1]];
    const ang = (a: P) => Math.atan2(a[1], a[0]) / D2R;
    const V = Math.hypot(sum[0], sum[1]), phi = ang(sum);
    return [
      [`V⃗_R lies along the current I⃗ (both at ${fmt(ang(R), 3)}°): in phase`, close(ang(R), ang(I), 1e-9)],
      [`V⃗_L is ${fmt(ang(L) - ang(I), 3)}° ahead of I⃗ (anticlockwise) and V⃗_C ${fmt(ang(I) - ang(Cc), 3)}° behind it`, close(ang(L) - ang(I), 90, 1e-9) && close(ang(I) - ang(Cc), 90, 1e-9) && turnZ(sub(g.tipI, O), sub(g.tipL, O)) > 0],
      [`The drawn resultant V⃗ = IZ is the vector sum V⃗_R + V⃗_L + V⃗_C = (${fmt(sum[0], 3)}, ${fmt(sum[1], 3)}) V, and the arrow V⃗_L − V⃗_C closes the triangle at the tip of V⃗_R, at right angles to it`, close(Vd[0], sum[0], 1e-9) && close(Vd[1], sum[1], 1e-9) && close(dotp(sub(g.tipV, g.tipR), sub(g.tipR, O)), 0, 1e-9)],
      [`Example 2 (p. 472): V = √(V_R² + (V_L − V_C)²) = √(${VR}² + ${VL - VC}²) = ${fmt(V, 3)} V (the book's 100 V), not ${VR + VL + VC} V`, close(V, 100, 1e-9) && V < VR + VL + VC],
      [`tan φ = (V_L − V_C)/V_R = (X_L − X_C)/R = ${fmt((VL - VC) / VR, 3)}: φ = ${fmt(phi, 2)}° > 0 because X_L > X_C, so the source voltage leads the current, as the result says`, close(Math.tan(phi * D2R), (VL - VC) / VR, 1e-9) && phi > 0 && VL > VC],
      [`The φ arc runs from I⃗ (0°) to V⃗ (${fmt(g.phi, 2)}°)`, close(g.phi, phi, 1e-9)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 7.2 · resonance curves for three values of R (topic 04)         */
/* ===================================================================== */
/**
 * I = V/√(R² + (ωL − 1/(ωC))²) for L = 0.10 H and C = 10 μF (Example 3's,
 * p. 487: ω₀ = 1000 rad s⁻¹), V = 1 V, and R = 40, 80 and 200 Ω (Q = 2.5,
 * 1.25 and 0.5): Example 3's own R = 10 Ω (Q = 10) gives a spike 100 rad s⁻¹
 * wide that cannot be seen on a phone, so the book's three schematic curves are
 * drawn with these R. The axis runs from 0.4ω₀ to 1.9ω₀, about the book's
 * window. On the middle curve the half-power frequencies are solved from
 * |X_L − X_C| = R, and the dashed line at I_max/√2 meets the curve there.
 */
const RES = { L: 0.1, C: 10e-6, V: 1, Rs: [40, 80, 200], mid: 1 };
const w0 = 1 / Math.sqrt(RES.L * RES.C);
const Irms = (R: number) => (w: number) => (1000 * RES.V) / Math.sqrt(R * R + (w * RES.L - 1 / (w * RES.C)) ** 2);
/** The half-power frequencies of R: the two roots of |ωL − 1/(ωC)| = R. */
const halfPower = (R: number) => { const a = R / (2 * RES.L), b = Math.sqrt(a * a + 1 / (RES.L * RES.C)); return { w1: b - a, w2: b + a }; };
const F72 = { ox: 88, oy: 296, u0: 0.4, u1: 1.9, x1: 330, sy: 9.6 };
const X72 = (w: number) => F72.ox + 6 + ((w / w0 - F72.u0) * (F72.x1 - F72.ox - 6)) / (F72.u1 - F72.u0);
const Y72 = (mA: number) => F72.oy - mA * F72.sy;
const w72 = (x: number) => w0 * (F72.u0 + ((x - F72.ox - 6) * (F72.u1 - F72.u0)) / (F72.x1 - F72.ox - 6));
const CURVES72 = new WeakMap<Sketch, P[][]>();
const STYLE72 = [{ color: C.ink, w: 2.2 }, { color: C.mari, w: 2.8 }, { color: C.slate, w: 2.2 }];
const NAMES72 = ['smallest', 'intermediate', 'largest'];
/** The key's row: where it starts, its baseline, each name's width at 13 (STIX, about 0.47 em a character), and the room between entries. */
const KEY72 = { x: 22, y: 378, w: NAMES72.map((n) => (n.length + 2) * 13 * 0.47), gap: 16 };
const fig72: Diagram = {
  id: 'p12-07-fig-7.2',
  topic: 3,
  name: 'Resonance curves',
  cases: [{ chip: 'Three resistances', cap: 'Resonance curves of a series LCR circuit for three values of <i>R</i>; on the middle curve the half-power frequencies <i>ω</i><sub>1</sub> and <i>ω</i><sub>2</sub> mark the bandwidth Δ<i>ω</i> = <i>ω</i><sub>2</sub> − <i>ω</i><sub>1</sub> = <i>R</i>/<i>L</i>.' }],
  draw() {
    const s = new Sketch(W, 390);
    const { ox, oy } = F72;
    const Rm = RES.Rs[RES.mid], hp = halfPower(Rm), Imax = Irms(Rm)(w0), Ihalf = Imax / Math.SQRT2;
    // axes
    s.vec(ox, oy, ox, 18, { color: C.grey, w: 1.3 });
    s.vec(ox, oy, W - 4, oy, { color: C.grey, w: 1.3 });
    keep(s, [[ox, oy], [ox, 18]]);
    keep(s, [[ox, oy], [W - 4, oy]]);
    s.sym(ox + 10, 26, 'rms current <i>I</i>', { size: 14, anchor: 'start' });
    s.sym((ox + W) / 2, oy + 46, 'angular frequency <i>ω</i>', { size: 14 });
    // I_max and I_max/√2 of the middle curve, across the graph
    guide(s, [ox, Y72(Imax)], [F72.x1, Y72(Imax)], C.faint, 'dot');
    guide(s, [ox, Y72(Ihalf)], [F72.x1, Y72(Ihalf)], C.slate, 'dash');
    path(s, [[ox - 4, Y72(Imax)], [ox, Y72(Imax)]], { color: C.grey, w: 1.3, free: true });
    path(s, [[ox - 4, Y72(Ihalf)], [ox, Y72(Ihalf)]], { color: C.grey, w: 1.3, free: true });
    s.sym(ox - 8, Y72(Imax) + 5, '<i>I</i><sub>max</sub> = <i>V</i>/<i>R</i>', { size: 13, anchor: 'end', color: C.slate });
    s.sym(ox - 8, Y72(Ihalf) + 5, '<i>I</i><sub>max</sub>/√2', { size: 13, anchor: 'end', color: C.slate });
    // ω₀ (faint), ω₁ and ω₂ dropped from the half-power points to the axis
    const pk = Y72(Irms(RES.Rs[0])(w0));
    // (broken round the bandwidth's label, which it would run through)
    const yLab = Y72(Ihalf) + 26;
    guide(s, [X72(w0), oy], [X72(w0), yLab + 8], C.faint, 'dot');
    guide(s, [X72(w0), yLab - 16], [X72(w0), pk + 4], C.faint, 'dot');
    guide(s, [X72(hp.w1), oy], [X72(hp.w1), Y72(Ihalf)]);
    guide(s, [X72(hp.w2), oy], [X72(hp.w2), Y72(Ihalf)]);
    [[hp.w1, '<i>ω</i><sub>1</sub>'], [w0, '<i>ω</i><sub>0</sub>'], [hp.w2, '<i>ω</i><sub>2</sub>']].forEach(([w, lab]) => {
      path(s, [[X72(w as number), oy], [X72(w as number), oy + 4]], { color: C.grey, w: 1.3, free: true });
      s.sym(X72(w as number), oy + 22, lab as string, { size: 15 });
    });
    // the three curves, the middle one last (on top)
    const curves = RES.Rs.map((R) => samples(F72.u0 * w0, F72.u1 * w0, 600).map((w): P => [X72(w), Y72(Irms(R)(w))]));
    CURVES72.set(s, curves);
    [2, 0, 1].forEach((i) => path(s, curves[i], STYLE72[i]));
    // the bandwidth: a double arrow on the half-power line, between ω₁ and ω₂
    const yb = Y72(Ihalf), m = (X72(hp.w1) + X72(hp.w2)) / 2;
    arrow(s, [m, yb], [X72(hp.w1) + 1, yb], { w: 1.4 });
    arrow(s, [m, yb], [X72(hp.w2) - 1, yb], { w: 1.4 });
    s.sym(m, yLab, 'Δ<i>ω</i> = <i>ω</i><sub>2</sub> − <i>ω</i><sub>1</sub> = <i>R</i>/<i>L</i>', { size: 13 });
    // the key: each curve's own line and its R, in a row under the axis's
    // name, in the order of the peaks' heights. Stacked at the top right it
    // sat level with the tallest peak, its last line, "largest R", right
    // beside the peak that belongs to the smallest (Android review of
    // Physics 12 Ch 7, 2026-10-22).
    let kx = KEY72.x;
    NAMES72.forEach((n, i) => {
      path(s, [[kx, KEY72.y - 4], [kx + 18, KEY72.y - 4]], STYLE72[i]);
      s.sym(kx + 23, KEY72.y + 1, `${n} <i>R</i>`, { size: 13, anchor: 'start', color: i === RES.mid ? C.amber : C.text });
      kx += 23 + KEY72.w[i] + KEY72.gap;
    });
    return s;
  },
  check() {
    const s = fig72.draw(fig72.cases[0]);
    const curves = CURVES72.get(s) ?? [];
    const Rm = RES.Rs[RES.mid], hp = halfPower(Rm), I = Irms(Rm), Imax = I(w0);
    // read each drawn curve back: its peak and where it is
    const peaks = curves.map((c) => c.reduce((b, p) => (p[1] < b[1] ? p : b)));
    const wPk = peaks.map((p) => w72(p[0])), iPk = peaks.map((p) => (F72.oy - p[1]) / F72.sy);
    // Example 3 (p. 487): R = 10 Ω, L = 0.10 H, C = 10 μF
    const ex = halfPower(10);
    const XL = (w: number) => w * RES.L, XC = (w: number) => 1 / (w * RES.C);
    return [
      [`ω₀ = 1/√(LC) = ${fmt(w0, 3)} rad s⁻¹ for L = ${RES.L} H, C = 10 μF (Example 3's)`, close(w0, 1000, 1e-9)],
      [`All three drawn curves peak at ω₀ (read back: ${wPk.map((w) => fmt(w, 0)).join(', ')} rad s⁻¹, within one step of the 600-point plot): R does not move the peak`, wPk.every((w) => Math.abs(w - w0) < ((F72.u1 - F72.u0) * w0) / 600 + 1e-9)],
      [`Their peak heights are V/R: ${iPk.map((i) => fmt(i, 2)).join(', ')} mA for R = ${RES.Rs.join(', ')} Ω, so the smallest R gives the tallest peak`, iPk.every((v, i) => Math.abs(v - (1000 * RES.V) / RES.Rs[i]) < 0.01) && iPk[0] > iPk[1] && iPk[1] > iPk[2]],
      [`On the middle curve (R = ${Rm} Ω) the half-power points ω₁ = ${fmt(hp.w1, 1)} and ω₂ = ${fmt(hp.w2, 1)} rad s⁻¹ satisfy |X_L − X_C| = R and I = I_max/√2: the dashed line meets the curve there`, [hp.w1, hp.w2].every((w) => close(Math.abs(XL(w) - XC(w)), Rm, 1e-9) && close(I(w), Imax / Math.SQRT2, 1e-9))],
      [`Δω = ω₂ − ω₁ = ${fmt(hp.w2 - hp.w1, 6)} rad s⁻¹ = R/L exactly, and ω₁ω₂ = ω₀² (ω₀ = √(ω₁ω₂) = ${fmt(Math.sqrt(hp.w1 * hp.w2), 3)})`, close(hp.w2 - hp.w1, Rm / RES.L, 1e-9) && close(hp.w1 * hp.w2, w0 * w0, 1e-6)],
      [`ω₁ sits ${fmt(w0 - hp.w1, 1)} and ω₂ ${fmt(hp.w2 - w0, 1)} rad s⁻¹ from ω₀: not symmetric at this low Q = ${fmt((w0 * RES.L) / Rm, 2)} (as the book draws them)`, w0 - hp.w1 < hp.w2 - w0],
      [`The largest R stays below the half-power line everywhere (peak ${fmt(iPk[2], 2)} mA < ${fmt(Imax / Math.SQRT2, 2)} mA), so the bandwidth label sits clear between the curves`, iPk[2] < Imax / Math.SQRT2],
      [`Example 3 (p. 487): Q = ω₀L/R = ${fmt((w0 * RES.L) / 10, 3)}, Δω = R/L = ${fmt(10 / RES.L, 3)} rad s⁻¹, exact half-power roots ${fmt(ex.w1, 1)} and ${fmt(ex.w2, 1)} rad s⁻¹ (the book's 10, 100, 951.2 and 1051.2)`, fmt((w0 * RES.L) / 10, 6) === '10' && fmt(ex.w1, 1) === '951.2' && fmt(ex.w2, 1) === '1051.2'],
      [`The key names the curves in a row under the graph, in the order of their peaks (${NAMES72.join(', ')} R), away from every peak`, KEY72.y - 12 > F72.oy + 46 && s.labels.filter((l) => / R$/.test(l.text)).every((l) => l.rect[1] > F72.oy + 46 && l.rect[2] <= W - 4)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 7.3 · a transformer (topic 05)                                  */
/* ===================================================================== */
/**
 * A rectangular laminated core (its laminations drawn as thin grey lines). The
 * primary winds the left limb, the secondary the right; the turns are drawn in
 * the ratio of the topic's MCQ Q2 (p. 498, 100 V stepped up to 400 V): 3 primary
 * turns, 12 secondary, a step-up transformer as the book draws it. The flux Φ
 * circulates round the core, one sense on every limb. The circuit is read back
 * off the wires.
 */
const G73 = { core: [96, 66, 244, 194] as Rect, win: [122, 92, 218, 168] as Rect, Np: 3, Ns: 12, src: [42, 130] as P, lamp: [298, 130] as P, r: 15, slant: 4, over: 7 };
const g73 = () => {
  const { core, win, Np, Ns, slant, over } = G73;
  const turnsAt = (n: number, y0: number, y1: number) => Array.from({ length: n }, (_, i) => (n === 1 ? (y0 + y1) / 2 : y0 + ((y1 - y0) * i) / (n - 1)));
  const prim = turnsAt(Np, 104, 156).map((y): [P, P] => [[core[0] - over, y + slant], [win[0] + over, y - slant]]);
  const sec = turnsAt(Ns, 96, 164).map((y): [P, P] => [[win[2] - over, y + slant], [core[2] + over, y - slant]]);
  // the flux path through the middle of each limb
  const fl: Rect = [(core[0] + win[0]) / 2, (core[1] + win[1]) / 2, (win[2] + core[2]) / 2, (win[3] + core[3]) / 2];
  const gap = 12;
  const flux: [P, P][] = [
    [[fl[0] + gap, fl[1]], [fl[2] - gap, fl[1]]],
    [[fl[2], fl[1] + gap], [fl[2], fl[3] - gap]],
    [[fl[2] - gap, fl[3]], [fl[0] + gap, fl[3]]],
    [[fl[0], fl[3] - gap], [fl[0], fl[1] + gap]],
  ];
  return { prim, sec, fl, flux };
};
const fig73: Diagram = {
  id: 'p12-07-fig-7.3',
  topic: 4,
  name: 'Transformer',
  cases: [{ chip: 'Shared flux', cap: 'A transformer: the primary (<i>N</i><sub>p</sub> turns, AC source) and secondary (<i>N</i><sub>s</sub> turns, load lamp) share the alternating flux Φ carried by a laminated soft-iron core.' }],
  draw() {
    const s = new Sketch(W, 322);
    const { core, win, src, lamp, r, Np, Ns } = G73, g = g73();
    // the laminations (thin grey sheets), then the core's outline
    for (let x = core[0] + 6; x < core[2] - 2; x += 6) {
      if (x > win[0] - 2 && x < win[2] + 2) {
        path(s, [[x, core[1] + 2], [x, win[1] - 2]], { color: C.grey, w: 0.8, free: true });
        path(s, [[x, win[3] + 2], [x, core[3] - 2]], { color: C.grey, w: 0.8, free: true });
      } else path(s, [[x, core[1] + 2], [x, core[3] - 2]], { color: C.grey, w: 0.8, free: true });
    }
    box(s, core, { w: 2 });
    box(s, win, { w: 2 });
    // the windings, then the flux round the core over them: drawn first, the
    // flux down the right limb lay under the secondary's twelve turns, its head
    // hidden by the last of them (Android review of Physics 12 Ch 7, 2026-10-22)
    g.prim.forEach(([a, b]) => path(s, [a, b], { w: 2.2 }));
    g.sec.forEach(([a, b]) => path(s, [a, b], { w: 2.2 }));
    g.flux.forEach(([a, b]) => arrow(s, a, b, { color: C.mari, w: 2.2 }));
    s.sym((win[0] + win[2]) / 2, (win[1] + win[3]) / 2 + 8, 'Φ', { size: 22, color: C.amber });
    const pTop = g.prim[0][0], pBot = g.prim[g.prim.length - 1][0], sTop = g.sec[0][1], sBot = g.sec[g.sec.length - 1][1];
    // the AC source and its leads
    ring(s, src, r, { w: 1.8 });
    s.sym(src[0], src[1] + 5, '~', { size: 18 });
    wire(s, [pTop, [src[0], pTop[1]], [src[0], src[1] - r]]);
    wire(s, [pBot, [src[0], pBot[1]], [src[0], src[1] + r]]);
    // the lamp and its leads
    ring(s, lamp, r, { w: 1.8 });
    const d = r / Math.SQRT2;
    path(s, [[lamp[0] - d, lamp[1] - d], [lamp[0] + d, lamp[1] + d]], { w: 1.6 });
    path(s, [[lamp[0] - d, lamp[1] + d], [lamp[0] + d, lamp[1] - d]], { w: 1.6 });
    wire(s, [sTop, [lamp[0], sTop[1]], [lamp[0], lamp[1] - r]]);
    wire(s, [sBot, [lamp[0], sBot[1]], [lamp[0], lamp[1] + r]]);
    // the turns, named as the book does
    s.sym((core[0] + win[0]) / 2, 54, '<i>N</i><sub>p</sub> turns', { size: 15 });
    s.sym((win[2] + core[2]) / 2, 54, '<i>N</i><sub>s</sub> turns', { size: 15 });
    s.place([
      { t: 'Alternating flux', hi: true, p: [(core[0] + core[2]) / 2, g.fl[1]], at: [[(core[0] + core[2]) / 2, 8, 'middle'], [(core[0] + core[2]) / 2, 4, 'middle']] },
      { t: 'AC source', p: [src[0] - r * 0.7, src[1] + r * 0.7], at: [[4, 214, 'start'], [4, 220, 'start']] },
      { t: 'Load (lamp)', p: [lamp[0] + r * 0.7, lamp[1] + r * 0.7], at: [[W - 4, 214, 'end'], [W - 4, 220, 'end']] },
      { t: 'Primary', p: add(g.prim[Np - 1][0], sub(g.prim[Np - 1][1], g.prim[Np - 1][0]), 0.3), at: [[60, 252, 'start'], [56, 258, 'start']] },
      { t: 'Secondary', p: add(g.sec[Ns - 1][0], sub(g.sec[Ns - 1][1], g.sec[Ns - 1][0]), 0.7), at: [[200, 252, 'start'], [204, 258, 'start']] },
      { t: 'Laminated soft-iron core', p: [(core[0] + core[2]) / 2, core[3]], at: [[(core[0] + core[2]) / 2, 290, 'middle'], [(core[0] + core[2]) / 2, 294, 'middle']] },
    ]);
    return s;
  },
  check() {
    const { core, win, src, lamp, r, Np, Ns } = G73, g = g73();
    const s = fig73.draw(fig73.cases[0]);
    const conductors = nodes(s, { 'primary end 1': g.prim[0][0], 'primary end 2': g.prim[Np - 1][0], 'source +': [src[0], src[1] - r], 'source −': [src[0], src[1] + r], 'secondary end 1': g.sec[0][1], 'secondary end 2': g.sec[Ns - 1][1], 'lamp 1': [lamp[0], lamp[1] - r], 'lamp 2': [lamp[0], lamp[1] + r] });
    // every turn crosses its whole limb (it wraps the core, so the core's flux threads it)
    const wraps = (t: [P, P], x0: number, x1: number) => t[0][0] < x0 && t[1][0] > x1;
    const primOk = g.prim.every((t) => wraps(t, core[0], win[0]) && (t[0][1] + t[1][1]) / 2 > win[1] && (t[0][1] + t[1][1]) / 2 < win[3]);
    const secOk = g.sec.every((t) => wraps(t, win[2], core[2]) && (t[0][1] + t[1][1]) / 2 > win[1] && (t[0][1] + t[1][1]) / 2 < win[3]);
    // the flux arrows: each turns the same way (clockwise on the page's y-up frame, i.e. turnZ negative) from the one before
    const dirs = g.flux.map(([a, b]) => unit(sub(b, a)));
    const sense = dirs.map((u, i) => turnZ(u, dirs[(i + 1) % dirs.length]));
    const insideCore = g.flux.flat().every(([x, y]) => x > core[0] && x < core[2] && y > core[1] && y < core[3] && !(x > win[0] && x < win[2] && y > win[1] && y < win[3]));
    // MCQ Q2 (p. 498): 100 V → 400 V, I_p = 8 A
    const k = Ns / Np, Vs = 100 * k, Is = (8 * 100) / Vs;
    // Example 3 (p. 496): 2200 V → 220 V, I_s = 10 A, η = 90%
    const Pin = (220 * 10) / 0.9, Ip = Pin / 2200;
    return [
      [`Read off the wires, the conductors are ${showNodes(conductors)}: the primary's two ends reach the AC source, the secondary's the lamp, and the two circuits share no wire`, sameNodes(conductors, [['primary end 1', 'source +'], ['primary end 2', 'source −'], ['lamp 1', 'secondary end 1'], ['lamp 2', 'secondary end 2']])],
      [`The ${Np} primary turns wrap the left limb and the ${Ns} secondary turns the right limb of one core: the same flux threads every turn of both coils`, g.prim.length === Np && g.sec.length === Ns && primOk && secOk],
      [`The flux runs round the core inside its limbs, one sense all the way (each arrow turns ${sense.every((z) => z < 0) ? 'clockwise' : 'the other way'} from the last): a closed path`, insideCore && sense.every((z) => z < 0)],
      [`N_s/N_p = ${Ns}/${Np} = ${k} > 1, a step-up transformer as the book draws it (more turns on the secondary): MCQ Q2's 100 V → ${fmt(Vs, 1)} V with I_s = I_p(V_p/V_s) = ${fmt(Is, 2)} A (the book's 2 A)`, k === 4 && close(Vs, 400) && close(Is, 2)],
      [`Example 3: N_p : N_s = 2200/220 = ${2200 / 220} : 1, P_out = 2200 W, P_in = ${fmt(Pin, 0)} W, I_p = ${fmt(Ip, 2)} A (the book's 2444 W, 1.11 A)`, Math.round(Pin) === 2444 && fmt(Ip, 2) === '1.11'],
      ...layout(s),
    ];
  },
};

export const DIAGRAMS_PHYSICS_12_07: Diagram[] = [fig71, fig72, fig73];

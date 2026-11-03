import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 8 (Electromagnetic Waves): every drawing of the
 * Master Reference book, redrawn. The chapter's drawings are its two numbered
 * figures, each printed on a "CHAPTER 8 · FIGURES" page (8.1 on p. 522, 8.2 on
 * p. 532; the first copy of each caption sits a page earlier, where the text
 * refers to it). It has no unnumbered drawings: pp. 517–554 were checked page
 * by page, the Supplement (Addenda A–D, pp. 542–554) included; the rest is
 * prose, typeset equations, boxed answers and tables (the quantity/unit tables
 * of Topics 01–03 and the spectrum table on p. 538).
 *
 * Every figure is computed from the physics, never placed by eye: the balloon
 * surface S₂ is traced from the Amperian loop round the plate's edge into the
 * gap, and the check intersects it with the wire, the plate and the field
 * lines; the wave's fields are E⃗ = E₀ sin(kx) ŷ and B⃗ = B₀ sin(kx) ẑ, projected
 * from 3D, and the check takes E⃗ × B⃗ in 3D. Each `check` recomputes what the
 * figure and its caption state and measures that no label or tag touches a
 * line it does not name.
 */

const W = 340;
type P = [number, number];
type V3 = [number, number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const SUP: Record<string, string> = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
/** A number in scientific form for a check's message: 4.25 × 10⁻⁵. */
const sci = (n: number, d = 2) => { const e = Math.floor(Math.log10(Math.abs(n))); return `${(n / 10 ** e).toFixed(d).replace('-', '−')} × 10${[...String(e)].map((c) => SUP[c]).join('')}`; };
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const unit = (a: P): P => { const l = Math.hypot(a[0], a[1]); return [a[0] / l, a[1] / l]; };
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
const cross3 = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot3 = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const norm3 = (a: V3) => Math.hypot(a[0], a[1], a[2]);
const sameWay = (a: V3, b: V3, tol = 1e-9) => dot3(a, b) / (norm3(a) * norm3(b)) > 1 - tol;
const EPS0 = 8.85e-12;

/* ---------- drawing helpers (as in physics-12-06.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, curves, arrows), by sketch:
 * `clearance` measures each tag and label against them.
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
/** An arrow (a field line, a direction) that labels keep clear of. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.vec(a[0], a[1], b[0], b[1], o);
  keep(s, [a, b]);
  keepHead(s, b, unit(sub(b, a)), 9);
}
/** A small arrowhead at p, pointing along the unit direction u (a current on a wire). */
function head(s: Sketch, p: P, u: P, color: string = C.ink, L = 9, hw = 4.5) {
  const b = add(p, u, -L), nv: P = [-u[1], u[0]];
  const tri: P[] = [p, add(b, nv, hw), add(b, nv, -hw)];
  s.add(`<path d="M${tri.map((q) => `${r1(q[0])} ${r1(q[1])}`).join(' L')} Z" fill="${color}"/>`);
  keep(s, [...tri, tri[0]]);
  keepHead(s, p, u, L);
}
/** Points on an ellipse round c (semi-axes rx, ry), parameter t from t0 to t1 (radians, y down). */
const ellPts = (c: P, rx: number, ry: number, t0: number, t1: number, n = 120): P[] => samples(t0, t1, n).map((t): P => [c[0] + rx * Math.cos(t), c[1] + ry * Math.sin(t)]);
/** Distance from a point to a rectangle (0 inside it). */
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/** How far every tag and label stays from every kept line, sampled each half pixel: the closest one, and what it is. */
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
/** The check every figure makes on its own layout: labels clear of the lines. */
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  return [`Every tag and label stays at least ${LABEL_GAP} px clear of every line: the closest is "${what}", ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9];
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
/** Do segments a–b and c–d cross? */
function segsCross(a: P, b: P, c: P, d: P) {
  const o = (p: P, q: P, r: P) => Math.sign((q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]));
  return o(a, b, c) !== o(a, b, d) && o(c, d, a) !== o(c, d, b);
}
/** Does the polyline cross segment c–d anywhere? */
const polyCrosses = (pts: P[], c: P, d: P) => pts.some((p, i) => i > 0 && segsCross(pts[i - 1], p, c, d));

/* ===================================================================== */
/* Figure 8.1 · the charging capacitor and its two surfaces (topic 01)    */
/* ===================================================================== */
/**
 * The Amperian loop C circles the wire; it is drawn in perspective (an ellipse,
 * its plane across the wire), so the flat disc S₁ it bounds is its inside, and
 * the wire pierces it at the centre. The balloon S₂ shares the loop: its outline
 * runs from the loop's top and bottom, round the edge of the + plate (the loop
 * is wider than the plates, so the balloon clears them; the book's drawing cuts
 * through the + plate) to a nose in the gap. Three equal, parallel arrows from
 * + to − show the uniform field.
 */
const G81 = { cy: 104, loop: [92, 18, 70] as [number, number, number], plateH: 52, pl: [180, 188] as [number, number], mi: [302, 310] as [number, number], nose: 266, wireX0: 8, Ey: [-34, 0, 34], Ic: 42 };
/** The balloon's outline: y = cy ∓ R √(1 − ((x − x₀)/(nose − x₀))²) from the loop's top, round to the nose, back to its bottom. */
const balloon = (): P[] => {
  const { cy, loop, nose } = G81, [x0, , R] = loop;
  const half = samples(0, Math.PI / 2, 120).map((t): P => [x0 + (nose - x0) * Math.sin(t), cy - R * Math.cos(t)]);
  return [...half, ...half.slice(0, -1).reverse().map(([x, y]): P => [x, 2 * cy - y])];
};
const fig81: Diagram = {
  id: 'p12-08-fig-8.1',
  topic: 0,
  name: 'Charging capacitor and the Amperian loop',
  cases: [{ chip: 'Two surfaces', cap: 'A parallel-plate capacitor being charged. A circular Amperian loop around the connecting wire. Two surfaces share this loop: a flat disc <i>S</i><sub>1</sub> that the wire pierces (catching conduction current), and a bulging “balloon” surface <i>S</i><sub>2</sub> that passes through the gap between the plates (catching no conduction current). Arrows show the conduction current in the wire and the uniform E-field between the plates.' }],
  draw() {
    const s = new Sketch(W, 238);
    const { cy, loop, plateH, pl, mi, wireX0, Ey, Ic } = G81, [lx, rx, R] = loop;
    // the wire into the + plate, and its current
    path(s, [[wireX0, cy], [pl[0], cy]], { w: 1.8 });
    head(s, [Ic, cy], [1, 0], C.ink, 11, 5.5);
    s.sym(Ic - 4, cy - 14, '<i>I</i><sub>c</sub>', { size: 16 });
    // the plates
    box(s, [pl[0], cy - plateH, pl[1], cy + plateH], { w: 1.8 });
    box(s, [mi[0], cy - plateH, mi[1], cy + plateH], { w: 1.8 });
    s.sym(pl[0] - 8, cy - 22, '+<i>q</i>', { size: 16, anchor: 'end' });
    s.sym(mi[1] + 8, cy - 22, '−<i>q</i>', { size: 16, anchor: 'start' });
    // the uniform field, + to −
    Ey.forEach((dy) => arrow(s, [pl[1] + 2, cy + dy], [mi[0] - 2, cy + dy], { color: C.slate, w: 1.6 }));
    s.sym(282, cy - 44, '<i>E⃗</i>', { size: 17, color: C.slate });
    // the loop (and the disc S₁ it bounds)
    path(s, ellPts([lx, cy], rx, R, 0, 2 * Math.PI, 160), { w: 2.2 });
    s.sym(lx - rx - 8, cy - 44, '<i>C</i>', { size: 16, anchor: 'end' });
    s.sym(lx, cy - 22, '<i>S</i><sub>1</sub>', { size: 16 });
    // the balloon S₂
    path(s, balloon(), { color: C.mari, w: 2.6 });
    s.sym(271, cy - 12, '<i>S</i><sub>2</sub>', { size: 16, anchor: 'start', color: C.amber });
    s.place([
      { t: 'Balloon surface', hi: true, p: balloon()[60], at: [[W - 8, 4, 'end'], [W - 8, 2, 'end']] },
      // The loop is named from above and the disc from straight below, its line
      // crossing only the loop's own outline to reach inside it: from the right
      // it also crossed the balloon's lower edge (Android review of Physics 12
      // Ch 8, 2026-10-22).
      { t: 'Amperian loop', p: ellPts([lx, cy], rx, R, -2.4, -2.4, 1)[0], at: [[4, 4, 'start'], [4, 8, 'start']] },
      { t: 'Flat disc', p: [lx - 6, cy + 30], at: [[4, 200, 'start'], [4, 206, 'start']] },
    ]);
    return s;
  },
  check() {
    const { cy, loop, plateH, pl, mi, wireX0, Ey, nose } = G81, [lx, rx, R] = loop;
    const s = fig81.draw(fig81.cases[0]);
    const wireA: P = [wireX0, cy], wireB: P = [pl[0], cy];
    const b = balloon(), top = b[0], bot = b[b.length - 1];
    // the wire meets the disc's plane (x = lx) inside the loop: at its centre
    const inside = (p: P) => ((p[0] - lx) / rx) ** 2 + ((p[1] - cy) / R) ** 2 < 1;
    const wireAt: P = [lx, wireA[1] + ((wireB[1] - wireA[1]) * (lx - wireA[0])) / (wireB[0] - wireA[0])];
    const pierces = lx > wireA[0] && lx < wireB[0] && inside(wireAt) && close(wireAt[1], cy);
    // the balloon: bounded by the loop, clear of the + plate, not crossed by the wire
    const plateEdges: [P, P][] = [[[pl[0], cy - plateH], [pl[1], cy - plateH]], [[pl[1], cy - plateH], [pl[1], cy + plateH]], [[pl[1], cy + plateH], [pl[0], cy + plateH]], [[pl[0], cy + plateH], [pl[0], cy - plateH]]];
    const hitsPlate = plateEdges.some(([c, d]) => polyCrosses(b, c, d));
    const gapToPlate = Math.min(...b.map((p) => rectDist([pl[0], cy - plateH, pl[1], cy + plateH], p)));
    const wireThrough = polyCrosses(b, wireA, wireB);
    // the field lines: from the + plate to the − plate, equal and parallel, each through S₂
    const Elines = Ey.map((dy): [P, P] => [[pl[1] + 2, cy + dy], [mi[0] - 2, cy + dy]]);
    const uniform = Elines.every(([a, c]) => close(a[1], c[1]) && close(len(a, c), len(Elines[0][0], Elines[0][1])) && c[0] > a[0]);
    const throughS2 = Elines.every(([a, c]) => polyCrosses(b, a, c));
    // Example 1 (p. 521): A = 80 cm², dE/dt = 6.0 × 10⁸ V m⁻¹ s⁻¹
    const Id = EPS0 * 80e-4 * 6.0e8;
    // Example 2: q = q₀ sin ωt, q₀ = 8.0 nC, 50 Hz
    const Id2 = 8e-9 * 2 * Math.PI * 50;
    return [
      ['The wire runs through the loop’s centre and meets the flat disc S₁ inside it: S₁ catches the conduction current I_c', pierces],
      [`S₂ is bounded by the same loop: its outline starts at the loop’s top and ends at its bottom (${fmt(top[0], 1)}, ${fmt(top[1], 1)}) / (${fmt(bot[0], 1)}, ${fmt(bot[1], 1)})`, close(top[0], lx) && close(top[1], cy - R) && close(bot[0], lx) && close(bot[1], cy + R) && rx < R],
      [`S₂ passes round the + plate’s edge (never through the plate: ${fmt(gapToPlate, 1)} px clear) into the gap, its nose at x = ${nose} between the plates (${pl[1]} to ${mi[0]})`, !hitsPlate && gapToPlate >= 4 && nose > pl[1] && nose < mi[0]],
      ['No wire crosses S₂ (the wire ends on the + plate): S₂ catches no conduction current', !wireThrough && wireB[0] <= pl[0]],
      ['The field arrows run from the + plate to the − plate, equal and parallel (uniform), and every one crosses S₂: the electric flux through S₂ changes as the plates charge', uniform && throughS2],
      [`The current arrow on the wire points towards the + plate (charging): along +x`, G81.Ic < pl[0]],
      [`Example 1: I_d = ε₀A dE/dt = ${sci(Id, 2)} A (the book's 4.25 × 10⁻⁵ A = 42.5 μA); Example 2: (I_d)peak = q₀ω = ${sci(Id2, 1)} A (the book's 2.5 μA)`, sci(Id, 2) === '4.25 × 10⁻⁵' && sci(Id2, 1) === '2.5 × 10⁻⁶'],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 8.2 · a plane EM wave along +x (topic 03)                       */
/* ===================================================================== */
/**
 * An oblique projection, as the book draws it: x to the right (falling
 * slightly), z up, y into the page (drawn receding up to the right), so x, y, z
 * are right-handed. E⃗ = E₀ sin(kx) ŷ and B⃗ = B₀ sin(kx) ẑ over two wavelengths
 * (λ = 120 px), in phase; the drawn amplitudes are schematic (E and B carry
 * different units) and drawn equal, so the figure does not suggest B is the
 * bigger one. Lines mark the fields at the two positive crests, as the book's
 * do. The y axis runs out past the B wave's first crest, as in the book, so
 * its label sits above-left of its arrowhead, clear of the crest line; E⃗ sits
 * beside its own tag, whose line runs to the orange E curve.
 *
 * The E wave leans along y, so its drawn x runs X + Y·E′(x): with y receding
 * at 0.38 and E₀ = 50 that slope fell to 0 at every falling zero and the
 * curve dropped straight down, a "Z" kink (Android review of Physics 12 Ch 8,
 * 2026-10-22). y now recedes at 0.26 and both amplitudes are 44, so the slope
 * stays above 0.4: a clean sine in perspective. k⃗ stops at 45 px, clear of
 * the first crossing at λ/2; the E tag sits below the axis, under the second
 * E hump where no B lies, its line rising straight to the orange curve.
 */
const G82 = { O: [56, 122] as P, X: [1, 0.1] as P, Y: [0.26, -0.44] as P, Z: [0, -1] as P, lam: 120, AE: 44, AB: 44, yLen: 120, kLen: 45, eTag: 128 };
/** A 3D point (x along the wave, y and z across it) on the drawing. */
const proj = (x: number, y: number, z: number): P => add(add(add(G82.O, G82.X, x), G82.Y, y), G82.Z, z);
const Efield = (x: number): V3 => [0, G82.AE * Math.sin((2 * Math.PI * x) / G82.lam), 0];
const Bfield = (x: number): V3 => [0, 0, G82.AB * Math.sin((2 * Math.PI * x) / G82.lam)];
const XS82 = samples(0, 2 * G82.lam, 480);
const fig82: Diagram = {
  id: 'p12-08-fig-8.2',
  topic: 2,
  name: 'Plane electromagnetic wave',
  cases: [{ chip: 'E and B in phase', cap: 'An EM wave propagating along the +<i>x</i> axis. The electric field oscillates along <i>y</i> (in the <i>x</i>–<i>y</i> plane) and the magnetic field along <i>z</i> (in the <i>x</i>–<i>z</i> plane), both in phase, peaking together. The propagation direction is along <i>E⃗</i> × <i>B⃗</i>.' }],
  draw() {
    const s = new Sketch(W, 276);
    const { lam, AB, kLen, yLen, eTag } = G82;
    // axes
    arrow(s, proj(-16, 0, 0), proj(2 * lam + 26, 0, 0), { color: C.grey, w: 1.3 });
    arrow(s, proj(0, 0, -44), proj(0, 0, 86), { color: C.grey, w: 1.3 });
    arrow(s, proj(0, -30, 0), proj(0, yLen, 0), { color: C.grey, w: 1.3 });
    const xl = proj(2 * lam + 26, 0, 0), zl = proj(0, 0, 86), yl = proj(0, yLen, 0);
    s.sym(xl[0] + 2, xl[1] + 18, '<i>x</i>', { size: 16 });
    s.sym(zl[0] - 10, zl[1] + 8, '<i>z</i>', { size: 16, anchor: 'end' });
    // above-left of the y arrowhead
    s.sym(yl[0] - 4, yl[1] - 6, '<i>y</i>', { size: 14, anchor: 'end' });
    // the fields at the two positive crests
    [lam / 4, (5 * lam) / 4].forEach((x) => {
      path(s, [proj(x, 0, 0), proj(x, 0, Bfield(x)[2])], { w: 1.6 });
      path(s, [proj(x, 0, 0), proj(x, Efield(x)[1], 0)], { color: C.mari, w: 1.6 });
    });
    // the two waves
    path(s, XS82.map((x) => proj(x, 0, Bfield(x)[2])), { w: 2.4 });
    path(s, XS82.map((x) => proj(x, Efield(x)[1], 0)), { color: C.mari, w: 2.6 });
    // the direction of travel
    arrow(s, proj(0, 0, 0), proj(kLen, 0, 0), { w: 3 });
    const kl = proj(kLen / 2, 0, 0);
    s.sym(kl[0], kl[1] + 24, '<i>k⃗</i>', { size: 17 });
    // B⃗ by the second crest: by the first it sat beside the y label and read as "B⃗ y"
    const bl = proj((5 * lam) / 4, 0, AB);
    s.sym(bl[0] - 16, bl[1] - 10, '<i>B⃗</i>', { size: 17 });
    resultBlock(s, ['<i>E⃗</i> × <i>B⃗</i> along +<i>x</i>'], { size: 15 });
    s.place([
      { t: 'Electric field', hi: true, p: proj(eTag, Efield(eTag)[1], 0), at: [[eTag + 22, 200, 'start'], [eTag + 22, 204, 'start'], [eTag + 14, 200, 'start']] },
      { t: 'Magnetic field', p: proj((3 * lam) / 4 + 16, 0, Bfield((3 * lam) / 4 + 16)[2]), at: [[4, 228, 'start'], [4, 234, 'start'], [20, 228, 'start']] },
    ]);
    // E⃗ just after its tag's name ("Electric field E⃗"), far from the B crests: on
    // the curve there is no clear room between the two waves
    const te = s.tags.find((t) => t.name === 'Electric field');
    if (te) s.sym(te.rect[2] + 5, te.rect[1] + 17, '<i>E⃗</i>', { size: 17, anchor: 'start', color: C.amber });
    return s;
  },
  check() {
    const { lam, X, Y, Z, AE, AB, yLen } = G82;
    const s = fig82.draw(fig82.cases[0]);
    // the labels: y above-left of its arrowhead and outside the B wave's first hump; E⃗ beside its tag, far from every B crest line
    const yTip = proj(0, yLen, 0), yLab = s.labels.find((l) => l.text === 'y');
    const bAtTip = proj(yTip[0] - G82.O[0], 0, Bfield(yTip[0] - G82.O[0])[2]);
    const yOk = !!yLab && yLab.rect[2] <= yTip[0] && yLab.rect[3] <= yTip[1] && yTip[1] < bAtTip[1];
    const eTag = s.tags.find((t) => t.name === 'Electric field'), eLab = s.labels.find((l) => l.text === 'E⃗');
    const crestXs = [lam / 4, (5 * lam) / 4].map((x) => proj(x, 0, 0)[0]);
    const eOk = !!eTag && !!eLab && eLab.rect[0] >= eTag.rect[2] && eLab.rect[0] - eTag.rect[2] <= 8 && eLab.rect[1] < eTag.rect[3] && eLab.rect[3] > eTag.rect[1]
      && crestXs.every((cx) => eLab.rect[0] - cx > 20 || cx - eLab.rect[2] > 20);
    // the page frame: x right, z up, y into the page (out of the page = +w)
    const xh: V3 = [1, 0, 0], zh: V3 = [0, 1, 0], yh: V3 = [0, 0, -1];
    const rightHanded = sameWay(cross3(xh, yh), zh);
    // the projection draws "into the page" receding up and to the right, as oblique drawings do; x and z as on the page
    const obliqueOk = Y[0] > 0 && Y[1] < 0 && X[0] > 0 && Z[0] === 0 && Z[1] < 0;
    // the fields in the wave's own frame
    const E: V3 = [0, 1, 0], B: V3 = [0, 0, 1], k: V3 = [1, 0, 0];
    const perp = close(dot3(E, B), 0) && close(dot3(E, k), 0) && close(dot3(B, k), 0);
    const along = sameWay(cross3(E, B), k);
    // in phase: E and B reach their crests and their zeros at the same x
    const iE = XS82.map((x) => Efield(x)[1]), iB = XS82.map((x) => Bfield(x)[2]);
    const crestsE = XS82.filter((x, i) => i > 0 && i < XS82.length - 1 && iE[i] > iE[i - 1] && iE[i] >= iE[i + 1]);
    const crestsB = XS82.filter((x, i) => i > 0 && i < XS82.length - 1 && iB[i] > iB[i - 1] && iB[i] >= iB[i + 1]);
    const inPhase = XS82.every((x, i) => close(iE[i] / G82.AE, iB[i] / G82.AB, 1e-12));
    // each field stays on its own axis: E has no z part, B no y part
    const linear = XS82.every((x) => Efield(x)[2] === 0 && Efield(x)[0] === 0 && Bfield(x)[1] === 0 && Bfield(x)[0] === 0);
    // MCQ Q2 (p. 536): travel along +z, E⃗ along +x ⇒ B⃗ along k̂ × Ê = ẑ × x̂ = +ŷ
    const q2 = cross3([0, 0, 1], [1, 0, 0]);
    // Example 1 (p. 534): E₀ = 36 V m⁻¹, f = 25 MHz
    const B0 = 36 / 3e8, l1 = 3e8 / 25e6;
    return [
      [`x, y, z are drawn right-handed: x to the right, z up, y into the page (x̂ × ŷ = (${cross3(xh, yh).join(', ')}) = ẑ), y drawn receding up and to the right`, rightHanded && obliqueOk],
      ['E⃗ (along y), B⃗ (along z) and the travel (along x) are mutually perpendicular: the wave is transverse', perp && linear],
      [`E⃗ × B⃗ = (${cross3(E, B).join(', ')}) points along +x, the way k⃗ is drawn (the result)`, along && X[0] > 0],
      [`In phase: E and B are zero together and peak together, at x = ${crestsE.map((x) => fmt(x / lam, 2)).join(' and ')} λ (B at ${crestsB.map((x) => fmt(x / lam, 2)).join(' and ')} λ)`, inPhase && crestsE.length === 2 && crestsE.every((x, i) => close(x, crestsB[i]) && close(x / lam, 0.25 + i, 1e-9))],
      [`E and B are drawn with equal amplitudes (${AE} px each; schematic, since they carry different units), so the drawing does not suggest B is the larger`, AE === AB],
      ['The y label sits above-left of the y arrowhead, which runs out past the B wave’s first crest (as in the book): it does not read as naming the B crest line', yOk],
      ['E⃗ sits just after the “Electric field” tag (whose line runs to the orange E curve), not above a B crest', eOk],
      [`The E wave never doubles back on the drawing: its drawn x advances at least ${fmt(X[0] - Y[0] * AE * (2 * Math.PI / lam), 2)} px per px of x (no kink at its falling zeros)`, X[0] - Y[0] * AE * (2 * Math.PI / lam) >= 0.4 && XS82.every((x, i) => i === 0 || proj(x, Efield(x)[1], 0)[0] > proj(XS82[i - 1], Efield(XS82[i - 1])[1], 0)[0])],
      [`The k⃗ arrow ends at ${G82.kLen} px, short of the waves' first crossing at λ/2 = ${lam / 2} px`, G82.kLen <= lam / 2 - 10],
      [`Two full wavelengths are drawn (${fmt(XS82[XS82.length - 1] / lam, 3)} λ)`, close(XS82[XS82.length - 1], 2 * lam)],
      [`MCQ Q2: travel along +z with E⃗ along +x needs B⃗ along (${q2.join(', ')}) = +ŷ (the book's (B))`, sameWay(q2, [0, 1, 0])],
      [`Example 1: B₀ = E₀/c = ${sci(B0, 1)} T, λ = c/f = ${fmt(l1, 2)} m (the book's 1.2 × 10⁻⁷ T, 12 m)`, sci(B0, 1) === '1.2 × 10⁻⁷' && close(l1, 12)],
      ...layout(s),
    ];
  },
};

export const DIAGRAMS_PHYSICS_12_08: Diagram[] = [fig81, fig82];

import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 11, CHAPTER 9 (Hydrocarbons), first half: every drawing of
 * the Master Reference book on pp. 401–420 — the opening section
 * "Classification of Hydrocarbons" (n '00', pp. 401–402, topic index 0),
 * Topic 01 Alkanes (pp. 403–411, index 1) and Topic 02 Alkenes (pp. 412–420,
 * index 2) — redrawn. Figures 9.6–9.9 and everything from Topic 03 on are in
 * chemistry-11-09b.ts.
 *
 * The pages were checked one by one on the page images. They hold five
 * drawings, all numbered, each on a "CHAPTER 9 · FIGURES" page, each caption
 * printed a first time a page earlier with "(see next page)"; the captions
 * here are the figure pages' own, which carry no pointer:
 *   Figure 9.1 (p. 406; caption first on p. 405) — Topic 01, index 1.
 *   Figure 9.2 (p. 406; caption first on p. 405) — Topic 01, index 1.
 *   Figure 9.3 (p. 414; caption first on p. 413) — Topic 02, index 2.
 *   Figure 9.4 (p. 417; caption first on p. 416) — Topic 02, index 2.
 *   Figure 9.5 (p. 417; caption first on p. 416) — Topic 02, index 2.
 * No unnumbered drawing: the opening section (pp. 401–402) has none; the
 * numbered 2-methylbutane skeleton of Topic 01 Example 2 (p. 408) and the
 * "+" over the carbocation carbons (pp. 415, 418) are typeset formulas, and
 * every reaction is a typeset equation.
 *
 * Everything is computed, never placed by eye:
 *   9.1 — the curve is V(φ) = ½V₀(1 + cos 3φ) with V₀ = 12.5 kJ mol⁻¹; each
 *     Newman projection is the front carbon's three bonds at 90°, 210°, 330°
 *     and the back carbon's turned by the dihedral angle φ of its tick. The
 *     seven projections sit under their own ticks in two rows (eclipsed, then
 *     staggered) because seven in one row cannot be read on a phone.
 *   9.2 — ethane is built in 3D (C–C along the view axis, every H at the
 *     tetrahedral angle) and drawn in an oblique parallel projection
 *     (sawhorse) and end-on (Newman); the check measures the true H–C–C–H
 *     dihedral angles (60° staggered, 0° eclipsed) and the bond angles.
 *   In both Newman figures the front H atoms sit just inside the circle and
 *     the back H atoms outside it (the book's own arrangement), so the
 *     eclipsed back bonds, exactly behind the front ones, can still be seen.
 *   9.3 — ethene in 3D: the σ frame in one plane at 120°, both p orbitals
 *     along the plane's normal, seen from above the plane (a dashed outline
 *     shows the plane, a helper the flat book drawing does not need).
 *   9.4 — trigonal (120°) carbons; the C–CH₃ bond vectors add in cis and
 *     cancel in trans.
 *   9.5 — the ozonide is a regular five-membered ring C–O–C–O–O; the atom
 *     bookkeeping (three O in, two O out in the carbonyls, one to Zn) and the
 *     read-backwards rule are checked.
 */

const W = 340;
type P = [number, number];
type V3 = [number, number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const rad = (deg: number) => (deg * Math.PI) / 180;
const dot3 = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const sub3 = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add3 = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const mul3 = (a: V3, k: number): V3 => [a[0] * k, a[1] * k, a[2] * k];
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm3 = (a: V3) => Math.sqrt(dot3(a, a));
const ang3 = (a: V3, b: V3) => (Math.acos(Math.max(-1, Math.min(1, dot3(a, b) / (norm3(a) * norm3(b))))) * 180) / Math.PI;
/** The H–C–C–H dihedral angle (0–180°) of four points. */
function dihedral(a: V3, b: V3, c: V3, d: V3): number {
  const b1 = sub3(b, a), b2 = sub3(c, b), b3 = sub3(d, c), n1 = cross(b1, b2), n2 = cross(b2, b3);
  const m = cross(n1, mul3(b2, 1 / norm3(b2)));
  return Math.abs((Math.atan2(dot3(m, n2), dot3(n1, n2)) * 180) / Math.PI);
}
/** Smallest angle between two directions given in degrees, 0–180. */
const azDiff = (a: number, b: number) => { const d = (((a - b) % 360) + 360) % 360; return Math.min(d, 360 - d); };

/* ---------- drawing helpers (as in chemistry-11-08.ts / 11-04.ts) ---------- */
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
/** An ellipse, its long (ry) axis along the screen direction u (default straight up). */
function ellipse(s: Sketch, c: P, rx: number, ry: number, o: Stroke, u: P = [0, -1]): P[] {
  const n: P = [-u[1], u[0]];
  const pts: P[] = Array.from({ length: 73 }, (_, i) => { const a = (2 * Math.PI * i) / 72, k = rx * Math.cos(a), m = ry * Math.sin(a); return [c[0] + n[0] * k + u[0] * m, c[1] + n[1] * k + u[1] * m]; });
  path(s, pts, o);
  return pts;
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
 * A tag whose name carries Greek letters (σ, π): the kit's tags are set in Onest, which has no Greek, so this
 * one is the same white pill with its name in STIX. Registered as a tag, leader line and all, so the audit
 * checks it like any other. Call it last, so nothing is drawn over it. (Onest with the Greek in a STIX tspan
 * was tried on Oct 31: Android laid the Greek run on top of the Latin one.)
 */
function mtag(s: Sketch, x: number, y: number, html: string, p: P | null, o: { hi?: boolean; anchor?: 'start' | 'middle' | 'end'; size?: number } = {}): Rect {
  const size = o.size ?? 13, hi = !!o.hi, w = Math.max(mathW(html, size), plain(html).length * size * 0.5) + 18, anchor = o.anchor ?? 'start';
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

/* ---------- structures: atom symbols and bonds ---------- */
const labRect = (at: P, html: string, size: number): Rect => { const w = Math.max(mathW(html, size), plain(html).length * size * 0.5) * 0.92; return [at[0] - w / 2, at[1] - size * 0.38, at[0] + w / 2, at[1] + size * 0.38]; };
function lab(s: Sketch, at: P, html: string, size: number, color: string = C.ink) {
  s.labels.push({ text: plain(html), rect: labRect(at, html, size) });
  s.text(at[0], at[1] + size * 0.36, html, { size, color });
}
/** Where a line from inside a box first runs g px clear of it. */
function exit(r: Rect | null, p: P, u: P, g: number): number {
  if (!r) return 0;
  for (let t = 0; t < 200; t += 0.25) { const q: P = [p[0] + u[0] * t, p[1] + u[1] * t]; if (q[0] < r[0] - g || q[0] > r[2] + g || q[1] < r[1] - g || q[1] > r[3] + g) return t; }
  return 200;
}
/** The two ends of a bond between two atoms, each stopped g px clear of its symbol. */
function ends(A: P, ra: Rect | null, B: P, rb: Rect | null, g = 5.5): [P, P] {
  const L = len(A, B), u: P = [(B[0] - A[0]) / L, (B[1] - A[1]) / L];
  const ta = exit(ra, A, u, g), tb = exit(rb, B, [-u[0], -u[1]], g);
  return [[A[0] + u[0] * ta, A[1] + u[1] * ta], [B[0] - u[0] * tb, B[1] - u[1] * tb]];
}
/** A bond between two drawn atoms (null rect = a bare join), single or double (two lines `gap` apart). */
function bond(s: Sketch, A: P, ra: Rect | null, B: P, rb: Rect | null, o: { order?: 1 | 2; color?: string; w?: number; gap?: number } = {}): [P, P] {
  const [p, q] = ends(A, ra, B, rb);
  if ((o.order ?? 1) === 1) path(s, [p, q], { color: o.color, w: o.w ?? 1.7 });
  else {
    const L = len(p, q), n: P = [(-(q[1] - p[1]) / L) * (o.gap ?? 2.8), ((q[0] - p[0]) / L) * (o.gap ?? 2.8)];
    path(s, [[p[0] + n[0], p[1] + n[1]], [q[0] + n[0], q[1] + n[1]]], { color: o.color, w: o.w ?? 1.6 });
    path(s, [[p[0] - n[0], p[1] - n[1]], [q[0] - n[0], q[1] - n[1]]], { color: o.color, w: o.w ?? 1.6 });
  }
  return [p, q];
}
/** A point at distance r from c in the screen direction az (degrees, counter-clockwise from +x, y up). */
const polar = (c: P, az: number, r: number): P => [c[0] + r * Math.cos(rad(az)), c[1] - r * Math.sin(rad(az))];

/* ---------- ethane: the Newman projection (Figures 9.1 and 9.2) ---------- */
/** The front carbon's three C–H bonds, as seen down the C–C axis (screen degrees). */
const FRONT = [90, 210, 330];
type Newman = { c: P; phi: number; front: number[]; back: number[]; R: number };
/**
 * A Newman projection: the front carbon a dot with three bonds to H atoms just inside the circle, the back
 * carbon the circle, its three bonds starting on the circle and turned by the dihedral angle φ.
 */
function newman(s: Sketch, c: P, phi: number, o: { R: number; hF: number; hB: number; size: number }): Newman {
  ellipse(s, c, o.R, o.R, { w: 1.6 });
  s.dot(c[0], c[1], 2.6);
  const back = FRONT.map((az) => az + phi);
  FRONT.forEach((az) => {
    const h = polar(c, az, o.hF), [, q] = ends(c, null, h, labRect(h, 'H', o.size), 4.5);
    path(s, [c, q], { w: 1.6 });
    lab(s, h, 'H', o.size);
  });
  back.forEach((az) => {
    const h = polar(c, az, o.hB), [, q] = ends(polar(c, az, o.R), null, h, labRect(h, 'H', o.size), 4.5);
    path(s, [polar(c, az, o.R), q], { w: 1.6 });
    lab(s, h, 'H', o.size);
  });
  return { c, phi, front: [...FRONT], back, R: o.R };
}
/** The smallest angle between a front C–H bond and a back C–H bond, read off the drawing: the dihedral angle. */
const nmDihedral = (n: Newman) => Math.min(...n.front.flatMap((f) => n.back.map((b) => azDiff(f, b))));

/* ===================================================================== */
/* Figure 9.1 · potential energy of ethane against dihedral angle (p. 406) */
/* ===================================================================== */
const CAP91 = 'Potential energy of ethane versus dihedral angle. Minima occur at the staggered conformations (60°, 180°, 300°) and maxima at the eclipsed conformations (0°, 120°, 240°, 360°); the barrier between them is about 12.5 kJ mol<sup>−1</sup>. Newman projections of each conformation are shown beneath the curve.';
/** The torsional barrier, kJ mol⁻¹ (book p. 404–406). */
const BARRIER = 12.5;
/** Ethane's three-fold torsional potential: maxima (eclipsed) at 0°, 120°, 240°, 360°; minima (staggered) at 60°, 180°, 300°. */
const V91 = (phi: number) => (BARRIER / 2) * (1 + Math.cos(3 * rad(phi)));
const G1 = { x0: 44, L: 252, yTop: 48, yBot: 132, axis: 154, rowE: 240, rowS: 292, arrowX: 318, h: 342, nm: { R: 24.5, hF: 15.5, hB: 39.5, size: 9.5 } };
const X1 = (phi: number) => G1.x0 + (G1.L * phi) / 360;
const Y1 = (v: number) => G1.yBot - ((G1.yBot - G1.yTop) * v) / BARRIER;
const TICKS = [0, 60, 120, 180, 240, 300, 360];
const BAR_LABEL = '12.5 kJ mol<sup>−1</sup>';
const DRAWN91 = new WeakMap<Sketch, { nm: Newman[]; curve: P[] }>();
const fig91: Diagram = {
  id: 'c11-09-fig-9.1',
  topic: 1,
  name: 'Energy of ethane as it rotates',
  cases: [{ chip: 'Torsional energy', cap: CAP91 }],
  draw() {
    const s = new Sketch(W, G1.h), { x0, axis } = G1;
    // axes
    arrow(s, [x0, axis], [x0, G1.yTop - 18], { color: C.grey, w: 1.3 });
    arrow(s, [x0, axis], [X1(360) + 12, axis], { color: C.grey, w: 1.3 });
    TICKS.forEach((a) => {
      s.line(X1(a), axis, X1(a), axis + 4, { color: C.grey, w: 1.2 });
      s.sym(X1(a), axis + 16, `${a}°`, { size: 11.5, color: C.slate });
    });
    s.sym(x0 + 8, 22, 'potential energy', { size: 13, anchor: 'start' });
    s.sym(X1(180), axis + 34, 'dihedral angle', { size: 13 });
    // the curve
    const curve: P[] = [];
    for (let i = 0; i <= 720; i++) { const phi = i / 2; curve.push([X1(phi), Y1(V91(phi))]); }
    path(s, curve, { color: C.mari, w: 2.4 });
    s.sym(X1(120), G1.yTop - 8, 'eclipsed', { size: 12.5 });
    s.sym(X1(180), G1.yBot + 15, 'staggered', { size: 12.5 });
    // the barrier: from the 360° maximum down to the 300° minimum
    path(s, [[X1(360) + 5, G1.yTop], [G1.arrowX + 5, G1.yTop]], { color: C.grey, w: 1.1, dash: true });
    path(s, [[X1(300) + 5, G1.yBot], [G1.arrowX + 5, G1.yBot]], { color: C.grey, w: 1.1, dash: true });
    const mid = (G1.yTop + G1.yBot) / 2;
    s.vec(G1.arrowX, mid, G1.arrowX, G1.yTop + 1, { w: 1.4 });
    s.vec(G1.arrowX, mid, G1.arrowX, G1.yBot - 1, { w: 1.4 });
    keep(s, [[G1.arrowX, G1.yTop + 1], [G1.arrowX, G1.yBot - 1]]);
    s.sym(W - 4, G1.yTop - 10, BAR_LABEL, { size: 12, anchor: 'end' });
    // the Newman projections, each under its own tick: eclipsed in the first row, staggered in the second
    const nm = TICKS.map((a) => newman(s, [X1(a), V91(a) > BARRIER / 2 ? G1.rowE : G1.rowS], a, G1.nm));
    DRAWN91.set(s, { nm, curve });
    return s;
  },
  check() {
    const s = fig91.draw(fig91.cases[0]), d = DRAWN91.get(s)!, out: Check[] = [];
    // extrema, found on a fine grid
    const grid = Array.from({ length: 3601 }, (_, i) => i / 10), v = grid.map(V91);
    const maxima = grid.filter((_, i) => v[i] >= Math.max(v[i - 1] ?? -1, v[i + 1] ?? -1) && v[i] > BARRIER / 2);
    const minima = grid.filter((_, i) => i > 0 && i < grid.length - 1 && v[i] <= v[i - 1] && v[i] <= v[i + 1]);
    out.push([`The curve's maxima are at ${maxima.join('°, ')}° (eclipsed) and its minima at ${minima.join('°, ')}° (staggered)`, JSON.stringify(maxima) === '[0,120,240,360]' && JSON.stringify(minima) === '[60,180,300]']);
    out.push([`Barrier: V(max) − V(min) = ${fmt(V91(0) - V91(60), 3)} kJ mol⁻¹ (book: about 12.5)`, close(V91(0) - V91(60), 12.5, 1e-9) && close(V91(60), 0, 1e-9)]);
    out.push(['The drawn curve, read back at every point, is V(φ)', d.curve.every(([x, y]) => close(Y1(V91(((x - G1.x0) * 360) / G1.L)), y, 1e-6))]);
    out.push([`The barrier arrow runs from the maximum (${fmt(V91(360))}) to the minimum (${fmt(V91(300))}): ${fmt(((G1.yBot - G1.yTop) / (G1.yBot - G1.yTop)) * BARRIER, 1)} kJ mol⁻¹, labelled 12.5 kJ mol⁻¹`, close(Y1(V91(360)), G1.yTop) && close(Y1(V91(300)), G1.yBot) && s.labels.some((l) => l.text === plain(BAR_LABEL))]);
    const lb = (t: string) => s.labels.find((l) => l.text === t)!;
    const ecl = lb('eclipsed'), stg = lb('staggered');
    const ex = ((ecl.rect[0] + ecl.rect[2]) / 2 - G1.x0) * (360 / G1.L), sx = ((stg.rect[0] + stg.rect[2]) / 2 - G1.x0) * (360 / G1.L);
    out.push([`“eclipsed” stands over the maximum at ${fmt(ex, 1)}°, “staggered” under the minimum at ${fmt(sx, 1)}°`, close(ex, 120, 1e-6) && close(sx, 180, 1e-6) && ecl.rect[3] < G1.yTop && stg.rect[1] > G1.yBot]);
    out.push(['Every tick label stands at its own angle: 0° … 360° every 60°', TICKS.every((a) => { const l = lb(`${a}°`); return !!l && close((l.rect[0] + l.rect[2]) / 2, X1(a), 1e-9); })]);
    // the Newman projections
    const dh = d.nm.map(nmDihedral);
    out.push([`Seven Newman projections, one under each tick (${d.nm.map((n) => fmt(((n.c[0] - G1.x0) * 360) / G1.L, 0)).join(', ')}°), the back carbon turned by its tick's angle`, d.nm.length === 7 && d.nm.every((n, i) => close(n.c[0], X1(TICKS[i]), 1e-9) && n.back.every((b, k) => close(b - n.front[k], TICKS[i], 1e-9)))]);
    out.push([`Their dihedral angles, read off the drawn bonds: ${dh.map((a) => `${fmt(a, 0)}°`).join(', ')} — eclipsed (0°) at every maximum, staggered (60°) at every minimum`, d.nm.every((n, i) => (V91(TICKS[i]) === BARRIER ? close(dh[i], 0, 1e-9) : close(V91(TICKS[i]), 0, 1e-9) && close(dh[i], 60, 1e-9)))]);
    out.push(['The eclipsed projections share the first row, the staggered the second', d.nm.every((n, i) => n.c[1] === (dh[i] === 0 ? G1.rowE : G1.rowS))]);
    out.push(['Every projection: front carbon the centre dot with three bonds 120° apart, back carbon the circle with three', d.nm.every((n) => [0, 1, 2].every((k) => close(azDiff(n.front[k], n.front[(k + 1) % 3]), 120, 1e-9) && close(azDiff(n.back[k], n.back[(k + 1) % 3]), 120, 1e-9)))]);
    out.push(['The caption’s values are the drawing’s: minima 60°, 180°, 300°; maxima 0°, 120°, 240°, 360°; about 12.5 kJ mol⁻¹', CAP91.includes('(60°, 180°, 300°)') && CAP91.includes('(0°, 120°, 240°, 360°)') && CAP91.includes('12.5 kJ mol<sup>−1</sup>') && BARRIER === 12.5]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.2 · sawhorse and Newman projections of ethane (p. 406)        */
/* ===================================================================== */
const CAP92 = 'Sawhorse and Newman projections of ethane, staggered and eclipsed. In a Newman projection the front carbon is the central point and the back carbon the circle.';
/** Angle between a C–H bond and the C–C axis pointing away from the other carbon: 180° − 109.47°. */
const TET = (Math.acos(-1 / 3) * 180) / Math.PI, OFF = 180 - TET;
/** Ethane in 3D: front C at the origin, back C at z = −d (away from the viewer), each H at the tetrahedral angle. */
const SH = { d: 70, h: 36, k: 0.85, delta: 54, size: 13 };
type Ethane = { C1: V3; C2: V3; H1: V3[]; H2: V3[] };
function ethane(phi: number): Ethane {
  const C1: V3 = [0, 0, 0], C2: V3 = [0, 0, -SH.d];
  const dir = (psi: number, z: number): V3 => [Math.sin(rad(OFF)) * Math.cos(rad(psi)), Math.sin(rad(OFF)) * Math.sin(rad(psi)), z * Math.cos(rad(OFF))];
  return { C1, C2, H1: FRONT.map((psi) => mul3(dir(psi, 1), SH.h)), H2: FRONT.map((psi) => add3(C2, mul3(dir(psi + phi, -1), SH.h))) };
}
/** The sawhorse view: an oblique parallel projection, depth (−z) running up and to the right at δ. */
const obl = (o: P, v: V3): P => [o[0] + v[0] - v[2] * SH.k * Math.cos(rad(SH.delta)), o[1] - v[1] + v[2] * SH.k * Math.sin(rad(SH.delta))];
function sawhorse(s: Sketch, o: P, phi: number) {
  const e = ethane(phi), c1 = obl(o, e.C1), c2 = obl(o, e.C2);
  path(s, [c1, c2], { color: C.mari, w: 3.2 });
  [[e.C1, e.H1], [e.C2, e.H2]].forEach(([c, hs]) => {
    const cp = obl(o, c as V3);
    (hs as V3[]).forEach((h) => { const hp = obl(o, h); const [, q] = ends(cp, null, hp, labRect(hp, 'H', SH.size)); path(s, [cp, q], { w: 1.7 }); lab(s, hp, 'H', SH.size); });
  });
}
const NM2 = { R: 33, hF: 22, hB: 57, size: 13 };
const G2 = { xs: [92, 250], row1: 78, word1: 148, tag1: 158, row2: 260, word2: 342, tag2: 352, h: 382, conf: [60, 0] };
const DRAWN92 = new WeakMap<Sketch, Newman[]>();
const fig92: Diagram = {
  id: 'c11-09-fig-9.2',
  topic: 1,
  name: 'Sawhorse and Newman projections',
  cases: [{ chip: 'Ethane', cap: CAP92 }],
  draw() {
    const s = new Sketch(W, G2.h), names = ['staggered', 'eclipsed'];
    G2.conf.forEach((phi, i) => {
      sawhorse(s, [G2.xs[i] - 16, G2.row1 + 24], phi);
      s.sym(G2.xs[i], G2.word1, names[i], { size: 14 });
    });
    const nm = G2.conf.map((phi, i) => { const n = newman(s, [G2.xs[i], G2.row2], phi, NM2); s.sym(G2.xs[i], G2.word2, names[i], { size: 14 }); return n; });
    s.tag(W / 2, G2.tag1, 'sawhorse projections', null, null, { anchor: 'middle' });
    s.tag(W / 2, G2.tag2, 'Newman projections', null, null, { anchor: 'middle' });
    DRAWN92.set(s, nm);
    return s;
  },
  check() {
    const s = fig92.draw(fig92.cases[0]), nm = DRAWN92.get(s)!, out: Check[] = [];
    G2.conf.forEach((phi) => {
      const e = ethane(phi), name = phi ? 'staggered' : 'eclipsed';
      const dh = e.H1.flatMap((a) => e.H2.map((b) => dihedral(a, e.C1, e.C2, b)));
      out.push([`Sawhorse, ${name}: the H–C–C–H dihedral angles in 3D are ${[...new Set(dh.map((a) => fmt(a, 1)))].join('°, ')}° — the smallest ${fmt(Math.min(...dh), 1)}°`, close(Math.min(...dh), phi, 1e-9)]);
      const hcc = [...e.H1.map((h) => ang3(sub3(h, e.C1), sub3(e.C2, e.C1))), ...e.H2.map((h) => ang3(sub3(h, e.C2), sub3(e.C1, e.C2)))];
      const hch = [0, 1, 2].flatMap((k) => [ang3(e.H1[k], e.H1[(k + 1) % 3]), ang3(sub3(e.H2[k], e.C2), sub3(e.H2[(k + 1) % 3], e.C2))]);
      out.push([`Sawhorse, ${name}: every carbon tetrahedral — H–C–C ${fmt(hcc[0], 2)}°, H–C–H ${fmt(hch[0], 2)}° (109.47°)`, [...hcc, ...hch].every((a) => close(a, TET, 1e-9))]);
    });
    const c1 = obl([0, 0], [0, 0, 0]), c2 = obl([0, 0], [0, 0, -SH.d]);
    out.push([`Sawhorse: the C–C bond runs back and up to the right at ${fmt((Math.atan2(c1[1] - c2[1], c2[0] - c1[0]) * 180) / Math.PI, 0)}°, the front carbon at its lower end`, c2[0] > c1[0] && c2[1] < c1[1]]);
    out.push([`Newman: dihedral angles read off the drawn bonds ${nm.map((n) => fmt(nmDihedral(n), 0)).join('° and ')}° (staggered, eclipsed)`, close(nmDihedral(nm[0]), 60, 1e-9) && close(nmDihedral(nm[1]), 0, 1e-9)]);
    out.push(['Newman: the front carbon is the central point (its bonds meet there), the back carbon the circle (its bonds start on it)', nm.every((n) => s.points.some((p) => close(p.x, n.c[0]) && close(p.y, n.c[1])) && NM2.hF < NM2.R && NM2.hB > NM2.R)]);
    out.push(['Each panel is named under it: staggered, eclipsed; sawhorse projections, Newman projections', s.labels.filter((l) => l.text === 'staggered').length === 2 && s.labels.filter((l) => l.text === 'eclipsed').length === 2 && ['sawhorse projections', 'Newman projections'].every((t) => s.tags.some((g) => g.name === t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.3 · orbital picture of ethene (p. 414)                        */
/* ===================================================================== */
const CAP93 = 'Orbital picture of ethene. The sp<sup>2</sup> σ framework (C–C and four C–H bonds) lies in one plane with bond angles of about 120°; the unhybridised 2p orbitals above and below the plane overlap sideways to form the π bond.';
/**
 * Ethene in 3D: the σ frame in the x–z plane (C–C along x, 134 : 109 for C=C : C–H, the book's 134 pm and a
 * typical 109 pm), the p orbitals along y. Seen turned `yaw` about y and from `tilt` above the plane.
 */
const ETH = { c: [168, 122] as P, cc: 100, ch: 81, yaw: -12, tilt: 30, lobe: 60, lobeStart: 22, lobeRx: 9, cloudRy: 25, cloudPad: 14, plane: [118, 96] as P, arc: 23, size: 16, hs: 14, h: 262 };
const ethAtoms = () => {
  const C1: V3 = [-ETH.cc / 2, 0, 0], C2: V3 = [ETH.cc / 2, 0, 0], u = (deg: number): V3 => [Math.cos(rad(deg)), 0, Math.sin(rad(deg))];
  return { C1, C2, H: [add3(C1, mul3(u(120), ETH.ch)), add3(C1, mul3(u(240), ETH.ch)), add3(C2, mul3(u(60), ETH.ch)), add3(C2, mul3(u(-60), ETH.ch))], p: [0, 1, 0] as V3 };
};
const view3 = (v: V3): P => {
  const y = rad(ETH.yaw), t = rad(ETH.tilt), x1 = v[0] * Math.cos(y) + v[2] * Math.sin(y), z1 = -v[0] * Math.sin(y) + v[2] * Math.cos(y);
  return [ETH.c[0] + x1, ETH.c[1] - (v[1] * Math.cos(t) - z1 * Math.sin(t))];
};
const DRAWN93 = new WeakMap<Sketch, { lobes: { c: V3; dir: V3 }[]; arc: V3[] }>();
const fig93: Diagram = {
  id: 'c11-09-fig-9.3',
  topic: 2,
  name: 'Orbital picture of ethene',
  cases: [{ chip: 'Ethene', cap: CAP93 }],
  draw() {
    const s = new Sketch(W, ETH.h), a = ethAtoms(), c1 = view3(a.C1), c2 = view3(a.C2);
    // the molecular plane, a helper
    const [px, pz] = ETH.plane;
    path(s, ([[-px, -pz], [px, -pz], [px, pz], [-px, pz], [-px, -pz]] as P[]).map(([x, z]) => view3([x, 0, z])), { color: C.grey, w: 1.1, dash: true });
    // σ framework
    const cR = (p: P) => labRect(p, 'C', ETH.size);
    bond(s, c1, cR(c1), c2, cR(c2), { w: 2 });
    a.H.forEach((h, i) => { const hp = view3(h), cp = i < 2 ? c1 : c2; bond(s, cp, cR(cp), hp, labRect(hp, 'H', ETH.hs)); lab(s, hp, 'H', ETH.hs); });
    lab(s, c1, 'C', ETH.size); lab(s, c2, 'C', ETH.size);
    // a 120° bond angle at the left carbon, H–C–H (outside the π clouds): an arc in the plane
    const toA = mul3(sub3(a.H[0], a.C1), 1 / ETH.ch), toB = mul3(sub3(a.H[1], a.C1), 1 / ETH.ch), arc: V3[] = [];
    for (let i = 0; i <= 40; i++) { const t = i / 40, d = add3(mul3(toA, Math.sin(rad(120 * (1 - t))) / Math.sin(rad(120))), mul3(toB, Math.sin(rad(120 * t)) / Math.sin(rad(120)))); arc.push(add3(a.C1, mul3(d, ETH.arc / norm3(d)))); }
    path(s, arc.map(view3), { color: C.slate, w: 1.2 });
    const am = view3(add3(a.C1, mul3(add3(toA, toB), (ETH.arc + 18) / norm3(add3(toA, toB)))));
    s.sym(am[0], am[1] + 4, '120°', { size: 12.5, color: C.slate });
    // p orbitals: two lobes on each carbon, along the plane's normal
    const lobes: { c: V3; dir: V3 }[] = [];
    [a.C1, a.C2].forEach((cc) => [1, -1].forEach((sgn) => {
      const mid = add3(cc, mul3(a.p, sgn * (ETH.lobeStart + ETH.lobe / 2)));
      lobes.push({ c: mid, dir: mul3(a.p, sgn) });
      const top = view3(add3(mid, mul3(a.p, ETH.lobe / 2))), bot = view3(sub3(mid, mul3(a.p, ETH.lobe / 2))), m = view3(mid);
      ellipse(s, m, ETH.lobeRx, len(top, bot) / 2, { w: 1.4 });
    }));
    // the π bond: the side-on overlap, a cloud above and one below the plane
    const clouds = [1, -1].map((sgn) => {
      const m = view3(mul3(a.p, sgn * (ETH.lobeStart + ETH.lobe / 2))), rx = len(c1, c2) / 2 + ETH.cloudPad;
      ellipse(s, m, ETH.cloudRy, rx, { color: C.mari, w: 1.8, dash: true }, [(c2[0] - c1[0]) / len(c1, c2), (c2[1] - c1[1]) / len(c1, c2)]);
      return { m, rx };
    });
    DRAWN93.set(s, { lobes, arc });
    const topLobe = view3(add3(a.C2, mul3(a.p, ETH.lobeStart + ETH.lobe * 0.8)));
    s.tag(W - 6, 10, 'unhybridised 2p orbitals, side-on overlap', topLobe[0] + ETH.lobeRx, topLobe[1], { anchor: 'end' });
    const lowCloud = clouds[1], lc: P = [lowCloud.m[0] - lowCloud.rx * 0.82, lowCloud.m[1] + ETH.cloudRy * 0.6];
    const ccMid: P = [(c1[0] + c2[0]) / 2 + 14, (c1[1] + c2[1]) / 2 + 1.4];
    mtag(s, 8, ETH.h - 58, 'π bond (out of plane)', lc, { hi: true });
    mtag(s, W - 8, ETH.h - 30, 'σ framework (in plane)', ccMid, { anchor: 'end' });
    return s;
  },
  check() {
    const s = fig93.draw(fig93.cases[0]), a = ethAtoms(), d = DRAWN93.get(s)!, out: Check[] = [];
    const sig: [V3, V3][] = [[a.C1, a.C2], [a.C1, a.H[0]], [a.C1, a.H[1]], [a.C2, a.H[2]], [a.C2, a.H[3]]];
    const n = cross(sub3(a.C2, a.C1), sub3(a.H[0], a.C1));
    out.push([`The σ framework (C–C and four C–H: ${sig.length} bonds) lies in one plane: every atom 0 from it`, [a.C1, a.C2, ...a.H].every((v) => close(dot3(sub3(v, a.C1), n) / norm3(n), 0, 1e-9)) && sig.length === 5]);
    const angs = [ang3(sub3(a.H[0], a.C1), sub3(a.C2, a.C1)), ang3(sub3(a.H[1], a.C1), sub3(a.C2, a.C1)), ang3(sub3(a.H[0], a.C1), sub3(a.H[1], a.C1)), ang3(sub3(a.H[2], a.C2), sub3(a.C1, a.C2)), ang3(sub3(a.H[3], a.C2), sub3(a.C1, a.C2)), ang3(sub3(a.H[2], a.C2), sub3(a.H[3], a.C2))];
    out.push([`Every bond angle at both sp² carbons is ${[...new Set(angs.map((x) => fmt(x, 1)))].join(', ')}° (three σ bonds, trigonal planar)`, angs.every((x) => close(x, 120, 1e-9))]);
    out.push(['Both p orbitals lie along the plane’s normal: perpendicular to every σ bond, and parallel to each other (side-on overlap)', sig.every(([p, q]) => close(dot3(a.p, sub3(q, p)), 0, 1e-9)) && close(norm3(cross(a.p, n)), 0, 1e-9)]);
    out.push(['Each carbon has one lobe above the plane and one below, symmetric', [a.C1, a.C2].every((cc) => { const L = d.lobes.filter((l) => close(l.c[0], cc[0])); return L.length === 2 && close(L[0].c[1], -L[1].c[1]) && close(dot3(L[0].dir, L[1].dir), -1); })]);
    const ac = d.arc.map((v) => sub3(v, a.C1));
    out.push([`The angle arc spans ${fmt(ang3(ac[0], ac[ac.length - 1]), 1)}° in the plane, between the two C–H bonds of the left carbon, and is labelled 120°`, close(ang3(ac[0], ac[ac.length - 1]), 120, 1e-9) && ac.every((v) => close(v[1], 0, 1e-9)) && s.labels.some((l) => l.text === '120°')]);
    out.push([`C=C : C–H drawn ${ETH.cc} : ${ETH.ch} = ${fmt(ETH.cc / ETH.ch, 3)}, as 134 pm : 109 pm = ${fmt(134 / 109, 3)}`, Math.abs(ETH.cc / ETH.ch - 134 / 109) < 0.01]);
    out.push(['One σ and one π between the carbons: the π bond named in marigold, out of the plane; the σ framework in plane', s.tags.some((t) => t.name === 'π bond (out of plane)') && s.tags.some((t) => t.name === 'σ framework (in plane)') && s.tags.some((t) => t.name === 'unhybridised 2p orbitals, side-on overlap')]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.4 · cis- and trans-but-2-ene (p. 417)                         */
/* ===================================================================== */
const CAP94 = 'cis- and trans-but-2-ene. In the cis isomer both CH<sub>3</sub> groups lie on the same side of the C=C and the bond dipoles add (<i>μ</i> ≈ 0.33 D, more polar); in the trans isomer they lie on opposite sides and the dipoles cancel (<i>μ</i> ≈ 0, non-polar). The rigid planar double bond prevents rotation.';
const ME = 'CH<sub>3</sub>';
/** Each isomer: the groups on the left carbon (up, down) and on the right carbon (up, down), as the book draws them. */
const ISO = [
  { name: 'cis-but-2-ene', left: ['H', ME], right: ['H', ME], dip: ['dipole moment ~0.33 D,', 'more polar'] },
  { name: 'trans-but-2-ene', left: [ME, 'H'], right: ['H', ME], dip: ['net dipole ~0,', 'non-polar'] },
];
const BU = { xs: [88, 252], y: 70, cc: 36, sub: 36, size: 15, tag: 120, dip: [162, 178], rigid: 206, h: 218 };
/** Screen directions of the four substituent bonds: left carbon up/down, right carbon up/down (120° from C=C). */
const SUBDIR = { left: [120, 240], right: [60, 300] };
const buGeom = (i: number) => {
  const x = BU.xs[i], c1: P = [x - BU.cc / 2, BU.y], c2: P = [x + BU.cc / 2, BU.y];
  const groups = (['left', 'right'] as const).flatMap((side) => [0, 1].map((k) => ({ c: side === 'left' ? c1 : c2, az: SUBDIR[side][k], g: ISO[i][side][k], at: polar(side === 'left' ? c1 : c2, SUBDIR[side][k], BU.sub) })));
  return { c1, c2, groups };
};
const fig94: Diagram = {
  id: 'c11-09-fig-9.4',
  topic: 2,
  name: 'cis- and trans-but-2-ene',
  cases: [{ chip: 'Geometrical isomers', cap: CAP94 }],
  draw() {
    const s = new Sketch(W, BU.h);
    ISO.forEach((iso, i) => {
      const g = buGeom(i), cR = (p: P) => labRect(p, 'C', BU.size);
      bond(s, g.c1, cR(g.c1), g.c2, cR(g.c2), { order: 2 });
      g.groups.forEach(({ c, g: grp, at }) => {
        const me = grp === ME;
        bond(s, c, cR(c), at, labRect(at, grp, BU.size), { color: me ? C.mari : C.ink, w: me ? 2.2 : 1.7 });
        lab(s, at, grp, BU.size, me ? C.amber : C.ink);
      });
      lab(s, g.c1, 'C', BU.size); lab(s, g.c2, 'C', BU.size);
      s.tag(BU.xs[i], BU.tag, iso.name, null, null, { anchor: 'middle' });
      iso.dip.forEach((t, k) => s.sym(BU.xs[i], BU.dip[k], t, { size: 12.5, color: C.slate }));
    });
    s.sym(W / 2, BU.rigid, 'rigid planar C=C: no free rotation', { size: 13 });
    return s;
  },
  check() {
    const s = fig94.draw(fig94.cases[0]), out: Check[] = [];
    ISO.forEach((iso, i) => {
      const g = buGeom(i), side = (p: P) => Math.sign(BU.y - p[1]);
      const angAt = (c: P, dirs: number[]) => [azDiff(dirs[0], dirs[1]), ...dirs.map((d) => azDiff(d, c === g.c1 ? 0 : 180))];
      out.push([`${iso.name}: both carbons trigonal planar, 120° between every pair of bonds`, [...angAt(g.c1, SUBDIR.left), ...angAt(g.c2, SUBDIR.right)].every((a) => close(a, 120, 1e-9))]);
      const me = g.groups.filter((x) => x.g === ME);
      const same = side(me[0].at) === side(me[1].at);
      out.push([`${iso.name}: the two CH₃ groups are on ${same ? 'the same side' : 'opposite sides'} of the C=C`, same === (i === 0) && me.length === 2 && me[0].c !== me[1].c]);
      const v = me.map((x) => [Math.cos(rad(x.az)), Math.sin(rad(x.az))]), sum = Math.hypot(v[0][0] + v[1][0], v[0][1] + v[1][1]);
      out.push([`${iso.name}: the two C–CH₃ bond dipoles (unit vectors) sum to ${fmt(sum, 3)} — ${i === 0 ? 'they add (polar)' : 'they cancel (non-polar)'}`, i === 0 ? sum > 1.7 : close(sum, 0, 1e-9)]);
      out.push([`${iso.name}: each double-bond carbon carries two different groups (H and CH₃), so the isomer exists`, [ISO[i].left, ISO[i].right].every((gr) => new Set(gr).size === 2)]);
      const nC = 2 + me.length, nH = g.groups.filter((x) => x.g === 'H').length + 3 * me.length;
      out.push([`${iso.name}: C${nC}H${nH} = C₄H₈, the chain CH₃–CH=CH–CH₃ with the double bond from C2: but-2-ene`, nC === 4 && nH === 8]);
    });
    out.push(['The names and the polarity lines are the book’s', ['cis-but-2-ene', 'trans-but-2-ene'].every((t) => s.tags.some((g) => g.name === t)) && ['dipole moment ~0.33 D,', 'more polar', 'net dipole ~0,', 'non-polar', 'rigid planar C=C: no free rotation'].every((t) => s.labels.some((l) => l.text === t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.5 · ozonolysis of a generic alkene R₂C=CR′₂ (p. 417)          */
/* ===================================================================== */
const CAP95 = 'Ozonolysis of a generic alkene R<sub>2</sub>C=CR′<sub>2</sub>. Step 1: O<sub>3</sub> in CCl<sub>4</sub> at low temperature adds across the double bond to give the ozonide (a five-membered ring). Step 2: Zn/H<sub>2</sub>O cleaves it into the carbonyl compounds R<sub>2</sub>C=O and O=CR′<sub>2</sub>. Read the products backwards to locate the double bond.';
const R = 'R', RP = 'R′';
/** An atom of a drawn structure: its symbol, where it is, and the groups it carries (each R counts once). */
type Atom = { el: string; html: string; at: P; hi?: boolean };
type Mol = { atoms: Atom[]; bonds: { a: number; b: number; order: 1 | 2 }[] };
const OZ = { size: 15, y1: 66, y2: 186, cc: 36, sub: 34, ring: { c: [258, 70] as P, r: 31 }, ringSub: 40, h: 296 };
/** The alkene R₂C=CR′₂. */
function alkene(): Mol {
  const c1: P = [48, OZ.y1], c2: P = [48 + OZ.cc, OZ.y1];
  return { atoms: [{ el: 'C', html: 'C', at: c1 }, { el: 'C', html: 'C', at: c2 }, { el: R, html: R, at: polar(c1, 120, OZ.sub) }, { el: R, html: R, at: polar(c1, 240, OZ.sub) }, { el: RP, html: RP, at: polar(c2, 60, OZ.sub) }, { el: RP, html: RP, at: polar(c2, 300, OZ.sub) }], bonds: [{ a: 0, b: 1, order: 2 }, { a: 0, b: 2, order: 1 }, { a: 0, b: 3, order: 1 }, { a: 1, b: 4, order: 1 }, { a: 1, b: 5, order: 1 }] };
}
/** The ozonide: a regular pentagon, apex O at the top, the two carbons beside it, the O–O pair at the bottom; R₂ and R′₂ outside. */
const RING_AZ = [90, 162, 234, 306, 18];
function ozonide(): Mol {
  const { c, r } = OZ.ring, v = RING_AZ.map((az) => polar(c, az, r));
  const atoms: Atom[] = [{ el: 'O', html: 'O', at: v[0], hi: true }, { el: 'C', html: 'C', at: v[1] }, { el: 'O', html: 'O', at: v[2], hi: true }, { el: 'O', html: 'O', at: v[3], hi: true }, { el: 'C', html: 'C', at: v[4] }];
  atoms.push({ el: 'R2', html: 'R<sub>2</sub>', at: polar(v[1], 150, OZ.ringSub) }, { el: 'R′2', html: 'R′<sub>2</sub>', at: polar(v[4], 30, OZ.ringSub) });
  return { atoms, bonds: [{ a: 0, b: 1, order: 1 }, { a: 1, b: 2, order: 1 }, { a: 2, b: 3, order: 1 }, { a: 3, b: 4, order: 1 }, { a: 4, b: 0, order: 1 }, { a: 1, b: 5, order: 1 }, { a: 4, b: 6, order: 1 }] };
}
/** The two carbonyl products R₂C=O and O=CR′₂, trigonal at each carbon. */
const PX = { c1: 132, o1: 168, plus: 190, o2: 212, c2: 248 };
function products(): Mol {
  const c1: P = [PX.c1, OZ.y2], o1: P = [PX.o1, OZ.y2], o2: P = [PX.o2, OZ.y2], c2: P = [PX.c2, OZ.y2];
  return {
    atoms: [{ el: 'C', html: 'C', at: c1 }, { el: 'O', html: 'O', at: o1, hi: true }, { el: R, html: R, at: polar(c1, 120, OZ.sub) }, { el: R, html: R, at: polar(c1, 240, OZ.sub) }, { el: 'O', html: 'O', at: o2, hi: true }, { el: 'C', html: 'C', at: c2 }, { el: RP, html: RP, at: polar(c2, 60, OZ.sub) }, { el: RP, html: RP, at: polar(c2, 300, OZ.sub) }],
    bonds: [{ a: 0, b: 1, order: 2 }, { a: 0, b: 2, order: 1 }, { a: 0, b: 3, order: 1 }, { a: 4, b: 5, order: 2 }, { a: 5, b: 6, order: 1 }, { a: 5, b: 7, order: 1 }],
  };
}
function drawMol(s: Sketch, m: Mol) {
  const rect = (i: number) => labRect(m.atoms[i].at, m.atoms[i].html, OZ.size);
  m.bonds.forEach(({ a, b, order }) => bond(s, m.atoms[a].at, rect(a), m.atoms[b].at, rect(b), { order }));
  m.atoms.forEach((a) => lab(s, a.at, a.html, OZ.size, a.hi ? C.amber : C.ink));
}
/** Bonds at an atom, counting a double bond twice and an R₂ group's line as its two R. */
const valence = (m: Mol, i: number) => m.bonds.filter((b) => b.a === i || b.b === i).reduce((n, b) => n + b.order * (/2$/.test(m.atoms[b.a === i ? b.b : b.a].el) ? 2 : 1), 0);
const countEl = (m: Mol, el: string) => m.atoms.reduce((n, a) => n + (a.el.replace(/2$/, '') === el ? (/2$/.test(a.el) ? 2 : 1) : 0), 0);
const RESULT95 = ['read products backwards to', 'find the double-bond position'];
const A1 = { x: [114, 176], y: OZ.y1 }, A2 = { x: [16, 76], y: OZ.y2 };
const fig95: Diagram = {
  id: 'c11-09-fig-9.5',
  topic: 2,
  name: 'Ozonolysis',
  cases: [{ chip: 'Ozonolysis', cap: CAP95 }],
  draw() {
    const s = new Sketch(W, OZ.h);
    drawMol(s, alkene());
    arrow(s, [A1.x[0], A1.y], [A1.x[1], A1.y], { w: 1.6 });
    s.sym((A1.x[0] + A1.x[1]) / 2, A1.y - 9, 'O<sub>3</sub> / CCl<sub>4</sub>', { size: 12.5 });
    s.sym((A1.x[0] + A1.x[1]) / 2, A1.y + 20, 'low T', { size: 12.5 });
    drawMol(s, ozonide());
    s.tag(OZ.ring.c[0], OZ.ring.c[1] + OZ.ring.r + 16, 'ozonide', null, null, { anchor: 'middle' });
    arrow(s, [A2.x[0], A2.y], [A2.x[1], A2.y], { w: 1.6 });
    s.sym((A2.x[0] + A2.x[1]) / 2, A2.y + 20, 'Zn / H<sub>2</sub>O', { size: 12.5 });
    drawMol(s, products());
    s.sym(PX.plus, OZ.y2 + 6, '+', { size: 18 });
    resultBlock(s, RESULT95, { size: 13 });
    return s;
  },
  check() {
    const s = fig95.draw(fig95.cases[0]), out: Check[] = [];
    const al = alkene(), oz = ozonide(), pr = products();
    const cIdx = (m: Mol) => m.atoms.flatMap((a, i) => (a.el === 'C' ? [i] : []));
    out.push(['Alkene: each carbon four bonds (C=C plus two groups), R, R on one and R′, R′ on the other', cIdx(al).every((i) => valence(al, i) === 4) && countEl(al, R) === 2 && countEl(al, RP) === 2]);
    const v = RING_AZ.map((az) => polar(OZ.ring.c, az, OZ.ring.r)), sides = v.map((p, i) => len(p, v[(i + 1) % 5]));
    const angs = v.map((p, i) => { const a = v[(i + 4) % 5], b = v[(i + 1) % 5]; return (Math.acos(((a[0] - p[0]) * (b[0] - p[0]) + (a[1] - p[1]) * (b[1] - p[1])) / (len(p, a) * len(p, b))) * 180) / Math.PI; });
    const ring = [0, 1, 2, 3, 4].map((i) => oz.atoms[i].el).join('');
    out.push([`Ozonide: a five-membered ring ${ring.split('').join('–')} (O–O at the bottom), regular: sides ${fmt(sides[0], 2)} px, angles ${fmt(angs[0], 1)}°`, ring === 'OCOOC' && sides.every((x) => close(x, sides[0], 1e-9)) && angs.every((x) => close(x, 108, 1e-9))]);
    out.push(['Ozonide: each ring O has two bonds, each ring C four (two ring bonds and its R₂ or R′₂)', [0, 2, 3].every((i) => valence(oz, i) === 2) && [1, 4].every((i) => valence(oz, i) === 4)]);
    out.push([`Step 1 adds O₃: the alkene has ${countEl(al, 'O')} O, the ozonide ${countEl(oz, 'O')}; the C, R and R′ are carried over`, countEl(al, 'O') + 3 === countEl(oz, 'O') && countEl(oz, 'C') === 2 && countEl(oz, R) === 2 && countEl(oz, RP) === 2]);
    out.push([`Step 2 (Zn/H₂O): the products carry ${countEl(pr, 'O')} O, the third goes to zinc (ZnO): 3 = 2 + 1`, countEl(oz, 'O') === countEl(pr, 'O') + 1]);
    const pc = cIdx(pr);
    out.push(['Products: each carbonyl carbon four bonds (C=O plus two groups), one carrying R, R and one R′, R′, as in the alkene', pc.every((i) => valence(pr, i) === 4) && pc.map((i) => pr.bonds.filter((b) => b.a === i || b.b === i).map((b) => pr.atoms[b.a === i ? b.b : b.a].el).filter((e) => e !== 'O').join()).join('|') === 'R,R|R′,R′']);
    // read backwards: replace both C=O by one C=C between the carbonyl carbons; the groups match the alkene's
    const back = pc.map((i) => pr.bonds.filter((b) => b.a === i || b.b === i).map((b) => pr.atoms[b.a === i ? b.b : b.a].el).filter((e) => e !== 'O').sort().join());
    const alC = cIdx(al).map((i) => al.bonds.filter((b) => b.a === i || b.b === i).map((b) => al.atoms[b.a === i ? b.b : b.a].el).filter((e) => e !== 'C').sort().join());
    out.push([`Read backwards: joining the two carbonyl carbons by a C=C gives (${back.join(')C=C(')}) — the alkene R₂C=CR′₂ again`, JSON.stringify(back) === JSON.stringify(alC)]);
    const trig = (m: Mol) => cIdx(m).flatMap((i) => { const at = m.atoms[i].at, nb = m.bonds.filter((b) => b.a === i || b.b === i).map((b) => { const q = m.atoms[b.a === i ? b.b : b.a].at; return (Math.atan2(at[1] - q[1], q[0] - at[0]) * 180) / Math.PI; }); return nb.flatMap((x, k) => nb.slice(k + 1).map((y) => azDiff(x, y))); });
    const tg = [...trig(al), ...trig(pr)];
    out.push([`Trigonal carbons, measured on the drawing: every angle at the alkene and carbonyl carbons is ${[...new Set(tg.map((x) => fmt(x, 1)))].join(', ')}°`, tg.length === 12 && tg.every((x) => close(x, 120, 1e-9))]);
    out.push(['The conditions are the book’s: O₃ / CCl₄ and low T over the first arrow, Zn / H₂O on the second', ['O3 / CCl4', 'low T', 'Zn / H2O'].every((t) => s.labels.some((l) => l.text === t))]);
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_11_09: Diagram[] = [fig91, fig92, fig93, fig94, fig95];

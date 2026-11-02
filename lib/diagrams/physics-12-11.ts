import { C, F, LABEL_GAP, Rect, Sketch, crosses, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 11 (Dual Nature of Radiation and Matter): every
 * drawing of the Master Reference book in pp. 714–759, redrawn. They are the
 * eight numbered figures, each printed on a "CHAPTER 11 · FIGURES" page (11.1–
 * 11.3 on p. 719, 11.4 on p. 721, 11.5 and 11.6 on p. 729, 11.7 and 11.8 on
 * p. 738; the first copy of each caption sits a page earlier, where the text
 * refers to it). There are no unnumbered drawings: pp. 714–759 were checked page
 * by page (and their vector paths counted: only those four pages hold anything
 * but straight rules, table lines and fraction bars); the rest is prose, typeset
 * equations, boxed results and quantity tables.
 *
 * Every figure is computed from the physics, never placed by eye: the
 * photocurrent curves rise from zero at their own stopping potential −V₀ to a
 * saturation current set by the intensity (i = i_sat(1 − e^(−(V + V₀)/a)), with
 * a = 1.25 V, the book's own curve shape: it passes 2.1 μA at V = 0 for
 * i_sat = 3.0 μA, V₀ = 1.5 V); Einstein's lines are V₀ = (h/e)ν − φ₀/e with
 * h/e = 4.136 × 10⁻¹⁵ V s and the book's work functions 2.0 and 3.0 eV; the
 * de Broglie wave has exactly n = 4 whole wavelengths round the orbit; the
 * Davisson–Germer detector sits at φ = 50° from the incident beam. Each `check`
 * recomputes what the figure and its caption state, reads the drawn curves back
 * where it can, and measures that no label or tag touches a line it does not
 * name.
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
/** A point at maths angle `deg` (anticlockwise, y up) and distance R from c, on the y-down drawing. */
const polar = (c: P, R: number, deg: number): P => [c[0] + R * Math.cos(deg * D2R), c[1] - R * Math.sin(deg * D2R)];
/** The angle between two drawn directions, in degrees. */
const between = (a: P, b: P) => Math.acos(Math.max(-1, Math.min(1, dotp(unit(a), unit(b))))) / D2R;
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---------- drawing helpers (as in physics-12-10.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, curves, wires, arrows), by
 * sketch: `clearance` measures each tag and label against them. Dotted guides
 * and hatching are left out (`free`).
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
  if (!o.free) keep(s, [...pts, pts[0]]);
}
const box = (r: Rect): P[] => [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]];
/** Every arrowhead drawn, by sketch, as its tip and its middle: a tag's dot keeps off them (`dotsOffHeads`). */
const HEADS = new WeakMap<Sketch, [P, P][]>();
/** Every arrowhead as the triangle drawn, by sketch. */
const INKS = new WeakMap<Sketch, P[][]>();
const headTri = (tip: P, u: P, L = 9, hw = 4.5): P[] => { const b = add(tip, u, -L), nv: P = [-u[1], u[0]]; return [tip, add(b, nv, hw), add(b, nv, -hw)]; };
/** A small arrowhead with its tip at p, pointing along the unit direction u. */
function head(s: Sketch, p: P, u: P, color: string = C.ink, L = 9, hw = 4.5) {
  const tri = headTri(p, u, L, hw);
  s.add(`<path d="M${tri.map((q) => `${r1(q[0])} ${r1(q[1])}`).join(' L')} Z" fill="${color}"/>`);
  keep(s, [...tri, tri[0]]);
  HEADS.set(s, [...(HEADS.get(s) ?? []), [p, add(p, u, -L / 2)]]);
  INKS.set(s, [...(INKS.get(s) ?? []), tri]);
}
/** An arrow from a to b, its head at b. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: 'dash' | 'dot'; L?: number; hw?: number } = {}) {
  const u = unit(sub(b, a)), L = o.L ?? 9;
  path(s, [a, add(b, u, -L + 1)], { color: o.color, w: o.w ?? 1.8, dash: o.dash });
  head(s, b, u, o.color ?? C.ink, L, o.hw ?? 4.5);
}
/** The points of an arc about c, radius R, from maths angle a0 to a1 (degrees). */
const arcPts = (c: P, R: number, a0: number, a1: number, n = 90): P[] => samples(a0, a1, n).map((a) => polar(c, R, a));
/** A ring (a meter, a detector, a nucleus): its outline, kept. */
const ring = (s: Sketch, c: P, R: number, o: Stroke = {}) => path(s, arcPts(c, R, 0, 360, 120), o);
/**
 * A dotted guide, free of the clearance check (it only joins marks), but
 * never through a label or a tag. See `guideHits`.
 */
const GUIDES = new WeakMap<Sketch, [P, P][]>();
const guide = (s: Sketch, a: P, b: P, color: string = C.slate, dash: 'dot' | 'dash' = 'dot') => {
  GUIDES.set(s, [...(GUIDES.get(s) ?? []), [a, b]]);
  path(s, [a, b], { color, w: 1.1, dash, free: true });
};
/** Words in Onest (names on the drawing, as the book writes them), registered so tags and the checks keep clear of them. */
function words(s: Sketch, x: number, y: number, t: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}) {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = t.length * size * 0.56;
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  s.labels.push({ text: t, rect: [x0, y - size * 0.75, x0 + w, y + size * 0.22] });
  s.add(`<text x="${r1(x)}" y="${r1(y)}" text-anchor="${anchor}" font-family="${F.tag}" font-size="${size}" fill="${o.color ?? C.text}">${esc(t)}</text>`);
}
/** Point-to-segment distance. */
function distSeg(p: P, a: P, b: P) {
  const d = sub(b, a), L = dotp(d, d) || 1, k = Math.max(0, Math.min(1, dotp(sub(p, a), d) / L));
  return len(p, add(a, d, k));
}
/** How far p is from a triangle's ink (0 inside it). */
const triDist = (t: P[], p: P) => {
  const side = (a: P, b: P) => (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
  const s3 = t.map((a, i) => side(a, t[(i + 1) % 3]));
  if (s3.every((v) => v >= 0) || s3.every((v) => v <= 0)) return 0;
  return Math.min(...t.map((a, i) => distSeg(p, a, t[(i + 1) % 3])));
};
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
/** The labels and tags a dotted guide runs through (more than 4 px into the box). */
const guideHits = (s: Sketch): string[] => {
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  return [...new Set((GUIDES.get(s) ?? []).flatMap(([a, b]) => boxes.filter(([, r]) => crosses(a, b, r, 4)).map(([name]) => name)))];
};
/** Labels clear of the lines, and no dotted guide through a label. */
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
/** And no tag's dot beside an arrowhead either: at least HEAD_CLEAR px of white between the dot (2.6 px) and the head's ink. */
const HEAD_CLEAR = 6;
const dotsClearOfHeads = (s: Sketch): Check => {
  const near = s.tags.filter((t) => t.from).map((t) => ({ name: t.name, gap: Math.min(Infinity, ...(INKS.get(s) ?? []).map((tri) => triDist(tri, t.from as P))) - 2.6 })).sort((a, b) => a.gap - b.gap);
  return [`Every tag's dot keeps at least ${HEAD_CLEAR} px clear of every arrowhead${near.length ? `: the closest is "${near[0].name}", ${fmt(near[0].gap, 1)} px` : ''}`, near.every((n) => n.gap >= HEAD_CLEAR - 1e-9)];
};
/** Every label inside the frame (the kit's audit checks tags only). */
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
/** The layout checks of a drawn sketch. */
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), dotsOffHeads(s), dotsClearOfHeads(s), inFrame(s)];
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

/* ---------- graphs ---------- */
/** Where (0, 0) of the graph sits on the drawing, and how many px one unit is along each axis. */
type Frame = { ox: number; oy: number; sx: number; sy: number };
const gx = (f: Frame, u: number) => f.ox + u * f.sx;
const gy = (f: Frame, v: number) => f.oy - v * f.sy;
const gp = (f: Frame, u: number, v: number): P => [gx(f, u), gy(f, v)];
const uOf = (f: Frame, x: number) => (x - f.ox) / f.sx;
const vOf = (f: Frame, y: number) => (f.oy - y) / f.sy;
/** A tick's number: minus as U+2212, one decimal only where the step needs it. */
const tickTxt = (n: number, d = 0) => (n < 0 ? '−' : '') + Math.abs(n).toFixed(d);
/**
 * The graph's frame, as the book draws it: the vertical axis at u = u0, the
 * horizontal axis at v = v0, both grey with arrowheads, ticks and their
 * numbers in slate. The axes are kept (labels keep clear of them).
 */
function frameAxes(s: Sketch, f: Frame, o: { u0: number; u1: number; v0: number; v1: number; uTicks: number[]; vTicks: number[]; ud?: number; vd?: number }) {
  const xa = gx(f, o.u0), ya = gy(f, o.v0), xe = gx(f, o.u1), ye = gy(f, o.v1);
  s.vec(xa, ya, xe, ya, { color: C.grey, w: 1.3 });
  s.vec(xa, ya, xa, ye, { color: C.grey, w: 1.3 });
  keep(s, [[xa, ya], [xe, ya]]);
  keep(s, [[xa, ya], [xa, ye]]);
  o.vTicks.forEach((v) => {
    s.line(xa - 4, gy(f, v), xa, gy(f, v), { color: C.grey, w: 1.2 });
    s.sym(xa - 7, gy(f, v) + 4.5, tickTxt(v, o.vd), { size: 12, anchor: 'end', color: C.slate });
  });
  o.uTicks.forEach((u) => {
    s.line(gx(f, u), ya, gx(f, u), ya + 4, { color: C.grey, w: 1.2 });
    s.sym(gx(f, u), ya + 17, tickTxt(u, o.ud), { size: 12, color: C.slate });
  });
}
/** A function drawn as a smooth line, sampled finely; returns the drawn points. */
function curve(s: Sketch, f: Frame, fn: (u: number) => number, u0: number, u1: number, o: Stroke = {}, n = 400): P[] {
  const pts = samples(u0, u1, n).map((u) => gp(f, u, fn(u)));
  path(s, pts, o);
  return pts;
}
/** The drawn curves of a sketch, by name, so a check can read them back. */
const CURVES = new WeakMap<Sketch, Record<string, P[]>>();
const keepCurve = (s: Sketch, name: string, pts: P[]) => CURVES.set(s, { ...(CURVES.get(s) ?? {}), [name]: pts });
/** A drawn curve read back at u: its value, interpolated between the two drawn points either side. */
function readAt(f: Frame, pts: P[], u: number): number {
  const x = gx(f, u);
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i];
    if ((a[0] - x) * (b[0] - x) <= 0 && a[0] !== b[0]) return vOf(f, a[1] + ((b[1] - a[1]) * (x - a[0])) / (b[0] - a[0]));
  }
  return NaN;
}
/** A key line: the curve's own stroke, then its name in STIX. */
function keyRow(s: Sketch, x: number, y: number, html: string, st: Stroke, color: string = C.text) {
  path(s, [[x, y - 4], [x + 18, y - 4]], { ...st, free: true });
  s.sym(x + 24, y + 1, html, { size: 13, anchor: 'start', color });
}

/* ---------- the photocurrent ---------- */
/**
 * The photocurrent at collector potential V: zero below the stopping potential
 * −V₀ (even the fastest electron is turned back), then rising to the saturation
 * current i_sat. The rise is the book's curve, i_sat(1 − e^(−(V + V₀)/a)) with
 * a = 1.25 V (Figure 11.3's high-intensity curve reads 2.1 μA at V = 0:
 * 3.0(1 − e^(−1.5/1.25)) = 2.10).
 */
const RISE = 1.25;
const iPh = (V: number, V0: number, isat: number) => (V <= -V0 ? 0 : isat * (1 - Math.exp(-(V + V0) / RISE)));

/* ---------- circuits ---------- */
/** Wires as drawn, by sketch, so a check can read the circuit back off the drawing. */
const WIRES = new WeakMap<Sketch, P[][]>();
function wire(s: Sketch, pts: P[]) { path(s, pts); const l = WIRES.get(s) ?? []; l.push(pts); WIRES.set(s, l); }
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
/** A meter (V, μA): a ring with its upright letters in STIX, registered as a point. */
function meter(s: Sketch, c: P, r: number, letters: string) {
  ring(s, c, r, { w: 1.9 });
  s.point(c[0], c[1], 0.1, '');
  s.text(c[0], c[1] + 4.5, letters, { size: 13 });
}

/* ===================================================================== */
/* Figure 11.1 · the photoelectric apparatus (topic 01)                   */
/* ===================================================================== */
/**
 * The evacuated tube with the emitter C (left) and the collector A (right),
 * the quartz window in the tube's top wall between them, three rays of light
 * through it falling slantwise onto the face of C that looks at A (the face the
 * photoelectrons leave from: electrons come off the lit surface), and the
 * photoelectrons crossing to A. Below, the circuit as the book wires it: the
 * voltmeter straight across the two plates, and the microammeter in series with
 * the variable battery between them (+ to the collector, as drawn: an
 * accelerating potential; the battery's polarity can be reversed). The check
 * reads the wiring back off the drawn wires.
 */
const G111 = { tube: [96, 66, 324, 170] as Rect, win: [154, 62, 196, 70] as Rect, pC: [132, 82, 140, 150] as Rect, pA: [296, 82, 304, 150] as Rect, rays: [86, 100, 114], y0: 30, yHead: 46, e: [124, 138], yV: 218, V: [218, 218] as P, rV: 12, uA: [136, 250] as P, ruA: 13, yB: 290, bm: 208, bp: 218, varr: [[192, 316], [236, 266]] as [P, P] };
/** A ray of light, from above the tube at y0 down at 45° to the point (C's right face, y). */
const ray111 = (y: number): [P, P] => { const { pC, y0 } = G111, x = pC[2] + 1; return [[x + (y - y0), y0], [x, y]]; };
const fig111: Diagram = {
  id: 'p12-11-fig-11.1',
  topic: 0,
  name: 'Photoelectric effect apparatus',
  cases: [{ chip: 'Apparatus', cap: 'Evacuated tube with emitter plate <i>C</i> on the left and collector plate <i>A</i> on the right; monochromatic light entering through a quartz window onto <i>C</i>; external circuit with a variable battery (polarity reversible), a voltmeter across the plates, and a microammeter in series reading the photocurrent.' }],
  draw() {
    const s = new Sketch(W, 352);
    const { tube, win, pC, pA, rays, y0, yHead, e, yV, V, rV, uA, ruA, yB, bm, bp, varr } = G111;
    const xC = (pC[0] + pC[2]) / 2, xA = (pA[0] + pA[2]) / 2;
    // the tube, its top wall broken by the quartz window (hatched, the hatching free)
    path(s, [[win[2], tube[1]], [tube[2], tube[1]], [tube[2], tube[3]], [tube[0], tube[3]], [tube[0], tube[1]], [win[0], tube[1]]], { w: 1.9 });
    outline(s, box(win), { w: 1.3 });
    for (let x = win[0] + 5; x < win[2]; x += 6) path(s, [[x, win[3] - 1], [x + 5, win[1] + 1]], { color: C.slate, w: 0.9, free: true });
    // the two plates
    outline(s, box(pC), { w: 1.8 });
    outline(s, box(pA), { w: 1.8 });
    s.sym(pC[0] - 8, pC[1] + 6, '<i>C</i>', { size: 16, anchor: 'end' });
    s.sym(pA[0] - 10, pA[1] + 2, '<i>A</i>', { size: 16, anchor: 'end' });
    // the light, through the window onto the face of C that looks at A
    // each arrowhead at one height above the tube, so the three stand in a row
    rays.forEach((y) => { const [a, b] = ray111(y); path(s, [a, b], { color: C.slate, w: 1.5 }); head(s, add(a, sub(b, a), (yHead - y0) / (y - y0)), unit(sub(b, a)), C.slate, 8, 3.4); });
    // the photoelectrons, from that same face across to A
    e.forEach((y) => { path(s, [[pC[2] + 6, y], [pA[0] - 14, y]], { color: C.mari, w: 2, dash: 'dash' }); head(s, [pA[0] - 6, y], [1, 0], C.mari, 8, 4); });
    // the circuit: the voltmeter across the plates, the microammeter and the battery in series
    const nC: P = [xC, yV], nA: P = [xA, yV];
    wire(s, [[xC, pC[3]], nC]);
    wire(s, [[xA, pA[3]], nA]);
    wire(s, [nC, [V[0] - rV, yV]]);
    wire(s, [[V[0] + rV, yV], nA]);
    meter(s, V, rV, 'V');
    wire(s, [nC, [xC, uA[1] - ruA]]);
    meter(s, uA, ruA, 'μA');
    wire(s, [[xC, uA[1] + ruA], [xC, yB], [bm, yB]]);
    wire(s, [[bp, yB], [xA, yB], nA]);
    s.dot(nC[0], nC[1], 3);
    s.dot(nA[0], nA[1], 3);
    // the battery: short thick (−) plate, long thin (+) plate; the variable arrow across it
    path(s, [[bm, yB - 8], [bm, yB + 8]], { w: 4 });
    path(s, [[bp, yB - 14], [bp, yB + 14]], { w: 2 });
    arrow(s, varr[0], varr[1], { color: C.slate, w: 1.4, L: 8, hw: 4 });
    s.sym(bm - 10, yB - 13, '−', { size: 15 });
    s.sym(bp + 10, yB + 24, '+', { size: 15 });
    const lit = ray111(rays[0]), litAt = (yHead + 8 - lit[0][1]) / (lit[1][1] - lit[0][1]);
    s.place([
      { t: 'Monochromatic light', p: add(lit[0], sub(lit[1], lit[0]), litAt), at: [[4, 4, 'start'], [6, 4, 'start']] },
      { t: 'Quartz window', p: [win[2] - 2, win[1] + 2], at: [[W - 4, 4, 'end'], [W - 6, 4, 'end']] },
      { t: 'Evacuated tube', p: [tube[0] + 14, tube[3]], at: [[2, 176, 'start'], [4, 176, 'start']] },
      { t: 'Emitter', p: [pC[2], pC[3] - 4], at: [[pC[2] + 2, 176, 'start'], [pC[2] + 4, 176, 'start']] },
      { t: 'Collector', p: [pA[0], pA[3] - 2], at: [[pA[0], 176, 'end'], [pA[0] - 2, 176, 'end']] },
      { t: 'Photoelectrons', hi: true, p: [222, e[0]], at: [[228, 92, 'middle'], [230, 92, 'middle']] },
      { t: 'Voltmeter', ring: [V[0], V[1], rV], at: [[V[0], 238, 'middle'], [V[0], 240, 'middle']] },
      { t: 'Microammeter', ring: [uA[0], uA[1], ruA], at: [[2, 268, 'start'], [2, 272, 'start']] },
      { t: 'Variable battery (polarity reversible)', p: [bp, yB + 14], at: [[W / 2 + 6, 324, 'middle'], [W / 2, 324, 'middle'], [W - 4, 324, 'end']] },
    ]);
    return s;
  },
  check() {
    const { tube, win, pC, pA, rays, e, V, rV, uA, ruA, yB, bm, bp, varr } = G111;
    const s = fig111.draw(fig111.cases[0]);
    const xC = (pC[0] + pC[2]) / 2, xA = (pA[0] + pA[2]) / 2;
    const terms: Record<string, P> = { emitter: [xC, pC[3]], collector: [xA, pA[3]], 'V(1)': [V[0] - rV, G111.yV], 'V(2)': [V[0] + rV, G111.yV], 'μA(1)': [xC, uA[1] - ruA], 'μA(2)': [xC, uA[1] + ruA], 'battery(−)': [bm, yB], 'battery(+)': [bp, yB] };
    const got = nodes(s, terms);
    const want = [['emitter', 'V(1)', 'μA(1)'], ['collector', 'V(2)', 'battery(+)'], ['μA(2)', 'battery(−)']];
    const rs = rays.map(ray111);
    /** Where a ray crosses the tube's top wall. */
    const atWall = ([a, b]: [P, P]) => a[0] + ((b[0] - a[0]) * (tube[1] - a[1])) / (b[1] - a[1]);
    const lowestRay = Math.max(...rs.map(([, b]) => b[1]));
    return [
      [`The circuit read off the drawn wires: ${showNodes(got)}: the voltmeter straight across the two plates, the microammeter in series with the battery (the only path between C and the battery runs through it)`, sameNodes(got, want)],
      ['The battery’s long (+) plate is wired to the collector A and its short (−) plate, through the microammeter, to the emitter C: A is positive, an accelerating potential (as drawn; the battery’s polarity is reversible)', sameNodes(got, want) && bp > bm],
      ['The variable arrow runs across the battery, from below left to above right', distSeg([(bm + bp) / 2, yB], varr[0], varr[1]) < 3],
      [`Every ray of light comes from outside the tube and enters through the quartz window in its top wall (crossing the wall at ${rs.map((r) => fmt(atWall(r), 1)).join(', ')} px, the window ${win[0]}–${win[2]} px)`, rs.every(([a]) => a[1] < tube[1]) && rs.every((r) => atWall(r) > win[0] + 2 && atWall(r) < win[2] - 2)],
      [`Every ray ends on C’s right-hand face, the face that looks at A (x = ${pC[2]} px; the rays end at x = ${rs.map(([, b]) => fmt(b[0], 1)).join(', ')} px, y = ${rays.join(', ')} px, within the plate’s ${pC[1]}–${pC[3]} px)`, rs.every(([, b]) => Math.abs(b[0] - pC[2]) <= 1.5 && b[1] > pC[1] && b[1] < pC[3])],
      [`The photoelectrons leave that same lit face (from x = ${pC[2] + 6} px) and cross the evacuated tube from C to A, inside it, below the light (rays end by y = ${lowestRay} px, electrons at ${e.join(', ')} px)`, e.every((y) => y > pC[1] && y < pC[3] && y > tube[1] && y < tube[3] && y > lowestRay + 6) && pC[2] < pA[0]],
      ['Both plates sit inside the tube, C on the left and A on the right', pC[0] > tube[0] && pC[1] > tube[1] && pC[3] < tube[3] && pA[2] < tube[2] && pA[1] > tube[1] && pA[3] < tube[3] && pC[0] < pA[0]],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 11.2 · photocurrent against intensity (topic 01)                */
/* ===================================================================== */
/**
 * The book's axes, 0 to 5 in arbitrary units on both, and its line i = I
 * through the origin, with the point (3, 3) the book marks on it.
 */
const F112: Frame = { ox: 56, oy: 262, sx: 44, sy: 40 };
const fig112: Diagram = {
  id: 'p12-11-fig-11.2',
  topic: 0,
  name: 'Photocurrent against intensity',
  cases: [{ chip: 'i ∝ I', cap: 'Straight line through the origin, photocurrent on the <i>y</i>-axis versus intensity of light on the <i>x</i>-axis.' }],
  draw() {
    const s = new Sketch(W, 340);
    const f = F112;
    frameAxes(s, f, { u0: 0, u1: 5.9, v0: 0, v1: 5.8, uTicks: [1, 2, 3, 4, 5], vTicks: [1, 2, 3, 4, 5] });
    s.sym(f.ox - 7, f.oy + 17, '0', { size: 12, anchor: 'end', color: C.slate });
    s.sym(f.ox + 10, gy(f, 5.8) + 6, 'Photocurrent <i>i</i> (a.u.)', { size: 15, anchor: 'start' });
    s.sym(W - 4, f.oy - 9, 'Intensity <i>I</i> (a.u.)', { size: 15, anchor: 'end' });
    // the marked point, read off both axes
    const q = gp(f, 3, 3);
    guide(s, q, [q[0], f.oy]);
    guide(s, q, [f.ox, q[1]]);
    const pts = curve(s, f, (u) => u, 0, 5, { color: C.mari, w: 2.8 }, 50);
    keepCurve(s, 'line', pts);
    s.dot(q[0], q[1], 3.4);
    resultBlock(s, ['<i>i</i> ∝ <i>I</i>']);
    s.place([{ t: 'Through the origin', hi: true, p: gp(f, 1.5, 1.5), at: [[64, 98, 'start'], [64, 104, 'start']] }]);
    return s;
  },
  check() {
    const f = F112, s = fig112.draw(fig112.cases[0]);
    const pts = CURVES.get(s)?.line ?? [];
    const ratio = pts.slice(1).map((p) => vOf(f, p[1]) / uOf(f, p[0]));
    // the reason: more light, more photons each second, each freeing at most one electron
    const nph = (P: number) => (P * 600e-9) / (6.63e-34 * 3e8);
    return [
      [`The drawn line starts at the origin (${fmt(uOf(f, pts[0][0]), 6)}, ${fmt(vOf(f, pts[0][1]), 6)}): no light, no photocurrent`, close(uOf(f, pts[0][0]), 0, 1e-9) && close(vOf(f, pts[0][1]), 0, 1e-9)],
      [`It is straight: i/I read back at all ${ratio.length} drawn points is ${fmt(Math.min(...ratio), 9)} to ${fmt(Math.max(...ratio), 9)}, so doubling I doubles i`, ratio.every((r) => close(r, 1, 1e-9))],
      ['The marked point (3, 3) lies on the line', close(readAt(f, pts, 3), 3, 1e-9)],
      [`Why: at fixed wavelength the photon rate is n = Pλ/(hc), proportional to the power: ${fmt(nph(20) / 1e19, 3)} × 10¹⁹ s⁻¹ for 20 W at 600 nm (worked example 2, the book's ≈ 6.0 × 10¹⁹), twice that for 40 W`, close(nph(40) / nph(20), 2, 1e-12) && Math.abs(nph(20) / 6.0e19 - 1) < 0.01],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 11.3 · two intensities, one stopping potential (topic 01)       */
/* ===================================================================== */
/**
 * The book's values: stopping potential V₀ = 1.5 V for both curves (one
 * frequency), saturation currents 1.5 μA (low intensity) and 3.0 μA (high,
 * twice the intensity), the potential axis from −3 V to 6 V.
 */
const G113 = { V0: 1.5, lo: 1.5, hi: 3.0, u0: -3, u1: 6.6, v1: 3.9, vEnd: 5.4 };
const F113: Frame = { ox: 56 + 3 * 28, oy: 238, sx: 28, sy: 52 };
const fig113: Diagram = {
  id: 'p12-11-fig-11.3',
  topic: 0,
  name: 'Photocurrent against potential: two intensities',
  cases: [{ chip: 'Two intensities', cap: 'Photocurrent versus collector potential for a low and a high intensity of light at the same frequency; both meet the potential axis at the same stopping potential −<i>V</i><sub>0</sub> on the left, but the high-intensity curve saturates at a higher current on the right.' }],
  draw() {
    const s = new Sketch(W, 340);
    const f = F113, { V0, lo, hi, u0, u1, v1, vEnd } = G113;
    frameAxes(s, f, { u0, u1, v0: 0, v1, uTicks: [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6], vTicks: [0.5, 1, 1.5, 2, 2.5, 3, 3.5], vd: 1 });
    s.sym(gx(f, u0) + 10, gy(f, v1) + 6, 'Photocurrent <i>i</i> (μA)', { size: 15, anchor: 'start' });
    s.sym(W - 4, f.oy - 9, 'Collector potential <i>V</i> (V)', { size: 15, anchor: 'end' });
    // V = 0, and the stopping potential −V₀ both curves share
    guide(s, gp(f, 0, 0), gp(f, 0, 3.6), C.faint, 'dot');
    guide(s, gp(f, -V0, 0), gp(f, -V0, 3.6), C.slate, 'dash');
    s.sym(gx(f, -V0) - 6, gy(f, 1.1), '−<i>V</i><sub>0</sub>', { size: 15, anchor: 'end' });
    const low = curve(s, f, (V) => iPh(V, V0, lo), u0, vEnd, { color: C.ink, w: 2.2 });
    const high = curve(s, f, (V) => iPh(V, V0, hi), u0, vEnd, { color: C.mari, w: 2.8 });
    keepCurve(s, 'low', low);
    keepCurve(s, 'high', high);
    s.dot(gx(f, -V0), f.oy, 3.4);
    resultBlock(s, ['Same stopping potential −<i>V</i><sub>0</sub>'], { size: 14 });
    s.place([
      { t: 'High intensity', hi: true, p: gp(f, 3.6, iPh(3.6, V0, hi)), at: [[W - 4, 40, 'end'], [W - 6, 40, 'end']] },
      { t: 'Low intensity', p: gp(f, 3.6, iPh(3.6, V0, lo)), at: [[gx(f, 3.6), 184, 'middle'], [gx(f, 3.4), 188, 'middle']] },
    ]);
    return s;
  },
  check() {
    const f = F113, { V0, lo, hi } = G113, s = fig113.draw(fig113.cases[0]);
    const c = CURVES.get(s) ?? {}, low = c.low ?? [], high = c.high ?? [];
    const zeroBelow = (pts: P[]) => pts.filter((p) => uOf(f, p[0]) <= -V0 + 1e-9).every((p) => close(vOf(f, p[1]), 0, 1e-9));
    const rising = (pts: P[]) => pts.slice(1).every((p, k) => vOf(f, p[1]) >= vOf(f, pts[k][1]) - 1e-12);
    const start = (pts: P[]) => uOf(f, (pts.find((p) => vOf(f, p[1]) > 1e-9) ?? [0, 0])[0]);
    const end = (pts: P[]) => vOf(f, pts[pts.length - 1][1]);
    return [
      [`Both curves are zero up to the same stopping potential −V₀ = −${V0} V and rise from there (read back: first above zero at ${fmt(start(low), 3)} V and ${fmt(start(high), 3)} V): the frequency, not the intensity, fixes V₀`, zeroBelow(low) && zeroBelow(high) && Math.abs(start(low) + V0) < 0.03 && Math.abs(start(high) + V0) < 0.03],
      [`Each rises steadily to its saturation current: ${fmt(end(low), 3)} and ${fmt(end(high), 3)} μA at the right-hand end (of ${lo} and ${hi} μA)`, rising(low) && rising(high) && end(low) / lo > 0.97 && end(high) / hi > 0.97],
      [`The high-intensity curve saturates higher: ${hi} μA against ${lo} μA, twice the current for twice the intensity (i_sat ∝ I, Figure 11.2)`, close(hi / lo, 2)],
      [`At every potential above −V₀ the high-intensity current is exactly twice the low one (the same electrons’ energies, twice as many of them): ${fmt(readAt(f, high, 0), 3)} and ${fmt(readAt(f, low, 0), 3)} μA at V = 0, the book’s 2.1 and 1.05`, [-1, 0, 1, 3].every((V) => close(readAt(f, high, V), 2 * readAt(f, low, V), 1e-6)) && Math.abs(readAt(f, high, 0) - 2.1) < 0.01],
      [`eV₀ = K_max: the fastest electrons leave with ${V0} eV (V₀ = ${V0} V), the same for both intensities`, true],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 11.4 · two frequencies; Einstein's line (topic 01)              */
/* ===================================================================== */
/**
 * (a) The book's values: stopping potentials 1.0 V (ν₁, the lower frequency)
 * and 2.2 V (ν₂, higher), one saturation current 2.5 μA (the same intensity, as
 * the book draws it). (b) Einstein's line V₀ = (h/e)ν − φ₀/e for the book's two
 * metals, φ₀₁ = 2.0 eV and φ₀₂ = 3.0 eV (Figure 11.6 states them), with
 * h/e = 4.136 × 10⁻¹⁵ V s: thresholds at 4.84 and 7.25 × 10¹⁴ Hz, where the
 * book's dots sit.
 */
const HE = 6.626e-34 / 1.602e-19;
const V0line = (phi: number) => (nu14: number) => HE * nu14 * 1e14 - phi;
const nu0 = (phi: number) => phi / HE / 1e14;
const PHI = [2.0, 3.0];
const G114a = { V01: 1.0, V02: 2.2, isat: 2.5, u0: -3.4, u1: 5.9, v1: 4.2, vEnd: 5.4 };
const F114a: Frame = { ox: 52 + 3.4 * 28, oy: 236, sx: 28, sy: 52 };
const F114b: Frame = { ox: 56, oy: 140, sx: 26, sy: 34 };
const CAP114 = 'Two graphs: (a) photocurrent versus collector potential for two different frequencies at fixed intensity, the higher frequency giving a larger stopping potential (the current cuts off at a more negative collector potential); (b) stopping potential <i>V</i><sub>0</sub> versus frequency <i>ν</i>, a straight line of slope <i>h</i>/<i>e</i> meeting the <i>ν</i>-axis at the threshold frequency <i>ν</i><sub>0</sub>.';
/**
 * Einstein's lines for the two metals, from ν = 0 to 10 × 10¹⁴ Hz, with V₀ = 0
 * drawn across and each threshold dropped to the ν-axis. Each line is solid
 * from its threshold ν₀ up, where a stopping potential is measured, and dashed
 * below it: there is no emission below ν₀, so that part is only the
 * extrapolation to the V₀-axis intercept −φ₀/e. Shared by Figure 11.4(b) and
 * Figure 11.6; returns the drawn lines (dashed and solid parts joined, from ν = 0).
 */
/** The ν ranges (×10¹⁴ Hz) drawn dashed and solid on each Einstein line, by sketch, for the checks. */
const SPANS = new WeakMap<Sketch, { dashed: [number, number]; solid: [number, number] }[]>();
function einstein(s: Sketch, f: Frame, vMin: number, vMax: number, keyHtml: [string, string], keyAt: P): P[][] {
  frameAxes(s, f, { u0: 0, u1: 10.9, v0: vMin, v1: vMax, uTicks: [0, 2, 4, 6, 8, 10], vTicks: samples(-3, Math.floor(vMax - 0.4), Math.floor(vMax - 0.4) + 3) });
  s.sym(f.ox + 10, gy(f, vMax) + 6, 'Stopping potential <i>V</i><sub>0</sub> (V)', { size: 15, anchor: 'start' });
  s.sym(gx(f, 10.9), gy(f, vMin) + 40, '<i>ν</i> (×10<sup>14</sup> Hz)', { size: 15, anchor: 'end' });
  path(s, [gp(f, 0, 0), gp(f, 10, 0)], { color: C.grey, w: 1.2, free: true });
  const lines = PHI.map((phi, k) => {
    const st: Stroke = k ? { color: C.mari, w: 2.6 } : { color: C.ink, w: 2.2 }, n0 = nu0(phi);
    const below = curve(s, f, V0line(phi), 0, n0, { ...st, dash: 'dash' }, 10);
    const above = curve(s, f, V0line(phi), n0, 10, st, 20);
    SPANS.set(s, [...(SPANS.get(s) ?? []), { dashed: [0, n0], solid: [n0, 10] }]);
    return [...below, ...above.slice(1)];
  });
  PHI.forEach((phi, k) => {
    const n0 = nu0(phi);
    guide(s, gp(f, n0, 0), gp(f, n0, vMin + 0.5), k ? C.amber : C.slate);
    s.dot(gx(f, n0), f.oy, 3.2, k ? C.mari : C.ink);
    s.sym(gx(f, n0) + (k ? 2 : -2), gy(f, vMin) - 8, `<i>ν</i><sub>0${k + 1}</sub>`, { size: 14, color: k ? C.amber : C.text });
  });
  keyRow(s, keyAt[0], keyAt[1], keyHtml[0], { color: C.ink, w: 2.2 });
  keyRow(s, keyAt[0], keyAt[1] + 22, keyHtml[1], { color: C.mari, w: 2.6 }, C.amber);
  return lines;
}
/** The checks Einstein's lines make, read back off the drawing. */
function einsteinChecks(s: Sketch, f: Frame, lines: P[][]): Check[] {
  const slope = (pts: P[]) => (vOf(f, pts[pts.length - 1][1]) - vOf(f, pts[0][1])) / (uOf(f, pts[pts.length - 1][0]) - uOf(f, pts[0][0]));
  const cross = (pts: P[]) => { const v0 = vOf(f, pts[0][1]), m = slope(pts); return -v0 / m; };
  const book = 6.63e-34 / 1.6e-19;
  const spans = SPANS.get(s) ?? [];
  return [
    [`Each line is dashed below its threshold, where there is no emission and no stopping potential is measured (only the extrapolation to −φ₀/e), and solid from ν₀ up: dashed ${spans.map((p) => `${fmt(p.dashed[0], 2)}–${fmt(p.dashed[1], 2)}`).join(' and ')}, solid ${spans.map((p) => `${fmt(p.solid[0], 2)}–${fmt(p.solid[1], 2)}`).join(' and ')} × 10¹⁴ Hz`, spans.length === 2 && spans.every((p, k) => p.dashed[0] === 0 && close(p.dashed[1], nu0(PHI[k]), 1e-12) && close(p.solid[0], nu0(PHI[k]), 1e-12) && p.solid[1] === 10)],
    [`Both lines are straight with the same slope, h/e: ${fmt(slope(lines[0]), 4)} and ${fmt(slope(lines[1]), 4)} V per 10¹⁴ Hz, h/e = ${fmt(HE * 1e15, 4)} × 10⁻¹⁵ V s (parallel lines)`, lines.every((pts) => close(slope(pts), HE * 1e14, 1e-9) && pts.every((p) => close(vOf(f, p[1]), V0line(PHI[lines.indexOf(pts)])(uOf(f, p[0])), 1e-9)))],
    [`They cut the V₀ axis at −φ₀/e: ${fmt(vOf(f, lines[0][0][1]), 6)} V and ${fmt(vOf(f, lines[1][0][1]), 6)} V for φ₀₁ = ${PHI[0]} eV and φ₀₂ = ${PHI[1]} eV`, close(vOf(f, lines[0][0][1]), -PHI[0], 1e-9) && close(vOf(f, lines[1][0][1]), -PHI[1], 1e-9)],
    [`And the ν-axis at the thresholds ν₀ = φ₀/h: ${fmt(cross(lines[0]), 3)} and ${fmt(cross(lines[1]), 3)} × 10¹⁴ Hz (the book’s dots, about 4.8 and 7.25); with the book’s h = 6.63 × 10⁻³⁴ J s and e = 1.6 × 10⁻¹⁹ C they come out ${fmt(PHI[0] / book / 1e14, 2)} and ${fmt(PHI[1] / book / 1e14, 2)}`, close(cross(lines[0]), nu0(PHI[0]), 1e-9) && close(cross(lines[1]), nu0(PHI[1]), 1e-9) && Math.abs(nu0(PHI[0]) - 4.84) < 0.01 && Math.abs(nu0(PHI[1]) - 7.25) < 0.01],
    [`The metal with the larger work function has the higher threshold (${fmt(nu0(PHI[1]), 2)} > ${fmt(nu0(PHI[0]), 2)}), and its line lies lower by Δφ₀/e = ${fmt(PHI[1] - PHI[0], 1)} V at every ν`, nu0(PHI[1]) > nu0(PHI[0]) && [0, 5, 10].every((u) => close(readAt(f, lines[0], u) - readAt(f, lines[1], u), PHI[1] - PHI[0], 1e-9))],
  ];
}
const fig114: Diagram = {
  id: 'p12-11-fig-11.4',
  topic: 0,
  name: 'Effect of frequency',
  cases: [
    { chip: '(a) Two frequencies', part: 'a', cap: CAP114 },
    { chip: '(b) Einstein’s line', part: 'b', cap: CAP114 },
  ],
  draw(c: { part: 'a' | 'b' }) {
    if (c.part === 'b') {
      const s = new Sketch(W, 360);
      const f = F114b;
      const lines = einstein(s, f, -3.6, 2.9, ['Metal 1 (<i>φ</i><sub>01</sub>)', 'Metal 2 (<i>φ</i><sub>02</sub>)'], [f.ox + 14, gy(f, 1.9)]);
      keepCurve(s, 'm1', lines[0]);
      keepCurve(s, 'm2', lines[1]);
      resultBlock(s, ['slope = <i>h</i>/<i>e</i> for both'], { size: 14 });
      return s;
    }
    const s = new Sketch(W, 340);
    const f = F114a, { V01, V02, isat, u0, u1, v1, vEnd } = G114a;
    frameAxes(s, f, { u0, u1, v0: 0, v1, uTicks: [-3, -2, -1, 0, 1, 2, 3, 4, 5], vTicks: [0, 1, 2, 3] });
    s.sym(gx(f, u0) + 10, gy(f, v1) + 6, 'Photocurrent <i>i</i> (μA)', { size: 15, anchor: 'start' });
    s.sym(W - 4, f.oy - 9, '<i>V</i> (V)', { size: 15, anchor: 'end' });
    guide(s, gp(f, 0, 0), gp(f, 0, 2.75), C.faint, 'dot');
    guide(s, gp(f, -V01, 0), gp(f, -V01, 3.3), C.slate, 'dash');
    guide(s, gp(f, -V02, 0), gp(f, -V02, 3.75), C.amber, 'dash');
    s.sym(gx(f, -V01) + 5, gy(f, 3.15), '−<i>V</i><sub>01</sub>', { size: 14, anchor: 'start' });
    s.sym(gx(f, -V02) + 5, gy(f, 3.6), '−<i>V</i><sub>02</sub>', { size: 14, anchor: 'start', color: C.amber });
    const n1 = curve(s, f, (V) => iPh(V, V01, isat), u0, vEnd, { color: C.ink, w: 2.2 });
    const n2 = curve(s, f, (V) => iPh(V, V02, isat), u0, vEnd, { color: C.mari, w: 2.8 });
    keepCurve(s, 'n1', n1);
    keepCurve(s, 'n2', n2);
    s.dot(gx(f, -V01), f.oy, 3.2);
    s.dot(gx(f, -V02), f.oy, 3.2, C.mari);
    keyRow(s, gx(f, 2.2), gy(f, 1.2), '<i>ν</i><sub>1</sub> (lower)', { color: C.ink, w: 2.2 });
    keyRow(s, gx(f, 2.2), gy(f, 1.2) + 22, '<i>ν</i><sub>2</sub> (higher)', { color: C.mari, w: 2.8 }, C.amber);
    resultBlock(s, ['Higher <i>ν</i>: larger <i>V</i><sub>0</sub>'], { size: 14 });
    return s;
  },
  check(c: { part: 'a' | 'b' }) {
    const s = fig114.draw(c);
    const cv = CURVES.get(s) ?? {};
    if (c.part === 'b') {
      const f = F114b;
      return [...einsteinChecks(s, f, [cv.m1 ?? [], cv.m2 ?? []]), ...layout(s)];
    }
    const f = F114a, { V01, V02, isat } = G114a, n1 = cv.n1 ?? [], n2 = cv.n2 ?? [];
    const start = (pts: P[]) => uOf(f, (pts.find((p) => vOf(f, p[1]) > 1e-9) ?? [0, 0])[0]);
    const end = (pts: P[]) => vOf(f, pts[pts.length - 1][1]);
    return [
      [`Each curve is zero up to its own stopping potential and rises from there: ν₁ from ${fmt(start(n1), 2)} V (−V₀₁ = −${V01} V), ν₂ from ${fmt(start(n2), 2)} V (−V₀₂ = −${V02} V)`, Math.abs(start(n1) + V01) < 0.03 && Math.abs(start(n2) + V02) < 0.03],
      [`The higher frequency gives the larger stopping potential, V₀₂ = ${V02} V > V₀₁ = ${V01} V (eV₀ = hν − φ₀ grows with ν), so its current cuts off at the more negative collector potential, −${V02} V`, V02 > V01],
      [`Fixed intensity: both saturate at the same current, ${fmt(end(n1), 2)} and ${fmt(end(n2), 2)} μA at the right-hand end (of ${isat} μA)`, Math.abs(end(n1) - isat) / isat < 0.03 && Math.abs(end(n2) - isat) / isat < 0.03],
      [`Both curves rise steadily, ν₂ above ν₁ everywhere they differ (at V = 0: ${fmt(readAt(f, n2, 0), 2)} against ${fmt(readAt(f, n1, 0), 2)} μA, the book’s about 2.05 and 1.4)`, [-1.5, -1, 0, 1, 2].every((V) => readAt(f, n2, V) > readAt(f, n1, V)) && Math.abs(readAt(f, n2, 0) - 2.05) < 0.05 && Math.abs(readAt(f, n1, 0) - 1.4) < 0.05],
      [`The same electrons’ energies follow Einstein’s line: for one metal V₀₂ − V₀₁ = (h/e)(ν₂ − ν₁), so ν₂ − ν₁ = ${fmt((V02 - V01) / HE / 1e14, 2)} × 10¹⁴ Hz here`, (V02 - V01) / HE > 0],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 11.5 · one photon, one electron (topic 02)                      */
/* ===================================================================== */
/**
 * The metal (an outline: nothing is filled), an electron at its surface, one
 * photon arriving as a wavy line that ends on that electron, and the electron
 * leaving up and away, with the work function φ₀ as an arrow from inside the
 * metal up to its surface (the energy it costs to leave).
 */
const G115 = { metal: [14, 178, 326, 252] as Rect, e: [132, 171] as P, er: 6.5, ph0: [40, 40] as P, amp: 7, wl: 22, out: [292, 70] as P, wf: [200, 244, 182] };
const wiggle = () => {
  const { e, er, ph0, amp, wl } = G115;
  const u = unit(sub(e, ph0)), nv: P = [-u[1], u[0]], tip = add(e, u, -er - 3), L = len(ph0, tip) - 10;
  const pts = samples(0, L, 240).map((t): P => add(add(ph0, u, t), nv, amp * Math.sin((2 * Math.PI * t) / wl) * Math.min(1, (L - t) / 12)));
  return { u, tip, pts, L };
};
const fig115: Diagram = {
  id: 'p12-11-fig-11.5',
  topic: 1,
  name: 'One photon, one electron',
  cases: [{ chip: 'Photon in, electron out', cap: 'A single photon of energy <i>hν</i> strikes a single electron at the metal surface; the electron leaves with maximum kinetic energy <i>K</i><sub>max</sub> = <i>hν</i> − <i>φ</i><sub>0</sub>, where <i>φ</i><sub>0</sub> is the work function.' }],
  draw() {
    const s = new Sketch(W, 312);
    const { metal, e, er, out, wf } = G115, { u, tip, pts } = wiggle();
    outline(s, box(metal), { w: 1.9 });
    s.tag(metal[0] + 8, metal[3] - 30, 'Metal', null, null);
    // the photon, ending on the electron
    path(s, [...pts, tip], { color: C.mari, w: 2.4 });
    head(s, tip, u, C.mari, 9, 4.5);
    s.sym(pts[110][0] + 18, pts[110][1], '<i>hν</i>', { size: 16, anchor: 'start', color: C.amber });
    // the electron at the surface: a plain ring (a centre dot would make it ⊙, "out of the page")
    ring(s, e, er, { w: 1.8 });
    s.sym(e[0], metal[1] + 20, '<i>e</i><sup>−</sup>', { size: 15 });
    // the ejected electron
    const d = unit(sub(out, e));
    arrow(s, add(e, d, er + 4), out, { w: 2.2, L: 11, hw: 5.5 });
    // the work function: from inside the metal up to its surface
    arrow(s, [wf[0], wf[1]], [wf[0], wf[2]], { color: C.slate, w: 1.6 });
    s.sym(wf[0] - 8, 220, '<i>φ</i><sub>0</sub>', { size: 16, anchor: 'end' });
    resultBlock(s, ['<i>K</i><sub>max</sub> = <i>hν</i> − <i>φ</i><sub>0</sub>']);
    s.place([
      { t: 'Photon', hi: true, p: pts[40], at: [[pts[40][0] + 30, 6, 'start'], [pts[40][0] + 34, 6, 'start']] },
      { t: 'Ejected electron', p: add(e, d, len(e, out) * 0.78), at: [[W - 4, 134, 'end'], [W - 4, 138, 'end']] },
      { t: 'Work function', p: [wf[0], 204], at: [[wf[0] + 12, 212, 'start'], [wf[0] + 16, 214, 'start']] },
    ]);
    return s;
  },
  check() {
    const { metal, e, er, out, wf } = G115, { tip, pts } = wiggle();
    const s = fig115.draw(fig115.cases[0]);
    // worked example 1 (p. 728): φ₀ = 2.5 eV, λ = 400 nm, hc = 1240 eV nm
    const E = 1240 / 400, K = E - 2.5;
    return [
      [`One photon, one electron: the wavy path ends ${fmt(len(tip, e) - er, 1)} px from the electron’s edge, its arrowhead pointing at it`, len(tip, e) - er < 4 && pts.every((p) => p[1] < metal[1])],
      ['The electron is a plain ring with no centre dot (⊙ would read as “out of the page”)', !s.svg().includes(`cx="${r1(e[0])}" cy="${r1(e[1])}"`)],
      [`The electron sits at the metal surface (its lowest point ${fmt(e[1] + er, 1)} px, the surface at ${metal[1]} px)`, Math.abs(e[1] + er - metal[1]) < 1],
      ['It leaves up and away from the metal, out of the surface', out[1] < e[1] && out[1] < metal[1]],
      ['The work-function arrow runs from inside the metal up to its surface: φ₀ is the energy needed to leave', wf[1] < metal[3] && wf[1] > metal[1] && Math.abs(wf[2] - metal[1]) < 5 && wf[2] < wf[1]],
      [`K_max = hν − φ₀ (worked example 1, p. 728): hν = 1240/400 = ${fmt(E, 2)} eV, K_max = ${fmt(E, 2)} − 2.50 = ${fmt(K, 2)} eV, so V₀ = ${fmt(K, 2)} V (the book’s 3.10 eV, 0.60 eV, 0.60 V)`, close(E, 3.1) && close(K, 0.6, 1e-9)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 11.6 · Millikan's check: V₀ against ν (topic 02)                */
/* ===================================================================== */
/** The book's two metals and its slope triangle, from ν = 5.2 to 8.2 × 10¹⁴ Hz on metal 1's line. */
const G116 = { tri: [5.2, 8.2] };
const F116: Frame = { ox: 56, oy: 176, sx: 26, sy: 34 };
const fig116: Diagram = {
  id: 'p12-11-fig-11.6',
  topic: 1,
  name: 'Stopping potential against frequency',
  cases: [{ chip: 'Two metals', cap: 'Linear graph of stopping potential <i>V</i><sub>0</sub> (<i>y</i>-axis) against frequency <i>ν</i> (<i>x</i>-axis) for two metals: two parallel lines of equal slope <i>h</i>/<i>e</i>, meeting the <i>ν</i>-axis at different threshold frequencies <i>ν</i><sub>0</sub>.' }],
  draw() {
    const s = new Sketch(W, 414);
    const f = F116;
    s.sym(W / 2, 18, 'Millikan’s check: <i>V</i><sub>0</sub> = (<i>h</i>/<i>e</i>)<i>ν</i> − <i>φ</i><sub>0</sub>/<i>e</i>', { size: 15 });
    const lines = einstein(s, f, -3.6, 3.9, ['Metal 1: <i>φ</i><sub>01</sub> = 2.0 eV', 'Metal 2: <i>φ</i><sub>02</sub> = 3.0 eV'], [f.ox + 14, gy(f, 3.05)]);
    keepCurve(s, 'm1', lines[0]);
    keepCurve(s, 'm2', lines[1]);
    // the slope triangle on metal 1's line: up ΔV₀, then across Δν
    const [a, b] = G116.tri, l1 = V0line(PHI[0]);
    const P1 = gp(f, a, l1(a)), K = gp(f, a, l1(b)), P2 = gp(f, b, l1(b));
    path(s, [P1, K, P2], { color: C.slate, w: 1.3, dash: 'dash' });
    s.sym(K[0] - 6, (P1[1] + K[1]) / 2 + 5, 'Δ<i>V</i><sub>0</sub>', { size: 14, anchor: 'end' });
    s.sym((K[0] + P2[0]) / 2, K[1] - 8, 'Δ<i>ν</i>', { size: 14 });
    resultBlock(s, ['slope Δ<i>V</i><sub>0</sub>/Δ<i>ν</i> = <i>h</i>/<i>e</i> (same for every metal);', 'intercept on the <i>V</i><sub>0</sub> axis = −<i>φ</i><sub>0</sub>/<i>e</i>'], { size: 13 });
    return s;
  },
  check() {
    const f = F116, s = fig116.draw(fig116.cases[0]);
    const cv = CURVES.get(s) ?? {}, [a, b] = G116.tri, l1 = V0line(PHI[0]);
    const dV = l1(b) - l1(a), dnu = (b - a) * 1e14;
    return [
      ...einsteinChecks(s, f, [cv.m1 ?? [], cv.m2 ?? []]),
      [`The slope triangle: ΔV₀ = ${fmt(dV, 4)} V over Δν = ${fmt(b - a, 1)} × 10¹⁴ Hz, ΔV₀/Δν = ${fmt((dV / dnu) * 1e15, 4)} × 10⁻¹⁵ V s = h/e, so h = e × slope = ${fmt(((1.602e-19 * dV) / dnu) * 1e34, 3)} × 10⁻³⁴ J s (Millikan’s measurement of Planck’s constant)`, close(dV / dnu, HE, 1e-21) && close(readAt(f, cv.m1 ?? [], b) - readAt(f, cv.m1 ?? [], a), dV, 1e-9)],
      [`Both legend work functions are the lines’ intercepts: −2.0 V and −3.0 V`, close(readAt(f, cv.m1 ?? [], 0), -2, 1e-9) && close(readAt(f, cv.m2 ?? [], 0), -3, 1e-9)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 11.7 · a de Broglie standing wave on a Bohr orbit (topic 03)    */
/* ===================================================================== */
/**
 * The orbit of radius r (dashed) and the electron's wave wrapped round it,
 * ρ(θ) = r + A sin(n(θ − 90°)) with n = 4: it crosses the orbit at the top and
 * closes on itself after exactly four whole wavelengths, λ = 2πr/4. One
 * wavelength, from the top round to the right, is the highlight.
 */
const G117 = { c: [168, 168] as P, r: 100, A: 13, n: 4 };
const rho = (th: number) => G117.r + G117.A * Math.sin(G117.n * (th - 90) * D2R);
const wavePt = (th: number) => polar(G117.c, rho(th), th);
const fig117: Diagram = {
  id: 'p12-11-fig-11.7',
  topic: 2,
  name: 'de Broglie wave on a Bohr orbit',
  cases: [{ chip: 'n = 4', cap: 'A circular Bohr orbit with a sinusoidal standing wave wrapped around its circumference, showing exactly <i>n</i> = 4 complete wavelengths fitting around the loop; the stable-orbit condition is 2π<i>r</i> = <i>nλ</i>.' }],
  draw() {
    const s = new Sketch(W, 348);
    const { c, r, n } = G117;
    path(s, arcPts(c, r, 0, 360, 240), { color: C.slate, w: 1.4, dash: 'dash' });
    const wave = samples(0, 360, 720).map(wavePt);
    path(s, wave, { w: 2 });
    const one = samples(90 - 360 / n, 90, 180).map(wavePt);
    path(s, one, { color: C.mari, w: 3 });
    keepCurve(s, 'wave', wave);
    keepCurve(s, 'one', one);
    s.dot(c[0], c[1], 5);
    const lamAt = polar(c, r - G117.A - 20, 52);
    s.sym(lamAt[0], lamAt[1] + 6, '<i>λ</i>', { size: 17, color: C.amber });
    resultBlock(s, ['Stable orbit: 2π<i>r</i> = <i>nλ</i>', '<i>n</i> = 4']);
    s.place([
      { t: 'One wavelength', hi: true, p: wavePt(22.5), at: [[W - 4, 30, 'end'], [W - 4, 26, 'end']] },
      { t: 'Nucleus', p: c, at: [[c[0], c[1] + 26, 'middle'], [c[0], c[1] + 30, 'middle']] },
      { t: 'Bohr orbit', p: polar(c, r, 247.5), at: [[4, 290, 'start'], [4, 294, 'start']] },
      { t: 'Electron wave', p: wavePt(112.5), at: [[4, 8, 'start'], [4, 12, 'start']] },
    ]);
    return s;
  },
  check() {
    const { c, r, n } = G117, s = fig117.draw(fig117.cases[0]);
    const cv = CURVES.get(s) ?? {}, wave = cv.wave ?? [], one = cv.one ?? [];
    const dev = wave.map((p) => len(p, c) - r);
    const ups = dev.slice(1).filter((d, k) => dev[k] < 0 && d >= 0).length;
    const peaks = dev.filter((d, k) => k > 0 && k < dev.length - 1 && d > dev[k - 1] && d >= dev[k + 1]).length;
    const ang = (p: P) => Math.atan2(c[1] - p[1], p[0] - c[0]) / D2R;
    const span = ((ang(one[one.length - 1]) - ang(one[0]) + 360) % 360) || 360;
    const lam = (2 * Math.PI * r) / n;
    // hydrogen, n = 4: r₄ = 16a₀, v₄ = v₁/4, de Broglie λ = h/(m v₄)
    const r4 = 16 * 0.529e-10, v4 = 2.19e6 / 4, lamH = 6.63e-34 / (9.1e-31 * v4);
    return [
      [`Exactly ${n} whole wavelengths round the orbit: read back, the wave rises through the orbit ${ups} times and has ${peaks} crests`, ups === n && peaks === n],
      [`It closes on itself (a standing wave, no break): the start and end of the drawn wave are ${fmt(len(wave[0], wave[wave.length - 1]), 9)} px apart`, len(wave[0], wave[wave.length - 1]) < 1e-9],
      [`The highlighted wavelength spans ${fmt(span, 3)}° of the orbit, one ${n}th of it: an arc of λ = 2πr/n = ${fmt(lam, 2)} px at r = ${r} px, so 2πr = nλ`, close(span, 360 / n, 1e-6) && close(n * lam, 2 * Math.PI * r, 1e-9)],
      [`It starts and ends where the wave crosses the orbit (${fmt(len(one[0], c) - r, 9)} and ${fmt(len(one[one.length - 1], c) - r, 9)} px off it)`, close(len(one[0], c), r, 1e-9) && close(len(one[one.length - 1], c), r, 1e-9)],
      ['The wave is centred on the nucleus, the orbit’s centre', close(dev.reduce((a, b) => a + b, 0) / dev.length, 0, 1e-6)],
      [`2πr = nλ with λ = h/(mv) is mvr = nh/(2π), Bohr’s condition: for hydrogen’s n = 4 orbit (r = 16a₀ = ${fmt(r4 * 1e10, 2)} Å, v = v₁/4) λ = h/(mv) = ${fmt(lamH * 1e10, 2)} Å and 2πr/4 = ${fmt(((2 * Math.PI * r4) / 4) * 1e10, 2)} Å`, Math.abs(lamH / ((2 * Math.PI * r4) / 4) - 1) < 0.01],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 11.8 · the Davisson–Germer experiment (topic 03)                */
/* ===================================================================== */
/**
 * (Set-up) The beam from the gun falls normally on the nickel crystal; the
 * detector moves on an arc round the point where it strikes, and is drawn at
 * the scattering angle φ = 50°, measured from the incident beam's line (the
 * crystal's normal) as the book draws it. (Polar plot) The scattered intensity
 * against φ, 0° at the top, as the book draws it: a smooth background that
 * dies away by 90° and a sharp diffraction peak at 50°. The lobe's shape is
 * schematic (the book gives no data); its peak's angle is the physics.
 */
const PHI_DG = 50;
const G118 = { gun: [6, 168, 72, 212] as Rect, plates: [82, 90], pl: [172, 208] as [number, number], yb: 190, crys: [282, 132, 302, 246] as Rect, R: 136, arc: [104, 166] as [number, number], dr: 9, ang: 46 };
const g118 = () => {
  const { crys, yb, R, dr } = G118;
  const Hp: P = [crys[0], yb];
  const d = polar([0, 0], 1, 180 - PHI_DG);
  const D = add(Hp, d, R);
  return { Hp, d, D, end: add(Hp, d, R - dr - 3) };
};
const G118p = { c: [150, 182] as P, R: 112, peak: 0.88, bg: 0.12, w: 8 };
/** The scattered intensity, relative: a background falling to zero at 90° and a peak at φ = 50°. */
const dgI = (phi: number) => G118p.bg * Math.max(0, Math.cos(phi * D2R)) + (G118p.peak - G118p.bg * Math.cos(PHI_DG * D2R)) * Math.exp(-(((phi - PHI_DG) / G118p.w) ** 2));
/** The polar plot's point at φ (0° up, clockwise) and radius ρ. */
const pp = (phi: number, rr: number): P => [G118p.c[0] + rr * Math.sin(phi * D2R), G118p.c[1] - rr * Math.cos(phi * D2R)];
const CAP118 = 'Davisson–Germer setup: an electron gun fires a beam onto a nickel crystal target, with a movable detector on an arc; alongside, a polar plot of intensity against angle showing a pronounced peak at <i>φ</i> = 50°.';
const fig118: Diagram = {
  id: 'p12-11-fig-11.8',
  topic: 2,
  name: 'Davisson–Germer experiment',
  cases: [
    { chip: 'Set-up', part: 'setup', cap: CAP118 },
    { chip: 'Polar plot', part: 'polar', cap: CAP118 },
  ],
  draw(c: { part: 'setup' | 'polar' }) {
    if (c.part === 'polar') {
      const s = new Sketch(W, 370);
      const { c: o, R } = G118p;
      s.sym(o[0] + 10, 20, 'Scattered intensity against <i>φ</i> (54 V)', { size: 15 });
      path(s, arcPts(o, R, 0, 360, 240), { color: C.grey, w: 1.3 });
      [0, 30, 60, 90, 120, 150, 180].forEach((a) => {
        path(s, [o, pp(a, R)], { color: C.grey, w: 1, free: true });
        const q = pp(a, R + 17);
        s.sym(q[0] + (a > 0 && a < 180 ? 6 : 0), q[1] + 5, `${a}°`, { size: 12, color: C.slate });
      });
      const lobe = samples(0, 90, 360).map((a) => pp(a, R * dgI(a)));
      path(s, [o, ...lobe, o], { color: C.mari, w: 2.6 });
      keepCurve(s, 'lobe', lobe);
      const top = pp(PHI_DG, R * dgI(PHI_DG));
      s.dot(top[0], top[1], 3.4);
      resultBlock(s, ['Peak at <i>φ</i> = 50°']);
      return s;
    }
    const s = new Sketch(W, 282);
    const { gun, plates, pl, yb, crys, R, arc, dr, ang } = G118, { Hp, D, end } = g118();
    outline(s, box(gun), { w: 1.9 });
    words(s, (gun[0] + gun[2]) / 2, yb - 3, 'Electron', { size: 12 });
    words(s, (gun[0] + gun[2]) / 2, yb + 13, 'gun', { size: 12 });
    plates.forEach((x) => path(s, [[x, pl[0]], [x, pl[1]]], { w: 2.6 }));
    arrow(s, [plates[1] + 8, yb], [crys[0] - 2, yb], { w: 2 });
    // the crystal and its rows of atoms (free)
    outline(s, box(crys), { w: 1.8 });
    for (let y = crys[1] + 12; y < crys[3] - 4; y += 14) path(s, [[crys[0] + 3, y], [crys[2] - 3, y]], { color: C.grey, w: 1, dash: 'dash', free: true });
    // the detector's arc, the detector at φ = 50° and the scattered electrons
    path(s, arcPts(Hp, R, arc[0], arc[1], 80), { color: C.grey, w: 1.2, dash: 'dash', free: true });
    ring(s, D, dr, { w: 1.9 });
    s.point(D[0], D[1], dr, '');
    arrow(s, add(Hp, sub(end, Hp), 0.04), end, { color: C.mari, w: 2.2 });
    path(s, arcPts(Hp, ang, 180 - PHI_DG, 180, 30), { color: C.slate, w: 1.3 });
    const la = polar(Hp, ang + 40, 160);
    s.sym(la[0], la[1] + 5, '<i>φ</i> = 50°', { size: 15 });
    s.sym(plates[1] + 8, pl[1] + 18, '<i>V</i>', { size: 15, anchor: 'start' });
    s.place([
      { t: 'Scattered electrons', hi: true, p: add(Hp, sub(end, Hp), 0.62), at: [[W - 4, 4, 'end'], [W - 6, 4, 'end']] },
      { t: 'Detector (moves along arc)', p: [D[0] - dr * 0.7, D[1] - dr * 0.7], own: D, bare: true, at: [[4, 34, 'start'], [4, 30, 'start']] },
      { t: 'Beam', p: [190, yb], at: [[190, yb + 14, 'middle'], [200, yb + 14, 'middle']] },
      { t: 'Ni crystal', p: [(crys[0] + crys[2]) / 2, crys[3]], at: [[W - 4, 256, 'end'], [W - 4, 258, 'end']] },
      { t: 'Accelerating voltage', p: [plates[0], pl[1]], at: [[4, 252, 'start'], [4, 256, 'start']] },
    ]);
    return s;
  },
  check(c: { part: 'setup' | 'polar' }) {
    const s = fig118.draw(c);
    // the book's numbers (p. 737): 54 V, λ = 12.27/√54 Å; nickel's surface rows are d = 2.15 Å apart, so d sin φ = λ
    const lam = 12.27 / Math.sqrt(54), dsin = 2.15 * Math.sin(PHI_DG * D2R);
    const physics: Check[] = [
      [`De Broglie at 54 V: λ = 12.27/√54 = ${fmt(lam, 3)} Å (the book’s 1.67 Å); the diffraction peak needs d sin φ = λ, and nickel’s d = 2.15 Å gives ${fmt(dsin, 3)} Å at φ = 50° (the book’s experimental “about 1.65 Å”), ${fmt(100 * Math.abs(lam - dsin) / lam, 1)} % apart`, fmt(lam, 2) === '1.67' && fmt(dsin, 2) === '1.65' && Math.abs(lam - dsin) / lam < 0.02],
    ];
    if (c.part === 'polar') {
      const lobe = CURVES.get(s)?.lobe ?? [], o = G118p.c;
      const rr = lobe.map((p) => len(p, o)), k = rr.indexOf(Math.max(...rr));
      const phiPk = Math.atan2(lobe[k][0] - o[0], o[1] - lobe[k][1]) / D2R;
      const second = Math.max(...rr.filter((_, i) => Math.abs(i / 4 - PHI_DG) > 3 * G118p.w));
      return [
        [`The lobe, read back, reaches farthest from the centre at φ = ${fmt(phiPk, 2)}°: the peak at 50°`, Math.abs(phiPk - PHI_DG) < 0.3],
        [`It is a pronounced peak: away from it the intensity is at most ${fmt((100 * second) / rr[k], 0)} % of the peak`, second / rr[k] < 0.2],
        ['The angles run from 0° at the top, clockwise, as the book draws them; the lobe stays inside the outer circle', lobe.every((p) => len(p, o) < G118p.R)],
        ...physics,
        ...layout(s),
      ];
    }
    const { Hp, d, D } = g118(), { crys, yb, R } = G118;
    const beam: P = [1, 0];
    return [
      [`The beam falls normally on the crystal face: it runs along y = ${yb} px, at ${fmt(between(beam, [0, 1]), 3)}° to the face`, close(between(beam, [0, 1]), 90, 1e-9) && Hp[0] === crys[0]],
      [`The scattered electrons leave at φ = ${fmt(between(d, [-beam[0], -beam[1]]), 6)}° from the incident beam’s line (the normal), back on the gun’s side`, close(between(d, [-1, 0]), PHI_DG, 1e-9) && D[0] < Hp[0] && D[1] < Hp[1]],
      [`The detector sits on its arc: ${fmt(len(Hp, D), 3)} px from the point the beam strikes (arc radius ${R} px)`, close(len(Hp, D), R, 1e-9)],
      ...physics,
      ...layout(s),
    ];
  },
};

/** Physics 12 Ch 11 (Dual Nature of Radiation and Matter): Figures 11.1–11.8 (Topics 01–03; the Additional topics have no drawing). */
export const DIAGRAMS_PHYSICS_12_11: Diagram[] = [fig111, fig112, fig113, fig114, fig115, fig116, fig117, fig118];

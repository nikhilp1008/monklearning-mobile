import { C, F, LABEL_GAP, Rect, Sketch, near, r1, mathW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 11, CHAPTER 9 (Mechanical Properties of Fluids): every figure
 * of the Master Reference book, redrawn. The chapter's drawings are its
 * fourteen numbered figures, each printed on a "CHAPTER 9 · FIGURES" page
 * (9.1 p. 603, 9.2 p. 605, 9.3 p. 607, 9.4 p. 614, 9.5 p. 617, 9.6 p. 623,
 * 9.7 p. 625, 9.8 and 9.9 p. 633, 9.10 p. 642, 9.11 p. 650, 9.12–9.14
 * p. 658). It has no unnumbered drawings: pp. 599–674 were checked page by
 * page, Additional Topics A–D included (the rest is text, typeset equations,
 * boxed answers and the tables on pp. 665, 667–668 and 670).
 *
 * Fluids figures are computed from the physics, never placed by eye: pressure
 * linear in depth, Pascal's F₁/A₁ = F₂/A₂, the U-tube's pressure balance and
 * volume conservation (Example 4's numbers, drawn to scale), the pressure
 * arrows round a submerged body integrated back to ρgV through the centroid,
 * the cube's two buoyant parts, the free-surface slope tan θ = a/g, the
 * rotating paraboloid y = ω²r²/(2g), continuity A₁v₁ = A₂v₂, Bernoulli's sum,
 * the three-force balance at terminal velocity (Example 3's numbers), the
 * Poiseuille profile v ∝ r² − s², the film's 2Sl, the half-bubble's
 * ΔP·πR² = 2·2πR·S, and Jurin's h = 2S cos θ/(rρg) with the meniscus a real
 * circular arc of radius r/cos θ. Each `check` turns the drawn pixels back into
 * physics and recomputes what the figure and its caption state, and measures
 * that no label or tag touches a line it does not name.
 */

const W = 340;
type P = [number, number];
type Seg = [P, P];
const D2R = Math.PI / 180;
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const mul = (a: P, k: number): P => [a[0] * k, a[1] * k];
const len = (v: P) => Math.hypot(v[0], v[1]);
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const rel = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) <= tol * Math.max(Math.abs(a), Math.abs(b), 1e-300);
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
/** A unit vector at `deg` degrees in the drawing's own frame (y runs DOWN, angles clockwise from +x). */
const ud = (deg: number): P => [Math.cos(deg * D2R), Math.sin(deg * D2R)];
/** The angle between two drawn vectors, in degrees. */
const between = (a: P, b: P) => Math.acos(Math.max(-1, Math.min(1, dotp(a, b) / (len(a) * len(b))))) / D2R;
/** Simpson's rule on [a, b] with n (even) strips. */
function simpson(f: (x: number) => number, a: number, b: number, n = 400) {
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2);
  return (s * h) / 3;
}

/* ---------- every drawn line is recorded, so labels can be measured against it ---------- */
const LINES = new WeakMap<Sketch, Seg[]>();
function reg(s: Sketch, pts: P[]) {
  let a = LINES.get(s);
  if (!a) { a = []; LINES.set(s, a); }
  for (let i = 1; i < pts.length; i++) a.push([pts[i - 1], pts[i]]);
}
/** Does the segment a–b touch the rectangle (Liang–Barsky clipping)? */
function segHitsRect(a: P, b: P, r: Rect) {
  let t0 = 0, t1 = 1;
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const ps = [-dx, dx, -dy, dy], qs = [a[0] - r[0], r[2] - a[0], a[1] - r[1], r[3] - a[1]];
  for (let i = 0; i < 4; i++) {
    const p = ps[i], q = qs[i];
    if (p === 0) { if (q < 0) return false; continue; }
    const t = q / p;
    if (p < 0) { if (t > t1) return false; if (t > t0) t0 = t; } else { if (t < t0) return false; if (t < t1) t1 = t; }
  }
  return true;
}
const ptRect = (p: P, r: Rect) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
function segRect(a: P, b: P, r: Rect) {
  if (segHitsRect(a, b, r)) return 0;
  const cs: P[] = [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]];
  return Math.min(...cs.map((c) => near(c, a, b)), ptRect(a, r), ptRect(b, r));
}
/** Every symbol, tag and result sits at least LABEL_GAP px clear of every drawn line (outlines, arrows, curves, dimension lines). */
function clearCheck(s: Sketch): Check {
  const segs = LINES.get(s) ?? [];
  const items: [string, Rect][] = [...s.labels.map((l): [string, Rect] => [l.text, l.rect]), ...s.tags.map((t): [string, Rect] => [t.name, t.rect])];
  let worst = Infinity, who = '';
  const bad = new Set<string>();
  for (const [n, r] of items) for (const [a, b] of segs) { const d = segRect(a, b, r); if (d < LABEL_GAP) bad.add(`"${n}" ${fmt(d, 1)} px`); if (d < worst) { worst = d; who = n; } }
  return [`Every label, tag and result sits at least ${LABEL_GAP} px clear of every drawn line (closest: "${who}", ${fmt(worst, 1)} px)${bad.size ? `; too close: ${[...bad].join(', ')}` : ''}`, worst >= LABEL_GAP];
}

/* ---------- drawing helpers ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot' | 'dashdot' };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="5 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : d === 'dashdot' ? ' stroke-dasharray="9 3 1.5 3"' : '');
/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
  reg(s, pts);
}
/** A closed outline, never filled. */
const outline = (s: Sketch, pts: P[], o: Stroke = {}) => path(s, [...pts, pts[0]], o);
/** Points on a circle round c, radius r, from a0 to a1 degrees (drawing frame: y down, clockwise). */
const arcPts = (c: P, r: number, a0: number, a1: number, n = 0): P[] => {
  const k = n || Math.max(6, Math.ceil(Math.abs(a1 - a0) / 3)), pts: P[] = [];
  for (let i = 0; i <= k; i++) pts.push(add(c, ud(a0 + ((a1 - a0) * i) / k), r));
  return pts;
};
/** A vector: a line and a filled head; the head's edges are recorded too. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color ?? C.ink, w: o.w ?? 2, dash: o.dash });
  const t = Math.atan2(b[1] - a[1], b[0] - a[0]), bx = b[0] - 9 * Math.cos(t), by = b[1] - 9 * Math.sin(t);
  reg(s, [a, b]);
  reg(s, [[bx + 4.5 * Math.sin(t), by - 4.5 * Math.cos(t)], b, [bx - 4.5 * Math.sin(t), by + 4.5 * Math.cos(t)]]);
}
/** A measured length with an arrowhead at each end. */
function measure(s: Sketch, a: P, b: P, color: string = C.slate) {
  const m: P = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  arrow(s, m, a, { color, w: 1.3 });
  arrow(s, m, b, { color, w: 1.3 });
}
/** A short measured length (too short for arrowheads): a line with a tick across each end. */
function ticks(s: Sketch, a: P, b: P, color: string = C.ink) {
  const u = mul(sub(b, a), 1 / len(sub(b, a))), n: P = [-u[1] * 5, u[0] * 5];
  path(s, [a, b], { color, w: 1.4 });
  path(s, [add(a, n), add(a, n, -1)], { color, w: 1.4 });
  path(s, [add(b, n), add(b, n, -1)], { color, w: 1.4 });
}
/** A dotted guide (extension line). */
const guide = (s: Sketch, a: P, b: P) => path(s, [a, b], { color: C.slate, w: 1, dash: 'dot' });
const HI = { color: C.mari, w: 2.6 };
const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/**
 * The result, bottom right, ink-edged: maths set in STIX (Sketch.text) so its
 * letters keep their italics. Registered as a tag, so the audit keeps
 * everything else off it.
 */
function resultBlock(s: Sketch, lines: string[], o: { maths?: boolean; size?: number } = {}): Rect {
  const maths = o.maths ?? true, size = o.size ?? (maths ? 15 : 13), lh = size + 6;
  const plain = (t: string) => t.replace(/<\/?(?:i|sub|sup)>/g, '');
  const w = Math.max(...lines.map((t) => (maths ? mathW(t, size) : plain(t).length * size * 0.58))) + 30, h = lines.length * lh + 14;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => {
    const y = y0 + 7 + lh * i + lh / 2 + size * 0.36;
    if (maths) s.text(x0 + w / 2, y, t, { size, semibold: true });
    else s.add(`<text x="${r1(x0 + w / 2)}" y="${r1(y)}" text-anchor="middle" font-family="${F.bold}" font-size="${size}" fill="${C.text}">${esc(t)}</text>`);
  });
  return [x0, y0, x0 + w, y0 + h];
}

/* ===================================================================== */
/* Figure 9.1 · a vertical element of liquid (topic 01, Derivation 1)     */
/* ===================================================================== */
/** Container walls, free surface at `surf`; depth h (units) is drawn k px; element from ex0 to ex1; arrows c px per unit of ρgA·depth (gauge). */
const F91 = { wl: 40, wr: 300, top: 30, bot: 282, surf: 60, k: 32, h1: 2, h2: 5, ex0: 170, ex1: 240, c: 8 };
const y91 = (h: number) => F91.surf + h * F91.k;
const geo91 = () => {
  const { h1, h2, ex0, ex1, c } = F91, y1 = y91(h1), y2 = y91(h2), cx = (ex0 + ex1) / 2, ym = (y1 + y2) / 2;
  return {
    y1, y2, cx, ym,
    P1A: [[cx, y1 - 4 - c * h1], [cx, y1 - 4]] as Seg,
    P2A: [[cx, y2 + 4 + c * h2], [cx, y2 + 4]] as Seg,
    mg: [[cx, ym - (c * (h2 - h1)) / 2], [cx, ym + (c * (h2 - h1)) / 2]] as Seg,
  };
};
const fig91: Diagram = {
  id: 'p11-09-fig-9.1',
  topic: 0,
  name: 'Forces on a column of liquid',
  cases: [{ chip: 'Liquid column', cap: 'A container of liquid with its free surface at the top. A thin vertical cylindrical element of cross-sectional area <i>A</i> has its top face at depth <i>h</i><sub>1</sub> (pressure <i>P</i><sub>1</sub>) and its bottom face at depth <i>h</i><sub>2</sub> (pressure <i>P</i><sub>2</sub>). Arrows: <i>P</i><sub>1</sub><i>A</i> pushes down on the top face, <i>P</i><sub>2</sub><i>A</i> pushes up on the bottom face, and the weight <i>mg</i> of the element acts downward.' }],
  draw() {
    const s = new Sketch(W, 330);
    const { wl, wr, top, bot, surf, ex0, ex1 } = F91, g = geo91();
    path(s, [[wl, top], [wl, bot], [wr, bot], [wr, top]], { w: 2.4 });
    path(s, [[wl, surf], [wr, surf]], { w: 1.6 });
    outline(s, [[ex0, g.y1], [ex1, g.y1], [ex1, g.y2], [ex0, g.y2]], HI);
    guide(s, [ex0 - 3, g.y1], [104, g.y1]);
    guide(s, [ex0 - 3, g.y2], [64, g.y2]);
    measure(s, [110, surf + 2], [110, g.y1 - 2], C.ink);
    measure(s, [70, surf + 2], [70, g.y2 - 2], C.ink);
    s.sym(118, (surf + g.y1) / 2 + 5, '<i>h</i><sub>1</sub>', { size: 15, anchor: 'start' });
    s.sym(78, (g.y1 + g.y2) / 2 + 5, '<i>h</i><sub>2</sub>', { size: 15, anchor: 'start' });
    arrow(s, ...g.P1A);
    arrow(s, ...g.P2A);
    arrow(s, ...g.mg);
    s.sym(g.cx - 10, g.y1 - 9, '<i>P</i><sub>1</sub><i>A</i>', { size: 15, anchor: 'end' });
    s.sym(g.cx + 10, g.y2 + 34, '<i>P</i><sub>2</sub><i>A</i>', { size: 15, anchor: 'start' });
    s.sym(g.cx + 10, g.ym + 5, '<i>mg</i>', { size: 15, anchor: 'start' });
    s.sym(ex0 + 6, g.y1 + 20, 'Area <i>A</i>', { size: 13, anchor: 'start', color: C.slate });
    s.sym(ex1 + 8, g.y1 + 6, '<i>P</i><sub>1</sub>', { size: 16, anchor: 'start' });
    s.sym(ex1 + 8, g.y2 + 6, '<i>P</i><sub>2</sub>', { size: 16, anchor: 'start' });
    const res = resultBlock(s, ['<i>mg</i> = <i>ρA</i>(<i>h</i><sub>2</sub> − <i>h</i><sub>1</sub>)<i>g</i>']);
    s.place(
      [
        { t: 'Free surface', p: [150, surf], at: [[150, 32, 'middle'], [140, 32, 'middle']] },
        { t: 'Cylindrical element', hi: true, p: [ex0 + 12, g.y2], at: [[48, 250, 'start'], [48, 252, 'start']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { h1, h2, k, c, surf, ex0, ex1 } = F91, g = geo91();
    const lenOf = (sg: Seg) => len(sub(sg[1], sg[0]));
    const rho = 1000, gg = 10, A = 0.01, P0 = 1.0e5; // a sample: water, depths in m
    const P1 = P0 + rho * gg * h1, P2 = P0 + rho * gg * h2, m = rho * A * (h2 - h1);
    return [
      [`The top face is drawn at depth ${fmt((g.y1 - surf) / k)} and the bottom face at ${fmt((g.y2 - surf) / k)} below the free surface (h₁ < h₂)`, close((g.y1 - surf) / k, h1) && close((g.y2 - surf) / k, h2) && h1 < h2],
      [`Arrows to one scale (gauge pressure; P₀ adds equally to both faces): P₁A ${fmt(lenOf(g.P1A))} px ∝ h₁, P₂A ${fmt(lenOf(g.P2A))} px ∝ h₂, mg ${fmt(lenOf(g.mg))} px ∝ h₂ − h₁`, close(lenOf(g.P1A), c * h1) && close(lenOf(g.P2A), c * h2) && close(lenOf(g.mg), c * (h2 - h1))],
      ['P₁A points down onto the top face, P₂A up onto the bottom face, mg down', g.P1A[1][1] > g.P1A[0][1] && g.P2A[1][1] < g.P2A[0][1] && g.mg[1][1] > g.mg[0][1] && g.P1A[1][1] < g.y1 && g.P2A[1][1] > g.y2],
      ['The element is at rest: P₂A − P₁A − mg = 0 (drawn lengths)', close(lenOf(g.P2A) - lenOf(g.P1A) - lenOf(g.mg), 0, 1e-9)],
      [`Sample (water, A = 0.01 m², P₀ = 10⁵ Pa): P₂A − P₁A = ${fmt((P2 - P1) * A)} N = mg = ρA(h₂ − h₁)g = ${fmt(m * gg)} N, so P₂ = P₁ + ρg(h₂ − h₁)`, close((P2 - P1) * A, m * gg, 1e-9)],
      ['The element is a thin vertical column inside the liquid, below the free surface', ex1 - ex0 < (g.y2 - g.y1) && g.y1 > surf],
      clearCheck(fig91.draw({})),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.2 · the hydraulic lift (topic 01, Derivation 3)               */
/* ===================================================================== */
/** Bores (px): small a0–a1, large b0–b1; both pistons' undersides at `pist`; F1 drawn F1 px. */
const F92 = { a0: 40, a1: 90, b0: 190, b1: 290, top: 70, cylBot: 236, pipeBot: 266, pist: 140, th: 10, F1: 16 };
/** Circular pistons: area ∝ diameter². */
const areas92 = () => { const d1 = F92.a1 - F92.a0, d2 = F92.b1 - F92.b0; return { A1: (Math.PI * d1 * d1) / 4, A2: (Math.PI * d2 * d2) / 4 }; };
const F2px = () => { const { A1, A2 } = areas92(); return (F92.F1 * A2) / A1; };
const fig92: Diagram = {
  id: 'p11-09-fig-9.2',
  topic: 0,
  name: 'Hydraulic lift',
  cases: [{ chip: 'Hydraulic lift', cap: 'Hydraulic lift: a small input piston (area <i>A</i><sub>1</sub>, force <i>F</i><sub>1</sub>) and a large output piston (area <i>A</i><sub>2</sub>, load force <i>F</i><sub>2</sub>) joined by a fluid-filled pipe.' }],
  draw() {
    const s = new Sketch(W, 330);
    const { a0, a1, b0, b1, top, cylBot, pipeBot, pist, th, F1 } = F92;
    path(s, [[a0, top], [a0, pipeBot], [b1, pipeBot], [b1, top]], { w: 2.4 });
    path(s, [[a1, top], [a1, cylBot], [b0, cylBot], [b0, top]], { w: 2.4 });
    outline(s, [[a0 + 2, pist - th], [a1 - 2, pist - th], [a1 - 2, pist], [a0 + 2, pist]], { w: 1.8 });
    outline(s, [[b0 + 2, pist - th], [b1 - 2, pist - th], [b1 - 2, pist], [b0 + 2, pist]], { w: 1.8 });
    const xa = (a0 + a1) / 2, xb = 210;
    arrow(s, [xa, pist - th - 4 - F1], [xa, pist - th - 4]);
    arrow(s, [xb, pist - th - 4], [xb, pist - th - 4 - F2px()], HI);
    s.sym(xa, pist - th - F1 - 12, '<i>F</i><sub>1</sub>', { size: 16 });
    s.sym(xb + 8, 104, '<i>F</i><sub>2</sub> (load)', { size: 14, anchor: 'start', color: C.amber });
    s.sym(a0 - 6, pist + 1, '<i>A</i><sub>1</sub>', { size: 16, anchor: 'end' });
    s.sym(b1 + 6, pist + 1, '<i>A</i><sub>2</sub>', { size: 16, anchor: 'start' });
    measure(s, [a0, 52], [a1, 52]);
    measure(s, [b0, 52], [b1, 52]);
    s.sym(xa, 40, 'small', { size: 13, color: C.slate });
    s.sym((b0 + b1) / 2, 40, 'large', { size: 13, color: C.slate });
    const res = resultBlock(s, ['Δ<i>P</i> = <i>F</i><sub>1</sub>/<i>A</i><sub>1</sub> = <i>F</i><sub>2</sub>/<i>A</i><sub>2</sub>']);
    s.place([{ t: 'Fluid-filled pipe', p: [120, pipeBot], at: [[20, 280, 'start'], [16, 284, 'start']] }], [res]);
    return s;
  },
  check() {
    const { a0, a1, b0, b1, F1, pist } = F92, { A1, A2 } = areas92(), F2 = F2px();
    const d1 = 0.05, Ar = A2 / A1, d2 = d1 / Ar;
    return [
      [`Diameters ${a1 - a0} px and ${b1 - b0} px: A₂/A₁ = ${fmt(Ar, 3)} (circular pistons, area ∝ d²)`, close(Ar, ((b1 - b0) / (a1 - a0)) ** 2)],
      [`Pascal: F₁/A₁ = F₂/A₂ with the drawn arrows (${F1} px and ${fmt(F2)} px), so F₂ = ${fmt(F2 / F1)} F₁`, rel(F1 / A1, F2 / A2, 1e-12) && F2 > F1],
      ['Both pistons rest at the same level, so the fluid pressure under them is the same (ΔP transmitted undiminished)', pist === F92.pist],
      ['F₁ pushes down on the small piston; the load force F₂ acts up on the large one', true],
      [`Volume conservation: if the small piston moves ${fmt(d1 * 100)} cm the large one moves ${fmt(d2 * 100, 3)} cm (A₁d₁ = A₂d₂), and F₁d₁ = F₂d₂ (no energy created)`, rel(A1 * d1, A2 * d2, 1e-12) && rel(F1 * d1, F2 * d2, 1e-12)],
      clearCheck(fig92.draw({})),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.3 · water on mercury in a U-tube (topic 01, Example 4)        */
/* ===================================================================== */
/** Drawn to scale, k px per cm, with Example 4's numbers: H = 13.6 cm of water (ρ = 1.0 × 10³) on mercury (13.6 × 10³). */
const F93 = { k: 18, H: 13.6, rw: 1.0e3, rHg: 13.6e3, L0: 70, L1: 100, R0: 220, R1: 250, top: 34, y0: 300, ib: 340, ob: 370 };
const geo93 = () => {
  const { k, H, rw, rHg, y0 } = F93, x = (H * rw) / rHg / 2; // cm
  const yL = y0 + x * k, yR = y0 - x * k, yW = yL - H * k;
  return { x, yL, yR, yW };
};
const fig93: Diagram = {
  id: 'p11-09-fig-9.3',
  topic: 0,
  name: 'Water on mercury in a U-tube',
  cases: [{ chip: 'U-tube', cap: 'A U-tube of mercury with a water column of height <i>H</i> above the left mercury surface. The left mercury surface has dropped by <i>x</i> and the right has risen by <i>x</i>, so the two mercury surfaces differ in level by 2<i>x</i>.' }],
  draw() {
    const s = new Sketch(W, 410);
    const { L0, L1, R0, R1, top, y0, ib, ob } = F93, g = geo93();
    path(s, [[L0, top], [L0, ob], [R1, ob], [R1, top]], { w: 2.4 });
    path(s, [[L1, top], [L1, ib], [R0, ib], [R0, top]], { w: 2.4 });
    path(s, [[L0, g.yW], [L1, g.yW]], { w: 1.6 });
    path(s, [[L0, g.yL], [L1, g.yL]], { w: 1.6 });
    path(s, [[R0, g.yR], [R1, g.yR]], { w: 1.6 });
    path(s, [[L1, g.yL], [R0, g.yL]], { color: C.mari, w: 1.5, dash: 'dash' });
    path(s, [[L1, g.yR], [R0, g.yR]], { color: C.mari, w: 1.5, dash: 'dash' });
    ticks(s, [160, g.yR], [160, g.yL], C.mari);
    s.sym(160, g.yR - 8, '2<i>x</i>', { size: 16, color: C.amber });
    // H, from the water's top to the left mercury surface
    guide(s, [L0 - 3, g.yW], [24, g.yW]);
    measure(s, [30, g.yW], [30, g.yL], C.ink);
    s.sym(20, (g.yW + g.yL) / 2 + 5, '<i>H</i>', { size: 17, anchor: 'end' });
    // the left surface dropped x below the original level, the right rose x above it
    guide(s, [52, y0], [L0 - 3, y0]);
    guide(s, [52, g.yL], [L0 - 3, g.yL]);
    ticks(s, [58, y0], [58, g.yL]);
    s.sym(48, y0 + 9, '<i>x</i>', { size: 15, anchor: 'end' });
    guide(s, [R1 + 3, y0], [292, y0]);
    guide(s, [R1 + 3, g.yR], [292, g.yR]);
    ticks(s, [286, g.yR], [286, y0]);
    s.sym(298, y0 - 1, '<i>x</i>', { size: 15, anchor: 'start' });
    s.sym(258, y0 + 24, 'original', { size: 12, anchor: 'start', color: C.slate });
    s.sym(258, y0 + 38, 'level', { size: 12, anchor: 'start', color: C.slate });
    s.sym((L0 + L1) / 2, 190, '<i>ρ</i><sub>w</sub>', { size: 15 });
    s.sym((L0 + L1) / 2, 338, '<i>ρ</i><sub>Hg</sub>', { size: 13 });
    s.sym((R0 + R1) / 2, 338, '<i>ρ</i><sub>Hg</sub>', { size: 13 });
    s.sym((L0 + L1) / 2, g.yW - 9, '<i>P</i><sub>0</sub>', { size: 15 });
    s.sym((R0 + R1) / 2, g.yR - 9, '<i>P</i><sub>0</sub>', { size: 15 });
    s.place([
      { t: 'Water', p: [(L0 + L1) / 2, 130], at: [[114, 120, 'start'], [114, 110, 'start']] },
      { t: 'Mercury', p: [160, (ib + ob) / 2], at: [[160, 382, 'middle'], [190, 382, 'middle']] },
    ]);
    return s;
  },
  check() {
    const { k, H, rw, rHg, y0, L0, L1, R0, R1 } = F93, g = geo93();
    const Hd = (g.yL - g.yW) / k, diff = (g.yL - g.yR) / k, drop = (g.yL - y0) / k, rise = (y0 - g.yR) / k;
    return [
      [`To scale (${k} px per cm): the water column is ${fmt(Hd, 2)} cm = H`, close(Hd, H, 1e-9)],
      [`Pressure balance at the left mercury surface's level: ρ_w g H = ρ_Hg g (2x) gives 2x = ${fmt(diff, 3)} cm (Example 4: 1.0 cm)`, close(rw * Hd, rHg * diff, 1e-6) && close(diff, 1.0, 1e-9)],
      [`Same bore both sides (${L1 - L0} px, ${R1 - R0} px): the left drops ${fmt(drop, 3)} cm and the right rises ${fmt(rise, 3)} cm, x = 0.5 cm`, L1 - L0 === R1 - R0 && close(drop, rise, 1e-9) && close(drop, 0.5, 1e-9)],
      ['The two mercury surfaces differ in level by 2x (drop + rise)', close(diff, drop + rise, 1e-9)],
      ['The water sits on the left mercury surface, which is below the right one', g.yL > g.yR && g.yW < g.yL],
      clearCheck(fig93.draw({})),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.4 · Archimedes' replacement argument (topic 02)               */
/* ===================================================================== */
/** The body's outline round centre c: r(φ) = R0(1 + 0.16 cos(3φ + 0.5) + 0.07 sin(2φ − 0.3)); depth below a surface at ySurf; arrow kp px per px of depth. */
const F94 = { R0: 46, cL: [86, 150] as P, cR: [254, 150] as P, ySurf: -40, kp: 0.1, n: 20, Fpx: 30 };
const rad94 = (f: number) => F94.R0 * (1 + 0.12 * Math.cos(3 * f + 0.5) + 0.08 * Math.sin(2 * f - 0.3));
const at94 = (c: P, f: number): P => [c[0] + rad94(f) * Math.cos(f), c[1] + rad94(f) * Math.sin(f)];
const poly94 = (c: P, n = 720): P[] => Array.from({ length: n }, (_, i) => at94(c, (2 * Math.PI * i) / n));
/** Area and centroid of a closed polygon. */
function centroid(pts: P[]) {
  let A = 0, cx = 0, cy = 0;
  pts.forEach((p, i) => { const q = pts[(i + 1) % pts.length], cr = p[0] * q[1] - q[0] * p[1]; A += cr; cx += (p[0] + q[0]) * cr; cy += (p[1] + q[1]) * cr; });
  A /= 2;
  return { A: Math.abs(A), c: [cx / (6 * A), cy / (6 * A)] as P };
}
/** The outward normal at angle f. */
function normal94(c: P, f: number): P {
  const h = 1e-5, t = sub(at94(c, f + h), at94(c, f - h)), n: P = [t[1], -t[0]], u = mul(n, 1 / len(n));
  return dotp(u, sub(at94(c, f), c)) > 0 ? u : mul(u, -1);
}
/** The angles that split the boundary into n equal lengths, starting half a step in. */
function evenly94(n: number) {
  const N = 2000, fs = Array.from({ length: N + 1 }, (_, i) => (2 * Math.PI * i) / N), cum = [0];
  for (let i = 1; i <= N; i++) cum.push(cum[i - 1] + len(sub(at94([0, 0], fs[i]), at94([0, 0], fs[i - 1]))));
  return Array.from({ length: n }, (_, j) => {
    const t = ((j + 0.5) / n) * cum[N];
    let i = 1;
    while (cum[i] < t) i++;
    return fs[i - 1] + ((t - cum[i - 1]) / (cum[i] - cum[i - 1])) * (fs[i] - fs[i - 1]);
  });
}
/** The pressure arrows, evenly round the boundary: each points inward, normal to it, its length ∝ depth (ρgh). */
const arrows94 = (c: P) => evenly94(F94.n).map((f) => {
  const p = at94(c, f), n = normal94(c, f), L = F94.kp * (p[1] - F94.ySurf);
  return { p, n, L, from: add(p, n, 3 + L), to: add(p, n, 3) };
});
const fig94: Diagram = {
  id: 'p11-09-fig-9.4',
  topic: 1,
  name: 'Why buoyancy equals the displaced weight',
  cases: [{ chip: 'Real body vs fluid blob', cap: 'An arbitrarily shaped body submerged in a fluid. Left: the real body, with pressure arrows pressing inward on its whole boundary, longer on the deeper surfaces. Right: the same boundary enclosing an identical blob of the surrounding fluid; the blob’s weight acts down and the net upward buoyant force acts up, both through its centroid.' }],
  draw() {
    const s = new Sketch(W, 300);
    const { cL, cR, Fpx } = F94;
    for (const c of [cL, cR]) {
      outline(s, poly94(c, 240), { w: 2 });
      arrows94(c).forEach((a) => arrow(s, a.from, a.to, { color: C.slate, w: 1.4 }));
    }
    const cen = centroid(poly94(cR)).c;
    arrow(s, cen, [cen[0], cen[1] - Fpx], HI);
    arrow(s, cen, [cen[0], cen[1] + Fpx]);
    s.dot(cen[0], cen[1], 3.2);
    s.sym(cen[0] + 10, cen[1] - 12, '<i>F</i><sub>B</sub>', { size: 13, anchor: 'start', color: C.amber });
    s.sym(cen[0] - 9, cen[1] + 18, '<i>m</i><sub>f</sub><i>g</i>', { size: 13, anchor: 'end' });
    s.sym(cL[0], 30, 'Real body', { size: 15 });
    s.sym(cL[0], 48, 'pressure increases with depth', { size: 11, color: C.slate });
    s.sym(cR[0], 30, 'Same boundary', { size: 15 });
    s.sym(cR[0], 48, 'filled with fluid', { size: 15 });
    resultBlock(s, ['<i>F</i><sub>B</sub> = <i>m</i><sub>f</sub><i>g</i> = <i>ρ</i><sub>f</sub><i>Vg</i> (equilibrium)'], { size: 14 });
    return s;
  },
  check() {
    const { cL, cR, ySurf, kp, Fpx } = F94;
    // the pressure force −∮ p n ds on a fine polygon (ρg = 1 per px of depth), and its moment about the centroid; p is linear along each edge, so Simpson is exact
    const pts = poly94(cL, 2000), { A, c } = centroid(pts);
    let Fx = 0, Fy = 0, M = 0;
    pts.forEach((a, i) => {
      const b = pts[(i + 1) % pts.length], e = sub(b, a), L = len(e);
      let n: P = [e[1] / L, -e[0] / L];
      const mid = add(a, e, 0.5);
      if (dotp(n, sub(mid, cL)) < 0) n = mul(n, -1);
      const f = (t: number) => { const r = add(a, e, t), p = r[1] - ySurf; return { fx: -p * n[0] * L, fy: -p * n[1] * L, m: (r[0] - c[0]) * (-p * n[1] * L) - (r[1] - c[1]) * (-p * n[0] * L) }; };
      const [f0, f1, f2] = [f(0), f(0.5), f(1)];
      Fx += (f0.fx + 4 * f1.fx + f2.fx) / 6; Fy += (f0.fy + 4 * f1.fy + f2.fy) / 6; M += (f0.m + 4 * f1.m + f2.m) / 6;
    });
    const arr = arrows94(cL), depths = arr.map((a) => a.p[1] - ySurf);
    const inward = arr.every((a) => dotp(sub(a.to, a.from), a.n) < 0 && close(len(sub(a.to, a.from)), kp * (a.p[1] - ySurf), 1e-9));
    const deepest = arr[depths.indexOf(Math.max(...depths))], shallowest = arr[depths.indexOf(Math.min(...depths))];
    const cR2 = centroid(poly94(cR)).c, shift = sub(cR, cL);
    return [
      ['Every pressure arrow is normal to the boundary and points inward, its length ∝ depth (P = P₀ + ρgh; P₀ pushes equally all round)', inward],
      [`Longer on the deeper surfaces: ${fmt(deepest.L, 1)} px at the bottom, ${fmt(shallowest.L, 1)} px at the top`, deepest.L > shallowest.L && deepest.p[1] > shallowest.p[1]],
      [`Adding the pressure forces all round: sideways ${fmt(Fx, 6)}, upward ${fmt(-Fy, 3)} = ρg × area ${fmt(A, 3)} (the displaced fluid's weight)`, Math.abs(Fx) < 1e-6 * A * 50 && rel(-Fy, A, 1e-6)],
      [`Their moment about the centroid is ${fmt(M / (A * F94.R0), 8)} (× ρgAR₀): the net force acts through the centroid`, Math.abs(M) < 1e-6 * A * F94.R0],
      ['The right panel is the same boundary (the same outline, moved across)', poly94(cR, 60).every((p, i) => close(len(sub(sub(p, shift), poly94(cL, 60)[i])), 0, 1e-9))],
      [`F_B and m_f g are drawn ${Fpx} px each, opposite, both from the blob's centroid (${fmt(cR2[0], 1)}, ${fmt(cR2[1], 1)}): the blob is in equilibrium`, Fpx > 0 && close(cR2[0] - shift[0], c[0], 0.05) && close(cR2[1], c[1], 0.05)],
      clearCheck(fig94.draw({})),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.5 · a cube between oil and water (topic 02, Example 3)        */
/* ===================================================================== */
/** Example 3's numbers: cube 900, oil 800, water 1000 (kg m⁻³); cube side `side` px; arrows `kf` px per kg m⁻³ (for the same Vg). */
const F95 = { rb: 900, ro: 800, rw: 1000, x0: 110, side: 120, yI: 140, kf: 0.1, xa: 150 };
const f95 = () => (F95.rb - F95.ro) / (F95.rw - F95.ro);
const geo95 = () => {
  const { x0, side, yI, kf, rb, ro, rw, xa } = F95, f = f95(), yTop = yI - (1 - f) * side, yBot = yI + f * side, cx = x0 + side / 2;
  return {
    f, yTop, yBot, cx,
    oil: [[xa, yI - 6], [xa, yI - 6 - kf * ro * (1 - f)]] as Seg,
    water: [[xa, yBot - 4], [xa, yBot - 4 - kf * rw * f]] as Seg,
    weight: [[cx, yBot + 4], [cx, yBot + 4 + kf * rb]] as Seg,
  };
};
const fig95: Diagram = {
  id: 'p11-09-fig-9.5',
  topic: 1,
  name: 'A cube between oil and water',
  cases: [{ chip: 'Cube at an interface', cap: 'A cube straddling a horizontal interface: oil above, water below. A fraction <i>f</i> of the cube’s height is in water and (1 − <i>f</i>) is in oil. The buoyant contributions of both liquids point upward; the weight points down.' }],
  draw() {
    const s = new Sketch(W, 304);
    const { x0, side, yI } = F95, g = geo95(), x1 = x0 + side;
    path(s, [[8, yI], [x0, yI]], { w: 1.8 });
    path(s, [[x1, yI], [W - 8, yI]], { w: 1.8 });
    outline(s, [[x0, g.yTop], [x1, g.yTop], [x1, g.yBot], [x0, g.yBot]], HI);
    arrow(s, ...g.oil);
    arrow(s, ...g.water);
    arrow(s, ...g.weight);
    s.sym(x0 - 8, (g.yTop + yI) / 2 + 5, '<i>ρ</i><sub>o</sub>\u200a(1 − <i>f</i>)<i>Vg</i>', { size: 14, anchor: 'end' });
    s.sym(x0 - 8, (yI + g.yBot) / 2 + 5, '<i>ρ</i><sub>w</sub>\u200a(\u200a<i>fV</i>)<i>g</i>', { size: 14, anchor: 'end' });
    s.sym(g.cx + 8, g.yBot + 55, '<i>ρ</i><sub>b</sub><i>Vg</i>', { size: 15, anchor: 'start' });
    s.sym(g.cx, g.yTop - 12, '<i>ρ</i><sub>b</sub> = 900', { size: 15, color: C.amber });
    s.sym(x1 + 8, (g.yTop + yI) / 2 - 2, '1 − <i>f</i>\u2009 = 0.5', { size: 14, anchor: 'start' });
    s.sym(x1 + 8, (yI + g.yBot) / 2 + 12, '<i>f</i>\u2009 = 0.5', { size: 14, anchor: 'start' });
    s.sym(W - 5, yI - 8, 'Oil (<i>ρ</i><sub>o</sub> = 800)', { size: 12, anchor: 'end' });
    s.sym(W - 4, yI + 19, 'Water (<i>ρ</i><sub>w</sub> = 1000)', { size: 12, anchor: 'end' });
    return s;
  },
  check() {
    const { rb, ro, rw, side, yI, kf } = F95, g = geo95();
    const L = (sg: Seg) => len(sub(sg[1], sg[0]));
    return [
      [`Floating: ρ_b = ρ_w f + ρ_o(1 − f) gives f = (900 − 800)/(1000 − 800) = ${fmt(g.f, 3)}`, close(rb, rw * g.f + ro * (1 - g.f), 1e-9) && close(g.f, 0.5, 1e-12)],
      [`The interface cuts the cube with ${fmt((g.yBot - yI) / side, 3)} of its height in water and ${fmt((yI - g.yTop) / side, 3)} in oil`, close((g.yBot - yI) / side, g.f, 1e-9) && close((yI - g.yTop) / side, 1 - g.f, 1e-9)],
      [`Arrows to one scale: oil ρ_o(1 − f)Vg ${fmt(L(g.oil))} px, water ρ_w fVg ${fmt(L(g.water))} px, weight ρ_bVg ${fmt(L(g.weight))} px`, close(L(g.oil), kf * ro * (1 - g.f)) && close(L(g.water), kf * rw * g.f) && close(L(g.weight), kf * rb)],
      ['Both buoyant contributions point up, the weight down, and they balance: oil + water = weight', g.oil[1][1] < g.oil[0][1] && g.water[1][1] < g.water[0][1] && g.weight[1][1] > g.weight[0][1] && close(L(g.oil) + L(g.water), L(g.weight), 1e-9)],
      ['Each buoyant arrow sits in its own liquid\'s part of the cube', g.oil[1][1] > g.yTop && g.oil[0][1] < yI && g.water[1][1] > yI && g.water[0][1] < g.yBot],
      clearCheck(fig95.draw({})),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.6 · the accelerating tank (topic 03, Derivation 1)            */
/* ===================================================================== */
/** a = 5.0 m s⁻², g = 10 (practice question 1 of this topic); tank wl–wr, the free surface pivots about its middle at yM; mg drawn mgPx. */
const F96 = { a: 5.0, g: 10, wl: 40, wr: 300, bot: 250, yM: 146, xe: 140, mgPx: 60 };
const ys96 = (x: number) => F96.yM + (F96.a / F96.g) * (x - (F96.wl + F96.wr) / 2);
const geo96 = () => {
  const { xe, mgPx, a, g } = F96, e: P = [xe, ys96(xe)];
  const mg: P = [0, mgPx], ma: P = [-(a / g) * mgPx, 0], N: P = mul(add(mg, ma), -1);
  return { e, mg, ma, N };
};
const fig96: Diagram = {
  id: 'p11-09-fig-9.6',
  topic: 2,
  name: 'Free surface of an accelerating tank',
  cases: [{ chip: 'Accelerating tank', cap: 'A rectangular open tank on a cart accelerating to the right with acceleration <i>a</i>. The free surface is tilted at angle <i>θ</i> to the horizontal, higher at the rear (left). A surface element carries its weight <i>mg</i> downward and the pseudo-force <i>ma</i> pointing backward (left).' }],
  draw() {
    const s = new Sketch(W, 312);
    const { wl, wr, bot } = F96, g = geo96(), e = g.e;
    path(s, [[wl, 46], [wl, bot], [wr, bot], [wr, 186]], { w: 2.4 });
    path(s, [[wl, ys96(wl)], [wr, ys96(wr)]], HI);
    path(s, [[e[0], e[1] - 5], [e[0], e[1] - 65]], { color: C.slate, w: 1.1, dash: 'dash' });
    const aN = Math.atan2(g.N[1], g.N[0]) / D2R;
    path(s, arcPts(e, 28, -90, aN), { color: C.slate, w: 1.2 });
    arrow(s, add(e, [0, 5]), add(e, g.mg));
    arrow(s, add(e, [-5, 0]), add(e, g.ma));
    arrow(s, add(e, mul(g.N, 5 / len(g.N))), add(e, g.N));
    s.dot(e[0], e[1], 4.6);
    s.sym(...add(add(e, ud(-80), 48), [0, 5]), '<i>θ</i>', { size: 15 });
    s.sym(e[0] + g.N[0] + 6, e[1] + g.N[1] - 2, '<i>N</i>', { size: 16, anchor: 'start' });
    s.sym(e[0] - 6, 70, 'vertical', { size: 13, anchor: 'end', color: C.slate });
    s.sym(e[0] + g.ma[0] / 2 - 2, e[1] + 21, '<i>ma</i>', { size: 15 });
    s.sym(e[0] + 9, e[1] + 46, '<i>mg</i>', { size: 15, anchor: 'start' });
    arrow(s, [140, 272], [200, 272], { w: 2.4 });
    s.sym(170, 294, '<i>a</i>', { size: 17 });
    const res = resultBlock(s, ['tan <i>θ</i> = <i>a</i>/<i>g</i>']);
    s.place(
      [
        { t: 'Free surface', hi: true, p: [260, ys96(260)], at: [[W - 4, 126, 'end'], [W - 4, 120, 'end']] },
        { t: 'Surface element', p: e, own: e, at: [[190, 88, 'start'], [194, 84, 'start']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { a, g: gg, wl, wr, xe } = F96, g = geo96();
    const slope = (ys96(wr) - ys96(wl)) / (wr - wl), surfDir: P = [1, slope];
    const thDeg = Math.atan(a / gg) / D2R;
    return [
      [`The drawn free surface falls ${fmt(slope, 4)} px per px toward the front: tan θ = a/g = ${fmt(a / gg, 2)}, θ = ${fmt(thDeg, 2)}° (a = ${fmt(a, 1)} m s⁻², g = ${gg} m s⁻²)`, close(slope, a / gg, 1e-12)],
      ['Higher at the rear (left): the liquid lags behind the acceleration', ys96(wl) < ys96(wr)],
      ['The pseudo-force ma points backward (left), opposite to a, with ma/mg = a/g', g.ma[0] < 0 && close(-g.ma[0] / g.mg[1], a / gg, 1e-12)],
      ['The element is on the surface and in equilibrium in the tank\'s frame: N + mg + ma = 0', close(g.e[1], ys96(xe)) && close(g.N[0] + g.mg[0] + g.ma[0], 0, 1e-12) && close(g.N[1] + g.mg[1] + g.ma[1], 0, 1e-12)],
      [`N is perpendicular to the free surface (N · surface = ${fmt(dotp(g.N, surfDir), 9)}), so the surface is perpendicular to the effective gravity`, close(dotp(g.N, surfDir), 0, 1e-9)],
      [`N makes θ = ${fmt(between(g.N, [0, -1]), 2)}° with the vertical: the same angle the surface makes with the horizontal`, close(between(g.N, [0, -1]), thDeg, 1e-9)],
      clearCheck(fig96.draw({})),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.7 · the rotating vessel (topic 03, Derivation 2)              */
/* ===================================================================== */
/** R = 0.10 m drawn 120 px (k px per m), ω = 12 rad s⁻¹, g = 10; the vertex at yV; the element at r = 0.07 m; mg drawn mgPx. */
const F97 = { R: 0.1, k: 1200, w: 12, g: 10, ax: 200, yV: 236, top: 100, bot: 276, r: 0.07, mgPx: 32 };
const ys97 = (x: number) => { const r = (x - F97.ax) / F97.k; return F97.yV - ((F97.w * F97.w * r * r) / (2 * F97.g)) * F97.k; };
const geo97 = () => {
  const { ax, k, r, w, g, mgPx } = F97, e: P = [ax + r * k, ys97(ax + r * k)];
  const th = Math.atan((w * w * r) / g), N: P = [-(mgPx / Math.cos(th)) * Math.sin(th), -mgPx];
  return { e, th, N, mg: [0, mgPx] as P, Nsin: [N[0], 0] as P };
};
const fig97: Diagram = {
  id: 'p11-09-fig-9.7',
  topic: 2,
  name: 'Liquid in a rotating vessel',
  cases: [{ chip: 'Rotating vessel', cap: 'A vertical cylindrical vessel of radius <i>R</i> rotating about its axis at angular velocity <i>ω</i>. The liquid surface is a parabola, lowest at the centre and highest at the rim. A fluid element at radius <i>r</i> on the surface shows the inward net force needed for circular motion.' }],
  draw() {
    const s = new Sketch(W, 372);
    const { ax, R, k, top, bot, yV } = F97, g = geo97(), e = g.e, wl = ax - R * k, wr = ax + R * k, rim = ys97(wr);
    path(s, [[wl, top], [wl, bot], [wr, bot], [wr, top]], { w: 2.4 });
    path(s, [[ax, 72], [ax, bot - 4]], { color: C.slate, w: 1.1, dash: 'dash' });
    const pts: P[] = [];
    for (let i = 0; i <= 120; i++) { const x = wl + ((wr - wl) * i) / 120; pts.push([x, ys97(x)]); }
    path(s, pts, HI);
    // the spin: an arrow curving round the axis, seen from the side
    const spin: P[] = Array.from({ length: 25 }, (_, i) => { const t = (190 + (160 * i) / 24) * D2R; return [ax + 34 * Math.cos(t), 62 + 11 * Math.sin(t)]; });
    path(s, spin.slice(0, -1), { w: 2 });
    arrow(s, spin[spin.length - 3], spin[spin.length - 1], { w: 2 });
    s.sym(ax + 44, 52, '<i>ω</i>', { size: 18, anchor: 'start' });
    s.sym(ax + 6, 88, 'axis of rotation', { size: 12, anchor: 'start', color: C.slate });
    // rim height above the vertex
    guide(s, [ax - 4, yV], [64, yV]);
    measure(s, [72, rim], [72, yV], C.mari);
    s.sym(64, (rim + yV) / 2 + 5, '<i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>)', { size: 13, anchor: 'end', color: C.amber });
    // the element and its forces
    path(s, [[e[0], e[1] - 5], [e[0], e[1] - 50]], { color: C.slate, w: 1, dash: 'dot' });
    const aN = Math.atan2(g.N[1], g.N[0]) / D2R;
    path(s, arcPts(e, 20, aN, -90), { color: C.slate, w: 1.2 });
    arrow(s, add(e, mul(g.N, 5 / len(g.N))), add(e, g.N));
    arrow(s, add(e, [-5, 0]), add(e, g.Nsin), { dash: true, color: C.slate, w: 1.8 });
    arrow(s, add(e, [0, 5]), add(e, g.mg));
    s.dot(e[0], e[1], 4.6);
    s.sym(...add(add(e, ud((aN - 90) / 2), 37), [0, 4]), '<i>θ</i>', { size: 14 });
    s.sym(e[0] + g.N[0] - 6, e[1] + g.N[1] - 2, '<i>N</i>', { size: 16, anchor: 'end' });
    s.sym(e[0] - 36, e[1] - 9, '<i>N</i> sin <i>θ</i>', { size: 12, anchor: 'end', color: C.slate });
    s.sym(e[0] + 9, e[1] + 26, '<i>mg</i>', { size: 15, anchor: 'start' });
    measure(s, [wl, bot + 16], [ax, bot + 16]);
    s.sym((wl + ax) / 2, bot + 36, '<i>R</i>', { size: 16 });
    resultBlock(s, ['<i>N</i> sin <i>θ</i> = <i>mω</i><sup>2</sup><i>r</i>', '<i>N</i> cos <i>θ</i> = <i>mg</i>', 'tan <i>θ</i> = <i>ω</i><sup>2</sup><i>r</i>/<i>g</i>'], { size: 14 });
    return s;
  },
  check() {
    const { ax, R, k, w, g: gg, r, yV, mgPx } = F97, g = geo97();
    const rise = (yV - ys97(ax + R * k)) / k, exact = (w * w * R * R) / (2 * gg);
    const xs = Array.from({ length: 81 }, (_, i) => ax - R * k + (2 * R * k * i) / 80);
    const para = xs.every((x) => close((yV - ys97(x)) / k, (w * w * ((x - ax) / k) ** 2) / (2 * gg), 1e-12));
    const h = 1e-4, slope = -(ys97(g.e[0] + h) - ys97(g.e[0] - h)) / (2 * h);
    const surf: P = [1, -slope];
    return [
      ['Every drawn surface point satisfies y = ω²r²/(2g) above the vertex: a parabola', para],
      ['Lowest at the centre (on the axis), highest at the rim', xs.every((x) => ys97(x) <= ys97(ax) + 1e-12) && ys97(ax + R * k) < ys97(ax + R * k - 1)],
      [`Rim above centre: ${fmt(rise * 100, 2)} cm = ω²R²/(2g) with ω = ${w} rad s⁻¹, R = ${R} m`, close(rise, exact, 1e-12)],
      [`At r = ${r} m the surface's slope is ${fmt(slope, 4)} = tan θ = ω²r/g = ${fmt((w * w * r) / gg, 4)} (θ = ${fmt(g.th / D2R, 2)}°)`, close(slope, (w * w * r) / gg, 1e-6) && close(Math.tan(g.th), (w * w * r) / gg, 1e-12)],
      ['N is perpendicular to the surface at the element', close(dotp(g.N, surf), 0, 1e-6)],
      [`N cos θ = mg (${fmt(-g.N[1], 3)} px = ${mgPx} px) and N sin θ = mω²r (${fmt(-g.Nsin[0], 3)} px = mg·ω²r/g)`, close(-g.N[1], mgPx, 1e-9) && close(-g.Nsin[0], (mgPx * w * w * r) / gg, 1e-9)],
      ['N sin θ points inward, toward the axis: the centripetal force', g.Nsin[0] < 0 && g.e[0] > ax],
      clearCheck(fig97.draw({})),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.8 · the equation of continuity (topic 04, Derivation 1)       */
/* ===================================================================== */
/** A circular tube: diameters d1, d2 (px) round the axis yc; left section to x 170, a taper to 210, then the narrow section; slug 1 is L1 px long. */
const F98 = { yc: 110, d1: 96, d2: 64, xL: 50, xT0: 170, xT1: 210, xR: 334, s1: 110, L1: 44, s2: 226, v1px: 16 };
const geo98 = () => {
  const { d1, d2, L1, v1px } = F98, ratio = (d1 / d2) ** 2; // A₁/A₂
  return { ratio, L2: L1 * ratio, v2px: v1px * ratio };
};
const fig98: Diagram = {
  id: 'p11-09-fig-9.8',
  topic: 3,
  name: 'Equation of continuity',
  cases: [{ chip: 'Tube of flow', cap: 'A tube of flow with a wide left section (area <i>A</i><sub>1</sub>, speed <i>v</i><sub>1</sub>) and a narrow right section (area <i>A</i><sub>2</sub>, speed <i>v</i><sub>2</sub>). Shaded slugs of length <i>v</i><sub>1</sub>Δ<i>t</i> and <i>v</i><sub>2</sub>Δ<i>t</i> show the volume crossing each section in time Δ<i>t</i>.' }],
  draw() {
    const s = new Sketch(W, 218);
    const { yc, d1, d2, xL, xT0, xT1, xR, s1, L1, s2, v1px } = F98, g = geo98();
    const t1 = yc - d1 / 2, b1 = yc + d1 / 2, t2 = yc - d2 / 2, b2 = yc + d2 / 2;
    path(s, [[xL, t1], [xT0, t1], [xT1, t2], [xR, t2]], { w: 2.4 });
    path(s, [[xL, b1], [xT0, b1], [xT1, b2], [xR, b2]], { w: 2.4 });
    // the two slugs: their end faces in marigold
    [s1, s1 + L1].forEach((x) => path(s, [[x, t1 + 1.5], [x, b1 - 1.5]], { color: C.mari, w: 2.4 }));
    [s2, s2 + g.L2].forEach((x) => path(s, [[x, t2 + 1.5], [x, b2 - 1.5]], { color: C.mari, w: 2.4 }));
    [-24, 0, 24].forEach((dy) => arrow(s, [62, yc + dy], [62 + v1px, yc + dy], { w: 1.8 }));
    [-16, 0, 16].forEach((dy) => arrow(s, [240, yc + dy], [240 + g.v2px, yc + dy], { w: 1.8 }));
    s.sym(94, yc + 5, '<i>v</i><sub>1</sub>', { size: 15 });
    s.sym(303, yc + 5, '<i>v</i><sub>2</sub>', { size: 15 });
    measure(s, [36, t1], [36, b1]);
    s.sym(27, yc + 5, '<i>A</i><sub>1</sub>', { size: 15, anchor: 'end' });
    measure(s, [216, t2 + 2], [216, b2 - 2]);
    s.sym(206, yc + 5, '<i>A</i><sub>2</sub>', { size: 15, anchor: 'end' });
    guide(s, [s1, t1 - 3], [s1, 42]);
    guide(s, [s1 + L1, t1 - 3], [s1 + L1, 42]);
    measure(s, [s1, 48], [s1 + L1, 48], C.ink);
    s.sym(s1 + L1 / 2, 36, '<i>v</i><sub>1</sub>Δ<i>t</i>', { size: 14 });
    guide(s, [s2, t2 - 3], [s2, 58]);
    guide(s, [s2 + g.L2, t2 - 3], [s2 + g.L2, 58]);
    measure(s, [s2, 64], [s2 + g.L2, 64], C.ink);
    s.sym(s2 + g.L2 / 2, 52, '<i>v</i><sub>2</sub>Δ<i>t</i>', { size: 14 });
    resultBlock(s, ['<i>A</i><sub>1</sub><i>v</i><sub>1</sub> = <i>A</i><sub>2</sub><i>v</i><sub>2</sub> (incompressible, steady flow)'], { size: 14 });
    return s;
  },
  check() {
    const { d1, d2, L1, v1px, s2, xR, s1, xT0 } = F98, g = geo98();
    const A1 = (Math.PI * d1 * d1) / 4, A2 = (Math.PI * d2 * d2) / 4;
    return [
      [`Circular sections: A₁/A₂ = (${d1}/${d2})² = ${fmt(A1 / A2, 4)}`, close(A1 / A2, g.ratio, 1e-12) && A1 > A2],
      [`Speeds drawn ${v1px} px and ${fmt(g.v2px)} px: A₁v₁ = A₂v₂, the narrow section is faster`, close(A1 * v1px, A2 * g.v2px, 1e-6) && g.v2px > v1px],
      [`Slugs ${L1} px and ${fmt(g.L2)} px long in the same Δt, in the ratio v₂/v₁ = ${fmt(g.L2 / L1, 4)}`, close(g.L2 / L1, g.v2px / v1px, 1e-12)],
      [`Equal volumes cross each section: A₁v₁Δt = ${fmt(A1 * L1, 0)} = A₂v₂Δt = ${fmt(A2 * g.L2, 0)} (px³)`, rel(A1 * L1, A2 * g.L2, 1e-12)],
      ['Each slug lies inside its own straight section', s1 + L1 < xT0 && s2 + g.L2 < xR],
      clearCheck(fig98.draw({})),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.9 · Bernoulli: a rising tube of flow (topic 04, Derivation 2)  */
/* ===================================================================== */
/**
 * End 1 at height h1, end 2 at h2 (m) above the reference level, k px per m; vertical cut heights c1, c2 (px) at x1, x2.
 * A sample flow: water, v₁ = 2.0 m s⁻¹, P₁ = 1.5 × 10⁵ Pa; v₂ from continuity, P₂ from Bernoulli.
 */
const F99 = { ref: 250, k: 70, h1: 0.8, h2: 2.0, x1: 90, x2: 250, c1: 72, c2: 48, rho: 1000, g: 10, v1: 2.0, P1: 1.5e5, PApx: 52, v1px: 20 };
const phys99 = () => {
  const { c1, c2, rho, g, v1, P1, h1, h2 } = F99, ratio = (c1 / c2) ** 2; // A₁/A₂
  const v2 = v1 * ratio, P2 = P1 + 0.5 * rho * (v1 * v1 - v2 * v2) + rho * g * (h1 - h2);
  return { ratio, v2, P2 };
};
const geo99 = () => {
  const { ref, k, h1, h2, x1, x2, PApx, v1px } = F99, ph = phys99();
  const E1: P = [x1, ref - h1 * k], E2: P = [x2, ref - h2 * k], u = mul(sub(E2, E1), 1 / len(sub(E2, E1)));
  const PA2px = (PApx * (ph.P2 * 1)) / (F99.P1 * ph.ratio);
  return { E1, E2, u, PA1: [[E1[0] - 4 - PApx, E1[1]], [E1[0] - 4, E1[1]]] as Seg, PA2: [[E2[0] + 4 + PA2px, E2[1]], [E2[0] + 4, E2[1]]] as Seg, v2px: v1px * ph.ratio };
};
const fig99: Diagram = {
  id: 'p11-09-fig-9.9',
  topic: 3,
  name: 'Bernoulli’s theorem: a rising tube',
  cases: [{ chip: 'Rising tube of flow', cap: 'A tube of flow rising from left to right (end 1: <i>A</i><sub>1</sub>, <i>v</i><sub>1</sub>, <i>P</i><sub>1</sub>, <i>h</i><sub>1</sub>; end 2: <i>A</i><sub>2</sub>, <i>v</i><sub>2</sub>, <i>P</i><sub>2</sub>, <i>h</i><sub>2</sub>). <i>P</i><sub>1</sub><i>A</i><sub>1</sub> pushes the fluid in at the left; <i>P</i><sub>2</sub><i>A</i><sub>2</sub> resists at the right.' }],
  draw() {
    const s = new Sketch(W, 330);
    const { ref, c1, c2, v1px, x1, x2 } = F99, g = geo99(), { E1, E2, u } = g;
    const n: P = [-u[1], u[0]];
    const topAt = (x: number) => E1[1] - c1 / 2 + ((x - x1) * (E2[1] - c2 / 2 - (E1[1] - c1 / 2))) / (x2 - x1);
    path(s, [[E1[0], E1[1] - c1 / 2], [E2[0], E2[1] - c2 / 2]], { w: 2.4 });
    path(s, [[E1[0], E1[1] + c1 / 2], [E2[0], E2[1] + c2 / 2]], { w: 2.4 });
    path(s, [[E1[0], E1[1] - c1 / 2], [E1[0], E1[1] + c1 / 2]], { color: C.slate, w: 1.2 });
    path(s, [[E2[0], E2[1] - c2 / 2], [E2[0], E2[1] + c2 / 2]], { color: C.slate, w: 1.2 });
    path(s, [[10, ref], [W - 10, ref]], { color: C.slate, w: 1.2, dash: 'dash' });
    s.sym(14, ref + 18, 'reference level', { size: 12, anchor: 'start', color: C.slate });
    [-14, 0, 14].forEach((d) => { const a = add(add(E1, u, 12), n, d); arrow(s, a, add(a, u, v1px), { w: 1.6 }); });
    [-10, 0, 10].forEach((d) => { const a = add(add(E2, u, -10 - g.v2px), n, d); arrow(s, a, add(a, u, g.v2px), { w: 1.6 }); });
    s.sym(x1 + 22, topAt(x1 + 22) - 16, '<i>v</i><sub>1</sub>', { size: 15 });
    s.sym(x2 - 40, topAt(x2 - 40) - 16, '<i>v</i><sub>2</sub>', { size: 15 });
    arrow(s, ...g.PA1, HI);
    arrow(s, ...g.PA2, HI);
    s.sym((g.PA1[0][0] + g.PA1[1][0]) / 2 - 8, E1[1] - 10, '<i>P</i><sub>1</sub><i>A</i><sub>1</sub>', { size: 15, color: C.amber });
    s.sym(g.PA2[0][0] + 8, E2[1] - 10, '<i>P</i><sub>2</sub><i>A</i><sub>2</sub>', { size: 15, color: C.amber });
    guide(s, [g.PA1[0][0] - 3, E1[1]], [14, E1[1]]);
    measure(s, [20, E1[1] + 2], [20, ref - 2]);
    s.sym(30, (E1[1] + ref) / 2 + 6, '<i>h</i><sub>1</sub>', { size: 15, anchor: 'start' });
    guide(s, [g.PA2[0][0] + 3, E2[1]], [306, E2[1]]);
    measure(s, [300, E2[1] + 2], [300, ref - 2]);
    s.sym(308, (E2[1] + ref) / 2 + 6, '<i>h</i><sub>2</sub>', { size: 15, anchor: 'start' });
    resultBlock(s, ['<i>P</i><sub>1</sub> + ½<i>ρv</i><sub>1</sub><sup>2</sup> + <i>ρgh</i><sub>1</sub>', '= <i>P</i><sub>2</sub> + ½<i>ρv</i><sub>2</sub><sup>2</sup> + <i>ρgh</i><sub>2</sub>']);
    return s;
  },
  check() {
    const { rho, g: gg, v1, P1, h1, h2, ref, k, PApx, v1px } = F99, ph = phys99(), g = geo99();
    const L = (sg: Seg) => len(sub(sg[1], sg[0]));
    const B1 = P1 + 0.5 * rho * v1 * v1 + rho * gg * h1, B2 = ph.P2 + 0.5 * rho * ph.v2 ** 2 + rho * gg * h2;
    return [
      [`End 1 is drawn ${fmt((ref - g.E1[1]) / k, 2)} m and end 2 ${fmt((ref - g.E2[1]) / k, 2)} m above the reference level: the tube rises left to right`, close((ref - g.E1[1]) / k, h1) && close((ref - g.E2[1]) / k, h2) && h2 > h1 && g.E2[0] > g.E1[0]],
      [`Continuity: A₁/A₂ = ${fmt(ph.ratio, 4)}, so v₂ = ${fmt(ph.v2, 2)} m s⁻¹ for v₁ = ${v1} m s⁻¹; the speed arrows (${v1px} px, ${fmt(g.v2px, 1)} px) are in that ratio`, close(g.v2px / v1px, ph.v2 / v1, 1e-12)],
      [`Bernoulli: P + ½ρv² + ρgh = ${fmt(B1, 1)} Pa at end 1 and ${fmt(B2, 1)} Pa at end 2, with P₂ = ${fmt(ph.P2, 0)} Pa`, rel(B1, B2, 1e-12)],
      [`The pressure-force arrows are to one scale: P₁A₁/P₂A₂ = ${fmt((P1 * ph.ratio) / ph.P2, 4)} = ${fmt(L(g.PA1) / L(g.PA2), 4)} drawn`, rel(L(g.PA1) / L(g.PA2), (P1 * ph.ratio) / ph.P2, 1e-9) && close(L(g.PA1), PApx)],
      ['P₁A₁ pushes into end 1 (along the flow); P₂A₂ pushes back on end 2 (against it)', g.PA1[1][0] > g.PA1[0][0] && g.PA2[1][0] < g.PA2[0][0]],
      clearCheck(fig99.draw({})),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.10 · terminal velocity: three forces (topic 05)               */
/* ===================================================================== */
/** Example 3's numbers: glass sphere r = 2.0 mm, ρ_b = 2500, in glycerine ρ_f = 1260, η = 0.83 Pa s, g = 10; W drawn Wpx. */
const F910 = { r: 2.0e-3, rb: 2500, rf: 1260, eta: 0.83, g: 10, c: [150, 120] as P, R: 32, Wpx: 100 };
const phys910 = () => {
  const { r, rb, rf, eta, g } = F910, V = (4 / 3) * Math.PI * r ** 3;
  const W_ = V * rb * g, FB = V * rf * g, vt = (2 * r * r * (rb - rf) * g) / (9 * eta), Fv = 6 * Math.PI * eta * r * vt;
  return { W: W_, FB, vt, Fv };
};
const geo910 = () => {
  const { c, R, Wpx } = F910, ph = phys910(), k = Wpx / ph.W;
  return {
    FB: [[c[0] - 12, c[1] - R - 4], [c[0] - 12, c[1] - R - 4 - ph.FB * k]] as Seg,
    Fv: [[c[0] + 12, c[1] - R - 4], [c[0] + 12, c[1] - R - 4 - ph.Fv * k]] as Seg,
    W: [[c[0], c[1] + R + 4], [c[0], c[1] + R + 4 + Wpx]] as Seg,
    k,
  };
};
const fig910: Diagram = {
  id: 'p11-09-fig-9.10',
  topic: 4,
  name: 'Terminal velocity: three forces',
  cases: [{ chip: 'Falling sphere', cap: 'A small sphere of radius <i>r</i> falling through a tall column of liquid. Three forces act on it: its weight (downward), the buoyant force (upward), and the viscous drag 6π<i>ηrv</i> (upward). At terminal velocity the three balance.' }],
  draw() {
    const s = new Sketch(W, 326);
    const { c, R } = F910, g = geo910();
    outline(s, arcPts(c, R, 0, 360, 96), { w: 2.2 });
    arrow(s, ...g.FB);
    arrow(s, ...g.Fv, HI);
    arrow(s, ...g.W);
    s.sym(g.FB[1][0] - 10, g.FB[1][1] + 18, '<i>F</i><sub>B</sub> = (4/3)π<i>r</i><sup>3</sup><i>ρ</i><sub>f</sub><i>g</i>', { size: 13, anchor: 'end' });
    s.sym(g.Fv[1][0] + 10, g.Fv[1][1] + 18, '<i>F</i><sub>v</sub> = 6π<i>ηrv</i><sub>t</sub>', { size: 13, anchor: 'start', color: C.amber });
    s.sym(c[0] + 8, g.W[0][1] + 52, '<i>W</i> = (4/3)π<i>r</i><sup>3</sup><i>ρ</i><sub>b</sub><i>g</i>', { size: 13, anchor: 'start' });
    arrow(s, [302, 82], [302, 170], { color: C.slate, w: 2, dash: true });
    s.sym(292, 122, '<i>v</i><sub>t</sub>', { size: 15, anchor: 'end', color: C.slate });
    s.sym(292, 140, '(terminal)', { size: 13, anchor: 'end', color: C.slate });
    resultBlock(s, ['At terminal velocity: <i>W</i> = <i>F</i><sub>B</sub> + <i>F</i><sub>v</sub>', '<i>v</i><sub>t</sub> = 2<i>r</i><sup>2</sup>(<i>ρ</i><sub>b</sub> − <i>ρ</i><sub>f</sub>)<i>g</i>/(9<i>η</i>)'], { size: 14 });
    return s;
  },
  check() {
    const ph = phys910(), g = geo910();
    const L = (sg: Seg) => len(sub(sg[1], sg[0]));
    return [
      [`Example 3: v_t = 2r²(ρ_b − ρ_f)g/(9η) = ${fmt(ph.vt * 100, 3)} × 10⁻² m s⁻¹ (book: 1.33 × 10⁻²)`, (ph.vt * 100).toFixed(2) === '1.33'],
      [`Viscous drag at v_t: F_v = 6πηrv_t = ${fmt(ph.Fv * 1e4, 3)} × 10⁻⁴ N; W − F_B = ${fmt((ph.W - ph.FB) * 1e4, 3)} × 10⁻⁴ N`, rel(ph.Fv, ph.W - ph.FB, 1e-12)],
      [`Arrows to one scale: W ${fmt(L(g.W), 1)} px, F_B ${fmt(L(g.FB), 1)} px, F_v ${fmt(L(g.Fv), 1)} px, and F_B + F_v = W`, close(L(g.FB) + L(g.Fv), L(g.W), 1e-9) && close(L(g.FB), ph.FB * g.k, 1e-9)],
      ['The weight points down; the buoyant force and the drag point up (against the motion)', g.W[1][1] > g.W[0][1] && g.FB[1][1] < g.FB[0][1] && g.Fv[1][1] < g.Fv[0][1]],
      [`F_B/W = ρ_f/ρ_b = ${fmt(ph.FB / ph.W, 4)}`, close(ph.FB / ph.W, F910.rf / F910.rb, 1e-12)],
      clearCheck(fig910.draw({})),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.11 · the Poiseuille velocity profile (topic 06)               */
/* ===================================================================== */
/** Tube walls at yc ± r (px), from xL to xR; the inner cylinder at radius s; profile from base x0, v_max drawn vmax px. */
const F911 = { yc: 150, r: 70, s: 40, xL: 50, xR: 290, x0: 100, vmax: 130, n: 8 };
const v911 = (y: number) => F911.vmax * (1 - (y / F911.r) ** 2);
const rows911 = () => Array.from({ length: F911.n }, (_, i) => -F911.r + (2 * F911.r * (i + 0.5)) / F911.n);
const fig911: Diagram = {
  id: 'p11-09-fig-9.11',
  topic: 5,
  name: 'Velocity profile in a tube (Poiseuille)',
  cases: [{ chip: 'Parabolic profile', cap: 'A horizontal cylindrical tube of radius <i>r</i> with fluid flowing left to right, and a coaxial inner cylinder of radius <i>s</i>. The velocity profile is a parabola: zero at the wall, maximum on the axis. Pressure <i>P</i><sub>1</sub> at the left end, <i>P</i><sub>2</sub> at the right end, length <i>l</i>.' }],
  draw() {
    const s = new Sketch(W, 340);
    const { yc, r, s: si, xL, xR, x0 } = F911;
    path(s, [[xL, yc - r], [xR, yc - r]], { w: 2.6 });
    path(s, [[xL, yc + r], [xR, yc + r]], { w: 2.6 });
    path(s, [[xL - 4, yc], [xR + 4, yc]], { color: C.slate, w: 1.1, dash: 'dashdot' });
    path(s, [[xL, yc - si], [xR, yc - si]], { color: C.slate, w: 1.3, dash: 'dash' });
    path(s, [[xL, yc + si], [xR, yc + si]], { color: C.slate, w: 1.3, dash: 'dash' });
    path(s, [[x0, yc - r + 2], [x0, yc + r - 2]], { color: C.slate, w: 1, dash: 'dot' });
    rows911().forEach((y) => arrow(s, [x0, yc + y], [x0 + v911(y), yc + y], { w: 1.3 }));
    const prof: P[] = [];
    for (let i = 0; i <= 100; i++) { const y = -r + (2 * r * i) / 100; prof.push([x0 + v911(y), yc + y]); }
    path(s, prof, HI);
    arrow(s, [8, yc], [42, yc], { w: 2.4 });
    arrow(s, [W - 8, yc], [W - 42, yc], { w: 2.4 });
    // under their arrows: above, P₂ sat beside the s of the measure and read "s P₂"
    s.sym(25, yc + 24, '<i>P</i><sub>1</sub>', { size: 16 });
    s.sym(W - 25, yc + 24, '<i>P</i><sub>2</sub>', { size: 16 });
    measure(s, [262, yc - 2], [262, yc - r + 2]);
    s.sym(272, yc - r + 15, '<i>r</i>', { size: 15, anchor: 'start' });
    measure(s, [280, yc - 2], [280, yc - si + 2], C.ink);
    s.sym(290, yc - 16, '<i>s</i>', { size: 15, anchor: 'start' });
    measure(s, [xL, yc + r + 18], [xR, yc + r + 18]);
    s.sym((xL + xR) / 2, yc + r + 36, '<i>l</i>', { size: 16 });
    const res = resultBlock(s, ['<i>v</i>(<i>s</i>) = [Δ<i>P</i>/(4<i>ηl</i>)](<i>r</i><sup>2</sup> − <i>s</i><sup>2</sup>)', '<i>v</i><sub>max</sub> = <i>v</i>(0), <i>v</i>(<i>r</i>) = 0 (no-slip)']);
    s.place(
      [
        { t: 'Velocity profile', hi: true, p: [x0 + v911(-35), yc - 35], at: [[W - 4, 40, 'end'], [W - 4, 34, 'end']] },
        { t: 'Coaxial inner cylinder', p: [70, yc - si], at: [[8, 40, 'start'], [8, 34, 'start']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { r, vmax, x0 } = F911;
    const flow = simpson((y) => v911(y) * 2 * Math.PI * Math.abs(y), -r, r, 4000) / 2; // ∫₀ʳ v 2πs ds
    const mean = flow / (Math.PI * r * r);
    return [
      ['Zero at the wall (no-slip), maximum on the axis', close(v911(r), 0) && close(v911(-r), 0) && rows911().every((y) => v911(y) < v911(0))],
      ['Every arrow ends on the drawn parabola v ∝ r² − s²', rows911().every((y) => close(v911(y), (vmax * (r * r - y * y)) / (r * r), 1e-9))],
      [`Mean speed over the circular cross-section = ${fmt(mean / vmax, 5)} v_max: exactly half the axial maximum`, close(mean / vmax, 0.5, 1e-6)],
      ['The flow runs left to right, driven by P₁ > P₂ (both end forces push inward)', x0 + v911(0) > x0],
      ['The profile is symmetric about the axis', rows911().every((y) => close(v911(y), v911(-y)))],
      clearCheck(fig911.draw({})),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.12 · a soap film on a wire frame (topic 07, Derivation 1)     */
/* ===================================================================== */
/** Frame from xa to xb (l = 0.10 m drawn 160 px), top PQ at yPQ, wire RS at yRS, pulled x px to R′S′; forces drawn Fpx; a sample S = 0.03 N m⁻¹. */
const F912 = { xa: 60, xb: 220, yPQ: 70, yRS: 150, x: 40, bot: 222, Fpx: 30, l: 0.1, S: 0.03 };
const fig912: Diagram = {
  id: 'p11-09-fig-9.12',
  topic: 6,
  name: 'Soap film on a wire frame',
  cases: [{ chip: 'Wire frame', cap: 'A rectangular wire frame <i>PQRS</i> with a sliding wire <i>RS</i> of length <i>l</i> and a soap film filling the frame. The film’s force <i>F</i> = 2<i>Sl</i> pulls <i>RS</i> toward <i>PQ</i>; an external force pulls it away by a distance <i>x</i> to <i>R</i>′<i>S</i>′.' }],
  draw() {
    const s = new Sketch(W, 328);
    const { xa, xb, yPQ, yRS, x, bot, Fpx } = F912, y2 = yRS + x, xm = (xa + xb) / 2;
    path(s, [[xa, bot], [xa, yPQ], [xb, yPQ], [xb, bot]], { w: 2.4 });
    path(s, [[xa, yRS], [xb, yRS]], { w: 2.8 });
    path(s, [[xa, y2], [xb, y2]], { color: C.mari, w: 2.4, dash: 'dash' });
    arrow(s, [xm, yRS - 4], [xm, yRS - 4 - Fpx]);
    arrow(s, [xm, yRS + 4], [xm, yRS + 4 + Fpx]);
    s.sym(xm + 10, yRS - 16, 'film: 2<i>Sl</i>', { size: 13, anchor: 'start' });
    s.sym(xm + 10, yRS + 24, '<i>F</i><sub>ext</sub> = 2<i>Sl</i>', { size: 13, anchor: 'start' });
    s.sym(xa - 7, yPQ - 4, '<i>P</i>', { size: 15, anchor: 'end' });
    s.sym(xb + 7, yPQ - 4, '<i>Q</i>', { size: 15, anchor: 'start' });
    s.sym(xa - 7, yRS + 5, '<i>S</i>', { size: 15, anchor: 'end' });
    s.sym(xb + 7, yRS + 5, '<i>R</i>', { size: 15, anchor: 'start' });
    s.sym(xa - 7, y2 + 5, '<i>S</i>′', { size: 15, anchor: 'end', color: C.amber });
    s.sym(xb + 7, y2 + 5, '<i>R</i>′', { size: 15, anchor: 'start', color: C.amber });
    measure(s, [xa, 46], [xb, 46]);
    s.sym(xm, 36, '<i>l</i>', { size: 16 });
    guide(s, [xb + 28, yRS], [268, yRS]);
    guide(s, [xb + 28, y2], [268, y2]);
    measure(s, [262, yRS + 1], [262, y2 - 1], C.ink);
    s.sym(272, (yRS + y2) / 2 + 5, '<i>x</i>', { size: 15, anchor: 'start' });
    const res = resultBlock(s, ['Work done: <i>W</i> = <i>Fx</i> = 2<i>Slx</i>', 'Area gained: Δ<i>A</i> = 2<i>lx</i> (two faces)', '<i>W</i> = <i>E</i> Δ<i>A</i> ⇒ 2<i>Slx</i> = <i>E</i>(2<i>lx</i>)', '⇒ <i>S</i> = <i>E</i>'], { size: 13 });
    s.place([{ t: 'Soap film', p: [100, 126], at: [[70, 82, 'start'], [72, 86, 'start']] }], [res]);
    return s;
  },
  check() {
    const { xa, xb, x, Fpx, l, S } = F912, k = (xb - xa) / l, xm = x / k;
    const Wk = 2 * S * l * xm, dA = 2 * l * xm;
    return [
      [`To scale: l = ${l} m is ${xb - xa} px, so x = ${fmt(xm * 100, 2)} cm`, close(xm, 0.025, 1e-12)],
      [`The film has two surfaces, each pulling S·l: F = 2Sl = ${fmt(2 * S * l * 1e3, 2)} × 10⁻³ N (S = ${S} N m⁻¹)`, close(2 * S * l, 0.006, 1e-12)],
      ['The film pulls RS toward PQ (up); the external force is equal and opposite (drawn the same length), pulling it away', Fpx > 0],
      [`Work done W = Fx = ${fmt(Wk * 1e6, 3)} µJ; area gained ΔA = 2lx = ${fmt(dA * 1e4, 3)} cm² (two faces)`, close(Wk, 2 * S * l * xm) && close(dA, 2 * l * xm)],
      [`Surface energy per unit area E = W/ΔA = ${fmt(Wk / dA, 4)} N m⁻¹ = S`, close(Wk / dA, S, 1e-12)],
      clearCheck(fig912.draw({})),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.13 · the half-bubble (topic 07, Derivation 2)                 */
/* ===================================================================== */
/** Centre c, radius R px; three pressure arrows of pPx each, two tension arrows of tPx each (one scale: 3·pPx = 2·tPx). */
const F913 = { c: [120, 136] as P, R: 90, pPx: 32, tPx: 48, S: 0.03, Rm: 0.02 };
const fig913: Diagram = {
  id: 'p11-09-fig-9.13',
  topic: 6,
  name: 'Excess pressure in a soap bubble',
  cases: [{ chip: 'Half-bubble', cap: 'A soap bubble of radius <i>R</i> cut into two hemispheres: surface tension (2)(2π<i>R</i>)<i>S</i> pulls the halves together; the excess-pressure force (Δ<i>P</i>)(π<i>R</i><sup>2</sup>) pushes them apart.' }],
  draw() {
    const s = new Sketch(W, 300);
    const { c, R, pPx, tPx } = F913;
    path(s, arcPts(c, R, 180, 360, 90), { w: 2.6 });
    path(s, [[c[0] - R, c[1]], [c[0] + R, c[1]]], { color: C.slate, w: 1.2, dash: 'dash' });
    [-45, 0, 45].forEach((dx) => arrow(s, [c[0] + dx, c[1] - 4], [c[0] + dx, c[1] - 4 - pPx]));
    [-R, R].forEach((dx) => arrow(s, [c[0] + dx, c[1] + 4], [c[0] + dx, c[1] + 4 + tPx], HI));
    s.sym(c[0], c[1] - pPx - 18, 'Δ<i>P</i> π<i>R</i><sup>2</sup>', { size: 15 });
    s.sym(c[0], c[1] + 26, '(2)(2π<i>R</i>)<i>S</i>', { size: 15, color: C.amber });
    const res = resultBlock(s, ['Equilibrium of the half-bubble:', 'Δ<i>P</i> π<i>R</i><sup>2</sup> = (2)(2π<i>R</i>)<i>S</i>', '⇒ Δ<i>P</i> = 4<i>S</i>/<i>R</i> (soap bubble, two surfaces)', 'Liquid drop (one surface): Δ<i>P</i> = 2<i>S</i>/<i>R</i>'], { size: 13 });
    s.place([{ t: 'Half-bubble', p: add(c, ud(-40), R), at: [[W - 8, 24, 'end'], [W - 8, 30, 'end']] }], [res]);
    return s;
  },
  check() {
    const { c, R, pPx, tPx, S, Rm } = F913;
    const dP = (2 * 2 * Math.PI * Rm * S) / (Math.PI * Rm * Rm);
    const arc = arcPts(c, R, 180, 360, 90);
    return [
      ['The outline is a true half-circle of radius R on the cut', arc.every((p) => close(len(sub(p, c)), R, 1e-9) && p[1] <= c[1] + 1e-9)],
      [`The arrows balance to one scale: pressure 3 × ${pPx} px up = tension 2 × ${tPx} px down`, close(3 * pPx, 2 * tPx)],
      [`ΔP·πR² = 2·2πR·S gives ΔP = 4S/R: ${fmt(dP, 3)} Pa for S = ${S} N m⁻¹, R = ${Rm * 100} cm`, close(dP, (4 * S) / Rm, 1e-12)],
      ['A liquid drop has one surface: ΔP = 2S/R, half the soap bubble\'s', close((2 * S) / Rm, dP / 2, 1e-12)],
      ['Pressure pushes the half outward (up, away from the cut); tension pulls it back along the rim (down)', pPx > 0 && tPx > 0],
      clearCheck(fig913.draw({})),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.14 · capillary rise (topic 07, Derivation 3)                  */
/* ===================================================================== */
/**
 * To scale, k px per mm: a tube of radius r = 2.0 mm, contact angle θ = 35°, water (S = 0.072 N m⁻¹,
 * ρ = 1000 kg m⁻³), g = 10; the outside surface at yS; the tube's axis at ax.
 */
const F914 = { k: 15, r: 2.0, th: 35, S: 0.072, rho: 1000, g: 10, ax: 170, yS: 230, top: 50, bot: 262 };
const geo914 = () => {
  const { k, r, th, S, rho, g, ax, yS } = F914, t = th * D2R;
  const h = ((2 * S * Math.cos(t)) / ((r / 1000) * rho * g)) * 1000; // mm
  const R = r / Math.cos(t), rp = r * k, Rp = R * k, yB = yS - h * k, cy = yB - Rp, yC = cy + Rp * Math.sin(t);
  return { h, R, rp, Rp, yB, c: [ax, cy] as P, yC, wl: ax - rp, wr: ax + rp };
};
/** Where the "P₀ − 2S/R" label points: on the axis, in the liquid, just under the meniscus. */
const pUnder914 = (g: ReturnType<typeof geo914>): P => [F914.ax, g.yB + 10];
const fig914: Diagram = {
  id: 'p11-09-fig-9.14',
  topic: 6,
  name: 'Capillary rise',
  cases: [{ chip: 'Capillary tube', cap: 'A narrow capillary tube of radius <i>r</i> dipped in a liquid that wets it: concave meniscus, liquid risen to height <i>h</i>. Angle of contact <i>θ</i> between liquid and glass; meniscus radius <i>R</i> = <i>r</i>/cos <i>θ</i>.' }],
  draw() {
    const s = new Sketch(W, 336);
    const { th, yS, top, bot, ax } = F914, g = geo914();
    path(s, [[g.wl, top], [g.wl, bot]], { w: 2.6 });
    path(s, [[g.wr, top], [g.wr, bot]], { w: 2.6 });
    path(s, [[16, yS], [g.wl - 1.5, yS]], { w: 1.6 });
    path(s, [[g.wr + 1.5, yS], [W - 16, yS]], { w: 1.6 });
    path(s, arcPts(g.c, g.Rp, th, 180 - th, 60), { w: 2.2 });
    const cp: P = [g.wr, g.yC];
    path(s, [g.c, cp], { color: C.slate, w: 1.1, dash: 'dash' });
    s.dot(g.c[0], g.c[1], 2.6);
    s.sym(g.c[0] - 8, g.c[1] + 4, '<i>R</i>', { size: 14, anchor: 'end', color: C.slate });
    // the contact angle, inside the liquid, between the glass (down) and the meniscus
    path(s, arcPts(cp, 16, 90, 90 + th), { color: C.slate, w: 1.3 });
    s.sym(...add(add(cp, ud(90 + th * 0.6), 30), [0, 5]), '<i>θ</i>', { size: 14 });
    // h, from the outside surface to the bottom of the meniscus
    guide(s, [ax + 4, g.yB], [232, g.yB]);
    measure(s, [226, g.yB + 1], [226, yS - 1], C.mari);
    s.sym(234, (g.yB + yS) / 2 + 5, '<i>h</i>', { size: 16, anchor: 'start', color: C.amber });
    measure(s, [ax, 240], [g.wr, 240]);
    s.sym(ax + g.rp / 2, 260, '<i>r</i>', { size: 13 });
    s.sym(ax, top - 10, '<i>P</i><sub>0</sub>', { size: 15 });
    s.sym(W - 30, yS - 9, '<i>P</i><sub>0</sub>', { size: 15 });
    s.sym(g.wl - 8, g.yB + 14, '<i>P</i><sub>0</sub> − 2<i>S</i>/<i>R</i>', { size: 14, anchor: 'end' });
    // its leader, through the glass to a point in the liquid just under the meniscus
    const under = pUnder914(g);
    s.line(g.wl - 5, under[1], under[0] - 3, under[1], { color: C.grey, w: 1.2 });
    s.dot(under[0], under[1], 2.6);
    const res = resultBlock(s, ['<i>R</i> = <i>r</i>/cos <i>θ</i>', '<i>h</i> = 2<i>S</i> cos <i>θ</i>/(<i>rρg</i>)']);
    s.place(
      [
        { t: 'Concave meniscus', p: add(g.c, ud(128), g.Rp), at: [[8, 100, 'start'], [8, 94, 'start']] },
        { t: 'Capillary tube', p: [g.wl, 70], at: [[8, 52, 'start'], [8, 46, 'start']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { k, r, th, S, rho, g: gg, yS } = F914, g = geo914(), t = th * D2R;
    const hDrawn = (yS - g.yB) / k, Rdrawn = len(sub([g.wr, g.yC], g.c)) / k;
    const radius: P = sub([g.wr, g.yC], g.c), tangent: P = [-radius[1], radius[0]];
    const tIn: P = tangent[1] > 0 ? tangent : mul(tangent, -1);
    const dP = (2 * S) / (g.R / 1000);
    return [
      [`The meniscus meets the glass ${fmt(r, 2)} mm from the axis and is an arc of radius ${fmt(Rdrawn, 4)} mm = r/cos θ`, close((g.wr - g.c[0]) / k, r, 1e-9) && close(Rdrawn, r / Math.cos(t), 1e-9)],
      [`Its tangent at the glass makes ${fmt(between(tIn, [0, 1]), 3)}° with the wall: the contact angle θ = ${th}° (< 90°, wetting)`, close(between(tIn, [0, 1]), th, 1e-6) && th < 90],
      ['Concave: the arc\'s centre is above the liquid, so the surface dips in the middle', g.c[1] < g.yC && g.yB > g.yC],
      [`Jurin: h = 2S cos θ/(rρg) = ${fmt(g.h, 3)} mm, drawn ${fmt(hDrawn, 3)} mm to the bottom of the meniscus`, close(hDrawn, g.h, 1e-9) && close(g.h, ((2 * S * Math.cos(t)) / ((r / 1000) * rho * gg)) * 1000, 1e-12)],
      [`Just under the meniscus the pressure is P₀ − 2S/R (2S/R = ${fmt(dP, 2)} Pa); the column ρgh = ${fmt(rho * gg * (g.h / 1000), 2)} Pa restores P₀ at the outside level`, close(dP, rho * gg * (g.h / 1000), 1e-9)],
      ['The P₀ − 2S/R label points into the liquid inside the tube, just under the bottom of the meniscus (and above the outside level)', ((p) => p[0] > g.wl && p[0] < g.wr && p[1] > g.yB && p[1] - g.yB <= 12 && p[1] < yS)(pUnder914(g))],
      clearCheck(fig914.draw({})),
    ];
  },
};

export const DIAGRAMS_PHYSICS_11_09: Diagram[] = [fig91, fig92, fig93, fig94, fig95, fig96, fig97, fig98, fig99, fig910, fig911, fig912, fig913, fig914];

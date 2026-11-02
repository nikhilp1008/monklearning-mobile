import { C, LABEL_GAP, Rect, Sketch, crosses, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 9 (Ray Optics), Topics 01–03: every drawing of the
 * Master Reference book in pp. 557–583, redrawn. They are the seven numbered
 * figures 9.1–9.7, each printed on a "CHAPTER 9 · FIGURES" page (9.1 on
 * p. 560, 9.2 and 9.3 on p. 562, 9.4 on p. 569, 9.5 on p. 571, 9.6 on p. 574,
 * 9.7 on p. 579; the first copy of each caption sits where the text cites it).
 * There are no unnumbered drawings in these pages: pp. 557–583 were checked
 * page by page; the rest is prose, typeset equations, boxed results and the
 * image-formation table on p. 559.
 *
 * Every figure is computed from the physics, never placed by eye. Mirrors are
 * true circles about their centre of curvature C; objects and images are placed
 * from the mirror formula 1/v + 1/u = 1/f (New Cartesian: distances from the
 * pole, positive along the incident light, which travels left to right); rays
 * through C and to the pole are exact, and the rays parallel to the axis or
 * through F are drawn as the book's paraxial construction, each `check`
 * measuring how far the exact law of reflection at the drawn point differs
 * (under 1.5°). Refraction at a flat surface is Snell's law, n₁ sin i = n₂ sin r,
 * with every angle computed; total internal reflection only past the computed
 * critical angle. Figure 9.7 is the paraxial derivation's schematic (see it).
 * Each `check` recomputes what the figure and its caption state and measures
 * that no label or tag touches a line it does not name.
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
/** The math angle (degrees, counter-clockwise, y up) of a drawn direction. */
const angOf = (d: P) => Math.atan2(-d[1], d[0]) / D2R;
/** The angle between two directions, in degrees (0–180). */
const between = (a: P, b: P) => Math.acos(Math.max(-1, Math.min(1, dotp(unit(a), unit(b))))) / D2R;
/** A direction reflected in a surface of unit normal n: d − 2(d·n)n. */
const reflect = (d: P, n: P): P => add(d, n, -2 * dotp(d, n));
/** Distance from p to the infinite line through a and b. */
const lineDist = (p: P, a: P, b: P) => { const d = unit(sub(b, a)); return Math.abs((p[0] - a[0]) * d[1] - (p[1] - a[1]) * d[0]); };

/* ---------- drawing helpers (as in physics-12-07.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, rays, arcs, arrows), by
 * sketch: `clearance` measures each tag and label against them.
 */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
  if (!o.free) keep(s, pts);
}
/** Every arrowhead drawn, by sketch, as its tip and its middle: a tag's dot keeps off them (`dotsOffHeads`). */
const HEADS = new WeakMap<Sketch, [P, P][]>();
const keepHead = (s: Sketch, tip: P, u: P, L: number, hw = 4.5) => {
  HEADS.set(s, [...(HEADS.get(s) ?? []), [tip, add(tip, u, -L / 2)]]);
  INKS.set(s, [...(INKS.get(s) ?? []), headTri(tip, u, L, hw)]);
};
/** Every arrowhead as the triangle drawn, by sketch. */
const INKS = new WeakMap<Sketch, P[][]>();
const headTri = (tip: P, u: P, L = 9, hw = 4.5): P[] => { const b = add(tip, u, -L), nv: P = [-u[1], u[0]]; return [tip, add(b, nv, hw), add(b, nv, -hw)]; };
/** How far p is from a triangle's ink (0 inside it). */
const triDist = (t: P[], p: P) => {
  const side = (a: P, b: P) => (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
  const s3 = t.map((a, i) => side(a, t[(i + 1) % 3]));
  if (s3.every((v) => v >= 0) || s3.every((v) => v <= 0)) return 0;
  return Math.min(...t.map((a, i) => distSeg(p, a, t[(i + 1) % 3])));
};
/** A tag's dot: Sketch.tag draws it 2.6 px in radius. */
const DOT_R = 2.6;
/** A small arrowhead at p, pointing along the unit direction u. */
function head(s: Sketch, p: P, u: P, color: string = C.ink, L = 8, hw = 3.8) {
  const tri = headTri(p, u, L, hw);
  s.add(`<path d="M${tri.map((q) => `${r1(q[0])} ${r1(q[1])}`).join(' L')} Z" fill="${color}"/>`);
  keep(s, [...tri, tri[0]]);
  keepHead(s, p, u, L, hw);
}
/** A ray: a line through the points, with a head part-way along each segment named in `heads` (all by default). */
function ray(s: Sketch, pts: P[], o: { color?: string; w?: number; dash?: 'dash'; heads?: number[]; at?: number } = {}) {
  const color = o.color ?? C.ink;
  path(s, pts, { color, w: o.w ?? 1.6, dash: o.dash });
  (o.heads ?? pts.slice(1).map((_, i) => i)).forEach((i) => {
    const a = pts[i], b = pts[i + 1], u = unit(sub(b, a));
    head(s, add(a, sub(b, a), o.at ?? 0.55), u, color);
  });
}
/** The points of an arc about c, radius R, from math angle a0 to a1 (degrees). */
const arcPts = (c: P, R: number, a0: number, a1: number, n = 60): P[] => samples(a0, a1, n).map((a) => polar(c, R, a));
/** An angle mark: a thin arc at the vertex between two math angles. */
/** The signed turn from math angle a0 to a1, the short way round (−180° to 180°). */
const turn = (a0: number, a1: number) => ((((a1 - a0) % 360) + 540) % 360) - 180;
const angArc = (s: Sketch, v: P, a0: number, a1: number, R: number, color: string = C.slate) => path(s, arcPts(v, R, a0, a0 + turn(a0, a1)), { color, w: 1.2 });
/** Distance from a point to a rectangle (0 inside it). */
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/** Point-to-segment distance. */
function distSeg(p: P, a: P, b: P) {
  const d = sub(b, a), L = dotp(d, d) || 1, k = Math.max(0, Math.min(1, dotp(sub(p, a), d) / L));
  return len(p, add(a, d, k));
}
/** Distance from a segment to a rectangle (0 when it enters it). */
function segRectDist(a: P, b: P, r: Rect) {
  if (rectDist(r, a) === 0 || rectDist(r, b) === 0 || crosses(a, b, r, 0)) return 0;
  const cs: P[] = [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]];
  return Math.min(rectDist(r, a), rectDist(r, b), ...cs.map((c) => distSeg(c, a, b)));
}
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
/** And no tag's dot beside an arrowhead either: at least HEAD_CLEAR px of white between the dot and the head's ink. */
const HEAD_CLEAR = 6;
const dotClear = (s: Sketch, at: P) => Math.min(Infinity, ...(INKS.get(s) ?? []).map((t) => triDist(t, at))) - DOT_R;
const dotsClearOfHeads = (s: Sketch): Check => {
  const near = s.tags.filter((t) => t.from).map((t) => ({ name: t.name, gap: dotClear(s, t.from as P) })).sort((a, b) => a.gap - b.gap);
  return [`Every tag's dot keeps at least ${HEAD_CLEAR} px clear of every arrowhead${near.length ? `: the closest is "${near[0].name}", ${fmt(near[0].gap, 1)} px` : ''}`, near.every((n) => n.gap >= HEAD_CLEAR - 1e-9)];
};
/** Every label inside the frame (the kit's audit checks tags only). */
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
/** No label sits on a point (a dot) it would hide. */
const labelsOffPoints = (s: Sketch): Check => {
  const bad = s.labels.filter((l) => s.points.some((p) => rectDist(l.rect, [p.x, p.y]) < p.r + 2)).map((l) => l.text);
  return [`No label covers a point${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
/** The layout checks of a drawn sketch. */
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), labelsOffPoints(s), dotsOffHeads(s), dotsClearOfHeads(s), inFrame(s)];
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

/* ---------- placing symbols where they are clear ---------- */
/** The box Sketch.sym registers for a label. */
function symRect(x: number, y: number, html: string, size: number, anchor: 'start' | 'middle' | 'end'): Rect {
  const plain = html.replace(/<[^>]+>/g, '');
  const w = plain.length * size * 0.5, x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  return [x0, y - size * 0.72, x0 + w, y + size * 0.22];
}
/** Is the box clear: inside the frame, LABEL_GAP from every kept line, off every label, tag and point? */
function spotFree(s: Sketch, r: Rect) {
  if (r[0] < 2 || r[1] < 2 || r[2] > s.w - 2 || r[3] > s.h - 2) return false;
  for (const pts of LINES.get(s) ?? []) for (let i = 1; i < pts.length; i++) if (segRectDist(pts[i - 1], pts[i], r) < LABEL_GAP + 0.6) return false;
  const apart = (a: Rect, m: number) => a[2] + m <= r[0] || r[2] + m <= a[0] || a[3] + m <= r[1] || r[3] + m <= a[1];
  if (!s.labels.every((l) => apart(l.rect, 3)) || !s.tags.every((t) => apart(t.rect, 5))) return false;
  return s.points.every((p) => rectDist(r, [p.x, p.y]) >= p.r + 2.5);
}
/**
 * A symbol beside the point it names: the nearest clear spot, trying the
 * directions in order of preference at each distance from `dmin` to `dmax`.
 * When none is clear it goes to the first spot (and the layout check fails).
 */
function lab(s: Sketch, html: string, p: P | P[], dirs: P[], o: { size?: number; color?: string; dmin?: number; dmax?: number } = {}) {
  const size = o.size ?? 15, color = o.color ?? C.text;
  const anchors = (typeof p[0] === 'number' ? [p] : p) as P[];
  let first: [number, number] | null = null;
  for (const at of anchors) for (let d = o.dmin ?? 9; d <= (o.dmax ?? 34); d += 1) {
    for (const u0 of dirs) {
      const u = unit(u0), cx = at[0] + u[0] * d, cy = at[1] + u[1] * d;
      // the box's middle on the direction: the box runs 0.72 em above the baseline and 0.22 em below
      const y = cy + size * 0.25;
      const rect = symRect(cx, y, html, size, 'middle');
      if (!first) first = [cx, y];
      if (spotFree(s, rect)) { s.sym(cx, y, html, { size, color }); return [cx, y] as P; }
    }
  }
  s.sym(first![0], first![1], html, { size, color });
  return first as P;
}
/** A region's name: a tag with no line, and its symbol just after it. */
function region(s: Sketch, x: number, y: number, name: string, sym: string, o: { anchor?: 'start' | 'end' } = {}) {
  const w = name.length * 12 * 0.56 + 20, symW = sym.replace(/<[^>]+>/g, '').length * 14 * 0.5;
  // an "end" anchor puts the whole group (tag and symbol) against x
  const x0 = o.anchor === 'end' ? x - w - 6 - symW : x;
  s.tag(x0, y, name, null, null);
  if (sym) s.sym(x0 + w + 5, y + 16, sym, { size: 14, anchor: 'start' });
}
/** A two-headed measuring line along x, with end ticks. */
function dimH(s: Sketch, x1: number, x2: number, y: number, color: string = C.slate) {
  const a = Math.min(x1, x2), b = Math.max(x1, x2);
  path(s, [[a, y], [b, y]], { color, w: 1.2 });
  head(s, [a, y], [-1, 0], color, 7, 3.2);
  head(s, [b, y], [1, 0], color, 7, 3.2);
  path(s, [[a, y - 5], [a, y + 5]], { color, w: 1.2 });
  path(s, [[b, y - 5], [b, y + 5]], { color, w: 1.2 });
}
/** A two-headed measuring line along y, with end ticks. */
function dimV(s: Sketch, x: number, y1: number, y2: number, color: string = C.slate) {
  const a = Math.min(y1, y2), b = Math.max(y1, y2);
  path(s, [[x, a], [x, b]], { color, w: 1.2 });
  head(s, [x, a], [0, -1], color, 7, 3.2);
  head(s, [x, b], [0, 1], color, 7, 3.2);
  path(s, [[x - 5, a], [x + 5, a]], { color, w: 1.2 });
  path(s, [[x - 5, b], [x + 5, b]], { color, w: 1.2 });
}

/* ---------- spherical mirrors and surfaces ---------- */
/** The x of a sphere of centre c and radius R at height dy from its axis: on the side `side` of c (+1 right, −1 left). */
const arcX = (c: P, R: number, side: 1 | -1, dy: number) => c[0] + side * Math.sqrt(R * R - dy * dy);
/** The arc's points from dy0 to dy1 (drawing y down). */
const arcAt = (c: P, R: number, side: 1 | -1, dy0: number, dy1: number): P[] => samples(dy0, dy1, 80).map((dy): P => [arcX(c, R, side, dy), c[1] + dy]);
/** Where the ray a + t·d (t > 0) meets the circle |x − c| = R, the farthest meeting. */
function hitCircle(a: P, d: P, c: P, R: number): P {
  const ac = sub(a, c), b = dotp(d, ac), q = dotp(ac, ac) - R * R, t = -b + Math.sqrt(b * b - q);
  return add(a, d, t);
}
/**
 * A mirror: its arc in ink and, behind it (to the right: the light comes from
 * the left), short grey hatching for the silvered back. Ticks that would touch
 * a line in `avoid` are left out.
 */
function mirror(s: Sketch, c: P, R: number, side: 1 | -1, dy0: number, dy1: number, avoid: [P, P][] = []) {
  path(s, arcAt(c, R, side, dy0, dy1), { w: 2.2 });
  for (let dy = dy0 + 4; dy <= dy1 - 2; dy += 10) {
    const a: P = [arcX(c, R, side, dy) + 1.5, c[1] + dy], b: P = add(a, [6, 6]);
    if (avoid.some(([p, q]) => [a, b, add(a, [3, 3])].some((x) => distSeg(x, p, q) < 3))) continue;
    path(s, [a, b], { color: C.grey, w: 1.1 });
  }
}

/* ===================================================================== */
/* Figure 9.1 · concave and convex mirrors (topic 01)                     */
/* ===================================================================== */
/**
 * One case per panel, both a mirror of radius R = 180 px with four rays parallel
 * to the axis at 28 and 50 px from it (h/R ≤ 0.28, so near-paraxial). The
 * concave mirror's reflected rays are drawn through F and on; the convex
 * mirror's leave along the line from F, and their backward extensions (dashed)
 * meet at F behind it. The check measures the exact law of reflection at each
 * point the ray meets the arc against the drawn ray.
 */
const CAP91 = 'Concave and convex mirrors: pole <i>P</i>, centre of curvature <i>C</i>, focus <i>F</i> and radius <i>R</i>. Parallel rays converge at <i>F</i> after reflection from the concave mirror; after reflection from the convex mirror they diverge, appearing to come from <i>F</i> behind it.';
type Kind91 = 'concave' | 'convex';
const G91 = { H: 236, y0: 100, R: 180, x0: 12, hs: [-50, -28, 28, 50], arc: 66, ext: 34, out: 74, dimY: 182 };
function geo91(kind: Kind91) {
  const { y0, R, hs, x0 } = G91, cc = kind === 'concave';
  const Pp: P = [cc ? 278 : 128, y0], Cc: P = [cc ? Pp[0] - R : Pp[0] + R, y0], F: P = [(Pp[0] + Cc[0]) / 2, y0];
  const side: 1 | -1 = cc ? 1 : -1;
  const rays = hs.map((dy) => {
    const H: P = [arcX(Cc, R, side, dy), y0 + dy];
    const end: P = cc ? add(F, unit(sub(F, H)), G91.ext) : add(H, unit(sub(H, F)), G91.out);
    return { dy, start: [x0, H[1]] as P, H, end };
  });
  return { P: Pp, C: Cc, F, side, rays };
}
const fig91: Diagram = {
  id: 'p12-09-fig-9.1',
  topic: 0,
  name: 'Concave and convex mirrors',
  cases: [
    { chip: 'Concave mirror', kind: 'concave', cap: CAP91 },
    { chip: 'Convex mirror', kind: 'convex', cap: CAP91 },
  ],
  draw(c: { kind: Kind91 }) {
    const s = new Sketch(W, G91.H);
    const g = geo91(c.kind), cc = c.kind === 'concave', { y0, R, arc, dimY } = G91;
    // the principal axis
    path(s, [[6, y0], [cc ? g.P[0] : W - 6, y0]], { color: C.grey, w: 1.2 });
    // the backward extensions of the convex mirror's rays, to F behind it
    if (!cc) g.rays.forEach((r) => path(s, [r.H, g.F], { color: C.slate, w: 1.1, dash: 'dash' }));
    mirror(s, g.C, R, g.side, -arc, arc, cc ? [] : g.rays.map((r): [P, P] => [r.H, g.F]));
    g.rays.forEach((r) => {
      ray(s, [r.start, r.H], { at: 0.45 });
      if (cc) {
        path(s, [r.H, r.end], { color: C.mari, w: 1.7 });
        head(s, add(r.H, sub(g.F, r.H), 0.55), unit(sub(g.F, r.H)), C.mari);
      } else ray(s, [r.H, r.end], { color: C.mari, w: 1.7, at: 0.6 });
    });
    [g.C, g.F, g.P].forEach((p) => s.dot(p[0], p[1], 3));
    dimH(s, g.P[0], g.C[0], dimY);
    resultBlock(s, [cc ? 'Converge at <i>F</i>' : 'Appear to come from <i>F</i>'], { size: 14 });
    lab(s, '<i>C</i>', g.C, [[0, 1], [0, -1]]);
    lab(s, '<i>F</i>', g.F, [[0, 1], [0, -1]]);
    lab(s, '<i>P</i>', g.P, cc ? [[1, -0.3], [1, 0.3]] : [[-1, -1], [-1, -0.6], [-0.4, -1]], { dmax: 30 });
    lab(s, '<i>R</i>', [(g.P[0] + g.C[0]) / 2, dimY], [[0, -1], [0, 1]]);
    const top: P = [arcX(g.C, R, g.side, -arc + 6), y0 - arc + 6];
    s.place([{ t: cc ? 'Concave mirror' : 'Convex mirror', p: top, at: cc ? [[top[0] - 14, 4, 'end'], [top[0] - 24, 2, 'end']] : [[top[0] + 40, 4, 'start'], [top[0] + 60, 4, 'start'], [W - 6, 4, 'end']] }]);
    return s;
  },
  check(c: { kind: Kind91 }) {
    const g = geo91(c.kind), cc = c.kind === 'concave', s = fig91.draw(c), { R } = G91;
    // signed along the incident light (+x), from the pole
    const fS = g.F[0] - g.P[0], RS = g.C[0] - g.P[0];
    const dev = g.rays.map((r) => {
      const n = unit(sub(g.C, r.H)), exact = reflect(unit(sub(r.H, r.start)), n), drawn = unit(sub(r.end, r.H));
      return between(exact, drawn);
    });
    // where the exactly reflected rays (or their extensions) cross the axis, against F
    const cross = g.rays.map((r) => { const ex = reflect(unit(sub(r.H, r.start)), unit(sub(g.C, r.H))); return r.H[0] + (ex[0] * (G91.y0 - r.H[1])) / ex[1]; });
    const spread = Math.max(...cross.map((x) => Math.abs(x - g.F[0])));
    const throughF = g.rays.every((r) => lineDist(g.F, r.H, r.end) < 1e-9);
    const sense = g.rays.every((r) => (cc ? r.end[0] < g.F[0] : r.end[0] < r.H[0]) && Math.sign(r.end[1] - G91.y0) === (cc ? Math.sign(-r.dy) : Math.sign(r.dy)));
    // Topic 01, worked example 2 (convex, f = +20 cm, m = +1/3): m = f/(f − u) gives u = −40 cm
    const u2 = 20 - 20 * 3;
    return [
      [`P, C and F on one axis, C at R = ${fmt(Math.abs(RS))} px from P and F midway: f = R/2 = ${fmt(Math.abs(fS))} px`, close(Math.abs(RS), R) && close(fS, RS / 2)],
      [cc ? `Concave: C and F lie in front of the mirror, on the side the light comes from (f = ${fmt(fS)} px < 0, R < 0)` : `Convex: C and F lie behind the mirror (f = +${fmt(fS)} px > 0, R > 0)`, cc ? fS < 0 && RS < 0 : fS > 0 && RS > 0],
      ['The mirror is an arc of a circle about C; every ray meets it on the arc', g.rays.every((r) => close(len(r.H, g.C), R, 1e-9))],
      ['The four incident rays run parallel to the principal axis, two above it and two below', g.rays.every((r) => close(r.start[1], r.H[1])) && g.rays.filter((r) => r.dy < 0).length === 2],
      [cc ? 'Each reflected ray passes through F and crosses to the other side of the axis (converging)' : 'Each reflected ray leaves along the line from F, away from the axis (diverging), and its dashed backward extension meets F behind the mirror', throughF && sense],
      [`The drawn reflections obey the law of reflection (i = r about the normal through C) within ${fmt(Math.max(...dev), 2)}° (paraxial, h/R ≤ ${fmt(50 / R, 2)}); the exact rays cross the axis within ${fmt(spread, 1)} px of F (${fmt((100 * spread) / Math.abs(fS), 1)}% of f)`, Math.max(...dev) < 1.5 && spread < 0.05 * Math.abs(fS)],
      [`Worked example 2: m = f/(f − u) = +1/3 with f = +20 cm gives u = ${u2} cm (the book's 40 cm in front, (b))`, u2 === -40 && close(20 / (20 - u2), 1 / 3)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figures 9.2 and 9.3 · the concave mirror's image of an object beyond C */
/* ===================================================================== */
/**
 * f = −96 px (R = −192 px), the object AB at u = −2.5f = −240 px, 52 px tall.
 * The mirror formula puts the image at v = −160 px (between F and C) with
 * m = −v/u = −2/3: real, inverted, diminished. (The book draws u = −3f; with
 * all four rays through so small an image no letter could stand clear of
 * them, so the object is set a little nearer C: still beyond C.) The rays
 * through C and to P are exact; the parallel ray and the ray through F are the
 * book's paraxial construction, and the check measures the exact law of
 * reflection at their points on the arc against the drawn rays.
 */
const G92 = { f: 96, uF: 2.5, h: 52, Px: 322, y0: 84 };
function geo92() {
  const { f, uF, h, Px, y0 } = G92;
  const fS = -f, uS = -uF * f, vS = 1 / (1 / fS - 1 / uS), m = -vS / uS, R = 2 * f;
  const Pp: P = [Px, y0], Cc: P = [Px - R, y0], F: P = [Px - f, y0], A: P = [Px + uS, y0], B: P = [A[0], y0 - h];
  const A2: P = [Px + vS, y0], B2: P = [A2[0], y0 - m * h];
  const H1: P = [arcX(Cc, R, 1, -h), y0 - h];
  const H2 = hitCircle(B, unit(sub(F, B)), Cc, R);
  const H3 = add(Cc, unit(sub(Cc, B)), R);
  return { fS, uS, vS, m, R, P: Pp, C: Cc, F, A, B, A2, B2, H1, H2, H3 };
}
/** Labels for the points of Figures 9.2 and 9.3. */
function letters92(s: Sketch, g: ReturnType<typeof geo92>) {
  lab(s, '<i>A</i>', g.A, [[0, 1], [-1, 1]]);
  lab(s, '<i>B</i>', g.B, [[-1, -0.3], [-1, 0], [-1, -1]]);
  lab(s, '<i>A</i>′', g.A2, [[-0.5, -1], [-0.2, -1], [-1, -1], [-1, -0.6]], { dmax: 26 });
  lab(s, '<i>B</i>′', g.B2, [[-1, 1], [-1, 0.6], [0, 1], [-1, 0.2]], { dmax: 26 });
  lab(s, '<i>C</i>', g.C, [[-0.6, 1], [0, 1], [-1, 1], [0, -1]], { dmax: 26 });
  lab(s, '<i>F</i>', g.F, [[0, -1], [0.3, -1], [-0.3, -1], [0, 1]], { dmax: 40 });
  lab(s, '<i>P</i>', g.P, [[-1, -0.6], [-1, -1], [-0.6, -1]], { dmax: 30 });
}
/** The object, the image (marigold), the axis, the mirror and the points C, F, P. */
function scene92(s: Sketch, g: ReturnType<typeof geo92>, dy0: number, dy1: number) {
  path(s, [[6, g.P[1]], [g.P[0], g.P[1]]], { color: C.grey, w: 1.2 });
  mirror(s, g.C, g.R, 1, dy0, dy1);
  path(s, [g.A, g.B], { w: 2.4 });
  path(s, [g.A2, g.B2], { color: C.mari, w: 2.6 });
  [g.A, g.B, g.A2, g.B2, g.C, g.F, g.P].forEach((p) => s.dot(p[0], p[1], 2.8));
}
/** The checks Figures 9.2 and 9.3 share: the mirror formula, and rays 1 (parallel, then through F) and 4 (to the pole). */
function checks92(g: ReturnType<typeof geo92>): Check[] {
  const { f, h } = G92;
  const n1 = unit(sub(g.C, g.H1)), ex1 = reflect([1, 0], n1), dev1 = between(ex1, sub(g.B2, g.H1));
  const fOff = lineDist(g.F, g.H1, g.B2);
  const in4 = unit(sub(g.P, g.B)), out4 = unit(sub(g.B2, g.P));
  return [
    [`Mirror formula: 1/v = 1/f − 1/u with f = ${fmt(g.fS)} px and u = ${fmt(g.uS)} px (= 2.5f, beyond C) gives v = ${fmt(g.vS, 2)} px: the image A′B′ lies between F and C`, close(1 / g.vS + 1 / g.uS, 1 / g.fS, 1e-12) && g.A2[0] > g.C[0] && g.A2[0] < g.F[0] && g.A[0] < g.C[0]],
    [`m = −v/u = ${fmt(g.m, 3)}: B′ is drawn ${fmt(g.B2[1] - g.P[1], 2)} px below the axis for B ${fmt(h)} px above it (real, inverted, diminished)`, close(g.m, -2 / 3, 1e-12) && close((g.B2[1] - g.P[1]) / h, -g.m, 1e-12) && g.vS < 0],
    [`Ray 1 runs parallel to the axis to the mirror, then on through F to B′: it passes ${fmt(fOff, 2)} px from F (paraxial; the mirror's sag at that height is ${fmt(g.P[0] - g.H1[0], 1)} px)`, close(g.H1[1], g.B[1]) && close(len(g.H1, g.C), g.R, 1e-9) && fOff < 2.5],
    [`Ray 1 obeys the law of reflection at its point on the arc within ${fmt(dev1, 2)}° (paraxial: h/R = ${fmt(h / g.R, 2)})`, dev1 < 2],
    [`Ray 4 meets the pole and reflects symmetrically about the axis (angles ${fmt(between(in4, [1, 0]), 2)}° and ${fmt(between(out4, [-1, 0]), 2)}°) to B′, exactly`, close(between(in4, [1, 0]), between(out4, [-1, 0]), 1e-9) && in4[1] > 0 && out4[1] > 0],
    [`The distances, from the pole: u = ${fmt(g.uS / f, 2)}f, v = ${fmt(g.vS / f, 3)}f, f (all negative: in front of the mirror, against the incident light)`, g.uS < 0 && g.vS < 0 && g.fS < 0 && close(g.P[0] - g.A[0], -g.uS) && close(g.P[0] - g.A2[0], -g.vS)],
  ];
}
const fig92: Diagram = {
  id: 'p12-09-fig-9.2',
  topic: 0,
  name: 'Image in a concave mirror',
  cases: [{ chip: 'Object beyond C', cap: 'Image of an object <i>AB</i> beyond <i>C</i> in a concave mirror. A ray parallel to the axis is reflected through <i>F</i>, and a ray to the pole <i>P</i> is reflected symmetrically; both pass through <i>B</i>′. The distances <i>u</i>, <i>v</i> and <i>f</i> are marked.' }],
  draw() {
    const s = new Sketch(W, 240);
    const g = geo92(), y0 = G92.y0, dims = [y0 + 62, y0 + 94, y0 + 126];
    scene92(s, g, -64, 50);
    ray(s, [g.B, g.H1, g.B2]);
    ray(s, [g.B, g.P, g.B2], { color: C.slate, w: 1.4 });
    dimH(s, g.A2[0], g.P[0], dims[0]);
    dimH(s, g.A[0], g.P[0], dims[1]);
    dimH(s, g.F[0], g.P[0], dims[2]);
    letters92(s, g);
    lab(s, '<i>v</i>', [(g.A2[0] + g.P[0]) / 2, dims[0]], [[0, 1]], { dmin: 11 });
    lab(s, '<i>u</i>', [(g.A[0] + g.P[0]) / 2, dims[1]], [[0, 1]], { dmin: 11 });
    lab(s, '<i>f</i>', [(g.F[0] + g.P[0]) / 2, dims[2]], [[0, 1]], { dmin: 11 });
    const top: P = [arcX(g.C, g.R, 1, -58), y0 - 58];
    s.place([
      { t: 'Concave mirror', p: top, at: [[top[0] - 16, 2, 'end'], [top[0] - 30, 2, 'end']] },
      { t: 'Image', hi: true, p: [g.A2[0], y0 + 24], at: [[g.A2[0] - 40, y0 + 34, 'end'], [g.A2[0] - 50, y0 + 34, 'end'], [g.A2[0] - 60, y0 + 30, 'end'], [g.A2[0] - 30, y0 + 34, 'end']] },
      { t: 'Object', p: [g.A[0], y0 - 30], at: [[g.A[0] - 14, y0 - 40, 'end'], [4, y0 - 26, 'start'], [4, y0 + 6, 'start']] },
    ]);
    return s;
  },
  check() {
    const g = geo92(), s = fig92.draw(fig92.cases[0]);
    // Topic 01, worked example 1: R = −30 cm, u = −25 cm
    const v1 = 1 / (1 / -15 - 1 / -25), m1 = -v1 / -25;
    return [
      ...checks92(g),
      [`Worked example 1: f = R/2 = −15 cm, u = −25 cm give v = ${fmt(v1, 2)} cm and m = ${fmt(m1, 2)} (the book's −37.5 cm and −1.5)`, close(v1, -37.5, 1e-9) && close(m1, -1.5, 1e-9)],
      ...layout(s),
    ];
  },
};

const fig93: Diagram = {
  id: 'p12-09-fig-9.3',
  topic: 0,
  name: 'The four standard rays',
  cases: [{ chip: 'Four rays', cap: 'The four standard rays from the tip <i>B</i> of an object beyond <i>C</i>: (1) parallel to the axis, then through <i>F</i>; (2) through <i>F</i>, then parallel to the axis; (3) through <i>C</i>, retracing its path; (4) to the pole <i>P</i>. All meet at <i>B</i>′, giving a real, inverted, diminished image.' }],
  draw() {
    const s = new Sketch(W, 296);
    const g = geo92(), y0 = G92.y0;
    scene92(s, g, -64, (g.H3[1] - y0) + 10);
    ray(s, [g.B, g.H1, g.B2]);
    ray(s, [g.B, g.H2, g.B2], { at: 0.5 });
    // ray 3: in along BC to the mirror, back the same way
    path(s, [g.B, g.H3], { w: 1.6 });
    head(s, add(g.B, sub(g.C, g.B), 0.55), unit(sub(g.C, g.B)));
    head(s, add(g.B2, sub(g.H3, g.B2), 0.45), unit(sub(g.B2, g.H3)));
    ray(s, [g.B, g.P, g.B2], { color: C.slate, w: 1.4 });
    resultBlock(s, ['Real, inverted, diminished'], { size: 14 });
    letters92(s, g);
    const n = (t: string, p: P | P[], dirs: P[]) => lab(s, t, p, dirs, { size: 14, dmin: 8, dmax: 30 });
    n('1', add(g.B, sub(g.H1, g.B), 0.3), [[0, -1]]);
    n('2', add(g.H2, sub(g.B2, g.H2), 0.35), [[0, 1]]);
    n('3', add(g.B2, sub(g.H3, g.B2), 0.75), [[-1, 0.6], [1, -0.6]]);
    n('4', [0.82, 0.88, 0.75, 0.68, 0.6].map((k) => add(g.B, sub(g.P, g.B), k)), [[0, -1], [0.2, -1], [0, 1]]);
    const top: P = [arcX(g.C, g.R, 1, -58), y0 - 58];
    s.place([
      { t: 'Concave mirror', p: top, at: [[top[0] - 16, 2, 'end'], [top[0] - 30, 2, 'end']] },
      { t: 'Image', hi: true, p: [g.A2[0], y0 + 22], at: [[70, y0 + 64, 'start'], [40, y0 + 70, 'start'], [20, y0 + 90, 'start'], [4, y0 + 40, 'start']] },
      { t: 'Object', p: [g.A[0], y0 - 30], at: [[g.A[0] - 14, y0 - 40, 'end'], [4, y0 - 26, 'start'], [4, y0 + 6, 'start']] },
    ]);
    return s;
  },
  check() {
    const g = geo92(), s = fig93.draw(fig93.cases[0]);
    const n2 = unit(sub(g.C, g.H2)), ex2 = reflect(unit(sub(g.H2, g.B)), n2), dev2 = between(ex2, sub(g.B2, g.H2));
    const back2 = between(sub(g.B2, g.H2), [-1, 0]);
    const normal3 = between(sub(g.H3, g.B), sub(g.H3, g.C));
    return [
      ...checks92(g),
      [`Ray 2 runs from B through F to the mirror and returns parallel to the axis (within ${fmt(back2, 2)}°) to B′`, lineDist(g.F, g.B, g.H2) < 1e-9 && close(len(g.H2, g.C), g.R, 1e-9) && back2 < 0.5],
      [`Ray 2 obeys the law of reflection at its point on the arc within ${fmt(dev2, 2)}°`, dev2 < 1.5],
      [`Ray 3 runs from B through C and meets the mirror along its normal (at ${fmt(normal3, 6)}° to the radius), so it retraces its path, through B′`, normal3 < 1e-6 && lineDist(g.B2, g.B, g.C) < 1e-9 && close(len(g.H3, g.C), g.R, 1e-9)],
      ['All four rays meet at B′: a real, inverted, diminished image (the result)', g.vS < 0 && g.m < 0 && Math.abs(g.m) < 1],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.4 · refraction, and the critical angle (topic 02)             */
/* ===================================================================== */
/**
 * Glass of n = 1.5 against air (n = 1). Left: a ray from air at i = 60° refracts
 * to r = arcsin(sin 60°/1.5) = 35.3°, toward the normal. Right: from glass, at
 * i = 25° (< C) it refracts away from the normal to r = arcsin(1.5 sin 25°) =
 * 39.3° (r > i); at i = C = arcsin(1/1.5) = 41.8° it leaves along the surface
 * (r = 90°); at i = 60° (> C) it is totally internally reflected at 60°.
 */
const G94 = { H: 266, y0: 122, O: [170, 122] as P, n: 1.5, iL: 60, iR: [25, 0, 60], Lin: 112, Lout: 104 };
const crit94 = () => Math.asin(1 / G94.n) / D2R;
const snell = (n1: number, i: number, n2: number) => Math.asin((n1 * Math.sin(i * D2R)) / n2) / D2R;
const fig94: Diagram = {
  id: 'p12-09-fig-9.4',
  topic: 1,
  name: 'Refraction and total internal reflection',
  cases: [
    { chip: 'Rarer to denser', side: 'left', cap: 'A ray entering a denser medium bends toward the normal.' },
    { chip: 'Denser to rarer', side: 'right', cap: 'A ray passing from a denser to a rarer medium, for <i>i</i> < <i>C</i> (refracts away from the normal), <i>i</i> = <i>C</i> (<i>r</i> = 90°) and <i>i</i> > <i>C</i> (total internal reflection).' },
  ],
  draw(c: { side: 'left' | 'right' }) {
    const s = new Sketch(W, G94.H);
    const { O, y0, n, Lin, Lout } = G94;
    const inAt = (i: number): P => add(O, [-Math.sin(i * D2R), -Math.cos(i * D2R)], Lin);
    path(s, [[14, y0], [W - 14, y0]], { w: 1.8 });
    path(s, [[O[0], c.side === 'left' ? 24 : 34], [O[0], c.side === 'left' ? 216 : 224]], { color: C.slate, w: 1.1, dash: 'dash' });
    if (c.side === 'left') {
      const i = G94.iL, r = snell(1, i, n), S = inAt(i), E = add(O, [Math.sin(r * D2R), Math.cos(r * D2R)], Lout);
      ray(s, [S, O]);
      ray(s, [O, E], { color: C.mari, w: 1.8 });
      angArc(s, O, 90, 90 + i, 34);
      angArc(s, O, -90, -90 + r, 34);
      resultBlock(s, ['Rarer → denser: bends toward the normal'], { size: 13 });
      lab(s, '<i>i</i>', polar(O, 34, 90 + i / 2), [[-0.5, -1], [0, -1]], { dmin: 9 });
      lab(s, '<i>r</i>', polar(O, 34, -90 + r / 2), [[0.5, 1], [0, 1]], { dmin: 9 });
      region(s, 16, 30, 'Air', '(<i>n</i><sub>1</sub>)');
      region(s, 16, 168, 'Glass', '(<i>n</i><sub>2</sub> > <i>n</i><sub>1</sub>)');
      return s;
    }
    const Cc = crit94(), [i1, , i3] = G94.iR, r1v = snell(n, i1, 1);
    const S = [inAt(i1), inAt(Cc), inAt(i3)];
    ray(s, [S[0], O]);
    ray(s, [O, add(O, [Math.sin(r1v * D2R), Math.cos(r1v * D2R)], Lout)]);
    ray(s, [S[1], O], { color: C.mari, w: 1.8 });
    ray(s, [O, add(O, [1, 0], Lout + 20)], { color: C.mari, w: 2 });
    ray(s, [S[2], O]);
    ray(s, [O, add(O, [Math.sin(i3 * D2R), -Math.cos(i3 * D2R)], Lin)]);
    lab(s, '<i>i</i> < <i>C</i>', S[0], [[0, -1], [0.6, -1], [-1, -0.4]], { size: 14, dmin: 8 });
    lab(s, '<i>i</i> = <i>C</i>', S[1], [[-1, -0.5], [-1, -1], [-1, 0]], { size: 14, dmin: 8, color: C.amber });
    lab(s, '<i>i</i> > <i>C</i>', S[2], [[-1, -0.5], [-1, 0], [-1, -1]], { size: 14, dmin: 8 });
    lab(s, '<i>r</i> = 90°', add(O, [1, 0], Lout - 6), [[0, -1], [-0.3, -1]], { size: 14, dmin: 9 });
    lab(s, '<i>r</i> > <i>i</i>', add(O, [Math.sin(r1v * D2R), Math.cos(r1v * D2R)], Lout * 0.75), [[1, -0.4], [1, 0]], { size: 14, dmin: 10 });
    region(s, 8, 82, 'Glass', '(<i>n</i><sub>1</sub>)');
    region(s, 8, 196, 'Air', '(<i>n</i><sub>2</sub> < <i>n</i><sub>1</sub>)');
    const tirAt = add(O, [Math.sin(i3 * D2R), -Math.cos(i3 * D2R)], Lin * 0.8);
    s.place([{ t: 'Total internal reflection', p: tirAt, at: [[W - 6, 4, 'end'], [W - 6, 10, 'end']] }]);
    return s;
  },
  check(c: { side: 'left' | 'right' }) {
    const s = fig94.draw(c), n = G94.n, Cc = crit94();
    if (c.side === 'left') {
      const i = G94.iL, r = snell(1, i, n);
      return [
        [`Snell: 1 × sin ${i}° = ${n} × sin r gives r = ${fmt(r, 2)}°: the ray bends toward the normal (r < i)`, close(Math.sin(i * D2R), n * Math.sin(r * D2R), 1e-12) && r < i],
        ['The ray enters from the rarer medium (air, above) into the denser (glass, below), crossing the boundary at the normal’s foot', G94.O[1] === G94.y0],
        ...layout(s),
      ];
    }
    const [i1, , i3] = G94.iR, r1v = snell(n, i1, 1);
    // Topic 02, worked example 2 and MCQ 3: TIR at 45° needs n > √2; C = 30° means n = 2
    const nEx = [1.3, 1.4, 1.5].filter((m) => Math.asin(1 / m) / D2R < 45);
    return [
      [`Critical angle: sin C = n₂/n₁ = 1/${n} gives C = ${fmt(Cc, 2)}°`, close(Math.sin(Cc * D2R), 1 / n, 1e-12)],
      [`i = ${i1}° < C: 1.5 sin ${i1}° = sin r gives r = ${fmt(r1v, 2)}° > i (away from the normal)`, i1 < Cc && close(n * Math.sin(i1 * D2R), Math.sin(r1v * D2R), 1e-12) && r1v > i1],
      ['i = C: the refracted ray grazes the surface (r = 90°)', close(n * Math.sin(Cc * D2R), 1, 1e-12)],
      [`i = ${i3}° > C: sin r would be ${fmt(n * Math.sin(i3 * D2R), 3)} > 1, so no refracted ray: it is totally internally reflected at ${i3}° (the angle of reflection equals the angle of incidence)`, i3 > Cc && n * Math.sin(i3 * D2R) > 1],
      [`Worked example 2: TIR at 45° needs n > √2 = ${fmt(Math.SQRT2, 3)}: only n = ${nEx.join(', ')} (the book's (c)); MCQ 3: C = 30° gives n = 1/sin 30° = ${fmt(1 / Math.sin(30 * D2R))}`, nEx.length === 1 && nEx[0] === 1.5 && close(1 / Math.sin(30 * D2R), 2, 1e-12)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.5 · apparent depth (topic 02)                                 */
/* ===================================================================== */
/**
 * Water, n = 4/3; the object O at a real depth d = 150 px. Two rays leave O at
 * 9.1° to the normal, refract at the surface by Snell's law (to 12.2°) and run
 * up to the observer; their backward extensions are computed and meet on the
 * normal at the image I, d′ = 111.4 px down: within 1% of d/n = 112.5 px
 * (near-normal rays, as the formula requires).
 */
const G95 = { H: 330, y0: 118, x: 170, d: 150, n: 4 / 3, off: 24, top: 40 };
function geo95() {
  const { y0, x, d, n, off, top } = G95;
  const O: P = [x, y0 + d], t1 = Math.atan(off / d), t2 = Math.asin(n * Math.sin(t1));
  const dA = off / Math.tan(t2), I: P = [x, y0 + dA];
  const rays = [-1, 1].map((k) => { const S: P = [x + k * off, y0]; return { S, E: [S[0] + k * (y0 - top) * Math.tan(t2), top] as P }; });
  return { O, I, t1, t2, dA, rays };
}
const fig95: Diagram = {
  id: 'p12-09-fig-9.5',
  topic: 1,
  name: 'Apparent depth',
  cases: [{ chip: 'Looking down', cap: 'Apparent depth: rays from the object <i>O</i> refract away from the normal at the surface, and their backward extensions meet at the image <i>I</i>, at apparent depth <i>d</i>′ < <i>d</i>.' }],
  draw() {
    const s = new Sketch(W, G95.H);
    const g = geo95(), { y0, x } = G95;
    path(s, [[x, 32], [x, 300]], { color: C.slate, w: 1.1, dash: 'dash' });
    path(s, [[14, y0], [W - 14, y0]], { w: 2 });
    g.rays.forEach((r) => {
      ray(s, [g.O, r.S], { at: 0.5 });
      ray(s, [r.S, r.E], { at: 0.55 });
      path(s, [r.S, g.I], { color: C.slate, w: 1.1, dash: 'dash' });
    });
    s.dot(g.O[0], g.O[1], 3.4);
    s.point(g.I[0], g.I[1], 3.6, `<circle cx="${r1(g.I[0])}" cy="${r1(g.I[1])}" r="3.2" fill="#fff" stroke="${C.mari}" stroke-width="1.8"/>`);
    dimV(s, 268, y0, g.O[1]);
    dimV(s, 72, y0, g.I[1], C.mari);
    resultBlock(s, ['<i>d</i>′ = <i>d</i>/<i>n</i>']);
    lab(s, '<i>O</i>', g.O, [[1, 0.2], [1, 0.6]], { dmin: 12 });
    lab(s, '<i>I</i>', g.I, [[1, 0], [1, 0.4], [1, -0.4]], { dmin: 12 });
    lab(s, '<i>d</i>', [268, (y0 + g.O[1]) / 2], [[1, 0]], { size: 16, dmin: 12 });
    lab(s, '<i>d</i>′', [72, (y0 + g.I[1]) / 2], [[-1, 0]], { size: 16, dmin: 14, color: C.amber });
    s.tag(x, 4, 'To the observer', null, null, { anchor: 'middle' });
    region(s, 16, 62, 'Air', '(<i>n</i> = 1)');
    region(s, 16, 292, 'Water', '(<i>n</i> > 1)');
    return s;
  },
  check() {
    const g = geo95(), s = fig95.draw(fig95.cases[0]), { n, d } = G95;
    const meet = g.rays.every((r) => lineDist(g.I, r.S, r.E) < 1e-9);
    return [
      [`Snell at the surface: n sin θ₁ = sin θ₂ with θ₁ = ${fmt(g.t1 / D2R, 2)}° gives θ₂ = ${fmt(g.t2 / D2R, 2)}°: the rays bend away from the normal`, close(n * Math.sin(g.t1), Math.sin(g.t2), 1e-12) && g.t2 > g.t1],
      ['The backward extensions of both refracted rays meet on the normal through O, at I', meet && close(g.I[0], g.O[0])],
      [`I is at apparent depth d′ = ${fmt(g.dA, 1)} px against d = ${d} px: d′/d = ${fmt(g.dA / d, 3)}, within ${fmt(Math.abs(g.dA / d - 1 / n) * n * 100, 1)}% of 1/n = ${fmt(1 / n, 3)} (near-normal rays): d′ < d`, Math.abs(g.dA / d - 1 / n) * n < 0.015 && g.dA < d],
      [`Topic 02, worked example 1: d = 24 cm, n = 4/3 give d′ = ${fmt(24 / (4 / 3))} cm, a rise of ${fmt(24 - 24 / (4 / 3))} cm (the book's 18 cm and 6 cm)`, close(24 / (4 / 3), 18, 1e-9)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.6 · the optical fibre (topic 02)                              */
/* ===================================================================== */
/**
 * A schematic step-index fibre with core n₁ = 1.50 and cladding n₂ = 1.30 (the
 * book's drawing measures these angles: 48° in air, 30° in the core; the
 * example's 1.50/1.46 fibre gives 20° and 13°, too flat to show a zigzag on a
 * phone). The acceptance cone's edge, θ_max = arcsin √(n₁² − n₂²) = 48.4°, is
 * drawn dashed; the ray enters 5° inside it, at θ = 43.4°, refracts to
 * α = 27.3° and meets the core–cladding wall at 90° − α = 62.7° > C = 60.1°,
 * so it is reflected totally (a ray exactly at θ_max would meet the wall at C,
 * the limiting case).
 */
const G96 = { H: 206, face: 84, top: 60, bot: 140, clad: 30, n1: 1.5, n2: 1.3, Lin: 82, xEnd: W - 6, inside: 5 };
function geo96() {
  const { face, top, bot, n1, n2, Lin, xEnd, inside } = G96, ax = (top + bot) / 2;
  const NA = Math.sqrt(n1 * n1 - n2 * n2), tmax = Math.asin(NA), Cc = Math.asin(n2 / n1);
  const th = tmax - inside * D2R, al = Math.asin(Math.sin(th) / n1);
  const E: P = [face, ax], S: P = add(E, [-Math.cos(th), Math.sin(th)], Lin), Edge: P = add(E, [-Math.cos(tmax), Math.sin(tmax)], Lin);
  const T1: P = [face + (ax - top) / Math.tan(al), top], T2: P = [T1[0] + (bot - top) / Math.tan(al), bot];
  const End: P = [xEnd, bot - (xEnd - T2[0]) * Math.tan(al)];
  return { ax, NA, tmax, th, al, Cc, E, S, Edge, T1, T2, End };
}
const fig96: Diagram = {
  id: 'p12-09-fig-9.6',
  topic: 1,
  name: 'Optical fibre',
  cases: [{ chip: 'Acceptance cone', cap: 'Optical fibre: light entering the end face within the acceptance cone (half-angle <i>θ</i><sub>max</sub>) refracts to angle <i>α</i> in the core, meets the core–cladding boundary at 90° − <i>α</i> and is totally internally reflected repeatedly along the fibre.' }],
  draw() {
    const s = new Sketch(W, G96.H);
    const g = geo96(), { face, top, bot, clad, xEnd } = G96;
    path(s, [[face, top - clad], [face, bot + clad]], { w: 2 });
    path(s, [[face, top], [xEnd, top]], { w: 1.4 });
    path(s, [[face, bot], [xEnd, bot]], { w: 1.4 });
    path(s, [[face, top - clad], [xEnd, top - clad]], { color: C.grey, w: 1.2 });
    path(s, [[face, bot + clad], [xEnd, bot + clad]], { color: C.grey, w: 1.2 });
    path(s, [[20, g.ax], [196, g.ax]], { color: C.slate, w: 1.1, dash: 'dash' });
    path(s, [g.T1, [g.T1[0], g.ax + 6]], { color: C.slate, w: 1.1, dash: 'dash' });
    // the cone's edge (the limiting ray at θ_max), dashed; the ray runs just inside it
    path(s, [g.Edge, g.E], { color: C.slate, w: 1.1, dash: 'dash' });
    ray(s, [g.S, g.E], { at: 0.6 });
    ray(s, [g.E, g.T1, g.T2, g.End], { color: C.mari, w: 1.8, heads: [0, 1] });
    angArc(s, g.E, 180, 180 + g.tmax / D2R, 30);
    angArc(s, g.E, 0, g.al / D2R, 30);
    angArc(s, g.T1, 180 + g.al / D2R, 270, 16);
    // θ_max outside the face, in the cone's angle; α inside, on its bisector
    lab(s, '<i>θ</i><sub>max</sub>', polar(g.E, 30, 180 + g.tmax / D2R / 2), [[-1, 0.3], [-1, 0.6], [-1, 0]], { dmin: 12, dmax: 40 });
    lab(s, '<i>α</i>', g.E, [g.al / D2R / 2, g.al / D2R / 2 - 3, g.al / D2R / 2 + 3].map((a) => polar([0, 0], 1, a)), { dmin: 36, dmax: 70 });
    // 90° − α has no room inside its own angle: it stands in the cladding over
    // it, joined to its arc by a fine line, as in the book
    const lead = polar(g.T1, 16, 240), at90: P = [g.T1[0] - 36, top - clad + 18.5];
    s.sym(at90[0], at90[1], '90° − <i>α</i>', { size: 14 });
    path(s, [[at90[0] + 12, at90[1] + 5], lead], { color: C.grey, w: 1, free: true });
    s.add(`<circle cx="${r1(lead[0])}" cy="${r1(lead[1])}" r="1.8" fill="${C.slate}"/>`);
    region(s, 8, 20, 'Air', '');
    region(s, xEnd, top - clad + 4, 'Cladding', '(<i>n</i><sub>2</sub> < <i>n</i><sub>1</sub>)', { anchor: 'end' });
    region(s, 96, bot + 4, 'Cladding', '(<i>n</i><sub>2</sub> < <i>n</i><sub>1</sub>)');
    region(s, 236, top + 7, 'Core', '(<i>n</i><sub>1</sub>)');
    s.place([{ t: 'Total internal reflection', hi: true, p: g.T2, at: [[W - 6, bot + clad + 6, 'end'], [W - 30, bot + clad + 6, 'end']] }]);
    return s;
  },
  check() {
    const g = geo96(), s = fig96.draw(fig96.cases[0]), { n1, n2, inside } = G96;
    const wall = 90 - g.al / D2R, refl = between(sub(g.T1, g.E), sub(g.T2, g.T1));
    const alMax = Math.asin(g.NA / n1), wallMax = 90 - alMax / D2R;
    // Topic 02, worked example 4: n₁ = 1.50, n₂ = 1.46
    const NA4 = Math.sqrt(1.5 ** 2 - 1.46 ** 2), t4 = Math.asin(NA4) / D2R;
    return [
      [`Acceptance half-angle: sin θ_max = √(n₁² − n₂²) = ${fmt(g.NA, 4)} for n₁ = ${n1}, n₂ = ${n2}: θ_max = ${fmt(g.tmax / D2R, 2)}°`, close(Math.sin(g.tmax), Math.sqrt(n1 * n1 - n2 * n2), 1e-12)],
      [`The ray is drawn ${inside}° inside the cone, at θ = ${fmt(g.th / D2R, 2)}°; the cone's edge at θ_max is the dashed line`, close(g.tmax / D2R - g.th / D2R, inside, 1e-9) && g.th < g.tmax],
      [`Snell at the end face: sin θ = n₁ sin α gives α = ${fmt(g.al / D2R, 2)}°, the ray bending toward the axis`, close(Math.sin(g.th), n1 * Math.sin(g.al), 1e-12) && g.al < g.th],
      [`It meets the core–cladding wall at 90° − α = ${fmt(wall, 2)}° to the wall's normal, more than the critical angle C = arcsin(n₂/n₁) = ${fmt(g.Cc / D2R, 2)}°: total internal reflection (the limiting ray at θ_max would meet it at exactly ${fmt(wallMax, 2)}° = C)`, wall > g.Cc / D2R && close(wallMax, g.Cc / D2R, 1e-9)],
      [`Each reflection is mirror-like: the ray turns through 180° − 2α = ${fmt(refl, 2)}° at the wall and runs on at α, top to bottom and back`, close(refl, 2 * (g.al / D2R), 1e-9) && close(g.T2[1] - g.T1[1], G96.bot - G96.top)],
      [`Worked example 4: n₁ = 1.50, n₂ = 1.46 give NA = ${fmt(NA4, 3)} and θ_max = ${fmt(t4, 1)}° (the book's 0.344 and 20.1°)`, fmt(NA4, 3) === '0.344' && fmt(t4, 1) === '20.1'],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.7 · refraction at a convex spherical surface (topic 03)       */
/* ===================================================================== */
/**
 * The paraxial derivation's figure, drawn to scale along the axis: n₁ = 1,
 * n₂ = 2, R = +52 px, u = −2.5R = −130 px, and n₂/v − n₁/u = (n₂ − n₁)/R puts I
 * at v = +173.3 px. (With glass, n₂ = 1.5, the image would lie about ten radii
 * away and the surface would be a dot on a phone; the book's own drawing
 * needs n₂ ≈ 4n₁ to be consistent.) The ray meets the surface at M, 20 px above
 * the axis, and is drawn on to I: the derivation's small-angle forms
 * α ≈ h/(−u), β ≈ h/v, θ ≈ h/R satisfy n₁(α + θ) = n₂(θ − β) exactly, and the
 * check measures how far exact Snell at M differs (about 1°, the paraxial
 * error at h = 0.38R).
 */
const G97 = { H: 236, y0: 112, Ox: 18, n1: 1, n2: 2, R: 52, uR: -2.5, h: 20, span: 42 };
function geo97() {
  const { y0, Ox, n1, n2, R, uR, h } = G97, u = uR * R, v = n2 / ((n2 - n1) / R + n1 / u);
  const O: P = [Ox, y0], Pp: P = [Ox - u, y0], Cc: P = [Pp[0] + R, y0], I: P = [Pp[0] + v, y0];
  const M: P = [arcX(Cc, R, -1, -h), y0 - h];
  const al = Math.atan2(h, M[0] - O[0]), th = Math.atan2(h, Cc[0] - M[0]), be = Math.atan2(h, I[0] - M[0]);
  return { u, v, O, P: Pp, C: Cc, I, M, al, th, be, i: al + th, r: th - be };
}
const fig97: Diagram = {
  id: 'p12-09-fig-9.7',
  topic: 2,
  name: 'Refraction at a spherical surface',
  cases: [{ chip: 'Convex surface', cap: 'Refraction at a convex spherical surface separating <i>n</i><sub>1</sub> (left) from <i>n</i><sub>2</sub> (right): object <i>O</i>, pole <i>P</i>, centre of curvature <i>C</i>, radius <i>R</i>, image <i>I</i>, and the angles of incidence <i>i</i> and refraction <i>r</i>.' }],
  draw() {
    const s = new Sketch(W, G97.H);
    const g = geo97(), { y0, R, span } = G97, dimU = y0 + 38, dimR = y0 + 72;
    path(s, [[6, y0], [W - 6, y0]], { color: C.grey, w: 1.2 });
    path(s, arcAt(g.C, R, -1, -span, span), { w: 2.2 });
    // the normal at M: the radius CM, on past M
    path(s, [g.C, add(g.M, unit(sub(g.M, g.C)), 48)], { color: C.slate, w: 1.1, dash: 'dash' });
    ray(s, [g.O, g.M], { at: 0.6 });
    ray(s, [g.M, g.I], { color: C.mari, w: 1.8, at: 0.6 });
    [g.O, g.P, g.C, g.I, g.M].forEach((p) => s.dot(p[0], p[1], 2.8));
    const deg = (x: number) => x / D2R;
    angArc(s, g.O, 0, deg(g.al), 52);
    angArc(s, g.C, 180 - deg(g.th), 180, 17);
    angArc(s, g.I, 180 - deg(g.be), 180, 50);
    const nOut = angOf(sub(g.M, g.C)), toO = angOf(sub(g.O, g.M)), toC = angOf(sub(g.C, g.M)), toI = angOf(sub(g.I, g.M));
    angArc(s, g.M, nOut, toO, 22);
    angArc(s, g.M, toC, toI, 32);
    dimH(s, g.O[0], g.P[0], dimU);
    dimH(s, g.P[0], g.I[0], dimU);
    dimH(s, g.P[0], g.C[0], dimR, C.mari);
    lab(s, '<i>O</i>', g.O, [[0.3, 1], [0, 1]]);
    lab(s, '<i>P</i>', g.P, [[-0.5, 1], [-1, 1]]);
    lab(s, '<i>C</i>', g.C, [[0.2, 1], [0, 1]]);
    lab(s, '<i>I</i>', g.I, [[0, 1], [-0.3, 1]]);
    lab(s, '<i>M</i>', g.M, [[0, -1], [0.3, -1], [-0.3, -1]], { size: 14 });
    lab(s, '<i>α</i>', polar(g.O, 52, deg(g.al) / 2), [[1, -0.2], [1, -1], [0.4, -1]], { size: 14, dmin: 4 });
    // θ and r have no room inside their own narrow angles (C is only 52 px from M):
    // θ stands just under its arc, r just over the refracted ray at its arc's end
    lab(s, '<i>θ</i>', polar(g.C, 17, 180 - deg(g.th) / 2), [[0, 1], [-0.3, 1], [0.3, 1]], { size: 14, dmin: 4, dmax: 30 });
    lab(s, '<i>β</i>', polar(g.I, 50, 180 - deg(g.be) / 2), [[-1, -0.2], [-1, -1], [-0.4, -1]], { size: 14, dmin: 4 });
    const iMid = nOut + turn(nOut, toO) / 2;
    lab(s, '<i>i</i>', g.M, [polar([0, 0], 1, iMid)], { size: 14, dmin: 26, dmax: 60 });
    lab(s, '<i>r</i>', polar(g.M, 32, toI), [[0.3, -1], [0, -1], [0.6, -1]], { size: 14, dmin: 4, dmax: 24 });
    lab(s, '<i>u</i>', [(g.O[0] + g.P[0]) / 2, dimU], [[0, 1]], { dmin: 11 });
    lab(s, '<i>v</i>', [(g.P[0] + g.I[0]) / 2, dimU], [[0, 1]], { dmin: 11 });
    lab(s, '<i>R</i>', [(g.P[0] + g.C[0]) / 2, dimR], [[0, 1]], { dmin: 11, color: C.amber });
    lab(s, '<i>n</i><sub>1</sub>', [g.P[0] - 60, 24], [[0, 1]], { size: 16, dmin: 0 });
    lab(s, '<i>n</i><sub>2</sub>', [g.P[0] + 70, 24], [[0, 1]], { size: 16, dmin: 0 });
    return s;
  },
  check() {
    const g = geo97(), s = fig97.draw(fig97.cases[0]), { n1, n2, R, h } = G97;
    const deg = (x: number) => x / D2R;
    const iS = deg(g.i), rDrawn = deg(g.r), rSnell = deg(Math.asin((n1 * Math.sin(g.i)) / n2));
    // the drawn angles, read off the drawing's own lines
    const iRead = between(sub(g.M, g.O), sub(g.C, g.M)), rRead = between(sub(g.I, g.M), sub(g.C, g.M));
    const a0 = h / -g.u, b0 = h / g.v, t0 = h / R;
    // Topic 03, worked example 1: n₁ = 1, n₂ = 1.5, R = +10 cm, u = −50 cm
    const v1 = 1.5 / (0.5 / 10 + 1 / -50);
    return [
      [`n₂/v − n₁/u = (n₂ − n₁)/R with n₁ = ${n1}, n₂ = ${n2}, R = +${R} px, u = ${fmt(g.u)} px gives v = +${fmt(g.v, 2)} px: a real image I on the n₂ side`, close(n2 / g.v - n1 / g.u, (n2 - n1) / R, 1e-12) && g.v > 0],
      ['O, P, C, I lie on the axis in that order; C is on the outgoing side (R > 0, convex towards the light) and M is on the surface', g.O[0] < g.P[0] && g.P[0] < g.C[0] && g.C[0] < g.I[0] && close(len(g.M, g.C), R, 1e-9)],
      [`The drawn angles: i = α + θ = ${fmt(iS, 2)}° (exterior angle of triangle OMC) and r = θ − β = ${fmt(rDrawn, 2)}° (triangle MIC), as measured off the lines (${fmt(iRead, 2)}°, ${fmt(rRead, 2)}°)`, close(iRead, iS, 1e-9) && close(rRead, rDrawn, 1e-9)],
      [`The derivation's paraxial forms α ≈ h/(−u), β ≈ h/v, θ ≈ h/R satisfy n₁(α + θ) = n₂(θ − β) exactly (${fmt(n1 * (a0 + t0), 4)} = ${fmt(n2 * (t0 - b0), 4)})`, close(n1 * (a0 + t0), n2 * (t0 - b0), 1e-12)],
      [`A schematic, paraxial in spirit: exact Snell at M would give r = ${fmt(rSnell, 2)}° against the drawn ${fmt(rDrawn, 2)}° (h = ${fmt(h / R, 2)}R)`, Math.abs(rSnell - rDrawn) < 1.2],
      [`Worked example 1: 1.5/v − 1/(−50) = 0.5/10 gives v = +${fmt(v1)} cm (the book's +50 cm, inside the rod)`, close(v1, 50, 1e-9)],
      ...layout(s),
    ];
  },
};

export const DIAGRAMS_PHYSICS_12_09: Diagram[] = [fig91, fig92, fig93, fig94, fig95, fig96, fig97];

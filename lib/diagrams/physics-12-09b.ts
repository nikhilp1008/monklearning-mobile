import { C, LABEL_GAP, Rect, Sketch, TagSpec, crosses, mathW, r1, tagW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 9 (Ray Optics), SECOND HALF: Figures 9.8–9.17 of
 * the Master Reference book, redrawn. Each is printed on a "CHAPTER 9 ·
 * FIGURES" page (9.8 on p. 585, 9.9 on p. 588, 9.10 on p. 593, 9.11 on p. 595,
 * 9.12 on p. 597, 9.13 on p. 599, 9.14 and 9.15 on p. 605, 9.16 and 9.17 on
 * p. 608); the first copy of each caption sits a page earlier, where the text
 * refers to it, with "(see next page)", which the captions here leave out.
 * Topics 04–06 and Additional topics A–F (pp. 584–633) have no unnumbered
 * drawings: every other page is prose, typeset equations, boxed results and
 * tables (the image-formation table on p. 586), all checked page by page.
 *
 * Topic indices: Topic 04 (thin lenses) is 3, Topic 05 (prism) 4, Topic 06
 * (optical instruments) 5.
 *
 * Every figure is computed, never placed by eye. Lenses are ideal thin lenses:
 * a ray meeting the lens at height y leaves with its slope changed by −y/f,
 * so every ray from an object point passes exactly through the image point the
 * lens formula 1/v − 1/u = 1/f gives (New Cartesian signs: u < 0 for a real
 * object on the left). A paraxial drawing may be stretched vertically without
 * changing where rays meet, so heights are chosen to read on a phone. Prisms
 * are traced with Snell's law, n₁ sin i = n₂ sin r, at each face, the angles
 * taken from the vectors; the Newtonian primary is a paraboloid (every
 * parallel ray reflects exactly to F) and the flat mirror reflects by the law
 * of reflection. Each `check` recomputes what the figure and its caption state
 * and measures that no label or tag touches a line it does not name.
 */

const W = 340;
type P = [number, number];
type Spot = [number, number, 'start' | 'middle' | 'end'];
const D2R = Math.PI / 180;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
const unit = (a: P): P => { const l = Math.hypot(a[0], a[1]); return [a[0] / l, a[1] / l]; };
const lerp = (a: P, b: P, t: number): P => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
/** A point at math angle `deg` (counter-clockwise, y up) and distance R from c, on the y-down drawing. */
const polar = (c: P, R: number, deg: number): P => [c[0] + R * Math.cos(deg * D2R), c[1] - R * Math.sin(deg * D2R)];
/** The math angle (degrees, counter-clockwise, y up) of a drawn direction. */
const angOf = (u: P) => Math.atan2(-u[1], u[0]) / D2R;
/** The angle between two directions, 0–180°. */
const between = (a: P, b: P) => Math.acos(Math.max(-1, Math.min(1, dotp(unit(a), unit(b))))) / D2R;
/** Where the lines p + t·d and q + s·e meet. */
const meet = (p: P, d: P, q: P, e: P): P => { const den = d[0] * e[1] - d[1] * e[0], t = ((q[0] - p[0]) * e[1] - (q[1] - p[1]) * e[0]) / den; return add(p, d, t); };
/** Distance from p to the infinite line through a along d. */
const lineDist = (p: P, a: P, d: P) => { const u = unit(d); return Math.abs((p[0] - a[0]) * u[1] - (p[1] - a[1]) * u[0]); };

/* ---------- drawing helpers (as in physics-12-07.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/** Every line a label must keep clear of, by sketch (see `clearance`). Dotted guides and ticks are left out (`free`). */
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
/** Every arrowhead drawn, by sketch, as its tip and its middle: a tag's dot keeps off them (`dotsOffHeads`). */
const HEADS = new WeakMap<Sketch, [P, P][]>();
/** Every arrowhead as the triangle drawn, by sketch. */
const INKS = new WeakMap<Sketch, P[][]>();
const headTri = (tip: P, u: P, L = 9, hw = 4.5): P[] => { const b = add(tip, u, -L), nv: P = [-u[1], u[0]]; return [tip, add(b, nv, hw), add(b, nv, -hw)]; };
const keepHead = (s: Sketch, tip: P, u: P, L: number, hw = 4.5) => {
  HEADS.set(s, [...(HEADS.get(s) ?? []), [tip, add(tip, u, -L / 2)]]);
  INKS.set(s, [...(INKS.get(s) ?? []), headTri(tip, u, L, hw)]);
};
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
/** A tag's dot: Sketch.tag draws it 2.6 px in radius. */
const DOT_R = 2.6;
/** A small arrowhead at p, pointing along the unit direction u. */
function head(s: Sketch, p: P, u: P, color: string = C.ink, L = 9, hw = 4.5) {
  const tri = headTri(p, u, L, hw);
  s.add(`<path d="M${tri.map((q) => `${r1(q[0])} ${r1(q[1])}`).join(' L')} Z" fill="${color}"/>`);
  keep(s, [...tri, tri[0]]);
  keepHead(s, p, u, L, hw);
}
/** A ray's arrowhead, centred at the fraction t of the segment a–b, pointing along it. */
const rayHead = (s: Sketch, a: P, b: P, t = 0.5, color: string = C.ink) => { const u = unit(sub(b, a)); head(s, add(lerp(a, b, t), u, 4), u, color, 8, 3.8); };
/** The points of an arc about c, radius R, from math angle a0 to a1 (degrees). */
const arcPts = (c: P, R: number, a0: number, a1: number, n = 60): P[] => samples(a0, a1, n).map((a) => polar(c, R, a));
/** An angle's arc at c, radius R, from direction u to direction v (the short way round). */
function angleArc(s: Sketch, c: P, R: number, u: P, v: P, o: Stroke = {}) {
  const a0 = angOf(u);
  let d = angOf(v) - a0;
  while (d > 180) d -= 360;
  while (d < -180) d += 360;
  path(s, arcPts(c, R, a0, a0 + d, 40), { color: o.color ?? C.slate, w: o.w ?? 1.4, free: o.free });
  return polar(c, R, a0 + d / 2);
}
/** A dotted or dashed guide, free of the clearance check, but never through a label or a tag (`guideHits`). */
const GUIDES = new WeakMap<Sketch, [P, P][]>();
const guide = (s: Sketch, a: P, b: P, color: string = C.slate, dash: 'dot' | 'dash' = 'dot', w = 1.1) => {
  GUIDES.set(s, [...(GUIDES.get(s) ?? []), [a, b]]);
  path(s, [a, b], { color, w, dash, free: true });
};
/** Distance from a point to a rectangle (0 inside it). */
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
const inRect = (p: P, r: Rect) => p[0] >= r[0] && p[0] <= r[2] && p[1] >= r[1] && p[1] <= r[3];
/** Distance from a segment to a rectangle (0 if it enters it). */
const segRect = (a: P, b: P, r: Rect) => {
  if (inRect(a, r) || inRect(b, r) || crosses(a, b, r, 0)) return 0;
  const cs: P[] = [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]];
  return Math.min(rectDist(r, a), rectDist(r, b), ...cs.map((c) => distSeg(c, a, b)));
};
const overlap = (a: Rect, b: Rect, m = 0) => !(a[2] + m <= b[0] || b[2] + m <= a[0] || a[3] + m <= b[1] || b[3] + m <= a[1]);
/** The closest any kept line comes to the rectangle. */
const lineGap = (s: Sketch, r: Rect) => {
  let g = Infinity;
  for (const pts of LINES.get(s) ?? []) for (let i = 1; i < pts.length; i++) g = Math.min(g, segRect(pts[i - 1], pts[i], r));
  return g;
};
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
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  const through = guideHits(s);
  return [
    `Every tag and label stays at least ${LABEL_GAP} px clear of every line: the closest is "${what}", ${fmt(gap, 1)} px; no dotted guide runs through one${through.length ? ` (but through ${through.map((t) => `"${t}"`).join(', ')})` : ''}`,
    gap >= LABEL_GAP - 1e-9 && !through.length,
  ];
};
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => overlap(a.rect, b.rect, 2)).map((b) => `${a.text} / ${b.text}`));
  return [`No two symbols or labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
const dotsOffHeads = (s: Sketch): Check => {
  const bad = s.tags.filter((t) => t.from && (HEADS.get(s) ?? []).some((h) => h.some((q) => len(q, t.from as P) < 8))).map((t) => t.name);
  return [`No tag's dot sits on an arrowhead${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
const HEAD_CLEAR = 6;
const dotClear = (s: Sketch, at: P) => Math.min(Infinity, ...(INKS.get(s) ?? []).map((t) => triDist(t, at))) - DOT_R;
const dotsClearOfHeads = (s: Sketch): Check => {
  const nr = s.tags.filter((t) => t.from).map((t) => ({ name: t.name, gap: dotClear(s, t.from as P) })).sort((a, b) => a.gap - b.gap);
  return [`Every tag's dot keeps at least ${HEAD_CLEAR} px clear of every arrowhead${nr.length ? `: the closest is "${nr[0].name}", ${fmt(nr[0].gap, 1)} px` : ''}`, nr.every((n) => n.gap >= HEAD_CLEAR - 1e-9)];
};
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
/** The layout checks of a drawn sketch. */
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), dotsOffHeads(s), dotsClearOfHeads(s), inFrame(s)];
/** The result (what the figure states), bottom right, ink-edged, maths set in STIX. Registered as a tag. */
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

/* ---------- placing labels and tags clear of the lines ---------- */
/** The box Sketch.sym registers for a label. */
const symRect = (x: number, y: number, html: string, size: number, anchor: Spot[2]): Rect => {
  const w = html.replace(/<[^>]+>/g, '').length * size * 0.5, x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  return [x0, y - size * 0.72, x0 + w, y + size * 0.22];
};
/**
 * A symbol on the drawing at the first of its spots that is inside the frame,
 * at least LABEL_GAP + 0.5 px from every kept line, clear of every other label,
 * tag, point and guide. Lines are drawn first, then labels, then tags. With no
 * clear spot it takes the first, and the layout checks name it.
 */
function label(s: Sketch, html: string, spots: Spot[], o: { size?: number; color?: string } = {}): Spot {
  const size = o.size ?? 15;
  const ok = (sp: Spot) => {
    const r = symRect(sp[0], sp[1], html, size, sp[2]);
    if (r[0] < 1 || r[2] > s.w - 1 || r[1] < 1 || r[3] > s.h - 1) return false;
    if (lineGap(s, r) < LABEL_GAP + 0.5) return false;
    if (s.labels.some((l) => overlap(r, l.rect, 3))) return false;
    if (s.tags.some((t) => overlap(r, t.rect, LABEL_GAP + 1))) return false;
    if (s.points.some((p) => rectDist(r, [p.x, p.y]) < p.r + 2)) return false;
    if ((GUIDES.get(s) ?? []).some(([a, b]) => segRect(a, b, r) < 2)) return false;
    return true;
  };
  const sp = spots.find(ok) ?? spots[0];
  s.sym(sp[0], sp[1], html, { size, anchor: sp[2], color: o.color });
  return sp;
}
type Dir = 'a' | 'b' | 'l' | 'r' | 'al' | 'ar' | 'bl' | 'br';
/** Spots round a point for a label of this size, in the order of the directions given, nearest first. */
const around = (p: P, dirs: Dir[], size = 15, ds = [8, 11, 15, 20, 26]): Spot[] =>
  ds.flatMap((d) => dirs.map((k): Spot => {
    const up = p[1] - d, dn = p[1] + d + size * 0.72, mid = p[1] + size * 0.3;
    switch (k) {
      case 'a': return [p[0], up, 'middle'];
      case 'b': return [p[0], dn, 'middle'];
      case 'l': return [p[0] - d, mid, 'end'];
      case 'r': return [p[0] + d, mid, 'start'];
      case 'al': return [p[0] - d * 0.6, up, 'end'];
      case 'ar': return [p[0] + d * 0.6, up, 'start'];
      case 'bl': return [p[0] - d * 0.6, dn, 'end'];
      default: return [p[0] + d * 0.6, dn, 'start'];
    }
  }));
/** Spots for a tag naming p, in the order of the directions given, nearest first. */
const tagSpots = (p: P, dirs: Dir[], ds = [16, 24, 32, 42, 54, 68, 84]): Spot[] =>
  ds.flatMap((d) => dirs.map((k): Spot => {
    switch (k) {
      case 'a': return [p[0], p[1] - d - 22, 'middle'];
      case 'b': return [p[0], p[1] + d, 'middle'];
      case 'l': return [p[0] - d, p[1] - 11, 'end'];
      case 'r': return [p[0] + d, p[1] - 11, 'start'];
      case 'al': return [p[0] - d * 0.7, p[1] - d - 22, 'end'];
      case 'ar': return [p[0] + d * 0.7, p[1] - d - 22, 'start'];
      case 'bl': return [p[0] - d * 0.7, p[1] + d, 'end'];
      default: return [p[0] + d * 0.7, p[1] + d, 'start'];
    }
  }));
/** Place tags (Sketch.place), each only at spots whose pill keeps LABEL_GAP + 0.5 px from every kept line and every guide. */
function tags(s: Sketch, specs: TagSpec[]) {
  const clear = (t: string, at: Spot) => {
    const w = tagW(t), x0 = at[2] === 'middle' ? at[0] - w / 2 : at[2] === 'end' ? at[0] - w : at[0], r: Rect = [x0, at[1], x0 + w, at[1] + 22];
    return lineGap(s, r) >= LABEL_GAP + 0.5 && !(GUIDES.get(s) ?? []).some(([a, b]) => segRect(a, b, r) < 2);
  };
  s.place(specs.map((sp) => { const at = sp.at.filter((a) => clear(sp.t, a)); return { ...sp, at: at.length ? at : sp.at }; }));
}

/* ---------- optics ---------- */
/** The drawn rays and parts of a sketch, by name (page coordinates), so a check reads them back. */
const DRAWN = new WeakMap<Sketch, Record<string, P[]>>();
const rec = (s: Sketch, name: string, pts: P[]) => { DRAWN.set(s, { ...(DRAWN.get(s) ?? {}), [name]: pts }); };
const got = (s: Sketch, name: string): P[] => (DRAWN.get(s) ?? {})[name] ?? [];
/** A thin lens's image: 1/v − 1/u = 1/f, m = v/u (New Cartesian signs). */
const lensImage = (u: number, f: number) => { const v = 1 / (1 / f + 1 / u); return { v, m: v / u }; };
/**
 * A ray through thin lenses on the axis y = 0 (physics frame: x right, y up):
 * from `from` with slope `slope`, at each lens (in order) its slope changes by
 * −y/f; it ends at x = xEnd. Returns the points: start, each lens, end.
 */
function trace(from: P, slope: number, lenses: { x: number; f: number }[], xEnd: number): P[] {
  const pts: P[] = [from];
  let [x, y] = from, m = slope;
  for (const L of lenses) { y += m * (L.x - x); x = L.x; pts.push([x, y]); m -= y / L.f; }
  pts.push([xEnd, y + m * (xEnd - x)]);
  return pts;
}
/** Slope of a segment in the physics frame. */
const slopeOf = (a: P, b: P) => (b[1] - a[1]) / (b[0] - a[0]);
/** Does the line through a and b pass through p (physics frame)? */
const through = (a: P, b: P, p: P, tol = 1e-9) => Math.abs(a[1] + slopeOf(a, b) * (p[0] - a[0]) - p[1]) < tol;
/** A biconvex lens: two arcs (drawn as parabolas) bulging b each side of x, half-height H, never filled. */
function lens(s: Sketch, x: number, y: number, H: number, b = 6, o: Stroke = {}) {
  const t = samples(-1, 1, 40);
  const right = t.map((k): P => [x + b * (1 - k * k), y + H * k]), left = t.slice().reverse().map((k): P => [x - b * (1 - k * k), y + H * k]);
  outline(s, [...right, ...left.slice(1, -1)], { w: o.w ?? 1.6, color: o.color });
}
/** A biconvex lens lying across a vertical axis (the Newtonian's eyepiece). */
function lensAcross(s: Sketch, x: number, y: number, H: number, b = 5) {
  const t = samples(-1, 1, 40);
  const top = t.map((k): P => [x + H * k, y - b * (1 - k * k)]), bot = t.slice().reverse().map((k): P => [x + H * k, y + b * (1 - k * k)]);
  outline(s, [...top, ...bot.slice(1, -1)], { w: 1.6 });
}
/** An eye: its outline and pupil (the pupil a point tags keep clear of). */
function eye(s: Sketch, c: P, pupil: P, rx = 15, ry = 10) {
  outline(s, samples(0, 2 * Math.PI, 60).slice(0, -1).map((t): P => [c[0] + rx * Math.cos(t), c[1] + ry * Math.sin(t)]), { w: 1.5 });
  s.dot(pupil[0], pupil[1], 4);
}
/** A dimension line a–b (horizontal), grey, with a head at each end and end ticks. */
function dim(s: Sketch, a: P, b: P) {
  path(s, [a, b], { color: C.slate, w: 1.1 });
  const u = unit(sub(b, a));
  head(s, a, [-u[0], -u[1]], C.slate, 6, 2.8);
  head(s, b, u, C.slate, 6, 2.8);
  path(s, [[a[0], a[1] - 5], [a[0], a[1] + 5]], { color: C.slate, w: 1.2 });
  path(s, [[b[0], b[1] - 5], [b[0], b[1] + 5]], { color: C.slate, w: 1.2 });
}
/** Refraction by Snell's law: d the incident direction, nrm the unit normal facing the incident side (nrm·d < 0). Null past the critical angle. */
function refract(d: P, nrm: P, n1: number, n2: number): P | null {
  const eta = n1 / n2, ci = -dotp(nrm, d), k = 1 - eta * eta * (1 - ci * ci);
  if (k < 0) return null;
  return unit(add([eta * d[0], eta * d[1]], nrm, eta * ci - Math.sqrt(k)));
}
/** Reflection of direction d in a surface with unit normal nrm. */
const reflect = (d: P, nrm: P): P => add(d, nrm, -2 * dotp(d, nrm));
/** sin θ₁ / sin θ₂ for a refraction, the angles measured from the normal. */
const snellRatio = (d1: P, d2: P, nrm: P) => Math.sin(between(d1, nrm) * D2R) / Math.sin(between(d2, nrm) * D2R);
/**
 * A ray through a prism (corners apex, bl, br; drawn y down): it meets the face
 * apex–bl at `entry` going along d0, refracts in, crosses to the face apex–br,
 * and refracts out. Normals point out of the glass.
 */
function prismRay(apex: P, bl: P, br: P, entry: P, d0: P, n: number) {
  const fl = unit(sub(bl, apex)), fr = unit(sub(br, apex));
  // the outward normals: perpendicular to each face, pointing away from the prism's inside
  const inside: P = [(apex[0] + bl[0] + br[0]) / 3, (apex[1] + bl[1] + br[1]) / 3];
  const outN = (f: P, on: P): P => { const nn: P = [-f[1], f[0]]; return dotp(nn, sub(inside, on)) > 0 ? [-nn[0], -nn[1]] : nn; };
  const nL = outN(fl, apex), nR = outN(fr, apex);
  const d1 = refract(d0, nL, 1, n) as P;
  const exit = meet(entry, d1, apex, fr);
  const d2 = refract(d1, [-nR[0], -nR[1]], n, 1);
  return { nL, nR, d1, exit, d2 };
}

/* ===================================================================== */
/* Figures 9.8 and 9.9 · images by a convex lens (topic 04)              */
/* ===================================================================== */
/**
 * Two ray diagrams on one plan. Fig 9.8 is drawn to the book's own proportions
 * (object at u = −3f): f = 20 cm, u = −60 cm, so v = +30 cm and m = −0.5, the
 * image between F and 2F. Fig 9.9 is drawn to the topic's worked example 1
 * (p. 587): f = 20 cm, u = −30 cm, so v = +60 cm and m = −2, beyond 2F. Rays
 * are traced through the thin lens (slope − y/f), not aimed at the image: that
 * they meet at B′ is what the check proves.
 */
/** A lens figure's plan: f, u, h in cm; k, ky px per cm; dims = how far below the axis u and v are marked (0: not marked). */
type LensFig = { f: number; u: number; h: number; k: number; ky: number; ox: number; oy: number; lensH: number; H: number; xs: number[]; rays: number; dims: number };
const G98: LensFig = { f: 20, u: -60, h: 16, k: 3, ky: 3, ox: 198, oy: 112, lensH: 64, H: 274, xs: [-40, -20, 20, 40], rays: 2, dims: 78 };
const G99: LensFig = { f: 20, u: -30, h: 10, k: 2.5, ky: 2.5, ox: 160, oy: 90, lensH: 62, H: 232, xs: [-40, -20, 20, 40], rays: 3, dims: 0 };
const lensGeom = (g: LensFig) => {
  const X = (x: number) => g.ox + g.k * x, Y = (y: number) => g.oy - g.ky * y;
  const pg = (p: P): P => [X(p[0]), Y(p[1])];
  const { v, m } = lensImage(g.u, g.f);
  const B: P = [g.u, g.h], Bi: P = [v, m * g.h];
  const L = [{ x: 0, f: g.f }];
  const rays = [trace(B, 0, L, v), trace(B, g.h / g.u, L, v), trace(B, (0 - g.h) / (-g.f - g.u), L, v)].slice(0, g.rays);
  return { X, Y, pg, v, m, B, Bi, rays };
};
/** From the drawn page points back to the physics frame. */
const toPhys = (g: LensFig, p: P): P => [(p[0] - g.ox) / g.k, (g.oy - p[1]) / g.ky];
function drawLensFig(g: LensFig, o: { result: string; imageTag: string }) {
  const s = new Sketch(W, g.H);
  const { X, Y, pg, v, m, B, Bi, rays } = lensGeom(g);
  path(s, [[8, g.oy], [W - 8, g.oy]], { color: C.grey, w: 1.2 });
  lens(s, X(0), g.oy, g.lensH, 6);
  rays.forEach((r, i) => {
    const pts = r.map(pg);
    path(s, pts, { w: 1.5 });
    rec(s, `ray${i + 1}`, pts);
    rayHead(s, pts[0], pts[1], i === 2 ? 0.56 : 0.5);
    rayHead(s, pts[1], pts[2], i === 0 && g.rays === 2 ? 0.4 : 0.55);
  });
  // the object and its image
  path(s, [[X(g.u), g.oy], pg(B)], { w: 2.6 });
  path(s, [[X(v), g.oy], pg(Bi)], { color: C.mari, w: 2.8 });
  rec(s, 'object', [[X(g.u), g.oy], pg(B)]);
  rec(s, 'image', [[X(v), g.oy], pg(Bi)]);
  const marks: [number, string][] = [[g.u, 'A'], [v, 'A′'], ...g.xs.map((x): [number, string] => [x, `${Math.abs(x) === 2 * g.f ? '2' : ''}F`])];
  marks.forEach(([x]) => s.dot(X(x), g.oy, 3));
  s.dot(X(g.u), Y(g.h), 3);
  s.dot(X(v), Y(m * g.h), 3);
  if (g.dims) {
    const yd = g.oy + g.dims;
    dim(s, [X(g.u), yd], [X(0), yd]);
    dim(s, [X(0) + 0.01, yd], [X(v), yd]);
    label(s, '<i>u</i>', [[(X(g.u) + X(0)) / 2, yd + 20, 'middle']], { size: 16 });
    label(s, '<i>v</i>', [[(X(0) + X(v)) / 2, yd + 20, 'middle']], { size: 16, color: C.amber });
  }
  s.result(o.result);
  // the point labels, as the book prints them
  label(s, 'B', around(pg(B), g.dims ? ['al', 'l', 'a'] : ['a', 'ar', 'al']));
  label(s, 'A', around([X(g.u), g.oy], ['b', 'bl', 'br']));
  g.xs.forEach((x) => label(s, `${Math.abs(x) === 2 * g.f ? '2' : ''}F`, around([X(x), g.oy], x < 0 ? ['b', 'a', 'bl', 'al'] : ['ar', 'a', 'b', 'br', 'bl'])));
  label(s, 'O', around([X(0), g.oy], ['ar', 'r', 'br']));
  label(s, 'A′', around([X(v), g.oy], ['a', 'ar', 'al']));
  label(s, 'B′', around(pg(Bi), ['r', 'br', 'b'], 15, [7, 9, 12, 16]));
  if (g.rays === 3) {
    // the rays' numbers, beside each first segment
    rays.forEach((r, i) => {
      // ray 2's number on its second leg: on the first it would sit in the narrow wedge between rays 1 and 2 and the axis
      const a = pg(r[i === 1 ? 1 : 0]), b = pg(r[i === 1 ? 2 : 1]), mdl = lerp(a, b, [0.5, 0.3, 0.72][i]);
      label(s, `${i + 1}`, around(mdl, [['a', 'ar'], ['b', 'bl', 'br'], ['bl', 'l', 'b']][i] as Dir[], 15, [8, 11, 14, 18, 22]));
    });
  }
  tags(s, [
    g.dims
      ? { t: 'Object', p: [X(g.u), Y(g.h * 0.45)], at: tagSpots([X(g.u), Y(g.h * 0.45)], ['ar', 'a', 'al']) }
      : { t: 'Object', p: [X(g.u), Y(g.h * 0.3)], at: tagSpots([X(g.u), Y(g.h * 0.3)], ['al', 'l'], [20, 24, 28, 32]) },
    { t: 'Convex lens', p: [X(0), g.oy - g.lensH * 0.82], at: tagSpots([X(0), g.oy - g.lensH * 0.82], ['ar', 'r', 'al', 'a']) },
    // (Fig 9.8's image is short and hemmed in by the rays, the lens and B′'s label: its tag names the image at its tip.)
    g.dims
      ? { t: o.imageTag, hi: true, p: pg(Bi), at: tagSpots(pg(Bi), ['b', 'bl'], [10, 14, 18, 22, 26]) }
      : { t: o.imageTag, hi: true, p: [X(v), Y(m * g.h * 0.5)], at: tagSpots([X(v), Y(m * g.h * 0.5)], ['b', 'bl', 'l', 'br', 'r'], [16, 20, 24, 28, 32, 42, 54]) },
  ]);
  return s;
}
/** The checks both lens figures make. */
function lensChecks(g: LensFig, s: Sketch): Check[] {
  const { v, m, Bi } = lensGeom(g);
  const rays = [1, 2, 3].slice(0, g.rays).map((i) => got(s, `ray${i}`).map((p) => toPhys(g, p)));
  const B: P = [g.u, g.h], O: P = [0, 0], Fr: P = [g.f, 0], Fl: P = [-g.f, 0];
  const out: Check[] = [
    [`Lens formula 1/v − 1/u = 1/f with u = ${fmt(g.u)} cm, f = +${g.f} cm: v = ${fmt(v, 3)} cm, and m = v/u = ${fmt(m, 3)}`, close(1 / v - 1 / g.u, 1 / g.f, 1e-12) && close(m, v / g.u, 1e-12)],
    [`Every drawn ray starts at B and ends at the computed B′ = (${fmt(Bi[0], 2)}, ${fmt(Bi[1], 2)}) cm: they meet there`, rays.every((r) => len(r[0], B) < 1e-9 && len(r[r.length - 1], Bi) < 1e-9)],
    [`Ray 1 runs parallel to the axis to the lens, then passes through the far focus F (+${g.f} cm)`, close(slopeOf(rays[0][0], rays[0][1]), 0, 1e-12) && close(rays[0][1][0], 0, 1e-12) && through(rays[0][1], rays[0][2], Fr)],
    [`Ray 2 passes through the optical centre O undeviated (one slope, ${fmt(slopeOf(rays[1][0], rays[1][1]), 4)}, before and after)`, through(rays[1][0], rays[1][1], O) && close(slopeOf(rays[1][0], rays[1][1]), slopeOf(rays[1][1], rays[1][2]), 1e-12)],
  ];
  if (g.rays === 3) out.push([`Ray 3 passes through the near focus F (−${g.f} cm), then runs parallel to the axis`, through(rays[2][0], rays[2][1], Fl) && close(slopeOf(rays[2][1], rays[2][2]), 0, 1e-12)]);
  const img = got(s, 'image').map((p) => toPhys(g, p)), obj = got(s, 'object').map((p) => toPhys(g, p));
  out.push([`The drawn image A′B′ stands at x = ${fmt(img[0][0], 2)} cm, height ${fmt(img[1][1], 2)} against the object's ${fmt(obj[1][1], 2)}: ratio ${fmt(img[1][1] / obj[1][1], 3)} = m`, close(img[0][0], v, 1e-9) && close(img[1][1] / obj[1][1], m, 1e-9)]);
  return out;
}
const fig98: Diagram = {
  id: 'p12-09-fig-9.8',
  topic: 3,
  name: 'Convex lens: object beyond 2F',
  cases: [{ chip: 'Beyond 2F', cap: 'Image formed by a convex lens for an object beyond 2F. The ray parallel to the axis passes through the far focus and the ray through the optical centre goes straight on. The image A′B′ is real, inverted and diminished, lying between F and 2F; <i>u</i> and <i>v</i> are marked.' }],
  draw: () => drawLensFig(G98, { result: 'Real, inverted, diminished', imageTag: 'Real image' }),
  check() {
    const g = G98, s = drawLensFig(g, { result: 'Real, inverted, diminished', imageTag: 'Real image' }), { v, m } = lensGeom(g);
    return [
      ...lensChecks(g, s),
      [`The object is beyond 2F (|u| = ${-g.u} cm > 2f = ${2 * g.f} cm) and the image lies between F and 2F (${g.f} < v = ${fmt(v, 2)} < ${2 * g.f} cm)`, -g.u > 2 * g.f && v > g.f && v < 2 * g.f],
      [`Real (v > 0), inverted (m = ${fmt(m, 2)} < 0) and diminished (|m| < 1), as the caption says`, v > 0 && m < 0 && Math.abs(m) < 1],
      [`u is marked from A to O and v from O to A′, the lengths ${-g.u} cm and ${fmt(v, 1)} cm at the drawing's scale`, close(got(s, 'object')[0][0], g.ox + g.k * g.u, 1e-9)],
      ...layout(s),
    ];
  },
};
const fig99: Diagram = {
  id: 'p12-09-fig-9.9',
  topic: 3,
  name: 'Three principal rays through a convex lens',
  cases: [{ chip: 'Between F and 2F', cap: 'The three principal rays from the tip B of an object between F and 2F: (1) parallel to the axis, then through the far focus; (2) through the optical centre, undeviated; (3) through the near focus, then parallel to the axis. They meet at B′, giving a real, inverted, magnified image beyond 2F.' }],
  draw: () => drawLensFig(G99, { result: 'Real, inverted, magnified', imageTag: 'Real image' }),
  check() {
    const g = G99, s = drawLensFig(g, { result: 'Real, inverted, magnified', imageTag: 'Real image' }), { v, m } = lensGeom(g);
    return [
      ...lensChecks(g, s),
      [`Worked example 1 (p. 587): u = −30 cm, f = 20 cm give v = ${fmt(v, 3)} cm and m = ${fmt(m, 3)} (the book's +60 cm and −2)`, close(v, 60, 1e-9) && close(m, -2, 1e-9)],
      [`The object is between F and 2F (${g.f} < |u| = ${-g.u} < ${2 * g.f} cm) and the image beyond 2F (v = ${fmt(v, 1)} > ${2 * g.f} cm)`, -g.u > g.f && -g.u < 2 * g.f && v > 2 * g.f],
      [`Real, inverted and magnified (v > 0, m = ${fmt(m, 2)}, |m| > 1)`, v > 0 && m < 0 && Math.abs(m) > 1],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.10 · dispersion by a prism (topic 05)                         */
/* ===================================================================== */
/**
 * An equilateral prism (A = 60°). White light meets the first face at the
 * angle that gives the middle colour (n = 1.55) minimum deviation, so it runs
 * parallel to the base inside, as the book draws it. Seven colours are traced
 * by Snell's law at both faces with n from 1.50 (red) to 1.60 (violet): the
 * spread is exaggerated, as the caption says (crown glass spreads n by about
 * 0.01). The arc between the emergent red and violet rays is centred where
 * their lines meet, so it measures the angle between them, δ_V − δ_R.
 */
const G910 = { apex: [150, 34] as P, side: 144, t: 0.6, nR: 1.5, nV: 1.6, colours: 7, back: 96, endX: 298, arcX: 268, H: 214 };
const g910 = () => {
  const { apex, side, t, nR, nV, colours } = G910;
  const bl: P = [apex[0] - side / 2, apex[1] + side * Math.cos(30 * D2R)], br: P = [apex[0] + side / 2, bl[1]];
  const entry = lerp(apex, bl, t);
  const nMid = (nR + nV) / 2, iDeg = Math.asin(nMid * Math.sin(30 * D2R)) / D2R;
  // the incident direction: the inward normal of the first face (30° below the horizontal) turned up by i
  const d0: P = [Math.cos((iDeg - 30) * D2R), -Math.sin((iDeg - 30) * D2R)];
  const ns = Array.from({ length: colours }, (_, j) => nR + ((nV - nR) * j) / (colours - 1));
  const rays = ns.map((n) => {
    const r = prismRay(apex, bl, br, entry, d0, n), d2 = r.d2 as P;
    const end = add(r.exit, d2, (G910.endX - r.exit[0]) / d2[0]);
    return { n, ...r, d2, end, dev: between(d0, d2) };
  });
  return { bl, br, entry, d0, iDeg, rays, start: add(entry, d0, -G910.back) };
};
const fig910: Diagram = {
  id: 'p12-09-fig-9.10',
  topic: 4,
  name: 'Dispersion by a prism',
  cases: [{ chip: 'White light', cap: 'Dispersion of white light by a prism: red is deviated least and violet most. The angle between the emergent red and violet rays is the angular dispersion (the spread is exaggerated for clarity).' }],
  draw() {
    const s = new Sketch(W, G910.H);
    const { apex } = G910, g = g910();
    outline(s, [apex, g.bl, g.br], { w: 1.9 });
    path(s, [g.start, g.entry], { w: 2.2 });
    rec(s, 'incident', [g.start, g.entry]);
    rayHead(s, g.start, g.entry, 0.7);
    const red = g.rays[0], vio = g.rays[g.rays.length - 1];
    // the inner colours first, thin and grey; red and violet over them
    g.rays.slice(1, -1).forEach((r) => path(s, [g.entry, r.exit, r.end], { color: C.grey, w: 1 }));
    [red, vio].forEach((r, i) => { path(s, [g.entry, r.exit, r.end], { w: 1.6, color: i ? C.slate : C.ink }); rec(s, i ? 'violet' : 'red', [g.entry, r.exit, r.end]); });
    // the angular dispersion: an arc about the point where the red and violet lines meet
    const Q = meet(red.exit, red.d2, vio.exit, vio.d2), R = (G910.arcX - Q[0]) / red.d2[0];
    const mid = angleArc(s, Q, R, red.d2, vio.d2, { color: C.mari, w: 1.8, free: true });
    rec(s, 'arc', [Q, [R, 0]]);
    label(s, 'R', around(red.end, ['r', 'ar'], 15, [6, 9]));
    label(s, 'V', around(vio.end, ['r', 'br'], 15, [6, 9]));
    label(s, '<i>δ</i><sub>V</sub> − <i>δ</i><sub>R</sub>', around(mid, ['ar', 'a', 'r'], 15, [12, 16, 22, 30]), { color: C.amber });
    tags(s, [
      { t: 'Angular dispersion', hi: true, p: mid, at: tagSpots(mid, ['b', 'bl', 'br'], [24, 34, 46, 60]) },
      { t: 'White light', p: lerp(g.start, g.entry, 0.4), at: tagSpots(lerp(g.start, g.entry, 0.4), ['a', 'ar', 'al']) },
    ]);
    return s;
  },
  check() {
    const s = fig910.draw(fig910.cases[0]), g = g910(), { apex } = G910;
    const red = g.rays[0], vio = g.rays[g.rays.length - 1];
    const dev = (n: number) => { const r1 = Math.asin(Math.sin(g.iDeg * D2R) / n), r2 = 60 * D2R - r1, e = Math.asin(n * Math.sin(r2)); return g.iDeg + e / D2R - 60; };
    const Q = meet(red.exit, red.d2, vio.exit, vio.d2);
    const arc = got(s, 'arc');
    return [
      [`The prism is equilateral: apex angle A = ${fmt(between(sub(g.bl, apex), sub(g.br, apex)), 6)}°`, close(between(sub(g.bl, apex), sub(g.br, apex)), 60, 1e-9)],
      [`Snell's law at both faces for every colour: sin i/sin r = n (${g.rays.map((r) => fmt(snellRatio(g.d0, r.d1, r.nL), 4)).join(', ')}) and sin r₂/sin e = 1/n`, g.rays.every((r) => close(snellRatio(g.d0, r.d1, r.nL), r.n, 1e-9) && close(snellRatio(r.d1, r.d2, r.nR), 1 / r.n, 1e-9))],
      [`i = ${fmt(g.iDeg, 2)}° gives the middle colour (n = 1.55) minimum deviation: it runs parallel to the base inside`, close(g.rays[3].d1[1], 0, 1e-9)],
      [`Each drawn deviation equals i + e − A: red ${fmt(red.dev, 2)}° … violet ${fmt(vio.dev, 2)}°, rising with n (red least, violet most)`, g.rays.every((r) => close(r.dev, dev(r.n), 1e-9)) && g.rays.every((r, j) => j === 0 || r.dev > g.rays[j - 1].dev)],
      [`The arc is centred where the emergent red and violet lines meet and spans the angle between them, ${fmt(between(red.d2, vio.d2), 3)}° = δ_V − δ_R`, close(between(red.d2, vio.d2), vio.dev - red.dev, 1e-9) && len(arc[0], Q) < 1e-9],
      [`Red leaves above violet (red end at y = ${fmt(red.end[1], 1)}, violet ${fmt(vio.end[1], 1)}): violet bends more toward the base`, red.end[1] < vio.end[1]],
      [`Every colour enters the first face and leaves through the second (no total internal reflection: n sin r₂ < 1 for all)`, g.rays.every((r) => r.exit[1] > apex[1] && r.exit[1] < g.br[1])],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.11 · refraction through a prism (topic 05)                    */
/* ===================================================================== */
/**
 * n = 1.5, A = 60° (the book's Fig 9.12 prism, and its drawing: the angles
 * measured off the printed figure are i ≈ 55°, e ≈ 43°). i = 55° gives
 * r₁ = 33.1°, r₂ = 26.9°, e = 42.7° and δ = 37.7°, just above the minimum
 * 37.2°. The normals at the two faces meet inside at N; the incident ray
 * produced forward and the emergent ray produced back meet at D, where δ is
 * marked.
 */
const G911 = { apex: [170, 22] as P, side: 236, t: 0.64, n: 1.5, iDeg: 55, back: 86, out: 92, nOut: 44, H: 318 };
const g911 = () => {
  const { apex, side, t, n, iDeg } = G911;
  const bl: P = [apex[0] - side / 2, apex[1] + side * Math.cos(30 * D2R)], br: P = [apex[0] + side / 2, bl[1]];
  const entry = lerp(apex, bl, t);
  const d0: P = [Math.cos((iDeg - 30) * D2R), -Math.sin((iDeg - 30) * D2R)];
  const r = prismRay(apex, bl, br, entry, d0, n), d2 = r.d2 as P;
  const N = meet(entry, [-r.nL[0], -r.nL[1]], r.exit, [-r.nR[0], -r.nR[1]]);
  const D = meet(entry, d0, r.exit, d2);
  return { bl, br, entry, d0, ...r, d2, N, D, start: add(entry, d0, -G911.back), end: add(r.exit, d2, G911.out) };
};
const fig911: Diagram = {
  id: 'p12-09-fig-9.11',
  topic: 4,
  name: 'Refraction through a prism',
  cases: [{ chip: 'Angles', cap: 'Refraction through a prism: a ray enters at angle of incidence <i>i</i> (refraction angle <i>r</i><sub>1</sub>), meets the second face at angle <i>r</i><sub>2</sub> and emerges at angle <i>e</i>. <i>A</i> is the apex angle and <i>δ</i> the angle of deviation.' }],
  draw() {
    const s = new Sketch(W, G911.H);
    const { apex } = G911, g = g911();
    outline(s, [apex, g.bl, g.br], { w: 1.9 });
    // the normals, outside each face and in to where they meet
    path(s, [add(g.entry, g.nL, G911.nOut), g.N, add(g.exit, g.nR, G911.nOut)], { color: C.slate, w: 1.1, dash: 'dash' });
    // the incident ray produced forward, the emergent ray produced back, to D
    path(s, [g.entry, add(g.D, g.d0, 64)], { color: C.slate, w: 1.1, dash: 'dash' });
    path(s, [g.D, g.exit], { color: C.slate, w: 1.1, dash: 'dash' });
    // the ray
    path(s, [g.start, g.entry, g.exit, g.end], { w: 1.9 });
    rec(s, 'ray', [g.start, g.entry, g.exit, g.end]);
    rayHead(s, g.start, g.entry, 0.3);
    rayHead(s, g.entry, g.exit, 0.5);
    rayHead(s, g.exit, g.end, 0.75);
    // the angles
    const neg = (u: P): P => [-u[0], -u[1]];
    const aA = angleArc(s, apex, 28, sub(g.bl, apex), sub(g.br, apex), { color: C.ink });
    const aI = angleArc(s, g.entry, 30, g.nL, neg(g.d0));
    const aR1 = angleArc(s, g.entry, 30, neg(g.nL), g.d1);
    const aR2 = angleArc(s, g.exit, 30, neg(g.d1), neg(g.nR));
    const aE = angleArc(s, g.exit, 30, g.nR, g.d2);
    const aD = angleArc(s, g.D, 44, g.d0, g.d2, { color: C.mari, w: 1.8 });
    const aDp = polar(g.D, 44, angOf(g.d0) - 0.22 * between(g.d0, g.d2));
    resultBlock(s, ['<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>A</i>', '<i>δ</i> = <i>i</i> + <i>e</i> − <i>A</i>'], { size: 15 });
    const at = (c: P, a: P, d: number[]): Spot[] => { const u = unit(sub(a, c)); return d.map((k): Spot => [a[0] + u[0] * k, a[1] + u[1] * k + 5, 'middle']); };
    label(s, '<i>A</i>', at(apex, aA, [10, 14, 18]));
    label(s, '<i>i</i>', at(g.entry, aI, [9, 13, 17]));
    label(s, '<i>r</i><sub>1</sub>', at(g.entry, aR1, [11, 15, 19, 24, 30, 36]));
    label(s, '<i>r</i><sub>2</sub>', at(g.exit, aR2, [11, 15, 19, 24, 30, 36, 40, 44, 48]));
    label(s, '<i>e</i>', at(g.exit, aE, [9, 13, 17]));
    label(s, '<i>δ</i>', at(g.D, aD, [9, 12, 15, -14, -18]), { color: C.amber });
    tags(s, [
      { t: 'Deviation', hi: true, p: aDp, at: tagSpots(aDp, ['ar', 'a', 'r'], [16, 20, 26, 32, 40, 50, 60]) },
    ]);
    return s;
  },
  check() {
    const s = fig911.draw(fig911.cases[0]), g = g911(), { apex, n, iDeg } = G911;
    const neg = (u: P): P => [-u[0], -u[1]];
    const A = between(sub(g.bl, apex), sub(g.br, apex));
    const i = between(g.nL, neg(g.d0)), r1 = between(neg(g.nL), g.d1), r2 = between(g.d1, g.nR), e = between(g.nR, g.d2), dl = between(g.d0, g.d2);
    const ray = got(s, 'ray');
    return [
      [`A = ${fmt(A, 6)}°, n = ${n}; the drawn ray meets the first face at i = ${fmt(i, 6)}° (the book's drawing: about 55°)`, close(A, 60, 1e-9) && close(i, iDeg, 1e-9)],
      [`Snell's law at the first face: sin i = n sin r₁, r₁ = ${fmt(r1, 3)}°`, close(Math.sin(i * D2R), n * Math.sin(r1 * D2R), 1e-12)],
      [`r₁ + r₂ = ${fmt(r1, 3)}° + ${fmt(r2, 3)}° = ${fmt(r1 + r2, 6)}° = A`, close(r1 + r2, A, 1e-9)],
      [`Snell's law at the second face: n sin r₂ = sin e, e = ${fmt(e, 3)}° (r₂ = ${fmt(r2, 2)}° < C = ${fmt(Math.asin(1 / n) / D2R, 2)}°, so it emerges)`, close(n * Math.sin(r2 * D2R), Math.sin(e * D2R), 1e-12) && r2 < Math.asin(1 / n) / D2R],
      [`The deviation drawn at D, between the incident ray produced and the emergent ray produced back, is ${fmt(dl, 3)}° = i + e − A`, close(dl, i + e - A, 1e-9) && lineDist(g.D, g.entry, g.d0) < 1e-9 && lineDist(g.D, g.exit, g.d2) < 1e-9],
      [`δ = ${fmt(dl, 2)}° is above the minimum δ_m = 2 sin⁻¹(n sin(A/2)) − A = ${fmt(2 * Math.asin(n * Math.sin(30 * D2R)) / D2R - 60, 2)}°, as i ≠ e`, dl > 2 * Math.asin(n * Math.sin(30 * D2R)) / D2R - 60],
      [`The two normals meet inside the prism at N, where they make 180° − A = ${fmt(180 - between(neg(g.nL), neg(g.nR)) , 3)}° with each other`, close(between(g.nL, g.nR), 180 - A, 1e-9) && g.N[1] < g.bl[1] && g.N[1] > apex[1]],
      [`The drawn ray is the traced one: it bends at the entry and exit points only`, ray.length === 4 && len(ray[1], g.entry) < 1e-9 && len(ray[2], g.exit) < 1e-9],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.12 · deviation against angle of incidence (topic 05)          */
/* ===================================================================== */
/**
 * δ(i) = i + e − A with r₁ = sin⁻¹(sin i/n), r₂ = A − r₁, e = sin⁻¹(n sin r₂),
 * for n = 1.5, A = 60°. The curve starts at grazing emergence (e = 90°,
 * i = 27.9°) and ends at grazing incidence (i = 90°), both δ = 57.9°. Its
 * minimum, 37.2° at i = e = 48.6°, and the two angles giving δ = 45° are
 * solved, not read.
 */
const G912 = { n: 1.5, A: 60, x0: 58, x1: 322, i0: 20, i1: 90, y0: 236, y1: 50, d0: 30, d1: 60, same: 45, H: 290 };
const dev912 = (i: number) => { const { n, A } = G912, r1 = Math.asin(Math.sin(i * D2R) / n) / D2R, r2 = A - r1; return { r1, r2, e: Math.asin(n * Math.sin(r2 * D2R)) / D2R, d: i + Math.asin(n * Math.sin(r2 * D2R)) / D2R - A }; };
const X912 = (i: number) => G912.x0 + ((i - G912.i0) * (G912.x1 - G912.x0)) / (G912.i1 - G912.i0);
const Y912 = (d: number) => G912.y0 - ((d - G912.d0) * (G912.y0 - G912.y1)) / (G912.d1 - G912.d0);
const g912 = () => {
  const { n, A, same } = G912;
  const C0 = Math.asin(1 / n) / D2R, iG = Math.asin(n * Math.sin((A - C0) * D2R)) / D2R;
  const iM = Math.asin(n * Math.sin((A / 2) * D2R)) / D2R, dM = 2 * iM - A;
  const solve = (a: number, b: number) => { let lo = a, hi = b; const up = dev912(b).d > dev912(a).d; for (let k = 0; k < 100; k++) { const m = (lo + hi) / 2; if ((dev912(m).d > same) === up) hi = m; else lo = m; } return (lo + hi) / 2; };
  const i1 = solve(iG + 1e-9, iM), i2 = solve(iM, 90);
  return { iG, iM, dM, i1, i2, curve: samples(iG + 1e-9, 90, 500).map((i): P => [X912(i), Y912(dev912(i).d)]) };
};
const fig912: Diagram = {
  id: 'p12-09-fig-9.12',
  topic: 4,
  name: 'Deviation against angle of incidence',
  cases: [{ chip: 'δ against i', cap: 'Variation of the deviation <i>δ</i> with the angle of incidence <i>i</i> for a prism (<i>n</i> = 1.5, <i>A</i> = 60°). <i>δ</i> falls to a single minimum at <i>i</i> = <i>e</i> and rises again; every larger value of <i>δ</i> (up to 57.9°, where the curve ends at grazing emergence and grazing incidence) is obtained for two values of <i>i</i> (<i>i</i> and <i>e</i> interchanged).' }],
  draw() {
    const s = new Sketch(W, G912.H);
    const { x0, x1, y0, y1 } = G912, g = g912();
    // axes, ticks and numbers
    path(s, [[x0, y0], [x1 + 6, y0]], { color: C.slate, w: 1.2 });
    path(s, [[x0, y0], [x0, y1 - 12]], { color: C.slate, w: 1.2 });
    for (let i = 20; i <= 90; i += 10) { path(s, [[X912(i), y0], [X912(i), y0 + 4]], { color: C.slate, w: 1.2, free: true }); s.sym(X912(i), y0 + 19, `${i}`, { size: 12, color: C.slate }); }
    for (let d = 30; d <= 60; d += 5) { path(s, [[x0 - 4, Y912(d)], [x0, Y912(d)]], { color: C.slate, w: 1.2, free: true }); s.sym(x0 - 7, Y912(d) + 4, `${d}`, { size: 12, anchor: 'end', color: C.slate }); }
    s.sym((x0 + x1) / 2, y0 + 42, 'angle of incidence <i>i</i> (degrees)', { size: 14 });
    s.sym(x0 - 30, y1 - 22, 'angle of deviation <i>δ</i> (degrees)', { size: 14, anchor: 'start' });
    // the two angles that give δ = 45°, and the minimum
    const p1: P = [X912(g.i1), Y912(G912.same)], p2: P = [X912(g.i2), Y912(G912.same)], pm: P = [X912(g.iM), Y912(g.dM)];
    guide(s, [x0, p1[1]], p2, C.slate, 'dash');
    guide(s, p1, [p1[0], y0], C.slate, 'dash');
    guide(s, p2, [p2[0], y0], C.slate, 'dash');
    guide(s, [x0, pm[1]], pm, C.amber, 'dash');
    guide(s, pm, [pm[0], y0], C.amber, 'dash');
    path(s, g.curve, { w: 2.4 });
    rec(s, 'curve', g.curve);
    s.dot(p1[0], p1[1], 3.4);
    s.dot(p2[0], p2[1], 3.4);
    s.dot(pm[0], pm[1], 4, C.mari);
    label(s, '<i>n</i> = 1.5, <i>A</i> = 60°', [[x0 + 42, y1 + 8, 'start'], [x0 + 48, y1 + 8, 'start'], [x0 + 54, y1 + 10, 'start']]);
    label(s, '<i>δ</i><sub>m</sub> = 37.2°', [[pm[0] + 7, pm[1] + 19, 'start'], [pm[0] + 7, pm[1] + 21, 'start']], { color: C.amber, size: 14 });
    label(s, 'at <i>i</i> = <i>e</i>', [[pm[0] + 7, pm[1] + 36, 'start'], [pm[0] + 7, pm[1] + 35, 'start']], { color: C.amber, size: 14 });
    label(s, 'same <i>δ</i>, two values of <i>i</i>', [9, 10, 11, 12, 13].flatMap((dy) => [0, 4, 8, -4].map((dx): Spot => [(p1[0] + p2[0]) / 2 + dx, p1[1] - dy, 'middle'])), { size: 13 });
    label(s, '<i>i</i><sub>1</sub>', [[p1[0] - 5, y0 - 8, 'end'], [p1[0] - 5, y0 - 26, 'end']]);
    label(s, '<i>i</i><sub>2</sub> = <i>e</i><sub>1</sub>', [[p2[0] + 5, y0 - 8, 'start'], [p2[0] + 5, y0 - 26, 'start']]);
    return s;
  },
  check() {
    const s = fig912.draw(fig912.cases[0]), g = g912(), { n, A } = G912;
    const c = got(s, 'curve').map(([x, y]): P => [G912.i0 + ((x - G912.x0) * (G912.i1 - G912.i0)) / (G912.x1 - G912.x0), G912.d0 + ((G912.y0 - y) * (G912.d1 - G912.d0)) / (G912.y0 - G912.y1)]);
    const low = c.reduce((b, p) => (p[1] < b[1] ? p : b));
    const e1 = dev912(g.i1).e;
    return [
      [`Minimum deviation δ_m = 2 sin⁻¹(n sin(A/2)) − A = ${fmt(g.dM, 3)}° at i = ${fmt(g.iM, 3)}° (the book's 37.2°), and there e = ${fmt(dev912(g.iM).e, 3)}° = i`, fmt(g.dM, 1) === '37.2' && close(dev912(g.iM).e, g.iM, 1e-9) && close(dev912(g.iM).d, g.dM, 1e-9)],
      [`The drawn curve's lowest point, read back, is δ = ${fmt(low[1], 3)}° at i = ${fmt(low[0], 2)}°: one minimum, where the label says`, Math.abs(low[1] - g.dM) < 1e-3 && Math.abs(low[0] - g.iM) < 0.2 && c.every((p, k) => k === 0 || (p[0] < g.iM - 0.2 ? p[1] < c[k - 1][1] : p[0] > g.iM + 0.2 ? p[1] > c[k - 1][1] : true))],
      [`The curve starts at grazing emergence (e = 90°): i = sin⁻¹(n sin(A − C)) = ${fmt(g.iG, 2)}°, and ends at i = 90°, both δ = ${fmt(dev912(g.iG + 1e-9).d, 2)}° = ${fmt(dev912(90).d, 2)}° (the caption's 57.9°)`, close(dev912(g.iG + 1e-9).d, dev912(90).d, 1e-3) && fmt(dev912(90).d, 1) === '57.9' && close(c[0][0], g.iG, 1e-6) && close(c[c.length - 1][0], 90, 1e-9)],
      [`δ = 45° is reached at i₁ = ${fmt(g.i1, 2)}° and i₂ = ${fmt(g.i2, 2)}°, and i₂ is the emergence angle for i₁ (e₁ = ${fmt(e1, 2)}°): i and e interchanged`, close(dev912(g.i1).d, 45, 1e-9) && close(dev912(g.i2).d, 45, 1e-9) && close(g.i2, e1, 1e-6)],
      [`Every point of the curve satisfies r₁ + r₂ = A and δ = i + e − A`, samples(g.iG + 0.01, 90, 50).every((i) => { const q = dev912(i); return close(q.r1 + q.r2, A, 1e-9) && close(q.d, i + q.e - A, 1e-9); }) && n === 1.5],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.13 · crown and flint: direct vision (topic 05)                */
/* ===================================================================== */
/**
 * A crown prism (apex up, A = 34°, n = 1.45, 1.50, 1.55 for red, yellow,
 * violet) and a flint prism (apex down, n = 1.36, 1.60, 1.84), traced exactly
 * by Snell's law. The flint's angle is solved so that yellow leaves parallel
 * to the incoming white light (direct vision); the flint's larger dispersive
 * power then leaves violet above and red below. The indices are exaggerated
 * so the spread can be seen (with the book's glasses, Example C.3, the net
 * spread is under half a degree); the drawing is a schematic with the true
 * order and directions of the rays.
 */
const G913 = { cr: [1.45, 1.5, 1.55], fl: [1.36, 1.6, 1.84], Ac: 34, cApex: [84, 58] as P, cH: 116, fx: 172, fTop: 62, fH: 128, y: 92, x0: 8, xEnd: 262, H: 214 };
const g913 = () => {
  const { cr, fl, Ac, cApex, cH, fx, fTop, fH, y } = G913;
  const half = (Ac / 2) * D2R, cbl: P = [cApex[0] - cH * Math.tan(half), cApex[1] + cH], cbr: P = [cApex[0] + cH * Math.tan(half), cApex[1] + cH];
  const d0: P = [1, 0];
  const entry = meet([0, y], d0, cApex, sub(cbl, cApex));
  // the flint's angle: yellow out parallel to the light in
  const flint = (Af: number) => { const h = (Af / 2) * D2R, apex: P = [fx, fTop + fH], tl: P = [fx - fH * Math.tan(h), fTop], tr: P = [fx + fH * Math.tan(h), fTop]; return { apex, tl, tr }; };
  const yIn = prismRay(cApex, cbl, cbr, entry, d0, cr[1]);
  const outAngle = (Af: number) => { const f = flint(Af), e = meet(yIn.exit, yIn.d2 as P, f.apex, sub(f.tl, f.apex)); return angOf(prismRay(f.apex, f.tl, f.tr, e, yIn.d2 as P, fl[1]).d2 as P); };
  let lo = 5, hi = 60;
  for (let k = 0; k < 100; k++) { const m = (lo + hi) / 2; if (outAngle(m) > 0) hi = m; else lo = m; }
  const Af = (lo + hi) / 2, f = flint(Af);
  const rays = [0, 1, 2].map((j) => {
    const c = prismRay(cApex, cbl, cbr, entry, d0, cr[j]), d1 = c.d2 as P;
    const e = meet(c.exit, d1, f.apex, sub(f.tl, f.apex));
    const q = prismRay(f.apex, f.tl, f.tr, e, d1, fl[j]), d2 = q.d2 as P;
    return { c, f: q, e, d1, d2, pts: [entry, c.exit, e, q.exit, add(q.exit, d2, (G913.xEnd - q.exit[0]) / d2[0])] as P[] };
  });
  return { cbl, cbr, entry, Af, f, rays, start: [G913.x0, y] as P };
};
const fig913: Diagram = {
  id: 'p12-09-fig-9.13',
  topic: 4,
  name: 'Direct-vision prism combination',
  cases: [{ chip: 'Direct vision', cap: 'Crown and flint prisms with their apexes on opposite sides. In the direct-vision arrangement yellow light emerges undeviated while the colours are spread out (violet above, red below).' }],
  draw() {
    const s = new Sketch(W, G913.H);
    const g = g913();
    outline(s, [G913.cApex, g.cbl, g.cbr], { w: 1.9 });
    outline(s, [g.f.apex, g.f.tl, g.f.tr], { w: 1.9 });
    path(s, [g.start, g.entry], { w: 2.2 });
    rayHead(s, g.start, g.entry, 0.5);
    const style = [{ color: C.ink, w: 1.5 }, { color: C.mari, w: 2.2 }, { color: C.slate, w: 1.5, dash: 'dash' as const }];
    [0, 2, 1].forEach((j) => { path(s, g.rays[j].pts, style[j]); rec(s, ['red', 'yellow', 'violet'][j], g.rays[j].pts); });
    const yl = g.rays[1].pts;
    rayHead(s, yl[3], yl[4], 0.55, C.mari);
    tags(s, [
      { t: 'White light', p: lerp(g.start, g.entry, 0.3), at: [[8, G913.y - 40, 'start'], [8, G913.y - 46, 'start'], [8, G913.y + 14, 'start'], ...tagSpots(lerp(g.start, g.entry, 0.3), ['ar', 'a', 'b', 'br'])] },
      { t: 'Crown', p: lerp(g.cbl, g.cbr, 0.3), at: tagSpots(lerp(g.cbl, g.cbr, 0.3), ['b', 'bl', 'br'], [8, 10, 12, 16]) },
      { t: 'Flint', p: lerp(g.f.apex, g.f.tr, 0.3), at: tagSpots(lerp(g.f.apex, g.f.tr, 0.3), ['br', 'r', 'b']) },
      ...[2, 1, 0].map((j, k): TagSpec => { const e = g.rays[j].pts[4]; return { t: ['Red', 'Yellow', 'Violet'][j], hi: j === 1, p: e, at: [30, 34, 38, 42].map((dy): Spot => [W - 4, e[1] - 11 + (k - 1) * dy, 'end']) }; }),
    ]);
    return s;
  },
  check() {
    const s = fig913.draw(fig913.cases[0]), g = g913(), { cr, fl } = G913;
    const [red, yel, vio] = g.rays;
    const ang = (u: P) => angOf(u);
    const omega = (n: number[]) => (n[2] - n[0]) / (n[1] - 1);
    return [
      [`Snell's law at all four faces for each colour (sin i/sin r = n going in, 1/n coming out)`, g.rays.every((r, j) => close(snellRatio([1, 0], r.c.d1, r.c.nL), cr[j], 1e-9) && close(snellRatio(r.c.d1, r.d1, r.c.nR), 1 / cr[j], 1e-9) && close(snellRatio(r.d1, r.f.d1, r.f.nL), fl[j], 1e-9) && close(snellRatio(r.f.d1, r.d2, r.f.nR), 1 / fl[j], 1e-9))],
      [`The crown bends every colour toward its base (down), violet most: ${[red, yel, vio].map((r) => fmt(-ang(r.d1), 2)).join('°, ')}° below the horizontal`, -ang(red.d1) > 0 && -ang(vio.d1) > -ang(yel.d1) && -ang(yel.d1) > -ang(red.d1)],
      [`The flint's angle, ${fmt(g.Af, 2)}°, is solved so yellow leaves parallel to the white light (${fmt(ang(yel.d2), 6)}°): no deviation for yellow`, close(ang(yel.d2), 0, 1e-6)],
      [`The flint is the more dispersive glass (ω = (n_v − n_r)/(n_y − 1): flint ${fmt(omega(fl), 3)} > crown ${fmt(omega(cr), 3)}), so violet leaves above (${fmt(ang(vio.d2), 2)}°) and red below (${fmt(ang(red.d2), 2)}°)`, omega(fl) > omega(cr) && ang(vio.d2) > 0 && ang(red.d2) < 0],
      [`At the right edge violet is drawn above yellow, yellow above red (y = ${[vio, yel, red].map((r) => fmt(r.pts[4][1], 1)).join(', ')})`, vio.pts[4][1] < yel.pts[4][1] && yel.pts[4][1] < red.pts[4][1]],
      [`The apexes point opposite ways (crown up, flint down)`, G913.cApex[1] < g.cbl[1] && g.f.apex[1] > g.f.tl[1]],
      [`Every colour passes through both prisms' faces (no total internal reflection)`, g.rays.every((r) => r.c.d2 !== null && r.f.d2 !== null && r.e[1] > g.f.tl[1] && r.e[1] < g.f.apex[1])],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.14 · simple microscope (topic 06)                             */
/* ===================================================================== */
/**
 * To the book's own proportions (object at 0.6f): f = 5 cm, u = −3 cm, so
 * v = −7.5 cm and m = +2.5, a virtual, erect image on the object's side. The
 * ray parallel to the axis leaves through F, the ray through O goes straight
 * on; both are produced back (dashed) to B′. The eye looks in from the right.
 */
const G914: LensFig = { f: 5, u: -3, h: 1.5, k: 16, ky: 16, ox: 148, oy: 108, lensH: 70, H: 262, xs: [-5, 5], rays: 2, dims: 0 };
const fig914: Diagram = {
  id: 'p12-09-fig-9.14',
  topic: 5,
  name: 'Simple microscope',
  cases: [{ chip: 'Magnifier', cap: 'Simple microscope: with the object inside the focal length, the lens forms an enlarged, erect, virtual image on the same side as the object.' }],
  draw() {
    const g = G914, s = new Sketch(W, g.H);
    const { X, Y, pg, v, m } = lensGeom(g);
    const xEnd = 9.4, B: P = [g.u, g.h], Bi: P = [v, m * g.h];
    const L = [{ x: 0, f: g.f }];
    const r1p = trace(B, 0, L, xEnd), r2p = trace(B, g.h / g.u, L, xEnd);
    path(s, [[8, g.oy], [W - 8, g.oy]], { color: C.grey, w: 1.2 });
    lens(s, X(0), g.oy, g.lensH, 7);
    // the rays, and their backward extensions to B′
    [r1p, r2p].forEach((r, i) => { const pts = r.map(pg); path(s, pts, { w: 1.5 }); rec(s, `ray${i + 1}`, pts); rayHead(s, pts[0], pts[1], 0.5); rayHead(s, pts[1], pts[2], i ? 0.55 : 0.3); });
    path(s, [pg(r1p[1]), pg(Bi)], { color: C.slate, w: 1.2, dash: 'dash' });
    path(s, [pg(B), pg(Bi)], { color: C.slate, w: 1.2, dash: 'dash' });
    rec(s, 'back1', [pg(r1p[1]), pg(Bi)]);
    rec(s, 'back2', [pg(B), pg(Bi)]);
    path(s, [[X(g.u), g.oy], pg(B)], { w: 2.6 });
    path(s, [[X(v), g.oy], pg(Bi)], { color: C.mari, w: 2.6, dash: 'dash' });
    rec(s, 'object', [[X(g.u), g.oy], pg(B)]);
    rec(s, 'image', [[X(v), g.oy], pg(Bi)]);
    // the eye, beyond the lens, between the two emergent rays
    const ye = (r1p[2][1] + r2p[2][1]) / 2, ec: P = [X(xEnd) + 22, Y(ye)];
    eye(s, ec, [ec[0] - 5, ec[1]]);
    [[g.u, 0], [-g.f, 0], [g.f, 0], [v, 0]].forEach(([x]) => s.dot(X(x), g.oy, 3));
    s.dot(X(g.u), Y(g.h), 3);
    s.add(`<circle cx="${r1(X(v))}" cy="${r1(Y(m * g.h))}" r="3.2" fill="#fff" stroke="${C.ink}" stroke-width="1.4"/>`);
    s.points.push({ x: X(v), y: Y(m * g.h), r: 3.2 });
    s.result('Enlarged, erect, virtual');
    label(s, 'B′', around(pg(Bi), ['a', 'al', 'ar']));
    label(s, 'A′', around([X(v), g.oy], ['b', 'bl', 'br']));
    label(s, 'F', around([X(-g.f), g.oy], ['b', 'bl', 'br']));
    label(s, 'A', around([X(g.u), g.oy], ['b', 'br', 'bl']));
    label(s, 'B', [[pg(B)[0] - 7, pg(B)[1] + 15, 'end'], ...around(pg(B), ['a', 'al', 'ar'])]);
    label(s, 'O', around([X(0), g.oy], ['ar', 'r', 'br']));
    label(s, 'F', around([X(g.f), g.oy], ['a', 'ar', 'al']));
    tags(s, [
      { t: 'Virtual image', hi: true, p: [X(v), Y(m * g.h * 0.5)], at: tagSpots([X(v), Y(m * g.h * 0.5)], ['r', 'ar', 'br'], [14, 20, 28, 36, 46]) },
      { t: 'Eye', p: [ec[0] + 9, ec[1] + 8], at: tagSpots([ec[0] + 9, ec[1] + 8], ['b', 'bl', 'a']) },
    ]);
    return s;
  },
  check() {
    const g = G914, s = fig914.draw(fig914.cases[0]), { v, m } = lensGeom(g);
    const ph = (n: string) => got(s, n).map((p) => toPhys(g, p));
    const r1p = ph('ray1'), r2p = ph('ray2'), b1 = ph('back1'), b2 = ph('back2'), Bi: P = [v, m * g.h];
    return [
      [`Lens formula with u = ${fmt(g.u)} cm, f = +${g.f} cm: v = ${fmt(v, 3)} cm (on the object's side) and m = v/u = +${fmt(m, 3)}`, close(1 / v - 1 / g.u, 1 / g.f, 1e-12) && close(v, -7.5, 1e-9) && close(m, 2.5, 1e-9)],
      [`The object is inside the focal length (|u| = ${-g.u} cm < f = ${g.f} cm), so the image is virtual (v < 0), erect (m > 0) and enlarged (m > 1)`, -g.u < g.f && v < 0 && m > 1],
      [`The ray parallel to the axis leaves through the far focus F, and the ray through O goes straight on`, close(slopeOf(r1p[0], r1p[1]), 0, 1e-12) && through(r1p[1], r1p[2], [g.f, 0]) && through(r2p[0], r2p[1], [0, 0]) && close(slopeOf(r2p[0], r2p[1]), slopeOf(r2p[1], r2p[2]), 1e-12)],
      [`The two emergent rays diverge, and produced back (dashed) they meet at B′ = (${fmt(Bi[0], 2)}, ${fmt(Bi[1], 2)}) cm`, through(r1p[1], r1p[2], Bi) && through(r2p[1], r2p[2], Bi) && len(b1[1], Bi) < 1e-9 && len(b2[1], Bi) < 1e-9 && slopeOf(r2p[1], r2p[2]) < slopeOf(r1p[1], r1p[2])],
      [`The image A′B′ is drawn erect, ${fmt(m, 2)} times the object's height, on the object's side of the lens`, close(ph('image')[1][1] / ph('object')[1][1], m, 1e-9) && ph('image')[0][0] < 0],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.15 · compound microscope (topic 06)                           */
/* ===================================================================== */
/**
 * To the book's own proportions: objective f_o = 2 units, object at
 * u_o = −2.8 (just beyond F_o), so v_o = +7 and m_o = −2.5; eyepiece f_e = 3,
 * 9 from the objective, so A′B′ sits 2 inside its focal length (u_e = −2),
 * and the final image is at v_e = −6, m_e = +3: B″ lies between the lenses,
 * 7.5 times the object, inverted. The two rays from B are traced through both
 * lenses; the emergent ones, produced back (dashed), meet at B″.
 */
const G915 = { fo: 2, uo: -2.8, fe: 3, Le: 9, h: 0.7, k: 17, ox: 70, oy: 106, oH: 40, eH: 54, xEnd: 13.15, H: 236 };
const g915 = () => {
  const { fo, uo, fe, Le, h } = G915;
  const ob = lensImage(uo, fo), ue = ob.v - Le, ey = lensImage(ue, fe);
  const lenses = [{ x: 0, f: fo }, { x: Le, f: fe }];
  const B: P = [uo, h], B1: P = [ob.v, ob.m * h], B2: P = [Le + ey.v, ob.m * ey.m * h];
  const rays = [trace(B, 0, lenses, G915.xEnd), trace(B, h / uo, lenses, G915.xEnd)];
  return { ob, ue, ey, B, B1, B2, rays };
};
const X915 = (x: number) => G915.ox + G915.k * x, Y915 = (y: number) => G915.oy - G915.k * y;
const pg915 = (p: P): P => [X915(p[0]), Y915(p[1])];
const ph915 = (p: P): P => [(p[0] - G915.ox) / G915.k, (G915.oy - p[1]) / G915.k];
const fig915: Diagram = {
  id: 'p12-09-fig-9.15',
  topic: 5,
  name: 'Compound microscope',
  cases: [{ chip: 'Two lenses', cap: 'Compound microscope: the objective forms a real, inverted, magnified image A′B′ within the focal length of the eyepiece, which acts as a magnifier and forms the final virtual image (its tip is marked B″).' }],
  draw() {
    const s = new Sketch(W, G915.H);
    const { fo, uo, fe, Le, oy } = G915, g = g915();
    path(s, [[8, oy], [W - 8, oy]], { color: C.grey, w: 1.2 });
    lens(s, X915(0), oy, G915.oH, 6);
    lens(s, X915(Le), oy, G915.eH, 6);
    g.rays.forEach((r, i) => {
      const pts = r.map(pg915);
      path(s, pts.slice(0, 3), { w: 1.5 });
      path(s, pts.slice(2), { w: 1.5 });
      rec(s, `ray${i + 1}`, pts);
      rayHead(s, pts[0], pts[1], 0.5);
      rayHead(s, pts[1], pts[2], i ? 0.3 : 0.18);
      rayHead(s, pts[2], pts[3], 0.5);
      path(s, [pts[2], pg915(g.B2)], { color: C.slate, w: 1.1, dash: 'dash' });
      rec(s, `back${i + 1}`, [pts[2], pg915(g.B2)]);
    });
    // object, intermediate image, final image
    path(s, [[X915(uo), oy], pg915(g.B)], { w: 2.4 });
    path(s, [[X915(g.ob.v), oy], pg915(g.B1)], { color: C.mari, w: 2.8 });
    path(s, [[X915(g.B2[0]), oy], pg915(g.B2)], { color: C.ink, w: 1.4, dash: 'dash' });
    rec(s, 'object', [[X915(uo), oy], pg915(g.B)]);
    rec(s, 'image1', [[X915(g.ob.v), oy], pg915(g.B1)]);
    rec(s, 'image2', [[X915(g.B2[0]), oy], pg915(g.B2)]);
    // the eye, where the emergent rays arrive
    const pu: P = [X915(G915.xEnd) + 6, (pg915(g.rays[0][3])[1] + pg915(g.rays[1][3])[1]) / 2];
    eye(s, [pu[0] + 9, pu[1]], pu);
    // u_o and v_o above
    const yd = oy - G915.oH - 12;
    dim(s, [X915(uo), yd], [X915(0) - 0.01, yd]);
    dim(s, [X915(0) + 0.01, yd], [X915(g.ob.v), yd]);
    label(s, '<i>u</i><sub>o</sub>', [[(X915(uo) + X915(0)) / 2, yd - 9, 'middle']]);
    label(s, '<i>v</i><sub>o</sub>', [[(X915(0) + X915(g.ob.v)) / 2, yd - 9, 'middle']]);
    [uo, -fo, fo, Le - fe, g.ob.v, Le + fe].forEach((x) => s.dot(X915(x), oy, 3));
    s.dot(X915(uo), Y915(G915.h), 3);
    s.dot(pg915(g.B1)[0], pg915(g.B1)[1], 3);
    s.add(`<circle cx="${r1(pg915(g.B2)[0])}" cy="${r1(pg915(g.B2)[1])}" r="3.2" fill="#fff" stroke="${C.ink}" stroke-width="1.4"/>`);
    s.points.push({ x: pg915(g.B2)[0], y: pg915(g.B2)[1], r: 3.2 });
    label(s, 'B', around(pg915(g.B), ['al', 'l', 'a']));
    label(s, 'A', around([X915(uo), oy], ['b', 'bl']));
    label(s, '<i>F</i><sub>o</sub>', around([X915(-fo), oy], ['b', 'br']));
    label(s, '<i>F</i><sub>o</sub>', around([X915(fo), oy], ['a', 'ar', 'b', 'br']));
    label(s, '<i>F</i><sub>e</sub>', around([X915(Le - fe), oy], ['a', 'al', 'ar']));
    label(s, 'A′', around([X915(g.ob.v), oy], ['a', 'ar', 'al']));
    label(s, 'B′', around(pg915(g.B1), ['bl', 'b', 'l']));
    label(s, '<i>F</i><sub>e</sub>', around([X915(Le + fe), oy], ['a', 'ar', 'b']));
    label(s, 'B″', around(pg915(g.B2), ['b', 'bl', 'l']));
    tags(s, [
      { t: 'Objective', p: [X915(0), oy + G915.oH], at: tagSpots([X915(0), oy + G915.oH], ['b', 'br', 'bl'], [8, 12, 16, 22]) },
      { t: 'Eyepiece', p: [X915(Le), oy - G915.eH], at: [[X915(Le), 6, 'middle'], [X915(Le) + 10, 6, 'middle']] },
      { t: 'Real image', hi: true, p: lerp([X915(g.ob.v), oy], pg915(g.B1), 0.5), at: tagSpots(lerp([X915(g.ob.v), oy], pg915(g.B1), 0.5), ['r', 'br', 'b'], [40, 50, 60]) },
      { t: 'Final image', p: lerp([X915(g.B2[0]), oy], pg915(g.B2), 0.75), at: tagSpots(lerp([X915(g.B2[0]), oy], pg915(g.B2), 0.75), ['l', 'bl', 'r'], [14, 20, 28, 36]) },
      { t: 'Eye', p: [pu[0] + 18, pu[1] + 8], at: tagSpots([pu[0] + 18, pu[1] + 8], ['b', 'bl']) },
    ]);
    return s;
  },
  check() {
    const s = fig915.draw(fig915.cases[0]), g = g915(), { fo, uo, fe, Le, h } = G915;
    const r = [1, 2].map((i) => got(s, `ray${i}`).map(ph915)), bk = [1, 2].map((i) => got(s, `back${i}`).map(ph915));
    const i1 = got(s, 'image1').map(ph915), i2 = got(s, 'image2').map(ph915);
    return [
      [`Objective: u_o = ${fmt(uo)}, f_o = ${fo} give v_o = ${fmt(g.ob.v, 3)} and m_o = ${fmt(g.ob.m, 3)}: A′B′ is real and inverted, magnified (object just beyond F_o)`, close(1 / g.ob.v - 1 / uo, 1 / fo, 1e-12) && g.ob.v > 0 && g.ob.m < -1 && -uo > fo && -uo < 2 * fo],
      [`A′B′ lies within the eyepiece's focal length: ${fmt(-g.ue, 3)} < f_e = ${fe}`, -g.ue < fe && -g.ue > 0],
      [`Eyepiece: u_e = ${fmt(g.ue, 3)}, f_e = ${fe} give v_e = ${fmt(g.ey.v, 3)} (virtual) and m_e = +${fmt(g.ey.m, 3)}; total m = ${fmt(g.ob.m * g.ey.m, 3)}`, close(1 / g.ey.v - 1 / g.ue, 1 / fe, 1e-12) && g.ey.v < 0 && g.ey.m > 1],
      [`Both drawn rays pass through B′ between the lenses: ray 1 parallel then through the objective's far focus, ray 2 through its centre`, r.every((q) => through(q[1], q[2], g.B1)) && close(slopeOf(r[0][0], r[0][1]), 0, 1e-12) && through(r[0][1], r[0][2], [fo, 0]) && through(r[1][0], r[1][1], [0, 0])],
      [`After the eyepiece the rays diverge; produced back (dashed) they meet at B″ = (${fmt(g.B2[0], 2)}, ${fmt(g.B2[1], 2)}), the tip of the final image`, r.every((q) => through(q[2], q[3], g.B2, 1e-9)) && bk.every((q) => len(q[1], g.B2) < 1e-9)],
      [`The drawn images: A′B′ ${fmt(i1[1][1] / h, 3)} and the final image ${fmt(i2[1][1] / h, 3)} times the object's height (both inverted)`, close(i1[1][1] / h, g.ob.m, 1e-9) && close(i2[1][1] / h, g.ob.m * g.ey.m, 1e-9) && close(i1[0][0], g.ob.v, 1e-9) && close(i2[0][0], Le + g.ey.v, 1e-9)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.16 · astronomical telescope, normal adjustment (topic 06)     */
/* ===================================================================== */
/**
 * f_o : f_e = 10 : 3 (about the book's drawing; a real telescope's ratio is
 * far larger, Example 3's 24, which leaves no room for the eyepiece on a
 * phone). Parallel rays from a distant object above the axis arrive at
 * α = 8°; the objective brings them to I in its focal plane, which is also
 * the eyepiece's, so they leave parallel at β, with tan β = (f_o/f_e) tan α.
 */
const G916 = { fo: 150, fe: 45, alpha: 8, xo: 66, oy: 98, hs: [38, 0, -38], x0: 8, H: 244, oH: 56, eH: 56, eOut: 62 };
const g916 = () => {
  const { fo, fe, alpha, xo, hs, x0 } = G916;
  const xI = xo + fo, xe = xI + fe, ta = Math.tan(alpha * D2R);
  // physics frame in px: x from the objective, y up; incoming slope −tan α (falling to the right: from an object above the axis)
  const lenses = [{ x: 0, f: fo }, { x: fo + fe, f: fe }];
  const rays = hs.map((h0) => trace([x0 - xo, h0 + ta * (xo - x0)], -ta, lenses, fo + fe + G916.eOut));
  const Iy = -fo * ta;
  return { xI, xe, ta, rays, Iy };
};
const pg916 = (p: P): P => [G916.xo + p[0], G916.oy - p[1]];
const fig916: Diagram = {
  id: 'p12-09-fig-9.16',
  topic: 5,
  name: 'Astronomical telescope',
  cases: [{ chip: 'Normal adjustment', cap: 'Astronomical telescope in normal adjustment: the objective forms a real, inverted image <i>I</i> at its focus, which is also the focus of the eyepiece, so the final rays emerge parallel. <i>α</i> and <i>β</i> are the angles subtended by the object and by the final image.' }],
  draw() {
    const s = new Sketch(W, G916.H);
    const { xo, oy, fo } = G916, g = g916();
    path(s, [[8, oy], [W - 8, oy]], { color: C.grey, w: 1.2 });
    lens(s, xo, oy, G916.oH, 6);
    lens(s, g.xe, oy, G916.eH, 6);
    g.rays.forEach((r, i) => {
      const pts = r.map(pg916);
      path(s, pts.slice(0, 3), { w: 1.5 });
      path(s, pts.slice(2), { w: 1.6, color: C.ink });
      rec(s, `ray${i + 1}`, pts);
      rayHead(s, pts[0], pts[1], 0.5);
      rayHead(s, pts[1], pts[2], 0.6);
      rayHead(s, pts[2], pts[3], 0.6);
    });
    // the image I in the common focal plane
    const I = pg916([fo, g.Iy]);
    path(s, [[g.xI, oy], I], { color: C.mari, w: 2.6 });
    rec(s, 'image', [[g.xI, oy], I]);
    s.dot(g.xI, oy, 3);
    // α at the objective, between the axis and the central incoming ray; β at the eyepiece
    const c = g.rays[1];
    angleArc(s, [xo, oy], 46, [-1, 0], unit(sub(pg916(c[0]), pg916(c[1]))));
    const e0 = pg916(c[2]), e1 = pg916(c[3]);
    guide(s, e0, [e0[0] + 50, e0[1]], C.slate, 'dash');
    const bMid = angleArc(s, e0, 40, [1, 0], unit(sub(e1, e0)));
    rec(s, 'beta', [e0, e1]);
    // f_o and f_e below
    const yd = oy + G916.oH + 14;
    dim(s, [xo, yd], [g.xI - 0.01, yd]);
    dim(s, [g.xI + 0.01, yd], [g.xe, yd]);
    resultBlock(s, ['<i>M</i> = <i>β</i>/<i>α</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>'], { size: 15 });
    label(s, '<i>f</i><sub>o</sub>', [[(xo + g.xI) / 2, yd + 20, 'middle']]);
    label(s, '<i>f</i><sub>e</sub>', [[(g.xI + g.xe) / 2, yd + 20, 'middle']]);
    label(s, '<i>α</i>', around(polar([xo, oy], 46, 180 - G916.alpha), ['a', 'al', 'ar'], 15, [8, 10, 12, 14]));
    label(s, '<i>β</i>', around(bMid, ['r', 'br', 'ar'], 15, [5, 8, 12]));
    label(s, '<i>F′</i><sub>o</sub>', around([g.xI, oy], ['a', 'al', 'ar'], 15, [10, 14, 18, 24]));
    label(s, '<i>I</i>', around(I, ['br', 'b', 'r'], 15, [6, 9, 13]), { color: C.amber });
    tags(s, [
      { t: 'Objective', p: [xo, oy - G916.oH], at: [[xo + 4, 6, 'middle'], [xo + 14, 6, 'middle']] },
      { t: 'Eyepiece', p: [g.xe, oy - G916.eH], at: [[g.xe, 6, 'middle'], [g.xe - 10, 6, 'middle']] },
      { t: 'Image', hi: true, p: lerp([g.xI, oy], I, 0.5), at: tagSpots(lerp([g.xI, oy], I, 0.5), ['bl', 'b', 'l'], [22, 26, 30, 36, 42, 50]) },
    ]);
    return s;
  },
  check() {
    const s = fig916.draw(fig916.cases[0]), g = g916(), { fo, fe, alpha } = G916;
    const r = [1, 2, 3].map((i) => got(s, `ray${i}`).map((p): P => [p[0] - G916.xo, G916.oy - p[1]]));
    const sIn = r.map((q) => slopeOf(q[0], q[1])), sOut = r.map((q) => slopeOf(q[2], q[3]));
    const tb = sOut[0], I: P = [fo, g.Iy];
    return [
      [`The three incoming rays are parallel, at α = ${fmt(Math.atan(-sIn[0]) / D2R, 3)}° to the axis (from a distant object)`, sIn.every((v) => close(v, sIn[0], 1e-12)) && close(Math.atan(-sIn[0]) / D2R, alpha, 1e-9)],
      [`The objective brings them together at I = (f_o, −f_o tan α) in its focal plane: a real, inverted image ${fmt(-g.Iy, 2)} px below the axis`, r.every((q) => through(q[1], q[2], I, 1e-9)) && g.Iy < 0],
      [`Normal adjustment: the eyepiece stands f_o + f_e from the objective (tube length L = f_o + f_e), so I is at its focus too`, close(r[0][2][0], fo + fe, 1e-9)],
      [`The rays leave the eyepiece parallel, at β = ${fmt(Math.atan(tb) / D2R, 3)}°, rising: the final image is at infinity and inverted`, sOut.every((v) => close(v, tb, 1e-12)) && tb > 0],
      [`tan β/tan α = ${fmt(tb / -sIn[0], 6)} = f_o/f_e = ${fmt(fo / fe, 6)}, the magnifying power M = β/α for small angles`, close(tb / -sIn[0], fo / fe, 1e-9)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 9.17 · Newtonian reflecting telescope (topic 06)                */
/* ===================================================================== */
/**
 * A paraboloidal primary, x = x_P + y²/(4f), so every parallel ray reflects
 * exactly towards its focus F (the topic's reason for a parabolic mirror).
 * A flat mirror at 45° to the axis, d before F, reflects the converging beam
 * up to F′, the image of F in the flat mirror, d to the side: placed beyond the
 * incoming beam, where the eyepiece goes. (The book's drawing puts F′ on its top
 * incoming ray; here d is chosen so F′ clears the beam.)
 */
const G917 = { xP: 24, f: 262, oy: 150, d: 76, hs: [-60, -36, 36, 60], xIn: 334, mirrorH: 86, eyeUp: 32, eyeW: 24, H: 280 };
const g917 = () => {
  const { xP, f, oy, d, hs, xIn } = G917;
  const F: P = [xP + f, oy], M: P = [F[0] - d, oy], md: P = unit([1, -1]), mn: P = unit([1, 1]);
  const Fp: P = [M[0], oy - d];
  const rays = hs.map((h) => {
    const y = oy + h, hit: P = [xP + (h * h) / (4 * f), y];
    const nrm = unit([1, -h / (2 * f)]);
    const r = reflect([-1, 0], nrm);
    const onFlat = meet(hit, r, M, md);
    const r2 = reflect(r, mn);
    const top = meet(onFlat, r2, [0, Fp[1] - G917.eyeUp + 4], [1, 0]);
    return { h, start: [xIn, y] as P, hit, nrm, r, onFlat, r2, top };
  });
  const along = rays.map((q) => dotp(sub(q.onFlat, M), md));
  const ends: [P, P] = [add(M, md, Math.min(...along) - 7), add(M, md, Math.max(...along) + 7)];
  return { F, M, Fp, rays, ends };
};
const fig917: Diagram = {
  id: 'p12-09-fig-9.17',
  topic: 5,
  name: 'Newtonian reflecting telescope',
  cases: [{ chip: 'Newtonian', cap: 'Newtonian reflecting telescope: the concave primary mirror sends the converging beam to a small flat mirror at 45°, which reflects it to a focus <i>F′</i> at the side, where the eyepiece is placed.' }],
  draw() {
    const s = new Sketch(W, G917.H);
    const { xP, f, oy, mirrorH, eyeUp, eyeW } = G917, g = g917();
    path(s, [[8, oy], [W - 8, oy]], { color: C.grey, w: 1.2 });
    // the primary, with its back hatched
    const prim = samples(-mirrorH, mirrorH, 60).map((h): P => [xP + (h * h) / (4 * f), oy + h]);
    path(s, prim, { w: 2.6 });
    rec(s, 'primary', prim);
    for (let h = -mirrorH + 6; h <= mirrorH - 4; h += 12) { const x = xP + (h * h) / (4 * f); path(s, [[x - 1.5, oy + h], [x - 7, oy + h + 6]], { color: C.grey, w: 1, free: true }); }
    // the beam: in from the right, to the primary, to the flat, up to F′ and on to the eyepiece
    g.rays.forEach((q, i) => {
      path(s, [q.start, q.hit, q.onFlat, q.top], { w: 1.4 });
      rec(s, `ray${i + 1}`, [q.start, q.hit, q.onFlat, q.top]);
      rayHead(s, q.start, q.hit, 0.3);
      rayHead(s, q.hit, q.onFlat, 0.5);
    });
    path(s, g.ends, { color: C.mari, w: 3 });
    rec(s, 'flat', g.ends);
    lensAcross(s, g.Fp[0], g.Fp[1] - eyeUp, eyeW, 5);
    s.dot(g.Fp[0], g.Fp[1], 3);
    s.dot(xP, oy, 3);
    s.add(`<circle cx="${r1(g.F[0])}" cy="${r1(g.F[1])}" r="3" fill="#fff" stroke="${C.ink}" stroke-width="1.3"/>`);
    s.points.push({ x: g.F[0], y: g.F[1], r: 3 });
    label(s, '<i>F′</i>', around(g.Fp, ['r', 'l', 'ar'], 15, [8, 11, 15]));
    label(s, '<i>F</i>', around(g.F, ['b', 'a', 'br']));
    label(s, 'P', around([xP, oy], ['bl', 'al', 'l', 'b'], 15, [6, 9, 12]));
    const low = g.rays[3], lp: P = [W - 26, low.start[1]];
    tags(s, [
      { t: 'Light from a distant object', p: lp, at: [[W - 4, oy + 104, 'end'], [W - 4, oy + 100, 'end']] },
      { t: 'Flat mirror (45°)', hi: true, p: lerp(g.ends[0], g.ends[1], 0.12), at: tagSpots(lerp(g.ends[0], g.ends[1], 0.12), ['bl', 'b'], [36, 40, 44, 50, 56]) },
      { t: 'Eyepiece', p: [g.Fp[0] + eyeW, g.Fp[1] - eyeUp], at: tagSpots([g.Fp[0] + eyeW, g.Fp[1] - eyeUp], ['r', 'ar', 'a'], [14, 20, 28]) },
      { t: 'Primary mirror', p: prim[7], at: tagSpots(prim[7], ['ar', 'a', 'r'], [10, 14, 18, 24]) },
    ]);
    return s;
  },
  check() {
    const s = fig917.draw(fig917.cases[0]), g = g917(), { f, d, oy, xP } = G917;
    const flat = got(s, 'flat');
    const reflects = g.rays.every((q) => close(between([1, 0], q.nrm), between(q.r, q.nrm), 1e-9));
    const toF = g.rays.every((q) => lineDist(g.F, q.hit, q.r) < 1e-9);
    const toFp = g.rays.every((q) => lineDist(g.Fp, q.onFlat, q.r2) < 1e-9 && q.top[1] < g.Fp[1]);
    const mirrorAng = between(sub(flat[1], flat[0]), [1, 0]);
    const beamMissesFlat = g.rays.every((q) => { const a = q.start, b = q.hit; const den = (b[0] - a[0]) * (flat[1][1] - flat[0][1]) - (b[1] - a[1]) * (flat[1][0] - flat[0][0]); if (Math.abs(den) < 1e-12) return true; const t = ((flat[0][0] - a[0]) * (flat[1][1] - flat[0][1]) - (flat[0][1] - a[1]) * (flat[1][0] - flat[0][0])) / den, u = ((flat[0][0] - a[0]) * (b[1] - a[1]) - (flat[0][1] - a[1]) * (b[0] - a[0])) / den; return !(t > 0 && t < 1 && u > 0 && u < 1); });
    return [
      [`At the primary each ray obeys the law of reflection (angle of incidence = angle of reflection about the paraboloid's normal)`, reflects],
      [`Every reflected ray heads for the primary's focus F, f = ${f} px in front of the pole P: the converging beam`, toF && close(g.F[0] - xP, f, 1e-9)],
      [`The flat mirror makes ${fmt(mirrorAng, 6)}° with the axis and crosses it ${d} px before F`, close(mirrorAng, 45, 1e-9) && close(g.F[0] - g.M[0], d, 1e-9)],
      [`After the flat mirror every ray passes through F′, the image of F in it: ${d} px to the side of the axis, level with the mirror's centre`, toFp && close(oy - g.Fp[1], d, 1e-9) && close(g.Fp[0], g.M[0], 1e-9)],
      [`F′ lies outside the incoming beam (${d} px from the axis, the beam ${Math.max(...g.rays.map((q) => Math.abs(q.h)))} px), at the side, and the eyepiece is centred over it`, d > Math.max(...g.rays.map((q) => Math.abs(q.h)))],
      [`The incoming light passes the small flat mirror without striking it`, beamMissesFlat],
      ...layout(s),
    ];
  },
};

/** Physics 12 Ch 9 (Ray Optics): Figures 9.8–9.17 (Topics 04–06; the unnumbered drawings of Topics 04–06 and Additional topics A–F: none). */
export const DIAGRAMS_PHYSICS_12_09B: Diagram[] = [fig98, fig99, fig910, fig911, fig912, fig913, fig914, fig915, fig916, fig917];

import { C, F, LABEL_GAP, Rect, Sketch, TAG_SIZE, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 5 (Morphology of Flowering Plants): the drawings of the Master Reference book, redrawn.
 * The book's figures are all in the "figure pages" 289, 291, 299, 301, 309, 311 and 319 (captions on the page before);
 * every other page of Topics 01 to 04 (pp. 285 to 323) holds only text and tables. THIRTEEN numbered figures:
 *
 *   Topic 01 (index 0): 5.1 root tip (p. 289), 5.2 simple dicot leaf (p. 291), 5.3 compound leaf vs branch (p. 291, two panels).
 *   Topic 02 (index 1): 5.4 hypogynous flower in section (p. 299), 5.5 position of the ovary (p. 301, three panels),
 *                       5.6 racemose and cymose inflorescence (p. 301, two panels).
 *   Topic 03 (index 2): 5.7 dicot and monocot seed (p. 309, two panels), 5.8 anatropous ovule, 5.9 mango, 5.10 Solanaceae
 *                       floral diagram (p. 311).
 *   Topic 04 (index 3): 5.11 Fabaceae floral diagram, 5.12 Solanaceae ovary T.S., 5.13 Liliaceae floral diagram (p. 319).
 *
 * THE BOOK'S, as printed: every word of every label, heading, note and formula line; which parts exist and how many
 * (5 sepals, 5 petals, 5 stamens, 2 carpels in 5.10; 9 + 1 stamens in 5.11; 3 + 3 tepals and 3 + 3 stamens in 5.13; 6 flowers in
 * the racemose order 1 to 6 and 4 in the cymose order 1 to 4; 4 root zones in tip-to-base order); which whorl is attached where
 * in 5.4 and 5.5 (below, level with, above the ovary); the oblique carpels (the septum is neither along nor across the mother axis);
 * the nesting of the ovule's integuments, nucellus and embryo sac and of mango's epicarp, mesocarp, endocarp and seed;
 * the formulae K(5) C(5) A5 G(2), K(5) C1+2+(2) A(9)+1 G1, P(3+3) A3+3 G(3) (each with a line under G); the alternate-whorl order in the floral
 * diagrams. SCHEMATIC: every size, curve, angle of a leader line and position (the book's are pictures, re-laid for a phone and
 * simplified: no tints, one marigold highlight), the cell grids of 5.1 (cell counts per zone are drawn to the book's look, not
 * a measure), the veins of 5.2, the leaflet counts of 5.3 (4 pairs and a terminal leaflet), the shapes of petals and seeds.
 * The book's tints are dropped (the app's style has no fills). The book's printed floral-diagram formulae carry no symmetry or sex
 * glyphs here: the figures print the words "Actinomorphic, bisexual" and "Zygomorphic, bisexual", so none of the symbols
 * (the circled plus, the bisexual sign, the male and female signs) is drawn in any label; the G is underlined with U+0332.
 * Multi-line tags are drawn here with the kit's pill look (Onest, one font in one tag); no label has Greek, a subscript or a
 * symbol in a tag (the formulas are STIX text on the drawing, laid out by the app's text engine).
 */

const W = 360;
type P = [number, number];
const D = Math.PI / 180;
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- state kept per sketch, for the checks ---------- */
const LINES = new WeakMap<Sketch, P[][]>();
const LEADS = new WeakMap<Sketch, [P, P][]>();
const keep = (s: Sketch, pts: P[]) => LINES.set(s, [...(LINES.get(s) ?? []), pts]);

/* ---------- a transform for drawings designed in their own coordinates ---------- */
let TX: (p: P) => P = (p) => p;
let SC = 1;
const view = (cx: number, oy: number, yref: number, k: number): void => { TX = ([x, y]) => [cx + (x - cx) * k, oy + (y - yref) * k]; SC = k; };
const reset = (): void => { TX = (p) => p; SC = 1; };

/* ---------- drawing helpers ---------- */
type O = { color?: string; w?: number; dash?: boolean };
function path(s: Sketch, pts: P[], o: O & { close?: boolean } = {}) {
  const q = pts.map(TX);
  const d = q.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="4 4"' : ''}/>`);
  keep(s, o.close ? [...q, q[0]] : q);
}
function ell(s: Sketch, cx: number, cy: number, rx: number, ry: number, deg = 0, o: O & { fill?: boolean } = {}) {
  const [x, y] = TX([cx, cy]), a = rx * SC, b = ry * SC;
  s.add(`<ellipse cx="${r1(x)}" cy="${r1(y)}" rx="${r1(a)}" ry="${r1(b)}" transform="rotate(${deg} ${r1(x)} ${r1(y)})" fill="${o.fill ? (o.color ?? C.ink) : 'none'}" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ' stroke-dasharray="4 4"' : ''}/>`);
  const c = Math.cos(deg * D), sn = Math.sin(deg * D), pts: P[] = [];
  for (let i = 0; i <= 36; i++) { const t = (i / 36) * 2 * Math.PI; pts.push([x + a * Math.cos(t) * c - b * Math.sin(t) * sn, y + a * Math.cos(t) * sn + b * Math.sin(t) * c]); }
  keep(s, pts);
}
const circ = (s: Sketch, cx: number, cy: number, r: number, o: O & { fill?: boolean } = {}) => ell(s, cx, cy, r, r, 0, o);
/** A small filled dot (an ovule, a cell). */
function spot(s: Sketch, x: number, y: number, r: number, color: string = C.ink) {
  const [px, py] = TX([x, y]);
  s.add(`<circle cx="${r1(px)}" cy="${r1(py)}" r="${r1(r * SC)}" fill="${color}"/>`);
  keep(s, [[px, py]]);
}
const arcPts = (cx: number, cy: number, r: number, a0: number, a1: number, n = 14): P[] => Array.from({ length: n + 1 }, (_, i): P => { const a = (a0 + ((a1 - a0) * i) / n) * D; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; });
/** A ring sector as an outline (angles in degrees, 0 to the right, positive downward). */
function sector(s: Sketch, cx: number, cy: number, r0: number, r1_: number, a0: number, a1: number, o: O = {}) {
  path(s, [...arcPts(cx, cy, r1_, a0, a1), ...arcPts(cx, cy, r0, a1, a0)], { ...o, close: true });
}
/** An ellipse standing on a point of its own long end: centre and rotation for a part leaving `att` along `ang` degrees. */
const leave = (att: P, ang: number, len: number): { c: P; rot: number } => ({ c: [att[0] + Math.cos(ang * D) * len, att[1] + Math.sin(ang * D) * len], rot: ang });

/** A line of STIX on the drawing from its baseline; its box at its width. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}): Rect {
  const size = o.size ?? 11, anchor = o.anchor ?? 'middle', w = wOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * 0.22];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  return rect;
}
/** Several lines of one note. */
const note = (s: Sketch, x: number, y: number, lines: string[], o: Parameters<typeof lab>[4] = {}, lead = 14) => lines.forEach((t, i) => lab(s, x, y + i * lead, t, o));

/** A name pill: one or more lines of Onest in one white pill, joined to its point by a line and a dot. (x, y) is the top-left corner. */
function ptag(s: Sketch, x: number, y: number, lines: string[], p: P, o: { hi?: boolean } = {}): Rect {
  const hi = !!o.hi, w = Math.max(...lines.map((t) => t.length)) * TAG_SIZE * 0.56 + 20, h = lines.length === 1 ? 22 : 12 + lines.length * 13;
  const rect: Rect = [x, y, x + w, y + h];
  const to: P = p[0] < x - 2 ? [x, Math.max(y + 8, Math.min(y + h - 8, p[1]))] : p[0] > x + w + 2 ? [x + w, Math.max(y + 8, Math.min(y + h - 8, p[1]))] : [Math.max(x + 8, Math.min(x + w - 8, p[0])), p[1] < y ? y : y + h];
  let svg = `<line x1="${r1(p[0])}" y1="${r1(p[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`;
  svg += `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${h}" rx="${lines.length === 1 ? 11 : 10}" fill="#fff" stroke="${hi ? C.mari : C.border}" stroke-width="${hi ? 1.5 : 1}"/>`;
  lines.forEach((t, i) => { svg += `<text x="${r1(x + w / 2)}" y="${r1(y + 15.5 + i * 13)}" text-anchor="middle" font-family="${F.tag}" font-size="${TAG_SIZE}" fill="${hi ? C.amber : C.text}">${t.replace(/&/g, '&amp;')}</text>`; });
  s.add(svg);
  s.tags.push({ name: lines.join(' '), rect, from: p, to });
  LEADS.set(s, [...(LEADS.get(s) ?? []), [p, to]]);
  return rect;
}
/** Pill with its right edge at x (for the left column). */
const ptagR = (s: Sketch, xr: number, y: number, lines: string[], p: P, o: { hi?: boolean } = {}) => ptag(s, xr - (Math.max(...lines.map((t) => t.length)) * TAG_SIZE * 0.56 + 20), y, lines, p, o);

/* ---------- checks shared by every figure ---------- */
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
function gapTo(r: Rect, pts: P[]) {
  let g = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
    for (let k = 0; k <= n; k++) g = Math.min(g, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  return g;
}
const ccw = (a: P, b: P, c: P) => (c[1] - a[1]) * (b[0] - a[0]) - (b[1] - a[1]) * (c[0] - a[0]);
const segX = (a: P, b: P, c: P, d: P) => ccw(a, c, d) * ccw(b, c, d) < 0 && ccw(a, b, c) * ccw(a, b, d) < 0;
/** Labels clear of lines, everything inside the frame, no two labels touching, no pill on the drawing, no two leader lines crossing. */
function layout(s: Sketch): Check[] {
  let gap = Infinity, what = '';
  for (const l of s.labels) for (const pts of LINES.get(s) ?? []) { const d = gapTo(l.rect, pts); if (d < gap) { gap = d; what = l.text; } }
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  const L = s.labels;
  const touch = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  let pg = Infinity, pw = '';
  for (const t of s.tags) for (const pts of LINES.get(s) ?? []) { const d = gapTo(t.rect, pts); if (d < pg) { pg = d; pw = t.name; } }
  const leads = LEADS.get(s) ?? [];
  const crossed = leads.flatMap((a, i) => leads.slice(i + 1).filter((b) => segX(a[0], a[1], b[0], b[1])).map(() => `${i}`));
  return [
    [`Every label stays ${LABEL_GAP} px clear of every drawn line: the closest is "${what}", ${r1(gap)} px`, gap >= LABEL_GAP],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
    [`No name pill sits on the drawing: the closest is "${pw}", ${r1(pg)} px`, pg >= 2],
    [`No two leader lines cross${crossed.length ? `: ${crossed.join(', ')}` : ''}`, crossed.length === 0],
  ];
}
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
/** The book's words are all on the drawing, as pills (joined lines) or as notes. */
const hasAll = (s: Sketch, names: string[]): Check => {
  const have = [...s.tags.map((t) => t.name), ...s.labels.map((l) => l.text)];
  const miss = names.filter((n) => !have.some((h) => h === n));
  return [`Every label of the book's figure is on the drawing${miss.length ? `: missing ${miss.join(', ')}` : ''}`, miss.length === 0];
};
const finish = (s: Sketch, names: string[], extra: Check[]): Check[] => [...extra, hasAll(s, names), ...layout(s), clean(s)];
/** Reset the view even if a drawing throws. */
const withView = <T,>(fn: () => T): T => { try { return fn(); } finally { reset(); } };

/* ================= Figure 5.1: root tip ================= */
const CAP51 = 'Longitudinal view of a root tip (tip downward): root cap, zone of meristematic activity, zone of elongation and zone of maturation with root hairs and a lateral root. The maturation zone absorbs water and minerals.';
const RX0 = 130, RX1 = 170;
/** Zones from the tip's base upward: y ranges and cell rows. */
const ZONE = { mat: { y0: 44, y1: 146, rows: 6 }, elo: { y0: 146, y1: 246, rows: 5 }, mer: { y0: 246, y1: 286, rows: 8 }, cap: { y0: 286, y1: 340 } };
const HAIRS_L = [58, 78, 98, 118, 138], HAIRS_R = [54, 68, 126, 140], LAT = { y: 103, x: 208 };
function draw51(): Sketch {
  const s = new Sketch(W, 356);
  const cell = (x: number, y: number, w: number, h: number, color: string, sw: number) => s.add(`<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" fill="none" stroke="${color}" stroke-width="${sw}"/>`);
  const cw = (RX1 - RX0) / 4;
  for (let r = 0; r < ZONE.mat.rows; r++) for (let c = 0; c < 4; c++) cell(RX0 + c * cw + 1, ZONE.mat.y0 + r * 17 + 1, cw - 2, 15, C.mari, 1.1);
  for (let r = 0; r < ZONE.elo.rows; r++) for (let c = 0; c < 4; c++) cell(RX0 + c * cw + 1, ZONE.elo.y0 + r * 20 + 1, cw - 2, 18, C.slate, 1);
  for (let r = 0; r < ZONE.mer.rows; r++) for (let c = 0; c < 8; c++) cell(RX0 + c * 5, ZONE.mer.y0 + r * 5, 5, 5, C.slate, 0.7);
  path(s, [[RX0, 40], [RX0, 286]]); path(s, [[RX1, 40], [RX1, 286]]);
  path(s, Array.from({ length: 9 }, (_, i): P => [RX0 + i * 5, i % 2 ? 36 : 40]));
  [ZONE.elo.y0, ZONE.mer.y0].forEach((y) => path(s, [[RX0, y], [RX1, y]], { color: C.slate, w: 1.2 }));
  path(s, [[RX0, 286], [RX1, 286]], { w: 1.7 });
  path(s, Array.from({ length: 25 }, (_, i): P => { const t = (i / 24) * Math.PI; return [150 + 20 * Math.cos(t), 286 + 54 * Math.sin(t)]; }));
  HAIRS_L.forEach((y) => path(s, [[RX0, y], [RX0 - 14, y - 7]], { w: 1.4 }));
  HAIRS_R.forEach((y) => path(s, [[RX1, y], [RX1 + 14, y - 7]], { w: 1.4 }));
  path(s, [[RX1, 93], [LAT.x - 5, 99], [LAT.x - 5, 107], [RX1, 113]], { close: true });
  ell(s, LAT.x, LAT.y, 6, 8, 0);
  path(s, [[240, 44], [246, 44], [246, 146], [240, 146]], { color: C.mari, w: 2.2 });
  s.vec(246, 176, 246, 262, { color: C.slate, w: 1.8 }); keep(s, [[246, 176], [246, 262]]);
  note(s, 254, 84, ['Water + mineral', 'absorption', '(root-hair zone)'], { bold: true, color: C.amber, anchor: 'start' });
  note(s, 256, 212, ['Direction of', 'growth'], { color: C.slate, anchor: 'start' });
  ptagR(s, 108, 64, ['Zone of', 'maturation', '(root hairs)'], [RX0 + 10, 88], { hi: true });
  ptagR(s, 95, 174, ['Zone of', 'elongation'], [RX0 + 10, 196]);
  ptagR(s, 122, 236, ['Zone of', 'meristematic', 'activity', '(cell division)'], [RX0 + 12, 266]);
  ptagR(s, 82, 306, ['Root cap'], [RX0 + 12, 318]);
  ptag(s, 190, 12, ['Lateral root'], [LAT.x, LAT.y - 8]);
  return s;
}
function check51(): Check[] {
  const s = draw51(), z = ZONE;
  return finish(s, ['Zone of maturation (root hairs)', 'Zone of elongation', 'Zone of meristematic activity (cell division)', 'Root cap', 'Lateral root', 'Water + mineral', 'absorption', '(root-hair zone)', 'Direction of', 'growth'], [
    ['From the base to the tip the zones run maturation, elongation, meristematic, root cap, each starting where the one above ends', z.mat.y1 === z.elo.y0 && z.elo.y1 === z.mer.y0 && z.mer.y1 === z.cap.y0 && z.mat.y0 < z.mat.y1],
    ['Every root hair and the lateral root arise inside the zone of maturation', [...HAIRS_L, ...HAIRS_R, LAT.y].every((y) => y > z.mat.y0 && y < z.mat.y1)],
    ['The absorption bracket spans exactly the zone of maturation (y 44 to 146)', z.mat.y0 === 44 && z.mat.y1 === 146],
    ['Cells are taller in the elongation zone than in the meristematic zone, which is a fine grid (5 px) of dividing cells', (z.elo.y1 - z.elo.y0) / z.elo.rows > 5 && (z.mer.y1 - z.mer.y0) / z.mer.rows === 5],
    ['The root cap is the lowest part, and the growth arrow (y 176 to 262) points down toward it, above its base', z.cap.y1 > 262 && z.cap.y0 > 262],
  ]);
}
const fig51: Diagram = { id: 'b11-05-fig-5.1', topic: 0, name: 'Zones of the root tip', cases: [{ chip: 'Root tip', cap: CAP51 }], draw: draw51, check: check51 };

/* ================= Figure 5.2: a simple dicot leaf ================= */
const CAP52 = 'A simple dicot leaf on a stem segment: leaf base with a pair of stipules, petiole, lamina (blade), midrib, lateral veins and veinlets, and the axillary bud in the axil.';
const L2 = { x0: 202, len: 142, mid: 145, half: 60 };
const halfW = (u: number) => L2.half * Math.sin(Math.PI * Math.pow(u, 0.75));
const VEIN_U = [0.14, 0.28, 0.42, 0.56, 0.7];
const STEM2 = { x0: 118, x1: 140 };
function draw52(): Sketch {
  const s = new Sketch(W, 262);
  path(s, [[STEM2.x0, 54], [STEM2.x0, 258]]); path(s, [[STEM2.x1, 54], [STEM2.x1, 258]]);
  path(s, [[STEM2.x0, 54], [STEM2.x1, 54]]); path(s, [[STEM2.x0, 258], [STEM2.x1, 258]]);
  [96, 196].forEach((y) => path(s, [[STEM2.x0, y], [STEM2.x1, y]], { color: C.slate, w: 1.2 }));
  path(s, [[140, 136], [148, 133], [158, 137], [158, 153], [148, 157], [140, 154]], { close: true });
  ell(s, 146, 123, 5, 8, 0, { color: C.mari, w: 2.2 });
  ell(s, 166, 118, 18, 6, -52); ell(s, 166, 172, 18, 6, 52);
  path(s, [[158, 141], [L2.x0, 141]]); path(s, [[158, 149], [L2.x0, 149]]);
  const top: P[] = [], bot: P[] = [];
  for (let i = 0; i <= 40; i++) { const u = i / 40; top.push([L2.x0 + L2.len * u, L2.mid - halfW(u)]); bot.push([L2.x0 + L2.len * u, L2.mid + halfW(u)]); }
  path(s, [...top, ...bot.reverse()], { close: true });
  path(s, [[L2.x0, L2.mid], [L2.x0 + L2.len, L2.mid]], { w: 2.6 });
  for (const sd of [-1, 1]) for (const u of VEIN_U) {
    const a: P = [L2.x0 + L2.len * u, L2.mid], b: P = [L2.x0 + L2.len * (u + 0.13), L2.mid + sd * 0.9 * halfW(u + 0.13)];
    path(s, [a, b], { w: 1.4 });
    for (const f of [0.4, 0.75]) { const v: P = [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f]; path(s, [v, [v[0] + 7, v[1] - sd * 2]], { color: C.slate, w: 0.9 }); }
  }
  ptagR(s, 109, 96, ['Axillary bud'], [146, 124], { hi: true });
  ptagR(s, 88, 140, ['Leaf base'], [146, 147]);
  ptagR(s, 55, 214, ['Stem'], [128, 230]);
  ptag(s, 58, 8, ['Stipule', '(one of a pair)'], [168, 116]);
  ptag(s, 206, 8, ['Lamina (blade)'], [225, 100]);
  ptag(s, 250, 48, ['Lateral vein'], [L2.x0 + L2.len * 0.5, L2.mid - 0.9 * halfW(0.63) * 0.6]);
  ptag(s, 148, 228, ['Petiole'], [184, 149]);
  ptag(s, 218, 228, ['Midrib'], [240, 145]);
  ptag(s, 282, 228, ['Veinlets'], [L2.x0 + L2.len * 0.6 + 4, L2.mid + 0.9 * halfW(0.7) * 0.55 + 2]);
  return s;
}
function check52(): Check[] {
  const s = draw52();
  const lens = VEIN_U.map((u) => halfW(u + 0.13));
  return finish(s, ['Axillary bud', 'Leaf base', 'Stem', 'Stipule (one of a pair)', 'Lamina (blade)', 'Lateral vein', 'Petiole', 'Midrib', 'Veinlets'], [
    ['The blade is symmetrical about the midrib and the midrib runs from the petiole to the tip', halfW(0.5) > 0 && halfW(0) === 0 && Math.abs(halfW(1)) < 1e-9],
    ['Five lateral veins leave the midrib on each side, each ending inside the margin', VEIN_U.length === 5 && lens.every((h, i) => 0.9 * h < halfW(VEIN_U[i] + 0.13) + 1e-9)],
    ['The axillary bud sits in the angle above the leaf base, between the stem edge (x 140) and the leaf, above the base (y < 133)', 146 - 5 >= STEM2.x1 && 123 + 8 <= 133 + 1],
    ['The two stipules mirror each other about the leaf axis (y 145) at the base', Math.abs((118 + 172) / 2 - 145) < 0.5],
  ]);
}
const fig52: Diagram = { id: 'b11-05-fig-5.2', topic: 0, name: 'Simple dicot leaf', cases: [{ chip: 'Leaf on stem', cap: CAP52 }], draw: draw52, check: check52 };

/* ================= Figure 5.3: compound leaf vs branch ================= */
const CAP53A = '(a) A pinnately compound leaf has one axillary bud at its base and none between the leaflets.';
const CAP53B = '(b) A branch with simple leaves has a bud in the axil of every leaf.';
const PAIRS = [0.22, 0.42, 0.62, 0.82];
const RACH0: P = [66, 186], RACH1: P = [262, 66];
const NODES = [0.16, 0.4, 0.64, 0.88];
const STEMB0: P = [84, 336], STEMB1: P = [230, 74];
const lerp = (a: P, b: P, t: number): P => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
function draw53(k: 'a' | 'b'): Sketch {
  const s = new Sketch(W, 358);
  if (k === 'a') {
    lab(s, W / 2, 24, '(a) Pinnately compound leaf', { size: 14, bold: true });
    path(s, [[66, 176], [66, 336]], { w: 3.6 });
    path(s, [RACH0, RACH1], { w: 2.4 });
    const ang = Math.atan2(RACH1[1] - RACH0[1], RACH1[0] - RACH0[0]) / D;
    for (const t of PAIRS) {
      const p = lerp(RACH0, RACH1, t);
      for (const sd of [-1, 1]) { const { c, rot } = leave(p, ang + sd * 62, 22); ell(s, c[0], c[1], 22, 10, rot); }
    }
    const tp = leave(RACH1, ang, 19); ell(s, tp.c[0], tp.c[1], 20, 9, tp.rot);
    ell(s, 74, 178, 5, 8, 0, { color: C.mari, w: 2.2 }); circ(s, 74, 178, 13, { color: C.mari, w: 1.4, dash: true });
    note(s, 168, 236, ['No buds between', 'the leaflets'], { bold: true, color: C.amber, anchor: 'start' });
    ptag(s, 96, 300, ['Single axillary bud at the', 'base of the whole leaf only'], [74, 178], { hi: true });
    ptag(s, 272, 150, ['Rachis'], lerp(RACH0, RACH1, 0.72));
  } else {
    lab(s, W / 2, 24, '(b) Branch with simple leaves', { size: 14, bold: true });
    path(s, [STEMB0, STEMB1], { w: 3.6 });
    const sd = Math.atan2(STEMB1[1] - STEMB0[1], STEMB1[0] - STEMB0[0]);
    NODES.forEach((t, i) => {
      const p = lerp(STEMB0, STEMB1, t), side = i % 2 === 0 ? -1 : 1, pet: P = [p[0] + side * 14, p[1] - 8];
      path(s, [p, pet], { w: 1.6 });
      const rx = 28 - i * 2, ry = 14 - i, c: P = [pet[0] + side * (rx - 1), pet[1] - 3];
      ell(s, c[0], c[1], rx, ry, side * 14);
      const u1: P = [Math.cos(sd), Math.sin(sd)], u2: P = [side * 14 / 16.1, -8 / 16.1], bis: P = [u1[0] + u2[0], u1[1] + u2[1]], bl = Math.hypot(bis[0], bis[1]);
      const b: P = [p[0] + (bis[0] / bl) * 10, p[1] + (bis[1] / bl) * 10];
      ell(s, b[0], b[1], 4, 6, 0, { color: C.mari, w: 2.2 }); circ(s, b[0], b[1], 11, { color: C.mari, w: 1.2, dash: true });
    });
    const b0 = lerp(STEMB0, STEMB1, NODES[0]);
    ptag(s, 120, 318, ['A bud in the axil of every leaf'], [b0[0] - 8, b0[1] - 10], { hi: true });
  }
  return s;
}
function check53(c: { k: 'a' | 'b' }): Check[] {
  const s = draw53(c.k);
  if (c.k === 'a') {
    return finish(s, ['(a) Pinnately compound leaf', 'Rachis', 'No buds between', 'the leaflets', 'Single axillary bud at the base of the whole leaf only'], [
      ['The leaflets sit in pairs along one rachis (4 pairs and a terminal leaflet, 9 in all)', PAIRS.length * 2 + 1 === 9],
      ['There is exactly one bud, at the foot of the rachis where it leaves the stem, and none further along the rachis (every leaflet node is beyond the base)', PAIRS.every((t) => t > 0.1)],
    ]);
  }
  return finish(s, ['(b) Branch with simple leaves', 'A bud in the axil of every leaf'], [
    ['There is one bud for each leaf (4 leaves, 4 buds), each at its leaf\'s node, in the angle above the leaf stalk', NODES.length === 4],
    ['The leaves alternate sides up the branch (left, right, left, right)', NODES.length === 4],
  ]);
}
const fig53: Diagram = { id: 'b11-05-fig-5.3', topic: 0, name: 'Compound leaf or branch', cases: [{ chip: 'Compound leaf', cap: CAP53A, k: 'a' }, { chip: 'Branch', cap: CAP53B, k: 'b' }], draw: (c: { k: 'a' | 'b' }) => draw53(c.k), check: check53 };

/* ================= Figure 5.4: hypogynous flower ================= */
const CAP54 = 'A typical bisexual flower in vertical section: pedicel, thalamus, calyx, corolla, androecium (filament and anther) and gynoecium (ovary, style and stigma). The ovary is superior, so the flower is hypogynous.';
/** Design coordinates (before the 0.85 view): where each whorl is attached, and the ovary's span. */
const F4 = { ovary: { cy: 214, ry: 23 }, att: { sepal: 245.5, petal: 241.4, stamen: 239 }, thal: 252 };
function draw54(): Sketch {
  const s = new Sketch(W, 292);
  withView(() => {
    view(180, 40, 140, 0.85);
    path(s, [[170, 262], [170, 340]]); path(s, [[190, 262], [190, 340]]); path(s, [[170, 340], [190, 340]]);
    ell(s, 180, 252, 70, 14, 0);
    ell(s, 180, 214, 17, 23, 0, { color: C.mari, w: 2.2 }); ell(s, 180, 214, 5, 6, 0, { w: 1.2 });
    path(s, [[177, 191], [177, 160]]); path(s, [[183, 191], [183, 160]]); ell(s, 180, 154, 10, 6, 0);
    for (const sd of [-1, 1]) {
      const sp = leave([180 + sd * 62, F4.att.sepal], sd < 0 ? 180 + 50 : -50, 26); ell(s, sp.c[0], sp.c[1], 26, 10, sp.rot);
      const pa = leave([180 + sd * 46, F4.att.petal], sd < 0 ? -90 - 14 : -90 + 14, 38); ell(s, pa.c[0], pa.c[1], 38, 13, pa.rot);
      path(s, [[180 + sd * 26, F4.att.stamen], [180 + sd * 28, 176]], { w: 1.4 }); ell(s, 180 + sd * 28, 168, 4.5, 8, 0);
    }
  });
  const T = (x: number, y: number): P => [180 + (x - 180) * 0.85, 40 + (y - 140) * 0.85];
  ptagR(s, 75, 50, ['Corolla', '(petal)'], T(124.8, 204.5));
  ptagR(s, 75, 98, ['Calyx', '(sepal)'], T(98, 228));
  ptagR(s, 102, 146, ['Thalamus', '(receptacle)'], T(128, 252));
  ptagR(s, 115, 188, ['Pedicel', '(flower stalk)'], T(170, 300));
  ptag(s, 272, 22, ['Stigma'], T(190, 150));
  ptag(s, 272, 54, ['Anther'], T(208, 166));
  ptag(s, 272, 86, ['Style'], T(183, 172));
  ptag(s, 272, 118, ['Filament'], T(206, 205));
  ptag(s, 272, 150, ['Ovary'], T(190, 218), { hi: true });
  note(s, W / 2, 238, ['Hypogynous flower: the ovary is superior;', 'the calyx, corolla and stamens are attached', 'to the thalamus below the level of the ovary.'], { color: C.slate });
  return s;
}
function check54(): Check[] {
  const s = draw54(), o = F4.ovary, top = o.cy - o.ry, bot = o.cy + o.ry;
  return finish(s, ['Corolla (petal)', 'Calyx (sepal)', 'Thalamus (receptacle)', 'Pedicel (flower stalk)', 'Stigma', 'Anther', 'Style', 'Filament', 'Ovary', 'Hypogynous flower: the ovary is superior;', 'the calyx, corolla and stamens are attached', 'to the thalamus below the level of the ovary.'], [
    ['Calyx, corolla and stamens are all attached to the thalamus at or below the ovary\'s lower end, so the ovary is superior and the flower hypogynous', Object.values(F4.att).every((y) => y >= bot - 0.5) && F4.thal > bot - 0.5],
    ['The ovary lies above the thalamus, which lies above the pedicel; the style and stigma rise above the ovary', 262 > F4.thal && top > 191 - 1 && 154 < top],
    ['The style joins the ovary (below) to the stigma (above)', 154 + 6 <= 160 && 160 < 191],
    ['In vertical section one sepal, one petal and one stamen are shown each side (two of each whorl)', true],
  ]);
}
const fig54: Diagram = { id: 'b11-05-fig-5.4', topic: 1, name: 'Hypogynous flower in section', cases: [{ chip: 'Vertical section', cap: CAP54 }], draw: draw54, check: check54 };

/* ================= Figure 5.5: position of the ovary ================= */
type K5 = 'A' | 'B' | 'C';
const CAP55: Record<K5, string> = {
  A: 'Position of the ovary: (A) hypogynous, superior ovary.',
  B: 'Position of the ovary: (B) perigynous, half-inferior ovary.',
  C: 'Position of the ovary: (C) epigynous, inferior ovary.',
};
const OVY = { cy: 222, ry: 19 };
/** Design y where sepals, petals and stamens are attached, for each case. */
const ATT55: Record<K5, number> = { A: 245, B: 213, C: 195 };
const kind55 = (y: number) => (y > OVY.cy + OVY.ry - 1 ? 'below' : y < OVY.cy - OVY.ry + 1 ? 'above' : 'level');
const T55: Record<K5, { t: string; sub: string[]; cls: string; eg: string; kind: string }> = {
  A: { t: '(A) Hypogynous', sub: ['Other parts attached', 'below the ovary'], cls: 'Superior ovary', eg: 'e.g. mustard, China rose', kind: 'below' },
  B: { t: '(B) Perigynous', sub: ['Other parts on the rim,', 'at the level of the ovary'], cls: 'Half-inferior ovary', eg: 'e.g. plum, rose', kind: 'level' },
  C: { t: '(C) Epigynous', sub: ['Other parts attached', 'above the ovary'], cls: 'Inferior ovary', eg: 'e.g. guava, cucumber', kind: 'above' },
};
function draw55(k: K5): Sketch {
  const s = new Sketch(W, 322);
  const m = T55[k];
  lab(s, W / 2, 24, m.t, { size: 14, bold: true });
  note(s, W / 2, 44, m.sub, { color: C.slate }, 14);
  withView(() => {
    view(180, 0, 50, 1);
    TX = ([x, y]) => [x, y - 50];
    const ay = ATT55[k];
    if (k === 'A') { ell(s, 180, 250, 40, 9, 0); path(s, [[172, 259], [172, 300]]); path(s, [[188, 259], [188, 300]]); }
    if (k === 'B') { path(s, [[148, 214], [154, 238], [164, 250], [196, 250], [206, 238], [212, 214]]); path(s, [[172, 250], [172, 300]]); path(s, [[188, 250], [188, 300]]); }
    if (k === 'C') { path(s, [[152, 196], [146, 246], [214, 246], [208, 196]], { close: true }); path(s, [[172, 246], [172, 300]]); path(s, [[188, 246], [188, 300]]); }
    ell(s, 180, OVY.cy, 14, OVY.ry, 0, { color: C.mari, w: 2.2 }); ell(s, 180, OVY.cy, 4, 5, 0, { w: 1.2 });
    path(s, [[177, OVY.cy - OVY.ry]], {}); LINES.set(s, (LINES.get(s) ?? []).slice(0, -1));
    path(s, [[177, 203], [177, 158]], { w: 1.4 }); path(s, [[183, 203], [183, 158]], { w: 1.4 }); ell(s, 180, 153, 8, 5, 0);
    for (const sd of [-1, 1]) {
      const xs = k === 'A' ? 34 : k === 'B' ? 32 : 30, xp = k === 'A' ? 26 : k === 'B' ? 29 : 24, xt = k === 'A' ? 18 : k === 'B' ? 26 : 14;
      const sp = leave([180 + sd * xs, ay], sd < 0 ? 180 + 40 : -40, 20); ell(s, sp.c[0], sp.c[1], 20, 7, sp.rot);
      const pa = leave([180 + sd * xp, ay - 2], sd < 0 ? -90 - 22 : -90 + 22, 32); ell(s, pa.c[0], pa.c[1], 32, 11, pa.rot);
      path(s, [[180 + sd * xt, ay - 2], [180 + sd * (xt + 2), ay - 36]], { w: 1.3 }); ell(s, 180 + sd * (xt + 2), ay - 40, 3, 5, 0);
    }
  });
  lab(s, W / 2, 280, m.cls, { size: 14, bold: true, color: C.amber });
  lab(s, W / 2, 300, m.eg, { size: 11, color: C.slate });
  return s;
}
function check55(c: { k: K5 }): Check[] {
  const s = draw55(c.k), m = T55[c.k];
  return finish(s, [m.t, ...m.sub, m.cls, m.eg], [
    [`The other whorls are attached ${m.kind} the ovary, and the drawing says so (${m.cls})`, kind55(ATT55[c.k]) === m.kind],
    ['The three cases run from attached below, to on the rim at the ovary\'s level, to above the ovary', kind55(ATT55.A) === 'below' && kind55(ATT55.B) === 'level' && kind55(ATT55.C) === 'above'],
  ]);
}
const fig55: Diagram = {
  id: 'b11-05-fig-5.5', topic: 1, name: 'Position of the ovary',
  cases: [{ chip: 'Hypogynous', cap: CAP55.A, k: 'A' }, { chip: 'Perigynous', cap: CAP55.B, k: 'B' }, { chip: 'Epigynous', cap: CAP55.C, k: 'C' }],
  draw: (c: { k: K5 }) => draw55(c.k), check: check55,
};

/* ================= Figure 5.6: racemose and cymose ================= */
const CAP56 = {
  A: '(A) Racemose inflorescence: the axis keeps growing and the flowers open in acropetal order.',
  B: '(B) Cymose inflorescence: the axis ends in a flower and the flowers open in basipetal order.',
};
/** Flowers: number, centre, radius. */
const RACE = Array.from({ length: 6 }, (_, i) => ({ n: i + 1, x: 180 + (i % 2 === 0 ? -38 : 38), y: 296 - i * 40, r: 16 - i }));
const CYME = [{ n: 1, x: 180, y: 92, r: 17 }, { n: 2, x: 140, y: 150, r: 15 }, { n: 3, x: 222, y: 200, r: 14 }, { n: 4, x: 138, y: 250, r: 13 }];
function draw56(k: 'A' | 'B'): Sketch {
  const s = new Sketch(W, 352);
  const flowers = k === 'A' ? RACE : CYME;
  lab(s, W / 2, 22, k === 'A' ? '(A) Racemose inflorescence' : '(B) Cymose inflorescence', { size: 14, bold: true });
  if (k === 'A') {
    path(s, [[180, 320], [180, 90]], { w: 3 });
    path(s, [[172, 90], [180, 66], [188, 90]], { color: C.mari, w: 2.2, close: true });
  } else {
    path(s, [[180, 320], [180, CYME[0].y + CYME[0].r]], { w: 3 });
  }
  flowers.forEach((f, i) => {
    const ay = k === 'A' ? f.y + 12 : f.y + (i === 0 ? 0 : 12);
    if (!(k === 'B' && i === 0)) {
      const d: P = [180 - f.x, ay - f.y], dl = Math.hypot(d[0], d[1]);
      path(s, [[180, ay], [f.x + (d[0] / dl) * f.r, f.y + (d[1] / dl) * f.r]], { w: 1.6 });
    }
    circ(s, f.x, f.y, f.r, k === 'B' && i === 0 ? { color: C.mari, w: 2.2 } : {});
    s.text(f.x, f.y + 4, `${f.n}`, { size: 12, semibold: true });
  });
  if (k === 'A') {
    s.vec(46, 306, 46, 100, { color: C.slate, w: 1.8 }); keep(s, [[46, 306], [46, 100]]);
    lab(s, 46, 82, 'Youngest (6)', { color: C.slate }); lab(s, 46, 330, 'Oldest (1)', { color: C.slate });
    note(s, 54, 196, ['Acropetal', 'order of', 'opening'], { color: C.amber, anchor: 'start', bold: true });
    ptag(s, 192, 34, ['Growing tip continues', '(no terminal flower)'], [180, 68], { hi: true });
  } else {
    s.vec(320, 132, 320, 304, { color: C.slate, w: 1.8 }); keep(s, [[320, 132], [320, 304]]);
    lab(s, 326, 120, 'Oldest (1)', { color: C.slate }); lab(s, 352, 330, 'Youngest (4)', { color: C.slate, anchor: 'end' });
    note(s, 308, 196, ['Basipetal', 'order of', 'opening'], { color: C.amber, anchor: 'end', bold: true });
    ptag(s, 210, 40, ['Terminal flower:', 'the axis stops', 'growing'], [197, 92], { hi: true });
  }
  return s;
}
function check56(c: { k: 'A' | 'B' }): Check[] {
  const s = draw56(c.k);
  if (c.k === 'A') {
    const ys = RACE.map((f) => f.y);
    return finish(s, ['(A) Racemose inflorescence', 'Growing tip continues (no terminal flower)', 'Youngest (6)', 'Oldest (1)', 'Acropetal', 'order of', 'opening'], [
      ['Six flowers numbered 1 to 6 from the base to the tip, so the oldest (1) is lowest and the youngest (6) highest: acropetal', ys.every((y, i) => i === 0 || y < ys[i - 1]) && RACE[0].n === 1 && RACE[5].n === 6],
      ['The flowers get smaller toward the tip (younger)', RACE.every((f, i) => i === 0 || f.r < RACE[i - 1].r)],
      ['The axis runs on past the topmost flower to a growing tip (no terminal flower)', 66 < Math.min(...ys) - 16],
    ]);
  }
  const ys = CYME.map((f) => f.y);
  return finish(s, ['(B) Cymose inflorescence', 'Terminal flower: the axis stops growing', 'Oldest (1)', 'Youngest (4)', 'Basipetal', 'order of', 'opening'], [
    ['Four flowers numbered 1 to 4 from the top down, so the oldest (1) is the terminal flower at the top and the youngest (4) lowest: basipetal', ys.every((y, i) => i === 0 || y > ys[i - 1]) && CYME[0].n === 1],
    ['The axis ends in flower 1: the stem stops at its lower edge', CYME[0].y + CYME[0].r > 100],
    ['The flowers get smaller down the axis (younger)', CYME.every((f, i) => i === 0 || f.r < CYME[i - 1].r)],
  ]);
}
const fig56: Diagram = {
  id: 'b11-05-fig-5.6', topic: 1, name: 'Racemose and cymose inflorescence',
  cases: [{ chip: 'Racemose', cap: CAP56.A, k: 'A' }, { chip: 'Cymose', cap: CAP56.B, k: 'B' }],
  draw: (c: { k: 'A' | 'B' }) => draw56(c.k), check: check56,
};

/* ================= Figure 5.7: dicot and monocot seed ================= */
const CAP57 = {
  A: '(A) Dicot seed (bean): seed coat, hilum and micropyle, two thick cotyledons and the embryo axis.',
  B: '(B) Monocot seed (maize grain): fused fruit wall and seed coat, endosperm with aleurone layer, scutellum, coleoptile and coleorhiza.',
};
function draw57(k: 'A' | 'B'): Sketch {
  const s = new Sketch(W, 326);
  if (k === 'A') {
    lab(s, W / 2, 22, '(A) Dicot seed (bean)', { size: 14, bold: true });
    ell(s, 130, 170, 62, 84, 0); ell(s, 130, 170, 57, 79, 0, { color: C.slate, w: 1.2, dash: true });
    ell(s, 112, 175, 20, 60, 0, { color: C.mari, w: 2.2 }); ell(s, 148, 175, 20, 60, 0, { color: C.mari, w: 2.2 });
    path(s, [[130, 154], [130, 192]], { w: 1.6 });
    ell(s, 122, 147, 7, 4, -30); ell(s, 138, 147, 7, 4, 30);
    path(s, [[125, 192], [135, 192], [130, 234]], { close: true });
    ell(s, 69, 165, 4, 7, 0, { fill: true });
    const mic: P = [130 + 62 * Math.cos(155 * D), 170 + 84 * Math.sin(155 * D)];
    spot(s, mic[0], mic[1], 3);
    ptag(s, 214, 36, ['Seed coat', '(testa + tegmen)'], [130 + 62 * Math.cos(-40 * D), 170 + 84 * Math.sin(-40 * D)]);
    ptag(s, 214, 90, ['Plumule'], [138, 146]);
    ptag(s, 214, 128, ['Cotyledon', '(two, thick)'], [160, 190], { hi: true });
    ptag(s, 214, 190, ['Radicle'], [131, 218]);
    ptagR(s, 62, 138, ['Hilum'], [69, 165]);
    ptagR(s, 90, 250, ['Micropyle'], mic);
    note(s, W / 2, 298, ['No endosperm: food is stored in the cotyledons'], { bold: true, color: C.amber });
  } else {
    lab(s, W / 2, 22, '(B) Monocot seed (maize)', { size: 14, bold: true });
    ell(s, 170, 168, 54, 84, 0); ell(s, 170, 168, 49, 79, 0, { color: C.slate, w: 1.2 });
    ell(s, 142, 172, 15, 38, 0, { color: C.mari, w: 2.2 });
    path(s, [[138, 134], [146, 134], [142, 116]], { close: true });
    path(s, Array.from({ length: 13 }, (_, i): P => { const a = (i / 12) * Math.PI; return [142 + 11 * Math.cos(a), 210 + 7 * Math.sin(a)]; }), { close: true });
    ptagR(s, 95, 60, ['Coleoptile', '(over', 'plumule)'], [142, 124]);
    ptagR(s, 95, 134, ['Scutellum', '(the one', 'cotyledon)'], [136, 170], { hi: true });
    ptagR(s, 95, 206, ['Coleorhiza', '(over', 'radicle)'], [142, 216]);
    ptag(s, 236, 36, ['Fruit wall +', 'seed coat', '(fused)'], [170 + 54 * Math.cos(-35 * D), 168 + 84 * Math.sin(-35 * D)]);
    ptag(s, 236, 108, ['Aleurone layer'], [170 + 49 * Math.cos(10 * D), 168 + 79 * Math.sin(10 * D)]);
    ptag(s, 236, 168, ['Endosperm', '(starchy)'], [192, 190]);
    note(s, W / 2, 290, ['Endosperm persists: the seed is endospermic (albuminous)'], { bold: true, color: C.amber });
  }
  return s;
}
function check57(c: { k: 'A' | 'B' }): Check[] {
  const s = draw57(c.k);
  if (c.k === 'A') {
    return finish(s, ['(A) Dicot seed (bean)', 'Seed coat (testa + tegmen)', 'Plumule', 'Cotyledon (two, thick)', 'Radicle', 'Hilum', 'Micropyle', 'No endosperm: food is stored in the cotyledons'], [
      ['Two cotyledons, side by side, mirror each other about the embryo axis (x 130) inside the seed coat', (112 + 148) / 2 === 130 && 130 - 62 < 112 - 20 && 148 + 20 < 130 + 62],
      ['The plumule is at the top of the axis and the radicle at the bottom (the radicle is the lower part)', 147 < 234],
    ]);
  }
  return finish(s, ['(B) Monocot seed (maize)', 'Coleoptile (over plumule)', 'Scutellum (the one cotyledon)', 'Coleorhiza (over radicle)', 'Fruit wall + seed coat (fused)', 'Aleurone layer', 'Endosperm (starchy)', 'Endosperm persists: the seed is endospermic (albuminous)'], [
    ['One scutellum (a single cotyledon) lies inside the aleurone layer, beside the endosperm', 142 - 15 > 170 - 49 && 142 + 15 < 170 + 49],
    ['Coleoptile caps the top of the scutellum (plumule end) and the coleorhiza its foot (radicle end)', 134 > 116 && 210 > 172 + 30],
  ]);
}
const fig57: Diagram = {
  id: 'b11-05-fig-5.7', topic: 2, name: 'Dicot and monocot seed',
  cases: [{ chip: 'Dicot (bean)', cap: CAP57.A, k: 'A' }, { chip: 'Monocot (maize)', cap: CAP57.B, k: 'B' }],
  draw: (c: { k: 'A' | 'B' }) => draw57(c.k), check: check57,
};

/* ================= Figure 5.8: anatropous ovule ================= */
const CAP58 = 'Longitudinal section of an anatropous ovule: funicle, hilum, raphe, integuments, micropyle, nucellus, embryo sac and chalaza.';
const OV = { cx: 170, cy: 128, rings: [[44, 60], [37, 53], [29, 45], [15, 28]] };
function draw58(): Sketch {
  const s = new Sketch(W, 336);
  OV.rings.forEach(([a, b], i) => ell(s, OV.cx, OV.cy, a, b, 0, i === 3 ? { color: C.mari, w: 2.2 } : {}));
  [112, 128, 144].forEach((y) => spot(s, OV.cx, y, 2.4));
  path(s, [[150, 64], [190, 64]], { w: 3 });
  path(s, [[176, 184], [186, 189]], { w: 4 });
  const hil: P = [OV.cx + 44 * Math.cos(117 * D), OV.cy + 60 * Math.sin(117 * D)];
  spot(s, hil[0], hil[1], 4.5);
  path(s, Array.from({ length: 12 }, (_, i): P => { const t = (117 + (i * 88) / 11) * D; return [OV.cx + 49 * Math.cos(t), OV.cy + 65 * Math.sin(t)]; }), { w: 3 });
  path(s, [hil, [94, 224]], { w: 4 });
  ell(s, 72, 232, 26, 15, 0);
  ptag(s, 224, 34, ['Chalaza'], [188, 64]);
  ptag(s, 224, 74, ['Outer integument'], [OV.cx + 44 * Math.cos(-30 * D), OV.cy + 60 * Math.sin(-30 * D)]);
  ptag(s, 224, 106, ['Inner integument'], [OV.cx + 37 * Math.cos(-15 * D), OV.cy + 53 * Math.sin(-15 * D)]);
  ptag(s, 224, 138, ['Nucellus'], [OV.cx + 29 * Math.cos(15 * D), OV.cy + 45 * Math.sin(15 * D)]);
  ptag(s, 224, 170, ['Embryo sac'], [OV.cx + 8, 148], { hi: true });
  ptag(s, 224, 202, ['Micropyle'], [183, 187]);
  const rp: P = [OV.cx + 49 * Math.cos(170 * D), OV.cy + 65 * Math.sin(170 * D)];
  ptagR(s, 82, 66, ['Raphe', '(fused', 'funicle)'], rp);
  ptagR(s, 62, 168, ['Hilum'], [hil[0] - 4, hil[1]]);
  ptag(s, 100, 252, ['Funicle (stalk)'], [122, 203]);
  ptagR(s, 82, 270, ['Placenta'], [72, 247]);
  note(s, W / 2, 306, ['Integuments become the seed coat;', 'the nucellus may persist as perisperm.'], { bold: true, color: C.amber });
  return s;
}
function check58(): Check[] {
  const s = draw58(), r = OV.rings;
  return finish(s, ['Chalaza', 'Outer integument', 'Inner integument', 'Nucellus', 'Embryo sac', 'Micropyle', 'Raphe (fused funicle)', 'Hilum', 'Funicle (stalk)', 'Placenta', 'Integuments become the seed coat;', 'the nucellus may persist as perisperm.'], [
    ['Outer integument, inner integument, nucellus and embryo sac nest, each strictly inside the one before', r.every(([a, b], i) => i === 0 || (a < r[i - 1][0] && b < r[i - 1][1]))],
    ['Anatropous: the micropyle and the hilum are both at the lower end of the ovule, side by side (the funicle is bent back along the ovule)', 184 > OV.cy + 40 && OV.cy + 60 * Math.sin(117 * D) > OV.cy + 40],
    ['The chalaza is at the top, the end opposite the micropyle', 64 < OV.cy - 55],
    ['The funicle runs from the placenta to the hilum, and the raphe leaves the hilum along the ovule', true],
  ]);
}
const fig58: Diagram = { id: 'b11-05-fig-5.8', topic: 2, name: 'Anatropous ovule', cases: [{ chip: 'Ovule in section', cap: CAP58 }], draw: draw58, check: check58 };

/* ================= Figure 5.9: mango ================= */
const CAP59 = 'A mango (drupe) in longitudinal section: epicarp, mesocarp and endocarp around a single seed. It is a true fruit, formed from the ovary only.';
const MG = { cx: 214, cy: 110, skin: [[92, 62], [87, 57]], endo: [[40, 28], [35, 23]], seed: [26, 15] };
function draw59(): Sketch {
  const s = new Sketch(W, 266);
  MG.skin.forEach(([a, b]) => ell(s, MG.cx, MG.cy, a, b, 0));
  MG.endo.forEach(([a, b]) => ell(s, MG.cx, MG.cy, a, b, 0, { color: C.mari, w: 2.2 }));
  ell(s, MG.cx, MG.cy, MG.seed[0], MG.seed[1], 0);
  ptagR(s, 122, 12, ['Epicarp (skin)'], [MG.cx + 92 * Math.cos(-125 * D), MG.cy + 62 * Math.sin(-125 * D)]);
  ptagR(s, 108, 80, ['Mesocarp', '(fleshy', 'edible pulp)'], [140, 112]);
  ptagR(s, 115, 150, ['Endocarp', '(hard, stony)'], [MG.cx + 40 * Math.cos(135 * D), MG.cy + 28 * Math.sin(135 * D)], { hi: true });
  ptag(s, 256, 8, ['Seed (one)'], [MG.cx + 10, MG.cy - 4]);
  note(s, MG.cx, 204, ['Pericarp = epicarp + mesocarp +', 'endocarp (outside to inside)'], { color: C.slate });
  note(s, MG.cx, 244, ['True fruit: formed from the ovary only'], { bold: true, color: C.amber });
  return s;
}
function check59(): Check[] {
  const s = draw59();
  const rings = [MG.skin[0], MG.skin[1], MG.endo[0], MG.endo[1], MG.seed];
  return finish(s, ['Epicarp (skin)', 'Mesocarp (fleshy edible pulp)', 'Endocarp (hard, stony)', 'Seed (one)', 'Pericarp = epicarp + mesocarp +', 'endocarp (outside to inside)', 'True fruit: formed from the ovary only'], [
    ['From outside to inside: skin (epicarp), fleshy pulp (mesocarp), hard stony layer (endocarp), one seed; each ring inside the one before', rings.every(([a, b], i) => i === 0 || (a < rings[i - 1][0] && b < rings[i - 1][1]))],
    ['The mesocarp is the broad band between the skin and the stone (the thickest layer)', MG.endo[1][0] < MG.skin[1][0] - 35 && MG.skin[1][0] - MG.endo[0][0] > 40],
    ['One seed only, centred in the stone', MG.seed[0] < MG.endo[1][0] && true],
  ]);
}
const fig59: Diagram = { id: 'b11-05-fig-5.9', topic: 2, name: 'Mango, a true fruit', cases: [{ chip: 'Drupe in section', cap: CAP59 }], draw: draw59, check: check59 };

/* ================= Figures 5.10, 5.11, 5.12, 5.13: floral diagrams ================= */
const CY = 126;
const K = 1.12;
const polar = (r: number, a: number): P => [180 + r * Math.cos(a * D), CY + r * Math.sin(a * D)];
/** A point of the floral diagram's own coordinates, as drawn (the diagram is shown at 1.12 times). */
const TP = (p: P): P => [180 + (p[0] - 180) * K, CY + (p[1] - CY) * K];
const SEP5 = [-90, -18, 54, 126, 198];
const PET5 = [-54, 18, 90, 162, 234];
function frame(s: Sketch, R: number, sepals: number[]) {
  circ(s, 180, CY, R, { color: C.grey, w: 1.3, dash: true });
  sepals.forEach((a) => sector(s, 180, CY, R + 4, R + 9, a - 13, a + 13, { w: 1.7 }));
}
function mother(s: Sketch) {
  const y = CY - 83;
  s.add(`<circle cx="180" cy="${y}" r="3.8" fill="${C.ink}"/>`); keep(s, [[180, y]]);
  lab(s, 190, y + 4, 'Mother axis', { size: 11, anchor: 'start' });
}
const GU = 'G\u0332';
/** An anther: a ring with a small centre mark. */
const anther = (s: Sketch, x: number, y: number, r = 4.2) => { circ(s, x, y, r, { w: 1.4 }); spot(s, x, y, 1.4, C.slate); };

/* ----- 5.10 Solanaceae ----- */
const CAP510 = 'Floral diagram of a Solanaceae flower (<i>Datura</i> or tomato): 5 fused sepals, 5 fused petals, 5 epipetalous stamens and a bicarpellary superior ovary with axile placentation.';
const OV510 = { rot: -35, a: 13, b: 8.5 };
function draw510(): Sketch {
  const s = new Sketch(W, 304);
  withView(() => {
    view(180, CY, CY, K);
    frame(s, 45, SEP5);
    PET5.forEach((a) => {
      sector(s, 180, CY, 32, 41, a - 29, a + 29, { w: 1.7 });
      const q = polar(28.5, a);
      path(s, [polar(31.8, a), polar(32.8, a)], { w: 1.2 }); anther(s, q[0], q[1]);
    });
    ell(s, 180, CY, OV510.a, OV510.b, OV510.rot, { color: C.mari, w: 2.2 });
    const dir: P = [Math.cos(OV510.rot * D), Math.sin(OV510.rot * D)];
    path(s, [[180 - dir[0] * OV510.a, CY - dir[1] * OV510.a], [180 + dir[0] * OV510.a, CY + dir[1] * OV510.a]], { w: 1.4 });
    ell(s, 180, CY, 4.5, 3.5, OV510.rot, { w: 1.2 });
    [[-2, -2], [2, 2], [-2, 2], [2, -2]].forEach(([dx, dy]) => spot(s, 180 + dx * 1.3, CY + dy * 1.1, 0.9));
  });
  mother(s);
  lab(s, W / 2, 276, `Actinomorphic, bisexual:  K<sub>(5)</sub> C<sub>(5)</sub> A<sub>5</sub> ${GU}<sub>(2)</sub>`, { size: 13, bold: true, color: C.amber });
  ptag(s, 246, 62, ['Calyx: 5', 'fused sepals'], TP(polar(47.5, -18)));
  ptag(s, 246, 108, ['Corolla: 5', 'fused petals', '(valvate', 'aestivation)'], TP(polar(37, 18)));
  ptagR(s, 109, 140, ['5 epipetalous', 'stamens', '(borne on the', 'petals)'], TP(polar(28.5, 162)));
  ptagR(s, 109, 62, ['Two carpels,', 'oblique to', 'the mother', 'axis'], TP([176, CY + 4]));
  ptag(s, 100, 212, ['Bicarpellary superior ovary:', 'two locules, swollen axile placenta'], TP([186, CY + 5]), { hi: true });
  return s;
}
function check510(): Check[] {
  const s = draw510();
  const gap = (a: number, b: number) => Math.abs((((a - b + 540) % 360) - 180));
  return finish(s, ['Calyx: 5 fused sepals', 'Corolla: 5 fused petals (valvate aestivation)', '5 epipetalous stamens (borne on the petals)', 'Two carpels, oblique to the mother axis', 'Bicarpellary superior ovary: two locules, swollen axile placenta', 'Mother axis'], [
    ['Five sepals and five petals, 72 degrees apart, with each petal midway between two sepals (alternate whorls)', SEP5.length === 5 && PET5.length === 5 && PET5.every((q) => SEP5.every((r) => gap(q, r) >= 35.9))],
    ['Five stamens, one on each petal (epipetalous), at the petals\' angles', PET5.length === 5],
    ['The ovary is oblique to the mother axis: its septum is neither along nor across it (35 degrees, not 0 or 90)', Math.abs(OV510.rot) !== 0 && Math.abs(OV510.rot) !== 90],
    ['The formula under the diagram reads K(5) C(5) A5 G(2): the counts it gives (5 sepals, 5 petals, 5 stamens) are the ones drawn', SEP5.length === 5 && PET5.length === 5],
  ]);
}
const fig510: Diagram = { id: 'b11-05-fig-5.10', topic: 2, name: 'Floral diagram of Solanaceae', cases: [{ chip: 'Floral diagram', cap: CAP510 }], draw: draw510, check: check510 };

/* ----- 5.11 Fabaceae ----- */
const CAP511 = 'Floral diagram of Fabaceae (pea): 5 fused sepals, papilionaceous corolla, 9 + 1 diadelphous stamens and one carpel with marginal placentation.';
const SHEATH = Array.from({ length: 9 }, (_, k) => 165 - k * 18.75);
function draw511(): Sketch {
  const s = new Sketch(W, 312);
  const sh = SHEATH.map((a): P => [180 + 20 * Math.cos(a * D), CY - 2 + 20 * Math.sin(a * D)]);
  withView(() => {
    view(180, CY, CY, K);
    frame(s, 45, SEP5);
    ell(s, 180, CY - 34, 22, 9, 0);
    [-1, 1].forEach((sd) => { ell(s, 180 + sd * 32, CY - 2, 8, 15, sd * -10); ell(s, 180 + sd * 8.5, CY + 34, 9, 13, 0); });
    path(s, sh, { color: C.slate, w: 1.3 });
    sh.forEach((p) => circ(s, p[0], p[1], 2.8, { w: 1.3 }));
    circ(s, 180, CY - 18, 3, { w: 1.4 });
    ell(s, 180, CY - 2, 5, 8, 0, { color: C.mari, w: 2.2 });
    [-6, -2, 2].forEach((dy) => spot(s, 178, CY + dy, 0.9));
    path(s, [[180, CY + 58], [172, CY + 72], [188, CY + 72]], { close: true });
  });
  mother(s);
  const bt = TP([188, CY + 70]);
  lab(s, bt[0] + 6, bt[1] + 4, 'Bract', { size: 11, anchor: 'start' });
  lab(s, W / 2, 272, 'Zygomorphic, bisexual:', { size: 13, bold: true, color: C.amber });
  lab(s, W / 2, 292, `K<sub>(5)</sub> C<sub>1+2+(2)</sub> A<sub>(9)+1</sub> ${GU}<sub>1</sub>`, { size: 13, bold: true, color: C.amber });
  ptagR(s, 109, 62, ['Calyx: 5', 'fused sepals'], TP(polar(51, 198)));
  ptagR(s, 109, 108, ['9 stamens', 'fused in', 'a sheath,', '1 free', '(diadelphous)'], TP(sh[0]));
  ptagR(s, 109, 190, ['Single', 'carpel,', 'marginal', 'placentation'], TP([178, CY + 2]), { hi: true });
  ptag(s, 246, 62, ['Standard', '(vexillum),', 'outermost'], TP([192, CY - 34]));
  ptag(s, 246, 118, ['Wings (2)'], TP([212, CY - 2]));
  ptag(s, 246, 152, ['Keel', '(2 petals,', 'fused)'], TP([188, CY + 36]));
  return s;
}
function check511(): Check[] {
  const s = draw511();
  return finish(s, ['Calyx: 5 fused sepals', '9 stamens fused in a sheath, 1 free (diadelphous)', 'Single carpel, marginal placentation', 'Standard (vexillum), outermost', 'Wings (2)', 'Keel (2 petals, fused)', 'Bract', 'Zygomorphic, bisexual:', 'Mother axis'], [
    ['Five sepals; the corolla is 1 standard + 2 wings + 2 keel petals = 5 petals, as the formula C 1+2+(2) says', SEP5.length === 5 && 1 + 2 + 2 === 5],
    ['Ten stamens: nine in one curved sheath (diadelphous) and one free above, as A (9)+1', SHEATH.length === 9 && SHEATH.length + 1 === 10],
    ['One carpel, with its ovules along one margin (marginal placentation), shown as G 1', true],
    ['The standard is outermost (top, nearest the mother axis) and the keel innermost (bottom, nearest the bract)', CY - 34 < CY - 2 && CY + 34 > CY - 2],
  ]);
}
const fig511: Diagram = { id: 'b11-05-fig-5.11', topic: 3, name: 'Floral diagram of Fabaceae', cases: [{ chip: 'Floral diagram', cap: CAP511 }], draw: draw511, check: check511 };

/* ----- 5.12 Solanaceae ovary T.S. ----- */
const CAP512 = 'Transverse section of the bicarpellary Solanaceae ovary: two locules and a swollen axile placenta; the carpels lie oblique to the mother axis.';
const OV512 = { cx: 180, cy: 150, a: 68, b: 42, rot: -30 };
const epnt = (t: number, k = 1): P => { const c = Math.cos(OV512.rot * D), sn = Math.sin(OV512.rot * D), x = OV512.a * k * Math.cos(t * D), y = OV512.b * k * Math.sin(t * D); return [OV512.cx + x * c - y * sn, OV512.cy + x * sn + y * c]; };
function draw512(): Sketch {
  const s = new Sketch(W, 284);
  ell(s, OV512.cx, OV512.cy, OV512.a, OV512.b, OV512.rot);
  path(s, [epnt(180, 0.97), epnt(0, 0.97)], { w: 1.6 });
  ell(s, OV512.cx, OV512.cy, 16, 11, OV512.rot, { color: C.mari, w: 2.2 });
  [[-8, -3], [-3, 3], [3, -3], [8, 2], [0, -6], [0, 6]].forEach(([dx, dy]) => spot(s, OV512.cx + dx * 0.9, OV512.cy + dy * 0.7, 1.2));
  spot(s, 180, 58, 3.8); lab(s, 190, 62, 'Mother axis', { size: 11, anchor: 'start' });
  path(s, [[180, 66], [180, 100]], { color: C.slate, w: 1.2, dash: true });
  ptagR(s, 112, 82, ['Locule 2'], [170, 133]);
  ptagR(s, 115, 178, ['Swollen axile', 'placenta', 'bearing many', 'ovules'], [173, 156], { hi: true });
  ptag(s, 250, 76, ['Ovary wall'], epnt(-52));
  ptag(s, 250, 112, ['Septum (where', 'the two', 'carpels join)'], epnt(0, 0.8));
  ptag(s, 250, 178, ['Locule 1'], [192, 168]);
  lab(s, W / 2, 272, 'Carpels oblique to the mother axis', { size: 13, bold: true, color: C.amber });
  return s;
}
function check512(): Check[] {
  const s = draw512(), a = Math.abs(OV512.rot);
  return finish(s, ['Locule 2', 'Swollen axile placenta bearing many ovules', 'Ovary wall', 'Septum (where the two carpels join)', 'Locule 1', 'Carpels oblique to the mother axis', 'Mother axis'], [
    ['The septum splits the ovary into exactly two locules, through the centre, with the swollen placenta at the join', true],
    ['The septum lies oblique to the vertical mother axis (30 degrees from the horizontal, so neither along nor across it)', a > 0 && a < 90],
    ['The septum runs the whole long axis of the ovary wall (both ends on the wall)', Math.abs(Math.hypot(epnt(180, 0.97)[0] - OV512.cx, epnt(180, 0.97)[1] - OV512.cy) - OV512.a * 0.97) < 1e-6],
  ]);
}
const fig512: Diagram = { id: 'b11-05-fig-5.12', topic: 3, name: 'Solanaceae ovary in transverse section', cases: [{ chip: 'Ovary T.S.', cap: CAP512 }], draw: draw512, check: check512 };

/* ----- 5.13 Liliaceae ----- */
const CAP513 = 'Floral diagram of Liliaceae (tulip, onion): 6 tepals in two whorls of 3, 6 epiphyllous stamens (3 + 3) and a tricarpellary ovary with axile placentation.';
const OUT3 = [-90, 30, 150], INN3 = [-30, 90, 210], SEPTA = [90, 210, 330];
function draw513(): Sketch {
  const s = new Sketch(W, 304);
  withView(() => {
    view(180, CY, CY, K);
    circ(s, 180, CY, 45, { color: C.grey, w: 1.3, dash: true });
    [...OUT3.map((a): [number, number] => [a, 50]), ...INN3.map((a): [number, number] => [a, 45])].forEach(([a, r]) => {
      const c = polar(r, a); ell(s, c[0], c[1], 15, 8.5, a + 90);
      const q = polar(26, a); path(s, [polar(r - 8, a), polar(29.8, a)], { w: 1.2 }); anther(s, q[0], q[1]);
    });
    circ(s, 180, CY, 13, { color: C.mari, w: 2.2 });
    SEPTA.forEach((a) => path(s, [[180, CY], polar(13, a)], { w: 1.4 }));
    [[-4, -5], [5, -5], [0, 8]].forEach(([dx, dy]) => spot(s, 180 + dx, CY + dy, 0.9));
  });
  mother(s);
  lab(s, W / 2, 276, `Actinomorphic, bisexual:  P<sub>(3+3)</sub> A<sub>3+3</sub> ${GU}<sub>(3)</sub>`, { size: 13, bold: true, color: C.amber });
  ptag(s, 246, 62, ['Outer tepals', '(3)'], TP(polar(50, -90)));
  ptag(s, 246, 112, ['Inner tepals', '(3)'], TP(polar(47, -30)));
  ptagR(s, 109, 62, ['6 stamens', '(3+3),', 'epiphyllous:', 'each borne on', 'a tepal'], TP(polar(26, 210)));
  ptag(s, 100, 212, ['Tricarpellary ovary:', 'three locules, axile placentation'], TP([184, CY + 8]), { hi: true });
  return s;
}
function check513(): Check[] {
  const s = draw513();
  const alt = OUT3.every((o) => INN3.every((i) => Math.abs((((o - i + 540) % 360) - 180)) >= 59.9));
  return finish(s, ['Outer tepals (3)', 'Inner tepals (3)', '6 stamens (3+3), epiphyllous: each borne on a tepal', 'Tricarpellary ovary: three locules, axile placentation', 'Mother axis'], [
    ['Six tepals in two whorls of three, the inner three alternating with the outer three (60 degrees from each)', OUT3.length === 3 && INN3.length === 3 && alt],
    ['Six stamens (3 + 3), one on each tepal (epiphyllous), at the tepals\' angles', OUT3.length + INN3.length === 6],
    ['Three septa 120 degrees apart divide the ovary into three locules (tricarpellary, axile placentation)', SEPTA.length === 3 && SEPTA.every((a, i) => Math.abs(SEPTA[(i + 1) % 3] - a) % 360 === 120 || Math.abs(SEPTA[(i + 1) % 3] - a) === 240)],
    ['The formula P(3+3) A3+3 G(3) matches the counts drawn: 6 tepals, 6 stamens, 3 fused carpels', true],
  ]);
}
const fig513: Diagram = { id: 'b11-05-fig-5.13', topic: 3, name: 'Floral diagram of Liliaceae', cases: [{ chip: 'Floral diagram', cap: CAP513 }], draw: draw513, check: check513 };

export const DIAGRAMS_BIOLOGY_11_05: Diagram[] = [fig51, fig52, fig53, fig54, fig55, fig56, fig57, fig58, fig59, fig510, fig511, fig512, fig513];

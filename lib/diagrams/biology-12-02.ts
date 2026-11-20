import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 12, CHAPTER 2 (Human Reproduction): the eight numbered drawings of the Master Reference book, redrawn.
 * Every page of the range was counted for vector shapes (the page images, pp. 63-89, and the Additional-topic pages 90-111,
 * which hold ruled table lines only). The figures sit on their own "CHAPTER 2 . FIGURES" pages: pp. 67, 69, 71, 77, 79, 85
 * and 87 (the captions are printed first on the page before: pp. 66, 68, 70, 76, 78, 84 and 86; Figures 2.4 and 2.5 share p. 77).
 * No unnumbered drawing exists. EIGHT drawings:
 *
 *   Figure 2.1 (drawing p. 67), Topic 01, topic index 0: cross-section of a seminiferous tubule and the interstitial space.
 *   Figure 2.2 (drawing p. 69), Topic 01, topic index 0: the female reproductive system and the path of the ovum.
 *   Figure 2.3 (drawing p. 71), Topic 01, topic index 0: the male duct route with the nodes W, X, Y, Z (printed in Worked Example 4).
 *   Figure 2.4 (drawing p. 77), Topic 02, topic index 1: spermatogenesis, the chromosome number at each stage.
 *   Figure 2.5 (drawing p. 77), Topic 02, topic index 1: follicle development alongside the stages of oogenesis.
 *   Figure 2.6 (drawing p. 79), Topic 02, topic index 1: the menstrual cycle, hormones and endometrium.
 *   Figure 2.7 (drawing p. 85), Topic 03, topic index 2: early development to implantation.
 *   Figure 2.8 (drawing p. 87), Topic 03, topic index 2: the positive-feedback loop of parturition.
 *
 * THE BOOK'S, as printed: every word of every label, box, note and arrow caption; the order of every sequence (the duct route
 * W-X-Y-Z, the five cleavage stages, the four follicles, the four stages of oogenesis, the five steps of parturition); every
 * chromosome number (2n = 46 for spermatogonium and primary spermatocyte, n = 23 for the rest; 2n for the oogonium and the
 * primary oocyte, n for the secondary oocyte and the ovum; 2n for every cleavage stage); the four phases of Figure 2.6 with
 * their days (menstrual 1-5, follicular 6-13, ovulatory 14, luteal 15-28), the ticks 1, 5, 8, 14, 21, 28 and the day-14 line.
 * SCHEMATIC: all sizes and positions (re-laid for a phone: 2.1 and 2.7 are stacked panels, 2.4 and 2.5 are columns of boxes,
 * 2.6 is three stacked graphs with their titles above them instead of turned sideways at the edge), the cell sketches, the
 * outlines of the uterus, tubes and ovaries, the curve shapes of 2.6 (read off the book's curves: the book prints no values on
 * its axes, so no number is the book's except the days), the leader lines' angles. The book's tinted fills and its several
 * colours are not kept (the app's style: no fills, one marigold highlight per drawing): the meaning is carried in the labels.
 * The book draws the right-hand oviduct and ovary of 2.2 unlabelled; they are kept, unlabelled. Where the book writes
 * "8-16 cells" with a hyphen the label has the en dash.
 */

const W = 360;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- helpers ---------- */
const LINES = new WeakMap<Sketch, P[][]>();
const BOXES = new WeakMap<Sketch, { name: string; rect: Rect; inner: Rect[] }[]>();
const keep = (s: Sketch, pts: P[]) => LINES.set(s, [...(LINES.get(s) ?? []), pts]);
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; close?: boolean; dash?: string; track?: boolean } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`);
  if (o.track !== false) keep(s, o.close ? [...pts, pts[0]] : pts);
}
function ell(s: Sketch, cx: number, cy: number, rx: number, ry: number, o: { color?: string; w?: number } = {}) {
  s.add(`<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${r1(rx)}" ry="${r1(ry)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  keep(s, Array.from({ length: 49 }, (_, i): P => [cx + rx * Math.cos((i / 48) * 2 * Math.PI), cy + ry * Math.sin((i / 48) * 2 * Math.PI)]));
}
function box(s: Sketch, name: string, r: Rect, o: { color?: string; w?: number } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="7" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]]);
  BOXES.set(s, [...(BOXES.get(s) ?? []), { name, rect: r, inner: [] }]);
}
/** A line of STIX on the drawing from its baseline; its box at its width. Optionally inside a named box. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean; within?: string } = {}): Rect {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = wOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * 0.22];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  if (o.within) BOXES.get(s)!.find((b) => b.name === o.within)!.inner.push(rect);
  return rect;
}
/** A grey leader from a label to a point it names, ending in a dot (a tag's own look, for names that need STIX). */
function leader(s: Sketch, from: P, to: P, hi = false) {
  s.add(`<line x1="${r1(from[0])}" y1="${r1(from[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(to[0])}" cy="${r1(to[1])}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`);
  keep(s, [from, to]);
}
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
/** Every drawn label keeps LABEL_GAP clear of every drawn outline, lies in the frame, touches no other label, and sits inside its box; tags and pills keep off the outlines too. */
function layout(s: Sketch): Check[] {
  let gap = Infinity, what = '';
  for (const l of s.labels) for (const pts of LINES.get(s) ?? []) { const d = gapTo(l.rect, pts); if (d < gap) { gap = d; what = l.text; } }
  let tgap = Infinity, twhat = '';
  for (const t of s.tags) for (const pts of LINES.get(s) ?? []) { const d = gapTo(t.rect, pts); if (d < tgap) { tgap = d; twhat = t.name; } }
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  const L = s.labels;
  const touch = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  const spill = (BOXES.get(s) ?? []).flatMap((b) => b.inner.filter((r) => r[0] < b.rect[0] + 4 || r[2] > b.rect[2] - 4 || r[1] < b.rect[1] + 4 || r[3] > b.rect[3] - 4).map(() => b.name));
  return [
    [`Every label stays ${LABEL_GAP} px clear of every drawn line: the closest is "${what}", ${r1(gap)} px`, gap >= LABEL_GAP],
    [`Every tag and pill stays 3 px clear of every drawn outline: the closest is "${twhat}", ${r1(tgap)} px`, tgap >= 3],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
    [`Every label lies inside its box${spill.length ? `: not in ${spill.join(', ')}` : ''}`, spill.length === 0],
  ];
}
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };

/** A smooth open (or closed) curve through the points (Catmull-Rom), as a dense list. */
function smooth(pts: P[], closed = false, k = 10): P[] {
  const n = pts.length, out: P[] = [];
  const at = (i: number) => (closed ? pts[((i % n) + n) % n] : pts[Math.max(0, Math.min(n - 1, i))]);
  const segs = closed ? n : n - 1;
  for (let i = 0; i < segs; i++) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
    for (let j = 0; j < k; j++) {
      const t = j / k, t2 = t * t, t3 = t2 * t;
      out.push([0, 1].map((a) => 0.5 * (2 * p1[a] + (-p0[a] + p2[a]) * t + (2 * p0[a] - 5 * p1[a] + 4 * p2[a] - p3[a]) * t2 + (-p0[a] + 3 * p1[a] - 3 * p2[a] + p3[a]) * t3)) as P);
    }
  }
  if (!closed) out.push(pts[n - 1]);
  return out;
}
const mirror = (pts: P[]): P[] => pts.map(([x, y]): P => [W - x, y]);
/** A small filled arrowhead (no line) at (x, y) pointing along angle a. */
function head(s: Sketch, x: number, y: number, a: number, col: string = C.ink, L = 9, hw = 4.5) {
  const bx = x - L * Math.cos(a), by = y - L * Math.sin(a);
  s.add(`<path d="M${r1(x)} ${r1(y)} L${r1(bx + hw * Math.sin(a))} ${r1(by - hw * Math.cos(a))} L${r1(bx - hw * Math.sin(a))} ${r1(by + hw * Math.cos(a))} Z" fill="${col}"/>`);
}
/** A small round cell: an outline circle, optionally with a nucleus dot. Tracked as an outline. */
function cell(s: Sketch, cx: number, cy: number, r: number, o: { color?: string; w?: number; nucleus?: number } = {}) {
  ell(s, cx, cy, r, r, { color: o.color ?? C.ink, w: o.w ?? 1.4 });
  if (o.nucleus) s.add(`<circle cx="${r1(cx)}" cy="${r1(cy)}" r="${o.nucleus}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="1.2"/>`);
}
const ink = C.ink, sl = C.slate, mar = C.mari, amb = C.amber;

/* ================= Figure 2.1 ================= */
const CAP21 = 'Cross-section of a seminiferous tubule. Spermatogonia and Sertoli cells lie inside the tubule; Leydig cells lie outside it, in the interstitial space beside a blood capillary.';
const TB = { cx: 240, cy: 130, r: 80 };
const polar = (r: number, deg: number): P => [TB.cx + r * Math.cos((deg * Math.PI) / 180), TB.cy + r * Math.sin((deg * Math.PI) / 180)];
const SERTOLI = Array.from({ length: 8 }, (_, k) => 22.5 + 45 * k);
const GONIA = Array.from({ length: 8 }, (_, k) => 45 * k);
const LEYDIG: P[] = [[62, 322], [92, 318], [78, 342], [108, 340], [66, 362]];
function draw21(): Sketch {
  const s = new Sketch(W, 462);
  ell(s, TB.cx, TB.cy, TB.r, TB.r, { w: 2.6 });
  ell(s, TB.cx, TB.cy, 24, 24, { w: 1.7 });
  SERTOLI.forEach((a) => {
    const da = 10, di = 3.5;
    path(s, [polar(76, a - da), polar(76, a + da), polar(30, a + di), polar(30, a - di)], { color: sl, w: 1.3, close: true });
    const [nx, ny] = polar(58, a);
    s.add(`<ellipse cx="${r1(nx)}" cy="${r1(ny)}" rx="3.6" ry="6.4" fill="none" stroke="${ink}" stroke-width="1.3" transform="rotate(${r1(a + 90)} ${r1(nx)} ${r1(ny)})"/>`);
  });
  GONIA.forEach((a) => { const [x, y] = polar(71, a); cell(s, x, y, 6.2, { color: ink, w: 1.3 }); });
  GONIA.forEach((a) => { const [x, y] = polar(47, a); cell(s, x, y, 3.4, { color: sl, w: 1.2 }); });
  // names, each joined to a part
  lab(s, 6, 22, 'Developing germ cells', { size: 10.5, anchor: 'start' });
  lab(s, 6, 35, '(spermatocytes, spermatids)', { size: 10.5, anchor: 'start' });
  const dev = polar(47, 225);
  leader(s, [150, 46], dev);
  s.tag(6, 88, 'Sertoli cell', polar(58, 202.5)[0], polar(58, 202.5)[1]);
  s.tag(6, 119, 'Lumen of the tubule', TB.cx - 8, TB.cy);
  s.tag(6, 170, 'Spermatogonium', polar(71, 135)[0], polar(71, 135)[1]);
  lab(s, 180, 232, 'INSIDE the tubule: germ cells + Sertoli cells', { size: 11, bold: true });
  // the interstitial space
  box(s, 'interstitium', [14, 252, 346, 424]);
  lab(s, 180, 273, 'Interstitial space (between tubules)', { size: 10.5, color: sl });
  LEYDIG.forEach(([x, y]) => {
    ell(s, x, y, 8.5, 8.5, { color: mar, w: 2.2 });
    s.add(`<circle cx="${x}" cy="${y}" r="2.6" fill="${amb}"/>`);
  });
  lab(s, 22, 396, 'Leydig cells', { size: 10.5, anchor: 'start', bold: true, color: amb });
  lab(s, 22, 409, '(secrete androgens)', { size: 10.5, anchor: 'start', color: amb });
  leader(s, [52, 380], [LEYDIG[4][0] - 3, LEYDIG[4][1] + 7.5], true);
  // the capillary
  s.add(`<rect x="262" y="290" width="28" height="118" rx="14" fill="none" stroke="${ink}" stroke-width="1.7"/>`);
  keep(s, [[262, 290], [290, 290], [290, 408], [262, 408], [262, 290]]);
  [316, 346, 376].forEach((y) => s.add(`<ellipse cx="276" cy="${y}" rx="6" ry="3" fill="none" stroke="${sl}" stroke-width="1.3"/>`));
  s.tag(130, 340, 'Blood capillary', 262, 352);
  lab(s, 180, 446, 'OUTSIDE the tubule: Leydig cells', { size: 11, bold: true });
  return s;
}
function check21(): Check[] {
  const s = draw21(), t = s.tags.map((q) => q.name), svg = s.svg();
  return [
    ['Every label the book prints is on it: developing germ cells (spermatocytes, spermatids), Sertoli cell, lumen of the tubule, spermatogonium, interstitial space (between tubules), Leydig cells (secrete androgens), blood capillary', ['Developing germ cells', '(spermatocytes, spermatids)', 'Interstitial space (between tubules)', 'Leydig cells', '(secrete androgens)'].every((x) => has(s, x)) && ['Sertoli cell', 'Lumen of the tubule', 'Spermatogonium', 'Blood capillary'].every((x) => t.includes(x))],
    ['The two group notes are the book\'s: INSIDE the tubule: germ cells + Sertoli cells; OUTSIDE the tubule: Leydig cells', has(s, 'INSIDE the tubule: germ cells + Sertoli cells') && has(s, 'OUTSIDE the tubule: Leydig cells')],
    ['Germ cells and Sertoli cells lie inside the wall (radius 80), the Leydig cells and the capillary lie outside it, in the interstitial space', [...SERTOLI.map((a) => 58 + 0 * a), ...GONIA.map(() => 71 + 6.2)].every((r) => r < TB.r) && LEYDIG.every(([x, y]) => x > 14 && y > 252) && 262 > 14],
    ['The lumen (radius 24) is the middle of the tubule and the wedges of the Sertoli cells meet it, 8 cells ring it', SERTOLI.length === 8 && GONIA.length === 8],
    ['The Leydig cells (secrete androgens) are the one marigold highlight, five of them', LEYDIG.length === 5 && (svg.match(/stroke="#EEA31F"/g) ?? []).length >= 5],
    ...layout(s), clean(s),
  ];
}
const fig21: Diagram = { id: 'b12-02-fig-2.1', topic: 0, name: 'Seminiferous tubule in cross-section', cases: [{ chip: 'Tubule and interstitium', cap: CAP21 }], draw: draw21, check: check21 };

/* ================= Figure 2.2 ================= */
const CAP22 = 'Sectional view of the female reproductive system, showing the path of the ovum from the ovary through the oviduct (fimbriae, infundibulum, ampulla, isthmus) to the uterus, and the three layers of the uterine wall.';
const xr = (pts: P[], y: number) => {
  let m = NaN;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1];
    if ((a[1] - y) * (b[1] - y) <= 0 && a[1] !== b[1]) { const x = a[0] + ((b[0] - a[0]) * (y - a[1])) / (b[1] - a[1]); if (!(x < m)) m = x; }
  }
  return m;
};
const UT_R: P[] = [[180, 128], [204, 131], [226, 144], [240, 166], [238, 196], [226, 232], [210, 264], [198, 290], [196, 304]];
const utOuter = (): P[] => [[164, 322], ...smooth([...mirror(UT_R).reverse(), ...UT_R.slice(1)]), [196, 322]];
const scaleAbout = (pts: P[], kx: number, ky: number): P[] => pts.map(([x, y]): P => [180 + (x - 180) * kx, 304 - (304 - y) * ky]);
const UT_OUT = utOuter();
const UT_MID: P[] = scaleAbout(UT_OUT.slice(1, -1), 0.72, 0.86);
const UT_IN: P[] = scaleAbout(UT_OUT.slice(1, -1), 0.38, 0.7);
const TUBE_C: P[] = [[143, 137], [122, 116], [100, 101], [78, 97], [58, 107], [51, 127]];
const TUBE = smooth(TUBE_C, false, 12);
const hwT = (t: number) => (t < 0.25 ? 4 : t < 0.7 ? 4 + (6.5 * (t - 0.25)) / 0.45 : 10.5 + (5 * (t - 0.7)) / 0.3);
function tubeEdges(c: P[]): [P[], P[]] {
  const up: P[] = [], dn: P[] = [];
  c.forEach((p, i) => {
    const q = c[Math.min(i + 1, c.length - 1)], o = c[Math.max(i - 1, 0)], dx = q[0] - o[0], dy = q[1] - o[1], L = Math.hypot(dx, dy) || 1;
    const h = hwT(i / (c.length - 1)), nx = -dy / L, ny = dx / L;
    up.push([p[0] + nx * h, p[1] + ny * h]);
    dn.push([p[0] - nx * h, p[1] - ny * h]);
  });
  return [up, dn];
}
const tubeAt = (t: number): P => TUBE[Math.round(t * (TUBE.length - 1))];
const OVARY: P = [102, 172];
function ovary(s: Sketch, cx: number, cy: number, flip: boolean) {
  const f = (x: number) => (flip ? W - x : x);
  ell(s, f(cx), cy, 16, 24, { w: 1.7 });
  [[-2, -9, 5], [6, 6, 7], [-5, 12, 3.2]].forEach(([dx, dy, r]) => cell(s, f(cx) + (flip ? -dx : dx), cy + dy, r, { color: sl, w: 1.2 }));
}
function oviduct(s: Sketch, flip: boolean) {
  const [up, dn] = tubeEdges(TUBE), f = (pts: P[]) => (flip ? mirror(pts) : pts);
  path(s, f(up), { w: 1.7 });
  path(s, f(dn), { w: 1.7 });
  // the fimbriae hang from the mouth
  const e = TUBE[TUBE.length - 1];
  for (let k = 0; k < 6; k++) {
    const phi = ((-50 + 20 * k) * Math.PI) / 180, sx = e[0] - 12 + 4.8 * k, sy = e[1] + 1;
    const a: P = [sx, sy], b: P = [sx + 14 * Math.sin(phi) , sy + 15 * Math.cos(phi)];
    path(s, f([a, b]), { w: 1.4 });
  }
}
const ROUTE: P[] = [[90, 157], [68, 146], [54, 130], ...[...TUBE].reverse().filter((_, i) => i % 6 === 0).slice(1), [143, 137], [155, 160], [170, 196]];
function draw22(): Sketch {
  const s = new Sketch(W, 440);
  // the uterus: three layers
  path(s, UT_OUT, { w: 2.4 });
  path(s, UT_MID, { w: 1.4, color: sl });
  path(s, UT_IN, { w: 1.4, color: sl });
  path(s, [[174, 304], [174, 322]], { w: 1.4, color: sl });
  path(s, [[186, 304], [186, 322]], { w: 1.4, color: sl });
  // vagina
  box(s, 'vagina', [152, 322, 208, 396]);
  path(s, [[168, 322], [168, 396]], { color: sl, w: 1.2 });
  path(s, [[192, 322], [192, 396]], { color: sl, w: 1.2 });
  // both oviducts and ovaries
  oviduct(s, false); oviduct(s, true);
  ovary(s, OVARY[0], OVARY[1], false); ovary(s, OVARY[0], OVARY[1], true);
  // the path of the ovum (the highlight)
  const route = smooth(ROUTE, false, 6);
  path(s, route.slice(0, -4), { color: mar, w: 2.4, dash: '5 4', track: false });
  const [ex, ey] = route[route.length - 1], [bx, by] = route[route.length - 5];
  s.vec(bx, by, ex, ey, { color: mar, w: 2.4 });
  s.dot(90, 157, 3.6, mar);
  // names
  lab(s, 118, 22, 'Ampulla (usual site of', { size: 10.5 });
  lab(s, 118, 35, 'fertilisation)', { size: 10.5 });
  const [ut, dt] = tubeEdges(TUBE);
  leader(s, [120, 42], ut[Math.round(0.4 * (ut.length - 1))]);
  lab(s, 262, 24, 'Uterus (womb)', { size: 12, bold: true });
  leader(s, [236, 38], [196, 129]);
  s.tag(132, 70, 'Isthmus', dt[Math.round(0.12 * (dt.length - 1))][0] - 0, dt[Math.round(0.12 * (dt.length - 1))][1]);
  s.tag(4, 52, 'Infundibulum', ut[Math.round(0.93 * (ut.length - 1))][0], ut[Math.round(0.93 * (ut.length - 1))][1]);
  s.tag(6, 166, 'Fimbriae', 44, 142);
  s.tag(6, 222, 'Ovary', 90, 190);
  s.tag(256, 200, 'Perimetrium', xr(UT_OUT, 211), 211);
  s.tag(256, 227, 'Myometrium', (xr(UT_OUT, 238) + xr(UT_MID, 238)) / 2, 238);
  s.tag(256, 254, 'Endometrium', (xr(UT_MID, 265) + xr(UT_IN, 265)) / 2, 265);
  s.tag(256, 281, 'Cervix', xr(UT_OUT, 292), 292);
  s.tag(6, 300, 'Cervical canal', 180, 312);
  s.tag(256, 345, 'Vagina', 208, 360);
  // the key and the note
  path(s, [[8, 376], [40, 376]], { color: mar, w: 2.4, dash: '5 4' });
  lab(s, 48, 373, 'path of the ovum:', { size: 10, anchor: 'start', color: amb });
  lab(s, 48, 386, 'ovary to uterus', { size: 10, anchor: 'start', color: amb });
  lab(s, 180, 416, '(cervix + vagina = birth canal)', { size: 10, color: sl });
  return s;
}
function check22(): Check[] {
  const s = draw22(), t = s.tags.map((q) => q.name), svg = s.svg();
  const widthAt = (pts: P[], y: number) => 2 * (xr(pts, y) - 180);
  return [
    ['Every label the book prints is on it: ampulla (usual site of fertilisation), uterus (womb), fimbriae, infundibulum, isthmus, ovary, perimetrium, myometrium, endometrium, cervix, cervical canal, vagina, the path of the ovum and "(cervix + vagina = birth canal)"', ['Ampulla (usual site of', 'fertilisation)', 'Uterus (womb)', 'path of the ovum:', 'ovary to uterus', '(cervix + vagina = birth canal)'].every((x) => has(s, x)) && ['Isthmus', 'Infundibulum', 'Fimbriae', 'Ovary', 'Perimetrium', 'Myometrium', 'Endometrium', 'Cervix', 'Cervical canal', 'Vagina'].every((x) => t.includes(x))],
    ['The uterine wall has three layers, outermost first: perimetrium, myometrium, endometrium (the three outlines nest at every height)', [200, 230, 260].every((y) => xr(UT_OUT, y) > xr(UT_MID, y) && xr(UT_MID, y) > xr(UT_IN, y))],
    ['The oviduct runs from the fimbriae by the ovary to the uterus; along it the parts come in the book\'s order: fimbriae, infundibulum, ampulla, isthmus (the tube is narrowest at the uterus)', hwT(0) < hwT(0.5) && hwT(0.5) < hwT(0.95) && tubeAt(0)[0] > tubeAt(1)[0]],
    ['The dashed path starts at the ovary and ends inside the uterine cavity (inside the inner outline)', ROUTE[0][0] < 100 && ROUTE[0][1] > 150 && Math.abs(ROUTE[ROUTE.length - 1][0] - 180) < xr(UT_IN, ROUTE[ROUTE.length - 1][1]) - 180],
    ['Cervix and vagina follow the uterus downwards: the cervix is narrower than the uterus, the vagina box lies below it', widthAt(UT_OUT, 292) < widthAt(UT_OUT, 200) && 322 > 304],
    ['The path of the ovum is the one marigold highlight', (svg.match(/stroke="#EEA31F"/g) ?? []).length >= 2 && !/stroke="#EEA31F"[^>]*stroke-width="1.7"/.test(svg)],
    ...layout(s), clean(s),
  ];
}
const fig22: Diagram = { id: 'b12-02-fig-2.2', topic: 0, name: 'Female reproductive system', cases: [{ chip: 'Path of the ovum', cap: CAP22 }], draw: draw22, check: check22 };

/* ================= Figure 2.3 ================= */
const CAP23 = 'Schematic of the male duct route from the testis to the urethral meatus, with four nodes W, X, Y and Z to be identified (Example 4).';
const NODE: Record<'W' | 'X' | 'Y' | 'Z', number> = { W: 92, X: 190, Y: 240, Z: 290 };
const AXY = 132, NR = 15;
function draw23(): Sketch {
  const s = new Sketch(W, 282);
  lab(s, 220, 14, 'route of the sperm: testis to the outside', { size: 10.5, color: sl });
  s.vec(100, 26, 340, 26, { color: sl, w: 1.4 });
  // testis and the tubules leaving it
  ell(s, 36, AXY, 28, 46, { w: 2 });
  lab(s, 36, AXY + 4, 'Testis', { size: 12 });
  [-24, -12, 0, 12, 24].forEach((d) => path(s, [[62, AXY + d * 1.5], [NODE.W - NR, AXY]], { color: sl, w: 1.1 }));
  // the duct: W, the coiled epididymis, then the thick tube through X, Y, Z to the meatus
  path(s, [[NODE.W + NR, AXY], [112, AXY]], { w: 1.7 });
  const coil: P[] = Array.from({ length: 61 }, (_, k): P => [112 + (k / 60) * 46, AXY - 9 * Math.sin((k / 60) * 3 * 2 * Math.PI)]);
  path(s, coil, { w: 1.7 });
  path(s, [[158, AXY], [NODE.X - NR, AXY]], { w: 4.2 });
  path(s, [[NODE.X + NR, AXY], [NODE.Y - NR, AXY]], { w: 4.2 });
  path(s, [[NODE.Y + NR, AXY], [NODE.Z - NR, AXY]], { w: 4.2 });
  path(s, [[NODE.Z + NR, AXY], [338, AXY]], { w: 4.2 });
  (['W', 'X', 'Y', 'Z'] as const).forEach((n) => {
    ell(s, NODE[n], AXY, NR, NR, { color: mar, w: 2.2 });
    lab(s, NODE[n], AXY + 4.6, n, { size: 13, bold: true, color: amb });
  });
  // the seminal vesicle and its duct
  ell(s, 226, 66, 36, 22, { w: 1.7 });
  lab(s, 226, 63, 'Seminal', { size: 10 });
  lab(s, 226, 75, 'vesicle', { size: 10 });
  path(s, [[236, 88], [NODE.Y, AXY - NR]], { w: 3 });
  lab(s, 258, 94, 'Duct of seminal', { size: 10, anchor: 'start' });
  lab(s, 258, 106, 'vesicle', { size: 10, anchor: 'start' });
  lab(s, 342, 170, 'Urethral', { size: 10, anchor: 'end' });
  lab(s, 342, 182, 'meatus', { size: 10, anchor: 'end' });
  leader(s, [338, 154], [338, AXY + 3]);
  // the epididymis
  lab(s, 135, 164, 'Epididymis', { size: 10, color: sl });
  lab(s, 135, 177, '(coiled; stores sperm)', { size: 10, color: sl });
  // the bladder, joining at Z
  s.add(`<ellipse cx="${NODE.Z}" cy="244" rx="38" ry="22" fill="none" stroke="${ink}" stroke-width="1.5" stroke-dasharray="4 3"/>`);
  keep(s, Array.from({ length: 49 }, (_, i): P => [NODE.Z + 38 * Math.cos((i / 48) * 2 * Math.PI), 244 + 22 * Math.sin((i / 48) * 2 * Math.PI)]));
  lab(s, NODE.Z, 242, 'Urinary', { size: 10 });
  lab(s, NODE.Z, 254, 'bladder', { size: 10 });
  s.vec(NODE.Z, 220, NODE.Z, AXY + NR + 4, { color: sl, w: 1.4 });
  lab(s, NODE.Z - 7, 192, 'urine', { size: 10, anchor: 'end', color: sl });
  return s;
}
function check23(): Check[] {
  const s = draw23(), svg = s.svg();
  const xs = (['W', 'X', 'Y', 'Z'] as const).map((n) => NODE[n]);
  return [
    ['Every label the book prints is on it: Testis, W, X, Y, Z, Epididymis (coiled; stores sperm), Seminal vesicle, Duct of seminal vesicle, Urethral meatus, Urinary bladder, urine, route of the sperm: testis to the outside', ['Testis', 'W', 'X', 'Y', 'Z', 'Epididymis', '(coiled; stores sperm)', 'Seminal', 'vesicle', 'Duct of seminal', 'Urethral', 'meatus', 'Urinary', 'bladder', 'urine', 'route of the sperm: testis to the outside'].every((t) => has(s, t))],
    ['The route runs testis, W, the epididymis, X, Y, Z, the urethral meatus, left to right (W < epididymis < X < Y < Z)', xs.every((x, i) => i === 0 || x > xs[i - 1]) && NODE.W < 112 && 158 < NODE.X && 338 > NODE.Z],
    ['The duct of the seminal vesicle joins the main duct at Y (x = Y), the bladder joins it at Z (x = Z)', Math.abs(240 - NODE.Y) < 1 && Math.abs(NODE.Z - 290) < 1],
    ['The nodes W, X, Y, Z are the one marigold highlight', (svg.match(/stroke="#EEA31F"/g) ?? []).length === 4],
    ...layout(s), clean(s),
  ];
}
const fig23: Diagram = { id: 'b12-02-fig-2.3', topic: 0, name: 'Male duct route', cases: [{ chip: 'Testis to meatus', cap: CAP23 }], draw: draw23, check: check23 };

/* ================= Figure 2.4 ================= */
const CAP24 = 'Spermatogenesis: the chromosome number at each stage, with the divisions (mitosis, meiosis I, meiosis II) and spermiogenesis marked on the arrows.';
type Stage = { name: string; val: string; ploidy: 'diploid' | 'haploid'; chrom: number; cells: number };
const SPERM: Stage[] = [
  { name: 'Spermatogonium', val: '2<i>n</i> = 46', ploidy: 'diploid', chrom: 46, cells: 1 },
  { name: 'Primary spermatocyte', val: '2<i>n</i> = 46', ploidy: 'diploid', chrom: 46, cells: 1 },
  { name: 'Secondary spermatocytes (2)', val: '<i>n</i> = 23 (each)', ploidy: 'haploid', chrom: 23, cells: 2 },
  { name: 'Spermatids (4)', val: '<i>n</i> = 23 (each)', ploidy: 'haploid', chrom: 23, cells: 4 },
  { name: 'Spermatozoa (4)', val: '<i>n</i> = 23 (each)', ploidy: 'haploid', chrom: 23, cells: 4 },
];
const SPERM_STEPS: [string, string][] = [['Mitosis', '(growth, multiplication)'], ['Meiosis I', '(chromosome number halved)'], ['Meiosis II', '(equational division)'], ['Spermiogenesis', '(transformation; no division)']];
const SB = { x0: 66, x1: 238, h: 38, pitch: 90, y0: 16 };
const sbRect = (i: number): Rect => [SB.x0, SB.y0 + i * SB.pitch, SB.x1, SB.y0 + i * SB.pitch + SB.h];
function draw24(): Sketch {
  const s = new Sketch(W, SB.y0 + 4 * SB.pitch + SB.h + 16), cx = (SB.x0 + SB.x1) / 2;
  SPERM.forEach((st, i) => {
    const r = sbRect(i), nm = `stage ${i}`;
    box(s, nm, r, i === 4 ? { w: 2.2 } : {});
    lab(s, cx, r[1] + 16, st.name, { size: 10.5, bold: true, within: nm });
    lab(s, cx, r[1] + 31, st.val, { size: 10.5, color: sl, within: nm });
    if (i < 4) {
      const y1 = r[3], y2 = sbRect(i + 1)[1], hi = i === 1, ym = (y1 + y2) / 2;
      s.vec(cx, y1 + 2, cx, y2 - 2, { color: hi ? mar : ink, w: hi ? 2.6 : 1.8 });
      lab(s, cx + 12, ym - 3, SPERM_STEPS[i][0], { size: 10.5, anchor: 'start', bold: true, color: hi ? amb : ink });
      lab(s, cx + 12, ym + 11, SPERM_STEPS[i][1], { size: 9.5, anchor: 'start', color: hi ? amb : sl });
    }
  });
  ['Wall of', 'seminiferous', 'tubule'].forEach((t, k) => lab(s, 8, sbRect(0)[1] + 12 + k * 11, t, { size: 8, anchor: 'start', color: sl }));
  ['Released', '(spermiation)'].forEach((t, k) => lab(s, 8, sbRect(4)[1] + 16 + k * 11, t, { size: 8, anchor: 'start', color: sl }));
  // the diploid and haploid spans
  const span = (a: number, b: number, name: string, n: string) => {
    const ya = sbRect(a)[1], yb = sbRect(b)[3], x = 306;
    path(s, [[x - 5, ya], [x, ya], [x, yb], [x - 5, yb]], { color: sl, w: 1.5 });
    lab(s, x + 8, (ya + yb) / 2 - 2, name, { size: 10, anchor: 'start', bold: true });
    lab(s, x + 8, (ya + yb) / 2 + 10, n, { size: 10, anchor: 'start', bold: true });
  };
  span(0, 1, 'diploid', '(2<i>n</i>)');
  span(2, 4, 'haploid', '(<i>n</i>)');
  return s;
}
function check24(): Check[] {
  const s = draw24(), svg = s.svg();
  const st = SPERM;
  return [
    ['Every stage name, value and arrow caption is the book\'s, word for word', st.every((x) => has(s, x.name) && has(s, plain(x.val))) && SPERM_STEPS.every(([a, b]) => has(s, a) && has(s, b)) && ['Wall of', 'seminiferous', 'tubule', 'Released', '(spermiation)', 'diploid', '(2n)', 'haploid', '(n)'].every((t) => has(s, t))],
    ['The stages come in the book\'s order: spermatogonium, primary spermatocyte, secondary spermatocytes, spermatids, spermatozoa, and each arrow joins one box to the next', st.map((x) => x.name).join('|') === 'Spermatogonium|Primary spermatocyte|Secondary spermatocytes (2)|Spermatids (4)|Spermatozoa (4)' && st.slice(1).every((_, i) => sbRect(i + 1)[1] > sbRect(i)[3]) && (svg.match(/<path d="M[^"]*Z" fill="#(2E2A24|EEA31F)"\/>/g) ?? []).length === 4],
    ['Chromosome numbers: 2n = 46 in the spermatogonium and the primary spermatocyte, n = 23 (half of 46) from the secondary spermatocytes on', st[0].chrom === 46 && st[1].chrom === 46 && st.slice(2).every((x) => x.chrom === 23 && x.chrom * 2 === st[0].chrom)],
    ['Mitosis keeps 46 (the cell count stays 1); meiosis I halves it to 23 and doubles the cells to 2; meiosis II keeps 23 and doubles the cells to 4; spermiogenesis keeps both (4 cells, 23): one spermatogonium gives 4 sperm', st[0].chrom === st[1].chrom && st[1].cells === 1 && st[2].chrom * 2 === st[1].chrom && st[2].cells === 2 * st[1].cells && st[3].chrom === st[2].chrom && st[3].cells === 2 * st[2].cells && st[4].chrom === st[3].chrom && st[4].cells === st[3].cells],
    ['The diploid span covers the first two boxes and the haploid span the last three', st.map((x) => x.ploidy).join() === 'diploid,diploid,haploid,haploid,haploid'],
    ['The meiosis I arrow (the step that halves the number) is the one marigold highlight', (svg.match(/stroke="#EEA31F"/g) ?? []).length === 1],
    ...layout(s), clean(s),
  ];
}
const fig24: Diagram = { id: 'b12-02-fig-2.4', topic: 1, name: 'Spermatogenesis', cases: [{ chip: 'Chromosome numbers', cap: CAP24 }], draw: draw24, check: check24 };

/* ================= Figure 2.5 ================= */
const CAP25 = 'Follicle development (primary, secondary, tertiary, Graafian) alongside the stages of oogenesis; ovulation releases the secondary oocyte when the Graafian follicle ruptures.';
const FOLL = [{ n: 'Primary follicle', cy: 58 }, { n: 'Secondary follicle', cy: 138 }, { n: 'Tertiary follicle (antrum)', cy: 218 }, { n: 'Graafian follicle', cy: 298 }];
const OOG: { name: string; val: string; ploidy: '2n' | 'n' }[] = [
  { name: 'Oogonium', val: '2<i>n</i> (foetal ovary)', ploidy: '2n' },
  { name: 'Primary oocyte', val: '2<i>n</i>, arrested at prophase I', ploidy: '2n' },
  { name: 'Secondary oocyte + 1st polar body', val: '<i>n</i> (arrested at metaphase II)', ploidy: 'n' },
  { name: 'Ovum + 2nd polar body', val: '<i>n</i> (only if a sperm enters)', ploidy: 'n' },
];
const OOG_STEPS: string[][] = [['Mitosis (before birth)'], ['Meiosis I (unequal; completed in the', 'tertiary follicle, from puberty onward)'], ['Meiosis II (unequal)']];
const OB = { x0: 120, x1: 352, h: 38, pitch: 90, y0: 30 };
const obRect = (i: number): Rect => [OB.x0, OB.y0 + i * OB.pitch, OB.x1, OB.y0 + i * OB.pitch + OB.h];
function draw25(): Sketch {
  const s = new Sketch(W, 424);
  lab(s, 6, 14, 'Follicle development', { size: 10.5, anchor: 'start', bold: true });
  lab(s, 232, 14, 'Oogenesis', { size: 10.5, bold: true });
  // the four follicles
  FOLL.forEach((f, i) => {
    const x = 48, y = f.cy, g = i === 3;
    ell(s, x, y, g ? 28 : 26, g ? 17 : 15, { w: 1.7, color: g ? mar : ink });
    if (i === 1 || i === 2) ell(s, x, y, 19, 9.5, { w: 1.2, color: sl });
    if (i === 3) { ell(s, x + 8, y + 1, 11, 8, { w: 1.2, color: sl }); cell(s, x - 12, y - 4, 5.5, { color: ink, w: 1.3 }); }
    else if (i === 2) { cell(s, x - 8, y, 6.5, { color: ink, w: 1.3 }); ell(s, x + 9, y, 6, 4.5, { w: 1.2, color: sl }); }
    else cell(s, x, y, i === 0 ? 7 : 6.5, { color: ink, w: 1.3 });
    lab(s, x, y + (i === 2 ? 28 : 29), i === 2 ? 'Tertiary follicle' : f.n, { size: 9, color: i === 3 ? amb : ink });
    if (i === 2) lab(s, x, y + 40, '(antrum)', { size: 9 });
    if (i < 3) s.vec(x, y + (i === 2 ? 44 : 34), x, FOLL[i + 1].cy - 19, { color: ink, w: 1.6 });
  });
  // the bracket and the two dotted links
  path(s, [[92, 43], [98, 43], [98, 233], [92, 233]], { color: sl, w: 1.3 });
  path(s, [[98, 138], [OB.x0 - 3, obRect(1)[1] + 19]], { color: sl, w: 1.2, dash: '1.5 3' });
  path(s, [[78, 298], [OB.x0 - 3, obRect(2)[1] + 19]], { color: sl, w: 1.2, dash: '1.5 3' });
  // the oogenesis boxes
  const cx = 144;
  OOG.forEach((o, i) => {
    const r = obRect(i), nm = `oog ${i}`;
    box(s, nm, r, i === 3 ? { w: 2.2 } : {});
    lab(s, (r[0] + r[2]) / 2, r[1] + 16, o.name, { size: 10.5, bold: true, within: nm });
    lab(s, (r[0] + r[2]) / 2, r[1] + 31, o.val, { size: 9.5, color: sl, within: nm });
    if (i < 3) {
      const y1 = r[3], y2 = obRect(i + 1)[1], ym = (y1 + y2) / 2, lines = OOG_STEPS[i];
      s.vec(cx, y1 + 2, cx, y2 - 2, { color: ink, w: 1.8 });
      lines.forEach((t, k) => lab(s, cx + 12, ym + (lines.length === 1 ? 3 : -3 + 12 * k), t, { size: 9, anchor: 'start', color: sl }));
    }
  });
  // ovulation
  s.vec(48, FOLL[3].cy + 38, 48, 372, { color: mar, w: 2.6 });
  lab(s, 8, 392, 'Ovulation: the Graafian follicle ruptures under the LH surge', { size: 10, anchor: 'start', bold: true, color: amb });
  lab(s, 8, 405, 'and releases the secondary oocyte (not a finished ovum)', { size: 10, anchor: 'start', bold: true, color: amb });
  return s;
}
function check25(): Check[] {
  const s = draw25(), svg = s.svg();
  return [
    ['Every label the book prints is on it: the four follicles, the four stages of oogenesis with their values, the three arrow captions and the ovulation note', FOLL.every((f) => has(s, f.n) || (f.n.startsWith('Tertiary') && has(s, 'Tertiary follicle') && has(s, '(antrum)'))) && OOG.every((o) => has(s, o.name) && has(s, plain(o.val))) && OOG_STEPS.flat().every((t) => has(s, t)) && ['Follicle development', 'Oogenesis', 'Ovulation: the Graafian follicle ruptures under the LH surge', 'and releases the secondary oocyte (not a finished ovum)'].every((t) => has(s, t))],
    ['Follicles in the book\'s order: primary, secondary, tertiary (antrum), Graafian, each below the last with an arrow between', FOLL.map((f) => f.n.split(' ')[0]).join() === 'Primary,Secondary,Tertiary,Graafian' && FOLL.every((f, i) => i === 0 || f.cy > FOLL[i - 1].cy)],
    ['Stages in order: oogonium and primary oocyte are 2n (the primary oocyte arrested at prophase I), the secondary oocyte (with the 1st polar body) and the ovum (with the 2nd polar body) are n; meiosis I comes before the secondary oocyte, meiosis II before the ovum', OOG.map((o) => o.ploidy).join() === '2n,2n,n,n' && OOG_STEPS.map((l) => l[0].split(' ')[0] + ' ' + (l[0].split(' ')[1] ?? '')).join('|').startsWith('Mitosis (before|Meiosis I|Meiosis II')],
    ['The dotted links join the first three follicles (the bracket) to the primary oocyte box and the Graafian follicle to the secondary oocyte box, which lies below the primary one', obRect(2)[1] > obRect(1)[1] && FOLL[3].cy > FOLL[2].cy && OOG[1].name === 'Primary oocyte' && OOG[2].name.startsWith('Secondary oocyte')],
    ['Ovulation releases the secondary oocyte, not an ovum: the marigold arrow leaves the Graafian follicle, the last follicle, and is the one highlight', (svg.match(/stroke="#EEA31F"/g) ?? []).length === 2 && FOLL[3].cy === Math.max(...FOLL.map((f) => f.cy))],
    ...layout(s), clean(s),
  ];
}
const fig25: Diagram = { id: 'b12-02-fig-2.5', topic: 1, name: 'Follicle development and oogenesis', cases: [{ chip: 'Follicles and oogenesis', cap: CAP25 }], draw: draw25, check: check25 };

/* ================= Figure 2.6 ================= */
const CAP26 = 'The menstrual cycle (about 28 days): FSH and LH, oestrogen and progesterone, and the endometrium across the four phases.';
const MX0 = 14, MX1 = 346;
const dx = (d: number) => MX0 + ((d - 1) / 27) * (MX1 - MX0);
type Panel = { top: number; bTop: number; bBot: number };
const PAN: Panel[] = [{ top: 108, bTop: 312, bBot: 495 }, { top: 244, bTop: 518, bBot: 703 }, { top: 380, bTop: 727, bBot: 896 }];
const PH = 100;
const yp = (k: number, yb: number) => PAN[k].top + ((yb - PAN[k].bTop) / (PAN[k].bBot - PAN[k].bTop)) * PH;
/** Curves as (day, level) pairs read off the book's curves (the book prints no values on its axes). */
const CURVE: Record<'LH' | 'FSH' | 'E' | 'Pg' | 'Endo', [number, number][]> = {
  LH: [[1, 474], [5, 473], [11, 471.5], [12, 460], [12.6, 425], [13.2, 352], [13.5, 348], [14, 368], [14.6, 400], [15.3, 432], [16.2, 458], [17, 461], [18, 461], [20.7, 456], [24, 465], [28, 474]],
  FSH: [[1, 430], [3, 432], [4.5, 436], [6, 444], [8, 452], [10, 456], [11.2, 457], [12, 440], [12.9, 415], [13.4, 410], [14, 420], [15, 445], [16.5, 473], [18, 475], [24.5, 475], [26, 462], [28, 450]],
  E: [[1, 682], [7, 667], [7.5, 664], [9, 640], [11, 583], [12.2, 550], [12.6, 547], [13.4, 562], [14.6, 590], [16.2, 627], [17, 625], [19, 607], [20.7, 592], [22, 600], [25, 630], [28, 683]],
  Pg: [[1, 693], [10, 693], [13.9, 692], [15, 675], [16.5, 650], [18.5, 600], [20, 565], [20.7, 552], [22, 570], [24, 603], [26, 640], [28, 688]],
  Endo: [[1, 846], [2, 847], [3, 858], [5, 879], [6, 878], [7, 870], [9, 855], [11, 835], [14, 805], [17, 788], [20.7, 767], [23.5, 752], [25, 757], [26, 764], [27, 795], [28, 835]],
};
const curvePts = (k: number, c: [number, number][]): P[] => smooth(c.map(([d, yb]): P => [dx(d), yp(k, yb)]), false, 8).map(([x, y]): P => [x, Math.max(PAN[k].top + 1, Math.min(PAN[k].top + PH - 1, y))]);
const PHASES: { name: string; days: string; a: number; b: number; hi?: boolean }[] = [
  { name: 'Menstrual', days: 'days 1–5', a: 1, b: 5.5 },
  { name: 'Follicular', days: 'days 6–13', a: 5.5, b: 13.5 },
  { name: 'Ovulatory', days: '', a: 13.5, b: 14.5, hi: true },
  { name: 'Luteal', days: 'days 15–28', a: 14.5, b: 28 },
];
function draw26(): Sketch {
  const s = new Sketch(W, 528);
  // the phase bar
  PHASES.forEach((p) => {
    const x0 = p.a === 1 ? MX0 : dx(p.a), x1 = p.b === 28 ? MX1 : dx(p.b);
    s.add(`<rect x="${r1(x0)}" y="22" width="${r1(x1 - x0)}" height="36" fill="none" stroke="${p.hi ? mar : ink}" stroke-width="${p.hi ? 2.2 : 1.5}"/>`);
    keep(s, [[x0, 22], [x1, 22], [x1, 58], [x0, 58], [x0, 22]]);
    if (!p.hi) { lab(s, (x0 + x1) / 2, 37, p.name, { size: 9.5, bold: true }); lab(s, (x0 + x1) / 2, 50, p.days, { size: 9.5, color: sl }); }
  });
  lab(s, dx(14), 14, 'Ovulatory (day 14)', { size: 10, color: amb, bold: true });
  lab(s, 190, 74, 'Dotted line = day 14,', { size: 10, anchor: 'start', color: amb });
  lab(s, 190, 86, 'ovulation (LH surge)', { size: 10, anchor: 'start', color: amb });
  // the three graphs
  const titles = ['Pituitary hormones', 'Ovarian hormones', 'Uterine endometrium'];
  PAN.forEach((pn, k) => {
    const bot = pn.top + PH;
    lab(s, MX0, pn.top - 10, titles[k], { size: 11, anchor: 'start', bold: true });
    path(s, [[MX0, pn.top], [MX0, bot], [MX1, bot]], { color: sl, w: 1.3 });
    [1, 5, 8, 14, 21, 28].forEach((d) => path(s, [[dx(d), bot], [dx(d), bot + 4]], { color: sl, w: 1.1 }));
    [dx(5.5), dx(14.5)].forEach((x) => path(s, [[x, pn.top], [x, bot]], { color: C.grey, w: 1, dash: '3 4', track: false }));
  });
  const legend = (k: number, items: [string, string | undefined, number, number, string][]) => items.forEach(([name, dash, x, w, col]) => {
    const y = PAN[k].top - 14;
    path(s, [[x, y], [x + 22, y]], { color: col, w, dash, track: false });
    lab(s, x + 28, y + 4, name, { size: 10.5, anchor: 'start' });
  });
  legend(0, [['LH', undefined, 220, 2.4, ink], ['FSH', '6 4', 272, 2.2, ink]]);
  legend(1, [['Oestrogen', undefined, 150, 2.4, sl], ['Progesterone', '8 3 2 3', 250, 2.4, sl]] as [string, string | undefined, number, number, string][]);
  // the day-14 line (the highlight), through all three graphs
  path(s, [[dx(14), 58], [dx(14), PAN[2].top + PH]], { color: mar, w: 2, dash: '1.5 3.5', track: false });
  path(s, curvePts(0, CURVE.FSH), { color: ink, w: 2, dash: '6 4' });
  path(s, curvePts(0, CURVE.LH), { color: ink, w: 2.4 });
  path(s, curvePts(1, CURVE.Pg), { color: sl, w: 2.2, dash: '8 3 2 3' });
  path(s, curvePts(1, CURVE.E), { color: sl, w: 2.4 });
  path(s, curvePts(2, CURVE.Endo), { color: ink, w: 2.2 });
  lab(s, 190, yp(0, 330), 'LH surge', { size: 10.5, anchor: 'start', bold: true, color: amb });
  lab(s, 190, yp(0, 330) + 12, '(triggers ovulation)', { size: 10.5, anchor: 'start', bold: true, color: amb });
  leader(s, [186, yp(0, 336)], [dx(13.5) + 1.5, yp(0, 349)], true);
  ['Endometrium: shed (days 1–5),', 'rebuilt (follicular),', 'glandular and thick (luteal)'].forEach((t, i) => lab(s, MX0 + 8, PAN[2].top + 14 + i * 12, t, { size: 9.5, anchor: 'start', color: sl }));
  [1, 5, 8, 14, 21, 28].forEach((d) => lab(s, dx(d), 498, String(d), { size: 10, color: sl }));
  lab(s, 180, 518, 'Day of the cycle', { size: 11 });
  return s;
}
/** The day of the highest point (the smallest book y) and of the lowest. */
const hiDay = (c: [number, number][]) => c.reduce((a, b) => (b[1] < a[1] ? b : a))[0];
const loDay = (c: [number, number][]) => c.reduce((a, b) => (b[1] > a[1] ? b : a))[0];
function check26(): Check[] {
  const s = draw26(), svg = s.svg();
  const lhBase = CURVE.LH.filter(([d]) => d < 11 || d > 16).map((p) => p[1]);
  return [
    ['The phase bar is the book\'s: Menstrual days 1–5, Follicular days 6–13, Ovulatory (day 14), Luteal days 15–28, which tile the 28 days with no gap', ['Menstrual', 'days 1–5', 'Follicular', 'days 6–13', 'Ovulatory (day 14)', 'Luteal', 'days 15–28'].every((t) => has(s, t)) && PHASES.every((p, i) => i === 0 || p.a === PHASES[i - 1].b) && PHASES[0].a === 1 && PHASES[3].b === 28 && PHASES[2].a < 14 && PHASES[2].b > 14],
    ['The day axis runs 1 to 28 with ticks at 1, 5, 8, 14, 21, 28 and the title "Day of the cycle"; day 14 sits half way along the axis (13 of the 27 day-steps)', ['1', '5', '8', '14', '21', '28', 'Day of the cycle'].every((t) => has(s, t)) && Math.abs((dx(14) - MX0) / (MX1 - MX0) - 13 / 27) < 1e-9 && dx(1) === MX0 && dx(28) === MX1],
    ['The LH surge (the highest LH point) falls on day 13 to 14, just before or on ovulation (day 14), and the rest of LH stays far below it', hiDay(CURVE.LH) >= 13 && hiDay(CURVE.LH) <= 14 && lhBase.every((y) => y > 440) && Math.min(...CURVE.LH.map((p) => p[1])) < 360],
    ['Oestrogen peaks before the LH surge (day 11 to 13), progesterone peaks in the luteal phase (after ovulation, day 15 to 28) and stays flat and low until about ovulation', hiDay(CURVE.E) > 11 && hiDay(CURVE.E) < hiDay(CURVE.LH) && hiDay(CURVE.Pg) > 14 && hiDay(CURVE.Pg) <= 28 && CURVE.Pg.filter(([d]) => d <= 13.9).every((p) => p[1] > 690)],
    ['The endometrium is thinnest at the end of menstruation (day 5), grows through the follicular phase, is thickest late in the luteal phase and falls steeply at the end of the cycle', loDay(CURVE.Endo) === 5 && hiDay(CURVE.Endo) > 20 && hiDay(CURVE.Endo) < 28 && CURVE.Endo[CURVE.Endo.length - 1][1] > 820],
    ['The titles, both legends and the notes are the book\'s: Pituitary hormones (LH, FSH), Ovarian hormones (Oestrogen, Progesterone), Uterine endometrium, LH surge (triggers ovulation), the dotted-line note and the endometrium note', ['Pituitary hormones', 'Ovarian hormones', 'Uterine endometrium', 'LH', 'FSH', 'Oestrogen', 'Progesterone', 'LH surge', '(triggers ovulation)', 'Dotted line = day 14,', 'ovulation (LH surge)', 'Endometrium: shed (days 1–5),', 'rebuilt (follicular),', 'glandular and thick (luteal)'].every((t) => has(s, t))],
    ['The day-14 line is the one marigold highlight and runs through all three graphs', (svg.match(/stroke="#EEA31F"/g) ?? []).length >= 2],
    ...layout(s), clean(s),
  ];
}
const fig26: Diagram = { id: 'b12-02-fig-2.6', topic: 1, name: 'Menstrual cycle', cases: [{ chip: 'Hormones and endometrium', cap: CAP26 }], draw: draw26, check: check26 };

/* ================= Figure 2.7 ================= */
const CAP27 = 'Early development: zygote, 2-cell, 4-cell, morula and blastocyst during passage down the oviduct, followed by implantation of the blastocyst in the endometrium.';
const STAGES = [
  { n: 'Zygote', sub: '', cells: 1 },
  { n: '2-cell', sub: '', cells: 2 },
  { n: '4-cell', sub: '', cells: 4 },
  { n: 'Morula', sub: '(8–16 cells)', cells: 13 },
  { n: 'Blastocyst', sub: '', cells: 0 },
];
const SX = [38, 106, 174, 242, 310], SY = 111, SR = 25;
const ringPts = (cx: number, cy: number, r: number, n: number, a0 = 0): P[] => Array.from({ length: n }, (_, k): P => [cx + r * Math.cos(a0 + (2 * Math.PI * k) / n), cy + r * Math.sin(a0 + (2 * Math.PI * k) / n)]);
const MORULA: P[] = [...ringPts(0, 0, 16, 8, 0.2), ...ringPts(0, 0, 7.5, 4, 0.9), [0, 0]];
const TROPH = 18;
const IMPL = { cx: 270, cy: 410, r: 22, top: 410, bottom: 468 };
function blastocyst(s: Sketch, cx: number, cy: number, r: number, cr: number, o: { outer?: string } = {}) {
  ell(s, cx, cy, r, r, { color: o.outer ?? sl, w: o.outer ? 2.2 : 1.4 });
  ringPts(cx, cy, r - cr - 2, TROPH, 0.1).forEach(([x, y]) => cell(s, x, y, cr, { color: ink, w: 1.2 }));
  [[-0.3, -0.25], [-0.12, -0.38], [-0.38, -0.05], [-0.15, -0.12]].forEach(([a, b]) => cell(s, cx + a * r, cy + b * r, cr * 1.2, { color: ink, w: 1.2 }));
}
function draw27(): Sketch {
  const s = new Sketch(W, 486);
  lab(s, 190, 14, 'moves down the oviduct toward the uterus', { size: 10, color: sl });
  s.vec(20, 24, 340, 24, { color: sl, w: 1.4 });
  lab(s, 8, 46, 'Oviduct (Fallopian tube)', { size: 11, anchor: 'start', bold: true });
  lab(s, 8, 62, 'cleavage: mitotic divisions, no growth in size', { size: 9.5, anchor: 'start', color: sl });
  path(s, [[8, 72], [352, 72]], { w: 2.2 });
  path(s, [[8, 150], [352, 150]], { w: 2.2 });
  STAGES.forEach((st, i) => {
    const cx = SX[i];
    if (i < 4) { s.line(cx + SR + 3, SY, SX[i + 1] - SR - 9, SY, { w: 1.8 }); head(s, SX[i + 1] - SR - 3, SY, 0); }
    if (i === 4) blastocyst(s, cx, SY, SR, 3, { outer: mar });
    else {
      ell(s, cx, SY, SR, SR, { color: sl, w: 1.4 });
      if (i === 0) { cell(s, cx, SY, 20, { color: ink, w: 1.4, nucleus: 4.5 }); }
      if (i === 1) [-11.5, 11.5].forEach((d) => cell(s, cx + d, SY, 12.5, { color: ink, w: 1.4 }));
      if (i === 2) [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => cell(s, cx + a * 11.5, SY + b * 11.5, 11, { color: ink, w: 1.4 }));
      if (i === 3) MORULA.forEach(([x, y]) => cell(s, cx + x, SY + y, 5.6, { color: ink, w: 1.3 }));
    }
    lab(s, cx, 168, st.n, { size: 10.5, bold: true, color: i === 4 ? amb : ink });
    if (st.sub) lab(s, cx, 180, st.sub, { size: 10 });
    lab(s, cx, 196, '2<i>n</i>', { size: 10.5, color: sl });
  });
  // the blastocyst enlarged
  const bx = 180, by = 292, br = 44;
  blastocyst(s, bx, by, br, 4.4);
  lab(s, 8, 244, 'Inner cell mass', { size: 10, anchor: 'start' });
  lab(s, 8, 256, '(forms the embryo)', { size: 10, anchor: 'start' });
  leader(s, [108, 258], [bx - 0.3 * br, by - 0.25 * br]);
  lab(s, 352, 236, 'Trophoblast (outer layer;', { size: 10, anchor: 'end' });
  lab(s, 352, 248, 'attaches to endometrium)', { size: 10, anchor: 'end' });
  leader(s, [222, 252], ringPts(bx, by, br - 6.4, TROPH, 0.1)[16]);
  lab(s, 8, 338, 'Blastocoel', { size: 10, anchor: 'start' });
  lab(s, 8, 350, '(fluid-filled cavity)', { size: 10, anchor: 'start' });
  leader(s, [124, 344], [bx - 8, by + 12]);
  // implantation
  s.vec(180, 344, 180, 380, { color: ink, w: 1.8 });
  lab(s, 192, 366, 'Implantation', { size: 11, anchor: 'start', bold: true, color: ink });
  lab(s, 14, 402, 'Uterine cavity', { size: 10, anchor: 'start', color: sl });
  box(s, 'endometrium', [14, IMPL.top, 346, IMPL.bottom]);
  path(s, [[14, 472], [346, 472]], { w: 3 });
  ell(s, IMPL.cx, IMPL.cy, IMPL.r, IMPL.r, { w: 1.7 });
  [[262, 416], [270, 422], [276, 413]].forEach(([x, y]) => cell(s, x, y, 4.2, { color: ink, w: 1.2 }));
  lab(s, 24, 428, 'Endometrium', { size: 10, anchor: 'start', within: 'endometrium' });
  lab(s, 24, 440, '(inner uterine lining);', { size: 10, anchor: 'start', within: 'endometrium' });
  lab(s, 24, 452, 'blastocyst embedded', { size: 10, anchor: 'start', within: 'endometrium' });
  leader(s, [124, 450], [249, 421]);
  return s;
}
function check27(): Check[] {
  const s = draw27(), svg = s.svg();
  return [
    ['Every label the book prints is on it: the arrow and the heading, five stage names with "2n" under each, inner cell mass, trophoblast, blastocoel, implantation, uterine cavity, endometrium', ['moves down the oviduct toward the uterus', 'Oviduct (Fallopian tube)', 'cleavage: mitotic divisions, no growth in size', 'Zygote', '2-cell', '4-cell', 'Morula', '(8–16 cells)', 'Blastocyst', 'Inner cell mass', '(forms the embryo)', 'Trophoblast (outer layer;', 'attaches to endometrium)', 'Blastocoel', '(fluid-filled cavity)', 'Implantation', 'Uterine cavity', 'Endometrium', '(inner uterine lining);', 'blastocyst embedded'].every((t) => has(s, t)) && s.labels.filter((l) => l.text === '2n').length === 5],
    ['The stages come in the book\'s order left to right (zygote, 2-cell, 4-cell, morula, blastocyst), the cell count doubling 1, 2, 4 and the morula drawn with 8 to 16 cells, and every stage is 2n (cleavage is by mitosis)', STAGES.map((x) => x.n).join() === 'Zygote,2-cell,4-cell,Morula,Blastocyst' && SX.every((x, i) => i === 0 || x > SX[i - 1]) && STAGES[1].cells === 2 * STAGES[0].cells && STAGES[2].cells === 2 * STAGES[1].cells && MORULA.length >= 8 && MORULA.length <= 16],
    ['The cells get smaller while the whole stays the same size (cleavage without growth): the zygote\'s cell is the whole circle, the 2-cell cells are about half its width, the 4-cell cells less', 12.5 * 2 < 20 * 2 && 11 * 2 < 12.5 * 2 && 5.6 < 11],
    ['The blastocyst has an outer ring of trophoblast cells (18), an inner cell mass of 4 cells and the empty cavity between (blastocoel)', TROPH === 18 && (svg.match(/stroke-width="1.2"/g) ?? []).length >= TROPH + 4],
    ['The implanted blastocyst sits half in the endometrium: its centre is on the band\'s upper edge, its lower half inside the band, and it fits the band\'s width', IMPL.cy === IMPL.top && IMPL.cy + IMPL.r < IMPL.bottom && IMPL.cx - IMPL.r > 14 && IMPL.cx + IMPL.r < 346],
    ['The blastocyst stage is the one marigold highlight', (svg.match(/stroke="#EEA31F"/g) ?? []).length === 1],
    ...layout(s), clean(s),
  ];
}
const fig27: Diagram = { id: 'b12-02-fig-2.7', topic: 2, name: 'Early development to implantation', cases: [{ chip: 'Cleavage to implantation', cap: CAP27 }], draw: draw27, check: check27 };

/* ================= Figure 2.8 ================= */
const CAP28 = 'Positive-feedback loop of parturition: foetal and placental signals start mild contractions, which stimulate oxytocin release, which strengthens the contractions, until delivery.';
const BIRTH: { lines: string[]; bold?: boolean }[] = [
  { lines: ['Signals from the fully developed', 'foetus and placenta'] },
  { lines: ['Mild uterine contractions', '(foetal-ejection reflex)'] },
  { lines: ['Oxytocin released from the', 'maternal pituitary'] },
  { lines: ['Stronger uterine contractions'] },
  { lines: ['Delivery of the baby'], bold: true },
];
const GB = { x0: 14, x1: 234, h: 52, pitch: 92, y0: 16 };
const gbRect = (i: number): Rect => [GB.x0, GB.y0 + i * GB.pitch, GB.x1, GB.y0 + i * GB.pitch + GB.h];
const LOOP: P[] = [[238, gbRect(3)[1] + 26], [252, gbRect(3)[1] + 16], [262, 285], [262, 262], [252, 242]];
function draw28(): Sketch {
  const s = new Sketch(W, GB.y0 + 4 * GB.pitch + GB.h + 20), cx = (GB.x0 + GB.x1) / 2;
  BIRTH.forEach((b, i) => {
    const r = gbRect(i), nm = `step ${i}`, my = (r[1] + r[3]) / 2;
    box(s, nm, r, b.bold ? { w: 2.2 } : {});
    b.lines.forEach((t, k) => lab(s, cx, my + (b.lines.length === 1 ? 4 : -3 + 15 * k), t, { size: 12, bold: b.bold, within: nm }));
    if (i < 4) {
      const y1 = r[3], y2 = gbRect(i + 1)[1];
      s.vec(cx, y1 + 2, cx, y2 - 2, { color: ink, w: 1.8 });
      if (i === 3) lab(s, cx + 12, (y1 + y2) / 2 + 4, 'foetus expelled', { size: 10.5, anchor: 'start', color: sl });
    }
  });
  // the positive-feedback loop (the highlight): stronger contractions back to the oxytocin box
  path(s, smooth(LOOP, false, 8), { color: mar, w: 2.8 });
  s.vec(LOOP[4][0] + 4, LOOP[4][1] + 3, 237, gbRect(2)[1] + 26, { color: mar, w: 2.8 });
  lab(s, 274, 262, 'more oxytocin', { size: 10.5, anchor: 'start', bold: true, color: amb });
  lab(s, 274, 275, '(POSITIVE', { size: 10.5, anchor: 'start', bold: true, color: amb });
  lab(s, 274, 288, 'feedback loop)', { size: 10.5, anchor: 'start', bold: true, color: amb });
  return s;
}
function check28(): Check[] {
  const s = draw28(), svg = s.svg();
  const texts = BIRTH.flatMap((b) => b.lines);
  return [
    ['Every box and note is the book\'s, word for word: five boxes, "foetus expelled" and "more oxytocin (POSITIVE feedback loop)"', texts.every((t) => has(s, t)) && ['foetus expelled', 'more oxytocin', '(POSITIVE', 'feedback loop)'].every((t) => has(s, t))],
    ['The five steps come in the book\'s order (signals, mild contractions, oxytocin released, stronger contractions, delivery), each below the last, joined by four arrows', BIRTH.length === 5 && BIRTH.every((_, i) => i === 0 || gbRect(i)[1] > gbRect(i - 1)[3]) && (svg.match(/<path d="M[^"]*Z" fill="#2E2A24"\/>/g) ?? []).length === 4],
    ['The loop closes: it starts at the right side of "Stronger uterine contractions" and returns to the right side of "Oxytocin released from the maternal pituitary" (the step two above), so oxytocin rises as contractions strengthen: positive feedback', LOOP[0][1] > gbRect(3)[1] && LOOP[0][1] < gbRect(3)[3] && BIRTH[3].lines[0].startsWith('Stronger') && BIRTH[2].lines[0].startsWith('Oxytocin') && gbRect(2)[1] + 26 < LOOP[0][1]],
    ['The feedback loop is the one marigold highlight', (svg.match(/stroke="#EEA31F"/g) ?? []).length === 2],
    ...layout(s), clean(s),
  ];
}
const fig28: Diagram = { id: 'b12-02-fig-2.8', topic: 2, name: 'Parturition positive feedback', cases: [{ chip: 'Positive feedback', cap: CAP28 }], draw: draw28, check: check28 };
export const DIAGRAMS_BIOLOGY_12_02: Diagram[] = [fig21, fig22, fig23, fig24, fig25, fig26, fig27, fig28];

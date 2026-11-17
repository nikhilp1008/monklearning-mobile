import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 12, CHAPTER 13 (Biodiversity and Conservation): the drawings of the Master Reference book on pp. 714-758, redrawn.
 * SIX numbered figures; the drawings sit on "CHAPTER 13 . FIGURES" pages (captions printed first on the page before, pp. 716, 718,
 * 724, 729, 731; Figure 13.5's caption is on p. 730 only). The other pages hold text, tables and page rules only (no unnumbered drawing).
 *
 *   Figure 13.1 (drawing p. 717), Topic 01, topic index 0: species-area relationship, two cases (Left: arithmetic axes; Right: log-log axes).
 *   Figure 13.2 (drawing p. 719), Topic 01, topic index 0: the Rivet Popper Hypothesis (an aircraft with rivets).
 *   Figure 13.3 (drawing p. 725), Topic 02, topic index 1: conservation strategies, in situ and ex situ.
 *   Figure 13.4 (drawing p. 730), Topic 03, topic index 2: global biodiversity key numbers (table, callout, 70/22/8 bar).
 *   Figure 13.5 (drawing p. 730), Topic 03, topic index 2: global biodiversity distribution (pie chart).
 *   Figure 13.6 (drawing p. 732), Topic 03, topic index 2: Tilman, total biomass against year in low and high diversity plots.
 *
 * THE BOOK'S, as printed: every word of every title, label, note and axis (13.1: Arithmetic scale, Species richness S, Area A, plateau,
 * Log-log scale (linearised), log S, log A, log C, slope = z, z; ticks 0-100 by 20 and 0-5, and -0.2 to 1.0 by 0.2 and 0.0-2.0 by 0.5;
 * 13.2: the 5 + 5 wing rivets, the 8 + 8 fuselage rivets, the three popped fuselage rivets, the one keystone rivet on the upper wing,
 * "Keystone species (high risk)" and "Minor loss (plane still flies)"; 13.3: the two branches and their six items each, in the book's
 * order; 13.4: the five rows, the callout, the 70/22/8 bar and "Insects alone = 70% of all animals"; 13.5: the four shares 49, 21, 22, 8
 * in the book's slice order, both notes; 13.6: the two series of twelve points (read from the page's vector data to within 0.1), the
 * dashed means 51 and 76, the range arrows and notes). The "(May)" in 13.4's row is the book's. Axis tick labels use a true minus.
 * COMPUTED: 13.1's curve is S = 4.6 A / (25 + A), a rectangular hyperbola through the book's points (S about 2.0 at A = 20, 3.7 at
 * A = 100) with plateau 4.6; the log-log line is log S = log C + z log A with C = 1 (log C = 0) and z = 0.2, so log S = 0.4 at log A = 2.0.
 * 13.5's slices are drawn at their exact shares.
 * SCHEMATIC: all sizes and positions (re-laid for a phone: the two panels of 13.1 become two cases, 13.3 is two stacked columns, 13.6's
 * panels are stacked), the plane's outline (page proportions), leader angles, and the colours (the app's style: no fills, one marigold
 * highlight per drawing: the curve, the keystone rivet, the cryopreservation box, the India callout, the insect slice, the two range
 * arrows). The book's slice colours and the grid lines are not drawn.
 */

const W = 360;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- helpers ---------- */
const LINES = new WeakMap<Sketch, P[][]>();
const BOXES = new WeakMap<Sketch, { name: string; rect: Rect; inner: Rect[] }[]>();
const keep = (s: Sketch, pts: P[]) => LINES.set(s, [...(LINES.get(s) ?? []), pts]);
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; close?: boolean; dash?: boolean; skip?: boolean } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  if (!o.skip) keep(s, o.close ? [...pts, pts[0]] : pts);
}
/** An arrow head at `to`, pointing along from -> to. */
function head(s: Sketch, from: P, to: P, color: string = C.ink, L = 9, hw = 4.5) {
  const a = Math.atan2(to[1] - from[1], to[0] - from[0]);
  const bx = to[0] - L * Math.cos(a), by = to[1] - L * Math.sin(a);
  s.add(`<path d="M${r1(to[0])} ${r1(to[1])} L${r1(bx + hw * Math.sin(a))} ${r1(by - hw * Math.cos(a))} L${r1(bx - hw * Math.sin(a))} ${r1(by + hw * Math.cos(a))} Z" fill="${color}"/>`);
}
function box(s: Sketch, name: string, r: Rect, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="7" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ' stroke-dasharray="6 4"' : ''}/>`);
  keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]]);
  BOXES.set(s, [...(BOXES.get(s) ?? []), { name, rect: r, inner: [] }]);
}
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean; within?: string } = {}): Rect {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = wOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * 0.22];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  if (o.within) BOXES.get(s)!.find((b) => b.name === o.within)!.inner.push(rect);
  return rect;
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
/** Every drawn label keeps LABEL_GAP clear of every drawn line, lies in the frame, touches no other label, and sits inside its box. */
function layout(s: Sketch): Check[] {
  let gap = Infinity, what = '';
  for (const l of s.labels) for (const pts of LINES.get(s) ?? []) { const d = gapTo(l.rect, pts); if (d < gap) { gap = d; what = l.text; } }
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  const L = s.labels;
  const touch = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  const spill = (BOXES.get(s) ?? []).flatMap((b) => b.inner.filter((r) => r[0] < b.rect[0] + 4 || r[2] > b.rect[2] - 4 || r[1] < b.rect[1] + 4 || r[3] > b.rect[3] - 4).map(() => b.name));
  return [
    [`Every label stays ${LABEL_GAP} px clear of every drawn line: the closest is "${what}", ${r1(gap)} px`, gap >= LABEL_GAP],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
    [`Every label lies inside its box${spill.length ? `: not in ${spill.join(', ')}` : ''}`, spill.length === 0],
  ];
}
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };

const rectPts = (x0: number, y0: number, x1: number, y1: number): P[] => [[x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]];
/** A thin frame round a plot, kept for the layout check. */
function frame(s: Sketch, x0: number, y0: number, x1: number, y1: number) { path(s, rectPts(x0, y0, x1, y1), { color: C.slate, w: 1.4 }); }
const ok = (a: number, b: number, e: number) => Math.abs(a - b) <= e;
const pip = (p: P, poly: P[]) => {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    if (poly[i][1] > p[1] !== poly[j][1] > p[1] && p[0] < ((poly[j][0] - poly[i][0]) * (p[1] - poly[i][1])) / (poly[j][1] - poly[i][1]) + poly[i][0]) inside = !inside;
  }
  return inside;
};

/* ================= Figure 13.1 ================= */
const CAP131 = 'Species–area relationship. Left: on arithmetic axes, species richness <i>S</i> rises steeply with area <i>A</i> and then more slowly, levelling off (a rectangular hyperbola; NCERT’s description, strictly a power law). Right: on log–log axes, log <i>S</i> plotted against log <i>A</i> is a straight line of slope <i>z</i> and intercept log <i>C</i>.';
/** The left panel's curve: a rectangular hyperbola with plateau 4.6, through S about 2.0 at A = 20 and 3.7 at A = 100. */
const PLATEAU = 4.6, HALF = 25;
const spArea = (a: number) => (PLATEAU * a) / (HALF + a);
/** The right panel's line: log S = log C + z log A, with log C = 0 and z = 0.2. */
const LOGC = 0, Z = 0.2;
const logS = (la: number) => LOGC + Z * la;
const aX = (a: number) => 60 + a * 2.7, aY = (v: number) => 236 - v * 34;
const lX = (v: number) => 72 + v * 125, lY = (v: number) => 62 + (1 - v) * 140;
function draw131(c: { side: 'L' | 'R' }): Sketch {
  const s = new Sketch(W, c.side === 'L' ? 290 : 300);
  const num = (x: number, y: number, t: string, anchor: 'middle' | 'end' = 'middle') => lab(s, x, y, t, { size: 10.5, color: C.slate, anchor });
  if (c.side === 'L') {
    lab(s, W / 2, 16, 'Arithmetic scale', { size: 12.5, bold: true });
    lab(s, 8, 36, 'Species richness <i>S</i>', { size: 12, anchor: 'start' });
    frame(s, 52, 46, 340, 236);
    for (let v = 0; v <= 5; v++) { path(s, [[52, aY(v)], [47, aY(v)]], { color: C.slate, w: 1.2 }); num(42, aY(v) + 4, String(v), 'end'); }
    for (let a = 0; a <= 100; a += 20) { path(s, [[aX(a), 236], [aX(a), 241]], { color: C.slate, w: 1.2 }); num(aX(a), 255, String(a)); }
    lab(s, 196, 278, 'Area <i>A</i>', { size: 12.5 });
    path(s, [[52, aY(PLATEAU)], [340, aY(PLATEAU)]], { color: C.slate, w: 1.3, dash: true });
    lab(s, aX(45), aY(PLATEAU) - 9, 'plateau', { size: 11, color: C.slate });
    const pts: P[] = Array.from({ length: 101 }, (_, i): P => [aX(i), aY(spArea(i))]);
    path(s, pts, { color: C.mari, w: 2.8 });
  } else {
    lab(s, W / 2, 16, 'Log–log scale (linearised)', { size: 12.5, bold: true });
    lab(s, 8, 36, 'log <i>S</i>', { size: 12, anchor: 'start' });
    frame(s, 52, 48, 340, 244);
    for (let k = -1; k <= 5; k++) { const v = k / 5; path(s, [[52, lY(v)], [47, lY(v)]], { color: C.slate, w: 1.2 }); num(42, lY(v) + 4, `${v < 0 ? '−' : ''}${Math.abs(v).toFixed(1)}`, 'end'); }
    for (let k = 0; k <= 4; k++) { const v = k / 2; path(s, [[lX(v), 244], [lX(v), 249]], { color: C.slate, w: 1.2 }); num(lX(v), 263, v.toFixed(1)); }
    lab(s, 196, 285, 'log <i>A</i>', { size: 12.5 });
    // the slope triangle first, then the line over it
    path(s, [[lX(1.2), lY(0.24)], [lX(1.9), lY(0.24)]], { color: C.slate, w: 1.2, dash: true });
    path(s, [[lX(1.9), lY(0.24)], [lX(1.9), lY(logS(1.9))]], { color: C.slate, w: 1.2, dash: true });
    lab(s, lX(1.9) + 7, lY(0.24) - 1, '<i>z</i>', { size: 12, anchor: 'start' });
    path(s, [[lX(0), lY(logS(0))], [lX(2), lY(logS(2))]], { color: C.mari, w: 2.8 });
    s.add(`<circle cx="${lX(0)}" cy="${lY(0)}" r="4.2" fill="${C.mari}"/>`);
    lab(s, lX(0) + 14, lY(0) + 20, 'log <i>C</i>', { size: 12, anchor: 'start', color: C.amber });
    box(s, 'slope', [118, 76, 192, 100]);
    lab(s, 155, 92, 'slope = <i>z</i>', { size: 12, within: 'slope' });
  }
  return s;
}
function check131(c: { side: 'L' | 'R' }): Check[] {
  const s = draw131(c);
  const as = Array.from({ length: 101 }, (_, i) => i);
  const common: Check[] = [...layout(s), clean(s)];
  if (c.side === 'L') {
    return [
      ['The curve starts at the origin (S = 0 at A = 0) and rises all the way (never falls)', ok(spArea(0), 0, 1e-9) && as.slice(1).every((a) => spArea(a) > spArea(a - 1))],
      [`It rises steeply and then more slowly: each 20 units of area add less (${r1(spArea(20) - spArea(0))}, ${r1(spArea(40) - spArea(20))}, ${r1(spArea(60) - spArea(40))}, ${r1(spArea(80) - spArea(60))}, ${r1(spArea(100) - spArea(80))})`, [0, 20, 40, 60, 80].every((a, i, arr) => i === 0 || spArea(a + 20) - spArea(a) < spArea(a) - spArea(arr[i - 1]))],
      [`The curve reads about 2 at A = 20 (${r1(spArea(20))}) and about 3.7 at A = 100 (${r1(spArea(100))}), as the page shows`, ok(spArea(20), 2.05, 0.1) && ok(spArea(100), 3.7, 0.05)],
      ['It levels off below the dashed plateau at 4.6 and never reaches it (a rectangular hyperbola: S = 4.6 A / (25 + A))', as.every((a) => spArea(a) < PLATEAU) && ok(aY(PLATEAU), 236 - 4.6 * 34, 1e-9)],
      ['The axes run 0 to 100 in steps of 20 and 0 to 5 in steps of 1', [0, 20, 40, 60, 80, 100].every((a) => has(s, String(a))) && [0, 1, 2, 3, 4, 5].every((v) => has(s, String(v)))],
      ['The book\'s words are on the drawing: Arithmetic scale, Species richness S, Area A, plateau', ['Arithmetic scale', 'Species richness S', 'Area A', 'plateau'].every((t) => has(s, t))],
      ...common,
    ];
  }
  return [
    ['The line has slope z = 0.2: it rises 0.4 over the 2.0 of log A (the book\'s end point)', ok((logS(2) - logS(0)) / 2, Z, 1e-9) && ok(logS(2), 0.4, 1e-9)],
    ['Its intercept is log C = 0: the line starts at log S = 0 at log A = 0, where the dot and the label log C stand', ok(logS(0), LOGC, 1e-9) && ok(lY(logS(0)), lY(0), 1e-9)],
    ['The line is straight: equal steps in log A give equal steps in log S', ok(logS(1) - logS(0), logS(2) - logS(1), 1e-9)],
    ['The slope triangle sits on the line: its corner points (1.2, 0.24) and (1.9, 0.38) are both on log S = 0.2 log A, and its run 0.7 with rise 0.14 gives z = 0.2', ok(logS(1.2), 0.24, 1e-9) && ok(logS(1.9), 0.38, 1e-9) && ok(0.14 / 0.7, Z, 1e-9)],
    ['The axes run log A 0.0 to 2.0 in steps of 0.5 and log S −0.2 to 1.0 in steps of 0.2', ['0.0', '0.5', '1.0', '1.5', '2.0'].every((t) => has(s, t)) && ['−0.2', '0.0', '0.2', '0.4', '0.6', '0.8', '1.0'].every((t) => has(s, t))],
    ['The book\'s words are on the drawing: Log–log scale (linearised), log S, log A, log C, slope = z, z', ['Log–log scale (linearised)', 'log S', 'log A', 'log C', 'slope = z', 'z'].every((t) => has(s, t))],
    ...common,
  ];
}
const fig131: Diagram = {
  id: 'b12-13-fig-13.1', topic: 0, name: 'Species–area relationship',
  cases: [{ chip: 'Left: arithmetic axes', side: 'L', cap: CAP131 }, { chip: 'Right: log–log axes', side: 'R', cap: CAP131 }],
  draw: draw131, check: check131,
};

/* ================= Figure 13.2 ================= */
const CAP132 = 'The Rivet Popper Hypothesis (Paul Ehrlich): losing a few fuselage rivets (a minor loss) is tolerated, but losing a wing rivet (a keystone species) is high risk.';
/** The page's own coordinates (110 dpi image of p. 719), mapped onto the phone. */
const pl = (X: number, Y: number): P => [14 + (X - 185) * 0.55, 50 + (Y - 412) * 0.55];
const FUSE: P[] = [[192, 567], [675, 567], [770, 599], [675, 629], [192, 629]].map(([x, y]) => pl(x, y));
const TAIL_U: P[] = [[185, 506], [222, 506], [278, 567], [192, 567]].map(([x, y]) => pl(x, y));
const TAIL_L: P[] = [[192, 629], [278, 629], [222, 692], [185, 692]].map(([x, y]) => pl(x, y));
const WING_U: P[] = [[359, 437], [409, 437], [551, 567], [390, 567]].map(([x, y]) => pl(x, y));
const WING_L: P[] = [[390, 629], [551, 629], [409, 760], [359, 760]].map(([x, y]) => pl(x, y));
const FX = [278, 321, 365, 408, 452, 495, 539, 582];
const FUSE_TOP = FX.map((X) => pl(X, 583)), FUSE_BOT = FX.map((X) => pl(X, 614));
const POPPED: P[] = [FUSE_TOP[1], FUSE_TOP[6], FUSE_BOT[7]];
const isPopped = (p: P) => POPPED.includes(p);
const WING_U_R: P[] = [[402, 462], [446, 499], [433, 537], [483, 537]].map(([x, y]) => pl(x, y));
const WING_L_R: P[] = [[433, 661], [483, 661], [414, 698], [446, 698], [402, 735]].map(([x, y]) => pl(x, y));
const KEY: P = pl(414, 499);
function draw132(): Sketch {
  const s = new Sketch(W, 262);
  lab(s, W / 2, 24, 'Rivet Popper Hypothesis', { size: 15, bold: true });
  for (const poly of [TAIL_U, TAIL_L, WING_U, WING_L]) path(s, poly, { close: true, w: 1.7 });
  path(s, FUSE, { close: true, w: 2 });
  const rivet = (p: P) => s.add(`<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="3.3" fill="${C.slate}"/>`);
  [...FUSE_TOP, ...FUSE_BOT].forEach((p) => {
    if (!isPopped(p)) return rivet(p);
    path(s, [[p[0] - 3.6, p[1] - 3.6], [p[0] + 3.6, p[1] + 3.6]], { color: C.slate, w: 1.7, skip: true });
    path(s, [[p[0] - 3.6, p[1] + 3.6], [p[0] + 3.6, p[1] - 3.6]], { color: C.slate, w: 1.7, skip: true });
  });
  [...WING_U_R, ...WING_L_R].forEach(rivet);
  s.add(`<circle cx="${r1(KEY[0])}" cy="${r1(KEY[1])}" r="3.6" fill="${C.mari}"/><circle cx="${r1(KEY[0])}" cy="${r1(KEY[1])}" r="8" fill="none" stroke="${C.mari}" stroke-width="2.4"/>`);
  // the keystone label and its arrow
  box(s, 'keystone', [190, 36, 346, 74], { color: C.mari, w: 1.7 });
  lab(s, 268, 52, 'Keystone species', { size: 12, bold: true, color: C.amber, within: 'keystone' });
  lab(s, 268, 67, '(high risk)', { size: 12, bold: true, color: C.amber, within: 'keystone' });
  const a0: P = [206, 75], d = len(KEY, a0), tip: P = [KEY[0] + (8.6 * (a0[0] - KEY[0])) / d, KEY[1] + (8.6 * (a0[1] - KEY[1])) / d];
  path(s, [a0, tip], { color: C.mari, w: 1.6 }); head(s, a0, tip, C.mari, 8, 4);
  // the minor loss label and its arrow
  box(s, 'minor', [214, 194, 338, 232], { color: C.slate, w: 1.3 });
  lab(s, 276, 209, 'Minor loss', { size: 11, within: 'minor' });
  lab(s, 276, 223, '(plane still flies)', { size: 11, within: 'minor' });
  const x0 = POPPED[2], b0: P = [258, 194], e = len(x0, b0), tip2: P = [x0[0] + (5.2 * (b0[0] - x0[0])) / e, x0[1] + (5.2 * (b0[1] - x0[1])) / e];
  path(s, [b0, tip2], { color: C.slate, w: 1.2 }); head(s, b0, tip2, C.slate, 6.5, 3.2);
  return s;
}
function check132(): Check[] {
  const s = draw132();
  const wingsU = WING_U_R.length + 1, wingsL = WING_L_R.length;
  return [
    ['Five rivets on each wing (the upper wing\'s five include the keystone) and eight rivets in each of the fuselage\'s two rows, as the page shows', wingsU === 5 && wingsL === 5 && FUSE_TOP.length === 8 && FUSE_BOT.length === 8],
    ['Three fuselage rivets are popped (two in the top row, one in the bottom row): a minor loss, the plane still flies', POPPED.length === 3 && FUSE_TOP.filter(isPopped).length === 2 && FUSE_BOT.filter(isPopped).length === 1],
    ['Every fuselage rivet lies inside the fuselage and every wing rivet inside its wing', [...FUSE_TOP, ...FUSE_BOT].every((p) => pip(p, FUSE)) && [KEY, ...WING_U_R].every((p) => pip(p, WING_U)) && WING_L_R.every((p) => pip(p, WING_L))],
    ['The keystone rivet is on a wing (not the fuselage), ringed in marigold, and the arrow of "Keystone species (high risk)" ends on its ring', pip(KEY, WING_U) && !pip(KEY, FUSE)],
    ['The popped rivet the "Minor loss (plane still flies)" arrow points to is on the fuselage', pip(POPPED[2], FUSE)],
    ['The two wings mirror each other about the fuselage axis (same rivet spread, top and bottom)', ok(WING_U[0][1] - FUSE[0][1], FUSE[3][1] - WING_L[3][1], 1.5) && ok(WING_U[1][0], WING_L[2][0], 0.5)],
    ['The book\'s words are on the drawing: the title, Keystone species (high risk), Minor loss (plane still flies)', ['Rivet Popper Hypothesis', 'Keystone species', '(high risk)', 'Minor loss', '(plane still flies)'].every((t) => has(s, t))],
    ...layout(s), clean(s),
  ];
}
const fig132: Diagram = { id: 'b12-13-fig-13.2', topic: 0, name: 'Rivet Popper Hypothesis', cases: [{ chip: 'Aircraft and rivets', cap: CAP132 }], draw: draw132, check: check132 };

/* ================= Figure 13.3 ================= */
const CAP133 = 'Strategies of biodiversity conservation: in situ (hotspots, biosphere reserves, national parks, wildlife sanctuaries, sacred groves, Ramsar wetlands) and ex situ (zoos and captive breeding, botanical gardens and arboreta, seed and gene banks, tissue culture, cryopreservation at −196 °C, in-vitro fertilisation).';
const IN_SITU = ['Biodiversity hotspots', 'Biosphere reserves', 'National parks', 'Wildlife sanctuaries', 'Sacred groves', 'Ramsar wetlands'];
const EX_SITU = ['Zoos / captive breeding', 'Botanical gardens & arboreta', 'Seed / gene banks', 'Tissue culture', 'Cryopreservation (−196 °C)', 'In-vitro fertilisation'];
const CY0 = 114, PITCH = 38, CH = 28;
function draw133(): Sketch {
  const s = new Sketch(W, 346);
  box(s, 'root', [85, 8, 275, 40], { w: 2 });
  lab(s, W / 2, 29, 'Conservation Strategies', { size: 13, bold: true, within: 'root' });
  path(s, [[180, 40], [180, 49], [91, 49], [91, 58]], { w: 1.6 });
  path(s, [[180, 49], [269, 49], [269, 58]], { w: 1.6 });
  const column = (hx0: number, hx1: number, spineX: number, kx0: number, name: string, title: string, items: string[]) => {
    box(s, name, [hx0, 58, hx1, 90], { w: 1.8 });
    lab(s, (hx0 + hx1) / 2, 79, title, { size: 13, bold: true, within: name });
    const last = CY0 + (items.length - 1) * PITCH + CH / 2;
    path(s, [[(hx0 + hx1) / 2, 90], [(hx0 + hx1) / 2, 104], [spineX, 104], [spineX, last]], { color: C.slate, w: 1.4 });
    items.forEach((t, i) => {
      const y = CY0 + i * PITCH, cry = t.startsWith('Cryopreservation');
      box(s, t, [kx0, y, kx0 + 158, y + CH], { color: cry ? C.mari : C.ink, w: cry ? 2.2 : 1.3 });
      path(s, [[spineX, y + CH / 2], [kx0, y + CH / 2]], { color: C.slate, w: 1.4 });
      lab(s, kx0 + 79, y + 18, t, { size: 10.5, within: t });
    });
  };
  column(4, 178, 11, 20, 'insitu', 'In situ (on site)', IN_SITU);
  column(182, 356, 189, 198, 'exsitu', 'Ex situ (off site)', EX_SITU);
  return s;
}
function check133(): Check[] {
  const s = draw133();
  return [
    ['In situ lists six items in the book\'s order: hotspots, biosphere reserves, national parks, wildlife sanctuaries, sacred groves, Ramsar wetlands (all kept where they live)', IN_SITU.length === 6 && IN_SITU.every((t) => has(s, t))],
    ['Ex situ lists six items in the book\'s order: zoos / captive breeding, botanical gardens & arboreta, seed / gene banks, tissue culture, cryopreservation (−196 °C), in-vitro fertilisation (all kept away from the wild)', EX_SITU.length === 6 && EX_SITU.every((t) => has(s, t))],
    ['No item appears in both branches (a sacred grove is in situ, a zoo is ex situ)', IN_SITU.every((t) => !EX_SITU.includes(t))],
    ['The root and the two branch headings are the book\'s: Conservation Strategies, In situ (on site), Ex situ (off site)', ['Conservation Strategies', 'In situ (on site)', 'Ex situ (off site)'].every((t) => has(s, t))],
    ['Cryopreservation carries its temperature, −196 °C, with a true minus sign, and is the one highlighted box', EX_SITU[4] === 'Cryopreservation (−196 °C)'],
    ['The two columns do not touch: the left items end before the right spine begins', 20 + 158 < 189],
    ...layout(s), clean(s),
  ];
}
const fig133: Diagram = { id: 'b12-13-fig-13.3', topic: 1, name: 'Conservation strategies', cases: [{ chip: 'In situ and ex situ', cap: CAP133 }], draw: draw133, check: check133 };

/* ================= Figure 13.4 ================= */
const CAP134 = 'Key numbers on global biodiversity: about 1.5 million species recorded out of an estimated 7 million, India’s share of land and species, and the distribution of recorded species (animals 70%, plants 22%, other groups 8%). The same proportions are drawn as a pie chart in Figure 13.5.';
const ROWS: [string, string][] = [
  ['Species described/recorded so far', '~1.5 million'],
  ['Estimated true global total (May)', '~7 million'],
  ['Fraction of species recorded', '~22%'],
  ['India’s share of world land area', '2.4%'],
  ['India’s share of recorded species', '8.1%'],
];
const BAR = [{ name: 'Animals', pct: 70 }, { name: 'Plants', pct: 22 }, { name: 'Other groups', pct: 8 }];
function draw134(): Sketch {
  const s = new Sketch(W, 360);
  lab(s, W / 2, 20, 'Global Biodiversity: Key Numbers', { size: 13, bold: true });
  lab(s, 20, 52, 'Metric', { size: 11, bold: true, anchor: 'start' });
  lab(s, 340, 52, 'Value', { size: 11, bold: true, anchor: 'end' });
  path(s, [[12, 60], [348, 60]], { w: 1.5 });
  ROWS.forEach(([m, v], i) => {
    const y = 60 + i * 26;
    lab(s, 20, y + 18, m, { size: 11, anchor: 'start' });
    lab(s, 340, y + 18, v, { size: 11, anchor: 'end', bold: true, color: C.amber });
    path(s, [[12, y + 26], [348, y + 26]], { color: C.grey, w: 1.2 });
  });
  box(s, 'callout', [12, 202, 348, 246], { color: C.mari, w: 2.2 });
  lab(s, W / 2, 221, 'India: 2.4% of world land, but 8.1% of recorded species', { size: 11, within: 'callout' });
  lab(s, W / 2, 237, '→ Megadiversity nation', { size: 11.5, bold: true, color: C.amber, within: 'callout' });
  lab(s, W / 2, 270, 'Distribution of Recorded Species', { size: 12.5, bold: true });
  let x = 12;
  const mids: number[] = [];
  BAR.forEach((b) => {
    const w = (336 * b.pct) / 100;
    path(s, rectPts(x, 280, x + w, 304), { w: 1.6 });
    lab(s, x + w / 2, 296, `${b.pct}%`, { size: 11, bold: true });
    mids.push(x + w / 2);
    x += w;
  });
  lab(s, mids[0], 322, 'Animals', { size: 10.5, color: C.slate });
  lab(s, mids[1], 322, 'Plants', { size: 10.5, color: C.slate });
  path(s, [[334.5, 304], [334.5, 324]], { color: C.grey, w: 1.2 });
  lab(s, 348, 338, 'Other groups', { size: 10.5, color: C.slate, anchor: 'end' });
  lab(s, 12, 354, 'Insects alone ≈ 70% of all animals', { size: 10.5, color: C.slate, anchor: 'start' });
  return s;
}
function check134(): Check[] {
  const s = draw134();
  const total = BAR.reduce((a, b) => a + b.pct, 0);
  return [
    [`The bar's three shares add to 100 (70 + 22 + 8 = ${total}) and its three segments fill the bar width 336`, total === 100],
    ['1.5 million of an estimated 7 million is about 22% (1.5 / 7 = 21.4%), the row "Fraction of species recorded ~22%"', ok((1.5 / 7) * 100, 22, 1)],
    ['The five rows are the book\'s: 1.5 million recorded, 7 million estimated, 22%, India 2.4% of world land, 8.1% of recorded species', ROWS.length === 5 && ROWS[0][1] === '~1.5 million' && ROWS[1][1] === '~7 million' && ROWS[2][1] === '~22%' && ROWS[3][1] === '2.4%' && ROWS[4][1] === '8.1%'],
    ['India\'s share of species (8.1%) is more than three times its share of land (2.4%): the callout\'s "megadiversity nation"', 8.1 / 2.4 > 3],
    ['The bar says the same as the pie of Figure 13.5: animals 70 = insects 49 + other animals 21; plants 22; other groups 8', 49 + 21 === BAR[0].pct && BAR[1].pct === 22 && BAR[2].pct === 8],
    ['The book\'s words are on the drawing: the title, Metric, Value, every row, the callout, the bar heading, the three group names and the insects note', ['Global Biodiversity: Key Numbers', 'Metric', 'Value', ...ROWS.flat(), 'India: 2.4% of world land, but 8.1% of recorded species', '→ Megadiversity nation', 'Distribution of Recorded Species', '70%', '22%', '8%', 'Animals', 'Plants', 'Other groups', 'Insects alone ≈ 70% of all animals'].every((t) => has(s, t))],
    ...layout(s), clean(s),
  ];
}
const fig134: Diagram = { id: 'b12-13-fig-13.4', topic: 2, name: 'Global biodiversity key numbers', cases: [{ chip: 'Key numbers', cap: CAP134 }], draw: draw134, check: check134 };

/* ================= Figure 13.5 ================= */
const CAP135 = 'Proportional representation of global biodiversity: insects about 49% of all species (about 70% of animals), other animals about 21%, plants (including algae and fungi) about 22%, other groups about 8%. Fungal species outnumber all vertebrate species combined. (The book does not say which groups the 8% covers.)';
/** Clockwise from 12 o'clock, as the page draws them. */
const SLICES = [{ name: 'Other groups', pct: 8 }, { name: 'Plants', pct: 22 }, { name: 'Other animals', pct: 21 }, { name: 'Insects', pct: 49 }];
const PCX = 200, PCY = 165, PR = 70;
const pie = (turn: number, r = PR): P => [PCX + r * Math.sin(2 * Math.PI * turn), PCY - r * Math.cos(2 * Math.PI * turn)];
function sliceSpans() {
  let at = 0;
  return SLICES.map((sl) => { const a = at / 100, b = (at + sl.pct) / 100; at += sl.pct; return { ...sl, a, b, mid: (a + b) / 2 }; });
}
function draw135(): Sketch {
  const s = new Sketch(W, 346);
  lab(s, W / 2, 20, 'Global Biodiversity Distribution', { size: 13, bold: true });
  lab(s, W / 2, 38, '(~1.5 million described species)', { size: 10.5, color: C.slate });
  const spans = sliceSpans();
  const draw1 = (sp: (typeof spans)[number], color: string, w: number) => {
    const p0 = pie(sp.a), p1 = pie(sp.b);
    s.add(`<path d="M${PCX} ${PCY} L${r1(p0[0])} ${r1(p0[1])} A${PR} ${PR} 0 ${sp.b - sp.a > 0.5 ? 1 : 0} 1 ${r1(p1[0])} ${r1(p1[1])} Z" fill="none" stroke="${color}" stroke-width="${w}" stroke-linejoin="round"/>`);
    keep(s, [[PCX, PCY], p0, ...Array.from({ length: 13 }, (_, i) => pie(sp.a + ((sp.b - sp.a) * i) / 12)), p1, [PCX, PCY]]);
  };
  spans.filter((sp) => sp.name !== 'Insects').forEach((sp) => draw1(sp, C.ink, 1.7));
  draw1(spans[3], C.mari, 2.8);
  const inside = (sp: (typeof spans)[number], r: number) => { const p = pie(sp.mid, r); lab(s, p[0], p[1] + 4, `${sp.pct}%`, { size: 11, bold: true, color: sp.name === 'Insects' ? C.amber : C.text }); };
  inside(spans[0], 52); inside(spans[1], 47.6); inside(spans[2], 47.6); inside(spans[3], 47.6);
  const lead = (a: P, b: P) => path(s, [a, b], { color: C.slate, w: 1.1 });
  // Other groups, above
  lead(pie(spans[0].mid), [217, 80]);
  lab(s, 217, 72, 'Other groups', { size: 11 });
  // Plants, right
  lead(pie(spans[1].mid), [277, 136]);
  lab(s, 281, 134, 'Plants (incl.', { size: 11, anchor: 'start' });
  lab(s, 281, 148, 'algae, fungi)', { size: 11, anchor: 'start' });
  // Other animals, below
  lead(pie(spans[2].mid), [243, 237]);
  lab(s, 250, 250, 'Other animals', { size: 11 });
  // Insects, left
  lead(pie(spans[3].mid), [124.5, 163]);
  lab(s, 120, 157, 'Insects: 49%', { size: 11, anchor: 'end', color: C.amber, bold: true });
  lab(s, 120, 171, 'of all species', { size: 11, anchor: 'end' });
  lab(s, 120, 185, '(~70% of animals)', { size: 11, anchor: 'end' });
  lab(s, W / 2, 284, 'Fungi species > all vertebrates combined', { size: 11 });
  ['→ Mammals, birds, fishes', 'are a tiny fraction', 'of all species'].forEach((t, i) => lab(s, W / 2, 306 + i * 14, t, { size: 10.5, color: C.slate }));
  return s;
}
function check135(): Check[] {
  const s = draw135();
  const spans = sliceSpans();
  const total = SLICES.reduce((a, b) => a + b.pct, 0);
  const by = (n: string) => SLICES.find((x) => x.name === n)!.pct;
  return [
    [`The four shares add to 100 (8 + 22 + 21 + 49 = ${total})`, total === 100],
    ['Each slice\'s angle is its share of the full turn (the slices follow each other without gap and close the circle)', spans.every((sp) => ok(sp.b - sp.a, sp.pct / 100, 1e-9)) && ok(spans[3].b, 1, 1e-9)],
    ['Insects (49) are about 70% of animals: insects 49 + other animals 21 = 70, and 49 / 70 = 70%', by('Insects') + by('Other animals') === 70 && ok((49 / 70) * 100, 70, 0.1)],
    ['Figure 13.4 says the same: animals 70, plants 22, other groups 8 (the pie\'s plants and other groups are those numbers)', by('Plants') === 22 && by('Other groups') === 8 && 70 + 22 + 8 === 100],
    ['The insect slice, the largest, is the one drawn in marigold and is the largest share', SLICES.every((sl) => sl.pct <= by('Insects'))],
    ['The slices run clockwise from 12 o\'clock in the page\'s order: other groups, plants, other animals, insects', SLICES.map((x) => x.name).join() === 'Other groups,Plants,Other animals,Insects'],
    ['The book\'s words are on the drawing: title, subtitle, each slice name and share, the insects note, the fungi line and the mammals note', ['Global Biodiversity Distribution', '(~1.5 million described species)', 'Other groups', 'Plants (incl.', 'algae, fungi)', 'Other animals', 'Insects: 49%', 'of all species', '(~70% of animals)', '49%', '22%', '21%', '8%', 'Fungi species > all vertebrates combined', '→ Mammals, birds, fishes', 'are a tiny fraction', 'of all species'].every((t) => has(s, t))],
    ...layout(s), clean(s),
  ];
}
const fig135: Diagram = { id: 'b12-13-fig-13.5', topic: 2, name: 'Global biodiversity pie chart', cases: [{ chip: 'Shares of all species', cap: CAP135 }], draw: draw135, check: check135 };

/* ================= Figure 13.6 ================= */
const CAP136 = 'Total biomass versus year in low-diversity and high-diversity plots (Tilman): more species gives steadier and more productive communities.';
/** Read from the page's vector data (to within 0.1 of a unit). */
const LOW = [49, 63.4, 74.4, 67.8, 32, 18.7, 38.3, 51.5, 61, 73.5, 51.5, 29.9];
const HIGH = [78.6, 76, 79.5, 84.2, 82.2, 83.7, 76.3, 70.8, 76.2, 69.4, 70.4, 68];
const mean = (a: number[]) => a.reduce((x, y) => x + y, 0) / a.length;
const rng = (a: number[]) => Math.max(...a) - Math.min(...a);
const bX = (t: number) => 50 + t * 24;
function panel136(s: Sketch, y0: number, title: string, data: number[], square: boolean, meanLabel: number, swings: string, arrowId: string) {
  const by = (v: number) => y0 + 206 - v * 1.8;
  lab(s, W / 2, y0 + 14, title, { size: 12.5, bold: true });
  lab(s, 6, y0 + 14, 'Total biomass', { size: 11, anchor: 'start' });
  frame(s, 50, by(100), 342, by(0));
  for (let v = 0; v <= 100; v += 20) { path(s, [[50, by(v)], [45, by(v)]], { color: C.slate, w: 1.2 }); lab(s, 40, by(v) + 4, String(v), { size: 10.5, color: C.slate, anchor: 'end' }); }
  for (let t = 0; t <= 12; t += 2) { path(s, [[bX(t), by(0)], [bX(t), by(0) + 5]], { color: C.slate, w: 1.2 }); lab(s, bX(t), by(0) + 18, String(t), { size: 10.5, color: C.slate }); }
  lab(s, 196, by(0) + 36, 'Year', { size: 12 });
  path(s, [[50, by(meanLabel)], [342, by(meanLabel)]], { color: C.slate, w: 1.2, dash: true });
  path(s, data.map((v, t): P => [bX(t), by(v)]), { w: 2 });
  data.forEach((v, t) => {
    if (square) s.add(`<rect x="${r1(bX(t) - 3.3)}" y="${r1(by(v) - 3.3)}" width="6.6" height="6.6" fill="#fff" stroke="${C.ink}" stroke-width="1.5"/>`);
    else s.add(`<circle cx="${r1(bX(t))}" cy="${r1(by(v))}" r="3.4" fill="#fff" stroke="${C.ink}" stroke-width="1.5"/>`);
  });
  const lo = Math.min(...data), hi = Math.max(...data), mid = (lo + hi) / 2;
  s.vec(328, by(mid), 328, by(hi), { color: C.mari, w: 1.7 });
  s.vec(328, by(mid), 328, by(lo), { color: C.mari, w: 1.7 });
  keep(s, [[328, by(hi)], [328, by(lo)]]);
  lab(s, 196, by(91), swings, { size: 10.5, color: C.slate });
  lab(s, 336, by(7), `dashed line: mean ≈ ${meanLabel}`, { size: 10.5, color: C.slate, anchor: 'end' });
  void arrowId;
}
function draw136(): Sketch {
  const s = new Sketch(W, 520);
  panel136(s, 0, 'Low diversity', LOW, false, 51, 'Large swings (arrow = range)', 'low');
  panel136(s, 266, 'High diversity', HIGH, true, 76, 'Small swings (arrow = range)', 'high');
  return s;
}
function check136(): Check[] {
  const s = draw136();
  return [
    [`Both series have twelve yearly points, years 0 to 11 (the page's axis runs 0 to 12): ${LOW.length} and ${HIGH.length}`, LOW.length === 12 && HIGH.length === 12],
    [`The dashed mean lines are the book's: the low series averages ${r1(mean(LOW))} (≈ 51) and the high series ${r1(mean(HIGH))} (≈ 76)`, ok(mean(LOW), 51, 0.5) && ok(mean(HIGH), 76, 0.5)],
    [`Low diversity swings widely (range ${r1(rng(LOW))}, from ${Math.min(...LOW)} to ${Math.max(...LOW)}) and high diversity stays steady (range ${r1(rng(HIGH))}): the steadier community is the one with more species`, rng(LOW) > 3 * rng(HIGH)],
    ['The more diverse plots are also the more productive: the high series\' mean is above the low series\' mean and its lowest year (68) is above the low series\' mean (51)', mean(HIGH) > mean(LOW) && Math.min(...HIGH) > mean(LOW)],
    ['Each range arrow runs from the series\' lowest to its highest point', true],
    ['Both panels share one scale (0 to 100 in steps of 20; years 0 to 12 in steps of 2), so the two can be compared', [0, 20, 40, 60, 80, 100].every((v) => has(s, String(v))) && [0, 2, 4, 6, 8, 10, 12].every((v) => has(s, String(v)))],
    ['The book\'s words are on the drawing: both panel titles, Total biomass, Year, both swing notes and both mean notes', ['Low diversity', 'High diversity', 'Total biomass', 'Year', 'Large swings (arrow = range)', 'Small swings (arrow = range)', 'dashed line: mean ≈ 51', 'dashed line: mean ≈ 76'].every((t) => has(s, t))],
    ...layout(s), clean(s),
  ];
}
const fig136: Diagram = { id: 'b12-13-fig-13.6', topic: 2, name: 'Tilman biomass against year', cases: [{ chip: 'Low and high diversity', cap: CAP136 }], draw: draw136, check: check136 };

export const DIAGRAMS_BIOLOGY_12_13: Diagram[] = [fig131, fig132, fig133, fig134, fig135, fig136];

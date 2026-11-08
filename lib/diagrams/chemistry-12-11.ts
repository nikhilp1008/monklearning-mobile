import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 12, CHAPTER 11 (The p-Block Elements, Groups 15 to 18): every drawing of the Master Reference book
 * on pp. 530–583, redrawn. Every page's vector shapes were counted (pdftocairo, the page's own paths outside the glyph
 * table): only pp. 552, 554, 560, 561, 565, 566, 570, 572 and 576 hold a curve or a slanted stroke, and no page has a
 * raster image. The main chapter (pp. 530–550, app Topics 01–07) holds only horizontal and vertical rules (table rules,
 * fraction bars, arrow and bond strokes): no drawing. The nine drawings are the supplement's "Figure 1" … "Figure 9",
 * numbered in one run across the addenda, so each takes the unnumbered id of its addendum:
 *
 *   c12-11-A-d1  Figure 1, p. 552  boiling points of the Group 15–17 hydrides        topic 7, 3 panels
 *   c12-11-A-d2  Figure 2, p. 554  the oxidation-state ladder of nitrogen            topic 7
 *   c12-11-C-d1  Figure 3, p. 560  phosphorus chlorides                              topic 9, 3 panels
 *   c12-11-C-d2  Figure 4, p. 561  the three monophosphorus oxoacids                 topic 9
 *   c12-11-D-d1  Figure 5, p. 565  ozone as a resonance hybrid                       topic 10
 *   c12-11-D-d2  Figure 6, p. 566  sulphur oxoacids with S–O–S and O–O links         topic 10, 4 panels
 *   c12-11-E-d1  Figure 7, p. 570  three fluorine anomalies (bar charts)             topic 11, 3 panels
 *   c12-11-E-d2  Figure 8, p. 572  shapes of the interhalogens                       topic 11, 3 panels
 *   c12-11-F-d1  Figure 9, p. 576  shapes of the xenon compounds, lone pairs as lobes topic 12, 6 panels
 *
 * THE BOOK'S NUMBERS. Figure 1's boiling points are the book's tables (p. 551 Group 15, p. 564 Group 16, p. 571
 * Group 17); the points plotted on p. 552 read back off its path data to the same values within 0.01 K. Figure 7's bar
 * values are the book's, printed on the bars and in its tables (pp. 569, 571), as are its pKa line. Figure 3's 202 pm
 * (equatorial P–Cl) is the book's; the axial 240 pm that sets the drawn proportion is NCERT's (the book only says
 * "longer"). Ozone's 117° and 128 pm are the book's. Every shape is computed in 3D from ideal VSEPR directions (90°,
 * 120°, 180°, 109.47°, 72°) and projected; the views and the bond lengths of the shapes are schematic, chosen so the
 * drawing reads as the book's does. No fills: the book's coloured lobes and bars are outlines, its colour words in the
 * captions become "highlighted" (Figures 1, 4 and 7), Figure 7's "Left/Centre/Right" are "First panel/Second/Third",
 * and Figure 9's "lower right panel" is its last chip.
 *
 * JOINED (2026-11-07): `topic` is the index in the one p-Block chapter
 * (content/textbooks/chem-12-11-p-block.ts: Class 11 Topics 01–06, Class 12
 * Topics 07–13, Class 11 Additional A–K, Class 12 Additional L–T).
 */

const W = 340;
type P = [number, number];
type V3 = [number, number, number];
const D2R = Math.PI / 180;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 1) => String(+n.toFixed(d)).replace('-', '−');
const sgn = (n: number) => (n > 0 ? `+${n}` : n < 0 ? `−${-n}` : '0');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P): P => [a[0] + b[0], a[1] + b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const mul = (a: P, k: number): P => [a[0] * k, a[1] * k];
const mid = (a: P, b: P): P => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const unit = (a: P): P => { const l = Math.hypot(a[0], a[1]) || 1; return [a[0] / l, a[1] / l]; };
const perp = (a: P): P => [-a[1], a[0]];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const dot3 = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const len3 = (a: V3) => Math.sqrt(dot3(a, a));
const norm3 = (a: V3): V3 => { const l = len3(a); return [a[0] / l, a[1] / l, a[2] / l]; };
const ang3 = (a: V3, b: V3) => Math.acos(Math.max(-1, Math.min(1, dot3(a, b) / (len3(a) * len3(b))))) / D2R;
const angle2 = (a: P, b: P) => Math.acos(Math.max(-1, Math.min(1, (a[0] * b[0] + a[1] * b[1]) / (Math.hypot(...a) * Math.hypot(...b))))) / D2R;

/* ---------- drawing helpers (as in chemistry-12-10.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; name?: string; free?: boolean };
/** Every line a label must keep clear of (bonds, outlines, arrows, lobes), by sketch, with its name. */
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="4 3"' : ''}/>`);
  if (!o.free) keep(s, pts, o.name);
}
/** A filled arrowhead with its tip at b, pointing from a; returns the head's base. */
function head(s: Sketch, a: P, b: P, col: string, HL = 8, HW = 3.8): P {
  const u = unit(sub(b, a)), base = sub(b, mul(u, HL));
  s.add(`<path d="M${r1(b[0])} ${r1(b[1])} L${r1(base[0] - u[1] * HW)} ${r1(base[1] + u[0] * HW)} L${r1(base[0] + u[1] * HW)} ${r1(base[1] - u[0] * HW)} Z" fill="${col}"/>`);
  return base;
}
function arrow(s: Sketch, a: P, b: P, o: Stroke = {}) {
  const col = o.color ?? C.ink, base = head(s, a, b, col);
  s.add(`<path d="M${r1(a[0])} ${r1(a[1])} L${r1(base[0])} ${r1(base[1])}" fill="none" stroke="${col}" stroke-width="${o.w ?? 1.6}" stroke-linecap="round"/>`);
  keep(s, [a, b], o.name);
}
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
const boxToLine = (r: Rect, pts: P[]) => {
  let gap = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
    for (let k = 0; k <= n; k++) gap = Math.min(gap, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  return gap;
};
function clearance(s: Sketch): { gap: number; what: string } {
  let gap = Infinity, what = '';
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  for (const { pts } of LINES.get(s) ?? []) for (const [name, r] of boxes) { const d = boxToLine(r, pts); if (d < gap) { gap = d; what = name; } }
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
const hasLabel = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const labelsNamed = (s: Sketch, t: string) => s.labels.filter((l) => l.text === t);
/** How many marigold strokes the drawing has. */
const mariCount = (s: Sketch) => (s.svg().match(new RegExp(`<(path|circle|line|ellipse) [^>]*stroke="${C.mari}"`, 'g')) ?? []).length;

/** A line of STIX on the drawing, from its baseline, its box at its true width (subscripts counted). */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size) * (o.bold ? 1.05 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  return rect;
}
/** An atom or group centred on p; its box is what bonds stop short of. */
function atom(s: Sketch, p: P, html: string, o: { size?: number; color?: string; bold?: boolean } = {}): Rect {
  const size = o.size ?? 15, w = widthOf(html, size) * (o.bold ? 1.05 : 1);
  const rect: Rect = [p[0] - w / 2, p[1] - size * 0.4, p[0] + w / 2, p[1] + size * (html.includes('<sub>') ? 0.62 : 0.4)];
  s.labels.push({ text: plain(html), rect });
  s.text(p[0], p[1] + size * 0.36, html, { size, color: o.color ?? C.text, semibold: o.bold });
  return rect;
}

/* ---------- bonds ---------- */
function exit(r: Rect | null, p: P, u: P, g: number): number {
  if (!r) return 0;
  for (let t = 0; t < 200; t += 0.25) { const q: P = [p[0] + u[0] * t, p[1] + u[1] * t]; if (q[0] < r[0] - g || q[0] > r[2] + g || q[1] < r[1] - g || q[1] > r[3] + g) return t; }
  return 200;
}
/** The two ends of a bond between two atoms, each stopped clear of its symbol. */
function ends(A: P, ra: Rect | null, B: P, rb: Rect | null, g = LABEL_GAP + 0.5): [P, P] {
  const u = unit(sub(B, A));
  const ta = exit(ra, A, u, g), tb = exit(rb, B, [-u[0], -u[1]], g);
  return [add(A, mul(u, ta)), sub(B, mul(u, tb))];
}
type BondStyle = 'line' | 'wedge' | 'hash';
/** A bond of order 1 or 2 in one of three styles; a double wedge (or hash) carries a thin second line beside it. */
function bond(s: Sketch, A: P, ra: Rect | null, B: P, rb: Rect | null, o: Stroke & { order?: number; style?: BondStyle } = {}) {
  const order = o.order ?? 1, style = o.style ?? 'line', col = o.color ?? C.ink;
  const [p, q] = ends(A, ra, B, rb, LABEL_GAP + (order === 2 || style !== 'line' ? 2.5 : 0.5)), n = perp(unit(sub(q, p)));
  if (style === 'wedge') {
    const c1 = add(q, mul(n, 3.8)), c2 = sub(q, mul(n, 3.8));
    s.add(`<path d="M${r1(p[0])} ${r1(p[1])} L${r1(c1[0])} ${r1(c1[1])} L${r1(c2[0])} ${r1(c2[1])} Z" fill="${col}" stroke="${col}" stroke-width="1" stroke-linejoin="round"/>`);
    keep(s, [p, c1], `${o.name}:w1`); keep(s, [p, c2], `${o.name}:w2`); keep(s, [p, q], o.name);
  } else if (style === 'hash') {
    const k = 6;
    for (let i = 1; i <= k; i++) {
      const c = add(p, mul(sub(q, p), i / k)), w = 0.7 + (3.1 * i) / k;
      s.add(`<line x1="${r1(c[0] + n[0] * w)}" y1="${r1(c[1] + n[1] * w)}" x2="${r1(c[0] - n[0] * w)}" y2="${r1(c[1] - n[1] * w)}" stroke="${col}" stroke-width="1.4" stroke-linecap="round"/>`);
    }
    keep(s, [add(q, mul(n, 3.8)), sub(q, mul(n, 3.8))], `${o.name}:h`); keep(s, [p, q], o.name);
  } else if (order === 1) {
    path(s, [p, q], { color: col, w: o.w ?? 1.8, name: o.name });
  }
  if (order === 2) {
    // the second line: beside a wedge or hash, or as the other half of a plain double bond
    const off = style === 'line' ? 2.4 : 6.2, sh = style === 'line' ? 0 : 4;
    if (style === 'line') path(s, [add(p, mul(n, off)), add(q, mul(n, off))], { color: col, w: o.w ?? 1.6, name: `${o.name}:2a` });
    const a = add(add(p, mul(n, -off)), mul(unit(sub(q, p)), sh)), b = add(q, mul(n, -off));
    path(s, [a, b], { color: col, w: o.w ?? 1.6, name: `${o.name}:2b` });
  }
}

/* ---------- 3D shapes, projected ---------- */
/** Turned az° about the vertical axis, then tipped el° about the horizontal one (x right, y up, z toward the reader). */
function rot(v: V3, az: number, el: number): V3 {
  const a = az * D2R, e = el * D2R, x1 = v[0] * Math.cos(a) + v[2] * Math.sin(a), z1 = -v[0] * Math.sin(a) + v[2] * Math.cos(a);
  return [x1, v[1] * Math.cos(e) - z1 * Math.sin(e), v[1] * Math.sin(e) + z1 * Math.cos(e)];
}
type Lig = { el: string; d: V3; order?: number; L?: number };
type Shape = { centre: string; V: number; charge?: number; ligs: Lig[]; lps: V3[]; L: number; az: number; el: number; c: P; depth?: number; lpR?: number };
type DrawnShape = { c: P; ends: { el: string; p: P; style: BondStyle; z: number; order: number; L: number }[]; lobes: { c: P; u: P }[]; rects: Rect[] };
const SHAPES = new WeakMap<Sketch, DrawnShape[]>();
const styleOf = (z: number, depth: number): BondStyle => (z > depth ? 'wedge' : z < -depth ? 'hash' : 'line');
/** A lone pair: an outlined lobe along its projected direction, "lp" inside, as the book draws it. */
const LOBE = { rx: 14, ry: 10 };
function lobePts(c: P, u: P): P[] {
  const n = perp(u);
  return Array.from({ length: 49 }, (_, i) => { const t = (2 * Math.PI * i) / 48; return add(c, add(mul(u, LOBE.rx * Math.cos(t)), mul(n, LOBE.ry * Math.sin(t)))); });
}
function lobe(s: Sketch, c: P, u: P, name: string) {
  path(s, lobePts(c, u), { color: C.mari, w: 1.5, name });
  s.text(c[0], c[1] + 3.8, 'lp', { size: 11, color: C.amber });
}
function drawShape(s: Sketch, m: Shape, o: { hiLigs?: number[]; tagLp?: boolean; size?: number } = {}): DrawnShape {
  const size = o.size ?? 15, depth = m.depth ?? 0.45, c = m.c;
  const out: DrawnShape = { c, ends: [], lobes: [], rects: [] };
  const rc = atom(s, c, m.centre, { size: size + 2, bold: true });
  out.rects.push(rc);
  m.ligs.forEach((g, i) => {
    const r = rot(norm3(g.d), m.az, m.el), L = g.L ?? m.L, p = add(c, mul(unit([r[0], -r[1]]), L));
    const rl = atom(s, p, g.el, { size });
    out.rects.push(rl);
    const style = styleOf(r[2], depth), hi = (o.hiLigs ?? []).includes(i);
    bond(s, c, rc, p, rl, { order: g.order ?? 1, style, name: `lig${i}`, color: hi ? C.mari : C.ink, w: hi ? 2.4 : undefined });
    out.ends.push({ el: g.el, p, style, z: r[2], order: g.order ?? 1, L });
  });
  m.lps.forEach((d, i) => {
    const r = rot(norm3(d), m.az, m.el), u = unit([r[0], -r[1]]), lc = add(c, mul(u, m.lpR ?? 31));
    lobe(s, lc, u, `lobe${i}`);
    out.lobes.push({ c: lc, u });
  });
  SHAPES.set(s, [...(SHAPES.get(s) ?? []), out]);
  return out;
}
const HYB: Record<number, string> = { 2: 'sp', 3: 'sp2', 4: 'sp3', 5: 'sp3d', 6: 'sp3d2', 7: 'sp3d3' };
/** The VSEPR count: lone pairs = (V − electrons the central atom puts in bonds − charge)/2. */
const lpCount = (m: Shape) => (m.V - m.ligs.reduce((t, g) => t + (g.order ?? 1), 0) - (m.charge ?? 0)) / 2;
/** Distinct angles between the bonded directions, to 0.01°. */
const ligAngles = (m: Shape) => [...new Set(m.ligs.flatMap((a, i) => m.ligs.slice(i + 1).map((b) => +ang3(a.d, b.d).toFixed(2))))].sort((a, b) => a - b);
function shapeChecks(name: string, m: Shape, s: Sketch, want: { lp: number; hyb: string; angles: number[] }): Check[] {
  const d = SHAPES.get(s)!.find((x) => close(x.c[0], m.c[0]) && close(x.c[1], m.c[1]))!, lp = lpCount(m), dom = m.ligs.length + lp;
  const out: Check[] = [];
  out.push([`${name}: ${m.centre} has ${m.V} valence electrons; ${m.ligs.length} bonds use ${m.ligs.reduce((t, g) => t + (g.order ?? 1), 0)}${m.charge ? `, charge ${sgn(m.charge)}` : ''}, leaving ${lp} lone pair${lp === 1 ? '' : 's'}: ${dom} domains, ${HYB[dom]}; drawn ${d.ends.length} bonds and ${d.lobes.length} lobe${d.lobes.length === 1 ? '' : 's'}`, Number.isInteger(lp) && lp === want.lp && HYB[dom] === want.hyb && d.ends.length === m.ligs.length && d.lobes.length === lp && m.lps.length === lp]);
  out.push([`${name}: the angles between bonds, from the 3D directions, are ${ligAngles(m).map((a) => `${fmt(a, 2)}°`).join(', ')} (ideal ${want.angles.join('°, ')}°)`, JSON.stringify(ligAngles(m)) === JSON.stringify(want.angles)]);
  // the drawing is the projection, read back: each bond along its projected direction, drawn at its full length (the wedge-and-hash convention)
  const proj = m.ligs.every((g, i) => { const r = rot(norm3(g.d), m.az, m.el), L = g.L ?? m.L, e = d.ends[i]; return Math.hypot(r[0], r[1]) > 0.2 && angle2(sub(e.p, m.c), [r[0], -r[1]]) < 1e-3 && close(len(e.p, m.c), L, 1e-9) && e.style === styleOf(r[2], m.depth ?? 0.45); });
  const dirs2 = [...d.ends.map((e) => sub(e.p, m.c)), ...d.lobes.map((l) => sub(l.c, m.c))];
  const minSep = Math.min(...dirs2.flatMap((a, i) => dirs2.slice(i + 1).map((b) => angle2(a, b))));
  out.push([`${name}: every bond and lobe is drawn along its 3D direction turned ${m.az}° and tipped ${m.el}°, toward-the-reader bonds as wedges (${d.ends.filter((e) => e.style === 'wedge').length}), away as hashes (${d.ends.filter((e) => e.style === 'hash').length}); no two drawn directions closer than ${fmt(minSep, 1)}°`, proj && minSep >= 25]);
  if (lp) {
    const dirs = m.lps.map((v) => { const r = rot(norm3(v), m.az, m.el); return unit([r[0], -r[1]]); });
    const ok = d.lobes.every((l, i) => angle2(sub(l.c, m.c), dirs[i]) < 1e-3);
    // VSEPR: the lone pairs take the directions left after the bonds, at least 90° from every bond
    const minLB = Math.min(...m.lps.flatMap((v) => m.ligs.map((g) => ang3(v, g.d))));
    const minLL = m.lps.length > 1 ? Math.min(...m.lps.flatMap((v, i) => m.lps.slice(i + 1).map((w) => ang3(v, w)))) : 180;
    out.push([`${name}: each lobe points along its lone pair's projected direction; lone pairs at least ${fmt(minLB, 2)}° from every bond and ${fmt(minLL, 2)}° from each other`, ok && minLB >= 54.7 && minLL >= 90 - 1e-9]);
    // lobes clear of bonds, atoms and each other
    const lobeL = linesNamed(s, /^lobe/), bondL = (LINES.get(s) ?? []).filter((l) => !/^lobe/.test(l.name));
    let g = Infinity;
    lobeL.forEach((l) => l.pts.forEach((p) => bondL.forEach((b) => b.pts.slice(1).forEach((q, k) => { const a = b.pts[k], n = Math.max(1, Math.ceil(len(a, q))); for (let j = 0; j <= n; j++) g = Math.min(g, len(p, add(a, mul(sub(q, a), j / n)))); }))));
    const rg = Math.min(...lobeL.flatMap((l) => s.labels.map((r) => boxToLine(r.rect, l.pts))));
    const apart = d.lobes.every((a, i) => d.lobes.slice(i + 1).every((b) => len(a.c, b.c) > 2 * LOBE.ry + 3));
    out.push([`${name}: every lobe stands clear of every bond (${fmt(g, 1)} px), every symbol (${fmt(rg, 1)} px) and every other lobe`, g >= 3 && rg >= 3 && apart]);
  }
  return out;
}
/** Book summary lines such as "sp<sup>3</sup>d, 3 bp + 2 lp": the hybrid and the counts read from the shape. */
const hybHtml = (h: string) => h.replace(/sp(\d)?(d)?(\d)?/, (_, a, d, b) => `sp${a ? `<sup>${a}</sup>` : ''}${d ?? ''}${b ? `<sup>${b}</sup>` : ''}`);
const counts = (m: Shape) => `${m.ligs.length} bp + ${lpCount(m)} lp`;

/* ---------- formulas ---------- */
type Tally = Record<string, number>;
const sumT = (...t: Tally[]) => { const o: Tally = {}; t.forEach((m) => Object.entries(m).forEach(([k, v]) => { o[k] = (o[k] ?? 0) + v; })); return o; };
const times = (t: Tally, n: number) => { const o: Tally = {}; Object.entries(t).forEach(([k, v]) => { o[k] = v * n; }); return o; };
const same = (a: Tally, b: Tally) => { const k = new Set([...Object.keys(a), ...Object.keys(b)]); return [...k].every((e) => (a[e] ?? 0) === (b[e] ?? 0)); };
/** The atoms in a formula as printed ("H<sub>3</sub>PO<sub>4</sub>", "(HPO<sub>3</sub>)<sub>3</sub>"); charges skipped. */
function count(html: string): Tally {
  const t = html.replace(/<sup>[^<]*<\/sup>/g, '').replace(/<[^>]+>/g, '').replace(/[₀-₉]/g, (c) => String(c.charCodeAt(0) - 0x2080));
  let i = 0;
  const group = (): Tally => {
    let out: Tally = {};
    while (i < t.length && t[i] !== ')') {
      let part: Tally;
      if (t[i] === '(') { i++; part = group(); i++; } else if (/[A-Z]/.test(t[i])) {
        let sym = t[i++];
        if (i < t.length && /[a-z]/.test(t[i])) sym += t[i++];
        part = { [sym]: 1 };
      } else { i++; continue; }
      let n = '';
      while (i < t.length && /\d/.test(t[i])) n += t[i++];
      out = sumT(out, times(part, n ? +n : 1));
    }
    return out;
  };
  return group();
}
/** The charge printed as a superscript: "<sup>2+</sup>" → 2, "<sup>−</sup>" → −1. */
const chargeOf = (html: string) => { const m = html.match(/<sup>(\d*)([+−-])<\/sup>/); return m ? (m[2] === '+' ? 1 : -1) * (m[1] ? +m[1] : 1) : 0; };
/** The oxidation state of element X in a species, with H +1 and O −2. */
const oxOf = (html: string, X: string) => { const t = count(html); return (chargeOf(html) - (t.H ?? 0) - -2 * (t.O ?? 0)) / t[X]; };

/* ===================================================================== */
/* Figure 1 · boiling points of the hydrides (Addendum A, p. 552)         */
/* ===================================================================== */
const CAPA1 = 'Boiling points of the hydrides of Groups 15, 16 and 17. In each group the second-period member (highlighted) is hydrogen-bonded and boils far above the value the heavier members would predict; BiH<sub>3</sub>, H<sub>2</sub>Te and HI recover the normal upward trend.';
type HydCase = { chip: string; cap: string; title: string; els: string[]; bp: number[]; hiLab: string; table: string; dy: number };
/** The book's tables: p. 551 (EH₃), p. 564 (H₂E), p. 571 (HX); p. 552 plots the same values (read back off its paths to 0.01 K). */
const CASESA1: HydCase[] = [
  { chip: 'Group 15', cap: CAPA1, title: 'Group 15: EH<sub>3</sub>', els: ['N', 'P', 'As', 'Sb', 'Bi'], bp: [238.5, 185.5, 210.6, 254.6, 290], hiLab: 'NH<sub>3</sub> (H-bonded)', table: 'p. 551', dy: -13 },
  { chip: 'Group 16', cap: CAPA1, title: 'Group 16: H<sub>2</sub>E', els: ['O', 'S', 'Se', 'Te'], bp: [373, 213, 232, 269], hiLab: 'H<sub>2</sub>O (H-bonded)', table: 'p. 564', dy: 4 },
  { chip: 'Group 17', cap: CAPA1, title: 'Group 17: HX', els: ['F', 'Cl', 'Br', 'I'], bp: [293, 189, 206, 238], hiLab: 'HF (H-bonded)', table: 'p. 571', dy: -13 },
];
const GA1 = { ox: 56, x1: W - 16, top: 66, oy: 236, lo: 150, hi: 400, step: 50 };
const yA1 = (v: number) => GA1.oy - ((GA1.oy - GA1.top) * (v - GA1.lo)) / (GA1.hi - GA1.lo);
const xA1 = (c: HydCase, i: number) => GA1.ox + ((GA1.x1 - GA1.ox) * (i + 0.5)) / c.els.length;
const PTS = new WeakMap<Sketch, P[]>();
const figA1: Diagram = {
  id: 'c12-11-A-d1',
  topic: 24,
  name: 'Boiling points of the hydrides',
  cases: CASESA1,
  draw(c: HydCase) {
    const s = new Sketch(W, 278);
    lab(s, W / 2, 22, c.title, { size: 14 });
    lab(s, 8, 46, 'boiling point / K', { anchor: 'start', size: 11.5, color: C.slate });
    for (let v = GA1.lo; v <= GA1.hi; v += GA1.step) {
      path(s, [[GA1.ox, yA1(v)], [GA1.x1, yA1(v)]], { color: C.grey, w: 0.8, free: true });
      lab(s, GA1.ox - 7, yA1(v) + 4, String(v), { anchor: 'end', size: 11, color: C.slate });
    }
    path(s, [[GA1.ox, GA1.top - 6], [GA1.ox, GA1.oy], [GA1.x1, GA1.oy]], { color: C.slate, w: 1.2, name: 'axes' });
    const pts = c.els.map((_, i): P => [xA1(c, i), yA1(c.bp[i])]);
    path(s, pts, { w: 1.7, name: 'data' });
    pts.forEach((p) => s.dot(p[0], p[1], 3.4));
    s.add(`<circle cx="${r1(pts[0][0])}" cy="${r1(pts[0][1])}" r="7.5" fill="none" stroke="${C.mari}" stroke-width="2"/>`);
    keep(s, Array.from({ length: 33 }, (_, k): P => [pts[0][0] + 7.5 * Math.cos((2 * Math.PI * k) / 32), pts[0][1] + 7.5 * Math.sin((2 * Math.PI * k) / 32)]), 'ring');
    lab(s, pts[0][0] + 12, pts[0][1] + c.dy, c.hiLab, { anchor: 'start', size: 12, color: C.amber });
    c.els.forEach((el, i) => lab(s, xA1(c, i), GA1.oy + 19, el, { size: 13 }));
    PTS.set(s, pts);
    return s;
  },
  check(c: HydCase) {
    const s = figA1.draw(c), pts = PTS.get(s)!, read = pts.map((p) => GA1.lo + ((GA1.oy - p[1]) * (GA1.hi - GA1.lo)) / (GA1.oy - GA1.top));
    const [first, ...rest] = c.bp, rises = rest.every((v, i) => i === 0 || v > rest[i - 1]);
    // what the heavier members predict for the second-period member: their trend run back one step
    const predict = rest[0] - (rest[1] - rest[0]);
    return [
      [`Each point read back off the drawing stands at the book's value (${c.table}): ${c.els.map((e, i) => `${e} ${fmt(read[i], 2)} K`).join(', ')}`, read.every((v, i) => close(v, c.bp[i], 1e-9))],
      [`From the third-period member down the boiling point rises (${rest.join(' < ')} K): the heavier members' normal upward trend, recovered by the last (${c.els[c.els.length - 1]})`, rises],
      [`The second-period member boils far above the trend: run back from ${c.els[1]} and ${c.els[2]} it would be ${fmt(predict, 1)} K, but it is ${first} K (${fmt(first - predict, 1)} K higher, hydrogen bonding)`, first - predict > 50],
      ...(c.chip === 'Group 15' ? [[`The text's "NH₃ boils 53 K above PH₃": 238.5 − 185.5 = ${fmt(first - rest[0], 1)} K; BiH₃ ${rest[3]} K > SbH₃ ${rest[2]} K`, close(first - rest[0], 53) && rest[3] > rest[2]] as Check] : []),
      ...(c.chip === 'Group 16' ? [[`The order printed in D's answers, H₂O ≫ H₂Te > H₂Se > H₂S (373, 269, 232, 213 K), is these values`, first > c.bp[3] && c.bp[3] > c.bp[2] && c.bp[2] > c.bp[1]] as Check] : []),
      [`The axis runs ${GA1.lo}–${GA1.hi} K in steps of ${GA1.step}, as the book's, every point inside it`, c.bp.every((v) => v > GA1.lo && v < GA1.hi)],
      ['One highlight: the second-period point, ringed, with its label', mariCount(s) === 1 && hasLabel(s, plain(c.hiLab))],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 2 · the oxidation-state ladder of nitrogen (Addendum A, p. 554) */
/* ===================================================================== */
const CAPA2 = 'The oxidation-state ladder of nitrogen, with the product that nitric acid is reduced to in each familiar reaction. The metal reactions are worked out in Additional topic M.';
/** p. 554, each rung as printed: the species in its box and the note its arrow points to. */
const RUNGS: { ox: number; species: string[]; note?: string[] }[] = [
  { ox: 5, species: ['N<sub>2</sub>O<sub>5</sub>', 'HNO<sub>3</sub>'], note: ['HNO<sub>3</sub> itself: the oxidising acid'] },
  { ox: 4, species: ['NO<sub>2</sub>', 'N<sub>2</sub>O<sub>4</sub>'], note: ['NO<sub>2</sub>:  Cu or Zn + conc. HNO<sub>3</sub>;', 'C, S, P, I<sub>2</sub> + conc. HNO<sub>3</sub>'] },
  { ox: 3, species: ['N<sub>2</sub>O<sub>3</sub>', 'HNO<sub>2</sub>'] },
  { ox: 2, species: ['NO'], note: ['NO:  Cu + dilute HNO<sub>3</sub>;', 'Fe<sup>2+</sup> + NO<sub>3</sub><sup>−</sup> (brown-ring test)'] },
  { ox: 1, species: ['N<sub>2</sub>O'], note: ['N<sub>2</sub>O:  Zn + dilute HNO<sub>3</sub>'] },
  { ox: 0, species: ['N<sub>2</sub>'] },
  { ox: -1, species: [] },
  { ox: -2, species: [] },
  { ox: -3, species: ['NH<sub>3</sub>', 'NH<sub>4</sub><sup>+</sup>'], note: ['NH<sub>4</sub>NO<sub>3</sub>:  Zn + very dilute HNO<sub>3</sub>'] },
];
/** The two notes the book sets beside the empty rungs, here under the ladder, line breaks ours. */
const NOTESA2 = [
  'Dilute acid and an active metal push the reduction',
  'product lower; conc. HNO<sub>3</sub> gives NO<sub>2</sub> with Cu, Zn,',
  'Ag and Pb.',
  'Conc. HNO<sub>3</sub> passivates Al and Cr (oxide film);',
  'Au and Pt are not attacked by HNO<sub>3</sub> alone.',
];
/** The reactions behind the notes (Addendum B and the main text), balanced: reactants, products, electrons N gains. */
const RXNA2: { name: string; left: [number, string][]; right: [number, string][]; red: [number, number, string]; give: number }[] = [
  { name: 'Cu + conc. HNO₃', left: [[1, 'Cu'], [4, 'HNO<sub>3</sub>']], right: [[1, 'Cu(NO<sub>3</sub>)<sub>2</sub>'], [2, 'NO<sub>2</sub>'], [2, 'H<sub>2</sub>O']], red: [2, 1, 'NO<sub>2</sub>'], give: 2 },
  { name: 'Zn + conc. HNO₃', left: [[1, 'Zn'], [4, 'HNO<sub>3</sub>']], right: [[1, 'Zn(NO<sub>3</sub>)<sub>2</sub>'], [2, 'NO<sub>2</sub>'], [2, 'H<sub>2</sub>O']], red: [2, 1, 'NO<sub>2</sub>'], give: 2 },
  { name: 'Cu + dilute HNO₃', left: [[3, 'Cu'], [8, 'HNO<sub>3</sub>']], right: [[3, 'Cu(NO<sub>3</sub>)<sub>2</sub>'], [2, 'NO'], [4, 'H<sub>2</sub>O']], red: [2, 1, 'NO'], give: 6 },
  { name: 'brown-ring test', left: [[1, 'NO<sub>3</sub><sup>−</sup>'], [3, 'Fe<sup>2+</sup>'], [4, 'H<sup>+</sup>']], right: [[1, 'NO'], [3, 'Fe<sup>3+</sup>'], [2, 'H<sub>2</sub>O']], red: [1, 1, 'NO'], give: 3 },
  { name: 'Zn + dilute HNO₃', left: [[4, 'Zn'], [10, 'HNO<sub>3</sub>']], right: [[4, 'Zn(NO<sub>3</sub>)<sub>2</sub>'], [1, 'N<sub>2</sub>O'], [5, 'H<sub>2</sub>O']], red: [1, 2, 'N<sub>2</sub>O'], give: 8 },
  { name: 'Zn + very dilute HNO₃', left: [[4, 'Zn'], [10, 'HNO<sub>3</sub>']], right: [[4, 'Zn(NO<sub>3</sub>)<sub>2</sub>'], [1, 'NH<sub>4</sub>NO<sub>3</sub>'], [3, 'H<sub>2</sub>O']], red: [1, 1, 'NH<sub>4</sub><sup>+</sup>'], give: 8 },
];
const GA2 = { y0: 52, dy: 33, axis: 34, bx: [42, 130] as [number, number], ax: [134, 150] as [number, number], nx: 156 };
const yA2 = (ox: number) => GA2.y0 + (5 - ox) * GA2.dy;
const BOXA2 = new WeakMap<Sketch, { ox: number; rect: Rect; text: string }[]>();
const figA2: Diagram = {
  id: 'c12-11-A-d2',
  topic: 24,
  name: 'Oxidation-state ladder of nitrogen',
  cases: [{ chip: 'Nitric acid products', cap: CAPA2 }],
  draw() {
    const s = new Sketch(W, 448), boxes: { ox: number; rect: Rect; text: string }[] = [];
    lab(s, 8, 22, 'N oxidation state', { anchor: 'start', size: 13, bold: true });
    path(s, [[GA2.axis, yA2(5) - 15], [GA2.axis, yA2(-3) + 15]], { color: C.slate, w: 1.3, name: 'axis' });
    RUNGS.forEach((g) => {
      const y = yA2(g.ox);
      path(s, [[GA2.axis - 4, y], [GA2.axis + 4, y]], { color: C.slate, w: 1.3, name: `tick${g.ox}` });
      lab(s, GA2.axis - 8, y + 4.5, sgn(g.ox), { anchor: 'end', size: 12.5, color: C.slate });
      if (!g.species.length) return;
      const rect: Rect = [GA2.bx[0], y - 11, GA2.bx[1], y + 11], text = g.species.join(',  ');
      s.add(`<rect x="${rect[0]}" y="${r1(rect[1])}" width="${rect[2] - rect[0]}" height="22" rx="4" fill="#fff" stroke="${C.ink}" stroke-width="1.2"/>`);
      s.tags.push({ name: plain(text), rect, from: null, to: null });
      s.text((rect[0] + rect[2]) / 2, y + 4.4, text, { size: 12.5 });
      boxes.push({ ox: g.ox, rect, text });
      if (!g.note) return;
      arrow(s, [GA2.ax[0], y], [GA2.ax[1], y], { color: C.mari, w: 1.8, name: `to${g.ox}` });
      const n = g.note.length;
      g.note.forEach((t, k) => lab(s, GA2.nx, y + 4 + (k - (n - 1) / 2) * 15, t, { anchor: 'start', size: 11.5 }));
    });
    NOTESA2.forEach((t, k) => lab(s, 8, yA2(-3) + 38 + k * 15 + (k >= 3 ? 6 : 0), t, { anchor: 'start', size: 11.5, color: C.slate }));
    BOXA2.set(s, boxes);
    return s;
  },
  check() {
    const s = figA2.draw(figA2.cases[0]), out: Check[] = [], boxes = BOXA2.get(s)!;
    const each = RUNGS.flatMap((g) => g.species.map((sp) => ({ sp, row: g.ox, ox: oxOf(sp, 'N') })));
    out.push([`Every species' oxidation state, recomputed with H +1 and O −2: ${each.map((e) => `${plain(e.sp)} ${sgn(e.ox)}`).join(', ')}; each sits on its own rung`, each.every((e) => e.ox === e.row)]);
    const rows = boxes.map((b) => ({ ox: b.ox, y: (b.rect[1] + b.rect[3]) / 2 }));
    out.push([`The rungs run from +5 at the top to −3 at the bottom, ${GA2.dy} px apart, with no box on −1 and −2 (nitrogen has no common species there)`, rows.every((r, i) => i === 0 || r.y > rows[i - 1].y) && rows.every((r) => close(r.y, yA2(r.ox))) && !boxes.some((b) => b.ox === -1 || b.ox === -2)]);
    for (const r of RXNA2) {
      const L = sumT(...r.left.map(([n, f]) => times(count(f), n))), R = sumT(...r.right.map(([n, f]) => times(count(f), n)));
      const qL = r.left.reduce((t, [n, f]) => t + n * chargeOf(f), 0), qR = r.right.reduce((t, [n, f]) => t + n * chargeOf(f), 0);
      const [k, nN, sp] = r.red, gain = k * nN * (5 - oxOf(sp, 'N'));
      const lose = r.left.reduce((t, [n, f]) => t + (f === 'Cu' || f === 'Zn' ? 2 * n : f === 'Fe<sup>2+</sup>' ? n : 0), 0);
      out.push([`${r.name}: ${r.left.map(([n, f]) => `${n > 1 ? n : ''}${plain(f)}`).join(' + ')} → ${r.right.map(([n, f]) => `${n > 1 ? n : ''}${plain(f)}`).join(' + ')} balances (atoms, and charge ${sgn(qL)} each side); N +5 → ${sgn(oxOf(sp, 'N'))} takes ${gain} e⁻, the reductant gives ${lose}`, same(L, R) && qL === qR && gain === lose && lose === r.give]);
    }
    const notes = RUNGS.filter((g) => g.note).map((g) => ({ row: g.ox, first: plain(g.note![0]).split(/[:\s]/)[0] }));
    const ox = (t: string) => (t === 'NH4NO3' ? oxOf('NH<sub>4</sub><sup>+</sup>', 'N') : oxOf(t.replace(/(\d)/g, '<sub>$1</sub>'), 'N'));
    out.push([`Each note names the product on its own rung: ${notes.map((n) => `${n.first} (N ${sgn(ox(n.first))}) at ${sgn(n.row)}`).join(', ')}; the lower the rung, the more electrons HNO₃ has taken`, notes.every((n) => ox(n.first) === n.row)]);
    out.push(['The notes as printed, and the two under the ladder', RUNGS.every((g) => (g.note ?? []).every((t) => hasLabel(s, plain(t)))) && NOTESA2.every((t) => hasLabel(s, plain(t)))]);
    out.push([`One highlight: the ${linesNamed(s, /^to/).length} arrows to nitric acid's products`, mariCount(s) === linesNamed(s, /^to/).length && linesNamed(s, /^to/).length === 5]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3 · phosphorus chlorides (Addendum C, p. 560)                   */
/* ===================================================================== */
const CAPC1 = 'Phosphorus chlorides. (a) Gas-phase PCl<sub>5</sub>: trigonal bipyramid, three equatorial bonds and two longer axial bonds. (b) Solid PCl<sub>5</sub> is ionic, [PCl<sub>4</sub>]<sup>+</sup>[PCl<sub>6</sub>]<sup>−</sup>. (c) PCl<sub>3</sub> is pyramidal with one lone pair.';
/** p. 560–561: equatorial P–Cl 202 pm (the book); axial 240 pm (NCERT; the book says only "longer"), to one scale. */
const PCL = { eq: 202, ax: 240, k: 0.3 };
const S120 = Math.sin(120 * D2R), C120 = Math.cos(120 * D2R);
const TBP = (ax: number, eq: number, lig = 'Cl'): Lig[] => [
  { el: lig, d: [0, 1, 0], L: ax }, { el: lig, d: [0, -1, 0], L: ax },
  { el: lig, d: [-1, 0, 0], L: eq }, { el: lig, d: [-C120, 0, S120], L: eq }, { el: lig, d: [-C120, 0, -S120], L: eq },
];
const OCTA = (lig: string): Lig[] => [[0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]].map((d) => ({ el: lig, d: d as V3 }));
/** Tetrahedral directions with one up (+y) and three below: one toward the reader, two behind left and right. */
const TH = Math.acos(-1 / 3), TETRA: V3[] = [[0, 1, 0], ...[90, 210, 330].map((a): V3 => [Math.sin(TH) * Math.cos(a * D2R), Math.cos(TH), Math.sin(TH) * Math.sin(a * D2R)])];
const pcl5g = (): Shape => ({ centre: 'P', V: 5, ligs: TBP(PCL.ax * PCL.k, PCL.eq * PCL.k), lps: [], L: 0, az: 0, el: 20, c: [164, 142] });
const pcl4 = (): Shape => ({ centre: 'P', V: 5, charge: 1, ligs: TETRA.map((d) => ({ el: 'Cl', d })), lps: [], L: 50, az: 0, el: 16, c: [84, 132], depth: 0.6 });
const pcl6 = (): Shape => ({ centre: 'P', V: 5, charge: -1, ligs: OCTA('Cl'), lps: [], L: 52, az: 25, el: 18, c: [246, 132] });
const pcl3 = (): Shape => ({ centre: 'P', V: 5, ligs: TETRA.slice(1).map((d) => ({ el: 'Cl', d })), lps: [TETRA[0]], L: 64, az: 0, el: 16, c: [170, 140], depth: 0.6, lpR: 38 });
const figC1: Diagram = {
  id: 'c12-11-C-d1',
  topic: 26,
  name: 'Phosphorus chlorides',
  cases: [
    { chip: '(a) Gas', cap: CAPC1, panel: 'a' },
    { chip: '(b) Solid', cap: CAPC1, panel: 'b' },
    { chip: '(c) Trichloride', cap: CAPC1, panel: 'c' },
  ],
  draw(c: { panel: string }) {
    const s = new Sketch(W, 300);
    if (c.panel === 'a') {
      lab(s, W / 2, 22, '(a) PCl<sub>5</sub> (gas)', { size: 14, bold: true });
      const m = pcl5g(), d = drawShape(s, m, { hiLigs: [0, 1] });
      lab(s, W / 2, 258, 'sp<sup>3</sup>d,  5 bp + 0 lp', { size: 13 });
      lab(s, W / 2, 278, 'Cl–P–Cl: 90° and 120°', { size: 13 });
      s.place([
        { t: 'axial (longer)', hi: true, p: mid(m.c, d.ends[1].p), at: [[W - 8, 196, 'end'], [W - 8, 204, 'end'], [W - 8, 188, 'end'], [W - 8, 212, 'end']] },
        { t: 'equatorial 202 pm', p: mid(m.c, d.ends[2].p), at: [[8, 182, 'start'], [8, 190, 'start'], [8, 198, 'start'], [8, 60, 'start'], [8, 52, 'start']] },
      ]);
      return s;
    }
    if (c.panel === 'b') {
      lab(s, W / 2, 22, '(b) PCl<sub>5</sub> (solid)', { size: 14, bold: true });
      const a = pcl4(), b = pcl6();
      drawShape(s, a);
      drawShape(s, b);
      // the labels under the two ions, as printed (the book draws no brackets: the labels carry the charges)
      const y1 = Math.max(...SHAPES.get(s)!.flatMap((d) => d.rects.map((r) => r[3]))) + 9;
      lab(s, a.c[0], y1 + 26, '[PCl<sub>4</sub>]<sup>+</sup>: sp<sup>3</sup>,', { size: 12.5 });
      lab(s, a.c[0], y1 + 44, 'tetrahedral', { size: 12.5 });
      lab(s, b.c[0], y1 + 26, '[PCl<sub>6</sub>]<sup>−</sup>: sp<sup>3</sup>d<sup>2</sup>,', { size: 12.5 });
      lab(s, b.c[0], y1 + 44, 'octahedral', { size: 12.5 });
      return s;
    }
    lab(s, W / 2, 22, '(c) PCl<sub>3</sub>', { size: 14, bold: true });
    drawShape(s, pcl3());
    lab(s, W / 2, 252, 'sp<sup>3</sup>,  3 bp + 1 lp', { size: 13 });
    lab(s, W / 2, 272, 'pyramidal', { size: 13 });
    return s;
  },
  check(c: { panel: string }) {
    const s = figC1.draw(c), out: Check[] = [];
    if (c.panel === 'a') {
      const m = pcl5g(), d = SHAPES.get(s)![0];
      out.push(...shapeChecks('PCl₅ (gas)', m, s, { lp: 0, hyb: 'sp3d', angles: [90, 120, 180] }));
      const ax = [0, 1].map((i) => m.ligs[i].d), eq = [2, 3, 4].map((i) => m.ligs[i].d);
      const at90 = (v: V3) => m.ligs.filter((g) => close(ang3(v, g.d), 90, 1e-6)).length, at120 = (v: V3) => m.ligs.filter((g) => close(ang3(v, g.d), 120, 1e-6)).length;
      out.push([`The book's reason: each axial bond has ${at90(ax[0])} neighbours at 90°; each equatorial bond has ${at90(eq[0])} at 90° and ${at120(eq[0])} at 120°, so the axial pairs are repelled more`, ax.every((v) => at90(v) === 3) && eq.every((v) => at90(v) === 2 && at120(v) === 2)]);
      out.push([`Drawn to one scale, ${PCL.k} px per pm: equatorial ${fmt(d.ends[2].L / PCL.k, 3)} pm (the book's 202), axial ${fmt(d.ends[0].L / PCL.k, 3)} pm (NCERT's 240): axial longer, as printed`, close(d.ends[2].L / PCL.k, PCL.eq, 1e-9) && close(d.ends[0].L / PCL.k, PCL.ax, 1e-9) && d.ends[0].L > d.ends[2].L]);
      out.push([`Three equatorial bonds (one in the page, one wedge, one hash) and two axial, up and down; "${counts(m)}" as printed`, d.ends.slice(2).map((e) => e.style).sort().join() === 'hash,line,wedge' && counts(m) === '5 bp + 0 lp' && hasLabel(s, `sp3d,  ${counts(m)}`)]);
      out.push(['One highlight: the two axial bonds and their tag', mariCount(s) === 3 && s.tags.some((t) => t.name === 'axial (longer)')]);
    } else if (c.panel === 'b') {
      const a = pcl4(), b = pcl6();
      out.push(...shapeChecks('[PCl₄]⁺', a, s, { lp: 0, hyb: 'sp3', angles: [109.47] }), ...shapeChecks('[PCl₆]⁻', b, s, { lp: 0, hyb: 'sp3d2', angles: [90, 180] }));
      const atoms = sumT(count('PCl<sub>4</sub>'), count('PCl<sub>6</sub>'));
      out.push([`[PCl₄]⁺[PCl₆]⁻ holds P${atoms.P} Cl${atoms.Cl} = 2 PCl₅, charges +1 − 1 = 0: an ionic solid from two formula units`, same(atoms, times(count('PCl<sub>5</sub>'), 2)) && (a.charge ?? 0) + (b.charge ?? 0) === 0]);
      const pOx = (n: number, q: number) => q + n;
      out.push([`P is +5 in both ions, as in PCl₅ (Cl −1): [PCl₄]⁺ x − 4 = +1, x = ${sgn(pOx(4, 1))}; [PCl₆]⁻ x − 6 = −1, x = ${sgn(pOx(6, -1))}`, pOx(4, 1) === 5 && pOx(6, -1) === 5]);
      out.push(['The labels as printed, under the two ions: [PCl₄]⁺: sp³, tetrahedral; [PCl₆]⁻: sp³d², octahedral', ['[PCl4]+: sp3,', 'tetrahedral', '[PCl6]−: sp3d2,', 'octahedral'].every((t) => hasLabel(s, t))]);
    } else {
      const m = pcl3();
      out.push(...shapeChecks('PCl₃', m, s, { lp: 1, hyb: 'sp3', angles: [109.47] }));
      out.push([`"${counts(m)}", pyramidal, as printed: three bonds below, the lone pair above`, counts(m) === '3 bp + 1 lp' && hasLabel(s, `sp3,  ${counts(m)}`) && hasLabel(s, 'pyramidal') && SHAPES.get(s)![0].lobes[0].c[1] < m.c[1]]);
      out.push(['One highlight: the lone pair', mariCount(s) === 1]);
    }
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 4 · the three monophosphorus oxoacids (Addendum C, p. 561)      */
/* ===================================================================== */
const CAPC2 = 'The three monophosphorus oxoacids. The P–H bonds (highlighted) are not ionisable and play no part in basicity; only the O–H hydrogens ionise.';
type Acid = { formula: string; name: string; ox: number; left: 'H' | 'OH'; right: 'H' | 'OH'; basic: string; inv: string };
/** p. 561, as drawn: P=O up, the two side groups lower left and lower right, an OH below. */
const ACIDS: Acid[] = [
  { formula: 'H<sub>3</sub>PO<sub>2</sub>', name: 'hypophosphorous', ox: 1, left: 'H', right: 'H', basic: 'monobasic', inv: '1 P–OH, 2 P–H' },
  { formula: 'H<sub>3</sub>PO<sub>3</sub>', name: 'phosphorous', ox: 3, left: 'H', right: 'OH', basic: 'dibasic', inv: '2 P–OH, 1 P–H' },
  { formula: 'H<sub>3</sub>PO<sub>4</sub>', name: 'phosphoric', ox: 5, left: 'OH', right: 'OH', basic: 'tribasic', inv: '3 P–OH, 0 P–H' },
];
const GC2 = { xs: [58, 170, 282], yP: 128, up: 40, side: 42, sideA: 32, down: 42 };
type Grp = { kind: 'O' | 'H' | 'OH'; order: number };
const groupsOf = (a: Acid): Grp[] => [{ kind: 'O', order: 2 }, { kind: a.left, order: 1 }, { kind: a.right, order: 1 }, { kind: 'OH', order: 1 }];
const figC2: Diagram = {
  id: 'c12-11-C-d2',
  topic: 26,
  name: 'The three phosphorus oxoacids',
  cases: [{ chip: 'Three acids', cap: CAPC2 }],
  draw() {
    const s = new Sketch(W, 322), G = GC2;
    ACIDS.forEach((a, i) => {
      const x = G.xs[i], P0: P = [x, G.yP];
      lab(s, x, 22, a.formula, { size: 14, bold: true });
      lab(s, x, 42, a.name, { size: 11, color: C.slate });
      lab(s, x, 56, `P = ${sgn(a.ox)}`, { size: 11, color: C.slate });
      const rP = atom(s, P0, 'P', { size: 17, bold: true });
      const spots: P[] = [[x, G.yP - G.up], add(P0, [-G.side * Math.cos(G.sideA * D2R), G.side * Math.sin(G.sideA * D2R)]), add(P0, [G.side * Math.cos(G.sideA * D2R), G.side * Math.sin(G.sideA * D2R)]), [x, G.yP + G.down]];
      groupsOf(a).forEach((g, k) => {
        // an OH is written so its O sits where the bond ends: "HO" on the left, "OH" elsewhere
        const html = g.kind === 'OH' && k === 1 ? 'HO' : g.kind, shift = g.kind !== 'OH' ? 0 : k === 1 ? -5.5 : 5.5;
        const hi = g.kind === 'H', r = atom(s, add(spots[k], [shift, 0]), html, { size: 15, color: hi ? C.amber : C.text });
        bond(s, P0, rP, spots[k], r, { order: g.order, name: `a${i}:${k}:${g.kind}`, color: hi ? C.mari : C.ink, w: hi ? 2.3 : undefined });
      });
      lab(s, x, 208, a.basic, { size: 13, bold: true });
      lab(s, x, 225, a.inv, { size: 11, color: C.slate });
    });
    lab(s, 8, 258, 'highlighted = P–H (not ionisable);', { anchor: 'start', size: 12, color: C.amber });
    lab(s, 8, 275, 'H on O = ionisable P–OH;', { anchor: 'start', size: 12, color: C.slate });
    lab(s, 8, 298, 'on heating:  4H<sub>3</sub>PO<sub>3</sub> → 3H<sub>3</sub>PO<sub>4</sub> + PH<sub>3</sub>', { anchor: 'start', size: 12, color: C.slate });
    return s;
  },
  check() {
    const s = figC2.draw(figC2.cases[0]), out: Check[] = [];
    ACIDS.forEach((a, i) => {
      const g = groupsOf(a), nOH = g.filter((x) => x.kind === 'OH').length, nH = g.filter((x) => x.kind === 'H').length, nPO = g.filter((x) => x.kind === 'O').length;
      const atoms = sumT({ P: 1 }, ...g.map((x) => count(x.kind)));
      const bondOx = 2 * nPO + nOH - nH;
      const drawnH = linesNamed(s, new RegExp(`^a${i}:\\d:H$`)).length, drawnOH = linesNamed(s, new RegExp(`^a${i}:\\d:OH$`)).length;
      out.push([`${plain(a.formula)}: the drawing holds ${Object.entries(atoms).map(([k, v]) => `${k}${v}`).join(' ')} (${nPO} P=O, ${nOH} P–OH, ${nH} P–H; ${drawnOH} P–OH and ${drawnH} P–H bonds read back), four groups round P (tetrahedral)`, same(atoms, count(a.formula)) && nPO === 1 && g.length === 4 && drawnH === nH && drawnOH === nOH]);
      out.push([`${plain(a.formula)}: P is ${sgn(oxOf(a.formula, 'P'))} from the formula and ${sgn(bondOx)} bond by bond (P=O +2, P–OH +1 each, P–H −1 each), as printed`, oxOf(a.formula, 'P') === a.ox && bondOx === a.ox]);
      out.push([`${plain(a.formula)}: basicity = P–OH groups = ${nOH}, "${a.basic}", and "${a.inv}" as printed`, ['', 'monobasic', 'dibasic', 'tribasic'][nOH] === a.basic && a.inv === `${nOH} P–OH, ${nH} P–H` && hasLabel(s, a.inv) && hasLabel(s, a.basic)]);
    });
    const L = times(count('H<sub>3</sub>PO<sub>3</sub>'), 4), R = sumT(times(count('H<sub>3</sub>PO<sub>4</sub>'), 3), count('PH<sub>3</sub>'));
    out.push([`On heating 4H₃PO₃ → 3H₃PO₄ + PH₃ balances (H12 P4 O12 each side); P +3 → +5 in three (6 e⁻ lost) and +3 → −3 in one (6 e⁻ gained): a disproportionation`, same(L, R) && 3 * (5 - 3) === 1 * (3 - -3) && oxOf('PH<sub>3</sub>', 'P') === -3]);
    out.push([`One highlight: the ${linesNamed(s, /:H$/).length} P–H bonds (the book's teal), nothing else marigold`, mariCount(s) === 3 && linesNamed(s, /:H$/).length === 3]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 5 · ozone as a resonance hybrid (Addendum D, p. 565)            */
/* ===================================================================== */
const CAPD1 = 'Ozone as a resonance hybrid. The two canonical forms are equivalent, so each O–O bond has bond order 1.5 and length 128 pm.';
/** The book's ∠OOO 117° and O–O 128 pm (pp. 564–565); drawn 0.3 px per pm. */
const O3 = { angle: 117, pm: 128, k: 0.36 };
type OAtom = { p: P; lp: number[]; q: number; qAt: number };
/** One canonical form: [left, centre, right]; `dbl` the side with the double bond. Lone-pair and charge directions in degrees (screen, 0 = right, 90 = down). */
function o3form(c: P, dbl: 'left' | 'right'): { atoms: OAtom[]; bonds: [number, number, number][] } {
  const b = O3.pm * O3.k, h = (O3.angle / 2) * D2R, L: P = [c[0] - b * Math.sin(h), c[1] + b * Math.cos(h)], R: P = [c[0] + b * Math.sin(h), c[1] + b * Math.cos(h)];
  const deg = (from: P, to: P) => (Math.atan2(to[1] - from[1], to[0] - from[0]) / D2R + 360) % 360;
  // a terminal O's lone pairs spread evenly round the side away from its bond: two at ±120°, three at 90° steps
  const lps = (p: P, n: number) => { const t = deg(p, c); return n === 2 ? [t + 120, t + 240] : [t + 90, t + 180, t + 270]; };
  // the charge at the outer corner, midway between two of its lone pairs (or, on the centre, between its lone pair and a bond)
  const dL = lps(L, dbl === 'left' ? 2 : 3), dR = lps(R, dbl === 'left' ? 3 : 2);
  return dbl === 'left'
    ? { atoms: [{ p: L, lp: dL, q: 0, qAt: 0 }, { p: c, lp: [270], q: 1, qAt: (270 + 360 + deg(c, R)) / 2 }, { p: R, lp: dR, q: -1, qAt: (dR[0] + dR[1]) / 2 }], bonds: [[0, 1, 2], [1, 2, 1]] }
    : { atoms: [{ p: L, lp: dL, q: -1, qAt: (dL[1] + dL[2]) / 2 }, { p: c, lp: [270], q: 1, qAt: (270 + deg(c, L)) / 2 }, { p: R, lp: dR, q: 0, qAt: 0 }], bonds: [[0, 1, 1], [1, 2, 2]] };
}
const DOTS = new WeakMap<Sketch, { atom: P; n: number }[]>();
function drawForm(s: Sketch, c: P, dbl: 'left' | 'right') {
  const f = o3form(c, dbl), rects = f.atoms.map((a) => atom(s, a.p, 'O', { size: 15 }));
  f.bonds.forEach(([i, j, o]) => bond(s, f.atoms[i].p, rects[i], f.atoms[j].p, rects[j], { order: o, name: `o3:${dbl}:${i}${j}` }));
  f.atoms.forEach((a) => {
    a.lp.forEach((deg) => {
      const u: P = [Math.cos(deg * D2R), Math.sin(deg * D2R)], m = add(a.p, mul(u, 12.5)), n = perp(u);
      s.dot(m[0] + n[0] * 2.8, m[1] + n[1] * 2.8, 1.7);
      s.dot(m[0] - n[0] * 2.8, m[1] - n[1] * 2.8, 1.7);
    });
    DOTS.set(s, [...(DOTS.get(s) ?? []), { atom: a.p, n: 2 * a.lp.length }]);
    if (a.q) {
      const at = add(a.p, mul([Math.cos(a.qAt * D2R), Math.sin(a.qAt * D2R)], 21));
      path(s, Array.from({ length: 33 }, (_, k): P => [at[0] + 6 * Math.cos((2 * Math.PI * k) / 32), at[1] + 6 * Math.sin((2 * Math.PI * k) / 32)]), { color: C.slate, w: 1.1, name: 'q', free: true });
      s.labels.push({ text: a.q > 0 ? '+' : '−', rect: [at[0] - 6, at[1] - 6, at[0] + 6, at[1] + 6] });
      s.text(at[0], at[1] + 3.8, a.q > 0 ? '+' : '−', { size: 12, color: C.text });
    }
  });
  return f;
}
const GD1 = { a: [78, 60] as P, b: [262, 60] as P, hy: [196, 200] as P };
const figD1: Diagram = {
  id: 'c12-11-D-d1',
  topic: 27,
  name: 'Ozone as a resonance hybrid',
  cases: [{ chip: 'Two forms, one hybrid', cap: CAPD1 }],
  draw() {
    const s = new Sketch(W, 300), G = GD1;
    drawForm(s, G.a, 'left');
    drawForm(s, G.b, 'right');
    lab(s, W / 2, G.a[1] + 26, '↔', { size: 20 });
    lab(s, W / 2, 132, 'two equivalent canonical forms', { size: 11.5, color: C.slate });
    lab(s, W / 2, 147, '(central O formally +, one terminal O formally −)', { size: 11.5, color: C.slate });
    // the hybrid: each O–O a full line and a dashed one, both marigold
    const c = G.hy, b = O3.pm * O3.k * 1.4, h = (O3.angle / 2) * D2R, L: P = [c[0] - b * Math.sin(h), c[1] + b * Math.cos(h)], R: P = [c[0] + b * Math.sin(h), c[1] + b * Math.cos(h)];
    const rc = atom(s, c, 'O'), rl = atom(s, L, 'O'), rr = atom(s, R, 'O');
    [[L, rl], [R, rr]].forEach(([p, r], k) => {
      const [a, e] = ends(c, rc, p as P, r as Rect, LABEL_GAP + 2.5), n = perp(unit(sub(e, a)));
      path(s, [add(a, mul(n, 2.4)), add(e, mul(n, 2.4))], { color: C.mari, w: 1.8, name: `hy${k}` });
      path(s, [sub(a, mul(n, 2.4)), sub(e, mul(n, 2.4))], { color: C.mari, w: 1.8, dash: true, name: `hyd${k}` });
    });
    // each 128 pm beside its own bond, out on the side away from the other
    [L, R].forEach((p) => { const m = mid(c, p), n = unit(perp(sub(p, c))), out = n[1] < 0 ? n : mul(n, -1), q = add(m, mul(out, 25)); lab(s, q[0], q[1] + 4, '128 pm', { size: 12, color: C.slate }); });
    lab(s, c[0], c[1] - 18, `${O3.angle}°`, { size: 12.5, color: C.slate });
    lab(s, 60, c[1] + 20, '=', { size: 22 });
    lab(s, c[0], 262, 'resonance hybrid:', { size: 12 });
    lab(s, c[0], 278, 'bond order 1.5 for each O–O', { size: 12 });
    return s;
  },
  check() {
    const s = figD1.draw(figD1.cases[0]), out: Check[] = [];
    const forms = [o3form(GD1.a, 'left'), o3form(GD1.b, 'right')];
    forms.forEach((f, k) => {
      const bondsOf = (i: number) => f.bonds.filter((b) => b[0] === i || b[1] === i).reduce((t, b) => t + b[2], 0);
      const fc = f.atoms.map((a, i) => 6 - 2 * a.lp.length - bondsOf(i));
      const octet = f.atoms.every((a, i) => 2 * a.lp.length + 2 * bondsOf(i) === 8);
      const e = f.bonds.reduce((t, b) => t + 2 * b[2], 0) + f.atoms.reduce((t, a) => t + 2 * a.lp.length, 0);
      out.push([`Form ${k + 1}: formal charges (6 − lone-pair electrons − bonds) ${fc.map(sgn).join(', ')} (as drawn: ${f.atoms.map((a) => sgn(a.q)).join(', ')}), sum 0; every O an octet; ${e} electrons = 3 × 6`, fc.every((q, i) => q === f.atoms[i].q) && fc.reduce((a, b) => a + b, 0) === 0 && octet && e === 18]);
    });
    const [A, B] = forms, mirror = A.atoms.every((a, i) => { const b = B.atoms[2 - i]; return a.q === b.q && a.lp.length === b.lp.length; }) && A.bonds[0][2] === B.bonds[1][2] && A.bonds[1][2] === B.bonds[0][2];
    out.push(['The two forms are mirror images (double bond, lone pairs and charges swapped end for end): equivalent, as the caption says', mirror]);
    const bo = [0, 1].map((side) => (A.bonds[side][2] + B.bonds[side][2]) / 2);
    out.push([`Averaged over the two forms each O–O has bond order (2 + 1)/2 = ${bo.join(' and ')}: 1.5 for each, as printed`, bo.every((x) => x === 1.5)]);
    const lp = (6 - 3 - 1) / 2;
    out.push([`Central O: 6 valence electrons, 3 in bonds, charge +1: (6 − 3 − 1)/2 = ${lp} lone pair; 2 bonding domains + 1 lone pair, sp², bent (117° < 120°, the lone pair pressing)`, lp === 1 && O3.angle < 120]);
    const [l0, l1] = [linesNamed(s, /^hy0$/)[0].pts, linesNamed(s, /^hy1$/)[0].pts];
    const dir0 = sub(l0[1], l0[0]), dir1 = sub(l1[1], l1[0]);
    out.push([`The hybrid drawn with its bonds ${fmt(angle2(dir0, dir1), 2)}° apart (the book's 117°) and equal (${fmt(len(l0[0], l0[1]), 2)} and ${fmt(len(l1[0], l1[1]), 2)} px), each labelled 128 pm`, close(angle2(dir0, dir1), O3.angle, 1e-6) && close(len(l0[0], l0[1]), len(l1[0], l1[1]), 1e-6) && labelsNamed(s, '128 pm').length === 2]);
    out.push(['Lone-pair dots as printed: 2 on the double-bonded O, 1 pair on the centre, 3 on the single-bonded O, in each form', (DOTS.get(s) ?? []).map((d) => d.n).join() === '4,2,6,6,2,4' && s.points.length === 24]);
    out.push(['One highlight: the hybrid\'s two O–O bonds, each a full and a dashed line', mariCount(s) === 4]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6 · sulphur oxoacids (Addendum D, p. 566)                       */
/* ===================================================================== */
const CAPD2 = 'Sulphur oxoacids with a feature beyond the plain sulphate unit: the S–O–S bridge of oleum and the O–O peroxo link of Caro’s acid and peroxodisulphuric acid.';
/** Each acid as the book draws it: a row of groups along one line; every S carries an =O above and below. */
type SAcid = { chip: string; title: string; formula: string; row: string[]; bridge: number[]; tag?: string; note: string; cap: string };
const SACIDS: SAcid[] = [
  { chip: 'Sulphuric acid', title: 'H<sub>2</sub>SO<sub>4</sub>', formula: 'H<sub>2</sub>SO<sub>4</sub>', row: ['HO', 'S', 'OH'], bridge: [], note: '2 S–OH,  2 S=O', cap: CAPD2 },
  { chip: 'Oleum', title: 'H<sub>2</sub>S<sub>2</sub>O<sub>7</sub> (oleum)', formula: 'H<sub>2</sub>S<sub>2</sub>O<sub>7</sub>', row: ['HO', 'S', 'O', 'S', 'OH'], bridge: [1, 2], note: 'S–O–S bridge;  4 S=O,  2 S–OH', cap: CAPD2 },
  { chip: 'Caro’s acid', title: 'H<sub>2</sub>SO<sub>5</sub> (Caro’s acid)', formula: 'H<sub>2</sub>SO<sub>5</sub>', row: ['HO', 'S', 'O', 'OH'], bridge: [2], tag: 'O–O', note: 'peroxo O–O;  2 S=O,  1 S–OH', cap: CAPD2 },
  { chip: 'Peroxodisulphuric', title: 'H<sub>2</sub>S<sub>2</sub>O<sub>8</sub> (peroxodisulphuric)', formula: 'H<sub>2</sub>S<sub>2</sub>O<sub>8</sub>', row: ['HO', 'S', 'O', 'O', 'S', 'OH'], bridge: [2], tag: 'O–O', note: 'peroxo O–O;  4 S=O,  2 S–OH', cap: CAPD2 },
];
const GD2 = { y: 104, step: 46, oy: 36 };
/** The atoms of the row as a graph (an OH split into O and H), for counting and oxidation states. */
function sGraph(a: SAcid) {
  const atoms: string[] = [], bonds: [number, number, number][] = [];
  const at = (el: string) => { atoms.push(el); return atoms.length - 1; };
  const idx = a.row.map((g) => (g === 'HO' || g === 'OH' ? (() => { const o = at('O'); bonds.push([o, at('H'), 1]); return o; })() : at(g)));
  idx.slice(1).forEach((j, k) => bonds.push([idx[k], j, 1]));
  idx.forEach((j, k) => { if (a.row[k] === 'S') { bonds.push([j, at('O'), 2]); bonds.push([j, at('O'), 2]); } });
  return { atoms, bonds, idx };
}
const EN: Record<string, number> = { H: 2.2, S: 2.58, O: 3.44 };
/** Oxidation state of each atom: each bond's electrons go to the more electronegative partner. */
const oxStates = (g: { atoms: string[]; bonds: [number, number, number][] }) => g.atoms.map((el, i) => g.bonds.filter((b) => b[0] === i || b[1] === i).reduce((t, b) => { const o = g.atoms[b[0] === i ? b[1] : b[0]]; return t + (EN[o] > EN[el] ? b[2] : EN[o] < EN[el] ? -b[2] : 0); }, 0));
const figD2: Diagram = {
  id: 'c12-11-D-d2',
  topic: 27,
  name: 'Sulphur oxoacids',
  cases: SACIDS,
  draw(a: SAcid) {
    const s = new Sketch(W, 186), n = a.row.length, x0 = W / 2 - ((n - 1) * GD2.step) / 2;
    lab(s, W / 2, 22, a.title, { size: 14, bold: true });
    const xs = a.row.map((_, k) => x0 + k * GD2.step), rects = a.row.map((g, k) => atom(s, [xs[k], GD2.y], g, { size: g === 'S' ? 17 : 15, bold: g === 'S' }));
    a.row.slice(1).forEach((_, k) => {
      const hi = a.bridge.includes(k);
      bond(s, [xs[k], GD2.y], rects[k], [xs[k + 1], GD2.y], rects[k + 1], { name: `b${k}${hi ? ':bridge' : ''}`, color: hi ? C.mari : C.ink, w: hi ? 2.4 : undefined });
    });
    a.row.forEach((g, k) => {
      if (g !== 'S') return;
      [-1, 1].forEach((sg) => { const p: P = [xs[k], GD2.y + sg * GD2.oy], r = atom(s, p, 'O'); bond(s, [xs[k], GD2.y], rects[k], p, r, { order: 2, name: `so${k}${sg}` }); });
    });
    if (a.tag) { const k = a.bridge[0]; lab(s, (xs[k] + xs[k + 1]) / 2, GD2.y - 13, a.tag, { size: 11.5, color: C.amber }); }
    lab(s, W / 2, 170, a.note, { size: 12, color: C.slate });
    return s;
  },
  check(a: SAcid) {
    const s = figD2.draw(a), out: Check[] = [], g = sGraph(a), ox = oxStates(g);
    const tally: Tally = {}; g.atoms.forEach((e) => { tally[e] = (tally[e] ?? 0) + 1; });
    out.push([`Atoms read off the structure: ${Object.entries(tally).map(([k, v]) => `${k}${v}`).join(' ')}, the formula ${plain(a.formula)}`, same(tally, count(a.formula))]);
    const S = g.atoms.map((e, i) => (e === 'S' ? i : -1)).filter((i) => i >= 0), nbr = (i: number) => g.bonds.filter((b) => b[0] === i || b[1] === i).length;
    out.push([`Every S has four neighbours (${S.map(nbr).join(', ')}): tetrahedrally surrounded, as the text says`, S.every((i) => nbr(i) === 4)]);
    const sOx = S.map((i) => ox[i]), avg = oxOf(a.formula, 'S');
    const peroxo = g.bonds.filter((b) => g.atoms[b[0]] === 'O' && g.atoms[b[1]] === 'O').flatMap((b) => [b[0], b[1]]);
    out.push([`Oxidation states bond by bond: S ${sOx.map(sgn).join(', ')}${peroxo.length ? `, the peroxo O ${peroxo.map((i) => sgn(ox[i])).join(', ')}` : ''}; the sum ${sgn(ox.reduce((t, x) => t + x, 0))}: S is +6 in all four${peroxo.length ? ` (counting every O as −2 would give ${sgn(avg)}, impossible past the group's +6: hence the peroxo O at −1, as the text says)` : ''}`, sOx.every((x) => x === 6) && ox.reduce((t, x) => t + x, 0) === 0 && peroxo.every((i) => ox[i] === -1) && (peroxo.length ? avg === 7 || avg === 8 : avg === 6)]);
    const hasH = (o: number) => g.bonds.some((c) => (c[0] === o || c[1] === o) && g.atoms[c[0] === o ? c[1] : c[0]] === 'H');
    const nSOH = g.bonds.filter((b) => { const [x, y] = g.atoms[b[0]] === 'S' ? [b[0], b[1]] : [b[1], b[0]]; return g.atoms[x] === 'S' && g.atoms[y] === 'O' && hasH(y); }).length;
    const nSO2 = g.bonds.filter((b) => b[2] === 2).length;
    const bridgeSOS = g.atoms.some((e, i) => e === 'O' && g.bonds.filter((b) => (b[0] === i || b[1] === i) && g.atoms[b[0] === i ? b[1] : b[0]] === 'S').length === 2);
    const want = a.chip === 'Oleum' ? 'S–O–S bridge;  ' : peroxo.length ? 'peroxo O–O;  ' : '';
    out.push([`The note under it is read off the structure: ${want}${nSO2} S=O, ${nSOH} S–OH ("${a.note}")`, a.note === (a.chip === 'Sulphuric acid' ? `${nSOH} S–OH,  ${nSO2} S=O` : `${want}${nSO2} S=O,  ${nSOH} S–OH`) && bridgeSOS === (a.chip === 'Oleum') && (peroxo.length > 0) === !!a.tag]);
    const hi = linesNamed(s, /:bridge$/).length;
    out.push([a.bridge.length ? `One highlight: the ${a.chip === 'Oleum' ? 'S–O–S bridge (its two bonds)' : 'O–O peroxo link'}` : 'The plain sulphate unit: nothing highlighted', mariCount(s) === hi && hi === (a.chip === 'Oleum' ? 2 : a.bridge.length)]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 7 · three fluorine anomalies (Addendum E, p. 570)               */
/* ===================================================================== */
const CAPE1 = 'Three fluorine anomalies. First panel: X–X bond enthalpy (fluorine, highlighted, falls below chlorine and bromine). Second: magnitude of electron gain enthalpy (chlorine exceeds fluorine). Third: H–X bond enthalpy, with the aqueous p<i>K</i><sub>a</sub> (HF is the weakest of the four hydrohalic acids).';
type BarCase = { chip: string; cap: string; title: string; unit: string; names: string[]; v: number[]; ymax: number; ystep: number; top: string; source: string; dec: number };
/** p. 570's bars, as printed on them; the same values in the tables of pp. 569 and 571. */
const CASESE1: BarCase[] = [
  { chip: 'X–X bond', cap: CAPE1, title: 'X–X bond dissociation enthalpy', unit: 'kJ mol<sup>−1</sup>', names: ['F<sub>2</sub>', 'Cl<sub>2</sub>', 'Br<sub>2</sub>', 'I<sub>2</sub>'], v: [158.8, 242.6, 192.8, 151.1], ymax: 300, ystep: 50, top: 'Cl<sub>2</sub> > Br<sub>2</sub> > F<sub>2</sub> > I<sub>2</sub>', source: 'p. 569', dec: 1 },
  { chip: 'Electron gain', cap: CAPE1, title: 'Magnitude of electron gain enthalpy', unit: '−Δ<sub>eg</sub><i>H</i> / kJ mol<sup>−1</sup>', names: ['F', 'Cl', 'Br', 'I'], v: [333, 349, 325, 296], ymax: 400, ystep: 100, top: 'Cl > F > Br > I', source: 'pp. 569–570', dec: 0 },
  { chip: 'H–X bond', cap: CAPE1, title: 'H–X bond dissociation enthalpy', unit: 'kJ mol<sup>−1</sup>', names: ['HF', 'HCl', 'HBr', 'HI'], v: [574, 432, 363, 295], ymax: 700, ystep: 100, top: 'p<i>K</i><sub>a</sub>:  3.2,  −7.0,  −9.5,  −10.0', source: 'p. 571', dec: 0 },
];
const PKA = [3.2, -7.0, -9.5, -10.0];
const BE1 = { ox: 60, x1: W - 14, top: 78, oy: 232, bw: 40 };
const yE1 = (c: BarCase, v: number) => BE1.oy - ((BE1.oy - BE1.top) * v) / c.ymax;
const xE1 = (i: number) => BE1.ox + ((BE1.x1 - BE1.ox) * (i + 0.5)) / 4;
const BARS = new WeakMap<Sketch, { top: number; label: string }[]>();
const orderOf = (c: BarCase) => c.names.map((n, i) => ({ n: plain(n), v: c.v[i] })).sort((a, b) => b.v - a.v).map((x) => x.n);
const figE1: Diagram = {
  id: 'c12-11-E-d1',
  topic: 28,
  name: 'Three fluorine anomalies',
  cases: CASESE1,
  draw(c: BarCase) {
    const s = new Sketch(W, 276), rec: { top: number; label: string }[] = [];
    lab(s, W / 2, 22, c.title, { size: 13.5 });
    lab(s, W / 2, 44, c.top, { size: 12.5, color: C.amber });
    lab(s, 8, 62, c.unit, { anchor: 'start', size: 11.5, color: C.slate });
    for (let v = 0; v <= c.ymax; v += c.ystep) {
      if (v) path(s, [[BE1.ox, yE1(c, v)], [BE1.x1, yE1(c, v)]], { color: C.grey, w: 0.8, free: true });
      lab(s, BE1.ox - 7, yE1(c, v) + 4, String(v), { anchor: 'end', size: 11, color: C.slate });
    }
    path(s, [[BE1.ox, BE1.top - 6], [BE1.ox, BE1.oy], [BE1.x1, BE1.oy]], { color: C.slate, w: 1.2, name: 'axes' });
    c.v.forEach((v, i) => {
      const x = xE1(i), y = yE1(c, v), hi = i === 0, label = v.toFixed(c.dec);
      path(s, [[x - BE1.bw / 2, BE1.oy], [x - BE1.bw / 2, y], [x + BE1.bw / 2, y], [x + BE1.bw / 2, BE1.oy]], { color: hi ? C.mari : C.ink, w: hi ? 2.4 : 1.6, name: `bar${i}` });
      lab(s, x, y - 7, label, { size: 11.5, color: hi ? C.amber : C.text });
      lab(s, x, BE1.oy + 19, c.names[i], { size: 12.5 });
      rec.push({ top: y, label });
    });
    BARS.set(s, rec);
    return s;
  },
  check(c: BarCase) {
    const s = figE1.draw(c), rec = BARS.get(s)!, out: Check[] = [];
    const read = rec.map((r) => ((BE1.oy - r.top) * c.ymax) / (BE1.oy - BE1.top));
    out.push([`Each bar read back stands at the book's value (${c.source}) and is labelled with it: ${c.names.map((n, i) => `${plain(n)} ${fmt(read[i], 2)}`).join(', ')}`, read.every((v, i) => close(v, c.v[i], 1e-9)) && rec.every((r, i) => r.label === c.v[i].toFixed(c.dec))]);
    out.push([`The axis runs 0–${c.ymax} in steps of ${c.ystep}, as the book's, every bar under the top`, Math.max(...c.v) < c.ymax && c.ymax % c.ystep === 0]);
    const ord = orderOf(c);
    if (c.chip === 'X–X bond') {
      out.push([`The order the bars give, ${ord.join(' > ')}, is the printed Cl₂ > Br₂ > F₂ > I₂: fluorine (${c.v[0]}) falls below chlorine and bromine, as the caption says`, ord.join() === 'Cl2,Br2,F2,I2' && c.v[0] < c.v[1] && c.v[0] < c.v[2]]);
      const half = c.v.map((v) => Math.round(v * 5 + 1e-6) / 10);
      out.push([`Half of each, the enthalpy cycle's ½ΔdissH on p. 570: ${half.join(', ')} (printed +79.4, +121.3, +96.4, +75.6)`, JSON.stringify(half) === JSON.stringify([79.4, 121.3, 96.4, 75.6])]);
    } else if (c.chip === 'Electron gain') {
      out.push([`The order the bars give, ${ord.join(' > ')}, is the printed Cl > F > Br > I: chlorine (${c.v[1]}) exceeds fluorine (${c.v[0]}), the compact 2p anomaly`, ord.join() === 'Cl,F,Br,I']);
    } else {
      out.push([`H–X enthalpy falls HF → HI (${c.v.join(' > ')}) while pKa falls ${PKA.map((p) => fmt(p, 1)).join(' > ')}: the stronger the bond, the weaker the acid; HF, with the highest pKa (3.2), is the weakest of the four`, c.v.every((v, i) => i === 0 || v < c.v[i - 1]) && PKA.every((p, i) => i === 0 || p < PKA[i - 1]) && hasLabel(s, 'pKa:  3.2,  −7.0,  −9.5,  −10.0')]);
    }
    out.push([`One highlight: fluorine's bar (${plain(c.names[0])}), the anomaly, as the book's red one`, mariCount(s) === 1]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8 · shapes of the interhalogens (Addendum E, p. 572)            */
/* ===================================================================== */
const CAPE2 = 'Shapes of the interhalogens. ClF<sub>3</sub> is bent T-shaped with both lone pairs equatorial; IF<sub>5</sub> is a square pyramid with the lone pair opposite the apex; IF<sub>7</sub> is a pentagonal bipyramid with no lone pair.';
const SQP = (apex: Lig): Lig[] => [apex, { el: 'F', d: [1, 0, 0] }, { el: 'F', d: [-1, 0, 0] }, { el: 'F', d: [0, 0, 1] }, { el: 'F', d: [0, 0, -1] }];
const PENTA: Lig[] = [{ el: 'F', d: [0, 1, 0] }, { el: 'F', d: [0, -1, 0] }, ...[0, 72, 144, 216, 288].map((a): Lig => ({ el: 'F', d: [Math.cos(a * D2R), 0, Math.sin(a * D2R)] }))];
type ShapeCase = { chip: string; cap: string; title: string; make: () => Shape; lines: string[]; lp: number; hyb: string; angles: number[]; hiPlane?: boolean };
const CASESE2: ShapeCase[] = [
  {
    chip: 'Bent T', cap: CAPE2, title: 'ClF<sub>3</sub>: bent T-shaped', lp: 2, hyb: 'sp3d', angles: [90, 180],
    make: () => ({ centre: 'Cl', V: 7, ligs: [{ el: 'F', d: [0, 1, 0] }, { el: 'F', d: [0, -1, 0] }, { el: 'F', d: [1, 0, 0] }], lps: [[C120, 0, S120], [C120, 0, -S120]], L: 72, az: 0, el: 25, c: [170, 140], lpR: 40 }),
    lines: ['sp<sup>3</sup>d,  3 bp + 2 lp', 'lone pairs equatorial'],
  },
  {
    chip: 'Square pyramidal', cap: CAPE2, title: 'IF<sub>5</sub>: square pyramidal', lp: 1, hyb: 'sp3d2', angles: [90, 180],
    make: () => ({ centre: 'I', V: 7, ligs: SQP({ el: 'F', d: [0, 1, 0] }), lps: [[0, -1, 0]], L: 70, az: 25, el: 20, c: [170, 134], lpR: 40 }),
    lines: ['sp<sup>3</sup>d<sup>2</sup>,  5 bp + 1 lp', 'lone pair opposite the apex'],
  },
  {
    chip: 'Pentagonal bipyramid', cap: CAPE2, title: 'IF<sub>7</sub>: pentagonal bipyramidal', lp: 0, hyb: 'sp3d3', angles: [72, 90, 144, 180], hiPlane: true,
    make: () => ({ centre: 'I', V: 7, ligs: PENTA, lps: [], L: 76, az: 0, el: 22, c: [170, 140] }),
    lines: ['sp<sup>3</sup>d<sup>3</sup>,  7 bp + 0 lp'],
  },
];
function drawShapeCase(c: ShapeCase, h = 300): Sketch {
  const s = new Sketch(W, h), m = c.make();
  lab(s, W / 2, 22, c.title, { size: 14, bold: true });
  const d = drawShape(s, m);
  if (c.hiPlane) {
    // the pentagonal plane: the five equatorial F joined round, dashed (the book's grey outline), each side stopped clear of the symbols
    const eq = d.ends.slice(2), rects = d.rects.slice(3);
    for (let k = 0; k < 5; k++) {
      const [p, q] = ends(eq[k].p, rects[k], eq[(k + 1) % 5].p, rects[(k + 1) % 5], LABEL_GAP + 1);
      path(s, [p, q], { color: C.mari, w: 1.3, dash: true, name: `plane${k}` });
    }
  }
  c.lines.forEach((t, k) => lab(s, W / 2, h - 34 + k * 18 - (c.lines.length - 1) * 4, t, { size: 13, color: k ? C.slate : C.text }));
  return s;
}
function shapeCaseChecks(c: ShapeCase, s: Sketch, name: string): Check[] {
  const m = c.make();
  const out = shapeChecks(name, m, s, { lp: c.lp, hyb: c.hyb, angles: c.angles });
  const want = `${hybHtml(c.hyb)},  ${counts(m)}`;
  out.push([`The line under it, "${plain(c.lines[0])}", is the count: ${HYB[m.ligs.length + c.lp]}, ${counts(m)}`, c.lines[0] === want || plain(c.lines[0]).startsWith(plain(want))]);
  return out;
}
const figE2: Diagram = {
  id: 'c12-11-E-d2',
  topic: 28,
  name: 'Shapes of the interhalogens',
  cases: CASESE2,
  draw: (c: ShapeCase) => drawShapeCase(c),
  check(c: ShapeCase) {
    const s = drawShapeCase(c), m = c.make(), d = SHAPES.get(s)![0], out = shapeCaseChecks(c, s, plain(c.title).split(':')[0]);
    if (c.chip === 'Bent T') {
      const eqF = m.ligs[2].d, lpEq = m.lps.every((v) => close(v[1], 0) && close(ang3(v, eqF), 120, 1e-9));
      // VSEPR on the trigonal bipyramid: a lone pair equatorial has two 90° neighbours, axial three
      out.push(['Both lone pairs equatorial (in the plane of the equatorial F, 120° from it), both F–Cl–F axial bonds vertical: a T of 90° angles, as printed', lpEq && close(ang3(m.ligs[0].d, m.ligs[1].d), 180) && close(ang3(m.ligs[0].d, eqF), 90)]);
      out.push(['Two lobes drawn on the side away from the equatorial F', d.lobes.every((l) => l.c[0] < m.c[0])]);
    } else if (c.chip === 'Square pyramidal') {
      out.push(['The lone pair is opposite the apex F (180° from it), under the square base of four F', close(ang3(m.lps[0], m.ligs[0].d), 180) && m.ligs.slice(1).every((g) => close(ang3(g.d, m.lps[0]), 90)) && d.lobes[0].c[1] > m.c[1]]);
    } else {
      const eq = m.ligs.slice(2), steps = eq.map((g, k) => ang3(g.d, eq[(k + 1) % 5].d));
      out.push([`Five equatorial F at ${steps.map((a) => fmt(a, 2)).join(', ')}° round the plane (360/5 = 72), two axial F perpendicular to it`, steps.every((a) => close(a, 72, 1e-9)) && eq.every((g) => close(ang3(g.d, m.ligs[0].d), 90, 1e-9))]);
      out.push(['One highlight: the pentagonal plane, dashed', mariCount(s) === 5]);
    }
    if (c.lp) out.push(['One highlight: the lone pairs', mariCount(s) === c.lp]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9 · shapes of the xenon compounds (Addendum F, p. 576)          */
/* ===================================================================== */
const CAPF1 = 'Shapes of the xenon compounds, with lone pairs drawn as lobes. The last panel pairs each xenon species with the halide or iodine species of the same valence-electron count and the same shape. XeF<sub>6</sub> is drawn on ideal octahedral positions; its lone pair pushes the fluorines out of them.';
const XE = 8;
/** The book's isostructural pairs, p. 576 (and its "Isostructural pairs by electron count"). */
const PAIRS: { xe: string; n: number; iso: string; shape: string }[] = [
  { xe: 'XeF<sub>2</sub>', n: 22, iso: 'I<sub>3</sub><sup>−</sup>', shape: 'linear' },
  { xe: 'XeF<sub>4</sub>', n: 36, iso: 'ICl<sub>4</sub><sup>−</sup>', shape: 'square planar' },
  { xe: 'XeF<sub>6</sub>', n: 50, iso: 'IF<sub>6</sub><sup>−</sup>', shape: 'distorted octahedral' },
  { xe: 'XeO<sub>3</sub>', n: 26, iso: 'IO<sub>3</sub><sup>−</sup>', shape: 'pyramidal' },
  { xe: 'XeOF<sub>4</sub>', n: 42, iso: 'IF<sub>5</sub>', shape: 'square pyramidal' },
];
const VAL: Record<string, number> = { Xe: 8, F: 7, Cl: 7, I: 7, O: 6 };
const valence = (html: string) => Object.entries(count(html)).reduce((t, [el, n]) => t + VAL[el] * n, 0) - chargeOf(html);
type PairsCase = { chip: string; cap: string; pairs: true };
const CASESF1: (ShapeCase | PairsCase)[] = [
  {
    chip: 'Linear', cap: CAPF1, title: 'XeF<sub>2</sub>: linear', lp: 3, hyb: 'sp3d', angles: [180],
    make: () => ({ centre: 'Xe', V: XE, ligs: [{ el: 'F', d: [1, 0, 0] }, { el: 'F', d: [-1, 0, 0] }], lps: [[0, 1, 0], [0, C120, S120], [0, C120, -S120]], L: 84, az: 20, el: 0, c: [170, 136], lpR: 40 }),
    lines: ['sp<sup>3</sup>d,  2 bp + 3 lp', 'lone pairs equatorial'],
  },
  {
    chip: 'Square planar', cap: CAPF1, title: 'XeF<sub>4</sub>: square planar', lp: 2, hyb: 'sp3d2', angles: [90, 180],
    make: () => ({ centre: 'Xe', V: XE, ligs: [{ el: 'F', d: [1, 0, 0] }, { el: 'F', d: [-1, 0, 0] }, { el: 'F', d: [0, 0, 1] }, { el: 'F', d: [0, 0, -1] }], lps: [[0, 1, 0], [0, -1, 0]], L: 76, az: 25, el: 20, c: [170, 140], lpR: 41 }),
    lines: ['sp<sup>3</sup>d<sup>2</sup>,  4 bp + 2 lp', '(above, below plane)'],
  },
  {
    chip: 'Distorted octahedral', cap: CAPF1, title: 'XeF<sub>6</sub>: distorted octahedral', lp: 1, hyb: 'sp3d3', angles: [90, 180],
    make: () => ({ centre: 'Xe', V: XE, ligs: OCTA('F'), lps: [[1, 1, 1]], L: 76, az: 10, el: 10, c: [170, 142], lpR: 40 }),
    lines: ['sp<sup>3</sup>d<sup>3</sup>,  6 bp + 1 lp'],
  },
  {
    chip: 'Pyramidal', cap: CAPF1, title: 'XeO<sub>3</sub>: pyramidal', lp: 1, hyb: 'sp3', angles: [109.47],
    make: () => ({ centre: 'Xe', V: XE, ligs: TETRA.slice(1).map((d) => ({ el: 'O', d, order: 2 })), lps: [TETRA[0]], L: 70, az: 0, el: 16, c: [170, 132], depth: 0.6, lpR: 40 }),
    lines: ['sp<sup>3</sup>,  3 bp + 1 lp'],
  },
  {
    chip: 'Square pyramidal', cap: CAPF1, title: 'XeOF<sub>4</sub>: square pyramidal', lp: 1, hyb: 'sp3d2', angles: [90, 180],
    make: () => ({ centre: 'Xe', V: XE, ligs: SQP({ el: 'O', d: [0, 1, 0], order: 2 }), lps: [[0, -1, 0]], L: 74, az: 25, el: 20, c: [170, 144], lpR: 41 }),
    lines: ['sp<sup>3</sup>d<sup>2</sup>,  5 bp + 1 lp', '(lp trans to O)'],
  },
  { chip: 'Isostructural pairs', cap: CAPF1, pairs: true },
];
const isPairs = (c: ShapeCase | PairsCase): c is PairsCase => 'pairs' in c;
function drawPairs(): Sketch {
  const s = new Sketch(W, 250);
  lab(s, W / 2, 24, 'Valence electrons, isostructural pairs', { size: 14, bold: true });
  PAIRS.forEach((p, k) => {
    const y = 66 + k * 34;
    lab(s, 20, y, p.xe, { anchor: 'start', size: 14 });
    lab(s, 98, y, `${p.n}  =  ${p.iso}`, { anchor: 'start', size: 14 });
    lab(s, 196, y, p.shape, { anchor: 'start', size: 11.5, color: C.slate });
  });
  return s;
}
const figF1: Diagram = {
  id: 'c12-11-F-d1',
  topic: 29,
  name: 'Shapes of the xenon compounds',
  cases: CASESF1,
  draw: (c: ShapeCase | PairsCase) => (isPairs(c) ? drawPairs() : drawShapeCase(c)),
  check(c: ShapeCase | PairsCase) {
    if (isPairs(c)) {
      const s = drawPairs(), out: Check[] = [];
      PAIRS.forEach((p) => out.push([`${plain(p.xe)}: ${Object.entries(count(p.xe)).map(([e, n]) => `${VAL[e]}${n > 1 ? ` × ${n}` : ''} (${e})`).join(' + ')} = ${valence(p.xe)}; ${plain(p.iso)}: ${valence(p.iso)}, the printed ${p.n}, and the same ${p.shape} shape`, valence(p.xe) === p.n && valence(p.iso) === p.n && hasLabel(s, `${p.n}  =  ${plain(p.iso)}`)]));
      // the same shape: the same bonded atoms and lone pairs round the centre (each O uses 2 of the centre's electrons, each halogen 1)
      const lpOf = (V: number, used: number, q: number) => (V - used - q) / 2;
      const same5 = [lpOf(8, 2, 0) === lpOf(7, 2, -1), lpOf(8, 4, 0) === lpOf(7, 4, -1), lpOf(8, 6, 0) === lpOf(7, 6, -1), lpOf(8, 6, 0) === lpOf(7, 6, -1), lpOf(8, 6, 0) === lpOf(7, 5, 0)];
      out.push([`Each partner has the same bonded atoms and lone pairs round its centre: XeF₂ and I₃⁻ 2 + ${lpOf(8, 2, 0)}; XeF₄ and ICl₄⁻ 4 + ${lpOf(8, 4, 0)}; XeF₆ and IF₆⁻ 6 + ${lpOf(8, 6, 0)}; XeO₃ and IO₃⁻ 3 + ${lpOf(7, 6, -1)}; XeOF₄ and IF₅ 5 + ${lpOf(7, 5, 0)}`, same5.every(Boolean) && lpOf(8, 2, 0) === 3 && lpOf(8, 4, 0) === 2]);
      out.push(...layout(s));
      return out;
    }
    const s = drawShapeCase(c), m = c.make(), d = SHAPES.get(s)![0], name = plain(c.title).split(':')[0];
    const out = shapeCaseChecks(c, s, name);
    if (c.chip === 'Linear') out.push(['The three lone pairs all equatorial, 120° apart, each 90° from both F (the book: "the three in XeF₂ are equatorial")', m.lps.every((v, i) => m.ligs.every((g) => close(ang3(v, g.d), 90, 1e-9)) && close(ang3(v, m.lps[(i + 1) % 3]), 120, 1e-9))]);
    if (c.chip === 'Square planar') out.push(['The two lone pairs trans, above and below the plane of the four F (180° apart, 90° from each F)', close(ang3(m.lps[0], m.lps[1]), 180) && m.ligs.every((g) => m.lps.every((v) => close(ang3(v, g.d), 90))) && d.lobes[0].c[1] < m.c[1] && d.lobes[1].c[1] > m.c[1]]);
    if (c.chip === 'Distorted octahedral') out.push([`Seven domains: six F on the octahedron, the lone pair over one face (${fmt(ang3(m.lps[0], m.ligs[0].d), 2)}° from its three nearest F), as the book draws it; the real distortion (the F pushed away from it) is not drawn`, m.ligs.filter((g) => close(ang3(m.lps[0], g.d), Math.acos(1 / Math.sqrt(3)) / D2R, 1e-6)).length === 3]);
    if (c.chip === 'Pyramidal') out.push([`Xe uses 2 electrons for each Xe=O: 8 − 6 = 2 left, one lone pair; three Xe=O drawn as double bonds (${d.ends.filter((e) => e.order === 2).length})`, d.ends.every((e) => e.order === 2) && lpCount(m) === 1]);
    if (c.chip === 'Square pyramidal') out.push([`8 − 2 (Xe=O) − 4 (Xe–F) = 2, one lone pair, trans to O (${fmt(ang3(m.lps[0], m.ligs[0].d), 1)}°), under the square of F`, close(ang3(m.lps[0], m.ligs[0].d), 180) && lpCount(m) === 1 && d.lobes[0].c[1] > m.c[1]]);
    const pair = PAIRS.find((p) => p.xe === c.title.split(':')[0])!;
    out.push([`${name}: ${valence(pair.xe)} valence electrons (Xe 8 and its partners), as the last panel says`, valence(pair.xe) === pair.n]);
    out.push([`One highlight: the ${c.lp} lone pair${c.lp > 1 ? 's' : ''}`, mariCount(s) === c.lp]);
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_12_11: Diagram[] = [figA1, figA2, figC1, figC2, figD1, figD2, figE1, figE2, figF1];

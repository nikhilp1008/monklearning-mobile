import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 12, CHAPTER 9 (Amines): every drawing of the Master Reference book on pp. 426–477, redrawn.
 * Every page's vector shapes were counted (only pp. 430, 434, 443, 449 and 453 hold a curve or a slanted line,
 * p. 464 holds the one bar chart, and no page has a raster image). SEVEN drawings on six pages:
 *
 *   Figure 9.1 (p. 430; caption first on p. 429) — Topic 01, topic index 0.
 *   Figures 9.2 and 9.3 (p. 434; captions first on p. 433) — Topic 01, index 0.
 *   Figure 9.4 (p. 443; caption first on p. 442) — Topic 02, index 1.
 *   Figure 9.5 (p. 449; caption first on p. 448) — Topic 03, index 2.
 *   Figure 9.6 (p. 453; caption first on p. 452) — Topic 03, index 2.
 *   "Figure 1" (p. 464, unnumbered in the chapter's series) — Additional topic A, index 4.
 *
 * THE BOOK'S NUMBERS. Fig 9.1's 108° is the book's (and NCERT's); the drawing is a true projection of a
 * pyramid with that angle, where the book's own bonds are schematic (72° apart on the page). The pKb bars of
 * "Figure 1" are the book's, read from its path data. Figs 9.2–9.6 carry no numbers; their layouts are re-laid
 * for a phone (9.2 and 9.3 run down the page, 9.5's spokes are re-spaced, 9.6 takes two rows).
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const rad = (deg: number) => (deg * Math.PI) / 180;
const deg = (r: number) => (r * 180) / Math.PI;
/** The direction of b from a, 0–360 (counter-clockwise from +x, y up). */
const azOf = (a: P, b: P) => ((Math.atan2(a[1] - b[1], b[0] - a[0]) * 180) / Math.PI + 360) % 360;
const azGap = (x: number, y: number) => { const d = (((x - y) % 360) + 360) % 360; return Math.min(d, 360 - d); };
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const centre = (r: Rect): P => [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2];

/* ---------- drawing helpers (as in chemistry-12-08.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; name?: string };
/** Every line a label must keep clear of, by sketch, with its name so a check can read it back. */
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const lineOf = (s: Sketch, name: string) => LINES.get(s)!.find((l) => l.name === name)!.pts;
const hasLine = (s: Sketch, name: string) => (LINES.get(s) ?? []).some((l) => l.name === name);
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="4 3"' : ''}/>`);
  keep(s, pts, o.name);
}
function arrow(s: Sketch, a: P, b: P, o: Stroke = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color, w: o.w });
  keep(s, [a, b], o.name);
}
/** A curly arrow: a cubic from a to the tip b, a filled head along its last stretch. */
function curly(s: Sketch, a: P, c1: P, c2: P, b: P, o: Stroke = {}) {
  const n = 40, HL = 7.5, HW = 3.4, col = o.color ?? C.mari;
  const all = Array.from({ length: n + 1 }, (_, i): P => {
    const t = i / n, u = 1 - t;
    return [u * u * u * a[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t * t * t * b[0], u * u * u * a[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t * t * t * b[1]];
  });
  const shaft = all.filter((p) => len(p, b) >= HL);
  const base = shaft[shaft.length - 1], L = len(base, b), ux = (b[0] - base[0]) / L, uy = (b[1] - base[1]) / L;
  const w1: P = [base[0] - uy * HW, base[1] + ux * HW], w2: P = [base[0] + uy * HW, base[1] - ux * HW];
  path(s, shaft, { color: col, w: o.w ?? 1.6, name: o.name });
  s.add(`<path d="M${r1(b[0])} ${r1(b[1])} L${r1(w1[0])} ${r1(w1[1])} L${r1(w2[0])} ${r1(w2[1])} Z" fill="${col}"/>`);
  keep(s, [b, w1, w2, b], `${o.name}:head`);
}
const tipOf = (s: Sketch, name: string) => lineOf(s, `${name}:head`)[0];
const tailOf = (s: Sketch, name: string) => lineOf(s, name)[0];
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/** How close a point comes to a polyline, walked at half a pixel. */
const pointToLine = (p: P, pts: P[]) => {
  let gap = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
    for (let k = 0; k <= n; k++) gap = Math.min(gap, len(p, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  return gap;
};
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

/** A line of STIX on the drawing, from its baseline, its box at its true width (subscripts counted). */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}) {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size) * (o.bold ? 1.05 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  s.labels.push({ text: plain(html), rect: [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)] });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
}
const AT = 15;
/** An atom or group centred on p; its box is what bonds stop short of. */
function atom(s: Sketch, p: P, html: string, o: { size?: number; color?: string } = {}): Rect {
  const size = o.size ?? AT, w = widthOf(html, size);
  const rect: Rect = [p[0] - w / 2, p[1] - size * 0.4, p[0] + w / 2, p[1] + size * (html.includes('<sub>') ? 0.62 : 0.4)];
  s.labels.push({ text: plain(html), rect });
  s.text(p[0], p[1] + size * 0.36, html, { size, color: o.color ?? C.text });
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
  const L = len(A, B), u: P = [(B[0] - A[0]) / L, (B[1] - A[1]) / L];
  const ta = exit(ra, A, u, g), tb = exit(rb, B, [-u[0], -u[1]], g);
  return [[A[0] + u[0] * ta, A[1] + u[1] * ta], [B[0] - u[0] * tb, B[1] - u[1] * tb]];
}
/** A bond: single, double (two lines either side of the axis) or triple (the axis and two either side). Each line is kept as ":1", ":2", ":3". */
function bond(s: Sketch, A: P, ra: Rect | null, B: P, rb: Rect | null, o: Stroke & { order?: 1 | 2 | 3 } = {}) {
  const order = o.order ?? 1;
  const [p, q] = ends(A, ra, B, rb, LABEL_GAP + (order === 1 ? 0.5 : 2.5));
  if (order === 1) { path(s, [p, q], o); return; }
  const L = len(p, q), n: P = [(-(q[1] - p[1]) / L) * (order === 2 ? 2.4 : 3.4), ((q[0] - p[0]) / L) * (order === 2 ? 2.4 : 3.4)];
  path(s, [[p[0] + n[0], p[1] + n[1]], [q[0] + n[0], q[1] + n[1]]], { ...o, name: `${o.name}:1` });
  path(s, [[p[0] - n[0], p[1] - n[1]], [q[0] - n[0], q[1] - n[1]]], { ...o, name: `${o.name}:2` });
  if (order === 3) path(s, [p, q], { ...o, name: `${o.name}:3` });
}
/** How many lines a bond was drawn with. */
const linesOf = (s: Sketch, name: string) => (hasLine(s, name) ? 1 : [1, 2, 3].filter((k) => hasLine(s, `${name}:${k}`)).length);
/** Formal charge: valence electrons − lone-pair electrons − bonds. */
const formal = (valence: number, lonePairs: number, bonds: number) => valence - 2 * lonePairs - bonds;

/* ---------- formulas: what a species holds ---------- */
type Tally = Record<string, number>;
const sum = (...t: Tally[]) => { const o: Tally = {}; t.forEach((m) => Object.entries(m).forEach(([k, v]) => { o[k] = (o[k] ?? 0) + v; })); return o; };
const times = (t: Tally, n: number) => { const o: Tally = {}; Object.entries(t).forEach(([k, v]) => { o[k] = v * n; }); return o; };
const same = (a: Tally, b: Tally) => { const k = new Set([...Object.keys(a), ...Object.keys(b)]); return [...k].every((e) => (a[e] ?? 0) === (b[e] ?? 0)); };
/** The atoms in a formula as printed ("C<sub>6</sub>H<sub>4</sub>(CO)<sub>2</sub>NK"); charges skipped. "R" and "X" are symbols of their own. */
function count(html: string): Tally {
  const t = html.replace(/<sup>[^<]*<\/sup>/g, '').replace(/<[^>]+>/g, '').replace(/[[\]]/g, (b) => (b === '[' ? '(' : ')'));
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
      out = sum(out, times(part, n ? +n : 1));
    }
    return out;
  };
  return group();
}
/** Charge as printed in a superscript: "+", "−", "2−". */
const chargeOf = (html: string) => { const m = html.match(/<sup>(\d*)([+−])<\/sup>/); return m ? (m[2] === '+' ? 1 : -1) * (m[1] ? +m[1] : 1) : 0; };
type Side = [number, string][];
const sideAtoms = (side: Side) => sum(...side.map(([n, f]) => times(count(f), n)));
const sideCharge = (side: Side) => side.reduce((q, [n, f]) => q + n * chargeOf(f), 0);
const tallyText = (t: Tally) => Object.entries(t).filter(([, v]) => v).map(([k, v]) => `${k}${v === 1 ? '' : v}`).join(' ');
const eqText = (side: Side) => side.map(([n, f]) => `${n > 1 ? `${n} ` : ''}${plain(f)}`).join(' + ');
const balances = ([l, r]: [Side, Side]) => same(sideAtoms(l), sideAtoms(r)) && sideCharge(l) === sideCharge(r);
const eqLine = ([l, r]: [Side, Side]) => `${eqText(l)} → ${eqText(r)}`;

/* ---------- boxes and flow lines (Figures 9.2, 9.4, 9.5) ---------- */
type Line = { html: string; size?: number; color?: string; bold?: boolean };
type Box = { id: string; rect: Rect; lines: Line[] };
const BOXES = new WeakMap<Sketch, Box[]>();
const FLOWS = new WeakMap<Sketch, { name: string; pts: P[]; color?: string }[]>();
const LH = 16;
function box(s: Sketch, id: string, rect: Rect, lines: Line[], o: { edge?: string; w?: number } = {}) {
  BOXES.set(s, [...(BOXES.get(s) ?? []), { id, rect, lines }]);
  s.add(`<rect x="${r1(rect[0])}" y="${r1(rect[1])}" width="${r1(rect[2] - rect[0])}" height="${r1(rect[3] - rect[1])}" rx="9" fill="#fff" stroke="${o.edge ?? C.slate}" stroke-width="${o.w ?? 1.2}"/>`);
  s.tags.push({ name: id, rect, from: null, to: null });
  const x = (rect[0] + rect[2]) / 2, y0 = (rect[1] + rect[3]) / 2 - ((lines.length - 1) * LH) / 2;
  lines.forEach((l, i) => s.text(x, y0 + i * LH + (l.size ?? 12) * 0.34, l.html, { size: l.size ?? 12, color: l.color ?? C.text, semibold: l.bold }));
}
/** A flow line from one box border to another, with a head at its end. */
function flow(s: Sketch, pts: P[], name: string, color: string = C.ink) {
  const b = pts[pts.length - 1], a = pts[pts.length - 2], L = len(a, b), ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L, HL = 8, HW = 3.8;
  const base: P = [b[0] - ux * HL, b[1] - uy * HL];
  const shaft = [...pts.slice(0, -1), base].map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${shaft}" fill="none" stroke="${color}" stroke-width="${color === C.ink ? 1.4 : 1.8}" stroke-linejoin="round"/>`);
  s.add(`<path d="M${r1(b[0])} ${r1(b[1])} L${r1(base[0] - uy * HW)} ${r1(base[1] + ux * HW)} L${r1(base[0] + uy * HW)} ${r1(base[1] - ux * HW)} Z" fill="${color}"/>`);
  FLOWS.set(s, [...(FLOWS.get(s) ?? []), { name, pts, color }]);
}
const onBorder = (r: Rect, p: P) => {
  const inX = p[0] >= r[0] - 0.01 && p[0] <= r[2] + 0.01, inY = p[1] >= r[1] - 0.01 && p[1] <= r[3] + 0.01;
  return (inX && (close(p[1], r[1], 0.01) || close(p[1], r[3], 0.01))) || (inY && (close(p[0], r[0], 0.01) || close(p[0], r[2], 0.01)));
};
/** The chart as drawn: which box each flow line really leaves and which it reaches. */
const flowsOf = (s: Sketch) => (FLOWS.get(s) ?? []).map(({ name, pts }) => {
  const B = BOXES.get(s)!, from = B.find((b) => onBorder(b.rect, pts[0])), to = B.find((b) => onBorder(b.rect, pts[pts.length - 1]));
  return { name, from: from?.id ?? '?', to: to?.id ?? '?' };
});
const orient = (a: P, b: P, c: P) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
const properCross = (a: P, b: P, c: P, d: P) => orient(a, b, c) * orient(a, b, d) < -1e-6 && orient(c, d, a) * orient(c, d, b) < -1e-6;
/** Flow lines that cross, run through a box, or come within 4 px of a label; and box text that overruns its box. */
function chartClear(s: Sketch): Check[] {
  const E = (FLOWS.get(s) ?? []).map((f) => f.pts), B = BOXES.get(s) ?? [], seg = E.map((pts) => pts.slice(1).map((q, i): [P, P] => [pts[i], q]));
  let crossings = 0;
  seg.forEach((a, i) => seg.slice(i + 1).forEach((b) => a.forEach(([p, q]) => b.forEach(([u, v]) => { if (properCross(p, q, u, v)) crossings++; }))));
  let through = 0;
  E.forEach((pts) => B.forEach((b) => { if ([pts[0], pts[pts.length - 1]].some((p) => onBorder(b.rect, p))) return; if (boxToLine([b.rect[0] - 2, b.rect[1] - 2, b.rect[2] + 2, b.rect[3] + 2], pts) < 1e-9) through++; }));
  let gap = Infinity, what = '';
  E.forEach((pts) => s.labels.forEach((l) => { const d = boxToLine(l.rect, pts); if (d < gap) { gap = d; what = l.text; } }));
  const tight = B.flatMap((b) => b.lines.filter((l) => widthOf(l.html, l.size ?? 12) * (l.bold ? 1.05 : 1) + 8 > b.rect[2] - b.rect[0]).map((l) => plain(l.html)));
  const tall = B.filter((b) => b.lines.length * LH + 4 > b.rect[3] - b.rect[1]).map((b) => b.id);
  return [
    [`No crossing lines: ${E.length} flow lines, ${crossings} crossings, ${through} through another box`, crossings === 0 && through === 0],
    [`Every flow line stays ${LABEL_GAP} px clear of every label: the closest is "${what}", ${fmt(gap, 1)} px`, E.length === 0 || gap >= LABEL_GAP - 1e-9],
    [`Every line of text fits its box with room to spare at Android's widths${tight.length || tall.length ? `: not ${[...tight, ...tall].join(', ')}` : ''}`, tight.length === 0 && tall.length === 0],
  ];
}
/** The one highlight: boxes whose text is set in amber. */
const highlighted = (s: Sketch) => (BOXES.get(s) ?? []).filter((b) => b.lines.some((l) => l.color === C.amber)).map((b) => b.id);
const boxText = (s: Sketch, id: string) => BOXES.get(s)!.find((b) => b.id === id)!.lines.map((l) => plain(l.html)).join(' ');
const hOf = (n: number) => n * LH + 10;

/* ===================================================================== */
/* Figure 9.1 · amines are pyramidal (Topic 01, p. 430)                   */
/* ===================================================================== */
const CAP91 = 'Amines are pyramidal: sp<sup>3</sup> nitrogen carrying a lone pair, bond angle about 108°.';
type V3 = [number, number, number];
const dot3 = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const norm3 = (a: V3): V3 => { const k = Math.hypot(...a); return [a[0] / k, a[1] / k, a[2] / k]; };
const ang3 = (a: V3, b: V3) => deg(Math.acos(Math.max(-1, Math.min(1, dot3(norm3(a), norm3(b))))));
/**
 * Trimethylamine, the book's example. N at the apex; three N–C bonds at `phi` round the C₃ axis (x right, y down
 * the axis, z toward the reader), each at β to the axis so that every C–N–C is the printed 108°:
 * cos 108° = cos²β + sin²β cos 120° = 1 − 1.5 sin²β. Seen from `tilt` above the base plane, so the front group
 * stands lowest. Lengths in px; `arc` is the angle mark's radius, `lp` the lone pair's distance.
 */
const G91 = { N: [150, 100] as P, L: 105, angle: 108, tilt: 12, phi: [90, 210, 330], arc: 34, lp: 34, lobe: [9, 16] as P };
const BETA91 = Math.asin(Math.sqrt((1 - Math.cos(rad(G91.angle))) / 1.5));
const bond3 = (phi: number): V3 => [Math.sin(BETA91) * Math.cos(rad(phi)), Math.cos(BETA91), Math.sin(BETA91) * Math.sin(rad(phi))];
const proj = (v: V3): P => [v[0], v[1] * Math.cos(rad(G91.tilt)) + v[2] * Math.sin(rad(G91.tilt))];
const at91 = (v: V3, r: number): P => { const q = proj(v); return [G91.N[0] + r * q[0], G91.N[1] + r * q[1]]; };
/** Points along the great-circle arc from a to b, at radius r, projected. */
const arc3 = (a: V3, b: V3, r: number, n = 24): P[] => {
  const th = rad(ang3(a, b)), A = norm3(a), B = norm3(b);
  return Array.from({ length: n + 1 }, (_, i) => { const t = i / n, ka = Math.sin((1 - t) * th) / Math.sin(th), kb = Math.sin(t * th) / Math.sin(th); return at91([ka * A[0] + kb * B[0], ka * A[1] + kb * B[1], ka * A[2] + kb * B[2]], r); });
};
/** p. 430, path data: the book's three bonds from N, in its own units (y up). */
const BOOK91 = { N: [130.917147, 128.565449] as P, left: [93.598417, 77.200838] as P, right: [168.235877, 77.200838] as P };
const fig91: Diagram = {
  id: 'c12-09-fig-9.1',
  topic: 0,
  name: 'Amines are pyramidal',
  cases: [{ chip: 'Trimethylamine', cap: CAP91 }],
  draw() {
    const s = new Sketch(W, 246), G = G91, N = G.N;
    const rN = atom(s, N, 'N');
    G.phi.forEach((phi, i) => {
      const c = at91(bond3(phi), G.L), rc = atom(s, c, 'CH<sub>3</sub>');
      bond(s, N, rN, c, rc, { name: `NC${i}` });
    });
    // the lone pair, the highlight: a lobe along the axis, away from the three groups
    const lc = at91([0, -1, 0], G.lp), [rx, ry] = G.lobe;
    path(s, Array.from({ length: 49 }, (_, i): P => [lc[0] + rx * Math.cos((2 * Math.PI * i) / 48), lc[1] + ry * Math.sin((2 * Math.PI * i) / 48)]), { color: C.mari, w: 1.8, name: 'lobe' });
    lab(s, lc[0] + rx + 10, lc[1] + 5, 'lone pair', { anchor: 'start', size: 13.5, color: C.amber });
    // the angle mark, between the front group and the one at the right (all three angles are equal)
    path(s, arc3(bond3(G.phi[0]), bond3(G.phi[2]), G.arc), { color: C.slate, w: 1.3, name: 'arc' });
    lab(s, 186, 156, 'C–N–C ≈ 108°', { anchor: 'start', size: 13, color: C.slate });
    lab(s, W / 2, 228, 'sp<sup>3</sup> nitrogen, pyramidal geometry', { size: 14, color: C.slate });
    return s;
  },
  check() {
    const s = fig91.draw(fig91.cases[0]), out: Check[] = [], G = G91, N = G.N;
    const u = G.phi.map(bond3), pairs = [[0, 1], [0, 2], [1, 2]].map(([a, b]) => ang3(u[a], u[b]));
    out.push([`The model's three C–N–C angles, from its bond vectors: ${pairs.map((a) => fmt(a, 2)).join('°, ')}°, the printed 108° (β = ${fmt(deg(BETA91), 2)}° from the axis); not 109.5°, the lone pair pressing them together`, pairs.every((a) => close(a, G.angle, 1e-9)) && G.angle < 109.47]);
    const read = u.map((v, i) => { const [a, b] = lineOf(s, `NC${i}`); return azGap(azOf(a, b), azOf(N, at91(v, 1))); });
    out.push([`Each bond, read back off the drawing, runs along its own projected direction (within ${fmt(Math.max(...read), 6)}°): the picture is a true view of that pyramid, ${G.tilt}° above its base`, read.every((x) => x < 1e-6)]);
    const b = BOOK91, l = azOf(b.N, b.left), r = azOf(b.N, b.right);
    out.push([`The book's own drawing is schematic: its outer bonds stand ${fmt(azGap(l, r), 1)}° apart on the page (p. 430, path data), so the 108° is carried by the label there, by the geometry here`, close(azGap(l, r), 72.0, 0.05)]);
    const lp: V3 = norm3([-(u[0][0] + u[1][0] + u[2][0]), -(u[0][1] + u[1][1] + u[2][1]), -(u[0][2] + u[1][2] + u[2][2])]), lpAng = u.map((v) => ang3(v, lp));
    const lc = at91([0, -1, 0], G.lp), lobe = lineOf(s, 'lobe'), cx = (Math.min(...lobe.map((p) => p[0])) + Math.max(...lobe.map((p) => p[0]))) / 2, cy = (Math.min(...lobe.map((p) => p[1])) + Math.max(...lobe.map((p) => p[1]))) / 2;
    out.push([`The lone pair points straight out of the apex, opposite the three bonds: ${lpAng.map((a) => fmt(a, 1)).join('°, ')}° from each, and the lobe is drawn on that axis above N`, lpAng.every((a) => close(a, 180 - deg(BETA91), 1e-9)) && close(lp[1], -1, 1e-12) && close(cx, lc[0], 1e-6) && close(cy, lc[1], 1e-6) && cy < N[1]]);
    const domains = u.length + 1, fN = formal(5, 1, linesOf(s, 'NC0') + linesOf(s, 'NC1') + linesOf(s, 'NC2'));
    out.push([`Three bonds and one lone pair: ${domains} electron domains round N, so sp³; nitrogen's formal charge 5 − 2 − 3 = ${fN}, a neutral amine (CH₃)₃N, ${tallyText(count('(CH<sub>3</sub>)<sub>3</sub>N'))}, a 3° amine`, domains === 4 && fN === 0 && tallyText(count('(CH<sub>3</sub>)<sub>3</sub>N')) === 'C3 H9 N']);
    const arc = lineOf(s, 'arc'), e0 = pointToLine(arc[0], lineOf(s, 'NC0')), e1 = pointToLine(arc[arc.length - 1], lineOf(s, 'NC2'));
    out.push([`The angle mark runs from the front bond to the right-hand bond (its ends ${fmt(e0, 2)} and ${fmt(e1, 2)} px off them), a projected arc of ${fmt(ang3(u[0], u[2]), 1)}°`, e0 < 0.6 && e1 < 0.6 && close(ang3(u[0], u[2]), 108, 1e-9)]);
    out.push(['The labels as printed: N, CH₃ three times, lone pair, C–N–C ≈ 108°, sp³ nitrogen, pyramidal geometry', labelsNamed(s, 'CH3').length === 3 && ['N', 'lone pair', 'C–N–C ≈ 108°', 'sp3 nitrogen, pyramidal geometry'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.2 · the Gabriel synthesis (Topic 01, p. 434)                  */
/* ===================================================================== */
const CAP92 = 'The Gabriel synthesis: phthalimide to its potassium salt to N-alkylphthalimide to a primary amine; aryl halides and tertiary halides fail.';
const PHTH = 'C<sub>6</sub>H<sub>4</sub>(CO)<sub>2</sub>NH', KPHTH = 'C<sub>6</sub>H<sub>4</sub>(CO)<sub>2</sub>NK', RPHTH = 'C<sub>6</sub>H<sub>4</sub>(CO)<sub>2</sub>NR', AMINE = 'RNH<sub>2</sub>';
const X92: [number, number] = [20, 180];
/** p. 434, top to bottom, each box as printed; the reagent over the arrow into it. */
const STEPS92: { id: string; y: number; lines: string[]; reagent?: string; hi?: boolean }[] = [
  { id: 'phthalimide', y: 8, lines: ['phthalimide'] },
  { id: 'potassium phthalimide', y: 68, lines: ['potassium', 'phthalimide'], reagent: 'KOH, alc.' },
  { id: 'N-alkylphthalimide', y: 144, lines: ['N-alkyl-', 'phthalimide'], reagent: 'R–X, S<sub>N</sub>2' },
  { id: 'amine', y: 220, lines: ['R–NH<sub>2</sub>', '(1° amine)'], reagent: 'H<sub>3</sub>O<sup>+</sup> or N<sub>2</sub>H<sub>4</sub>', hi: true },
];
/** The text's equations behind each arrow (p. 433), balanced; the last step either way. */
const EQ92: { step: string; eq: [Side, Side] }[] = [
  { step: 'KOH, alc.', eq: [[[1, PHTH], [1, 'KOH']], [[1, KPHTH], [1, 'H<sub>2</sub>O']]] },
  { step: 'R–X', eq: [[[1, KPHTH], [1, 'RX']], [[1, RPHTH], [1, 'KX']]] },
  { step: 'H₃O⁺', eq: [[[1, RPHTH], [2, 'H<sub>2</sub>O']], [[1, AMINE], [1, 'C<sub>6</sub>H<sub>4</sub>(COOH)<sub>2</sub>']]] },
  { step: 'N₂H₄', eq: [[[1, RPHTH], [1, 'N<sub>2</sub>H<sub>4</sub>']], [[1, AMINE], [1, 'C<sub>6</sub>H<sub>4</sub>(CO)<sub>2</sub>N<sub>2</sub>H<sub>2</sub>']]] },
];
const rect92 = (i: number): Rect => [X92[0], STEPS92[i].y, X92[1], STEPS92[i].y + hOf(STEPS92[i].lines.length)];
const fig92: Diagram = {
  id: 'c12-09-fig-9.2',
  topic: 0,
  name: 'The Gabriel synthesis',
  cases: [{ chip: 'Four steps', cap: CAP92 }],
  draw() {
    const s = new Sketch(W, 316), mx = (X92[0] + X92[1]) / 2;
    STEPS92.forEach((st, i) => {
      box(s, st.id, rect92(i), st.lines.map((html) => ({ html, size: 12.5, bold: st.hi, color: st.hi ? C.amber : C.text })), st.hi ? { edge: C.mari, w: 1.8 } : { edge: C.ink, w: 1.3 });
      if (!i) return;
      const a = rect92(i - 1), b = rect92(i);
      flow(s, [[mx, a[3]], [mx, b[1]]], `${STEPS92[i - 1].id}>${st.id}`);
      lab(s, mx + 10, (a[3] + b[1]) / 2 + 4, st.reagent!, { anchor: 'start', size: 12, color: C.slate });
    });
    const last = rect92(3);
    lab(s, X92[1] + 10, last[1] + 16, '+ phthalic acid or', { anchor: 'start', size: 11.5, color: C.slate });
    lab(s, X92[1] + 10, last[1] + 31, 'phthalhydrazide', { anchor: 'start', size: 11.5, color: C.slate });
    lab(s, W / 2, 290, 'route to 1° amines only: aryl and', { size: 12.5, color: C.slate });
    lab(s, W / 2, 307, '3° R–X fail (no S<sub>N</sub>2)', { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig92.draw(fig92.cases[0]), out: Check[] = [], F = flowsOf(s);
    out.push([`Read back from where the flow lines start and end: ${F.map((f) => `${f.from} → ${f.to}`).join(', ')}, the book's order`, F.map((f) => `${f.from}>${f.to}`).join() === STEPS92.slice(1).map((st, i) => `${STEPS92[i].id}>${st.id}`).join()]);
    EQ92.forEach(({ step, eq }) => out.push([`${step}: ${eqLine(eq)} balances for atoms (${tallyText(sideAtoms(eq[0]))}) and charge`, balances(eq)]));
    const rC = count('R').R, amineR = count(AMINE).R, halideR = count('RX').R;
    out.push([`Carbon ledger: the amine keeps the halide's whole alkyl group (R ${halideR} → R ${amineR}) and gains no carbon from the phthalimide, so the chain length is unchanged; the amine has ${count(AMINE).H} H on N, a 1° amine`, rC === 1 && amineR === halideR && !count(AMINE).C && count(AMINE).H === 2]);
    out.push(['The reagents as printed beside their arrows: KOH, alc. · R–X, SN2 · H₃O⁺ or N₂H₄; and the by-product, + phthalic acid or phthalhydrazide, beside the amine', ['KOH, alc.', 'R–X, SN2', 'H3O+ or N2H4', '+ phthalic acid or', 'phthalhydrazide'].every((t) => hasLabel(s, t))]);
    out.push(['The scope line as printed: route to 1° amines only: aryl and 3° R–X fail (no SN2)', hasLabel(s, 'route to 1° amines only: aryl and') && hasLabel(s, '3° R–X fail (no SN2)')]);
    out.push([`Every box reads as printed: ${STEPS92.map((st) => boxText(s, st.id)).join(' · ')}`, STEPS92.map((st) => boxText(s, st.id)).join('|') === 'phthalimide|potassium phthalimide|N-alkyl- phthalimide|R–NH2 (1° amine)']);
    out.push([`One highlight: the ${highlighted(s).join()} box`, highlighted(s).join() === 'amine']);
    out.push(...chartClear(s), labelsApart(s), inFrame(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.3 · Hofmann bromamide degradation (Topic 01, p. 434)          */
/* ===================================================================== */
const CAP93 = 'Hofmann bromamide degradation: amide to N-bromoamide to isocyanate (R migrates with retention) to a primary amine, one carbon shorter.';
/** p. 434, each species as printed (R, then the rest), its name, and the reagent over the arrow into it. */
const ROWS93: { rest: string; f: string; name: string; reagent?: string }[] = [
  { rest: '–CONH<sub>2</sub>', f: 'RCONH<sub>2</sub>', name: 'amide' },
  { rest: '–CONHBr', f: 'RCONHBr', name: 'N-bromoamide', reagent: 'Br<sub>2</sub>, KOH' },
  { rest: '–N=C=O', f: 'RNCO', name: 'isocyanate', reagent: 'R migrates C → N' },
  { rest: '–NH<sub>2</sub>', f: 'RNH<sub>2</sub>', name: '1° amine', reagent: 'H<sub>2</sub>O' },
];
const G93 = { x0: 128, y: [34, 108, 182, 256], ax: 158, name: 244, sz: 15 };
/** p. 433's overall equation and the three steps behind it (in KOH, the CO₂ is held as carbonate). */
const EQ93: { step: string; eq: [Side, Side] }[] = [
  { step: 'overall (p. 433)', eq: [[[1, 'RCONH<sub>2</sub>'], [1, 'Br<sub>2</sub>'], [4, 'KOH']], [[1, 'RNH<sub>2</sub>'], [1, 'K<sub>2</sub>CO<sub>3</sub>'], [2, 'KBr'], [2, 'H<sub>2</sub>O']]] },
  { step: 'bromination', eq: [[[1, 'RCONH<sub>2</sub>'], [1, 'Br<sub>2</sub>'], [1, 'KOH']], [[1, 'RCONHBr'], [1, 'KBr'], [1, 'H<sub>2</sub>O']]] },
  { step: 'migration', eq: [[[1, 'RCONHBr'], [1, 'KOH']], [[1, 'RNCO'], [1, 'KBr'], [1, 'H<sub>2</sub>O']]] },
  { step: 'hydrolysis', eq: [[[1, 'RNCO'], [2, 'KOH']], [[1, 'RNH<sub>2</sub>'], [1, 'K<sub>2</sub>CO<sub>3</sub>']]] },
];
const fig93: Diagram = {
  id: 'c12-09-fig-9.3',
  topic: 0,
  name: 'Hofmann bromamide degradation',
  cases: [{ chip: 'Four species', cap: CAP93 }],
  draw() {
    const s = new Sketch(W, 330), G = G93, wR = widthOf('R', G.sz);
    ROWS93.forEach((r, i) => {
      const y = G.y[i];
      lab(s, G.x0, y, 'R', { anchor: 'start', size: G.sz, color: C.amber });
      lab(s, G.x0 + wR + 2, y, r.rest, { anchor: 'start', size: G.sz }); // set close: on Android the gap read as "R –CONH₂"
      lab(s, G.name, y, r.name, { anchor: 'start', size: 12.5, color: C.slate });
      if (!i) return;
      const top = G.y[i - 1] + G.sz * 0.36 + LABEL_GAP + 1.5, bot = y - G.sz * 0.72 - LABEL_GAP - 1.5;
      arrow(s, [G.ax, top], [G.ax, bot], { w: 1.7, name: `step${i}` });
      lab(s, G.ax + 12, (top + bot) / 2 + 4, r.reagent!, { anchor: 'start', size: 12, color: C.slate });
    });
    // the migrating R keeps its configuration: the highlight, R to R, clear of its label
    curly(s, [G.x0 - 6, G.y[1] - 4], [94, G.y[1] + 6], [94, G.y[2] - 14], [G.x0 - 5, G.y[2] - 5], { name: 'migrate' });
    ['migrating R', 'keeps its', 'configuration'].forEach((t, i) => lab(s, 6, 130 + i * 16, t, { anchor: 'start', size: 12, color: C.amber }));
    lab(s, W / 2, 300, 'one carbon lost (as CO<sub>3</sub><sup>2−</sup>): amine has', { size: 12.5, color: C.slate });
    lab(s, W / 2, 318, 'one C fewer than the amide', { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig93.draw(fig93.cases[0]), out: Check[] = [], G = G93;
    const species = labelsNamed(s, 'R').map((l) => l.rect).sort((a, b) => a[1] - b[1]);
    const steps = [1, 2, 3].map((i) => { const [a, b] = lineOf(s, `step${i}`); return { down: b[1] > a[1], from: a[1] - G.y[i - 1], to: G.y[i] - b[1] }; });
    out.push([`Three arrows, each pointing down from one species to the next (${steps.map((x) => `${fmt(x.from, 1)}/${fmt(x.to, 1)} px`).join(', ')} below and above them): amide → N-bromoamide → isocyanate → amine`, steps.every((x) => x.down && x.from > 0 && x.from < 14 && x.to > 0 && x.to < 20) && species.length === 4]);
    EQ93.forEach(({ step, eq }) => out.push([`${step}: ${eqLine(eq)} balances for atoms (${tallyText(sideAtoms(eq[0]))}) and charge`, balances(eq)]));
    const net = sum(...EQ93.slice(1).map(({ eq }) => times(sideAtoms(eq[0]), 1))), netR = sum(...EQ93.slice(1).map(({ eq }) => sideAtoms(eq[1])));
    out.push(['The three steps add up to the overall equation once RCONHBr and RNCO cancel: Br₂ + 4 KOH in all, 4 KOH being the book\'s stoichiometry', EQ93.slice(1).reduce((k, { eq }) => k + eq[0].filter(([, f]) => f === 'KOH').reduce((a, [n]) => a + n, 0), 0) === 4 && same(sum(net, times(sum(count('RCONHBr'), count('RNCO')), -1)), sum(netR, times(sum(count('RCONHBr'), count('RNCO')), -1)))]);
    const cOf = (f: string) => (count(f).C ?? 0) + (count(f).R ? 1000 : 0);
    out.push([`Carbon ledger: the amide, N-bromoamide and isocyanate each hold R plus ${count('RCONH<sub>2</sub>').C} C, the amine R alone; the lost carbon leaves as carbonate (K₂CO₃, CO₃²⁻): one carbon fewer`, cOf(ROWS93[0].f) === cOf(ROWS93[1].f) && cOf(ROWS93[1].f) === cOf(ROWS93[2].f) && cOf(ROWS93[3].f) === cOf(ROWS93[0].f) - 1 && chargeOf('CO<sub>3</sub><sup>2−</sup>') === -2]);
    const iso = { N: formal(5, 1, 1 + 2), C: formal(4, 0, 2 + 2), O: formal(6, 2, 2) };
    out.push([`The isocyanate R–N=C=O is neutral: N 5 − 2 − 3 = ${iso.N}, C 4 − 0 − 4 = ${iso.C}, O 6 − 4 − 2 = ${iso.O}`, iso.N === 0 && iso.C === 0 && iso.O === 0 && hasLabel(s, '–N=C=O')]);
    const tail = tailOf(s, 'migrate'), tip = tipOf(s, 'migrate');
    out.push([`The curved arrow runs from the N-bromoamide's R (${fmt(rectDist(species[1], tail), 1)} px off it) to the isocyanate's R (${fmt(rectDist(species[2], tip), 1)} px off it): the same R, carried across the migration`, rectDist(species[1], tail) < 9 && rectDist(species[2], tip) < 9 && len(tip, centre(species[2])) < len(tip, centre(species[1]))]);
    out.push(['The labels as printed: the four species, amide, N-bromoamide, isocyanate, 1° amine, Br₂, KOH, R migrates C → N, H₂O, migrating R keeps its configuration, one carbon lost (as CO₃²⁻): amine has one C fewer than the amide', ['–CONH2', '–CONHBr', '–N=C=O', '–NH2', 'amide', 'N-bromoamide', 'isocyanate', '1° amine', 'Br2, KOH', 'R migrates C → N', 'H2O', 'migrating R', 'keeps its', 'configuration', 'one carbon lost (as CO32−): amine has', 'one C fewer than the amide'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.4 · the Hinsberg test (Topic 02, p. 443)                      */
/* ===================================================================== */
const CAP94 = 'The Hinsberg test: the sulphonamide of a primary amine dissolves in alkali, that of a secondary amine precipitates, and a tertiary amine does not react.';
const COLS94: [number, number][] = [[6, 110], [118, 222], [230, 334]];
const TOP94: Rect = [56, 6, 284, 48];
/** p. 443, column by column: the class, its formula, its result box and the note under it, as printed. */
const CLASSES94 = [
  { id: '1° amine', f: 'RNH<sub>2</sub>', lines: ['1° amine', '(two N–H)'], out: 'soluble', res: ['sulphonamide', 'SOLUBLE in', 'alkali', '(clear solution)'], note: ['N–H remains:', 'salt forms'] },
  { id: '2° amine', f: 'R<sub>2</sub>NH', lines: ['2° amine', '(one N–H)'], out: 'insoluble', res: ['sulphonamide', 'INSOLUBLE', '(precipitate)'], note: ['no N–H left after', 'sulphonylation'] },
  { id: '3° amine', f: 'R<sub>3</sub>N', lines: ['3° amine', '(no N–H)'], out: 'no reaction', res: ['no reaction', '(amine layer', 'unchanged)'], note: ['no N–H to', 'substitute'] },
];
const RY94: [number, number] = [150, 224], MY94: [number, number] = [84, 126];
const HINS = 'C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>Cl';
/** The reactions behind each column (p. 442), balanced. */
const EQ94: { step: string; eq: [Side, Side] }[] = [
  { step: '1° amine', eq: [[[1, 'RNH<sub>2</sub>'], [1, HINS]], [[1, 'C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>NHR'], [1, 'HCl']]] },
  { step: 'its sulphonamide in KOH', eq: [[[1, 'C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>NHR'], [1, 'KOH']], [[1, 'C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>NR<sup>−</sup>'], [1, 'K<sup>+</sup>'], [1, 'H<sub>2</sub>O']]] },
  { step: '2° amine', eq: [[[1, 'R<sub>2</sub>NH'], [1, HINS]], [[1, 'C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>NR<sub>2</sub>'], [1, 'HCl']]] },
];
const fig94: Diagram = {
  id: 'c12-09-fig-9.4',
  topic: 1,
  name: 'The Hinsberg test',
  cases: [{ chip: '1°, 2°, 3°', cap: CAP94 }],
  draw() {
    const s = new Sketch(W, 308);
    box(s, 'reagent', TOP94, [{ html: `amine + ${HINS}`, size: 12.5 }, { html: '(Hinsberg reagent), then KOH', size: 12.5 }], { edge: C.ink, w: 1.3 });
    const starts = [130, 170, 210];
    CLASSES94.forEach((c, i) => {
      const [a, b] = COLS94[i], cx = (a + b) / 2, hi = i === 0;
      box(s, c.id, [a, MY94[0], b, MY94[1]], c.lines.map((html) => ({ html, size: 12 })), { edge: C.ink, w: 1.3 });
      flow(s, [[starts[i], TOP94[3]], [cx, MY94[0]]], `reagent>${c.id}`);
      box(s, c.out, [a, RY94[0], b, RY94[1]], c.res.map((html) => ({ html, size: 11, bold: hi, color: hi ? C.amber : C.text })), hi ? { edge: C.mari, w: 1.8 } : {});
      flow(s, [[cx, MY94[1]], [cx, RY94[0]]], `${c.id}>${c.out}`);
      c.note.forEach((t, k) => lab(s, cx, RY94[1] + 17 + k * 14, t, { size: 10.5, color: C.slate }));
    });
    lab(s, W / 2, 284, 'solubility in alkali distinguishes 1° from 2°;', { size: 12, color: C.slate });
    lab(s, W / 2, 300, '3° does not react', { size: 12, color: C.slate });
    return s;
  },
  check() {
    const s = fig94.draw(fig94.cases[0]), out: Check[] = [], F = flowsOf(s);
    const tree = CLASSES94.map((c) => `${F.filter((f) => f.from === 'reagent' && f.to === c.id).length}${F.filter((f) => f.from === c.id && f.to === c.out).length}`);
    out.push([`Read back from where the flow lines start and end: the reagent box leads to each class, each class to its own result (${F.map((f) => `${f.from} → ${f.to}`).join(', ')})`, tree.every((t) => t === '11') && F.length === 6]);
    const nh = CLASSES94.map((c) => count(c.f).H ?? 0), left = nh.map((n) => (n ? n - 1 : null));
    out.push([`N–H counted from the formulas: ${CLASSES94.map((c, i) => `${plain(c.f)} ${nh[i]}`).join(', ')}, as the boxes print (two, one, no N–H)`, nh.join() === '2,1,0' && CLASSES94.every((c, i) => c.lines[1] === ['(two N–H)', '(one N–H)', '(no N–H)'][i])]);
    const verdict = left.map((l) => (l === null ? 'no reaction' : l > 0 ? 'soluble' : 'insoluble'));
    out.push([`The sulphonyl group takes one N–H: left over ${left.map((l) => (l === null ? 'none to take' : l)).join(', ')}. An N–H left beside the SO₂ is acidic and forms a salt with KOH, so the 1° sulphonamide dissolves; none left, the 2° one precipitates; no N–H, no reaction`, verdict.join() === CLASSES94.map((c) => c.out).join() && boxText(s, 'soluble').includes('SOLUBLE') && boxText(s, 'insoluble').includes('INSOLUBLE') && boxText(s, 'no reaction').startsWith('no reaction')]);
    EQ94.forEach(({ step, eq }) => out.push([`${step}: ${eqLine(eq)} balances for atoms and charge`, balances(eq)]));
    out.push([`Every box reads as printed: ${['reagent', ...CLASSES94.flatMap((c) => [c.id, c.out])].map((id) => boxText(s, id)).join(' · ')}`, boxText(s, 'reagent') === 'amine + C6H5SO2Cl (Hinsberg reagent), then KOH' && CLASSES94.every((c) => boxText(s, c.out) === c.res.join(' '))]);
    out.push(['The notes as printed: N–H remains: salt forms · no N–H left after sulphonylation · no N–H to substitute; and solubility in alkali distinguishes 1° from 2°; 3° does not react', CLASSES94.every((c) => c.note.every((t) => hasLabel(s, t))) && hasLabel(s, 'solubility in alkali distinguishes 1° from 2°;') && hasLabel(s, '3° does not react')]);
    out.push([`One highlight: the ${highlighted(s).join()} box`, highlighted(s).join() === 'soluble']);
    out.push(...chartClear(s), labelsApart(s), inFrame(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.5 · the diazonium wheel (Topic 03, p. 449)                    */
/* ===================================================================== */
const CAP95 = 'The diazonium wheel: benzenediazonium chloride at the hub, spokes to ArCl, ArBr, ArCN, ArI, ArF, ArOH, ArH, ArNO<sub>2</sub> and azo dyes.';
const HUB95: Rect = [115, 168, 225, 232];
const DZ = 'C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>', CL = 'Cl<sup>−</sup>', BF4 = 'BF<sub>4</sub><sup>−</sup>', N2 = 'N<sub>2</sub>';
type Spoke = { id: string; text: string; at: P; tail: P; tip: P; reagent: string[]; rx: number; ry: number; anchor: 'start' | 'middle' | 'end'; ar: string[]; eqs: [Side, Side][]; hi?: boolean };
/**
 * p. 449, clockwise from the top, each product and its reagent as printed. `at` is the product box's centre; the
 * spoke runs from the hub's border (`tail`) to the box's (`tip`). `ar` = the product written with Ar = C₆H₅, and
 * `eqs` the text's equations for that spoke (p. 451, balanced; the nitro spoke via the fluoroborate, as p. 450 says).
 */
const SPOKES: Spoke[] = [
  { id: 'Ar–OH', text: 'Ar–OH', at: [170, 44], tail: [170, 168], tip: [170, 56], reagent: ['warm H<sub>2</sub>O'], rx: 165, ry: 118, anchor: 'end', ar: ['C<sub>6</sub>H<sub>5</sub>OH'], eqs: [[[[1, DZ], [1, CL], [1, 'H<sub>2</sub>O']], [[1, 'C<sub>6</sub>H<sub>5</sub>OH'], [1, N2], [1, 'HCl']]]] },
  { id: 'Ar–Cl / Ar–Br', text: 'Ar–Cl / Ar–Br', at: [276, 90], tail: [212, 168], tip: [250, 102], reagent: ['CuX', '(Sandmeyer)'], rx: 250, ry: 133, anchor: 'start', ar: ['C<sub>6</sub>H<sub>5</sub>Cl', 'C<sub>6</sub>H<sub>5</sub>Br'], eqs: [[[[1, DZ], [1, CL]], [[1, 'C<sub>6</sub>H<sub>5</sub>Cl'], [1, N2]]], [[[1, DZ], [1, CL], [1, 'HBr']], [[1, 'C<sub>6</sub>H<sub>5</sub>Br'], [1, N2], [1, 'HCl']]]] },
  { id: 'Ar–CN', text: 'Ar–CN', at: [306, 200], tail: [225, 200], tip: [278.5, 200], reagent: ['CuCN'], rx: 250, ry: 193, anchor: 'middle', ar: ['C<sub>6</sub>H<sub>5</sub>CN'], eqs: [[[[1, DZ], [1, CL], [1, 'KCN']], [[1, 'C<sub>6</sub>H<sub>5</sub>CN'], [1, N2], [1, 'KCl']]]] },
  { id: 'Ar–I', text: 'Ar–I', at: [246, 300], tail: [210, 232], tip: [232, 288], reagent: ['KI'], rx: 233, ry: 262, anchor: 'start', ar: ['C<sub>6</sub>H<sub>5</sub>I'], eqs: [[[[1, DZ], [1, CL], [1, 'KI']], [[1, 'C<sub>6</sub>H<sub>5</sub>I'], [1, N2], [1, 'KCl']]]] },
  { id: 'Ar–H', text: 'Ar–H', at: [170, 300], tail: [170, 232], tip: [170, 288], reagent: ['H<sub>3</sub>PO<sub>2</sub>'], rx: 178, ry: 264, anchor: 'start', ar: ['C<sub>6</sub>H<sub>6</sub>'], eqs: [[[[1, DZ], [1, CL], [1, 'H<sub>3</sub>PO<sub>2</sub>'], [1, 'H<sub>2</sub>O']], [[1, 'C<sub>6</sub>H<sub>6</sub>'], [1, N2], [1, 'H<sub>3</sub>PO<sub>3</sub>'], [1, 'HCl']]]] },
  { id: 'Ar–F', text: 'Ar–F', at: [94, 300], tail: [130, 232], tip: [108, 288], reagent: ['HBF<sub>4</sub>, then Δ', '(Balz–Schiemann)'], rx: 108, ry: 246, anchor: 'end', ar: ['C<sub>6</sub>H<sub>5</sub>F'], eqs: [[[[1, DZ], [1, CL], [1, 'HBF<sub>4</sub>']], [[1, DZ], [1, BF4], [1, 'HCl']]], [[[1, DZ], [1, BF4]], [[1, 'C<sub>6</sub>H<sub>5</sub>F'], [1, N2], [1, 'BF<sub>3</sub>']]]] },
  { id: 'Ar–NO2', text: 'Ar–NO<sub>2</sub>', at: [36, 200], tail: [115, 200], tip: [66, 200], reagent: ['NaNO<sub>2</sub> /', 'Cu'], rx: 90, ry: 178, anchor: 'middle', ar: ['C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub>'], eqs: [[[[1, DZ], [1, BF4], [1, 'NaNO<sub>2</sub>']], [[1, 'C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub>'], [1, N2], [1, 'NaBF<sub>4</sub>']]]] },
  { id: 'Ar–N=N–Ar′', text: 'Ar–N=N–Ar′', at: [66, 90], tail: [128, 168], tip: [92, 102], reagent: ['phenol /', 'aniline'], rx: 94, ry: 131, anchor: 'end', ar: ['C<sub>6</sub>H<sub>5</sub>N=NC<sub>6</sub>H<sub>4</sub>OH', 'C<sub>6</sub>H<sub>5</sub>N=NC<sub>6</sub>H<sub>4</sub>NH<sub>2</sub>'], eqs: [[[[1, DZ], [1, CL], [1, 'C<sub>6</sub>H<sub>5</sub>OH'], [1, 'OH<sup>−</sup>']], [[1, 'C<sub>6</sub>H<sub>5</sub>N=NC<sub>6</sub>H<sub>4</sub>OH'], [1, CL], [1, 'H<sub>2</sub>O']]], [[[1, DZ], [1, CL], [1, 'C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>']], [[1, 'C<sub>6</sub>H<sub>5</sub>N=NC<sub>6</sub>H<sub>4</sub>NH<sub>2</sub>'], [1, 'HCl']]]], hi: true },
];
const SZ95 = 13;
const rect95 = (sp: Spoke): Rect => { const w = widthOf(sp.text, SZ95) * 1.05 + 16; return [sp.at[0] - w / 2, sp.at[1] - 12, sp.at[0] + w / 2, sp.at[1] + 12]; };
/** Where a spoke meets its product box: the first point of the box's border along the line from the hub, through `tip`. */
const tip95 = (sp: Spoke): P => {
  const r = rect95(sp), [x0, y0] = sp.tail, dx = sp.tip[0] - x0, dy = sp.tip[1] - y0;
  const ts = [dx ? (r[0] - x0) / dx : NaN, dx ? (r[2] - x0) / dx : NaN, dy ? (r[1] - y0) / dy : NaN, dy ? (r[3] - y0) / dy : NaN]
    .filter((t) => t > 0 && Number.isFinite(t))
    .filter((t) => { const x = x0 + t * dx, y = y0 + t * dy; return x >= r[0] - 0.01 && x <= r[2] + 0.01 && y >= r[1] - 0.01 && y <= r[3] + 0.01; });
  const t = Math.min(...ts);
  return [x0 + t * dx, y0 + t * dy];
};
const fig95: Diagram = {
  id: 'c12-09-fig-9.5',
  topic: 2,
  name: 'The diazonium wheel',
  cases: [{ chip: 'Eight spokes', cap: CAP95 }],
  draw() {
    const s = new Sketch(W, 370);
    box(s, 'hub', HUB95, [{ html: `Ar–N<sub>2</sub><sup>+</sup>${CL}`, size: 12.5, bold: true }, { html: 'benzenediazonium', size: 11.5, bold: true }, { html: 'chloride', size: 11.5, bold: true }], { edge: C.ink, w: 1.5 });
    SPOKES.forEach((sp) => {
      box(s, sp.id, rect95(sp), [{ html: sp.text, size: SZ95, bold: true, color: sp.hi ? C.amber : C.text }], sp.hi ? { edge: C.mari, w: 1.8 } : { edge: C.ink, w: 1.3 });
      flow(s, [sp.tail, tip95(sp)], `hub>${sp.id}`, sp.hi ? C.mari : C.ink);
      sp.reagent.forEach((t, k) => lab(s, sp.rx, sp.ry + k * 15, t, { anchor: sp.anchor, size: 11.5, color: sp.hi ? C.amber : C.slate }));
    });
    lab(s, W / 2, 342, 'nitro spoke: NaNO<sub>2</sub>/Cu on the fluoroborate, heated', { size: 11.5, color: C.slate });
    lab(s, W / 2, 360, 'marigold branch: azo coupling gives Ar–N=N–Ar′ dyes', { size: 12, color: C.amber });
    return s;
  },
  check() {
    const s = fig95.draw(fig95.cases[0]), out: Check[] = [], F = flowsOf(s);
    out.push([`Read back from where the spokes start and end: all ${F.length} leave the hub and each reaches its own product (${F.map((f) => f.to).join(', ')}); none runs into the hub`, F.length === 8 && F.every((f, i) => f.from === 'hub' && f.to === SPOKES[i].id)]);
    SPOKES.forEach((sp) => {
      const ok = sp.eqs.every(balances) && sp.ar.every((p) => sp.eqs.some(([, r]) => r.some(([, f]) => f === p)));
      out.push([`${plain(sp.text)} (${sp.reagent.map(plain).join(' ')}): ${sp.eqs.map(eqLine).join('; ')}. Atoms and charge balance${sp.eqs.some(([, r]) => r.some(([, f]) => f === N2)) ? ', and N₂ leaves' : ', and the N=N is kept'}`, ok]);
    });
    out.push(['Every replacement spoke loses N₂; only the azo spoke keeps the two nitrogens (coupling), as the text\'s two reaction families say', SPOKES.every((sp) => !!sp.hi === !sp.eqs[sp.eqs.length - 1][1].some(([, f]) => f === N2)) && SPOKES.filter((sp) => sp.hi).every((sp) => sp.ar.every((p) => count(p).N >= 2))]);
    const near = SPOKES.map((sp) => { const ls = sp.reagent.map((t) => labelsNamed(s, plain(t))[0].rect), l: Rect = [Math.min(...ls.map((r) => r[0])), ls[0][1], Math.max(...ls.map((r) => r[2])), ls[ls.length - 1][3]], d = (o: Spoke) => boxToLine(l, [o.tail, tip95(o)]); return SPOKES.every((o) => o === sp || d(sp) < d(o)) && d(sp) < 14; });
    out.push(['Every reagent (its lines taken together) sits beside its own spoke, nearer it than any other and within 14 px', near.every(Boolean)]);
    out.push(['The reagents as printed, with heat added on the HBF₄ spoke: warm H₂O · CuX (Sandmeyer) · CuCN · KI · H₃PO₂ · HBF₄, then Δ (Balz–Schiemann) · NaNO₂ / Cu · phenol / aniline; and the line under the wheel tying the nitro spoke to the fluoroborate', SPOKES.every((sp) => sp.reagent.every((t) => hasLabel(s, plain(t)))) && hasLabel(s, 'nitro spoke: NaNO2/Cu on the fluoroborate, heated')]);
    out.push([`The hub and the eight products as printed: ${boxText(s, 'hub')}; ${SPOKES.map((sp) => boxText(s, sp.id)).join(', ')}`, boxText(s, 'hub') === 'Ar–N2+Cl− benzenediazonium chloride' && SPOKES.every((sp) => boxText(s, sp.id) === plain(sp.text))]);
    out.push([`One highlight: the ${highlighted(s).join()} spoke, which the line under the wheel names`, highlighted(s).join() === 'Ar–N=N–Ar′' && hasLabel(s, 'marigold branch: azo coupling gives Ar–N=N–Ar′ dyes')]);
    out.push(...chartClear(s), labelsApart(s), inFrame(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 9.6 · azo coupling (Topic 03, p. 453)                           */
/* ===================================================================== */
const CAP96 = 'Azo coupling: the diazonium ion, a weak electrophile, attacks the para position of an activated ring such as phenoxide.';
/** Vertex k of a regular hexagon with vertices left and right: k = 0 right, then counter-clockwise; 3 is the left. */
const hexPt = (c: P, r: number, k: number): P => [c[0] + r * Math.cos(rad(60 * k)), c[1] - r * Math.sin(rad(60 * k))];
const circlePts = (c: P, r: number, n = 48): P[] => Array.from({ length: n + 1 }, (_, i): P => [c[0] + r * Math.cos((2 * Math.PI * i) / n), c[1] + r * Math.sin((2 * Math.PI * i) / n)]);
function ring(s: Sketch, c: P, r: number, id: string) {
  path(s, [0, 1, 2, 3, 4, 5, 0].map((k) => hexPt(c, r, k)), { w: 1.8, name: `${id}:ring` });
  path(s, circlePts(c, r * 0.6), { w: 1.4, name: `${id}:circle` });
}
const G96 = { r: 19, y1: 72, y2: 196, A: [40, 72] as P, N1: [80, 72] as P, N2: [114, 72] as P, B: [184, 72] as P, O: [224, 72] as P, plus: [142, 77] as P, Cc: [108, 196] as P, N3: [146, 196] as P, N4: [184, 196] as P, D: [222, 196] as P, OH: [264, 196] as P, arrow: [[8, 196], [74, 196]] as P[] };
const fig96: Diagram = {
  id: 'c12-09-fig-9.6',
  topic: 2,
  name: 'Azo coupling',
  cases: [{ chip: 'Para attack', cap: CAP96 }],
  draw() {
    const s = new Sketch(W, 262), G = G96, r = G.r;
    // the diazonium ion: ring–N≡N, the charge on the nitrogen that carries four bonds
    ring(s, G.A, r, 'A');
    const rN1 = atom(s, G.N1, 'N'), rN2 = atom(s, G.N2, 'N');
    bond(s, hexPt(G.A, r, 0), null, G.N1, rN1, { name: 'A-N1' });
    bond(s, G.N1, rN1, G.N2, rN2, { order: 3, name: 'N1-N2' });
    lab(s, G.N1[0] + 3, G.N1[1] - 14, '+', { size: 15 });
    lab(s, G.plus[0], G.plus[1], '+', { size: 20 });
    // phenoxide, its para carbon facing the diazonium
    ring(s, G.B, r, 'B');
    const rO = atom(s, G.O, 'O');
    bond(s, hexPt(G.B, r, 0), null, G.O, rO, { name: 'B-O' });
    lab(s, G.O[0] + 14, G.O[1] - 11, '−', { size: 15 });
    const para = hexPt(G.B, r, 3);
    s.dot(para[0], para[1], 2.8, C.mari);
    lab(s, para[0] - 4, G.y1 + 34, 'para', { size: 12, color: C.amber });
    curly(s, [para[0] - 2, para[1] - 6], [para[0] - 6, G.y1 - 40], [G.N2[0] + 14, G.y1 - 40], [G.N2[0] + 2, G.N2[1] - 11], { name: 'attack' });
    lab(s, 64, G.y1 + 50, 'benzenediazonium ion', { size: 12, color: C.slate });
    lab(s, 64, G.y1 + 65, '(weak electrophile)', { size: 12, color: C.slate });
    lab(s, 200, G.y1 + 50, 'phenoxide', { size: 12, color: C.slate });
    lab(s, 200, G.y1 + 65, '(activated ring)', { size: 12, color: C.slate });
    // the product, after the arrow
    arrow(s, G.arrow[0], G.arrow[1], { w: 1.8, name: 'react' });
    lab(s, (G.arrow[0][0] + G.arrow[1][0]) / 2, G.y2 - 10, 'para attack', { size: 12, color: C.slate });
    ring(s, G.Cc, r, 'C');
    const rN3 = atom(s, G.N3, 'N', { color: C.amber }), rN4 = atom(s, G.N4, 'N', { color: C.amber }), rOH = atom(s, G.OH, 'OH');
    ring(s, G.D, r, 'D');
    bond(s, hexPt(G.Cc, r, 0), null, G.N3, rN3, { name: 'C-N3' });
    bond(s, G.N3, rN3, G.N4, rN4, { order: 2, color: C.mari, name: 'N3-N4' });
    bond(s, G.N4, rN4, hexPt(G.D, r, 3), null, { name: 'N4-D' });
    bond(s, hexPt(G.D, r, 0), null, G.OH, rOH, { name: 'D-OH' });
    lab(s, (G.N3[0] + G.N4[0]) / 2, G.y2 + 34, 'azo bridge –N=N–', { size: 12, color: C.amber });
    lab(s, (G.Cc[0] + G.OH[0]) / 2, G.y2 + 52, 'p-hydroxyazobenzene', { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig96.draw(fig96.cases[0]), out: Check[] = [], G = G96, r = G.r;
    const b = (n: string) => linesOf(s, n);
    const q = { N1: formal(5, 0, b('A-N1') + b('N1-N2')), N2: formal(5, 1, b('N1-N2')), O: formal(6, 3, b('B-O')), N3: formal(5, 1, b('C-N3') + b('N3-N4')), N4: formal(5, 1, b('N3-N4') + b('N4-D')), OH: formal(6, 2, b('D-OH') + 1) };
    out.push([`Formal charges from the bonds drawn: the ring nitrogen 5 − 0 − ${b('A-N1') + b('N1-N2')} = +${q.N1}, the end nitrogen 5 − 2 − ${b('N1-N2')} = ${q.N2}, the phenoxide O 6 − 6 − 1 = ${fmt(q.O, 0)}; in the product both azo N and the O of OH are 0. Charge ${q.N1 + q.N2 + q.O} on the left, 0 on the right`, b('N1-N2') === 3 && q.N1 === 1 && q.N2 === 0 && q.O === -1 && q.N3 === 0 && q.N4 === 0 && q.OH === 0]);
    const plus = labelsNamed(s, '+').map((l) => centre(l.rect)).filter((p) => p[0] < 120)[0], minus = centre(labelsNamed(s, '−')[0].rect);
    out.push(['The + stands at the outer corner of the nitrogen bonded to the ring (the one with four bonds), the − at the phenoxide oxygen\'s, each clear of its letter', len(plus, G.N1) < len(plus, G.N2) && plus[1] < G.N1[1] - 6 && len(minus, G.O) < 24 && minus[0] > G.O[0]]);
    const left = sum(count('C<sub>6</sub>H<sub>5</sub>N<sub>2</sub>'), count('C<sub>6</sub>H<sub>5</sub>O')), right = count('HOC<sub>6</sub>H<sub>4</sub>N<sub>2</sub>C<sub>6</sub>H<sub>5</sub>');
    out.push([`C₆H₅N₂⁺ + C₆H₅O⁻ → HO–C₆H₄–N=N–C₆H₅: ${tallyText(left)} on both sides; the ring H displaced at the para carbon ends on the oxygen`, same(left, right)]);
    const opposite = (c: P, a: P, o: P) => { const ka = [0, 1, 2, 3, 4, 5].find((k) => len(hexPt(c, r, k), a) < 1e-6)!, ko = [0, 1, 2, 3, 4, 5].find((k) => len(hexPt(c, r, k), o) < 1e-6)!; return Math.abs(ka - ko) === 3; };
    out.push(['Para: the attacked carbon is opposite the O-bearing carbon in the phenoxide, and in the product the azo N and the OH stand on opposite carbons of that ring', opposite(G.B, hexPt(G.B, r, 3), lineOf(s, 'B-O')[0]) && opposite(G.D, lineOf(s, 'N4-D')[1], lineOf(s, 'D-OH')[0])]);
    const tail = tailOf(s, 'attack'), tip = tipOf(s, 'attack'), para = hexPt(G.B, r, 3);
    out.push([`The curly arrow runs from the para carbon (${fmt(len(tail, para), 1)} px off it) to the end nitrogen (${fmt(rectDist(labelsNamed(s, 'N')[1].rect, tip), 1)} px off its letter), not the ring nitrogen: the ring's electrons attack the electrophilic terminal N`, len(tail, para) < 8 && len(tip, G.N2) < len(tip, G.N1) && rectDist(labelsNamed(s, 'N')[1].rect, tip) < 6]);
    out.push(['N≡N drawn triple in the ion, N=N double in the product; four regular rings, each with its aromatic circle', b('N1-N2') === 3 && b('N3-N4') === 2 && ['A', 'B', 'C', 'D'].every((id) => hasLine(s, `${id}:ring`) && hasLine(s, `${id}:circle`))]);
    out.push(['The labels as printed: para, para attack, benzenediazonium ion (weak electrophile), phenoxide (activated ring), azo bridge –N=N–, p-hydroxyazobenzene, OH, O, the + and −', ['para', 'para attack', 'benzenediazonium ion', '(weak electrophile)', 'phenoxide', '(activated ring)', 'azo bridge –N=N–', 'p-hydroxyazobenzene', 'OH', 'O', '−'].every((t) => hasLabel(s, t)) && labelsNamed(s, '+').length === 2]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* "Figure 1" · aqueous pKb values (Additional A, p. 464)                 */
/* ===================================================================== */
const CAPA1 = 'Aqueous p<i>K</i><sub>b</sub> values from NCERT Table 13.3 (smaller p<i>K</i><sub>b</sub> = stronger base). Solid bars are aliphatic amines and ammonia; dashed bars are arylamines, whose lone pair is delocalised into the ring; the marigold bar is benzylamine, whose –CH<sub>2</sub>– spacer insulates the nitrogen from the ring and keeps it about as basic as ammonia.';
type Bar = { id: string; pKb: number; kind: 'aryl' | 'aliphatic' | 'ammonia' | 'benzyl' };
/** p. 464, top to bottom, as printed; values as printed at each bar, the text's (p. 464) and Topic 02's table (p. 440). */
const BARS: Bar[] = [
  { id: 'Aniline (benzenamine)', pKb: 9.38, kind: 'aryl' }, { id: 'N-Methylaniline', pKb: 9.3, kind: 'aryl' }, { id: 'N,N-Dimethylaniline', pKb: 8.92, kind: 'aryl' },
  { id: 'Ammonia', pKb: 4.75, kind: 'ammonia' }, { id: 'Benzylamine (phenylmethanamine)', pKb: 4.7, kind: 'benzyl' }, { id: 'N,N-Dimethylmethanamine (3°)', pKb: 4.22, kind: 'aliphatic' },
  { id: 'Methanamine (1°)', pKb: 3.38, kind: 'aliphatic' }, { id: 'Ethanamine (1°)', pKb: 3.29, kind: 'aliphatic' }, { id: 'N-Methylmethanamine (2°)', pKb: 3.27, kind: 'aliphatic' }, { id: 'N-Ethylethanamine (2°)', pKb: 3.0, kind: 'aliphatic' },
];
/** p. 464, path data: the axis at 167.843, 31.7617 units per 2 pKb; bar ends top to bottom; the dashed ammonia line. */
const BOOKA1 = { x0: 167.842995, per2: 31.761719, ends: [316.800026, 315.530495, 309.495339, 243.276589, 242.479714, 234.85862, 221.518776, 220.089089, 219.772683, 215.48362], line: 243.276589 };
/** Topic 02's table (p. 440) and the text (p. 464) also give N,N-diethylethanamine, 3.25, which the figure leaves out. */
const TEXT_ONLY = { id: 'N,N-Diethylethanamine (3°)', pKb: 3.25 };
const GA1 = { x0: 172, k: 14, top: 30, pitch: 21, bar: 12, sz: 10.5, max: 11.2 };
const XA1 = (p: number) => GA1.x0 + p * GA1.k;
const AXA1 = GA1.top + BARS.length * GA1.pitch + 2;
const figAd1: Diagram = {
  id: 'c12-09-A-d1',
  topic: 4,
  name: 'Aqueous pKb values',
  cases: [{ chip: 'pKb values', cap: CAPA1 }],
  draw() {
    const G = GA1, s = new Sketch(W, 288), xl = XA1(4.75);
    path(s, [[G.x0, G.top - 6], [G.x0, AXA1], [XA1(G.max), AXA1]], { color: C.slate, w: 1.2, name: 'axes' });
    for (let v = 0; v <= 10; v += 2) {
      path(s, [[XA1(v), AXA1], [XA1(v), AXA1 + 4]], { color: C.slate, w: 1.2, name: `tick:${v}` });
      lab(s, XA1(v), AXA1 + 17, String(v), { size: 11, color: C.slate });
    }
    lab(s, XA1(5), AXA1 + 36, 'p<i>K</i><sub>b</sub>  (smaller = stronger base)', { size: 12 });
    // the ammonia line
    path(s, [[xl, 12], [xl, AXA1]], { color: C.slate, w: 1.3, dash: true, name: 'ammonia' });
    lab(s, xl + 5, 20, 'ammonia', { anchor: 'start', size: 11, color: C.slate });
    BARS.forEach((b, i) => {
      const y = G.top + i * G.pitch, x = XA1(b.pKb), hi = b.kind === 'benzyl', aryl = b.kind === 'aryl';
      path(s, [[G.x0, y], [x, y], [x, y + G.bar], [G.x0, y + G.bar]], { color: hi ? C.mari : aryl ? C.slate : C.ink, w: hi ? 1.9 : aryl ? 1.5 : 1.6, dash: aryl, name: `bar:${b.id}` });
      lab(s, G.x0 - 6, y + G.bar / 2 + 4, b.id, { anchor: 'end', size: G.sz, color: hi ? C.amber : aryl ? C.slate : C.text });
      // the values of bars that end short of the ammonia line stand in one column just past it
      const vx = Math.max(x, xl) + 5;
      lab(s, vx, y + G.bar / 2 + 4, b.pKb.toFixed(2), { anchor: 'start', size: G.sz, color: hi ? C.amber : C.text });
    });
    return s;
  },
  check() {
    const s = figAd1.draw(figAd1.cases[0]), G = GA1, out: Check[] = [];
    const read = BARS.map((b) => (lineOf(s, `bar:${b.id}`)[1][0] - G.x0) / G.k);
    out.push([`Each bar read back off the drawing: ${BARS.map((b, i) => `${b.id} ${fmt(read[i], 2)}`).join(', ')}, labelled as printed`, BARS.every((b, i) => close(read[i], b.pKb, 1e-9) && hasLabel(s, b.pKb.toFixed(2)))]);
    const book = BOOKA1.ends.map((x) => ((x - BOOKA1.x0) / BOOKA1.per2) * 2), line = ((BOOKA1.line - BOOKA1.x0) / BOOKA1.per2) * 2;
    out.push([`The book's bars, from p. 464's path data, end at ${book.map((p) => fmt(p, 3)).join(', ')} and its dashed line at ${fmt(line, 3)}: each within 0.002 of the value drawn here`, book.every((p, i) => close(p, BARS[i].pKb, 0.002)) && close(line, 4.75, 0.002) && close((lineOf(s, 'ammonia')[0][0] - G.x0) / G.k, 4.75, 1e-9)]);
    out.push(['Top to bottom in the book\'s order, pKb falling all the way: the weakest base at the top, the strongest at the bottom', BARS.every((b, i) => i === 0 || b.pKb < BARS[i - 1].pKb)]);
    const pk = (id: string) => BARS.find((b) => b.id.startsWith(id))!.pKb, am = pk('Ammonia');
    out.push([`Against ammonia (${am}): every arylamine is weaker (${BARS.filter((b) => b.kind === 'aryl').map((b) => b.pKb).join(', ')}), every aliphatic amine stronger, and benzylamine (${pk('Benzylamine')}) just stronger, basic like ammonia`, BARS.filter((b) => b.kind === 'aryl').every((b) => b.pKb > am) && BARS.filter((b) => b.kind === 'aliphatic' || b.kind === 'benzyl').every((b) => b.pKb < am)]);
    const tri = TEXT_ONLY.pKb;
    out.push([`The aqueous orders the chapter prints hold on these values: methyl (CH₃)₂NH ${pk('N-Methylmethanamine')} < CH₃NH₂ ${pk('Methanamine')} < (CH₃)₃N ${pk('N,N-Dimethylmethanamine')} < NH₃ ${am}; ethyl (C₂H₅)₂NH ${pk('N-Ethylethanamine')} < (C₂H₅)₃N ${tri} (the text's value; not a bar) < C₂H₅NH₂ ${pk('Ethanamine')} < NH₃`, pk('N-Methylmethanamine') < pk('Methanamine') && pk('Methanamine') < pk('N,N-Dimethylmethanamine') && pk('N,N-Dimethylmethanamine') < am && pk('N-Ethylethanamine') < tri && tri < pk('Ethanamine') && pk('Ethanamine') < am && !BARS.some((b) => b.id === TEXT_ONLY.id)]);
    const gap = pk('Aniline') - pk('Methanamine'), ratio = 10 ** -gap;
    out.push([`The text's three lessons: aniline − methanamine = ${fmt(gap, 2)} log units, so aniline's Kb is ${ratio.toExponential(0)} of methylamine's; benzylamine ${pk('Benzylamine')} sits by ammonia ${am}; N,N-dimethylaniline ${pk('N,N-Dimethylaniline')} is more basic than aniline ${pk('Aniline')}`, close(gap, 6, 1e-9) && Math.abs(pk('Benzylamine') - am) < 0.1 && pk('N,N-Dimethylaniline') < pk('Aniline')]);
    const kinds = BARS.map((b) => (b.kind === 'benzyl' ? 'marigold' : b.kind === 'aryl' ? 'dashed' : 'solid'));
    out.push([`The caption's key matches the bars: solid for the aliphatic amines and ammonia, dashed for the three arylamines, marigold for benzylamine (${kinds.join(', ')})`, kinds.filter((k) => k === 'dashed').length === 3 && kinds.filter((k) => k === 'marigold').length === 1 && CAPA1.includes('Solid bars') && CAPA1.includes('dashed bars') && CAPA1.includes('marigold bar') && !/navy|teal|slate/i.test(CAPA1)]);
    out.push(['The axis runs 0–10 in steps of 2, as printed, and every bar ends inside it; the labels as printed: ammonia, pKb (smaller = stronger base), the ten names', BARS.every((b) => b.pKb < G.max) && [0, 2, 4, 6, 8, 10].every((v) => hasLabel(s, String(v))) && ['ammonia', 'pKb  (smaller = stronger base)', ...BARS.map((b) => b.id)].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_12_09: Diagram[] = [fig91, fig92, fig93, fig94, fig95, fig96, figAd1];

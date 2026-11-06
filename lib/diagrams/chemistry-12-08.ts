import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 12, CHAPTER 8 (Aldehydes, Ketones and Carboxylic Acids): every drawing of the Master
 * Reference book on pp. 367–425, redrawn. Every page's vector shapes were counted (only pp. 370, 372, 379,
 * 388, 396 and 410 hold a curve or a slanted line, and no page has a raster image). SIX drawings on six pages:
 *
 *   Figure 8.1 (p. 370; caption first on p. 369) — Topic 01, topic index 0.
 *   Figure 8.2 (p. 372; caption first on p. 371) — Topic 01, index 0.
 *   Figure 8.3 (p. 379; caption first on p. 378) — Topic 02, index 1.
 *   Figure 8.4 (p. 388; caption first on p. 387) — Topic 03, index 2.
 *   Figure 8.5 (p. 396; caption first on p. 395) — Topic 04, index 3.
 *   "Figure 1" (p. 410, unnumbered in the chapter's series) — Additional topic C, index 6.
 *
 * THE BOOK'S NUMBERS. Fig 8.1's three 120° angles are the book's (its path data put each C–R bond 29.9°
 * below the horizontal). Figs 8.2 and 8.4 are drawn at the same ideal 120°: the book's own bonds are
 * schematic there (Fig 8.2's R–C–R′ is 113°, Fig 8.4's O–C–O 77°). Fig 8.5 carries no numbers; its check
 * reads the order against the table on p. 397. "Figure 1" carries none either. Every layout is re-laid for
 * a phone: Fig 8.4's hybrid moves under the two forms, Fig 8.5's dimer under the ladder.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const rad = (deg: number) => (deg * Math.PI) / 180;
/** The point r from c in direction deg (counter-clockwise from +x, y up). */
const az = (c: P, deg: number, r: number): P => [c[0] + r * Math.cos(rad(deg)), c[1] - r * Math.sin(rad(deg))];
/** The direction of b from a, 0–360 (counter-clockwise from +x, y up). */
const azOf = (a: P, b: P) => ((Math.atan2(a[1] - b[1], b[0] - a[0]) * 180) / Math.PI + 360) % 360;
const azGap = (x: number, y: number) => { const d = (((x - y) % 360) + 360) % 360; return Math.min(d, 360 - d); };
const mid = (a: P, b: P): P => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const centre = (r: Rect): P => [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2];

/* ---------- drawing helpers (as in chemistry-12-07.ts and 12-06.ts) ---------- */
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
/** A double-headed resonance arrow (↔), from its middle to both ends. */
function both(s: Sketch, a: P, b: P, o: Stroke = {}) {
  const m = mid(a, b);
  s.vec(m[0], m[1], a[0], a[1], { color: o.color, w: o.w });
  s.vec(m[0], m[1], b[0], b[1], { color: o.color, w: o.w });
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
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}) {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  s.labels.push({ text: plain(html), rect: [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)] });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text });
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
/**
 * A bond: single, double (two lines either side of the axis), or partial (`order: 1.5`, a solid line and a
 * dashed one, the dash on the side `toward` points to). Each line is kept under the bond's name, ":1"/":2".
 */
function bond(s: Sketch, A: P, ra: Rect | null, B: P, rb: Rect | null, o: Stroke & { order?: 1 | 1.5 | 2; toward?: P } = {}) {
  const order = o.order ?? 1;
  const [p, q] = ends(A, ra, B, rb, LABEL_GAP + (order === 1 ? 0.5 : 2));
  if (order === 1) { path(s, [p, q], o); return; }
  const L = len(p, q);
  let n: P = [(-(q[1] - p[1]) / L) * 2.4, ((q[0] - p[0]) / L) * 2.4];
  if (o.toward) { const m = mid(p, q); if ((o.toward[0] - m[0]) * n[0] + (o.toward[1] - m[1]) * n[1] > 0) n = [-n[0], -n[1]]; }
  path(s, [[p[0] + n[0], p[1] + n[1]], [q[0] + n[0], q[1] + n[1]]], { ...o, name: `${o.name}:1` });
  path(s, [[p[0] - n[0], p[1] - n[1]], [q[0] - n[0], q[1] - n[1]]], { ...o, name: `${o.name}:2`, dash: order === 1.5, color: order === 1.5 ? C.slate : o.color, w: order === 1.5 ? 1.5 : o.w });
}
/** How many lines a bond was drawn with: 1 single, 2 double; a partial bond has its second line dashed. */
const linesOf = (s: Sketch, name: string) => (hasLine(s, name) ? 1 : hasLine(s, `${name}:1`) && hasLine(s, `${name}:2`) ? 2 : 0);
/** The direction a bond runs, read back from its drawn line(s). */
const dirOf = (s: Sketch, name: string) => {
  if (hasLine(s, name)) { const [a, b] = lineOf(s, name); return azOf(a, b); }
  const [a1, b1] = lineOf(s, `${name}:1`), [a2, b2] = lineOf(s, `${name}:2`);
  return azOf(mid(a1, a2), mid(b1, b2));
};
/** Formal charge: valence electrons − lone-pair electrons − bonds. */
const formal = (valence: number, lonePairs: number, bonds: number) => valence - 2 * lonePairs - bonds;

/* ---------- formulas: what a species holds ---------- */
type Tally = Record<string, number>;
const sum = (...t: Tally[]) => { const o: Tally = {}; t.forEach((m) => Object.entries(m).forEach(([k, v]) => { o[k] = (o[k] ?? 0) + v; })); return o; };
const times = (t: Tally, n: number) => { const o: Tally = {}; Object.entries(t).forEach(([k, v]) => { o[k] = v * n; }); return o; };
const same = (a: Tally, b: Tally) => { const k = new Set([...Object.keys(a), ...Object.keys(b)]); return [...k].every((e) => (a[e] ?? 0) === (b[e] ?? 0)); };
/** The atoms in a formula as printed ("CH<sub>3</sub>COCH<sub>3</sub>", "[Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>"); charges skipped. "R" is its own symbol. */
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
/** Charge as printed in a superscript: "+", "−", "2+". */
const chargeOf = (html: string) => { const m = html.match(/<sup>(\d*)([+−])<\/sup>/); return m ? (m[2] === '+' ? 1 : -1) * (m[1] ? +m[1] : 1) : 0; };
type Side = [number, string][];
const sideAtoms = (side: Side) => sum(...side.map(([n, f]) => times(count(f), n)));
const sideCharge = (side: Side) => side.reduce((q, [n, f]) => q + n * chargeOf(f), 0);
const tallyText = (t: Tally) => Object.entries(t).filter(([, v]) => v).map(([k, v]) => `${k}${v === 1 ? '' : v}`).join(' ');
const MASS: Record<string, number> = { C: 12.011, H: 1.008, O: 15.999 };
const massOf = (t: Tally) => Object.entries(t).reduce((m, [k, v]) => m + MASS[k] * v, 0);
const eqText = (side: Side) => side.map(([n, f]) => `${n > 1 ? `${n} ` : ''}${plain(f)}`).join(' + ');

/* ---------- boxes and flow lines (Figures 8.3, 8.5 and the identification chain) ---------- */
type Line = { html: string; size?: number; color?: string; bold?: boolean };
type Box = { id: string; rect: Rect; lines: Line[] };
const BOXES = new WeakMap<Sketch, Box[]>();
const FLOWS = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const LH = 16;
/** A box of STIX lines; with `lead`, a leader line and dot from the box's nearest edge point to `lead`. */
function box(s: Sketch, id: string, rect: Rect, lines: Line[], o: { edge?: string; w?: number; lead?: P; from?: P } = {}) {
  BOXES.set(s, [...(BOXES.get(s) ?? []), { id, rect, lines }]);
  s.add(`<rect x="${r1(rect[0])}" y="${r1(rect[1])}" width="${r1(rect[2] - rect[0])}" height="${r1(rect[3] - rect[1])}" rx="9" fill="#fff" stroke="${o.edge ?? C.slate}" stroke-width="${o.w ?? 1.2}"/>`);
  let from: P | null = null, to: P | null = null;
  if (o.lead && o.from) {
    from = o.lead; to = o.from;
    s.add(`<line x1="${r1(to[0])}" y1="${r1(to[1])}" x2="${r1(from[0])}" y2="${r1(from[1])}" stroke="${o.edge ?? C.grey}" stroke-width="1.2"/><circle cx="${r1(from[0])}" cy="${r1(from[1])}" r="2.6" fill="${o.edge ?? C.ink}"/>`);
  }
  s.tags.push({ name: id, rect, from, to });
  const x = (rect[0] + rect[2]) / 2, y0 = (rect[1] + rect[3]) / 2 - ((lines.length - 1) * LH) / 2;
  lines.forEach((l, i) => s.text(x, y0 + i * LH + (l.size ?? 12) * 0.34, l.html, { size: l.size ?? 12, color: l.color ?? C.text, semibold: l.bold }));
}
/** A flow line from one box border to another, with a head at its end. */
function flow(s: Sketch, pts: P[], name: string) {
  const b = pts[pts.length - 1], a = pts[pts.length - 2], L = len(a, b), ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L, HL = 8, HW = 3.8;
  const base: P = [b[0] - ux * HL, b[1] - uy * HL];
  const shaft = [...pts.slice(0, -1), base].map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${shaft}" fill="none" stroke="${C.ink}" stroke-width="1.4" stroke-linejoin="round"/>`);
  s.add(`<path d="M${r1(b[0])} ${r1(b[1])} L${r1(base[0] - uy * HW)} ${r1(base[1] + ux * HW)} L${r1(base[0] + uy * HW)} ${r1(base[1] - ux * HW)} Z" fill="${C.ink}"/>`);
  FLOWS.set(s, [...(FLOWS.get(s) ?? []), { name, pts }]);
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
/** The one highlight: boxes edged in marigold. */
const highlighted = (s: Sketch) => (BOXES.get(s) ?? []).filter((b) => b.lines.some((l) => l.color === C.amber)).map((b) => b.id);

/* ===================================================================== */
/* Figure 8.1 · the polar carbonyl group (Topic 01, p. 370)               */
/* ===================================================================== */
const CAP81 = 'The polar carbonyl group: trigonal planar carbon, <i>δ</i>+ on C and <i>δ</i>− on O, π electrons shifted toward oxygen.';
/** Pauling electronegativities, for which end of C=O is δ−. */
const CHI = { C: 2.55, O: 3.44 };
const G81 = { c: [150, 100] as P, L: 66, ang: 52, dm: [126, 42] as P, dp: [173, 95] as P };
const fig81: Diagram = {
  id: 'c12-08-fig-8.1',
  topic: 0,
  name: 'The polar carbonyl group',
  cases: [{ chip: 'C=O', cap: CAP81 }],
  draw() {
    const s = new Sketch(W, 200), G = G81, c = G.c;
    const O = az(c, 90, G.L), R = az(c, 210, G.L), R2 = az(c, 330, G.L);
    const rc = atom(s, c, 'C'), ro = atom(s, O, 'O'), rr = atom(s, R, 'R'), rr2 = atom(s, R2, 'R′');
    bond(s, c, rc, O, ro, { order: 2, name: 'CO' });
    bond(s, c, rc, R, rr, { name: 'CR' });
    bond(s, c, rc, R2, rr2, { name: 'CR2' });
    // the three angles, each on its sector's bisector, as printed
    [150, 30, 270].forEach((d) => { const p = az(c, d, G.ang); lab(s, p[0], p[1] + 4, '120°', { size: 12, color: C.slate }); });
    // the partial charges and the π shift: the highlight
    lab(s, G.dm[0], G.dm[1], '<i>δ</i><sup>−</sup>', { size: 16, color: C.amber });
    lab(s, G.dp[0], G.dp[1], '<i>δ</i><sup>+</sup>', { size: 16, color: C.amber });
    curly(s, [154.6, 82], [167, 74], [168, 54], [161, 43], { name: 'pi' });
    lab(s, 182, 46, 'π electrons drift', { anchor: 'start', size: 12.5, color: C.amber });
    lab(s, 182, 62, 'toward O', { anchor: 'start', size: 12.5, color: C.amber });
    lab(s, c[0] + 10, 188, 'trigonal planar carbonyl carbon (sp<sup>2</sup>)', { size: 13, color: C.slate });
    return s;
  },
  check() {
    const s = fig81.draw(fig81.cases[0]), out: Check[] = [], c = G81.c;
    const d = { CO: dirOf(s, 'CO'), CR: dirOf(s, 'CR'), CR2: dirOf(s, 'CR2') };
    const a = [azGap(d.CO, d.CR), azGap(d.CO, d.CR2), azGap(d.CR, d.CR2)];
    out.push([`Angles read back off the bonds: O=C–R ${fmt(a[0], 1)}°, O=C–R′ ${fmt(a[1], 1)}°, R–C–R′ ${fmt(a[2], 1)}°, summing to ${fmt(a[0] + a[1] + a[2], 1)}°: trigonal planar, as the book's own bonds (p. 370, 29.9° below the horizontal) give`, a.every((x) => close(x, 120, 1e-6)) && close(a[0] + a[1] + a[2], 360, 1e-6) && close(Math.atan2(32.339436, 56.332226) * 180 / Math.PI, 29.86, 0.01)]);
    const secs = [[d.CO, d.CR], [d.CO, d.CR2], [d.CR, d.CR2]].map(([x, y]) => { const m = (x + y) / 2; return azGap(m, x) <= 90 ? m : m + 180; });
    const marks = labelsNamed(s, '120°').map((l) => azOf(c, [(l.rect[0] + l.rect[2]) / 2, (l.rect[1] + l.rect[3]) / 2]));
    out.push([`Each “120°” sits on its own sector's bisector (${marks.map((m) => fmt(m, 0)).join('°, ')}°)`, marks.length === 3 && secs.every((b) => marks.some((m) => azGap(m, b) < 4))]);
    const bonds = { C: linesOf(s, 'CO') + linesOf(s, 'CR') + linesOf(s, 'CR2'), O: linesOf(s, 'CO') };
    out.push([`C=O drawn double, C–R and C–R′ single: carbon makes ${bonds.C} bonds (formal charge ${formal(4, 0, bonds.C)}), oxygen ${bonds.O} with two lone pairs (formal charge ${formal(6, 2, bonds.O)}): a neutral group`, bonds.C === 4 && formal(4, 0, bonds.C) === 0 && formal(6, 2, bonds.O) === 0]);
    const O = az(c, 90, G81.L), dm = labelsNamed(s, 'δ−')[0].rect, dp = labelsNamed(s, 'δ+')[0].rect;
    out.push([`Oxygen is the more electronegative (${CHI.O} against ${CHI.C}), so δ− stands by O (${fmt(rectDist(dm, O), 1)} px) and δ+ by C (${fmt(rectDist(dp, c), 1)} px), each nearer its own atom`, CHI.O > CHI.C && rectDist(dm, O) < rectDist(dm, c) && rectDist(dp, c) < rectDist(dp, O)]);
    const tail = tailOf(s, 'pi'), tip = tipOf(s, 'pi'), onCO = Math.min(pointToLine(tail, lineOf(s, 'CO:1')), pointToLine(tail, lineOf(s, 'CO:2')));
    out.push([`The curly arrow starts on the C=O bond (${fmt(onCO, 1)} px off it) and ends at O (${fmt(rectDist(labelsNamed(s, 'O')[0].rect, tip), 1)} px off its letter): the π electrons shift toward oxygen`, onCO < 3 && rectDist(labelsNamed(s, 'O')[0].rect, tip) < 8 && len(tip, O) < len(tip, c)]);
    out.push(['The labels as printed: δ−, δ+, the three 120°, π electrons drift toward O, trigonal planar carbonyl carbon (sp²), C, O, R, R′', ['δ−', 'δ+', '120°', 'π electrons drift', 'toward O', 'trigonal planar carbonyl carbon (sp2)', 'C', 'O', 'R', 'R′'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8.2 · carbonyl resonance (Topic 01, p. 372)                     */
/* ===================================================================== */
const CAP82 = 'Carbonyl resonance: the neutral C=O structure and the dipolar C<sup>+</sup>–O<sup>−</sup> structure.';
const G82 = { c: [[70, 112], [270, 112]] as P[], L: 46, arrow: [[128, 92], [212, 92]] as P[], name: 168 };
/** One contributor: the same four atoms at the same places; only the C–O bond order differs. */
function carbonyl(s: Sketch, c: P, id: string, order: 1 | 2) {
  const O = az(c, 90, G82.L), R = az(c, 210, G82.L), R2 = az(c, 330, G82.L);
  const rc = atom(s, c, 'C'), ro = atom(s, O, 'O'), rr = atom(s, R, 'R'), rr2 = atom(s, R2, 'R′');
  bond(s, c, rc, O, ro, { order, name: `${id}:CO` });
  bond(s, c, rc, R, rr, { name: `${id}:CR` });
  bond(s, c, rc, R2, rr2, { name: `${id}:CR2` });
  return { O, R, R2 };
}
const fig82: Diagram = {
  id: 'c12-08-fig-8.2',
  topic: 0,
  name: 'Carbonyl resonance',
  cases: [{ chip: 'Two forms', cap: CAP82 }],
  draw() {
    const s = new Sketch(W, 182), G = G82, [c1, c2] = G.c;
    carbonyl(s, c1, 'n', 2);
    const { O } = carbonyl(s, c2, 'd', 1);
    both(s, G.arrow[0], G.arrow[1], { w: 1.8, name: 'resonance' });
    lab(s, 170, 114, 'resonance', { size: 13, color: C.slate });
    // the dipolar form's charges, at clear outer corners: the highlight
    const qc = az(c2, 40, 21), qo = az(O, 35, 17);
    lab(s, qc[0], qc[1] + 5, '+', { size: 17, color: C.amber });
    lab(s, qo[0], qo[1] + 5, '−', { size: 17, color: C.amber });
    lab(s, c1[0], G.name, 'neutral form', { size: 13 });
    lab(s, c2[0], G.name, 'dipolar form', { size: 13 });
    return s;
  },
  check() {
    const s = fig82.draw(fig82.cases[0]), out: Check[] = [], [c1, c2] = G82.c;
    const at = (c: P, t: string) => labelsNamed(s, t).map((l) => centre(l.rect)).filter((p) => Math.abs(p[0] - c[0]) < 70).map((p) => [r1(p[0] - c[0]), r1(p[1] - c[1])].join());
    out.push(['The same four atoms at the same places in both forms, read back relative to each carbon: only electrons move', ['O', 'R', 'R′', 'C'].every((t) => at(c1, t).join('|') === at(c2, t).join('|') && at(c1, t).length === 1)]);
    const ang = (id: string) => [azGap(dirOf(s, `${id}:CO`), dirOf(s, `${id}:CR`)), azGap(dirOf(s, `${id}:CO`), dirOf(s, `${id}:CR2`)), azGap(dirOf(s, `${id}:CR`), dirOf(s, `${id}:CR2`))];
    out.push([`Both drawn trigonal planar, every angle ${fmt(ang('n')[0], 0)}° (the book's own are schematic, 113° and 123°)`, [...ang('n'), ...ang('d')].every((x) => close(x, 120, 1e-6))]);
    const n = { C: linesOf(s, 'n:CO') + 2, O: linesOf(s, 'n:CO') }, dp = { C: linesOf(s, 'd:CO') + 2, O: linesOf(s, 'd:CO') };
    const fq = { nC: formal(4, 0, n.C), nO: formal(6, 2, n.O), dC: formal(4, 0, dp.C), dO: formal(6, 3, dp.O) };
    out.push([`Formal charges from the bonds drawn: neutral form C 4 − 0 − ${n.C} = ${fq.nC}, O 6 − 4 − ${n.O} = ${fq.nO}; dipolar form C 4 − 0 − ${dp.C} = +${fq.dC} (a sextet), O 6 − 6 − ${dp.O} = ${fmt(fq.dO, 0)}; each form ${fq.nC + fq.nO} overall, so the charges balance`, n.C === 4 && dp.C === 3 && fq.nC === 0 && fq.nO === 0 && fq.dC === 1 && fq.dO === -1 && fq.nC + fq.nO === fq.dC + fq.dO]);
    const plus = labelsNamed(s, '+'), minus = labelsNamed(s, '−'), O2 = az(c2, 90, G82.L);
    out.push(['The charges are drawn on the dipolar form only, + by its carbon and − by its oxygen, each at an outer corner clear of every letter and bond', plus.length === 1 && minus.length === 1 && rectDist(plus[0].rect, c2) < rectDist(plus[0].rect, O2) && rectDist(minus[0].rect, O2) < rectDist(minus[0].rect, c2) && centre(plus[0].rect)[0] > c2[0] && centre(minus[0].rect)[0] > O2[0]]);
    const [a, b] = lineOf(s, 'resonance');
    out.push(['One double-headed resonance arrow (↔), between the two forms, not an equilibrium arrow', a[0] > c1[0] + 40 && b[0] < c2[0] - 40 && close(a[1], b[1])]);
    out.push(['The labels as printed: resonance, neutral form, dipolar form, +, −', ['resonance', 'neutral form', 'dipolar form', '+', '−'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8.3 · the two reactive sites of an aldehyde (Topic 02, p. 379)  */
/* ===================================================================== */
const CAP83 = 'The two reactive sites of an aldehyde: nucleophilic addition at the carbonyl carbon, enolate (aldol/haloform) chemistry at the α-H. The haloform reaction itself needs a CH<sub>3</sub>CO– group: of aldehydes, only ethanal (R = H).';
const G83 = { y: 158, x: [58, 118, 182, 244], L: 50, hH: 42 };
const BACK = ['back counter: acidic α-H', '→ enolate', '→ aldol / haloform'];
const FRONT = ['front counter:', 'nucleophilic addition', '(Nu<sup>−</sup> attacks C<sup><i>δ</i>+</sup>)'];
function aldehyde() {
  const G = G83, [xR, xA, xC, xH] = G.x;
  return { R: [xR, G.y] as P, A: [xA, G.y] as P, C: [xC, G.y] as P, H: [xH, G.y] as P, O: [xC, G.y - G.L] as P, Hu: [xA, G.y - G.hH] as P, Hd: [xA, G.y + G.hH] as P };
}
const fig83: Diagram = {
  id: 'c12-08-fig-8.3',
  topic: 1,
  name: 'Two reactive sites of an aldehyde',
  cases: [{ chip: 'Two sites', cap: CAP83 }],
  draw() {
    const s = new Sketch(W, 246), m = aldehyde();
    const r = { R: atom(s, m.R, 'R'), A: atom(s, m.A, 'C'), C: atom(s, m.C, 'C'), H: atom(s, m.H, 'H'), O: atom(s, m.O, 'O'), Hu: atom(s, m.Hu, 'H'), Hd: atom(s, m.Hd, 'H') };
    bond(s, m.R, r.R, m.A, r.A, { name: 'R-A' });
    bond(s, m.A, r.A, m.Hu, r.Hu, { name: 'A-Hu' });
    bond(s, m.A, r.A, m.Hd, r.Hd, { name: 'A-Hd' });
    bond(s, m.A, r.A, m.C, r.C, { name: 'A-C' });
    bond(s, m.C, r.C, m.O, r.O, { order: 2, name: 'C-O' });
    bond(s, m.C, r.C, m.H, r.H, { name: 'C-H' });
    lab(s, m.O[0] - 22, m.O[1] + 2, '<i>δ</i><sup>−</sup>', { size: 15, color: C.slate });
    lab(s, m.C[0] - 15, m.C[1] + 22, '<i>δ</i><sup>+</sup>', { size: 15, color: C.amber });
    lab(s, m.A[0], m.Hd[1] + 22, 'α-carbon', { size: 12.5, color: C.slate });
    lab(s, m.C[0], m.C[1] + 46, 'carbonyl carbon', { size: 12.5, color: C.slate });
    // the two counters, each with its leader to its own site
    box(s, 'back counter', [4, 6, 166, 62], BACK.map((html) => ({ html })), { lead: [m.Hu[0] - 8, m.Hu[1] - 12], from: [96, 62] });
    box(s, 'front counter', [174, 6, 336, 62], FRONT.map((html) => ({ html, color: C.amber })), { edge: C.mari, w: 1.6, lead: [m.C[0] + 11, m.C[1] - 11], from: [214, 62] });
    // the nucleophile's attack on the carbonyl carbon: the highlight
    atom(s, [266, 214], 'Nu<sup>−</sup>', { color: C.amber });
    curly(s, [262, 202], [260, 172], [226, 164], [m.C[0] + 9, m.C[1] + 11], { name: 'attack' });
    return s;
  },
  check() {
    const s = fig83.draw(fig83.cases[0]), out: Check[] = [], m = aldehyde();
    const deg = (atoms: string[]) => atoms.map((a) => ['R-A', 'A-Hu', 'A-Hd', 'A-C', 'C-O', 'C-H'].filter((b) => b.split('-').includes(a)).reduce((n, b) => n + linesOf(s, b), 0));
    const [dA, dC, dO] = deg(['A', 'C', 'O']);
    out.push([`Bonds counted off the drawing: the α-carbon ${dA}, the carbonyl carbon ${dC} (C=O drawn double), oxygen ${dO}; every formal charge 0`, dA === 4 && dC === 4 && dO === 2 && formal(4, 0, dA) === 0 && formal(6, 2, dO) === 0]);
    const formula = sum(count('R'), count('CH<sub>2</sub>'), count('CHO'));
    out.push([`An aldehyde: the carbonyl carbon carries H as well as =O; the molecule R–CH₂–CHO (${tallyText(formula)}), the α-carbon bonded to the carbonyl carbon and carrying ${['A-Hu', 'A-Hd'].filter((b) => linesOf(s, b) === 1).length} α-H, so aldol chemistry is open to it (haloform only when R = H, ethanal being the one aldehyde with CH₃CO–)`, linesOf(s, 'C-H') === 1 && linesOf(s, 'A-C') === 1 && ['A-Hu', 'A-Hd'].every((b) => linesOf(s, b) === 1) && same(formula, { R: 1, C: 2, H: 3, O: 1 })]);
    const tags = Object.fromEntries(s.tags.map((t) => [t.name, t]));
    const nearest = (p: P) => [['α-H', m.Hu], ['α-H', m.Hd], ['carbonyl carbon', m.C], ['α-carbon', m.A], ['O', m.O], ['H', m.H], ['R', m.R]].sort((x, y) => len(p, x[1] as P) - len(p, y[1] as P))[0][0];
    out.push([`Each counter's leader, read back, ends at its own site: back counter at the ${nearest(tags['back counter'].from!)}, front counter at the ${nearest(tags['front counter'].from!)}`, nearest(tags['back counter'].from!) === 'α-H' && nearest(tags['front counter'].from!) === 'carbonyl carbon']);
    const tip = tipOf(s, 'attack'), tail = tailOf(s, 'attack'), Nu = labelsNamed(s, 'Nu−')[0].rect;
    out.push([`The curly arrow runs from Nu⁻ (${fmt(rectDist(Nu, tail), 1)} px off it) to the carbonyl carbon (${fmt(rectDist(labelsNamed(s, 'C').map((l) => l.rect).find((rr) => centre(rr)[0] > 150)!, tip), 1)} px), not to O or the α-carbon`, rectDist(Nu, tail) < 8 && len(tip, m.C) < len(tip, m.O) && len(tip, m.C) < len(tip, m.A) && len(tip, m.C) < 16]);
    const dp = labelsNamed(s, 'δ+')[0].rect, dm = labelsNamed(s, 'δ−')[0].rect;
    out.push(['δ+ stands by the carbonyl carbon and δ− by oxygen, each nearer its own atom than any other', len(centre(dp), m.C) < Math.min(len(centre(dp), m.O), len(centre(dp), m.A), len(centre(dp), m.H)) && len(centre(dm), m.O) < Math.min(len(centre(dm), m.C), len(centre(dm), m.Hu))]);
    const printed = [...BACK, ...FRONT].map(plain).join(' | ');
    out.push([`The boxes as printed: ${printed}`, printed === 'back counter: acidic α-H | → enolate | → aldol / haloform | front counter: | nucleophilic addition | (Nu− attacks Cδ+)']);
    out.push(['The labels as printed: δ−, δ+, α-carbon, carbonyl carbon, Nu⁻, R, C, O, H', ['δ−', 'δ+', 'α-carbon', 'carbonyl carbon', 'Nu−', 'R', 'C', 'O', 'H'].every((t) => hasLabel(s, t))]);
    out.push([`One highlight: ${highlighted(s).join()}, with the attack arrow and δ+`, highlighted(s).join() === 'front counter']);
    out.push(...layout(s), chartClear(s)[2]);
    return out;
  },
};

/* ===================================================================== */
/* Figure 8.4 · the carboxylate ion (Topic 03, p. 388)                    */
/* ===================================================================== */
const CAP84 = 'The carboxylate ion: two equivalent resonance forms spread the negative charge equally over both oxygens.';
const G84 = { c: [[82, 70], [254, 70], [112, 214]] as P[], L: 46, arrow: [[136, 70], [194, 70]] as P[], eq: [34, 220] as P, name: 148 };
/** One carboxylate: R at 180°, O at 60° and 300°; `up`/`down` the order of each C–O. */
function carboxylate(s: Sketch, c: P, id: string, up: 1 | 1.5 | 2, down: 1 | 1.5 | 2, hi = false) {
  const R = az(c, 180, G84.L), Ou = az(c, 60, G84.L), Od = az(c, 300, G84.L), col = hi ? C.text : undefined;
  const rc = atom(s, c, 'C', { color: col }), rr = atom(s, R, 'R'), ru = atom(s, Ou, 'O'), rd = atom(s, Od, 'O');
  bond(s, R, rr, c, rc, { name: `${id}:CR` });
  bond(s, c, rc, Ou, ru, { order: up, name: `${id}:Ou`, toward: Od });
  bond(s, c, rc, Od, rd, { order: down, name: `${id}:Od`, toward: Ou });
  return { R, Ou, Od };
}
const fig84: Diagram = {
  id: 'c12-08-fig-8.4',
  topic: 2,
  name: 'The carboxylate ion',
  cases: [{ chip: 'Two forms', cap: CAP84 }],
  draw() {
    const s = new Sketch(W, 284), G = G84, [ca, cb, ch] = G.c;
    const A = carboxylate(s, ca, 'a', 2, 1), B = carboxylate(s, cb, 'b', 1, 2);
    // each form's charge at its oxygen's outer corner
    const qa = az(A.Od, 15, 17), qb = az(B.Ou, 30, 16);
    lab(s, qa[0], qa[1] + 5, '−', { size: 17 });
    lab(s, qb[0], qb[1] + 5, '−', { size: 17 });
    both(s, G.arrow[0], G.arrow[1], { w: 1.8, name: 'resonance' });
    lab(s, ca[0] - 8, G.name, 'charge on one O', { size: 12, color: C.slate });
    lab(s, cb[0] - 8, G.name, 'charge on the other O', { size: 12, color: C.slate });
    // the hybrid, the highlight
    lab(s, G.eq[0], G.eq[1] + 2, '=', { size: 20 });
    const H = carboxylate(s, ch, 'h', 1.5, 1.5, true);
    const hu = az(H.Ou, 20, 21), hd = az(H.Od, 340, 21);
    lab(s, hu[0], hu[1] + 5, '½−', { size: 15, color: C.amber });
    lab(s, hd[0], hd[1] + 5, '½−', { size: 15, color: C.amber });
    lab(s, 190, ch[1] - 4, 'hybrid: charge shared', { anchor: 'start', size: 12.5, color: C.amber });
    lab(s, 190, ch[1] + 13, 'equally over both O', { anchor: 'start', size: 12.5, color: C.amber });
    return s;
  },
  check() {
    const s = fig84.draw(fig84.cases[0]), out: Check[] = [], [ca, cb, ch] = G84.c;
    const rel = (c: P) => labelsNamed(s, 'O').map((l) => centre(l.rect)).filter((p) => len(p, c) < 60).map((p) => [r1(p[0] - c[0]), r1(p[1] - c[1])].join()).sort().join('|');
    out.push(['The same atoms at the same places in both forms and the hybrid, read back relative to each carbon: only electrons move', rel(ca) === rel(cb) && rel(cb) === rel(ch) && rel(ca).split('|').length === 2]);
    const ang = (id: string) => [azGap(dirOf(s, `${id}:Ou`), dirOf(s, `${id}:Od`)), azGap(dirOf(s, `${id}:CR`), dirOf(s, `${id}:Ou`) + 180), azGap(dirOf(s, `${id}:CR`), dirOf(s, `${id}:Od`) + 180)];
    out.push([`Drawn trigonal planar at the carboxylate carbon, O–C–O ${fmt(ang('a')[0], 0)}° and each R–C–O ${fmt(ang('a')[1], 0)}° (the book's own are schematic, O–C–O 77°)`, ['a', 'b', 'h'].every((id) => ang(id).every((x) => close(x, 120, 1e-6)))]);
    const ord = (id: string, o: string) => linesOf(s, `${id}:${o}`);
    /** An oxygen keeps 8 electrons: two lone pairs when double-bonded, three when single. */
    const fO = (id: string, o: string) => formal(6, ord(id, o) === 2 ? 2 : 3, ord(id, o));
    const fC = (id: string) => formal(4, 0, 1 + ord(id, 'Ou') + ord(id, 'Od'));
    const charge = (id: string) => fC(id) + fO(id, 'Ou') + fO(id, 'Od');
    out.push([`Form 1: C=O up, C–O⁻ down; form 2 the reverse. Formal charges from the bonds: O= 6 − 4 − 2 = 0, O⁻ 6 − 6 − 1 = −1, C 4 − 0 − ${1 + ord('a', 'Ou') + ord('a', 'Od')} = ${fC('a')}; each form ${charge('a')} overall`, ord('a', 'Ou') === 2 && ord('a', 'Od') === 1 && ord('b', 'Ou') === 1 && ord('b', 'Od') === 2 && fC('a') === 0 && fC('b') === 0 && charge('a') === -1 && charge('b') === -1]);
    const bo = ['Ou', 'Od'].map((o) => (ord('a', o) + ord('b', o)) / 2), q = ['Ou', 'Od'].map((o) => (fO('a', o) + fO('b', o)) / 2);
    out.push([`Each oxygen is double-bonded in exactly one form, so the forms are equivalent: each C–O averages bond order ${bo.join(' and ')} and charge ${q.map((x) => fmt(x, 1)).join(' and ')}, summing to ${fmt(q[0] + q[1], 0)}, the ½− printed at each O of the hybrid`, bo.every((x) => x === 1.5) && q.every((x) => x === -0.5) && q[0] + q[1] === -1 && labelsNamed(s, '½−').length === 2]);
    const hyb = ['Ou', 'Od'].map((o) => [lineOf(s, `h:${o}:1`), lineOf(s, `h:${o}:2`)].map((l) => len(l[0], l[1])));
    out.push([`The hybrid draws both C–O alike, a solid line and a dashed one of equal length (${fmt(hyb[0][0], 1)} and ${fmt(hyb[1][0], 1)} px): the two bonds are equal`, close(hyb[0][0], hyb[1][0], 1e-6) && close(hyb[0][1], hyb[1][1], 1e-6)]);
    const minus = labelsNamed(s, '−').map((l) => centre(l.rect)), Oa = az(ca, 300, G84.L), Ob = az(cb, 60, G84.L);
    out.push(['Each form\'s − stands at the outer corner of its singly bonded oxygen, clear of the letter', minus.length === 2 && minus.some((p) => len(p, Oa) < 20 && p[0] > Oa[0]) && minus.some((p) => len(p, Ob) < 20 && p[0] > Ob[0])]);
    const ions = ['a', 'b', 'h'].map(() => tallyText(count('RCOO')));
    out.push([`Every structure is RCOO⁻ (${ions[0]}, charge −1): atoms and charge are the same across ↔ and =`, ions.every((x) => x === 'R C O2')]);
    out.push(['The labels as printed: charge on one O, charge on the other O, hybrid: charge shared equally over both O, ½− twice, the ↔ and the =', ['charge on one O', 'charge on the other O', 'hybrid: charge shared', 'equally over both O', '½−', '=', 'R', 'C', 'O'].every((t) => hasLabel(s, t)) && hasLine(s, 'resonance')]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8.5 · the boiling-point ladder (Topic 04, p. 396)               */
/* ===================================================================== */
const CAP85 = 'The boiling-point ladder: hydrocarbon < ether < aldehyde/ketone < alcohol < carboxylic acid (dimer), by the strongest kind of intermolecular force each family can form.';
/** p. 396, bottom to top, each family and its force as printed; `rank` orders the forces, weakest first. */
const RUNGS85 = [
  { id: 'hydrocarbon', force: 'dispersion only', rank: 0 },
  { id: 'ether', force: 'dispersion + weak dipole–dipole', rank: 1 },
  { id: 'aldehyde / ketone', force: 'dipole–dipole attraction', rank: 2 },
  { id: 'alcohol', force: 'hydrogen-bonded chains (O–H···O)', rank: 3 },
  { id: 'carboxylic acid', force: 'cyclic dimer: TWO hydrogen bonds', rank: 4 },
];
/** p. 397's table, the text's comparison at comparable mass (b.p. in K; the acid row is ethanoic acid, 391 K, as Topic 04's fourth worked example gives it). */
const TABLE85 = [
  { name: 'n-butane', family: 'hydrocarbon', f: 'C<sub>4</sub>H<sub>10</sub>', mass: 58, bp: 273 },
  { name: 'methoxyethane', family: 'ether', f: 'CH<sub>3</sub>OC<sub>2</sub>H<sub>5</sub>', mass: 60, bp: 281 },
  { name: 'propanal', family: 'aldehyde / ketone', f: 'CH<sub>3</sub>CH<sub>2</sub>CHO', mass: 58, bp: 322 },
  { name: 'acetone', family: 'aldehyde / ketone', f: 'CH<sub>3</sub>COCH<sub>3</sub>', mass: 58, bp: 329 },
  { name: 'propan-1-ol', family: 'alcohol', f: 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH', mass: 60, bp: 370 },
  { name: 'ethanoic acid', family: 'carboxylic acid', f: 'CH<sub>3</sub>COOH', mass: 60, bp: 391 },
];
const G85 = { ax: 12, bx: [92, 336] as [number, number], top: 6, h: 40, pitch: 46, y: 306, L: 36, oh: 28, hb: 40 };
/** The acid's cyclic dimer, as p. 396 draws it: each O–H of one molecule to the C=O of the other. */
function dimer() {
  const G = G85, D = G.oh + G.hb + G.L, c1: P = [92, G.y], c2: P = [c1[0] + D, G.y];
  const Ou1 = az(c1, 60, G.L), Od1 = az(c1, 300, G.L), Ou2 = az(c2, 120, G.L), Od2 = az(c2, 240, G.L);
  return { c1, c2, R1: az(c1, 180, G.L) as P, R2: az(c2, 0, G.L) as P, Ou1, Od1, Ou2, Od2, H1: [Ou1[0] + G.oh, Ou1[1]] as P, H2: [Od2[0] - G.oh, Od2[1]] as P };
}
const fig85: Diagram = {
  id: 'c12-08-fig-8.5',
  topic: 3,
  name: 'The boiling-point ladder',
  cases: [{ chip: 'Five families', cap: CAP85 }],
  draw() {
    const G = G85, s = new Sketch(W, 358);
    RUNGS85.forEach((r, i) => {
      const y1 = G.top + (RUNGS85.length - 1 - i) * G.pitch, hi = i === RUNGS85.length - 1;
      box(s, r.id, [G.bx[0], y1, G.bx[1], y1 + G.h], [{ html: r.id, size: 13, bold: hi }, { html: r.force, size: 11.5, color: hi ? C.amber : C.slate }], hi ? { edge: C.mari, w: 1.8 } : {});
    });
    const bottom = G.top + (RUNGS85.length - 1) * G.pitch + G.h;
    arrow(s, [G.ax, bottom], [G.ax, G.top], { color: C.mari, w: 1.8, name: 'up' });
    ['increasing', 'boiling', 'point'].forEach((t, i) => lab(s, G.ax + 10, 106 + i * 16, t, { anchor: 'start', size: 12, color: C.amber }));
    // the dimer
    const m = dimer(), sz = 13;
    const r = { c1: atom(s, m.c1, 'C', { size: sz }), c2: atom(s, m.c2, 'C', { size: sz }), R1: atom(s, m.R1, 'R', { size: sz }), R2: atom(s, m.R2, 'R', { size: sz }), Ou1: atom(s, m.Ou1, 'O', { size: sz }), Od1: atom(s, m.Od1, 'O', { size: sz }), Ou2: atom(s, m.Ou2, 'O', { size: sz }), Od2: atom(s, m.Od2, 'O', { size: sz }), H1: atom(s, m.H1, 'H', { size: sz }), H2: atom(s, m.H2, 'H', { size: sz }) };
    bond(s, m.R1, r.R1, m.c1, r.c1, { name: '1:CR' });
    bond(s, m.c1, r.c1, m.Ou1, r.Ou1, { name: '1:C-OH' });
    bond(s, m.c1, r.c1, m.Od1, r.Od1, { order: 2, name: '1:C=O' });
    bond(s, m.Ou1, r.Ou1, m.H1, r.H1, { name: '1:O-H' });
    bond(s, m.c2, r.c2, m.R2, r.R2, { name: '2:CR' });
    bond(s, m.c2, r.c2, m.Od2, r.Od2, { name: '2:C-OH' });
    bond(s, m.c2, r.c2, m.Ou2, r.Ou2, { order: 2, name: '2:C=O' });
    bond(s, m.Od2, r.Od2, m.H2, r.H2, { name: '2:O-H' });
    bond(s, m.H1, r.H1, m.Ou2, r.Ou2, { color: C.mari, w: 1.8, dash: true, name: 'hb:1' });
    bond(s, m.H2, r.H2, m.Od1, r.Od1, { color: C.mari, w: 1.8, dash: true, name: 'hb:2' });
    lab(s, 250, G.y - 4, 'two O–H···O', { anchor: 'start', size: 12, color: C.amber });
    lab(s, 250, G.y + 12, 'hydrogen bonds', { anchor: 'start', size: 12, color: C.amber });
    return s;
  },
  check() {
    const s = fig85.draw(fig85.cases[0]), out: Check[] = [], B = BOXES.get(s)!;
    const up = [...B].sort((a, b) => b.rect[1] - a.rect[1]).map((b) => b.id), [a, b] = lineOf(s, 'up');
    out.push([`Read bottom to top: ${up.join(' < ')}, the caption's order; the arrow points up, toward the higher boiling point`, up.join() === 'hydrocarbon,ether,aldehyde / ketone,alcohol,carboxylic acid' && b[1] < a[1]]);
    out.push([`The dominant force strengthens rung by rung: ${RUNGS85.map((r) => r.force).join(' < ')}`, RUNGS85.every((r, i) => i === 0 || r.rank > RUNGS85[i - 1].rank) && RUNGS85.every((r) => B.find((x) => x.id === r.id)!.lines[1].html === r.force)]);
    const rows = TABLE85.map((t) => ({ ...t, m: massOf(count(t.f)) }));
    out.push([`p. 397's table, masses recomputed: ${rows.map((t) => `${t.name} ${fmt(t.m, 2)} (printed ${t.mass})`).join(', ')}: each rounds to its printed value`, rows.every((t) => Math.round(t.m) === t.mass)]);
    const comp = rows.filter((t) => !Number.isNaN(t.bp)), byFam = RUNGS85.slice(0, 5).map((r) => comp.filter((t) => t.family === r.id).map((t) => t.bp));
    out.push([`Its boiling points climb the same ladder: ${comp.map((t) => `${t.name} ${t.bp} K`).join(' < ')}, at masses ${fmt(Math.min(...comp.map((t) => t.m)), 1)}–${fmt(Math.max(...comp.map((t) => t.m)), 1)}, comparable`, byFam.every((f, i) => i === 0 || Math.min(...f) > Math.max(...byFam[i - 1])) && Math.max(...comp.map((t) => t.m)) - Math.min(...comp.map((t) => t.m)) < 2.1]);
    const m = dimer(), mono1 = ['1:CR', '1:C-OH', '1:C=O'].reduce((n, x) => n + linesOf(s, x), 0), mono2 = ['2:CR', '2:C-OH', '2:C=O'].reduce((n, x) => n + linesOf(s, x), 0);
    out.push([`Each acid of the dimer, read off its bonds: carbon makes ${mono1} and ${mono2} bonds; one C=O and one C–O–H each, so each is RCOOH (${tallyText(count('RCOOH'))})`, mono1 === 4 && mono2 === 4 && linesOf(s, '1:O-H') === 1 && linesOf(s, '2:O-H') === 1]);
    const hb1 = angleAt(m.Ou1, m.H1, m.Ou2), hb2 = angleAt(m.Od2, m.H2, m.Od1);
    out.push([`Two hydrogen bonds, each from the O–H of one acid to the C=O oxygen of the other, straight (${fmt(hb1, 0)}° and ${fmt(hb2, 0)}° at H), dashed and longer than O–H (${G85.hb} against ${G85.oh} px): an eight-membered ring`, close(hb1, 180, 1e-6) && close(hb2, 180, 1e-6) && G85.hb > G85.oh && linesOf(s, '1:C=O') === 2 && linesOf(s, '2:C=O') === 2 && hasLine(s, 'hb:1') && hasLine(s, 'hb:2')]);
    out.push([`One highlight: the ${highlighted(s).join()} box, with its dimer's hydrogen bonds`, highlighted(s).join() === 'carboxylic acid']);
    out.push(['The labels as printed: increasing boiling point, two O–H···O hydrogen bonds', ['increasing', 'boiling', 'point', 'two O–H···O', 'hydrogen bonds'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s), chartClear(s)[2]);
    return out;
  },
};
/** The angle at b between b→a and b→c, in degrees. */
function angleAt(a: P, b: P, c: P) { return azGap(azOf(b, a), azOf(b, c)); }

/* ===================================================================== */
/* "Figure 1" · the identification chain (Additional C, p. 410)           */
/* ===================================================================== */
const CAPC1 = 'The identification chain for an unknown: 2,4-DNP first, then Tollens’, then Fehling’s, with the iodoform and bicarbonate exits.';
const MAINX: [number, number] = [4, 158], EXITX: [number, number] = [198, 336];
/** p. 410, each box as printed, top to bottom; long lines broken for a phone. */
const CHAIN: { id: string; y: number; lines: Line[]; hi?: boolean }[] = [
  { id: 'DNP', y: 12, lines: [{ html: 'Unknown  +  2,4-DNP', bold: true }, { html: '(Brady’s reagent)', bold: true }] },
  { id: 'carbonyl', y: 80, lines: [{ html: 'yellow / orange / red ppt' }, { html: '= a carbonyl compound' }, { html: '(aldehyde or ketone)' }] },
  { id: 'Tollens', y: 162, lines: [{ html: 'Warm with Tollens’', bold: true }, { html: 'reagent', bold: true }] },
  { id: 'mirror', y: 230, lines: [{ html: 'silver mirror' }, { html: '= ALDEHYDE' }], hi: true },
  { id: 'Fehling', y: 298, lines: [{ html: 'Heat with Fehling’s' }, { html: 'solution:' }, { html: 'red-brown Cu<sub>2</sub>O ppt' }, { html: '= ALIPHATIC aldehyde' }] },
];
const EXITS: { id: string; from: string; lines: string[]; say: [string, string] }[] = [
  { id: 'not carbonyl', from: 'DNP', lines: ['no ppt: not an', 'aldehyde or ketone;', 'NaHCO<sub>3</sub> fizz = –COOH'], say: ['no', 'ppt'] },
  { id: 'ketone', from: 'Tollens', lines: ['no mirror: KETONE', 'I<sub>2</sub>/NaOH yellow ppt', '= CH<sub>3</sub>CO– methyl ketone'], say: ['no', 'mirror'] },
  { id: 'aromatic', from: 'Fehling', lines: ['no red ppt: AROMATIC', 'aldehyde (benzaldehyde)'], say: ['no red', 'ppt'] },
];
const DOWN: [string, string, string][] = [['DNP', 'carbonyl', 'ppt forms'], ['carbonyl', 'Tollens', ''], ['Tollens', 'mirror', 'mirror'], ['mirror', 'Fehling', 'aldehyde confirmed']];
const SZ = 11;
const hOf = (n: number) => n * LH + 10;
const rectOfMain = (id: string): Rect => { const b = CHAIN.find((x) => x.id === id)!; return [MAINX[0], b.y, MAINX[1], b.y + hOf(b.lines.length)]; };
/** p. 409's equations behind the two mirror tests, and the iodoform reaction behind the ketone exit. */
const EQS: { name: string; l: Side; r: Side }[] = [
  { name: 'Tollens’ (p. 409)', l: [[1, 'RCHO'], [2, '[Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>'], [3, 'OH<sup>−</sup>']], r: [[1, 'RCOO<sup>−</sup>'], [2, 'Ag'], [4, 'NH<sub>3</sub>'], [2, 'H<sub>2</sub>O']] },
  { name: 'Fehling’s (p. 409)', l: [[1, 'RCHO'], [2, 'Cu<sup>2+</sup>'], [5, 'OH<sup>−</sup>']], r: [[1, 'RCOO<sup>−</sup>'], [1, 'Cu<sub>2</sub>O'], [3, 'H<sub>2</sub>O']] },
  { name: 'iodoform', l: [[1, 'CH<sub>3</sub>COR'], [3, 'I<sub>2</sub>'], [4, 'OH<sup>−</sup>']], r: [[1, 'CHI<sub>3</sub>'], [1, 'RCOO<sup>−</sup>'], [3, 'I<sup>−</sup>'], [3, 'H<sub>2</sub>O']] },
];
/** Oxidation states, for the electrons each test takes from the aldehyde carbon. */
const OX = { aldehydeC: 1, carboxylC: 3, AgI: 1, Ag0: 0, CuII: 2, CuI: 1 };
const figCd1: Diagram = {
  id: 'c12-08-C-d1',
  topic: 6,
  name: 'Identifying an unknown carbonyl',
  cases: [{ chip: 'Test chain', cap: CAPC1 }],
  draw() {
    const s = new Sketch(W, 376), mx = (MAINX[0] + MAINX[1]) / 2;
    CHAIN.forEach((b) => box(s, b.id, rectOfMain(b.id), b.lines.map((l) => ({ ...l, size: SZ, color: b.hi ? C.amber : C.text })), b.hi ? { edge: C.mari, w: 1.8 } : { edge: C.ink, w: 1.3 }));
    DOWN.forEach(([a, b, t]) => {
      const ra = rectOfMain(a), rb = rectOfMain(b);
      flow(s, [[mx, ra[3]], [mx, rb[1]]], `${a}>${b}`);
      if (t) lab(s, mx + 8, (ra[3] + rb[1]) / 2 + 4, t, { anchor: 'start', size: 10.5, color: C.slate });
    });
    EXITS.forEach((e) => {
      const rf = rectOfMain(e.from), y = (rf[1] + rf[3]) / 2, h = hOf(e.lines.length);
      box(s, e.id, [EXITX[0], y - h / 2, EXITX[1], y + h / 2], e.lines.map((html) => ({ html, size: SZ })));
      flow(s, [[MAINX[1], y], [EXITX[0], y]], `${e.from}>${e.id}`);
      const gx = (MAINX[1] + EXITX[0]) / 2;
      lab(s, gx, y - 19, e.say[0], { size: 10.5, color: C.slate });
      lab(s, gx, y - 7, e.say[1], { size: 10.5, color: C.slate });
    });
    return s;
  },
  check() {
    const s = figCd1.draw(figCd1.cases[0]), out: Check[] = [], F = flowsOf(s);
    const next = (id: string) => F.filter((f) => f.from === id).map((f) => f.to);
    const chain: string[] = ['DNP'];
    while (next(chain[chain.length - 1]).some((t) => CHAIN.some((c) => c.id === t))) chain.push(next(chain[chain.length - 1]).find((t) => CHAIN.some((c) => c.id === t))!);
    out.push([`Read back from where the flow lines start and end, the main chain runs ${chain.join(' → ')}: 2,4-DNP first, then Tollens’, then Fehling’s, as the caption says`, chain.join() === 'DNP,carbonyl,Tollens,mirror,Fehling']);
    out.push([`The exits, read back: ${EXITS.map((e) => `${next(e.from).filter((t) => !CHAIN.some((c) => c.id === t)).join()} from ${e.from}`).join('; ')}; nothing leads on from an exit (${F.length} flow lines in all)`, EXITS.every((e) => next(e.from).includes(e.id) && next(e.id).length === 0) && F.length === 7]);
    const text = (id: string) => [...(CHAIN.find((c) => c.id === id)?.lines.map((l) => l.html) ?? EXITS.find((e) => e.id === id)!.lines)].map(plain).join(' ');
    out.push(['The caption\'s two exits are there: the bicarbonate one (NaHCO₃ fizz = –COOH) after 2,4-DNP, the iodoform one (I₂/NaOH yellow ppt = CH₃CO– methyl ketone) after Tollens’', text('not carbonyl').includes('NaHCO3 fizz = –COOH') && text('ketone').includes('I2/NaOH yellow ppt')]);
    EQS.forEach((e) => out.push([`${e.name}: ${eqText(e.l)} → ${eqText(e.r)} balances for atoms (${tallyText(sideAtoms(e.l))}) and charge (${fmt(sideCharge(e.l), 0)})`, same(sideAtoms(e.l), sideAtoms(e.r)) && sideCharge(e.l) === sideCharge(e.r)]));
    const eAld = OX.carboxylC - OX.aldehydeC, nAg = eAld / (OX.AgI - OX.Ag0), nCu = eAld / (OX.CuII - OX.CuI);
    out.push([`Electrons: the aldehyde carbon goes from +${OX.aldehydeC} to +${OX.carboxylC}, ${eAld} electrons, so ${nAg} Ag⁺ → ${nAg} Ag and ${nCu} Cu²⁺ → 1 Cu₂O, as the two equations have; 0.5 mol propanal gives ${0.5 * nAg} mol Ag (Example C.1)`, nAg === EQS[0].r[1][0] && nCu === EQS[1].l[1][0] && 0.5 * nAg === 1]);
    const printed = [...CHAIN.map((c) => c.id), ...EXITS.map((e) => e.id)].map(text);
    const book = ['Unknown  +  2,4-DNP (Brady’s reagent)', 'yellow / orange / red ppt = a carbonyl compound (aldehyde or ketone)', 'Warm with Tollens’ reagent', 'silver mirror = ALDEHYDE', 'Heat with Fehling’s solution: red-brown Cu2O ppt = ALIPHATIC aldehyde', 'no ppt: not an aldehyde or ketone; NaHCO3 fizz = –COOH', 'no mirror: KETONE I2/NaOH yellow ppt = CH3CO– methyl ketone', 'no red ppt: AROMATIC aldehyde (benzaldehyde)'];
    out.push(['Every box reads as printed on p. 410 (Brady’s, Tollens’ and Fehling’s in the house form; long lines broken; “not a carbonyl” narrowed to “not an aldehyde or ketone”, and red-brown Cu₂O, the chapter’s form)', JSON.stringify(printed) === JSON.stringify(book)]);
    out.push(['The arrow labels as printed: no ppt, ppt forms, no mirror, mirror, aldehyde confirmed, no red ppt', ['no', 'ppt', 'ppt forms', 'mirror', 'aldehyde confirmed', 'no red'].every((t) => hasLabel(s, t))]);
    out.push([`One highlight: the ${highlighted(s).join()} box`, highlighted(s).join() === 'mirror']);
    out.push(...chartClear(s), labelsApart(s), inFrame(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_12_08: Diagram[] = [fig81, fig82, fig83, fig84, fig85, figCd1];

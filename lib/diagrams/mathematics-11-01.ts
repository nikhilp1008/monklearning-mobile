import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * MATHEMATICS CLASS 11, CHAPTER 1 (Sets): every drawing of the Master Reference book (October edition) on
 * pp. 25–100, redrawn. Every page's vector paths were counted (pdftocairo SVG, glyphs left out): drawings stand
 * only on pp. 29, 38, 42, 46, 51, 66, 68, 78, 82 and 88; every other page's paths are rules, answer boxes, table
 * lines, fraction bars, radicals and braces, and no page holds a raster image. TEN drawings:
 *
 *   Figure 1.1 (p. 29; caption first on p. 28) — Topic 01, topic index 0.
 *   Figure 1.2 (p. 38; caption p. 37) — Topic 02, index 1.
 *   Figures 1.3 (p. 42; caption p. 41) and 1.4 (p. 46; caption p. 45) — Topic 03, index 2.
 *   Figure 1.5 (p. 51; caption p. 50) — Topic 04, index 3.
 *   Figures 1.6 (p. 66; caption p. 65) and 1.7 (p. 68; caption p. 67, called in Worked Example F1) —
 *     Additional topic F, index 10.
 *   Figures 1.8 (p. 78; caption p. 77) and 1.9 (p. 82; caption p. 81) — Topic 05, index 4.
 *   Addendum I's "Figure 1" (p. 88) — Additional topic I, index 13.
 *
 * NO FILLS. The book's tinted bands (Figs 1.1, 1.4, 1.7, 1.9) are marigold hatching here, the drawing's one
 * highlight, computed line by line from the region it shades and kept clear of every label, bar and dot. Figures
 * the book does not shade (1.2, 1.3, 1.5, 1.6) carry no highlight; Fig 1.8's highlight is its boxed grand total,
 * "Figure 1"'s the three boxes (the entries that are sets). The book's second and third circle colours are ink here.
 *
 * FRACTIONS are stacked by hand (two runs and a short rule): Fig 1.1's 2/3 and Fig 1.9's 5/3 and 16/3. The binomial
 * coefficients of Fig 1.2 are written ³C₃ in the NCERT form, never as fractions.
 *
 * THE BOOK'S VALUES: every label, element, interval, region name, tick and total is as printed. Positions are
 * schematic, re-laid for a phone: the ovals keep the book's proportions, the Venn circles its spacing (centres one
 * radius apart), the number lines are to scale; label spots inside Venn regions are computed (the spot with the
 * most room in the region).
 */

const W = 340;
type P = [number, number];
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const centre = (r: Rect): P => [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2];
const I = (t: string) => `<i>${t}</i>`;
const same = (a: unknown[], b: unknown[]) => a.length === b.length && a.every((x, i) => x === b[i]);

/* ---------- lines, labels and the layout checks (as in chemistry-12-10.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; name?: string };
/** Every line a label must keep clear of, by sketch, with its name so a check can read it back. */
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="4 3"' : ''}/>`);
  keep(s, pts, o.name);
}
const rectPts = (r: Rect): P[] => [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]];
/** An oval (a circle when rx = ry), kept as a fine polygon for the clearance check. */
function oval(s: Sketch, c: P, rx: number, ry: number, o: Stroke = {}) {
  s.add(`<ellipse cx="${r1(c[0])}" cy="${r1(c[1])}" rx="${r1(rx)}" ry="${r1(ry)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  keep(s, Array.from({ length: 241 }, (_, i): P => [c[0] + rx * Math.cos((2 * Math.PI * i) / 240), c[1] + ry * Math.sin((2 * Math.PI * i) / 240)]), o.name);
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
  return [`Every label stays at least ${LABEL_GAP} px clear of every line, outline and hatch stroke: the closest is "${what}", ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9];
};
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), inFrame(s)];
const labelsNamed = (s: Sketch, t: string) => s.labels.filter((l) => l.text === t);
const hasLabel = (s: Sketch, t: string) => labelsNamed(s, t).length > 0;

/** A line of STIX on the drawing, from its baseline, its box at its true width (subscripts counted). */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text });
  return rect;
}

/* ---------- stacked fractions and big operators, drawn by hand ---------- */
type Piece = { t: string } | { num: string; den: string } | { op: string; below: string };
/** Every stacked fraction drawn, so a check can see it really is stacked: numerator over the rule over denominator. */
const FRACS = new WeakMap<Sketch, { num: string; den: string; rule: [number, number, number]; numY: number; denY: number; numW: number; denW: number }[]>();
const FRAC_PAD = 2;
const fracW = (num: string, den: string, size: number) => Math.max(widthOf(num, size), widthOf(den, size)) + 2 * FRAC_PAD;
/** A stacked fraction centred on x with its rule at y. */
function frac(s: Sketch, x: number, y: number, num: string, den: string, size: number, color: string): Rect {
  const w = fracW(num, den, size), numY = y - 3, denY = y + 3 + size * 0.68;
  s.text(x, numY, num, { size, color });
  s.text(x, denY, den, { size, color });
  s.add(`<line x1="${r1(x - w / 2)}" y1="${r1(y)}" x2="${r1(x + w / 2)}" y2="${r1(y)}" stroke="${color}" stroke-width="1.1"/>`);
  FRACS.set(s, [...(FRACS.get(s) ?? []), { num, den, rule: [x - w / 2, x + w / 2, y], numY, denY, numW: widthOf(num, size), denW: widthOf(den, size) }]);
  return [x - w / 2, numY - size * 0.72, x + w / 2, denY + size * 0.22];
}
const pieceW = (p: Piece, size: number) => ('t' in p ? mathW(p.t, size) : 'num' in p ? fracW(p.num, p.den, size) + 2 : Math.max(widthOf(p.op, size * 1.3), widthOf(p.below, size * 0.7)) + 3);
/**
 * One label made of runs: text, stacked fractions (their rule on the maths axis) and big operators with their
 * limits set underneath. Registered as ONE label, so the pieces may sit close.
 */
function runs(s: Sketch, x: number, y: number, parts: Piece[], o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; name?: string } = {}): Rect {
  const size = o.size ?? 13, color = o.color ?? C.text, ws = parts.map((p) => pieceW(p, size)), total = ws.reduce((a, b) => a + b, 0);
  let at = o.anchor === 'middle' ? x - total / 2 : o.anchor === 'end' ? x - total : x;
  const box: Rect = [at, y - size * 0.72, at + total, y + size * 0.22];
  parts.forEach((p, i) => {
    if ('t' in p) {
      s.text(at, y, p.t, { size, anchor: 'start', color });
      if (p.t.includes('<sub>')) box[3] = Math.max(box[3], y + size * 0.36);
    } else if ('num' in p) {
      const r = frac(s, at + ws[i] / 2, y - size * 0.27, p.num, p.den, size, color);
      box[1] = Math.min(box[1], r[1]); box[3] = Math.max(box[3], r[3]);
    } else {
      const mid = at + ws[i] / 2, big = size * 1.3, small = size * 0.7, by = y + size * 0.95;
      s.text(mid, y + size * 0.08, p.op, { size: big, color });
      s.text(mid, by, p.below, { size: small, color });
      box[1] = Math.min(box[1], y + size * 0.08 - big * 0.78); box[3] = Math.max(box[3], by + small * 0.3);
    }
    at += ws[i];
  });
  s.labels.push({ text: o.name ?? parts.map((p) => ('t' in p ? plain(p.t) : 'num' in p ? `${plain(p.num)}/${plain(p.den)}` : `${p.op}_${plain(p.below)}`)).join(''), rect: box });
  return box;
}

/* ---------- hatching: the book's shading, as lines ---------- */
/**
 * Marigold hatching at 45° over every point `inside` says is shaded, kept `gap` px clear of each rect in `avoid`
 * (by default every label already drawn). Built line by line at half-pixel steps; each stroke is kept for the
 * clearance check and returned so a check can test that it lies in the shaded region.
 */
function hatch(s: Sketch, inside: (p: P) => boolean, box: Rect, o: { step?: number; avoid?: Rect[]; gap?: number } = {}): [P, P][] {
  const step = (o.step ?? 7) * Math.SQRT2, gap = o.gap ?? LABEL_GAP + 1, avoid = [...s.labels.map((l) => l.rect), ...(o.avoid ?? [])];
  const ok = (p: P) => inside(p) && avoid.every((r) => rectDist(r, p) >= gap);
  const segs: [P, P][] = [];
  for (let k = box[0] + box[1] + step / 2; k <= box[2] + box[3]; k += step) {
    const xa = Math.max(box[0], k - box[3]), xb = Math.min(box[2], k - box[1]);
    let a: P | null = null, b: P | null = null;
    const end = () => { if (a && b && len(a, b) >= 3) segs.push([a, b]); a = null; };
    for (let x = xa; x <= xb + 1e-9; x += 0.5) {
      const p: P = [x, k - x];
      if (ok(p)) { if (!a) a = p; b = p; } else end();
    }
    end();
  }
  s.add(`<path d="${segs.map(([a, b]) => `M${r1(a[0])} ${r1(a[1])} L${r1(b[0])} ${r1(b[1])}`).join(' ')}" fill="none" stroke="${C.mari}" stroke-width="1" stroke-linecap="round"/>`);
  segs.forEach((sg) => keep(s, sg, 'hatch'));
  return segs;
}
const HATCH = new WeakMap<Sketch, [P, P][]>();
/** Every hatch stroke's ends and middle pass the test. */
const hatchAll = (s: Sketch, test: (p: P) => boolean) => (HATCH.get(s) ?? []).every(([a, b]) => test(a) && test(b) && test([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]));

/* ---------- number lines (Figs 1.4 and 1.9) ---------- */
type NL = { x0: number; ux: number; y: number; from: number; to: number };
const NX = (L: NL, v: number) => L.x0 + (v - L.from) * L.ux;
const vOf = (L: NL, x: number) => L.from + (x - L.x0) / L.ux;
/** An interval: its ends, and whether each is in (closed). */
type Iv = { lo: number; hi: number; lc: boolean; rc: boolean };
const num = (v: number) => fmt(v, 4);
const ivText = (v: Iv) => `${v.lc ? '[' : '('}${num(v.lo)}, ${num(v.hi)}${v.rc ? ']' : ')'}`;
function meet(a: Iv, b: Iv): Iv {
  const lo = Math.max(a.lo, b.lo), hi = Math.min(a.hi, b.hi);
  const lc = (a.lo !== lo || a.lc) && (b.lo !== lo || b.lc), rc = (a.hi !== hi || a.rc) && (b.hi !== hi || b.rc);
  return { lo, hi, lc, rc };
}
/** The union of two overlapping intervals. */
function join(a: Iv, b: Iv): Iv {
  const lo = Math.min(a.lo, b.lo), hi = Math.max(a.hi, b.hi);
  return { lo, hi, lc: (a.lo === lo && a.lc) || (b.lo === lo && b.lc), rc: (a.hi === hi && a.rc) || (b.hi === hi && b.rc) };
}
/** a − b when b starts inside a and runs past a's right end: one piece, [a.lo, b.lo] with b.lo kept when b leaves it out. */
const minus = (a: Iv, b: Iv): Iv => ({ lo: a.lo, hi: b.lo, lc: a.lc, rc: !b.lc });
const has = (v: Iv, x: number) => (v.lo < x || (v.lc && v.lo === x)) && (x < v.hi || (v.rc && v.hi === x));
const DOTS = new WeakMap<Sketch, { bar: string; x: number; y: number; open: boolean }[]>();
const BARS = new WeakMap<Sketch, { bar: string; x0: number; x1: number; y: number }[]>();
/** A bar from lo to hi with its two end dots: filled when the end is in, hollow when it is not. */
function bar(s: Sketch, L: NL, v: Iv, y: number, name: string, o: { color?: string; w?: number } = {}): Rect {
  const col = o.color ?? C.ink, a = NX(L, v.lo), b = NX(L, v.hi), R = 4.6;
  s.add(`<line x1="${r1(a)}" y1="${r1(y)}" x2="${r1(b)}" y2="${r1(y)}" stroke="${col}" stroke-width="${o.w ?? 3}" stroke-linecap="round"/>`);
  BARS.set(s, [...(BARS.get(s) ?? []), { bar: name, x0: a, x1: b, y }]);
  ([[a, v.lc], [b, v.rc]] as [number, boolean][]).forEach(([x, closed]) => {
    s.point(x, y, R, closed ? `<circle cx="${r1(x)}" cy="${r1(y)}" r="${R}" fill="${col}"/>` : `<circle cx="${r1(x)}" cy="${r1(y)}" r="${R}" fill="#fff" stroke="${col}" stroke-width="1.8"/>`);
    DOTS.set(s, [...(DOTS.get(s) ?? []), { bar: name, x, y, open: !closed }]);
  });
  return [a - R - 2, y - R - 2, b + R + 2, y + R + 2];
}
/** The axis in grey with an arrowhead, its ticks and their values. */
function axis(s: Sketch, L: NL, ticks: number[], o: { left: number; right: number; labelY: number }) {
  s.vec(o.left, L.y, o.right, L.y, { color: C.slate, w: 1.4 });
  keep(s, [[o.left, L.y], [o.right, L.y]], 'axis');
  ticks.forEach((t) => {
    s.line(NX(L, t), L.y - 5, NX(L, t), L.y + 5, { color: C.slate, w: 1.2 });
    keep(s, [[NX(L, t), L.y - 5], [NX(L, t), L.y + 5]], `tick:${t}`);
    lab(s, NX(L, t), o.labelY, fmt(t), { size: 12.5, color: C.slate });
  });
}
/** A dashed marigold edge of the shaded band. */
function edge(s: Sketch, x: number, y0: number, y1: number, name: string) {
  s.line(x, y0, x, y1, { color: C.mari, w: 1.2, dash: true });
  keep(s, [[x, y0], [x, y1]], name);
}

/* ---------- Venn diagrams (Figs 1.3, 1.5–1.7) ---------- */
type Circ = { name: string; c: P; r: number };
const inCirc = (k: Circ, p: P) => len(p, k.c) < k.r;
/** Which circles hold p: bit 0 the first circle (A), bit 1 the second, bit 2 the third. */
const maskOf = (cs: Circ[], p: P) => cs.reduce((m, k, i) => m | (inCirc(k, p) ? 1 << i : 0), 0);
const toEdge = (cs: Circ[], p: P) => Math.min(...cs.map((k) => Math.abs(len(p, k.c) - k.r)));
const inside = (r: Rect, p: P, m = 0) => p[0] > r[0] + m && p[0] < r[2] - m && p[1] > r[1] + m && p[1] < r[3] - m;
/** How far a w × h box centred on p stays from every circle and the frame, or −1 if it leaves the region `mask`. */
function room(cs: Circ[], frame: Rect, mask: number, p: P, w: number, h: number): number {
  const r: Rect = [p[0] - w / 2, p[1] - h / 2, p[0] + w / 2, p[1] + h / 2], pts: P[] = [];
  const nx = Math.ceil(w / 3), ny = Math.ceil(h / 3);
  for (let i = 0; i <= nx; i++) pts.push([r[0] + (w * i) / nx, r[1]], [r[0] + (w * i) / nx, r[3]]);
  for (let j = 1; j < ny; j++) pts.push([r[0], r[1] + (h * j) / ny], [r[2], r[1] + (h * j) / ny]);
  let d = Infinity;
  for (const q of pts) {
    if (maskOf(cs, q) !== mask || !inside(frame, q)) return -1;
    d = Math.min(d, toEdge(cs, q), q[0] - frame[0], frame[2] - q[0], q[1] - frame[1], frame[3] - q[1]);
  }
  return d;
}
const SPOTS = new Map<string, P>();
/** The centre where a w × h label has the most room inside region `mask` (searched within `roi`), computed once. */
function spot(cs: Circ[], frame: Rect, mask: number, w: number, h: number, roi: Rect = frame): P {
  const key = JSON.stringify([cs.map((k) => [k.c, k.r]), frame, mask, r1(w), r1(h), roi]);
  const known = SPOTS.get(key);
  if (known) return known;
  let best: P = [roi[0], roi[1]], most = -1;
  for (let y = roi[1] + h / 2; y <= roi[3] - h / 2; y += 1.5)
    for (let x = roi[0] + w / 2; x <= roi[2] - w / 2; x += 1.5) {
      if (maskOf(cs, [x, y]) !== mask) continue;
      const d = room(cs, frame, mask, [x, y], w, h);
      if (d > most) { most = d; best = [x, y]; }
    }
  SPOTS.set(key, best);
  return best;
}
const LH = 15;
/** A label of one or more lines centred on c. */
function block(s: Sketch, c: P, lines: string[], size: number, color: string = C.text): Rect[] {
  const h = (lines.length - 1) * LH + size * 0.94, top = c[1] - h / 2;
  return lines.map((t, i) => lab(s, c[0], top + size * 0.72 + i * LH, t, { size, color }));
}
const blockSize = (lines: string[], size: number): [number, number] => [Math.max(...lines.map((t) => widthOf(t, size))), (lines.length - 1) * LH + size * 0.94];
/** A region's label at its roomiest spot. */
function regionLabel(s: Sketch, cs: Circ[], frame: Rect, mask: number, lines: string[], size: number, roi?: Rect, color?: string): Rect[] {
  const [w, h] = blockSize(lines, size);
  return block(s, spot(cs, frame, mask, w, h, roi), lines, size, color);
}
/** A circle's name outside it, `deg` round from the right (screen angles, y down), `gap` px out from the circle. */
function circleName(s: Sketch, k: Circ, deg: number, gap: number) {
  const a = (deg * Math.PI) / 180, size = 17;
  lab(s, k.c[0] + (k.r + gap) * Math.cos(a), k.c[1] + (k.r + gap) * Math.sin(a) + size * 0.25, I(k.name), { size });
}

/* ===================================================================== */
/* Figure 1.1 · the number systems as nested ovals (Topic 01, p. 29)     */
/* ===================================================================== */
const CAP11 = 'Concentric ovals nesting ℕ, ℤ, ℚ, ℝ, with the irrationals 𝕋 as the shaded band.';
/** The four ovals, innermost first, in the book's proportions (p. 29: rx 94, 166, 235, 303; ry 58, 107, 155, 203). */
const G11 = { c: [170, 124] as P, ovals: [['ℕ', 50, 32], ['ℤ', 89, 57], ['ℚ', 126, 84], ['ℝ', 162, 112]] as [string, number, number][] };
/** p. 29, the sample elements as printed, each with the value it names (2/3 as numerator and denominator). */
type Elem = { html: string; kind: 'ℕ' | 'ℤ' | 'ℚ' | '𝕋'; v: number; p?: number; q?: number };
const ELEMS11: Elem[] = [
  { html: '3', kind: 'ℕ', v: 3 },
  { html: '−5', kind: 'ℤ', v: -5 },
  { html: '2/3', kind: 'ℚ', v: 2 / 3, p: 2, q: 3 },
  { html: '√2', kind: '𝕋', v: Math.SQRT2 },
  { html: 'π', kind: '𝕋', v: Math.PI },
];
/** How many ovals hold p: 4 in ℕ, 3 in ℤ only, 2 in ℚ only, 1 in the band, 0 outside. */
const depth11 = (p: P) => G11.ovals.filter(([, rx, ry]) => ((p[0] - G11.c[0]) / rx) ** 2 + ((p[1] - G11.c[1]) / ry) ** 2 < 1).length;
/** How far p is from oval i along the ray from the centre. */
const ovalGap = (p: P, i: number) => { const [, rx, ry] = G11.ovals[i], q = Math.hypot((p[0] - G11.c[0]) / rx, (p[1] - G11.c[1]) / ry); return q ? Math.abs(1 - 1 / q) * len(p, G11.c) : Infinity; };
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : Math.abs(a));
/** Where each kind of number belongs, from its value (2/3 in lowest terms with q ≠ 1 is not an integer; √2 and π are irrational). */
function classify(e: Elem): Elem['kind'] {
  if (e.p !== undefined && e.q !== undefined) return gcd(e.p, e.q) === 1 && e.q !== 1 ? 'ℚ' : 'ℤ';
  if (Number.isInteger(e.v)) return e.v >= 1 ? 'ℕ' : 'ℤ';
  // √2: no integer squares to 2, so by the rational root theorem x² = 2 has no rational root; π is irrational (Lambert)
  return '𝕋';
}
const fig11: Diagram = {
  id: 'm11-01-fig-1.1',
  topic: 0,
  name: 'Number sets as nested ovals',
  cases: [{ chip: 'Number systems', cap: CAP11 }],
  draw() {
    const s = new Sketch(W, 266), [cx, cy] = G11.c, ov = G11.ovals;
    ov.forEach(([n, rx, ry]) => oval(s, G11.c, rx, ry, { w: 1.6, name: `oval:${n}` }));
    // the names: ℕ, ℤ, ℚ at the top of their own oval, ℝ outside top left, 𝕋 in the band, as printed
    /** Halfway between the top of oval i and the top of the oval inside it. */
    const band = (i: number) => cy - (ov[i][2] + ov[i - 1][2]) / 2;
    lab(s, cx, cy - 7, 'ℕ', { size: 15 });
    lab(s, cx, band(1) + 5, 'ℤ', { size: 15 });
    lab(s, cx, band(2) + 5, 'ℚ', { size: 15 });
    lab(s, 24, 30, 'ℝ', { size: 15 });
    lab(s, 309, 101, '𝕋', { size: 15, color: C.amber });
    // the elements
    lab(s, cx, cy + 17, '3', { size: 14 });
    lab(s, (cx - ov[1][1] + cx - ov[0][1]) / 2, cy + 5, '−5', { size: 14 });
    const f = frac(s, (cx - ov[2][1] + cx - ov[1][1]) / 2, cy, '2', '3', 14, C.text);
    s.labels.push({ text: '2/3', rect: f });
    lab(s, (cx - ov[3][1] + cx - ov[2][1]) / 2, cy + 5, '√2', { size: 14 });
    lab(s, (cx + ov[3][1] + cx + ov[2][1]) / 2, cy + 9, 'π', { size: 14 });
    lab(s, cx, 258, 'shaded band: 𝕋 = ℝ − ℚ', { size: 13, color: C.slate });
    HATCH.set(s, hatch(s, (p) => depth11(p) === 1 && ovalGap(p, 3) > 3 && ovalGap(p, 2) > 3, [cx - 164, cy - 114, cx + 164, cy + 114]));
    return s;
  },
  check() {
    const s = fig11.draw(fig11.cases[0]), out: Check[] = [], ov = G11.ovals;
    out.push([`Four ovals, ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ, each strictly inside the next (gaps ${ov.slice(1).map(([, rx, ry], i) => `${rx - ov[i][1]}/${ry - ov[i][2]}`).join(', ')} px); no 𝕎 oval, as printed`, ov.map(([n]) => n).join('') === 'ℕℤℚℝ' && ov.slice(1).every(([, rx, ry], i) => rx > ov[i][1] + 20 && ry > ov[i][2] + 20) && linesNamed(s, /^oval:/).length === 4]);
    const BY_DEPTH = ['outside', '𝕋', 'ℚ', 'ℤ', 'ℕ'], read = ELEMS11.map((e) => { const l = labelsNamed(s, e.html)[0]; return l ? BY_DEPTH[depth11(centre(l.rect))] : 'missing'; });
    out.push([`Each element sits where its value belongs: ${ELEMS11.map((e, i) => `${e.html} in ${read[i] === '𝕋' ? 'the band' : `${read[i]} only`}`).join(', ')}`, ELEMS11.every((e, i) => read[i] === e.kind && classify(e) === e.kind)]);
    out.push(['√2 is irrational: no integer k has k² = 2 (1² = 1 < 2 < 4 = 2²), so x² − 2 has no rational root; 2/3 is in lowest terms with denominator 3, so rational but not an integer; −5 an integer below 1', ![1, 2].some((k) => k * k === 2) && gcd(2, 3) === 1 && -5 < 1 && Number.isInteger(-5)]);
    const names = (['ℕ', 'ℤ', 'ℚ'] as const).map((n, i) => depth11(centre(labelsNamed(s, n)[0].rect)) === 4 - i), T = depth11(centre(labelsNamed(s, '𝕋')[0].rect)), R = depth11(centre(labelsNamed(s, 'ℝ')[0].rect));
    out.push(['ℕ, ℤ, ℚ named inside their own ovals, ℝ outside its oval at the top left, 𝕋 in the band, as printed', names.every(Boolean) && T === 1 && R === 0]);
    const fr = FRACS.get(s) ?? [];
    out.push(['2/3 is stacked: 2 above the rule, 3 below it, the rule as wide as either', fr.length === 1 && fr[0].num === '2' && fr[0].den === '3' && fr[0].numY < fr[0].rule[2] && fr[0].denY - 9 > fr[0].rule[2] && fr[0].rule[1] - fr[0].rule[0] >= Math.max(fr[0].numW, fr[0].denW)]);
    const H = HATCH.get(s) ?? [];
    out.push([`The band 𝕋 = ℝ − ℚ hatched (${H.length} strokes), every stroke inside ℝ and outside ℚ`, H.length > 40 && hatchAll(s, (p) => depth11(p) === 1)]);
    out.push(['The labels as printed: ℕ, ℤ, ℚ, ℝ, 𝕋, 3, −5, 2/3, √2, π, shaded band: 𝕋 = ℝ − ℚ', ['ℕ', 'ℤ', 'ℚ', 'ℝ', '𝕋', '3', '−5', '2/3', '√2', 'π', 'shaded band: 𝕋 = ℝ − ℚ'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 1.2 · the subsets of {p, q, r} by size (Topic 02, p. 38)       */
/* ===================================================================== */
const CAP12 = 'The eight subsets of {<i>p</i>, <i>q</i>, <i>r</i>} by size, each joined to those one element larger.';
const BASE12 = ['p', 'q', 'r'];
/** Rows by size, top to bottom, and each subset in the book's order along its row (p. 38). */
const ROWS12 = [[['p', 'q', 'r']], [['p', 'q'], ['p', 'r'], ['q', 'r']], [['p'], ['q'], ['r']], [[]]] as string[][][];
const G12 = { cols: [58, 152, 246], ys: [58, 118, 178, 238], kx: 304, size: 14 };
const setHtml = (e: string[]) => (e.length ? `{${e.map(I).join(', ')}}` : '∅');
const choose = (n: number, k: number): number => (k === 0 || k === n ? 1 : choose(n - 1, k - 1) + choose(n - 1, k));
const NODES12 = new WeakMap<Sketch, { set: string[]; rect: Rect }[]>();
/** Where the segment from a box's centre towards p leaves the box. */
function leave(r: Rect, p: P): P {
  const c = centre(r), dx = p[0] - c[0], dy = p[1] - c[1];
  const t = Math.min(dx ? (r[2] - r[0]) / 2 / Math.abs(dx) : Infinity, dy ? (r[3] - r[1]) / 2 / Math.abs(dy) : Infinity);
  return [c[0] + dx * t, c[1] + dy * t];
}
const fig12: Diagram = {
  id: 'm11-01-fig-1.2',
  topic: 1,
  name: 'Subsets of {p, q, r}',
  cases: [{ chip: 'Power set', cap: CAP12 }],
  draw() {
    const s = new Sketch(W, 256), G = G12, nodes: { set: string[]; rect: Rect }[] = [];
    lab(s, 10, 24, `${I('n')}[${I('P')}(${I('A')})] = 2<sup>3</sup> = 8`, { anchor: 'start', size: 14, color: C.slate });
    ROWS12.forEach((row, i) => row.forEach((set, j) => {
      const x = row.length === 1 ? G.cols[1] : G.cols[j], y = G.ys[i], html = setHtml(set);
      const t = lab(s, x, y + G.size * 0.25, html, { size: G.size });
      const box: Rect = [t[0] - 7, t[1] - 5, t[2] + 7, t[3] + 5];
      s.add(`<rect x="${r1(box[0])}" y="${r1(box[1])}" width="${r1(box[2] - box[0])}" height="${r1(box[3] - box[1])}" rx="5" fill="none" stroke="${C.ink}" stroke-width="1.5"/>`);
      keep(s, rectPts(box), `box:${set.join('')}`);
      nodes.push({ set, rect: box });
    }));
    // each subset joined to every subset one element larger
    nodes.forEach((a) => nodes.filter((b) => b.set.length === a.set.length + 1 && a.set.every((e) => b.set.includes(e))).forEach((b) => {
      const p = leave(a.rect, centre(b.rect)), q = leave(b.rect, centre(a.rect));
      path(s, [p, q], { color: C.grey, w: 1.3, name: `edge:${a.set.join('')}>${b.set.join('')}` });
    }));
    ROWS12.forEach((row, i) => { const k = 3 - i; lab(s, G.kx, G.ys[i] + 4.5, `<sup>3</sup>C<sub>${k}</sub> = ${choose(3, k)}`, { size: 13, color: C.slate }); });
    NODES12.set(s, nodes);
    return s;
  },
  check() {
    const s = fig12.draw(fig12.cases[0]), out: Check[] = [], nodes = NODES12.get(s)!;
    const all = Array.from({ length: 2 ** BASE12.length }, (_, m) => BASE12.filter((_, i) => m & (1 << i)).join('')).sort();
    out.push([`Eight boxes, every subset of {p, q, r} once: 2³ = ${2 ** 3}`, same(nodes.map((n) => n.set.join('')).sort(), all) && nodes.length === 8]);
    const rows = [3, 2, 1, 0].map((k) => nodes.filter((n) => n.set.length === k));
    out.push([`One row per size, sizes 3, 2, 1, 0 top to bottom: ${rows.map((r) => r.length).join(', ')} boxes, ³C₃, ³C₂, ³C₁, ³C₀ = ${[3, 2, 1, 0].map((k) => choose(3, k)).join(', ')}`, rows.every((r, i) => r.length === choose(3, 3 - i) && r.every((n) => Math.abs(centre(n.rect)[1] - G12.ys[i]) < 6))]);
    // the lines read back off the drawing: which box each end touches
    const on = (r: Rect, p: P) => p[0] >= r[0] - 0.01 && p[0] <= r[2] + 0.01 && p[1] >= r[1] - 0.01 && p[1] <= r[3] + 0.01;
    const edges = linesNamed(s, /^edge:/).map(({ pts }) => [nodes.find((n) => on(n.rect, pts[0]))!, nodes.find((n) => on(n.rect, pts[pts.length - 1]))!]);
    const cover = edges.every(([a, b]) => a && b && b.set.length === a.set.length + 1 && a.set.every((e) => b.set.includes(e)));
    const wanted = nodes.flatMap((a) => nodes.filter((b) => b.set.length === a.set.length + 1 && a.set.every((e) => b.set.includes(e))).map((b) => `${a.set.join('')}>${b.set.join('')}`));
    out.push([`${edges.length} lines, each joining a subset to one with exactly one element more, and every such pair joined: 3 · 2² = ${3 * 2 ** 2}`, cover && edges.length === 12 && wanted.length === 12 && same(edges.map(([a, b]) => `${a.set.join('')}>${b.set.join('')}`).sort(), wanted.sort())]);
    out.push([`The counts down the side add to 1 + 3 + 3 + 1 = ${[3, 2, 1, 0].reduce((t, k) => t + choose(3, k), 0)} = 2³, as n[P(A)] = 2³ = 8 printed at the top`, [3, 2, 1, 0].reduce((t, k) => t + choose(3, k), 0) === 8 && hasLabel(s, 'n[P(A)] = 23 = 8')]);
    out.push(['The labels as printed: the eight sets, ∅, and ³C₃ = 1, ³C₂ = 3, ³C₁ = 3, ³C₀ = 1', ['{p, q, r}', '{p, q}', '{p, r}', '{q, r}', '{p}', '{q}', '{r}', '∅', '3C3 = 1', '3C2 = 3', '3C1 = 3', '3C0 = 1'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 1.3 · the four regions of two circles (Topic 03, p. 42)        */
/* ===================================================================== */
const CAP13 = 'The four regions of two overlapping circles: only <i>A</i>, only <i>B</i>, the overlap, neither.';
/** p. 42: radius 170 and centres 143 apart at the book's scale; here radius 84, centres 71 apart. */
const G13 = { r: 84, d: 71, cy: 130, frame: [6, 6, W - 6, 252] as Rect };
const circ13 = (): Circ[] => [{ name: 'A', c: [W / 2 - G13.d / 2, G13.cy], r: G13.r }, { name: 'B', c: [W / 2 + G13.d / 2, G13.cy], r: G13.r }];
/** The regions, by which circles hold them (bit 0 A, bit 1 B), with their names as printed. */
const REG13: [number, string[]][] = [[1, ['only <i>A</i>', '<i>A</i> − <i>B</i>']], [3, ['<i>A</i> ∩ <i>B</i>']], [2, ['only <i>B</i>', '<i>B</i> − <i>A</i>']], [0, ['neither', '(<i>A</i> ∪ <i>B</i>)′']]];
function frameU(s: Sketch, f: Rect) {
  path(s, rectPts(f), { w: 1.5, name: 'U' });
  lab(s, f[0] + 10, f[1] + 24, I('U'), { anchor: 'start', size: 17 });
}
const fig13: Diagram = {
  id: 'm11-01-fig-1.3',
  topic: 2,
  name: 'Two-set Venn regions',
  cases: [{ chip: 'Four regions', cap: CAP13 }],
  draw() {
    const s = new Sketch(W, 258), cs = circ13(), f = G13.frame;
    frameU(s, f);
    cs.forEach((k) => oval(s, k.c, k.r, k.r, { w: 1.7, name: `circle:${k.name}` }));
    circleName(s, cs[0], 236, 16);
    circleName(s, cs[1], -56, 16);
    REG13.forEach(([m, lines]) => regionLabel(s, cs, f, m, lines, 13, m === 0 ? [f[0], 170, 130, f[3]] : undefined));
    return s;
  },
  check() {
    const s = fig13.draw(fig13.cases[0]), out: Check[] = [], cs = circ13(), f = G13.frame;
    const want = (m: number) => (m === 0 ? 'in neither' : m === 3 ? 'in both' : m === 1 ? 'in A only' : 'in B only');
    REG13.forEach(([m, lines]) => {
      const where = lines.map((t) => maskOf(cs, centre(labelsNamed(s, plain(t))[0].rect)));
      out.push([`"${lines.map(plain).join(' / ')}" stands ${want(where[0])}: the region it names`, where.every((w) => w === m)]);
    });
    // the names say what the circles hold: A − B is in A and not in B; (A ∪ B)′ in neither
    const names: [string, (a: boolean, b: boolean) => boolean][] = [['A − B', (a, b) => a && !b], ['A ∩ B', (a, b) => a && b], ['B − A', (a, b) => b && !a], ['(A ∪ B)′', (a, b) => !(a || b)]];
    out.push(['Each set expression is true in its own region and no other: A − B only in A, A ∩ B in both, B − A only in B, (A ∪ B)′ outside both', names.every(([t, fn]) => { const m = maskOf(cs, centre(labelsNamed(s, t)[0].rect)); return [0, 1, 2, 3].every((k) => fn(!!(k & 1), !!(k & 2)) === (k === m)); })]);
    out.push([`The circles overlap: centres ${G13.d} px apart, less than the diameter ${2 * G13.r}, and both inside U`, G13.d < 2 * G13.r && cs.every((k) => inside(f, [k.c[0] - k.r, k.c[1] - k.r]) && inside(f, [k.c[0] + k.r, k.c[1] + k.r]))]);
    out.push(['A and B named outside their circles, A at the upper left and B at the upper right; U in the corner of the rectangle', maskOf(cs, centre(labelsNamed(s, 'A')[0].rect)) === 0 && maskOf(cs, centre(labelsNamed(s, 'B')[0].rect)) === 0 && centre(labelsNamed(s, 'A')[0].rect)[0] < W / 2 && centre(labelsNamed(s, 'B')[0].rect)[0] > W / 2 && hasLabel(s, 'U')]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 1.4 · A = [−2, 5) and B = (1, 8] (Topic 03, p. 46)             */
/* ===================================================================== */
const CAP14 = '<i>A</i> = [−2, 5) and <i>B</i> = (1, 8] on the number line, with the overlap (1, 5) shaded.';
/** p. 46, as printed. */
const A14: Iv = { lo: -2, hi: 5, lc: true, rc: false }, B14: Iv = { lo: 1, hi: 8, lc: false, rc: true };
const PRINT14 = { A: '[−2, 5)', B: '(1, 8]', AB: '(1, 5)', union: '[−2, 8]', diff: '[−2, 1]' };
const L14: NL = { x0: 22, ux: 24.5, y: 142, from: -3, to: 9 };
const ROW14 = { A: 38, B: 76, AB: 114, band: [26, 134] };
const fig14: Diagram = {
  id: 'm11-01-fig-1.4',
  topic: 2,
  name: 'Intervals A and B on a line',
  cases: [{ chip: 'Overlap (1, 5)', cap: CAP14 }],
  draw() {
    const s = new Sketch(W, 200), L = L14, R = ROW14, AB = meet(A14, B14);
    axis(s, L, Array.from({ length: 13 }, (_, i) => i - 3), { left: NX(L, -3.3), right: NX(L, 9.55), labelY: 162 });
    const bars = [bar(s, L, A14, R.A, 'A'), bar(s, L, B14, R.B, 'B'), bar(s, L, AB, R.AB, 'AB', { color: C.mari, w: 3.4 })];
    lab(s, W - 6, R.A - 14, `${I('A')} = ${PRINT14.A}`, { anchor: 'end', size: 13.5 });
    lab(s, W - 6, R.B - 14, `${I('B')} = ${PRINT14.B}`, { anchor: 'end', size: 13.5 });
    lab(s, W - 6, R.AB - 14, `${I('A')} ∩ ${I('B')} = ${PRINT14.AB}`, { anchor: 'end', size: 13.5, color: C.amber });
    lab(s, NX(L, 3), 190, `${I('A')} ∪ ${I('B')} = ${PRINT14.union},   ${I('A')} − ${I('B')} = ${PRINT14.diff}`, { size: 13.5, color: C.slate });
    const x1 = NX(L, AB.lo), x5 = NX(L, AB.hi);
    edge(s, x1, 22, 148, 'edge:lo');
    edge(s, x5, 22, 148, 'edge:hi');
    HATCH.set(s, hatch(s, (p) => p[0] > x1 + 3 && p[0] < x5 - 3 && p[1] > R.band[0] && p[1] < R.band[1], [x1, R.band[0], x5, R.band[1]], { avoid: bars, gap: 3 }));
    return s;
  },
  check() {
    const s = fig14.draw(fig14.cases[0]), out: Check[] = [], L = L14, dots = DOTS.get(s)!;
    const read = (name: string): Iv => { const [a, b] = dots.filter((d) => d.bar === name).sort((p, q) => p.x - q.x); return { lo: vOf(L, a.x), hi: vOf(L, b.x), lc: !a.open, rc: !b.open }; };
    const A = read('A'), B = read('B'), AB = read('AB');
    out.push([`The bars read back off the line: A = ${ivText(A)} (filled −2, hollow 5), B = ${ivText(B)} (hollow 1, filled 8), as printed`, ivText(A) === PRINT14.A && ivText(B) === PRINT14.B]);
    const m = meet(A, B);
    out.push([`A ∩ B = (max(−2, 1), min(5, 8)) = ${ivText(m)}: 1 is open because B leaves it out, 5 because A does; the bar drawn is ${ivText(AB)}`, ivText(m) === PRINT14.AB && ivText(AB) === PRINT14.AB && !has(m, 1) && !has(m, 5) && has(m, 3)]);
    const u = join(A, B), d = minus(A, B);
    out.push([`A ∪ B = ${ivText(u)} (the bars overlap, so one interval) and A − B = ${ivText(d)} (1 ∉ B, so 1 stays), as printed under the line`, ivText(u) === PRINT14.union && ivText(d) === PRINT14.diff && has(d, 1) && !has(B, 1)]);
    const H = HATCH.get(s) ?? [], x1 = NX(L, 1), x5 = NX(L, 5);
    out.push([`The overlap hatched between the dashed edges at 1 and 5 (${H.length} strokes), none past them`, H.length > 20 && hatchAll(s, (p) => p[0] > x1 && p[0] < x5)]);
    out.push(['Hollow dots for the ends left out, filled for the ends kept: −2 and 8 filled; 1, 5 and both ends of A ∩ B hollow', dots.filter((q) => !q.open).map((q) => fmt(vOf(L, q.x))).sort().join() === ['−2', '8'].sort().join()]);
    out.push(['The labels as printed: A = [−2, 5), B = (1, 8], A ∩ B = (1, 5), A ∪ B = [−2, 8], A − B = [−2, 1], ticks −3 to 9', ['A = [−2, 5)', 'B = (1, 8]', 'A ∩ B = (1, 5)', 'A ∪ B = [−2, 8],   A − B = [−2, 1]', '−3', '9'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Three circles: Figs 1.5, 1.6, 1.7                                     */
/* ===================================================================== */
/** p. 51 and p. 66: three equal circles, centres one radius apart (an equilateral triangle), A on top. */
const G3 = { r: 90, top: 40 };
function circ3(): Circ[] {
  const r = G3.r, cyA = G3.top + r, cyBC = cyA + (r * Math.sqrt(3)) / 2;
  return [{ name: 'A', c: [W / 2, cyA], r }, { name: 'B', c: [W / 2 - r / 2, cyBC], r }, { name: 'C', c: [W / 2 + r / 2, cyBC], r }];
}
const FRAME3: Rect = [6, 6, W - 6, G3.top + G3.r + (G3.r * Math.sqrt(3)) / 2 + G3.r + 10];
function venn3(s: Sketch) {
  const cs = circ3();
  frameU(s, FRAME3);
  cs.forEach((k) => oval(s, k.c, k.r, k.r, { w: 1.7, name: `circle:${k.name}` }));
  lab(s, cs[0].c[0], cs[0].c[1] - cs[0].r - 9, I('A'), { size: 17 });
  circleName(s, cs[1], 145, 16);
  circleName(s, cs[2], 35, 16);
  return cs;
}
/** p. 65's table: region k and which of A, B, C hold it (bit 0 A, bit 1 B, bit 2 C). */
const REGIONS: [number, number][] = [[1, 1], [2, 2], [3, 4], [4, 3], [5, 6], [6, 5], [7, 7], [8, 0]];
const maskOfR = (k: number) => REGIONS.find(([j]) => j === k)![1];
const RNAME = (k: number) => `${I('R')}<sub>${k}</sub>`;
const NONE_ROI: Rect = [236, 6, W - 6, 96];

/* Figure 1.5 · the eight regions of three circles (Topic 04, p. 51) */
const CAP15 = 'The eight regions of a three-circle Venn diagram, each one named.';
/** p. 51, each region's name as printed, by which circles hold it. */
const NAMES15: [number, string[]][] = [
  [1, ['only <i>A</i>']], [2, ['only <i>B</i>']], [4, ['only <i>C</i>']],
  [3, ['<i>A</i> ∩ <i>B</i>', 'only']], [5, ['<i>C</i> ∩ <i>A</i>', 'only']], [6, ['<i>B</i> ∩ <i>C</i>', 'only']],
  [7, ['<i>A</i> ∩ <i>B</i> ∩ <i>C</i>']], [0, ['none']],
];
/** What a printed name means: the circles it puts the region in. */
function meaning(lines: string[]): number {
  const t = lines.map(plain).join(' ');
  if (t === 'none') return 0;
  return ['A', 'B', 'C'].reduce((m, n, i) => m | (t.includes(n) ? 1 << i : 0), 0);
}
const fig15: Diagram = {
  id: 'm11-01-fig-1.5',
  topic: 3,
  name: 'Three-set Venn regions',
  cases: [{ chip: 'Eight regions', cap: CAP15 }],
  draw() {
    const s = new Sketch(W, FRAME3[3] + 6), cs = venn3(s);
    NAMES15.forEach(([m, lines]) => regionLabel(s, cs, FRAME3, m, lines, 12.5, m === 0 ? NONE_ROI : undefined));
    return s;
  },
  check() {
    const s = fig15.draw(fig15.cases[0]), out: Check[] = [], cs = circ3();
    const at = NAMES15.map(([, lines]) => maskOf(cs, centre(labelsNamed(s, plain(lines[0]))[0].rect)));
    out.push([`Eight regions, 2³ = ${2 ** 3}, each named once, and each name stands in the region it names (read back from where it is drawn)`, NAMES15.every(([m, lines], i) => meaning(lines) === m && at[i] === m) && new Set(at).size === 8]);
    out.push(['"only" names stand where one or two circles hold the region and no third: "A ∩ B only" is outside C, "only A" outside B and C', NAMES15.filter(([, l]) => l.map(plain).join(' ').includes('only')).every(([m]) => m !== 7 && m !== 0)]);
    const d = len(cs[0].c, cs[1].c);
    out.push([`Centres an equal ${fmt(d, 1)} px apart, less than the radius ${G3.r} × 2, so all eight regions exist; the middle region holds a ${fmt(G3.r - d / Math.sqrt(3), 1)} px circle`, [len(cs[0].c, cs[2].c), len(cs[1].c, cs[2].c)].every((e) => Math.abs(e - d) < 1e-9) && d < 2 * G3.r && G3.r - d / Math.sqrt(3) > 30]);
    out.push(['Circles named A (top), B (lower left), C (lower right) outside their own circles; U in the corner', maskOf(cs, centre(labelsNamed(s, 'A')[0].rect)) === 0 && centre(labelsNamed(s, 'B')[0].rect)[0] < cs[1].c[0] && centre(labelsNamed(s, 'C')[0].rect)[0] > cs[2].c[0] && hasLabel(s, 'U')]);
    out.push(...layout(s));
    return out;
  },
};

/* Figure 1.6 · the fixed region key (Additional topic F, p. 66) */
const CAP16 = 'The fixed region key <i>R</i><sub>1</sub> to <i>R</i><sub>8</sub> used throughout Additional topic F.';
/** p. 66, the three region lists printed under the diagram. */
const KEY16 = { A: [1, 4, 6, 7], B: [2, 4, 5, 7], C: [3, 5, 6, 7] };
const keyHtml = (n: string, ks: number[]) => `${I(n)} = {${ks.map(RNAME).join(', ')}}`;
function rLabel(s: Sketch, cs: Circ[], k: number) {
  regionLabel(s, cs, FRAME3, maskOfR(k), [RNAME(k)], 15, k === 8 ? NONE_ROI : undefined);
}
const fig16: Diagram = {
  id: 'm11-01-fig-1.6',
  topic: 10,
  name: 'Fixed region key',
  cases: [{ chip: 'Region key', cap: CAP16 }],
  draw() {
    const y = FRAME3[3], s = new Sketch(W, y + 74), cs = venn3(s);
    REGIONS.forEach(([k]) => rLabel(s, cs, k));
    (['A', 'B', 'C'] as const).forEach((n, i) => lab(s, W / 2, y + 22 + i * 20, keyHtml(n, KEY16[n]), { size: 13.5, color: C.slate }));
    return s;
  },
  check() {
    const s = fig16.draw(fig16.cases[0]), out: Check[] = [], cs = circ3();
    const where = REGIONS.map(([k]) => maskOf(cs, centre(labelsNamed(s, `R${k}`)[0].rect)));
    out.push([`R₁ to R₈ drawn in the regions of p. 65's table (R₁ only A, R₄ A and B not C, R₇ all three, R₈ outside all three), read back from the drawing`, REGIONS.every(([, m], i) => where[i] === m)]);
    const lists = (['A', 'B', 'C'] as const).map((n, i) => REGIONS.filter((_, j) => where[j] & (1 << i)).map(([k]) => k));
    out.push([`The key read off the drawing: A = {${lists[0].map((k) => `R${k}`).join(', ')}}, B = {${lists[1].map((k) => `R${k}`).join(', ')}}, C = {${lists[2].map((k) => `R${k}`).join(', ')}}, as printed under it`, same(lists[0], KEY16.A) && same(lists[1], KEY16.B) && same(lists[2], KEY16.C) && (['A', 'B', 'C'] as const).every((n) => hasLabel(s, plain(keyHtml(n, KEY16[n]))))]);
    out.push(['Every element of U lies in exactly one region: the eight masks are all different and cover all 2³ cases', new Set(where).size === 8]);
    out.push(...layout(s));
    return out;
  },
};

/* Figure 1.7 · the distributive law by shading (Additional topic F, p. 68) */
const CAP17 = 'Both sides of the distributive law shade the same three regions <i>R</i><sub>4</sub>, <i>R</i><sub>6</sub>, <i>R</i><sub>7</sub>.';
type Side17 = { chip: string; cap: string; expr: string; fn: (a: boolean, b: boolean, c: boolean) => boolean };
const SIDES17: Side17[] = [
  { chip: 'Left side', cap: CAP17, expr: `${I('A')} ∩ (${I('B')} ∪ ${I('C')})`, fn: (a, b, c) => a && (b || c) },
  { chip: 'Right side', cap: CAP17, expr: `(${I('A')} ∩ ${I('B')}) ∪ (${I('A')} ∩ ${I('C')})`, fn: (a, b, c) => (a && b) || (a && c) },
];
const SHADED17 = [4, 6, 7];
/** p. 68, the expression printed under each panel. */
const PRINT17: Record<string, string> = { 'Left side': 'A ∩ (B ∪ C)', 'Right side': '(A ∩ B) ∪ (A ∩ C)' };
const bits = (m: number): [boolean, boolean, boolean] => [!!(m & 1), !!(m & 2), !!(m & 4)];
const fig17: Diagram = {
  id: 'm11-01-fig-1.7',
  topic: 10,
  name: 'Distributive law by shading',
  cases: SIDES17,
  draw(c: Side17) {
    const y = FRAME3[3], s = new Sketch(W, y + 36), cs = venn3(s);
    SHADED17.forEach((k) => rLabel(s, cs, k));
    lab(s, W / 2, y + 26, c.expr, { size: 15 });
    HATCH.set(s, hatch(s, (p) => c.fn(...bits(maskOf(cs, p))) && toEdge(cs, p) > 3, [6, 6, W - 6, y]));
    return s;
  },
  check(c: Side17) {
    const s = fig17.draw(c), out: Check[] = [], cs = circ3();
    const shaded = REGIONS.filter(([, m]) => c.fn(...bits(m))).map(([k]) => k);
    out.push([`${plain(c.expr)} evaluated on all eight regions holds in R${shaded.join(', R')}: the three the caption names`, same(shaded, SHADED17)]);
    const other = SIDES17.find((o) => o !== c)!;
    out.push(['Both sides agree on every region (2³ cases), so the two sets are equal', REGIONS.every(([, m]) => c.fn(...bits(m)) === other.fn(...bits(m)))]);
    const H = HATCH.get(s) ?? [];
    out.push([`The hatching (${H.length} strokes) lies only where ${plain(c.expr)} holds`, H.length > 40 && hatchAll(s, (p) => shaded.includes(REGIONS.find(([, m]) => m === maskOf(cs, p))![0]))]);
    out.push(['R₄, R₆, R₇ named in their own regions, as printed', SHADED17.every((k) => maskOf(cs, centre(labelsNamed(s, `R${k}`)[0].rect)) === maskOfR(k))]);
    const printed = PRINT17[c.chip], otherPrinted = PRINT17[other.chip], under = labelsNamed(s, printed);
    out.push([`The panel is labelled ${printed}, as printed under this side on p. 68, below the frame; it is the expression shaded, and the other side's label is absent`, plain(c.expr) === printed && under.length === 1 && centre(under[0].rect)[1] > FRAME3[3] && !hasLabel(s, otherPrinted)]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 1.8 · the incidence grid (Topic 05, p. 78)                     */
/* ===================================================================== */
const CAP18 = 'Row totals give <i>n</i>(<i>A</i><sub><i>i</i></sub>), column totals give <i>d</i>(<i>x</i>), and both count the same ticks.';
/** p. 78, the ticks as printed: row i lists the columns of A_i's elements. */
const TICKS18 = [[1, 2, 3], [1, 4, 5], [2, 4, 6], [3, 5, 6]];
const G18 = { x0: 54, cw: 36, y0: 42, ch: 30, tx: 304 };
const fig18: Diagram = {
  id: 'm11-01-fig-1.8',
  topic: 4,
  name: 'Double counting grid',
  cases: [{ chip: 'Ticks counted twice', cap: CAP18 }],
  draw() {
    const s = new Sketch(W, 272), G = G18, rows = TICKS18.length, cols = 6, x1 = G.x0 + cols * G.cw, y1 = G.y0 + rows * G.ch;
    for (let j = 1; j < cols; j++) { s.line(G.x0 + j * G.cw, G.y0, G.x0 + j * G.cw, y1, { color: C.grey, w: 1 }); keep(s, [[G.x0 + j * G.cw, G.y0], [G.x0 + j * G.cw, y1]], 'grid'); }
    for (let i = 1; i < rows; i++) { s.line(G.x0, G.y0 + i * G.ch, x1, G.y0 + i * G.ch, { color: C.grey, w: 1 }); keep(s, [[G.x0, G.y0 + i * G.ch], [x1, G.y0 + i * G.ch]], 'grid'); }
    path(s, rectPts([G.x0, G.y0, x1, y1]), { color: C.slate, w: 1.5, name: 'grid:frame' });
    for (let j = 0; j < cols; j++) lab(s, G.x0 + (j + 0.5) * G.cw, G.y0 - 12, `${I('x')}<sub>${j + 1}</sub>`, { size: 15 });
    lab(s, G.tx, G.y0 - 12, `${I('n')}(${I('A')}<sub>${I('i')}</sub>)`, { size: 14 });
    TICKS18.forEach((row, i) => {
      const y = G.y0 + (i + 0.5) * G.ch;
      lab(s, G.x0 - 10, y + 4, `${I('A')}<sub>${i + 1}</sub>`, { anchor: 'end', size: 15 });
      row.forEach((j) => s.dot(G.x0 + (j - 0.5) * G.cw, y, 4.2));
      lab(s, G.tx, y + 5, String(row.length), { size: 14 });
    });
    const yd = y1 + 24, d = Array.from({ length: cols }, (_, j) => TICKS18.filter((r) => r.includes(j + 1)).length);
    lab(s, G.x0 - 10, yd, `${I('d')}(${I('x')})`, { anchor: 'end', size: 14 });
    d.forEach((v, j) => lab(s, G.x0 + (j + 0.5) * G.cw, yd, String(v), { size: 14 }));
    const total = TICKS18.flat().length, t = lab(s, G.tx, yd, String(total), { size: 15 });
    path(s, rectPts([t[0] - 7, t[1] - 5, t[2] + 7, t[3] + 5]), { color: C.mari, w: 1.6, name: 'total' });
    runs(s, W / 2, yd + 34, [{ op: '∑', below: I('i') }, { t: ` ${I('n')}(${I('A')}<sub>${I('i')}</sub>) = 12 = ` }, { op: '∑', below: `${I('x')} ∈ ${I('S')}` }, { t: ` ${I('d')}(${I('x')})` }], { anchor: 'middle', size: 13.5, color: C.slate });
    lab(s, W / 2, yd + 70, `(${I('mp')} = 4 ⋅ 3 = 12 = 2 ⋅ 6 = ${I('k')} ${I('n')}(${I('S')}))`, { size: 13.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig18.draw(fig18.cases[0]), out: Check[] = [], G = G18;
    // the ticks read back off the drawing: each dot's row and column
    const dots = s.points.filter((p) => p.r === 4.2).map((p) => [Math.floor((p.y - G.y0) / G.ch), Math.floor((p.x - G.x0) / G.cw)]);
    const rowT = TICKS18.map((_, i) => dots.filter(([r]) => r === i).length), colT = Array.from({ length: 6 }, (_, j) => dots.filter(([, c]) => c === j).length);
    out.push([`Row totals read off the grid: ${rowT.join(', ')}, each n(Aᵢ) = 3 as printed`, rowT.every((v) => v === 3) && TICKS18.every((_, i) => hasLabel(s, `A${i + 1}`))]);
    out.push([`Column totals: ${colT.join(', ')}, each d(x) = 2 as printed`, colT.every((v) => v === 2) && labelsNamed(s, '2').length === 6]);
    const sumR = rowT.reduce((a, b) => a + b, 0), sumC = colT.reduce((a, b) => a + b, 0);
    out.push([`Both orders count the same ${dots.length} ticks: Σ n(Aᵢ) = ${sumR} = Σ d(x) = ${sumC}, the boxed 12`, sumR === 12 && sumC === 12 && dots.length === 12 && hasLabel(s, '12')]);
    const m = TICKS18.length, p = rowT[0], k = colT[0], nS = colT.length;
    out.push([`The uniform case: m p = ${m} ⋅ ${p} = ${m * p} = ${k} ⋅ ${nS} = k n(S), so n(S) = mp/k = ${(m * p) / k}`, m * p === 12 && k * nS === 12 && (m * p) / k === nS]);
    out.push(['The labels as printed: x₁ to x₆, A₁ to A₄, n(Aᵢ), d(x), the identity and the uniform case under the grid', hasLabel(s, 'x6') && hasLabel(s, 'n(Ai)') && hasLabel(s, 'd(x)') && hasLabel(s, '(mp = 4 ⋅ 3 = 12 = 2 ⋅ 6 = k n(S))') && hasLabel(s, '∑_i n(Ai) = 12 = ∑_x ∈ S d(x)')]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 1.9 · the nested bars and their core (Topic 05, p. 82)         */
/* ===================================================================== */
const CAP19 = 'The nested bars <i>A</i><sub>1</sub>, <i>A</i><sub>2</sub>, <i>A</i><sub>3</sub> with their common core [2, 5] shaded beneath.';
/** p. 81: Aₙ = [2 − 1/n, 5 + 1/n], as numerator and denominator. */
const An = (n: number): [[number, number], [number, number]] => [[2 * n - 1, n], [5 * n + 1, n]];
/** p. 82, the ends as printed (1.5 and 5.5 as 3/2 and 11/2). */
const PRINT19: { n: number; lo: [number, number]; hi: [number, number]; pieces: Piece[] }[] = [
  { n: 1, lo: [1, 1], hi: [6, 1], pieces: [{ t: `${I('A')}<sub>1</sub> = [1, 6]` }] },
  { n: 2, lo: [3, 2], hi: [11, 2], pieces: [{ t: `${I('A')}<sub>2</sub> = [1.5, 5.5]` }] },
  { n: 3, lo: [5, 3], hi: [16, 3], pieces: [{ t: `${I('A')}<sub>3</sub> = [` }, { num: '5', den: '3' }, { t: ', ' }, { num: '16', den: '3' }, { t: ']' }] },
];
const L19: NL = { x0: 31, ux: 30, y: 168, from: 1, to: 6 };
const ROW19 = [26, 58, 94], CORE19 = 142;
const eqR = (a: [number, number], b: [number, number]) => a[0] * b[1] === b[0] * a[1];
const fig19: Diagram = {
  id: 'm11-01-fig-1.9',
  topic: 4,
  name: 'Nested intervals',
  cases: [{ chip: 'Common core', cap: CAP19 }],
  draw() {
    const s = new Sketch(W, 200), L = L19, lx = 210;
    axis(s, L, [1, 2, 3, 4, 5, 6], { left: NX(L, 0.45), right: NX(L, 6.6), labelY: 188 });
    const bars = PRINT19.map((b, i) => {
      const r = bar(s, L, { lo: b.lo[0] / b.lo[1], hi: b.hi[0] / b.hi[1], lc: true, rc: true }, ROW19[i], `A${b.n}`);
      runs(s, lx, ROW19[i] + 4.5, b.pieces, { size: 13.5 });
      return r;
    });
    // the dots: the family goes on
    const vx = NX(L, 3.5);
    [-5, 0, 5].forEach((dy) => s.add(`<circle cx="${r1(vx)}" cy="${r1(118 + dy)}" r="1.4" fill="${C.slate}"/>`));
    const dotsBox: Rect = [vx - 2, 111, vx + 2, 125];
    bars.push(bar(s, L, { lo: 2, hi: 5, lc: true, rc: true }, CORE19, 'core', { color: C.mari, w: 3.4 }), dotsBox);
    runs(s, lx, CORE19 + 2, [{ op: '⋂', below: `${I('n')} ≥ 1` }, { t: ` ${I('A')}<sub>${I('n')}</sub> = [2, 5]` }], { size: 13.5, color: C.amber });
    const x2 = NX(L, 2), x5 = NX(L, 5);
    edge(s, x2, 12, 174, 'edge:lo');
    edge(s, x5, 12, 174, 'edge:hi');
    HATCH.set(s, hatch(s, (p) => p[0] > x2 + 3 && p[0] < x5 - 3 && p[1] > 14 && p[1] < 146, [x2, 14, x5, 146], { avoid: bars, gap: 3 }));
    return s;
  },
  check() {
    const s = fig19.draw(fig19.cases[0]), out: Check[] = [], L = L19, dots = DOTS.get(s)!;
    out.push([`The printed ends are Aₙ = [2 − 1/n, 5 + 1/n]: ${PRINT19.map((b) => `n = ${b.n}: [${b.lo[0]}/${b.lo[1]}, ${b.hi[0]}/${b.hi[1]}]`).join('; ')}`, PRINT19.every((b) => eqR(b.lo, An(b.n)[0]) && eqR(b.hi, An(b.n)[1]))]);
    const ends = PRINT19.map((b) => dots.filter((d) => d.bar === `A${b.n}`).map((d) => vOf(L, d.x)).sort((p, q) => p - q));
    out.push([`The bars drawn to scale: ${ends.map((e) => `[${fmt(e[0], 3)}, ${fmt(e[1], 3)}]`).join(', ')}, every end filled (closed)`, ends.every((e, i) => Math.abs(e[0] - PRINT19[i].lo[0] / PRINT19[i].lo[1]) < 1e-9 && Math.abs(e[1] - PRINT19[i].hi[0] / PRINT19[i].hi[1]) < 1e-9) && dots.every((d) => !d.open)]);
    out.push(['Nested: each bar lies inside the one above it (A₁ ⊇ A₂ ⊇ A₃), shrinking from both ends', ends.slice(1).every((e, i) => e[0] > ends[i][0] && e[1] < ends[i][1])]);
    const N = 1000, lo = 2 - 1 / N, hi = 5 + 1 / N;
    out.push([`The core is [2, 5]: 2 and 5 lie in every Aₙ (2 − 1/n < 2, 5 < 5 + 1/n), while any x < 2 drops out once 1/n is smaller than 2 − x (n = ${N}: [${fmt(lo, 4)}, ${fmt(hi, 4)}])`, [1, 2, 3, 10, N].every((n) => 2 - 1 / n < 2 && 5 < 5 + 1 / n) && lo > 1.999 - 1e-12 && hi < 5.0011]);
    const core = dots.filter((d) => d.bar === 'core').map((d) => vOf(L, d.x)).sort((p, q) => p - q), H = HATCH.get(s) ?? [];
    out.push([`The core bar drawn from ${fmt(core[0])} to ${fmt(core[1])}, and the band beneath it hatched between the dashed edges at 2 and 5 (${H.length} strokes)`, core[0] === 2 && core[1] === 5 && H.length > 20 && hatchAll(s, (p) => p[0] > NX(L, 2) && p[0] < NX(L, 5))]);
    const fr = FRACS.get(s) ?? [];
    out.push(['5/3 and 16/3 are stacked: numerator above the rule, 3 below it', fr.length === 2 && fr.every((f) => f.den === '3' && f.numY < f.rule[2] && f.denY - 9 > f.rule[2]) && same(fr.map((f) => f.num), ['5', '16'])]);
    out.push(['The labels as printed: A₁ = [1, 6], A₂ = [1.5, 5.5], A₃ = [5/3, 16/3], ⋂ₙ≥₁ Aₙ = [2, 5], ticks 1 to 6', ['A1 = [1, 6]', 'A2 = [1.5, 5.5]', 'A3 = [5/3, 16/3]', '⋂_n ≥ 1 An = [2, 5]', '1', '6'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Addendum I's "Figure 1" · the entries of A on a shelf (p. 88)         */
/* ===================================================================== */
const CAPI1 = 'The four entries of <i>A</i> = {1, {2}, {3, 4}, ∅} shown as objects on a shelf: the bare numeral 1, two closed boxes, and one empty box; so <i>n</i>(<i>A</i>) = 4, and 2, 3, 4 are inside boxes rather than on the shelf themselves.';
const SETI1 = '{1, {2}, {3, 4}, ∅}';
/** The top-level entries of a set written in braces: a bare entry, or a set (its elements; ∅ none). */
function entries(t: string): { text: string; set: string[] | null }[] {
  const inner = t.trim().slice(1, -1), out: string[] = [];
  let depth = 0, cur = '';
  for (const ch of inner) {
    if (ch === '{') depth++;
    if (ch === '}') depth--;
    if (ch === ',' && depth === 0) { out.push(cur.trim()); cur = ''; } else cur += ch;
  }
  out.push(cur.trim());
  return out.map((e) => ({ text: e, set: e === '∅' ? [] : e.startsWith('{') ? e.slice(1, -1).split(',').map((x) => x.trim()) : null }));
}
/** The shelf's objects in the book's order and proportions (p. 88: boxes 162, 204, 120 wide at 220 dpi). */
const GI1 = { shelf: 122, boxH: 42, items: [{ x: 58, w: 0 }, { x: 104, w: 52 }, { x: 178, w: 66 }, { x: 266, w: 40 }] };
const BOXESI1 = new WeakMap<Sketch, { entry: number; rect: Rect; inside: string[] }[]>();
const fig1I: Diagram = {
  id: 'm11-01-I-d1',
  topic: 13,
  name: 'Sets as entries on a shelf',
  cases: [{ chip: 'Four entries', cap: CAPI1 }],
  draw() {
    const s = new Sketch(W, 196), G = GI1, es = entries(SETI1), boxes: { entry: number; rect: Rect; inside: string[] }[] = [];
    const frame: Rect = [6, 6, W - 6, 190];
    s.add(`<rect x="${frame[0]}" y="${frame[1]}" width="${frame[2] - frame[0]}" height="${frame[3] - frame[1]}" rx="8" fill="none" stroke="${C.ink}" stroke-width="1.6"/>`);
    keep(s, rectPts(frame), 'frame');
    lab(s, 18, 32, I('A'), { anchor: 'start', size: 19 });
    lab(s, W - 18, 30, `${I('n')}(${I('A')}) = ${es.length}`, { anchor: 'end', size: 13.5, color: C.slate });
    s.line(24, G.shelf, W - 24, G.shelf, { color: C.slate, w: 3 });
    keep(s, [[24, G.shelf], [W - 24, G.shelf]], 'shelf');
    es.forEach((e, i) => {
      const it = G.items[i], cx = it.x + it.w / 2;
      if (e.set === null) lab(s, cx, G.shelf - 12, e.text, { size: 24 });
      else {
        const r: Rect = [it.x, G.shelf - 1.5 - G.boxH, it.x + it.w, G.shelf - 1.5];
        path(s, rectPts(r), { color: C.mari, w: 1.6, name: `box:${i}` });
        e.set.forEach((x, k) => lab(s, cx + (k - (e.set!.length - 1) / 2) * 18, G.shelf - 1.5 - G.boxH / 2 + 5.5, x, { size: 16 }));
        boxes.push({ entry: i, rect: r, inside: e.set });
      }
      lab(s, cx, G.shelf + 24, e.text, { size: 14, color: C.slate });
    });
    lab(s, W / 2, 172, 'four entries; 2, 3, 4 sit inside boxes, not on the shelf', { size: 11, color: C.slate });
    BOXESI1.set(s, boxes);
    return s;
  },
  check() {
    const s = fig1I.draw(fig1I.cases[0]), out: Check[] = [], es = entries(SETI1), boxes = BOXESI1.get(s)!;
    out.push([`A = ${SETI1} has ${es.length} entries (${es.map((e) => e.text).join(' ; ')}), so n(A) = ${es.length}, as printed`, es.length === 4 && hasLabel(s, 'n(A) = 4')]);
    out.push([`One bare numeral and ${boxes.length} boxes, ${boxes.filter((b) => b.inside.length).length} closed and ${boxes.filter((b) => !b.inside.length).length} empty: the entries that are sets are boxes, ∅ the empty one`, es.filter((e) => e.set === null).length === 1 && boxes.length === 3 && boxes.filter((b) => !b.inside.length).length === 1 && same(boxes.map((b) => b.entry), es.map((e, i) => (e.set ? i : -1)).filter((i) => i >= 0))]);
    const inBox = (t: string) => labelsNamed(s, t).some((l) => boxes.some((b) => inside(b.rect, centre(l.rect))));
    out.push(['2, 3 and 4 are drawn inside boxes and are not entries of A (2 ∉ A, 3 ∉ A, 4 ∉ A); 1 stands on the shelf and is an entry', ['2', '3', '4'].every((t) => inBox(t) && !es.some((e) => e.text === t)) && !inBox('1') && es.some((e) => e.text === '1')]);
    const order = es.map((e) => centre(labelsNamed(s, e.text).find((l) => centre(l.rect)[1] > GI1.shelf)!.rect)[0]);
    out.push(['Each entry named under its object, in the printed order 1, {2}, {3, 4}, ∅', order.every((x, i) => !i || x > order[i - 1]) && order.every((x, i) => Math.abs(x - (GI1.items[i].x + GI1.items[i].w / 2)) < 0.5)]);
    out.push(['The labels as printed: A, n(A) = 4, 1, {2}, {3, 4}, ∅, four entries; 2, 3, 4 sit inside boxes, not on the shelf', ['A', '{2}', '{3, 4}', '∅', 'four entries; 2, 3, 4 sit inside boxes, not on the shelf'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 11, Chapter 1 Sets: the book's figures, redrawn. */
export const DIAGRAMS_MATHEMATICS_11_01: Diagram[] = [fig11, fig12, fig13, fig14, fig15, fig16, fig17, fig18, fig19, fig1I];

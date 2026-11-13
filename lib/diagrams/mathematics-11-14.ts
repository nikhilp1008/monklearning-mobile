import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import { stixW } from '@/lib/diagrams/mathematics-11-03b';

/**
 * MATHEMATICS CLASS 11, CHAPTER 14 (Probability): every drawing of the Master Reference book (October edition) on
 * pp. 1188–1237, redrawn. The numbered figures stand on their own "CHAPTER 14 · FIGURES" plates, the page after their
 * caption; the Additional Topics part prints its own "Figure 1" and "Figure 2" in the text.
 *
 *   Figures 14.1 and 14.2 (p. 1196; captions p. 1195), Topic 01, topic index 0.
 *   Figure 14.3 (p. 1200; caption p. 1199) and Figure 14.4 (p. 1206; caption p. 1205), Topic 02, index 1.
 *   Figure 14.5 (p. 1214; caption p. 1213), Topic 03, index 2.
 *   Figure 14.6 (p. 1217; caption p. 1216), Additional topic A, index 3.
 *   Figure 14.7 (p. 1222; caption p. 1221), Additional topic B, index 4.
 *   The Additional Topics part's "Figure 1" (p. 1229), m11-14-C-d1, Additional topic C, index 5.
 *   The Additional Topics part's "Figure 2" (p. 1234), m11-14-D-d1, Additional topic D, index 6.
 *
 * ONE HIGHLIGHT. The book's shaded overlap, its orange and its teal notes are the marigold: 14.1 the hatched lens
 * (and φ in the disjoint case); 14.3 the hatched lens, its arrow and note; 14.4 "nothing below 0 / above 1"; 14.5 the
 * hatched centre; 14.6 the units box, "2, 4, 6" and its note; 14.7 the overlap bar, its dashed edges and the
 * overlap formula; C-d1 the lasso and "stage 1"; D-d1 the nine match-free cells. The book's navy, orange and
 * green circles, its navy boxes and its arrows are ink; its light grey leaders slate.
 *
 * NO FILLS. Shaded regions (the lens of 14.1 and 14.3, the centre of 14.5, D-d1's nine cells) are marigold hatching,
 * computed line by line and kept clear of every label. 14.4's tinted scale, 14.6's boxes, 14.7's bars, C-d1's
 * boxes and D-d1's envelopes are outlines.
 *
 * DOTS. C-d1's people: girls filled, boys hollow, as printed, named by the book's own "4 girls" and "5 boys"
 * beside a mark of each (the drawing's two kinds of person, not a colour key).
 *
 * DEPARTURES, for a phone. 14.1 and 14.7: the two panels are two chips. 14.5: the formula and the note under the
 * frame are two lines each. 14.6: the bracket's label and the bottom formula are two lines each. C-d1: "stage 2" is
 * under the role names (it stood at the right of the boxes). D-d1: "no letter meets … derangements" is two lines.
 * NO EM DASH: 14.3's note "counted twice in P(A) + P(B) — so subtract one copy" → a comma; 14.6's "constrained —
 * fill this first:" and C-d1's "stage 1 — which:", "stage 2 — in what order:" → brackets; C-d1's caption's pair of
 * dashes → brackets. Every fraction on a drawing is stacked by hand, and D-d1's caption's 9/24 = 3/8 and 5/8 are
 * written <frac>.
 */

const W = 340;
type P = [number, number];
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<\/?(?:i|sub|sup|b|frac|num|den)>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const I = (t: string) => `<i>${t}</i>`;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const centre = (r: Rect): P => [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2];
const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
const nPr = (n: number, r: number) => fact(n) / fact(n - r);
const nCr = (n: number, r: number) => nPr(n, r) / fact(r);
const NC = (x: string, y: string) => `<sup>${x}</sup>${I('C')}<sub>${y}</sub>`;
const NP = (x: string, y: string) => `<sup>${x}</sup>${I('P')}<sub>${y}</sub>`;
const Pr = (x: string) => `${I('P')}(${x})`;
const A = I('A'), B = I('B'), CC = I('C'), S = I('S');
const EMPTY = 'φ';

/* ---------- lines, labels and the layout checks (as in mathematics-11-13.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean | string; name?: string; free?: boolean };
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
const dashAttr = (d: Stroke['dash']) => (d === true ? ' stroke-dasharray="5 4"' : d ? ` stroke-dasharray="${d}"` : '');
/** A polyline; `free` leaves it out of the clearance check. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  if (!o.free) keep(s, pts, o.name);
}
/** An outlined rectangle, never filled; `rx` rounds its corners (kept as the plain rectangle for the checks). */
function box(s: Sketch, x0: number, y0: number, x1: number, y1: number, o: Stroke & { rx?: number } = {}) {
  if (!o.rx) return path(s, [[x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]], o);
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(x1 - x0)}" height="${r1(y1 - y0)}" rx="${o.rx}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${dashAttr(o.dash)}/>`);
  if (!o.free) keep(s, [[x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]], o.name);
}
/** A circle, kept as a fine polygon for the clearance check. */
function circle(s: Sketch, c: P, r: number, o: Stroke = {}) {
  s.add(`<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r1(r)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  keep(s, Array.from({ length: 241 }, (_, i): P => [c[0] + r * Math.cos((2 * Math.PI * i) / 240), c[1] + r * Math.sin((2 * Math.PI * i) / 240)]), o.name);
}
/** A filled arrowhead at `tip`, pointing along angle `ang`. */
function head(s: Sketch, tip: P, ang: number, col: string, L = 7) {
  const ux = Math.cos(ang), uy = Math.sin(ang), hw = L * 0.5, bx = tip[0] - L * ux, by = tip[1] - L * uy;
  s.add(`<path d="M${r1(tip[0])} ${r1(tip[1])} L${r1(bx + hw * uy)} ${r1(by - hw * ux)} L${r1(bx - hw * uy)} ${r1(by + hw * ux)} Z" fill="${col}"/>`);
}
/** An arrow with a small filled head at b. */
function arr(s: Sketch, a: P, b: P, o: Stroke & { head?: number } = {}) {
  const col = o.color ?? C.ink, L = Math.min(o.head ?? 7, len(a, b) / 1.6), ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
  const b2: P = [b[0] - L * Math.cos(ang) * 0.8, b[1] - L * Math.sin(ang) * 0.8];
  s.add(`<line x1="${r1(a[0])}" y1="${r1(a[1])}" x2="${r1(b2[0])}" y2="${r1(b2[1])}" stroke="${col}" stroke-width="${o.w ?? 1.4}" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  head(s, b, ang, col, L);
  if (!o.free) keep(s, [a, b], o.name ?? 'arrow');
}
/** A curved arrow (a cubic from a to b through the controls p and q), its head at b along the curve. */
function curveArr(s: Sketch, a: P, p: P, q: P, b: P, o: Stroke = {}) {
  const col = o.color ?? C.ink, at = (t: number): P => {
    const u = 1 - t;
    return [u * u * u * a[0] + 3 * u * u * t * p[0] + 3 * u * t * t * q[0] + t * t * t * b[0], u * u * u * a[1] + 3 * u * u * t * p[1] + 3 * u * t * t * q[1] + t * t * t * b[1]];
  };
  const pts = Array.from({ length: 41 }, (_, i) => at(i / 40)), ang = Math.atan2(b[1] - q[1], b[0] - q[0]);
  const stop = pts.findIndex((pt) => len(pt, b) < 5.5);
  path(s, pts.slice(0, stop > 0 ? stop + 1 : pts.length), { color: col, w: o.w ?? 1.4, name: o.name, free: true });
  head(s, b, ang, col, 7);
  keep(s, pts, o.name ?? 'curve');
  return pts;
}
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
const boxToLine = (r: Rect, pts: P[]) => {
  let gap = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
    for (let k = 0; k <= n; k++) gap = Math.min(gap, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  if (pts.length === 1) gap = rectDist(r, pts[0]);
  return gap;
};
function crowded(s: Sketch): string[] {
  const out: string[] = [];
  for (const { pts, name: ln } of LINES.get(s) ?? []) for (const l of s.labels) { const d = boxToLine(l.rect, pts); if (d < LABEL_GAP - 1e-9) out.push(`"${l.text}" ${fmt(d, 1)} px from the ${ln || 'line'}`); }
  return [...new Set(out)];
}
const clearCheck = (s: Sketch): Check => {
  const bad = crowded(s);
  return [`Every label stays at least ${LABEL_GAP} px clear of every line, outline, dot and hatch stroke${bad.length ? `: ${bad.join('; ')}` : ''}`, bad.length === 0];
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
const linesInFrame = (s: Sketch): Check => {
  const out = (LINES.get(s) ?? []).filter((l) => l.pts.some((p) => p[0] < -0.5 || p[0] > s.w + 0.5 || p[1] < -0.5 || p[1] > s.h + 0.5)).map((l) => l.name);
  return [`Every line lies inside the frame${out.length ? `: not ${[...new Set(out)].join(', ')}` : ''}`, out.length === 0];
};
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), inFrame(s), linesInFrame(s)];
const labelsNamed = (s: Sketch, t: string) => s.labels.filter((l) => l.text === t);
const hasLabel = (s: Sketch, t: string) => labelsNamed(s, t).length > 0;
const labelsCheck = (s: Sketch, ts: string[], what = 'The labels as printed'): Check => {
  const miss = ts.filter((t) => !hasLabel(s, t));
  return [`${what}: ${ts.join(' · ')}${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0];
};
/** No em dash, no vulgar-fraction character and no one-line fraction, in anything the drawing shows. */
const noBadChars = (s: Sketch, d: Diagram): Check => {
  const unraised = (h: string) => plain(h.replace(/<sup>.*?<\/sup>/g, '').replace(/<frac>.*?<\/frac>/g, ''));
  const all = [...s.texts.map((t) => unraised(t.html)), d.name, ...d.cases.flatMap((c) => [c.chip, unraised(c.cap)])].join(' ');
  return ['No em dash, no vulgar-fraction character and no slash fraction in the labels, name, chips or captions', !/[—¼-¾⅐-⅞]/.test(all) && !/[\w)!]\s*\/\s*[\w(]/.test(all)];
};

/** A line of STIX on the drawing, from its baseline, its box at its true width. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * (html.includes('<sup>') ? 0.85 : 0.72), x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text });
  return rect;
}

/* ---------- labels of several runs: text and stacked fractions (as in mathematics-11-13.ts) ---------- */
type Piece = { t: string } | { num: string; den: string };
const FRACS = new WeakMap<Sketch, { num: string; den: string; rule: [number, number, number]; numY: number; denY: number; numW: number; denW: number }[]>();
const FRAC_PAD = 2;
const fracW = (num: string, den: string, size: number) => Math.max(widthOf(num, size), widthOf(den, size)) + 2 * FRAC_PAD;
function frac(s: Sketch, x: number, y: number, num: string, den: string, size: number, color: string): Rect {
  const w = fracW(num, den, size), numY = y - 3, denY = y + 3 + size * 0.68;
  s.text(x, numY, num, { size, color });
  s.text(x, denY, den, { size, color });
  s.add(`<line x1="${r1(x - w / 2)}" y1="${r1(y)}" x2="${r1(x + w / 2)}" y2="${r1(y)}" stroke="${color}" stroke-width="1.1"/>`);
  FRACS.set(s, [...(FRACS.get(s) ?? []), { num, den, rule: [x - w / 2, x + w / 2, y], numY, denY, numW: widthOf(num, size), denW: widthOf(den, size) }]);
  return [x - w / 2, numY - size * 0.72, x + w / 2, denY + size * 0.22];
}
const pieceW = (p: Piece, size: number) => ('t' in p ? stixW(p.t, size) : fracW(p.num, p.den, size) + 2);
const pieceText = (p: Piece) => ('t' in p ? plain(p.t) : `${plain(p.num)}/${plain(p.den)}`);
function textRun(s: Sketch, at: number, w: number, y: number, t: string, size: number, color: string, leads: boolean) {
  const lead = /^ */.exec(plain(t))![0].length, trail = / *$/.exec(plain(t))![0].length, sp = stixW(' ', size), body = t.replace(/^((?:<[^>]+>)*) +/, '$1').replace(/ +((?:<\/[^>]+>)*)$/, '$1');
  if (leads) s.text(at + w - trail * sp, y, body, { size, anchor: 'end', color });
  else s.text(at + lead * sp, y, body, { size, anchor: 'start', color });
}
/** One label made of runs, its fractions' rules on the maths axis. Registered as ONE label. */
function runs(s: Sketch, x: number, y: number, parts: Piece[], o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, color = o.color ?? C.text, ws = parts.map((p) => pieceW(p, size)), total = ws.reduce((a, b) => a + b, 0);
  let at = o.anchor === 'middle' ? x - total / 2 : o.anchor === 'end' ? x - total : x;
  const bx: Rect = [at, y - size * 0.85, at + total, y + size * 0.36];
  const grow = (r: Rect) => { bx[1] = Math.min(bx[1], r[1]); bx[3] = Math.max(bx[3], r[3]); };
  parts.forEach((p, i) => {
    if ('t' in p) textRun(s, at, ws[i], y, p.t, size, color, i < parts.length - 1);
    else grow(frac(s, at + ws[i] / 2, y - size * 0.27, p.num, p.den, size, color));
    at += ws[i];
  });
  s.labels.push({ text: parts.map(pieceText).join(''), rect: bx });
  return bx;
}
/** Every stacked fraction really is stacked: numerator above the rule, denominator below, the rule as wide as both. */
const stackedCheck = (s: Sketch, want: string[]): Check => {
  const f = FRACS.get(s) ?? [], got = f.map((q) => `${plain(q.num)}/${plain(q.den)}`);
  const ok = f.every((q) => q.numY < q.rule[2] && q.denY - 6 > q.rule[2] && q.rule[1] - q.rule[0] >= Math.max(q.numW, q.denW)) && want.every((w) => got.includes(w)) && f.length === want.length;
  return [`Every fraction on the drawing is stacked by hand (${f.length}: ${[...new Set(got)].join(', ')}), numerator over the rule over denominator`, ok];
};

/* ---------- hatching: the book's shading, as marigold lines (mathematics-11-01.ts) ---------- */
const HATCH = new WeakMap<Sketch, [P, P][]>();
/** Marigold hatching at 45° over every point `inside` says is shaded, kept clear of every label already drawn. */
function hatch(s: Sketch, inside: (p: P) => boolean, bx: Rect, o: { step?: number; gap?: number } = {}): [P, P][] {
  const step = (o.step ?? 7) * Math.SQRT2, gap = o.gap ?? LABEL_GAP + 1, avoid = s.labels.map((l) => l.rect);
  const ok = (p: P) => inside(p) && avoid.every((r) => rectDist(r, p) >= gap);
  const segs: [P, P][] = [];
  for (let k = bx[0] + bx[1] + step / 2; k <= bx[2] + bx[3]; k += step) {
    const xa = Math.max(bx[0], k - bx[3]), xb = Math.min(bx[2], k - bx[1]);
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
  HATCH.set(s, [...(HATCH.get(s) ?? []), ...segs]);
  return segs;
}
/** Every hatch stroke's ends and middle pass the test. */
const hatchAll = (s: Sketch, test: (p: P) => boolean) => (HATCH.get(s) ?? []).every(([a, b]) => test(a) && test(b) && test([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]));

/* ---------- Venn diagrams (Figs 14.1, 14.3, 14.5) ---------- */
type Circ = { name: string; c: P; r: number };
const inCirc = (k: Circ, p: P) => len(p, k.c) < k.r;
/** Which circles hold p: bit 0 the first circle, bit 1 the second, bit 2 the third. */
const maskOf = (cs: Circ[], p: P) => cs.reduce((m, k, i) => m | (inCirc(k, p) ? 1 << i : 0), 0);
const toEdge = (cs: Circ[], p: P) => Math.min(...cs.map((k) => Math.abs(len(p, k.c) - k.r)));
/** The sample space S: its rectangle and its name in the top left corner, as printed. */
function frameS(s: Sketch, f: Rect) {
  box(s, f[0], f[1], f[2], f[3], { w: 1.7, name: 'frame S', rx: 4 });
  lab(s, f[0] + 16, f[1] + 24, S, { size: 18 });
}
/** How far a w × h box centred on p stays from every circle and the frame, or −1 if it leaves the region `mask`. */
function room(cs: Circ[], frame: Rect, mask: number, p: P, w: number, h: number): number {
  const r: Rect = [p[0] - w / 2, p[1] - h / 2, p[0] + w / 2, p[1] + h / 2], pts: P[] = [];
  const nx = Math.ceil(w / 3), ny = Math.ceil(h / 3);
  for (let i = 0; i <= nx; i++) pts.push([r[0] + (w * i) / nx, r[1]], [r[0] + (w * i) / nx, r[3]]);
  for (let j = 1; j < ny; j++) pts.push([r[0], r[1] + (h * j) / ny], [r[2], r[1] + (h * j) / ny]);
  let d = Infinity;
  for (const q of pts) {
    if (maskOf(cs, q) !== mask || q[0] < frame[0] || q[0] > frame[2] || q[1] < frame[1] || q[1] > frame[3]) return -1;
    d = Math.min(d, toEdge(cs, q), q[0] - frame[0], frame[2] - q[0], q[1] - frame[1], frame[3] - q[1]);
  }
  return d;
}
const SPOTS = new Map<string, P>();
/** The centre where a w × h label has the most room inside region `mask`, computed once. */
function spot(cs: Circ[], frame: Rect, mask: number, w: number, h: number): P {
  const key = JSON.stringify([cs.map((k) => [k.c, k.r]), frame, mask, r1(w), r1(h)]);
  const known = SPOTS.get(key);
  if (known) return known;
  let best: P = [frame[0], frame[1]], most = -1;
  for (let y = frame[1] + h / 2; y <= frame[3] - h / 2; y += 1.5)
    for (let x = frame[0] + w / 2; x <= frame[2] - w / 2; x += 1.5) {
      if (maskOf(cs, [x, y]) !== mask) continue;
      const d = room(cs, frame, mask, [x, y], w, h);
      if (d > most) { most = d; best = [x, y]; }
    }
  SPOTS.set(key, best);
  return best;
}
const LH = 15;
/** A label of one or more lines, at the roomiest spot of region `mask`. */
function regionLabel(s: Sketch, cs: Circ[], frame: Rect, mask: number, lines: string[], size: number, color: string = C.text): Rect[] {
  const w = Math.max(...lines.map((t) => widthOf(t, size))), h = (lines.length - 1) * LH + size * 0.94;
  const c = spot(cs, frame, mask, w, h), top = c[1] - h / 2;
  return lines.map((t, i) => lab(s, c[0], top + size * 0.72 + i * LH, t, { size, color }));
}

/* ===================================================================== */
/* Figure 14.1 · mutually exclusive or not (Topic 01, p. 1196)           */
/* ===================================================================== */
const CAP141 = 'Two overlapping events share outcomes and are not mutually exclusive; two disjoint events share none and are.';
type Case141 = { chip: string; cap: string; d: number; r: number; rel: string; words: string };
const CASES141: Case141[] = [
  { chip: 'Not mutually exclusive', cap: CAP141, d: 72, r: 64, rel: '≠', words: 'NOT mutually exclusive' },
  { chip: 'Mutually exclusive', cap: CAP141, d: 168, r: 60, rel: '=', words: 'mutually exclusive' },
];
const F141: Rect = [8, 8, W - 8, 228];
const circ141 = (c: Case141): Circ[] => [{ name: 'A', c: [W / 2 - c.d / 2, 102], r: c.r }, { name: 'B', c: [W / 2 + c.d / 2, 102], r: c.r }];
const fig141: Diagram = {
  id: 'm11-14-fig-14.1',
  topic: 0,
  name: 'Mutually exclusive or not',
  cases: CASES141,
  draw(c: Case141) {
    const s = new Sketch(W, 236), cs = circ141(c), meet = c.d < 2 * c.r;
    frameS(s, F141);
    cs.forEach((k) => circle(s, k.c, k.r, { name: `circle ${k.name}` }));
    lab(s, cs[0].c[0] - (c.r + 10) * 0.72, cs[0].c[1] - (c.r + 10) * 0.72, A, { size: 17 });
    lab(s, cs[1].c[0] + (c.r + 10) * 0.72, cs[1].c[1] - (c.r + 10) * 0.72, B, { size: 17 });
    if (meet) lab(s, W / 2, 107, `${A} ∩ ${B}`, { size: 13 });
    else lab(s, W / 2, 108, EMPTY, { size: 17, color: C.amber });
    lab(s, W / 2, 192, `${A} ∩ ${B} ${c.rel} ${EMPTY}`, { size: 15 });
    lab(s, W / 2, 213, c.words, { size: 13, color: C.slate });
    if (meet) hatch(s, (p) => maskOf(cs, p) === 3 && toEdge(cs, p) > 3, [W / 2 - c.r, 102 - c.r, W / 2 + c.r, 102 + c.r]);
    return s;
  },
  check(c: Case141) {
    const s = fig141.draw(c), out: Check[] = [], cs = circ141(c), meet = c.d < 2 * c.r;
    out.push([meet ? `The circles overlap (centres ${c.d} px apart, less than 2r = ${2 * c.r}): A ∩ B ≠ φ, so A and B are not mutually exclusive` : `The circles are apart (centres ${c.d} px apart, more than 2r = ${2 * c.r}): A ∩ B = φ, mutually exclusive`, meet === (c.rel === '≠') && (c.rel === '≠') === c.words.startsWith('NOT')]);
    const H = HATCH.get(s) ?? [];
    out.push([meet ? `The overlap, and only the overlap, is hatched (${H.length} strokes)` : 'Nothing is hatched: the events share no outcome', meet ? H.length > 8 && hatchAll(s, (p) => maskOf(cs, p) === 3) : H.length === 0]);
    if (meet) out.push(['"A ∩ B" stands in the overlap', maskOf(cs, centre(labelsNamed(s, 'A ∩ B')[0].rect)) === 3]);
    else out.push(['φ stands between the two circles, in neither', maskOf(cs, centre(labelsNamed(s, 'φ')[0].rect)) === 0]);
    out.push(labelsCheck(s, ['S', 'A', 'B', `A ∩ B ${c.rel} φ`, c.words]));
    out.push(noBadChars(s, fig141));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 14.2 · the coin-then-die tree (Topic 01, p. 1196)              */
/* ===================================================================== */
const CAP142 = 'A tree for tossing a coin then rolling a die: two branches, then six from each, giving <i>n</i>(<i>S</i>) = 12 ordered outcomes.';
const COIN = ['H', 'T'], DIE = [1, 2, 3, 4, 5, 6];
const G142 = { row0: 58, dy: 22, xToss: 40, xCoin: 124, xDie: 214, xOut: 284 };
const rowY = (i: number) => G142.row0 + i * G142.dy;
/** A node of the tree: its name in a small outlined box. */
function node(s: Sketch, x: number, y: number, html: string, w: number) {
  box(s, x - w / 2, y - 12, x + w / 2, y + 12, { w: 1.2, rx: 4, name: `node ${plain(html)}` });
  lab(s, x, y + 4.5, html, { size: 13.5 });
}
const fig142: Diagram = {
  id: 'm11-14-fig-14.2',
  topic: 0,
  name: 'Coin then die: a tree',
  cases: [{ chip: 'Coin then die', cap: CAP142 }],
  draw() {
    const s = new Sketch(W, 352), g = G142, yC = COIN.map((_, k) => (rowY(k * 6) + rowY(k * 6 + 5)) / 2), yT = (yC[0] + yC[1]) / 2;
    lab(s, g.xCoin, 18, 'stage 1', { size: 11, color: C.slate });
    lab(s, g.xCoin, 32, 'coin', { size: 11, color: C.slate });
    lab(s, g.xDie, 18, 'stage 2', { size: 11, color: C.slate });
    lab(s, g.xDie, 32, 'die', { size: 11, color: C.slate });
    lab(s, g.xOut, 32, 'outcome', { size: 11, color: C.slate });
    node(s, g.xToss, yT, 'toss', 40);
    COIN.forEach((h, k) => {
      path(s, [[g.xToss + 20, yT + (k ? 6 : -6)], [g.xCoin - 11, yC[k] + (k ? -6 : 6)]], { w: 1.2, name: `branch ${h}` });
      node(s, g.xCoin, yC[k], I(h), 22);
      DIE.forEach((d, j) => {
        const y = rowY(k * 6 + j);
        path(s, [[g.xCoin + 11, yC[k]], [g.xDie - 9, y - 1]], { w: 1, name: `branch ${h}${d}` });
        lab(s, g.xDie, y + 3.5, String(d), { size: 12 });
        lab(s, g.xOut, y + 3.5, `(${I(h)}, ${d})`, { size: 12 });
      });
    });
    lab(s, W / 2, 338, `${I('n')}(${S}) = 2 × 6 = 12`, { size: 15 });
    return s;
  },
  check() {
    const s = fig142.draw(fig142.cases[0]), out: Check[] = [];
    const leaves = linesNamed(s, /^branch [HT]\d$/).map((l) => l.name.slice(7));
    const outs = s.labels.map((l) => l.text).filter((t) => /^\([HT], \d\)$/.test(t));
    out.push([`Two coin branches, six die branches from each: ${leaves.length} paths, one per outcome, 2 × 6 = 12`, leaves.length === 12 && outs.length === 12 && COIN.length * DIE.length === 12]);
    out.push(['Each path ends at its own ordered pair: (H, 1) … (H, 6), (T, 1) … (T, 6), all different', new Set(outs).size === 12 && COIN.every((h) => DIE.every((d) => outs.includes(`(${h}, ${d})`)))]);
    const order = COIN.flatMap((h) => DIE.map((d) => labelsNamed(s, `(${h}, ${d})`)[0].rect[1]));
    out.push(['The outcome column reads down in the printed order, beside the die face it ends at', order.every((y, i) => !i || y > order[i - 1])]);
    out.push(labelsCheck(s, ['toss', 'H', 'T', 'stage 1', 'coin', 'stage 2', 'die', 'outcome', '1', '6', 'n(S) = 2 × 6 = 12']));
    out.push(noBadChars(s, fig142));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 14.3 · the overlap counted twice (Topic 02, p. 1200)           */
/* ===================================================================== */
const CAP143 = 'The overlap is counted once in <i>P</i>(<i>A</i>) and again in <i>P</i>(<i>B</i>), so the addition rule subtracts one copy of it.';
const F143: Rect = [8, 8, W - 8, 248];
const CS143: Circ[] = [{ name: 'A', c: [W / 2 - 40, 110], r: 72 }, { name: 'B', c: [W / 2 + 40, 110], r: 72 }];
const ADD = `${Pr(`${A} ∪ ${B}`)} = ${Pr(A)} + ${Pr(B)} − ${Pr(`${A} ∩ ${B}`)}`;
const fig143: Diagram = {
  id: 'm11-14-fig-14.3',
  topic: 1,
  name: 'The overlap counted twice',
  cases: [{ chip: 'Two events', cap: CAP143 }],
  draw() {
    const s = new Sketch(W, 288), cs = CS143, tip = cs[0].c[1] + Math.sqrt(cs[0].r ** 2 - 40 ** 2);
    frameS(s, F143);
    cs.forEach((k) => circle(s, k.c, k.r, { name: `circle ${k.name}` }));
    lab(s, cs[0].c[0] - 30, 84, A, { size: 19 });
    lab(s, cs[1].c[0] + 30, 84, B, { size: 19 });
    lab(s, W / 2, 115, `${A} ∩ ${B}`, { size: 14 });
    arr(s, [W / 2, 196], [W / 2, tip + 3], { color: C.mari, w: 1.8, head: 7, name: 'arrow to the overlap' });
    lab(s, W / 2, 214, `counted twice in ${Pr(A)} + ${Pr(B)},`, { size: 14, color: C.amber });
    lab(s, W / 2, 233, 'so subtract one copy', { size: 14, color: C.amber });
    lab(s, W / 2, 276, ADD, { size: 15 });
    hatch(s, (p) => maskOf(cs, p) === 3 && toEdge(cs, p) > 3, [W / 2 - 40, 40, W / 2 + 40, 180]);
    return s;
  },
  check() {
    const s = fig143.draw(fig143.cases[0]), out: Check[] = [], cs = CS143;
    out.push([`The overlap, and only the overlap, is hatched (${(HATCH.get(s) ?? []).length} strokes), "A ∩ B" in it`, (HATCH.get(s) ?? []).length > 10 && hatchAll(s, (p) => maskOf(cs, p) === 3) && maskOf(cs, centre(labelsNamed(s, 'A ∩ B')[0].rect)) === 3]);
    const a = linesNamed(s, /^arrow to the overlap$/)[0].pts[1];
    out.push(['The arrow ends at the foot of the overlap, where both circles meet', Math.abs(len(a, cs[0].c) - cs[0].r) < 4 && Math.abs(len(a, cs[1].c) - cs[1].r) < 4]);
    const pA = 0.5, pB = 0.4, pAB = 0.2;
    out.push([`Counting the overlap twice and taking one copy back: with P(A) = ${pA}, P(B) = ${pB}, P(A ∩ B) = ${pAB}, P(A ∪ B) = ${pA + pB - pAB}, the measure of the union`, close(pA + pB - pAB, (pA - pAB) + (pB - pAB) + pAB)]);
    out.push(labelsCheck(s, ['S', 'A', 'B', 'A ∩ B', 'counted twice in P(A) + P(B),', 'so subtract one copy', 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)']));
    out.push(noBadChars(s, fig143));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 14.4 · the probability scale (Topic 02, p. 1206)               */
/* ===================================================================== */
const CAP144 = 'The probability scale: 0 is the impossible event, 1 is the sure event, and nothing lives outside the segment.';
const G144 = { x0: 82, x1: 258, top: 104, bot: 120 };
const X144 = (v: number) => G144.x0 + v * (G144.x1 - G144.x0);
const fig144: Diagram = {
  id: 'm11-14-fig-14.4',
  topic: 1,
  name: 'The probability scale',
  cases: [{ chip: '0 to 1', cap: CAP144 }],
  draw() {
    const s = new Sketch(W, 214), g = G144;
    box(s, 10, g.top, g.x0, g.bot, { color: C.slate, w: 1, dash: '4 3', name: 'below 0' });
    box(s, g.x1, g.top, W - 10, g.bot, { color: C.slate, w: 1, dash: '4 3', name: 'above 1' });
    box(s, g.x0, g.top, g.x1, g.bot, { w: 2, name: 'scale' });
    [0.25, 0.5, 0.75].forEach((v) => path(s, [[X144(v), g.top], [X144(v), g.bot]], { w: 1.4, name: `division ${v}` }));
    lab(s, X144(0), 140, '0', { size: 16 });
    lab(s, X144(1), 140, '1', { size: 16 });
    [[1, 4], [1, 2], [3, 4]].forEach(([n, d]) => runs(s, X144(n / d), 141, [{ num: String(n), den: String(d) }], { size: 12, anchor: 'middle' }));
    lab(s, 46, 162, 'nothing', { size: 13, color: C.amber });
    lab(s, 46, 179, 'below 0', { size: 13, color: C.amber });
    lab(s, W - 46, 162, 'nothing', { size: 13, color: C.amber });
    lab(s, W - 46, 179, 'above 1', { size: 13, color: C.amber });
    lab(s, 72, 30, `impossible event (${EMPTY})`, { size: 13.5, color: C.slate });
    lab(s, W - 62, 30, `sure event (${S})`, { size: 13.5, color: C.slate });
    lab(s, X144(0.5), 66, 'even chance', { size: 13.5, color: C.slate });
    arr(s, [62, 40], [X144(0) - 2, g.top - 4], { color: C.slate, w: 1.4, name: 'to 0' });
    arr(s, [W - 72, 40], [X144(1) + 2, g.top - 4], { color: C.slate, w: 1.4, name: 'to 1' });
    arr(s, [X144(0.5), 75], [X144(0.5), g.top - 4], { color: C.slate, w: 1.4, name: 'to 1/2' });
    lab(s, W / 2, 205, `every event lives here: 0 ≤ ${Pr(A)} ≤ 1`, { size: 15 });
    return s;
  },
  check() {
    const s = fig144.draw(fig144.cases[0]), out: Check[] = [], back = (x: number) => (x - G144.x0) / (G144.x1 - G144.x0);
    const div = [0.25, 0.5, 0.75].map((v) => back(linesNamed(s, new RegExp(`^division ${v}$`))[0].pts[0][0]));
    out.push(['The segment runs from 0 to 1, divided at 1/4, 1/2 and 3/4', [0.25, 0.5, 0.75].every((v, i) => close(div[i], v, 1e-9))]);
    const tips = ['to 0', 'to 1', 'to 1/2'].map((n) => back(linesNamed(s, new RegExp(`^${n}$`))[0].pts[1][0]));
    out.push(['The arrows point at 0 (the impossible event φ), 1 (the sure event S) and 1/2 (even chance)', Math.abs(tips[0]) < 0.02 && Math.abs(tips[1] - 1) < 0.02 && close(tips[2], 0.5, 1e-9)]);
    out.push(labelsCheck(s, ['impossible event (φ)', 'sure event (S)', 'even chance', '0', '1', 'nothing', 'below 0', 'above 1', 'every event lives here: 0 ≤ P(A) ≤ 1']));
    out.push(stackedCheck(s, ['1/4', '1/2', '3/4']));
    out.push(noBadChars(s, fig144));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 14.5 · the seven regions of three events (Topic 03, p. 1214)   */
/* ===================================================================== */
const CAP145 = 'The seven regions of three overlapping events: add the singles, subtract the pairs, add the centre back.';
const G145 = { r: 90, top: 46 };
const cyA = G145.top + G145.r, cyBC = cyA + (G145.r * Math.sqrt(3)) / 2;
const CS145: Circ[] = [{ name: 'A', c: [W / 2, cyA], r: G145.r }, { name: 'B', c: [W / 2 - G145.r / 2, cyBC], r: G145.r }, { name: 'C', c: [W / 2 + G145.r / 2, cyBC], r: G145.r }];
const F145: Rect = [6, 6, W - 6, cyBC + G145.r + 10];
/** p. 1214, each region's name as printed (two lines), by which circles hold it (bit 0 A, bit 1 B, bit 2 C). */
const NAMES145: [number, string[]][] = [
  [1, ['only', A]], [2, ['only', B]], [4, ['only', CC]],
  [3, [`${A} ∩ ${B}`, 'only']], [5, [`${CC} ∩ ${A}`, 'only']], [6, [`${B} ∩ ${CC}`, 'only']],
];
const CENTRE145 = `${A} ∩ ${B} ∩ ${CC}`;
const fig145: Diagram = {
  id: 'm11-14-fig-14.5',
  topic: 2,
  name: 'Seven regions of three events',
  cases: [{ chip: 'Three events', cap: CAP145 }],
  draw() {
    const y = F145[3], s = new Sketch(W, y + 96), cs = CS145;
    frameS(s, F145);
    cs.forEach((k) => circle(s, k.c, k.r, { name: `circle ${k.name}` }));
    lab(s, cs[0].c[0], cs[0].c[1] - cs[0].r - 9, A, { size: 19 });
    const side = (k: Circ, deg: number) => { const a = (deg * Math.PI) / 180; lab(s, k.c[0] + (k.r + 14) * Math.cos(a), k.c[1] + (k.r + 14) * Math.sin(a) + 5, I(k.name), { size: 19 }); };
    side(cs[1], 180);
    side(cs[2], 0);
    NAMES145.forEach(([m, lines]) => regionLabel(s, cs, F145, m, lines, 13));
    regionLabel(s, cs, F145, 7, [CENTRE145], 11.5, C.amber);
    lab(s, W / 2, y + 28, `${Pr(`${A} ∪ ${B} ∪ ${CC}`)} = Σ${Pr(A)} − Σ${Pr(`${A} ∩ ${B}`)}`, { size: 15 });
    lab(s, W / 2, y + 48, `+ ${Pr(CENTRE145)}`, { size: 15 });
    lab(s, W / 2, y + 72, 'add the singles, subtract the pairs,', { size: 13.5, color: C.slate });
    lab(s, W / 2, y + 89, 'add the centre back', { size: 13.5, color: C.slate });
    hatch(s, (p) => maskOf(cs, p) === 7 && toEdge(cs, p) > 3, [W / 2 - 60, cyA - 10, W / 2 + 60, cyBC + 60], { step: 6 });
    return s;
  },
  check() {
    const s = fig145.draw(fig145.cases[0]), out: Check[] = [], cs = CS145;
    const named = NAMES145.map(([m, lines]) => {
      const key = plain(lines[0] === 'only' ? lines[1] : lines[0]);
      return labelsNamed(s, key).some((l) => maskOf(cs, centre(l.rect)) === m);
    });
    out.push(['Each region name stands in the region it names (read back from where it is drawn): only A, only B, only C, A ∩ B only, C ∩ A only, B ∩ C only', named.every(Boolean) && named.length === 6]);
    out.push(['"A ∩ B ∩ C" stands in the centre, the one region inside all three circles', maskOf(cs, centre(labelsNamed(s, 'A ∩ B ∩ C')[0].rect)) === 7]);
    out.push([`The centre, and only the centre, is hatched (${(HATCH.get(s) ?? []).length} strokes)`, (HATCH.get(s) ?? []).length > 6 && hatchAll(s, (p) => maskOf(cs, p) === 7)]);
    // inclusion–exclusion on the seven regions: each point of the union is counted once
    const ok = [1, 2, 3, 4, 5, 6, 7].every((m) => {
      const k = [0, 1, 2].filter((i) => m & (1 << i)).length;
      return k - (k * (k - 1)) / 2 + (k === 3 ? 1 : 0) === 1;
    });
    out.push(['Singles − pairs + centre counts every one of the seven regions exactly once (1, 2 − 1, 3 − 3 + 1)', ok]);
    out.push(labelsCheck(s, ['S', 'A', 'B', 'C', 'only', 'A ∩ B', 'C ∩ A', 'B ∩ C', 'A ∩ B ∩ C', 'P(A ∪ B ∪ C) = ΣP(A) − ΣP(A ∩ B)', '+ P(A ∩ B ∩ C)', 'add the singles, subtract the pairs,', 'add the centre back']));
    out.push(noBadChars(s, fig145));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 14.6 · fill the constrained place first (Additional A, p. 1217) */
/* ===================================================================== */
const CAP146 = `Fill the constrained units box first with one of 2, 4, 6, then the remaining three places in ${NP('6', '3')} = 120 ways.`;
const DIGITS = [1, 2, 3, 4, 5, 6, 7], EVEN = DIGITS.filter((d) => d % 2 === 0);
const PLACES = ['thousands', 'hundreds', 'tens', 'units'];
const G146 = { x0: 18, bw: 66, gap: 12, top: 118, bot: 162 };
const boxX = (i: number) => G146.x0 + i * (G146.bw + G146.gap);
/** Every four-digit number with distinct digits from 1–7, counted by brute force. */
function count146() {
  let all = 0, even = 0;
  for (const a of DIGITS) for (const b of DIGITS) for (const c of DIGITS) for (const d of DIGITS) {
    if (new Set([a, b, c, d]).size < 4) continue;
    all++;
    if (d % 2 === 0) even++;
  }
  return { all, even };
}
const fig146: Diagram = {
  id: 'm11-14-fig-14.6',
  topic: 3,
  name: 'Fill the constrained place first',
  cases: [{ chip: 'Even, from 1 to 7', cap: CAP146 }],
  draw() {
    const s = new Sketch(W, 268), g = G146, mid = (i: number) => boxX(i) + g.bw / 2;
    PLACES.forEach((name, i) => {
      const u = i === 3;
      box(s, boxX(i), g.top, boxX(i) + g.bw, g.bot, { rx: 6, w: u ? 2.2 : 1.7, color: u ? C.mari : C.ink, name: `box ${name}` });
      lab(s, mid(i), g.bot + 20, name, { size: 13, color: u ? C.amber : C.slate });
    });
    lab(s, mid(3), 145, EVEN.join(', '), { size: 16, color: C.amber });
    lab(s, W - 6, 24, 'constrained (fill this first):', { size: 13.5, color: C.amber, anchor: 'end' });
    lab(s, mid(3), 42, `${EVEN.length} even choices`, { size: 13.5, color: C.amber });
    arr(s, [mid(3), 50], [mid(3), g.top - 3], { color: C.mari, w: 1.6, name: 'to units' });
    const xa = mid(0), xb = mid(2), yb = 96;
    lab(s, (xa + xb) / 2 + 4, 66, 'then the leftover six digits, in order:', { size: 12.5 });
    lab(s, (xa + xb) / 2, 84, `${NP('6', '3')} = ${nPr(6, 3)}`, { size: 13.5 });
    path(s, [[xa, yb], [xb, yb]], { w: 1.4, name: 'bracket' });
    [0, 1, 2].forEach((i) => arr(s, [mid(i), yb], [mid(i), g.top - 3], { w: 1.4, head: 6, name: `to ${PLACES[i]}` }));
    lab(s, W / 2 - 8, 212, `${I('n')}(${I('E')}) = 3 × ${NP('6', '3')} = 360,`, { size: 13.5, anchor: 'end' });
    lab(s, W / 2 + 8, 212, `${I('n')}(${S}) = ${NP('7', '4')} = 840,`, { size: 13.5, anchor: 'start' });
    runs(s, W / 2, 250, [{ t: `${I('P')} = ` }, { num: '360', den: '840' }, { t: ' = ' }, { num: '3', den: '7' }], { size: 14, anchor: 'middle' });
    return s;
  },
  check() {
    const s = fig146.draw(fig146.cases[0]), out: Check[] = [], { all, even } = count146();
    out.push([`The units place takes an even digit of 1–7: ${EVEN.join(', ')}, 3 choices`, EVEN.length === 3]);
    out.push([`Then ⁶P₃ = 6 × 5 × 4 = ${nPr(6, 3)}; n(E) = 3 × 120 = ${3 * nPr(6, 3)}; n(S) = ⁷P₄ = ${nPr(7, 4)}`, nPr(6, 3) === 120 && 3 * nPr(6, 3) === 360 && nPr(7, 4) === 840]);
    out.push([`Brute force over every four-digit number of distinct digits 1–7: ${all} in all, ${even} even, the counts on the drawing`, all === 840 && even === 360]);
    out.push(['P = 360/840 = 3/7', 360 * 7 === 840 * 3]);
    const toU = linesNamed(s, /^to units$/)[0].pts[1][0], bx = linesNamed(s, /^box units$/)[0].pts;
    out.push(['The "constrained" arrow ends on the units box; the bracket\'s arrows on the other three', toU > bx[0][0] && toU < bx[1][0] && ['thousands', 'hundreds', 'tens'].every((n, i) => close(linesNamed(s, new RegExp(`^to ${n}$`))[0].pts[1][0], boxX(i) + G146.bw / 2, 1e-9))]);
    out.push(labelsCheck(s, ['constrained (fill this first):', '3 even choices', '2, 4, 6', 'then the leftover six digits, in order:', '6P3 = 120', ...PLACES, 'n(E) = 3 × 6P3 = 360,', 'n(S) = 7P4 = 840,', 'P = 360/840 = 3/7']));
    out.push(stackedCheck(s, ['360/840', '3/7']));
    out.push(noBadChars(s, fig146));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 14.7 · the overlap pushed apart and nested (Additional B, p. 1222) */
/* ===================================================================== */
const CAP147 = 'Two bars on a track of length 1: pushed apart they still overlap by 0.4, and nested they overlap by 0.6.';
type Case147 = { chip: string; cap: string; title: string; rule: string; a: [number, number]; b: [number, number] };
const PA = 0.6, PB = 0.8;
const CASES147: Case147[] = [
  { chip: 'Pushed apart', cap: CAP147, title: 'pushed apart', rule: `forced overlap = ${Pr(A)} + ${Pr(B)} − 1`, a: [0, PA], b: [1 - PB, 1] },
  { chip: 'One inside the other', cap: CAP147, title: 'one inside the other', rule: `largest overlap = min{${Pr(A)}, ${Pr(B)}}`, a: [0, PA], b: [0, PB] },
];
const G147 = { x0: 40, x1: 300, rows: [72, 108, 144], bh: 26, top: 62, bot: 180 };
const X147 = (v: number) => G147.x0 + v * (G147.x1 - G147.x0);
const meet147 = (c: Case147): [number, number] => [Math.max(c.a[0], c.b[0]), Math.min(c.a[1], c.b[1])];
const fig147: Diagram = {
  id: 'm11-14-fig-14.7',
  topic: 4,
  name: 'Overlap: pushed apart, nested',
  cases: CASES147,
  draw(c: Case147) {
    const s = new Sketch(W, 236), g = G147, ov = meet147(c), o = ov[1] - ov[0];
    lab(s, W / 2, 20, c.title, { size: 15 });
    lab(s, W / 2, 44, c.rule, { size: 13, color: C.amber });
    path(s, [[X147(0), g.top], [X147(1), g.top]], { color: C.slate, w: 0.9, name: 'track top' });
    path(s, [[X147(0), g.bot], [X147(1), g.bot]], { color: C.slate, w: 0.9, name: 'track foot' });
    [0, 1].forEach((v) => path(s, [[X147(v), g.top - 6], [X147(v), g.bot + 6]], { w: 1.8, name: `end ${v}` }));
    const bar = (iv: [number, number], row: number, html: string, hi: boolean, size: number, name: string) => {
      const y = g.rows[row];
      box(s, X147(iv[0]), y, X147(iv[1]), y + g.bh, { color: hi ? C.mari : C.ink, w: hi ? 2 : 1.5, name });
      return y;
    };
    bar(c.a, 0, '', false, 13, 'bar A');
    bar(c.b, 1, '', false, 13, 'bar B');
    bar(ov, 2, '', true, 12, 'bar overlap');
    ov.forEach((v, k) => { if (v > 0 && v < 1) path(s, [[X147(v), g.top + 2], [X147(v), g.bot - 2]], { color: C.mari, w: 1, dash: '3 3', name: `edge ${k}` }); });
    // each name in the part of its bar clear of the dashed edges
    const free = (iv: [number, number]) => {
      const cuts = [iv[0], ...ov.filter((v) => v > iv[0] + 1e-9 && v < iv[1] - 1e-9), iv[1]];
      let best: [number, number] = [iv[0], iv[1]], wide = -1;
      cuts.slice(1).forEach((b, i) => { if (b - cuts[i] > wide) { wide = b - cuts[i]; best = [cuts[i], b]; } });
      return (X147(best[0]) + X147(best[1])) / 2;
    };
    lab(s, free(c.a), g.rows[0] + 18, `${Pr(A)} = ${fmt(PA, 1)}`, { size: 13 });
    lab(s, free(c.b), g.rows[1] + 18, `${Pr(B)} = ${fmt(PB, 1)}`, { size: 13 });
    lab(s, (X147(ov[0]) + X147(ov[1])) / 2, g.rows[2] + 17.5, `${Pr(`${A} ∩ ${B}`)} = ${fmt(o, 1)}`, { size: 11.5, color: C.amber });
    lab(s, X147(0), g.bot + 24, '0', { size: 14 });
    lab(s, X147(1), g.bot + 24, '1', { size: 14 });
    lab(s, W / 2, 228, `${Pr(`${A} ∪ ${B}`)} = ${(PA + PB - o).toFixed(1)}`, { size: 15 });
    return s;
  },
  check(c: Case147) {
    const s = fig147.draw(c), out: Check[] = [], back = (x: number) => (x - G147.x0) / (G147.x1 - G147.x0);
    const span = (n: string) => { const p = linesNamed(s, new RegExp(`^${n}$`))[0].pts; return [back(p[0][0]), back(p[1][0])]; };
    const [a, b, o] = ['bar A', 'bar B', 'bar overlap'].map(span), ov = meet147(c);
    out.push([`The bars are as long as their probabilities: P(A) = ${fmt(a[1] - a[0], 3)}, P(B) = ${fmt(b[1] - b[0], 3)}, inside the track [0, 1]`, close(a[1] - a[0], PA, 1e-9) && close(b[1] - b[0], PB, 1e-9) && [a, b].every((q) => q[0] >= -1e-9 && q[1] <= 1 + 1e-9)]);
    out.push([`The overlap bar is where both bars lie: from ${fmt(o[0], 2)} to ${fmt(o[1], 2)}`, close(o[0], ov[0], 1e-9) && close(o[1], ov[1], 1e-9) && close(o[0], Math.max(a[0], b[0]), 1e-9) && close(o[1], Math.min(a[1], b[1]), 1e-9)]);
    const want = c.chip === 'Pushed apart' ? Math.max(0, PA + PB - 1) : Math.min(PA, PB);
    out.push([c.chip === 'Pushed apart' ? `Pushed as far apart as the track allows, the overlap is forced: 0.6 + 0.8 − 1 = ${fmt(want, 1)}` : `Nested, the overlap is the smaller bar: min{0.6, 0.8} = ${fmt(want, 1)}`, close(o[1] - o[0], want, 1e-9)]);
    out.push([`P(A ∪ B) = 0.6 + 0.8 − ${fmt(want, 1)} = ${(PA + PB - want).toFixed(1)}, never above 1, and the drawing's label says that value`, PA + PB - want <= 1 + 1e-9 && hasLabel(s, `P(A ∪ B) = ${(PA + PB - want).toFixed(1)}`)]);
    out.push(labelsCheck(s, [c.title, plain(c.rule), 'P(A) = 0.6', 'P(B) = 0.8', `P(A ∩ B) = ${fmt(want, 1)}`, '0', '1', `P(A ∪ B) = ${(PA + PB - want).toFixed(1)}`]));
    out.push(noBadChars(s, fig147));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* "Figure 1" · the two acts of one outcome (Additional C, p. 1229)       */
/* ===================================================================== */
const CAPC = `The two acts of a single outcome in Example S5: stage 1 lassoes which four of the nine, in ${NC('9', '4')} = 126 ways (the team drawn here has exactly two girls), and stage 2 seats those four in the named posts, in 4! = 24 ways, so <i>n</i>(<i>S</i>) = ${NC('9', '4')} × 4! = ${NP('9', '4')} = 3024 filled role-sheets.`;
/** p. 1229, the nine people left to right as printed: g a girl (filled), b a boy (hollow); the lasso holds the 3rd to 6th. */
const PEOPLE = 'gbgbgbgbb'.split('') as ('g' | 'b')[];
const LASSO = [2, 3, 4, 5];
const POSTS: string[][] = [['Captain'], ['Vice-', 'Captain'], ['Secretary'], ['Treasurer']];
const GC = { dx: 24, y: 64, cx: 128, boxY: 132, bw: 40, bh: 34, sp: 60 };
const personX = (i: number) => GC.cx + (i - (LASSO[0] + LASSO[3]) / 2) * GC.dx;
const postX = (k: number) => GC.cx + (k - 1.5) * GC.sp;
const PERSONS = new WeakMap<Sketch, { p: P; kind: 'g' | 'b'; where: string }[]>();
function person(s: Sketch, p: P, kind: 'g' | 'b', where: string, r = 7) {
  if (kind === 'g') s.dot(p[0], p[1], r, C.ink);
  else s.point(p[0], p[1], r, `<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="${r - 0.8}" fill="#fff" stroke="${C.ink}" stroke-width="1.6"/>`);
  keep(s, Array.from({ length: 25 }, (_, i): P => [p[0] + r * Math.cos((2 * Math.PI * i) / 24), p[1] + r * Math.sin((2 * Math.PI * i) / 24)]), `person ${where}`);
  PERSONS.set(s, [...(PERSONS.get(s) ?? []), { p, kind, where }]);
}
const figCd1: Diagram = {
  id: 'm11-14-C-d1',
  topic: 5,
  name: 'Which four, then in what order',
  cases: [{ chip: 'Example S5', cap: CAPC }],
  draw() {
    const s = new Sketch(W, 296), g = GC;
    lab(s, g.cx, 26, `stage 1 (which): ${NC('9', '4')} = ${nCr(9, 4)}`, { size: 13, color: C.amber });
    PEOPLE.forEach((k, i) => person(s, [personX(i), g.y], k, 'row'));
    const lx0 = personX(LASSO[0]) - 13, lx1 = personX(LASSO[3]) + 13;
    box(s, lx0, g.y - 15, lx1, g.y + 15, { rx: 13, color: C.mari, w: 1.8, dash: '5 4', name: 'lasso' });
    const kx = personX(8) + 22;
    person(s, [kx + 6, g.y - 10], 'g', 'key', 5.5);
    lab(s, kx + 17, g.y - 6, `${PEOPLE.filter((k) => k === 'g').length} girls`, { size: 12, anchor: 'start', color: C.slate });
    person(s, [kx + 6, g.y + 10], 'b', 'key', 5.5);
    lab(s, kx + 17, g.y + 14, `${PEOPLE.filter((k) => k === 'b').length} boys`, { size: 12, anchor: 'start', color: C.slate });
    POSTS.forEach((lines, k) => {
      const x = postX(k);
      arr(s, [g.cx + (k - 1.5) * 8, g.y + 19], [x, g.boxY - 3], { color: C.slate, w: 1.1, head: 6, name: `to ${lines.join('')}` });
      box(s, x - g.bw / 2, g.boxY, x + g.bw / 2, g.boxY + g.bh, { rx: 5, w: 1.5, name: `post ${lines.join('')}` });
      person(s, [x, g.boxY + g.bh / 2], PEOPLE[LASSO[k]], lines.join(''));
      lines.forEach((t, j) => lab(s, x, g.boxY + g.bh + 16 + j * 13, t, { size: 11, color: C.slate }));
    });
    lab(s, g.cx, 222, `stage 2 (in what order): 4! = ${fact(4)}`, { size: 13 });
    const yb = 234, bl = 10, br = 246;
    path(s, [[bl, yb], [bl + 4, yb + 6], [g.cx - 6, yb + 6], [g.cx, yb + 12], [g.cx + 6, yb + 6], [br - 4, yb + 6], [br, yb]], { w: 1.2, name: 'brace' });
    lab(s, g.cx, 270, `${NC('9', '4')} × 4! = ${NP('9', '4')} = ${nPr(9, 4)}`, { size: 15 });
    return s;
  },
  check() {
    const s = figCd1.draw(figCd1.cases[0]), out: Check[] = [], ps = PERSONS.get(s) ?? [];
    const row = ps.filter((q) => q.where === 'row'), girls = row.filter((q) => q.kind === 'g').length;
    out.push([`Nine people in the row: ${girls} girls (filled) and ${row.length - girls} boys (hollow), as printed`, row.length === 9 && girls === 4]);
    const l = linesNamed(s, /^lasso$/)[0].pts, inL = row.filter((q) => q.p[0] > l[0][0] && q.p[0] < l[1][0]);
    out.push([`The lasso holds four of the nine, ${inL.filter((q) => q.kind === 'g').length} of them girls: "the team drawn here has exactly two girls"`, inL.length === 4 && inL.filter((q) => q.kind === 'g').length === 2]);
    const seated = POSTS.map((lines) => ps.find((q) => q.where === lines.join(''))!.kind);
    out.push(['Each post holds one of the four lassoed, in the order they stand', seated.join('') === inL.map((q) => q.kind).join('')]);
    out.push([`⁹C₄ = ${nCr(9, 4)}, 4! = ${fact(4)}, ⁹C₄ × 4! = ${nCr(9, 4) * fact(4)} = ⁹P₄ = 9 × 8 × 7 × 6 = ${9 * 8 * 7 * 6}`, nCr(9, 4) === 126 && fact(4) === 24 && nCr(9, 4) * fact(4) === nPr(9, 4) && nPr(9, 4) === 3024]);
    out.push(labelsCheck(s, ['stage 1 (which): 9C4 = 126', '4 girls', '5 boys', 'Captain', 'Vice-', 'Secretary', 'Treasurer', 'stage 2 (in what order): 4! = 24', '9C4 × 4! = 9P4 = 3024']));
    out.push(noBadChars(s, figCd1));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* "Figure 2" · one random insertion, a derangement (Additional D, p. 1234) */
/* ===================================================================== */
const CAPD = 'Four letters inserted into four addressed envelopes as 1 → 2, 2 → 1, 3 → 4, 4 → 3: no letter meets its own envelope, so this is one of the <i>D</i><sub>4</sub> = 9 derangements among all 4! = 24 equally likely insertions, giving <i>P</i>(no match) = <frac><num>9</num><den>24</den></frac> = <frac><num>3</num><den>8</den></frac> and <i>P</i>(at least one match) = <frac><num>5</num><den>8</den></frac>.';
/** p. 1234, the insertion drawn: letter i goes into envelope INSERT[i − 1]. */
const INSERT = [2, 1, 4, 3];
const GD = { x0: 104, sp: 62, lY: 50, eTop: 116, eBot: 156, ew: 46, cell: 12, sx: 26, sTop: 240, sBot: 256 };
const slotX = (i: number) => GD.x0 + (i - 1) * GD.sp;
function perms(n: number): number[][] {
  if (n === 1) return [[1]];
  return perms(n - 1).flatMap((p) => Array.from({ length: n }, (_, k) => [...p.slice(0, k), n, ...p.slice(k)]));
}
const figDd1: Diagram = {
  id: 'm11-14-D-d1',
  topic: 6,
  name: 'One insertion, a derangement',
  cases: [{ chip: 'Four letters', cap: CAPD }],
  draw() {
    const s = new Sketch(W, 326), g = GD, all = perms(4), der = all.filter((p) => p.every((v, i) => v !== i + 1)).length;
    lab(s, W / 2 + 14, 20, `the random insertion ${INSERT.map((e, i) => `${i + 1} → ${e}`).join(', ')}`, { size: 12.5 });
    lab(s, 10, g.lY + 4, 'letters', { size: 12, anchor: 'start', color: C.slate });
    lab(s, 10, g.eTop + 26, 'envelopes', { size: 12, anchor: 'start', color: C.slate });
    for (let i = 1; i <= 4; i++) {
      const x = slotX(i);
      box(s, x - 17, g.lY - 13, x + 17, g.lY + 13, { rx: 4, w: 1.4, name: `letter ${i}` });
      lab(s, x, g.lY + 5, String(i), { size: 14 });
      box(s, x - g.ew / 2, g.eTop, x + g.ew / 2, g.eBot, { w: 1.4, name: `envelope ${i}` });
      path(s, [[x - g.ew / 2, g.eTop], [x, g.eTop + 15], [x + g.ew / 2, g.eTop]], { w: 1.1, name: `flap ${i}` });
      lab(s, x, g.eBot - 7, String(i), { size: 13.5 });
    }
    INSERT.forEach((e, k) => {
      const a: P = [slotX(k + 1) + (e > k + 1 ? 4 : -4), g.lY + 14], b: P = [slotX(e) + (e > k + 1 ? -4 : 4), g.eTop - 2];
      curveArr(s, a, [a[0], a[1] + 34], [b[0], b[1] - 30], b, { name: `insert ${k + 1}→${e}` });
    });
    lab(s, W / 2, 184, 'no letter meets its own envelope: one of', { size: 12.5 });
    lab(s, W / 2, 201, `the ${I('D')}<sub>4</sub> = ${der} derangements`, { size: 12.5 });
    lab(s, W / 2, 229, `all 4! = ${all.length} arrangements`, { size: 12.5, color: C.slate });
    for (let k = 0; k < all.length; k++) box(s, g.sx + k * g.cell, g.sTop, g.sx + (k + 1) * g.cell, g.sBot, { w: k < der ? 1.3 : 1, color: k < der ? C.mari : C.ink, name: `cell ${k}` });
    const xd = g.sx + der * g.cell, xe = g.sx + all.length * g.cell;
    lab(s, (g.sx + xd) / 2, g.sBot + 16, `${der} match-free`, { size: 12, color: C.amber });
    lab(s, (xd + xe) / 2, g.sBot + 16, `${all.length - der} with at least one match`, { size: 12, color: C.slate });
    runs(s, W / 2, 312, [{ t: `${I('P')}(no match) = ` }, { num: String(der), den: String(all.length) }, { t: ' = ' }, { num: '3', den: '8' }], { size: 14, anchor: 'middle' });
    hatch(s, (p) => p[0] > g.sx + 2 && p[0] < xd - 2 && p[1] > g.sTop + 2 && p[1] < g.sBot - 2, [g.sx, g.sTop, xd, g.sBot], { step: 4, gap: 2 });
    return s;
  },
  check() {
    const s = figDd1.draw(figDd1.cases[0]), out: Check[] = [], all = perms(4), der = all.filter((p) => p.every((v, i) => v !== i + 1)).length;
    out.push([`The insertion drawn, ${INSERT.map((e, i) => `${i + 1} → ${e}`).join(', ')}, sends every letter to another envelope, one letter each: a derangement`, new Set(INSERT).size === 4 && INSERT.every((e, i) => e !== i + 1)]);
    const ends = INSERT.map((e, k) => { const p = linesNamed(s, new RegExp(`^insert ${k + 1}→${e}$`))[0].pts; return [p[0][0], p[p.length - 1][0]]; });
    out.push(['Each curved arrow leaves its letter and ends on the envelope it is inserted into', ends.every(([a, b], k) => Math.abs(a - slotX(k + 1)) < 17 && Math.abs(b - slotX(INSERT[k])) < GD.ew / 2)]);
    out.push([`Listing all ${all.length} = 4! arrangements: ${der} leave no letter in its own envelope (D₄ = 9), ${all.length - der} have at least one match`, all.length === 24 && der === 9 && new Set(all.map((p) => p.join())).size === 24]);
    out.push([`D₄ by inclusion–exclusion: 4! − ⁴C₁3! + ⁴C₂2! − ⁴C₃1! + ⁴C₄0! = ${24 - 24 + 12 - 4 + 1}`, 24 - 4 * 6 + 6 * 2 - 4 * 1 + 1 === der]);
    out.push(['P(no match) = 9/24 = 3/8; P(at least one match) = 15/24 = 5/8', der * 8 === 24 * 3 && (24 - der) * 8 === 24 * 5]);
    const H = HATCH.get(s) ?? [], xd = GD.sx + der * GD.cell;
    out.push([`The ${der} match-free cells, and only they, are hatched (${H.length} strokes)`, H.length > 12 && hatchAll(s, (p) => p[0] > GD.sx && p[0] < xd && p[1] > GD.sTop && p[1] < GD.sBot)]);
    out.push(labelsCheck(s, ['the random insertion 1 → 2, 2 → 1, 3 → 4, 4 → 3', 'letters', 'envelopes', '1', '2', '3', '4', 'no letter meets its own envelope: one of', 'the D4 = 9 derangements', 'all 4! = 24 arrangements', '9 match-free', '15 with at least one match', 'P(no match) = 9/24 = 3/8']));
    out.push(stackedCheck(s, ['9/24', '3/8']));
    out.push(noBadChars(s, figDd1));
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 11 Chapter 14, Probability: the book's figures. */
export const DIAGRAMS_MATHEMATICS_11_14: Diagram[] = [fig141, fig142, fig143, fig144, fig145, fig146, fig147, figCd1, figDd1];

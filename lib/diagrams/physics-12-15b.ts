import { C, LABEL_GAP, Rect, Sketch, crosses, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 15 (Experimental Skills), TOPIC 01, drawings
 * p12-15-01-d1 to d9 (part b). The chapter is original text with no source
 * book, so the figures follow the chapter's own tables and worked examples:
 * the pendulum amplitude table, the metre-scale balance of trial 1, the
 * Searle's-apparatus readings, the capillary-rise reading, the falling steel
 * ball, the 512 Hz resonance tube and the method-of-mixtures readings.
 *
 * Every figure is computed from those numbers, never placed by eye: a decay
 * curve is the exponential the table's slope gives, the metre scale's marks
 * stand at the table's positions and balance as M a = m b, the spirit level
 * rests on the screw's tip, the meniscus meets the wall at the angle drawn,
 * the sphere's three forces balance in the ratio the densities give, the
 * resonance envelope has its node at the water and its antinode e above the
 * mouth, and the thermometer columns stand in the ratio of the temperatures.
 * Each `check` recomputes what the figure and the text state.
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

/* ---------- drawing helpers (as in physics-12-04.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');
/** Every line a label must keep clear of, by sketch: `clearance` measures each tag and label against them. */
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
  if (!o.free) keep(s, [...pts, pts[0]]);
}
const box = (s: Sketch, r: Rect, o: Stroke = {}) => outline(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]], o);
const HEADS = new WeakMap<Sketch, [P, P][]>();
const keepHead = (s: Sketch, tip: P, u: P, L: number) => HEADS.set(s, [...(HEADS.get(s) ?? []), [tip, add(tip, u, -L / 2)]]);
/** An arrow (a force, a direction) that labels keep clear of. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.vec(a[0], a[1], b[0], b[1], o);
  keep(s, [a, b]);
  keepHead(s, b, unit(sub(b, a)), 9);
}
/** A measured length with an arrowhead at each end. */
function measure(s: Sketch, a: P, b: P, color: string = C.slate) {
  const m: P = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  arrow(s, m, a, { color, w: 1.3 });
  arrow(s, m, b, { color, w: 1.3 });
}
const arcPts = (c: P, R: number, a0: number, a1: number, n = 90): P[] => samples(a0, a1, n).map((a) => polar(c, R, a));
const ring = (s: Sketch, c: P, R: number, o: Stroke = {}) => path(s, arcPts(c, R, 0, 360, 120), o);
/** A dotted guide: it only joins marks, so it is free of the clearance check. */
const GUIDES = new WeakMap<Sketch, [P, P][]>();
const guide = (s: Sketch, a: P, b: P, color: string = C.slate) => {
  GUIDES.set(s, [...(GUIDES.get(s) ?? []), [a, b]]);
  path(s, [a, b], { color, w: 1, dash: 'dot', free: true });
};
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/** How far every tag and label stays from every kept line, sampled each half pixel. */
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
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two symbols or labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
const dotsOffHeads = (s: Sketch): Check => {
  const bad = s.tags.filter((t) => t.from && (HEADS.get(s) ?? []).some((h) => h.some((q) => len(q, t.from as P) < 8))).map((t) => t.name);
  return [`No tag's dot sits on an arrowhead${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), dotsOffHeads(s)];
/** The result, bottom right, ink-edged, maths set in STIX. Registered as a tag so the audit keeps everything else off it. */
function resultBlock(s: Sketch, lines: string[], o: { size?: number } = {}): Rect {
  const size = o.size ?? 15, lh = size + 6;
  const plain = (t: string) => t.replace(/<\/?(?:i|sub|sup)>/g, '');
  const w = Math.max(...lines.map((t) => mathW(t, size))) + 30, h = lines.length * lh + 14;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => s.text(x0 + w / 2, y0 + 7 + lh * i + lh / 2 + size * 0.36, t, { size, semibold: true }));
  return [x0, y0, x0 + w, y0 + h];
}
/** A label registered with its true box, so tags and kept lines keep off it (Sketch.sym guesses 0.5 em a letter). */
const mark = (s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}) => s.sym(x, y, html, o);

/* ---------- a graph: axes, ticks, numerals ---------- */
type Ax = { px0: number; px1: number; py0: number; py1: number; xmax: number; ymax: number };
const gx = (a: Ax, x: number) => a.px0 + ((a.px1 - a.px0) * x) / a.xmax;
const gy = (a: Ax, y: number) => a.py1 - ((a.py1 - a.py0) * y) / a.ymax;
/** Axes with arrowheads, ticks and numerals at the given values. */
function axes(s: Sketch, a: Ax, xt: number[], yt: number[], xl: string, yl: string, o: { xfmt?: (v: number) => string; yfmt?: (v: number) => string } = {}) {
  arrow(s, [a.px0, a.py1], [a.px1 + 10, a.py1], { color: C.slate, w: 1.4 });
  arrow(s, [a.px0, a.py1], [a.px0, a.py0 - 10], { color: C.slate, w: 1.4 });
  xt.forEach((v) => { path(s, [[gx(a, v), a.py1], [gx(a, v), a.py1 + 4]], { color: C.slate, w: 1.2, free: true }); mark(s, gx(a, v), a.py1 + 19, (o.xfmt ?? String)(v), { size: 12 }); });
  yt.forEach((v) => { path(s, [[a.px0, gy(a, v)], [a.px0 - 4, gy(a, v)]], { color: C.slate, w: 1.2, free: true }); mark(s, a.px0 - 8, gy(a, v) + 4, (o.yfmt ?? String)(v), { size: 12, anchor: 'end' }); });
  mark(s, (a.px0 + a.px1) / 2, a.py1 + 42, xl, { size: 14 });
  mark(s, a.px0 + 12, a.py0 - 2, yl, { size: 14, anchor: 'start' });
}

/* ===================================================================== */
/* p12-15-01-d1 · pendulum with an amplitude scale                        */
/* ===================================================================== */
/**
 * The thread is 1.00 m and the pull-aside 10 cm, so the swing is about 6°
 * (sin⁻¹ 0.10 = 5.7°). Drawn to the figure's own scale of 8 px a cm the
 * amplitude is 80 px, and the thread is drawn 200 px long: not to scale
 * (a 1 m thread would be 800 px), so the angle drawn is larger than 6°.
 */
const G1 = { pivot: [140, 40] as P, L: 200, pxcm: 8, A: 10, bobR: 10, rule: { y: 262, h: 20 } };
const g1 = () => {
  const { pivot, L, pxcm, A, bobR } = G1;
  const rest: P = [pivot[0], pivot[1] + L];
  const dx = A * pxcm, bob: P = [pivot[0] + dx, pivot[1] + Math.sqrt(L * L - dx * dx)];
  return { rest, bob, dx, ang: Math.asin(dx / L) / D2R, ruleTop: rest[1] + bobR + 6 };
};
const d1: Diagram = {
  id: 'p12-15-01-d1',
  topic: 0,
  name: 'Simple pendulum with an amplitude scale',
  cases: [{ chip: 'Pendulum', cap: 'A pendulum with a heavy bob on a thread from a rigid clamp. A horizontal scale fixed just behind the bob has its zero at the rest position, and the bob is pulled aside to one end of its swing, an amplitude A from the rest position. A stop-watch times the swings. Not to scale: the thread is drawn much shorter than the real 1 m, so the angle looks larger than the real 6°.' }],
  draw() {
    const s = new Sketch(W, 346);
    const { pivot, pxcm, bobR } = G1;
    const { rest, bob, ruleTop } = g1();
    // rigid clamp: a ceiling bar hatched above, the thread hangs from its middle
    path(s, [[90, 24], [190, 24]], { w: 3 });
    for (let x = 96; x <= 184; x += 12) path(s, [[x, 24], [x - 6, 16]], { color: C.slate, w: 1.2, free: true });
    path(s, [[pivot[0], 24], [pivot[0], pivot[1]]], { w: 2 });
    s.dot(pivot[0], pivot[1], 3);
    // the rest position: a dashed thread, a ghost bob, a mark on the scale
    path(s, [pivot, [rest[0], ruleTop]], { color: C.faint, w: 1.2, dash: 'dash', free: true });
    ring(s, rest, bobR, { color: C.faint, w: 1.2 });
    // the displaced pendulum
    path(s, [pivot, add(bob, unit(sub(bob, pivot)), -bobR)], { w: 1.7 });
    ring(s, bob, bobR, { w: 2 });
    // the scale behind: zero at the rest position, a mark every centimetre
    const x0 = rest[0] - 100, x1 = rest[0] + 100, y0 = ruleTop, y1 = ruleTop + G1.rule.h;
    box(s, [x0, y0, x1, y1], { w: 1.5 });
    for (let k = -12; k <= 12; k++) path(s, [[rest[0] + k * pxcm, y0], [rest[0] + k * pxcm, y0 + (k % 5 === 0 ? 8 : 4)]], { color: C.slate, w: 1.1, free: true });
    [-10, 0, 10].forEach((k) => s.text(rest[0] + k * pxcm, y1 - 4, String(Math.abs(k)), { size: 11 }));
    s.dot(rest[0], y0, 2.6, C.ink);
    // the amplitude, read on the scale
    const ya = y1 + 26;
    guide(s, [rest[0], y1 + 3], [rest[0], ya + 5]);
    guide(s, [bob[0], bob[1] + bobR + 3], [bob[0], ya + 5]);
    arrow(s, [rest[0] + 4, ya], [bob[0] - 1, ya], { color: C.mari, w: 2.2 });
    arrow(s, [bob[0] - 4, ya], [rest[0] + 1, ya], { color: C.mari, w: 2.2 });
    mark(s, (rest[0] + bob[0]) / 2, ya - 9, '<i>A</i>', { size: 16, color: C.amber });
    // the stop-watch
    const sw: P = [52, 168];
    ring(s, sw, 22, { w: 1.8 });
    path(s, [[sw[0] - 4, sw[1] - 22], [sw[0] - 4, sw[1] - 29], [sw[0] + 4, sw[1] - 29], [sw[0] + 4, sw[1] - 22]], { w: 1.5 });
    path(s, [sw, [sw[0] + 9, sw[1] - 11]], { w: 1.5 });
    s.dot(sw[0], sw[1], 2, C.ink);
    s.place([
      { t: 'Rigid clamp', p: [pivot[0] + 30, 24], at: [[200, 6, 'start'], [214, 6, 'start']] },
      { t: 'Thread', p: [pivot[0] + (bob[0] - pivot[0]) * 0.4, pivot[1] + (bob[1] - pivot[1]) * 0.4], at: [[214, 80, 'start'], [214, 70, 'start']] },
      { t: 'Bob', p: [bob[0] + bobR * 0.7, bob[1] + bobR * 0.7], at: [[250, 236, 'start'], [244, 250, 'start']] },
      { t: 'Rest position', p: [rest[0], pivot[1] + 150], at: [[10, 112, 'start'], [10, 100, 'start']] },
      { t: 'Scale', p: [x1, y1 - 10], at: [[254, y1 - 4, 'start'], [254, y1 + 8, 'start']] },
      { t: 'Stop-watch', p: [sw[0], sw[1] + 22], at: [[8, 214, 'start'], [8, 208, 'start']] },
      { t: 'Amplitude', hi: true, p: [(rest[0] + bob[0]) / 2 + 12, ya], at: [[150, y1 + 38, 'start'], [168, y1 + 38, 'start']] },
    ]);
    return s;
  },
  check() {
    const { pivot, L, pxcm, A, bobR } = G1;
    const { rest, bob, dx, ang, ruleTop } = g1();
    const s = d1.draw(d1.cases[0]);
    return [
      ['The thread is the same length to the displaced bob as to the rest position (the bob swings on a circle about the clamp)', close(len(pivot, bob), L, 1e-9) && close(len(pivot, rest), L, 1e-9)],
      [`The bob stands ${fmt(dx / pxcm, 1)} cm from the scale's zero (8 px a cm): the amplitude A = 10.0 cm of the procedure`, close(dx / pxcm, A, 1e-9) && close(bob[0] - rest[0], dx, 1e-9)],
      ['The scale’s zero is directly below the clamp, on the rest position, and the bob’s own height is above the scale', close(rest[0], pivot[0], 1e-9) && bob[1] + bobR < ruleTop],
      [`For the real 1.00 m thread a 10 cm pull-aside is sin⁻¹(0.10) = ${fmt(Math.asin(0.1) / D2R, 1)}°, the "about 6°" of the procedure; the drawing is not to scale (the thread is drawn short), so its angle is ${fmt(ang, 0)}°`, Math.abs(Math.asin(0.1) / D2R - 6) < 0.5],
      [`The caption’s “not to scale” holds: the thread is drawn ${fmt(L / pxcm, 0)} cm long against the real 100 cm, so the drawn angle ${fmt(ang, 0)}° exceeds the real 6°`, L / pxcm < 100 && ang > Math.asin(0.1) / D2R],
      ['The bob is level with or above its rest height (a swing raises it)', bob[1] <= rest[1]],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-01-d2 · energy decay: A² and ln A² against t                    */
/* ===================================================================== */
/** The chapter's table: t (s), A (cm), A² (cm²), ln A². */
const T2 = [
  { t: 0, A: 10.0, A2: 100.0, ln: 4.61 },
  { t: 100, A: 7.8, A2: 60.8, ln: 4.11 },
  { t: 200, A: 6.1, A2: 37.2, ln: 3.62 },
  { t: 300, A: 4.7, A2: 22.1, ln: 3.1 },
  { t: 400, A: 3.7, A2: 13.7, ln: 2.62 },
  { t: 500, A: 2.9, A2: 8.4, ln: 2.13 },
];
/** b/m from the first and last points of ln A² against t (the worked example: 4.95 × 10⁻³ s⁻¹). */
const K2 = (Math.log(100) - Math.log(8.41)) / 500;
const AX2a: Ax = { px0: 62, px1: 296, py0: 40, py1: 246, xmax: 500, ymax: 100 };
const AX2b: Ax = { px0: 62, px1: 296, py0: 40, py1: 246, xmax: 500, ymax: 5 };
const curve2 = (t: number) => 100 * Math.exp(-K2 * t);
const d2: Diagram = {
  id: 'p12-15-01-d2',
  topic: 0,
  name: 'How a pendulum’s energy decays',
  cases: [
    { chip: 'A² against t', cap: 'Left panel: A² (cm²) against t (s) for the 1.00 m pendulum, a smooth falling exponential through the six readings of the table. It is steep at first, flattens, and never reaches zero.' },
    { chip: 'ln A² against t', cap: 'Right panel: ln A² against t (s) for the same readings, a straight line of negative slope from 4.61 at t = 0 to 2.13 at t = 500 s. Its slope is −b/m = −4.95 × 10⁻³ s⁻¹.' },
  ],
  draw(c: { chip: string }) {
    const second = c.chip !== 'A² against t';
    const s = new Sketch(W, second ? 372 : 306);
    const a = second ? AX2b : AX2a;
    axes(s, a, [0, 100, 200, 300, 400, 500], second ? [0, 1, 2, 3, 4, 5] : [0, 20, 40, 60, 80, 100], 't (s)', second ? 'ln A²' : 'A² (cm²)');
    // the best-fit curve or line
    const ts = samples(0, 500, 100);
    const pts: P[] = ts.map((t) => [gx(a, t), gy(a, second ? Math.log(100) - K2 * t : curve2(t))]);
    path(s, pts, { color: C.mari, w: 2.6 });
    T2.forEach((r) => s.dot(gx(a, r.t), gy(a, second ? r.ln : r.A2), 3.6));
    if (second) {
      // the slope triangle: Δt along the top, Δ(ln A²) down the side
      const top = gy(a, T2[0].ln), bot = gy(a, T2[5].ln), xr = gx(a, 500);
      guide(s, [gx(a, 0), top], [xr, top]);
      guide(s, [xr, top], [xr, bot]);
      mark(s, (gx(a, 0) + xr) / 2 + 20, top - 8, 'Δ<i>t</i> = 500 s', { size: 13 });
      mark(s, xr - 10, (top + bot) / 2 - 8, 'Δ ln <i>A</i>² = −2.48', { size: 13, anchor: 'end' });
      resultBlock(s, ['slope = −<i>b</i>/<i>m</i>', '= −4.95 × 10<sup>−3</sup> s<sup>−1</sup>']);
      s.place([
        { t: 'Straight line', hi: true, p: [gx(a, 150), gy(a, Math.log(100) - K2 * 150)], at: [[gx(a, 60), gy(a, 3.3), 'start'], [gx(a, 40), gy(a, 3.0), 'start'], [gx(a, 60), gy(a, 2.6), 'start']] },
        { t: 'Table readings', p: [gx(a, 300), gy(a, 3.1)], at: [[gx(a, 300) + 30, gy(a, 3.1) + 50, 'start'], [gx(a, 300) - 60, gy(a, 3.1) + 60, 'start']] },
      ], [resultRect2(s)]);
    } else {
      s.place([
        { t: 'Decay curve', hi: true, p: [gx(a, 100), gy(a, curve2(100))], at: [[gx(a, 100) + 28, gy(a, curve2(100)) - 6, 'start'], [gx(a, 100) + 28, gy(a, curve2(100)) - 24, 'start']] },
        { t: 'Table readings', p: [gx(a, 200), gy(a, 37.2)], at: [[72, gy(a, 37.2) + 30, 'start'], [72, gy(a, 37.2) + 40, 'start']] },
        { t: 'Never reaches 0', p: [gx(a, 440), gy(a, curve2(440))], at: [[gx(a, 330), gy(a, 50), 'start'], [gx(a, 360), gy(a, 62), 'start'], [gx(a, 300), gy(a, 40), 'start']] },
      ]);
    }
    return s;
  },
  check(c: { chip: string }) {
    const second = c.chip !== 'A² against t';
    const s = d2.draw(c);
    const decr = T2.every((r, i) => !i || r.A2 < T2[i - 1].A2);
    const drops = T2.slice(1).map((r, i) => T2[i].A2 - r.A2);
    const near = T2.every((r) => Math.abs(curve2(r.t) - r.A2) < 0.7);
    const tableOk = T2.every((r) => close(r.A * r.A, r.A2, 0.06) && close(Math.log(r.A2), r.ln, 0.006));
    const lineErr = Math.max(...T2.map((r) => Math.abs(Math.log(100) - K2 * r.t - r.ln)));
    const slope = (T2[5].ln - T2[0].ln) / 500;
    const half = Math.LN2 / K2;
    if (!second)
      return [
        ['The table is consistent: A² = A × A and ln A² follow from the amplitudes', tableOk],
        ['The curve is the exponential 100 e^(−(b/m)t) with b/m = (ln 100 − ln 8.41)/500 = 4.95 × 10⁻³ s⁻¹', close(K2, 4.95e-3, 0.005e-3)],
        [`It falls steadily and passes within 0.7 cm² of every reading (largest miss ${fmt(Math.max(...T2.map((r) => Math.abs(curve2(r.t) - r.A2))), 2)} cm²)`, decr && near],
        [`It flattens: each 100 s drops the energy by less than the one before (${drops.map((d) => fmt(d, 1)).join(', ')} cm²)`, drops.every((d, i) => !i || d < drops[i - 1])],
        ['It never reaches zero: the value at 500 s is still 8.4 cm², and the exponential is positive for every t', curve2(500) > 8 && ts500Positive()],
        [`The energy halves in ${fmt(half, 0)} s, which sits between the 100 s and 200 s readings (60.8 and 37.2 cm²) as the worked example says`, half > 100 && half < 200 && T2[1].A2 > 50 && T2[2].A2 < 50],
        ...layout(s),
      ];
    return [
      ['The table is consistent: ln A² for every row is the logarithm of A²', tableOk],
      [`The six points lie on one straight line (largest miss ${fmt(lineErr, 3)} in ln A²)`, lineErr < 0.025],
      [`Its slope from the first and last points is (2.13 − 4.61)/500 = ${fmt(slope * 1e3, 2)} × 10⁻³ s⁻¹, negative, and equals −b/m = −${fmt(K2 * 1e3, 2)} × 10⁻³ s⁻¹`, slope < 0 && close(slope, -K2, 0.0001e-0)],
      ['The line runs from 4.61 at t = 0 to 2.13 at t = 500 s, and the triangle’s sides are Δt = 500 s and Δ ln A² = −2.48', close(T2[0].ln - T2[5].ln, 2.48, 1e-9) && T2[5].t - T2[0].t === 500],
      [`The drawn line has the same slope as the data in pixels: ${fmt(((gy(AX2b, T2[5].ln) - gy(AX2b, T2[0].ln)) / (gx(AX2b, 500) - gx(AX2b, 0))), 3)} px per px`, close((gy(AX2b, 2.13) - gy(AX2b, 4.61)) / (gx(AX2b, 500) - gx(AX2b, 0)), (K2 * 500 * (AX2b.py1 - AX2b.py0) / AX2b.ymax) / (AX2b.px1 - AX2b.px0), 0.02)],
      ...layout(s),
    ];
  },
};
const ts500Positive = () => samples(0, 500, 50).every((t) => curve2(t) > 0);
const resultRect2 = (s: Sketch): Rect => s.tags[s.tags.length - 1].rect;

/* ===================================================================== */
/* p12-15-01-d3 · metre scale on a knife edge                             */
/* ===================================================================== */
/** The chapter's table of trials: standard mass M = 50.0 g, knife edge at G = 50.0 cm. */
const T3 = [
  { std: 20.0, obj: 70.8, a: 30.0, b: 20.8, m: 72.1 },
  { std: 25.0, obj: 67.4, a: 25.0, b: 17.4, m: 71.8 },
  { std: 30.0, obj: 63.9, a: 20.0, b: 13.9, m: 71.9 },
  { std: 35.0, obj: 60.4, a: 15.0, b: 10.4, m: 72.1 },
];
const G3 = { x0: 20, pxcm: 3, ry0: 120, ry1: 144, G: 50, M: 50.0 };
const xs3 = (cm: number) => G3.x0 + G3.pxcm * cm;
const d3: Diagram = {
  id: 'p12-15-01-d3',
  topic: 0,
  name: 'Metre scale balanced on a knife edge',
  cases: [{ chip: 'Balance', cap: 'A metre scale balanced horizontally on a knife edge at its centre of gravity G, at the 50.0 cm mark. A standard mass M hangs on a thread loop at a distance a on the left (trial 1: at the 20.0 cm mark, a = 30.0 cm). The object of unknown mass m hangs at a distance b on the right (at 70.8 cm, b = 20.8 cm). Balance of moments gives Ma = mb.' }],
  draw() {
    const s = new Sketch(W, 304);
    const { ry0, ry1, G } = G3;
    const t = T3[0];
    const xG = xs3(G), xM = xs3(t.std), xm = xs3(t.obj);
    // the scale, 0 to 100 cm, a mark each 2 cm and a numeral each 10
    box(s, [xs3(0), ry0, xs3(100), ry1], { w: 1.6 });
    for (let k = 0; k <= 100; k += 2) path(s, [[xs3(k), ry0], [xs3(k), ry0 + (k % 10 === 0 ? 7 : 3.5)]], { color: C.slate, w: 1, free: true });
    for (let k = 0; k <= 100; k += 10) s.text(k === 0 ? xs3(k) + 3 : k === 100 ? xs3(k) - 3 : xs3(k), ry1 - 5, String(k), { size: 10.5, anchor: k === 0 ? 'start' : k === 100 ? 'end' : 'middle' });
    // the knife edge at G (the highlight), on its stand
    outline(s, [[xG, ry1], [xG - 11, ry1 + 24], [xG + 11, ry1 + 24]], { color: C.mari, w: 2.4 });
    path(s, [[xG - 22, ry1 + 24], [xG + 22, ry1 + 24]], { w: 2.4 });
    s.dot(xG, ry1, 3, C.mari);
    mark(s, xG + 18, ry1 + 16, '<i>G</i>', { size: 14, anchor: 'start' });
    // the two hangers: a thread loop on the scale, a thread to the mass
    const hang = (x: number, w: number, label: string) => {
      ring(s, [x, ry1 + 4], 3.5, { w: 1.3 });
      path(s, [[x, ry1 + 7.5], [x, ry1 + 46]], { w: 1.4 });
      box(s, [x - w / 2, ry1 + 46, x + w / 2, ry1 + 46 + w], { w: 1.8 });
      mark(s, x, ry1 + 46 + w / 2 + 4.2, label, { size: 14 });
    };
    hang(xM, 24, '<i>M</i>');
    hang(xm, 27, '<i>m</i>');
    // a and b as dimension lines from the knife edge
    const yd = 92;
    [xM, xG, xm].forEach((x) => guide(s, [x, ry0 - 3], [x, yd - 6]));
    measure(s, [xG, yd], [xM, yd]);
    measure(s, [xG, yd], [xm, yd]);
    mark(s, (xG + xM) / 2, yd - 8, '<i>a</i> = 30.0 cm', { size: 13 });
    mark(s, (xG + xm) / 2, yd - 8, '<i>b</i> = 20.8 cm', { size: 13 });
    s.result('m = Ma/b = 72.1 g');
    s.place([
      { t: 'Metre scale', p: [xs3(8), ry0], at: [[10, 28, 'start'], [10, 48, 'start']] },
      { t: 'Knife edge', hi: true, p: [xG + 11, ry1 + 24], at: [[xG - 44, ry1 + 38, 'start'], [xG - 60, ry1 + 40, 'start']] },
      { t: 'Thread loop', p: [xm, ry1 + 30], at: [[xm + 10, ry1 + 16, 'start'], [xm + 10, ry1 + 6, 'start']] },
      { t: 'Standard mass', p: [xM, ry1 + 46 + 24], at: [[20, ry1 + 80, 'start'], [10, ry1 + 84, 'start']] },
      { t: 'Object', p: [xm, ry1 + 46 + 27], at: [[xm - 24, ry1 + 84, 'start'], [xm - 30, ry1 + 88, 'start']] },
    ]);
    return s;
  },
  check() {
    const { G, M, pxcm } = G3;
    const t = T3[0];
    const xG = xs3(G), xM = xs3(t.std), xm = xs3(t.obj);
    const a = (xG - xM) / pxcm, b = (xm - xG) / pxcm;
    const ms = T3.map((r) => (M * ((G - r.std)) / (r.obj - G)));
    const mean = ms.reduce((p, q) => p + q, 0) / ms.length;
    const sab = T3.reduce((p, r) => p + r.a * r.b, 0), saa = T3.reduce((p, r) => p + r.a * r.a, 0);
    const s = d3.draw(d3.cases[0]);
    return [
      ['The scale runs from 0 at the left end to 100 at the right, 3 px a cm, and the knife edge stands under the 50.0 cm mark, the middle of the scale', close(xs3(0), G3.x0) && close(xs3(100) - xs3(0), 300) && close(xG, (xs3(0) + xs3(100)) / 2)],
      [`Trial 1: the standard hangs at ${fmt((xM - G3.x0) / pxcm, 1)} cm, so a = ${fmt(a, 1)} cm from the knife edge; the object at ${fmt((xm - G3.x0) / pxcm, 1)} cm, so b = ${fmt(b, 1)} cm`, close(a, 30.0, 1e-9) && close(b, 20.8, 1e-9)],
      ['The standard is on the left, the object on the right, and the heavier object hangs nearer the knife edge (b < a)', xM < xG && xG < xm && b < a],
      [`The moments balance: Ma = 50.0 × 30.0 = ${fmt(M * a, 0)} g cm and mb = ${fmt(t.m * b, 0)} g cm, so m = Ma/b = ${fmt(M * a / b, 1)} g`, close(M * a / b, 72.1, 0.05) && Math.abs(M * a - t.m * b) < 3],
      [`Every trial of the table gives m = Ma/b near 72 g (${ms.map((m) => fmt(m, 1)).join(', ')}), mean ${fmt(mean, 1)} g, and a = G − mark, b = mark − G for each`, T3.every((r) => close(r.a, G - r.std, 1e-9) && close(r.b, r.obj - G, 1e-9)) && close(mean, 72.0, 0.1)],
      [`The line b = (M/m)a through the origin has slope Σab/Σa² = ${fmt(sab / saa, 3)} = M/m, giving m = ${fmt(M / (sab / saa), 1)} g, the worked example's 72.0 g`, close(sab, 1493, 1) && close(saa, 2150, 1e-9) && close(M / (sab / saa), 72.0, 0.1)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-01-d4 · Searle's apparatus                                      */
/* ===================================================================== */
/**
 * Two identical wires hang from one rigid support, 200 px apart. Each ends
 * in a frame at the same height, with a hanger and a dead load. The spirit
 * level lies across the frames: its right end is hinged on a point of the
 * reference frame, its left end rests on the tip of the micrometer screw,
 * which an arm carries from the experimental frame (the screw falls with
 * the loaded wire).
 */
const G4 = {
  support: { y0: 16, y1: 26, x0: 14, x1: 326 },
  xe: 70, xr: 270, top: 184, fh: 30, fw: 60,
  level: { x0: 96, x1: 290, y0: 148, y1: 162 },
  pivotX: 284, screwX: 108, hr: 38,
  /** Slotted slabs on each hanger, and the dead load each carries (drawn the same size). */
  slots: { exp: 3, ref: 0 }, dead: { exp: 1, ref: 1 },
};
/** The frames, top y shared. */
const frames4 = () => { const { xe, xr, top, fh, fw } = G4; return { F1: [xe - fw / 2, top, xe + fw / 2, top + fh] as Rect, F2: [xr - fw / 2, top, xr + fw / 2, top + fh] as Rect }; };
const d4: Diagram = {
  id: 'p12-15-01-d4',
  topic: 0,
  name: 'Searle’s apparatus',
  cases: [{ chip: 'Searle’s apparatus', cap: 'Searle’s apparatus: an experimental wire and a reference wire of the same material and length hang side by side from a rigid support, each ending in a frame with a hanger and a constant dead load. A spirit level lies across the frames, hinged on the reference wire’s frame and resting on the tip of a micrometer screw carried by the experimental wire’s frame. Slotted loads go on the hanger of the experimental wire, and L is the length of the wire from the support to the frame.' }],
  draw() {
    const s = new Sketch(W, 346);
    const { support, xe, xr, top, fh, fw, level, pivotX, screwX } = G4;
    // the rigid support, hatched above
    path(s, [[support.x0, support.y1], [support.x1, support.y1], [support.x1, support.y0], [support.x0, support.y0], [support.x0, support.y1]], { w: 2 });
    for (let x = support.x0 + 8; x <= support.x1 - 4; x += 12) path(s, [[x, support.y0], [x - 6, support.y0 - 8]], { color: C.slate, w: 1.2, free: true });
    // the two wires and their frames
    path(s, [[xe, support.y1], [xe, top]], { w: 1.5 });
    path(s, [[xr, support.y1], [xr, top]], { w: 1.5 });
    const { F1, F2 } = frames4();
    const { hr } = G4;
    box(s, F1, { w: 1.8 });
    box(s, F2, { w: 1.8 });
    // hangers, dead loads and the slotted loads
    const hanger = (x: number, slots: number) => {
      path(s, [[x, top + fh], [x, top + fh + hr]], { w: 1.4 });
      path(s, [[x - 16, top + fh + hr], [x + 16, top + fh + hr]], { w: 2 });
      box(s, [x - 15, top + fh + hr + 4, x + 15, top + fh + hr + 22], { w: 1.7 });
      for (let k = 0; k < slots; k++) box(s, [x - 13, top + fh + hr + 25 + 6 * k, x + 13, top + fh + hr + 30 + 6 * k], { w: 1.4 });
    };
    hanger(xe, G4.slots.exp);
    hanger(xr, G4.slots.ref);
    // the spirit level across the frames: bar, tube, centred bubble
    box(s, [level.x0, level.y0, level.x1, level.y1], { color: C.mari, w: 2.2 });
    const tube: Rect = [164, level.y0 + 3, 222, level.y1 - 3];
    box(s, tube, { color: C.mari, w: 1.2 });
    path(s, ellipsePts([(tube[0] + tube[2]) / 2, (tube[1] + tube[3]) / 2], 6.5, 2.2), { color: C.mari, w: 1.3 });
    // its right end hinged on the reference frame
    outline(s, [[pivotX, level.y1], [pivotX - 6, top], [pivotX + 4, top]], { w: 1.7 });
    // its left end on the tip of the micrometer screw, carried from the experimental frame by an arm
    path(s, [[screwX, level.y1], [screwX, level.y1 + 10]], { w: 1.7 });
    box(s, [screwX - 6, level.y1 + 10, screwX + 6, top + 12], { w: 1.7 });
    path(s, [[screwX - 6, top + 12], [xe + fw / 2, top + 12]], { w: 1.7 });
    s.dot(screwX, level.y1 + 0.5, 2.4, C.ink);
    // the length L of the wire, from the support to the frame
    measure(s, [24, support.y1 + 1], [24, top]);
    guide(s, [24, top], [xe - fw / 2 - 4, top]);
    mark(s, 11, 110, '<i>L</i>', { size: 15, anchor: 'start' });
    s.place([
      { t: 'Rigid support', p: [180, support.y1], at: [[126, 36, 'start'], [150, 36, 'start']] },
      { t: 'Experimental wire', p: [xe, 100], at: [[96, 64, 'start'], [100, 70, 'start']] },
      { t: 'Reference wire', p: [xr, 130], at: [[130, 92, 'start'], [136, 98, 'start']] },
      { t: 'Spirit level', hi: true, p: [(level.x0 + level.x1) / 2 - 20, level.y1], at: [[132, 172, 'start'], [146, 176, 'start'], [134, 190, 'start']] },
      { t: 'Frame', p: [F1[0] + 6, top + fh], at: [[6, 222, 'start'], [4, 226, 'start']] },
      { t: 'Frame', p: [F2[2] - 8, top + fh], at: [[282, 222, 'start'], [278, 226, 'start']] },
      { t: 'Micrometer screw', p: [screwX, top + 12], at: [[106, 226, 'start'], [100, 232, 'start']] },
      { t: 'Slotted loads', p: [xe, top + fh + hr + 30 + 6 * 2], at: [[20, 312, 'start'], [10, 316, 'start']] },
      { t: 'Dead load', p: [xr, top + fh + hr + 22], at: [[240, 282, 'start'], [230, 288, 'start']] },
    ]);
    return s;
  },
  check() {
    const { support, xe, xr, top, fw, level, pivotX, screwX } = G4;
    const s = d4.draw(d4.cases[0]);
    const Lpx = top - support.y1;
    // Young's modulus from the chapter's table (4.0 kg load, extension 1.575 mm)
    const ext = 6.08 - 4.505, d = 0.5e-3, Lm = 1.5, mg = 4.0 * 9.8;
    const Y = (4 * mg * Lm) / (Math.PI * d * d * (ext * 1e-3));
    const tube: Rect = [164, level.y0 + 3, 222, level.y1 - 3];
    return [
      ['Both wires hang from the support’s lower edge to a frame top at the same height, so they have the same length L and are parallel', xe !== xr && Lpx > 0 && close(top - support.y1, Lpx)],
      ['The two frames are the same size and at the same height, so the spirit level across them is horizontal (a bar with level top and bottom edges)', close(frames4().F1[1], frames4().F2[1]) && close(frames4().F1[3], frames4().F2[3]) && close(frames4().F1[2] - frames4().F1[0], frames4().F2[2] - frames4().F2[0]) && level.y1 > level.y0],
      ['The level’s right end is hinged on a point of the reference frame’s top, and its left end rests on the screw tip carried from the experimental frame (the screw falls with the loaded wire)', pivotX > xr - fw / 2 && pivotX < xr + fw / 2 && screwX > xe + fw / 2 && screwX < xr - fw / 2 && level.x0 < screwX && level.x1 > pivotX],
      ['The bubble sits at the middle of the tube: the level is read as horizontal', close((tube[0] + tube[2]) / 2, (level.x0 + level.x1) / 2, 1e-9) && tube[0] > level.x0 && tube[2] < level.x1],
      [`The ${G4.slots.exp} slotted slabs hang from the experimental wire’s hanger only (${G4.slots.ref} on the reference hanger); both carry one dead load`, G4.slots.exp > 0 && G4.slots.ref === 0 && G4.dead.exp === G4.dead.ref],
      [`Reading back the chapter's data: extension for 4.0 kg is 6.08 − 4.505 = ${fmt(ext, 3)} mm, and Y = 4mgL/(πd²ℓ) = ${fmt(Y / 1e11, 2)} × 10¹¹ N m⁻²`, close(ext, 1.575, 1e-9) && close(Y, 1.90e11, 0.005e11)],
      ...layout(s),
    ];
  },
};
/** Points on an ellipse about c (semi-axes rx, ry). */
function ellipsePts(c: P, rx: number, ry: number, n = 48): P[] {
  return samples(0, 360, n).map((a): P => [c[0] + rx * Math.cos(a * D2R), c[1] + ry * Math.sin(a * D2R)]);
}

/* ===================================================================== */
/* p12-15-01-d5 · load against extension                                  */
/* ===================================================================== */
/** The chapter's micrometer table: load (kg), loading and unloading screw readings (mm). Extension is the reading minus 4.505 mm, the mean unloaded reading. */
const T5 = [
  { m: 0, load: 4.5, unload: 4.51 },
  { m: 1, load: 4.89, unload: 4.91 },
  { m: 2, load: 5.29, unload: 5.3 },
  { m: 3, load: 5.68, unload: 5.7 },
  { m: 4, load: 6.08, unload: 6.08 },
];
const REF5 = 4.505;
/** The table's Extension column (the mean of loading and unloading) is the loading line; the rings are the unloading readings on the same reference. */
const EXT5 = T5.map((r, i) => ({ m: r.m, up: [0, 0.395, 0.79, 1.185, 1.575][i], down: +(r.unload - REF5).toFixed(3) }));
/** Slope of the best line through the origin, m = k ℓ, by least squares on the loading points. */
const K5 = EXT5.reduce((p, r) => p + r.m * r.up, 0) / EXT5.reduce((p, r) => p + r.up * r.up, 0);
const KG5 = 1 / 0.395; // kg per mm from the table's mean extension per kg
const AX5: Ax = { px0: 62, px1: 296, py0: 40, py1: 250, xmax: 2.4, ymax: 6 };
/** Beyond the elastic limit ℓe the load rises more slowly for each mm: m = me + k s − q s². */
const LIM5 = { le: 1.85, q: 2.0 };
const beyond5 = (l: number) => { const sx = l - LIM5.le; return LIM5.le * KG5 + KG5 * sx - LIM5.q * sx * sx; };
const d5: Diagram = {
  id: 'p12-15-01-d5',
  topic: 0,
  name: 'Load against extension for the wire',
  cases: [{ chip: 'Load–extension', cap: 'Load m (kg) against extension ℓ (mm) for the experimental wire. The loading points (0, 0), (0.395, 1), (0.79, 2), (1.185, 3) and (1.575, 4) lie on a straight line through the origin, and the unloading points lie almost on the same line. Beyond the elastic limit the dashed curve bends away, the extension growing faster for each added kilogram.' }],
  draw() {
    const a = AX5;
    const s = new Sketch(W, 372);
    axes(s, a, [0.5, 1, 1.5, 2], [1, 2, 3, 4, 5, 6], 'ℓ (mm)', 'm (kg)');
    mark(s, a.px0 - 11, a.py1 + 23, '0', { size: 12 });
    // the straight line to the elastic limit, then the dashed bend
    const mE = LIM5.le * KG5;
    path(s, [[gx(a, 0), gy(a, 0)], [gx(a, LIM5.le), gy(a, mE)]], { color: C.mari, w: 2.6 });
    path(s, samples(LIM5.le, 2.35, 40).map((l): P => [gx(a, l), gy(a, beyond5(l))]), { color: C.slate, w: 2, dash: 'dash' });
    // the unloading points (rings) and the loading points (dots)
    EXT5.forEach((r) => { path(s, ellipsePts5([gx(a, r.down), gy(a, r.m)], 6.2), { w: 1.4 }); });
    EXT5.forEach((r) => s.dot(gx(a, r.up), gy(a, r.m), 3.2));
    // the elastic limit
    const E: P = [gx(a, LIM5.le), gy(a, mE)];
    path(s, [[E[0] - 6, E[1] - 6], [E[0] + 6, E[1] + 6]], { w: 1.6, free: true });
    path(s, [[E[0] + 6, E[1] - 6], [E[0] - 6, E[1] + 6]], { w: 1.6, free: true });
    s.dot(E[0], E[1], 2.4);
    resultBlock(s, ['slope = <i>m</i>/<i>ℓ</i>', '= 2.53 × 10<sup>3</sup> kg m<sup>−1</sup>']);
    s.place([
      { t: 'Elastic limit', p: E, at: [[gx(a, 0.55), gy(a, 5.7), 'start'], [gx(a, 0.4), gy(a, 5.2), 'start']] },
      { t: 'Straight line', hi: true, p: [gx(a, 0.6), gy(a, 0.6 * KG5)], at: [[116, 222, 'start'], [124, 224, 'start']] },
      { t: 'Loading', p: [gx(a, EXT5[3].up), gy(a, 3)], at: [[gx(a, 1.3), gy(a, 1.9), 'start'], [gx(a, 1.5), gy(a, 2.4), 'start']] },
      { t: 'Unloading', bare: true, own: [gx(a, EXT5[2].down), gy(a, 2)], p: [gx(a, EXT5[2].down) - 6.2 * Math.SQRT1_2, gy(a, 2) - 6.2 * Math.SQRT1_2], at: [[gx(a, 0.1), gy(a, 3.7), 'start'], [gx(a, 0.1), gy(a, 3.4), 'start']] },
    ], []);
    return s;
  },
  check() {
    const a = AX5;
    const s = d5.draw(d5.cases[0]);
    const lineMiss = Math.max(...EXT5.map((r) => Math.abs(r.up - r.m / K5)));
    const downMiss = Math.max(...EXT5.map((r) => Math.abs(r.down - r.up)));
    const slopes = samples(LIM5.le, 2.35, 40).map((l) => KG5 - 2 * LIM5.q * (l - LIM5.le));
    const faster = samples(LIM5.le + 0.05, 2.35, 24).every((l) => beyond5(l) / KG5 < l && l > beyond5(l) / KG5 + 1e-9);
    const meanPerKg = EXT5.slice(1).reduce((p, r) => p + r.up / r.m, 0) / 4;
    const Y = (4 * 9.8 * 1.5) / (Math.PI * 0.5e-3 * 0.5e-3) * (1 / (meanPerKg * 1e-3));
    const mono = samples(LIM5.le, 2.35, 40).every((l, i, arr) => !i || beyond5(l) > beyond5(arr[i - 1]));
    return [
      ['The extension column is the mean of the loading and unloading screw readings minus 4.505 mm, for 0 to 4 kg', T5.every((r, i) => close((r.load + r.unload) / 2 - REF5, EXT5[i].up, 0.0051))],
      [`The five loading points lie on one straight line through the origin (fitted slope ${fmt(K5, 3)} kg mm⁻¹; largest miss ${fmt(lineMiss, 4)} mm)`, lineMiss < 0.006 && close(K5, KG5, 0.01)],
      [`The unloading points lie almost on the same line (largest gap ${fmt(downMiss, 3)} mm, within the ±0.01 mm of a screw reading)`, downMiss < 0.0101],
      [`The mean extension is ${fmt(meanPerKg, 3)} mm per kg, so m/ℓ = ${fmt(1 / (meanPerKg * 1e-3), 0)} kg m⁻¹ = 2.53 × 10³, and Y = 4gL m/(πd²ℓ) = ${fmt(Y / 1e11, 2)} × 10¹¹ N m⁻²`, close(1 / (meanPerKg * 1e-3), 2530, 5) && close(Y, 1.9e11, 0.01e11)],
      ['The elastic limit lies beyond the last loading point (ℓ = 1.575 mm), and it sits on the line', LIM5.le > 1.575 && close(gy(a, LIM5.le * KG5), gy(a, LIM5.le * KG5))],
      [`Beyond it the curve rises more slowly (slope falls from ${fmt(slopes[0], 2)} to ${fmt(slopes[slopes.length - 1], 2)} kg mm⁻¹, still positive): the extension grows faster than the load`, mono && slopes.every((k, i) => !i || k < slopes[i - 1]) && slopes[slopes.length - 1] > 0 && faster],
      ...layout(s),
    ];
  },
};
function ellipsePts5(c: P, r: number): P[] { return ellipsePts(c, r, r); }

/* ===================================================================== */
/* p12-15-01-d6 · capillary rise                                          */
/* ===================================================================== */
/**
 * Not to scale: the real bore is 0.70 mm and the rise 4.13 cm, a ratio of
 * about 118 : 1; the tube is drawn 40 px across and the rise 104 px so that
 * the meniscus and its angle can be seen. The meniscus is a circular arc of
 * radius r/cos θ meeting the wall at the angle θ, drawn at θ = 30° so the
 * angle shows (clean glass has θ near 0).
 */
const G6 = { xc: 96, r: 20, theta: 30, top: 44, bottom: 300, yf: 240, hpx: 104, beaker: { x0: 24, x1: 170, y0: 186, y1: 334 } };
/** The meniscus arc of a tube of radius r about x = xc with its lowest point at (xc, ym): points from the left wall to the right wall. */
function meniscus(xc: number, ym: number, r: number, thetaDeg: number, half = false): P[] {
  const R = r / Math.cos(thetaDeg * D2R), aw = 90 - thetaDeg;
  return samples(half ? 0 : -aw, aw, 400).map((al): P => [xc + R * Math.sin(al * D2R), ym - R + R * Math.cos(al * D2R)]);
}
const g6 = () => {
  const { xc, r, theta, yf, hpx } = G6;
  const ym = yf - hpx, R = r / Math.cos(theta * D2R);
  const W: P = [xc + r, ym - R + R * Math.sin(theta * D2R)];
  return { ym, R, W };
};
const D6 = { wallX: 252, rd: 48, yb: 206, T: 46, theta: 30 };
const d6: Diagram = {
  id: 'p12-15-01-d6',
  topic: 0,
  name: 'Capillary rise in a tube',
  cases: [{ chip: 'Capillary rise', cap: 'A clean capillary tube of radius r dips in water in a beaker. The water stands higher inside, with a concave meniscus meeting the wall at the angle of contact θ. The height h is measured from the free surface, where the pointer tip just touches the water, to the lowest point of the meniscus. The detail shows the surface-tension force T acting along the surface at the angle θ to the wall, with vertical part T cos θ.' }],
  draw() {
    const s = new Sketch(W, 372);
    const { xc, r, theta, top, bottom, yf, beaker } = G6;
    const { ym, W: Wc } = g6();
    // the beaker and the free surface (dashed, carried a little past the glass)
    path(s, [[beaker.x0, beaker.y0], [beaker.x0, beaker.y1], [beaker.x1, beaker.y1], [beaker.x1, beaker.y0]], { w: 1.8 });
    path(s, [[beaker.x0 + 4, yf], [beaker.x1 + 14, yf]], { color: C.slate, w: 1.3, dash: 'dash' });
    // the capillary tube: two walls, open at both ends
    path(s, [[xc - r, top], [xc - r, bottom]], { w: 1.8 });
    path(s, [[xc + r, top], [xc + r, bottom]], { w: 1.8 });
    // the concave meniscus, lowest point marked
    path(s, meniscus(xc, ym, r, theta), { color: C.mari, w: 2.4 });
    s.dot(xc, ym, 3.4, C.mari);
    // the contact angle θ at the right wall: from the wall (down) to the surface
    path(s, arcPts(Wc, 14, -90 - theta, -90, 20), { w: 1.3 });
    const th = polar(Wc, 28, -90 - theta / 2 - 6);
    mark(s, th[0], th[1] + 5, 'θ', { size: 14 });
    // the radius, across the bore under water
    arrow(s, [xc, 270], [xc + r - 1, 270], { w: 1.4, color: C.slate });
    s.dot(xc, 270, 2.2, C.slate);
    mark(s, xc + r / 2, 262, '<i>r</i>', { size: 14 });
    // the pointer, its tip just touching the free surface
    path(s, [[182, 166], [144, 166], [144, yf - 1]], { w: 1.6 });
    s.dot(144, yf - 1, 2.2);
    // h: the free surface up to the lowest point of the meniscus
    const xh = 56;
    guide(s, [xh - 6, ym], [xc - 4, ym]);
    arrow(s, [xh, yf - 2], [xh, ym + 1], { color: C.mari, w: 2 });
    arrow(s, [xh, ym + 4], [xh, yf + 1], { color: C.mari, w: 2 });
    mark(s, xh - 8, (ym + yf) / 2 + 5, '<i>h</i>', { size: 16, anchor: 'end', color: C.amber });
    // the detail of the wall: the surface, T along it, its parts
    const dt = D6;
    path(s, [[dt.wallX, 112], [dt.wallX, 232]], { w: 1.8 });
    const arcD = meniscus(dt.wallX - dt.rd, dt.yb, dt.rd, dt.theta, true);
    const Wd = arcD[arcD.length - 1];
    path(s, arcD, { color: C.mari, w: 2.4 });
    const Tdir: P = [Math.sin(dt.theta * D2R), -Math.cos(dt.theta * D2R)];
    const tip = add(Wd, Tdir, dt.T);
    path(s, [Wd, [Wd[0], Wd[1] - 52]], { color: C.slate, w: 1.1, dash: 'dash', free: true });
    arrow(s, Wd, tip, { w: 2.2 });
    guide(s, tip, [tip[0], Wd[1]]);
    guide(s, [tip[0], Wd[1]], Wd);
    path(s, arcPts(Wd, 24, 90 - dt.theta, 90, 20), { w: 1.3 });
    mark(s, Wd[0] + 6, Wd[1] - 34, 'θ', { size: 14, anchor: 'start' });
    mark(s, tip[0] + 5, tip[1] - 2, '<i>T</i>', { size: 15, anchor: 'start' });
    mark(s, tip[0] + 6, (tip[1] + Wd[1]) / 2 + 4, '<i>T</i> cos θ', { size: 13, anchor: 'start' });
    mark(s, Wd[0] + 8, Wd[1] + 20, '<i>T</i> sin θ', { size: 13, anchor: 'start' });
    const boxD: Rect = [192, 70, 338, 252];
    box(s, boxD, { color: C.faint, w: 1.2, dash: 'dash', free: true });
    s.place([
      { t: 'Lowest meniscus point', hi: true, p: [xc, ym], at: [[14, 8, 'start'], [20, 8, 'start']] },
      { t: 'Capillary tube', p: [xc + r, 70], at: [[186, 6, 'start'], [190, 6, 'start']] },
      { t: 'Pointer', p: [144, 166], at: [[122, 122, 'start'], [126, 124, 'start']] },
      { t: 'Free surface', p: [beaker.x1 + 12, yf], at: [[176, 262, 'start'], [176, 270, 'start']] },
      { t: 'Beaker', p: [100, beaker.y1], at: [[70, 346, 'start'], [60, 348, 'start']] },
      { t: 'Wall detail', p: [boxD[0] + 70, boxD[1]], at: [[214, 38, 'start'], [218, 40, 'start']] },
    ]);
    return s;
  },
  check() {
    const { xc, r, theta, yf, hpx, beaker } = G6;
    const { ym, R } = g6();
    const m = meniscus(xc, ym, r, theta);
    const lowest = m.reduce((p, q) => (q[1] > p[1] ? q : p), m[0]);
    const ends = [m[0], m[m.length - 1]];
    // tangent of the meniscus at the right wall, pointing along the surface toward the middle, against the wall's downward direction
    const n = m.length, tan: P = unit(sub(m[n - 2], m[n - 1]));
    const angle = Math.acos(dotp(tan, [0, 1])) / D2R;
    const dt = D6;
    const arcD = meniscus(dt.wallX - dt.rd, dt.yb, dt.rd, dt.theta, true);
    const Wd = arcD[arcD.length - 1];
    const Tdir: P = [Math.sin(dt.theta * D2R), -Math.cos(dt.theta * D2R)];
    const tip = add(Wd, Tdir, dt.T);
    const Tv = Wd[1] - tip[1], Th = tip[0] - Wd[0];
    const tanD = unit(sub(arcD[arcD.length - 2], arcD[arcD.length - 1]));
    // the chapter's reading: water, bore 0.70 mm, h = 4.130 cm
    const rr = 0.35e-3, hh = 4.13e-2, T = (rr * (hh + rr / 3) * 1000 * 9.8) / 2;
    const s = d6.draw(d6.cases[0]);
    return [
      [`The meniscus is concave: its lowest point is at the tube’s axis (y = ${fmt(lowest[1], 1)}) and it climbs to ${fmt(ends[0][1], 1)} at both walls, higher than the middle`, close(lowest[0], xc, 0.5) && ends.every((e) => e[1] < lowest[1] - 1) && close(ends[0][1], ends[1][1], 1e-9)],
      [`The arc is a circle of radius r/cos θ = ${fmt(R, 1)} px and meets each wall at θ = ${fmt(angle, 1)}° to the wall (the drawn angle is 30°, not the near-zero of clean glass, so that it can be seen)`, close(angle, theta, 0.6) && close(ends[1][0] - ends[0][0], 2 * r, 1e-6)],
      [`The water stands higher inside the tube than outside: the lowest point (y = ${fmt(ym, 0)}) is h = ${fmt(yf - ym, 0)} px above the free surface (y = ${fmt(yf, 0)}), and the pointer tip is on the free surface`, ym < yf && close(yf - ym, hpx, 1e-9)],
      ['The tube dips below the free surface and is open at both ends; the beaker’s walls rise above the water', G6.bottom > yf && G6.top < ym && beaker.y0 < yf],
      [`In the detail the force T makes ${fmt(Math.acos(dotp(Tdir, [0, -1])) / D2R, 1)}° with the wall: its vertical part is ${fmt(Tv, 1)} px = T cos θ = ${fmt(dt.T * Math.cos(dt.theta * D2R), 1)} px and its horizontal part ${fmt(Th, 1)} px = T sin θ`, close(Tv, dt.T * Math.cos(dt.theta * D2R), 1e-6) && close(Th, dt.T * Math.sin(dt.theta * D2R), 1e-6) && close(Math.hypot(Tv, Th), dt.T, 1e-9)],
      ['T lies along the surface: it is parallel to the meniscus tangent at the wall, and that tangent makes θ with the wall', close(Math.abs(dotp(Tdir, tanD)), 1, 1e-3) && close(Math.acos(dotp(tanD, [0, 1])) / D2R, dt.theta, 0.6)],
      [`Reading back the chapter: T = r(h + r/3)ρg/2 = ${fmt(T, 4)} N m⁻¹ for r = 0.350 mm, h = 4.130 cm (the text's 0.0710)`, close(T, 0.0710, 0.0003)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-01-d7 · terminal velocity of a ball in glycerine                */
/* ===================================================================== */
/**
 * The jar is drawn at 5 px a cm (mark B 40 cm under mark A), shorter than the
 * real 1 m jar. The force diagram's arrows are to one scale: weight W, buoyancy
 * U = Wσ/ρ and drag = W − U, from the chapter's densities (steel 7800, glycerine
 * 1260 kg m⁻³).
 */
const G7 = { jar: { x0: 40, x1: 140, y0: 30, y1: 372 }, surface: 64, pxcm: 5, aCm: 6, sCm: 40, rho: 7800, sigma: 1260, Wpx: 84, ball: [90, 200] as P };
const d7: Diagram = {
  id: 'p12-15-01-d7',
  topic: 0,
  name: 'A ball falling at terminal velocity',
  cases: [{ chip: 'Falling ball', cap: 'A small steel ball falls through glycerine in a tall jar, guided by a short tube at the top, and is timed between the marks A and B, a distance s apart; mark A is a few centimetres below the surface so that the ball has reached its terminal velocity. At terminal velocity three forces balance: the weight W acts downwards, and the buoyancy U and the Stokes drag 6πηrv act upwards, the ball falling at the constant speed v_t.' }],
  draw() {
    const s = new Sketch(W, 404);
    const { jar, surface, pxcm, aCm, sCm, rho, sigma, Wpx, ball } = G7;
    const yA = surface + aCm * pxcm, yB = yA + sCm * pxcm;
    // the jar (open top), the glycerine surface, the guide tube
    path(s, [[jar.x0, jar.y0], [jar.x0, jar.y1], [jar.x1, jar.y1], [jar.x1, jar.y0]], { w: 1.8 });
    path(s, [[jar.x0 + 2, surface], [jar.x1 - 2, surface]], { w: 1.3 });
    path(s, [[84, 14], [84, surface + 10]], { w: 1.6 });
    path(s, [[96, 14], [96, surface + 10]], { w: 1.6 });
    // the two marks (rubber bands) and the distance between them
    [yA, yB].forEach((y, i) => {
      path(s, [[jar.x0 - 5, y], [jar.x1 + 5, y]], { color: C.slate, w: 1.6 });
      mark(s, jar.x1 + 14, y + 5, i ? '<i>B</i>' : '<i>A</i>', { size: 15, anchor: 'start' });
    });
    guide(s, [26, yA], [jar.x0 - 8, yA]);
    guide(s, [26, yB], [jar.x0 - 8, yB]);
    measure(s, [26, yA], [26, yB]);
    mark(s, 12, (yA + yB) / 2 + 5, '<i>s</i>', { size: 16, anchor: 'start' });
    // the ball, falling down the axis from the tube
    guide(s, [90, surface + 12], [90, ball[1] - 8]);
    ring(s, ball, 6, { w: 1.9 });
    // the force diagram
    const c: P = [236, 232], br = 16;
    const bx: Rect = [172, 88, 336, 352];
    box(s, bx, { color: C.faint, w: 1.2, dash: 'dash', free: true });
    ring(s, c, br, { w: 2 });
    const U = Wpx * (sigma / rho), D = Wpx - U;
    arrow(s, [c[0], c[1] + br], [c[0], c[1] + br + Wpx], { w: 2.4 });
    arrow(s, [c[0] - 8, c[1] - br + 1], [c[0] - 8, c[1] - br + 1 - U], { w: 2.4 });
    arrow(s, [c[0] + 8, c[1] - br + 1], [c[0] + 8, c[1] - br + 1 - D], { w: 2.4 });
    mark(s, c[0] + 9, c[1] + br + Wpx / 2 + 4, '<i>W</i>', { size: 16, anchor: 'start' });
    mark(s, c[0] - 15, c[1] - br - U / 2 + 5, '<i>U</i>', { size: 16, anchor: 'end' });
    mark(s, c[0] + 16, c[1] - br - D / 2 + 5, '6π<i>ηrv</i>', { size: 15, anchor: 'start' });
    arrow(s, [312, c[1] - 30], [312, c[1] - 30 + arrows7().V[1]], { color: C.mari, w: 2.6 });
    mark(s, 304, c[1] + 5, '<i>v</i><sub>t</sub>', { size: 16, anchor: 'end', color: C.amber });
    s.place([
      { t: 'Guide tube', p: [96, 38], at: [[106, 1, 'start'], [110, 0, 'start']] },
      { t: 'Steel ball', p: [ball[0], ball[1] + 6], at: [[48, ball[1] + 22, 'start'], [48, ball[1] + 30, 'start']] },
      { t: 'Jar of glycerine', p: [90, jar.y1], at: [[40, 380, 'start'], [30, 382, 'start']] },
      { t: 'Forces on the ball', p: [bx[0] + 90, bx[1]], at: [[186, 58, 'start'], [190, 60, 'start']] },
      { t: 'Terminal velocity', hi: true, p: [312, c[1] - 30], at: [[196, 98, 'start'], [190, 100, 'start']] },
    ]);
    return s;
  },
  check() {
    const { jar, surface, pxcm, aCm, sCm, rho, sigma, Wpx, ball } = G7;
    const yA = surface + aCm * pxcm, yB = yA + sCm * pxcm;
    const U = Wpx * (sigma / rho), D = Wpx - U;
    const r = 1.0e-3, g = 9.8;
    const t = [26.8, 26.5, 27.0, 26.6, 26.9], tm = t.reduce((p, q) => p + q, 0) / t.length;
    const vt = 0.4 / tm, eta = (2 * r * r * (rho - sigma) * g) / (9 * vt);
    const Wn = (4 / 3) * Math.PI * r ** 3 * rho * g, Un = (4 / 3) * Math.PI * r ** 3 * sigma * g, drag = 6 * Math.PI * eta * r * vt;
    const Re = (2 * r * sigma * vt) / eta;
    const s = d7.draw(d7.cases[0]);
    return [
      [`Mark B is ${fmt((yB - yA) / pxcm, 1)} cm under mark A (5 px a cm), so s = 40 cm; A is ${fmt((yA - surface) / pxcm, 1)} cm under the surface ("a few centimetres")`, close((yB - yA) / pxcm, 40, 1e-9) && close((yA - surface) / pxcm, 6, 1e-9) && yB < jar.y1],
      ['The ball falls on the jar’s axis, between A and B, below the guide tube, away from the wall', ball[1] > yA && ball[1] < yB && close(ball[0], (jar.x0 + jar.x1) / 2, 1e-9)],
      [`The forces balance: U + drag = ${fmt(U, 1)} + ${fmt(D, 1)} = ${fmt(U + D, 1)} px = W = ${Wpx} px, with U/W = σ/ρ = 1260/7800 = ${fmt(sigma / rho, 4)}`, close(U + D, Wpx, 1e-9) && close(U / Wpx, 1260 / 7800, 1e-9)],
      [`In newtons: W = ${sciN(Wn)}, U = ${sciN(Un)}, drag = 6πηrv_t = ${sciN(drag)} = W − U = ${sciN(Wn - Un)} (the worked example's 2.685 × 10⁻⁴ N)`, close(drag, Wn - Un, 1e-6 * Wn) && close(Wn - Un, 2.685e-4, 0.005e-4)],
      [`From the timings v_t = 0.400/${fmt(tm, 2)} = ${fmt(vt * 1e2, 3)} × 10⁻² m s⁻¹ and η = 2r²(ρ − σ)g/(9v_t) = ${fmt(eta, 3)} Pa s`, close(vt, 1.495e-2, 0.001e-2) && close(eta, 0.953, 0.002)],
      [`Stokes’ law is allowed: Reynolds number 2rσv_t/η = ${fmt(Re, 3)}, far below 1`, close(Re, 0.04, 0.0005) && Re < 1],
      ['Weight points down; buoyancy and drag point up; the terminal-velocity arrow points down, the way the ball falls (all read from the drawn arrows)', arrows7().W[1] > 0 && arrows7().U[1] < 0 && arrows7().D[1] < 0 && arrows7().V[1] > 0],
      ...layout(s),
    ];
  },
};
/** The drawn force arrows as vectors (y down), from the same numbers the drawing uses. */
const arrows7 = () => { const { rho, sigma, Wpx } = G7; const U = Wpx * (sigma / rho); return { W: [0, Wpx] as P, U: [0, -U] as P, D: [0, -(Wpx - U)] as P, V: [0, 60] as P }; };
const sciN = (n: number) => { const e = Math.floor(Math.log10(Math.abs(n))); return `${(n / 10 ** e).toFixed(3)} × 10^${e} N`; };

/* ===================================================================== */
/* p12-15-01-d8 · resonance tube                                          */
/* ===================================================================== */
/**
 * The 512 Hz readings of the chapter's table: L₁ = 15.6 cm, L₂ = 49.1 cm,
 * λ = 2(L₂ − L₁) = 67.0 cm, end correction e = (L₂ − 3L₁)/2 = 1.15 cm. Drawn
 * to one scale of 5 px a cm in both panels (the bore, 4.0 cm, is 20 px), so
 * the water level, the node and the antinode all stand where the numbers put
 * them; the water in the reservoir stands at the water level in the tube.
 */
const G8 = { xc: 110, r: 10, mouth: 100, pxcm: 5, L1: 15.6, L2: 49.1, f: 512, amp: 7, bottom: 382, rub: 396 };
const lam8 = () => 2 * (G8.L2 - G8.L1);
const e8 = () => (G8.L2 - 3 * G8.L1) / 2;
/** The envelope half-width at a distance d (cm) above the water: a standing wave's displacement amplitude, zero at the closed end. */
const env8 = (d: number) => G8.amp * Math.abs(Math.sin((2 * Math.PI * d) / lam8()));
const dim8 = 146;
const d8: Diagram = {
  id: 'p12-15-01-d8',
  topic: 0,
  name: 'Resonance tube',
  cases: [
    { chip: 'First resonance', n: 1, cap: 'First resonance (512 Hz fork over the mouth of the tube, water surface a length L₁ below the mouth): a displacement node at the water surface and an antinode a distance e above the mouth, a quarter of a wavelength from the node, so L₁ + e = λ/4.' },
    { chip: 'Second resonance', n: 3, cap: 'Second resonance (water surface a length L₂ below the mouth): a node at the water and an antinode the same distance e above the mouth, now three quarters of a wavelength from the node, so L₂ + e = 3λ/4. The two resonances are λ/2 apart.' },
  ],
  draw(c: { n: number }) {
    const { xc, r, mouth, pxcm, L1, L2, amp, bottom, rub } = G8;
    const L = c.n === 1 ? L1 : L2, yw = mouth + L * pxcm;
    const lam = lam8(), e = e8(), yAnti = mouth - e * pxcm;
    const s = new Sketch(W, 438);
    // the glass tube, open at the top, joined by rubber tube to the reservoir
    path(s, [[xc - r, mouth], [xc - r, bottom]], { w: 1.8 });
    path(s, [[xc + r, mouth], [xc + r, bottom]], { w: 1.8 });
    path(s, [[xc, bottom], [xc, rub], [301, rub], [301, yw + 30]], { color: C.slate, w: 3 });
    path(s, [[276, yw - 30], [276, yw + 30], [326, yw + 30], [326, yw - 30]], { w: 1.8 });
    path(s, [[280, yw], [322, yw]], { color: C.slate, w: 1.2, dash: 'dash' });
    // the water surface in the tube, where the closed end is
    path(s, [[xc - r, yw], [xc + r, yw]], { w: 2.4 });
    // the displacement envelope: zero at the water, largest e above the mouth
    const top = ((c.n * lam) / 4) * pxcm;
    const ds = samples(0, top, 160);
    path(s, ds.map((d): P => [xc + env8(d / pxcm), yw - d]), { color: C.mari, w: 2.2 });
    path(s, ds.map((d): P => [xc - env8(d / pxcm), yw - d]), { color: C.mari, w: 2.2 });
    s.dot(xc, yw, 2.8);
    // the tuning fork above the mouth
    path(s, [[xc - 8, 22], [xc - 8, 50], [xc, 56], [xc + 8, 50], [xc + 8, 22]], { w: 1.8 });
    path(s, [[xc, 56], [xc, 66]], { w: 1.8 });
    // L: from the mouth down to the water
    guide(s, [70, mouth], [xc - r - 4, mouth]);
    guide(s, [70, yw], [xc - r - 4, yw]);
    measure(s, [78, mouth], [78, yw]);
    mark(s, 68, (mouth + yw) / 2 + 5, c.n === 1 ? '<i>L</i><sub>1</sub>' : '<i>L</i><sub>2</sub>', { size: 15, anchor: 'end' });
    // λ/4 or 3λ/4: from the water up to the antinode, and e: above the mouth
    guide(s, [xc + r + 4, yAnti], [dim8 + 36, yAnti]);
    guide(s, [xc + r + 4, mouth], [dim8 + 36, mouth]);
    guide(s, [xc + r + 4, yw], [dim8 + 8, yw]);
    measure(s, [dim8, yAnti], [dim8, yw]);
    mark(s, dim8 + 8, (yAnti + yw) / 2 + 5, c.n === 1 ? '<i>λ</i>/4' : '3<i>λ</i>/4', { size: 15, anchor: 'start' });
    arrow(s, [dim8 + 30, yAnti - 14], [dim8 + 30, yAnti - 0.5], { w: 1.4, color: C.slate });
    arrow(s, [dim8 + 30, mouth + 14], [dim8 + 30, mouth + 0.5], { w: 1.4, color: C.slate });
    mark(s, dim8 + 40, mouth - 0.5 + 8, '<i>e</i>', { size: 15, anchor: 'start' });
    s.place([
      { t: 'Tuning fork', p: [xc + 8, 32], at: [[136, 6, 'start'], [140, 4, 'start']] },
      { t: 'Glass tube', p: [xc - r, mouth + 1], at: [[4, 70, 'start'], [4, 72, 'start']] },
      { t: 'Antinode', hi: true, p: [xc + amp, yAnti], at: [[170, 44, 'start'], [170, 52, 'start'], [170, 36, 'start']] },
      { t: 'Node at the water', p: [xc, yw], at: [[134, yw + 20, 'start'], [130, yw + 34, 'start'], [130, yw + 44, 'start']] },
      { t: 'Reservoir', p: [326, yw], at: [[250, yw - 76, 'start'], [244, yw - 80, 'start']] },
      { t: 'Rubber tube', p: [210, rub], at: [[150, rub + 10, 'start'], [120, rub + 12, 'start']] },
    ]);
    return s;
  },
  check(c: { n: number }) {
    const { mouth, pxcm, L1, L2, f, amp } = G8;
    const L = c.n === 1 ? L1 : L2, yw = mouth + L * pxcm;
    const lam = lam8(), e = e8(), yAnti = mouth - e * pxcm;
    const s = d8.draw(c);
    const lamPx = lam * pxcm;
    const nodeAmp = env8(0), tailAmp = env8((c.n * lam) / 4);
    const dTop = yw - yAnti;
    // peaks of the drawn envelope along the tube: count local maxima
    const ds = samples(0, (c.n * lam) / 4, 400).map((d) => env8(d));
    const peaks = ds.filter((v, i) => i > 0 && i < ds.length - 1 && v > ds[i - 1] && v >= ds[i + 1] && v > amp * 0.99).length + (ds[ds.length - 1] > amp * 0.999 ? 1 : 0);
    const v = f * lam * 1e-2;
    const e384 = (65.8 - 3 * 21.1) / 2, lam384 = 2 * (65.8 - 21.1);
    return [
      [`λ = 2(L₂ − L₁) = 2(49.1 − 15.6) = ${fmt(lam, 1)} cm and the end correction e = (L₂ − 3L₁)/2 = ${fmt(e, 2)} cm`, close(lam, 67.0, 1e-9) && close(e, 1.15, 1e-9)],
      [`The air column is L = ${fmt(L, 1)} cm: the water stands ${fmt((yw - mouth) / pxcm, 1)} cm (5 px a cm) below the mouth`, close((yw - mouth) / pxcm, L, 1e-9)],
      [`Node and antinode: the envelope is zero at the water (${fmt(nodeAmp, 2)} px) and largest (${fmt(tailAmp, 2)} px) at the top, ${fmt(dTop / pxcm, 2)} cm above the water, which is ${c.n === 1 ? 'λ/4' : '3λ/4'}`, nodeAmp < 1e-9 && close(tailAmp, amp, 1e-6) && close(dTop, (c.n * lamPx) / 4, 1e-6)],
      [`The antinode is e = ${fmt(e, 2)} cm above the mouth, not at it: L${c.n === 1 ? '₁' : '₂'} + e = ${fmt(L + e, 2)} cm = ${c.n === 1 ? 'λ/4' : '3λ/4'} = ${fmt((c.n * lam) / 4, 2)} cm`, yAnti < mouth && close(L + e, (c.n * lam) / 4, 1e-9)],
      [`The envelope has ${c.n === 1 ? 'one antinode' : 'two antinodes, a node λ/2 above the water'} (counted ${peaks}), the way ${c.n === 1 ? 'a quarter' : 'three quarters'} of a wavelength fits`, peaks === (c.n === 1 ? 1 : 2) && (c.n === 1 || close(env8(lam / 2), 0, 1e-9))],
      [`v = fλ = 512 × ${fmt(lam / 100, 3)} = ${fmt(v, 1)} m s⁻¹ (the table's 343.0); the 384 Hz fork gives λ = ${fmt(lam384, 1)} cm, e = ${fmt(e384, 2)} cm (text 1.25) and v = ${fmt(384 * lam384 / 100, 1)} m s⁻¹`, close(v, 343.0, 0.05) && close(lam384, 89.4, 1e-9) && close(384 * lam384 / 100, 343.3, 0.05) && close(e384, 1.25, 1e-9)],
      ['The reservoir’s water stands at the water level in the tube (connected vessels), and the tube is open at the top, closed at the water', true],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* p12-15-01-d9 · calorimeter and steam heater                            */
/* ===================================================================== */
/**
 * The chapter's table: calorimeter 60.0 g, water 150.0 g, solid 120.0 g,
 * T₁ = 99.0 °C, T₂ = 27.0 °C, T = 37.2 °C. The two thermometer columns are
 * drawn at 1 px a degree, so the heater's reads 99 px and the calorimeter's,
 * before mixing, 27 px.
 */
const G9 = {
  T1: 99.0, T2: 27.0, T: 37.2, pxdeg: 1,
  heater: { out: [212, 56, 306, 196] as Rect, inn: [224, 68, 294, 184] as Rect, lidY: [48, 56] as [number, number], xT: 282, bulbY: 154, xThread: 240 },
  jacket: [24, 208, 156, 326] as Rect, can: [40, 208, 140, 312] as Rect, lid: [38, 200, 114, 208] as Rect, water: 240, xStir: 64, xT: 104, bulbY: 300,
  solid: [229, 118, 251, 142] as Rect,
};
/** The top of a thermometer's column: the column stands T px above the bulb's centre (1 px a degree). */
const colTop9 = (bulbY: number, T: number) => bulbY - T * G9.pxdeg;
const d9: Diagram = {
  id: 'p12-15-01-d9',
  topic: 0,
  name: 'Method of mixtures: calorimeter and steam heater',
  cases: [{ chip: 'Calorimeter set-up', cap: 'The method of mixtures. A copper calorimeter with its stirrer, a thermometer and a lid stands in a felt jacket and holds water at T₂. The metal solid hangs on a thread in the steam heater, a double-walled vessel with a steam outlet and a thermometer, until it reaches T₁. The hot solid is then lifted out and dropped into the water, and the highest steady temperature T is read.' }],
  draw() {
    const s = new Sketch(W, 340);
    const { heater, jacket, can, lid, water, xStir, xT, bulbY, solid, T1, T2 } = G9;
    // the steam heater: outer and inner wall, a cork lid, the thermometer, the solid on its thread
    box(s, heater.out, { w: 1.8 });
    box(s, heater.inn, { w: 1.4 });
    box(s, [heater.out[0] + 6, heater.lidY[0], heater.out[2] - 6, heater.lidY[1]], { w: 1.6 });
    path(s, [[heater.xThread, 26], [heater.xThread, solid[1]]], { w: 1.3 });
    box(s, solid, { color: C.mari, w: 2.4 });
    path(s, [[heater.xT, 34], [heater.xT, heater.bulbY - 4]], { color: C.slate, w: 1.3 });
    ring(s, [heater.xT, heater.bulbY], 4, { w: 1.4 });
    path(s, [[heater.xT, heater.bulbY - 4], [heater.xT, colTop9(heater.bulbY, T1)]], { w: 3 });
    path(s, [[heater.out[2], 90], [326, 90]], { w: 1.8 });
    for (let k = 0; k < 2; k++) path(s, [[326 + 4 * k, 86], [326 + 4 * k, 78 - 4 * k]], { color: C.slate, w: 1.1, free: true });
    // the calorimeter in its felt jacket
    path(s, [[jacket[0], jacket[1]], [jacket[0], jacket[3]], [jacket[2], jacket[3]], [jacket[2], jacket[1]]], { w: 1.8 });
    path(s, [[can[0], can[1]], [can[0], can[3]], [can[2], can[3]], [can[2], can[1]]], { w: 1.8 });
    path(s, [[can[0] + 4, water], [can[2] - 4, water]], { color: C.slate, w: 1.2, dash: 'dash' });
    box(s, lid, { w: 1.6 });
    // the stirrer: a rod through the lid with a knob and a ring
    path(s, [[xStir, 180], [xStir, 296]], { w: 1.5 });
    s.dot(xStir, 178, 2.6);
    path(s, ellipsePts([xStir, 296], 14, 3.5), { w: 1.5 });
    // the thermometer: stem, bulb, a column of the starting temperature
    path(s, [[xT, 172], [xT, bulbY - 4]], { color: C.slate, w: 1.3 });
    ring(s, [xT, bulbY], 4, { w: 1.4 });
    path(s, [[xT, bulbY - 4], [xT, colTop9(bulbY, T2)]], { w: 3 });
    // the solid on its way into the water
    const P0: P = [206, 150], P1: P = [198, 200], P2: P = [130, 206];
    const bez = samples(0, 1, 40).map((t): P => [(1 - t) ** 2 * P0[0] + 2 * t * (1 - t) * P1[0] + t * t * P2[0], (1 - t) ** 2 * P0[1] + 2 * t * (1 - t) * P1[1] + t * t * P2[1]]);
    path(s, bez.slice(0, -4), { color: C.slate, w: 1.8 });
    arrow(s, bez[bez.length - 7], bez[bez.length - 1], { color: C.slate, w: 1.8 });
    // temperatures
    mark(s, heater.xT + 10, 40, '<i>T</i><sub>1</sub>', { size: 15, anchor: 'start' });
    mark(s, xT + 10, 180, '<i>T</i><sub>2</sub>, then <i>T</i>', { size: 14, anchor: 'start' });
    s.place([
      { t: 'Stirrer', p: [xStir, 176], at: [[8, 140, 'start'], [4, 144, 'start']] },
      { t: 'Thermometer', p: [xT, 170], at: [[86, 140, 'start'], [84, 144, 'start']] },
      { t: 'Lid', p: [lid[0] + 4, lid[1]], at: [[4, 170, 'start'], [4, 166, 'start']] },
      { t: 'Water', p: [can[2] - 8, water], at: [[170, 226, 'start'], [170, 232, 'start']] },
      { t: 'Copper calorimeter', p: [can[2], 272], at: [[168, 270, 'start'], [168, 278, 'start']] },
      { t: 'Felt jacket', p: [jacket[2], 312], at: [[168, 302, 'start'], [168, 308, 'start']] },
      { t: 'Steam heater', p: [heater.out[0], 110], at: [[96, 66, 'start'], [96, 72, 'start'], [100, 80, 'start']] },
      { t: 'Metal solid', hi: true, p: [solid[0], 130], at: [[100, 108, 'start'], [104, 114, 'start']] },
      { t: 'Thread', p: [heater.xThread, 36], at: [[150, 12, 'start'], [150, 18, 'start']] },
      { t: 'Steam outlet', p: [322, 90], at: [[234, 206, 'start'], [236, 208, 'start']] },
    ]);
    return s;
  },
  check() {
    const { heater, jacket, can, lid, water, xStir, xT, bulbY, solid, T1, T2, T } = G9;
    const s = d9.draw(d9.cases[0]);
    const mc = 0.06, mw = 0.15, ms = 0.12, cc = 385, cw = 4186;
    const cs = ((mw * cw + mc * cc) * (T - T2)) / (ms * (T1 - T));
    const colHot = heater.bulbY - colTop9(heater.bulbY, T1), colCold = bulbY - colTop9(bulbY, T2);
    // the chapter's second row: copper in the unknown liquid
    const mcu = 0.15, ml = 0.12, Tf = 40.0, T2b = 24.0;
    const cl = (mcu * cc * (T1 - Tf) - mc * cc * (Tf - T2b)) / (ml * (Tf - T2b));
    return [
      [`The heater’s thermometer column stands ${fmt(colHot, 0)} px above its bulb and the calorimeter’s ${fmt(colCold, 0)} px (1 px a degree): T₁ = 99.0 °C stands well above T₂ = 27.0 °C, in the ratio ${fmt(colHot / colCold, 2)} = 99/27`, colHot > colCold && close(T1 / T2, colHot / colCold, 1e-9) && colTop9(heater.bulbY, T1) > 30 && colTop9(bulbY, T2) > 172],
      [`The final temperature lies between them: T₂ = ${T2} < T = ${T} < T₁ = ${T1}`, T2 < T && T < T1],
      [`Heat lost = heat gained: (m_w c_w + m_c c_c)(T − T₂) = ${fmt((mw * cw + mc * cc) * (T - T2), 0)} J = m_s c_s (T₁ − T), so c_s = ${fmt(cs, 0)} J kg⁻¹ K⁻¹ (the text's 895)`, close(cs, 895, 1) && close((mw * cw + mc * cc) * (T - T2), 6640, 1)],
      [`For copper in the liquid: c_ℓ = [m_s c_s(T₁ − T)/(T − T₂) − m_c c_c]/m_ℓ = ${fmt(cl, 0)} J kg⁻¹ K⁻¹ (the text's 1.58 × 10³, from a start 8 K below the 32 °C room and a finish 8 K above it)`, close(cl, 1582, 3) && close(32 - T2b, Tf - 32, 1e-9)],
      ['The solid hangs on a thread from above the heater’s lid, inside the inner wall, away from both walls and the thermometer', solid[0] > heater.inn[0] && solid[2] < heater.inn[2] && solid[3] < heater.inn[3] && solid[2] < heater.xT - 4 && heater.xThread > solid[0] && heater.xThread < solid[2]],
      ['The calorimeter stands inside the jacket (a gap all round), with the water level above the thermometer bulb and the stirrer’s ring, all below the lid', jacket[0] < can[0] && jacket[2] > can[2] && jacket[3] > can[3] && water < bulbY - 4 && water < 296 && lid[3] <= can[1] && xStir > can[0] && xT < can[2]],
      ['The transfer arrow leaves the heater and ends at the open part of the calorimeter, beside the lid, above the water', 130 > lid[2] && 130 < can[2] && 206 < water],
      ...layout(s),
    ];
  },
};

/** Physics Class 12, Chapter 15 (Experimental Skills): the topic 01 drawings, part b. */
export const DIAGRAMS_PHYSICS_12_15B: Diagram[] = [d1, d2, d3, d4, d5, d6, d7, d8, d9];

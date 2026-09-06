#!/usr/bin/env node
/**
 * Render assertions for board payloads.
 *
 *   node scripts/verify-render.mjs <tree.json> [--w 900] [--h 430]
 *
 * WHY THIS EXISTS
 * At ~9,200 precomputed segments nobody can look at every diagram. Schema validation
 * proves a payload is well-formed; it does not prove the result is legible. A payload
 * can pass validate() and still render a curve off-canvas, two labels on top of each
 * other, or nothing at all. These are the failures that reach a student.
 *
 * HOW IT RUNS
 * Widgets render through react-native-svg, so there are no pixels to diff. Use
 * react-test-renderer to render the widget to a JSON tree — every element with its
 * final props — and run these assertions over that. No device, no screenshots, fast
 * enough for the whole corpus in CI.
 *
 *   import TestRenderer from 'react-test-renderer';
 *   const tree = TestRenderer.create(<Component {...props} />).toJSON();
 *   writeFileSync('tree.json', JSON.stringify(tree));
 *
 * Exit 0 = renders acceptably. Exit 1 = at least one ERROR.
 *
 * Assertions 6-8 (font floor, stroke floor, glyph spacing) are the small-screen
 * gate from CLAUDE.md's frame rule. Run this file against a tree rendered at a
 * REAL small board box, not an arbitrary one — this app's classroom is
 * landscape-only, and the smallest real box (iPhone SE, after the board's own
 * gutters) is 495x270, computed in CLAUDE.md's "Board sizes to check against".
 * Assertions 1-5 matter most at the LARGE end (curve off-canvas, degenerate
 * coverage); 6-8 matter most at the SMALL end (a chrome constant that quietly
 * scaled with the frame). Running only at --w 900 --h 430 would never catch
 * assertion 6-8 failures, because most scaling bugs stay inside a safe range at
 * that size and only misbehave once the frame shrinks.
 */
import { readFileSync } from 'node:fs';

const argv = process.argv.slice(2);
const path = argv.find(a => !a.startsWith('--'));
const flag = (n, d) => { const i = argv.indexOf('--' + n); return i < 0 ? d : Number(argv[i + 1]); };
const W = flag('w', 900), H = flag('h', 430);
if (!path) { console.error('usage: verify-render.mjs <tree.json> [--w N] [--h N]'); process.exit(2); }

/* ---------- flatten the react-test-renderer tree ---------- */
function walk(node, out = []) {
  if (!node || typeof node !== 'object') return out;
  if (Array.isArray(node)) { node.forEach(n => walk(n, out)); return out; }
  out.push({ type: node.type, props: node.props || {}, children: node.children });
  (node.children || []).forEach(c => walk(c, out));
  return out;
}

/* ---------- geometry extraction ---------- */
const num = v => (typeof v === 'number' ? v : parseFloat(v));
function pathBounds(d) {
  const nums = String(d).match(/-?\d+\.?\d*/g);
  if (!nums) return null;
  const xs = [], ys = [];
  for (let i = 0; i + 1 < nums.length; i += 2) { xs.push(+nums[i]); ys.push(+nums[i + 1]); }
  if (!xs.length) return null;
  return { x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(...ys), y1: Math.max(...ys) };
}
function boundsOf(el) {
  const p = el.props;
  switch (el.type) {
    case 'RNSVGPath': case 'Path': return p.d ? pathBounds(p.d) : null;
    case 'RNSVGCircle': case 'Circle': {
      const cx = num(p.cx), cy = num(p.cy), r = num(p.r) || 0;
      return isFinite(cx) && isFinite(cy) ? { x0: cx - r, x1: cx + r, y0: cy - r, y1: cy + r } : null;
    }
    case 'RNSVGLine': case 'Line': {
      const a = [num(p.x1), num(p.x2)], b = [num(p.y1), num(p.y2)];
      return a.every(isFinite) && b.every(isFinite)
        ? { x0: Math.min(...a), x1: Math.max(...a), y0: Math.min(...b), y1: Math.max(...b) } : null;
    }
    case 'RNSVGRect': case 'Rect':
    /*
     * An <Image> is geometry. Without this case boundsOf returned null for it,
     * and a figure whose only large element is the art broke three assertions
     * at once:
     *
     *   1  "renders nothing" — the art does not count as drawn;
     *   2  ink coverage computed from the label plates and leaders alone.
     *      Worse than failing: with plates spread across the art the union
     *      bbox approximates the art's, so the figure PASSES FOR THE WRONG
     *      REASON;
     *   3  an art placed off-board was not checked at all.
     *
     * Read exactly as Rect does — x/y/width/height, plain numbers in the tree
     * (verified: react-native-svg 15.12.1 serialises RNSVGImage with those
     * four as top-level numbers, unlike Text's arrays and nested font). This
     * is only correct because the widget draws with preserveAspectRatio="none"
     * over a rect it letterboxed itself; an Image left to letterbox internally
     * would occupy less than its element box and these bounds would over-report.
     *
     * Fixture: test/fixtures/image-off-board.json, which exits 0 without this
     * case and 1 with it. Same commit, per docs/small-screen-rendering-rules.md.
     */
    case 'RNSVGImage': case 'Image': {
      const x = num(p.x), y = num(p.y), w = num(p.width), h = num(p.height);
      return [x, y, w, h].every(isFinite) ? { x0: x, x1: x + w, y0: y, y1: y + h } : null;
    }
    default: return null;
  }
}
const isText = t => t === 'RNSVGText' || t === 'Text' || t === 'SvgText';

/*
 * react-native-svg does NOT serialise text props the way you write them. Verified
 * against react-native-svg 15.12.1 on React 19.1 / RN 0.81:
 *
 *   you write                    the tree contains
 *   x={90} y={100}               x: [90], y: [100]        <- always arrays (extractLengthList)
 *   fontSize={12}                font: { fontSize: 12 }   <- nested, absent at top level
 *   textAnchor="middle"          font: { textAnchor: … }
 *   <Text>Range</Text>           a child RNSVGTSpan with props.content; the
 *                                parent's own content is null
 *
 * Reading p.fontSize / p.textAnchor / p.x-as-a-number finds nothing, so the
 * checker would report zero labels and pass every payload. That is worse than no
 * check at all. These readers accept both the native shape and the plain shape a
 * hand-written fixture uses.
 */
const first = v => (Array.isArray(v) ? v[0] : v);          // x: [90] -> 90
const fontOf = p => (p.font && typeof p.font === 'object' ? p.font : p);

function textContent(el) {
  const own = el.props.content;
  if (typeof own === 'string' && own.length) return own;
  // content lives in the child TSpan(s)
  const parts = [];
  (function dig(n) {
    if (!n || typeof n !== 'object') { if (typeof n === 'string') parts.push(n); return; }
    if (Array.isArray(n)) return n.forEach(dig);
    if (typeof n.props?.content === 'string') parts.push(n.props.content);
    (n.children || []).forEach(dig);
  })(el.children);
  if (parts.length) return parts.join('');
  const kids = el.props.children;
  return typeof kids === 'string' || typeof kids === 'number' ? String(kids) : '';
}

function textBox(el) {
  const p = el.props, f = fontOf(p);
  const x = num(first(p.x)), y = num(first(p.y));
  if (!isFinite(x) || !isFinite(y)) return null;
  const s = textContent(el);
  if (!s) return null;
  const size = num(f.fontSize) || 12;
  /*
   * Monospace-ish estimate; deliberately generous so collisions are under- not
   * over-reported.
   *
   * 0.58 was fitted to Latin and this model is script-blind — it counts
   * JavaScript String.length, i.e. UTF-16 code units. For Devanagari that is
   * wrong in BOTH directions at once: matras have zero advance width (over-
   * counting), and base glyphs at 12pt are wider than the Latin average
   * (under-counting). The errors partly cancel, unpredictably, per string, so
   * no single retuned multiplier is right.
   *
   * Which direction is dangerous is not symmetric. Under-estimating width
   * makes this checker UNDER-report collisions: it passes CI and two labels
   * overlap on a device. Over-estimating fails loudly and costs a shorter
   * term. So Devanagari is measured at 0.75 — a deliberate OVER-estimate, a
   * GUARDRAIL AND NOT A MEASUREMENT. Nobody has measured Anek Devanagari's
   * advance widths at 12pt; do not describe this number as measured and do
   * not tune it. The real fix is a per-glyph advance table.
   *
   * Kept identical to lib/widgets/chrome.ts's CHAR_W / CHAR_W_DEVA, for the
   * reason stated there: if the widget and the checker disagree about width,
   * a widget can lay text out to a width the checker rejects, or worse, pass
   * while overlapping.
   *
   * NO DEVANAGARI SHIPS TODAY, AND THIS BRANCH STAYS ANYWAY. The app has two
   * language modes (lib/preferences.ts): 'hinglish' | 'english', and hinglish
   * is romanised LATIN — "Chalo shuru karte hain". No Devanagari string exists
   * in either repo outside test fixtures, so nothing the product renders can
   * reach the 0.75 branch. It is kept as a guardrail for the day Hindi-medium
   * figure labels are authored in Devanagari, because it costs nothing while
   * unreached and because two independent verifiers hit this exact width bug
   * in one week from opposite directions.
   *
   * Fixture: test/fixtures/deva-labels-collide.json, which exits 0 under the
   * flat 0.58 model and 1 under this one. That ONE fixture is what keeps this
   * branch honest — it proves the guardrail is live rather than dead code that
   * still parses. There are deliberately no per-widget Devanagari fixtures on
   * top of it: they would assert a script the product does not ship. The
   * reachable, and until now untested, case is a HINGLISH caption — Latin, and
   * systematically longer than its English equivalent.
   */
  const charW = /[\u0900-\u097F]/.test(s) ? 0.75 : 0.58;
  const w = s.length * size * charW, h = size * 1.15;
  const anchor = f.textAnchor || 'start';
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  return { x0, x1: x0 + w, y0: y - size * 0.82, y1: y - size * 0.82 + h, s };
}
const overlaps = (a, b) => a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;

/* ---------- assertions ---------- */
const errors = [], warns = [];
const els = walk(JSON.parse(readFileSync(path, 'utf8')));
const drawn = els.map(e => ({ el: e, b: boundsOf(e) })).filter(x => x.b);
const texts = els.filter(e => isText(e.type)).map(textBox).filter(Boolean);

// 1. something was actually drawn
if (drawn.length === 0) errors.push('renders nothing — no path, circle, line or rect with usable geometry');

// 2. ink coverage — catches a degenerate payload that technically draws
if (drawn.length) {
  const x0 = Math.min(...drawn.map(d => d.b.x0)), x1 = Math.max(...drawn.map(d => d.b.x1));
  const y0 = Math.min(...drawn.map(d => d.b.y0)), y1 = Math.max(...drawn.map(d => d.b.y1));
  const cover = ((x1 - x0) * (y1 - y0)) / (W * H);
  if (cover < 0.05) errors.push(`drawn content covers ${(cover * 100).toFixed(1)}% of the board — degenerate`);
  else if (cover < 0.20) warns.push(`drawn content covers only ${(cover * 100).toFixed(1)}% of the board`);
}

// 3. nothing outside the board
for (const { el, b } of drawn) {
  if (b.x0 < -1 || b.y0 < -1 || b.x1 > W + 1 || b.y1 > H + 1) {
    errors.push(`${el.type} out of bounds: [${b.x0.toFixed(0)},${b.y0.toFixed(0)}]-[${b.x1.toFixed(0)},${b.y1.toFixed(0)}] vs ${W}x${H}`);
  }
}
for (const t of texts) {
  if (t.x0 < -1 || t.x1 > W + 1 || t.y0 < -1 || t.y1 > H + 1) {
    errors.push(`label "${t.s}" runs off the board`);
  }
}

// 4. no two labels on top of each other — the most common silent legibility bug
for (let i = 0; i < texts.length; i++)
  for (let j = i + 1; j < texts.length; j++)
    if (overlaps(texts[i], texts[j]))
      errors.push(`labels collide: "${texts[i].s}" and "${texts[j].s}"`);

// 5. no NaN leaked into geometry.
// Walks nested values too: fill is {type,payload}, transform becomes matrix[],
// Text x/y are arrays — a NaN can hide one level down.
function scan(v, path, out) {
  if (typeof v === 'number') { if (!isFinite(v)) out.push(`${path} is ${v}`); return; }
  if (typeof v === 'string') { const m = v.match(/NaN|Infinity/); if (m) out.push(`${path} contains ${m[0]}`); return; }
  if (Array.isArray(v)) return v.forEach((x, i) => scan(x, `${path}[${i}]`, out));
  if (v && typeof v === 'object') return Object.entries(v).forEach(([k, x]) => scan(x, `${path}.${k}`, out));
}
for (const e of els)
  for (const [k, v] of Object.entries(e.props)) {
    if (k === 'children') continue;
    scan(v, `${e.type}.${k}`, errors);
  }

// 6. every font-size reaching the tree is at least 11 — CLAUDE.md's frame rule.
// Below 11 a label stops being comfortably legible on a handset; the failure
// mode this catches is a font size computed as a FRACTION of view width/height
// (a chrome constant that scales) rather than held at a fixed device point
// value. Reads through the same font()/first() shape assertion 4 already
// trusts, since react-native-svg nests fontSize under `font: {}`.
const FONT_FLOOR = 11;
for (const t of els.filter(e => isText(e.type))) {
  const size = num(fontOf(t.props).fontSize);
  if (isFinite(size) && size < FONT_FLOOR) {
    const label = textContent(t) || '(unlabelled)';
    errors.push(`"${label}" renders at ${size}px — below the ${FONT_FLOOR}px floor`);
  }
}

// 7. stroke weights are at least 1.2 — same rule, for lines rather than type.
// Only elements that actually declare a stroke are checked; a purely filled
// shape has no "stroke weight" to have gotten wrong.
const STROKE_FLOOR = 1.2;
for (const e of els) {
  if (e.props.stroke == null) continue;
  const width = num(e.props.strokeWidth);
  if (isFinite(width) && width < STROKE_FLOOR) {
    errors.push(`${e.type} strokeWidth=${width} — below the ${STROKE_FLOOR} floor`);
  }
}

// 8. no two glyphs of the SAME radius sit closer than 2*r + 4.
// "Glyph" is not a distinct element type react-native-svg exposes, so this
// compares same-radius circles only — a repeated marker (charges, nodes) is
// exactly the density case docs/CLAUDE.md's frame rule describes, and a
// widget's one-off markers (an origin dot, an apex marker) naturally have
// no other circle at the same radius to collide with, so they never trip
// this by construction.
const GLYPH_GAP = 4;
const circles = els
  .filter(e => e.type === 'RNSVGCircle' || e.type === 'Circle')
  .map(e => ({ cx: num(e.props.cx), cy: num(e.props.cy), r: num(e.props.r) }))
  .filter(c => [c.cx, c.cy, c.r].every(isFinite) && c.r > 0);
for (let i = 0; i < circles.length; i++) {
  for (let j = i + 1; j < circles.length; j++) {
    const a = circles[i], b = circles[j];
    if (Math.abs(a.r - b.r) > 0.5) continue; // not the same glyph kind
    const dist = Math.hypot(a.cx - b.cx, a.cy - b.cy);
    const minDist = 2 * a.r + GLYPH_GAP;
    if (dist < minDist) {
      errors.push(
        `two r=${a.r} glyphs are ${dist.toFixed(1)}px apart — below the 2r+${GLYPH_GAP}=${minDist.toFixed(1)} floor`
      );
    }
  }
}

/* ---------- report ---------- */
console.log(`\n  ${path}  ·  board ${W}x${H}  ·  ${els.length} elements, ${drawn.length} drawn, ${texts.length} labels\n`);
warns.forEach(w => console.log(`  warn   ${w}`));
if (warns.length) console.log('');
errors.forEach(e => console.log(`  ERROR  ${e}`));
if (errors.length) { console.log(`\n  ${errors.length} error(s) — this payload must not ship.\n`); process.exit(1); }
console.log('  OK — renders acceptably.\n');

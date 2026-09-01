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
    case 'RNSVGRect': case 'Rect': {
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
  // Monospace-ish estimate; deliberately generous so collisions are under- not over-reported.
  const w = s.length * size * 0.58, h = size * 1.15;
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

/* ---------- report ---------- */
console.log(`\n  ${path}  ·  board ${W}x${H}  ·  ${els.length} elements, ${drawn.length} drawn, ${texts.length} labels\n`);
warns.forEach(w => console.log(`  warn   ${w}`));
if (warns.length) console.log('');
errors.forEach(e => console.log(`  ERROR  ${e}`));
if (errors.length) { console.log(`\n  ${errors.length} error(s) — this payload must not ship.\n`); process.exit(1); }
console.log('  OK — renders acceptably.\n');

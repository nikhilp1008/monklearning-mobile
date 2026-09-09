#!/usr/bin/env node
/**
 * A raw SVG document -> the react-test-renderer tree scripts/verify-render.mjs reads.
 *
 *   node scripts/svg-to-tree.mjs <file.svg> --w 343 --h 236 > tree.json
 *
 * WHY THIS EXISTS
 * Tier-3 SVGs had no way through the gate. verify-render.mjs measures a
 * react-native-svg component tree, which is what a WIDGET produces; an authored
 * SVG is a document, and nothing turned one into the other. So the assertions
 * every widget must pass — font floor, stroke floor, out of bounds, label
 * collisions, ink coverage — were never applied to the ~149 figures we draw by
 * hand, which is the half of the corpus with no validate() in front of it.
 *
 * THE FIT IS THE WHOLE POINT.
 * A widget is handed a width and height and lays out inside them. An SVG is
 * handed a viewBox and SCALES to whatever box it lands in — chrome included.
 * That difference is exactly what docs/small-screen-rendering-rules.md warns
 * about, and it means a document's font sizes are meaningless until you know
 * the board. So this emits DEVICE coordinates: every value is multiplied by
 * the same contain-fit scale react-native-svg applies for the default
 * preserveAspectRatio, and centred the same way. `font-size="12"` in a 360-wide
 * viewBox is 11.4 px on a 343 board and 20.8 px on a 900 one, and only the
 * first of those is anywhere near the floor.
 *
 * WHAT IT DELIBERATELY DOES NOT DO
 * Resolve `use`, `defs`, gradients, clip paths, transforms on groups, or CSS.
 * An authored figure that needs any of those is past what this can honestly
 * measure, and it must FAIL rather than be measured wrong — see the refusal in
 * `parse`. A gate that silently ignores the elements it cannot read is the
 * label reader that found zero labels and reported a pass.
 */
import { readFileSync } from 'node:fs';
import sax from 'sax';

const argv = process.argv.slice(2);
const file = argv.find(a => !a.startsWith('--'));
const flag = (n, d) => { const i = argv.indexOf('--' + n); return i < 0 ? d : Number(argv[i + 1]); };
const W = flag('w', 900), H = flag('h', 430);
if (!file) { console.error('usage: svg-to-tree.mjs <file.svg> [--w N] [--h N]'); process.exit(2); }

const src = readFileSync(file, 'utf8');

/* ---------- 1. STRICT XML PARSE, BEFORE ANYTHING ELSE ---------- */
/*
 * A REAL parser, not a regex, and it runs first.
 *
 * This gate once passed a document at all three frames that cairosvg then
 * refused to open: its comment named a slug containing a double hyphen, which
 * XML forbids inside a comment, and the converter stripped comments with a
 * regex that did not care. Every slug in drona-illustrations-v1.1 has that
 * shape, so it is the mistake a tier-3 author is most likely to make.
 *
 * A checker looser than the consumer green-lights what ships broken. The
 * consumer here is a real XML parser — react-native-svg's, cairosvg's, any
 * browser's — so the check has to be one too.
 *
 * sax in STRICT mode, and it is a declared devDependency rather than a
 * transitive one: this assertion disappearing because some other package
 * dropped its dependency would be silent. @xmldom/xmldom was the other
 * candidate and is not usable here — measured, it ACCEPTS the malformed
 * comment.
 *
 * Failing fixture: test/fixtures/svg/malformed-comment.svg
 */
function parseStrict(xml, path) {
  const errors = [];
  const parser = sax.parser(true, { xmlns: false, position: true });
  parser.onerror = (e) => { errors.push(e.message.split('\n')[0]); parser.resume(); };
  try { parser.write(xml).close(); } catch (e) { errors.push(String(e.message).split('\n')[0]); }
  if (errors.length) {
    console.error(`svg-to-tree: ${path} is not well-formed XML — ${errors[0]}`);
    console.error('  Real parsers refuse this file. Nothing downstream is measured.');
    process.exit(2);
  }
}
parseStrict(src, file);

/* ---------- 2. constructs this converter cannot follow ---------- */
/*
 * Unsupported constructs are a REFUSAL, not a silent skip. Each would move or
 * hide geometry this file cannot follow, and measuring the rest would report a
 * confident number about a picture that is not the one on screen.
 */
for (const bad of ['<use', '<defs', '<clipPath', '<linearGradient', '<radialGradient',
                   '<style', '<symbol', '<image', 'transform=']) {
  if (src.includes(bad)) {
    console.error(`svg-to-tree: ${file} contains ${bad} — this converter cannot follow it, ` +
                  `and measuring the rest would be a confident number about the wrong picture.`);
    process.exit(2);
  }
}

const vb = /viewBox\s*=\s*"([^"]+)"/.exec(src);
if (!vb) { console.error('svg-to-tree: no viewBox — the fit is undefined without one'); process.exit(2); }
const [vx, vy, vw, vh] = vb[1].trim().split(/[\s,]+/).map(Number);

// react-native-svg's default preserveAspectRatio is xMidYMid meet: contain-fit,
// centred. Same maths, so the numbers below are what the device draws.
const k = Math.min(W / vw, H / vh);
const dx = (W - vw * k) / 2 - vx * k;
const dy = (H - vh * k) / 2 - vy * k;
const sx = x => +(x * k + dx).toFixed(3);
const sy = y => +(y * k + dy).toFixed(3);
const sk = v => +(v * k).toFixed(3);

/* ---------- a very small XML reader ---------- */
/* Enough for the subset above and nothing more. Attributes are flat strings;
 * `<g>` contributes only inherited presentation attributes, which is why
 * transforms are refused rather than composed. */
function parse(xml) {
  const out = [];
  const stack = [{}];                                     // inherited attrs
  const tag = /<(\/?)([a-zA-Z][\w:-]*)((?:\s+[\w:-]+\s*=\s*"[^"]*")*)\s*(\/?)>|<!--[\s\S]*?-->/g;
  let m, textFor = null;
  while ((m = tag.exec(xml))) {
    if (m[0].startsWith('<!--')) continue;
    const [, close, name, attrStr, selfClose] = m;
    const attrs = {};
    for (const a of (attrStr || '').matchAll(/([\w:-]+)\s*=\s*"([^"]*)"/g)) attrs[a[1]] = a[2];

    if (close) {
      if (name === 'text' && textFor) {
        const end = m.index;
        textFor.text = xml.slice(textFor._from, end).replace(/<[^>]*>/g, '').trim();
        out.push(textFor); textFor = null;
      } else if (name === 'g' || name === 'svg') stack.pop();
      continue;
    }
    const inherited = { ...stack[stack.length - 1], ...attrs };
    if (name === 'g' || name === 'svg') { if (!selfClose) stack.push(inherited); continue; }
    if (name === 'text') { textFor = { name, attrs: inherited, _from: tag.lastIndex }; continue; }
    out.push({ name, attrs: inherited });
  }
  return out;
}

const numAttr = (a, k, d = undefined) => (a[k] === undefined ? d : parseFloat(a[k]));

const els = [];
for (const node of parse(src)) {
  const a = node.attrs;
  const stroke = numAttr(a, 'stroke-width');
  const common = stroke === undefined ? {} : { strokeWidth: sk(stroke) };

  if (node.name === 'path') {
    // Scale every coordinate pair in the `d`. Only M/L/C/Q/Z survive the
    // refusal list above, and in all of them the numbers are coordinate pairs,
    // which is the same assumption verify-render's pathBounds makes.
    let i = 0;
    const d = a.d.replace(/-?\d+\.?\d*/g, n => {
      const v = parseFloat(n);
      return String((i++ % 2 === 0 ? sx(v) : sy(v)));
    });
    els.push({ type: 'RNSVGPath', props: { d, ...common }, children: null });
  } else if (node.name === 'line') {
    els.push({ type: 'RNSVGLine', props: {
      x1: sx(numAttr(a, 'x1')), y1: sy(numAttr(a, 'y1')),
      x2: sx(numAttr(a, 'x2')), y2: sy(numAttr(a, 'y2')), ...common }, children: null });
  } else if (node.name === 'circle') {
    els.push({ type: 'RNSVGCircle', props: {
      cx: sx(numAttr(a, 'cx')), cy: sy(numAttr(a, 'cy')), r: sk(numAttr(a, 'r')), ...common },
      children: null });
  } else if (node.name === 'rect') {
    els.push({ type: 'RNSVGRect', props: {
      x: sx(numAttr(a, 'x')), y: sy(numAttr(a, 'y')),
      width: sk(numAttr(a, 'width')), height: sk(numAttr(a, 'height')), ...common }, children: null });
  } else if (node.name === 'text') {
    // The NATIVE shape, not the shape you write: x/y are arrays and fontSize
    // and textAnchor live under font. verify-render reads both, but emitting
    // the native one is what makes this tree comparable with a widget's.
    els.push({ type: 'RNSVGText', props: {
      x: [sx(numAttr(a, 'x'))], y: [sy(numAttr(a, 'y'))],
      font: {
        fontSize: sk(numAttr(a, 'font-size', 12)),
        fontFamily: a['font-family'] || undefined,
        textAnchor: a['text-anchor'] || 'start',
      },
    }, children: [{ type: 'RNSVGTSpan', props: { content: node.text }, children: null }] });
  }
}

if (!els.length) { console.error('svg-to-tree: nothing convertible found'); process.exit(2); }
process.stdout.write(JSON.stringify(
  { type: 'RNSVGSvgView', props: { width: W, height: H }, children: els }, null, 2) + '\n');

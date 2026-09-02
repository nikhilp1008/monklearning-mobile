// Structural check for authored textbook chapters:
//
//   node scripts/validate-chapters.mjs
//
// What tsc cannot catch. A chapter can satisfy every type and still be wrong
// for a reader: a topic that does not end on its checkpoint, a second hook, an
// MCQ whose correct option carries a nudge, a diagram whose chips and frames
// have drifted out of alignment, a `kind` the reader does not implement (which
// renders as nothing, silently).
//
// The kind list is READ from the reader rather than copied. It fell behind
// once, when three kinds were added to components/textbook/diagrams.tsx and
// not here, and this file then reported every new figure as rendering nothing.
// A duplicated list drifts; a derived one cannot.
import { readFileSync, readdirSync } from 'node:fs';

const ALLOWED_BLOCKS = new Set(['hook','p','think','def','defgrid','formula','proc','deriv','diagram','ex','mcq','practice','mistakes','protip','snapshot']);
const ALLOWED_KINDS = (() => {
  const src = readFileSync('components/textbook/diagrams.tsx', 'utf8');
  const block = src.match(/export const DIAGRAM_KINDS[^=]*=\s*\[([\s\S]*?)\]/);
  if (!block) {
    console.error('validate-chapters: could not read DIAGRAM_KINDS from the reader.');
    process.exit(2);
  }
  const kinds = [...block[1].matchAll(/'([a-z0-9]+)'/g)].map((m) => m[1]);
  if (!kinds.length) {
    console.error('validate-chapters: DIAGRAM_KINDS parsed as empty.');
    process.exit(2);
  }
  return new Set(kinds);
})();
// Every key a frame may carry. A misspelled key -- `arrow` for `arrows`, or
// `"arrow": "true"` as a string -- passes tsc, because every field is
// optional, and then renders nothing at all. This is the check that actually
// stops a silent hole.
const FRAME_KEYS = new Set([
  'x','y','curves','points','segments','labels','bands','areas','polygons',
  'intervals','angle','show','piTicks','tree','pascal','axes3d',
  'axes','axisX','axisY','ticksX','ticksY','arrows','arcs','polys','marks',
  'bodies','aspect','flow','levels','circuit','optics',
]);
// Keys that actually put ink on the page. A frame with only a window and an
// aspect draws an empty white box under a caption describing a diagram.
const DRAWABLE = FRAME_KEYS.difference
  ? FRAME_KEYS.difference(new Set(['x','y','axes','axisX','axisY','ticksX','ticksY','aspect','piTicks','show']))
  : new Set([...FRAME_KEYS].filter(k => !['x','y','axes','axisX','axisY','ticksX','ticksY','aspect','piTicks','show'].includes(k)));
// The six bespoke set-theory figures draw themselves from `selected` alone.
const BESPOKE = new Set(['numsys','lattice','venn2','venn3','family','grid']);
// Kinds whose contents live in their own coordinate space, not the plot window.
const OWN_SPACE = new Set(['flow','levels','circuit','optics','tree','pascal','axes3d','unitcircle']);

/** Every [x, y] a frame places in plot coordinates, for the bounds check. */
function frameCoords(fr) {
  const out = [];
  const push = (x, y) => { if (typeof x === 'number' && typeof y === 'number') out.push([x, y]); };
  fr.points?.forEach(p => push(p.x, p.y));
  fr.labels?.forEach(p => push(p.x, p.y));
  fr.marks?.forEach(p => push(p.x, p.y));
  fr.arcs?.forEach(a => push(a.at?.[0], a.at?.[1]));
  fr.segments?.forEach(g => { push(g.from?.[0], g.from?.[1]); push(g.to?.[0], g.to?.[1]); });
  fr.arrows?.forEach(a => { push(a.from?.[0], a.from?.[1]); push(a.to?.[0], a.to?.[1]); });
  fr.bodies?.forEach(b => { push(b.at?.[0], b.at?.[1]); if (b.to) push(b.to[0], b.to[1]); });
  fr.polys?.forEach(pl => pl.pts?.forEach(q => push(q[0], q[1])));
  fr.polygons?.forEach(pl => pl.points?.forEach(q => push(q[0], q[1])));
  fr.curves?.forEach(c => { if (c.c === 'pts') c.pts?.forEach(q => push(q[0], q[1])); });
  return out;
}

const TAG = /<\/?([a-z]+)[^>]*>/gi;
const ALLOWED_TAGS = new Set(['b','i','sup','sub','br']);

const files = readdirSync('content/textbooks').filter(f => f.endsWith('.ts'));
let bad = 0;

for (const f of files) {
  const src = readFileSync(`content/textbooks/${f}`, 'utf8');
  const start = src.indexOf('{', src.indexOf(': Chapter ='));
  let depth = 0, end = start;
  for (let i = start; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') { depth--; if (!depth) { end = i + 1; break; } }
  }
  let ch;
  try { ch = JSON.parse(src.slice(start, end)); }
  catch (e) { console.log(`${f}: NOT PLAIN JSON (${e.message.slice(0,60)}) - skipped`); continue; }

  const problems = [];
  const topics = ch.topics ?? [];
  if (topics.length < 4 || topics.length > 6) problems.push(`${topics.length} topics (want 4-6)`);

  let hooks = 0, blocks = 0;
  const byType = {};
  topics.forEach((t, ti) => {
    const bs = t.blocks ?? [];
    blocks += bs.length;
    if (!bs.length) problems.push(`topic ${ti+1} empty`);
    const last = bs[bs.length - 1];
    if (!last || last.t !== 'snapshot') problems.push(`topic ${ti+1} does not end in snapshot`);
    if (bs.filter(b => b.t === 'snapshot').length !== 1) problems.push(`topic ${ti+1} snapshot count != 1`);
    bs.forEach((b, bi) => {
      byType[b.t] = (byType[b.t] ?? 0) + 1;
      if (!ALLOWED_BLOCKS.has(b.t)) problems.push(`topic ${ti+1} block ${bi+1}: unknown type "${b.t}"`);
      if (b.t === 'hook') { hooks++; if (ti !== 0) problems.push(`hook on topic ${ti+1}, must be topic 1`); }
      if (b.t === 'diagram') {
        if (!ALLOWED_KINDS.has(b.kind)) problems.push(`topic ${ti+1}: diagram kind "${b.kind}" renders nothing`);
        const par = !BESPOKE.has(b.kind);
        if (par && !(b.frames?.length)) problems.push(`topic ${ti+1}: ${b.kind} has no frames`);
        b.frames?.forEach((fr, fi) => {
          const where = `topic ${ti+1} ${b.kind} frame ${fi+1}`;
          for (const k of Object.keys(fr)) {
            if (!FRAME_KEYS.has(k)) problems.push(`${where}: unknown key "${k}" draws nothing`);
          }
          if (!Object.keys(fr).some(k => DRAWABLE.has(k))) {
            problems.push(`${where}: nothing to draw`);
          }
          // A kind that needs its own payload must carry it.
          if (OWN_SPACE.has(b.kind) && ['flow','levels','circuit','optics'].includes(b.kind) && !fr[b.kind]) {
            problems.push(`${where}: kind is "${b.kind}" but the frame has no ${b.kind} block`);
          }
          fr.arrows?.forEach((a, ai) => {
            if (a.from?.[0] === a.to?.[0] && a.from?.[1] === a.to?.[1]) {
              problems.push(`${where}: arrow ${ai+1} has zero length, so it renders as a dot`);
            }
          });
          // Coordinates outside the window are drawn off the canvas and are
          // simply invisible. This is the defect that hid the z-axis label in
          // every axes3d figure ever authored.
          if (!OWN_SPACE.has(b.kind)) {
            const [x0, x1] = fr.x ?? [-Math.PI, Math.PI];
            const [y0, y1] = fr.y ?? [-1.6, 1.6];
            const mx = (x1 - x0) * 0.04;
            const my = (y1 - y0) * 0.04;
            const out = frameCoords(fr).filter(
              ([x, y]) => x < x0 - mx || x > x1 + mx || y < y0 - my || y > y1 + my
            );
            if (out.length) {
              problems.push(`${where}: ${out.length} point(s) outside the window, e.g. [${out[0]}]`);
            }
          }
        });
        if (b.chips && b.captions && b.chips.length !== b.captions.length) problems.push(`topic ${ti+1}: ${b.chips.length} chips vs ${b.captions.length} captions`);
        if (b.chips && b.frames && b.chips.length !== b.frames.length) problems.push(`topic ${ti+1}: ${b.chips.length} chips vs ${b.frames.length} frames`);
      }
      if (b.t === 'mcq') {
        if (b.opts?.length !== 4) problems.push(`topic ${ti+1}: mcq has ${b.opts?.length} options`);
        b.opts?.forEach((o, oi) => {
          if (oi === b.correct && o.nudge != null) problems.push(`topic ${ti+1}: correct option carries a nudge`);
          if (oi !== b.correct && !o.nudge) problems.push(`topic ${ti+1}: wrong option ${oi+1} has no nudge`);
        });
      }
    });
  });
  if (hooks !== 1) problems.push(`${hooks} hooks (want exactly 1)`);

  const json = JSON.stringify(ch);
  if (json.includes('—')) problems.push('contains em dash');
  // U+2713 CHECK MARK and U+2717 BALLOT X are typographic marks a maths
  // chapter legitimately uses for right and wrong; they are not emoji, and
  // the first pass flagged the finished Sets chapter for them.
  const emojiRe = /[\u{2600}-\u{2712}\u{2718}-\u{27BF}\u{1F300}-\u{1FAFF}]/u;
  if (emojiRe.test(json)) problems.push('contains emoji');
  // The markup renderer parses five tags and decodes nothing else, so an
  // HTML entity reaches the student as its literal characters: `&gt;` shows
  // up as four glyphs in the middle of an inequality. Two chapter authors
  // caught this by hand in a shipped file; the gate is cheaper.
  const entities = [...new Set(json.match(/&(?:gt|lt|amp|nbsp|quot|#\d+);/g) ?? [])];
  if (entities.length) problems.push(`HTML entities render literally: ${entities.join(', ')}`);

  // Glyphs the app's faces cannot draw. Both physics sources are full of
  // them: 95,000 Mathematical Alphanumeric characters and 2,600 combining
  // arrows between the two books, and seven math-italic ones already leaked
  // into finished maths chapters. They reach the student as blank boxes.
  const mathItalic = [...new Set(json.match(/[\u{1D400}-\u{1D7FF}]/gu) ?? [])];
  if (mathItalic.length) {
    problems.push(`math-italic glyphs render as tofu: ${mathItalic.slice(0, 6).join(' ')}`);
  }
  if (/\u20D7/.test(json)) {
    problems.push('U+20D7 combining arrow: write vectors as plain italic letters');
  }
  // Physics-specific text faults, none of which exist in maths.
  const noSpace = [...new Set(
    (json.match(/\d(?:m\/s|kg|ms|Hz|Pa|eV|nm|cm|km|mol)\b/g) ?? [])
  )];
  if (noSpace.length) {
    problems.push(`missing space between number and unit: ${noSpace.slice(0, 4).join(', ')}`);
  }
  // `^` is not markup. The renderer draws it literally, so x^2 reaches the
  // student as three characters instead of a power.
  // Only a bare digit: `r^(1/n)` and `2^(5-r)` are deliberate, because <sup>
  // has no solidus and cannot mark up a fractional or parenthesised exponent.
  // A single digit always has a superscript glyph, so `x^2` is just unmarked.
  const caret = [...new Set(json.match(/[A-Za-z0-9)\]]\^\d(?![\d(/])/g) ?? [])];
  if (caret.length) {
    problems.push(`"^" before a digit should be <sup>: ${caret.slice(0, 4).join(', ')}`);
  }
  // Only wrong next to a number: elsewhere U+2218 is the composition
  // operator and f \u2218 g is correct, which the first draft flagged.
  if (/\\d\\s*\\u2218/.test(json)) problems.push('U+2218 after a number; ° (U+00B0) is meant');

  // Every single-letter symbol in a formula should be glossed in its legend.
  // Mechanical, total coverage, and it catches the commonest real defect.
  ch.topics?.forEach((t, ti) => {
    t.blocks?.forEach((b) => {
      if (b.t !== 'formula' || !b.main) return;
      const legend = (b.legend ?? []).join(' ') + ' ' + (b.note ?? '');
      const bare = b.main.replace(/<[^>]*>/g, '');
      const syms = [...new Set(bare.match(/(?<![A-Za-z])[A-Za-z](?![A-Za-z])/g) ?? [])]
        .filter((c) => !'aeiou'.includes(c))
        // Vertices and points are named in the prose, not the legend.
        .filter((c) => !'ABCOPQXYZ'.includes(c))
        .filter((c) => !legend.includes(c));
      if (syms.length > 3) {
        problems.push(`topic ${ti+1} formula "${b.kicker?.slice(0,28)}": unglossed symbols ${syms.slice(0,5).join(' ')}`);
      }
    });
  });

  let m; const badTags = new Set();
  while ((m = TAG.exec(json))) if (!ALLOWED_TAGS.has(m[1].toLowerCase())) badTags.add(m[1]);
  if (badTags.size) problems.push(`disallowed tags: ${[...badTags].join(', ')}`);

  const order = Object.entries(byType).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`${k} ${v}`).join(' · ');
  console.log(`\n${f}  ${topics.length} topics · ${blocks} blocks`);
  console.log(`  ${order}`);
  if (problems.length) { bad++; problems.forEach(p => console.log(`  ✗ ${p}`)); }
  else console.log('  ✓ structurally clean');
}
process.exit(bad ? 1 : 0);

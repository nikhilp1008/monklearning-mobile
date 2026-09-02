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
        const par = ['plot','numberline','unitcircle','tree','pascal','axes3d'].includes(b.kind);
        if (par && !(b.frames?.length)) problems.push(`topic ${ti+1}: ${b.kind} has no frames`);
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

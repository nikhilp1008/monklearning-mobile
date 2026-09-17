/**
 * BREAKING THE TEXTBOOK'S PROSE INTO PARAGRAPHS A PHONE CAN READ.
 *
 * WHAT IS WRONG, MEASURED. Across the 55 authored chapters there are 1,141
 * prose blocks. The median is 518 characters, which at this reader's measure —
 * about 41 characters a line — is THIRTEEN LINES, or 43% of a phone screen, in
 * one unbroken run. The 90th percentile is 902 characters, 22 lines, three
 * quarters of a screen. The longest is 1,702: forty-two lines, more than a
 * screenful without a single break. 79% of them are over 400 characters.
 *
 * A reading app's paragraph is three to five lines. Ours is thirteen, and that
 * is the entire reason the page reads as an essay rather than as something to
 * study from. It is also why the text-size control makes it WORSE rather than
 * better: at Large the same block is simply taller.
 *
 * WHY THIS IS DONE AT RENDER AND NOT IN THE CONTENT. The durable fix is a
 * length rule in the authoring brief, a validator check, and 1,141 paragraphs
 * rewritten by whoever wrote them. That is a real body of work and it fixes
 * nothing that is on a student's phone today. Splitting at the boundaries the
 * prose already has costs nothing, applies to all 55 chapters at once, is
 * reversible, and cannot invent or lose a word — the joined output is always
 * exactly the input.
 *
 * IT ONLY EVER SPLITS WHERE THE AUTHOR ALREADY PUT A FULL STOP. A break is
 * moved in, never made: every chunk starts at a sentence the author ended. So
 * the worst this can do is separate two sentences that wanted to sit together,
 * which on a thirteen-line block is a trade worth making every time.
 *
 * WHAT IT REFUSES TO TOUCH:
 *
 *   A single long sentence. If one sentence runs past the target it is emitted
 *   whole, because a break inside a sentence is a reading error, not a
 *   paragraph.
 *
 *   Anything inside `$…$`. Maths contains full stops — decimals, and the
 *   authored `\\text{...}` runs — and a split inside a formula would render two
 *   halves of a broken expression.
 *
 *   Abbreviations. "e.g.", "i.e.", "Fig. 2", "approx." and initials all end in
 *   a full stop and none of them end a sentence.
 */

/** Where a chunk wants to end. ~6 lines at the reader's own measure. */
const TARGET = 250;
/**
 * Past this, close the chunk at the next boundary whatever its size — the point
 * of the exercise is that nothing runs long.
 */
const HARD = 420;
/** Below this a chunk is not worth standing alone, so it joins the next. */
const MIN = 90;

/** Ends in a full stop but does not end a sentence. */
const ABBREVIATIONS = [
  'e.g.',
  'i.e.',
  'etc.',
  'viz.',
  'cf.',
  'approx.',
  'fig.',
  'eq.',
  'no.',
  'vs.',
  'mr.',
  'mrs.',
  'dr.',
  'st.',
];

/**
 * True when the text ending at `end` (exclusive) is a real sentence end.
 *
 * `text` here is the block with its tags still in it, which is fine: a tag
 * cannot contain a full stop in this corpus, and keeping the markup means the
 * offsets returned are offsets into the string that actually gets rendered.
 */
function endsSentence(text: string, end: number): boolean {
  const before = text.slice(0, end);
  // A decimal point: digit, dot, digit. "3.5 m/s" is not two sentences.
  if (/\d$/.test(before) && /^\s*\d/.test(text.slice(end))) return false;
  const lower = before.toLowerCase();
  if (ABBREVIATIONS.some((a) => lower.endsWith(a))) return false;
  // A single capital before the stop is an initial — "P. Kumar".
  if (/(?:^|\s)[A-Z]\.$/.test(before)) return false;
  return true;
}

/**
 * The block's sentences, in order, with their trailing space kept on the
 * sentence that precedes the gap — so joining the result returns the original
 * string exactly.
 */
function sentences(html: string): string[] {
  const out: string[] = [];
  let start = 0;
  let inMath = false;

  for (let i = 0; i < html.length; i++) {
    const ch = html[i];
    if (ch === '$') {
      inMath = !inMath;
      continue;
    }
    if (inMath) continue;
    if (ch !== '.' && ch !== '?' && ch !== '!') continue;

    // Run past a closing tag or quote that belongs to this sentence.
    let j = i + 1;
    while (j < html.length && /[)"'”’\]]/.test(html[j])) j++;
    while (j < html.length && html[j] === '<') {
      const close = html.indexOf('>', j);
      if (close === -1) break;
      j = close + 1;
    }
    // A sentence break needs whitespace after it.
    if (j >= html.length || !/\s/.test(html[j])) continue;
    if (ch === '.' && !endsSentence(html, i + 1)) continue;

    // Take the whitespace with the sentence that ends here.
    let k = j;
    while (k < html.length && /\s/.test(html[k])) k++;
    out.push(html.slice(start, k));
    start = k;
    i = k - 1;
  }

  if (start < html.length) out.push(html.slice(start));
  return out.filter((s) => s.length > 0);
}

/**
 * One authored block as the paragraphs it should have been.
 *
 * Returns the input unchanged in a single-element array whenever there is
 * nothing worth doing, so the caller never has to special-case a short block.
 */
export function splitProse(html: string): string[] {
  const text = html ?? '';
  if (text.length <= HARD) return [text];

  const parts = sentences(text);
  if (parts.length < 2) return [text];

  const chunks: string[] = [];
  let current = '';

  for (const part of parts) {
    const next = current + part;
    // Close BEFORE adding, once what we have is already long enough — the
    // alternative overshoots by a whole sentence on every chunk.
    if (current.length >= TARGET || (current.length >= MIN && next.length > HARD)) {
      chunks.push(current);
      current = part;
      continue;
    }
    current = next;
  }
  if (current) {
    // A last chunk too short to stand goes back onto the one before it, or the
    // page ends on a stray line.
    if (chunks.length > 0 && current.trim().length < MIN) {
      chunks[chunks.length - 1] += current;
    } else {
      chunks.push(current);
    }
  }

  // The joined result must be the input, to the character. If it is not, the
  // sentence walker met something it did not understand and the honest thing
  // is the original block rather than a silently mangled one.
  return chunks.join('') === text ? chunks : [text];
}

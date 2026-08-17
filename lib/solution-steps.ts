import { latexToText } from '@/lib/latex-text';

export type SolutionLine = { kind: 'text' | 'math'; text: string };
/** Named to avoid colliding with lib/doubts.ts's `SolutionStep`, which is the
 *  API's raw `{n, text}` shape rather than this rendered one. */
export type ParsedStep = { title: string; lines: SolutionLine[] };

/** "Step 3:" / "Step 3." / "3." at the head of a step — the rail already
 *  numbers each step, so repeating it in the copy is noise. */
const STEP_PREFIX = /^\s*(?:step\s*)?\d+\s*[:.)-]\s*/i;

/** Roughly two lines of the 19px title at phone width. Past this a "heading"
 *  stops looking like one. */
const MAX_TITLE_CHARS = 64;

function splitSentences(prose: string): string[] {
  return prose
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * Turns one backend step string into the design's shape: a bold title, then
 * prose and maths on separate lines.
 *
 * The 6B design models a step as `{ title, lines: [['text'|'math', …]] }`, but
 * the API returns each step as a single string — sometimes carrying `$…$`
 * segments, sometimes bare equations. This walks the string in order so maths
 * keeps its position relative to the prose around it, rather than being
 * hoisted to the end.
 */
/** A clause that is nothing but one maths segment — optionally with a trailing
 *  full stop. This is the whole test for "own line" treatment: the design's
 *  rule is that maths is never inline in a sentence, but the solver routinely
 *  emits inline symbols mid-sentence ("so $Q$ is another subset of $A$").
 *  Promoting those would shatter the sentence into fragments, which is exactly
 *  what it looked like before this guard existed. */
const WHOLE_LINE_MATH = /^\s*(?:\$\$?[^$]+\$\$?|\\\([^)]*\\\)|\\\[[^\]]*\\\])\s*[.:]?\s*$/;

export function parseSolutionStep(raw: string): ParsedStep {
  const source = (raw ?? '').replace(STEP_PREFIX, '').trim();
  if (!source) return { title: '', lines: [] };

  // Break into candidate lines first — explicit newlines, then sentences — so
  // "is this whole line maths?" is a question that can actually be asked.
  const candidates = source
    .split('\n')
    .flatMap((block) => splitSentences(block.trim()))
    .map((c) => c.trim())
    .filter(Boolean);

  const lines: SolutionLine[] = candidates.map((candidate) => {
    // Only an explicitly-delimited, whole-line segment gets the wash. Guessing
    // at undelimited text was worse than not trying: "Let $|A| = n$" contains a
    // relational operator and would have been torn out of its sentence.
    if (WHOLE_LINE_MATH.test(candidate)) {
      return { kind: 'math', text: latexToText(candidate).replace(/[.:]$/, '') };
    }
    // Inline maths stays inline, converted to Unicode with the prose around it.
    return { kind: 'text', text: latexToText(candidate) };
  });

  // A heading only when the opening sentence is genuinely short enough to read
  // as one. The design pairs a brief bold title with the detail beneath it, but
  // the solver writes one full sentence per step — promoting a long one gave
  // four lines of bold above a single line of explanation, which inverts the
  // hierarchy and reads worse than no heading at all. Long openers stay prose.
  let title = '';
  if (lines[0]?.kind === 'text') {
    const sentences = splitSentences(lines[0].text);
    const first = sentences[0]?.replace(/[.:]$/, '') ?? '';
    if (first && first.length <= MAX_TITLE_CHARS) {
      title = first;
      const remainder = sentences.slice(1).join(' ');
      if (remainder) lines[0] = { kind: 'text', text: remainder };
      else lines.shift();
    }
  }

  return { title, lines };
}

/**
 * Builds the rendered steps from whatever the API gave us.
 *
 * `steps` is the structured `{n, text}` list when the solver produced one, but
 * it's documented as not guaranteed — `explanation` is the always-present
 * concatenated working. Falling back to it means a solved doubt still shows its
 * working rather than an empty rail.
 */
export function parseSolutionSteps(
  steps: { n: number; text: string }[] | null | undefined,
  explanation?: string | null
): ParsedStep[] {
  if (steps?.length) {
    return steps
      .slice()
      .sort((a, b) => a.n - b.n)
      .map((s) => parseSolutionStep(s.text))
      .filter((s) => s.title || s.lines.length > 0);
  }

  if (explanation?.trim()) {
    // Split on blank lines first — the concatenated working usually separates
    // its moves that way. A single block becomes one step rather than nothing.
    const blocks = explanation
      .split(/\n\s*\n/)
      .map((b) => b.trim())
      .filter(Boolean);
    return (blocks.length ? blocks : [explanation])
      .map(parseSolutionStep)
      .filter((s) => s.title || s.lines.length > 0);
  }

  return [];
}

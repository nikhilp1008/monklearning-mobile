import { latexToText } from '@/lib/latex-text';

export type SolutionLine = { kind: 'text' | 'math'; text: string };
/** Named to avoid colliding with lib/doubts.ts's `SolutionStep`, which is the
 *  API's raw `{n, text}` shape rather than this rendered one. */
export type ParsedStep = { title: string; lines: SolutionLine[] };

/** "Step 3:" / "Step 3." / "3." at the head of a step — the rail already
 *  numbers each step, so repeating it in the copy is noise. */
const STEP_PREFIX = /^\s*(?:step\s*)?\d+\s*[:.)-]\s*/i;

/** A clause that reads as an equation rather than a sentence: has a relational
 *  operator and little else. Used only for undelimited content, where the
 *  backend gave us no `$…$` to go on. */
const LOOKS_LIKE_EQUATION = /^[^a-z]*(?:[A-Za-zΑ-Ωα-ω0-9_^{}()[\]./*+\-−×·÷√∫∑πΔλμθ°'"\s]|\\[a-zA-Z]+)*[=≈≤≥<>≠∴⟹→]/;

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
export function parseSolutionStep(raw: string): ParsedStep {
  const source = (raw ?? '').replace(STEP_PREFIX, '').trim();
  if (!source) return { title: '', lines: [] };

  // Pass 1 — split on explicit maths delimiters, which are unambiguous.
  const chunks: SolutionLine[] = [];
  const delimited = /\$\$?[^$]+\$\$?|\\\([^)]*\\\)|\\\[[^\]]*\\\]/g;
  let cursor = 0;
  let match: RegExpExecArray | null;
  while ((match = delimited.exec(source))) {
    const before = source.slice(cursor, match.index).trim();
    if (before) chunks.push({ kind: 'text', text: before });
    chunks.push({ kind: 'math', text: latexToText(match[0]) });
    cursor = match.index + match[0].length;
  }
  const rest = source.slice(cursor).trim();
  if (rest) chunks.push({ kind: 'text', text: rest });

  // Pass 2 — inside plain prose, a line that is really an equation still gets
  // the maths treatment. Newline-separated content is the reliable signal;
  // splitting mid-sentence on "=" would wreck ordinary prose.
  const lines: SolutionLine[] = [];
  for (const chunk of chunks) {
    if (chunk.kind === 'math') {
      lines.push(chunk);
      continue;
    }
    for (const piece of chunk.text.split('\n').map((p) => p.trim()).filter(Boolean)) {
      lines.push({
        kind: LOOKS_LIKE_EQUATION.test(piece) ? 'math' : 'text',
        text: latexToText(piece),
      });
    }
  }

  // The first sentence of the opening prose becomes the title, so each step
  // has the heading the design leads with. A step that opens on maths keeps
  // its maths and simply has no title.
  let title = '';
  if (lines[0]?.kind === 'text') {
    const sentences = splitSentences(lines[0].text);
    if (sentences.length > 0) {
      title = sentences[0].replace(/[.:]$/, '');
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

import { latexToText } from '@/lib/latex-text';
import type { ParsedStep, SolutionLine } from '@/lib/solution-steps';

/**
 * WORD BY WORD, WITHOUT BREAKING THE MATHS — for the follow-up board, which
 * writes its answer out while the teacher speaks it instead of appearing
 * already finished.
 *
 * The reveal counts words over the PARSED steps, not the raw strings. Parsing
 * decides which opening sentence becomes a bold title, and it decides that by
 * looking at what comes after it; parsing a half-revealed string would set a
 * line as body text and then flip it to a heading a moment later, which reads
 * as the board twitching. Parse the whole answer once, reveal into its shape.
 *
 * A `$…$` segment is one word however many spaces it holds: cutting inside
 * one leaves an unclosed `$` and the renderer prints the source. A line that
 * is nothing but maths arrives whole, as one word.
 */

/** Whitespace-separated chunks, re-joined while a `$` is still open. */
export function mathAwareWords(raw: string): string[] {
  const out: string[] = [];
  let open = '';
  for (const chunk of raw.split(/\s+/).filter(Boolean)) {
    open = open ? `${open} ${chunk}` : chunk;
    if (dollars(open) % 2 === 0) {
      out.push(open);
      open = '';
    }
  }
  if (open) out.push(open);
  return out;
}

function dollars(s: string): number {
  let n = 0;
  for (let i = 0; i < s.length; i++) if (s[i] === '$' && s[i - 1] !== '\\') n++;
  return n;
}

function lineWords(line: SolutionLine): number {
  return line.kind === 'math' ? 1 : mathAwareWords(line.raw).length;
}

function titleWords(step: ParsedStep): number {
  return step.title ? mathAwareWords(step.titleRaw ?? step.title).length : 0;
}

export function countWords(steps: ParsedStep[]): number {
  return steps.reduce((sum, s) => sum + titleWords(s) + s.lines.reduce((a, l) => a + lineWords(l), 0), 0);
}

/** The first `budget` words of `steps`, in the same shape. Steps and lines the
 *  budget has not reached are left out entirely, so nothing below the newest
 *  word takes up space before it is written. */
export function revealSteps(steps: ParsedStep[], budget: number): ParsedStep[] {
  const out: ParsedStep[] = [];
  let left = Math.max(0, Math.floor(budget));
  for (const step of steps) {
    if (left <= 0) break;
    const next: ParsedStep = { title: '', lines: [] };
    const tw = titleWords(step);
    if (tw) {
      if (left >= tw) {
        next.title = step.title;
        if (step.titleRaw) next.titleRaw = step.titleRaw;
      } else {
        const raw = mathAwareWords(step.titleRaw ?? step.title).slice(0, left).join(' ');
        next.title = step.titleRaw ? latexToText(raw) : raw;
        if (step.titleRaw) next.titleRaw = raw;
      }
      left -= Math.min(left, tw);
    }
    for (const line of step.lines) {
      if (left <= 0) break;
      const lw = lineWords(line);
      if (left >= lw) {
        next.lines.push(line);
      } else {
        const raw = mathAwareWords(line.raw).slice(0, left).join(' ');
        next.lines.push({ kind: line.kind, raw, text: latexToText(raw) });
      }
      left -= Math.min(left, lw);
    }
    out.push(next);
  }
  return out;
}

/* ------------------------------------------------------------------------ *
 * LETTER BY LETTER — what the board actually uses.
 *
 * Whole words at a time read as a stutter: at a speaking pace a word lands
 * every third of a second or so, and a long one ("photoemission") arrives in
 * one block. Letters arrive many times a second, so the writing reads as a
 * continuous hand rather than a sequence of stamps.
 *
 * What may never be cut is anything the renderer has to parse: a `$…$` span,
 * a word with a LaTeX command or a script in it. Those are ATOMS — they appear
 * whole the moment the writing reaches them, and then cost their visible
 * length, so the hand pauses over a formula for about as long as it would
 * take to write it out, instead of racing past it.
 * ------------------------------------------------------------------------ */

type Atom = { raw: string; cost: number; whole: boolean };

const MARKUP = /[\\$^_{}]/;

/** A line of raw text as atoms: plain letters one by one, markup whole.
 *  `$…$` spans are found FIRST — before splitting on spaces — because a
 *  formula has spaces inside it ("$c = f\lambda$"), and splitting on them
 *  first cut it in half and flashed a bare "$" on the board. */
function atomsOf(raw: string): Atom[] {
  const out: Atom[] = [];
  const whole = (piece: string) =>
    out.push({ raw: piece, cost: Math.max(1, latexToText(piece).length), whole: true });
  for (const chunk of raw.split(/(\$[^$]*\$)/)) {
    if (!chunk) continue;
    if (/^\$[^$]*\$$/.test(chunk)) {
      whole(chunk);
      continue;
    }
    for (const part of chunk.split(/(\s+)/)) {
      if (!part) continue;
      if (/^\s+$/.test(part)) out.push({ raw: part, cost: 1, whole: true });
      else if (MARKUP.test(part)) whole(part);
      else for (const ch of Array.from(part)) out.push({ raw: ch, cost: 1, whole: false });
    }
  }
  return out;
}

function costOf(raw: string): number {
  return atomsOf(raw).reduce((s, a) => s + a.cost, 0);
}

/** `raw` cut to `budget`: atoms are taken while the budget reaches them, and
 *  a whole atom is taken as soon as the budget reaches its start. */
function cut(raw: string, budget: number): { raw: string; used: number } {
  let used = 0;
  let text = '';
  for (const atom of atomsOf(raw)) {
    if (used >= budget) break;
    text += atom.raw;
    used += atom.cost;
  }
  return { raw: text, used: Math.min(used, Math.max(budget, 0)) };
}

/** A line set on its own (an equation) is one atom: it appears whole. */
function lineCost(line: SolutionLine): number {
  return line.kind === 'math' ? Math.max(1, line.text.length) : costOf(line.raw);
}

export function countChars(steps: ParsedStep[]): number {
  return steps.reduce(
    (sum, s) =>
      sum + (s.title ? costOf(s.titleRaw ?? s.title) : 0) + s.lines.reduce((a, l) => a + lineCost(l), 0),
    0
  );
}

/** The first `budget` letters of `steps`, in the same shape. */
export function revealChars(steps: ParsedStep[], budget: number): ParsedStep[] {
  const out: ParsedStep[] = [];
  let left = Math.max(0, budget);
  for (const step of steps) {
    if (left <= 0) break;
    const next: ParsedStep = { title: '', lines: [] };
    if (step.title) {
      const src = step.titleRaw ?? step.title;
      const total = costOf(src);
      if (left >= total) {
        next.title = step.title;
        if (step.titleRaw) next.titleRaw = step.titleRaw;
        left -= total;
      } else {
        const part = cut(src, left);
        next.title = step.titleRaw ? latexToText(part.raw) : part.raw;
        if (step.titleRaw) next.titleRaw = part.raw;
        left = 0;
      }
    }
    for (const line of step.lines) {
      if (left <= 0) break;
      const total = lineCost(line);
      if (line.kind === 'math' || left >= total) {
        next.lines.push(line);
        left -= total;
      } else {
        const part = cut(line.raw, left);
        next.lines.push({ kind: line.kind, raw: part.raw, text: latexToText(part.raw) });
        left = 0;
      }
    }
    out.push(next);
  }
  return out;
}

/**
 * STEP BY STEP, NOT A PARAGRAPH.
 *
 * A teacher writes a derivation one step under the other and an explanation
 * one sentence at a time. Plans store some of these as one long line —
 * `τ = r (F sin θ) = (r sin θ) F = r⊥ F`, or a three-sentence note — and the
 * board wrote them as a single block. Here one board event becomes the rows a
 * teacher would write, each revealed after the one before:
 *
 *   formula with two or more top-level " = ":   τ = r (F sin θ)
 *                                                 = (r sin θ) F
 *                                                 = r⊥ F
 *   text / note with two or more sentences:      one sentence per row
 *
 * Headings, figures and anything short stay one row.
 */
import type { BoardEvent } from '@/lib/drona-voice-client';

export type StepEvent = BoardEvent & { step?: 'first' | 'cont' };

/** Top-level " = " splits (not inside brackets). */
function splitEquals(s: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let last = 0;
  for (let i = 0; i < s.length; i += 1) {
    const ch = s[i];
    if (ch === '(' || ch === '[' || ch === '{') depth += 1;
    else if (ch === ')' || ch === ']' || ch === '}') depth = Math.max(0, depth - 1);
    else if (ch === '=' && depth === 0 && s[i - 1] === ' ' && s[i + 1] === ' ') {
      parts.push(s.slice(last, i).trim());
      last = i + 1;
    }
  }
  parts.push(s.slice(last).trim());
  return parts.filter(Boolean);
}

/** Candidate sentence ends: a full stop, ! or ? and a space before a capital, digit or bracket. */
const SENTENCE_BREAK = /[.!?]\s+(?=[A-Z0-9(])/g;
/**
 * A full stop that does NOT end a sentence: an abbreviation, a list number
 * ("1."), a label ("Question 1.", "Postulate 2.") or an initial ("G."). When in
 * doubt it does not split: two sentences on one row is the old board, a row
 * reading "Postulate 1." is a broken one.
 */
const NOT_AN_END = /(?:\b(?:e\.g|i\.e|etc|vs|viz|cf|approx|Fig|fig|Figs|Eq|eq|Eqs|No|no|Ex|Ch|Sec|Vol|Mr|Mrs|Dr|St)|^\d{1,2}|^[A-Za-z]+\s+\d{1,2}|\b[A-Z])\.$/;

function splitSentences(text: string): string[] {
  const out: string[] = [];
  let last = 0;
  let depth = 0;
  let scanned = 0;
  for (const m of text.matchAll(SENTENCE_BREAK)) {
    const end = m.index! + 1; // just after the punctuation
    for (; scanned < end; scanned += 1) {
      const ch = text[scanned];
      if (ch === '(' || ch === '[') depth += 1;
      else if (ch === ')' || ch === ']') depth = Math.max(0, depth - 1);
    }
    const piece = text.slice(last, end);
    // Never inside brackets ("(e.g. Genus, Family)"), never after an
    // abbreviation or a bare list number ("1. Gene flow").
    if (depth > 0 || NOT_AN_END.test(piece.trim())) continue;
    out.push(piece.trim());
    last = m.index! + m[0].length;
  }
  out.push(text.slice(last).trim());
  return out.filter(Boolean);
}

export function formulaSteps(text: string): string[] | null {
  const parts = splitEquals(text);
  if (parts.length < 3) return null; // a single equation stays whole
  return [`${parts[0]} = ${parts[1]}`, ...parts.slice(2).map((p) => `= ${p}`)];
}

export function sentenceSteps(text: string): string[] | null {
  if (text.length < 90) return null;
  const parts = splitSentences(text);
  return parts.length >= 2 ? parts : null;
}

/** The rows one event is written as. A single-row result is the event itself. */
export function toSteps(event: BoardEvent): StepEvent[] {
  const text = event.text ?? '';
  if (!text || event.latex || event.svg || event.payload || event.illustration_slug) return [event];
  let parts: string[] | null = null;
  if (event.type === 'formula') parts = formulaSteps(text);
  else if (event.type === 'text' || event.type === 'note') parts = sentenceSteps(text);
  if (!parts) return [event];
  return parts.map((p, i) => ({
    ...event,
    text: p,
    ...(event.type === 'formula' ? { step: i === 0 ? 'first' : 'cont' } : {}),
  }));
}

/** Splits one write budget across rows by their words, in order. */
export function paceSteps(
  rows: StepEvent[],
  write: { delayMs: number; ms: number } | undefined
): { delayMs: number; ms: number }[] {
  const words = rows.map((r) => Math.max(1, (r.text ?? '').split(/\s+/).filter(Boolean).length));
  const total = words.reduce((a, b) => a + b, 0);
  // No budget (no sentence length to pace to): a short beat between rows.
  if (!write) return rows.map((_, i) => ({ delayMs: i * 700, ms: 0 }));
  let before = 0;
  return words.map((w) => {
    const delayMs = Math.round(write.delayMs + (write.ms * before) / total);
    before += w;
    return { delayMs, ms: Math.round((write.ms * w) / total) };
  });
}

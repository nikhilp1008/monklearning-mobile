/**
 * The last Ask follow-up exchange on each thing a student can ask about.
 *
 * A report made straight after a follow-up is usually ABOUT that follow-up —
 * "it told me the wrong thing just now" — and the flag that sends it is rarely
 * the bar's own (practice and the textbook keep theirs in the header). So the
 * bar leaves the exchange here, keyed by what it was about, and whichever flag
 * opens the report sheet picks it up. Nothing is stored on the device; an
 * exchange older than a few minutes is no longer "just now".
 */

import { teacherNameNow } from '@/lib/preferences';

const FRESH_MS = 10 * 60 * 1000;
const MAX_CHARS = 600;

type Exchange = { question: string; answer: string; at: number };

const byTarget = new Map<string, Exchange>();

export function rememberFollowUp(target: string | null | undefined, question: string, answer: string): void {
  if (!target) return;
  byTarget.set(target, {
    question: question.slice(0, MAX_CHARS),
    answer: answer.slice(0, MAX_CHARS),
    at: Date.now(),
  });
}

/** The exchange as report context, or nothing when there was none lately. */
export function lastFollowUpContext(
  target: string | null | undefined
): { followup_question: string; followup_answer: string; teacher: string } | null {
  if (!target) return null;
  const e = byTarget.get(target);
  if (!e || Date.now() - e.at > FRESH_MS) return null;
  // Who answered, by the name the student knows them by — admin reads
  // "Veda answered", not a brand name the student never heard in that turn.
  return { followup_question: e.question, followup_answer: e.answer, teacher: teacherNameNow() };
}

import { getCachedAnswers } from '@/lib/onboarding-answers';
import { getCachedProgress, getProgress, type ProgressChapter } from '@/lib/progress';

/**
 * Headroom-weighted chapter sampling for Practice's "Weak areas first" mode.
 *
 * "Weak" here is the same currency Progress runs on: headroom = exam
 * weightage x (100 - mastery), computed server-side per chapter. Progress's
 * "Practise this" card is the argmax of that list; weak mode samples across
 * the whole of it, proportionally, so high-value weak chapters dominate the
 * session without it ever locking onto one. Strong chapters are excluded
 * outright rather than merely down-weighted — "Weak areas first" must never
 * serve a chapter the Progress page calls Strong.
 */

/** One background refresh at a time — the payload is ~130KB and every caller
 *  that finds an empty cache would otherwise fire its own. */
let refreshInFlight = false;

/** What a self-reported hard chapter is worth before any real result exists:
 *  between "not started" and "flagged" in the server's question weights. */
const SELF_REPORTED_HARD_BOOST = 2;

const norm = (v: string) =>
  v.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/**
 * Headroom with the student's own "this is hard" prior folded in.
 *
 * A PRIOR, not evidence: it applies only while the chapter has no measured
 * result at all (`not_started`). The first real answer moves the chapter to a
 * measured state and the boost falls away, so a student who is actually fine
 * there is not kept on it. Only a typed name that equals a real chapter name
 * counts; anything else the student typed matches nothing.
 */
export function effectiveHeadroom(ch: ProgressChapter, hardChapters: string[]): number {
  if (ch.state !== 'not_started' || !hardChapters.length) return ch.headroom;
  const name = norm(ch.name);
  return hardChapters.some((h) => norm(h) === name)
    ? ch.headroom * SELF_REPORTED_HARD_BOOST
    : ch.headroom;
}

/**
 * Pick a chapter for the next weak-mode question, or null for "no filter".
 *
 * Null is a real answer, not a failure: with no Progress payload yet, no
 * mastery at all, or every chapter strong, an unfiltered subject question IS
 * the right question. `exclude` lets a retry skip a chapter whose question
 * pool just came back empty.
 */
export function sampleWeakChapterId(subject: string, exclude?: string[]): string | null {
  const data = getCachedProgress();
  if (!data) {
    // Practice opened before Progress ever loaded. Fetch the payload for the
    // NEXT question and serve this one unfiltered — a silent mixed question
    // beats a spinner that exists only to aim the filter.
    if (!refreshInFlight) {
      refreshInFlight = true;
      getProgress()
        .catch(() => {})
        .finally(() => {
          refreshInFlight = false;
        });
    }
    return null;
  }

  const subjectRow = data.subjects.find((s) => s.subject === subject);
  if (!subjectRow) return null;

  const candidates = subjectRow.chapters.filter(
    (ch) =>
      ch.curated &&
      ch.state !== 'strong' &&
      ch.headroom > 0 &&
      !exclude?.includes(ch.chapter_id)
  );
  if (candidates.length === 0) return null;

  const hard = getCachedAnswers()?.hardChapters ?? [];
  const weight = (ch: ProgressChapter) => effectiveHeadroom(ch, hard);
  let ticket = Math.random() * candidates.reduce((sum, ch) => sum + weight(ch), 0);
  for (const ch of candidates) {
    ticket -= weight(ch);
    if (ticket <= 0) return ch.chapter_id;
  }
  return candidates[candidates.length - 1].chapter_id;
}

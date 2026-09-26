import { getCachedProgress, getProgress } from '@/lib/progress';

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

  let ticket = Math.random() * candidates.reduce((sum, ch) => sum + ch.headroom, 0);
  for (const ch of candidates) {
    ticket -= ch.headroom;
    if (ticket <= 0) return ch.chapter_id;
  }
  return candidates[candidates.length - 1].chapter_id;
}

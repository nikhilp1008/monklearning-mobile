import type { ProgressChapter, ProgressSummary } from '@/lib/progress';

/**
 * "Your teacher noticed" — one honest observation, or nothing.
 *
 * See MOMENTS.md §2. The test every line here has to pass is that a student
 * could open Progress and check it. That rules out encouragement ("you're
 * doing great!"), predictions ("you're on track for a 99 percentile"), and
 * causal advice we cannot support ("a class will fix this faster"). What is
 * left is the one thing no competitor can say, because it needs concept-level
 * mastery: what is actually true about this student's syllabus right now.
 *
 * Templated, not generated. MOMENTS.md's open question was whether the tutor
 * model should write these; templates won for v1 because they are free,
 * offline, instant, and cannot drift into a claim we did not intend. The cost
 * is a fixed vocabulary, which is the right trade while the copy is still
 * being learned from.
 *
 * **Silence is a valid answer.** `observe()` returns null whenever nothing
 * true and useful can be said, and the card then does not render at all.
 */

export type ObservationAction =
  // A discriminated union rather than a route string: typed routes are on, so
  // the screen maps these to literal `router.push` calls and keeps its types.
  | { kind: 'progress' }
  | { kind: 'drona' }
  | { kind: 'textbooks' }
  | { kind: 'class'; chapterId: string; chapterTitle: string };

export interface Observation {
  /**
   * Encodes the *fact*, not the template — `flags:2`, `weakest:<chapter id>`.
   * That is what makes the card change when the student's situation changes
   * and hold still when it doesn't, which is the behaviour MOMENTS.md asks
   * for ("not on a timer").
   */
  id: string;
  /**
   * One line. Not a paragraph — this sits on Home, where the student is
   * glancing, and a second explanatory sentence turned the card into another
   * section of the page instead of a remark.
   */
  text: string;
  /** A short trailing tag, never a sentence. e.g. "+7 more". */
  meta?: string;
  action?: ObservationAction;
}

/** The app says "Maths"; the API says "mathematics". */
const SUBJECT_LABEL: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Maths',
  biology: 'Biology',
};

const label = (subject: string) => SUBJECT_LABEL[subject] ?? subject;

/**
 * Enough attempts that "nothing has gone Strong yet" is a real signal rather
 * than an impatient one. Below this a student is simply early.
 */
const PRACTISED_ENOUGH = 25;

function allChapters(data: ProgressSummary): ProgressChapter[] {
  return data.subjects.flatMap((s) => s.chapters);
}

function strongCount(data: ProgressSummary): number {
  return allChapters(data).filter((c) => c.state === 'strong').length;
}

/**
 * The single most useful true thing right now.
 *
 * Order is by leverage, not by drama. A flag is a hard cap on the score, so it
 * outranks everything; an untouched subject is a bigger hole than a weak
 * chapter; and a plain count of what is Strong is the fallback, because on a
 * good week there is genuinely nothing to warn about and saying so is better
 * than inventing a worry.
 */
export function observe(data: ProgressSummary, classesTaken: number): Observation | null {
  const { ledger, monk_score } = data;
  const touched = ledger.questions_attempted > 0 || ledger.doubts_solved > 0 || classesTaken > 0;

  // Day one. No data means no diagnosis — an invitation is the honest form,
  // and it is the one thing on a blank Home that is addressed to the student.
  if (!touched) {
    return {
      id: 'first_run',
      text: 'Take one class and I’ll tell you exactly where you stand.',
      action: { kind: 'drona' },
    };
  }

  // A flag is mechanical: it holds the score below its ceiling until the
  // concept is re-proven. This is the rare case where the app can promise a
  // specific outcome, because the scoring rule guarantees it.
  if (monk_score.flagged_concepts > 0) {
    const n = monk_score.flagged_concepts;
    return {
      id: `flags:${n}`,
      text:
        n === 1
          ? 'One flagged concept is capping your score.'
          : `${n} flagged concepts are capping your score.`,
      action: { kind: 'progress' },
    };
  }

  // Volume without proof. Stated as the fact and nothing more — why it is
  // happening is a guess, and a guess dressed as a diagnosis is worse than
  // silence.
  if (ledger.questions_attempted >= PRACTISED_ENOUGH && ledger.concepts_mastered === 0) {
    return {
      id: `unproven:${ledger.questions_attempted}`,
      text: `${ledger.questions_attempted} questions in, nothing Strong yet.`,
      action: { kind: 'progress' },
    };
  }

  // A subject nobody has opened, while another is genuinely moving. The
  // comparison is the observation — either half alone is just a number.
  const untouched = data.subjects.find((s) =>
    s.chapters.every((c) => c.state === 'not_started')
  );
  const strong = strongCount(data);
  if (untouched && strong > 0) {
    return {
      id: `untouched:${untouched.subject}`,
      text: `${label(untouched.subject)} hasn’t started yet.`,
      meta: `${strong} Strong elsewhere`,
      action: { kind: 'textbooks' },
    };
  }

  // The chapters actually in trouble.
  //
  // Two traps live here, both found on real data. The API marks a chapter
  // `needs_revision` as soon as a question in it goes wrong, so mastery is
  // frequently 0.0 — and "0% of it is holding" reads like a broken string
  // rather than a fact. And when several chapters sit at the same lowest
  // mastery, naming one of them "the weakest" is a superlative the data does
  // not support. So the claim is only as strong as the evidence: a true
  // superlative when one chapter is uniquely lowest, a plain naming otherwise.
  const revising = allChapters(data)
    .filter((c) => c.state === 'needs_revision')
    .sort((a, b) => a.mastery - b.mastery);
  if (revising.length > 0) {
    const lowest = revising[0];
    const uniquelyLowest = revising.length === 1 || revising[1].mastery > lowest.mastery;
    const others = revising.length - 1;
    const held = Math.round(lowest.mastery * 100);
    return {
      id: `revise:${lowest.chapter_id}:${revising.length}`,
      // The superlative is only claimed when the data supports it: uniquely
      // lowest, and above zero. Otherwise the chapter is simply named.
      text:
        uniquelyLowest && held > 0
          ? `${lowest.name} is your weakest chapter.`
          : `${lowest.name} needs revising.`,
      meta: held > 0 ? `${held}% holding` : others > 0 ? `+${others} more` : undefined,
      action: {
        kind: 'class',
        chapterId: lowest.chapter_id,
        chapterTitle: lowest.name,
      },
    };
  }

  if (strong > 0) {
    return {
      id: `strong:${strong}`,
      text:
        strong === 1 ? 'One chapter is Strong.' : `${strong} chapters are Strong.`,
      action: { kind: 'progress' },
    };
  }

  // Started, but too early for any of the above to mean anything. Nothing
  // honest left to say, so the card doesn't render.
  return null;
}

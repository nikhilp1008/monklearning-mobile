import type { SolutionQuestion } from '@/components/solution-screen';
import { DoubtOption, DoubtStatus, Remedy, SolutionStep } from '@/lib/doubts';
import { latexToText } from '@/lib/latex-text';
import { parseSolutionSteps } from '@/lib/solution-steps';

/**
 * One place where a solved question becomes something the solution screen can
 * render.
 *
 * Snap and the Library's doubt detail were each doing this themselves, which
 * is how they drifted: both dropped the MCQ options and the key idea, and both
 * treated `unsure` as a refusal and hid the working the API had deliberately
 * kept. The rules for reading a solution belong in one place, the same way
 * `SolutionSteps` is one place for drawing one.
 */

export const REMEDY_COPY: Record<Remedy, string> = {
  retake: 'Try snapping it again — steadier light or a closer frame usually fixes this.',
  not_photo: 'This looks like it needs a figure or diagram Drona can’t read from text alone.',
  our_side: 'This one was on our end, not your photo. Give it another try in a moment.',
};

/** The fields a freshly snapped question and a saved doubt have in common. */
export type SolvedSource = {
  id?: string;
  question_text: string | null;
  stem?: string | null;
  options?: DoubtOption[] | null;
  option_labels?: string[] | null;
  answer: string | null;
  steps?: SolutionStep[] | null;
  explanation?: string | null;
  key_idea: string | null;
  status: DoubtStatus;
  failure_reason: string | null;
  legibility_note?: string | null;
  chapter?: string | null;
  concept?: string | null;
  remedy?: Remedy;
};

export type SolutionView = SolutionQuestion & {
  /** The saved doubt's id — what report-sheet needs to send anything at all. */
  doubtId: string | null;
  chapter: string | null;
};

export function solutionView(
  source: SolvedSource,
  id: string,
  fallbackText?: string | null
): SolutionView {
  const text = source.stem ?? source.question_text ?? fallbackText ?? null;
  // `unsure` keeps its working: the API withheld the answer, not the steps.
  const unsure = source.status === 'unsure';
  const refused = source.status !== 'solved' && !unsure;

  return {
    id,
    doubtId: source.id ?? null,
    chapter: source.chapter ?? source.concept ?? null,
    // Everything the student reads goes through latexToText, so no screen ever
    // prints `$(\mathrm{P} \cup \mathrm{Q})$` at them.
    text: latexToText(text ?? 'Could not read this question.'),
    options:
      source.options?.map((o) => ({ label: o.label, text: latexToText(o.text) })) ?? null,
    // The label the answer landed on, so the right choice can be marked. Never
    // set on an `unsure` question — that is the whole point of it.
    answerLabels: unsure ? null : (source.option_labels ?? null),
    steps: parseSolutionSteps(source.steps, source.explanation),
    answer: source.answer ? latexToText(source.answer) : null,
    keyIdea: source.key_idea ? latexToText(source.key_idea) : null,
    caution: unsure
      ? (source.failure_reason
          ? latexToText(source.failure_reason)
          : 'Drona could not stand behind an answer here — read the working and check it yourself.')
      : null,
    failureNote: refused
      ? latexToText(
          (source.failure_reason ?? source.legibility_note ?? null) ||
            REMEDY_COPY[source.remedy ?? 'our_side'] ||
            ''
        ) || null
      : null,
  };
}

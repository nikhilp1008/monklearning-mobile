import { apiFetch } from '@/lib/api';
import { ParsedStep, parseSolutionSteps } from '@/lib/solution-steps';

export type QuestionType = 'single_correct' | 'numerical' | string;

/**
 * A figure the question cannot be answered without.
 *
 * `/practice/next` has always returned these (`routers/practice.py` json-parses
 * the `diagram` column and puts it in the payload) and mobile has always
 * dropped them on the floor, so a circuit or a graph question arrived as its
 * caption alone. The data pipeline withholds any figure it is not confident
 * renders on its own, so anything that reaches here is meant to be shown.
 */
export interface DiagramFigure {
  url: string;
  form?: string;
}

export interface NextQuestion {
  question_id: string;
  question_text: string | null;
  question_type: QuestionType;
  /** Option letter -> option text. Null for numerical questions. */
  options: Record<string, string> | null;
  chapter_name: string | null;
  concept: string | null;
  difficulty: string | null;
  diagram: DiagramFigure[] | null;
}

export interface PoolExhausted {
  exhausted: true;
  message: string;
}

/**
 * The `questions.solution` column, which is JSONB.
 *
 * Measured by the web client across all 2,920 servable rows: `{steps}` ×2780,
 * `{approach, steps}` ×119, `{final_answer, steps}` ×21 — and zero plain
 * strings. `final_answer` was missing from this type, so on those 21 rows the
 * worked answer was parsed and then silently dropped. The string variant is
 * kept as a defensive fallback for rows nobody has measured.
 */
export interface StructuredSolution {
  approach?: string;
  steps?: string[];
  final_answer?: string;
}

/**
 * What the answer did to concept mastery, from `apply_answer_scoring`.
 *
 * `scored: false` is normal, not an error: a repeat attempt, a question that
 * had already been served, or an answer given faster than the difficulty
 * band's floor is recorded but deliberately not scored.
 */
export interface AnswerScoring {
  scored: boolean;
  reason:
    | 'repeat_attempt'
    | 'previously_served'
    | 'under_time_floor'
    | 'all_concepts_retired'
    | null;
  difficulty?: string;
  concept_deltas: { concept_id: string; role: string; before: number; after: number }[];
}

export interface AnswerResult {
  is_correct: boolean;
  correct_option: string | null;
  correct_value: number | null;
  solution: StructuredSolution | string | null;
  /** Null when the question carries no concept tagging yet. */
  scoring?: AnswerScoring | null;
}

/**
 * Turns the practice solution into the same numbered steps Doubts and Snap are
 * read on, so one worked solution looks like every other one in the app.
 *
 * Practice's steps arrive as bare strings rather than the `{n, text}` the
 * doubts solver returns, and each one already opens with "Step 3: " — which
 * parseSolutionSteps strips, since the rail does the numbering. `approach`
 * isn't present on live rows but is kept: when it is, it's the lead-in.
 */
export function parseAnswerSolution(solution: AnswerResult['solution']): ParsedStep[] {
  if (!solution) return [];
  if (typeof solution === 'string') return parseSolutionSteps(null, solution);

  const texts = [
    ...(solution.approach ? [solution.approach] : []),
    ...(solution.steps ?? []),
  ];
  if (!texts.length) return [];
  return parseSolutionSteps(texts.map((text, i) => ({ n: i + 1, text })));
}

/**
 * The row's own `final_answer`, when it has one.
 *
 * Closes the rail with a ✓ the same way a numerical question's `correct_value`
 * does. Only ever used when the screen isn't already showing the answer — an
 * MCQ tags its correct option in the list above, so repeating it would be noise.
 */
export function solutionFinalAnswer(solution: AnswerResult['solution']): string | null {
  if (!solution || typeof solution === 'string') return null;
  const final = solution.final_answer?.trim();
  return final ? final : null;
}

export interface PracticeStats {
  attempted: number;
  correct: number;
  accuracy: number;
}

export function getNextQuestion(params: {
  exam?: 'jee' | 'neet' | 'both';
  class_level?: '11' | '12' | 'both';
  subject?: string;
}): Promise<NextQuestion | PoolExhausted> {
  return apiFetch('/practice/next', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}

export function submitAnswer(params: {
  question_id: string;
  chosen_option?: string;
  chosen_value?: number;
}): Promise<AnswerResult> {
  return apiFetch('/practice/answer', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}

export function getPracticeStats(): Promise<PracticeStats> {
  return apiFetch('/practice/stats');
}

export interface PracticeExplainSession {
  session_id: string;
  /** Always 'teaching' — see below. */
  phase: string;
  language: string;
  tutor_voice: string;
  tutor_name: string;
}

/**
 * POST /practice/explain — a Drona session about THIS question.
 *
 * The server seeds the session with the stem, the options, what the student
 * answered, the correct answer and the worked solution, then returns a session
 * already in `phase: "teaching"`, which the socket reads as "run turn one on
 * connect". So there is no scoping step: `/live-classroom` can be pushed
 * straight with this id and Drona opens talking about the question.
 *
 * This is the difference between "explain this question" and what the screen
 * did before — push `/entering-classroom` with a chapter title, which starts a
 * generic lesson on the whole chapter and throws the question away.
 *
 * Correctness is re-derived server-side from `chosen_option`/`chosen_value`
 * rather than trusted from us, so these are worth sending even though the
 * grade is already known here.
 */
export function explainWithDrona(params: {
  question_id: string;
  chosen_option?: string;
  chosen_value?: number;
  language?: string;
  voice?: string;
}): Promise<PracticeExplainSession> {
  return apiFetch('/practice/explain', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}

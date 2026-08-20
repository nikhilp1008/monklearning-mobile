import { apiFetch } from '@/lib/api';
import { ParsedStep, parseSolutionSteps } from '@/lib/solution-steps';

export type QuestionType = 'single_correct' | 'numerical' | string;

export interface NextQuestion {
  question_id: string;
  question_text: string | null;
  question_type: QuestionType;
  /** Option letter -> option text. Null for numerical questions. */
  options: Record<string, string> | null;
  chapter_name: string | null;
  concept: string | null;
  difficulty: string | null;
}

export interface PoolExhausted {
  exhausted: true;
  message: string;
}

/** The `questions.solution` column is JSONB — observed live as `{approach, steps}`,
 *  but older rows or numerical questions may just be a plain string or null. */
export interface StructuredSolution {
  approach?: string;
  steps?: string[];
}

export interface AnswerResult {
  is_correct: boolean;
  correct_option: string | null;
  correct_value: number | null;
  solution: StructuredSolution | string | null;
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

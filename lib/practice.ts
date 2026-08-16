import { apiFetch } from '@/lib/api';

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

/** Normalizes whatever shape `solution` arrives in into plain display text. */
export function formatSolution(solution: AnswerResult['solution']): string | null {
  if (!solution) return null;
  if (typeof solution === 'string') return solution;
  const parts: string[] = [];
  if (solution.approach) parts.push(solution.approach);
  if (solution.steps?.length) parts.push(...solution.steps);
  return parts.length ? parts.join('\n\n') : null;
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

import { apiFetch } from '@/lib/api';
import type { DiagramFigure } from '@/lib/practice';

/**
 * Mock exams — client for POST /mock/paper and POST /mock/{id}/submit, and
 * the in-memory session the four mock screens share.
 *
 * The session is module state, not a context, for the same reason practice's
 * question queue is: mock-ready, mock-test, mock-palette and mock-paused are
 * sibling stack routes with exactly one active paper between them, and the
 * paper must survive every push/pop among them. It does NOT survive an app
 * restart — the run stays 'in_progress' server-side, and re-opening mock
 * simply starts a fresh paper. Resumable papers are a follow-up that needs a
 * GET for one run's questions.
 */

export interface MockQuestion {
  question_num: number;
  id: string;
  subject: string;
  question_type: 'single_correct' | 'numerical' | 'assertion_reason' | 'match_the_following';
  question_text: string;
  options: Record<string, string> | null;
  image_url: string | null;
  diagram: DiagramFigure[] | null;
}

export interface MockPaper {
  mock_run_id: string;
  exam: 'jee' | 'neet';
  duration_minutes: number;
  marks_correct: number;
  marks_wrong: number;
  total_questions: number;
  max_marks: number;
  sections: { subject: string; questions: number }[];
  questions: MockQuestion[];
}

export interface MockSubjectScore {
  correct: number;
  wrong: number;
  unanswered: number;
  marks: number;
}

export interface MockScore extends MockSubjectScore {
  total_marks: number;
  max_marks: number;
  per_subject: Record<string, MockSubjectScore>;
}

export interface MockReviewQuestion {
  question_id: string;
  answered: boolean;
  is_correct: boolean;
  chosen_option: string | null;
  chosen_value: number | null;
  correct_option: string | null;
  correct_value: number | null;
  solution: unknown;
}

export interface MockSubmitResult {
  mock_run_id: string;
  score: MockScore;
  questions: MockReviewQuestion[];
}

/** Generation reads the whole light bank per subject and composes 75-180
 *  questions — measured at 6-7s server-side, so the default 60s ceiling is
 *  kept and the UI owns making the wait honest. */
export function createMockPaper(exam: 'jee' | 'neet'): Promise<MockPaper> {
  return apiFetch('/mock/paper', { method: 'POST', body: JSON.stringify({ exam }) });
}

export function submitMockPaper(
  runId: string,
  answers: { question_id: string; chosen_option?: string; chosen_value?: number }[]
): Promise<MockSubmitResult> {
  return apiFetch(`/mock/${runId}/submit`, {
    method: 'POST',
    body: JSON.stringify({ answers }),
  });
}

/** What the student has put against one question. `value` stays the raw
 *  typed string until submit so the input never fights its own parsing. */
export interface MockAnswerDraft {
  option?: string;
  value?: string;
}

export interface MockSession {
  paper: MockPaper;
  /** question id -> draft. Absent means unanswered. */
  answers: Map<string, MockAnswerDraft>;
  marked: Set<string>;
  /** Index into paper.questions of the question on screen. */
  index: number;
  /** Epoch ms when the clock runs out; fixed at start. */
  deadline: number;
  result: MockSubmitResult | null;
}

let session: MockSession | null = null;

export function startMockSession(paper: MockPaper): MockSession {
  session = {
    paper,
    answers: new Map(),
    marked: new Set(),
    index: 0,
    deadline: Date.now() + paper.duration_minutes * 60_000,
    result: null,
  };
  return session;
}

export function getMockSession(): MockSession | null {
  return session;
}

export function clearMockSession(): void {
  session = null;
}

/** The submit payload: only questions with something actually entered, with
 *  numerical text parsed — an unparseable entry counts as unanswered rather
 *  than as a wrong guess the student never made. */
export function sessionAnswersPayload(
  s: MockSession
): { question_id: string; chosen_option?: string; chosen_value?: number }[] {
  const out: { question_id: string; chosen_option?: string; chosen_value?: number }[] = [];
  for (const q of s.paper.questions) {
    const draft = s.answers.get(q.id);
    if (!draft) continue;
    if (q.question_type === 'numerical') {
      const parsed = parseFloat((draft.value ?? '').trim());
      if (!Number.isNaN(parsed)) out.push({ question_id: q.id, chosen_value: parsed });
    } else if (draft.option) {
      out.push({ question_id: q.id, chosen_option: draft.option });
    }
  }
  return out;
}

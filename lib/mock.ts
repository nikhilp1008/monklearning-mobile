import { apiFetch } from '@/lib/api';
import { buildReport, saveReport } from '@/lib/mock-report';
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

/**
 * WHY A PAPER CAN BE REFUSED, AND WHAT THE SERVER SAYS WHEN IT IS.
 *
 * `POST /mock/paper` answers 403 with a body rather than an error string when
 * the student has not earned one yet: mocks are unlocked by practice, one
 * credit per `threshold` unique correct answers. The client had no idea this
 * rule existed, so every locked student was told "check your connection" —
 * for a request that had reached the server and been answered precisely.
 */
export interface MockLock {
  code: 'mock_locked';
  exam: string;
  /** Unique correct answers one credit costs. */
  threshold: number;
  unique_correct: number;
  credits_earned: number;
  mocks_used: number;
  credits_available: number;
  /** How many more correct answers until the next credit. */
  correct_to_next: number;
}

/**
 * THE GATE, ASKED BEFORE THE DOOR IS TRIED.
 *
 * GET /mock/status answers the same numbers as the 403 above, without
 * attempting to build a paper. The app used to learn the rule only by
 * breaking it: tap Start, wait, get refused. Every screen that mentions a
 * mock now reads this first, so a student sees how far off they are before
 * they reach for anything.
 */
export interface MockStatus {
  exam: string;
  /** Unique correct practice answers one paper costs. */
  threshold: number;
  unique_correct: number;
  credits_earned: number;
  mocks_used: number;
  /** Papers the student may sit right now. */
  credits_available: number;
  correct_to_next: number;
}

export function getMockStatus(exam: 'jee' | 'neet'): Promise<MockStatus> {
  return apiFetch(`/mock/status?exam=${encodeURIComponent(exam)}`);
}

/** One row of GET /mock/runs. The score is the summary only — the
 *  question-by-question review exists in the submit response and nowhere
 *  else, which is why finishing a paper writes it to the device. */
export interface MockRunRow {
  id: string;
  exam: 'jee' | 'neet';
  status: 'in_progress' | 'submitted';
  created_at: string;
  submitted_at: string | null;
  score: {
    correct: number;
    wrong: number;
    unanswered: number;
    total_marks: number;
    max_marks: number;
    per_subject: Record<string, MockSubjectScore>;
  } | null;
}

export async function listMockRuns(): Promise<MockRunRow[]> {
  const data = await apiFetch<{ runs?: MockRunRow[] }>('/mock/runs');
  return data.runs ?? [];
}

export function mockLockFrom(err: unknown): MockLock | null {
  const data = (err as { status?: number; data?: { detail?: unknown } } | null)?.data?.detail;
  if (!data || typeof data !== 'object') return null;
  const detail = data as Partial<MockLock>;
  return detail.code === 'mock_locked' ? (detail as MockLock) : null;
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
  /**
   * Milliseconds spent on each question, by question id.
   *
   * Kept here because nowhere else can hold it: `MockAnswer` on the API has
   * no `elapsed_ms` field (practice's does), so a mock's timing exists on
   * this device or not at all. It is what turns a scorecard into a report —
   * a student who scores 180 needs to know whether they ran out of time or
   * ran out of method.
   */
  elapsed: Map<string, number>;
  /** Epoch ms the question on screen was shown. */
  shownAt: number;
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
    elapsed: new Map(),
    shownAt: Date.now(),
    result: null,
  };
  return session;
}

/**
 * Charge the time since the last switch to the question that was on screen.
 *
 * Called on every move between questions, when the paper loses focus (the
 * palette and the paused screen are not time spent on question 12), and once
 * more at submit. Reading the clock at these four moments is the whole of the
 * timing: no interval, nothing ticking, nothing to leak.
 */
export function chargeElapsed(): void {
  const s = session;
  if (!s) return;
  const now = Date.now();
  const q = s.paper.questions[s.index];
  if (q) s.elapsed.set(q.id, (s.elapsed.get(q.id) ?? 0) + Math.max(0, now - s.shownAt));
  s.shownAt = now;
}

/** Restart the stopwatch without charging anything — coming back to the
 *  paper after the palette or a pause. */
export function resumeElapsed(): void {
  if (session) session.shownAt = Date.now();
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

/**
 * END THE LIVE PAPER, from wherever it is ended.
 *
 * Two screens finish a mock: the clock running out on the paper itself, and
 * the Submit button, which now lives on the review page rather than beside
 * the timer on every question. Both need the same three steps, so they share
 * them instead of keeping two copies that can drift.
 */
export async function submitCurrentSession(): Promise<MockSubmitResult | null> {
  const s = session;
  if (!s) return null;
  // The last question was still on screen when Submit was pressed.
  chargeElapsed();
  const result = await submitMockPaper(s.paper.mock_run_id, sessionAnswersPayload(s));
  s.result = result;
  /**
   * WRITE THE REPORT NOW OR NEVER.
   *
   * This response is the only time the server sends the question-by-question
   * review; there is no GET that returns a finished run's questions. Saving
   * here rather than on the results screen means it is kept even if the app
   * is killed on the way there.
   */
  await saveReport(buildReport(s, result)).catch(() => undefined);
  return result;
}

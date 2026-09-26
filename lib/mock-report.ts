import AsyncStorage from '@react-native-async-storage/async-storage';

import type { MockSession, MockSubjectScore, MockSubmitResult } from '@/lib/mock';

/**
 * THE REPORT A STUDENT COMES BACK TO.
 *
 * A mock is worth more after it is over than during it, and the app used to
 * throw all of it away: `mock-result` showed a score, `clearMockSession()`
 * wiped the paper on the way out, and the question-by-question review the
 * server had just sent went with it.
 *
 * WHY IT IS STORED ON THE DEVICE. The API can list a student's runs
 * (`GET /mock/runs`, id, date, status and the score summary) but there is no
 * endpoint that returns a finished run's questions again. The review array
 * arrives exactly once, in the response to `POST /mock/{id}/submit`. So the
 * moment a paper is graded, everything needed to explain it is written here:
 * the stems, the options, what was chosen, what was right, the worked
 * solution, and how long each question took. The run list stays the
 * authority for WHICH papers exist; this is what makes one readable.
 *
 * The consequence is honest and worth stating in the UI: on a new phone, or
 * after a reinstall, an old paper still shows its score and cannot show its
 * questions. The fix is server-side — a GET for one run's review — and is on
 * the backend punch list.
 */

const KEY_PREFIX = 'monklearning.mock.report.';

/** How many papers keep their full detail. Roughly 60-150KB each for JEE,
 *  more for NEET's 180 questions; a dozen is years of mocks at one per 75
 *  correct practice answers, and bounds the storage either way. */
const KEEP = 12;
const INDEX_KEY = 'monklearning.mock.reports';

export interface MockReportQuestion {
  id: string;
  /** Position in the paper, as printed on the palette. */
  num: number;
  subject: string;
  type: 'single_correct' | 'numerical' | 'assertion_reason' | 'match_the_following';
  stem: string;
  options: Record<string, string> | null;
  chosen_option: string | null;
  chosen_value: number | null;
  correct_option: string | null;
  correct_value: number | null;
  answered: boolean;
  is_correct: boolean;
  /** Flagged during the paper. Kept because "I marked this and still got it
   *  wrong" is a different lesson from "I never saw it coming". */
  marked: boolean;
  elapsed_ms: number;
  solution: unknown;
}

export interface MockReport {
  run_id: string;
  exam: 'jee' | 'neet';
  /** ISO, from the device clock at submit. */
  submitted_at: string;
  duration_minutes: number;
  marks_correct: number;
  marks_wrong: number;
  max_marks: number;
  total_marks: number;
  correct: number;
  wrong: number;
  unanswered: number;
  per_subject: Record<string, MockSubjectScore>;
  questions: MockReportQuestion[];
}

/** Everything the server said, plus everything only this device knows. */
export function buildReport(session: MockSession, result: MockSubmitResult): MockReport {
  const review = new Map(result.questions.map((q) => [q.question_id, q]));
  return {
    run_id: result.mock_run_id,
    exam: session.paper.exam,
    submitted_at: new Date().toISOString(),
    duration_minutes: session.paper.duration_minutes,
    marks_correct: session.paper.marks_correct,
    marks_wrong: session.paper.marks_wrong,
    max_marks: result.score.max_marks,
    total_marks: result.score.total_marks,
    correct: result.score.correct,
    wrong: result.score.wrong,
    unanswered: result.score.unanswered,
    per_subject: result.score.per_subject,
    questions: session.paper.questions.map((q) => {
      const r = review.get(q.id);
      return {
        id: q.id,
        num: q.question_num,
        subject: q.subject,
        type: q.question_type,
        stem: q.question_text ?? '',
        options: q.options,
        chosen_option: r?.chosen_option ?? session.answers.get(q.id)?.option ?? null,
        chosen_value: r?.chosen_value ?? null,
        correct_option: r?.correct_option ?? null,
        correct_value: r?.correct_value ?? null,
        answered: r?.answered ?? session.answers.has(q.id),
        is_correct: r?.is_correct ?? false,
        marked: session.marked.has(q.id),
        elapsed_ms: session.elapsed.get(q.id) ?? 0,
        solution: r?.solution ?? null,
      };
    }),
  };
}

export async function saveReport(report: MockReport): Promise<void> {
  await AsyncStorage.setItem(KEY_PREFIX + report.run_id, JSON.stringify(report));
  const ids = await savedReportIds();
  const next = [report.run_id, ...ids.filter((id) => id !== report.run_id)];
  await AsyncStorage.setItem(INDEX_KEY, JSON.stringify(next.slice(0, KEEP)));
  // The oldest papers keep their row in the list from the server; only their
  // detail is dropped, and only once a student has a dozen newer ones.
  const dropped = next.slice(KEEP);
  if (dropped.length) await AsyncStorage.multiRemove(dropped.map((id) => KEY_PREFIX + id));
}

export async function savedReportIds(): Promise<string[]> {
  try {
    const raw = await AsyncStorage.getItem(INDEX_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

export async function loadReport(runId: string): Promise<MockReport | null> {
  try {
    const raw = await AsyncStorage.getItem(KEY_PREFIX + runId);
    return raw ? (JSON.parse(raw) as MockReport) : null;
  } catch {
    return null;
  }
}

export interface SubjectStanding {
  subject: string;
  correct: number;
  wrong: number;
  unanswered: number;
  marks: number;
  /** Of the questions actually attempted, 0-1. Null when none were. */
  accuracy: number | null;
  timeMs: number;
  /** Median seconds on an attempted question, for "where the time went". */
  medianMs: number | null;
}

export interface MockInsights {
  subjects: SubjectStanding[];
  strongest: SubjectStanding | null;
  weakest: SubjectStanding | null;
  /** Marks handed back by wrong answers — always a positive number here. */
  lostToWrong: number;
  /** Marks that were never played for. */
  leftOnTable: number;
  attempted: number;
  timeMs: number;
  /** Attempted questions only: skipping 60 of them makes a mean meaningless. */
  medianMs: number | null;
}

/**
 * WHAT THE NUMBERS MEAN, WORKED OUT ONCE.
 *
 * Subject is as deep as this can go today: a mock question arrives with a
 * subject and no chapter or concept, so "weak areas" cannot name a chapter
 * however much a student would rather read one. When the API tags them, the
 * same shape takes chapters with no redesign.
 *
 * MEDIAN, not mean, and only over attempted questions — the same rule
 * Progress's pace card follows. A paper with 40 skipped questions at a few
 * hundred milliseconds each has a mean that describes the skipping, not the
 * thinking.
 */
export function mockInsights(report: MockReport): MockInsights {
  const bySubject = new Map<string, MockReportQuestion[]>();
  for (const q of report.questions) {
    const list = bySubject.get(q.subject);
    if (list) list.push(q);
    else bySubject.set(q.subject, [q]);
  }

  const subjects: SubjectStanding[] = [...bySubject.entries()].map(([subject, list]) => {
    const attempted = list.filter((q) => q.answered);
    const correct = list.filter((q) => q.is_correct).length;
    const wrong = attempted.length - correct;
    const score = report.per_subject[subject];
    return {
      subject,
      correct: score?.correct ?? correct,
      wrong: score?.wrong ?? wrong,
      unanswered: score?.unanswered ?? list.length - attempted.length,
      marks: score?.marks ?? correct * report.marks_correct + wrong * report.marks_wrong,
      accuracy: attempted.length ? correct / attempted.length : null,
      timeMs: list.reduce((sum, q) => sum + q.elapsed_ms, 0),
      medianMs: median(attempted.map((q) => q.elapsed_ms)),
    };
  });

  // Ranked on accuracy, not marks: a subject with 40 questions left blank can
  // outscore one a student was better at, and "strongest" would then name the
  // subject they simply reached first.
  const ranked = subjects.filter((s) => s.accuracy !== null);
  ranked.sort((a, b) => (b.accuracy ?? 0) - (a.accuracy ?? 0));

  const attempted = report.questions.filter((q) => q.answered);
  return {
    subjects,
    strongest: ranked.length > 1 ? ranked[0] : null,
    weakest: ranked.length > 1 ? ranked[ranked.length - 1] : null,
    lostToWrong: Math.abs(report.wrong * report.marks_wrong),
    leftOnTable: report.unanswered * report.marks_correct,
    attempted: attempted.length,
    timeMs: report.questions.reduce((sum, q) => sum + q.elapsed_ms, 0),
    medianMs: median(attempted.map((q) => q.elapsed_ms)),
  };
}

function median(values: number[]): number | null {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
}

/** "1h 48m", "4m 20s", "38s" — never "0h 04m 20s". */
export function formatSpan(ms: number): string {
  const total = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  if (h) return `${h}h ${m}m`;
  if (m) return `${m}m ${s}s`;
  return `${s}s`;
}

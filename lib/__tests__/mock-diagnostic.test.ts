/**
 * The free starting-point paper, on the client.
 *
 * Two promises worth holding: a full paper's request is byte-for-byte what it
 * was before the diagnostic existed (so an API build that predates it never
 * meets a field it does not know), and the report built from a diagnostic
 * remembers what it was, because the report screen frames itself from that.
 */
jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: () => Promise.resolve({ data: { session: null } }) } },
}));
import { apiFetch } from '@/lib/api';
import {
  createMockPaper,
  isDiagnosticTaken,
  type MockPaper,
  type MockSession,
  type MockSubmitResult,
} from '@/lib/mock';
import { buildReport } from '@/lib/mock-report';

jest.mock('@/lib/api', () => ({ apiFetch: jest.fn().mockResolvedValue({}) }));

const mockedFetch = apiFetch as jest.Mock;

describe('createMockPaper', () => {
  beforeEach(() => mockedFetch.mockClear());

  it('sends only the exam for a full paper', async () => {
    await createMockPaper('jee');
    expect(mockedFetch).toHaveBeenCalledWith('/mock/paper', {
      method: 'POST',
      body: JSON.stringify({ exam: 'jee' }),
    });
  });

  it('names the kind for a diagnostic', async () => {
    await createMockPaper('neet', 'diagnostic');
    expect(JSON.parse(mockedFetch.mock.calls[0][1].body)).toEqual({
      exam: 'neet',
      kind: 'diagnostic',
    });
  });
});

describe('isDiagnosticTaken', () => {
  it('reads the server code and nothing else', () => {
    expect(isDiagnosticTaken({ data: { detail: { code: 'diagnostic_taken' } } })).toBe(true);
    expect(isDiagnosticTaken({ data: { detail: { code: 'mock_locked' } } })).toBe(false);
    expect(isDiagnosticTaken({ data: { detail: 'diagnostic_taken' } })).toBe(false);
    expect(isDiagnosticTaken(null)).toBe(false);
  });
});

describe('buildReport', () => {
  const base = {
    mock_run_id: 'r1',
    exam: 'jee' as const,
    duration_minutes: 75,
    marks_correct: 4,
    marks_wrong: -1,
    total_questions: 1,
    max_marks: 4,
    sections: [{ subject: 'physics', questions: 1 }],
    questions: [
      {
        question_num: 1,
        id: 'q1',
        subject: 'physics',
        question_type: 'single_correct' as const,
        question_text: 'Q',
        options: { a: 'A' },
        image_url: null,
        diagram: null,
      },
    ],
  };
  const result: MockSubmitResult = {
    mock_run_id: 'r1',
    score: {
      correct: 1,
      wrong: 0,
      unanswered: 0,
      marks: 4,
      total_marks: 4,
      max_marks: 4,
      per_subject: {},
    },
    questions: [],
  };
  const session = (paper: MockPaper): MockSession =>
    ({ paper, answers: new Map(), marked: new Set(), elapsed: new Map() }) as unknown as MockSession;

  it('keeps the kind of a diagnostic', () => {
    expect(buildReport(session({ ...base, kind: 'diagnostic' }), result).kind).toBe('diagnostic');
  });

  it('calls a paper from an older API a full one', () => {
    expect(buildReport(session(base), result).kind).toBe('full');
  });
});

describe('buildReport and the comparison with the last paper', () => {
  const paper: MockPaper = {
    mock_run_id: 'r2',
    exam: 'jee',
    duration_minutes: 180,
    marks_correct: 4,
    marks_wrong: -1,
    total_questions: 1,
    max_marks: 4,
    sections: [{ subject: 'physics', questions: 1 }],
    questions: [
      {
        question_num: 1,
        id: 'q1',
        subject: 'physics',
        question_type: 'single_correct',
        question_text: 'Q',
        options: { a: 'A' },
        image_url: null,
        diagram: null,
      },
    ],
  };
  const score = {
    correct: 1, wrong: 0, unanswered: 0, marks: 4, total_marks: 4, max_marks: 4, per_subject: {},
  };
  const session = { paper, answers: new Map(), marked: new Set(), elapsed: new Map() } as unknown as MockSession;
  const previous = {
    run_id: 'r1',
    kind: 'diagnostic' as const,
    submitted_at: '2026-10-01T00:00:00Z',
    before_percent: 25,
    after_percent: 62.5,
    delta_percent: 37.5,
    subjects: [{ subject: 'physics', before: 50, after: 75 }],
    improved: [],
    slipped: [],
  };

  it('carries the comparison the server sent', () => {
    const r = buildReport(session, { mock_run_id: 'r2', score, questions: [], previous });
    expect(r.previous).toEqual(previous);
  });

  it('keeps "first paper" (null) distinct from "never asked" (undefined)', () => {
    expect(buildReport(session, { mock_run_id: 'r2', score, questions: [], previous: null }).previous).toBeNull();
    expect(buildReport(session, { mock_run_id: 'r2', score, questions: [] }).previous).toBeUndefined();
  });
});

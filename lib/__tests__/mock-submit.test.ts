/**
 * A submit whose response was lost.
 *
 * The server marks the paper the moment the first submit reaches it, and
 * answers every submit after that with 409 "already submitted". Before this,
 * a student whose connection dropped on the way back could press Submit for
 * ever and be told "check your connection" each time, for a paper that was
 * already handed in and marked. That refusal now means "read the report".
 */
jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: () => Promise.resolve({ data: { session: null } }) } },
}));
jest.mock('@/lib/api', () => ({ apiFetch: jest.fn() }));

import AsyncStorage from '@react-native-async-storage/async-storage';

import { apiFetch } from '@/lib/api';
import {
  getMockSession,
  isAlreadySubmitted,
  isPaperClosed,
  saveProgress,
  startMockSession,
  submitCurrentSession,
  type MockPaper,
} from '@/lib/mock';
import type { MockReport } from '@/lib/mock-report';

const mockedFetch = apiFetch as jest.Mock;

const paper: MockPaper = {
  mock_run_id: 'run-9',
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
      options: { a: 'A', b: 'B' },
      image_url: null,
      diagram: null,
    },
  ],
};

const report: MockReport = {
  run_id: 'run-9',
  exam: 'jee',
  kind: 'full',
  submitted_at: '2026-10-20T10:00:00Z',
  duration_minutes: 180,
  marks_correct: 4,
  marks_wrong: -1,
  max_marks: 4,
  total_marks: 4,
  correct: 1,
  wrong: 0,
  unanswered: 0,
  per_subject: { physics: { correct: 1, wrong: 0, unanswered: 0, marks: 4 } },
  previous: null,
  questions: [
    {
      id: 'q1',
      num: 1,
      subject: 'physics',
      type: 'single_correct',
      stem: 'Q',
      options: { a: 'A', b: 'B' },
      chosen_option: 'a',
      chosen_value: null,
      correct_option: 'a',
      correct_value: null,
      answered: true,
      is_correct: true,
      marked: false,
      elapsed_ms: 1000,
      solution: null,
      chapter_id: 'ch1',
      chapter_name: 'Kinematics',
    },
  ],
};

const conflict = (detail: string) => Object.assign(new Error(detail), { status: 409 });

beforeEach(() => {
  mockedFetch.mockReset();
  (AsyncStorage.removeItem as jest.Mock).mockClear();
});

describe('isAlreadySubmitted', () => {
  it('reads only the "already submitted" refusal', () => {
    expect(isAlreadySubmitted(conflict('Mock run is already submitted.'))).toBe(true);
    expect(isAlreadySubmitted(conflict('Mock run is already abandoned.'))).toBe(false);
    expect(isAlreadySubmitted(conflict("This paper's time ran out too long ago to hand in."))).toBe(false);
    expect(
      isAlreadySubmitted(Object.assign(new Error('Mock run is already submitted.'), { status: 500 }))
    ).toBe(false);
    expect(isAlreadySubmitted(null)).toBe(false);
  });
});

describe('isPaperClosed', () => {
  it('is every other 409: a paper past its deadline and grace', () => {
    expect(isPaperClosed(conflict('Mock run is already abandoned.'))).toBe(true);
    expect(isPaperClosed(conflict("This paper's time ran out too long ago to hand in."))).toBe(true);
    // Handed in already is good news, not a closed paper.
    expect(isPaperClosed(conflict('Mock run is already submitted.'))).toBe(false);
    // A dropped connection still means "submit again".
    expect(isPaperClosed(new Error('Network request failed'))).toBe(false);
    expect(isPaperClosed(Object.assign(new Error('boom'), { status: 503 }))).toBe(false);
  });
});

describe('submitCurrentSession', () => {
  it('finishes from the server report when the paper was already handed in', async () => {
    const s = startMockSession(paper);
    s.answers.set('q1', { option: 'a' });
    saveProgress();
    mockedFetch
      .mockRejectedValueOnce(conflict('Mock run is already submitted.'))
      .mockResolvedValueOnce(report);

    const result = await submitCurrentSession();

    expect(mockedFetch.mock.calls[1][0]).toBe('/mock/run-9/review');
    expect(result?.mock_run_id).toBe('run-9');
    expect(result?.score.total_marks).toBe(4);
    expect(result?.questions[0]).toMatchObject({ question_id: 'q1', is_correct: true });
    // The session ends as a successful submit leaves it: holding a result,
    // and with the saved in-progress copy gone.
    expect(getMockSession()?.result).toBe(result);
    expect(AsyncStorage.removeItem).toHaveBeenCalledWith('mock:progress:run-9');
  });

  it('still fails when the report cannot be read either', async () => {
    startMockSession(paper);
    mockedFetch
      .mockRejectedValueOnce(conflict('Mock run is already submitted.'))
      .mockRejectedValueOnce(new Error('Network request failed'));

    await expect(submitCurrentSession()).rejects.toThrow('Network request failed');
    expect(getMockSession()?.result).toBeNull();
  });

  it('passes any other refusal back to the screen', async () => {
    startMockSession(paper);
    mockedFetch.mockRejectedValueOnce(conflict('Mock run is already abandoned.'));

    await expect(submitCurrentSession()).rejects.toMatchObject({ status: 409 });
    expect(mockedFetch).toHaveBeenCalledTimes(1);
    expect(getMockSession()?.result).toBeNull();
  });
});

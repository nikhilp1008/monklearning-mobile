/**
 * The report's arithmetic, which nothing else can check.
 *
 * Every number on the scorecard below the score itself is computed here:
 * which subject a student was strongest at, what their wrong answers cost,
 * what they left on the table, and how long a typical question took. The
 * screen renders whatever this returns, so a rule inverted here reads as a
 * confident, wrong sentence about a three-hour paper.
 *
 * The rule most worth holding is that strongest and weakest rank on ACCURACY,
 * not on marks. A student who ran out of time in Maths can out-score the
 * subject they were genuinely better at, purely by having reached more of it.
 */
import type { MockPaper, MockSession, MockSubmitResult } from '@/lib/mock';
import { buildReport, formatSpan, mockInsights } from '@/lib/mock-report';

function paper(): MockPaper {
  const subjects = ['physics', 'chemistry'] as const;
  const questions = subjects.flatMap((subject, s) =>
    [0, 1, 2, 3].map((i) => ({
      question_num: s * 4 + i + 1,
      id: `${subject}-${i}`,
      subject,
      question_type: 'single_correct' as const,
      question_text: `${subject} ${i}`,
      options: { a: 'A', b: 'B' },
      image_url: null,
      diagram: null,
    }))
  );
  return {
    mock_run_id: 'run-1',
    exam: 'jee',
    duration_minutes: 180,
    marks_correct: 4,
    marks_wrong: -1,
    total_questions: questions.length,
    max_marks: questions.length * 4,
    sections: subjects.map((subject) => ({ subject, questions: 4 })),
    questions,
  };
}

/**
 * Physics: 3 attempted, 1 right. Chemistry: 1 attempted, 1 right.
 * Chemistry is the more accurate subject (100% against 33%) and the LOWER
 * scoring one (4 marks against 2), which is the whole point of the fixture.
 */
function session(): MockSession {
  const p = paper();
  const answers = new Map(
    [
      ['physics-0', 'a'],
      ['physics-1', 'a'],
      ['physics-2', 'a'],
      ['chemistry-0', 'a'],
    ].map(([id, option]) => [id, { option }])
  );
  return {
    paper: p,
    answers,
    marked: new Set(['physics-3']),
    index: 0,
    deadline: Date.now() + 1000,
    elapsed: new Map([
      ['physics-0', 20_000],
      ['physics-1', 60_000],
      ['physics-2', 100_000],
      ['chemistry-0', 40_000],
      // Never opened: a skipped question is not a fast one.
      ['physics-3', 500],
    ]),
    shownAt: Date.now(),
    result: null,
  };
}

function result(): MockSubmitResult {
  const correct = new Set(['physics-0', 'chemistry-0']);
  const attempted = ['physics-0', 'physics-1', 'physics-2', 'chemistry-0'];
  return {
    mock_run_id: 'run-1',
    score: {
      correct: 2,
      wrong: 2,
      unanswered: 4,
      marks: 6,
      total_marks: 6,
      max_marks: 32,
      per_subject: {
        physics: { correct: 1, wrong: 2, unanswered: 1, marks: 2 },
        chemistry: { correct: 1, wrong: 0, unanswered: 3, marks: 4 },
      },
    },
    questions: paper().questions.map((q) => ({
      question_id: q.id,
      answered: attempted.includes(q.id),
      is_correct: correct.has(q.id),
      chosen_option: attempted.includes(q.id) ? 'a' : null,
      chosen_value: null,
      correct_option: 'b',
      correct_value: null,
      solution: null,
    })),
  };
}

describe('buildReport', () => {
  it('pairs every question with its review, its timing and its flag', () => {
    const r = buildReport(session(), result());
    expect(r.questions).toHaveLength(8);

    const wrong = r.questions.find((q) => q.id === 'physics-1')!;
    expect(wrong.answered).toBe(true);
    expect(wrong.is_correct).toBe(false);
    expect(wrong.chosen_option).toBe('a');
    expect(wrong.correct_option).toBe('b');
    expect(wrong.elapsed_ms).toBe(60_000);
    expect(wrong.stem).toBe('physics 1');

    const skipped = r.questions.find((q) => q.id === 'physics-3')!;
    expect(skipped.answered).toBe(false);
    expect(skipped.chosen_option).toBeNull();
    // Marked for review and then never answered — both facts survive.
    expect(skipped.marked).toBe(true);
  });
});

describe('mockInsights', () => {
  const insights = mockInsights(buildReport(session(), result()));

  it('ranks subjects on accuracy, not on marks', () => {
    expect(insights.strongest?.subject).toBe('chemistry');
    expect(insights.weakest?.subject).toBe('physics');
    // The proof that it is not ranking on marks: the strongest subject here
    // scored 4 and the weakest 2, so a marks sort would invert this.
    expect(insights.strongest!.marks).toBeGreaterThan(0);
    expect(insights.strongest!.accuracy).toBe(1);
    expect(insights.weakest!.accuracy).toBeCloseTo(1 / 3);
  });

  it('names neither when only one subject was attempted', () => {
    const s = session();
    s.answers = new Map([['physics-0', { option: 'a' }]]);
    const r = buildReport(s, result());
    r.questions = r.questions.map((q) =>
      q.id === 'physics-0' ? q : { ...q, answered: false, is_correct: false }
    );
    const only = mockInsights(r);
    expect(only.strongest).toBeNull();
    expect(only.weakest).toBeNull();
  });

  it('counts what the wrong answers cost and what was never played for', () => {
    // 2 wrong at -1, and 4 skipped that were worth 4 each.
    expect(insights.lostToWrong).toBe(2);
    expect(insights.leftOnTable).toBe(16);
  });

  it('times the paper on attempted questions only', () => {
    // 20 + 60 + 100 + 40 attempted, and 0.5s on one that was never answered.
    expect(insights.timeMs).toBe(220_500);
    expect(insights.attempted).toBe(4);
    // Median of 20, 40, 60, 100 seconds — not the mean, and not dragged down
    // by the half-second spent bouncing off a question that was skipped.
    expect(insights.medianMs).toBe(50_000);
  });

  it('splits the clock by subject', () => {
    const physics = insights.subjects.find((s) => s.subject === 'physics')!;
    expect(physics.timeMs).toBe(180_500);
    expect(physics.medianMs).toBe(60_000);
  });
});

describe('formatSpan', () => {
  it('never prints a zero hour or a zero minute', () => {
    expect(formatSpan(38_000)).toBe('38s');
    expect(formatSpan(260_000)).toBe('4m 20s');
    expect(formatSpan(6_480_000)).toBe('1h 48m');
  });
});

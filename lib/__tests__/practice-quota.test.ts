/**
 * "N questions left today" under the Practice Submit button.
 *
 * The live bug: five answers in, the line still said 99. It was set only from a
 * LIVE /practice/next reply, so questions taken from the prefetch queue never
 * moved it; and the API writes the attempt row after the answer response, so
 * the prefetch fired on that response usually could not see the answer either.
 */
import {
  emptyTally,
  questionsLeft,
  reconcile,
  recordAccepted,
  SETTLE_MS,
  stampTally,
} from '@/lib/practice-quota';
import type { NextQuestion } from '@/lib/practice';

jest.mock('@/lib/api', () => ({ apiFetch: jest.fn() }));
jest.mock('@/lib/progress', () => ({ clearProgressCache: jest.fn() }));

const LIMIT = 100;

function question(used: number, limit = LIMIT): NextQuestion {
  return {
    question_id: `q${used}`,
    question_type: 'single_correct',
    question_text: 'x',
    options: { a: '1', b: '2' },
    chapter_name: null,
    concept: null,
    difficulty: null,
    diagram: null,
    questions_used_today: used,
    daily_limit: limit,
  } as NextQuestion;
}

/**
 * A fake server: `rows` is what is in practice_attempts. `answer()` grades at
 * once but writes the row only when `settle()` runs — the API's background task.
 */
function fakeServer(startUsed = 0) {
  let rows = startUsed;
  let unwritten = 0;
  return {
    next: (limit = LIMIT) => question(rows, limit),
    answer: () => {
      unwritten += 1;
    },
    settle: () => {
      rows += unwritten;
      unwritten = 0;
    },
    expire: (n: number) => {
      rows -= n;
    },
  };
}

/** The screen's flow, through the real lib/practice module state. */
function practiceScreen() {
  let lib!: typeof import('@/lib/practice');
  jest.isolateModules(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports -- fresh module state per test
    lib = require('@/lib/practice');
  });
  return lib;
}

describe('pure arithmetic', () => {
  it('is hidden before the first response', () => {
    expect(questionsLeft(null, 0)).toBeNull();
    expect(questionsLeft(null, 7)).toBeNull();
  });

  it('a reply without the numbers leaves it hidden', () => {
    expect(reconcile(null, {}, stampTally(emptyTally(), 0))).toBeNull();
  });

  it('first question: 100 left', () => {
    const a = reconcile(null, { questions_used_today: 0, daily_limit: 100 }, stampTally(emptyTally(), 0));
    expect(questionsLeft(a, 0)).toBe(100);
  });

  it('drops the moment an answer is accepted, before any new reply', () => {
    let tally = emptyTally();
    const a = reconcile(null, { questions_used_today: 0, daily_limit: 100 }, stampTally(tally, 0));
    for (let i = 1; i <= 5; i++) {
      tally = recordAccepted(tally, i * 60_000);
      expect(questionsLeft(a, tally.accepted)).toBe(100 - i);
    }
  });

  it('never goes negative', () => {
    let tally = emptyTally();
    const a = reconcile(null, { questions_used_today: 98, daily_limit: 100 }, stampTally(tally, 0));
    for (let i = 1; i <= 5; i++) tally = recordAccepted(tally, i * 60_000);
    expect(questionsLeft(a, tally.accepted)).toBe(0);
    // A server that reports more used than the limit.
    const over = reconcile(null, { questions_used_today: 130, daily_limit: 100 }, stampTally(tally, 0));
    expect(questionsLeft(over, tally.accepted)).toBe(0);
  });

  it('a prefetch issued BEFORE a submit still has that submit counted', () => {
    let tally = emptyTally();
    let anchor = reconcile(null, { questions_used_today: 0, daily_limit: 100 }, stampTally(tally, 0));
    // Prefetch goes out at tally 0; the server counts 0.
    const issued = stampTally(tally, 1_000);
    // The submit lands while it is in the air.
    tally = recordAccepted(tally, 2_000);
    anchor = reconcile(anchor, { questions_used_today: 0, daily_limit: 100 }, issued);
    expect(questionsLeft(anchor, tally.accepted)).toBe(99);
  });

  it('a reply that has not yet seen a just-accepted answer does not put it back', () => {
    let tally = emptyTally();
    let anchor = reconcile(null, { questions_used_today: 0, daily_limit: 100 }, stampTally(tally, 0));
    tally = recordAccepted(tally, 10_000);
    // Issued 50 ms after the answer; the row is not written yet, server says 0.
    anchor = reconcile(anchor, { questions_used_today: 0, daily_limit: 100 }, stampTally(tally, 10_050));
    expect(questionsLeft(anchor, tally.accepted)).toBe(99);
  });

  it('believes a smaller count that pending answers cannot explain (24 h window rolled)', () => {
    let tally = emptyTally();
    let anchor = reconcile(null, { questions_used_today: 40, daily_limit: 100 }, stampTally(tally, 0));
    tally = recordAccepted(tally, 10_000);
    // Long after the answer settled, the server says 30: ten from yesterday dropped off.
    anchor = reconcile(anchor, { questions_used_today: 30, daily_limit: 100 }, stampTally(tally, 10_000 + SETTLE_MS + 1));
    expect(questionsLeft(anchor, tally.accepted)).toBe(70);
  });

  it('believes a larger count (another device answered)', () => {
    const tally = emptyTally();
    let anchor = reconcile(null, { questions_used_today: 10, daily_limit: 100 }, stampTally(tally, 0));
    anchor = reconcile(anchor, { questions_used_today: 25, daily_limit: 100 }, stampTally(tally, 60_000));
    expect(questionsLeft(anchor, tally.accepted)).toBe(75);
  });

  it('takes a new limit (a pass bought mid-session)', () => {
    const tally = emptyTally();
    let anchor = reconcile(null, { questions_used_today: 20, daily_limit: 20 }, stampTally(tally, 0));
    expect(questionsLeft(anchor, 0)).toBe(0);
    anchor = reconcile(anchor, { questions_used_today: 20, daily_limit: 150 }, stampTally(tally, 60_000));
    expect(questionsLeft(anchor, 0)).toBe(130);
  });

  it('ignores a snapshot issued before the one already held', () => {
    let tally = emptyTally();
    const old = stampTally(tally, 0);
    tally = recordAccepted(tally, 60_000);
    tally = recordAccepted(tally, 120_000);
    let anchor = reconcile(null, { questions_used_today: 2, daily_limit: 100 }, stampTally(tally, 200_000));
    anchor = reconcile(anchor, { questions_used_today: 0, daily_limit: 100 }, old);
    expect(questionsLeft(anchor, tally.accepted)).toBe(98);
  });
});

describe('the Practice flow through lib/practice', () => {
  const SCOPE = 'physics|';
  let now = 0;
  beforeEach(() => {
    now = 1_700_000_000_000;
    jest.spyOn(Date, 'now').mockImplementation(() => now);
  });
  afterEach(() => jest.restoreAllMocks());

  it('five answers, every next question LIVE: 95 left', () => {
    const lib = practiceScreen();
    const server = fakeServer();
    let shown = lib.foldQuotaReply(server.next(), lib.stampAnswerTally());
    expect(lib.answersAccepted()).toBe(0);
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(100);
    for (let i = 0; i < 5; i++) {
      server.answer();
      lib.noteAnswerAccepted();
      now += 1_500;
      server.settle();
      now += 20_000; // reading the solution, then Next with an empty queue
      shown = lib.foldQuotaReply(server.next(), lib.stampAnswerTally());
    }
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(95);
  });

  it('five answers, every next question from the QUEUE (prefetched before the row is written): 95 left', () => {
    const lib = practiceScreen();
    const server = fakeServer();
    let shown = lib.foldQuotaReply(server.next(), lib.stampAnswerTally());
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(100);
    for (let i = 1; i <= 5; i++) {
      server.answer();
      lib.noteAnswerAccepted();
      // The line under Submit drops at once.
      expect(questionsLeft(shown, lib.answersAccepted())).toBe(100 - i);
      // applyResult fires the prefetch straight away; the row is still unwritten.
      const stamp = lib.stampAnswerTally();
      lib.holdQueuedQuestion(server.next(), SCOPE, stamp);
      now += 1_500;
      server.settle();
      now += 20_000;
      const ready = lib.takeQueuedQuestion(SCOPE)!;
      shown = lib.foldQuotaReply(ready.question, ready.stamp);
      expect(questionsLeft(shown, lib.answersAccepted())).toBe(100 - i);
    }
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(95);
  });

  it('mixed queue and live, with a give-up and a numeric: 95 left', () => {
    const lib = practiceScreen();
    const server = fakeServer();
    let shown = lib.foldQuotaReply(server.next(), lib.stampAnswerTally());
    // option, give-up, numeric, option, give-up — each a 200 from /practice/answer
    const viaQueue = [true, false, true, true, false];
    for (const queued of viaQueue) {
      server.answer();
      lib.noteAnswerAccepted();
      if (queued) {
        lib.holdQueuedQuestion(server.next(), SCOPE, lib.stampAnswerTally());
        now += 1_500;
        server.settle();
        const ready = lib.takeQueuedQuestion(SCOPE)!;
        shown = lib.foldQuotaReply(ready.question, ready.stamp);
      } else {
        now += 300; // a fast Next: the row may not be written yet
        shown = lib.foldQuotaReply(server.next(), lib.stampAnswerTally());
        now += 1_200;
        server.settle();
      }
    }
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(95);
  });

  it('leaving and re-entering Practice: the queued question keeps its stamp', () => {
    const lib = practiceScreen();
    const server = fakeServer(10);
    let shown = lib.foldQuotaReply(server.next(), lib.stampAnswerTally());
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(90);
    server.answer();
    lib.noteAnswerAccepted();
    lib.holdQueuedQuestion(server.next(), SCOPE, lib.stampAnswerTally());
    // Student leaves straight away: the screen unmounts, its state is gone.
    shown = null;
    now += 1_500;
    server.settle();
    now += 5 * 60_000;
    // Re-enter: nothing shown until a reply is folded on this visit.
    expect(questionsLeft(shown, lib.answersAccepted())).toBeNull();
    const ready = lib.takeQueuedQuestion(SCOPE)!;
    shown = lib.foldQuotaReply(ready.question, ready.stamp);
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(89);
  });

  it('reaching the limit shows 0, and the exhausted reply keeps it at 0', () => {
    const lib = practiceScreen();
    const server = fakeServer(97);
    let shown = lib.foldQuotaReply(server.next(), lib.stampAnswerTally());
    for (let i = 0; i < 3; i++) {
      server.answer();
      lib.noteAnswerAccepted();
      lib.holdQueuedQuestion(server.next(), SCOPE, lib.stampAnswerTally());
      now += 1_500;
      server.settle();
      const ready = lib.takeQueuedQuestion(SCOPE);
      if (ready) shown = lib.foldQuotaReply(ready.question, ready.stamp);
    }
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(0);
    // The exhausted reply: used 100 of 100.
    shown = lib.foldQuotaReply({ questions_used_today: 100, daily_limit: 100 }, lib.stampAnswerTally());
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(0);
    expect(shown?.limit).toBe(100);
  });
});

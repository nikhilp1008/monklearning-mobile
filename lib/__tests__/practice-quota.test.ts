/**
 * "N questions left today" under the Practice Submit button.
 *
 * The live bug: five answers in, the line still said 99. It was set only from a
 * LIVE /practice/next reply, so questions taken from the prefetch queue never
 * moved it; and the API writes the attempt row after the answer response, so
 * the prefetch fired on that response usually could not see the answer either.
 */
import {
  anchorFromAnswer,
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
    /** Grades at once; the reply carries the count INCLUDING this answer
     *  (new API) or nothing (old API). The row is still unwritten. */
    answer: (newApi = false, limit = LIMIT) => {
      unwritten += 1;
      return newApi ? { questions_used_today: rows + unwritten, daily_limit: limit } : {};
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

describe('the count on the /practice/answer reply (new API)', () => {
  it('an answer reply without the numbers changes nothing', () => {
    const prev = { used: 3, limit: 100, at: 2 };
    expect(anchorFromAnswer(prev, {}, 3)).toBeNull();
    expect(anchorFromAnswer(prev, { questions_used_today: 4 }, 3)).toBeNull();
    expect(anchorFromAnswer(null, { daily_limit: 100 }, 1)).toBeNull();
  });

  it('is the anchor outright, pinned to the tally with this answer in it', () => {
    let tally = emptyTally();
    let anchor = reconcile(null, { questions_used_today: 0, daily_limit: 100 }, stampTally(tally, 0));
    expect(questionsLeft(anchor, tally.accepted)).toBe(100);
    tally = recordAccepted(tally, 1_000);
    anchor = anchorFromAnswer(anchor, { questions_used_today: 1, daily_limit: 100 }, tally.accepted);
    expect(anchor).toEqual({ used: 1, limit: 100, at: 1 });
    expect(questionsLeft(anchor, tally.accepted)).toBe(99);
    // Later answers with no new reply still subtract.
    tally = recordAccepted(tally, 2_000);
    expect(questionsLeft(anchor, tally.accepted)).toBe(98);
  });

  it('shows the line even when nothing came before it (it IS a server number)', () => {
    const anchor = anchorFromAnswer(null, { questions_used_today: 7, daily_limit: 100 }, 1);
    expect(questionsLeft(anchor, 1)).toBe(93);
  });

  it('a prefetch issued BEFORE the answer was accepted cannot raise the line', () => {
    let tally = emptyTally();
    let anchor = reconcile(null, { questions_used_today: 0, daily_limit: 100 }, stampTally(tally, 0));
    const early = stampTally(tally, 500);
    tally = recordAccepted(tally, 1_000);
    anchor = anchorFromAnswer(anchor, { questions_used_today: 1, daily_limit: 100 }, tally.accepted);
    // That early reply lands now and says 0.
    anchor = reconcile(anchor, { questions_used_today: 0, daily_limit: 100 }, early);
    expect(questionsLeft(anchor, tally.accepted)).toBe(99);
  });

  it('a prefetch issued just AFTER, before the row is written, cannot raise it either', () => {
    let tally = emptyTally();
    tally = recordAccepted(tally, 1_000);
    let anchor = anchorFromAnswer(null, { questions_used_today: 1, daily_limit: 100 }, tally.accepted);
    anchor = reconcile(anchor, { questions_used_today: 0, daily_limit: 100 }, stampTally(tally, 1_050));
    expect(questionsLeft(anchor, tally.accepted)).toBe(99);
  });

  it('never negative', () => {
    const anchor = anchorFromAnswer(null, { questions_used_today: 140, daily_limit: 100 }, 1);
    expect(questionsLeft(anchor, 3)).toBe(0);
  });

  it('a lower count on the answer reply is believed (24 h window rolled)', () => {
    let tally = emptyTally();
    let anchor = reconcile(null, { questions_used_today: 40, daily_limit: 100 }, stampTally(tally, 0));
    tally = recordAccepted(tally, 60_000);
    // 41 implied; the server says 31 with this answer — ten dropped off.
    anchor = anchorFromAnswer(anchor, { questions_used_today: 31, daily_limit: 100 }, tally.accepted);
    expect(questionsLeft(anchor, tally.accepted)).toBe(69);
  });

  it('a later /practice/next can still show a rollover after an answer-reply anchor', () => {
    let tally = emptyTally();
    tally = recordAccepted(tally, 1_000);
    let anchor = anchorFromAnswer(null, { questions_used_today: 40, daily_limit: 100 }, tally.accepted);
    anchor = reconcile(anchor, { questions_used_today: 30, daily_limit: 100 }, stampTally(tally, 1_000 + SETTLE_MS + 1));
    expect(questionsLeft(anchor, tally.accepted)).toBe(70);
  });

  it('a higher count from another device is believed, on either reply', () => {
    let tally = emptyTally();
    tally = recordAccepted(tally, 1_000);
    let anchor = anchorFromAnswer(null, { questions_used_today: 10, daily_limit: 100 }, tally.accepted);
    anchor = reconcile(anchor, { questions_used_today: 25, daily_limit: 100 }, stampTally(tally, 2_000));
    expect(questionsLeft(anchor, tally.accepted)).toBe(75);
    tally = recordAccepted(tally, 60_000);
    anchor = anchorFromAnswer(anchor, { questions_used_today: 35, daily_limit: 100 }, tally.accepted);
    expect(questionsLeft(anchor, tally.accepted)).toBe(65);
  });
});

describe('the Practice flow with answer-reply counts', () => {
  const SCOPE = 'physics|';
  let now = 0;
  beforeEach(() => {
    now = 1_700_000_000_000;
    jest.spyOn(Date, 'now').mockImplementation(() => now);
  });
  afterEach(() => jest.restoreAllMocks());

  /** applyResult then the prefetch it fires, as app/practice.tsx does them. */
  function answerAndPrefetch(
    lib: ReturnType<typeof practiceScreen>,
    server: ReturnType<typeof fakeServer>,
    newApi: boolean,
    shown: ReturnType<typeof lib.foldQuotaReply>
  ) {
    const reply = server.answer(newApi);
    lib.noteAnswerAccepted();
    const counted = lib.foldAnswerReply(reply);
    if (newApi) expect(counted).not.toBeNull();
    else expect(counted).toBeNull();
    const afterAnswer = counted ?? shown;
    lib.holdQueuedQuestion(server.next(), SCOPE, lib.stampAnswerTally());
    return afterAnswer;
  }

  it('new API: 100 -> 99 on the first answer, 95 after five, queued nexts never raise it', () => {
    const lib = practiceScreen();
    const server = fakeServer();
    let shown = lib.foldQuotaReply(server.next(), lib.stampAnswerTally());
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(100);
    for (let i = 1; i <= 5; i++) {
      shown = answerAndPrefetch(lib, server, true, shown);
      expect(questionsLeft(shown, lib.answersAccepted())).toBe(100 - i);
      now += 1_500;
      server.settle();
      now += 20_000;
      const ready = lib.takeQueuedQuestion(SCOPE)!;
      shown = lib.foldQuotaReply(ready.question, ready.stamp);
      expect(questionsLeft(shown, lib.answersAccepted())).toBe(100 - i);
    }
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(95);
  });

  it('old API (no fields on the answer reply): still 95 after five via the tally', () => {
    const lib = practiceScreen();
    const server = fakeServer();
    let shown = lib.foldQuotaReply(server.next(), lib.stampAnswerTally());
    for (let i = 1; i <= 5; i++) {
      shown = answerAndPrefetch(lib, server, false, shown);
      expect(questionsLeft(shown, lib.answersAccepted())).toBe(100 - i);
      now += 1_500;
      server.settle();
      now += 20_000;
      const ready = lib.takeQueuedQuestion(SCOPE)!;
      shown = lib.foldQuotaReply(ready.question, ready.stamp);
    }
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(95);
  });

  it('a mixture of new- and old-API replies, queued and live: 95', () => {
    const lib = practiceScreen();
    const server = fakeServer();
    let shown = lib.foldQuotaReply(server.next(), lib.stampAnswerTally());
    const plan: [newApi: boolean, viaQueue: boolean][] = [
      [true, true],
      [false, false],
      [true, false],
      [false, true],
      [true, true],
    ];
    let i = 0;
    for (const [newApi, viaQueue] of plan) {
      i += 1;
      shown = answerAndPrefetch(lib, server, newApi, shown);
      expect(questionsLeft(shown, lib.answersAccepted())).toBe(100 - i);
      if (viaQueue) {
        now += 1_500;
        server.settle();
        const ready = lib.takeQueuedQuestion(SCOPE)!;
        shown = lib.foldQuotaReply(ready.question, ready.stamp);
      } else {
        lib.clearQueuedQuestion();
        now += 300; // a fast live Next before the row is written
        shown = lib.foldQuotaReply(server.next(), lib.stampAnswerTally());
        now += 1_200;
        server.settle();
      }
      expect(questionsLeft(shown, lib.answersAccepted())).toBe(100 - i);
    }
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(95);
  });

  it('24 h rollover reported on an answer reply moves the line down', () => {
    const lib = practiceScreen();
    const server = fakeServer(50);
    let shown = lib.foldQuotaReply(server.next(), lib.stampAnswerTally());
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(50);
    now += 60 * 60_000;
    server.expire(12);
    shown = answerAndPrefetch(lib, server, true, shown);
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(61);
    now += 1_500;
    server.settle();
    const ready = lib.takeQueuedQuestion(SCOPE)!;
    shown = lib.foldQuotaReply(ready.question, ready.stamp);
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(61);
  });

  it('another device answering shows up on the next answer reply', () => {
    const lib = practiceScreen();
    const server = fakeServer(10);
    let shown = lib.foldQuotaReply(server.next(), lib.stampAnswerTally());
    shown = answerAndPrefetch(lib, server, true, shown);
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(89);
    now += 1_500;
    server.settle();
    // Six answers on a tablet meanwhile.
    server.expire(-6);
    lib.clearQueuedQuestion();
    shown = answerAndPrefetch(lib, server, true, shown);
    expect(questionsLeft(shown, lib.answersAccepted())).toBe(82);
  });
});

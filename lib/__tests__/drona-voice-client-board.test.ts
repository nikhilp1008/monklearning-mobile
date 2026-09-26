/**
 * The board writes each board event once — and only once per event, not once
 * per piece of text.
 *
 * Why this exists: a live maths class (Sequences: General Term and Recursive
 * Definitions) showed two lines twice each. The reveal probe had already caught
 * the mechanism in an earlier class: one board event, revealed by two different
 * sentences of ONE turn —
 *
 *   REVEALED seq=6 type=text … carriedBy=onItemStart(t_1790389605449_s3-10)
 *   REVEALED seq=6 type=text … carriedBy=onItemStart(t_1790389605449_s6-40)
 *
 * That is the server's pairing rule (monk-learning-api,
 * app/drona/live_session_ws.py:493-495): sentence N carries the event whose
 * `seq` is N, else — BY POSITION — the Nth event of the turn. With seqs
 * [1, 2, 6], sentence 3 has no seq-3 event and takes the third one, seq 6;
 * sentence 6 then takes seq 6 by match. One event, two carriers, and the screen
 * appended whatever it was handed.
 *
 * `seq` alone cannot be the identity: the server numbers it per TURN, so seq 1
 * recurs every turn, and a line the teacher genuinely restates in a later turn
 * has to be written again. These drive the real DronaVoiceClient through its
 * socket and a stand-in playback queue, and build the board with the same two
 * reducers the classroom uses — so what is asserted is what the student sees.
 */
import {
  appendBoardEvent,
  applyBoardReplay,
  DronaVoiceClient,
  type BoardEvent,
} from '@/lib/drona-voice-client';

jest.mock('@/lib/widgets/registry', () => ({ REGISTRY_MANIFEST: [] }));
jest.mock('@/lib/pcm-player', () => ({ pcmAvailable: false }));
jest.mock('@/lib/pcm-playback-queue', () => ({ PcmPlaybackQueue: class {} }));
/**
 * The file-based queue's contract (onItemStart when a clip starts, onQueueDrained
 * when it runs dry, `idle`), with the clock in the test's hands: a clip starts
 * when the test says so, which is what lets a fixture put a reveal exactly
 * before or after a flush.
 */
jest.mock('@/lib/audio-playback-queue', () => {
  class FakePlaybackQueue {
    static instances: FakePlaybackQueue[] = [];
    onItemStart?: (id: string) => void;
    onQueueDrained?: () => void;
    queued: string[] = [];
    playing = false;
    constructor() {
      FakePlaybackQueue.instances.push(this);
    }
    get idle() {
      return !this.playing && this.queued.length === 0;
    }
    enqueue(item: { id: string }) {
      this.queued.push(item.id);
    }
    /** The next clip begins — AudioPlaybackQueue.advance's onItemStart. */
    startNext() {
      const id = this.queued.shift();
      if (id === undefined) return;
      this.playing = true;
      this.onItemStart?.(id);
    }
    /** Everything queued plays, and the queue runs dry. */
    playToEnd() {
      while (this.queued.length) this.startNext();
      this.playing = false;
      this.onQueueDrained?.();
    }
    clear() {
      this.queued = [];
      this.playing = false;
    }
    destroy() {
      this.clear();
    }
    pause() {}
    resume() {}
  }
  return { AudioPlaybackQueue: FakePlaybackQueue };
});

interface FakeQueue {
  queued: string[];
  startNext(): void;
  playToEnd(): void;
}

/** Just enough WebSocket for the client: open, receive, drop. */
class FakeSocket {
  static CONNECTING = 0;
  static OPEN = 1;
  static CLOSING = 2;
  static CLOSED = 3;
  static all: FakeSocket[] = [];
  readyState = FakeSocket.CONNECTING;
  binaryType = '';
  onopen: (() => void) | null = null;
  onmessage: ((event: { data: string }) => void) | null = null;
  onerror: (() => void) | null = null;
  onclose: ((event: { code?: number }) => void) | null = null;
  constructor(readonly url: string) {
    FakeSocket.all.push(this);
  }
  send() {}
  close() {
    this.readyState = FakeSocket.CLOSED;
  }
  open() {
    this.readyState = FakeSocket.OPEN;
    this.onopen?.();
  }
  receive(msg: object) {
    this.onmessage?.({ data: JSON.stringify(msg) });
  }
  /** The network goes: an abnormal close, which the client retries. */
  drop() {
    this.readyState = FakeSocket.CLOSED;
    this.onclose?.({ code: 1006 });
  }
}

const realWebSocket = global.WebSocket;
beforeAll(() => {
  (global as unknown as { WebSocket: unknown }).WebSocket = FakeSocket;
});
afterAll(() => {
  (global as unknown as { WebSocket: unknown }).WebSocket = realWebSocket;
});

let openClients: DronaVoiceClient[] = [];
beforeEach(() => {
  jest.useFakeTimers();
  FakeSocket.all = [];
});
afterEach(() => {
  openClients.forEach((c) => c.disconnect());
  openClients = [];
  jest.useRealTimers();
});

async function flushMicrotasks() {
  for (let i = 0; i < 5; i += 1) {
    await Promise.resolve();
  }
}

/** A connected client whose board is built exactly the way the classroom builds it. */
async function joinClass() {
  let board: BoardEvent[] = [];
  const client = new DronaVoiceClient('session-1', async () => 'token', 'https://api.test', {
    onBoardReveal: (event) => {
      board = appendBoardEvent(board, event);
    },
    onBoardReplay: (events) => {
      board = applyBoardReplay(board, events);
    },
  });
  openClients.push(client);
  client.connect();
  await flushMicrotasks();
  const socket = () => FakeSocket.all[FakeSocket.all.length - 1];
  socket().open();
  const { AudioPlaybackQueue } = jest.requireMock('@/lib/audio-playback-queue') as {
    AudioPlaybackQueue: { instances: FakeQueue[] };
  };
  const queue = AudioPlaybackQueue.instances[AudioPlaybackQueue.instances.length - 1];
  return {
    client,
    queue,
    /** A frame from the server, on whichever socket is current. */
    send: (msg: object) => socket().receive(msg),
    /** The board as the student reads it, top to bottom. */
    lines: () => board.map((e) => e.text ?? e.latex ?? `[${e.type}]`),
    /** The network drops and the client's own backoff brings it back. */
    async reconnect() {
      socket().drop();
      jest.advanceTimersByTime(1000);
      await flushMicrotasks();
      socket().open();
    },
  };
}

const line = (seq: number, text: string): BoardEvent => ({ seq, type: 'text', text, emphasis: 'normal' });

/** One sentence's audio frame, as live_session_ws.py sends it (its first part). */
const say = (sentenceId: string, boardEvent: BoardEvent | null = null) => ({
  type: 'audio_chunk',
  sentence_id: sentenceId,
  audio: 'AAAAAAAA',
  speech: `(${sentenceId})`,
  board_event: boardEvent,
  continuation: false,
  duration_ms: 1000,
});

// The two lines the simulator showed twice, verbatim.
const GENERAL_TERM =
  'The symbol aₙ denotes the general term or nth term. Feed in the position n, get out the term aₙ.';
const ORDER_MATTERS =
  'Order matters: 1, 1, 2 is a valid sequence. As a set it would collapse to {1, 2}.';

describe('one board event is one line on the board', () => {
  it('writes an event once when the server pairs it with two sentences (the probe log, reproduced)', async () => {
    const c = await joinClass();
    const turn = [
      line(1, 'A sequence is a list of numbers in a definite order.'),
      line(2, 'Each number in the list is called a term.'),
      line(6, GENERAL_TERM),
    ];
    c.send({ type: 'board_events', events: turn });
    // live_session_ws.py:493-495 over seqs [1, 2, 6]: s3 has no seq-3 event
    // and takes events[2] by position; s6 takes seq 6 by match.
    c.send(say('t_1790389605449_s1', turn[0]));
    c.send(say('t_1790389605449_s2', turn[1]));
    c.send(say('t_1790389605449_s3', turn[2]));
    c.send(say('t_1790389605449_s4'));
    c.send(say('t_1790389605449_s5'));
    c.send(say('t_1790389605449_s6', turn[2]));
    c.send({ type: 'turn_complete' });
    c.queue.playToEnd();

    expect(c.lines()).toEqual([
      'A sequence is a list of numbers in a definite order.',
      'Each number in the list is called a term.',
      GENERAL_TERM,
    ]);
  });

  it('writes both lines once when one turn double-pairs two of them (the simulator symptom)', async () => {
    const c = await joinClass();
    // seqs [2, 4, 6] — "the sentence that generated it", as prompts/tutor.md
    // tells the model to number them. The pairing rule gives
    // s1->2, s2->2, s3->6, s4->4, s6->6: two events, each carried twice.
    const turn = [
      line(2, GENERAL_TERM),
      line(4, 'A recursive definition gives the first term and a rule for the next.'),
      line(6, ORDER_MATTERS),
    ];
    c.send({ type: 'board_events', events: turn });
    c.send(say('t_1_s1', turn[0]));
    c.send(say('t_1_s2', turn[0]));
    c.send(say('t_1_s3', turn[2]));
    c.send(say('t_1_s4', turn[1]));
    c.send(say('t_1_s5'));
    c.send(say('t_1_s6', turn[2]));
    c.send({ type: 'turn_complete' });
    c.queue.playToEnd();

    // Written where its FIRST carrier played. Which sentence should carry
    // seq 6 is the server's pairing to fix; the board's job is to hold it once.
    expect(c.lines()).toEqual([
      GENERAL_TERM,
      ORDER_MATTERS,
      'A recursive definition gives the first term and a rule for the next.',
    ]);
  });

  it('keeps two different events of one sentence apart even though they share a seq', async () => {
    const c = await joinClass();
    const turn = [line(1, 'aₙ = 2n + 1'), line(1, 'so a₁ = 3'), line(2, 'and a₂ = 5')];
    c.send({ type: 'board_events', events: turn });
    c.send(say('t_1_s1', turn[0]));
    c.send(say('t_1_s2', turn[2]));
    c.send({ type: 'turn_complete' });
    c.queue.playToEnd();

    // The second seq-1 line was never carried, so the end-of-turn safety net
    // writes it; a key of (turn, seq) alone would have folded it into the first.
    expect(c.lines()).toEqual(['aₙ = 2n + 1', 'and a₂ = 5', 'so a₁ = 3']);
  });
});

describe('the end-of-turn flush', () => {
  it('does not write again an event its audio already wrote', async () => {
    const c = await joinClass();
    const turn = [line(1, 'Line A'), line(2, 'Line B'), line(3, 'Line C')];
    c.send({ type: 'board_events', events: turn });
    c.send(say('t_1_s1', turn[0]));
    c.send(say('t_1_s2', turn[1]));
    // Sentence 3's synthesis failed: its line only reaches the board through
    // the flush.
    c.send({ type: 'turn_complete' });
    c.queue.playToEnd();

    expect(c.lines()).toEqual(['Line A', 'Line B', 'Line C']);
  });

  it('does not write again a line the student saw before cutting in, when the resumed lesson flushes its parked copy', async () => {
    const c = await joinClass();
    // Turn 1 is interrupted while sentence 1 is still synthesizing, after its
    // first part (which carries line A) has started playing.
    // live_session_ws.py:557 only counts a sentence once its synthesis ENDS, so
    // the park at :1070 slices from index 0 and parks A along with B and C.
    const interrupted = [line(1, 'Line A'), line(2, 'Line B'), line(3, 'Line C')];
    c.send({ type: 'board_events', events: interrupted });
    c.send(say('t_100_s1', interrupted[0]));
    c.queue.startNext();
    expect(c.lines()).toEqual(['Line A']);
    c.client.sendPttStart();

    // The answer turn, then the parked lesson (:722-725 re-sends the parked
    // events as their own board_events frame). Resumed sentence 1's synthesis
    // fails, so A's parked copy is left to the flush.
    c.send({ type: 'board_events', events: [line(1, 'The answer')] });
    c.send(say('t_200_s1', line(1, 'The answer')));
    c.send({ type: 'board_events', events: interrupted });
    c.send(say('t_200_resume_s2', interrupted[1]));
    c.send(say('t_200_resume_s3', interrupted[2]));
    c.send(say('t_200_s2'));
    c.send({ type: 'turn_complete' });
    c.queue.playToEnd();

    expect(c.lines()).toEqual(['Line A', 'The answer', 'Line B', 'Line C']);
  });

  it("does not write the next turn's board ahead of its audio, and so its audio does not write it again", async () => {
    const c = await joinClass();
    const first = [line(1, 'Line A'), line(2, 'Line B')];
    c.send({ type: 'board_events', events: first });
    c.send(say('t_100_s1', first[0]));
    c.send(say('t_100_s2', first[1]));
    c.send({ type: 'turn_complete' });

    // The server auto-advances straight into the next turn (live_session_ws.py
    // :881-883), so its board lands while this turn's audio is still draining.
    const next = [line(1, 'Line C'), line(2, 'Line D')];
    c.send({ type: 'board_events', events: next });
    // The first turn's audio runs out before the next turn's first sentence has
    // been synthesized: the queue drains and the held turn is flushed.
    c.queue.playToEnd();
    expect(c.lines()).toEqual(['Line A', 'Line B']);

    c.send(say('t_200_s1', next[0]));
    c.send(say('t_200_s2', next[1]));
    c.send({ type: 'turn_complete' });
    c.queue.playToEnd();

    expect(c.lines()).toEqual(['Line A', 'Line B', 'Line C', 'Line D']);
  });

  it('a line the safety net already wrote is not written again by a late carrier', async () => {
    const c = await joinClass();
    const turn = [line(1, 'Line A'), line(2, 'Line B')];
    c.send({ type: 'board_events', events: turn });
    c.send(say('t_1_s1', turn[0]));
    c.send({ type: 'turn_error', message: 'Something went wrong — retrying turn' });
    // Fifteen seconds with no frame: TURN_ERROR_RECOVERY_MS releases the turn
    // and the safety net writes B, whose sentence has not arrived.
    jest.advanceTimersByTime(15000);
    // Then the turn's last sentence lands after all, carrying B.
    c.send(say('t_1_s2', turn[1]));
    c.send({ type: 'turn_complete' });
    c.queue.playToEnd();

    expect(c.lines()).toEqual(['Line B', 'Line A']);
  });
});

describe('a line repeated in a later turn', () => {
  it('is written again: same seq, same words, different turn', async () => {
    const c = await joinClass();
    c.send({ type: 'board_events', events: [line(1, ORDER_MATTERS)] });
    c.send(say('t_100_s1', line(1, ORDER_MATTERS)));
    c.send({ type: 'turn_complete' });
    c.queue.playToEnd();

    c.send({ type: 'board_events', events: [line(1, ORDER_MATTERS)] });
    c.send(say('t_200_s1', line(1, ORDER_MATTERS)));
    c.send({ type: 'turn_complete' });
    c.queue.playToEnd();

    expect(c.lines()).toEqual([ORDER_MATTERS, ORDER_MATTERS]);
  });

  it('is written again when the teacher restates it right after the student cuts in', async () => {
    const c = await joinClass();
    c.send({ type: 'board_events', events: [line(1, ORDER_MATTERS), line(2, 'Line B')] });
    c.send(say('t_100_s1', line(1, ORDER_MATTERS)));
    c.queue.startNext();
    c.client.sendPttStart();

    // A new turn, not a resumed one: none of its sentences is a `_resume_` one.
    c.send({ type: 'board_events', events: [line(1, ORDER_MATTERS)] });
    c.send(say('t_200_s1', line(1, ORDER_MATTERS)));
    c.send({ type: 'turn_complete' });
    c.queue.playToEnd();

    expect(c.lines()).toEqual([ORDER_MATTERS, ORDER_MATTERS]);
  });
});

describe('a resumed lesson', () => {
  it('does not rewrite the line the student saw before cutting in', async () => {
    const c = await joinClass();
    const interrupted = [line(1, 'Line A'), line(2, 'Line B'), line(3, 'Line C')];
    c.send({ type: 'board_events', events: interrupted });
    c.send(say('t_100_s1', interrupted[0]));
    c.queue.startNext();
    c.client.sendPttStart();

    c.send({ type: 'board_events', events: [line(1, 'The answer')] });
    c.send(say('t_200_s1', line(1, 'The answer')));
    c.send({ type: 'board_events', events: interrupted });
    // "Right — back to where we were." + sentence 1 again, carrying A again.
    c.send(say('t_200_resume_s1', interrupted[0]));
    c.send(say('t_200_resume_s2', interrupted[1]));
    c.send(say('t_200_resume_s3', interrupted[2]));
    c.send(say('t_200_s2'));
    c.send({ type: 'turn_complete' });
    c.queue.playToEnd();

    expect(c.lines()).toEqual(['Line A', 'The answer', 'Line B', 'Line C']);
  });
});

describe('a board replay', () => {
  it('after reveals, on a reconnect mid-turn, does not duplicate anything', async () => {
    const c = await joinClass();
    const turn = [line(1, 'Line A'), line(2, 'Line B'), line(3, 'Line C')];
    c.send({ type: 'board_events', events: turn });
    c.send(say('t_1_s1', turn[0]));
    c.send(say('t_1_s2', turn[1]));
    c.send(say('t_1_s3', turn[2]));
    c.queue.startNext();
    c.queue.startNext();
    expect(c.lines()).toEqual(['Line A', 'Line B']);

    // The phone drops and comes back. The new connection replays every turn
    // the server has saved (live_session_ws.py:416-435) — including this one.
    await c.reconnect();
    c.send({ type: 'board_replay', events: turn });

    // The audio already queued before the drop plays on.
    c.queue.playToEnd();

    expect(c.lines()).toEqual(['Line A', 'Line B', 'Line C']);
  });

  it('paints history on a fresh board, merges a second replay, and still lets a later turn restate a line', async () => {
    const c = await joinClass();
    c.send({ type: 'board_replay', events: [line(1, 'Earlier A'), line(2, 'Earlier B')] });
    expect(c.lines()).toEqual(['Earlier A', 'Earlier B']);

    // A reconnect before the first live turn: the server's history, now longer.
    await c.reconnect();
    c.send({
      type: 'board_replay',
      events: [line(1, 'Earlier A'), line(2, 'Earlier B'), line(1, 'Earlier C')],
    });
    expect(c.lines()).toEqual(['Earlier A', 'Earlier B', 'Earlier C']);

    c.send({ type: 'board_events', events: [line(1, 'Earlier B')] });
    c.send(say('t_9_s1', line(1, 'Earlier B')));
    c.send({ type: 'turn_complete' });
    c.queue.playToEnd();

    expect(c.lines()).toEqual(['Earlier A', 'Earlier B', 'Earlier C', 'Earlier B']);
  });
});

describe('a reconnect that cuts a turn off', () => {
  it('does not write the re-taught turn a second time', async () => {
    const c = await joinClass();
    // An early-flushed planned turn: its board and first sentences went out
    // before the turn was saved (tutor.py's EARLY FLUSH yields mid-LLM-call;
    // the drona_sessions update and drona_turns insert come after it ends).
    const turn = [line(1, 'Line A'), line(2, 'Line B'), line(3, 'Line C')];
    c.send({ type: 'board_events', events: turn });
    c.send(say('t_100_s1', turn[0]));
    c.send(say('t_100_s2', turn[1]));
    c.queue.startNext();

    // The socket drops mid-turn. The takeover aborts the unsaved turn, the
    // phase is still `teaching`, and the new connection re-teaches it
    // (live_session_ws.py:1142-1145): the same authored lines, a new turn.
    await c.reconnect();
    c.send({ type: 'board_events', events: turn });
    c.send(say('t_200_s1', turn[0]));
    c.send(say('t_200_s2', turn[1]));
    c.send(say('t_200_s3', turn[2]));
    c.send({ type: 'turn_complete' });
    c.queue.playToEnd();

    expect(c.lines()).toEqual(['Line A', 'Line B', 'Line C']);
  });
});

describe('the board reducers', () => {
  const keyed = (key: string, text: string): BoardEvent => ({ ...line(1, text), key });

  it('appendBoardEvent is idempotent on key, and hands back the same array when nothing changed', () => {
    const board = appendBoardEvent([], keyed('1:1', 'Line A'));
    const again = appendBoardEvent(board, keyed('1:1', 'Line A'));
    expect(again).toBe(board);
    expect(again).toHaveLength(1);
  });

  it('appendBoardEvent keeps two events with identical words and different keys', () => {
    const board = appendBoardEvent(appendBoardEvent([], keyed('1:1', 'Line A')), keyed('2:1', 'Line A'));
    expect(board.map((e) => e.key)).toEqual(['1:1', '2:1']);
  });

  it('applyBoardReplay adds only rows the board lacks and never drops one', () => {
    const board = [keyed('h:0', 'Earlier A'), keyed('3:1', 'Live line')];
    const next = applyBoardReplay(board, [keyed('h:0', 'Earlier A'), keyed('h:1', 'Earlier B')]);
    expect(next.map((e) => e.key)).toEqual(['h:0', '3:1', 'h:1']);
  });
});

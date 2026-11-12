/**
 * The live class survives a bad connection.
 *
 * Promoted from the 2026-10-04 idle/sync audit harnesses (idle.test.ts and
 * audit-sync.test.ts), which reproduced each of these against the real
 * DronaVoiceClient and a scripted socket. Each case here failed on 7c5e64d and
 * passes now; the comment on a case says what the failure was.
 *
 * Same seam as drona-voice-client-board.test.ts: the real client, a fake
 * WebSocket the test drives, and a stand-in playback queue whose clock the test
 * holds.
 */
import {
  DronaVoiceClient,
  PING_INTERVAL_MS,
  PONG_TIMEOUT_MS,
  SLOW_RETRY_MS,
  type DronaAnswerResult,
  type DronaState,
  type DronaVoiceHandlers,
} from '@/lib/drona-voice-client';

jest.mock('@/lib/widgets/registry', () => ({ REGISTRY_MANIFEST: [] }));
jest.mock('@/lib/pcm-player', () => ({ pcmAvailable: false }));
jest.mock('@/lib/pcm-playback-queue', () => ({ PcmPlaybackQueue: class {} }));
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
    startNext() {
      const id = this.queued.shift();
      if (id === undefined) return;
      this.playing = true;
      this.onItemStart?.(id);
    }
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
  sent: string[] = [];
  constructor(readonly url: string) {
    FakeSocket.all.push(this);
  }
  send(data: string) {
    this.sent.push(data);
  }
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
  drop() {
    this.readyState = FakeSocket.CLOSED;
    this.onclose?.({ code: 1006 });
  }
  /** Every JSON frame the client sent on this socket, parsed. */
  frames(): Record<string, unknown>[] {
    return this.sent.map((s) => JSON.parse(s) as Record<string, unknown>);
  }
  framesOfType(type: string) {
    return this.frames().filter((f) => f.type === type);
  }
}

const realWebSocket = global.WebSocket;
beforeAll(() => {
  (global as unknown as { WebSocket: unknown }).WebSocket = FakeSocket;
});
afterAll(() => {
  (global as unknown as { WebSocket: unknown }).WebSocket = realWebSocket;
});

const clients: DronaVoiceClient[] = [];
beforeEach(() => {
  jest.useFakeTimers();
  FakeSocket.all = [];
});
afterEach(() => {
  clients.forEach((c) => c.disconnect());
  clients.length = 0;
  jest.useRealTimers();
});

async function flush() {
  for (let i = 0; i < 6; i += 1) await Promise.resolve();
}

async function join(extra: DronaVoiceHandlers = {}) {
  const states: DronaState[] = [];
  const client = new DronaVoiceClient('s1', async () => 'tok', 'https://api.test', {
    onState: (s) => states.push(s),
    ...extra,
  });
  clients.push(client);
  client.connect();
  await flush();
  const sock = () => FakeSocket.all[FakeSocket.all.length - 1];
  sock().open();
  const Q = (jest.requireMock('@/lib/audio-playback-queue') as {
    AudioPlaybackQueue: { instances: FakeQueue[] };
  }).AudioPlaybackQueue;
  const queue = Q.instances[Q.instances.length - 1];
  return { client, sock, queue, states };
}

const say = (id: string) => ({
  type: 'audio_chunk',
  sentence_id: id,
  audio: 'AAAAAAAA',
  speech: id,
  board_event: null,
  board_events: [],
  continuation: false,
  duration_ms: 1000,
});
const CHIPS = { type: 'state', phase: 'awaiting_answer', check_options: ['A', 'B', 'C', 'D'], question_text: 'Which?' };
const chipFrames = (states: DronaState[]) => states.filter((s) => s.check_options?.length);

describe('1. a drop mid-turn does not strand the question', () => {
  it('mounts the resume frame chips after the socket comes back', async () => {
    const { sock, queue, states } = await join();
    sock().receive({ type: 'state', phase: 'teaching', current_segment: 1 });
    sock().receive(say('t_1_s1')); // a turn is in flight
    sock().drop(); // signal lost before turn_complete
    jest.advanceTimersByTime(1000);
    await flush();
    sock().open();
    // The server saved the turn, so the new connection's phase is
    // awaiting_answer: a bare resume frame, no turn behind it.
    sock().receive(CHIPS);
    queue.playToEnd();
    expect(chipFrames(states)).toHaveLength(1);
  });

  it('control: a resume frame with no turn in flight was always delivered', async () => {
    const { sock, states } = await join();
    sock().receive(CHIPS);
    expect(chipFrames(states)).toHaveLength(1);
  });

  it('still holds chips for a turn that is really running on a healthy socket', async () => {
    const { sock, states } = await join();
    sock().receive(say('t_1_s1'));
    sock().receive(CHIPS);
    expect(chipFrames(states)).toHaveLength(0);
  });
});

describe('4. a half-open socket is noticed', () => {
  it('sends a ping on an idle socket', async () => {
    const { sock } = await join();
    jest.advanceTimersByTime(PING_INTERVAL_MS + 1);
    expect(sock().framesOfType('ping').length).toBeGreaterThanOrEqual(1);
  });

  it('reconnects when the ping goes unanswered for 10 seconds', async () => {
    expect(PONG_TIMEOUT_MS).toBe(10000);
    const { sock } = await join();
    const first = sock();
    jest.advanceTimersByTime(PING_INTERVAL_MS + PONG_TIMEOUT_MS + 1);
    jest.advanceTimersByTime(1500); // the existing first backoff step
    await flush();
    expect(FakeSocket.all.length).toBe(2);
    expect(sock()).not.toBe(first);
  });

  it('stays on one socket while the pongs come back', async () => {
    const { sock } = await join();
    for (let i = 0; i < 6; i += 1) {
      jest.advanceTimersByTime(PING_INTERVAL_MS + 1);
      sock().receive({ type: 'pong', timestamp: 1 });
    }
    jest.advanceTimersByTime(PONG_TIMEOUT_MS * 2);
    await flush();
    expect(FakeSocket.all.length).toBe(1);
  });

  it('counts any frame from the server as a sign of life, not only the pong', async () => {
    const { sock } = await join();
    jest.advanceTimersByTime(PING_INTERVAL_MS + 1);
    sock().receive({ type: 'ping', heartbeat: true });
    jest.advanceTimersByTime(PONG_TIMEOUT_MS * 2);
    await flush();
    expect(FakeSocket.all.length).toBe(1);
  });
});

describe('4. an answer tapped while the socket is not open is never dropped', () => {
  it('queues one answer and sends it when the socket reopens', async () => {
    const pending: string[] = [];
    const { client, sock } = await join({ onPendingAnswer: (e) => pending.push(e) });
    sock().drop();
    expect(client.sendAnswer('Zero')).toBe('queued');
    expect(pending).toEqual(['queued']);
    jest.advanceTimersByTime(1000);
    await flush();
    sock().open();
    const sent = sock().framesOfType('utterance');
    expect(sent).toHaveLength(1);
    expect(sent[0].text).toBe('Zero');
    expect(pending).toEqual(['queued', 'sent']);
  });

  it('keeps ONE: a second tap before the next state is ignored, not queued behind it', async () => {
    const { client, sock } = await join();
    sock().drop();
    expect(client.sendAnswer('A')).toBe('queued');
    expect(client.sendAnswer('B')).toBe('ignored');
    jest.advanceTimersByTime(1000);
    await flush();
    sock().open();
    expect(sock().framesOfType('utterance').map((f) => f.text)).toEqual(['A']);
  });

  it('resends an answer the server never acknowledged, under the SAME client_msg_id', async () => {
    // The socket looked open when the tap landed but was already dead: the
    // frame went into the void. The reconnect must not lose it.
    const { client, sock } = await join();
    const first = sock();
    expect(client.sendAnswer('Zero')).toBe('sent');
    const id = first.framesOfType('utterance')[0].client_msg_id;
    first.drop();
    jest.advanceTimersByTime(1000);
    await flush();
    sock().open();
    const resent = sock().framesOfType('utterance');
    expect(resent).toHaveLength(1);
    expect(resent[0].client_msg_id).toBe(id);
  });

  it('does not resend an answer the server did acknowledge', async () => {
    const { client, sock } = await join();
    client.sendAnswer('Zero');
    sock().receive({ type: 'state', no_response_timer_paused: true }); // the server has it
    sock().drop();
    jest.advanceTimersByTime(1000);
    await flush();
    sock().open();
    expect(sock().framesOfType('utterance')).toHaveLength(0);
  });

  it('says so when an answer waited too long to be worth sending', async () => {
    const errors: string[] = [];
    const { client, sock } = await join({ onError: (m) => errors.push(m) });
    sock().drop();
    client.sendAnswer('Zero');
    jest.advanceTimersByTime(125000);
    await flush();
    sock().open();
    expect(sock().framesOfType('utterance')).toHaveLength(0);
    expect(errors.join(' ')).toMatch(/answer/i);
  });
});

describe('4. coming back online retries', () => {
  async function exhaust() {
    const errors: string[] = [];
    const { client, sock } = await join({ onError: (m) => errors.push(m) });
    jest.advanceTimersByTime(6000); // the first socket proved itself
    sock().drop();
    for (let i = 0; i < 14; i += 1) {
      jest.advanceTimersByTime(8000);
      await flush();
      sock().onerror?.(); // never opens
    }
    return { client, errors, sock };
  }

  it('keeps trying slowly after the quick retries are spent', async () => {
    const { errors } = await exhaust();
    expect(errors.join(' ')).toContain("Couldn't reconnect");
    const before = FakeSocket.all.length;
    jest.advanceTimersByTime(SLOW_RETRY_MS + 100);
    await flush();
    expect(FakeSocket.all.length).toBeGreaterThan(before);
  });

  it('retries at once, with a fresh budget, when the app returns to the foreground', async () => {
    const { client } = await exhaust();
    const before = FakeSocket.all.length;
    client.onForeground();
    await flush();
    expect(FakeSocket.all.length).toBe(before + 1);
  });

  it('on the foreground, probes a socket that claims to be open', async () => {
    const { client, sock } = await join();
    const before = sock().framesOfType('ping').length;
    client.onForeground();
    expect(sock().framesOfType('ping').length).toBe(before + 1);
    jest.advanceTimersByTime(PONG_TIMEOUT_MS + 1500);
    await flush();
    expect(FakeSocket.all.length).toBe(2); // no pong: it was dead
  });

  it('does nothing on the foreground after the class has ended', async () => {
    const { client } = await join();
    client.disconnect();
    client.onForeground();
    await flush();
    expect(FakeSocket.all.length).toBe(1);
  });
});

describe('5. barge-in says how much of the turn was heard', () => {
  it('ptt_start carries heard_through_seq: the last sentence whose audio has started', async () => {
    const { client, sock, queue } = await join();
    sock().receive(say('t_100_s1'));
    sock().receive(say('t_100_s2'));
    sock().receive(say('t_100_s3'));
    queue.startNext(); // s1
    queue.startNext(); // s2 has started playing
    client.sendPttStart();
    const ptt = sock().framesOfType('ptt_start')[0];
    expect(ptt.heard_through_seq).toBe(2);
    expect(Number.isInteger(ptt.heard_through_seq)).toBe(true);
  });

  it('is 0 when nothing of the current turn has played', async () => {
    const { client, sock } = await join();
    sock().receive(say('t_100_s1'));
    client.sendPttStart();
    expect(sock().framesOfType('ptt_start')[0].heard_through_seq).toBe(0);
  });

  it('is 0 when the clip that played belongs to the PREVIOUS turn', async () => {
    const { client, sock, queue } = await join();
    sock().receive(say('t_100_s1'));
    queue.startNext(); // t_100 s1 plays
    sock().receive(say('t_200_s1')); // next turn already received, not yet heard
    client.sendPttStart();
    expect(sock().framesOfType('ptt_start')[0].heard_through_seq).toBe(0);
  });

  it('counts a resumed lesson by its own sentence numbers', async () => {
    const { client, sock, queue } = await join();
    sock().receive(say('t_300_resume_s1'));
    sock().receive(say('t_300_resume_s2'));
    queue.startNext();
    queue.startNext();
    client.sendPttStart();
    expect(sock().framesOfType('ptt_start')[0].heard_through_seq).toBe(2);
  });

  it('interrupt carries it too', async () => {
    const { client, sock, queue } = await join();
    sock().receive(say('t_100_s1'));
    queue.startNext();
    client.interrupt(1200, 'cut here');
    const frame = sock().framesOfType('interrupt')[0];
    expect(frame.heard_through_seq).toBe(1);
    expect(frame.playback_position).toBe(1200);
  });

  it('still clears the audio queue exactly as before', async () => {
    const { client, sock, queue } = await join();
    sock().receive(say('t_100_s1'));
    sock().receive(say('t_100_s2'));
    client.sendPttStart();
    expect(queue.queued).toHaveLength(0);
  });
});

describe('5. frames of an aborted turn already on the wire are dropped (audit P8)', () => {
  it('does not play or reveal what the old turn sends after the student took the floor', async () => {
    const { client, sock, queue } = await join();
    sock().receive(say('t_100_s1'));
    queue.startNext();
    client.sendPttStart();
    // One round trip later, the server's in-flight frames for turn t_100 land.
    sock().receive(say('t_100_s2'));
    sock().receive(say('t_100_s3'));
    expect(queue.queued).toHaveLength(0);
    // The answer turn is a different turn and is heard normally.
    sock().receive(say('t_200_s1'));
    expect(queue.queued).toHaveLength(1);
  });

  it('a chip tap aborts the turn the same way', async () => {
    const { client, sock, queue } = await join();
    sock().receive(say('t_100_s1'));
    client.sendAnswer('A'); // answering does not clear the queue: s1 is still waiting
    sock().receive(say('t_100_s2'));
    expect(queue.queued).toHaveLength(1);
  });
});

describe('6. idempotency', () => {
  it('stamps a distinct client_msg_id on every utterance', async () => {
    const { client, sock } = await join();
    client.sendUtterance('Begin lesson segment');
    sock().receive({ type: 'state', phase: 'teaching' });
    client.sendUtterance('another thing');
    const ids = sock().framesOfType('utterance').map((f) => f.client_msg_id);
    expect(ids).toHaveLength(2);
    expect(ids.every((id) => typeof id === 'string' && (id as string).length >= 16)).toBe(true);
    expect(new Set(ids).size).toBe(2);
  });

  it('stamps the answer too', async () => {
    const { client, sock } = await join();
    client.sendAnswer('Zero');
    const [frame] = sock().framesOfType('utterance');
    expect(typeof frame.client_msg_id).toBe('string');
  });

  it('ignores a second tap on the chips until the next state frame', async () => {
    const { client, sock } = await join();
    expect(client.sendAnswer('A')).toBe('sent');
    expect(client.sendAnswer('A')).toBe('ignored');
    expect(client.sendAnswer('B')).toBe('ignored');
    expect(sock().framesOfType('utterance')).toHaveLength(1);
    sock().receive({ type: 'state', phase: 'awaiting_answer', check_options: ['A', 'B'], question_text: 'Next?' });
    jest.advanceTimersByTime(1);
    expect(client.sendAnswer('B')).toBe('sent');
    expect(sock().framesOfType('utterance')).toHaveLength(2);
  });
});

describe('7. the verdict that rides inside a state frame reaches the screen', () => {
  it('hands state.answer_result to onAnswerResult as a verdict', async () => {
    const results: DronaAnswerResult[] = [];
    const { sock } = await join({ onAnswerResult: (r) => results.push(r) });
    sock().receive({ type: 'state', phase: 'awaiting_answer', check_options: [], question_text: null, answer_result: 'correct' });
    expect(results).toEqual([{ verdict: 'correct' }]);
  });

  it('reads incorrect and partial the same way', async () => {
    const results: DronaAnswerResult[] = [];
    const { sock } = await join({ onAnswerResult: (r) => results.push(r) });
    sock().receive({ type: 'state', phase: 'awaiting_answer', answer_result: 'incorrect' });
    sock().receive({ type: 'state', phase: 'awaiting_answer', answer_result: 'partial' });
    expect(results.map((r) => r.verdict)).toEqual(['incorrect', 'partial']);
  });

  it('says nothing when there is no verdict', async () => {
    const results: DronaAnswerResult[] = [];
    const { sock } = await join({ onAnswerResult: (r) => results.push(r) });
    sock().receive({ type: 'state', phase: 'awaiting_answer', answer_result: null });
    sock().receive({ type: 'state', phase: 'awaiting_answer' });
    expect(results).toEqual([]);
  });

  it('delivers the verdict when it arrives, even though the next question\'s chips are held for the turn', async () => {
    const results: DronaAnswerResult[] = [];
    const { sock, states } = await join({ onAnswerResult: (r) => results.push(r) });
    sock().receive(say('t_1_s1'));
    sock().receive({ ...CHIPS, answer_result: 'correct' });
    expect(results).toEqual([{ verdict: 'correct' }]);
    expect(chipFrames(states)).toHaveLength(0); // the chips still wait for their turn
  });

  it('still honours the standalone answer_result frame', async () => {
    const results: DronaAnswerResult[] = [];
    const { sock } = await join({ onAnswerResult: (r) => results.push(r) });
    sock().receive({ type: 'answer_result', verdict: 'correct', message: 'Yes' });
    expect(results).toHaveLength(1);
  });
});

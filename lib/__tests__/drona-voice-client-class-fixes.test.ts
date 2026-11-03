/**
 * Two live-class bugs, pinned through the real DronaVoiceClient.
 *
 * 1. END MEANS SILENCE. React Native keeps delivering frames that were already
 *    on the bridge after `ws.close()`, and an audio_chunk among them restarted
 *    the player: the class kept talking after the student pressed End.
 *
 * 2. THE QUESTION'S CHIPS WAIT FOR THE QUESTION. A question turn can open with
 *    its state frame (no board lines; the question sentence is synthesised after
 *    the state frame, live_session_ws.py), so `turnInFlight` was still false and
 *    the chips went up before Drona asked. And a drain that belonged to the
 *    previous turn could mount the next turn's question early.
 */
import { DronaVoiceClient, type DronaVoiceHandlers } from '@/lib/drona-voice-client';

jest.mock('@/lib/widgets/registry', () => ({ REGISTRY_MANIFEST: [] }));
jest.mock('@/lib/pcm-player', () => ({ pcmAvailable: false }));
jest.mock('@/lib/pcm-playback-queue', () => ({ PcmPlaybackQueue: class {} }));
jest.mock('@/lib/audio-playback-queue', () => {
  class FakePlaybackQueue {
    static instances: FakePlaybackQueue[] = [];
    onItemStart?: (id: string) => void;
    onQueueDrained?: () => void;
    queued: string[] = [];
    enqueuedEver: string[] = [];
    playing = false;
    destroyed = false;
    constructor() {
      FakePlaybackQueue.instances.push(this);
    }
    get idle() {
      return !this.playing && this.queued.length === 0;
    }
    enqueue(item: { id: string }) {
      this.enqueuedEver.push(item.id);
      this.queued.push(item.id);
    }
    playToEnd() {
      while (this.queued.length) {
        const id = this.queued.shift()!;
        this.playing = true;
        this.onItemStart?.(id);
      }
      this.playing = false;
      this.onQueueDrained?.();
    }
    clear() {
      this.queued = [];
      this.playing = false;
    }
    destroy() {
      this.destroyed = true;
      this.clear();
    }
    paused = false;
    pause() {
      this.paused = true;
    }
    resume() {
      this.paused = false;
    }
    startNext() {
      const id = this.queued.shift();
      if (id === undefined) return;
      this.playing = true;
      this.onItemStart?.(id);
    }
  }
  return { AudioPlaybackQueue: FakePlaybackQueue };
});

interface FakeQueue {
  queued: string[];
  enqueuedEver: string[];
  paused: boolean;
  playToEnd(): void;
  startNext(): void;
}

class FakeSocket {
  static OPEN = 1;
  static CLOSED = 3;
  static all: FakeSocket[] = [];
  readyState = 0;
  binaryType = '';
  onopen: (() => void) | null = null;
  onmessage: ((event: { data: string }) => void) | null = null;
  onerror: (() => void) | null = null;
  onclose: ((event: { code?: number }) => void) | null = null;
  constructor(readonly url: string) {
    FakeSocket.all.push(this);
  }
  sent: string[] = [];
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
  for (let i = 0; i < 5; i += 1) await Promise.resolve();
}

async function joinClass(extra: DronaVoiceHandlers = {}) {
  const shown: string[] = [];
  const client = new DronaVoiceClient('session-1', async () => 'token', 'https://api.test', {
    ...extra,
    onState: (state) => {
      if (state.check_options?.length) shown.push(String(state.question_text ?? 'question'));
      extra.onState?.(state);
    },
  });
  openClients.push(client);
  client.connect();
  await flushMicrotasks();
  const socket = FakeSocket.all[FakeSocket.all.length - 1];
  socket.open();
  const { AudioPlaybackQueue } = jest.requireMock('@/lib/audio-playback-queue') as {
    AudioPlaybackQueue: { instances: FakeQueue[] };
  };
  const queue = AudioPlaybackQueue.instances[AudioPlaybackQueue.instances.length - 1];
  return { client, queue, socket, send: (m: object) => socket.receive(m), shown };
}

const say = (id: string) => ({
  type: 'audio_chunk',
  sentence_id: id,
  audio: 'AAAAAAAA',
  speech: `(${id})`,
  board_event: null,
  continuation: false,
  duration_ms: 1000,
});
const question = (q: string) => ({
  type: 'state',
  phase: 'awaiting_answer',
  check_options: ['a', 'b', 'c'],
  question_text: q,
});

describe('the question card waits for the question', () => {
  it('holds a question whose state frame is the first frame of its turn', async () => {
    const c = await joinClass();
    c.client.sendUtterance('haan, aage chalo');
    c.send(question('Q1'));
    expect(c.shown).toEqual([]); // not before the question is even sent
    c.send(say('t1_s1'));
    expect(c.shown).toEqual([]);
    c.send({ type: 'turn_complete' });
    expect(c.shown).toEqual([]); // still being spoken
    c.queue.playToEnd();
    expect(c.shown).toEqual(['Q1']);
  });

  it('does not let the previous turn\'s drain mount the next turn\'s question', async () => {
    const c = await joinClass();
    c.client.sendUtterance('start');
    c.send(say('A_s1'));
    c.send({ type: 'turn_complete' }); // turn A sent, still playing
    c.send(question('QB')); // turn B auto-advances: its state first
    c.queue.playToEnd(); // A's audio ends before B's question audio arrives
    expect(c.shown).toEqual([]);
    c.send(say('B_s1'));
    c.send({ type: 'turn_complete' });
    c.queue.playToEnd();
    expect(c.shown).toEqual(['QB']);
  });

  it('still shows the resume frame on a fresh socket at once', async () => {
    const c = await joinClass();
    c.send(question('resume'));
    expect(c.shown).toEqual(['resume']);
  });
});

describe('End means silence', () => {
  it('ignores audio still arriving on the socket after disconnect', async () => {
    const c = await joinClass();
    c.send(say('t1_s1'));
    // The listener React Native already captured for frames on the bridge.
    const captured = c.socket.onmessage!;
    c.client.disconnect();
    openClients = [];
    captured({ data: JSON.stringify(say('t1_s2')) });
    c.socket.receive(say('t1_s3'));
    // Only the chunk that arrived before End (queue ids carry a part suffix).
    expect(c.queue.enqueuedEver).toEqual(['t1_s1-0']);
  });

  it('shows nothing that arrives after End', async () => {
    const c = await joinClass();
    const captured = c.socket.onmessage!;
    c.client.disconnect();
    openClients = [];
    captured({ data: JSON.stringify(question('late')) });
    expect(c.shown).toEqual([]);
  });
});


describe('the understanding check-in (time-based)', () => {
  /** n sentences of 1s each, every one started (heard) in turn. */
  const speak = (c: Awaited<ReturnType<typeof joinClass>>, from: number, n: number) => {
    for (let i = from; i < from + n; i += 1) {
      c.send(say(`t1_s${i}`));
      c.queue.startNext();
    }
  };

  it('asks only after 40s of speech, at the start of the next sentence, and pauses Drona', async () => {
    let asked = 0;
    const c = await joinClass({ onCheckin: () => (asked += 1) });
    speak(c, 1, 40); // 40 one-second sentences
    expect(asked).toBe(0);
    expect(c.queue.paused).toBe(false);
    speak(c, 41, 1); // the next sentence begins: a natural pause
    expect(asked).toBe(1);
    expect(c.queue.paused).toBe(true);
  });

  it('"haan" resumes the voice without saying anything to the server', async () => {
    const c = await joinClass({ onCheckin: () => {} });
    speak(c, 1, 41);
    const sentBefore = c.socket.sent.length;
    c.client.answerCheckin('ok');
    expect(c.queue.paused).toBe(false);
    expect(c.socket.sent.length).toBe(sentBefore);
  });

  it('a doubt stops the explanation and is sent as the student speaking', async () => {
    const c = await joinClass({ onCheckin: () => {} });
    speak(c, 1, 41);
    c.client.answerCheckin('doubt', 'Mujhe is part mein thoda doubt hai.');
    expect(c.queue.queued).toEqual([]);
    expect(c.socket.sent.map((x) => JSON.parse(x))).toContainEqual({
      type: 'utterance',
      text: 'Mujhe is part mein thoda doubt hai.',
    });
  });

  it('a student who just spoke resets the clock', async () => {
    let asked = 0;
    const c = await joinClass({ onCheckin: () => (asked += 1) });
    speak(c, 1, 30);
    c.client.sendUtterance('ek sawaal');
    speak(c, 31, 30); // 30s since they spoke
    expect(asked).toBe(0);
  });

  it('never asks while a question is on its way', async () => {
    let asked = 0;
    const c = await joinClass({ onCheckin: () => (asked += 1) });
    c.client.sendUtterance('aage');
    c.send(question('Q'));
    speak(c, 1, 45);
    expect(asked).toBe(0);
  });

  it('never pauses a screen that does not ask', async () => {
    const c = await joinClass();
    speak(c, 1, 60);
    expect(c.queue.paused).toBe(false);
  });
});

describe('pause stops everything', () => {
  it('a question turn that completes during a pause waits for play, however long', async () => {
    const c = await joinClass();
    c.client.sendUtterance('aage');
    c.send(question('Q'));
    c.send(say('q_s1'));
    c.client.pausePlayback();
    c.send({ type: 'turn_complete' }); // used to re-arm the 20 s watchdog
    jest.advanceTimersByTime(120_000);
    expect(c.shown).toEqual([]);
    c.client.resumePlayback();
    expect(c.shown).toEqual([]); // the question sentence is still to be heard
    c.queue.playToEnd();
    expect(c.shown).toEqual(['Q']);
  });

  it('a question whose audio was all heard before the pause shows on play, not before', async () => {
    const c = await joinClass();
    c.client.sendUtterance('aage');
    c.send(question('Q'));
    c.send(say('q_s1'));
    c.queue.playToEnd();
    c.client.pausePlayback();
    c.send({ type: 'turn_complete' }); // queue idle: this used to mount at once
    jest.advanceTimersByTime(60_000);
    expect(c.shown).toEqual([]);
    c.client.resumePlayback();
    expect(c.shown).toEqual(['Q']);
  });

  it('the turn-error release waits for play too', async () => {
    const c = await joinClass();
    c.client.sendUtterance('aage');
    c.send(question('Q'));
    c.client.pausePlayback();
    c.send({ type: 'turn_error', message: 'x' });
    jest.advanceTimersByTime(120_000);
    expect(c.shown).toEqual([]);
    c.client.resumePlayback();
    expect(c.shown).toEqual(['Q']);
  });

  it('never asks the check-in while paused', async () => {
    let asked = 0;
    const c = await joinClass({ onCheckin: () => (asked += 1) });
    for (let i = 1; i <= 40; i += 1) {
      c.send(say(`t1_s${i}`));
      c.queue.startNext();
    }
    c.client.pausePlayback();
    c.send(say('t1_s41'));
    c.queue.startNext(); // even a sentence start the queue reports
    expect(asked).toBe(0);
  });

  it('the card\'s auto "carry on" does not restart a class the student paused', async () => {
    let closed = 0;
    const c = await joinClass({ onCheckin: () => {}, onCheckinClosed: () => (closed += 1) });
    for (let i = 1; i <= 41; i += 1) {
      c.send(say(`t1_s${i}`));
      c.queue.startNext();
    }
    c.client.pausePlayback();
    c.client.answerCheckin('ok'); // the screen's 10 s timeout
    expect(c.queue.paused).toBe(true);
    expect(c.client.isPaused).toBe(true);
  });

  it('play over the check-in card closes it and carries on', async () => {
    let closed = 0;
    const c = await joinClass({ onCheckin: () => {}, onCheckinClosed: () => (closed += 1) });
    for (let i = 1; i <= 41; i += 1) {
      c.send(say(`t1_s${i}`));
      c.queue.startNext();
    }
    c.client.pausePlayback();
    c.client.resumePlayback();
    expect(closed).toBe(1);
    expect(c.queue.paused).toBe(false);
  });

  it('speaking during a pause ends it, so the reply is heard', async () => {
    let ended = 0;
    const c = await joinClass({ onPauseEnded: () => (ended += 1) });
    c.client.pausePlayback();
    c.client.sendPttStart();
    expect(ended).toBe(1);
    expect(c.client.isPaused).toBe(false);
    expect(c.queue.paused).toBe(false);
  });
});

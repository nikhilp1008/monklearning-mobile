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
    pause() {}
    resume() {}
  }
  return { AudioPlaybackQueue: FakePlaybackQueue };
});

interface FakeQueue {
  queued: string[];
  enqueuedEver: string[];
  playToEnd(): void;
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

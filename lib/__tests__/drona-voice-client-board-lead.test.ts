/**
 * The board leads the voice by about two seconds — through the real
 * DronaVoiceClient AND the real PcmPlaybackQueue, with only the native player
 * faked. What is asserted is what the student sees, and WHEN, in audible
 * seconds (`clock.heard`).
 *
 * The comparison that matters is against the same class with the early signal
 * switched off (BOARD_LEAD_S = 0, which is the queue as it was): the caption,
 * the speaking flag, figures, widgets and the cue clock must land at exactly
 * the same moments; only plain written lines move, and only earlier.
 */
import {
  appendBoardEvent,
  DronaVoiceClient,
  type BoardEvent,
  type DronaVoiceHandlers,
} from '@/lib/drona-voice-client';

jest.mock('@/lib/widgets/registry', () => ({ REGISTRY_MANIFEST: [] }));

const mockPlayer = { played: 0 };
jest.mock('@/lib/pcm-player', () => ({
  pcmAvailable: true,
  pcmStart: () => {
    mockPlayer.played = 0;
  },
  pcmStop: () => {},
  pcmFeedBytes: () => {},
  pcmPlayedSeconds: () => mockPlayer.played,
  pcmRecoveries: () => 0,
  pcmTeardown: () => {},
  pcmPause: () => {},
  pcmResume: () => {},
}));

/** Imported unconditionally by the client; never constructed here (pcmAvailable). */
jest.mock('@/lib/audio-playback-queue', () => ({ AudioPlaybackQueue: class {} }));

/** The real queue, built with the lead the test asks for (default: BOARD_LEAD_S). */
jest.mock('@/lib/pcm-playback-queue', () => {
  const actual = jest.requireActual('@/lib/pcm-playback-queue');
  class Queue extends actual.PcmPlaybackQueue {
    constructor() {
      super((globalThis as { __BOARD_LEAD_S?: number }).__BOARD_LEAD_S ?? actual.BOARD_LEAD_S);
    }
  }
  return { ...actual, PcmPlaybackQueue: Queue };
});

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
  mockPlayer.played = 0;
  delete (globalThis as { __BOARD_LEAD_S?: number }).__BOARD_LEAD_S;
});
afterEach(() => {
  openClients.forEach((c) => c.disconnect());
  openClients = [];
  jest.useRealTimers();
});

async function flushMicrotasks() {
  for (let i = 0; i < 5; i += 1) await Promise.resolve();
}

type Seen = { what: string; heard: number };

/** A connected client; everything it tells the screen is logged with `heard`. */
async function joinClass(boardLeadS?: number, extra: DronaVoiceHandlers = {}) {
  if (boardLeadS !== undefined) (globalThis as { __BOARD_LEAD_S?: number }).__BOARD_LEAD_S = boardLeadS;
  const clock = { heard: 0 };
  const log: Seen[] = [];
  const revealCalls: Record<string, number> = {};
  let board: BoardEvent[] = [];
  const client = new DronaVoiceClient('session-1', async () => 'token', 'https://api.test', {
    ...extra,
    onBoardReveal: (event) => {
      revealCalls[event.key ?? '?'] = (revealCalls[event.key ?? '?'] ?? 0) + 1;
      board = appendBoardEvent(board, event);
      log.push({ what: `line:${event.text ?? event.type}`, heard: clock.heard });
    },
    onCaptionReveal: (text) => log.push({ what: `caption:${text}`, heard: clock.heard }),
    onSpeakingChange: (on) => log.push({ what: `speaking:${on}`, heard: clock.heard }),
  });
  openClients.push(client);
  client.connect();
  await flushMicrotasks();
  const socket = () => FakeSocket.all[FakeSocket.all.length - 1];
  socket().open();
  return {
    client,
    clock,
    log,
    revealCalls,
    board: () => board,
    lines: () => board.map((e) => e.text ?? `[${e.type}]`),
    send: (msg: object) => socket().receive(msg),
    /** The audible time at which `what` first happened, or undefined. */
    when: (what: string) => log.find((e) => e.what === what)?.heard,
    /** Real time passes in 100ms ticks; the playhead follows the sound. */
    play(to: number) {
      while (clock.heard < to - 1e-9) {
        clock.heard = Math.round((clock.heard + 0.1) * 10) / 10;
        mockPlayer.played = clock.heard;
        jest.advanceTimersByTime(100);
      }
    },
  };
}

const b64 = (seconds: number) => Buffer.from(new Uint8Array(Math.round(seconds * 24000) * 2)).toString('base64');
const text = (seq: number, t: string): BoardEvent => ({ seq, type: 'text', text: t, emphasis: 'normal' });
const widget = (seq: number): BoardEvent => ({
  seq,
  type: 'diagram',
  payload: {
    widget: 'projectile' as never,
    version: 1,
    params: {},
    cues: [{ seq: seq + 1, patch: { angle: 60 }, caption: 'steeper' }],
  },
});
const svgFigure = (seq: number): BoardEvent => ({ seq, type: 'diagram', svg: '<svg/>' });

/** One sentence's audio frame, `seconds` long, carrying `events`. */
const say = (sentenceId: string, events: BoardEvent[], seconds = 1) => ({
  type: 'audio_chunk',
  sentence_id: sentenceId,
  audio: b64(seconds),
  speech: `(${sentenceId})`,
  board_event: events[0] ?? null,
  board_events: events,
  continuation: false,
  duration_ms: seconds * 1000,
});

/** A turn of `n` one-second sentences, one written line each; all sent at once. */
async function plainTurn(boardLeadS: number | undefined, n = 8) {
  const c = await joinClass(boardLeadS);
  const events = Array.from({ length: n }, (_, k) => text(k + 1, `line ${k}`));
  c.send({ type: 'board_events', events });
  events.forEach((e, k) => c.send(say(`t_1_s${k}`, [e])));
  c.send({ type: 'turn_complete' });
  return { c, events };
}

/** Plays a plain turn out to `to` seconds and tears it down: one fake player
 *  clock, so two runs to compare must not overlap. */
async function playedPlain(boardLeadS: number | undefined, n: number, to: number) {
  const { c } = await plainTurn(boardLeadS, n);
  c.play(to);
  c.client.disconnect();
  return c;
}

describe('written lines lead the voice by about 2s', () => {
  it('every sentence from the fourth on has its line up >= 2s (2.0 to 2.1) before it is heard; the early ones as early as the run allows', async () => {
    const c = await playedPlain(undefined, 10, 11);
    const lead = (k: number) => k - (c.when(`line:line ${k}`) as number); // sentence k is heard at k seconds
    // The opening sentence: nothing earlier exists to lead it with.
    expect(lead(0)).toBe(0);
    // The next one only has the first second to lead by.
    expect(lead(1)).toBeGreaterThanOrEqual(0.9); // first tick of the run
    // Sentence 2 starts 2.0s into the run and the first tick is at 0.1s.
    expect(lead(2)).toBeGreaterThanOrEqual(1.9);
    for (let k = 3; k < 10; k += 1) {
      expect(lead(k)).toBeGreaterThanOrEqual(2);
      expect(lead(k)).toBeLessThanOrEqual(2.2);
    }
  });

  it('beats the old lead (the previous sentence plus 0.5s), which for 1s sentences was 1.5s', async () => {
    const old = await playedPlain(0, 10, 11);
    for (let k = 2; k < 10; k += 1) {
      const lead = k - (old.when(`line:line ${k}`) as number);
      expect(lead).toBeGreaterThanOrEqual(1.4);
      expect(lead).toBeLessThanOrEqual(1.6);
    }
  });

  it('does not delay the audio: the first sentence is revealed and started on the first tick, as before', async () => {
    const mine = await playedPlain(undefined, 8, 0.1);
    const old = await playedPlain(0, 8, 0.1);
    expect(mine.when('line:line 0')).toBe(0);
    expect(mine.when('caption:(t_1_s0)')).toBe(old.when('caption:(t_1_s0)'));
    expect(mine.when('speaking:true')).toBe(old.when('speaking:true'));
  });
});

describe('what must not move', () => {
  it('the caption and the speaking flag fire at exactly the old times', async () => {
    const mine = await playedPlain(undefined, 8, 9);
    const old = await playedPlain(0, 8, 9);
    const only = (log: Seen[]) => log.filter((e) => !e.what.startsWith('line:'));
    expect(only(mine.log)).toEqual(only(old.log));
    expect(only(mine.log).length).toBeGreaterThan(8);
    // And the caption is still ~0.5s ahead of its sentence, not 2s.
    expect(3 - (mine.when('caption:(t_1_s3)') as number)).toBeCloseTo(0.5, 5);
  });

  it('writes every line exactly once, in order', async () => {
    const c = await playedPlain(undefined, 10, 14);
    expect(c.lines()).toEqual(Array.from({ length: 10 }, (_, k) => `line ${k}`));
    for (const calls of Object.values(c.revealCalls)) expect(calls).toBe(1);
    expect(Object.keys(c.revealCalls)).toHaveLength(10);
  });

  it('a turn holding a widget (the cue clock) reveals everything at exactly the old times', async () => {
    const run = async (lead: number | undefined) => {
      const c = await joinClass(lead);
      const events = [text(1, 'a'), widget(2), text(3, 'cue sentence'), text(4, 'd'), text(5, 'e'), text(6, 'f')];
      c.send({ type: 'board_events', events });
      events.forEach((e, k) => c.send(say(`t_2_s${k}`, [e])));
      c.send({ type: 'turn_complete' });
      c.play(8);
      c.client.disconnect();
      return c;
    };
    const mine = await run(undefined);
    const old = await run(0);
    expect(mine.log).toEqual(old.log);
    expect(mine.lines()).toHaveLength(6);
  });

  it('a figure stays at its old time; a line behind it waits for it, so the board keeps its order', async () => {
    const run = async (lead: number | undefined) => {
      const c = await joinClass(lead);
      const events = [text(1, 'a'), svgFigure(2), text(3, 'c'), text(4, 'd'), text(5, 'e'), text(6, 'f'), text(7, 'g')];
      c.send({ type: 'board_events', events });
      events.forEach((e, k) => c.send(say(`t_3_s${k}`, [e])));
      c.send({ type: 'turn_complete' });
      c.play(9);
      c.client.disconnect();
      return c;
    };
    const mine = await run(undefined);
    const old = await run(0);
    expect(mine.when('line:diagram')).toBe(old.when('line:diagram'));
    // Order of the board is the order of the lesson, with or without the lead.
    expect(mine.lines()).toEqual(old.lines());
    expect(mine.lines()).toEqual(['a', '[diagram]', 'c', 'd', 'e', 'f', 'g']);
    // Never earlier than the old time, never later; the lines past the figure lead.
    for (const l of ['c', 'd', 'e', 'f', 'g']) {
      expect(mine.when(`line:${l}`) as number).toBeLessThanOrEqual(old.when(`line:${l}`) as number);
    }
    expect(mine.when('line:g') as number).toBeLessThan(old.when('line:g') as number);
  });

  it('a sentence that carries a line and then a figure: the line goes early, the figure stays put', async () => {
    const run = async (lead: number | undefined) => {
      const c = await joinClass(lead);
      const events = [text(1, 'a'), text(2, 'b'), text(3, 'c'), svgFigure(4)];
      c.send({ type: 'board_events', events });
      c.send(say('t_4_s0', [events[0]]));
      c.send(say('t_4_s1', [events[1]]));
      c.send(say('t_4_s2', [events[2], events[3]], 2)); // heard at 2s
      c.send({ type: 'turn_complete' });
      c.play(4);
      c.client.disconnect();
      return c;
    };
    const mine = await run(undefined);
    const old = await run(0);
    expect(mine.lines()).toEqual(['a', 'b', 'c', '[diagram]']);
    expect(mine.lines()).toEqual(old.lines());
    expect(mine.when('line:diagram')).toBe(old.when('line:diagram'));
    expect(mine.when('line:c') as number).toBeLessThan(old.when('line:c') as number);
  });
});

describe('BOARD_LEAD_S = 0', () => {
  it('is the old behaviour, line for line and time for time', async () => {
    // Same script, both ways, and the old lead is what the existing suite pins:
    // a line is up with the previous sentence's start.
    const old = await playedPlain(0, 6, 7);
    for (let k = 2; k < 6; k += 1) {
      expect(old.when(`line:line ${k}`)).toBeCloseTo(k - 1.5, 5);
    }
  });
});

describe('a pause', () => {
  it('reveals nothing while paused, and the lines come back on resume', async () => {
    const { c } = await plainTurn(undefined, 10);
    c.play(1.0);
    const shown = c.lines().length;
    c.client.pausePlayback();
    // Time passes on a still playhead: nothing may be written.
    jest.advanceTimersByTime(5000);
    expect(c.lines()).toHaveLength(shown);
    c.client.resumePlayback();
    c.play(3.0);
    expect(c.lines().length).toBeGreaterThan(shown);
    for (const calls of Object.values(c.revealCalls)) expect(calls).toBe(1);
  });
});

describe('a late chunk', () => {
  it('still reveals its line, once, even though its audio is nearly due', async () => {
    const c = await joinClass();
    const events = [text(1, 'a'), text(2, 'b'), text(3, 'late')];
    c.send({ type: 'board_events', events });
    c.send(say('t_5_s0', [events[0]]));
    c.send(say('t_5_s1', [events[1]]));
    c.play(1.6);
    c.send(say('t_5_s2', [events[2]])); // starts at 2.0s: 0.4s ahead of the playhead
    c.play(3.2);
    expect(c.lines()).toEqual(['a', 'b', 'late']);
    expect(c.revealCalls['1:3']).toBe(1);
    expect(c.when('line:late') as number).toBeLessThanOrEqual(1.8);
    expect(c.when('caption:(t_5_s2)') as number).toBeGreaterThanOrEqual(1.5);
  });
});

describe('a rebuilt stream', () => {
  it('does not write a line twice when the engine dies and the audio replays', async () => {
    const { c } = await plainTurn(undefined, 10);
    c.play(3.0);
    const before = Object.keys(c.revealCalls).length;
    expect(before).toBeGreaterThan(3);
    // The engine stops: the playhead freezes with audio queued, then is rebuilt.
    let rebuilt = 0;
    (c.client as unknown as { playback: { onRecovered?: () => void } }).playback.onRecovered = () => {
      rebuilt += 1;
    };
    jest.advanceTimersByTime(9000);
    expect(rebuilt).toBeGreaterThanOrEqual(1);
    c.clock.heard = 0;
    mockPlayer.played = 0;
    c.play(11);
    for (const calls of Object.values(c.revealCalls)) expect(calls).toBe(1);
    expect(c.lines()).toEqual(Array.from({ length: 10 }, (_, k) => `line ${k}`));
  });
});

/**
 * The dead-engine watchdog in PcmPlaybackQueue.
 *
 * A fake native PcmPlayer stands in for AVAudioEngine, on jest's fake clock:
 * while the engine is alive and playing, scheduled buffers complete one after
 * another in real time, and `pcmPlayedSeconds` counts them. Two ways for iOS
 * to stop the engine on an audio-route change are modelled:
 *
 * - OLD NATIVE (any binary without the native follow-up to 2eff0e6): every
 *   scheduled buffer "completes" at once and is counted, then nothing renders
 *   again — the playhead leaps over the backlog, then freezes. Measured on
 *   the pre-watchdog queue during the diagnosis: 4 parts heard, the other 16
 *   announced in one tick, and the next turn never started.
 * - NEW NATIVE (the follow-up): the flush is not counted, the buffers are
 *   kept, and the native side restarts the engine itself, replaying the head
 *   buffer from its start, and counts the restart (`pcmRecoveries`). The
 *   watchdog must stay out of the way.
 */
import { PcmPlaybackQueue } from '@/lib/pcm-playback-queue';

type Buf = { sec: number };
const mockFake = {
  native: 'old' as 'old' | 'new',
  alive: true,
  playing: false,
  consumed: 0,
  fed: 0,
  scheduled: [] as Buf[],
  headStartedAt: 0,
  starts: 0,
  stops: 0,
  /** Bumped by every successful start: a native restart armed for an older
   *  engine must not touch a rebuilt one. */
  engineId: 0,
  /** The next N `pcmStart()` calls throw, as a start on a settling route does. */
  startFailures: 0,
  /** The native restart counter (`pcmRecoveries`); stays 0 on an old binary. */
  recoveries: 0,
};
function mockNow() {
  return Date.now();
}
jest.mock('@/lib/pcm-player', () => ({
  pcmStart: () => {
    if (mockFake.startFailures > 0) {
      mockFake.startFailures -= 1;
      throw new Error('engine start failed');
    }
    mockFake.starts += 1;
    mockFake.engineId += 1;
    mockFake.alive = true;
    mockFake.playing = false;
    mockFake.consumed = 0;
    mockFake.fed = 0;
    mockFake.scheduled = [];
  },
  pcmStop: () => {
    mockFake.stops += 1;
    const stale = mockFake.scheduled.reduce((a, b) => a + b.sec, 0);
    mockFake.scheduled = [];
    mockFake.consumed = 0;
    mockFake.fed = 0;
    mockFake.playing = false;
    // The old player's teardown did not retire its buffers: the stopped
    // player's completions land after stop() returns and are counted.
    if (mockFake.native === 'old') {
      setTimeout(() => {
        mockFake.consumed += stale;
      }, 5);
    }
  },
  pcmFeedBytes: (d: Uint8Array) => {
    const sec = d.length / 2 / 24000;
    // A playing node that ran dry starts a newly scheduled buffer at once.
    if (mockFake.playing && mockFake.scheduled.length === 0) mockFake.headStartedAt = mockNow();
    mockFake.scheduled.push({ sec });
    mockFake.fed += sec;
    if (!mockFake.playing && mockFake.fed >= 0.5) {
      mockFake.playing = true;
      mockFake.headStartedAt = mockNow();
    }
  },
  pcmPlayedSeconds: () => mockFake.consumed,
  pcmRecoveries: () => mockFake.recoveries,
  pcmFedSeconds: () => mockFake.fed,
  pcmPause: () => {},
  pcmResume: () => {},
}));

/** Advance the clock in 10ms steps, completing buffers as a live engine would. */
function run(ms: number) {
  for (let t = 0; t < ms; t += 10) {
    jest.advanceTimersByTime(10);
    if (mockFake.alive && mockFake.playing && mockFake.scheduled.length) {
      const head = mockFake.scheduled[0];
      if (mockNow() - mockFake.headStartedAt >= head.sec * 1000) {
        mockFake.scheduled.shift();
        mockFake.consumed += head.sec;
        mockFake.headStartedAt = mockNow();
      }
    }
  }
}

/** OLD NATIVE: every scheduled buffer completes now, nothing renders after. */
function killEngine() {
  mockFake.alive = false;
  mockFake.consumed += mockFake.scheduled.reduce((a, b) => a + b.sec, 0);
  mockFake.scheduled = [];
}

/** NEW NATIVE: nothing is counted or lost; the engine is restarted natively
 *  after `restartAfterMs` and the head buffer plays again from its start. The
 *  restart is counted unless `counted` is false (a binary without the counter). */
function killEngineRecoveredNatively(restartAfterMs: number, counted = true) {
  mockFake.alive = false;
  const engine = mockFake.engineId;
  setTimeout(() => {
    if (mockFake.engineId !== engine) return;
    mockFake.alive = true;
    mockFake.headStartedAt = mockNow();
    if (counted) mockFake.recoveries += 1;
  }, restartAfterMs);
}

/** Runs until a buffer completes, then `intoMs` more: a stop placed that far
 *  into the next part. W5 #14 was 1006ms into a 1024ms part. */
function runIntoPart(intoMs: number) {
  const before = mockFake.consumed;
  for (let i = 0; i < 300 && mockFake.consumed === before; i += 1) run(10);
  run(intoMs);
}

const part = (sec = 1.024) => new Uint8Array(Math.round(sec * 24000) * 2);
const ids = (prefix: string, n: number) => Array.from({ length: n }, (_, i) => `${prefix}${i}`);

beforeEach(() => {
  jest.useFakeTimers({ now: 1_000_000 });
  Object.assign(mockFake, {
    native: 'old',
    alive: true,
    playing: false,
    consumed: 0,
    fed: 0,
    scheduled: [],
    headStartedAt: 0,
    starts: 0,
    stops: 0,
    engineId: 0,
    startFailures: 0,
    recoveries: 0,
  });
});
afterEach(() => jest.useRealTimers());

function setup() {
  const q = new PcmPlaybackQueue();
  const started: { id: string; at: number }[] = [];
  const recovered: unknown[] = [];
  let drained = 0;
  q.onItemStart = (id: string) => started.push({ id, at: mockNow() });
  q.onQueueDrained = () => (drained += 1);
  q.onRecovered = (i) => recovered.push(i);
  return { q, started, recovered, drained: () => drained };
}

/** No burst: every line is announced a part's length after the one before. */
function expectNoBurst(started: { id: string; at: number }[]) {
  for (let i = 1; i < started.length; i += 1) {
    expect(started[i].at - started[i - 1].at).toBeGreaterThanOrEqual(900);
  }
}

test('normal playback: in order, on time, drains once, never recovers', () => {
  const { q, started, recovered, drained } = setup();
  for (let i = 0; i < 10; i += 1) q.enqueue({ id: `p${i}`, pcm: part(), sampleRate: 24000 });
  run(12_000);
  expect(started.map((s) => s.id)).toEqual(ids('p', 10));
  expectNoBurst(started);
  expect(recovered).toHaveLength(0);
  expect(drained()).toBe(1);
  expect(mockFake.stops).toBe(0);
});

test('a turn gap and a long pause are not a dead engine', () => {
  const { q, started, recovered } = setup();
  for (let i = 0; i < 3; i += 1) q.enqueue({ id: `a${i}`, pcm: part(), sampleRate: 24000 });
  run(5_000);
  run(12_000); // idle between turns
  for (let i = 0; i < 3; i += 1) q.enqueue({ id: `b${i}`, pcm: part(), sampleRate: 24000 });
  run(1_200);
  q.pause();
  mockFake.playing = false; // the engine really is paused
  run(15_000);
  q.resume();
  mockFake.playing = true;
  mockFake.headStartedAt = mockNow();
  run(5_000);
  expect(recovered).toHaveLength(0);
  expect(mockFake.stops).toBe(0);
  expect(started.map((s) => s.id)).toEqual(['a0', 'a1', 'a2', 'b0', 'b1', 'b2']);
});

test('old native, engine stopped mid-stream: the leap is withheld, the stream rebuilt and replayed in order', () => {
  const { q, started, recovered, drained } = setup();
  for (let i = 0; i < 20; i += 1) q.enqueue({ id: `s${i}`, pcm: part(), sampleRate: 24000 });
  run(3_600); // s0..s2 heard, s3 playing
  const before = started.map((s) => s.id);
  expect(before).toEqual(ids('s', 4));
  killEngine();
  // The fake really leapt: the whole backlog "completed" at once.
  expect(mockFake.consumed).toBeCloseTo(20 * 1.024, 1);
  run(150); // one or two ticks
  // Nothing past what was actually heard may be announced by the leap.
  expect(started.map((s) => s.id)).toEqual(before);
  run(400); // restart delay + the stopped player's stale completions
  expect(recovered).toHaveLength(1);
  expect(mockFake.stops).toBe(1);
  expect(mockFake.starts).toBe(2);
  // The server never stopped sending: more audio arrives after the rebuild.
  for (let i = 20; i < 23; i += 1) q.enqueue({ id: `s${i}`, pcm: part(), sampleRate: 24000 });
  run(30_000);
  expect(started.map((s) => s.id)).toEqual(ids('s', 23));
  expectNoBurst(started);
  expect(drained()).toBe(1);
});

test('old native, engine dead with nothing queued (frozen): the next turn still plays', () => {
  const { q, started, recovered } = setup();
  for (let i = 0; i < 2; i += 1) q.enqueue({ id: `t${i}`, pcm: part(), sampleRate: 24000 });
  run(4_000); // drained
  killEngine(); // no buffers to flush: no leap, just a dead engine
  for (let i = 0; i < 5; i += 1) q.enqueue({ id: `u${i}`, pcm: part(), sampleRate: 24000 });
  run(4_000); // frozen detected after the head (1.02s) + 1.5s
  expect(recovered).toHaveLength(1);
  run(8_000);
  expect(started.map((s) => s.id)).toEqual(['t0', 't1', 'u0', 'u1', 'u2', 'u3', 'u4']);
  expectNoBurst(started);
});

test('a route that keeps dying is rate-limited, not looped', () => {
  const { q, recovered } = setup();
  for (let i = 0; i < 60; i += 1) q.enqueue({ id: `r${i}`, pcm: part(), sampleRate: 24000 });
  for (let k = 0; k < 8; k += 1) {
    run(2_000);
    killEngine();
    run(3_500);
  }
  expect(recovered.length).toBeLessThanOrEqual(4);
});

test('a rebuild whose engine will not start yet keeps retrying, then plays everything in order', () => {
  const { q, started, recovered } = setup();
  for (let i = 0; i < 8; i += 1) q.enqueue({ id: `w${i}`, pcm: part(), sampleRate: 24000 });
  run(2_600); // w0, w1 heard, w2 playing
  killEngine();
  mockFake.startFailures = 2; // the route is still settling
  // Detection, then the first start (250ms) and the retry (500ms later) both
  // throw — inside timers, where an escaped error would fail this test.
  run(1_000);
  expect(recovered).toHaveLength(0);
  expect(mockFake.startFailures).toBe(0);
  // Audio that arrives mid-rebuild joins the replay, in order.
  for (let i = 8; i < 10; i += 1) q.enqueue({ id: `w${i}`, pcm: part(), sampleRate: 24000 });
  run(15_000);
  expect(recovered).toHaveLength(1);
  expect(mockFake.starts).toBe(2);
  expect(started.map((s) => s.id)).toEqual(ids('w', 10));
  expectNoBurst(started);
});

test('new native: the engine restarts itself — the watchdog stays out, nothing bursts, nothing is lost', () => {
  mockFake.native = 'new';
  const { q, started, recovered, drained } = setup();
  for (let i = 0; i < 12; i += 1) q.enqueue({ id: `n${i}`, pcm: part(), sampleRate: 24000 });
  run(3_600); // n0..n2 heard, n3 playing
  const consumed = mockFake.consumed;
  killEngineRecoveredNatively(300);
  run(150);
  expect(mockFake.consumed).toBe(consumed); // the flush was not counted: no leap
  run(15_000);
  expect(recovered).toHaveLength(0);
  expect(mockFake.stops).toBe(0);
  expect(mockFake.starts).toBe(1);
  expect(started.map((s) => s.id)).toEqual(ids('n', 12));
  expectNoBurst(started);
  expect(drained()).toBe(1);
});

describe('the native restart counter (pcmRecoveries)', () => {
  test('it moves during a stall: a slow native recovery late in a part is not rebuilt on top (W5 #14)', () => {
    mockFake.native = 'new';
    const { q, started, recovered, drained } = setup();
    for (let i = 0; i < 12; i += 1) q.enqueue({ id: `k${i}`, pcm: part(), sampleRate: 24000 });
    run(2_000);
    // The #14 pattern: the stop lands at the very end of a part, and the
    // native restart needs two failed starts (0.12 + 0.25 + 0.5s), so the
    // replayed part cannot finish inside the old part + 1.5s stall allowance.
    runIntoPart(1_000);
    killEngineRecoveredNatively(930);
    run(15_000);
    expect(mockFake.recoveries).toBe(1);
    expect(recovered).toHaveLength(0);
    expect(mockFake.stops).toBe(0);
    expect(mockFake.starts).toBe(1);
    expect(started.map((s) => s.id)).toEqual(ids('k', 12));
    expectNoBurst(started);
    expect(drained()).toBe(1);
  });

  test('it never moves because the native side stays dead: FROZEN still rebuilds', () => {
    mockFake.native = 'new';
    const { q, started, recovered } = setup();
    for (let i = 0; i < 12; i += 1) q.enqueue({ id: `d${i}`, pcm: part(), sampleRate: 24000 });
    run(2_600);
    mockFake.alive = false; // stopped, no notification, no retry that works
    run(4_000);
    expect(mockFake.recoveries).toBe(0);
    expect(recovered).toEqual([expect.objectContaining({ reason: 'frozen' })]);
    expect(mockFake.stops).toBe(1);
    run(15_000);
    expect(started.map((s) => s.id)).toEqual(ids('d', 12));
    expectNoBurst(started);
  });

  test('a counter that moved once does not hide a later death', () => {
    mockFake.native = 'new';
    const { q, started, recovered } = setup();
    for (let i = 0; i < 16; i += 1) q.enqueue({ id: `e${i}`, pcm: part(), sampleRate: 24000 });
    run(2_000);
    killEngineRecoveredNatively(150); // recovered natively, counted
    run(4_000);
    expect(recovered).toHaveLength(0);
    mockFake.alive = false; // then dies for good
    run(5_000);
    expect(recovered).toEqual([expect.objectContaining({ reason: 'frozen' })]);
    run(20_000);
    expect(started.map((s) => s.id)).toEqual(ids('e', 16));
  });

  test('absent (a binary without it): the same slow recovery is rebuilt on top, as before', () => {
    mockFake.native = 'new';
    const { q, started, recovered } = setup();
    for (let i = 0; i < 12; i += 1) q.enqueue({ id: `a${i}`, pcm: part(), sampleRate: 24000 });
    run(2_000);
    runIntoPart(1_000);
    killEngineRecoveredNatively(930, false); // restarts, but nothing counts it
    run(15_000);
    // Unchanged behaviour: the old clock fires, JS rebuilds (a replayed part
    // repeats), and every part is still announced once, in order.
    expect(mockFake.recoveries).toBe(0);
    expect(recovered).toEqual([expect.objectContaining({ reason: 'frozen' })]);
    expect(started.map((s) => s.id)).toEqual(ids('a', 12));
    expectNoBurst(started);
  });

  test('absent at the binding: pcmRecoveries reads 0 when the native function is missing', () => {
    for (const [native, want] of [
      [null, 0],
      [{ playedSeconds: () => 0 }, 0],
      [{ playedSeconds: () => 0, recoveries: () => 3 }, 3],
    ] as const) {
      jest.isolateModules(() => {
        jest.doMock('expo-modules-core', () => ({ requireOptionalNativeModule: () => native }));
        const real = jest.requireActual('@/lib/pcm-player') as typeof import('@/lib/pcm-player');
        expect(real.pcmRecoveries()).toBe(want);
      });
    }
  });
});

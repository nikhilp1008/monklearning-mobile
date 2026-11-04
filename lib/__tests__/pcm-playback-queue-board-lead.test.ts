/**
 * PcmPlaybackQueue: the board's own, earlier signal (onItemApproach).
 *
 * `onItemStart` carries the caption, the speaking flag and every board line
 * that is not plain writing, and stays ~0.5s ahead of the heard audio.
 * `onItemApproach` fires BOARD_LEAD_S (2s) ahead, once per part, so the lines a
 * teacher writes can be up before the voice reaches them. Nothing about
 * onItemStart moves.
 *
 * `heard` below is the audible time in seconds. The mock player reports it two
 * ways: smooth (a playhead that follows the sound) and in whole-part steps,
 * which is what the native clock really does (dataPlayedBack completions).
 */
import { BOARD_LEAD_S, PcmPlaybackQueue } from '@/lib/pcm-playback-queue';

const mockPlayer = { played: 0, starts: 0, stops: 0 };
jest.mock('@/lib/pcm-player', () => ({
  pcmStart: () => {
    mockPlayer.starts += 1;
    mockPlayer.played = 0; // the native counter is zeroed by start()
  },
  pcmStop: () => {
    mockPlayer.stops += 1;
  },
  pcmFeedBytes: () => {},
  pcmPlayedSeconds: () => mockPlayer.played,
  pcmRecoveries: () => 0,
  pcmTeardown: () => {},
  pcmPause: () => {},
  pcmResume: () => {},
}));

const part = (id: string, seconds: number) => ({
  id,
  pcm: new Uint8Array(Math.round(seconds * 24000) * 2),
  sampleRate: 24000,
});

beforeEach(() => {
  jest.useFakeTimers();
  mockPlayer.played = 0;
  mockPlayer.starts = 0;
  mockPlayer.stops = 0;
});
afterEach(() => jest.useRealTimers());

type Ev = { kind: 'approach' | 'start'; id: string; heard: number };

/** A queue that records every signal with the audible time it fired at. */
function recorded(boardLeadS?: number) {
  const q = new PcmPlaybackQueue(boardLeadS);
  const log: Ev[] = [];
  const clock = { heard: 0 };
  q.onItemApproach = (id) => log.push({ kind: 'approach', id, heard: clock.heard });
  q.onItemStart = (id) => log.push({ kind: 'start', id, heard: clock.heard });
  return { q, log, clock };
}

const at = (log: Ev[], kind: Ev['kind'], id: string) => {
  const hit = log.filter((e) => e.kind === kind && e.id === id);
  expect(hit.length).toBeLessThanOrEqual(1);
  return hit[0];
};

/**
 * Real time passes in 100ms ticks; the audible time follows it. `smooth`: the
 * playhead is the audible time. Otherwise it is the audible time rounded down
 * to the end of the last finished part (parts of `step` seconds), as native.
 */
function play(
  rig: { clock: { heard: number } },
  to: number,
  { smooth = true, step = 1 }: { smooth?: boolean; step?: number } = {}
) {
  while (rig.clock.heard < to - 1e-9) {
    rig.clock.heard = Math.round((rig.clock.heard + 0.1) * 10) / 10;
    mockPlayer.played = smooth ? rig.clock.heard : Math.floor(rig.clock.heard / step + 1e-9) * step;
    jest.advanceTimersByTime(100);
  }
}

describe('BOARD_LEAD_S', () => {
  it('is 2 seconds', () => {
    expect(BOARD_LEAD_S).toBe(2);
  });
});

describe('a sentence after the first', () => {
  it('is approached about 2s before it is heard, and started at the old time', () => {
    const rig = recorded();
    for (const id of ['s1', 's2', 's3']) rig.q.enqueue(part(id, 3)); // 0s, 3s, 6s
    play(rig, 7);
    for (const [id, startSec] of [['s2', 3], ['s3', 6]] as const) {
      const lead = startSec - at(rig.log, 'approach', id).heard;
      expect(lead).toBeGreaterThanOrEqual(1.9);
      expect(lead).toBeLessThanOrEqual(2.2);
      // Unchanged: ~0.5s ahead of the sentence, the same tick-rounded moment.
      const startLead = startSec - at(rig.log, 'start', id).heard;
      expect(startLead).toBeGreaterThanOrEqual(0.4);
      expect(startLead).toBeLessThanOrEqual(0.6);
    }
    rig.q.destroy();
  });

  it('keeps the lead on the real, whole-part playhead clock too', () => {
    const rig = recorded();
    for (let i = 0; i < 12; i += 1) rig.q.enqueue(part(`p${i}`, 1)); // one-second parts
    play(rig, 11, { smooth: false, step: 1 });
    // Without the within-part estimate this would be anywhere from 1s to 2s.
    for (let i = 3; i < 12; i += 1) {
      const lead = i - at(rig.log, 'approach', `p${i}`).heard;
      expect(lead).toBeGreaterThanOrEqual(1.9);
      expect(lead).toBeLessThanOrEqual(2.2);
    }
    rig.q.destroy();
  });

  it('with longer parts, still about 2s (not the part length)', () => {
    const rig = recorded();
    for (const id of ['a', 'b', 'c']) rig.q.enqueue(part(id, 4)); // 0, 4, 8
    play(rig, 9, { smooth: false, step: 4 });
    for (const [id, startSec] of [['b', 4], ['c', 8]] as const) {
      const lead = startSec - at(rig.log, 'approach', id).heard;
      expect(lead).toBeGreaterThanOrEqual(1.9);
      expect(lead).toBeLessThanOrEqual(2.2);
    }
    rig.q.destroy();
  });

  it('always approaches a part before it starts', () => {
    const rig = recorded();
    for (let i = 0; i < 6; i += 1) rig.q.enqueue(part(`p${i}`, 0.7));
    play(rig, 6);
    for (let i = 0; i < 6; i += 1) {
      const a = rig.log.findIndex((e) => e.kind === 'approach' && e.id === `p${i}`);
      const s = rig.log.findIndex((e) => e.kind === 'start' && e.id === `p${i}`);
      expect(a).toBeGreaterThanOrEqual(0);
      expect(a).toBeLessThan(s);
    }
    rig.q.destroy();
  });
});

describe('the first sentence of a run', () => {
  it('is approached on the first tick: it gets no extra lead, and audio start is not delayed', () => {
    const rig = recorded();
    rig.q.enqueue(part('s1', 3));
    rig.q.enqueue(part('s2', 3));
    // The first tick, before anything has played.
    jest.advanceTimersByTime(100);
    expect(at(rig.log, 'approach', 's1').heard).toBe(0);
    expect(at(rig.log, 'start', 's1').heard).toBe(0);
    // The player was started once, at enqueue, as before: nothing waits.
    expect(mockPlayer.starts).toBe(1);
    rig.q.destroy();
  });

  it('a sentence that starts inside the first 2s only leads by its own offset', () => {
    const rig = recorded();
    rig.q.enqueue(part('s1', 1.2));
    rig.q.enqueue(part('s2', 1.2)); // starts at 1.2s
    jest.advanceTimersByTime(100);
    expect(at(rig.log, 'approach', 's2').heard).toBe(0); // 1.2s of lead, all there is
    rig.q.destroy();
  });
});

describe('once only', () => {
  it('never approaches or starts a part twice', () => {
    const rig = recorded();
    for (const id of ['s1', 's2', 's3']) rig.q.enqueue(part(id, 3));
    play(rig, 10);
    jest.advanceTimersByTime(5000);
    for (const id of ['s1', 's2', 's3']) {
      expect(rig.log.filter((e) => e.kind === 'approach' && e.id === id)).toHaveLength(1);
      expect(rig.log.filter((e) => e.kind === 'start' && e.id === id)).toHaveLength(1);
    }
    rig.q.destroy();
  });
});

describe('a pause', () => {
  it('approaches nothing while paused, even a part that is already within 2s', () => {
    const rig = recorded();
    rig.q.enqueue(part('s1', 3));
    play(rig, 1.0);
    rig.q.pause();
    rig.q.enqueue(part('s2', 3)); // 3s: within 2s of the still playhead
    jest.advanceTimersByTime(5000);
    expect(rig.log.filter((e) => e.id === 's2')).toEqual([]);
    rig.q.resume();
    jest.advanceTimersByTime(100);
    expect(rig.log.filter((e) => e.id === 's2').map((e) => e.kind)).toEqual(['approach']);
    rig.q.destroy();
  });

  it('a part approached before a pause is not approached again after it', () => {
    const rig = recorded();
    rig.q.enqueue(part('s1', 3));
    rig.q.enqueue(part('s2', 3));
    play(rig, 1.5); // s2 (3s) approached at 1.0
    expect(at(rig.log, 'approach', 's2')).toBeDefined();
    rig.q.pause();
    jest.advanceTimersByTime(3000);
    rig.q.resume();
    play(rig, 4);
    expect(rig.log.filter((e) => e.kind === 'approach' && e.id === 's2')).toHaveLength(1);
    rig.q.destroy();
  });
});

describe('a rebuilt stream', () => {
  it('does not approach again what it already approached, and still approaches the rest', () => {
    const rig = recorded();
    for (const id of ['s1', 's2', 's3', 's4']) rig.q.enqueue(part(id, 3)); // 0, 3, 6, 9
    play(rig, 2.0); // s2 approached (and, at 2.5, would start)
    expect(at(rig.log, 'approach', 's2')).toBeDefined();
    expect(at(rig.log, 'approach', 's3')).toBeUndefined();

    // The engine dies: the playhead freezes with audio queued.
    mockPlayer.played = 1.0;
    jest.advanceTimersByTime(8000); // FROZEN: rebuilt after the head part + slack
    expect(mockPlayer.stops).toBe(1);
    jest.advanceTimersByTime(300); // restart delay
    expect(mockPlayer.starts).toBe(2);

    // The new stream replays from the part cut off; the clock restarts at 0.
    rig.clock.heard = 0;
    play(rig, 12);
    for (const id of ['s2', 's3', 's4']) {
      expect(rig.log.filter((e) => e.kind === 'approach' && e.id === id)).toHaveLength(1);
      expect(rig.log.filter((e) => e.kind === 'start' && e.id === id)).toHaveLength(1);
    }
    // s1 was heard before the rebuild and replays silently.
    expect(rig.log.filter((e) => e.kind === 'start' && e.id === 's1')).toHaveLength(1);
    rig.q.destroy();
  });

  it('announces nothing for a playhead that leaps (a dead engine completing its backlog)', () => {
    const rig = recorded();
    for (const id of ['s1', 's2', 's3', 's4']) rig.q.enqueue(part(id, 3));
    jest.advanceTimersByTime(100);
    rig.log.length = 0;
    mockPlayer.played = 12; // everything "completes" at once
    jest.advanceTimersByTime(100);
    expect(rig.log).toEqual([]);
    rig.q.destroy();
  });
});

describe('clear() and destroy()', () => {
  it('clear() forgets approached parts; the same id on the next stream approaches again', () => {
    const rig = recorded();
    rig.q.enqueue(part('x', 1));
    jest.advanceTimersByTime(100);
    expect(rig.log.filter((e) => e.kind === 'approach')).toHaveLength(1);
    rig.q.clear();
    rig.q.enqueue(part('x', 1));
    jest.advanceTimersByTime(100);
    expect(rig.log.filter((e) => e.kind === 'approach')).toHaveLength(2);
    rig.q.destroy();
  });

  it('destroy() is final: nothing is approached afterwards', () => {
    const rig = recorded();
    rig.q.enqueue(part('s1', 3));
    rig.q.destroy();
    rig.q.enqueue(part('late', 3));
    jest.advanceTimersByTime(5000);
    expect(rig.log).toEqual([]);
  });
});

describe('BOARD_LEAD_S = 0 is the old queue', () => {
  it('never approaches, and starts every part at exactly the same moments', () => {
    const off = recorded(0);
    const on = recorded();
    const startsOf = (rig: { log: Ev[] }) =>
      rig.log.filter((e) => e.kind === 'start').map((e) => `${e.id}@${e.heard}`);

    for (const id of ['s1', 's2', 's3', 's4']) off.q.enqueue(part(id, 2.3));
    play(off, 10);
    const offStarts = startsOf(off);
    off.q.destroy();

    mockPlayer.played = 0;
    for (const id of ['s1', 's2', 's3', 's4']) on.q.enqueue(part(id, 2.3));
    play(on, 10);

    expect(off.log.some((e) => e.kind === 'approach')).toBe(false);
    expect(offStarts).toHaveLength(4);
    expect(startsOf(on)).toEqual(offStarts);
    on.q.destroy();
  });

  it('a lead no bigger than the start lead switches the signal off too', () => {
    const rig = recorded(0.5);
    rig.q.enqueue(part('s1', 2));
    rig.q.enqueue(part('s2', 2));
    play(rig, 4);
    expect(rig.log.some((e) => e.kind === 'approach')).toBe(false);
    rig.q.destroy();
  });
});

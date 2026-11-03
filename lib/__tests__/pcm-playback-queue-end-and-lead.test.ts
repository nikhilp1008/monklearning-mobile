/**
 * PcmPlaybackQueue: End is final, and the board leads the voice.
 *
 * - A destroyed queue must never call pcmStart again. Frames still on the
 *   bridge after End used to rebuild the engine and the class kept talking.
 * - A part's onItemStart (which reveals its board lines) fires slightly AHEAD
 *   of the heard playhead, so the line is up before its sentence is heard.
 */
import { PcmPlaybackQueue } from '@/lib/pcm-playback-queue';

const mockPlayer = { played: 0, starts: 0 };
jest.mock('@/lib/pcm-player', () => ({
  pcmStart: () => {
    mockPlayer.starts += 1;
  },
  pcmStop: () => {},
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
});
afterEach(() => jest.useRealTimers());

it('never restarts the player after destroy', () => {
  const q = new PcmPlaybackQueue();
  q.enqueue(part('a', 1));
  expect(mockPlayer.starts).toBe(1);
  q.destroy();
  q.enqueue(part('late', 1));
  expect(mockPlayer.starts).toBe(1);
});

it('reveals the next part before the playhead reaches it', () => {
  const q = new PcmPlaybackQueue();
  const started: string[] = [];
  q.onItemStart = (id) => started.push(id);
  q.enqueue(part('s1', 2));
  q.enqueue(part('s2', 2)); // starts at 2.0s of audio
  // Play in real time, 0.1s of audio per 100ms tick.
  const playTo = (sec: number) => {
    while (mockPlayer.played < sec - 1e-9) {
      mockPlayer.played = Math.round((mockPlayer.played + 0.1) * 10) / 10;
      jest.advanceTimersByTime(100);
    }
  };
  playTo(1.0);
  expect(started).toEqual(['s1']);
  playTo(1.6); // 0.4s before s2 is heard
  expect(started).toEqual(['s1', 's2']);
});

it('announces nothing while paused, even a sentence that is already due', () => {
  const q = new PcmPlaybackQueue();
  const started: string[] = [];
  q.onItemStart = (id) => started.push(id);
  q.enqueue(part('s1', 1));
  while (mockPlayer.played < 1.0 - 1e-9) {
    mockPlayer.played = Math.round((mockPlayer.played + 0.1) * 10) / 10;
    jest.advanceTimersByTime(100);
  } // s1 heard to the end
  q.pause();
  q.enqueue(part('s2', 1)); // arrives mid-pause: due at once on a still playhead
  jest.advanceTimersByTime(5000);
  expect(started).toEqual(['s1']);
  q.resume();
  jest.advanceTimersByTime(100);
  expect(started).toEqual(['s1', 's2']);
});

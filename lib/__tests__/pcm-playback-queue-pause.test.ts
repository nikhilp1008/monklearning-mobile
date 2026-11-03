/**
 * A pause holds on iPhone even before the first sound.
 *
 * Pressing Pause before a turn's first audio left the queue paused, but the
 * first frame started the player, which clears its pause: Drona spoke while the
 * screen said paused and the board stood still. Audio that arrives during a
 * pause waits for Resume instead.
 */
import fs from 'fs';
import path from 'path';

import { PcmPlaybackQueue } from '@/lib/pcm-playback-queue';

const mockCalls: string[] = [];
jest.mock('@/lib/pcm-player', () => ({
  pcmStart: () => mockCalls.push('start'),
  pcmStop: () => {},
  pcmFeedBytes: () => {},
  pcmPlayedSeconds: () => 0,
  pcmRecoveries: () => 0,
  pcmTeardown: () => {},
  pcmPause: () => mockCalls.push('pause'),
  pcmResume: () => mockCalls.push('resume'),
}));

const part = (id: string) => ({ id, pcm: new Uint8Array(24000 * 2), sampleRate: 24000 });
const swift = fs.readFileSync(path.join(__dirname, '../../modules/pcm-player/ios/PcmPlayerModule.swift'), 'utf8');

beforeEach(() => {
  jest.useFakeTimers();
  mockCalls.length = 0;
});
afterEach(() => jest.useRealTimers());

it('pauses again right after starting, when paused before the first audio', () => {
  const q = new PcmPlaybackQueue();
  q.pause();
  mockCalls.length = 0;
  q.enqueue(part('a'));
  expect(mockCalls).toEqual(['start', 'pause']);
  q.destroy();
});

it('does not pause a running class', () => {
  const q = new PcmPlaybackQueue();
  q.enqueue(part('a'));
  expect(mockCalls).toEqual(['start']);
  q.destroy();
});

it('the iPhone player never begins while paused, and Resume begins what arrived', () => {
  expect(swift).toContain('!self.userPaused && !self.playing');
  expect(swift).toMatch(/else if !self\.interrupted && self\.fedSeconds >= self\.prebufferSeconds \{\s*\/\/[^\n]*\n\s*self\.player\?\.play\(\)\s*\n\s*self\.playing = true/);
});

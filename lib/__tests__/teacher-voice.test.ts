/**
 * The teacher's voice must play on every switch, not on some of them.
 *
 * Three ways it went silent (see lib/teacher-voice.ts): leaving the page
 * turned audio off globally, which Android never undid; plays did not wait
 * for the audio mode; and a clip was sought before it had loaded.
 */
const mockCalls: string[] = [];
const mockAudio = { active: true };

class MockPlayer {
  isLoaded = false;
  playing = false;
  removed = false;
  constructor(public clip: number) {}
  pause() {
    this.playing = false;
  }
  seekTo() {
    if (!this.isLoaded) throw new Error('seek before ready');
    return Promise.resolve();
  }
  play() {
    if (this.removed) throw new Error('released');
    // Android's rule: with audio disabled, play() does nothing.
    if (mockAudio.active) this.playing = true;
  }
  remove() {
    this.removed = true;
  }
}

const mockMade: MockPlayer[] = [];
jest.mock('expo-audio', () => ({
  createAudioPlayer: (clip: number) => {
    const p = new MockPlayer(clip);
    mockMade.push(p);
    return p;
  },
  setAudioModeAsync: (mode: { playsInSilentMode?: boolean }) => {
    mockCalls.push(mode.playsInSilentMode ? 'mode:plays-on-silent' : 'mode:quiet-on-silent');
    return Promise.resolve();
  },
  setIsAudioActiveAsync: (on: boolean) => {
    mockCalls.push(on ? 'audio-on' : 'audio-off');
    mockAudio.active = on;
    return Promise.resolve();
  },
}));

jest.mock('@/assets/audio/teachers/drona-en.m4a', () => 1, { virtual: true });
jest.mock('@/assets/audio/teachers/drona-hinglish.m4a', () => 2, { virtual: true });
jest.mock('@/assets/audio/teachers/vedha-en.m4a', () => 3, { virtual: true });
jest.mock('@/assets/audio/teachers/vedha-hinglish.m4a', () => 4, { virtual: true });

import {
  playTeacherVoice,
  prepareTeacherVoices,
  releaseTeacherVoices,
} from '@/lib/teacher-voice';

const flush = () => new Promise((r) => setTimeout(r, 0));
const playing = () => mockMade.filter((p) => p.playing && !p.removed);

beforeEach(() => {
  releaseTeacherVoices();
  mockMade.length = 0;
  mockCalls.length = 0;
  mockAudio.active = true;
});

test('leaving the page never turns audio off', async () => {
  prepareTeacherVoices('english');
  releaseTeacherVoices();
  await flush();
  expect(mockCalls).not.toContain('audio-off');
});

test('a second visit still plays (audio switched off by an older build is turned back on)', async () => {
  mockAudio.active = false;
  prepareTeacherVoices('english');
  playTeacherVoice('vedha', 'english');
  await flush();
  expect(playing()).toHaveLength(1);
});

test('a play waits for the audio mode before starting', async () => {
  prepareTeacherVoices('english');
  playTeacherVoice('vedha', 'english');
  expect(playing()).toHaveLength(0);
  await flush();
  expect(mockCalls).toContain('mode:plays-on-silent');
  expect(playing()).toHaveLength(1);
});

test('a clip still loading is played without a seek', async () => {
  prepareTeacherVoices('english');
  playTeacherVoice('drona', 'english');
  await flush();
  expect(playing().map((p) => p.clip)).toEqual([1]);
});

test('switching back and forth plays each time, one voice at a time', async () => {
  prepareTeacherVoices('english');
  mockMade.forEach((p) => (p.isLoaded = true));
  for (const t of ['vedha', 'drona', 'vedha', 'drona'] as const) {
    playTeacherVoice(t, 'english');
    await flush();
    expect(playing()).toHaveLength(1);
    expect(playing()[0].clip).toBe(t === 'drona' ? 1 : 3);
  }
});

test('a fast double switch plays only the last one', async () => {
  prepareTeacherVoices('english');
  playTeacherVoice('vedha', 'english');
  playTeacherVoice('drona', 'english');
  await flush();
  expect(playing().map((p) => p.clip)).toEqual([1]);
});

test('the voice plays with the phone on silent', async () => {
  prepareTeacherVoices('english');
  await flush();
  expect(mockCalls).toContain('mode:plays-on-silent');
  expect(mockCalls).not.toContain('mode:quiet-on-silent');
});

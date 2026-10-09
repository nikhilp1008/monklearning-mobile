/**
 * How a sentence's board lines are written across it (`paceLines`).
 *
 * The live class writes each line word by word while its sentence is spoken.
 * These pin the rules the board relies on: lines take turns in order, formulas
 * and figures land whole, the writing ends before the voice does, and a short
 * line never crawls across a long sentence.
 */
import { paceLines } from '@/lib/drona-voice-client';

// Only the pure pacing function is under test: keep the audio stack out.
jest.mock('@/lib/widgets/registry', () => ({ REGISTRY_MANIFEST: [] }));
jest.mock('@/lib/pcm-player', () => ({ pcmAvailable: false }));
jest.mock('@/lib/pcm-playback-queue', () => ({ PcmPlaybackQueue: class {} }));
jest.mock('@/lib/audio-playback-queue', () => ({ AudioPlaybackQueue: class {} }));

const text = (t: string, type = 'text') => ({ type, text: t }) as never;

describe('paceLines', () => {
  it('shows lines whole when there is no sentence length to pace them to', () => {
    expect(paceLines([text('a b c')], undefined)).toEqual([undefined]);
    expect(paceLines([text('a b c')], 200)).toEqual([undefined]);
  });

  it('writes lines one after another, in proportion to their words', () => {
    const [a, b] = paceLines([text('one two'), text('three four five six')], 2000)!;
    expect(a!.delayMs).toBe(0);
    expect(b!.delayMs).toBe(a!.ms);
    expect(b!.ms).toBeCloseTo(a!.ms * 2, -1);
  });

  it('finishes before the sentence does', () => {
    const pace = paceLines([text('one two three'), text('four five six')], 4000);
    const last = pace[pace.length - 1]!;
    expect(last.delayMs + last.ms).toBeLessThan(4000);
  });

  it('lands a formula whole, at its moment', () => {
    const [, f] = paceLines([text('one two three four'), { type: 'formula', text: 'E = hv' } as never], 8000);
    expect(f!.ms).toBe(0);
    expect(f!.delayMs).toBeGreaterThan(0);
  });

  it('never writes slower than a hand does, and a heading faster still', () => {
    const [line] = paceLines([text('a short line')], 20000);
    expect(line!.ms).toBe(3 * 420);
    const [heading] = paceLines([text('The Photon: A Packet of Light', 'heading')], 10000);
    expect(heading!.ms).toBe(6 * 220);
  });
});

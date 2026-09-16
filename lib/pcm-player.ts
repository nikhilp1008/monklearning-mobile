/**
 * The native gapless player, when this build carries it.
 *
 * Guarded because the module only exists after a NATIVE rebuild — a JS
 * reload on an older binary must fall back to the file-based player rather
 * than crash. `available` is the single switch the rest of the code reads;
 * it is also what tells the server which dialect of audio frames to send.
 */
import { requireOptionalNativeModule } from 'expo-modules-core';

type PcmPlayerModule = {
  start(sampleRate: number, rate: number): void;
  feed(base64: string): void;
  fedSeconds(): number;
  stop(): void;
};

const native = requireOptionalNativeModule<PcmPlayerModule>('PcmPlayer');

export const pcmAvailable = native != null;

/** Speech rate, shared with the file-based player's constant by value: the
 *  founder tuned 1.15 by ear and both paths must sound the same. */
export const PCM_RATE = 1.15;

export function pcmStart(): void {
  native?.start(24000, PCM_RATE);
}

export function pcmFeed(b64: string): void {
  native?.feed(b64);
}

export function pcmFedSeconds(): number {
  return native?.fedSeconds() ?? 0;
}

export function pcmStop(): void {
  native?.stop();
}

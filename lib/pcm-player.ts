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
  feedBytes(data: Uint8Array): void;
  fedSeconds(): number;
  playedSeconds(): number;
  pause(): void;
  resume(): void;
  finish(): void;
  stop(): void;
};

const native = requireOptionalNativeModule<PcmPlayerModule>('PcmPlayer');

export const pcmAvailable = native != null;

/** Speech rate, shared with the file-based player's constant by value: the
 *  founder tuned 1.15 by ear and both paths must sound the same. */
export const PCM_RATE = 1.15;

export function pcmStart(rate: number = PCM_RATE): void {
  native?.start(24000, rate);
}

export function pcmFeed(b64: string): void {
  native?.feed(b64);
}

export function pcmFedSeconds(): number {
  return native?.fedSeconds() ?? 0;
}

/** The stream ended: releases an answer still held by the prebuffer. */
export function pcmFinish(): void {
  native?.finish();
}

export function pcmStop(): void {
  native?.stop();
}

export function pcmFeedBytes(data: Uint8Array): void {
  native?.feedBytes(data);
}

/** Sample-accurate playhead: frozen across pauses, 0 while prebuffering. */
export function pcmPlayedSeconds(): number {
  return native?.playedSeconds() ?? 0;
}

export function pcmPause(): void {
  native?.pause();
}

export function pcmResume(): void {
  native?.resume();
}

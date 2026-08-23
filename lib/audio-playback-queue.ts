import { createAudioPlayer, type AudioPlayer, type AudioStatus } from 'expo-audio';
import { File, Paths } from 'expo-file-system';

import { wrapPcmAsWav } from '@/lib/audio-pcm';

export interface PlaybackQueueItem {
  id: string;
  /** Raw headerless PCM bytes, decoded from the audio_chunk's base64 `audio` field. */
  pcm: Uint8Array;
  sampleRate: number;
}

/**
 * Sequential playback for TTS sentence clips arriving over the Drona voice
 * WebSocket. Each `audio_chunk` is a complete, already-synthesized clip (not
 * a low-latency fragment), so plain file-based playback via expo-audio is
 * enough here — no native streaming player needed, unlike mic capture.
 *
 * Reveal timing is simplified vs. the web client's reference implementation:
 * we fire `onItemStart` the moment a clip *starts* playing rather than
 * pre-scheduling reveals ahead of a sample-accurate audio clock (the web
 * client does this because Web Audio gives it that clock; expo-audio's
 * file-based player doesn't expose one precisely enough to bother).
 */
export class AudioPlaybackQueue {
  private player: AudioPlayer;
  private queue: { item: PlaybackQueueItem; uri: string }[] = [];
  private playing = false;
  private removeListener: (() => void) | null = null;
  /** Watchdog for a clip that was told to play and never started. */
  private startWatchdog: ReturnType<typeof setTimeout> | null = null;
  private lastPosition = -1;

  onItemStart?: (id: string) => void;
  onQueueDrained?: () => void;

  constructor() {
    // `keepAudioSessionActive` defaults to false, which makes expo-audio
    // deactivate the whole AVAudioSession after every clip finishes and
    // re-activate it on the next `play()`. Drona speaks one sentence per
    // clip, so that is a teardown-and-rebuild at every sentence boundary —
    // expensive, route-reconfiguring, and it clips the head of the next clip.
    // Nothing else in the app plays audio while a class is running, so
    // holding the session is both safe and much steadier.
    this.player = createAudioPlayer(null, { keepAudioSessionActive: true });
    const subscription = this.player.addListener('playbackStatusUpdate', (status: AudioStatus) => {
      if (status.didJustFinish) this.advance();
      else if (status.playing) {
        // Genuinely started — the watchdog has nothing to rescue.
        if (this.startWatchdog) {
          clearTimeout(this.startWatchdog);
          this.startWatchdog = null;
        }
      }
    });
    this.removeListener = () => subscription.remove();
  }

  enqueue(item: PlaybackQueueItem) {
    const file = new File(Paths.cache, `drona-tts-${item.id}.wav`);
    if (file.exists) file.delete();
    file.create();
    file.write(wrapPcmAsWav(item.pcm, item.sampleRate, 1, 16));
    this.queue.push({ item, uri: file.uri });
    if (!this.playing) this.advance();
  }

  private advance() {
    if (this.startWatchdog) {
      clearTimeout(this.startWatchdog);
      this.startWatchdog = null;
    }
    const next = this.queue.shift();
    if (!next) {
      this.playing = false;
      this.onQueueDrained?.();
      return;
    }
    this.playing = true;
    this.player.replace({ uri: next.uri });
    this.player.play();
    this.onItemStart?.(next.item.id);

    /**
     * `play()` is issued in the same tick as `replace()`, and on iOS that
     * reaches `AVPlayer.playImmediately(atRate:)` — which by documentation
     * does *not* wait for buffering. The item it is handed was created
     * microseconds earlier, so its status can still be `.unknown` with an
     * empty buffer. Nothing throws; the rate is simply set and can fall
     * straight back to zero. `AVPlayerItemDidPlayToEndTime` then never fires,
     * `didJustFinish` never arrives, `playing` stays true forever, and every
     * later sentence sits in the queue untouched — silence, with a board that
     * still paints because board events are flushed on `turn_complete`
     * regardless.
     *
     * A retry rather than a readiness gate on purpose: this is an inference,
     * not something observed on a device, so it must not be able to make
     * matters worse. If the first `play()` did work, `currentTime` has moved
     * and this is a no-op.
     */
    this.lastPosition = -1;
    this.startWatchdog = setTimeout(() => {
      this.startWatchdog = null;
      if (!this.playing) return;
      const position = this.player.currentTime ?? 0;
      if (position <= 0 || position === this.lastPosition) {
        this.player.play();
      }
      this.lastPosition = position;
    }, 400);
  }

  pause() {
    this.player.pause();
  }

  resume() {
    this.player.play();
  }

  /** Drops everything queued and stops the current clip — for barge-in/interrupt and session end. */
  clear() {
    this.queue = [];
    this.playing = false;
    this.player.pause();
  }

  destroy() {
    this.clear();
    this.removeListener?.();
    this.player.remove();
  }
}

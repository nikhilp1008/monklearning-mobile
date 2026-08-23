import { createAudioPlayer, type AudioPlayer, type AudioStatus } from 'expo-audio';
import { File, Paths } from 'expo-file-system';

import { wrapPcmAsWav } from '@/lib/audio-pcm';

/** How often the supervisor looks at the playhead. */
const SUPERVISOR_TICK_MS = 400;
/**
 * Consecutive still ticks before a clip is written off — 2.0s of a clip that
 * claims to be playing without the playhead moving. These are local files that
 * are fully on disk before `play()` is called, so a real one is never this slow
 * to get going.
 */
const STALL_TICKS_BEFORE_SKIP = 5;
/** How close to the end counts as finished, for a missed `didJustFinish`. */
const END_SLACK_S = 0.15;

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
  /** Ticker that watches a playing clip for progress; see `supervise`. */
  private supervisor: ReturnType<typeof setInterval> | null = null;
  private lastPosition = -1;
  private stalledTicks = 0;

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
    this.stopSupervisor();
    const next = this.queue.shift();
    if (!next) {
      this.playing = false;
      this.onQueueDrained?.();
      return;
    }
    this.playing = true;
    this.player.replace({ uri: next.uri });
    this.player.play();
    // Fired even if the clip turns out to be silent: the caption and board
    // line are the lesson, and a student who cannot hear should still get
    // them. See `supervise` for what happens when the audio never arrives.
    this.onItemStart?.(next.item.id);
    this.startSupervisor();
  }

  /**
   * Watches the playhead and moves the queue on when it stops moving.
   *
   * `didJustFinish` is the only thing that normally advances the queue, and it
   * rides on `AVPlayerItemDidPlayToEndTime` — so anything that stops a clip
   * from reaching its end stops the whole class, permanently and silently.
   * Every later sentence then piles into `queue` untouched.
   *
   * That is not hypothetical. On a simulator whose CoreAudio has no output
   * device (`AQMEIO: error -66680 finding/initializing Default-InputOutput`)
   * AVPlayer still reports `timeControlStatus == .playing` and a correct
   * duration, while the playhead sits at exactly 0.0 forever. The first clip
   * wedges and nothing is ever heard or advanced again. A device with a
   * genuine route can hit the same shape for its own reasons — a failed item,
   * a lost interruption, a route change mid-clip.
   *
   * So: re-issue `play()` once in case it was a lost start, then give up on
   * the clip and take the next one. Losing one sentence is survivable; losing
   * the rest of the lesson is not.
   */
  private startSupervisor() {
    this.lastPosition = -1;
    this.stalledTicks = 0;
    this.supervisor = setInterval(() => {
      if (!this.playing) {
        this.stopSupervisor();
        return;
      }
      const position = this.player.currentTime ?? 0;
      const duration = this.player.duration ?? 0;

      // A missed `didJustFinish` — the clip played out but the notification
      // never landed. Treat reaching the end as the end.
      if (duration > 0 && position >= duration - END_SLACK_S) {
        this.advance();
        return;
      }

      if (position > this.lastPosition) {
        this.lastPosition = position;
        this.stalledTicks = 0;
        return;
      }

      this.stalledTicks += 1;
      if (this.stalledTicks === 1) {
        // Possibly just a start that didn't take. Local files load fast, so
        // one nudge is enough to tell a slow start from a dead one.
        this.player.play();
        return;
      }
      if (this.stalledTicks >= STALL_TICKS_BEFORE_SKIP) {
        this.advance();
      }
    }, SUPERVISOR_TICK_MS);
  }

  private stopSupervisor() {
    if (this.supervisor) {
      clearInterval(this.supervisor);
      this.supervisor = null;
    }
    this.lastPosition = -1;
    this.stalledTicks = 0;
  }

  pause() {
    this.player.pause();
  }

  resume() {
    this.player.play();
  }

  /** Drops everything queued and stops the current clip — for barge-in/interrupt and session end. */
  clear() {
    this.stopSupervisor();
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

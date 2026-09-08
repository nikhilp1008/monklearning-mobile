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
  /**
   * Paused BY THE STUDENT, as opposed to not currently playing.
   *
   * The supervisor's whole job is to notice a playhead that has stopped
   * moving and rescue the class from it. A pause is a playhead that has
   * stopped moving ON PURPOSE, and the supervisor could not tell the
   * difference: 400ms after the pause button it re-issued `play()` and the
   * lesson carried on talking, which is why pause appeared to do nothing.
   * Had that `play()` not taken, it would then have skipped the sentence
   * outright at 2s. So the pause has to be a state the queue knows about,
   * not just a call passed through to the player.
   */
  private paused = false;

  onItemStart?: (id: string) => void;
  onQueueDrained?: () => void;

  /** Nothing playing and nothing waiting to play. The checkpoint flush gates
   *  on this: `turn_complete` says the server finished SENDING, which on a
   *  buffered queue is several sentences before the student finished HEARING. */
  get idle() {
    return !this.playing && this.queue.length === 0;
  }

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
    // `!this.paused` matters on a long pause: the server keeps sending the
    // rest of the turn, and without it the first chunk to arrive after the
    // queue had drained would start speaking on its own.
    if (!this.playing && !this.paused) this.advance();
  }

  private advance() {
    this.stopSupervisor();
    // A clip that ends while the student is paused must not pull the next one
    // in behind it — that would resume the lesson without them asking. The
    // queue keeps its place and `resume` calls back in here. `playing` is left
    // as-is on purpose, so `idle` stays false and a held checkpoint is not
    // released by a pause.
    if (this.paused) return;
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

  /** True while the student has the class paused. `idle` stays false through a
   *  pause, so a turn held waiting on drain is not released by one. */
  get isPaused() {
    return this.paused;
  }

  pause() {
    if (this.paused) return;
    this.paused = true;
    // Stand the supervisor down first: it is the thing that would otherwise
    // undo this on its next tick. See the `paused` field's comment.
    this.stopSupervisor();
    this.player.pause();
  }

  resume() {
    if (!this.paused) return;
    this.paused = false;
    if (this.playing) {
      // Mid-clip: pick the same clip back up and start watching it again.
      // `startSupervisor` resets lastPosition, so the stall counter does not
      // carry the pause over into a false skip.
      this.player.play();
      this.startSupervisor();
    } else {
      // Either the queue drained into the pause, or a clip ended while paused
      // and `advance` deliberately declined to start the next one. Take it now.
      this.advance();
    }
  }

  /** Drops everything queued and stops the current clip — for barge-in/interrupt and session end. */
  clear() {
    this.stopSupervisor();
    this.queue = [];
    this.playing = false;
    // A barge-in ends the pause too: the student is talking to Drona now, and
    // leaving `paused` set would silently swallow the reply's audio.
    this.paused = false;
    this.player.pause();
  }

  destroy() {
    this.clear();
    this.removeListener?.();
    this.player.remove();
  }
}

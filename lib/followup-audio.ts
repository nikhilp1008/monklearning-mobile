import { createAudioPlayer, type AudioPlayer, type AudioStatus } from 'expo-audio';
import { File, Paths } from 'expo-file-system';

/**
 * Sequential playback for one follow-up answer, and nothing else.
 *
 * Deliberately NOT `AudioPlaybackQueue`. That one belongs to the live
 * classroom, and the follow-up borrowing it produced a voice that stuttered
 * and talked over itself — twice, at two different clip sizes, because the
 * size was never the cause. Two of its behaviours are right for a lesson and
 * wrong for this:
 *
 *  - It watches the playhead every 400ms and, when the position has not moved,
 *    re-issues `play()` before eventually skipping the clip. That exists for a
 *    real failure: on a simulator with no audio device AVPlayer reports
 *    `playing` while the playhead sits at 0.0 forever, and without the nudge a
 *    whole lesson dies in silence. But on a clip shorter than a couple of
 *    ticks, "the playhead has not moved" means "this already finished" — so it
 *    replayed fragments.
 *
 *  - It drives ONE shared `AudioPlayer` through `replace()`. A `didJustFinish`
 *    belonging to the clip that was just replaced still arrives, and advances
 *    the queue again — starting a clip while another is sounding.
 *
 * Neither is a bug over there. Both are fatal here.
 *
 * This can be simpler because of one fact the classroom does not have: we
 * synthesise these clips ourselves, so their length is known exactly — bytes
 * over the byte rate, not an estimate. That turns "has it finished?" from
 * something to watch for into something to calculate, so the timer below IS
 * the safety net and no nudging is needed.
 */

/** 24kHz, 16-bit, mono — what Rumik sends and what the server wraps. */
const BYTE_RATE = 24000 * 2 * 1;
/** A WAV header before the samples; `wav.length - this` is the audio. */
const WAV_HEADER_BYTES = 44;
/**
 * How long after a clip's own duration to wait before moving on regardless.
 *
 * Only ever reached when `didJustFinish` does not arrive — a lost
 * notification, a route change, an output device that never really started.
 * Generous enough not to clip the tail of a clip that is simply a little
 * longer than its header claims, short enough that a lost event is not heard
 * as the answer stopping.
 */
const FINISH_GRACE_MS = 350;

export class FollowUpAudio {
  private player: AudioPlayer;
  private removeListener: () => void;
  private queue: { uri: string; ms: number }[] = [];
  private playing = false;
  private timer: ReturnType<typeof setTimeout> | null = null;
  private stopped = false;
  private seq = 0;

  constructor(private readonly key: string) {
    // `keepAudioSessionActive` for the same reason the classroom sets it:
    // without it expo-audio tears the whole AVAudioSession down after every
    // clip and rebuilds it on the next `play()`, which clips the head off the
    // one that follows. An answer is a handful of clips back to back, so that
    // would be audible at every join.
    this.player = createAudioPlayer(null, { keepAudioSessionActive: true });
    const subscription = this.player.addListener(
      'playbackStatusUpdate',
      (status: AudioStatus) => {
        if (status.didJustFinish) this.next();
      }
    );
    this.removeListener = () => subscription.remove();
  }

  /** Adds one finished WAV to the end of the answer. */
  enqueue(wav: Uint8Array) {
    if (this.stopped) return;
    const ms = Math.max(
      0,
      Math.round(((wav.length - WAV_HEADER_BYTES) / BYTE_RATE) * 1000)
    );
    const file = new File(Paths.cache, `followup-${this.key}-${this.seq++}.wav`);
    try {
      if (file.exists) file.delete();
      file.create();
      file.write(wav);
    } catch {
      // A clip we cannot write is one sentence lost, not an answer lost.
      return;
    }
    this.queue.push({ uri: file.uri, ms });
    if (!this.playing) this.next();
  }

  /**
   * Moves to the next clip.
   *
   * Guarded against being called twice for the same clip — `didJustFinish` and
   * the fallback timer can both fire, and that double-advance is precisely how
   * the classroom's queue ended up with two clips sounding at once.
   */
  private next() {
    if (this.stopped) return;
    this.clearTimer();
    const item = this.queue.shift();
    if (!item) {
      this.playing = false;
      return;
    }
    this.playing = true;
    this.player.replace({ uri: item.uri });
    this.player.play();
    // Its own length, known rather than watched. If `didJustFinish` arrives
    // first it cancels this; if it never arrives, this is what keeps the rest
    // of the answer playing.
    this.timer = setTimeout(() => {
      this.timer = null;
      this.next();
    }, item.ms + FINISH_GRACE_MS);
  }

  private clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  /** Stops everything and releases the player. Safe to call more than once. */
  stop() {
    if (this.stopped) return;
    this.stopped = true;
    this.clearTimer();
    this.queue = [];
    this.playing = false;
    try {
      this.player.pause();
    } catch {
      // Already gone; nothing to stop.
    }
    this.removeListener();
    try {
      this.player.remove();
    } catch {
      // Same.
    }
  }
}

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
/**
 * A deliberate pause between sentences.
 *
 * The clips are split where a speaker pauses, so a join wants to SOUND like a
 * pause rather than like two files butted together. Without it the next
 * sentence begins the instant the last sample ends, which reads as rushed —
 * the opposite of a teacher drawing breath before the next point.
 */
const SENTENCE_GAP_MS = 260;

export class FollowUpAudio {
  private queue: { uri: string; ms: number }[] = [];
  /** The clip sounding right now, with the listener and timer that belong to
   *  it. Everything about a clip is torn down before the next one starts. */
  private current: { player: AudioPlayer; done: () => void } | null = null;
  private timer: ReturnType<typeof setTimeout> | null = null;
  private stopped = false;
  private seq = 0;
  /** Sentences begun, so the gap is never put in front of the first. */
  private spoken = 0;
  /** True between sentences, while the gap timer is waiting to start one. */
  private waiting = false;

  /**
   * Called when the queue has nothing left to play.
   *
   * May fire more than once per answer, and that is not a bug: sentences are
   * synthesised as they are spoken, so the queue legitimately runs dry between
   * them. Only the caller knows whether the stream has also finished, so only
   * the caller can decide that "empty" means "done talking".
   */
  onIdle: (() => void) | null = null;

  constructor(private readonly key: string) {}

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
    // `waiting` matters as much as `current`: during the gap between
    // sentences nothing is sounding, but a clip has already been taken and is
    // held by the timer. Without this a clip arriving in that window would
    // start a second advance and the held one would be dropped.
    if (!this.current && !this.waiting) this.next();
  }

  /**
   * Tears down the clip that is sounding and starts the next.
   *
   * A player PER CLIP, rather than one player re-pointed with `replace()`.
   * That sharing is exactly what made both earlier attempts overlap: the
   * `didJustFinish` belonging to a clip that has just been replaced still
   * arrives, advances the queue a second time, and puts two clips in the air.
   * Here the previous clip's listener is removed and its player released
   * before the next one exists, so there is nothing left to fire late.
   */
  private next = () => {
    if (this.stopped) return;
    this.teardown();

    const item = this.queue.shift();
    if (!item) {
      this.onIdle?.();
      return;
    }

    // Let the pause land before the next sentence starts — but never in front
    // of the FIRST one, where it would just be latency.
    if (this.spoken > 0) {
      this.waiting = true;
      this.timer = setTimeout(() => {
        this.timer = null;
        this.waiting = false;
        this.start(item);
      }, SENTENCE_GAP_MS);
      return;
    }
    this.start(item);
  };

  private start(item: { uri: string; ms: number }) {
    if (this.stopped) return;

    const player = createAudioPlayer({ uri: item.uri }, { keepAudioSessionActive: true });
    this.spoken += 1;
    const subscription = player.addListener(
      'playbackStatusUpdate',
      (status: AudioStatus) => {
        if (status.didJustFinish) this.next();
      }
    );
    this.current = {
      player,
      done: () => {
        subscription.remove();
        try {
          player.remove();
        } catch {
          // Already released.
        }
      },
    };
    player.play();

    // Its own length, known rather than watched — bytes over byte rate. Only
    // reached when `didJustFinish` never arrives: a lost notification, a route
    // change, an output device that never really started.
    this.timer = setTimeout(this.next, item.ms + FINISH_GRACE_MS);
  }

  private teardown() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.current) {
      this.current.done();
      this.current = null;
    }
  }

  /** Stops everything and releases the player. Safe to call more than once. */
  stop() {
    if (this.stopped) return;
    this.stopped = true;
    this.waiting = false;
    this.queue = [];
    this.teardown();
  }
}

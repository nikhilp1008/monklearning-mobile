import {
  pcmFeedBytes,
  pcmPause,
  pcmPlayedSeconds,
  pcmResume,
  pcmStart,
  pcmStop,
} from '@/lib/pcm-player';

/**
 * AudioPlaybackQueue's contract on the gapless player.
 *
 * The classroom server streams each sentence as ~1s PCM parts, and the old
 * queue played every part as its own WAV file — a load-and-start gap every
 * second, which is the texture the classroom voice has always had. This
 * adapter feeds the same parts into one AVAudioEngine stream instead.
 *
 * The reveal problem is the whole reason this file is more than ten lines.
 * The old queue fired `onItemStart` when a part's FILE began playing, and
 * the board reveals hang off that. A continuous stream has no file starts —
 * but it has something better, the thing the queue's own comment wished for:
 * a sample-accurate playhead. Each part's start offset is recorded as it is
 * fed, and a 100ms ticker fires `onItemStart` as the playhead crosses each
 * offset. Same contract, sharper clock.
 */
type QueueItem = { id: string; pcm: Uint8Array; sampleRate: number };

const TICK_MS = 100;
/** Float-comparison dust, nothing more. The old 0.15s "slack" fired the
 *  drain EARLY — and the classroom mounts the checkpoint on that signal,
 *  switching the audio session for the mic while the sentence's tail was
 *  still sounding. The founder heard it as the teacher swallowing the last
 *  two words of a sentence. */
const DRAIN_EPS_S = 0.02;
/** Rendered-to-audible settle: the completion callback fires when the last
 *  buffer is consumed by the engine, a beat before it has fully left the
 *  speaker. The drain waits this long past catch-up so nothing that follows
 *  it can talk over the tail. */
const DRAIN_GRACE_MS = 250;

export class PcmPlaybackQueue {
  onItemStart?: (id: string) => void;
  onQueueDrained?: () => void;

  private started = false;
  private fedSec = 0;
  private pending: { id: string; startSec: number }[] = [];
  private ticker: ReturnType<typeof setInterval> | null = null;
  private drainedFired = true;
  private drainTimer: ReturnType<typeof setTimeout> | null = null;

  get idle(): boolean {
    return this.pending.length === 0 && pcmPlayedSeconds() >= this.fedSec - DRAIN_EPS_S;
  }

  enqueue(item: QueueItem) {
    if (!this.started) {
      // 1x, deliberately — NOT the follow-up's 1.15. A live class is paced
      // by the teacher's own plan, and the founder heard 1.15 as rushed
      // here. It also keeps the reveal clock honest: offsets are recorded
      // in fed (real-time) seconds and compared against played seconds, so
      // any rate other than 1 would drift the board late by exactly that
      // factor over a turn.
      pcmStart(1.0);
      this.started = true;
      this.fedSec = 0;
    }
    this.pending.push({ id: item.id, startSec: this.fedSec });
    this.fedSec += item.pcm.length / 2 / item.sampleRate;
    pcmFeedBytes(item.pcm);
    this.drainedFired = false;
    if (this.drainTimer) {
      // More audio arrived while the grace timer counted down: not drained.
      clearTimeout(this.drainTimer);
      this.drainTimer = null;
    }
    if (!this.ticker) this.ticker = setInterval(this.tick, TICK_MS);
  }

  private tick = () => {
    const played = pcmPlayedSeconds();
    while (this.pending.length && this.pending[0].startSec <= played) {
      const item = this.pending.shift()!;
      this.onItemStart?.(item.id);
    }
    if (!this.pending.length && !this.drainedFired && !this.drainTimer
        && played >= this.fedSec - DRAIN_EPS_S && this.fedSec > 0) {
      this.drainTimer = setTimeout(() => {
        this.drainTimer = null;
        if (this.drainedFired) return;
        this.drainedFired = true;
        this.onQueueDrained?.();
      }, DRAIN_GRACE_MS);
    }
  };

  pause() {
    pcmPause();
  }

  resume() {
    pcmResume();
  }

  /** Drops everything queued and silences the stream — the interruption
   *  path. The engine restarts lazily on the next enqueue. */
  clear() {
    pcmStop();
    this.started = false;
    this.fedSec = 0;
    this.pending = [];
    this.drainedFired = true;
    if (this.drainTimer) {
      clearTimeout(this.drainTimer);
      this.drainTimer = null;
    }
  }

  destroy() {
    this.clear();
    if (this.ticker) {
      clearInterval(this.ticker);
      this.ticker = null;
    }
  }
}

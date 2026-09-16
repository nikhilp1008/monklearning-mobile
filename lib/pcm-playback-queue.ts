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
/** How far past the last fed sample the playhead must reach to call the
 *  queue drained — one tick of slack for the clock's own granularity. */
const DRAIN_SLACK_S = 0.15;

export class PcmPlaybackQueue {
  onItemStart?: (id: string) => void;
  onQueueDrained?: () => void;

  private started = false;
  private fedSec = 0;
  private pending: { id: string; startSec: number }[] = [];
  private ticker: ReturnType<typeof setInterval> | null = null;
  private drainedFired = true;

  get idle(): boolean {
    return this.pending.length === 0 && pcmPlayedSeconds() >= this.fedSec - DRAIN_SLACK_S;
  }

  enqueue(item: QueueItem) {
    if (!this.started) {
      pcmStart();
      this.started = true;
      this.fedSec = 0;
    }
    this.pending.push({ id: item.id, startSec: this.fedSec });
    this.fedSec += item.pcm.length / 2 / item.sampleRate;
    pcmFeedBytes(item.pcm);
    this.drainedFired = false;
    if (!this.ticker) this.ticker = setInterval(this.tick, TICK_MS);
  }

  private tick = () => {
    const played = pcmPlayedSeconds();
    while (this.pending.length && this.pending[0].startSec <= played) {
      const item = this.pending.shift()!;
      this.onItemStart?.(item.id);
    }
    if (!this.pending.length && !this.drainedFired
        && played >= this.fedSec - DRAIN_SLACK_S && this.fedSec > 0) {
      this.drainedFired = true;
      this.onQueueDrained?.();
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
  }

  destroy() {
    this.clear();
    if (this.ticker) {
      clearInterval(this.ticker);
      this.ticker = null;
    }
  }
}

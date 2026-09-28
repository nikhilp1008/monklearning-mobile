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

/**
 * A DEAD ENGINE, SEEN FROM THE ONLY CLOCK JS HAS.
 *
 * iOS stops an AVAudioEngine for a route change (headphones, Bluetooth,
 * AirPlay, and on the simulator the Mac's default output changing) and never
 * restarts it. The native player's recovery (2eff0e6) is not in every binary
 * — any build before 2026-09-26 lacks it — and in 2eff0e6 itself the flushed
 * buffers' completions land before the configuration-change notification
 * retires their generation, and a failed engine.start() is never retried.
 * The native follow-up closes both (a completion counts only while the engine
 * runs; the start is retried with backoff), so on a current binary this is
 * the fallback, for an engine that stays dead. Without a native recovery JS
 * sees one of two shapes, and both used to end the class's voice for good:
 *
 * - JUMP: `pcmPlayedSeconds` counts `.dataPlayedBack` completions, and a
 *   stopped player completes EVERY queued buffer at once. The playhead leaps
 *   by the whole backlog (10–60s: the server runs ahead), faster than any
 *   speaker can play, and the ticker used to announce all of it in one tick —
 *   board lines for audio nobody heard.
 * - FROZEN: buffers fed to a stopped engine never complete. The playhead sits
 *   still with audio queued, `onItemStart` never fires again, and every later
 *   turn's lines stay buffered.
 *
 * The playhead moves in whole-buffer steps (~1s parts), so it can never
 * legitimately outrun the wall clock by more than scheduling jitter, and it
 * can never legitimately stand still with audio queued for longer than the
 * buffer at the head plus a margin. Either is treated as a dead engine: the
 * stream is rebuilt and everything not yet heard is fed again. A buffer cut
 * off mid-way replays from its start — about a second may repeat, the same
 * trade the native recovery makes.
 */
const JUMP_SLACK_S = 0.75;
const FROZEN_SLACK_MS = 1500;
/** The native prebuffer: below this much fed audio the player has not been
 *  told to play yet, so a still playhead is waiting, not dead. */
const PREBUFFER_S = 0.5;
/** A stopped player's completions reach the main queue AFTER `pcmStop()`
 *  returns; `pcmStart()` zeroes the counter, so start only once they have
 *  landed, or they inflate the new stream's clock. */
const RESTART_DELAY_MS = 250;
/** `pcmStart()` throws when the session will not take an engine yet (a route
 *  still settling, a call still holding the audio). The rebuild keeps
 *  everything held and tries again, backing off to this. */
const RESTART_RETRY_MAX_MS = 4000;
/** Never loop: a route that keeps dying gets a few rebuilds a minute, and the
 *  client's drain watchdog still releases a held turn after that. */
const MAX_RECOVERIES_PER_MIN = 4;

/** Rebuilds are rare and worth seeing in a dev log; the same switch as the
 *  voice client's reveal probe, so it is silent everywhere else. */
const PROBE = __DEV__ && process.env.EXPO_PUBLIC_REVEAL_PROBE === '1';
const probe = (line: string) => {
  if (PROBE) console.log(`[pcm-queue] ${Date.now()} ${line}`);
};

type Held = { id: string; pcm: Uint8Array; startSec: number; durSec: number };
type Reason = 'jump' | 'frozen';

export class PcmPlaybackQueue {
  onItemStart?: (id: string) => void;
  onQueueDrained?: () => void;
  /** Diagnostics hook: fired after a dead engine has been rebuilt. */
  onRecovered?: (info: { reason: Reason; heardUpTo: number; replayed: number }) => void;

  private started = false;
  private fedSec = 0;
  private pending: { id: string; startSec: number }[] = [];
  /** Every fed part whose audio has not been fully heard — kept so a rebuilt
   *  stream can be fed again. Pruned as the playhead passes. */
  private held: Held[] = [];
  private ticker: ReturnType<typeof setInterval> | null = null;
  private drainedFired = true;
  private drainTimer: ReturnType<typeof setTimeout> | null = null;
  private paused = false;
  private lastPlayed = 0;
  private lastMoveAt = 0;
  private restartTimer: ReturnType<typeof setTimeout> | null = null;
  /** The rebuild in flight: set from detection until `pcmStart()` succeeds. */
  private rebuild: { reason: Reason; heardUpTo: number; announced: Set<string>; failures: number } | null =
    null;
  private recoveries: number[] = [];

  get idle(): boolean {
    return (
      !this.restartTimer &&
      this.pending.length === 0 &&
      pcmPlayedSeconds() >= this.fedSec - DRAIN_EPS_S
    );
  }

  enqueue(item: QueueItem) {
    const durSec = item.pcm.length / 2 / item.sampleRate;
    if (this.restartTimer) {
      // Mid-rebuild: the restart feeds `held` in order, this included.
      this.held.push({ id: item.id, pcm: item.pcm, startSec: -1, durSec });
      this.pending.push({ id: item.id, startSec: -1 });
      this.drainedFired = false;
      return;
    }
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
      this.lastPlayed = 0;
    }
    // Audio arriving at an empty queue restarts the stall clock: the time
    // between turns is silence nobody is waiting on.
    if (pcmPlayedSeconds() >= this.fedSec - DRAIN_EPS_S) this.lastMoveAt = Date.now();
    this.pending.push({ id: item.id, startSec: this.fedSec });
    this.held.push({ id: item.id, pcm: item.pcm, startSec: this.fedSec, durSec });
    this.fedSec += durSec;
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
    if (this.restartTimer) return;
    const played = pcmPlayedSeconds();
    const now = Date.now();

    if (this.started && !this.paused) {
      const sinceMoveS = (now - this.lastMoveAt) / 1000;
      if (played - this.lastPlayed > sinceMoveS + JUMP_SLACK_S) {
        // Checked BEFORE anything is announced: the leap is audio nobody
        // heard, and its board lines must wait for the replay.
        this.recover('jump', this.lastPlayed);
        return;
      }
      if (played === this.lastPlayed && this.fedSec - played > DRAIN_EPS_S && this.fedSec >= PREBUFFER_S) {
        const head = this.held.find((h) => h.startSec + h.durSec > played + DRAIN_EPS_S);
        const allowMs = (head ? head.durSec * 1000 : 1000) + FROZEN_SLACK_MS;
        if (now - this.lastMoveAt > allowMs) {
          this.recover('frozen', played);
          return;
        }
      }
    }
    if (played !== this.lastPlayed) {
      this.lastPlayed = played;
      this.lastMoveAt = now;
    }

    while (this.pending.length && this.pending[0].startSec <= played) {
      const item = this.pending.shift()!;
      this.onItemStart?.(item.id);
    }
    // Keep the head part (it may be mid-play) and everything after it.
    while (this.held.length && this.held[0].startSec + this.held[0].durSec <= played - DRAIN_EPS_S) {
      this.held.shift();
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

  /** Rebuild the stream and feed everything not heard past `heardUpTo`. */
  private recover(reason: Reason, heardUpTo: number) {
    const now = Date.now();
    const played = pcmPlayedSeconds();
    this.recoveries = this.recoveries.filter((t) => now - t < 60_000);
    if (this.recoveries.length >= MAX_RECOVERIES_PER_MIN) {
      // Stop re-arming; the drain watchdog upstream still frees the turn.
      probe(
        `DEAD ENGINE (${reason.toUpperCase()}) played=${played.toFixed(2)}s — ` +
          `${this.recoveries.length} rebuilds in the last minute, not rebuilding`
      );
      this.lastMoveAt = now;
      this.lastPlayed = played;
      return;
    }
    this.recoveries.push(now);
    const announced = new Set(this.held.map((h) => h.id));
    for (const p of this.pending) announced.delete(p.id);
    const replay = this.held.filter((h) => h.startSec + h.durSec > heardUpTo + DRAIN_EPS_S);
    this.held = replay;
    probe(
      `DEAD ENGINE (${reason.toUpperCase()}) heard=${heardUpTo.toFixed(2)}s played=${played.toFixed(2)}s ` +
        `fed=${this.fedSec.toFixed(2)}s still=${now - this.lastMoveAt}ms — rebuilding, ` +
        `${replay.length} part(s) to replay`
    );
    if (this.drainTimer) {
      clearTimeout(this.drainTimer);
      this.drainTimer = null;
    }
    pcmStop();
    this.started = false;
    this.rebuild = { reason, heardUpTo, announced, failures: 0 };
    this.restartTimer = setTimeout(this.restart, RESTART_DELAY_MS);
  }

  private restart = () => {
    this.restartTimer = null;
    const rebuild = this.rebuild;
    if (!rebuild) return;
    try {
      pcmStart(1.0);
    } catch (e) {
      // Thrown out of a timer this would be an uncaught error, and the queue
      // would be left half-rebuilt with nothing retrying: silence again.
      // Everything stays held (enqueue keeps appending while restartTimer is
      // set), so the next attempt feeds it all, in order.
      rebuild.failures += 1;
      const retryMs = Math.min(RESTART_RETRY_MAX_MS, RESTART_DELAY_MS * 2 ** rebuild.failures);
      probe(`rebuild start failed (${rebuild.failures}): ${String(e)} — retrying in ${retryMs}ms`);
      this.restartTimer = setTimeout(this.restart, retryMs);
      return;
    }
    this.rebuild = null;
    this.started = true;
    this.fedSec = 0;
    const { reason, heardUpTo, announced } = rebuild;
    const pending: { id: string; startSec: number }[] = [];
    for (const h of this.held) {
      h.startSec = this.fedSec;
      this.fedSec += h.durSec;
      pcmFeedBytes(h.pcm);
      // A part already announced (its start was heard) replays silently;
      // everything else is announced again as the new playhead reaches it.
      if (!announced.has(h.id)) pending.push({ id: h.id, startSec: h.startSec });
    }
    this.pending = pending;
    this.lastPlayed = 0;
    this.lastMoveAt = Date.now();
    this.drainedFired = this.held.length === 0 && this.drainedFired;
    if (this.paused) pcmPause();
    probe(
      `REBUILT after ${reason.toUpperCase()}: replaying ${this.held.length} part(s) ` +
        `(${this.fedSec.toFixed(2)}s), ${pending.length} still to announce`
    );
    this.onRecovered?.({ reason, heardUpTo, replayed: this.held.length });
  };

  pause() {
    this.paused = true;
    pcmPause();
  }

  resume() {
    this.paused = false;
    // A pause is a playhead standing still on purpose; the stall clock
    // starts again from the moment it is released.
    this.lastMoveAt = Date.now();
    pcmResume();
  }

  /** Drops everything queued and silences the stream — the interruption
   *  path. The engine restarts lazily on the next enqueue. */
  clear() {
    if (this.restartTimer) {
      clearTimeout(this.restartTimer);
      this.restartTimer = null;
    }
    this.rebuild = null;
    pcmStop();
    this.started = false;
    this.fedSec = 0;
    this.pending = [];
    this.held = [];
    this.paused = false;
    this.lastPlayed = 0;
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

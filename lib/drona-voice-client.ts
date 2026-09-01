import { AudioPlaybackQueue } from '@/lib/audio-playback-queue';
import { base64ToBytes } from '@/lib/audio-pcm';

export interface BoardEvent {
  seq: number;
  type: 'text' | 'heading' | 'note' | 'formula' | string;
  text?: string;
  latex?: string;
  emphasis?: boolean;
}

export interface DronaState {
  phase: string;
  current_segment?: number;
  is_muted?: boolean;
  message?: string;
  /** Option chips for a checkpoint question. Applied on `turn_complete`, not
   *  on arrival — see the buffering note in handleMessage. */
  check_options?: string[];
  question_text?: string;
}

/** Verdict for a checkpoint answer, painted on the chosen chip. */
export interface DronaAnswerResult {
  verdict: 'correct' | 'partial' | 'incorrect' | string;
  message?: string;
}

export interface DronaMeta {
  segment_index: number;
  total_segments: number;
  session_complete: boolean;
}

export type ConnectionStatus = 'connecting' | 'open' | 'reconnecting' | 'closed';

export interface DronaVoiceHandlers {
  onConnectionChange?: (status: ConnectionStatus) => void;
  onState?: (state: DronaState) => void;
  /** Board items revealed one at a time, synced to when their paired sentence starts playing. */
  onBoardReveal?: (event: BoardEvent) => void;
  /** Full board history re-painted on reconnect — no reveal pacing, render immediately. */
  onBoardReplay?: (events: BoardEvent[]) => void;
  onCaptionReveal?: (text: string) => void;
  onTranscriptPartial?: (text: string) => void;
  onTranscriptFinal?: (text: string, confidence?: number) => void;
  onMeta?: (meta: DronaMeta) => void;
  /**
   * The first frame of a turn has landed — board events or audio, whichever
   * came first. Real content now exists on the client, seconds before it is
   * spoken: `board_events` arrives ahead of its audio and is buffered until
   * each line's clip plays. The loading card uses this to stop guessing and
   * say the lesson is being written.
   */
  onTurnStarted?: () => void;
  onTurnComplete?: () => void;
  onTurnError?: (message: string) => void;
  onSttTooShort?: (message: string) => void;
  onAnswerResult?: (result: DronaAnswerResult) => void;
  /** Server signalled the lesson itself is finished (not a disconnect). */
  onSessionEnded?: () => void;
  onError?: (message: string) => void;
}

const RECONNECT_DELAYS_MS = [1000, 2000, 4000, 8000, 8000, 8000];
/** Backstop for a turn whose audio never drains — a clip that fails to load,
 *  or a TTS gap that leaves the queue stalled. Without it, gating the flush on
 *  drain would trade "the checkpoint mounts too early" for the much worse "the
 *  checkpoint never mounts at all". Generous: it is a safety net, not a pace. */
const DRAIN_WATCHDOG_MS = 20000;
/** Matches web's TURN_ERROR_RECOVERY_MS. A `turn_error` with no recovery means
 *  `turn_complete` is never coming, so whatever the turn was holding has to be
 *  released or the student sits on a dead board. */
const TURN_ERROR_RECOVERY_MS = 15000;
/** TTS sample rate — live-verified server-side (filler-cache fallback byte
 *  math). Bit depth/channels are the standard inference (16-bit mono), not
 *  independently confirmed. */
const TTS_SAMPLE_RATE = 24000;

/**
 * WebSocket client for a live Drona tutoring session. Mirrors
 * monk-learning-webpage's src/lib/drona/voice.ts protocol, adapted for React
 * Native:
 * - Playback uses a sequential file-based queue (AudioPlaybackQueue)
 *   instead of Web Audio's sample-accurate scheduling, since every
 *   audio_chunk is already a complete per-sentence clip, not a low-latency
 *   fragment — no native streaming player needed for this half.
 * - Mic capture (the other half) is NOT owned by this class. RN has no
 *   continuous-PCM-callback API on a plain class the way Web Audio's
 *   ScriptProcessorNode does — @siteed/audio-studio's capture API is a
 *   React hook, so the consuming component owns `useAudioRecorder()` and
 *   forwards chunks in via sendPttStart/sendPcmChunk/sendPttStop.
 * - Reveal timing is simplified to "fire when the paired clip starts
 *   playing" rather than the web client's wall-clock lookahead scheduling —
 *   see AudioPlaybackQueue's own comment for why that's an acceptable trade.
 */
/**
 * Identity-compared sentinel marking a client built before its screen exists.
 * `DronaVoiceClient` buffers inbound frames while this is its handler set.
 */
export const PREWARM_HANDLERS: DronaVoiceHandlers = {};
/** Roughly one long turn's worth of frames. */
const PREATTACH_BUFFER_MAX = 200;

export class DronaVoiceClient {
  private ws: WebSocket | null = null;
  private readonly sessionId: string;
  /** A provider, not a captured string: a live class can outlast a Supabase
   *  access token, and the backend now authenticates the WebSocket at
   *  handshake. Reusing the token captured at construction meant every
   *  reconnect after expiry was rejected — six times, then silence. Web hit
   *  this first and refetches per open (voice.ts's "a reconnect can happen
   *  well over an hour into a session"). */
  private readonly getAccessToken: () => Promise<string | null>;
  private readonly wsBaseUrl: string;
  private handlers: DronaVoiceHandlers;
  private readonly playback = new AudioPlaybackQueue();

  private manualDisconnect = false;
  private reconnectAttempt = 0;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  /** onerror and onclose can both fire for one failure; without this the
   *  backoff would advance twice per drop and burn its budget early. */
  private reconnectScheduled = false;

  /** Playback id -> {speech, board_event} for chunks currently queued/playing,
   *  so the playback queue's onItemStart can look up what to reveal. */
  private chunkMeta = new Map<string, { speech?: string; boardEvent?: BoardEvent | null }>();
  /** Monotonic suffix so continuation parts sharing one sentence_id get
   *  distinct playback ids — they otherwise collide on the queue's
   *  `drona-tts-${id}.wav` cache path and overwrite each other mid-sentence. */
  private chunkSeq = 0;

  constructor(
    sessionId: string,
    getAccessToken: () => Promise<string | null>,
    apiBaseUrl: string,
    handlers: DronaVoiceHandlers
  ) {
    this.sessionId = sessionId;
    this.getAccessToken = getAccessToken;
    this.wsBaseUrl = apiBaseUrl.replace(/^http/, 'ws').replace(/\/$/, '');
    this.handlers = handlers;
    this.buffering = handlers === PREWARM_HANDLERS;

    this.playback.onItemStart = (id) => {
      const meta = this.chunkMeta.get(id);
      if (meta?.speech) this.handlers.onCaptionReveal?.(meta.speech);
      if (meta?.boardEvent) this.handlers.onBoardReveal?.(meta.boardEvent);
      this.chunkMeta.delete(id);
    };

    // The turn's audio has actually finished playing — see `flushHeldTurn`.
    this.playback.onQueueDrained = () => {
      if (this.awaitingDrain) this.flushHeldTurn();
    };
  }

  connect() {
    this.manualDisconnect = false;
    void this.openSocket();
  }

  /**
   * Attaches the real handlers to a socket that was opened ahead of the
   * screen that owns them, and replays everything that arrived meanwhile.
   *
   * See `lib/drona-prewarm.ts` for why the socket opens early. The buffer is
   * what makes it safe: between `connect()` and this call the server can
   * already have sent `state`, `board_events`, even a whole first turn, and
   * dropping those would trade a latency win for a class that starts
   * mid-sentence.
   */
  setHandlers(handlers: DronaVoiceHandlers) {
    this.handlers = handlers;
    this.buffering = false;
    const queued = this.preAttachBuffer;
    this.preAttachBuffer = [];
    if (this.ws?.readyState === WebSocket.OPEN) handlers.onConnectionChange?.('open');
    for (const raw of queued) this.handleMessage(raw);
  }

  /** True while no screen has claimed this client yet. */
  private buffering = false;
  private preAttachBuffer: string[] = [];

  disconnect() {
    this.manualDisconnect = true;
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
    if (this.drainWatchdog) clearTimeout(this.drainWatchdog);
    this.drainWatchdog = null;
    this.clearTurnErrorRecovery();
    this.playback.destroy();
    this.ws?.close();
    this.ws = null;
  }

  /** Resolved by `ws.onopen`; see `whenReady`. */
  private readyWaiters: (() => void)[] = [];

  /**
   * Resolves once the socket is genuinely OPEN, rejecting after `timeoutMs`.
   *
   * `sendUtterance` silently drops anything sent before then, so the caller
   * that kicks off the first teaching turn needs to know rather than guess. A
   * fixed delay was the old approach and it was both slower than necessary on
   * a fast connection and too short on a slow one.
   */
  whenReady(timeoutMs: number): Promise<void> {
    if (this.ws?.readyState === WebSocket.OPEN) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.readyWaiters = this.readyWaiters.filter((w) => w !== onOpen);
        reject(new Error('Voice connection timed out'));
      }, timeoutMs);
      const onOpen = () => {
        clearTimeout(timer);
        resolve();
      };
      this.readyWaiters.push(onOpen);
    });
  }

  private async openSocket() {
    this.handlers.onConnectionChange?.(this.reconnectAttempt > 0 ? 'reconnecting' : 'connecting');

    let token: string | null = null;
    try {
      token = await this.getAccessToken();
    } catch {
      token = null;
    }
    if (this.manualDisconnect) return;
    if (!token) {
      this.handlers.onError?.('Lost your sign-in — go back and start the class again.');
      return;
    }

    const url = `${this.wsBaseUrl}/drona/session/${this.sessionId}/live?token=${encodeURIComponent(token)}`;
    const ws = new WebSocket(url);
    ws.binaryType = 'arraybuffer';
    this.ws = ws;

    ws.onopen = () => {
      this.reconnectAttempt = 0;
      this.reconnectScheduled = false;
      this.handlers.onConnectionChange?.('open');
      // Release anyone waiting to send the first utterance.
      const waiters = this.readyWaiters;
      this.readyWaiters = [];
      waiters.forEach((resolve) => resolve());
    };
    ws.onmessage = (event) => this.handleMessage(event.data);
    // Web schedules from onerror too: a failed handshake does not reliably
    // deliver a close event on every platform, and without this the socket
    // would sit dead with the UI still saying "Connecting".
    ws.onerror = () => {
      if (!this.manualDisconnect) this.scheduleReconnect();
    };
    ws.onclose = () => {
      this.handlers.onConnectionChange?.('closed');
      if (!this.manualDisconnect) this.scheduleReconnect();
    };
  }

  private scheduleReconnect() {
    if (this.reconnectScheduled) return;
    if (this.reconnectAttempt >= RECONNECT_DELAYS_MS.length) {
      // Previously a bare return: the UI kept showing "Reconnecting" forever
      // with nothing left retrying behind it.
      this.handlers.onError?.("Couldn't reconnect to the classroom — check your connection and rejoin.");
      return;
    }
    this.reconnectScheduled = true;
    const delay = RECONNECT_DELAYS_MS[this.reconnectAttempt];
    this.reconnectAttempt += 1;
    this.reconnectTimer = setTimeout(() => {
      this.reconnectScheduled = false;
      if (!this.manualDisconnect) void this.openSocket();
    }, delay);
  }

  private handleMessage(data: unknown) {
    if (typeof data !== 'string') return; // server never sends binary frames outbound
    if (this.buffering) {
      // Bounded: a runaway server should not grow this without limit if the
      // student never reaches the classroom.
      if (this.preAttachBuffer.length < PREATTACH_BUFFER_MAX) this.preAttachBuffer.push(data);
      return;
    }
    let msg: Record<string, unknown>;
    try {
      msg = JSON.parse(data);
    } catch {
      return;
    }

    switch (msg.type) {
      case 'state': {
        const state = msg as unknown as DronaState;
        /**
         * A checkpoint question's chips arrive with the state frame while its
         * audio is still queued, so showing them immediately would let a
         * student answer a question Drona has not finished asking. They are
         * held until `turn_complete`.
         *
         * Only while a turn is actually running, though. The server also
         * re-sends a bare state frame carrying `check_options` when a socket
         * reconnects onto a session already in `awaiting_answer`
         * (`live_session_ws.py:250-270`) — no turn behind it, so no
         * `turn_complete` is ever coming. Held unconditionally, those chips
         * were kept forever and the student sat on a silent board with nothing
         * to answer: precisely the symptom that resume frame exists to
         * prevent. Reconnects are routine on a phone — `RECONNECT_DELAYS_MS`
         * has six entries — so this was the common case, not the exotic one.
         */
        if (state.check_options?.length && this.turnInFlight) {
          this.pendingState = state;
        } else {
          this.handlers.onState?.(state);
        }
        if (state.phase === 'complete') this.handlers.onSessionEnded?.();
        break;
      }
      case 'board_events':
        if (!this.turnInFlight) this.handlers.onTurnStarted?.();
        this.turnInFlight = true;
        this.clearTurnErrorRecovery();
        this.bufferBoardEvents((msg.events as BoardEvent[]) ?? []);
        break;
      case 'board_replay':
        this.handlers.onBoardReplay?.((msg.events as BoardEvent[]) ?? []);
        break;
      case 'audio_chunk':
        if (!this.turnInFlight) this.handlers.onTurnStarted?.();
        this.turnInFlight = true;
        this.clearTurnErrorRecovery();
        this.handleAudioChunk(msg);
        break;
      case 'transcript_partial':
        this.handlers.onTranscriptPartial?.(String(msg.transcript ?? ''));
        break;
      case 'transcript_final':
        this.handlers.onTranscriptFinal?.(String(msg.transcript ?? ''), msg.confidence as number | undefined);
        break;
      case 'meta': {
        const meta = msg as unknown as DronaMeta;
        this.handlers.onMeta?.(meta);
        if (meta.session_complete) this.handlers.onSessionEnded?.();
        break;
      }
      case 'answer_result':
        this.handlers.onAnswerResult?.(msg as unknown as DronaAnswerResult);
        break;
      case 'turn_complete':
        /**
         * ARRIVED is not HEARD. This frame means the server finished *sending*
         * the turn; on a queue buffered several sentences ahead the student is
         * still listening to the middle of it. Flushing here put the answer
         * chips up while Drona was mid-explanation — and worse, wrote the
         * question into the caption strip only for the sentences still queued
         * behind it to overwrite it a moment later, leaving chips on screen
         * with no question above them.
         *
         * So wait for the audio itself. Web solves the same problem by
         * computing the remaining playback time (`armTurnCompleteWait`); the
         * queue here already knows when it runs dry, which is the same answer
         * without the arithmetic.
         */
        if (this.playback.idle) {
          // Nothing to wait for: a checkpoint delivered as a silent chunk, or
          // a turn whose audio already finished playing.
          this.flushHeldTurn();
        } else {
          this.awaitingDrain = true;
          if (this.drainWatchdog) clearTimeout(this.drainWatchdog);
          this.drainWatchdog = setTimeout(() => {
            this.drainWatchdog = null;
            if (this.awaitingDrain) this.flushHeldTurn();
          }, DRAIN_WATCHDOG_MS);
        }
        break;
      case 'turn_error':
        this.handlers.onTurnError?.(String(msg.message ?? 'Something went wrong.'));
        // A turn that errors and never recovers never sends `turn_complete`
        // either, so anything held for it would be held forever. Give the
        // retry a window, then release regardless.
        if (this.turnErrorRecoveryTimer) clearTimeout(this.turnErrorRecoveryTimer);
        this.turnErrorRecoveryTimer = setTimeout(() => {
          this.turnErrorRecoveryTimer = null;
          if (this.turnInFlight || this.pendingState) this.flushHeldTurn();
        }, TURN_ERROR_RECOVERY_MS);
        break;
      case 'stt_too_short':
        this.handlers.onSttTooShort?.(String(msg.message ?? 'That was too short to hear.'));
        break;
      case 'error':
        this.handlers.onError?.(String(msg.message ?? 'Something went wrong.'));
        break;
      case 'ping':
        // One-directional server heartbeat while a turn is active — no reply expected.
        break;
      default:
        break;
    }
  }

  /** A state frame carrying check_options, held until its turn finishes. */
  private pendingState: DronaState | null = null;
  /**
   * Whether a turn is currently being delivered.
   *
   * Set by the first frame of a turn that can only come from one — board
   * events or an audio chunk, both of which the server emits before the state
   * frame carrying the checkpoint. Cleared on `turn_complete`, and on
   * `bargeIn`, which is the case `turn_complete` never covers.
   */
  private turnInFlight = false;

  /** A `turn_complete` has arrived but its audio is still playing; the held
   *  question mounts when the playback queue runs dry. */
  private awaitingDrain = false;
  private drainWatchdog: ReturnType<typeof setTimeout> | null = null;
  private turnErrorRecoveryTimer: ReturnType<typeof setTimeout> | null = null;

  private clearTurnErrorRecovery() {
    if (!this.turnErrorRecoveryTimer) return;
    clearTimeout(this.turnErrorRecoveryTimer);
    this.turnErrorRecoveryTimer = null;
  }

  /**
   * Ends a turn: reveals anything its audio never reached, mounts the question
   * it was holding, and tells the screen the turn is over.
   *
   * Order matters. `onState` carries the question text and its chips, and the
   * screen writes that text to the caption strip — so it has to be the LAST
   * caption written for the turn, which is exactly what gating on drain buys.
   */
  private flushHeldTurn() {
    this.awaitingDrain = false;
    if (this.drainWatchdog) {
      clearTimeout(this.drainWatchdog);
      this.drainWatchdog = null;
    }
    this.clearTurnErrorRecovery();
    this.turnInFlight = false;
    this.flushPendingBoardEvents();
    if (this.pendingState) {
      this.handlers.onState?.(this.pendingState);
      this.pendingState = null;
    }
    this.handlers.onTurnComplete?.();
  }

  /** Board items for the whole turn arrive ahead of their audio — held here,
   *  not shown yet, until each item's paired audio_chunk starts playing. */
  private pendingBoardEvents: BoardEvent[] = [];
  private bufferBoardEvents(events: BoardEvent[]) {
    this.pendingBoardEvents.push(...events);
  }
  /** Safety net for a sentence whose TTS failed to synthesize — its board
   *  event would otherwise never get revealed since nothing ever plays for it. */
  private flushPendingBoardEvents() {
    for (const event of this.pendingBoardEvents) this.handlers.onBoardReveal?.(event);
    this.pendingBoardEvents = [];
  }

  private handleAudioChunk(msg: Record<string, unknown>) {
    const sentenceId = String(msg.sentence_id ?? '');
    const audioBase64 = String(msg.audio ?? '');
    const boardEvent = (msg.board_event as BoardEvent | null) ?? null;
    const speech = msg.speech as string | undefined;

    if (boardEvent) {
      this.pendingBoardEvents = this.pendingBoardEvents.filter((e) => e.seq !== boardEvent.seq);
    }

    // Checkpoint questions arrive as a silent chunk — caption and board line,
    // no audio. Returning early here (the previous behaviour) dropped the
    // question text and its board line entirely, so the class appeared to
    // stall with nothing on screen to answer.
    if (!audioBase64) {
      if (speech) this.handlers.onCaptionReveal?.(speech);
      if (boardEvent) this.handlers.onBoardReveal?.(boardEvent);
      return;
    }
    if (!sentenceId) return;

    const playbackId = `${sentenceId}-${this.chunkSeq++}`;
    this.chunkMeta.set(playbackId, { speech, boardEvent });

    const pcm = base64ToBytes(audioBase64);
    this.playback.enqueue({ id: playbackId, pcm, sampleRate: TTS_SAMPLE_RATE });
  }

  // --- Outbound ---

  private sendJson(payload: Record<string, unknown>) {
    if (this.ws?.readyState === WebSocket.OPEN) this.ws.send(JSON.stringify(payload));
  }

  sendUtterance(text: string) {
    this.dropHeldTurn();
    this.sendJson({ type: 'utterance', text });
  }

  /** The student's answer to a checkpoint question, from a chip tap. */
  sendAnswer(text: string) {
    this.dropHeldTurn();
    this.sendJson({ type: 'utterance', text });
  }

  sendPttStart() {
    // Barge-in: stop Drona mid-sentence before the mic opens. Without this she
    // keeps talking into a live mic and speech-to-text transcribes her own
    // voice as the student's answer.
    this.bargeIn();
    this.sendJson({ type: 'ptt_start' });
  }

  /**
   * Drops everything queued/playing so the room goes quiet immediately.
   *
   * Also drops what was being held for the turn being abandoned. A barge-in
   * aborts the turn server-side (`abort_active_turn`), and that path cancels
   * the task without sending `turn_complete` — the runner catches
   * `asyncio.TimeoutError` and `Exception`, and `CancelledError` is neither,
   * so nothing is ever sent. Anything held for that turn was therefore held
   * forever: its chips never mounted, and worse, they flushed onto a *later*
   * turn's `turn_complete`, remounting a question already gone and flipping
   * the UI back to awaiting-answer. Board events had the same shape — buffered
   * per turn but never reset per turn, so stale seqs from an abandoned
   * explanation surfaced under a later one.
   *
   * Discarding is right rather than deferring: the server drops the trailing
   * question from what it parks, and the reply turn asks its own.
   */
  bargeIn() {
    this.dropHeldTurn();
    this.chunkMeta.clear();
    this.playback.clear();
  }

  /**
   * Forgets whatever is being held for a turn that is about to be abandoned.
   *
   * Separate from `bargeIn` because the audio does not always need dropping:
   * answering a checkpoint by tapping a chip sends an `utterance`, and the
   * server aborts the running turn for that too (`barge_in_text`), with the
   * same missing `turn_complete`. The held state has to go either way; the
   * playback queue is only the microphone's business.
   */
  private dropHeldTurn() {
    this.turnInFlight = false;
    this.pendingState = null;
    this.pendingBoardEvents = [];
    // The abandoned turn's drain is no longer a signal to mount anything —
    // `playback.clear()` does not fire onQueueDrained, but the watchdog would
    // still be armed and would flush an empty turn on top of the next one.
    this.awaitingDrain = false;
    if (this.drainWatchdog) {
      clearTimeout(this.drainWatchdog);
      this.drainWatchdog = null;
    }
    this.clearTurnErrorRecovery();
  }

  /** Raw 16kHz/16-bit/mono PCM, headerless — matches the format
   *  @siteed/audio-studio's onAudioStream emits when configured with
   *  `encoding: 'pcm_16bit'`. */
  sendPcmChunk(pcm: Uint8Array) {
    if (this.ws?.readyState === WebSocket.OPEN) this.ws.send(pcm.buffer as ArrayBuffer);
  }

  sendPttStop() {
    this.sendJson({ type: 'ptt_stop' });
  }

  /** Unused today — no caller in app/, lib/ or components/. Kept consistent
   *  with the other two abort paths so it cannot become the next leak. */
  interrupt(playbackPosition: number, cutoffText: string) {
    this.dropHeldTurn();
    this.chunkMeta.clear();
    this.playback.clear();
    this.sendJson({ type: 'interrupt', playback_position: playbackPosition, cutoff_text: cutoffText });
  }

  mute() {
    this.sendJson({ type: 'mute' });
  }

  unmute() {
    this.sendJson({ type: 'unmute' });
  }

  pausePlayback() {
    this.playback.pause();
  }

  resumePlayback() {
    this.playback.resume();
  }
}

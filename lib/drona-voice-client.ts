import { Platform } from 'react-native';

import { REGISTRY_MANIFEST } from '@/lib/widgets/registry';

import { AudioPlaybackQueue } from '@/lib/audio-playback-queue';
import { PcmPlaybackQueue } from '@/lib/pcm-playback-queue';
import { pcmAvailable } from '@/lib/pcm-player';
import { base64ToBytes } from '@/lib/audio-pcm';

/**
 * The reveal probe: every board event entering the buffer and every reveal
 * with what carried it.
 *
 * Off unless EXPO_PUBLIC_REVEAL_PROBE=1 and __DEV__. It earned its keep once —
 * it refuted the theory that a labelled_figure event was never carried by an
 * audio chunk (it is, on its own sentence, exactly like a widget event) and
 * stopped a change to the reveal path that would have added a second
 * anchoring mechanism for a symptom the reveal path was not causing.
 */
const REVEAL_PROBE = __DEV__ && process.env.EXPO_PUBLIC_REVEAL_PROBE === '1';
const probe = (line: string) => {
  if (REVEAL_PROBE) console.log(`[reveal-probe] ${line}`);
};
/**
 * The probe's client half of V4's acceptance run: per board line, the sentence
 * that carried it and three epoch-ms stamps — when that sentence's audio frame
 * ARRIVED (`AUDIO_RECV … at=`), when its clip STARTED playing (`AUDIO_START …
 * at=`), and when the line was REVEALED (`REVEALED … revealedAt=`), with
 * `gapMs` = revealedAt − audioStartAt. Joined to the server's `board_line_sent`
 * log on sentence_id. `-` wherever a stamp does not apply (an end-of-turn
 * flush has no sentence; a silent chunk has no clip, so it starts on arrival).
 */
interface RevealTiming {
  sentenceId: string;
  receivedAt: number;
  startedAt: number;
}

/**
 * The lines one audio chunk carries.
 *
 * `board_events` (V4, additive): every line the chunk's sentences name —
 * several to a chunk, since the server's "sentence" is a TTS chunk of 100+
 * characters that can hold more than one of the model's sentences. Else the
 * singular `board_event`, which every server sends (the first of the list, for
 * builds that read nothing else) and older servers send alone.
 */
export function chunkBoardEvents(msg: Record<string, unknown>): BoardEvent[] {
  const many = msg.board_events;
  if (Array.isArray(many) && many.length > 0) {
    return many.filter((e): e is BoardEvent => !!e && typeof e === 'object');
  }
  const one = msg.board_event as BoardEvent | null | undefined;
  return one && typeof one === 'object' ? [one] : [];
}

export interface BoardEvent {
  seq: number;
  type: 'text' | 'heading' | 'note' | 'formula' | 'diagram' | string;
  text?: string;
  latex?: string;
  /**
   * `normal | key | high`, as the planner emits it — NOT a boolean.
   *
   * It was typed `boolean` here, and `"normal"` is a truthy string, so every
   * line the server marked as ordinary rendered in the emphasised style. The
   * whole board came out bold. `app/lesson-player.tsx` has always read the
   * three values correctly; the classroom did not.
   */
  emphasis?: 'normal' | 'key' | 'high' | (string & {});
  /** `diagram` events only: complete, self-contained, server-validated SVG.
   *  See `components/board-diagram.tsx` for what the host owes it. */
  svg?: string;
  /**
   * P3. The concept's bound plate, sent ALONGSIDE a widget payload so a build
   * that cannot draw the widget has something to fall back to. Normally
   * absent — the server picks one slot per turn.
   */
  illustration_slug?: string;
  /** `diagram` events only: an optional one-line gloss under the figure. */
  caption?: string;
  /**
   * A registry widget and its parameters. Takes precedence over `svg` when
   * both are present — the registry draws the real curve, an `svg` string
   * draws an approximation of it. See `lib/widgets/BoardWidget.tsx` for the
   * tier split this implements (`tier` names which one produced this event).
   */
  payload?: import('@/lib/widgets/types').WidgetPayload;
  tier?: import('@/lib/widgets/types').ResolutionTier;
  /**
   * Which event this is, for the life of one client. Stamped HERE, never sent
   * by the server, on everything `onBoardReveal` and `onBoardReplay` deliver.
   *
   * `seq` cannot do this job. The server numbers it per TURN
   * (app/drona/tutor.py: `"seq": i`, `len(board_events_out) + 1`), so seq 1
   * recurs every turn — and a line the teacher genuinely restates in a later
   * turn, same seq and same words, is a second line and has to be written
   * again. So a live event's key is `<turn>:<seq>`: the turn is the
   * `board_events` frame it arrived in, counted by this client, since that
   * frame is the one thing every delivery of the turn's board has in common.
   * A turn that gives one sentence two events (same seq, different content)
   * gets `<turn>:<seq>:2` for the second. Replayed history is `h:<row>`.
   *
   * The same event delivered twice — two sentences carrying it, a flush after
   * its audio, a resumed lesson or a re-taught turn re-sending it — resolves to
   * ONE key, and `appendBoardEvent` holds a key once. See
   * lib/__tests__/drona-voice-client-board.test.ts for each of those paths.
   */
  key?: string;
}

/**
 * The board's append, idempotent on `key`: an event already on the board is
 * not written again, and the SAME array comes back so the screen does not
 * re-render for nothing.
 *
 * It used to be `[...prev, event]`, which wrote whatever it was handed — and
 * the transport hands the same event over more than once when the server pairs
 * it with two sentences (live_session_ws.py:493-495). That is how a maths
 * class came to show two lines twice.
 */
export function appendBoardEvent(board: BoardEvent[], event: BoardEvent): BoardEvent[] {
  if (event.key !== undefined && board.some((row) => row.key === event.key)) return board;
  return [...board, event];
}

/**
 * A replay, merged on the same key: rows already on the board stay where they
 * are, rows it lacks are added in replay order, and nothing is dropped.
 *
 * It used to REPLACE the board. The server's replay is not the board the
 * student watched — it leaves out every diagram, drops a line a later turn
 * restated, and carries the model's own board_events for a planned turn rather
 * than the authored lines that were shown (live_session_ws.py:416-435 reads
 * `raw_response`) — so replacing wiped figures off the board, and the audio
 * still queued from before the drop then wrote its lines a second time.
 */
export function applyBoardReplay(board: BoardEvent[], events: BoardEvent[]): BoardEvent[] {
  let next = board;
  for (const event of events) next = appendBoardEvent(next, event);
  return next;
}

/**
 * One board event as the client holds it between arrival and reveal.
 *
 * Several entries can share a key: a resumed lesson and a re-taught turn
 * re-deliver events the client already holds, and adopt their keys.
 */
interface BoardEntry {
  key: string;
  /** The `board_events` frame it arrived in — what bounds the end-of-turn flush. */
  batch: number;
  /** The event as the server sent it, in stable JSON. Two deliveries of one
   *  event are byte-identical: a chunk's `board_event` IS an element of the
   *  turn's list (live_session_ws.py:493-495, 510). */
  fingerprint: string;
  event: BoardEvent;
}

interface BoardBatch {
  serial: number;
  entries: BoardEntry[];
  /** Keys already matched against an earlier batch — done at most once. */
  reconciled: boolean;
}

/** Object keys sorted, so key order is never a difference between two events. */
function stableJson(value: unknown): string {
  if (value === null || typeof value !== 'object') return JSON.stringify(value) ?? 'null';
  if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`;
  const obj = value as Record<string, unknown>;
  return `{${Object.keys(obj)
    .sort()
    .map((k) => `${JSON.stringify(k)}:${stableJson(obj[k])}`)
    .join(',')}}`;
}

/**
 * A sentence of a parked lesson being replayed: the server names them
 * `<turn>_resume_s<n>` (live_session_ws.py:719, 492).
 */
const RESUMED_SENTENCE = /_resume_s\d+$/;
/** How many recent turns a late or re-delivered event is matched against. A
 *  resumed lesson reaches back two (interrupted turn, then the answer). */
const BOARD_HISTORY_BATCHES = 16;

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
  /** Board items revealed one at a time, synced to when their paired sentence
   *  starts playing. At most once per `key` — append with `appendBoardEvent`. */
  onBoardReveal?: (event: BoardEvent) => void;
  /** The whole turn's board, at buffer time — ahead of any audio. For warming
   *  caches only; nothing here is shown until its own reveal. */
  onBoardBuffered?: (events: BoardEvent[]) => void;
  /** The server's board history, for a board this client has not started
   *  writing: a fresh mount, a rejoin. No reveal pacing — render immediately,
   *  merged with `applyBoardReplay`. Not forwarded once the client has a turn
   *  of its own; see the `board_replay` case for why. */
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
/**
 * Close codes the server uses to mean "do not come back", so the client does
 * not. 4004 is a session that does not exist, 4401 a missing/expired/invalid
 * token, 4403 a session belonging to someone else — see
 * app/drona/live_session_ws.py, which sends each one and then closes.
 */
const PERMANENT_CLOSE_CODES = new Set([4004, 4401, 4403]);
/**
 * How long a socket must stay open before it counts as having worked.
 *
 * Below this it is treated as a failed attempt rather than a success, so the
 * backoff keeps climbing. The server ACCEPTS a socket before it checks the
 * session, so a refused connection still fires `onopen` — which was resetting
 * the backoff to zero on every cycle and turning a capped retry into an
 * endless one.
 */
const HEALTHY_CONNECTION_MS = 5000;
/** Backstop for a turn whose audio never drains — a clip that fails to load,
 *  or a TTS gap that leaves the queue stalled. Without it, gating the flush on
 *  drain would trade "the checkpoint mounts too early" for the much worse "the
 *  checkpoint never mounts at all". Generous: it is a safety net, not a pace.
 *
 *  This is 20s of NO PROGRESS, not 20s from `turn_complete`. It used to be the
 *  latter, which made it fire on every healthy turn longer than 20s of speech:
 *  `turn_complete` means the server finished SENDING, and the server sends a
 *  whole turn far faster than realtime, so a normal 6-10 sentence turn still
 *  has 40-60s of audio queued when it lands. Twenty seconds later the watchdog
 *  flushed mid-explanation and reproduced, exactly, the three symptoms the
 *  `turn_complete` comment below says were already fixed: answer chips up while
 *  Drona was still teaching, the question written into the caption strip only
 *  to be overwritten by the sentences still queued behind it, and the turn's
 *  remaining board events (diagrams included) dumped in one burst. Re-armed on
 *  every clip start, it now fires only when playback is genuinely wedged, which
 *  is the case it was written for. */
const DRAIN_WATCHDOG_MS = 20000;
/** Matches web's TURN_ERROR_RECOVERY_MS. A `turn_error` with no recovery means
 *  `turn_complete` is never coming, so whatever the turn was holding has to be
 *  released or the student sits on a dead board. */
const TURN_ERROR_RECOVERY_MS = 15000;
/** TTS sample rate — live-verified server-side (filler-cache fallback byte
 *  math). 16-bit mono is now confirmed too, not merely inferred: the batch
 *  pipeline (synth_rumik.py) refuses to encode any Rumik WAV that is not
 *  16-bit, single-channel, 24kHz, and the server's own progressive flush is
 *  sized at 48000 bytes = 24000 * 2 * 1 per second. The server's
 *  `duration_ms` field on audio_chunk is computed from that same geometry. */
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
  /** Gapless stream when this binary carries the native player; the
   *  file-based queue — gaps, watchdogs and all — otherwise. Same contract,
   *  so everything downstream is none the wiser. */
  private readonly playback = pcmAvailable ? new PcmPlaybackQueue() : new AudioPlaybackQueue();

  private manualDisconnect = false;
  private reconnectAttempt = 0;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  /** onerror and onclose can both fire for one failure; without this the
   *  backoff would advance twice per drop and burn its budget early. */
  private reconnectScheduled = false;
  /** When the current socket opened, or 0. See HEALTHY_CONNECTION_MS. */
  private openedAt = 0;
  /** Consecutive sockets that opened and died before proving themselves. */
  private diedYoung = 0;

  /** Playback id -> {speech, board entry, duration_ms} for chunks currently
   *  queued/playing, so the playback queue's onItemStart can look up what to
   *  reveal — and, for `durationMs`, how long the clip it just started runs. */
  private chunkMeta = new Map<
    string,
    {
      speech?: string;
      board?: BoardEntry[];
      durationMs?: number;
      sentenceId?: string;
      receivedAt?: number;
    }
  >();
  /** Monotonic suffix so continuation parts sharing one sentence_id get
   *  distinct playback ids — they otherwise collide on the queue's
   *  `drona-tts-${id}.wav` cache path and overwrite each other mid-sentence. */
  private chunkSeq = 0;

  private currentChunkDurationMs: number | null = null;
  /**
   * Measured playback length of the clip that most recently started playing,
   * in milliseconds, or null when the server did not send one (a pre-
   * `duration_ms` build, or a silent checkpoint caption with no audio).
   *
   * Server-measured from the synthesized PCM byte count, the same arithmetic
   * the batch pipeline uses — never estimated from word count or reading
   * speed, which is exactly the input `useCueTrackByTime`'s `TimedCue.atMs`
   * documents itself as needing.
   *
   * Read-only and currently unconsumed: `useCueTrack`'s seq-based selection is
   * untouched, and wiring a real time track is a separate change.
   */
  get playingChunkDurationMs(): number | null {
    return this.currentChunkDurationMs;
  }

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
      // Audible proof the queue is moving. While a turn is held waiting for
      // drain, that proof is what pushes the watchdog out — otherwise it
      // counts down against a queue that is playing perfectly well and flushes
      // the checkpoint over the top of it. See DRAIN_WATCHDOG_MS.
      if (this.awaitingDrain) this.armDrainWatchdog();
      const meta = this.chunkMeta.get(id);
      const startedAt = Date.now();
      if (meta?.board?.length || meta?.speech) {
        probe(
          `AUDIO_START sentence=${meta.sentenceId ?? '-'} playback=${id} at=${startedAt}` +
            ` recvAt=${meta.receivedAt ?? '-'} lines=${meta.board?.map((e) => e.key).join(',') || '-'}`
        );
      }
      if (meta?.speech) this.handlers.onCaptionReveal?.(meta.speech);
      for (const entry of meta?.board ?? []) {
        this.revealBoardEntry(entry, `onItemStart(${id})`, {
          sentenceId: meta?.sentenceId ?? '-',
          receivedAt: meta?.receivedAt ?? startedAt,
          startedAt,
        });
      }
      // Survives the delete below so `playingChunkDurationMs` can be read
      // after the reveal fires. Nothing consumes it yet — see the getter.
      this.currentChunkDurationMs = meta?.durationMs ?? null;
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
      this.handlers.onError?.('Lost your sign-in. Go back and start the class again.');
      return;
    }

    // stream_tts=1 asks the server for ~1s audio parts as Rumik produces
    // them, instead of one frame per finished sentence. The server has
    // supported it all along — the web client uses it — but this app never
    // sent the flag, so every sentence waited out its FULL synthesis (4s
    // measured on a 68-char sentence) before the first byte left the
    // server. Requested only when the gapless player is aboard: the old
    // file-based queue would play each 1s part as its own WAV, and a
    // load-start gap every second is the one thing worse than waiting.
    const parts = pcmAvailable ? '&stream_tts=1' : '';
    // The token travels as an `Authorization` header, not in the URL. A
    // ?token= is part of the request line, and request lines are what edge
    // infrastructure logs — a live bearer token per connect, readable by
    // anyone with log access (security assessment, finding 5). React
    // Native's WebSocket takes a headers option; a browser's does not, so
    // the web fallback below keeps the query parameter the server still
    // accepts for it. `null`, not `undefined`, for the protocols slot — RN
    // only reads the options argument when protocols is explicitly null.
    const canSendHeaders = Platform.OS !== 'web';
    const base = `${this.wsBaseUrl}/drona/session/${this.sessionId}/live`;
    // P1 — TELL THE SERVER WHAT THIS BUILD CAN DRAW.
    //
    // Until this existed the server sent whatever it had stored and an old
    // build either drew it or drew NOTHING: a payload naming a widget the
    // build does not carry misses `lookup()` and BoardWidget returns null
    // with no picture behind it, because a slot-1 board event carries a
    // payload and never an svg. Measured on the 19 Sep build against
    // Ecosystem: eleven comparison_table segments, eleven blank boards.
    //
    // Sent on the QUERY STRING rather than as a first message because the
    // server needs it before the first turn resolves a board, and a
    // handshake message would race the first utterance.
    const widgets = `&widgets=${encodeURIComponent(
      REGISTRY_MANIFEST.map((m) => `${m.id}@${m.version}`).join(','))}`;
    const url = canSendHeaders
      ? `${base}?${pcmAvailable ? 'stream_tts=1' : ''}${widgets}`
      : `${base}?token=${encodeURIComponent(token)}${parts}${widgets}`;
    // One socket per client, enforced at the source. A second connect while
    // one is still open — a screen remount, an eager prewarm — would put two
    // sockets in the air from one device; the server's takeover would retire
    // one, but the right number to CREATE is one, not two-minus-one.
    if (this.ws && (this.ws.readyState === WebSocket.CONNECTING || this.ws.readyState === WebSocket.OPEN)) {
      this.ws.onclose = null;
      try { this.ws.close(); } catch { /* already closing */ }
      this.ws = null;
      this.noteSocketLost();
    }
    const ws = canSendHeaders
      ? new (WebSocket as unknown as {
          new (u: string, p: string[] | null, o: { headers: Record<string, string> }): WebSocket;
        })(url, null, { headers: { Authorization: `Bearer ${token}` } })
      : new WebSocket(url);
    ws.binaryType = 'arraybuffer';
    this.ws = ws;

    ws.onopen = () => {
      this.openedAt = Date.now();
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
      if (this.manualDisconnect) return;
      this.noteSocketLost();
      this.scheduleReconnect();
    };
    ws.onclose = (event) => {
      this.handlers.onConnectionChange?.('closed');
      if (this.manualDisconnect) return;
      // The server's own verdict, honoured. It closes 4004 for a session that
      // does not exist, 4401 for a bad or expired token and 4403 for a session
      // belonging to someone else — none of which a retry can change.
      //
      // Ignoring the code is what produced the reconnect storm in the server
      // logs: hundreds of sockets to one dead session, accepted and closed
      // over and over, which is load for nothing and evicts every other line
      // from the log buffer. Reconnecting is for a connection that BROKE, not
      // for one that was refused.
      const code = (event as { code?: number })?.code;
      if (code && PERMANENT_CLOSE_CODES.has(code)) {
        this.handlers.onError?.(
          code === 4004
            ? 'That class has ended. Go back and start a new one.'
            : 'Your sign-in is no longer valid here. Go back and rejoin the class.'
        );
        return;
      }
      this.noteSocketLost();
      this.scheduleReconnect();
    };
  }

  /**
   * A socket went while the server was mid-turn. That turn is over: the old
   * connection's cleanup cancels it (live_session_ws.py:1329-1331; the
   * takeover at :230-239 does the same), and if it had not been saved yet the
   * phase is still `teaching`, so the new connection teaches it again from the
   * top (:1142-1145) — the same authored lines, sent as a new turn.
   * Remembered so that turn can be recognised as a re-delivery rather than a
   * restatement; see `bufferBoardEvents`. Idempotent, because `onerror` and
   * `onclose` can both fire for one drop.
   */
  private noteSocketLost() {
    if (!this.serverTurnOpen) return;
    this.serverTurnOpen = false;
    this.cutOffBatch = this.boardBatches[this.boardBatches.length - 1] ?? null;
  }

  private scheduleReconnect() {
    if (this.reconnectScheduled) return;
    // A socket that opened and died immediately has not proved anything, so
    // it must not clear the backoff. `onopen` resetting the counter is right
    // for a connection that WORKED and later dropped; for one the server
    // accepts and then closes, it means every cycle restarts at the shortest
    // delay and the cap below is never reached.
    if (this.openedAt && Date.now() - this.openedAt < HEALTHY_CONNECTION_MS) {
      this.reconnectAttempt = Math.max(this.reconnectAttempt, this.diedYoung);
      this.diedYoung += 1;
    } else {
      this.diedYoung = 0;
    }
    this.openedAt = 0;
    if (this.reconnectAttempt >= RECONNECT_DELAYS_MS.length) {
      // Previously a bare return: the UI kept showing "Reconnecting" forever
      // with nothing left retrying behind it.
      this.handlers.onError?.("Couldn't reconnect to the classroom. Check your connection and rejoin.");
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
        this.serverTurnOpen = true;
        this.clearTurnErrorRecovery();
        this.bufferBoardEvents((msg.events as BoardEvent[]) ?? []);
        break;
      case 'board_replay': {
        /**
         * History, for a board this client has not started writing.
         *
         * The server sends it on every connect (live_session_ws.py:416-435),
         * reconnects included — and on a reconnect this client already has
         * the board, a better copy than the replay: the replay leaves out
         * every diagram (its dedupe key is text/latex only), drops a line a
         * later turn restated, and carries the model's own board_events for a
         * planned turn instead of the authored lines that were shown (it reads
         * `raw_response`). None of that can be matched back to what is on
         * screen, and the lines of the turn cut off by the drop are still
         * queued here to be revealed by their own audio.
         *
         * So a replay is forwarded only until this client's first turn. Its
         * rows are keyed by position in the server's history, which a longer
         * replay of the same session reproduces, so two replays merge.
         */
        const events = (msg.events as BoardEvent[]) ?? [];
        if (this.batchSerial > 0) {
          probe(`REPLAY NOT APPLIED rows=${events.length} — this client's own board is newer`);
          break;
        }
        this.handlers.onBoardReplay?.(events.map((event, row) => ({ ...event, key: `h:${row}` })));
        break;
      }
      case 'audio_chunk':
        if (!this.turnInFlight) this.handlers.onTurnStarted?.();
        this.turnInFlight = true;
        this.serverTurnOpen = true;
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
        this.serverTurnOpen = false;
        // The turn being held owns every board frame received up to now; a
        // frame after this belongs to the next turn. See flushHeldTurn.
        this.heldThroughBatch = this.batchSerial;
        if (this.playback.idle) {
          // Nothing to wait for: a checkpoint delivered as a silent chunk, or
          // a turn whose audio already finished playing.
          this.flushHeldTurn();
        } else {
          this.awaitingDrain = true;
          this.armDrainWatchdog();
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
          // No turn_complete is coming to say what the turn owns, and any
          // frame would have cancelled this timer: everything held is its.
          this.heldThroughBatch = this.batchSerial;
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
   * (Re)starts the no-progress countdown for a turn held waiting on drain.
   *
   * Called when the wait begins and again on every clip start, so the deadline
   * measures silence rather than elapsed time. A turn that keeps producing
   * audio keeps pushing it out and never trips it; a queue that wedges stops
   * pushing and trips it once, DRAIN_WATCHDOG_MS later.
   */
  private armDrainWatchdog() {
    if (this.drainWatchdog) clearTimeout(this.drainWatchdog);
    this.drainWatchdog = setTimeout(() => {
      this.drainWatchdog = null;
      if (this.awaitingDrain) this.flushHeldTurn();
    }, DRAIN_WATCHDOG_MS);
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
    this.flushPendingBoardEvents(this.heldThroughBatch);
    if (this.pendingState) {
      this.handlers.onState?.(this.pendingState);
      this.pendingState = null;
    }
    this.handlers.onTurnComplete?.();
  }

  // --- The board: one key per event, one reveal per key ---

  /** Board frames received so far — each is one turn's board. */
  private batchSerial = 0;
  /** Recent frames, newest last, for matching a chunk's `board_event` to the
   *  entry it is and a re-delivered frame to the one it repeats. */
  private boardBatches: BoardBatch[] = [];
  /** Keys `onBoardReveal` has fired for. The one check every reveal path —
   *  audio start, silent chunk, end-of-turn flush — goes through. */
  private revealedBoardKeys = new Set<string>();
  /** The newest frame the turn being held owns; the flush stops there. */
  private heldThroughBatch = 0;
  /** A board frame or audio has arrived since the last `turn_complete`: the
   *  server is mid-turn. Only a lost socket reads it — see `noteSocketLost`. */
  private serverTurnOpen = false;
  /** The frame of a turn a lost socket cut off, until the next frame arrives. */
  private cutOffBatch: BoardBatch | null = null;

  private openBatch(events: BoardEvent[]): BoardBatch {
    const batch: BoardBatch = { serial: ++this.batchSerial, entries: [], reconciled: false };
    for (const event of events) batch.entries.push(this.makeEntry(batch, event));
    this.boardBatches.push(batch);
    if (this.boardBatches.length > BOARD_HISTORY_BATCHES) this.boardBatches.shift();
    return batch;
  }

  private makeEntry(batch: BoardBatch, event: BoardEvent): BoardEntry {
    // A sentence may generate two events (prompts/tutor.md: seq is "the
    // sentence number in `speech` that generated it"), and both are kept by
    // the server — so seq alone would fold the second into the first.
    const same = batch.entries.filter((e) => e.event.seq === event.seq).length;
    const key = same === 0 ? `${batch.serial}:${event.seq}` : `${batch.serial}:${event.seq}:${same + 1}`;
    return { key, batch: batch.serial, fingerprint: stableJson(event), event };
  }

  /**
   * The entry an audio chunk's `board_event` is: the newest frame holding the
   * identical event. Newest first because a later turn may legitimately
   * repeat an older one word for word, and a chunk belongs to its own turn,
   * whose frame always arrives just ahead of it.
   */
  private resolveBoardEntry(event: BoardEvent): BoardEntry {
    const fingerprint = stableJson(event);
    for (let i = this.boardBatches.length - 1; i >= 0; i -= 1) {
      const hit = this.boardBatches[i].entries.find((e) => e.fingerprint === fingerprint);
      if (hit) return hit;
    }
    // Carried by a chunk but never announced in a board frame. The server
    // does not do this today; kept as an entry anyway so a second carrier of
    // it still resolves to the same key.
    const batch = this.boardBatches[this.boardBatches.length - 1] ?? this.openBatch([]);
    const entry = this.makeEntry(batch, event);
    batch.entries.push(entry);
    return entry;
  }

  /**
   * A frame that re-delivers events this client already holds takes their
   * keys, so whatever of it is already on the board is not written again.
   *
   * Two server paths send one: a resumed lesson (the parked remainder of the
   * interrupted turn, re-sent verbatim — live_session_ws.py:722-725) and the
   * turn a lost socket cut off, taught again on the new connection. Matching
   * is exact (the same seq and the same content), and only against the
   * frame(s) the re-delivery can have come from.
   */
  private adoptKeys(batch: BoardBatch, sources: BoardBatch[]) {
    if (batch.reconciled) return;
    batch.reconciled = true;
    for (const entry of batch.entries) {
      for (const source of sources) {
        const twin = source.entries.find((e) => e.fingerprint === entry.fingerprint);
        if (twin) {
          entry.key = twin.key;
          break;
        }
      }
    }
  }

  /**
   * THE reveal. Every path that puts a board event on screen comes through
   * here, and a key is revealed once.
   *
   * The same event does arrive more than once. The server pairs sentence N
   * with the event whose seq is N, else with the Nth event BY POSITION
   * (live_session_ws.py:493-495), so a turn whose seqs skip a number — the
   * model numbers them by sentence, and the server's own dedupe drops events
   * — carries one event on two sentences. The reveal probe caught exactly
   * that: seq 6 carried by both `_s3` and `_s6` of one turn, and the board
   * showed the line twice. That pairing is the server's to fix; the board
   * holding each event once is this client's.
   */
  private revealBoardEntry(entry: BoardEntry, carrier: string, timing?: RevealTiming) {
    const { event } = entry;
    if (this.revealedBoardKeys.has(entry.key)) {
      probe(`REPEAT seq=${event.seq} key=${entry.key} carriedBy=${carrier} — already on the board, not written again`);
      return;
    }
    this.revealedBoardKeys.add(entry.key);
    const revealedAt = Date.now();
    probe(
      `REVEALED seq=${event.seq} key=${entry.key} type=${event.type}` +
        ` widget=${event.payload?.widget ?? '-'} carriedBy=${carrier}` +
        ` sentence=${timing?.sentenceId ?? '-'} audioRecvAt=${timing?.receivedAt ?? '-'}` +
        ` audioStartAt=${timing?.startedAt ?? '-'} revealedAt=${revealedAt}` +
        ` gapMs=${timing ? revealedAt - timing.startedAt : '-'}`
    );
    this.handlers.onBoardReveal?.({ ...event, key: entry.key });
  }

  /** Board items for the whole turn arrive ahead of their audio — held here,
   *  not shown yet, until each item's paired audio_chunk starts playing. An
   *  entry leaves this list when a chunk claims it, not when it is revealed. */
  private pendingBoardEvents: BoardEntry[] = [];
  private bufferBoardEvents(events: BoardEvent[]) {
    const batch = this.openBatch(events);
    if (this.cutOffBatch) {
      // The first turn after a drop that cut one off: if it is that turn
      // taught again, its lines are that turn's lines. See `noteSocketLost`.
      this.adoptKeys(batch, [this.cutOffBatch]);
      this.cutOffBatch = null;
    }
    // INSTRUMENTATION, temporary and deliberately verbose. The question this
    // answers: which board events ever get carried by an audio chunk, and
    // which sit in this queue until the end-of-turn safety net. A figure has
    // no sentence of its own, so the suspicion is that it is never carried —
    // but that is a suspicion, and the reveal path is not somewhere to change
    // code on one.
    for (const { event: e, key } of batch.entries) {
      probe(
        `BUFFERED seq=${e.seq} key=${key} type=${e.type}` +
          ` revealAt=${(e as { revealAt?: number }).revealAt ?? '(none)'}` +
          ` widget=${e.payload?.widget ?? '-'}`
      );
    }
    this.pendingBoardEvents.push(...batch.entries);
    // BUFFER TIME IS THE EARLIEST HONEST MOMENT TO FETCH. The whole turn's
    // board arrives here, ahead of its audio, and a figure's art is a network
    // object — so asking for it now gives it the length of the preceding
    // sentences to land, and the plate draws on the FIRST render of its block
    // rather than the second.
    //
    // Announced rather than fetched here: this module is the transport and
    // knows nothing about figures. The screen owns the resolver and wires it.
    this.handlers.onBoardBuffered?.(events);
  }
  /**
   * Safety net for a sentence whose TTS failed to synthesize — its board
   * event would otherwise never get revealed since nothing ever plays for it.
   *
   * Only the held turn's own frames. The server auto-advances into the next
   * turn the moment this one completes (live_session_ws.py:881-883), so that
   * turn's frame is often already here, unclaimed, when this turn's audio
   * drains. Flushing it too wrote the whole next board ahead of its audio in
   * one burst — and then its audio wrote every line again.
   */
  private flushPendingBoardEvents(throughBatch: number) {
    const later: BoardEntry[] = [];
    for (const entry of this.pendingBoardEvents) {
      if (entry.batch > throughBatch) later.push(entry);
      else this.revealBoardEntry(entry, 'END_OF_TURN_FLUSH');
    }
    this.pendingBoardEvents = later;
  }

  private handleAudioChunk(msg: Record<string, unknown>) {
    const sentenceId = String(msg.sentence_id ?? '');
    const audioBase64 = String(msg.audio ?? '');
    const boardEvents = chunkBoardEvents(msg);
    const speech = msg.speech as string | undefined;
    const receivedAt = Date.now();
    // Measured playback length of THIS frame's PCM, computed server-side from
    // the synthesized byte count (len(pcm) / (24000 * 2) * 1000) — never
    // estimated from the caption's word count. Optional: a server built before
    // the field existed simply omits it, and everything below still works.
    const rawDuration = msg.duration_ms;
    const durationMs =
      typeof rawDuration === 'number' && Number.isFinite(rawDuration) && rawDuration >= 0
        ? rawDuration
        : undefined;

    const entries: BoardEntry[] = [];
    for (const event of boardEvents) {
      const entry = this.resolveBoardEntry(event);
      if (!entries.includes(entry)) entries.push(entry);
    }
    if (entries.length > 0) {
      if (RESUMED_SENTENCE.test(sentenceId)) {
        // A resumed lesson's parked events come back as their own frame; the
        // first resumed sentence marks that frame for what it is.
        const at = this.boardBatches.findIndex((b) => b.serial === entries[0].batch);
        if (at > 0) this.adoptKeys(this.boardBatches[at], this.boardBatches.slice(0, at).reverse());
      }
      // Claimed: the audio will reveal them, so the flush must not. By KEY —
      // this used to filter by seq, and seq repeats across turns and within
      // one, so claiming one event quietly dropped another turn's.
      const claimed = new Set(entries.map((e) => e.key));
      this.pendingBoardEvents = this.pendingBoardEvents.filter((e) => !claimed.has(e.key));
    }
    probe(
      `AUDIO_RECV sentence=${sentenceId || '-'} at=${receivedAt} audio=${audioBase64 ? 'yes' : 'none'}` +
        ` lines=${entries.map((e) => e.key).join(',') || '-'}`
    );

    // A sentence with no audio — a checkpoint question whose synthesis failed,
    // or any sentence whose TTS failed — arrives as a silent chunk: caption
    // and board lines, no audio. Returning early here (the previous
    // behaviour) dropped the text and its lines entirely, so the class
    // appeared to stall with nothing on screen to answer.
    if (!audioBase64) {
      if (speech) this.handlers.onCaptionReveal?.(speech);
      for (const entry of entries) {
        this.revealBoardEntry(entry, `audio_chunk(${sentenceId})`, {
          sentenceId: sentenceId || '-',
          receivedAt,
          startedAt: receivedAt,
        });
      }
      return;
    }
    if (!sentenceId) return;

    const playbackId = `${sentenceId}-${this.chunkSeq++}`;
    this.chunkMeta.set(playbackId, { speech, board: entries, durationMs, sentenceId, receivedAt });

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
    this.currentChunkDurationMs = null;
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
    // The server aborts its turn too (no turn_complete follows), and whatever
    // the student said makes the next turn an answer to it — never the
    // cut-off turn taught again.
    this.serverTurnOpen = false;
    this.cutOffBatch = null;
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
    this.currentChunkDurationMs = null;
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
    // The drain watchdog measures time without progress, and a pause is
    // exactly that — so on a pause of any real length it would fire and mount
    // the checkpoint over a lesson the student had deliberately stopped. Held
    // down for the duration; `resumePlayback` starts the count again from
    // zero, which is the right reading: the student has heard nothing new.
    if (this.drainWatchdog) {
      clearTimeout(this.drainWatchdog);
      this.drainWatchdog = null;
    }
  }

  resumePlayback() {
    this.playback.resume();
    if (this.awaitingDrain) this.armDrainWatchdog();
  }
}

import { PASS_REQUIRED_CLOSE, signalPassRequired } from '@/lib/pass-events';
import { paceSteps, toSteps } from '@/lib/board-steps';
import { Platform } from 'react-native';

import { REGISTRY_MANIFEST } from '@/lib/widgets/registry';

import { AudioPlaybackQueue } from '@/lib/audio-playback-queue';
import { FIRST_AUDIO_HOLD_S, PcmPlaybackQueue } from '@/lib/pcm-playback-queue';
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
/** A teacher's speaking pace, ~160 words a minute: the floor for how long a
 *  sentence runs when not all of its audio has arrived (`sentenceMs`). */
const MS_PER_SPOKEN_WORD = 375;
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
  /**
   * How to write this line, stamped HERE when its sentence starts playing,
   * never sent by the server. `delayMs` after the reveal it starts; text is
   * then written word by word over `ms`. A sentence's lines share its length
   * between them (see `paceLines`). Absent on anything with no measured clip:
   * replayed history, an end-of-turn flush, a silent chunk. Those are shown
   * whole, as before.
   */
  write?: { delayMs: number; ms: number };
  /** One row of a formula chain written step by step (board-steps.ts). */
  step?: 'first' | 'cont';
}

/**
 * HOW A SENTENCE'S LINES ARE WRITTEN ACROSS IT.
 *
 * One clip can carry several lines; showing them all the instant the sentence
 * starts is what made the board feel like blocks being dropped. Each line gets
 * a slice of the sentence in proportion to its words, in order; a formula or a
 * figure takes a slice the size of a short phrase and lands whole at its start,
 * the way a teacher writes an equation in one go. The writing finishes a little
 * before the voice does, so a line is never still being written after the
 * sentence has moved on.
 *
 * And never slower than a hand writes: a short line alone on a long sentence
 * would otherwise crawl across all of it (a six-word heading took ten
 * seconds). A heading is put up quickly, as a title is; prose at about the
 * pace it is spoken.
 */
/**
 * The slowest a line is ever written, per word. Faster than speech
 * (MS_PER_SPOKEN_WORD = 375): at 420 the writing trailed the voice, and the
 * student heard a sentence before its line was on the board.
 */
const LINE_MS_PER_WORD = 250;
/**
 * The share of a sentence its lines are written in. The board leads: a
 * sentence's lines are up in its first half, so the student sees what is
 * being said rather than hearing it and then watching it appear. (It was 0.9,
 * spreading the writing across the whole sentence.)
 */
const WRITE_SHARE = 0.5;
const HEADING_MS_PER_WORD = 220;

export function paceLines(
  events: Pick<BoardEvent, 'type' | 'text' | 'payload' | 'svg' | 'illustration_slug'>[],
  durationMs: number | null | undefined
): ({ delayMs: number; ms: number } | undefined)[] {
  if (!durationMs || durationMs < 400 || events.length === 0) return events.map(() => undefined);
  const weights = events.map((e) => {
    const figure = Boolean(e.payload || e.svg || e.illustration_slug) || e.type === 'diagram' || e.type === 'formula';
    if (figure) return { w: 4, writes: false, cap: 0 };
    const words = (e.text ?? '').split(/\s+/).filter(Boolean).length;
    const perWord = e.type === 'heading' ? HEADING_MS_PER_WORD : LINE_MS_PER_WORD;
    return { w: Math.max(1, words), writes: words > 0, cap: words * perWord };
  });
  const total = weights.reduce((a, b) => a + b.w, 0);
  const usable = durationMs * WRITE_SHARE;
  let before = 0;
  return weights.map(({ w, writes, cap }) => {
    const delayMs = Math.round((usable * before) / total);
    before += w;
    return { delayMs, ms: writes ? Math.round(Math.min((usable * w) / total, cap)) : 0 };
  });
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
  /**
   * The verdict on the student's own answer, riding inside the state frame the
   * answer's reply turn ends with: `correct | partial | incorrect`, else null
   * (app/drona/tutor.py, the `answer_result` of its final state payload). It is
   * not a separate frame; see the `state` case in handleMessage, which hands it
   * to `onAnswerResult`.
   */
  answer_result?: 'correct' | 'partial' | 'incorrect' | string | null;
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

/** `ended` follows `closed` when the server refused for good (a class that is
 *  over, a sign-in that is no longer valid): nothing is retrying, so a screen
 *  must not say it is reconnecting. */
export type ConnectionStatus = 'connecting' | 'open' | 'reconnecting' | 'closed' | 'ended';

export type CheckinChoice = 'ok' | 'doubt' | 'repeat';
/**
 * Speaking time, since the student last tapped, answered or spoke, after which
 * Drona checks in. A teacher talks for a while and then checks; an explanation
 * that runs on for minutes loses a student without anyone noticing.
 */
export const CHECKIN_AFTER_SPEECH_MS = 40_000;

export interface DronaVoiceHandlers {
  onConnectionChange?: (status: ConnectionStatus) => void;
  onState?: (state: DronaState) => void;
  /** Board items revealed one at a time, synced to when their paired sentence
   *  starts playing. At most once per `key` — append with `appendBoardEvent`. */
  onBoardReveal?: (event: BoardEvent) => void;
  /** The teacher's voice started (a clip began playing) or stopped (the queue
   *  ran dry, or was cut for a barge-in). Drives the dock's "is explaining". */
  onSpeakingChange?: (speaking: boolean) => void;
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
  /**
   * Time for the understanding check-in: Drona has talked for
   * CHECKIN_AFTER_SPEECH_MS since the student last did anything, and has been
   * paused at the end of a sentence. The screen shows the card and answers with
   * `answerCheckin`. Without this handler the client never pauses to ask.
   */
  onCheckin?: () => void;
  /** The check-in ended without a tap: the student spoke (raised a hand). */
  onCheckinClosed?: () => void;
  /** The student spoke (or tapped an answer) during a pause: the class is
   *  running again, so the screen's pause button goes back to "pause". */
  onPauseEnded?: () => void;
  /** Server signalled the lesson itself is finished (not a disconnect). */
  onSessionEnded?: () => void;
  onError?: (message: string) => void;
  /**
   * What became of an answer tapped while the socket was not open: `queued`
   * (held for the reopen), `sent` (it went out on the reopen). Nothing is
   * dropped silently; an answer that waited too long goes to `onError`.
   */
  onPendingAnswer?: (event: 'queued' | 'sent') => void;
}

const RECONNECT_DELAYS_MS = [1000, 2000, 4000, 8000, 8000, 8000];
/**
 * After the six quick retries (about 31s) the client used to stop for good: a
 * student whose train left the tunnel a minute later, or who came back to the
 * app from another one, sat on a dead class until they rejoined by hand. It
 * now keeps going, slowly, until the class ends. The server's own refusals
 * (PERMANENT_CLOSE_CODES) still end it, so a dead session is not hammered.
 */
export const SLOW_RETRY_MS = 30000;
/**
 * The client's own heartbeat. The server answers `ping` with `pong`
 * (live_session_ws.py, the `ping` control message) and sends nothing at all on
 * an idle socket, so a half-open connection — a phone that changed network, a
 * NAT that forgot the mapping — looked open forever and every tap went into
 * the void. Any frame from the server counts as a sign of life, so a healthy
 * turn never trips it.
 */
export const PING_INTERVAL_MS = 15000;
/** How long a ping may go unanswered before the socket is declared dead and
 *  the ordinary reconnect path takes over. */
export const PONG_TIMEOUT_MS = 10000;
/**
 * How long an answer may wait for a socket before it is not worth sending.
 * After this the question on the server has moved on or been re-asked; sending
 * a stale tap would answer something else. The student is told instead.
 */
const PENDING_ANSWER_MAX_AGE_MS = 120000;
/** The longest a double-tap guard holds without hearing from the server. */
const ANSWER_LOCK_MAX_MS = 20000;
/** Aborted turns remembered, for dropping their late frames. */
const ABORTED_TURNS_KEPT = 8;

/**
 * `<turn>_s<n>` — the server's sentence id (live_session_ws.py:623,
 * `f"{turn_id}_s{chunks_sent}"`). `n` is the speech CHUNK number within the
 * turn, 1-indexed, which is what the board's pairing counts. A resumed lesson
 * is its own turn, `<turn>_resume`, numbering from 1 again. The pool filler
 * (`<turn>_filler_<ms>`) has no `_s<n>` tail and is not a sentence.
 */
const SENTENCE_ID = /^(.*)_s(\d+)$/;
function parseSentenceId(id: string): { turn: string; n: number } | null {
  const m = SENTENCE_ID.exec(id);
  return m ? { turn: m[1], n: Number(m[2]) } : null;
}

/** A unique-enough id for one outbound message, so the server can tell a
 *  resend from a second message. 128 random bits, uuid-shaped. */
let clientMsgCounter = 0;
function newClientMsgId(): string {
  const hex = (n: number) =>
    Array.from({ length: n }, () => Math.floor(Math.random() * 16).toString(16)).join('');
  clientMsgCounter += 1;
  return `${hex(8)}-${hex(4)}-4${hex(3)}-${'89ab'[Math.floor(Math.random() * 4)]}${hex(3)}-${hex(8)}${clientMsgCounter
    .toString(16)
    .padStart(4, '0')
    .slice(-4)}`;
}
/**
 * Close codes the server uses to mean "do not come back", so the client does
 * not. 4004 is a session that does not exist, 4401 a missing/expired/invalid
 * token, 4403 a session belonging to someone else, 4402 a student whose pass
 * has ended (the paywall) — see
 * app/drona/live_session_ws.py, which sends each one and then closes.
 */
const PERMANENT_CLOSE_CODES = new Set([4004, 4401, 4403, PASS_REQUIRED_CLOSE]);
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
  /** An `openSocket` is between its start and the socket it creates. */
  private opening = false;
  /** Whether any socket has opened yet: a later attempt is a RE-connect even
   *  when its backoff counter has been reset to zero. */
  private everOpened = false;
  private slowRetryTimer: ReturnType<typeof setTimeout> | null = null;

  // --- Liveness ---
  private pingTimer: ReturnType<typeof setTimeout> | null = null;
  private pongTimer: ReturnType<typeof setTimeout> | null = null;

  // --- What the student sent, and whether the server has it ---
  /**
   * The ONE answer waiting for a socket. A chip tap while the socket is not
   * open used to be dropped without a word (`sendJson` checks `readyState` and
   * returns), so the student tapped, saw the chip hold, and nothing ever came.
   */
  private pendingAnswer: { text: string; id: string; at: number } | null = null;
  /**
   * An answer that went out on a socket the server has not yet answered on. If
   * that socket dies first the frame may have died with it, so it is queued
   * again — under the SAME `client_msg_id`, which is what lets the server
   * recognise it if the first copy did arrive.
   */
  private unackedAnswer: { text: string; id: string; at: number; socket: WebSocket } | null = null;
  /** When a chip was answered, or 0. Until a new question arrives (the next
   *  state frame that names a phase) further taps on the chips are ignored —
   *  but only for ANSWER_LOCK_MAX_MS, so a reply that never comes cannot leave
   *  the student unable to answer. */
  private answerLockedAt = 0;
  private get answerLocked(): boolean {
    return this.answerLockedAt > 0 && Date.now() - this.answerLockedAt < ANSWER_LOCK_MAX_MS;
  }
  private set answerLocked(on: boolean) {
    this.answerLockedAt = on ? Date.now() : 0;
  }

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

  // --- How much of the current turn the student has heard ---
  /** The turn the newest accepted audio frame belongs to (`t_<ms>`). */
  private receivedTurn: string | null = null;
  /** The turn of the clip that most recently started playing, and the highest
   *  sentence number of that turn to have started. */
  private heardTurn: string | null = null;
  private heardSeq = 0;
  /** Turns the student cut off. The server aborts them, but frames already on
   *  the wire still arrive, and are dropped rather than played over the student. */
  private abortedTurns: string[] = [];
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
      this.maybeCheckIn(meta);
      const startedAt = Date.now();
      const sentence = meta?.sentenceId ? parseSentenceId(meta.sentenceId) : null;
      if (sentence) {
        if (sentence.turn !== this.heardTurn) {
          this.heardTurn = sentence.turn;
          this.heardSeq = 0;
        }
        this.heardSeq = Math.max(this.heardSeq, sentence.n);
      }
      if (meta?.board?.length || meta?.speech) {
        probe(
          `AUDIO_START sentence=${meta.sentenceId ?? '-'} playback=${id} at=${startedAt}` +
            ` recvAt=${meta.receivedAt ?? '-'} lines=${meta.board?.map((e) => e.key).join(',') || '-'}`
        );
      }
      if (meta?.speech) this.handlers.onCaptionReveal?.(meta.speech);
      if (meta?.speech || meta?.durationMs) this.handlers.onSpeakingChange?.(true);
      const entries = meta?.board ?? [];
      const pace = paceLines(
        entries.map((e) => e.event),
        entries.length > 0 ? this.sentenceMs(meta) : undefined
      );
      entries.forEach((entry, i) => {
        this.revealBoardEntry(
          entry,
          `onItemStart(${id})`,
          {
            sentenceId: meta?.sentenceId ?? '-',
            receivedAt: meta?.receivedAt ?? startedAt,
            startedAt,
          },
          pace[i]
        );
      });
      // Survives the delete below so `playingChunkDurationMs` can be read
      // after the reveal fires. Nothing consumes it yet — see the getter.
      this.currentChunkDurationMs = meta?.durationMs ?? null;
      this.chunkMeta.delete(id);
      // THE BOARD LEADS BY ONE SENTENCE. The teacher writes the next line
      // while finishing this one, so when the voice reaches a line it is
      // already on the board. Revealing a line only when its OWN sentence
      // started meant the student always heard it first and saw it after.
      this.revealNextSentenceLines(meta?.sentenceId);
    };

    // BOARD_LEAD_S before a sentence is heard: the lines a teacher WRITES go up
    // (and only those). Everything else about the sentence — caption, speaking
    // flag, figures, widgets, the cue clock — still waits for onItemStart.
    // Only the native queue has this signal; the file queue never fires it and
    // keeps today's behaviour.
    (this.playback as { onItemApproach?: (id: string) => void }).onItemApproach = (id) =>
      this.revealWrittenLinesAhead(id);

    // The turn's audio has actually finished playing — see `flushHeldTurn`.
    this.playback.onQueueDrained = () => {
      this.handlers.onSpeakingChange?.(false);
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
    if (this.slowRetryTimer) clearTimeout(this.slowRetryTimer);
    this.slowRetryTimer = null;
    this.stopHeartbeat();
    this.pendingAnswer = null;
    this.unackedAnswer = null;
    if (this.drainWatchdog) clearTimeout(this.drainWatchdog);
    this.drainWatchdog = null;
    this.clearTurnErrorRecovery();
    // Frames already on the native bridge are still delivered after close()
    // (React Native unregisters its listeners only on the native close event),
    // and an audio_chunk among them restarted the player: the class went on
    // talking after End. Detach first, then close.
    const ws = this.ws;
    if (ws) {
      ws.onmessage = null;
      ws.onerror = null;
      ws.onclose = null;
      ws.onopen = null;
    }
    this.pendingState = null;
    this.pendingBoardEvents = [];
    this.playback.destroy();
    ws?.close();
    this.ws = null;
    this.handlers.onConnectionChange?.('closed');
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
    this.handlers.onConnectionChange?.(
      this.reconnectAttempt > 0 || this.everOpened ? 'reconnecting' : 'connecting'
    );
    this.opening = true;

    let token: string | null = null;
    try {
      token = await this.getAccessToken();
    } catch {
      token = null;
    }
    this.opening = false;
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
      this.turnActivitySinceOpen = false;
      this.everOpened = true;
      this.reconnectAttempt = 0;
      this.reconnectScheduled = false;
      if (this.slowRetryTimer) {
        clearTimeout(this.slowRetryTimer);
        this.slowRetryTimer = null;
      }
      this.handlers.onConnectionChange?.('open');
      this.startHeartbeat();
      // Release anyone waiting to send the first utterance.
      const waiters = this.readyWaiters;
      this.readyWaiters = [];
      waiters.forEach((resolve) => resolve());
      this.flushPendingAnswer();
    };
    ws.onmessage = (event) => {
      // Any frame at all is proof the connection is alive, so the pong timer
      // is for silence rather than for the pong specifically.
      if (ws === this.ws) this.heardFromServer();
      this.handleMessage(event.data);
    };
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
        if (code === PASS_REQUIRED_CLOSE) signalPassRequired();
        this.handlers.onError?.(
          code === 4004
            ? 'That class has ended. Go back and start a new one.'
            : code === PASS_REQUIRED_CLOSE
              ? 'Your pass has ended. Take a new one to rejoin the class.'
              : 'Your sign-in is no longer valid here. Go back and rejoin the class.'
        );
        this.handlers.onConnectionChange?.('ended');
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
    this.stopHeartbeat();
    // An answer that went out and was never acknowledged may have died with
    // the socket: queue it again for the reopen. And the chips are tappable
    // again — the question is whatever the new connection says it is.
    this.requeueUnackedAnswer();
    this.answerLocked = false;
    if (!this.serverTurnOpen) return;
    this.serverTurnOpen = false;
    this.cutOffBatch = this.boardBatches[this.boardBatches.length - 1] ?? null;
    // THE CUT-OFF TURN IS OVER, and nothing it was holding is ever released.
    //
    // `turn_complete` is what lets go of a held question, and it was never
    // sent: the old connection died first. Left set, `turnInFlight` made the
    // next connection's resume frame — the bare state frame carrying
    // `check_options` that `live_session_ws.py:250-270` sends onto a session
    // already in `awaiting_answer` — look like the chips of a running turn,
    // and it was held for a `turn_complete` that was never coming. The student
    // reopened the app to a silent board with nothing to answer, indefinitely
    // (idle audit, scenario A). What the dead turn was holding goes with it:
    // if its question still stands the server says so again on reopen, and if
    // the server re-teaches the turn it brings its own.
    this.turnInFlight = false;
    this.pendingState = null;
    this.awaitingDrain = false;
    if (this.drainWatchdog) {
      clearTimeout(this.drainWatchdog);
      this.drainWatchdog = null;
    }
    this.clearTurnErrorRecovery();
  }

  // --- Liveness: ping, pong, and what a silent socket means ---

  private startHeartbeat() {
    this.stopHeartbeat();
    this.schedulePing();
  }

  private stopHeartbeat() {
    if (this.pingTimer) clearTimeout(this.pingTimer);
    if (this.pongTimer) clearTimeout(this.pongTimer);
    this.pingTimer = null;
    this.pongTimer = null;
  }

  private schedulePing() {
    if (this.pingTimer) clearTimeout(this.pingTimer);
    this.pingTimer = setTimeout(() => {
      this.pingTimer = null;
      if (this.manualDisconnect || this.ws?.readyState !== WebSocket.OPEN) return;
      this.sendPing();
      this.schedulePing();
    }, PING_INTERVAL_MS);
  }

  /** Asks the server to prove the socket is alive, and starts the clock on it. */
  private sendPing() {
    if (this.manualDisconnect || this.ws?.readyState !== WebSocket.OPEN) return;
    this.ws.send(JSON.stringify({ type: 'ping' }));
    if (!this.pongTimer) {
      const ws = this.ws;
      this.pongTimer = setTimeout(() => {
        this.pongTimer = null;
        if (ws === this.ws) this.declareSocketDead();
      }, PONG_TIMEOUT_MS);
    }
  }

  private heardFromServer() {
    if (this.pongTimer) {
      clearTimeout(this.pongTimer);
      this.pongTimer = null;
    }
    // Quiet and healthy: the next probe is a full interval from the last sign
    // of life, so a turn that talks all the time never sends one.
    if (this.pingTimer) this.schedulePing();
  }

  /**
   * Nothing came back. The socket reports itself open, but it is not carrying
   * anything: take it down by hand and go through the ordinary reconnect path.
   * Its handlers are cut first — a half-open socket can fire its `onclose` a
   * minute later, long after its replacement is up, and that would start a
   * second reconnect cycle against the live one.
   */
  private declareSocketDead() {
    const ws = this.ws;
    this.ws = null;
    if (ws) {
      ws.onopen = null;
      ws.onmessage = null;
      ws.onerror = null;
      ws.onclose = null;
      try { ws.close(); } catch { /* already gone */ }
    }
    if (this.manualDisconnect) return;
    this.handlers.onConnectionChange?.('reconnecting');
    this.noteSocketLost();
    this.scheduleReconnect();
  }

  /**
   * The app is back in front of the student (or the network is back). Whatever
   * the socket says about itself, check: reconnect now if it is not open, with
   * a fresh retry budget, else send a ping and let the 10s clock decide.
   *
   * Without this the quick retries (about 31s) ran out while the phone was in a
   * pocket and nothing ever tried again.
   */
  onForeground() {
    if (this.manualDisconnect) return;
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.sendPing();
      return;
    }
    this.reconnectNow();
  }

  /** Reconnects immediately with the whole retry budget, unless a socket is
   *  already being opened. */
  reconnectNow() {
    if (this.manualDisconnect || this.opening) return;
    if (this.ws?.readyState === WebSocket.OPEN) return;
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
    if (this.slowRetryTimer) clearTimeout(this.slowRetryTimer);
    this.reconnectTimer = null;
    this.slowRetryTimer = null;
    this.reconnectScheduled = false;
    this.reconnectAttempt = 0;
    this.diedYoung = 0;
    this.openedAt = 0;
    void this.openSocket();
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
      // And keep trying, slowly: see SLOW_RETRY_MS.
      if (this.slowRetryTimer) clearTimeout(this.slowRetryTimer);
      this.slowRetryTimer = setTimeout(() => {
        this.slowRetryTimer = null;
        this.reconnectNow();
      }, SLOW_RETRY_MS);
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
    // Ended by the student: nothing that arrives after End may play or draw.
    if (this.manualDisconnect) return;
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
        // THE VERDICT, which rides in this frame. `answer_result` was documented
        // on the server as the outcome of the student's own answer — "lets the
        // UI colour the chip they tapped" (tutor.py) — but it is a field of the
        // reply turn's final state frame, never a frame of its own, and this
        // client only listened for a frame called `answer_result`: the verdict
        // display existed and nothing ever fed it. Handed over the moment the
        // frame arrives, ahead of the hold below — the hold is about the NEXT
        // question's chips, and the verdict belongs to the chip just tapped.
        if (typeof state.answer_result === 'string' && state.answer_result) {
          this.handlers.onAnswerResult?.({ verdict: state.answer_result });
        }
        // The server has seen the answer, and the question has moved: the chips
        // are live again. The small state frames (mute, timers) name no phase
        // and prove only that the answer arrived.
        this.acknowledgeAnswer();
        if (state.phase) this.answerLocked = false;
        // (main) a question turn whose state frame is its first frame holds too, and the
        // resume frame on a fresh socket (no activity since open) still shows at once.
        if (state.check_options?.length && (this.turnInFlight || this.turnActivitySinceOpen)) {
          this.pendingState = state;
          this.pendingStateAwaitsComplete = true;
        } else {
          this.handlers.onState?.(state);
        }
        if (state.phase === 'complete') this.handlers.onSessionEnded?.();
        break;
      }
      case 'board_events': {
        // Read BEFORE this frame opens its turn: only a board that arrives into
        // a finished, silent class may show a line before its audio.
        const classIsQuiet =
          !this.turnInFlight && !this.awaitingDrain && !this.userPaused && this.chunkMeta.size === 0 && this.playback.idle;
        this.turnActivitySinceOpen = true;
        if (!this.turnInFlight) this.handlers.onTurnStarted?.();
        this.turnInFlight = true;
        this.serverTurnOpen = true;
        this.clearTurnErrorRecovery();
        this.bufferBoardEvents((msg.events as BoardEvent[]) ?? [], classIsQuiet);
        break;
      }
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
      case 'audio_chunk': {
        this.turnActivitySinceOpen = true;
        const sentence = parseSentenceId(String(msg.sentence_id ?? ''));
        if (sentence && this.abortedTurns.includes(sentence.turn)) {
          // A frame of a turn the student already cut off, sent before the
          // server heard the interruption. Playing it talked over them.
          probe(`DROPPED ${String(msg.sentence_id)} — its turn was aborted`);
          break;
        }
        if (sentence) this.receivedTurn = sentence.turn;
        if (!this.turnInFlight) this.handlers.onTurnStarted?.();
        this.turnInFlight = true;
        this.serverTurnOpen = true;
        this.clearTurnErrorRecovery();
        this.handleAudioChunk(msg);
        break;
      }
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
        this.acknowledgeAnswer();
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
        this.turnActivitySinceOpen = true;
        // This turn_complete belongs to the held question (it came after it),
        // so the question may now mount once the audio drains.
        this.pendingStateAwaitsComplete = false;
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
        this.answerLocked = false;
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
          this.pendingStateAwaitsComplete = false;
          if (this.turnInFlight || this.pendingState) this.flushHeldTurn();
        }, TURN_ERROR_RECOVERY_MS);
        break;
      case 'stt_too_short':
        this.handlers.onSttTooShort?.(String(msg.message ?? 'That was too short to hear.'));
        break;
      case 'error':
        // e.g. "You're muted — unmute to answer": the answer was refused, so
        // the chips are live again.
        this.answerLocked = false;
        this.handlers.onError?.(String(msg.message ?? 'Something went wrong.'));
        break;
      case 'ping':
        // One-directional server heartbeat while a turn is active — no reply
        // expected. It is a sign of life, which `onmessage` already counted.
        break;
      case 'pong':
        // The answer to our own ping; `onmessage` already counted it.
        break;
      default:
        break;
    }
  }

  /** A state frame carrying check_options, held until its turn finishes. */
  private pendingState: DronaState | null = null;
  // --- The understanding check-in (time-based) ---
  /** Drona's speech heard since the student last acted, in ms. */
  private speechSinceStudentMs = 0;
  private lastStartedSentence: string | null = null;
  private checkinOpen = false;

  /**
   * Called as each part starts (half a second before it is heard). On the FIRST
   * part of a new sentence — the previous one has just ended, a natural pause —
   * check whether it is time to ask; never mid-sentence.
   */
  private maybeCheckIn(meta: { sentenceId?: string; durationMs?: number } | undefined): boolean {
    const sentence = meta?.sentenceId;
    const newSentence = !!sentence && sentence !== this.lastStartedSentence;
    let asked = false;
    if (
      newSentence &&
      this.lastStartedSentence !== null &&
      this.handlers.onCheckin &&
      !this.checkinOpen &&
      !this.pendingState && // a question is on its way: that is the check
      !this.awaitingDrain &&
      !this.userPaused &&
      this.speechSinceStudentMs >= CHECKIN_AFTER_SPEECH_MS
    ) {
      this.checkinOpen = true;
      this.speechSinceStudentMs = 0;
      this.holdPlayback();
      this.handlers.onCheckin();
      asked = true;
    }
    if (sentence) this.lastStartedSentence = sentence;
    this.speechSinceStudentMs += meta?.durationMs ?? 0;
    return asked;
  }

  /** The student's tap (or the screen's timeout, as "ok"). */
  answerCheckin(choice: CheckinChoice, said?: string) {
    if (!this.checkinOpen) return;
    this.checkinOpen = false;
    this.speechSinceStudentMs = 0;
    if (choice === 'ok' || !said) {
      // The screen's 10 s "carry on" must not restart a class the student
      // paused while the card was up.
      if (!this.userPaused) this.releasePlayback();
      return;
    }
    // A doubt or "explain again" is the student speaking up: Drona stops that
    // explanation and answers it, exactly as if they had raised their hand.
    this.bargeIn();
    this.sendUtterance(said);
  }
  /**
   * True from the moment a question is held until ITS turn's `turn_complete`.
   * A drain that belongs to the previous turn (its turn_complete armed
   * `awaitingDrain` before this question arrived) must not mount it: the
   * question sentence itself is still to come.
   */
  private pendingStateAwaitsComplete = false;
  /** Any turn frame (or anything we sent) since this socket opened. */
  private turnActivitySinceOpen = false;
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
    this.drainWatchdog = null;
    // Paused: nothing is being heard, so there is no silence to measure. A
    // turn_complete arriving mid-pause used to re-arm this, and 20 s later it
    // mounted the question over a class the student had stopped.
    if (this.userPaused) return;
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
    // PAUSE STOPS EVERYTHING. Whatever released the turn (drain, watchdog,
    // turn_error timer, an idle queue at turn_complete), the question and the
    // turn's last lines wait for the student to press play; releasePlayback
    // finishes the job.
    if (this.userPaused) {
      this.awaitingDrain = true;
      if (this.drainWatchdog) {
        clearTimeout(this.drainWatchdog);
        this.drainWatchdog = null;
      }
      return;
    }
    this.awaitingDrain = false;
    if (this.drainWatchdog) {
      clearTimeout(this.drainWatchdog);
      this.drainWatchdog = null;
    }
    this.clearTurnErrorRecovery();
    this.turnInFlight = false;
    this.flushPendingBoardEvents(this.heldThroughBatch);
    if (this.pendingState && !this.pendingStateAwaitsComplete) {
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
  private revealBoardEntry(
    entry: BoardEntry,
    carrier: string,
    timing?: RevealTiming,
    write?: { delayMs: number; ms: number }
  ) {
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
    // Step by step (board-steps.ts): a derivation chain or a paragraph is
    // written as the rows a teacher would write, one after another.
    const rows = toSteps(event);
    if (rows.length === 1) {
      this.handlers.onBoardReveal?.(write ? { ...event, key: entry.key, write } : { ...event, key: entry.key });
      return;
    }
    const pace = paceSteps(rows, write);
    rows.forEach((row, i) =>
      this.handlers.onBoardReveal?.({ ...row, key: `${entry.key}~${i}`, write: pace[i] })
    );
  }

  /**
   * THE BOARD LEADS THE VOICE BY ~BOARD_LEAD_S (lib/pcm-playback-queue.ts).
   *
   * Only plain writing goes early — text, heading, note, formula, and none of
   * the figure kinds — and only a PREFIX of the chunk's lines, so a figure
   * never ends up below a line that comes after it. Everything else stays with
   * onItemStart, which runs at the old time and reveals the rest (this is
   * idempotent by key, so it writes nothing twice).
   *
   * Three things keep the sync:
   * - The caption, the speaking flag and figures/widgets are not touched: the
   *   classroom's cue captions rely on onItemStart running just before
   *   onBoardReveal of the same sentence (app/live-classroom.tsx).
   * - The cue clock is the last revealed line's `seq` (activeSeq), and a
   *   widget's cues and steps are selected by it. Early text would move it, so
   *   a turn whose board holds any registry widget does not lead at all — it
   *   keeps today's reveal times.
   * - Board order is arrival order: if an earlier chunk still holds a line that
   *   has not been revealed (a figure waiting for its sentence), this chunk
   *   waits behind it.
   */
  private revealWrittenLinesAhead(id: string) {
    const meta = this.chunkMeta.get(id);
    const entries = meta?.board;
    if (!meta || !entries?.length) return;
    for (const [otherId, other] of this.chunkMeta) {
      if (otherId === id) break;
      if (other.board?.some((e) => !this.revealedBoardKeys.has(e.key))) return;
    }
    const n = this.writtenPrefix(entries).length;
    if (n === 0) return;
    const now = Date.now();
    const pace = paceLines(
      entries.map((e) => e.event),
      this.sentenceMs(meta)
    );
    entries.slice(0, n).forEach((entry, i) =>
      this.revealBoardEntry(
        entry,
        `ahead(${meta.sentenceId ?? id})`,
        { sentenceId: meta.sentenceId ?? '-', receivedAt: meta.receivedAt ?? now, startedAt: now },
        pace[i]
      )
    );
  }

  /**
   * The lines of `entries` that may be shown ahead of their voice: the plain
   * written lines at the front, and none at all when the turn's board holds a
   * registry widget (its cues and steps run off the last revealed `seq`).
   */
  private writtenPrefix(entries: BoardEntry[]): BoardEntry[] {
    let n = 0;
    while (n < entries.length && this.isWrittenLine(entries[n].event)) n += 1;
    const prefix = entries.slice(0, n);
    for (const entry of prefix) {
      const batch = this.boardBatches.find((b) => b.serial === entry.batch);
      if (!batch || batch.entries.some((e) => e.event.payload)) return [];
    }
    return prefix;
  }

  /** Lines shown the moment their turn's board arrived (before any audio), and
   *  when. See `revealOnArrival`. Read once, by the turn's first audio. */
  private earlyRevealAt = new Map<string, number>();

  /**
   * THE FIRST LINE, AS SOON AS IT IS SAFE.
   *
   * A turn's board arrives ahead of its audio by the TTS latency. When the
   * class is silent and the previous turn is over — flushed, drained, nothing
   * queued, not paused — the turn's first line may go up at once, and that
   * time counts against the hold on the first audio. Anywhere else it must
   * not: the next turn's board used to arrive while the last one was still
   * being spoken and was written over it (see flushPendingBoardEvents).
   *
   * Only the first entry, and only if it is plain writing, the turn has no
   * widget, and nothing earlier in the session has the same content (a turn
   * re-sent after a resume or a drop is re-keyed to the copy already on the
   * board, and an early line under the new key would be written twice).
   */
  private revealOnArrival(batch: BoardBatch) {
    const first = batch.entries[0];
    if (!first || !pcmAvailable || FIRST_AUDIO_HOLD_S <= 0) return;
    if (this.writtenPrefix([first]).length === 0 || this.revealedBoardKeys.has(first.key)) return;
    const repeats = this.boardBatches.some(
      (b) => b !== batch && b.entries.some((e) => e.fingerprint === first.fingerprint)
    );
    if (repeats) return;
    const now = Date.now();
    this.revealBoardEntry(first, 'arrival', { sentenceId: '-', receivedAt: now, startedAt: now });
    this.earlyRevealAt.set(first.key, now);
  }

  /**
   * How much of the opening hold a run's first chunk still owes, after
   * showing its plain lines. 0 when it has none (or the turn has a widget):
   * nothing is delayed for a sentence with nothing to show.
   *
   * The clock starts at the LATEST of its lines' reveal times — a line shown
   * on arrival has been up since then — so a board that beat its audio by the
   * TTS latency pays only the rest. A line that was already on the board
   * before this turn counts as seen long ago.
   */
  private holdForFirstAudio(
    entries: BoardEntry[],
    sentence: { speech?: string; durationMs?: number; sentenceId: string; receivedAt: number }
  ): number {
    const prefix = this.writtenPrefix(entries);
    if (prefix.length === 0) return 0;
    const now = Date.now();
    const pace = paceLines(
      entries.map((e) => e.event),
      this.sentenceMs(sentence)
    );
    let latest = -Infinity;
    prefix.forEach((entry, i) => {
      const early = this.earlyRevealAt.get(entry.key);
      this.earlyRevealAt.delete(entry.key);
      if (early !== undefined) latest = Math.max(latest, early);
      else if (!this.revealedBoardKeys.has(entry.key)) {
        this.revealBoardEntry(
          entry,
          `hold(${sentence.sentenceId})`,
          { sentenceId: sentence.sentenceId, receivedAt: sentence.receivedAt, startedAt: now },
          pace[i]
        );
        latest = now;
      }
    });
    if (latest === -Infinity) return 0;
    const owed = FIRST_AUDIO_HOLD_S - (now - latest) / 1000;
    return owed < 0.1 ? 0 : Math.min(owed, FIRST_AUDIO_HOLD_S);
  }

  /** What a teacher writes: not a figure, a widget or an illustration. */
  private isWrittenLine(e: BoardEvent): boolean {
    if (e.payload || e.svg || e.illustration_slug) return false;
    return e.type === 'text' || e.type === 'heading' || e.type === 'note' || e.type === 'formula';
  }

  /**
   * Reveals the board lines of the next sentence still queued after
   * `currentSentenceId`, ahead of its audio. Its chunk keeps its metadata (for
   * the caption); the reveal is idempotent by key, so its own onItemStart
   * later writes nothing twice.
   */
  private revealNextSentenceLines(currentSentenceId: string | undefined) {
    for (const [, m] of this.chunkMeta) {
      if (!m.sentenceId || m.sentenceId === currentSentenceId) continue;
      if (!m.board?.length) return; // next sentence has no lines: nothing to lead with
      const now = Date.now();
      const pace = paceLines(
        m.board.map((e) => e.event),
        this.sentenceMs(m)
      );
      m.board.forEach((entry, i) =>
        this.revealBoardEntry(
          entry,
          `lead(${m.sentenceId})`,
          { sentenceId: m.sentenceId ?? '-', receivedAt: m.receivedAt ?? now, startedAt: now },
          pace[i]
        )
      );
      return;
    }
  }

  /** Board items for the whole turn arrive ahead of their audio — held here,
   *  not shown yet, until each item's paired audio_chunk starts playing. An
   *  entry leaves this list when a chunk claims it, not when it is revealed. */
  private pendingBoardEvents: BoardEntry[] = [];
  private bufferBoardEvents(events: BoardEvent[], classIsQuiet = false) {
    const batch = this.openBatch(events);
    if (this.cutOffBatch) {
      // The first turn after a drop that cut one off: if it is that turn
      // taught again, its lines are that turn's lines. See `noteSocketLost`.
      this.adoptKeys(batch, [this.cutOffBatch]);
      this.cutOffBatch = null;
    }
    if (classIsQuiet) this.revealOnArrival(batch);
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

  /**
   * HOW LONG THE SENTENCE THAT CARRIES THESE LINES WILL BE SPOKEN FOR.
   *
   * `duration_ms` is the length of one audio FRAME, and a sentence arrives as
   * several; its board lines ride on the first. Pacing the writing to that one
   * frame wrote a thirty-word line in about a second and then left the board
   * still for the rest of the sentence. So: every frame of this sentence
   * already received, added up — audio arrives ahead of playback, so that is
   * usually all of it — and never less than the sentence's own words at a
   * speaking pace, in case its last frames are still on the way.
   */
  private sentenceMs(meta: { speech?: string; durationMs?: number; sentenceId?: string } | undefined) {
    if (!meta) return undefined;
    let frames = 0;
    if (meta.sentenceId) {
      this.chunkMeta.forEach((m) => {
        if (m.sentenceId === meta.sentenceId && m.durationMs) frames += m.durationMs;
      });
    }
    frames = Math.max(frames, meta.durationMs ?? 0);
    const words = meta.speech?.trim().split(/\s+/).filter(Boolean).length ?? 0;
    const spoken = words * MS_PER_SPOKEN_WORD;
    const ms = Math.max(frames, spoken);
    return ms > 0 ? ms : undefined;
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

    // Nothing playing: this sentence opens a run of speech. Its lines go up
    // now, while the player buffers, so the board is ahead of the first word.
    // Not while paused: an idle queue there is a stopped class, not a gap, and
    // the lines wait to be written as their sentence plays.
    const opensRun = this.playback.idle && !this.userPaused;
    const pcm = base64ToBytes(audioBase64);
    // The first word of a run waits for its lines to have been on screen for a
    // while (FIRST_AUDIO_HOLD_S), net of what they have already had.
    const holdS =
      opensRun && pcmAvailable && FIRST_AUDIO_HOLD_S > 0 && entries.length > 0
        ? this.holdForFirstAudio(entries, { speech, durationMs, sentenceId, receivedAt })
        : 0;
    if (holdS > 0) {
      (this.playback as PcmPlaybackQueue).enqueue({ id: playbackId, pcm, sampleRate: TTS_SAMPLE_RATE }, { holdS });
    } else {
      this.playback.enqueue({ id: playbackId, pcm, sampleRate: TTS_SAMPLE_RATE });
    }
    if (opensRun && entries.length > 0) {
      const pace = paceLines(
        entries.map((e) => e.event),
        this.sentenceMs({ speech, durationMs, sentenceId })
      );
      entries.forEach((entry, i) =>
        this.revealBoardEntry(entry, `opens(${sentenceId})`, { sentenceId, receivedAt, startedAt: receivedAt }, pace[i])
      );
    }
  }

  // --- Outbound ---

  private sendJson(payload: Record<string, unknown>) {
    this.turnActivitySinceOpen = true;
    if (this.ws?.readyState === WebSocket.OPEN) this.ws.send(JSON.stringify(payload));
  }

  /**
   * `client_msg_id` on every utterance: a string unique to this send, which the
   * server can dedupe on. The same id is reused when the SAME message is sent
   * again after a drop, so a resend is recognisable as one.
   */
  sendUtterance(text: string) {
    this.endUserPause();
    this.dropHeldTurn();
    this.sendJson({ type: 'utterance', text, client_msg_id: newClientMsgId() });
  }

  /**
   * The student's answer to a checkpoint question, from a chip tap.
   *
   * Returns what happened to it, so nothing is dropped without anyone knowing:
   * `sent`; `queued` (the socket is not open — it goes out when it reopens, and
   * `onPendingAnswer` says so); or `ignored` (a chip was already answered and
   * no new question has arrived — a double tap, or a second chip before the
   * first one's reply).
   */
  sendAnswer(text: string): 'sent' | 'queued' | 'ignored' {
    if (this.answerLocked) return 'ignored';
    this.answerLocked = true;
    this.endUserPause();
    this.dropHeldTurn();
    const id = newClientMsgId();
    const ws = this.ws;
    if (ws?.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: 'utterance', text, client_msg_id: id }));
      this.unackedAnswer = { text, id, at: Date.now(), socket: ws };
      return 'sent';
    }
    this.pendingAnswer = { text, id, at: Date.now() };
    this.handlers.onPendingAnswer?.('queued');
    return 'queued';
  }

  /** The server has the answer: nothing to resend if the socket now dies. */
  private acknowledgeAnswer() {
    if (this.unackedAnswer && this.unackedAnswer.socket === this.ws) this.unackedAnswer = null;
  }

  /** An answer the dead socket may not have delivered goes back in the queue. */
  private requeueUnackedAnswer() {
    const unacked = this.unackedAnswer;
    this.unackedAnswer = null;
    if (!unacked || this.pendingAnswer) return;
    this.pendingAnswer = { text: unacked.text, id: unacked.id, at: unacked.at };
  }

  /** The socket is open again: the queued answer goes out, unless it has gone
   *  stale, in which case the student is told rather than answered for. */
  private flushPendingAnswer() {
    const pending = this.pendingAnswer;
    if (!pending) return;
    this.pendingAnswer = null;
    if (Date.now() - pending.at > PENDING_ANSWER_MAX_AGE_MS) {
      this.answerLocked = false;
      this.handlers.onError?.("Your answer didn't go through before the connection came back. Tap it again.");
      return;
    }
    const ws = this.ws;
    if (ws?.readyState !== WebSocket.OPEN) {
      this.pendingAnswer = pending;
      return;
    }
    ws.send(JSON.stringify({ type: 'utterance', text: pending.text, client_msg_id: pending.id }));
    this.unackedAnswer = { text: pending.text, id: pending.id, at: pending.at, socket: ws };
    this.answerLocked = true;
    this.handlers.onPendingAnswer?.('sent');
  }

  /**
   * How many of the current turn's sentences the student has heard: the
   * 1-indexed number of the last one whose audio has started playing (a clip
   * that has started has been heard, at least in part), 0 if none of this
   * turn's has.
   *
   * "The current turn" is the turn of the newest audio frame accepted — the one
   * a barge-in aborts. Sentences are numbered by the server's speech chunk
   * (`<turn>_s<n>`), the same count the board's pairing uses, so the server can
   * resend from the next one.
   */
  private heardThroughSeq(): number {
    if (!this.receivedTurn || this.heardTurn !== this.receivedTurn) return 0;
    return this.heardSeq;
  }

  sendPttStart() {
    // Said BEFORE the queue is cleared and the turn forgotten below.
    const heard = this.heardThroughSeq();
    // Barge-in: stop Drona mid-sentence before the mic opens. Without this she
    // keeps talking into a live mic and speech-to-text transcribes her own
    // voice as the student's answer.
    this.endUserPause();
    this.bargeIn();
    this.sendJson({ type: 'ptt_start', heard_through_seq: heard });
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
    this.lastStartedSentence = null;
    this.dropHeldTurn();
    this.chunkMeta.clear();
    this.earlyRevealAt.clear();
    this.currentChunkDurationMs = null;
    this.playback.clear();
    this.handlers.onSpeakingChange?.(false);
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
    // The student acted: the clock starts again and an open check-in is over.
    this.speechSinceStudentMs = 0;
    if (this.checkinOpen) {
      this.checkinOpen = false;
      this.handlers.onCheckinClosed?.();
    }
    // The turn being abandoned is aborted server-side, but frames it already
    // sent are still coming down the wire. Remember which turn it was so they
    // are dropped on arrival (audio only: the protocol's other frames carry no
    // turn id, so a late `board_events` frame cannot be told from a new one).
    if (this.receivedTurn && !this.abortedTurns.includes(this.receivedTurn)) {
      this.abortedTurns.push(this.receivedTurn);
      if (this.abortedTurns.length > ABORTED_TURNS_KEPT) this.abortedTurns.shift();
    }
    this.receivedTurn = null;
    this.heardTurn = null;
    this.heardSeq = 0;
    this.turnInFlight = false;
    this.pendingState = null;
    this.pendingStateAwaitsComplete = false;
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
    const heard = this.heardThroughSeq();
    this.dropHeldTurn();
    this.chunkMeta.clear();
    this.earlyRevealAt.clear();
    this.currentChunkDurationMs = null;
    this.playback.clear();
    this.sendJson({
      type: 'interrupt',
      playback_position: playbackPosition,
      cutoff_text: cutoffText,
      heard_through_seq: heard,
    });
  }

  mute() {
    this.sendJson({ type: 'mute' });
  }

  unmute() {
    this.sendJson({ type: 'unmute' });
  }

  /**
   * The student's pause button. It stops EVERYTHING, not just the sound: no
   * question or chips mount, no board line is written, no check-in asks, and
   * nothing times out into carrying on. All of it waits for resumePlayback.
   */
  pausePlayback() {
    this.userPaused = true;
    this.holdPlayback();
  }

  resumePlayback() {
    this.userPaused = false;
    // Play over an open "Samajh aa raha hai?" card is the student carrying on.
    if (this.checkinOpen) {
      this.checkinOpen = false;
      this.speechSinceStudentMs = 0;
      this.handlers.onCheckinClosed?.();
    }
    this.releasePlayback();
  }

  /** True while the student has the class paused. */
  get isPaused() {
    return this.userPaused;
  }

  private userPaused = false;

  /** Stops the sound (the student's pause, or the check-in's). */
  private holdPlayback() {
    this.playback.pause();
    // The drain watchdog measures time without progress, and a pause is
    // exactly that — so on a pause of any real length it would fire and mount
    // the checkpoint over a lesson the student had deliberately stopped. Held
    // down for the duration; it starts again from zero on release, which is
    // the right reading: the student has heard nothing new.
    if (this.drainWatchdog) {
      clearTimeout(this.drainWatchdog);
      this.drainWatchdog = null;
    }
  }

  private releasePlayback() {
    this.playback.resume();
    if (!this.awaitingDrain) return;
    // A turn that finished during the pause, all of it already heard: show
    // its question now. Otherwise wait for the rest of its audio as usual.
    if (this.playback.idle) this.flushHeldTurn();
    else this.armDrainWatchdog();
  }

  /** The student spoke during a pause: the class is running again. */
  private endUserPause() {
    if (!this.userPaused) return;
    this.userPaused = false;
    this.playback.resume();
    this.handlers.onPauseEnded?.();
  }
}

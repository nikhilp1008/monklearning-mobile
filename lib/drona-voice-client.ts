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
  check_options?: string[];
  question_text?: string;
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
  onTurnComplete?: () => void;
  onTurnError?: (message: string) => void;
  onSttTooShort?: (message: string) => void;
  onError?: (message: string) => void;
}

const RECONNECT_DELAYS_MS = [1000, 2000, 4000, 8000, 8000, 8000];
/** TTS sample rate — live-verified server-side (filler-cache fallback byte
 *  math). Bit depth/channels are the standard inference (16-bit mono), not
 *  independently confirmed. */
const TTS_SAMPLE_RATE = 24000;

/**
 * WebSocket client for a live Drona tutoring session. Mirrors
 * monk-learning-webpage's voice.ts protocol (see PROGRESS.md for the full
 * spec this was built against), adapted for React Native:
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
export class DronaVoiceClient {
  private ws: WebSocket | null = null;
  private readonly sessionId: string;
  private readonly accessToken: string;
  private readonly wsBaseUrl: string;
  private readonly handlers: DronaVoiceHandlers;
  private readonly playback = new AudioPlaybackQueue();

  private manualDisconnect = false;
  private reconnectAttempt = 0;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;

  /** sentence_id -> {speech, board_event} for chunks currently queued/playing,
   *  so the playback queue's onItemStart can look up what to reveal. */
  private chunkMeta = new Map<string, { speech?: string; boardEvent?: BoardEvent | null }>();

  constructor(sessionId: string, accessToken: string, apiBaseUrl: string, handlers: DronaVoiceHandlers) {
    this.sessionId = sessionId;
    this.accessToken = accessToken;
    this.wsBaseUrl = apiBaseUrl.replace(/^http/, 'ws').replace(/\/$/, '');
    this.handlers = handlers;

    this.playback.onItemStart = (id) => {
      const meta = this.chunkMeta.get(id);
      if (meta?.speech) this.handlers.onCaptionReveal?.(meta.speech);
      if (meta?.boardEvent) this.handlers.onBoardReveal?.(meta.boardEvent);
      this.chunkMeta.delete(id);
    };
  }

  connect() {
    this.manualDisconnect = false;
    this.openSocket();
  }

  disconnect() {
    this.manualDisconnect = true;
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
    this.playback.destroy();
    this.ws?.close();
    this.ws = null;
  }

  private openSocket() {
    this.handlers.onConnectionChange?.(this.reconnectAttempt > 0 ? 'reconnecting' : 'connecting');
    const url = `${this.wsBaseUrl}/drona/session/${this.sessionId}/live?token=${encodeURIComponent(this.accessToken)}`;
    const ws = new WebSocket(url);
    ws.binaryType = 'arraybuffer';
    this.ws = ws;

    ws.onopen = () => {
      this.reconnectAttempt = 0;
      this.handlers.onConnectionChange?.('open');
    };
    ws.onmessage = (event) => this.handleMessage(event.data);
    ws.onerror = () => {
      // onclose fires right after in RN's WebSocket implementation — reconnect is handled there.
    };
    ws.onclose = () => {
      this.handlers.onConnectionChange?.('closed');
      if (!this.manualDisconnect) this.scheduleReconnect();
    };
  }

  private scheduleReconnect() {
    if (this.reconnectAttempt >= RECONNECT_DELAYS_MS.length) return;
    const delay = RECONNECT_DELAYS_MS[this.reconnectAttempt];
    this.reconnectAttempt += 1;
    this.reconnectTimer = setTimeout(() => {
      if (!this.manualDisconnect) this.openSocket();
    }, delay);
  }

  private handleMessage(data: unknown) {
    if (typeof data !== 'string') return; // server never sends binary frames outbound
    let msg: Record<string, unknown>;
    try {
      msg = JSON.parse(data);
    } catch {
      return;
    }

    switch (msg.type) {
      case 'state':
        this.handlers.onState?.(msg as unknown as DronaState);
        break;
      case 'board_events':
        this.bufferBoardEvents((msg.events as BoardEvent[]) ?? []);
        break;
      case 'board_replay':
        this.handlers.onBoardReplay?.((msg.events as BoardEvent[]) ?? []);
        break;
      case 'audio_chunk':
        this.handleAudioChunk(msg);
        break;
      case 'transcript_partial':
        this.handlers.onTranscriptPartial?.(String(msg.transcript ?? ''));
        break;
      case 'transcript_final':
        this.handlers.onTranscriptFinal?.(String(msg.transcript ?? ''), msg.confidence as number | undefined);
        break;
      case 'meta':
        this.handlers.onMeta?.(msg as unknown as DronaMeta);
        break;
      case 'turn_complete':
        this.flushPendingBoardEvents();
        this.handlers.onTurnComplete?.();
        break;
      case 'turn_error':
        this.handlers.onTurnError?.(String(msg.message ?? 'Something went wrong.'));
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
    if (!sentenceId || !audioBase64) return;

    const boardEvent = (msg.board_event as BoardEvent | null) ?? null;
    if (boardEvent) {
      this.pendingBoardEvents = this.pendingBoardEvents.filter((e) => e.seq !== boardEvent.seq);
    }
    this.chunkMeta.set(sentenceId, { speech: msg.speech as string | undefined, boardEvent });

    const pcm = base64ToBytes(audioBase64);
    this.playback.enqueue({ id: sentenceId, pcm, sampleRate: TTS_SAMPLE_RATE });
  }

  // --- Outbound ---

  private sendJson(payload: Record<string, unknown>) {
    if (this.ws?.readyState === WebSocket.OPEN) this.ws.send(JSON.stringify(payload));
  }

  sendUtterance(text: string) {
    this.sendJson({ type: 'utterance', text });
  }

  sendPttStart() {
    this.sendJson({ type: 'ptt_start' });
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

  interrupt(playbackPosition: number, cutoffText: string) {
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

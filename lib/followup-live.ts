/**
 * Ask follow-up, transcribed while the button is held.
 *
 * The upload route records a file, and only when the student lets go does it
 * send it, wait for it to be transcribed, and wait for the answer. Here one
 * WebSocket opens on PRESS (`/followup/live`): the microphone's PCM streams up
 * while the student talks, the server transcribes it as it arrives and warms
 * the teacher's voice in the meantime, and at release the answer comes back
 * down the same socket — as the very frames the upload route streams, read by
 * the same `dispatchFollowUpFrame`.
 *
 * It must never leave a student worse off, so:
 *   - it is used only when the server's /version says `followup_live` is on
 *     (switchable without an app update), checked with a short timeout;
 *   - anything that goes wrong BEFORE the answer starts — the flag off, a
 *     socket that never opened or dropped, the server's `live_unavailable` —
 *     rejects with `LiveUnavailable`, and the caller sends the recording
 *     through the upload route exactly as before.
 */
import {
  dispatchFollowUpFrame,
  parseFrames,
  type FollowUpHandlers,
  type FollowUpSurface,
  type FollowUpTurn,
  type TextbookPageContext,
} from '@/lib/doubt-followup';
import { supabase } from '@/lib/supabase';

/** The live path could not be used; send the recording the old way. */
export class LiveUnavailable extends Error {}

const FLAG_TTL_MS = 5 * 60 * 1000;
const FLAG_TIMEOUT_MS = 1500;
/** A hold never needs more than this buffered before the socket opens. */
const MAX_QUEUED_BYTES = 16000 * 2 * 10;

let flag: { at: number; on: boolean } | null = null;

/** Whether the server wants live follow-ups. False whenever unsure. */
export async function followUpLiveEnabled(): Promise<boolean> {
  if (flag && Date.now() - flag.at < FLAG_TTL_MS) return flag.on;
  const baseUrl = process.env.EXPO_PUBLIC_API_URL;
  if (!baseUrl) return false;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FLAG_TIMEOUT_MS);
    const res = await fetch(`${baseUrl.replace(/\/$/, '')}/version`, { signal: controller.signal });
    clearTimeout(timer);
    const body = (await res.json()) as { flags?: { followup_live?: boolean } };
    flag = { at: Date.now(), on: body?.flags?.followup_live === true };
  } catch {
    // Unknown is off — and cached briefly, so a slow server costs one wait.
    flag = { at: Date.now() - FLAG_TTL_MS + 30_000, on: false };
  }
  return flag.on;
}

export type LiveAskStart = {
  surface: FollowUpSurface;
  id: string;
  page?: TextbookPageContext;
  history: FollowUpTurn[];
  pcm: boolean;
};

export class LiveAsk {
  private ws: WebSocket | null = null;
  private open = false;
  private broken = false;
  private queue: ArrayBuffer[] = [];
  private queued = 0;
  private incoming: string[] = [];
  private onMessage: ((text: string) => void) | null = null;
  private onEnd: ((clean: boolean) => void) | null = null;

  /** Opens the socket and sends the start frame. Never throws: a socket that
   *  cannot open just marks this ask broken, and `finish` falls back. */
  static async begin(start: LiveAskStart): Promise<LiveAsk> {
    const ask = new LiveAsk();
    try {
      const baseUrl = process.env.EXPO_PUBLIC_API_URL;
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      if (!baseUrl || !token) throw new Error('no session');
      const url = `${baseUrl.replace(/\/$/, '').replace(/^http/, 'ws')}/followup/live`;
      // React Native's WebSocket takes headers, as the classroom's does.
      const ws = new (WebSocket as unknown as {
        new (u: string, p: string[] | null, o: { headers: Record<string, string> }): WebSocket;
      })(url, null, { headers: { Authorization: `Bearer ${token}` } });
      ws.binaryType = 'arraybuffer';
      ask.ws = ws;
      ws.onopen = () => {
        ask.open = true;
        ws.send(JSON.stringify({ type: 'start', ...start }));
        for (const buf of ask.queue) ws.send(buf);
        ask.queue = [];
        ask.queued = 0;
      };
      ws.onmessage = (e) => {
        const text = typeof e.data === 'string' ? e.data : '';
        if (!text) return;
        if (ask.onMessage) ask.onMessage(text);
        else ask.incoming.push(text);
      };
      ws.onerror = () => {
        ask.broken = true;
      };
      ws.onclose = (e) => {
        ask.open = false;
        ask.onEnd?.(e.code === 1000);
        if (!ask.onEnd) ask.broken = true;
      };
    } catch {
      ask.broken = true;
    }
    return ask;
  }

  /** One slice of the microphone, 16 kHz mono Int16. */
  sendPcm(bytes: Uint8Array): void {
    if (this.broken || !this.ws) return;
    const buf = bytes.slice().buffer as ArrayBuffer;
    if (this.open) {
      this.ws.send(buf);
    } else if (this.queued + buf.byteLength <= MAX_QUEUED_BYTES) {
      this.queue.push(buf);
      this.queued += buf.byteLength;
    }
  }

  /** The student let go before the answer: close without asking. */
  cancel(): void {
    try {
      if (this.open) this.ws?.send(JSON.stringify({ type: 'cancel' }));
      this.ws?.close();
    } catch {
      /* already gone */
    }
  }

  /**
   * Release: ask for the answer and stream it into `handlers`.
   *
   * Rejects with `LiveUnavailable` whenever no answer frame has arrived yet
   * and the live path cannot deliver one — the caller then uploads instead.
   * An `error` frame (the daily limit, a question not caught) rejects with
   * that message, as the upload route does.
   */
  finish(handlers: FollowUpHandlers, signal?: AbortSignal): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const ws = this.ws;
      if (!ws || this.broken || !this.open) {
        this.cancel();
        reject(new LiveUnavailable('socket not open'));
        return;
      }
      let answered = false;
      let failure: string | null = null;
      let settled = false;
      const done = (fn: () => void) => {
        if (settled) return;
        settled = true;
        signal?.removeEventListener('abort', onAbort);
        fn();
      };
      const onAbort = () => {
        this.cancel();
        done(resolve);
      };
      signal?.addEventListener('abort', onAbort);

      const read = (text: string) => {
        for (const frame of parseFrames(text)) {
          if (frame.event === 'live_unavailable') {
            if (!answered) done(() => reject(new LiveUnavailable('server declined')));
            continue;
          }
          if (frame.event !== 'error') answered = true;
          const err = dispatchFollowUpFrame(frame, handlers);
          if (err !== null) failure = err;
        }
      };
      this.onMessage = read;
      for (const text of this.incoming.splice(0)) read(text);
      this.onEnd = () => {
        if (failure) done(() => reject(new Error(failure as string)));
        else if (!answered) done(() => reject(new LiveUnavailable('closed before answering')));
        else done(resolve);
      };
      try {
        ws.send(JSON.stringify({ type: 'stop' }));
      } catch {
        done(() => reject(new LiveUnavailable('could not send stop')));
      }
    });
  }
}

/** How loud one 16-bit PCM frame is, 0–1 — the classroom's curve
 *  (app/live-classroom.tsx), for the ring's halo while the student talks. */
export function pcmLevel(bytes: Uint8Array): number {
  const n = bytes.length >> 1;
  if (n === 0) return 0;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < n; i += 4) {
    let v = bytes[2 * i] | (bytes[2 * i + 1] << 8);
    if (v >= 32768) v -= 65536;
    sum += v * v;
    count++;
  }
  const rms = Math.sqrt(sum / count) / 32768;
  return Math.min(1, Math.max(0, (Math.log10(rms + 1e-5) + 3) / 2.3));
}

import { File, Paths } from 'expo-file-system';

import { base64ToBytes } from '@/lib/audio-pcm';
import { supabase } from '@/lib/supabase';

/**
 * Asking about a solution that is already on screen.
 *
 * The reply streams a token at a time for the same reason the solve does: the
 * student is mid-conversation and watching, and first words inside a second
 * read as an answer arriving where four seconds of nothing reads as a hang.
 *
 * Nothing is stored. The exchange lives in the component that owns the sheet
 * and goes when the screen does, which is why `history` is sent up rather than
 * kept by the server — see `POST /doubts/{id}/ask`.
 */

export type FollowUpTurn = {
  role: 'user' | 'assistant';
  content: string;
};

export type FollowUpStep = { n: number; text: string };

export type FollowUpHandlers = {
  /** What the recording was heard as — shown before the answer starts. */
  onTranscript?: (text: string) => void;
  /** One finished step of the explanation. */
  onStep: (step: FollowUpStep) => void;
  /**
   * The same explanation as continuous speech. `inlineVoice` true means the
   * server is synthesising it into THIS stream — `onAudio` clips are coming —
   * and fetching /speak-stream would only buy the same voice twice.
   */
  onSpoken?: (text: string, inlineVoice: boolean) => void;
  /** One WAV clip of the answer's voice, sent down the same stream as the
   *  steps. Enqueue and play; order is the arrival order. */
  onAudio?: (wav: Uint8Array, n: number) => void;
  /**
   * The ANSWER is complete — every step and the spoken line are here. Audio
   * may still be arriving behind it; settle the screen on this, not on the
   * stream closing, or the sheet stays shut through seconds of synthesis.
   */
  onAnswered?: () => void;
  /** The inline voice finished. Zero chunks means it came to nothing, and a
   *  fallback fetch to /speak-stream is worth making. */
  onVoiceDone?: (chunks: number) => void;
};

/** Everything after the last complete `\n\n`, left for the next chunk. */
function parseFrames(chunk: string): { event: string; data: unknown }[] {
  const out: { event: string; data: unknown }[] = [];
  for (const block of chunk.split('\n\n')) {
    let event = 'message';
    const dataLines: string[] = [];
    for (const line of block.split('\n')) {
      if (line.startsWith('event:')) event = line.slice(6).trim();
      else if (line.startsWith('data:')) dataLines.push(line.slice(5).trim());
    }
    if (!dataLines.length) continue;
    try {
      out.push({ event, data: JSON.parse(dataLines.join('\n')) });
    } catch {
      // A frame we cannot read is not worth killing the reply for.
    }
  }
  return out;
}

/**
 * The same question, asked out loud.
 *
 * The recording goes up whole and the transcript comes back down the same
 * connection as the answer, so the screen can show what was HEARD before the
 * steps start arriving — a misheard question is worth catching before reading
 * three steps that answer something else.
 */
export function askAboutDoubtAloud(
  doubtId: string,
  recordingUri: string,
  history: FollowUpTurn[],
  handlers: FollowUpHandlers,
  signal?: AbortSignal
): Promise<void> {
  const body = new FormData();
  body.append('audio', {
    uri: recordingUri,
    name: 'question.m4a',
    type: 'audio/m4a',
  } as unknown as Blob);
  body.append('history', JSON.stringify(history));
  return streamAsk(doubtId, 'ask-voice', body, handlers, signal);
}

export function askAboutDoubt(
  doubtId: string,
  question: string,
  history: FollowUpTurn[],
  handlers: FollowUpHandlers,
  signal?: AbortSignal
): Promise<void> {
  return streamAsk(doubtId, 'ask', JSON.stringify({ question, history }),
                   handlers, signal);
}

/**
 * The answer read aloud, saved to a file the player can open.
 *
 * Fetched AFTER the steps are on screen, never before: the steps are useful in
 * silence, so speech that is slow or refused costs the student nothing they
 * were already reading. Returns null rather than throwing for the same reason —
 * a missing voice is a missing extra, not a failed answer.
 */
export async function speakFollowUp(
  doubtId: string,
  spoken: string
): Promise<string | null> {
  const baseUrl = process.env.EXPO_PUBLIC_API_URL;
  if (!baseUrl) return null;
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) return null;

  const res = await fetch(`${baseUrl.replace(/\/$/, '')}/doubts/${doubtId}/speak`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: spoken }),
  });
  if (!res.ok) return null;

  // expo-audio plays a file, and the response is bytes — so it is written to
  // the cache first. Named per doubt so a second question overwrites the first
  // rather than filling the cache with answers nobody will hear again.
  const bytes = await res.arrayBuffer();
  const path = `${Paths.cache.uri}followup-${doubtId}.wav`;
  const file = new File(path);
  try {
    if (file.exists) file.delete();
  } catch {
    // A stale file that will not delete is one we are about to overwrite.
  }
  file.create();
  file.write(new Uint8Array(bytes));
  return path;
}

/**
 * The answer read aloud a SENTENCE AT A TIME, played as each arrives.
 *
 * `speakFollowUp` above cannot start until the whole answer has been
 * synthesised — measured server-side at 9.4s for a 588-character answer, and
 * 24.7s once it has to be split to clear Rumik's ~25s ceiling. The student has
 * been reading the steps for all of it, which is what made the voice feel like
 * it was trailing the board rather than accompanying it.
 *
 * `/doubts/{id}/speak-stream` sends one complete WAV per sentence as it is
 * made. `onChunk` is handed each one in order; the caller queues them.
 *
 * Never throws. A voice that will not synthesise is a missing extra — the
 * steps are on screen and readable without it.
 */
export function speakFollowUpStreaming(
  doubtId: string,
  spoken: string,
  onChunk: (wav: Uint8Array, index: number) => void,
  signal?: AbortSignal
): Promise<void> {
  return new Promise<void>((resolve) => {
    (async () => {
      const baseUrl = process.env.EXPO_PUBLIC_API_URL;
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      if (!baseUrl || !token) {
        resolve();
        return;
      }

      // XHR for the same reason as everywhere else here: RN's fetch has no
      // readable body, so an SSE stream has to be read off `responseText`.
      const xhr = new XMLHttpRequest();
      let consumed = 0;
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        signal?.removeEventListener('abort', onAbort);
        resolve();
      };
      function onAbort() {
        xhr.abort();
        finish();
      }
      signal?.addEventListener('abort', onAbort);

      const drain = () => {
        const text = xhr.responseText ?? '';
        // Whole frames only — a chunk split across two progress events is the
        // next event's problem, not a parse failure.
        const boundary = text.lastIndexOf('\n\n');
        if (boundary < consumed) return;
        const block = text.slice(consumed, boundary + 2);
        consumed = boundary + 2;
        for (const frame of block.split('\n\n')) {
          let name = '';
          const lines: string[] = [];
          for (const line of frame.split('\n')) {
            if (line.startsWith('event:')) name = line.slice(6).trim();
            else if (line.startsWith('data:')) lines.push(line.slice(5).trim());
          }
          if (name !== 'audio' || !lines.length) continue;
          try {
            const payload = JSON.parse(lines.join('\n'));
            if (payload?.b64) onChunk(base64ToBytes(payload.b64), Number(payload.n) || 0);
          } catch {
            // One unreadable chunk is one silent sentence, not a failed answer.
          }
        }
      };

      xhr.open('POST', `${baseUrl.replace(/\/$/, '')}/doubts/${doubtId}/speak-stream`);
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Accept', 'text/event-stream');
      xhr.onprogress = drain;
      xhr.onerror = finish;
      xhr.ontimeout = finish;
      xhr.onload = () => {
        drain();
        finish();
      };
      xhr.send(JSON.stringify({ text: spoken }));
    })().catch(() => resolve());
  });
}

/** One reader for both routes: same frames, different body. */
function streamAsk(
  doubtId: string,
  path: 'ask' | 'ask-voice',
  body: string | FormData,
  handlers: FollowUpHandlers,
  signal?: AbortSignal
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    (async () => {
      const baseUrl = process.env.EXPO_PUBLIC_API_URL;
      if (!baseUrl) {
        reject(new Error('The app isn’t configured to reach the server yet.'));
        return;
      }
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      if (!token) {
        reject(new Error('Please sign in again to ask a follow-up.'));
        return;
      }

      // XMLHttpRequest, not fetch: React Native's fetch has no readable body,
      // so this is the same route `snap-stream` takes for the same reason.
      const xhr = new XMLHttpRequest();
      let consumed = 0;
      let settled = false;
      let failure: string | null = null;

      const finish = (fn: () => void) => {
        if (settled) return;
        settled = true;
        signal?.removeEventListener('abort', onAbort);
        fn();
      };
      function onAbort() {
        xhr.abort();
        // Leaving a conversation is not an error to report back at somebody.
        finish(() => resolve());
      }
      signal?.addEventListener('abort', onAbort);

      const drain = () => {
        const text = xhr.responseText ?? '';
        const boundary = text.lastIndexOf('\n\n');
        if (boundary < consumed) return;
        const chunk = text.slice(consumed, boundary + 2);
        consumed = boundary + 2;
        for (const frame of parseFrames(chunk)) {
          const payload = (frame.data ?? {}) as Record<string, unknown>;
          if (frame.event === 'transcript') {
            handlers.onTranscript?.(String(payload.text ?? ''));
          } else if (frame.event === 'step') {
            handlers.onStep({
              n: Number(payload.n ?? 0),
              text: String(payload.text ?? ''),
            });
          } else if (frame.event === 'spoken') {
            handlers.onSpoken?.(String(payload.text ?? ''), payload.voice === 'inline');
          } else if (frame.event === 'audio') {
            const b64 = typeof payload.b64 === 'string' ? payload.b64 : '';
            if (b64) handlers.onAudio?.(base64ToBytes(b64), Number(payload.n) || 0);
          } else if (frame.event === 'answered') {
            handlers.onAnswered?.();
          } else if (frame.event === 'voice_done') {
            handlers.onVoiceDone?.(Number(payload.chunks) || 0);
          } else if (frame.event === 'error') {
            failure = String(payload.message ?? '');
          }
        }
      };

      xhr.open('POST', `${baseUrl.replace(/\/$/, '')}/doubts/${doubtId}/${path}`);
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      // FormData sets its own multipart boundary; setting it by hand breaks it.
      if (typeof body === 'string') {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }
      xhr.onreadystatechange = () => {
        if (xhr.readyState >= 3) drain();
        if (xhr.readyState !== 4) return;
        drain();
        if (xhr.status >= 400) {
          finish(() =>
            reject(new Error('Monk could not answer that just now. Try again in a moment.'))
          );
          return;
        }
        if (failure) {
          finish(() => reject(new Error(failure as string)));
          return;
        }
        finish(resolve);
      };
      xhr.onerror = () =>
        finish(() => reject(new Error('Couldn’t reach the server. Check your connection.')));
      xhr.send(body as XMLHttpRequestBodyInit);
    })().catch((err) => reject(err));
  });
}

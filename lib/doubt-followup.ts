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

export type FollowUpHandlers = {
  /** One piece of the reply, as it is written. */
  onToken: (text: string) => void;
  /** The reply finished cleanly. */
  onDone?: () => void;
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

export function askAboutDoubt(
  doubtId: string,
  question: string,
  history: FollowUpTurn[],
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
          if (frame.event === 'token') handlers.onToken(String(payload.text ?? ''));
          else if (frame.event === 'error') failure = String(payload.message ?? '');
        }
      };

      xhr.open('POST', `${baseUrl.replace(/\/$/, '')}/doubts/${doubtId}/ask`);
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.setRequestHeader('Content-Type', 'application/json');
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
        handlers.onDone?.();
        finish(resolve);
      };
      xhr.onerror = () =>
        finish(() => reject(new Error('Couldn’t reach the server. Check your connection.')));
      xhr.send(JSON.stringify({ question, history }));
    })().catch((err) => reject(err));
  });
}

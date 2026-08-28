import { DoubtPhoto, SnapFailure, SnappedQuestion, SnapResponse } from '@/lib/doubts';
import { supabase } from '@/lib/supabase';

/**
 * `POST /doubts/stream`, so the question appears while the answer is still
 * being worked out.
 *
 * A solve runs 30 to 45 seconds. On the plain `POST /doubts` the whole page
 * arrives at once, so a student sits in front of a skeleton for all of it and
 * only learns whether the photo was read correctly at the very end. The server
 * has emitted a `questions_read` event straight after transcription for a
 * while, and the webpage has used it for a while; this is mobile catching up.
 *
 * `XMLHttpRequest`, not `fetch`. React Native's `fetch` has no streaming body,
 * and `expo/fetch` does but cannot upload React Native's `{uri, name, type}`
 * form part — its `convertFormData` handles only strings, Blobs and bytes and
 * throws on anything else, so using it would mean reading the photo into
 * memory first. RN's XHR accumulates the response as it arrives and fires
 * `progress`, which is all an SSE reader needs, and it leaves the upload shape
 * exactly as the non-streaming path has it.
 */

/** The `questions_read` payload: what the photo said, before any solving. */
export type ReadQuestion = Pick<
  SnappedQuestion,
  | 'question_index'
  | 'question_text'
  | 'stem'
  | 'options'
  | 'subject'
  | 'chapter'
  | 'question_type'
  | 'legible'
  | 'legibility_note'
>;

export interface SnapStreamHandlers {
  /** How many questions the photo holds, as soon as the server knows. */
  onMeta?: (meta: { question_count: number; note?: string | null }) => void;
  /** The transcribed questions, with no answers yet. */
  onQuestionsRead?: (questions: ReadQuestion[]) => void;
  /** One finished question. Arrives once per question, in order. */
  onQuestion?: (question: SnappedQuestion) => void;
}

/** Anything the server can send. Unknown names are ignored, not fatal. */
type Frame = { event: string; data: unknown };

function parseFrames(chunk: string): Frame[] {
  const out: Frame[] = [];
  for (const block of chunk.split('\n\n')) {
    let name = 'message';
    const dataLines: string[] = [];
    for (const line of block.split('\n')) {
      if (line.startsWith('event:')) name = line.slice(6).trim();
      else if (line.startsWith('data:')) dataLines.push(line.slice(5).trim());
    }
    if (!dataLines.length) continue;
    try {
      out.push({ event: name, data: JSON.parse(dataLines.join('\n')) });
    } catch {
      // A frame split across two progress events is not an error, it is the
      // next chunk's problem; `consumed` below only advances past whole ones.
    }
  }
  return out;
}

/**
 * A `SnapFailure` built from the stream's own `error` frame, so the failure
 * path says exactly what the non-streaming path would.
 */
function failureFrom(data: Record<string, unknown>): SnapFailure {
  return {
    message: String(data.message ?? 'Something went wrong reading that photo.'),
    stage: (data.stage as SnapFailure['stage']) ?? 'unknown',
    remedy: (data.remedy as SnapFailure['remedy']) ?? 'our_side',
    retake_helps: Boolean(data.retake_helps),
  };
}

export function snapDoubtStreaming(
  photo: DoubtPhoto,
  handlers: SnapStreamHandlers,
  signal?: AbortSignal
): Promise<SnapResponse> {
  return new Promise<SnapResponse>((resolve, reject) => {
    (async () => {
      const baseUrl = process.env.EXPO_PUBLIC_API_URL;
      if (!baseUrl) {
        reject(new Error('Not signed in to reach the solver.'));
        return;
      }
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      if (!token) {
        reject(new Error('Not signed in.'));
        return;
      }

      const body = new FormData();
      body.append('file', {
        uri: photo.uri,
        name: photo.fileName || 'doubt.jpg',
        type: photo.mimeType || 'image/jpeg',
      } as unknown as Blob);

      const xhr = new XMLHttpRequest();
      const questions: SnappedQuestion[] = [];
      let meta: Record<string, unknown> = {};
      let failure: SnapFailure | null = null;
      let consumed = 0;
      let settled = false;

      const finish = (fn: () => void) => {
        if (settled) return;
        settled = true;
        signal?.removeEventListener('abort', onAbort);
        fn();
      };
      function onAbort() {
        xhr.abort();
        finish(() => reject(new DOMException('Aborted', 'AbortError')));
      }
      signal?.addEventListener('abort', onAbort);

      /** Reads whole frames only; a partial tail waits for the next chunk. */
      const drain = () => {
        const text = xhr.responseText ?? '';
        const boundary = text.lastIndexOf('\n\n');
        if (boundary < consumed) return;
        const chunk = text.slice(consumed, boundary + 2);
        consumed = boundary + 2;
        for (const frame of parseFrames(chunk)) {
          const payload = (frame.data ?? {}) as Record<string, unknown>;
          switch (frame.event) {
            case 'meta':
              meta = { ...meta, ...payload };
              handlers.onMeta?.({
                question_count: Number(payload.question_count ?? 0),
                note: (payload.note as string | null) ?? null,
              });
              break;
            case 'questions_read':
              handlers.onQuestionsRead?.((payload.questions as ReadQuestion[]) ?? []);
              break;
            case 'question': {
              const q = payload as unknown as SnappedQuestion;
              questions.push(q);
              handlers.onQuestion?.(q);
              break;
            }
            case 'error':
              failure = failureFrom(payload);
              break;
            case 'done':
              meta = { ...meta, ...payload };
              break;
            default:
              // thinking / step / steps_reset: progress the screen does not
              // show yet. Ignored rather than treated as unknown.
              break;
          }
        }
      };

      xhr.open('POST', `${baseUrl.replace(/\/$/, '')}/doubts/stream`);
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.setRequestHeader('Accept', 'text/event-stream');
      xhr.timeout = SNAP_STREAM_TIMEOUT_MS;
      xhr.onprogress = drain;
      xhr.ontimeout = () =>
        finish(() => reject(new Error('That took longer than expected. Try again.')));
      xhr.onerror = () =>
        finish(() => reject(new Error('Could not reach the solver. Check your connection.')));
      xhr.onload = () => {
        drain();
        if (xhr.status >= 400) {
          // A non-200 never reaches the SSE body, so read the plain error the
          // API returns for quota and validation exactly as apiFetch would.
          let parsed: Record<string, unknown> = {};
          try {
            parsed = JSON.parse(xhr.responseText || '{}');
          } catch {
            /* falls through to the generic message */
          }
          const detail = (parsed.detail ?? parsed) as Record<string, unknown>;
          finish(() => reject(Object.assign(new Error(String(detail.message ?? `HTTP ${xhr.status}`)), {
            snapFailure: failureFrom(detail),
            status: xhr.status,
          })));
          return;
        }
        if (failure) {
          const err = Object.assign(new Error(failure.message), { snapFailure: failure });
          finish(() => reject(err));
          return;
        }
        finish(() =>
          resolve({
            ...(meta as object),
            questions,
          } as SnapResponse)
        );
      };
      xhr.send(body as unknown as Document);
    })().catch((err) => reject(err));
  });
}

/** Matches the non-streaming ceiling; a page of five can genuinely take this. */
const SNAP_STREAM_TIMEOUT_MS = 150000;

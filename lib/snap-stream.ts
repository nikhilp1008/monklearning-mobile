import { DoubtPhoto, SnapFailure, SnappedQuestion, SnapResponse } from '@/lib/doubts';
import { isPassRequired, signalPassRequired } from '@/lib/pass-events';
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
  // The photographed question, cut from the page. It arrives on THIS event
  // rather than with the answer, because this is the frame that first paints
  // the question box — showing the text and swapping it later would flicker.
  | 'question_image_url'
>;

export interface SnapStreamHandlers {
  /** How many questions the photo holds, as soon as the server knows. */
  onMeta?: (meta: { question_count: number; note?: string | null }) => void;
  /** The transcribed questions, with no answers yet. */
  onQuestionsRead?: (questions: ReadQuestion[]) => void;
  /**
   * One finished question. Arrives once per question, in COMPLETION order —
   * not page order. Since the API's `perf(snap): deliver each answer when it
   * finishes`, the solves run concurrently and a fast Q3 can land while Q1 is
   * still going, so anything displaying these must key on `question_index`
   * rather than on arrival.
   */
  onQuestion?: (question: SnappedQuestion) => void;
  /**
   * A step of the working, live, for the question being solved right now.
   * `final` false: the step is still being written and `text` is everything
   * so far (`step_partial`) — each call replaces the last for that `n`.
   * `final` true: the step is finished (`step`). Never carries the answer,
   * which only arrives, checked, through `onQuestion`.
   */
  onStep?: (step: { questionIndex: number; n: number; text: string; final: boolean }) => void;
  /** The solve restarted; drop the live steps shown for this question. */
  onStepsReset?: (questionIndex: number) => void;
}

/** Anything the server can send. Unknown names are ignored, not fatal. */
type Frame = { event: string; data: unknown };

/**
 * How far a stream got before it broke, attached to every transport failure
 * (timeout, dropped connection, a stream that ended without `done`).
 *
 * `framesReceived` is the line between "never started" and "started and then
 * broke". Before the first frame the server may not have the photo at all, so
 * the plain `POST /doubts` is a fair second try. After it, the server has the
 * photo and saves and charges each answer as it finishes — a second upload
 * would solve the same page again, bill it twice and leave two copies in the
 * Library. `questions` is whatever had already arrived, so the caller can show
 * those instead of nothing.
 */
export type StreamCut = {
  framesReceived: boolean;
  meta: Record<string, unknown>;
  questions: SnappedQuestion[];
};

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
      let framesReceived = false;
      let doneSeen = false;
      let idleTimer: ReturnType<typeof setTimeout> | null = null;
      let wholeTimer: ReturnType<typeof setTimeout> | null = null;

      const finish = (fn: () => void) => {
        if (settled) return;
        settled = true;
        if (idleTimer) clearTimeout(idleTimer);
        if (wholeTimer) clearTimeout(wholeTimer);
        signal?.removeEventListener('abort', onAbort);
        fn();
      };
      /** A transport failure, carrying how far the stream got. */
      const cut = (message: string) =>
        Object.assign(new Error(message), {
          streamCut: {
            framesReceived,
            meta,
            questions: questions.slice().sort((a, b) => a.question_index - b.question_index),
          } satisfies StreamCut,
        });
      const timedOut = () => {
        xhr.abort();
        finish(() => reject(cut('That took longer than expected. Try again.')));
      };
      /**
       * An IDLE limit, reset by anything arriving, rather than one ceiling on
       * the whole request. A healthy page of three can run past two minutes,
       * but it is never quiet for long: the server sends a `thinking` tick
       * every few seconds while a solve runs. What this catches is a stream
       * that has actually stopped. `xhr.timeout` cannot do it — Android's
       * OkHttp applies it to the whole call, iOS to the gap between packets —
       * so the clock is kept here, the same on both.
       */
      const touch = () => {
        if (settled) return;
        if (idleTimer) clearTimeout(idleTimer);
        idleTimer = setTimeout(timedOut, SNAP_STREAM_IDLE_MS);
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
          framesReceived = true;
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
              doneSeen = true;
              break;
            case 'step':
            case 'step_partial': {
              const n = Number(payload.n);
              const questionIndex = Number(payload.question_index);
              if (Number.isFinite(n) && Number.isFinite(questionIndex)) {
                handlers.onStep?.({
                  questionIndex,
                  n,
                  text: String(payload.text ?? ''),
                  final: frame.event === 'step',
                });
              }
              break;
            }
            case 'steps_reset': {
              const questionIndex = Number(payload.question_index);
              if (Number.isFinite(questionIndex)) handlers.onStepsReset?.(questionIndex);
              break;
            }
            default:
              // thinking: a heartbeat the screen does not show. Ignored rather
              // than treated as unknown.
              break;
          }
        }
      };

      xhr.open('POST', `${baseUrl.replace(/\/$/, '')}/doubts/stream`);
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.setRequestHeader('Accept', 'text/event-stream');
      xhr.onprogress = () => {
        touch();
        drain();
      };
      // A slow upload is not a stalled stream: a 5 MB photo on weak mobile
      // data can take a while before the server has anything to say.
      if (xhr.upload) xhr.upload.onprogress = touch;
      xhr.ontimeout = timedOut;
      xhr.onerror = () =>
        finish(() => reject(cut('Could not reach the solver. Check your connection.')));
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
          // The pass has ended. `apiFetch` tells the app root, which opens
          // Plans; this route is XHR, so it has to say so itself — without it
          // the student got "That was on our end" and a Try again that could
          // only be refused again.
          if (xhr.status === 402 && isPassRequired(parsed)) {
            signalPassRequired();
            const passFailure: SnapFailure = {
              message: 'You need a pass to continue.',
              stage: 'pass',
              remedy: 'our_side',
              retake_helps: false,
            };
            finish(() =>
              reject(Object.assign(new Error(passFailure.message), { snapFailure: passFailure, status: 402 }))
            );
            return;
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
        // Closed without `done` and without an error: a proxy or the network
        // ended it mid-page, which is a cut, not a finished solve.
        if (!doneSeen) {
          finish(() => reject(cut('The connection dropped before the answer arrived.')));
          return;
        }
        finish(() =>
          resolve({
            ...(meta as object),
            // Back into page order. They arrived as each solve finished, which
            // is not the order they are printed on the paper.
            questions: questions.slice().sort((a, b) => a.question_index - b.question_index),
          } as SnapResponse)
        );
      };
      touch();
      wholeTimer = setTimeout(timedOut, SNAP_STREAM_MAX_MS);
      xhr.send(body as unknown as Document);
    })().catch((err) => reject(err));
  });
}

/**
 * The longest the stream may go without a byte. The quiet stretch is reading
 * the photo, before `meta` (OCR plus a figure read, up to ~45s on the server)
 * with the upload in front of it; once solving starts a tick lands every few
 * seconds.
 */
const SNAP_STREAM_IDLE_MS = 90000;
/**
 * A backstop on the whole request, for a stream that keeps ticking and never
 * finishes. Well past the server's own worst case (~45s read, 150s solve).
 */
const SNAP_STREAM_MAX_MS = 300000;

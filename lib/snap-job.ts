import { useSyncExternalStore } from 'react';

import { DoubtPhoto, SnapFailure, SnapResponse, readSnapFailure, snapDoubt } from '@/lib/doubts';
import { ReadQuestion, StreamCut, snapDoubtStreaming } from '@/lib/snap-stream';
import { LiveStep, upsertLiveStep } from '@/lib/live-steps';

/**
 * The in-flight snap, held outside React so it can outlive the screen that
 * started it.
 *
 * A solve takes 30–45s. The capture screen used to own the request and hold
 * the student on the scanning animation for all of it, which is a long time to
 * watch a loading state that cannot tell you anything new after the first few
 * seconds. Now the scan plays for `SNAP_HANDOFF_MS` and then hands over to the
 * solution screen, which shows its skeleton until the answer lands — the same
 * skeleton the Library's doubt detail already uses, so the wait happens on the
 * page the content is going to fill rather than on a page that will be thrown
 * away.
 *
 * That only works if the request survives the handoff, which is why it lives
 * here rather than in `snap-capture`'s `upload()`: that screen is replaced the
 * moment we navigate.
 *
 * Replaces the old `setPendingSnapResult` slot, which could only carry a
 * result that had *already* arrived.
 */
/**
 * How long the scan plays before handing over.
 *
 * Long enough that the scan reads as a real step rather than a flash — the
 * stage copy runs one line every 2.4s, so this lands mid-third-line — and
 * short enough that nobody is parked on it for a 45s solve.
 */
export const SNAP_HANDOFF_MS = 7000;

export type SnapJob =
  | { status: 'idle' }
  | {
      status: 'solving';
      photoUri: string;
      /**
       * False once the request has fallen back to the non-streaming route, so
       * the screen knows whether an empty `read` means "not read yet" or
       * "this route never reports that".
       */
      streaming: boolean;
      /**
       * What the photo said, as soon as the server had read it and before any
       * answer exists. Empty until the `questions_read` frame lands, or for
       * the whole solve if the request fell back to the non-streaming route.
       */
      read: ReadQuestion[];
      /** Questions already answered, so the screen can fill in as they land. */
      solved: SnapResponse['questions'];
      /**
       * The working of each question still being solved, as it is written,
       * keyed by question_index. Shown in place of the step placeholder from
       * the first word of step 1; the answer still waits for `solved`.
       */
      live: Record<number, LiveStep[]>;
      /**
       * The server's word about the photo as a whole — set when more questions
       * were visible than could be read. It arrives with the first frame, long
       * before any answer, and a student who photographed five questions and
       * is getting three deserves to be told so while they wait.
       */
      note: string | null;
    }
  | { status: 'solved'; photoUri: string; response: SnapResponse }
  | { status: 'failed'; photoUri: string; failure: SnapFailure };

const IDLE: SnapJob = { status: 'idle' };

let job: SnapJob = IDLE;
let listeners = new Set<() => void>();
let controller: AbortController | null = null;
/**
 * Bumped by every start, cancel and clear. A request that resolves after its
 * job was replaced or abandoned must not write over whatever is current —
 * abort alone does not cover the window between `abort()` and the promise
 * settling.
 */
let generation = 0;

/**
 * A stream that broke after the server had started on the photo.
 *
 * Whatever was answered is already saved, and charged, on the server, so it is
 * shown — with a line saying the rest did not arrive. With nothing answered
 * there is nothing to show, and that is a failure on our side, not the photo's.
 * Neither goes back to `POST /doubts`: see `StreamCut`.
 */
export function afterStreamCut(cut: StreamCut): { response: SnapResponse } | { failure: SnapFailure } {
  if (!cut.questions.length) {
    return {
      failure: {
        message: 'The connection dropped before the answer arrived.',
        stage: 'network',
        remedy: 'our_side',
        retake_helps: false,
      },
    };
  }
  const expected = Number(cut.meta.question_count ?? 0);
  const missing = expected > cut.questions.length;
  return {
    response: {
      ...(cut.meta as object),
      submission_id: String(cut.meta.submission_id ?? ''),
      solved_count: cut.questions.filter((q) => q.status === 'solved').length,
      // `meta` can carry the server's own note about the photo; the cut is
      // the newer and more useful thing to say.
      note: missing
        ? 'The connection dropped before every answer arrived. Snap the rest again to see them.'
        : ((cut.meta.note as string | null | undefined) ?? null),
      questions: cut.questions,
    } as SnapResponse,
  };
}

function emit(next: SnapJob) {
  job = next;
  for (const listener of listeners) listener();
}

/**
 * Streams by default, falls back to the plain POST.
 *
 * `POST /doubts/stream` is the same pipeline delivered question by question,
 * so the transcribed question can be on screen ~20s before its answer exists.
 * If the stream cannot even start — an older API, a proxy that buffers
 * event-streams, a device whose XHR does not report progress — the whole solve
 * still works through `POST /doubts`; the student just waits the way they did
 * before. A degraded snap is much worse than a late question.
 *
 * Only if it never started, though. Once a single frame has arrived the
 * server is working on this photo and saving what it answers, so a stream
 * that breaks after that is never retried on the other route.
 */
export function startSnapJob(photo: DoubtPhoto): void {
  controller?.abort();
  const mine = ++generation;
  controller = new AbortController();
  emit({
    status: 'solving',
    photoUri: photo.uri,
    streaming: true,
    read: [],
    solved: [],
    live: {},
    note: null,
  });

  /** Only meaningful while this job is the current one. */
  const patch = (fn: (j: Extract<SnapJob, { status: 'solving' }>) => SnapJob) => {
    if (mine !== generation || job.status !== 'solving') return;
    emit(fn(job));
  };

  const succeed = (response: SnapResponse) => {
    if (mine !== generation) return;
    emit({ status: 'solved', photoUri: photo.uri, response });
  };
  const fail = (err: unknown) => {
    if (mine !== generation) return;
    if (controller?.signal.aborted) return;
    emit({ status: 'failed', photoUri: photo.uri, failure: readSnapFailure(err) });
  };

  snapDoubtStreaming(
    photo,
    {
      onMeta: (meta) => patch((j) => ({ ...j, note: meta.note ?? null })),
      onQuestionsRead: (read) => patch((j) => ({ ...j, read })),
      // Sorted, not appended: answers arrive as each solve finishes, so a
      // fast Q3 can land before Q1 and the page would show them out of order.
      onQuestion: (q) =>
        patch((j) => ({
          ...j,
          solved: [...j.solved, q].sort((a, b) => a.question_index - b.question_index),
        })),
      onStep: (step) =>
        patch((j) => ({
          ...j,
          live: {
            ...j.live,
            [step.questionIndex]: upsertLiveStep(j.live[step.questionIndex], step),
          },
        })),
      onStepsReset: (questionIndex) =>
        patch((j) => ({ ...j, live: { ...j.live, [questionIndex]: [] } })),
    },
    controller.signal
  )
    .then(succeed)
    .catch((err) => {
      if (mine !== generation || controller?.signal.aborted) return;
      // A failure the SERVER described is a real answer about this photo, not a
      // transport problem, so retrying on the other route would only ask the
      // same question twice and bill the student's quota for it.
      if ((err as { snapFailure?: unknown })?.snapFailure) {
        fail(err);
        return;
      }
      // Frames arrived, so the server had the photo and was already saving
      // and charging answers. Uploading it again would solve it twice.
      const cut = (err as { streamCut?: StreamCut })?.streamCut;
      if (cut?.framesReceived) {
        const after = afterStreamCut(cut);
        if ('response' in after) succeed(after.response);
        else emit({ status: 'failed', photoUri: photo.uri, failure: after.failure });
        return;
      }
      patch((j) => ({ ...j, streaming: false }));
      snapDoubt(photo, controller?.signal).then(succeed).catch(fail);
    });
}

/** Stops the request and forgets it — Cancel on the scanning screen. */
export function cancelSnapJob(): void {
  generation += 1;
  controller?.abort();
  controller = null;
  emit(IDLE);
}

/**
 * Forgets a finished job without touching one still running.
 *
 * Called when the solution screen goes away: a solved result has been read and
 * must not reappear as stale content, but a solve still in flight is left
 * alone — `POST /doubts` has already created the doubt server-side, and
 * killing it would lose a solve the student is about to find in their Library.
 */
export function clearFinishedSnapJob(): void {
  if (job.status === 'solved' || job.status === 'failed') {
    generation += 1;
    controller = null;
    emit(IDLE);
  }
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function snapshot(): SnapJob {
  return job;
}

export function useSnapJob(): SnapJob {
  return useSyncExternalStore(subscribe, snapshot, snapshot);
}

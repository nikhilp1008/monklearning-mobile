import { useSyncExternalStore } from 'react';

import { DoubtPhoto, SnapFailure, SnapResponse, readSnapFailure, snapDoubt } from '@/lib/doubts';

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
  | { status: 'solving'; photoUri: string }
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

function emit(next: SnapJob) {
  job = next;
  for (const listener of listeners) listener();
}

export function startSnapJob(photo: DoubtPhoto): void {
  controller?.abort();
  const mine = ++generation;
  controller = new AbortController();
  emit({ status: 'solving', photoUri: photo.uri });

  snapDoubt(photo, controller.signal)
    .then((response) => {
      if (mine !== generation) return;
      emit({ status: 'solved', photoUri: photo.uri, response });
    })
    .catch((err) => {
      if (mine !== generation) return;
      // A cancel already took the student somewhere else; do not flash a
      // failure at someone who asked to stop.
      if (controller?.signal.aborted) return;
      emit({ status: 'failed', photoUri: photo.uri, failure: readSnapFailure(err) });
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

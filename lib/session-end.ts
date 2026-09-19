import { endDronaSession, type DronaSessionEnd } from '@/lib/drona-live';

/**
 * The end-of-class call, held OUTSIDE either screen's lifetime.
 *
 * Ending a class used to await this before navigating, so the board, the dock
 * and the whole classroom stayed in front of a student who had already decided
 * to leave — 1-2.5s of it, every class. The obvious fix is to navigate first,
 * but the call cannot simply be dropped: `POST /drona/session/{id}/end` is not
 * a read. It sets the session's phase, and a session that is never closed stays
 * open forever.
 *
 * So the promise itself makes the journey. The classroom starts the call and
 * leaves; the summary screen picks the same promise up and awaits it there.
 * Started exactly once, by the tap that meant it, and nobody waits on a screen
 * they are leaving.
 *
 * Same idiom as the prefetched practice question in lib/practice.ts, and for
 * the same reason: the work outlives the component that began it.
 */
let pending: { sessionId: string; promise: Promise<DronaSessionEnd | null> } | null = null;

/**
 * Begins the end-of-class call and hands back nothing — the caller is leaving.
 *
 * The rejection is swallowed HERE, at the start, rather than left for whoever
 * eventually awaits it. An unhandled rejection between the two screens is a
 * red box in dev and a silent warning in production, and this promise is
 * deliberately not awaited for a while.
 */
export function startSessionEnd(sessionId: string): void {
  if (!sessionId) return;
  const promise = endDronaSession(sessionId).catch(() => null);
  pending = { sessionId, promise };
}

/**
 * The call this session started, if it is still the one in flight.
 *
 * Keyed by session so a summary screen can never await the previous class's
 * end — which would show one lesson's takeaways under another's heading.
 *
 * READ-ONLY, AND THAT MATTERS. This cleared the slot on read, which cost a
 * real class its summary: React re-runs an effect in development, so the first
 * call consumed the promise while its own cleanup marked the result discarded,
 * and the second call found nothing. The screen then had no payload, no params
 * to fall back on, and rendered an empty space where the summary belonged.
 *
 * Reading it any number of times is now the same as reading it once. Nothing
 * needs clearing: `startSessionEnd` overwrites the slot when the next class
 * ends, and a resolved payload sitting in memory until then costs nothing.
 */
export function peekSessionEnd(sessionId: string): Promise<DronaSessionEnd | null> | null {
  if (!pending || pending.sessionId !== sessionId) return null;
  return pending.promise;
}

/** Drops anything in flight. For sign-out, where the session is not ours. */
export function clearSessionEnd(): void {
  pending = null;
}

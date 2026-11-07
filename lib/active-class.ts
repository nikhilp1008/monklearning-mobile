import { startSessionEnd } from '@/lib/session-end';

/**
 * Which live class is open on screen right now, if any.
 *
 * The pass gate in `app/_layout.tsx` runs on every foreground and replaces the
 * route with `/plans` when a one-day pass has run out. When that happened in the
 * middle of a class, the classroom was unmounted from under the student: its
 * socket and recorder were torn down by the screen's own cleanup, but the
 * session itself was never closed — `POST /drona/session/{id}/end` is what sets
 * its phase, and "a session that is never closed stays open forever"
 * (lib/session-end.ts). The gate cannot see the classroom's route params from
 * where it lives, so the classroom says what it has open and the gate asks.
 */
let active: string | null = null;

/** The classroom has a session open (a session id), or has let go of it (null). */
export function setActiveClassSession(sessionId: string | null): void {
  active = sessionId || null;
}

export function getActiveClassSession(): string | null {
  return active;
}

/**
 * Ends the class that is open, if one is — the SAME end call the classroom's own
 * End button starts, so the session is closed server-side exactly once and the
 * summary screen could still pick it up. Best effort and never throws: the gate
 * is about to send the student to the plans screen and must not be held up by,
 * or fail on, a network call.
 *
 * Returns whether there was a class to end.
 */
export function endActiveClassForGate(): boolean {
  const sessionId = active;
  if (!sessionId) return false;
  active = null;
  try {
    startSessionEnd(sessionId);
  } catch {
    // The route is leaving either way.
  }
  return true;
}

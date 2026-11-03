/**
 * "THE SERVER SAYS THIS STUDENT NEEDS A PASS."
 *
 * The API answers a learning route with HTTP 402, and closes a live socket with
 * 4402, once the student's pass has ended (and PAYWALL_ENFORCED is on). Neither
 * is somewhere a screen can handle: a request can fail in the middle of
 * anything. So the transport just announces it here, and the app root - which
 * already owns the pass gate - sends the student to the plans screen.
 *
 * A module of its own, not part of lib/api.ts or lib/pass.ts: api.ts is
 * imported by pass.ts, and the root listens from the other side.
 */

type Listener = () => void;
const listeners = new Set<Listener>();

/** Subscribe. Returns the unsubscribe. */
export function onPassRequired(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function signalPassRequired(): void {
  listeners.forEach((l) => {
    try {
      l();
    } catch {
      // One listener failing must not stop the others hearing it.
    }
  });
}

/** The WebSocket close code the API uses for the same thing. */
export const PASS_REQUIRED_CLOSE = 4402;

/** Whether a decoded error body is the API's "pass_required". */
export function isPassRequired(body: unknown): boolean {
  if (!body || typeof body !== 'object') return false;
  const detail = (body as { detail?: unknown }).detail;
  return !!detail && typeof detail === 'object' && (detail as { error?: unknown }).error === 'pass_required';
}

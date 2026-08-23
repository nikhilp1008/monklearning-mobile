import { DronaVoiceClient, PREWARM_HANDLERS } from '@/lib/drona-voice-client';

/**
 * Opens the class WebSocket while the student is still on the scoping screen.
 *
 * The socket used to be built on the classroom screen's mount, which is the
 * last thing to happen: `session/start`, then the student picks a subtopic,
 * then `scope` (measured between 3.4s and 31s), then navigation, *then*
 * connect + authenticate. Every one of those milliseconds is dead air the
 * student spends watching "Drona is picking up the chalk".
 *
 * Web has never paid it, because its client opens the socket at
 * `session/start` and simply keeps it across the whole scoping step. This is
 * the same idea: `session_id` exists the moment `session/start` returns, and
 * the socket only needs that and a token — nothing from scoping. So it is
 * opened there and handed on, and the connect + auth round-trip overlaps the
 * part of the flow the student is already spending time in.
 *
 * A module-level slot rather than context on purpose: the two screens are
 * separate routes with no shared provider above them, and this must survive
 * the unmount of the first.
 */
let slot: { sessionId: string; client: DronaVoiceClient } | null = null;

export function prewarmDronaClient(
  sessionId: string,
  getAccessToken: () => Promise<string | null>,
  apiBaseUrl: string
): void {
  if (slot?.sessionId === sessionId) return;
  discardPrewarmedClient();
  const client = new DronaVoiceClient(sessionId, getAccessToken, apiBaseUrl, PREWARM_HANDLERS);
  slot = { sessionId, client };
  client.connect();
}

/**
 * Hands the warmed client to the screen that will drive it, if there is one
 * for this session. Returns null when there isn't — a deep link, a reload, or
 * a student who got here another way — and the caller builds its own.
 */
export function claimDronaClient(sessionId: string): DronaVoiceClient | null {
  if (slot?.sessionId !== sessionId) return null;
  const { client } = slot;
  slot = null;
  return client;
}

/** For abandoning scoping: an unclaimed socket must not outlive the attempt. */
export function discardPrewarmedClient(): void {
  slot?.client.disconnect();
  slot = null;
}

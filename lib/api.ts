import type { Session } from '@supabase/supabase-js';

import { supabase } from '@/lib/supabase';

export class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

/**
 * The access token, held in memory.
 *
 * `supabase.auth.getSession()` reads the persisted session back out of
 * AsyncStorage, so it is a bridge hop on *every* call — Home's focus effect
 * fires several, and Practice one per question. The token itself is a short
 * string that only changes when Supabase says it has, and Supabase does say:
 * the client refreshes on its own and reports it, so the subscription below is
 * what keeps this honest rather than a guessed TTL.
 *
 * `expires_at` is the JWT's own `exp`, in seconds. The margin cuts both ways —
 * a token handed out a second before expiry can die in flight on a bad
 * connection, and `getSession()` is what *triggers* a refresh, so falling back
 * early is how the refresh gets asked for.
 */
const TOKEN_EXPIRY_MARGIN_S = 60;

let cachedToken: string | null = null;
/** 0 when the session didn't carry an `exp`, which reads as already expired
 *  and sends every call back to `getSession()` — today's behaviour. */
let cachedTokenExpiry = 0;

function rememberSession(session: Session | null): void {
  cachedToken = session?.access_token ?? null;
  cachedTokenExpiry = session?.expires_at ?? 0;
}

/**
 * Whether the cache may be trusted at all.
 *
 * The token is only safe to hold if something will tell us when it stops being
 * valid, so the two are deliberately tied together: no working subscription,
 * no caching. A stale token surviving a sign-out is the one failure here that
 * is a security bug rather than a slow screen, and this makes that state
 * unreachable instead of merely unlikely.
 */
let subscribed = false;
let invalidationLive = false;

/**
 * Subscribed on first use, not at module scope.
 *
 * At module scope this runs the instant anything imports `apiFetch`, which is
 * an import-time crash for any caller whose Supabase client isn't fully formed
 * yet — a real hazard, and it took out the live-classroom tests on the way in.
 * A token cache is an optimisation and must not be able to stop the module
 * loading.
 *
 * Every event is handled, not just SIGNED_IN / SIGNED_OUT / TOKEN_REFRESHED:
 * each one carries the session current as of that event, and a null session
 * clears the cache — so sign-out is correct by construction rather than by
 * enumerating the events that happen to matter today.
 */
function ensureInvalidation(): void {
  if (subscribed) return;
  subscribed = true;
  try {
    supabase.auth.onAuthStateChange((_event, session) => {
      rememberSession(session);
    });
    invalidationLive = true;
  } catch {
    // Left false on purpose: accessToken() then asks Supabase every time,
    // which is exactly the behaviour this cache replaced. Slower, still right.
    invalidationLive = false;
  }
}

async function accessToken(): Promise<string | undefined> {
  ensureInvalidation();
  if (
    invalidationLive &&
    cachedToken &&
    cachedTokenExpiry - Date.now() / 1000 > TOKEN_EXPIRY_MARGIN_S
  ) {
    return cachedToken;
  }
  const {
    data: { session },
  } = await supabase.auth.getSession();
  rememberSession(session);
  return session?.access_token;
}

/**
 * Thin fetch wrapper matching monk-learning-webpage's lib/api.ts contract —
 * same base URL env pattern, same Bearer-token-from-Supabase-session
 * approach, same ApiError shape, so both clients hit the API the same way.
 */
/** Default ceiling for ordinary calls. Long ones pass their own — see
 *  `timeoutMs` below. */
const DEFAULT_TIMEOUT_MS = 60000;

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit & {
    /** Override the request ceiling. Doubt solving is the real case: the web
     *  client measured a 5-question page at ~75s, so a blanket 60s aborts a
     *  perfectly healthy multi-question solve and tells the student to try
     *  again while the backend is still working. */
    timeoutMs?: number;
  } = {}
): Promise<T> {
  const baseUrl = process.env.EXPO_PUBLIC_API_URL;
  if (!baseUrl) {
    throw new ApiError('The app isn’t configured to reach the server yet.', 0);
  }

  const token = await accessToken();

  if (!token) {
    throw new ApiError('No authentication session found', 401);
  }

  const headers = new Headers(options.headers || {});
  const isFormData = typeof FormData !== 'undefined' && options.body instanceof FormData;
  if (!headers.has('Content-Type') && options.body && !isFormData) {
    headers.set('Content-Type', 'application/json');
  }
  headers.set('Authorization', `Bearer ${token}`);

  const url = `${baseUrl.replace(/\/$/, '')}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  // A hard client-side ceiling so a stalled connection can't hang a spinner
  // forever. Infra (Railway/Cloudflare) usually times out first with the HTML
  // page handled above; this is the backstop for when it doesn't.
  const { timeoutMs, signal: callerSignal, ...fetchOptions } = options;
  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort(), timeoutMs ?? DEFAULT_TIMEOUT_MS);

  // A caller-supplied signal (Cancel on the snap loading screen) has to reach
  // the same controller the timeout uses — fetch takes one signal, not two.
  const abortFromCaller = () => timeoutController.abort();
  if (callerSignal) {
    if (callerSignal.aborted) timeoutController.abort();
    else callerSignal.addEventListener('abort', abortFromCaller);
  }

  let res: Response;
  try {
    res = await fetch(url, { ...fetchOptions, headers, signal: timeoutController.signal });
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      // A caller cancelling deliberately isn't a failure to report back — the
      // screen that cancelled is already leaving.
      if (callerSignal?.aborted) throw new ApiError('cancelled', 0);
      throw new ApiError('This is taking longer than expected. Check your connection and try again.', 0);
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
    callerSignal?.removeEventListener('abort', abortFromCaller);
  }

  const contentType = res.headers.get('content-type');
  const isJson = !!contentType && contentType.includes('application/json');
  const responseData: unknown = isJson ? await res.json() : await res.text();

  if (!res.ok) {
    // A non-JSON body on an error response is almost always an infra page
    // (Railway/Cloudflare gateway timeout HTML, e.g. on the ~25s doubt-solve
    // upload) rather than anything meant for a student to read — never surface
    // it verbatim. The raw text still rides along on `.data` for debugging.
    const errorMsg =
      isJson && typeof responseData === 'object' && responseData !== null && 'detail' in responseData
        ? String((responseData as { detail: unknown }).detail)
        : `API request failed with status ${res.status}`;
    throw new ApiError(errorMsg, res.status, responseData);
  }

  return responseData as T;
}

/**
 * A loading failure in the student's language.
 *
 * The list screens used to render `err.message` straight through, which meant
 * a student could be shown "No authentication session found" or "API request
 * failed with status 404" — both real, both meaningless to them. The raw
 * message still reaches the console for us.
 */
export function friendlyLoadError(err: unknown, subject: string): string {
  const message = err instanceof Error ? err.message.toLowerCase() : '';
  if (message.includes('authentication') || message.includes('401')) {
    return 'Please sign in again to see this.';
  }
  if (message.includes('network') || message.includes('timed out') || message.includes('timeout')) {
    return `Couldn't reach the server. Check your connection and pull to retry.`;
  }
  return `Couldn't load your ${subject} just now. Pull to retry.`;
}

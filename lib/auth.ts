import { useEffect, useState } from 'react';

import { supabase } from '@/lib/supabase';

// A hung/slow network call has no default timeout via fetch (what Supabase's
// client uses underneath) — without this race, a bad connection on first
// launch would block `setReady` forever, same as an uncaught throw would.
const SESSION_BOOTSTRAP_TIMEOUT_MS = 8000;

function timeout(ms: number): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Session bootstrap timed out')), ms);
  });
}

/**
 * Real phone/OTP auth is deferred (SMS sender needs to move to an Indian
 * number first — see PROGRESS.md). Until then, every install gets a real
 * anonymous Supabase session so authenticated API calls (Practice, Drona)
 * still work. `signInAnonymously` can be linked to a verified phone identity
 * later without losing this user's data.
 *
 * Every render of the app is gated on `ready` (app/_layout.tsx returns null
 * until it's true), so this must NEVER get stuck not-ready — a network
 * error or a hung connection on first launch would otherwise permanently
 * blank the entire app (confirmed live: this was leaving TestFlight builds
 * stuck on the splash screen forever, since nothing downstream of it could
 * ever mount). try/catch/finally plus the timeout race above guarantee
 * `setReady(true)` always eventually runs, whatever happens to the network
 * call — the anonymous session can always be retried on a later screen if
 * it genuinely failed, but the app itself must be able to render.
 */
export function useEnsureAnonymousSession() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function ensureSession() {
      try {
        const { data } = await Promise.race([
          supabase.auth.getSession(),
          timeout(SESSION_BOOTSTRAP_TIMEOUT_MS),
        ]);
        if (!data.session) {
          const { error } = await Promise.race([
            supabase.auth.signInAnonymously(),
            timeout(SESSION_BOOTSTRAP_TIMEOUT_MS),
          ]);
          if (error) {
            console.error('[auth] anonymous sign-in failed:', error.message);
          }
        }
      } catch (err) {
        console.error('[auth] session bootstrap failed, continuing without a session:', err);
      } finally {
        if (!cancelled) setReady(true);
      }
    }

    ensureSession();
    return () => {
      cancelled = true;
    };
  }, []);

  return ready;
}

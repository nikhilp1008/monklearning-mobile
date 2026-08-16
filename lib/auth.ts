import { useEffect, useState } from 'react';

import { supabase } from '@/lib/supabase';

/**
 * Real phone/OTP auth is deferred (SMS sender needs to move to an Indian
 * number first — see PROGRESS.md). Until then, every install gets a real
 * anonymous Supabase session so authenticated API calls (Practice, Drona)
 * still work. `signInAnonymously` can be linked to a verified phone identity
 * later without losing this user's data.
 */
export function useEnsureAnonymousSession() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function ensureSession() {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        const { error } = await supabase.auth.signInAnonymously();
        if (error) {
          console.error('[auth] anonymous sign-in failed:', error.message);
        }
      }
      if (!cancelled) setReady(true);
    }

    ensureSession();
    return () => {
      cancelled = true;
    };
  }, []);

  return ready;
}

import { useEffect, useState } from 'react';

import { clearMilestoneState } from '@/lib/milestones';
import { clearProfile } from '@/lib/profile';
import { clearProgressCache } from '@/lib/progress';
import { clearProofState } from '@/lib/proof';
import { supabase } from '@/lib/supabase';

/**
 * Email OTP is the account.
 *
 * Phone/SMS auth is deferred — it needs an Indian sender and the legal work
 * that goes with it, and early users can't wait for that. So the identity is
 * an email address plus a six-digit code, which Supabase sends through Resend.
 * A phone number is still collected during onboarding, but it is a plain
 * unverified field: nothing signs in with it and nothing is sent to it.
 *
 * Supabase config this depends on (verified live 2026-08-22): email provider
 * enabled, `disable_signup` false, and `mailer_autoconfirm` false so a code is
 * actually sent rather than the address being auto-confirmed. The Magic Link
 * template must print `{{ .Token }}`; a template that only emits
 * `{{ .ConfirmationURL }}` would send a tappable link and there would be no
 * code for the student to type.
 */

// A hung network call has no default timeout via fetch (what Supabase's client
// uses underneath) — without this race, a bad connection on first launch would
// block the gate forever, same as an uncaught throw would.
const SESSION_BOOTSTRAP_TIMEOUT_MS = 8000;

function timeout(ms: number): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Session bootstrap timed out')), ms);
  });
}

export type AuthState = 'loading' | 'signed_in' | 'signed_out';

/**
 * Supabase's own messages are written for developers ("For security purposes,
 * you can only request this after 41 seconds"). These are the same facts in
 * the app's voice. Anything unrecognised falls through to a generic line
 * rather than leaking internals onto the screen.
 */
export function friendlyAuthError(message: string): string {
  const m = message.toLowerCase();
  if (m.includes('after') && m.includes('seconds')) {
    return 'Give it a few seconds before asking for another code.';
  }
  if (m.includes('expired') || m.includes('invalid')) {
    return 'That code didn’t work. Check it, or ask for a new one.';
  }
  if (m.includes('rate limit') || m.includes('too many')) {
    return 'Too many tries. Wait a minute and start again.';
  }
  if (m.includes('email address') && m.includes('invalid')) {
    return 'That doesn’t look like a working email address.';
  }
  if (m.includes('signups not allowed') || m.includes('disabled')) {
    return 'This email isn’t on the early-access list yet.';
  }
  return 'Couldn’t reach the server. Check your connection and try again.';
}

/** Sends the six-digit code, creating the account if this is a new address. */
export async function sendEmailOtp(email: string): Promise<void> {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.trim(),
    options: { shouldCreateUser: true },
  });
  if (error) throw new Error(error.message);
}

/**
 * Exchanges the code for a real session.
 *
 * `type: 'email'` covers both the first sign-up and every later sign-in —
 * Supabase uses the same OTP type for each, so there is no branch here for
 * "new user" versus "returning user".
 */
export async function verifyEmailOtp(email: string, token: string): Promise<void> {
  const { error } = await supabase.auth.verifyOtp({
    email: email.trim(),
    token: token.trim(),
    type: 'email',
  });
  if (error) throw new Error(error.message);
}

/**
 * Ends the session *and* forgets the student.
 *
 * Everything the app keeps about a student outside Supabase is device-local:
 * name and exam, the proof snapshot, the milestone seen-set, the cached
 * progress payload. Signing out without clearing them hands all of it to
 * whoever signs in next on the same phone — and a stale stored name would
 * also make onboarding skip the details step for them.
 *
 * Supabase is signed out first so the gate flips even if a clear fails.
 */
export async function signOut(): Promise<void> {
  await supabase.auth.signOut();
  clearProgressCache();
  await Promise.all([clearProfile(), clearProofState(), clearMilestoneState()]);
}

/** The address the student actually signed in with — not the stored profile. */
export async function getSessionEmail(): Promise<string | null> {
  try {
    const { data } = await supabase.auth.getSession();
    const user = data.session?.user;
    if (!user || user.is_anonymous) return null;
    return user.email ?? null;
  } catch {
    return null;
  }
}

/**
 * The gate.
 *
 * An anonymous session counts as signed **out**. Every install before this
 * change was silently given one so API calls would work while auth was
 * mocked; treating those as signed in would walk existing testers straight
 * past onboarding without ever giving us their email.
 *
 * This must never get stuck on 'loading' — the root layout holds the splash
 * screen until it resolves, and a hung network call would otherwise blank the
 * whole app (which is exactly what happened to a TestFlight build once
 * already, see PROGRESS.md). The timeout race and the catch below guarantee
 * it always settles; failing to reach Supabase resolves to 'signed_out',
 * which lands the student on onboarding where they can retry, rather than on
 * a splash screen they can't leave.
 */
export function useAuthState(): AuthState {
  const [state, setState] = useState<AuthState>('loading');

  useEffect(() => {
    let cancelled = false;

    const resolve = (session: { user?: { is_anonymous?: boolean } } | null) => {
      if (cancelled) return;
      setState(session?.user && !session.user.is_anonymous ? 'signed_in' : 'signed_out');
    };

    (async () => {
      try {
        const { data } = await Promise.race([
          supabase.auth.getSession(),
          timeout(SESSION_BOOTSTRAP_TIMEOUT_MS),
        ]);
        resolve(data.session);
      } catch (err) {
        console.error('[auth] session bootstrap failed:', err);
        if (!cancelled) setState('signed_out');
      }
    })();

    // Keeps the gate live after boot: verifying an OTP or signing out both
    // land here, so no screen has to tell the router what just happened.
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      resolve(session);
    });

    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, []);

  return state;
}

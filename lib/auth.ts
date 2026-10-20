import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';

import { clearProfile, hasCompletedOnboarding, onboardedOnThisDevice } from '@/lib/profile';
import { clearAllMockProgress } from '@/lib/mock';
import { clearSavedReports } from '@/lib/mock-report';
import { clearPass } from '@/lib/pass';
import { clearTodayPlan } from '@/lib/plan';
import { clearPreferences } from '@/lib/preferences';
import { clearProgressCache } from '@/lib/progress';
import { clearProofState } from '@/lib/proof';
import { isReviewerEmail } from '@/lib/reviewer';
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

export type AuthState = 'loading' | 'signed_in' | 'needs_onboarding' | 'signed_out';

/**
 * Re-ask the gate its question.
 *
 * `useAuthState` recomputes on Supabase **auth** events, and finishing
 * onboarding is not one — it writes a row to `profiles`. Without this the
 * verdict stays `needs_onboarding` after the student has just completed it:
 * the tabs decline to render, and the root gate sees a redirect still owed and
 * sends them back to onboarding. A loop, with no way out.
 *
 * Awaited by the caller so the verdict has flipped *before* navigation, rather
 * than leaving a window where the tabs are asked to paint while the answer is
 * still the old one.
 */
const revalidators = new Set<() => Promise<void>>();

export async function revalidateAuthState(): Promise<void> {
  await Promise.all(Array.from(revalidators, (run) => run()));
}

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
  if (m.includes('login credentials')) {
    return 'That password didn’t work. Check it and try again.';
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
  // The server's alias-signup hook (monk-learning-api migrations/0075)
  // refuses +tags and dot-variants of an existing Gmail account. Its
  // messages are already written for the student — pass them through
  // rather than flattening them into the generic connection line.
  if (m.includes('plain email address') || m.includes('inbox already has an account')) {
    return message;
  }
  return 'Couldn’t reach the server. Check your connection and try again.';
}

/**
 * Trimmed and lowercased, nothing more.
 *
 * Deliberately NOT stripping Gmail dots or +tags here: an existing student
 * who signed up as ra.asikh@gmail.com is found by that exact string, and a
 * "canonicalised" spelling would read as a brand-new user and lock them
 * out. Alias abuse is refused where it can't be dodged — the server's
 * before-user-created hook (monk-learning-api migrations/0075), which only
 * ever fires for NEW accounts.
 */
function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/** Sends the six-digit code, creating the account if this is a new address. */
export async function sendEmailOtp(email: string): Promise<void> {
  const { error } = await supabase.auth.signInWithOtp({
    email: normalizeEmail(email),
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
    email: normalizeEmail(email),
    token: token.trim(),
    type: 'email',
  });
  if (error) throw new Error(error.message);
}

/**
 * The store-review account's way in: a password, for ONE address.
 *
 * Refuses any other address before it reaches the network, so this cannot
 * become a second way into a student's account even if a screen calls it by
 * mistake. The result is an ordinary Supabase session, which is all the root
 * gate and the API look at.
 */
export async function signInWithReviewerPassword(email: string, password: string): Promise<void> {
  if (!isReviewerEmail(email)) throw new Error('Password sign-in is not available for this address.');
  const { error } = await supabase.auth.signInWithPassword({
    email: normalizeEmail(email),
    password,
  });
  if (error) throw new Error(error.message);
}

/**
 * Ends the session *and* forgets the student.
 *
 * Everything the app keeps about a student outside Supabase is device-local:
 * name and exam, the proof snapshot, the milestone seen-set, today's plan, the
 * teacher and language they picked, and the cached progress payload. Signing out without clearing them hands all of it to
 * whoever signs in next on the same phone — and a stale stored name would
 * also make onboarding skip the details step for them.
 *
 * Supabase is signed out first so the gate flips even if a clear fails.
 */
export async function signOut(): Promise<void> {
  // FIRST, WHILE THE STUDENT CAN STILL BE NAMED. Their pass and their saved
  // mock papers are kept under their account id, and once the session has
  // ended there is no id to find them by — they used to stay behind, and the
  // papers showed to the next account for a second or two on Mock tests.
  await Promise.all([clearPass(), clearSavedReports(), clearAllMockProgress()]);
  await supabase.auth.signOut();
  clearProgressCache();
  await Promise.all([
    clearProfile(),
    clearProofState(),
    clearTodayPlan(),
    clearPreferences(),
  ]);
}

/**
 * EVERYONE SIGNS IN AGAIN ONCE, WITH THE ONBOARDING UPDATE.
 *
 * The first launch of this version ends whatever session the phone had, so
 * an existing student opens on the email screen (with the welcome behind it)
 * and a new one on the welcome. It runs once per install: a fresh install sets the mark on its
 * first launch with no session to end.
 *
 * Only the session ends. This is not `signOut`: the pass lives on the phone
 * (lib/pass.ts) and `signOut` deletes it, which would lock a paying student
 * out of what they paid for. Teacher, plan and progress stay too. The pass is
 * keyed per account, so it comes back on its own when they sign in; the rest
 * is cleared then only if a DIFFERENT account signs in (`afterSignIn`).
 *
 * Bump the version to ask everyone to sign in again in a later release.
 */
const RELOGIN_KEY = 'auth.relogin:v1';
const SIGNED_OUT_USER_KEY = 'auth.signedOutByUpdate';

/** The access token of the session this launch ended, or null. Asked once
 *  per launch; both the bootstrap and the first auth event wait on it. */
let relogin: Promise<string | null> | null = null;

export function endSessionFromBeforeUpdate(): Promise<string | null> {
  relogin ??= (async () => {
    try {
      if (await AsyncStorage.getItem(RELOGIN_KEY)) return null;
      const { data } = await supabase.auth.getSession();
      const session = data.session;
      if (session?.user && !session.user.is_anonymous) {
        await AsyncStorage.setItem(SIGNED_OUT_USER_KEY, session.user.id);
        // 'local': ends it on this phone without a network call, so it works
        // offline and never fails half-way.
        await supabase.auth.signOut({ scope: 'local' });
      }
      await AsyncStorage.setItem(RELOGIN_KEY, '1');
      return session?.access_token ?? null;
    } catch {
      // Not worth a broken launch. The mark is unset, so it tries again next time.
      return null;
    }
  })();
  return relogin;
}

/** Signed out by the update and not signed in since: the gate opens on the
 *  email screen rather than the welcome. */
export async function signedOutByUpdate(): Promise<boolean> {
  try {
    return !!(await AsyncStorage.getItem(SIGNED_OUT_USER_KEY));
  } catch {
    return false;
  }
}

/**
 * Called right after a code is verified. If the update signed someone out
 * and a different account has now signed in, the old student's details,
 * teacher, plan and progress are cleared, as `signOut` would have. The pass
 * needs nothing: it is kept per account.
 */
export async function afterSignIn(): Promise<void> {
  try {
    const before = await AsyncStorage.getItem(SIGNED_OUT_USER_KEY);
    if (!before) return;
    const { data } = await supabase.auth.getSession();
    const now = data.session?.user?.id;
    if (now && now !== before) {
      clearProgressCache();
      await Promise.all([
        clearProfile(),
        clearProofState(),
        clearTodayPlan(),
        clearPreferences(),
        // A paper someone else left half-sat on this phone.
        clearAllMockProgress(),
      ]);
    }
    await AsyncStorage.removeItem(SIGNED_OUT_USER_KEY);
  } catch {
    // The worst case is the old student's plan showing; not worth a failed sign-in.
  }
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
 * Three states, not two. "Signed in" is not the same as "ready to use the
 * app": a student who verified their email and then quit before finishing
 * onboarding has a session but no `target_exam`, and `GET /progress` decides
 * which subjects exist from that field — so letting them onto Home leaves
 * them with the wrong syllabus and no way back to the questions.
 *
 * An anonymous session counts as signed **out**. Every install before email
 * auth was silently given one; honouring those would walk existing testers
 * straight past onboarding without ever giving us their email.
 *
 * This must never get stuck on 'loading' — the root layout holds the splash
 * screen until it resolves, and a hung network call would otherwise blank the
 * whole app (which is exactly what happened to a TestFlight build once
 * already, see PROGRESS.md). The timeout race and the catch below guarantee
 * it always settles.
 */
export function useAuthState(): AuthState {
  const [state, setState] = useState<AuthState>('loading');

  useEffect(() => {
    let cancelled = false;
    /**
     * ONE ANSWER AT A TIME, THE LATEST WINS. Every auth event re-runs this —
     * the hourly token refresh, returning to the app — and the checks were not
     * ordered, so an older, slower one could land last and overrule a newer
     * one. A check that is no longer the latest is dropped.
     */
    let seq = 0;
    /** The student this gate last let in, and whether it did. */
    let signedInAs: string | null = null;

    const resolve = async (
      session: { access_token?: string; user?: { id?: string; is_anonymous?: boolean } } | null
    ) => {
      if (cancelled) return;
      const mine = ++seq;
      const stale = () => cancelled || mine !== seq;
      // The session this launch ended for the update is not one to honour,
      // even when an auth event reports it after the sign-out.
      const ended = await endSessionFromBeforeUpdate();
      if (ended && session?.access_token === ended) session = null;
      if (stale()) return;
      if (!session?.user) {
        signedInAs = null;
        setState('signed_out');
        return;
      }
      if (session.user.is_anonymous) {
        // Every install before email auth was silently given an anonymous
        // session, and an app update keeps it. Treating it as signed out is
        // enough to land the student on onboarding, but it would leave the
        // anon era's device-local data — plan, proof snapshot, milestone
        // seen-set — sitting under whatever account they sign into next.
        //
        // So the anon session is ended rather than ignored. It runs exactly
        // once: afterwards there is no session to detect, and a fresh install
        // never had one.
        setState('signed_out');
        signOut().catch(() => {
          // Offline. The session stays, still reads as signed out, and this
          // runs again on the next launch.
        });
        return;
      }
      let done: boolean;
      try {
        done = await Promise.race([
          hasCompletedOnboarding(),
          timeout(SESSION_BOOTSTRAP_TIMEOUT_MS),
        ]);
      } catch {
        // A RE-CHECK THAT FAILS CHANGES NOTHING. The same student, already let
        // in, stays in: a slow or dropped check during a token refresh used to
        // fall through to the device's record, and where that was missing the
        // tabs blanked and the app jumped to onboarding's pass screen for a
        // moment. Only a definite answer from the server moves them.
        if (session.user.id && signedInAs === session.user.id) {
          if (!stale()) setState('signed_in');
          return;
        }
        // The question could not be asked — offline, or the request timed
        // out. The device's own record is the right evidence for exactly this
        // case (see `onboardedOnThisDevice` for why a stored name alone no
        // longer is).
        //
        // This branch was previously unreachable for the common failure:
        // `hasCompletedOnboarding` swallowed postgrest's returned error and
        // answered `false`, so a signal drop threw an established student
        // into onboarding. It now throws, which is what makes this run.
        done = await onboardedOnThisDevice();
      }
      if (stale()) return;
      signedInAs = done ? (session.user.id ?? null) : null;
      setState(done ? 'signed_in' : 'needs_onboarding');
    };

    (async () => {
      try {
        const { data } = await Promise.race([
          supabase.auth.getSession(),
          timeout(SESSION_BOOTSTRAP_TIMEOUT_MS),
        ]);
        await resolve(data.session);
      } catch (err) {
        console.error('[auth] session bootstrap failed:', err);
        if (!cancelled) setState('signed_out');
      }
    })();

    // Keeps the gate live after boot: verifying an OTP or signing out both
    // land here, so no screen has to tell the router what just happened.
    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      // A refreshed token is the same student with a new key: nothing about
      // where they belong has changed, so it is not asked again.
      if (event === 'TOKEN_REFRESHED' && session?.user?.id && session.user.id === signedInAs) return;
      resolve(session);
    });

    // ...and the one transition Supabase cannot tell us about.
    const revalidate = async () => {
      const { data } = await supabase.auth.getSession();
      await resolve(data.session);
    };
    revalidators.add(revalidate);

    return () => {
      cancelled = true;
      revalidators.delete(revalidate);
      sub.subscription.unsubscribe();
    };
  }, []);

  return state;
}

/**
 * The gate's verdict, shared downwards.
 *
 * `(tabs)/_layout` needs it so the tabs can decline to render at all while a
 * redirect is owed. Covering them was not enough: the root redirect cannot run
 * until at least the commit after the navigator mounts, and `anchor:'(tabs)'`
 * paints Home in that commit — a ~46ms window, measured, which is two or three
 * frames and reads as a blink.
 *
 * A context rather than a second `useAuthState()` call, so there is one
 * subscription and one `profiles` query per launch and the two consumers can
 * never disagree about who is signed in.
 */
export const AuthStateContext = createContext<AuthState>('loading');

export function useSharedAuthState(): AuthState {
  return useContext(AuthStateContext);
}

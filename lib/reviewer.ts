import { supabase } from '@/lib/supabase';

/**
 * THE STORE-REVIEW ACCOUNT.
 *
 * Google Play (and the App Store) review an app by signing in, and the sign-in
 * here is an emailed six-digit code: a reviewer cannot read our inbox, so the
 * review would stop at the first screen. Play Console's App access section asks
 * for credentials that work on their own, and this is that one door.
 *
 * ONE address, and only it, is asked for a password instead of a code. Every
 * other address is untouched: the same screen, the same code.
 *
 * What is NOT here, on purpose:
 *   - the password. It lives in Supabase, hashed, and in Play Console's App
 *     access box. This file is public the moment the app ships, and the address
 *     is public the moment Google reads it, so neither is a secret.
 *   - a paywall bypass. A pass is the server's to grant, and a reviewer needs
 *     the paid features, so the account is `exempt` server-side (a row in
 *     `admin_excluded_users`, which is also what keeps it out of the analytics).
 *     `scripts/create-reviewer-account.mjs` creates it, so the two stay together.
 *
 * Permanent by design: Google reviews again with every release, and nobody
 * should have to mint a code or change auth for each submission.
 */
export const REVIEWER_EMAIL = 'playreview@monklearning.com';

/** Trimmed and lowercased, like `normalizeEmail` in lib/auth.ts. */
export function isReviewerEmail(email: string): boolean {
  return email.trim().toLowerCase() === REVIEWER_EMAIL;
}

/**
 * Whether the signed-in account IS the store-review account.
 *
 * Used for one thing: the payment screens are never shown to it. The server
 * stays the authority on access (the account is paywall-exempt there, see
 * scripts/create-reviewer-account.mjs); this only decides what the app puts on
 * the screen, so a slow or failed `/pass` answer can never put a plans page in
 * front of a store reviewer. The address is unique to that account: nobody else
 * can be signed in as it.
 */
export async function isReviewerSession(): Promise<boolean> {
  try {
    const { data } = await supabase.auth.getSession();
    const user = data.session?.user;
    return !!user && !user.is_anonymous && isReviewerEmail(user.email ?? '');
  } catch {
    return false;
  }
}

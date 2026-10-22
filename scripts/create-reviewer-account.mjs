#!/usr/bin/env node
/**
 * Creates (or refreshes) the store-review account that lib/reviewer.ts signs in
 * with a password. Safe to run again: it is how you rotate the password.
 *
 *   export SUPABASE_URL=...  SUPABASE_SECRET_KEY=...  SUPABASE_PUBLISHABLE_KEY=...
 *   export REVIEWER_PASSWORD='<32+ random characters>'      # never put this on a command line
 *   node scripts/create-reviewer-account.mjs --dry-run      # shows what it would do, writes nothing
 *   node scripts/create-reviewer-account.mjs                # does it, then proves it works
 *
 * WHAT IT DOES (all through Supabase's own admin API, in this order)
 *   1. the auth user playreview@monklearning.com, email already confirmed, with
 *      REVIEWER_PASSWORD (created, or updated if it exists)
 *   2. a `profiles` row, so the reviewer lands inside the app instead of
 *      onboarding (the app's onboarding check is "does display_name exist")
 *   3. a row in `admin_excluded_users`. That table does two jobs here: the
 *      payments gate treats those accounts as exempt (the reviewer gets the
 *      paid features with no purchase), and the admin numbers leave them out.
 *   4. proof: signs in with the password and asks GET /pass whether the server
 *      calls the account exempt. Prints yes or no, never a token or the password.
 *
 * The password is read from the environment only, is never printed or written to
 * a file, and goes into Play Console's App access box and a password manager.
 */
const REVIEWER_EMAIL = 'playreview@monklearning.com';
const DISPLAY_NAME = 'Play Review';
const EXAM = (process.env.REVIEWER_EXAM || 'JEE').toUpperCase(); // 'JEE' | 'NEET'
const API_URL = (process.env.API_URL || 'https://monk-learning-api-production.up.railway.app').replace(/\/$/, '');

const dry = process.argv.includes('--dry-run');
const need = (name) => {
  const v = process.env[name];
  if (!v) {
    console.error(`${name} is not set.`);
    process.exit(2);
  }
  return v;
};

const url = need('SUPABASE_URL').replace(/\/$/, '');
const secret = need('SUPABASE_SECRET_KEY');
const publishable = need('SUPABASE_PUBLISHABLE_KEY');
const password = need('REVIEWER_PASSWORD');

if (password.length < 24) {
  console.error('REVIEWER_PASSWORD is too short: use at least 24 characters (32+ random is better).');
  process.exit(2);
}
if (!['JEE', 'NEET'].includes(EXAM)) {
  console.error("REVIEWER_EXAM must be 'JEE' or 'NEET'.");
  process.exit(2);
}

const admin = { apikey: secret, Authorization: `Bearer ${secret}`, 'Content-Type': 'application/json' };

async function call(method, path, body, headers = admin) {
  const res = await fetch(`${url}${path}`, { method, headers, body: body ? JSON.stringify(body) : undefined });
  const text = await res.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    /* non-JSON body */
  }
  return { status: res.status, json, text };
}

async function findUserId() {
  for (let page = 1; page <= 50; page += 1) {
    const r = await call('GET', `/auth/v1/admin/users?page=${page}&per_page=200`);
    if (r.status !== 200) throw new Error(`could not list users (HTTP ${r.status})`);
    const users = r.json?.users ?? [];
    const hit = users.find((u) => (u.email || '').toLowerCase() === REVIEWER_EMAIL);
    if (hit) return hit.id;
    if (users.length < 200) return null;
  }
  return null;
}

async function main() {
  console.log(`${dry ? '[dry run] ' : ''}store-review account: ${REVIEWER_EMAIL}  (exam ${EXAM})`);

  let id = await findUserId();
  console.log(id ? `1. auth user exists (${id.slice(0, 8)}…): will set the password and confirm the email`
                 : '1. auth user does not exist: will create it, email confirmed');
  console.log('2. will upsert its profile (display name, exam, class 12)');
  console.log('3. will add it to admin_excluded_users (paywall-exempt, out of the analytics)');
  if (dry) return console.log('\nDry run: nothing was written.');

  const body = {
    email: REVIEWER_EMAIL,
    password,
    email_confirm: true,
    user_metadata: { purpose: 'store review account' },
  };
  if (id) {
    const r = await call('PUT', `/auth/v1/admin/users/${id}`, body);
    if (r.status !== 200) throw new Error(`could not update the user (HTTP ${r.status}): ${r.text.slice(0, 160)}`);
  } else {
    const r = await call('POST', '/auth/v1/admin/users', body);
    if (r.status !== 200 && r.status !== 201) {
      throw new Error(`could not create the user (HTTP ${r.status}): ${r.text.slice(0, 160)}`);
    }
    id = r.json?.id;
    if (!id) throw new Error('Supabase created the user but returned no id');
  }
  console.log('1. done');

  const upsert = { ...admin, Prefer: 'resolution=merge-duplicates,return=minimal' };
  let r = await call('POST', '/rest/v1/profiles?on_conflict=id', {
    id, display_name: DISPLAY_NAME, phone: null, phone_verified: false, target_exam: EXAM, enrolled_class: 12,
  }, upsert);
  if (r.status >= 300) throw new Error(`could not write the profile (HTTP ${r.status}): ${r.text.slice(0, 160)}`);
  console.log('2. done');

  r = await call('POST', '/rest/v1/admin_excluded_users?on_conflict=user_id', {
    user_id: id, email: REVIEWER_EMAIL, reason: 'Google Play / App Store review account (paywall-exempt)',
  }, upsert);
  if (r.status >= 300) throw new Error(`could not exempt the account (HTTP ${r.status}): ${r.text.slice(0, 160)}`);
  console.log('3. done');

  // 4. Prove it from the outside, exactly as the app will.
  r = await call('POST', '/auth/v1/token?grant_type=password', { email: REVIEWER_EMAIL, password },
    { apikey: publishable, 'Content-Type': 'application/json' });
  if (r.status !== 200 || !r.json?.access_token) {
    throw new Error(`password sign-in FAILED (HTTP ${r.status}): ${r.json?.msg || r.json?.error_description || ''}`);
  }
  console.log('4a. password sign-in works');
  const pass = await fetch(`${API_URL}/pass`, { headers: { Authorization: `Bearer ${r.json.access_token}` } });
  const status = pass.ok ? await pass.json() : null;
  console.log(status
    ? `4b. the server calls this account exempt: ${status.exempt === true ? 'YES' : 'NO (paywall would stop it)'}  (paywall enforced: ${status.paywall})`
    : `4b. GET /pass answered HTTP ${pass.status}: check it by hand`);
  if (status && status.exempt !== true && status.paywall) process.exitCode = 1;
}

main().catch((e) => {
  console.error(`\nFAILED: ${e.message}`);
  process.exit(1);
});

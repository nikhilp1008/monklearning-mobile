import AsyncStorage from '@react-native-async-storage/async-storage';

import { apiFetch } from '@/lib/api';
import { isReviewerSession } from '@/lib/reviewer';
import { supabase } from '@/lib/supabase';

/**
 * WHAT THE STUDENT BOUGHT, AND WHEN IT RUNS OUT.
 *
 * Until now nothing recorded it. Onboarding showed "Active till 26 Sep" on the
 * confirmation screen — computed on the spot for display and then thrown away
 * — and `Your plan` was a hardcoded object with a fictional six-month plan in
 * it. So a pass could not end: the day after a one-day pass, the app looked
 * exactly as it had the day before.
 *
 * THE SERVER OWNS THE PASS. `GET /pass` is the truth: a purchase (Razorpay) or
 * a promo code writes a `passes` row there, so a pass follows the student to
 * another phone and survives a reinstall, and the API itself refuses the
 * learning routes with a 402 once it has ended (PAYWALL_ENFORCED).
 *
 * What lives on the phone is a CACHE of the last answer, kept for one reason:
 * a student with a running pass who opens the app with no signal must not be
 * sent to the plans screen to buy what they already own. The cache is only
 * ever written from a server answer, and an answer of "none" clears it.
 *
 * `passStatus` and `startPass` are still the only two doors; nothing else in
 * the app reads storage. Before the server existed a pass was a record made on
 * the device the moment a promo code brought a price to zero — a pass like that
 * is not on the server and is honoured only while offline.
 *
 * Keyed per signed-in student, so two accounts on one phone cannot inherit
 * each other's pass.
 */

export type PassKind = 'day' | 'week' | '1m' | '3m' | '6m' | '11m';

export type PassRecord = {
  kind: PassKind;
  /** ISO, when it was bought — the clock starts here, not at first use. */
  startedAt: string;
  /** The code that made it free, kept so `Your plan` can say how. */
  promo?: string | null;
  /** When ALL the paid time ends, as the server states it. A second pass bought
   *  while one is running starts after it, so this is not startedAt + the
   *  kind's length. Absent on a pass made on the device before the server. */
  endsAt?: string | null;
  /** How it came to exist. 'exempt' is a founder or tester the paywall never
   *  stops: the server says so and the app believes it. */
  source?: 'razorpay' | 'promo' | 'admin' | 'exempt' | null;
};

/** How long each pass runs. Months are counted as whole days, because a pass
 *  that ends "on the 31st" has to mean something in February too. */
const DAYS: Record<PassKind, number> = {
  day: 1,
  week: 7,
  '1m': 30,
  '3m': 90,
  '6m': 180,
  '11m': 330,
};

/** As it reads on a screen. */
export const PASS_NAME: Record<PassKind, string> = {
  day: '1 day',
  week: '7 days',
  '1m': '1 month',
  '3m': '3 months',
  '6m': '6 months',
  '11m': '11 months',
};

export type PassStatus =
  /** Never bought one — a new account, or a student from before this existed. */
  | { state: 'none' }
  | { state: 'active'; record: PassRecord; endsAt: Date; daysLeft: number; hoursLeft: number }
  | { state: 'expired'; record: PassRecord; endsAt: Date }
  /**
   * COULD NOT TELL. The server could not be reached (or its answer was not
   * one it would give), and this phone holds no earlier answer for this
   * student. Not the same as "no pass": the gate leaves a student alone on
   * this, rather than showing a paying student the plans screen because their
   * signal dropped. It asks again on the next return to the app.
   */
  | { state: 'unknown' };

const KEY = 'pass:v1';

/** The signed-in student, or null. Never throws. */
async function currentUserId(): Promise<string | null> {
  try {
    const { data } = await supabase.auth.getSession();
    return data.session?.user?.id ?? null;
  } catch {
    return null;
  }
}

/**
 * ALWAYS ONE STUDENT'S KEY, NEVER A SHARED ONE.
 *
 * It used to fall back to a shared `pass:v1` when no student could be read —
 * which is exactly what happens when the app returns to the foreground after
 * its sign-in token has lapsed on a weak network. The shared key is empty, so
 * a student who had paid read as having no pass and was sent to the plans
 * screen. With no student there is no cache to read or write.
 */
const keyFor = (userId: string) => `${KEY}:${userId}`;

export function endsAtFor(record: PassRecord): Date {
  if (record.endsAt) {
    const stated = new Date(record.endsAt);
    if (!Number.isNaN(stated.getTime())) return stated;
  }
  // Exact 24-hour days, as the server counts them. Adding calendar days with setDate keeps the
  // phone's wall-clock time, so across a daylight-saving change the end could land an hour
  // (and, near midnight, a date) away from what the server grants.
  const started = new Date(record.startedAt);
  return new Date(started.getTime() + (DAYS[record.kind] ?? 0) * 86400000);
}

export async function readPass(userId?: string | null): Promise<PassRecord | null> {
  try {
    const id = userId ?? (await currentUserId());
    if (!id) return null;
    const raw = await AsyncStorage.getItem(keyFor(id));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PassRecord;
    if (!parsed?.kind || !parsed.startedAt || !(parsed.kind in DAYS)) return null;
    if (Number.isNaN(new Date(parsed.startedAt).getTime())) return null;
    return parsed;
  } catch {
    // Unreadable storage reads as no pass, which sends the student to the
    // plans screen — recoverable in one tap — rather than crashing a launch.
    return null;
  }
}

/** What `GET /pass` and `POST /pass/redeem` answer. */
type ServerPass = {
  state: 'none' | 'active' | 'expired';
  kind?: string;
  source?: string;
  started_at?: string;
  ends_at?: string;
  exempt?: boolean;
};

const TEN_YEARS_MS = 10 * 365 * 86400000;

/** The server's answer as the record the rest of the app already understands. */
export function recordFromServer(s: ServerPass, now: Date = new Date()): PassRecord | null {
  // A pass the student really has: a kind, a start and an end the server stated.
  let real: PassRecord | null = null;
  if (s.state !== 'none' && s.kind && s.kind in DAYS && s.started_at && s.ends_at) {
    const source = (['razorpay', 'promo', 'admin'] as const).find((x) => x === s.source) ?? null;
    real = { kind: s.kind as PassKind, startedAt: s.started_at, endsAt: s.ends_at, source };
  }
  if (s.exempt) {
    // A founder or tester the paywall never stops. A pass they really hold is
    // shown as it is - it used to be replaced by the stand-in below, so the
    // plan screen read "11 months, 3650 days left" whatever they had bought.
    if (real && s.state === 'active') return real;
    return teamAccessRecord(now);
  }
  return real;
}

/** The stand-in for an account the paywall never stops. Not a pass: see isTeamAccess. */
export function teamAccessRecord(now: Date = new Date()): PassRecord {
  return {
    kind: '11m',
    startedAt: now.toISOString(),
    endsAt: new Date(now.getTime() + TEN_YEARS_MS).toISOString(),
    source: 'exempt',
  };
}

/**
 * Team access: the server says this account is never gated, so the app lets it
 * through with a STAND-IN record. It is not a pass and must never be shown as
 * one (no length, no dates, no "days left"); screens ask this before they do.
 */
export function isTeamAccess(record: PassRecord | null | undefined): boolean {
  return record?.source === 'exempt';
}

/**
 * Written under the student the request was made FOR, decided before it was
 * sent: a slow answer must not land under whoever is signed in by the time it
 * arrives.
 */
async function writeCache(userId: string | null, record: PassRecord | null): Promise<void> {
  if (!userId) return;
  try {
    if (record) await AsyncStorage.setItem(keyFor(userId), JSON.stringify(record));
    else await AsyncStorage.removeItem(keyFor(userId));
  } catch {
    // A cache that cannot be written is a cache that is empty next time.
  }
}

/** Only a body the server would actually send counts as its answer. A hotel
 *  or coaching Wi-Fi login page also comes back as a 200. */
function isServerPass(v: unknown): v is ServerPass {
  return (
    !!v &&
    typeof v === 'object' &&
    ['none', 'active', 'expired'].includes((v as { state?: unknown }).state as string)
  );
}

/**
 * A free pass from a promo code. The server decides: one code per student, and
 * each code has a cap. Throws an ApiError whose message is already written for
 * the student ("You have already used a promo code.").
 *
 * A paid pass is not started here — it exists the moment the payment is
 * verified (lib/payments.ts); the app only reads it back with `passStatus`.
 */
export async function startPass(kind: PassKind, promo: string): Promise<PassRecord> {
  const userId = await currentUserId();
  const answer = await apiFetch<ServerPass>('/pass/redeem', {
    method: 'POST',
    body: JSON.stringify({ code: promo.trim(), kind }),
  });
  const record = isServerPass(answer) ? recordFromServer(answer) : null;
  if (!record) throw new Error('The server did not return a pass.');
  await writeCache(userId, record);
  return record;
}

/**
 * Forgets the signed-in student's pass on this phone. Called BEFORE the
 * session ends (lib/auth.ts signOut): after it, there is no student to name
 * the key, and the old one stayed behind. The shared key from before passes
 * were per-student goes too.
 */
export async function clearPass(): Promise<void> {
  try {
    const id = await currentUserId();
    await AsyncStorage.multiRemove(id ? [KEY, keyFor(id)] : [KEY]);
  } catch {
    // Signing out is not blocked by a storage failure.
  }
}

export function statusOf(record: PassRecord | null, now: Date = new Date()): PassStatus {
  if (!record) return { state: 'none' };
  const endsAt = endsAtFor(record);
  const left = endsAt.getTime() - now.getTime();
  if (left <= 0) return { state: 'expired', record, endsAt };
  return {
    state: 'active',
    record,
    endsAt,
    // Rounded UP: a pass with two hours left has "1 day left", not zero. A
    // student reading "0 days left" on a pass they can still use would
    // reasonably think it had already ended.
    daysLeft: Math.ceil(left / 86400000),
    hoursLeft: Math.ceil(left / 3600000),
  };
}

/**
 * Where the student stands, from the server, falling back to the last answer.
 *
 * Only a failure to REACH the server falls back. If it answers "none" the
 * answer is none, and the cache is cleared so a stale local record cannot
 * outvote it on the next offline launch.
 */
/**
 * THE SERVER'S VERDICT, NOT THE PHONE'S CLOCK. A phone set a day ahead used to
 * lock a paying student out; one set behind let an ended pass through the gate
 * while every request came back 402, bouncing the student between Home and
 * the plans screen. Online, the server's `state` decides; the dates are only
 * used to say how long is left.
 */
export function statusFromServer(answer: ServerPass, record: PassRecord | null, now: Date = new Date()): PassStatus {
  // AN EXEMPT ACCOUNT IS NEVER "NO PASS". The server says this one is never
  // gated (a founder, a tester, the store-review account), and `recordFromServer`
  // has already made its record: the pass it really holds, or the team-access
  // stand-in when it holds none. This line used to come after the `none` check
  // below, so an exempt account with no real pass (the store-review account) was
  // answered `none` here and the launch gate sent it to the plans screen.
  if (answer.exempt && record) return statusOf(record, now);
  if (!record || answer.state === 'none') return { state: 'none' };
  const endsAt = endsAtFor(record);
  if (answer.state === 'expired') return { state: 'expired', record, endsAt };
  const left = Math.max(endsAt.getTime() - now.getTime(), 3600000);
  return {
    state: 'active',
    record,
    endsAt,
    daysLeft: Math.ceil(left / 86400000),
    hoursLeft: Math.ceil(left / 3600000),
  };
}

/**
 * Where the student stands, from the server, falling back to the last answer
 * this phone was given for THIS student.
 *
 * Only a failure to REACH the server falls back. If it answers "none" the
 * answer is none, and the cache is cleared so a stale local record cannot
 * outvote it on the next offline launch. With nothing to fall back on, the
 * answer is `unknown`, never `none`.
 */
export async function passStatus(opts: { timeoutMs?: number } = {}): Promise<PassStatus> {
  const userId = await currentUserId();
  if (!userId) return { state: 'unknown' };
  // The store-review account is never asked, and never sent to buy: nothing
  // here can fail or run slow for it (a /pass answer taking longer than the
  // timeout used to be able to put the plans screen in front of a reviewer).
  if (await isReviewerSession()) return statusOf(teamAccessRecord());
  try {
    const answer = await apiFetch<unknown>('/pass', { timeoutMs: opts.timeoutMs ?? 10000 });
    if (!isServerPass(answer)) throw new Error('Not an answer from the pass server.');
    const record = recordFromServer(answer);
    await writeCache(userId, record);
    return statusFromServer(answer, record);
  } catch {
    const cached = await readPass(userId);
    return cached ? statusOf(cached) : { state: 'unknown' };
  }
}

/**
 * The last answer this phone holds for the signed-in student, without asking
 * the server. For the first frame of a launch only: it lets a student with a
 * running pass see Home at once while the real check runs behind it.
 */
export async function cachedPassStatus(): Promise<PassStatus> {
  if (await isReviewerSession()) return statusOf(teamAccessRecord());
  const cached = await readPass();
  return cached ? statusOf(cached) : { state: 'unknown' };
}

import AsyncStorage from '@react-native-async-storage/async-storage';

import { apiFetch } from '@/lib/api';
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
  | { state: 'expired'; record: PassRecord; endsAt: Date };

const KEY = 'pass:v1';

async function storageKey(): Promise<string> {
  try {
    const { data } = await supabase.auth.getSession();
    const id = data.session?.user?.id;
    return id ? `${KEY}:${id}` : KEY;
  } catch {
    return KEY;
  }
}

export function endsAtFor(record: PassRecord): Date {
  if (record.endsAt) {
    const stated = new Date(record.endsAt);
    if (!Number.isNaN(stated.getTime())) return stated;
  }
  const started = new Date(record.startedAt);
  const end = new Date(started.getTime());
  end.setDate(end.getDate() + (DAYS[record.kind] ?? 0));
  return end;
}

export async function readPass(): Promise<PassRecord | null> {
  try {
    const raw = await AsyncStorage.getItem(await storageKey());
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
  // A founder or tester the paywall never stops: always inside a pass.
  if (s.exempt) {
    return {
      kind: '11m',
      startedAt: now.toISOString(),
      endsAt: new Date(now.getTime() + TEN_YEARS_MS).toISOString(),
      source: 'exempt',
    };
  }
  if (s.state === 'none' || !s.kind || !(s.kind in DAYS) || !s.started_at || !s.ends_at) return null;
  const source = (['razorpay', 'promo', 'admin'] as const).find((x) => x === s.source) ?? null;
  return { kind: s.kind as PassKind, startedAt: s.started_at, endsAt: s.ends_at, source };
}

async function writeCache(record: PassRecord | null): Promise<void> {
  try {
    const key = await storageKey();
    if (record) await AsyncStorage.setItem(key, JSON.stringify(record));
    else await AsyncStorage.removeItem(key);
  } catch {
    // A cache that cannot be written is a cache that is empty next time.
  }
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
  const answer = await apiFetch<ServerPass>('/pass/redeem', {
    method: 'POST',
    body: JSON.stringify({ code: promo.trim(), kind }),
  });
  const record = recordFromServer(answer);
  if (!record) throw new Error('The server did not return a pass.');
  await writeCache(record);
  return record;
}

export async function clearPass(): Promise<void> {
  try {
    await AsyncStorage.multiRemove([KEY, await storageKey()]);
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
export async function passStatus(): Promise<PassStatus> {
  try {
    const answer = await apiFetch<ServerPass>('/pass', { timeoutMs: 10000 });
    const record = recordFromServer(answer);
    await writeCache(record);
    return statusOf(record);
  } catch {
    return statusOf(await readPass());
  }
}

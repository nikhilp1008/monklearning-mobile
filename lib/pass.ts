import AsyncStorage from '@react-native-async-storage/async-storage';

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
 * ON THE DEVICE, DELIBERATELY, AND ONLY FOR NOW. The API has no passes table
 * and no purchases endpoint, and there is no payment provider behind any of
 * these screens; a pass exists because a promo code brought a price to zero.
 * This file is therefore the honest shape of that: the record the server will
 * own, kept where the app can keep it. Two consequences worth stating plainly
 * rather than discovering later:
 *
 *   1. It does not follow the student to another phone, and a reinstall
 *      forgets it. Both are wrong, and both are fixed by the same thing: the
 *      server writing `passes` rows at purchase and `GET /me` returning the
 *      current one. `readPass`/`startPass` are the two functions that would
 *      change; nothing else in the app reads storage directly.
 *
 *   2. It gates the APP, not the API. A student who cleared storage would see
 *      the screens again; the server would still answer. Enforcement belongs
 *      with whoever answers `/drona` and `/practice`.
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

/** The clock starts now. Called where a pass is completed, never on a render. */
export async function startPass(kind: PassKind, promo?: string | null): Promise<PassRecord> {
  const record: PassRecord = {
    kind,
    startedAt: new Date().toISOString(),
    promo: promo ? promo.trim().toUpperCase() : null,
  };
  try {
    await AsyncStorage.setItem(await storageKey(), JSON.stringify(record));
  } catch {
    // Nothing to do about it here. The student keeps this session; the next
    // launch asks them for a pass again, which is the safe direction to fail.
  }
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

export async function passStatus(): Promise<PassStatus> {
  return statusOf(await readPass());
}

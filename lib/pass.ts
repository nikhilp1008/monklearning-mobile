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

/**
 * `pro_1m` and `max_1m` are the two monthly plans (Rs 499 / Rs 899). The four
 * before them stay because passes already bought point at them: a student holding
 * one has Max limits until it ends, and `PLANS` no longer sells them.
 */
export type PassKind = 'day' | 'week' | 'pro_1m' | 'max_1m' | '1m' | '3m' | '6m' | '11m';

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
  pro_1m: 30,
  max_1m: 30,
  '1m': 30,
  '3m': 90,
  '6m': 180,
  '11m': 330,
};

/** How many days a plan of this kind runs. */
export const passDays = (kind: PassKind): number => DAYS[kind] ?? 0;

/** As it reads on a screen. */
export const PASS_NAME: Record<PassKind, string> = {
  day: '1 day',
  week: '7 days',
  pro_1m: 'Pro',
  max_1m: 'Max',
  '1m': '1 month',
  '3m': '3 months',
  '6m': '6 months',
  '11m': '11 months',
};

export type PassStatus =
  /**
   * Never bought one — a new account, or a student from before this existed.
   * `free` is the server saying the free tier is on and this student is on it:
   * they are let into the app (with limits), not sent to the plans screen.
   */
  | { state: 'none'; free?: boolean }
  | { state: 'active'; record: PassRecord; endsAt: Date; daysLeft: number; hoursLeft: number }
  | { state: 'expired'; record: PassRecord; endsAt: Date; free?: boolean }
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
  /** 'free' when the free tier is on and this student has no running pass. */
  tier?: 'free' | 'paid';
  free_tier?: { enabled?: boolean; limits?: Partial<FreeLimits>; tiers?: Partial<Record<TierName, Partial<TierLimits>>> };
  /** The pass's real kind. `kind` reports Pro and Max as '1m' for builds that
   *  predate them, so a build that knows them reads this one. */
  plan_kind?: string;
  /** Which plan the student is on: free, day, week, pro or max. Null when the
   *  tiers are off for them (an exempt account). */
  plan_tier?: PlanTier | null;
  classes?: Partial<ClassAllowance>;
  /** Starter passes already used on this account (one each, ever). */
  starter_used?: string[];
};

export type TierName = 'day' | 'week' | 'pro' | 'max';
export type PlanTier = 'free' | TierName;

/** What each paid plan allows. The server owns the numbers; these are the same
 *  figures (app/tiers.py DEFAULTS) so the plans page reads right before the
 *  first answer and with no signal. */
export type TierLimits = {
  /** Live classes in `window_days`, never more than `classes_per_day` in a day. */
  window_days: number;
  classes: number;
  classes_per_day: number;
  snap_questions: number;
  practice_questions: number;
  followups: number;
};

export const DEFAULT_TIERS: Record<TierName, TierLimits> = {
  day: { window_days: 1, classes: 1, classes_per_day: 1, snap_questions: 25, practice_questions: 100, followups: 100 },
  week: { window_days: 7, classes: 3, classes_per_day: 2, snap_questions: 25, practice_questions: 100, followups: 100 },
  pro: { window_days: 30, classes: 45, classes_per_day: 2, snap_questions: 25, practice_questions: 100, followups: 100 },
  max: { window_days: 30, classes: 60, classes_per_day: 3, snap_questions: 50, practice_questions: 200, followups: 100 },
};

/** Where a paying student stands on live classes. */
export type ClassAllowance = {
  limit: number;
  used: number;
  left: number;
  window_days: number;
  per_day: number;
  used_today: number;
  /** ISO: when the next class opens, once a limit has been reached. */
  opens_at?: string;
};

/** What the free tier allows each day (the server owns the numbers). */
export type FreeLimits = {
  snap_questions: number;
  practice_questions: number;
  followups: number;
  mocks: number;
};

export const DEFAULT_FREE_LIMITS: FreeLimits = {
  snap_questions: 5,
  practice_questions: 15,
  followups: 3,
  mocks: 1,
};

/**
 * WHETHER THIS STUDENT IS ON THE FREE TIER, as the server last said. Screens
 * that draw a locked card (the live class, the progress mock-up) ask this
 * rather than the server's verdict on each request, so the card is there on
 * the first frame. The server still decides every limit.
 */
let tierNow: { free: boolean; limits: FreeLimits } = { free: false, limits: DEFAULT_FREE_LIMITS };
const tierListeners = new Set<() => void>();

export function getTier() {
  return tierNow;
}

export function subscribeTier(fn: () => void): () => void {
  tierListeners.add(fn);
  return () => {
    tierListeners.delete(fn);
  };
}

/**
 * WHICH PLAN THIS STUDENT IS ON, as the server last said: its tier, the numbers
 * for every plan, where they stand on live classes, which starter passes they
 * have used, and when a running starter pass ends (for Home's reminder). Like
 * the tier above it is for drawing screens on the first frame; the server still
 * enforces every limit.
 */
export type PlanNow = {
  tier: PlanTier | null;
  tiers: Record<TierName, TierLimits>;
  classes: ClassAllowance | null;
  starterUsed: PassKind[];
  /** A running day or week pass with nothing bought behind it: when it ends. */
  starterEnds: string | null;
  starterKind: 'day' | 'week' | null;
};

const NO_PLAN: PlanNow = { tier: null, tiers: DEFAULT_TIERS, classes: null, starterUsed: [], starterEnds: null, starterKind: null };
let planNow: PlanNow = NO_PLAN;
const planListeners = new Set<() => void>();

export function getPlan(): PlanNow {
  return planNow;
}

export function subscribePlan(fn: () => void): () => void {
  planListeners.add(fn);
  return () => {
    planListeners.delete(fn);
  };
}

/** The plan as the server's `/pass` answer says it. Exported for tests. */
export function planFromServer(s: ServerPass): PlanNow {
  const tiers = { ...DEFAULT_TIERS };
  for (const name of Object.keys(DEFAULT_TIERS) as TierName[]) {
    tiers[name] = { ...DEFAULT_TIERS[name], ...(s.free_tier?.tiers?.[name] ?? {}) };
  }
  const classes =
    s.classes && typeof s.classes.limit === 'number'
      ? ({ used: 0, left: 0, window_days: 30, per_day: 1, used_today: 0, ...s.classes } as ClassAllowance)
      : null;
  const kind = (s.plan_kind ?? s.kind) as PassKind | undefined;
  let starterEnds: string | null = null;
  let starterKind: 'day' | 'week' | null = null;
  if (s.state === 'active' && (kind === 'day' || kind === 'week') && s.started_at && s.ends_at) {
    const runningEnd = new Date(s.started_at).getTime() + DAYS[kind] * 86400000;
    // Something bought behind it ends later: they are carrying on, nothing to remind.
    if (new Date(s.ends_at).getTime() - runningEnd <= 86400000) {
      starterEnds = new Date(runningEnd).toISOString();
      starterKind = kind;
    }
  }
  const used = (s.starter_used ?? []).filter((k): k is PassKind => k === 'day' || k === 'week');
  return { tier: s.plan_tier ?? null, tiers, classes, starterUsed: used, starterEnds, starterKind };
}

function setPlan(next: PlanNow) {
  if (JSON.stringify(next) === JSON.stringify(planNow)) return;
  planNow = next;
  planListeners.forEach((fn) => fn());
}

function setTier(free: boolean, limits?: Partial<FreeLimits>) {
  const next = { free, limits: { ...DEFAULT_FREE_LIMITS, ...(limits ?? {}) } };
  if (next.free === tierNow.free && JSON.stringify(next.limits) === JSON.stringify(tierNow.limits)) return;
  tierNow = next;
  tierListeners.forEach((fn) => fn());
}

const TEN_YEARS_MS = 10 * 365 * 86400000;

/** The server's answer as the record the rest of the app already understands. */
export function recordFromServer(s: ServerPass, now: Date = new Date()): PassRecord | null {
  // A pass the student really has: a kind, a start and an end the server stated.
  let real: PassRecord | null = null;
  const kind = s.plan_kind && s.plan_kind in DAYS ? s.plan_kind : s.kind;
  if (s.state !== 'none' && kind && kind in DAYS && s.started_at && s.ends_at) {
    const source = (['razorpay', 'promo', 'admin'] as const).find((x) => x === s.source) ?? null;
    real = { kind: kind as PassKind, startedAt: s.started_at, endsAt: s.ends_at, source };
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
  setTier(false);
  return record;
}

/**
 * Forgets the signed-in student's pass on this phone. Called BEFORE the
 * session ends (lib/auth.ts signOut): after it, there is no student to name
 * the key, and the old one stayed behind. The shared key from before passes
 * were per-student goes too.
 */
export async function clearPass(): Promise<void> {
  setTier(false);
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
  // Free: the tier is on and the server says this student is not paying. A
  // pass that ran out is still shown as ended, so the plan page can say so.
  const free = answer.tier === 'free';
  if (!record || answer.state === 'none') return { state: 'none', free };
  const endsAt = endsAtFor(record);
  if (answer.state === 'expired') return { state: 'expired', record, endsAt, free };
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
    setTier(answer.tier === 'free' && !answer.exempt, answer.free_tier?.limits);
    setPlan(planFromServer(answer));
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

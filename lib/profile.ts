import AsyncStorage from '@react-native-async-storage/async-storage';

import type { ExamKey, YearKey } from '@/constants/onboarding';
import { supabase } from '@/lib/supabase';

/**
 * The student's own details — what onboarding asks for, kept so Personal
 * information can show and edit them.
 *
 * AsyncStorage is the cache; Supabase's `profiles` table is the truth.
 *
 * That table already holds `display_name`, `enrolled_class`, `target_exam`
 * and `phone`, and RLS lets a signed-in student write their own row — so
 * there was never a need for an endpoint. Writing `target_exam` matters more
 * than it looks: `GET /progress` reads it to decide which subjects exist, so
 * it is what makes a NEET student see Biology instead of Maths, everywhere,
 * without the app filtering anything itself.
 */

const KEYS = {
  name: 'profile.name',
  email: 'profile.email',
  emailVerified: 'profile.emailVerified',
  phone: 'profile.phone',
  phoneVerified: 'profile.phoneVerified',
  exam: 'profile.exam',
  joined: 'profile.joined',
  year: 'profile.year',
} as const;

export interface StudentProfile {
  name: string;
  /** Empty when the student skipped it — it was never mandatory. */
  email: string;
  emailVerified: boolean;
  /**
   * Collected during onboarding but never verified — SMS auth is deferred
   * until there is an Indian sender, so nothing is ever sent here. Kept as a
   * field rather than dropped so the number is already on file the day phone
   * verification does ship.
   */
  phone: string;
  phoneVerified: boolean;
  exam: ExamKey;
  year: YearKey;
  /** ISO date the account was created, from `profiles.created_at`. Empty
   *  until the first successful pull. */
  joined: string;
}

/**
 * Empty, not sample.
 *
 * These were filled with a made-up student while onboarding didn't persist
 * anything — a blank form told you nothing about how the page read. Onboarding
 * now writes real values, so a placeholder here would be showing one student
 * another student's details. Exam and year keep real defaults because every
 * screen that reads them needs *a* value; the identity fields do not.
 */
const FALLBACK: StudentProfile = {
  name: '',
  email: '',
  emailVerified: false,
  phone: '',
  phoneVerified: false,
  exam: 'jee',
  year: 'class12',
  joined: '',
};

function readExam(value: string | null | undefined): ExamKey {
  return value === 'jee' || value === 'neet' || value === 'both' ? value : FALLBACK.exam;
}

function readYear(value: string | null | undefined): YearKey {
  return value === 'class11' || value === 'class12' || value === 'dropper'
    ? value
    : FALLBACK.year;
}

/**
 * The stored name only — null when the student never gave one, with no sample
 * fallback. For surfaces that speak TO the student (the Home greeting): the
 * sample profile is fine as placeholder *form* data on the Personal
 * information page, but greeting a new student by a stranger's name is a lie.
 */
export async function getStoredName(): Promise<string | null> {
  try {
    const name = await AsyncStorage.getItem(KEYS.name);
    return name?.trim() ? name : null;
  } catch {
    return null;
  }
}

export async function getProfile(): Promise<StudentProfile> {
  try {
    const pairs = await AsyncStorage.multiGet(Object.values(KEYS));
    const map = Object.fromEntries(pairs) as Record<string, string | null>;
    return {
      name: map[KEYS.name] ?? FALLBACK.name,
      email: map[KEYS.email] ?? FALLBACK.email,
      emailVerified: map[KEYS.emailVerified] === 'true',
      phone: map[KEYS.phone] ?? FALLBACK.phone,
      phoneVerified: map[KEYS.phoneVerified] === 'true',
      exam: readExam(map[KEYS.exam]),
      year: readYear(map[KEYS.year]),
      joined: map[KEYS.joined] ?? FALLBACK.joined,
    };
  } catch {
    return FALLBACK;
  }
}

/** Writes only the fields given, so a screen can save one row at a time. */
export async function saveProfile(patch: Partial<StudentProfile>): Promise<void> {
  const entries: [string, string][] = [];
  if (patch.name !== undefined) entries.push([KEYS.name, patch.name]);
  if (patch.email !== undefined) entries.push([KEYS.email, patch.email]);
  if (patch.emailVerified !== undefined) {
    entries.push([KEYS.emailVerified, String(patch.emailVerified)]);
  }
  if (patch.phone !== undefined) entries.push([KEYS.phone, patch.phone]);
  if (patch.phoneVerified !== undefined) {
    entries.push([KEYS.phoneVerified, String(patch.phoneVerified)]);
  }
  if (patch.exam !== undefined) entries.push([KEYS.exam, patch.exam]);
  if (patch.year !== undefined) entries.push([KEYS.year, patch.year]);
  if (patch.joined !== undefined) entries.push([KEYS.joined, patch.joined]);
  if (!entries.length) return;
  try {
    await AsyncStorage.multiSet(entries);
  } catch {
    // A profile edit that fails to persist is not worth interrupting the
    // student for; the field keeps its new value for this session.
  }
}

/**
 * Forgets this student. Called on sign-out, because everything above is
 * device-local: without it the next person to sign in on this phone inherits
 * the previous one's name, exam and year — and, worse, onboarding would skip
 * the details step because a stored name already exists.
 */
export async function clearProfile(): Promise<void> {
  try {
    await AsyncStorage.multiRemove(Object.values(KEYS));
  } catch {
    // Nothing useful to do; the next sign-in overwrites these anyway.
  }
}

/* ── server ──────────────────────────────────────────────────────────────── */

/**
 * `profiles.target_exam` is checked against 'JEE' and 'NEET' — uppercase, and
 * **'both' is rejected** even though `progress.py` has a branch for it. Until
 * that constraint is widened, a student who picks both is stored as JEE, which
 * is also what the API would show them (`allowed[0]`), so at least nothing
 * disagrees. Flagged for the co-founder.
 */
function examForServer(exam: ExamKey): 'JEE' | 'NEET' {
  return exam === 'neet' ? 'NEET' : 'JEE';
}

/**
 * `profiles.enrolled_class` is checked against 11, 12 and null. A dropper is
 * neither, and is stored as 12 — they have finished Class 12 and study the
 * whole syllabus, so it is the closest true value the column can hold. The
 * exact answer stays in local storage, which is what the Profile page reads.
 */
function classForServer(year: YearKey): number {
  return year === 'class11' ? 11 : 12;
}

/**
 * Mirrors the local profile into `profiles`.
 *
 * **Throws on failure.** It used to swallow everything, and postgrest reports
 * write failures by *returning* an error rather than throwing — so an RLS
 * denial, a `target_exam` check-constraint rejection or a dropped connection
 * at the last step of onboarding left `display_name` unset while the student
 * was waved through to the app. Every launch after that failed the onboarding
 * check and sent them round again, forever, with nothing logged.
 */
export async function pushProfile(): Promise<void> {
  const { data } = await supabase.auth.getSession();
  const user = data.session?.user;
  if (!user || user.is_anonymous) return;
  const p = await getProfile();
  const { error } = await supabase.from('profiles').upsert({
    id: user.id,
    display_name: p.name || null,
    phone: p.phone || null,
    phone_verified: p.phoneVerified,
    target_exam: examForServer(p.exam),
    enrolled_class: classForServer(p.year),
  });
  if (error) throw new Error(error.message);
}

/**
 * Pulls the server's copy into local storage — what makes a reinstall, or a
 * second device, come back with the student's own details rather than a blank
 * form. Local values are overwritten, because the server is the truth.
 */
export async function pullProfile(): Promise<void> {
  try {
    const { data } = await supabase.auth.getSession();
    const user = data.session?.user;
    if (!user || user.is_anonymous) return;
    const { data: rows } = await supabase
      .from('profiles')
      .select('display_name, phone, phone_verified, target_exam, enrolled_class, created_at')
      .eq('id', user.id)
      .limit(1);
    const row = rows?.[0];
    if (!row) return;
    await saveProfile({
      ...(row.display_name ? { name: row.display_name as string } : {}),
      ...(row.phone ? { phone: row.phone as string } : {}),
      phoneVerified: row.phone_verified === true,
      exam: String(row.target_exam).toLowerCase() === 'neet' ? 'neet' : 'jee',
      // 12 covers both Class 12 and droppers on the server, so a pull can only
      // ever restore the coarse answer — it never overwrites a local
      // 'dropper' with 'class12' unless there was nothing local to keep.
      ...(row.enrolled_class === 11 ? { year: 'class11' as YearKey } : {}),
      ...(row.created_at ? { joined: String(row.created_at) } : {}),
    });
    if (user.email) await saveProfile({ email: user.email, emailVerified: true });
  } catch (err) {
    console.error('[profile] pull failed:', err);
  }
}

/**
 * Has this student finished onboarding?
 *
 * Asked of the server, not the device — that is the only question that
 * survives a reinstall or a second device.
 *
 * **Throws when it cannot ask.** postgrest returns `{ data: null, error }` on
 * a network failure rather than rejecting, so reading only `data` made "the
 * request failed" indistinguishable from "there is no row". That is not a
 * harmless conflation: it told the gate an established student had never
 * onboarded, which threw them into onboarding mid-session on any signal drop
 * — and the re-onboarding then overwrote their real name and exam on the
 * server with whatever they retyped. Callers must decide what an unanswerable
 * question means for them; none of them may treat it as `false`.
 */
export async function hasCompletedOnboarding(): Promise<boolean> {
  const { data } = await supabase.auth.getSession();
  const user = data.session?.user;
  if (!user || user.is_anonymous) return false;
  const { data: rows, error } = await supabase
    .from('profiles')
    .select('display_name')
    .eq('id', user.id)
    .limit(1);
  if (error) throw new Error(error.message);
  return !!rows?.[0]?.display_name;
}

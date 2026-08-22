import AsyncStorage from '@react-native-async-storage/async-storage';

import type { ExamKey, YearKey } from '@/constants/onboarding';

/**
 * The student's own details — what onboarding asks for, kept so Personal
 * information can show and edit them.
 *
 * This is device-local. There is no profile endpoint on the API yet (the
 * router table has doubts, drona, notes, practice and progress, and nothing
 * else), and onboarding doesn't persist what it collects either — it just
 * navigates. So these live in AsyncStorage for now, exactly the way the
 * teacher and language preferences do, and move to the server the moment
 * there is a server to move them to. See lib/preferences.ts.
 */

const KEYS = {
  name: 'profile.name',
  email: 'profile.email',
  emailVerified: 'profile.emailVerified',
  phone: 'profile.phone',
  phoneVerified: 'profile.phoneVerified',
  exam: 'profile.exam',
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

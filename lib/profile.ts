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
  exam: 'profile.exam',
  year: 'profile.year',
} as const;

export interface StudentProfile {
  name: string;
  /** Empty when the student skipped it — it was never mandatory. */
  email: string;
  emailVerified: boolean;
  /** Verified at the OTP step, so it is the one field that can't be edited. */
  phone: string;
  exam: ExamKey;
  year: YearKey;
}

const FALLBACK: StudentProfile = {
  name: '',
  email: '',
  emailVerified: false,
  phone: '',
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

export async function getProfile(): Promise<StudentProfile> {
  try {
    const pairs = await AsyncStorage.multiGet(Object.values(KEYS));
    const map = Object.fromEntries(pairs) as Record<string, string | null>;
    return {
      name: map[KEYS.name] ?? FALLBACK.name,
      email: map[KEYS.email] ?? FALLBACK.email,
      emailVerified: map[KEYS.emailVerified] === 'true',
      phone: map[KEYS.phone] ?? FALLBACK.phone,
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

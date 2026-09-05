import AsyncStorage from '@react-native-async-storage/async-storage';

export type TeacherId = 'drona' | 'vedha';
export type LanguageId = 'hinglish' | 'english';

const TEACHER_KEY = 'monklearning.preferences.teacher';
const LANGUAGE_KEY = 'monklearning.preferences.language';

/** The backend's /drona/session/start takes `voice: 'male' | 'female'`, not
 *  the picker's own id strings — 'male' -> display name "Drona", 'female' ->
 *  "Veda" (see monk-learning-api's app/drona/persona.py, the single source
 *  of truth for this mapping). */
const TEACHER_TO_VOICE: Record<TeacherId, 'male' | 'female'> = {
  drona: 'male',
  vedha: 'female',
};

export function teacherToVoice(teacher: TeacherId): 'male' | 'female' {
  return TEACHER_TO_VOICE[teacher];
}

export async function getTeacherPreference(): Promise<TeacherId> {
  const value = await AsyncStorage.getItem(TEACHER_KEY);
  return value === 'vedha' ? 'vedha' : 'drona';
}

/**
 * The name to print when the teacher speaks to the student.
 *
 * Deliberately the app's spelling, not the backend's: the voice service calls
 * the female persona "Veda" while every screen the student has ever seen says
 * "Vedha". Until that mismatch is settled server-side, the app stays internally
 * consistent — one surface suddenly dropping the 'h' would read as a bug.
 */
export function teacherName(teacher: TeacherId): string {
  return teacher === 'vedha' ? 'Vedha' : 'Drona';
}

export async function getTeacherName(): Promise<string> {
  return teacherName(await getTeacherPreference());
}

/**
 * The teacher's name without waiting for storage.
 *
 * Rendering cannot await: a solution screen paints the moment its data lands,
 * and the name has to be in the copy at that instant or the student reads
 * "Monk" and then watches it change under them. The preference is one small
 * string that only changes when they choose a different teacher, so it is held
 * here and refreshed whenever it is read or set. Before the first read it is
 * the same default `getTeacherPreference` returns.
 */
let cachedTeacher: TeacherId = 'drona';

export function teacherNameNow(): string {
  return teacherName(cachedTeacher);
}

/** Primes the cache. Called once at startup, and on every explicit read. */
export async function primeTeacherName(): Promise<string> {
  cachedTeacher = await getTeacherPreference();
  return teacherName(cachedTeacher);
}

/**
 * Puts the student's teacher into copy the SERVER wrote.
 *
 * The API says "Monk" — "Monk worked this out as …", "Monk could not find a
 * question in that photo" — because it does not know which teacher this
 * student picked. They picked one, and every other surface in the app has
 * called it by name since onboarding, so a refusal that suddenly says "Monk"
 * reads as a different product talking.
 *
 * `\bMonk\b` deliberately: it leaves "MonkLearning" alone, since the brand is
 * not the teacher.
 */
export function withTeacherName(text: string): string;
export function withTeacherName(text: null | undefined): null;
export function withTeacherName(text: string | null | undefined): string | null;
export function withTeacherName(text: string | null | undefined): string | null {
  if (!text) return null;
  return text.replace(/\bMonk\b/g, teacherNameNow());
}

export async function setTeacherPreference(teacher: TeacherId): Promise<void> {
  cachedTeacher = teacher;
  await AsyncStorage.setItem(TEACHER_KEY, teacher);
}

export async function getLanguagePreference(): Promise<LanguageId> {
  const value = await AsyncStorage.getItem(LANGUAGE_KEY);
  return value === 'english' ? 'english' : 'hinglish';
}

export async function setLanguagePreference(language: LanguageId): Promise<void> {
  await AsyncStorage.setItem(LANGUAGE_KEY, language);
}

/** Forgets the teacher and language choice. Called on sign-out: "your
 *  teacher" is a student's pick, not a device setting, so the next person to
 *  sign in on this phone should choose their own rather than inherit one. */
export async function clearPreferences(): Promise<void> {
  try {
    await AsyncStorage.multiRemove([TEACHER_KEY, LANGUAGE_KEY]);
  } catch {
    // Both fall back to their defaults when missing.
  }
}

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
  // `teacherLoaded`, not just `cachedTeacher`: the cache below starts at the
  // DEFAULT rather than at a known value, so returning it before anything has
  // read storage would hand a Vedha student Drona. The flag is what separates
  // "we know it is drona" from "we have not looked yet".
  if (teacherLoaded) return cachedTeacher;
  const value = await AsyncStorage.getItem(TEACHER_KEY);
  cachedTeacher = value === 'vedha' ? 'vedha' : 'drona';
  teacherLoaded = true;
  return cachedTeacher;
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
/** Whether `cachedTeacher` has been confirmed against storage, or is still the
 *  standing default. See getTeacherPreference. */
let teacherLoaded = false;

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
 * `\bMonk\b` deliberately, and case-sensitively: it matches the capitalised
 * "Monk" the API sends and nothing else. The brand name is not the teacher, and
 * it survives this untouched either way -- there is no word boundary after the
 * "monk" in "monklearning" for `\b` to find.
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
  teacherLoaded = true;
  await AsyncStorage.setItem(TEACHER_KEY, teacher);
}

/**
 * Held in memory for the same reason the teacher is, and it matters more here:
 * both of these are read together on the class-start path
 * (`Promise.all([getTeacherPreference(), getLanguagePreference()])` in
 * entering-classroom) immediately before `startDronaSession`, so every class
 * opened in a session was paying two fresh storage reads for two small strings
 * that only change when the student picks differently.
 */
let cachedLanguage: LanguageId = 'hinglish';
let languageLoaded = false;

export async function getLanguagePreference(): Promise<LanguageId> {
  if (languageLoaded) return cachedLanguage;
  const value = await AsyncStorage.getItem(LANGUAGE_KEY);
  cachedLanguage = value === 'english' ? 'english' : 'hinglish';
  languageLoaded = true;
  return cachedLanguage;
}

export async function setLanguagePreference(language: LanguageId): Promise<void> {
  cachedLanguage = language;
  languageLoaded = true;
  await AsyncStorage.setItem(LANGUAGE_KEY, language);
}

/** Forgets the teacher and language choice. Called on sign-out: "your
 *  teacher" is a student's pick, not a device setting, so the next person to
 *  sign in on this phone should choose their own rather than inherit one. */
export async function clearPreferences(): Promise<void> {
  // Cleared BEFORE the await and marked unknown rather than defaulted: the
  // next person to sign in on this phone must not read the previous student's
  // teacher out of memory, and if multiRemove throws, storage still holds the
  // old values — so the next read has to go and look rather than trust a
  // default we only assumed.
  cachedTeacher = 'drona';
  cachedLanguage = 'hinglish';
  teacherLoaded = false;
  languageLoaded = false;
  try {
    await AsyncStorage.multiRemove([TEACHER_KEY, LANGUAGE_KEY]);
  } catch {
    // Both fall back to their defaults when missing.
  }
}

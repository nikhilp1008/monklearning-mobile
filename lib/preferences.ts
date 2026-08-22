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

export async function setTeacherPreference(teacher: TeacherId): Promise<void> {
  await AsyncStorage.setItem(TEACHER_KEY, teacher);
}

export async function getLanguagePreference(): Promise<LanguageId> {
  const value = await AsyncStorage.getItem(LANGUAGE_KEY);
  return value === 'english' ? 'english' : 'hinglish';
}

export async function setLanguagePreference(language: LanguageId): Promise<void> {
  await AsyncStorage.setItem(LANGUAGE_KEY, language);
}

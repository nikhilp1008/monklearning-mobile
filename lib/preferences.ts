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

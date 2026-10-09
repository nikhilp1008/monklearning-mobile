import { createAudioPlayer, setAudioModeAsync, type AudioPlayer } from 'expo-audio';

import type { LanguageId, TeacherId } from '@/lib/preferences';

/**
 * EACH TEACHER'S VOICE, played when a student switches to them.
 *
 * Four recorded introductions, one per teacher per language, ~14s each,
 * bundled with the app (AAC, ~170KB apiece, from the studio WAVs).
 *
 * When it plays, and when it does not:
 *   - On a SWITCH between teachers on the Select Teacher page, never on
 *     opening it. The voice is the answer to "who is this one?".
 *   - In onboarding always in English, the default every new student starts
 *     in; on the page opened from Home, in the student's chosen language.
 *   - Never for a language change in Profile. Changing language is a setting,
 *     not an introduction.
 *   - Only one at a time: a second switch stops the first voice before the
 *     next starts, and leaving the page stops it.
 *   - Not in silent mode. A phone switched to silent has asked for quiet, and
 *     a sample voice is the last thing that should override it. (The live
 *     class and Ask follow-up set their own mode when they start, so this
 *     does not carry over to them.)
 */
const CLIPS: Record<TeacherId, Record<LanguageId, number>> = {
  drona: {
    english: require('@/assets/audio/teachers/drona-en.m4a'),
    hinglish: require('@/assets/audio/teachers/drona-hinglish.m4a'),
  },
  vedha: {
    english: require('@/assets/audio/teachers/vedha-en.m4a'),
    hinglish: require('@/assets/audio/teachers/vedha-hinglish.m4a'),
  },
};

let current: AudioPlayer | null = null;

export async function playTeacherVoice(teacher: TeacherId, language: LanguageId): Promise<void> {
  stopTeacherVoice();
  try {
    await setAudioModeAsync({ playsInSilentMode: false, allowsRecording: false });
    const player = createAudioPlayer(CLIPS[teacher][language]);
    current = player;
    player.addListener('playbackStatusUpdate', (status) => {
      if (status.didJustFinish && current === player) stopTeacherVoice();
    });
    player.play();
  } catch {
    // A voice that will not play is not worth a broken picker.
    stopTeacherVoice();
  }
}

export function stopTeacherVoice(): void {
  const player = current;
  current = null;
  if (!player) return;
  try {
    player.pause();
    player.remove();
  } catch {
    // Already released.
  }
}

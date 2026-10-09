import { createAudioPlayer, setAudioModeAsync, setIsAudioActiveAsync, type AudioPlayer } from 'expo-audio';

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
 *   - Never for a language change in Profile.
 *   - One at a time; leaving the page stops it.
 *   - Not in silent mode. A phone switched to silent has asked for quiet.
 *
 * THE PLAYERS ARE LOADED ONCE AND KEPT, AND NONE OF THEM CAN TURN AUDIO OFF.
 * 1.2.0 made a fresh player on every switch and stopped the old one first,
 * and expo-audio's pause() schedules the audio session's deactivation 0.1s
 * later unless something is playing by then. The new clip was usually still
 * loading at that moment, so the session went off under it and it never
 * sounded: Drona one time, Vedha the next, sometimes neither, depending on
 * how fast the file loaded. Fast switching also overlapped two awaits and
 * left an orphan player talking over the next one.
 *
 * Now `prepareTeacherVoices` loads both teachers' clips when the page opens,
 * with `keepAudioSessionActive` so pausing one never deactivates anything; a
 * switch pauses the other and plays this one from the start, synchronously,
 * with a sequence number so a late seek cannot start a voice that has since
 * been switched away from. `releaseTeacherVoices` on leaving removes them and
 * hands the audio session back explicitly.
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

const players = new Map<string, AudioPlayer>();
/** Bumped by every play and stop: a seek that resolves after a newer request
 *  has been made must not start its voice. */
let seq = 0;

const keyOf = (teacher: TeacherId, language: LanguageId) => `${teacher}-${language}`;

function playerFor(teacher: TeacherId, language: LanguageId): AudioPlayer {
  const key = keyOf(teacher, language);
  let player = players.get(key);
  if (!player) {
    player = createAudioPlayer(CLIPS[teacher][language], { keepAudioSessionActive: true });
    players.set(key, player);
  }
  return player;
}

/** Called when the Select Teacher page opens: loads both voices in the
 *  language it will play, and sets the audio mode once. */
export function prepareTeacherVoices(language: LanguageId): void {
  try {
    void setAudioModeAsync({ playsInSilentMode: false, allowsRecording: false }).catch(() => {});
    playerFor('drona', language);
    playerFor('vedha', language);
  } catch {
    // A voice that will not load is not worth a broken picker.
  }
}

export function playTeacherVoice(teacher: TeacherId, language: LanguageId): void {
  const mine = ++seq;
  try {
    const target = playerFor(teacher, language);
    players.forEach((p) => {
      if (p !== target) p.pause();
    });
    target.pause();
    target
      .seekTo(0)
      .catch(() => {})
      .then(() => {
        if (mine === seq) target.play();
      });
  } catch {
    // As above.
  }
}

export function stopTeacherVoice(): void {
  seq++;
  players.forEach((p) => {
    try {
      p.pause();
    } catch {
      // Already released.
    }
  });
}

/** Leaving the page: release the players and give the audio session back. */
export function releaseTeacherVoices(): void {
  stopTeacherVoice();
  players.forEach((p) => {
    try {
      p.remove();
    } catch {
      // Already released.
    }
  });
  players.clear();
  void setIsAudioActiveAsync(false).catch(() => {});
}

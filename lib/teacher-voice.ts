import { createAudioPlayer, setAudioModeAsync, setIsAudioActiveAsync, type AudioPlayer } from 'expo-audio';

import { TEACHER_INTERRUPTION } from '@/lib/audio-interruption';
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
 *   - Even with the phone on silent, as the live class does. The voice is
 *     the answer to a tap the student just made, and a picker that stays
 *     quiet on most phones in a classroom reads as broken.
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
 * switch pauses the other and plays this one from the start, with a sequence
 * number so a late seek cannot start a voice that has since been switched away
 * from. `releaseTeacherVoices` on leaving removes them.
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
/** Settles once the audio is switched on and the mode is set for this page.
 *  Every play waits on it; see "WHY IT WAS STILL SOMETIMES SILENT" below. */
let ready: Promise<void> = Promise.resolve();

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

/**
 * WHY IT WAS STILL SOMETIMES SILENT, after the 1.2.0 fix. Three things, each
 * enough on its own to drop a voice:
 *
 * 1. Leaving the page called `setIsAudioActiveAsync(false)`. On Android that
 *    is a global switch, `audioEnabled = false`, and every `play()` after it
 *    is refused ("Audio has been disabled") until something turns it back on.
 *    Nothing did: from the second visit to the page, no voice at all. On iOS
 *    the same call is asynchronous and pauses every player when it lands, so
 *    opening the page again soon after leaving it could have the late "off"
 *    arrive after the new page's first voice had started, and cut it.
 *    It is not called any more, and the page switches audio ON before it
 *    plays, so a disable left by an older build cannot stick either.
 *
 * 2. The audio mode was set without being waited for, and it was the quiet-on-
 *    silent one. Coming from a class, where the mode plays even on silent, the
 *    first switch could go out under the old mode and the next under the new:
 *    voice, then no voice, on a phone that was on silent all along. Now the
 *    mode is the class's own (plays on silent) and every play waits for it.
 *
 * 3. Seeking a clip that had not finished loading. AVFoundation refuses a seek
 *    until the item is ready. A clip that has never played is already at the
 *    start, so the seek is simply skipped until it is loaded.
 */

/** Called when the Select Teacher page opens: switches audio on, sets the
 *  mode, and loads both voices in the language it will play. */
export function prepareTeacherVoices(language: LanguageId): void {
  try {
    ready = setIsAudioActiveAsync(true)
      .catch(() => {})
      .then(() => setAudioModeAsync({
          playsInSilentMode: true,
          shouldPlayInBackground: false,
          interruptionMode: TEACHER_INTERRUPTION,
          allowsRecording: false,
        }))
      .catch(() => {});
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
    ready
      .then(() => (target.isLoaded ? target.seekTo(0) : undefined))
      .catch(() => {})
      .then(() => {
        if (mine === seq) target.play();
      })
      .catch(() => {
        // Released while waiting: the page was left. Nothing to play.
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

/**
 * Leaving the page: stop and release the players. The audio itself is left
 * on — see point 1 above for what turning it off did.
 */
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
}

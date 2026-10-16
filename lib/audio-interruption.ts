import type { InterruptionMode } from 'expo-audio';
import { Platform } from 'react-native';

/**
 * HOW THE TEACHER'S VOICE SHARES THE PHONE'S AUDIO.
 *
 * iOS: mixed with other audio, as it always has been. The class holds a
 * recording session for its whole length, and mixing is what keeps that from
 * cutting off music or another app every time the mic opens.
 *
 * Android: 'mixWithOthers' there means the app never asks Android for the
 * audio at all, so the teacher kept talking through a phone call or an alarm,
 * and over music at full volume. 'duckOthers' asks: music drops while the
 * teacher speaks, and a call or alarm pauses the teacher until it is over.
 * The recorder deliberately claims nothing (audioFocusStrategy 'none'), so
 * the two never pause each other.
 */
export const TEACHER_INTERRUPTION: InterruptionMode =
  Platform.OS === 'android' ? 'duckOthers' : 'mixWithOthers';

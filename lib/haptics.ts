import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

/**
 * THE THREE TAPS THE CLASSROOM USES, and the one place the platform split lives.
 *
 * WHY THIS EXISTS AT ALL. The command dock's mic is the only control in the app
 * that a student presses while looking somewhere else — at the board, where the
 * teacher is writing, not at the button under their thumb. Everything else in
 * the app answers a tap by visibly changing: a screen pushes, a sheet rises, a
 * chip fills in. The mic answers by opening a microphone, which looks like
 * almost nothing and is the one thing a student needs to be sure of before they
 * start talking. That is what a haptic is for here, and it is why the list is
 * three entries long rather than one per pressable.
 *
 * NOTHING HERE CARRIES MEANING ON ITS OWN. A tap is always a second channel:
 * the mic also turns green and grows level bars, a refusal also opens a card
 * that says why. It has to be that way, because a haptic is not guaranteed to
 * arrive —
 *
 *   iOS drops it silently in Low Power Mode, when the student has turned
 *   haptics off in Settings, and while the camera or dictation is running.
 *
 *   Android drops it when the device simply cannot do it. Support is not the
 *   issue people expect it to be — `expo-haptics` runs on Android too — the
 *   HARDWARE is. A good phone has a linear actuator that taps; a cheap one has
 *   a spinning weight that can only buzz, so the same call that feels like a
 *   tick on a Pixel feels like a rattle on a budget handset. A large share of
 *   the students this app is for are on exactly those handsets.
 *
 * SO ANDROID GETS ANDROID'S OWN VOCABULARY, not a translation of iOS's.
 * `performAndroidHapticsAsync` hands the device a named effect and lets its
 * own haptics engine decide how to render it, which is what gives a good phone
 * a crisp tick and a poor one something coarse but never wrong. It also needs
 * no VIBRATE permission. The alternative — reusing `impactAsync` everywhere —
 * goes through a path Expo's own documentation recommends against on Android.
 *
 * Every call is fire-and-forget and swallows its own rejection. A haptic that
 * fails is not an error the student should ever hear about, and an unhandled
 * rejection from a nicety is not worth a red box.
 */

/** The floor is yours: the mic opened and the teacher has stopped. */
export function hapticFloorTaken() {
  if (Platform.OS === 'android') {
    // `Gesture_Start` is Android's own name for "a press-and-hold has begun",
    // which is exactly what this is.
    Haptics.performAndroidHapticsAsync(Haptics.AndroidHaptics.Gesture_Start).catch(() => {});
    return;
  }
  // Medium, not Light: this one is confirming that something happened, and it
  // is felt through a thumb that is pressing down rather than resting.
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
}

/** Given back: the student let go and the teacher has the board again. */
export function hapticFloorReleased() {
  if (Platform.OS === 'android') {
    Haptics.performAndroidHapticsAsync(Haptics.AndroidHaptics.Gesture_End).catch(() => {});
    return;
  }
  // Lighter than the take, so the pair reads as one gesture opening and
  // closing rather than as two separate events.
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
}

/**
 * Refused: the press was real but the mic could not be opened.
 *
 * A distinct shape on purpose. Without it a blocked press feels identical to a
 * press that did nothing at all, and "my phone ignored me" is a worse story
 * than "my phone told me no" — especially here, where the reason is usually a
 * permission the student can go and fix.
 */
export function hapticRefused() {
  if (Platform.OS === 'android') {
    Haptics.performAndroidHapticsAsync(Haptics.AndroidHaptics.Reject).catch(() => {});
    return;
  }
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
}

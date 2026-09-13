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
 * AND ON iOS THEY ARE OFF WHILE THE MICROPHONE IS OPEN. This is not a bug in
 * any of the code below; it is `AVAudioSession`'s documented default. A session
 * on `.playAndRecord` silences the Taptic Engine for the whole time it is
 * active, so the engine's own tap cannot be picked up by the microphone that is
 * recording. iOS 13 added one switch to turn that off —
 * `setAllowHapticsAndSystemSoundsDuringRecording(true)` — and neither
 * `expo-audio` nor `@siteed/audio-studio` exposes it, so it cannot be reached
 * from JavaScript at all.
 *
 * The live classroom holds `.playAndRecord` for the ENTIRE class, deliberately:
 * opening the mic on the button press measured 2.75 seconds on device and ate
 * the first words of every question, so the capture chain is warmed once and
 * the button only opens a gate (see `live-classroom.tsx`). The consequence is
 * that `hapticFloorTaken` and `hapticFloorReleased` — the two taps that exist
 * for that button — cannot fire on an iPhone as the app is built today. They
 * are correct, they are called, and iOS drops them.
 *
 * `hapticRefused` is the exception and does work: a press turned away for want
 * of a microphone is, by definition, a press with no recording session open.
 *
 * Fixing the other two needs one line of native Swift at launch, which is a new
 * build and a real trade — the tap would then be inside the recording the
 * student's question is transcribed from. Written up rather than done.
 *
 * Every call is fire-and-forget and swallows its own failure, synchronous or
 * not. A haptic that fails is not an error the student should ever hear about,
 * an unhandled rejection from a nicety is not worth a red box — and a missing
 * native module THROWS rather than rejecting, which without the `try` would
 * take the mic's press handler down with it and stop the button working.
 */

/** Runs a haptic and forgets it, however it fails. */
function fire(tap: () => Promise<void>) {
  try {
    tap().catch(() => {});
  } catch {
    // The module is not in this build. Nothing to feel, nothing to report.
  }
}

/** The floor is yours: the mic opened and the teacher has stopped. */
export function hapticFloorTaken() {
  if (Platform.OS === 'android') {
    // `Gesture_Start` is Android's own name for "a press-and-hold has begun",
    // which is exactly what this is.
    fire(() => Haptics.performAndroidHapticsAsync(Haptics.AndroidHaptics.Gesture_Start));
    return;
  }
  // Medium, not Light: this one is confirming that something happened, and it
  // is felt through a thumb that is pressing down rather than resting.
  fire(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium));
}

/** Given back: the student let go and the teacher has the board again. */
export function hapticFloorReleased() {
  if (Platform.OS === 'android') {
    fire(() => Haptics.performAndroidHapticsAsync(Haptics.AndroidHaptics.Gesture_End));
    return;
  }
  // Lighter than the take, so the pair reads as one gesture opening and
  // closing rather than as two separate events.
  fire(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light));
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
    fire(() => Haptics.performAndroidHapticsAsync(Haptics.AndroidHaptics.Reject));
    return;
  }
  fire(() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning));
}

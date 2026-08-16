import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect } from 'react';
import { Platform } from 'react-native';

// Locks the screen to landscape while a classroom/lesson screen is focused,
// restoring portrait on unmount — the rest of the app is portrait-only.
// Locking can legitimately fail (iPad multitasking can refuse it) — that
// shouldn't crash the screen, so failures are swallowed. Skipped entirely on
// web: there's no real device to rotate, and the orientation-lock web shim
// applies its own CSS rotation to simulate it, which fights a desktop
// browser window and produces a broken layout instead of a helpful one.
//
// Landscape screens hand off to each other via router.replace() (entering
// classroom -> live classroom, live classroom -> session summary is a hand-
// off to a PORTRAIT screen, entering lesson -> lesson player), so the
// outgoing screen's unmount and the incoming screen's mount happen right on
// top of each other. A ref count alone isn't enough to fix this: it assumes
// the incoming screen's mount effect always fires *before* the outgoing
// screen's cleanup, but React doesn't guarantee that ordering across two
// components swapped in the same navigation transition — when cleanup runs
// first, the count genuinely hits 0 for a moment and the portrait restore
// fires, immediately followed by the next screen's landscape lock. That's
// the on-device symptom: landscape -> portrait -> landscape within about a
// second, confirmed still happening even with the ref count in place.
//
// Debouncing the restore fixes it regardless of ordering: dropping to 0
// schedules a portrait restore a beat later instead of firing immediately,
// and the very next landscape screen's mount (whichever order it lands in)
// cancels that pending restore before it ever runs. Only a *genuine* exit
// from every landscape screen — nothing new mounting to cancel it — lets
// the restore actually fire.
let landscapeLockCount = 0;
let pendingRestore: ReturnType<typeof setTimeout> | null = null;
const RESTORE_GRACE_MS = 120;

export function useLandscapeLock() {
  useEffect(() => {
    if (Platform.OS === 'web') return;
    landscapeLockCount += 1;
    if (pendingRestore) {
      clearTimeout(pendingRestore);
      pendingRestore = null;
    }
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE).catch(() => {});
    return () => {
      landscapeLockCount -= 1;
      if (landscapeLockCount === 0) {
        pendingRestore = setTimeout(() => {
          pendingRestore = null;
          if (landscapeLockCount === 0) {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP).catch(() => {});
          }
        }, RESTORE_GRACE_MS);
      }
    };
  }, []);
}

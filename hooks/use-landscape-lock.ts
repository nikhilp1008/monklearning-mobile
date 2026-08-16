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
// classroom -> live classroom, entering lesson -> lesson player), so two
// landscape screens are briefly mounted at once during the transition. A
// naive "unlock on unmount" here fires the outgoing screen's portrait-restore
// right as the incoming screen locks landscape, and the two calls race —
// visible on-device as the screen flipping between orientations 2-3 times
// before settling. A module-level ref count fixes this: portrait is only
// restored when the LAST landscape screen in the chain unmounts, not every
// intermediate hop.
let landscapeLockCount = 0;

export function useLandscapeLock() {
  useEffect(() => {
    if (Platform.OS === 'web') return;
    landscapeLockCount += 1;
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE).catch(() => {});
    return () => {
      landscapeLockCount -= 1;
      if (landscapeLockCount === 0) {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP).catch(() => {});
      }
    };
  }, []);
}

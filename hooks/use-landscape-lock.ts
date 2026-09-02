import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from 'react';
import { Platform, useWindowDimensions } from 'react-native';

/**
 * Orientation is declared per screen, never restored on unmount.
 *
 * The previous design locked landscape on mount and scheduled a portrait
 * restore on unmount, debounced by a grace period so a landscape -> landscape
 * hand-off could cancel it. That is a race, and it lost: entering-classroom
 * hands to live-classroom via router.replace, and whenever the gap between the
 * two exceeded the grace window the restore fired — producing the reported
 * landscape -> portrait -> landscape flip. Widening the window only moves the
 * failure; it also delays the genuine portrait restore when a class ends,
 * which is why the summary screen appeared in landscape for a moment.
 *
 * Now every screen states the orientation it wants, and nothing states one on
 * the way out. A landscape -> landscape hand-off issues the same lock twice,
 * which is a no-op rather than a race. A landscape -> portrait hand-off has the
 * incoming portrait screen ask for portrait, so it happens exactly once, at a
 * defined moment, with no timer involved.
 *
 * Skipped on web: there is no device to rotate, and the orientation-lock web
 * shim applies its own CSS rotation, which fights a desktop browser window.
 */

/** How long to wait for the rotation before painting anyway. Locking can
 *  legitimately be refused (iPad multitasking), and a screen that never
 *  appears is far worse than one that appears un-rotated. */
const ORIENTATION_TIMEOUT_MS = 700;

/**
 * Safety net for leaving a landscape screen by a route that doesn't declare an
 * orientation — swipe-back or the error screens' "Go back", which land on
 * ordinary portrait screens.
 *
 * The grace is deliberately generous. The old 120ms was the bug: a
 * landscape -> landscape hand-off (entering-classroom -> live-classroom) takes
 * longer than that once a real navigation transition is involved, so the
 * restore fired in the gap and the screen flipped landscape -> portrait ->
 * landscape. 600ms comfortably outlasts any hand-off, and it no longer delays
 * anything that matters because the screens that genuinely need portrait now
 * ask for it themselves the moment they mount.
 */
let landscapeCount = 0;
let pendingRestore: ReturnType<typeof setTimeout> | null = null;
const RESTORE_GRACE_MS = 600;

function cancelPendingRestore() {
  if (pendingRestore) {
    clearTimeout(pendingRestore);
    pendingRestore = null;
  }
}

function useOrientationLock(target: 'landscape' | 'portrait', pinned = false): boolean {
  const { width, height } = useWindowDimensions();
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'web') return;
    const id = setTimeout(() => setTimedOut(true), ORIENTATION_TIMEOUT_MS);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (Platform.OS === 'web') return;

    // Any screen declaring an orientation cancels a pending restore — a
    // portrait screen because it is about to set portrait itself, a landscape
    // screen because the restore would undo the hand-off it is completing.
    cancelPendingRestore();

    // `LANDSCAPE` permits both directions, so the board re-orients whenever the
    // phone passes through upside-down — a student shifting position or lying
    // down watches the lesson flip under them. `pinned` holds one direction.
    const lock =
      target === 'landscape'
        ? pinned
          ? ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
          : ScreenOrientation.OrientationLock.LANDSCAPE
        : ScreenOrientation.OrientationLock.PORTRAIT_UP;
    ScreenOrientation.lockAsync(lock).catch(() => {});

    if (target !== 'landscape') return;
    landscapeCount += 1;
    return () => {
      landscapeCount -= 1;
      if (landscapeCount > 0) return;
      pendingRestore = setTimeout(() => {
        pendingRestore = null;
        if (landscapeCount === 0) {
          ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP).catch(() => {});
        }
      }, RESTORE_GRACE_MS);
    };
  }, [target, pinned]);

  if (Platform.OS === 'web') return true;
  const matches = target === 'landscape' ? width > height : height >= width;
  return matches || timedOut;
}

/**
 * Locks the screen to landscape. Returns `true` once the window really is
 * landscape, so the caller can hold its first paint until then — painting a
 * wide layout into a still-portrait window is what made these transitions look
 * broken.
 */
export function useLandscapeLock(pinned = false): boolean {
  return useOrientationLock('landscape', pinned);
}

/**
 * Locks the screen back to portrait. Used by the portrait screens reached
 * directly from a landscape one (the end-of-class summary), which is what
 * makes the restore deterministic instead of timer-driven.
 */
export function usePortraitLock(): boolean {
  return useOrientationLock('portrait');
}

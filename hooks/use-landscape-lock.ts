import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useRef, useState } from 'react';
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
 * How long a window may disagree with the orientation we asked for before we
 * ask again.
 *
 * This exists because iOS and React Native can genuinely come apart. Rotate a
 * few times in a row and the device ends up where it was told — framebuffer
 * and status bar both portrait — while RN's `Dimensions` is still reporting
 * the landscape it used to be. Nothing re-reads it, so the screen lays a
 * landscape board into a portrait window and stays that way: content off the
 * right edge, the bottom half of the phone unpainted, stuck until the app is
 * killed. Reproduced by toggling eight times; it wedged on the fifth and never
 * recovered.
 *
 * Re-issuing the lock makes iOS send a fresh geometry change, which is what
 * shakes a new size out of RN. It is bounded — see RESYNC_LIMIT — because a
 * window that legitimately cannot match (iPad multitasking, a refused lock)
 * must not turn into a permanent retry loop.
 */
const RESYNC_MS = 900;
const RESYNC_LIMIT = 3;

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

/** The lock a target maps to. `LANDSCAPE` permits both directions, so the
 *  board re-orients when the phone passes through upside-down; `pinned` holds
 *  one direction. */
function lockFor(target: 'landscape' | 'portrait', pinned: boolean) {
  if (target !== 'landscape') return ScreenOrientation.OrientationLock.PORTRAIT_UP;
  return pinned
    ? ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    : ScreenOrientation.OrientationLock.LANDSCAPE;
}

function useOrientationLock(target: 'landscape' | 'portrait', pinned = false): boolean {
  const { width, height } = useWindowDimensions();
  const matches = target === 'landscape' ? width > height : height >= width;
  const [timedOut, setTimedOut] = useState(false);

  /**
   * THE GATE HAS TO RE-ARM FOR EVERY ROTATION, not once per mount.
   *
   * This timer used to have `[]` deps, so `timedOut` was set 700ms after the
   * screen appeared and never cleared again. From then on this hook returned
   * true unconditionally and the caller's "hold the first paint until the
   * window really turned" was dead — every rotation after the first painted
   * the new layout into the old window. That is the whole point of the hook,
   * switched off 700ms in.
   *
   * Keyed on `matches` as well as `target`: once the window agrees there is
   * nothing to wait for, and the next disagreement starts a fresh wait.
   */
  useEffect(() => {
    if (Platform.OS === 'web' || matches) {
      setTimedOut(false);
      return;
    }
    setTimedOut(false);
    const id = setTimeout(() => setTimedOut(true), ORIENTATION_TIMEOUT_MS);
    return () => clearTimeout(id);
  }, [target, matches]);

  /**
   * Ask again if the window never caught up. See RESYNC_MS — this is the
   * recovery from RN and iOS disagreeing about which way round the phone is.
   */
  const resyncs = useRef(0);
  useEffect(() => {
    if (Platform.OS === 'web') return;
    if (matches) {
      resyncs.current = 0;
      return;
    }
    if (resyncs.current >= RESYNC_LIMIT) return;
    const id = setTimeout(() => {
      resyncs.current += 1;
      ScreenOrientation.lockAsync(lockFor(target, pinned)).catch(() => {});
    }, RESYNC_MS);
    return () => clearTimeout(id);
  }, [target, pinned, matches]);

  useEffect(() => {
    if (Platform.OS === 'web') return;

    // Any screen declaring an orientation cancels a pending restore — a
    // portrait screen because it is about to set portrait itself, a landscape
    // screen because the restore would undo the hand-off it is completing.
    cancelPendingRestore();

    ScreenOrientation.lockAsync(lockFor(target, pinned)).catch(() => {});

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

/**
 * For a screen whose orientation the STUDENT chooses.
 *
 * The classroom used to call `useLandscapeLock`, which is a declaration: this
 * screen is landscape, turn the phone. That forced every class into landscape
 * and, worse, the 700ms `timedOut` fallback meant a refused or slow lock
 * painted the landscape layout into a portrait window — a sideways board,
 * which is what the classroom did when opened cold.
 *
 * A screen using this must lay out from the window's REAL dimensions rather
 * than from `target`, and use the return only to hold its first paint. Then a
 * mismatch is impossible by construction instead of being raced against a
 * timer: if the lock is refused outright, the layout still matches the window
 * the student is actually holding.
 */
export function useOrientation(target: 'portrait' | 'landscape'): boolean {
  /**
   * PINNED TO ONE LANDSCAPE DIRECTION, and this is the line that stopped the
   * classroom wedging.
   *
   * `OrientationLock.LANDSCAPE` permits landscape-left AND landscape-right, so
   * every rotation gives UIKit two destinations to consider rather than one.
   * Toggle back and forth a few times and it loses track: the scene ends up
   * portrait while React Native's root view stays sized 874x402, so the board
   * is laid out landscape inside a portrait window — content off the right
   * edge, the bottom half of the phone unpainted, and stuck there until the
   * app is killed.
   *
   * Nothing in JavaScript can see that state. `Dimensions.get('window')`,
   * `Dimensions.get('screen')` and the root view's own `onLayout` all report
   * 874x402, in agreement with each other and with what the screen asked for;
   * the disagreement is between React Native's view tree and the native
   * window, one level below anything JS can read. So it cannot be detected and
   * recovered from — it has to not happen.
   *
   * Measured, mashing the rotate control every 400ms: permanently wedged with
   * both directions allowed, and with one direction pinned, a single transient
   * frame mid-rotation that recovers on its own. Reproduced twice.
   *
   * THE COST IS REAL AND IS A DESIGN CHOICE: a student who turns their phone
   * the other way gets an upside-down board until they turn it back. That is
   * a nuisance; the wedge needed the app force-quit.
   */
  return useOrientationLock(target, true);
}

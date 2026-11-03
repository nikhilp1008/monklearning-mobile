import { useFocusEffect } from 'expo-router';
import { useCallback, useRef } from 'react';
import { BackHandler } from 'react-native';

/**
 * WHAT ANDROID'S BACK BUTTON DOES ON THIS SCREEN.
 *
 * `gestureEnabled: false` on a screen only turns off the iPhone swipe. The
 * Android Back button (or back gesture) still pops it, which let a student
 * back out of a receipt into the price list, or out of a mock paper without
 * saving. A screen that must not simply be popped says what Back means here.
 *
 * `onBack` returns true when it has handled Back (nothing else happens),
 * false to let the normal pop go ahead. Active only while the screen is
 * focused, so a screen underneath never answers for the one on top.
 */
export function useAndroidBack(onBack: () => boolean) {
  const latest = useRef(onBack);
  latest.current = onBack;
  useFocusEffect(
    useCallback(() => {
      const sub = BackHandler.addEventListener('hardwareBackPress', () => latest.current());
      return () => sub.remove();
    }, [])
  );
}

/** Back on a screen with nowhere to go back to: leave the app, as Android does. */
export function exitOnBack(): boolean {
  BackHandler.exitApp();
  return true;
}

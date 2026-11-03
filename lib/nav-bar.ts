import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { requireOptionalNativeModule } from 'expo';
import { Platform } from 'react-native';

/**
 * LIGHT BUTTONS ON ANDROID'S NAVIGATION BAR, WHILE A DARK SCREEN IS SHOWING.
 *
 * Since edge-to-edge, Android's Back / Home / Recents sit over the app, styled
 * for its light screens: dark buttons on a pale band. Over the dark screens
 * (payment confirmed, choosing a teacher, entering a class, the camera) that
 * band read as a light strip along the bottom, or the buttons disappeared.
 * expo-status-bar styles only the top bar, so this styles the bottom one, and
 * puts it back when the screen loses focus. iOS has no such bar.
 *
 * Loaded lazily: an installed build made before expo-navigation-bar was added
 * has no native module, and a top-level import would crash it on launch.
 */
function setStyle(style: 'light' | 'dark') {
  if (Platform.OS !== 'android') return;
  // Looked for first, for the same reason as lib/connection.ts: requiring the
  // package where its native module is missing throws inside the module, and
  // development reports that as an Uncaught Error despite the try.
  if (!requireOptionalNativeModule('ExpoNavigationBar')) return;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('expo-navigation-bar').setStyle(style);
  } catch {
    // Not in this build. The bar stays as it was.
  }
}

export function useDarkNavigationBar() {
  useFocusEffect(
    useCallback(() => {
      setStyle('dark');
      return () => setStyle('light');
    }, [])
  );
}

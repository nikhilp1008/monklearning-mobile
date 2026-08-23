import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, router, useRootNavigationState } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import {
  AnekLatin_400Regular,
  AnekLatin_500Medium,
  AnekLatin_600SemiBold,
  AnekLatin_700Bold,
  AnekLatin_800ExtraBold,
} from '@expo-google-fonts/anek-latin';
// The classroom caption line only — the design gives the Hinglish captions
// their own family, and it is the one place in the app that uses it.
import { AnekDevanagari_500Medium } from '@expo-google-fonts/anek-devanagari';
import { Kalam_400Regular, Kalam_700Bold } from '@expo-google-fonts/kalam';

import { useAuthState } from '@/lib/auth';
import { PracticeFocusProvider } from '@/lib/practice-focus-context';
import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

// Holds the native splash screen up until hideAsync() is called explicitly
// below, instead of relying on its (undocumented, easy to get wrong) default
// auto-hide timing. Must run at module scope, before the first render.
SplashScreen.preventAutoHideAsync().catch(() => {});

// Absolute last resort, on top of every individual gate already having its
// own bounded wait (useEnsureAnonymousSession's own 8s timeout, useFonts
// resolving to either loaded or error): if some *future* gate gets added to
// this file without the same care, this guarantees the app still renders
// something within 15s instead of hanging on the splash screen forever again.
const STARTUP_FAILSAFE_MS = 15000;

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // useFonts resolves to [loaded, error] — on a load failure, `error` is set
  // but `loaded` never becomes true, so gating only on the first element
  // would hang here forever exactly like the pre-fix auth bootstrap did.
  // Proceed on either success or failure; a real device build already
  // showed this codebase is not immune to "silent, unrecoverable startup
  // hang" bugs, so every startup gate needs an escape hatch, not just the
  // one that happened to get reported.
  const [fontsLoaded, fontsError] = useFonts({
    AnekLatin_400Regular,
    AnekLatin_500Medium,
    AnekLatin_600SemiBold,
    AnekLatin_700Bold,
    AnekLatin_800ExtraBold,
    AnekDevanagari_500Medium,
    Kalam_400Regular,
    Kalam_700Bold,
  });
  if (fontsError) {
    console.error('[fonts] failed to load, continuing with system fallback:', fontsError);
  }
  const authState = useAuthState();
  /**
   * The navigator's own readiness, which is not the same as ours.
   *
   * `key` is undefined until the root navigator has mounted and published its
   * state. Without this the redirect below could fire in the same commit that
   * first mounts the `<Stack>` — React runs the effect, expo-router's
   * container has not reported ready yet, and `router.replace` throws "the
   * navigation object hasn't been initialized yet".
   *
   * That failure is quiet in a release build: LogBox is not there to show it,
   * the redirect is simply dropped, and an unauthenticated student stays on
   * the tabs. Which is the one thing this gate exists to prevent.
   */
  const navigatorReady = useRootNavigationState()?.key != null;

  const [failsafeTripped, setFailsafeTripped] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setFailsafeTripped(true), STARTUP_FAILSAFE_MS);
    return () => clearTimeout(id);
  }, []);

  const ready = ((fontsLoaded || fontsError) && authState !== 'loading') || failsafeTripped;

  useEffect(() => {
    // Held until the navigator is up as well, so the redirect below has
    // already run by the time anything is visible — otherwise a signed-out
    // student sees a frame of the tabs before onboarding replaces it.
    //
    // `failsafeTripped` still overrides it. Waiting on the navigator without
    // that escape would re-create the exact bug this file already carries a
    // 15s failsafe for: a splash screen nothing can dismiss. Showing the tabs
    // un-redirected is bad; showing a dead app is worse.
    if (ready && (navigatorReady || failsafeTripped)) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [ready, navigatorReady, failsafeTripped]);

  /**
   * The gate. The app anchors to `(tabs)`, so an unauthenticated student is
   * redirected out of it rather than the router being given a different
   * entry point — which keeps every deep link working unchanged.
   *
   * It runs only once the splash screen is still up, so nothing flashes. An
   * anonymous session counts as signed out (see lib/auth.ts): every install
   * before email auth was silently given one, and honouring those would walk
   * existing testers straight past onboarding.
   *
   * `authState` is live, so signing out anywhere in the app lands here too
   * and no screen has to route on its own behalf.
   */
  useEffect(() => {
    if (!ready || !navigatorReady || authState === 'loading') return;
    if (authState === 'signed_out') router.replace('/welcome');
    // Verified, but stopped part-way through. Resume at the first unanswered
    // question rather than starting them over at the welcome screens.
    else if (authState === 'needs_onboarding') router.replace('/details');
  }, [ready, navigatorReady, authState]);

  if (!ready) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <PracticeFocusProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
          <Stack.Screen
            name="topic-sheet"
            options={{
              headerShown: false,
              presentation: 'transparentModal',
              animation: 'slide_from_bottom',
            }}
          />
          <Stack.Screen
            name="entering-classroom"
            options={{ headerShown: false, animation: 'fade' }}
          />
          <Stack.Screen name="live-classroom" options={{ headerShown: false }} />
          <Stack.Screen name="session-summary" options={{ headerShown: false }} />
          <Stack.Screen name="snap-capture" options={{ headerShown: false, animation: 'fade' }} />
          <Stack.Screen name="snap-solved" options={{ headerShown: false }} />
          <Stack.Screen
            name="practice-focus"
            options={{
              headerShown: false,
              presentation: 'transparentModal',
              animation: 'slide_from_bottom',
            }}
          />
          <Stack.Screen name="mock-ready" options={{ headerShown: false }} />
          <Stack.Screen name="mock-test" options={{ headerShown: false }} />
          <Stack.Screen
            name="mock-palette"
            options={{
              headerShown: false,
              presentation: 'transparentModal',
              animation: 'slide_from_bottom',
            }}
          />
          <Stack.Screen name="mock-paused" options={{ headerShown: false }} />
          <Stack.Screen
            name="report-sheet"
            options={{
              headerShown: false,
              presentation: 'transparentModal',
              animation: 'slide_from_bottom',
            }}
          />
          <Stack.Screen name="lesson-player" options={{ headerShown: false }} />
          <Stack.Screen name="milestones" options={{ headerShown: false }} />
          <Stack.Screen name="exam-scope" options={{ headerShown: false }} />
          <Stack.Screen name="exam-scope-subject" options={{ headerShown: false }} />
          <Stack.Screen name="note-detail" options={{ headerShown: false }} />
          <Stack.Screen name="doubt-detail" options={{ headerShown: false }} />
          <Stack.Screen name="session-board" options={{ headerShown: false }} />
          <Stack.Screen
            name="plan-sheet"
            options={{
              headerShown: false,
              presentation: 'transparentModal',
              animation: 'slide_from_bottom',
            }}
          />
          <Stack.Screen name="profile" options={{ headerShown: false }} />
          <Stack.Screen name="account" options={{ headerShown: false }} />
          <Stack.Screen name="subscription" options={{ headerShown: false }} />
          <Stack.Screen name="privacy-policy" options={{ headerShown: false }} />
          <Stack.Screen name="terms" options={{ headerShown: false }} />
          <Stack.Screen name="about-us" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
      </PracticeFocusProvider>
      {/* Dark glyphs, not "auto".
          Every screen in this app paints a light ground — there is no dark
          theme — so "auto", which follows the system appearance, is only ever
          right by accident. Paired with userInterfaceStyle:"light" in
          app.json, which also stops iOS handing the app a dark appearance for
          native UI it doesn't control: the keyboard, action sheets, the photo
          picker and system alerts.

          Fifteen screens (every tab, plus account/terms/milestones and the
          rest) declare no StatusBar of their own and inherit this one, so it
          is the only thing standing between them and whatever style the last
          screen happened to set. */}
      <StatusBar style="dark" />
    </ThemeProvider>
    </GestureHandlerRootView>
  );
}
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, router, usePathname, useRootNavigationState } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
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

  /**
   * Where the gate wants us, and whether we are there yet.
   *
   * One value drives both the redirect and the "has it landed" check, so the
   * two cannot disagree — matching on the destination rather than on "not the
   * tabs" also means an unexpected anchor path can't uncover the app early.
   *
   * This exists because hiding the splash on `navigatorReady` was not enough:
   * that effect and the redirect effect run in the same commit, so the splash
   * lifted while the navigation was still a frame away and a signed-out
   * student saw Home flash before onboarding replaced it. Waiting a fixed
   * number of frames instead would be guessing; this is a fact about where
   * the router actually is, so it holds whatever the build or the device
   * speed.
   */
  const pathname = usePathname();
  const gateTarget =
    authState === 'signed_out' ? '/welcome' : authState === 'needs_onboarding' ? '/details' : null;
  const gateSettled =
    ready && navigatorReady && authState !== 'loading' && (!gateTarget || pathname.startsWith(gateTarget));

  useEffect(() => {
    // `failsafeTripped` still overrides it. Waiting on the gate without that
    // escape would re-create the exact bug this file already carries a 15s
    // failsafe for: a splash screen nothing can dismiss. Showing the tabs
    // un-redirected is bad; showing a dead app is worse.
    if (gateSettled || failsafeTripped) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [gateSettled, failsafeTripped]);

  /**
   * The cover comes down two frames after the router says we have arrived.
   *
   * `usePathname()` reports the new route before that route has painted, so
   * lifting exactly on it still showed a frame of the screen being replaced —
   * measured at 1 flash in 3 cold launches. Erring late is free: an extra
   * frame of plain white against a white splash is invisible, while an extra
   * frame of Home is the whole bug.
   */
  const [coverDown, setCoverDown] = useState(false);
  useEffect(() => {
    if (!gateSettled && !failsafeTripped) return;
    let inner: number | undefined;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setCoverDown(true));
    });
    return () => {
      cancelAnimationFrame(outer);
      if (inner !== undefined) cancelAnimationFrame(inner);
    };
  }, [gateSettled, failsafeTripped]);

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
    if (!ready || !navigatorReady || !gateTarget) return;
    // Already there — re-replacing would reset a half-filled onboarding form
    // every time `authState` re-emits.
    if (pathname.startsWith(gateTarget)) return;
    router.replace(gateTarget);
  }, [ready, navigatorReady, gateTarget, pathname]);

  if (!ready) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <PracticeFocusProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* No transition. The gate reaches onboarding by replacing the
              anchor, so there is nothing to animate *from* — and an animated
              replace kept a frame of Home sliding out after the cover above
              had already lifted, which is the flash this was chasing. */}
          <Stack.Screen
            name="(onboarding)"
            options={{ headerShown: false, animation: 'none' }}
          />
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
      {/* Our own cover, because the splash screen is not ours to rely on.
          `anchor: '(tabs)'` means the Stack renders Home the moment it
          mounts, and the redirect cannot run until at least the next commit —
          so Home is on screen for a frame or more no matter how early the
          gate decides. The native splash is supposed to hide that, and in a
          dev client it does not: its launch screen is dismissed when the
          bundle loads, regardless of `hideAsync`. Verified by frame-capture —
          Home was visible mid-transition on a cold launch.

          An opaque view we control has no such caveat. It comes down when the
          router is genuinely at the destination, or when the failsafe trips,
          whichever is first. */}
      {!coverDown && (
        <View style={[StyleSheet.absoluteFill, styles.gateCover]} pointerEvents="none" />
      )}
      <StatusBar style="dark" />
    </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  // Matches the splash background in app.json, so the hand-off is invisible.
  gateCover: { backgroundColor: '#ffffff' },
});

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, router, useRootNavigationState, useSegments } from 'expo-router';
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
// Onest is the website's typeface (monklearning.com sets it on `body`).
// Home is the first screen moved onto it; the rest of the app is still on
// Anek Latin, so both families load until the migration finishes.
import {
  Onest_400Regular,
  Onest_500Medium,
  Onest_600SemiBold,
  Onest_700Bold,
  Onest_800ExtraBold,
} from '@expo-google-fonts/onest';
// The classroom caption line only — the design gives the Hinglish captions
// their own family, and it is the one place in the app that uses it.
import { AnekDevanagari_500Medium } from '@expo-google-fonts/anek-devanagari';
import { Kalam_400Regular, Kalam_700Bold } from '@expo-google-fonts/kalam';

import { AuthStateContext, useAuthState } from '@/lib/auth';
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
    Onest_400Regular,
    Onest_500Medium,
    Onest_600SemiBold,
    Onest_700Bold,
    Onest_800ExtraBold,
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
   * Is the student inside onboarding, anywhere in it?
   *
   * Not "are they on the exact screen we sent them to". Matching one pathname
   * was a real bug: the moment they pressed Continue on `details` and moved to
   * `exam`, the path no longer matched, the gate decided a redirect was still
   * owed and replaced them back to `details` — remounted, name wiped. They
   * could not get past the first step.
   *
   * The group is the right unit. Every screen in `(onboarding)` is somewhere
   * the gate is happy for them to be, so it only ever acts on someone who is
   * outside it entirely.
   */
  const segments = useSegments();
  const inOnboarding = segments[0] === '(onboarding)';
  const needsOnboardingFlow = authState === 'signed_out' || authState === 'needs_onboarding';
  const gateSettled =
    ready && navigatorReady && authState !== 'loading' && (!needsOnboardingFlow || inOnboarding);

  useEffect(() => {
    if (!ready || !navigatorReady || !needsOnboardingFlow) return;
    // Already somewhere in onboarding — leave them where they are, mid-form.
    if (inOnboarding) return;
    // Signed out starts at the beginning; verified-but-unfinished resumes at
    // the first unanswered question rather than starting over.
    router.replace(authState === 'signed_out' ? '/welcome' : '/details');
  }, [ready, navigatorReady, needsOnboardingFlow, inOnboarding, authState]);

  useEffect(() => {
    // `failsafeTripped` overrides it. Waiting on the gate without that escape
    // would re-create the exact bug this file already carries a 15s failsafe
    // for: a splash screen nothing can dismiss.
    if (gateSettled || failsafeTripped) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [gateSettled, failsafeTripped]);

  /**
   * The cover comes down two frames after the gate settles.
   *
   * Belt to `(tabs)/_layout`'s braces: that stops Home rendering at all, and
   * this keeps the gap it leaves plain white rather than blank. Erring late is
   * free — an extra frame of white against a white splash is invisible.
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


  if (!ready) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthStateContext.Provider value={authState}>
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
          {/* Fades, not slides. The loading card is rendered by both
              `entering-classroom` and this screen so the student sees one
              continuous surface across the route change; the default push
              animation would slide the second copy in over the first. */}
          <Stack.Screen
            name="live-classroom"
            options={{ headerShown: false, animation: 'fade' }}
          />
          <Stack.Screen name="session-summary" options={{ headerShown: false }} />
          <Stack.Screen name="snap-capture" options={{ headerShown: false, animation: 'fade' }} />
          <Stack.Screen name="snap-solved" options={{ headerShown: false }} />
          <Stack.Screen
            name="practice-focus"
            options={{
              headerShown: false,
              // A full screen sliding in from the right, per the redesign
              // bundle -- it was a transparent bottom sheet, and the bundle
              // draws it as a page with its own back chevron.
              animation: 'slide_from_right',
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
          <Stack.Screen name="textbook-chapters" options={{ headerShown: false }} />
          <Stack.Screen name="textbook-reader" options={{ headerShown: false }} />
          <Stack.Screen
            name="textbook-topics"
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
      </AuthStateContext.Provider>
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

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, router, useRootNavigationState, usePathname, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { AppState, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

// Onest is the website's typeface (monklearning.com sets it on `body`), and
// as of this commit it is the app's ONLY Latin family. Anek Latin and Kalam
// are gone: the last 51 files referencing them were moved over here, so
// loading them would ship two ~200KB faces nothing asks for.
//
// WHAT ONEST DOES NOT COVER, checked against every character the checked-in
// render trees actually draw (fontTools, cmap of Onest 400 vs Anek Latin 400):
//
//   Ω µ Δ Φ  — Onest has NO Greek block and no U+00B5 at all. Anek Latin had
//             Ω, Δ and µ. Not a regression where those are drawn in
//             `theme.monoFontFamily` (Menlo covers them); a live trap
//             anywhere they reach `theme.fontFamily`.
//   θ φ     — drawn in Onest today (lines_planes_3d's angle labels, 6
//             occurrences) and covered by NEITHER family: they fell through to
//             an iOS system fallback under Anek Latin too. Pre-existing, and
//             worth knowing, because a fallback face has metrics
//             lib/widgets/advance-widths.json does not model.
//
// THE TRAP WAS LIVE. Measured over the stored corpus 2026-09-22: 40 of 260
// boards carry a character Onest cannot draw, and comparison_table and
// lcr_resonance set all their text in `theme.fontFamily`. Every one of those
// characters was reaching the iOS per-glyph fallback — rendering, in a second
// typeface, at metrics nothing modelled.
//
// Inter is bundled as the COMPANION FACE and lib/widgets/chrome.ts splits a
// string into runs by coverage, so each run is drawn and measured in a face
// this code chose. Inter over Noto Sans on two measurements: it covers 23 of
// the 26 characters the corpus needs against 22, and its mean Latin advance
// is within 2.4% of Onest's where Noto Sans is 8.6% narrower — a visible step
// mid-string at 12pt.
//
// Only 400 is loaded, and that is not an oversight: the board's
// `theme.fontFamily` is `Onest_400Regular` and nothing else, so a companion
// run is always regular weight. The day a board draws body text at another
// weight, this needs the matching Inter weight or the run will be visibly
// lighter than the text around it.
//
// Re-run that check before the next family swap; it is the thing that would
// catch a migration silently dropping the ohm sign.
import {
  Onest_300Light,
  Onest_400Regular,
  Onest_500Medium,
  Onest_600SemiBold,
  Onest_700Bold,
  Onest_800ExtraBold,
} from '@expo-google-fonts/onest';
// STAYS. Onest has no Devanagari coverage at all, so this is the only face
// that can draw the script — the classroom caption strip
// (components/classroom-chrome.tsx) and lib/widgets/advance-widths.json's
// Devanagari table both depend on it being loaded. It is not a leftover of
// the Anek Latin migration; it is a different script.
import { AnekDevanagari_500Medium } from '@expo-google-fonts/anek-devanagari';
// The companion face — see the note above. Greek, sub/superscripts, µ and Ω.
import { Inter_400Regular } from '@expo-google-fonts/inter';
// THE NOTE'S HAND, for the handwritten notes page. Chosen by rendering eight
// candidates against the reference's own sentence: upright, tight and neat,
// where Kalam — the face that used to be here on trial — slants. Kalam went
// with the trial; nothing else in the app referenced it (`boardKalamNoteBase`
// in lesson-player.tsx is a legacy NAME, and draws in Onest).
//
// ONE WEIGHT, and that is the point rather than a limitation. Patrick Hand
// ships 400 alone, so a heading cannot be bolder — it can only be bigger, or
// red, or underlined. Which is exactly what a pen can do, and why the page
// reads as written.
//
// Measured with fontTools against every character that page draws: it has the
// superscript digits (10¹¹, m², 10⁸) and °, ×, ≈, •, — and the curly
// apostrophe. It does NOT have the superscript MINUS (U+207B), so `m⁻²` takes
// an iOS fallback for that one dash. Nor any Greek, which is why the page
// spells Greek out the way the reference does.
import { PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import { Kalam_400Regular, Kalam_700Bold } from '@expo-google-fonts/kalam';

import { AuthStateContext, useAuthState } from '@/lib/auth';
import { passStatus } from '@/lib/pass';
import { initTracking, trackScreen } from '@/lib/track';
import { assertAssetsConfigured } from '@/lib/widgets/labelled-figure/r2-figure-resolver';
import { PracticeFocusProvider } from '@/lib/practice-focus-context';
import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

// Holds the native splash screen up until hideAsync() is called explicitly
// below, instead of relying on its (undocumented, easy to get wrong) default
// auto-hide timing. Must run at module scope, before the first render.
SplashScreen.preventAutoHideAsync().catch(() => {});

// Module scope, before the first render. In an effect this would fire after a
// board could already have drawn a placeholder, which is the state it exists
// to make impossible to miss. No-op unless __DEV__ and the value is empty.
assertAssetsConfigured();

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
    // 300 joins the set for the two welcome headlines, which the onboarding
    // handoff sets at Light. Anek Latin is gone — see the note above the
    // imports.
    Onest_300Light,
    Onest_400Regular,
    Onest_500Medium,
    Onest_600SemiBold,
    Onest_700Bold,
    Onest_800ExtraBold,
    // The one non-Latin face, and the reason it is not symmetrical with the
    // five above: it is loaded for its SCRIPT, not for a weight in a scale.
    AnekDevanagari_500Medium,
    // Loaded for its COVERAGE, like the line above, not for a weight in a
    // scale: it draws the characters Onest has no glyph for.
    Inter_400Regular,
    // The handwritten note's hand; see the import.
    PatrickHand_400Regular,
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
  // The promo screen is part of the takeover, not a way out of it: a gate that
  // fired there would bounce the student back mid-code.
  const onPlans = segments[0] === 'plans' || segments[0] === 'plans-promo';

  /**
   * Telemetry, started once and deliberately outside every startup gate.
   *
   * Not behind `ready` or `navigatorReady`: this file already carries a 15s
   * failsafe because a startup gate hung the splash screen once, and adding
   * analytics to the set of things that must succeed before the app renders
   * would be the same mistake with a worse excuse. initTracking() catches its
   * own errors and does no I/O on this path — it queues in memory and flushes
   * later — so the worst case is no events, not no app.
   */
  useEffect(() => initTracking(), []);

  // Screen views, which is the whole onboarding funnel for free: every step is
  // its own expo-router route. Only after the navigator is up, or the first
  // pathname is whatever expo-router reports mid-mount rather than a screen a
  // student actually looked at.
  const pathname = usePathname();
  useEffect(() => {
    if (!navigatorReady || !pathname) return;
    trackScreen(pathname);
  }, [navigatorReady, pathname]);
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

  /**
   * THE PASS GATE. A day after a one-day pass, the app stops being the app.
   *
   * It runs only for a student who is signed in and past onboarding, and only
   * outside the plans screen itself. Onboarding finishes by starting a pass,
   * so a student who just completed it is never sent straight here.
   *
   * It checks on every foreground as well as at launch: a pass that runs out
   * while the phone is in a pocket should be out when the phone comes back,
   * not at the next cold start.
   *
   * NO PASS AT ALL reads the same as an expired one. That covers students from
   * before any of this was recorded — they see the plans screen, put the same
   * promo code in, and carry on; nothing of theirs is lost or deleted. It is
   * the safe direction to fail in either case: the wrong answer costs one tap,
   * where wrongly letting someone through costs a paying student nothing to
   * notice.
   */
  const passGateReady = ready && navigatorReady && authState === 'signed_in' && !inOnboarding;
  useEffect(() => {
    if (!passGateReady || onPlans) return;
    let cancelled = false;
    const check = async () => {
      const status = await passStatus();
      if (cancelled || status.state === 'active') return;
      router.replace('/plans');
    };
    void check();
    const sub = AppState.addEventListener('change', (next) => {
      if (next === 'active') void check();
    });
    return () => {
      cancelled = true;
      sub.remove();
    };
  }, [passGateReady, onPlans]);

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
              // A page now, not a sheet over the chapter list -- so it pushes
              // from the right like every other step in this flow.
              animation: 'slide_from_right',
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
          {/* Dev only, reached by deep link: monklearningapp://dev-board-preview.
              Registered so it loses the router's own header, which stacked on
              top of the board's. */}
          <Stack.Screen name="dev-board-preview" options={{ headerShown: false }} />
          {/* Pushed screens, not tabs. Both used to live in (tabs) behind
              href:null, which hid them from the bar but still wrapped them in
              it -- so picking a chapter or answering a question happened under
              a navigation bar that had nothing to do with either. Each carries
              its own back button instead. */}
          <Stack.Screen name="drona" options={{ headerShown: false }} />
          {/* Progress is pushed, not a tab. `href: null` only hid it from the
              bar -- it stayed a member of the (tabs) group, so the bar still
              rendered underneath it. Same fix the chapter selector and
              Practice got. */}
          <Stack.Screen name="progress" options={{ headerShown: false }} />
          <Stack.Screen name="practice" options={{ headerShown: false }} />
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
          <Stack.Screen name="mocks" options={{ headerShown: false }} />
          <Stack.Screen name="mock-test" options={{ headerShown: false }} />
          {/* A full page that slides up, not a transparent modal over the
              paper: every other screen in the mock flow is a page. */}
          <Stack.Screen
            name="mock-palette"
            options={{ headerShown: false, animation: 'slide_from_bottom' }}
          />
          <Stack.Screen name="mock-paused" options={{ headerShown: false }} />
          {/* No swipe-back off a freshly submitted paper: the gesture would
              land on the palette of a paper that no longer exists. */}
          <Stack.Screen name="mock-report" options={{ headerShown: false, gestureEnabled: false }} />
          <Stack.Screen
            name="report-sheet"
            options={{
              headerShown: false,
              presentation: 'transparentModal',
              // NONE, as for textbook-topics: the sheet animates itself, and a
              // route slide carried the scrim up with it as a sliding edge.
              animation: 'none',
            }}
          />
          <Stack.Screen name="textbook-chapters" options={{ headerShown: false }} />
          <Stack.Screen name="textbook-reader" options={{ headerShown: false }} />
          <Stack.Screen
            name="textbook-topics"
            options={{
              headerShown: false,
              presentation: 'transparentModal',
              // NONE, because the sheet animates itself. The route's own
              // slide_from_bottom moved the whole transparent screen — scrim
              // included — so the dim arrived as a sliding edge rather than a
              // fade, and the sheet could not be dragged out from under a
              // navigator that owned its position.
              animation: 'none',
            }}
          />
          <Stack.Screen name="exam-scope" options={{ headerShown: false }} />
          <Stack.Screen name="exam-scope-subject" options={{ headerShown: false }} />
          <Stack.Screen name="note-detail" options={{ headerShown: false }} />
          <Stack.Screen name="doubt-detail" options={{ headerShown: false }} />
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
          {/* The takeover when a pass has ended: no header, and no gesture
              back to the screen it replaced. */}
          <Stack.Screen
            name="plans"
            options={{ headerShown: false, gestureEnabled: false, animation: 'fade' }}
          />
          {/* Pushed from it, so it keeps its back chevron and its slide. */}
          <Stack.Screen name="plans-promo" options={{ headerShown: false }} />
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

          Fifteen screens (every tab, plus account/terms and the
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

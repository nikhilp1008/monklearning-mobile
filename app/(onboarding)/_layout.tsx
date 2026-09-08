import { Stack } from 'expo-router';

// Each onboarding screen declares its own StatusBar style: the two
// photographic welcome screens need light glyphs over their dark veil, the
// white-flow screens need dark. So this layout deliberately does NOT set one
// — a group-level StatusBar here would fight the screen-level ones.
export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* The confirmation fades in rather than sliding.
          Its whole point is the sequence that plays on arrival — tick, two
          amber rings, then the headline and receipt rows rising in turn — and
          a slide transition runs on top of the first ~350ms of that, which is
          most of the tick and the first ring. By the time the screen settles
          the moment has already happened, which is why it read as static.
          A fade is also what the handoff specifies here (`mkFade 420ms`). */}
      <Stack.Screen name="pass-active" options={{ animation: 'fade' }} />
    </Stack>
  );
}

import { Stack } from 'expo-router';

// Each onboarding screen declares its own StatusBar style: the two
// photographic welcome screens need light glyphs over their dark veil, the
// white-flow screens need dark. So this layout deliberately does NOT set one
// — a group-level StatusBar here would fight the screen-level ones.
export default function OnboardingLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}

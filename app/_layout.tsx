import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import {
  AnekLatin_400Regular,
  AnekLatin_500Medium,
  AnekLatin_600SemiBold,
  AnekLatin_700Bold,
  AnekLatin_800ExtraBold,
} from '@expo-google-fonts/anek-latin';
import { Kalam_400Regular, Kalam_700Bold } from '@expo-google-fonts/kalam';

import { useEnsureAnonymousSession } from '@/lib/auth';
import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    AnekLatin_400Regular,
    AnekLatin_500Medium,
    AnekLatin_600SemiBold,
    AnekLatin_700Bold,
    AnekLatin_800ExtraBold,
    Kalam_400Regular,
    Kalam_700Bold,
  });
  const sessionReady = useEnsureAnonymousSession();

  if (!fontsLoaded || !sessionReady) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
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
        <Stack.Screen
          name="entering-lesson"
          options={{ headerShown: false, animation: 'fade' }}
        />
        <Stack.Screen name="lesson-player" options={{ headerShown: false }} />
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
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
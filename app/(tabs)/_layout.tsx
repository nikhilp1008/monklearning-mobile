import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { TabBar } from '@/components/tab-bar';
import { useSharedAuthState } from '@/lib/auth';

// The whole app is a light "paper" aesthetic, regardless of system light/dark
// setting — override the root's theme-following `style="auto"`.
export default function TabLayout() {
  const authState = useSharedAuthState();

  /**
   * Nothing at all while the student does not belong here.
   *
   * `anchor: '(tabs)'` means this layout mounts and paints Home the instant
   * the root Stack renders, and the root's redirect cannot run until at least
   * the following commit — a ~46ms window, measured with timestamps, which is
   * two or three frames and reads as a blink of Home before onboarding.
   *
   * Covering it was tried and is not sufficient in every path; not rendering
   * it is. Declining here costs nothing, because the only thing that could
   * legitimately be shown is a screen this student is about to be redirected
   * away from.
   */
  if (authState === 'signed_out' || authState === 'needs_onboarding') {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="textbooks" options={{ title: 'Textbooks' }} />
        {/* Lessons is on hold, not deleted -- the screen stays routable so the
            work survives, but nothing in the bar points at it. */}
        <Tabs.Screen name="lessons" options={{ href: null }} />
        <Tabs.Screen name="drona" options={{ href: null }} />
        <Tabs.Screen name="progress" options={{ title: 'Progress' }} />
        <Tabs.Screen name="library" options={{ title: 'Library' }} />
        <Tabs.Screen name="practice" options={{ href: null }} />
      </Tabs>
    </>
  );
}

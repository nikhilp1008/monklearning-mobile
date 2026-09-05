import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { TabBar } from '@/components/tab-bar';
import { usePortraitLock } from '@/hooks/use-landscape-lock';
import { useSharedAuthState } from '@/lib/auth';

// The whole app is a light "paper" aesthetic, regardless of system light/dark
// setting — override the root's theme-following `style="auto"`.
export default function TabLayout() {
  /**
   * The tabs are the app's portrait ground, and they say so.
   *
   * Three screens lock landscape — the lesson player and the two classroom
   * screens — and the only thing that ever put the app back was the unmount
   * grace timer inside the lock. That covers a back-navigation and nothing
   * else: quit the app from a lesson, or come back to it after the OS has
   * killed it, and the tabs mount with the device still rotated and nobody
   * asking otherwise, so Lessons renders sideways until you enter and leave a
   * lesson again.
   *
   * Declaring it here is what the lock's own design asks for — every screen
   * states the orientation it wants — and it makes the restore deterministic
   * rather than a race against a timer.
   *
   * The paint is deliberately NOT held until the rotation lands, unlike the
   * end-of-class summary. That screen is entered directly from landscape, so a
   * frame of wide layout would be visible; here the tabs are usually already
   * portrait and gating the first paint would put a blank screen in front of
   * every cold start to save a frame almost nobody sees.
   */
  usePortraitLock();
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

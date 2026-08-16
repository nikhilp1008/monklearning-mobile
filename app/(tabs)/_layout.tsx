import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { TabBar } from '@/components/tab-bar';

// The whole app is a light "paper" aesthetic, regardless of system light/dark
// setting — override the root's theme-following `style="auto"`.
export default function TabLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="lessons" options={{ title: 'Lessons' }} />
        <Tabs.Screen name="drona" options={{ href: null }} />
        <Tabs.Screen name="progress" options={{ title: 'Progress' }} />
        <Tabs.Screen name="library" options={{ title: 'Library' }} />
        <Tabs.Screen name="practice" options={{ href: null }} />
      </Tabs>
    </>
  );
}

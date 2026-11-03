import { router } from 'expo-router';

import { SettingsPage } from '@/components/settings-page';
import { StateCard } from '@/components/states';

/**
 * LIVE CLASSES, AS A FREE STUDENT MEETS THEM.
 *
 * The class is the paid product, so a free student does not get a class: they
 * get this card, which says what it is and offers the way in. It is reached from
 * every "start a class" button (lib/open-class.ts), never as a server refusal,
 * so there is no flash of a classroom that closes on them.
 */
export default function ClassLockedScreen() {
  return (
    <SettingsPage title="Live classes">
      <StateCard
        glyph="lock"
        title="Live classes come with a plan"
        line="Sit down with Drona or Vedha on a real board: every step spoken and written out, and you can interrupt with a doubt at any moment. Your daily snaps and practice stay yours either way."
        action={{ label: 'See plans', onPress: () => router.replace('/plans') }}
        quiet={{ label: 'Not now', onPress: () => (router.canGoBack() ? router.back() : router.replace('/')) }}
      />
    </SettingsPage>
  );
}

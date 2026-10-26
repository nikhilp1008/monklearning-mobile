import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { StateBanner } from '@/components/states';

/** How long the banner stays before it leaves on its own. */
const SHOW_MS = 6000;

/**
 * A PAYMENT THAT DID NOT HAPPEN, SAID AT THE TOP (26 Oct 2026, Nikhil picked
 * the top banner of three on the emulator).
 *
 * It replaces Android's plain "Payment not completed" popup, which looked like
 * a different app, and it floats over the top of the page rather than sitting
 * by the Pay button, which a banner there pushed out of place. It is the app's
 * own banner (components/states), the one mic-off and offline already use.
 * Leaves by itself after a few seconds, and the page clears it on the next Pay.
 */
export function PaymentNotice({ visible, onGone }: { visible: boolean; onGone: () => void }) {
  const insets = useSafeAreaInsets();
  useEffect(() => {
    if (!visible) return;
    const id = setTimeout(onGone, SHOW_MS);
    return () => clearTimeout(id);
  }, [visible, onGone]);
  if (!visible) return null;
  return (
    <Animated.View
      entering={FadeInUp.duration(220)}
      exiting={FadeOutUp.duration(180)}
      style={[styles.wrap, { top: insets.top + 12 }]}
      pointerEvents="none">
      <StateBanner bold="Payment cancelled." text="Nothing was charged." />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: { position: 'absolute', left: 20, right: 20, zIndex: 20 },
});

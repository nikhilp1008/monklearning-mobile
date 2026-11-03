import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { StateBanner } from '@/components/states';

/** How long the banner stays before it leaves on its own. */
const SHOW_MS = 6000;
/** The unsure banner says more, so it stays longer. */
const UNSURE_SHOW_MS = 10000;

/**
 * A PAYMENT THAT DID NOT HAPPEN, SAID AT THE TOP (26 Oct 2026, Nikhil picked
 * the top banner of three on the emulator).
 *
 * It replaces Android's plain "Payment not completed" popup, which looked like
 * a different app, and it floats over the top of the page rather than sitting
 * by the Pay button, which a banner there pushed out of place. It is the app's
 * own banner (components/states), the one mic-off and offline already use.
 * Leaves by itself after a few seconds, and the page clears it on the next Pay.
 *
 * `unsure`: the student came back from a UPI app and the server has not said
 * either way, so the money may still be landing. "Nothing was charged" would be
 * a guess, and a student who believes it pays twice.
 */
export function PaymentNotice({
  visible,
  onGone,
  unsure = false,
}: {
  visible: boolean;
  onGone: () => void;
  unsure?: boolean;
}) {
  const insets = useSafeAreaInsets();
  useEffect(() => {
    if (!visible) return;
    const id = setTimeout(onGone, unsure ? UNSURE_SHOW_MS : SHOW_MS);
    return () => clearTimeout(id);
  }, [visible, onGone, unsure]);
  if (!visible) return null;
  return (
    <Animated.View
      entering={FadeInUp.duration(220)}
      exiting={FadeOutUp.duration(180)}
      style={[styles.wrap, { top: insets.top + 12 }]}
      pointerEvents="none">
      {unsure ? (
        <StateBanner
          bold="Payment not confirmed yet."
          text="If money left your account, your pass starts on its own. Don't pay again."
        />
      ) : (
        <StateBanner bold="Payment cancelled." text="Nothing was charged." />
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: { position: 'absolute', left: 20, right: 20, zIndex: 20 },
});

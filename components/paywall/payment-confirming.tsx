import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { MonkMarkBuild } from '@/components/monk-mark-build';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

/**
 * "CONFIRMING YOUR PAYMENT" — the seconds between Razorpay's sheet closing and
 * the server saying the pass exists.
 *
 * It used to be nothing: the sheet closed, the student was back on the price
 * list with a greyed-out Pay button, and up to half a minute passed with no
 * word — long enough to wonder whether to pay again. Now the page is covered
 * by the same quiet white and the same drawing Monk mark as the class loading
 * screen, so the wait reads as the app working, and it says the one thing a
 * student needs at that moment: keep the app open.
 *
 * Laid over the screen that is paying (plans, onboarding's pass), not a route
 * of its own: the purchase belongs to that screen, which takes it down when
 * the answer arrives.
 */
export function PaymentConfirming() {
  const { scale } = useScale();
  return (
    <Animated.View entering={FadeIn.duration(180)} style={[StyleSheet.absoluteFill, styles.cover]} accessibilityViewIsModal>
      <StatusBar style="dark" />
      <View style={styles.centre}>
        <MonkMarkBuild size={scale(84)} />
        <Text
          accessibilityRole="header"
          style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(21), letterSpacing: scale(-0.4), color: colors.ink, marginTop: scale(28) }}>
          Confirming your payment
        </Text>
        <Text
          style={{ fontFamily: 'Onest_400Regular', fontSize: scale(14.5), lineHeight: scale(21), color: colors.slate, textAlign: 'center', marginTop: scale(8), maxWidth: scale(280) }}>
          This takes a few seconds. Please keep the app open.
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cover: { backgroundColor: '#FFFFFF', zIndex: 10, elevation: 10 },
  centre: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
});

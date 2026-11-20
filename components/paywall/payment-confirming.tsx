import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

import { LIGHT, LightCard, PlanGlow, TurningRing } from './light';

/**
 * "CONFIRMING YOUR PAYMENT": the seconds between the payment sheet closing and
 * the server saying the pass exists.
 *
 * IT IS THE RECEIPT BEFORE ITS TICK (Nikhil's pick, C1, 19 Nov 2026). The same
 * page as components/pass-confirmation.tsx: a ring turns where the tick will
 * land, and the card under it already says what was bought and what was paid,
 * with one line still open. When the answer comes the receipt takes its place
 * and nothing on the page moves but that mark and that line. It used to be a
 * white page with the logo drawing itself, borrowed from the class loading
 * screen, which told a student nothing about their money.
 *
 * Laid over the screen that is paying (plans, onboarding's pass), not a route
 * of its own: the purchase belongs to that screen, which takes it down when
 * the answer arrives.
 */
/** After this long on the page, it says the wait is running long instead of "a few seconds". */
const SLOW_AFTER_MS = 8000;
/** A student back from a UPI app who did not pay should not have to sit the whole wait out. */
const NOT_PAID_AFTER_MS = 5000;

export function PaymentConfirming({
  what,
  amount,
  plan,
  mode = 'paid',
  onNotPaid,
  onClose,
}: {
  /** "1 day", "Pro · 1 month". */
  what?: string;
  /** "₹7", as charged. */
  amount?: string;
  /** Pro or Max, not a day or a week. */
  plan?: boolean;
  /**
   * ONE PAGE FOR EVERY WAIT AFTER A PAYMENT (Nikhil, 19 Nov 2026). There used to
   * be three: this cover, a spinner in a row of the price list, and a system
   * pop-up. The page only changes its words:
   *
   *   'paid'      money has moved; the pass is being read back.
   *   'checking'  back from a UPI app with no word either way. It never says
   *               "Paid": the student may have cancelled there.
   *   'late'      money has moved and the bank has not confirmed in time. The
   *               page keeps asking; it used to be an alert over the price
   *               list, with Pay live under it.
   */
  mode?: 'paid' | 'checking' | 'late';
  /** 'checking' only: the student says they did not pay. Ends the wait. */
  onNotPaid?: () => void;
  /** 'late' only: leave the page. The pass still starts on its own. */
  onClose?: () => void;
}) {
  const { scale } = useScale();
  const [slow, setSlow] = useState(false);
  const [mayLeave, setMayLeave] = useState(false);
  useEffect(() => {
    setSlow(false);
    setMayLeave(false);
    const a = setTimeout(() => setSlow(true), SLOW_AFTER_MS);
    const b = setTimeout(() => setMayLeave(true), NOT_PAID_AFTER_MS);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [mode]);

  const title = mode === 'late' ? 'Your bank is still confirming' : 'Confirming your payment';
  const sub =
    mode === 'late'
      ? `This can take a few minutes. Your ${plan ? 'plan' : 'pass'} starts on its own. You don't need to pay again.`
      : mode === 'checking'
        ? slow
          ? 'Still checking with your bank. This can take up to 20 seconds.'
          : 'Checking with your bank. Please keep the app open.'
        : slow
          ? 'Still confirming. Banks can take up to a minute. Please keep the app open.'
          : 'This takes a few seconds. Please keep the app open.';
  const rows: [string, string][] = [
    ...(what ? [[plan ? 'Plan' : 'Pass', what] as [string, string]] : []),
    // "Paid" only once the money is known to have moved.
    ...(amount ? [[mode === 'checking' ? 'Amount' : 'Paid', amount] as [string, string]] : []),
    ['Status', mode === 'paid' ? 'Checking with your bank' : 'Waiting for your bank'],
  ];
  const way = mode === 'checking' && onNotPaid && mayLeave ? { label: "I didn't pay", go: onNotPaid } : mode === 'late' && onClose ? { label: 'Close', go: onClose } : null;

  return (
    <Animated.View entering={FadeIn.duration(180)} style={[StyleSheet.absoluteFill, styles.cover]} accessibilityViewIsModal>
      <StatusBar style="dark" />
      <PlanGlow height={scale(340)} />
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <View style={{ paddingHorizontal: scale(20), paddingTop: scale(72) }}>
          <TurningRing size={scale(60)} />
          <Text accessibilityRole="header" style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(26), lineHeight: scale(33), letterSpacing: scale(-0.6), color: colors.ink, marginTop: scale(26) }}>
            {title}
          </Text>
          {/* Two lines' room, as on the receipt, so the card does not move when the receipt's longer line arrives. */}
          <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(15), lineHeight: scale(22), minHeight: scale(44), color: colors.slate, marginTop: scale(8), marginBottom: scale(26) }}>{sub}</Text>
          <LightCard radius={scale(22)} scale={scale}>
            <View style={{ paddingHorizontal: scale(18) }}>
              {rows.map(([label, value], i) => (
                <View key={label} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: scale(15), borderTopWidth: i ? 1 : 0, borderTopColor: LIGHT.rule }}>
                  <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(14.5), color: colors.slate }}>{label}</Text>
                  <Text style={{ fontFamily: 'Onest_500Medium', fontSize: scale(14.5), color: colors.ink }}>{value}</Text>
                </View>
              ))}
            </View>
          </LightCard>
          {way ? (
            <Animated.View entering={FadeIn.duration(220)}>
              <Pressable onPress={way.go} hitSlop={12} accessibilityRole="button" style={({ pressed }) => ({ alignSelf: 'center', marginTop: scale(22), paddingVertical: scale(6), opacity: pressed ? 0.5 : 1 })}>
                <Text style={{ fontFamily: 'Onest_500Medium', fontSize: scale(14.5), color: colors.amberText }}>{way.label}</Text>
              </Pressable>
            </Animated.View>
          ) : null}
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cover: { backgroundColor: '#FFFFFF', zIndex: 10, elevation: 10 },
});

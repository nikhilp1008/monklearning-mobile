import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ObButton } from '@/components/onboarding-kit';
import { DoneMark, LIGHT, LightCard, PlanGlow } from '@/components/paywall/light';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { hapticTicked } from '@/lib/haptics';
import { endsAtFor, type PassKind } from '@/lib/pass';

/**
 * "YOUR PASS IS ACTIVE": THE ONE PAYMENT-CONFIRMED SCREEN.
 *
 * Shown after a pass is taken, whether by a new student at the end of
 * onboarding (app/(onboarding)/pass-active.tsx) or by an existing one from the
 * plans page (components/paywall/screens.tsx). Only the words that differ are
 * passed in.
 *
 * IT IS LIGHT, AND IT IS THE CONFIRMING PAGE WITH ITS ANSWER (Nikhil, C1,
 * 19 Nov 2026). It used to be a full night sky, the first dark screen after a
 * payment. Two things ended that: a new student has not chosen a teacher yet,
 * and the sky is the teacher's, so it must not appear before the next screen;
 * and the wait before this page (components/paywall/payment-confirming.tsx) is
 * drawn as this page with a turning ring, so the tick lands where the ring was
 * and the rest stays still. Keep the two files' spacing identical, or the page
 * jumps at the very moment it should feel settled.
 */
export function PassConfirmation({
  sub,
  rows,
  headline = 'Your pass is active.',
  buttonLabel,
  onPress,
  busy = false,
  error,
}: {
  /** "Your pass is active." or, for a plan, "You're on Pro." */
  headline?: string;
  /** The line under the headline. */
  sub: string;
  /** The receipt, label and value. */
  rows: [string, string][];
  buttonLabel: string;
  onPress: () => void;
  busy?: boolean;
  error?: string | null;
}) {
  const { scale } = useScale();

  // The Success tap, landing with the tick. Once: a moment, not a loop.
  useEffect(() => {
    const t = setTimeout(hapticTicked, 140);
    return () => clearTimeout(t);
  }, []);

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <PlanGlow height={scale(340)} />
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <View style={{ flex: 1, paddingHorizontal: scale(20), paddingTop: scale(72) }}>
          <Animated.View entering={ZoomIn.duration(320)} style={{ alignSelf: 'flex-start' }}>
            <DoneMark size={scale(60)} />
          </Animated.View>
          <Text accessibilityRole="header" style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(26), lineHeight: scale(33), letterSpacing: scale(-0.6), color: colors.ink, marginTop: scale(26) }}>
            {headline}
          </Text>
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
        </View>

        <View style={{ paddingHorizontal: scale(20), paddingBottom: scale(10), gap: scale(12) }}>
          {!!error && <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(13), lineHeight: scale(19), textAlign: 'center', color: '#DD4433' }}>{error}</Text>}
          {/* `busy`, not `disabled`: the label and fill hold and the arrow
              becomes a spinner, so the key does not empty the moment it is tapped. */}
          <ObButton label={buttonLabel} withArrow busy={busy} onPress={onPress} />
        </View>
      </SafeAreaView>
    </View>
  );
}

/** "16 Oct", or "16 Sept 2027" when the pass runs into another year. Read off
 *  the pass's own clock, so the receipt and the app agree on when it ends. */
export function activeTill(kind: PassKind, endsAt?: Date | null): string {
  // The server's own end when it is known. A pass bought while another is
  // running starts after it, so "today + the pass's length" would say the
  // wrong day to exactly the students who renew.
  const end = endsAt && !Number.isNaN(endsAt.getTime()) ? endsAt : endsAtFor({ kind, startedAt: new Date().toISOString() });
  const otherYear = end.getFullYear() !== new Date().getFullYear();
  return end.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    ...(otherYear ? { year: 'numeric' as const } : {}),
  });
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FFFFFF' },
});

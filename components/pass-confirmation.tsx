import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View, type LayoutChangeEvent } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Ring, Rise, Tick } from '@/components/confirm-motion';
import { NightSky } from '@/components/night-sky';
import { ObButton } from '@/components/onboarding-kit';
import { ob, obFont, useDesignScale } from '@/constants/onboarding';
import { hapticTicked } from '@/lib/haptics';
import { endsAtFor, type PassKind } from '@/lib/pass';

/**
 * "YOUR PASS IS ACTIVE": THE ONE PAYMENT-CONFIRMED SCREEN.
 *
 * Shown after a pass is taken, whether by a new student at the end of
 * onboarding (app/(onboarding)/pass-active.tsx) or by an existing one from the
 * plans page (components/paywall/screens.tsx). They used to be two screens
 * that had drifted: onboarding's on Home's night sky with the receipt on
 * Home's glass, the plans page's on a flat dark ground with a lighter
 * headline, "You're in.", and a button that did nothing. Now both are this
 * one, and only the words that differ are passed in.
 *
 * The dark ground marks the seam between paying and learning. It is Home's
 * night sky, drawn the same way, so the first dark screen after a payment is
 * a preview of the one the student lands on.
 */
export function PassConfirmation({
  sub,
  rows,
  buttonLabel,
  onPress,
  busy = false,
  error,
}: {
  /** The line under "Your pass is active." */
  sub: string;
  /** The receipt, label and value. */
  rows: [string, string][];
  buttonLabel: string;
  onPress: () => void;
  busy?: boolean;
  error?: string | null;
}) {
  const { ds, fs, tracking } = useDesignScale();
  const styles = useMemo(() => createStyles(ds, fs, tracking), [ds, fs, tracking]);
  const [sky, setSky] = useState({ width: 0, height: 0 });

  /**
   * The Success tap, landing with the tick. The tick pops 60ms in and
   * settles over the next 620 (see `Tick` in components/confirm-motion.tsx),
   * so the tap waits for the pop itself. Once: a moment, not a loop.
   */
  useEffect(() => {
    const t = setTimeout(hapticTicked, 140);
    return () => clearTimeout(t);
  }, []);

  return (
    <View
      style={styles.screen}
      onLayout={(e: LayoutChangeEvent) => {
        const { width, height } = e.nativeEvent.layout;
        setSky((p) => (p.width === width && p.height === height ? p : { width, height }));
      }}>
      <StatusBar style="light" />
      <NightSky width={sky.width} height={sky.height} style={StyleSheet.absoluteFillObject} />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.body}>
          <View style={styles.tickWrap}>
            <Ring size={ds(64)} delay={160} />
            <Ring size={ds(64)} delay={620} />
            <Tick size={ds(64)} />
          </View>

          <View style={styles.headBlock}>
            <Rise delay={300}>
              <Text style={styles.headline}>Your pass is active.</Text>
            </Rise>
            <Rise delay={420}>
              <Text style={styles.sub}>{sub}</Text>
            </Rise>
          </View>

          <View style={styles.ledger}>
            {rows.map(([label, value], i) => (
              <Rise key={label} delay={560 + i * 80}>
                <View style={[styles.row, i === 0 && styles.rowFirst]}>
                  <Text style={styles.rowLabel}>{label}</Text>
                  <Text style={styles.rowValue}>{value}</Text>
                </View>
              </Rise>
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          {!!error && <Text style={styles.error}>{error}</Text>}
          <Rise delay={900}>
            {/* `busy`, not `disabled`: the label and fill hold and the arrow
                becomes a spinner. `disabled` empties the button to an
                outline, which on this dark ground turned the cream button
                black the instant it was tapped. */}
            <ObButton label={buttonLabel} variant="cream" withArrow busy={busy} onPress={onPress} />
          </Rise>
        </View>
      </SafeAreaView>
    </View>
  );
}

/** "16 Oct", or "16 Sept 2027" when the pass runs into another year. Read off
 *  the pass's own clock, so the receipt and the app agree on when it ends. */
export function activeTill(kind: PassKind): string {
  const end = endsAtFor({ kind, startedAt: new Date().toISOString() });
  const otherYear = end.getFullYear() !== new Date().getFullYear();
  return end.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    ...(otherYear ? { year: 'numeric' as const } : {}),
  });
}

function createStyles(
  ds: (size: number) => number,
  fs: (size: number) => number,
  tracking: (em: number, fontSize: number) => number
) {
  return StyleSheet.create({
    // The sky's own fallback colour, for the frame before it is drawn.
    screen: { flex: 1, backgroundColor: '#2E2A24' },
    safeArea: { flex: 1 },
    body: { flex: 1, paddingHorizontal: ds(30), paddingTop: ds(56) },
    tickWrap: { width: ds(64), height: ds(64), alignItems: 'center', justifyContent: 'center' },
    headBlock: { marginTop: ds(30), gap: ds(14) },
    // Home's heading: semibold and tight.
    headline: {
      fontFamily: obFont.sb600,
      fontSize: fs(30),
      lineHeight: fs(34),
      letterSpacing: tracking(-0.035, 30),
      color: ob.cream,
    },
    sub: {
      fontFamily: obFont.r400,
      fontSize: fs(16),
      lineHeight: fs(24),
      color: 'rgba(255,253,248,.8)',
    },
    /**
     * Home's console glass: a dark tint over the sky, a paper hairline all
     * round and a brighter one along the top edge, and a soft drop. No blur —
     * the sky behind is a smooth still, and the tint is what the eye reads.
     */
    ledger: {
      marginTop: ds(36),
      paddingHorizontal: ds(18),
      paddingVertical: ds(4),
      borderRadius: ds(22),
      backgroundColor: 'rgba(26,24,20,.34)',
      boxShadow: [
        { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(255,253,248,.14)', inset: true },
        { offsetX: 0, offsetY: 1, blurRadius: 0, color: 'rgba(255,253,248,.10)', inset: true },
        { offsetX: 0, offsetY: ds(18), blurRadius: ds(36), spreadDistance: ds(-22), color: 'rgba(0,0,0,.6)' },
      ],
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: ds(14),
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: 'rgba(255,253,248,.12)',
    },
    rowFirst: { borderTopWidth: 0 },
    rowLabel: { fontFamily: obFont.r400, fontSize: fs(15), color: 'rgba(255,253,248,.6)' },
    rowValue: { fontFamily: obFont.sb600, fontSize: fs(15), color: ob.cream },
    footer: { paddingHorizontal: ds(30), paddingBottom: ds(16), gap: ds(12) },
    error: {
      fontFamily: obFont.r400,
      fontSize: fs(13),
      lineHeight: fs(19),
      textAlign: 'center',
      color: '#F3A6A0',
    },
  });
}

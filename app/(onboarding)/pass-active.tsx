// 10 "Your pass is active" — the last screen of onboarding.
//
// This is where the whole profile reaches the server, not the year screen it
// used to be. The pass screens were inserted after that step, so finishing on
// `class` would have written `display_name` and flipped the gate to
// "onboarded" while the student still had three screens to go — a reload
// mid-flow would have dropped them on Home with no pass.
//
// The dark ground is deliberate: it marks the seam between signing up and
// being a student. It is Home's night sky now — the same still, drawn the same
// way — with the receipt on Home's glass, so the first dark screen a student
// sees is a preview of the one they land on.
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Ring, Rise, Tick } from '@/components/confirm-motion';
import { NightSky } from '@/components/night-sky';
import { ObButton } from '@/components/onboarding-kit';
import {
  EXAMS,
  PASSES,
  ob,
  obFont,
  promoDiscount,
  rupees,
  useDesignScale,
  type ExamKey,
  type PassKey,
} from '@/constants/onboarding';
import { startPass } from '@/lib/pass';
import { hapticTicked } from '@/lib/haptics';

export default function PassActiveScreen() {
  const { ds, fs, tracking } = useDesignScale();
  const styles = useMemo(() => createStyles(ds, fs, tracking), [ds, fs, tracking]);

  const params = useLocalSearchParams<{ pass?: string; promo?: string; exam?: string }>();
  const passId = (PASSES.some((p) => p.id === params.pass) ? params.pass : 'week') as PassKey;
  const pass = PASSES.find((p) => p.id === passId) ?? PASSES[1];
  const exam = EXAMS[(params.exam as ExamKey) ?? 'jee'] ?? EXAMS.jee;
  const paid = Math.max(0, pass.price - promoDiscount(params.promo ?? '', pass.price));

  const [sky, setSky] = useState({ width: 0, height: 0 });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * The Success tap, landing with the tick.
   *
   * The tick pops 60ms in and settles over the next 620 (see `Tick` in
   * components/confirm-motion.tsx), so the tap waits for the pop itself
   * rather than firing on mount, before there is anything on screen to feel
   * it about. Once — this is a moment, not a loop.
   */
  useEffect(() => {
    const t = setTimeout(hapticTicked, 140);
    return () => clearTimeout(t);
  }, []);


  const till = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + (passId === 'day' ? 1 : 7));
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  }, [passId]);

  /**
   * THE RECEIPT IS NOT THE END OF THE FLOW ANY MORE.
   *
   * This screen used to write the profile and drop the student on Home. Two
   * screens follow it now — the teacher they will hear, and what the pass
   * opens — so the button reads "Continue" and this does the one thing that
   * belongs to the purchase: start the pass's clock, where it was bought.
   * The profile write and the handover to the app moved to the last of those
   * screens; see app/(onboarding)/inside.tsx.
   */
  const finish = async () => {
    if (saving) return;
    setSaving(true);
    setError(null);
    try {
      await startPass(passId, params.promo ?? null);
    } catch {
      setSaving(false);
      setError('Couldn’t start your pass. Check your connection and try again.');
      return;
    }
    router.push('/teacher');
  };

  const rows: [string, string][] = [
    ['Pass', `${pass.name}`],
    ['Exam', exam.name],
    ['Active till', till],
    ['Paid', rupees(paid)],
  ];

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
              {/* No teacher named: the student has not chosen one yet — that is
                  the very next screen, so this line points at it. */}
              <Text style={styles.sub}>
                {pass.name} of live classes, doubts and practice. Next, choose who teaches you.
              </Text>
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
            {/* `busy`, not `disabled`. The label holds and the fill holds;
                the arrow becomes a spinner and a second tap does nothing.
                `disabled` empties the button to an outline, which on this dark
                ground meant the cream button turned black the instant it was
                tapped. */}
            <ObButton
              label="Choose your teacher"
              variant="cream"
              withArrow
              busy={saving}
              onPress={finish}
            />
          </Rise>
        </View>
      </SafeAreaView>
    </View>
  );
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
    // Home's heading: semibold and tight, where the old receipt was light.
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

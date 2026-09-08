// 10 "Your pass is active" — the last screen of onboarding.
//
// This is where the whole profile reaches the server, not the year screen it
// used to be. The pass screens were inserted after that step, so finishing on
// `class` would have written `display_name` and flipped the gate to
// "onboarded" while the student still had three screens to go — a reload
// mid-flow would have dropped them on Home with no pass.
//
// The dark ground is deliberate and unique: it is the only dark screen in
// onboarding, and it marks the seam between signing up and being a student.
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

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
import { revalidateAuthState } from '@/lib/auth';
import { pushProfile } from '@/lib/profile';

/** `mkRise` — 14px up, fading in. The handoff staggers the receipt rows out of
 *  the headline; each row gets its own delay. */
function Rise({ delay, children }: { delay: number; children: React.ReactNode }) {
  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const run = Animated.timing(anim, {
      toValue: 1,
      duration: 480,
      delay,
      easing: Easing.bezier(0.2, 0.85, 0.2, 1),
      useNativeDriver: true,
    });
    run.start();
    return () => run.stop();
  }, [anim, delay]);
  return (
    <Animated.View
      style={{
        opacity: anim,
        transform: [{ translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [14, 0] }) }],
      }}>
      {children}
    </Animated.View>
  );
}

/** The tick pops out of nothing at 1.08 before settling — `mkPop`. */
function Tick({ size }: { size: number }) {
  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const run = Animated.timing(anim, {
      toValue: 1,
      duration: 620,
      delay: 60,
      easing: Easing.bezier(0.2, 0.9, 0.2, 1),
      useNativeDriver: true,
    });
    run.start();
    return () => run.stop();
  }, [anim]);
  return (
    <Animated.View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: ob.amber,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: anim,
        transform: [
          { scale: anim.interpolate({ inputRange: [0, 0.62, 1], outputRange: [0.5, 1.08, 1] }) },
        ],
      }}>
      <Svg viewBox="0 0 24 24" width={size * 0.46} height={size * 0.46} fill="none">
        <Path
          d="M5 12.5l4.5 4.5L19 7.5"
          stroke={ob.ink}
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Animated.View>
  );
}

export default function PassActiveScreen() {
  const { ds, fs, tracking } = useDesignScale();
  const styles = useMemo(() => createStyles(ds, fs, tracking), [ds, fs, tracking]);

  const params = useLocalSearchParams<{ pass?: string; promo?: string; exam?: string }>();
  const passId = (PASSES.some((p) => p.id === params.pass) ? params.pass : 'week') as PassKey;
  const pass = PASSES.find((p) => p.id === passId) ?? PASSES[1];
  const exam = EXAMS[(params.exam as ExamKey) ?? 'jee'] ?? EXAMS.jee;
  const paid = Math.max(0, pass.price - promoDiscount(params.promo ?? '', pass.price));

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const till = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + (passId === 'day' ? 1 : 7));
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  }, [passId]);

  const finish = async () => {
    if (saving) return;
    setSaving(true);
    setError(null);
    try {
      await pushProfile();
    } catch {
      // Do NOT wave them through. Without this write there is no
      // `display_name` on the server, so every later launch reads as "never
      // onboarded" and sends them round again — a loop they cannot escape and
      // we would never hear about. Better to stop here, where retrying costs
      // one tap.
      setSaving(false);
      setError('Couldn’t save your details. Check your connection and try again.');
      return;
    }
    // The gate still believes onboarding is owed — it recomputes on Supabase
    // auth events and this was a write to `profiles`. Awaited before navigating
    // so the tabs are never asked to paint while the answer is still the old
    // one.
    await revalidateAuthState();
    router.replace('/(tabs)');
  };

  const rows: [string, string][] = [
    ['Pass', `${pass.name}`],
    ['Exam', exam.name],
    ['Active till', till],
    ['Paid', rupees(paid)],
  ];

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.body}>
          <Tick size={ds(64)} />

          <View style={styles.headBlock}>
            <Rise delay={300}>
              <Text style={styles.headline}>Your pass is active.</Text>
            </Rise>
            <Rise delay={420}>
              <Text style={styles.sub}>
                {exam.name === 'Both' ? 'Drona' : 'Drona'} is at the board. Pick a chapter and the
                class begins.
              </Text>
            </Rise>
          </View>

          <View style={styles.ledger}>
            {rows.map(([label, value], i) => (
              <Rise key={label} delay={560 + i * 80}>
                <View style={[styles.row, i === rows.length - 1 && styles.rowLast]}>
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
            <ObButton
              label={saving ? 'Saving…' : 'Start learning'}
              variant="cream"
              withArrow={!saving}
              disabled={saving}
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
    screen: { flex: 1, backgroundColor: ob.night },
    safeArea: { flex: 1 },
    body: { flex: 1, paddingHorizontal: ds(30), paddingTop: ds(56) },
    headBlock: { marginTop: ds(30), gap: ds(14) },
    headline: {
      fontFamily: obFont.r400,
      fontSize: fs(32),
      lineHeight: fs(36),
      letterSpacing: tracking(-0.03, 32),
      color: ob.cream,
    },
    sub: {
      fontFamily: obFont.r400,
      fontSize: fs(17),
      lineHeight: fs(25),
      color: ob.onNight,
    },
    ledger: { marginTop: ds(42) },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: ds(14),
      borderTopWidth: 1,
      borderTopColor: ob.nightRule,
    },
    rowLast: { borderBottomWidth: 1, borderBottomColor: ob.nightRule },
    rowLabel: { fontFamily: obFont.r400, fontSize: fs(15), color: ob.onNightDim },
    rowValue: { fontFamily: obFont.m500, fontSize: fs(15), color: ob.cream },
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

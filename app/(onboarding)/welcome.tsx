// 01 Welcome — pixel replica of design_handoff_onboarding_flow
// `design/Onboarding Final v2.dc.html`, frame data-screen-label="01 Welcome".
// Every number below is a raw design px off that markup, passed through ds().
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, FadeInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LeaderRow, ObButton } from '@/components/onboarding-kit';
import { ob, obFont, useDesignScale, WELCOME_1_VEIL } from '@/constants/onboarding';

// Spec list, in order, verbatim from the markup.
const SPEC_ROWS = [
  { label: 'Exams', value: 'JEE Main · NEET UG' },
  { label: 'Subjects', value: 'Phy · Chem · Maths · Bio' },
  { label: 'Teachers', value: 'Drona · Vedha' },
  { label: 'Languages', value: 'English · Hinglish' },
  { label: 'Doubts', value: 'Unlimited, any hour' },
  { label: 'Practice questions', value: 'Unlimited' },
] as const;

// `rise` — opacity 0 -> 1, translateY 14px -> 0, .7s ease.
// CSS `ease` is cubic-bezier(.25,.1,.25,1); Reanimated's Easing.ease is not
// the same curve, so the bezier is spelled out.
const CSS_EASE = Easing.bezier(0.25, 0.1, 0.25, 1);

export default function WelcomeScreen() {
  const { ds, tracking } = useDesignScale();
  const styles = useMemo(() => createStyles(ds, tracking), [ds, tracking]);

  const rise = useMemo(
    () =>
      FadeInDown.duration(700)
        .easing(CSS_EASE)
        .withInitialValues({ opacity: 0, transform: [{ translateY: ds(14) }] }),
    [ds]
  );

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />

      {/* object-fit:cover; object-position:56% center */}
      <Image
        source={require('@/assets/images/welcome-01-scan-doubt.png')}
        style={StyleSheet.absoluteFill}
        contentFit="cover"
        contentPosition={{ left: '56%', top: '50%' }}
      />
      <LinearGradient
        colors={[...WELCOME_1_VEIL.colors]}
        locations={[...WELCOME_1_VEIL.locations]}
        style={StyleSheet.absoluteFill}
      />

      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.topBlock}>
          <Animated.View entering={rise} style={styles.headlineBlock}>
            <Text style={styles.headline}>
              The last study app{'\n'}for <Text style={styles.headlineBold}>JEE</Text> and{' '}
              <Text style={styles.headlineBold}>NEET</Text> exams.
            </Text>
          </Animated.View>
        </View>

        {/* margin-top:auto — the middle of the frame absorbs height differences */}
        <View style={styles.bottomBlock}>
          <View style={styles.specList}>
            {SPEC_ROWS.map((row) => (
              <LeaderRow
                key={row.label}
                label={row.label}
                value={row.value}
                tone="cream"
                labelSize={15}
                valueSize={15}
              />
            ))}
          </View>

          <View style={styles.footer}>
            <View style={styles.pills}>
              <View style={[styles.pill, styles.pillActive]} />
              <View style={[styles.pill, styles.pillIdle]} />
            </View>
            <ObButton label="Next" variant="cream" onPress={() => router.push('/welcome-2')} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

function createStyles(
  ds: (size: number) => number,
  tracking: (em: number, fontSize: number) => number
) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#EEE9DB',
    },
    safeArea: {
      flex: 1,
    },
    // The frame's first column child: `padding-bottom:30px`.
    topBlock: {
      paddingBottom: ds(30),
    },
    // `padding:26px 34px 0`
    headlineBlock: {
      paddingTop: ds(26),
      paddingHorizontal: ds(34),
    },
    // 44px / 600 / lh 1.02 / -.035em / #FBF9F2 + text-shadow 0 2px 18px
    headline: {
      fontFamily: obFont.sb600,
      fontSize: ds(44),
      lineHeight: ds(44 * 1.02),
      letterSpacing: tracking(-0.035, 44),
      color: ob.cream,
      textShadowColor: ob.headlineShadow,
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 18,
    },
    headlineBold: {
      fontFamily: obFont.xb800,
    },
    bottomBlock: {
      marginTop: 'auto',
    },
    // `padding:30px 34px 0; gap:11px`
    specList: {
      paddingTop: ds(30),
      paddingHorizontal: ds(34),
      gap: ds(11),
    },
    // `padding:0 34px 34px`
    footer: {
      paddingHorizontal: ds(34),
      paddingBottom: ds(34),
    },
    // `margin:22px 0 20px; gap:8px`
    pills: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: ds(8),
      marginTop: ds(22),
      marginBottom: ds(20),
    },
    pill: {
      height: ds(6),
      borderRadius: ds(3),
    },
    pillActive: {
      width: ds(22),
      backgroundColor: ob.cream,
    },
    pillIdle: {
      width: ds(6),
      backgroundColor: ob.creamPillIdle,
    },
  });
}

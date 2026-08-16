// 02 A personal teacher — pixel replica of design_handoff_onboarding_flow
// `design/Onboarding Final v2.dc.html`, frame data-screen-label="02 A personal
// teacher". Every number below is a raw design px off that markup, via ds().
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, FadeInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ObButton } from '@/components/onboarding-kit';
import { ob, obFont, useDesignScale, WELCOME_2_VEIL } from '@/constants/onboarding';

// Kept as JS strings so the apostrophe in "exam's" stays a real typographic
// character without tripping eslint's react/no-unescaped-entities.
const FEATURES = [
  {
    index: '01',
    title: 'A class you can interrupt',
    subtitle: 'On a real board, in English or Hinglish',
  },
  {
    index: '02',
    title: 'Any doubt, photographed',
    subtitle: 'Taught step by step, not just answered',
  },
  {
    index: '03',
    title: 'Practice that never runs out',
    subtitle: 'Every next question tuned to your level',
  },
  {
    index: '04',
    title: 'Every chapter, already taught',
    subtitle: 'Open a lesson and the board comes alive',
  },
  {
    index: '05',
    title: 'One score that moves on proof',
    subtitle: "Timed silently against the exam's budget",
  },
] as const;

// `rise` — opacity 0 -> 1, translateY 14px -> 0, .7s ease (CSS `ease`).
const CSS_EASE = Easing.bezier(0.25, 0.1, 0.25, 1);

export default function WelcomeTwoScreen() {
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

      {/* object-fit:cover; object-position:center 36% */}
      <Image
        source={require('@/assets/images/welcome-02-ask-doubt.png')}
        style={StyleSheet.absoluteFill}
        contentFit="cover"
        contentPosition={{ left: '50%', top: '36%' }}
      />
      <LinearGradient
        colors={[...WELCOME_2_VEIL.colors]}
        locations={[...WELCOME_2_VEIL.locations]}
        style={StyleSheet.absoluteFill}
      />

      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        {/* `margin-top:26px; padding:0 34px` */}
        <Animated.View entering={rise} style={styles.headlineBlock}>
          <Text style={styles.headline}>
            <Text style={styles.headlineBold}>AI personal teacher</Text>,{'\n'}just for you.
          </Text>
        </Animated.View>

        {/* margin-top:auto — the middle of the frame absorbs height differences */}
        <View style={styles.listBlock}>
          <View style={styles.list}>
            {FEATURES.map((feature) => (
              <View key={feature.index} style={styles.row}>
                <Text style={styles.rowIndex}>{feature.index}</Text>
                <View style={styles.rowBody}>
                  <Text style={styles.rowTitle}>{feature.title}</Text>
                  <Text style={styles.rowSubtitle}>{feature.subtitle}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* `padding:26px 34px 34px` */}
        <View style={styles.footer}>
          <View style={styles.pills}>
            <View style={[styles.pill, styles.pillIdle]} />
            <View style={[styles.pill, styles.pillActive]} />
          </View>
          <ObButton label="Get started" variant="cream" onPress={() => router.push('/phone')} />
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
    headlineBlock: {
      marginTop: ds(26),
      paddingHorizontal: ds(34),
    },
    // 46px / 600 / lh 1.02 / -.035em / #FBF9F2 + text-shadow 0 2px 18px
    headline: {
      fontFamily: obFont.sb600,
      fontSize: ds(46),
      lineHeight: ds(46 * 1.02),
      letterSpacing: tracking(-0.035, 46),
      color: ob.cream,
      textShadowColor: ob.headlineShadow,
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 18,
    },
    headlineBold: {
      fontFamily: obFont.xb800,
    },
    // `margin-top:auto; padding:0 34px`
    listBlock: {
      marginTop: 'auto',
      paddingHorizontal: ds(34),
    },
    // `border-top:1px solid rgba(251,249,242,.24)`
    list: {
      borderTopWidth: 1,
      borderTopColor: ob.creamRule,
    },
    // grid 28px 1fr, gap 14px, padding 13px 0, hairline under each row
    row: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: ds(14),
      paddingVertical: ds(13),
      borderBottomWidth: 1,
      borderBottomColor: ob.creamRule,
    },
    rowIndex: {
      width: ds(28),
      fontFamily: obFont.sb600,
      fontSize: ds(15),
      color: ob.amberLight,
    },
    rowBody: {
      flex: 1,
    },
    rowTitle: {
      fontFamily: obFont.sb600,
      fontSize: ds(18),
      color: ob.cream,
    },
    rowSubtitle: {
      marginTop: ds(1),
      fontFamily: obFont.r400,
      fontSize: ds(15),
      color: ob.creamDim,
    },
    // `padding:26px 34px 34px`
    footer: {
      paddingTop: ds(26),
      paddingHorizontal: ds(34),
      paddingBottom: ds(34),
    },
    // `gap:8px; margin-bottom:20px`
    pills: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: ds(8),
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

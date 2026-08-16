import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo } from 'react';
import { Pressable, StyleSheet, Text, View, type ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path, Text as SvgText } from 'react-native-svg';

import { ProtractorMark } from '@/components/protractor-mark';
import { colors } from '@/constants/brand';
import { useLandscapeScale } from '@/constants/scale';
import { useLandscapeLock } from '@/hooks/use-landscape-lock';

const LOOP_MS = 3400;

export default function EnteringLessonScreen() {
  useLandscapeLock();
  const params = useLocalSearchParams<{ chapterTitle?: string }>();
  const chapterTitle = params.chapterTitle ?? 'Kinematics · Relative velocity';
  const { scale, verticalScale } = useLandscapeScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const goToLesson = () =>
    router.replace({
      pathname: '/lesson-player',
      params: { chapterTitle },
    });

  useEffect(() => {
    const id = setTimeout(goToLesson, LOOP_MS);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Pressable style={styles.screen} onPress={goToLesson}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['rgba(238,163,31,.12)', 'rgba(238,163,31,0)']}
        start={{ x: 0.5, y: 0.3 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFillObject}
        pointerEvents="none"
      />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.content}>
          <LessonProtractor size={scale(118)} />
          <View style={styles.textBlock}>
            <View style={styles.chapterChip}>
              <View style={styles.chapterDot} />
              <Text style={styles.chapterChipText}>{chapterTitle}</Text>
            </View>
            <Text style={styles.heading}>Opening your lesson</Text>
            <View style={styles.statusRow}>
              <BlinkDots style={styles.dotsRow} dotStyle={styles.blinkDot} />
              <Text style={styles.statusText}>Drona is queuing the board…</Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerHint}>
            Jump between topics anytime — open Topics in the dock.
          </Text>
        </View>
      </SafeAreaView>
    </Pressable>
  );
}

// Static two-ring protractor mark (matches the source markup's fully-drawn,
// non-animated state) with the small red −90° reference arc + label
// overlaid on top — unlike entering-classroom.tsx's animated construction
// loader, this screen's own markup has no `animation` property anywhere on
// the SVG, so nothing here is driven by Reanimated.
function LessonProtractor({ size }: { size: number }) {
  return (
    <View style={{ width: size, height: size }}>
      <ProtractorMark size={size} ringColor={colors.paper} dotColor={colors.marigold} />
      <Svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        style={StyleSheet.absoluteFillObject}>
        <Path
          d="M112,60 A52,52 0 0 0 60,8"
          fill="none"
          stroke={colors.red}
          strokeWidth={1.4}
        />
        <SvgText x={102} y={22} fontFamily="Kalam_400Regular" fontSize={9} fill={colors.marigold}>
          {'−90°'}
        </SvgText>
      </Svg>
    </View>
  );
}

// Synchronized "blink" loading dots: opacity 1 → 0.2 → 1 on a 1200ms
// ease loop, staggered 0ms/250ms/500ms — a literal translation of the
// source markup's `animation:mlBlink 1.2s ease <delay> infinite` (keyframe
// `@keyframes mlBlink{50%{opacity:.2}}`). Deliberately independent per-dot
// timelines (withDelay + withRepeat) rather than entering-classroom.tsx's
// BouncingDots, which drives all three dots off one shared phase-shifted
// progress value — a different, smoother wave shape than this screen's
// literal markup calls for.
function BlinkDots({ style, dotStyle }: { style: ViewStyle; dotStyle: ViewStyle }) {
  return (
    <View style={style}>
      <BlinkDot delay={0} style={dotStyle} />
      <BlinkDot delay={250} style={dotStyle} />
      <BlinkDot delay={500} style={dotStyle} />
    </View>
  );
}

function BlinkDot({ delay, style }: { delay: number; style: ViewStyle }) {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(0.2, { duration: 600, easing: Easing.ease }),
          withTiming(1, { duration: 600, easing: Easing.ease }),
        ),
        -1,
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay]);

  const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));

  return <Animated.View style={[style, animatedStyle]} />;
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#16130E',
    },
    safeArea: {
      flex: 1,
    },
    content: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(48),
      paddingHorizontal: scale(56),
    },
    textBlock: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: verticalScale(13),
      minWidth: 0,
    },
    chapterChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,.16)',
      backgroundColor: 'rgba(255,255,255,.05)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(16),
    },
    chapterDot: {
      width: scale(7),
      height: scale(7),
      borderRadius: scale(3.5),
      backgroundColor: colors.marigold,
    },
    chapterChipText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      // Chip text has no explicit color in the source markup, so it
      // inherits the outer canvas's `color:#EFEBDD` rather than pure white
      // (only the h2 and battery-mock spans set an explicit #fff).
      color: '#EFEBDD',
    },
    heading: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(27),
      letterSpacing: scale(-0.54),
      color: '#fff',
    },
    statusRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
    },
    dotsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(7),
    },
    blinkDot: {
      width: scale(8),
      height: scale(8),
      borderRadius: scale(4),
      backgroundColor: colors.marigold,
    },
    statusText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: '#C7C1B3',
    },
    footer: {
      flexShrink: 0,
      alignItems: 'center',
      paddingBottom: verticalScale(12),
    },
    footerHint: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: '#938d80',
    },
  });
}

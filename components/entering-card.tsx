import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Defs, G, Line, RadialGradient, Stop } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useLandscapeScale } from '@/constants/scale';

/**
 * The card a student watches while their class is being built.
 *
 * Lifted out of `app/entering-classroom.tsx` unchanged — every value here is the
 * one that screen already shipped. It lives in `components/` now because it is
 * rendered from two routes: `entering-classroom` owns the first half of the wait
 * (`session/start`, `scope`) and `live-classroom` overlays the same card over its
 * blank board for the second half (socket, first turn), so the student sees one
 * continuous surface instead of two static loaders either side of a route change.
 *
 * For that to hold, `live-classroom` must be registered with `animation: 'fade'`
 * in `app/_layout.tsx` — the default push animation slides, and the card would
 * visibly jump at the boundary.
 */
export function EnteringCardScreen({
  chapterTitle,
  statusText,
}: {
  chapterTitle: string;
  statusText: string;
}) {
  const { scale, verticalScale } = useLandscapeScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['rgba(238,163,31,.12)', 'rgba(238,163,31,0)']}
        start={{ x: 0.5, y: 0.3 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFillObject}
        pointerEvents="none"
      />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.content}>
          <ProtractorLoader size={scale(118)} />
          <View style={styles.textBlock}>
            <View style={styles.chapterChip}>
              <View style={styles.chapterDot} />
              <Text style={styles.chapterChipText}>{chapterTitle}</Text>
            </View>
            <Text style={styles.heading} numberOfLines={1}>
              Entering your classroom
            </Text>
            {/* The one line on this screen that changes. Announced politely for
                the same reason snap-loading announces its stages: without it a
                screen reader hears the heading once and then silence for the
                whole wait. */}
            <View
              style={styles.statusRow}
              accessibilityLiveRegion="polite"
              accessibilityRole="text">
              <BouncingDots />
              <StatusLine key={statusText} style={styles.statusText} text={statusText} />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerHint}>
            Tip: you can interrupt Drona any time — just tap raise hand.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

/** Fades up as it replaces the line before it — remounted per line via `key`. */
function StatusLine({ style, text }: { style: object; text: string }) {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withTiming(1, { duration: 300, easing: Easing.out(Easing.cubic) });
  }, [progress]);
  const animated = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: interpolate(progress.value, [0, 1], [6, 0]) }],
  }));
  return (
    <Animated.View style={animated}>
      <Text style={style}>{text}</Text>
    </Animated.View>
  );
}

function BouncingDots() {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 1200, easing: Easing.ease }), -1);
  }, [progress]);

  return (
    <View style={dotStyles.row}>
      <Dot progress={progress} delay={0} />
      <Dot progress={progress} delay={0.21} />
      <Dot progress={progress} delay={0.42} />
    </View>
  );
}

function Dot({ progress, delay }: { progress: SharedValue<number>; delay: number }) {
  const style = useAnimatedStyle(() => {
    'worklet';
    const t = (progress.value + delay) % 1;
    const opacity =
      t < 0.5 ? interpolate(t, [0, 0.5], [1, 0.2]) : interpolate(t, [0.5, 1], [0.2, 1]);
    return { opacity };
  });
  return <Animated.View style={[dotStyles.dot, style]} />;
}

/**
 * The loading mark. Two things were wrong with the version this replaces.
 *
 * The logo was incomplete for most of its cycle: the amber centre dot only
 * existed between 50% and 90% of a 6.5s loop, so more than half the time the
 * brand mark was two rings and a hole. It is now painted every frame, exactly
 * as components/protractor-mark.tsx draws it — outer ring, inner ring, dot.
 *
 * And it felt heavy because it was a construction: ticks faded in, each ring
 * swept into place, two red arcs drew themselves, two angle labels appeared
 * and left, the dot popped at 1.45x — then the whole thing faded to nothing
 * and started again from an empty frame. That restart is the stutter.
 *
 * Now nothing is built or erased. The mark is whole and simply turns: the
 * outer ring one way, the inner ring slower and the other way, the dot still
 * at the centre. Both rotations are continuous, so there is no seam to loop
 * across, and a protractor turning is what the instrument does anyway.
 */
function ProtractorLoader({ size }: { size: number }) {
  const outer = useSharedValue(0);
  const inner = useSharedValue(0);
  const breath = useSharedValue(0);

  useEffect(() => {
    // Linear and continuous: an eased spin would visibly hesitate once per
    // turn, which is the heaviness this is meant to remove.
    outer.value = withRepeat(withTiming(1, { duration: 9000, easing: Easing.linear }), -1);
    inner.value = withRepeat(withTiming(1, { duration: 14000, easing: Easing.linear }), -1);
    breath.value = withRepeat(
      withTiming(1, { duration: 2600, easing: Easing.inOut(Easing.ease) }),
      -1,
      true
    );
  }, [outer, inner, breath]);

  const outerStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${-90 + outer.value * 360}deg` }],
  }));
  const innerStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${-30 - inner.value * 360}deg` }],
  }));
  const glowStyle = useAnimatedStyle(() => ({
    opacity: 0.35 + breath.value * 0.3,
  }));

  const ticks = Array.from({ length: 12 }, (_, i) => i * 30);

  return (
    <View style={{ width: size, height: size }}>
      {/* A slow amber breath behind the mark — the only thing on this screen
          that changes brightness, and it never restarts. */}
      <Animated.View style={[StyleSheet.absoluteFill, glowStyle]} pointerEvents="none">
        <Svg width={size} height={size} viewBox="0 0 120 120">
          <Defs>
            <RadialGradient id="loaderGlow" cx="50%" cy="50%" r="50%">
              <Stop offset="0" stopColor={colors.marigold} stopOpacity={0.34} />
              <Stop offset="1" stopColor={colors.marigold} stopOpacity={0} />
            </RadialGradient>
          </Defs>
          <Circle cx={60} cy={60} r={58} fill="url(#loaderGlow)" />
        </Svg>
      </Animated.View>

      {/* The protractor's bezel, static. It reads as the instrument's scale;
          animating it was noise. */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <Svg width={size} height={size} viewBox="0 0 120 120">
          <G stroke="#55524A" strokeWidth={1.2} opacity={0.5}>
            {ticks.map((angle) => (
              <Line
                key={angle}
                x1={60}
                y1={12}
                x2={60}
                y2={16}
                transform={angle ? `rotate(${angle} 60 60)` : undefined}
              />
            ))}
          </G>
        </Svg>
      </View>

      <Animated.View style={[StyleSheet.absoluteFill, outerStyle]} pointerEvents="none">
        <Svg width={size} height={size} viewBox="0 0 120 120">
          <Circle
            cx={60}
            cy={60}
            r={36}
            fill="none"
            stroke="#FCFAF4"
            strokeWidth={11}
            strokeLinecap="round"
            strokeDasharray="52 23.4"
          />
        </Svg>
      </Animated.View>

      <Animated.View style={[StyleSheet.absoluteFill, innerStyle]} pointerEvents="none">
        <Svg width={size} height={size} viewBox="0 0 120 120">
          <Circle
            cx={60}
            cy={60}
            r={19}
            fill="none"
            stroke="#FCFAF4"
            strokeWidth={9}
            strokeLinecap="round"
            strokeDasharray="21.8 18"
          />
        </Svg>
      </Animated.View>

      {/* The dot the mark was missing. Always here, never animated. */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <Svg width={size} height={size} viewBox="0 0 120 120">
          <Circle cx={60} cy={60} r={6} fill={colors.marigold} />
        </Svg>
      </View>
    </View>
  );
}

const dotStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EEA31F',
  },
});

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#16130E',
    },
    safeArea: {
      flex: 1,
    },
    // The mark and the text are one centred pair. The text block is capped
    // so a longer chapter name can't drag the pair off centre or push the
    // mark towards the edge — the composition holds still whatever the
    // chapter is called.
    content: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(40),
      paddingHorizontal: scale(56),
    },
    textBlock: {
      flexShrink: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: verticalScale(12),
      minWidth: 0,
      maxWidth: scale(420),
    },
    chapterChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      alignSelf: 'flex-start',
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
      color: '#EFEBDD',
    },
    heading: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(27),
      letterSpacing: scale(-0.54),
      color: '#EFEBDD',
    },
    statusRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
    },
    statusText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: '#C7C1B3',
    },
    footer: {
      alignItems: 'center',
      paddingBottom: verticalScale(12),
    },
    footerHint: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: '#938D80',
    },
  });
}

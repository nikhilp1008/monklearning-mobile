import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { NightSky } from '@/components/night-sky';
import { VideosReelArt } from '@/components/videos-reel-art';
import { useTeacherId } from '@/components/states';
import { colors } from '@/constants/brand';
import { pageTitle } from '@/constants/page-title';
import { useScale } from '@/constants/scale';
import { SKY_THEMES } from '@/constants/teachers';

/**
 * VIDEOS — coming soon (Nikhil, 9 Nov 2026).
 *
 * The tab will be a feed of short concept reels, swiped up one after another,
 * each followed by the real past-year questions on it. Until it is ready the
 * tab is ONE still screen with nothing to tap: no previews, no list. It looks
 * like what is coming (a tall reel in the teacher's sky, with a swipe-up cue
 * drifting at its edge) and says what it will be, to make a student curious.
 */
export default function VideosScreen() {
  const { scale } = useScale();
  const styles = useMemo(() => createStyles(scale), [scale]);
  const teacher = useTeacherId();
  const reduce = useReducedMotion();
  const [size, setSize] = useState({ w: 0, h: 0 });
  /** The room between the pill and the words, for the moving diagram. */
  const [gap, setGap] = useState({ w: 0, h: 0 });
  const artSize = Math.max(0, Math.min(gap.w - scale(96), gap.h - scale(40), scale(300)));
  const rise = scale(22);

  /** The swipe-up cue drifts up and fades, again and again. */
  const t = useSharedValue(0);
  useEffect(() => {
    if (reduce) return;
    t.value = withRepeat(withTiming(1, { duration: 1800, easing: Easing.out(Easing.cubic) }), -1, false);
  }, [reduce, t]);
  const drift = useAnimatedStyle(() => ({
    opacity: reduce ? 0.8 : 1 - t.value * 0.85,
    transform: [{ translateY: reduce ? 0 : -t.value * rise }],
  }));

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.heading}>Videos</Text>
      </View>

      <View
        style={styles.reel}
        accessible
        accessibilityLabel="Videos are coming soon. Concepts in a minute, then the real past-year questions."
        onLayout={(e) => setSize({ w: Math.round(e.nativeEvent.layout.width), h: Math.round(e.nativeEvent.layout.height) })}>
        <NightSky width={size.w} height={size.h} theme={SKY_THEMES[teacher]} style={StyleSheet.absoluteFillObject} />

        <View style={styles.soonPill}>
          <View style={styles.soonDot} />
          <Text style={styles.soonText}>Coming soon</Text>
        </View>

        {/* The cue: what the tab will feel like, swiping up to the next one. */}
        <View style={styles.cue} pointerEvents="none">
          <Animated.View style={drift}>
            <Svg viewBox="0 0 24 24" width={scale(22)} height={scale(22)} fill="none">
              <Path d="M6 14l6-6 6 6" stroke="#FFFDF8" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
            </Svg>
          </Animated.View>
          <View style={styles.cueTrack}>
            <View style={styles.cueThumb} />
          </View>
        </View>

        <View
          style={styles.gap}
          pointerEvents="none"
          onLayout={(e) => setGap({ w: e.nativeEvent.layout.width, h: e.nativeEvent.layout.height })}>
          <VideosReelArt size={artSize} captionStyle={styles.caption} />
        </View>

        <View style={styles.copy}>
          <Text style={styles.title}>The concept in a minute.{'\n'}Then the real question.</Text>
          <Text style={styles.line}>
            Short reels on the ideas JEE and NEET keep coming back to, each followed by the real past-year questions on it.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

function createStyles(scale: (n: number) => number) {
  return StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#fff' },
    header: {
      paddingTop: scale(12),
      paddingHorizontal: scale(24),
      minHeight: scale(40),
      justifyContent: 'center',
    },
    heading: pageTitle(scale),
    /** A tall reel, the shape of what this tab will be, filling the page
     *  down to just above the tab bar. */
    reel: {
      flex: 1,
      marginTop: scale(16),
      marginHorizontal: scale(16),
      marginBottom: scale(116),
      borderRadius: scale(28),
      overflow: 'hidden',
    },
    soonPill: {
      position: 'absolute',
      top: scale(18),
      left: scale(18),
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      height: scale(30),
      paddingHorizontal: scale(12),
      borderRadius: scale(15),
      backgroundColor: 'rgba(255,253,248,.12)',
      borderWidth: 1,
      borderColor: 'rgba(251,221,160,.35)',
    },
    soonDot: { width: scale(6), height: scale(6), borderRadius: scale(3), backgroundColor: colors.paleGold },
    soonText: { fontFamily: 'Onest_600SemiBold', fontSize: scale(13), color: colors.paleGold },
    cue: {
      position: 'absolute',
      right: scale(18),
      top: '34%',
      alignItems: 'center',
      gap: scale(10),
    },
    cueTrack: {
      width: scale(4),
      height: scale(56),
      borderRadius: scale(2),
      backgroundColor: 'rgba(255,253,248,.18)',
    },
    cueThumb: { width: scale(4), height: scale(18), borderRadius: scale(2), backgroundColor: 'rgba(255,253,248,.85)' },
    /** The middle of the reel, under the pill and above the words. */
    gap: {
      flex: 1,
      marginTop: scale(60),
      alignItems: 'center',
      justifyContent: 'center',
    },
    caption: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      lineHeight: scale(16),
      letterSpacing: scale(1),
      color: colors.paleGold,
    },
    copy: {
      paddingLeft: scale(22),
      paddingRight: scale(54),
      paddingBottom: scale(26),
      gap: scale(10),
    },
    title: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(24),
      lineHeight: scale(30),
      letterSpacing: scale(-0.5),
      color: '#FFFDF8',
    },
    line: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: 'rgba(255,253,248,.78)',
    },
  });
}

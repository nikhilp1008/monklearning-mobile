import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
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

/**
 * Snap a doubt — loading state, ported from the 2C "full bleed" design in
 * snap-loading-2c/ (README, snap-loading.html, snap-loading.css).
 *
 * Three layers, back to front: the student's own photo, the scan (detected
 * line outlines plus a sweeping gradient), and a scrim that darkens behind the
 * chrome and footer while leaving the middle of the photo visible.
 *
 * Sizing follows the design's own 430pt reference rather than the app's usual
 * 390pt scale, so proportions land exactly as drawn on any width.
 */

const DESIGN_WIDTH = 430;

const INK = '#0B0A09';
const PAPER = '#1E1B16';
const CREAM = '#F7F5EC';
const CREAM_DIM = '#9B958A';
const CREAM_QUIET = '#C9C3B4';
const AMBER = '#EEA31F';

/** One sequence for every doubt, whatever the subject — the design's copy,
 *  naming the move a teacher would be making at that second. */
export const SNAP_STAGES = [
  'Reading your photo',
  'Understanding the question',
  'Working out the method',
  'Writing the steps',
  'Checking the answer',
] as const;

const STAGE_HOLD_MS = 2400;
const SCAN_DURATION_MS = 3000;
const SWEEP_HEIGHT = 280;
/** Past this, the ETA line is replaced with reassurance rather than a promise
 *  the solve has already broken. */
const LONG_WAIT_MS = 20000;

const ETA_TEXT = 'Usually about eight seconds. You will get the full working, not just the answer.';
const LONG_WAIT_TEXT = 'Still working. Hard ones take a little longer.';

type SnapLoadingProps = {
  /** The shot the student just took — shown behind the scan, never cropped away. */
  photoUri: string;
  onCancel: () => void;
  onClose: () => void;
};

export function SnapLoading({ photoUri, onCancel, onClose }: SnapLoadingProps) {
  const { width, height } = useWindowDimensions();
  const s = width / DESIGN_WIDTH;
  const styles = useMemo(() => createStyles(s), [s]);

  const [stage, setStage] = useState(0);
  const [longWait, setLongWait] = useState(false);

  // "Run long, hold": stop at the last stage rather than looping back to the
  // first — looping reads as a hang.
  useEffect(() => {
    const id = setInterval(() => {
      setStage((current) => (current >= SNAP_STAGES.length - 1 ? current : current + 1));
    }, STAGE_HOLD_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setLongWait(true), LONG_WAIT_MS);
    return () => clearTimeout(id);
  }, []);

  // The sweep travels its own height above the photo to its full height below,
  // so it enters and exits cleanly instead of popping at either edge.
  const sweepY = useSharedValue(-SWEEP_HEIGHT * s);
  useEffect(() => {
    sweepY.value = withRepeat(
      withTiming(height, { duration: SCAN_DURATION_MS, easing: Easing.linear }),
      -1,
      false
    );
  }, [sweepY, height]);
  const sweepStyle = useAnimatedStyle(() => ({ transform: [{ translateY: sweepY.value }] }));

  return (
    <View style={styles.root}>
      <View style={styles.photoLayer}>
        {/* `contain`, not `cover`: the design's own README says "nothing is
            cropped away, so the student can still see what they sent", which
            its CSS `object-fit: cover` contradicted. Showing the whole shot is
            the intent — a student needs to see the question they sent. */}
        <Image source={{ uri: photoUri }} style={styles.photo} contentFit="contain" transition={200} />
      </View>

      <ScanLines s={s} />

      <Animated.View style={[styles.sweep, sweepStyle]} pointerEvents="none">
        <LinearGradient
          colors={[
            'rgba(238,163,31,0)',
            'rgba(238,163,31,0.06)',
            'rgba(238,163,31,0.26)',
            'rgba(255,214,130,0.9)',
            'rgba(238,163,31,0)',
          ]}
          locations={[0, 0.4, 0.86, 0.99, 1]}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>

      <LinearGradient
        colors={[
          'rgba(11,10,9,0.86)',
          'rgba(11,10,9,0.86)',
          'rgba(11,10,9,0)',
          'rgba(11,10,9,0)',
          'rgba(11,10,9,0.9)',
          INK,
        ]}
        locations={[0, 0.14, 0.32, 0.46, 0.74, 1]}
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      />

      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.bar}>
          <Pressable style={styles.close} onPress={onClose} accessibilityLabel="Close">
            <Text style={styles.closeGlyph}>✕</Text>
          </Pressable>
          <Text style={styles.title}>Snap a doubt</Text>
          <View style={styles.barSpacer} />
        </View>

        <View style={styles.footer}>
          <View style={styles.dots}>
            <PulseDot s={s} delay={0} />
            <PulseDot s={s} delay={180} />
            <PulseDot s={s} delay={360} />
          </View>

          {/* role=status / aria-live in the web version — the RN equivalent so
              the stage is announced as it changes rather than silently swapping. */}
          <View
            style={styles.stages}
            accessibilityLiveRegion="polite"
            accessibilityRole="text">
            <StageLine key={stage} s={s} text={SNAP_STAGES[stage]} />
          </View>

          <Text style={styles.eta}>{longWait ? LONG_WAIT_TEXT : ETA_TEXT}</Text>

          <Pressable onPress={onCancel} hitSlop={12}>
            <Text style={styles.cancel}>Cancel</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

/**
 * The detected-text outlines. The design emits one per OCR box, positioned from
 * the OCR result; the backend returns no box geometry, so these are the three
 * reference positions, placed as a fraction of the photo so they land in the
 * same place on any screen. Each lights as the sweep crosses it and stays
 * faintly lit — the read is "this has been picked up", not "this is blinking".
 */
function ScanLines({ s }: { s: number }) {
  const positions = [
    { top: 0.34, right: 28, delay: 0 },
    { top: 0.385, right: 28, delay: 100 },
    { top: 0.43, right: 150, delay: 200 },
  ];
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {positions.map((p, i) => (
        <ScanLine key={i} s={s} topFraction={p.top} right={p.right} delay={p.delay} />
      ))}
    </View>
  );
}

function ScanLine({
  s,
  topFraction,
  right,
  delay,
}: {
  s: number;
  topFraction: number;
  right: number;
  delay: number;
}) {
  const { height } = useWindowDimensions();
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(0, { duration: SCAN_DURATION_MS * 0.1 }),
          withTiming(1, { duration: SCAN_DURATION_MS * 0.1 }),
          withTiming(0.5, { duration: SCAN_DURATION_MS * 0.4 }),
          withTiming(0.18, { duration: SCAN_DURATION_MS * 0.4 })
        ),
        -1,
        false
      )
    );
  }, [opacity, delay]);

  const style = useAnimatedStyle(() => ({ opacity: opacity.value }));

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          left: 28 * s,
          right: right * s,
          top: height * topFraction,
          height: 43 * s,
          borderWidth: 1,
          borderColor: 'rgba(238,163,31,0.8)',
          borderRadius: 5 * s,
        },
        style,
      ]}
    />
  );
}

function PulseDot({ s, delay }: { s: number; delay: number }) {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withDelay(
      delay,
      withRepeat(withTiming(1, { duration: 700, easing: Easing.inOut(Easing.ease) }), -1, true)
    );
  }, [progress, delay]);

  const style = useAnimatedStyle(() => ({
    opacity: 0.25 + progress.value * 0.75,
    transform: [{ scale: 0.8 + progress.value * 0.35 }],
  }));

  return (
    <Animated.View
      style={[
        { width: 8 * s, height: 8 * s, borderRadius: 4 * s, backgroundColor: AMBER },
        style,
      ]}
    />
  );
}

/** Fades up 8px, holds, and is replaced — remounted per stage via `key`. */
function StageLine({ s, text }: { s: number; text: string }) {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withTiming(1, { duration: 280, easing: Easing.out(Easing.cubic) });
  }, [progress]);

  const style = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: (1 - progress.value) * 8 * s }],
  }));

  return (
    <Animated.View style={[StyleSheet.absoluteFill, style]}>
      <Text
        style={{
          fontFamily: 'AnekLatin_700Bold',
          fontSize: 31 * s,
          letterSpacing: -0.03 * 31 * s,
          color: CREAM,
          textAlign: 'center',
        }}
        numberOfLines={2}>
        {text}
      </Text>
    </Animated.View>
  );
}

function createStyles(s: number) {
  return StyleSheet.create({
    root: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: INK,
      overflow: 'hidden',
    },
    photoLayer: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: PAPER,
    },
    // Sits back so the copy stays legible, exactly as the design specifies.
    photo: {
      width: '100%',
      height: '100%',
      opacity: 0.62,
    },
    sweep: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: SWEEP_HEIGHT * s,
    },
    safeArea: {
      flex: 1,
    },
    bar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 26 * s,
      paddingTop: 8 * s,
    },
    close: {
      width: 38 * s,
      height: 38 * s,
      borderRadius: 19 * s,
      backgroundColor: 'rgba(247,245,236,0.12)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeGlyph: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 18 * s,
      color: CREAM_QUIET,
    },
    title: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: 19 * s,
      color: CREAM,
    },
    barSpacer: {
      width: 38 * s,
    },
    footer: {
      marginTop: 'auto',
      paddingHorizontal: 34 * s,
      paddingBottom: 40 * s,
      alignItems: 'center',
    },
    dots: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 8 * s,
      marginBottom: 26 * s,
    },
    stages: {
      position: 'relative',
      alignSelf: 'stretch',
      height: 48 * s,
    },
    eta: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 17 * s,
      lineHeight: 17 * 1.45 * s,
      color: CREAM_DIM,
      textAlign: 'center',
      marginTop: 10 * s,
    },
    cancel: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 16 * s,
      color: CREAM_QUIET,
      marginTop: 26 * s,
    },
  });
}

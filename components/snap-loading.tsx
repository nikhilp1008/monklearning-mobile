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
 * Four layers, back to front: a blurred fill of the student's own photo, the
 * photo itself uncropped, the scan (detected line outlines plus a sweeping
 * gradient), and a scrim that darkens behind the chrome and footer while
 * leaving the middle of the photo visible.
 *
 * The blurred fill exists because `contain` is non-negotiable — a student has
 * to see the whole question they sent — but `contain` leaves bars wherever the
 * photo's shape doesn't match the phone's, and a wide or small shot left most
 * of the screen flat black. Filling that with a blurred, dimmed copy of the
 * same photo means every shape reads the same: the photo, sitting on itself.
 *
 * Everything in the scan is positioned against the photo's *laid-out rect*,
 * not the screen. Positioning against the screen is what made the outlines
 * float in the black margin next to the photo instead of sitting on its text.
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
  /** Intrinsic aspect of the shot, from expo-image's own load event. */
  const [photoAspect, setPhotoAspect] = useState<number | null>(null);

  /**
   * Where `contentFit="contain"` actually puts the photo. Recomputing it here
   * rather than measuring is exact: `contain` fits the longer axis and centres
   * the other, which is the whole of the arithmetic below.
   */
  const photoRect = useMemo(() => {
    if (!photoAspect || !Number.isFinite(photoAspect)) return null;
    const frameAspect = width / height;
    const w = photoAspect >= frameAspect ? width : height * photoAspect;
    const h = photoAspect >= frameAspect ? width / photoAspect : height;
    return { x: (width - w) / 2, y: (height - h) / 2, width: w, height: h };
  }, [photoAspect, width, height]);

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

  // The sweep runs the height of the photo, clipped to it — it is scanning the
  // shot, not the phone. It travels its own height above the top edge to the
  // bottom edge, so it enters and leaves cleanly instead of popping.
  const sweepTravel = photoRect?.height ?? height;
  const sweepY = useSharedValue(-SWEEP_HEIGHT * s);
  useEffect(() => {
    sweepY.value = -SWEEP_HEIGHT * s;
    sweepY.value = withRepeat(
      withTiming(sweepTravel, { duration: SCAN_DURATION_MS, easing: Easing.linear }),
      -1,
      false
    );
  }, [sweepY, sweepTravel, s]);
  const sweepStyle = useAnimatedStyle(() => ({ transform: [{ translateY: sweepY.value }] }));

  return (
    <View style={styles.root}>
      <View style={styles.photoLayer}>
        {/* The fill. Same shot, cropped and blurred past legibility, so the
            margins `contain` leaves are never bare. Dimmer than the photo
            proper, so the eye still goes to the real one. */}
        <Image
          source={{ uri: photoUri }}
          style={styles.backdrop}
          contentFit="cover"
          blurRadius={40}
          transition={200}
        />
        {/* `contain`, not `cover`: the design's own README says "nothing is
            cropped away, so the student can still see what they sent", which
            its CSS `object-fit: cover` contradicted. Showing the whole shot is
            the intent — a student needs to see the question they sent. */}
        <Image
          source={{ uri: photoUri }}
          style={styles.photo}
          contentFit="contain"
          transition={200}
          onLoad={({ source }) => {
            if (source.width > 0 && source.height > 0) {
              setPhotoAspect(source.width / source.height);
            }
          }}
        />
      </View>

      {/* Held back until the photo's rect is known — an outline drawn against
          a guess would be exactly the floating box this is meant to fix. */}
      {photoRect && (
        <View
          style={{
            position: 'absolute',
            left: photoRect.x,
            top: photoRect.y,
            width: photoRect.width,
            height: photoRect.height,
            overflow: 'hidden',
          }}
          pointerEvents="none">
          <ScanLines s={s} rectWidth={photoRect.width} rectHeight={photoRect.height} />

          <Animated.View
            style={[styles.sweep, { height: SWEEP_HEIGHT * s }, sweepStyle]}
            pointerEvents="none">
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
        </View>
      )}

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
 * The detected-text outlines.
 *
 * The design emits one per OCR box, positioned from the OCR result; the
 * backend returns no box geometry, so these are three reference positions.
 * They are fractions of the *photo*, not the screen — which is the fix: as
 * screen fractions they sat wherever the phone was tall, which on any photo
 * that didn't fill the frame meant hanging in the black margin beside it,
 * outlining nothing. Each lights as the sweep crosses it and stays faintly
 * lit, so the read is "this has been picked up", not "this is blinking".
 */
function ScanLines({
  s,
  rectWidth,
  rectHeight,
}: {
  s: number;
  rectWidth: number;
  rectHeight: number;
}) {
  // Insets are fractions too: a fixed 28pt gutter is a thin margin on a
  // full-width photo and half the width of a narrow one.
  const positions = [
    { top: 0.3, left: 0.07, right: 0.08, delay: 0 },
    { top: 0.42, left: 0.07, right: 0.08, delay: 100 },
    { top: 0.54, left: 0.07, right: 0.38, delay: 200 },
  ];
  return (
    <>
      {positions.map((p, i) => (
        <ScanLine
          key={i}
          s={s}
          top={rectHeight * p.top}
          left={rectWidth * p.left}
          right={rectWidth * p.right}
          height={Math.max(18, rectHeight * 0.058)}
          delay={p.delay}
        />
      ))}
    </>
  );
}

function ScanLine({
  s,
  top,
  left,
  right,
  height,
  delay,
}: {
  s: number;
  top: number;
  left: number;
  right: number;
  height: number;
  delay: number;
}) {
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
          left,
          right,
          top,
          height,
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
    backdrop: {
      ...StyleSheet.absoluteFillObject,
      opacity: 0.42,
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

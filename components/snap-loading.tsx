import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useState } from 'react';
import {
  Image as RNImage,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

/**
 * Snap a doubt — the wait while the photo is read.
 *
 * This was a dark, full-bleed screen: the shot at 62% opacity behind an ink
 * scrim, with outlines drawn over it and a beam crossing the whole display. It
 * read as a security scanner rather than as this app, and it was the only dark
 * surface in a product that is otherwise paper.
 *
 * The shot is now a card on paper, held the way a student holds the page they
 * just photographed, with the light passing over the card alone. Everything
 * else is the app's own type on its own ground.
 *
 * The stage copy is unchanged and deliberately so: those five lines name the
 * move a teacher would be making at that second, and they were the part that
 * was already working.
 */

/** One sequence for every doubt, whatever the subject — the design's own copy,
 *  naming the move a teacher would be making at that second. */
export const SNAP_STAGES = [
  'Reading your photo',
  'Understanding the question',
  'Working out the method',
  'Writing the steps',
  'Checking the answer',
] as const;

const STAGE_HOLD_MS = 2400;
const SWEEP_MS = 2200;
/** Past this, the ETA line is replaced with reassurance rather than a promise
 *  the solve has already broken. */
const LONG_WAIT_MS = 20000;

const ETA_TEXT = 'Usually about eight seconds. You will get the full working, not just the answer.';
const LONG_WAIT_TEXT = 'Still working. Hard ones take a little longer.';

type SnapLoadingProps = {
  /** The shot the student just took — shown whole, never cropped away. */
  photoUri: string;
  onCancel: () => void;
  onClose: () => void;
};

export function SnapLoading({ photoUri, onCancel, onClose }: SnapLoadingProps) {
  const { scale, verticalScale } = useScale();
  const { height } = useWindowDimensions();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [stage, setStage] = useState(0);
  const [longWait, setLongWait] = useState(false);
  /** The card's measured height, so the sweep travels exactly its length. */
  const [cardH, setCardH] = useState(Math.round(height * 0.44));
  /**
   * The shot's own aspect, so the card is the shape of the photo.
   *
   * The card used to be a fixed box with the image contained inside it, which
   * left bands of empty card above and below a wide shot. The student is being
   * shown what they sent; the frame should be the photo's shape, not a window
   * onto it.
   */
  const [aspect, setAspect] = useState<number | null>(null);
  useEffect(() => {
    RNImage.getSize(
      photoUri,
      (w, h) => setAspect(h > 0 ? w / h : null),
      () => setAspect(null)
    );
  }, [photoUri]);

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

  const sweep = useSharedValue(0);
  useEffect(() => {
    sweep.value = 0;
    sweep.value = withRepeat(
      withTiming(1, { duration: SWEEP_MS, easing: Easing.inOut(Easing.quad) }),
      -1,
      false
    );
  }, [sweep, cardH]);

  const bandH = Math.round(cardH * 0.36);
  const sweepStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: -bandH + sweep.value * (cardH + bandH) }],
  }));

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.bar}>
          <Text style={styles.kicker}>Snap a doubt</Text>
          <Pressable style={styles.close} onPress={onClose} accessibilityLabel="Close" hitSlop={10}>
            <Text style={styles.closeGlyph}>✕</Text>
          </Pressable>
        </View>

        {/* The stage line leads. It is the one thing on screen that changes
            meaning rather than just moving, so it sits where the eye lands. */}
        <View
          style={styles.stageWrap}
          accessibilityLiveRegion="polite"
          accessibilityRole="text">
          <StageLine key={stage} styles={styles} scale={scale} text={SNAP_STAGES[stage]} />
        </View>

        <View style={styles.cardWrap}>
          <View
            style={[styles.card, aspect ? { aspectRatio: aspect } : { flex: 1 }]}
            onLayout={(e) => setCardH(Math.round(e.nativeEvent.layout.height))}>
          {/* `contain`: a student has to be able to see the question they sent,
              and cropping it away to fill a card defeats the point of showing
              it at all. */}
            {/* `cover` is safe now that the card IS the photo's shape: there
                is nothing to crop away. */}
            <Image source={{ uri: photoUri }} style={styles.photo} contentFit="cover" transition={220} />

            <Animated.View style={[styles.sweep, { height: bandH }, sweepStyle]} pointerEvents="none">
              <LinearGradient
                colors={[
                  'rgba(238,163,31,0)',
                  'rgba(238,163,31,0.10)',
                  'rgba(238,163,31,0.28)',
                  'rgba(255,214,130,0.85)',
                ]}
                locations={[0, 0.55, 0.92, 1]}
                style={StyleSheet.absoluteFill}
              />
            </Animated.View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.eta}>{longWait ? LONG_WAIT_TEXT : ETA_TEXT}</Text>
          <Pressable style={styles.cancel} onPress={onCancel} hitSlop={8}>
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

/** Fades up 8px and is replaced — remounted per stage via `key`. */
function StageLine({
  styles,
  scale,
  text,
}: {
  styles: ReturnType<typeof createStyles>;
  scale: (n: number) => number;
  text: string;
}) {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withTiming(1, { duration: 300, easing: Easing.out(Easing.cubic) });
  }, [progress]);
  /**
   * Resolved here, not inside the worklet.
   *
   * `useAnimatedStyle`'s body runs on the UI runtime, where a captured JS
   * function like `scale` does not exist. Calling it there throws inside the
   * worklet, and an uncaught worklet error aborts the process rather than
   * showing a redbox: the app simply vanished on picking a photo, with no
   * JS error anywhere to explain it.
   */
  const rise = scale(8);
  const style = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: (1 - progress.value) * rise }],
  }));
  return (
    <Animated.View style={style}>
      <Text style={styles.stage} numberOfLines={2}>
        {text}
      </Text>
    </Animated.View>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    root: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: colors.paper,
    },
    safeArea: {
      flex: 1,
      paddingHorizontal: scale(22),
    },
    bar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: verticalScale(6),
    },
    kicker: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.3),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    close: {
      width: scale(30),
      height: scale(30),
      borderRadius: scale(99),
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeGlyph: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(16),
      color: colors.slate,
    },
    stageWrap: {
      paddingTop: verticalScale(22),
      paddingBottom: verticalScale(16),
      minHeight: verticalScale(74),
    },
    stage: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(25),
      lineHeight: scale(31),
      letterSpacing: -scale(0.5),
      color: colors.ink,
    },
    /** The shot, held like a page. The border is what makes it an object on
     *  the paper rather than a hole cut into it. */
    cardWrap: {
      flex: 1,
      justifyContent: 'center',
    },
    card: {
      width: '100%',
      maxHeight: '100%',
      borderRadius: scale(18),
      overflow: 'hidden',
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: colors.hairline,
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: scale(6) },
      shadowOpacity: 0.1,
      shadowRadius: scale(14),
      elevation: 4,
    },
    photo: {
      width: '100%',
      height: '100%',
    },
    sweep: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
    },
    footer: {
      paddingTop: verticalScale(18),
      paddingBottom: verticalScale(10),
      gap: verticalScale(14),
    },
    eta: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(19),
      color: colors.slate,
    },
    failScrim: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(255,253,248,.55)',
    },
    actions: {
      flexDirection: 'row',
      gap: scale(10),
    },
    primary: {
      flex: 1,
      paddingVertical: verticalScale(14),
      borderRadius: scale(99),
      alignItems: 'center',
      backgroundColor: colors.ink,
    },
    primaryText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(15),
      color: colors.paper,
    },
    secondary: {
      flex: 1,
      paddingVertical: verticalScale(14),
      borderRadius: scale(99),
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.hairline,
    },
    secondaryOnly: {
      backgroundColor: colors.ink,
      borderColor: colors.ink,
    },
    secondaryText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      color: colors.ink,
    },
    cancel: {
      alignSelf: 'stretch',
      paddingVertical: verticalScale(13),
      borderRadius: scale(99),
      alignItems: 'center',
      backgroundColor: 'rgba(28,26,22,.05)',
    },
    cancelText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      color: colors.ink,
    },
  });
}

/**
 * Our own words for a failure, keyed on the remedy rather than printed from
 * the server's `message`.
 *
 * The API writes copy like "Monk could not find a question in that photo",
 * which names a product nobody here is called and is written for a different
 * surface. `remedy` is a stable enum, so the sentence a student reads can live
 * with the screen that shows it. The server's own message is still the
 * fallback for a remedy we do not recognise.
 *
 * Every line says what WE could not do, never what the photo lacked. A reader
 * can miss a question that is plainly there, so "no question in that shot" is
 * a claim we cannot support and it puts the fault on the student for something
 * that may be entirely ours. The hint that follows offers a retake without
 * asserting the first one was bad.
 */
const FAILURE_COPY: Record<string, { title: string; body: string }> = {
  retake: {
    title: 'We couldn’t read that one',
    body: 'It may just be the shot. A closer or better-lit photo usually does it.',
  },
  not_photo: {
    title: 'We couldn’t work from this one',
    body: 'It leans on a figure we could not read alongside the text.',
  },
  our_side: {
    title: 'That was on our end',
    body: 'Nothing wrong with your photo. Give it another go in a moment.',
  },
};

export function SnapFailed({
  photoUri,
  title,
  body,
  onRetry,
  onRetake,
  onClose,
}: {
  photoUri: string;
  /** Overrides the remedy copy, for cases like the daily limit. */
  title: string;
  body: string;
  onRetry?: () => void;
  onRetake?: () => void;
  onClose: () => void;
}) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [aspect, setAspect] = useState<number | null>(null);

  useEffect(() => {
    RNImage.getSize(
      photoUri,
      (w, h) => setAspect(h > 0 ? w / h : null),
      () => setAspect(null)
    );
  }, [photoUri]);

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.bar}>
          <Text style={styles.kicker}>Snap a doubt</Text>
          <Pressable style={styles.close} onPress={onClose} accessibilityLabel="Close" hitSlop={10}>
            <Text style={styles.closeGlyph}>✕</Text>
          </Pressable>
        </View>

        {/* Same heading slot the stage line occupies, so the screen reads as
            the scan resolving rather than as somewhere new. */}
        <View style={styles.stageWrap}>
          <Text style={styles.stage} numberOfLines={2}>
            {title}
          </Text>
        </View>

        <View style={styles.cardWrap}>
          <View style={[styles.card, aspect ? { aspectRatio: aspect } : { flex: 1 }]}>
            <Image source={{ uri: photoUri }} style={styles.photo} contentFit="cover" transition={200} />
            {/* The shot stays visible and steps back, because it is the thing
                the student is being asked to judge and retake. */}
            <View style={styles.failScrim} />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.eta}>{body}</Text>
          <View style={styles.actions}>
            {onRetry && (
              <Pressable style={styles.primary} onPress={onRetry}>
                <Text style={styles.primaryText}>Try again</Text>
              </Pressable>
            )}
            {onRetake && (
              <Pressable
                style={[styles.secondary, !onRetry && styles.secondaryOnly]}
                onPress={onRetake}>
                <Text style={styles.secondaryText}>Take another</Text>
              </Pressable>
            )}
            {!onRetry && !onRetake && (
              <Pressable style={styles.primary} onPress={onClose}>
                <Text style={styles.primaryText}>Got it</Text>
              </Pressable>
            )}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

/** The remedy's copy, or the server's sentence if we do not know the remedy. */
export function failureCopy(
  remedy: string | null | undefined,
  serverMessage: string
): { title: string; body: string } {
  return (
    FAILURE_COPY[remedy ?? ''] ?? {
      title: 'We couldn’t read that one',
      body: serverMessage,
    }
  );
}

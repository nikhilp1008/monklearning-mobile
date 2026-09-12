import { useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useScale } from '@/constants/scale';

/**
 * The card a student watches while their class is being built.
 *
 * PORTRAIT, as of the classroom-flow handoff. It used to be landscape, because
 * the classroom it handed to was landscape and turning the phone twice in one
 * entry was worse than turning it once. The classroom opens in portrait now,
 * so this screen holds the phone the way the student is already holding it and
 * nothing rotates on the way in at all.
 *
 * Rendered from two routes: `entering-classroom` owns the first half of the
 * wait (`session/start`, `scope`) and `live-classroom` overlays the same card
 * over its blank board for the second half (socket, first turn), so the student
 * sees one continuous surface instead of two static loaders either side of a
 * route change. For that to hold, `live-classroom` must be registered with
 * `animation: 'fade'` in `app/_layout.tsx` — the default push animation slides,
 * and the card would visibly jump at the boundary.
 *
 * The protractor mark that used to sit above the heading is gone with the
 * redesign: the handoff screen is purely typographic. It was a considered piece
 * of work and it is recoverable from git history if it is wanted back.
 */

/** Dark ground. Deliberately the ink token, not black. */
const GROUND = '#1C1A16';
/** The heading's resting colour, and the two brighter stops the sweep passes
 *  through. Straight from the handoff's `txShimmer` gradient. */
const TEXT_REST = '#DCD6C7';
const TEXT_WARM = '#EBC77A';
const TEXT_CORE = '#FFF6E0';
const AMBER = '#EEA31F';
/** The chapter line and the stage line, as rgba over the ground. */
const CHAPTER = 'rgba(220,214,199,.6)';
const STAGE = 'rgba(220,214,199,.5)';

const HEADING = 'Entering your classroom';
/** Word spacing is the handoff's `gap:0 .28em`, not a space character. */
const WORD_GAP_EM = 0.28;

/** One full sweep, and the pause before the first one. `txShimmer 4.4s 1s`. */
const SWEEP_MS = 4400;
const SWEEP_DELAY_MS = 1000;

/**
 * How wide the bright band is, as a fraction of the heading's width.
 *
 * The handoff paints a 300%-wide gradient and slides it across, so the band's
 * geometry is set by its stops: the core runs 46%–54% of the gradient and the
 * shoulders 36%–64%. Against a window one third of the gradient wide, that is
 * +/-12% of the text for the core and +/-42% for the shoulders.
 */
const CORE_HALF = 0.12;
const SHOULDER_HALF = 0.42;

/**
 * Per-character colour, rather than a gradient clipped to text.
 *
 * `background-clip:text` has no React Native equivalent without a mask view,
 * and this does not justify a new native dependency. Sampling the same ramp
 * once per character is the same function, quantised to a character's width —
 * about 12px at this size, which is well below the band's own 84px core.
 *
 * It costs nothing in layout: Onest has a `kern` feature but not one kern pair
 * in this string (checked against the 500 face's GPOS), so splitting it into
 * characters measures identically to setting it as one run.
 */
function ShimmerChar({
  char,
  at,
  sweep,
  style,
}: {
  char: string;
  /** This character's centre, 0..1 across the heading. */
  at: number;
  sweep: SharedValue<number>;
  style: object;
}) {
  const animated = useAnimatedStyle(() => {
    // The band starts and ends clear of the text so the sweep enters and
    // leaves rather than appearing mid-word.
    const centre = -0.42 + sweep.value * 1.84;
    const d = Math.abs(at - centre);
    return {
      color: interpolateColor(
        d,
        [0, CORE_HALF, SHOULDER_HALF],
        [TEXT_CORE, TEXT_WARM, TEXT_REST]
      ),
    };
  });
  return <Animated.Text style={[style, animated]}>{char}</Animated.Text>;
}

/** Rises as it arrives, per word, on the handoff's stagger. */
function FadeUp({
  delay,
  children,
  style,
}: {
  delay: number;
  children: React.ReactNode;
  style?: object;
}) {
  const p = useSharedValue(0);
  useEffect(() => {
    p.value = withDelay(
      delay,
      withTiming(1, { duration: 700, easing: Easing.bezier(0.2, 0.7, 0.2, 1) })
    );
  }, [p, delay]);
  const animated = useAnimatedStyle(() => ({
    opacity: p.value,
    transform: [{ translateY: interpolate(p.value, [0, 1], [8, 0]) }],
  }));
  return <Animated.View style={[style, animated]}>{children}</Animated.View>;
}

export function EnteringCardScreen({
  chapterTitle,
  statusText,
}: {
  chapterTitle: string;
  statusText: string;
}) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const sweep = useSharedValue(0);
  useEffect(() => {
    sweep.value = withDelay(
      SWEEP_DELAY_MS,
      withRepeat(withTiming(1, { duration: SWEEP_MS, easing: Easing.linear }), -1)
    );
  }, [sweep]);

  /**
   * Words for the stagger, characters for the sweep.
   *
   * Each character needs its position across the WHOLE heading, not across its
   * own word, or the band would restart at every space. The running index is
   * what carries that.
   */
  const words = useMemo(() => {
    const parts = HEADING.split(' ');
    const chars = HEADING.replace(/ /g, '').length;
    let seen = 0;
    return parts.map((word, i) => {
      const entries = word.split('').map((char) => {
        const at = (seen + 0.5) / chars;
        seen += 1;
        return { char, at };
      });
      // .1s, .22s, .34s — the handoff's own three delays.
      return { entries, delay: 100 + i * 120 };
    });
  }, []);

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.middle}>
          <View style={styles.headingRow}>
            {words.map((word, i) => (
              <FadeUp
                key={i}
                delay={word.delay}
                style={[styles.word, i < words.length - 1 && styles.wordGap]}>
                {word.entries.map((entry, j) => (
                  <ShimmerChar
                    key={j}
                    char={entry.char}
                    at={entry.at}
                    sweep={sweep}
                    style={styles.heading}
                  />
                ))}
              </FadeUp>
            ))}
          </View>
          <FadeUp delay={600}>
            <Text style={styles.chapter} numberOfLines={2}>
              {chapterTitle}
            </Text>
          </FadeUp>
        </View>

        {/* The one line on this screen that changes. Announced politely for the
            same reason snap-loading announces its stages: without it a screen
            reader hears the heading once and then silence for the whole wait. */}
        <FadeUp delay={1000} style={styles.stageRow}>
          <View style={styles.stageInner} accessibilityLiveRegion="polite" accessibilityRole="text">
            <Dots />
            <StageLine key={statusText} style={styles.stage} text={statusText} />
          </View>
        </FadeUp>
      </SafeAreaView>
    </View>
  );
}

/** Fades up as it replaces the line before it — remounted per line via `key`. */
function StageLine({ style, text }: { style: object; text: string }) {
  const p = useSharedValue(0);
  useEffect(() => {
    p.value = withTiming(1, { duration: 300, easing: Easing.out(Easing.cubic) });
  }, [p]);
  const animated = useAnimatedStyle(() => ({
    opacity: p.value,
    transform: [{ translateY: interpolate(p.value, [0, 1], [6, 0]) }],
  }));
  return (
    <Animated.View style={animated}>
      <Text style={style} numberOfLines={1}>
        {text}
      </Text>
    </Animated.View>
  );
}

/** Three amber dots on the handoff's 2.2s `dotWave`, a third of a cycle apart. */
function Dots() {
  const p = useSharedValue(0);
  useEffect(() => {
    p.value = withRepeat(withTiming(1, { duration: 2200, easing: Easing.inOut(Easing.ease) }), -1);
  }, [p]);
  return (
    <View style={dotStyles.row}>
      <Dot p={p} phase={0} />
      <Dot p={p} phase={0.136} />
      <Dot p={p} phase={0.272} />
    </View>
  );
}

function Dot({ p, phase }: { p: SharedValue<number>; phase: number }) {
  const animated = useAnimatedStyle(() => {
    const t = (p.value + phase) % 1;
    return {
      opacity: t < 0.5 ? interpolate(t, [0, 0.5], [0.22, 1]) : interpolate(t, [0.5, 1], [1, 0.22]),
    };
  });
  return <Animated.View style={[dotStyles.dot, animated]} />;
}

const dotStyles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 4 },
  dot: { width: 5, height: 5, borderRadius: 2.5, backgroundColor: AMBER },
});

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  const headingSize = scale(26);
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: GROUND,
    },
    safeArea: {
      flex: 1,
    },
    // The heading and chapter sit on the optical centre of the whole screen,
    // as drawn — not above the stage line, which is pinned to the foot.
    middle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: scale(36),
    },
    headingRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    // Each word is its own row of characters so the stagger has something to
    // move and the characters inside it still sit on one baseline.
    word: {
      flexDirection: 'row',
    },
    wordGap: {
      marginRight: headingSize * WORD_GAP_EM,
    },
    heading: {
      fontFamily: 'Onest_500Medium',
      fontSize: headingSize,
      lineHeight: headingSize * 1.15,
      letterSpacing: headingSize * -0.02,
      color: TEXT_REST,
    },
    chapter: {
      marginTop: verticalScale(14),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14.5),
      lineHeight: scale(14.5) * 1.4,
      letterSpacing: scale(14.5) * 0.01,
      textAlign: 'center',
      color: CHAPTER,
    },
    stageRow: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: verticalScale(56),
      alignItems: 'center',
    },
    stageInner: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
    },
    stage: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      color: STAGE,
    },
  });
}

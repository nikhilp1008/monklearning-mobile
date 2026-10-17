import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef } from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Canvas, LinearGradient, Line, Skia, Text as SkText, useTypeface, vec } from '@shopify/react-native-skia';

import { MonkMarkBuild } from '@/components/monk-mark-build';
import { useTeacherId } from '@/components/states/state-plate';
import Svg, { Path } from 'react-native-svg';

import { statusStep } from '@/constants/classroom-status';
import { useScale } from '@/constants/scale';
import { colors } from '@/constants/brand';
import { START_ARROW } from '@/constants/teachers';
import { teacherName } from '@/lib/preferences';

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
 * WHITE, as of 2026-10-17. A dark screen of colour between a white Home and a
 * white classroom was a jolt at the one moment a student should be settling
 * in, so the wait is on the classroom's own paper: the Monk mark drawing
 * itself (components/monk-mark-build.tsx), "Entering your classroom" in ink
 * with a band of the teacher's colour passing through it, the chapter, and at
 * the foot the stage line over one fine line that fills, in the teacher's
 * colour, with the real stages (constants/classroom-status.ts `statusStep`).
 * The teacher shows only as that colour: ember for Drona, honey for Vedha.
 */

const GROUND = '#FFFFFF';
/** The heading at rest: ink. The sweep passes through it in the teacher's colour. */
const TEXT_REST = colors.ink;
const CHAPTER = colors.slate;
const STAGE = colors.slate;
/** How many stages the foot line is divided into. */
const STAGES = 5;

const HEADING = 'Entering your classroom';

/** One full sweep, and the pause before the first one: slower than the handoff's 4.4s, so the band drifts rather than runs. */
const SWEEP_MS = 6500;
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
 * THE HEADING, WITH ITS SWEEP, DRAWN BY SKIA.
 *
 * It was 21 separately coloured characters, each re-coloured every frame. On
 * Android, Reanimated sends a colour change through a full shadow-tree commit
 * (its synchronous path for UI props is off by default there), so the sweep
 * was a layout pass of 21 nodes sixty times a second, for the whole wait, on
 * the same thread that is mounting the classroom underneath. On a budget phone
 * that is the stutter.
 *
 * Here the words are drawn once by Skia and the bright band is one gradient
 * whose position is a shared value: Skia redraws a small canvas on the UI
 * thread, and React and layout are never involved. Same ramp as before: the
 * core runs +/-12% of the text either side of the band's centre, the shoulders
 * +/-42%.
 *
 * Kept to one line, as the design sets it: on a narrow phone the size steps
 * down to fit rather than wrapping.
 */
const ONEST_SEMIBOLD = require('@expo-google-fonts/onest/600SemiBold/Onest_600SemiBold.ttf');

function SweepHeading({
  size,
  maxWidth,
  sweep,
  accent,
  fallbackStyle,
}: {
  size: number;
  maxWidth: number;
  sweep: SharedValue<number>;
  /** The colour the band passes through at its core: the teacher's. */
  accent: string;
  fallbackStyle: object;
}) {
  const typeface = useTypeface(ONEST_SEMIBOLD);
  const layout = useMemo(() => {
    if (!typeface) return null;
    const probe = Skia.Font(typeface, size);
    const natural = probe.measureText(HEADING).width;
    const fitted = natural > maxWidth ? (size * maxWidth) / natural : size;
    const font = Skia.Font(typeface, fitted);
    const width = Math.ceil(font.measureText(HEADING).width) + 2;
    const m = font.getMetrics();
    const height = Math.ceil(fitted * 1.3);
    const baseline = (height - (m.descent - m.ascent)) / 2 - m.ascent;
    return { font, width, height, baseline };
  }, [typeface, size, maxWidth]);

  const start = useDerivedValue(() => {
    const w = layout?.width ?? 0;
    const centre = (-0.42 + sweep.value * 1.84) * w;
    return vec(centre - SHOULDER_HALF * w, 0);
  });
  const end = useDerivedValue(() => {
    const w = layout?.width ?? 0;
    const centre = (-0.42 + sweep.value * 1.84) * w;
    return vec(centre + SHOULDER_HALF * w, 0);
  });

  // Until the face is read (a few milliseconds, inside the fade-in) the words
  // are the plain heading, so nothing is ever blank.
  if (!layout) return <Text style={fallbackStyle}>{HEADING}</Text>;
  const c = (SHOULDER_HALF - CORE_HALF) / (2 * SHOULDER_HALF);
  return (
    <View accessible accessibilityRole="header" accessibilityLabel={HEADING}>
      <Canvas style={{ width: layout.width, height: layout.height }} pointerEvents="none">
        <SkText x={1} y={layout.baseline} text={HEADING} font={layout.font}>
          <LinearGradient
            start={start}
            end={end}
            colors={[TEXT_REST, TEXT_REST, accent, TEXT_REST, TEXT_REST]}
            positions={[0, c, 0.5, 1 - c, 1]}
          />
        </SkText>
      </Canvas>
    </View>
  );
}

/**
 * Arrives, without moving.
 *
 * The handoff rises each word in by 8px on a stagger, and on the device that
 * read as the screen assembling itself rather than as a screen loading: three
 * separate movements before anything had loaded, competing with the sweep that
 * is the actual loading signal. Opacity only now, and everything on one
 * timing, so the type simply appears and the sweep is the only thing moving.
 */
function FadeIn({
  delay = 0,
  children,
  style,
}: {
  delay?: number;
  children: React.ReactNode;
  style?: object;
}) {
  const p = useSharedValue(0);
  useEffect(() => {
    p.value = withDelay(delay, withTiming(1, { duration: 520, easing: Easing.out(Easing.cubic) }));
  }, [p, delay]);
  const animated = useAnimatedStyle(() => ({ opacity: p.value }));
  return <Animated.View style={[style, animated]}>{children}</Animated.View>;
}

export function EnteringCardScreen({
  chapterTitle,
  statusText,
  onBack,
}: {
  chapterTitle: string;
  statusText: string;
  /**
   * Leaves the wait. A class can take a while to build, and until this was
   * here the only way out of that wait was the hardware gesture — the screen
   * offered nothing, which reads as being stuck rather than as waiting.
   *
   * Optional so the card can still be rendered somewhere that has no sensible
   * way back, but both of its callers pass one.
   */
  onBack?: () => void;
}) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  /**
   * Read directly, because the back button is absolutely positioned and Yoga
   * does not apply a parent's padding to absolute children — so sitting inside
   * `SafeAreaView` bought it nothing and it landed in the status bar, level
   * with the clock. Positioning it absolutely is still right: a flex child in
   * a header row would push the heading off the screen's optical centre, which
   * is where the handoff puts it.
   */
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const teacher = useTeacherId();
  const accent = START_ARROW[teacher];

  /** The line holds its place on a line that is not a stage (the long wait). */
  const stepRef = useRef(0);
  const step = statusStep(statusText);
  if (step !== null && step > stepRef.current) stepRef.current = step;

  const sweep = useSharedValue(0);
  useEffect(() => {
    sweep.value = withDelay(
      SWEEP_DELAY_MS,
      withRepeat(withTiming(1, { duration: SWEEP_MS, easing: Easing.linear }), -1)
    );
  }, [sweep]);

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        {onBack && (
          <Pressable
            style={[styles.back, { top: insets.top + verticalScale(4) }]}
            onPress={onBack}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel="Leave">
            <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
              <Path
                d="M15 5l-7 7 7 7"
                stroke={TEXT_REST}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </Pressable>
        )}
        {/* One fade for the whole block, so the mark, the heading and the
            chapter arrive together and nothing shifts. */}
        <FadeIn style={styles.middle}>
          <View style={styles.mark}>
            <MonkMarkBuild size={scale(92)} />
          </View>
          <SweepHeading
            size={scale(26)}
            maxWidth={width - scale(36) * 2}
            sweep={sweep}
            accent={accent}
            fallbackStyle={styles.heading}
          />
          <Text style={styles.chapter} numberOfLines={2}>
            {chapterTitle}
          </Text>
        </FadeIn>

        {/* The one line on this screen that changes. Announced politely for the
            same reason snap-loading announces its stages: without it a screen
            reader hears the heading once and then silence for the whole wait. */}
        <FadeIn delay={420} style={styles.stageRow}>
          <View style={styles.stageInner} accessibilityLiveRegion="polite" accessibilityRole="text">
            {/* The status copy is written with Drona's name ("Drona is picking up
                the chalk…"); a Vedha student hears Vedha. */}
            <StageLine key={statusText} style={styles.stage} text={statusText.replace(/\bDrona\b/g, teacherName(teacher))} />
          </View>
          <StageProgress step={stepRef.current} width={width - scale(48) * 2} color={accent} />
        </FadeIn>
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
  // Crossfades in place. It used to rise 6px as it replaced the line before
  // it, which is a second thing moving on a screen whose only movement should
  // be the sweep.
  const animated = useAnimatedStyle(() => ({ opacity: p.value }));
  return (
    <Animated.View style={animated}>
      <Text style={style} numberOfLines={1}>
        {text}
      </Text>
    </Animated.View>
  );
}

/**
 * ONE FINE LINE ACROSS THE FOOT, filling in the teacher's colour a fifth at a
 * time as each real stage begins. Drawn by Skia from a shared value, so it
 * fills without a layout pass.
 */
function StageProgress({ step, width, color }: { step: number; width: number; color: string }) {
  const p = useSharedValue(step / STAGES);
  useEffect(() => {
    p.value = withTiming(step / STAGES, { duration: 1100, easing: Easing.inOut(Easing.cubic) });
  }, [step, p]);
  const end = useDerivedValue(() => vec(1.5 + p.value * (width - 3), 1.5));
  const shown = useDerivedValue(() => (p.value > 0 ? 1 : 0));
  return (
    <Canvas
      style={{ width, height: 3 }}
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants">
      <Line p1={vec(1.5, 1.5)} p2={vec(width - 1.5, 1.5)} color="rgba(28,26,22,0.08)" strokeWidth={3} strokeCap="round" />
      <Line p1={vec(1.5, 1.5)} p2={end} color={color} strokeWidth={3} strokeCap="round" opacity={shown} />
    </Canvas>
  );
}

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
    // Top-left, on its own above the centred block — it must not shift the
    // heading, which is why the middle stays a full-height centred flex child
    // and this is absolute over it.
    back: {
      position: 'absolute',
      left: scale(14),
      // `top` is set on the element, from the safe-area inset.
      width: scale(44),
      height: scale(44),
      borderRadius: scale(22),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
    },
    // The heading and chapter sit on the optical centre of the whole screen,
    // as drawn — not above the stage line, which is pinned to the foot.
    middle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: scale(36),
    },
    heading: {
      fontFamily: 'Onest_600SemiBold',
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
      bottom: verticalScale(48),
      alignItems: 'center',
      gap: verticalScale(14),
    },
    /** The mark above the heading, with the reference's own breathing room. */
    mark: { alignSelf: 'center', marginBottom: verticalScale(36) },
    stageInner: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
    },
    stage: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(14),
      color: STAGE,
    },
  });
}

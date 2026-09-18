import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  type SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

/**
 * The shared surface of the two landscape classroom screens, from
 * handoff_landscape_classroom/ (README + SPEC + the two HTML references).
 *
 * The idea the whole design rests on: **the notebook page IS the screen.**
 * No card, no inset, no drawn board frame — ruled paper runs to all four
 * edges and every control floats over it. The only border a student sees is
 * the phone's own. That is what this file exists to protect: nothing here
 * wraps the board in a bordered container, and nothing should.
 *
 * Numbers are points at 1×, straight from the spec, not run through the app's
 * scale helpers. The frame is 844×390 (iPhone 14/15 Pro landscape) and the
 * layout is full-bleed, so it adapts by having more or less paper — which is
 * exactly the fix for the old inner-box-inside-the-phone-box problem.
 *
 * The left gutter is the notch gutter: writing starts at 56, the red margin
 * rule sits at 44, and nothing is written left of it, so the Dynamic Island
 * never covers a formula. It reads as a notebook margin, not a workaround.
 */

export const INK = '#1C1A16';
export const INK_MUTED = '#57534B';
export const INK_FAINT = '#9C988C';
export const INK_GHOST = '#C0BBAD';
export const WAVE_QUIET = '#C7C1B2';
export const PAPER = '#FCFAF4';
export const BOARD = '#FFFFFF';
/**
 * The rule line, from `Board 1c Faded Rules`: .075 rather than the .055 this
 * board shipped with. The rules also stop short of both edges now — see
 * `RuledGround` — and a line that dissolves can afford to be a little stronger
 * where it is actually drawn.
 */
export const RULE = 'rgba(28,26,22,.075)';
/**
 * How far the rules fade in from each edge. The handoff masks the whole ruled
 * layer with `linear-gradient(90deg, transparent 0, #000 60px, #000 calc(100%
 * - 60px), transparent 100%)`, so 60 is the run at both ends.
 */
export const RULE_FADE = 60;
export const MARGIN_RULE = 'rgba(221,68,51,.32)';
export const AMBER = '#EEA31F';
export const DEEP_AMBER = '#9A6A12';
export const AMBER_WASH = '#FCF4E0';
export const RED = '#DD4433';
export const GREEN = '#1C9B57';
export const GREEN_INK = '#157A45';
export const DARK_CHROME = '#211C15';
export const HAIRLINE = 'rgba(28,26,22,.14)';

/**
 * The writing rhythm. Every board text element is line-height 26 with no
 * margins, and diagrams are whole multiples of it — that is what makes the
 * writing sit ON the rules instead of drifting between them, and why a
 * scroll position never bisects a line.
 */
export const RHYTHM = 26;
/** Board padding: 52 top (2×26), 56 left (the notch gutter). */
export const BOARD_TOP = 52;
export const BOARD_LEFT = 56;
/** The red margin rule's x. The teacher never writes left of it. */
export const MARGIN_X = 44;
export const CAPTION_HEIGHT = 54;

/** How long chrome stays up before it tucks itself away. */
/**
 * How long the chrome stays before it tucks itself away.
 *
 * Was 4000, which was too quick from a standing start and much too quick in
 * practice: the countdown ran while the entering card was still covering the
 * board, so by the time the card faded the chrome had often already gone —
 * the student's first sight of their class was a bare page. The countdown is
 * blocked until the card goes now, and 6s is long enough to read a chapter
 * name and find the controls without the bars overstaying.
 */
export const CHROME_HIDE_MS = 6000;

/**
 * Chrome tucks itself away after a few idle seconds, and a tap brings it back.
 *
 * `blocked` is the guard that matters: while the student is holding Interrupt,
 * or a drawer is open, the timer never runs — chrome vanishing mid-hold would
 * take the Interrupt button out from under the thumb using it. Whenever
 * `blocked` clears, the timer re-arms on its own, because the effect re-runs.
 */
export function useChromeAutoHide(visible: boolean, blocked: boolean, hide: () => void) {
  useEffect(() => {
    if (!visible || blocked) return;
    const id = setTimeout(hide, CHROME_HIDE_MS);
    return () => clearTimeout(id);
  }, [visible, blocked, hide]);
}

/** Rounds a scroll offset onto the rule grid, so no line is left half-cut. */
export function settleToRhythm(offset: number, max: number): number | null {
  const rem = offset % RHYTHM;
  if (rem <= 1 || rem >= RHYTHM - 1 || offset >= max - 2) return null;
  return offset - rem + (rem > RHYTHM / 2 ? RHYTHM : 0);
}

/** Opacity blink on a 1s step, for carets and the live dot. */
export function Blink({
  style,
  duration = 1000,
}: {
  style: StyleProp<ViewStyle>;
  duration?: number;
}) {
  const opacity = useSharedValue(1);
  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(1, { duration: duration / 2, easing: Easing.steps(1, true) }),
        withTiming(0.2, { duration: duration / 2, easing: Easing.steps(1, true) })
      ),
      -1
    );
  }, [opacity, duration]);
  const animated = useAnimatedStyle(() => ({ opacity: opacity.value }));
  return <Animated.View style={[style, animated]} />;
}

/**
 * One bar of an audio meter. scaleY only — nothing here measures or animates
 * layout, per this codebase's history with Reanimated width animations on
 * device.
 */
function Bar({
  style,
  from,
  to,
  duration,
  delay,
  easing,
}: {
  style: StyleProp<ViewStyle>;
  from: number;
  to: number;
  duration: number;
  delay: number;
  easing: (v: number) => number;
}) {
  const s = useSharedValue(from);
  useEffect(() => {
    s.value = from;
    s.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(to, { duration: duration / 2, easing }),
          withTiming(from, { duration: duration / 2, easing })
        ),
        -1
      )
    );
  }, [s, from, to, duration, delay, easing]);
  const animated = useAnimatedStyle(() => ({ transform: [{ scaleY: s.value }] }));
  return <Animated.View style={[style, animated]} />;
}

/** The three-bar level meter: inside the dock's mic while the student holds
 *  it, and on the rail's own Listening state. */
export function LevelBars({
  color,
  heights,
  width = 3,
  gap = 3,
  duration = 1050,
}: {
  color: string;
  heights: number[];
  width?: number;
  gap?: number;
  duration?: number;
}) {
  return (
    <View style={[waveStyles.levelRow, { gap }]}>
      {heights.map((height, i) => (
        <Bar
          key={i}
          style={{ width, height, borderRadius: 99, backgroundColor: color }}
          from={0.4}
          to={1}
          duration={duration}
          delay={i * (duration / 6)}
          easing={Easing.inOut(Easing.ease)}
        />
      ))}
    </View>
  );
}

const waveStyles = StyleSheet.create({
  levelRow: { flexDirection: 'row', alignItems: 'center' },
});

/**
 * The ruled ground. Fixed behind the scroller rather than scrolling with it:
 * every board line is 26 tall and every scroll settles onto a multiple of 26,
 * so the rules and the writing stay in register either way, and a fixed layer
 * costs nothing per frame.
 */
/**
 * The ruled page — rules that dissolve before they reach either edge.
 *
 * From `Board 1c Faded Rules`: the same 26pt spacing, but masked to nothing
 * over the first and last 60pt. Its own note says why, and it is the right
 * reason: it "keeps the notebook feel without the ledger look". A rule running
 * hard into both bezels reads as a table; one that fades reads as paper.
 *
 * React Native has no `mask-image`, so the fade is done the other way round —
 * two white gradients laid over the rules at each edge. The board behind is
 * #fff, so painting white over a rule and masking it out are the same
 * operation, and this needs no native mask view.
 *
 * The line sits at `(i + 1) * RHYTHM - 1`, matching the handoff's
 * `repeating-linear-gradient(transparent 0 25px, … 25px 26px)`: the rule is
 * the last point of each 26pt band, not the first point of the next one.
 */
export function RuledGround({ height }: { height: number }) {
  const rows = Math.ceil(height / RHYTHM) + 1;
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {Array.from({ length: rows }, (_, i) => (
        <View
          key={i}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: (i + 1) * RHYTHM - 1,
            height: 1,
            backgroundColor: RULE,
          }}
        />
      ))}
      <LinearGradient
        colors={['#FFFFFF', 'rgba(255,255,255,0)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[groundStyles.fade, { left: 0 }]}
      />
      <LinearGradient
        colors={['rgba(255,255,255,0)', '#FFFFFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[groundStyles.fade, { right: 0 }]}
      />
    </View>
  );
}

/** The red margin at x = 44, full height, edge to edge. */
export function MarginRule({ x = MARGIN_X }: { x?: number } = {}) {
  return <View style={[groundStyles.margin, { left: x }]} pointerEvents="none" />;
}

/** 3px pill on the right edge, visible only while the board is moving. */
export function ScrollIndicator({
  top,
  height,
  visible,
}: {
  top: number;
  height: number;
  visible: boolean;
}) {
  return (
    <View
      style={[groundStyles.indicator, { top, height, opacity: visible ? 1 : 0 }]}
      pointerEvents="none"
    />
  );
}

/**
 * The same pill, driven by shared values instead of React state.
 *
 * The board is the largest tree in the app, and the props version above has to
 * be fed from an onScroll handler — which means three setState calls per scroll
 * event, at scrollEventThrottle={16}, re-rendering the whole classroom ~60
 * times a second for a 3px rectangle. This one is written from the UI thread
 * and never re-renders anything.
 *
 * Kept alongside rather than replacing it: the lesson player still passes plain
 * numbers, and its board is not live.
 */
export function AnimatedScrollIndicator({
  top,
  height,
  opacity,
}: {
  top: SharedValue<number>;
  height: SharedValue<number>;
  opacity: SharedValue<number>;
}) {
  const style = useAnimatedStyle(() => ({
    top: top.value,
    height: height.value,
    opacity: opacity.value,
  }));
  return (
    <Animated.View style={[groundStyles.indicator, style]} pointerEvents="none" />
  );
}

/**
 * The caption line and the Listening state are one strip with two states, not
 * two overlays — the spec is explicit about it, and it is why the two can
 * never both claim the bottom edge. The strip lifts off the paper with a
 * shadow rather than a border; no line is drawn anywhere.
 */
export function CaptionStrip({
  open,
  listening,
  text,
}: {
  open: boolean;
  listening: boolean;
  text: string;
}) {
  const progress = useSharedValue(open ? 1 : 0);
  useEffect(() => {
    progress.value = withTiming(open ? 1 : 0, {
      duration: 380,
      easing: Easing.bezier(0.25, 0.75, 0.3, 1),
    });
  }, [progress, open]);

  const wrap = useAnimatedStyle(() => ({
    height: CAPTION_HEIGHT * progress.value,
    opacity: progress.value,
  }));
  const captionFace = useAnimatedStyle(() => ({
    opacity: withTiming(listening ? 0 : 1, { duration: 220 }),
  }));
  const listenFace = useAnimatedStyle(() => ({
    opacity: withTiming(listening ? 1 : 0, { duration: 260 }),
  }));

  return (
    <Animated.View style={[capStyles.wrap, wrap]}>
      <View style={capStyles.inner}>
        <Animated.View style={[capStyles.face, listenFace]} pointerEvents="none">
          <LevelBars color={AMBER} heights={[14, 14, 14]} width={2.5} gap={2.5} duration={950} />
          <Text style={capStyles.listenText}>Listening</Text>
        </Animated.View>

        <Animated.View style={[capStyles.face, captionFace]}>
          <Text style={capStyles.badge}>CC</Text>
          {/* Two lines, not one. A checkpoint question is the one caption the
              student has to READ rather than just hear, and clipping it mid
              sentence left answer chips on screen with no question above them.
              Costs no layout: the strip's content box is 44 tall (54 less the
              10 of paddingBottom) and two lines at lineHeight 20 is 40. */}
          <Text style={capStyles.text} numberOfLines={2}>
            {text}
          </Text>
          <Blink style={capStyles.caret} />
        </Animated.View>
      </View>
    </Animated.View>
  );
}

/**
 * The 19×74 tab flush on the right edge that brings tucked chrome back. It
 * sits outside the board's own tap target so the two taps never fight.
 */
export function EdgeTab({
  visible,
  onPress,
  side = 'right',
}: {
  visible: boolean;
  onPress: () => void;
  /** Which edge the tucked chrome went out through. Landscape tucks the rail
   *  sideways, portrait drops the dock, so the tab has to meet it there. */
  side?: 'right' | 'bottom';
}) {
  if (!visible) return null;
  const bottom = side === 'bottom';
  return (
    <Pressable
      style={bottom ? edgeStyles.tabBottom : edgeStyles.tab}
      onPress={onPress}
      hitSlop={8}>
      <Svg viewBox="0 0 24 24" width={12} height={12} fill="none">
        <Path
          // Points the way the chrome will come back from.
          d={bottom ? 'M6 9l6 6 6-6' : 'M15 6l-6 6 6 6'}
          stroke={DEEP_AMBER}
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Pressable>
  );
}

const groundStyles = StyleSheet.create({
  fade: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: RULE_FADE,
  },
  margin: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: MARGIN_X,
    width: 1.4,
    backgroundColor: MARGIN_RULE,
  },
  indicator: {
    position: 'absolute',
    right: 6,
    width: 3,
    borderRadius: 99,
    backgroundColor: 'rgba(28,26,22,.28)',
  },
});

const capStyles = StyleSheet.create({
  wrap: { flexShrink: 0, overflow: 'hidden' },
  inner: {
    height: CAPTION_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BOARD,
    paddingLeft: BOARD_LEFT,
    paddingRight: 28,
    paddingBottom: 10,
    // A lift, not a line: the notebook stays visible right up to the strip.
    shadowColor: INK,
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.14,
    shadowRadius: 6,
    elevation: 8,
  },
  face: {
    ...StyleSheet.absoluteFillObject,
    left: BOARD_LEFT,
    right: 28,
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  badge: {
    flexShrink: 0,
    fontFamily: 'Onest_800ExtraBold',
    fontSize: 9.5,
    letterSpacing: 0.14 * 9.5,
    color: DEEP_AMBER,
  },
  // Onest, with the rest of the classroom.
  //
  // This was Anek Devanagari, "opened up to 20 to keep the descenders whole".
  // Measured from the font: Anek Devanagari 500 is asc +1.013 / desc -0.693,
  // so at 14.5pt it needs 24.7pt of line box and 20 was clipping it by 4.7.
  // That never showed because the caption line is Hinglish, which is romanised
  // LATIN -- no Devanagari ships anywhere in the app (see lib/widgets/CLAUDE.md).
  // Onest 500 is asc +0.970 / desc -0.305 and needs 18.5pt, so 20 is honest
  // headroom rather than an under-provision nobody had exercised.
  //
  // The trade is real and worth naming: Onest has no Devanagari coverage, so
  // if this line ever carries Devanagari it will tofu instead of clipping.
  // That is a louder failure than the one being removed, which is the right
  // direction, but it is a decision and not a free win.
  text: {
    flexShrink: 1,
    fontFamily: 'Onest_500Medium',
    fontSize: 14.5,
    lineHeight: 20,
    color: INK,
  },
  caret: {
    width: 2,
    height: 14,
    backgroundColor: DEEP_AMBER,
    marginLeft: -6,
  },
  listenText: {
    fontFamily: 'Onest_700Bold',
    fontSize: 13.5,
    color: INK,
  },
});

const edgeStyles = StyleSheet.create({
  tab: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -37 }],
    width: 19,
    height: 74,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: 'rgba(252,250,244,.96)',
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: HAIRLINE,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  // The handoff's 74x19 tab on the bottom edge — the same plate as the
  // landscape one, turned a quarter.
  tabBottom: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [{ translateX: -37 }],
    width: 74,
    height: 19,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: 'rgba(252,250,244,.96)',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: HAIRLINE,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
});

import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

import { SolutionSteps } from '@/components/solution-steps';
import { colors } from '@/constants/brand';
import { type FollowUpStep } from '@/lib/doubt-followup';
import { parseSolutionSteps } from '@/lib/solution-steps';

/**
 * THE ANSWER TO A FOLLOW-UP, ON A SHEET THAT RISES OUT OF THE BAR.
 *
 * Most of the screen, not all of it. A follow-up is a question ABOUT the
 * working behind it, and a full-screen answer hides the very thing being asked
 * about — the same reason the old sheet was removed. It stops at 64%, clear of
 * the bar, so the question and the step being queried stay visible above.
 *
 * It comes only when she answers. There is nothing to show while the student is
 * holding the mic and nothing to show while the server is thinking, so the
 * sheet does not exist then: no empty frame, no spinner in a box. The first
 * step to arrive brings it up, and the rest fill in underneath while she is
 * still speaking — which is what makes it read as being explained to rather
 * than handed a transcript.
 *
 * THE TYPE IS THE SOLUTION'S OWN. `parseSolutionSteps` and `SolutionSteps` are
 * what render the working above it, at `compact` instead of `full`. Its maths
 * is set by the same renderer and its headings carry the same weight, which is
 * the answer to "it shouldn't feel like some text is randomly written" — a
 * second way of setting steps would have drifted from the first within a week.
 *
 * WITHOUT THE NUMBERED RAIL, though. A solution's steps are an ordered method
 * and the numbers are how a student points at one; a follow-up is a few
 * sentences of explanation, where markers claim a structure the content does
 * not have and the rail indents prose away from its own edge for nothing.
 */

/** Bigger than it was: 52% left the answer scrolling after three sentences. */
const SHEET_FRACTION = 0.64;
/**
 * Clear of the bar rather than resting on it. At 96 the sheet and the bar read
 * as one welded object; the answer is a separate thing that came OUT of the
 * button and should be able to be seen as separate.
 */
const SHEET_BOTTOM = 132;
/**
 * ONE CURVE, BOTH WAYS, and written out rather than taken from the layout
 * animation presets.
 *
 * `SlideInDown`/`SlideOutDown` measure the element and animate it as a layout
 * change, which on a sheet whose height depends on content that is still
 * streaming in produces a start that jumps and an exit that snaps. A plain
 * translate and fade cannot do either: the distance is known before the first
 * frame and does not change when a step arrives.
 *
 * Out is quicker than in — 260 against 380 — because dismissing is a decision
 * already made and a slow exit reads as the screen arguing.
 */
const IN_MS = 380;
const OUT_MS = 260;
const EASE_IN = Easing.bezier(0.16, 1, 0.3, 1);
const EASE_OUT = Easing.bezier(0.4, 0, 0.9, 0.4);

export function FollowUpAnswer({
  steps,
  onClose,
}: {
  steps: FollowUpStep[];
  onClose: () => void;
}) {
  const { height } = useWindowDimensions();
  const parsed = useMemo(() => parseSolutionSteps(steps), [steps]);
  const open = steps.length > 0;

  /**
   * Kept mounted through the exit, so there is something to animate out. The
   * previous version unmounted the moment the steps cleared, which is why
   * closing looked like the sheet being deleted rather than leaving.
   */
  const [shown, setShown] = useState(false);
  const p = useSharedValue(0);
  useEffect(() => {
    if (open) {
      setShown(true);
      p.value = withTiming(1, { duration: IN_MS, easing: EASE_IN });
      return;
    }
    p.value = withTiming(0, { duration: OUT_MS, easing: EASE_OUT }, (done) => {
      if (done) runOnJS(setShown)(false);
    });
  }, [open, p]);

  const travel = height * SHEET_FRACTION;
  const sheetStyle = useAnimatedStyle(() => ({
    opacity: p.value,
    transform: [{ translateY: (1 - p.value) * travel }],
  }));
  const scrimStyle = useAnimatedStyle(() => ({ opacity: p.value }));

  if (!shown) return null;

  return (
    <>
      {/* Dim, not black: the working stays legible behind the answer, because
          the answer is about it. Tapping it closes, which is the gesture people
          try first. */}
      <Animated.View style={[styles.scrim, scrimStyle]}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} accessibilityLabel="Close the answer" />
      </Animated.View>

      <Animated.View
        style={[styles.sheet, { maxHeight: height * SHEET_FRACTION }, sheetStyle]}>
        {/* No heading. The sheet only exists while there is an answer on it, so
            a label saying so was telling the student what they could already
            see. The close control stays, because tapping the dim is a guess
            and this is not. */}
        <View style={styles.head}>
          <View style={styles.grabber} />
          <Pressable
            style={styles.close}
            onPress={onClose}
            hitSlop={12}
            accessibilityLabel="Close the answer">
            <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
              <Path
                d="M6 6l12 12M18 6L6 18"
                stroke={colors.slate}
                strokeWidth={2}
                strokeLinecap="round"
              />
            </Svg>
          </Pressable>
        </View>

        <ScrollView
          style={styles.body}
          contentContainerStyle={styles.bodyInner}
          showsVerticalScrollIndicator={false}>
          <SolutionSteps steps={parsed} size="compact" rail={false} />
        </ScrollView>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  scrim: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(28,26,22,0.28)' },
  /**
   * Floating, and stopping short of the bottom so the bar it came out of is
   * still visible under it — the answer belongs to that button and should look
   * like it does.
   */
  sheet: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: SHEET_BOTTOM,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(28,26,22,.10)',
    overflow: 'hidden',
    /** Lighter. The sheet already reads as lifted because the ground behind it
     *  is dimmed; a heavy shadow on top of that was doing the job twice. */
    boxShadow: [
      { offsetX: 0, offsetY: 10, blurRadius: 28, spreadDistance: -14, color: 'rgba(28,26,22,0.28)' },
    ],
  },
  /** The grabber centres on the sheet, so the close sits over it rather than
   *  beside it — otherwise the bar would be centred against one control. */
  head: {
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grabber: {
    width: 36,
    height: 4,
    borderRadius: 99,
    backgroundColor: 'rgba(28,26,22,.16)',
  },
  close: {
    position: 'absolute',
    right: 14,
    top: 9,
    padding: 2,
  },
  body: { flexGrow: 0 },
  bodyInner: { paddingHorizontal: 18, paddingBottom: 22 },
});

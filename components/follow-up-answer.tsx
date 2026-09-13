import { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

import { SolutionSteps } from '@/components/solution-steps';
import { colors } from '@/constants/brand';
import { type FollowUpStep } from '@/lib/doubt-followup';
import { parseSolutionSteps } from '@/lib/solution-steps';

/**
 * THE ANSWER TO A FOLLOW-UP, ON A SHEET THAT RISES OUT OF THE BAR.
 *
 * Half the screen, not all of it. A follow-up is a question ABOUT the working
 * behind it, and a full-screen answer hides the very thing being asked about —
 * the same reason the old sheet was removed. It stops at 52% so the question
 * and the step being queried stay on screen above it.
 *
 * It comes only when she answers. There is nothing to show while the student is
 * holding the mic and nothing to show while the server is thinking, so the
 * sheet does not exist then: no empty frame, no spinner in a box. The first
 * step to arrive brings it up, and the rest fill in underneath while she is
 * still speaking — which is what makes it read as being explained to rather
 * than handed a transcript.
 *
 * THE TYPE IS THE SOLUTION'S OWN. `parseSolutionSteps` and `SolutionSteps` are
 * what render the working above it, at `compact` instead of `full`. That is the
 * whole answer to "it shouldn't feel like some text is randomly written": the
 * answer is numbered on the same rail, its maths set by the same renderer, its
 * headings the same weight. A second way of setting steps would have drifted
 * from the first within a week.
 */

const SHEET_FRACTION = 0.52;

export function FollowUpAnswer({
  steps,
  speaking,
  onClose,
}: {
  steps: FollowUpStep[];
  /** Still talking — the sheet says so rather than looking finished. */
  speaking: boolean;
  onClose: () => void;
}) {
  const { height } = useWindowDimensions();
  const parsed = useMemo(() => parseSolutionSteps(steps), [steps]);
  if (steps.length === 0) return null;

  return (
    <>
      {/* Dim, not black: the working stays legible behind the answer, because
          the answer is about it. Tapping it closes, which is the gesture people
          try first. */}
      <Animated.View
        entering={FadeIn.duration(220)}
        exiting={FadeOut.duration(180)}
        style={styles.scrim}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} accessibilityLabel="Close the answer" />
      </Animated.View>

      <Animated.View
        entering={SlideInDown.duration(320)}
        exiting={SlideOutDown.duration(240)}
        style={[styles.sheet, { maxHeight: height * SHEET_FRACTION }]}>
        <View style={styles.grabber} />

        <View style={styles.head}>
          <Text style={styles.title}>{speaking ? 'Answering…' : 'Follow-up'}</Text>
          <Pressable onPress={onClose} hitSlop={12} accessibilityLabel="Close">
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
          <SolutionSteps steps={parsed} size="compact" />
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
    bottom: 96,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(28,26,22,.10)',
    overflow: 'hidden',
    boxShadow: [
      { offsetX: 0, offsetY: 18, blurRadius: 40, spreadDistance: -16, color: 'rgba(28,26,22,0.45)' },
      { offsetX: 0, offsetY: 2, blurRadius: 6, spreadDistance: -2, color: 'rgba(28,26,22,0.12)' },
    ],
  },
  grabber: {
    alignSelf: 'center',
    width: 36,
    height: 4,
    borderRadius: 99,
    backgroundColor: 'rgba(28,26,22,.16)',
    marginTop: 8,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 10,
  },
  title: {
    fontFamily: 'Onest_700Bold',
    fontSize: 11,
    letterSpacing: 1.1,
    textTransform: 'uppercase',
    color: colors.slate,
  },
  body: { flexGrow: 0 },
  bodyInner: { paddingHorizontal: 18, paddingBottom: 22 },
});

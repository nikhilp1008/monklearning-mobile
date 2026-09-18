// 01 Onboarding — design_handoff_onboarding_live_board, "Live Board" (1B).
//
// THIS REPLACED TWO SCREENS WITH ONE. What was here was a swipeable pair of
// photographs with a headline under each — "AI for JEE & NEET aspirants." and
// "Ask anything. Understand everything." — and a dot pagination between them.
// Both are gone. The product's claim is that a teacher writes on a board while
// you interrupt it, and a still photograph of someone at a desk cannot make
// that claim; it can only assert it in words underneath. So the board itself
// is on screen, teaching, for sixteen seconds.
//
// The story does not wait for the reader and cannot be swiped: it is autoplay
// and it loops, so there is no state where a student is holding a half-swiped
// screen wondering whether there is more. The four captions are the four
// things the app does, and the progress row is there to say the loop is
// finite rather than to be dragged.
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MonkLogo } from '@/components/monk-logo';
import { ObButton } from '@/components/onboarding-kit';
import { StoryBoard } from '@/components/onboarding/story-board';
import { Layer, seg, useStoryClock } from '@/components/onboarding/story-clock';
import { ob, obFont, useDesignScale } from '@/constants/onboarding';

/** The four beats, in the handoff's own words. */
const CAPTIONS = [
  ['A teacher who teaches it live.', 'Pick any chapter. The board comes alive.'],
  ['Interrupt. Ask anything.', 'Doubts get answered mid-sentence, on the board.'],
  ['Snap a question from your book.', 'Taught step by step, not just answered.'],
  ['Practice your way.', 'Pick a subject or chapter. Questions adapt to how you learn.'],
] as const;

export default function WelcomeScreen() {
  const { ds, fs, tracking } = useDesignScale();
  const styles = useMemo(() => createStyles(ds, fs, tracking), [ds, fs, tracking]);
  const { t, float, wave } = useStoryClock();
  /** The stage measures itself so the board can be fitted into it. */
  const [stageHeight, setStageHeight] = useState(0);

  return (
    <View style={styles.screen}>
      {/* The page is white all the way up; the board never reaches the bar. */}
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        {/* The handoff's own lockup file is a generation behind the mark the
            app ships, so this is the app's component rather than the asset
            that came with the design. Same 26pt height it specifies. */}
        <View style={styles.logoRow}>
          <MonkLogo height={ds(26)} />
        </View>

        <View
          style={styles.stage}
          onLayout={(e) => setStageHeight(e.nativeEvent.layout.height)}>
          <StoryBoard
            t={t}
            float={float}
            wave={wave}
            ds={ds}
            fs={fs}
            tracking={tracking}
            stageHeight={stageHeight}
          />
        </View>

        {/* Four captions stacked in one fixed box, one visible at a time. The
            height is fixed at 112 so the board above never moves when a
            two-line sub-heading follows a one-line one. */}
        <View style={styles.captions}>
          {CAPTIONS.map(([head, sub], i) => (
            <Layer key={head} t={t} delay={i * 4} style={StyleSheet.absoluteFill}>
              <Text style={styles.head}>{head}</Text>
              <Text style={styles.sub}>{sub}</Text>
            </Layer>
          ))}
        </View>

        <View style={styles.foot}>
          <View style={styles.progress}>
            {[0, 1, 2, 3].map((i) => (
              <Segment key={i} t={t} index={i} ds={ds} />
            ))}
          </View>
          <ObButton label="Continue" onPress={() => router.push('/email')} />
        </View>
      </SafeAreaView>
    </View>
  );
}

/**
 * One of the four progress segments. It fills across its own beat and then
 * STAYS full until the loop restarts, so the row reads as four things you are
 * being shown rather than as a bar that empties behind you.
 */
function Segment({
  t,
  index,
  ds,
}: {
  t: ReturnType<typeof useStoryClock>['t'];
  index: number;
  ds: (n: number) => number;
}) {
  const fill = useAnimatedStyle(() => {
    const p = t.value;
    const grown = seg(p, index * 0.25, (index + 1) * 0.25);
    // All four reset together in the last 0.4% of the loop, as the design has
    // it — the row empties on the restart, not one segment at a time.
    return { width: `${grown * 100 * (1 - seg(p, 0.996, 1))}%` };
  });
  return (
    <View
      style={{
        flex: 1,
        height: ds(4),
        borderRadius: ds(2),
        backgroundColor: 'rgba(28,26,22,.1)',
        overflow: 'hidden',
      }}>
      <Animated.View style={[{ height: '100%', borderRadius: ds(2), backgroundColor: ob.ink }, fill]} />
    </View>
  );
}

function createStyles(
  ds: (n: number) => number,
  fs: (n: number) => number,
  tracking: (em: number, size: number) => number
) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#FFFFFF' },
    safeArea: { flex: 1 },
    logoRow: { alignItems: 'center', paddingTop: ds(26) },
    /** The board is centred in whatever is left between the logo and the
     *  captions, which is the handoff's `flex: 1` stage. */
    stage: { flex: 1, minHeight: 0, alignItems: 'center', justifyContent: 'center' },
    captions: { height: ds(112), marginHorizontal: ds(34), marginBottom: ds(20) },
    head: {
      fontFamily: obFont.sb600,
      fontSize: fs(31),
      lineHeight: fs(33.5),
      letterSpacing: tracking(-0.03, 31),
      color: ob.ink,
    },
    sub: {
      marginTop: ds(10),
      fontFamily: obFont.r400,
      fontSize: fs(16),
      lineHeight: fs(22.4),
      color: '#6B6559',
    },
    foot: { paddingHorizontal: ds(34), paddingBottom: ds(36), gap: ds(22) },
    progress: { flexDirection: 'row', gap: ds(6) },
  });
}

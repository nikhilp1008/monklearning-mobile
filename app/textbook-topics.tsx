import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { jumpToTopic, readerTopics, releaseTopicJump } from '@/lib/textbook-reader-state';
import { hapticSwitched } from '@/lib/haptics';

/**
 * THE CHAPTER'S TOPICS, as a sheet you can throw away.
 *
 * WHAT WAS WRONG WITH IT. An all-caps letter-spaced overline reading "IN THIS
 * CHAPTER · MOTION IN A STRAIGHT LINE", repeating a chapter name already
 * printed in the bar behind it; the reading topic marked by a full-bleed amber
 * wash with the word READING set in amber capitals beside it; and no way out
 * but a tap on the scrim. Every one of those is a decade-old pattern, and
 * together they made the one panel a student opens most often the least
 * current thing in the app.
 *
 * WHAT IT IS NOW. A sentence-case title. Numbers that stay out of the way. The
 * reading topic marked by an inset tint and an amber rule down its left edge
 * rather than a band across the whole sheet — a marker, not a highlight. And it
 * comes up on a spring and goes down under your thumb.
 *
 * DRAG TO CLOSE, because a sheet that only answers a tap on the scrim is a
 * sheet you have to aim at. It follows the finger, springs back if the pull was
 * small, and leaves if it was not — or if it was quick, which is the flick
 * people actually do. Distance OR velocity, never distance alone: a fast short
 * flick is the most common dismissal there is and a distance-only threshold
 * ignores it.
 *
 * `readerTopics` is read once on mount rather than subscribed. The reader
 * cannot change its topic list while this covers it, and re-reading on every
 * render made the sheet flicker as the reader animated its own topic change
 * underneath.
 */

/** How far down the sheet starts, and how far it must go to leave. */
const SHEET_TRAVEL = 520;
const CLOSE_DISTANCE = 110;
const CLOSE_VELOCITY = 800;
/** How long the sheet takes to go down after a topic is picked. The page
 *  moves only once it has gone, so this is the first half of the switch. */
const PICK_OUT_MS = 200;

export default function TextbookTopicsScreen() {
  const { scale, verticalScale } = useScale();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [{ title, topics, active }] = useState(readerTopics);

  /** 0 is open, SHEET_TRAVEL is gone. */
  const y = useSharedValue(SHEET_TRAVEL);
  useEffect(() => {
    y.value = withSpring(0, { damping: 22, stiffness: 240, mass: 0.7 });
  }, [y]);

  /** Once only. A pick, a scrim tap and a flick can all end the sheet, and a
   *  second `router.back()` would take the student out of the chapter too. */
  const gone = useRef(false);
  const leave = useCallback(() => {
    if (gone.current) return;
    gone.current = true;
    // However the sheet went, a topic picked on the way is let go now.
    releaseTopicJump();
    router.back();
  }, []);

  /** Out under its own animation, so the route unmounts on a finished slide
   *  rather than on the frame the finger lifted. */
  const dismiss = useCallback(() => {
    y.value = withTiming(
      SHEET_TRAVEL,
      { duration: 220, easing: Easing.bezier(0.4, 0, 0.9, 0.4) },
      (done) => {
        if (done) runOnJS(leave)();
      }
    );
  }, [y, leave]);

  const pan = Gesture.Pan()
    .onUpdate((e) => {
      // Downward only. A sheet that can be dragged up past its own top edge
      // reads as broken, and there is nothing above it to reveal.
      y.value = Math.max(0, e.translationY);
    })
    .onEnd((e) => {
      if (e.translationY > CLOSE_DISTANCE || e.velocityY > CLOSE_VELOCITY) {
        y.value = withTiming(
          SHEET_TRAVEL,
          { duration: 200, easing: Easing.bezier(0.4, 0, 0.9, 0.4) },
          (done) => {
            if (done) runOnJS(leave)();
          }
        );
        return;
      }
      y.value = withSpring(0, { damping: 24, stiffness: 260, mass: 0.7 });
    });

  const sheetStyle = useAnimatedStyle(() => ({ transform: [{ translateY: y.value }] }));
  /** The scrim thins as the sheet leaves, so the page behind comes back as it
   *  goes rather than all at once when it has gone. */
  const scrimStyle = useAnimatedStyle(() => ({
    opacity: interpolate(y.value, [0, SHEET_TRAVEL], [1, 0]),
  }));

  /**
   * DOWN FIRST, THEN THE PAGE MOVES.
   *
   * This switched the topic and removed the sheet on the same frame. The
   * sheet did not go down — it was simply gone — and the page's slide ran
   * underneath it, so the one piece of motion that says "you went forward"
   * was half hidden and the rest looked like a jump cut.
   *
   * Now the pick is two moves in a row, each quick enough to be felt rather
   * than watched: the sheet drops away with the scrim thinning as it goes,
   * and only once it has gone does the page slide to the new topic, in full
   * view. The tap is felt at once, so nothing about the half-second reads as
   * the app catching up.
   *
   * The new topic is BUILT during the drop, not after it — `held` keeps it
   * off-screen until `leave` lets it go. Built after, it cost a third of a
   * second of nothing moving between the sheet going and the page sliding.
   */
  const picking = useRef(false);
  const release = useCallback(() => {
    picking.current = false;
  }, []);
  const choose = (index: number) => {
    if (picking.current) return;
    picking.current = true;
    if (index !== active) hapticSwitched();
    jumpToTopic(index, true);
    y.value = withTiming(
      SHEET_TRAVEL,
      { duration: PICK_OUT_MS, easing: Easing.bezier(0.4, 0, 0.9, 0.4) },
      (done) => {
        // Interrupted means a finger took the sheet mid-drop; it decides.
        if (done) runOnJS(leave)();
        else runOnJS(release)();
      }
    );
  };

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <Animated.View style={[styles.scrim, scrimStyle]}>
        <Pressable style={StyleSheet.absoluteFill} onPress={dismiss} accessibilityLabel="Close" />
      </Animated.View>

      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.sheet, sheetStyle]}>
          {/* The grabber sits in its own row and the whole row is the drag
              target, because a 40pt bar is a target you have to find. */}
          <View style={styles.grabRow}>
            <View style={styles.grabber} />
          </View>

          <View style={styles.head}>
            <Text style={styles.heading}>Topics</Text>
            <Text style={styles.subheading} numberOfLines={1}>
              {title}
            </Text>
          </View>

          <ScrollView
            style={styles.list}
            contentContainerStyle={[styles.listContent, { paddingBottom: insets.bottom + 10 }]}
            showsVerticalScrollIndicator={false}>
            {topics.map((topic, index) => {
              const current = index === active;
              return (
                <Pressable
                  key={topic.n}
                  onPress={() => choose(index)}
                  style={({ pressed }) => [
                    styles.row,
                    current && styles.rowCurrent,
                    pressed && !current && styles.rowPressed,
                  ]}>
                  {/* An amber rule down the left edge, not a band across the
                      sheet. It marks the row a student is on without turning
                      that row into the loudest thing on screen. */}
                  {current && <View style={styles.mark} />}
                  <Text style={[styles.number, current && styles.numberCurrent]}>
                    {String(index + 1)}
                  </Text>
                  <Text style={[styles.title, current && styles.titleCurrent]}>{topic.title}</Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    root: { flex: 1, justifyContent: 'flex-end' },
    scrim: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(28,26,22,.34)' },
    sheet: {
      backgroundColor: colors.paper,
      borderTopLeftRadius: scale(26),
      borderTopRightRadius: scale(26),
      maxHeight: '72%',
      /** Lifted off the page rather than sitting flush against it. */
      boxShadow: [
        { offsetX: 0, offsetY: -6, blurRadius: 24, spreadDistance: -8, color: 'rgba(28,26,22,0.24)' },
      ],
    },

    grabRow: { alignItems: 'center', paddingTop: verticalScale(9), paddingBottom: verticalScale(3) },
    grabber: { width: scale(38), height: 4, borderRadius: 99, backgroundColor: 'rgba(28,26,22,.16)' },

    /** Sentence case, no tracking, no capitals. The old overline said "IN THIS
     *  CHAPTER · <chapter>" in spaced caps and repeated the bar behind it. */
    head: { paddingHorizontal: scale(22), paddingTop: verticalScale(6), paddingBottom: verticalScale(10) },
    heading: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(19),
      letterSpacing: scale(-0.3),
      color: colors.ink,
    },
    subheading: {
      marginTop: verticalScale(1),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      color: colors.faint,
    },

    list: { flexGrow: 0 },
    listContent: { paddingHorizontal: scale(12) },
    row: {
      position: 'relative',
      flexDirection: 'row',
      // Top, not centre: two of these titles wrap, and centring floats the
      // number into the gap between the lines instead of setting it on the
      // first one. A numbered list aligns on its first line.
      alignItems: 'flex-start',
      gap: scale(12),
      paddingVertical: verticalScale(12),
      paddingLeft: scale(16),
      paddingRight: scale(14),
      borderRadius: scale(14),
    },
    /** Inset and rounded, so it reads as one row lit rather than the sheet
     *  striped. */
    rowCurrent: { backgroundColor: colors.tint },
    rowPressed: { backgroundColor: 'rgba(28,26,22,.035)' },
    mark: {
      position: 'absolute',
      left: scale(6),
      top: verticalScale(14),
      bottom: verticalScale(14),
      width: scale(2.5),
      borderRadius: 99,
      backgroundColor: colors.marigold,
    },
    /**
     * Plain numbers, not zero-padded. "01" belongs on a chapter list of
     * twenty-eight; a chapter has five topics and the padding was doing
     * nothing but adding a digit. Right-aligned on tabular figures so a
     * two-digit chapter still forms a column.
     */
    number: {
      width: scale(15),
      textAlign: 'right',
      fontFamily: 'Onest_500Medium',
      fontSize: scale(14),
      lineHeight: scale(22),
      fontVariant: ['tabular-nums'],
      color: colors.quiet,
    },
    numberCurrent: { color: colors.amberText },
    title: {
      flex: 1,
      fontFamily: 'Onest_500Medium',
      fontSize: scale(15.5),
      lineHeight: scale(22),
      color: colors.ink,
    },
    titleCurrent: { fontFamily: 'Onest_600SemiBold' },
  });
}

import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { Skeleton, stagger } from '@/components/skeleton';
import { WashSelectRow } from '@/components/wash-select-row';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { CatalogueSubject, getCatalogue } from '@/lib/drona';

// Matched to practice-focus.tsx, the app's other bottom sheet — a flick
// dismisses even if the sheet barely moved, so a quick swipe down doesn't need
// a full quarter-height drag to register.
const DISMISS_VELOCITY = 900;
const DISMISS_DISTANCE_RATIO = 0.25;
const DISMISS_ANIMATION_DURATION = 220;

const TALKS = [
  { title: 'EMF vs terminal voltage', when: '2d ago' },
  { title: 'Why a fuse wire melts first', when: 'last week' },
];

export default function TopicSheetScreen() {
  const params = useLocalSearchParams<{
    chapterId?: string;
    chapterNumber?: string;
    chapterTitle?: string;
    subject?: string;
    classLabel?: string;
  }>();
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [selected, setSelected] = useState<string | null>(null);
  const [playToken, setPlayToken] = useState(0);

  const translateY = useSharedValue(0);
  // Measured rather than assumed: the sheet is pinned to a top offset, so its
  // height is whatever the window leaves — which is not a constant.
  const sheetHeight = useSharedValue(verticalScale(560));

  const closeSheet = () => router.back();

  const dragGesture = Gesture.Pan()
    .onUpdate((event) => {
      // Downwards only. Dragging up would lift the sheet off the bottom edge
      // and show the scrim underneath it.
      translateY.value = Math.max(0, event.translationY);
    })
    .onEnd((event) => {
      const pastDistance = translateY.value > sheetHeight.value * DISMISS_DISTANCE_RATIO;
      const flicked = event.velocityY > DISMISS_VELOCITY;
      if (pastDistance || flicked) {
        translateY.value = withTiming(
          sheetHeight.value,
          { duration: DISMISS_ANIMATION_DURATION, easing: Easing.in(Easing.cubic) },
          (finished) => {
            if (finished) runOnJS(closeSheet)();
          }
        );
      } else {
        translateY.value = withSpring(0, { damping: 22, stiffness: 280 });
      }
    });

  const sheetAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const select = useCallback((topic: string) => {
    setSelected(topic);
    setPlayToken((n) => n + 1);
  }, []);

  const chapterId = params.chapterId;
  const chapterNumber = params.chapterNumber ?? '03';
  const chapterTitle = params.chapterTitle ?? 'Current Electricity';
  const subject = params.subject ?? 'Physics';
  const classLabel = params.classLabel ?? 'Class 12';

  const [catalogue, setCatalogue] = useState<CatalogueSubject[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setLoadError(null);
    getCatalogue()
      .then((data) => {
        if (!cancelled) setCatalogue(data);
      })
      .catch((err) => {
        if (!cancelled) {
          setLoadError(err instanceof Error ? err.message : 'Could not load topics.');
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [reloadToken]);

  // chapterId is matched across every subject's chapters, not just the one
  // named by the subject param — the two aren't guaranteed to agree.
  const chapter = useMemo(() => {
    if (!catalogue) return null;
    for (const subj of catalogue) {
      const found = subj.chapters.find((c) => c.id === chapterId);
      if (found) return found;
    }
    return null;
  }, [catalogue, chapterId]);

  const topics = useMemo(() => chapter?.subtopics.map((s) => s.name) ?? [], [chapter]);

  // Whatever the student taps/free-talks reaches the real backend: it's
  // forwarded as the scoping conversation's opening line in entering-classroom.
  // `replace`, not `push`: this screen is a transparentModal, so pushing left
  // it sitting in the stack underneath the whole class. Nothing showed while
  // the opaque classroom covered it, but the moment the class ended and the
  // summary animated in, this sheet was what showed through behind it for
  // about a second. Replacing takes the sheet out of the stack on the way in.
  const goToClassroom = (initialUtterance?: string) =>
    router.replace({
      pathname: '/entering-classroom',
      params: { chapterId: chapterId ?? '', chapterTitle, initialUtterance: initialUtterance ?? '' },
    });

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <Pressable style={styles.scrim} onPress={() => router.back()} />
      <Animated.View
        style={[styles.sheet, sheetAnimatedStyle]}
        onLayout={(event) => {
          sheetHeight.value = event.nativeEvent.layout.height;
        }}>
        <SafeAreaView style={styles.flex} edges={['bottom']}>
          {/* The handle and the header, and nothing below them: the topic grid
              is its own ScrollView, and a pan gesture over that would fight its
              vertical scroll instead of handing off to it. */}
          <GestureDetector gesture={dragGesture}>
            <View style={styles.dragArea}>
              <View style={styles.handle} />
              <View style={styles.headerRow}>
                <View style={styles.headerTextBlock}>
                  <Text style={styles.headerOverline}>
                    Chapter {chapterNumber} · {subject} · {classLabel}
                  </Text>
                  <Text style={styles.headerTitle}>{chapterTitle}</Text>
                </View>
                <Text style={styles.headerHint}>pick one topic</Text>
              </View>
            </View>
          </GestureDetector>

          <ScrollView style={styles.flex} showsVerticalScrollIndicator={false}>
            {loading ? (
              // Six cards in the same two-up grid the topics land in.
              <View style={styles.grid}>
                {Array.from({ length: 6 }, (_, i) => (
                  <View key={i} style={styles.topicCard}>
                    <Skeleton delay={stagger(i)} style={styles.skeletonTopic} />
                  </View>
                ))}
              </View>
            ) : loadError ? (
              <View style={styles.stateBlock}>
                <Text style={styles.stateText}>{loadError}</Text>
                <Pressable onPress={() => setReloadToken((n) => n + 1)}>
                  <Text style={styles.retryText}>Try again</Text>
                </Pressable>
              </View>
            ) : topics.length > 0 ? (
              <View style={styles.grid}>
                {topics.map((topic) => {
                  const isSelected = selected === topic;
                  return (
                    <WashSelectRow
                      key={topic}
                      selected={isSelected}
                      playToken={playToken}
                      onPress={() => select(topic)}
                      style={styles.topicCard}
                      selectedStyle={styles.topicCardSelected}>
                      <Text
                        style={[styles.topicCardText, isSelected && styles.topicCardTextSelected]}>
                        {topic}
                      </Text>
                    </WashSelectRow>
                  );
                })}
              </View>
            ) : (
              <View style={styles.stateBlock}>
                <Text style={styles.stateText}>No specific topics listed for this chapter yet.</Text>
              </View>
            )}

            <Pressable style={styles.freetalkRow} onPress={() => goToClassroom()}>
              <MicIcon size={scale(15)} />
              <Text style={styles.freetalkText}>
                Can&apos;t find your topic? <Text style={styles.freetalkBold}>Just start talking</Text>
              </Text>
              <ArrowRightIcon color={colors.faint} size={scale(13)} />
            </Pressable>

            <View style={styles.talksSection}>
              <Text style={styles.talksOverline}>From your talks</Text>
              <View style={styles.talksList}>
                {TALKS.map((talk) => (
                  <Pressable
                    key={talk.title}
                    style={styles.talkRow}
                    onPress={() => goToClassroom(talk.title)}>
                    <Text style={styles.talkTitle} numberOfLines={1}>
                      {talk.title}
                    </Text>
                    <Text style={styles.talkWhen}>{talk.when}</Text>
                    <ChevronRightIcon size={scale(12)} />
                  </Pressable>
                ))}
              </View>
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <Pressable
              style={[styles.cta, !selected && styles.ctaDisabled]}
              disabled={!selected}
              onPress={() => goToClassroom(selected ?? undefined)}>
              {/* Single line, ellipsised: real subtopic names run long ("Electric
                  Current, Ohm's Law & Drift Velocity") and, against the pill's
                  fixed height, a second line spilled outside the button and
                  pushed the arrow off-screen. */}
              <Text
                style={[styles.ctaText, !selected && styles.ctaTextDisabled]}
                numberOfLines={1}
                ellipsizeMode="tail">
                {selected ? `Start with ${selected}` : 'Pick a topic to start'}
              </Text>
              {selected && <ArrowRightIcon color={colors.paper} size={scale(15)} />}
            </Pressable>
          </View>
        </SafeAreaView>
      </Animated.View>
    </View>
  );
}

function MicIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M12 3a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V7a4 4 0 0 1 4-4Z"
        stroke={colors.slate}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 11a7 7 0 0 0 14 0M12 18v3"
        stroke={colors.slate}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function ChevronRightIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path
        d="M5.5 3 10.5 8 5.5 13"
        stroke={colors.faint}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    root: {
      flex: 1,
    },
    flex: {
      flex: 1,
    },
    scrim: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(28,26,22,.42)',
    },
    sheet: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: verticalScale(96),
      backgroundColor: '#fff',
      borderTopLeftRadius: scale(24),
      borderTopRightRadius: scale(24),
      paddingHorizontal: scale(20),
      shadowColor: '#16130E',
      shadowOffset: { width: 0, height: verticalScale(-10) },
      shadowOpacity: 0.25,
      shadowRadius: scale(20),
      elevation: 12,
    },
    // A generous grab target — the handle alone is 5pt tall, which is not
// something a thumb can reliably catch.
    dragArea: {
      flexDirection: 'column',
      paddingBottom: verticalScale(4),
    },
    handle: {
      width: scale(40),
      height: verticalScale(5),
      borderRadius: scale(99),
      backgroundColor: 'rgba(28,26,22,.18)',
      alignSelf: 'center',
      marginTop: verticalScale(10),
      marginBottom: verticalScale(14),
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: scale(10),
    },
    headerTextBlock: {
      minWidth: 0,
    },
    headerOverline: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(8.1),
      letterSpacing: scale(0.95),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    headerTitle: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(21),
      letterSpacing: scale(-0.42),
      color: colors.ink,
      marginTop: verticalScale(3),
    },
    headerHint: {
      flexShrink: 0,
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(9),
      marginTop: verticalScale(16),
    },
    stateBlock: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: verticalScale(8),
      minHeight: verticalScale(120),
      marginTop: verticalScale(16),
    },
    stateText: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      textAlign: 'center',
      paddingHorizontal: scale(20),
    },
    retryText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: colors.marigold,
    },
    // One line of text, centred in the card the topic will fill.
    skeletonTopic: {
      width: '76%',
      height: verticalScale(12),
    },
    topicCard: {
      flexBasis: '48%',
      flexGrow: 1,
      minHeight: verticalScale(58),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(8),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.2)',
      borderRadius: scale(13),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(14),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1.5) },
      shadowOpacity: 0.05,
      shadowRadius: scale(2),
      elevation: 1,
    },
    topicCardSelected: {
      borderWidth: scale(1.6),
      borderColor: colors.marigold,
    },
    topicCardText: {
      flex: 1,
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(13),
      lineHeight: scale(17.55),
      color: colors.ink,
    },
    topicCardTextSelected: {
      fontFamily: 'Onest_700Bold',
    },
    freetalkRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(9),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(2),
      marginTop: verticalScale(8),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.08)',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.08)',
    },
    freetalkText: {
      flex: 1,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      color: colors.slate,
    },
    freetalkBold: {
      fontFamily: 'Onest_700Bold',
      color: colors.ink,
      textDecorationLine: 'underline',
      textDecorationColor: 'rgba(238,163,31,.6)',
    },
    talksSection: {
      marginTop: verticalScale(16),
      paddingBottom: verticalScale(16),
    },
    talksOverline: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(8.1),
      letterSpacing: scale(0.95),
      textTransform: 'uppercase',
      color: colors.faint,
      marginBottom: verticalScale(9),
    },
    talksList: {
      flexDirection: 'column',
      gap: verticalScale(7),
    },
    talkRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(11),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.08)',
      borderRadius: scale(12),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(15),
    },
    talkTitle: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(13.5),
      color: colors.ink,
    },
    talkWhen: {
      flexShrink: 0,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(11),
      color: colors.faint,
    },
    footer: {
      flexShrink: 0,
      paddingTop: verticalScale(12),
      paddingBottom: verticalScale(10),
      backgroundColor: '#fff',
    },
    cta: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(9),
      width: '100%',
      height: verticalScale(52),
      paddingHorizontal: scale(20),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(6) },
      shadowOpacity: 0.3,
      shadowRadius: scale(10),
      elevation: 6,
    },
    ctaDisabled: {
      backgroundColor: 'rgba(28,26,22,.07)',
      shadowOpacity: 0,
      elevation: 0,
    },
    ctaText: {
      // Shrinks rather than overflowing when the topic name is long; the
      // arrow beside it keeps its space instead of being pushed out.
      flexShrink: 1,
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      color: colors.paper,
    },
    ctaTextDisabled: {
      color: colors.faint,
    },
  });
}

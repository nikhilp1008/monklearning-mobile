import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, { SlideInLeft, SlideInRight } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { BlockState, EMPTY_BLOCK_STATE, TextbookBlock } from '@/components/textbook/blocks';
import { kicker } from '@/components/textbook/theme';
import { Chapter, groupBlocks, loadChapter } from '@/lib/textbooks';
import { setReaderActive, setReaderTopics, useReaderJump } from '@/lib/textbook-reader-state';

/**
 * One topic at a time.
 *
 * Topics are self-contained by design: a student finishes one and explicitly
 * moves on, rather than scrolling from the end of a checkpoint straight into
 * the next topic's first paragraph. That is why the scroll resets and the
 * progress bar restarts on every move, and why the content slides rather than
 * jumping, so the direction of travel is never ambiguous.
 *
 * Block interaction state lives here rather than in the blocks, so a student
 * who solves an MCQ, opens a derivation step, then wanders to another topic
 * and back finds it as they left it. It is deliberately not persisted: the
 * design asks for no reading progress, no streaks and nothing to keep up with.
 */
export default function TextbookReaderScreen() {
  const params = useLocalSearchParams<{
    subject?: string;
    classLevel?: string;
    title?: string;
    number?: string;
  }>();
  const subject = (params.subject ?? '').toLowerCase();
  const classLevel = Number(params.classLevel ?? 11);
  const title = params.title ?? '';

  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [missing, setMissing] = useState(false);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [percent, setPercent] = useState(0);
  const [state, setState] = useState<BlockState>(EMPTY_BLOCK_STATE);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    let cancelled = false;
    loadChapter(subject, classLevel, title)
      .then((data) => {
        if (cancelled) return;
        if (!data) setMissing(true);
        else setChapter(data);
      })
      .catch(() => {
        if (!cancelled) setMissing(true);
      });
    return () => {
      cancelled = true;
    };
  }, [subject, classLevel, title]);

  // The topic sheet is its own route, so it reads the topic list and reports a
  // chosen topic through the shared slot rather than through params.
  useEffect(() => {
    if (!chapter) return;
    setReaderTopics(
      chapter.title,
      chapter.topics.map((t) => ({ n: t.n, title: t.title }))
    );
    setReaderActive(active);
    // `active` is deliberately not a dependency: this publishes the topic LIST
    // when the chapter arrives, and seeds the position once. Every later move
    // is published by `goTo`, and re-running here on each topic change would
    // rewrite the list on every tap for no reason.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter]);

  const goTo = useCallback(
    (index: number) => {
      setActive((current) => {
        if (index === current) return current;
        setDirection(index > current ? 1 : -1);
        setPercent(0);
        setReaderActive(index);
        scrollRef.current?.scrollTo({ y: 0, animated: false });
        return index;
      });
    },
    []
  );

  useReaderJump(goTo);

  const set = useCallback(
    <K extends keyof BlockState>(key: K, id: string, value: BlockState[K][string]) => {
      setState((prev) => ({ ...prev, [key]: { ...prev[key], [id]: value } }));
    },
    []
  );

  const topic = chapter?.topics[active];
  const blocks = useMemo(() => (topic ? groupBlocks(topic.blocks) : []), [topic]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const scrollable = contentSize.height - layoutMeasurement.height;
    setPercent(scrollable <= 0 ? 100 : Math.min(100, Math.max(0, (contentOffset.y / scrollable) * 100)));
  };

  if (missing) {
    return (
      <View style={styles.screen}>
        <StatusBar style="dark" />
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
          <View style={styles.state}>
            <Text style={styles.stateTitle}>Not written yet</Text>
            <Text style={styles.stateBody}>This chapter is on the way. Try another one for now.</Text>
            <Pressable style={styles.stateButton} onPress={() => router.back()}>
              <Text style={styles.stateButtonText}>Back to chapters</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  if (!chapter || !topic) {
    return (
      <View style={styles.screen}>
        <StatusBar style="dark" />
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <View style={styles.state}>
            <ActivityIndicator color={colors.faint} />
          </View>
        </SafeAreaView>
      </View>
    );
  }

  const atFirst = active === 0;
  const atLast = active === chapter.topics.length - 1;

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.topBar}>
          <Pressable onPress={() => router.back()} hitSlop={10} style={styles.back}>
            <Svg viewBox="0 0 16 16" width={scale(16)} height={scale(16)} fill="none">
              <Path
                d="M10 3.5 5.5 8 10 12.5"
                stroke={colors.ink}
                strokeWidth={1.9}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </Pressable>
          <View style={styles.topBarText}>
            <Text style={styles.chapterTitle} numberOfLines={1}>
              {/* The catalogue's name, not the source book's. Our corpus calls
                  this chapter "Trigonometry" where the reference PDF calls it
                  "Trigonometric Functions", and a student who taps one name
                  should not land on another. Same reason the number comes from
                  the list. */}
              {title || chapter.title}
            </Text>
            <Text style={styles.chapterMeta} numberOfLines={1}>
              Chapter {params.number || chapter.chapter} · {chapter.subject}
            </Text>
          </View>
          <Text style={styles.percent}>{Math.round(percent)}%</Text>
        </View>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${percent}%` }]} />
        </View>

        <ScrollView
          ref={scrollRef}
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          onScroll={onScroll}
          scrollEventThrottle={16}>
          <Animated.View
            key={active}
            entering={(direction === 1 ? SlideInRight : SlideInLeft).duration(320)}
            style={styles.topicBody}>
            <View style={styles.topicHead}>
              <Text style={kicker(scale)}>
                Topic {topic.n} / {String(chapter.topics.length).padStart(2, '0')}
              </Text>
              <Text style={styles.topicTitle}>{topic.title}</Text>
            </View>
            {blocks.map((block, index) => (
              <TextbookBlock
                key={`${active}-${index}`}
                block={block}
                ctx={{
                  uid: `${active}-${index}`,
                  scale,
                  state,
                  set,
                  topicNumber: topic.n,
                }}
              />
            ))}
          </Animated.View>
        </ScrollView>
      </SafeAreaView>

      <SafeAreaView edges={['bottom']} style={styles.navWrap} pointerEvents="box-none">
        <View style={styles.nav}>
          <Pressable style={styles.topicsButton} onPress={() => router.push('/textbook-topics')}>
            <Svg viewBox="0 0 16 16" width={scale(14)} height={scale(14)} fill="none">
              <Path
                d="M2.5 4h11M2.5 8h11M2.5 12h7"
                stroke={colors.ink}
                strokeWidth={1.8}
                strokeLinecap="round"
              />
            </Svg>
            <Text style={styles.topicsLabel}>Topics</Text>
          </Pressable>

          <View style={styles.navCentre}>
            <Pressable
              disabled={atFirst}
              onPress={() => goTo(active - 1)}
              hitSlop={6}
              style={styles.navArrow}>
              <Svg viewBox="0 0 16 16" width={scale(15)} height={scale(15)} fill="none">
                <Path
                  d="M10 3.5 5.5 8 10 12.5"
                  stroke={atFirst ? colors.disabled : colors.ink}
                  strokeWidth={1.9}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </Pressable>
            <Pressable style={styles.position} onPress={() => router.push('/textbook-topics')}>
              <Text style={styles.positionText}>
                {active + 1}
                <Text style={styles.positionTotal}>/{chapter.topics.length}</Text>
              </Text>
            </Pressable>
            <Pressable
              disabled={atLast}
              onPress={() => goTo(active + 1)}
              hitSlop={6}
              style={styles.navArrow}>
              <Svg viewBox="0 0 16 16" width={scale(15)} height={scale(15)} fill="none">
                <Path
                  d="M6 3.5 10.5 8 6 12.5"
                  stroke={atLast ? colors.disabled : colors.ink}
                  strokeWidth={1.9}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </Pressable>
          </View>

          {/* Balances the Topics button so the position pill sits optically
              centred rather than being pushed right by it. */}
          <View style={styles.navSpacer} />
        </View>
      </SafeAreaView>
    </View>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.reading },
    safeArea: { flex: 1 },
    topBar: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(6),
      paddingBottom: verticalScale(10),
    },
    back: { width: scale(34), height: scale(44), justifyContent: 'center' },
    topBarText: { flex: 1 },
    chapterTitle: { fontFamily: 'Onest_700Bold', fontSize: scale(15), color: colors.ink },
    chapterMeta: { fontFamily: 'Onest_700Bold', fontSize: scale(12), color: colors.faint },
    percent: { fontFamily: 'Onest_800ExtraBold', fontSize: scale(11), color: colors.faint },
    progressTrack: { height: 2, backgroundColor: 'rgba(28,26,22,.1)' },
    progressFill: { height: 2, backgroundColor: colors.marigold },
    scroll: { flex: 1 },
    scrollContent: { paddingTop: verticalScale(4), paddingBottom: verticalScale(120) },
    topicBody: { paddingHorizontal: scale(24), paddingTop: verticalScale(18), gap: verticalScale(20) },
    topicHead: { borderBottomWidth: 1, borderBottomColor: 'rgba(28,26,22,.1)', paddingBottom: verticalScale(14) },
    topicTitle: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(25),
      letterSpacing: scale(-0.65),
      lineHeight: scale(28),
      color: colors.ink,
      marginTop: verticalScale(5),
    },
    navWrap: { position: 'absolute', left: 0, right: 0, bottom: 0 },
    nav: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: scale(16),
      marginBottom: verticalScale(10),
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.12)',
      borderRadius: scale(99),
      paddingVertical: scale(6),
      paddingHorizontal: scale(8),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.12,
      shadowRadius: 26,
      elevation: 8,
    },
    topicsButton: { flexDirection: 'row', alignItems: 'center', gap: scale(7), height: scale(40), paddingHorizontal: scale(8) },
    topicsLabel: { fontFamily: 'Onest_700Bold', fontSize: scale(13.5), color: colors.ink },
    navCentre: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: scale(4) },
    navArrow: { width: scale(40), height: scale(40), alignItems: 'center', justifyContent: 'center' },
    position: {
      minWidth: scale(64),
      height: scale(30),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: scale(99),
      backgroundColor: colors.tint,
      paddingHorizontal: scale(10),
    },
    positionText: { fontFamily: 'Onest_700Bold', fontSize: scale(14.5), color: colors.ink },
    positionTotal: { fontFamily: 'Onest_600SemiBold', color: colors.faint },
    navSpacer: { width: scale(86) },
    state: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: verticalScale(8), paddingHorizontal: scale(32) },
    stateTitle: { fontFamily: 'Onest_700Bold', fontSize: scale(19), color: colors.ink },
    stateBody: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      lineHeight: scale(20),
      color: colors.slate,
      textAlign: 'center',
    },
    stateButton: {
      marginTop: verticalScale(8),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(26),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
    },
    stateButtonText: { fontFamily: 'Onest_600SemiBold', fontSize: scale(15), color: colors.paper },
  });
}

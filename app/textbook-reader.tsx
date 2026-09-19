import { router, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
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
  useWindowDimensions,
  View,
  type LayoutChangeEvent,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { useReadingSize } from '@/hooks/use-reading-size';
import {
  READING_SIZE_LABEL,
  nextReadingSize,
  readingMultiplier,
} from '@/lib/reading-size';
import { BlockState, EMPTY_BLOCK_STATE, TextbookBlock } from '@/components/textbook/blocks';
import { Chapter, groupBlocks, loadChapter } from '@/lib/textbooks';
import { setReaderActive, setReaderTopics, useReaderJump } from '@/lib/textbook-reader-state';
import { hapticSwitched } from '@/lib/haptics';

/**
 * HOW LONG A TOPIC TAKES TO CHANGE: the page leaving and the next arriving move
 * together, edge to edge, over this long. Quick enough that nobody waits on it,
 * long enough to be seen — the move is what tells a student which way they
 * went. Used by the arrows and by a pick from the Topics sheet, which lands
 * here only after the sheet has finished going down.
 */
const TOPIC_SLIDE_MS = 280;
/** Even through the middle rather than front-loaded, so the travel itself is
 *  what the eye catches — an ease-out spends most of its distance in the
 *  first few frames, which is exactly where a busy frame lands. */
const TOPIC_EASE = Easing.bezier(0.4, 0, 0.2, 1);
/**
 * How much of a topic is built for the move itself. A slide only ever shows
 * the top of the page, and building the whole topic — every paragraph,
 * formula and figure — is what made the switch wait. The rest is added the
 * moment the slide lands, while nothing is moving, and well before anyone
 * could scroll down to it.
 */
const FIRST_PAINT_BLOCKS = 8;

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
  /**
   * The header is absolutely positioned, and Yoga lays an absolute child out
   * against its parent's BORDER box — so `top: 0` inside a SafeAreaView landed
   * it under the Dynamic Island rather than below it. It carries the inset as
   * its own padding instead, and the scroll pads by the measured total.
   */
  const insets = useSafeAreaInsets();
  /**
   * The reader's own text size, as a second scale.
   *
   * `type` is the device scale times the student's choice and is used for font
   * sizes and line heights only; `scale` stays the device scale and keeps every
   * box, radius, pad and figure viewport exactly where the layout put it. They
   * were one function until a 1.15 multiplier grew a 306pt card to 352 inside a
   * 342pt column.
   */
  const { size: readingSize, choose: chooseReadingSize } = useReadingSize();
  const type = useCallback(
    (n: number) => scale(n) * readingMultiplier(readingSize),
    [scale, readingSize]
  );
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [missing, setMissing] = useState(false);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  /**
   * TWO PAGES, TWO SLOTS, AND THE SLIDE WAITS FOR THE PAGE.
   *
   * A topic is a lot to build — dozens of paragraphs, formulas and figures —
   * and building it holds the screen for a beat. The slide used to start the
   * moment the new page was created, so its clock ran through that beat and
   * the first thing anyone saw was a page already most of the way in: a jump,
   * not a slide.
   *
   * So a move is three steps. The new page is built off to the side while the
   * old one stays exactly where it is; nothing moves yet. Once the new page
   * has been laid out (`onArrived`), both slide together on one curve, edge
   * to edge. Then the old page is let go.
   *
   * Each page keeps one slot, and so one position, for its whole life, and a
   * new page always takes the slot the last departure freed. That is what
   * lets the new page be parked off-screen before it exists, without the page
   * still on screen — which holds the other slot — so much as twitching.
   */
  const slotA = useSharedValue(0);
  const slotB = useSharedValue(0);
  const activeSlotRef = useRef<0 | 1>(0);
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  /** The page on its way out, kept on screen until it has gone. */
  const [leaving, setLeaving] = useState<{ index: number; slot: 0 | 1 } | null>(null);
  /** False from a move's start until its slide lands: only the top of the
   *  new page is built while it moves. */
  const [settled, setSettled] = useState(true);
  const leavingRef = useRef<{ index: number; slot: 0 | 1 } | null>(null);
  /** Set by a move, spent when the slide starts. */
  const pendingDir = useRef<0 | 1 | -1>(0);
  /** The new page has been laid out, so building it is over. */
  const laidOut = useRef(false);
  /** A pick from the Topics sheet: built already, but it waits for the sheet
   *  to finish going down before it moves. */
  const held = useRef(false);
  const moveId = useRef(0);
  const { width: pageWidth } = useWindowDimensions();
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

  const letGo = useCallback(() => {
    leavingRef.current = null;
    setLeaving(null);
    setSettled(true);
  }, []);

  /** Moves once the page is built AND nothing is holding it back. */
  const slideIfReady = useCallback(() => {
    const dir = pendingDir.current;
    if (!dir || !laidOut.current || held.current) return;
    pendingDir.current = 0;
    const to = activeSlotRef.current;
    const toX = to === 0 ? slotA : slotB;
    const fromX = to === 0 ? slotB : slotA;
    fromX.value = withTiming(-dir * pageWidth, { duration: TOPIC_SLIDE_MS, easing: TOPIC_EASE });
    toX.value = withTiming(0, { duration: TOPIC_SLIDE_MS, easing: TOPIC_EASE }, (done) => {
      if (done) runOnJS(letGo)();
    });
  }, [slotA, slotB, pageWidth, letGo]);

  const onArrived = useCallback(() => {
    laidOut.current = true;
    slideIfReady();
  }, [slideIfReady]);

  const onRelease = useCallback(() => {
    held.current = false;
    slideIfReady();
  }, [slideIfReady]);

  const goTo = useCallback(
    (index: number, hold = false) => {
      const current = activeRef.current;
      if (index === current) return;
      const dir = index > current ? 1 : -1;
      const from = activeSlotRef.current;
      const to: 0 | 1 = from === 0 ? 1 : 0;
      const fromX = from === 0 ? slotA : slotB;
      const toX = to === 0 ? slotA : slotB;
      // A move still running is finished at once rather than chased: the page
      // that was arriving snaps home and leaves from there.
      cancelAnimation(fromX);
      cancelAnimation(toX);
      fromX.value = 0;
      toX.value = dir * pageWidth;
      pendingDir.current = dir;
      laidOut.current = false;
      held.current = hold;
      // Going straight back to the page still on its way out: that page is
      // already built and keeps its slot, so it gets no fresh layout to wait
      // for. It can move at once.
      const returning = leavingRef.current?.index === index;
      const departing = { index: current, slot: from };
      activeRef.current = index;
      activeSlotRef.current = to;
      leavingRef.current = departing;
      setReaderActive(index);
      // One frame later, not now. The positions written above travel to the
      // UI thread on the next tick, and a page drawn before they land is
      // drawn at 0 — the new topic flashed over the old one for a frame
      // before jumping off to the side.
      requestAnimationFrame(() => {
        // Not when going straight back: that page is already fully built,
        // and trimming it would only mean building its lower half twice.
        setSettled(returning);
        setLeaving(departing);
        setActiveSlot(to);
        setActive(index);
        scrollRef.current?.scrollTo({ y: 0, animated: false });
        if (returning) requestAnimationFrame(onArrived);
      });
      // And if a layout or a release never comes for any other reason, the
      // page still arrives rather than waiting off-screen. Spent by then in
      // every normal move, so this does nothing.
      const move = ++moveId.current;
      setTimeout(() => {
        if (moveId.current !== move) return;
        laidOut.current = true;
        held.current = false;
        slideIfReady();
      }, 900);
    },
    [slotA, slotB, pageWidth, onArrived, slideIfReady]
  );

  useReaderJump(goTo, onRelease);

  const set = useCallback(
    <K extends keyof BlockState>(key: K, id: string, value: BlockState[K][string]) => {
      setState((prev) => ({ ...prev, [key]: { ...prev[key], [id]: value } }));
    },
    []
  );

  const topic = chapter?.topics[active];
  const blocks = useMemo(() => (topic ? groupBlocks(topic.blocks) : []), [topic]);
  const leavingTopic = leaving ? chapter?.topics[leaving.index] : undefined;
  const leavingBlocks = useMemo(
    () => (leavingTopic ? groupBlocks(leavingTopic.blocks) : []),
    [leavingTopic]
  );

  /**
   * THE TOPICS BAR GETS OUT OF THE WAY WHILE YOU READ.
   *
   * It floats over the column, so it was permanently sitting on a line of the
   * text — not at the end of the page, which has padding for it, but on
   * whatever line happened to be under it at the time. On a page you scroll
   * through slowly that is one line of physics hidden the whole way down.
   *
   * Down hides it, up brings it back, which is the gesture every reading app
   * has trained people to expect: reaching for the controls IS scrolling back.
   * It also stays put at the very top and the very bottom, where it is not
   * covering anything and where its disappearing would just look like a bug.
   *
   * The 6pt threshold is doing real work — without it the bar flickers on the
   * sub-pixel jitter of a finger resting on a moving list.
   */
  const navAway = useSharedValue(0);
  const lastY = useRef(0);
  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
      const y = contentOffset.y;
      const dy = y - lastY.current;
      if (Math.abs(dy) < 6) return;
      lastY.current = y;
      const nearTop = y < verticalScale(40);
      const nearEnd = y + layoutMeasurement.height >= contentSize.height - verticalScale(40);
      const hide = dy > 0 && !nearTop && !nearEnd;
      navAway.value = withTiming(hide ? 1 : 0, { duration: 220 });
    },
    [navAway, verticalScale]
  );
  /**
   * The distance is computed HERE, not in the worklet. `useAnimatedStyle` runs
   * on the UI thread, where a plain JS closure like `verticalScale` is not
   * callable — calling it there took the screen down on the first scroll. A
   * captured number is fine; a captured function is not.
   */
  const navTravel = verticalScale(110);
  const navStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: navAway.value * navTravel }],
    opacity: 1 - navAway.value,
  }));
  /**
   * THE HEADER GOES WITH IT. Hiding the foot bar and leaving the chapter name
   * sitting at the top made the page look half-finished — one piece of
   * furniture clearing out of the way while the other stayed put. Either the
   * page is giving you the whole screen to read or it is not.
   *
   * It is measured rather than guessed: the bar's height depends on the safe
   * area and on the two lines of text inside it, and a wrong constant either
   * leaves a sliver on screen or slides it too far and takes the status bar's
   * background with it.
   */
  /**
   * Floored at a sane guess rather than starting at zero. The scroll pads
   * itself by this, so a first frame of 0 renders the topic's own title
   * underneath the bar — and on iOS the ScrollView does not always give that
   * space back when the padding grows a frame later, which left the page
   * opening on its second block with the heading lost above the bar.
   *
   * The guess is the bar's real construction: the inset, its 6 and 10 of
   * padding, and two lines of 19 and 15. Replaced by the measurement on the
   * first layout, so a different device or text setting corrects itself.
   */
  const [headHeight, setHeadHeight] = useState(0);
  const headSpace = headHeight || insets.top + verticalScale(16) + verticalScale(34);
  const headStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: -navAway.value * headSpace }],
    opacity: 1 - navAway.value,
  }));
  /** Reset when the topic changes: a new page starts at the top, so the bar
   *  belongs on screen even if the last one was left scrolled away. */
  useEffect(() => {
    lastY.current = 0;
    navAway.value = withTiming(0, { duration: 160 });
  }, [active, navAway]);


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

  /** One topic's page — its heading and its blocks. Keys carry the topic's
   *  own index, so a page that starts leaving is the same page, not a copy. */
  const renderPage = (
    pageIndex: number,
    pageTopic: NonNullable<typeof topic>,
    allBlocks: typeof blocks,
    limit?: number
  ) => {
    const pageBlocks = limit === undefined ? allBlocks : allBlocks.slice(0, limit);
    return (
    <>
      <View style={styles.topicHead}>
        {/* No "TOPIC 01 / 05" overline. The bar at the foot of the page
            carries 1/5 and is on screen the whole time, so the heading
            was announcing its position twice — and an all-caps label
            above a heading is the most essay-like thing a page can open
            with.

            The heading itself is CONTENT and grows with the body. The
            chapter title in the bar above is chrome and does not: a
            control that resized the furniture would read as zooming the
            app rather than setting the text. */}
        <Text style={[styles.topicTitle, { fontSize: type(25), lineHeight: type(30) }]}>
          {pageTopic.title}
        </Text>
      </View>
      {pageBlocks.map((block, index) => (
        <TextbookBlock
          key={`${pageIndex}-${index}`}
          block={block}
          ctx={{
            uid: `${pageIndex}-${index}`,
            scale,
            type,
            state,
            set,
            topicNumber: pageTopic.n,
          }}
        />
      ))}
    </>
    );
  };

  const atFirst = active === 0;
  const atLast = active === chapter.topics.length - 1;

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <View style={styles.safeArea}>
        {/*
          WHAT THE HIDING HEADER LEAVES BEHIND.
          With the bar gone the page has the whole screen, which is the point —
          but the writing then scrolled up under the status bar, with the clock
          sitting on top of a line and the notch eating the middle of another.
          So the top of the page always fades out into paper, underneath the
          header rather than over it: when the bar is up it covers this, and
          when the bar leaves this is what remains.
          A fade and not a band, because a hard edge cuts a line of writing in
          half.
        */}
        <LinearGradient
          colors={[colors.reading, colors.reading, 'rgba(255,255,255,0)']}
          locations={[0, 0.7, 1]}
          style={[styles.topFade, { height: insets.top + verticalScale(10) }]}
          pointerEvents="none"
        />
        <Animated.View
          style={[styles.head, headStyle, { paddingTop: insets.top }]}
          onLayout={(e) => setHeadHeight(Math.round(e.nativeEvent.layout.height))}>
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
          {/* ONE BUTTON, and the page is its own readout.
              The first version put three growing ticks beside it to show which
              step you were on, and it read as a signal-strength meter — a
              network icon in the middle of a textbook. It was also solving a
              problem that does not exist: the effect of this control is the
              size of every word on the screen behind it, so a student can
              already see what it is set to. Nothing to indicate.
              `aA` because it is the glyph everything from Safari to Kindle
              uses for text size, so it needs no explaining. */}
          <Pressable
            onPress={() => {
              hapticSwitched();
              chooseReadingSize(nextReadingSize(readingSize));
            }}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel={`Text size: ${READING_SIZE_LABEL[readingSize]}. Tap to change.`}
            style={styles.sizeButton}>
            <Text style={styles.sizeSmall}>a</Text>
            <Text style={styles.sizeBig}>A</Text>
          </Pressable>
          </View>
        </Animated.View>

        <ScrollView
          ref={scrollRef}
          style={styles.scroll}
          contentContainerStyle={[styles.scrollContent, { paddingTop: headSpace + verticalScale(4) }]}
          onScroll={onScroll}
          scrollEventThrottle={16}>
          {/* Both pages share one box, so the leaving page can sit on top of
              where it already was while the new one takes the flow. */}
          <View>
            {leaving && leavingTopic ? (
              <TopicPage
                key={leaving.index}
                x={leaving.slot === 0 ? slotA : slotB}
                leaving
                style={styles.topicBody}>
                {renderPage(leaving.index, leavingTopic, leavingBlocks)}
              </TopicPage>
            ) : null}
            <TopicPage
              key={active}
              x={activeSlot === 0 ? slotA : slotB}
              onLayout={onArrived}
              style={styles.topicBody}>
              {renderPage(active, topic, blocks, settled ? undefined : FIRST_PAINT_BLOCKS)}
            </TopicPage>
          </View>
        </ScrollView>
      </View>

      <SafeAreaView edges={['bottom']} style={styles.navWrap} pointerEvents="box-none">
        <Animated.View style={[styles.nav, navStyle]}>
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
              onPress={() => {
                hapticSwitched();
                goTo(active - 1);
              }}
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
              onPress={() => {
                hapticSwitched();
                goTo(active + 1);
              }}
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
        </Animated.View>
      </SafeAreaView>
    </View>
  );
}

/**
 * A topic's page, positioned by its slot. Its own component so that its
 * animated style is created when the page is: a page built for a move is born
 * already parked off-screen, rather than drawn once in place and then moved.
 */
function TopicPage({
  x,
  leaving,
  onLayout,
  style,
  children,
}: {
  x: SharedValue<number>;
  leaving?: boolean;
  onLayout?: (e: LayoutChangeEvent) => void;
  style: StyleProp<ViewStyle>;
  children: React.ReactNode;
}) {
  const slide = useAnimatedStyle(() => ({ transform: [{ translateX: x.value }] }));
  return (
    <Animated.View
      style={[style, leaving && pageStyles.leaving, slide]}
      pointerEvents={leaving ? 'none' : 'auto'}
      onLayout={onLayout}>
      {children}
    </Animated.View>
  );
}

const pageStyles = StyleSheet.create({
  /** Out of the flow, over the spot it already occupied, so the new page can
   *  take the flow without the old one moving by a pixel. */
  leaving: { position: 'absolute', top: 0, left: 0, right: 0 },
});

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.reading },
    safeArea: { flex: 1 },
    /**
     * Over the page, not above it. In the flow, translating it up collapsed
     * the layout and the whole column jumped; as an overlay it slides over
     * writing that stays exactly where it was. The scroll pads itself by the
     * measured height so nothing starts underneath it.
     */
    topFade: { position: 'absolute', left: 0, right: 0, top: 0, zIndex: 1 },
    head: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      zIndex: 2,
      backgroundColor: colors.reading,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.08)',
    },
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
    /** No pill, no border. A framed control in the bar would out-shout the
     *  chapter title beside it; the glyph and its ticks are legible on their
     *  own and the touch target is made by hit-slop rather than by chrome. */
    /** Baseline-aligned, and no frame. A pill here would out-shout the
     *  chapter title beside it; two letters are legible on their own and the
     *  touch target comes from hit-slop rather than from chrome. */
    sizeButton: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: scale(1.5),
      paddingHorizontal: scale(6),
      paddingVertical: verticalScale(4),
    },
    sizeSmall: { fontFamily: 'Onest_600SemiBold', fontSize: scale(11), color: colors.ink },
    sizeBig: { fontFamily: 'Onest_600SemiBold', fontSize: scale(16), color: colors.ink },
    scroll: { flex: 1 },
    scrollContent: { paddingBottom: verticalScale(120) },
    topicBody: { paddingHorizontal: scale(24), paddingTop: verticalScale(18), gap: verticalScale(20) },
    topicHead: { borderBottomWidth: 1, borderBottomColor: 'rgba(28,26,22,.1)', paddingBottom: verticalScale(14) },
    /**
     * MEDIUM, NOT BOLD. A bold 25pt heading over a column of 16.5pt prose is
     * the shape of an essay title, and it shouts at a reader who has already
     * chosen to open the page — they know what they came to read. At Medium it
     * still leads by size and by the air around it, and the page starts
     * quietly. The tracking eases off with the weight: -0.65 was tightening a
     * bold face, and a lighter one at the same value looks cramped.
     */
    topicTitle: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(25),
      letterSpacing: scale(-0.4),
      lineHeight: scale(30),
      color: colors.ink,
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

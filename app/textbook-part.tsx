import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  EntryAnimationsValues,
  EntryExitAnimationFunction,
  ExitAnimationsValues,
  FadeInDown,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { PageSkeleton, StateCard } from '@/components/states';
import { colors } from '@/constants/brand';
import { pageTitle } from '@/constants/page-title';
import { READ_LINE, READ_SIZE, READING_GUTTER } from '@/constants/reading';
import { useScale } from '@/constants/scale';
import { AskFollowUpBar, FlagIcon } from '@/components/ask-follow-up';
import { IndexSheet } from '@/components/revise/dock';
import { RING, RING_AT } from '@/components/revise/page-turn';
import { BlockState, EMPTY_BLOCK_STATE } from '@/components/textbook/blocks';
import { BookText } from '@/components/textbook/book-text';
import { TextbookBlockPilot } from '@/components/textbook/blocks-pilot';
import { kicker } from '@/components/textbook/theme';
import { useReadingSize } from '@/hooks/use-reading-size';
import { buildParts, ChapterPart, readProgress, saveProgress } from '@/lib/chapter-essentials';
import { hapticSwitched, hapticTicked } from '@/lib/haptics';
import { getTeacherPreference, TeacherId } from '@/lib/preferences';
import { nextReadingSize, READING_SIZE_LABEL, readingMultiplier } from '@/lib/reading-size';
import type { TextbookPageContext } from '@/lib/doubt-followup';
import { lastFollowUpContext } from '@/lib/last-followup';
import { openReportSheet } from '@/lib/reports';
import { Chapter, groupBlocks, loadChapter, pageTextAround, RenderBlock, renderBlockText, Topic, topicName, topicPlainText } from '@/lib/textbooks';
import { useOnScreenBlocks } from '@/lib/textbook-on-screen';

/**
 * A TOPIC, ONE SHORT PART AT A TIME.
 *
 * The chapter's topics are split into short parts (lib/chapter-essentials.ts),
 * and after a topic's last part comes one more page: the topic, finished. The
 * whole chapter is one row of pages, and on every part the foot is the full
 * reader's own (app/textbook-reader.tsx): the list and the arrows round "3/5"
 * on the left, Ask teacher on the right (Ask follow-up's own bar wearing the
 * teacher's orb, asking about the part on screen, as in the reader; the flag
 * in the head reports a mistake on it). The arrows move a part either way and
 * the page slides across, as the reader's topics do; the list holds every
 * topic in order, the open one showing its parts. On a topic's last part the
 * count and arrows give way to "Finish topic ›", edged in marigold, so the end
 * of a topic is never just another arrow. As in the reader, both bars slide
 * away while you scroll down and come back when you scroll up or reach the end.
 *
 * The finished page has no foot: it closes the app's marigold ring round a
 * tick, ticks the parts just read in one by one, and offers the next topic as
 * a row with its one-line idea, which is the way on. The head is the topic's
 * name only, no progress bars.
 */
const CHECK_UID = 'check';
const SLIDE_MS = 320;
const EASE = Easing.bezier(0.2, 0.75, 0.2, 1);

type Page = { kind: 'part'; part: ChapterPart } | { kind: 'done'; topic: number; parts: ChapterPart[] };

const short = (t: Topic) => topicName(t);
/** "Topic 2 of 6", counting the regular topics only, or "Additional topic B". */
const topicLabel = (c: Chapter, ti: number) => {
  const t = c.topics[ti];
  if (t?.extra) return `Additional topic ${t.n}`;
  return `Topic ${ti + 1} of ${c.topics.filter((x) => !x.extra).length}`;
};
const capital = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function TextbookPartScreen() {
  const params = useLocalSearchParams<{ subject?: string; classLevel?: string; title?: string; number?: string; part?: string }>();
  const subject = (params.subject ?? '').toLowerCase();
  const classLevel = Number(params.classLevel ?? 11);
  const title = params.title ?? '';
  const { scale, verticalScale } = useScale();
  const insets = useSafeAreaInsets();
  const { size: readingSize, choose: chooseReadingSize } = useReadingSize();
  const type = useCallback((n: number) => scale(n) * readingMultiplier(readingSize), [scale, readingSize]);
  const s = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [missing, setMissing] = useState(false);
  const [state, setState] = useState<BlockState>(EMPTY_BLOCK_STATE);
  const [teacher, setTeacher] = useState<TeacherId>('drona');
  const [asking, setAsking] = useState(false);
  /** Which blocks are on screen when Ask teacher is held. */
  const onScreen = useOnScreenBlocks();
  const [listOpen, setListOpen] = useState(false);

  useEffect(() => {
    getTeacherPreference()
      .then(setTeacher)
      .catch(() => {});
  }, []);

  useEffect(() => {
    let cancelled = false;
    loadChapter(subject, classLevel, title)
      .then((data) => {
        if (cancelled) return;
        if (data) setChapter(data);
        else setMissing(true);
      })
      .catch(() => !cancelled && setMissing(true));
    return () => {
      cancelled = true;
    };
  }, [subject, classLevel, title]);

  const parts = useMemo(() => (chapter ? buildParts(chapter) : []), [chapter]);
  /** Every part, with a finished page after each topic's last one. */
  const pages = useMemo<Page[]>(() => {
    const out: Page[] = [];
    parts.forEach((p, i) => {
      out.push({ kind: 'part', part: p });
      if (parts[i + 1]?.topic !== p.topic) out.push({ kind: 'done', topic: p.topic, parts: parts.filter((q) => q.topic === p.topic) });
    });
    return out;
  }, [parts]);

  /** Which way the last move went, read by the slide as it starts: 1 forward, -1 back, 0 none. */
  const dir = useSharedValue(0);
  const [at, setAt] = useState<number | null>(null);
  // Opens on the part the route asks for, and moves there again if the route
  // is reused with a different one (a link into the screen already open).
  useEffect(() => {
    if (!pages.length) return;
    const want = Math.max(0, Number(params.part ?? 0) || 0);
    dir.value = 0;
    setAt(
      Math.max(
        0,
        pages.findIndex((pg) => pg.kind === 'part' && pg.part.index === want),
      ),
    );
  }, [pages, params.part, dir]);
  const page = at === null ? null : pages[at];
  const topicIndex = page ? (page.kind === 'part' ? page.part.topic : page.topic) : 0;
  const topic = chapter?.topics[topicIndex];

  /**
   * The page Ask teacher asks about, and a report names: the part on screen,
   * as text. The book lives in the app, so the page travels with the
   * question; the key only names it for the server's logs.
   */
  const askPage = useMemo<TextbookPageContext | undefined>(() => {
    if (!chapter || !topic || page?.kind !== 'part') return undefined;
    const name = `${topic.title} · ${page.part.title}`;
    return {
      subject: chapter.subject,
      klass: chapter.klass,
      chapter: chapter.title,
      topic: name,
      text: topicPlainText({ ...topic, title: name, blocks: page.part.blocks }),
    };
  }, [chapter, topic, page]);
  const askKey = useMemo(
    () =>
      encodeURIComponent(
        `${subject}-${classLevel}-${title}-${topic?.n ?? ''}-${page?.kind === 'part' ? page.part.inTopic : 'done'}`
          .toLowerCase()
          .replace(/[^a-z0-9-]+/g, '-')
          .slice(0, 80),
      ),
    [subject, classLevel, title, topic, page],
  );

  // Reopen exactly here next time.
  useEffect(() => {
    if (chapter && page?.kind === 'part') void saveProgress(chapter, (p) => ({ ...p, last: page.part.index }));
  }, [chapter, page]);

  const set = useCallback(<K extends keyof BlockState>(key: K, id: string, value: BlockState[K][string]) => {
    setState((prev) => ({ ...prev, [key]: { ...prev[key], [id]: value } }));
  }, []);

  const enter = useMemo<EntryExitAnimationFunction>(
    () => (values: EntryAnimationsValues) => {
      'worklet';
      return {
        initialValues: { transform: [{ translateX: dir.value * values.windowWidth }] },
        animations: { transform: [{ translateX: withTiming(0, { duration: SLIDE_MS, easing: EASE }) }] },
      };
    },
    [dir],
  );
  const exit = useMemo<EntryExitAnimationFunction>(
    () => (values: ExitAnimationsValues) => {
      'worklet';
      return {
        initialValues: { transform: [{ translateX: 0 }] },
        animations: { transform: [{ translateX: withTiming(-dir.value * values.windowWidth, { duration: SLIDE_MS, easing: EASE }) }] },
      };
    },
    [dir],
  );

  const go = (to: number) => {
    if (at === null || !chapter || to < 0 || to >= pages.length || to === at) return;
    const from = pages[at];
    // Moving on from a part counts it as read.
    if (to > at && from.kind === 'part') {
      const next = pages.slice(to).find((pg) => pg.kind === 'part');
      void saveProgress(chapter, (p) => ({
        done: p.done.includes(from.part.index) ? p.done : [...p.done, from.part.index],
        last: next?.kind === 'part' ? next.part.index : null,
      }));
    }
    dir.value = to > at ? 1 : -1;
    if (pages[to].kind === 'done') hapticTicked();
    else hapticSwitched();
    setAt(to);
  };

  /** The list: every topic in order by name, the open one with its parts beneath (a topic's key is -1 - its index). */
  const groups = useMemo(() => {
    if (!chapter) return [];
    const rows = (extra: boolean) =>
      chapter.topics.flatMap((t, ti) =>
        !!t.extra !== extra
          ? []
          : [
              { key: -1 - ti, num: t.n, html: short(t), strong: ti === topicIndex },
              ...(ti === topicIndex
                ? pages.flatMap((pg, k) => (pg.kind === 'part' && pg.part.topic === ti ? [{ key: k, html: pg.part.title, sub: true }] : []))
                : []),
            ]
      );
    const extras = rows(true);
    // The book's Additional Topics, under their own heading after the topics.
    return extras.length ? [{ heading: '', rows: rows(false) }, { heading: 'Additional topics', rows: extras }] : [{ heading: '', rows: rows(false) }];
  }, [chapter, pages, topicIndex]);

  /** Another topic opens where the chapter home would open it: its first part not yet read. */
  const openTopic = async (ti: number) => {
    if (!chapter) return;
    const { done } = await readProgress(chapter);
    const own = pages.map((pg, k) => ({ pg, k })).filter(({ pg }) => pg.kind === 'part' && pg.part.topic === ti);
    const first = own.find(({ pg }) => pg.kind === 'part' && !done.includes(pg.part.index)) ?? own[0];
    if (first) go(first.k);
  };

  /**
   * THE BARS STEP ASIDE WHILE YOU READ, as in the reader: scrolling down
   * slides the head up and the foot down, scrolling up or reaching either end
   * brings them back. A new page starts with both on screen.
   */
  const away = useSharedValue(0);
  const lastY = useRef(0);
  const onScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      onScreen.trackScroll(e);
      const { contentOffset, contentSize, layoutMeasurement } = e.nativeEvent;
      const y = contentOffset.y;
      const dy = y - lastY.current;
      if (Math.abs(dy) < 6) return;
      lastY.current = y;
      const nearTop = y < verticalScale(40);
      const nearEnd = y + layoutMeasurement.height >= contentSize.height - verticalScale(40);
      away.value = withTiming(dy > 0 && !nearTop && !nearEnd ? 1 : 0, { duration: 220 });
    },
    [away, verticalScale, onScreen],
  );
  useEffect(() => {
    lastY.current = 0;
    away.value = withTiming(0, { duration: 160 });
    onScreen.resetScroll();
  }, [at, away, onScreen]);

  /**
   * TEXT SIZE KEEPS YOUR PLACE. Bigger text makes the page longer, so the same
   * scroll offset would land on a different paragraph. The place is kept as
   * how far through the page you were, and restored once the page has
   * re-laid out at the new size. The head stays on screen: the student just
   * tapped it.
   */
  const scrollRef = useRef<ScrollView>(null);
  const contentH = useRef(0);
  const viewH = useRef(0);
  const keepAt = useRef<number | null>(null);
  const changeSize = () => {
    hapticSwitched();
    const room = contentH.current - viewH.current;
    keepAt.current = room > 0 ? Math.min(1, lastY.current / room) : 0;
    chooseReadingSize(nextReadingSize(readingSize));
    // Only for this re-layout: if the length did not change, an answer
    // opening later must not jump the page.
    setTimeout(() => {
      keepAt.current = null;
    }, 800);
  };
  const onContentSize = (_w: number, h: number) => {
    contentH.current = h;
    if (keepAt.current === null) return;
    const y = Math.max(0, keepAt.current * (h - viewH.current));
    keepAt.current = null;
    lastY.current = y;
    scrollRef.current?.scrollTo({ y, animated: false });
    away.value = withTiming(0, { duration: 160 });
  };
  const [headH, setHeadH] = useState(0);
  const headSpace = headH || verticalScale(60);
  const footTravel = verticalScale(150);
  const headTravel = headSpace + insets.top;
  const headStyle = useAnimatedStyle(() => ({ transform: [{ translateY: -away.value * headTravel }], opacity: 1 - away.value }));
  const footStyle = useAnimatedStyle(() => ({ transform: [{ translateY: away.value * footTravel }], opacity: 1 - away.value }));

  /**
   * The page Ask teacher sends, taken when the hold begins: the part's blocks
   * on screen then (its quick check counts as one more), and as much either
   * side as the server takes. Most parts fit whole; the rest are cut round
   * what the student is looking at, not from the top.
   */
  const getAskPage = useCallback((): TextbookPageContext | undefined => {
    if (!askPage || !topic || page?.kind !== 'part') return askPage;
    const drawn = groupBlocks(page.part.blocks.filter((b) => b.t !== 'hook'));
    const count = drawn.length + (page.part.checks.length ? 1 : 0);
    const seen = onScreen.seen(String(page.part.index), count, headSpace * (1 - away.value), verticalScale(110));
    // Only a row of cards on screen has a card the student is looking at.
    const card = (i: number, uid: string) =>
      seen && i >= seen[0] && i <= seen[1] ? (state.page[uid] ?? 0) : undefined;
    const units = drawn.map((b, i) => renderBlockText(b, card(i, `${page.part.index}-${i}`)));
    if (page.part.checks.length) {
      units.push(
        renderBlockText({ t: 'mcqGroup', items: page.part.checks }, card(drawn.length, `${CHECK_UID}-${page.part.index}`)),
      );
    }
    return { ...askPage, text: pageTextAround(askPage.topic, units, seen) };
  }, [askPage, topic, page, onScreen, headSpace, away, verticalScale, state]);

  const ctx = (uid: string) => ({ uid, scale, type, state, set, topicNumber: topic?.n ?? '', topicCount: chapter?.topics.length ?? 0 });

  const body = (pg: Page) => {
    if (!chapter) return null;
    if (pg.kind === 'done') {
      const next = chapter.topics[pg.topic + 1];
      const firstOfNext = pages.findIndex((x) => x.kind === 'part' && x.part.topic === pg.topic + 1);
      return (
        <TopicDone
          label={topicLabel(chapter, pg.topic).toLowerCase()}
          name={short(chapter.topics[pg.topic])}
          parts={pg.parts.map((p) => p.title)}
          next={next ? { n: next.n, name: short(next), idea: next.kalam ? capital(next.kalam) : undefined } : undefined}
          onNext={() => (next ? go(firstOfNext) : router.back())}
          type={type}
        />
      );
    }
    const blocks: RenderBlock[] = groupBlocks(pg.part.blocks.filter((b) => b.t !== 'hook'));
    return (
      <>
        <Text style={kicker(type)}>{`${pg.part.inTopic} of ${pg.part.ofTopic}`}</Text>
        <Text style={[pageTitle(type), s.title]}>{pg.part.title}</Text>
        {blocks.map((block, index) => {
          // The pilot reader's spacing: 16 where one paragraph meets the
          // next, 32 wherever a new kind of block begins.
          const prev = index > 0 ? blocks[index - 1].t : null;
          const gap = prev === null ? 24 : prev === 'p' && block.t === 'p' ? 16 : 32;
          return (
            <View
              key={`${pg.part.index}-${index}`}
              style={{ marginTop: scale(gap) }}
              onLayout={onScreen.onBlockLayout(String(pg.part.index), index)}>
              <TextbookBlockPilot block={block} ctx={ctx(`${pg.part.index}-${index}`)} />
            </View>
          );
        })}
        {pg.part.checks.length > 0 && (
          <View style={s.check} onLayout={onScreen.onBlockLayout(String(pg.part.index), blocks.length)}>
            <Text style={[kicker(type), s.checkLabel]}>quick check · before you move on</Text>
            <TextbookBlockPilot block={{ t: 'mcqGroup', items: pg.part.checks }} ctx={ctx(`${CHECK_UID}-${pg.part.index}`)} />
          </View>
        )}
      </>
    );
  };

  const atFirst = at === 0;
  const atLast = at !== null && at === pages.length - 1;
  const lastOfTopic = page?.kind === 'part' && page.part.inTopic === page.part.ofTopic;

  return (
    <View style={s.screen}>
      <StatusBar style="dark" />
      <SafeAreaView edges={['top']} style={s.safe}>
        <Animated.View style={[s.topBar, { top: insets.top }, headStyle]} onLayout={(e) => setHeadH(e.nativeEvent.layout.height)}>
          <Pressable
            onPress={() => router.back()}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel="Back to the chapter"
            style={s.back}>
            <Svg viewBox="0 0 16 16" width={scale(17)} height={scale(17)} fill="none">
              <Path d="M10 3.5 5.5 8 10 12.5" stroke={colors.ink} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
            </Svg>
          </Pressable>
          <Text style={s.chapterTitle} numberOfLines={1}>
            {topic ? `${topicLabel(chapter!, topicIndex).replace(/ of \d+$/, '')} · ${short(topic)}` : ' '}
          </Text>
          {/* REPORT a wrong line on this part, as the reader does beside its text size. */}
          {askPage ? (
            <Pressable
              onPress={() =>
                openReportSheet({
                  surface: 'textbook',
                  subject: askPage.subject,
                  chapter: askPage.chapter,
                  quote: askPage.text.slice(0, 600),
                  context: {
                    page_key: decodeURIComponent(askKey),
                    topic: askPage.topic,
                    klass: askPage.klass,
                    ...lastFollowUpContext(askKey),
                  },
                })
              }
              hitSlop={12}
              accessibilityRole="button"
              accessibilityLabel="Report a mistake on this page"
              style={s.report}>
              <FlagIcon size={scale(16)} />
            </Pressable>
          ) : null}
          {/* TEXT SIZE, the reader's own aA: one button stepping small, medium,
              large and round again, remembered for every chapter. Only the
              words grow; figures, tables' boxes and controls keep their size. */}
          <Pressable
            onPress={changeSize}
            disabled={!chapter || !page}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel={`Text size: ${READING_SIZE_LABEL[readingSize]}. Tap to change.`}
            style={s.sizeButton}>
            <Text style={s.sizeSmall}>a</Text>
            <Text style={s.sizeBig}>A</Text>
          </Pressable>
        </Animated.View>

        {missing ? (
          <View style={[{ paddingHorizontal: 24, paddingTop: 32 }, { marginTop: headSpace }]}>
            <StateCard
              glyph="book"
              title="This part didn't open"
              line="Go back and open it again."
              action={{ label: 'Go back', onPress: () => router.back() }}
            />
          </View>
        ) : !chapter || !page || at === null ? (
          <View style={[s.loading, { marginTop: headSpace }]}>
            <PageSkeleton />
          </View>
        ) : (
          <View style={s.stage}>
            <Animated.View key={at} entering={enter} exiting={exit} style={s.page}>
              <ScrollView
                ref={scrollRef}
                onContentSizeChange={onContentSize}
                onLayout={(e) => {
                  viewH.current = e.nativeEvent.layout.height;
                  onScreen.onViewLayout(e);
                }}
                scrollEnabled={!asking}
                onScroll={onScroll}
                scrollEventThrottle={16}
                contentContainerStyle={[
                  s.content,
                  {
                    paddingTop: headSpace + verticalScale(20),
                    paddingBottom: (page.kind === 'part' ? verticalScale(150) : verticalScale(40)) + insets.bottom,
                  },
                ]}>
                {/* A chapter from the books keeps its headings as printed. */}
                <BookText.Provider value={!!chapter && chapter.topics.some((t) => t.blocks[0]?.t === 'part')}>
                  {body(page)}
                </BookText.Provider>
              </ScrollView>
            </Animated.View>
          </View>
        )}
      </SafeAreaView>

      {/* While Ask teacher is held the page holds still, framed in marigold, as in the reader. */}
      {asking && <View pointerEvents="none" style={s.freezeFrame} />}

      {chapter && page?.kind === 'part' && at !== null && (
        <SafeAreaView edges={['bottom']} style={s.navWrap} pointerEvents="box-none">
          <Animated.View style={[s.navFade, footStyle]} pointerEvents="none">
            <LinearGradient
              colors={['rgba(255,255,255,0)', colors.reading, colors.reading]}
              locations={[0, 0.45, 1]}
              style={StyleSheet.absoluteFill}
            />
          </Animated.View>
          {asking && (
            <View style={s.freezeChip} pointerEvents="none">
              <View style={s.freezeDot} />
              <Text style={s.freezeText}>Teacher is looking at this page</Text>
            </View>
          )}
          {/* THE READER'S FOOT: the list and the arrows round the place on the left, Ask teacher on the right. */}
          <Animated.View style={[s.navRow, footStyle]} pointerEvents="box-none">
            {/* Ask teacher is Ask follow-up's own bar, wearing the teacher's orb: the
                same hold, voice, board and answer, about this part. The pill rides in
                the bar's row so the board can span it, on the right as Practice's Next
                does, under the thumb that turns the pages. */}
            <AskFollowUpBar
              surface="textbooks"
              doubtId={askPage ? askKey : null}
              page={askPage}
              getPage={getAskPage}
              teacherFace={teacher}
              onBusyChange={setAsking}
              gutter={scale(16)}
              trailing={
                <View style={[s.pill, lastOfTopic && s.pillLast, asking && s.dimmed]} pointerEvents={asking ? 'none' : 'auto'}>
                  <Pressable onPress={() => setListOpen(true)} hitSlop={4} style={s.pillButton} accessibilityLabel="All parts">
                    <Svg viewBox="0 0 16 16" width={scale(15)} height={scale(15)} fill="none">
                      <Path d="M2.5 4h11M2.5 8h11M2.5 12h7" stroke={colors.ink} strokeWidth={1.8} strokeLinecap="round" />
                    </Svg>
                  </Pressable>
                  {lastOfTopic ? (
                    // The last part: no count and no arrows, one way on. (Back is in the list.)
                    <Pressable onPress={() => go(at + 1)} style={s.finish} accessibilityRole="button" accessibilityLabel="Finish topic">
                      <Text style={s.finishText}>Finish topic</Text>
                      <Svg viewBox="0 0 16 16" width={scale(15)} height={scale(15)} fill="none">
                        <Path d="M6 3.5 10.5 8 6 12.5" stroke={colors.ink} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
                      </Svg>
                    </Pressable>
                  ) : (
                    <>
                      <Pressable disabled={atFirst} onPress={() => go(at - 1)} style={s.pillButton} accessibilityLabel="Previous">
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
                      <Text style={s.positionText} accessibilityLabel={`Part ${page.part.inTopic} of ${page.part.ofTopic}`}>
                        {page.part.inTopic}
                        <Text style={s.positionTotal}>/{page.part.ofTopic}</Text>
                      </Text>
                      <Pressable disabled={atLast} onPress={() => go(at + 1)} style={s.pillButton} accessibilityLabel="Next">
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
                    </>
                  )}
                </View>
              }
            />
          </Animated.View>
        </SafeAreaView>
      )}

      <IndexSheet
        open={listOpen}
        title={chapter?.title ?? ''}
        groups={groups}
        current={at ?? -1}
        face="onest"
        onPick={(k) => {
          setListOpen(false);
          if (k < 0) void openTopic(-1 - k);
          else go(k);
        }}
        onClose={() => setListOpen(false)}
      />
    </View>
  );
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

/**
 * THE TOPIC, FINISHED. The app's marigold ring (components/gradient-select)
 * sweeps once and closes round a tick, the parts just read tick in one after
 * another, and the next topic waits as a row with its one-line idea.
 */
function TopicDone({
  label,
  name,
  parts,
  next,
  onNext,
  type,
}: {
  /** "topic 2 of 6", or "additional topic B". */
  label: string;
  name: string;
  parts: string[];
  next?: { n: string; name: string; idea?: string };
  onNext: () => void;
  type: (n: number) => number;
}) {
  const { scale } = useScale();
  const s = useMemo(() => doneStyles(scale), [scale]);
  const size = scale(64);
  const sweep = useSharedValue(0);
  const tick = useSharedValue(0);
  useEffect(() => {
    sweep.value = withTiming(1, { duration: 1000, easing: EASE });
    tick.value = withDelay(550, withTiming(1, { duration: 450, easing: Easing.bezier(0.3, 0.7, 0.3, 1) }));
  }, [sweep, tick]);
  const ring = useAnimatedStyle(() => ({
    opacity: Math.min(1, sweep.value * 3),
    transform: [{ rotate: `${(sweep.value - 1) * 200}deg` }],
  }));
  // The tick is 30.4 long (7√2 + √421), so the dash is 31: at 30 a sliver of
  // its tip never drew. Hidden until it starts: at zero length a round cap is
  // a dot on Android, which showed for the 550ms before the tick drew.
  const drawn = useAnimatedProps(() => ({
    strokeDashoffset: 31 * (1 - tick.value),
    strokeOpacity: tick.value > 0 ? 1 : 0,
  }));

  return (
    <View>
      <View style={[s.ring, { width: size, height: size, borderRadius: size / 2 }]}>
        <Animated.View style={[{ width: size * 1.5, height: size * 1.5 }, ring]}>
          <LinearGradient
            colors={[...RING]}
            locations={[...RING_AT]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
        <View style={[s.ringInner, { borderRadius: size / 2 }]}>
          <Svg viewBox="0 0 64 64" width={size} height={size} fill="none">
            <AnimatedPath
              d="M22 33l7 7 14-15"
              stroke={colors.ink}
              strokeWidth={2.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={31}
              animatedProps={drawn}
            />
          </Svg>
        </View>
      </View>
      <Text style={[kicker(type), s.kicker]}>{`${label} · finished`}</Text>
      <Text style={[pageTitle(type), s.title]}>{name}</Text>
      <View style={s.list}>
        {parts.map((p, i) => (
          <Animated.View key={p} entering={FadeInDown.delay(700 + i * 80).duration(400)} style={s.row}>
            <Svg viewBox="0 0 16 16" width={scale(15)} height={scale(15)} fill="none">
              <Path d="M3.5 8.4l3 3L12.5 5" stroke={colors.marigold} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </Svg>
            <Text style={[s.rowText, { fontSize: type(15), lineHeight: type(21) }]}>{p}</Text>
          </Animated.View>
        ))}
      </View>
      <Text style={[kicker(type), s.upNext]}>{next ? 'up next' : 'chapter finished'}</Text>
      <Pressable onPress={onNext} accessibilityRole="button" style={({ pressed }) => [s.next, pressed && s.pressed]}>
        {next && <Text style={[s.nextNum, { fontSize: type(13) }]}>{next.n}</Text>}
        <View style={s.grow}>
          <Text style={[s.nextName, { fontSize: type(15), lineHeight: type(20) }]}>{next ? next.name : 'Back to the chapter'}</Text>
          {!!next?.idea && <Text style={[s.nextIdea, { fontSize: type(13), lineHeight: type(18) }]}>{next.idea}</Text>}
        </View>
        <Svg viewBox="0 0 16 16" width={scale(14)} height={scale(14)} fill="none">
          <Path d="M6 3.5 10.5 8 6 12.5" stroke={colors.ink} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </Pressable>
    </View>
  );
}

function doneStyles(scale: (n: number) => number) {
  return StyleSheet.create({
    ring: { marginTop: scale(14), overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
    ringInner: {
      position: 'absolute',
      top: 3,
      left: 3,
      right: 3,
      bottom: 3,
      backgroundColor: colors.reading,
      alignItems: 'center',
      justifyContent: 'center',
    },
    kicker: { marginTop: scale(20) },
    title: { marginTop: scale(4) },
    list: { marginTop: scale(14) },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingVertical: scale(10),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.08)',
    },
    rowText: { flex: 1, fontFamily: 'Onest_500Medium', color: colors.ink },
    upNext: { marginTop: scale(28) },
    next: {
      marginTop: scale(10),
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingVertical: scale(14),
      paddingLeft: scale(16),
      paddingRight: scale(14),
      borderRadius: scale(16),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#FFFFFF',
    },
    pressed: { opacity: 0.6 },
    grow: { flex: 1, minWidth: 0 },
    nextNum: { fontFamily: 'Onest_500Medium', color: colors.quiet, fontVariant: ['tabular-nums'] },
    nextName: { fontFamily: 'Onest_600SemiBold', color: colors.ink },
    nextIdea: { fontFamily: 'Onest_400Regular', color: colors.slate, marginTop: 2 },
  });
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.reading },
    safe: { flex: 1 },
    /** The reader's own top bar: back, and the topic's name. */
    topBar: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 2,
      backgroundColor: colors.reading,
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(6),
      paddingBottom: verticalScale(10),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.08)',
    },
    back: { width: scale(34), height: scale(44), justifyContent: 'center' },
    chapterTitle: { flex: 1, fontFamily: 'Onest_700Bold', fontSize: scale(15), color: colors.ink },
    report: { paddingHorizontal: scale(6), paddingVertical: verticalScale(4) },
    sizeButton: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: scale(1.5),
      paddingHorizontal: scale(6),
      paddingVertical: verticalScale(4),
    },
    sizeSmall: { fontFamily: 'Onest_600SemiBold', fontSize: scale(11), color: colors.ink },
    sizeBig: { fontFamily: 'Onest_600SemiBold', fontSize: scale(16), color: colors.ink },
    stage: { flex: 1, overflow: 'hidden' },
    page: { ...StyleSheet.absoluteFillObject, backgroundColor: colors.reading },
    loading: { paddingTop: verticalScale(40), alignItems: 'center' },
    state: {
      paddingHorizontal: scale(READING_GUTTER),
      paddingTop: verticalScale(24),
      fontFamily: 'Onest_400Regular',
      fontSize: READ_SIZE,
      lineHeight: READ_LINE,
      color: colors.slate,
    },
    content: { paddingHorizontal: scale(READING_GUTTER), paddingTop: verticalScale(20) },
    title: { marginTop: scale(6) },
    check: { marginTop: scale(40), paddingTop: scale(20), borderTopWidth: 1, borderTopColor: 'rgba(28,26,22,.12)' },
    checkLabel: { marginBottom: scale(12) },
    /* The foot, as app/textbook-reader.tsx draws it. */
    navWrap: { position: 'absolute', left: 0, right: 0, bottom: 0 },
    navFade: { position: 'absolute', left: 0, right: 0, bottom: 0, height: verticalScale(170) },
    // A column, so the bar inside stretches the full width. As a row it was
    // only as wide as its own contents: on a wide iPhone that left a gap right
    // of "Ask teacher", and the board above, which takes the bar's width, grew
    // whenever a long line was written on it.
    navRow: {
      marginHorizontal: scale(16),
      marginBottom: verticalScale(6),
    },
    pill: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 52,
      paddingHorizontal: scale(4),
      borderRadius: 99,
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.10)',
      boxShadow: [
        { offsetX: 0, offsetY: 18, blurRadius: 36, spreadDistance: -20, color: 'rgba(28,26,22,0.5)' },
        { offsetX: 0, offsetY: 2, blurRadius: 6, spreadDistance: -2, color: 'rgba(28,26,22,0.12)' },
      ],
    },
    pillButton: { width: scale(40), height: scale(44), alignItems: 'center', justifyContent: 'center' },
    positionText: { fontFamily: 'Onest_700Bold', fontSize: scale(14.5), color: colors.ink, minWidth: scale(28), textAlign: 'center' },
    positionTotal: { fontFamily: 'Onest_600SemiBold', color: colors.faint },
    /** The last part's pill: edged in marigold, the app's "picked" colour, as a line and never a fill. */
    pillLast: { borderColor: colors.marigold, borderWidth: 1.5 },
    finish: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(4),
      height: scale(44),
      paddingLeft: scale(6),
      paddingRight: scale(12),
    },
    finishText: { fontFamily: 'Onest_700Bold', fontSize: scale(14.5), color: colors.ink },
    dimmed: { opacity: 0.45 },
    freezeFrame: { ...StyleSheet.absoluteFillObject, borderWidth: 3, borderColor: 'rgba(238,163,31,.6)', zIndex: 3 },
    freezeChip: {
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(7),
      marginBottom: verticalScale(12),
      paddingVertical: scale(7),
      paddingHorizontal: scale(12),
      borderRadius: 16,
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.10)',
      boxShadow: [{ offsetX: 0, offsetY: 6, blurRadius: 18, color: 'rgba(28,26,22,0.14)' }],
    },
    freezeDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: colors.marigold },
    freezeText: { fontFamily: 'Onest_600SemiBold', fontSize: scale(12.5), color: colors.ink },
  });
}

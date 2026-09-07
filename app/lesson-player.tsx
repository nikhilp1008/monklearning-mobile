import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  SlideInRight,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Line, Path, Rect, SvgXml, Text as SvgText } from 'react-native-svg';

import {
  AMBER,
  AMBER_WASH,
  BOARD_LEFT,
  BOARD_TOP,
  Blink,
  GREEN_INK,
  CaptionStrip,
  DARK_CHROME,
  DEEP_AMBER,
  HAIRLINE,
  INK,
  INK_FAINT,
  INK_MUTED,
  MarginRule,
  RED,
  RHYTHM,
  RuledGround,
  useChromeAutoHide,
  ScrollIndicator,
  settleToRhythm,
} from '@/components/classroom-chrome';
import { colors } from '@/constants/brand';
import { useLandscapeScale } from '@/constants/scale';
import { useLandscapeLock } from '@/hooks/use-landscape-lock';
import { getScene } from '@/components/scenes';
import {
  getLessonSections,
  type BoardEvent,
  type Language,
  type LessonSection,
  groupBySubtopic,
} from '@/lib/lessons';

type Segment = { text: string; bold?: boolean };
type BoardBlock =
  | { kind: 'kalamHeading'; text: string }
  | { kind: 'equation'; text: string; size: 'large' | 'small' }
  | { kind: 'body'; segments: Segment[] }
  | { kind: 'diagram' }
  /** A real authored figure from `lesson_sections.board_content` — the same
   *  SVG markup the webpage draws, rendered by react-native-svg. */
  | { kind: 'svg'; svg: string; caption?: string }
  | {
      kind: 'kalamNote';
      text: string;
      color: string;
      fontSize: number;
      rotateDeg: number;
      marginBottom: number;
      maxWidth?: number;
    };

/**
 * A `board_content` event, as authored for the webpage, expressed in this
 * board's own vocabulary.
 *
 * The two vocabularies were built independently and line up almost exactly —
 * the one gap is `diagram`, which here meant the hardcoded trains drawing and
 * now carries real SVG. An unrecognised type keeps its words as body text
 * rather than disappearing, so a new authoring kind degrades instead of
 * blanking part of a lesson.
 */
function toBoardBlock(event: BoardEvent): BoardBlock | null {
  const text = (event.text ?? event.latex ?? '').trim();

  switch (event.type) {
    case 'heading':
      return text ? { kind: 'kalamHeading', text } : null;
    case 'formula':
      return text ? { kind: 'equation', text, size: 'large' } : null;
    case 'note':
      return text
        ? {
            kind: 'kalamNote',
            text,
            color: GREEN_INK,
            fontSize: 15,
            rotateDeg: -0.3,
            marginBottom: 8,
            maxWidth: 560,
          }
        : null;
    case 'diagram':
      return event.svg
        ? { kind: 'svg', svg: event.svg, caption: event.caption }
        : event.caption
          ? { kind: 'body', segments: [{ text: event.caption }] }
          : null;
    default:
      return text
        ? {
            kind: 'body',
            segments: [{ text, bold: event.emphasis === 'high' || event.emphasis === 'key' }],
          }
        : null;
  }
}

/** How many characters a block holds, for the writing animation. */
function blockLength(block: BoardBlock): number {
  if (block.kind === 'body') return block.segments.reduce((n, s) => n + s.text.length, 0);
  if (block.kind === 'svg') return 0;
  if (block.kind === 'diagram') return 0;
  return block.text.length;
}

const CHAR_TICK_MS = 26;
const DIAGRAM_HOLD_TICKS = 24;
const FOLLOW_SCROLL_MS = 350;
/** Row and heading heights, for scrolling the drawer to the current section.
 *  Approximate on purpose: this positions a list, it does not lay one out. */
const TOPIC_ROW_H = 52;
const TOPIC_GROUP_H = 26;
const SEGMENT_DURATION_MS = 80000;
const SEGMENT_TICK_MS = 200;
// Literal markup keyframe: `@keyframes mlProg{from{width:56%}to{width:100%}}` —
// every time a segment becomes "current" (mount or a topic-jump tap) its fill
// starts at 56%, not 0%, and animates 56%→100% over the segment duration.
const SEGMENT_START_PROGRESS = 0.56;

function revealSegments(segments: Segment[], chars: number): Segment[] {
  const result: Segment[] = [];
  let remaining = chars;
  for (const seg of segments) {
    if (remaining <= 0) break;
    const take = Math.min(remaining, seg.text.length);
    result.push({ text: seg.text.slice(0, take), bold: seg.bold });
    remaining -= take;
  }
  return result;
}

type LoadState =
  | { kind: 'loading' }
  | { kind: 'ready'; sections: LessonSection[] }
  | { kind: 'error' };

export default function LessonPlayerScreen() {
  // Pinned: the board holds one landscape direction, so it does not flip
  // under a student who shifts position mid-lesson.
  const isLandscape = useLandscapeLock(true);
  const params = useLocalSearchParams<{
    chapterId?: string;
    chapterTitle?: string;
    subject?: string;
    classLabel?: string;
  }>();
  const chapterId = params.chapterId ?? '';
  const chapterTitle = (params.chapterTitle ?? 'Lesson').split(' · ')[0];
  const chapterSub = [params.subject, params.classLabel].filter(Boolean).join(' · ');
  const { scale, verticalScale } = useLandscapeScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [language, setLanguage] = useState<Language>('english');
  const [state, setState] = useState<LoadState>({ kind: 'loading' });
  /** The section being taught. Named `currentSegment` because the progress bar
   *  below draws one segment per section, exactly as it did per topic. */
  const [currentSegment, setCurrentSegment] = useState(0);

  const sections = state.kind === 'ready' ? state.sections : [];
  const section = sections[currentSegment] ?? null;

  const load = useCallback(() => {
    if (!chapterId) {
      setState({ kind: 'error' });
      return;
    }
    setState({ kind: 'loading' });
    getLessonSections(chapterId, language)
      .then((rows) => setState({ kind: 'ready', sections: rows }))
      .catch(() => setState({ kind: 'error' }));
  }, [chapterId, language]);

  useEffect(load, [load]);

  // The narration is the clock: 100ms so a line lands with the sentence that
  // introduces it rather than a beat behind it.
  const source = useMemo(
    () => (section?.audioUrl ? { uri: section.audioUrl } : null),
    [section?.audioUrl]
  );
  const player = useAudioPlayer(source, { updateInterval: 100 });
  const status = useAudioPlayerStatus(player);
  const isPlaying = status.playing ?? false;
  const currentTime = status.currentTime ?? 0;
  const duration = status.duration || section?.durationSec || 0;

  /**
   * Events paired with the moment they are spoken. Mapping can drop an event
   * (one with no words and no drawing), so the timing is carried alongside its
   * block rather than looked up by index afterwards — indices into `events`
   * and into `blocks` are not the same list once anything is dropped.
   */
  const blocks = useMemo(() => {
    if (!section) return [] as { block: BoardBlock; at: number }[];
    const out: { block: BoardBlock; at: number }[] = [];
    section.events.forEach((event, i) => {
      const block = toBoardBlock(event);
      if (block) out.push({ block, at: section.revealAt[i] ?? 0 });
    });
    return out;
  }, [section]);

  /**
   * Which blocks are finished, and how far into writing the current one we
   * are. Both fall out of the playhead, so scrubbing, pausing and switching
   * language stay in sync without a second timer to keep honest — which is
   * what the old `setInterval` typewriter could not do.
   */
  const { revealedBlockCount, currentChars } = useMemo(() => {
    if (blocks.length === 0) return { revealedBlockCount: 0, currentChars: 0 };
    let idx = -1;
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].at <= currentTime) idx = i;
      else break;
    }
    if (idx < 0) return { revealedBlockCount: 0, currentChars: 0 };

    const start = blocks[idx].at;
    const end = idx + 1 < blocks.length ? blocks[idx + 1].at : duration || start + 1;
    const span = Math.max(0.001, end - start);
    const progress = Math.max(0, Math.min(1, (currentTime - start) / span));
    const length = blockLength(blocks[idx].block);
    // Written a little faster than the gap it is given, so a line is finished
    // and readable while the teacher is still talking about it rather than
    // completing exactly as the next one starts.
    const chars = length === 0 ? Infinity : Math.ceil(length * Math.min(1, progress * 1.35));
    return { revealedBlockCount: idx, currentChars: chars };
  }, [blocks, currentTime, duration]);

  const caption = useMemo(() => {
    if (!section) return '';
    const spoken = revealedBlockCount;
    return section.captions[spoken]?.text ?? section.captions[spoken - 1]?.text ?? '';
  }, [section, revealedBlockCount]);

  /**
   * A lesson starts teaching as soon as it is opened, and sections play on
   * into each other — a student who tapped a chapter has already said they
   * want the class, and making them tap play again for each of ninety-two
   * sections turns listening into clicking.
   */
  const wasPlayingRef = useRef(true);
  useEffect(() => {
    if (isPlaying) wasPlayingRef.current = true;
  }, [isPlaying]);

  useEffect(() => {
    if (status.didJustFinish) {
      setCurrentSegment((i) => (i + 1 < sections.length ? i + 1 : i));
    }
  }, [status.didJustFinish, sections.length]);

  useEffect(() => {
    if (wasPlayingRef.current) player.play();
  }, [player]);

  /** The authored scene for this exact section, if one has been ported. */
  const SceneForSection = useMemo(
    () => getScene(chapterId, section?.position),
    [chapterId, section?.position]
  );

  /**
   * Nothing is on the board until the teacher starts talking.
   *
   * The scene kit already gates its own elements this way — `useBeat` returns
   * -1 until the playhead passes the first reveal — but roughly 1,600 scenes
   * author their heading as always-on, and the board_content path draws its
   * first block at t=0. Both meant a lesson opened onto a part-written board.
   * Deriving this from the playhead rather than a flag also resets it for
   * free: a new section starts at 0, so it starts blank too.
   */
  const started = currentTime > 0;

  const segProgress = duration > 0 ? Math.min(1, currentTime / duration) : 0;

  // Chrome auto-hide / follow-scroll (adapted from live-classroom.tsx)
  const [chromeVisible, setChromeVisible] = useState(true);
  const [boardHeight, setBoardHeight] = useState(390);
  const [following, setFollowing] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerScrollRef = useRef<ScrollView>(null);

  /**
   * Sections under their subtopic, each group carrying the index its first
   * section sits at so a row can still jump by absolute position.
   */
  const subtopicGroups = useMemo(() => {
    let first = 0;
    return groupBySubtopic(sections).map((g) => {
      const entry = { ...g, first };
      first += g.sections.length;
      return entry;
    });
  }, [sections]);

  /** The group the playing section belongs to. */
  const currentGroup = useMemo(
    () =>
      subtopicGroups.findIndex(
        (g) => currentSegment >= g.first && currentSegment < g.first + g.sections.length
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [subtopicGroups, currentSegment]
  );

  /**
   * One topic open at a time, the playing one by default.
   *
   * A chapter is seven topics of fifteen sections. Listing all 92 flat meant
   * scrolling past six topics you are not in to reach the one you are. Opening
   * follows the lesson when it crosses into a new topic, and a tap opens
   * another without the playhead yanking it back, because this only re-runs
   * when the CURRENT group changes.
   */
  const [openGroup, setOpenGroup] = useState<number | null>(null);
  useEffect(() => {
    setOpenGroup(currentGroup >= 0 ? currentGroup : 0);
  }, [currentGroup]);

  const [ccOn, setCcOn] = useState(true);
  const [indicatorVisible, setIndicatorVisible] = useState(false);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(28);

  const scrollRef = useRef<ScrollView>(null);
  const indicatorTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Same auto-hide as the live class; the Topics drawer holds it open.
  const hideChrome = useCallback(() => setChromeVisible(false), []);
  useChromeAutoHide(chromeVisible, drawerOpen, hideChrome);

  useEffect(() => {
    return () => {
      if (indicatorTimerRef.current) clearTimeout(indicatorTimerRef.current);
    };
  }, []);

  useEffect(() => {
    // A scene draws on a fixed canvas rather than growing downward, so there
    // is nothing to follow — and scrolling to the end parks the board below
    // the drawing, which looks like a blank lesson.
    if (SceneForSection) return;
    const id = setInterval(() => {
      if (following) scrollRef.current?.scrollToEnd({ animated: false });
    }, FOLLOW_SCROLL_MS);
    return () => clearInterval(id);
  }, [following, SceneForSection]);

  // Header tucks up; the dock's slot collapses under it so "Back to now"
  // drops into the dock's place instead of hanging in space. The chip is
  // therefore always exactly 12pt above the dock, in both states.
  const tuck = useSharedValue(0);
  useEffect(() => {
    tuck.value = withTiming(chromeVisible ? 0 : 1, { duration: 350, easing: Easing.ease });
  }, [tuck, chromeVisible]);
  const headerStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: -74 * tuck.value }],
    opacity: withTiming(chromeVisible ? 1 : 0, { duration: 300 }),
  }));
  const dockSlotStyle = useAnimatedStyle(() => ({
    height: 64 * (1 - tuck.value),
    marginTop: 12 * (1 - tuck.value),
    opacity: withTiming(chromeVisible ? 1 : 0, { duration: 280 }),
  }));

  const toggleChrome = () => {
    if (drawerOpen) return;
    setChromeVisible((visible) => !visible);
  };

  const onBoardScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, contentSize, layoutMeasurement } = e.nativeEvent;
    if (contentSize.height > 0) {
      setIndicatorHeight(
        Math.max(28, (layoutMeasurement.height * layoutMeasurement.height) / contentSize.height)
      );
      setIndicatorTop((contentOffset.y / contentSize.height) * layoutMeasurement.height);
      setIndicatorVisible(true);
      if (indicatorTimerRef.current) clearTimeout(indicatorTimerRef.current);
      indicatorTimerRef.current = setTimeout(() => {
        setIndicatorVisible(false);
        const settled = settleToRhythm(
          contentOffset.y,
          contentSize.height - layoutMeasurement.height
        );
        if (settled != null) scrollRef.current?.scrollTo({ y: settled, animated: true });
      }, 900);
    }
    const atBottom = contentOffset.y + layoutMeasurement.height >= contentSize.height - 40;
    setFollowing(atBottom);
  };

  const jumpToLive = () => {
    setFollowing(true);
    scrollRef.current?.scrollToEnd({ animated: true });
  };

  const openDrawer = () => {
    setDrawerOpen(true);
    setChromeVisible(true);
  };

  /**
   * Open the drawer on where the student actually is.
   *
   * A chapter runs to 92 sections. Opening at the top on section 40 means
   * scrolling to find the row that says "Now playing", which is the one thing
   * they came to the list already knowing. Measured from the row height rather
   * than `scrollTo`-by-ref so a group heading in between still lands right.
   */
  useEffect(() => {
    if (!drawerOpen) return;
    const before = subtopicGroups.filter((g) => g.first <= currentSegment).length;
    const y = currentSegment * TOPIC_ROW_H + before * TOPIC_GROUP_H;
    const id = setTimeout(
      () => drawerScrollRef.current?.scrollTo({ y: Math.max(0, y - TOPIC_ROW_H * 2), animated: false }),
      // After the slide-in has laid the list out; scrolling a zero-height
      // ScrollView does nothing and leaves it at the top.
      60
    );
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  const jumpToTopic = (index: number) => {
    setCurrentSegment(index);
    setDrawerOpen(false);
  };

  const showJumpChip = !following;

  if (!isLandscape) {
    return <View style={styles.rotateHold} />;
  }

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />

      {/* The recorded lesson replays on the same page as the live class:
          ruled paper to all four edges, no card and no frame. */}
      <View style={styles.boardArea}>
        <Pressable style={StyleSheet.absoluteFill} onPress={toggleChrome}>
          <RuledGround height={boardHeight} />
        </Pressable>

        <ScrollView
          ref={scrollRef}
          style={StyleSheet.absoluteFill}
          contentContainerStyle={styles.boardContent}
          scrollEventThrottle={16}
          onScroll={onBoardScroll}
          onLayout={(e) => setBoardHeight(e.nativeEvent.layout.height)}
          showsVerticalScrollIndicator={false}>
          <Pressable style={styles.boardTapTarget} onPress={toggleChrome}>
            {started && section && (
              <Text style={styles.sectionHeading}>{section.title}</Text>
            )}
            {/* A hand-authored scene, when this section has one: the same
                choreographed board the webpage draws, driven by the same
                playhead. Sections without one fall through to their
                board_content events below — the webpage's own fallback. */}
            {started && SceneForSection ? (
              <View style={styles.sceneWrap}>
                <SceneForSection
                  currentTime={currentTime}
                  reveals={section?.revealAt ?? []}
                  language={language}
                />
              </View>
            ) : null}
            {started &&
              !SceneForSection &&
              blocks.slice(0, revealedBlockCount).map(({ block }, i) => (
              <BoardBlockView
                key={i}
                block={block}
                chars={Infinity}
                styles={styles}
                scale={scale}
                verticalScale={verticalScale}
              />
            ))}
            {started && !SceneForSection && revealedBlockCount < blocks.length && (
              <BoardBlockView
                key={revealedBlockCount}
                block={blocks[revealedBlockCount].block}
                chars={currentChars}
                styles={styles}
                scale={scale}
                verticalScale={verticalScale}
              />
            )}
            {state.kind === 'loading' && (
              <Text style={styles.boardBody}>Loading the lesson…</Text>
            )}
            {state.kind === 'error' && (
              <Pressable onPress={load}>
                <Text style={styles.boardBody}>
                  Couldn&apos;t load this lesson. Tap to try again.
                </Text>
              </Pressable>
            )}
            {blocks.length > 0 && revealedBlockCount >= blocks.length && (
              <View style={styles.writingRow}>
                <Blink style={styles.writingCursor} />
                <Text style={styles.writingText}>Writing…</Text>
              </View>
            )}
          </Pressable>
        </ScrollView>

        <MarginRule />
        <ScrollIndicator top={indicatorTop} height={indicatorHeight} visible={indicatorVisible} />

        {/* Back is the only way out of this screen — no End button here — so
            it gets a paper plate and a 40pt target. */}
        <Animated.View
          style={[styles.topBar, headerStyle]}
          pointerEvents={chromeVisible ? 'auto' : 'none'}>
          <Pressable style={styles.backBtn} onPress={() => router.back()}>
            <BackChevronIcon size={17} />
          </Pressable>
          <View style={styles.chapterChip}>
            <Text style={styles.chapterChipTitle}>{chapterTitle}</Text>
            <Text style={styles.chapterChipSub}>
              {chapterSub ? `${chapterSub} · ` : ''}
              {sections.length > 0 ? `Section ${currentSegment + 1} of ${sections.length}` : ''}
            </Text>
          </View>
        </Animated.View>

        {/* One bottom-centred column: the chip, then a collapsing slot holding
            the dock. */}
        <View style={styles.dockStack} pointerEvents="box-none">
          {showJumpChip && (
            <Pressable style={styles.backnowChip} onPress={jumpToLive}>
              <Text style={styles.backnowArrow}>↓</Text>
              <Text style={styles.backnowText}>Back to now</Text>
            </Pressable>
          )}
          <Animated.View style={[styles.dockSlot, dockSlotStyle]} pointerEvents="box-none">
            <View style={styles.dock}>
              <Pressable
                style={styles.dockPlayBtn}
                onPress={() => {
                  if (isPlaying) {
                    wasPlayingRef.current = false;
                    player.pause();
                  } else {
                    wasPlayingRef.current = true;
                    player.play();
                  }
                }}>
                {isPlaying ? <PauseIcon size={15} /> : <PlayIcon size={15} />}
              </Pressable>
              <Pressable style={styles.dockTopicsBtn} onPress={openDrawer}>
                <HamburgerIcon size={13} color={INK} />
                <Text style={styles.dockTopicsText}>Topics</Text>
              </Pressable>
              <Pressable
                style={[styles.dockCcBtn, !ccOn && styles.dockCcBtnOff]}
                onPress={() => setCcOn((c) => !c)}>
                <Text style={[styles.dockCcText, !ccOn && styles.dockCcTextOff]}>CC</Text>
              </Pressable>
            </View>
          </Animated.View>
        </View>

        {/* Progress is a hairline flush on the bottom edge, one segment per
            topic. No timestamps anywhere — this is a classroom, not a video
            player. */}
        <View
          style={[styles.segbar, { opacity: chromeVisible ? 1 : 0.45 }]}
          pointerEvents="none">
          {sections.map((_, i) => (
            <SegmentTrack
              key={i}
              index={i}
              current={currentSegment}
              progress={segProgress}
              styles={styles}
            />
          ))}
        </View>
      </View>

      <CaptionStrip open={ccOn} listening={false} text={caption} />

      {drawerOpen && (
        <>
          <Pressable style={styles.scrim} onPress={closeDrawer} />
          <Animated.View entering={SlideInRight.duration(280)} style={styles.drawer}>
            <View style={styles.drawerHeader}>
              <View style={styles.drawerHeaderText}>
                {/* The chapter's name alone. "In this chapter" sat above it
                    saying what the panel plainly is. */}
                <Text style={styles.drawerTitle}>{chapterTitle}</Text>
              </View>
              <Pressable style={styles.drawerCloseBtn} onPress={closeDrawer}>
                <Text style={styles.drawerCloseText}>✕</Text>
              </Pressable>
            </View>

            {/* A ScrollView, not a View. A chapter runs to 92 sections and this
                was a fixed-height column, so everything past the seventh row was
                laid out beyond the drawer and clipped: invisible, and untappable
                even though every row has a handler. That is what "the topics are
                not clickable" was. */}
            <ScrollView
              ref={drawerScrollRef}
              style={styles.drawerList}
              contentContainerStyle={styles.drawerListContent}
              showsVerticalScrollIndicator>
              {subtopicGroups.map((group, gi) => {
                const open = openGroup === gi;
                return (
                  <View key={`${group.subtopic}-${group.first}`} style={styles.group}>
                    {/* The topic is the heading. It was the quietest thing on
                        the panel while its sections shouted, which is the
                        hierarchy upside down. */}
                    <Pressable
                      style={styles.groupRow}
                      onPress={() => setOpenGroup(open ? null : gi)}>
                      <Text
                        style={[styles.groupName, gi === currentGroup && styles.groupNameActive]}
                        numberOfLines={2}>
                        {group.subtopic}
                      </Text>
                      <Text style={styles.groupCount}>{group.sections.length}</Text>
                      <Chevron open={open} />
                    </Pressable>

                    {open && (
                      <Animated.View entering={FadeIn.duration(140)}>
                        {group.sections.map((entry, n) => {
                          const i = group.first + n;
                          return (
                            <TopicRow
                              key={entry.id}
                              name={entry.title}
                              status={
                                i < currentSegment
                                  ? 'done'
                                  : i === currentSegment
                                    ? 'current'
                                    : 'upcoming'
                              }
                              styles={styles}
                              onPress={() => jumpToTopic(i)}
                            />
                          );
                        })}
                      </Animated.View>
                    )}
                  </View>
                );
              })}
            </ScrollView>

            <View style={styles.drawerFooter}>
              <Text style={styles.drawerFooterText}>
                Tap a topic to jump — your progress is saved.
              </Text>
            </View>
          </Animated.View>
        </>
      )}
    </View>
  );
}

function SegmentTrack({
  index,
  current,
  progress,
  styles,
}: {
  index: number;
  current: number;
  progress: number;
  styles: Styles;
}) {
  let widthPct = 0;
  let color: string = colors.marigold;
  if (index < current) {
    widthPct = 100;
    color = 'rgba(28,26,22,.3)';
  } else if (index === current) {
    widthPct = Math.round((SEGMENT_START_PROGRESS + (1 - SEGMENT_START_PROGRESS) * progress) * 100);
  }
  return (
    <View style={styles.segTrack}>
      <View style={[styles.segFill, { width: `${widthPct}%`, backgroundColor: color }]} />
    </View>
  );
}

/** The disclosure mark. Rotates rather than swapping glyphs, so the open and
 *  shut states are the same object. */
function Chevron({ open }: { open: boolean }) {
  const turn = useSharedValue(open ? 1 : 0);
  useEffect(() => {
    turn.value = withTiming(open ? 1 : 0, { duration: 180, easing: Easing.out(Easing.quad) });
  }, [open, turn]);
  const style = useAnimatedStyle(() => ({ transform: [{ rotate: `${turn.value * 90}deg` }] }));
  return (
    <Animated.View style={style}>
      <Svg viewBox="0 0 16 16" width={12} height={12} fill="none">
        <Path
          d="M6 3.5 10.5 8 6 12.5"
          stroke={INK_FAINT}
          strokeWidth={1.9}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Animated.View>
  );
}

function TopicRow({
  name,
  status,
  styles,
  onPress,
}: {
  name: string;
  status: 'done' | 'current' | 'upcoming';
  styles: Styles;
  onPress: () => void;
}) {
  /**
   * State is the row, not a badge on it.
   *
   * This used to carry a ✓/●/○ glyph, an amber "Now playing" line under the
   * title, and a tinted card with a border — four separate things all saying
   * the same one thing, in a 272pt column where the title itself was being
   * truncated for want of room. The playing section is now simply the dark
   * one, finished sections recede, and the rest sit plainly in between.
   */
  return (
    <Pressable
      style={[
        styles.topicRow,
        status === 'current' && styles.topicRowCurrent,
      ]}
      onPress={onPress}>
      <Text
        style={
          status === 'current'
            ? styles.topicNameCurrent
            : status === 'done'
              ? styles.topicNameDone
              : styles.topicNameUpcoming
        }
        numberOfLines={2}>
        {name}
      </Text>
    </Pressable>
  );
}

function BoardBlockView({
  block,
  chars,
  styles,
  scale,
  verticalScale,
}: {
  block: BoardBlock;
  chars: number;
  styles: Styles;
  scale: (n: number) => number;
  verticalScale: (n: number) => number;
}) {
  if (block.kind === 'kalamHeading') {
    return <Text style={styles.boardHeading}>{block.text.slice(0, chars)}</Text>;
  }
  if (block.kind === 'equation') {
    return (
      <Text style={block.size === 'large' ? styles.boardEquationLarge : styles.boardEquationSmall}>
        {block.text.slice(0, chars)}
      </Text>
    );
  }
  if (block.kind === 'kalamNote') {
    return (
      <Text
        style={[
          styles.boardKalamNoteBase,
          {
            color: block.color,
            fontSize: scale(block.fontSize),
            marginBottom: verticalScale(block.marginBottom),
            transform: [{ rotate: `${block.rotateDeg}deg` }],
            maxWidth: block.maxWidth ? scale(block.maxWidth) : undefined,
          },
        ]}>
        {block.text.slice(0, chars)}
      </Text>
    );
  }
  if (block.kind === 'diagram') {
    return <TrainsDiagram scale={scale} styles={styles} />;
  }
  if (block.kind === 'svg') {
    return <AuthoredFigure block={block} styles={styles} scale={scale} />;
  }
  const visible = revealSegments(block.segments, chars);
  return (
    <Text style={styles.boardBody}>
      {visible.map((seg, i) => (
        <Text key={i} style={seg.bold ? styles.boardBodyBold : undefined}>
          {seg.text}
        </Text>
      ))}
    </Text>
  );
}

/**
 * Entities the authored figures use that react-native-svg's parser does not
 * resolve. It handles the five XML built-ins and nothing else, so `&#215;`
 * reaches the board as the literal text "&#215;" instead of "×".
 *
 * The five built-ins (`amp`, `lt`, `gt`, `quot`, `apos`) are deliberately
 * absent: decoding `&amp;` to a bare `&`, or `&lt;` to `<`, would corrupt the
 * very markup being parsed.
 */
const SVG_ENTITIES: Record<string, string> = {
  nbsp: ' ', times: '×', divide: '÷', minus: '−', plusmn: '±', deg: '°',
  micro: 'µ', ne: '≠', le: '≤', ge: '≥', asymp: '≈', equiv: '≡', prop: '∝',
  rarr: '→', larr: '←', uarr: '↑', darr: '↓', harr: '↔', rArr: '⇒', lArr: '⇐',
  hellip: '…', ndash: '–', mdash: '—', prime: '′', Prime: '″', bull: '•',
  alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', epsilon: 'ε', theta: 'θ',
  lambda: 'λ', mu: 'μ', nu: 'ν', pi: 'π', rho: 'ρ', sigma: 'σ', tau: 'τ',
  phi: 'φ', omega: 'ω', Delta: 'Δ', Sigma: 'Σ', Omega: 'Ω', Phi: 'Φ',
  infin: '∞', radic: '√', sum: '∑', int: '∫', part: '∂', prop2: '∝',
  frac12: '½', frac13: '⅓', frac14: '¼', sup2: '²', sup3: '³',
};

/** A decoded character, unless it is one that would break the XML around it. */
function safeEntityChar(code: number, original: string): string {
  if (!Number.isFinite(code) || code <= 0 || code > 0x10ffff) return original;
  const char = String.fromCodePoint(code);
  return '<>&"\''.includes(char) ? original : char;
}

function decodeSvgEntities(svg: string): string {
  return svg
    .replace(/&#x([0-9a-fA-F]+);/g, (m, hex) => safeEntityChar(parseInt(hex, 16), m))
    .replace(/&#(\d+);/g, (m, dec) => safeEntityChar(parseInt(dec, 10), m))
    .replace(/&([a-zA-Z][a-zA-Z0-9]*);/g, (m, name) => SVG_ENTITIES[name] ?? m);
}

/**
 * Native text metrics are not the browser's: the same `font-family="sans-serif"`
 * label sets a little wider here, so a label authored to sit just inside the
 * right edge of the viewBox is clipped by it — "= 350 cm" arriving as
 * "= 350 c". Widening the box gives that overflow somewhere to go, at the cost
 * of drawing everything fractionally smaller.
 */
function padViewBox(svg: string): string {
  return svg.replace(
    /viewBox\s*=\s*["']\s*([-\d.]+)[,\s]+([-\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)\s*["']/i,
    (match, x, y, w, h) => {
      const width = Number(w);
      const height = Number(h);
      if (!(width > 0) || !(height > 0)) return match;
      return `viewBox="${x} ${y} ${(width * 1.07).toFixed(2)} ${height}"`;
    }
  );
}

/**
 * `viewBox` is what the authored figures carry — explicit width/height
 * attributes usually are not — so the aspect ratio comes from there and the
 * drawing is laid out to the board's column width. Without this a figure
 * renders at whatever intrinsic size it claims and is cropped.
 */
function viewBoxAspect(svg: string): number | null {
  const match = svg.match(
    /viewBox\s*=\s*["']\s*[-\d.]+[,\s]+[-\d.]+[,\s]+([\d.]+)[,\s]+([\d.]+)/i
  );
  if (!match) return null;
  const width = Number(match[1]);
  const height = Number(match[2]);
  if (!(width > 0) || !(height > 0)) return null;
  return width / height;
}

function AuthoredFigure({
  block,
  styles,
  scale,
}: {
  block: Extract<BoardBlock, { kind: 'svg' }>;
  styles: Styles;
  scale: (n: number) => number;
}) {
  // Prepared once per figure: both passes are string rewrites, and the aspect
  // has to be read from the padded box rather than the authored one.
  const svg = useMemo(() => padViewBox(decodeSvgEntities(block.svg)), [block.svg]);
  const width = scale(430);
  const height = width / (viewBoxAspect(svg) ?? 16 / 9);
  return (
    <View style={styles.figureWrap}>
      <View style={{ width, height }}>
        <SvgXml xml={svg} width="100%" height="100%" />
      </View>
      {!!block.caption && <Text style={styles.figureCaption}>{block.caption}</Text>}
    </View>
  );
}

function TrainsDiagram({ scale, styles }: { scale: (n: number) => number; styles: Styles }) {
  const w = scale(330);
  const h = scale(142);
  return (
    <View style={styles.diagramWrap}>
      <Svg width={w} height={h} viewBox="0 0 340 150">
        <SvgText x={10} y={14} fontFamily="Kalam_400Regular" fontSize={11} fill={colors.faint}>
          same direction · same speed
        </SvgText>
        <Line
          x1={20}
          y1={66}
          x2={320}
          y2={66}
          stroke="rgba(28,26,22,.22)"
          strokeWidth={1.5}
          strokeDasharray="2 6"
        />
        <Rect x={46} y={38} width={96} height={26} rx={7} fill="#FCF4E0" stroke={colors.ink} strokeWidth={2} />
        <SvgText x={82} y={56} fontFamily="Kalam_700Bold" fontSize={14} fill={colors.ink}>
          A
        </SvgText>
        <Line x1={150} y1={51} x2={192} y2={51} stroke={colors.red} strokeWidth={2.4} strokeLinecap="round" />
        <Path
          d="M184 44 194 51 184 58"
          stroke={colors.red}
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <SvgText x={200} y={56} fontFamily="Kalam_400Regular" fontSize={11} fill={colors.slate}>
          60 km/h
        </SvgText>
        <Line
          x1={20}
          y1={120}
          x2={320}
          y2={120}
          stroke="rgba(28,26,22,.22)"
          strokeWidth={1.5}
          strokeDasharray="2 6"
        />
        <Rect x={104} y={92} width={96} height={26} rx={7} fill="#FCF4E0" stroke={colors.ink} strokeWidth={2} />
        <SvgText x={142} y={110} fontFamily="Kalam_700Bold" fontSize={14} fill={colors.ink}>
          B
        </SvgText>
        <Line x1={208} y1={105} x2={250} y2={105} stroke={colors.red} strokeWidth={2.4} strokeLinecap="round" />
        <Path
          d="M242 98 252 105 242 112"
          stroke={colors.red}
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <SvgText x={258} y={110} fontFamily="Kalam_400Regular" fontSize={11} fill={colors.slate}>
          60 km/h
        </SvgText>
        <SvgText x={118} y={144} fontFamily="Kalam_700Bold" fontSize={13} fill={colors.success}>
          v(A rel B) = 60 − 60 = 0
        </SvgText>
      </Svg>
    </View>
  );
}

function BackChevronIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M15 6l-6 6 6 6"
        stroke={colors.ink}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function HamburgerIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M4 6h16M4 12h16M4 18h10" stroke={color} strokeWidth={2.2} strokeLinecap="round" />
    </Svg>
  );
}

function PauseIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M9 5v14M15 5v14" stroke={colors.paper} strokeWidth={2.4} strokeLinecap="round" />
    </Svg>
  );
}

function PlayIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill={colors.paper}>
      <Path d="M8 6.2l10.5 5.8L8 17.8z" />
    </Svg>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.paper,
    },
    // Held until the device has actually turned — painting a landscape
    // layout into a still-portrait window is what made this look broken.
    rotateHold: {
      flex: 1,
      backgroundColor: colors.paper,
    },
    boardArea: {
      flex: 1,
      minHeight: 0,
      position: 'relative',
      backgroundColor: '#fff',
      overflow: 'hidden',
    },
    // 52 top, 56 left (the notch gutter), 40 right, 104 bottom (4×26) so the
    // dock never sits on the last written line.
    boardContent: {
      // flexGrow lets the tap target below stretch to the full board height,
      // so tapping empty paper tucks the chrome just like tapping a line.
      flexGrow: 1,
      paddingTop: BOARD_TOP,
      paddingRight: 40,
      paddingBottom: 104,
      paddingLeft: BOARD_LEFT,
    },
    boardTapTarget: {
      flex: 1,
    },
    boardHeading: {
      fontFamily: 'Kalam_700Bold',
      fontSize: 17,
      lineHeight: RHYTHM,
      color: RED,
      transform: [{ rotate: '-0.4deg' }],
    },
    boardEquationLarge: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: 17,
      lineHeight: RHYTHM,
      color: INK,
    },
    boardEquationSmall: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: 15.5,
      lineHeight: RHYTHM,
      color: INK,
    },
    boardBody: {
      fontFamily: 'Onest_400Regular',
      fontSize: 13.5,
      lineHeight: RHYTHM,
      color: INK_MUTED,
      maxWidth: 560,
    },
    // The section's own title, written at the top of the board the way a
    // teacher writes what today is about before starting on it.
    sectionHeading: {
      fontFamily: 'Onest_700Bold',
      fontSize: 17,
      lineHeight: RHYTHM,
      letterSpacing: -0.3,
      color: INK,
      maxWidth: 560,
      marginBottom: 6,
    },
    // The authored scenes are drawn on a 1080x620 canvas; giving the wrapper
    // that aspect lets the board scroll past it like any other block.
    sceneWrap: {
      alignSelf: 'stretch',
      height: verticalScale(300),
      marginBottom: 8,
    },
    figureWrap: {
      alignItems: 'flex-start',
      gap: 6,
      marginVertical: 8,
    },
    figureCaption: {
      fontFamily: 'Onest_500Medium',
      fontSize: 11,
      lineHeight: 16,
      color: INK_FAINT,
      maxWidth: 560,
    },
    boardBodyBold: {
      fontFamily: 'Onest_700Bold',
      color: INK,
    },
    boardKalamNoteBase: {
      fontFamily: 'Kalam_700Bold',
      lineHeight: RHYTHM,
    },
    // Diagrams are whole multiples of the rhythm — 130 is 5×26 — so the
    // writing below one lands back on a rule.
    diagramWrap: {
      height: 130,
      justifyContent: 'center',
    },
    writingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      height: RHYTHM,
    },
    writingCursor: {
      width: 8,
      height: 14,
      borderRadius: 2,
      backgroundColor: AMBER,
    },
    writingText: {
      fontFamily: 'Kalam_700Bold',
      fontSize: 12,
      color: INK_FAINT,
    },

    // Header
    topBar: {
      position: 'absolute',
      top: 14,
      left: 52,
      right: 26,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    backBtn: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(252,250,244,.96)',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.16)',
      shadowColor: INK,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.22,
      shadowRadius: 8,
      elevation: 6,
    },
    chapterChip: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: 8,
      flexShrink: 1,
    },
    chapterChipTitle: {
      fontFamily: 'Onest_700Bold',
      fontSize: 14,
      color: INK,
    },
    chapterChipSub: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: 11.5,
      color: INK_FAINT,
    },

    // The dock stack — chip above a collapsing slot holding the dock.
    dockStack: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 18,
      alignItems: 'center',
    },
    // Deliberately NOT overflow:hidden. The slot's job is to collapse the
    // dock's space so the chip drops into its place; clipping it also clipped
    // the dock's shadow into a hard grey rectangle. The dock fades out over
    // the same 280ms, so nothing is seen overflowing.
    dockSlot: {
      justifyContent: 'flex-start',
    },
    backnowChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      backgroundColor: DARK_CHROME,
      borderRadius: 99,
      paddingVertical: 8,
      paddingHorizontal: 16,
      shadowColor: INK,
      shadowOffset: { width: 0, height: 7 },
      shadowOpacity: 0.35,
      shadowRadius: 8,
      elevation: 6,
    },
    backnowArrow: {
      fontFamily: 'Onest_700Bold',
      fontSize: 12,
      color: AMBER,
    },
    backnowText: {
      fontFamily: 'Onest_700Bold',
      fontSize: 12,
      color: '#EFEBDD',
    },
    dock: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      paddingTop: 6,
      paddingRight: 14,
      paddingBottom: 6,
      paddingLeft: 6,
      borderRadius: 99,
      backgroundColor: 'rgba(252,250,244,.94)',
      borderWidth: 1,
      borderColor: HAIRLINE,
      shadowColor: INK,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.22,
      shadowRadius: 8,
      elevation: 6,
    },
    dockPlayBtn: {
      width: 44,
      height: 44,
      flexShrink: 0,
      borderRadius: 22,
      backgroundColor: INK,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: INK,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.3,
      shadowRadius: 7,
      elevation: 5,
    },
    dockTopicsBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 7,
    },
    dockTopicsText: {
      fontFamily: 'Onest_700Bold',
      fontSize: 12.5,
      color: INK,
    },
    dockCcBtn: {
      width: 30,
      height: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: AMBER_WASH,
    },
    dockCcBtnOff: {
      backgroundColor: 'transparent',
    },
    dockCcText: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: 9.5,
      letterSpacing: 0.06 * 9.5,
      color: DEEP_AMBER,
    },
    dockCcTextOff: {
      color: INK_FAINT,
    },

    // Progress: flush on the bottom edge, one segment per topic.
    segbar: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: 'row',
      gap: 3,
    },
    segTrack: {
      flex: 1,
      height: 2.5,
      backgroundColor: 'rgba(28,26,22,.08)',
      overflow: 'hidden',
    },
    segFill: {
      height: '100%',
      backgroundColor: AMBER,
    },

    scrim: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(22,19,14,.3)',
    },
    drawer: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: scale(272),
      // A hair off white, so the playing row can BE white and still read as
      // lifted off it. Neutral rather than the reader's cream: this is chrome
      // over the page, not more paper.
      backgroundColor: '#F5F5F3',
      borderLeftWidth: 1,
      borderLeftColor: colors.hairline,
      flexDirection: 'column',
      shadowColor: colors.ink,
      shadowOffset: { width: -scale(7), height: 0 },
      shadowOpacity: 0.22,
      shadowRadius: scale(16),
      elevation: 8,
    },
    drawerHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingTop: verticalScale(16),
      paddingHorizontal: scale(16),
      paddingBottom: verticalScale(10),
    },
    drawerHeaderText: {
      flex: 1,
      minWidth: 0,
    },
    drawerTitle: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(15),
      color: colors.ink,
    },
    drawerCloseBtn: {
      width: scale(28),
      height: scale(28),
      borderRadius: scale(14),
      borderWidth: scale(1.4),
      borderColor: colors.inputBorder,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    drawerCloseText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(12),
      color: colors.slate,
    },
    drawerList: {
      flex: 1,
    },
    drawerListContent: {
      paddingTop: verticalScale(2),
      paddingHorizontal: scale(10),
      paddingBottom: verticalScale(8),
      gap: scale(3),
    },
    group: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.05)',
    },
    /** The topic. The heading of its own list, and the thing a student is
     *  actually looking for. */
    groupRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(9),
      paddingVertical: verticalScale(11),
      paddingHorizontal: scale(12),
    },
    groupName: {
      flex: 1,
      fontFamily: 'Onest_700Bold',
      fontSize: scale(12.5),
      lineHeight: scale(16),
      color: colors.ink,
    },
    /**
     * The topic being taught needs no colour of its own: it is the one the
     * accordion opens to, and the white card sits inside it. Weight alone.
     */
    groupNameActive: {
      fontFamily: 'Onest_800ExtraBold',
    },
    groupCount: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(10.5),
      color: colors.quiet,
    },
    drawerFooter: {
      paddingTop: verticalScale(8),
      paddingHorizontal: scale(16),
      paddingBottom: verticalScale(14),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.07)',
    },
    drawerFooterText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    topicRow: {
      // Indented under its topic, so the nesting is visible without a rule.
      paddingVertical: verticalScale(7),
      paddingLeft: scale(20),
      paddingRight: scale(12),
      backgroundColor: 'transparent',
    },
    /**
     * The playing section is a white card lifted off the panel.
     *
     * It has been a solid ink slab and an amber wash, and both were louder
     * than a list you are meant to scan. Raising it instead of colouring it
     * says "here" with depth rather than hue, and leaves the type black
     * everywhere so nothing competes with the titles themselves.
     */
    topicRowCurrent: {
      backgroundColor: '#FFFFFF',
      borderRadius: scale(9),
      marginHorizontal: scale(7),
      paddingLeft: scale(13),
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.07,
      shadowRadius: scale(3),
      elevation: 2,
    },
    // Finished sections recede rather than being ticked.
    topicNameDone: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(11.5),
      lineHeight: scale(15),
      color: colors.quiet,
    },
    topicNameCurrent: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11.5),
      lineHeight: scale(15),
      color: colors.ink,
    },
    topicNameUpcoming: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(11.5),
      lineHeight: scale(15),
      color: colors.slate,
    },
  });
}

type Styles = ReturnType<typeof createStyles>;

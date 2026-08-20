import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
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
  SlideInRight,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Line, Path, Rect, Text as SvgText } from 'react-native-svg';

import {
  AMBER,
  AMBER_WASH,
  BOARD_LEFT,
  BOARD_TOP,
  Blink,
  GREEN,
  INK_GHOST,
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

type Segment = { text: string; bold?: boolean };
type BoardBlock =
  | { kind: 'kalamHeading'; text: string }
  | { kind: 'equation'; text: string; size: 'large' | 'small' }
  | { kind: 'body'; segments: Segment[] }
  | { kind: 'diagram' }
  | {
      kind: 'kalamNote';
      text: string;
      color: string;
      fontSize: number;
      rotateDeg: number;
      marginBottom: number;
      maxWidth?: number;
    };

const BOARD_BLOCKS: BoardBlock[] = [
  { kind: 'kalamHeading', text: 'two trains, one platform' },
  { kind: 'equation', text: 'v(A rel B) = v(A) − v(B)', size: 'large' },
  {
    kind: 'body',
    segments: [
      { text: 'Velocity is always measured ' },
      { text: 'relative to something', bold: true },
      { text: '. Change the observer, change the answer.' },
    ],
  },
  { kind: 'diagram' },
  {
    kind: 'body',
    segments: [
      { text: 'Same direction, same speed → they see each other ' },
      { text: 'standing still', bold: true },
      { text: '.' },
    ],
  },
  {
    kind: 'kalamNote',
    text: 'aur opposite direction?',
    color: '#157A45',
    fontSize: 15,
    rotateDeg: -0.3,
    marginBottom: 9,
  },
  { kind: 'equation', text: '|v(A rel B)| = 60 + 60 = 120 km/h', size: 'small' },
  {
    kind: 'body',
    segments: [
      { text: 'Crossing trains flash past each other — the speeds ' },
      { text: 'add', bold: true },
      { text: ". That's why the other train is gone in two seconds." },
    ],
  },
  {
    kind: 'kalamNote',
    text: 'same idea powers river–boat problems — up next.',
    color: colors.red,
    fontSize: 14.5,
    rotateDeg: -0.4,
    marginBottom: 8,
    maxWidth: 560,
  },
];

const CAPTION_TEXT =
  '…dono train same speed pe hain, toh ek dusre ke liye ruki hui';

const TOPICS = [
  { name: 'Displacement & distance' },
  { name: 'Average & instantaneous velocity' },
  { name: 'Relative velocity' },
  { name: 'Projectile basics' },
  { name: 'River–boat problems' },
];

const CHAR_TICK_MS = 26;
const DIAGRAM_HOLD_TICKS = 24;
const FOLLOW_SCROLL_MS = 350;
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

export default function LessonPlayerScreen() {
  const isLandscape = useLandscapeLock();
  const params = useLocalSearchParams<{ chapterId?: string; chapterTitle?: string }>();
  const chapterTitle = (params.chapterTitle ?? 'Kinematics').split(' · ')[0];
  const { scale, verticalScale } = useLandscapeScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  // Board typewriter (adapted from live-classroom.tsx)
  const [revealedBlockCount, setRevealedBlockCount] = useState(0);
  const [currentChars, setCurrentChars] = useState(0);
  const [diagramHold, setDiagramHold] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      if (!isPlaying) return;
      setRevealedBlockCount((blockIdx) => {
        if (blockIdx >= BOARD_BLOCKS.length) return blockIdx;
        const block = BOARD_BLOCKS[blockIdx];
        if (block.kind === 'diagram') {
          setDiagramHold((h) => {
            if (h + 1 >= DIAGRAM_HOLD_TICKS) {
              setCurrentChars(0);
              return 0;
            }
            return h + 1;
          });
          if (diagramHold + 1 >= DIAGRAM_HOLD_TICKS) return blockIdx + 1;
          return blockIdx;
        }
        const fullLength =
          block.kind === 'body'
            ? block.segments.reduce((sum, s) => sum + s.text.length, 0)
            : block.text.length;
        const step = Math.random() < 0.25 ? 2 : 1;
        const next = currentChars + step;
        if (next >= fullLength) {
          setCurrentChars(0);
          return blockIdx + 1;
        }
        setCurrentChars(next);
        return blockIdx;
      });
    }, CHAR_TICK_MS);
    return () => clearInterval(id);
  }, [isPlaying, currentChars, diagramHold]);

  // 5-segment story progress bar — 80s per segment, respects play/pause.
  const [currentSegment, setCurrentSegment] = useState(2);
  const [segElapsed, setSegElapsed] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (!isPlaying) return;
      setSegElapsed((elapsed) => {
        const next = elapsed + SEGMENT_TICK_MS;
        if (next < SEGMENT_DURATION_MS) return next;
        if (currentSegment < TOPICS.length - 1) {
          setCurrentSegment((s) => s + 1);
          return 0;
        }
        return SEGMENT_DURATION_MS;
      });
    }, SEGMENT_TICK_MS);
    return () => clearInterval(id);
  }, [isPlaying, currentSegment]);

  const segProgress = segElapsed / SEGMENT_DURATION_MS;

  // Chrome auto-hide / follow-scroll (adapted from live-classroom.tsx)
  const [chromeVisible, setChromeVisible] = useState(true);
  const [boardHeight, setBoardHeight] = useState(390);
  const [following, setFollowing] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
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
    const id = setInterval(() => {
      if (following) scrollRef.current?.scrollToEnd({ animated: false });
    }, FOLLOW_SCROLL_MS);
    return () => clearInterval(id);
  }, [following]);

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

  const closeDrawer = () => setDrawerOpen(false);

  const jumpToTopic = (index: number) => {
    setCurrentSegment(index);
    setSegElapsed(0);
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
            {BOARD_BLOCKS.slice(0, revealedBlockCount).map((block, i) => (
              <BoardBlockView
                key={i}
                block={block}
                chars={Infinity}
                styles={styles}
                scale={scale}
                verticalScale={verticalScale}
              />
            ))}
            {revealedBlockCount < BOARD_BLOCKS.length && (
              <BoardBlockView
                key={revealedBlockCount}
                block={BOARD_BLOCKS[revealedBlockCount]}
                chars={currentChars}
                styles={styles}
                scale={scale}
                verticalScale={verticalScale}
              />
            )}
            {revealedBlockCount >= BOARD_BLOCKS.length && (
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
            <Text style={styles.chapterChipSub}>Physics · Class 11</Text>
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
              <Pressable style={styles.dockPlayBtn} onPress={() => setIsPlaying((p) => !p)}>
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
          {TOPICS.map((_, i) => (
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

      <CaptionStrip open={ccOn} listening={false} text={CAPTION_TEXT} />

      {drawerOpen && (
        <>
          <Pressable style={styles.scrim} onPress={closeDrawer} />
          <Animated.View entering={SlideInRight.duration(280)} style={styles.drawer}>
            <View style={styles.drawerHeader}>
              <View style={styles.drawerHeaderText}>
                <Text style={styles.drawerOverline}>In this chapter</Text>
                <Text style={styles.drawerTitle}>{chapterTitle}</Text>
              </View>
              <Pressable style={styles.drawerCloseBtn} onPress={closeDrawer}>
                <Text style={styles.drawerCloseText}>✕</Text>
              </Pressable>
            </View>

            <View style={styles.drawerList}>
              {TOPICS.map((topic, i) => {
                const status = i < currentSegment ? 'done' : i === currentSegment ? 'current' : 'upcoming';
                return (
                  <TopicRow
                    key={i}
                    name={topic.name}
                    status={status}
                    styles={styles}
                    onPress={() => jumpToTopic(i)}
                  />
                );
              })}
            </View>

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
  const mark = status === 'done' ? '✓' : status === 'current' ? '●' : '○';
  const markColor = status === 'done' ? GREEN : status === 'current' ? AMBER : INK_GHOST;
  const nameStyle =
    status === 'done'
      ? styles.topicNameDone
      : status === 'current'
        ? styles.topicNameCurrent
        : styles.topicNameUpcoming;
  return (
    <Pressable
      style={[styles.topicRow, status === 'current' && styles.topicRowCurrent]}
      onPress={onPress}>
      <Text style={[styles.topicMark, { color: markColor }]}>{mark}</Text>
      <View style={styles.topicTextCol}>
        <Text style={nameStyle} numberOfLines={1}>
          {name}
        </Text>
        {/* the source markup always renders this line (empty when not current) so every
            row reserves the same height — omitting it entirely would make the current
            row taller than its siblings */}
        <Text style={styles.topicSub}>{status === 'current' ? 'Now playing' : ''}</Text>
      </View>
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
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: 17,
      lineHeight: RHYTHM,
      color: INK,
    },
    boardEquationSmall: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: 15.5,
      lineHeight: RHYTHM,
      color: INK,
    },
    boardBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 13.5,
      lineHeight: RHYTHM,
      color: INK_MUTED,
      maxWidth: 560,
    },
    boardBodyBold: {
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_700Bold',
      fontSize: 14,
      color: INK,
    },
    chapterChipSub: {
      fontFamily: 'AnekLatin_600SemiBold',
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
      fontFamily: 'AnekLatin_700Bold',
      fontSize: 12,
      color: AMBER,
    },
    backnowText: {
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_800ExtraBold',
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
      backgroundColor: 'rgba(252,250,244,.98)',
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
    drawerOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9.5),
      letterSpacing: scale(1.33),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    drawerTitle: {
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.slate,
    },
    drawerList: {
      flex: 1,
      paddingTop: verticalScale(2),
      paddingHorizontal: scale(10),
      paddingBottom: verticalScale(8),
      gap: scale(3),
    },
    drawerFooter: {
      paddingTop: verticalScale(8),
      paddingHorizontal: scale(16),
      paddingBottom: verticalScale(14),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.12)',
      borderStyle: 'dashed',
    },
    drawerFooterText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    topicRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingVertical: verticalScale(9),
      paddingHorizontal: scale(10),
      borderRadius: scale(12),
      borderWidth: scale(1.4),
      borderColor: 'transparent',
      backgroundColor: 'transparent',
    },
    topicRowCurrent: {
      backgroundColor: '#FCF4E0',
      borderColor: 'rgba(238,163,31,.55)',
    },
    topicMark: {
      width: scale(18),
      flexShrink: 0,
      textAlign: 'center',
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(12),
    },
    topicTextCol: {
      flex: 1,
      minWidth: 0,
    },
    topicNameDone: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12.5),
      color: colors.slate,
    },
    topicNameCurrent: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(12.5),
      color: colors.ink,
    },
    topicNameUpcoming: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12.5),
      color: colors.faint,
    },
    topicSub: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      color: colors.amberText,
    },
  });
}

type Styles = ReturnType<typeof createStyles>;

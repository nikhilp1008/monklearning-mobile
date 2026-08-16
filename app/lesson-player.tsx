import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, { FadeIn, SlideInRight } from 'react-native-reanimated';
import Svg, { Line, Path, Rect, Text as SvgText } from 'react-native-svg';

import { RuledPaper } from '@/components/ruled-paper';
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
const CHROME_HIDE_MS = 4200;
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
  useLandscapeLock();
  const params = useLocalSearchParams<{ chapterTitle?: string }>();
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
  const [following, setFollowing] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [ccOn, setCcOn] = useState(true);
  const [indicatorVisible, setIndicatorVisible] = useState(false);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(28);

  const scrollRef = useRef<ScrollView>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const indicatorTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const armHide = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setChromeVisible((visible) => {
        if (visible && !drawerOpen) return false;
        return visible;
      });
    }, CHROME_HIDE_MS);
  };

  useEffect(() => {
    armHide();
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (indicatorTimerRef.current) clearTimeout(indicatorTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (following) scrollRef.current?.scrollToEnd({ animated: false });
    }, FOLLOW_SCROLL_MS);
    return () => clearInterval(id);
  }, [following]);

  const toggleChrome = () => {
    if (drawerOpen) return;
    setChromeVisible((visible) => {
      const next = !visible;
      if (next) armHide();
      else if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      return next;
    });
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
      indicatorTimerRef.current = setTimeout(() => setIndicatorVisible(false), 900);
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
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    armHide();
  };

  const jumpToTopic = (index: number) => {
    setCurrentSegment(index);
    setSegElapsed(0);
    setDrawerOpen(false);
    armHide();
  };

  const showJumpChip = !following;

  return (
    <Pressable style={styles.screen} onPress={toggleChrome}>
      <StatusBar style="dark" />

      <View style={styles.boardWrap}>
        <View style={styles.board}>
          <RuledPaper step={verticalScale(27)} color="rgba(28,26,22,.055)" count={22} />
          <ScrollView
            ref={scrollRef}
            style={styles.boardScroll}
            contentContainerStyle={styles.boardContent}
            scrollEventThrottle={16}
            onScroll={onBoardScroll}
            showsVerticalScrollIndicator={false}>
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
                <BlinkBar style={styles.writingCursor} />
                <Text style={styles.writingText}>Drona is writing…</Text>
              </View>
            )}
          </ScrollView>
        </View>

        <View style={styles.boardRule} pointerEvents="none" />
        <View
          style={[
            styles.scrollIndicator,
            { top: indicatorTop, height: indicatorHeight, opacity: indicatorVisible ? 1 : 0 },
          ]}
          pointerEvents="none"
        />

        {showJumpChip && (
          <View style={styles.backnowWrap} pointerEvents="box-none">
            <Pressable style={styles.backnowChip} onPress={jumpToLive}>
              <Text style={styles.backnowArrow}>↓</Text>
              <Text style={styles.backnowText}>Back to now</Text>
            </Pressable>
          </View>
        )}

        {chromeVisible && (
          <View style={styles.dockWrap} pointerEvents="box-none">
            <Animated.View entering={FadeIn.duration(200)} style={styles.dock}>
              <Pressable style={styles.dockPlayBtn} onPress={() => setIsPlaying((p) => !p)}>
                {isPlaying ? <PauseIcon size={scale(12)} /> : <PlayIcon size={scale(12)} />}
              </Pressable>
              <View style={styles.dockDivider} />
              <Pressable style={styles.dockTopicsBtn} onPress={openDrawer}>
                <HamburgerIcon size={scale(11)} color={colors.slate} />
                <Text style={styles.dockTopicsText}>Topics</Text>
              </Pressable>
              <Pressable
                style={[styles.dockCcBtn, !ccOn && styles.dockCcBtnOff]}
                onPress={() => setCcOn((c) => !c)}>
                <Text style={[styles.dockCcText, !ccOn && styles.dockCcTextOff]}>CC</Text>
              </Pressable>
            </Animated.View>
          </View>
        )}

        <View
          style={[styles.segbar, { opacity: chromeVisible ? 1 : 0.5 }]}
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

      {ccOn && (
        <View style={styles.capWrapOuter}>
          <View style={styles.capRow}>
            <View style={styles.capBadge}>
              <Text style={styles.capBadgeText}>CC</Text>
            </View>
            <View style={styles.capTextRow}>
              <Text style={styles.capText} numberOfLines={1}>
                {CAPTION_TEXT}
              </Text>
              <BlinkBar style={styles.capCursor} />
            </View>
          </View>
        </View>
      )}

      {chromeVisible && (
        <Animated.View entering={FadeIn.duration(200)} style={styles.topBar}>
          <Pressable style={styles.backBtn} onPress={() => router.back()}>
            <BackChevronIcon size={scale(15)} />
          </Pressable>
          <View style={styles.chapterChip}>
            <Text style={styles.chapterChipTitle}>{chapterTitle}</Text>
            <Text style={styles.chapterChipSub}>Physics · Class 11</Text>
          </View>
        </Animated.View>
      )}

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
    </Pressable>
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
  const markColor = status === 'done' ? colors.success : status === 'current' ? colors.marigold : '#C0BBAD';
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

function BlinkBar({ style }: { style: object }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setVisible((v) => !v), 500);
    return () => clearInterval(id);
  }, []);
  return <View style={[style, { opacity: visible ? 1 : 0 }]} />;
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
    boardWrap: {
      flex: 1,
      minHeight: 0,
      marginTop: verticalScale(10),
      marginHorizontal: scale(10),
      position: 'relative',
    },
    board: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#fff',
      borderWidth: scale(1.5),
      borderColor: colors.ink,
      borderRadius: scale(18),
      overflow: 'hidden',
    },
    boardScroll: {
      flex: 1,
    },
    boardContent: {
      paddingTop: verticalScale(46),
      paddingRight: scale(26),
      paddingBottom: verticalScale(56),
      paddingLeft: scale(58),
    },
    boardRule: {
      position: 'absolute',
      top: verticalScale(14),
      bottom: verticalScale(14),
      left: scale(40),
      width: scale(1.4),
      backgroundColor: 'rgba(221,68,51,.35)',
    },
    scrollIndicator: {
      position: 'absolute',
      right: scale(5),
      width: scale(3),
      borderRadius: scale(99),
      backgroundColor: 'rgba(28,26,22,.3)',
    },
    boardHeading: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(17),
      color: colors.red,
      marginBottom: verticalScale(11),
      transform: [{ rotate: '-0.4deg' }],
    },
    boardEquationLarge: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(17),
      color: colors.ink,
      marginBottom: verticalScale(9),
    },
    boardEquationSmall: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(15.5),
      color: colors.ink,
      marginBottom: verticalScale(10),
    },
    boardBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(21.6),
      color: colors.slate,
      marginBottom: verticalScale(10),
      maxWidth: scale(560),
    },
    boardBodyBold: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
    boardKalamNoteBase: {
      fontFamily: 'Kalam_700Bold',
    },
    diagramWrap: {
      marginBottom: verticalScale(10),
    },
    writingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      paddingBottom: verticalScale(4),
    },
    writingCursor: {
      width: scale(8),
      height: verticalScale(14),
      borderRadius: scale(2),
      backgroundColor: colors.marigold,
    },
    writingText: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(12),
      color: colors.faint,
    },
    backnowWrap: {
      position: 'absolute',
      left: '50%',
      bottom: verticalScale(64),
      width: scale(400),
      marginLeft: -scale(200),
      alignItems: 'center',
    },
    backnowChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      backgroundColor: '#221D16',
      borderRadius: scale(99),
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(16),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(6) },
      shadowOpacity: 0.3,
      shadowRadius: scale(14),
      elevation: 4,
    },
    backnowArrow: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.marigold,
    },
    backnowText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: '#EFEBDD',
    },
    dockWrap: {
      position: 'absolute',
      left: '50%',
      bottom: verticalScale(12),
      width: scale(400),
      marginLeft: -scale(200),
      alignItems: 'center',
    },
    dock: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingVertical: verticalScale(5),
      paddingHorizontal: scale(6),
      backgroundColor: 'rgba(252,250,244,.95)',
      borderWidth: 1,
      borderColor: colors.inputBorder,
      borderRadius: scale(99),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(5) },
      shadowOpacity: 0.22,
      shadowRadius: scale(12),
      elevation: 3,
    },
    dockPlayBtn: {
      width: scale(32),
      height: scale(32),
      borderRadius: scale(16),
      backgroundColor: colors.ink,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dockDivider: {
      width: scale(1),
      height: verticalScale(16),
      backgroundColor: colors.inputBorder,
    },
    dockTopicsBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
      paddingVertical: verticalScale(5),
      paddingHorizontal: scale(11),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: colors.inputBorder,
      backgroundColor: '#fff',
    },
    dockTopicsText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: colors.slate,
    },
    dockCcBtn: {
      width: scale(26),
      height: scale(26),
      borderRadius: scale(13),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FCF4E0',
      borderWidth: scale(1.4),
      borderColor: 'rgba(238,163,31,.65)',
    },
    dockCcBtnOff: {
      backgroundColor: '#fff',
      borderColor: 'rgba(28,26,22,.16)',
    },
    dockCcText: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(8.5),
      letterSpacing: scale(0.51),
      color: colors.amberText,
    },
    dockCcTextOff: {
      color: colors.faint,
    },
    segbar: {
      position: 'absolute',
      left: scale(24),
      right: scale(24),
      bottom: verticalScale(6),
      flexDirection: 'row',
      gap: scale(4),
    },
    segTrack: {
      flex: 1,
      height: verticalScale(2.5),
      borderRadius: scale(99),
      backgroundColor: 'rgba(28,26,22,.08)',
      overflow: 'hidden',
    },
    segFill: {
      height: '100%',
      borderRadius: scale(99),
    },
    capWrapOuter: {
      flexShrink: 0,
      maxHeight: verticalScale(60),
    },
    capRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      backgroundColor: '#211C15',
      borderRadius: scale(12),
      marginHorizontal: scale(10),
      marginBottom: verticalScale(10),
      marginTop: verticalScale(8),
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(16),
    },
    capBadge: {
      flexShrink: 0,
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.45)',
      borderRadius: scale(5),
      paddingVertical: verticalScale(2),
      paddingHorizontal: scale(5),
    },
    capBadgeText: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(1.08),
      color: colors.marigold,
    },
    capTextRow: {
      flex: 1,
      minWidth: 0,
      flexDirection: 'row',
      alignItems: 'center',
    },
    capText: {
      flexShrink: 1,
      fontFamily: 'AnekLatin_500Medium',
      fontSize: scale(13.5),
      color: '#EFEBDD',
    },
    capCursor: {
      width: scale(2),
      height: verticalScale(13),
      marginLeft: scale(2),
      backgroundColor: colors.marigold,
    },
    topBar: {
      position: 'absolute',
      top: verticalScale(18),
      left: scale(26),
      right: scale(26),
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
    },
    backBtn: {
      width: scale(34),
      height: scale(34),
      borderRadius: scale(17),
      borderWidth: scale(1.4),
      borderColor: colors.inputBorder,
      backgroundColor: 'rgba(252,250,244,.94)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    chapterChip: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: scale(8),
      borderWidth: 1,
      borderColor: colors.inputBorder,
      borderRadius: scale(99),
      paddingVertical: verticalScale(7),
      paddingHorizontal: scale(14),
      backgroundColor: 'rgba(252,250,244,.94)',
    },
    chapterChipTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: colors.ink,
    },
    chapterChipSub: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
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

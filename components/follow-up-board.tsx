import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

import { MathLine } from '@/components/math-line';
import { NightSky } from '@/components/night-sky';
import { READ_LINE, READ_SIZE } from '@/constants/reading';
import { SKY_THEMES } from '@/constants/teachers';
import type { FollowUpStep } from '@/lib/doubt-followup';
import type { TeacherId } from '@/lib/preferences';
import { boardRowCost, boardRows, textCost, type BoardRow } from '@/lib/solution-rows';
import { parseSolutionStep } from '@/lib/solution-steps';
import { countChars } from '@/lib/word-reveal';

/**
 * THE FOLLOW-UP BOARD: a dark board in the teacher's own sky, written on in
 * cream (Nikhil picked this look, P3 with D1 and F3, 2 Nov 2026).
 *
 * It is a board, not a chat reply. The voice explains; the board keeps the
 * notes, the way a teacher's board does. So the heading says what it is and
 * never who is talking, since the bar under it already says that.
 *
 * THE WHOLE ANSWER ARRIVES BEFORE ANY OF IT IS WRITTEN, which is what makes the
 * rest possible:
 * - The board opens at the answer's size. Three lines used to sit in a panel
 *   more than half empty, and it never gets taller than the old fixed height.
 * - Every line has its space kept from the start and is written into that space,
 *   so a tall fraction no longer pushes the lines below it down.
 *
 * FORMULAS CARRY THE TEACHER'S COLOUR, which is the highlight: no box behind the
 * maths, whose backgrounds came out as a stack of blocks on a long answer.
 *
 * Measured from screenshots, the hardest item on this board reads at 4.7:1 for
 * Drona and 4.8:1 for Vedha, at the glow at its foot. Marigold numbers fell to
 * 3.5:1 there, which is why the numbers take the paler colours below.
 */

/** The most of the screen the board may take; a longer answer scrolls inside. */
const BOARD_SHARE = 0.46;
/** The shortest it gets, so one line is still a board and not a toast. */
const MIN_HEIGHT = 190;
/** Where the board's sides sit, measured from the screen's edge: the two hosts
 *  pad the bar's row differently, and a fixed bleed put it in two places. */
const BOARD_EDGE = 14;
const HEAD_H = 56;
const PAD_X = 22;
const NUM_COL = 24;
const SIZE = READ_SIZE;
const LINE = READ_LINE;

/** Drag distance or flick speed on the heading that puts the board away. */
const CLOSE_DISTANCE = 80;
const CLOSE_VELOCITY = 700;

const CREAM = '#FBF9F2';
const BODY = 'rgba(251,249,242,.82)';
const QUIET = 'rgba(251,249,242,.6)';
const HAIR = 'rgba(251,249,242,.16)';

const TONES: Record<TeacherId, { formula: string; accent: string; base: string; fade: string }> = {
  drona: { formula: '#FFC88A', accent: '#FFB85C', base: '#2C2317', fade: '44,36,26' },
  vedha: { formula: '#FBDDA0', accent: '#FBDDA0', base: '#2C2417', fade: '44,38,24' },
};

/** Comes on the board once: words rise into place, equations are drawn across. */
function Reveal({ show, draw, ms, children }: { show: boolean; draw?: boolean; ms: number; children: ReactNode }) {
  const p = useSharedValue(0);
  const [w, setW] = useState(0);
  useEffect(() => {
    p.value = show
      ? withTiming(1, { duration: ms, easing: draw ? Easing.bezier(0.45, 0, 0.3, 1) : Easing.out(Easing.quad) })
      : 0;
  }, [show, ms, draw, p]);
  const rise = useAnimatedStyle(() => ({ opacity: p.value, transform: [{ translateY: (1 - p.value) * 7 }] }));
  const across = useAnimatedStyle(() => ({ width: w * p.value, overflow: 'hidden' as const }));
  if (!draw) return <Animated.View style={rise}>{children}</Animated.View>;
  return (
    <View onLayout={(e) => setW(e.nativeEvent.layout.width)} style={styles.stretch}>
      {w > 0 ? (
        <Animated.View style={across}>
          <View style={{ width: w }}>{children}</View>
        </Animated.View>
      ) : (
        <View style={styles.hidden}>{children}</View>
      )}
    </View>
  );
}

/** The teacher underlining the line the answer lands on, as they finish. */
function Landing({ show, color }: { show: boolean; color: string }) {
  const p = useSharedValue(0);
  useEffect(() => {
    p.value = show ? withDelay(420, withTiming(1, { duration: 520, easing: Easing.bezier(0.45, 0, 0.2, 1) })) : 0;
  }, [show, p]);
  const s = useAnimatedStyle(() => ({ transform: [{ scaleX: p.value }] }));
  return <Animated.View style={[styles.landing, { backgroundColor: color }, s]} />;
}

function Formula({ raw, color, strong }: { raw: string; color: string; strong?: boolean }) {
  const st = { fontFamily: strong ? 'Onest_600SemiBold' : 'Onest_500Medium', fontSize: SIZE, lineHeight: LINE, color };
  return <MathLine text={raw} style={st} mathStyle={st} fontSize={SIZE} color={color} />;
}

function Row({
  row,
  start,
  budget,
  teacher,
  lands,
  done,
}: {
  row: BoardRow;
  start: number;
  budget: number;
  teacher: TeacherId;
  lands?: boolean;
  done: boolean;
}) {
  const [lhsW, setLhsW] = useState(0);
  const tone = TONES[teacher];
  const show = budget > start;
  if (row.kind === 'text') {
    const color = row.lead ? CREAM : BODY;
    const st = { fontFamily: row.lead ? 'Onest_500Medium' : 'Onest_400Regular', fontSize: SIZE, lineHeight: LINE, color };
    return (
      <Reveal show={show} ms={420}>
        <MathLine text={row.raw} style={st} mathStyle={st} fontSize={SIZE} color={color} />
      </Reveal>
    );
  }
  if (!row.chain) {
    return (
      <Reveal show={show} draw ms={Math.min(1100, 220 + boardRowCost(row) * 26)}>
        <View style={styles.formula}>
          <Formula raw={row.raw} color={tone.formula} strong={row.result} />
          {lands ? <Landing show={show && done} color={tone.accent} /> : null}
        </View>
      </Reveal>
    );
  }
  const { lhs, parts } = row.chain;
  let at = start;
  return (
    <View style={styles.chain}>
      {parts.map((part, i) => {
        const here = at;
        at += textCost(part) + (i === 0 ? textCost(lhs) : 0);
        const last = i === parts.length - 1;
        return (
          <Reveal key={i} show={budget > here} draw ms={Math.min(900, 200 + textCost(part) * 26)}>
            <View style={[styles.chainRow, { paddingLeft: i === 0 ? 0 : lhsW }]}>
              {i === 0 ? (
                <View onLayout={(e) => setLhsW(e.nativeEvent.layout.width)}>
                  <Formula raw={lhs} color={tone.formula} />
                </View>
              ) : null}
              <View style={styles.chainPart}>
                <Formula raw={part} color={tone.formula} strong={last} />
                {last && lands ? <Landing show={budget > here && done} color={tone.accent} /> : null}
              </View>
            </View>
          </Reveal>
        );
      })}
    </View>
  );
}

/** Where the answer will be written, while the teacher is still working it out. */
const SHEEN_LINES = [
  { width: '62%', height: 15, gap: 0 },
  { width: '94%', height: 11, gap: 16 },
  { width: '86%', height: 11, gap: 11 },
  { width: '54%', height: 11, gap: 11 },
] as const;
const SHEEN_W = 140;

function Sheen() {
  const [w, setW] = useState(0);
  const sweep = useSharedValue(0);
  useEffect(() => {
    sweep.value = withRepeat(withTiming(1, { duration: 1500, easing: Easing.inOut(Easing.quad) }), -1);
  }, [sweep]);
  const s = useAnimatedStyle(() => ({ transform: [{ translateX: -SHEEN_W + sweep.value * (w + SHEEN_W * 2) }] }));
  return (
    <View
      onLayout={(e) => setW(e.nativeEvent.layout.width)}
      style={styles.sheen}
      accessibilityLabel="Writing the answer">
      {SHEEN_LINES.map((l, i) => (
        <View key={i} style={[styles.sheenLine, { width: l.width, height: l.height, marginTop: l.gap }]}>
          {w > 0 ? (
            // One sweep for every line, so the light crosses them like one pass over a page.
            <Animated.View style={[styles.sheenLight, s]}>
              <LinearGradient
                colors={['rgba(251,249,242,0)', 'rgba(251,249,242,.4)', 'rgba(251,249,242,0)']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={StyleSheet.absoluteFill}
              />
            </Animated.View>
          ) : null}
        </View>
      ))}
    </View>
  );
}

export type BoardTurn = { id: number; steps: FollowUpStep[] };

export function FollowUpBoard({
  teacher,
  thread,
  written,
  pending,
  open,
  gutter,
  onClose,
}: {
  teacher: TeacherId;
  /** Every answer that has reached the board this visit, oldest first. */
  thread: BoardTurn[];
  /** How many letters of the newest answer are written. Older ones are whole;
   *  0 means the teacher has not started, and the board shimmers. */
  written: { id: number; words: number } | null;
  /** The question being worked out while the board is already up. */
  pending: number | null;
  open: boolean;
  /** The side padding of the bar's container. */
  gutter: number;
  onClose: () => void;
}) {
  const { width: windowW, height: windowH } = useWindowDimensions();
  const boardW = windowW - BOARD_EDGE * 2;
  const maxH = Math.round(windowH * BOARD_SHARE);
  const tone = TONES[teacher];

  const turns = useMemo(
    () =>
      thread.map((t) => {
        const steps = t.steps.map((s) => boardRows(s.text)).filter((rows) => rows.length);
        return {
          id: t.id,
          steps,
          total: countChars(t.steps.map((s) => parseSolutionStep(s.text))),
          cost: steps.reduce((a, rows) => a + rows.reduce((b, r) => b + boardRowCost(r), 0), 0),
        };
      }),
    [thread]
  );

  // Set by the measuring copy below. Only ever grows on a visit: the panel
  // changing shape under the student each time they asked was the old complaint.
  const [measured, setMeasured] = useState(0);
  const target = Math.min(maxH, Math.max(MIN_HEIGHT, HEAD_H + measured + 8));
  const height = useSharedValue(target);
  const tallest = useRef(0);
  useEffect(() => {
    if (!thread.length) tallest.current = 0;
    tallest.current = Math.max(tallest.current, target);
    height.value = withTiming(tallest.current, { duration: 320, easing: Easing.bezier(0.2, 0.8, 0.2, 1) });
  }, [target, thread.length, height]);

  const p = useSharedValue(0);
  const drag = useSharedValue(0);
  const [mounted, setMounted] = useState(false);
  // Started once the board has drawn a first frame, so no frame of the move is
  // lost to mounting it.
  const laidOut = useRef(false);
  const rise = () => {
    p.value = withTiming(1, { duration: 620, easing: Easing.bezier(0.2, 0.85, 0.25, 1) });
  };
  useEffect(() => {
    if (open) {
      setMounted(true);
      drag.value = 0;
      if (laidOut.current) rise();
      return;
    }
    laidOut.current = false;
    p.value = withTiming(0, { duration: 280, easing: Easing.bezier(0.4, 0, 0.7, 0.2) }, (done) => {
      if (done) runOnJS(setMounted)(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, p, drag]);

  const boardStyle = useAnimatedStyle(() => ({
    height: height.value,
    opacity: Math.min(1, p.value * 4),
    transform: [{ translateY: (1 - p.value) * 44 + drag.value }, { scale: 0.96 + 0.04 * p.value }],
  }));

  /** Pull the heading down to put the board away. A short pull springs back. */
  const pull = Gesture.Pan()
    .onUpdate((e) => {
      drag.value = Math.max(0, e.translationY);
    })
    .onEnd((e) => {
      if (e.translationY > CLOSE_DISTANCE || e.velocityY > CLOSE_VELOCITY) {
        runOnJS(onClose)();
        return;
      }
      drag.value = withSpring(0, { damping: 22, stiffness: 260 });
    });

  /** What has been written of each turn. Never goes back, or a line would
   *  blink out when more of the answer streamed in behind it. */
  const reached = useRef<Record<number, number>>({});
  const latest = turns[turns.length - 1];
  const writing = !!latest && !!written && written.id === latest.id && written.words < latest.total;
  const budgetOf = (t: (typeof turns)[number]) => {
    const fraction = written && written.id === t.id && t.total > 0 ? Math.min(1, written.words / t.total) : 1;
    const next = Math.max(reached.current[t.id] ?? 0, fraction * t.cost);
    reached.current[t.id] = next;
    return next;
  };

  /**
   * THE SCROLL BELONGS TO THE STUDENT once they touch it. Until then the board
   * brings a new answer's top into view once, then keeps its newest line there.
   */
  const scroll = useRef<ScrollView>(null);
  const scrolledTo = useRef(0);
  const following = useRef(true);
  const [viewport, setViewport] = useState(0);
  const seen = useRef(0);
  const turnY = useRef<Record<number, number>>({});
  const bodyY = useRef<Record<number, number>>({});
  const stepY = useRef<Record<string, number>>({});
  const rowBox = useRef<Record<string, { y: number; h: number }>>({});
  const goTo = (y: number) => scroll.current?.scrollTo({ y: Math.max(0, y), animated: true });

  let currentKey = '';
  if (latest) {
    const budget = budgetOf(latest);
    let at = 0;
    latest.steps.forEach((rows, si) =>
      rows.forEach((row, ri) => {
        if (budget > at) currentKey = `${latest.id}.${si}.${ri}`;
        at += boardRowCost(row);
      })
    );
  }
  useEffect(() => {
    if (!currentKey || !following.current || !viewport) return;
    const [t, s] = currentKey.split('.');
    const box = rowBox.current[currentKey];
    if (!box) return;
    const top = (turnY.current[Number(t)] ?? 0) + (bodyY.current[Number(t)] ?? 0) + (stepY.current[`${t}.${s}`] ?? 0);
    const want = top + box.y + box.h + 24 - viewport;
    if (want > scrolledTo.current + 1) goTo(want);
  }, [currentKey, viewport]);

  const arrive = (id: number, y: number, isFirst: boolean) => {
    turnY.current[id] = y;
    if (id <= seen.current) return;
    seen.current = id;
    following.current = true;
    if (!isFirst) goTo(y - 8);
  };

  if (!mounted) return null;

  const showPending = pending !== null && !thread.some((t) => t.id === pending);

  return (
    <View style={[styles.place, { marginHorizontal: -Math.max(0, gutter - BOARD_EDGE) }]}>
      <Animated.View
        onLayout={() => {
          if (laidOut.current) return;
          laidOut.current = true;
          requestAnimationFrame(() => requestAnimationFrame(rise));
        }}
        style={[styles.board, { width: boardW, backgroundColor: tone.base }, boardStyle]}>
        {/* Taller than the board, so the bright foot of the sky stays low and
            only warms the last lines instead of sitting behind the writing. */}
        <NightSky
          width={boardW}
          height={Math.round(maxH * 1.85)}
          lift={0.12}
          theme={SKY_THEMES[teacher]}
          style={styles.sky}
        />

        {/* The answer laid out whole, in no ink, to size the board before it opens. */}
        <View
          style={[styles.measure, { width: boardW - PAD_X * 2 }]}
          pointerEvents="none"
          onLayout={(e) => setMeasured(Math.ceil(e.nativeEvent.layout.height))}>
          {turns.map((t, ti) => (
            <View key={t.id} style={ti > 0 ? styles.turnAfter : null}>
              {ti > 0 ? <Text style={styles.turnLabel}>Answer</Text> : null}
              <View style={styles.steps}>
                {t.steps.map((rows, si) => (
                  <View key={si} style={styles.step}>
                    {rows.map((row, ri) => (
                      <Row
                        key={ri}
                        row={row}
                        start={0}
                        budget={1}
                        teacher={teacher}
                        lands={si === t.steps.length - 1 && ri === rows.length - 1 && row.kind === 'math'}
                        done={false}
                      />
                    ))}
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        <GestureDetector gesture={pull}>
          <View style={styles.head}>
            <Text style={styles.title}>Follow-up board</Text>
            <Pressable
              onPress={onClose}
              hitSlop={12}
              accessibilityRole="button"
              accessibilityLabel="Close the follow-up board"
              style={({ pressed }) => [styles.close, pressed && styles.closePressed]}>
              <Svg viewBox="0 0 16 16" width={13} height={13} fill="none">
                <Path d="M4 4l8 8M12 4l-8 8" stroke={CREAM} strokeWidth={1.9} strokeLinecap="round" />
              </Svg>
            </Pressable>
          </View>
        </GestureDetector>

        <View style={styles.bodyArea}>
          <ScrollView
            ref={scroll}
            style={styles.bodyArea}
            showsVerticalScrollIndicator={false}
            onLayout={(e) => setViewport(Math.round(e.nativeEvent.layout.height))}
            onScroll={(e) => {
              scrolledTo.current = e.nativeEvent.contentOffset.y;
            }}
            scrollEventThrottle={32}
            onScrollBeginDrag={() => {
              following.current = false;
            }}
            contentContainerStyle={styles.content}>
            {turns.map((t, ti) => {
              const budget = budgetOf(t);
              const finished = budget >= t.cost && !(writing && t.id === latest?.id);
              const waiting = written && written.id === t.id && written.words === 0;
              let at = 0;
              return (
                <View
                  key={t.id}
                  style={[
                    ti > 0 ? styles.turnAfter : null,
                    // Tall enough for its heading to reach the top of the board,
                    // however short the answer is.
                    ti === turns.length - 1 && turns.length > 1 && viewport ? { minHeight: viewport - 20 } : null,
                  ]}
                  onLayout={(e) => arrive(t.id, e.nativeEvent.layout.y, ti === 0)}>
                  {ti > 0 ? <Text style={styles.turnLabel}>Answer {ti + 1}</Text> : null}
                  {waiting ? (
                    <Sheen />
                  ) : (
                    <View
                      style={styles.steps}
                      onLayout={(e) => {
                        bodyY.current[t.id] = e.nativeEvent.layout.y;
                      }}>
                      {t.steps.map((rows, si) => {
                        const stepStart = at;
                        return (
                          <View
                            key={si}
                            style={styles.step}
                            onLayout={(e) => {
                              stepY.current[`${t.id}.${si}`] = e.nativeEvent.layout.y;
                            }}>
                            {rows.map((row, ri) => {
                              const start = at;
                              at += boardRowCost(row);
                              const lands = si === t.steps.length - 1 && ri === rows.length - 1 && row.kind === 'math';
                              return (
                                <View
                                  key={ri}
                                  onLayout={(e) => {
                                    const { y, height: h } = e.nativeEvent.layout;
                                    rowBox.current[`${t.id}.${si}.${ri}`] = { y, h };
                                  }}>
                                  {/* Level with its line, whatever height the line is. */}
                                  {ri === 0 ? (
                                    <View
                                      style={[
                                        styles.num,
                                        { bottom: lands ? 7 : 0 },
                                        row.kind === 'math' && !row.chain ? styles.numCentred : null,
                                      ]}>
                                      <Text style={[styles.numText, { color: tone.accent, opacity: budget > stepStart ? 1 : 0 }]}>
                                        {si + 1}
                                      </Text>
                                    </View>
                                  ) : null}
                                  <Row row={row} start={start} budget={budget} teacher={teacher} lands={lands} done={finished} />
                                </View>
                              );
                            })}
                          </View>
                        );
                      })}
                    </View>
                  )}
                </View>
              );
            })}
            {showPending ? (
              <View
                style={[turns.length ? styles.turnAfter : null, viewport ? { minHeight: viewport - 20 } : null]}
                onLayout={(e) => arrive(pending!, e.nativeEvent.layout.y, turns.length === 0)}>
                <Text style={styles.turnLabel}>Answer {turns.length + 1}</Text>
                <Sheen />
              </View>
            ) : null}
          </ScrollView>
          {/* Lines scrolling up dissolve under the heading instead of being sliced by it. */}
          <LinearGradient
            colors={[`rgba(${tone.fade},1)`, `rgba(${tone.fade},0)`]}
            style={styles.fade}
            pointerEvents="none"
          />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  place: { marginBottom: 16, alignItems: 'center' },
  /** Grows from its bottom edge, where it comes out of the bar. */
  board: {
    transformOrigin: 'bottom',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(28,26,22,.16)',
    overflow: 'hidden',
    boxShadow: [
      { offsetX: 0, offsetY: 20, blurRadius: 44, spreadDistance: -18, color: 'rgba(28,26,22,0.34)' },
      { offsetX: 0, offsetY: 2, blurRadius: 8, spreadDistance: -2, color: 'rgba(28,26,22,0.08)' },
    ],
  },
  sky: { position: 'absolute', left: 0, top: 0 },
  measure: { position: 'absolute', left: 0, top: 0, opacity: 0, paddingTop: 6, paddingBottom: 24 },
  head: { height: HEAD_H, flexDirection: 'row', alignItems: 'center', paddingLeft: PAD_X, paddingRight: 16, gap: 10 },
  title: { flex: 1, fontFamily: 'Onest_600SemiBold', fontSize: 16, letterSpacing: -0.1, color: CREAM },
  close: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(251,249,242,.32)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closePressed: { backgroundColor: 'rgba(251,249,242,.12)' },
  bodyArea: { flex: 1 },
  content: { paddingHorizontal: PAD_X, paddingTop: 6, paddingBottom: 24 },
  fade: { position: 'absolute', top: 0, left: 0, right: 0, height: 16 },
  /** Each later answer starts below a hairline, with room above it. */
  turnAfter: { marginTop: 26, paddingTop: 22, borderTopWidth: 1, borderTopColor: HAIR },
  turnLabel: { marginBottom: 14, fontFamily: 'Onest_600SemiBold', fontSize: 13, color: QUIET },
  steps: { paddingLeft: NUM_COL, gap: 22 },
  step: { gap: 8 },
  num: { position: 'absolute', left: -NUM_COL, top: 0 },
  numCentred: { justifyContent: 'center' },
  numText: { fontFamily: 'Onest_600SemiBold', fontSize: 13, lineHeight: LINE, fontVariant: ['tabular-nums'] },
  stretch: { alignSelf: 'stretch' },
  hidden: { opacity: 0 },
  formula: { alignSelf: 'flex-start', maxWidth: '100%', paddingVertical: 2 },
  chain: { gap: 2, paddingVertical: 2 },
  chainRow: { flexDirection: 'row', alignItems: 'center' },
  chainPart: { marginLeft: 5, flexShrink: 1 },
  landing: { alignSelf: 'stretch', height: 2, borderRadius: 1, marginTop: 5, transformOrigin: 'left' },
  sheen: { paddingVertical: 3 },
  sheenLine: { borderRadius: 99, overflow: 'hidden', backgroundColor: 'rgba(251,249,242,.14)' },
  sheenLight: { position: 'absolute', top: 0, bottom: 0, left: 0, width: SHEEN_W },
});

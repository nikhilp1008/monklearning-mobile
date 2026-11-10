import { Fragment, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Dimensions, Keyboard, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Svg, { Circle, Defs, Ellipse, Path, RadialGradient, Stop } from 'react-native-svg';

import { KeyboardSpacer } from '@/components/keyboard-spacer';
import { NightSky } from '@/components/night-sky';
import { PressableScale } from '@/components/pressable-scale';
import { SettingsHeader } from '@/components/settings-page';
import { SlidingToggle } from '@/components/sliding-toggle';
import { colors } from '@/constants/brand';
import { CONTROL_LABEL_MAX_SCALE } from '@/constants/font-scale';
import { useScale } from '@/constants/scale';
import { SKY_THEMES, START_ARROW } from '@/constants/teachers';
import {
  SCOPE_EXAMS,
  SCOPE_SUBJECTS,
  scopeUnit,
  type ScopeExam,
  type SubjectKey,
} from '@/lib/exam-scope';
import { askScope, type ScopeAnswerRow } from '@/lib/exam-scope-search';
import { hapticSwitched } from '@/lib/haptics';
import { getTeacherPreference, type TeacherId } from '@/lib/preferences';
import { getProfile } from '@/lib/profile';
import { shadow } from '@/lib/shadow';

/**
 * Exam scope: "Is it in your exam?".
 *
 * One page. The official units are always on it, under the search, and a unit
 * drops down in place. A search answers inside its own key and marks the units
 * it found; it never takes the list away.
 *
 * Answers say one thing: in this exam, or not. Tapping an answer that is in
 * opens that unit below. A No has nothing to open, so it has no arrow.
 *
 * NOTHING PUSHES THE LIST WITH AN ANIMATION. On an overloaded Android phone an
 * animated grow fell to about 10-20 frames a second, because each frame lays out
 * twenty rows again. So the page changes in one step and only the answer fades,
 * which costs almost nothing. The sky's slow glow is a moving picture for the
 * same reason.
 */

const EXAM_OPTIONS = ['JEE Main', 'NEET UG'] as const;
/** Long enough that a word being typed does not flip an answer, short enough to feel instant. */
const ANSWER_PAUSE_MS = 250;
const GREEN = '#157A45';
/** A touch above the keyboard, so an answer never sits flush against it. */
const KEYBOARD_GAP = 12;

type OpenUnit = number | 'older' | null;

export default function ExamScopeScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [exam, setExam] = useState<ScopeExam>('jee');
  const [teacher, setTeacher] = useState<TeacherId>('drona');
  const [subject, setSubject] = useState<SubjectKey>('physics');
  const [query, setQuery] = useState('');
  const [settled, setSettled] = useState('');
  const [open, setOpen] = useState<OpenUnit>(null);
  const [cardSize, setCardSize] = useState({ width: 0, height: 0 });

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });
  const cardRef = useRef<View>(null);
  const listY = useRef(0);
  const unitY = useRef(new Map<number, number>());
  const tabsHeight = useRef(0);
  const pause = useRef<ReturnType<typeof setTimeout> | null>(null);
  const jump = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Opens on the student's own exam and in their teacher's light.
  useEffect(() => {
    let cancelled = false;
    getProfile().then((p) => {
      if (!cancelled && p.exam === 'neet') {
        setExam('neet');
        setSubject('biology');
      }
    });
    getTeacherPreference().then((t) => {
      if (!cancelled) setTeacher(t);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(
    () => () => {
      if (pause.current) clearTimeout(pause.current);
      if (jump.current) clearTimeout(jump.current);
    },
    []
  );

  const answer = useMemo(() => askScope(exam, settled), [exam, settled]);
  const found = useMemo(() => (answer?.kind === 'rows' ? answer.all : []), [answer]);
  // Only what is in the exam gets marked in the list: a ring on a unit a topic is
  // missing from reads as though the topic were there.
  const marked = useMemo(
    () => found.filter((f) => f.yes && f.subject === subject && f.n).map((f) => f.n as number),
    [found, subject]
  );
  const subjectsWithMatch = useMemo(
    () => found.filter((f) => f.yes).map((f) => f.subject as SubjectKey),
    [found]
  );

  const typed = (value: string) => {
    setQuery(value);
    if (pause.current) clearTimeout(pause.current);
    pause.current = setTimeout(() => {
      const next = askScope(exam, value);
      const hits = next?.kind === 'rows' ? next.all.filter((f) => f.yes).map((f) => f.subject) : [];
      if (hits.length && !hits.includes(subject)) setSubject(hits[0] as SubjectKey);
      setSettled(value);
      setOpen(null);
    }, ANSWER_PAUSE_MS);
  };

  const clear = () => {
    if (pause.current) clearTimeout(pause.current);
    setQuery('');
    setSettled('');
  };

  /**
   * THE ANSWER STAYS ABOVE THE KEYBOARD. On a roomy phone this does nothing. On a
   * small one, or with large text, the page rolls up just far enough to show the
   * whole answer; the heading and the list stay where they are on the page.
   */
  useEffect(() => {
    if (!answer || !Keyboard.isVisible()) return;
    const frame = requestAnimationFrame(() => {
      cardRef.current?.measureInWindow((_x, y, _w, height) => {
        const keyboardTop = Keyboard.metrics()?.screenY ?? Dimensions.get('window').height;
        const overlap = y + height + KEYBOARD_GAP - keyboardTop;
        if (overlap > 0)
          scrollRef.current?.scrollTo({
            y: scrollY.value + overlap,
            animated: true,
          });
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [answer, scrollRef, scrollY]);

  const openFromAnswer = (row: ScopeAnswerRow) => {
    if (!row.yes || !row.subject) return;
    Keyboard.dismiss();
    setSubject(row.subject);
    if (row.wholeSubject) return;
    setOpen(row.n ?? null);
    if (jump.current) clearTimeout(jump.current);
    // Once the drop-down has laid out, so the distance is the real one.
    jump.current = setTimeout(() => {
      const y = unitY.current.get(row.n as number);
      if (y !== undefined) {
        scrollRef.current?.scrollTo({
          y: listY.current + y - tabsHeight.current,
          animated: true,
        });
      }
    }, 120);
  };

  const onUnitLayout = useCallback((n: number, y: number) => {
    unitY.current.set(n, y);
  }, []);
  const toggleOpen = useCallback((unit: OpenUnit) => {
    setOpen((current) => (current === unit ? null : unit));
  }, []);

  const examInfo = SCOPE_EXAMS[exam];
  const tabs = examInfo.subjects;

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <SettingsHeader title="Exam scope" scrollY={scrollY} />
        <Animated.ScrollView
          ref={scrollRef}
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          onScroll={onScroll}
          scrollEventThrottle={16}
          stickyHeaderIndices={[2]}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}>
          <View
            ref={cardRef}
            collapsable={false}
            style={styles.card}
            onLayout={(e) => {
              const { width, height } = e.nativeEvent.layout;
              setCardSize((size) =>
                size.width === width && size.height === height ? size : { width, height }
              );
            }}>
            <CardSky width={cardSize.width} height={cardSize.height} teacher={teacher} />

            {/* One line (Nikhil, 9 Nov 2026): the instruction that sat under
                it is now the search box's placeholder, where it is acted on. */}
            <Text style={styles.heading}>Is it in your exam?</Text>

            <View style={styles.toggleWrap}>
              <SlidingToggle
                options={EXAM_OPTIONS}
                value={exam === 'jee' ? 'JEE Main' : 'NEET UG'}
                onChange={(value) => {
                  const next = value === 'NEET UG' ? 'neet' : 'jee';
                  if (next === exam) return;
                  hapticSwitched();
                  setExam(next);
                  setOpen(null);
                  if (!SCOPE_EXAMS[next].subjects.includes(subject))
                    setSubject(SCOPE_EXAMS[next].subjects[0]);
                }}
                trackStyle={styles.toggleTrack}
                thumbStyle={styles.toggleThumb}
                pillStyle={styles.togglePill}
                textStyle={styles.toggleText}
                textActiveStyle={styles.toggleTextActive}
              />
            </View>

            <View style={styles.key}>
              <SearchField
                value={query}
                onChange={typed}
                onClear={clear}
                accent={START_ARROW[teacher]}
                styles={styles}
              />
              {answer && (
                <Animated.View entering={FadeIn.duration(180)} style={styles.answer}>
                  {answer.kind === 'rows' &&
                    answer.rows.map((row, index) => (
                      <AnswerRow
                        key={`${row.topic}-${row.subject}-${index}`}
                        row={row}
                        examLabel={examInfo.label}
                        styles={styles}
                        scale={scale}
                        onPress={() => openFromAnswer(row)}
                      />
                    ))}
                  {answer.kind === 'rows' && answer.more > 0 && (
                    <Text style={styles.answerMore}>
                      {answer.more} more marked in the list below
                    </Text>
                  )}
                  {answer.kind === 'guess' && (
                    <PressableScale style={styles.answerGuess} onPress={() => typed(answer.guess)}>
                      <Text style={styles.answerTopic}>Did you mean {answer.guess}?</Text>
                    </PressableScale>
                  )}
                  {answer.kind === 'none' && (
                    <Text style={styles.answerNone}>
                      Not found in the {examInfo.label} syllabus
                    </Text>
                  )}
                </Animated.View>
              )}
            </View>
          </View>

          <Text style={styles.lede}>
            {examInfo.total} units in the {examInfo.label} {examInfo.year} syllabus
          </Text>

          <SubjectTabs
            tabs={tabs}
            subject={subject}
            withMatch={subjectsWithMatch}
            onPick={(key) => {
              setSubject(key);
              setOpen(null);
            }}
            onHeight={(height) => {
              tabsHeight.current = height;
            }}
            styles={styles}
            scale={scale}
          />

          <View
            style={styles.list}
            onLayout={(e) => {
              listY.current = e.nativeEvent.layout.y;
            }}>
            <UnitList
              exam={exam}
              subject={subject}
              open={open}
              marked={marked}
              settled={settled}
              onToggle={toggleOpen}
              onUnitLayout={onUnitLayout}
              styles={styles}
              scale={scale}
            />
            <Text style={styles.source}>{examInfo.source}</Text>
          </View>

          <KeyboardSpacer ios />
        </Animated.ScrollView>
      </SafeAreaView>
    </View>
  );
}

/**
 * THE SKY BEHIND THE SEARCH. The sky itself is the same still shader as Home's,
 * drawn once for each size the card takes. Over it, one soft glow drifts and two
 * stars breathe: a transform and an opacity on the UI thread, so no frame of it
 * asks the page to lay anything out.
 */
const CardSky = memo(function CardSky({
  width,
  height,
  teacher,
}: {
  width: number;
  height: number;
  teacher: TeacherId;
}) {
  const reduced = useReducedMotion();
  const drift = useSharedValue(0);
  const twinkle = useSharedValue(0);
  useEffect(() => {
    if (reduced) return;
    drift.value = withRepeat(
      withTiming(1, { duration: 9000, easing: Easing.inOut(Easing.sin) }),
      -1,
      true
    );
    twinkle.value = withDelay(
      600,
      withRepeat(withTiming(1, { duration: 2600, easing: Easing.inOut(Easing.sin) }), -1, true)
    );
  }, [reduced, drift, twinkle]);
  const glowStyle = useAnimatedStyle(() => ({
    opacity: 0.72 + drift.value * 0.28,
    transform: [
      { translateX: (drift.value - 0.5) * width * 0.14 },
      { scale: 1 + drift.value * 0.12 },
    ],
  }));
  const starA = useAnimatedStyle(() => ({
    opacity: 0.25 + twinkle.value * 0.7,
  }));
  const starB = useAnimatedStyle(() => ({
    opacity: 0.95 - twinkle.value * 0.7,
  }));

  const theme = SKY_THEMES[teacher];
  const glowHeight = Math.min(height * 0.7, width * 0.9);
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <NightSky width={width} height={height} theme={theme} />
      {width > 0 && (
        <Animated.View
          style={[
            {
              position: 'absolute',
              left: -width * 0.2,
              bottom: -glowHeight * 0.45,
              width: width * 1.4,
              height: glowHeight,
            },
            glowStyle,
          ]}>
          <Svg width="100%" height="100%">
            <Defs>
              <RadialGradient id="scope-glow" cx="50%" cy="50%" rx="50%" ry="50%">
                <Stop offset="0%" stopColor={theme.gold} stopOpacity={0.55} />
                <Stop offset="100%" stopColor={theme.mari} stopOpacity={0} />
              </RadialGradient>
            </Defs>
            {/* An ellipse the size of its box, so the glow fades out before any edge. A
                circle here is taller than the box and gets cut off in a hard line. */}
            <Ellipse cx="50%" cy="50%" rx="50%" ry="50%" fill="url(#scope-glow)" />
          </Svg>
        </Animated.View>
      )}
      <Animated.View style={[localStyles.star, { left: width * 0.72, top: 24 }, starA]} />
      <Animated.View style={[localStyles.star, { left: width * 0.88, top: 56 }, starB]} />
    </View>
  );
});

function SearchField({
  value,
  onChange,
  onClear,
  accent,
  styles,
}: {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  accent: string;
  styles: ReturnType<typeof createStyles>;
}) {
  return (
    <View style={styles.field}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Type any topic or chapter"
        placeholderTextColor={colors.faint}
        style={styles.input}
        returnKeyType="search"
        autoCorrect={false}
        accessibilityLabel="Is it in your exam? Type any topic or chapter."
      />
      {value ? (
        <PressableScale hitSlop={10} onPress={onClear} accessibilityLabel="Clear search">
          <Svg viewBox="0 0 24 24" width={15} height={15} fill="none">
            <Path
              d="M6 6l12 12M18 6 6 18"
              stroke={colors.faint}
              strokeWidth={2.4}
              strokeLinecap="round"
            />
          </Svg>
        </PressableScale>
      ) : (
        <Svg viewBox="0 0 24 24" width={20} height={20} fill="none">
          <Circle cx={11} cy={11} r={7} stroke={accent} strokeWidth={2.2} />
          <Path d="m20 20-3.8-3.8" stroke={accent} strokeWidth={2.2} strokeLinecap="round" />
        </Svg>
      )}
    </View>
  );
}

function AnswerRow({
  row,
  examLabel,
  styles,
  scale,
  onPress,
}: {
  row: ScopeAnswerRow;
  examLabel: string;
  styles: ReturnType<typeof createStyles>;
  scale: (size: number) => number;
  onPress: () => void;
}) {
  const subjectName = row.subject ? SCOPE_SUBJECTS[row.subject].name : '';
  const line = row.yes
    ? `In ${examLabel}${row.wholeSubject ? '' : ` · ${subjectName}`}`
    : `Not in ${examLabel}`;
  const detail =
    row.yes && row.except?.length ? `Except ${row.except.join(', ')}` : row.yes ? row.note : '';

  const content = (
    <>
      <Svg
        viewBox="0 0 24 24"
        width={scale(17)}
        height={scale(17)}
        fill="none"
        style={styles.answerIcon}>
        {row.yes ? (
          <Path
            d="m5 12.5 4.5 4.5L19 7.5"
            stroke={GREEN}
            strokeWidth={2.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <Path
            d="M6 6l12 12M18 6 6 18"
            stroke={colors.amberText}
            strokeWidth={3}
            strokeLinecap="round"
          />
        )}
      </Svg>
      <View style={styles.answerText}>
        <Text style={styles.answerTopic}>{row.topic}</Text>
        <Text style={[styles.answerLine, { color: row.yes ? GREEN : colors.amberText }]}>
          {line}
        </Text>
        {!!detail && <Text style={[styles.answerLine, { color: colors.amberText }]}>{detail}</Text>}
      </View>
      {row.yes && <Chevron scale={scale} direction="right" />}
    </>
  );

  return row.yes ? (
    <PressableScale style={styles.answerRow} onPress={onPress}>
      {content}
    </PressableScale>
  ) : (
    <View style={styles.answerRow}>{content}</View>
  );
}

function SubjectTabs({
  tabs,
  subject,
  withMatch,
  onPick,
  onHeight,
  styles,
  scale,
}: {
  tabs: SubjectKey[];
  subject: SubjectKey;
  withMatch: SubjectKey[];
  onPick: (key: SubjectKey) => void;
  onHeight: (height: number) => void;
  styles: ReturnType<typeof createStyles>;
  scale: (size: number) => number;
}) {
  const [width, setWidth] = useState(0);
  const x = useSharedValue(0);
  const index = Math.max(0, tabs.indexOf(subject));
  useEffect(() => {
    x.value = withTiming((index * width) / tabs.length, { duration: 240 });
  }, [index, width, tabs.length, x]);
  const lineStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }],
  }));

  return (
    <View style={styles.tabsWrap} onLayout={(e) => onHeight(e.nativeEvent.layout.height)}>
      <View style={styles.tabs} onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
        {tabs.map((key) => {
          const on = key === subject;
          return (
            <PressableScale
              key={key}
              style={styles.tab}
              onPress={() => onPick(key)}
              accessibilityState={{ selected: on }}>
              <Text
                maxFontSizeMultiplier={CONTROL_LABEL_MAX_SCALE}
                style={[styles.tabText, on && styles.tabTextOn]}>
                {SCOPE_SUBJECTS[key].name}
              </Text>
              {withMatch.includes(key) && <View style={styles.tabDot} />}
            </PressableScale>
          );
        })}
        <Animated.View
          style={[styles.tabLine, { width: width / tabs.length || scale(1) }, lineStyle]}
        />
      </View>
    </View>
  );
}

/** Kept apart and memoised so a keystroke in the search never lays out these rows. */
const UnitList = memo(function UnitList({
  exam,
  subject,
  open,
  marked,
  settled,
  onToggle,
  onUnitLayout,
  styles,
  scale,
}: {
  exam: ScopeExam;
  subject: SubjectKey;
  open: OpenUnit;
  marked: number[];
  settled: string;
  onToggle: (unit: OpenUnit) => void;
  onUnitLayout: (n: number, y: number) => void;
  styles: ReturnType<typeof createStyles>;
  scale: (size: number) => number;
}) {
  const info = SCOPE_SUBJECTS[subject];
  const searched = settled.trim().toLowerCase();

  return (
    <>
      {info.themes.map((theme) => (
        <Fragment key={theme.name}>
          <Text style={styles.themeLabel}>{theme.name}</Text>
          {theme.units.map((n) => {
            const unit = scopeUnit(exam, subject, n);
            if (!unit) return null;
            const isOpen = open === n;
            const isMarked = marked.includes(n);
            return (
              <View
                key={n}
                style={styles.unit}
                onLayout={(e) => onUnitLayout(n, e.nativeEvent.layout.y)}>
                <PressableScale
                  style={styles.unitRow}
                  onPress={() => onToggle(n)}
                  accessibilityState={{ expanded: isOpen }}>
                  {isMarked ? (
                    <View style={styles.unitRing}>
                      <Text style={styles.unitRingText}>{n}</Text>
                    </View>
                  ) : (
                    <Text style={styles.unitNumber}>{n}</Text>
                  )}
                  <Text style={styles.unitTitle}>{unit.t}</Text>
                  <Chevron scale={scale} direction={isOpen ? 'up' : 'down'} />
                </PressableScale>
                {isOpen && (
                  <Animated.View entering={FadeIn.duration(180)} style={styles.unitBody}>
                    {unit.lines.map((line) => {
                      const isHit = !!searched && line.toLowerCase().includes(searched);
                      return (
                        <Text key={line} style={[styles.unitLine, isHit && styles.unitLineHit]}>
                          {line}
                        </Text>
                      );
                    })}
                    {!!unit.note && <Text style={styles.unitNote}>{unit.note}</Text>}
                    {unit.out.length > 0 && (
                      <>
                        <Text style={styles.unitOutLabel}>Not in the syllabus</Text>
                        {unit.out.map((item) => (
                          <Text key={item} style={styles.unitOut}>
                            {item}
                          </Text>
                        ))}
                      </>
                    )}
                    <Text style={styles.unitBook}>{unit.book}</Text>
                  </Animated.View>
                )}
              </View>
            );
          })}
        </Fragment>
      ))}

      <View style={styles.older}>
        <PressableScale
          style={styles.unitRow}
          onPress={() => onToggle('older')}
          accessibilityState={{ expanded: open === 'older' }}>
          <Text style={styles.olderTitle}>
            {info.gone.length} older {info.gone.length === 1 ? 'chapter' : 'chapters'} not in the
            syllabus
          </Text>
          <Chevron scale={scale} direction={open === 'older' ? 'up' : 'down'} />
        </PressableScale>
        {open === 'older' && (
          <Animated.Text entering={FadeIn.duration(180)} style={styles.olderBody}>
            {info.gone.join(', ')}
          </Animated.Text>
        )}
      </View>
    </>
  );
});

function Chevron({
  scale,
  direction,
}: {
  scale: (size: number) => number;
  direction: 'right' | 'down' | 'up';
}) {
  const path =
    direction === 'right'
      ? 'm9 6 6 6-6 6'
      : direction === 'down'
        ? 'm6 9 6 6 6-6'
        : 'm6 15 6-6 6 6';
  return (
    <Svg
      viewBox="0 0 24 24"
      width={scale(16)}
      height={scale(16)}
      fill="none"
      style={{ marginTop: scale(3) }}>
      <Path
        d={path}
        stroke={colors.faint}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const localStyles = StyleSheet.create({
  star: {
    position: 'absolute',
    width: 2,
    height: 2,
    borderRadius: 2,
    backgroundColor: '#FFFDF8',
  },
});

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#fff' },
    safeArea: { flex: 1 },
    scroll: { flex: 1 },
    scrollContent: { paddingBottom: verticalScale(36) },

    card: {
      marginHorizontal: scale(12),
      marginTop: verticalScale(4),
      paddingTop: verticalScale(26),
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(24),
      borderRadius: scale(28),
      overflow: 'hidden',
      backgroundColor: colors.night,
    },
    /** The page-title size, in regular, because the page title just above it
        is the bold one. At 30 it was louder than the title itself. */
    heading: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(24),
      lineHeight: scale(29),
      letterSpacing: scale(-0.6),
      color: '#FFFDF8',
    },

    toggleWrap: { marginTop: verticalScale(22) },
    toggleTrack: {
      backgroundColor: 'rgba(255,253,248,.09)',
      borderRadius: scale(16),
    },
    toggleThumb: {
      backgroundColor: 'rgba(255,253,248,.18)',
      borderRadius: scale(16),
      borderWidth: 1,
      borderColor: 'rgba(255,253,248,.22)',
    },
    togglePill: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: verticalScale(13),
      borderRadius: scale(16),
    },
    toggleText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14),
      color: colors.paleGold,
    },
    toggleTextActive: { color: '#FFFDF8' },

    key: {
      marginTop: verticalScale(12),
      borderRadius: scale(16),
      backgroundColor: '#FFFDF8',
      overflow: 'hidden',
      ...shadow({
        color: '#000',
        opacity: 0.25,
        radius: scale(14),
        y: verticalScale(8),
        elevation: 3,
      }),
    },
    field: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      minHeight: scale(56),
      paddingHorizontal: scale(16),
    },
    input: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'Onest_500Medium',
      fontSize: scale(16),
      color: colors.ink,
      paddingVertical: Platform.OS === 'android' ? 0 : undefined,
    },
    answer: {
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.08)',
      paddingHorizontal: scale(14),
      paddingTop: verticalScale(4),
      paddingBottom: verticalScale(6),
    },
    answerRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: scale(9),
      paddingVertical: verticalScale(8),
      minHeight: scale(48),
    },
    answerIcon: { marginTop: scale(2) },
    answerText: { flex: 1, minWidth: 0 },
    answerTopic: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(15),
      lineHeight: scale(20),
      color: colors.ink,
    },
    answerLine: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(13),
      lineHeight: scale(18),
      marginTop: 1,
    },
    answerMore: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.faint,
      paddingLeft: scale(26),
      paddingBottom: verticalScale(6),
    },
    answerGuess: { paddingVertical: verticalScale(12) },
    answerNone: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(14),
      lineHeight: scale(20),
      color: colors.slate,
      paddingVertical: verticalScale(10),
    },

    lede: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.slate,
      paddingHorizontal: scale(24),
      paddingTop: verticalScale(18),
    },
    tabsWrap: {
      backgroundColor: '#fff',
      paddingHorizontal: scale(24),
      paddingTop: verticalScale(4),
    },
    tabs: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: colors.hairline,
    },
    tab: {
      flex: 1,
      minHeight: scale(46),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(6),
    },
    tabText: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(15),
      color: colors.slate,
    },
    tabTextOn: { fontFamily: 'Onest_600SemiBold', color: colors.ink },
    tabDot: {
      width: scale(6),
      height: scale(6),
      borderRadius: scale(3),
      backgroundColor: colors.marigold,
    },
    tabLine: {
      position: 'absolute',
      left: 0,
      bottom: -1,
      height: 2,
      borderRadius: 2,
      backgroundColor: colors.marigold,
    },

    list: { paddingHorizontal: scale(24) },
    themeLabel: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(13),
      color: colors.faint,
      marginTop: verticalScale(20),
    },
    unit: { borderBottomWidth: 1, borderBottomColor: 'rgba(28,26,22,.08)' },
    unitRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: scale(10),
      paddingVertical: verticalScale(13),
    },
    unitNumber: {
      width: scale(24),
      fontFamily: 'Onest_500Medium',
      fontSize: scale(14),
      lineHeight: scale(22),
      color: colors.faint,
    },
    unitRing: {
      width: scale(24),
      height: scale(24),
      marginTop: -1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1.5,
      borderColor: colors.marigold,
      borderRadius: scale(12),
    },
    unitRingText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.ink,
    },
    unitTitle: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'Onest_500Medium',
      fontSize: scale(16),
      lineHeight: scale(22),
      color: colors.ink,
    },
    unitBody: { paddingLeft: scale(34), paddingBottom: verticalScale(16) },
    unitLine: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      lineHeight: scale(20),
      color: colors.slate,
      paddingVertical: verticalScale(4),
    },
    unitLineHit: { fontFamily: 'Onest_600SemiBold', color: colors.ink },
    unitNote: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19),
      color: colors.amberText,
      paddingTop: verticalScale(7),
    },
    unitOutLabel: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(13),
      color: colors.faint,
      marginTop: verticalScale(12),
    },
    unitOut: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      lineHeight: scale(20),
      color: colors.amberText,
      textDecorationLine: 'line-through',
      paddingTop: verticalScale(4),
    },
    unitBook: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.faint,
      marginTop: verticalScale(12),
    },
    older: {
      marginTop: verticalScale(20),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.08)',
    },
    olderTitle: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'Onest_500Medium',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: colors.slate,
    },
    olderBody: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      lineHeight: scale(21),
      color: colors.faint,
      paddingBottom: verticalScale(16),
    },
    source: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12),
      lineHeight: scale(18),
      color: colors.faint,
      marginTop: verticalScale(18),
    },
  });
}

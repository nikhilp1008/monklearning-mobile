import { router, useFocusEffect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Alert,
  AppState,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { QuestionDiagram } from '@/components/question-diagram';
import { QuestionStem } from '@/components/question-stem';
import { MathLine } from '@/components/math-line';
import { MockKey } from '@/components/mock/mock-kit';
import { colors } from '@/constants/brand';
import { QUESTION_READ_LINE, QUESTION_READ_SIZE, READ_LINE, READ_SIZE } from '@/constants/reading';
import { useScale } from '@/constants/scale';
import { hapticSwitched, hapticWarning } from '@/lib/haptics';
import {
  chargeElapsed,
  getMockSession,
  mockSecondsLeft,
  resumeElapsed,
  saveProgress,
  submitCurrentSession,
} from '@/lib/mock';

function BackArrowIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M15 5l-7 7 7 7"
        stroke={colors.ink}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/** The palette, as its own shape: nine cells, which is what the page is. */
function GridIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 12 12" width={size} height={size} fill="none">
      {[0, 4.5, 9].map((y) =>
        [0, 4.5, 9].map((x) => (
          <Rect key={`${x}-${y}`} x={x} y={y} width={3} height={3} rx={0.8} fill={colors.ink} />
        ))
      )}
    </Svg>
  );
}

const SUBJECT_LABEL: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Maths',
  biology: 'Biology',
};

function formatTime(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

export default function MockTestScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  // The session is module state shared with ready/palette/paused; this
  // screen mirrors the index into React state so navigation re-renders, and
  // bumps `tick` when it mutates answers/marks in place.
  const session = getMockSession();
  const [index, setIndexState] = useState(session?.index ?? 0);
  const [, setTick] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const bump = () => setTick((t) => t + 1);

  useFocusEffect(
    useCallback(() => {
      const s = getMockSession();
      if (!s || s.result) {
        // Deep link or a stale back-gesture after submit: there is no paper
        // to show, and the honest place to land is the mock tests page.
        router.replace('/mocks');
        return;
      }
      setIndexState(s.index);
      // The stopwatch runs only while the paper is on screen: the palette and
      // the paused page are not time spent on question 12.
      resumeElapsed();
      // Time with the app in the background is not time on the question —
      // and backgrounding is also the last chance to save before iOS may
      // kill the process, which chargeElapsed's save covers.
      const sub = AppState.addEventListener('change', (next) => {
        if (next === 'active') resumeElapsed();
        else chargeElapsed();
      });
      return () => {
        sub.remove();
        chargeElapsed();
      };
    }, [])
  );

  /** Within-subject numbering ("Physics · Q 3 / 25") and pill jump targets. */
  const layout = useMemo(() => {
    if (!session) return null;
    const bySubject = new Map<string, number>();
    const positions = session.paper.questions.map((q) => {
      const n = (bySubject.get(q.subject) ?? 0) + 1;
      bySubject.set(q.subject, n);
      return n;
    });
    const firstIndex = new Map<string, number>();
    session.paper.questions.forEach((q, i) => {
      if (!firstIndex.has(q.subject)) firstIndex.set(q.subject, i);
    });
    return {
      positions,
      totals: bySubject,
      firstIndex,
      subjects: [...firstIndex.keys()],
    };
  }, [session]);

  const goTo = (i: number) => {
    const s = getMockSession();
    if (!s) return;
    chargeElapsed();
    const clamped = Math.max(0, Math.min(s.paper.questions.length - 1, i));
    s.index = clamped;
    setIndexState(clamped);
  };

  /**
   * Only the clock ends a paper from this screen now.
   *
   * Submit used to be a button in the top bar, a thumb's width from the timer
   * a student checks every minute, on all 75 questions. It lives on the
   * review page — reached by the Palette, and by the last question's own
   * "Review" key — which is where a student can see what they are submitting.
   */
  const doSubmit = async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      const result = await submitCurrentSession();
      router.replace(`/mock-report?run=${result?.mock_run_id ?? ''}`);
    } catch {
      setSubmitting(false);
      Alert.alert(
        'Time is up',
        'Your answers are safe on this device. Check your connection and submit again.',
        [{ text: 'OK' }]
      );
    }
  };

  // Time up: one automatic submit, exactly once.
  const expired = useRef(false);
  const onExpire = useCallback(() => {
    if (expired.current) return;
    expired.current = true;
    doSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!session || !layout) {
    return <View style={styles.screen} />;
  }

  const question = session.paper.questions[index];
  const draft = session.answers.get(question.id);
  const activeSubject = question.subject;
  const isNumerical = question.question_type === 'numerical';
  const optionEntries = question.options
    ? Object.entries(question.options).sort(([a], [b]) => a.localeCompare(b))
    : [];

  const answeredIn = (subject: string) =>
    session.paper.questions.filter((q) => q.subject === subject && session.answers.has(q.id))
      .length;
  const isMarked = session.marked.has(question.id);
  const isLast = index === session.paper.questions.length - 1;

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        {/* THE HEAD: the way out (it saves), the way to every question, and
            the clock, quiet at the right. The clock was a pill in the middle
            of the row; on an exam page it is the one thing that should not
            shout. */}
        <View style={styles.topBar}>
          <Pressable
            style={styles.backButton}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel="Save and exit"
            onPress={() => router.push('/mock-paused')}
          >
            <BackArrowIcon size={scale(16)} />
          </Pressable>
          <Pressable
            style={styles.allChip}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="All questions"
            onPress={() => router.push('/mock-palette')}
          >
            <GridIcon size={scale(11)} />
            <Text style={styles.allChipText}>All {session.paper.questions.length}</Text>
          </Pressable>
          <Countdown
            styles={styles}
            scale={scale}
            deadline={session.deadline}
            onExpire={onExpire}
          />
        </View>

        {/* SUBJECTS AS PLAIN TABS, each with how much of it is answered, an
            ink line under the one you are in. It was a grey sliding track,
            the only one in the app. */}
        <View style={styles.tabs}>
          {layout.subjects.map((subject) => {
            const on = activeSubject === subject;
            return (
              <Pressable
                key={subject}
                style={styles.tab}
                accessibilityRole="tab"
                accessibilityState={{ selected: on }}
                onPress={() => goTo(layout.firstIndex.get(subject) ?? 0)}
              >
                <Text style={[styles.tabText, on && styles.tabTextOn]}>
                  {SUBJECT_LABEL[subject] ?? subject}
                </Text>
                <Text style={[styles.tabCount, on && styles.tabCountOn]}>
                  {answeredIn(subject)}/{layout.totals.get(subject)}
                </Text>
                {on && <View style={styles.tabLine} />}
              </Pressable>
            );
          })}
        </View>

        <ScrollView style={styles.content} contentContainerStyle={styles.contentInner}>
          {/* THE QUESTION, AS PRACTICE LAYS IT OUT: the number in ink and its
              place in the subject quiet beside it (a paper does not name the
              chapter while it is sat), the stem in plain text on white, a
              hairline, then the options. It sat on ruled paper with a red
              margin, an older look nothing else in the app still wears. */}
          <View style={styles.metaRow}>
            <Text style={styles.questionMeta}>
              <Text style={styles.questionNumber}>Q{layout.positions[index]}</Text>
              {'  '}of {layout.totals.get(activeSubject)}
            </Text>
            {isMarked && (
              <View style={styles.markedTag}>
                <FlagIcon size={scale(11)} color={colors.amberText} />
                <Text style={styles.markedTagText}>Marked</Text>
              </View>
            )}
          </View>
          <QuestionStem
            text={question.question_text ?? ''}
            fontSize={QUESTION_READ_SIZE}
            lineHeight={QUESTION_READ_LINE}
            style={styles.questionBody}
          />
          {question.diagram?.map((figure, i) => (
            <QuestionDiagram
              key={figure.r2_key ?? figure.url}
              figure={figure}
              index={i}
              total={question.diagram?.length ?? 1}
            />
          ))}
          <View style={styles.questionDivider} />

          {isNumerical ? (
            <TextInput
              style={styles.numericInput}
              value={draft?.value ?? ''}
              onChangeText={(value) => {
                session.answers.set(question.id, { value });
                if (!value.trim()) session.answers.delete(question.id);
                saveProgress();
                bump();
              }}
              placeholder="Your answer"
              placeholderTextColor={colors.faint}
              keyboardType="numbers-and-punctuation"
              returnKeyType="done"
            />
          ) : (
            <View style={styles.optionsList}>
              {optionEntries.map(([key, text]) => {
                const isSelected = draft?.option === key;
                return (
                  <Pressable
                    key={key}
                    onPress={() => {
                      if (!isSelected) hapticSwitched();
                      session.answers.set(question.id, { option: key });
                      saveProgress();
                      bump();
                    }}
                    style={[styles.optionRow, isSelected && styles.optionRowSelected]}
                  >
                    <View style={[styles.optionBadge, isSelected && styles.optionBadgeSelected]}>
                      <Text
                        style={[
                          styles.optionBadgeText,
                          isSelected && styles.optionBadgeTextSelected,
                        ]}
                      >
                        {key.toUpperCase()}
                      </Text>
                    </View>
                    <View style={styles.optionText}>
                      <MathLine
                        text={String(text)}
                        fontSize={READ_SIZE}
                        color={colors.ink}
                        style={{
                          fontFamily: 'Onest_400Regular',
                          fontSize: READ_SIZE,
                          lineHeight: READ_LINE,
                          color: colors.ink,
                        }}
                      />
                    </View>
                  </Pressable>
                );
              })}
            </View>
          )}

          <View style={styles.markRow}>
            <Pressable
              hitSlop={8}
              style={styles.markAction}
              onPress={() => {
                hapticSwitched();
                if (isMarked) session.marked.delete(question.id);
                else session.marked.add(question.id);
                saveProgress();
                bump();
              }}
            >
              <FlagIcon size={scale(12)} color={isMarked ? colors.amberText : colors.slate} />
              <Text style={[styles.markRowText, isMarked && styles.markRowTextActive]}>
                {isMarked ? 'Unmark' : 'Mark to look at again'}
              </Text>
            </Pressable>
            {!!draft && (
              <Pressable
                hitSlop={8}
                onPress={() => {
                  session.answers.delete(question.id);
                  saveProgress();
                  bump();
                }}
              >
                <Text style={styles.markRowText}>Clear answer</Text>
              </Pressable>
            )}
          </View>
        </ScrollView>

        {/* ONE WAY BACK, ONE WAY ON: the same height, the app's flat keys. */}
        <View style={styles.bottomNav}>
          <Pressable
            style={[styles.prevButton, index === 0 && styles.prevButtonDisabled]}
            disabled={index === 0}
            accessibilityRole="button"
            accessibilityLabel="Previous question"
            onPress={() => goTo(index - 1)}
          >
            <BackArrowIcon size={scale(16)} />
          </Pressable>
          <MockKey
            label={isLast ? 'Review answers' : 'Save & next'}
            arrow
            style={styles.nextKey}
            onPress={() => (isLast ? router.push('/mock-palette') : goTo(index + 1))}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

function FlagIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path
        d="M4 14V2.5h7l-1.6 3 1.6 3H4"
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/**
 * The clock, and the only thing on this screen that ticks.
 *
 * `secondsLeft` was state on the screen component, so every second re-rendered
 * the entire tree — the question card's 14-path RuledPaper included — to change
 * eight characters inside one Text. Owning the interval here keeps the
 * per-second work inside the pill, which is the only part that changed.
 */
const FIVE_MINUTES = 5 * 60;

function Countdown({
  styles,
  scale,
  deadline,
  onExpire,
}: {
  styles: ReturnType<typeof createStyles>;
  scale: (n: number) => number;
  deadline: number;
  onExpire: () => void;
}) {
  const remaining = () => {
    const s = getMockSession();
    return s ? mockSecondsLeft(s) : 0;
  };
  const [secondsLeft, setSecondsLeft] = useState(remaining);
  /** Last second seen, so the five-minute mark is felt once, on the way down. */
  const lastLeft = useRef(remaining());

  useEffect(() => {
    const id = setInterval(() => {
      const left = remaining();
      setSecondsLeft(left);
      // Felt, not just read: a student does not watch the clock while
      // working a question. Once at five minutes left, once at time up.
      if (lastLeft.current > FIVE_MINUTES && left <= FIVE_MINUTES && left > 0) hapticWarning();
      lastLeft.current = left;
      if (left <= 0) {
        clearInterval(id);
        hapticWarning();
        onExpire();
      }
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deadline]);

  const low = secondsLeft <= FIVE_MINUTES;
  return (
    <View style={styles.timer} accessibilityLabel={`Time left ${formatTime(secondsLeft)}`}>
      <ClockIcon size={scale(14)} color={low ? colors.red : colors.ink} />
      <Text style={[styles.timerText, low && styles.timerLow]}>{formatTime(secondsLeft)}</Text>
    </View>
  );
}

function ClockIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Circle cx={12} cy={13} r={8} stroke={color} strokeWidth={1.9} />
      <Path d="M12 9v4l3 2M9 2h6" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
    </Svg>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    /** White, like every other page in the app. */
    screen: { flex: 1, backgroundColor: '#fff' },
    safeArea: { flex: 1 },
    topBar: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingTop: verticalScale(6),
      paddingHorizontal: scale(20),
    },
    /** The same 36pt circled chevron every pushed screen in the app uses. */
    backButton: {
      width: scale(36),
      height: scale(36),
      borderRadius: scale(18),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.12)',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    allChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
      height: scale(36),
      paddingHorizontal: scale(12),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.12)',
    },
    allChipText: { fontFamily: 'Onest_600SemiBold', fontSize: scale(12.5), color: colors.ink },
    timer: { marginLeft: 'auto', flexDirection: 'row', alignItems: 'center', gap: scale(6) },
    timerText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      color: colors.ink,
      fontVariant: ['tabular-nums'],
    },
    /** The last five minutes, in the app's red, as the haptic says it too. */
    timerLow: { color: colors.red },
    tabs: {
      flexShrink: 0,
      flexDirection: 'row',
      gap: scale(22),
      marginTop: verticalScale(14),
      marginHorizontal: scale(20),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.08)',
    },
    tab: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: scale(5),
      paddingBottom: verticalScale(10),
    },
    tabText: { fontFamily: 'Onest_500Medium', fontSize: scale(14), color: colors.faint },
    tabTextOn: { fontFamily: 'Onest_600SemiBold', color: colors.ink },
    tabCount: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(11),
      color: colors.quiet,
      fontVariant: ['tabular-nums'],
    },
    tabCountOn: { color: colors.slate },
    tabLine: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -1,
      height: 2,
      borderRadius: 2,
      backgroundColor: colors.ink,
    },
    content: { flex: 1, minHeight: 0 },
    contentInner: {
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(20),
      paddingBottom: verticalScale(28),
    },
    /** Practice's own question head (app/practice.tsx questionMeta). */
    metaRow: { flexDirection: 'row', alignItems: 'center', gap: scale(10) },
    questionMeta: {
      flex: 1,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      color: '#8A857A',
    },
    questionNumber: { fontFamily: 'Onest_800ExtraBold', color: colors.ink },
    markedTag: { flexDirection: 'row', alignItems: 'center', gap: scale(4) },
    markedTagText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.amberText,
    },
    questionBody: { marginTop: verticalScale(8) },
    questionDivider: {
      height: 1,
      backgroundColor: 'rgba(28,25,20,.1)',
      marginTop: verticalScale(18),
    },
    numericInput: {
      marginTop: verticalScale(18),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,25,20,.12)',
      borderRadius: scale(14),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(16),
      fontFamily: 'Onest_500Medium',
      fontSize: scale(16),
      color: colors.ink,
    },
    /** Practice's option rows, to the point. */
    optionsList: { gap: verticalScale(10), marginTop: verticalScale(18) },
    optionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(16),
      borderRadius: scale(14),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,25,20,.12)',
      backgroundColor: '#fff',
    },
    optionRowSelected: { borderColor: colors.ink, backgroundColor: '#FBF9F2' },
    optionBadge: {
      width: scale(28),
      height: scale(28),
      flexShrink: 0,
      borderRadius: scale(9),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    optionBadgeSelected: { backgroundColor: colors.ink, borderColor: colors.ink },
    optionBadgeText: { fontFamily: 'Onest_700Bold', fontSize: scale(12), color: colors.ink },
    optionBadgeTextSelected: { color: '#fff' },
    optionText: { flex: 1 },
    markRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(22),
      marginTop: verticalScale(16),
    },
    markAction: { flexDirection: 'row', alignItems: 'center', gap: scale(6) },
    markRowText: { fontFamily: 'Onest_500Medium', fontSize: scale(13), color: colors.slate },
    markRowTextActive: { color: colors.amberText },
    bottomNav: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(12),
      paddingBottom: verticalScale(8),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.06)',
    },
    /** Back as a circle the key's own height, so the two read as one row. */
    prevButton: {
      width: verticalScale(52),
      height: verticalScale(52),
      borderRadius: 999,
      borderWidth: 1.4,
      borderColor: 'rgba(28,26,22,.16)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    prevButtonDisabled: { opacity: 0.35 },
    nextKey: { flex: 1, width: undefined },
  });
}

import { router, useFocusEffect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Alert,
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
import { MathText } from '@/components/math-text';
import { RuledPaper } from '@/components/ruled-paper';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { chargeElapsed, getMockSession, resumeElapsed, submitCurrentSession } from '@/lib/mock';

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

function ArrowRightIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path
        d="M2 8h11M9 3.5 13.5 8 9 12.5"
        stroke={colors.paper}
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
      return () => chargeElapsed();
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

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        {/*
          A WAY OUT AND A CLOCK.
          This row held "Save & exit" as a pill, the clock, and "Submit test"
          as a filled ink button — two ways out, and the irreversible one
          drawn as the loudest thing on an exam screen. Then it was three
          controls, which still read as a toolbar. Leaving is the circled
          chevron every pushed screen in the app uses (it still saves), and
          Submit has moved to the review page, where a student can see what
          they are submitting before they do it. The spacer keeps the clock
          optically centred rather than shunted left by the chevron.
        */}
        <View style={styles.topBar}>
          <Pressable
            style={styles.backButton}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel="Save and exit"
            onPress={() => router.push('/mock-paused')}>
            <BackArrowIcon size={scale(16)} />
          </Pressable>
          <CountdownPill styles={styles} scale={scale} deadline={session.deadline} onExpire={onExpire} />
          <View style={styles.topBarSpacer} />
        </View>

        <View style={styles.subjectRow}>
          <View style={styles.subjectTrack}>
            {layout.subjects.map((subject) => (
              <Pressable
                key={subject}
                style={styles.subjectPillWrap}
                onPress={() => goTo(layout.firstIndex.get(subject) ?? 0)}>
                <View
                  style={[
                    styles.subjectPill,
                    activeSubject === subject && styles.subjectPillActive,
                  ]}>
                  <Text
                    style={[
                      styles.subjectPillText,
                      activeSubject === subject && styles.subjectPillTextActive,
                    ]}>
                    {SUBJECT_LABEL[subject] ?? subject}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>

        <ScrollView style={styles.content} contentContainerStyle={styles.contentInner}>
          {/*
            WHERE YOU ARE, AND THE WAY TO EVERYWHERE ELSE.

            The subject is already lit in the segmented control directly
            above, so naming it again here was the same word twice in two
            lines. The marking scheme pill is gone with it: +4 / −1 is on the
            start screen, thirty seconds earlier, and on an exam page it is
            furniture.

            The palette lives here now, beside the counter that says which
            question this is — that is where a student looks to know where
            they are. It was a third button wedged between Prev and Save &
            Next, carrying a 2x3 grid of coloured dots, and it squeezed that
            row until the labels in it had nowhere to go.
          */}
          <View style={styles.metaRow}>
            <Text style={styles.metaText}>
              Q {layout.positions[index]} of {layout.totals.get(activeSubject)}
            </Text>
            <Pressable
              style={styles.paletteChip}
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel="All questions"
              onPress={() => router.push('/mock-palette')}>
              <GridIcon size={scale(11)} />
              <Text style={styles.paletteChipText}>
                All {session.paper.questions.length}
              </Text>
            </Pressable>
          </View>

          <View style={styles.questionCard}>
            <RuledPaper step={verticalScale(25)} color="rgba(28,26,22,.06)" count={14} />
            <View style={styles.questionRule} />
            <QuestionStem
              text={question.question_text ?? ''}
              fontSize={scale(15)}
              lineHeight={scale(23.25)}
              style={styles.questionBody}
            />
          </View>
          {question.diagram?.map((figure, i) => (
            <QuestionDiagram
              key={figure.r2_key ?? figure.url}
              figure={figure}
              index={i}
              total={question.diagram?.length ?? 1}
            />
          ))}

          {isNumerical ? (
            <TextInput
              style={styles.numericInput}
              value={draft?.value ?? ''}
              onChangeText={(value) => {
                session.answers.set(question.id, { value });
                if (!value.trim()) session.answers.delete(question.id);
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
                      session.answers.set(question.id, { option: key });
                      bump();
                    }}
                    style={[styles.optionRow, isSelected && styles.optionRowSelected]}>
                    <View style={[styles.optionBadge, isSelected && styles.optionBadgeSelected]}>
                      <Text
                        style={[
                          styles.optionBadgeText,
                          isSelected && styles.optionBadgeTextSelected,
                        ]}>
                        {key.toUpperCase()}
                      </Text>
                    </View>
                    <MathText
                      text={String(text)}
                      fontSize={scale(14)}
                      lineHeight={scale(20)}
                      color={colors.ink}
                      style={styles.optionText}
                    />
                  </Pressable>
                );
              })}
            </View>
          )}

          <View style={styles.markRow}>
            <Pressable
              onPress={() => {
                if (session.marked.has(question.id)) session.marked.delete(question.id);
                else session.marked.add(question.id);
                bump();
              }}>
              <Text
                style={[
                  styles.markRowText,
                  session.marked.has(question.id) && styles.markRowTextActive,
                ]}>
                ⚑ Mark for review
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                session.answers.delete(question.id);
                bump();
              }}>
              <Text style={styles.markRowText}>Clear</Text>
            </Pressable>
          </View>
        </ScrollView>

        {/* ONE WAY BACK, ONE WAY ON. Three buttons shared this row and the
            widest of them had a grid of dots inside it; at 402pt there was
            nothing left for the labels. Back is the same circle as the top
            bar's, and forward is the app's own ink key at its own size. */}
        <View style={styles.bottomNav}>
          <Pressable
            style={[styles.prevButton, index === 0 && styles.prevButtonDisabled]}
            disabled={index === 0}
            accessibilityRole="button"
            accessibilityLabel="Previous question"
            onPress={() => goTo(index - 1)}>
            <BackArrowIcon size={scale(16)} />
          </Pressable>
          <Pressable
            style={styles.nextButton}
            onPress={() =>
              index === session.paper.questions.length - 1
                ? router.push('/mock-palette')
                : goTo(index + 1)
            }>
            <Text style={styles.nextButtonText}>
              {index === session.paper.questions.length - 1 ? 'Review answers' : 'Save & next'}
            </Text>
            <ArrowRightIcon size={scale(15)} />
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
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
function CountdownPill({
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
  const remaining = () => Math.max(0, Math.floor((deadline - Date.now()) / 1000));
  const [secondsLeft, setSecondsLeft] = useState(remaining);

  useEffect(() => {
    const id = setInterval(() => {
      const left = remaining();
      setSecondsLeft(left);
      if (left <= 0) {
        clearInterval(id);
        onExpire();
      }
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deadline]);

  return (
    <View style={styles.timerPill}>
      <ClockIcon size={scale(13)} />
      <Text style={styles.timerText}>{formatTime(secondsLeft)}</Text>
    </View>
  );
}

function ClockIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Circle cx={12} cy={13} r={8} stroke={colors.ink} strokeWidth={1.9} />
      <Path d="M12 9v4l3 2M9 2h6" stroke={colors.ink} strokeWidth={1.9} strokeLinecap="round" />
    </Svg>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    /** White, like every other page in the app. The mock flow was the only
     *  corner of it on the warm paper tone, which read as a different app. */
    screen: {
      flex: 1,
      backgroundColor: '#fff',
    },
    safeArea: {
      flex: 1,
    },
    topBar: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(8),
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
    topBarSpacer: {
      width: scale(36),
      flexShrink: 0,
    },
    /** Hugs its own time, centred between the chevron and Submit. It used to
     *  take the whole middle of the row, which made a clock the width of the
     *  screen — the one thing on an exam page that should not shout. */
    timerPill: {
      flex: 1,
      maxWidth: scale(132),
      alignSelf: 'center',
      marginHorizontal: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(7),
      backgroundColor: '#fff',
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.14)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(10),
    },
    timerText: {
      fontFamily: 'Menlo',
      fontWeight: '700',
      fontSize: scale(15),
      color: colors.ink,
    },
    subjectRow: {
      flexShrink: 0,
      flexDirection: 'row',
      paddingTop: verticalScale(8),
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(10),
    },
    subjectTrack: {
      flex: 1,
      flexDirection: 'row',
      gap: scale(3),
      padding: scale(3),
      backgroundColor: 'rgba(28,26,22,.055)',
      borderRadius: scale(99),
    },
    subjectPillWrap: {
      flex: 1,
    },
    subjectPill: {
      alignItems: 'center',
      paddingVertical: verticalScale(6),
      borderRadius: scale(99),
    },
    subjectPillActive: {
      backgroundColor: '#fff',
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(2) },
      shadowOpacity: 0.12,
      shadowRadius: scale(6),
      elevation: 2,
    },
    subjectPillText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    subjectPillTextActive: {
      fontFamily: 'Onest_700Bold',
      color: colors.ink,
    },
    content: {
      flex: 1,
      minHeight: 0,
    },
    contentInner: {
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(16),
    },
    metaRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: verticalScale(8),
    },
    metaText: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.0),
      letterSpacing: scale(1.05),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    /** An outline chip on the app's own hairline, at the size of every
     *  other small chip we draw. */
    paletteChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
      height: verticalScale(28),
      paddingHorizontal: scale(11),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
    },
    paletteChipText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11.5),
      color: colors.ink,
    },
    questionCard: {
      position: 'relative',
      backgroundColor: '#FFFEFB',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.1)',
      borderRadius: scale(13),
      paddingTop: verticalScale(14),
      paddingRight: scale(15),
      paddingBottom: verticalScale(13),
      paddingLeft: scale(34),
      overflow: 'hidden',
    },
    questionRule: {
      position: 'absolute',
      top: verticalScale(11),
      bottom: verticalScale(11),
      left: scale(22),
      width: scale(1.4),
      backgroundColor: 'rgba(221,68,51,.4)',
    },
    questionBody: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(23.25),
      color: colors.ink,
    },
    numericInput: {
      marginTop: verticalScale(12),
      backgroundColor: '#fff',
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.12)',
      borderRadius: scale(12),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(14),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      color: colors.ink,
    },
    optionsList: {
      flexDirection: 'column',
      gap: verticalScale(8),
      marginTop: verticalScale(12),
    },
    optionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(14),
      borderRadius: scale(12),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.12)',
      backgroundColor: '#fff',
    },
    optionRowSelected: {
      borderWidth: scale(1.6),
      borderColor: colors.ink,
      backgroundColor: 'rgba(28,26,22,.04)',
    },
    optionBadge: {
      width: scale(26),
      height: scale(26),
      flexShrink: 0,
      borderRadius: scale(8),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    optionBadgeSelected: {
      borderWidth: 0,
      backgroundColor: colors.ink,
    },
    optionBadgeText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(12),
      color: colors.ink,
    },
    optionBadgeTextSelected: {
      color: '#fff',
    },
    optionText: {
      flex: 1,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      color: colors.ink,
    },
    markRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(14),
      marginTop: verticalScale(12),
    },
    markRowText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    markRowTextActive: {
      color: '#9A6A12',
    },
    bottomNav: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingTop: verticalScale(12),
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(12),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.08)',
      backgroundColor: '#fff',
    },
    /** The same circle as the top bar's, because it is the same gesture. */
    prevButton: {
      width: verticalScale(52),
      height: verticalScale(52),
      flexShrink: 0,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: verticalScale(26),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
    },
    prevButtonDisabled: {
      opacity: 0.35,
    },
    /** The app's primary key: an ink pill, 52pt, no drop shadow — the same
     *  button Practice, the paywall and the start screen all use. */
    nextButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(9),
      height: verticalScale(52),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
    },
    nextButtonText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      color: colors.paper,
    },
  });
}

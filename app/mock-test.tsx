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
import Svg, { Circle, Path } from 'react-native-svg';

import { QuestionDiagram } from '@/components/question-diagram';
import { QuestionStem } from '@/components/question-stem';
import { MathText } from '@/components/math-text';
import { RuledPaper } from '@/components/ruled-paper';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { getMockSession, sessionAnswersPayload, submitMockPaper } from '@/lib/mock';

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
        // to show, and the honest place to land is the start screen.
        router.replace('/mock-ready');
        return;
      }
      setIndexState(s.index);
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
    const clamped = Math.max(0, Math.min(s.paper.questions.length - 1, i));
    s.index = clamped;
    setIndexState(clamped);
  };

  const doSubmit = async (auto = false) => {
    const s = getMockSession();
    if (!s || submitting) return;
    setSubmitting(true);
    try {
      const result = await submitMockPaper(s.paper.mock_run_id, sessionAnswersPayload(s));
      s.result = result;
      router.replace('/mock-result');
    } catch {
      setSubmitting(false);
      Alert.alert(
        auto ? 'Time is up' : 'Could not submit',
        'Your answers are safe on this device. Check your connection and submit again.',
        [{ text: 'OK' }]
      );
    }
  };

  const confirmSubmit = () => {
    const s = getMockSession();
    if (!s) return;
    const answered = sessionAnswersPayload(s).length;
    const total = s.paper.questions.length;
    Alert.alert(
      'Submit test?',
      `${answered} answered · ${total - answered} unanswered. Unanswered questions score 0.`,
      [
        { text: 'Keep going', style: 'cancel' },
        { text: 'Submit', style: 'destructive', onPress: () => doSubmit() },
      ]
    );
  };

  // Time up: one automatic submit, exactly once.
  const expired = useRef(false);
  const onExpire = useCallback(() => {
    if (expired.current) return;
    expired.current = true;
    doSubmit(true);
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

  const statusDot = (q: { id: string }) =>
    session.marked.has(q.id)
      ? '#EEA31F'
      : session.answers.has(q.id)
        ? '#1C9B57'
        : 'rgba(28,26,22,.2)';
  const paletteDots = session.paper.questions.slice(index, index + 6);

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.topBar}>
          <Pressable style={styles.exitButton} onPress={() => router.push('/mock-paused')}>
            <Text style={styles.exitButtonText}>Save &amp; exit</Text>
          </Pressable>
          <CountdownPill styles={styles} scale={scale} deadline={session.deadline} onExpire={onExpire} />
          <Pressable style={styles.submitButton} onPress={confirmSubmit}>
            <Text style={styles.submitButtonText}>
              {submitting ? 'Submitting…' : 'Submit test'}
            </Text>
          </Pressable>
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
          <View style={styles.metaRow}>
            <Text style={styles.metaText}>
              {SUBJECT_LABEL[activeSubject] ?? activeSubject} · Q {layout.positions[index]} /{' '}
              {layout.totals.get(activeSubject)}
            </Text>
            <View style={styles.markingPill}>
              <Text style={styles.markingPillText}>
                +{session.paper.marks_correct} / {session.paper.marks_wrong}
              </Text>
            </View>
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

        <View style={styles.bottomNav}>
          <Pressable
            style={[styles.prevButton, index === 0 && styles.prevButtonDisabled]}
            onPress={() => goTo(index - 1)}>
            <Text style={styles.prevButtonText}>← Prev</Text>
          </Pressable>
          <Pressable style={styles.paletteButton} onPress={() => router.push('/mock-palette')}>
            <View style={styles.paletteDots}>
              <View style={styles.paletteDotsRow}>
                {paletteDots.slice(0, 3).map((q) => (
                  <View key={q.id} style={[styles.paletteDot, { backgroundColor: statusDot(q) }]} />
                ))}
              </View>
              <View style={styles.paletteDotsRow}>
                {paletteDots.slice(3, 6).map((q) => (
                  <View key={q.id} style={[styles.paletteDot, { backgroundColor: statusDot(q) }]} />
                ))}
              </View>
            </View>
            <Text style={styles.paletteButtonText}>Palette</Text>
          </Pressable>
          <Pressable
            style={styles.nextButton}
            onPress={() =>
              index === session.paper.questions.length - 1
                ? router.push('/mock-palette')
                : goTo(index + 1)
            }>
            <Text style={styles.nextButtonText}>
              {index === session.paper.questions.length - 1 ? 'Review →' : 'Save & Next →'}
            </Text>
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
    screen: {
      flex: 1,
      backgroundColor: colors.paper,
    },
    safeArea: {
      flex: 1,
    },
    topBar: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      paddingTop: verticalScale(6),
      paddingHorizontal: scale(20),
    },
    exitButton: {
      paddingVertical: verticalScale(9),
      paddingHorizontal: scale(13),
      borderRadius: scale(99),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.14)',
      backgroundColor: '#fff',
    },
    exitButtonText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(12),
      color: colors.slate,
    },
    timerPill: {
      flex: 1,
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
    submitButton: {
      paddingVertical: verticalScale(9),
      paddingHorizontal: scale(15),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
    },
    submitButtonText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(12),
      color: colors.paper,
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
    markingPill: {
      backgroundColor: '#FCF4E0',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.4)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(3),
      paddingHorizontal: scale(9),
    },
    markingPillText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11),
      color: '#9A6A12',
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
      gap: scale(10),
      paddingTop: verticalScale(12),
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(6),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.08)',
      backgroundColor: 'rgba(255,255,255,.92)',
    },
    prevButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: verticalScale(46),
      paddingHorizontal: scale(16),
      borderRadius: scale(99),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
    },
    prevButtonDisabled: {
      opacity: 0.4,
    },
    prevButtonText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: colors.ink,
    },
    paletteButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(8),
      height: verticalScale(46),
      paddingHorizontal: scale(14),
      borderRadius: scale(99),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
    },
    paletteDots: {
      flexDirection: 'column',
      gap: scale(2),
    },
    paletteDotsRow: {
      flexDirection: 'row',
      gap: scale(2),
    },
    paletteDot: {
      width: scale(4),
      height: scale(4),
      borderRadius: scale(1),
    },
    paletteButtonText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(12),
      color: colors.ink,
    },
    nextButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: verticalScale(46),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(5) },
      shadowOpacity: 0.28,
      shadowRadius: scale(9),
      elevation: 4,
    },
    nextButtonText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(14),
      color: colors.paper,
    },
  });
}

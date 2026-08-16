import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path, Rect } from 'react-native-svg';

import { PracticeTabsHeader } from '@/components/practice-tabs-header';
import { RuledPaper } from '@/components/ruled-paper';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { AnswerResult, NextQuestion, formatSolution, getNextQuestion, submitAnswer } from '@/lib/practice';
import { DEFAULT_PRACTICE_FOCUS, usePracticeFocus } from '@/lib/practice-focus-context';

const SUBJECTS = ['Physics', 'Chem', 'Maths'] as const;

// UI labels -> the subject strings the API's questions table actually uses.
const SUBJECT_QUERY: Record<(typeof SUBJECTS)[number], string> = {
  Physics: 'physics',
  Chem: 'chemistry',
  Maths: 'mathematics',
};

type UnlockItem = {
  title: string;
  status: 'weak' | 'building';
  action: 'Learn' | 'Practise';
};

const UNLOCK_ITEMS: UnlockItem[] = [
  { title: 'Rotational Motion', status: 'weak', action: 'Learn' },
  { title: 'EM Induction', status: 'weak', action: 'Learn' },
  { title: 'Thermodynamics', status: 'building', action: 'Practise' },
];

// The pool can hand back a numerical-answer question; retry a few times for
// one the current MCQ-first UI can render cleanly before falling back to
// rendering the numerical question with a plain value input.
const MAX_FETCH_ATTEMPTS = 5;

export default function PracticeScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [activeSegment, setActiveSegment] = useState<'unlimited' | 'mock'>('unlimited');
  const [activeSubject, setActiveSubject] = useState<(typeof SUBJECTS)[number]>('Physics');
  const { focus, setFocus } = usePracticeFocus();

  const [question, setQuestion] = useState<NextQuestion | null>(null);
  const [poolMessage, setPoolMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [numericInput, setNumericInput] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [answerResult, setAnswerResult] = useState<AnswerResult | null>(null);
  const [sessionStats, setSessionStats] = useState({ attempted: 0, correct: 0 });

  const revealed = answerResult !== null;

  // A chapter picked under one subject stops applying the moment the
  // student switches subject pills — it can't describe questions from a
  // different subject's tree. "Mixed"/"weak" stay in place across subjects.
  useEffect(() => {
    if (focus.mode === 'chapter' && focus.subject !== SUBJECT_QUERY[activeSubject]) {
      setFocus(DEFAULT_PRACTICE_FOCUS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSubject]);

  useEffect(() => {
    if (activeSegment !== 'unlimited') return;
    loadQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSegment, activeSubject, focus.mode, focus.chapterId]);

  async function loadQuestion() {
    setLoading(true);
    setLoadError(null);
    setPoolMessage(null);
    setSelectedOption(null);
    setNumericInput('');
    setAnswerResult(null);

    try {
      let next: NextQuestion | null = null;
      for (let attempt = 0; attempt < MAX_FETCH_ATTEMPTS; attempt += 1) {
        // /practice/next's live PracticeNextRequest schema (confirmed via
        // GET /openapi.json) only accepts exam/class_level/subject — no
        // chapter/topic field exists server-side yet, so `focus` can't be
        // sent along here. It still drives this effect's re-fetch and the
        // chip label below; wiring the request itself is a follow-up once
        // the backend adds chapter-scoping.
        const result = await getNextQuestion({ subject: SUBJECT_QUERY[activeSubject] });
        if ('exhausted' in result) {
          setPoolMessage(result.message);
          break;
        }
        next = result;
        if (result.question_type !== 'numerical') break; // prefer an MCQ for this UI
      }
      setQuestion(next);
    } catch (err) {
      setLoadError(err instanceof Error ? err.message : 'Could not load a question.');
    } finally {
      setLoading(false);
    }
  }

  async function selectOption(key: string) {
    if (!question || submitting) return;
    setSelectedOption(key);
    setSubmitting(true);
    try {
      const result = await submitAnswer({ question_id: question.question_id, chosen_option: key });
      setAnswerResult(result);
      setSessionStats((s) => ({
        attempted: s.attempted + 1,
        correct: s.correct + (result.is_correct ? 1 : 0),
      }));
    } catch (err) {
      setLoadError(err instanceof Error ? err.message : 'Could not submit that answer.');
    } finally {
      setSubmitting(false);
    }
  }

  async function submitNumeric() {
    if (!question || submitting || !numericInput.trim()) return;
    setSubmitting(true);
    try {
      const result = await submitAnswer({
        question_id: question.question_id,
        chosen_value: parseFloat(numericInput),
      });
      setAnswerResult(result);
      setSessionStats((s) => ({
        attempted: s.attempted + 1,
        correct: s.correct + (result.is_correct ? 1 : 0),
      }));
    } catch (err) {
      setLoadError(err instanceof Error ? err.message : 'Could not submit that answer.');
    } finally {
      setSubmitting(false);
    }
  }

  const optionEntries = question?.options ? Object.entries(question.options).sort(([a], [b]) => a.localeCompare(b)) : [];

  const chapterChipLabel =
    focus.mode === 'chapter' && focus.chapterName
      ? focus.chapterName
      : focus.mode === 'weak'
        ? 'Weak areas first'
        : 'All chapters';

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <PracticeTabsHeader
            activeSegment={activeSegment}
            onPressUnlimited={() => setActiveSegment('unlimited')}
            onPressMock={() => setActiveSegment('mock')}
            questionCounter={activeSegment === 'unlimited' ? 'Unlimited' : undefined}
          />

          {activeSegment === 'mock' ? (
            <>
              <View style={styles.lockedHeaderRow}>
                <View style={styles.lockedIconChip}>
                  <MockGlyphIcon size={scale(21)} color={colors.ink} />
                </View>
                <View style={styles.lockedTextBlock}>
                  <Text style={styles.lockedOverline}>Mock test</Text>
                  <Text style={styles.lockedTitle}>Locked for now</Text>
                </View>
              </View>

              <View style={styles.dronaCallCard}>
                <Text style={styles.dronaCallOverline}>Drona&apos;s call</Text>
                <Text style={styles.dronaCallBody}>
                  &quot;You&apos;re close, Aarav, but two weak spots could cost you 10+ marks in
                  a full paper. Clear these first and I&apos;ll open the mock.&quot;
                </Text>
              </View>

              <View style={styles.readinessRow}>
                <Text style={styles.readinessLabel}>Readiness</Text>
                <Text style={styles.readinessValue}>
                  68% <Text style={styles.readinessValueSub}>· unlocks at 80%</Text>
                </Text>
              </View>
              <View style={styles.readinessTrack}>
                <LinearGradient
                  colors={['#F4C45A', '#E08E16']}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={[styles.readinessFill, { width: '68%' }]}
                />
                <View style={styles.readinessMarker} />
              </View>

              <Text style={styles.unlockOverline}>Clear these to unlock</Text>
              <View style={styles.unlockList}>
                {UNLOCK_ITEMS.map((item, index) => (
                  <View
                    key={item.title}
                    style={[
                      styles.unlockRow,
                      index < UNLOCK_ITEMS.length - 1 && styles.unlockRowDivider,
                    ]}>
                    <View
                      style={[
                        styles.unlockDot,
                        item.status === 'building' && styles.unlockDotBuilding,
                      ]}
                    />
                    <Text style={styles.unlockTitle}>{item.title}</Text>
                    <Pressable
                      style={styles.unlockActionButton}
                      onPress={() =>
                        item.action === 'Learn'
                          ? router.push({
                              pathname: '/entering-classroom',
                              params: { chapterTitle: item.title },
                            })
                          : setActiveSegment('unlimited')
                      }>
                      <Text style={styles.unlockActionText}>{item.action}</Text>
                    </Pressable>
                  </View>
                ))}
              </View>

              <View style={styles.unlockInfoCard}>
                <Text style={styles.unlockInfoOverline}>When it unlocks</Text>
                <Text style={styles.unlockInfoBody}>
                  A full JEE-pattern paper:{' '}
                  <Text style={styles.unlockInfoBold}>3 subjects × 45 questions</Text>,{' '}
                  <Text style={styles.unlockInfoBold}>3 hours</Text>, +4 / −1 marking.
                </Text>
              </View>

              <Pressable onPress={() => router.push('/mock-ready')}>
                <Text style={styles.previewLink}>Preview the mock (demo)</Text>
              </Pressable>
            </>
          ) : (
            <>
          <View style={styles.filterRow}>
            <View style={styles.subjectTrack}>
              {SUBJECTS.map((subject) => (
                <Pressable key={subject} onPress={() => setActiveSubject(subject)}>
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
                      {subject}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>
            <Pressable
              style={styles.chapterChip}
              onPress={() =>
                router.push({
                  pathname: '/practice-focus',
                  params: { subject: SUBJECT_QUERY[activeSubject], subjectLabel: activeSubject },
                })
              }>
              <Text style={styles.chapterChipText}>{chapterChipLabel}</Text>
              <ChevronDownIcon size={scale(10)} />
            </Pressable>
          </View>

          {loading && !question ? (
            <QuestionSkeleton styles={styles} />
          ) : poolMessage ? (
            <View style={styles.questionCard}>
              <Text style={styles.questionOverline}>No questions left</Text>
              <Text style={styles.questionBody}>{poolMessage}</Text>
            </View>
          ) : loadError && !question ? (
            <View style={styles.questionCard}>
              <Text style={styles.questionOverline}>Couldn&apos;t load a question</Text>
              <Text style={styles.questionBody}>{loadError}</Text>
              <Pressable style={styles.revealButton} onPress={loadQuestion}>
                <Text style={styles.revealButtonText}>Try again</Text>
              </Pressable>
            </View>
          ) : question ? (
            <>
          <View style={styles.questionCard}>
            <RuledPaper step={verticalScale(25)} color="rgba(28,26,22,.06)" count={14} />
            <View style={styles.questionRule} />
            <Text style={styles.questionOverline}>
              {[question.concept, question.chapter_name].filter(Boolean).join(' · ') || 'Practice'}
            </Text>
            <Text style={styles.questionBody}>{question.question_text}</Text>
          </View>

          {question.question_type === 'numerical' ? (
            <View style={styles.numericRow}>
              <TextInput
                style={styles.numericInput}
                value={numericInput}
                onChangeText={setNumericInput}
                editable={!revealed}
                keyboardType="numeric"
                placeholder="Your answer"
                placeholderTextColor={colors.faint}
              />
              {!revealed && (
                <Pressable
                  style={[styles.revealButton, !numericInput.trim() && styles.revealButtonDisabled]}
                  disabled={!numericInput.trim() || submitting}
                  onPress={submitNumeric}>
                  <Text style={styles.revealButtonText}>Submit</Text>
                </Pressable>
              )}
            </View>
          ) : (
          <View style={styles.optionsList}>
            {optionEntries.map(([key, text]) => {
              const isYourWrongPick = revealed && selectedOption === key && !answerResult?.is_correct;
              const isCorrectReveal =
                revealed && answerResult?.correct_option?.toLowerCase() === key.toLowerCase();
              return (
                <Pressable
                  key={key}
                  disabled={revealed || submitting}
                  onPress={() => selectOption(key)}
                  style={[
                    styles.optionRow,
                    revealed && styles.optionRowRevealed,
                    isYourWrongPick && styles.optionRowWrong,
                    isCorrectReveal && styles.optionRowCorrect,
                  ]}>
                  <View
                    style={[
                      styles.optionBadge,
                      isYourWrongPick && styles.optionBadgeWrong,
                      isCorrectReveal && styles.optionBadgeCorrect,
                    ]}>
                    <Text
                      style={[
                        styles.optionBadgeText,
                        (isYourWrongPick || isCorrectReveal) && styles.optionBadgeTextOnColor,
                      ]}>
                      {key.toUpperCase()}
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.optionText,
                      isYourWrongPick && styles.optionTextWrong,
                      isCorrectReveal && styles.optionTextCorrect,
                    ]}>
                    {text}
                  </Text>
                  {isYourWrongPick && <Text style={styles.optionTagWrong}>YOUR PICK</Text>}
                  {isCorrectReveal && <Text style={styles.optionTagCorrect}>CORRECT</Text>}
                </Pressable>
              );
            })}
          </View>
          )}

          {!revealed ? (
            <>
              <View style={styles.actionRow}>
                <Pressable onPress={loadQuestion}>
                  <Text style={styles.nextInlineText}>Skip →</Text>
                </Pressable>
                <View style={styles.reportRow}>
                  <FlagIcon size={scale(12)} color={colors.faint} />
                  <Text style={styles.reportText}>Report</Text>
                </View>
              </View>

              <View style={styles.stuckCard}>
                <View style={styles.stuckTextBlock}>
                  <Text style={styles.stuckTitle}>Stuck or curious?</Text>
                  <Text style={styles.stuckSubtitle}>
                    Any question here can become a full spoken lesson.
                  </Text>
                </View>
                <Pressable
                  style={styles.learnButton}
                  onPress={() =>
                    router.push({
                      pathname: '/entering-classroom',
                      params: { chapterTitle: question.chapter_name ?? 'this topic' },
                    })
                  }>
                  <Text style={styles.learnButtonText}>Learn this →</Text>
                </Pressable>
              </View>
            </>
          ) : (
            <>
              <View style={styles.explainCard}>
                <Text style={styles.explainOverline}>
                  {answerResult?.is_correct ? 'Nice — correct' : 'Solution'}
                </Text>
                <Text style={styles.explainBody}>
                  {(answerResult && formatSolution(answerResult.solution)) ??
                    'No worked solution is available for this question yet.'}
                </Text>
                <Pressable
                  style={styles.deeperButton}
                  onPress={() =>
                    router.push({
                      pathname: '/entering-classroom',
                      params: { chapterTitle: question.chapter_name ?? 'this topic' },
                    })
                  }>
                  <Text style={styles.deeperButtonText}>Go deeper with Drona →</Text>
                </Pressable>
              </View>

              <View style={styles.progressRow}>
                <View style={styles.progressCard}>
                  <View style={styles.progressTopRow}>
                    <Text style={styles.progressLabel}>This session</Text>
                    <Text style={styles.progressStats}>
                      <Text style={styles.progressStatsBold}>{sessionStats.attempted}</Text> attempted ·{' '}
                      <Text style={styles.progressStatsCorrect}>{sessionStats.correct}</Text> correct
                    </Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <LinearGradient
                      colors={['#3FB877', '#1C9B57']}
                      start={{ x: 0, y: 0.5 }}
                      end={{ x: 1, y: 0.5 }}
                      style={[
                        styles.progressFill,
                        {
                          width: `${sessionStats.attempted ? Math.round((sessionStats.correct / sessionStats.attempted) * 100) : 0}%`,
                        },
                      ]}
                    />
                  </View>
                </View>
                <Pressable style={styles.nextButton} onPress={loadQuestion}>
                  <Text style={styles.nextButtonText}>Next →</Text>
                </Pressable>
              </View>
            </>
          )}
            </>
          ) : null}
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function MockGlyphIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Rect x={5} y={11} width={14} height={9} rx={2} stroke={color} strokeWidth={1.9} />
      <Path d="M8 11V8a4 4 0 0 1 8 0v3" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
    </Svg>
  );
}

function ChevronDownIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path
        d="m4 6 4 4 4-4"
        stroke="#9A6A12"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function FlagIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M5 21V4" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
      <Path
        d="M5 4c4.2-2 8.8 2 14 0v10c-5.2 2-9.8-2-14 0"
        stroke={color}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

// Mimics the loaded question-card + option-row layout so the ~5-10s real
// backend latency reads as "content incoming" rather than a bare spinner.
// Opacity-only pulse (no measured layout) per this codebase's past
// Reanimated width/layout-animation bugs on real devices.
function QuestionSkeleton({ styles }: { styles: ReturnType<typeof createStyles> }) {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.4, { duration: 700, easing: Easing.ease }),
        withTiming(1, { duration: 700, easing: Easing.ease }),
      ),
      -1,
    );
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));

  return (
    <Animated.View style={animatedStyle}>
      <View style={styles.questionCard}>
        <View style={[styles.skeletonBar, styles.skeletonOverline]} />
        <View style={[styles.skeletonBar, styles.skeletonBodyLine]} />
        <View style={[styles.skeletonBar, styles.skeletonBodyLineShort]} />
      </View>
      <View style={styles.optionsList}>
        {[0, 1, 2, 3].map((i) => (
          <View key={i} style={styles.optionRow}>
            <View style={[styles.optionBadge, styles.skeletonBadge]} />
            <View style={[styles.skeletonBar, styles.skeletonOptionLine]} />
          </View>
        ))}
      </View>
    </Animated.View>
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
    scroll: {
      flex: 1,
    },
    scrollContent: {
      paddingTop: verticalScale(8),
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(130),
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    heading: {
      fontFamily: 'AnekLatin_500Medium',
      fontSize: scale(24),
      letterSpacing: scale(-0.6),
      color: colors.ink,
    },
    questionCounter: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(16),
      color: colors.red,
    },
    segmentRow: {
      flexDirection: 'row',
      gap: scale(20),
      borderBottomWidth: 1,
      borderBottomColor: colors.hairline,
      paddingHorizontal: scale(2),
      marginTop: verticalScale(12),
    },
    segmentActive: {
      paddingVertical: verticalScale(8),
      borderBottomWidth: scale(2),
      borderBottomColor: colors.ink,
    },
    segmentActiveText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(14),
      color: colors.ink,
    },
    segmentInactive: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
      paddingVertical: verticalScale(8),
    },
    segmentInactiveText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: colors.slate,
    },
    filterRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      marginTop: verticalScale(14),
    },
    subjectTrack: {
      flexDirection: 'row',
      gap: scale(3),
      padding: scale(3),
      backgroundColor: 'rgba(28,26,22,.055)',
      borderRadius: scale(99),
    },
    subjectPill: {
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(12),
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
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    subjectPillTextActive: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
    chapterChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
      backgroundColor: '#FCF4E0',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.4)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(7),
      paddingHorizontal: scale(13),
    },
    chapterChipText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: '#9A6A12',
    },
    lockedHeaderRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(13),
      marginTop: verticalScale(18),
    },
    lockedIconChip: {
      width: scale(44),
      height: scale(44),
      borderRadius: scale(13),
      backgroundColor: '#F4EFE3',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.1)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    lockedTextBlock: {
      flexShrink: 1,
    },
    lockedOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    lockedTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(19),
      letterSpacing: scale(-0.19),
      color: colors.ink,
    },
    dronaCallCard: {
      backgroundColor: '#FCF4E0',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.4)',
      borderRadius: scale(14),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(16),
      marginTop: verticalScale(14),
    },
    dronaCallOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: '#9A6A12',
      marginBottom: verticalScale(5),
    },
    dronaCallBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      lineHeight: scale(21),
      color: colors.ink,
    },
    readinessRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginTop: verticalScale(20),
      marginBottom: verticalScale(8),
    },
    readinessLabel: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    readinessValue: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(14),
      color: colors.ink,
    },
    readinessValueSub: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.faint,
    },
    readinessTrack: {
      position: 'relative',
      height: verticalScale(10),
      borderRadius: scale(99),
      backgroundColor: '#EEE6D4',
    },
    readinessFill: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      borderRadius: scale(99),
    },
    readinessMarker: {
      position: 'absolute',
      left: '80%',
      top: verticalScale(-4),
      bottom: verticalScale(-4),
      width: scale(2),
      borderRadius: scale(2),
      backgroundColor: colors.ink,
    },
    unlockOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.faint,
      marginTop: verticalScale(20),
      marginBottom: verticalScale(4),
    },
    unlockList: {
      flexDirection: 'column',
    },
    unlockRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(11),
      paddingVertical: verticalScale(12),
    },
    unlockRowDivider: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.1)',
      borderStyle: 'dashed',
    },
    unlockDot: {
      width: scale(7),
      height: scale(7),
      borderRadius: scale(3.5),
      backgroundColor: colors.red,
      flexShrink: 0,
    },
    unlockDotBuilding: {
      backgroundColor: colors.marigold,
    },
    unlockTitle: {
      flex: 1,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    unlockActionButton: {
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(15),
      borderRadius: scale(99),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
    },
    unlockActionText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.ink,
    },
    unlockInfoCard: {
      backgroundColor: '#F4EFE3',
      borderRadius: scale(12),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(14),
      marginTop: verticalScale(10),
    },
    unlockInfoOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.faint,
      marginBottom: verticalScale(4),
    },
    unlockInfoBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.slate,
    },
    unlockInfoBold: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
    previewLink: {
      textAlign: 'center',
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.slate,
      textDecorationLine: 'underline',
      marginTop: verticalScale(14),
    },
    skeletonBar: {
      borderRadius: scale(6),
      backgroundColor: 'rgba(28,26,22,.08)',
    },
    skeletonOverline: {
      width: '40%',
      height: verticalScale(9),
    },
    skeletonBodyLine: {
      width: '92%',
      height: verticalScale(14),
      marginTop: verticalScale(10),
    },
    skeletonBodyLineShort: {
      width: '68%',
      height: verticalScale(14),
      marginTop: verticalScale(8),
    },
    skeletonBadge: {
      backgroundColor: 'rgba(28,26,22,.08)',
      borderWidth: 0,
    },
    skeletonOptionLine: {
      flex: 1,
      height: verticalScale(14),
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
      marginTop: verticalScale(14),
      overflow: 'hidden',
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1.5) },
      shadowOpacity: 0.05,
      shadowRadius: scale(2),
      elevation: 1,
    },
    questionRule: {
      position: 'absolute',
      top: verticalScale(11),
      bottom: verticalScale(11),
      left: scale(22),
      width: scale(1.4),
      backgroundColor: 'rgba(221,68,51,.4)',
    },
    questionOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(0.9),
      textTransform: 'uppercase',
      color: '#C53A2B',
    },
    questionBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22.5),
      color: colors.ink,
      marginTop: verticalScale(5),
    },
    optionsList: {
      flexDirection: 'column',
      gap: verticalScale(8),
      marginTop: verticalScale(12),
    },
    numericRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      marginTop: verticalScale(12),
    },
    numericInput: {
      flex: 1,
      height: verticalScale(46),
      paddingHorizontal: scale(16),
      borderRadius: scale(12),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
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
    optionRowRevealed: {
      paddingVertical: verticalScale(12),
    },
    optionRowWrong: {
      borderWidth: scale(1.6),
      borderColor: 'rgba(221,68,51,.5)',
      backgroundColor: 'rgba(221,68,51,.05)',
    },
    optionRowCorrect: {
      borderWidth: scale(1.6),
      borderColor: '#1C9B57',
      backgroundColor: 'rgba(28,155,87,.07)',
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
    optionBadgeWrong: {
      borderWidth: 0,
      backgroundColor: colors.red,
    },
    optionBadgeCorrect: {
      borderWidth: 0,
      backgroundColor: '#1C9B57',
    },
    optionBadgeText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.ink,
    },
    optionBadgeTextOnColor: {
      color: '#fff',
    },
    optionText: {
      flex: 1,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      color: colors.ink,
    },
    optionTextWrong: {
      fontFamily: 'AnekLatin_600SemiBold',
    },
    optionTextCorrect: {
      fontFamily: 'AnekLatin_700Bold',
    },
    optionTagWrong: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(0.72),
      color: '#C53A2B',
    },
    optionTagCorrect: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(0.72),
      color: '#157A45',
    },
    actionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      marginTop: verticalScale(14),
    },
    revealButton: {
      height: verticalScale(44),
      paddingHorizontal: scale(18),
      borderRadius: scale(99),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    revealButtonDisabled: {
      opacity: 0.5,
    },
    revealButtonText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: colors.ink,
    },
    nextInlineText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.slate,
      paddingHorizontal: scale(6),
    },
    reportRow: {
      marginLeft: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
    },
    reportText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.faint,
    },
    stuckCard: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.08)',
      borderRadius: scale(14),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(16),
      marginTop: verticalScale(12),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1.5) },
      shadowOpacity: 0.05,
      shadowRadius: scale(2),
      elevation: 1,
    },
    stuckTextBlock: {
      flex: 1,
      minWidth: 0,
    },
    stuckTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: colors.ink,
    },
    stuckSubtitle: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(11),
      color: colors.slate,
      marginTop: verticalScale(1),
    },
    learnButton: {
      flexShrink: 0,
      height: verticalScale(38),
      paddingHorizontal: scale(15),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      alignItems: 'center',
      justifyContent: 'center',
    },
    learnButtonText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.paper,
    },
    explainCard: {
      backgroundColor: '#16130E',
      borderRadius: scale(16),
      paddingVertical: verticalScale(16),
      paddingHorizontal: scale(18),
      marginTop: verticalScale(12),
      shadowColor: '#16130E',
      shadowOffset: { width: 0, height: verticalScale(6) },
      shadowOpacity: 0.35,
      shadowRadius: scale(11),
      elevation: 5,
    },
    explainOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: '#F5CB60',
    },
    explainBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(20.15),
      color: '#C7C1B3',
      marginTop: verticalScale(7),
    },
    explainBodyBold: {
      fontFamily: 'AnekLatin_700Bold',
      color: '#fff',
    },
    explainTagline: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(13),
      color: '#F5CB60',
      marginTop: verticalScale(8),
    },
    deeperButton: {
      alignSelf: 'flex-start',
      paddingVertical: verticalScale(9),
      paddingHorizontal: scale(15),
      borderRadius: scale(99),
      backgroundColor: colors.marigold,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: verticalScale(12),
    },
    deeperButtonText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: '#241a08',
    },
    progressRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      marginTop: verticalScale(12),
    },
    progressCard: {
      flex: 1,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.08)',
      borderRadius: scale(14),
      paddingVertical: verticalScale(11),
      paddingHorizontal: scale(14),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1.5) },
      shadowOpacity: 0.05,
      shadowRadius: scale(2),
      elevation: 1,
    },
    progressTopRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    progressLabel: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(12),
      color: colors.slate,
    },
    progressStats: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(12),
      color: colors.ink,
    },
    progressStatsBold: {
      fontFamily: 'AnekLatin_700Bold',
    },
    progressStatsCorrect: {
      fontFamily: 'AnekLatin_700Bold',
      color: '#157A45',
    },
    progressTrack: {
      height: verticalScale(6),
      borderRadius: scale(99),
      backgroundColor: '#EEE6D4',
      overflow: 'hidden',
      marginTop: verticalScale(7),
    },
    progressFill: {
      height: '100%',
      borderRadius: scale(99),
      backgroundColor: '#1C9B57',
    },
    nextButton: {
      flexShrink: 0,
      height: verticalScale(46),
      paddingHorizontal: scale(22),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(6) },
      shadowOpacity: 0.28,
      shadowRadius: scale(10),
      elevation: 4,
    },
    nextButtonText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(14),
      color: colors.paper,
    },
  });
}

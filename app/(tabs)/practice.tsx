import { router } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path, Rect } from 'react-native-svg';

import { MathText } from '@/components/math-text';
import { PracticeTabsHeader } from '@/components/practice-tabs-header';
import { RuledPaper } from '@/components/ruled-paper';
import { Skeleton, stagger } from '@/components/skeleton';
import { SlidingToggle } from '@/components/sliding-toggle';
import { SolutionSteps } from '@/components/solution-steps';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import {
  AnswerResult,
  NextQuestion,
  getNextQuestion,
  parseAnswerSolution,
  submitAnswer,
} from '@/lib/practice';
import { getCatalogue } from '@/lib/drona';
import { DEFAULT_PRACTICE_FOCUS, usePracticeFocus } from '@/lib/practice-focus-context';
import { ProgressChapter, getCachedProgress, getProgress } from '@/lib/progress';

const SUBJECTS = ['Physics', 'Chem', 'Maths'] as const;

// UI labels -> the subject strings the API's questions table actually uses.
const SUBJECT_QUERY: Record<(typeof SUBJECTS)[number], string> = {
  Physics: 'physics',
  Chem: 'chemistry',
  Maths: 'mathematics',
};



export default function PracticeScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [activeSegment, setActiveSegment] = useState<'unlimited' | 'mock'>('unlimited');
  // The mock gate reads the same /progress payload Progress renders — the
  // chapters it asks the student to clear are their real needs_revision
  // chapters, not an invented list.
  const [reviseChapters, setReviseChapters] = useState<ProgressChapter[]>(() =>
    weakChaptersFrom(getCachedProgress())
  );
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

  const revealed = answerResult !== null;

  /**
   * Drona routes carry a real chapterId whenever the catalogue (cached,
   * usually already resolved) can name-match the question's chapter — the
   * title-only push used to start a chapterless session on the blank
   * scoping screen.
   */
  const goLearnChapter = async (chapterTitle: string | null) => {
    const title = chapterTitle ?? 'this topic';
    let chapterId: string | undefined;
    try {
      const catalogue = await getCatalogue();
      const wanted = title.trim().toLowerCase();
      for (const subj of catalogue) {
        const hit = subj.chapters.find((ch) => ch.name.trim().toLowerCase() === wanted);
        if (hit) {
          chapterId = hit.id;
          break;
        }
      }
    } catch {
      // No catalogue — the title still names the chapter for scoping.
    }
    router.push({
      pathname: '/entering-classroom',
      params: chapterId ? { chapterId, chapterTitle: title } : { chapterTitle: title },
    });
  };

  const solutionSteps = useMemo(
    () => (answerResult ? parseAnswerSolution(answerResult.solution) : []),
    [answerResult]
  );

  /**
   * The rail only closes with a ✓ Final answer when the screen isn't already
   * showing it: an MCQ tags its correct option in the list above, but a
   * numerical question has nowhere else to put the value.
   */
  const numericAnswer =
    question?.question_type === 'numerical' && answerResult?.correct_value != null
      ? String(answerResult.correct_value)
      : null;

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

  useEffect(() => {
    if (activeSegment !== 'mock') return;
    let cancelled = false;
    getProgress()
      .then((data) => {
        if (!cancelled) setReviseChapters(weakChaptersFrom(data));
      })
      .catch(() => {
        // The cached seed (possibly empty) stands; the copy handles both.
      });
    return () => {
      cancelled = true;
    };
  }, [activeSegment]);

  /**
   * Fetches the question after this one while the student is still reading the
   * current solution, so tapping Next swaps instantly instead of waiting on a
   * measured ~2.5-3.5s round-trip. Discarded silently on failure — Next falls
   * back to fetching normally, so a failed prefetch costs nothing.
   */
  const prefetchedRef = useRef<NextQuestion | null>(null);
  const prefetchSubjectRef = useRef(activeSubject);

  function prefetchNext() {
    prefetchedRef.current = null;
    prefetchSubjectRef.current = activeSubject;
    getNextQuestion({ subject: SUBJECT_QUERY[activeSubject] })
      .then((result) => {
        // Drop it if the student changed subject meanwhile — a Physics
        // question must never appear under the Chemistry pill.
        if ('exhausted' in result || prefetchSubjectRef.current !== activeSubject) return;
        prefetchedRef.current = result;
      })
      .catch(() => {
        prefetchedRef.current = null;
      });
  }

  async function loadQuestion() {
    setLoadError(null);
    setPoolMessage(null);
    setSelectedOption(null);
    setNumericInput('');
    setAnswerResult(null);

    // Already have the next one waiting — no spinner, no wait.
    const ready = prefetchedRef.current;
    if (ready && prefetchSubjectRef.current === activeSubject) {
      prefetchedRef.current = null;
      setQuestion(ready);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      // /practice/next's live PracticeNextRequest schema (confirmed via
      // GET /openapi.json) only accepts exam/class_level/subject — no
      // chapter/topic field exists server-side yet, so `focus` can't be
      // sent along here. It still drives this effect's re-fetch and the
      // chip label below; wiring the request itself is a follow-up once
      // the backend adds chapter-scoping. A single fetch, not a
      // retry-until-MCQ loop — the numerical UI below renders those
      // questions natively, and chaining extra round-trips just to avoid
      // them was adding real, needless latency to every question load.
      const result = await getNextQuestion({ subject: SUBJECT_QUERY[activeSubject] });
      if ('exhausted' in result) {
        setPoolMessage(result.message);
        setQuestion(null);
      } else {
        setQuestion(result);
      }
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
      // The student now has a solution to read — use that time to fetch what
      // comes next, so Next feels instant.
      prefetchNext();
    } catch (err) {
      setLoadError(err instanceof Error ? err.message : 'Could not submit that answer.');
    } finally {
      setSubmitting(false);
    }
  }

  async function submitNumeric() {
    const value = parseFloat(numericInput);
    if (!question || submitting || Number.isNaN(value)) return;
    setSubmitting(true);
    try {
      const result = await submitAnswer({
        question_id: question.question_id,
        chosen_value: value,
      });
      setAnswerResult(result);
      prefetchNext();
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
                <View style={styles.previewBadge}>
                  <Text style={styles.previewBadgeText}>Preview</Text>
                </View>
              </View>

              <View style={styles.dronaCallCard}>
                <Text style={styles.dronaCallOverline}>Drona&apos;s call</Text>
                <Text style={styles.dronaCallBody}>
                  {reviseChapters.length > 0
                    ? `"${reviseChapters.length} chapter${
                        reviseChapters.length === 1 ? ' is' : 's are'
                      } flagged 'needs revision' — weak spots cost real marks in a full paper. Clear them and I'll open the mock."`
                    : '"Build your base in Practice first — the mock opens once your weak spots are cleared."'}
                </Text>
              </View>

              {reviseChapters.length > 0 && (
                <>
                  <Text style={styles.unlockOverline}>Clear these to unlock</Text>
                  <View style={styles.unlockList}>
                    {reviseChapters.map((item, index) => (
                      <View
                        key={item.chapter_id}
                        style={[
                          styles.unlockRow,
                          index < reviseChapters.length - 1 && styles.unlockRowDivider,
                        ]}>
                        <View style={styles.unlockDot} />
                        <Text style={styles.unlockTitle} numberOfLines={1}>
                          {item.name}
                        </Text>
                        <Pressable
                          style={styles.unlockActionButton}
                          onPress={() =>
                            router.push({
                              pathname: '/entering-classroom',
                              params: { chapterId: item.chapter_id, chapterTitle: item.name },
                            })
                          }>
                          <Text style={styles.unlockActionText}>Learn</Text>
                        </Pressable>
                      </View>
                    ))}
                  </View>
                </>
              )}

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
            <SlidingToggle
              options={SUBJECTS}
              value={activeSubject}
              onChange={setActiveSubject}
              trackStyle={styles.subjectTrack}
              thumbStyle={styles.subjectThumb}
              pillStyle={styles.subjectPill}
              textStyle={styles.subjectPillText}
              textActiveStyle={styles.subjectPillTextActive}
            />
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
            <QuestionSkeleton styles={styles} verticalScale={verticalScale} />
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
            <MathText
              text={question.question_text ?? ''}
              fontSize={scale(15)}
              lineHeight={scale(22.5)}
              color={colors.ink}
              style={styles.questionBody}
            />
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
                  disabled={!numericInput.trim() || submitting || loading}
                  onPress={submitNumeric}>
                  {submitting ? (
                    <ActivityIndicator size="small" color={colors.ink} />
                  ) : (
                    <Text style={styles.revealButtonText}>Submit</Text>
                  )}
                </Pressable>
              )}
            </View>
          ) : (
          <View style={styles.optionsList}>
            {optionEntries.map(([key, text]) => {
              const isYourWrongPick = revealed && selectedOption === key && !answerResult?.is_correct;
              const isCorrectReveal =
                revealed && answerResult?.correct_option?.toLowerCase() === key.toLowerCase();
              // Grading is a real ~2s server round-trip (measured live). Every
              // style here used to key off `revealed`, so for those two seconds
              // a tap changed nothing at all and the screen looked frozen.
              // The choice is now acknowledged instantly and the others recede,
              // so the wait reads as "checking" rather than "broken".
              const isPending = submitting && selectedOption === key;
              const isDimmed = submitting && selectedOption !== key;
              return (
                <Pressable
                  key={key}
                  disabled={revealed || submitting || loading}
                  onPress={() => selectOption(key)}
                  style={[
                    styles.optionRow,
                    revealed && styles.optionRowRevealed,
                    isPending && styles.optionRowPending,
                    isDimmed && styles.optionRowDimmed,
                    isYourWrongPick && styles.optionRowWrong,
                    isCorrectReveal && styles.optionRowCorrect,
                  ]}>
                  <View
                    style={[
                      styles.optionBadge,
                      isPending && styles.optionBadgePending,
                      isYourWrongPick && styles.optionBadgeWrong,
                      isCorrectReveal && styles.optionBadgeCorrect,
                    ]}>
                    <Text
                      style={[
                        styles.optionBadgeText,
                        (isPending || isYourWrongPick || isCorrectReveal) &&
                          styles.optionBadgeTextOnColor,
                      ]}>
                      {key.toUpperCase()}
                    </Text>
                  </View>
                  <MathText
                    text={text}
                    fontSize={scale(14)}
                    lineHeight={scale(19.6)}
                    color={colors.ink}
                    fontWeight={isPending || isYourWrongPick || isCorrectReveal ? '700' : '400'}
                    style={styles.optionText}
                  />
                  {isPending && <ActivityIndicator size="small" color={colors.ink} />}
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
                <Pressable onPress={loadQuestion} hitSlop={10}>
                  <Text style={styles.nextInlineText}>Skip →</Text>
                </Pressable>
                {/* No Report control: the report endpoint only accepts doubt
                    ids today, so a practice-question report could never
                    submit. It returns with a /practice report endpoint. */}
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
                  onPress={() => goLearnChapter(question.chapter_name)}>
                  <Text style={styles.learnButtonText}>Learn this →</Text>
                </Pressable>
              </View>
            </>
          ) : (
            <>
              {/* The working is content, not a widget: a rule, an eyebrow and
                  the same numbered rail Doubts and Snap are read on. The card
                  it used to sit in — ruled paper, ink border, drop shadow, a
                  sticker badge and a marigold pill inside — carried more
                  weight than the question above it. */}
              <View style={styles.explainSection}>
                <View style={styles.explainDivider} />
                <Text style={styles.explainEyebrow}>
                  {answerResult?.is_correct ? 'WHY THAT’S RIGHT' : 'HOW IT’S SOLVED'}
                </Text>

                {solutionSteps.length > 0 ? (
                  <SolutionSteps
                    size="compact"
                    steps={solutionSteps}
                    // A picked option already carries its own CORRECT tag, so
                    // repeating it here would only be noise. A numerical answer
                    // has nothing else showing it.
                    answer={numericAnswer}
                  />
                ) : (
                  <Text style={styles.explainEmpty}>
                    No worked solution is available for this question yet.
                  </Text>
                )}
              </View>

              <View style={styles.revealedActions}>
                <Pressable hitSlop={8} onPress={() => goLearnChapter(question.chapter_name)}>
                  <Text style={styles.deeperLinkText}>Go deeper with Drona →</Text>
                </Pressable>
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

/** The real needs_revision chapters from /progress, worst mastery first. */
function weakChaptersFrom(data: ReturnType<typeof getCachedProgress>): ProgressChapter[] {
  if (!data) return [];
  return data.subjects
    .flatMap((s) => s.chapters)
    .filter((ch) => ch.state === 'needs_revision')
    .sort((a, b) => a.mastery - b.mastery)
    .slice(0, 3);
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

// Mimics the loaded question-card + option-row layout so the ~5-10s real
/**
 * The whole page while a question is in flight — card, options, the action row
 * and the "Stuck or curious?" block below it.
 *
 * It used to stop after the options, which is why the top of the screen looked
 * like it was loading and the bottom looked broken. A placeholder has to reach
 * as far down as the real content does.
 *
 * The card carries its own ruled paper and red margin rule, so the question
 * lands into the card that was already there instead of replacing a flat box.
 */
function QuestionSkeleton({
  styles,
  verticalScale,
}: {
  styles: ReturnType<typeof createStyles>;
  verticalScale: (size: number) => number;
}) {
  return (
    <>
      <View style={styles.questionCard}>
        <RuledPaper step={verticalScale(25)} color="rgba(28,26,22,.06)" count={14} />
        <View style={styles.questionRule} />
        <Skeleton delay={0} style={styles.skeletonOverline} />
        <Skeleton delay={60} style={styles.skeletonBodyLine} />
        <Skeleton delay={120} style={styles.skeletonBodyLineFull} />
        <Skeleton delay={180} style={styles.skeletonBodyLineShort} />
      </View>

      <View style={styles.optionsList}>
        {[0, 1, 2, 3].map((i) => (
          <View key={i} style={styles.optionRow}>
            <Skeleton delay={stagger(i) + 240} style={[styles.optionBadge, styles.skeletonBadge]} />
            <Skeleton delay={stagger(i) + 240} style={styles.skeletonOptionLine} />
          </View>
        ))}
      </View>

      <View style={styles.actionRow}>
        <Skeleton delay={480} style={styles.skeletonSkip} />
      </View>

      <View style={styles.stuckCard}>
        <View style={styles.stuckTextBlock}>
          <Skeleton delay={540} style={styles.skeletonStuckTitle} />
          <Skeleton delay={600} style={styles.skeletonStuckSub} />
        </View>
        <Skeleton delay={600} style={styles.skeletonLearnButton} />
      </View>
    </>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
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
    filterRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      marginTop: verticalScale(14),
    },
    subjectTrack: {
      padding: scale(3),
      backgroundColor: 'rgba(28,26,22,.055)',
      borderRadius: scale(99),
    },
    subjectPill: {
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(12),
      borderRadius: scale(99),
    },
    subjectThumb: {
      backgroundColor: '#fff',
      borderRadius: scale(99),
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
      fontSize: scale(18),
      letterSpacing: scale(-0.19),
      color: colors.ink,
    },
    previewBadge: {
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.16)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(3),
      paddingHorizontal: scale(10),
    },
    previewBadgeText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      letterSpacing: scale(0.5),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    dronaCallCard: {
      backgroundColor: '#FCF4E0',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.4)',
      borderRadius: scale(16),
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
    skeletonOverline: {
      width: '40%',
      height: verticalScale(9),
    },
    skeletonBodyLine: {
      width: '92%',
      height: verticalScale(14),
      marginTop: verticalScale(10),
    },
    skeletonBodyLineFull: {
      width: '85%',
      height: verticalScale(14),
      marginTop: verticalScale(8),
    },
    skeletonBodyLineShort: {
      width: '68%',
      height: verticalScale(14),
      marginTop: verticalScale(8),
    },
    skeletonBadge: {
      borderWidth: 0,
      borderRadius: scale(8),
    },
    skeletonOptionLine: {
      flex: 1,
      height: verticalScale(14),
    },
    // The row below the options — "Skip →" on the left, "Report" on the right.
    skeletonSkip: {
      width: scale(46),
      height: verticalScale(11),
    },
    skeletonStuckTitle: {
      width: '58%',
      height: verticalScale(13),
    },
    skeletonStuckSub: {
      width: '88%',
      height: verticalScale(10),
      marginTop: verticalScale(7),
    },
    skeletonLearnButton: {
      width: scale(94),
      height: verticalScale(38),
      borderRadius: scale(99),
    },
    questionCard: {
      position: 'relative',
      backgroundColor: '#fff',
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
    // Instant acknowledgement of a tap, held for the ~2s grading round-trip.
    // Deliberately ink/neutral rather than green or red: the answer isn't
    // known yet, and hinting either way before the server replies would be a
    // lie the reveal then contradicts.
    optionRowPending: {
      borderColor: colors.ink,
      backgroundColor: '#FBF9F2',
    },
    optionRowDimmed: {
      opacity: 0.45,
    },
    optionBadgePending: {
      backgroundColor: colors.ink,
      borderColor: colors.ink,
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
    stuckCard: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.08)',
      borderRadius: scale(16),
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
    explainSection: {
      marginTop: verticalScale(22),
    },
    explainDivider: {
      height: 1,
      backgroundColor: 'rgba(28,26,22,.12)',
      marginBottom: verticalScale(16),
    },
    explainEyebrow: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.1),
      color: colors.faint,
      marginBottom: verticalScale(16),
    },
    explainEmpty: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      color: colors.faint,
    },
    revealedActions: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: verticalScale(24),
    },
    deeperLinkText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: colors.amberText,
    },
    nextButton: {
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

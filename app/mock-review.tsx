import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { PageSkeleton, StateCard, StateLine } from '@/components/states';
import { FlagIcon } from '@/components/ask-follow-up';
import { MathLine } from '@/components/math-line';
import { MockKey, MockSection, MockSquareKey } from '@/components/mock/mock-kit';
import { QuestionStem } from '@/components/question-stem';
import { SolutionSteps } from '@/components/solution-steps';
import { colors } from '@/constants/brand';
import { pageTitle } from '@/constants/page-title';
import { QUESTION_READ_LINE, QUESTION_READ_SIZE, READ_LINE, READ_SIZE } from '@/constants/reading';
import { useScale } from '@/constants/scale';
import { fetchReport, getMockSession } from '@/lib/mock';
import { buildReport, formatSpan, loadReport, type MockReport } from '@/lib/mock-report';
import { parseAnswerSolution, type AnswerResult } from '@/lib/practice';
import { openReportSheet } from '@/lib/reports';

/**
 * ONE QUESTION OF A FINISHED PAPER, opened from the report's grid.
 *
 * The report used to list every question as a card with the stem and "You
 * put B · …" under it, but never the options themselves, so a student could
 * not see what they had chosen between. This page is the question as it was
 * sat, laid out like Practice after an answer: the stem, every option, the
 * one you picked edged in red if it was wrong, the right one in green, then
 * the working. Arrows move through the paper; "All questions" goes back to
 * the grid.
 */
const SUBJECT_LABEL: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Maths',
  biology: 'Biology',
};

export default function MockReviewScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const { run, i } = useLocalSearchParams<{ run?: string; i?: string }>();
  const [report, setReport] = useState<MockReport | null>(null);
  /** The paper could not be found on this phone or the server. */
  const [missing, setMissing] = useState(false);
  const [index, setIndex] = useState(Math.max(0, Number(i ?? 0) || 0));

  useEffect(() => {
    let cancelled = false;
    // The paper just submitted is still in memory; anything older is on the
    // phone, or rebuilt by the server, as the report itself finds it.
    const session = getMockSession();
    if (session?.result && session.result.mock_run_id === run) {
      setReport(buildReport(session, session.result));
      return;
    }
    if (!run) {
      setMissing(true);
      return;
    }
    loadReport(run)
      .then(async (saved) => saved ?? (await fetchReport(run).catch(() => null)))
      .then((r) => {
        if (cancelled) return;
        setReport(r);
        setMissing(!r);
      });
    return () => {
      cancelled = true;
    };
  }, [run]);

  const q = report?.questions[index];
  const steps = useMemo(
    () => (q ? parseAnswerSolution(q.solution as AnswerResult['solution']) : []),
    [q]
  );

  // Never a blank page: while it loads, or if the paper cannot be found,
  // the way back is still there.
  if (!report || !q) {
    return (
      <View style={styles.screen}>
        <SafeAreaView style={styles.safe} edges={['top']}>
          <View style={styles.topRow}>
            <Pressable
              style={styles.round}
              hitSlop={10}
              accessibilityRole="button"
              accessibilityLabel="Go back"
              onPress={() => router.back()}>
              <BackIcon size={scale(16)} />
            </Pressable>
          </View>
          {missing || (report && !q) ? (
            <View style={styles.loading}>
              <StateCard
                glyph="retry"
                title="This question didn't open"
                line="Check your connection and open it again. Your paper and its report are saved."
                action={{ label: 'Go back', onPress: () => router.back() }}
              />
            </View>
          ) : (
            <View style={styles.loading}>
              <PageSkeleton />
            </View>
          )}
        </SafeAreaView>
      </View>
    );
  }

  const total = report.questions.length;
  const verdict = !q.answered ? 'skipped' : q.is_correct ? 'right' : 'wrong';
  const options = q.options ? Object.entries(q.options).sort(([a], [b]) => a.localeCompare(b)) : [];
  const go = (to: number) => setIndex(Math.max(0, Math.min(total - 1, to)));

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        <View style={styles.topRow}>
          <Pressable
            style={styles.round}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel="All questions"
            onPress={() => router.back()}
          >
            <BackIcon size={scale(16)} />
          </Pressable>
          {/* One line: the question and where it sits in the paper. The
              subject and chapter are said once, above the question. */}
          <Text style={styles.title} numberOfLines={1}>
            Question {q.num}
            <Text style={styles.titleOf}> of {total}</Text>
          </Text>
          {/* A wrong key or a broken question, reported by the question with
              the paper and what was put attached, as the report did. */}
          <Pressable
            style={styles.round}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel={`Report a mistake in question ${q.num}`}
            onPress={() =>
              openReportSheet({
                surface: 'mock',
                questionId: q.id,
                chapter: q.chapter_name ?? null,
                subject: q.subject,
                context: {
                  run_id: report.run_id,
                  num: q.num,
                  picked: q.chosen_option ?? q.chosen_value,
                  answered: q.answered,
                  marked_correct: q.is_correct,
                },
              })
            }
          >
            <FlagIcon size={scale(15)} />
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={styles.body} key={q.id}>
          {/* Practice's question head, with how it went. */}
          <View style={styles.metaRow}>
            <Text style={styles.meta} numberOfLines={1}>
              {[SUBJECT_LABEL[q.subject] ?? q.subject, q.chapter_name].filter(Boolean).join(' · ')}
            </Text>
            {q.elapsed_ms > 0 && <Text style={styles.time}>{formatSpan(q.elapsed_ms)}</Text>}
            <Text
              style={[
                styles.verdict,
                verdict === 'right' && styles.right,
                verdict === 'wrong' && styles.wrong,
              ]}
            >
              {verdict === 'right' ? 'Right' : verdict === 'wrong' ? 'Wrong' : 'Skipped'}
            </Text>
          </View>
          <QuestionStem
            text={q.stem}
            fontSize={QUESTION_READ_SIZE}
            lineHeight={QUESTION_READ_LINE}
            style={styles.stem}
          />
          <View style={styles.divider} />

          {q.type === 'numerical' ? (
            <View style={styles.numeric}>
              <View style={styles.numericRow}>
                <Text style={styles.numericLabel}>You put</Text>
                <Text
                  style={[
                    styles.numericValue,
                    !q.answered ? styles.nothing : q.is_correct ? styles.right : styles.wrong,
                  ]}
                >
                  {q.chosen_value != null ? String(q.chosen_value) : 'nothing'}
                </Text>
              </View>
              {!q.is_correct && (
                <View style={styles.numericRow}>
                  <Text style={styles.numericLabel}>Right answer</Text>
                  <Text style={[styles.numericValue, styles.right]}>
                    {q.correct_value != null ? String(q.correct_value) : 'not given'}
                  </Text>
                </View>
              )}
            </View>
          ) : (
            <View style={styles.options}>
              {options.map(([key, text]) => {
                const isCorrect = q.correct_option === key;
                const isYourWrong = q.chosen_option === key && !q.is_correct;
                return (
                  <View
                    key={key}
                    style={[
                      styles.option,
                      isCorrect && styles.optionCorrect,
                      isYourWrong && styles.optionWrong,
                    ]}
                  >
                    <View
                      style={[
                        styles.badge,
                        isCorrect && styles.badgeCorrect,
                        isYourWrong && styles.badgeWrong,
                      ]}
                    >
                      <Text
                        style={[styles.badgeText, (isCorrect || isYourWrong) && styles.badgeTextOn]}
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
                    {isYourWrong && <Text style={styles.tagWrong}>YOUR PICK</Text>}
                    {isCorrect && (
                      <Text style={styles.tagCorrect}>
                        {q.chosen_option === key ? 'YOUR PICK' : 'CORRECT'}
                      </Text>
                    )}
                  </View>
                );
              })}
              {!q.answered && <Text style={styles.skippedNote}>You left this one.</Text>}
            </View>
          )}

          <MockSection title="How to solve it" />
          {steps.length > 0 ? (
            <SolutionSteps size="compact" steps={steps} />
          ) : (
            // Said, as Practice says it: the section used to vanish, which
            // read as the page not having loaded.
            <StateLine glyph="paper" text="No worked solution is available for this question yet." />
          )}
        </ScrollView>

        <View style={styles.foot}>
          <MockSquareKey
            label="Previous question"
            disabled={index === 0}
            onPress={() => go(index - 1)}
          >
            <BackIcon size={scale(16)} />
          </MockSquareKey>
          <MockKey
            style={styles.grow}
            label={index === total - 1 ? 'All questions' : 'Next question'}
            arrow={index !== total - 1}
            onPress={() => (index === total - 1 ? router.back() : go(index + 1))}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

function BackIcon({ size }: { size: number }) {
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

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#fff' },
    loading: { marginTop: verticalScale(40) },
    missing: {
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(24),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: colors.slate,
    },
    safe: { flex: 1 },
    topRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(13),
      paddingTop: verticalScale(10),
      paddingHorizontal: scale(20),
    },
    round: {
      width: scale(36),
      height: scale(36),
      borderRadius: scale(18),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.12)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: { flex: 1, minWidth: 0, ...pageTitle(scale) },
    titleOf: { fontFamily: 'Onest_500Medium', fontSize: scale(16), color: colors.faint },
    body: {
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(22),
      paddingBottom: verticalScale(28),
    },
    metaRow: { flexDirection: 'row', alignItems: 'center', gap: scale(10) },
    meta: { flex: 1, fontFamily: 'Onest_400Regular', fontSize: scale(14), color: '#8A857A' },
    time: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(12),
      color: colors.faint,
      fontVariant: ['tabular-nums'],
    },
    verdict: { fontFamily: 'Onest_600SemiBold', fontSize: scale(13), color: colors.faint },
    right: { color: '#157A45' },
    wrong: { color: '#C53A2B' },
    nothing: { color: colors.faint },
    stem: { marginTop: verticalScale(8) },
    divider: { height: 1, backgroundColor: 'rgba(28,25,20,.1)', marginTop: verticalScale(18) },
    /** Practice's option rows after an answer (app/practice.tsx). */
    options: { gap: verticalScale(10), marginTop: verticalScale(18) },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(16),
      borderRadius: scale(14),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,25,20,.12)',
      backgroundColor: '#fff',
    },
    optionWrong: {
      borderWidth: scale(1.6),
      borderColor: 'rgba(221,68,51,.5)',
      backgroundColor: 'rgba(221,68,51,.05)',
    },
    optionCorrect: {
      borderWidth: scale(1.6),
      borderColor: '#1C9B57',
      backgroundColor: 'rgba(28,155,87,.07)',
    },
    badge: {
      width: scale(28),
      height: scale(28),
      flexShrink: 0,
      borderRadius: scale(9),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    badgeWrong: { borderWidth: 0, backgroundColor: colors.red },
    badgeCorrect: { borderWidth: 0, backgroundColor: '#1C9B57' },
    badgeText: { fontFamily: 'Onest_700Bold', fontSize: scale(12), color: colors.ink },
    badgeTextOn: { color: '#fff' },
    optionText: { flex: 1 },
    tagWrong: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(8.1),
      letterSpacing: scale(0.54),
      color: '#C53A2B',
    },
    tagCorrect: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(8.1),
      letterSpacing: scale(0.54),
      color: '#157A45',
    },
    skippedNote: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      marginTop: verticalScale(2),
    },
    numeric: { marginTop: verticalScale(18), gap: verticalScale(8) },
    numericRow: { flexDirection: 'row', alignItems: 'baseline', gap: scale(12) },
    numericLabel: {
      width: scale(100),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      color: colors.slate,
    },
    numericValue: { flex: 1, fontFamily: 'Onest_600SemiBold', fontSize: scale(15) },
    foot: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(12),
      paddingBottom: verticalScale(8),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.06)',
    },
    grow: { flex: 1 },
  });
}

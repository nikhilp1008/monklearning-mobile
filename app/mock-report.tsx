import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { MathText } from '@/components/math-text';
import { QuestionStem } from '@/components/question-stem';
import { SolutionSteps } from '@/components/solution-steps';
import { colors } from '@/constants/brand';
import { pageTitle } from '@/constants/page-title';
import { useScale } from '@/constants/scale';
import { clearMockSession, getMockSession, listMockRuns, type MockRunRow } from '@/lib/mock';
import {
  buildReport,
  formatSpan,
  loadReport,
  mockInsights,
  type MockReport,
  type MockReportQuestion,
} from '@/lib/mock-report';
import { parseAnswerSolution, type AnswerResult } from '@/lib/practice';

/**
 * THE PAPER, EXPLAINED — the day it is sat and any day after.
 *
 * What stood here was a scorecard: a number, three tallies, three subject
 * rows, and a key back to Progress. Everything that would teach a student
 * anything — which questions, what they put, what was right, why — arrived in
 * the submit response and was dropped on the floor.
 *
 * One screen, reached two ways: straight out of a finished paper, and from
 * the list on Mock tests weeks later. Both render the same saved report, so
 * there is no "results screen" that is better than the history.
 *
 * WHAT IT CANNOT SAY YET. A mock question arrives carrying a subject and no
 * chapter, so strong and weak areas are subjects here. Timing is the device's
 * own: `MockAnswer` has no `elapsed_ms` field (practice's does), so a paper
 * sat on another phone shows its score without its clock. Both are on the
 * backend punch list, and both drop into this layout unchanged.
 */

const SUBJECT_LABEL: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Maths',
  biology: 'Biology',
};

type Filter = 'all' | 'wrong' | 'skipped' | 'marked';

export default function MockReportScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const { run } = useLocalSearchParams<{ run?: string }>();

  const [report, setReport] = useState<MockReport | null>(null);
  /** A paper sat on another phone, or before reports were kept: the server
   *  still has its score, so the page shows that rather than nothing. */
  const [row, setRow] = useState<MockRunRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>('all');
  const [open, setOpen] = useState<string | null>(null);

  /** Fresh out of the paper: this is the run still in memory. */
  const session = getMockSession();
  const isFresh = !!session?.result && (!run || session.result.mock_run_id === run);

  useEffect(() => {
    let cancelled = false;
    const runId = run ?? session?.result?.mock_run_id;
    // The paper just submitted is already in memory and already written to
    // storage; building from the session avoids a read that can only agree.
    if (isFresh && session?.result) {
      setReport(buildReport(session, session.result));
      setLoading(false);
      return;
    }
    if (!runId) {
      setLoading(false);
      return;
    }
    loadReport(runId).then(async (r) => {
      if (cancelled) return;
      setReport(r);
      if (!r) {
        const runs = await listMockRuns().catch(() => []);
        if (!cancelled) setRow(runs.find((x) => x.id === runId) ?? null);
      }
      if (!cancelled) setLoading(false);
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run]);

  const insights = useMemo(() => (report ? mockInsights(report) : null), [report]);

  const counts = useMemo(() => {
    const qs = report?.questions ?? [];
    return {
      all: qs.length,
      wrong: qs.filter((q) => q.answered && !q.is_correct).length,
      skipped: qs.filter((q) => !q.answered).length,
      marked: qs.filter((q) => q.marked).length,
    };
  }, [report]);

  const shown = useMemo(() => {
    const qs = report?.questions ?? [];
    if (filter === 'wrong') return qs.filter((q) => q.answered && !q.is_correct);
    if (filter === 'skipped') return qs.filter((q) => !q.answered);
    if (filter === 'marked') return qs.filter((q) => q.marked);
    return qs;
  }, [report, filter]);

  const leave = () => {
    // Leaving the fresh report is what ends the session. Its report is on the
    // device by then, so nothing is lost by dropping the paper from memory.
    if (isFresh) {
      clearMockSession();
      router.dismissTo('/progress');
      return;
    }
    router.back();
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.topRow}>
          <Pressable
            style={styles.backButton}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel="Go back"
            onPress={leave}>
            <BackArrowIcon size={scale(16)} />
          </Pressable>
          <Text style={styles.title}>Your scorecard</Text>
        </View>

        {loading ? (
          <View style={styles.centre} />
        ) : !report ? (
          <ScrollView contentContainerStyle={styles.listInner}>
            {row?.score ? (
              <>
                <Text style={styles.subtitle}>
                  {formatDay(row.submitted_at ?? row.created_at)} ·{' '}
                  {row.exam === 'neet' ? 'NEET UG' : 'JEE Main'} pattern
                </Text>
                <View style={styles.card}>
                  <Text style={styles.scoreValue}>
                    {row.score.total_marks}
                    <Text style={styles.scoreCeiling}> / {row.score.max_marks}</Text>
                  </Text>
                  <Text style={styles.scoreCaption}>marks</Text>
                  <View style={styles.tallyRow}>
                    <View style={styles.tallyChip}>
                      <Text style={[styles.tallyValue, styles.tallyCorrect]}>
                        {row.score.correct}
                      </Text>
                      <Text style={styles.tallyLabel}>correct</Text>
                    </View>
                    <View style={styles.tallyChip}>
                      <Text style={[styles.tallyValue, styles.tallyWrong]}>{row.score.wrong}</Text>
                      <Text style={styles.tallyLabel}>wrong</Text>
                    </View>
                    <View style={styles.tallyChip}>
                      <Text style={styles.tallyValue}>{row.score.unanswered}</Text>
                      <Text style={styles.tallyLabel}>skipped</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.card}>
                  <Text style={styles.overline}>By subject</Text>
                  {Object.entries(row.score.per_subject).map(([subject, st]) => (
                    <View key={subject} style={styles.standRow}>
                      <Text style={styles.standLabel}>{SUBJECT_LABEL[subject] ?? subject}</Text>
                      <Text style={styles.standValue}>{st.marks}</Text>
                    </View>
                  ))}
                </View>
              </>
            ) : null}
            <Text style={styles.missingHead}>
              {row?.score
                ? 'The questions from this paper are not on this phone'
                : 'This paper is not on this phone'}
            </Text>
            <Text style={styles.missingBody}>
              A question-by-question report is kept on the device that sat the paper. Papers you sit
              from now on keep theirs.
            </Text>
          </ScrollView>
        ) : (
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listInner}
            data={shown}
            keyExtractor={(q) => q.id}
            initialNumToRender={6}
            windowSize={7}
            removeClippedSubviews
            ListHeaderComponent={
              <ReportHeader
                report={report}
                insights={insights!}
                styles={styles}
                counts={counts}
                filter={filter}
                setFilter={setFilter}
                scale={scale}
              />
            }
            ListEmptyComponent={
              <Text style={styles.emptyLine}>
                {filter === 'wrong'
                  ? 'Nothing wrong in this paper.'
                  : filter === 'skipped'
                    ? 'You answered every question.'
                    : 'You marked nothing for review.'}
              </Text>
            }
            renderItem={({ item }) => (
              <QuestionRow
                q={item}
                styles={styles}
                scale={scale}
                open={open === item.id}
                onToggle={() => setOpen(open === item.id ? null : item.id)}
              />
            )}
          />
        )}

        {isFresh && (
          <View style={styles.footer}>
            <Pressable style={styles.key} onPress={leave}>
              <Text style={styles.keyText}>Back to Progress</Text>
            </Pressable>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}

function ReportHeader({
  report,
  insights,
  styles,
  counts,
  filter,
  setFilter,
  scale,
}: {
  report: MockReport;
  insights: ReturnType<typeof mockInsights>;
  styles: ReturnType<typeof createStyles>;
  counts: Record<Filter, number>;
  filter: Filter;
  setFilter: (f: Filter) => void;
  scale: (n: number) => number;
}) {
  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'wrong', label: 'Wrong' },
    { key: 'skipped', label: 'Skipped' },
    { key: 'marked', label: 'Marked' },
  ];
  const timed = insights.timeMs > 0;

  return (
    <>
      <Text style={styles.subtitle}>
        {formatDay(report.submitted_at)} · {report.exam === 'neet' ? 'NEET UG' : 'JEE Main'} pattern
      </Text>

      <View style={styles.card}>
        <Text style={styles.scoreValue}>
          {report.total_marks}
          <Text style={styles.scoreCeiling}> / {report.max_marks}</Text>
        </Text>
        <Text style={styles.scoreCaption}>marks</Text>
        <View style={styles.tallyRow}>
          <View style={styles.tallyChip}>
            <Text style={[styles.tallyValue, styles.tallyCorrect]}>{report.correct}</Text>
            <Text style={styles.tallyLabel}>correct</Text>
          </View>
          <View style={styles.tallyChip}>
            <Text style={[styles.tallyValue, styles.tallyWrong]}>{report.wrong}</Text>
            <Text style={styles.tallyLabel}>wrong</Text>
          </View>
          <View style={styles.tallyChip}>
            <Text style={styles.tallyValue}>{report.unanswered}</Text>
            <Text style={styles.tallyLabel}>skipped</Text>
          </View>
        </View>
      </View>

      {/* WHERE YOU STOOD. Ranked on accuracy, not marks — a subject with 40
          questions left blank can out-score the one you were better at. */}
      <View style={styles.card}>
        <Text style={styles.overline}>Where you stood</Text>
        {insights.strongest && insights.weakest && (
          <>
            <View style={styles.standRow}>
              <Text style={styles.standLabel}>Strongest</Text>
              <Text style={styles.standValue}>
                {SUBJECT_LABEL[insights.strongest.subject] ?? insights.strongest.subject}
                <Text style={styles.standPct}>
                  {'  '}
                  {Math.round((insights.strongest.accuracy ?? 0) * 100)}%
                </Text>
              </Text>
            </View>
            <View style={styles.standRow}>
              <Text style={styles.standLabel}>To improve</Text>
              <Text style={styles.standValue}>
                {SUBJECT_LABEL[insights.weakest.subject] ?? insights.weakest.subject}
                <Text style={styles.standPct}>
                  {'  '}
                  {Math.round((insights.weakest.accuracy ?? 0) * 100)}%
                </Text>
              </Text>
            </View>
          </>
        )}
        <View style={styles.standRow}>
          <Text style={styles.standLabel}>Lost to wrong answers</Text>
          <Text style={styles.standValue}>−{insights.lostToWrong}</Text>
        </View>
        <View style={styles.standRow}>
          <Text style={styles.standLabel}>Left on the table</Text>
          <Text style={styles.standValue}>{insights.leftOnTable}</Text>
        </View>
        <Text style={styles.cardFootnote}>
          Accuracy counts only the questions you attempted. &quot;Left on the table&quot; is what
          the {report.unanswered} you skipped were worth.
        </Text>
      </View>

      {/* TIME. The device's own stopwatch — see lib/mock-report.ts. */}
      {timed && (
        <View style={styles.card}>
          <Text style={styles.overline}>Time</Text>
          <View style={styles.standRow}>
            <Text style={styles.standLabel}>On the paper</Text>
            <Text style={styles.standValue}>{formatSpan(insights.timeMs)}</Text>
          </View>
          <View style={styles.standRow}>
            <Text style={styles.standLabel}>Typical question</Text>
            <Text style={styles.standValue}>
              {insights.medianMs != null ? formatSpan(insights.medianMs) : '—'}
            </Text>
          </View>
          <View style={styles.timeDivider} />
          {insights.subjects.map((s) => {
            const share = insights.timeMs ? s.timeMs / insights.timeMs : 0;
            return (
              <View key={s.subject} style={styles.timeRow}>
                <Text style={styles.timeSubject}>{SUBJECT_LABEL[s.subject] ?? s.subject}</Text>
                <View style={styles.timeTrack}>
                  <View style={[styles.timeFill, { width: `${Math.round(share * 100)}%` }]} />
                </View>
                <Text style={styles.timeValue}>{formatSpan(s.timeMs)}</Text>
              </View>
            );
          })}
          <Text style={styles.cardFootnote}>
            Measured on this phone while the paper was open, so a pause does not count against a
            question.
          </Text>
        </View>
      )}

      <View style={styles.sectionTitleRow}>
        <View style={styles.sectionDash} />
        <Text style={styles.sectionTitle}>Question by question</Text>
      </View>

      <View style={styles.filterRow}>
        {filters.map((f) => {
          const on = filter === f.key;
          return (
            <Pressable
              key={f.key}
              style={[styles.filterChip, on && styles.filterChipOn]}
              onPress={() => setFilter(f.key)}>
              <Text style={[styles.filterText, on && styles.filterTextOn]}>
                {f.label} {counts[f.key]}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <View style={{ height: scale(2) }} />
    </>
  );
}

function QuestionRow({
  q,
  styles,
  scale,
  open,
  onToggle,
}: {
  q: MockReportQuestion;
  styles: ReturnType<typeof createStyles>;
  scale: (n: number) => number;
  open: boolean;
  onToggle: () => void;
}) {
  const verdict = !q.answered ? 'skipped' : q.is_correct ? 'right' : 'wrong';
  const steps = useMemo(
    () => parseAnswerSolution(q.solution as AnswerResult['solution']),
    [q.solution]
  );
  const yours =
    q.type === 'numerical'
      ? q.chosen_value != null
        ? String(q.chosen_value)
        : null
      : q.chosen_option
        ? `${q.chosen_option.toUpperCase()} · ${q.options?.[q.chosen_option] ?? ''}`
        : null;
  const right =
    q.type === 'numerical'
      ? q.correct_value != null
        ? String(q.correct_value)
        : null
      : q.correct_option
        ? `${q.correct_option.toUpperCase()} · ${q.options?.[q.correct_option] ?? ''}`
        : null;

  return (
    <View style={styles.qCard}>
      <View style={styles.qTopRow}>
        <Text style={styles.qMeta}>
          Q{q.num} · {SUBJECT_LABEL[q.subject] ?? q.subject}
        </Text>
        {q.marked && <Text style={styles.qMarked}>⚑</Text>}
        {q.elapsed_ms > 0 && <Text style={styles.qTime}>{formatSpan(q.elapsed_ms)}</Text>}
        <View
          style={[
            styles.verdict,
            verdict === 'right' && styles.verdictRight,
            verdict === 'wrong' && styles.verdictWrong,
          ]}>
          <Text
            style={[
              styles.verdictText,
              verdict === 'right' && styles.verdictTextRight,
              verdict === 'wrong' && styles.verdictTextWrong,
            ]}>
            {verdict}
          </Text>
        </View>
      </View>

      <QuestionStem
        text={q.stem}
        fontSize={scale(14)}
        lineHeight={scale(21)}
        style={styles.qStem}
      />

      <View style={styles.answerRow}>
        <Text style={styles.answerLabel}>You put</Text>
        {yours ? (
          <MathText
            text={yours}
            fontSize={scale(13)}
            lineHeight={scale(19)}
            color={q.is_correct ? colors.masteryStrong : colors.red}
            style={styles.answerValue}
          />
        ) : (
          <Text style={[styles.answerValue, styles.answerNothing]}>nothing</Text>
        )}
      </View>
      {!q.is_correct && (
        <View style={styles.answerRow}>
          <Text style={styles.answerLabel}>Right answer</Text>
          {right ? (
            <MathText
              text={right}
              fontSize={scale(13)}
              lineHeight={scale(19)}
              color={colors.masteryStrong}
              style={styles.answerValue}
            />
          ) : (
            <Text style={[styles.answerValue, styles.answerNothing]}>not given</Text>
          )}
        </View>
      )}

      {steps.length > 0 && (
        <>
          <Pressable style={styles.whyRow} hitSlop={8} onPress={onToggle}>
            <Text style={styles.whyText}>{open ? 'Hide the working' : 'Why that is the answer'}</Text>
            <ChevronIcon size={scale(13)} down={!open} />
          </Pressable>
          {open && (
            <View style={styles.solution}>
              <SolutionSteps size="compact" steps={steps} />
            </View>
          )}
        </>
      )}
    </View>
  );
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDay(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const stem = `${d.getDate()} ${MONTHS[d.getMonth()]}`;
  return d.getFullYear() === new Date().getFullYear() ? stem : `${stem} ${d.getFullYear()}`;
}

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

function ChevronIcon({ size, down }: { size: number; down: boolean }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d={down ? 'M5 9l7 7 7-7' : 'M5 15l7-7 7 7'}
        stroke={colors.slate}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#fff' },
    safeArea: { flex: 1 },
    topRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingTop: verticalScale(8),
      paddingHorizontal: scale(20),
    },
    backButton: {
      width: scale(36),
      height: scale(36),
      flexShrink: 0,
      borderRadius: scale(18),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.16)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    /** The app's one page-title tier — see constants/page-title.ts. */
    title: { flex: 1, minWidth: 0, ...pageTitle(scale) },
    centre: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: scale(28),
      paddingBottom: verticalScale(40),
    },
    missingHead: {
      marginTop: verticalScale(24),
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      lineHeight: scale(21),
      color: colors.ink,
      textAlign: 'center',
    },
    missingBody: {
      marginTop: verticalScale(6),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19),
      color: colors.slate,
      textAlign: 'center',
    },
    list: { flex: 1, minHeight: 0 },
    listInner: {
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(24),
    },
    subtitle: {
      marginTop: verticalScale(2),
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.faint,
    },
    card: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.08)',
      borderRadius: scale(16),
      paddingVertical: verticalScale(16),
      paddingHorizontal: scale(18),
      marginTop: verticalScale(14),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1.5) },
      shadowOpacity: 0.05,
      shadowRadius: scale(2),
      elevation: 1,
    },
    overline: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.0),
      letterSpacing: scale(1.05),
      textTransform: 'uppercase',
      color: colors.faint,
      marginBottom: verticalScale(10),
    },
    scoreValue: {
      textAlign: 'center',
      fontFamily: 'Onest_700Bold',
      fontSize: scale(40),
      lineHeight: scale(46),
      letterSpacing: scale(-1.2),
      color: colors.ink,
    },
    scoreCeiling: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(19),
      color: colors.faint,
    },
    scoreCaption: {
      textAlign: 'center',
      fontFamily: 'Onest_500Medium',
      fontSize: scale(12),
      color: colors.faint,
      marginTop: verticalScale(2),
    },
    tallyRow: {
      flexDirection: 'row',
      gap: scale(8),
      marginTop: verticalScale(14),
    },
    tallyChip: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: verticalScale(10),
      borderRadius: scale(12),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.1)',
    },
    tallyValue: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(17),
      color: colors.ink,
    },
    tallyCorrect: { color: colors.masteryStrong },
    tallyWrong: { color: colors.red },
    tallyLabel: {
      marginTop: verticalScale(2),
      fontFamily: 'Onest_500Medium',
      fontSize: scale(11),
      color: colors.faint,
    },
    standRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(12),
      paddingVertical: verticalScale(6),
    },
    standLabel: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13.5),
      color: colors.slate,
    },
    standValue: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(14),
      color: colors.ink,
    },
    standPct: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12.5),
      color: colors.faint,
    },
    cardFootnote: {
      marginTop: verticalScale(10),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(11),
      lineHeight: scale(16.5),
      color: colors.faint,
    },
    timeDivider: {
      height: 1,
      backgroundColor: 'rgba(28,26,22,.08)',
      marginVertical: verticalScale(10),
    },
    timeRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingVertical: verticalScale(4),
    },
    timeSubject: {
      width: scale(66),
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12.5),
      color: colors.ink,
    },
    timeTrack: {
      flex: 1,
      height: verticalScale(6),
      borderRadius: scale(99),
      backgroundColor: 'rgba(28,26,22,.07)',
      overflow: 'hidden',
    },
    timeFill: {
      height: '100%',
      borderRadius: scale(99),
      backgroundColor: colors.marigold,
    },
    timeValue: {
      width: scale(56),
      textAlign: 'right',
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    sectionTitleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      marginTop: verticalScale(26),
      marginBottom: verticalScale(12),
    },
    sectionDash: {
      width: scale(18),
      height: verticalScale(2),
      borderRadius: scale(2),
      backgroundColor: colors.marigold,
    },
    sectionTitle: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.0),
      letterSpacing: scale(1.05),
      textTransform: 'uppercase',
      color: colors.ink,
    },
    filterRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(7),
      marginBottom: verticalScale(12),
    },
    filterChip: {
      paddingVertical: verticalScale(7),
      paddingHorizontal: scale(13),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      backgroundColor: '#fff',
    },
    filterChipOn: {
      backgroundColor: colors.ink,
      borderColor: colors.ink,
    },
    filterText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    filterTextOn: {
      fontFamily: 'Onest_700Bold',
      color: colors.paper,
    },
    emptyLine: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19),
      color: colors.faint,
    },
    qCard: {
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.1)',
      borderRadius: scale(14),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(15),
      marginBottom: verticalScale(10),
      backgroundColor: '#fff',
    },
    qTopRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      marginBottom: verticalScale(8),
    },
    qMeta: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.0),
      letterSpacing: scale(1.05),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    qMarked: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(11),
      color: '#9A6A12',
    },
    qTime: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    verdict: {
      borderRadius: scale(99),
      paddingVertical: verticalScale(3),
      paddingHorizontal: scale(9),
      backgroundColor: 'rgba(28,26,22,.05)',
    },
    verdictRight: { backgroundColor: 'rgba(28,155,87,.1)' },
    verdictWrong: { backgroundColor: 'rgba(221,68,51,.08)' },
    verdictText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(10),
      letterSpacing: scale(0.2),
      color: colors.faint,
    },
    verdictTextRight: { color: '#157A45' },
    verdictTextWrong: { color: '#B5301F' },
    qStem: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      lineHeight: scale(21),
      color: colors.ink,
    },
    answerRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: scale(10),
      marginTop: verticalScale(8),
    },
    answerLabel: {
      width: scale(86),
      flexShrink: 0,
      fontFamily: 'Onest_500Medium',
      fontSize: scale(12),
      lineHeight: scale(19),
      color: colors.faint,
    },
    answerValue: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(13),
      lineHeight: scale(19),
    },
    answerNothing: {
      color: colors.faint,
      fontFamily: 'Onest_400Regular',
    },
    whyRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
      marginTop: verticalScale(11),
    },
    whyText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(12.5),
      color: colors.slate,
    },
    solution: {
      marginTop: verticalScale(10),
    },
    footer: {
      flexShrink: 0,
      paddingTop: verticalScale(12),
      paddingBottom: verticalScale(12),
      paddingHorizontal: scale(24),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.08)',
    },
    key: {
      alignItems: 'center',
      justifyContent: 'center',
      height: verticalScale(52),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
    },
    keyText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      color: colors.paper,
    },
  });
}

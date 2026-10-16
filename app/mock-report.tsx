import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { MockKey, MockSection } from '@/components/mock/mock-kit';
import { colors } from '@/constants/brand';
import { pageTitle } from '@/constants/page-title';
import { useScale } from '@/constants/scale';
import {
  clearMockSession,
  fetchReport,
  getMockSession,
  listMockRuns,
  type MockRunRow,
} from '@/lib/mock';
import {
  buildReport,
  formatSpan,
  loadReport,
  mockInsights,
  type MockPrevious,
  type MockReport,
  formatDay,
} from '@/lib/mock-report';
import { usePracticeFocus } from '@/lib/practice-focus-context';

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

export default function MockReportScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const { run } = useLocalSearchParams<{ run?: string }>();

  const [report, setReport] = useState<MockReport | null>(null);
  /** A paper sat on another phone, or before reports were kept: the server
   *  still has its score, so the page shows that rather than nothing. */
  const [row, setRow] = useState<MockRunRow | null>(null);
  const [loading, setLoading] = useState(true);

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
    loadReport(runId).then(async (saved) => {
      if (cancelled) return;
      // Not on this phone: the server rebuilds it. Only when that fails too
      // (no connection) does the page fall back to the score summary.
      // A copy saved before questions carried their chapter has no weak
      // chapters to show; the server's copy does, so it replaces the saved
      // one (fetchReport saves it). Offline, the old copy still opens.
      const stale = !!saved && !saved.questions.some((q) => q.chapter_id);
      const r = saved && !stale ? saved : ((await fetchReport(runId).catch(() => null)) ?? saved);
      if (cancelled) return;
      setReport(r);
      // A copy saved before comparisons existed: ask the server once, and
      // fill the card in when it answers. fetchReport saves what it gets, so
      // this happens once per paper, not once per visit.
      if (r && r.previous === undefined) {
        fetchReport(runId)
          .then((fresh) => {
            if (!cancelled)
              setReport((cur) => (cur ? { ...cur, previous: fresh.previous ?? null } : cur));
          })
          .catch(() => undefined);
      }
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

  const { setFocus } = usePracticeFocus();
  const leave = () => {
    // Leaving the fresh report is what ends the session. Its report is on the
    // device by then, so nothing is lost by dropping the paper from memory.
    if (isFresh) {
      clearMockSession();
      router.dismissTo('/mocks');
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
            onPress={leave}
          >
            <BackArrowIcon size={scale(16)} />
          </Pressable>
          {/* The date sits under the title it belongs to, on the title's own
              left edge; it hung under the back button, out of line. */}
          <View style={styles.titleCol}>
            <Text style={styles.title}>
              {report?.kind === 'diagnostic' ? 'Your starting point' : 'Your scorecard'}
            </Text>
            {(report || row) && (
              <Text style={styles.subtitle}>
                {report
                  ? `${formatDay(report.submitted_at)} · ${report.kind === 'diagnostic' ? 'Starting-point paper' : `${report.exam === 'neet' ? 'NEET UG' : 'JEE Main'} pattern`}`
                  : row
                    ? `${formatDay(row.submitted_at ?? row.created_at)} · ${row.exam === 'neet' ? 'NEET UG' : 'JEE Main'} pattern`
                    : ''}
              </Text>
            )}
          </View>
        </View>

        {loading ? (
          <View style={styles.centre} />
        ) : !report ? (
          <ScrollView contentContainerStyle={styles.listInner}>
            {row?.score ? (
              <>
                <View style={[styles.card, styles.scoreCard]}>
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
                <>
                  <MockSection title="By subject" />
                  <View style={styles.card}>
                    {Object.entries(row.score.per_subject).map(([subject, st]) => (
                      <View key={subject} style={styles.standRow}>
                        <Text style={styles.standLabel}>{SUBJECT_LABEL[subject] ?? subject}</Text>
                        <Text style={styles.standValue}>{st.marks}</Text>
                      </View>
                    ))}
                  </View>
                </>
              </>
            ) : null}
            <Text style={styles.missingHead}>
              {row?.score
                ? "This paper's questions could not be loaded"
                : 'This paper could not be loaded'}
            </Text>
            <Text style={styles.missingBody}>
              Check your connection and open it again. Every question, your answer and the worked
              solution come back once you are online.
            </Text>
          </ScrollView>
        ) : (
          <ScrollView style={styles.list} contentContainerStyle={styles.listInner}>
            <ReportHeader report={report} insights={insights!} styles={styles} scale={scale} />
          </ScrollView>
        )}

        {isFresh && (
          <View style={styles.footer}>
            {/* What to do with the result, then the way out. "Done" goes to
                Mock tests, where this paper now heads the list; it said
                "Back to Progress", a page the student did not come from. */}
            <MockKey
              label="Practise weak areas"
              arrow
              onPress={() => {
                clearMockSession();
                setFocus({ mode: 'weak', subject: null, chapterId: null, chapterName: null });
                router.dismissTo('/practice');
              }}
            />
            <MockKey label="Done" tone="white" onPress={leave} />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}

function SincePreviousCard({
  previous,
  styles,
}: {
  previous: MockPrevious;
  styles: ReturnType<typeof createStyles>;
}) {
  const delta = Math.round(previous.delta_percent);
  const word = delta > 0 ? 'Up' : delta < 0 ? 'Down' : 'Level';
  const label = previous.kind === 'diagnostic' ? 'your starting point' : 'your last paper';
  const chapterLine = (c: MockPrevious['improved'][number]) =>
    `${c.before.correct} of ${c.before.total} → ${c.after.correct} of ${c.after.total}`;

  return (
    <>
      <MockSection title={`Since ${label}`} />
      <View style={styles.card}>
        <Text
          style={[
            styles.deltaHead,
            delta > 0 && styles.tallyCorrect,
            delta < 0 && styles.tallyWrong,
          ]}
        >
          {delta === 0 ? 'Level' : `${word} ${Math.abs(delta)} points`}
        </Text>
        <Text style={styles.deltaSub}>
          {Math.round(previous.before_percent)}% → {Math.round(previous.after_percent)}% of the
          marks, against your paper on {formatDay(previous.submitted_at)}.
        </Text>

        {previous.subjects.map((s) => (
          <View key={s.subject} style={styles.standRow}>
            <Text style={styles.standLabel}>{SUBJECT_LABEL[s.subject] ?? s.subject}</Text>
            <Text style={styles.standValue}>
              {s.before}% → {s.after}%
            </Text>
          </View>
        ))}

        {previous.improved.length > 0 && (
          <>
            <View style={styles.timeDivider} />
            <Text style={styles.overline}>Moving up</Text>
            {previous.improved.map((c) => (
              <View key={c.chapter_id} style={styles.standRow}>
                <Text style={styles.standLabel}>{c.name || 'A chapter'}</Text>
                <Text style={[styles.standValue, styles.tallyCorrect]}>{chapterLine(c)}</Text>
              </View>
            ))}
          </>
        )}
        {previous.slipped.length > 0 && (
          <>
            <View style={styles.timeDivider} />
            <Text style={styles.overline}>Slipped</Text>
            {previous.slipped.map((c) => (
              <View key={c.chapter_id} style={styles.standRow}>
                <Text style={styles.standLabel}>{c.name || 'A chapter'}</Text>
                <Text style={[styles.standValue, styles.tallyWrong]}>{chapterLine(c)}</Text>
              </View>
            ))}
          </>
        )}
        <Text style={styles.cardFootnote}>
          Chapters are compared only where both papers asked about them. One or two questions in a
          chapter is a first read, not a verdict.
        </Text>
      </View>
    </>
  );
}

function ReportHeader({
  report,
  insights,
  styles,
  scale,
}: {
  report: MockReport;
  insights: ReturnType<typeof mockInsights>;
  styles: ReturnType<typeof createStyles>;
  scale: (n: number) => number;
}) {
  const { setFocus } = usePracticeFocus();
  const [allChapters, setAllChapters] = useState(false);
  const weak = insights.weakChapters;
  const shownChapters = allChapters ? weak : weak.slice(0, 3);
  // Straight into Practice on that chapter, the same way Progress's
  // "Practise this" does; Practice lands on the chapter's own subject.
  const practise = (c: (typeof weak)[number]) => {
    setFocus({ mode: 'chapter', subject: c.subject, chapterId: c.chapterId, chapterName: c.name });
    router.push('/practice');
  };
  const timed = insights.timeMs > 0;

  return (
    <>
      <View style={[styles.card, styles.scoreCard]}>
        <Text style={styles.scoreValue}>
          {report.total_marks}
          <Text style={styles.scoreCeiling}> / {report.max_marks}</Text>
        </Text>
        <Text style={styles.scoreCaption}>marks</Text>
        {report.kind === 'diagnostic' && (
          <Text style={styles.scoreNote}>A first read: one or two questions per chapter.</Text>
        )}
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

      {/* THE STARTING POINT IS A FIRST READ, AND SAYS SO.
          A paper this short touches a chapter once or twice, so a miss here
          is a place to start, not a verdict. The key goes straight to weak
          mode — Practice already aims it by chapter — because the whole
          reason this paper exists is to tell a new student where to go next. */}
      {/* SINCE YOUR LAST PAPER. A score alone says little; against the paper
          before it, it says whether practice is working. Percent of what each
          paper was worth, so a short starting-point paper and a full one
          compare; a first paper has nothing to compare and shows no card. */}
      {report.previous && <SincePreviousCard previous={report.previous} styles={styles} />}

      {/* WHERE YOU STOOD. Ranked on accuracy, not marks — a subject with 40
          questions left blank can out-score the one you were better at. */}
      <>
        <MockSection title="Where you stood" />
        <View style={styles.card}>
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
            <Text style={styles.standValue}>
              {insights.lostToWrong ? `−${insights.lostToWrong}` : '0'}
            </Text>
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
      </>

      {/* CHAPTERS TO WORK ON. Below subject level, where a student can act:
          the chapters with wrong answers, worst first, each one tap from
          Practice on exactly that chapter. */}
      {weak.length > 0 && (
        <>
          <MockSection title="Chapters to work on" />
          <View style={styles.card}>
            {shownChapters.map((c) => (
              <View key={c.chapterId} style={styles.chapterRow}>
                <View style={styles.chapterMain}>
                  <Text style={styles.chapterName}>{c.name}</Text>
                  <Text style={styles.chapterDetail}>
                    {SUBJECT_LABEL[c.subject] ?? c.subject} · {c.correct} of {c.questions} right
                    {c.wrong ? ` · ${c.wrong} wrong` : ''}
                    {c.skipped ? ` · ${c.skipped} skipped` : ''}
                  </Text>
                </View>
                <Pressable
                  style={styles.chapterKey}
                  hitSlop={6}
                  accessibilityRole="button"
                  accessibilityLabel={`Practise ${c.name}`}
                  onPress={() => practise(c)}
                >
                  <Text style={styles.chapterKeyText}>Practise</Text>
                </Pressable>
              </View>
            ))}
            {weak.length > 3 && (
              <Pressable hitSlop={6} onPress={() => setAllChapters((v) => !v)}>
                <Text style={styles.chapterMore}>
                  {allChapters ? 'Show fewer' : `Show all ${weak.length}`}
                </Text>
              </Pressable>
            )}
            <Text style={styles.cardFootnote}>
              Chapters where you got at least one answer wrong, the most wrong first.
            </Text>
          </View>
        </>
      )}

      {/* TIME. The device's own stopwatch — see lib/mock-report.ts. */}
      {timed && (
        <>
          <MockSection title="Time" />
          <View style={styles.card}>
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
        </>
      )}

      {/* EVERY QUESTION, as a grid to pick from rather than a scroll of
          cards with no options in them. Each number opens that question on
          its own page (app/mock-review.tsx): the question, every option with
          yours and the right one marked, and the working. */}
      <MockSection title="Questions" count="Tap one to see it" />
      <QuestionGrid report={report} styles={styles} />
      <View style={{ height: scale(2) }} />
    </>
  );
}

const GRID_COLUMNS = 7;

/**
 * THE PAPER'S QUESTIONS AS A GRID, by subject: green for right, red for
 * wrong, grey for skipped, as a coloured number in a fine outline (never a
 * tinted fill). A number opens that question's own page.
 */
function QuestionGrid({
  report,
  styles,
}: {
  report: MockReport;
  styles: ReturnType<typeof createStyles>;
}) {
  const subjects = [...new Set(report.questions.map((q) => q.subject))];
  return (
    <View style={styles.card}>
      {subjects.map((subject, si) => {
        const qs = report.questions
          .map((q, i) => ({ q, i }))
          .filter(({ q }) => q.subject === subject);
        const rows: (typeof qs)[] = [];
        for (let i = 0; i < qs.length; i += GRID_COLUMNS) rows.push(qs.slice(i, i + GRID_COLUMNS));
        return (
          <View key={subject} style={si > 0 && styles.gridGroup}>
            <Text style={styles.gridSubject}>{SUBJECT_LABEL[subject] ?? subject}</Text>
            {rows.map((line, r) => (
              <View key={r} style={styles.gridRow}>
                {line.map(({ q, i }) => {
                  const verdict = !q.answered ? 'skipped' : q.is_correct ? 'right' : 'wrong';
                  return (
                    <Pressable
                      key={q.id}
                      style={({ pressed }) => [
                        styles.gridCell,
                        verdict === 'right' && styles.gridCellRight,
                        verdict === 'wrong' && styles.gridCellWrong,
                        pressed && styles.gridCellPressed,
                      ]}
                      accessibilityRole="button"
                      accessibilityLabel={`Question ${q.num}, ${verdict}`}
                      onPress={() =>
                        router.push({
                          pathname: '/mock-review',
                          params: { run: report.run_id, i: String(i) },
                        })
                      }
                    >
                      <Text
                        style={[
                          styles.gridText,
                          verdict === 'right' && styles.gridTextRight,
                          verdict === 'wrong' && styles.gridTextWrong,
                        ]}
                      >
                        {q.num}
                      </Text>
                    </Pressable>
                  );
                })}
                {Array.from({ length: GRID_COLUMNS - line.length }, (_, k) => (
                  <View key={`pad${k}`} style={[styles.gridCell, styles.gridPad]} />
                ))}
              </View>
            ))}
          </View>
        );
      })}
      <View style={styles.gridLegend}>
        <Legend styles={styles} kind="right" label="Right" />
        <Legend styles={styles} kind="wrong" label="Wrong" />
        <Legend styles={styles} kind="skipped" label="Skipped" />
      </View>
    </View>
  );
}

function Legend({
  styles,
  kind,
  label,
}: {
  styles: ReturnType<typeof createStyles>;
  kind: 'right' | 'wrong' | 'skipped';
  label: string;
}) {
  return (
    <View style={styles.legendItem}>
      <View
        style={[
          styles.legendSwatch,
          kind === 'right' && styles.gridCellRight,
          kind === 'wrong' && styles.gridCellWrong,
        ]}
      />
      <Text style={styles.legendText}>{label}</Text>
    </View>
  );
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
    titleCol: { flex: 1, minWidth: 0 },
    title: { ...pageTitle(scale) },
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
      fontFamily: 'Onest_500Medium',
      fontSize: scale(13),
      color: colors.faint,
    },
    gridGroup: { marginTop: verticalScale(14) },
    gridSubject: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(13),
      color: colors.slate,
      marginBottom: verticalScale(8),
    },
    gridRow: { flexDirection: 'row', gap: scale(8), marginBottom: scale(8) },
    gridCell: {
      flex: 1,
      flexBasis: 0,
      aspectRatio: 1,
      borderRadius: scale(9),
      borderWidth: 1.4,
      borderColor: 'rgba(28,26,22,.14)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    gridCellRight: { borderColor: 'rgba(28,155,87,.55)' },
    gridCellWrong: { borderColor: 'rgba(221,68,51,.55)' },
    gridCellPressed: { opacity: 0.5 },
    gridPad: { borderWidth: 1.4, borderColor: 'transparent' },
    gridText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(13),
      color: colors.faint,
      fontVariant: ['tabular-nums'],
    },
    gridTextRight: { color: '#157A45' },
    gridTextWrong: { color: '#C53A2B' },
    gridLegend: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      columnGap: scale(14),
      rowGap: verticalScale(6),
      marginTop: verticalScale(6),
    },
    legendItem: { flexDirection: 'row', alignItems: 'center', gap: scale(6) },
    legendSwatch: {
      width: scale(12),
      height: scale(12),
      borderRadius: scale(4),
      borderWidth: 1.4,
      borderColor: 'rgba(28,26,22,.14)',
    },
    legendText: { fontFamily: 'Onest_500Medium', fontSize: scale(12), color: colors.slate },
    /** The one card: white, a fine border, 16 corners, no shadow. Its
     *  heading sits above it (MockSection), 28 from the block before. */
    card: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.10)',
      borderRadius: scale(16),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(16),
    },
    scoreCard: { marginTop: verticalScale(16), paddingBottom: 0, overflow: 'hidden' },
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
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12.5),
      color: colors.slate,
      marginTop: verticalScale(2),
      paddingHorizontal: scale(8),
    },
    scoreNote: {
      textAlign: 'center',
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12.5),
      lineHeight: scale(18),
      color: colors.slate,
      marginTop: verticalScale(6),
    },
    /** The three counts as a strip across the foot of the card, not three
     *  boxes inside a box. */
    tallyRow: {
      flexDirection: 'row',
      marginTop: verticalScale(14),
      // One point further left than the card's inside, so the first count's
      // divider is clipped under the card's own edge rather than doubling it.
      marginLeft: scale(-16) - 1,
      marginRight: scale(-16),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.08)',
    },
    tallyChip: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: verticalScale(11),
      borderLeftWidth: 1,
      borderLeftColor: 'rgba(28,26,22,.08)',
    },
    tallyValue: {
      fontFamily: 'Onest_600SemiBold',
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
    chapterRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingVertical: verticalScale(9),
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'rgba(28,26,22,.1)',
    },
    chapterMain: {
      flex: 1,
      minWidth: 0,
      gap: verticalScale(2),
    },
    chapterName: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    chapterDetail: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12),
      color: colors.faint,
    },
    deltaHead: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(22),
      letterSpacing: scale(-0.6),
      color: colors.ink,
      marginTop: verticalScale(2),
    },
    deltaSub: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12.5),
      lineHeight: scale(18),
      color: colors.slate,
      marginTop: verticalScale(4),
      marginBottom: verticalScale(8),
    },
    chapterKey: {
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(12),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.16)',
    },
    chapterKeyText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.ink,
    },
    chapterMore: {
      marginTop: verticalScale(8),
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12.5),
      color: colors.ink,
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
      fontFamily: 'Onest_600SemiBold',
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
    // #C53A2B, not a near-miss of it. The app has one red for text on a red
    // tint — report-sheet, practice, the library list and the classroom all
    // use it — and this screen shipped with its own, three shades off.
    footer: {
      flexShrink: 0,
      gap: verticalScale(10),
      paddingTop: verticalScale(12),
      paddingBottom: verticalScale(8),
      paddingHorizontal: scale(20),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.08)',
    },
  });
}

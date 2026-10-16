import { router, useFocusEffect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { DiagnosticCard } from '@/components/diagnostic-card';
import { MockKey, MockSection } from '@/components/mock/mock-kit';
import { ScoreTrend } from '@/components/score-trend';
import { Skeleton } from '@/components/skeleton';
import { colors } from '@/constants/brand';
import { pageTitle } from '@/constants/page-title';
import { useScale } from '@/constants/scale';
import { ApiError } from '@/lib/api';
import {
  createMockPaper,
  earnedTowardNext,
  getMockSession,
  mockSecondsLeft,
  getMockStatus,
  isDiagnosticTaken,
  listMockRuns,
  mockLockFrom,
  resumeActiveSession,
  startMockSession,
  submitCurrentSession,
  type MockKind,
  type MockRunRow,
  type MockStatus,
} from '@/lib/mock';
import { formatDay, loadReport, savedReportIds, type MockReport } from '@/lib/mock-report';
import { getProfile } from '@/lib/profile';

/**
 * MOCK TESTS: the gate, the paper, and every paper before it.
 *
 * THE RULE IS NOT A REFUSAL ANY MORE. A mock is earned — one paper per 75
 * practice questions answered correctly for the first time, and another 75
 * for the one after that. The app used to learn this by breaking it: a
 * student tapped Start, waited while the server was asked for a paper, and
 * got "could not set your paper". The gate is now the first thing on the
 * page, read from GET /mock/status before anything is attempted, so the
 * count is visible long before the button is.
 *
 * AND IT IS WHERE PAPERS COME BACK. GET /mock/runs lists every paper a
 * student has sat; tapping one opens its report. A mock is worth more the
 * week after than the day of.
 */

/**
 * The paper patterns, for display before a paper exists. The server's
 * blueprint (routers/mock.py PAPERS) is the authority — the response's own
 * counts drive every screen after Start — so these exist only so the page
 * can say what Start will build.
 */
const PATTERNS = {
  jee: {
    label: 'JEE Main',
    rows: [
      { label: 'Physics', value: '20 MCQ + 5 numerical' },
      { label: 'Chemistry', value: '20 MCQ + 5 numerical' },
      { label: 'Maths', value: '20 MCQ + 5 numerical' },
    ],
    total: '75 Q · 300 marks · 3 hours',
  },
  neet: {
    label: 'NEET UG',
    rows: [
      { label: 'Physics', value: '45 questions' },
      { label: 'Chemistry', value: '45 questions' },
      { label: 'Biology', value: '90 questions' },
    ],
    total: '180 Q · 720 marks · 3 hours',
  },
} as const;

type ExamKey = keyof typeof PATTERNS;

/** One finished paper, however the app came to know about it. */
interface SatRow {
  id: string;
  exam: 'jee' | 'neet';
  /** The free starting-point paper is listed, but it is not a point on the
   *  score trend: it is shorter, so its marks are not on the same scale. */
  kind: MockKind;
  /** ISO. Submitted, falling back to created. */
  when: string;
  correct: number;
  wrong: number;
  unanswered: number;
  marks: number;
  maxMarks: number | null;
  perSubject: Record<string, number>;
}


export default function MocksScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [exam, setExam] = useState<ExamKey>('jee');
  const [status, setStatus] = useState<MockStatus | null>(null);
  const [runs, setRuns] = useState<MockRunRow[] | null>(null);
  /** Whether `runs` is the server's answer or the empty fallback after a
   *  failed read — the two look the same and mean opposite things. */
  const [runsLoaded, setRunsLoaded] = useState(false);
  /** Papers whose full report is on this device. They are listed even when
   *  the server's list cannot be reached, which is the one case where a
   *  student has the whole paper in their hand and would be shown nothing. */
  const [saved, setSaved] = useState<MockReport[]>([]);
  const [building, setBuilding] = useState(false);
  const [error, setError] = useState<string | null>(null);
  /** Said once, after a paper whose clock ran out while the app was closed
   *  has been marked from the answers this phone kept. */
  const [notice, setNotice] = useState<string | null>(null);
  const [hasActivePaper, setHasActivePaper] = useState(false);

  useEffect(() => {
    let cancelled = false;
    /**
     * THE EXAM IS THE STUDENT'S, NOT A CHOICE MADE HERE.
     *
     * This screen used to offer a JEE Main / NEET UG toggle. The student
     * already told us which exam they are sitting, on their second onboarding
     * screen, and it is on their profile — asking again on the way into a
     * three-hour paper reads as the app having forgotten. A 'both' student
     * sits the JEE pattern here.
     */
    getProfile().then(({ exam: profileExam }) => {
      if (cancelled) return;
      setExam(profileExam === 'neet' ? 'neet' : 'jee');
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Re-read on focus, not just on mount: coming back from a finished paper
  // must move the count, and coming back from mock-paused must turn the key
  // into Resume.
  useFocusEffect(
    useCallback(() => {
      const s = getMockSession();
      setHasActivePaper(!!s && !s.result);
      if (s && !s.result) setExam(s.paper.exam);
      let cancelled = false;
      // The gate, the server's list and this device's reports. Read on focus,
      // and again after a paper is marked below, so it appears at once.
      const loadLists = () => {
        getMockStatus(s?.paper.exam ?? exam)
          .then((next) => !cancelled && setStatus(next))
          .catch(() => undefined);
        listMockRuns()
          .then((next) => {
            if (cancelled) return;
            setRuns(next);
            setRunsLoaded(true);
          })
          .catch(() => {
            if (cancelled) return;
            setRuns([]);
            setRunsLoaded(false);
          });
        savedReportIds()
          .then((ids) => Promise.all(ids.map(loadReport)))
          .then((reports) => {
            if (!cancelled) setSaved(reports.filter((r): r is MockReport => !!r));
          })
          .catch(() => undefined);
      };
      /**
       * AN UNFINISHED PAPER COMES BACK.
       *
       * With nothing live in memory — the app was closed mid-paper — the
       * server is asked for the student's unfinished paper, and this device's
       * saved answers are laid back onto it. The key turns into Resume. If the
       * clock ran out while the app was away, the paper is marked now from
       * what was saved rather than left hanging with its credit spent.
       */
      if (!s || s.result) {
        resumeActiveSession(exam)
          .then(async (resumed) => {
            if (cancelled || !resumed) return;
            if (!resumed.expired) {
              setHasActivePaper(true);
              return;
            }
            const answered = resumed.session.answers.size;
            await submitCurrentSession();
            if (cancelled) return;
            setNotice(
              answered
                ? `Your last paper's time ran out while the app was closed, so it has been marked on the ${answered} ${answered === 1 ? 'answer' : 'answers'} you had given.`
                : "Your last paper's time ran out while the app was closed, so it has been marked as it stood."
            );
            loadLists();
          })
          .catch(() => undefined);
      }
      loadLists();
      return () => {
        cancelled = true;
      };
    }, [exam])
  );

  const eligible = hasActivePaper || (status?.credits_available ?? 0) > 0;
  // Until the gate has been read, the page does not pretend to know: no key
  // that might be the wrong one, no count that might be a lie.
  const gateKnown = status !== null;

  /**
   * THE FREE PAPER LEADS WHILE IT IS ON OFFER.
   *
   * Offered only when nothing is waiting: a paper already in progress is the
   * one to go back to, whichever kind it is. Once the student has sat it the
   * server stops offering it and this page is exactly what it was.
   */
  const diagnostic = !hasActivePaper && status?.diagnostic?.available ? status.diagnostic : null;

  const start = async (kind: MockKind = 'full') => {
    if (building) return;
    if (hasActivePaper) {
      router.push('/mock-test');
      return;
    }
    setBuilding(true);
    setError(null);
    try {
      const paper = await createMockPaper(exam, kind);
      startMockSession(paper);
      router.push('/mock-test');
    } catch (err) {
      /**
       * The 403 is the same rule this page already draws, so a refusal here
       * means the count moved under us — re-read it rather than inventing a
       * message. Anything else is a real failure and says so.
       */
      if (isDiagnosticTaken(err)) {
        // Sat on another phone, or a double tap: the offer has moved on.
        getMockStatus(exam)
          .then(setStatus)
          .catch(() => undefined);
        setError(null);
        return;
      }
      const lock = mockLockFrom(err);
      if (lock) {
        setStatus({ ...lock });
        setError(null);
      } else {
        setError(
          err instanceof ApiError && err.status >= 500
            ? 'The server could not build a paper just now. Try again in a moment.'
            : 'Could not set your paper just now. Check your connection and try again.'
        );
      }
    } finally {
      setBuilding(false);
    }
  };

  const pattern = PATTERNS[exam];

  /**
   * ONE LIST, TWO SOURCES.
   *
   * The server knows which papers exist; this device knows which of them it
   * can explain question by question. A row appears if either says so —
   * saved-only rows cover a flight with no signal, and server-only rows are
   * papers sat before reports were kept, or on another phone.
   *
   * In-progress runs are left out on purpose: nothing can resume a paper
   * once the app has been closed, so a row that cannot be opened would only
   * be a reproach.
   */
  const sat: SatRow[] = useMemo(() => {
    const rows = new Map<string, SatRow>();
    // When the server's list arrived it is the authority on which papers
    // exist: a report on this phone for a paper the server no longer has (a
    // deleted test paper, another account's leftover) is not shown. The
    // phone's copies only stand in when the list could not be read.
    // Submitted only: a paper the server has since marked abandoned (or one
    // never finished) is not a paper the student sat, whatever this phone kept.
    const known = new Set((runs ?? []).filter((r) => r.status === 'submitted').map((r) => r.id));
    for (const r of saved) {
      if (runsLoaded && !known.has(r.run_id)) continue;
      rows.set(r.run_id, {
        id: r.run_id,
        exam: r.exam,
        kind: r.kind ?? 'full',
        when: r.submitted_at,
        correct: r.correct,
        wrong: r.wrong,
        unanswered: r.unanswered,
        marks: r.total_marks,
        maxMarks: r.max_marks,
        perSubject: Object.fromEntries(
          Object.entries(r.per_subject).map(([k, v]) => [k, v.marks])
        ),
      });
    }
    for (const r of runs ?? []) {
      if (r.status !== 'submitted' || !r.score || rows.has(r.id)) continue;
      rows.set(r.id, {
        id: r.id,
        exam: r.exam,
        kind: r.kind ?? 'full',
        when: r.submitted_at ?? r.created_at,
        correct: r.score.correct,
        wrong: r.score.wrong,
        unanswered: r.score.unanswered,
        marks: r.score.total_marks,
        maxMarks: r.score.max_marks ?? null,
        perSubject: Object.fromEntries(
          Object.entries(r.score.per_subject).map(([k, v]) => [k, v.marks])
        ),
      });
    }
    return [...rows.values()].sort((a, b) => b.when.localeCompare(a.when));
  }, [runs, runsLoaded, saved]);

  const trend = useMemo(
    () =>
      sat
        .filter((r) => r.exam === exam && r.kind !== 'diagnostic')
        .slice()
        .reverse()
        .map((r) => ({ id: r.id, when: r.when, marks: r.marks })),
    [sat, exam]
  );

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
            onPress={() => router.back()}>
            <BackArrowIcon size={scale(16)} />
          </Pressable>
          {/* The line about the papers sits under the title, on its left edge,
              as the report's date does; it hung under the back button with
              a wide gap below it. */}
          <View style={styles.titleCol}>
            <Text style={styles.title}>Mock tests</Text>
            <Text style={styles.lead}>
              {hasActivePaper
                ? 'The clock kept running while you were away.'
                : 'Exam-pattern papers: past-paper questions, your own Practice mistakes, and fresh ones.'}
            </Text>
          </View>
        </View>

        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollInner}>
          {gateKnown && diagnostic && (
            <>
              <MockSection title="Start here" first />
              <DiagnosticCard offer={diagnostic} />
            </>
          )}
          {!gateKnown ? (
            <>
              <Skeleton style={styles.skeletonLine} />
              <Skeleton delay={80} style={styles.skeletonCard} />
            </>
          ) : eligible ? (
            <>
              <MockSection title={hasActivePaper ? 'In progress' : 'Your full paper'} first={!diagnostic} />

              {hasActivePaper && getMockSession() ? (
                <RunningPaperCard styles={styles} label={pattern.label} />
              ) : (
                <View style={styles.card}>
                  <Text style={styles.overline}>Paper pattern · {pattern.label}</Text>
                  {pattern.rows.map((row) => (
                    <View key={row.label} style={styles.patternRow}>
                      <Text style={styles.patternRowLabel}>{row.label}</Text>
                      <Text style={styles.patternRowValue}>{row.value}</Text>
                    </View>
                  ))}
                  <View style={styles.patternTotalRow}>
                    <Text style={styles.patternTotalLabel}>Total</Text>
                    <Text style={styles.patternTotalValue}>{pattern.total}</Text>
                  </View>
                  <View style={styles.tagsRow}>
                    <View style={styles.tag}>
                      <Text style={styles.tagText}>+4 correct</Text>
                    </View>
                    <View style={styles.tag}>
                      <Text style={styles.tagText}>−1 wrong</Text>
                    </View>
                    <View style={styles.tag}>
                      <Text style={styles.tagText}>Clock never stops</Text>
                    </View>
                  </View>
                </View>
              )}
            </>
          ) : (
            /**
             * EARNED, NOT REFUSED — and said before the button, not after it.
             */
            <>
              <MockSection title="Your next full paper" first={!diagnostic} />
              <View style={styles.card}>
                <View style={styles.countRow}>
                  {/* From `correct_to_next`, not from `unique_correct` modulo
                      the threshold: the server owns how a credit is counted,
                      and the two disagree the moment it changes its mind. */}
                  <Text style={styles.count}>{earnedTowardNext(status)}</Text>
                  <Text style={styles.countOf}>of {status.threshold} correct</Text>
                </View>
                <View style={styles.track}>
                  <View
                    style={[
                      styles.fill,
                      {
                        width: `${Math.min(
                          100,
                          Math.round(
                            (earnedTowardNext(status) / status.threshold) * 100
                          )
                        )}%`,
                      },
                    ]}
                  />
                </View>
                <Text style={styles.cardHint}>
                  A full paper unlocks for every {status.threshold} practice questions you get
                  right. {status.correct_to_next} more to go; each question counts once.
                </Text>
              </View>
            </>
          )}

          {!!error && <Text style={styles.error}>{error}</Text>}
          {!!notice && <Text style={styles.notice}>{notice}</Text>}

          {/* YOUR SCORES. Only once there is a trend to show: two or more
              papers for this student's exam, oldest to newest. The list
              below is its table view. */}
          {trend.length >= 2 && (
            <>
            <MockSection title="Your scores" />
            <View style={styles.card}>
              <ScoreTrend
                // A different set of papers starts again on the latest one.
                key={trend.map((p) => p.id).join()}
                points={trend}
                maxMarks={exam === 'neet' ? 720 : 300}
                onOpen={(id) => router.push(`/mock-report?run=${id}`)}
              />
            </View>
            </>
          )}

          {/* PAPERS YOU HAVE SAT. The list is the server's (GET /mock/runs);
              the report behind each row is written to this device when the
              paper is graded, because the review arrives exactly once. */}
          <MockSection title="Papers you have sat" count={sat.length ? String(sat.length) : undefined} />

          {runs === null && !saved.length ? (
            <Skeleton delay={160} style={styles.skeletonRow} />
          ) : sat.length === 0 ? (
            <Text style={styles.emptyLine}>
              None yet. Each paper you finish keeps its full report here: every question, what you
              put, and the right answer.
            </Text>
          ) : (
            sat.map((run) => (
              <Pressable
                key={run.id}
                style={({ pressed }) => [styles.runRow, pressed && styles.runPressed]}
                accessibilityRole="button"
                accessibilityLabel={`${run.kind === 'diagnostic' ? 'Starting point' : run.exam === 'neet' ? 'NEET UG' : 'JEE Main'} paper, ${formatDay(run.when)}, ${run.marks} marks. Open the report.`}
                onPress={() => router.push(`/mock-report?run=${run.id}`)}>
                {/* A PAPER, ROOMY: its name and day on the left and the score
                    on the right, then how it went as three counts across the
                    foot, as the report's own score card shows them. It was
                    three tight lines with the subjects squeezed into one. */}
                <View style={styles.runHead}>
                  <View style={styles.runMain}>
                    <Text style={styles.runTitle}>
                      {run.kind === 'diagnostic'
                        ? 'Starting point'
                        : run.exam === 'neet'
                          ? 'NEET UG paper'
                          : 'JEE Main paper'}
                    </Text>
                    <Text style={styles.runDate}>{formatDay(run.when)}</Text>
                  </View>
                  <Text style={styles.runMarks}>
                    {run.marks}
                    {run.maxMarks != null && <Text style={styles.runMax}> / {run.maxMarks}</Text>}
                  </Text>
                  <ChevronIcon size={scale(15)} />
                </View>
                <View style={styles.runTally}>
                  <View style={styles.runCount}>
                    <Text style={[styles.runCountN, styles.runRight]}>{run.correct}</Text>
                    <Text style={styles.runCountLabel}>right</Text>
                  </View>
                  <View style={[styles.runCount, styles.runCountDivided]}>
                    <Text style={[styles.runCountN, styles.runWrong]}>{run.wrong}</Text>
                    <Text style={styles.runCountLabel}>wrong</Text>
                  </View>
                  <View style={[styles.runCount, styles.runCountDivided]}>
                    <Text style={styles.runCountN}>{run.unanswered}</Text>
                    <Text style={styles.runCountLabel}>skipped</Text>
                  </View>
                </View>
              </Pressable>
            ))
          )}
        </ScrollView>

        <View style={styles.footer}>
          <MockKey
            arrow={!building}
            busy={false}
            disabled={!gateKnown || building}
            label={
              building
                ? 'Setting your paper…'
                : !gateKnown
                  ? 'Mock tests'
                  : hasActivePaper
                    ? 'Resume paper'
                    : diagnostic
                      ? 'Find your starting point'
                      : eligible
                        ? 'Start a full paper'
                        : 'Practise now'
            }
            onPress={
              diagnostic
                ? () => start('diagnostic')
                : eligible
                  ? () => start('full')
                  : () => router.replace('/practice')
            }
          />
          {!!diagnostic && eligible && (
            <Pressable
              style={styles.keyLink}
              disabled={building}
              hitSlop={8}
              accessibilityRole="button"
              onPress={() => start('full')}>
              <Text style={styles.keyLinkText}>Start your full paper instead</Text>
            </Pressable>
          )}
        </View>
      </SafeAreaView>
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

function ChevronIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M9 5l7 7-7 7"
        stroke={colors.faint}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/**
 * THE PAPER THAT IS RUNNING, while it runs.
 *
 * Above "Resume", this page used to show the full paper's pattern whatever
 * was in progress, so a student halfway through the 35-question starting
 * point read "75 Q · 300 marks · 3 hours" over the button that took them back
 * to it. It now shows the paper they left: its sections, the clock (ticking,
 * because it is) and how much is answered.
 */
function RunningPaperCard({ styles, label }: { styles: ReturnType<typeof createStyles>; label: string }) {
  const session = getMockSession();
  const [left, setLeft] = useState(() => (session ? mockSecondsLeft(session) : 0));
  useEffect(() => {
    const id = setInterval(() => {
      const s = getMockSession();
      setLeft(s ? mockSecondsLeft(s) : 0);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  if (!session) return null;
  const { paper } = session;
  const answered = paper.questions.filter((q) => session.answers.has(q.id)).length;
  const h = Math.floor(left / 3600);
  const m = Math.floor((left % 3600) / 60);
  const sec = left % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    <View style={styles.card}>
      <Text style={styles.overline}>
        In progress · {paper.kind === 'diagnostic' ? 'Starting-point paper' : label}
      </Text>
      {paper.sections.map((sct) => (
        <View key={sct.subject} style={styles.patternRow}>
          <Text style={styles.patternRowLabel}>{SUBJECT_NAME[sct.subject] ?? sct.subject}</Text>
          <Text style={styles.patternRowValue}>{sct.questions} questions</Text>
        </View>
      ))}
      <View style={styles.patternTotalRow}>
        <Text style={styles.patternTotalLabel}>Time left</Text>
        <Text style={[styles.patternTotalValue, { fontVariant: ['tabular-nums'] }]}>
          {pad(h)}:{pad(m)}:{pad(sec)}
        </Text>
      </View>
      <View style={styles.patternRow}>
        <Text style={styles.patternRowLabel}>Answered</Text>
        <Text style={styles.patternRowValue}>
          {answered} of {paper.questions.length}
        </Text>
      </View>
    </View>
  );
}

const SUBJECT_NAME: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Maths',
  maths: 'Maths',
  biology: 'Biology',
};

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
    },
    safeArea: {
      flex: 1,
    },
    /** Top-aligned, the button centred on the title's own line, so a second
     *  line under the title does not pull it down. */
    topRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: scale(12),
      paddingTop: verticalScale(8),
      paddingHorizontal: scale(20),
    },
    backButton: {
      marginTop: scale((29 - 36) / 2),
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
    scroll: { flex: 1, minHeight: 0 },
    scrollInner: {
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(24),
      paddingBottom: verticalScale(28),
    },
    lead: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(19),
      color: colors.slate,
      marginTop: verticalScale(4),
    },
    /** The one card: white, a fine border, 16 corners, no shadow. */
    card: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.10)',
      borderRadius: scale(16),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(16),
    },
    overline: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.0),
      letterSpacing: scale(1.05),
      textTransform: 'uppercase',
      color: colors.faint,
      marginBottom: verticalScale(8),
    },
    patternRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: verticalScale(8),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.1)',
      borderStyle: 'dashed',
    },
    patternRowLabel: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(14),
      color: colors.ink,
    },
    patternRowValue: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(12),
      color: colors.faint,
    },
    patternTotalRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: verticalScale(10),
    },
    patternTotalLabel: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    patternTotalValue: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    tagsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(7),
      marginTop: verticalScale(12),
    },
    tag: {
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.12)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(4),
      paddingHorizontal: scale(11),
    },
    tagText: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(11),
      color: colors.slate,
    },
    countRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: scale(7),
    },
    count: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(30),
      lineHeight: scale(34),
      letterSpacing: scale(-0.8),
      color: colors.ink,
    },
    countOf: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(13),
      color: colors.faint,
    },
    track: {
      height: verticalScale(6),
      borderRadius: scale(99),
      backgroundColor: 'rgba(28,26,22,.07)',
      overflow: 'hidden',
      marginTop: verticalScale(12),
    },
    fill: {
      height: '100%',
      borderRadius: scale(99),
      backgroundColor: colors.marigold,
    },
    cardHint: {
      marginTop: verticalScale(10),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12.5),
      lineHeight: scale(18),
      color: colors.slate,
    },
    notice: {
      marginTop: verticalScale(12),
      fontFamily: 'Onest_500Medium',
      fontSize: scale(12.5),
      lineHeight: scale(18),
      color: colors.slate,
    },
    error: {
      marginTop: verticalScale(12),
      fontFamily: 'Onest_500Medium',
      fontSize: scale(12.5),
      lineHeight: scale(18),
      color: colors.red,
    },
    emptyLine: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19),
      color: colors.faint,
    },
    runRow: {
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.10)',
      borderRadius: scale(16),
      marginBottom: verticalScale(12),
      backgroundColor: '#fff',
      overflow: 'hidden',
    },
    runPressed: { opacity: 0.6 },
    runHead: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingTop: verticalScale(16),
      paddingBottom: verticalScale(14),
      paddingHorizontal: scale(16),
    },
    runMain: { flex: 1, minWidth: 0 },
    runTitle: { fontFamily: 'Onest_600SemiBold', fontSize: scale(16), lineHeight: scale(22), color: colors.ink },
    runDate: { fontFamily: 'Onest_400Regular', fontSize: scale(13), color: colors.slate, marginTop: verticalScale(2) },
    runMarks: { fontFamily: 'Onest_600SemiBold', fontSize: scale(22), color: colors.ink, fontVariant: ['tabular-nums'] },
    runMax: { fontFamily: 'Onest_500Medium', fontSize: scale(14), color: colors.faint },
    runTally: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: 'rgba(28,26,22,.08)' },
    runCount: { flex: 1, alignItems: 'center', paddingVertical: verticalScale(11) },
    runCountDivided: { borderLeftWidth: 1, borderLeftColor: 'rgba(28,26,22,.08)' },
    runCountN: { fontFamily: 'Onest_600SemiBold', fontSize: scale(15), color: colors.ink, fontVariant: ['tabular-nums'] },
    runRight: { color: '#157A45' },
    runWrong: { color: '#C53A2B' },
    runCountLabel: { fontFamily: 'Onest_400Regular', fontSize: scale(11.5), color: colors.slate, marginTop: verticalScale(1) },
    skeletonLine: {
      height: verticalScale(20),
      borderRadius: scale(6),
      alignSelf: 'stretch',
    },
    skeletonCard: {
      height: verticalScale(150),
      borderRadius: scale(16),
      marginTop: verticalScale(14),
      alignSelf: 'stretch',
    },
    skeletonRow: {
      height: verticalScale(74),
      borderRadius: scale(14),
      alignSelf: 'stretch',
    },
    footer: {
      flexShrink: 0,
      paddingTop: verticalScale(12),
      paddingBottom: verticalScale(12),
      paddingHorizontal: scale(24),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.08)',
    },
    keyLink: { alignSelf: 'center', paddingTop: verticalScale(12) },
    keyLinkText: { fontFamily: 'Onest_600SemiBold', fontSize: scale(13), color: colors.slate },
  });
}

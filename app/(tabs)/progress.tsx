import { router, useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { LayoutAnimation, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { PressableScale } from '@/components/pressable-scale';
import { Skeleton, SkeletonParagraph, stagger } from '@/components/skeleton';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import {
  MasteryState,
  ProgressChapter,
  ProgressSubject,
  ProgressSummary,
  getCachedProgress,
  getProgress,
} from '@/lib/progress';
import { countMilestones } from '@/lib/milestones';
import { usePracticeFocus } from '@/lib/practice-focus-context';

/**
 * Progress — every score on this page comes from GET /progress or is
 * absent; the pace card is the one exception, kept as a clearly-badged
 * preview until the API has timing data. The layout system is Home's:
 * 24-gutter, 32 between sections, white cards on hairline(0.16) with the
 * soft shadow, radii 12/16/99.
 */

const INK_RGB = '28,26,22';
const hairline = (alpha: number) => `rgba(${INK_RGB},${alpha})`;

const NOT_STARTED_GREY = '#C2BCAF';

const STATE_COLOR: Record<MasteryState, string> = {
  strong: colors.masteryStrong,
  improving: colors.masteryBuilding,
  needs_revision: colors.masteryWeak,
  not_started: NOT_STARTED_GREY,
};

const STATE_LABEL: Record<MasteryState, string> = {
  strong: 'Strong',
  improving: 'Improving',
  needs_revision: 'Revise',
  not_started: 'Not started',
};

const STATE_WASH: Record<MasteryState, string> = {
  strong: 'rgba(28,155,87,.1)',
  improving: 'rgba(238,163,31,.14)',
  needs_revision: 'rgba(221,68,51,.09)',
  not_started: 'transparent',
};

const SUBJECT_LABEL: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Maths',
  biology: 'Biology',
};

/** How many rows the chapter list shows before "Show all" opens the rest —
 *  active chapters always make the cut, quiet ones fill up to this floor. */
const COLLAPSED_CHAPTER_COUNT = 6;

/**
 * SAMPLE — the pace card is a preview. GET /progress returns
 * pace.available=false (question_serves has no timing data yet), so these
 * rows are hand-written and badged "Preview" on screen. Wire to the real
 * payload and delete this constant when the backend ships timing.
 */
const PACE_PREVIEW = [
  { subject: 'Physics', actual: '3m 06s', target: '2m 54s', fill: 0.85, tick: 0.79, over: true },
  { subject: 'Chemistry', actual: '1m 48s', target: '2m 00s', fill: 0.76, tick: 0.85, over: false },
  { subject: 'Maths', actual: '3m 42s', target: '3m 30s', fill: 0.85, tick: 0.8, over: true },
] as const;

type LoadState =
  | { kind: 'loading' }
  | { kind: 'ready'; data: ProgressSummary }
  | { kind: 'error' };

export default function ProgressScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const { setFocus } = usePracticeFocus();

  const [state, setState] = useState<LoadState>(() => {
    const c = getCachedProgress();
    return c ? { kind: 'ready', data: c } : { kind: 'loading' };
  });
  const [subjectIndex, setSubjectIndex] = useState(0);
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const [showAllChapters, setShowAllChapters] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [milestones, setMilestones] = useState({ total: 0, unseen: 0 });

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      getProgress()
        .then((data) => {
          if (!cancelled) setState({ kind: 'ready', data });
        })
        .catch(() => {
          if (cancelled) return;
          const c = getCachedProgress();
          setState(c ? { kind: 'ready', data: c } : { kind: 'error' });
        });
      return () => {
        cancelled = true;
      };
    }, [])
  );

  useEffect(() => {
    if (state.kind !== 'ready') return;
    let cancelled = false;
    countMilestones(state.data).then((next) => {
      if (!cancelled) setMilestones(next);
    });
    return () => {
      cancelled = true;
    };
  }, [state]);

  const retry = () => {
    setState({ kind: 'loading' });
    getProgress()
      .then((data) => setState({ kind: 'ready', data }))
      .catch(() => {
        const c = getCachedProgress();
        setState(c ? { kind: 'ready', data: c } : { kind: 'error' });
      });
  };

  const data = state.kind === 'ready' ? state.data : null;
  const subjects = data?.subjects ?? [];
  const subject: ProgressSubject | undefined = subjects[subjectIndex] ?? subjects[0];
  const score = data?.monk_score;
  const started =
    !!data &&
    (data.monk_score.display > 0 ||
      data.ledger.questions_attempted > 0 ||
      data.monk_score.flagged_concepts > 0);
  const ledgerHasAnything =
    !!data &&
    (data.ledger.doubts_solved > 0 ||
      data.ledger.questions_attempted > 0 ||
      data.ledger.concepts_mastered > 0 ||
      data.ledger.chapters_strong > 0);

  /**
   * The collapsed list keeps every chapter the student has touched and
   * fills with untouched ones up to the floor — a wall of 28 rows becomes
   * "your active chapters, and the door to the rest".
   */
  const visibleChapters = useMemo(() => {
    if (!subject) return [];
    if (showAllChapters) return subject.chapters;
    const active = subject.chapters.filter((c) => c.state !== 'not_started');
    if (active.length >= COLLAPSED_CHAPTER_COUNT) return active;
    const quiet = subject.chapters.filter((c) => c.state === 'not_started');
    return [...active, ...quiet.slice(0, COLLAPSED_CHAPTER_COUNT - active.length)];
  }, [subject, showAllChapters]);

  const hiddenCount = subject ? subject.chapters.length - visibleChapters.length : 0;

  const goPractiseChapter = (chapterId: string, subjectName: string, chapterName: string) => {
    setFocus({ mode: 'chapter', subject: subjectName, chapterId, chapterName });
    router.push('/practice');
  };

  const goReviseConcept = (conceptId: string) => {
    if (!data) return;
    for (const s of data.subjects) {
      for (const ch of s.chapters) {
        const concept = ch.concepts.find((c) => c.concept_id === conceptId);
        if (concept) {
          router.push({
            pathname: '/entering-classroom',
            params: {
              chapterId: ch.chapter_id,
              chapterTitle: ch.name,
              initialUtterance: `I need to revise ${concept.name}.`,
            },
          });
          return;
        }
      }
    }
    router.push('/drona');
  };

  const chapterName = (chapterId: string | undefined) => {
    if (!data || !chapterId) return null;
    for (const s of data.subjects) {
      const ch = s.chapters.find((c) => c.chapter_id === chapterId);
      if (ch) return { chapter: ch, subject: s.subject };
    }
    return null;
  };

  const animateNext = () => LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.heading}>Progress</Text>
            <Text style={styles.subtitle}>One number — and everything that explains it.</Text>
          </View>

          {state.kind === 'loading' && (
            <View style={styles.card}>
              <Skeleton style={skeletonStyles.overline} />
              <Skeleton delay={stagger(1, 90)} style={skeletonStyles.score} />
              <SkeletonParagraph
                lines={2}
                lineHeight={13}
                gap={8}
                delay={stagger(2, 90)}
                widths={['100%', '62%']}
              />
            </View>
          )}

          {state.kind === 'error' && (
            <View style={styles.card}>
              <Text style={styles.errorTitle}>Couldn&apos;t load your progress</Text>
              <Text style={styles.errorBody}>
                Check your connection and try again — your score is safe on the server.
              </Text>
              <PressableScale style={styles.retryButton} onPress={retry}>
                <Text style={styles.retryButtonText}>Retry</Text>
              </PressableScale>
            </View>
          )}

          {data && score && (
            <View style={styles.card}>
              <View style={styles.scoreHeaderRow}>
                <View style={styles.scoreOverlineRow}>
                  <Text style={styles.overline}>Monk Score</Text>
                  <PressableScale
                    hitSlop={10}
                    style={[styles.infoBadge, infoOpen && styles.infoBadgeOpen]}
                    onPress={() => {
                      animateNext();
                      setInfoOpen((v) => !v);
                    }}>
                    <Text style={[styles.infoBadgeText, infoOpen && styles.infoBadgeTextOpen]}>
                      i
                    </Text>
                  </PressableScale>
                </View>
                {score.delta_week !== 0 && (
                  <View style={styles.deltaBadge}>
                    <Text style={styles.deltaBadgeText}>
                      {score.delta_week > 0 ? '▲ +' : '▼ '}
                      {score.delta_week} this week
                    </Text>
                  </View>
                )}
              </View>
              <View style={styles.scoreRow}>
                <Text style={styles.scoreValue}>{score.display}</Text>
                <Text style={styles.scoreMax}>/ 1000</Text>
              </View>

              {/* No "never falls" here any more, in either line.
                *
                * It used to say the score "never falls" and "only ever climbs".
                * That was written against a server-side ratchet — display is
                * `min(max(raw, ...previous raws), ceiling)` — which only holds
                * the floor up if there ARE previous raws. `progress_snapshots`
                * is empty until a nightly job ships, so display is just the
                * raw score today and it moves both ways. It moves both ways
                * for a second reason now too: chapters carry exam weights, so
                * the average behind it can shift under a student who has done
                * nothing.
                *
                * A promise the product cannot keep is worse than no promise,
                * and this one breaks on plain app open with no class in
                * between to explain it. What is said instead is true either
                * way: the score is a weighted average, and it answers to
                * proving concepts. Put the "never falls" line back when the
                * snapshot job is running, not before. */}
              {infoOpen ? (
                <Text style={styles.scoreBody}>
                  Every first attempt at a question you&apos;ve never seen moves a concept&apos;s
                  mastery. The score is the average across your whole syllabus, weighted by what
                  each chapter is worth in the exam — so the chapters that carry the most marks
                  move it the most. Concepts flagged “needs revision” cap it until you refresh
                  them. 1000 means command of everything.
                </Text>
              ) : started ? (
                <Text style={styles.scoreBody}>
                  It moves only when you prove concepts on questions you&apos;ve never seen.
                </Text>
              ) : (
                <Text style={styles.scoreBody}>
                  Your score starts the moment you answer your first practice question.
                </Text>
              )}

              <View style={styles.climbTrack}>
                <View
                  style={[
                    styles.climbFill,
                    {
                      width: `${Math.min(100, Math.max(score.display / 10, score.display > 0 ? 2 : 0))}%`,
                    },
                  ]}
                />
              </View>
              <View style={styles.climbAxisRow}>
                <Text style={styles.climbAxisText}>0</Text>
                <Text style={styles.climbAxisText}>1000</Text>
              </View>

              {score.flagged_concepts > 0 && (
                <View style={styles.flagBox}>
                  <Text style={styles.flagText}>
                    {/* Same correction as above: the claim was untrue and it
                        was not carrying the sentence anyway. The cap is the
                        point here. */}
                    <Text style={styles.flagTextStrong}>
                      {score.flagged_concepts} concept{score.flagged_concepts === 1 ? '' : 's'}{' '}
                      flagged “needs revision”
                    </Text>{' '}
                    cap how high your score can climb until you refresh them.
                  </Text>
                </View>
              )}
            </View>
          )}

          {data && subjects.length > 0 && (
            <View style={styles.subjectsRow}>
              {subjects.map((s, i) => {
                const selected = i === subjectIndex;
                return (
                  <PressableScale
                    key={s.subject}
                    style={[styles.subjectCard, selected && styles.subjectCardSelected]}
                    onPress={() => {
                      animateNext();
                      setSubjectIndex(i);
                      setExpandedChapter(null);
                      setShowAllChapters(false);
                    }}>
                    <Text style={styles.subjectName}>{SUBJECT_LABEL[s.subject] ?? s.subject}</Text>
                    <View style={styles.subjectScoreRow}>
                      <Text style={styles.subjectScore}>{s.score}</Text>
                      <Text style={styles.subjectScoreMax}>/1000</Text>
                    </View>
                  </PressableScale>
                );
              })}
            </View>
          )}

          {data && subject && (
            <View style={styles.card}>
              <Text style={styles.overline}>
                {SUBJECT_LABEL[subject.subject] ?? subject.subject} · chapter by chapter
              </Text>
              <Text style={styles.chapterHint}>
                Tap a chapter to see its concepts. Grey means not started yet — the syllabus
                itself is complete everywhere.
              </Text>

              {visibleChapters.map((chapter, index) => {
                const prev = visibleChapters[index - 1];
                const showClassHeader = !prev || prev.class_level !== chapter.class_level;
                return (
                  <View key={chapter.chapter_id}>
                    {showClassHeader && (
                      <Text style={styles.classHeader}>Class {chapter.class_level}</Text>
                    )}
                    <ChapterRow
                      chapter={chapter}
                      expanded={expandedChapter === chapter.chapter_id}
                      onToggle={() => {
                        animateNext();
                        setExpandedChapter(
                          expandedChapter === chapter.chapter_id ? null : chapter.chapter_id
                        );
                      }}
                      styles={styles}
                    />
                  </View>
                );
              })}

              {(hiddenCount > 0 || showAllChapters) && (
                <PressableScale
                  style={styles.showAllButton}
                  onPress={() => {
                    animateNext();
                    setShowAllChapters((v) => !v);
                    if (showAllChapters) setExpandedChapter(null);
                  }}>
                  <Text style={styles.showAllText}>
                    {showAllChapters
                      ? 'Show less'
                      : `Show all ${subject.chapters.length} chapters`}
                  </Text>
                  <View style={showAllChapters ? styles.chevronUp : styles.chevronDown}>
                    <ChevronIcon color={colors.slate} />
                  </View>
                </PressableScale>
              )}
            </View>
          )}

          {/* Pace — preview until the API ships timing data. */}
          <View style={styles.card}>
            <View style={styles.scoreHeaderRow}>
              <Text style={styles.overline}>Pace · avg time per question</Text>
              <View style={styles.previewBadge}>
                <Text style={styles.previewBadgeText}>Preview</Text>
              </View>
            </View>
            {PACE_PREVIEW.map((row) => (
              <View key={row.subject} style={styles.paceRow}>
                <View style={styles.paceTextRow}>
                  <Text style={styles.paceSubject}>{row.subject}</Text>
                  <Text style={styles.paceTimes}>
                    <Text style={styles.paceActual}>{row.actual}</Text> · target {row.target}
                  </Text>
                </View>
                <View style={styles.paceTrack}>
                  <View
                    style={[
                      styles.paceFill,
                      {
                        width: `${row.fill * 100}%`,
                        backgroundColor: row.over ? colors.marigold : colors.masteryStrong,
                      },
                    ]}
                  />
                  <View style={[styles.paceTick, { left: `${row.tick * 100}%` }]} />
                </View>
              </View>
            ))}
            <Text style={styles.cardFootnote}>
              Measured silently from Practice — you never run a timer. The black tick is the
              exam&apos;s own per-question budget. Live numbers arrive soon.
            </Text>
          </View>

          {data && data.recommendations.length > 0 && (
            <View>
              <View style={styles.sectionTitleRow}>
                <View style={styles.sectionTitleDash} />
                <Text style={styles.sectionTitle}>What moves it next</Text>
              </View>
              {data.recommendations.map((rec) => {
                const resolved = chapterName(rec.chapter_id);
                return (
                  <View key={rec.role} style={[styles.card, styles.recCard]}>
                    <Text style={styles.recTitle}>{rec.title}</Text>
                    <Text style={styles.recReason}>{rec.reason}</Text>
                    {rec.role === 'highest_lever' && resolved ? (
                      <PressableScale
                        style={styles.recButton}
                        onPress={() =>
                          goPractiseChapter(
                            resolved.chapter.chapter_id,
                            resolved.subject,
                            resolved.chapter.name
                          )
                        }>
                        <Text style={styles.recButtonText}>Practise this</Text>
                        <ArrowIcon color={colors.paper} size={scale(13)} />
                      </PressableScale>
                    ) : rec.role === 'clear_flag' && rec.concept_id ? (
                      <PressableScale
                        style={styles.recButton}
                        onPress={() => goReviseConcept(rec.concept_id!)}>
                        <Text style={styles.recButtonText}>Revise with Drona</Text>
                        <ArrowIcon color={colors.paper} size={scale(13)} />
                      </PressableScale>
                    ) : (
                      <PressableScale
                        style={[styles.recButton, styles.recButtonQuiet]}
                        onPress={() => router.push('/practice')}>
                        <Text style={[styles.recButtonText, styles.recButtonTextQuiet]}>
                          Open Practice
                        </Text>
                        <ArrowIcon color={colors.ink} size={scale(13)} />
                      </PressableScale>
                    )}
                  </View>
                );
              })}
            </View>
          )}

          {data && (ledgerHasAnything || milestones.total > 0) && (
            <View>
              <View style={styles.sectionTitleRow}>
                <View style={styles.sectionTitleDash} />
                <Text style={styles.sectionTitle}>The journey so far</Text>
              </View>
              <View style={[styles.ledgerStrip, !ledgerHasAnything && styles.ledgerStripHidden]}>
                <View style={styles.ledgerItem}>
                  <Text style={styles.ledgerValue}>{data.ledger.doubts_solved}</Text>
                  <Text style={styles.ledgerLabel}>doubts</Text>
                </View>
                <View style={styles.ledgerItem}>
                  <Text style={styles.ledgerValue}>{data.ledger.questions_attempted}</Text>
                  <Text style={styles.ledgerLabel}>attempted</Text>
                </View>
                <View style={styles.ledgerItem}>
                  <Text style={styles.ledgerValue}>{data.ledger.concepts_mastered}</Text>
                  <Text style={styles.ledgerLabel}>mastered</Text>
                </View>
                <View style={styles.ledgerItem}>
                  <Text style={styles.ledgerValue}>{data.ledger.chapters_strong}</Text>
                  <Text style={styles.ledgerLabel}>strong</Text>
                </View>
              </View>

              {/* The collection sits directly under the tallies because it is
                  the same story told the other way round: the ledger counts,
                  this names. */}
              {milestones.total > 0 && (
                <PressableScale
                  style={styles.milestoneRow}
                  onPress={() => router.push('/milestones')}>
                  <View style={styles.milestoneText}>
                    <Text style={styles.milestoneTitle}>Milestones</Text>
                    <Text style={styles.milestoneMeta}>
                      {milestones.total} kept
                      {milestones.unseen > 0 ? ` · ${milestones.unseen} new` : ''}
                    </Text>
                  </View>
                  {milestones.unseen > 0 && <View style={styles.milestoneDot} />}
                  <ArrowIcon color={colors.ink} size={scale(13)} />
                </PressableScale>
              )}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function ChapterRow({
  chapter,
  expanded,
  onToggle,
  styles,
}: {
  chapter: ProgressChapter;
  expanded: boolean;
  onToggle: () => void;
  styles: ReturnType<typeof createStyles>;
}) {
  const touched = chapter.state !== 'not_started';
  return (
    <View>
      <PressableScale style={styles.chapterRow} onPress={onToggle}>
        <Text style={[styles.chapterName, !touched && styles.chapterNameQuiet]} numberOfLines={1}>
          {chapter.name}
        </Text>
        {touched ? (
          <View style={[styles.stateChip, { backgroundColor: STATE_WASH[chapter.state] }]}>
            <View style={[styles.stateChipDot, { backgroundColor: STATE_COLOR[chapter.state] }]} />
            <Text style={[styles.stateChipText, { color: STATE_COLOR[chapter.state] }]}>
              {STATE_LABEL[chapter.state]}
            </Text>
          </View>
        ) : (
          <View style={styles.quietDot} />
        )}
        <View style={expanded ? styles.chevronUp : styles.chevronDown}>
          <ChevronIcon color={colors.faint} />
        </View>
      </PressableScale>
      {expanded && (
        <View style={styles.conceptPanel}>
          {chapter.concepts.map((concept) => (
            <View key={concept.concept_id} style={styles.conceptRow}>
              <View style={[styles.conceptDot, { backgroundColor: STATE_COLOR[concept.state] }]} />
              <Text
                style={[
                  styles.conceptName,
                  concept.state !== 'not_started' && styles.conceptNameTouched,
                ]}
                numberOfLines={2}>
                {concept.name}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

function ChevronIcon({ color }: { color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={14} height={14} fill="none">
      <Path
        d="m6 9 6 6 6-6"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function ArrowIcon({ color, size }: { color: string; size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M4 12h15m-6-7 7 7-7 7"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const skeletonStyles = StyleSheet.create({
  overline: { width: 90, height: 10, borderRadius: 4 },
  score: { width: 130, height: 40, borderRadius: 8, marginTop: 12, marginBottom: 12 },
});

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
    },
    safeArea: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: scale(24),
      paddingTop: verticalScale(8),
      paddingBottom: verticalScale(130),
      gap: verticalScale(32),
    },
    heading: {
      fontFamily: 'AnekLatin_500Medium',
      fontSize: scale(24),
      letterSpacing: scale(-0.36),
      color: colors.ink,
    },
    subtitle: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.slate,
      marginTop: verticalScale(2),
    },
    card: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: hairline(0.16),
      borderRadius: scale(16),
      padding: scale(20),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(4) },
      shadowOpacity: 0.06,
      shadowRadius: scale(12),
      elevation: 2,
    },
    overline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.2),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    scoreHeaderRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    scoreOverlineRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
    },
    infoBadge: {
      width: scale(20),
      height: scale(20),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: hairline(0.25),
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoBadgeOpen: {
      backgroundColor: colors.ink,
      borderColor: colors.ink,
    },
    infoBadgeText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: colors.slate,
    },
    infoBadgeTextOpen: {
      color: colors.paper,
    },
    deltaBadge: {
      backgroundColor: 'rgba(28,155,87,.1)',
      borderWidth: 1,
      borderColor: 'rgba(28,155,87,.3)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(3),
      paddingHorizontal: scale(10),
    },
    deltaBadgeText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: '#157A45',
    },
    scoreRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: scale(8),
      marginTop: verticalScale(8),
    },
    scoreValue: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(44),
      letterSpacing: scale(-1.1),
      lineHeight: scale(48),
      color: colors.ink,
    },
    scoreMax: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      color: colors.faint,
    },
    scoreBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.slate,
      marginTop: verticalScale(8),
    },
    climbTrack: {
      height: verticalScale(10),
      borderRadius: scale(99),
      backgroundColor: hairline(0.08),
      marginTop: verticalScale(16),
      overflow: 'hidden',
    },
    climbFill: {
      height: '100%',
      borderRadius: scale(99),
      backgroundColor: colors.marigold,
    },
    climbAxisRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: verticalScale(4),
    },
    climbAxisText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(10),
      color: colors.faint,
    },
    flagBox: {
      backgroundColor: '#FCF4E0',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.45)',
      borderRadius: scale(12),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(14),
      marginTop: verticalScale(16),
    },
    flagText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.amberText,
    },
    flagTextStrong: {
      fontFamily: 'AnekLatin_700Bold',
    },
    subjectsRow: {
      flexDirection: 'row',
      gap: scale(12),
    },
    subjectCard: {
      flex: 1,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: hairline(0.16),
      borderRadius: scale(16),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(14),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(4) },
      shadowOpacity: 0.06,
      shadowRadius: scale(12),
      elevation: 2,
    },
    subjectCardSelected: {
      borderWidth: scale(1.5),
      borderColor: colors.ink,
    },
    subjectName: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.ink,
    },
    subjectScoreRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: scale(3),
      marginTop: verticalScale(4),
    },
    subjectScore: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(18),
      letterSpacing: scale(-0.27),
      color: colors.ink,
    },
    subjectScoreMax: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(10),
      color: colors.faint,
    },
    chapterHint: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(12),
      lineHeight: scale(18),
      color: colors.faint,
      marginTop: verticalScale(6),
      marginBottom: verticalScale(4),
    },
    classHeader: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.2),
      textTransform: 'uppercase',
      color: colors.faint,
      marginTop: verticalScale(16),
      marginBottom: verticalScale(4),
    },
    chapterRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingVertical: verticalScale(13),
      borderTopWidth: 1,
      borderTopColor: hairline(0.07),
    },
    chapterName: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      color: colors.ink,
    },
    chapterNameQuiet: {
      fontFamily: 'AnekLatin_400Regular',
      color: colors.slate,
    },
    stateChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(5),
      borderRadius: scale(99),
      paddingVertical: verticalScale(3),
      paddingHorizontal: scale(9),
    },
    stateChipDot: {
      width: scale(6),
      height: scale(6),
      borderRadius: scale(99),
    },
    stateChipText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      letterSpacing: scale(0.3),
    },
    quietDot: {
      width: scale(7),
      height: scale(7),
      borderRadius: scale(99),
      backgroundColor: NOT_STARTED_GREY,
      marginHorizontal: scale(4),
    },
    chevronDown: {
      marginLeft: scale(2),
    },
    chevronUp: {
      marginLeft: scale(2),
      transform: [{ rotate: '180deg' }],
    },
    conceptPanel: {
      marginLeft: scale(2),
      marginBottom: verticalScale(12),
      paddingLeft: scale(14),
      borderLeftWidth: scale(2),
      borderLeftColor: hairline(0.1),
      gap: verticalScale(9),
    },
    conceptRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
    },
    conceptDot: {
      width: scale(6),
      height: scale(6),
      borderRadius: scale(99),
      flexShrink: 0,
    },
    conceptName: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18.2),
      color: colors.faint,
    },
    conceptNameTouched: {
      color: colors.slate,
      fontFamily: 'AnekLatin_600SemiBold',
    },
    showAllButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(6),
      paddingVertical: verticalScale(12),
      marginTop: verticalScale(4),
      borderTopWidth: 1,
      borderTopColor: hairline(0.07),
    },
    showAllText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.slate,
    },
    previewBadge: {
      borderWidth: 1,
      borderColor: hairline(0.16),
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
    paceRow: {
      marginTop: verticalScale(14),
    },
    paceTextRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: verticalScale(6),
    },
    paceSubject: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.ink,
    },
    paceTimes: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(11),
      color: colors.faint,
    },
    paceActual: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.slate,
    },
    paceTrack: {
      height: verticalScale(8),
      borderRadius: scale(99),
      backgroundColor: hairline(0.08),
    },
    paceFill: {
      height: '100%',
      borderRadius: scale(99),
    },
    paceTick: {
      position: 'absolute',
      top: verticalScale(-2),
      bottom: verticalScale(-2),
      width: scale(2),
      borderRadius: scale(1),
      backgroundColor: colors.ink,
    },
    cardFootnote: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(11),
      lineHeight: scale(16.5),
      color: colors.faint,
      marginTop: verticalScale(14),
    },
    sectionTitleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      marginBottom: verticalScale(12),
    },
    sectionTitleDash: {
      width: scale(18),
      height: verticalScale(2),
      borderRadius: scale(2),
      backgroundColor: colors.marigold,
    },
    sectionTitle: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(11),
      letterSpacing: scale(1.54),
      textTransform: 'uppercase',
      color: colors.ink,
    },
    recCard: {
      marginBottom: verticalScale(12),
    },
    recTitle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(18),
      color: colors.ink,
    },
    recReason: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.slate,
      marginTop: verticalScale(4),
    },
    recButton: {
      alignSelf: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      height: verticalScale(40),
      paddingHorizontal: scale(18),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      marginTop: verticalScale(12),
    },
    recButtonText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.paper,
    },
    recButtonQuiet: {
      backgroundColor: '#fff',
      borderWidth: scale(1.4),
      borderColor: hairline(0.2),
    },
    recButtonTextQuiet: {
      color: colors.ink,
    },
    ledgerStrip: {
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: hairline(0.1),
      borderBottomWidth: 1,
      borderBottomColor: hairline(0.1),
      paddingVertical: verticalScale(16),
    },
    // A student who has taken a class but answered nothing has a milestone and
    // an empty ledger, so the strip collapses rather than showing four zeros.
    ledgerStripHidden: {
      display: 'none',
    },
    ledgerItem: {
      flex: 1,
      alignItems: 'flex-start',
    },
    milestoneRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingVertical: verticalScale(15),
      borderBottomWidth: 1,
      borderBottomColor: hairline(0.1),
    },
    milestoneText: {
      flex: 1,
      minWidth: 0,
    },
    milestoneTitle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(16),
      letterSpacing: scale(-0.02 * 16),
      color: colors.ink,
    },
    milestoneMeta: {
      marginTop: verticalScale(1),
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      color: colors.faint,
    },
    milestoneDot: {
      width: scale(7),
      height: scale(7),
      borderRadius: scale(3.5),
      backgroundColor: colors.marigold,
    },
    ledgerValue: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(18),
      letterSpacing: scale(-0.27),
      color: colors.ink,
    },
    ledgerLabel: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(0.8),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    errorTitle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(18),
      color: colors.ink,
    },
    errorBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.slate,
      marginTop: verticalScale(4),
    },
    retryButton: {
      alignSelf: 'flex-start',
      height: verticalScale(40),
      paddingHorizontal: scale(18),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: verticalScale(12),
    },
    retryButtonText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.paper,
    },
  });
}

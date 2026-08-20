import { router, useFocusEffect } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
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
import { usePracticeFocus } from '@/lib/practice-focus-context';

/**
 * Progress — every number on this page comes from GET /progress or is
 * absent. The layout system is Home's: 24-gutter, 32 between sections,
 * white cards on hairline(0.16) with the soft shadow, radii 12/16/99, and
 * the 44-display / 24-title / 18 / 15 / 13 / 11 / 10 type ramp.
 *
 * The pace section from the static build is deliberately gone: the API
 * returns pace.available=false (no timing data exists yet), and a card
 * whose subtitle apologises for itself has no place on the page. It
 * returns when the backend can feed it.
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
  needs_revision: 'Needs revision',
  not_started: 'Not started',
};

const SUBJECT_LABEL: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Maths',
  biology: 'Biology',
};

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
   * The recommendation CTAs resolve real ids from the tree the same payload
   * carries, so a Drona route always ships a chapterId — never the
   * title-only push that used to drop students on a blank scoping screen.
   */
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
                <Text style={styles.overline}>Monk Score</Text>
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

              {started ? (
                <Text style={styles.scoreBody}>
                  It moves only when you prove concepts on questions you&apos;ve never seen.
                  1000 means command of the full syllabus.
                </Text>
              ) : (
                <Text style={styles.scoreBody}>
                  Your score starts the moment you answer your first practice question — it only
                  ever climbs, never falls.
                </Text>
              )}

              <View style={styles.climbTrack}>
                <View
                  style={[
                    styles.climbFill,
                    { width: `${Math.min(100, Math.max(score.display / 10, score.display > 0 ? 2 : 0))}%` },
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
                    Your score never falls — but{' '}
                    <Text style={styles.flagTextStrong}>
                      {score.flagged_concepts} concept{score.flagged_concepts === 1 ? '' : 's'}{' '}
                      flagged “needs revision”
                    </Text>{' '}
                    cap how high it can climb until you refresh them.
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
                      setSubjectIndex(i);
                      setExpandedChapter(null);
                    }}>
                    <Text style={styles.subjectName}>
                      {SUBJECT_LABEL[s.subject] ?? s.subject}
                    </Text>
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
              <View style={styles.legendRow}>
                {(Object.keys(STATE_LABEL) as MasteryState[]).map((key) => (
                  <View key={key} style={styles.legendItem}>
                    <View style={[styles.legendDot, { backgroundColor: STATE_COLOR[key] }]} />
                    <Text style={styles.legendText}>{STATE_LABEL[key]}</Text>
                  </View>
                ))}
              </View>

              {subject.chapters.map((chapter, index) => (
                <ChapterRow
                  key={chapter.chapter_id}
                  chapter={chapter}
                  index={index}
                  expanded={expandedChapter === chapter.chapter_id}
                  onToggle={() =>
                    setExpandedChapter(
                      expandedChapter === chapter.chapter_id ? null : chapter.chapter_id
                    )
                  }
                  styles={styles}
                />
              ))}

              <Text style={styles.cardFootnote}>
                Every state describes you — the syllabus itself is complete everywhere.
              </Text>
            </View>
          )}

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

          {ledgerHasAnything && data && (
            <View>
              <View style={styles.sectionTitleRow}>
                <View style={styles.sectionTitleDash} />
                <Text style={styles.sectionTitle}>The journey so far</Text>
              </View>
              <View style={styles.ledgerStrip}>
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
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function ChapterRow({
  chapter,
  index,
  expanded,
  onToggle,
  styles,
}: {
  chapter: ProgressChapter;
  index: number;
  expanded: boolean;
  onToggle: () => void;
  styles: ReturnType<typeof createStyles>;
}) {
  return (
    <View>
      <PressableScale style={styles.chapterRow} onPress={onToggle}>
        <Text style={styles.chapterNumber}>{String(index + 1).padStart(2, '0')}</Text>
        <Text style={styles.chapterName} numberOfLines={1}>
          {chapter.name}
        </Text>
        {chapter.weight_marks != null && (
          <Text style={styles.chapterMarks}>~{Math.round(chapter.weight_marks)} marks</Text>
        )}
        <View style={[styles.chapterDot, { backgroundColor: STATE_COLOR[chapter.state] }]} />
        <View style={expanded ? styles.chevronOpen : undefined}>
          <ChevronIcon color={colors.faint} />
        </View>
      </PressableScale>
      {expanded && (
        <View style={styles.conceptList}>
          {chapter.concepts.map((concept) => (
            <View key={concept.concept_id} style={styles.conceptRow}>
              <View style={[styles.conceptDot, { backgroundColor: STATE_COLOR[concept.state] }]} />
              <Text style={styles.conceptName} numberOfLines={1}>
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
        d="m9 6 6 6-6 6"
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
    legendRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(12),
      marginTop: verticalScale(12),
      marginBottom: verticalScale(8),
    },
    legendItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(5),
    },
    legendDot: {
      width: scale(7),
      height: scale(7),
      borderRadius: scale(99),
    },
    legendText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.slate,
    },
    chapterRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingVertical: verticalScale(12),
      borderTopWidth: 1,
      borderTopColor: hairline(0.08),
    },
    chapterNumber: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: colors.faint,
      width: scale(20),
    },
    chapterName: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      color: colors.ink,
    },
    chapterMarks: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    chapterDot: {
      width: scale(8),
      height: scale(8),
      borderRadius: scale(99),
    },
    chevronOpen: {
      transform: [{ rotate: '90deg' }],
    },
    conceptList: {
      paddingLeft: scale(30),
      paddingBottom: verticalScale(12),
      gap: verticalScale(8),
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
    },
    conceptName: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      color: colors.slate,
    },
    cardFootnote: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(11),
      lineHeight: scale(16.5),
      color: colors.faint,
      marginTop: verticalScale(12),
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
    ledgerItem: {
      flex: 1,
      alignItems: 'flex-start',
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

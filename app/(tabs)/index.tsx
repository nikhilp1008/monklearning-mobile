import { LinearGradient } from 'expo-linear-gradient';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { PressableScale } from '@/components/pressable-scale';
import { ProtractorMark } from '@/components/protractor-mark';
import { RuledPaper } from '@/components/ruled-paper';
import { Skeleton } from '@/components/skeleton';
import { SnapIcon } from '@/components/snap-icon';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { NoteSummary, listNotes } from '@/lib/notes';
import { PlanItem, getTodayPlan, saveTodayPlan } from '@/lib/plan';
import { getCachedProgress, getProgress } from '@/lib/progress';
import { getStoredName } from '@/lib/profile';

/**
 * Home.
 *
 * Layout system, deliberately small so nothing drifts:
 *  - type: 24 title · 18 card · 15 body · 13 secondary · 11 caption · 10 overline
 *  - weights: Regular, SemiBold, ExtraBold (Kalam only for the red-pen accent)
 *  - spacing: 24 gutter, 32 between sections, 20 card padding, 8/12/16 inside
 *  - radii: 12 chips · 16 cards · 99 pills
 *
 * The three features are peers: one card shell, three instances. Drona keeps
 * the amber wash and the only filled button — first among equals, not a
 * different species.
 *
 * Every number on this screen is real or absent. Score and ledger come from
 * /progress, notes from /notes; a brand-new account gets honest zero states,
 * never sample data.
 */

const INK_RGB = '28,26,22'; // colors.ink — the app has exactly one black
const hairline = (alpha: number) => `rgba(${INK_RGB},${alpha})`;

/**
 * The page is pure white and so are the cards — the boxes earn their edges
 * with a firm hairline and a soft, diffuse shadow (the same treatment the
 * Library and Practice cards already use), never with a grey tint.
 */
const CARD_CHIP = '#FAF8F1'; // small warm surface for the icon chips only

/**
 * Editorial prompts for the "doubt of the day" card — hand-written, rotated
 * by day-of-year so the card genuinely changes daily. Tapping one hands the
 * question itself to Drona as the opening utterance, so the class starts on
 * exactly this doubt instead of a blank "what do you want to learn?".
 * Replace with a backend endpoint when one exists.
 */
const DAILY_DOUBTS = [
  {
    tag: 'Physics · Modern',
    chapterTitle: 'Modern Physics',
    question:
      'Why do photoelectrons stop the moment intensity drops — but not when frequency drops below threshold?',
  },
  {
    tag: 'Chemistry · Organic',
    chapterTitle: 'Organic Chemistry',
    question:
      'Why does phenol nitrate so much faster than benzene, when both offer the same aromatic ring?',
  },
  {
    tag: 'Maths · Calculus',
    chapterTitle: 'Limits and Derivatives',
    question:
      'Why does L’Hôpital’s rule fail on (x + sin x)/x as x → ∞, even though it looks like ∞/∞?',
  },
] as const;

function doubtOfTheDay(date: Date) {
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86_400_000
  );
  return DAILY_DOUBTS[dayOfYear % DAILY_DOUBTS.length];
}

const SUBJECT_DOT: Record<string, string> = {
  physics: '#DD4433',
  chemistry: '#1C9B57',
  mathematics: '#EEA31F',
  maths: '#EEA31F',
  biology: '#1C9B57',
};

function getGreeting(date: Date): string {
  const hour = date.getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

function timeAgo(iso: string): string {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return '';
  const days = Math.floor((Date.now() - then) / 86_400_000);
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 7) return `${days} days ago`;
  if (days < 14) return 'last week';
  return `${Math.floor(days / 7)} weeks ago`;
}

type StatsState =
  | { kind: 'loading' }
  | { kind: 'ready'; score: number; doubts: number; practised: number }
  | { kind: 'empty' }
  | { kind: 'hidden' };

export default function HomeScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [firstName, setFirstName] = useState('');
  const [planItems, setPlanItems] = useState<PlanItem[]>([]);
  const [stats, setStats] = useState<StatsState>(() => {
    const c = getCachedProgress();
    if (!c) return { kind: 'loading' };
    return toStatsState(c.monk_score.display, c.ledger.doubts_solved, c.ledger.questions_attempted);
  });
  const [notes, setNotes] = useState<NoteSummary[]>([]);
  const doneCount = planItems.filter((item) => item.done).length;
  const dailyDoubt = useMemo(() => doubtOfTheDay(new Date()), []);

  // Refetch on focus, not just mount — the plan is edited on a separate
  // screen this one stays mounted underneath, notes get saved from a class,
  // and the score moves while the student practises.
  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      // The stored name only — a fresh install greets with "Namaste", never
      // with the sample profile's name presented as the student's own.
      getStoredName().then((name) => {
        if (!cancelled) setFirstName(name?.trim().split(/\s+/)[0] ?? '');
      });
      getTodayPlan().then((items) => {
        if (!cancelled) setPlanItems(items);
      });
      getProgress()
        .then((p) => {
          if (cancelled) return;
          setStats(
            toStatsState(p.monk_score.display, p.ledger.doubts_solved, p.ledger.questions_attempted)
          );
        })
        .catch(() => {
          if (cancelled) return;
          // No number is better than a wrong one — but a cached fetch is a
          // true number, so fall back to it rather than hiding the strip (or
          // worse, leaving the skeleton pulsing forever).
          const c = getCachedProgress();
          setStats(
            c
              ? toStatsState(c.monk_score.display, c.ledger.doubts_solved, c.ledger.questions_attempted)
              : { kind: 'hidden' }
          );
        });
      listNotes()
        .then((r) => {
          if (!cancelled) setNotes(r.notes.slice(0, 6));
        })
        .catch(() => {
          // The section simply doesn't render without notes.
        });
      return () => {
        cancelled = true;
      };
    }, [])
  );

  const togglePlanItem = (id: string) => {
    const next = planItems.map((item) => (item.id === id ? { ...item, done: !item.done } : item));
    setPlanItems(next);
    saveTodayPlan(next);
  };

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.headerRow}>
          <View style={styles.headerTextBlock}>
            <Text style={styles.headerEyebrow}>{getGreeting(new Date()).toUpperCase()}</Text>
            <Text style={styles.headerName} numberOfLines={1} ellipsizeMode="tail">
              {firstName || 'Namaste'}
            </Text>
          </View>
          <PressableScale style={styles.avatar} onPress={() => router.push('/profile')}>
            <Text style={styles.avatarText}>{(firstName[0] ?? 'M').toUpperCase()}</Text>
          </PressableScale>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* The three ways to study — one shell, three instances. */}
          <View style={styles.cardsGroup}>
            <View style={[styles.card, styles.dronaCard]}>
              <LinearGradient
                colors={['#FDF6E4', '#FBE9C6', '#F7DCA8']}
                locations={[0, 0.55, 1]}
                start={{ x: 0.3, y: 0 }}
                end={{ x: 0.7, y: 1 }}
                style={StyleSheet.absoluteFillObject}
              />
              <View style={styles.cardTitleRow}>
                <View style={[styles.iconChip, styles.dronaIconChip]}>
                  <ProtractorMark size={scale(24)} />
                </View>
                <Text style={[styles.cardTitle, styles.dronaTitle]} numberOfLines={1}>
                  Learn with Drona
                </Text>
              </View>
              <Text style={styles.dronaBody}>
                Pick a chapter and Drona teaches it out loud, writing on the board as it goes.
              </Text>
              <PressableScale style={styles.dronaCtaRing} onPress={() => router.push('/drona')}>
                <LinearGradient
                  colors={['#FFE9BE', '#E2A62D']}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  style={StyleSheet.absoluteFillObject}
                />
                <View style={styles.dronaCtaInner}>
                  <Text style={styles.dronaCtaText}>Choose a topic</Text>
                  <ArrowRightIcon color="#FFF7E6" size={scale(14)} />
                </View>
              </PressableScale>
            </View>

            <PressableScale style={styles.card} onPress={() => router.push('/snap-capture')}>
              <View style={styles.cardTitleRow}>
                <View style={styles.iconChip}>
                  <SnapIcon size={scale(20)} />
                </View>
                <View style={styles.cardTextBlock}>
                  <Text style={styles.cardTitle}>Snap it out</Text>
                  <Text style={styles.cardSubtitle}>Up to 3 questions, solved step by step</Text>
                </View>
                <ArrowRightIcon color={colors.faint} size={scale(16)} />
              </View>
            </PressableScale>

            <PressableScale style={styles.card} onPress={() => router.push('/practice')}>
              <View style={styles.cardTitleRow}>
                <View style={styles.iconChip}>
                  <InfinityIcon size={scale(20)} />
                </View>
                <View style={styles.cardTextBlock}>
                  <Text style={styles.cardTitle}>Practice unlimited</Text>
                  <Text style={styles.cardSubtitle}>Endless questions, one at a time</Text>
                </View>
                <ArrowRightIcon color={colors.faint} size={scale(16)} />
              </View>
            </PressableScale>
          </View>

          {stats.kind !== 'hidden' && (
            <View style={styles.statsStrip}>
              {stats.kind === 'loading' ? (
                <>
                  <View style={styles.statItem}>
                    <Skeleton style={styles.statSkeletonValue} />
                    <Skeleton delay={60} style={styles.statSkeletonLabel} />
                  </View>
                  <View style={styles.statItem}>
                    <Skeleton delay={120} style={styles.statSkeletonValue} />
                    <Skeleton delay={180} style={styles.statSkeletonLabel} />
                  </View>
                  <View style={styles.statItem}>
                    <Skeleton delay={240} style={styles.statSkeletonValue} />
                    <Skeleton delay={300} style={styles.statSkeletonLabel} />
                  </View>
                </>
              ) : stats.kind === 'empty' ? (
                <Text style={styles.statsEmptyText}>
                  Your Monk Score starts the moment you answer your first question.
                </Text>
              ) : (
                <>
                  <View style={styles.statItem}>
                    <Text style={styles.statValue}>{stats.score}</Text>
                    <Text style={styles.statLabel}>monk score</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={[styles.statValue, styles.statValueGreen]}>{stats.doubts}</Text>
                    <Text style={styles.statLabel}>doubts solved</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={styles.statValue}>{stats.practised}</Text>
                    <Text style={styles.statLabel}>practised</Text>
                  </View>
                </>
              )}
            </View>
          )}

          <View>
            <View style={styles.planHeaderRow}>
              <Text style={styles.planOverline}>Today&apos;s plan</Text>
              <View style={styles.planHeaderRight}>
                {planItems.length > 0 && (
                  <View style={styles.planBadge}>
                    <Text style={styles.planBadgeText}>
                      {doneCount} of {planItems.length}
                    </Text>
                  </View>
                )}
                <PressableScale
                  style={styles.planAddPill}
                  hitSlop={12}
                  onPress={() => router.push('/plan-sheet')}>
                  <Text style={styles.planAddText}>+ Add</Text>
                </PressableScale>
              </View>
            </View>
            {planItems.length === 0 ? (
              <Text style={styles.planEmptyText}>
                Nothing planned yet — tap <Text style={styles.planEmptyAccent}>+ Add</Text> to set
                today&apos;s goals.
              </Text>
            ) : (
              planItems.map((item, index) => (
                <PressableScale
                  key={item.id}
                  style={[styles.planRow, index === planItems.length - 1 && styles.planRowLast]}
                  onPress={() => togglePlanItem(item.id)}>
                  {item.done ? (
                    <View style={styles.planCheckDone}>
                      <CheckIcon size={scale(12)} color="#fff" />
                    </View>
                  ) : (
                    <View style={styles.planCheckOpen} />
                  )}
                  <Text style={item.done ? styles.planRowTextDone : styles.planRowText}>
                    {item.text}
                  </Text>
                </PressableScale>
              ))
            )}
          </View>

          <PressableScale
            style={styles.doubtCard}
            onPress={() =>
              router.push({
                pathname: '/entering-classroom',
                params: {
                  chapterTitle: dailyDoubt.chapterTitle,
                  // The question rides along as the opening utterance, so the
                  // class opens on this exact doubt — without it the student
                  // lands on a blank scoping question instead.
                  initialUtterance: dailyDoubt.question,
                },
              })
            }>
            <View style={styles.doubtRuledClip}>
              <RuledPaper step={verticalScale(24)} color={hairline(0.06)} count={12} />
            </View>
            <View style={styles.doubtRule} />
            <View style={styles.doubtHeaderRow}>
              <Text style={styles.doubtLabel}>doubt of the day</Text>
              <Text style={styles.doubtTag}>{dailyDoubt.tag}</Text>
            </View>
            <Text style={styles.doubtQuestion}>{dailyDoubt.question}</Text>
            <View style={styles.doubtCtaRow}>
              <Text style={styles.doubtCtaText}>Learn this with Drona</Text>
              <ArrowRightIcon color={colors.red} size={scale(13)} />
            </View>
          </PressableScale>

          {notes.length > 0 && (
            <View>
              <View style={styles.sectionHeaderRow}>
                <View style={styles.sectionTitleRow}>
                  <View style={styles.sectionTitleDash} />
                  <Text style={styles.sectionTitle}>Recent notes</Text>
                </View>
                <PressableScale hitSlop={12} onPress={() => router.push('/library')}>
                  <Text style={styles.viewAll}>View all →</Text>
                </PressableScale>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.notesRow}>
                {notes.map((note) => (
                  <PressableScale
                    key={note.id}
                    style={styles.noteCard}
                    onPress={() => router.push({ pathname: '/note-detail', params: { id: note.id } })}>
                    <View style={styles.noteSubjectRow}>
                      <View
                        style={[
                          styles.noteDot,
                          {
                            backgroundColor:
                              SUBJECT_DOT[(note.subject ?? '').toLowerCase()] ?? colors.marigold,
                          },
                        ]}
                      />
                      <Text style={styles.noteSubject}>{note.subject ?? 'Note'}</Text>
                    </View>
                    <Text style={styles.noteTitle} numberOfLines={2}>
                      {note.concept ?? note.chapter ?? 'Class note'}
                    </Text>
                    <Text style={styles.noteBody} numberOfLines={1}>
                      {note.preview}
                    </Text>
                    <Text style={styles.noteTime}>{timeAgo(note.created_at)}</Text>
                  </PressableScale>
                ))}
              </ScrollView>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function toStatsState(score: number, doubts: number, practised: number): StatsState {
  if (score === 0 && doubts === 0 && practised === 0) return { kind: 'empty' };
  return { kind: 'ready', score, doubts, practised };
}

function InfinityIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M18.2 8.4c4.8 0 4.8 7.2 0 7.2-4.6 0-5.8-7.2-10.4-7.2-4.8 0-4.8 7.2 0 7.2 4.6 0 5.8-7.2 10.4-7.2"
        stroke={colors.ink}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={12} cy={12} r={1.7} fill={colors.marigold} />
    </Svg>
  );
}

function CheckIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M5 13l4 4L19 7"
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
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
    headerRow: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(12),
      paddingTop: verticalScale(8),
      paddingHorizontal: scale(24),
      paddingBottom: verticalScale(16),
    },
    headerTextBlock: {
      flex: 1,
      minWidth: 0,
    },
    headerEyebrow: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      color: colors.faint,
    },
    headerName: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(24),
      letterSpacing: scale(-0.36),
      lineHeight: scale(28.8),
      color: colors.ink,
      marginTop: verticalScale(1),
    },
    avatar: {
      width: scale(40),
      height: scale(40),
      borderRadius: scale(20),
      backgroundColor: colors.marigold,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarText: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(15),
      color: '#3A2A06',
    },
    scrollContent: {
      paddingHorizontal: scale(24),
      paddingBottom: verticalScale(130),
      gap: verticalScale(32),
    },
    cardsGroup: {
      gap: verticalScale(12),
    },
    card: {
      position: 'relative',
      overflow: 'hidden',
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
    dronaCard: {
      borderColor: 'rgba(238,163,31,.5)',
    },
    dronaTitle: {
      color: colors.ink,
    },
    cardTitleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
    },
    iconChip: {
      width: scale(40),
      height: scale(40),
      flexShrink: 0,
      borderRadius: scale(12),
      backgroundColor: CARD_CHIP,
      borderWidth: 1,
      borderColor: hairline(0.1),
      alignItems: 'center',
      justifyContent: 'center',
    },
    dronaIconChip: {
      backgroundColor: '#fff',
      borderColor: 'rgba(238,163,31,.5)',
    },
    cardTextBlock: {
      flex: 1,
      minWidth: 0,
    },
    cardTitle: {
      flex: 1,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(18),
      color: colors.ink,
    },
    cardSubtitle: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      marginTop: verticalScale(2),
    },
    dronaBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22.5),
      color: colors.slate,
      marginTop: verticalScale(12),
    },
    dronaCtaRing: {
      position: 'relative',
      overflow: 'hidden',
      alignSelf: 'flex-start',
      borderRadius: scale(99),
      padding: scale(1.5),
      marginTop: verticalScale(16),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(3) },
      shadowOpacity: 0.18,
      shadowRadius: scale(7),
      elevation: 3,
    },
    dronaCtaInner: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      height: verticalScale(41),
      paddingHorizontal: scale(20),
      borderRadius: scale(99),
      backgroundColor: '#241F18',
    },
    dronaCtaText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(15),
      color: '#FFF7E6',
    },
    statsStrip: {
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: hairline(0.1),
      borderBottomWidth: 1,
      borderBottomColor: hairline(0.1),
      paddingVertical: verticalScale(16),
    },
    statItem: {
      flex: 1,
      alignItems: 'flex-start',
    },
    statValue: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(18),
      letterSpacing: scale(-0.27),
      color: colors.ink,
    },
    statValueGreen: {
      color: '#157A45',
    },
    statLabel: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(0.8),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    statSkeletonValue: {
      width: scale(44),
      height: verticalScale(18),
      borderRadius: scale(5),
    },
    statSkeletonLabel: {
      width: scale(64),
      height: verticalScale(9),
      borderRadius: scale(4),
      marginTop: verticalScale(5),
    },
    statsEmptyText: {
      flex: 1,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.slate,
    },
    planHeaderRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: verticalScale(4),
    },
    planOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    planHeaderRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
    },
    planBadge: {
      backgroundColor: 'rgba(28,155,87,.1)',
      borderWidth: 1,
      borderColor: 'rgba(28,155,87,.3)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(3),
      paddingHorizontal: scale(9),
    },
    planBadgeText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: '#157A45',
    },
    planAddPill: {
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(5),
      paddingHorizontal: scale(12),
    },
    planAddText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.ink,
    },
    planRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingVertical: verticalScale(12),
      borderBottomWidth: 1,
      borderBottomColor: hairline(0.09),
      borderStyle: 'dashed',
    },
    planRowLast: {
      borderBottomWidth: 0,
      paddingBottom: verticalScale(2),
    },
    planCheckDone: {
      width: scale(22),
      height: scale(22),
      borderRadius: scale(7),
      backgroundColor: '#1C9B57',
      alignItems: 'center',
      justifyContent: 'center',
    },
    planCheckOpen: {
      width: scale(22),
      height: scale(22),
      borderRadius: scale(7),
      borderWidth: scale(1.8),
      borderColor: 'rgba(28,26,22,.25)',
    },
    planRowTextDone: {
      flex: 1,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(15),
      color: colors.faint,
      textDecorationLine: 'line-through',
    },
    planRowText: {
      flex: 1,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      color: colors.ink,
    },
    planEmptyText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.slate,
      paddingVertical: verticalScale(12),
    },
    planEmptyAccent: {
      fontFamily: 'AnekLatin_600SemiBold',
      color: colors.ink,
    },
    doubtCard: {
      position: 'relative',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: hairline(0.14),
      borderRadius: scale(16),
      paddingTop: verticalScale(16),
      paddingRight: scale(16),
      paddingBottom: verticalScale(16),
      paddingLeft: scale(40),
    },
    doubtRuledClip: {
      ...StyleSheet.absoluteFillObject,
      borderRadius: scale(15),
      overflow: 'hidden',
    },
    doubtRule: {
      position: 'absolute',
      top: verticalScale(12),
      bottom: verticalScale(12),
      left: scale(26),
      width: scale(1.4),
      backgroundColor: 'rgba(221,68,51,.4)',
    },
    doubtHeaderRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    doubtLabel: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(14),
      color: colors.red,
      transform: [{ rotate: '-0.6deg' }],
    },
    doubtTag: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(0.9),
      textTransform: 'uppercase',
      color: '#C53A2B',
    },
    doubtQuestion: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22.5),
      color: colors.ink,
      marginTop: verticalScale(8),
    },
    doubtCtaRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      marginTop: verticalScale(12),
    },
    doubtCtaText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.ink,
    },
    sectionHeaderRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: verticalScale(12),
    },
    sectionTitleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
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
    viewAll: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.slate,
    },
    notesRow: {
      gap: scale(12),
      paddingRight: scale(20),
      paddingBottom: verticalScale(4),
    },
    noteCard: {
      width: scale(210),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: hairline(0.16),
      borderRadius: scale(16),
      paddingVertical: verticalScale(16),
      paddingHorizontal: scale(16),
    },
    noteSubjectRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
    },
    noteDot: {
      width: scale(6),
      height: scale(6),
      borderRadius: scale(3),
    },
    noteSubject: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.slate,
    },
    noteTitle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      letterSpacing: scale(-0.225),
      lineHeight: scale(19.5),
      color: colors.ink,
      marginTop: verticalScale(8),
    },
    noteBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18.2),
      color: colors.slate,
      marginTop: verticalScale(4),
    },
    noteTime: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
      marginTop: verticalScale(12),
      paddingTop: verticalScale(10),
      borderTopWidth: 1,
      borderTopColor: hairline(0.1),
    },
  });
}

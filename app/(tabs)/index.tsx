import { LinearGradient } from 'expo-linear-gradient';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { PressableScale } from '@/components/pressable-scale';
import { RuledPaper } from '@/components/ruled-paper';
import { NoticedCard } from '@/components/noticed-card';
import { Skeleton } from '@/components/skeleton';
import { ICON_CHIP, MilestonesIcon, PracticeIcon, SnapADoubtIcon } from '@/components/monk-icons';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { countMilestones } from '@/lib/milestones';
import { observe, type Observation, type ObservationAction } from '@/lib/noticed';
import { NoteSummary, listNotes } from '@/lib/notes';
import { PlanItem, getTodayPlan, saveTodayPlan } from '@/lib/plan';
import { getCachedProgress, getProgress } from '@/lib/progress';
import { getStoredName } from '@/lib/profile';
import { classesTaken } from '@/lib/proof';

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

  const [initial, setInitial] = useState('');
  const [planItems, setPlanItems] = useState<PlanItem[]>([]);
  const [stats, setStats] = useState<StatsState>(() => {
    const c = getCachedProgress();
    if (!c) return { kind: 'loading' };
    return toStatsState(c.monk_score.display, c.ledger.doubts_solved, c.ledger.questions_attempted);
  });
  const [notes, setNotes] = useState<NoteSummary[]>([]);
  const [noticed, setNoticed] = useState<Observation | null>(null);
  const [milestones, setMilestones] = useState({ total: 0, unseen: 0 });
  const doneCount = planItems.filter((item) => item.done).length;
  const dailyDoubt = useMemo(() => doubtOfTheDay(new Date()), []);

  // Refetch on focus, not just mount — the plan is edited on a separate
  // screen this one stays mounted underneath, notes get saved from a class,
  // and the score moves while the student practises.
  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      // The stored name only — a fresh install shows the neutral glyph,
      // never a sample profile's initial presented as the student's own.
      getStoredName().then((name) => {
        if (!cancelled) setInitial(name?.trim()[0]?.toUpperCase() ?? '');
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
          // The observation rides the same payload the strip does — one fetch,
          // and the numbers and the sentence about them can never disagree.
          classesTaken().then((classes) => {
            if (!cancelled) setNoticed(observe(p, classes));
          });
          // Same payload again for the header. Refetched on focus, so returning
          // from the milestones page clears the dot without a manual refresh.
          countMilestones(p).then((next) => {
            if (!cancelled) setMilestones(next);
          });
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
          <PressableScale style={styles.headerButton} onPress={() => router.push('/profile')}>
            {initial ? (
              <Text style={styles.headerInitial}>{initial}</Text>
            ) : (
              <PersonIcon size={scale(19)} />
            )}
          </PressableScale>
          {/* Was a notification bell that did nothing. There is no notification
              we actually want to send — the moments spec rules out the whole
              "come back, you haven't studied" category — so the slot goes to
              the one thing a student earns and might want to revisit.

              Absent until there is something in it: an always-present icon
              leading to an empty page teaches a student to ignore it, and that
              first impression is hard to undo. Appearing on the day they earn
              their first is a small reward in itself. */}
          {milestones.total > 0 && (
            <PressableScale
              style={styles.headerButton}
              onPress={() => router.push('/milestones')}>
              <MilestonesIcon size={scale(20)} />
              {milestones.unseen > 0 && <View style={styles.headerDot} />}
            </PressableScale>
          )}
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* The three ways to study — one shell, three instances. */}
          <View style={styles.cardsGroup}>
            <View style={[styles.card, styles.dronaCard]}>
              <LinearGradient
                colors={['#EFC578', '#F8DFB0', '#FDF3DC']}
                locations={[0, 0.55, 1]}
                start={{ x: 0.3, y: 0 }}
                end={{ x: 0.7, y: 1 }}
                style={StyleSheet.absoluteFillObject}
              />
              <Text style={[styles.cardTitle, styles.dronaTitle]} numberOfLines={1}>
                Learn with Drona
              </Text>
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
                  <ArrowRightIcon color={colors.ink} size={scale(14)} />
                </View>
              </PressableScale>
            </View>

            {/* Two tiles, not two thinner rows: the hero is wide, the pair is
                square — different architecture, so neither reads as a lesser
                copy of the other. The icons finally get the stage. */}
            <View style={styles.tilesRow}>
              <PressableScale
                style={[styles.card, styles.tile]}
                onPress={() => router.push('/snap-capture')}>
                <View style={styles.tileHeader}>
                  <TileChip size={scale(ICON_CHIP.size)} radius={scale(ICON_CHIP.radius)}>
                    <SnapADoubtIcon size={scale(ICON_CHIP.icon)} />
                  </TileChip>
                  <ArrowRightIcon color={colors.faint} size={scale(16)} />
                </View>
                <Text style={styles.tileTitle}>Snap it out</Text>
                <Text style={styles.tileSubtitle}>Up to 3 questions, solved step by step</Text>
              </PressableScale>

              <PressableScale
                style={[styles.card, styles.tile]}
                onPress={() => router.push('/practice')}>
                <View style={styles.tileHeader}>
                  <TileChip size={scale(ICON_CHIP.size)} radius={scale(ICON_CHIP.radius)}>
                    <PracticeIcon size={scale(ICON_CHIP.icon)} />
                  </TileChip>
                  <ArrowRightIcon color={colors.faint} size={scale(16)} />
                </View>
                <Text style={styles.tileTitle}>Practice unlimited</Text>
                <Text style={styles.tileSubtitle}>Endless questions, one at a time</Text>
              </PressableScale>
            </View>
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

          {/* The teacher reading the numbers just above. One remark, or
              nothing — never a second section of the page. */}
          {noticed && (
            <NoticedCard
              observation={noticed}
              onPress={() => runObservationAction(noticed.action)}
            />
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
          {/* Last thing on the page, deliberately quiet: this is a reference
              students visit once or twice, not a daily action. */}
          <PressableScale style={styles.scopeRow} onPress={() => router.push('/exam-scope')}>
            <View style={styles.scopeTextBlock}>
              <Text style={styles.scopeOverline}>Exam scope</Text>
              <Text style={styles.scopeTitle}>What&apos;s actually in your exam</Text>
              <Text style={styles.scopeBody}>
                Not every NCERT chapter is examinable — see what counts, and what you can stop
                studying.
              </Text>
            </View>
            <ArrowRightIcon color={colors.faint} size={scale(16)} />
          </PressableScale>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function toStatsState(score: number, doubts: number, practised: number): StatsState {
  if (score === 0 && doubts === 0 && practised === 0) return { kind: 'empty' };
  return { kind: 'ready', score, doubts, practised };
}

function PersonIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Circle cx={12} cy={8.2} r={3.6} stroke={colors.ink} strokeWidth={1.8} />
      <Path
        d="M4.8 19.4c.9-3.4 3.8-5 7.2-5s6.3 1.6 7.2 5"
        stroke={colors.ink}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </Svg>
  );
}


/**
 * The tile's icon chip.
 *
 * White with a hairline. It has been three things now, and the reasons matter:
 * a cream-to-gold gradient, which ended at `#F0C063` and swallowed the amber
 * accent every `handoff_icons_v1` icon is built around (about 1.3:1); then the
 * spec's `#FDF3DE` tint, which cleared the accent but left the chip too close
 * to the white card to hold an edge. White clears the accent best of all, and
 * the hairline gives back the edge the tint could not.
 */
function TileChip({
  size,
  radius,
  children,
}: {
  size: number;
  radius: number;
  children: React.ReactNode;
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ICON_CHIP.background,
        borderWidth: 1,
        borderColor: ICON_CHIP.border,
      }}>
      {children}
    </View>
  );
}



/**
 * Where an observation sends you. The union is mapped to literal `router.push`
 * calls rather than a route string, because typed routes are on and a stringly
 * typed pathname would silently outlive a route rename.
 */
function runObservationAction(action: ObservationAction | undefined) {
  switch (action?.kind) {
    case 'progress':
      router.push('/progress');
      return;
    case 'drona':
      router.push('/drona');
      return;
    case 'lessons':
      router.push('/lessons');
      return;
    case 'class':
      router.push({
        pathname: '/entering-classroom',
        params: { chapterId: action.chapterId, chapterTitle: action.chapterTitle },
      });
  }
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
    headerButton: {
      width: scale(40),
      height: scale(40),
      borderRadius: scale(20),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: hairline(0.16),
      alignItems: 'center',
      justifyContent: 'center',
    },
    // Sits on the button's edge, the way an unread mark does — the one
    // ambient signal in the app, and it points at something earned rather
    // than at a reason to come back.
    headerDot: {
      position: 'absolute',
      top: scale(1),
      right: scale(1),
      width: scale(9),
      height: scale(9),
      borderRadius: scale(4.5),
      borderWidth: scale(1.5),
      borderColor: '#fff',
      backgroundColor: colors.marigold,
    },
    headerInitial: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(16),
      color: colors.ink,
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
      // Ink, held back a little rather than replaced. At full strength it was
      // the only pure-black object on the card and read as pasted on top of
      // the gradient; letting the amber show through warms it into the
      // surface. Alpha, not a new colour — a warm hex here would drift brown,
      // and the weight stays bold either way.
      color: hairline(0.8),
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(21),
      letterSpacing: scale(-0.32),
      lineHeight: scale(25.2),
    },
    tilesRow: {
      flexDirection: 'row',
      gap: scale(12),
    },
    tile: {
      flex: 1,
      padding: scale(18),
    },
    tileHeader: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    tileChip: {
      width: scale(44),
      height: scale(44),
      borderRadius: scale(12),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: hairline(0.12),
      alignItems: 'center',
      justifyContent: 'center',
    },
    tileTitle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(17),
      letterSpacing: scale(-0.17),
      color: colors.ink,
      marginTop: verticalScale(14),
    },
    tileSubtitle: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(12.5),
      lineHeight: scale(17.5),
      color: colors.slate,
      marginTop: verticalScale(3),
    },
    cardTitleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
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
      shadowOffset: { width: 0, height: verticalScale(5) },
      shadowOpacity: 0.16,
      shadowRadius: scale(10),
      elevation: 4,
    },
    dronaCtaInner: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      height: verticalScale(41),
      paddingHorizontal: scale(20),
      borderRadius: scale(99),
      backgroundColor: '#FFFDF8',
    },
    dronaCtaText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(15),
      color: colors.ink,
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
    scopeRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(14),
      paddingTop: verticalScale(20),
      borderTopWidth: 1,
      borderTopColor: hairline(0.1),
    },
    scopeTextBlock: {
      flex: 1,
      minWidth: 0,
    },
    scopeOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.2),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    scopeTitle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      color: colors.ink,
      marginTop: verticalScale(3),
    },
    scopeBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.slate,
      marginTop: verticalScale(2),
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

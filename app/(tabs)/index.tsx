import { router, useFocusEffect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { useSharedValue, withTiming, Easing } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { StateMoment, StatePlate } from '@/components/states';
import { recoverPendingSnap } from '@/lib/snap-pending';
import { HomeHeader } from '@/components/home-header';
import { hapticTicked, hapticUnticked } from '@/lib/haptics';
import { NoticedCard } from '@/components/noticed-card';
import { PressableScale } from '@/components/pressable-scale';
import { HomeMoreList } from '@/components/home-more-list';
import { PaperWaitingCard } from '@/components/paper-waiting-card';
import { StartingPointCard } from '@/components/starting-point-card';
import { colors } from '@/constants/brand';
import { MOMENTS_VISIBLE } from '@/constants/features';
import { useScale } from '@/constants/scale';
import { observe, type Observation, type ObservationAction } from '@/lib/noticed';
import { PlanItem, getTodayPlan, saveTodayPlan } from '@/lib/plan';
import { pullPersona } from '@/lib/persona-sync';
import { getTeacherPreference, type TeacherId } from '@/lib/preferences';
import { getStoredName } from '@/lib/profile';
import { PassEndingBanner } from '@/components/pass-ending-banner';
import { openClass } from '@/lib/open-class';
import { getCachedProgress, getProgress } from '@/lib/progress';
import { useStartingPointOffer } from '@/lib/starting-point';
import { useWaitingPaper } from '@/lib/waiting-paper';
import { classesTaken } from '@/lib/proof';

/**
 * Home — export-10a.
 *
 * The page is one column of quiet sections separated by hairlines, with a
 * single dark block at the top. Two things carry all the weight: the charcoal
 * class block and its paper key. Everything below is ink on white, ranked by
 * type size alone.
 *
 * Layout system:
 *  - type: 17/25 hero · 16/22 titles and stat numbers · 15/22 body
 *          · 13/18 supporting · 11/14 overline (uppercase, +.1em)
 *  - weights: 400 body, 600 titles, 700 overlines and links
 *  - spacing: 4pt rhythm. 32 between sections, 24 after a rule, 20 inside the
 *             Snap/Practice cells, 16 inside rows, 12 icon to title,
 *             8 label to text, 4 title to support. 24 page margin.
 *
 * Dark appears in exactly two places in the whole app frame: this page's class
 * block, and the nav island's shadow. Nothing else competes.
 *
 * Every number is real or absent. Score and ledger come from /progress; a
 * brand-new account gets honest zero states, never sample data.
 */

type StatsState =
  | { kind: 'loading' }
  | { kind: 'ready'; score: number; practised: number }
  | { kind: 'hidden' };

export default function HomeScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [firstName, setFirstName] = useState('');
  const [planItems, setPlanItems] = useState<PlanItem[]>([]);
  const [stats, setStats] = useState<StatsState>(() => {
    const c = getCachedProgress();
    if (!c) return { kind: 'loading' };
    return toStatsState(c.monk_score.display, c.ledger.questions_attempted);
  });
  const [noticed, setNoticed] = useState<Observation | null>(null);
  const startingPoint = useStartingPointOffer();
  const waitingPaper = useWaitingPaper();
  const [teacher, setTeacher] = useState<TeacherId>('drona');
  /**
   * THE SKY IN THE TEACHER'S LIGHT: 0 is Drona's, 1 is Vedha's. The first
   * teacher this screen learns is set outright — a student opening the app
   * should not watch the sky change into the teacher they already had — and
   * every change after that fades, which is a student having just chosen.
   */
  const skyMix = useSharedValue(0);
  const skyKnown = useRef(false);
  const showTeacher = useCallback(
    (t: TeacherId) => {
      setTeacher(t);
      const to = t === 'vedha' ? 1 : 0;
      if (!skyKnown.current) {
        skyKnown.current = true;
        skyMix.value = to;
      } else {
        skyMix.value = withTiming(to, { duration: 700, easing: Easing.bezier(0.4, 0, 0.2, 1) });
      }
    },
    [skyMix]
  );
  const doneCount = planItems.filter((item) => item.done).length;
  /** The finished plan folds into its moment; a tap opens the list again. */
  const [planOpen, setPlanOpen] = useState(false);

  /** Home is white to the top now, so the clock is always ink, and a white
   *  strip under it keeps the page from scrolling up behind it. */
  const insets = useSafeAreaInsets();
  const [focused, setFocused] = useState(false);

  // Refetch on focus, not just mount — the plan is edited on a separate screen
  // this one stays mounted underneath, and the score moves while the student
  // practises. Every one of these seeds from cache or leaves what is on screen
  // alone, so a refresh that finds nothing new repaints nothing. (The notes
  // fetch this comment used to mention went with the Recent notes section.)
  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      setFocused(true);
      // The stored name only — a fresh install shows the neutral glyph, never
      // a sample profile's initial presented as the student's own.
      getStoredName().then((name) => {
        if (!cancelled) setFirstName(name?.trim().split(/\s+/)[0] ?? '');
      });
      getTodayPlan().then((items) => {
        if (!cancelled) setPlanItems(items);
      });
      // Read, not assumed: the header names the teacher, and naming the wrong
      // one is worse than naming none. The default stands in only for the
      // frame before storage answers, and it is the app's own default.
      getTeacherPreference().then((t) => {
        if (!cancelled) showTeacher(t);
      });
      // Concurrent, not nested. `classesTaken` is one AsyncStorage read and
      // owes the network nothing, so waiting for the ~130KB /progress payload
      // to land before starting it was pure serial cost — the observation can
      // only be written once both have arrived either way.
      Promise.all([getProgress(), classesTaken()])
        .then(([p, classes]) => {
          if (cancelled) return;
          setStats(toStatsState(p.monk_score.display, p.ledger.questions_attempted));
          // The observation rides the same payload the stats do — one fetch,
          // and the numbers and the sentence about them can never disagree.
          setNoticed(observe(p, classes));
        })
        .catch(() => {
          if (cancelled) return;
          // No number is better than a wrong one — but a cached fetch is a true
          // number, so fall back to it rather than hiding the row.
          const c = getCachedProgress();
          setStats(
            c ? toStatsState(c.monk_score.display, c.ledger.questions_attempted) : { kind: 'hidden' }
          );
        });
      return () => {
        cancelled = true;
        setFocused(false);
      };
    }, [showTeacher])
  );

  // A snap Android rescued after closing the app while its camera was open:
  // the app restarts here, so Home sends the student on to Snap with it
  // (lib/snap-pending.ts). Android only; resolves false everywhere else.
  useEffect(() => {
    recoverPendingSnap().then((found) => {
      if (found) router.push('/snap-capture');
    });
  }, []);

  /**
   * THE SERVER'S COPY, ASKED FOR ONCE — on mount, not on every focus.
   *
   * The persona is canonical: a teacher chosen during onboarding, on another
   * device, or before a reinstall exists only there until something pulls it,
   * and Home now names the teacher out loud, so it has to ask. Profile used to
   * be the only screen that did.
   *
   * ON MOUNT IS NOT A DETAIL. Pulling on focus looked equivalent and was not:
   * coming back from Select Teacher, the pull raced the save that screen had
   * just fired, read the teacher the server had not been told about yet, and
   * wrote it back over the student's choice — tap Drona, return to Home, see
   * Vedha. Mount-only keeps the cold-start case, which is the one that needed
   * solving, and never runs at the moment a choice is in flight.
   */
  useEffect(() => {
    let cancelled = false;
    pullPersona()
      .then((persona) => {
        if (!cancelled && persona?.teacher) showTeacher(persona.teacher);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
    // `showTeacher` is stable; this still runs once, on mount.
  }, [showTeacher]);

  const togglePlanItem = (id: string) => {
    // Two different taps. Done gets the Success; un-ticking is a correction,
    // and gets a soft one — felt, but never the tap that marks finishing.
    if (planItems.find((item) => item.id === id)?.done) hapticUnticked();
    else hapticTicked();
    const next = planItems.map((item) => (item.id === id ? { ...item, done: !item.done } : item));
    setPlanItems(next);
    saveTodayPlan(next);
    // The last tick folds the list into its moment, even if it was opened.
    if (next.length > 0 && next.every((item) => item.done)) setPlanOpen(false);
  };

  return (
    <View style={styles.screen}>
      {focused ? <StatusBar style="dark" animated /> : null}
      <Animated.ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* The app bar and the live-class card, as one block. See
            components/home-header.tsx — the copy is unchanged, the two pieces
            are not two pieces any more, and the teacher now has a row of its
            own above the button that starts the class. */}
        <HomeHeader
          teacher={teacher}
          firstName={firstName}
          onSelectTeacher={() =>
            router.push({ pathname: '/select-teacher', params: { teacher } })
          }
          onStartClass={() => openClass('/drona')}
          onSnap={() => router.push('/snap-capture')}
          onPractice={() => router.push('/practice')}
          onProgress={() => router.push('/progress')}
          onProfile={() => router.push('/profile')}
          skyMix={skyMix}
        />

        <View style={styles.body}>

          {/* THE SCORE, right under Snap and Practice (Nikhil, 9 Nov 2026), so a
              student sees it the moment Home opens. It used to sit below the
              notes row and the starting-point card, under the tab bar. */}
          {stats.kind === 'ready' && (
            <View style={[styles.stats, styles.statsUp]}>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>{stats.score}</Text>
                <Text style={styles.statLabel}>Monk Score</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>{stats.practised}</Text>
                <Text style={styles.statLabel}>Practised</Text>
              </View>
            </View>
          )}

          {/* One observation, or nothing. Silence is a valid answer — see
              lib/noticed.ts — so this renders nothing at all rather than a
              placeholder, and the section below simply moves up. */}
          {/* On hold — see MOMENTS_VISIBLE in constants/features.ts. */}
          {MOMENTS_VISIBLE && noticed && (
            <View style={styles.noticedSlot}>
              <NoticedCard
                observation={noticed}
                onPress={() => runObservationAction(noticed.action)}
              />
            </View>
          )}

          {/* The free first paper, for a student the app does not know yet.
              Above the stats because, for them, there is nothing to show
              there until they have answered something. */}
          {/* A paper left running comes first: it is on the clock. */}
          {waitingPaper ? (
            <PaperWaitingCard paper={waitingPaper} />
          ) : (
            startingPoint && <StartingPointCard offer={startingPoint} />
          )}

          <PassEndingBanner />


          <View style={styles.section}>
            <View style={styles.planHeaderRow}>
              <Text style={styles.overline}>Today&apos;s plan</Text>
              <View style={styles.planHeaderRight}>
                {planItems.length > 0 && (
                  <Text style={styles.planCount}>
                    {doneCount} of {planItems.length}
                  </Text>
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
              /*
                A row, not a sentence. "Nothing planned yet. Tap + Add…" was a
                line of grey prose pointing at a control in the corner, on the
                one section of Home a student is supposed to fill in
                themselves. This is the shape the first plan will take — a
                dashed open box where its checkbox goes — and the whole thing
                is the button, so the instruction is the tap.
              */
              <PressableScale style={styles.planEmptyRow} onPress={() => router.push('/plan-sheet')}>
                {/* The plan's glyph on the teacher's sky, as every screen state
                    is drawn (components/states): Home's own object, not a
                    dashed circle. */}
                <StatePlate glyph="plan" size={scale(40)} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.planEmptyLabel}>Set your first plan for today</Text>
                  <Text style={styles.planEmptySub}>Up to 3 things you want to get done today.</Text>
                </View>
              </PressableScale>
            ) : doneCount === planItems.length && !planOpen ? (
              /*
                EVERY PLAN TICKED: A SMALL WIN. The list folds into one line
                with a sky tick and what was done, in the student's own words.
                A tap opens the list again, so an item can still be unticked.
              */
              <PressableScale
                style={styles.planDone}
                onPress={() => setPlanOpen(true)}
                accessibilityHint="Shows today's plans">
                <StateMoment
                  title={planItems.length === 1 ? 'Done for today.' : `All ${planItems.length} done today.`}
                  line={planItems.map((item) => item.text).join(', ')}
                />
              </PressableScale>
            ) : (
              <View style={styles.planRows}>
                {planItems.map((item) => (
                  <PressableScale
                    key={item.id}
                    style={styles.planRow}
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
                ))}
              </View>
            )}
          </View>

          {/* Class notes, Exam scope and Mock tests: places visited now and
              then, together in one quiet list (Nikhil, 9 Nov 2026). */}
          <HomeMoreList />
        </View>
      </Animated.ScrollView>

      {/* A white strip behind the clock, so the page scrolls under it. */}
      <View pointerEvents="none" style={[styles.statusScrim, { height: insets.top }]} />
    </View>
  );
}


/**
 * HOW MUCH OF IT, and these are measured rather than chosen. The PNG carried
 * its strength in two places at once — a per-pixel alpha that was mostly near
 * zero, and a view opacity over the top — so none of its numbers transfer to a
 * shader whose grey sits at full alpha everywhere.
 *
 * The shader first reproduced the PNG exactly — 0.689 against 0.685 at the
 * scale the mottling lives on — because that change was about the mechanism
 * and the look had to be shown not to have moved. It then turned out the look
 * itself was wrong: three rounds of reductions had compounded to the point
 * where the texture was not visible at arm's length, only under a 4x crop.
 * The card is at twice that now, which is where it reads as paper on a phone
 * rather than in a screenshot.
 */
/**
 * THE PLATE'S GROUND — a 36pt window onto the header's own sky.
 *
 * It used to be the live-class card's treatment at a thirty-sixth of the area:
 * a charcoal-to-brown gradient with a warm glow in the lower right. That card
 * does not exist any more — the header replaced it — so these two plates were
 * the last surviving miniatures of a design nothing else on the page shared,
 * which is exactly why they read as odd: dark blobs quoting something that had
 * gone.
 *
 * So they quote the thing that is actually there. This is the SAME shader the
 * header runs (components/night-sky.tsx), evaluated at 36 points instead of
 * 390, so each plate shows the whole composition in miniature — night at the
 * top, the lamp glowing up past the bottom edge. Not a gradient that resembles
 * the header: the header's own field, at a smaller size.
 *
 * It costs nothing extra to do it properly. The sky is a still, so a plate is
 * one shader evaluation over 36x36 points, drawn once and cached like every
 * other static Skia picture on the page.
 */
function toStatsState(score: number, practised: number): StatsState {
  if (score === 0 && practised === 0) return { kind: 'hidden' };
  return { kind: 'ready', score, practised };
}

function runObservationAction(action: ObservationAction | undefined) {
  switch (action?.kind) {
    case 'progress':
      router.push('/progress');
      return;
    case 'drona':
      openClass('/drona');
      return;
    case 'textbooks':
      // Deliberately the subject grid, not that subject's chapter list: the
      // card fires for a subject nobody has opened, and for one whose textbook
      // is not written yet that would land on a wall of SOON.
      router.push('/textbooks');
      return;
    case 'class':
      openClass({
        pathname: '/entering-classroom',
        params: { chapterId: action.chapterId, chapterTitle: action.chapterTitle },
      });
  }
}

/**
 * Class notes, drawn to the Revise marks' rules (components/revise/revise-icons):
 * a 24 grid, one 1.8 ink line, one marigold dot. A notebook with its spine; the
 * dot sits where the second written line would be, the note itself.
 */
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

const RULE = 'rgba(28,26,22,.1)';

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
    },
    /* Nothing of its own. The header runs to all three edges and up under the
       status bar, so the page margin belongs to everything BELOW it. */
    scrollContent: {
      paddingBottom: verticalScale(130),
    },
    body: {
      paddingTop: verticalScale(20),
      paddingHorizontal: scale(24),
    },
    statusScrim: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#fff',
    },

    /* Snap and Practice moved up under the header, so the score row sits
       directly beneath them. */
    statsUp: {
      marginTop: 0,
      paddingTop: verticalScale(16),
    },

    // The row closes itself with a hairline, matching the stats row below it,
    // so the three blocks under the strip share one rhythm.
    noticedSlot: {
      marginTop: verticalScale(32),
    },

    // --- stats ---
    stats: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(40),
      marginTop: verticalScale(32),
      paddingBottom: verticalScale(16),
      borderBottomWidth: 1,
      borderBottomColor: RULE,
    },
    stat: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: scale(6),
    },
    statNumber: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      lineHeight: scale(22),
      letterSpacing: scale(-0.012 * 16),
      // Three-digit values without the column shifting as they grow.
      fontVariant: ['tabular-nums'],
      color: colors.ink,
    },
    statLabel: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.slate,
    },

    // --- shared section furniture ---
    section: {
      marginTop: verticalScale(32),
    },
    overline: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11),
      lineHeight: scale(14),
      letterSpacing: scale(0.1 * 11),
      textTransform: 'uppercase',
      color: colors.slate,
    },

    // --- today's plan ---
    planHeaderRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(12),
    },
    planHeaderRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
    },
    planCount: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.slate,
    },
    planAddPill: {
      paddingHorizontal: scale(12),
      paddingVertical: verticalScale(5),
      borderRadius: 99,
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.16)',
    },
    planAddText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.ink,
    },
    planEmptyRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      marginTop: verticalScale(12),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(14),
      borderRadius: scale(14),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.10)',
      backgroundColor: colors.paper,
    },
    planEmptySub: {
      marginTop: verticalScale(2),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.slate,
    },
    planDone: { marginTop: verticalScale(12) },
    /* 15/22, the page's body tier and the same as `planRowText` — which is
       this exact row once it has something in it. It was 14.5/20, the only
       size on Home that was not on the ladder, so the empty state read a
       half-point smaller than the state it turns into. */
    planEmptyLabel: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: colors.ink,
    },
    planRows: {
      marginTop: verticalScale(12),
      gap: verticalScale(12),
    },
    planRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
    },
    planCheckOpen: {
      width: scale(20),
      height: scale(20),
      borderRadius: scale(10),
      borderWidth: 1.5,
      borderColor: 'rgba(28,26,22,.26)',
    },
    planCheckDone: {
      width: scale(20),
      height: scale(20),
      borderRadius: scale(10),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.ink,
    },
    planRowText: {
      flex: 1,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: colors.ink,
    },
    planRowTextDone: {
      flex: 1,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: colors.faint,
      textDecorationLine: 'line-through',
    },


  });
}

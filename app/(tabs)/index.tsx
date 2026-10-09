import { router, useFocusEffect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  useWindowDimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
  withTiming,
  Easing,
  type SharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { HomeHeader } from '@/components/home-header';
import { NightSkyAbove, NightSkyStrip, ThemedSky } from '@/components/night-sky';
import { PracticeIcon, SnapADoubtIcon } from '@/components/monk-icons';
import { hapticTicked, hapticUnticked } from '@/lib/haptics';
import { NoticedCard } from '@/components/noticed-card';
import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { MOMENTS_VISIBLE } from '@/constants/features';
import { useScale } from '@/constants/scale';
import { SKY_THEMES } from '@/constants/teachers';
import { observe, type Observation, type ObservationAction } from '@/lib/noticed';
import { PlanItem, getTodayPlan, saveTodayPlan } from '@/lib/plan';
import { pullPersona } from '@/lib/persona-sync';
import { getTeacherPreference, type TeacherId } from '@/lib/preferences';
import { getStoredName } from '@/lib/profile';
import { getCachedProgress, getProgress } from '@/lib/progress';
import { classesTaken } from '@/lib/proof';

/** Drona's sky, then Vedha's — the order `skyMix` runs 0 to 1 in. */
const TEACHER_SKIES = [SKY_THEMES.drona, SKY_THEMES.vedha] as const;

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

  const [initial, setInitial] = useState('');
  const [planItems, setPlanItems] = useState<PlanItem[]>([]);
  const [stats, setStats] = useState<StatsState>(() => {
    const c = getCachedProgress();
    if (!c) return { kind: 'loading' };
    return toStatsState(c.monk_score.display, c.ledger.questions_attempted);
  });
  const [noticed, setNoticed] = useState<Observation | null>(null);
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

  /**
   * THE STATUS BAR FOLLOWS THE HEADER, because the header scrolls away.
   *
   * The glyphs are paper while the dark block is under them and ink the moment
   * white is. Declared here rather than in the tabs layout so this screen's
   * `<StatusBar>` sits on top of that one's `style="dark"` — and only while
   * this screen is the one being looked at, or the light setting would follow
   * the student onto a white tab and leave an invisible clock there.
   */
  const insets = useSafeAreaInsets();
  const { height: windowHeight } = useWindowDimensions();
  const [header, setHeader] = useState({ width: 0, height: 0 });
  const [barLight, setBarLight] = useState(true);
  const [focused, setFocused] = useState(false);

  /** How far the header can travel before its bottom edge reaches the clock. */
  const skyTravel = Math.max(1, header.height - insets.top);
  /** Where the clock flips to ink: the header's bottom is about to leave. */
  const flipAt = skyTravel - scale(8);
  /** The page's scroll, on the UI thread, so the strip behind the clock moves
   *  with the header frame for frame rather than a frame behind it. */
  const scrollY = useSharedValue(0);
  const lightNow = useSharedValue(true);
  const onScroll = useAnimatedScrollHandler(
    (e) => {
      scrollY.value = e.contentOffset.y;
      const covered = e.contentOffset.y < flipAt;
      if (covered !== lightNow.value) {
        lightNow.value = covered;
        runOnJS(setBarLight)(covered);
      }
    },
    [flipAt]
  );
  const skyOffset = useDerivedValue(
    () => Math.min(Math.max(scrollY.value, 0), skyTravel),
    [skyTravel]
  );
  /** Gone over the last stretch before the flip, so it fades rather than cuts.
   *  Worked out here, not in the worklet: `scale` cannot run on the UI thread. */
  const fadeFrom = flipAt - scale(24);
  const skyFade = useDerivedValue(
    () => interpolate(scrollY.value, [fadeFrom, flipAt], [1, 0], Extrapolation.CLAMP),
    [fadeFrom, flipAt]
  );

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
        if (!cancelled) setInitial(name?.trim()[0]?.toUpperCase() ?? '');
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
  };

  return (
    <View style={styles.screen}>
      {focused ? <StatusBar style={barLight ? 'light' : 'dark'} animated /> : null}
      <Animated.ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}>
        {/*
          THE SKY ABOVE THE SKY, for a pull past the top.

          The page bounces at both ends, as an iPhone page should. Pulled down
          past the top, though, the header slid down and opened a white gap
          above it, under the strip of sky that stays behind the clock — the
          header and the status bar came apart. This sits directly above the
          header, off the top of the page, and moves with it: a pull reveals
          more of the sky's own top edge, grain and all, so it reads as the
          header stretching rather than tearing away. At rest and in an
          ordinary scroll it is above the screen and never seen.
        */}
        {header.width > 0 ? (
          <NightSkyAbove
            width={header.width}
            height={windowHeight}
            style={[styles.skyAbove, { top: -windowHeight }]}
          />
        ) : null}
        {/* The app bar and the live-class card, as one block. See
            components/home-header.tsx — the copy is unchanged, the two pieces
            are not two pieces any more, and the teacher now has a row of its
            own above the button that starts the class. */}
        <HomeHeader
          teacher={teacher}
          initial={initial}
          onSelectTeacher={() =>
            router.push({ pathname: '/select-teacher', params: { teacher } })
          }
          onStartClass={() => router.push('/drona')}
          onProgress={() => router.push('/progress')}
          onProfile={() => router.push('/profile')}
          onMeasure={setHeader}
          skyMix={skyMix}
        />

        <View style={styles.body}>

          {/*
            Two cells of one strip, not two cards. A vertical rule between them
            and a horizontal rule above and below: the pair reads as a single
            row of the document, one rank below the block.

            THE LAYOUT IS THE ORIGINAL ONE. An inline head — plate beside the
            title — was tried and reverted: beside a 36pt plate there is not
            enough width left for "Snap and Solve" to hold one line, so it
            wrapped while "Practice" did not, and the only ways out were a
            smaller title or a shorter name. With the title on its own full
            width it fits at 16pt, which is where it started.

            WHAT IS NOT REVERTED IS THE ICON. It was a 24pt outline in the same
            colour as the body copy, sitting in a corner at the weight of a
            footnote directly beneath a black card with a white button on it.
            It reverses out of an ink plate now.

            AND THERE IS NO PER-FEATURE COLOUR. A red plate for Snap and a
            green one for Practice was colour-CODING something with no code:
            nothing about practising is green, nothing about a camera is red,
            and a pastel square with a matching glyph in it is the most
            templated component on the internet. Both plates are identical; the
            DRAWING is what separates the two cards, because that is the part
            carrying meaning. The colour that remains is the app's own
            marigold, already inside both icons — the camera's aperture and the
            card's bullet.
          */}
          <View style={styles.strip}>
            <PressableScale
              style={[styles.stripCell, styles.stripCellLeft]}
              onPress={() => router.push('/snap-capture')}>
              <View style={styles.stripHead}>
                <View style={styles.stripPlate}>
                  <PlateGround size={scale(36)} mix={skyMix} />
                  <SnapADoubtIcon size={scale(19)} color={colors.paper} accent={colors.paper} />
                </View>
                <ArrowRightIcon color={colors.ink} size={scale(16)} />
              </View>
              <Text style={styles.stripTitle}>Snap and Solve</Text>
              <Text style={styles.stripBody}>Up to 3 questions, solved step by step</Text>
            </PressableScale>
            <PressableScale
              style={[styles.stripCell, styles.stripCellRight]}
              onPress={() => router.push('/practice')}>
              <View style={styles.stripHead}>
                <View style={styles.stripPlate}>
                  <PlateGround size={scale(36)} mix={skyMix} />
                  <PracticeIcon size={scale(19)} color={colors.paper} accent={colors.paper} />
                </View>
                <ArrowRightIcon color={colors.ink} size={scale(16)} />
              </View>
              <Text style={styles.stripTitle}>Practice</Text>
              {/* 150 a day, and the app now says so everywhere — the pass
                  screen and the paywall both read this off `INCLUDED` in
                  constants/onboarding.ts. monklearning.com is still on 75 in
                  three places, including the structured FAQ Google reads, and
                  that file is in another repo. Neither figure is enforced on
                  the server yet: /practice/* returns no daily or quota field,
                  unlike Snap, which has daily_limit and used_today. */}
              <Text style={styles.stripBody}>150 a day, across all subjects</Text>
            </PressableScale>
          </View>

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

          {stats.kind === 'ready' && (
            <View style={styles.stats}>
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
                <View style={styles.planEmptyCheck}>
                  <Text style={styles.planEmptyPlus}>+</Text>
                </View>
                <Text style={styles.planEmptyLabel}>Set your first plan for today</Text>
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

          {/* Last thing on the page, deliberately quiet: this is a reference
              students visit once or twice, not a daily action. */}
          <PressableScale style={styles.scopeRow} onPress={() => router.push('/exam-scope')}>
            <View style={styles.scopeTextBlock}>
              <Text style={styles.overline}>Exam scope</Text>
              <Text style={styles.scopeTitle}>What&apos;s actually in your exam</Text>
              <Text style={styles.scopeBody}>
                Not every NCERT chapter is examinable. See what counts, and what you can stop
                studying.
              </Text>
            </View>
            <ArrowRightIcon color={colors.slate} size={scale(15)} />
          </PressableScale>
        </View>
      </Animated.ScrollView>

      {/*
        THE STRIP OF SKY BEHIND THE CLOCK.

        The header scrolls, and the status bar does not. Without this, the
        teacher row slides up behind the clock and the two sets of pale text
        overlap on an amber field — which the web mock could not show, because
        there the status bar is drawn inside the page and scrolls away with it.

        So a copy of the same sky is pinned at the top, clipped to the safe
        area, for exactly as long as the header is still under the status bar.
        It is the SAME shader at the SAME size, so while the page is at rest it
        is indistinguishable from the header behind it.

        AND IT SCROLLS WITH THE HEADER. It used to show the top of the sky —
        its darkest band — wherever the page was, so once the header moved up
        and its amber middle was under the clock, the strip sat over it as a
        dark bar. Now the sky inside the strip slides up with the scroll, so
        the strip always shows the very slice of sky that is beneath it: one
        continuous sky, with the header's words and buttons passing out of
        sight under it, its lower edge dissolving rather than slicing them.
        It is clipped to the header's own rounded bottom, and over the last
        stretch before the header leaves it fades out, so it is gone — not
        cut — by the time the status bar flips to ink. See NightSkyStrip.
      */}
      {barLight && header.width > 0 ? (
        <NightSkyStrip
          width={header.width}
          skyHeight={header.height}
          height={insets.top}
          feather={Math.min(scale(16), insets.top * 0.3)}
          corner={scale(34)}
          offset={skyOffset}
          fade={skyFade}
          themes={TEACHER_SKIES}
          mix={skyMix}
          style={styles.statusScrim}
        />
      ) : null}
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
function PlateGround({ size, mix }: { size: number; mix: SharedValue<number> }) {
  /* Absolutely positioned, or the canvas takes layout space inside a plate
     that centres its children and shoves the glyph off the bottom edge. In
     the teacher's light, like the header it is a miniature of. */
  return (
    <ThemedSky
      width={size}
      height={size}
      themes={TEACHER_SKIES}
      mix={mix}
      style={StyleSheet.absoluteFillObject}
    />
  );
}

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
      router.push('/drona');
      return;
    case 'textbooks':
      // Deliberately the subject grid, not that subject's chapter list: the
      // card fires for a subject nobody has opened, and for one whose textbook
      // is not written yet that would land on a wall of SOON.
      router.push('/textbooks');
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
      paddingTop: verticalScale(28),
      paddingHorizontal: scale(24),
    },
    skyAbove: { position: 'absolute', left: 0 },
    statusScrim: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      overflow: 'hidden',
    },

    // --- snap / practice ---
    strip: {
      flexDirection: 'row',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: RULE,
    },
    stripCell: {
      flex: 1,
      paddingVertical: verticalScale(20),
    },
    stripCellLeft: {
      paddingRight: scale(20),
      borderRightWidth: 1,
      borderRightColor: RULE,
    },
    stripCellRight: {
      paddingLeft: scale(20),
    },
    stripHead: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    /** Ink, and the glyph reverses out of it. The plate is what makes the icon
     *  the first thing read in the cell rather than the last. */
    stripPlate: {
      width: scale(36),
      height: scale(36),
      borderRadius: scale(11),
      alignItems: 'center',
      justifyContent: 'center',
      /* NO DARK GROUND UNDER THE SKY, as on the header: the rounded clip
         smooths each layer's edge separately, and a `night` ground showed
         through as a dark rim round the plate's corners and edges. The sky
         carries its own fallback colour for a phone where it cannot draw. */
      /** Clips the glow and the grain to the plate's corners — the same thing
       *  the card needed once it held more than one layer. */
      overflow: 'hidden',
    },
    stripTitle: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      lineHeight: scale(22),
      letterSpacing: scale(-0.012 * 16),
      color: colors.ink,
      marginTop: verticalScale(12),
    },
    stripBody: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.slate,
      marginTop: verticalScale(4),
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
    /** Where the checkbox goes, drawn open: dashed, because the row is an
     *  invitation rather than an item that can be ticked. */
    planEmptyCheck: {
      width: scale(20),
      height: scale(20),
      borderRadius: scale(10),
      borderWidth: 1.5,
      borderStyle: 'dashed',
      borderColor: 'rgba(28,26,22,.28)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    planEmptyPlus: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(13),
      lineHeight: scale(15),
      color: colors.slate,
    },
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


    // --- exam scope ---
    scopeRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(16),
      marginTop: verticalScale(32),
      paddingTop: verticalScale(24),
      borderTopWidth: 1,
      borderTopColor: RULE,
    },
    scopeTextBlock: {
      flex: 1,
      minWidth: 0,
    },
    scopeTitle: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      lineHeight: scale(22),
      letterSpacing: scale(-0.012 * 16),
      color: colors.ink,
      marginTop: verticalScale(10),
    },
    scopeBody: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.slate,
      marginTop: verticalScale(4),
    },
  });
}

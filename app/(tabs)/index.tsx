import { LinearGradient } from 'expo-linear-gradient';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Defs, Path, RadialGradient, Rect, Rect as SvgRect, Stop } from 'react-native-svg';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { MonkLogo } from '@/components/monk-logo';
import { NoticedCard } from '@/components/noticed-card';
import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { observe, type Observation, type ObservationAction } from '@/lib/noticed';
import { PlanItem, getTodayPlan, saveTodayPlan } from '@/lib/plan';
import { getStoredName } from '@/lib/profile';
import { getCachedProgress, getProgress } from '@/lib/progress';
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

  const [initial, setInitial] = useState('');
  const [planItems, setPlanItems] = useState<PlanItem[]>([]);
  const [stats, setStats] = useState<StatsState>(() => {
    const c = getCachedProgress();
    if (!c) return { kind: 'loading' };
    return toStatsState(c.monk_score.display, c.ledger.questions_attempted);
  });
  const [noticed, setNoticed] = useState<Observation | null>(null);
  const doneCount = planItems.filter((item) => item.done).length;

  // Refetch on focus, not just mount — the plan is edited on a separate screen
  // this one stays mounted underneath, and the score moves while the student
  // practises. Every one of these seeds from cache or leaves what is on screen
  // alone, so a refresh that finds nothing new repaints nothing. (The notes
  // fetch this comment used to mention went with the Recent notes section.)
  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      // The stored name only — a fresh install shows the neutral glyph, never
      // a sample profile's initial presented as the student's own.
      getStoredName().then((name) => {
        if (!cancelled) setInitial(name?.trim()[0]?.toUpperCase() ?? '');
      });
      getTodayPlan().then((items) => {
        if (!cancelled) setPlanItems(items);
      });
      getProgress()
        .then((p) => {
          if (cancelled) return;
          setStats(toStatsState(p.monk_score.display, p.ledger.questions_attempted));
          // The observation rides the same payload the stats do — one fetch,
          // and the numbers and the sentence about them can never disagree.
          classesTaken().then((classes) => {
            if (!cancelled) setNoticed(observe(p, classes));
          });
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
        {/* App bar. The rule under it is full-bleed and 1.5pt — heavier than
            every other line on the page, because it separates the chrome from
            the document rather than one section from the next. */}
        <View style={styles.appBar}>
          {/* The SYMBOL's height, and the lockup's -- the wordmark and the gap
              are both ratios of it, so this one number scales the whole mark.
              Settled at 20 after 30 (too symbol-dominant), 21, then 18 (word
              too small once the ratios were right). */}
          <MonkLogo height={scale(20)} />
          <View style={styles.appBarRight}>
            <PressableScale
              style={styles.appBarButton}
              accessibilityLabel="Progress"
              onPress={() => router.push('/progress')}>
              <ProgressGlyph size={scale(20)} />
            </PressableScale>
            <PressableScale
              style={styles.appBarButton}
              accessibilityLabel="Profile"
              onPress={() => router.push('/profile')}>
              {initial ? (
                <Text style={styles.appBarInitial}>{initial}</Text>
              ) : (
                <PersonIcon size={scale(19)} />
              )}
            </PressableScale>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <ClassBlock styles={styles} scale={scale} onPress={() => router.push('/drona')} />

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
                  <PlateGround />
                  <SnapIcon size={scale(19)} stroke={colors.paper} dot={colors.marigold} />
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
                  <PlateGround />
                  <PracticeIcon size={scale(19)} stroke={colors.paper} dot={colors.marigold} />
                </View>
                <ArrowRightIcon color={colors.ink} size={scale(16)} />
              </View>
              <Text style={styles.stripTitle}>Practice</Text>
              {/* 150 a day. NOTE: monklearning.com currently publishes 75
                  ("50 doubt snaps and 75 practice questions a day") in three
                  places, so the site needs the same number or the two disagree
                  on one entitlement. Neither figure is enforced anywhere yet —
                  /practice/* returns no daily/quota field, unlike Snap, which
                  has daily_limit and used_today. */}
              <Text style={styles.stripBody}>150 a day, across all subjects</Text>
            </PressableScale>
          </View>

          {/* One observation, or nothing. Silence is a valid answer — see
              lib/noticed.ts — so this renders nothing at all rather than a
              placeholder, and the section below simply moves up. */}
          {noticed && (
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
              <Text style={styles.planEmptyText}>
                Nothing planned yet. Tap <Text style={styles.planEmptyAccent}>+ Add</Text> to set
                today&apos;s plans.
              </Text>
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
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

/**
 * The class block, and the key inside it.
 *
 * The handoff draws the button with four stacked shadows, two of them inset.
 * React Native has one shadow per view and no inset at all, so the key is
 * built out of geometry instead: a dark rounded rect showing 3pt below the
 * face is the `0 3px 0` base, the face's gradient holds white for its first
 * 6% to stand in for the `inset 0 1px 0 #FFF` top highlight, and the soft
 * `0 8px 18px` is the only shadow left for the shadow props to carry.
 *
 * Pressing translates the face down 2pt and drops the base to 1, which is the
 * travel the handoff specifies — the reason the block is one Pressable rather
 * than a PressableScale is that a uniform scale cannot express it.
 */
/**
 * THE PLATE'S GROUND — the live-class card's treatment, at a thirty-sixth of
 * the area: a warm glow in the lower-right and the same grain over it.
 *
 * THE GRAIN IS SAMPLED 1:1, and that is the whole difficulty of putting it on
 * something this small. The sheet is 420x240 source pixels drawn across a
 * 342pt card, so each of its pixels covers about 2.4 device pixels. Fitting
 * that same sheet into a 36pt box would ask for a FOUR-fold reduction, and
 * downscaling noise averages it away — the plate would come out a flat wash
 * with the texture gone.
 *
 * So the sheet is not fitted. It is laid at 140x80pt, which on a 3x screen is
 * 420x240 device pixels: exactly its own size, one source pixel to one device
 * pixel. The plate clips, and a 36pt window of true grain shows through. One
 * asset, two very different surfaces, no resampling on either.
 */
function PlateGround() {
  return (
    <>
      <Svg style={StyleSheet.absoluteFill} pointerEvents="none">
        <Defs>
          <RadialGradient id="plateGlow" cx="0.85" cy="1.05" r="0.95">
            <Stop offset="0" stopColor="#D9932A" stopOpacity={0.5} />
            <Stop offset="1" stopColor="#8A5A14" stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <SvgRect x="0" y="0" width="100%" height="100%" fill="url(#plateGlow)" />
      </Svg>
      <Image source={require('@/assets/images/grain.png')} style={plateGrainStyle} />
    </>
  );
}

/** Its own size in points, so the pixels land 1:1. See `PlateGround`. */
const plateGrainStyle = {
  position: 'absolute' as const,
  left: 0,
  top: 0,
  width: 140,
  height: 80,
  opacity: 0.5,
  mixBlendMode: 'overlay' as const,
};

function ClassBlock({
  styles,
  scale,
  onPress,
}: {
  styles: ReturnType<typeof createStyles>;
  scale: (n: number) => number;
  onPress: () => void;
}) {
  const [held, setHeld] = useState(false);
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Start a live class"
      onPress={onPress}
      onPressIn={() => setHeld(true)}
      onPressOut={() => setHeld(false)}
      style={styles.classBlock}>
      {/* An absolute fill, not a wrapper with `overflow: hidden`.
          Clipping the block would take the drop shadow with it -- RN cannot
          draw a shadow around a view that clips its own children -- and the
          shadow is part of the design. An absolutely-positioned child fills
          the padding box, so it lands INSIDE the 1pt amber ring and leaves it
          drawing on top; its radius is 21, one point tighter than the block's
          22, so the two stay concentric. */}
      {/*
        THE GROUND, IN THREE LAYERS. Charcoal at the top, a warm glow rising
        from the foot, and grain over the whole of it.

        ONE LINEAR GRADIENT COULD NOT DO IT. The light in the reference does
        not fall in a straight line down the card — it gathers at the bottom
        and leans into the bottom-right corner, which is a radial event. So the
        linear pass carries the vertical charcoal-to-brown and a radial pass
        lays the gold over it, centred just past the bottom-right corner so the
        card catches the edge of the glow rather than containing its middle.

        AND THE GRAIN IS A REAL IMAGE, tiled. `FeTurbulence` is the obvious way
        to make noise in SVG and it is a no-op here: react-native-svg ships
        `FeTurbulence.tsx` in JavaScript but there is no `RNSVGFeTurbulence` on
        the Apple side at all — only Blend, ColorMatrix, Composite, Flood,
        GaussianBlur, Merge and Offset are implemented natively. It would have
        rendered nothing, silently, which is the same trap as `filter: blur()`.

        It is ONE SHEET, not a repeated tile. `resizeMode="repeat"` drew a
        single 128pt tile in the top-left with a hard edge down its right side
        — measured, not guessed: high-frequency energy ran 5.7 in the left
        third of the card against 1.3 in the right, and as a step rather than a
        falloff. So the grain is generated at the card's own proportion and
        drawn once, over everything, because grain that reads as grain has to be
        ON the image rather than beside it.
      */}
      <View style={styles.classGradient} pointerEvents="none">
        <LinearGradient
          colors={['#1C1915', '#221E19', '#4A3512']}
          locations={[0, 0.42, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={StyleSheet.absoluteFill}
        />
        <Svg style={StyleSheet.absoluteFill} pointerEvents="none">
          <Defs>
            <RadialGradient id="classGlow" cx="0.82" cy="1.04" r="0.9">
              <Stop offset="0" stopColor="#D9932A" stopOpacity={0.62} />
              <Stop offset="0.45" stopColor="#B4761E" stopOpacity={0.3} />
              <Stop offset="1" stopColor="#8A5A14" stopOpacity={0} />
            </RadialGradient>
          </Defs>
          <SvgRect x="0" y="0" width="100%" height="100%" fill="url(#classGlow)" />
        </Svg>
        <Image
          source={require('@/assets/images/grain.png')}
          style={styles.classGrain}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.classLine}>Pick a chapter and your teacher teaches it live.</Text>
      <View style={[styles.keyBase, held && styles.keyBaseHeld]}>
        <LinearGradient
          colors={['#FFFFFF', '#FFFFFF', '#F4F0E6']}
          locations={[0, 0.06, 1]}
          style={[styles.keyFace, held && { transform: [{ translateY: scale(2) }] }]}>
          <Text style={styles.keyLabel}>Start a Live Class</Text>
        </LinearGradient>
      </View>
    </Pressable>
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

function PersonIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Circle cx={12} cy={8} r={3.6} stroke={colors.ink} strokeWidth={1.7} />
      <Path
        d="M4.8 20c0-3.6 3.2-5.6 7.2-5.6s7.2 2 7.2 5.6"
        stroke={colors.ink}
        strokeWidth={1.7}
        strokeLinecap="round"
      />
    </Svg>
  );
}

/** The bars from the old Progress tab, at app-bar size. Same shape, so the
 *  control is recognisable in its new home. */
function ProgressGlyph({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M4.5 19h15" stroke={colors.ink} strokeWidth={1.75} strokeLinecap="round" />
      <Path
        d="M8 19v-4.5M12 19v-8M16 19V7.5"
        stroke={colors.ink}
        strokeWidth={1.75}
        strokeLinecap="round"
      />
      <Circle cx={16} cy={4.6} r={1.8} fill={colors.marigold} />
    </Svg>
  );
}

/**
 * Stroke and the marigold mark are separate colours, so the drawing can reverse
 * onto an ink plate without losing the thing that signs it. The aperture is
 * fractionally larger reversed: a 1.2 dot that held its own against white ink
 * disappears against cream on dark.
 */
function SnapIcon({ size, stroke = colors.ink, dot = colors.marigold }: { size: number; stroke?: string; dot?: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M8.6 6.4 9.9 4.1h4.2l1.3 2.3" stroke={stroke} strokeWidth={1.8} />
      <Rect x={2.8} y={6.4} width={18.4} height={13.5} rx={3.2} stroke={stroke} strokeWidth={1.8} />
      <Circle cx={12} cy={13.2} r={3.6} stroke={stroke} strokeWidth={1.8} />
      <Circle cx={12} cy={13.2} r={1.5} fill={dot} />
    </Svg>
  );
}

function PracticeIcon({ size, stroke = colors.ink, dot = colors.marigold }: { size: number; stroke?: string; dot?: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M7 5.6h11.4a2 2 0 0 1 2 2v9.2" stroke={stroke} strokeWidth={1.8} />
      <Rect x={3.4} y={8.2} width={13.2} height={11.8} rx={2} stroke={stroke} strokeWidth={1.8} />
      {/* The marigold marks the item ON the card, not a blob beside it.
          It used to sit at cx 17.4 -- the front card's stroke spans
          15.75-17.45, so the dot was centred on the border, half inside the
          card and half in the channel, cutting the back card's edge on its
          way past. It read as a smudge welded to the corner.

          Snap's marigold is the aperture: inside the form, concentric,
          doing a job. This one is now the bullet on the card's one line,
          which is also how a plan row is drawn elsewhere in the app. Dot
          and line sit on 1.00 of clearance at each end of the card's
          interior, the round cap included. */}
      <Circle cx={6.4} cy={12.4} r={1.4} fill={dot} />
      <Path d="M10 12.4h3.9" stroke={stroke} strokeWidth={1.8} />
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

const RULE = 'rgba(28,26,22,.1)';

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
    },
    safeArea: {
      flex: 1,
    },

    // --- app bar ---
    appBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(12),
      paddingLeft: scale(24),
      paddingRight: scale(24),
      paddingTop: verticalScale(10),
      paddingBottom: verticalScale(14),
      borderBottomWidth: 1.5,
      borderBottomColor: 'rgba(28,26,22,.14)',
    },
    appBarRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
    },
    appBarButton: {
      width: scale(40),
      height: scale(40),
      borderRadius: scale(20),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.16)',
    },
    appBarInitial: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(16),
      color: colors.ink,
    },

    scrollContent: {
      paddingTop: verticalScale(28),
      paddingHorizontal: scale(24),
      paddingBottom: verticalScale(130),
    },

    // --- the class block ---
    classBlock: {
      alignItems: 'flex-start',
      gap: verticalScale(20),
      padding: scale(24),
      borderRadius: scale(22),
      // Kept under the gradient as the base coat: it is the gradient's own
      // first two stops, so nothing flashes before the gradient paints and the
      // 1pt border has something to sit against.
      backgroundColor: '#2A2621',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.8)',
      shadowColor: colors.ink,
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: verticalScale(12) },
      shadowRadius: scale(30),
      elevation: 10,
      marginBottom: verticalScale(32),
    },
    /** Over everything, and it must not catch a touch. */
    /**
     * OVERLAY, not plain alpha. Laid on normally, grain is additive: a speck of
     * 44 alpha over near-black is a large relative jump and the same speck over
     * mid-gold is almost nothing, so the texture read strongly at the top of
     * the card and thinned out into the glow — measured at 2.2x more
     * high-frequency energy on the dark side than the bright. Overlay scales
     * each speck against what is under it, which is how grain behaves in a
     * photograph and what keeps it even across the whole face.
     */
    classGrain: { ...StyleSheet.absoluteFillObject, opacity: 0.9 },
    classGradient: {
      ...StyleSheet.absoluteFillObject,
      borderRadius: scale(21),
      /**
       * CLIPS ITS CHILDREN, and it has to now that there are three of them.
       * A radius alone shapes the view's own background; it does not shape
       * what is painted inside it. While this WAS the gradient, that was
       * enough — a gradient clips its own painting to its radius. As a wrapper
       * holding a gradient, an SVG glow and a grain sheet, it left all three
       * drawing square corners across the card's rounded amber border.
       *
       * Safe here, and only here: the drop shadow lives on `classBlock`
       * outside this, so clipping costs nothing. Clipping the BLOCK would take
       * the shadow with it, which is what the note there warns about.
       */
      overflow: 'hidden',
    },
    classLine: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(17),
      lineHeight: scale(25),
      color: colors.paper,
    },
    /** The `0 3px 0` base: a dark rect the face sits 3pt proud of. */
    keyBase: {
      paddingBottom: 3,
      borderRadius: 99,
      backgroundColor: 'rgba(28,26,22,.55)',
      shadowColor: '#000',
      shadowOpacity: 0.34,
      shadowOffset: { width: 0, height: verticalScale(8) },
      shadowRadius: scale(18),
      elevation: 6,
    },
    keyBaseHeld: {
      paddingBottom: 1,
    },
    keyFace: {
      height: verticalScale(46),
      paddingHorizontal: scale(20),
      borderRadius: 99,
      alignItems: 'center',
      justifyContent: 'center',
    },
    keyLabel: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      lineHeight: scale(22),
      letterSpacing: scale(-0.012 * 16),
      color: colors.ink,
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
      backgroundColor: colors.ink,
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
    planEmptyText: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: colors.slate,
      marginTop: verticalScale(12),
    },
    planEmptyAccent: {
      fontFamily: 'Onest_600SemiBold',
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

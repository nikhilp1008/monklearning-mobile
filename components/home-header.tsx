import { useMemo, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { MonkLogo } from '@/components/monk-logo';
import { ProgressGlyph } from '@/components/monk-icons';
import { ThemedSky } from '@/components/night-sky';
import { PressableScale } from '@/components/pressable-scale';
import { TeacherOrbPoster } from '@/components/teacher-orb-poster';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { SKY_THEMES, START_ARROW, TEACHERS, titleCaseTrait } from '@/constants/teachers';
import { teacherName } from '@/lib/preferences';
import type { TeacherId } from '@/lib/preferences';
import { hapticKey } from '@/lib/haptics';
import type { SharedValue } from 'react-native-reanimated';

/** Drona's sky, then Vedha's — the order `skyMix` runs 0 to 1 in. */
const TEACHER_SKIES = [SKY_THEMES.drona, SKY_THEMES.vedha] as const;

/**
 * HOME'S HEADER — "8a" in the handoff.
 *
 * The app bar and the live-class card used to be two things with a horizontal
 * rule between them: white chrome at the top, then a dark card inset by the
 * page margin. This is both of them, as one block that runs to all three
 * edges and carries the app's only full-bleed dark surface. The copy did not
 * change — the heading and the button say exactly what they said before — so
 * what this is, precisely, is the live-class card promoted to the top of the
 * page and given the logo row to stand under.
 *
 * WHAT IS NEW IS THE TEACHER. There is now a row saying who is going to teach
 * the class, above the button that starts it, inside one console. That is the
 * point of the redesign: the student could always choose a teacher and the
 * only place that said so was a settings page they had to go looking for.
 *
 * THE GLASS IS NOT A BLUR LIBRARY. In the design the console is
 * `backdrop-filter: blur(18px)` over the sky, and React Native has no
 * backdrop filter — the usual answer is a native blur view, which is a real
 * dependency, is genuinely expensive on Android, and looks different on each
 * platform. None of that is necessary here, because the thing being blurred is
 * a still picture that this app draws: the console is handed a SECOND copy of
 * the same sky, blurred, offset so its origin lines up with the header's, and
 * clipped to the console's own corner radius. That is the definition of a
 * backdrop filter, evaluated once at layout instead of every frame, with one
 * code path for both platforms.
 *
 * THE BLURRED COPY CARRIES NO GRAIN, and that is not an omission. The grain is
 * noise about one cycle per point; a Gaussian with an 18pt deviation removes
 * it completely. Drawing it only to destroy it would cost a second noise pass
 * for a result identical to this one.
 *
 * EVERY NUMBER IS THE HANDOFF'S, through `scale()`. The design is drawn on a
 * 390pt canvas like the rest of the app, so the literals below are the
 * design's own and the proportions hold on a narrower or wider phone.
 */

/** The three stars, at the handoff's coordinates on its 390x844 canvas. */
const STARS = [
  { x: 34, y: 150, d: 2.5, o: 0.75 },
  { x: 322, y: 128, d: 2, o: 0.7 },
  { x: 200, y: 110, d: 2, o: 0.55 },
] as const;

/** The status-bar row the handoff's coordinates are measured against. A real
 *  device replaces it with its own inset, so star positions are rebased. */
const DESIGN_STATUS_BAR = 54;


/**
 * `backdrop-filter: blur(18px)`.
 *
 * CSS states its blur as the Gaussian's standard deviation and so does Skia,
 * so this one crosses over unchanged — unlike `box-shadow`, whose blur is
 * twice the deviation. Worth stating because the two sit side by side below.
 */
const CONSOLE_BLUR = 18;

export function HomeHeader({
  teacher,
  initial,
  onSelectTeacher,
  onStartClass,
  onProgress,
  onProfile,
  onMeasure,
  skyMix,
}: {
  teacher: TeacherId;
  /** 0 Drona's light, 1 Vedha's — owned by the screen, which knows when the
   *  teacher changed rather than was simply loaded. */
  skyMix: SharedValue<number>;
  /** The student's first initial, or '' before the profile has loaded. */
  initial: string;
  onSelectTeacher: () => void;
  onStartClass: () => void;
  onProgress: () => void;
  onProfile: () => void;
  /**
   * Reported so the screen can do the two things this component cannot do
   * from inside a ScrollView: flip the status bar when the header scrolls
   * away, and pin a strip of this same sky behind the status bar while it has
   * not. See the scrim in app/(tabs)/index.tsx.
   */
  onMeasure?: (size: { width: number; height: number }) => void;
}) {
  const insets = useSafeAreaInsets();
  const { scale } = useScale();
  const trait = TEACHERS.find((t) => t.id === teacher)?.trait ?? '';
  const styles = useMemo(() => createStyles(scale), [scale]);

  /** The header's own box, which is what the sky is drawn into. */
  const [sky, setSky] = useState({ width: 0, height: 0 });
  /** The console's top-left corner within the header, for the blurred copy. */
  const [content, setContent] = useState({ x: 0, y: 0 });
  const [consoleAt, setConsoleAt] = useState({ x: 0, y: 0 });

  const onHeaderLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setSky((prev) => (prev.width === width && prev.height === height ? prev : { width, height }));
    onMeasure?.({ width, height });
  };

  return (
    <View style={styles.header} onLayout={onHeaderLayout}>
      {/* In the chosen teacher's light — SKY_THEMES in constants/teachers.ts. */}
      <ThemedSky
        width={sky.width}
        height={sky.height}
        themes={TEACHER_SKIES}
        mix={skyMix}
        style={StyleSheet.absoluteFillObject}
      />

      {STARS.map((s) => (
        <View
          key={`${s.x}-${s.y}`}
          pointerEvents="none"
          style={[
            styles.star,
            {
              left: scale(s.x),
              top: insets.top + scale(s.y - DESIGN_STATUS_BAR),
              width: scale(s.d),
              height: scale(s.d),
              borderRadius: scale(s.d),
              opacity: s.o,
            },
          ]}
        />
      ))}

      <View style={[styles.logoRow, { marginTop: insets.top }]}>
        <MonkLogo height={scale(20)} tone="dark" />
        <View style={styles.logoRowRight}>
          <PressableScale
            style={styles.circleButton}
            accessibilityLabel="Progress"
            onPress={onProgress}>
            {/* The marigold dot stays marigold here. Elsewhere `accent`
                reverses on an ink plate because the dot is a 1.8pt mark on a
                flat dark square; against the sky it has a bright, warm field
                to sit on and reads as the one coloured thing in the row —
                which is what the design asks for. */}
            <ProgressGlyph size={scale(19)} color={colors.paper} />
          </PressableScale>
          <PressableScale
            style={styles.circleButton}
            accessibilityLabel="Profile"
            onPress={onProfile}>
            {initial ? <Text style={styles.initial}>{initial}</Text> : <PersonIcon scale={scale} />}
          </PressableScale>
        </View>
      </View>

      <View
        style={styles.content}
        onLayout={(e) => setContent({ x: e.nativeEvent.layout.x, y: e.nativeEvent.layout.y })}>
        <Text style={styles.heading}>Pick a chapter and your teacher teaches it live.</Text>

        <View
          style={styles.console}
          onLayout={(e) => setConsoleAt({ x: e.nativeEvent.layout.x, y: e.nativeEvent.layout.y })}>
          {/* The glass. Clipped here rather than on the console itself, so the
              console does not become a clipping view and crop the shadow the
              Start button casts past its edge. */}
          <View style={styles.consoleGlass} pointerEvents="none">
            <ThemedSky
              width={sky.width}
              height={sky.height}
              themes={TEACHER_SKIES}
              mix={skyMix}
              blur={scale(CONSOLE_BLUR)}
              style={{
                position: 'absolute',
                left: -(content.x + consoleAt.x),
                top: -(content.y + consoleAt.y),
              }}
            />
            <View style={styles.consoleTint} />
          </View>

          <PressableScale
            style={styles.teacherRow}
            accessibilityRole="button"
            accessibilityLabel={`Your teacher is ${teacherName(teacher)}. Select a teacher.`}
            onPress={onSelectTeacher}>
            <TeacherOrbPoster teacher={teacher} size={scale(46)} />
            <View style={styles.teacherText}>
              <Text style={styles.teacherName}>{teacherName(teacher)}</Text>
              {/* The two words that separate them. The row named the teacher
                  and said nothing about them, which left the orb carrying the
                  whole difference between Drona and Vedha at 34 points. */}
              <Text style={styles.teacherTrait}>{titleCaseTrait(trait)}</Text>
            </View>
            <View style={styles.selectGroup}>
              <Text style={styles.selectLabel}>Select Teacher</Text>
              <Chevron scale={scale} />
            </View>
          </PressableScale>

          <PressableScale
            style={styles.start}
            accessibilityRole="button"
            accessibilityLabel="Start a live class"
            // The day's main key: it gives under the thumb, like onboarding's.
            onPressIn={hapticKey}
            onPress={onStartClass}>
            <Text style={styles.startLabel}>Start a Live Class</Text>
            <StartArrow scale={scale} color={START_ARROW[teacher]} />
          </PressableScale>

          {/* The two rings, last so they draw over the glass and the rows, which
              is where CSS puts an inset shadow. */}
          <View style={styles.consoleRing} pointerEvents="none" />
        </View>
      </View>
    </View>
  );
}

/**
 * The arrow on the Start button.
 *
 * NOT `components/arrow-right-icon.tsx`, and the difference is measurable
 * rather than a matter of taste: the shared arrow carries a 1.9 stroke in a
 * 16-unit box and the design's carries 2.2 in a 24-unit box, so at the same
 * rendered size the shared one is a THIRD heavier. Beside the reference it
 * read as a bolder, blunter mark. The shared arrow stays everywhere it already
 * is — at 15-16pt, in ink, on white; this is the only place in the app where
 * an arrow is reversed out of a dark disc at 18pt, so it is drawn to the
 * weight that was designed for it.
 */
function StartArrow({ scale, color }: { scale: (n: number) => number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={scale(18)} height={scale(18)} fill="none">
      <Path
        d="M5 12h14M13 6l6 6-6 6"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/** The design's chevron: thinner than the app's arrow, because it trails a
 *  13pt label rather than filling a 38pt disc. */
function Chevron({ scale }: { scale: (n: number) => number }) {
  return (
    <Svg viewBox="0 0 24 24" width={scale(15)} height={scale(15)} fill="none">
      <Path
        d="M9 6l6 6-6 6"
        stroke={colors.paleGold}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/**
 * Stands in for the initial until the profile has loaded.
 *
 * Moved here from the home screen with the button it belongs to, unchanged
 * except for the colour: it reverses out of the sky now instead of sitting on
 * white. A fresh install sees this rather than a sample profile's letter.
 */
function PersonIcon({ scale }: { scale: (n: number) => number }) {
  return (
    <Svg viewBox="0 0 24 24" width={scale(19)} height={scale(19)} fill="none">
      <Circle cx={12} cy={8} r={3.6} stroke={colors.paper} strokeWidth={1.7} />
      <Path
        d="M4.8 20c0-3.6 3.2-5.6 7.2-5.6s7.2 2 7.2 5.6"
        stroke={colors.paper}
        strokeWidth={1.7}
        strokeLinecap="round"
      />
    </Svg>
  );
}

function createStyles(scale: (n: number) => number) {
  return StyleSheet.create({
    header: {
      /* The sky is drawn into this box, so it has to clip to the same corners.
         `night` is what shows for the frame before Skia has drawn, and on any
         device where the shader will not compile. */
      backgroundColor: colors.night,
      borderBottomLeftRadius: scale(34),
      borderBottomRightRadius: scale(34),
      overflow: 'hidden',
    },

    star: {
      position: 'absolute',
      backgroundColor: colors.paper,
      boxShadow: [
        { offsetX: 0, offsetY: 0, blurRadius: scale(6), color: 'rgba(255,253,248,.6)' },
      ],
    },

    // --- logo row ---
    logoRow: {
      height: scale(52),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: scale(24),
      paddingRight: scale(20),
    },
    logoRowRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
    },
    circleButton: {
      width: scale(40),
      height: scale(40),
      borderRadius: scale(20),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255,253,248,.07)',
      boxShadow: [
        { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(255,253,248,.14)', inset: true },
      ],
    },
    initial: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(15),
      color: colors.paper,
    },

    // --- heading and console ---
    content: {
      paddingTop: scale(40),
      /* 24, the page's own margin. It was 28 — the handoff's number — which
         put the heading and the console 4 to 9 points further in than every
         rule, tile and row below them. A header that does not share the page's
         left edge reads as a different page stuck on top of this one. */
      paddingHorizontal: scale(24),
      paddingBottom: scale(24),
      gap: scale(28),
    },
    /* 24, the app's largest type tier — the one `constants/page-title.ts`
       settled on for every screen's title. Home has no title row, so this
       line IS the page's title and belongs in that tier. At the handoff's 28
       it was the biggest text in the app by four points, which is what made
       the rest of the page look like it had been shrunk. */
    heading: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(24),
      /* 29 and -0.6 are PAGE_TITLE's own metrics, so this line is the app's
         title tier exactly — in the header's 600 rather than its 700, which
         is enough weight reversed out of a dark ground. */
      lineHeight: scale(29),
      letterSpacing: scale(-0.6),
      color: colors.paper,
    },

    /* CONCENTRIC WITH THE BUTTON INSIDE IT, which is the whole fix here.
       Nested rounded corners share a centre only when the inner radius is the
       outer radius minus the gap between them. This was 30 against a 14 button
       on 6 of padding — 30 minus 6 is 24, so the console's corners curved away
       from the button's and left a wedge of glass showing past each bottom
       corner. That is what "not properly integrated" looks like. 20 minus 6 is
       14: the two curves now run parallel the whole way round. */
    console: {
      borderRadius: scale(20),
      padding: scale(6),
      gap: scale(6),
      boxShadow: [
        { offsetX: 0, offsetY: scale(18), blurRadius: scale(36), spreadDistance: scale(-22), color: 'rgba(0,0,0,.6)' },
      ],
    },
    consoleGlass: {
      ...StyleSheet.absoluteFillObject,
      borderRadius: scale(20),
      overflow: 'hidden',
    },
    consoleTint: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(26,24,20,.34)',
    },
    consoleRing: {
      ...StyleSheet.absoluteFillObject,
      borderRadius: scale(20),
      boxShadow: [
        { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(255,253,248,.14)', inset: true },
        { offsetX: 0, offsetY: 1, blurRadius: 0, spreadDistance: 0, color: 'rgba(255,253,248,.1)', inset: true },
      ],
    },

    teacherRow: {
      /* 66, up from 50: the row carries two lines of text and a 46pt orb now.
         8 of left padding plus the console's own 6 puts the orb 14 in from
         the console's edge, which is where the reference has it. */
      height: scale(66),
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingLeft: scale(8),
      paddingRight: scale(16),
    },
    teacherText: {
      flex: 1,
      gap: scale(1),
    },
    teacherName: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      lineHeight: scale(22),
      letterSpacing: scale(16 * -0.01),
      color: colors.paper,
    },
    /* 13, the app's supporting tier, at 62% so it sits under the name rather
       than beside it. */
    teacherTrait: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: 'rgba(255,253,248,.62)',
    },
    /* Its own row, because the console's 12pt gap is the distance between the
       orb, the name and this whole control — the label and its chevron are
       one thing, 4 apart. */
    selectGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(4),
    },
    selectLabel: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(13),
      color: colors.paleGold,
    },

    start: {
      height: scale(50),
      /* BOXY, not a pill. A 999 radius made a lozenge that repeated the
         console's own shape one size down; at 14 the button reads as a key
         sitting in the console instead of a smaller copy of it. */
      borderRadius: scale(14),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: scale(22),
      paddingRight: scale(22),
      backgroundColor: colors.paper,
      boxShadow: [
        { offsetX: 0, offsetY: scale(10), blurRadius: scale(22), spreadDistance: scale(-14), color: 'rgba(0,0,0,.6)' },
      ],
    },
    startLabel: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      letterSpacing: scale(16 * -0.01),
      color: colors.ink,
    },
  });
}

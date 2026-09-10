// 24A Profile — rebuilt from "MonkLearning Profile 24A.html".
//
// Only this screen changes. Personal information, privacy policy, manage exam,
// terms and about us keep the layout and the shared `SettingsHeader` they
// already have.
//
// Which is why the header here is local rather than that shared component:
// 24A draws a 40pt back circle beside a 22/700 title, and `SettingsHeader` is
// 34pt beside 24/500 across eight screens. Changing the shared one to match
// would have redesigned all seven of the pages that were meant to stay put.
//
// Fonts are the app's own Onest. The handoff carries an Anek Latin @font-face
// block, but it is dead boilerplate from the kit -- 24A's own phone container
// sets `font-family:'Onest'`, so there was nothing to reconcile.
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, {
  Defs,
  Ellipse,
  LinearGradient as SvgLinearGradient,
  Path,
  RadialGradient,
  Rect,
  Stop,
} from 'react-native-svg';

import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { EXAMS, YEARS } from '@/constants/onboarding';
import { useScale } from '@/constants/scale';
import { signOut } from '@/lib/auth';
import {
  getLanguagePreference,
  getTeacherPreference,
  setLanguagePreference,
  setTeacherPreference,
} from '@/lib/preferences';
import { getProfile, pullProfile, type StudentProfile } from '@/lib/profile';

const RULE = 'rgba(28,26,22,.1)';
const OUTLINE = 'rgba(28,26,22,.16)';
const CREAM = '#FBF9F2';
const CREAM_66 = 'rgba(251,249,242,.66)';
const IDLE_INK = '#8A857A';
const IDLE_QUIET = '#B4AC9B';

type TeacherId = 'drona' | 'vedha';
type LanguageId = 'hinglish' | 'english';

/**
 * The orb palettes are 24A's two conic gradients, read in order. React Native
 * has no conic-gradient, so each is a rotating linear sweep clipped by a
 * circle -- the same fallback this screen already used for the old selection
 * ring, and the reason the stop list starts and ends on the same colour.
 */
const TEACHERS: {
  id: TeacherId;
  name: string;
  trait: string;
  orb: { conic: readonly string[]; halo: string };
}[] = [
  {
    id: 'drona',
    name: 'Drona',
    trait: 'calm · measured · exacting',
    orb: {
      conic: ['#6E2A06', '#E2601C', '#EEA31F', '#E2601C', '#6E2A06'],
      halo: '#FFD08A', // rgba(255,208,138,.85)
    },
  },
  {
    id: 'vedha',
    name: 'Vedha',
    trait: 'warm · quick · encouraging',
    orb: {
      conic: ['#C98A1F', '#FCEBC4', '#F2C36B', '#FCEBC4', '#C98A1F'],
      halo: '#FFF6E0', // rgba(255,246,224,.9)
    },
  },
];

// English first, as 24A draws the toggle.
const LANGUAGES: { id: LanguageId; label: string; speech: string }[] = [
  { id: 'english', label: 'English', speech: 'Everything in English, start to finish.' },
  {
    id: 'hinglish',
    label: 'Hinglish',
    speech: 'Explains in Hindi, keeps the terms in English.',
  },
];

const MORE_LINKS: { label: string; href: Parameters<typeof router.push>[0] }[] = [
  { label: 'Personal information', href: '/account' },
  { label: 'Privacy policy', href: '/privacy-policy' },
  { label: 'Terms & conditions', href: '/terms' },
  { label: 'About us', href: '/about-us' },
];

export default function ProfileScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [teacher, setTeacher] = useState<TeacherId>('drona');
  const [language, setLanguage] = useState<LanguageId>('english');
  const [profile, setProfile] = useState<StudentProfile | null>(null);

  useEffect(() => {
    let cancelled = false;
    Promise.all([getTeacherPreference(), getLanguagePreference()]).then(([t, l]) => {
      if (cancelled) return;
      setTeacher(t);
      setLanguage(l);
    });
    // Local first so the page paints immediately, then refreshed from the
    // server — this is the screen most likely to be opened on a new device,
    // where the local copy is empty and `profiles` is the only source.
    getProfile().then((p) => !cancelled && setProfile(p));
    pullProfile()
      .then(getProfile)
      .then((p) => !cancelled && setProfile(p))
      .catch(() => {
        // The locally-loaded copy above still stands.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const chooseTeacher = (id: TeacherId) => {
    setTeacher(id);
    setTeacherPreference(id);
  };

  const chooseLanguage = (id: LanguageId) => {
    setLanguage(id);
    setLanguagePreference(id);
  };

  const exam = profile ? EXAMS[profile.exam] : null;
  // 24A shows "JEE Main · NEET" for a student sitting both. `EXAMS.both.name`
  // is the word "Both", which is the right label on a row you choose from and
  // the wrong one on a row that reports what you chose.
  const examValue = !exam
    ? '—'
    : profile?.exam === 'both'
      ? `${EXAMS.jee.name} · ${EXAMS.neet.name}`
      : exam.name;
  const speech = LANGUAGES.find((l) => l.id === language)?.speech ?? '';

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <PressableScale
            style={styles.backButton}
            accessibilityRole="button"
            accessibilityLabel="Go back"
            onPress={() => router.back()}>
            <Svg viewBox="0 0 16 16" width={scale(14)} height={scale(14)} fill="none">
              <Path
                d="M10 3 5 8l5 5"
                stroke={colors.ink}
                strokeWidth={1.9}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </PressableScale>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Identity. The year rides in a pill on the right rather than in a
              subtitle, so a student with no name set still has a full row. */}
          <View style={styles.identityRow}>
            <Text style={styles.name}>{profile?.name || 'Your account'}</Text>
            {!!profile && (
              <View style={styles.yearPill}>
                <Text style={styles.yearPillText}>{YEARS[profile.year]}</Text>
              </View>
            )}
          </View>

          <View style={styles.examRow}>
            <Text style={styles.rowLabel}>Exam</Text>
            <Text style={styles.rowValue}>{examValue}</Text>
          </View>

          <View style={styles.subjectsBlock}>
            <Text style={styles.rowLabel}>Subjects</Text>
            <View style={styles.chipRow}>
              {/* Follows the exam, so a NEET student sees Biology here rather
                  than the Maths this row used to hardcode. */}
              {(exam?.subjects ?? []).map((subject) => (
                <View key={subject.name} style={styles.chip}>
                  <Text style={styles.chipText}>{subject.name}</Text>
                </View>
              ))}
            </View>
          </View>

          <PressableScale
            style={styles.manageLink}
            hitSlop={10}
            onPress={() => router.push('/subscription')}>
            <Text style={styles.manageText}>Manage exam</Text>
            <Svg viewBox="0 0 16 16" width={scale(15)} height={scale(15)} fill="none">
              <Path
                d="M2 8h11M9 3.5 13.5 8 9 12.5"
                stroke={colors.amberText}
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </PressableScale>

          <Text style={styles.overline}>Your teacher</Text>
          {/* Two cells of one strip, split by a rule — the same figure the
              home screen uses for Snap and Practice. */}
          <View style={styles.teacherStrip}>
            {TEACHERS.map((t, i) => {
              const on = t.id === teacher;
              return (
                <PressableScale
                  key={t.id}
                  accessibilityRole="button"
                  accessibilityState={{ selected: on }}
                  accessibilityLabel={`Teacher ${t.name}`}
                  style={[
                    styles.teacherCell,
                    i === 0 ? styles.teacherCellLeft : styles.teacherCellRight,
                  ]}
                  onPress={() => chooseTeacher(t.id)}>
                  {/* No `key` here. It used to be keyed on the selection to
                      "replay the bloom", but there is no bloom on the orb --
                      so all it did was unmount and remount both orbs on every
                      tap: ~28k multiply-adds re-run, 384 SVG nodes torn down
                      and rebuilt, and both rotations snapped back to 0deg.
                      That was the friction. */}
                  <TeacherOrb
                    teacher={t.id}
                    palette={t.orb}
                    dimmed={!on}
                    size={scale(56)}
                  />
                  <Text style={[styles.teacherName, !on && styles.teacherNameIdle]}>{t.name}</Text>
                  {/* `white-space:nowrap` in 24A. Both traits are 26
                      characters and the cell is ~157pt, so at 12.5 they land
                      within a point or two of the edge -- and wrapped to two
                      lines once the right cell got its 20pt gutter back.
                      One line, shrinking a fraction where it has to, rather
                      than a two-line block under a 56pt orb. */}
                  <Text
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    minimumFontScale={0.88}
                    style={[styles.teacherTrait, !on && styles.teacherTraitIdle]}>
                    {t.trait}
                  </Text>
                </PressableScale>
              );
            })}
          </View>

          <Text style={styles.overline}>Speaks</Text>
          <LanguageToggle
            styles={styles}
            options={LANGUAGES}
            value={language}
            onChange={chooseLanguage}
          />
          <Text style={styles.speech}>{speech} Switch anytime — even mid-class.</Text>

          {/* Rate the app. The only dark object on the page, and it carries the
              amber rim the class block on Home uses. */}
          <View style={styles.rateCard}>
            <Text style={styles.rateSub}>Enjoying monklearning so far?</Text>
            <Text style={styles.rateHeadline}>Give us a rating</Text>
            {/* Five, all filled, as the handoff draws them. */}
            <View style={styles.starRow}>
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} size={scale(40)} />
              ))}
            </View>
            {/* The 3D key from onboarding: a dark rect showing 3pt below the
                face stands in for `0 3px 0`, and the gradient holds white for
                its first 6% for the inset top highlight. RN has one shadow per
                view and no inset, so the rest is geometry.

                Unwired, as it was before: there is no App Store listing to
                open yet. The label still moves, because a student who has just
                tapped five stars should be told what the button will do. */}
            <View style={styles.keyBase}>
              <LinearGradient
                colors={['#FFFFFF', '#FFFFFF', '#F4F0E6']}
                locations={[0, 0.06, 1]}
                style={styles.keyFace}>
                <Text style={styles.keyLabel}>Rate monklearning</Text>
              </LinearGradient>
            </View>
          </View>

          <View style={styles.links}>
            {MORE_LINKS.map((link) => (
              <PressableScale
                key={link.label}
                style={styles.linkRow}
                onPress={() => router.push(link.href)}>
                <Text style={styles.linkLabel}>{link.label}</Text>
                <Svg viewBox="0 0 16 16" width={scale(14)} height={scale(14)} fill="none">
                  <Path
                    d="M6 3.5 10.5 8 6 12.5"
                    stroke={IDLE_INK}
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
              </PressableScale>
            ))}
          </View>

          {/* Ends the Supabase session and clears this student's local data;
              the root gate sees the change and routes to onboarding itself,
              so there is nothing to navigate to here. */}
          <PressableScale style={styles.logOut} hitSlop={10} onPress={() => signOut()}>
            <Text style={styles.logOutText}>Log out</Text>
          </PressableScale>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

/**
 * The teacher's orb, as the landing page and the About page draw it.
 *
 *   1  conic-gradient(from 20deg, dark, mid, bright, mid, dark)  blur(9px)   6s
 *   2  radial-gradient(circle at 32% 30%, halo .85, transparent 55%) blur(5px) 9s reverse
 *   3  radial-gradient(closest-side, white .5, transparent) at 16%/10%  blur(3px)
 *
 * Layer 1 is a CONIC gradient, and that is the whole character of the mark:
 * colour sweeping around the centre like an iris. Two earlier attempts here
 * were a linear gradient and then a radial one -- a radial radiates from a
 * point, so it renders a shaded ball, which is a different object.
 *
 * Neither react-native-svg nor the SVG spec has a conic gradient, so this is
 * the standard construction for one: 96 angular wedges, each a flat colour
 * sampled along the ramp. At 56pt each wedge is 1.83pt of arc, which is below
 * the threshold where banding is visible -- and the ramp starts and ends on
 * the same colour, so there is no seam where the sweep closes either.
 *
 * The `blur(9px)` matters more than it looks, and ignoring it was the second
 * mistake here. Rendered at the site's own 80-110px the blur is ~9% of the
 * diameter and the sweep stays crisp; at 24A's 56px it is 16%, and it smooths
 * the conic almost flat. A sharp conic at this size is as wrong as a radial
 * one, in the other direction.
 *
 * `filter: blur` does not exist in React Native, but for a conic the blur is
 * separable and the angular half is exactly reproducible. At 56px the bulk of
 * the orb's area sits near r=17.4px, so a 9px arc-length blur is a Gaussian of
 * sigma = 9/17.4 rad = 30 degrees across the ramp -- so the ramp is convolved
 * with that Gaussian before it is drawn, which keeps 75% of the raw contrast
 * and matches the reference. The radial half of the blur shows up in two
 * places: the rim, which the parent's clip handles, and the centre, where all
 * 96 wedges converge on a singularity that renders as a visible spike -- so a
 * cap of the ramp's mean colour covers the middle 26%.
 */
const CONIC_WEDGES = 96;
const CONIC_FROM = 20; // `from 20deg`
const CONIC_R = 71; // 50*sqrt(2), so the square's corners stay covered

/** Wedge geometry is palette-independent, so it is built once. */
const WEDGE_PATHS: string[] = (() => {
  const step = 360 / CONIC_WEDGES;
  // 0deg is straight up and the angle increases clockwise, matching CSS.
  const at = (deg: number) => {
    const t = ((deg + CONIC_FROM) * Math.PI) / 180;
    return [50 + CONIC_R * Math.sin(t), 50 - CONIC_R * Math.cos(t)];
  };
  return Array.from({ length: CONIC_WEDGES }, (_, i) => {
    const [x0, y0] = at(i * step);
    // A hair of overlap, so no seam shows between neighbouring wedges.
    const [x1, y1] = at((i + 1) * step + 0.35);
    return `M50 50L${x0.toFixed(2)} ${y0.toFixed(2)}A${CONIC_R} ${CONIC_R} 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)}Z`;
  });
})();

/** The mean of the ramp — what a heavy blur resolves the centre to. */
function meanHex(stops: readonly string[]): string {
  const p = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  // The first and last stop are the same colour on both palettes, so the last
  // is dropped rather than counted twice.
  const used = stops.slice(0, -1).map(p);
  const avg = (j: number) => Math.round(used.reduce((n, c) => n + c[j], 0) / used.length);
  return `rgb(${avg(0)},${avg(1)},${avg(2)})`;
}

/** Interpolate two hex stops, kept as channels so the blur can average them. */
function mixRgb(a: string, b: string, f: number): [number, number, number] {
  const p = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [ar, ag, ab] = p(a);
  const [br, bg, bb] = p(b);
  return [ar + (br - ar) * f, ag + (bg - ag) * f, ab + (bb - ab) * f];
}

/** Degrees of Gaussian blur across the ramp — `blur(9px)` at 56px. See above. */
const CONIC_BLUR_DEG = 30;

/**
 * The unchosen orb.
 *
 * 24A lays `rgba(255,255,255,.66)` over it, and that works for Drona's browns
 * and fails for Vedha's creams. Measured against a white page: Drona veils to
 * 0.814 luminance, Vedha to 0.931 — seven hundredths off the page itself. One
 * reads as unchosen, the other as an empty circle, and they sit side by side.
 * Lowering opacity is the same operation and fails the same way, because
 * fading toward white IS a white veil.
 *
 * So the orb is greyed instead, and both palettes are normalised to one
 * lightness: each wedge keeps half its variation around a fixed 0.72 mean. The
 * sweep survives, so it is visibly the same object; the colour does not, which
 * is the whole signal.
 */
/** 24A's curve, shared by the orb cross-fade and the Speaks knob. */
const SWITCH_EASING = Easing.bezier(0.2, 0.75, 0.2, 1);

const IDLE_LUM = 0.72;
const IDLE_CONTRAST = 0.5;

const luminance = ([r, g, b]: [number, number, number]) =>
  (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

/**
 * Wedge colours along the ramp, convolved with the blur.
 *
 * Circular convolution, because the ramp wraps: wedge 0's neighbours include
 * wedge 95, and treating the join as an edge would darken it into the seam the
 * matched end stops exist to avoid.
 */
function wedgeColors(stops: readonly string[], dimmed: boolean): string[] {
  const raw = Array.from({ length: CONIC_WEDGES }, (_, i) => {
    const t = ((i + 0.5) / CONIC_WEDGES) * (stops.length - 1);
    const lo = Math.min(Math.floor(t), stops.length - 2);
    return mixRgb(stops[lo], stops[lo + 1], t - lo);
  });

  const sigma = CONIC_BLUR_DEG / (360 / CONIC_WEDGES);
  const half = Math.max(1, Math.round(3 * sigma));
  const kernel = Array.from({ length: 2 * half + 1 }, (_, d) =>
    Math.exp(-((d - half) ** 2) / (2 * sigma * sigma))
  );
  const weight = kernel.reduce((a, b) => a + b, 0);

  const blurred = raw.map((_, i) => {
    const acc: [number, number, number] = [0, 0, 0];
    kernel.forEach((w, j) => {
      const c = raw[(i + j - half + CONIC_WEDGES * 2) % CONIC_WEDGES];
      for (let ch = 0; ch < 3; ch++) acc[ch] += c[ch] * w;
    });
    return acc.map((v) => v / weight) as [number, number, number];
  });

  if (!dimmed) {
    return blurred.map((c) => `rgb(${c.map(Math.round).join(',')})`);
  }

  const lums = blurred.map(luminance);
  const mean = lums.reduce((a, b) => a + b, 0) / lums.length;
  return lums.map((l) => {
    const v = Math.round(255 * Math.min(1, Math.max(0, IDLE_LUM + (l - mean) * IDLE_CONTRAST)));
    return `rgb(${v},${v},${v})`;
  });
}

/**
 * Both states of both orbs, built once at module load.
 *
 * The convolution is ~14k multiply-adds per orb. Computing it inside the
 * component meant paying it on every tap; there are exactly four possible
 * results, so they are cached here and interaction never touches the maths.
 *
 * Declared HERE, below `wedgeColors` and the consts it reads, not up beside
 * TEACHERS. `wedgeColors` is a hoisted function declaration, but `luminance`,
 * `WEDGE_PATHS` and `CONIC_BLUR_DEG` are `const` -- so calling it any earlier
 * hit their temporal dead zone and threw at import time. tsc and eslint both
 * pass that; only running the app catches it.
 */
const ORB_FILLS: Record<TeacherId, { on: string[]; off: string[] }> = Object.fromEntries(
  TEACHERS.map((t) => [
    t.id,
    { on: wedgeColors(t.orb.conic, false), off: wedgeColors(t.orb.conic, true) },
  ])
) as Record<TeacherId, { on: string[]; off: string[] }>;

function TeacherOrb({
  teacher,
  palette,
  dimmed,
  size,
}: {
  teacher: TeacherId;
  palette: { conic: readonly string[]; halo: string };
  dimmed: boolean;
  size: number;
}) {
  const swirl = useSharedValue(0);
  const halo = useSharedValue(0);
  /** 0 chosen, 1 unchosen. Drives the cross-fade on the UI thread. */
  const off = useSharedValue(dimmed ? 1 : 0);

  useEffect(() => {
    swirl.value = withRepeat(withTiming(360, { duration: 6000, easing: Easing.linear }), -1, false);
    // Negative: `ringSpin` runs the other way, which is what stops the two
    // layers locking together into one rigid pattern.
    halo.value = withRepeat(withTiming(-360, { duration: 9000, easing: Easing.linear }), -1, false);
  }, [swirl, halo]);

  useEffect(() => {
    off.value = withTiming(dimmed ? 1 : 0, { duration: 320, easing: SWITCH_EASING });
  }, [dimmed, off]);

  const swirlTurn = useAnimatedStyle(() => ({ transform: [{ rotate: `${swirl.value}deg` }] }));
  const haloTurn = useAnimatedStyle(() => ({ transform: [{ rotate: `${halo.value}deg` }] }));
  const greyFade = useAnimatedStyle(() => ({ opacity: off.value }));
  const colourFade = useAnimatedStyle(() => ({ opacity: 1 - off.value }));

  const inset24 = -size * 0.24;
  const inset30 = -size * 0.3;
  const fills = ORB_FILLS[teacher];
  const capOn = useMemo(() => meanHex(palette.conic), [palette.conic]);
  const capOff = `rgb(${Math.round(255 * IDLE_LUM)},${Math.round(255 * IDLE_LUM)},${Math.round(255 * IDLE_LUM)})`;

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(28,26,22,.08)',
      }}>
      {/* Both conics share ONE rotation, so they cannot drift out of phase
          while the cross-fade is running. */}
      <Animated.View
        style={[
          { position: 'absolute', left: inset24, right: inset24, top: inset24, bottom: inset24 },
          swirlTurn,
        ]}>
        <Svg width="100%" height="100%" viewBox="0 0 100 100">
          <Defs>
            <RadialGradient id={`cap-on-${teacher}`} cx="50%" cy="50%" r="26%">
              <Stop offset="0" stopColor={capOn} stopOpacity={1} />
              <Stop offset="0.6" stopColor={capOn} stopOpacity={0.85} />
              <Stop offset="1" stopColor={capOn} stopOpacity={0} />
            </RadialGradient>
          </Defs>
          {WEDGE_PATHS.map((d, i) => (
            <Path key={i} d={d} fill={fills.on[i]} />
          ))}
          <Rect x={0} y={0} width={100} height={100} fill={`url(#cap-on-${teacher})`} />
        </Svg>
        <Animated.View style={[StyleSheet.absoluteFill, greyFade]}>
          <Svg width="100%" height="100%" viewBox="0 0 100 100">
            <Defs>
              <RadialGradient id={`cap-off-${teacher}`} cx="50%" cy="50%" r="26%">
                <Stop offset="0" stopColor={capOff} stopOpacity={1} />
                <Stop offset="0.6" stopColor={capOff} stopOpacity={0.85} />
                <Stop offset="1" stopColor={capOff} stopOpacity={0} />
              </RadialGradient>
            </Defs>
            {WEDGE_PATHS.map((d, i) => (
              <Path key={i} d={d} fill={fills.off[i]} />
            ))}
            <Rect x={0} y={0} width={100} height={100} fill={`url(#cap-off-${teacher})`} />
          </Svg>
        </Animated.View>
      </Animated.View>

      {/* The halo, counter-rotating. Two stops cross-faded rather than one
          whose colour changes, because an SVG gradient stop cannot animate. */}
      <Animated.View
        pointerEvents="none"
        style={[
          { position: 'absolute', left: inset30, right: inset30, top: inset30, bottom: inset30 },
          haloTurn,
        ]}>
        <Animated.View style={[StyleSheet.absoluteFill, colourFade]}>
          <Svg width="100%" height="100%" viewBox="0 0 100 100">
            <Defs>
              <RadialGradient id={`halo-${teacher}`} cx="32%" cy="30%" r="55%">
                <Stop offset="0" stopColor={palette.halo} stopOpacity={0.85} />
                <Stop offset="1" stopColor={palette.halo} stopOpacity={0} />
              </RadialGradient>
            </Defs>
            <Rect x={0} y={0} width={100} height={100} fill={`url(#halo-${teacher})`} />
          </Svg>
        </Animated.View>
        <Animated.View style={[StyleSheet.absoluteFill, greyFade]}>
          <Svg width="100%" height="100%" viewBox="0 0 100 100">
            <Defs>
              <RadialGradient id={`halo-off-${teacher}`} cx="32%" cy="30%" r="55%">
                <Stop offset="0" stopColor="#FFFFFF" stopOpacity={0.4} />
                <Stop offset="1" stopColor="#FFFFFF" stopOpacity={0} />
              </RadialGradient>
            </Defs>
            <Rect x={0} y={0} width={100} height={100} fill={`url(#halo-off-${teacher})`} />
          </Svg>
        </Animated.View>
      </Animated.View>

      {/* Layer 3 — the specular catch-light, static, as on the site. */}
      <Svg
        pointerEvents="none"
        style={StyleSheet.absoluteFill}
        width="100%"
        height="100%"
        viewBox="0 0 100 100">
        <Defs>
          <RadialGradient id={`spec-${teacher}`} cx="50%" cy="50%" r="50%">
            <Stop offset="0" stopColor="#FFFFFF" stopOpacity={0.5} />
            <Stop offset="1" stopColor="#FFFFFF" stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <Ellipse cx={36} cy={25} rx={20} ry={15} fill={`url(#spec-${teacher})`} />
      </Svg>
    </View>
  );
}

/**
 * The Speaks toggle: one pill, two halves, an amber knob that slides between
 * them in 380ms on 24A's own easing curve.
 *
 * The knob is driven by a shared value rather than by re-rendering into a new
 * position, so the slide survives the preference write that follows the tap.
 */
function LanguageToggle({
  styles,
  options,
  value,
  onChange,
}: {
  styles: ReturnType<typeof createStyles>;
  options: { id: LanguageId; label: string }[];
  value: LanguageId;
  onChange: (id: LanguageId) => void;
}) {
  const index = Math.max(
    0,
    options.findIndex((o) => o.id === value)
  );
  const [width, setWidth] = useState(0);
  const pos = useSharedValue(index);

  useEffect(() => {
    pos.value = withTiming(index, { duration: 380, easing: SWITCH_EASING });
  }, [index, pos]);

  // `calc(50% - 3px)`, measured, because RN has no calc and the knob has to
  // land exactly inside the 3pt inset on both sides.
  const half = width > 0 ? (width - 6) / 2 : 0;
  const slide = useAnimatedStyle(() => ({ transform: [{ translateX: pos.value * half }] }));

  return (
    <View style={styles.toggle} onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
      {half > 0 && (
        <Animated.View style={[styles.knob, { width: half }, slide]}>
          <LinearGradient
            colors={['#F7D779', '#EEA31F']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[StyleSheet.absoluteFill, styles.knobFill]}
          />
        </Animated.View>
      )}
      {options.map((o) => {
        const on = o.id === value;
        return (
          <Pressable
            key={o.id}
            accessibilityRole="button"
            accessibilityState={{ selected: on }}
            style={styles.toggleHalf}
            onPress={() => onChange(o.id)}>
            <Text style={[styles.toggleLabel, on && styles.toggleLabelOn]}>{o.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

/** 24A's star: the amber ramp, #FFE49B down to #EEA31F. */
function StarIcon({ size }: { size: number }) {
  const d =
    'M12 2.9c.42 0 .8.24 1 .62l2.28 4.66 5.14.75c.42.06.77.36.9.77.13.4.02.85-.28 1.14l-3.72 3.57.88 5.06c.07.42-.1.85-.45 1.1-.35.25-.8.28-1.18.08L12 18.3l-4.57 2.4c-.38.2-.83.17-1.18-.08a1.1 1.1 0 0 1-.45-1.1l.88-5.06-3.72-3.57a1.1 1.1 0 0 1-.28-1.14c.13-.4.48-.71.9-.77l5.14-.75L11 3.52c.2-.38.58-.62 1-.62z';
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Defs>
        <SvgLinearGradient id="starFill" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFE49B" />
          <Stop offset="1" stopColor="#EEA31F" />
        </SvgLinearGradient>
      </Defs>
      <Path d={d} fill="url(#starFill)" />
    </Svg>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#fff' },
    safeArea: { flex: 1 },

    // --- header (local: see the note at the top of the file) ---
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingHorizontal: scale(24),
      paddingTop: verticalScale(14),
    },
    backButton: {
      width: scale(40),
      height: scale(40),
      flexShrink: 0,
      borderRadius: scale(20),
      borderWidth: 1,
      borderColor: OUTLINE,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(22),
      lineHeight: scale(24.2),
      letterSpacing: scale(-0.02 * 22),
      color: colors.ink,
    },

    scrollContent: { paddingHorizontal: scale(24), paddingBottom: verticalScale(40) },

    // --- identity ---
    identityRow: {
      marginTop: verticalScale(24),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(16),
      paddingBottom: verticalScale(20),
      borderBottomWidth: 1,
      borderBottomColor: RULE,
    },
    name: {
      flex: 1,
      fontFamily: 'Onest_500Medium',
      fontSize: scale(24),
      lineHeight: scale(26.4),
      letterSpacing: scale(-0.02 * 24),
      color: colors.ink,
    },
    yearPill: {
      flexShrink: 0,
      paddingHorizontal: scale(12),
      paddingVertical: verticalScale(5),
      borderRadius: 99,
      borderWidth: 1,
      borderColor: OUTLINE,
    },
    yearPillText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.ink,
    },

    // --- exam / subjects ---
    examRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(16),
      paddingVertical: verticalScale(14),
      borderBottomWidth: 1,
      borderBottomColor: RULE,
    },
    rowLabel: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: colors.slate,
    },
    rowValue: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      lineHeight: scale(22),
      letterSpacing: scale(-0.012 * 16),
      color: colors.ink,
    },
    subjectsBlock: {
      paddingTop: verticalScale(14),
      paddingBottom: verticalScale(16),
      borderBottomWidth: 1,
      borderBottomColor: RULE,
    },
    chipRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(8),
      marginTop: verticalScale(10),
    },
    chip: {
      paddingHorizontal: scale(12),
      paddingVertical: verticalScale(6),
      borderRadius: 99,
      borderWidth: 1,
      borderColor: OUTLINE,
    },
    chipText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.ink,
    },
    manageLink: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      gap: scale(6),
      marginTop: verticalScale(12),
    },
    manageText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.amberText,
    },

    overline: {
      marginTop: verticalScale(32),
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11),
      lineHeight: scale(14),
      letterSpacing: scale(0.1 * 11),
      textTransform: 'uppercase',
      color: colors.slate,
    },

    // --- teacher ---
    teacherStrip: {
      marginTop: verticalScale(12),
      flexDirection: 'row',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: RULE,
    },
    // 24A: `padding:20px 20px 20px 0` left, `padding:20px 0 20px 20px` right.
    // The right cell's 20pt was missing, so Vedha's orb sat flush against the
    // divider while Drona's had the full gutter -- the misalignment.
    teacherCell: { flex: 1, paddingVertical: scale(20) },
    teacherCellLeft: {
      paddingRight: scale(20),
      borderRightWidth: 1,
      borderRightColor: RULE,
    },
    teacherCellRight: { paddingLeft: scale(20) },
    teacherName: {
      // scale, not verticalScale. The orb is sized on the horizontal axis, so
      // measuring the gap under it on the vertical one let the two drift apart
      // by device -- 57.7pt of orb over a 13.8pt gap here, where the design
      // says 56 over 14.
      marginTop: scale(14),
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      lineHeight: scale(22),
      letterSpacing: scale(-0.012 * 16),
      color: colors.ink,
    },
    teacherNameIdle: { color: IDLE_INK },
    teacherTrait: {
      marginTop: scale(3),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12.5),
      lineHeight: scale(18),
      color: colors.slate,
    },
    teacherTraitIdle: { color: IDLE_QUIET },

    // --- speaks ---
    toggle: {
      marginTop: verticalScale(12),
      height: verticalScale(46),
      borderRadius: 99,
      borderWidth: 1,
      borderColor: OUTLINE,
      flexDirection: 'row',
    },
    knob: {
      position: 'absolute',
      top: 3,
      bottom: 3,
      left: 3,
      borderRadius: 99,
      shadowColor: colors.marigold,
      shadowOpacity: 0.45,
      shadowOffset: { width: 0, height: verticalScale(4) },
      shadowRadius: scale(8),
      elevation: 4,
    },
    knobFill: { borderRadius: 99 },
    toggleHalf: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    toggleLabel: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14),
      lineHeight: scale(20),
      color: colors.slate,
    },
    toggleLabelOn: { fontFamily: 'Onest_700Bold', color: colors.ink },
    speech: {
      marginTop: verticalScale(12),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.slate,
    },

    // --- rate ---
    rateCard: {
      marginTop: verticalScale(32),
      borderRadius: scale(22),
      backgroundColor: '#2A2621',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.8)',
      paddingTop: verticalScale(28),
      paddingBottom: verticalScale(26),
      paddingHorizontal: scale(24),
      alignItems: 'center',
      shadowColor: colors.ink,
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: verticalScale(12) },
      shadowRadius: scale(30),
      elevation: 10,
    },
    rateSub: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: CREAM_66,
      textAlign: 'center',
    },
    rateHeadline: {
      marginTop: verticalScale(6),
      fontFamily: 'Onest_700Bold',
      fontSize: scale(28),
      lineHeight: scale(30.2),
      letterSpacing: scale(-0.028 * 28),
      color: CREAM,
      textAlign: 'center',
    },
    starRow: {
      marginTop: verticalScale(20),
      flexDirection: 'row',
      justifyContent: 'center',
      gap: scale(6),
    },
    keyBase: {
      marginTop: verticalScale(22),
      alignSelf: 'stretch',
      paddingBottom: 3,
      borderRadius: 99,
      backgroundColor: 'rgba(28,26,22,.55)',
      shadowColor: '#000',
      shadowOpacity: 0.34,
      shadowOffset: { width: 0, height: verticalScale(8) },
      shadowRadius: scale(18),
      elevation: 6,
    },
    keyFace: {
      height: verticalScale(50),
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

    // --- links / log out ---
    links: { marginTop: verticalScale(32), borderTopWidth: 1, borderTopColor: RULE },
    linkRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: verticalScale(16),
      borderBottomWidth: 1,
      borderBottomColor: RULE,
    },
    linkLabel: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: colors.ink,
    },
    logOut: { marginTop: verticalScale(32), alignItems: 'center' },
    logOutText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: colors.red,
    },
  });
}

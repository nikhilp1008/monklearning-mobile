// 22C Profile — rebuilt from design_handoff_profile_22c.
//
// Two deliberate departures from that handoff, both agreed with the user:
//   * the mockup's fake "1:26" status-bar row is not reproduced (prototype
//     chrome — the real OS bar sits there), and
//   * the type is expressed in the app's own scale rather than the handoff's
//     430pt frame, so this screen sits in the same coordinate system as every
//     other in-app screen. The header ("Profile", 17px/700 + a 34pt back
//     circle) is the exact convention used by account / terms / about-us /
//     privacy-policy / subscription, and the student name is eased from the
//     handoff's 34px down to 27 (≈30 at the handoff's frame) per the user.
//
// Fonts are unchanged from the handoff: Anek Latin throughout, with Kalam 700
// on the single "your teacher" accent — both already brand fonts here.
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
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
  Stop,
} from 'react-native-svg';

import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import {
  getLanguagePreference,
  getTeacherPreference,
  setLanguagePreference,
  setTeacherPreference,
} from '@/lib/preferences';

// Handoff tokens with no equivalent in constants/brand.js. The near-identical
// greys (#5F5A50 / #8C867A) deliberately use the app's own slate/faint instead
// — the difference is a few RGB points and never seen side by side.
const INK_30 = '#B4AC9B'; // muted labels, chevrons
const SURFACE_WARM = '#F7F4EC'; // subject chips
const AMBER_DARK = '#8F5E0B'; // the Kalam accent
const AMBER_MUTED = '#C9A253'; // eyebrow on the dark rating card
const CARD_TOP = '#2A251C';
const CARD_BASE = '#1C1A16';
const CREAM = '#FBF9F2';

// `spin` — the selected row's amber ring, 3.6s linear infinite. React Native
// has no conic-gradient, so this is the sanctioned fallback from the handoff's
// own implementation note: a rotating gradient sweep clipped by the parent.
// The ramp below maps the conic's 0/70/130/180/280deg stops onto 0..1.
const RING_COLORS = [
  'rgba(238,163,31,0)',
  'rgba(247,215,121,0.35)',
  '#EEA31F',
  'rgba(247,215,121,0.5)',
  'rgba(238,163,31,0)',
  'rgba(238,163,31,0)',
] as const;
const RING_LOCATIONS = [0, 0.194, 0.361, 0.5, 0.778, 1] as const;
const SPIN_MS = 3600;

// `bloom` — inner face, opacity 0→1 + scale .985→1, .55s.
const BLOOM_MS = 550;
const BLOOM_EASING = Easing.bezier(0.2, 0.75, 0.2, 1);
// `chipIn` — "your teacher", opacity 0→1 + translateX −10→0, .4s, delay .18s.
const CHIP_MS = 400;
const CHIP_DELAY_MS = 180;
const CSS_EASE = Easing.bezier(0.25, 0.1, 0.25, 1);

// The handoff's radial blooms, approximated as linear gradients along the
// radial's dominant axis — at 0%/50% and 50%/120% the falloff reads the same.
const BLOOM_COLORS = [
  'rgba(238,163,31,0.26)',
  'rgba(238,163,31,0.06)',
  'rgba(255,255,255,0)',
] as const;

type TeacherId = 'drona' | 'vedha';
type LanguageId = 'hinglish' | 'english';

const TEACHERS: { id: TeacherId; name: string; trait: string }[] = [
  { id: 'drona', name: 'Drona', trait: 'steady, exacting' },
  { id: 'vedha', name: 'Vedha', trait: 'warm, patient' },
];

const LANGUAGES: { id: LanguageId; label: string }[] = [
  { id: 'hinglish', label: 'Hinglish' },
  { id: 'english', label: 'English' },
];

const SUBJECTS = ['Physics', 'Chemistry', 'Maths'];

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
  const [language, setLanguage] = useState<LanguageId>('hinglish');

  useEffect(() => {
    let cancelled = false;
    Promise.all([getTeacherPreference(), getLanguagePreference()]).then(([t, l]) => {
      if (cancelled) return;
      setTeacher(t);
      setLanguage(l);
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

  const teacherName = TEACHERS.find((t) => t.id === teacher)?.name ?? 'Drona';

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          {/* Header — the app's own sub-screen convention, not the handoff's 26px. */}
          <View style={styles.headerRow}>
            <PressableScale style={styles.backButton} onPress={() => router.back()}>
              <BackArrowIcon size={scale(15)} />
            </PressableScale>
            <Text style={styles.headerTitle}>Profile</Text>
          </View>

          {/* Identity */}
          <View style={styles.section}>
            <Text style={styles.name}>Aarav Sharma</Text>
            <Text style={styles.nameSub}>Class 12 · with {teacherName} since June</Text>
            <View style={styles.examLeaderRow}>
              <Text style={styles.examLeaderLabel}>Exam</Text>
              <View style={styles.leaderLine} />
              <Text style={styles.examLeaderValue}>JEE Main</Text>
            </View>
          </View>

          {/* Teacher */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>YOUR TEACHER</Text>
            <View style={styles.teacherList}>
              {TEACHERS.map((t) => {
                const selected = t.id === teacher;
                if (!selected) {
                  return (
                    <Pressable
                      key={t.id}
                      style={styles.teacherRowIdle}
                      onPress={() => chooseTeacher(t.id)}>
                      <View style={styles.flex1}>
                        <Text style={styles.teacherNameIdle}>{t.name}</Text>
                        <Text style={styles.teacherTraitIdle}>{t.trait}</Text>
                      </View>
                      <Text style={styles.chooseText}>choose</Text>
                    </Pressable>
                  );
                }
                return (
                  // Remounting on change is what replays `bloom` and `chipIn`,
                  // exactly as the prototype does.
                  <Pressable key={`${t.id}-selected`} onPress={() => chooseTeacher(t.id)}>
                    <View style={styles.ringOuter}>
                      <RingSweep radius={scale(20)} />
                      <BloomFace style={styles.teacherFace} direction="left">
                        <View style={styles.flex1}>
                          <Text style={styles.teacherName}>{t.name}</Text>
                          <Text style={styles.teacherTrait}>{t.trait}</Text>
                        </View>
                        <ChipIn scale={scale}>
                          <Text style={styles.yourTeacher}>your teacher</Text>
                        </ChipIn>
                      </BloomFace>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>

          {/* Language */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>TEACHING LANGUAGE</Text>
            <View style={styles.langRow}>
              {LANGUAGES.map((l) => {
                const selected = l.id === language;
                if (!selected) {
                  return (
                    <Pressable
                      key={l.id}
                      style={styles.langPillIdle}
                      onPress={() => chooseLanguage(l.id)}>
                      <Text style={styles.langLabelIdle}>{l.label}</Text>
                    </Pressable>
                  );
                }
                return (
                  <Pressable
                    key={`${l.id}-selected`}
                    style={styles.flex1}
                    onPress={() => chooseLanguage(l.id)}>
                    <View style={styles.langRingOuter}>
                      <RingSweep radius={scale(14)} />
                      <BloomFace style={styles.langFace} direction="bottom">
                        <Text style={styles.langLabel}>{l.label}</Text>
                      </BloomFace>
                    </View>
                  </Pressable>
                );
              })}
            </View>
            <Text style={styles.langNote}>
              {teacherName} speaks &amp; teaches in this language. Switch anytime — even
              mid-class.
            </Text>
          </View>

          {/* Exam */}
          <View style={styles.section}>
            <View style={styles.examHeaderRow}>
              <View style={styles.examLabelRow}>
                <View style={styles.examRule} />
                <Text style={styles.examLabel}>YOUR EXAM</Text>
              </View>
              <PressableScale
                style={styles.managePill}
                onPress={() => router.push('/subscription')}>
                <Text style={styles.manageText}>Manage</Text>
                <Text style={styles.manageChevron}>›</Text>
              </PressableScale>
            </View>
            <Text style={styles.examName}>JEE Main</Text>
            <View style={styles.chipRow}>
              {SUBJECTS.map((subject) => (
                <View key={subject} style={styles.chip}>
                  <Text style={styles.chipText}>{subject}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Links */}
          <View style={styles.section}>
            {MORE_LINKS.map((link, index) => (
              <PressableScale
                key={link.label}
                style={[styles.linkRow, index === MORE_LINKS.length - 1 && styles.linkRowLast]}
                onPress={() => router.push(link.href)}>
                <Text style={styles.linkLabel}>{link.label}</Text>
                <Text style={styles.linkChevron}>›</Text>
              </PressableScale>
            ))}
          </View>

          {/* Rate the app */}
          <View style={styles.rateCard}>
            <LinearGradient
              colors={[CARD_TOP, CARD_BASE]}
              locations={[0, 0.62]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={StyleSheet.absoluteFill}
            />
            <View style={styles.rateGlow} pointerEvents="none">
              <CardGlow width={scale(254)} height={verticalScale(181)} />
            </View>
            <Text style={styles.rateEyebrow}>INDIA&apos;S FIRST AI TEACHER APP</Text>
            <Text style={styles.rateHeadline}>Give us a rating</Text>
            <Text style={styles.rateSub}>Enjoying MonkLearning so far?</Text>
            <View style={styles.starRow}>
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} size={scale(36)} />
              ))}
            </View>
            <PressableScale style={styles.rateButton} onPress={() => {}}>
              <LinearGradient
                colors={['#F5CB60', '#EEA31F']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={[StyleSheet.absoluteFill, styles.rateButtonFill]}
              />
              <Text style={styles.rateButtonText}>Rate MonkLearning</Text>
            </PressableScale>
          </View>

          {/* Log out */}
          <View style={styles.logOutWrap}>
            <PressableScale style={styles.logOutButton} onPress={() => router.push('/welcome')}>
              <Text style={styles.logOutText}>Log out</Text>
            </PressableScale>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

/**
 * The rotating amber ring. Sized to the row's own diagonal so the sweep always
 * covers the corners, clipped by the parent's radius, and covered in the middle
 * by the inner face — leaving only the 2pt border showing.
 */
function RingSweep({ radius }: { radius: number }) {
  const rotation = useSharedValue(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: SPIN_MS, easing: Easing.linear }),
      -1,
      false
    );
  }, [rotation]);

  const spin = useAnimatedStyle(() => ({ transform: [{ rotate: `${rotation.value}deg` }] }));

  return (
    <View
      pointerEvents="none"
      onLayout={(e) => {
        const { width, height } = e.nativeEvent.layout;
        setSize(Math.ceil(Math.sqrt(width * width + height * height)));
      }}
      style={[StyleSheet.absoluteFill, { borderRadius: radius, overflow: 'hidden' }, ringStyles.centre]}>
      {size > 0 && (
        <Animated.View style={[{ width: size, height: size }, spin]}>
          <LinearGradient
            colors={[...RING_COLORS]}
            locations={[...RING_LOCATIONS]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={ringStyles.fill}
          />
        </Animated.View>
      )}
    </View>
  );
}

/** The inner white face carrying the amber bloom, entering with `bloom`. */
function BloomFace({
  style,
  direction,
  children,
}: {
  style: object;
  direction: 'left' | 'bottom';
  children: React.ReactNode;
}) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(1, { duration: BLOOM_MS, easing: BLOOM_EASING });
  }, [progress]);

  const animated = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ scale: 0.985 + progress.value * 0.015 }],
  }));

  const isLeft = direction === 'left';

  return (
    <Animated.View style={[style, animated]}>
      <LinearGradient
        colors={[...BLOOM_COLORS]}
        locations={isLeft ? [0, 0.48, 0.78] : [0, 0.55, 0.82]}
        start={isLeft ? { x: 0, y: 0.5 } : { x: 0.5, y: 1 }}
        end={isLeft ? { x: 1, y: 0.5 } : { x: 0.5, y: 0 }}
        style={StyleSheet.absoluteFill}
      />
      {children}
    </Animated.View>
  );
}

/** `chipIn` — the "your teacher" line slides in just after the bloom. */
function ChipIn({ scale, children }: { scale: (n: number) => number; children: React.ReactNode }) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withDelay(
      CHIP_DELAY_MS,
      withTiming(1, { duration: CHIP_MS, easing: CSS_EASE })
    );
  }, [progress]);

  const offset = scale(10);
  const animated = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateX: -offset * (1 - progress.value) }],
  }));

  return <Animated.View style={animated}>{children}</Animated.View>;
}

/**
 * The rating card's top halo. This has to be a real radial gradient — a linear
 * one only fades along a single axis, so its left/right edges stay opaque and
 * the "glow" renders as a visible hard-edged block.
 */
function CardGlow({ width, height }: { width: number; height: number }) {
  return (
    <Svg width={width} height={height}>
      <Defs>
        <RadialGradient id="cardGlow" cx="50%" cy="50%" rx="50%" ry="50%">
          <Stop offset="0" stopColor={colors.marigold} stopOpacity={0.4} />
          <Stop offset="1" stopColor={colors.marigold} stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <Ellipse cx={width / 2} cy={height / 2} rx={width / 2} ry={height / 2} fill="url(#cardGlow)" />
    </Svg>
  );
}

function BackArrowIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M15 6l-6 6 6 6"
        stroke={colors.ink}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/** The handoff's rounded five-point star, path verbatim from the prototype. */
function StarIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size}>
      <Defs>
        <SvgLinearGradient id="starFill" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFE49B" />
          <Stop offset="1" stopColor="#EEA31F" />
        </SvgLinearGradient>
      </Defs>
      <Path
        d="M12 2.9c.42 0 .8.24 1 .62l2.28 4.66 5.14.75c.42.06.77.36.9.77.13.4.02.85-.28 1.14l-3.72 3.57.88 5.06c.07.42-.1.85-.45 1.1-.35.25-.8.28-1.18.08L12 18.3l-4.57 2.4c-.38.2-.83.17-1.18-.08a1.1 1.1 0 0 1-.45-1.1l.88-5.06-3.72-3.57a1.1 1.1 0 0 1-.28-1.14c.13-.4.48-.71.9-.77l5.14-.75L11 3.52c.2-.38.58-.62 1-.62z"
        fill="url(#starFill)"
      />
    </Svg>
  );
}

const ringStyles = StyleSheet.create({
  centre: { alignItems: 'center', justifyContent: 'center' },
  fill: { flex: 1 },
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
      paddingTop: verticalScale(8),
      paddingBottom: verticalScale(28),
    },
    flex1: {
      flex: 1,
      minWidth: 0,
    },

    // Header — matches account / terms / about-us / privacy-policy exactly.
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingHorizontal: scale(24),
    },
    backButton: {
      width: scale(34),
      height: scale(34),
      flexShrink: 0,
      borderRadius: scale(17),
      borderWidth: scale(1.4),
      borderColor: colors.inputBorder,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(17),
      color: colors.ink,
    },

    section: {
      paddingHorizontal: scale(24),
      marginTop: verticalScale(24),
    },

    // Identity — handoff 34px, eased to 27 per the user.
    name: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(27),
      letterSpacing: scale(-0.035 * 27),
      lineHeight: scale(27 * 1.05),
      color: colors.ink,
    },
    nameSub: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14.5),
      color: colors.slate,
      marginTop: verticalScale(6),
    },
    examLeaderRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: scale(8),
      marginTop: verticalScale(14),
      paddingVertical: verticalScale(10),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.14)',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.14)',
    },
    examLeaderLabel: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      color: colors.faint,
    },
    leaderLine: {
      flex: 1,
      borderBottomWidth: 1,
      borderStyle: 'dotted',
      borderBottomColor: 'rgba(28,26,22,.26)',
    },
    examLeaderValue: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(15.5),
      color: colors.ink,
    },

    sectionLabel: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(12),
      letterSpacing: scale(0.13 * 12),
      color: colors.faint,
    },

    // Teacher rows
    teacherList: {
      flexDirection: 'column',
      gap: verticalScale(9),
      marginTop: verticalScale(13),
    },
    teacherRowIdle: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(13),
      paddingVertical: verticalScale(15),
      paddingHorizontal: scale(16),
      borderRadius: scale(18),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      backgroundColor: '#fff',
    },
    teacherNameIdle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(19),
      letterSpacing: scale(-0.02 * 19),
      color: colors.faint,
    },
    teacherTraitIdle: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      color: INK_30,
    },
    chooseText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13.5),
      color: INK_30,
    },
    // 2pt of padding is what reveals the rotating ring beneath the face.
    ringOuter: {
      position: 'relative',
      borderRadius: scale(20),
      padding: scale(2),
      overflow: 'hidden',
      backgroundColor: '#fff',
    },
    teacherFace: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(13),
      paddingVertical: verticalScale(15),
      paddingHorizontal: scale(16),
      borderRadius: scale(18),
      overflow: 'hidden',
      backgroundColor: '#fff',
    },
    teacherName: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(19),
      letterSpacing: scale(-0.02 * 19),
      color: colors.ink,
    },
    teacherTrait: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      color: colors.slate,
    },
    yourTeacher: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(15.5),
      color: AMBER_DARK,
    },

    // Language pills
    langRow: {
      flexDirection: 'row',
      gap: scale(9),
      marginTop: verticalScale(13),
    },
    langPillIdle: {
      flex: 1,
      height: verticalScale(47),
      borderRadius: scale(13),
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      backgroundColor: '#fff',
    },
    langLabelIdle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(16),
      color: colors.slate,
    },
    langRingOuter: {
      position: 'relative',
      borderRadius: scale(14.5),
      padding: scale(2),
      overflow: 'hidden',
      backgroundColor: '#fff',
    },
    langFace: {
      height: verticalScale(43),
      borderRadius: scale(12.5),
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#fff',
    },
    langLabel: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(16),
      color: colors.ink,
    },
    langNote: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(13.5 * 1.45),
      color: colors.faint,
      marginTop: verticalScale(9),
    },

    // Exam
    examHeaderRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    examLabelRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(9),
    },
    examRule: {
      width: scale(16),
      height: verticalScale(2),
      backgroundColor: colors.red,
    },
    examLabel: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(12),
      letterSpacing: scale(0.13 * 12),
      color: colors.red,
    },
    managePill: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(5),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.18)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(5),
      paddingHorizontal: scale(13),
    },
    manageText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13.5),
      color: colors.ink,
    },
    manageChevron: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.ink,
    },
    examName: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(23.5),
      letterSpacing: scale(-0.03 * 23.5),
      color: colors.ink,
      marginTop: verticalScale(13),
    },
    chipRow: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: scale(7),
      marginTop: verticalScale(11),
    },
    chip: {
      backgroundColor: SURFACE_WARM,
      borderRadius: scale(99),
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(13.5),
    },
    chipText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13.5),
      color: colors.ink,
    },

    // Links
    linkRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: verticalScale(13.5),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.12)',
    },
    linkRowLast: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.12)',
    },
    linkLabel: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(16),
      color: colors.ink,
    },
    linkChevron: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14.5),
      color: INK_30,
    },

    // Rate the app
    rateCard: {
      position: 'relative',
      overflow: 'hidden',
      marginTop: verticalScale(27),
      marginHorizontal: scale(24),
      borderRadius: scale(27),
      paddingTop: verticalScale(27),
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(22),
      alignItems: 'center',
    },
    // No clipping here — the SVG ellipse fades to fully transparent on every
    // edge by itself, and the card's own overflow:hidden trims the overhang.
    rateGlow: {
      position: 'absolute',
      top: verticalScale(-63),
      alignSelf: 'center',
      width: scale(254),
      height: verticalScale(181),
    },
    rateEyebrow: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(12),
      letterSpacing: scale(0.14 * 12),
      color: AMBER_MUTED,
      textAlign: 'center',
    },
    rateHeadline: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(27),
      letterSpacing: scale(-0.038 * 27),
      lineHeight: scale(27 * 1.06),
      color: CREAM,
      textAlign: 'center',
      marginTop: verticalScale(9),
    },
    rateSub: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(15.5),
      color: 'rgba(251,249,242,.62)',
      textAlign: 'center',
      marginTop: verticalScale(6),
    },
    // The handoff puts a `drop-shadow` on each star glyph. RN shadows follow the
    // View's box, not the glyph, so applying one here painted a dark rectangle
    // behind the row — dropped rather than faked; the card's halo already
    // supplies the amber glow around them.
    starRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: scale(7),
      marginTop: verticalScale(16),
    },
    rateButton: {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: verticalScale(52),
      borderRadius: scale(99),
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: verticalScale(20),
    },
    rateButtonFill: {
      borderRadius: scale(99),
    },
    rateButtonText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(17),
      color: colors.ink,
    },

    // Log out
    logOutWrap: {
      paddingHorizontal: scale(24),
      marginTop: verticalScale(18),
    },
    logOutButton: {
      width: '100%',
      height: verticalScale(49),
      borderRadius: scale(14.5),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(221,68,51,.4)',
    },
    logOutText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(16),
      color: colors.red,
    },
  });
}

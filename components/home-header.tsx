import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { MonkLogo } from '@/components/monk-logo';
import { PracticeIcon, ProgressGlyph, SnapADoubtIcon } from '@/components/monk-icons';
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

/** The card's corner. The keys inside sit 12 in, so their corners are 20 - 12 = 8
 *  short of concentric; the sky half is clipped to the card's own corner. */
const CARD_RADIUS = 20;
/** Padding inside the sky half, round the teacher row and the Start key. */
const CARD_PAD = 12;

/**
 * HOME'S TOP: A WHITE PAGE AND ONE CARD (Nikhil, 9 Nov 2026).
 *
 * The night sky used to fill the whole top of Home behind the logo row and the
 * class. It now lives only inside one card, and the page around it is white,
 * so the colour gathers on the one object a student starts from.
 *
 * THE TOP OF THE PAGE: the logo row with a hairline under it (a white page
 * needs an edge where the chrome ends), then the date as a small amber label
 * and a greeting with the student's first name. The greeting is 20, between
 * the card's 16 and the app's 24 page titles: on white, 24 outweighed the card
 * it introduces.
 *
 * THE CARD IS TWO-TONE. The sky half holds the teacher (tap to change) and the
 * cream Start key — the class belongs to the teacher. The white half holds Snap
 * and Solve and Practice, each with a sky chip, a name, a line saying what it
 * does (not its limits: each screen says those) and an action in the teacher's
 * colour, so the half reads as tappable without boxes or buttons. A hairline
 * edge and a soft shadow lift the whole card off the page.
 *
 * Tried and dropped on the way (all captured on device): the sky behind the
 * whole header; Snap and Practice as pills docked on its edge; cream, glass and
 * orange keys inside a dark console; a sky band behind the greeting.
 */
export function HomeHeader({
  teacher,
  firstName,
  onSelectTeacher,
  onStartClass,
  onSnap,
  onPractice,
  onProgress,
  onProfile,
  onMeasure,
  skyMix,
}: {
  teacher: TeacherId;
  /** The student's first name, or '' before the profile has loaded. */
  firstName: string;
  /** 0 Drona's light, 1 Vedha's — owned by the screen, which knows when the
   *  teacher changed rather than was simply loaded. */
  skyMix: SharedValue<number>;
  onSelectTeacher: () => void;
  onStartClass: () => void;
  onSnap: () => void;
  onPractice: () => void;
  onProgress: () => void;
  onProfile: () => void;
  /** The header's size, for the screen's scroll handling. */
  onMeasure?: (size: { width: number; height: number }) => void;
}) {
  const insets = useSafeAreaInsets();
  const { scale } = useScale();
  const trait = TEACHERS.find((t) => t.id === teacher)?.trait ?? '';
  const styles = useMemo(() => createStyles(scale), [scale]);
  const accent = START_ARROW[teacher];
  const initial = firstName.trim()[0]?.toUpperCase() ?? '';

  /** The card's width, and where its sky half ends (under the Start key). */
  const [cardWidth, setCardWidth] = useState(0);
  const [skyHeight, setSkyHeight] = useState(0);

  const tools = [
    {
      key: 'snap',
      name: 'Snap and Solve',
      line: `Solved step by step. Ask ${teacherName(teacher)} why.`,
      action: 'Snap a question',
      go: onSnap,
    },
    {
      key: 'practice',
      name: 'Practice',
      line: 'Past-year questions and focus mode.',
      action: 'Start practising',
      go: onPractice,
    },
  ] as const;

  return (
    <View
      style={styles.header}
      onLayout={(e) => onMeasure?.({ width: e.nativeEvent.layout.width, height: e.nativeEvent.layout.height })}>
      <View style={[styles.logoRow, { marginTop: insets.top }]}>
        <MonkLogo height={scale(20)} tone="light" />
        <View style={styles.logoRowRight}>
          <PressableScale style={styles.circleButton} accessibilityLabel="Progress" onPress={onProgress}>
            <ProgressGlyph size={scale(19)} color={colors.ink} />
          </PressableScale>
          <PressableScale style={styles.circleButton} accessibilityLabel="Profile" onPress={onProfile}>
            {initial ? <Text style={styles.initial}>{initial}</Text> : <PersonIcon scale={scale} />}
          </PressableScale>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.greetingBlock}>
          <Text style={styles.date}>{todayLabel()}</Text>
          <Text style={styles.greeting} numberOfLines={1}>
            {greeting(firstName)}
          </Text>
        </View>

        <View
          style={styles.card}
          onLayout={(e) => {
            const w = Math.round(e.nativeEvent.layout.width);
            setCardWidth((prev) => (prev === w ? prev : w));
          }}>
          {/* The sky half, clipped to the card's corners. */}
          <View style={[styles.skyClip, { height: skyHeight }]} pointerEvents="none">
            <ThemedSky
              width={cardWidth}
              height={skyHeight}
              themes={TEACHER_SKIES}
              mix={skyMix}
              style={StyleSheet.absoluteFillObject}
            />
          </View>

          <View
            style={styles.skyHalf}
            onLayout={(e) => {
              const h = Math.round(e.nativeEvent.layout.height);
              setSkyHeight((prev) => (prev === h ? prev : h));
            }}>
            <PressableScale
              style={styles.teacherRow}
              accessibilityRole="button"
              accessibilityLabel={`${teacherName(teacher)} is teaching you. Choose between Drona and Vedha.`}
              onPress={onSelectTeacher}>
              <TeacherOrbPoster teacher={teacher} size={scale(46)} />
              <View style={styles.teacherText}>
                <Text style={styles.teacherName}>{teacherName(teacher)}</Text>
                <Text style={styles.teacherTrait}>{titleCaseTrait(trait)}</Text>
              </View>
              {/* A small glass button, not a word with an arrow: Home had
                  too many arrows, and the shape alone says "tap". */}
              <View style={styles.selectGroup}>
                <Text style={styles.selectLabel}>Change</Text>
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
              <StartArrow scale={scale} color={accent} />
            </PressableScale>
          </View>

          <View style={styles.tools}>
            {tools.map((t, i) => (
              <View key={t.key} style={styles.toolSlot}>
                {i > 0 ? <View style={styles.toolDivider} /> : null}
                <PressableScale
                  style={styles.tool}
                  accessibilityRole="button"
                  accessibilityLabel={`${t.name}. ${t.line}`}
                  onPress={t.go}>
                  <View style={styles.chip}>
                    <ThemedSky
                      width={scale(44)}
                      height={scale(44)}
                      themes={TEACHER_SKIES}
                      mix={skyMix}
                      style={StyleSheet.absoluteFillObject}
                    />
                    {t.key === 'snap' ? (
                      <SnapADoubtIcon size={scale(23)} color={colors.paper} accent={colors.paper} />
                    ) : (
                      <PracticeIcon size={scale(23)} color={colors.paper} accent={colors.paper} />
                    )}
                  </View>
                  <View style={styles.toolText}>
                    <Text style={styles.toolName}>{t.name}</Text>
                    <Text style={styles.toolLine}>{t.line}</Text>
                  </View>
                  <View style={styles.toolAction}>
                    <Text style={[styles.toolActionLabel, { color: accent }]}>{t.action}</Text>
                    <SmallArrow scale={scale} color={accent} />
                  </View>
                </PressableScale>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

/** "Good morning" / "Good afternoon" / "Good evening", with the first name. */
function greeting(name: string) {
  const h = new Date().getHours();
  const part = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  return name ? `${part}, ${name}.` : `${part}.`;
}

/** "Monday, 9 November". */
function todayLabel() {
  return new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });
}

/** The arrow on the Start key: 2.2 in a 24 box, the weight it was drawn to. */
function StartArrow({ scale, color }: { scale: (n: number) => number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={scale(18)} height={scale(18)} fill="none">
      <Path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** The arrow after "Snap a question" and "Start practising". */
function SmallArrow({ scale, color }: { scale: (n: number) => number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={scale(13)} height={scale(13)} fill="none">
      <Path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** Stands in for the initial until the profile has loaded. */
function PersonIcon({ scale }: { scale: (n: number) => number }) {
  return (
    <Svg viewBox="0 0 24 24" width={scale(19)} height={scale(19)} fill="none">
      <Circle cx={12} cy={8} r={3.6} stroke={colors.ink} strokeWidth={1.7} />
      <Path d="M4.8 20c0-3.6 3.2-5.6 7.2-5.6s7.2 2 7.2 5.6" stroke={colors.ink} strokeWidth={1.7} strokeLinecap="round" />
    </Svg>
  );
}

function createStyles(scale: (n: number) => number) {
  return StyleSheet.create({
    header: { backgroundColor: '#fff' },

    // --- logo row, with the hairline that ends the chrome ---
    logoRow: {
      height: scale(52),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: scale(24),
      paddingRight: scale(20),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.08)',
    },
    logoRowRight: { flexDirection: 'row', alignItems: 'center', gap: scale(8) },
    circleButton: {
      width: scale(40),
      height: scale(40),
      borderRadius: scale(20),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.12)',
    },
    initial: { fontFamily: 'Onest_700Bold', fontSize: scale(15), color: colors.ink },

    // --- date, greeting and card ---
    content: {
      paddingTop: scale(24),
      paddingHorizontal: scale(24),
      paddingBottom: scale(8),
      gap: scale(18),
    },
    greetingBlock: { gap: scale(4) },
    date: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11),
      lineHeight: scale(14),
      letterSpacing: scale(1.1),
      textTransform: 'uppercase',
      color: colors.amberText,
    },
    greeting: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(20),
      lineHeight: scale(25),
      letterSpacing: scale(-0.4),
      color: colors.ink,
    },

    card: {
      borderRadius: scale(CARD_RADIUS),
      backgroundColor: '#fff',
      borderWidth: 1,
      /* A clear edge for the white half (.16, up from .10: "barely visible"). */
      borderColor: 'rgba(28,26,22,.16)',
      boxShadow: [
        { offsetX: 0, offsetY: scale(14), blurRadius: scale(32), spreadDistance: scale(-12), color: 'rgba(28,26,22,.22)' },
      ],
    },
    skyClip: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      borderTopLeftRadius: scale(CARD_RADIUS - 1),
      borderTopRightRadius: scale(CARD_RADIUS - 1),
      overflow: 'hidden',
    },
    skyHalf: { padding: scale(CARD_PAD), gap: scale(12) },
    teacherRow: {
      height: scale(66),
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingLeft: scale(2),
      paddingRight: scale(4),
    },
    teacherText: { flex: 1, gap: scale(1) },
    teacherName: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      lineHeight: scale(22),
      letterSpacing: scale(16 * -0.01),
      color: colors.paper,
    },
    teacherTrait: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: 'rgba(255,253,248,.62)',
    },
    selectGroup: {
      height: scale(32),
      paddingHorizontal: scale(14),
      borderRadius: scale(16),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255,253,248,.10)',
      borderWidth: 1,
      borderColor: 'rgba(251,221,160,.35)',
    },
    selectLabel: { fontFamily: 'Onest_600SemiBold', fontSize: scale(13), color: colors.paleGold },
    start: {
      height: scale(54),
      borderRadius: scale(14),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: scale(20),
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

    // --- the white half: Snap and Solve, Practice ---
    tools: { flexDirection: 'row', paddingTop: scale(10), paddingBottom: scale(8) },
    toolSlot: { flex: 1, flexDirection: 'row' },
    toolDivider: { width: 1, backgroundColor: 'rgba(28,26,22,.08)', marginVertical: scale(8) },
    tool: { flex: 1, paddingHorizontal: scale(14), paddingVertical: scale(14), gap: scale(14) },
    chip: {
      width: scale(44),
      height: scale(44),
      borderRadius: scale(13),
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
    },
    toolText: { flexGrow: 1, gap: scale(4) },
    toolName: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      lineHeight: scale(22),
      color: colors.ink,
    },
    toolLine: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.slate,
    },
    toolAction: { flexDirection: 'row', alignItems: 'center', gap: scale(4) },
    toolActionLabel: { fontFamily: 'Onest_600SemiBold', fontSize: scale(13), lineHeight: scale(18) },
  });
}

import { router } from 'expo-router';
import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ProgressGlyph } from '@/components/monk-icons';
import { StateCard } from '@/components/states';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

/**
 * PROGRESS, AS A FREE STUDENT SEES IT: A SAMPLE, NOT THEIR NUMBERS.
 *
 * The free tier does not show a student their own score or weak areas (the
 * server answers `locked`). What goes here instead is what the page LOOKS like
 * with a plan, drawn with made-up figures, said to be made up in three places
 * (the tag, the heading, the dimming) so nobody reads it as their own. Their
 * answers are still being recorded, and the card above it says so.
 */
const SAMPLE_SUBJECTS = [
  { name: 'Physics', pct: 0.64 },
  { name: 'Chemistry', pct: 0.48 },
  { name: 'Maths', pct: 0.72 },
];

const SAMPLE_WEAK = ['Rotational motion', 'Chemical equilibrium', 'Definite integrals'];

export function ProgressLocked({ message }: { message: string }) {
  const { scale } = useScale();
  const styles = useMemo(() => createStyles(scale), [scale]);

  return (
    <>
      <StateCard
        glyph="progress"
        icon={(size, color) => <ProgressGlyph size={size} color={color} accent={color} />}
        title="Your progress unlocks with a plan"
        line={message}
        action={{ label: 'See plans', onPress: () => router.push('/plans') }}
        quiet={{ label: 'Start practising', onPress: () => router.push('/practice') }}
      />

      <View style={styles.sampleHead}>
        <Text style={styles.overline}>WHAT IT LOOKS LIKE</Text>
        <Text style={styles.pillText}>SAMPLE</Text>
      </View>

      <View style={styles.sample} pointerEvents="none" accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
        <View style={styles.card}>
          <Text style={styles.cardOver}>MONK SCORE</Text>
          <View style={styles.scoreRow}>
            <Text style={styles.score}>612</Text>
            <Text style={styles.scoreOf}>/ 1000</Text>
          </View>
          {SAMPLE_SUBJECTS.map((s) => (
            <View key={s.name} style={styles.subjectRow}>
              <Text style={styles.subjectName}>{s.name}</Text>
              <View style={styles.track}>
                <View style={[styles.fill, { width: `${Math.round(s.pct * 100)}%` }]} />
              </View>
              <Text style={styles.subjectPct}>{Math.round(s.pct * 100)}%</Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardOver}>NEEDS REVISION</Text>
          {SAMPLE_WEAK.map((name, i) => (
            <View key={name} style={[styles.weakRow, i === SAMPLE_WEAK.length - 1 && styles.weakLast]}>
              <View style={styles.weakDot} />
              <Text style={styles.weakName}>{name}</Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
}

function createStyles(scale: (n: number) => number) {
  return StyleSheet.create({
    sampleHead: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: scale(22),
      marginBottom: scale(10),
    },
    overline: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(11),
      letterSpacing: scale(1.2),
      color: colors.faint,
    },
    pillText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(10.5),
      letterSpacing: scale(1),
      color: colors.amberText,
    },
    // Dimmed: it is a picture of the page, not the page.
    sample: { opacity: 0.5, gap: scale(12) },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: scale(16),
      padding: scale(16),
      borderWidth: StyleSheet.hairlineWidth * 2,
      borderColor: 'rgba(28,26,22,.14)',
    },
    cardOver: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(11),
      letterSpacing: scale(1.2),
      color: colors.faint,
      marginBottom: scale(8),
    },
    scoreRow: { flexDirection: 'row', alignItems: 'baseline', gap: scale(6), marginBottom: scale(10) },
    score: { fontFamily: 'Onest_600SemiBold', fontSize: scale(40), color: colors.ink },
    scoreOf: { fontFamily: 'Onest_400Regular', fontSize: scale(15), color: colors.faint },
    subjectRow: { flexDirection: 'row', alignItems: 'center', gap: scale(10), marginTop: scale(8) },
    subjectName: { width: scale(76), fontFamily: 'Onest_400Regular', fontSize: scale(13.5), color: colors.ink },
    track: { flex: 1, height: scale(7), borderRadius: scale(4), backgroundColor: 'rgba(28,26,22,.08)', overflow: 'hidden' },
    fill: { height: '100%', borderRadius: scale(4), backgroundColor: colors.marigold },
    subjectPct: { width: scale(38), textAlign: 'right', fontFamily: 'Onest_600SemiBold', fontSize: scale(13), color: colors.ink },
    weakRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingVertical: scale(9),
      borderBottomWidth: StyleSheet.hairlineWidth * 2,
      borderBottomColor: 'rgba(28,26,22,.1)',
    },
    weakLast: { borderBottomWidth: 0 },
    weakDot: { width: scale(8), height: scale(8), borderRadius: scale(4), backgroundColor: colors.marigold },
    weakName: { fontFamily: 'Onest_400Regular', fontSize: scale(14), color: colors.ink },
  });
}

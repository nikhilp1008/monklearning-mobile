import { router } from 'expo-router';
import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { RingSweep } from '@/components/gradient-select';
import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import type { MockDiagnosticOffer } from '@/lib/mock';

/**
 * THE PROMPT FOR A STUDENT THE APP DOES NOT KNOW YET, ON HOME.
 *
 * Until a student has answered something, "weak areas" and "what moves your
 * score" are guesses: every chapter reads as untouched, so the only ordering
 * left is exam weightage. One short paper turns that into a real starting
 * point, so this goes where a new student lands. It is shown only while the
 * server calls the free paper `recommended`; once it is sat — or the student
 * has practised their way past needing it — Home is exactly what it was.
 *
 * The numbers are the server's own offer, so the card cannot say "35
 * questions" over a paper that has changed size.
 *
 * A white card inside the app's "picked" ring, held still, as on the Mock
 * tests card it leads to: the one marigold detail on this part of Home, and
 * never the yellow tint the app has dropped.
 */
export function StartingPointCard({ offer }: { offer: MockDiagnosticOffer }) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  return (
    <PressableScale
      style={styles.ring}
      accessibilityRole="button"
      accessibilityLabel="Find your starting point. Free short paper."
      onPress={() => router.push('/mocks')}
    >
      <RingSweep radius={scale(14) + RING} still={RING_ANGLE} />
      <View style={styles.row}>
        <View style={styles.text}>
          <Text style={styles.overline}>Start here · Free</Text>
          <Text style={styles.title}>Find your starting point</Text>
          <Text style={styles.body}>
            {offer.questions} questions, {offer.duration_minutes} minutes. It shows what you know
            and where to practise first.
          </Text>
        </View>
        <ArrowRightIcon color={colors.ink} size={scale(16)} />
      </View>
    </PressableScale>
  );
}

/** The ring's width, and where its bright side sits (upper right), as on Mock tests. */
const RING = 2;
const RING_ANGLE = 140;

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    /** A hairline under the ring, so its fading side still has an edge. */
    ring: {
      padding: RING,
      borderRadius: scale(14) + RING,
      backgroundColor: 'rgba(28,26,22,.10)',
      overflow: 'hidden',
      marginTop: verticalScale(24),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(16),
      paddingVertical: verticalScale(18),
      paddingHorizontal: scale(16),
      borderRadius: scale(14),
      backgroundColor: '#FFFFFF',
    },
    text: { flex: 1, minWidth: 0 },
    overline: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11),
      lineHeight: scale(14),
      letterSpacing: scale(1.1),
      textTransform: 'uppercase',
      color: colors.amberText,
    },
    title: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      lineHeight: scale(22),
      color: colors.ink,
      marginTop: verticalScale(8),
    },
    body: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.slate,
      marginTop: verticalScale(4),
    },
  });
}

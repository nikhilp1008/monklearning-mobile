import { router } from 'expo-router';
import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PressableScale } from '@/components/pressable-scale';
import { CardButton } from '@/components/card-button';
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
 *
 * HOME'S "UP NEXT" (Nikhil, 9 Nov 2026): the one thing to do next, with a
 * button that says what happens instead of an arrow in the corner. The paper
 * waiting card takes this place when a paper is running.
 */
export function StartingPointCard({ offer }: { offer: MockDiagnosticOffer }) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  return (
    <PressableScale
      style={styles.ring}
      accessibilityRole="button"
      accessibilityLabel="Find your starting point. A short paper."
      onPress={() => router.push('/mocks')}
    >
      <View style={styles.row}>
        <View style={styles.text}>
          <Text style={styles.overline}>Up next</Text>
          <Text style={styles.title}>Find your starting point</Text>
          <Text style={styles.body}>
            {offer.questions} questions, {offer.duration_minutes} minutes. It shows what you know
            and where to practise first.
          </Text>
        </View>
        <CardButton label="Start" />
      </View>
    </PressableScale>
  );
}


function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    /** A hairline under the ring, so its fading side still has an edge. */
    /* Home's Up next, as the Calmer Home design drew it (Nikhil, 9 Nov
       2026): an even marigold line all the way round, not the fading ring. */
    ring: {
      borderWidth: 1.5,
      borderColor: 'rgba(238,163,31,.55)',
      borderRadius: scale(18),
      backgroundColor: '#FFFFFF',
      marginTop: verticalScale(24),
    },
    row: {
      gap: verticalScale(16),
      paddingVertical: verticalScale(20),
      paddingHorizontal: scale(22),
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

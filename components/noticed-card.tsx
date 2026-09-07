import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import type { Observation } from '@/lib/noticed';

/**
 * The observation row on Home.
 *
 * Stripped to one sentence on purpose. The first build carried an initial in a
 * marigold disc, a "<teacher> noticed" label and a highlighter mark on the
 * chapter name — three separate signals competing inside 110pt, which read as
 * congested rather than considered.
 *
 * What that costs is worth recording: those three were what made this the
 * *teacher* speaking (MOMENTS.md rule 3), and without them the row is an
 * observation from the app. The amber keeps it in the teacher's colour, but
 * nothing here says who is talking. Worth revisiting if the row ever needs to
 * feel personal again — but half-signalling it was the worse option.
 *
 * What's left is the sentence, an optional short tag, and the chevron; the
 * whole row is the target, so the card is the button rather than containing
 * one.
 */

export function NoticedCard({
  observation,
  onPress,
}: {
  observation: Observation;
  onPress: () => void;
}) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  return (
    <PressableScale style={styles.card} onPress={onPress}>
      <Text style={styles.text} numberOfLines={2}>
        {observation.text}
      </Text>
      {!!observation.meta && (
        <View style={styles.metaChip}>
          <Text style={styles.metaText}>{observation.meta}</Text>
        </View>
      )}
      <ArrowRightIcon color={colors.amberText} size={scale(15)} />
    </PressableScale>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingVertical: verticalScale(15),
      paddingHorizontal: scale(16),
      borderRadius: scale(16),
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.38)',
      backgroundColor: 'rgba(238,163,31,.09)',
    },
    text: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      lineHeight: scale(20),
      letterSpacing: scale(-0.02 * 15),
      color: colors.ink,
    },
    metaChip: {
      flexShrink: 0,
      paddingHorizontal: scale(8),
      paddingVertical: verticalScale(2.5),
      borderRadius: scale(99),
      backgroundColor: 'rgba(255,255,255,.85)',
    },
    metaText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(11),
      color: colors.amberText,
    },
  });
}

import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/brand';
import { CONTROL_LABEL_MAX_SCALE } from '@/constants/font-scale';
import { useScale } from '@/constants/scale';

/**
 * THE BUTTON INSIDE HOME'S UP NEXT CARD.
 *
 * A boxy white key with an ink label and a clear edge, no arrow (Home had too
 * many): the same make as the Start key in the class card above (14 corners,
 * not a pill).
 *
 * WHITE SINCE 19 NOV 2026 (Nikhil, "H1"). It was a piece of the teacher's sky,
 * and with the class card and the two tool tiles that made four pieces of the
 * same fade on one screen. The sky is the class card's alone now, and this is
 * the quiet second action under it. A white outline was tried and dropped on
 * 9 Nov, when the rest of Home was far more colourful; on the calmer page it
 * holds. Also tried and dropped: flat orange, marigold, ink.
 *
 * It draws only: the card around it is the pressable, so the whole card is
 * the target and this is its label.
 */
export function CardButton({ label }: { label: string }) {
  const { scale } = useScale();
  const styles = useMemo(() => createStyles(scale), [scale]);

  return (
    <View style={styles.button}>
      <Text style={styles.label} maxFontSizeMultiplier={CONTROL_LABEL_MAX_SCALE}>
        {label}
      </Text>
    </View>
  );
}

function createStyles(scale: (n: number) => number) {
  return StyleSheet.create({
    button: {
      height: scale(50),
      borderRadius: scale(14),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderWidth: 1.5,
      borderColor: 'rgba(28,26,22,.18)',
    },
    label: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      lineHeight: scale(22),
      color: colors.ink,
    },
  });
}

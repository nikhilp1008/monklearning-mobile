import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NightSky } from '@/components/night-sky';
import { useTeacherId } from '@/components/states';
import { colors } from '@/constants/brand';
import { CONTROL_LABEL_MAX_SCALE } from '@/constants/font-scale';
import { useScale } from '@/constants/scale';
import { SKY_THEMES } from '@/constants/teachers';

/**
 * THE BUTTON INSIDE HOME'S UP NEXT CARD (Nikhil, 9 Nov 2026).
 *
 * A boxy key in the teacher's night sky with its label centred, no arrow
 * (Home had too many): the same make as the Start key in the class card
 * above (14 corners, not a pill). While the whole top of Home was sky, a second piece of sky here
 * fought it; with the sky now held inside one card, it ties Up next to that
 * card instead. Tried and dropped before: flat orange, marigold, ink, a white
 * outline.
 *
 * It draws only: the card around it is the pressable, so the whole card is
 * the target and this is its label.
 */
export function CardButton({ label }: { label: string }) {
  const { scale } = useScale();
  const styles = useMemo(() => createStyles(scale), [scale]);
  const teacher = useTeacherId();
  const [width, setWidth] = useState(0);

  return (
    <View
      style={styles.button}
      onLayout={(e) => {
        const w = Math.round(e.nativeEvent.layout.width);
        setWidth((prev) => (prev === w ? prev : w));
      }}>
      <NightSky
        width={width}
        height={scale(50)}
        theme={SKY_THEMES[teacher]}
        style={StyleSheet.absoluteFillObject}
      />
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
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      lineHeight: scale(22),
      color: colors.paper,
    },
  });
}

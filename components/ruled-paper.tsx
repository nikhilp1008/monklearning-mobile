import { StyleSheet, View } from 'react-native';

import { colors } from '@/constants/brand';

type RuledPaperProps = {
  /** Distance in px between hairlines. */
  step?: number;
  color?: string;
  /** How many lines to render — must cover the tallest container this is used in. */
  count?: number;
};

export function RuledPaper({ step = 42, color = colors.ruledLine, count = 40 }: RuledPaperProps) {
  return (
    <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
      {Array.from({ length: count }).map((_, i) => (
        <View
          key={i}
          style={[styles.line, { top: i * step + (step - 1), backgroundColor: color }]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
  },
});

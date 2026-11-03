import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BackArrowIcon } from '@/components/settings-page';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

/**
 * The header every textbook revise screen shares, the same as Learn's topic
 * sheet: a round back button and the screen's name on one row, 20 SemiBold.
 *
 * `count` is for one-at-a-time screens (the formula sheet, a diagram), "2 of 9".
 * `rule` is for lists that scroll under the header (Key points, the diagram
 * gallery): a hairline that the content passes beneath.
 */
export function ReviseHeader({ title, count, rule, onBack }: { title: string; count?: string; rule?: boolean; onBack?: () => void }) {
  const { scale, verticalScale } = useScale();
  return (
    <View
      style={[
        styles.row,
        { paddingHorizontal: scale(20), paddingTop: verticalScale(8), paddingBottom: verticalScale(12), gap: scale(12) },
        rule && styles.rule,
      ]}>
      <Pressable
        onPress={onBack ?? (() => router.back())}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel="Back"
        style={({ pressed }) => [styles.back, { width: scale(36), height: scale(36), borderRadius: scale(18) }, pressed && styles.pressed]}>
        <BackArrowIcon size={scale(16)} />
      </Pressable>
      <Text style={[styles.title, { fontSize: scale(20), letterSpacing: scale(-0.4) }]} numberOfLines={1} accessibilityRole="header">
        {title}
      </Text>
      {!!count && <Text style={[styles.count, { fontSize: scale(13) }]}>{count}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF' },
  rule: { borderBottomWidth: 1, borderBottomColor: 'rgba(28,26,22,.08)' },
  back: { borderWidth: 1, borderColor: colors.hairline, alignItems: 'center', justifyContent: 'center' },
  pressed: { opacity: 0.5 },
  title: { flex: 1, minWidth: 0, fontFamily: 'Onest_600SemiBold', color: colors.ink },
  count: { fontFamily: 'Onest_600SemiBold', color: colors.faint, fontVariant: ['tabular-nums'] },
});

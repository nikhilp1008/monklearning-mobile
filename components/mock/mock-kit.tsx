import { ReactNode } from 'react';
import { ActivityIndicator, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

/**
 * THE MOCK TESTS' SHARED PARTS: one key, one section heading, one card.
 *
 * The five mock screens had grown three kinds of button (ink pills of 40, 52
 * and 56, one with a ledge), three kinds of heading and cards with three
 * different gaps. These are the one of each they all use now.
 *
 * The key is the app's flat ink pill, the one Snap, Progress and Practice
 * use: 52 tall, SemiBold 16, no shadow. The second choice on a screen ("Go
 * to Home", "Keep going") is the same pill in white with a fine border.
 */
export const MOCK_GAP = { card: 12, section: 28, gutter: 20 } as const;

export function MockKey({
  label,
  onPress,
  tone = 'ink',
  arrow = false,
  busy = false,
  disabled = false,
  style,
}: {
  label: string;
  onPress: () => void;
  tone?: 'ink' | 'white';
  arrow?: boolean;
  busy?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const { scale, verticalScale } = useScale();
  const ink = tone === 'ink';
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || busy}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [
        k.key,
        { height: verticalScale(52), gap: scale(9) },
        ink ? k.ink : k.white,
        (pressed || disabled) && k.dim,
        style,
      ]}>
      {busy ? (
        <ActivityIndicator color={ink ? colors.paper : colors.ink} />
      ) : (
        <>
          <Text style={[k.text, { fontSize: scale(16) }, { color: ink ? colors.paper : colors.ink }]}>{label}</Text>
          {arrow && <KeyArrow size={scale(15)} color={ink ? colors.paper : colors.ink} />}
        </>
      )}
    </Pressable>
  );
}

export function KeyArrow({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke={color} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** The marigold dash and small capitals, with an optional count on the right. */
export function MockSection({ title, count, first = false }: { title: string; count?: string; first?: boolean }) {
  const { scale, verticalScale } = useScale();
  return (
    <View style={[k.section, { gap: scale(10), marginTop: first ? 0 : verticalScale(MOCK_GAP.section), marginBottom: verticalScale(10) }]}>
      <View style={[k.dash, { width: scale(16) }]} />
      <Text style={[k.sectionText, { fontSize: scale(9.5), letterSpacing: scale(1.05) }]}>{title}</Text>
      {!!count && <Text style={[k.sectionCount, { fontSize: scale(12) }]}>{count}</Text>}
    </View>
  );
}

/** White, a fine border, 16 corners and 16 inside. No shadow. */
export function MockCard({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  const { scale, verticalScale } = useScale();
  return (
    <View style={[k.card, { borderRadius: scale(16), paddingVertical: verticalScale(14), paddingHorizontal: scale(16) }, style]}>{children}</View>
  );
}

const k = StyleSheet.create({
  key: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', borderRadius: 999 },
  ink: { backgroundColor: colors.ink },
  white: { backgroundColor: '#FFFFFF', borderWidth: 1.4, borderColor: 'rgba(28,26,22,.16)' },
  dim: { opacity: 0.6 },
  text: { fontFamily: 'Onest_600SemiBold' },
  section: { flexDirection: 'row', alignItems: 'center' },
  dash: { height: 2, borderRadius: 2, backgroundColor: colors.marigold },
  sectionText: { fontFamily: 'Onest_800ExtraBold', textTransform: 'uppercase', color: colors.ink },
  sectionCount: { marginLeft: 'auto', fontFamily: 'Onest_500Medium', color: colors.faint, fontVariant: ['tabular-nums'] },
  card: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: 'rgba(28,26,22,.10)' },
});

import { ReactNode } from 'react';
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { ObButton } from '@/components/onboarding-kit';
import { colors } from '@/constants/brand';
import { useDesignScale } from '@/constants/onboarding';
import { useScale } from '@/constants/scale';

/**
 * THE MOCK TESTS' SHARED PARTS: one key, one section heading, one card.
 *
 * The five mock screens had grown three kinds of button (ink pills of 40, 52
 * and 56, one with a ledge), three kinds of heading and cards with three
 * different gaps. These are the one of each they all use now.
 *
 * The key is the onboarding one, rounded corners not a pill; the second
 * choice on a screen ("Go to Home", "Keep going") is the same key in white.
 */
export const MOCK_GAP = { card: 12, section: 28, gutter: 20 } as const;

/**
 * The app's main key, the onboarding one (components/onboarding-kit.tsx):
 * rounded corners rather than a pill, and the second choice on a screen in
 * the same shape, white with a hairline. Used as is, so a change to the key
 * reaches the mock screens too.
 */
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
  return (
    <View style={style}>
      <ObButton
        label={label}
        onPress={onPress}
        variant={tone === 'ink' ? 'ink' : 'outline'}
        withArrow={arrow}
        busy={busy}
        disabled={disabled}
      />
    </View>
  );
}

/** The square partner of the key, for "back" beside it: same height and corners. */
export function MockSquareKey({
  onPress,
  disabled,
  label,
  children,
}: {
  onPress: () => void;
  disabled?: boolean;
  label: string;
  children: ReactNode;
}) {
  const { ds } = useDesignScale();
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [
        k.square,
        { width: ds(60), height: ds(60), borderRadius: ds(18) },
        (pressed || disabled) && k.dim,
      ]}>
      {children}
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

/**
 * A section's name, as the app's other pages set one (the chapter home's
 * "Revise", Progress's labels): Onest SemiBold 13 in the faint grey, sentence
 * case, with an optional count at the right. No marigold dash: that mark
 * belonged to nothing else in the brand.
 */
export function MockSection({ title, count, first = false }: { title: string; count?: string; first?: boolean }) {
  const { scale, verticalScale } = useScale();
  return (
    <View style={[k.section, { marginTop: first ? 0 : verticalScale(MOCK_GAP.section), marginBottom: verticalScale(10) }]}>
      <Text style={[k.sectionText, { fontSize: scale(13) }]}>{title}</Text>
      {!!count && <Text style={[k.sectionCount, { fontSize: scale(13) }]}>{count}</Text>}
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
  square: { alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', borderWidth: 1.4, borderColor: 'rgba(28,26,22,.16)' },
  dim: { opacity: 0.4 },
  section: { flexDirection: 'row', alignItems: 'baseline' },
  sectionText: { fontFamily: 'Onest_600SemiBold', color: colors.faint },
  sectionCount: { marginLeft: 'auto', fontFamily: 'Onest_500Medium', color: colors.faint, fontVariant: ['tabular-nums'] },
  card: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: 'rgba(28,26,22,.10)' },
});

// Shared primitives for the onboarding flow. These appear on nearly every
// screen in design_handoff_onboarding_flow, so they live here once rather
// than being re-derived per screen — that's what keeps the six screens
// pixel-identical to each other.
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { ob, obFont, useDesignScale } from '@/constants/onboarding';

type ObButtonProps = {
  label: string;
  onPress: () => void;
  /** Cream on the photographic welcome screens, ink everywhere else. */
  variant?: 'ink' | 'cream';
  /** The white-flow buttons carry a trailing arrow; the welcome ones don't. */
  withArrow?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

// Spec: width 100%, height 62, radius 16, label 19px/600, arrow 17px, gap 10.
export function ObButton({
  label,
  onPress,
  variant = 'ink',
  withArrow = false,
  disabled = false,
  style,
}: ObButtonProps) {
  const { ds } = useDesignScale();
  const isCream = variant === 'cream';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        {
          width: '100%',
          height: ds(62),
          // The handoff specifies radius 16, but every other primary button in
          // the app is a full pill (radius 99). Onboarding's last tap lands
          // straight on Home, so the two are seen a second apart — matching the
          // app's shape closes the only seam between the two systems. Height
          // stays at the specced 62.
          borderRadius: ds(99),
          backgroundColor: isCream ? ob.cream : ob.ink,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: ds(10),
          opacity: disabled ? 0.4 : pressed ? 0.85 : 1,
        },
        style,
      ]}>
      <Text
        style={{
          fontFamily: obFont.sb600,
          fontSize: ds(19),
          color: isCream ? ob.ink : ob.cream,
        }}>
        {label}
      </Text>
      {withArrow && (
        <Text
          style={{
            fontFamily: obFont.sb600,
            fontSize: ds(17),
            color: isCream ? ob.ink : ob.cream,
          }}>
          →
        </Text>
      )}
    </Pressable>
  );
}

type LeaderRowProps = {
  label: string;
  value: string;
  /** Cream variant is used over photography on welcome screen 01. */
  tone?: 'dark' | 'cream';
  labelSize?: number;
  valueSize?: number;
  /** The dotted rule's colour; defaults follow the tone. */
  leaderColor?: string;
  /**
   * Overrides the label colour. The summary rows on screens 05/06 use ink-80,
   * but the phone screen's "Already with us" line is ink-55 in the spec.
   */
  labelColor?: string;
  style?: StyleProp<ViewStyle>;
};

// Spec: `display:flex; align-items:baseline; gap:8px` with a dotted
// `flex:1` rule between label and value.
export function LeaderRow({
  label,
  value,
  tone = 'dark',
  labelSize = 16,
  valueSize = 19,
  leaderColor,
  labelColor,
  style,
}: LeaderRowProps) {
  const { ds } = useDesignScale();
  const isCream = tone === 'cream';

  return (
    <View style={[styles.leaderRow, { gap: ds(8) }, style]}>
      <Text
        style={{
          fontFamily: obFont.r400,
          fontSize: ds(labelSize),
          color: labelColor ?? (isCream ? ob.creamDim : ob.ink80),
        }}>
        {label}
      </Text>
      <View
        style={{
          flex: 1,
          borderBottomWidth: 1,
          borderStyle: 'dotted',
          borderBottomColor: leaderColor ?? (isCream ? ob.leaderCream : ob.leader26),
        }}
      />
      <Text
        style={{
          fontFamily: obFont.b700,
          fontSize: ds(valueSize),
          color: isCream ? ob.cream : ob.ink,
        }}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  leaderRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
});

/**
 * Back, for the middle of onboarding.
 *
 * A bare chevron, aligned to the 34pt headline column — it belongs to the type
 * layout, not to the 26pt card column, and not to the settings screens whose
 * bordered circle this replaced. That circle read as chrome borrowed from
 * another part of the app, and being off the headline's left edge it lined up
 * with nothing.
 *
 * Renders nothing when there is nowhere to go: the root gate can drop a
 * student onto `details` with an empty history, and a back button that does
 * nothing is worse than none.
 */
export function ObBack() {
  const { ds } = useDesignScale();
  // Absolute children are laid out against the parent's border box, so a
  // SafeAreaView's top padding does not move them.
  const insets = useSafeAreaInsets();
  if (!router.canGoBack()) return null;
  return (
    <Pressable
      onPress={() => router.back()}
      // Generous, because the glyph itself is small and sits in open space.
      hitSlop={16}
      accessibilityRole="button"
      accessibilityLabel="Go back"
      style={({ pressed }) => [
        {
          position: 'absolute',
          top: insets.top + ds(14),
          left: ds(34),
          paddingVertical: ds(4),
          paddingRight: ds(10),
          zIndex: 2,
          opacity: pressed ? 0.5 : 1,
        },
      ]}>
      <Svg viewBox="0 0 24 24" width={ds(20)} height={ds(20)} fill="none">
        <Path
          d="M15 5l-7 7 7 7"
          stroke={ob.ink55}
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Pressable>
  );
}

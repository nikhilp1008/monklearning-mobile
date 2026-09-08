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
  const { ds, fs, tracking } = useDesignScale();
  const isCream = variant === 'cream';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        {
          width: '100%',
          height: ds(60),
          // 14, as drawn. This was a pill on the argument that the app's own
          // buttons are pills and onboarding's last tap lands on Home — but
          // onboarding is seven screens of this button and one of Home, and the
          // handoff draws a box every time.
          borderRadius: ds(14),
          // Disabled is an outline, not a dimmed fill.
          //
          // `opacity: .4` on an ink pill renders as a grey slab, and grey is
          // not in this product's palette -- it reads as a different material
          // rather than as the same button waiting. An outline says "not yet"
          // without introducing a colour the app does not otherwise own, and
          // it is the same answer Practice's Submit arrived at.
          backgroundColor: disabled ? 'transparent' : isCream ? ob.cream : ob.ink,
          borderWidth: disabled ? 1.5 : 0,
          borderColor: isCream ? ob.creamRule : ob.hairline18,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: ds(10),
          opacity: pressed && !disabled ? 0.85 : 1,
        },
        style,
      ]}>
      <Text
        style={{
          fontFamily: obFont.m500,
          fontSize: fs(17),
          letterSpacing: tracking(-0.01, 17),
          color: disabled ? (isCream ? ob.creamDim : ob.ink40) : isCream ? ob.ink : ob.cream,
        }}>
        {label}
      </Text>
      {withArrow && (
        <Text
          style={{
            fontFamily: obFont.m500,
            fontSize: fs(15),
            color: disabled ? (isCream ? ob.creamDim : ob.ink40) : isCream ? ob.ink : ob.cream,
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
  const { ds, fs } = useDesignScale();
  const isCream = tone === 'cream';

  return (
    <View style={[styles.leaderRow, { gap: ds(8) }, style]}>
      <Text
        style={{
          fontFamily: obFont.r400,
          fontSize: fs(labelSize),
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
          fontSize: fs(valueSize),
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
/**
 * The screen header every white onboarding screen opens with: a back chevron
 * and the title on ONE line, 13pt apart.
 *
 * ObBack below floats the chevron absolutely, which put it on its own line
 * above the heading -- the handoff draws them as a single row, and with the
 * heading down at 22.5px a chevron stranded above it reads as a stray mark
 * rather than as part of the title.
 */
/**
 * The title every white onboarding screen opens with.
 *
 * No back chevron. The flow is short, each step writes what it collects, and
 * the two places a student actually needs to go back from have their own way
 * out -- "Change" on the code screen, and the promo screen's "Back to passes".
 * A chevron on all seven screens was navigation furniture for a journey that
 * only moves forward.
 */
export function ObHeader({ title }: { title: string }) {
  const { ds, fs, tracking } = useDesignScale();
  return (
    <View style={{ paddingHorizontal: ds(30), paddingTop: ds(34) }}>
      <Text
        style={{
          fontFamily: obFont.m500,
          fontSize: fs(22.5),
          lineHeight: fs(28),
          letterSpacing: tracking(-0.02, 22.5),
          color: ob.ink,
        }}>
        {title}
      </Text>
    </View>
  );
}

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

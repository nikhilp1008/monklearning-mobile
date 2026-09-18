// Shared primitives for the onboarding flow. These appear on nearly every
// screen in design_handoff_onboarding_flow, so they live here once rather
// than being re-derived per screen — that's what keeps the six screens
// pixel-identical to each other.
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
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
  /** Working, not unavailable: keeps the fill and swaps the arrow for a
   *  spinner. `disabled` empties the button to an outline, which on a dark
   *  ground reads as the button turning black. */
  busy?: boolean;
  /** A quiet right-hand label. The pass screen names the pass being bought
   *  beside the amount, as the handoff draws it. */
  trailing?: string;
  style?: StyleProp<ViewStyle>;
};

/**
 * THE BUTTON THE WHOLE FLOW TAPS, now the 3D ink key from the Live Board
 * handoff.
 *
 * It was a flat ink box with a 14pt radius that dimmed to 85% opacity while
 * held. The newer design draws the same button as a key you actually press: a
 * top-lit gradient, a hairline of white along the top edge, a darker one along
 * the bottom, and a solid 3pt ledge underneath that COLLAPSES when the face
 * travels down onto it. The travel and the ledge are the same 3pt, so the face
 * lands exactly where the ledge was — which is the whole reason it reads as a
 * key rather than as a rectangle that fades.
 *
 * `0 3px 0` is a shadow with no blur, which is a ledge and not a shadow. RN
 * implements both inset and zero-blur box shadows natively on iOS, so the
 * whole button is one `boxShadow` array rather than a stack of views faking
 * the edges.
 *
 * ONE PLACE, SEVEN SCREENS. Every screen in the flow reaches for this, so the
 * newer material arrives everywhere at once and the seams cannot drift. The
 * cream variant — one button, on the dark confirmation screen — takes the same
 * geometry and the same ledge with its own light-to-cream face, because a flat
 * cream slab beside six pressed keys reads as a different control.
 *
 * NOT REPLICATED: the design's 120ms ease on the press. `boxShadow` is not an
 * animatable property, so easing the travel while the ledge collapsed on the
 * frame would pull the face off its own ledge for a tenth of a second. Both
 * switch together instead, which is what the app's other 3D key does.
 */
export function ObButton({
  label,
  onPress,
  variant = 'ink',
  withArrow = false,
  disabled = false,
  busy = false,
  trailing,
  style,
}: ObButtonProps) {
  const { ds, fs, tracking } = useDesignScale();
  const isCream = variant === 'cream';

  const face = (held: boolean) => ({
    width: '100%' as const,
    height: ds(60),
    borderRadius: ds(18),
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: (trailing ? 'space-between' : 'center') as 'space-between' | 'center',
    paddingHorizontal: trailing ? ds(22) : 0,
    gap: ds(10),
    transform: [{ translateY: held ? ds(3) : 0 }],
    boxShadow: [
      { offsetX: 0, offsetY: 1, blurRadius: 0, color: 'rgba(255,255,255,.22)', inset: true },
      { offsetX: 0, offsetY: -1.5, blurRadius: 0, color: 'rgba(0,0,0,.4)', inset: true },
      // The ledge, and what is left of it once the key is down.
      { offsetX: 0, offsetY: held ? 0 : ds(3), blurRadius: 0, color: 'rgba(28,26,22,.35)' },
      held
        ? { offsetX: 0, offsetY: ds(3), blurRadius: ds(8), color: 'rgba(28,26,22,.2)' }
        : { offsetX: 0, offsetY: ds(8), blurRadius: ds(18), color: 'rgba(28,26,22,.22)' },
    ],
  });

  const labelColor = disabled
    ? isCream
      ? ob.creamDim
      : ob.ink40
    : isCream
      ? ob.ink
      : ob.cream;

  const body = (
    <>
      <Text
        style={{
          fontFamily: obFont.sb600,
          fontSize: fs(18),
          letterSpacing: tracking(-0.01, 18),
          color: labelColor,
        }}>
        {label}
      </Text>
      {!!trailing && <View style={{ flex: 1 }} />}
      {busy && (
        <ActivityIndicator
          size="small"
          color={isCream ? ob.ink : ob.cream}
          style={{ marginLeft: ds(2) }}
        />
      )}
      {withArrow && !busy && (
        <Text style={{ fontFamily: obFont.m500, fontSize: fs(15), color: labelColor }}>→</Text>
      )}
      {!!trailing && (
        <Text
          style={{
            flex: 1,
            textAlign: 'right',
            fontFamily: obFont.r400,
            fontSize: fs(13),
            color: disabled
              ? isCream
                ? ob.creamDim
                : ob.ink40
              : isCream
                ? ob.ink55
                : 'rgba(255,255,255,.65)',
          }}>
          {trailing}
        </Text>
      )}
    </>
  );

  return (
    <Pressable onPress={onPress} disabled={disabled || busy} style={[{ width: '100%' }, style]}>
      {({ pressed }) => {
        const held = pressed && !disabled;
        // Disabled stays an outline rather than a dimmed key: `opacity: .4` on
        // an ink fill renders as a grey slab, and grey is not in this palette.
        // A key with no ledge is also the clearest way to say "not yet".
        if (disabled) {
          return (
            <View
              style={{
                width: '100%',
                height: ds(60),
                borderRadius: ds(18),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: trailing ? 'space-between' : 'center',
                paddingHorizontal: trailing ? ds(22) : 0,
                gap: ds(10),
                borderWidth: 1.5,
                borderColor: isCream ? ob.creamRule : ob.hairline18,
              }}>
              {body}
            </View>
          );
        }
        return (
          <LinearGradient
            colors={isCream ? ['#FFFFFF', ob.cream] : ['#35302A', ob.ink]}
            locations={[0, 0.6]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={face(held)}>
            {body}
          </LinearGradient>
        );
      }}
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
 * The header every white onboarding screen opens with: a back chevron and the
 * title on ONE line, 13pt apart, exactly as the handoff draws it.
 *
 * The chevron only renders when there is somewhere to go: the first screen of
 * the flow, and any screen reached by a `replace`, have no history and get the
 * title alone rather than a control that would do nothing.
 */
export function ObHeader({ title }: { title: string }) {
  const { ds, fs, tracking } = useDesignScale();
  const canGoBack = router.canGoBack();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: ds(13),
        paddingHorizontal: ds(30),
        paddingTop: ds(34),
      }}>
      {canGoBack && (
        <Pressable
          onPress={() => router.back()}
          // Generous, because the glyph is small and sits in open space.
          hitSlop={16}
          accessibilityRole="button"
          accessibilityLabel="Go back"
          style={({ pressed }) => ({ opacity: pressed ? 0.45 : 1 })}>
          <Svg viewBox="0 0 24 24" width={ds(19)} height={ds(19)} fill="none">
            <Path
              d="M15 5l-7 7 7 7"
              stroke={ob.ink80}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </Pressable>
      )}
      <Text
        style={{
          flex: 1,
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

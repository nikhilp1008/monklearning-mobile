import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path, Rect } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

/**
 * The bottom island — export-10a.
 *
 * One white pill holding four labelled items: Home, Textbooks, Doubts, Notes.
 *
 * The centre "Class" pill is gone. It was a fifth control that did not belong
 * to the bar's own job: the other four switch which page you are looking at,
 * while Class pushed a route on top of whichever page you were on. Starting a
 * class is now the charcoal block at the top of Home, which is where the
 * product's front door should be -- and the bar goes back to being four peers
 * with nothing competing for the middle.
 *
 * Labels are back too. With five items and a labelled pill in the centre, four
 * unlabelled glyphs beside it read as decoration; with four items in a row the
 * labels fit at 10pt and the icons stop having to carry a word on their own.
 */

const OFF = '#8A857A';

type IconProps = { color: string; size: number };

/** Solid, and its fill follows the item's colour like every other stroke here
 *  -- so it goes grey with the rest rather than becoming a second active mark
 *  the way a permanently-ink house would. The door is cut in paper. */
function HomeIcon({ color, size }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <Path
        d="M4.75 10.6 12 4.75l7.25 5.85V18.4a1.85 1.85 0 0 1-1.85 1.85H6.6a1.85 1.85 0 0 1-1.85-1.85z"
        fill={color}
        stroke={color}
        strokeWidth={1.6}
      />
      <Path d="M9.75 20.25v-5.1a2.25 2.25 0 0 1 4.5 0v5.1" stroke={colors.paper} strokeWidth={1.6} />
    </Svg>
  );
}

function TextbooksIcon({ color, size }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <Rect x={5} y={4.4} width={12} height={4.6} rx={1.6} stroke={color} strokeWidth={1.6} />
      <Rect x={7} y={9.9} width={12.5} height={4.6} rx={1.6} stroke={color} strokeWidth={1.6} />
      <Rect x={4.4} y={15.4} width={13.4} height={4.6} rx={1.6} stroke={color} strokeWidth={1.6} />
    </Svg>
  );
}

/**
 * A question on a card.
 *
 * This was a camera, which is the same object Home draws for Snap and Solve.
 * The camera is how a doubt gets IN; it is not what the page IS, and using
 * one glyph for both made the tab look like a second shutter button.
 *
 * The card is close in silhouette to Notes two slots along, so the mark
 * inside it carries the difference: Notes has a spine at a quarter width and
 * two short rules, this has one large centred glyph and no spine.
 *
 * The "?" is a scaled Feather question mark with the transform baked into
 * its coordinates rather than applied by a <G>: the stroke inside a scaled
 * group scales with it, so the 1.6 here would not have matched the 1.6 on
 * the card. Centred by construction -- the glyph spans 7.54 to 16.46, the
 * card's interior 4.60 to 19.40, both on 12.00.
 */
function DoubtsIcon({ color, size }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <Rect x={4.2} y={3.8} width={15.6} height={16.4} rx={2.6} stroke={color} strokeWidth={1.6} />
      <Path
        d="M9.89 9.78a2.16 2.16 0 0 1 4.2.72c0 1.44-2.16 2.16-2.16 2.16"
        stroke={color}
        strokeWidth={1.6}
      />
      <Path d="M11.99 15.54h.01" stroke={color} strokeWidth={1.84} />
    </Svg>
  );
}

function NotesIcon({ color, size }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <Rect x={5} y={3.75} width={14} height={16.5} rx={2.2} stroke={color} strokeWidth={1.6} />
      <Path d="M9 3.75v16.5" stroke={color} strokeWidth={1.6} />
      <Path d="M12.2 9h3.6M12.2 12.5h3.6" stroke={color} strokeWidth={1.6} />
    </Svg>
  );
}

const ICONS: Record<string, (p: IconProps) => React.ReactElement> = {
  index: HomeIcon,
  textbooks: TextbooksIcon,
  doubts: DoubtsIcon,
  notes: NotesIcon,
};

/**
 * The switch, inside the bar.
 *
 * A colour cross-fade on its own is not motion -- the icon arrives in a new
 * colour without ever having moved, which is why the swap still read as a cut.
 * So the chosen icon also LIFTS and grows a little, on a spring, and the one
 * it takes over from settles back down.
 *
 * A spring rather than a timing curve because this is a direct response to a
 * finger: it overshoots a touch and settles, which is what makes it feel
 * physical instead of scheduled. Damped enough not to wobble.
 */
const LIFT = 3;       // points the chosen icon rises
const GROW = 0.12;    // and how much it grows
const SPRING = { damping: 13, stiffness: 210, mass: 0.55 } as const;

/** The press itself, so the tap is acknowledged before the spring starts. */
const PRESS_IN = { duration: 90, easing: Easing.out(Easing.quad) } as const;
const PRESS_OUT = { duration: 160, easing: Easing.out(Easing.cubic) } as const;

/**
 * One tab item.
 *
 * The icon is drawn twice, grey and ink, and the pair is cross-faded. That is
 * the cheap way to animate an SVG stroke colour: `stroke` is not a style prop,
 * so reanimated cannot drive it, and re-rendering the icon on every frame would
 * put the work on the JS thread. Two static copies and an opacity do it
 * natively.
 *
 * The label's colour IS a style prop, so it interpolates directly.
 */
function TabItem({
  Icon,
  label,
  focused,
  size,
  styles,
  onPress,
}: {
  Icon: (p: IconProps) => React.ReactElement;
  label: string;
  focused: boolean;
  size: number;
  styles: ReturnType<typeof createStyles>;
  onPress: () => void;
}) {
  const on = useSharedValue(focused ? 1 : 0);
  const held = useSharedValue(0);

  useEffect(() => {
    on.value = withSpring(focused ? 1 : 0, SPRING);
  }, [focused, on]);

  const fadeOn = useAnimatedStyle(() => ({ opacity: on.value }));
  const fadeOff = useAnimatedStyle(() => ({ opacity: 1 - on.value }));
  // The lift and the press share one transform, so a tap on the already-chosen
  // tab still gives way instead of sitting rigid.
  const move = useAnimatedStyle(() => ({
    transform: [
      { translateY: -LIFT * on.value + 1.5 * held.value },
      { scale: 1 + GROW * on.value - 0.08 * held.value },
    ],
  }));
  const labelColor = useAnimatedStyle(() => ({
    color: interpolateColor(on.value, [0, 1], [OFF, colors.ink]),
    // The label follows the icon up by a fraction, so the pair moves as one
    // object rather than the glyph detaching from its name.
    transform: [{ translateY: -1 * on.value }],
  }));

  return (
    <Pressable
      accessibilityRole="tab"
      accessibilityState={{ selected: focused }}
      accessibilityLabel={label}
      style={styles.item}
      onPressIn={() => {
        held.value = withTiming(1, PRESS_IN);
      }}
      onPressOut={() => {
        held.value = withTiming(0, PRESS_OUT);
      }}
      onPress={onPress}>
      <Animated.View style={[{ width: size, height: size }, move]}>
        <Animated.View style={[StyleSheet.absoluteFill, fadeOff]}>
          <Icon color={OFF} size={size} />
        </Animated.View>
        <Animated.View style={[StyleSheet.absoluteFill, fadeOn]}>
          <Icon color={colors.ink} size={size} />
        </Animated.View>
      </Animated.View>
      <Animated.Text style={[styles.label, focused && styles.labelOn, labelColor]}>
        {label}
      </Animated.Text>
    </Pressable>
  );
}

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { scale, verticalScale } = useScale();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  // ICONS is the whitelist. Lessons and Progress are still routable screens in
  // this group (`href: null`), and having no icon here is what keeps them out
  // of the bar -- one list to edit rather than two that can disagree.
  const routes = state.routes.filter((route) => ICONS[route.name]);

  return (
    <>
      {/* Content scrolls under the island rather than stopping short of it, so
          the page needs to fade out behind it instead of ending in a hard cut. */}
      <LinearGradient
        pointerEvents="none"
        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,.96)']}
        locations={[0, 0.55]}
        style={[styles.fade, { height: verticalScale(120) }]}
      />
      <View
        style={[styles.bar, { bottom: Math.max(verticalScale(26), insets.bottom) }]}
        accessibilityRole="tablist">
        {routes.map((route) => {
          const { options } = descriptors[route.key];
          const focused = state.routes[state.index].key === route.key;
          const label = options.title ?? route.name;

          return (
            <TabItem
              key={route.key}
              Icon={ICONS[route.name]}
              label={label}
              focused={focused}
              size={scale(22)}
              styles={styles}
              onPress={() => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!focused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              }}
            />
          );
        })}
      </View>
    </>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    fade: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
    bar: {
      position: 'absolute',
      left: scale(16),
      right: scale(16),
      height: verticalScale(64),
      flexDirection: 'row',
      alignItems: 'stretch',
      gap: scale(2),
      paddingHorizontal: scale(8),
      borderRadius: 99,
      backgroundColor: '#fff',
      // `0 0 0 1px` in the handoff: a ring, not a border, so it does not take
      // a point off the inside of the pill.
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.06)',
      shadowColor: colors.ink,
      shadowOpacity: 0.14,
      shadowOffset: { width: 0, height: verticalScale(8) },
      shadowRadius: scale(22),
      elevation: 12,
    },
    item: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: verticalScale(4),
    },
    label: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(10),
      lineHeight: scale(12),
    },
    labelOn: {
      fontFamily: 'Onest_700Bold',
    },
  });
}

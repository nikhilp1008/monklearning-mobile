import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

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

function DoubtsIcon({ color, size }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <Path
        d="M8.3 6.3 9.5 4.5h5l1.2 1.8h1.8A2.5 2.5 0 0 1 20 8.8v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.8v-8a2.5 2.5 0 0 1 2.5-2.5z"
        stroke={color}
        strokeWidth={1.6}
      />
      <Circle cx={12} cy={12.8} r={3.3} stroke={color} strokeWidth={1.6} />
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
          const Icon = ICONS[route.name];
          const color = focused ? colors.ink : OFF;
          const label = options.title ?? route.name;

          return (
            <Pressable
              key={route.key}
              accessibilityRole="tab"
              accessibilityState={{ selected: focused }}
              accessibilityLabel={label}
              style={styles.item}
              onPress={() => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!focused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              }}>
              <Icon color={color} size={scale(22)} />
              <Text style={[styles.label, { color }, focused && styles.labelOn]}>{label}</Text>
            </Pressable>
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

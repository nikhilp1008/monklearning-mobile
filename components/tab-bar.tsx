import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

type TabIconProps = { active: boolean; size: number };

// Filled for active, outline for inactive — a single silhouette per icon,
// rendered two ways rather than just recolored, per the redesign's icon spec.
/**
 * The bar, redrawn to export-8a.
 *
 * One rule across all four: 24px artwork on a 1.6 stroke, outlined in a muted
 * grey when inactive and filled solid ink when active. No marigold dot any
 * more -- the fill IS the active state, and a second signal beside it was
 * doing the same job twice.
 */
const OFF = '#8A857A';

function HomeIcon({ active, size }: TabIconProps) {
  const c = active ? colors.ink : OFF;
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <Path
        d="M4.75 10.6 12 4.75l7.25 5.85V18.4a1.85 1.85 0 0 1-1.85 1.85H6.6a1.85 1.85 0 0 1-1.85-1.85z"
        fill={active ? colors.ink : 'none'}
        stroke={c}
        strokeWidth={1.6}
      />
      <Path
        d="M9.75 20.25v-5.1a2.25 2.25 0 0 1 4.5 0v5.1"
        stroke={active ? colors.paper : c}
        strokeWidth={1.6}
      />
    </Svg>
  );
}

function TextbooksIcon({ active, size }: TabIconProps) {
  const c = active ? colors.ink : OFF;
  const fill = active ? colors.ink : 'none';
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <Rect x={5} y={4.4} width={12} height={4.6} rx={1.6} fill={fill} stroke={c} strokeWidth={1.6} />
      <Rect x={7} y={9.9} width={12.5} height={4.6} rx={1.6} fill={fill} stroke={c} strokeWidth={1.6} />
      <Rect x={4.4} y={15.4} width={13.4} height={4.6} rx={1.6} fill={fill} stroke={c} strokeWidth={1.6} />
    </Svg>
  );
}

function DoubtsIcon({ active, size }: TabIconProps) {
  const c = active ? colors.ink : OFF;
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <Path
        d="M8.3 6.3 9.5 4.5h5l1.2 1.8h1.8A2.5 2.5 0 0 1 20 8.8v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.8v-8a2.5 2.5 0 0 1 2.5-2.5z"
        fill={active ? colors.ink : 'none'}
        stroke={c}
        strokeWidth={1.6}
      />
      <Circle
        cx={12}
        cy={12.8}
        r={3.3}
        fill={active ? colors.ink : 'none'}
        stroke={active ? colors.paper : c}
        strokeWidth={1.6}
      />
    </Svg>
  );
}

function NotesIcon({ active, size }: TabIconProps) {
  const c = active ? colors.ink : OFF;
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <Rect
        x={5}
        y={3.75}
        width={14}
        height={16.5}
        rx={2.2}
        fill={active ? colors.ink : 'none'}
        stroke={c}
        strokeWidth={1.6}
      />
      <Path d="M9 3.75v16.5" stroke={active ? colors.paper : c} strokeWidth={1.6} />
      <Path d="M12.2 9h3.6M12.2 12.5h3.6" stroke={active ? colors.paper : c} strokeWidth={1.6} />
    </Svg>
  );
}

/** The board on its stand — the Live pill's glyph. */
function LiveIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <Rect x={3.75} y={4.75} width={16.5} height={11} rx={2} stroke={colors.paper} strokeWidth={1.6} />
      <Path d="M7.5 9h6M7.5 12h9" stroke={colors.paper} strokeWidth={1.6} />
      <Path d="M12 15.75v1.5M8.5 20.25l3.5-3 3.5 3" stroke={colors.paper} strokeWidth={1.6} />
    </Svg>
  );
}

const TAB_META: Record<string, { label: string; Icon: (props: TabIconProps) => React.ReactElement }> = {
  index: { label: 'Home', Icon: HomeIcon },
  textbooks: { label: 'Textbooks', Icon: TextbooksIcon },
  doubts: { label: 'Doubts', Icon: DoubtsIcon },
  notes: { label: 'Notes', Icon: NotesIcon },
};

export function TabBar({ state, navigation }: BottomTabBarProps) {
  const { scale, verticalScale } = useScale();
  const insets = useSafeAreaInsets();
  const styles = useMemo(
    () => createStyles(scale, verticalScale, insets.bottom),
    [scale, verticalScale, insets.bottom]
  );

  /**
   * The four tabs, in the order the navigator holds them. Live is not one of
   * them -- it is an action, so it is spliced into the middle rather than
   * being a fifth route.
   */
  const tabs = state.routes
    .map((route, index) => ({ route, index }))
    .filter(({ route }) => TAB_META[route.name]);

  const renderTab = ({ route, index }: (typeof tabs)[number]) => {
    const { Icon, label } = TAB_META[route.name];
    const isFocused = state.index === index;
    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });
      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };
    return (
      <PressableScale
        key={route.key}
        onPress={onPress}
        accessibilityRole="tab"
        // No labels any more, so the name has to live here or the bar is
        // four unnamed circles to a screen reader.
        accessibilityLabel={label}
        style={styles.circle}>
        <Icon active={isFocused} size={scale(22)} />
      </PressableScale>
    );
  };

  return (
    <>
      <LinearGradient
        pointerEvents="none"
        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.9)', 'rgba(255,255,255,1)']}
        // Fully opaque by 62%, which is where the buttons begin: at 96% a
        // line of body text was still legible through the gaps between them.
        locations={[0, 0.42, 0.62]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.fade}
      />
      <View style={styles.bar} pointerEvents="box-none">
        {tabs.slice(0, 2).map(renderTab)}
        <PressableScale
          accessibilityRole="button"
          accessibilityLabel="Start a live class"
          onPress={() => router.push('/drona')}
          style={styles.live}>
          <LiveIcon size={scale(20)} />
          <Text style={styles.liveText}>Live</Text>
        </PressableScale>
        {tabs.slice(2).map(renderTab)}
      </View>
    </>
  );
}

function createStyles(
  scale: (size: number) => number,
  verticalScale: (size: number) => number,
  bottomInset: number
) {
  return StyleSheet.create({
    /**
     * A 140pt wash, so a list dissolves under the bar instead of being cut off
     * by it. There is no bar background any more -- the buttons float, and the
     * gaps between them are see-through, so the wash has to reach solid white
     * by the time it is behind them. The handoff stops at 96% on an empty
     * screen; over a real list that left text legible between the circles.
     */
    fade: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: verticalScale(140),
    },
    /**
     * Floating, per export-14d: 20pt from each side, 26pt off the bottom, and
     * nothing behind it. `box-none` on the view so the gaps between buttons
     * fall through to whatever is scrolling underneath.
     */
    bar: {
      position: 'absolute',
      left: scale(20),
      right: scale(20),
      // The handoff measures 26 from the frame edge, but its frame has no home
      // indicator. Sitting the buttons that low put them across the swipe-up
      // strip, so the inset is the floor.
      bottom: Math.max(verticalScale(26), bottomInset),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    circle: {
      width: scale(56),
      height: scale(56),
      borderRadius: scale(28),
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      // The handoff's second shadow is a 1px ring; React Native takes one
      // shadow, so the ring is a border.
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.06)',
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(8) },
      shadowOpacity: 0.14,
      shadowRadius: scale(22),
      elevation: 6,
    },
    live: {
      height: scale(56),
      paddingLeft: scale(16),
      paddingRight: scale(20),
      borderRadius: scale(99),
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      backgroundColor: '#2A2621',
      // The handoff's inset amber rim.
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.8)',
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(8) },
      shadowOpacity: 0.18,
      shadowRadius: scale(22),
      elevation: 8,
    },
    liveText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(15),
      color: colors.paper,
    },
  });
}

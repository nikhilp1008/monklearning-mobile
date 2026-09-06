import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
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

  return (
    <>
      <LinearGradient
        pointerEvents="none"
        colors={[colors.paper, 'rgba(255,253,248,0)']}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        style={styles.fade}
      />
      <View style={styles.container}>
        <View style={styles.row}>
          {state.routes.map((route, index) => {
            const meta = TAB_META[route.name];
            if (!meta) return null;
            const { Icon, label } = meta;
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
                accessibilityLabel={label}
                style={[styles.item, !isFocused && styles.itemInactive]}>
                <Icon active={isFocused} size={scale(24)} />
                <Text style={[styles.label, isFocused && styles.labelActive]}>{label}</Text>
              </PressableScale>
            );
          })}
        </View>
      </View>
    </>
  );
}

function createStyles(
  scale: (size: number) => number,
  verticalScale: (size: number) => number,
  bottomInset: number
) {
  const barHeight = verticalScale(64) + bottomInset;

  return StyleSheet.create({
    fade: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: barHeight,
      height: verticalScale(32),
    },
    container: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#FFFFFF',
      // A lift instead of a rule: export-8a floats the bar over the list on a
      // soft upward shadow rather than cutting it off with a hairline.
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(-10) },
      shadowOpacity: 0.07,
      shadowRadius: scale(30),
      elevation: 12,
      paddingHorizontal: scale(12),
      // Split out of the row's own height rather than added on top, so the
      // total bar height (and the `fade` gradient pinned above it) stays
      // exactly `barHeight` — this just shifts the icon row down within
      // that same footprint, off the very top edge, so the safe-area gap
      // below it (bare on notch-less Android, ~34pt on iPhone) doesn't read
      // as an orphaned dead zone now that the fake home-indicator bar that
      // used to sit inside it is gone.
      paddingTop: verticalScale(6),
      paddingBottom: bottomInset,
    },
    row: {
      flexDirection: 'row',
      height: verticalScale(64),
      alignItems: 'center',
    },
    item: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(4),
    },
    // No dimming: the icon's fill carries the active state on its own, so
    // fading the inactive tabs would say the same thing twice.
    itemInactive: {},
    label: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(10.5),
      letterSpacing: scale(0.1),
      color: '#8A857A',
    },
    labelActive: {
      fontFamily: 'Onest_700Bold',
      color: colors.ink,
    },
  });
}

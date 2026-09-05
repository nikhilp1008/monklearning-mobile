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
function HomeIcon({ active, size }: TabIconProps) {
  const housePath = 'M4.5 10.4 12 3.8l7.5 6.6V18a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2z';
  if (active) {
    return (
      <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
        <Path d={housePath} fill={colors.ink} />
        <Circle cx={12} cy={14.4} r={1.8} fill={colors.marigold} />
      </Svg>
    );
  }
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d={housePath} stroke={colors.ink} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
      <Circle cx={12} cy={14.4} r={1.7} fill={colors.faint} />
    </Svg>
  );
}

function TextbooksIcon({ active, size }: TabIconProps) {
  const bookPath =
    'M12 6.4C10.1 4.7 7.3 4.1 4 4.5v13c3.3-.4 6.1.2 8 1.9 1.9-1.7 4.7-2.3 8-1.9v-13c-3.3-.4-6.1.2-8 1.9z';
  if (active) {
    return (
      <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
        <Path d={bookPath} fill={colors.ink} />
        <Circle cx={12} cy={12.9} r={1.8} fill={colors.marigold} />
      </Svg>
    );
  }
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d={bookPath} stroke={colors.ink} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M12 6.4v13" stroke={colors.ink} strokeWidth={1.75} strokeLinecap="round" />
      <Circle cx={12} cy={12.9} r={1.7} fill={colors.faint} />
    </Svg>
  );
}

function ProgressIcon({ active, size }: TabIconProps) {
  if (active) {
    return (
      <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
        <Path d="M4.5 19h15" stroke={colors.ink} strokeWidth={1.75} strokeLinecap="round" />
        <Rect x={6.9} y={14.5} width={2.2} height={4.5} rx={1.1} fill={colors.ink} />
        <Rect x={10.9} y={11} width={2.2} height={8} rx={1.1} fill={colors.ink} />
        <Rect x={14.9} y={7.5} width={2.2} height={11.5} rx={1.1} fill={colors.ink} />
        <Circle cx={16} cy={4.6} r={1.8} fill={colors.marigold} />
      </Svg>
    );
  }
  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={colors.ink}
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M4.5 19h15" />
      <Path d="M8 19v-4.5M12 19v-8M16 19V7.5" />
      <Circle cx={16} cy={4.6} r={1.7} fill={colors.faint} stroke="none" />
    </Svg>
  );
}

function LibraryIcon({ active, size }: TabIconProps) {
  if (active) {
    return (
      <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
        <Rect x={4.75} y={5} width={3.5} height={14} rx={1.2} fill={colors.ink} />
        <Rect x={10.25} y={5} width={3.5} height={14} rx={1.2} fill={colors.ink} />
        <Rect x={15.6} y={5.3} width={3.5} height={13.6} rx={1.2} fill={colors.ink} transform="rotate(12 17.35 12.1)" />
        <Circle cx={12} cy={12} r={1.8} fill={colors.marigold} />
      </Svg>
    );
  }
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Rect x={4.75} y={5} width={3.5} height={14} rx={1.2} stroke={colors.ink} strokeWidth={1.75} />
      <Rect x={10.25} y={5} width={3.5} height={14} rx={1.2} stroke={colors.ink} strokeWidth={1.75} />
      <Rect
        x={15.6}
        y={5.3}
        width={3.5}
        height={13.6}
        rx={1.2}
        stroke={colors.ink}
        strokeWidth={1.75}
        transform="rotate(12 17.35 12.1)"
      />
      <Circle cx={12} cy={12} r={1.7} fill={colors.faint} />
    </Svg>
  );
}

const TAB_META: Record<string, { label: string; Icon: (props: TabIconProps) => React.ReactElement }> = {
  index: { label: 'Home', Icon: HomeIcon },
  textbooks: { label: 'Textbooks', Icon: TextbooksIcon },
  progress: { label: 'Progress', Icon: ProgressIcon },
  library: { label: 'Library', Icon: LibraryIcon },
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
                <Icon active={isFocused} size={scale(23)} />
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
  const barHeight = verticalScale(56) + bottomInset;

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
      borderTopWidth: 1.5,
      borderTopColor: 'rgba(28,26,22,.16)',
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
      height: verticalScale(50),
      alignItems: 'center',
    },
    item: {
      flex: 1,
      alignItems: 'center',
      gap: scale(3),
    },
    itemInactive: {
      opacity: 0.5,
    },
    label: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      color: colors.faint,
    },
    labelActive: {
      fontFamily: 'AnekLatin_800ExtraBold',
      color: colors.ink,
    },
  });
}

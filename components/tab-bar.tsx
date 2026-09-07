import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

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

/**
 * Doubts — a question mark inside a snapped frame.
 *
 * A doubt is always a photographed question, so the frame is the corner marks
 * of a viewfinder rather than a speech bubble, which would have read as chat.
 * The marigold dot sits where every other icon in this bar carries it.
 */
function DoubtsIcon({ active, size }: TabIconProps) {
  const frame =
    'M4.2 8.6V6.4a2.2 2.2 0 0 1 2.2-2.2h2.2M15.4 4.2h2.2a2.2 2.2 0 0 1 2.2 2.2v2.2M19.8 15.4v2.2a2.2 2.2 0 0 1-2.2 2.2h-2.2M8.6 19.8H6.4a2.2 2.2 0 0 1-2.2-2.2v-2.2';
  const mark = 'M9.9 9.7a2.2 2.2 0 1 1 2.6 2.5v1.2';
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d={frame} stroke={colors.ink} strokeWidth={active ? 2.4 : 1.75} strokeLinecap="round" />
      <Path
        d={mark}
        stroke={colors.ink}
        strokeWidth={active ? 2.2 : 1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={12.4} cy={16.4} r={active ? 1.6 : 1.4} fill={active ? colors.marigold : colors.faint} />
    </Svg>
  );
}

/**
 * Notes — a ruled page with its corner turned.
 *
 * Deliberately not a book: Textbooks already owns that shape, one tab away.
 * The rules are what separate it from a plain document, and they echo the
 * ruled paper a note is actually rendered on.
 */
function NotesIcon({ active, size }: TabIconProps) {
  const page = 'M5.6 3.4h7.6l5.2 5.2v12a2 2 0 0 1-2 2H5.6a2 2 0 0 1-2-2V5.4a2 2 0 0 1 2-2z';
  if (active) {
    return (
      <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
        <Path d={page} fill={colors.ink} />
        <Path
          d="M7.4 12.6h7M7.4 16h4.4"
          stroke={colors.paper}
          strokeWidth={1.6}
          strokeLinecap="round"
        />
        <Circle cx={16.4} cy={17.4} r={1.8} fill={colors.marigold} />
      </Svg>
    );
  }
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d={page} stroke={colors.ink} strokeWidth={1.75} strokeLinejoin="round" />
      <Path
        d="M13.2 3.4v5.2h5.2"
        stroke={colors.ink}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M7.4 12.6h7M7.4 16h4.4" stroke={colors.ink} strokeWidth={1.6} strokeLinecap="round" />
      <Circle cx={16.4} cy={17.4} r={1.4} fill={colors.faint} />
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
      fontFamily: 'Onest_700Bold',
      fontSize: scale(10),
      color: colors.faint,
    },
    labelActive: {
      fontFamily: 'Onest_800ExtraBold',
      color: colors.ink,
    },
  });
}

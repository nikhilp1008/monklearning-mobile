import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

// Same wash formula as the onboarding flow's SelectRow (constants/onboarding.ts's
// `ob.wash`/`ob.washLocations`) — this is that pattern's main-app equivalent,
// built on the app's own color/scale tokens instead of onboarding's separate
// ds()/ob system, since a screen like topic-sheet.tsx isn't part of onboarding.
const WASH_COLORS = [
  'rgba(238,163,31,.42)',
  'rgba(238,163,31,.2)',
  'rgba(238,163,31,.05)',
] as const;
const WASH_LOCATIONS = [0, 0.48, 1] as const;
const WIPE_DURATION = 260;
const WIPE_EASING = Easing.out(Easing.quad);

type WashSelectRowProps = {
  selected: boolean;
  /** Bumped by the parent on every tap, so the wipe replays even when the
   *  already-selected row is tapped again (selected alone wouldn't change). */
  playToken: number;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  selectedStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
};

/**
 * A row that reveals an animated amber gradient wash on selection instead of
 * a flat highlight color — the wash itself is the selection signal, no
 * checkmark badge needed alongside it.
 */
export function WashSelectRow({
  selected,
  playToken,
  onPress,
  style,
  selectedStyle,
  children,
}: WashSelectRowProps) {
  // A width-based wipe (animating a measured pixel width, or a "NN%" string)
  // depends on Reanimated's UI-thread width mutation propagating into
  // LinearGradient's own layout every frame — on real devices this has shown
  // up as a hard-edged jump partway through instead of a smooth sweep, twice,
  // across two different fix attempts. Opacity has no layout dependency at
  // all, so it can't produce that class of artifact: the gradient is always
  // full-size, and only its visibility animates.
  // The playToken dep (unused in the body) is what replays the fade on a
  // re-tap of an already-selected row: it forces this derivation to
  // re-evaluate even though `selected` alone wouldn't have changed.
  const progress = useDerivedValue(() => {
    return selected ? withTiming(1, { duration: WIPE_DURATION, easing: WIPE_EASING }) : withTiming(0, { duration: 150 });
  }, [selected, playToken]);

  const washStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
  }));

  return (
    <Pressable onPress={onPress} style={[styles.base, style, selected && selectedStyle]}>
      <Animated.View style={[styles.washFill, washStyle]} pointerEvents="none">
        <LinearGradient
          colors={[...WASH_COLORS]}
          locations={[...WASH_LOCATIONS]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.washFill}
        />
      </Animated.View>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    position: 'relative',
    overflow: 'hidden',
  },
  washFill: {
    ...StyleSheet.absoluteFillObject,
  },
});

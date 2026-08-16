import { useRef } from 'react';
import {
  Animated,
  Pressable,
  type GestureResponderEvent,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const PRESS_DURATION = 120;

type PressableScaleProps = Omit<PressableProps, 'style'> & {
  style?: StyleProp<ViewStyle>;
};

// Every card/tab/avatar/pill press feedback in the redesign: scale to 0.98 +
// opacity to 0.9 over 120ms, both ways. A single Animated.Value drives both
// so they stay in lockstep, and animating the Pressable itself (rather than
// wrapping it in a separate Animated.View) keeps layout-affecting style
// (flex, width, padding) and the animated visual style on one element.
export function PressableScale({ style, onPressIn, onPressOut, ...rest }: PressableScaleProps) {
  const anim = useRef(new Animated.Value(1)).current;

  const animateTo = (toValue: number) => {
    Animated.timing(anim, {
      toValue,
      duration: PRESS_DURATION,
      useNativeDriver: true,
    }).start();
  };

  const handlePressIn = (e: GestureResponderEvent) => {
    animateTo(0.98);
    onPressIn?.(e);
  };

  const handlePressOut = (e: GestureResponderEvent) => {
    animateTo(1);
    onPressOut?.(e);
  };

  const opacity = anim.interpolate({ inputRange: [0.98, 1], outputRange: [0.9, 1] });

  return (
    <AnimatedPressable
      style={[style, { transform: [{ scale: anim }], opacity }]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    />
  );
}

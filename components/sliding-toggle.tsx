import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  LayoutChangeEvent,
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

type SlidingToggleProps<T extends string> = {
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
  trackStyle: StyleProp<ViewStyle>;
  thumbStyle: StyleProp<ViewStyle>;
  pillStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  textActiveStyle: StyleProp<TextStyle>;
  /** Applied to the row that holds the pills — this is where gap belongs. */
  rowStyle?: StyleProp<ViewStyle>;
  /**
   * 'fill' is the pill toggle: the thumb is a capsule behind the label.
   * 'bottom' is the tab underline: the thumb hugs the baseline and takes its
   * height from thumbStyle.
   */
  thumbAnchor?: 'fill' | 'bottom';
};

type PillLayout = { x: number; width: number };

// Segments size to their own text content (not an even split), so each
// pill's real on-screen box is measured via onLayout and the thumb
// slides to match it — this stays correct even if two option labels
// aren't the same width. Only translateX is animated (native driver);
// width snaps immediately, because RN's Animated can't mix a
// native-driven and a JS-driven property on the same Animated.View —
// doing so throws "Attempting to run JS driven animation on animated
// node that has been moved to 'native'". Widths between typical option
// labels differ by at most a couple pixels, so the snap is invisible.
export function SlidingToggle<T extends string>({
  options,
  value,
  onChange,
  trackStyle,
  thumbStyle,
  pillStyle,
  textStyle,
  textActiveStyle,
  rowStyle,
  thumbAnchor = 'fill',
}: SlidingToggleProps<T>) {
  const layouts = useRef(new Map<T, PillLayout>()).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const [thumbWidth, setThumbWidth] = useState(0);
  const [ready, setReady] = useState(false);

  const handlePillLayout = (option: T) => (event: LayoutChangeEvent) => {
    const { x, width } = event.nativeEvent.layout;
    layouts.set(option, { x, width });
    if (option === value && !ready) {
      translateX.setValue(x);
      setThumbWidth(width);
      setReady(true);
    }
  };

  useEffect(() => {
    if (!ready) return;
    const layout = layouts.get(value);
    if (!layout) return;
    setThumbWidth(layout.width);
    Animated.spring(translateX, {
      toValue: layout.x,
      useNativeDriver: true,
      damping: 20,
      stiffness: 260,
      mass: 0.8,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, ready]);

  return (
    <View style={trackStyle}>
      <View style={[{ flexDirection: 'row', position: 'relative' }, rowStyle]}>
        {ready && (
          <Animated.View
            style={[
              thumbStyle,
              {
                position: 'absolute',
                left: 0,
                bottom: 0,
                ...(thumbAnchor === 'fill' ? { top: 0 } : null),
                width: thumbWidth,
                transform: [{ translateX }],
              },
            ]}
          />
        )}
        {options.map((option) => (
          <Pressable
            key={option}
            style={pillStyle}
            onLayout={handlePillLayout(option)}
            onPress={() => onChange(option)}>
            <Text style={[textStyle, option === value && textActiveStyle]}>{option}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

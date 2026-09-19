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
  /**
   * THE THUMB ANSWERS THE FINGER; THE PAGE FOLLOWS.
   *
   * The thumb used to wait for `value` — which meant it waited for the whole
   * screen to re-render for the new choice before it moved at all. On both
   * screens that use this, the choice rebuilds a list below it, and on a phone
   * that is a visible beat between the tap and the slide. So the toggle keeps
   * its own copy of the choice, moves on it at once, and hands the change to
   * the page a frame later, when the slide is already running on the native
   * side and a busy JavaScript thread can no longer hold it up.
   */
  const [shown, setShown] = useState(value);
  useEffect(() => {
    // The page can still set the value itself (Exam scope opens on the
    // student's own exam), and that must move the thumb too.
    setShown(value);
  }, [value]);

  const choose = (option: T) => {
    if (option === shown) return;
    setShown(option);
    requestAnimationFrame(() => onChange(option));
  };

  const handlePillLayout = (option: T) => (event: LayoutChangeEvent) => {
    const { x, width } = event.nativeEvent.layout;
    const previous = layouts.get(option);
    layouts.set(option, { x, width });
    if (option !== shown) return;
    // Re-seat the thumb on ANY layout change of the selected pill, not just
    // the first. A pill that sizes to its text measures once and never moves,
    // but a flex pill is measured before flex resolves and again after -- and
    // the old code kept the first number, leaving the thumb the wrong width
    // and parked left of the label it was supposed to sit behind.
    const moved = !previous || previous.x !== x || previous.width !== width;
    if (!ready || moved) {
      translateX.setValue(x);
      setThumbWidth(width);
      if (!ready) setReady(true);
    }
  };

  useEffect(() => {
    if (!ready) return;
    const layout = layouts.get(shown);
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
  }, [shown, ready]);

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
            onPress={() => choose(option)}>
            <Text style={[textStyle, option === shown && textActiveStyle]}>{option}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

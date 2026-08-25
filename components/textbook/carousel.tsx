import { useRef } from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '@/constants/brand';
import { CARD_GAP, CARD_W, kicker } from '@/components/textbook/theme';

/**
 * The swipeable card rail used by solved examples, MCQs and practice.
 *
 * A snapping `ScrollView` rather than a hand-rolled pan gesture: the design
 * asks for drag-following-finger, a threshold that advances one card, a spring
 * back otherwise and rubber-banding at the ends, which is exactly what
 * `snapToInterval` plus `decelerationRate="fast"` already gives natively on
 * both platforms.
 *
 * The card's own presence is driven by the **scroll offset**, not by the
 * settled page index. It used to key off `onMomentumScrollEnd`, which fires
 * only once the scroll has fully stopped, so the next card sat dimmed through
 * the whole drag and then faded up late, well after the finger had gone. Now
 * every card interpolates against the live offset, which puts the change under
 * the finger where it belongs. Native driver, so it does not ride the JS
 * thread.
 */
export function Carousel({
  count,
  page,
  onPage,
  scale,
  children,
}: {
  count: number;
  page: number;
  onPage: (index: number) => void;
  scale: (n: number) => number;
  /** Called with (offsetX, step) so each card can place itself. */
  children: (offset: Animated.Value, step: number) => React.ReactNode;
}) {
  const step = scale(CARD_W) + scale(CARD_GAP);
  const offset = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { x: offset } } }], {
    useNativeDriver: true,
  });

  // Still tracked, but only for the dots and the swipe hint, which are about
  // where the student landed rather than where their finger is.
  const onEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const next = Math.round(e.nativeEvent.contentOffset.x / step);
    if (next !== page) onPage(next);
  };

  const styles = makeStyles(scale);

  return (
    <View>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={step}
        decelerationRate="fast"
        disableIntervalMomentum
        onScroll={onScroll}
        scrollEventThrottle={16}
        onMomentumScrollEnd={onEnd}
        contentContainerStyle={styles.track}>
        {children(offset, step)}
      </Animated.ScrollView>

      <View style={styles.dots}>
        {Array.from({ length: count }, (_, i) => (
          <View key={i} style={[styles.dot, i === page && styles.dotActive]} />
        ))}
        {count > 1 && page === 0 && <Text style={[kicker(scale, 9.5), styles.hint]}>← Swipe</Text>}
      </View>
    </View>
  );
}

/** One card, placed against the live scroll offset. */
export function CarouselCard({
  index,
  offset,
  step,
  scale,
  children,
}: {
  index: number;
  offset: Animated.Value;
  step: number;
  scale: (n: number) => number;
  children: React.ReactNode;
}) {
  const inputRange = [(index - 1) * step, index * step, (index + 1) * step];
  const opacity = offset.interpolate({
    inputRange,
    outputRange: [0.55, 1, 0.55],
    extrapolate: 'clamp',
  });
  const cardScale = offset.interpolate({
    inputRange,
    outputRange: [0.98, 1, 0.98],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View
      style={{ width: scale(CARD_W), opacity, transform: [{ scale: cardScale }] }}>
      {children}
    </Animated.View>
  );
}

function makeStyles(scale: (n: number) => number) {
  return StyleSheet.create({
    track: {
      gap: scale(CARD_GAP),
      // Lets the last card clear the right gutter the reader adds.
      paddingRight: scale(24),
    },
    dots: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(6),
      paddingTop: scale(12),
    },
    dot: {
      width: scale(6),
      height: scale(6),
      borderRadius: scale(99),
      backgroundColor: 'rgba(28,26,22,.18)',
    },
    dotActive: { backgroundColor: colors.ink },
    hint: { color: colors.quiet, marginLeft: scale(8) },
  });
}

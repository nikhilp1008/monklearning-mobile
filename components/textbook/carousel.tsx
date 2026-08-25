import { useRef } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { colors } from '@/constants/brand';
import { CARD_GAP, CARD_W, kicker } from '@/components/textbook/theme';

/**
 * The swipeable card rail used by solved examples, MCQs and practice.
 *
 * A snapping `ScrollView` rather than a hand-rolled pan gesture. The design
 * asks for drag-following-finger, a threshold past which it advances one card,
 * a spring back otherwise, and rubber-band resistance at the ends. That is the
 * exact behaviour `snapToInterval` plus `decelerationRate="fast"` already
 * gives, natively, on both platforms, including the overscroll physics that
 * are tedious and easy to get subtly wrong by hand.
 *
 * Cards are laid out edge to edge and the rail is allowed to bleed into the
 * screen's right gutter, so the next card peeks. That peek is what tells a
 * student there is more without needing the hint text.
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
  children: React.ReactNode;
}) {
  const step = scale(CARD_W) + scale(CARD_GAP);
  const ref = useRef<ScrollView>(null);
  const styles = makeStyles(scale);

  const onEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const next = Math.round(e.nativeEvent.contentOffset.x / step);
    if (next !== page) onPage(next);
  };

  return (
    <View>
      <ScrollView
        ref={ref}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={step}
        decelerationRate="fast"
        disableIntervalMomentum
        onMomentumScrollEnd={onEnd}
        contentContainerStyle={styles.track}>
        {children}
      </ScrollView>

      <View style={styles.dots}>
        {Array.from({ length: count }, (_, i) => (
          <Dot key={i} active={i === page} scale={scale} />
        ))}
        {count > 1 && page === 0 && <Text style={[kicker(scale, 9.5), styles.hint]}>← Swipe</Text>}
      </View>
    </View>
  );
}

/** A card's own presence in the rail: the current one is full, its neighbours
 *  sit back. Opacity and scale only, never layout. */
export function CarouselCard({
  active,
  scale,
  children,
}: {
  active: boolean;
  scale: (n: number) => number;
  children: React.ReactNode;
}) {
  const style = useAnimatedStyle(() => ({
    opacity: withTiming(active ? 1 : 0.55, { duration: 300 }),
    transform: [{ scale: withTiming(active ? 1 : 0.98, { duration: 300 }) }],
  }));
  return <Animated.View style={[{ width: scale(CARD_W) }, style]}>{children}</Animated.View>;
}

function Dot({ active, scale }: { active: boolean; scale: (n: number) => number }) {
  const style = useAnimatedStyle(() => ({
    backgroundColor: withTiming(active ? colors.ink : 'rgba(28,26,22,.18)', { duration: 200 }),
  }));
  return (
    <Animated.View
      style={[{ width: scale(6), height: scale(6), borderRadius: scale(99) }, style]}
    />
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
    hint: {
      color: colors.quiet,
      marginLeft: scale(8),
    },
  });
}

import { useRef } from 'react';
import { Animated, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, View } from 'react-native';

import { colors } from '@/constants/brand';
import { CARD_GAP, CARD_W } from '@/components/textbook/theme';

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
  const offset = useRef(new Animated.Value(page * step)).current;
  // The page the student left this rail on, restored. The reader already keeps
  // it per block so it survives a topic switch; without seeding the scroller
  // the number was stored and never used, and coming back to a topic dropped
  // you on card one of a rail you were halfway through.
  const initialOffset = useRef({ x: page * step, y: 0 }).current;

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
        contentOffset={initialOffset}
        onMomentumScrollEnd={onEnd}
        contentContainerStyle={styles.track}>
        {children(offset, step)}
      </Animated.ScrollView>

      {/* Dots only. There was a "← SWIPE" label beside them, from the design;
          a row of dots with one lit is already the most recognised affordance
          on a phone, and spelling it out was the only instruction on a page
          that otherwise never instructs. */}
      <View style={styles.dots}>
        {Array.from({ length: count }, (_, i) => (
          <Dot key={i} index={i} offset={offset} step={step} scale={scale} />
        ))}
      </View>
    </View>
  );
}

/**
 * One dot, lit against the live scroll offset like the cards are.
 *
 * Opacity and scale rather than a colour change: a colour cannot be
 * interpolated on the native driver, and every dot is the same ink already, so
 * fading between .18 and 1 gets there with no bridge traffic. Dots that
 * animate with the drag rather than snapping after it are the difference
 * between the row feeling attached to the finger and feeling like a readout.
 */
function Dot({
  index,
  offset,
  step,
  scale,
}: {
  index: number;
  offset: Animated.Value;
  step: number;
  scale: (n: number) => number;
}) {
  const inputRange = [(index - 1) * step, index * step, (index + 1) * step];
  const opacity = offset.interpolate({
    inputRange,
    outputRange: [0.18, 1, 0.18],
    extrapolate: 'clamp',
  });
  const dotScale = offset.interpolate({
    inputRange,
    outputRange: [1, 1.25, 1],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View
      style={[
        {
          width: scale(6),
          height: scale(6),
          borderRadius: scale(99),
          backgroundColor: colors.ink,
        },
        { opacity, transform: [{ scale: dotScale }] },
      ]}
    />
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
    // Dots size themselves; see `Dot`.
  });
}

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  LayoutAnimation,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

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
  fit = false,
  full = false,
  dots = true,
  children,
}: {
  count: number;
  page: number;
  onPage: (index: number) => void;
  scale: (n: number) => number;
  /**
   * The rail takes the height of the card you are on, not the tallest card.
   * Without it every card sits in a rail as tall as the longest one, which
   * leaves a short card with a block of empty page under it. The reader
   * pilot uses this; see components/textbook/pilot.ts.
   */
  fit?: boolean;
  /**
   * Each card takes the rail's full width, so the cards line up with every
   * other card on the page and the next one is off-screen until a swipe
   * brings it in under the finger. A change of `page` from outside (an
   * arrow) slides the rail too. The reader pilot uses this.
   */
  full?: boolean;
  /** The dots under the rail; a card that shows its own "1/4" has no need. */
  dots?: boolean;
  /** Called with (offsetX, step, report) so each card can place itself and,
   *  when the rail fits, report its height. */
  children: (
    offset: Animated.Value,
    step: number,
    report: (index: number, height: number) => void,
    cardWidth: number
  ) => React.ReactNode;
}) {
  const [railWidth, setRailWidth] = useState(0);
  const cardWidth = full ? railWidth : scale(CARD_W);
  const step = cardWidth + scale(CARD_GAP);
  const offset = useRef(new Animated.Value(page * step)).current;
  const scrollRef = useRef<ScrollView>(null);
  /** Where the rail last came to rest, so an outside page change can be told
   *  from the rail reporting its own swipe back. */
  const settled = useRef(page);
  useEffect(() => {
    if (page === settled.current || !step) return;
    settled.current = page;
    scrollRef.current?.scrollTo({ x: page * step, animated: true });
  }, [page, step]);
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
    settled.current = next;
    if (next !== page) onPage(next);
  };

  const styles = makeStyles(scale);

  const [heights, setHeights] = useState<number[]>([]);
  const report = useCallback((index: number, height: number) => {
    setHeights((prev) => {
      if (prev[index] === height) return prev;
      const next = prev.slice();
      next[index] = height;
      return next;
    });
  }, []);
  const fitHeight = fit ? heights[page] : undefined;
  // The rail resizes once the swipe lands, and everything under it moves with
  // it, so the change is animated rather than a jump.
  const lastFit = useRef(fitHeight);
  if (fit && lastFit.current !== undefined && fitHeight !== undefined && lastFit.current !== fitHeight) {
    LayoutAnimation.configureNext(LayoutAnimation.create(240, 'easeInEaseOut', 'opacity'));
  }
  lastFit.current = fitHeight;

  return (
    <View onLayout={full ? (e) => setRailWidth(Math.round(e.nativeEvent.layout.width)) : undefined}>
      {/* A full rail waits for its width: cards sized 0 would all report 0. */}
      {(!full || railWidth > 0) && (
      <Animated.ScrollView
        ref={scrollRef}
        style={fitHeight ? { height: fitHeight } : undefined}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={step}
        decelerationRate="fast"
        disableIntervalMomentum
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentOffset={initialOffset}
        onMomentumScrollEnd={onEnd}
        contentContainerStyle={[styles.track, fit && styles.trackTop, full && styles.trackFull]}>
        {children(offset, step, report, cardWidth)}
      </Animated.ScrollView>
      )}

      {/* Dots only. There was a "← SWIPE" label beside them, from the design;
          a row of dots with one lit is already the most recognised affordance
          on a phone, and spelling it out was the only instruction on a page
          that otherwise never instructs. */}
      {dots && (
        <View style={styles.dots}>
          {Array.from({ length: count }, (_, i) => (
            <Dot key={i} index={i} offset={offset} step={step} scale={scale} />
          ))}
        </View>
      )}
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
  report,
  width,
  children,
}: {
  index: number;
  offset: Animated.Value;
  step: number;
  scale: (n: number) => number;
  /** From a fitting rail: where this card sends its height. */
  report?: (index: number, height: number) => void;
  /** A full rail's card width; the standard card width otherwise. */
  width?: number;
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
      style={{ width: width ?? scale(CARD_W), opacity, transform: [{ scale: cardScale }] }}
      onLayout={report ? (e) => report(index, Math.ceil(e.nativeEvent.layout.height)) : undefined}>
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
    /** A fitting rail lets each card keep its own height. */
    trackTop: { alignItems: 'flex-start' },
    /** Full-width cards end flush, so the last one snaps exactly into place. */
    trackFull: { paddingRight: 0 },
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

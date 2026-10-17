import { useCallback, useMemo, useRef } from 'react';
import type { LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

/**
 * WHICH BLOCKS OF A TEXTBOOK PAGE ARE ON SCREEN — for Ask teacher.
 *
 * The page freezes the moment Ask teacher is held, and the teacher is meant to
 * see what is on it. A topic is usually far longer than the server takes, so
 * the screen records where each drawn block sits and how far the page has
 * scrolled, and at the hold works out which blocks are in view
 * (`pageTextAround` builds the text round them).
 *
 * Positions are kept per page key, so a page that is still sliding away, or
 * one whose layouts land before the screen notices it changed, never mixes its
 * blocks into the next page's.
 */
export function useOnScreenBlocks() {
  const blocks = useRef<Record<string, Record<number, { y: number; h: number }>>>({});
  /** Where the blocks' container starts inside the scrolled content. */
  const base = useRef(0);
  const scrollY = useRef(0);
  const viewH = useRef(0);

  const onBlockLayout = useCallback(
    (page: string, index: number) => (e: LayoutChangeEvent) => {
      const { y, height } = e.nativeEvent.layout;
      (blocks.current[page] ??= {})[index] = { y, h: height };
    },
    [],
  );
  const onBaseLayout = useCallback((e: LayoutChangeEvent) => {
    base.current = e.nativeEvent.layout.y;
  }, []);
  /** Call from the scroll view's onScroll, on every event. */
  const trackScroll = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.current = e.nativeEvent.contentOffset.y;
    viewH.current = e.nativeEvent.layoutMeasurement.height;
  }, []);
  /** A new page starts at its top (a fresh scroll view, or scrolled there
   *  without an event). */
  const resetScroll = useCallback(() => {
    scrollY.current = 0;
  }, []);
  const onViewLayout = useCallback((e: LayoutChangeEvent) => {
    viewH.current = e.nativeEvent.layout.height;
  }, []);

  /**
   * The first and last block of `page` in view, with `top` and `bottom` points
   * of the scroll view covered by the bars. Null when nothing is measured yet.
   */
  const seen = useCallback((page: string, count: number, top = 0, bottom = 0): [number, number] | null => {
    const placed = blocks.current[page];
    if (!placed || !viewH.current) return null;
    const from = scrollY.current + top - base.current;
    const to = scrollY.current + viewH.current - bottom - base.current;
    let first = -1;
    let last = -1;
    for (let i = 0; i < count; i++) {
      const b = placed[i];
      if (!b || b.y + b.h <= from || b.y >= to) continue;
      if (first < 0) first = i;
      last = i;
    }
    return first < 0 ? null : [first, last];
  }, []);

  // One object for the screen's lifetime: it sits in callbacks' dependencies.
  return useMemo(
    () => ({ onBlockLayout, onBaseLayout, trackScroll, resetScroll, onViewLayout, seen }),
    [onBlockLayout, onBaseLayout, trackScroll, resetScroll, onViewLayout, seen],
  );
}

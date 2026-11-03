/**
 * The arithmetic behind the photo viewer's pinch, drag and double-tap
 * (components/zoomable-image.tsx).
 *
 * All positions are measured from the CENTRE of the frame the picture sits in,
 * and a translation is in screen points, applied after the scale — which is
 * how React Native composes `[{ translateX }, { translateY }, { scale }]`.
 * Pure and `worklet`-marked so the same functions run on the UI thread during
 * a gesture and in unit tests.
 */

export const MIN_ZOOM = 1;
export const MAX_ZOOM = 5;
/** Where a double-tap goes from rest. */
export const DOUBLE_TAP_ZOOM = 2.5;

export type Size = { w: number; h: number };
export type Point = { x: number; y: number };

export function clamp(value: number, lo: number, hi: number): number {
  'worklet';
  return Math.min(Math.max(value, lo), hi);
}

/** The picture as drawn inside a frame with `contentFit="contain"`. */
export function containedSize(natural: Size, frame: Size): Size {
  'worklet';
  if (!natural.w || !natural.h || !frame.w || !frame.h) return frame;
  const k = Math.min(frame.w / natural.w, frame.h / natural.h);
  return { w: natural.w * k, h: natural.h * k };
}

/**
 * How far the picture may be moved from centre at this zoom. Its edges never
 * come in past the frame's, and a picture that still fits the frame on an
 * axis cannot move along it.
 */
export function maxPan(content: Size, frame: Size, scale: number): Point {
  'worklet';
  return {
    x: Math.max(0, (content.w * scale - frame.w) / 2),
    y: Math.max(0, (content.h * scale - frame.h) / 2),
  };
}

/**
 * The translation that keeps the part of the picture under the fingers under
 * the fingers while the zoom changes by a factor of `k` (new scale / scale at
 * the start of the gesture). `startFocal` is where the fingers were when it
 * began, `focal` where they are now — so a two-finger drag moves the picture
 * too — and `startTranslation` is where the picture sat at the start.
 */
export function translationAbout(
  startFocal: Point,
  focal: Point,
  startTranslation: Point,
  k: number,
): Point {
  'worklet';
  return {
    x: focal.x - (startFocal.x - startTranslation.x) * k,
    y: focal.y - (startFocal.y - startTranslation.y) * k,
  };
}

/** A translation held inside what `maxPan` allows. */
export function clampPan(t: Point, limit: Point): Point {
  'worklet';
  return { x: clamp(t.x, -limit.x, limit.x), y: clamp(t.y, -limit.y, limit.y) };
}

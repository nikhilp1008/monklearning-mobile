import { Platform } from 'react-native';

/**
 * HOW FAR A PINNED BUTTON SITS ABOVE THE SCREEN'S BOTTOM EDGE.
 *
 * On iPhone the bottom inset is the home indicator: a thin line in a 34pt
 * strip that a button may overlap, so a pinned row tucks `tuck` points into it
 * and stays low and thumb-near. On Android the same inset is the navigation
 * bar, either a gesture handle or three opaque buttons up to 48dp tall, drawn
 * over the app since edge-to-edge. Tucking into that hid the bottom of the
 * button behind Back and Home. So on Android the row clears the bar and keeps
 * `min` of air above it.
 */
export function footPadding(insetBottom: number, tuck: number, min: number): number {
  if (Platform.OS === 'ios') return Math.max(insetBottom - tuck, min);
  return insetBottom + min;
}

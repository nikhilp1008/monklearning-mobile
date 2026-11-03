import { Platform, type ViewStyle } from 'react-native';

/**
 * A HAIRLINE DRAWN JUST INSIDE A SHAPE'S EDGE, on every phone.
 *
 * The app draws these as an inset boxShadow, which sits inside the shape and
 * so takes no room. Android only draws inset shadows from Android 10; on 7 to
 * 9 they vanish, which turned the white outline button into an invisible
 * white box and took away the ring that shows which teacher is chosen. There,
 * and only there, the line is a plain border instead. Android 10 and up and
 * iOS keep the inset shadow, so nothing changes where it already draws.
 */
export function insetLine(width: number, color: string): ViewStyle {
  if (Platform.OS === 'android' && Number(Platform.Version) < 29) {
    return { borderWidth: width, borderColor: color };
  }
  return {
    boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: width, color, inset: true }],
  };
}

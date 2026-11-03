import { Platform, type ViewStyle } from 'react-native';

/**
 * A SOFT DROP SHADOW THAT LOOKS THE SAME ON BOTH PLATFORMS.
 *
 * The app wrote its older shadows as iOS shadow props plus an `elevation` for
 * Android. Android ignores the iOS props and draws `elevation` its own way: a
 * flat grey, heavier than the design, never in the colour asked for (the
 * marigold glow under Profile's language knob came out grey, or not at all).
 *
 * iOS keeps exactly the props it had. Android 9 and up gets the same shadow as
 * a boxShadow, which takes a colour and a blur like iOS does (a CSS blur is
 * about twice an iOS shadowRadius). Android 7 and 8 cannot draw boxShadow, so
 * they keep the elevation they had.
 */
export function shadow({
  color,
  opacity,
  radius,
  x = 0,
  y = 0,
  elevation = 0,
}: {
  color: string;
  opacity: number;
  radius: number;
  x?: number;
  y?: number;
  elevation?: number;
}): ViewStyle {
  if (Platform.OS !== 'android') {
    return {
      shadowColor: color,
      shadowOpacity: opacity,
      shadowRadius: radius,
      shadowOffset: { width: x, height: y },
    };
  }
  if (Number(Platform.Version) < 28) return elevation ? { elevation } : {};
  return {
    boxShadow: [{ offsetX: x, offsetY: y, blurRadius: radius * 2, color: withAlpha(color, opacity) }],
  };
}

/** `#RGB`, `#RRGGBB`, `rgb()` or `rgba()`, with its alpha multiplied by `a`. */
export function withAlpha(color: string, a: number): string {
  const c = color.trim();
  if (c.startsWith('#')) {
    const hex = c.length === 4 ? c.slice(1).replace(/./g, (h) => h + h) : c.slice(1, 7);
    const n = parseInt(hex, 16);
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
  }
  const m = c.match(/rgba?\(([^)]+)\)/);
  if (m) {
    const [r, g, b, alpha = '1'] = m[1].split(',').map((p) => p.trim());
    return `rgba(${r},${g},${b},${Number(alpha) * a})`;
  }
  return c;
}

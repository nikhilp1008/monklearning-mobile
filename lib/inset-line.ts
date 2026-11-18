import { Platform, type ViewStyle } from 'react-native';

/**
 * A HAIRLINE DRAWN JUST INSIDE A SHAPE'S EDGE, on every phone.
 *
 * iOS draws it as an inset boxShadow, which sits inside the shape and takes
 * no room.
 *
 * Android gets a plain border instead, on EVERY version. This used to switch
 * to a border only on Android 7–9, on the belief that Android 10 and up draw
 * inset shadows. They don't here: on the Android 17 emulator (17 Nov 2026)
 * the white outline button (ObButton variant="outline") came out as a white
 * box with no edge at all, so "Previous" on Practice history read as bare
 * text. A border is drawn by every Android, and React Native counts it inside
 * a shape's width and height, so a sized shape (every user of this today:
 * ObButton's face, the teacher picker's close button and chips) keeps its
 * size and only gives the line's width up from the inside.
 */
export function insetLine(width: number, color: string): ViewStyle {
  if (Platform.OS === 'android') {
    return { borderWidth: width, borderColor: color };
  }
  return {
    boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: width, color, inset: true }],
  };
}

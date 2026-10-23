/**
 * A line that may carry a script the plain-text path cannot show.
 *
 * `latexToText` writes a subscript Unicode has no glyph for as `v_(AB)`, which
 * is what the Notes and saved-board pages showed for relative velocity. Where
 * the original line has a drawn part (a script or a fraction), it goes through
 * MathLine, as the live board does; every other line stays the one <Text> it
 * always was.
 */
import { useMemo } from 'react';
import { StyleSheet, Text, View, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';

import { MathLine } from '@/components/math-line';
import { latexToSegments } from '@/lib/latex-text';

export function hasDrawnScripts(raw: string | undefined): boolean {
  if (!raw) return false;
  return latexToSegments(raw).some(
    (s) => s.kind === 'sub' || s.kind === 'sup' || s.kind === 'fraction' || s.kind === 'matrix'
  );
}

export function ScriptText({
  raw,
  text,
  style,
}: {
  raw?: string;
  text: string;
  style?: StyleProp<TextStyle>;
}) {
  const drawn = useMemo(() => hasDrawnScripts(raw), [raw]);
  if (!drawn || !raw) return <Text style={style}>{text}</Text>;
  const flat = StyleSheet.flatten(style) ?? {};
  /**
   * LAYOUT BELONGS TO THE LINE, NOT TO EACH WORD. MathLine sets the style on
   * every word it lays out, so a `flex: 1` meant for the line (a bullet's
   * text beside its dot) went onto each word: in a wrapping row every word
   * then shrank to nothing, and a note showed an empty bullet over a tall
   * blank gap. The line's own layout goes on a wrapper; the words get type.
   */
  const { flex, flexGrow, flexShrink, flexBasis, alignSelf, transform, ...type } = flat;
  const box: ViewStyle = { flex, flexGrow, flexShrink, flexBasis, alignSelf, transform } as ViewStyle;
  return (
    <View style={box}>
      <MathLine
        text={raw}
        style={type}
        fontSize={typeof flat.fontSize === 'number' ? flat.fontSize : 15}
        color={typeof flat.color === 'string' ? flat.color : '#1d1d1b'}
      />
    </View>
  );
}

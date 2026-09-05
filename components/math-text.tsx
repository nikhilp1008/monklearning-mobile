import { useMemo } from 'react';
import { StyleProp, Text, TextStyle, ViewStyle } from 'react-native';

import { latexToText } from '@/lib/latex-text';

type MathTextProps = {
  /** Plain text, optionally containing `$…$` / `$$…$$` LaTeX segments — the
   *  exact convention `/practice/next` and `/practice/answer` use live. */
  text: string;
  fontSize: number;
  color: string;
  lineHeight: number;
  fontWeight?: '400' | '500' | '600' | '700' | '800';
  textAlign?: 'left' | 'center';
  style?: StyleProp<ViewStyle>;
};

const FONT_BY_WEIGHT: Record<string, string> = {
  '400': 'Onest_400Regular',
  '500': 'Onest_500Medium',
  '600': 'Onest_600SemiBold',
  '700': 'Onest_700Bold',
  '800': 'Onest_800ExtraBold',
};

/**
 * Renders exam question/option/solution text, converting the LaTeX that real
 * content contains into Unicode (see lib/latex-text.ts).
 *
 * This deliberately replaced a WebView+KaTeX implementation. That version
 * mounted a full browser instance per call site — a four-option MCQ meant five
 * WebViews on one screen — and each fetched KaTeX's CSS and two scripts from a
 * CDN before it could paint. Until those requests returned, every view sat at
 * its one-line initial height, so questions and options rendered clipped or
 * blank, and the screen crawled. Sampling live questions showed only 17%
 * contain any `$…$` at all, and the sole LaTeX commands present were `\frac`
 * and `\circ` — so nearly all of that cost bought nothing.
 *
 * Rendering natively also fixes what the WebView could not: text now uses the
 * app's bundled Anek Latin rather than a system font stack, matching every
 * label around it, and it works with no network at all.
 */
export function MathText({
  text,
  fontSize,
  color,
  lineHeight,
  fontWeight = '400',
  textAlign = 'left',
  style,
}: MathTextProps) {
  const rendered = useMemo(() => latexToText(text ?? ''), [text]);

  const textStyle: TextStyle = {
    fontFamily: FONT_BY_WEIGHT[fontWeight] ?? FONT_BY_WEIGHT['400'],
    fontSize,
    lineHeight,
    color,
    textAlign,
  };

  return <Text style={[textStyle, style as StyleProp<TextStyle>]}>{rendered}</Text>;
}

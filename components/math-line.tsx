import { useMemo } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';

import { MathSegment, latexToSegments } from '@/lib/latex-text';

/**
 * One line of a solution, with its fractions drawn as fractions.
 *
 * Unicode can spell ¹⁄₂ and nothing harder, so every other fraction used to be
 * flattened to `a/b` — "1/v-1/x=1/f" for the mirror formula, which is the
 * shape a student has to unpick before they can read the physics. This puts
 * the numerator over the denominator with a rule between, and leaves
 * everything else as ordinary text.
 *
 * The row wraps by word rather than by segment: a flex row breaks between its
 * children, so prose handed over whole would wrap only where a fraction
 * happened to sit. Each word is therefore its own child.
 *
 * Maths is set in one voice wherever it falls. Converted to Unicode, `2π n` is
 * indistinguishable from prose, so a formula used to take the prose weight
 * inside a sentence and the maths weight on a line of its own — the same
 * formula looking like two different things depending on where it landed. A
 * number, a unit and a formula are the parts of a step a student scans for, so
 * they are the parts that get the weight.
 */

type MathLineProps = {
  text: string;
  style?: StyleProp<TextStyle>;
  /** Needed to size the stacked halves and their rule against the type. */
  fontSize: number;
  color: string;
  /** Applied to every maths run — inline or on its own line. */
  mathStyle?: StyleProp<TextStyle>;
};

export function MathLine({ text, style, fontSize, color, mathStyle }: MathLineProps) {
  const segments = useMemo(() => latexToSegments(text), [text]);
  const hasFraction = segments.some((s) => s.kind === 'fraction');
  const hasMath = !!mathStyle && segments.some((s) => s.kind === 'math');
  const styles = useMemo(() => createStyles(fontSize, color), [fontSize, color]);

  // Nothing to stack and nothing to set apart: one Text, so line-height,
  // wrapping and selection behave exactly as they did before this component
  // existed.
  if (!hasFraction && !hasMath) {
    return <Text style={style}>{segments.map((s) => (s as { text: string }).text).join('')}</Text>;
  }

  return (
    <View style={styles.row}>
      {segments.flatMap((segment, i) => {
        if (segment.kind === 'fraction') {
          return [
            <Fraction
              key={`f${i}`}
              segment={segment}
              styles={styles}
              style={[style, mathStyle]}
            />,
          ];
        }
        const voice = segment.kind === 'math' ? [style, mathStyle] : [style];
        return words(segment.text).map((word, j) => (
          <Text key={`t${i}-${j}`} style={[voice, styles.word]}>
            {word}
          </Text>
        ));
      })}
    </View>
  );
}

/** Keeps the spaces, so "x = 1" does not become "x=1" once split. */
function words(text: string): string[] {
  return text.split(/(\s+)/).filter((part) => part !== '');
}

function Fraction({
  segment,
  styles,
  style,
}: {
  segment: Extract<MathSegment, { kind: 'fraction' }>;
  styles: ReturnType<typeof createStyles>;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <View style={styles.fraction}>
      <Text style={[style, styles.half]}>{segment.numerator}</Text>
      <View style={styles.rule} />
      <Text style={[style, styles.half]}>{segment.denominator}</Text>
    </View>
  );
}

function createStyles(fontSize: number, color: string) {
  return StyleSheet.create({
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      alignSelf: 'stretch',
    },
    word: {
      // The row centres its children, so the line-height that would space a
      // paragraph is not what spaces this one — see `row`'s alignItems.
      lineHeight: fontSize * 1.6,
    },
    fraction: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 3,
    },
    half: {
      // Smaller than the line it sits in, the way a printed fraction is, and
      // tight enough that the pair is no taller than one line of prose.
      fontSize: fontSize * 0.82,
      lineHeight: fontSize * 0.98,
      textAlign: 'center',
    },
    rule: {
      alignSelf: 'stretch',
      height: StyleSheet.hairlineWidth * 2,
      marginVertical: 2,
      backgroundColor: color,
    },
  });
}

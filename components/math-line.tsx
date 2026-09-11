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
  const hasFraction = segments.some(
    (s) => s.kind === 'fraction' || s.kind === 'sub' || s.kind === 'sup' || s.kind === 'matrix'
  );
  const hasMath = !!mathStyle && segments.some((s) => s.kind === 'math');
  const styles = useMemo(() => createStyles(fontSize, color), [fontSize, color]);

  // Nothing to stack and nothing to set apart: one Text, so line-height,
  // wrapping and selection behave exactly as they did before this component
  // existed.
  if (!hasFraction && !hasMath) {
    return (
      <Text style={style}>
        {segments.map((s) => ('text' in s ? s.text : '')).join('')}
      </Text>
    );
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
        if (segment.kind === 'sub' || segment.kind === 'sup') {
          // Drawn rather than spelled: there is no subscript `y` in Unicode,
          // so it is set small and shifted off the baseline.
          return [
            <Text
              key={`s${i}`}
              style={[
                style,
                mathStyle,
                styles.script,
                segment.kind === 'sub' ? styles.scriptDown : styles.scriptUp,
              ]}>
              {segment.text}
            </Text>,
          ];
        }
        if (segment.kind === 'matrix') {
          // HELD: the drawn grid waits on Nikhil.
          //
          // Raasikh's `Matrix` below renders this as the grid it is. Until
          // that is signed off, a matrix reads exactly as it does in
          // production today -- `[1  2 ; 3  4]`, the same linear form
          // `latexToText` produces -- so the parser change is live and only
          // the drawing is held. To take the grid, restore the `<Matrix .../>`
          // return here; nothing else needs touching.
          const linear =
            segment.open +
            segment.rows.map((row) => row.join('  ')).join(' ; ') +
            segment.close;
          return [
            <Text key={`m${i}`} style={[style, mathStyle, styles.word]}>
              {linear}
            </Text>,
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

/**
 * A matrix, drawn as the grid it is.
 *
 * The brackets are single tall glyphs stretched to the height of the rows
 * rather than characters repeated down the side: `[` scaled vertically reads
 * as one delimiter, and three stacked `[` read as three. `cases` has an
 * opening brace and no closing one, which is why the right-hand side is
 * conditional rather than assumed.
 */
// Unused while the grid is held above -- kept, not deleted, so approving it is
// a one-line change rather than a rewrite.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Matrix({
  segment,
  styles,
  style,
}: {
  segment: Extract<MathSegment, { kind: 'matrix' }>;
  styles: ReturnType<typeof createStyles>;
  style?: StyleProp<TextStyle>;
}) {
  const columns = Math.max(...segment.rows.map((row) => row.length));
  return (
    <View style={styles.matrix}>
      {!!segment.open && <Text style={[style, styles.bracket]}>{segment.open}</Text>}
      <View>
        {segment.rows.map((row, r) => (
          <View key={r} style={styles.matrixRow}>
            {Array.from({ length: columns }, (_, c) => (
              <Text key={c} style={[style, styles.matrixCell]}>
                {row[c] ?? ''}
              </Text>
            ))}
          </View>
        ))}
      </View>
      {!!segment.close && <Text style={[style, styles.bracket]}>{segment.close}</Text>}
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
    script: {
      fontSize: fontSize * 0.68,
      lineHeight: fontSize * 1.6,
    },
    // Small transforms rather than a baseline shift, which React Native has
    // no property for. Tuned against the Unicode subscripts beside them so a
    // drawn `y` sits where a spelled `ₓ` does.
    scriptDown: {
      transform: [{ translateY: fontSize * 0.2 }],
    },
    scriptUp: {
      transform: [{ translateY: -fontSize * 0.3 }],
    },
    matrix: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 2,
    },
    matrixRow: {
      flexDirection: 'row',
    },
    matrixCell: {
      // Wide enough that a two-digit entry and a signed one still line up as
      // columns, which is the whole point of drawing it rather than listing it.
      minWidth: fontSize * 1.5,
      paddingHorizontal: fontSize * 0.22,
      paddingVertical: fontSize * 0.06,
      textAlign: 'center',
      lineHeight: fontSize * 1.25,
    },
    bracket: {
      // One glyph stretched to the grid's height, not a column of them.
      fontSize: fontSize * 1.1,
      transform: [{ scaleY: 2.1 }],
      lineHeight: fontSize * 1.25,
      paddingHorizontal: 1,
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

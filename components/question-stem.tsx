import { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { MathLine } from '@/components/math-line';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { StemBlock, hasStructure, parseStem } from '@/lib/question-stem';

/**
 * A question stem with its exam structure intact.
 *
 * The parsing lives in `lib/question-stem.ts` and runs on the RAW text, before
 * `latexToText` — which collapses newlines, and every rule in there reads them.
 * Each block's body still goes through the maths renderer, so a formula inside
 * a table cell converts exactly as it does in a paragraph.
 *
 * A stem with no structure renders as one flowing paragraph, which is the
 * ordinary case and must not gain gratuitous vertical gaps.
 */
export function QuestionStem({
  text,
  fontSize,
  lineHeight,
  style,
}: {
  text: string;
  fontSize: number;
  lineHeight: number;
  style?: object;
}) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const blocks = useMemo(() => parseStem(text ?? ''), [text]);

  /**
   * `MathLine`, not `MathText` — the renderer the solution rail already uses.
   *
   * Measured over the bank: 6.7% of stems hold a script Unicode cannot spell
   * (`ΔH^⊖`, `lim _(x → ∞)`) and 3.8% a fraction it cannot stack, and MathText
   * flattens both to linear `^`, `_` and `(a)/(b)`. The student was then shown
   * a drawn fraction in the worked solution and a flat one in the question
   * that produced it — the same maths, set two ways, on one screen.
   *
   * It costs nothing where there is nothing to draw: MathLine returns a single
   * `<Text>` unless a segment actually needs stacking, so the ~90% of stems
   * that are prose wrap and space exactly as before.
   */
  const body = (content: string, size = fontSize) => (
    <MathLine
      text={content}
      style={{
        fontFamily: 'AnekLatin_500Medium',
        fontSize: size,
        lineHeight: size * (lineHeight / fontSize),
        color: colors.ink,
      }}
      fontSize={size}
      color={colors.ink}
    />
  );

  if (!blocks.length || !hasStructure(blocks)) {
    return <View style={style}>{body(text ?? '')}</View>;
  }

  return (
    <View style={style}>
      {blocks.map((block, index) => (
        <View key={index} style={index > 0 && styles.spaced}>
          {renderBlock(block, styles, body, scale, fontSize)}
        </View>
      ))}
    </View>
  );
}

function renderBlock(
  block: StemBlock,
  styles: ReturnType<typeof createStyles>,
  body: (content: string, size?: number) => React.ReactNode,
  scale: (size: number) => number,
  fontSize: number
) {
  if (block.kind === 'table' && block.rows?.length) {
    const head = block.hasHeader ? block.rows[0] : null;
    const rows = block.hasHeader ? block.rows.slice(1) : block.rows;
    // A wide match-table scrolls inside its own box rather than pushing the
    // question sideways. Columns are equal-width because the content is
    // two-column Column-I/Column-II far more often than it is anything else.
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.table}>
          {head && (
            <View style={[styles.row, styles.headRow]}>
              {head.map((cell, i) => (
                <View key={i} style={styles.cell}>
                  <Text style={styles.headText} numberOfLines={0}>
                    {cell}
                  </Text>
                </View>
              ))}
            </View>
          )}
          {rows.map((row, ri) => (
            <View key={ri} style={[styles.row, ri < rows.length - 1 && styles.rowDivider]}>
              {row.map((cell, ci) => (
                <View key={ci} style={styles.cell}>
                  {body(cell, fontSize - scale(1))}
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }

  if (block.kind === 'labelled') {
    return (
      <View style={styles.labelled}>
        <Text style={styles.labelledLabel}>{block.label?.toUpperCase()}</Text>
        {body(block.body)}
      </View>
    );
  }

  if (block.kind === 'listitem') {
    return (
      <View style={styles.listRow}>
        <View style={styles.listBadge}>
          <Text style={styles.listBadgeText}>{block.label}</Text>
        </View>
        <View style={styles.listBody}>{body(block.body)}</View>
      </View>
    );
  }

  if (block.kind === 'tail') {
    return <Text style={styles.tail}>{block.body}</Text>;
  }

  return body(block.body);
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    spaced: {
      marginTop: verticalScale(10),
    },
    table: {
      borderWidth: 1,
      borderColor: colors.hairline,
      borderRadius: scale(10),
      overflow: 'hidden',
      minWidth: scale(300),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'stretch',
    },
    headRow: {
      backgroundColor: colors.tint,
    },
    rowDivider: {
      borderBottomWidth: 1,
      borderBottomColor: colors.hairline,
    },
    cell: {
      flex: 1,
      minWidth: scale(120),
      paddingHorizontal: scale(10),
      paddingVertical: verticalScale(8),
      borderRightWidth: StyleSheet.hairlineWidth,
      borderRightColor: colors.hairline,
    },
    headText: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(11),
      color: colors.ink,
    },
    labelled: {
      backgroundColor: colors.tint,
      borderWidth: 1,
      borderColor: colors.hairline,
      borderRadius: scale(10),
      paddingHorizontal: scale(12),
      paddingVertical: verticalScale(9),
    },
    labelledLabel: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.5),
      letterSpacing: 1,
      color: colors.amberText,
      marginBottom: verticalScale(3),
    },
    listRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    listBadge: {
      width: scale(20),
      height: scale(20),
      borderRadius: scale(5),
      backgroundColor: 'rgba(28,26,22,.05)',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: verticalScale(1),
      marginRight: scale(9),
    },
    listBadgeText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(9.5),
      color: colors.slate,
    },
    listBody: {
      flex: 1,
    },
    tail: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(13),
      lineHeight: scale(19),
      color: colors.slate,
      fontStyle: 'italic',
    },
  });
}

import { useMemo, useRef, useState } from 'react';
import { LayoutChangeEvent, ScrollView, StyleSheet, Text, View } from 'react-native';

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
        // Onest. Anek Latin stopped being loaded in the family migration and
        // this line was the one reference left behind, so every question stem
        // in Practice was falling through to the iOS system face — on a screen
        // that is Onest everywhere else.
        fontFamily: 'Onest_500Medium',
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
    return <StemTable block={block} styles={styles} body={body} scale={scale} fontSize={fontSize} />;
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

/**
 * A match table, laid out against the width it was actually given.
 *
 * It used to sit in a horizontal ScrollView with `flex: 1` cells. A horizontal
 * ScrollView gives its content no width to fill, so the cells were sized from
 * an unconstrained measure: the noble-gas table in a mock test came out wider
 * than the phone, its List - 2 column cut at the right edge ("1) U", "2) Used
 * in light b") by the table's `overflow: hidden`, and nothing slid because
 * the ScrollView's content had been measured no wider than the screen.
 *
 * Now the box measures itself first. If every column still gets a readable
 * width (COL_MIN) the table is drawn at exactly that width with its text
 * wrapping inside the cells: no ScrollView at all, the ordinary two-column
 * case. Only a table that cannot fit (four unfolded columns, say) scrolls,
 * at an explicit width per column so the content really is wider than the
 * viewport, with the scroll bar shown (flashed on iOS, kept on Android) so a
 * student can see it slides.
 */
function StemTable({
  block,
  styles,
  body,
  scale,
  fontSize,
}: {
  block: StemBlock;
  styles: ReturnType<typeof createStyles>;
  body: (content: string, size?: number) => React.ReactNode;
  scale: (size: number) => number;
  fontSize: number;
}) {
  const [width, setWidth] = useState(0);
  const scroller = useRef<ScrollView>(null);
  const all = block.rows ?? [];
  const head = block.hasHeader ? all[0] : null;
  const rows = block.hasHeader ? all.slice(1) : all;
  const columns = Math.max(1, ...all.map((r) => r.length));
  const scrolls = tableScrolls(width, columns, scale(COL_MIN));
  // Explicit widths only when scrolling; otherwise the cells share the box.
  const cellWidth = scrolls ? { width: scale(COL_SCROLL) } : styles.cellFill;

  const onLayout = (e: LayoutChangeEvent) => {
    const next = Math.round(e.nativeEvent.layout.width);
    if (next !== width) setWidth(next);
  };

  const table = (
    <View style={[styles.table, scrolls && { width: columns * scale(COL_SCROLL) }]}>
      {head && (
        <View style={[styles.row, styles.headRow]}>
          {head.map((cell, i) => (
            <View key={i} style={[styles.cell, cellWidth]}>
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
            <View key={ci} style={[styles.cell, cellWidth]}>
              {body(cell, fontSize - scale(1))}
            </View>
          ))}
        </View>
      ))}
    </View>
  );

  return (
    <View onLayout={onLayout} testID="stem-table">
      {scrolls ? (
        <ScrollView
          ref={scroller}
          horizontal
          showsHorizontalScrollIndicator
          persistentScrollbar
          nestedScrollEnabled
          contentContainerStyle={styles.tableScrollContent}
          onContentSizeChange={() => scroller.current?.flashScrollIndicators()}>
          {table}
        </ScrollView>
      ) : (
        table
      )}
    </View>
  );
}

/** The narrowest a column may be before the table scrolls instead (pre-scale). */
const COL_MIN = 120;
/** Each column's width once a table scrolls (pre-scale). */
const COL_SCROLL = 160;

/**
 * Whether a table of `columns` columns must slide sideways in `available`
 * points. Before the first layout (`available` 0) it never scrolls: the table
 * fills its box, which is right for the common two-column case.
 */
export function tableScrolls(available: number, columns: number, minColumn: number): boolean {
  return available > 0 && columns * minColumn > available;
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
    },
    tableScrollContent: {
      // Room under the table for the scroll bar, so it never sits on the border.
      paddingBottom: verticalScale(6),
    },
    cellFill: {
      flex: 1,
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

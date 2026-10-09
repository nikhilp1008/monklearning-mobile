import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/brand';
import { READ_INK, READ_LINE, READ_SIZE } from '@/constants/reading';
import { Markup } from '@/components/textbook/markup';
import { BORDER, kicker } from '@/components/textbook/theme';
import { labelCase } from '@/lib/label-case';
import type { Block } from '@/lib/textbooks';

type FormulaBlock = Extract<Block, { t: 'formula' }>;

/**
 * THE FORMULA CARD, for the reader pilot (see pilot.ts). Chosen over a
 * numbered in-page equation and a marigold-edged card, compared on six real
 * formulas. Three rules:
 *
 *   One edge. Label, title, formula, symbols and note all start on the same
 *     left edge. The old card centred the formula over left-aligned text.
 *   One supporting voice. The symbol lines and the note are the same size
 *     and colour, the page's own reading text. The old card set them in two
 *     sizes and two greys.
 *   A real title. "FORMULA · THE CONVERSION MASTER RELATION" becomes a small
 *     "formula" label and a bold "The conversion master relation".
 *
 * THE FORMULA IS 17, one step over the 15 it sits in. It was 20 first, and at
 * 20 a column this narrow wraps ordinary formulas, and the serif's larger
 * letters made it read bigger still, louder than the bold title over it.
 * Printed textbooks set display maths a step up from the text, not a heading
 * size up; at 17 it is the title's size without the title's weight.
 */
const FORMULA_SIZE = 17;
const FORMULA_LINE = 28;

/** "FORMULA · THE CONVERSION MASTER RELATION" → "The conversion master relation".
 *  A kicker with no "·" is all title (343 of them, "CONCURRENCY OF THREE LINES"). */
export function formulaTitle(kickerText: string): string {
  const parts = kickerText.split(' · ');
  const raw = parts.length > 1 && /^formula$/i.test(parts[0].trim()) ? parts.slice(1).join(' · ') : kickerText;
  const lower = labelCase(raw);
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

/** A symbol line written "n₁, n₂ = the numerical values…" reads "n₁, n₂ — the
 *  numerical values…", its symbol in SemiBold. About half the corpus's lines
 *  are written this way; the rest are plain sentences and stay plain. */
function legendHtml(line: string): string {
  const at = line.indexOf(' = ');
  if (at < 0 || line.slice(0, at).replace(/<[^>]*>/g, '').length > 24) return line;
  // A line that defines several symbols ("ℕ = naturals · W = wholes") keeps
  // its = signs throughout; turning only the first into a dash read as two
  // conventions on one line.
  if (line.indexOf(' = ', at + 3) >= 0) return line;
  return `<b>${line.slice(0, at)}</b> ${'—'} ${line.slice(at + 3)}`;
}

export function PilotFormula({
  block,
  scale,
  type,
}: {
  block: FormulaBlock;
  scale: (n: number) => number;
  type: (n: number) => number;
}) {
  const s = makeStyles(scale, type);
  const read = (html: string, key?: number) => (
    <Markup key={key} html={html} size={type(READ_SIZE)} style={s.read} look="pilot" />
  );
  return (
    <View style={s.card}>
      <Text style={kicker(type)}>formula</Text>
      <Text style={s.title}>{formulaTitle(block.kicker)}</Text>
      <Markup html={block.main} size={type(FORMULA_SIZE)} style={s.main} look="pilot" />
      {block.legend.length > 0 && (
        <View style={s.symbols}>{block.legend.map((line, i) => read(legendHtml(line), i))}</View>
      )}
      {!!block.note && (
        <>
          <View style={s.rule} />
          {read(block.note)}
        </>
      )}
    </View>
  );
}

function makeStyles(scale: (n: number) => number, type: (n: number) => number) {
  return StyleSheet.create({
    card: {
      backgroundColor: colors.readingCard,
      borderWidth: 1,
      borderColor: BORDER,
      borderRadius: scale(12),
      padding: scale(16),
    },
    title: {
      fontFamily: 'Onest_700Bold',
      fontSize: type(17),
      lineHeight: type(24),
      letterSpacing: type(-0.2),
      color: READ_INK,
      marginTop: scale(2),
    },
    read: { fontFamily: 'Onest_400Regular', fontSize: type(READ_SIZE), lineHeight: type(READ_LINE), color: READ_INK },
    /** Words upright in Onest; the <i> runs, the maths, go serif italic. */
    main: {
      fontFamily: 'Onest_400Regular',
      fontSize: type(FORMULA_SIZE),
      lineHeight: type(FORMULA_LINE),
      color: READ_INK,
      marginTop: scale(12),
      marginBottom: scale(12),
    },
    symbols: { gap: scale(8) },
    rule: { height: 1, backgroundColor: 'rgba(28,26,22,.08)', marginVertical: scale(14) },
  });
}

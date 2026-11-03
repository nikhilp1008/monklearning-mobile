import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';

import { colors } from '@/constants/brand';
import { READ_INK, READ_LINE, READ_SIZE } from '@/constants/reading';
import { Markup } from '@/components/textbook/markup';
import { kicker } from '@/components/textbook/theme';
import { labelCase } from '@/lib/label-case';
import type { Block } from '@/lib/textbooks';
import { BookText } from '@/components/textbook/book-text';

type TableBlock = Extract<Block, { t: 'defgrid' }>;
type HowToBlock = Extract<Block, { t: 'proc' }>;
type GridBlock = Extract<Block, { t: 'table' }>;

/**
 * TABLES AND HOW-TO STEPS, for the reader pilot (see pilot.ts). 334 tables and
 * 372 how-tos across the chapters.
 *
 * Both open the way the formula card does: a small lowercase label ("table",
 * "how to") and the block's own title in bold under it. Everything after is
 * the page's reading text on one left edge, with no card.
 *
 * STACKED, NOT IN COLUMNS. A table row is its name in bold with its meaning
 * under it at full width: in two columns on a phone the right column is
 * barely 200pt, so a typical 65-character meaning wraps to three lines beside
 * a one-line name. A step's bold lead (93% of steps have one) becomes the
 * step's own heading, numbered on a line down the left, so a how-to reads as
 * a sequence to follow. Chosen over open two columns and the same in a card.
 */
/** "<b>Start from the relation.</b> Pressure is…" → ["Start from the relation.", "Pressure is…"]. */
export function splitLead(html: string): [string | null, string] {
  const m = html.match(/^\s*<b>([\s\S]*?)<\/b>\s*/i);
  if (!m) return [null, html];
  const rest = html.slice(m[0].length);
  // A lead that stops mid-sentence stays in its sentence: "Multiply all
  // coefficients by" as a heading, with "n → raise to the power n" under it,
  // read as a broken step.
  const plain = (h: string) => h.replace(/<[^>]*>/g, '').trim();
  if (plain(rest) && !/[.:?!)]$/.test(plain(m[1])) && !/^[A-Z“"]/.test(plain(rest))) return [null, html];
  return [m[1], rest];
}

function title(text: string, asPrinted = false): string {
  if (asPrinted) return text;
  const lower = labelCase(text);
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export function PilotTable({
  block,
  scale,
  type,
}: {
  block: TableBlock;
  scale: (n: number) => number;
  type: (n: number) => number;
}) {
  const book = useContext(BookText);
  const s = makeStyles(scale, type);
  const read = (html: string, style?: StyleProp<TextStyle>) => (
    <Markup html={html} size={type(READ_SIZE)} style={[s.read, style]} look="pilot" />
  );
  const head = (
    <>
      <Text style={kicker(type)}>table</Text>
      <Text style={s.title}>{title(block.title, book)}</Text>
    </>
  );
  return (
    <View>
      {head}
      <View style={s.rows}>
        {block.rows.map((row, i) => (
          <View key={i} style={[s.stackRow, i > 0 && s.hair]}>
            {read(row.k, s.key)}
            {read(row.v)}
          </View>
        ))}
      </View>
    </View>
  );
}

/**
 * A TABLE WITH ANY NUMBER OF COLUMNS, from the books. Stacked like the
 * two-column one: each row's first cell in bold, and every other cell under it
 * as "column: value", so nothing is squeezed into a 100pt column on a phone.
 */
export function PilotGrid({
  block,
  scale,
  type,
}: {
  block: GridBlock;
  scale: (n: number) => number;
  type: (n: number) => number;
}) {
  const book = useContext(BookText);
  const s = makeStyles(scale, type);
  const read = (html: string, style?: StyleProp<TextStyle>) => (
    <Markup html={html} size={type(READ_SIZE)} style={[s.read, style]} look="pilot" />
  );
  return (
    <View>
      <Text style={kicker(type)}>table</Text>
      {!!block.title && <Text style={s.title}>{title(block.title, book)}</Text>}
      <View style={s.rows}>
        {block.rows.map((row, i) => (
          <View key={i} style={[s.stackRow, i > 0 && s.hair]}>
            {/* A row named by a bare number ("14") says what it counts. */}
            {block.head[0] && !/[A-Za-z]/.test((row[0] ?? '').replace(/<[^>]*>/g, '')) ? (
              <View style={s.cellRow}>
                <Markup html={block.head[0]} size={type(READ_SIZE) - 1} style={s.cellHead} look="pilot" />
                {read(row[0] ?? '', [s.cellValue, s.key])}
              </View>
            ) : (
              read(row[0] ?? '', s.key)
            )}
            {row.slice(1).map((cell, j) =>
              block.head.length > 2 && block.head[j + 1] ? (
                // The column's name quiet on the left, the value beside it.
                <View key={j} style={s.cellRow}>
                  <Markup html={block.head[j + 1]} size={type(READ_SIZE) - 1} style={s.cellHead} look="pilot" />
                  {read(cell, s.cellValue)}
                </View>
              ) : (
                <View key={j}>{read(cell)}</View>
              )
            )}
          </View>
        ))}
      </View>
      {!!block.note && read(block.note, { marginTop: scale(8) })}
    </View>
  );
}

export function PilotHowTo({
  block,
  scale,
  type,
}: {
  block: HowToBlock;
  scale: (n: number) => number;
  type: (n: number) => number;
}) {
  const book = useContext(BookText);
  const s = makeStyles(scale, type);
  const read = (html: string, style?: StyleProp<TextStyle>) => (
    <Markup html={html} size={type(READ_SIZE)} style={[s.read, style]} look="pilot" />
  );
  const head = (
    <>
      <Text style={kicker(type)}>how to</Text>
      <Text style={s.title}>{title(block.title, book)}</Text>
    </>
  );

  return (
      <View>
        {head}
        <View style={s.timeline}>
          {block.steps.map((step, i) => {
            const [lead, rest] = splitLead(step);
            const last = i === block.steps.length - 1;
            return (
              <View key={i} style={s.tRow}>
                <View style={s.tRail}>
                  <View style={s.tDot}>
                    <Text style={s.tNum}>{i + 1}</Text>
                  </View>
                  {!last && <View style={s.tLine} />}
                </View>
                <View style={[s.grow, !last && s.tGap]}>
                  {lead ? (
                    <>
                      {read(lead, s.lead)}
                      {!!rest && read(rest)}
                    </>
                  ) : (
                    read(step)
                  )}
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
}

function makeStyles(scale: (n: number) => number, type: (n: number) => number) {
  const DOT = 24;
  return StyleSheet.create({
    grow: { flex: 1 },
    read: { fontFamily: 'Onest_400Regular', fontSize: type(READ_SIZE), lineHeight: type(READ_LINE), color: READ_INK },
    title: {
      fontFamily: 'Onest_700Bold',
      fontSize: type(17),
      lineHeight: type(24),
      letterSpacing: type(-0.2),
      color: READ_INK,
      marginTop: scale(2),
    },
    // tables
    rows: { marginTop: scale(8) },
    hair: { borderTopWidth: 1, borderTopColor: 'rgba(28,26,22,.08)' },
    stackRow: { paddingVertical: scale(10), gap: scale(2) },
    key: { fontFamily: 'Onest_600SemiBold' },
    cellRow: { flexDirection: 'row', gap: scale(12) },
    cellHead: {
      width: '34%',
      fontFamily: 'Onest_400Regular',
      fontSize: type(READ_SIZE) - 1,
      lineHeight: type(READ_LINE),
      color: colors.slate,
    },
    cellValue: { flex: 1 },
    // steps
    lead: { fontFamily: 'Onest_600SemiBold' },
    timeline: { marginTop: scale(14) },
    tRow: { flexDirection: 'row', gap: scale(12) },
    tRail: { width: scale(DOT), alignItems: 'center' },
    /** A small outlined number; the line below it runs to the next one. */
    tDot: {
      width: scale(DOT),
      height: scale(DOT),
      borderRadius: scale(8),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.2)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tNum: { fontFamily: 'Onest_600SemiBold', fontSize: type(12), color: READ_INK },
    tLine: { flex: 1, width: 1, backgroundColor: 'rgba(28,26,22,.12)', marginVertical: scale(4) },
    tGap: { paddingBottom: scale(18) },
  });
}

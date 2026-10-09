import { StyleSheet, Text, View } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';

import { READ_INK, READ_LINE, READ_SIZE } from '@/constants/reading';
import { Markup } from '@/components/textbook/markup';
import { kicker } from '@/components/textbook/theme';
import { labelCase } from '@/lib/label-case';
import type { Block } from '@/lib/textbooks';

type TableBlock = Extract<Block, { t: 'defgrid' }>;
type HowToBlock = Extract<Block, { t: 'proc' }>;

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
  return m ? [m[1], html.slice(m[0].length)] : [null, html];
}

function title(text: string): string {
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
  const s = makeStyles(scale, type);
  const read = (html: string, style?: StyleProp<TextStyle>) => (
    <Markup html={html} size={type(READ_SIZE)} style={[s.read, style]} look="pilot" />
  );
  const head = (
    <>
      <Text style={kicker(type)}>table</Text>
      <Text style={s.title}>{title(block.title)}</Text>
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

export function PilotHowTo({
  block,
  scale,
  type,
}: {
  block: HowToBlock;
  scale: (n: number) => number;
  type: (n: number) => number;
}) {
  const s = makeStyles(scale, type);
  const read = (html: string, style?: StyleProp<TextStyle>) => (
    <Markup html={html} size={type(READ_SIZE)} style={[s.read, style]} look="pilot" />
  );
  const head = (
    <>
      <Text style={kicker(type)}>how to</Text>
      <Text style={s.title}>{title(block.title)}</Text>
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

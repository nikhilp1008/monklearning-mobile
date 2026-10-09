import { StyleSheet, Text, View } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';

import { colors } from '@/constants/brand';
import { READ_GREY, READ_INK, READ_LINE, READ_SIZE } from '@/constants/reading';
import { splitLead } from '@/components/textbook/lists-pilot';
import { Markup } from '@/components/textbook/markup';
import { BORDER, kicker } from '@/components/textbook/theme';
import type { Block } from '@/lib/textbooks';

type Mistakes = Extract<Block, { t: 'mistakes' }>;
type ProTip = Extract<Block, { t: 'protip' }>;
type Snapshot = Extract<Block, { t: 'snapshot' }>;

/**
 * THE END OF A TOPIC, for the reader pilot (see pilot.ts): Watch out, Pro-tip
 * and Checkpoint, which close 308 of the 310 topics in exactly that order.
 *
 * Each part follows the rules the other blocks now share. A mistake is set
 * like a how-to step: its bold name as its heading and the red-pen ✗ in the
 * margin. A checkpoint fact is set like a stacked table row: the fact in
 * SemiBold, its note under it. The memory lines sit in the answer outline.
 * The pro-tip's first letter is capitalised; the chapters write all 314 of
 * them starting in lowercase.
 *
 * SEPARATE: three blocks, one after another, spaced like any other blocks on
 * the page. The list, the tip as an aside with a rule down its left, and the
 * checkpoint in a card, the topic's full stop. Chosen over one "before you
 * move on" card and the same card with the three as chips: the mistakes and
 * the checkpoint are what a student revises from, so both stay in view.
 */
function capitalise(html: string): string {
  return html.replace(/^(\s*(?:<[^>]+>\s*)*)([a-z])/, (_, pre: string, ch: string) => pre + ch.toUpperCase());
}

type Scales = { scale: (n: number) => number; type: (n: number) => number };

function useRead({ scale, type }: Scales) {
  const s = makeStyles(scale, type);
  const read = (html: string, style?: StyleProp<TextStyle>, key?: number) => (
    <Markup key={key} html={html} size={type(READ_SIZE)} style={[s.read, style]} look="pilot" />
  );
  return { s, read };
}

export function PilotWatchOut({ block, scale, type }: { block: Mistakes } & Scales) {
  const { s, read } = useRead({ scale, type });
  return (
    <View>
      <Text style={kicker(type)}>watch out</Text>
      <View style={s.items}>
        {block.items.map((item, i) => {
          const [lead, rest] = splitLead(item);
          return (
            <View key={i} style={s.itemRow}>
              <Text style={s.cross}>✗</Text>
              <View style={s.grow}>
                {lead ? (
                  <>
                    {read(lead, s.semi)}
                    {!!rest && read(rest)}
                  </>
                ) : (
                  read(item)
                )}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export function PilotProTip({ block, scale, type }: { block: ProTip } & Scales) {
  const { s, read } = useRead({ scale, type });
  return (
    <View style={s.aside}>
      <Text style={[kicker(type), s.sectionLabel]}>pro-tip</Text>
      {read(capitalise(block.html))}
    </View>
  );
}

export function PilotCheckpoint({
  block,
  topicNumber,
  scale,
  type,
}: { block: Snapshot; topicNumber: string } & Scales) {
  const { s, read } = useRead({ scale, type });
  return (
    <View style={s.card}>
      <Text style={kicker(type)}>{`checkpoint · topic ${topicNumber}`}</Text>
      <View>
        {block.rows.map((row, i) => (
          <View key={i} style={[s.fact, i > 0 && s.hair]}>
            {read(row.f, s.semi)}
            <Markup html={row.note} size={type(14)} style={s.note} look="pilot" />
          </View>
        ))}
      </View>
      {block.aids.length > 0 && (
        <View style={s.aids}>
          <Text style={[kicker(type), s.aidsLabel]}>say it to remember it</Text>
          {block.aids.map((aid, i) => read(aid, undefined, i))}
        </View>
      )}
    </View>
  );
}

function makeStyles(scale: (n: number) => number, type: (n: number) => number) {
  return StyleSheet.create({
    grow: { flex: 1 },
    read: { fontFamily: 'Onest_400Regular', fontSize: type(READ_SIZE), lineHeight: type(READ_LINE), color: READ_INK },
    semi: { fontFamily: 'Onest_600SemiBold' },
    card: {
      backgroundColor: colors.readingCard,
      borderWidth: 1,
      borderColor: BORDER,
      borderRadius: scale(12),
      padding: scale(16),
    },
    sectionLabel: { marginBottom: scale(6) },
    aside: { borderLeftWidth: 2, borderLeftColor: 'rgba(28,26,22,.14)', paddingLeft: scale(14) },
    items: { gap: scale(14), marginTop: scale(10) },
    itemRow: { flexDirection: 'row', gap: scale(10) },
    cross: {
      width: scale(16),
      fontFamily: 'Onest_700Bold',
      fontSize: type(13),
      lineHeight: type(READ_LINE),
      color: colors.red,
    },
    hair: { borderTopWidth: 1, borderTopColor: 'rgba(28,26,22,.08)' },
    fact: { paddingVertical: scale(10), gap: scale(2) },
    note: { fontFamily: 'Onest_400Regular', fontSize: type(14), lineHeight: type(21), color: READ_GREY },
    aids: {
      marginTop: scale(8),
      borderWidth: 1,
      borderColor: BORDER,
      borderRadius: scale(10),
      paddingVertical: scale(10),
      paddingHorizontal: scale(14),
      gap: scale(4),
    },
    aidsLabel: { marginBottom: scale(2) },
  });
}

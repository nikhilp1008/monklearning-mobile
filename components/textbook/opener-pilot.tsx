import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';

import { colors } from '@/constants/brand';
import { READ_INK, READ_LINE, READ_SIZE } from '@/constants/reading';
import { Markup } from '@/components/textbook/markup';
import { BORDER, kicker } from '@/components/textbook/theme';
import type { Block } from '@/lib/textbooks';

type Hook = Extract<Block, { t: 'hook' }>;
type Think = Extract<Block, { t: 'think' }>;
type Def = Extract<Block, { t: 'def' }>;

/**
 * THE OPENERS, for the reader pilot (see pilot.ts): the exam note, "think
 * about it this way" and the definition.
 *
 * THE EXAM NOTE stays one per chapter, on topic 1, as the chapters write it:
 * a closed row, "Why this chapter matters in the exam", that opens to every
 * topic's section, each set like a stacked table row (its number and name in
 * SemiBold, the note under it). Chosen over showing each topic its own
 * section.
 *
 * THINK AND DEFINITION. The analogy is marked by a grey rule down its left;
 * the definition sits in the formula card's card with its term as the title,
 * because a definition is a thing to keep, like a formula. Chosen over both
 * plain, and both ruled.
 */
type Scales = { scale: (n: number) => number; type: (n: number) => number };

const SECTION = /<b>\s*(\d{2})\s*·\s*([^<]*)<\/b>\s*(?:<br\s*\/?>)?/i;

/** The briefing's sections, or null when it does not split one per topic. */
export function examSections(hook: Hook, topicCount: number): { n: string; title: string; html: string }[] | null {
  const parts = hook.html.split(new RegExp(SECTION.source, 'gi'));
  const out: { n: string; title: string; html: string }[] = [];
  for (let i = 1; i + 2 < parts.length + 1; i += 3) {
    // Sections end in the blank line that separated them: "<br><br>".
    const html = (parts[i + 2] ?? '').replace(/(\s*<br\s*\/?>\s*)+$/i, '').trim();
    out.push({ n: parts[i], title: parts[i + 1].trim(), html });
  }
  return out.length === topicCount ? out : null;
}

function capitalise(html: string): string {
  return html.replace(/^(\s*(?:<[^>]+>\s*)*)([a-z])/, (_, pre: string, ch: string) => pre + ch.toUpperCase());
}

function useRead({ scale, type }: Scales) {
  const s = makeStyles(scale, type);
  const read = (html: string, style?: StyleProp<TextStyle>, key?: number) => (
    <Markup key={key} html={html} size={type(READ_SIZE)} style={[s.read, style]} look="pilot" />
  );
  return { s, read };
}

/** The whole briefing, closed by default, on topic 1. */
export function PilotExamBriefing({
  hook,
  topicCount,
  open,
  onToggle,
  scale,
  type,
}: { hook: Hook; topicCount: number; open: boolean; onToggle: () => void } & Scales) {
  const { s, read } = useRead({ scale, type });
  const sections = examSections(hook, topicCount);
  return (
    <View style={s.card0}>
      <Pressable
        onPress={onToggle}
        style={({ pressed }) => [s.row, pressed && s.pressed]}
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}>
        <Text style={[s.read, s.medium, s.grow]}>Why this chapter matters in the exam</Text>
        <Text style={s.chev}>{open ? '−' : '+'}</Text>
      </Pressable>
      {open && (
        <View style={s.briefBody}>
          {sections
            ? sections.map((sec, i) => (
                <View key={i} style={[s.section, i > 0 && s.hair]}>
                  {read(`${sec.n} · ${sec.title}`, s.semi)}
                  {read(sec.html)}
                </View>
              ))
            : read(hook.html)}
        </View>
      )}
    </View>
  );
}

export function PilotThink({ block, scale, type }: { block: Think } & Scales) {
  const { s, read } = useRead({ scale, type });
  return (
    <View style={s.ruleGrey}>
      <Text style={[kicker(type), s.labelGap]}>think about it this way</Text>
      {read(capitalise(block.html))}
    </View>
  );
}

export function PilotDefinition({ block, scale, type }: { block: Def } & Scales) {
  const { s, read } = useRead({ scale, type });
  return (
    <View style={s.card}>
      <Text style={kicker(type)}>definition</Text>
      <Markup html={block.term} size={type(17)} style={s.term} look="pilot" />
      {read(block.html, s.defBody)}
    </View>
  );
}

function makeStyles(scale: (n: number) => number, type: (n: number) => number) {
  return StyleSheet.create({
    grow: { flex: 1 },
    pressed: { opacity: 0.5 },
    read: { fontFamily: 'Onest_400Regular', fontSize: type(READ_SIZE), lineHeight: type(READ_LINE), color: READ_INK },
    medium: { fontFamily: 'Onest_500Medium' },
    semi: { fontFamily: 'Onest_600SemiBold' },
    labelGap: { marginBottom: scale(6) },
    card: {
      backgroundColor: colors.readingCard,
      borderWidth: 1,
      borderColor: BORDER,
      borderRadius: scale(12),
      padding: scale(16),
    },
    card0: {
      backgroundColor: colors.readingCard,
      borderWidth: 1,
      borderColor: BORDER,
      borderRadius: scale(12),
      overflow: 'hidden',
    },
    row: { flexDirection: 'row', alignItems: 'center', gap: scale(10), minHeight: scale(52), paddingHorizontal: scale(16) },
    chev: { fontFamily: 'Onest_500Medium', fontSize: type(20), color: colors.faint },
    briefBody: { paddingHorizontal: scale(16), paddingBottom: scale(8), borderTopWidth: 1, borderTopColor: 'rgba(28,26,22,.08)' },
    section: { paddingVertical: scale(12), gap: scale(2) },
    hair: { borderTopWidth: 1, borderTopColor: 'rgba(28,26,22,.08)' },
    ruleGrey: { borderLeftWidth: 2, borderLeftColor: 'rgba(28,26,22,.14)', paddingLeft: scale(14) },
    term: {
      fontFamily: 'Onest_700Bold',
      fontSize: type(17),
      lineHeight: type(24),
      letterSpacing: type(-0.2),
      color: READ_INK,
      marginTop: scale(2),
    },
    defBody: { marginTop: scale(6) },
  });
}

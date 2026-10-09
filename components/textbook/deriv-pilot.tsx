import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';

import { colors } from '@/constants/brand';
import { READ_GREY, READ_INK, READ_LINE, READ_SIZE } from '@/constants/reading';
import { Markup } from '@/components/textbook/markup';
import { BORDER, kicker } from '@/components/textbook/theme';
import { labelCase } from '@/lib/label-case';
import type { Block } from '@/lib/textbooks';
import { hapticSwitched } from '@/lib/haptics';

type Deriv = Extract<Block, { t: 'deriv' }>;

/**
 * THE DERIVATION, for the reader pilot (see pilot.ts). 395 across the
 * chapters, 5 steps typical: an equation line and the reason for it.
 *
 * Opens like the formula card (a "derivation" label and the block's title in
 * bold), with the equations in the page's reading size and only the maths in
 * serif italic.
 *
 * ONE STEP AT A TIME. The card shows the first step, its equation and the
 * reason for it, and a "Next step · 2 of 5" button; each tap adds the next,
 * the way a teacher works one on the board, so a student can try to predict
 * the line before seeing it. Chosen over tap-to-open lines (the current
 * reader) and every step shown at once.
 */
/** "DERIVATION · BUILDING A UNIT OUT OF CONSTANTS, TAP A LINE" → "Building a unit out of constants". */
export function derivTitle(kickerText: string): string {
  const parts = kickerText.split(' · ');
  let raw = parts.length > 1 && /^(derivation|deriv\w*)$/i.test(parts[0].trim()) ? parts.slice(1).join(' · ') : kickerText;
  raw = raw.replace(/,\s*tap[^,]*$/i, '');
  const lower = labelCase(raw);
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export function PilotDeriv({
  block,
  shown,
  onShow,
  scale,
  type,
}: {
  block: Deriv;
  /** How many steps are on screen, kept by the reader so it survives a topic switch. */
  shown: number;
  onShow: (n: number) => void;
  scale: (n: number) => number;
  type: (n: number) => number;
}) {
  const s = makeStyles(scale, type);
  const read = (html: string, style?: StyleProp<TextStyle>) => (
    <Markup html={html} size={type(READ_SIZE)} style={[s.read, style]} look="pilot" />
  );
  const head = (
    <>
      <Text style={kicker(type)}>derivation</Text>
      <Text style={s.title}>{derivTitle(block.kicker)}</Text>
    </>
  );
  const last = block.steps.length - 1;

  return (
      <View style={s.card}>
        {head}
        <View style={s.stepList}>
          {block.steps.slice(0, shown).map((step, i) => (
            <View key={i} style={[s.stepItem, i > 0 && s.hair]}>
              <View style={s.eqRow}>
                <Text style={s.num}>{i + 1}</Text>
                {read(step.eq, [s.eq, s.grow])}
              </View>
              {read(step.why, s.whyIndent)}
            </View>
          ))}
        </View>
        {shown <= last ? (
          <Pressable onPress={() => {
              hapticSwitched();
              onShow(shown + 1);
            }} style={({ pressed }) => [s.button, pressed && s.pressed]}>
            <Text style={s.buttonText}>{`Next step · ${shown + 1} of ${block.steps.length}`}</Text>
          </Pressable>
        ) : (
          <Pressable onPress={() => onShow(1)} style={({ pressed }) => [s.again, pressed && s.pressed]}>
            <Text style={s.againText}>Start again</Text>
          </Pressable>
        )}
      </View>
    );
}

function makeStyles(scale: (n: number) => number, type: (n: number) => number) {
  return StyleSheet.create({
    grow: { flex: 1 },
    pressed: { opacity: 0.5 },
    read: { fontFamily: 'Onest_400Regular', fontSize: type(READ_SIZE), lineHeight: type(READ_LINE), color: READ_INK },
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
    hair: { borderTopWidth: 1, borderTopColor: 'rgba(28,26,22,.08)' },
    /** The equation a step up from the reason under it. */
    eq: { fontSize: type(16), lineHeight: type(26) },
    whyIndent: { color: READ_GREY, paddingLeft: scale(26), marginTop: scale(4) },
    num: {
      width: scale(16),
      fontFamily: 'Onest_600SemiBold',
      fontSize: type(13),
      lineHeight: type(26),
      color: colors.faint,
    },
    eqRow: { flexDirection: 'row', alignItems: 'flex-start', gap: scale(10) },
          stepList: { marginTop: scale(12) },
    stepItem: { paddingVertical: scale(12) },
    button: {
      marginTop: scale(4),
      height: scale(48),
      borderRadius: scale(15),
      borderWidth: 1.5,
      borderColor: colors.ink,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: { fontFamily: 'Onest_600SemiBold', fontSize: type(15), color: colors.ink },
    again: { marginTop: scale(4), alignSelf: 'flex-start', paddingVertical: scale(6) },
    againText: { fontFamily: 'Onest_500Medium', fontSize: type(14), color: colors.faint },
  });
}

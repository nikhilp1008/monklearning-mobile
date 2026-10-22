import { Fragment, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Markup, STIX } from '@/components/textbook/markup';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import type { FormulaCard as Card, FormulaItem } from '@/lib/revise/formula-cards';
import { boxes, hasFraction, type Box, type Part } from '@/lib/revise/formula-layout';

/**
 * ONE FORMULA CARD, the system agreed for every formula in every subject.
 *
 *   One typeface, STIX Two, and two sizes: 19 for the name and the formula,
 *   16 for everything that explains them. Italic only for maths letters.
 *   One left edge. A formula breaks only before an operator (the content's
 *   spaces arrive non-breaking, see lib/revise/formula-cards.ts), a fraction
 *   written in words is built up, and a rule written as a sentence is text.
 *   Name, then the formulas, then a hairline and what they mean. No topic, no
 *   number, no heading over the meaning: the hairline is the divider.
 */
const NAME = 19, NAME_LINE = 25, EXPR = 19, EXPR_LINE = 27, TEXT = 16, TEXT_LINE = 23;
/** A fraction's two lines and its bar. */
const FRAC_LINE = 21, FRAC_H = FRAC_LINE * 2 + 3;

/**
 * A meaning's symbol, set so it cannot break: its spaces are non-breaking
 * ("x and y" is one symbol), and it ends on a hair space. Android sizes a
 * text box to its measured width and then lays it out again in a frame that
 * can round a pixel narrower; a trailing space hangs past the edge instead of
 * counting, so that pixel no longer pushes the last letter onto a new line.
 */
export const symbolHtml = (sym: string) => `${sym.replace(/ /g, '\u00a0')}\u200a`;

/** A trailing hair space: room for the pixel Android can lose between measuring a text and drawing it (see symbolHtml). */
const SLACK = '\u200a';

/**
 * Room above a text's first line, given without moving it: padding inside the
 * text, the same taken back by a negative margin. Android clips a text's
 * glyphs at the text's own top, and a vector arrow over a tall italic letter
 * (dl⃗, and b⃗, d⃗, f⃗, h⃗, k⃗ the same) rises past it: in a fraction's numerator
 * (16 on a 21 line) and in a meaning's symbol the arrow over l lost its head
 * to a flat bar (Android review of Physics 12 Ch 4, 2026-10-22: Biot–Savart,
 * Ampère's "∮ B⃗ · dl⃗"). The same fix as a diagram's laid-over labels
 * (components/revise/diagram-card.tsx); the line spacing does not change.
 */
/**
 * In ems. A first line's top sits A + (line − A − D)/2 above its baseline
 * (React Native's CustomLineHeightSpan; STIX's A and D are 0.762 and 0.238),
 * 0.92 em on a fraction's 16-on-21 line, and the arrow over a tall letter
 * reaches past 1 em.
 */
const ARROW_ROOM = 0.35;
export const headroom = (size: number) => ({ paddingTop: size * ARROW_ROOM, marginTop: -size * ARROW_ROOM });

/** A bracket as tall as a fraction, for √( … ) around one. */
function TallBracket({ ch, scale }: { ch: string; scale: (n: number) => number }) {
  return (
    <View style={{ height: scale(FRAC_H), justifyContent: 'center' }}>
      <Text style={[s.text, { fontSize: scale(EXPR), lineHeight: scale(EXPR_LINE), color: colors.ink, transform: [{ scaleY: 2 }] }]}>{ch}</Text>
    </View>
  );
}

function Fraction({ part, scale, maxWidth }: { part: Extract<Part, { kind: 'frac' }>; scale: (n: number) => number; maxWidth?: number }) {
  // A side with a drawn script is centred by a View, not by textAlign: on
  // Android a drawn script in a centred text was placed as if the text were
  // left-aligned (the n of a ∑ landed on the "1", ² on the g of k_g). A side
  // of plain words may wrap, and centres its own lines.
  const side = (html: string) => {
    const words = !html.includes('<su');
    const text = <Markup html={html + SLACK} size={scale(TEXT)} look="stix" style={[s.text, words && s.center, { fontSize: scale(TEXT), lineHeight: scale(FRAC_LINE), color: colors.ink }, headroom(scale(TEXT))]} />;
    return words ? text : <View style={s.middle}>{text}</View>;
  };
  const frac = (
    <View style={[s.frac, { marginHorizontal: scale(part.tall ? 1 : 4), maxWidth }]}>
      {side(part.top)}
      <View style={s.bar} />
      {side(part.bottom)}
    </View>
  );
  if (!part.tall) return frac;
  return (
    <View style={s.box}>
      <TallBracket ch="(" scale={scale} />
      {frac}
      <TallBracket ch=")" scale={scale} />
    </View>
  );
}

/** Roughly how wide the text sharing a fraction's box is (about 0.45 em a character), and the fraction's margins. */
const besideWidth = (box: Box, size: number) =>
  box.reduce((w, p) => (p.kind === 'text' ? w + p.html.replace(/<[^>]+>/g, '').replace(/\u2060/g, '').length * size * 0.45 : w + size * 0.6), 0);

function Formula({ item, scale }: { item: FormulaItem; scale: (n: number) => number }) {
  const bx = useMemo(() => (hasFraction(item.expr) ? boxes(item.expr) : null), [item.expr]);
  // The row's width, once laid out: a fraction is capped to it, less the text
  // that shares its box, so a fraction of long words wraps inside the card.
  // (Not by letting the box shrink: Android then drew the text beside the
  // fraction a pixel narrower than it measured, and "LC =" broke in two.)
  const [rowWidth, setRowWidth] = useState(0);
  if (item.words) return <Markup html={item.expr} size={scale(TEXT)} look="stix" style={[s.text, { fontSize: scale(TEXT), lineHeight: scale(TEXT_LINE), color: colors.ink }]} />;
  const exprStyle = [s.text, { fontSize: scale(EXPR), lineHeight: scale(EXPR_LINE), color: colors.ink }];
  if (!bx) return <Markup html={item.expr} size={scale(EXPR)} look="stix" style={exprStyle} />;
  // Boxes that never break inside (see lib/revise/formula-layout.ts). Each
  // ends on the space that separated it from the next, so the gaps are a
  // space wide; the last ends on a hair space of slack.
  return (
    <View style={s.fracRow} onLayout={(e) => setRowWidth(e.nativeEvent.layout.width)}>
      {bx.map((box, k) => {
        const end = k === bx.length - 1 ? SLACK : ' ';
        const text = (html: string, last: boolean, key?: number) => <Markup key={key} html={html + (last ? end : SLACK)} size={scale(EXPR)} look="stix" style={exprStyle} />;
        if (box.length === 1 && box[0].kind === 'text') return <Fragment key={k}>{text(box[0].html, true)}</Fragment>;
        return (
          <View key={k} style={s.box}>
            {box.map((p, j) => (p.kind === 'text' ? text(p.html, j === box.length - 1, j) : <Fraction key={j} part={p} scale={scale} maxWidth={rowWidth ? rowWidth - besideWidth(box, scale(EXPR)) : undefined} />))}
          </View>
        );
      })}
    </View>
  );
}

export function FormulaCard({ card }: { card: Card }) {
  const { scale } = useScale();
  return (
    <ScrollView style={s.scroll} contentContainerStyle={{ padding: scale(20), paddingBottom: scale(24) }} showsVerticalScrollIndicator={false}>
      {/* The name gets the same room: an arrow over a tall letter in it (the
          l⃗ of "Motional emf (rod, v⃗, B⃗, l⃗ …)") lost its head at the name's
          top, 19 on a 25 line putting it 0.92 em above the baseline (Android
          review of Physics 12 Ch 6, 2026-10-22). */}
      <Markup html={card.name} size={scale(NAME)} look="stix" style={[{ fontFamily: STIX.semibold, fontSize: scale(NAME), lineHeight: scale(NAME_LINE), color: colors.ink }, headroom(scale(NAME))]} />
      <View style={[s.part, { marginTop: scale(16), paddingTop: scale(16), gap: scale(12) }]}>
        {card.items.map((it, i) => (
          <View key={i} style={{ gap: scale(2) }}>
            {!!it.label && <Markup html={it.label} size={scale(TEXT)} look="stix" style={[s.text, { fontSize: scale(TEXT), lineHeight: scale(TEXT_LINE), color: colors.slate }]} />}
            {/* A lead-in kept as a line of its own has no formula under it. */}
            {!!it.expr && <Formula item={it} scale={scale} />}
          </View>
        ))}
      </View>
      {/* No meanings, no hairline: an empty section drew a rule under nothing. */}
      {card.meaning.length > 0 && (
        <View style={[s.part, { marginTop: scale(16), paddingTop: scale(16), gap: scale(8) }]}>
          {card.meaning.map((m, i) => (
            <View key={i} style={[s.row, { gap: scale(12) }]}>
              {m.sym ? (
                // The symbol sizes to itself and never wraps; the meaning beside
                // it wraps instead. On Android a symbol measured to the pixel was
                // laid out a pixel narrower and broke: a⃗ over its "t", "x and"
                // with the "y" lost. symbolHtml gives it a hanging space of slack.
                <View style={s.sym}>
                  <Markup html={symbolHtml(m.sym)} size={scale(TEXT)} look="stix" style={[s.text, { fontSize: scale(TEXT), lineHeight: scale(TEXT_LINE), color: colors.ink }, headroom(scale(TEXT))]} />
                </View>
              ) : (
                <Fragment>
                  <View style={[s.bullet, { marginTop: scale(9) }]} />
                </Fragment>
              )}
              <Markup html={m.text} size={scale(TEXT)} look="stix" style={[s.text, s.grow, { fontSize: scale(TEXT), lineHeight: scale(TEXT_LINE), color: '#4A463D' }]} />
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  scroll: { flex: 1 },
  text: { fontFamily: STIX.regular },
  center: { textAlign: 'center' },
  grow: { flex: 1, minWidth: 0 },
  part: { borderTopWidth: 1, borderTopColor: 'rgba(28,26,22,.08)' },
  row: { flexDirection: 'row', alignItems: 'flex-start' },
  bullet: { width: 5, height: 5, borderRadius: 3, backgroundColor: colors.marigold },
  fracRow: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' },
  box: { flexDirection: 'row', alignItems: 'center' },
  frac: { alignItems: 'stretch' },
  middle: { alignItems: 'center' },
  sym: { flexShrink: 0 },
  bar: { height: 1, backgroundColor: colors.ink, marginVertical: 1 },
});

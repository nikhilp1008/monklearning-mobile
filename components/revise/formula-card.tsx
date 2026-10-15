import { Fragment, useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Markup, STIX } from '@/components/textbook/markup';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import type { FormulaCard as Card, FormulaItem } from '@/lib/revise/formula-cards';

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

/** Words in brackets on either side of a slash become a stacked fraction; short ones (ds/r) stay inline. */
const FRACTIONS = [
  /\(([^()]*\s[^()]*)\)\/\(([^()]*)\)/,
  /([A-Za-z]+)\/\(([^()]*\s[^()]*)\)/,
  /\(([^()]*\s[^()]*)\)\/(<i>[^<]+<\/i>|[A-Za-z0-9]+)/,
];
type Seg = { kind: 'text'; html: string } | { kind: 'frac'; top: string; bottom: string };
function segments(expr: string): Seg[] {
  const out: Seg[] = [];
  let rest = expr;
  for (;;) {
    let best: RegExpExecArray | null = null;
    for (const re of FRACTIONS) {
      const m = re.exec(rest);
      if (m && (!best || m.index < best.index)) best = m;
    }
    if (!best) break;
    if (best.index > 0) out.push({ kind: 'text', html: rest.slice(0, best.index) });
    out.push({ kind: 'frac', top: best[1], bottom: best[2] });
    rest = rest.slice(best.index + best[0].length);
  }
  if (rest) out.push({ kind: 'text', html: rest });
  return out;
}

function Formula({ item, scale }: { item: FormulaItem; scale: (n: number) => number }) {
  const segs = useMemo(() => segments(item.expr), [item.expr]);
  if (item.words) return <Markup html={item.expr} size={scale(TEXT)} look="stix" style={[s.text, { fontSize: scale(TEXT), lineHeight: scale(TEXT_LINE), color: colors.ink }]} />;
  const exprStyle = [s.text, { fontSize: scale(EXPR), lineHeight: scale(EXPR_LINE), color: colors.ink }];
  if (segs.length === 1 && segs[0].kind === 'text') return <Markup html={segs[0].html} size={scale(EXPR)} look="stix" style={exprStyle} />;
  return (
    <View style={s.fracRow}>
      {segs.map((sg, i) =>
        sg.kind === 'text' ? (
          <Markup key={i} html={sg.html} size={scale(EXPR)} look="stix" style={exprStyle} />
        ) : (
          <View key={i} style={[s.frac, { marginHorizontal: scale(4) }]}>
            <Markup html={sg.top} size={scale(TEXT)} look="stix" style={[s.text, s.center, { fontSize: scale(TEXT), lineHeight: scale(21), color: colors.ink }]} />
            <View style={s.bar} />
            <Markup html={sg.bottom} size={scale(TEXT)} look="stix" style={[s.text, s.center, { fontSize: scale(TEXT), lineHeight: scale(21), color: colors.ink }]} />
          </View>
        )
      )}
    </View>
  );
}

export function FormulaCard({ card }: { card: Card }) {
  const { scale } = useScale();
  return (
    <ScrollView style={s.scroll} contentContainerStyle={{ padding: scale(20), paddingBottom: scale(24) }} showsVerticalScrollIndicator={false}>
      <Markup html={card.name} size={scale(NAME)} look="stix" style={{ fontFamily: STIX.semibold, fontSize: scale(NAME), lineHeight: scale(NAME_LINE), color: colors.ink }} />
      <View style={[s.part, { marginTop: scale(16), paddingTop: scale(16), gap: scale(12) }]}>
        {card.items.map((it, i) => (
          <View key={i} style={{ gap: scale(2) }}>
            {!!it.label && <Markup html={it.label} size={scale(TEXT)} look="stix" style={[s.text, { fontSize: scale(TEXT), lineHeight: scale(TEXT_LINE), color: colors.slate }]} />}
            <Formula item={it} scale={scale} />
          </View>
        ))}
      </View>
      <View style={[s.part, { marginTop: scale(16), paddingTop: scale(16), gap: scale(8) }]}>
        {card.meaning.map((m, i) => (
          <View key={i} style={[s.row, { gap: scale(12) }]}>
            {m.sym ? (
              <Markup html={m.sym} size={scale(TEXT)} look="stix" style={[s.text, { fontSize: scale(TEXT), lineHeight: scale(TEXT_LINE), color: colors.ink }]} />
            ) : (
              <Fragment>
                <View style={[s.bullet, { marginTop: scale(9) }]} />
              </Fragment>
            )}
            <Markup html={m.text} size={scale(TEXT)} look="stix" style={[s.text, s.grow, { fontSize: scale(TEXT), lineHeight: scale(TEXT_LINE), color: '#4A463D' }]} />
          </View>
        ))}
      </View>
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
  frac: { alignItems: 'stretch' },
  bar: { height: 1, backgroundColor: colors.ink, marginVertical: 1 },
});

import { useMemo, useState } from 'react';
import { LayoutChangeEvent, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { Markup, STIX } from '@/components/textbook/markup';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import type { Diagram } from '@/lib/diagrams/physics-11-01';
import { hapticSwitched } from '@/lib/haptics';

/**
 * A drawing at the width it is given, keeping its own proportions; `square`
 * fits it inside a square instead. Shapes and tags come from the SVG; the
 * maths text is set by the app's own text engine and laid exactly over it,
 * because react-native-svg mis-spaces a line that mixes STIX's regular and
 * italic faces (see lib/diagrams/kit.ts).
 */
export function DiagramImage({ d, caseIndex = 0, square = false }: { d: Diagram; caseIndex?: number; square?: boolean }) {
  const [box, setBox] = useState(0);
  const sketch = useMemo(() => d.draw(d.cases[caseIndex]), [d, caseIndex]);
  const xml = useMemo(() => sketch.svg(false), [sketch]);
  const ratio = sketch.height / sketch.w;
  const w = square && ratio > 1 ? box / ratio : box;
  const k = w / sketch.w;
  return (
    <View onLayout={(e: LayoutChangeEvent) => setBox(e.nativeEvent.layout.width)} accessibilityRole="image" accessibilityLabel={d.name} style={square ? st.centred : undefined}>
      {w > 0 && (
        <View style={{ width: w, height: w * ratio }}>
          <SvgXml xml={xml} width={w} height={w * ratio} />
          {sketch.texts.map((t, i) => {
            const size = t.size * k;
            // A wide box around the anchor point, aligned the way the SVG anchors it;
            // the top sits one ascent (STIX: 0.76 em) above the baseline.
            const span = 400 * k;
            const left = t.anchor === 'middle' ? t.x * k - span / 2 : t.anchor === 'end' ? t.x * k - span : t.x * k;
            return (
              <View key={i} pointerEvents="none" style={{ position: 'absolute', left, top: t.y * k - size * 0.76, width: span }}>
                <Markup
                  html={t.html}
                  size={size}
                  look="stix"
                  style={{ fontFamily: t.semibold ? STIX.semibold : STIX.regular, fontSize: size, lineHeight: size, color: t.color, textAlign: t.anchor === 'middle' ? 'center' : t.anchor === 'end' ? 'right' : 'left' }}
                />
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}

/**
 * ONE DIAGRAM ON ITS PAGE: the name, the drawing, its cases as chips, and the
 * caption for the case in view. The same parts as a formula card: the name in
 * STIX Two SemiBold 19, the caption in STIX Two 16. Chips keep the app's look,
 * a fine outline that turns ink when chosen; a diagram with one case has none.
 */
export function DiagramCard({ d }: { d: Diagram }) {
  const { scale } = useScale();
  const [c, setC] = useState(0);
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: scale(20), paddingBottom: scale(24) }} showsVerticalScrollIndicator={false}>
      <Text style={{ fontFamily: STIX.semibold, fontSize: scale(19), lineHeight: scale(25), color: colors.ink }}>{d.name}</Text>
      <View style={{ marginTop: scale(14) }}>
        <DiagramImage d={d} caseIndex={c} />
      </View>
      {d.cases.length > 1 && (
        <View style={[st.chips, { gap: scale(8), marginTop: scale(14) }]}>
          {d.cases.map((k, j) => (
            <Pressable
              key={k.chip}
              onPress={() => { if (j !== c) { hapticSwitched(); setC(j); } }}
              accessibilityRole="button"
              accessibilityState={{ selected: j === c }}
              style={[st.chip, { minHeight: scale(36), paddingHorizontal: scale(14), borderRadius: scale(12) }, j === c && st.chipOn]}>
              <Text style={[st.chipText, { fontSize: scale(13) }, j === c && st.chipTextOn]}>{k.chip}</Text>
            </Pressable>
          ))}
        </View>
      )}
      <Markup html={d.cases[c].cap} size={scale(16)} look="stix" style={{ marginTop: scale(12), fontFamily: STIX.regular, fontSize: scale(16), lineHeight: scale(23), color: colors.slate }} />
    </ScrollView>
  );
}

const st = StyleSheet.create({
  centred: { alignItems: 'center' },
  chips: { flexDirection: 'row', flexWrap: 'wrap' },
  chip: { borderWidth: 1, borderColor: 'rgba(28,26,22,.16)', justifyContent: 'center', backgroundColor: '#FFFFFF' },
  chipOn: { borderWidth: 1.5, borderColor: colors.ink },
  chipText: { fontFamily: 'Onest_600SemiBold', color: colors.faint },
  chipTextOn: { color: colors.ink },
});

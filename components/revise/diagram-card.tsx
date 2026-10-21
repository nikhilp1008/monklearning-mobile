import { useMemo, useState } from 'react';
import { LayoutChangeEvent, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { Markup, STIX } from '@/components/textbook/markup';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import type { Diagram } from '@/lib/diagrams/types';
import { hapticSwitched } from '@/lib/haptics';

/**
 * A drawing at the width it is given, keeping its own proportions; `square`
 * fits it inside a square instead. Shapes and tags come from the SVG; the
 * maths text is set by the app's own text engine and laid exactly over it,
 * because react-native-svg mis-spaces a line that mixes STIX's regular and
 * italic faces (see lib/diagrams/kit.ts).
 */
export function DiagramImage({ d, caseIndex = 0, square = false, thumb = false }: { d: Diagram; caseIndex?: number; square?: boolean; thumb?: boolean }) {
  const [box, setBox] = useState(0);
  const sketch = useMemo(() => d.draw(d.cases[caseIndex]), [d, caseIndex]);
  // A thumbnail draws its labels inside the SVG: one view instead of dozens of
  // laid-over texts. A grid of fourteen full overlays froze Android ("isn't
  // responding"), and labels this small are not read anyway.
  const xml = useMemo(() => sketch.svg(thumb), [sketch, thumb]);
  const ratio = sketch.height / sketch.w;
  const w = square && ratio > 1 ? box / ratio : box;
  const k = w / sketch.w;
  return (
    <View onLayout={(e: LayoutChangeEvent) => setBox(e.nativeEvent.layout.width)} accessibilityRole="image" accessibilityLabel={d.name} style={square ? st.centred : undefined}>
      {w > 0 && (
        <View style={{ width: w, height: w * ratio }}>
          <SvgXml xml={xml} width={w} height={w * ratio} />
          {!thumb && sketch.texts.map((t, i) => {
            const size = t.size * k;
            // A wide box around the anchor point, aligned the way the SVG anchors it;
            // the top sits one ascent (STIX: 0.76 em) above the baseline.
            const span = 400 * k;
            const left = t.anchor === 'middle' ? t.x * k - span / 2 : t.anchor === 'end' ? t.x * k - span : t.x * k;
            // Room above the line: Android clips a glyph at the text's own top, which
            // cut the vector arrow over a tall letter (E⃗, d⃗) down to a small tick.
            const room = size * 0.4;
            return (
              <View key={i} pointerEvents="none" style={{ position: 'absolute', left, top: t.y * k - size * 0.76 - room, width: span }}>
                <Markup
                  html={t.html}
                  size={size}
                  look="stix"
                  style={{ fontFamily: t.semibold ? STIX.semibold : STIX.regular, fontSize: size, lineHeight: size, paddingTop: room, color: t.color, textAlign: t.anchor === 'middle' ? 'center' : t.anchor === 'end' ? 'right' : 'left' }}
                />
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}

/** Units a caption's numbers carry ("20 m/s", "+0.04 cm", "30°"). */
const UNIT = '(?:km|cm|mm|nm|μm|m|kg|g|mg|s|ms|min|h|N|kN|J|kJ|W|kW|Pa|kPa|atm|Hz|K|°C|°|rad|mol|A|V|eV|L|mL|cal|kcal|%)';
const TRIG = '(?:sin|cos|tan|cot|sec|cosec)';
const NB = '\u00a0';
const LETTER = '[A-Za-zΑ-Ωα-ωℓ]';
/** One italic letter (with its arrow or prime), Δ and a letter, or a letter and its subscript: too short to end a line on. */
const SYM = `Δ?<i>Δ?${LETTER}\u20d7?′?</i>′?(?:<sub>(?:<i>)?[^<]{1,3}(?:</i>)?</sub>)?`;
/** Where an operand may begin: the start, a space, an opening bracket. */
const EDGE = `(^|[\\s(${NB}])`;

/**
 * A caption's line breaks, set at display time rather than in every caption
 * (Android review, 2026-10-20): a number keeps its unit ("20|m/s" was split),
 * a unit or ratio never breaks at its slash ("m/|s"), a line never ends on
 * =, −, +, ×, →, ⇒, ≈ or a comparison, and "cos θ" stays with its angle and
 * its coefficient (B cos θ). A short left side stays with its sign ("x = …",
 * "r → ∞"), a short sum or product never splits ("C = A × B", "(R₂T₁ + R₁T₃)",
 * "½(t)(at)", "T Δℓ/R"), and a word keeps its number ("end 1", "height H").
 */
export function captionBreaks(html: string): string {
  return html
    .replace(new RegExp(`(\\d) (${UNIT})(?![A-Za-z])`, 'g'), '$1\u00a0$2')
    .replace(/([^<\s])\/(?=[^\s>])/g, '$1/\u2060')
    .replace(/\)\(/g, ')\u2060(')
    .replace(/ ([=−+×→⇒≈<>≤≥]) /g, ' $1\u00a0')
    // "x = …", "Δv = …", "fₙ = …", "r → ∞": the short left side keeps its sign
    .replace(new RegExp(`${EDGE}(${SYM}) (?=[=≈→⇒<>≤≥]${NB})`, 'g'), '$1$2\u00a0')
    // "A × B", "v₂ − v₁", "K + U": one symbol each side
    .replace(new RegExp(`${EDGE}(${SYM}) ([×−+])${NB}(?=${SYM}(?!${LETTER}|<i>|\\())`, 'g'), '$1$2\u00a0$3\u00a0')
    // a short bracket is one piece: "(R₂T₁ + R₁T₃)", "φ(x − vt)"
    .replace(/\(([^()]*)\)/g, (m: string, inner: string) => (inner.replace(/<[^>]+>/g, '').length <= 24 ? m.replace(new RegExp(` ([+−×])${NB}`, 'g'), `${NB}$1${NB}`) : m))
    // two maths runs side by side are one product: "T Δℓ/R", "μ Δℓ v²/R", "v dv/dx"
    .replace(/(<\/i>|<\/sub>|<\/sup>) (?=(?:Δ|d)?<i>)/g, '$1\u00a0')
    // a word and its number or letter: "end 1", "height H"
    .replace(new RegExp(`${EDGE}([A-Za-z]{2,}) (?=\\d|<i>${LETTER}</i>(?:[\\s,.:;)]|$))`, 'g'), '$1$2\u00a0')
    .replace(new RegExp(`\\b(${TRIG}) `, 'g'), '$1\u00a0')
    .replace(new RegExp(`(</i>|</sub>|</sup>|\\)) (?=${TRIG}\\b)`, 'g'), '$1\u00a0');
}

/**
 * ONE DIAGRAM ON ITS PAGE: the name, the drawing, its cases as chips, and the
 * caption for the case in view. The same parts as a formula card: the name in
 * STIX Two SemiBold 19, the caption in STIX Two 16. Chips keep the app's look,
 * a fine outline that turns ink when chosen; a diagram with one case has none.
 */
export function DiagramCard({ d }: { d: Diagram }) {
  const { scale } = useScale();
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: scale(20), paddingBottom: scale(24) }} showsVerticalScrollIndicator={false}>
      <DiagramBody d={d} />
    </ScrollView>
  );
}

/**
 * The card's contents without its page: the same diagram, set inside a reading
 * page. `type` is the reader's text size: inside a chapter the name and caption
 * follow it, while the drawing (its labels included) and the chips keep their
 * size, so a larger text never pushes a figure out of its frame.
 */
export function DiagramBody({ d, type }: { d: Diagram; type?: (n: number) => number }) {
  const { scale } = useScale();
  const t = type ?? scale;
  const [c, setC] = useState(0);
  return (
    <View>
      <Text style={{ fontFamily: STIX.semibold, fontSize: t(19), lineHeight: t(25), color: colors.ink }}>{d.name}</Text>
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
      <Markup html={captionBreaks(d.cases[c].cap)} size={t(16)} look="stix" style={{ marginTop: scale(12), fontFamily: STIX.regular, fontSize: t(16), lineHeight: t(23), color: colors.slate }} />
    </View>
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

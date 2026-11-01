import { LinearGradient } from 'expo-linear-gradient';
import { useMemo, useRef, useState } from 'react';
import { LayoutChangeEvent, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SvgAst, parse } from 'react-native-svg';

import { Markup, STIX } from '@/components/textbook/markup';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import type { Diagram } from '@/lib/diagrams/types';
import { titleBreaks } from '@/lib/revise/formula-cards';
import { hapticSwitched } from '@/lib/haptics';
import { hasOverline } from '@/lib/overline';
import { decodeTextNodes } from '@/lib/widgets/svg-parse';

/**
 * The drawing's SVG, parsed with its text decoded. react-native-svg copies the
 * text between tags as it stands, so an escaped "&" (which the XML must carry)
 * drew as "&amp;": "Current &amp; Ohm's law" on the Physics 12 Ch 3 map
 * (Android review, 2026-10-22). The same middleware as the board's figures
 * (lib/widgets/svg-parse.ts). A drawing that will not parse costs that
 * drawing, never the page.
 */
export function diagramAst(xml: string) {
  try {
    return parse(xml, decodeTextNodes);
  } catch (err) {
    console.warn('[diagram-card] could not draw a diagram:', err);
    return null;
  }
}

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
  const ast = useMemo(() => diagramAst(sketch.svg(thumb)), [sketch, thumb]);
  const ratio = sketch.height / sketch.w;
  const w = square && ratio > 1 ? box / ratio : box;
  const k = w / sketch.w;
  return (
    <View onLayout={(e: LayoutChangeEvent) => setBox(e.nativeEvent.layout.width)} accessibilityRole="image" accessibilityLabel={d.name} style={square ? st.centred : undefined}>
      {w > 0 && (
        <View style={{ width: w, height: w * ratio }}>
          {ast && <SvgAst ast={ast} override={{ width: w, height: w * ratio }} />}
          {!thumb && sketch.texts.map((t, i) => {
            const size = t.size * k;
            // A wide box around the anchor point, aligned the way the SVG anchors it;
            // the top sits one ascent (STIX: 0.76 em) above the baseline.
            const span = 400 * k;
            const left = t.anchor === 'middle' ? t.x * k - span / 2 : t.anchor === 'end' ? t.x * k - span : t.x * k;
            // Room above the line: Android clips a glyph at the text's own top, which
            // cut the vector arrow over a tall letter (E⃗, d⃗) down to a small tick.
            const room = size * 0.4;
            // A NOT bar is an inline View in the text (components/textbook/markup.tsx),
            // and on Android an inline View in a centred text is placed as if the
            // text were left-aligned (see the fraction sides, formula-card.tsx). So
            // such a label is aligned by its box instead, sized to itself, with a
            // hair space of slack so it never wraps.
            const boxed = hasOverline(t.html);
            const align = t.anchor === 'middle' ? 'center' : t.anchor === 'end' ? 'right' : 'left';
            return (
              <View key={i} pointerEvents="none" style={{ position: 'absolute', left, top: t.y * k - size * 0.76 - room, width: span, alignItems: boxed ? (t.anchor === 'middle' ? 'center' : t.anchor === 'end' ? 'flex-end' : 'flex-start') : undefined }}>
                <Markup
                  html={boxed ? `${t.html}\u200a` : t.html}
                  size={size}
                  look="stix"
                  style={{ fontFamily: t.semibold ? STIX.semibold : STIX.regular, fontSize: size, lineHeight: size, paddingTop: room, color: t.color, textAlign: boxed ? 'left' : align }}
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
const UNIT = '(?:km|cm|mm|nm|μm|m|kg|g|mg|s|ms|min|h|N|kN|J|kJ|W|kW|Pa|kPa|atm|Hz|K|°C|°|rad|mol|A|mA|μA|V|mV|kV|eV|L|mL|cal|kcal|Ω|kΩ|MΩ|F|μF|nF|pF|T|mT|μT|Wb|C|%)';
const TRIG = '(?:sin|cos|tan|cot|sec|cosec)';
const NB = '\u00a0';
const LETTER = '[A-Za-zΑ-Ωα-ωℓ]';
/** One italic letter (with its arrow or prime), Δ and a letter, or a letter and its subscript: too short to end a line on. */
const SYM = `Δ?<i>Δ?${LETTER}\u20d7?′?</i>′?(?:<sub>(?:<i>)?[^<]{1,3}(?:</i>)?</sub>)?`;
/**
 * A left side as short as one symbol: a ratio of two ("<i>P</i>/<i>Q</i> = …",
 * its slash already joined), or a point or segment named in upright capitals
 * ("DC = 100 − l", "AB = R"). Both were left at a line's end apart from their
 * "=" (Android review of Physics 12 Ch 3, 2026-10-22).
 */
const SHORT_LHS = `${SYM}/\u2060${SYM}|${SYM}|[A-Z]{1,3}`;
/** Where an operand may begin: the start, a space, an opening bracket. */
const EDGE = `(^|[\\s(${NB}])`;

/**
 * A caption's line breaks, set at display time rather than in every caption
 * (Android review, 2026-10-20): a number keeps its unit ("20|m/s" was split),
 * a unit or ratio never breaks at its slash ("m/|s"), a line never ends on
 * =, −, +, ×, →, ⇒, ≈ or a comparison, and "cos θ" stays with its angle and
 * its coefficient (B cos θ). A short left side stays with its sign ("x = …",
 * "r → ∞", "P/Q = …", "DC = …"), a short sum or product never splits
 * ("C = A × B", "(R₂T₁ + R₁T₃)", "½(t)(at)", "T Δℓ/R"), and a word keeps its
 * number ("end 1", "height H").
 */
export function captionBreaks(html: string): string {
  const firstPass = html
    .replace(new RegExp(`(\\d) (${UNIT})(?![A-Za-z])`, 'g'), '$1\u00a0$2')
    .replace(/([^<\s])\/(?=[^\s>])/g, '$1/\u2060')
    .replace(/\)\(/g, ')\u2060(')
    .replace(/ ([=−+×→⇒≈<>≤≥]) /g, ' $1\u00a0')
    // "x = …", "Δv = …", "fₙ = …", "r → ∞": the short left side keeps its sign
    .replace(new RegExp(`${EDGE}(${SHORT_LHS}) (?=[=≈→⇒<>≤≥]${NB})`, 'g'), '$1$2\u00a0');
  // "A × B", "v₂ − v₁", "K + U": one symbol each side. Run until nothing
  // changes: each match consumes the edge before its first symbol, so in a
  // chain, "Q₁ + Q₂ + Q₃", one pass joins only every other pair and the
  // caption broke before the second "+" (Android review of Physics 12 Ch 2,
  // 2026-10-22). The next pass finds the joined term's non-breaking space as
  // its edge and joins the next pair.
  const pair = new RegExp(`${EDGE}(${SYM}) ([×−+])${NB}(?=${SYM}(?!${LETTER}|<i>|\\())`, 'g');
  let joined = firstPass;
  for (let prev = ''; prev !== joined; ) {
    prev = joined;
    joined = joined.replace(pair, '$1$2\u00a0$3\u00a0');
  }
  return joined
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
 * How much of a card's contents, not counting the empty padding under the
 * caption, lies below its visible bottom edge, scrolled `y` down: positive
 * while caption is hidden, zero or less once it is all on the card. (Scrolled
 * to the end, it is minus the padding.)
 */
export const hiddenBelow = (box: number, content: number, y: number, pad: number) => (box > 0 ? content - pad - (y + box) : 0);
/**
 * How much of the caption must be hidden before the card says so, in points:
 * the room under a caption line's ink (23 on 16, so 3.5 of half-leading below
 * the line box's glyphs) plus a point of rounding. Less than that hides no ink.
 */
const FADE_MARGIN = 4;

/**
 * ONE DIAGRAM ON ITS PAGE: the name, the drawing, its cases as chips, and the
 * caption for the case in view. The same parts as a formula card: the name in
 * STIX Two SemiBold 19, the caption in STIX Two 16. Chips keep the app's look,
 * a fine outline that turns ink when chosen; a diagram with one case has none.
 */
export function DiagramCard({ d }: { d: Diagram }) {
  const { scale } = useScale();
  // A drawing with a tall case (a third panel, a long caption) runs past the
  // card, and its last caption line was cut at the card's edge with nothing to
  // say there was more (Android review of Physics 12 Ch 5, fig. 5.5 (c)). So
  // while there is more below, the bottom fades to the card's white and the
  // scroll bar shows; scrolled to the end, the fade goes.
  //
  // "More below" means caption hidden, not padding: once Fig 5.5 (c) was
  // shortened its content ran only 9 px past the card, all of it the empty
  // padding under the caption, and the fade greyed a last line that was fully
  // on the card (Android re-check, 2026-10-22). See hiddenBelow.
  const view = useRef({ box: 0, content: 0, y: 0 });
  const [more, setMore] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const pad = scale(24), margin = scale(FADE_MARGIN);
  const measure = () => {
    const { box, content, y } = view.current;
    setOverflows(hiddenBelow(box, content, 0, pad) > margin);
    setMore(hiddenBelow(box, content, y, pad) > margin);
  };
  return (
    <View style={st.page}>
      <ScrollView
        style={st.page}
        contentContainerStyle={{ padding: scale(20), paddingBottom: pad }}
        showsVerticalScrollIndicator={overflows}
        persistentScrollbar={overflows}
        onLayout={(e: LayoutChangeEvent) => { view.current.box = e.nativeEvent.layout.height; measure(); }}
        onContentSizeChange={(_, h) => { view.current.content = h; measure(); }}
        onScroll={(e) => { view.current.y = e.nativeEvent.contentOffset.y; measure(); }}
        scrollEventThrottle={64}>
        <DiagramBody d={d} />
      </ScrollView>
      {more && <LinearGradient pointerEvents="none" colors={['rgba(255,255,255,0)', '#FFFFFF']} style={[st.fade, { height: scale(44) }]} />}
    </View>
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
      {/* A name that wraps never leaves one word on its last line (titleBreaks). */}
      <Text style={{ fontFamily: STIX.semibold, fontSize: t(19), lineHeight: t(25), color: colors.ink }}>{titleBreaks(d.name)}</Text>
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
  page: { flex: 1 },
  fade: { position: 'absolute', left: 0, right: 0, bottom: 0 },
  centred: { alignItems: 'center' },
  chips: { flexDirection: 'row', flexWrap: 'wrap' },
  chip: { borderWidth: 1, borderColor: 'rgba(28,26,22,.16)', justifyContent: 'center', backgroundColor: '#FFFFFF' },
  chipOn: { borderWidth: 1.5, borderColor: colors.ink },
  chipText: { fontFamily: 'Onest_600SemiBold', color: colors.faint },
  chipTextOn: { color: colors.ink },
});

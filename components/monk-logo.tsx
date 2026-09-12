import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

/**
 * The monklearning lockup: the aperture symbol, then the wordmark set in Onest.
 *
 * The wordmark used to be 12 outlined glyph paths lifted from the brand kit.
 * It is live text now, per the type rules: one lowercase word, no space, "monk"
 * at 700 and "learning" at 500, -0.006em across both. The SYMBOL is untouched
 * artwork -- the same three circles, same geometry, same marigold core.
 *
 * Every size derives from one number, the symbol height, using the lockup's own
 * ratios rather than hand-picked values:
 *
 *   wordmark ink height = symbol / 1.75
 *   gap                 = symbol x 0.31
 *
 * `fontSize` is not the ink height. Measured off the shipped Onest TTFs, the
 * inked span of "monklearning" runs from the 'l'/'k' ascenders at +729 to the
 * 'g' descender at -239 on a 1000 em -- 0.968 em. So the size that produces a
 * given ink height is inkHeight / 0.968, which is where INK_EM comes from.
 *
 * At the app bar's 30pt symbol that resolves to a 17.71pt face and a 151.2pt
 * lockup, against the outlined version's 153.4pt. The footprint is the same to
 * within two points, so nothing around it had to move.
 */

/** Inked height of "monklearning" in Onest, as a fraction of the em. */
const INK_EM = 0.968;
/**
 * Symbol height ÷ wordmark ink height, and gap ÷ symbol height.
 *
 * These are measured off the kit's own render
 * (png/lockup-horizontal/lockup-horizontal-2400w.png): a 316px symbol over a
 * 265px wordmark, 187px apart. So 1.192 and 0.592.
 *
 * The type rules that came with the Onest change said 1.75 and 0.31, and this
 * shipped that way first. At 1.75 the symbol has to be 30pt to keep the
 * wordmark legible, and it read as an oversized mark next to a small word --
 * which is what it is: 1.75 makes the symbol 47% more dominant than the
 * lockup the website has been showing all along. The gap at 0.31 is also half
 * the kit's.
 *
 * Most likely the rule measures "ink height" as something narrower than the
 * full inked span -- to make 1.75 true of the kit's own artwork it would have
 * to mean about 0.68 of it, roughly a cap height. Rather than guess which
 * band it meant, these follow the artwork.
 *
 * The practical effect is that the app bar goes back to the proportions the
 * outlined wordmark had: a 20.75pt symbol over 17.4pt of wordmark ink.
 */
/**
 * 1.102, against the kit's 1.192. The wordmark has been taken up twice, 3%
 * then 5%, against a symbol that has not moved -- the artwork's ratio is drawn
 * for display sizes and left the word reading small beside an 18pt mark.
 *
 * This is close to the floor for the ratio. The inked span includes the 'g'
 * descender, so at 1.102 the letters' own body -- Onest's x-height, 0.527 em
 * -- is 8.9pt against an 18pt symbol. Push much past this and the word starts
 * to out-weigh the mark rather than sit with it.
 */
const SYMBOL_TO_INK = 1.102;
/**
 * 0.38, against the kit's measured 0.592.
 *
 * The kit's lockup is drawn for display use -- a website header, a poster --
 * where 0.592 reads as composed. At an 18pt symbol in an app bar that much air
 * read as a mark standing near a word, so this came down in two steps, 0.592
 * to 0.45 to 0.38, each judged on the device.
 */
const GAP_RATIO = 0.38;
/**
 * 'm' carries 55/1000 em of left side bearing inside its glyph box, and
 * `marginLeft` positions the TEXT BOX, not the first inked pixel. Left alone
 * the visual gap measured 0.36 of the symbol instead of 0.31, so the bearing
 * comes back off the margin.
 */
const M_BEARING_EM = 0.055;
/** letter-spacing, em. */
const TRACKING_EM = -0.006;
/**
 * The ink box sits below the centre of the line box Onest reports (hhea
 * 970/-305), because "monklearning" has one descender and no capitals. Text is
 * centred on its line box, so without this the wordmark rides high against the
 * symbol.
 */
const INK_OFFSET_EM = -0.0875;

/** The symbol's own circles span 83 units centred on (60,60) in the kit's
 *  120-unit canvas, so this window crops it to its own bounds. */
const SYMBOL_VIEWBOX = '18.5 18.5 83 83';

const TONES = {
  light: { monk: '#181818', learning: '#55565C', symbol: '#181818' },
  dark: { monk: '#FCFAF4', learning: '#B4B0A6', symbol: '#FCFAF4' },
} as const;

export function MonkLogo({
  /** The symbol's height in points, and the lockup's — the symbol is the
   *  tallest element once the 1.75 ratio is applied. */
  height,
  tone = 'light',
}: {
  height: number;
  tone?: 'light' | 'dark';
}) {
  const c = TONES[tone];
  const fontSize = height / (SYMBOL_TO_INK * INK_EM);

  return (
    <View style={styles.row}>
      <Svg width={height} height={height} viewBox={SYMBOL_VIEWBOX} fill="none">
        <Circle
          cx={60}
          cy={60}
          r={36}
          stroke={c.symbol}
          strokeWidth={11}
          strokeLinecap="round"
          strokeDasharray="52 23.4"
          transform="rotate(-90 60 60)"
        />
        <Circle
          cx={60}
          cy={60}
          r={19}
          stroke={c.symbol}
          strokeWidth={9}
          strokeLinecap="round"
          strokeDasharray="21.8 18"
          transform="rotate(-30 60 60)"
        />
        <Circle cx={60} cy={60} r={6} fill="#EEA31F" />
      </Svg>

      {/* One Text, two spans — so the two weights stay on one baseline and the
          tracking applies across the join, exactly as `.logo` does in CSS. */}
      <Text
        allowFontScaling={false}
        style={{
          marginLeft: height * GAP_RATIO - fontSize * M_BEARING_EM,
          marginTop: fontSize * INK_OFFSET_EM,
          fontSize,
          letterSpacing: fontSize * TRACKING_EM,
        }}>
        <Text style={{ fontFamily: 'Onest_700Bold', color: c.monk }}>monk</Text>
        <Text style={{ fontFamily: 'Onest_500Medium', color: c.learning }}>learning</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
});

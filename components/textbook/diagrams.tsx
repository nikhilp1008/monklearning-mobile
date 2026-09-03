import { useCallback, useMemo, useState, type ReactNode } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  type LayoutChangeEvent,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import Animated, { useAnimatedProps, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Svg, {
  Circle,
  Line,
  Path,
  Rect,
  Text as SvgText,
  type CircleProps,
  type PathProps,
  type RectProps,
  type TextProps as SvgTextProps,
} from 'react-native-svg';

import { Markup } from '@/components/textbook/markup';
import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import type { DiagramFrame } from '@/lib/textbooks';
import {
  Axes3D,
  CircuitDiagram,
  CountingTree,
  EnergyLevels,
  FlowChart,
  PascalTriangle,
  RayDiagram,
} from '@/components/textbook/figures';
import { Plot, UnitCircle } from '@/components/textbook/plot';
import { useScale } from '@/constants/scale';

/**
 * The six interactive figures the Textbooks reader can drop into a chapter.
 *
 * Every one is the same shape: a figure, a row of chips under it, and a
 * caption under that. Tapping a chip re-highlights the figure and swaps the
 * caption. Which chip is live is the caller's business, not ours: the reader
 * keeps one `diagram[uid]` entry per block so a student's selection survives
 * scrolling the block out of view and back, and a component holding its own
 * state would quietly reset it.
 *
 * This renders the figure/chips/caption only. The white card, its border and
 * the block kicker above them belong to the reader's block chrome, which is
 * shared with every other block type.
 */

const TIMING = { duration: 250 } as const;

// The reader's content cards are pure white against the warm paper ground, and
// the Venn "punch-out" fills have to be that exact white or the erased regions
// read as a second, dirtier shade. colors.paper (#FFFDF8) is the page behind
// the card, not the card, so it is deliberately not used for fills here.
const CARD = '#FFFFFF';

const AMBER_WASH = 'rgba(238,163,31,.35)';
const AMBER_RING = 'rgba(238,163,31,.14)';
const AMBER_RING_STRONG = 'rgba(238,163,31,.18)';
const AMBER_TICK = 'rgba(238,163,31,.22)';
// Same amber at zero alpha rather than 'transparent', which resolves to
// transparent *black* and drags every fade through a grey midpoint.
const AMBER_CLEAR = 'rgba(238,163,31,0)';

const HAIRLINE = 'rgba(28,26,22,.18)';
const CHIP_BORDER = 'rgba(28,26,22,.14)';
const INK_TICK = 'rgba(28,26,22,.08)';
const LIGHT_GRAY = '#C0B8A6';
const DISABLED = '#D8D2C2';
const FAINT_FILL = '#FAF8F2';

// All math expressions and set symbols in the reader are serif italic.
const SERIF = Platform.select({ ios: 'Georgia', android: 'serif', default: 'serif' });

export const DIAGRAM_KINDS: readonly string[] = [
  // The six bespoke set-theory figures, each with its captions built in.
  'numsys',
  'lattice',
  'venn2',
  'venn3',
  'family',
  'grid',
  // The parameterised ones. These draw whatever the content block's `frames`
  // describe, so a chapter can author a figure without touching this file.
  'plot',
  'numberline',
  'unitcircle',
  'tree',
  'pascal',
  'axes3d',
  // Physics. Each of these has its own coordinate model or needs a solve step,
  // which is the test for earning a kind rather than living on DiagramFrame:
  // a circuit routes on a grid, a ray diagram solves the lens equation, an
  // energy ladder places its own rows. Everything else physics needs -- arrows,
  // arcs, polylines, glyphs, mechanics bodies -- went on the frame instead and
  // is available to `plot`.
  'flow',
  'levels',
  'circuit',
  'optics',
];

interface KindConfig {
  chips: string[];
  captions: string[];
  /**
   * Chip labels are either set notation (ℕ, A ∪ B) or plain words (SIZE 0).
   * Anek Latin has no glyphs for the notation, so the notation chips take the
   * serif math face and only the word chips take the app's kicker treatment.
   */
  mathChips: boolean;
}

const CONFIG: Record<string, KindConfig> = {
  numsys: {
    chips: ['ℕ', '𝕎', 'ℤ', 'ℚ', 'ℝ', '𝕋'],
    mathChips: true,
    captions: [
      'ℕ = {1, 2, 3, …}. Counting starts at 1. The innermost circle: everything else grows outward from here.',
      '𝕎 = {0, 1, 2, …}. The naturals plus zero.',
      'ℤ adds the negatives: {…, −2, −1, 0, 1, 2, …}.',
      'ℚ = every fraction p/q with p, q ∈ ℤ, q ≠ 0. The rationals.',
      'ℝ = the whole continuous number line. Every set here nests inside it: ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ.',
      '𝕋 = the irrationals: the band inside ℝ but outside ℚ. √2, π and friends live here.',
    ],
  },
  lattice: {
    chips: ['SIZE 0', 'SIZE 1', 'SIZE 2', 'SIZE 3'],
    mathChips: false,
    captions: [
      'C(3, 0) = 1 subset of size zero. ∅ is always on the menu, and always forgotten first.',
      'C(3, 1) = 3 singletons.',
      'C(3, 2) = 3 pairs.',
      'C(3, 3) = 1: the whole set A itself, the other improper subset.',
    ],
  },
  venn2: {
    chips: ['A ∪ B', 'A ∩ B', 'A − B', 'B − A', 'A △ B', 'A′'],
    mathChips: true,
    captions: [
      'A ∪ B: everyone in either list (or both). Three of the four regions shaded; only “neither” is left out.',
      'A ∩ B: the lens, in both lists at once. Keyword: and.',
      'A − B: the “only A” crescent. One-directional: the source keeps what the other set doesn’t touch.',
      'B − A: the mirror crescent. Difference is not commutative.',
      'A △ B: exactly one of the two, never both: the two crescents together.',
      'A′: everything outside circle A, including B’s crescent. Meaningless until U is fixed.',
    ],
  },
  venn3: {
    chips: ['EXACTLY ONE', 'EXACTLY TWO', 'ALL THREE', 'NONE'],
    mathChips: false,
    captions: [
      'Exactly one: the three outer crescents. Σn(A) − 2Σn(A∩B) + 3n(A∩B∩C).',
      'Exactly two: the three petals, centre excluded. Σn(A∩B) − 3n(A∩B∩C): the centre gets removed all three times.',
      'All three: the centre, n(A∩B∩C). Fill it first, always.',
      'None: outside every circle, n(U) − n(A ∪ B ∪ C).',
    ],
  },
  family: {
    chips: ['( 0, 1/n )', '[ 0, 1/n ]'],
    mathChips: true,
    captions: [
      '( 0, 1/n ): open at 0. The bars shrink towards 0 but 0 was never inside a single one: ⋂ = ∅. Shrinking is not arriving.',
      '[ 0, 1/n ]: closed at 0. Now 0 belongs to every member, and nothing else survives: ⋂ = {0}. One bracket, whole mark.',
    ],
  },
  grid: {
    chips: ['BY ROWS', 'BY COLUMNS'],
    mathChips: false,
    captions: [
      'Count by rows: 4 sets × 3 elements each = 12 incidences. That is mp.',
      'Count by columns: 6 elements × multiplicity 2 = 12. Same ticks, second count: k·n(S). Hence mp = k·n(S).',
    ],
  },
};

type Styles = ReturnType<typeof createStyles>;
type Scale = (n: number) => number;

export function TextbookDiagram({
  kind,
  selected,
  onSelect,
  chips,
  captions,
  mathChips,
  frames,
}: {
  kind: string;
  selected: number;
  onSelect: (i: number) => void;
  /** Authored by the chapter; falls back to the built-in text for the six. */
  chips?: string[];
  captions?: string[];
  mathChips?: boolean;
  frames?: DiagramFrame[];
}) {
  const { scale } = useScale();
  const styles = useMemo(() => createStyles(scale), [scale]);
  const [measured, setMeasured] = useState(0);

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    setMeasured(e.nativeEvent.layout.width);
  }, []);

  // A chapter's own chips and captions win. The built-in CONFIG stays for the
  // six figures written before diagrams were authorable.
  const authored = chips && chips.length > 0;
  const config: KindConfig | undefined = authored
    ? { chips, captions: captions ?? [], mathChips: mathChips ?? false }
    : CONFIG[kind];
  // The SVG figures need a pixel width before they can pick a height. The
  // fallback is the 390pt canvas minus its 24pt gutters, the card border and
  // the card's own padding, so the first frame is already the right size on a
  // reference-width device and onLayout only corrects unusual containers.
  const figureWidth = Math.max(1, (measured || scale(316)) - scale(8));

  if (!config) return null;

  const sel = Math.min(Math.max(selected, 0), config.chips.length - 1);

  return (
    <View>
      <View style={styles.figure} onLayout={onLayout}>
        {kind === 'numsys' && <NumberSystems selected={sel} styles={styles} />}
        {kind === 'lattice' && <Lattice selected={sel} styles={styles} />}
        {kind === 'venn2' && <VennTwo selected={sel} width={figureWidth} />}
        {kind === 'venn3' && <VennThree selected={sel} width={figureWidth} />}
        {kind === 'family' && <IntervalFamily selected={sel} width={figureWidth} />}
        {kind === 'grid' && <IncidenceGrid selected={sel} styles={styles} />}
        {(kind === 'plot' || kind === 'numberline') && frames?.[sel] && (
          <Plot frame={frames[sel]} width={figureWidth} kind={kind} />
        )}
        {kind === 'unitcircle' && frames?.[sel] && (
          <UnitCircle frame={frames[sel]} width={figureWidth} />
        )}
        {kind === 'tree' && frames?.[sel] && (
          <CountingTree frame={frames[sel]} width={figureWidth} />
        )}
        {kind === 'pascal' && frames?.[sel] && (
          <PascalTriangle frame={frames[sel]} width={figureWidth} />
        )}
        {kind === 'axes3d' && frames?.[sel] && (
          <Axes3D frame={frames[sel]} width={figureWidth} />
        )}
        {kind === 'flow' && frames?.[sel] && (
          <FlowChart frame={frames[sel]} width={figureWidth} />
        )}
        {kind === 'levels' && frames?.[sel] && (
          <EnergyLevels frame={frames[sel]} width={figureWidth} />
        )}
        {kind === 'circuit' && frames?.[sel] && (
          <CircuitDiagram frame={frames[sel]} width={figureWidth} />
        )}
        {kind === 'optics' && frames?.[sel] && (
          <RayDiagram frame={frames[sel]} width={figureWidth} />
        )}
      </View>
      <View style={styles.chipRow}>
        {config.chips.map((label, i) => (
          <PressableScale
            key={label}
            onPress={() => onSelect(i)}
            accessibilityRole="button"
            accessibilityState={{ selected: sel === i }}
            style={[styles.chip, sel === i && styles.chipOn]}>
            <Text
              style={[
                config.mathChips ? styles.chipMathText : styles.chipWordText,
                sel === i && styles.chipTextOn,
              ]}>
              {label}
            </Text>
          </PressableScale>
        ))}
      </View>
      {/* Through Markup, not a bare Text. A caption is prose about a figure
          and wants a superscript as much as any paragraph does; rendered raw,
          its tags reached the student as literal characters. */}
      <Markup html={config.captions[sel] ?? ''} size={scale(13.5)} style={styles.caption} />
    </View>
  );
}

/* -------------------------------------------------------------------------
 * Animated primitives
 *
 * Every highlight in these figures is a colour or an alpha, never a size or a
 * position: this codebase has had Reanimated width/layout animations misbehave
 * on device, and a figure that reflows mid-transition would also drag the rest
 * of the chapter up and down with it.
 * ---------------------------------------------------------------------- */

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedRect = Animated.createAnimatedComponent(Rect);
const AnimatedSvgText = Animated.createAnimatedComponent(SvgText);

function useFadeProps(opacity: number) {
  return useAnimatedProps(() => ({ opacity: withTiming(opacity, TIMING) }));
}

function FadeCircle({ opacity, ...rest }: Omit<CircleProps, 'opacity'> & { opacity: number }) {
  const animatedProps = useFadeProps(opacity);
  return <AnimatedCircle animatedProps={animatedProps} {...rest} />;
}

function FadePath({ opacity, ...rest }: Omit<PathProps, 'opacity'> & { opacity: number }) {
  const animatedProps = useFadeProps(opacity);
  return <AnimatedPath animatedProps={animatedProps} {...rest} />;
}

function FadeRect({ opacity, ...rest }: Omit<RectProps, 'opacity'> & { opacity: number }) {
  const animatedProps = useFadeProps(opacity);
  return <AnimatedRect animatedProps={animatedProps} {...rest} />;
}

function FadeSvgText({
  opacity,
  children,
  ...rest
}: Omit<SvgTextProps, 'opacity'> & { opacity: number }) {
  const animatedProps = useFadeProps(opacity);
  return (
    <AnimatedSvgText animatedProps={animatedProps} {...rest}>
      {children}
    </AnimatedSvgText>
  );
}

/** A box whose fill and border wash in and out with the selection. */
function WashBox({
  background,
  border,
  style,
  children,
}: {
  background: string;
  border: string;
  style: StyleProp<ViewStyle>;
  children?: ReactNode;
}) {
  const wash = useAnimatedStyle(() => ({
    backgroundColor: withTiming(background, TIMING),
    borderColor: withTiming(border, TIMING),
  }));
  return <Animated.View style={[style, wash]}>{children}</Animated.View>;
}

/**
 * A label that changes colour with the selection. The weight change that goes
 * with it is not animated: RN cannot interpolate a font weight, and a snap
 * from 400 to 700 under a 250ms colour wash reads as emphasis landing rather
 * than as a glitch.
 */
function WashText({
  color,
  bold,
  style,
  children,
}: {
  color: string;
  bold?: boolean;
  style: StyleProp<TextStyle>;
  children: ReactNode;
}) {
  const wash = useAnimatedStyle(() => ({ color: withTiming(color, TIMING) }));
  return (
    <Animated.Text style={[style, { fontWeight: bold ? '700' : '400' }, wash]}>
      {children}
    </Animated.Text>
  );
}

/* -------------------------------------------------------------------------
 * numsys: ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ as nested boxes
 * ---------------------------------------------------------------------- */

interface Ring {
  background: string;
  border: string;
  color: string;
  bold: boolean;
}

function NumberSystems({ selected, styles }: { selected: number; styles: Styles }) {
  const irrationals = selected === 5;

  const ring = (i: number): Ring => {
    const on = selected === i;
    return {
      background: on ? AMBER_RING : AMBER_CLEAR,
      border: on ? colors.amberText : HAIRLINE,
      color: on ? colors.amberText : colors.faint,
      bold: on,
    };
  };
  const r: Ring[] = [ring(0), ring(1), ring(2), ring(3), ring(4)];

  // The irrationals are the only set with no box of their own: they are what
  // is left of ℝ once ℚ is lifted out, so the figure shades ℝ and blanks ℚ to
  // draw the band between them.
  if (irrationals) {
    r[4] = { ...r[4], background: AMBER_RING_STRONG, border: colors.amberText };
    r[3] = { ...r[3], background: CARD };
  }

  return (
    <WashBox style={styles.ringReals} background={r[4].background} border={r[4].border}>
      <WashText style={styles.ringLabelOuter} color={r[4].color} bold={r[4].bold}>
        ℝ reals
      </WashText>
      <View style={styles.ringVerticalSlot} pointerEvents="none">
        <WashText
          style={styles.ringVerticalLabel}
          color={irrationals ? colors.amberText : LIGHT_GRAY}
          bold={irrationals}>
          𝕋 irrational
        </WashText>
      </View>
      <WashBox style={styles.ringRationals} background={r[3].background} border={r[3].border}>
        <WashText style={styles.ringLabel} color={r[3].color} bold={r[3].bold}>
          ℚ fractions
        </WashText>
        <WashBox style={styles.ringIntegers} background={r[2].background} border={r[2].border}>
          <WashText style={styles.ringLabel} color={r[2].color} bold={r[2].bold}>
            ℤ integers
          </WashText>
          <WashBox style={styles.ringWholes} background={r[1].background} border={r[1].border}>
            <WashText style={styles.ringLabel} color={r[1].color} bold={r[1].bold}>
              𝕎 wholes
            </WashText>
            <WashBox
              style={styles.ringNaturals}
              background={r[0].background}
              border={r[0].border}>
              <WashText style={styles.ringInlineLabel} color={r[0].color} bold={r[0].bold}>
                ℕ naturals 1, 2, 3, …
              </WashText>
            </WashBox>
          </WashBox>
        </WashBox>
      </WashBox>
    </WashBox>
  );
}

/* -------------------------------------------------------------------------
 * lattice: the 8 subsets of {p, q, r}, banked by size
 * ---------------------------------------------------------------------- */

// The three pad widths keep every rung the same optical length as the
// prototype's: the wider a row's labels get, the tighter its side padding.
const LATTICE_ROWS: { pills: string[]; pad: 'latticePadWide' | 'latticePadMid' | 'latticePadTight' }[] =
  [
    { pills: ['∅'], pad: 'latticePadWide' },
    { pills: ['{p}', '{q}', '{r}'], pad: 'latticePadMid' },
    { pills: ['{p,q}', '{p,r}', '{q,r}'], pad: 'latticePadTight' },
    { pills: ['{p, q, r}'], pad: 'latticePadWide' },
  ];

function Lattice({ selected, styles }: { selected: number; styles: Styles }) {
  return (
    <View style={styles.latticeStack}>
      {LATTICE_ROWS.map((row, i) => (
        <View key={row.pills.join()} style={styles.latticeRow}>
          {row.pills.map((label) => (
            <LatticePill
              key={label}
              label={label}
              on={selected === i}
              padStyle={styles[row.pad]}
              styles={styles}
            />
          ))}
        </View>
      ))}
      <Text style={styles.latticeCount}>1 + 3 + 3 + 1 = 8 = 2³</Text>
    </View>
  );
}

function LatticePill({
  label,
  on,
  padStyle,
  styles,
}: {
  label: string;
  on: boolean;
  padStyle: StyleProp<ViewStyle>;
  styles: Styles;
}) {
  const wash = useAnimatedStyle(() => ({
    backgroundColor: withTiming(on ? colors.ink : CARD, TIMING),
    borderColor: withTiming(on ? colors.ink : HAIRLINE, TIMING),
  }));
  const textWash = useAnimatedStyle(() => ({
    color: withTiming(on ? colors.paper : colors.ink, TIMING),
  }));

  return (
    <Animated.View style={[styles.latticePill, padStyle, wash]}>
      <Animated.Text style={[styles.latticePillText, textWash]}>{label}</Animated.Text>
    </Animated.View>
  );
}

/* -------------------------------------------------------------------------
 * venn2 / venn3
 *
 * The prototype builds every overlap with SVG clip-paths, including a
 * clip-inside-a-clip for the three-circle centre. Nested clipping is the most
 * fragile corner of react-native-svg, so the overlaps here are explicit arc
 * paths instead: for equal-radius circles the intersection points are exact,
 * so the shapes are identical, not approximated.
 * ---------------------------------------------------------------------- */

// A(125,88) and B(195,88), r 54: the circles meet at x = 160, y = 88 ± √1691.
const V2_LENS = 'M160,46.878 A54,54 0 0,1 160,129.122 A54,54 0 0,1 160,46.878';

const V2_STATES = [
  { rect: 0, b: 1, a: 1, punchA: 0, lensAmber: 0, lensWhite: 0 }, // A ∪ B
  { rect: 0, b: 0, a: 0, punchA: 0, lensAmber: 1, lensWhite: 0 }, // A ∩ B
  { rect: 0, b: 0, a: 1, punchA: 0, lensAmber: 0, lensWhite: 1 }, // A − B
  { rect: 0, b: 1, a: 0, punchA: 0, lensAmber: 0, lensWhite: 1 }, // B − A
  { rect: 0, b: 1, a: 1, punchA: 0, lensAmber: 0, lensWhite: 1 }, // A △ B
  { rect: 1, b: 0, a: 0, punchA: 1, lensAmber: 0, lensWhite: 0 }, // A′
];

function VennTwo({ selected, width }: { selected: number; width: number }) {
  const s = V2_STATES[selected];
  return (
    <Svg width={width} height={(width * 180) / 320} viewBox="0 0 320 180">
      <FadeRect
        x={6}
        y={10}
        width={308}
        height={152}
        rx={12}
        fill={AMBER_WASH}
        opacity={s.rect}
      />
      <FadeCircle cx={195} cy={88} r={54} fill={AMBER_WASH} opacity={s.b} />
      <FadeCircle cx={125} cy={88} r={54} fill={AMBER_WASH} opacity={s.a} />
      <FadeCircle cx={125} cy={88} r={54} fill={CARD} opacity={s.punchA} />
      <FadePath d={V2_LENS} fill={AMBER_WASH} opacity={s.lensAmber} />
      <FadePath d={V2_LENS} fill={CARD} opacity={s.lensWhite} />

      <Rect
        x={6}
        y={10}
        width={308}
        height={152}
        rx={12}
        fill="none"
        stroke={colors.ink}
        strokeWidth={1.3}
      />
      <Circle cx={125} cy={88} r={54} fill="none" stroke={colors.ink} strokeWidth={1.5} />
      <Circle cx={195} cy={88} r={54} fill="none" stroke={colors.ink} strokeWidth={1.5} />
      <SvgText x={16} y={28} fontSize={12} fontFamily={SERIF} fontStyle="italic" fill={colors.faint}>
        U
      </SvgText>
      <SvgText x={78} y={40} fontSize={14} fontFamily={SERIF} fontStyle="italic" fill={colors.ink}>
        A
      </SvgText>
      <SvgText x={234} y={40} fontSize={14} fontFamily={SERIF} fontStyle="italic" fill={colors.ink}>
        B
      </SvgText>
    </Svg>
  );
}

// A(125,82), B(195,82), C(160,132), r 50. Each lens is two arcs; the centre is
// three, one off each circle, joining the three inner intersection points.
const V3_LENS_AB = 'M160,46.293 A50,50 0 0,1 160,117.707 A50,50 0 0,1 160,46.293';
const V3_LENS_AC = 'M174.946,84.286 A50,50 0 0,1 110.054,129.714 A50,50 0 0,1 174.946,84.286';
const V3_LENS_BC = 'M145.054,84.286 A50,50 0 0,0 209.946,129.714 A50,50 0 0,0 145.054,84.286';
const V3_CENTRE =
  'M145.054,84.286 A50,50 0 0,1 174.946,84.286 A50,50 0 0,1 160,117.707 A50,50 0 0,1 145.054,84.286';
const V3_LENSES = [V3_LENS_AB, V3_LENS_AC, V3_LENS_BC];

const V3_STATES = [
  { rect: 0, circles: 1, punch: 0, lensAmber: 0, lensWhite: 1, coreAmber: 0, coreWhite: 0 },
  { rect: 0, circles: 0, punch: 0, lensAmber: 1, lensWhite: 0, coreAmber: 0, coreWhite: 1 },
  { rect: 0, circles: 0, punch: 0, lensAmber: 0, lensWhite: 0, coreAmber: 1, coreWhite: 0 },
  { rect: 1, circles: 0, punch: 1, lensAmber: 0, lensWhite: 0, coreAmber: 0, coreWhite: 0 },
];

const V3_CIRCLES = [
  { cx: 125, cy: 82 },
  { cx: 195, cy: 82 },
  { cx: 160, cy: 132 },
];

function VennThree({ selected, width }: { selected: number; width: number }) {
  const s = V3_STATES[selected];
  return (
    <Svg width={width} height={(width * 212) / 320} viewBox="0 0 320 212">
      <FadeRect x={6} y={8} width={308} height={196} rx={12} fill={AMBER_WASH} opacity={s.rect} />
      {V3_CIRCLES.map((c) => (
        <FadeCircle
          key={`wash${c.cx}`}
          cx={c.cx}
          cy={c.cy}
          r={50}
          fill={AMBER_WASH}
          opacity={s.circles}
        />
      ))}
      {V3_CIRCLES.map((c) => (
        <FadeCircle
          key={`punch${c.cx}`}
          cx={c.cx}
          cy={c.cy}
          r={50}
          fill={CARD}
          opacity={s.punch}
        />
      ))}
      {V3_LENSES.map((d, i) => (
        <FadePath key={`lensAmber${i}`} d={d} fill={AMBER_WASH} opacity={s.lensAmber} />
      ))}
      {V3_LENSES.map((d, i) => (
        <FadePath key={`lensWhite${i}`} d={d} fill={CARD} opacity={s.lensWhite} />
      ))}
      <FadePath d={V3_CENTRE} fill={AMBER_WASH} opacity={s.coreAmber} />
      <FadePath d={V3_CENTRE} fill={CARD} opacity={s.coreWhite} />

      <Rect
        x={6}
        y={8}
        width={308}
        height={196}
        rx={12}
        fill="none"
        stroke={colors.ink}
        strokeWidth={1.3}
      />
      {V3_CIRCLES.map((c) => (
        <Circle
          key={`edge${c.cx}`}
          cx={c.cx}
          cy={c.cy}
          r={50}
          fill="none"
          stroke={colors.ink}
          strokeWidth={1.5}
        />
      ))}
      <SvgText x={16} y={26} fontSize={12} fontFamily={SERIF} fontStyle="italic" fill={colors.faint}>
        U
      </SvgText>
      <SvgText x={80} y={38} fontSize={14} fontFamily={SERIF} fontStyle="italic" fill={colors.ink}>
        A
      </SvgText>
      <SvgText x={232} y={38} fontSize={14} fontFamily={SERIF} fontStyle="italic" fill={colors.ink}>
        B
      </SvgText>
      <SvgText x={155} y={198} fontSize={14} fontFamily={SERIF} fontStyle="italic" fill={colors.ink}>
        C
      </SvgText>
    </Svg>
  );
}

/* -------------------------------------------------------------------------
 * family: the limit-point trap
 * ---------------------------------------------------------------------- */

const FAMILY_BARS = [
  { y: 36, end: 284, labelX: 288, labelY: 40, label: 'A₁', opacity: 0.5 },
  { y: 66, end: 155, labelX: 162, labelY: 70, label: 'A₂', opacity: 0.65 },
  { y: 96, end: 112, labelX: 120, labelY: 100, label: 'A₃', opacity: 0.8 },
];

function IntervalFamily({ selected, width }: { selected: number; width: number }) {
  const closed = selected === 1;
  // Fill and stroke both flip, so the two endpoint styles are drawn as a pair
  // and cross-faded rather than animating a colour on one shape.
  const openO = closed ? 0 : 1;
  const closedO = closed ? 1 : 0;

  return (
    <Svg width={width} height={(width * 152) / 320} viewBox="0 0 320 152">
      {FAMILY_BARS.map((bar) => (
        <SvgText
          key={`label${bar.label}`}
          x={bar.labelX}
          y={bar.labelY}
          fontSize={11}
          fontFamily={SERIF}
          fontStyle="italic"
          fill={colors.faint}>
          {bar.label}
        </SvgText>
      ))}
      {FAMILY_BARS.map((bar) => (
        <Line
          key={`bar${bar.label}`}
          x1={26}
          y1={bar.y}
          x2={bar.end}
          y2={bar.y}
          stroke={colors.marigold}
          strokeWidth={7}
          strokeLinecap="round"
          opacity={bar.opacity}
        />
      ))}
      {FAMILY_BARS.map((bar) => (
        <Circle
          key={`right${bar.label}`}
          cx={bar.end}
          cy={bar.y}
          r={4.5}
          fill={CARD}
          stroke={colors.amberText}
          strokeWidth={1.5}
        />
      ))}
      {FAMILY_BARS.map((bar) => (
        <FadeCircle
          key={`leftOpen${bar.label}`}
          cx={26}
          cy={bar.y}
          r={5}
          fill={CARD}
          stroke={colors.red}
          strokeWidth={1.8}
          opacity={openO}
        />
      ))}
      {FAMILY_BARS.map((bar) => (
        <FadeCircle
          key={`leftClosed${bar.label}`}
          cx={26}
          cy={bar.y}
          r={5}
          fill={colors.marigold}
          stroke={colors.ink}
          strokeWidth={1.8}
          opacity={closedO}
        />
      ))}

      <Line x1={14} y1={126} x2={306} y2={126} stroke={colors.ink} strokeWidth={1.4} />
      <SvgText x={22} y={146} fontSize={12} fontFamily={SERIF} fill={colors.slate}>
        0
      </SvgText>
      <SvgText x={280} y={146} fontSize={12} fontFamily={SERIF} fill={colors.slate}>
        1
      </SvgText>
      <FadeCircle
        cx={26}
        cy={126}
        r={5.5}
        fill={CARD}
        stroke={colors.red}
        strokeWidth={1.8}
        opacity={openO}
      />
      <FadeCircle
        cx={26}
        cy={126}
        r={5.5}
        fill={colors.marigold}
        stroke={colors.ink}
        strokeWidth={1.8}
        opacity={closedO}
      />
      <FadeSvgText
        x={40}
        y={121}
        fontSize={13}
        fontFamily={SERIF}
        fontStyle="italic"
        fill={colors.red}
        opacity={openO}>
        ⋂ = ∅
      </FadeSvgText>
      <FadeSvgText
        x={40}
        y={121}
        fontSize={13}
        fontFamily={SERIF}
        fontStyle="italic"
        fill={colors.amberText}
        opacity={closedO}>
        {'⋂ = {0}'}
      </FadeSvgText>
    </Svg>
  );
}

/* -------------------------------------------------------------------------
 * grid: the same 12 ticks counted twice
 * ---------------------------------------------------------------------- */

const GRID_CELLS = [
  [1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 1],
  [1, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 1],
];
const GRID_ROW_NAMES = ['A₁', 'A₂', 'A₃', 'A₄'];
const GRID_COL_NAMES = ['x₁', 'x₂', 'x₃', 'x₄', 'x₅', 'x₆'];

function IncidenceGrid({ selected, styles }: { selected: number; styles: Styles }) {
  const byRows = selected === 0;
  const rowInk = byRows ? colors.amberText : DISABLED;
  const colInk = byRows ? DISABLED : colors.amberText;

  return (
    <View>
      <View style={styles.gridRow}>
        <View style={styles.gridEdge} />
        {GRID_COL_NAMES.map((name) => (
          <Text key={name} style={[styles.gridHeadText, styles.gridFlex]}>
            {name}
          </Text>
        ))}
        <WashText style={[styles.gridSigmaText, styles.gridEdge]} color={rowInk}>
          Σ
        </WashText>
      </View>

      {GRID_CELLS.map((cells, i) => (
        <View key={GRID_ROW_NAMES[i]} style={styles.gridRow}>
          <Text style={[styles.gridHeadText, styles.gridEdge, styles.gridBodyPad]}>
            {GRID_ROW_NAMES[i]}
          </Text>
          {cells.map((tick, j) => (
            <GridCell
              key={GRID_COL_NAMES[j]}
              tick={tick === 1}
              byRows={byRows}
              styles={styles}
            />
          ))}
          <WashText
            style={[styles.gridTotalText, styles.gridEdge, styles.gridBodyPad]}
            color={rowInk}>
            3
          </WashText>
        </View>
      ))}

      <View style={styles.gridRow}>
        <WashText style={[styles.gridSigmaText, styles.gridEdge]} color={colInk}>
          Σ
        </WashText>
        {GRID_COL_NAMES.map((name) => (
          <WashText key={name} style={[styles.gridTotalText, styles.gridFlex]} color={colInk}>
            2
          </WashText>
        ))}
        <Text style={[styles.gridGrandTotal, styles.gridEdge]}>12</Text>
      </View>
    </View>
  );
}

function GridCell({
  tick,
  byRows,
  styles,
}: {
  tick: boolean;
  byRows: boolean;
  styles: Styles;
}) {
  // A tick is amber when the count runs along rows and neutral ink when it
  // runs down columns, so the two passes over the same 12 marks stay visibly
  // distinct without moving anything.
  const background = tick ? (byRows ? AMBER_TICK : INK_TICK) : FAINT_FILL;
  const wash = useAnimatedStyle(() => ({
    backgroundColor: withTiming(background, TIMING),
  }));

  return (
    <Animated.View style={[styles.gridCell, styles.gridFlex, wash]}>
      <Text style={styles.gridCellText}>{tick ? '✓' : '·'}</Text>
    </Animated.View>
  );
}

/* ---------------------------------------------------------------------- */

function createStyles(scale: Scale) {
  // Everything inside a figure is scaled off the horizontal ratio alone.
  // verticalScale would stretch the boxes and tables against their own widths
  // on short or tall devices, and a diagram that changes proportion device to
  // device stops matching the caption describing it.
  return StyleSheet.create({
    figure: {
      paddingHorizontal: scale(4),
    },

    chipRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(6),
      paddingHorizontal: scale(4),
      paddingVertical: scale(11),
    },
    /*
     * A figure can carry six chips, and a chapter carries thirty figures, so
     * this row is one of the most repeated objects in the reader. Filling the
     * selected one solid ink made a hard black slab appear and disappear under
     * every diagram as a student scrolled, which is a lot of weight for what
     * is only "you are looking at this one".
     *
     * It is the same amber the figures already use for the quantity under
     * discussion, at wash strength. The selected chip lights up rather than
     * inverting: the row stays quiet, the state is still unmistakable, and the
     * label keeps ink-on-light contrast instead of flipping to reversed text.
     */
    chip: {
      height: scale(30),
      paddingHorizontal: scale(12),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: CHIP_BORDER,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
    chipOn: {
      backgroundColor: 'rgba(238,163,31,.18)',
      borderColor: 'rgba(238,163,31,.65)',
    },
    chipWordText: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.1),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    chipMathText: {
      fontFamily: SERIF,
      fontStyle: 'italic',
      fontSize: scale(13),
      color: colors.faint,
    },
    chipTextOn: {
      color: colors.ink,
    },

    caption: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(21),
      color: colors.slate,
      paddingHorizontal: scale(4),
      paddingBottom: scale(10),
      minHeight: scale(36),
    },

    ringReals: {
      borderWidth: 1.5,
      borderRadius: scale(18),
      paddingTop: scale(24),
      paddingRight: scale(32),
      paddingBottom: scale(11),
      paddingLeft: scale(11),
    },
    ringRationals: {
      borderWidth: 1.5,
      borderRadius: scale(14),
      paddingTop: scale(22),
      paddingHorizontal: scale(11),
      paddingBottom: scale(9),
    },
    ringIntegers: {
      borderWidth: 1.5,
      borderRadius: scale(12),
      paddingTop: scale(22),
      paddingHorizontal: scale(11),
      paddingBottom: scale(9),
    },
    ringWholes: {
      borderWidth: 1.5,
      borderRadius: scale(10),
      paddingTop: scale(22),
      paddingHorizontal: scale(11),
      paddingBottom: scale(9),
    },
    ringNaturals: {
      borderWidth: 1.5,
      borderRadius: scale(8),
      paddingVertical: scale(8),
      paddingHorizontal: scale(11),
    },
    ringLabelOuter: {
      position: 'absolute',
      top: scale(5),
      left: scale(11),
      fontFamily: SERIF,
      fontSize: scale(12.5),
    },
    ringLabel: {
      position: 'absolute',
      top: scale(4),
      left: scale(11),
      fontFamily: SERIF,
      fontSize: scale(12.5),
    },
    ringInlineLabel: {
      fontFamily: SERIF,
      fontSize: scale(12.5),
    },
    // RN has no writing-mode, so the vertical label is a normal line of text
    // rotated in place. It keeps its own full width and overflows this slot
    // symmetrically, which puts the rotation centre where the slot centre is.
    ringVerticalSlot: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: scale(6),
      width: scale(16),
      alignItems: 'center',
      justifyContent: 'center',
    },
    ringVerticalLabel: {
      width: scale(76),
      textAlign: 'center',
      fontFamily: SERIF,
      fontSize: scale(11.5),
      transform: [{ rotate: '90deg' }],
    },

    latticeStack: {
      alignItems: 'center',
      gap: scale(8),
      paddingVertical: scale(2),
    },
    latticeRow: {
      flexDirection: 'row',
      gap: scale(8),
    },
    latticePill: {
      paddingVertical: scale(5),
      borderRadius: scale(99),
      borderWidth: 1,
    },
    latticePadWide: {
      paddingHorizontal: scale(13),
    },
    latticePadMid: {
      paddingHorizontal: scale(11),
    },
    latticePadTight: {
      paddingHorizontal: scale(10),
    },
    latticePillText: {
      fontFamily: SERIF,
      fontStyle: 'italic',
      fontSize: scale(14),
    },
    latticeCount: {
      fontFamily: SERIF,
      fontSize: scale(11),
      color: LIGHT_GRAY,
    },

    gridRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(4),
      marginBottom: scale(4),
    },
    gridFlex: {
      flex: 1,
    },
    gridEdge: {
      width: scale(32),
    },
    gridBodyPad: {
      paddingVertical: scale(7),
    },
    // Element and set names are variables, so they take the italic math face;
    // Σ is an operator and stays upright, as it does in the textbook.
    gridHeadText: {
      fontFamily: SERIF,
      fontStyle: 'italic',
      fontSize: scale(11),
      color: LIGHT_GRAY,
      textAlign: 'center',
      paddingVertical: scale(4),
    },
    gridSigmaText: {
      fontFamily: SERIF,
      fontSize: scale(11),
      textAlign: 'center',
      paddingVertical: scale(4),
    },
    gridCell: {
      borderRadius: scale(7),
      paddingVertical: scale(7),
    },
    gridCellText: {
      fontFamily: SERIF,
      fontSize: scale(11),
      color: colors.ink,
      textAlign: 'center',
    },
    gridTotalText: {
      fontFamily: SERIF,
      fontSize: scale(11),
      textAlign: 'center',
      paddingVertical: scale(4),
    },
    gridGrandTotal: {
      fontFamily: SERIF,
      fontSize: scale(11.5),
      color: colors.amberText,
      textAlign: 'center',
      paddingVertical: scale(4),
    },
  });
}

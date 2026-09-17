import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { colors } from '@/constants/brand';

/**
 * THE PLATE, FIVE WAYS — AND NO BOXES. Preview only, nothing wired.
 *
 * Plate was the direction. The two notes on it were that the colours were too
 * dark and that it must not become a box: the pair stays what it is today, two
 * cells of one strip with a rule above, a rule below and a rule between. So
 * every variant here keeps that exact frame and changes only the icon and how
 * the space around it is used.
 *
 * ON THE COLOUR. The first plate was the full accent — #B4392B and #1C7A47 —
 * which is the weight a primary button carries, and two of them side by side
 * under a black hero made the top of Home three heavy objects in a row. These
 * are all built the other way round: the plate takes the TINT and the glyph
 * takes the ink. Same hue, a quarter of the weight, and the glyph is the thing
 * that reads rather than the square behind it.
 *
 *   P1 · SOFT      The plate, in tint. The direct answer to both notes.
 *   P2 · ROUND     The same, circular. A circle reads softer than a square at
 *                  the same fill and is harder to mistake for a card.
 *   P3 · INLINE    The plate beside the title rather than above it. The
 *                  current layout leaves a whole line of empty width next to
 *                  a 24pt icon; this spends it.
 *   P4 · LARGE     A bigger plate and no arrow at all. The arrow was a second
 *                  small mark competing with the icon, and the whole cell has
 *                  always been the target — it was pointing at something that
 *                  did not need pointing at.
 *   P5 · RING      Tint fill with a hairline of the accent round it. Gives the
 *                  plate an edge without giving it weight.
 */

type Card = {
  key: 'snap' | 'practice';
  title: string;
  body: string;
  /** The accent this card is built on. */
  accent: string;
  /** The tint of that accent, for grounds. */
  tint: string;
  /** Ink for type on the tint. */
  onTint: string;
};

const CARDS: Card[] = [
  {
    key: 'snap',
    title: 'Snap and Solve',
    body: 'Up to 3 questions, solved step by step',
    accent: '#B4392B',
    tint: '#FBEBE4',
    onTint: '#A93425',
  },
  {
    key: 'practice',
    title: 'Practice',
    body: '150 a day, across all subjects',
    accent: '#1C7A47',
    tint: '#EAF0EA',
    onTint: '#157A45',
  },
];

type Variant = 'soft' | 'round' | 'inline' | 'large' | 'ring';

const VARIANTS: { id: Variant; label: string; note: string }[] = [
  { id: 'soft', label: 'P1 · Soft', note: 'The plate in tint, glyph in ink. Both notes answered, nothing else moved.' },
  { id: 'round', label: 'P2 · Round', note: 'The same plate, circular — softer, and never mistakable for a card.' },
  { id: 'inline', label: 'P3 · Inline', note: 'Plate beside the title, not above it. Spends the empty width.' },
  { id: 'large', label: 'P4 · Large', note: 'A bigger plate, and the arrow dropped — the cell was always the target.' },
  { id: 'ring', label: 'P5 · Ring', note: 'Tint fill with a hairline of the accent. An edge without weight.' },
];

export default function DevHomeCardsScreen() {
  const [variant, setVariant] = useState<Variant>('soft');
  const styles = useMemo(() => createStyles(), []);
  /** Falls back rather than asserting: a hot reload keeps the old state
   *  across a rename of these ids, and `!` turned that into a red screen. */
  const active = VARIANTS.find((v) => v.id === variant) ?? VARIANTS[0];

  return (
    <View style={styles.screen}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="dark" />

      <SafeAreaView edges={['top']} style={styles.chromeSafe}>
        <View style={styles.chrome}>
          <Pressable onPress={() => router.back()} hitSlop={12}>
            <Text style={styles.back}>Close</Text>
          </Pressable>
          <Text style={styles.chromeTitle}>Snap · Practice</Text>
          <View style={{ width: 44 }} />
        </View>
        <View style={styles.tabs}>
          {VARIANTS.map((v) => (
            <Pressable
              key={v.id}
              onPress={() => setVariant(v.id)}
              style={[styles.tab, variant === v.id && styles.tabOn]}>
              <Text style={[styles.tabText, variant === v.id && styles.tabTextOn]}>{v.label}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.note}>{active.note}</Text>
      </SafeAreaView>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollInner}>
        {/* The live-class block above them, flattened — the pair has to hold
            its own directly under a black card with a white button on it, and
            judging them on an empty page flatters them. */}
        <View style={styles.hero}>
          <Text style={styles.heroText}>Pick a chapter and your teacher teaches it live.</Text>
          <View style={styles.heroBtn}>
            <Text style={styles.heroBtnText}>Start a Live Class</Text>
          </View>
        </View>

        {/* THE STRIP, exactly as Home draws it: a rule above, a rule below,
            a rule between. No card, no fill, no radius — that is the frame
            these variants must live inside. */}
        <View style={styles.strip}>
          {CARDS.map((c, i) => (
            <View key={c.key} style={[styles.cell, i === 0 ? styles.cellLeft : styles.cellRight]}>
              <CardView c={c} variant={variant} styles={styles} />
            </View>
          ))}
        </View>

        <View style={styles.after}>
          <Text style={styles.afterText}>55 questions in, nothing Strong yet.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

function CardView({ c, variant, styles }: { c: Card; variant: Variant; styles: Styles }) {
  const plate = (size: number, radius: number) => (
    <View
      style={[
        styles.plate,
        {
          width: size,
          height: size,
          borderRadius: radius,
          backgroundColor: c.tint,
        },
        variant === 'ring' && { borderWidth: 1, borderColor: c.accent },
      ]}>
      {/* The glyph in the ink, not reversed out of a saturated square. It is
          the thing meant to be seen; the plate is only the ground it sits on. */}
      <Glyph k={c.key} size={size * 0.52} color={c.onTint} />
    </View>
  );

  if (variant === 'inline') {
    return (
      <>
        <View style={styles.inlineHead}>
          {plate(34, 10)}
          <Text style={styles.titleInline} numberOfLines={2}>
            {c.title}
          </Text>
        </View>
        <Text style={styles.body}>{c.body}</Text>
      </>
    );
  }

  const size = variant === 'large' ? 46 : 38;
  const radius = variant === 'round' ? 99 : variant === 'large' ? 14 : 11;

  return (
    <>
      <View style={styles.head}>
        {plate(size, radius)}
        {/* P4 drops it: a second small mark competing with the icon, pointing
            at a cell that was already the target. */}
        {variant !== 'large' && <Arrow color={colors.faint} />}
      </View>
      <Text style={styles.title}>{c.title}</Text>
      <Text style={styles.body}>{c.body}</Text>
    </>
  );
}

function Arrow({ color }: { color: string }) {
  return (
    <Svg viewBox="0 0 16 16" width={16} height={16} fill="none">
      <Path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** The two glyphs, with their colour opened up so a card can reverse them. */
function Glyph({
  k,
  size,
  color,
  opacity = 1,
}: {
  k: 'snap' | 'practice';
  size: number;
  color: string;
  opacity?: number;
}) {
  /**
   * CONSTANT IN VIEWBOX UNITS, not proportional to the rendered size. The
   * first pass used `size / 12`, which at 40pt gave a stroke of 3.3 inside a
   * 24-unit box — the camera came out as a solid red blob with the line work
   * gone. SVG already scales the stroke with the viewport; scaling it again
   * destroys the drawing at exactly the size that was meant to show it off.
   */
  const w = 1.8;
  if (k === 'snap') {
    return (
      <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" opacity={opacity}
        strokeLinecap="round" strokeLinejoin="round">
        <Path d="M8.6 6.4 9.9 4.1h4.2l1.3 2.3" stroke={color} strokeWidth={w} />
        <Rect x={2.8} y={6.4} width={18.4} height={13.5} rx={3.2} stroke={color} strokeWidth={w} />
        <Circle cx={12} cy={13.2} r={3.6} stroke={color} strokeWidth={w} />
        <Circle cx={12} cy={13.2} r={1.2} fill={color} />
      </Svg>
    );
  }
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" opacity={opacity}
      strokeLinecap="round" strokeLinejoin="round">
      <Path d="M7 5.6h11.4a2 2 0 0 1 2 2v9.2" stroke={color} strokeWidth={w} />
      <Rect x={3.4} y={8.2} width={13.2} height={11.8} rx={2} stroke={color} strokeWidth={w} />
      <Circle cx={6.4} cy={12.4} r={1.15} fill={color} />
      <Path d="M10 12.4h3.9" stroke={color} strokeWidth={w} />
    </Svg>
  );
}

type Styles = ReturnType<typeof createStyles>;

function createStyles() {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.paper },
    chromeSafe: { backgroundColor: colors.paper, borderBottomWidth: 1, borderBottomColor: colors.hairline },
    chrome: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingBottom: 8,
    },
    back: { fontFamily: 'Onest_600SemiBold', fontSize: 15, color: colors.slate, width: 44 },
    chromeTitle: { fontFamily: 'Onest_700Bold', fontSize: 15, color: colors.ink },
    tabs: { flexDirection: 'row', gap: 4, paddingHorizontal: 10 },
    tab: { flex: 1, paddingVertical: 7, borderRadius: 99, alignItems: 'center', backgroundColor: colors.segmentTrack },
    tabOn: { backgroundColor: colors.ink },
    tabText: { fontFamily: 'Onest_600SemiBold', fontSize: 10.5, color: colors.slate },
    tabTextOn: { color: colors.paper },
    note: {
      paddingHorizontal: 16,
      paddingTop: 8,
      paddingBottom: 10,
      fontFamily: 'Onest_400Regular',
      fontSize: 12.5,
      color: colors.faint,
    },

    scroll: { flex: 1 },
    scrollInner: { padding: 20, paddingBottom: 60 },

    hero: {
      backgroundColor: '#211E19',
      borderRadius: 20,
      padding: 20,
      gap: 18,
      marginBottom: 22,
    },
    heroText: { fontFamily: 'Onest_600SemiBold', fontSize: 19, lineHeight: 25, color: '#FFFDF8' },
    heroBtn: { alignSelf: 'flex-start', backgroundColor: '#FFFDF8', borderRadius: 99, paddingHorizontal: 22, paddingVertical: 12 },
    heroBtnText: { fontFamily: 'Onest_700Bold', fontSize: 15, color: colors.ink },

    /** Home's own strip, to the value. */
    strip: { flexDirection: 'row', borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'rgba(28,26,22,.1)' },
    cell: { flex: 1, paddingVertical: 20 },
    cellLeft: { paddingRight: 20, borderRightWidth: 1, borderRightColor: 'rgba(28,26,22,.1)' },
    cellRight: { paddingLeft: 20 },

    head: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
    plate: { alignItems: 'center', justifyContent: 'center' },

    inlineHead: { flexDirection: 'row', alignItems: 'center', gap: 10 },
    titleInline: {
      flex: 1,
      fontFamily: 'Onest_600SemiBold',
      fontSize: 15,
      lineHeight: 19,
      letterSpacing: -0.2,
      color: colors.ink,
    },

    title: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: 16,
      lineHeight: 22,
      letterSpacing: -0.19,
      color: colors.ink,
      marginTop: 12,
    },
    body: {
      fontFamily: 'Onest_400Regular',
      fontSize: 13.5,
      lineHeight: 19,
      color: colors.slate,
      marginTop: 3,
    },

    after: {
      marginTop: 22,
      backgroundColor: '#D9EBDD',
      borderRadius: 14,
      padding: 16,
    },
    afterText: { fontFamily: 'Onest_500Medium', fontSize: 15, color: '#14663A' },
  });
}

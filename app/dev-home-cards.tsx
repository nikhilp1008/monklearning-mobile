import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { colors } from '@/constants/brand';

/**
 * P3 REFINED — the inline plate, four ways of colouring it. Preview only.
 *
 * Three notes on P3, and the third is the substantial one.
 *
 * "NOT CLICKABLE." The arrow was dropped in P4 and the reasoning carried over
 * too far: the cell IS the target, but a target with no mark on it asks the
 * student to guess. It is back, at the foot, with room above it.
 *
 * "CONGESTED." The body sat 3pt under the title. It is 12 now, and the cell
 * breathes at the bottom as well as between its lines — the inline head bought
 * about forty points of height and the fix spends a third of it back as air.
 *
 * "THE COLOURS FEEL GENERIC AND AI-GENERATED." They do, and the cause is not
 * the shade — it is that they are colour-CODING something that has no code.
 * Red for Snap and green for Practice is arbitrary: nothing about practising is
 * green, nothing about a camera is red, and a student learns nothing from
 * either. A pastel square with a matching coloured glyph inside it is also the
 * single most templated component on the internet, which is exactly why it
 * reads as generated.
 *
 * So all four below drop the per-feature colour entirely. Both plates are
 * identical and the only thing that differs between the two cards is the
 * drawing — which is the thing that actually carries meaning. What colour
 * remains is the app's OWN: ink, and one marigold detail that both icons
 * already have built into them (the camera's aperture, the card's bullet).
 * Restraint and a single accent is what the app does everywhere else, and it is
 * what reads as considered rather than assembled.
 *
 *   1 · CREAM     Warm plate, ink glyph, the marigold left doing its job.
 *   2 · INK       The plate goes dark and the glyph reverses. Echoes the hero
 *                 card directly above it.
 *   3 · OUTLINE   No fill at all — a hairline square, like a stamp on
 *                 stationery. The quietest and the most stationery-like.
 *   4 · MARIGOLD  Cream plate, and the ARROW takes the accent in a small solid
 *                 disc, so the colour is spent on the control rather than on
 *                 decoration.
 */

type Card = {
  key: 'snap' | 'practice';
  title: string;
  body: string;
};

const CARDS: Card[] = [
  { key: 'snap', title: 'Snap and Solve', body: 'Up to 3 questions, solved step by step' },
  { key: 'practice', title: 'Practice', body: '150 a day, across all subjects' },
];

/** The app's own, and the only colours here. */
const INK = '#1C1A16';
const MARIGOLD = '#EEA31F';
const CREAM = '#FCF4E0';

type Variant = 'cream' | 'ink' | 'outline' | 'marigold';

const VARIANTS: { id: Variant; label: string; note: string }[] = [
  { id: 'cream', label: '1 · Cream', note: 'Warm plate, ink glyph, the marigold detail left doing its job.' },
  { id: 'ink', label: '2 · Ink', note: 'The plate goes dark and the glyph reverses — the hero card\u2019s family.' },
  { id: 'outline', label: '3 · Outline', note: 'No fill. A hairline square, like a stamp on stationery.' },
  { id: 'marigold', label: '4 · Marigold', note: 'The arrow takes the accent, so colour is spent on the control.' },
];

export default function DevHomeCardsScreen() {
  const [variant, setVariant] = useState<Variant>('cream');
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
  const dark = variant === 'ink';
  const stroke = dark ? '#FFFDF8' : INK;

  return (
    <>
      <View style={styles.inlineHead}>
        <View
          style={[
            styles.plate,
            variant === 'cream' && { backgroundColor: CREAM },
            variant === 'marigold' && { backgroundColor: CREAM },
            dark && { backgroundColor: INK },
            variant === 'outline' && { borderWidth: 1, borderColor: 'rgba(28,26,22,.22)' },
          ]}>
          {/* The marigold stays its own colour in every variant. It is the one
              mark the app signs everything with, and it is already inside both
              of these drawings — the camera's aperture, the card's bullet. */}
          <Glyph k={c.key} size={19} stroke={stroke} dot={MARIGOLD} />
        </View>
        <Text style={styles.titleInline} numberOfLines={2}>
          {c.title}
        </Text>
      </View>

      <Text style={styles.body}>{c.body}</Text>

      {/* AT THE FOOT, with room above it. Dropping it entirely asked the
          student to guess that a cell with no mark on it could be pressed. */}
      <View style={styles.footRow}>
        {variant === 'marigold' ? (
          <View style={styles.goDisc}>
            <Arrow color="#FFFFFF" size={13} />
          </View>
        ) : (
          <Arrow color={INK} size={16} />
        )}
      </View>
    </>
  );
}

function Arrow({ color, size = 16 }: { color: string; size?: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** The two glyphs. Stroke and the marigold detail are separate, so the drawing
 *  can reverse on a dark plate without losing the mark that signs it. */
function Glyph({
  k,
  size,
  stroke,
  dot,
}: {
  k: 'snap' | 'practice';
  size: number;
  stroke: string;
  dot: string;
}) {
  const w = 1.8;
  if (k === 'snap') {
    return (
      <Svg viewBox="0 0 24 24" width={size} height={size} fill="none"
        strokeLinecap="round" strokeLinejoin="round">
        <Path d="M8.6 6.4 9.9 4.1h4.2l1.3 2.3" stroke={stroke} strokeWidth={w} />
        <Rect x={2.8} y={6.4} width={18.4} height={13.5} rx={3.2} stroke={stroke} strokeWidth={w} />
        <Circle cx={12} cy={13.2} r={3.6} stroke={stroke} strokeWidth={w} />
        <Circle cx={12} cy={13.2} r={1.5} fill={dot} />
      </Svg>
    );
  }
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none"
      strokeLinecap="round" strokeLinejoin="round">
      <Path d="M7 5.6h11.4a2 2 0 0 1 2 2v9.2" stroke={stroke} strokeWidth={w} />
      <Rect x={3.4} y={8.2} width={13.2} height={11.8} rx={2} stroke={stroke} strokeWidth={w} />
      <Circle cx={6.4} cy={12.4} r={1.4} fill={dot} />
      <Path d="M10 12.4h3.9" stroke={stroke} strokeWidth={w} />
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

    inlineHead: { flexDirection: 'row', alignItems: 'center', gap: 11 },
    plate: { width: 36, height: 36, borderRadius: 11, alignItems: 'center', justifyContent: 'center' },
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
      /** 12, not 3. The line sat directly under the head and the cell read as
       *  one crowded block; the inline layout bought the height, so some of it
       *  goes back as air. */
      marginTop: 12,
    },
    footRow: { marginTop: 16 },
    goDisc: {
      width: 26,
      height: 26,
      borderRadius: 99,
      backgroundColor: MARIGOLD,
      alignItems: 'center',
      justifyContent: 'center',
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

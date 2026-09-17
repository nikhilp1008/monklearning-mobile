import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { colors } from '@/constants/brand';

/**
 * SNAP AND PRACTICE, FIVE WAYS. Preview only, nothing wired.
 *
 * WHAT IS WRONG WITH THEM TODAY, and it is worth being precise because the
 * brief was "generic" and "not clicky":
 *
 *   THEY HAVE NO SURFACE. They are not cards — they are two cells of a table,
 *   drawn with a rule above, a rule below and a rule between. Nothing about a
 *   hairline says "press me"; a rule is what you put between rows of data.
 *
 *   THE ICON IS THE WEAKEST MARK ON THE SCREEN. A 24pt, 1.7px outline glyph in
 *   the same ink as the body copy, sitting in the corner. It is drawn at the
 *   weight of a footnote directly under a black card with a white button on it.
 *
 *   THE ARROW IS DETACHED. Top-right, far from the title it belongs to, at the
 *   same weight as the icon — so the eye reads four small marks of equal
 *   importance and no hierarchy at all.
 *
 * Every variant below leaves the words alone and changes only the surface and
 * the icon, because that is the ask. They differ in ONE decision: what makes
 * the icon the loudest thing in the card.
 *
 *   1 · PLATE     A filled rounded square behind it, in the accent. The icon
 *                 reverses to white. The most common answer and the most
 *                 reliable.
 *   2 · SCALE     No container at all — the glyph simply gets much bigger and
 *                 takes the accent colour. Quietest, and the least like
 *                 every other app.
 *   3 · REVERSE   The whole card takes the accent; the icon and the words go
 *                 white on it. Loudest, and it makes the pair read as two
 *                 buttons rather than two panels.
 *   4 · BADGE     A circular badge that overlaps the card's top edge, lifted
 *                 on its own shadow. Depth rather than colour.
 *   5 · WASH      A tinted card with the glyph drawn LARGE and faint behind
 *                 the words, plus a small solid one on the line. The icon
 *                 becomes the card's texture instead of an ornament.
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

type Variant = 'plate' | 'scale' | 'reverse' | 'badge' | 'wash';

const VARIANTS: { id: Variant; label: string; note: string }[] = [
  { id: 'plate', label: '1 · Plate', note: 'A filled square behind the icon; the glyph reverses to white.' },
  { id: 'scale', label: '2 · Scale', note: 'No container. The glyph simply gets much bigger, in the accent.' },
  { id: 'reverse', label: '3 · Reverse', note: 'The whole card takes the accent. Two buttons, not two panels.' },
  { id: 'badge', label: '4 · Badge', note: 'A badge overlapping the top edge, lifted on its own shadow.' },
  { id: 'wash', label: '5 · Wash', note: 'The glyph drawn large and faint behind the words, as texture.' },
];

export default function DevHomeCardsScreen() {
  const [variant, setVariant] = useState<Variant>('plate');
  const styles = useMemo(() => createStyles(), []);
  const active = VARIANTS.find((v) => v.id === variant)!;

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

        <View style={styles.pair}>
          {CARDS.map((c) => (
            <CardView key={c.key} c={c} variant={variant} styles={styles} />
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
  const reversed = variant === 'reverse';
  const glyph = reversed ? '#FFFFFF' : variant === 'plate' ? '#FFFFFF' : c.accent;
  const titleColor = reversed ? '#FFFFFF' : colors.ink;
  const bodyColor = reversed ? 'rgba(255,255,255,0.82)' : colors.slate;

  return (
    <View
      style={[
        styles.card,
        variant === 'plate' && styles.cardPlain,
        variant === 'scale' && styles.cardPlain,
        variant === 'badge' && [styles.cardPlain, styles.cardBadge],
        variant === 'wash' && [styles.cardWash, { backgroundColor: c.tint }],
        reversed && { backgroundColor: c.accent },
      ]}>
      {/* 5 · the glyph as the card's texture, behind the words. */}
      {variant === 'wash' && (
        <View style={styles.washArt} pointerEvents="none">
          <Glyph k={c.key} size={132} color={c.accent} opacity={0.1} />
        </View>
      )}

      {/* 4 · the badge breaks the top edge, so it reads as sitting ON the card
             rather than inside it. */}
      {variant === 'badge' && (
        <View style={[styles.badge, { backgroundColor: c.accent }]}>
          <Glyph k={c.key} size={22} color="#FFFFFF" />
        </View>
      )}

      {variant === 'plate' && (
        <View style={[styles.plate, { backgroundColor: c.accent }]}>
          <Glyph k={c.key} size={21} color={glyph} />
        </View>
      )}

      {variant === 'scale' && (
        <View style={styles.scaleSlot}>
          <Glyph k={c.key} size={40} color={c.accent} />
        </View>
      )}

      {variant === 'reverse' && (
        <View style={styles.reverseSlot}>
          <Glyph k={c.key} size={26} color="#FFFFFF" />
        </View>
      )}

      {variant === 'wash' && (
        <View style={styles.scaleSlot}>
          <Glyph k={c.key} size={24} color={c.onTint} />
        </View>
      )}

      <Text style={[styles.title, { color: variant === 'wash' ? c.onTint : titleColor }]}>
        {c.title}
      </Text>
      <Text style={[styles.body, { color: variant === 'wash' ? c.onTint : bodyColor }]}>
        {c.body}
      </Text>
    </View>
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

    pair: { flexDirection: 'row', gap: 12 },
    card: { flex: 1, borderRadius: 16, padding: 14, minHeight: 148, justifyContent: 'flex-start' },
    /** White face, hairline, one soft lift. Enough to be an object. */
    cardPlain: {
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: colors.hairline,
      boxShadow: [
        { offsetX: 0, offsetY: 4, blurRadius: 12, spreadDistance: -6, color: 'rgba(28,26,22,0.22)' },
      ],
    },
    cardBadge: { marginTop: 16, paddingTop: 26 },
    cardWash: { overflow: 'hidden' },

    plate: {
      width: 40,
      height: 40,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
    },
    scaleSlot: { marginBottom: 12 },
    reverseSlot: { marginBottom: 12 },
    badge: {
      position: 'absolute',
      top: -16,
      left: 14,
      width: 40,
      height: 40,
      borderRadius: 99,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      borderColor: colors.paper,
      boxShadow: [
        { offsetX: 0, offsetY: 4, blurRadius: 10, spreadDistance: -3, color: 'rgba(28,26,22,0.35)' },
      ],
    },
    washArt: { position: 'absolute', right: -26, bottom: -26 },

    title: { fontFamily: 'Onest_700Bold', fontSize: 16.5, letterSpacing: -0.3, marginBottom: 4 },
    body: { fontFamily: 'Onest_400Regular', fontSize: 13, lineHeight: 18 },

    after: {
      marginTop: 22,
      backgroundColor: '#D9EBDD',
      borderRadius: 14,
      padding: 16,
    },
    afterText: { fontFamily: 'Onest_500Medium', fontSize: 15, color: '#14663A' },
  });
}

import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Line, Rect } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { SUBJECT_TILES, SubjectArt } from '@/components/textbook/subjects';
import { PREVIEW_SUBJECTS, type Subject } from '@/app/dev-textbook-cards';

/**
 * THE SPINE, FOUR MORE WAYS — and the cover with something on it.
 *
 * A was the direction; the name on it was the problem. THE BUG, because it is
 * worth naming: the label was rotated with a transform while still sitting in
 * the layout flow, so its BOX was 150pt wide inside a 40pt spine. Yoga laid out
 * the 150, the paint rotated the glyphs, and the two disagreed — which is the
 * lines-through-the-letters and the clipped descenders.
 *
 * Every rotation below is absolutely centred in its spine first and rotated
 * second, so the box and the paint agree. The rules that ran into the type are
 * gone from all of them.
 *
 *   A1 · LETTERS   No rotation at all. The name runs down the spine one letter
 *                  at a time, which is what a genuinely narrow spine does, and
 *                  it cannot clip or collide with anything.
 *
 *   A2 · ROTATED   The rotation done properly, on a wider cloth, with nothing
 *                  else on the spine. The quietest of the four.
 *
 *   A3 · FACE      Spine AND cover, the way a book actually sits on a shelf at
 *                  an angle: a narrow binding, then the face with the name set
 *                  horizontally and the subject's own drawing on it.
 *
 *   A4 · BANDS     A hardback: raised bands across the spine, a headband at the
 *                  top, the name between the bands. The most bookish.
 *
 *   B2 · COVER+    B, which was too empty, with the drawing it was missing —
 *                  placed in its own half so it can never touch the title or
 *                  the rule.
 *
 * The drawings are `SubjectArt`, the ones already on the tiles today, so
 * nothing new is invented — they are just given somewhere better to sit.
 */

type Variant = 'letters' | 'rotated' | 'face' | 'bands' | 'cover';

const VARIANTS: { id: Variant; label: string; note: string }[] = [
  { id: 'letters', label: 'A1 · Letters', note: 'No rotation: the name runs down one letter at a time, as a narrow spine does.' },
  { id: 'rotated', label: 'A2 · Rotated', note: 'The rotation done properly, and nothing else on the cloth.' },
  { id: 'face', label: 'A3 · Face', note: 'Spine and cover together — binding, then the face with its drawing.' },
  { id: 'bands', label: 'A4 · Bands', note: 'A hardback: raised bands, a headband, the name between them.' },
  { id: 'cover', label: 'B2 · Cover+', note: 'B with the drawing it was missing, in its own half.' },
];

const NOTE =
  'Not a scan of anyone else’s book. Every chapter here was written for Monk by the strongest models available, then recomputed and checked against the syllabus — question by question, formula by formula.';

/** The tile the drawings expect, with the ink swapped for whatever the card
 *  needs — light on cloth, dark on paper. */
function artTile(s: Subject, ink: string) {
  return { ...SUBJECT_TILES[s.key === 'maths' ? 'mathematics' : s.key], ink };
}

export default function DevTextbookCards2Screen() {
  const [variant, setVariant] = useState<Variant>('letters');
  const styles = useMemo(() => createStyles(), []);
  const active = VARIANTS.find((v) => v.id === variant)!;

  const Card =
    variant === 'letters'
      ? LettersCard
      : variant === 'rotated'
        ? RotatedCard
        : variant === 'face'
          ? FaceCard
          : variant === 'bands'
            ? BandsCard
            : CoverPlusCard;

  return (
    <View style={styles.screen}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="dark" />

      <SafeAreaView edges={['top']} style={styles.chromeSafe}>
        <View style={styles.chrome}>
          <Pressable onPress={() => router.back()} hitSlop={12}>
            <Text style={styles.back}>Close</Text>
          </Pressable>
          <Text style={styles.chromeTitle}>Spine, explored</Text>
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
        <Text style={styles.pageTitle}>Textbooks</Text>
        <View style={styles.grid}>
          {PREVIEW_SUBJECTS.map((s) => (
            <Card key={s.key} s={s} styles={styles} />
          ))}
        </View>
        <Text style={styles.disclaimer}>{NOTE}</Text>
      </ScrollView>
    </View>
  );
}

/** The chapter line, the same on every card. */
function Foot({ s, styles, light }: { s: Subject; styles: Styles; light?: boolean }) {
  return (
    <Text style={[styles.count, { color: light ? s.onCloth : s.ink }]}>
      {s.chapters ? `${s.chapters} chapters` : 'coming soon'}
    </Text>
  );
}

/** A1 · Letters stacked down the spine. Nothing rotates, so nothing can clip. */
function LettersCard({ s, styles }: { s: Subject; styles: Styles }) {
  return (
    <View style={styles.card}>
      <View style={[styles.clothNarrow, { backgroundColor: s.cloth }]}>
        {s.label.toUpperCase().split('').map((ch, i) => (
          <Text key={i} style={[styles.stackLetter, { color: s.onCloth }]}>
            {ch}
          </Text>
        ))}
      </View>
      <View style={[styles.face, { backgroundColor: s.paper }]}>
        <PageEdges s={s} styles={styles} />
        <View style={styles.faceFoot}>
          <Foot s={s} styles={styles} />
          <Text style={[styles.classes, { color: s.ink }]}>{s.classes}</Text>
        </View>
      </View>
    </View>
  );
}

/** A2 · The rotation, done so the box and the paint agree. */
function RotatedCard({ s, styles }: { s: Subject; styles: Styles }) {
  return (
    <View style={styles.card}>
      <View style={[styles.clothWide, { backgroundColor: s.cloth }]}>
        {/* Centred FIRST, rotated second. The unrotated box is 150 x 26, which
            after rotation occupies 26 across — inside the 46 of cloth. */}
        <View style={styles.rotateSlot}>
          <Text style={[styles.rotatedLabel, { color: s.onCloth }]} numberOfLines={1}>
            {s.label}
          </Text>
        </View>
      </View>
      <View style={[styles.face, { backgroundColor: s.paper }]}>
        <PageEdges s={s} styles={styles} />
        <View style={styles.faceFoot}>
          <Foot s={s} styles={styles} />
          <Text style={[styles.classes, { color: s.ink }]}>{s.classes}</Text>
        </View>
      </View>
    </View>
  );
}

/** A3 · Binding and face together, with the subject's own drawing on the face. */
function FaceCard({ s, styles }: { s: Subject; styles: Styles }) {
  return (
    <View style={styles.card}>
      <View style={[styles.binding, { backgroundColor: s.cloth }]} />
      <View style={[styles.face, { backgroundColor: s.paper }]}>
        <View style={styles.artSlot}>
          <SubjectArt subject={s.key === 'maths' ? 'mathematics' : s.key} size={68} tile={artTile(s, s.ink)} />
        </View>
        <View style={styles.faceFoot}>
          <Text style={[styles.faceLabel, { color: s.ink }]}>{s.label}</Text>
          <Foot s={s} styles={styles} />
        </View>
      </View>
    </View>
  );
}

/** A4 · A hardback — headband, raised bands, the name between them. */
function BandsCard({ s, styles }: { s: Subject; styles: Styles }) {
  return (
    <View style={styles.card}>
      <View style={[styles.clothWide, { backgroundColor: s.cloth }]}>
        {/* The headband: the woven strip at the top of a bound spine. */}
        <View style={[styles.headband, { backgroundColor: s.onCloth }]} />
        <View style={[styles.band, { top: 40, backgroundColor: s.paper }]} />
        <View style={styles.rotateSlot}>
          <Text style={[styles.rotatedLabel, { color: s.onCloth }]} numberOfLines={1}>
            {s.label}
          </Text>
        </View>
        <View style={[styles.band, { bottom: 40, backgroundColor: s.paper }]} />
        <View style={[styles.headband, styles.headbandFoot, { backgroundColor: s.onCloth }]} />
      </View>
      <View style={[styles.face, { backgroundColor: s.paper }]}>
        <PageEdges s={s} styles={styles} />
        <View style={styles.faceFoot}>
          <Foot s={s} styles={styles} />
          <Text style={[styles.classes, { color: s.ink }]}>{s.classes}</Text>
        </View>
      </View>
    </View>
  );
}

/** B2 · The cover, with the drawing in its own half. */
function CoverPlusCard({ s, styles }: { s: Subject; styles: Styles }) {
  return (
    <View style={[styles.cover, { backgroundColor: s.cloth }]}>
      <View style={[styles.coverFrame, { borderColor: s.onCloth }]} />
      <View style={styles.coverTop}>
        <MonkMark color={s.onCloth} />
        <Text style={[styles.coverClasses, { color: s.onCloth }]}>{s.classes}</Text>
      </View>
      {/* Its own half, so it cannot reach the title or the rule below it. */}
      <View style={styles.coverArt}>
        <SubjectArt
          subject={s.key === 'maths' ? 'mathematics' : s.key}
          size={76}
          tile={artTile(s, s.onCloth)}
        />
      </View>
      <Text style={[styles.coverLabel, { color: s.onCloth }]} numberOfLines={1}>
        {s.label}
      </Text>
      <View style={[styles.coverRule, { backgroundColor: s.onCloth }]} />
      <Foot s={s} styles={styles} light />
    </View>
  );
}

/** The page block's edges, thinning as they recede. */
function PageEdges({ s, styles }: { s: Subject; styles: Styles }) {
  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <View
          key={i}
          style={[styles.pageEdge, { left: 5 + i * 3.5, opacity: 0.4 - i * 0.07, backgroundColor: s.ink }]}
        />
      ))}
    </>
  );
}

function MonkMark({ color }: { color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={15} height={15} fill="none">
      <Circle cx={12} cy={12} r={8.4} stroke={color} strokeWidth={1.6} opacity={0.9} />
      <Circle cx={12} cy={12} r={3.4} stroke={color} strokeWidth={1.6} opacity={0.9} />
      <Line x1={12} y1={1.6} x2={12} y2={4.2} stroke={color} strokeWidth={1.6} />
      <Rect x={10.9} y={10.9} width={2.2} height={2.2} rx={1.1} fill={color} />
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
    scrollInner: { padding: 20, paddingBottom: 48 },
    pageTitle: {
      fontFamily: 'Onest_700Bold',
      fontSize: 30,
      letterSpacing: -0.9,
      color: colors.ink,
      marginBottom: 16,
    },
    grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },

    card: {
      flexGrow: 1,
      flexBasis: '46%',
      height: 196,
      flexDirection: 'row',
      borderRadius: 6,
      overflow: 'hidden',
      boxShadow: [
        { offsetX: 0, offsetY: 5, blurRadius: 14, spreadDistance: -6, color: 'rgba(28,26,22,0.3)' },
      ],
    },

    /* A1 */
    clothNarrow: { width: 30, alignItems: 'center', justifyContent: 'center', paddingVertical: 10 },
    stackLetter: {
      fontFamily: 'Onest_700Bold',
      fontSize: 11.5,
      lineHeight: 15,
      letterSpacing: 0.4,
    },

    /* A2 and A4 */
    clothWide: { width: 46, position: 'relative' },
    /** Centre first, rotate second — the whole of the fix. */
    rotateSlot: { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center' },
    rotatedLabel: {
      width: 150,
      height: 26,
      lineHeight: 26,
      textAlign: 'center',
      fontFamily: 'Onest_700Bold',
      fontSize: 15,
      letterSpacing: 0.5,
      transform: [{ rotate: '-90deg' }],
    },
    headband: { position: 'absolute', top: 0, left: 0, right: 0, height: 5, opacity: 0.85 },
    headbandFoot: { top: undefined, bottom: 0 },
    band: { position: 'absolute', left: 0, right: 0, height: 2, opacity: 0.35 },

    /* A3 */
    binding: { width: 12 },
    artSlot: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 6 },
    faceLabel: { fontFamily: 'Onest_700Bold', fontSize: 19, letterSpacing: -0.4, marginBottom: 1 },

    face: { flex: 1, position: 'relative' },
    pageEdge: { position: 'absolute', top: 0, bottom: 0, width: 1 },
    faceFoot: { position: 'absolute', left: 14, right: 12, bottom: 12, gap: 1 },
    count: { fontFamily: 'Onest_600SemiBold', fontSize: 13 },
    classes: { fontFamily: 'Onest_400Regular', fontSize: 11, opacity: 0.75 },

    /* B2 */
    cover: {
      flexGrow: 1,
      flexBasis: '46%',
      height: 216,
      borderRadius: 4,
      borderTopLeftRadius: 2,
      borderBottomLeftRadius: 2,
      padding: 14,
      boxShadow: [
        { offsetX: 0, offsetY: 6, blurRadius: 16, spreadDistance: -6, color: 'rgba(28,26,22,0.34)' },
      ],
    },
    coverFrame: {
      position: 'absolute',
      top: 8,
      left: 8,
      right: 8,
      bottom: 8,
      borderWidth: 1,
      opacity: 0.4,
      borderRadius: 2,
    },
    coverTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    coverClasses: { fontFamily: 'Onest_500Medium', fontSize: 10, opacity: 0.85 },
    /** A slot of its own between the colophon row and the title, so the drawing
     *  has nowhere to reach either of them. */
    coverArt: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    coverLabel: { fontFamily: 'Onest_700Bold', fontSize: 22, letterSpacing: -0.5 },
    coverRule: { height: 1, marginTop: 7, marginBottom: 6, opacity: 0.5 },

    disclaimer: {
      marginTop: 22,
      fontFamily: 'Onest_400Regular',
      fontSize: 12.5,
      lineHeight: 12.5 * 1.5,
      color: colors.faint,
    },
  });
}

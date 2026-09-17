import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Line, Path, Rect } from 'react-native-svg';

import { colors } from '@/constants/brand';

/**
 * FOUR WAYS A TEXTBOOK COULD LOOK ON THE SHELF. Preview only, not wired.
 *
 * The tiles today are a pastel rectangle with a dotted inner border and a piece
 * of line art in the middle — a shape that says "category" rather than "book",
 * and one you have seen on a hundred other screens. Nothing about it suggests
 * there are four hundred pages behind it or that opening one is worth doing.
 *
 * So each variant below answers the same question differently: what makes a
 * rectangle on a screen feel like something you want to open?
 *
 *   A · SPINE      It is a book seen edge-on. Cloth binding, a foil rule, the
 *                  page block beside it. The most literal answer, and the one
 *                  that most looks like it came off a shelf.
 *
 *   B · COVER      It is a book seen face-on: one colour, the subject set
 *                  large, a ruled frame, the class and the chapter count at
 *                  the foot. Typographic rather than illustrated — a Penguin
 *                  spine, not a clipart icon.
 *
 *   C · EDGES      The fore-edge of a thick book, pages stacked and visible.
 *                  Answers "how much is in here" before you tap.
 *
 *   D · SHELF      Not a grid at all. Full-width rows, each a spine laid on
 *                  its side, which also fixes the dangling third card the
 *                  two-column grid leaves.
 *
 * All four use the subject colours already in `SUBJECT_TILES`, so this is a
 * question about form, not about palette.
 */

type Subject = {
  key: string;
  label: string;
  /** The binding. */
  cloth: string;
  /** Type on the cloth. */
  onCloth: string;
  /** The page block and the quiet ink on it. */
  paper: string;
  ink: string;
  chapters: number | null;
  classes: string;
};

const SUBJECTS: Subject[] = [
  {
    key: 'physics',
    label: 'Physics',
    cloth: '#B4392B',
    onCloth: '#FFF5F1',
    paper: '#FBEBE4',
    ink: '#A93425',
    chapters: 28,
    classes: 'Class 11 · 12',
  },
  {
    key: 'maths',
    label: 'Maths',
    cloth: '#B98514',
    onCloth: '#FFFAEC',
    paper: '#FCF4E0',
    ink: '#9A6A12',
    chapters: 27,
    classes: 'Class 11 · 12',
  },
  {
    key: 'chemistry',
    label: 'Chemistry',
    cloth: '#1C7A47',
    onCloth: '#F1F8F3',
    paper: '#EAF0EA',
    ink: '#157A45',
    chapters: null,
    classes: 'Class 11 · 12',
  },
  {
    key: 'biology',
    label: 'Biology',
    cloth: '#2F6E8F',
    onCloth: '#F0F7FB',
    paper: '#E9F1F6',
    ink: '#2A5F7C',
    chapters: null,
    classes: 'Class 11 · 12',
  },
];

type Variant = 'spine' | 'cover' | 'edges' | 'shelf';

const VARIANTS: { id: Variant; label: string; note: string }[] = [
  { id: 'spine', label: 'A · Spine', note: 'A book seen edge-on — cloth binding and the page block beside it.' },
  { id: 'cover', label: 'B · Cover', note: 'A book seen face-on. Typographic, no illustration.' },
  { id: 'edges', label: 'C · Edges', note: 'The fore-edge of a thick book. Says how much is inside.' },
  { id: 'shelf', label: 'D · Shelf', note: 'Rows, not a grid. Fixes the dangling third card.' },
];

/**
 * The line under the shelf.
 *
 * Deliberately not a legal disclaimer in tone — it is the opposite, a claim.
 * Three wordings are in the message that came with this; this is the one that
 * says the most in the fewest words.
 */
const NOTE =
  'Not a scan of anyone else’s book. Every chapter here was written for Monk by the strongest models available, then recomputed and checked against the syllabus — question by question, formula by formula.';

export default function DevTextbookCardsScreen() {
  const [variant, setVariant] = useState<Variant>('spine');
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
          <Text style={styles.chromeTitle}>Textbook cards</Text>
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

        {variant === 'shelf' ? (
          <View style={styles.rows}>
            {SUBJECTS.map((s) => (
              <ShelfRow key={s.key} s={s} styles={styles} />
            ))}
          </View>
        ) : (
          <View style={styles.grid}>
            {SUBJECTS.map((s) =>
              variant === 'spine' ? (
                <SpineCard key={s.key} s={s} styles={styles} />
              ) : variant === 'cover' ? (
                <CoverCard key={s.key} s={s} styles={styles} />
              ) : (
                <EdgeCard key={s.key} s={s} styles={styles} />
              )
            )}
          </View>
        )}

        <Text style={styles.disclaimer}>{NOTE}</Text>
      </ScrollView>
    </View>
  );
}

/** A · The book edge-on: cloth spine, foil rule, page block. */
function SpineCard({ s, styles }: { s: Subject; styles: Styles }) {
  return (
    <View style={styles.card}>
      <View style={[styles.spineCloth, { backgroundColor: s.cloth }]}>
        <View style={[styles.foil, { backgroundColor: s.onCloth }]} />
        <Text style={[styles.spineLabel, { color: s.onCloth }]} numberOfLines={1}>
          {s.label}
        </Text>
        <View style={[styles.foil, { backgroundColor: s.onCloth }]} />
      </View>
      <View style={[styles.pageBlock, { backgroundColor: s.paper }]}>
        {/* Page edges, thinning as they recede. */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <View
            key={i}
            style={[
              styles.pageEdge,
              { left: 6 + i * 4, opacity: 0.5 - i * 0.07, backgroundColor: s.ink },
            ]}
          />
        ))}
        <View style={styles.pageFoot}>
          <Text style={[styles.count, { color: s.ink }]}>
            {s.chapters ? `${s.chapters} chapters` : 'coming soon'}
          </Text>
          <Text style={[styles.classes, { color: s.ink }]}>{s.classes}</Text>
        </View>
      </View>
    </View>
  );
}

/** B · The book face-on: one colour, a ruled frame, type doing the work. */
function CoverCard({ s, styles }: { s: Subject; styles: Styles }) {
  return (
    <View style={[styles.cover, { backgroundColor: s.cloth }]}>
      <View style={[styles.coverFrame, { borderColor: s.onCloth }]} />
      <View style={styles.coverTop}>
        <MonkMark color={s.onCloth} />
        <Text style={[styles.coverClasses, { color: s.onCloth }]}>{s.classes}</Text>
      </View>
      <Text style={[styles.coverLabel, { color: s.onCloth }]} numberOfLines={2}>
        {s.label}
      </Text>
      <View style={[styles.coverRule, { backgroundColor: s.onCloth }]} />
      <Text style={[styles.coverCount, { color: s.onCloth }]}>
        {s.chapters ? `${s.chapters} chapters` : 'coming soon'}
      </Text>
    </View>
  );
}

/** C · The fore-edge: a thick stack of pages, seen from the side. */
function EdgeCard({ s, styles }: { s: Subject; styles: Styles }) {
  return (
    <View style={[styles.edgeCard, { backgroundColor: s.paper }]}>
      <View style={styles.edgeStack}>
        {Array.from({ length: 14 }).map((_, i) => (
          <View
            key={i}
            style={[styles.edgeLine, { top: 16 + i * 7, backgroundColor: s.ink, opacity: 0.1 + (i % 3) * 0.05 }]}
          />
        ))}
      </View>
      <View style={[styles.edgeBand, { backgroundColor: s.cloth }]} />
      <View style={styles.edgeBody}>
        <Text style={[styles.edgeLabel, { color: s.ink }]}>{s.label}</Text>
        <Text style={[styles.count, { color: s.ink }]}>
          {s.chapters ? `${s.chapters} chapters` : 'coming soon'}
        </Text>
      </View>
    </View>
  );
}

/** D · A shelf: full-width rows, each a spine lying down. */
function ShelfRow({ s, styles }: { s: Subject; styles: Styles }) {
  return (
    <View style={[styles.row, { backgroundColor: s.paper }]}>
      <View style={[styles.rowSpine, { backgroundColor: s.cloth }]}>
        <Text style={[styles.rowInitial, { color: s.onCloth }]}>{s.label[0]}</Text>
      </View>
      <View style={styles.rowBody}>
        <Text style={[styles.rowLabel, { color: s.ink }]}>{s.label}</Text>
        <Text style={[styles.rowMeta, { color: s.ink }]}>
          {s.chapters ? `${s.chapters} chapters · ${s.classes}` : `coming soon · ${s.classes}`}
        </Text>
      </View>
      <Svg viewBox="0 0 16 16" width={16} height={16} fill="none">
        <Path d="M6 3.5 10.5 8 6 12.5" stroke={s.ink} strokeWidth={1.8} strokeLinecap="round" />
      </Svg>
    </View>
  );
}

/** The mark, small enough to read as a publisher's colophon. */
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
  const GUTTER = 20;
  const GAP = 12;
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
    tabs: { flexDirection: 'row', gap: 6, paddingHorizontal: 12 },
    tab: { flex: 1, paddingVertical: 8, borderRadius: 99, alignItems: 'center', backgroundColor: colors.segmentTrack },
    tabOn: { backgroundColor: colors.ink },
    tabText: { fontFamily: 'Onest_600SemiBold', fontSize: 12, color: colors.slate },
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
    scrollInner: { padding: GUTTER, paddingBottom: 48 },
    pageTitle: {
      fontFamily: 'Onest_700Bold',
      fontSize: 30,
      letterSpacing: -0.9,
      color: colors.ink,
      marginBottom: 16,
    },
    grid: { flexDirection: 'row', flexWrap: 'wrap', gap: GAP },
    rows: { gap: 10 },

    /* ---- A · spine ---- */
    card: {
      width: `${50}%`,
      flexGrow: 1,
      flexBasis: '46%',
      height: 190,
      flexDirection: 'row',
      borderRadius: 6,
      overflow: 'hidden',
      boxShadow: [
        { offsetX: 0, offsetY: 5, blurRadius: 14, spreadDistance: -6, color: 'rgba(28,26,22,0.3)' },
      ],
    },
    spineCloth: { width: 40, alignItems: 'center', justifyContent: 'center', paddingVertical: 12, gap: 10 },
    foil: { width: 18, height: 1.5, opacity: 0.8 },
    spineLabel: {
      fontFamily: 'Onest_700Bold',
      fontSize: 15,
      letterSpacing: 0.6,
      transform: [{ rotate: '-90deg' }],
      width: 150,
      textAlign: 'center',
    },
    pageBlock: { flex: 1, position: 'relative' },
    pageEdge: { position: 'absolute', top: 0, bottom: 0, width: 1 },
    pageFoot: { position: 'absolute', left: 14, right: 12, bottom: 12, gap: 1 },
    count: { fontFamily: 'Onest_600SemiBold', fontSize: 13 },
    classes: { fontFamily: 'Onest_400Regular', fontSize: 11, opacity: 0.75 },

    /* ---- B · cover ---- */
    cover: {
      flexGrow: 1,
      flexBasis: '46%',
      height: 216,
      borderRadius: 4,
      borderTopLeftRadius: 2,
      borderBottomLeftRadius: 2,
      padding: 14,
      justifyContent: 'flex-start',
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
      opacity: 0.45,
      borderRadius: 2,
    },
    coverTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    coverClasses: { fontFamily: 'Onest_500Medium', fontSize: 10, opacity: 0.85 },
    coverLabel: {
      marginTop: 'auto',
      fontFamily: 'Onest_700Bold',
      fontSize: 26,
      lineHeight: 29,
      letterSpacing: -0.7,
    },
    coverRule: { height: 1, marginTop: 9, marginBottom: 7, opacity: 0.55 },
    coverCount: { fontFamily: 'Onest_500Medium', fontSize: 11.5, opacity: 0.9 },

    /* ---- C · edges ---- */
    edgeCard: {
      flexGrow: 1,
      flexBasis: '46%',
      height: 190,
      borderRadius: 10,
      overflow: 'hidden',
      position: 'relative',
      justifyContent: 'flex-end',
    },
    edgeStack: { ...StyleSheet.absoluteFillObject },
    edgeLine: { position: 'absolute', left: 18, right: 0, height: 1 },
    edgeBand: { position: 'absolute', left: 0, top: 0, bottom: 0, width: 9 },
    edgeBody: { padding: 14, paddingLeft: 22 },
    edgeLabel: { fontFamily: 'Onest_700Bold', fontSize: 21, letterSpacing: -0.5, marginBottom: 2 },

    /* ---- D · shelf ---- */
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 14,
      borderRadius: 12,
      paddingRight: 14,
      overflow: 'hidden',
    },
    rowSpine: { width: 52, height: 70, alignItems: 'center', justifyContent: 'center' },
    rowInitial: { fontFamily: 'Onest_700Bold', fontSize: 24 },
    rowBody: { flex: 1, gap: 1 },
    rowLabel: { fontFamily: 'Onest_700Bold', fontSize: 17, letterSpacing: -0.3 },
    rowMeta: { fontFamily: 'Onest_400Regular', fontSize: 12.5, opacity: 0.8 },

    disclaimer: {
      marginTop: 22,
      fontFamily: 'Onest_400Regular',
      fontSize: 12.5,
      lineHeight: 12.5 * 1.5,
      color: colors.faint,
    },
  });
}

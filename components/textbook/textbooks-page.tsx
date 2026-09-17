import { router } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { LayoutChangeEvent, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/brand';
import { SUBJECT_TILES, SubjectArt } from '@/components/textbook/subjects';
import { getProfile } from '@/lib/profile';
import { readyChapterCount, textbookSubjects } from '@/lib/textbooks';

/**
 * The body of the Textbooks tab: pick a subject.
 *
 * Each tile is a book. The radius is asymmetric and a coloured bar runs down
 * the left edge, so the card reads as something with a spine; the panel
 * inside is ruled with a dot grid like squared paper; and every subject gets
 * a drawing of its own rather than a glyph on a coloured square.
 *
 * The count under each drawing is the number of chapters actually written,
 * from the registry — not the syllabus length. Physics and Maths are complete
 * at 28 and 27; Chemistry and Biology have none yet and say so, rather than
 * promising a number that opens onto a screen of SOON.
 *
 * No page title of its own — the screen that mounts this heads itself, and
 * repeating the word would push the tiles down the page to say nothing new.
 *
 * Tiles follow the student's exam, so a JEE student sees three and never
 * Biology, a NEET student sees three and never Mathematics, and a student
 * preparing for both sees four. The same rule and the same helper the Learn
 * catalogue uses, so the two cannot disagree.
 */
export function TextbooksPage({
  scale,
  verticalScale,
}: {
  scale: (n: number) => number;
  verticalScale: (n: number) => number;
}) {
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [subjects, setSubjects] = useState<string[] | null>(null);
  /**
   * The row's real width, measured.
   *
   * Two earlier attempts failed for the same underlying reason. Deriving the
   * width from `scale(390)` produced an exact fit that sub-pixel rounding
   * tipped into wrapping. Letting flex share the row instead left Mathematics
   * at 192.7pt against Physics and Chemistry at 173.0pt, because a flex item
   * will not shrink below its own content and "Mathematics" is a longer word
   * than its half of the row; `minWidth: 0` did not move it.
   *
   * Measuring the container removes both failure modes: the number comes from
   * the layout that actually happened rather than from the window, and
   * flooring it guarantees two tiles plus the gap can never exceed it.
   */
  const [rowWidth, setRowWidth] = useState(0);
  const onRowLayout = (event: LayoutChangeEvent) => {
    const measured = event.nativeEvent.layout.width;
    setRowWidth((current) => (Math.abs(current - measured) > 0.5 ? measured : current));
  };
  const tileWidth = rowWidth > 0 ? Math.floor((rowWidth - scale(16)) / 2) : undefined;

  useEffect(() => {
    let cancelled = false;
    getProfile()
      .then((profile) => {
        if (!cancelled) setSubjects(textbookSubjects(profile.exam));
      })
      .catch(() => {
        // A profile that will not load is not a reason to show nothing: the
        // JEE trio is the safe default and the grid corrects itself on the
        // next open.
        if (!cancelled) setSubjects(['physics', 'chemistry', 'mathematics']);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Laid out as explicit rows of two rather than a wrapping grid.
  //
  // The wrapping version computed each tile as
  // `(scale(390) - gutters - gap) / 2`, and since `scale(390)` resolves to
  // exactly the window width that is an exact fit: two tiles plus the gap
  // equal the content box to the last decimal. Any sub-pixel rounding tips
  // the second tile onto its own line, which is why it looked right on one
  // device and stacked one-per-row on another. Letting flex distribute the
  // remaining space removes the arithmetic, and with it the rounding.
  const rows: (string | null)[][] = [];
  for (let i = 0; i < (subjects ?? []).length; i += 2) {
    const pair = (subjects ?? []).slice(i, i + 2);
    // An odd last subject keeps its half-width; without the filler, `flex: 1`
    // would stretch it into a full-width banner.
    rows.push(pair.length === 2 ? pair : [pair[0], null]);
  }

  return (
    <View>
      <View style={styles.grid}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row} onLayout={rowIndex === 0 ? onRowLayout : undefined}>
          {row.map((subject, columnIndex) => {
            if (!subject) return <View key={`gap-${columnIndex}`} style={styles.filler} />;
            const tile = SUBJECT_TILES[subject];
            if (!tile) return <View key={subject} style={styles.filler} />;
            // Hidden until measured, so a first frame at the wrong width is
            // never visible.
            if (!tileWidth) return <View key={subject} style={styles.filler} />;
            const ready = readyChapterCount(subject);
            return (
              <Pressable
                key={subject}
                onPress={() => router.push({ pathname: '/textbook-chapters', params: { subject } })}
                style={({ pressed }) => [
                  styles.tile,
                  { width: tileWidth, backgroundColor: tile.background, borderColor: tile.border },
                  pressed && styles.tilePressed,
                ]}>
                {/* THE BINDING. Cloth, full height, with the subject's name
                    turned on it — the one thing that stops a rectangle reading
                    as a category chip and starts it reading as a book.

                    The name is CENTRED FIRST AND ROTATED SECOND, and that
                    order is load-bearing. Rotating a `Text` that is still in
                    the layout flow leaves Yoga measuring its unrotated box —
                    150pt wide inside a 46pt spine — so the layout and the
                    paint disagree, and the glyphs clip and collide with
                    anything else on the cloth. Absolutely centred in the
                    spine, the box is 150 x 26 and after rotation occupies 26
                    across, which fits. */}
                <View style={[styles.cloth, { backgroundColor: tile.ink }]}>
                  <View style={styles.rotateSlot}>
                    <Text
                      style={[styles.spineName, { color: tile.background }]}
                      numberOfLines={1}>
                      {tile.label}
                    </Text>
                  </View>
                </View>

                <View style={styles.block}>
                  {/* The page edges, thinning as they recede. */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <View
                      key={i}
                      style={[
                        styles.pageEdge,
                        { left: scale(5 + i * 3.5), opacity: 0.4 - i * 0.07, backgroundColor: tile.ink },
                      ]}
                    />
                  ))}

                  {/* The drawing fills the height the count used to leave
                      empty. Inset past the page edges so it cannot sit on
                      them. */}
                  <View style={styles.art}>
                    <SubjectArt subject={subject} size={scale(92)} tile={tile} />
                  </View>

                  {/* Set to the RIGHT, clear of the edges. It was at 14 from
                      the left, which is exactly where the fourth and fifth
                      page edges are drawn, so the type sat on top of them. */}
                  <View style={styles.foot}>
                    {/* One line, always. "coming soon" wrapped inside the
                        narrower half of the block and pushed the class line
                        down against the edge of the card. */}
                    <Text style={[styles.count, { color: tile.ink }]} numberOfLines={1}>
                      {ready > 0 ? `${ready} chapters` : 'coming soon'}
                    </Text>
                    <Text style={[styles.classes, { color: tile.ink }]}>Class 11 · 12</Text>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>
      ))}
      </View>

      {/*
        THE CLAIM UNDER THE SHELF.
        Not a disclaimer in tone — the opposite. A student handed a "textbook"
        inside an app assumes it is somebody else's, scanned; this says how it
        was made, as a boast rather than an apology.

        It opens on what WAS done rather than on what was not. The first
        version led with "Not a scan of anyone else's book", which spends its
        strongest position denying an accusation nobody has made yet — and
        plants the idea in the reader who had not had it.

        A hairline above it, and real air either side. Without the rule it read
        as a stray paragraph that had slid off the last card; with it, it is
        the foot of the page.
      */}
      <View style={styles.noteRule} />
      <Text style={styles.note}>
        Every chapter here was written by the strongest models available, then recomputed and
        checked against the syllabus, question by question and formula by formula.
      </Text>
    </View>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    grid: {
      gap: scale(16),
      // 24, the app-wide gutter -- was 20, which left the shelf a notch wider
      // than the lists on the neighbouring tabs.
      paddingHorizontal: scale(24),
      paddingTop: verticalScale(20),
    },
    row: { flexDirection: 'row', gap: scale(16) },
    noteRule: {
      height: 1,
      backgroundColor: colors.hairline,
      marginHorizontal: scale(24),
      marginTop: verticalScale(26),
    },
    note: {
      paddingHorizontal: scale(24),
      paddingTop: verticalScale(14),
      paddingBottom: verticalScale(10),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12.5),
      lineHeight: scale(12.5 * 1.6),
      color: colors.faint,
    },
    filler: { flex: 1 },
    tile: {
      // Width is set inline from the measured row; see `tileWidth`.
      height: verticalScale(250),
      // Asymmetric: rounded on the spine side, square on the fore-edge, which
      // is what makes it read as a book rather than a card.
      borderTopLeftRadius: scale(14),
      borderBottomLeftRadius: scale(14),
      borderTopRightRadius: scale(6),
      borderBottomRightRadius: scale(6),
      borderWidth: 1,
      flexDirection: 'row',
      overflow: 'hidden',
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(10) },
      shadowOpacity: 0.16,
      shadowRadius: scale(14),
      elevation: 3,
    },
    tilePressed: { transform: [{ scale: 0.97 }] },

    /** The binding, and the name turned on it. */
    cloth: { width: scale(46), position: 'relative' },
    /** Centre first, rotate second — see the note at the call site. */
    rotateSlot: { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center' },
    spineName: {
      width: scale(150),
      height: scale(26),
      lineHeight: scale(26),
      textAlign: 'center',
      fontFamily: 'Onest_700Bold',
      fontSize: scale(15.5),
      letterSpacing: scale(0.5),
      transform: [{ rotate: '-90deg' }],
    },

    /** The page block beside it. */
    block: { flex: 1, position: 'relative' },
    pageEdge: { position: 'absolute', top: 0, bottom: 0, width: 1 },
    art: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: scale(26),
      paddingRight: scale(12),
    },
    foot: {
      alignItems: 'flex-end',
      paddingRight: scale(14),
      paddingBottom: verticalScale(13),
      paddingLeft: scale(14),
      gap: verticalScale(1),
    },
    count: { fontFamily: 'Onest_600SemiBold', fontSize: scale(13) },
    classes: { fontFamily: 'Onest_400Regular', fontSize: scale(11), opacity: 0.75 },
  });
}

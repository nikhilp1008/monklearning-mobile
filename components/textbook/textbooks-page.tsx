import { router } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { LayoutChangeEvent, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/brand';
import { SUBJECT_TILES, SubjectIcon } from '@/components/textbook/subjects';
import { getProfile } from '@/lib/profile';
import { textbookSubjects } from '@/lib/textbooks';

/**
 * The body of the Textbooks tab: pick a subject.
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
  const tileWidth = rowWidth > 0 ? Math.floor((rowWidth - scale(14)) / 2) : undefined;

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
            return (
              <Pressable
                key={subject}
                onPress={() => router.push({ pathname: '/textbook-chapters', params: { subject } })}
                style={({ pressed }) => [
                  styles.tile,
                  { width: tileWidth, backgroundColor: tile.background, borderColor: tile.border },
                  pressed && styles.tilePressed,
                ]}>
                <SubjectIcon subject={subject} size={scale(34)} tile={tile} />
                <Text style={styles.tileName}>{tile.label}</Text>
              </Pressable>
            );
          })}
        </View>
      ))}
    </View>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    grid: {
      gap: scale(14),
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(14),
    },
    row: { flexDirection: 'row', gap: scale(14) },
    filler: { flex: 1 },
    tile: {
      // Width is set inline from the measured row; see `tileWidth`.
      height: verticalScale(190),
      borderRadius: scale(18),
      borderWidth: 1,
      padding: scale(18),
      justifyContent: 'space-between',
    },
    tilePressed: { transform: [{ scale: 0.97 }] },
    tileName: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(21),
      letterSpacing: scale(-0.46),
      color: colors.ink,
    },
  });
}

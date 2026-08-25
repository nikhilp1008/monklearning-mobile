import { router } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/brand';
import { SUBJECT_TILES, SubjectIcon } from '@/components/textbook/subjects';
import { getProfile } from '@/lib/profile';
import { textbookSubjects } from '@/lib/textbooks';

/**
 * The Textbooks segment of the Library: pick a subject.
 *
 * No page title. The handoff draws this as a standalone screen headed
 * "Textbooks" in 32pt, but here the word is already the segment tab above it,
 * and repeating it would push the tiles down the page to say nothing new.
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

  return (
    <View style={styles.grid}>
      {(subjects ?? []).map((subject) => {
        const tile = SUBJECT_TILES[subject];
        if (!tile) return null;
        return (
          <Pressable
            key={subject}
            onPress={() => router.push({ pathname: '/textbook-chapters', params: { subject } })}
            style={({ pressed }) => [
              styles.tile,
              { backgroundColor: tile.background, borderColor: tile.border },
              pressed && styles.tilePressed,
            ]}>
            <SubjectIcon subject={subject} size={scale(34)} tile={tile} />
            <Text style={styles.tileName}>{tile.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(14),
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(14),
      // Top-aligned on purpose: with three tiles the grid must not stretch to
      // fill the screen, or the odd one out becomes a full-width banner.
      alignContent: 'flex-start',
    },
    tile: {
      // Two per row against the page's own 20pt gutters and the 14pt gap.
      width: (scale(390) - scale(40) - scale(14)) / 2,
      height: verticalScale(190),
      borderRadius: scale(18),
      borderWidth: 1,
      padding: scale(18),
      justifyContent: 'space-between',
    },
    tilePressed: { transform: [{ scale: 0.97 }] },
    tileName: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(21),
      letterSpacing: scale(-0.46),
      color: colors.ink,
    },
  });
}

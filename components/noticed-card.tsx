import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { PressableScale } from '@/components/pressable-scale';
import { TeacherOrb } from '@/components/teacher-orb';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import type { Observation } from '@/lib/noticed';
import { getTeacherPreference, type TeacherId } from '@/lib/preferences';

/**
 * The observation row on Home: one true sentence about this student's
 * syllabus, from their teacher.
 *
 * Was a card on a 12%-amber wash. Two things were wrong with that, and they
 * pulled in opposite directions, which is why it read as odd rather than
 * simply wrong.
 *
 * The wash sat at 1.09:1 against the page — a non-text boundary needs about
 * 3:1 to register — so the card's shape barely existed. The white "+6 more"
 * chip was 1.09:1 against the wash, so it was not reading as a chip at all;
 * only its text was. Meanwhile every other section on Home is built from
 * hairline rules, and the only other filled, rounded object is the class
 * block. So this had the shape language of the hero and the contrast of a
 * whisper.
 *
 * It is a row now, closed by the same hairline the stats row uses, and the
 * amber has moved out of the background and into the teacher's orb. That
 * restores something the wash never carried: WHO is speaking. MOMENTS.md asks
 * for the teacher's voice, and the earlier build's own note recorded that
 * dropping the initial, the label and the highlighter left this "an
 * observation from the app". The orb is the smallest thing that says otherwise
 * — and being 20pt of real colour, it highlights the row without tinting it.
 */

export function NoticedCard({
  observation,
  onPress,
}: {
  observation: Observation;
  onPress: () => void;
}) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  /** Drona until the stored preference says otherwise, so the orb never
   *  renders as the wrong teacher while the read is in flight. */
  const [teacher, setTeacher] = useState<TeacherId>('drona');

  useEffect(() => {
    let cancelled = false;
    getTeacherPreference().then((t) => {
      if (!cancelled) setTeacher(t);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <PressableScale style={styles.row} onPress={onPress}>
      <TeacherOrb teacher={teacher} size={scale(20)} />
      <Text style={styles.text} numberOfLines={2}>
        {observation.text}
      </Text>
      {!!observation.meta && (
        <View style={styles.metaChip}>
          <Text style={styles.metaText}>{observation.meta}</Text>
        </View>
      )}
      <ArrowRightIcon color={colors.amberText} size={scale(15)} />
    </PressableScale>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingBottom: verticalScale(16),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.1)',
    },
    text: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22),
      letterSpacing: scale(-0.01 * 15),
      color: colors.ink,
    },
    /**
     * An outline, because no fill works here.
     *
     * White was 1.09:1 on the old wash. Moving to the page did not help: the
     * warm tint is 1.10:1 on white and even solid marigold only reaches 2.12,
     * so a filled chip on paper cannot show its own edge. `amberText` at full
     * strength is 4.73:1 — the only candidate that reads — so it draws the
     * border, and the tint stays as a wash inside it for warmth.
     */
    metaChip: {
      flexShrink: 0,
      paddingHorizontal: scale(8),
      paddingVertical: verticalScale(2),
      borderRadius: scale(99),
      backgroundColor: colors.tint,
      borderWidth: 1,
      borderColor: colors.amberText,
    },
    metaText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.amberText,
    },
  });
}

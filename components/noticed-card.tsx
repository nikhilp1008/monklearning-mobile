import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import type { Observation } from '@/lib/noticed';
import { getTeacherPreference, teacherName } from '@/lib/preferences';

/**
 * The observation row on Home: one true sentence about this student's
 * syllabus, from their teacher.
 *
 * Four builds, and each failure narrowed it:
 *
 *  - A rounded card on a 12% amber wash. 1.09:1 against the page, so the shape
 *    barely existed, and it was the only filled object on a screen otherwise
 *    built from hairline rules apart from the class block: the shape language
 *    of the hero with the contrast of a whisper.
 *  - A 20pt teacher orb as the author mark. Fixed authorship, but put a
 *    saturated gradient on Home, which is more colour than one sentence earns.
 *  - "+6 more" in an outlined pill. The most decorated thing in the row,
 *    labelling the least important thing in it.
 *  - A "DRONA NOTICED" overline. Named the teacher, but in the same 11/700
 *    every other section uses -- so the row stopped standing out at all and
 *    merged into the page.
 *
 * What is left is a different device from anything else on Home. Every other
 * section is bounded by HORIZONTAL rules; this one is marked by a vertical
 * one -- a 3pt marigold bar down its left edge, the typographic sign for a
 * remark. A new axis, so it reads as distinct without a heading to announce it
 * and without a field of colour. The wash stays but only as warmth behind the
 * bar; the bar is what actually draws the boundary the wash could not.
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
  /** The label names whoever the student picked. Drona until the stored
   *  preference resolves, so the row never renders the wrong teacher. */
  const [teacher, setTeacher] = useState('Drona');

  useEffect(() => {
    let cancelled = false;
    getTeacherPreference().then((t) => {
      if (!cancelled) setTeacher(teacherName(t));
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <PressableScale
      style={styles.row}
      accessibilityLabel={`${teacher} noticed: ${observation.text}`}
      onPress={onPress}>
      <Text style={styles.text} numberOfLines={2}>
        {observation.text}
      </Text>
      {!!observation.meta && <Text style={styles.meta}>{observation.meta}</Text>}
      <ArrowRightIcon color={colors.amberText} size={scale(15)} />
    </PressableScale>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingVertical: verticalScale(14),
      paddingRight: scale(14),
      paddingLeft: scale(14),
      borderLeftWidth: 3,
      borderLeftColor: colors.marigold,
      borderTopRightRadius: scale(10),
      borderBottomRightRadius: scale(10),
      // Warmth behind the bar, not a boundary -- at 1.10:1 it cannot draw one.
      // The bar does that.
      backgroundColor: colors.tint,
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
     * Text, not a pill. As a pill this was the most decorated thing in the row
     * and it labels the least important thing in it. Quiet, and set in the
     * arrow's colour so the two trailing marks read as one control.
     */
    meta: {
      flexShrink: 0,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.amberText,
    },
  });
}

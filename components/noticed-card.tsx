import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import type { Observation } from '@/lib/noticed';
import { getTeacherPreference, teacherName } from '@/lib/preferences';

/** One step darker than `colors.success`, so the trailing marks clear 4.5:1
 *  on the wash. */
const GREEN_INK = '#12703E';

/**
 * The observation row on Home: one true sentence about this student's
 * syllabus, from their teacher.
 *
 * Five builds. What each one got wrong, since the sequence is the argument:
 *
 *  - A rounded card on a 12% amber wash: 1.09:1 against the page, so its shape
 *    barely existed, and it was the only filled object on a screen otherwise
 *    built from hairline rules apart from the class block.
 *  - A 20pt teacher orb as the author mark: fixed authorship, but put a
 *    saturated gradient on Home.
 *  - "+6 more" in an outlined pill: the most decorated thing in the row,
 *    labelling the least important thing in it.
 *  - A "DRONA NOTICED" overline: in the same 11/700 as every other section, so
 *    the row stopped standing out and merged into the page.
 *  - A 3pt marigold left bar: read as a generic callout.
 *
 * Measuring the candidates settled the real constraint. On a white page NO
 * warm tint can produce a visible block: the 12% amber was 1.10:1, a 28%
 * amber 1.30, and even SOLID marigold only 2.12, against roughly 3:1 for a
 * boundary you are meant to notice. Yellow and white are nearly the same
 * lightness. That, not the shade, is why every amber variant read as dull.
 *
 * The green wash is chosen for what it does to the page rather than for
 * contrast: it is the one cool note on an entirely warm screen, which is what
 * makes it register at all. 22%, the deepest that still reads as a wash rather
 * than a panel, at 1.29:1 -- so this is a quiet block by construction, not a
 * highlighted one, and no depth of green would change that.
 *
 * Two things to know if this ever gets revisited. Green is `masteryStrong` in
 * the progress scale, and this row usually reports a WEAKNESS, so the colour
 * and the sentence disagree. And if the row ever has to genuinely stand out,
 * the fill has to go dark -- ink measured 17:1 where every wash measured under
 * 1.5.
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
      <ArrowRightIcon color={GREEN_INK} size={scale(15)} />
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
      paddingHorizontal: scale(14),
      borderRadius: scale(12),
      // success/masteryStrong at 22%. See the note above: this is a wash, not
      // a boundary.
      backgroundColor: '#CDE9DA',
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
    /** #12703E, a step darker than `success`, for 4.77:1 on the wash. The
     *  brand's own #1C9B57 only reaches 2.4 there. */
    meta: {
      flexShrink: 0,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: GREEN_INK,
    },
  });
}

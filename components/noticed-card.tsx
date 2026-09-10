import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
 * Three builds got here, and what each one got wrong is worth keeping.
 *
 * A 12% amber wash in a rounded card: 1.09:1 against the page, so its shape
 * barely existed, while being the only filled object on a screen otherwise
 * built from hairline rules apart from the class block. It had the shape
 * language of the hero and the contrast of a whisper.
 *
 * Then the wash came off and a 20pt teacher orb went in as the author mark.
 * That fixed the authorship but put a saturated gradient on Home, which is
 * more colour than this row has earned.
 *
 * The remaining fault was the chip. "+6 more" in an outlined amber pill was
 * the loudest thing in the row, and it decorates the least important
 * information in it -- a count of other chapters. The sentence is the point,
 * and the count was out-shouting it.
 *
 * So: no fill, no orb, no pill. An overline names the teacher, which is what
 * MOMENTS.md asks for and what the wash never carried, and it does it in the
 * same 11/700 uppercase every other section of Home uses -- so this reads as a
 * section rather than a notice. The count is plain trailing text. The only
 * colour left is the arrow, which is the accent this row is actually worth.
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
    <PressableScale style={styles.section} onPress={onPress}>
      <Text style={styles.overline}>{teacher} noticed</Text>
      <View style={styles.row}>
        <Text style={styles.text} numberOfLines={2}>
          {observation.text}
        </Text>
        {!!observation.meta && <Text style={styles.meta}>{observation.meta}</Text>}
        <ArrowRightIcon color={colors.amberText} size={scale(15)} />
      </View>
    </PressableScale>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    section: {
      paddingBottom: verticalScale(16),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.1)',
    },
    /** The same 11/700 at .1em every other section on Home opens with. */
    overline: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11),
      lineHeight: scale(14),
      letterSpacing: scale(0.1 * 11),
      textTransform: 'uppercase',
      color: colors.slate,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      marginTop: verticalScale(10),
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

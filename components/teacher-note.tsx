import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { useScale } from '@/constants/scale';
import { getTeacherName } from '@/lib/preferences';

/**
 * The shell the teacher speaks through.
 *
 * One implementation on purpose. The end-of-class moment and Home's "noticed"
 * card are the same teacher saying two different kinds of true thing, and if
 * they were styled separately they would drift into looking like two unrelated
 * system messages — which is precisely what MOMENTS.md rule 3 exists to
 * prevent. Anything that changes here changes in both places.
 *
 * It is a margin note, not a badge: an amber rule down the left edge, borrowed
 * from the ruled-paper language the rest of the app already uses.
 *
 * Renders nothing until the teacher's name is known. The label is what makes
 * this a person rather than a toast, so a frame without it would be the wrong
 * thing shown briefly.
 */

const INK = '#1C1A16';
const INK_50 = '#8A8478';
const AMBER = '#B08420';
const AMBER_RULE = '#EEA31F';
const AMBER_WASH = 'rgba(238,163,31,0.07)';

export function TeacherNote({
  headline,
  detail,
  /** A CTA row, rendered under the text. Optional — most notes just speak. */
  footer,
  style,
}: {
  headline: string;
  detail?: string;
  footer?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [teacher, setTeacher] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    getTeacherName().then((name) => alive && setTeacher(name));
    return () => {
      alive = false;
    };
  }, []);

  if (!teacher) return null;

  return (
    <Animated.View entering={FadeIn.duration(420)} style={[styles.card, style]}>
      <View style={styles.rule} />
      <View style={styles.body}>
        <Text style={styles.label}>{teacher.toUpperCase()} NOTICED</Text>
        <Text style={styles.headline}>{headline}</Text>
        {!!detail && <Text style={styles.detail}>{detail}</Text>}
        {footer}
      </View>
    </Animated.View>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    card: {
      flexDirection: 'row',
      borderRadius: scale(14),
      backgroundColor: AMBER_WASH,
      overflow: 'hidden',
    },
    rule: { width: scale(3), backgroundColor: AMBER_RULE },
    body: {
      flex: 1,
      minWidth: 0,
      paddingVertical: verticalScale(15),
      paddingLeft: scale(15),
      paddingRight: scale(17),
    },
    label: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.45),
      letterSpacing: scale(0.105 * 9.45),
      color: AMBER,
    },
    headline: {
      marginTop: verticalScale(7),
      fontFamily: 'Onest_700Bold',
      fontSize: scale(18),
      letterSpacing: scale(-0.03 * 18),
      lineHeight: scale(18 * 1.25),
      color: INK,
    },
    detail: {
      marginTop: verticalScale(5),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      lineHeight: scale(14 * 1.45),
      color: INK_50,
    },
  });
}

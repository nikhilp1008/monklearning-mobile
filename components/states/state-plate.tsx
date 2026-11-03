import { useEffect, useState } from 'react';
import { View, type StyleProp, type ViewStyle } from 'react-native';

import { Glyph, type StateGlyph } from '@/components/states/glyphs';
import { NightSky } from '@/components/night-sky';
import { colors } from '@/constants/brand';
import { SKY_THEMES } from '@/constants/teachers';
import { getTeacherPreference, subscribeTeacher, teacherIdNow, type TeacherId } from '@/lib/preferences';

/**
 * The student's teacher, kept current: read once, then told of every change
 * (setTeacherPreference notifies). Starts from the cached teacher, so a
 * screen opened after the first read never shows Drona to a Vedha student.
 */
export function useTeacherId(): TeacherId {
  const [teacher, setTeacher] = useState<TeacherId>(teacherIdNow);
  useEffect(() => {
    let live = true;
    getTeacherPreference()
      .then((t) => {
        if (live) setTeacher(t);
      })
      .catch(() => {});
    const unsubscribe = subscribeTeacher((t) => live && setTeacher(t));
    return () => {
      live = false;
      unsubscribe();
    };
  }, []);
  return teacher;
}

/**
 * THE STATE'S PLATE: A WINDOW ONTO HOME'S SKY, IN THE TEACHER'S LIGHT.
 *
 * Home's Snap and Practice tiles are the header's own sky shader drawn at tile
 * size, in Drona's ember or Vedha's marigold. Every state that stands in for a
 * page carries the same window, so an empty Doubts tab, a daily limit and a
 * camera that is switched off all read as the app's own objects, lit by the
 * teacher the student chose. It replaced the dark brown plate copied from
 * Home's old tiles (the FirstDayCard this replaced).
 *
 * The sky is Skia, which draws the same on iOS and Android; the clip is a
 * plain borderRadius + overflow hidden, which both platforms honour.
 */
export function StatePlate({
  glyph,
  icon,
  size,
  style,
}: {
  glyph: StateGlyph;
  /** A drawing of the caller's own in place of the glyph, e.g. a tab's icon,
   *  so an empty tab names itself with the mark the tab bar already shows. */
  icon?: (size: number, color: string) => React.ReactNode;
  size: number;
  style?: StyleProp<ViewStyle>;
}) {
  const teacher = useTeacherId();
  const radius = Math.round(size * 0.3);
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: radius,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}>
      <NightSky
        width={size}
        height={size}
        theme={SKY_THEMES[teacher]}
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      {icon ? (
        icon(Math.round(size * 0.48), colors.paper)
      ) : (
        <Glyph name={glyph} size={Math.round(size * 0.44)} color={colors.paper} />
      )}
    </View>
  );
}

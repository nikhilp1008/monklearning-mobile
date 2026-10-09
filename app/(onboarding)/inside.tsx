import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, type ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PracticeIcon, SnapADoubtIcon } from '@/components/monk-icons';
import { NightSky } from '@/components/night-sky';
import { ObButton } from '@/components/onboarding-kit';
import { TeacherOrbPoster } from '@/components/teacher-orb-poster';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { TEACHERS } from '@/constants/teachers';
import { revalidateAuthState } from '@/lib/auth';
import { getTeacherPreference, type TeacherId } from '@/lib/preferences';
import { pushProfile } from '@/lib/profile';

/**
 * "Class, doubt, practice" — the last screen before the app.
 *
 * Three rows naming the three things a student does here, in the app's own
 * words: a student meets "Start a Live Class", "Snap and Solve" and
 * "Practice" on Home ten seconds later, so this page teaches those words
 * rather than inventing three of its own.
 *
 * IT ALSO FINISHES ONBOARDING. The profile write and the handover used to sit
 * on the pass confirmation; they belong on the last screen of the flow, which
 * is this one. Failing that write is not waved through: without it there is
 * no `display_name` on the server, every later launch reads as "never
 * onboarded", and the student is sent round the flow again — a loop they
 * cannot escape and we would never hear about.
 */

type S = (n: number) => number;

/**
 * HOME'S OWN TILES. Snap and Solve and Practice sit on a square of the header's
 * night sky on Home, glyph reversed out of it; they sit on the same square
 * here, so the page that introduces the three is drawn in the app's own hand.
 * The live class is not a tile: it is the teacher's orb, the one the student
 * chose a moment ago — the same orb that sits in Home's header — so the choice
 * on the step before is visibly kept.
 */
function SkyPlate({ size, radius, children }: { size: number; radius: number; children: ReactNode }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.night,
      }}>
      <NightSky width={size} height={size} style={StyleSheet.absoluteFillObject} />
      {children}
    </View>
  );
}

const LOOP = [
  {
    key: 'class',
    title: 'Start a Live Class',
    body: 'Pick any chapter. Your teacher teaches it aloud on a board you can talk back to.',
  },
  {
    key: 'snap',
    title: 'Snap and Solve',
    body: 'Photograph a question you are stuck on. Up to three in one shot, worked line by line.',
  },
  {
    key: 'practice',
    title: 'Practice',
    body: '150 questions a day, picked from what you have proved and what you have not.',
  },
] as const;

export default function InsideScreen() {
  const { scale, verticalScale } = useScale();
  const s = useStyles(scale, verticalScale);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /** The teacher just chosen: handed over by the step before, or read back
   *  from this device when the screen is reached any other way. */
  const params = useLocalSearchParams<{ teacher?: string }>();
  const passed: TeacherId | null =
    params.teacher === 'vedha' || params.teacher === 'drona' ? params.teacher : null;
  const [teacher, setTeacher] = useState<TeacherId>(passed ?? 'drona');
  useEffect(() => {
    if (passed) return;
    let live = true;
    getTeacherPreference().then((t) => {
      if (live) setTeacher(t);
    });
    return () => {
      live = false;
    };
  }, [passed]);
  const teacherName = TEACHERS.find((t) => t.id === teacher)?.name ?? 'Your teacher';

  const start = async () => {
    if (saving) return;
    setSaving(true);
    setError(null);
    try {
      await pushProfile();
    } catch {
      setSaving(false);
      setError('Couldn’t save your details. Check your connection and try again.');
      return;
    }
    // The gate still believes onboarding is owed — it recomputes on Supabase
    // auth events and this was a write to `profiles`. Awaited before
    // navigating so the tabs are never asked to paint on the old answer.
    await revalidateAuthState();
    router.replace('/(tabs)');
  };

  /**
   * THE PLATES STAY; THE COMPOSITION AROUND THEM CHANGES.
   *
   * They were not the problem. The problem was where they sat: a 58pt plate
   * pinned to the top of a two-line paragraph, with nothing holding the row
   * together, so each one floated beside its text rather than belonging to
   * it. The plate is level with the title it names now, the body hangs under
   * that title on the same left edge, and a hairline closes each row — the
   * page's own furniture doing the work the thread was trying to do.
   */
  const tile = (key: string) => {
    if (key === 'class') return <TeacherOrbPoster teacher={teacher} size={scale(46)} />;
    return (
      <SkyPlate size={scale(46)} radius={scale(14)}>
        {key === 'snap' ? (
          <SnapADoubtIcon size={scale(23)} color={colors.paper} accent={colors.paper} />
        ) : (
          <PracticeIcon size={scale(23)} color={colors.paper} accent={colors.paper} />
        )}
      </SkyPlate>
    );
  };

  return (
    <View style={s.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={s.safe} edges={['top', 'bottom']}>
        <View style={s.body}>
          <Text style={s.title}>Class, doubt, practice.</Text>
          <Text style={s.sub}>All three are open from today, across every subject.</Text>

          <View style={s.loopRows}>
            <View>
              {LOOP.map((item, i) => (
                <View
                  key={item.key}
                  style={[
                    s.loopRow,
                    i === 0 && s.loopRowFirst,
                    i === LOOP.length - 1 && s.loopRowLast,
                  ]}>
                  <View style={s.plateWrap}>{tile(item.key)}</View>
                  <View style={s.loopText}>
                    <Text style={s.loopTitle}>{item.title}</Text>
                    <Text style={s.loopBody}>
                      {item.key === 'class'
                        ? item.body.replace('Your teacher', teacherName)
                        : item.body}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          <View style={s.spacer} />

        </View>
        <View style={s.footer}>
          {!!error && <Text style={s.error}>{error}</Text>}
          <ObButton label="Start learning" withArrow busy={saving} onPress={start} />
        </View>
      </SafeAreaView>
    </View>
  );
}


function useStyles(scale: S, verticalScale: S) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.paper },
    safe: { flex: 1 },
    body: { flex: 1, paddingHorizontal: scale(26), paddingTop: verticalScale(26) },
    title: {
      marginTop: verticalScale(10),
      fontFamily: 'Onest_700Bold',
      fontSize: scale(25),
      lineHeight: scale(31),
      letterSpacing: scale(-0.6),
      color: colors.ink,
    },
    sub: {
      marginTop: verticalScale(8),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      lineHeight: scale(20),
      color: colors.slate,
    },
    error: {
      marginBottom: verticalScale(10),
      fontFamily: 'Onest_500Medium',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: '#DD4433',
      textAlign: 'center',
    },
    footer: { paddingHorizontal: scale(26), paddingBottom: verticalScale(14) },
    // 3 — the three, on their plates
    //
    // TWO COLUMNS, NOT A HEADER WITH A HANGING PARAGRAPH. The plate used to
    // sit in a row with the title and the body hung underneath on a 60pt
    // margin that had to be kept in step with the plate by hand — so the body
    // started below the plate's foot and left a notch beside it. The text is
    // one column now and the plate is the other; nothing has to be matched up
    // by eye, at any text size.
    loopRows: { marginTop: verticalScale(26) },
    loopRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: scale(14),
      paddingVertical: verticalScale(26),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.10)',
    },
    /** No padding above the first row: the sub line already set that distance,
     *  and doubling it is the gap that reads as a mistake. */
    loopRowFirst: { paddingTop: 0 },
    loopRowLast: { borderBottomWidth: 0, paddingBottom: 0 },
    loopText: { flex: 1, minWidth: 0 },
    /**
     * TOPS ALIGNED, OPTICALLY.
     *
     * Not the plate centred on the title: with a two-line body under it, a
     * centred plate hangs below the title into the paragraph and the row
     * looks hooked to the wrong thing. Both columns start at the row's top
     * instead, and the plate carries a 2pt nudge so its edge lands with the
     * title's cap rather than with the line box above it.
     */
    plateWrap: { paddingTop: verticalScale(2) },
    loopTitle: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(18),
      lineHeight: scale(24),
      letterSpacing: scale(-0.3),
      color: colors.ink,
    },
    loopBody: {
      marginTop: verticalScale(5),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(19),
      color: colors.slate,
    },
    spacer: { flex: 1, minHeight: verticalScale(20) },
    keepBlock: {
      marginBottom: verticalScale(24),
      paddingTop: verticalScale(18),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.10)',
    },
    keepText: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19),
      color: colors.faint,
    },

  });
}

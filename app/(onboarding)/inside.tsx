import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Plate } from '@/components/first-day-card';
import { PracticeIcon, SnapADoubtIcon } from '@/components/monk-icons';
import { ObButton } from '@/components/onboarding-kit';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { revalidateAuthState } from '@/lib/auth';
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
 * THE MONK MARK, alone.
 *
 * `MonkLogo` draws the symbol beside the wordmark, which is the lockup and
 * far too wide for a 56pt tile. These are the same three circles at the same
 * dash ratios, drawn on their own — the class row is ours, so it carries our
 * mark rather than a picture of a whiteboard.
 */
function MonkMark({ size, color }: { size: number; color: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <Circle
        cx={60}
        cy={60}
        r={36}
        stroke={color}
        strokeWidth={11}
        strokeLinecap="round"
        strokeDasharray="52 23.4"
        transform="rotate(-90 60 60)"
      />
      <Circle
        cx={60}
        cy={60}
        r={19}
        stroke={color}
        strokeWidth={9}
        strokeLinecap="round"
        strokeDasharray="21.8 18"
        transform="rotate(-30 60 60)"
      />
      <Circle cx={60} cy={60} r={6} fill="#EEA31F" />
    </Svg>
  );
}

const LOOP = [
  {
    key: 'class',
    title: 'Start a live class',
    body: 'Pick any chapter. Your teacher takes it aloud on a board you can talk back to.',
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
  const glyph = (key: string, size: number) => {
    if (key === 'class') return <MonkMark size={size} color={colors.paper} />;
    if (key === 'snap')
      return <SnapADoubtIcon size={size} color={colors.paper} accent={colors.marigold} />;
    return <PracticeIcon size={size} color={colors.paper} accent={colors.marigold} />;
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
                  <View style={s.plateWrap}>
                    <Plate size={scale(46)} radius={scale(15)}>
                      {glyph(item.key, scale(23))}
                    </Plate>
                  </View>
                  <View style={s.loopText}>
                    <Text style={s.loopTitle}>{item.title}</Text>
                    <Text style={s.loopBody}>{item.body}</Text>
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

import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { RingSweep } from '@/components/gradient-select';
import { MockKey } from '@/components/mock/mock-kit';
import { colors } from '@/constants/brand';
import { pageTitle } from '@/constants/page-title';
import { useScale } from '@/constants/scale';
import { getMockSession, mockSecondsLeft } from '@/lib/mock';

function formatTime(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const sec = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(h)}:${pad(m)}:${pad(sec)}`;
}

export default function MockPausedScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const session = getMockSession();

  useEffect(() => {
    if (!session) router.replace('/mocks');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!session) return <View style={styles.screen} />;

  const answered = session.paper.questions.filter((q) => session.answers.has(q.id)).length;

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.content}>
          {/* The page's own header: back to the paper, and its name. The card
              sits under it; it used to float mid-screen with a hand's width of
              nothing above it. */}
          <View style={styles.headRow}>
            <Pressable
              style={styles.backButton}
              hitSlop={10}
              accessibilityRole="button"
              accessibilityLabel="Back to the paper"
              onPress={() => router.back()}
            >
              <BackIcon size={scale(16)} />
            </Pressable>
            <Text style={styles.heading}>Your paper is waiting</Text>
          </View>
          <Text style={styles.hint}>
            The clock keeps running while you are away, like exam day. Pick it up any time from Home
            or Mock tests.
          </Text>

          {/* The paper's state in the still marigold ring, as on Home. */}
          <View style={styles.ring}>
            <RingSweep radius={scale(16) + 2} still={140} />
            <View style={styles.statusCard}>
              <Text style={styles.overline}>Clock running</Text>
              <View style={[styles.statusRow, styles.statusRowFirst]}>
                <Text style={styles.statusLabel}>Time left</Text>
                <TimeLeft styles={styles} deadline={session.deadline} />
              </View>
              <View style={styles.statusRow}>
                <Text style={styles.statusLabel}>Answered</Text>
                <Text style={styles.statusValue}>
                  {answered} of {session.paper.questions.length}
                </Text>
              </View>
              <View style={styles.statusRow}>
                <Text style={styles.statusLabel}>Marked to look at again</Text>
                <Text style={styles.statusValue}>{session.marked.size}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* The way OUT: to Home by name, where the paper leads the page
            (components/paper-waiting-card.tsx) until it is submitted or the
            clock runs out. Both keys the same size, the second in white. */}
        <View style={styles.footer}>
          <MockKey label="Resume paper" arrow onPress={() => router.back()} />
          <MockKey label="Go to Home" tone="white" onPress={() => router.dismissTo('/')} />
        </View>
      </SafeAreaView>
    </View>
  );
}

function TimeLeft({
  styles,
  deadline,
}: {
  styles: ReturnType<typeof createStyles>;
  deadline: number;
}) {
  const remaining = () => {
    const s = getMockSession();
    return s ? mockSecondsLeft(s) : Math.max(0, Math.floor((deadline - Date.now()) / 1000));
  };
  const [secondsLeft, setSecondsLeft] = useState(remaining);
  useEffect(() => {
    const id = setInterval(() => setSecondsLeft(remaining()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deadline]);
  return <Text style={styles.statusValueMono}>{formatTime(secondsLeft)}</Text>;
}

function BackIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M15 5l-7 7 7 7"
        stroke={colors.ink}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#fff' },
    safeArea: { flex: 1 },
    content: { flex: 1, paddingHorizontal: scale(20) },
    headRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(13),
      paddingTop: verticalScale(10),
    },
    backButton: {
      width: scale(36),
      height: scale(36),
      borderRadius: scale(18),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.12)',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: { flex: 1, minWidth: 0, ...pageTitle(scale) },
    hint: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      lineHeight: scale(20),
      color: colors.slate,
      marginTop: verticalScale(10),
    },
    ring: {
      marginTop: verticalScale(20),
      padding: 2,
      borderRadius: scale(16) + 2,
      backgroundColor: 'rgba(28,26,22,.10)',
      overflow: 'hidden',
    },
    statusCard: {
      backgroundColor: '#fff',
      borderRadius: scale(16),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(16),
    },
    overline: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(10),
      letterSpacing: scale(1),
      textTransform: 'uppercase',
      color: colors.amberText,
    },
    statusRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      paddingVertical: verticalScale(10),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.08)',
    },
    statusRowFirst: { marginTop: verticalScale(6), borderTopWidth: 0 },
    statusLabel: { fontFamily: 'Onest_400Regular', fontSize: scale(14), color: colors.slate },
    statusValue: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
      fontVariant: ['tabular-nums'],
    },
    statusValueMono: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
      fontVariant: ['tabular-nums'],
    },
    footer: {
      flexShrink: 0,
      gap: verticalScale(10),
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(12),
      paddingBottom: verticalScale(8),
    },
  });
}

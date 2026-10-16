import { router, useFocusEffect } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, G, Path } from 'react-native-svg';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import {
  earnedTowardNext,
  getMockStatus,
  listMockRuns,
  type MockRunRow,
  type MockStatus,
} from '@/lib/mock';
import { formatDay } from '@/lib/mock-report';
import { getProfile } from '@/lib/profile';

/**
 * MOCK TESTS, ON HOME: the one way in.
 *
 * Mock tests used to be reached only from a card far down Progress. This sits
 * at the foot of Home, under Exam scope, and says where the student stands:
 * a paper ready to sit, or how far off the next one is, and the last score.
 * It reads the same status Mock tests reads; while it loads, or offline, it
 * still says what it is and still opens the page.
 */
export function MockTestsCard() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [status, setStatus] = useState<MockStatus | null>(null);
  const [last, setLast] = useState<MockRunRow | null>(null);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      (async () => {
        try {
          const { exam } = await getProfile();
          const [s, runs] = await Promise.all([
            getMockStatus(exam === 'neet' ? 'neet' : 'jee'),
            listMockRuns().catch(() => [] as MockRunRow[]),
          ]);
          if (cancelled) return;
          setStatus(s);
          setLast(runs.find((r) => r.score) ?? null);
        } catch {
          // Offline: the card still names the page and opens it.
        }
      })();
      return () => {
        cancelled = true;
      };
    }, [])
  );

  const ready = (status?.credits_available ?? 0) > 0;
  const toward = status ? earnedTowardNext(status) : 0;
  const line = !status
    ? 'Full exam-pattern papers, on the clock, marked the way the real one is.'
    : status.active_paper && !status.active_paper.expired
      ? 'Your paper is in progress. Pick it up where you left it.'
      : ready
        ? `${status.credits_available === 1 ? 'A full paper is' : `${status.credits_available} full papers are`} ready for you: on the clock, marked the way the real one is.`
        : `Your next full paper unlocks at ${status.threshold} correct answers in Practice.`;

  return (
    <PressableScale
      style={styles.card}
      accessibilityRole="button"
      accessibilityLabel={`Mock tests. ${line}`}
      onPress={() => router.push('/mocks')}
    >
      <View style={styles.head}>
        <View style={styles.icon}>
          <MockTestsIcon size={scale(24)} />
        </View>
        <View style={styles.headText}>
          <Text style={styles.title}>Mock tests</Text>
          <Text style={styles.body}>{line}</Text>
        </View>
        <View style={styles.arrow}>
          <ArrowRightIcon color={colors.ink} size={scale(15)} />
        </View>
      </View>

      {status && !ready && !status.active_paper && (
        <View style={styles.progressRow}>
          <View style={styles.track}>
            <View
              style={[
                styles.fill,
                { width: `${Math.min(100, Math.round((toward / status.threshold) * 100))}%` },
              ]}
            />
          </View>
          <Text style={styles.count}>
            {toward} of {status.threshold}
          </Text>
        </View>
      )}

      {last?.score && (
        <View style={styles.last}>
          <Text style={styles.lastLabel}>
            Last paper · {formatDay(last.submitted_at ?? last.created_at)}
          </Text>
          <Text style={styles.lastScore}>
            {last.score.total_marks}
            <Text style={styles.lastMax}> / {last.score.max_marks}</Text>
          </Text>
        </View>
      )}
    </PressableScale>
  );
}

/** A paper with a clock: the 24 grid, one 1.8 line, the marigold dot as the
 *  clock's centre (components/monk-icons.tsx rules). */
function MockTestsIcon({ size }: { size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G stroke={colors.ink} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M13 20.4H6.6a2.2 2.2 0 0 1-2.2-2.2V5.8a2.2 2.2 0 0 1 2.2-2.2h8.2a2.2 2.2 0 0 1 2.2 2.2v4.4" />
        <Path d="M7.8 8h6M7.8 11.6h3.6" />
        <Circle cx={16.6} cy={16.6} r={4.4} />
        <Path d="M16.6 14.4v2.2" />
      </G>
      <Circle cx={16.6} cy={16.6} r={1.25} fill={colors.marigold} />
    </Svg>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    card: {
      marginTop: verticalScale(24),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.10)',
      borderRadius: scale(16),
      paddingVertical: verticalScale(16),
      paddingHorizontal: scale(16),
      backgroundColor: '#FFFFFF',
    },
    head: { flexDirection: 'row', alignItems: 'flex-start', gap: scale(14) },
    icon: { paddingTop: scale(0) },
    arrow: { paddingTop: scale(4) },
    headText: { flex: 1, minWidth: 0 },
    title: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      lineHeight: scale(22),
      color: colors.ink,
    },
    body: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.slate,
      marginTop: verticalScale(2),
    },
    progressRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      marginTop: verticalScale(14),
      paddingLeft: scale(38),
    },
    track: {
      flex: 1,
      height: 4,
      borderRadius: 2,
      backgroundColor: 'rgba(28,26,22,.08)',
      overflow: 'hidden',
    },
    fill: { height: '100%', borderRadius: 2, backgroundColor: colors.marigold },
    count: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(12),
      color: colors.slate,
      fontVariant: ['tabular-nums'],
    },
    last: {
      flexDirection: 'row',
      marginLeft: scale(38),
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginTop: verticalScale(14),
      paddingTop: verticalScale(12),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.08)',
    },
    lastLabel: { fontFamily: 'Onest_400Regular', fontSize: scale(13), color: colors.slate },
    lastScore: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      color: colors.ink,
      fontVariant: ['tabular-nums'],
    },
    lastMax: { fontFamily: 'Onest_500Medium', fontSize: scale(13), color: colors.faint },
  });
}

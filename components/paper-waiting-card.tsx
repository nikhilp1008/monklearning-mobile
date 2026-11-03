import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { RingSweep } from '@/components/gradient-select';
import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { openWaitingPaper, type WaitingPaper } from '@/lib/waiting-paper';

/**
 * A MOCK PAPER STILL RUNNING, ON HOME.
 *
 * Where a student lands after "Go to Home" on the paused screen, so it says
 * the paper is waiting, how long is left (ticking, because the clock is), and
 * takes them straight back in. When the time has run out it says so and
 * opens Mock tests, where the paper is marked.
 *
 * The same white card in the still marigold ring as the starting-point card
 * it stands in for (components/starting-point-card.tsx).
 */
export function PaperWaitingCard({ paper }: { paper: WaitingPaper }) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const left = useSecondsLeft(paper.deadline);
  const [opening, setOpening] = useState(false);
  const over = left <= 0;

  const detail = over
    ? 'Your time ran out. Open it to see your score.'
    : paper.answered !== null && paper.total !== null
      ? `${clock(left)} left · ${paper.answered} of ${paper.total} answered`
      : `${clock(left)} left`;

  return (
    <PressableScale
      style={styles.ring}
      accessibilityRole="button"
      accessibilityLabel={
        over
          ? 'Mock test time is up. Open it to see your score.'
          : `Mock test in progress, ${detail}. Resume.`
      }
      onPress={async () => {
        if (opening) return;
        setOpening(true);
        await openWaitingPaper(paper.exam);
        setOpening(false);
      }}
    >
      <RingSweep radius={scale(14) + RING} still={RING_ANGLE} />
      <View style={styles.row}>
        <View style={styles.text}>
          <Text style={styles.overline}>{over ? 'Time is up' : 'Mock test in progress'}</Text>
          <Text style={styles.title}>
            {opening
              ? 'Opening your paper…'
              : over
                ? 'Your paper is ready to mark'
                : 'Your paper is waiting'}
          </Text>
          <Text style={[styles.body, !over && styles.mono]}>{detail}</Text>
        </View>
        <ArrowRightIcon color={colors.ink} size={scale(16)} />
      </View>
    </PressableScale>
  );
}

function useSecondsLeft(deadline: number) {
  const read = () => Math.max(0, Math.floor((deadline - Date.now()) / 1000));
  const [left, setLeft] = useState(read);
  useEffect(() => {
    setLeft(read());
    const id = setInterval(() => setLeft(read()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deadline]);
  return left;
}

function clock(total: number) {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

/** As on the starting-point card: the ring's width, and its bright side at the upper right. */
const RING = 2;
const RING_ANGLE = 140;

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    ring: {
      padding: RING,
      borderRadius: scale(14) + RING,
      backgroundColor: 'rgba(28,26,22,.10)',
      overflow: 'hidden',
      marginTop: verticalScale(24),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(16),
      paddingVertical: verticalScale(18),
      paddingHorizontal: scale(16),
      borderRadius: scale(14),
      backgroundColor: '#FFFFFF',
    },
    text: { flex: 1, minWidth: 0 },
    overline: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11),
      lineHeight: scale(14),
      letterSpacing: scale(1.1),
      textTransform: 'uppercase',
      color: colors.amberText,
    },
    title: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      lineHeight: scale(22),
      color: colors.ink,
      marginTop: verticalScale(8),
    },
    body: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.slate,
      marginTop: verticalScale(4),
    },
    mono: { fontVariant: ['tabular-nums'] },
  });
}

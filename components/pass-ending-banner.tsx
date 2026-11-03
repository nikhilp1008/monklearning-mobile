import { router } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { usePlan } from '@/lib/free-tier';
import { pendingLine } from '@/lib/pass-ending';

/**
 * A starter pass about to end, on Home: the same reminder the notification
 * sends (4 hours before a day pass ends; two days before a week pass), for the
 * student who turned notifications off. Not dismissible: it is quiet, and it is
 * the one moment the next plan is worth saying. Shown only while a day or week
 * pass runs with nothing bought behind it (lib/pass.ts planFromServer).
 */
export function PassEndingBanner() {
  const { starterEnds, starterKind } = usePlan();
  const [now, setNow] = useState(() => Date.now());
  const { scale } = useScale();
  const styles = useMemo(() => createStyles(scale), [scale]);

  useEffect(() => {
    if (!starterEnds) return;
    const id = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(id);
  }, [starterEnds]);

  if (!starterEnds || !starterKind) return null;
  const said = pendingLine(starterKind, (new Date(starterEnds).getTime() - now) / 3600000);
  if (!said) return null;
  return (
    <PressableScale accessibilityRole="button" accessibilityLabel={said.title} onPress={() => router.push('/plans')} style={styles.row}>
      <View style={styles.text}>
        <Text style={styles.title}>{said.title}</Text>
        <Text style={styles.line}>{said.line}</Text>
      </View>
      <ArrowRightIcon size={scale(18)} color={colors.amberText} />
    </PressableScale>
  );
}

function createStyles(scale: (n: number) => number) {
  return StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      marginTop: scale(18),
      paddingVertical: scale(14),
      paddingHorizontal: scale(16),
      borderRadius: scale(14),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.12)',
    },
    text: { flex: 1 },
    title: { fontFamily: 'Onest_600SemiBold', fontSize: scale(14.5), lineHeight: scale(20), color: colors.ink },
    line: { fontFamily: 'Onest_400Regular', fontSize: scale(13), lineHeight: scale(18), color: colors.slate, marginTop: scale(2) },
  });
}

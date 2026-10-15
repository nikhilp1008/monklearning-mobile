import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import type { MockDiagnosticOffer } from '@/lib/mock';

const SUBJECT_LABEL: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Mathematics',
  biology: 'Biology',
};

/**
 * THE FREE FIRST PAPER, OFFERED ON THE MOCK TESTS PAGE.
 *
 * A short paper (not the three-hour one) whose only job is to show a new
 * student where they stand, so Practice and Progress can point at the right
 * chapters from day one. It is said to cost nothing, because the page right
 * under it is about a credit that has to be earned — a student who reads
 * "earn a paper" first and "free paper" second reads the second as a trap.
 *
 * The rows come from the server's offer, not from constants here: the paper's
 * size is the server's to change, and a card that said "45 questions" over a
 * paper of 36 would be the first thing a student noticed.
 */
export function DiagnosticCard({ offer }: { offer: MockDiagnosticOffer }) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  return (
    <View style={styles.card} accessibilityLabel="Free starting-point paper">
      <Text style={styles.overline}>Free · once</Text>
      <Text style={styles.title}>Your starting-point paper</Text>
      {offer.sections.map((s) => (
        <View key={s.subject} style={styles.row}>
          <Text style={styles.rowLabel}>{SUBJECT_LABEL[s.subject] ?? s.subject}</Text>
          <Text style={styles.rowValue}>{s.questions} questions</Text>
        </View>
      ))}
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>
          {offer.questions} Q · {offer.max_marks} marks · {offer.duration_minutes} min
        </Text>
      </View>
      <View style={styles.tagsRow}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>+4 correct</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>−1 wrong</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Doesn’t use a paper credit</Text>
        </View>
      </View>
    </View>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    card: {
      backgroundColor: colors.tint,
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.45)',
      borderRadius: scale(16),
      paddingVertical: verticalScale(16),
      paddingHorizontal: scale(18),
      marginTop: verticalScale(14),
    },
    overline: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.0),
      letterSpacing: scale(1.05),
      textTransform: 'uppercase',
      color: colors.amberText,
      marginBottom: verticalScale(6),
    },
    title: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(18),
      color: colors.ink,
      marginBottom: verticalScale(4),
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: verticalScale(8),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.1)',
      borderStyle: 'dashed',
    },
    rowLabel: { fontFamily: 'Onest_600SemiBold', fontSize: scale(14), color: colors.ink },
    rowValue: { fontFamily: 'Onest_600SemiBold', fontSize: scale(12), color: colors.faint },
    totalRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: verticalScale(10),
    },
    totalLabel: { fontFamily: 'Onest_700Bold', fontSize: scale(14), color: colors.ink },
    totalValue: { fontFamily: 'Onest_700Bold', fontSize: scale(14), color: colors.ink },
    tagsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(7),
      marginTop: verticalScale(12),
    },
    tag: {
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.12)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(4),
      paddingHorizontal: scale(11),
      backgroundColor: '#fff',
    },
    tagText: { fontFamily: 'Onest_600SemiBold', fontSize: scale(11), color: colors.slate },
  });
}

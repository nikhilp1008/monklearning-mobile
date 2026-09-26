import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { clearMockSession, getMockSession } from '@/lib/mock';

const SUBJECT_LABEL: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Maths',
  biology: 'Biology',
};

/**
 * The scorecard, straight from POST /mock/{id}/submit — every number on this
 * page is the server's grading, nothing is recomputed client-side. Leaving
 * the page ends the session; the run itself is stored server-side and the
 * mastery it earned (at the 1.15x mock premium) shows up on Progress.
 */
export default function MockResultScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const session = getMockSession();
  const result = session?.result ?? null;

  useEffect(() => {
    if (!result) router.replace('/mock-ready');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!session || !result) return <View style={styles.screen} />;

  const { score } = result;
  const subjects = session.paper.sections.map((s) => ({
    subject: s.subject,
    stats: score.per_subject[s.subject],
  }));

  const finish = () => {
    clearMockSession();
    router.dismissTo('/progress');
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ScrollView style={styles.content} contentContainerStyle={styles.contentInner}>
          <View style={styles.headerRow}>
            <View style={styles.iconChip}>
              <FlagIcon size={scale(21)} />
            </View>
            <View>
              <Text style={styles.overline}>Mock test · submitted</Text>
              <Text style={styles.title}>Your scorecard</Text>
            </View>
          </View>

          <View style={styles.scoreCard}>
            <Text style={styles.scoreValue}>
              {score.total_marks}
              <Text style={styles.scoreCeiling}> / {score.max_marks}</Text>
            </Text>
            <Text style={styles.scoreCaption}>
              marks · {session.paper.exam === 'jee' ? 'JEE Main pattern' : 'NEET UG pattern'}
            </Text>
            <View style={styles.tallyRow}>
              <View style={styles.tallyChip}>
                <Text style={[styles.tallyValue, styles.tallyCorrect]}>{score.correct}</Text>
                <Text style={styles.tallyLabel}>correct</Text>
              </View>
              <View style={styles.tallyChip}>
                <Text style={[styles.tallyValue, styles.tallyWrong]}>{score.wrong}</Text>
                <Text style={styles.tallyLabel}>wrong</Text>
              </View>
              <View style={styles.tallyChip}>
                <Text style={styles.tallyValue}>{score.unanswered}</Text>
                <Text style={styles.tallyLabel}>skipped</Text>
              </View>
            </View>
          </View>

          <View style={styles.subjectCard}>
            <Text style={styles.subjectOverline}>By subject</Text>
            {subjects.map(({ subject, stats }) => (
              <View key={subject} style={styles.subjectRow}>
                <Text style={styles.subjectName}>{SUBJECT_LABEL[subject] ?? subject}</Text>
                <Text style={styles.subjectDetail}>
                  {stats ? `${stats.correct}✓ ${stats.wrong}✗ ${stats.unanswered}·` : 'No questions'}
                </Text>
                <Text style={styles.subjectMarks}>{stats ? stats.marks : 0}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.hint}>
            Every answer here counts toward your Monk Score at the 1.15× exam-conditions
            premium. Progress updates in a few minutes.
          </Text>
        </ScrollView>

        <View style={styles.footer}>
          <Pressable style={styles.doneButton} onPress={finish}>
            <Text style={styles.doneButtonText}>Back to Progress</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

function FlagIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M5 21V4m0 1h12l-2.5 3.5L17 12H5"
        stroke="#157A45"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.paper,
    },
    safeArea: {
      flex: 1,
    },
    content: {
      flex: 1,
    },
    contentInner: {
      paddingTop: verticalScale(18),
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(20),
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(13),
    },
    iconChip: {
      width: scale(44),
      height: scale(44),
      borderRadius: scale(13),
      backgroundColor: 'rgba(28,155,87,.1)',
      borderWidth: 1,
      borderColor: 'rgba(28,155,87,.3)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    overline: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.0),
      letterSpacing: scale(1.05),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    title: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(19),
      letterSpacing: scale(-0.19),
      color: colors.ink,
    },
    scoreCard: {
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.08)',
      borderRadius: scale(16),
      paddingVertical: verticalScale(22),
      paddingHorizontal: scale(18),
      marginTop: verticalScale(16),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1.5) },
      shadowOpacity: 0.05,
      shadowRadius: scale(2),
      elevation: 1,
    },
    scoreValue: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(44),
      letterSpacing: scale(-0.88),
      color: colors.ink,
    },
    scoreCeiling: {
      fontSize: scale(20),
      letterSpacing: 0,
      color: colors.faint,
    },
    scoreCaption: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.faint,
      marginTop: verticalScale(2),
    },
    tallyRow: {
      flexDirection: 'row',
      gap: scale(8),
      marginTop: verticalScale(16),
    },
    tallyChip: {
      flex: 1,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.1)',
      borderRadius: scale(12),
      paddingVertical: verticalScale(10),
    },
    tallyValue: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(17),
      color: colors.ink,
    },
    tallyCorrect: {
      color: '#157A45',
    },
    tallyWrong: {
      color: '#B3362A',
    },
    tallyLabel: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
      marginTop: verticalScale(2),
    },
    subjectCard: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.08)',
      borderRadius: scale(16),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(18),
      marginTop: verticalScale(14),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1.5) },
      shadowOpacity: 0.05,
      shadowRadius: scale(2),
      elevation: 1,
    },
    subjectOverline: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.0),
      letterSpacing: scale(1.05),
      textTransform: 'uppercase',
      color: colors.faint,
      marginBottom: verticalScale(4),
    },
    subjectRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: verticalScale(9),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.08)',
      borderStyle: 'dashed',
    },
    subjectName: {
      flex: 1,
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    subjectDetail: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.faint,
      marginRight: scale(12),
    },
    subjectMarks: {
      minWidth: scale(40),
      textAlign: 'right',
      fontFamily: 'Onest_700Bold',
      fontSize: scale(15),
      color: colors.ink,
    },
    hint: {
      textAlign: 'center',
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12),
      lineHeight: scale(18),
      color: colors.faint,
      marginTop: verticalScale(14),
    },
    footer: {
      flexShrink: 0,
      paddingTop: verticalScale(12),
      paddingBottom: verticalScale(12),
      paddingHorizontal: scale(24),
    },
    doneButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: verticalScale(52),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(6) },
      shadowOpacity: 0.3,
      shadowRadius: scale(10),
      elevation: 6,
    },
    doneButtonText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      color: colors.paper,
    },
  });
}

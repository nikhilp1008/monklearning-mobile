import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { pageTitle } from '@/constants/page-title';
import { useScale } from '@/constants/scale';
import { getMockSession } from '@/lib/mock';

const SUBJECT_LABEL: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Maths',
  biology: 'Biology',
};

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
    if (!session) router.replace('/mock-ready');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!session) return <View style={styles.screen} />;

  const answered = session.paper.questions.filter((q) => session.answers.has(q.id)).length;

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.content}>
          <Text style={styles.heading}>Mock test</Text>

          <View style={styles.headerRow}>
            <View style={styles.iconChip}>
              <PauseIcon size={scale(21)} />
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.overline}>Stepped away</Text>
              <Text style={styles.title}>Your paper is waiting</Text>
            </View>
          </View>

          <View style={styles.statusCard}>
            <View style={styles.statusTopRow}>
              <Text style={styles.statusTitle}>Test in progress</Text>
              <View style={styles.pausedBadge}>
                <Text style={styles.pausedBadgeText}>CLOCK RUNNING</Text>
              </View>
            </View>
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
              <Text style={styles.statusLabel}>Marked for review</Text>
              <Text style={styles.statusValue}>{session.marked.size}</Text>
            </View>
          </View>

          <View style={styles.patternCard}>
            <Text style={styles.patternOverline}>
              Paper pattern · {session.paper.exam === 'jee' ? 'JEE Main' : 'NEET UG'}
            </Text>
            {session.paper.sections.map((section) => (
              <View key={section.subject} style={styles.patternRow}>
                <Text style={styles.patternRowLabel}>
                  {SUBJECT_LABEL[section.subject] ?? section.subject}
                </Text>
                <Text style={styles.patternRowValue}>{section.questions} questions</Text>
              </View>
            ))}
            <View style={styles.patternTotalRow}>
              <Text style={styles.patternTotalLabel}>Total</Text>
              <Text style={styles.patternTotalValue}>
                {session.paper.total_questions} Q · {session.paper.duration_minutes / 60} hours
              </Text>
            </View>
          </View>

          <Text style={styles.hint}>
            Real conditions: the clock keeps running while you are away, exactly like exam
            day.
          </Text>
        </View>

        <View style={styles.footer}>
          <Pressable style={styles.resumeButton} onPress={() => router.back()}>
            <Text style={styles.resumeButtonText}>Resume mock test</Text>
            <ArrowRightIcon size={scale(15)} />
          </Pressable>
          {/* The way OUT. Without this, Save & exit -> Resume was a closed
              loop and the rest of the app was unreachable mid-paper. The
              session stays; mock-ready's button reads Resume until the
              clock runs out or the paper is submitted. */}
          <Pressable
            style={styles.leaveButton}
            onPress={() => router.dismissTo('/progress')}>
            <Text style={styles.leaveButtonText}>Leave it running</Text>
          </Pressable>
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
  const remaining = () => Math.max(0, Math.floor((deadline - Date.now()) / 1000));
  const [secondsLeft, setSecondsLeft] = useState(remaining);
  useEffect(() => {
    const id = setInterval(() => setSecondsLeft(remaining()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deadline]);
  return <Text style={styles.statusValueMono}>{formatTime(secondsLeft)}</Text>;
}

function PauseIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Circle cx={12} cy={12} r={9} stroke="#157A45" strokeWidth={2} />
      <Path
        d="M12 7v5l3.5 2"
        stroke="#157A45"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function ArrowRightIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path
        d="M2 8h11M9 3.5 13.5 8 9 12.5"
        stroke={colors.paper}
        strokeWidth={1.9}
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
      paddingTop: verticalScale(8),
      paddingHorizontal: scale(20),
    },
    /** The app’s one page-title tier — see constants/page-title.ts. */
    heading: pageTitle(scale),
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(13),
      marginTop: verticalScale(18),
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
    textBlock: {
      flexShrink: 1,
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
    statusCard: {
      backgroundColor: '#FCF4E0',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.45)',
      borderRadius: scale(16),
      paddingVertical: verticalScale(16),
      paddingHorizontal: scale(18),
      marginTop: verticalScale(16),
    },
    statusTopRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    statusTitle: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(15),
      color: colors.ink,
    },
    pausedBadge: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.5)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(3),
      paddingHorizontal: scale(10),
    },
    pausedBadgeText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(10),
      color: '#9A6A12',
    },
    statusRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: verticalScale(7),
    },
    statusRowFirst: {
      marginTop: verticalScale(14),
    },
    statusLabel: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      color: colors.slate,
    },
    statusValue: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(14),
      color: colors.ink,
    },
    statusValueMono: {
      fontFamily: 'Menlo',
      fontWeight: '700',
      fontSize: scale(15),
      color: colors.ink,
    },
    patternCard: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.08)',
      borderRadius: scale(16),
      paddingVertical: verticalScale(16),
      paddingHorizontal: scale(18),
      marginTop: verticalScale(12),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1.5) },
      shadowOpacity: 0.05,
      shadowRadius: scale(2),
      elevation: 1,
    },
    patternOverline: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.0),
      letterSpacing: scale(1.05),
      textTransform: 'uppercase',
      color: colors.faint,
      marginBottom: verticalScale(8),
    },
    patternRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: verticalScale(8),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.1)',
      borderStyle: 'dashed',
    },
    patternRowLabel: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    patternRowValue: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.faint,
    },
    patternTotalRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: verticalScale(10),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.16)',
      borderStyle: 'dashed',
    },
    patternTotalLabel: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(14),
      color: colors.ink,
    },
    patternTotalValue: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(14),
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
      paddingTop: verticalScale(14),
      paddingBottom: verticalScale(12),
      paddingHorizontal: scale(24),
    },
    resumeButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(9),
      width: '100%',
      height: verticalScale(52),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(6) },
      shadowOpacity: 0.3,
      shadowRadius: scale(10),
      elevation: 6,
    },
    resumeButtonText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      color: colors.paper,
    },
    leaveButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: verticalScale(44),
      marginTop: verticalScale(8),
      borderRadius: scale(99),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
    },
    leaveButtonText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: colors.slate,
    },
  });
}

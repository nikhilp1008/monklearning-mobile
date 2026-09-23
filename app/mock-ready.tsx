import { router, useFocusEffect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { PracticeTabsHeader } from '@/components/practice-tabs-header';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { createMockPaper, getMockSession, startMockSession } from '@/lib/mock';
import { getProfile } from '@/lib/profile';

/**
 * The paper patterns, for display before a paper exists. The server's
 * blueprint (routers/mock.py PAPERS) is the authority — the response's own
 * counts drive every screen after Start — so these exist only so the page
 * can say what Start will build.
 */
const PATTERNS = {
  jee: {
    label: 'JEE Main',
    rows: [
      { label: 'Physics', value: '20 MCQ + 5 numerical' },
      { label: 'Chemistry', value: '20 MCQ + 5 numerical' },
      { label: 'Maths', value: '20 MCQ + 5 numerical' },
    ],
    total: '75 Q · 300 marks · 3 hours',
  },
  neet: {
    label: 'NEET UG',
    rows: [
      { label: 'Physics', value: '45 questions' },
      { label: 'Chemistry', value: '45 questions' },
      { label: 'Biology', value: '90 questions' },
    ],
    total: '180 Q · 720 marks · 3 hours',
  },
} as const;

type ExamKey = keyof typeof PATTERNS;

export default function MockReadyScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [exam, setExam] = useState<ExamKey>('jee');
  // A 'both' student sits both papers, so they pick which one this sitting is.
  const [showExamPicker, setShowExamPicker] = useState(false);
  const [building, setBuilding] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasActivePaper, setHasActivePaper] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getProfile().then(({ exam: profileExam }) => {
      if (cancelled) return;
      if (profileExam === 'both') setShowExamPicker(true);
      else setExam(profileExam === 'neet' ? 'neet' : 'jee');
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Re-checked on focus, not just mount: coming back from mock-paused is a
  // focus, and this screen's one button must say Resume, not Start.
  useFocusEffect(
    useCallback(() => {
      const s = getMockSession();
      setHasActivePaper(!!s && !s.result);
      if (s && !s.result) setExam(s.paper.exam);
    }, [])
  );

  const start = async () => {
    if (building) return;
    if (hasActivePaper) {
      router.push('/mock-test');
      return;
    }
    setBuilding(true);
    setError(null);
    try {
      const paper = await createMockPaper(exam);
      startMockSession(paper);
      router.push('/mock-test');
    } catch {
      setError('Could not set your paper just now. Check your connection and try again.');
    } finally {
      setBuilding(false);
    }
  };

  const pattern = PATTERNS[exam];

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.content}>
          <PracticeTabsHeader />

          <View style={styles.headerRow}>
            <View style={styles.iconChip}>
              <CheckIcon size={scale(21)} />
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.overline}>Mock test</Text>
              <Text style={styles.title}>
                {hasActivePaper ? 'Your paper is waiting' : 'Sit a full paper'}
              </Text>
            </View>
          </View>

          {showExamPicker && !hasActivePaper ? (
            <View style={styles.examPickerRow}>
              {(Object.keys(PATTERNS) as ExamKey[]).map((key) => (
                <Pressable
                  key={key}
                  style={[styles.examPill, exam === key && styles.examPillActive]}
                  onPress={() => setExam(key)}>
                  <Text
                    style={[styles.examPillText, exam === key && styles.examPillTextActive]}>
                    {PATTERNS[key].label}
                  </Text>
                </Pressable>
              ))}
            </View>
          ) : null}

          <View style={styles.dronaCallCard}>
            <Text style={styles.dronaCallOverline}>How your paper is built</Text>
            <Text style={styles.dronaCallBody}>
              One in five questions comes straight from real past-paper masters you&apos;ve
              never seen, one in five re-asks what you got wrong in Practice, and the rest
              are fresh — under real exam conditions and marking.
            </Text>
          </View>

          <View style={styles.patternCard}>
            <Text style={styles.patternOverline}>Paper pattern · {pattern.label}</Text>
            {pattern.rows.map((row) => (
              <View key={row.label} style={styles.patternRow}>
                <Text style={styles.patternRowLabel}>{row.label}</Text>
                <Text style={styles.patternRowValue}>{row.value}</Text>
              </View>
            ))}
            <View style={styles.patternTotalRow}>
              <Text style={styles.patternTotalLabel}>Total</Text>
              <Text style={styles.patternTotalValue}>{pattern.total}</Text>
            </View>
            <View style={styles.patternTagsRow}>
              <View style={styles.patternTag}>
                <Text style={styles.patternTagText}>+4 correct</Text>
              </View>
              <View style={styles.patternTag}>
                <Text style={styles.patternTagText}>−1 wrong</Text>
              </View>
              <View style={styles.patternTag}>
                <Text style={styles.patternTagText}>Pause &amp; resume</Text>
              </View>
            </View>
          </View>

          <Text style={styles.hint}>
            {error ??
              (hasActivePaper
                ? 'The clock kept running while you were away.'
                : 'Once you start, the timer runs, but you can pause and resume any time.')}
          </Text>
        </View>

        <View style={styles.footer}>
          <Pressable style={styles.startButton} onPress={start}>
            {building ? (
              <>
                <ActivityIndicator color={colors.paper} />
                <Text style={styles.startButtonText}>Setting your paper…</Text>
              </>
            ) : (
              <>
                <Text style={styles.startButtonText}>
                  {hasActivePaper ? 'Resume mock test' : 'Start mock test'}
                </Text>
                <ArrowRightIcon size={scale(15)} />
              </>
            )}
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

function CheckIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M5 13l4 4L19 7"
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
      minHeight: 0,
      paddingTop: verticalScale(8),
      paddingHorizontal: scale(20),
    },
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
    examPickerRow: {
      flexDirection: 'row',
      gap: scale(3),
      padding: scale(3),
      backgroundColor: 'rgba(28,26,22,.055)',
      borderRadius: scale(99),
      marginTop: verticalScale(14),
    },
    examPill: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: verticalScale(7),
      borderRadius: scale(99),
    },
    examPillActive: {
      backgroundColor: '#fff',
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(2) },
      shadowOpacity: 0.12,
      shadowRadius: scale(6),
      elevation: 2,
    },
    examPillText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    examPillTextActive: {
      fontFamily: 'Onest_700Bold',
      color: colors.ink,
    },
    dronaCallCard: {
      backgroundColor: '#FCF4E0',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.4)',
      borderRadius: scale(14),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(16),
      marginTop: verticalScale(14),
    },
    dronaCallOverline: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.0),
      letterSpacing: scale(1.05),
      textTransform: 'uppercase',
      color: '#9A6A12',
      marginBottom: verticalScale(5),
    },
    dronaCallBody: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      lineHeight: scale(21),
      color: colors.ink,
    },
    patternCard: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.08)',
      borderRadius: scale(16),
      paddingVertical: verticalScale(16),
      paddingHorizontal: scale(18),
      marginTop: verticalScale(16),
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
    patternTagsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(7),
      marginTop: verticalScale(12),
    },
    patternTag: {
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.12)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(4),
      paddingHorizontal: scale(11),
    },
    patternTagText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(11),
      color: colors.slate,
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
    startButton: {
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
    startButtonText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      color: colors.paper,
    },
  });
}

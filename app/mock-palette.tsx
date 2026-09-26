import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Svg, { Path } from 'react-native-svg';
import { useEffect, useMemo, useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/constants/brand';
import { pageTitle } from '@/constants/page-title';
import { useScale } from '@/constants/scale';
import { getMockSession, submitCurrentSession } from '@/lib/mock';

const SUBJECT_LABEL: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Maths',
  biology: 'Biology',
};

type Status = 'answered' | 'marked' | 'current' | 'not-answered';


export default function MockPaletteScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const session = getMockSession();
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!session) router.back();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!session) return <View style={styles.root} />;

  const statusFor = (qid: string, i: number): Status => {
    if (i === session.index) return 'current';
    if (session.marked.has(qid)) return 'marked';
    if (session.answers.has(qid)) return 'answered';
    return 'not-answered';
  };

  const jump = (i: number) => {
    session.index = i;
    router.back();
  };

  const answered = session.paper.questions.filter((q) => session.answers.has(q.id)).length;

  /**
   * THE PAPER ENDS HERE, and only here.
   *
   * Submit used to sit in the paper's top bar, next to the clock, on every
   * one of 75 questions — the one irreversible control in the flow, always
   * under the thumb. This page is the only place a student can see what they
   * are about to hand in, so it is the only place that hands it in.
   */
  const doSubmit = async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      const result = await submitCurrentSession();
      router.replace(`/mock-report?run=${result?.mock_run_id ?? ''}`);
    } catch {
      setSubmitting(false);
      Alert.alert(
        'Could not submit',
        'Your answers are safe on this device. Check your connection and submit again.',
        [{ text: 'OK' }]
      );
    }
  };

  const confirmSubmit = () => {
    const total = session.paper.questions.length;
    Alert.alert(
      'Submit test?',
      `${answered} answered · ${total - answered} unanswered. Unanswered questions score 0.`,
      [
        { text: 'Keep going', style: 'cancel' },
        { text: 'Submit', style: 'destructive', onPress: doSubmit },
      ]
    );
  };

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <View style={styles.sheet}>
        <SafeAreaView style={styles.flex} edges={['top', 'bottom']}>
          {/* A PAGE, NOT A SHEET. It was a card over a scrim with a drag
              handle — the only screen in the mock flow that behaved like a
              popup, while ready, the paper, paused and the scorecard are all
              full pages.
              No clock on it: one is already running on the paper behind, and
              a second here would be a third thing ticking at a student. */}
          <View style={styles.headRow}>
            <Pressable
              style={styles.backButton}
              hitSlop={10}
              accessibilityRole="button"
              accessibilityLabel="Back to the paper"
              onPress={() => router.back()}>
              <BackArrowIcon size={scale(16)} />
            </Pressable>
            <Text style={styles.title}>All questions</Text>
          </View>
          <Text style={styles.subtitle}>
            {answered} of {session.paper.questions.length} answered · tap any number to jump
          </Text>

          <ScrollView style={styles.gridScroll}>
            {session.paper.sections.map((section) => {
              const rows = session.paper.questions
                .map((q, i) => ({ q, i }))
                .filter(({ q }) => q.subject === section.subject);
              return (
                <View key={section.subject}>
                  <Text style={styles.sectionLabel}>
                    {SUBJECT_LABEL[section.subject] ?? section.subject}
                  </Text>
                  <View style={styles.grid}>
                    {rows.map(({ q, i }) => {
                      const status = statusFor(q.id, i);
                      return (
                        <Pressable
                          key={q.id}
                          style={[
                            styles.cell,
                            status === 'answered' && styles.cellAnswered,
                            status === 'marked' && styles.cellMarked,
                            status === 'current' && styles.cellCurrent,
                          ]}
                          onPress={() => jump(i)}>
                          <Text
                            style={[
                              styles.cellText,
                              status === 'answered' && styles.cellTextAnswered,
                              status === 'marked' && styles.cellTextMarked,
                              status === 'current' && styles.cellTextCurrent,
                            ]}>
                            {q.question_num}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                </View>
              );
            })}
            <View style={styles.legendRow}>
              <View style={styles.legendItem}>
                <View style={[styles.legendSwatch, styles.legendSwatchAnswered]} />
                <Text style={styles.legendText}>Answered</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendSwatch, styles.legendSwatchNotAnswered]} />
                <Text style={styles.legendText}>Not answered</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendSwatch, styles.legendSwatchMarked]} />
                <Text style={styles.legendText}>Marked</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendSwatch, styles.legendSwatchCurrent]} />
                <Text style={styles.legendText}>Current</Text>
              </View>
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <Pressable
              style={styles.submitButton}
              accessibilityRole="button"
              onPress={confirmSubmit}>
              <Text style={styles.submitButtonText}>
                {submitting ? 'Submitting…' : 'Submit test'}
              </Text>
            </Pressable>
          </View>

        </SafeAreaView>
      </View>
    </View>
  );
}



const GRID_COLUMNS = 9;

function BackArrowIcon({ size }: { size: number }) {
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
  const gridGap = scale(6);
  // Content width is the 390pt reference minus the sheet's own 20px horizontal
  // padding on each side — mirrors the design's `grid-template-columns:
  // repeat(9,1fr)`, whose `1fr` columns already subtract the gaps from the
  // available width. RN flexWrap has no such primitive: a percentage cell
  // width plus a separate `gap` overflows the row by the gap's own width,
  // silently dropping to 8 cells per row instead of 9. Computing an exact
  // pixel cell size avoids that.
  const gridContentWidth = scale(390 - 20 * 2);
  const cellSize = (gridContentWidth - gridGap * (GRID_COLUMNS - 1)) / GRID_COLUMNS;

  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#fff',
    },
    flex: {
      flex: 1,
    },
    sheet: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: scale(20),
    },
    /** The app's page-title tier — see constants/page-title.ts. */
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
    title: { flex: 1, minWidth: 0, ...pageTitle(scale) },
    subtitle: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.faint,
      marginTop: verticalScale(2),
    },
    /** Flexible, not a fixed 430pt. The legend and the footer under it were
     *  pushed off the bottom of the screen on a long paper, which is exactly
     *  the paper this page exists for. */
    gridScroll: {
      flex: 1,
      minHeight: 0,
    },
    sectionLabel: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.0),
      letterSpacing: scale(1.05),
      textTransform: 'uppercase',
      color: colors.faint,
      marginTop: verticalScale(14),
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: gridGap,
      marginTop: verticalScale(8),
    },
    cell: {
      width: cellSize,
      height: cellSize,
      alignItems: 'center',
      justifyContent: 'center',
      /** 10, like every other small chip in the app. The grid itself stays
       *  square and dense on purpose: it is the shape a student already
       *  knows from the real exam hall, and familiarity there is worth more
       *  than making it look like the rest of our screens. */
      borderRadius: scale(10),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.12)',
      backgroundColor: '#fff',
    },
    cellAnswered: {
      backgroundColor: 'rgba(28,155,87,.12)',
      borderColor: 'rgba(28,155,87,.5)',
    },
    cellMarked: {
      backgroundColor: '#FCF4E0',
      borderColor: colors.marigold,
    },
    cellCurrent: {
      backgroundColor: colors.ink,
      borderColor: colors.ink,
    },
    cellText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11),
      color: colors.slate,
    },
    cellTextAnswered: {
      color: '#157A45',
    },
    cellTextMarked: {
      color: '#9A6A12',
    },
    cellTextCurrent: {
      color: colors.paper,
    },
    /** Under the grid, inside the same scroll: it explains the colours in
     *  the grid, and floating it at the foot of the page left a hand's width
     *  of nothing between the two. */
    legendRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      rowGap: verticalScale(8),
      columnGap: scale(16),
      marginTop: verticalScale(18),
      marginBottom: verticalScale(4),
    },
    legendItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
    },
    legendSwatch: {
      width: scale(11),
      height: scale(11),
      borderRadius: scale(4),
      borderWidth: scale(1.4),
    },
    legendSwatchAnswered: {
      backgroundColor: 'rgba(28,155,87,.14)',
      borderColor: 'rgba(28,155,87,.5)',
    },
    legendSwatchNotAnswered: {
      backgroundColor: '#fff',
      borderColor: 'rgba(28,26,22,.18)',
    },
    legendSwatchMarked: {
      backgroundColor: '#FCF4E0',
      borderColor: colors.marigold,
    },
    legendSwatchCurrent: {
      backgroundColor: colors.ink,
      borderColor: colors.ink,
    },
    legendText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(11),
      color: colors.slate,
    },
    footer: {
      flexShrink: 0,
      paddingTop: verticalScale(14),
      paddingBottom: verticalScale(6),
    },
    /** The app's primary key, at the app's size. */
    submitButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: verticalScale(52),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
    },
    submitButtonText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(16),
      color: colors.paper,
    },
  });
}

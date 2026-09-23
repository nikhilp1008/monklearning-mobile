import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { getMockSession } from '@/lib/mock';

const SUBJECT_LABEL: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  mathematics: 'Maths',
  biology: 'Biology',
};

type Status = 'answered' | 'marked' | 'current' | 'not-answered';

function formatTime(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const sec = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(h)}:${pad(m)}:${pad(sec)}`;
}

export default function MockPaletteScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const session = getMockSession();

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

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <Pressable style={styles.scrim} onPress={() => router.back()} />
      <View style={styles.sheet}>
        <SafeAreaView style={styles.flex} edges={['bottom']}>
          <View style={styles.handle} />
          <View style={styles.headerRow}>
            <Text style={styles.title}>Question palette</Text>
            <TimerPill styles={styles} scale={scale} deadline={session.deadline} />
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
          </ScrollView>

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

        </SafeAreaView>
      </View>
    </View>
  );
}

function TimerPill({
  styles,
  scale,
  deadline,
}: {
  styles: ReturnType<typeof createStyles>;
  scale: (n: number) => number;
  deadline: number;
}) {
  const remaining = () => Math.max(0, Math.floor((deadline - Date.now()) / 1000));
  const [secondsLeft, setSecondsLeft] = useState(remaining);
  useEffect(() => {
    const id = setInterval(() => setSecondsLeft(remaining()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deadline]);
  return (
    <View style={styles.timerPill}>
      <ClockIcon size={scale(11)} />
      <Text style={styles.timerText}>{formatTime(secondsLeft)}</Text>
    </View>
  );
}

function ClockIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Circle cx={12} cy={13} r={8} stroke={colors.paper} strokeWidth={1.9} />
      <Path d="M12 9v4l3 2M9 2h6" stroke={colors.paper} strokeWidth={1.9} strokeLinecap="round" />
    </Svg>
  );
}

const GRID_COLUMNS = 9;

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
    },
    flex: {
      flex: 1,
    },
    scrim: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(28,26,22,.42)',
    },
    sheet: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#fff',
      borderTopLeftRadius: scale(24),
      borderTopRightRadius: scale(24),
      paddingHorizontal: scale(20),
      shadowColor: '#16130E',
      shadowOffset: { width: 0, height: verticalScale(-10) },
      shadowOpacity: 0.25,
      shadowRadius: scale(20),
      elevation: 12,
    },
    handle: {
      width: scale(40),
      height: verticalScale(5),
      borderRadius: scale(99),
      backgroundColor: 'rgba(28,26,22,.18)',
      alignSelf: 'center',
      marginTop: verticalScale(10),
      marginBottom: verticalScale(14),
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(17),
      letterSpacing: scale(-0.17),
      color: colors.ink,
    },
    timerPill: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
      backgroundColor: colors.ink,
      borderRadius: scale(99),
      paddingVertical: verticalScale(5),
      paddingHorizontal: scale(12),
    },
    timerText: {
      fontFamily: 'Menlo',
      fontWeight: '700',
      fontSize: scale(13),
      color: colors.paper,
    },
    subtitle: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.faint,
      marginTop: verticalScale(2),
    },
    gridScroll: {
      maxHeight: verticalScale(430),
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
      borderRadius: scale(8),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.14)',
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
    legendRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      rowGap: verticalScale(8),
      columnGap: scale(16),
      marginTop: verticalScale(14),
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
  });
}

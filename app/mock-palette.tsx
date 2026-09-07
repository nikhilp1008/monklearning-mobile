import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

const TOTAL_QUESTIONS = 45;
const CURRENT_QUESTION = 12;
const ANSWERED_THROUGH = 11;
const MARKED = new Set([4, 18]);

type Status = 'answered' | 'marked' | 'current' | 'not-answered';

function statusFor(n: number): Status {
  if (n === CURRENT_QUESTION) return 'current';
  if (MARKED.has(n)) return 'marked';
  if (n <= ANSWERED_THROUGH) return 'answered';
  return 'not-answered';
}

const QUESTION_NUMBERS = Array.from({ length: TOTAL_QUESTIONS }, (_, i) => i + 1);

export default function MockPaletteScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <Pressable style={styles.scrim} onPress={() => router.back()} />
      <View style={styles.sheet}>
        <SafeAreaView style={styles.flex} edges={['bottom']}>
          <View style={styles.handle} />
          <View style={styles.headerRow}>
            <Text style={styles.title}>Question palette</Text>
            <View style={styles.timerPill}>
              <ClockIcon size={scale(11)} />
              <Text style={styles.timerText}>02:47:12</Text>
            </View>
          </View>
          <Text style={styles.subtitle}>Physics · 45 questions · tap any number to jump</Text>

          <View style={styles.grid}>
            {QUESTION_NUMBERS.map((n) => {
              const status = statusFor(n);
              return (
                <Pressable
                  key={n}
                  style={[
                    styles.cell,
                    status === 'answered' && styles.cellAnswered,
                    status === 'marked' && styles.cellMarked,
                    status === 'current' && styles.cellCurrent,
                  ]}
                  onPress={() => router.back()}>
                  <Text
                    style={[
                      styles.cellText,
                      status === 'answered' && styles.cellTextAnswered,
                      status === 'marked' && styles.cellTextMarked,
                      status === 'current' && styles.cellTextCurrent,
                    ]}>
                    {n}
                  </Text>
                </Pressable>
              );
            })}
          </View>

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
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: gridGap,
      marginTop: verticalScale(14),
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

import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { RuledPaper } from '@/components/ruled-paper';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

const START_SECONDS = 2 * 3600 + 47 * 60 + 12;

type Option = { letter: 'A' | 'B' | 'C' | 'D'; text: string };

const OPTIONS: Option[] = [
  { letter: 'A', text: '0 m/s²' },
  { letter: 'B', text: '2.5 m/s²' },
  { letter: 'C', text: '5 m/s²' },
  { letter: 'D', text: '7.5 m/s²' },
];

const SUBJECTS = ['Physics', 'Chemistry', 'Maths'] as const;

const PALETTE_DOTS = ['#1C9B57', '#1C9B57', 'rgba(28,26,22,.2)', '#EEA31F', 'rgba(28,26,22,.2)', '#1C9B57'];

function formatTime(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

export default function MockTestScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [activeSubject, setActiveSubject] = useState<(typeof SUBJECTS)[number]>('Physics');
  const [selectedOption, setSelectedOption] = useState<Option['letter'] | null>('C');
  const [markedForReview, setMarkedForReview] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(START_SECONDS);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const saveAndNext = () => {
    setSelectedOption(null);
    setMarkedForReview(false);
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.topBar}>
          <Pressable style={styles.exitButton} onPress={() => router.push('/mock-paused')}>
            <Text style={styles.exitButtonText}>Save & exit</Text>
          </Pressable>
          <View style={styles.timerPill}>
            <ClockIcon size={scale(13)} />
            <Text style={styles.timerText}>{formatTime(secondsLeft)}</Text>
          </View>
          <Pressable style={styles.submitButton} onPress={() => router.push('/progress')}>
            <Text style={styles.submitButtonText}>Submit test</Text>
          </Pressable>
        </View>

        <View style={styles.subjectRow}>
          <View style={styles.subjectTrack}>
            {SUBJECTS.map((subject) => (
              <Pressable
                key={subject}
                style={styles.subjectPillWrap}
                onPress={() => setActiveSubject(subject)}>
                <View
                  style={[
                    styles.subjectPill,
                    activeSubject === subject && styles.subjectPillActive,
                  ]}>
                  <Text
                    style={[
                      styles.subjectPillText,
                      activeSubject === subject && styles.subjectPillTextActive,
                    ]}>
                    {subject}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.metaRow}>
            <Text style={styles.metaText}>Physics · Q 12 / 45</Text>
            <View style={styles.markingPill}>
              <Text style={styles.markingPillText}>+4 / −1</Text>
            </View>
          </View>

          <View style={styles.questionCard}>
            <RuledPaper step={verticalScale(25)} color="rgba(28,26,22,.06)" count={14} />
            <View style={styles.questionRule} />
            <Text style={styles.questionBody}>
              A block of mass 2 kg is pushed up a frictionless incline of 30° with a force of
              20 N parallel to the incline. Its acceleration (g = 10 m/s²) is:
            </Text>
          </View>

          <View style={styles.optionsList}>
            {OPTIONS.map((option) => {
              const isSelected = selectedOption === option.letter;
              return (
                <Pressable
                  key={option.letter}
                  onPress={() => setSelectedOption(option.letter)}
                  style={[styles.optionRow, isSelected && styles.optionRowSelected]}>
                  <View style={[styles.optionBadge, isSelected && styles.optionBadgeSelected]}>
                    <Text
                      style={[
                        styles.optionBadgeText,
                        isSelected && styles.optionBadgeTextSelected,
                      ]}>
                      {option.letter}
                    </Text>
                  </View>
                  <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                    {option.text}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <View style={styles.markRow}>
            <Pressable onPress={() => setMarkedForReview((v) => !v)}>
              <Text style={[styles.markRowText, markedForReview && styles.markRowTextActive]}>
                ⚑ Mark for review
              </Text>
            </Pressable>
            <Pressable onPress={() => setSelectedOption(null)}>
              <Text style={styles.markRowText}>Clear</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.bottomNav}>
          <View style={styles.prevButton}>
            <Text style={styles.prevButtonText}>← Prev</Text>
          </View>
          <Pressable style={styles.paletteButton} onPress={() => router.push('/mock-palette')}>
            <View style={styles.paletteDots}>
              <View style={styles.paletteDotsRow}>
                {PALETTE_DOTS.slice(0, 3).map((dotColor, i) => (
                  <View key={i} style={[styles.paletteDot, { backgroundColor: dotColor }]} />
                ))}
              </View>
              <View style={styles.paletteDotsRow}>
                {PALETTE_DOTS.slice(3, 6).map((dotColor, i) => (
                  <View key={i} style={[styles.paletteDot, { backgroundColor: dotColor }]} />
                ))}
              </View>
            </View>
            <Text style={styles.paletteButtonText}>Palette</Text>
          </Pressable>
          <Pressable style={styles.nextButton} onPress={saveAndNext}>
            <Text style={styles.nextButtonText}>Save & Next →</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

function ClockIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Circle cx={12} cy={13} r={8} stroke={colors.ink} strokeWidth={1.9} />
      <Path d="M12 9v4l3 2M9 2h6" stroke={colors.ink} strokeWidth={1.9} strokeLinecap="round" />
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
    topBar: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      paddingTop: verticalScale(6),
      paddingHorizontal: scale(20),
    },
    exitButton: {
      paddingVertical: verticalScale(9),
      paddingHorizontal: scale(13),
      borderRadius: scale(99),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.14)',
      backgroundColor: '#fff',
    },
    exitButtonText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(12),
      color: colors.slate,
    },
    timerPill: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(7),
      backgroundColor: '#fff',
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.14)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(10),
    },
    timerText: {
      fontFamily: 'Menlo',
      fontWeight: '700',
      fontSize: scale(15),
      color: colors.ink,
    },
    submitButton: {
      paddingVertical: verticalScale(9),
      paddingHorizontal: scale(15),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
    },
    submitButtonText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(12),
      color: colors.paper,
    },
    subjectRow: {
      flexShrink: 0,
      flexDirection: 'row',
      paddingTop: verticalScale(8),
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(10),
    },
    subjectTrack: {
      flex: 1,
      flexDirection: 'row',
      gap: scale(3),
      padding: scale(3),
      backgroundColor: 'rgba(28,26,22,.055)',
      borderRadius: scale(99),
    },
    subjectPillWrap: {
      flex: 1,
    },
    subjectPill: {
      alignItems: 'center',
      paddingVertical: verticalScale(6),
      borderRadius: scale(99),
    },
    subjectPillActive: {
      backgroundColor: '#fff',
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(2) },
      shadowOpacity: 0.12,
      shadowRadius: scale(6),
      elevation: 2,
    },
    subjectPillText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    subjectPillTextActive: {
      fontFamily: 'Onest_700Bold',
      color: colors.ink,
    },
    content: {
      flex: 1,
      minHeight: 0,
      paddingHorizontal: scale(20),
    },
    metaRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: verticalScale(8),
    },
    metaText: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.0),
      letterSpacing: scale(1.05),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    markingPill: {
      backgroundColor: '#FCF4E0',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.4)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(3),
      paddingHorizontal: scale(9),
    },
    markingPillText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11),
      color: '#9A6A12',
    },
    questionCard: {
      position: 'relative',
      backgroundColor: '#FFFEFB',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.1)',
      borderRadius: scale(13),
      paddingTop: verticalScale(14),
      paddingRight: scale(15),
      paddingBottom: verticalScale(13),
      paddingLeft: scale(34),
      overflow: 'hidden',
    },
    questionRule: {
      position: 'absolute',
      top: verticalScale(11),
      bottom: verticalScale(11),
      left: scale(22),
      width: scale(1.4),
      backgroundColor: 'rgba(221,68,51,.4)',
    },
    questionBody: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(23.25),
      color: colors.ink,
    },
    optionsList: {
      flexDirection: 'column',
      gap: verticalScale(8),
      marginTop: verticalScale(12),
    },
    optionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(14),
      borderRadius: scale(12),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.12)',
      backgroundColor: '#fff',
    },
    optionRowSelected: {
      borderWidth: scale(1.6),
      borderColor: colors.ink,
      backgroundColor: 'rgba(28,26,22,.04)',
    },
    optionBadge: {
      width: scale(26),
      height: scale(26),
      flexShrink: 0,
      borderRadius: scale(8),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    optionBadgeSelected: {
      borderWidth: 0,
      backgroundColor: colors.ink,
    },
    optionBadgeText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(12),
      color: colors.ink,
    },
    optionBadgeTextSelected: {
      color: '#fff',
    },
    optionText: {
      flex: 1,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      color: colors.ink,
    },
    optionTextSelected: {
      fontFamily: 'Onest_700Bold',
    },
    markRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(14),
      marginTop: verticalScale(12),
    },
    markRowText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    markRowTextActive: {
      color: '#9A6A12',
    },
    bottomNav: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingTop: verticalScale(12),
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(6),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.08)',
      backgroundColor: 'rgba(255,255,255,.92)',
    },
    prevButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: verticalScale(46),
      paddingHorizontal: scale(16),
      borderRadius: scale(99),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
    },
    prevButtonText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: colors.ink,
    },
    paletteButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(8),
      height: verticalScale(46),
      paddingHorizontal: scale(14),
      borderRadius: scale(99),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
    },
    paletteDots: {
      flexDirection: 'column',
      gap: scale(2),
    },
    paletteDotsRow: {
      flexDirection: 'row',
      gap: scale(2),
    },
    paletteDot: {
      width: scale(4),
      height: scale(4),
      borderRadius: scale(1),
    },
    paletteButtonText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(12),
      color: colors.ink,
    },
    nextButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: verticalScale(46),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(5) },
      shadowOpacity: 0.28,
      shadowRadius: scale(9),
      elevation: 4,
    },
    nextButtonText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(14),
      color: colors.paper,
    },
  });
}

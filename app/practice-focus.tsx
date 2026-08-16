import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

type Selection = 'mixed' | 'weak' | 'current-electricity' | 'rotational-motion' | 'em-induction' | 'kinematics';

const CHAPTERS: { id: Selection; title: string; tag?: 'weak' }[] = [
  { id: 'current-electricity', title: 'Current Electricity' },
  { id: 'rotational-motion', title: 'Rotational Motion', tag: 'weak' },
  { id: 'em-induction', title: 'EM Induction', tag: 'weak' },
  { id: 'kinematics', title: 'Kinematics' },
];

export default function PracticeFocusScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [selected, setSelected] = useState<Selection>('current-electricity');

  const pickModeAndApply = (mode: 'mixed' | 'weak') => {
    setSelected(mode);
    router.back();
  };

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <Pressable style={styles.scrim} onPress={() => router.back()} />
      <View style={styles.sheet}>
        <SafeAreaView style={styles.flex} edges={['bottom']}>
          <View style={styles.handle} />
          <Text style={styles.title}>Practice focus</Text>
          <Text style={styles.subtitle}>Physics · questions follow whatever you pick</Text>

          <View style={styles.modeList}>
            <Pressable style={styles.modeRow} onPress={() => pickModeAndApply('mixed')}>
              <View style={styles.modeTextBlock}>
                <Text style={styles.modeTitle}>All chapters, mixed</Text>
                <Text style={styles.modeSubtitle}>The full syllabus, shuffled</Text>
              </View>
              <View style={styles.radio} />
            </Pressable>
            <Pressable style={styles.modeRow} onPress={() => pickModeAndApply('weak')}>
              <View style={styles.modeTextBlock}>
                <Text style={styles.modeTitle}>Weak areas first</Text>
                <Text style={styles.modeSubtitle}>Drona weights your fix-first chapters</Text>
              </View>
              <View style={styles.radio} />
            </Pressable>
          </View>

          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or focus on one chapter</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.chapterList}>
            {CHAPTERS.map((chapter) => {
              const isSelected = selected === chapter.id;
              return (
                <Pressable
                  key={chapter.id}
                  style={[styles.chapterRow, isSelected && styles.chapterRowSelected]}
                  onPress={() => setSelected(chapter.id)}>
                  <Text
                    style={[
                      styles.chapterTitle,
                      isSelected && styles.chapterTitleSelected,
                    ]}>
                    {chapter.title}
                  </Text>
                  {isSelected ? (
                    <View style={styles.chapterCheck}>
                      <Svg viewBox="0 0 24 24" width={scale(11)} height={scale(11)} fill="none">
                        <Path
                          d="M5 13l4 4L19 7"
                          stroke="#fff"
                          strokeWidth={3.2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </Svg>
                    </View>
                  ) : chapter.tag === 'weak' ? (
                    <View style={styles.weakTag}>
                      <Text style={styles.weakTagText}>weak</Text>
                    </View>
                  ) : null}
                </Pressable>
              );
            })}
          </View>

          <Pressable style={styles.applyButton} onPress={() => router.back()}>
            <Text style={styles.applyButtonText}>Apply focus</Text>
          </Pressable>
        </SafeAreaView>
      </View>
    </View>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
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
      backgroundColor: colors.paper,
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
    title: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(17),
      letterSpacing: scale(-0.17),
      color: colors.ink,
    },
    subtitle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.faint,
      marginTop: verticalScale(2),
    },
    modeList: {
      flexDirection: 'column',
      gap: verticalScale(8),
      marginTop: verticalScale(14),
    },
    modeRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      backgroundColor: '#fff',
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.12)',
      borderRadius: scale(13),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(14),
    },
    modeTextBlock: {
      flex: 1,
      minWidth: 0,
    },
    modeTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(14),
      color: colors.ink,
    },
    modeSubtitle: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(11),
      color: colors.faint,
    },
    radio: {
      width: scale(22),
      height: scale(22),
      flexShrink: 0,
      borderRadius: scale(11),
      backgroundColor: '#fff',
      borderWidth: scale(1.6),
      borderColor: 'rgba(28,26,22,.18)',
    },
    dividerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      marginTop: verticalScale(14),
      marginBottom: verticalScale(10),
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: 'rgba(28,26,22,.1)',
    },
    dividerText: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(12),
      color: colors.red,
      transform: [{ rotate: '-1deg' }],
    },
    chapterList: {
      flexDirection: 'column',
      gap: verticalScale(7),
    },
    chapterRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(11),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.1)',
      borderRadius: scale(12),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(14),
    },
    chapterRowSelected: {
      backgroundColor: '#FCF4E0',
      borderWidth: scale(1.6),
      borderColor: colors.marigold,
      shadowColor: colors.marigold,
      shadowOffset: { width: 0, height: verticalScale(3) },
      shadowOpacity: 0.3,
      shadowRadius: scale(5),
      elevation: 2,
    },
    chapterTitle: {
      flex: 1,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    chapterTitleSelected: {
      fontFamily: 'AnekLatin_700Bold',
    },
    chapterCheck: {
      width: scale(22),
      height: scale(22),
      flexShrink: 0,
      borderRadius: scale(11),
      backgroundColor: colors.marigold,
      alignItems: 'center',
      justifyContent: 'center',
    },
    weakTag: {
      flexShrink: 0,
      backgroundColor: 'rgba(221,68,51,.08)',
      borderWidth: 1,
      borderColor: 'rgba(221,68,51,.3)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(2),
      paddingHorizontal: scale(8),
    },
    weakTagText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      color: '#C53A2B',
    },
    applyButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: verticalScale(50),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      marginTop: verticalScale(16),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(6) },
      shadowOpacity: 0.3,
      shadowRadius: scale(10),
      elevation: 6,
    },
    applyButtonText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      color: colors.paper,
    },
  });
}

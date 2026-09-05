import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { PracticeTabsHeader } from '@/components/practice-tabs-header';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

export default function MockReadyScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

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
              <Text style={styles.title}>You&apos;re ready</Text>
            </View>
          </View>

          <View style={styles.dronaCallCard}>
            <Text style={styles.dronaCallOverline}>Drona&apos;s call</Text>
            <Text style={styles.dronaCallBody}>
              &quot;Your weak spots are solid now, Aarav. Time to sit a full paper under real
              conditions, no shortcuts. Go get it.&quot;
            </Text>
          </View>

          <View style={styles.readinessRow}>
            <Text style={styles.readinessLabel}>Readiness</Text>
            <Text style={styles.readinessValue}>
              82% <Text style={styles.readinessValueSub}>· unlocked at 80%</Text>
            </Text>
          </View>
          <View style={styles.readinessTrack}>
            <LinearGradient
              colors={['#3FB877', '#1C9B57']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={[styles.readinessFill, { width: '82%' }]}
            />
            <View style={styles.readinessMarker} />
          </View>

          <View style={styles.patternCard}>
            <Text style={styles.patternOverline}>Paper pattern · JEE</Text>
            <View style={styles.patternRow}>
              <Text style={styles.patternRowLabel}>Physics · Chemistry · Maths</Text>
              <Text style={styles.patternRowValue}>45 questions each</Text>
            </View>
            <View style={styles.patternTotalRow}>
              <Text style={styles.patternTotalLabel}>Total</Text>
              <Text style={styles.patternTotalValue}>135 Q · 3 hours</Text>
            </View>
            <View style={styles.patternTagsRow}>
              <View style={styles.patternTag}>
                <Text style={styles.patternTagText}>+4 correct</Text>
              </View>
              <View style={styles.patternTag}>
                <Text style={styles.patternTagText}>−1 wrong</Text>
              </View>
              <View style={styles.patternTag}>
                <Text style={styles.patternTagText}>Pause & resume</Text>
              </View>
            </View>
          </View>

          <Text style={styles.hint}>
            Once you start, the timer runs — but you can pause and resume any time.
          </Text>
        </View>

        <View style={styles.footer}>
          <Pressable style={styles.startButton} onPress={() => router.push('/mock-test')}>
            <Text style={styles.startButtonText}>Start mock test</Text>
            <ArrowRightIcon size={scale(15)} />
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
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    title: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(19),
      letterSpacing: scale(-0.19),
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
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: '#9A6A12',
      marginBottom: verticalScale(5),
    },
    dronaCallBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      lineHeight: scale(21),
      color: colors.ink,
    },
    readinessRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginTop: verticalScale(20),
      marginBottom: verticalScale(8),
    },
    readinessLabel: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    readinessValue: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(14),
      color: '#157A45',
    },
    readinessValueSub: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.faint,
    },
    readinessTrack: {
      position: 'relative',
      height: verticalScale(10),
      borderRadius: scale(99),
      backgroundColor: '#EEE6D4',
    },
    readinessFill: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      borderRadius: scale(99),
    },
    readinessMarker: {
      position: 'absolute',
      left: '80%',
      top: verticalScale(-4),
      bottom: verticalScale(-4),
      width: scale(2),
      borderRadius: scale(2),
      backgroundColor: colors.ink,
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
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(10),
      letterSpacing: scale(1.4),
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
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    patternRowValue: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.faint,
    },
    patternTotalRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: verticalScale(10),
    },
    patternTotalLabel: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(14),
      color: colors.ink,
    },
    patternTotalValue: {
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.slate,
    },
    hint: {
      textAlign: 'center',
      fontFamily: 'AnekLatin_400Regular',
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
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(16),
      color: colors.paper,
    },
  });
}

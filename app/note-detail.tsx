import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { RuledPaper } from '@/components/ruled-paper';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

export default function NoteDetailScreen() {
  const params = useLocalSearchParams<{ title?: string; subject?: string; time?: string }>();
  const title = params.title ?? "Ohm's law & drift velocity";
  const subject = params.subject ?? 'Physics';
  const time = params.time ?? 'saved 2 days ago';

  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Pressable style={styles.backButton} onPress={() => router.back()}>
              <BackArrowIcon size={scale(15)} />
            </Pressable>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>

          <View style={styles.tagRow}>
            <View style={styles.subjectPill}>
              <Text style={styles.subjectPillText}>{subject}</Text>
            </View>
            <View style={styles.chapterPill}>
              <Text style={styles.chapterPillText}>Current Electricity</Text>
            </View>
            <Text style={styles.savedText}>{time}</Text>
          </View>

          <View style={styles.boardCard}>
            <View style={styles.boardRuledClip}>
              <RuledPaper step={verticalScale(28)} color="rgba(28,26,22,.055)" count={30} />
            </View>
            <View style={styles.boardRule} />
            <View style={styles.boardBadge}>
              <Text style={styles.boardBadgeText}>YOUR SAVED BOARD</Text>
            </View>

            <View style={styles.boardContent}>
              <Text style={styles.boardHeading}>current = charge marching together</Text>
              <Text style={styles.bodyText}>
                Free electrons drift slowly —{' '}
                <Text style={styles.bodyTextBold}>mm per second</Text>
                {' '}— but the field moves at light speed.
              </Text>
              <Text style={styles.formulaText}>I = n A v e</Text>
              <Text style={styles.bodyText}>
                n = carriers per volume, A = cross-section, v = drift velocity, e = charge.
              </Text>
              <Text style={styles.bodyText}>
                Ohm&apos;s law is a special case: V = IR holds while{' '}
                <Text style={styles.bodyTextBold}>R stays constant</Text> with temperature.
              </Text>
              <Text style={styles.boardTagline}>thin wire, same current → faster drift ✓</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Pressable
            style={styles.ctaButton}
            onPress={() =>
              router.push({
                pathname: '/entering-classroom',
                params: { chapterTitle: title },
              })
            }>
            <Text style={styles.ctaButtonText}>Talk to Drona about this →</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

function BackArrowIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M15 6l-6 6 6 6"
        stroke={colors.ink}
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
      minHeight: 0,
      paddingTop: verticalScale(8),
      paddingHorizontal: scale(20),
    },
    headerRow: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
    },
    backButton: {
      width: scale(34),
      height: scale(34),
      flexShrink: 0,
      borderRadius: scale(17),
      borderWidth: scale(1.4),
      borderColor: colors.inputBorder,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      flex: 1,
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(17),
      letterSpacing: scale(-0.17),
      color: colors.ink,
    },
    tagRow: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: scale(7),
      marginTop: verticalScale(10),
    },
    subjectPill: {
      backgroundColor: '#FCF4E0',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.4)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(4),
      paddingHorizontal: scale(11),
    },
    subjectPillText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      color: colors.amberText,
    },
    chapterPill: {
      borderWidth: 1,
      borderColor: colors.hairline,
      borderRadius: scale(99),
      paddingVertical: verticalScale(4),
      paddingHorizontal: scale(11),
    },
    chapterPillText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(10),
      color: colors.slate,
    },
    savedText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    boardCard: {
      flex: 1,
      minHeight: 0,
      position: 'relative',
      backgroundColor: '#fff',
      borderWidth: scale(1.5),
      borderColor: colors.ink,
      borderRadius: scale(16),
      paddingTop: verticalScale(24),
      paddingRight: scale(16),
      paddingBottom: verticalScale(16),
      paddingLeft: scale(40),
      marginTop: verticalScale(16),
      overflow: 'visible',
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(7.3) },
      shadowOpacity: 0.18,
      shadowRadius: scale(16),
      elevation: 4,
    },
    boardRuledClip: {
      ...StyleSheet.absoluteFillObject,
      borderRadius: scale(14.5),
      overflow: 'hidden',
    },
    boardRule: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: scale(26),
      width: scale(1.4),
      backgroundColor: 'rgba(221,68,51,.35)',
    },
    boardBadge: {
      position: 'absolute',
      top: verticalScale(-11),
      left: scale(14),
      backgroundColor: colors.marigold,
      borderWidth: scale(1.5),
      borderColor: colors.ink,
      borderRadius: scale(6),
      paddingVertical: verticalScale(2),
      paddingHorizontal: scale(8),
    },
    boardBadgeText: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(1.08),
      color: colors.ink,
    },
    boardContent: {
      height: '100%',
      overflow: 'hidden',
    },
    boardHeading: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(16),
      color: colors.red,
      marginBottom: verticalScale(12),
      transform: [{ rotate: '-0.4deg' }],
    },
    bodyText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      lineHeight: scale(23.1),
      color: colors.slate,
      marginBottom: verticalScale(9),
    },
    bodyTextBold: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
    formulaText: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(15),
      color: colors.ink,
      marginBottom: verticalScale(9),
    },
    boardTagline: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(14),
      color: colors.success,
    },
    footer: {
      flexShrink: 0,
      paddingTop: verticalScale(14),
      paddingBottom: verticalScale(12),
      paddingHorizontal: scale(24),
    },
    ctaButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(9),
      width: '100%',
      height: verticalScale(50),
      borderRadius: scale(99),
      borderWidth: scale(1.4),
      borderColor: 'rgba(28,26,22,.16)',
      backgroundColor: '#fff',
    },
    ctaButtonText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      color: colors.ink,
    },
  });
}

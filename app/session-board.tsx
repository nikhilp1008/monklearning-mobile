import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { RuledPaper } from '@/components/ruled-paper';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

export default function SessionBoardScreen() {
  const params = useLocalSearchParams<{
    title?: string;
    subject?: string;
    chapter?: string;
    time?: string;
  }>();
  const title = params.title ?? 'Rotational Motion · torque';
  const subject = params.subject ?? 'Physics';
  const chapter = params.chapter ?? 'Rotational Motion';
  const time = params.time ?? 'class held yesterday · 24 min';

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
            <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail">
              {title}
            </Text>
          </View>

          <View style={styles.tagRow}>
            <View style={styles.subjectPill}>
              <Text style={styles.subjectPillText}>{subject}</Text>
            </View>
            <View style={styles.chapterPill}>
              <Text style={styles.chapterPillText}>{chapter}</Text>
            </View>
            <Text style={styles.timeText}>{time}</Text>
          </View>

          <View style={styles.amberCard}>
            <View style={styles.amberIconChip}>
              <ClockIcon size={scale(17)} />
            </View>
            <View style={styles.amberTextBlock}>
              <Text style={styles.amberTitle}>This class deletes in 6 days.</Text>
              <Text style={styles.amberDesc}>Save it to your notes and it stays forever.</Text>
            </View>
          </View>

          <View style={styles.boardCard}>
            <View style={styles.boardRuledClip}>
              <RuledPaper step={verticalScale(27)} color="rgba(28,26,22,.055)" count={22} />
            </View>
            <View style={styles.boardRule} />
            <View style={styles.boardTag}>
              <Text style={styles.boardTagText}>SESSION BOARD</Text>
            </View>
            <View style={styles.boardContent}>
              <Text style={styles.boardHeading}>torque on a hinged rod</Text>
              <Text style={styles.boardParagraph}>
                A force applied far from the hinge turns the rod more easily. Only the{' '}
                <Text style={styles.boardParagraphBold}>perpendicular part</Text> of the force
                does the turning.
              </Text>
              <Text style={styles.boardFormula}>τ = r F sin θ</Text>
              <Text style={styles.boardParagraph}>
                Maximum torque: push at the far end, at 90° to the rod.
              </Text>
              <Text style={styles.boardTagline}>
                push at the far end, perpendicular → maximum turn ✓
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Pressable style={styles.ctaButton} onPress={() => router.push('/library')}>
            <BookmarkIcon size={scale(15)} />
            <Text style={styles.ctaButtonText}>Save to notes</Text>
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

function ClockIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Circle cx={12} cy={12} r={9} stroke={colors.amberText} strokeWidth={1.9} />
      <Path
        d="M12 7v5l3.5 2"
        stroke={colors.amberText}
        strokeWidth={1.9}
        strokeLinecap="round"
      />
    </Svg>
  );
}

function BookmarkIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M6 4h12v16l-6-3-6 3z"
        stroke={colors.paper}
        strokeWidth={1.8}
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
      flexDirection: 'column',
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
      minWidth: 0,
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(16),
      letterSpacing: scale(-0.16),
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
    timeText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    amberCard: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.45)',
      borderRadius: scale(14),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(14),
      marginTop: verticalScale(12),
      shadowColor: colors.marigold,
      shadowOffset: { width: 0, height: verticalScale(1.7) },
      shadowOpacity: 0.22,
      shadowRadius: scale(4),
      elevation: 2,
    },
    amberIconChip: {
      width: scale(36),
      height: scale(36),
      flexShrink: 0,
      borderRadius: scale(10),
      backgroundColor: '#FCF4E0',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.4)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    amberTextBlock: {
      flex: 1,
      minWidth: 0,
    },
    amberTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: colors.ink,
    },
    amberDesc: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(11),
      lineHeight: scale(15.4),
      color: colors.slate,
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
      marginTop: verticalScale(14),
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
    boardTag: {
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
    boardTagText: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(1.08),
      color: colors.ink,
    },
    boardContent: {
      flex: 1,
      overflow: 'hidden',
    },
    boardHeading: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(16),
      color: colors.red,
      marginBottom: verticalScale(12),
      transform: [{ rotate: '-0.4deg' }],
    },
    boardParagraph: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      lineHeight: scale(23.1),
      color: colors.slate,
      marginBottom: verticalScale(9),
    },
    boardParagraphBold: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
    boardFormula: {
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
      paddingHorizontal: scale(24),
      paddingBottom: verticalScale(12),
    },
    ctaButton: {
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
    ctaButtonText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(16),
      color: colors.paper,
    },
  });
}

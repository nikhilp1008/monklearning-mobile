import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { CheckIcon } from '@/components/check-icon';
import { ProtractorMark } from '@/components/protractor-mark';
import { RuledPaper } from '@/components/ruled-paper';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

const COVERED = [
  'torque = r F sin θ, direction by right hand',
  'far from hinge, perpendicular push wins',
  'hinged rod: τ depends on where you push',
];

export default function SessionSummaryScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.content}>
          <View style={styles.completeBadge}>
            <CheckIcon size={scale(11)} color="#157A45" />
            <Text style={styles.completeBadgeText}>Class complete</Text>
          </View>

          <Text style={styles.heading}>Class dismissed.</Text>
          <Text style={styles.hinglishSub}>
            achha padha aaj — here&apos;s what we covered.
          </Text>

          <View style={styles.chapterCard}>
            <View style={styles.chapterIconChip}>
              <ProtractorMark size={scale(20)} simplified />
            </View>
            <View style={styles.chapterTextBlock}>
              <Text style={styles.chapterOverline}>Chapter</Text>
              <Text style={styles.chapterTitle}>Rotational Motion — torque</Text>
              <Text style={styles.chapterMeta}>taught by Drona, on the board</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statOverline}>Time</Text>
              <Text style={styles.statValue}>24 min</Text>
              <Text style={styles.statCaption}>of live class</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statOverline}>Answered</Text>
              <Text style={styles.statValue}>3 / 4</Text>
              <Text style={styles.statCaptionGreen}>sharp today</Text>
            </View>
          </View>

          <View style={styles.coveredCard}>
            <View style={styles.coveredRuledClip}>
              <RuledPaper step={verticalScale(27)} count={10} />
            </View>
            <View style={styles.coveredRule} />
            <View style={styles.coveredBadge}>
              <Text style={styles.coveredBadgeText}>WHAT WE COVERED</Text>
            </View>
            <View style={styles.coveredList}>
              {COVERED.map((line) => (
                <View key={line} style={styles.coveredRow}>
                  <View style={styles.coveredCheck}>
                    <CheckIcon size={scale(10)} color="#157A45" />
                  </View>
                  <Text style={styles.coveredText}>{line}</Text>
                </View>
              ))}
            </View>
          </View>

          <Text style={styles.backupNote}>
            The full board is backed up in <Text style={styles.backupNoteBold}>Recent sessions</Text> for
            7 days — save it as a note to keep it forever.
          </Text>
        </View>

        <View style={styles.footer}>
          <Pressable style={styles.ctaButton}>
            <BookmarkIcon size={scale(15)} />
            <Text style={styles.ctaButtonText}>Save board to notes</Text>
          </Pressable>
          <Pressable onPress={() => router.dismissTo('/')}>
            <Text style={styles.dashboardLink}>Go to dashboard</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
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
      paddingTop: verticalScale(18),
      paddingHorizontal: scale(20),
      alignItems: 'center',
    },
    completeBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(7),
      backgroundColor: 'rgba(28,155,87,.08)',
      borderWidth: 1,
      borderColor: 'rgba(28,155,87,.3)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(14),
    },
    completeBadgeText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      letterSpacing: scale(1.1),
      textTransform: 'uppercase',
      color: '#157A45',
    },
    heading: {
      fontFamily: 'AnekLatin_500Medium',
      fontSize: scale(30),
      letterSpacing: scale(-0.75),
      color: colors.ink,
      marginTop: verticalScale(14),
      textAlign: 'center',
    },
    hinglishSub: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(15),
      color: colors.red,
      marginTop: verticalScale(6),
      transform: [{ rotate: '-0.4deg' }],
      textAlign: 'center',
    },
    chapterCard: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
      gap: scale(12),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.08)',
      borderRadius: scale(15),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(16),
      marginTop: verticalScale(22),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1.5) },
      shadowOpacity: 0.05,
      shadowRadius: scale(2),
      elevation: 1,
    },
    chapterIconChip: {
      width: scale(38),
      height: scale(38),
      flexShrink: 0,
      borderRadius: scale(11),
      backgroundColor: colors.segmentTrack,
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.08)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    chapterTextBlock: {
      flex: 1,
      minWidth: 0,
    },
    chapterOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(1.26),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    chapterTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(15),
      letterSpacing: scale(-0.15),
      color: colors.ink,
      marginTop: verticalScale(2),
    },
    chapterMeta: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    statsRow: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      gap: scale(10),
      marginTop: verticalScale(10),
    },
    statCard: {
      flex: 1,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.08)',
      borderRadius: scale(15),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(16),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1.5) },
      shadowOpacity: 0.05,
      shadowRadius: scale(2),
      elevation: 1,
    },
    statOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(1.26),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    statValue: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(24),
      letterSpacing: scale(-0.72),
      color: colors.ink,
      marginTop: verticalScale(4),
    },
    statCaption: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    statCaptionGreen: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: '#157A45',
    },
    coveredCard: {
      position: 'relative',
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderWidth: scale(1.5),
      borderColor: colors.ink,
      borderRadius: scale(16),
      paddingTop: verticalScale(22),
      paddingRight: scale(18),
      paddingBottom: verticalScale(18),
      paddingLeft: scale(40),
      marginTop: verticalScale(14),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(6) },
      shadowOpacity: 0.2,
      shadowRadius: scale(10),
      elevation: 4,
    },
    coveredRuledClip: {
      ...StyleSheet.absoluteFillObject,
      borderRadius: scale(14.5),
      overflow: 'hidden',
    },
    coveredRule: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: scale(26),
      width: scale(1.4),
      backgroundColor: 'rgba(221,68,51,.35)',
    },
    coveredBadge: {
      position: 'absolute',
      top: verticalScale(-10),
      left: scale(14),
      backgroundColor: colors.marigold,
      borderWidth: scale(1.5),
      borderColor: colors.ink,
      borderRadius: scale(6),
      paddingVertical: verticalScale(2),
      paddingHorizontal: scale(8),
    },
    coveredBadgeText: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(1.08),
      color: colors.ink,
    },
    coveredList: {
      flexDirection: 'column',
      gap: verticalScale(10),
    },
    coveredRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
    },
    coveredCheck: {
      width: scale(18),
      height: scale(18),
      flexShrink: 0,
      borderRadius: scale(9),
      backgroundColor: 'rgba(28,155,87,.1)',
      borderWidth: 1,
      borderColor: 'rgba(28,155,87,.35)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    coveredText: {
      flex: 1,
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(14),
      color: colors.ink,
    },
    backupNote: {
      alignSelf: 'stretch',
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(12),
      lineHeight: scale(18),
      color: colors.slate,
      marginTop: verticalScale(14),
    },
    backupNoteBold: {
      fontFamily: 'AnekLatin_700Bold',
    },
    footer: {
      flexShrink: 0,
      paddingHorizontal: scale(24),
      paddingTop: verticalScale(14),
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
    dashboardLink: {
      textAlign: 'center',
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.slate,
      paddingTop: verticalScale(13),
      paddingBottom: verticalScale(2),
    },
  });
}

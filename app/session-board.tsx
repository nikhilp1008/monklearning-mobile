import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { RuledPaper } from '@/components/ruled-paper';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

// No real per-session content or a "save this session" action reaches this
// screen yet — there is no backend endpoint to list a student's past Drona
// sessions (confirmed against the live API's full route table), and the
// live-classroom -> session-summary end-of-class flow doesn't currently
// carry a session_id this far either. This screen is visual-only until one
// of those two gaps closes; see PROGRESS.md for the exact follow-up.
export default function SessionBoardScreen() {
  const params = useLocalSearchParams<{
    title?: string;
    subject?: string;
    chapter?: string;
    time?: string;
  }>();
  const title = params.title ?? 'this session';
  const subject = params.subject ?? '';
  const chapter = params.chapter ?? '';
  const time = params.time ?? '';

  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentInner}
          showsVerticalScrollIndicator={false}>
          <View style={styles.headerRow}>
            <Pressable style={styles.backButton} onPress={() => router.back()}>
              <BackArrowIcon size={scale(15)} />
            </Pressable>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {title}
            </Text>
          </View>

          <View style={styles.tagsRow}>
            {!!subject && (
              <View style={styles.subjectPill}>
                <Text style={styles.subjectPillText}>{subject}</Text>
              </View>
            )}
            {!!chapter && chapter !== title && (
              <View style={styles.chapterPill}>
                <Text style={styles.chapterPillText}>{chapter}</Text>
              </View>
            )}
            {!!time && <Text style={styles.timeText}>{time}</Text>}
          </View>

          <View style={styles.amberRow}>
            <ClockIcon size={scale(14)} />
            <Text style={styles.amberText}>
              Classes stay here for a few days, then quietly expire — save one to Notes to keep it.
            </Text>
          </View>

          <View style={styles.boardCard}>
            <RuledPaper step={verticalScale(26)} color="rgba(28,26,22,.045)" count={40} />
            <Text style={styles.placeholderText}>
              This class&apos;s board will appear here once it&apos;s saved.
            </Text>
          </View>
        </ScrollView>

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
      <Path d="M12 7v5l3.5 2" stroke={colors.amberText} strokeWidth={1.9} strokeLinecap="round" />
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
    },
    contentInner: {
      paddingTop: verticalScale(8),
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(20),
    },
    headerRow: {
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
    title: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(17),
      letterSpacing: scale(-0.17),
      color: colors.ink,
    },
    tagsRow: {
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
    amberRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: scale(8),
      marginTop: verticalScale(14),
    },
    amberText: {
      flex: 1,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(12),
      lineHeight: scale(17),
      color: colors.slate,
    },
    boardCard: {
      position: 'relative',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.08)',
      borderRadius: scale(16),
      padding: scale(18),
      marginTop: verticalScale(16),
      overflow: 'hidden',
      minHeight: verticalScale(200),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(1.5) },
      shadowOpacity: 0.05,
      shadowRadius: scale(2),
      elevation: 1,
    },
    placeholderText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      color: colors.faint,
    },
    footer: {
      flexShrink: 0,
      paddingTop: verticalScale(12),
      paddingHorizontal: scale(24),
      paddingBottom: verticalScale(12),
    },
    ctaButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(9),
      width: '100%',
      height: verticalScale(50),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(5) },
      shadowOpacity: 0.25,
      shadowRadius: scale(8),
      elevation: 4,
    },
    ctaButtonText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      color: colors.paper,
    },
  });
}

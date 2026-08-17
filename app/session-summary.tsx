import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { usePortraitLock } from '@/hooks/use-landscape-lock';

import { CheckIcon } from '@/components/check-icon';
import { ProtractorMark } from '@/components/protractor-mark';
import { RuledPaper } from '@/components/ruled-paper';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { saveNote } from '@/lib/notes';

type SaveState = 'idle' | 'saving' | 'saved' | 'error';

export default function SessionSummaryScreen() {
  // This screen is reached straight from the landscape classroom, so it asks
  // for portrait itself rather than relying on the classroom to restore it on
  // the way out — that restore was timer-based, and losing the race is what
  // made this screen appear in landscape for a moment before snapping.
  const isPortrait = usePortraitLock();
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const params = useLocalSearchParams<{
    sessionId?: string;
    chapterTitle?: string;
    summaryPoints?: string;
    mistakesCount?: string;
    questionsAnswered?: string;
    durationMinutes?: string;
  }>();

  const chapterTitle = params.chapterTitle || 'this class';
  const durationMinutes = Number(params.durationMinutes) || 0;
  const questionsAnswered = Number(params.questionsAnswered) || 0;
  const mistakesCount = Number(params.mistakesCount) || 0;
  const correctCount = Math.max(0, questionsAnswered - mistakesCount);
  const covered = useMemo(() => {
    if (!params.summaryPoints) return [];
    try {
      const parsed = JSON.parse(params.summaryPoints);
      return Array.isArray(parsed) ? parsed.filter((p): p is string => typeof p === 'string') : [];
    } catch {
      return [];
    }
  }, [params.summaryPoints]);

  const [saveState, setSaveState] = useState<SaveState>('idle');
  const [saveError, setSaveError] = useState<string | null>(null);
  const savedNoteId = useRef<string | null>(null);

  const handleSave = async () => {
    if (!params.sessionId || saveState === 'saving') return;
    if (saveState === 'saved') {
      if (savedNoteId.current) router.push({ pathname: '/note-detail', params: { id: savedNoteId.current } });
      return;
    }
    setSaveState('saving');
    setSaveError(null);
    try {
      const note = await saveNote(params.sessionId);
      savedNoteId.current = note.id;
      setSaveState('saved');
    } catch (err) {
      setSaveState('error');
      setSaveError(err instanceof Error ? err.message : 'Could not save this class.');
    }
  };

  const saveLabel =
    saveState === 'saving'
      ? 'Saving…'
      : saveState === 'saved'
        ? 'Saved — view in notes'
        : saveState === 'error'
          ? 'Couldn’t save — tap to retry'
          : 'Save board to notes';

  // Hold until the device is back in portrait, so this never flashes as a
  // portrait layout stretched across a landscape window.
  if (!isPortrait) {
    return <View style={styles.rotateHold} />;
  }

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
              <Text style={styles.chapterTitle} numberOfLines={2}>{chapterTitle}</Text>
              <Text style={styles.chapterMeta}>taught by Drona, on the board</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statOverline}>Time</Text>
              <Text style={styles.statValue}>{durationMinutes} min</Text>
              <Text style={styles.statCaption}>of live class</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statOverline}>Answered</Text>
              <Text style={styles.statValue}>{questionsAnswered}</Text>
              {questionsAnswered > 0 ? (
                <Text style={styles.statCaptionGreen}>{correctCount} correct</Text>
              ) : (
                <Text style={styles.statCaption}>no questions this time</Text>
              )}
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
              {covered.length > 0 ? (
                covered.map((line) => (
                  <View key={line} style={styles.coveredRow}>
                    <View style={styles.coveredCheck}>
                      <CheckIcon size={scale(10)} color="#157A45" />
                    </View>
                    <Text style={styles.coveredText}>{line}</Text>
                  </View>
                ))
              ) : (
                <Text style={styles.coveredText}>
                  Drona didn&apos;t leave a summary for this class.
                </Text>
              )}
            </View>
          </View>

          <Text style={styles.backupNote}>
            The full board is backed up in <Text style={styles.backupNoteBold}>Recent sessions</Text> for
            7 days — save it as a note to keep it forever.
          </Text>
          {saveState === 'error' && saveError && (
            <Text style={styles.saveErrorText}>{saveError}</Text>
          )}
        </View>

        <View style={styles.footer}>
          <Pressable
            style={[
              styles.ctaButton,
              (!params.sessionId || saveState === 'saving') && styles.ctaButtonDisabled,
            ]}
            disabled={!params.sessionId || saveState === 'saving'}
            onPress={handleSave}>
            {saveState === 'saved' ? (
              <CheckIcon size={scale(15)} color={colors.paper} />
            ) : (
              <BookmarkIcon size={scale(15)} />
            )}
            <Text style={styles.ctaButtonText}>
              {params.sessionId ? saveLabel : 'Nothing to save from this class'}
            </Text>
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
    rotateHold: {
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
    saveErrorText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.red,
      marginTop: verticalScale(8),
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
    ctaButtonDisabled: {
      opacity: 0.5,
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

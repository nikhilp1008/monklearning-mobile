import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { RuledPaper } from '@/components/ruled-paper';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { REPORT_REASONS, sendReport as postReport, type ReportSurface } from '@/lib/reports';

// One list, shared with live-classroom.tsx via lib/reports.ts. They used to be
// two identical literals in two files, which is how a vocabulary drifts into
// reasons that almost group on the dashboard.
const REASONS = [...REPORT_REASONS];

export default function ReportSheetScreen() {
  const params = useLocalSearchParams<{
    context?: string; quote?: string; doubtId?: string;
    /** Which part of the app is reporting. Defaults to 'snap' so the two
     *  original callers keep working without passing anything new. */
    surface?: ReportSurface;
    sessionId?: string; questionId?: string;
    subject?: string; chapter?: string;
  }>();
  /**
   * THE QUOTE IS THE QUESTION BEING REPORTED, and until now it was neither.
   *
   * These two had hardcoded fallbacks left over from a design where the sheet
   * belonged to a live class — `'Rotational Motion'` and a sentence about
   * torque. Both callers pass only `doubtId`, so the fallbacks always won:
   * every student reporting anything, on any subject, was shown somebody
   * else's sentence about a door hinge and told it came "from this class".
   *
   * What was SENT was always right — `reportDoubt` takes the real id — so the
   * reports themselves are fine. But a student who reads a quote that is not
   * their question has every reason to think the report will go against the
   * wrong one, and not send it.
   *
   * No fallbacks now. A missing quote shows no quote, because an empty card is
   * honest and a borrowed one is not.
   */
  const context = params.context?.trim() || null;
  const quote = params.quote?.trim() || null;
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [selectedReason, setSelectedReason] = useState('Wrong answer');
  const [notes, setNotes] = useState('');
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  // Reused from snap-solved.tsx and doubt-detail.tsx (which pass a doubtId)
  // and now from practice.tsx (which passes a questionId). A report needs
  // something to be about, but WHICH something depends on the surface.
  const surface: ReportSurface = params.surface || 'snap';
  const target = params.doubtId || params.questionId || params.sessionId;
  const canSubmit = !!target && !sending;

  async function sendReport() {
    if (!target || sending) return;
    setSending(true);
    setSendError(null);
    try {
      // The reason travels as a REASON now, not as a prefix on the comment.
      // It used to be `[reason, notes].join(': ')`, which meant the one
      // question worth asking — "which of the five, and where?" — needed a
      // LIKE over every row and broke the moment a student's own notes began
      // with the word "Wrong".
      await postReport({
        surface,
        reason: selectedReason || null,
        comment: notes.trim() || null,
        doubtId: params.doubtId || null,
        sessionId: params.sessionId || null,
        questionId: params.questionId || null,
        subject: params.subject || null,
        chapter: params.chapter || null,
        quote,
      });
      router.back();
    } catch (err) {
      setSendError(err instanceof Error ? err.message : 'Could not send that report. Try again.');
    } finally {
      setSending(false);
    }
  }

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <Pressable style={styles.scrim} onPress={() => router.back()} />
      <View style={styles.sheet}>
        <SafeAreaView style={styles.flex} edges={['bottom']}>
          <View style={styles.handle} />

          <View style={styles.headerRow}>
            <View style={styles.iconChip}>
              <FlagIcon size={scale(14)} color="#C53A2B" />
            </View>
            <Text style={styles.title}>Report a mistake</Text>
            <Pressable style={styles.closeButton} onPress={() => router.back()}>
              <Text style={styles.closeGlyph}>✕</Text>
            </Pressable>
          </View>

          {/* Only when there is something real to show. "From this class" is
              gone with it: the live classroom reports through its own drawer,
              so this sheet is only ever reached from a doubt and was never
              looking at a class. */}
          {quote && (
            <View style={styles.quoteCard}>
              <RuledPaper step={verticalScale(23)} color="rgba(28,26,22,.06)" count={20} />
              <View style={styles.quoteRule} />
              <Text style={styles.quoteLabel}>
                {context ? `The question · ${context}` : 'The question'}
              </Text>
              <Text style={styles.quoteText} numberOfLines={4}>
                &quot;{quote}&quot;
              </Text>
            </View>
          )}

          <Text style={styles.whatsWrong}>What&apos;s wrong?</Text>
          <View style={styles.chipsRow}>
            {REASONS.map((reason) => {
              const selected = selectedReason === reason;
              return (
                <Pressable
                  key={reason}
                  style={[styles.chip, selected && styles.chipSelected]}
                  onPress={() => setSelectedReason(reason)}>
                  <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
                    {reason}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <TextInput
            style={styles.notesInput}
            value={notes}
            onChangeText={setNotes}
            placeholder="Anything else Drona's team should know? (optional)"
            placeholderTextColor={colors.faint}
            multiline
          />

          {sendError && <Text style={styles.sendErrorText}>{sendError}</Text>}

          <View style={styles.footerRow}>
            {/* Was "Reporting won't interrupt your class." There is no class
                to interrupt from here, and the reassurance that matters is
                that the solution stays where it is. */}
            <Text style={styles.footerHint}>Your solution stays saved.</Text>
            <Pressable
              style={[styles.sendButton, !canSubmit && styles.sendButtonDisabled]}
              disabled={!canSubmit}
              onPress={sendReport}>
              {sending ? (
                <ActivityIndicator color={colors.paper} size="small" />
              ) : (
                <Text style={styles.sendButtonText}>Send report</Text>
              )}
            </Pressable>
          </View>

        </SafeAreaView>
      </View>
    </View>
  );
}

function FlagIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M5 21V4" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
      <Path
        d="M5 4c4.2-2 8.8 2 14 0v10c-5.2 2-9.8-2-14 0"
        stroke={color}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
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
      gap: scale(10),
    },
    iconChip: {
      width: scale(32),
      height: scale(32),
      flexShrink: 0,
      borderRadius: scale(10),
      backgroundColor: 'rgba(221,68,51,.07)',
      borderWidth: 1,
      borderColor: 'rgba(221,68,51,.25)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      flex: 1,
      fontFamily: 'Onest_700Bold',
      fontSize: scale(17),
      color: colors.ink,
    },
    closeButton: {
      width: scale(30),
      height: scale(30),
      borderRadius: scale(15),
      borderWidth: scale(1.4),
      borderColor: colors.inputBorder,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeGlyph: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: colors.slate,
    },
    quoteCard: {
      position: 'relative',
      backgroundColor: '#FFFEFB',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.1)',
      borderRadius: scale(12),
      paddingTop: verticalScale(11),
      paddingRight: scale(13),
      paddingBottom: verticalScale(10),
      paddingLeft: scale(30),
      marginTop: verticalScale(12),
      overflow: 'hidden',
    },
    quoteRule: {
      position: 'absolute',
      top: verticalScale(9),
      bottom: verticalScale(9),
      left: scale(20),
      width: scale(1.4),
      backgroundColor: 'rgba(221,68,51,.4)',
    },
    quoteLabel: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(8.1),
      letterSpacing: scale(0.68),
      textTransform: 'uppercase',
      color: '#C53A2B',
    },
    quoteText: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12),
      lineHeight: scale(18),
      color: colors.ink,
      marginTop: verticalScale(4),
    },
    whatsWrong: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.0),
      letterSpacing: scale(1.05),
      textTransform: 'uppercase',
      color: colors.faint,
      marginTop: verticalScale(14),
      marginBottom: verticalScale(8),
    },
    chipsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(7),
    },
    chip: {
      paddingVertical: verticalScale(9),
      paddingHorizontal: scale(14),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: colors.inputBorder,
      backgroundColor: '#fff',
    },
    chipSelected: {
      borderWidth: 0,
      backgroundColor: colors.ink,
    },
    chipText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    chipTextSelected: {
      fontFamily: 'Onest_700Bold',
      color: colors.paper,
    },
    notesInput: {
      backgroundColor: '#fff',
      borderWidth: scale(1.4),
      borderColor: colors.inputBorder,
      borderRadius: scale(14),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(14),
      marginTop: verticalScale(14),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      color: colors.ink,
      minHeight: verticalScale(44),
      textAlignVertical: 'top',
    },
    sendErrorText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(12),
      color: colors.red,
      marginTop: verticalScale(8),
    },
    footerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      marginTop: verticalScale(14),
    },
    footerHint: {
      flex: 1,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(11),
      lineHeight: scale(15.4),
      color: colors.faint,
    },
    sendButton: {
      flexShrink: 0,
      alignItems: 'center',
      justifyContent: 'center',
      height: verticalScale(46),
      paddingHorizontal: scale(24),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(5) },
      shadowOpacity: 0.28,
      shadowRadius: scale(9),
      elevation: 4,
    },
    sendButtonDisabled: {
      opacity: 0.5,
    },
    sendButtonText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(14),
      color: colors.paper,
    },
  });
}

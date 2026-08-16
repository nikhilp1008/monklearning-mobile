import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { CheckIcon } from '@/components/check-icon';
import { RuledPaper } from '@/components/ruled-paper';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { Remedy, SnappedQuestion, clearPendingSnapResult, peekPendingSnapResult } from '@/lib/doubts';

const REMEDY_COPY: Record<Remedy, string> = {
  retake: 'Try snapping it again — steadier light or a closer frame usually fixes this.',
  not_photo: 'This looks like it needs a figure or diagram Drona can’t read from text alone.',
  our_side: 'This one was on our end, not your photo. Give it another try in a moment.',
};

function questionWorking(q: SnappedQuestion): { steps: SnappedQuestion['steps']; fallback: string | null } {
  if (q.steps && q.steps.length > 0) return { steps: q.steps, fallback: null };
  return { steps: null, fallback: q.explanation ?? null };
}

export default function SnapSolvedScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [index, setIndex] = useState(0);

  // Read once via a lazy initializer (safe under StrictMode double-invoke —
  // see clearPendingSnapResult's comment), then clear it so back-navigating
  // here again shows the empty state instead of stale data.
  const [response] = useState(() => peekPendingSnapResult());
  useEffect(() => {
    clearPendingSnapResult();
  }, []);

  if (!response || response.questions.length === 0) {
    return (
      <View style={styles.screen}>
        <StatusBar style="dark" />
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>Nothing to show</Text>
            <Text style={styles.emptyBody}>Snap a doubt first and it&apos;ll land here once solved.</Text>
            <Pressable style={styles.ctaButton} onPress={() => router.replace('/snap-capture')}>
              <Text style={styles.ctaButtonText}>Snap a doubt</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  const question = response.questions[index];
  const isSolved = question.status === 'solved';
  const topicLine = [question.subject, question.chapter ?? question.concept]
    .filter(Boolean)
    .join(' · ');
  const hasMultiple = response.questions.length > 1;
  const displayText = question.stem ?? question.question_text ?? 'Could not read this question.';
  const { steps, fallback } = questionWorking(question);
  const isMcq = !!question.options?.length && !!question.option_labels?.length;

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.headerRow}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <BackArrowIcon size={scale(15)} />
          </Pressable>
          <Text style={styles.headerTitle}>{hasMultiple ? `Solved (${index + 1}/${response.questions.length})` : 'Solved'}</Text>
          {isSolved ? (
            <View style={styles.readBadge}>
              <View style={styles.readBadgeDot} />
              <Text style={styles.readBadgeText}>Read clearly</Text>
            </View>
          ) : (
            <View style={styles.notReadBadge}>
              <Text style={styles.notReadBadgeText}>Needs a retake</Text>
            </View>
          )}
        </View>

        <ScrollView style={styles.content} contentContainerStyle={styles.contentInner} showsVerticalScrollIndicator={false}>
          {response.note && (
            <View style={styles.noteBanner}>
              <Text style={styles.noteBannerText}>{response.note}</Text>
            </View>
          )}

          <View style={styles.recapCard}>
            <RuledPaper step={verticalScale(23)} color="rgba(28,26,22,.06)" count={12} />
            <View style={styles.recapRule} />
            <View style={styles.recapTopRow}>
              <Text style={styles.recapOverline}>
                Q{question.question_index}
                {topicLine ? ` · ${topicLine}` : ''}
              </Text>
              <Pressable onPress={() => router.replace('/snap-capture')}>
                <Text style={styles.recapRetake}>↺ Retake</Text>
              </Pressable>
            </View>
            <Text style={styles.recapBody}>{displayText}</Text>
          </View>

          {isSolved ? (
            <View style={styles.explainCard}>
              <View style={styles.explainRuledClip}>
                <RuledPaper step={verticalScale(27)} color="rgba(28,26,22,.055)" count={16} />
              </View>
              <View style={styles.explainRule} />
              <View style={styles.explainBadge}>
                <Text style={styles.explainBadgeText}>DRONA EXPLAINS</Text>
              </View>

              {isMcq && (
                <View style={styles.optionsList}>
                  {question.option_labels!.map((label, i) => (
                    <Text key={label} style={styles.optionRow}>
                      <Text style={styles.optionLabel}>{label}. </Text>
                      {question.options?.[i] ?? ''}
                    </Text>
                  ))}
                </View>
              )}

              {steps
                ? steps.map((step) => (
                    <Text key={step.n} style={styles.explainText}>
                      {step.text}
                    </Text>
                  ))
                : fallback && <Text style={styles.explainText}>{fallback}</Text>}

              {question.answer && (
                <Text style={styles.explainEquation}>
                  {isMcq ? `Answer: ${question.answer}` : question.answer}
                </Text>
              )}
              {question.key_idea && (
                <Text style={styles.explainMechanism}>{question.key_idea}</Text>
              )}
            </View>
          ) : (
            <View style={styles.failureCard}>
              <Text style={styles.failureTitle}>
                {question.status === 'illegible' ? "Couldn't read that clearly" : "Couldn't solve this one"}
              </Text>
              <Text style={styles.failureBody}>
                {question.failure_reason ?? 'Something about this photo tripped Drona up.'}
              </Text>
              {question.remedy && (
                <Text style={styles.failureRemedy}>{REMEDY_COPY[question.remedy]}</Text>
              )}
            </View>
          )}

          {isSolved && (
            <View style={styles.savedBanner}>
              <CheckIcon size={scale(15)} color="#157A45" strokeWidth={2.4} />
              <Text style={styles.savedBannerText}>
                Saved to My doubts — find it in Library any time.
              </Text>
            </View>
          )}

          <View style={styles.bottomRow}>
            <Pressable
              style={styles.reportRow}
              onPress={() =>
                router.push({
                  pathname: '/report-sheet',
                  params: {
                    context: topicLine || 'Snap a doubt',
                    quote: displayText,
                    doubtId: question.id,
                  },
                })
              }>
              <FlagIcon size={scale(12)} color={colors.faint} />
              <Text style={styles.reportText}>Report a mistake</Text>
            </Pressable>
            {hasMultiple && index < response.questions.length - 1 ? (
              <Pressable onPress={() => setIndex(index + 1)}>
                <Text style={styles.nextText}>Next question ↺</Text>
              </Pressable>
            ) : (
              <Pressable onPress={() => router.replace('/snap-capture')}>
                <Text style={styles.nextText}>Snap the next one ↺</Text>
              </Pressable>
            )}
          </View>
        </ScrollView>

        {isSolved && (
          <View style={styles.footer}>
            <Pressable
              style={styles.ctaButton}
              onPress={() =>
                router.push({
                  pathname: '/entering-classroom',
                  params: { chapterTitle: topicLine || 'this topic' },
                })
              }>
              <Text style={styles.ctaButtonText}>Ask a follow-up</Text>
              <MicIcon size={scale(16)} />
            </Pressable>
          </View>
        )}
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

function MicIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M12 3a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V7a4 4 0 0 1 4-4Z"
        stroke={colors.paper}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 11a7 7 0 0 0 14 0M12 18v3"
        stroke={colors.paper}
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
    emptyState: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: scale(30),
      gap: verticalScale(10),
    },
    emptyTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(18),
      color: colors.ink,
    },
    emptyBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      textAlign: 'center',
    },
    headerRow: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingTop: verticalScale(6),
      paddingBottom: verticalScale(10),
      paddingHorizontal: scale(20),
    },
    backButton: {
      width: scale(34),
      height: scale(34),
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
      fontSize: scale(16),
      color: colors.ink,
    },
    readBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
    },
    readBadgeDot: {
      width: scale(6),
      height: scale(6),
      borderRadius: scale(3),
      backgroundColor: '#1C9B57',
    },
    readBadgeText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: '#157A45',
    },
    notReadBadge: {
      backgroundColor: 'rgba(221,68,51,.1)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(4),
      paddingHorizontal: scale(10),
    },
    notReadBadgeText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: colors.red,
    },
    content: {
      flex: 1,
      minHeight: 0,
      paddingHorizontal: scale(20),
    },
    contentInner: {
      paddingBottom: verticalScale(20),
    },
    noteBanner: {
      backgroundColor: '#FCF4E0',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.4)',
      borderRadius: scale(12),
      paddingVertical: verticalScale(9),
      paddingHorizontal: scale(13),
      marginBottom: verticalScale(10),
    },
    noteBannerText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11.5),
      color: '#9A6A12',
      lineHeight: scale(16.5),
    },
    recapCard: {
      position: 'relative',
      backgroundColor: '#FFFEFB',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.1)',
      borderRadius: scale(13),
      paddingTop: verticalScale(13),
      paddingRight: scale(14),
      paddingBottom: verticalScale(12),
      paddingLeft: scale(32),
      overflow: 'hidden',
    },
    recapRule: {
      position: 'absolute',
      top: verticalScale(10),
      bottom: verticalScale(10),
      left: scale(21),
      width: scale(1.4),
      backgroundColor: 'rgba(221,68,51,.4)',
    },
    recapTopRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    recapOverline: {
      flex: 1,
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(0.9),
      textTransform: 'uppercase',
      color: '#C53A2B',
    },
    recapRetake: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: colors.slate,
    },
    recapBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      lineHeight: scale(21),
      color: colors.ink,
      marginTop: verticalScale(5),
    },
    explainCard: {
      position: 'relative',
      backgroundColor: '#fff',
      borderWidth: scale(1.5),
      borderColor: colors.ink,
      borderRadius: scale(16),
      paddingTop: verticalScale(22),
      paddingRight: scale(16),
      paddingBottom: verticalScale(16),
      paddingLeft: scale(38),
      marginTop: verticalScale(16),
      overflow: 'visible',
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(6) },
      shadowOpacity: 0.18,
      shadowRadius: scale(10),
      elevation: 4,
    },
    explainRuledClip: {
      ...StyleSheet.absoluteFillObject,
      borderRadius: scale(14.5),
      overflow: 'hidden',
    },
    explainRule: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: scale(24),
      width: scale(1.4),
      backgroundColor: 'rgba(221,68,51,.35)',
    },
    explainBadge: {
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
    explainBadgeText: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(1.08),
      color: colors.ink,
    },
    optionsList: {
      marginBottom: verticalScale(10),
    },
    optionRow: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(20.5),
      color: colors.slate,
    },
    optionLabel: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
    explainText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      lineHeight: scale(22.4),
      color: colors.slate,
      marginBottom: verticalScale(8),
    },
    explainEquation: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(15),
      color: colors.ink,
      marginBottom: verticalScale(8),
    },
    explainMechanism: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(14),
      color: colors.red,
    },
    failureCard: {
      backgroundColor: 'rgba(221,68,51,.05)',
      borderWidth: scale(1.4),
      borderColor: 'rgba(221,68,51,.35)',
      borderRadius: scale(16),
      padding: scale(16),
      marginTop: verticalScale(16),
    },
    failureTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(15),
      color: colors.red,
    },
    failureBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.slate,
      marginTop: verticalScale(6),
    },
    failureRemedy: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      color: colors.ink,
      marginTop: verticalScale(10),
    },
    savedBanner: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      backgroundColor: 'rgba(28,155,87,.07)',
      borderWidth: 1,
      borderColor: 'rgba(28,155,87,.3)',
      borderRadius: scale(13),
      paddingVertical: verticalScale(11),
      paddingHorizontal: scale(14),
      marginTop: verticalScale(14),
    },
    savedBannerText: {
      flex: 1,
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: '#157A45',
    },
    bottomRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: verticalScale(14),
    },
    reportRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(7),
    },
    reportText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.faint,
    },
    nextText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: colors.slate,
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
      height: verticalScale(52),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(6) },
      shadowOpacity: 0.28,
      shadowRadius: scale(9),
      elevation: 6,
    },
    ctaButtonText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(16),
      color: colors.paper,
    },
  });
}

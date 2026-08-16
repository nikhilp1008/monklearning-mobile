import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { CheckIcon } from '@/components/check-icon';
import { RuledPaper } from '@/components/ruled-paper';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { DoubtDetail, getDoubt } from '@/lib/doubts';

export default function DoubtDetailScreen() {
  const params = useLocalSearchParams<{
    id?: string;
    title?: string;
    subject?: string;
    chapter?: string;
    time?: string;
  }>();

  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [detail, setDetail] = useState<DoubtDetail | null>(null);
  const [loading, setLoading] = useState(!!params.id);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (!params.id) return;
    let cancelled = false;
    setLoading(true);
    setLoadError(null);
    getDoubt(params.id)
      .then((d) => {
        if (!cancelled) setDetail(d);
      })
      .catch((err) => {
        if (!cancelled) setLoadError(err instanceof Error ? err.message : 'Could not load this doubt.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [params.id]);

  // Instant paint from list params, replaced once the real fetch resolves.
  const title = detail?.stem ?? detail?.question_text ?? params.title ?? 'This doubt';
  const subject = detail?.subject ?? params.subject ?? '';
  const chapter = detail?.chapter ?? detail?.concept ?? params.chapter ?? '';
  const time = params.time ?? '';
  // Deliberately not defaulted to true while `detail` is still null — the
  // badge below is gated on `detail && isSolved` so it never shows "Solved"
  // before we actually know that.
  const isSolved = detail?.status === 'solved';
  const steps = detail?.steps && detail.steps.length > 0 ? detail.steps : null;
  const isMcq = !!detail?.options?.length && !!detail?.option_labels?.length;

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
            {detail && isSolved && (
              <View style={styles.solvedBadge}>
                <CheckIcon size={scale(9)} color="#157A45" strokeWidth={3} />
                <Text style={styles.solvedBadgeText}>Solved</Text>
              </View>
            )}
            {detail && !isSolved && (
              <View style={styles.notSolvedBadge}>
                <Text style={styles.notSolvedBadgeText}>Not solved</Text>
              </View>
            )}
            {!!subject && (
              <View style={styles.subjectPill}>
                <Text style={styles.subjectPillText}>{subject}</Text>
              </View>
            )}
            {!!chapter && (
              <View style={styles.chapterPill}>
                <Text style={styles.chapterPillText}>{chapter}</Text>
              </View>
            )}
            {!!time && <Text style={styles.timeText}>{time}</Text>}
          </View>

          {loading ? (
            <View style={styles.loadingBlock}>
              <ActivityIndicator color={colors.ink} />
            </View>
          ) : loadError ? (
            <View style={styles.loadingBlock}>
              <Text style={styles.errorText}>{loadError}</Text>
            </View>
          ) : (
            <>
              <View style={styles.photoCard}>
                <View style={styles.photoHeaderStrip}>
                  <CameraIcon size={scale(13)} />
                  <Text style={styles.photoHeaderText}>Your photo</Text>
                </View>
                {detail?.image_url ? (
                  <Image
                    source={{ uri: detail.image_url }}
                    style={styles.photoImage}
                    contentFit="cover"
                  />
                ) : (
                  <View style={styles.photoArea}>
                    <RuledPaper step={verticalScale(20)} color="rgba(28,26,22,.06)" count={8} />
                    <Text style={styles.photoQuestionText}>{title}</Text>
                  </View>
                )}
              </View>

              {isSolved && detail ? (
                <View style={styles.explainCard}>
                  <View style={styles.explainRuledClip}>
                    <RuledPaper step={verticalScale(27)} color="rgba(28,26,22,.055)" count={16} />
                  </View>
                  <View style={styles.explainRule} />
                  <View style={styles.explainBadge}>
                    <Text style={styles.explainBadgeText}>DRONA&apos;S EXPLANATION</Text>
                  </View>

                  {isMcq && (
                    <View style={styles.optionsList}>
                      {detail.option_labels!.map((label, i) => (
                        <Text key={label} style={styles.optionRow}>
                          <Text style={styles.optionLabel}>{label}. </Text>
                          {detail.options?.[i] ?? ''}
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
                    : detail.explanation && (
                        <Text style={styles.explainText}>{detail.explanation}</Text>
                      )}

                  {detail.answer && (
                    <Text style={styles.explainEquation}>
                      {isMcq ? `Answer: ${detail.answer}` : detail.answer}
                    </Text>
                  )}
                  {detail.key_idea && (
                    <Text style={styles.explainMechanism}>{detail.key_idea}</Text>
                  )}
                </View>
              ) : detail ? (
                <View style={styles.failureCard}>
                  <Text style={styles.failureTitle}>Not solved</Text>
                  <Text style={styles.failureBody}>
                    {detail.failure_reason ?? 'This one couldn’t be solved from the photo.'}
                  </Text>
                </View>
              ) : null}

              <View style={styles.reportRow}>
                <Pressable
                  style={styles.reportButton}
                  onPress={() =>
                    router.push({
                      pathname: '/report-sheet',
                      params: {
                        context: [subject, chapter].filter(Boolean).join(' · '),
                        quote: title,
                        doubtId: params.id ?? '',
                      },
                    })
                  }>
                  <FlagIcon size={scale(12)} color={colors.faint} />
                  <Text style={styles.reportText}>Report a mistake</Text>
                </Pressable>
              </View>
            </>
          )}
        </ScrollView>

        <View style={styles.footer}>
          <Pressable
            style={styles.ctaButton}
            onPress={() =>
              router.push({
                pathname: '/entering-classroom',
                params: { chapterTitle: chapter || subject || 'this topic' },
              })
            }>
            <Text style={styles.ctaButtonText}>Ask a follow-up</Text>
            <MicIcon size={scale(16)} />
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

function CameraIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Rect x={3} y={6} width={18} height={14} rx={3} stroke="#EFEBDD" strokeWidth={1.8} />
      <Circle cx={12} cy={13} r={3.2} stroke="#EFEBDD" strokeWidth={1.8} />
      <Path
        d="M8 6l1.2-2h5.6L16 6"
        stroke="#EFEBDD"
        strokeWidth={1.8}
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
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(16),
      letterSpacing: scale(-0.16),
      color: colors.ink,
    },
    tagsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: scale(7),
      marginTop: verticalScale(10),
    },
    solvedBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(5),
      backgroundColor: 'rgba(28,155,87,.1)',
      borderWidth: 1,
      borderColor: 'rgba(28,155,87,.3)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(4),
      paddingHorizontal: scale(10),
    },
    solvedBadgeText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      color: '#157A45',
    },
    notSolvedBadge: {
      backgroundColor: 'rgba(221,68,51,.1)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(4),
      paddingHorizontal: scale(10),
    },
    notSolvedBadgeText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      color: colors.red,
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
    loadingBlock: {
      paddingTop: verticalScale(50),
      alignItems: 'center',
      justifyContent: 'center',
    },
    errorText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      textAlign: 'center',
      paddingHorizontal: scale(20),
    },
    photoCard: {
      backgroundColor: '#fff',
      borderWidth: scale(1),
      borderColor: 'rgba(28,26,22,.08)',
      borderRadius: scale(14),
      overflow: 'hidden',
      marginTop: verticalScale(14),
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(2) },
      shadowOpacity: 0.12,
      shadowRadius: scale(4),
      elevation: 2,
    },
    photoHeaderStrip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
      backgroundColor: '#16130E',
      paddingVertical: verticalScale(9),
      paddingHorizontal: scale(14),
    },
    photoHeaderText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: '#EFEBDD',
    },
    photoImage: {
      width: '100%',
      aspectRatio: 4 / 3,
      backgroundColor: '#16130E',
    },
    photoArea: {
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#FBF8EF',
      paddingVertical: verticalScale(16),
      paddingHorizontal: scale(16),
    },
    photoQuestionText: {
      fontFamily: 'Georgia',
      color: '#2A2A33',
      fontSize: scale(13),
      lineHeight: scale(20.8),
      transform: [{ rotate: '-1deg' }],
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
    reportRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: verticalScale(12),
    },
    reportButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(7),
    },
    reportText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.faint,
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

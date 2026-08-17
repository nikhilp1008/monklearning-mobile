import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SolutionQuestion, SolutionScreen } from '@/components/solution-screen';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { DoubtDetail, getDoubt } from '@/lib/doubts';
import { latexToText } from '@/lib/latex-text';
import { parseSolutionSteps } from '@/lib/solution-steps';

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
        if (!cancelled) {
          setLoadError(err instanceof Error ? err.message : 'Could not load this doubt.');
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [params.id]);

  // A saved doubt is a single question, so the solution screen renders it with
  // no chip row — same component, same treatment as straight after a snap.
  const questions: SolutionQuestion[] = useMemo(() => {
    if (!detail) return [];
    return [
      {
        id: 'Q1',
        // Run through latexToText like everywhere else: the raw stem carries
        // `$(\mathrm{P} \cup \mathrm{Q})$`, which this screen used to print
        // verbatim at the student.
        text: latexToText(detail.stem ?? detail.question_text ?? params.title ?? 'This doubt'),
        steps: parseSolutionSteps(detail.steps, detail.explanation),
        answer: detail.answer ? latexToText(detail.answer) : null,
        failureNote:
          detail.status === 'solved'
            ? null
            : (detail.failure_reason ?? 'This one couldn’t be solved from the photo.'),
      },
    ];
  }, [detail, params.title]);

  if (loading || loadError || questions.length === 0) {
    return (
      <View style={styles.screen}>
        <StatusBar style="dark" />
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
          <View style={styles.stateBlock}>
            {loading ? (
              <ActivityIndicator color={colors.ink} />
            ) : (
              <Text style={styles.stateText}>{loadError ?? 'Could not load this doubt.'}</Text>
            )}
          </View>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <SolutionScreen
        questions={questions}
        index={0}
        onSelect={() => {}}
        onBack={() => router.back()}
        onFollowUp={() =>
          router.push({
            pathname: '/entering-classroom',
            params: {
              chapterTitle: detail?.chapter ?? detail?.concept ?? 'this doubt',
              initialUtterance: questions[0].text,
            },
          })
        }
        onReport={() =>
          router.push({
            pathname: '/report-sheet',
            params: { doubtId: params.id ?? '' },
          })
        }
      />
    </>
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
    stateBlock: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: scale(28),
      gap: verticalScale(10),
    },
    stateText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      textAlign: 'center',
    },
  });
}

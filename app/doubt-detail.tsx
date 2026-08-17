import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  SolutionQuestion,
  SolutionScreen,
  SolutionScreenSkeleton,
} from '@/components/solution-screen';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { DoubtDetail, getDoubt } from '@/lib/doubts';
import { latexToText } from '@/lib/latex-text';
import { parseSolutionSteps } from '@/lib/solution-steps';

export default function DoubtDetailScreen() {
  const params = useLocalSearchParams<{
    /** Every question on the photo, comma-separated, in reading order. */
    ids?: string;
    id?: string;
    title?: string;
    subject?: string;
    chapter?: string;
    time?: string;
  }>();

  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [details, setDetails] = useState<DoubtDetail[]>([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(!!(params.ids || params.id));
  const [loadError, setLoadError] = useState<string | null>(null);

  // A photo with three questions on it is one doubt with three questions —
  // the same Q1/Q2/Q3 the student saw straight after snapping it. The API
  // keeps a row per question, because they are solved and reported
  // separately, so the whole page is fetched by id and reassembled here.
  const ids = useMemo(
    () =>
      (params.ids ?? params.id ?? '')
        .split(',')
        .map((id) => id.trim())
        .filter(Boolean),
    [params.ids, params.id]
  );
  const idKey = ids.join(',');

  useEffect(() => {
    if (!idKey) return;
    let cancelled = false;
    setLoading(true);
    setLoadError(null);
    Promise.all(idKey.split(',').map((id) => getDoubt(id)))
      .then((loaded) => {
        if (!cancelled) {
          setDetails(loaded);
          setIndex(0);
        }
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
  }, [idKey]);

  // One chip per question on the photo, so a saved doubt reads exactly as it
  // did on snap-solved. SolutionScreen hides the chip row when there is one.
  const questions: SolutionQuestion[] = useMemo(
    () =>
      details.map((detail, i) => ({
        id: `Q${i + 1}`,
        // Run through latexToText like everywhere else: the raw stem carries
        // `$(\mathrm{P} \cup \mathrm{Q})$`, which this screen used to print
        // verbatim at the student.
        text: latexToText(
          detail.stem ?? detail.question_text ?? (i === 0 ? params.title : null) ?? 'This doubt'
        ),
        steps: parseSolutionSteps(detail.steps, detail.explanation),
        answer: detail.answer ? latexToText(detail.answer) : null,
        failureNote:
          detail.status === 'solved'
            ? null
            : (detail.failure_reason ?? 'This one couldn’t be solved from the photo.'),
      })),
    [details, params.title]
  );

  const current = details[index];

  if (loading) {
    return (
      <>
        <StatusBar style="dark" />
        <SolutionScreenSkeleton onBack={() => router.back()} />
      </>
    );
  }

  if (loadError || questions.length === 0) {
    return (
      <View style={styles.screen}>
        <StatusBar style="dark" />
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
          <View style={styles.stateBlock}>
            <Text style={styles.stateText}>{loadError ?? 'Could not load this doubt.'}</Text>
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
        index={index}
        onSelect={setIndex}
        onBack={() => router.back()}
        onFollowUp={() =>
          router.push({
            pathname: '/entering-classroom',
            params: {
              // The question the student is looking at, not always the first.
              chapterTitle: current?.chapter ?? current?.concept ?? 'this doubt',
              initialUtterance: questions[index]?.text ?? '',
            },
          })
        }
        onReport={() =>
          router.push({
            pathname: '/report-sheet',
            params: { doubtId: current?.id ?? params.id ?? '' },
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

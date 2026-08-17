import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SolutionQuestion, SolutionScreen } from '@/components/solution-screen';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { Remedy, clearPendingSnapResult, peekPendingSnapResult } from '@/lib/doubts';
import { latexToText } from '@/lib/latex-text';
import { parseSolutionSteps } from '@/lib/solution-steps';

const REMEDY_COPY: Record<Remedy, string> = {
  retake: 'Try snapping it again — steadier light or a closer frame usually fixes this.',
  not_photo: 'This looks like it needs a figure or diagram Drona can’t read from text alone.',
  our_side: 'This one was on our end, not your photo. Give it another try in a moment.',
};

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

  const questions: SolutionQuestion[] = useMemo(
    () =>
      (response?.questions ?? []).map((q, i) => ({
        id: `Q${i + 1}`,
        text: latexToText(q.stem ?? q.question_text ?? 'Could not read this question.'),
        steps: parseSolutionSteps(q.steps, q.explanation),
        answer: q.answer ? latexToText(q.answer) : null,
        failureNote:
          q.status === 'solved'
            ? null
            : (q.failure_reason ?? null) ||
              REMEDY_COPY[(q.remedy as Remedy) ?? 'our_side'] ||
              null,
      })),
    [response]
  );

  if (!response || questions.length === 0) {
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

  return (
    <>
      <StatusBar style="dark" />
      <SolutionScreen
        questions={questions}
        index={index}
        onSelect={setIndex}
        onBack={() => router.back()}
        // Seeds a Drona session from the doubt itself, the same thing the web
        // client does from its solution screen — so the action has a real
        // destination rather than being decorative.
        onFollowUp={() =>
          router.push({
            pathname: '/entering-classroom',
            params: {
              chapterTitle: response.questions[index]?.chapter ?? 'this doubt',
              initialUtterance: questions[index].text,
            },
          })
        }
        onReport={() => router.push('/report-sheet')}
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
    emptyState: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: scale(32),
      gap: verticalScale(10),
    },
    emptyTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(19),
      color: colors.ink,
    },
    emptyBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14),
      lineHeight: scale(20),
      color: colors.slate,
      textAlign: 'center',
    },
    ctaButton: {
      marginTop: verticalScale(8),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(26),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
    },
    ctaButtonText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(15),
      color: colors.paper,
    },
  });
}

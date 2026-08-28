import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  SolutionQuestion,
  SolutionScreen,
  SolutionScreenSkeleton,
} from '@/components/solution-screen';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { Remedy, SnappedQuestion } from '@/lib/doubts';
import { clearFinishedSnapJob, useSnapJob } from '@/lib/snap-job';
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

  // The student is often here *before* the answer is: the capture screen hands
  // over after SNAP_HANDOFF_MS whether or not the solve has finished, so this
  // screen is the one that waits. See lib/snap-job.ts.
  const job = useSnapJob();
  const response = job.status === 'solved' ? job.response : null;

  // Dropped on the way out so coming back never shows a stale answer. A solve
  // still running is deliberately left alone — see clearFinishedSnapJob.
  useEffect(() => clearFinishedSnapJob, []);

  const solve = (q: SnappedQuestion, i: number): SolutionQuestion => ({
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
  });

  const questions: SolutionQuestion[] = useMemo(
    () => (response?.questions ?? []).map(solve),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [response]
  );

  /**
   * While the solve runs, show what the photo actually said.
   *
   * The stream sends the transcribed questions ~20s before the first answer
   * exists, so a student can read their own question, and catch a misread
   * photo, instead of watching a skeleton for the whole 30 to 45 seconds. Each
   * question fills in as its answer lands; the ones still working keep the
   * step placeholder.
   */
  const reading: SolutionQuestion[] = useMemo(() => {
    if (job.status !== 'solving') return [];
    const done = new Map(job.solved.map((q) => [q.question_index, q]));
    return job.read.map((r, i) => {
      const answered = done.get(r.question_index);
      if (answered) return solve(answered, i);
      return {
        id: `Q${i + 1}`,
        text: latexToText(r.stem ?? r.question_text ?? 'Could not read this question.'),
        steps: [],
        answer: null,
        pending: true,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [job]);

  if (job.status === 'solving') {
    // Nothing has been read yet: there is genuinely nothing to show but the
    // shape of the page, which is what the full-page skeleton is.
    if (reading.length === 0) {
      return (
        <>
          <StatusBar style="dark" />
          <SolutionScreenSkeleton onBack={() => router.back()} />
        </>
      );
    }
    return (
      <>
        <StatusBar style="dark" />
        <SolutionScreen
          questions={reading}
          index={Math.min(index, reading.length - 1)}
          onSelect={setIndex}
          onBack={() => router.back()}
        />
      </>
    );
  }

  if (job.status === 'failed') {
    return (
      <View style={styles.screen}>
        <StatusBar style="dark" />
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>Couldn&apos;t solve this one</Text>
            <Text style={styles.emptyBody}>
              {job.failure.remedy ? REMEDY_COPY[job.failure.remedy] : job.failure.message}
            </Text>
            <Pressable style={styles.ctaButton} onPress={() => router.replace('/snap-capture')}>
              <Text style={styles.ctaButtonText}>Try another photo</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </View>
    );
  }

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

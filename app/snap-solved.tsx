import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SolutionScreen, SolutionScreenSkeleton } from '@/components/solution-screen';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { SnapResponse, SnappedQuestion } from '@/lib/doubts';
import { clearFinishedSnapJob, useSnapJob } from '@/lib/snap-job';
import { latexToText } from '@/lib/latex-text';
import { REMEDY_COPY, SolutionView, solutionView } from '@/lib/solution-view';

/**
 * The day's count, shown only once the whole page has come back solved.
 *
 * The server's own number, not one derived here: it charges a question the
 * moment it is answered, and only it knows what was already spent today. A
 * page with anything unsolved on it is not the moment to talk about quota.
 */
function quotaNote(response: SnapResponse | null): string | null {
  if (!response) return null;
  const used = response.questions_used_today;
  const limit = response.daily_limit;
  if (used == null || limit == null) return null;
  const everySolved =
    response.questions.length > 0 && response.questions.every((q) => q.status === 'solved');
  if (!everySolved) return null;
  return `${used} of ${limit} questions used today`;
}

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

  // One mapper for both screens, so Snap and the Library's doubt detail cannot
  // drift apart again — which is how both came to drop the MCQ options and the
  // key idea, and to hide the working on an `unsure`.
  const solve = (q: SnappedQuestion, i: number): SolutionView =>
    solutionView(q, `Q${i + 1}`);

  const questions: SolutionView[] = useMemo(
    () => (response?.questions ?? []).map(solve),
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
  const reading: SolutionView[] = useMemo(() => {
    if (job.status !== 'solving') return [];
    const done = new Map(job.solved.map((q) => [q.question_index, q]));
    return job.read.map((r, i) => {
      const answered = done.get(r.question_index);
      if (answered) return solve(answered, i);
      return {
        id: `Q${i + 1}`,
        doubtId: null,
        chapter: r.chapter ?? null,
        text: latexToText(r.stem ?? r.question_text ?? 'Could not read this question.'),
        options: r.options?.map((o) => ({ label: o.label, text: latexToText(o.text) })) ?? null,
        steps: [],
        answer: null,
        pending: true,
      };
    });
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
          // "We could only read 2 of the 3 questions on this page" belongs to
          // the photo, and nothing was telling the student it had happened.
          notice={job.note ?? null}
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
              {/* Quota is not a remedy — nothing about the photo or a retry
                  changes it, and the server's message carries the count. */}
              {job.failure.stage === 'quota'
                ? job.failure.message
                : ((job.failure.remedy ? REMEDY_COPY[job.failure.remedy] : null) ??
                  job.failure.message)}
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
        notice={response.note ?? null}
        footerNote={quotaNote(response)}
        onFollowUp={() =>
          router.push({
            pathname: '/entering-classroom',
            params: {
              chapterTitle: questions[index]?.chapter ?? 'this doubt',
              initialUtterance: questions[index].text,
            },
          })
        }
        // The id of the question being looked at, which report-sheet requires
        // to send anything at all — without it its Send button stays disabled.
        onReport={() =>
          router.push({
            pathname: '/report-sheet',
            params: { doubtId: questions[index]?.doubtId ?? '' },
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

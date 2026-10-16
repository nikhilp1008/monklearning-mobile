import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';

import { SolutionScreen, SolutionScreenSkeleton } from '@/components/solution-screen';
import { StateScreen } from '@/components/states';
import { friendlyError } from '@/lib/api';
import { DoubtDetail, getDoubt } from '@/lib/doubts';
import { SolutionView, solutionView } from '@/lib/solution-view';
import { lastFollowUpContext } from '@/lib/last-followup';
import { openReportSheet } from '@/lib/reports';

export default function DoubtDetailScreen() {
  const params = useLocalSearchParams<{
    id?: string;
    title?: string;
    subject?: string;
    chapter?: string;
    time?: string;
  }>();


  const [details, setDetails] = useState<DoubtDetail[]>([]);
  const [index, setIndex] = useState(0);
  /** The follow-up sheet, open over this solution. Its conversation lives in
   *  the sheet and is gone when it closes — nothing about it is stored. */
  const [loading, setLoading] = useState(!!params.id);
  const [loadError, setLoadError] = useState<string | null>(null);
  /** Bumped by Try again, which re-runs the load below. */
  const [attempt, setAttempt] = useState(0);

  // One question, not one photo.
  //
  // This used to take a comma-separated `ids` of every question read off the
  // same photo and reassemble the page here, matching what the student saw
  // right after snapping. The Library list no longer groups them: a photo can
  // carry a Physics question and a Chemistry one, which a single card can
  // neither filter nor let you delete half of. So a doubt opened from the
  // library is exactly the one that was tapped.
  //
  // The multi-question view still exists where it belongs — `snap-solved`,
  // immediately after the photo is taken.
  const ids = useMemo(
    () => (params.id ?? '').split(',').map((id) => id.trim()).filter(Boolean),
    [params.id]
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
          setLoadError(friendlyError(err, 'load this doubt'));
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [idKey, attempt]);

  // One chip per question on the photo, so a saved doubt reads exactly as it
  // did on snap-solved. SolutionScreen hides the chip row when there is one.
  // The same mapper Snap reads a solution through, so a saved doubt shows the
  // options, the key idea and an `unsure`'s working exactly as it did the
  // moment it was snapped.
  const questions: SolutionView[] = useMemo(
    () =>
      details.map((detail, i) =>
        solutionView(detail, `Q${i + 1}`, i === 0 ? (params.title ?? null) : null)
      ),
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
      <StateScreen
        onBack={() => router.back()}
        glyph="retry"
        title="This doubt didn't open"
        line="Check your connection and try again. It's still saved."
        action={{ label: 'Try again', onPress: () => setAttempt((n) => n + 1) }}
      />
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
        // Only the id: the sheet no longer quotes the question — the student
        // is looking at it on the screen behind.
        onReport={() => {
          const doubtId = current?.id ?? params.id ?? '';
          openReportSheet({ doubtId, context: lastFollowUpContext(doubtId) });
        }}
      />
    </>
  );
}

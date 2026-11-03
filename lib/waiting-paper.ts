import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';

import { getMockSession, getMockStatus, mockSecondsLeft, resumeActiveSession } from '@/lib/mock';
import { getProfile } from '@/lib/profile';

/**
 * A mock paper started and not yet submitted, if there is one.
 *
 * "Leave it running" sends a student to Home, so Home has to say the paper is
 * still there and take them back into it; before this, the only way back was a
 * button far down the Progress page. The paper in memory wins (it knows how
 * much is answered); after the app has been closed, the server's
 * `active_paper` stands in, with the clock but not the count.
 */
export interface WaitingPaper {
  exam: 'jee' | 'neet';
  /** When the clock runs out, ms since the epoch. */
  deadline: number;
  answered: number | null;
  total: number | null;
}

export function useWaitingPaper(): WaitingPaper | null {
  const [waiting, setWaiting] = useState<WaitingPaper | null>(null);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      (async () => {
        try {
          const { exam: profileExam } = await getProfile();
          const exam = profileExam === 'neet' ? 'neet' : 'jee';
          const live = getMockSession();
          if (live && !live.result) {
            const answered = live.paper.questions.filter((q) => live.answers.has(q.id)).length;
            if (!cancelled)
              setWaiting({
                exam,
                deadline: Date.now() + mockSecondsLeft(live) * 1000,
                answered,
                total: live.paper.questions.length,
              });
            return;
          }
          const active = (await getMockStatus(exam)).active_paper;
          if (!cancelled)
            setWaiting(
              active
                ? {
                    exam,
                    deadline: Date.now() + Math.max(0, active.seconds_left) * 1000,
                    answered: null,
                    total: null,
                  }
                : null
            );
        } catch {
          if (!cancelled) setWaiting(null);
        }
      })();
      return () => {
        cancelled = true;
      };
    }, [])
  );

  return waiting;
}

/** Back into the paper, as Progress's Resume does; a paper whose time ran out goes to Mock tests to be marked. */
export async function openWaitingPaper(exam: 'jee' | 'neet'): Promise<void> {
  try {
    const resumed = await resumeActiveSession(exam);
    router.push(resumed && !resumed.expired ? '/mock-test' : '/mocks');
  } catch {
    router.push('/mocks');
  }
}

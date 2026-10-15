import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';

import { getMockStatus, type MockDiagnosticOffer } from '@/lib/mock';
import { getProfile } from '@/lib/profile';

/**
 * The free starting-point paper, if Home should be asking for it.
 *
 * Null for everything else — taken, not offered by this API build, a student
 * who has already practised past needing it, or a read that failed. Silence
 * is the right answer to all of them: a prompt that is wrong is worse than
 * none, and Mock tests still offers the paper to anyone who has not sat it.
 *
 * The exam is the student's own (their profile), the same way Mock tests
 * decides it; a "both" student gets the JEE paper there too.
 */
export function useStartingPointOffer(): MockDiagnosticOffer | null {
  const [offer, setOffer] = useState<MockDiagnosticOffer | null>(null);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      (async () => {
        try {
          const { exam } = await getProfile();
          const status = await getMockStatus(exam === 'neet' ? 'neet' : 'jee');
          const d = status.diagnostic;
          if (!cancelled) setOffer(d?.available && d.recommended ? d : null);
        } catch {
          if (!cancelled) setOffer(null);
        }
      })();
      return () => {
        cancelled = true;
      };
    }, [])
  );

  return offer;
}

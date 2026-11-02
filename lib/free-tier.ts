import { useSyncExternalStore } from 'react';

import { getTier, subscribeTier } from '@/lib/pass';

/**
 * Whether the signed-in student is on the free tier, and what it allows each day.
 *
 * Re-renders when `passStatus` hears a different answer from the server (a plan
 * bought, a pass run out). Right on the first frame once the app has asked
 * once; before that it reads "not free", which is the safe side: a screen then
 * shows the paying student's version until the server has said otherwise, and
 * the server enforces every limit regardless.
 */
export function useFreeTier() {
  return useSyncExternalStore(subscribeTier, getTier, getTier);
}

import { PLANS } from '@/components/paywall/plans';
import { rupees } from '@/constants/onboarding';

/** How long before the end a day pass starts to say so, and a week pass. */
const DAY_WARN_H = 6;
const WEEK_WARN_H = 48;

/**
 * What to say, and whether to say anything, for a starter pass with `hoursLeft`
 * on it. Pure, so it is tested without a clock. Null when it is not time yet, or
 * the pass is over.
 */
export function pendingLine(kind: 'day' | 'week', hoursLeft: number): { title: string; line: string } | null {
  if (hoursLeft <= 0) return null;
  if (kind === 'day') {
    if (hoursLeft > DAY_WARN_H) return null;
    const left = hoursLeft < 1 ? 'less than an hour' : `${Math.ceil(hoursLeft)} hour${Math.ceil(hoursLeft) === 1 ? '' : 's'}`;
    return { title: `Your day pass ends in ${left}`, line: `Keep your classes going with Pro, from ${rupees(PLANS[0].price)} a month.` };
  }
  if (hoursLeft > WEEK_WARN_H) return null;
  const days = Math.ceil(hoursLeft / 24);
  const left = hoursLeft < 24 ? `${Math.max(1, Math.ceil(hoursLeft))} hours` : `${days} day${days === 1 ? '' : 's'}`;
  return { title: `Your week pass ends in ${left}`, line: 'Pick a plan before it ends and nothing stops.' };
}

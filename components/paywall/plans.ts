/**
 * THE PLANS: PRO AND MAX, A MONTH AT A TIME.
 *
 * A plan is for one exam (JEE Main or NEET UG, whichever the student chose in
 * onboarding) and the price is the same for either. Nothing runs longer than a
 * month any more (founder, 2026-11-02): the app is too new to ask for more
 * trust than that. The earlier 1 / 3 / 6 / 11-month plans are no longer sold,
 * but passes already bought keep working and carry Max limits (lib/pass.ts).
 *
 * THESE FIGURES ARE WHAT THE ROWS SHOW. What is CHARGED is the server's list
 * (`pass_kinds`, migration 0116 in the API repo): the app never sends a price,
 * so the two must be kept equal by hand. What each plan ALLOWS is the server's
 * `tier_limits` table, read from `/pass` (lib/pass.ts DEFAULT_TIERS holds the
 * same numbers for the first frame and for no signal).
 *
 * The day and week passes (Rs 7 and Rs 39) are starters, one each per account,
 * and are priced in `PASSES` (constants/onboarding.ts).
 */

import type { PassKind } from '@/lib/pass';

export type Plan = {
  id: Extract<PassKind, 'pro_1m' | 'max_1m'>;
  /** As it reads on the row. */
  name: string;
  tier: 'pro' | 'max';
  months: number;
  price: number;
};

export const PLANS: Plan[] = [
  { id: 'pro_1m', name: 'Pro', tier: 'pro', months: 1, price: 499 },
  { id: 'max_1m', name: 'Max', tier: 'max', months: 1, price: 899 },
];

/** The reference a month is measured against. */
export const MONTHLY = PLANS[0].price;

/** What a month costs. Every plan is a month, so it is the price. */
export const perMonth = (p: Plan) => Math.round(p.price / p.months);

/**
 * Nothing is badged as "best value": Pro and Max differ in what they allow, not
 * in how long they run, so there is no saving to claim.
 */
export const savedPercent = (_p: Plan) => 0;

/** What the success page assumes when it is not told which plan was bought. */
export const BEST = PLANS[PLANS.length - 1].id;

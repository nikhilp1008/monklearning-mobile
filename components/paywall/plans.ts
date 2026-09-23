/**
 * THE FOUR PLANS, AND ONE PRICE LIST FOR EVERY EXAM.
 *
 * JEE Main and NEET UG used to be priced separately — the marketing site still
 * carries a page each. They are one list now: whatever a student is preparing
 * for, this is what it costs, and the plan covers both exams and all four
 * subjects. That is already the site's public position ("Same price, and one
 * pass covers both exams"), so this brings the product in line with it rather
 * than inventing a policy.
 *
 * THE LADDER FALLS AT EVERY STEP: ₹2,999 / ₹2,666 / ₹2,500 / ₹2,273,
 * which is 0% / 11% / 17% / 24% off the monthly rate.
 *
 * It did not always. 3 months and 6 months were ₹13,999 and ₹27,999 — exactly
 * twice — so both worked out at ₹4,666 a month and committing for six months
 * instead of three bought nothing at all. A student comparing the two rows
 * found no reason to pick the longer one, and the screen had no way to hide it
 * because the rows lead with the per-month rate.
 *
 * AND THE PASSES NO LONGER UNDERCUT THE PLANS. This was the other flaw
 * recorded here, and it is the one the price cut actually fixed:
 *
 *   7-day pass      ₹749  =  ₹3,210 a month
 *   7-day win-back  ₹549  =  ₹2,353 a month
 *   longest plan            ₹2,273 a month
 *
 * At ₹4,999 a month both passes were CHEAPER per month than every plan on this
 * screen, so a student who did the arithmetic found the best rate was the one
 * the paywall does not sell — and the win-back handed it to them at the moment
 * they were leaving. At ₹2,999 the longest plan is finally the cheapest way to
 * stay, which is the only arrangement in which a ladder means anything.
 *
 * The ₹24,999 top rung is what makes that true: ₹25,999 would sit above the
 * win-back's ₹2,353 and leave the inversion half-standing.
  */

export type Plan = {
  id: '1m' | '3m' | '6m' | '11m';
  /** As it reads on the row. */
  name: string;
  months: number;
  price: number;
};

export const PLANS: Plan[] = [
  { id: '1m', name: '1 month', months: 1, price: 2999 },
  { id: '3m', name: '3 months', months: 3, price: 7999 },
  { id: '6m', name: '6 months', months: 6, price: 14999 },
  { id: '11m', name: '11 months', months: 11, price: 24999 },
];

/** The reference the rest of the ladder is measured against. */
const MONTHLY = PLANS[0].price;

export const perMonth = (p: Plan) => Math.round(p.price / p.months);

/** Whole percent off the 1-month rate. 0 for the 1-month plan itself. */
export const savedPercent = (p: Plan) =>
  Math.round(100 * (1 - p.price / (MONTHLY * p.months)));

/**
 * The longest plan, and the only one carrying a badge.
 *
 * Every step now saves a different amount (10 / 15 / 20), so badging the
 * middle rows would no longer print the same number twice — the reason this
 * was one badge rather than three has gone. It stays one badge anyway: three
 * competing "save X%" flags turn a ladder into a puzzle, and the per-month
 * rate on every row already does the comparing.
 */
export const BEST = PLANS[PLANS.length - 1].id;

/**
 * THE WIN-BACK, offered only on the way out.
 *
 * A student who reaches for the back button has decided the plans are too
 * much, and the honest answer to that is a smaller commitment rather than a
 * smaller plan. This is the week pass at ₹200 off — the one discount on the
 * screen, spent at the moment it is the difference between a trial and
 * nothing.
 */
export const WINBACK = { name: '7 days', was: 749, now: 549 };

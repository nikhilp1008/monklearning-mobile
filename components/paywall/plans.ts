/**
 * THE FOUR PLANS, AND ONE PRICE LIST FOR EVERY EXAM.
 *
 * A plan is for one exam — JEE Main or NEET UG, whichever the student chose in
 * onboarding — and the price is the same for either, so there is one list.
 * There is no "both exams" plan; that option was removed from the app.
 *
 * THESE FIGURES ARE WHAT THE ROWS SHOW. What is CHARGED is the server's list
 * (`pass_kinds`, migrations/0107 in the API repo): the app never sends a price,
 * so the two must be kept equal by hand.
 *
 * October 2026: 1 month ₹1,599, 3 months ₹4,999, 6 months ₹9,499,
 * 11 months ₹16,999. Per month that is ₹1,599 / ₹1,666 / ₹1,583 / ₹1,545 — the
 * 3-month plan works out dearer per month than the 1-month one, so its row
 * shows no saving.
 *
 * The day and week passes (₹79 and ₹249, the early-access prices on the
 * website) are a different thing to buy and are priced on their own in
 * `PASSES`. There is no win-back offer any more (founder, 2026-10-23).
 */


export type Plan = {
  id: '1m' | '3m' | '6m' | '11m';
  /** As it reads on the row. */
  name: string;
  months: number;
  price: number;
};

export const PLANS: Plan[] = [
  { id: '1m', name: '1 month', months: 1, price: 1599 },
  { id: '3m', name: '3 months', months: 3, price: 4999 },
  { id: '6m', name: '6 months', months: 6, price: 9499 },
  { id: '11m', name: '11 months', months: 11, price: 16999 },
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

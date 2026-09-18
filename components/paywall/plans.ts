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
 * TWO THINGS ABOUT THIS LADDER THAT THE SCREEN CANNOT HIDE, recorded here
 * because they are pricing decisions rather than design ones:
 *
 *   1. 3 months and 6 months are the same rate per month — ₹4,666 either way,
 *      because 27,999 is exactly twice 13,999. Committing for six months
 *      instead of three buys no further discount, so a "save 7%" badge would
 *      land identically on both. Only 11 months breaks the pattern, at 20%.
 *
 *   2. Every plan costs more per month than renewing the existing passes.
 *      A week pass works out at ₹3,210 a month against ₹4,000 on the longest
 *      plan and ₹4,999 on the shortest. A student who does that arithmetic
 *      finds the cheapest option is the one this screen does not offer.
 *
 * Neither is this file's decision to make. They are why the rows below lead
 * with the per-month rate: it is the honest comparator, and if the ladder
 * changes the screen needs no edit.
 */

export type Plan = {
  id: '1m' | '3m' | '6m' | '11m';
  /** As it reads on the row. */
  name: string;
  months: number;
  price: number;
};

export const PLANS: Plan[] = [
  { id: '1m', name: '1 month', months: 1, price: 4999 },
  { id: '3m', name: '3 months', months: 3, price: 13999 },
  { id: '6m', name: '6 months', months: 6, price: 27999 },
  { id: '11m', name: '11 months', months: 11, price: 43999 },
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
 * Badging 3 and 6 months would print "Save 7%" twice, identically, which
 * invites exactly the comparison that makes the middle of the ladder look
 * arbitrary. One badge on the one plan whose saving is genuinely different.
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

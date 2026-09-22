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
 * THE LADDER NOW FALLS AT EVERY STEP: ₹4,999 / ₹4,500 / ₹4,250 / ₹4,000,
 * which is 0% / 10% / 15% / 20% off the monthly rate.
 *
 * It did not used to. 3 months and 6 months were ₹13,999 and ₹27,999 —
 * exactly twice — so both worked out at ₹4,666 a month and committing for six
 * months instead of three bought nothing at all. A student comparing the two
 * rows found no reason to pick the longer one, and the screen had no way to
 * hide that because the rows lead with the per-month rate.
 *
 * ONE THING STILL UNRESOLVED, recorded because it is a pricing decision rather
 * than a design one:
 *
 *   Every plan still costs more per month than renewing the existing passes.
 *   A week pass is ₹749, which is ₹3,210 a month; the win-back below is ₹549,
 *   or ₹2,353 a month. Both undercut the ₹4,000 that the longest and
 *   best-value plan asks for. A student who does that arithmetic finds the
 *   cheapest option is the one this screen does not sell — and the win-back
 *   hands it to them at the exact moment they are leaving.
 *
 * That is not this file's call to make. It is why the rows lead with the
 * per-month rate: it is the honest comparator, and if the ladder changes again
 * the screen needs no edit.
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
  { id: '3m', name: '3 months', months: 3, price: 13499 },
  { id: '6m', name: '6 months', months: 6, price: 25499 },
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

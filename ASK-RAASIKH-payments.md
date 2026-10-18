# For Raasikh: payments, server side (Oct 17, 2026)

Nikhil's app-side review of the Razorpay work found these need the **server**. The app changes that go with them are listed at the end. Everything was tested in Razorpay **test mode** on the simulator: order → Razorpay sheet → demo bank "Success" → verify → `GET /pass` → receipt. It works end to end.

## Must answer / do before real money

1. **One payment = exactly one pass.** Are `/payments/verify`, the `callback_url` handler and the webhook idempotent on `order_id`? A second verify of the same payment should return 200, not 400.
2. **Order checks.** Does verify confirm that the order belongs to the caller, that the captured amount equals the order amount, and that payments are auto-captured?
3. **One more week (`offer: 'winback'`):**
   - Price it at **₹249** (24900 paise). The server currently charges ₹549.
   - Allow it **once per student, ever**: the first time a day or week pass ends.
   - Allow it **only with `kind: 'week'`**. Check that `kind: '11m', offer: 'winback'` cannot come out at ₹249.
   - Add **`winback_available: true|false`** to `GET /pass`. The app shows "Can't decide yet?" only when this is `true`, so until the field exists the offer is hidden.
   - The app refuses to open the sheet if `order.amount` differs from the price on the page, so a ₹549 order shows "The price has changed…" instead of overcharging.
4. **`/pass/redeem`:** does it refuse a code that does not make that pass free, and is the one-code-per-student limit atomic?
5. **Paywall source of truth.** Is `PAYWALL_ENFORCED` on in production? Does the 402 check read the same source as `GET /pass`, with no caching? A student who has just paid must not get a 402.
6. **Drona voice socket.** Is it authenticated now? It was open earlier; if it still is, the paywall cannot stop it.
7. **Callback page.** What exactly does it `postMessage` on success and on failure? Success must be `{source:'monk-checkout', type:'success', razorpay_order_id, razorpay_payment_id, razorpay_signature}`. Is there an order-status route the app could poll instead of `GET /pass`?
8. **Errors.** Are refusal `detail` values always plain strings? An object shows students "[object Object]".
9. **Stacking.** When a pass is bought while one is running, does `ends_at` extend from the current end? The app now treats "ends later than before" as the sign a purchase landed.
10. **`GET /pass` kinds** are limited to day, week, 1m, 3m, 6m and 11m? Any other kind reads as "no pass".

## Razorpay dashboard

- Upload the MonkLearning logo and set the brand colour. Checkout currently shows a plain "M" box.
- Razorpay is still in **Test Mode** (red ribbon). Switch to live keys only after 1–9.

## iPhone (decided by Nikhil)

Payments are **Android only** for now (`PAYMENTS_ON_THIS_DEVICE` in `lib/payments.ts`). iPhone stays on TestFlight for team and teacher accounts. Selling access outside Apple in-app purchase is an App Store rule 3.1.1 rejection risk. Free promo codes still work on iPhone.

## What changed in the app (uncommitted, for your review)

- **`lib/pass.ts`:**
  - New `unknown` state. No signal, or a lapsed sign-in, no longer reads as "no pass", and the gate leaves the student alone.
  - The cache is per student only; there is no shared-key fallback.
  - Only a valid pass body counts as an answer, so a Wi-Fi login page doesn't.
  - Online, the server's `state` wins over the phone's clock.
- **`app/_layout.tsx` (gate):**
  - Redirects only on a real `none` or `expired`.
  - Holds the launch cover until the first pass answer; a cached `active` answers instantly.
  - Runs one check at a time.
- **`lib/auth.ts`:**
  - Clears the pass and saved mock papers *before* signing out.
  - Auth re-checks are ordered, and a failed re-check keeps a signed-in student signed in.
  - `TOKEN_REFRESHED` for the same user is ignored.
- **`razorpay-checkout.tsx`:**
  - One purchase at a time.
  - Price check against the page.
  - "Landed" means a pass that ends later than before the order, so an extension isn't mistaken for a new purchase and team stand-ins are ignored.
  - Any non-success exit quietly checks `GET /pass` before saying "cancelled", which catches a UPI payment approved in another app.
  - New "Confirming your payment" page while verifying.
- **Onboarding `/pass`:** if a pass is already active, it goes straight to the receipt (no paying twice). It also re-checks on return to the app.
- **Plans:**
  - New page (`components/paywall/plans-page.tsx`).
  - Leaves on its own when a pass lands.
  - Promo returns with `dismissTo`, so there is no second plans page underneath.
  - "Start learning" uses `dismissTo('/')`.
- **Mock papers:**
  - Saved reports are listed per student and are not shown until `/mock/runs` answers.
  - Sign-out clears in-progress papers.

Tests: 2,819 passing, including new `pass-unknown.test.ts` and `mock-report-owner.test.ts`.

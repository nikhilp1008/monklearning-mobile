import { router } from 'expo-router';
import { useState } from 'react';

import { PaywallLead, PaywallSuccess } from '@/components/paywall/screens';
import { startPass, type PassKind } from '@/lib/pass';

/**
 * WHERE A STUDENT LANDS WHEN THEIR PASS HAS ENDED.
 *
 * The day after a one-day pass — or the eighth morning after a week — the app
 * opens here instead of Home. There is no way past it except taking a pass,
 * which is the point: everything behind it is what the pass is for, and the
 * screen says so in its first line ("your chapters, notes and progress are
 * exactly where you left them").
 *
 * No back control, and none is missing: see the long note in
 * `components/paywall/screens.tsx`. The smaller thing to buy — a week — is at
 * the foot of the page rather than behind a modal that only appears if you
 * try to leave.
 *
 * Until a payment provider exists the only completable total is zero, so the
 * promo code IS the flow: "Have a promo code?" opens the field, a valid code
 * takes the total to ₹0, and the button completes. The same code the student
 * used in onboarding works here, for as long as it is the one code we honour.
 */
export default function PlansScreen() {
  /** The confirmation, held for the moment it takes to read. */
  const [done, setDone] = useState<PassKind | null>(null);

  // Paid nothing, because nothing can be paid yet — the receipt says so.
  if (done) return <PaywallSuccess kind={done} paid={0} />;

  return (
    <PaywallLead
      onComplete={async ({ kind, promo }) => {
        await startPass(kind, promo);
        setDone(kind);
        // Long enough to see what was bought, short enough not to be a wall.
        setTimeout(() => router.replace('/(tabs)'), 1400);
      }}
    />
  );
}

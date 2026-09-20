import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import { PLANS } from '@/components/paywall/plans';
import { PaywallLead, PaywallSuccess, type Pick } from '@/components/paywall/screens';
import { startPass, type PassKind } from '@/lib/pass';

const isPick = (v?: string): v is Pick => v === 'week' || PLANS.some((p) => p.id === v);

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
 * promo code IS the flow: "Have a promo code?" goes to `/plans-promo`, a valid
 * code comes back, the total reads ₹0 and the button completes. The same code
 * the student used in onboarding works here, for as long as it is the one code
 * we honour. The chosen plan travels with it, because that screen replaces this
 * route rather than popping to it.
 */
export default function PlansScreen() {
  /** The confirmation, held for the moment it takes to read. */
  const [done, setDone] = useState<PassKind | null>(null);
  const params = useLocalSearchParams<{ pick?: string; promo?: string }>();

  // Paid nothing, because nothing can be paid yet — the receipt says so.
  if (done) return <PaywallSuccess kind={done} paid={0} />;

  return (
    <PaywallLead
      pick={isPick(params.pick) ? params.pick : null}
      promo={(params.promo ?? '').toUpperCase()}
      onPromo={(pick) =>
        router.push({
          pathname: '/plans-promo',
          params: { pick: pick ?? '', promo: params.promo ?? '' },
        })
      }
      onComplete={async ({ kind, promo }) => {
        await startPass(kind, promo);
        setDone(kind);
        // Long enough to see what was bought, short enough not to be a wall.
        setTimeout(() => router.replace('/(tabs)'), 1400);
      }}
    />
  );
}

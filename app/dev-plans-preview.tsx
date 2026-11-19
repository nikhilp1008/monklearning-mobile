import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import { PaymentConfirming } from '@/components/paywall/payment-confirming';
import { PlansPage } from '@/components/paywall/plans-page';

/**
 * DEV-ONLY. monklearningapp://dev-plans-preview?ctx=gate|extend&first=1&free=1&teacher=vedha&confirming=1|checking|late
 *
 * `first=1`: the gate for a student who never had a pass (the day and the week
 * lead). `free=1`: a pass has ended and the free plan is behind the page, so
 * the back button shows.
 *
 * The real plans page with nothing behind its buttons, so each of its states
 * can be seen on a simulator signed in as a team account (which the paywall
 * never stops). Renders nothing outside `__DEV__`.
 */
export default function DevPlansPreview() {
  const { ctx, teacher, confirming, first, free } = useLocalSearchParams<{
    ctx?: string;
    teacher?: string;
    confirming?: string;
    first?: string;
    free?: string;
  }>();
  const [busy] = useState(false);
  if (!__DEV__) return <Redirect href="/" />;
  const extend = ctx === 'extend';
  return (
    <>
      <PlansPage
        context={extend ? 'extend' : 'gate'}
        teacher={teacher === 'vedha' ? 'vedha' : 'drona'}
        passEnds={extend ? new Date(Date.now() + 6 * 86400000) : null}
        neverHadPass={!extend && first === '1'}
        freeBehind={!extend && free === '1'}
        busy={busy}
        onPay={() => {}}
        onRedeem={() => {}}
        onPromo={() => {}}
        onClose={extend || free === '1' ? () => router.back() : undefined}
      />
      {confirming ? (
        <PaymentConfirming
          what="1 day"
          amount="₹7"
          mode={confirming === 'checking' ? 'checking' : confirming === 'late' ? 'late' : 'paid'}
          onNotPaid={() => router.back()}
          onClose={() => router.back()}
        />
      ) : null}
    </>
  );
}

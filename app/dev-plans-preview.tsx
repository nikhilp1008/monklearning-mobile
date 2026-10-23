import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import { PaymentConfirming } from '@/components/paywall/payment-confirming';
import { PlansPage } from '@/components/paywall/plans-page';

/**
 * DEV-ONLY. monklearningapp://dev-plans-preview?ctx=gate|extend&week=1&teacher=vedha&confirming=1
 *
 * The real plans page with nothing behind its buttons, so each of its states
 * can be seen on a simulator signed in as a team account (which the paywall
 * never stops). Renders nothing outside `__DEV__`.
 */
export default function DevPlansPreview() {
  const { ctx, teacher, confirming } = useLocalSearchParams<{
    ctx?: string;
    teacher?: string;
    confirming?: string;
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
        busy={busy}
        onPay={() => {}}
        onRedeem={() => {}}
        onPromo={() => {}}
        onClose={extend ? () => router.back() : undefined}
      />
      {confirming === '1' ? <PaymentConfirming /> : null}
    </>
  );
}

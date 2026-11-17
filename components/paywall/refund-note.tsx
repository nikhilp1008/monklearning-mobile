import { Text } from 'react-native';

import { ob, obFont } from '@/constants/onboarding';

/**
 * The refund rule, said before the tap (terms.tsx "Refunds" says the same thing).
 * Razorpay: 75% back if the student writes to support within 3 days of buying,
 * nothing after. Google Play refunds are Google's. The line sits under the Pay
 * button on both screens that take a payment, in the same quiet style as the
 * promo note beside it.
 */
export const REFUND_NOTE =
  'Paid with Razorpay: 75% back if you ask within 3 days of buying. Google Play refunds follow Google’s policy.';

export function RefundNote() {
  return (
    <Text style={{ fontFamily: obFont.r400, fontSize: 13, lineHeight: 18, color: ob.ink55, textAlign: 'center', marginTop: 8 }}>
      {REFUND_NOTE}
    </Text>
  );
}

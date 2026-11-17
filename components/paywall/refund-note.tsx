import { Text } from 'react-native';

import { ob, obFont } from '@/constants/onboarding';
import { razorpayChoiceOn } from '@/lib/play-billing';

/**
 * The refund rule, said before the tap (terms.tsx "Refunds" says the same thing).
 * Razorpay: 75% back if the student writes to support within 3 days of buying,
 * nothing after. Google Play refunds are Google's. The line sits under the Pay
 * button on both screens that take a payment, in the same quiet style as the
 * promo note beside it.
 *
 * Razorpay is only offered on Android beside Google Play once Google approves that
 * (EXPO_PUBLIC_RAZORPAY_CHOICE=1). Until then the student can only pay with Google
 * Play, so the line does not mention a way to pay they do not have.
 */
export function refundNote(): string {
  return razorpayChoiceOn()
    ? 'Paid with Razorpay: 75% back if you ask within 3 days of buying. Google Play refunds follow Google’s policy.'
    : 'Refunds for Google Play purchases follow Google Play’s refund policy.';
}

export function RefundNote() {
  return (
    <Text style={{ fontFamily: obFont.r400, fontSize: 13, lineHeight: 18, color: ob.ink55, textAlign: 'center', marginTop: 8 }}>
      {refundNote()}
    </Text>
  );
}

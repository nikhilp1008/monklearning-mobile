import { Text } from 'react-native';

import { ob, obFont } from '@/constants/onboarding';
import { PAYMENTS_ON_THIS_DEVICE } from '@/lib/payments';
import { razorpayChoiceOn } from '@/lib/play-billing';

/**
 * THE RENEWAL LINE UNDER THE PAY BUTTON for Pro and Max, which on Android are monthly Google Play
 * SUBSCRIPTIONS. Google requires the price, how often it is charged and where to cancel to be plain
 * before the tap. Same quiet style as the refund note beside it.
 *
 * With Razorpay offered beside Google Play (EXPO_PUBLIC_RAZORPAY_CHOICE=1) a student can still pay
 * once with Razorpay, and that never renews, so the line says both.
 */
export function subscriptionNote(plan: string, rupees: number): string {
  const google = `${plan} is ₹${rupees} a month and renews every month until you cancel in Google Play, under Payments & subscriptions.`;
  return razorpayChoiceOn() ? `${google} Paid with Razorpay, it is one month and does not renew.` : google;
}

export function SubscriptionNote({ plan, rupees }: { plan: string; rupees: number }) {
  return (
    <Text style={{ fontFamily: obFont.r400, fontSize: 13, lineHeight: 18, color: ob.ink55, textAlign: 'center', marginTop: 8 }}>
      {subscriptionNote(plan, rupees)}
    </Text>
  );
}

/**
 * THE FOOTNOTE UNDER THE PLAN LIST ("One payment. Nothing renews on its own." used to be true of everything).
 * Where a student can pay with Google Play, Pro and Max are monthly subscriptions, so the line says what
 * renews and what does not. Where paying is not possible (iPhone: codes only) nothing renews and it says so.
 */
export function payFootnote(): string {
  if (!PAYMENTS_ON_THIS_DEVICE) return 'One payment. Nothing renews on its own.';
  return razorpayChoiceOn()
    ? 'Pro and Max renew every month when paid with Google Play. Day and 7-day passes are one payment.'
    : 'Pro and Max renew every month through Google Play until you cancel. Day and 7-day passes are one payment.';
}

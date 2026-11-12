import { Text } from 'react-native';

import { ob, obFont } from '@/constants/onboarding';
import { promoPlayNote } from '@/lib/play-billing';

/**
 * The line under the Pay button when a promo code takes SOME off (not all: a code
 * that makes the pass free never reaches a payment). Google Play's products have
 * one fixed price, so the code only counts if the student picks Razorpay on
 * Google's screen. Said before the tap, in plain words.
 */
export function PromoPlayNote({ code, savedRupees, listRupees }: { code: string; savedRupees: number; listRupees: number }) {
  return (
    <Text
      accessibilityLiveRegion="polite"
      style={{ fontFamily: obFont.r400, fontSize: 13, lineHeight: 18, color: ob.ink55, textAlign: 'center', marginTop: 8 }}>
      {promoPlayNote(code, savedRupees, listRupees)}
    </Text>
  );
}

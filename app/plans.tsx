import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { PLANS, WINBACK } from '@/components/paywall/plans';
import { usePassCheckout } from '@/components/paywall/razorpay-checkout';
import { PaywallLead, PaywallSuccess, type Pick } from '@/components/paywall/screens';
import { exitOnBack, useAndroidBack } from '@/lib/android-back';
import { PASS_NAME, passStatus, startPass, type PassKind } from '@/lib/pass';
import { payErrorMessage } from '@/lib/payments';

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
  /** What the receipt says was paid, in rupees. Zero for a promo code. */
  const [paidRupees, setPaidRupees] = useState(0);
  const [paying, setPaying] = useState(false);
  const { pay, checkout } = usePassCheckout();
  const params = useLocalSearchParams<{ pick?: string; promo?: string }>();

  /**
   * ANDROID'S BACK. Sent here by the pass gate (a pass has run out), there is
   * nothing to go back to: Home sits underneath only until the gate fires
   * again, so Back leaves the app, as on any Android screen with nowhere to
   * go. Opened from Subscription with a pass still running, Back is the
   * normal Back. After taking a pass, Back is "Start learning".
   */
  const [gated, setGated] = useState(false);
  useEffect(() => {
    let live = true;
    passStatus().then((st) => {
      if (live) setGated(st.state !== 'active');
    });
    return () => {
      live = false;
    };
  }, []);
  useAndroidBack(() => {
    if (done) {
      router.replace('/(tabs)');
      return true;
    }
    return gated ? exitOnBack() : false;
  });

  if (done) return <PaywallSuccess kind={done} paid={paidRupees} onDone={() => router.replace('/(tabs)')} />;

  const rupeesFor = (kind: PassKind) =>
    kind === 'week' ? WINBACK.now : (PLANS.find((p) => p.id === kind)?.price ?? 0);

  return (
    <>
      <PaywallLead
        pick={isPick(params.pick) ? params.pick : null}
        promo={(params.promo ?? '').toUpperCase()}
        busy={paying}
        onPromo={(pick) =>
          router.push({
            pathname: '/plans-promo',
            params: { pick: pick ?? '', promo: params.promo ?? '' },
          })
        }
        onComplete={async ({ kind, promo }) => {
          // The server decides whether a code is good: one per student, capped.
          // Its refusal is a sentence written for the student.
          try {
            await startPass(kind, promo);
          } catch (err) {
            Alert.alert("Couldn't start your pass", payErrorMessage(err));
            return;
          }
          // The receipt stays until "Start learning": it used to leave on its
          // own after 1.4s, before the rows had finished rising in.
          setPaidRupees(0);
          setDone(kind);
        }}
        onPay={async ({ kind, offer }) => {
          setPaying(true);
          try {
            const result = await pay(kind, {
              description: `${PASS_NAME[kind]} pass`,
              offer,
            });
            if (result.status === 'paid') {
              setPaidRupees(rupeesFor(kind));
              setDone(kind);
            } else if (result.status === 'pending') {
              // Money has moved; the server has not said so yet. Never "failed".
              Alert.alert(
                'Payment received',
                "We're confirming it with your bank. Your pass will start in a minute — close and reopen the app if it doesn't."
              );
            } else if (result.status === 'failed') {
              Alert.alert('Payment not completed', result.message);
            }
          } catch (err) {
            // Before any money moved: the order could not be made.
            Alert.alert("Couldn't start the payment", payErrorMessage(err));
          } finally {
            setPaying(false);
          }
        }}
      />
      {checkout}
    </>
  );
}

import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { PLANS } from '@/components/paywall/plans';
import { PaywallLead, PaywallSuccess, type Pick } from '@/components/paywall/screens';
import { exitOnBack, useAndroidBack } from '@/lib/android-back';
import { passStatus, startPass, type PassKind } from '@/lib/pass';

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

  // Paid nothing, because nothing can be paid yet — the receipt says so.
  if (done) return <PaywallSuccess kind={done} paid={0} onDone={() => router.replace('/(tabs)')} />;

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
        // A pass that will not start says so; it used to fail with no word.
        try {
          await startPass(kind, promo);
        } catch {
          Alert.alert("Couldn't start your pass", 'Check your connection and try again. Nothing was charged.');
          return;
        }
        // The receipt stays until "Start learning": it used to leave on its
        // own after 1.4s, before the rows had finished rising in.
        setDone(kind);
      }}
    />
  );
}

import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, AppState, View } from 'react-native';

import { PaymentConfirming } from '@/components/paywall/payment-confirming';
import { PlansPage, type PlansPick } from '@/components/paywall/plans-page';
import { PLANS } from '@/components/paywall/plans';
import { usePassCheckout } from '@/components/paywall/razorpay-checkout';
import { PaywallSuccess } from '@/components/paywall/screens';
import { exitOnBack, useAndroidBack } from '@/lib/android-back';
import { PASS_NAME, cachedPassStatus, passStatus, startPass, type PassKind, type PassStatus } from '@/lib/pass';
import { payErrorMessage } from '@/lib/payments';
import { getTeacherPreference, type TeacherId } from '@/lib/preferences';
import { fetchOneMoreWeek, rupeesOf } from '@/lib/promo';

const isPick = (v?: string): v is PlansPick => v === 'week' || PLANS.some((p) => p.id === v);

/** How often a page waiting on a confirmed payment asks again. */
const PENDING_RECHECK_MS = 15000;

/**
 * WHERE A STUDENT CHOOSES A PLAN — when their pass has ended (the gate in
 * app/_layout.tsx sends them here) or from Profile → Your plan → Extend.
 *
 * The page is components/paywall/plans-page.tsx; this route owns everything
 * around it:
 *
 *   - which of the two it is: no running pass is the gate (no way out but a
 *     pass), a running one is "Add more time" (it closes);
 *   - paying (Razorpay, components/paywall/razorpay-checkout.tsx), with the
 *     confirming page while the server catches up, and the receipt after;
 *   - a promo code that makes a plan free, which the server redeems;
 *   - LEAVING ON ITS OWN. A gated student whose pass arrives while this page
 *     is up — a payment the bank confirmed late, a pass bought on another
 *     phone — is taken to Home on the next look (returning to the app, coming
 *     back to the page, or every few seconds while a payment is pending). It
 *     used to stay, offering to sell them what they had just bought.
 */
export default function PlansScreen() {
  const params = useLocalSearchParams<{ pick?: string; promo?: string }>();
  const { pay, checkout, confirming } = usePassCheckout();

  /** Where the student stands. Null until the first answer. */
  const [status, setStatus] = useState<PassStatus | null>(null);
  const [teacher, setTeacher] = useState<TeacherId>('drona');
  const [oneMoreWeek, setOneMoreWeek] = useState(false);
  const [paying, setPaying] = useState(false);
  /** The receipt: what was bought and what it cost. */
  const [done, setDone] = useState<{ kind: PassKind; paid: number; endsAt?: Date | null } | null>(null);
  /** A payment the bank has not confirmed yet: keep asking. */
  const [pending, setPending] = useState(false);

  /** Decided once, from the first answer: a page that began as the gate stays
   *  the gate until the student leaves it. */
  const gated = useRef<boolean | null>(null);

  useEffect(() => {
    let live = true;
    // The phone's last answer first, so the page has its shape at once; then
    // the server's, which wins.
    cachedPassStatus().then((cached) => {
      if (live && cached.state !== 'unknown') setStatus((s) => s ?? cached);
    });
    passStatus().then((st) => {
      if (live) setStatus(st);
    });
    getTeacherPreference().then((t) => live && setTeacher(t));
    fetchOneMoreWeek().then((ok) => live && setOneMoreWeek(ok));
    return () => {
      live = false;
    };
  }, []);

  if (status && gated.current === null) gated.current = status.state !== 'active';
  const context = gated.current === false ? 'extend' : 'gate';

  const goHome = useCallback(() => router.dismissTo('/'), []);

  /** For the gate only: if a pass has arrived since, there is nothing to sell. */
  const recheck = useCallback(async () => {
    if (gated.current !== true || done) return;
    const st = await passStatus();
    if (st.state === 'active') goHome();
  }, [done, goHome]);

  useFocusEffect(
    useCallback(() => {
      void recheck();
      const sub = AppState.addEventListener('change', (next) => {
        if (next === 'active') void recheck();
      });
      return () => sub.remove();
    }, [recheck])
  );
  useEffect(() => {
    if (!pending) return;
    const id = setInterval(() => void recheck(), PENDING_RECHECK_MS);
    return () => clearInterval(id);
  }, [pending, recheck]);

  /**
   * ANDROID'S BACK. At the gate there is nothing behind this page, so Back
   * leaves the app, as on any Android screen with nowhere to go. From Your
   * plan, Back is the normal Back. After a pass, Back is "Start learning".
   */
  useAndroidBack(() => {
    if (done) {
      goHome();
      return true;
    }
    if (paying) return true;
    return gated.current !== false ? exitOnBack() : false;
  });

  if (done) return <PaywallSuccess kind={done.kind} paid={done.paid} endsAt={done.endsAt} onDone={goHome} />;

  // The page needs to know which of its two faces to show; until the first
  // answer it is plain white, as the splash it follows.
  if (!status) return <View style={{ flex: 1, backgroundColor: '#fff' }} />;

  return (
    <>
      <PlansPage
        context={context}
        teacher={teacher}
        passEnds={status.state === 'active' ? status.endsAt : null}
        pick={isPick(params.pick) ? params.pick : null}
        promo={(params.promo ?? '').toUpperCase()}
        oneMoreWeek={oneMoreWeek}
        busy={paying}
        onClose={context === 'extend' ? () => router.back() : undefined}
        onPromo={(pick) =>
          router.push({
            pathname: '/plans-promo',
            params: { pick: pick ?? '', promo: params.promo ?? '' },
          })
        }
        onRedeem={async ({ kind, promo }) => {
          if (paying) return;
          setPaying(true);
          // The server decides whether a code is good: one per student, capped.
          // Its refusal is a sentence written for the student.
          try {
            await startPass(kind, promo);
            setDone({ kind, paid: 0 });
          } catch (err) {
            Alert.alert("Couldn't use this code", payErrorMessage(err));
          } finally {
            setPaying(false);
          }
        }}
        onPay={async ({ kind, offer, promo, expectedPaise }) => {
          if (paying) return;
          setPaying(true);
          try {
            const result = await pay(kind, {
              description: offer ? 'One more week' : `${PASS_NAME[kind]} pass`,
              offer,
              promo,
              expectedPaise,
            });
            if (result.status === 'paid') {
              // What the server charged, not the list price: a code may have taken some off.
              setDone({
                kind,
                paid: rupeesOf(result.amountPaise),
                // The server's end: a pass bought on top of a running one starts after it.
                endsAt: result.pass.state === 'active' ? result.pass.endsAt : null,
              });
            } else if (result.status === 'pending') {
              // Money has moved; the server has not said so yet. Never "failed",
              // and never "pay again": this page leaves on its own once it lands.
              setPending(true);
              Alert.alert(
                'Payment received',
                "Your bank is still confirming it. Your pass will start on its own in a few minutes — you don't need to pay again."
              );
            } else if (result.status === 'failed') {
              Alert.alert('Payment not completed', result.message);
            }
          } catch (err) {
            // Before any money moved: the order could not be made, or its price
            // was not the price on the page.
            Alert.alert("Couldn't start the payment", payErrorMessage(err));
          } finally {
            setPaying(false);
          }
        }}
      />
      {checkout}
      {confirming ? <PaymentConfirming /> : null}
    </>
  );
}

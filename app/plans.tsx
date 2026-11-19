import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, AppState, View } from 'react-native';

import { PaymentConfirming } from '@/components/paywall/payment-confirming';
import { PaymentNotice } from '@/components/paywall/payment-notice';
import { PlansPage, type PlansPick } from '@/components/paywall/plans-page';
import { isReviewerSession } from '@/lib/reviewer';
import { PLANS } from '@/components/paywall/plans';
import { PASSES, rupees } from '@/constants/onboarding';
import { usePassCheckout } from '@/components/paywall/razorpay-checkout';
import { PaywallSuccess } from '@/components/paywall/screens';
import { exitOnBack, useAndroidBack } from '@/lib/android-back';
import { PASS_NAME, cachedPassStatus, passStatus, startPass, type PassKind, type PassStatus } from '@/lib/pass';
import { usePlan } from '@/lib/free-tier';
import { payErrorMessage } from '@/lib/payments';
import { getTeacherPreference, type TeacherId } from '@/lib/preferences';
import { rupeesOf } from '@/lib/promo';

const isPick = (v?: string): v is PlansPick => PASSES.some((p) => p.id === v) || PLANS.some((p) => p.id === v);

/** How often a page waiting on a confirmed payment asks again. */
const PENDING_RECHECK_MS = 15000;
/** Sooner while the confirming page is up and the student is watching it. */
const LATE_RECHECK_MS = 5000;

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
  const { pay, checkout, confirming, stopConfirming } = usePassCheckout();
  const { starterUsed, tier } = usePlan();

  /** Where the student stands. Null until the first answer. */
  const [status, setStatus] = useState<PassStatus | null>(null);
  const [teacher, setTeacher] = useState<TeacherId>('drona');
  const [paying, setPaying] = useState(false);
  /** A payment that did not happen: said in the banner at the top. */
  const [notPaid, setNotPaid] = useState<false | 'sure' | 'unsure'>(false);
  const hideNotPaid = useCallback(() => setNotPaid(false), []);
  /** Paid, and the bank has not confirmed in time: the confirming page stays up. */
  const [late, setLate] = useState(false);
  const lateNow = useRef(false);
  lateNow.current = late;
  /** The receipt: what was bought and what it cost. */
  const [done, setDone] = useState<{ kind: PassKind; paid: number; endsAt?: Date | null } | null>(null);
  /** What is being bought right now, for the confirming page to say. */
  const [buying, setBuying] = useState<{ kind: PassKind; paise: number } | null>(null);
  /** A payment the bank has not confirmed yet: keep asking. */
  const [pending, setPending] = useState(false);

  /** Decided once, from the first answer: a page that began as the gate stays
   *  the gate until the student leaves it. */
  const gated = useRef<boolean | null>(null);

  // The store-review account is never shown a payment page: if it somehow lands
  // here (a stale link, a deep link) it is sent straight back to Home.
  useEffect(() => {
    let live = true;
    void isReviewerSession().then((yes) => {
      if (live && yes) router.dismissTo('/');
    });
    return () => {
      live = false;
    };
  }, []);

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
    return () => {
      live = false;
    };
  }, []);

  if (status && gated.current === null) gated.current = status.state !== 'active';
  const context = gated.current === false ? 'extend' : 'gate';

  const goHome = useCallback(() => router.dismissTo('/'), []);

  /**
   * A FREE STUDENT CAN LEAVE. For them this page is a choice, not the gate, but
   * it looks like the gate: no close button and no swipe back, so on iPhone the
   * only way out was to force-quit. (Android's Back leaves the app.) A student
   * with no plan and no free tier still has nothing behind this page.
   */
  // Only after a pass has ended: a student who never had one starts with a
  // pass, never free (Nikhil, 18 Nov 2026).
  //
  // ON BOTH PHONES, AND FROM THE FIRST FRAME (Nikhil, 19 Nov 2026). It was
  // iPhone only, so an Android student on the free plan had no button at all,
  // and it waited for the server's answer, so on iPhone it arrived two or three
  // seconds after the page. `tier` is what the app already knows from the last
  // `/pass` answer, there before anything is asked; the server's `free` agrees
  // with it a moment later.
  const canLeaveFree = status?.state === 'expired' && (tier === 'free' || !!status.free);
  const leave = useCallback(() => {
    if (router.canGoBack()) router.back();
    else router.replace('/');
  }, []);

  /** True from the tap on Pay until the purchase has finished. A ref, not state:
   *  the checks below run from app-focus events and must see it at once. */
  const payingNow = useRef(false);

  /** For the gate only: if a pass has arrived since, there is nothing to sell. */
  const recheck = useCallback(async () => {
    // NOT WHILE A PURCHASE IS RUNNING. Coming back from a UPI app is an app-focus
    // event, and by then the webhook may already have granted the pass: this sent
    // the student Home underneath their own payment, so the confirmation was
    // skipped, doubled, or shown over the wrong screen. `pay` owns what happens
    // next, and shows the one completion page.
    if (gated.current !== true || done || payingNow.current) return;
    // The confirming page is up for a slow bank: it opens the receipt itself (below).
    if (lateNow.current) return;
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
  /**
   * WHILE THE CONFIRMING PAGE WAITS ON A SLOW BANK it asks for the pass itself,
   * and opens the receipt when the paid time arrives: a pass now running, or one
   * that now ends later than it did (for "Add more time").
   */
  useEffect(() => {
    if (!late) return;
    const before = status?.state === 'active' ? status.endsAt.getTime() : null;
    const id = setInterval(async () => {
      const st = await passStatus();
      if (st.state !== 'active' || (before !== null && st.endsAt.getTime() <= before + 60000)) return;
      setLate(false);
      setPending(false);
      if (buying) setDone({ kind: buying.kind, paid: rupeesOf(buying.paise), endsAt: st.endsAt });
      else goHome();
    }, LATE_RECHECK_MS);
    return () => clearInterval(id);
  }, [late, status, buying, goHome]);

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
    if (paying || late) return true;
    // A free student's Back is the page's own back button: it leaves the page, not the app.
    if (gated.current !== false && canLeaveFree) {
      leave();
      return true;
    }
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
        runningKind={status.state === 'active' ? status.record.kind : null}
        neverHadPass={status.state === 'none'}
        endedPlan={status.state === 'expired' && status.record.kind !== 'day' && status.record.kind !== 'week'}
        starterUsed={starterUsed}
        pick={isPick(params.pick) ? params.pick : null}
        promo={(params.promo ?? '').toUpperCase()}
        busy={paying}
        onClose={context === 'extend' ? () => router.back() : canLeaveFree ? leave : undefined}
        freeBehind={context === 'gate' && canLeaveFree}
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
        onPay={async ({ kind, promo, expectedPaise }) => {
          if (paying || payingNow.current) return;
          payingNow.current = true;
          setNotPaid(false);
          setPaying(true);
          setBuying({ kind, paise: expectedPaise });
          try {
            const result = await pay(kind, {
              description: `${PASS_NAME[kind]} ${kind === 'day' || kind === 'week' ? 'pass' : 'plan'}`,
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
              // The confirming page stays up and says so (it was a system
              // alert over the price list, with Pay live under it).
              setPending(true);
              setLate(true);
            } else if (result.status === 'failed' || result.status === 'cancelled') {
              setNotPaid(result.unsure ? 'unsure' : 'sure');
            }
          } catch (err) {
            // Before any money moved: the order could not be made, or its price
            // was not the price on the page.
            Alert.alert("Couldn't start the payment", payErrorMessage(err));
          } finally {
            payingNow.current = false;
            setPaying(false);
          }
        }}
      />
      <PaymentNotice visible={notPaid !== false} unsure={notPaid === 'unsure'} onGone={hideNotPaid} />
      {checkout}
      {confirming || late ? (
        <PaymentConfirming
          mode={confirming === 'checking' ? 'checking' : confirming ? 'paid' : 'late'}
          onNotPaid={stopConfirming}
          onClose={() => {
            // `pending` keeps asking behind the page; the banner says not to pay again.
            setLate(false);
            setNotPaid('unsure');
          }}
          what={buying ? (buying.kind === 'day' || buying.kind === 'week' ? PASS_NAME[buying.kind] : `${PASS_NAME[buying.kind]} · 1 month`) : undefined}
          amount={buying ? rupees(rupeesOf(buying.paise)) : undefined}
          plan={!!buying && buying.kind !== 'day' && buying.kind !== 'week'}
        />
      ) : null}
    </>
  );
}

// 08 "Choose a pass".
//
// Pays through Razorpay (components/paywall/razorpay-checkout.tsx), or - with a
// promo code that brings the total to zero - completes for free. The server
// prices the order and decides whether a code is good; this screen only asks.
// The code itself is never printed here: it is the student's to know.
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Alert, AppState, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ObButton } from '@/components/onboarding-kit';
import { OnbTitle } from '@/components/onboarding/onb-screen';
import { PlanGlow } from '@/components/paywall/light';
import { PaymentConfirming } from '@/components/paywall/payment-confirming';
import { PaymentNotice } from '@/components/paywall/payment-notice';
import { UpiPay, useUpiApps } from '@/components/paywall/upi-pay';
import type { UpiApp } from '@/lib/upi-apps';
import { usePassCheckout } from '@/components/paywall/razorpay-checkout';
import { PlanChooser, type PlansPick } from '@/components/paywall/plan-chooser';
import { PLANS } from '@/components/paywall/plans';
import { usePlan } from '@/lib/free-tier';
import { passStatus, type PassKind } from '@/lib/pass';
import { useAndroidBack } from '@/lib/android-back';
import { PAYMENTS_ON_THIS_DEVICE, payErrorMessage } from '@/lib/payments';
import { rupeesOf, usePromo } from '@/lib/promo';
import {
  EXAMS,
  PASSES,
  ob,
  rupees,
  useDesignScale,
  type ExamKey,
} from '@/constants/onboarding';

/** After a UPI payment the server could not confirm: how long, and how often,
 *  the page keeps asking for the pass. */
const LATE_WATCH_MS = 2 * 60 * 1000;
const LATE_WATCH_EVERY_MS = 5000;

export default function PassScreen() {
  const { ds, fs } = useDesignScale();
  const styles = useMemo(() => createStyles(ds, fs), [ds, fs]);
  const { starterUsed } = usePlan();
  const starters = PASSES.filter((p) => !starterUsed.includes(p.id));

  // Both come back from the promo screen, which replaces this route rather
  // than popping to it — so the pass the student had already chosen has to
  // survive the round trip in params.
  const params = useLocalSearchParams<{ pass?: string; promo?: string; exam?: string }>();
  const isPick = (v?: string): v is PlansPick => PASSES.some((p) => p.id === v) || PLANS.some((p) => p.id === v);
  /** What the student tapped, or what the promo screen carried back. Null: not yet. */
  const [picked, setPass] = useState<PlansPick | null>(isPick(params.pass) ? params.pass : null);
  // THE CHEAPEST STAY IS ALREADY PICKED (Nikhil, 19 Nov 2026). It used to open
  // with nothing picked, so a price was never ours to choose for the student.
  // The new page is built to say "start for ₹7", and a page that says so and
  // then asks the student to tap ₹7 first is one more step for no reason.
  // Nothing is charged until Pay, and the amount is on the button.
  const pass: PlansPick | null = picked ?? starters[0]?.id ?? null;

  const plan = PLANS.find((p) => p.id === pass) ?? null;
  const active = plan ?? PASSES.find((p) => p.id === pass) ?? null;
  // The server prices the code (a typed one, or one made for this student) and
  // this screen shows exactly its answer; with no code the list price stands.
  const { code: promo, quote, checking, auto, refresh } = usePromo(params.promo ?? '', pass as PassKind | null);
  const discount = quote ? rupeesOf(quote.discountPaise) : 0;
  const total = !active ? 0 : quote ? rupeesOf(quote.finalPaise) : active.price;
  const paid = !!active && !!quote?.free;

  const { pay, checkout, confirming, stopConfirming } = usePassCheckout();
  /** Paid, and the bank has not confirmed in time: the confirming page stays up and keeps asking. */
  const [late, setLate] = useState(false);
  const [paying, setPaying] = useState(false);
  /** True from the tap until the purchase is over: the return-to-app check
   *  below must not open the receipt alongside the purchase's own. */
  const payingNow = useRef(false);
  /** The UPI apps on this phone (design B), and which one is starting. */
  const upi = useUpiApps();
  const [upiBusy, setUpiBusy] = useState<string | null>(null);
  /** A payment that did not happen: said in the banner at the top. 'unsure'
   *  when the student came back from a UPI app and the server has no answer yet. */
  const [notPaid, setNotPaid] = useState<null | 'sure' | 'unsure'>(null);
  const hideNotPaid = useCallback(() => setNotPaid(null), []);
  /** A ₹0 code pushes the receipt; a second tap must not push it twice. */
  const leaving = useRef(false);
  /** The already-paid check below, for the watch after an unsure payment. */
  const checkPass = useRef<() => void>(() => {});
  /** After an unsure payment: keep asking for the pass a while longer. */
  const lateWatch = useRef<ReturnType<typeof setInterval> | null>(null);

  /**
   * ALREADY PAID? THEN NOT AGAIN. A student who paid here and had the app close
   * before onboarding finished comes back to this screen (the gate resumes
   * onboarding at the pass). It used to offer Pay again. A pass the server
   * already holds goes straight on to the receipt.
   */
  useEffect(() => {
    let live = true;
    const check = () =>
      passStatus().then((st) => {
        // TWO RECEIPTS. Back from a UPI app this fired too, and opened the
        // receipt (with no amount: "Paid ₹0") a second before the purchase
        // opened its own. While a purchase is on, the purchase decides.
        if (!live || st.state !== 'active' || leaving.current || payingNow.current) return;
        leaving.current = true;
        // No amount: this screen did not take the payment, so it does not know
        // it (the receipt leaves "Paid" out rather than say ₹0). The end date
        // is the server's.
        router.replace({
          pathname: '/pass-active',
          params: { pass: st.record.kind, promo: '', exam: params.exam ?? '', paid: '1', endsAt: st.endsAt.toISOString() },
        });
      });
    checkPass.current = () => void check();
    void check();
    // And again on every return to the app: a payment the bank confirmed late
    // (or one approved in a UPI app) moves the student on by itself.
    const sub = AppState.addEventListener('change', (next) => {
      if (next === 'active') void check();
    });
    return () => {
      live = false;
      sub.remove();
      if (lateWatch.current) clearInterval(lateWatch.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * A UPI PAYMENT THAT MAY STILL LAND. The purchase looked for 20 seconds; the
   * webhook can be later than that. For two more minutes the page keeps asking,
   * and the already-paid check opens the receipt the moment the pass exists.
   */
  const watchLate = () => {
    if (lateWatch.current) clearInterval(lateWatch.current);
    const until = Date.now() + LATE_WATCH_MS;
    lateWatch.current = setInterval(() => {
      if (Date.now() > until || leaving.current) {
        if (lateWatch.current) clearInterval(lateWatch.current);
        lateWatch.current = null;
        // Still nothing after the whole watch: the confirming page comes down
        // and the banner says what the student needs to know.
        setLate((was) => {
          if (was && !leaving.current) setNotPaid('unsure');
          return false;
        });
        return;
      }
      checkPass.current();
    }, LATE_WATCH_EVERY_MS);
  };

  const buy = async (app?: UpiApp) => {
    // payingNow, not only `paying`: two taps in one frame both saw `paying`
    // false, and the second one flashed "Payment not made" over a live payment.
    if (!active || paying || payingNow.current) return;
    setNotPaid(null);
    setPaying(true);
    payingNow.current = true;
    setUpiBusy(app?.packageName ?? null);
    try {
      const result = await pay(active.id, {
        description: plan ? `${plan.name} plan` : `${active.name} pass`,
        promo: quote && !quote.free ? quote.code : undefined,
        // The sheet only opens for the amount on the button.
        expectedPaise: Math.round(total * 100),
        upiApp: app?.packageName,
      });
      if (result.status === 'paid') {
        // The pass already exists on the server; the receipt must not start another.
        leaving.current = true;
        router.push({
          pathname: '/pass-active',
          params: {
            pass,
            promo: '',
            exam: params.exam ?? '',
            paid: '1',
            amount: String(rupeesOf(result.amountPaise)),
          },
        });
      } else if (result.status === 'pending') {
        // THE SAME PAGE, NOT A POP-UP (Nikhil, 19 Nov 2026). This was a system
        // alert over the price list, and under it Pay was live again: a second
        // loading state, and a way to pay twice. The confirming page stays up,
        // says the bank is slow, and keeps asking for the pass.
        setLate(true);
        watchLate();
      } else if (result.status === 'failed' || result.status === 'cancelled') {
        setNotPaid(result.unsure ? 'unsure' : 'sure');
        if (result.unsure) watchLate();
      }
    } catch (err) {
      Alert.alert("Couldn't start the payment", payErrorMessage(err));
    } finally {
      payingNow.current = false;
      setPaying(false);
      setUpiBusy(null);
      // A refused or just-spent code must not stay on the page.
      refresh();
    }
  };

  /** Picking Pro or Max brings the plans to the top; the day and the week are a scroll away above. */
  const { height: windowHeight } = useWindowDimensions();
  const scroll = useRef<ScrollView>(null);
  const chooserY = useRef(0);
  const planOpen = !!plan && starters.length > 0;
  const toPlans = (y: number) => {
    // After the frame in which the plan opened: the page is only tall enough to move once it has.
    requestAnimationFrame(() => scroll.current?.scrollTo({ y: chooserY.current + y, animated: true }));
  };

  // Android's Back is held while a payment is running or being confirmed: it
  // used to leave the page from under its own purchase.
  useAndroidBack(() => paying || !!confirming || late);

  const toPromo = () =>
    router.push({ pathname: '/promo', params: { pass, promo: params.promo ?? '', exam: params.exam ?? '' } });

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <PlanGlow height={ds(340)} />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ScrollView
          ref={scroll}
          // Room below an opened plan, or there is nowhere for the page to move to.
          contentContainerStyle={[styles.content, planOpen ? { paddingBottom: windowHeight * 0.5 } : null]}
          showsVerticalScrollIndicator={false}>
          {/* The same heading, size and place as every other onboarding step. */}
          <OnbTitle title={starters[0] ? `Start for ${rupees(starters[0].price)}` : 'Choose your plan'} inset={ds(20)} />
          <View style={styles.chooser} onLayout={(e) => (chooserY.current = e.nativeEvent.layout.y)}>
          <PlanChooser
            pick={pass}
            onPick={setPass}
            starters={starters}
            onPlanOpened={toPlans}
            promoLine={
              discount
                ? `${quote?.code ?? promo} applied · −${rupees(discount)}`
                : // A code is in force but could not be priced: say so, so a
                  // student is never charged full price thinking it applied.
                  promo && !quote && !checking && !auto
                  ? `${promo} couldn't be applied`
                  : 'Have a promo code?'
            }
            promoQuiet={!quote && !!promo && !checking && !auto}
            onPromo={toPromo}
          />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          {active && !paid && PAYMENTS_ON_THIS_DEVICE && upi.apps && upi.apps.length > 0 ? (
            <UpiPay
              amount={rupees(total)}
              apps={upi.apps}
              last={upi.last}
              busy={upiBusy}
              disabled={paying || checking}
              onPick={(app) => void buy(app)}
              onOther={() => void buy()}
            />
          ) : (<>
          {/* Says what is owed, not what will happen. */}
          <ObButton
            label={
              !active
                ? 'Choose one to continue'
                : paid
                  ? 'Complete for ₹0'
                  : PAYMENTS_ON_THIS_DEVICE
                    ? `Pay ${rupees(total)}`
                    : // iPhone: testers come in with a code (lib/payments.ts).
                      'Enter a promo code'
            }
            trailing={paid || PAYMENTS_ON_THIS_DEVICE ? (plan ? `${plan.name} · 1 month` : active?.name) : undefined}
            disabled={!active || paying || checking}
            withArrow={paid}
            onPress={() => {
              if (!active || leaving.current) return;
              if (!paid && !PAYMENTS_ON_THIS_DEVICE) return toPromo();
              if (!paid) return void buy();
              leaving.current = true;
              router.push({
                pathname: '/pass-active',
                params: { pass, promo: quote?.code ?? '', exam: params.exam ?? '' },
              });
            }}
          />
          {/* No free way past this page (Nikhil, 18 Nov 2026): a new student
              starts with a pass or a plan. The free plan is only for after a
              pass has ended, and it is never offered here. */}
          </>)}
        </View>
      </SafeAreaView>
      <PaymentNotice visible={notPaid !== null} unsure={notPaid === 'unsure'} onGone={hideNotPaid} />
      {checkout}
      {confirming || late ? (
        <PaymentConfirming
          what={plan ? `${plan.name} · 1 month` : active?.name}
          amount={active ? rupees(total) : undefined}
          plan={!!plan}
          mode={confirming === 'checking' ? 'checking' : confirming ? 'paid' : 'late'}
          onNotPaid={stopConfirming}
          onClose={() => {
            // The watch goes on behind the page; the banner says not to pay again.
            setLate(false);
            setNotPaid('unsure');
          }}
        />
      ) : null}
    </View>
  );
}

/** Exported so pass-active can name the exam without re-reading the profile. */
export function examLabel(key: string | undefined) {
  const k = (key ?? 'jee') as ExamKey;
  return (EXAMS[k] ?? EXAMS.jee).name;
}

function createStyles(ds: (size: number) => number, fs: (size: number) => number) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: ob.surface },
    safeArea: { flex: 1 },
    content: { paddingBottom: ds(12) },
    chooser: { paddingHorizontal: ds(20), paddingTop: ds(22) },
    footer: { paddingHorizontal: ds(20), paddingTop: ds(8), paddingBottom: ds(10), gap: ds(10) },
  });
}

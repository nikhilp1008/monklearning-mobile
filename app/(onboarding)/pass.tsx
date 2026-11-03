// 08 "Choose a pass".
//
// Pays through Razorpay (components/paywall/razorpay-checkout.tsx), or - with a
// promo code that brings the total to zero - completes for free. The server
// prices the order and decides whether a code is good; this screen only asks.
// The code itself is never printed here: it is the student's to know.
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Alert, AppState, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ObButton } from '@/components/onboarding-kit';
import { PaymentConfirming } from '@/components/paywall/payment-confirming';
import { PaymentNotice } from '@/components/paywall/payment-notice';
import { UpiPay, useUpiApps } from '@/components/paywall/upi-pay';
import type { UpiApp } from '@/lib/upi-apps';
import { usePassCheckout } from '@/components/paywall/razorpay-checkout';
import { PlanChooser, type PlansPick } from '@/components/paywall/plan-chooser';
import { PLANS } from '@/components/paywall/plans';
import { PressableScale } from '@/components/pressable-scale';
import { useScale } from '@/constants/scale';
import { useFreeTier, usePlan } from '@/lib/free-tier';
import { passStatus, type PassKind } from '@/lib/pass';
import { PAYMENTS_ON_THIS_DEVICE, payErrorMessage } from '@/lib/payments';
import { rupeesOf, usePromo } from '@/lib/promo';
import {
  EXAMS,
  PASSES,
  ob,
  obFont,
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
  const { scale } = useScale();
  const styles = useMemo(() => createStyles(ds, fs), [ds, fs]);
  const freeTier = useFreeTier();
  const { starterUsed } = usePlan();
  const starters = PASSES.filter((p) => !starterUsed.includes(p.id));

  // Both come back from the promo screen, which replaces this route rather
  // than popping to it — so the pass the student had already chosen has to
  // survive the round trip in params.
  const params = useLocalSearchParams<{ pass?: string; promo?: string; exam?: string }>();
  // Nothing preselected. A highlighted row reads as an answer already given,
  // and this one costs money — the student should pick it, not un-pick ours.
  const isPick = (v?: string): v is PlansPick => PASSES.some((p) => p.id === v) || PLANS.some((p) => p.id === v);
  const [pass, setPass] = useState<PlansPick | null>(isPick(params.pass) ? params.pass : null);

  const plan = PLANS.find((p) => p.id === pass) ?? null;
  const active = plan ?? PASSES.find((p) => p.id === pass) ?? null;
  // The server prices the code (a typed one, or one made for this student) and
  // this screen shows exactly its answer; with no code the list price stands.
  const { code: promo, quote, checking, auto, refresh } = usePromo(params.promo ?? '', pass as PassKind | null);
  const discount = quote ? rupeesOf(quote.discountPaise) : 0;
  const total = !active ? 0 : quote ? rupeesOf(quote.finalPaise) : active.price;
  const paid = !!active && !!quote?.free;

  const { pay, checkout, confirming } = usePassCheckout();
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
  /** The free path pushes the receipt; a second tap must not push it twice. */
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
        router.replace({ pathname: '/pass-active', params: { pass: st.record.kind, promo: '', exam: params.exam ?? '', paid: '1' } });
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
        Alert.alert(
          'Payment received',
          `Your bank is still confirming it. Your ${plan ? 'plan' : 'pass'} will start on its own in a few minutes — you don't need to pay again.`
        );
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

  const toPromo = () =>
    router.push({ pathname: '/promo', params: { pass, promo: params.promo ?? '', exam: params.exam ?? '' } });

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Text accessibilityRole="header" numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.85} style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(26), lineHeight: scale(32), letterSpacing: scale(-0.5), color: ob.ink, marginBottom: scale(20) }}>
            Choose what works for you
          </Text>
          <PlanChooser
            pick={pass}
            onPick={setPass}
            starters={starters}
            passesFirst
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
          {freeTier.free && (
            // The free tier: a way past the price list. Not hidden and not
            // shouted: a plan is what this screen is for, and this is what the
            // student gets if they are not ready to pay yet.
            <PressableScale
              style={styles.freeLink}
              disabled={paying || checking}
              onPress={() => {
                if (leaving.current || payingNow.current) return;
                leaving.current = true;
                router.push('/teacher');
              }}>
              <Text style={styles.freeLinkText}>Continue with the free plan</Text>
            </PressableScale>
          )}
          </>)}
        </View>
      </SafeAreaView>
      <PaymentNotice visible={notPaid !== null} unsure={notPaid === 'unsure'} onGone={hideNotPaid} />
      {checkout}
      {confirming ? <PaymentConfirming /> : null}
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
    content: { paddingHorizontal: ds(20), paddingTop: ds(18), paddingBottom: ds(12) },
    freeLink: { alignSelf: 'center', paddingVertical: ds(12), marginTop: ds(4) },
    freeLinkText: {
      fontFamily: obFont.m500,
      fontSize: fs(15),
      color: ob.link,
    },
    footer: { paddingHorizontal: ds(20), paddingTop: ds(8), paddingBottom: ds(10), gap: ds(10) },
  });
}

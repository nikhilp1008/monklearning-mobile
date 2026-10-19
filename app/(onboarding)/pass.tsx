// 08 "Choose a pass".
//
// Pays through Razorpay (components/paywall/razorpay-checkout.tsx), or - with a
// promo code that brings the total to zero - completes for free. The server
// prices the order and decides whether a code is good; this screen only asks.
// The code itself is never printed here: it is the student's to know.
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Alert, AppState, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { ObButton } from '@/components/onboarding-kit';
import { PaymentConfirming } from '@/components/paywall/payment-confirming';
import { usePassCheckout } from '@/components/paywall/razorpay-checkout';
import { OnbTitle } from '@/components/onboarding/onb-screen';
import { SkyChoice } from '@/components/onboarding/sky-choice';
import { PressableScale } from '@/components/pressable-scale';
import { passStatus } from '@/lib/pass';
import { PAYMENTS_ON_THIS_DEVICE, payErrorMessage } from '@/lib/payments';
import { rupeesOf, usePromo } from '@/lib/promo';
import {
  EXAMS,
  INCLUDED,
  PASSES,
  ob,
  obFont,
  rupees,
  useDesignScale,
  type ExamKey,
  type PassKey,
} from '@/constants/onboarding';

function ArrowGlyph({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path
        d="M2 8h11M9 3.5 13.5 8 9 12.5"
        stroke={ob.link}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default function PassScreen() {
  const { ds, fs, tracking } = useDesignScale();
  const styles = useMemo(() => createStyles(ds, fs, tracking), [ds, fs, tracking]);

  // Both come back from the promo screen, which replaces this route rather
  // than popping to it — so the pass the student had already chosen has to
  // survive the round trip in params.
  const params = useLocalSearchParams<{ pass?: string; promo?: string; exam?: string }>();
  // Nothing preselected. A highlighted row reads as an answer already given,
  // and this one costs money — the student should pick it, not un-pick ours.
  const [pass, setPass] = useState<PassKey | null>(
    PASSES.some((p) => p.id === params.pass) ? (params.pass as PassKey) : null
  );

  const active = PASSES.find((p) => p.id === pass) ?? null;
  // The server prices the code (a typed one, or one made for this student) and
  // this screen shows exactly its answer; with no code the list price stands.
  const { code: promo, quote, checking, refresh } = usePromo(params.promo ?? '', pass);
  const discount = quote ? rupeesOf(quote.discountPaise) : 0;
  const total = !active ? 0 : quote ? rupeesOf(quote.finalPaise) : active.price;
  const paid = !!active && !!quote?.free;

  // SkyChoice gives the tap its haptic.
  const select = (id: PassKey) => setPass(id);

  const { pay, checkout, confirming } = usePassCheckout();
  const [paying, setPaying] = useState(false);
  /** The free path pushes the receipt; a second tap must not push it twice. */
  const leaving = useRef(false);

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
        if (!live || st.state !== 'active' || leaving.current) return;
        leaving.current = true;
        const kind = st.record.kind === 'day' || st.record.kind === 'week' ? st.record.kind : 'week';
        router.replace({ pathname: '/pass-active', params: { pass: kind, promo: '', exam: params.exam ?? '', paid: '1' } });
      });
    void check();
    // And again on every return to the app: a payment the bank confirmed late
    // (or one approved in a UPI app) moves the student on by itself.
    const sub = AppState.addEventListener('change', (next) => {
      if (next === 'active') void check();
    });
    return () => {
      live = false;
      sub.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buy = async () => {
    if (!active || paying) return;
    setPaying(true);
    try {
      const result = await pay(active.id, {
        description: `${active.name} pass`,
        promo: quote && !quote.free ? quote.code : undefined,
        // The sheet only opens for the amount on the button.
        expectedPaise: Math.round(total * 100),
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
          "Your bank is still confirming it. Your pass will start on its own in a few minutes — you don't need to pay again."
        );
      } else if (result.status === 'failed') {
        Alert.alert('Payment not completed', result.message);
      }
    } catch (err) {
      Alert.alert("Couldn't start the payment", payErrorMessage(err));
    } finally {
      setPaying(false);
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
          {/* The onboarding's shared heading: no back arrow, same spot as every
              question before it. OnbTitle pads itself to 30, which this
              screen's content already is, so it is pulled back out by that. */}
          <View style={styles.titleBleed}>
            <OnbTitle title="Start with a pass" sub="Live classes, doubts and practice. Nothing renews on its own." />
          </View>

          <View style={styles.rows}>
            {PASSES.map((p) => (
              <SkyChoice
                key={p.id}
                shape="row"
                label={p.name}
                trailing={rupees(p.price)}
                selected={pass === p.id}
                onPress={() => select(p.id)}
              />
            ))}

            {/* A line, not a field. Nothing is typed here — the box implied an
                input and sat in a stack of two other boxes that ARE choices,
                so it read as a third pass. */}
            <PressableScale style={styles.promoLink} hitSlop={10} onPress={toPromo}>
              <Text style={styles.promoLinkText}>
                {discount
                  ? `${quote?.code ?? promo} applied · −${rupees(discount)}`
                  : promo && !quote && !checking
                    ? // A code is in force but could not be priced: say so, so a
                      // student is never charged full price thinking it applied.
                      `${promo} couldn't be applied`
                    : 'Have a promo code?'}
              </Text>
              <ArrowGlyph size={ds(13)} />
            </PressableScale>
          </View>

          <View style={styles.included}>
            <Text style={styles.overline}>BOTH PASSES INCLUDE</Text>
            {/* No teachers before the payment: the teacher is met on the very
                next screens, so their row is left off here (the paywall keeps it). */}
            {INCLUDED.filter(([label]) => label !== 'Drona & Vedha').map(([label, value], i, rows) => (
              <View
                key={label}
                style={[styles.includedRow, i === rows.length - 1 && styles.includedRowLast]}>
                <Text style={styles.includedLabel}>{label}</Text>
                <Text style={styles.includedValue}>{value}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.footer}>
          {/* Says what is owed, not what will happen. */}
          <ObButton
            label={
              !active
                ? 'Choose a pass'
                : paid
                  ? 'Complete for ₹0'
                  : PAYMENTS_ON_THIS_DEVICE
                    ? `Pay ${rupees(total)}`
                    : // iPhone: testers come in with a code (lib/payments.ts).
                      'Enter a promo code'
            }
            trailing={paid || PAYMENTS_ON_THIS_DEVICE ? active?.name : undefined}
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
          {!!active && (
            <Text style={styles.footNote}>One payment. Nothing renews on its own.</Text>
          )}
        </View>
      </SafeAreaView>
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

function createStyles(
  ds: (size: number) => number,
  fs: (size: number) => number,
  tracking: (em: number, fontSize: number) => number
) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: ob.surface },
    safeArea: { flex: 1 },
    content: { paddingHorizontal: ds(30), paddingBottom: ds(24) },
    titleBleed: { marginHorizontal: -ds(30) },
    sub: {
      fontFamily: obFont.r400,
      fontSize: fs(15),
      lineHeight: fs(22),
      color: ob.ink80,
      marginTop: ds(14),
    },
    rows: { marginTop: ds(22), gap: ds(10) },
    promoLink: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: ds(6),
      alignSelf: 'flex-start',
      paddingVertical: ds(6),
    },
    promoLinkText: {
      fontFamily: obFont.m500,
      fontSize: fs(15),
      color: ob.link,
    },
    included: { marginTop: ds(26) },
    overline: {
      fontFamily: obFont.sb600,
      fontSize: fs(10),
      letterSpacing: tracking(0.14, 10),
      color: ob.ink55,
      marginBottom: ds(8),
    },
    includedRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: ds(12),
      paddingVertical: ds(9),
      borderTopWidth: 1,
      borderTopColor: ob.rule,
    },
    includedRowLast: { borderBottomWidth: 1, borderBottomColor: ob.rule },
    includedLabel: { fontFamily: obFont.r400, fontSize: fs(13.5), color: ob.ink80 },
    includedValue: { fontFamily: obFont.r400, fontSize: fs(13.5), color: ob.ink },
    footer: { paddingHorizontal: ds(30), paddingBottom: ds(16), gap: ds(10) },
    footNote: {
      fontFamily: obFont.r400,
      fontSize: fs(13),
      lineHeight: fs(19),
      textAlign: 'center',
      color: ob.ink55,
    },
  });
}

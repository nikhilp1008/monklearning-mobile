// "Promo code", for a student whose pass has already ended.
//
// The same screen as onboarding's, for the same reason: a code is typed, not
// chosen, and a typing box in a stack of four rows that ARE choices reads as a
// fifth plan. It used to open in place on the plans screen and grow the page by
// a box mid-decision. It is a push and a return now.
//
// The plan the student had picked travels here in `pick` and goes back with the
// code, because the return is a `replace` rather than a pop — the plans screen
// remounts, and has to be holding both.
//
// The server checks the code (lib/promo.ts): what it is worth on THIS plan,
// whether it has run out. A code can be good for some plans and not others, so
// a plan has to be picked first; the seven-day offer at the foot of the plans
// page is already a discount and takes no code.
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { KeyboardSpacer } from '@/components/keyboard-spacer';
import { ObButton, ObHeader } from '@/components/onboarding-kit';
import { PLANS, WINBACK } from '@/components/paywall/plans';
import type { Pick } from '@/components/paywall/screens';
import { ob, obFont, rupees, useDesignScale } from '@/constants/onboarding';
import { checkPromo, rupeesOf, type Quote } from '@/lib/promo';
import type { PassKind } from '@/lib/pass';

const isPick = (v?: string): v is Pick => v === 'week' || PLANS.some((p) => p.id === v);

export default function PlansPromoScreen() {
  const { ds, fs, tracking } = useDesignScale();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(ds, fs, tracking), [ds, fs, tracking]);

  const params = useLocalSearchParams<{ pick?: string; promo?: string }>();
  const pick = isPick(params.pick) ? params.pick : null;
  const plan = pick === 'week' ? WINBACK : (PLANS.find((p) => p.id === pick) ?? null);
  const price = pick === 'week' ? WINBACK.now : plan && 'price' in plan ? plan.price : 0;

  const [draft, setDraft] = useState((params.promo ?? '').toUpperCase());
  const [rejected, setRejected] = useState(false);
  const [message, setMessage] = useState('');
  const [checking, setChecking] = useState(false);
  const [quote, setQuote] = useState<Quote | null>(null);
  const shake = useRef(new Animated.Value(0)).current;

  const valid = !!quote;
  /** Whether a code can be checked at all: it is checked against a plan. */
  const codeable = !!plan && pick !== 'week';

  // Same 3-step shake as the OTP screen's bad code, so the two failures read
  // alike — a wrong code has to be felt, not only read.
  const reject = () => {
    setRejected(true);
    shake.setValue(0);
    Animated.sequence([
      Animated.timing(shake, { toValue: 1, duration: 60, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shake, { toValue: -1, duration: 60, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shake, { toValue: 0, duration: 60, easing: Easing.linear, useNativeDriver: true }),
    ]).start();
  };

  const apply = async () => {
    if (checking || !draft.trim()) return;
    if (!codeable) {
      setMessage(
        pick === 'week'
          ? 'The 7-day offer is already a discount and takes no code. Pick a plan above it.'
          : 'Pick a plan first, then add your code.'
      );
      return reject();
    }
    setChecking(true);
    const answer = await checkPromo(draft, pick as PassKind);
    setChecking(false);
    if (!answer.valid) {
      setQuote(null);
      setMessage(answer.message);
      return reject();
    }
    setQuote(answer.quote);
    // BACK TO THE SAME PLANS PAGE, carrying the code. It used to `replace`
    // itself with a SECOND plans page, which left the first one underneath:
    // after paying, Android's Back revealed "Your pass has ended" again. The
    // page picks up the new pick and code from its params.
    router.dismissTo({
      pathname: '/plans',
      params: { pick: pick ?? '', promo: answer.quote.code },
    });
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ObHeader title="Promo code" />
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <Text style={styles.sub}>Add one if you have it.</Text>

            <Animated.View
              style={[
                styles.field,
                valid && styles.fieldOn,
                rejected && !valid && styles.fieldBad,
                {
                  transform: [
                    {
                      translateX: shake.interpolate({
                        inputRange: [-1, 1],
                        outputRange: [-ds(7), ds(7)],
                      }),
                    },
                  ],
                },
              ]}>
              <Text style={styles.fieldLabel}>CODE</Text>
              <TextInput
                style={styles.input}
                value={draft}
                onChangeText={(t) => {
                  setDraft(t.toUpperCase());
                  setRejected(false);
                  setQuote(null);
                }}
                placeholder="YOUR CODE"
                placeholderTextColor={ob.placeholder}
                autoCapitalize="characters"
                autoCorrect={false}
                autoFocus
                returnKeyType="done"
                onSubmitEditing={apply}
              />
            </Animated.View>

            {/* A ledger needs a price to be a ledger. With no plan picked the
                screen says what the code does instead of inventing one. */}
            {plan ? (
              <View style={styles.ledger}>
                <View style={styles.ledgerRow}>
                  <Text style={styles.ledgerLabel}>{plan.name}</Text>
                  <Text style={styles.ledgerValue}>{rupees(price)}</Text>
                </View>
                <View style={[styles.ledgerRow, styles.ledgerRowLast]}>
                  <Text style={styles.ledgerLabel}>With this code</Text>
                  <Text style={[styles.ledgerValue, valid && styles.ledgerValueOn]}>
                    {rupees(quote ? rupeesOf(quote.finalPaise) : price)}
                  </Text>
                </View>
              </View>
            ) : null}

            <Text style={[styles.hint, rejected && !valid && styles.hintBad]}>
              {quote
                ? quote.free
                  ? `Valid code. The ${plan?.name ?? 'plan'} plan is free.`
                  : `Valid code. ${rupees(rupeesOf(quote.discountPaise))} off the ${plan?.name ?? 'plan'} plan.`
                : rejected
                  ? message || 'That code isn’t valid. Check the spelling and try again.'
                  : 'Enter your code exactly as you received it.'}
            </Text>
          </ScrollView>

          <View style={styles.footer}>
            <ObButton label={checking ? 'Checking…' : 'Apply code'} disabled={!draft.trim() || checking} onPress={apply} />
          </View>
          <KeyboardSpacer bottomInset={insets.bottom} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

/** Transcribed from `app/(onboarding)/promo.tsx`, so the two screens match. */
function createStyles(
  ds: (size: number) => number,
  fs: (size: number) => number,
  tracking: (em: number, fontSize: number) => number
) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: ob.surface },
    safeArea: { flex: 1 },
    flex: { flex: 1 },
    content: { paddingHorizontal: ds(30), paddingBottom: ds(24) },
    sub: {
      fontFamily: obFont.r400,
      fontSize: fs(16),
      lineHeight: fs(23),
      color: ob.ink80,
      marginTop: ds(14),
    },
    field: {
      marginTop: ds(28),
      borderWidth: 1.5,
      borderColor: ob.fieldBorder,
      borderRadius: ds(16),
      paddingHorizontal: ds(18),
      paddingVertical: ds(14),
      gap: ds(6),
    },
    fieldOn: { borderColor: ob.amber },
    fieldBad: { borderColor: '#DD4433' },
    fieldLabel: {
      fontFamily: obFont.sb600,
      fontSize: fs(10),
      letterSpacing: tracking(0.14, 10),
      color: ob.ink55,
    },
    input: {
      fontFamily: obFont.r400,
      fontSize: fs(19),
      letterSpacing: tracking(0.06, 19),
      color: ob.ink,
      padding: 0,
    },
    ledger: { marginTop: ds(20) },
    ledgerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: ds(11),
      borderTopWidth: 1,
      borderTopColor: ob.rule,
    },
    ledgerRowLast: { borderBottomWidth: 1, borderBottomColor: ob.rule },
    ledgerLabel: { fontFamily: obFont.r400, fontSize: fs(15), color: ob.ink80 },
    ledgerValue: { fontFamily: obFont.m500, fontSize: fs(15), color: ob.ink },
    ledgerValueOn: { color: ob.amberDark },
    hint: {
      fontFamily: obFont.r400,
      fontSize: fs(13),
      lineHeight: fs(20),
      color: ob.ink55,
      marginTop: ds(14),
    },
    hintBad: { color: '#DD4433' },
    footer: { paddingHorizontal: ds(30), paddingBottom: ds(16), gap: ds(4) },
  });
}

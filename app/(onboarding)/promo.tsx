// 09 "Promo code".
//
// One code, and it clears the balance rather than discounting it. The handoff
// wired two at partial discounts (FIRST100 −₹75, MONK50 −₹50), which cannot
// complete without a payment sheet to take the remainder — so until there is
// one, a code either brings the total to zero or it is decoration.
//
// Nothing is checked on a server. The code is a constant in
// constants/onboarding.ts and this screen compares against it in the client;
// when billing is real this whole check moves behind an endpoint.
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
import { SafeAreaView } from 'react-native-safe-area-context';

import { ObBack, ObButton } from '@/components/onboarding-kit';
import { PressableScale } from '@/components/pressable-scale';
import {
  PASSES,
  ob,
  obFont,
  promoDiscount,
  rupees,
  useDesignScale,
  type PassKey,
} from '@/constants/onboarding';

export default function PromoScreen() {
  const { ds, fs, tracking } = useDesignScale();
  const styles = useMemo(() => createStyles(ds, fs, tracking), [ds, fs, tracking]);

  const params = useLocalSearchParams<{ pass?: string; promo?: string; exam?: string }>();
  const passId = (PASSES.some((p) => p.id === params.pass) ? params.pass : 'week') as PassKey;
  const pass = PASSES.find((p) => p.id === passId) ?? PASSES[1];

  const [draft, setDraft] = useState((params.promo ?? '').toUpperCase());
  const [rejected, setRejected] = useState(false);
  const shake = useRef(new Animated.Value(0)).current;

  const discount = promoDiscount(draft, pass.price);
  const valid = discount > 0;

  // A wrong code has to be felt, not just read: the hint sits below the fold of
  // attention while the field is where the eye already is. Same 3-step shake
  // the OTP screen uses for a bad code, so the two failures read alike.
  const reject = () => {
    setRejected(true);
    shake.setValue(0);
    Animated.sequence([
      Animated.timing(shake, { toValue: 1, duration: 60, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shake, { toValue: -1, duration: 60, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shake, { toValue: 0, duration: 60, easing: Easing.linear, useNativeDriver: true }),
    ]).start();
  };

  const apply = () => {
    if (!valid) return reject();
    // `replace`, not `back`: the pass screen has to remount holding the code,
    // and a pop would restore the instance that never had it.
    router.replace({
      pathname: '/pass',
      params: { pass: passId, promo: draft.trim().toUpperCase(), exam: params.exam ?? '' },
    });
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ObBack />
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <Text style={styles.heading}>Promo code</Text>
            <Text style={styles.sub}>Add one if you have it.</Text>

            <Animated.View
              style={[
                styles.field,
                valid && styles.fieldOn,
                rejected && !valid && styles.fieldBad,
                { transform: [{ translateX: shake.interpolate({ inputRange: [-1, 1], outputRange: [-ds(7), ds(7)] }) }] },
              ]}>
              <Text style={styles.fieldLabel}>CODE</Text>
              <TextInput
                style={styles.input}
                value={draft}
                onChangeText={(t) => {
                  setDraft(t.toUpperCase());
                  setRejected(false);
                }}
                placeholder="FIRST100"
                placeholderTextColor={ob.placeholder}
                autoCapitalize="characters"
                autoCorrect={false}
                autoFocus
                returnKeyType="done"
                onSubmitEditing={apply}
              />
            </Animated.View>

            <View style={styles.ledger}>
              <View style={styles.ledgerRow}>
                <Text style={styles.ledgerLabel}>{pass.name} pass</Text>
                <Text style={styles.ledgerValue}>{rupees(pass.price)}</Text>
              </View>
              <View style={[styles.ledgerRow, styles.ledgerRowLast]}>
                <Text style={styles.ledgerLabel}>With this code</Text>
                <Text style={[styles.ledgerValue, valid && styles.ledgerValueOn]}>
                  {rupees(Math.max(0, pass.price - discount))}
                </Text>
              </View>
            </View>

            <Text style={[styles.hint, rejected && !valid && styles.hintBad]}>
              {valid
                ? `Valid code. The ${pass.name} pass is free.`
                : rejected
                  ? 'That code isn’t recognised. Check the spelling and try again.'
                  : 'Enter your code exactly as you received it.'}
            </Text>
          </ScrollView>

          <View style={styles.footer}>
            <ObButton label="Apply code" disabled={!draft.trim()} onPress={apply} />
            {/* No "Skip". Skipping lands on a pass that cannot be paid for,
                which is a dead end rather than a shortcut — the back chevron
                is there for anyone who wants out. */}
            <PressableScale hitSlop={12} onPress={() => router.back()} style={styles.backRow}>
              <Text style={styles.backText}>Back to passes</Text>
            </PressableScale>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

function createStyles(
  ds: (size: number) => number,
  fs: (size: number) => number,
  tracking: (em: number, fontSize: number) => number
) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: ob.surface },
    safeArea: { flex: 1 },
    flex: { flex: 1 },
    content: { paddingHorizontal: ds(30), paddingTop: ds(34), paddingBottom: ds(24) },
    heading: {
      fontFamily: obFont.m500,
      fontSize: fs(22.5),
      lineHeight: fs(28),
      letterSpacing: tracking(-0.02, 22.5),
      color: ob.ink,
    },
    sub: {
      fontFamily: obFont.r400,
      fontSize: fs(16),
      lineHeight: fs(23),
      color: ob.ink80,
      marginTop: ds(12),
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
    backRow: { height: ds(46), alignItems: 'center', justifyContent: 'center' },
    backText: { fontFamily: obFont.r400, fontSize: fs(16), color: ob.ink55 },
  });
}

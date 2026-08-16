// 03a "Phone number" + 03b "Same page — OTP slides in".
//
// These are ONE screen in the handoff, not two routes: the OTP block is
// revealed below the number and the entry card collapses into a recap card
// with a "Change" affordance. Hence a single file with a 'phone' | 'otp'
// state machine rather than a second route.
//
// Every number below is a raw design px off
// design/Onboarding Final v2.dc.html (lines 89-161) passed through ds(),
// which maps the 430pt design frame onto the device. Hairlines (1 / 1.5) and
// the 2px caret stay literal — sub-pixel borders disappear on scale-down.
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LeaderRow, ObButton } from '@/components/onboarding-kit';
import { RETURNING_USER_PHONE, ob, obFont, useDesignScale } from '@/constants/onboarding';

const PHONE_LENGTH = 10;
const CODE_LENGTH = 6;
const RESEND_SECONDS = 24;

/** `9821143307` -> `98211 43307`; partial input keeps the same grouping. */
function formatPhone(digits: string) {
  return `${digits.slice(0, 5)} ${digits.slice(5)}`.trim();
}

function onlyDigits(text: string, max: number) {
  return text.replace(/[^0-9]/g, '').slice(0, max);
}

type Stage = 'phone' | 'otp';

export default function PhoneScreen() {
  const { ds, tracking } = useDesignScale();
  const s = useMemo(() => createStyles(ds, tracking), [ds, tracking]);

  const [stage, setStage] = useState<Stage>('phone');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);

  const phoneInput = useRef<TextInput>(null);
  const codeInput = useRef<TextInput>(null);

  // `pop` runs per box as its digit appears. The handoff staggers the four
  // revealed digits 50/130/210/290ms, i.e. 50ms + 80ms per digit *in that
  // batch* — so a pasted / SMS-autofilled code reproduces the mockup exactly
  // while a hand-typed digit pops after a flat 50ms instead of waiting out
  // its index.
  const popAnims = useRef(
    Array.from({ length: CODE_LENGTH }, () => new Animated.Value(1)),
  ).current;
  const prevCodeLength = useRef(0);

  // Keep the caret where the OS keyboard is pointing.
  useEffect(() => {
    const id = setTimeout(() => {
      if (stage === 'phone') phoneInput.current?.focus();
      else codeInput.current?.focus();
    }, 260);
    return () => clearTimeout(id);
  }, [stage]);

  useEffect(() => {
    if (stage !== 'otp' || secondsLeft === 0) return;
    const id = setTimeout(() => setSecondsLeft((n) => n - 1), 1000);
    return () => clearTimeout(id);
  }, [stage, secondsLeft]);

  // "otp: string(6) // auto-submit on the sixth digit" — README, State
  // management. Delayed just past `pop` so the last digit is seen landing.
  useEffect(() => {
    if (stage !== 'otp' || code.length !== CODE_LENGTH) return;
    const id = setTimeout(() => {
      codeInput.current?.blur();
      verify();
    }, 420);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, code]);

  const handleCodeChange = (text: string) => {
    const next = onlyDigits(text, CODE_LENGTH);
    const from = prevCodeLength.current;
    for (let i = from; i < next.length; i += 1) {
      const anim = popAnims[i];
      anim.setValue(0);
      Animated.timing(anim, {
        toValue: 1,
        duration: 350,
        delay: 50 + (i - from) * 80,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
    prevCodeLength.current = next.length;
    setCode(next);
  };

  const sendOtp = () => {
    setCode('');
    prevCodeLength.current = 0;
    setSecondsLeft(RESEND_SECONDS);
    setStage('otp');
  };

  const changeNumber = () => {
    setCode('');
    prevCodeLength.current = 0;
    setStage('phone');
  };

  const resend = () => {
    if (secondsLeft > 0) return;
    setCode('');
    prevCodeLength.current = 0;
    setSecondsLeft(RESEND_SECONDS);
    codeInput.current?.focus();
  };

  // README "Interactions": a number already in the database is recognised
  // here — verify, then straight to Home, skipping screens 04-06.
  const verify = () => {
    if (phone === RETURNING_USER_PHONE) router.replace('/(tabs)');
    else router.push({ pathname: '/details', params: { phone } });
  };

  const activeBox = code.length < CODE_LENGTH ? code.length : -1;

  return (
    <SafeAreaView style={s.screen} edges={['top', 'bottom']}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        style={s.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {stage === 'phone' ? (
          <>
            <View style={s.headBlock}>
              <Text style={s.headline}>
                What&apos;s <Text style={s.headlineStrong}>your number</Text>?
              </Text>
              <Text style={s.sub}>It is your account. No passwords to remember, ever.</Text>
            </View>

            <View style={s.cardBlock}>
              {/* CSS `box-shadow:0 0 0 5px rgba(238,163,31,.18)`. RN has no
                  shadow spread, so the ring is a padded wrapper behind the
                  card — radius 20 + 5 so the corners stay concentric. */}
              <Pressable style={s.focusRing} onPress={() => phoneInput.current?.focus()}>
                <View style={s.phoneCard}>
                  <Text style={s.fieldLabel}>PHONE NUMBER</Text>
                  <View style={s.valueRow}>
                    <Text style={s.valuePrefix}>+91</Text>
                    {phone.length > 0 && <Text style={s.valueDigits}>{formatPhone(phone)}</Text>}
                    <Caret width={2} height={ds(32)} />
                  </View>
                  <TextInput
                    ref={phoneInput}
                    style={s.hiddenInput}
                    value={phone}
                    onChangeText={(t) => setPhone(onlyDigits(t, PHONE_LENGTH))}
                    keyboardType="phone-pad"
                    maxLength={PHONE_LENGTH}
                    caretHidden
                    autoComplete="tel"
                    textContentType="telephoneNumber"
                  />
                </View>
              </Pressable>

              <LeaderRow
                label="Already with us"
                value="Straight to your classroom"
                tone="dark"
                labelSize={15}
                valueSize={15}
                leaderColor={ob.leader28}
                labelColor={ob.ink55}
                style={s.recognition}
              />
            </View>

            <View style={s.footer}>
              <ObButton
                label="Send OTP"
                variant="ink"
                withArrow
                disabled={phone.length < PHONE_LENGTH}
                onPress={sendOtp}
              />
            </View>
          </>
        ) : (
          <>
            <View style={s.headBlock}>
              <Text style={s.headline}>
                Enter <Text style={s.headlineStrong}>the OTP</Text>.
              </Text>
            </View>

            <View style={s.recapBlock}>
              <View style={s.recapCard}>
                <View>
                  <Text style={s.fieldLabel}>PHONE NUMBER</Text>
                  <Text style={s.recapValue}>+91 {formatPhone(phone)}</Text>
                </View>
                <Pressable onPress={changeNumber} hitSlop={ds(10)}>
                  <Text style={s.changeLink}>Change</Text>
                </Pressable>
              </View>
            </View>

            <Rise delay={100} distance={ds(14)} style={s.statusBlock}>
              <View style={s.statusRow}>
                <View style={s.statusDot} />
                <Text style={s.statusText}>CODE SENT — ENTER THE SIX DIGITS</Text>
              </View>
            </Rise>

            <Rise delay={160} distance={ds(14)} style={s.boxesBlock}>
              <View style={s.boxesRow}>
                {Array.from({ length: CODE_LENGTH }).map((_, i) => {
                  const digit = code[i];
                  const isActive = i === activeBox;
                  return (
                    <View key={i} style={s.boxCell}>
                      {/* Ring as an underlay rather than a padded wrapper:
                          the boxes are `flex:1` in a 10px-gap row, so an
                          outer 4px pad would shrink the box and widen the
                          gaps. Inset -4 reproduces the CSS spread exactly
                          and the box's white fill paints over it. */}
                      {isActive && <View style={s.boxRing} />}
                      <View
                        style={[
                          s.box,
                          isActive ? s.boxActive : i > code.length ? s.boxTrailing : null,
                        ]}>
                        {digit ? (
                          <Animated.Text style={[s.boxDigit, popStyle(popAnims[i])]}>
                            {digit}
                          </Animated.Text>
                        ) : isActive ? (
                          <Caret width={2} height={ds(26)} />
                        ) : null}
                      </View>
                    </View>
                  );
                })}
                <TextInput
                  ref={codeInput}
                  style={s.hiddenInput}
                  value={code}
                  onChangeText={handleCodeChange}
                  keyboardType="number-pad"
                  maxLength={CODE_LENGTH}
                  caretHidden
                  autoComplete="one-time-code"
                  textContentType="oneTimeCode"
                />
              </View>
            </Rise>

            <View style={s.resendBlock}>
              <Pressable onPress={resend} disabled={secondsLeft > 0} hitSlop={ds(10)}>
                <Text style={s.resendText}>
                  {secondsLeft > 0
                    ? `Resend 0:${String(secondsLeft).padStart(2, '0')}`
                    : 'Resend'}
                </Text>
              </Pressable>
            </View>

            <View style={s.footer}>
              <ObButton
                label="Verify & continue"
                variant="ink"
                withArrow
                disabled={code.length < CODE_LENGTH}
                onPress={verify}
              />
            </View>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

/** `pop` — scale .72 -> 1.06 -> 1 with fade, .35s. */
function popStyle(anim: Animated.Value) {
  return {
    opacity: anim.interpolate({ inputRange: [0, 0.35, 1], outputRange: [0, 1, 1] }),
    transform: [
      {
        scale: anim.interpolate({
          inputRange: [0, 0.6, 1],
          outputRange: [0.72, 1.06, 1],
        }),
      },
    ],
  };
}

/** `rise` — opacity 0 -> 1, translateY 14px -> 0, .45s ease. */
function Rise({
  delay,
  distance,
  style,
  children,
}: {
  delay: number;
  distance: number;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}) {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const run = Animated.timing(anim, {
      toValue: 1,
      duration: 450,
      delay,
      easing: Easing.ease,
      useNativeDriver: true,
    });
    run.start();
    return () => run.stop();
  }, [anim, delay]);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity: anim,
          transform: [
            { translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [distance, 0] }) },
          ],
        },
      ]}>
      {children}
    </Animated.View>
  );
}

/** `caret` — opacity on/off, steps(1), 1.1s infinite. */
function Caret({ width, height }: { width: number; height: number }) {
  const anim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.delay(550),
        // duration 0 == the hard switch of `steps(1)`, no easing ramp.
        Animated.timing(anim, { toValue: 0, duration: 0, useNativeDriver: true }),
        Animated.delay(550),
        Animated.timing(anim, { toValue: 1, duration: 0, useNativeDriver: true }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [anim]);

  return (
    <Animated.View style={{ width, height, backgroundColor: ob.amber, opacity: anim }} />
  );
}

function createStyles(ds: (n: number) => number, tracking: (em: number, size: number) => number) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: ob.surface },
    flex: { flex: 1 },

    // padding:52px 34px 0
    headBlock: { paddingTop: ds(52), paddingHorizontal: ds(34) },
    headline: {
      fontFamily: obFont.sb600,
      fontSize: ds(44),
      lineHeight: ds(44 * 1.02),
      letterSpacing: tracking(-0.035, 44),
      color: ob.ink,
    },
    headlineStrong: { fontFamily: obFont.xb800 },
    sub: {
      marginTop: ds(14),
      fontFamily: obFont.r400,
      fontSize: ds(17),
      lineHeight: ds(17 * 1.45),
      color: ob.ink80,
    },

    // padding:34px 26px 0
    cardBlock: { paddingTop: ds(34), paddingHorizontal: ds(26) },
    focusRing: { padding: ds(5), borderRadius: ds(25), backgroundColor: ob.focusRing },
    phoneCard: {
      borderRadius: ds(20),
      backgroundColor: ob.surface,
      borderWidth: 1.5,
      borderColor: ob.ink,
      paddingVertical: ds(20),
      paddingHorizontal: ds(24),
    },
    fieldLabel: {
      fontFamily: obFont.b700,
      fontSize: ds(13),
      letterSpacing: tracking(0.1, 13),
      color: ob.ink55,
    },
    valueRow: { marginTop: ds(10), flexDirection: 'row', alignItems: 'center', gap: ds(12) },
    valuePrefix: {
      fontFamily: obFont.sb600,
      fontSize: ds(30),
      letterSpacing: tracking(-0.01, 30),
      color: ob.ink55,
    },
    valueDigits: {
      fontFamily: obFont.sb600,
      fontSize: ds(30),
      letterSpacing: tracking(-0.01, 30),
      color: ob.ink,
    },
    hiddenInput: { ...StyleSheet.absoluteFillObject, opacity: 0 },
    recognition: { marginTop: ds(18) },

    // padding:30px 26px 0
    recapBlock: { paddingTop: ds(30), paddingHorizontal: ds(26) },
    recapCard: {
      borderRadius: ds(20),
      backgroundColor: ob.surface,
      borderWidth: 1,
      borderColor: ob.hairline14,
      paddingVertical: ds(16),
      paddingHorizontal: ds(24),
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    recapValue: {
      marginTop: ds(6),
      fontFamily: obFont.sb600,
      fontSize: ds(24),
      letterSpacing: tracking(-0.01, 24),
      color: ob.ink,
    },
    changeLink: { fontFamily: obFont.b700, fontSize: ds(16), color: ob.link },

    // padding:24px 26px 0
    statusBlock: { paddingTop: ds(24), paddingHorizontal: ds(26) },
    statusRow: { flexDirection: 'row', alignItems: 'center', gap: ds(10) },
    statusDot: {
      width: ds(6),
      height: ds(6),
      borderRadius: ds(3),
      backgroundColor: ob.amber,
    },
    statusText: {
      fontFamily: obFont.b700,
      fontSize: ds(13),
      letterSpacing: tracking(0.1, 13),
      color: ob.ink55,
    },

    // padding:16px 26px 0
    boxesBlock: { paddingTop: ds(16), paddingHorizontal: ds(26) },
    boxesRow: { flexDirection: 'row', gap: ds(10) },
    boxCell: { flex: 1 },
    boxRing: {
      position: 'absolute',
      top: -ds(4),
      right: -ds(4),
      bottom: -ds(4),
      left: -ds(4),
      borderRadius: ds(22),
      backgroundColor: ob.focusRing,
    },
    box: {
      height: ds(66),
      borderRadius: ds(18),
      backgroundColor: ob.surface,
      borderWidth: 1,
      borderColor: ob.hairline14,
      alignItems: 'center',
      justifyContent: 'center',
    },
    boxActive: { borderWidth: 1.5, borderColor: ob.ink },
    boxTrailing: { borderColor: ob.hairline12 },
    boxDigit: { fontFamily: obFont.sb600, fontSize: ds(26), color: ob.ink },

    // padding:18px 28px 0
    resendBlock: { paddingTop: ds(18), paddingHorizontal: ds(28), alignItems: 'flex-end' },
    resendText: { fontFamily: obFont.b700, fontSize: ds(16), color: ob.ink55 },

    // padding:22px 34px 34px, pinned to the bottom
    footer: {
      marginTop: 'auto',
      paddingTop: ds(22),
      paddingHorizontal: ds(34),
      paddingBottom: ds(34),
    },
  });
}

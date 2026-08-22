// 03a "Email address" + 03b "Same page — OTP slides in".
//
// These are ONE screen in the handoff, not two routes: the OTP block is
// revealed below the address and the entry card collapses into a recap card
// with a "Change" affordance. Hence a single file with an 'email' | 'otp'
// state machine rather than a second route.
//
// Was the phone screen. Phone/SMS auth needs an Indian sender and the legal
// work that goes with it, and early users can't wait for that — so the same
// screen now takes an email address and a six-digit code from Supabase
// (delivered by Resend). A phone number is still collected on the next
// screen, unverified. Every measurement below is unchanged from the original
// design handoff.
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
import { ob, obFont, useDesignScale } from '@/constants/onboarding';
import { friendlyAuthError, sendEmailOtp, verifyEmailOtp } from '@/lib/auth';
import { hasCompletedOnboarding, pullProfile } from '@/lib/profile';

const CODE_LENGTH = 6;
const RESEND_SECONDS = 24;

/** Deliberately loose. The real check is whether the code arrives — a regex
 *  that rejects a valid address is worse than one that lets a typo through
 *  and gets no email. */
function looksLikeEmail(value: string) {
  const v = value.trim();
  return v.length > 3 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function onlyDigits(text: string, max: number) {
  return text.replace(/[^0-9]/g, '').slice(0, max);
}

type Stage = 'email' | 'otp';

export default function EmailScreen() {
  const { ds, tracking } = useDesignScale();
  const s = useMemo(() => createStyles(ds, tracking), [ds, tracking]);

  const [stage, setStage] = useState<Stage>('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const emailInput = useRef<TextInput>(null);
  const codeInput = useRef<TextInput>(null);

  // `pop` runs per box as its digit appears. The handoff staggers the four
  // revealed digits 50/130/210/290ms, i.e. 50ms + 80ms per digit *in that
  // batch* — so a pasted / autofilled code reproduces the mockup exactly
  // while a hand-typed digit pops after a flat 50ms instead of waiting out
  // its index.
  const popAnims = useRef(
    Array.from({ length: CODE_LENGTH }, () => new Animated.Value(1)),
  ).current;
  const prevCodeLength = useRef(0);

  // Keep the caret where the OS keyboard is pointing.
  useEffect(() => {
    const id = setTimeout(() => {
      if (stage === 'email') emailInput.current?.focus();
      else codeInput.current?.focus();
    }, 260);
    return () => clearTimeout(id);
  }, [stage]);

  useEffect(() => {
    if (stage !== 'otp' || secondsLeft === 0) return;
    const id = setTimeout(() => setSecondsLeft((n) => n - 1), 1000);
    return () => clearTimeout(id);
  }, [stage, secondsLeft]);

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
    setError(null);
  };

  const sendOtp = async () => {
    if (busy) return;
    setBusy(true);
    setError(null);
    try {
      await sendEmailOtp(email);
      setCode('');
      prevCodeLength.current = 0;
      setSecondsLeft(RESEND_SECONDS);
      setStage('otp');
    } catch (err) {
      setError(friendlyAuthError(err instanceof Error ? err.message : ''));
    } finally {
      setBusy(false);
    }
  };

  const changeEmail = () => {
    setCode('');
    prevCodeLength.current = 0;
    setError(null);
    setStage('email');
  };

  const resend = async () => {
    if (secondsLeft > 0 || busy) return;
    setBusy(true);
    setError(null);
    try {
      await sendEmailOtp(email);
      setCode('');
      prevCodeLength.current = 0;
      setSecondsLeft(RESEND_SECONDS);
      codeInput.current?.focus();
    } catch (err) {
      setError(friendlyAuthError(err instanceof Error ? err.message : ''));
    } finally {
      setBusy(false);
    }
  };

  /**
   * A verified code is a real Supabase session, which is what the root gate
   * watches — so nothing here has to tell the router the student is in.
   *
   * Where they go next is asked of the *server*, not the device. Checking
   * local storage for a name looked equivalent and wasn't: a device with
   * leftover data from earlier testing sent a brand-new sign-in straight to
   * Home, skipping name, exam and class — which also left the account with no
   * `target_exam`, and therefore the wrong subjects everywhere.
   */
  const verify = async () => {
    if (busy) return;
    setBusy(true);
    setError(null);
    try {
      await verifyEmailOtp(email, code);
      if (await hasCompletedOnboarding()) {
        // Their details live on the server; bring them back to this device.
        await pullProfile();
        router.replace('/(tabs)');
      } else {
        router.replace({ pathname: '/details', params: { email: email.trim() } });
      }
    } catch (err) {
      setError(friendlyAuthError(err instanceof Error ? err.message : ''));
      setBusy(false);
    }
  };

  const activeBox = code.length < CODE_LENGTH ? code.length : -1;
  const ready = looksLikeEmail(email);

  return (
    <SafeAreaView style={s.screen} edges={['top', 'bottom']}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        style={s.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {stage === 'email' ? (
          <>
            <View style={s.headBlock}>
              <Text style={s.headline}>
                What&apos;s <Text style={s.headlineStrong}>your email</Text>?
              </Text>
              <Text style={s.sub}>It is your account. No passwords to remember, ever.</Text>
            </View>

            <View style={s.cardBlock}>
              {/* CSS `box-shadow:0 0 0 5px rgba(238,163,31,.18)`. RN has no
                  shadow spread, so the ring is a padded wrapper behind the
                  card — radius 20 + 5 so the corners stay concentric. */}
              <Pressable style={s.focusRing} onPress={() => emailInput.current?.focus()}>
                <View style={s.fieldCard}>
                  <Text style={s.fieldLabel}>EMAIL ADDRESS</Text>
                  <View style={s.valueRow}>
                    <TextInput
                      ref={emailInput}
                      style={s.emailInput}
                      value={email}
                      onChangeText={(t) => {
                        setEmail(t);
                        setError(null);
                      }}
                      placeholder="you@example.com"
                      placeholderTextColor={ob.ink55}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      autoComplete="email"
                      textContentType="emailAddress"
                      returnKeyType="go"
                      onSubmitEditing={sendOtp}
                    />
                  </View>
                </View>
              </Pressable>

              {!!error && <Text style={s.error}>{error}</Text>}

              {/* Dynamic, but not on whether the address is registered.
                  Asking that would mean a lookup anyone could use to discover
                  who has an account here — the reason the industry standard
                  is "if an account exists, we've sent a code". So the line
                  reacts to what we legitimately know: whether the student has
                  finished typing, and therefore what the button is about to
                  do. Before that it answers the question a returning student
                  actually has, which is whether they're in the right box. */}
              <LeaderRow
                label={ready ? 'Next' : 'Already with us'}
                value={ready ? 'A six-digit code, to this address' : 'This same box signs you back in'}
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
                label={busy ? 'Sending…' : 'Send OTP'}
                variant="ink"
                withArrow
                disabled={!ready || busy}
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
                <View style={s.recapText}>
                  <Text style={s.fieldLabel}>EMAIL ADDRESS</Text>
                  <Text style={s.recapValue} numberOfLines={1}>
                    {email.trim()}
                  </Text>
                </View>
                <Pressable onPress={changeEmail} hitSlop={ds(10)}>
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

            {!!error && <Text style={[s.error, s.errorOtp]}>{error}</Text>}

            <View style={s.resendBlock}>
              <Pressable onPress={resend} disabled={secondsLeft > 0 || busy} hitSlop={ds(10)}>
                <Text style={s.resendText}>
                  {secondsLeft > 0
                    ? `Resend 0:${String(secondsLeft).padStart(2, '0')}`
                    : 'Resend'}
                </Text>
              </Pressable>
            </View>

            <View style={s.footer}>
              <ObButton
                label={busy ? 'Verifying…' : 'Verify & continue'}
                variant="ink"
                withArrow
                disabled={code.length < CODE_LENGTH || busy}
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
    fieldCard: {
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
    // Typed straight into the card rather than behind a hidden input: an
    // address is variable-length and proportional, so the per-character
    // caret trick the phone digits used has nothing to align to.
    emailInput: {
      flex: 1,
      padding: 0,
      fontFamily: obFont.sb600,
      fontSize: ds(24),
      // No lineHeight. iOS lays a TextInput's text out inside the line box and
      // clips whatever falls outside it, which was shaving the descenders off
      // g/p/y in an address. A minHeight reserves the same vertical space the
      // design expects without constraining where the glyphs sit.
      minHeight: ds(34),
      color: ob.ink,
    },
    error: {
      marginTop: ds(14),
      fontFamily: obFont.r400,
      fontSize: ds(15),
      lineHeight: ds(15 * 1.4),
      // The onboarding palette has no error tone of its own; this is the
      // same red the rest of the app uses for the red-pen accents.
      color: '#DD4433',
    },
    errorOtp: { paddingHorizontal: ds(26) },
    recapText: { flex: 1, minWidth: 0, paddingRight: ds(12) },
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

// 04 Your details — pixel replica of design_handoff_onboarding_flow
// `design/Onboarding Final v2.dc.html`, frame data-screen-label="04 Your details".
// Every number below is a raw design px lifted off that markup, passed through ds().
// The mockup's "9:41" status row is deliberately not reproduced — that is prototype
// chrome, and the real OS status bar sits there instead.
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  type LayoutChangeEvent,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { ObButton } from '@/components/onboarding-kit';
import { ob, obFont, useDesignScale } from '@/constants/onboarding';
import { saveProfile } from '@/lib/profile';

// CSS `ease` is cubic-bezier(.25,.1,.25,1); Reanimated's Easing.ease is a
// different curve, so the bezier is spelled out (same call as welcome.tsx).
const CSS_EASE = Easing.bezier(0.25, 0.1, 0.25, 1);

// `@keyframes caret{0%,45%{opacity:1}50%,95%{opacity:0}100%{opacity:1}}`
// at `1.1s steps(1) infinite` — a hard on/off, 550ms each half.
const CARET_HALF_MS = 550;

// `@keyframes draw{from{stroke-dashoffset:var(--len)}to{stroke-dashoffset:0}}`
// at `.5s .2s ease both`, with `stroke-dasharray:32` on the path.
const DRAW_LEN = 32;
const DRAW_DURATION_MS = 500;
const DRAW_DELAY_MS = 200;

// The design's sample values. `Aarav Sharma` is the name the mockup shows typed
// into the active card; here it is the placeholder, since the field is real.
const NAME_PLACEHOLDER = 'Aarav Sharma';
// `+91 98211 43307` — the design's grouping.
//
// This used to fall back to a sample number when the input wasn't exactly ten
// digits, which was safe while the number arrived pre-verified from the OTP
// step. It is not safe now that the field is optional and hand-typed: a
// half-entered number would have been saved as somebody else's real one.
// Empty in, empty out; a partial keeps whatever was actually typed.
function formatPhone(raw?: string) {
  const digits = (raw ?? '').replace(/[^0-9]/g, '');
  const local = digits.length > 10 ? digits.slice(-10) : digits;
  if (!local) return '';
  if (local.length !== 10) return `+91 ${local}`;
  return `+91 ${local.slice(0, 5)} ${local.slice(5)}`;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default function DetailsScreen() {
  const { ds, tracking } = useDesignScale();
  const styles = useMemo(() => createStyles(ds, tracking), [ds, tracking]);
  const params = useLocalSearchParams<{ email?: string }>();
  const email = (params.email ?? '').trim();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // Width of the name field's text, measured off an invisible mirror <Text> so
  // the designed caret can sit exactly after it (CSS: `gap:8px`).
  const [nameTextWidth, setNameTextWidth] = useState(0);

  const onMeasureName = (e: LayoutChangeEvent) => setNameTextWidth(e.nativeEvent.layout.width);

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <KeyboardAvoidingView
          style={styles.safeArea}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          {/* `padding:52px 34px 0` */}
          <View style={styles.headlineBlock}>
            <Text style={styles.headline}>
              Who is <Text style={styles.headlineBold}>joining the class</Text>?
            </Text>
            <Text style={styles.sub}>Two fields, and your teacher knows what to call you.</Text>
          </View>

          {/* `padding:32px 26px 0; display:flex; flex-direction:column; gap:12px` */}
          <View style={styles.fieldStack}>
            {/* FULL NAME — active card. RN has no box-shadow spread, so the
                `0 0 0 5px rgba(238,163,31,.18)` ring is an outer view padded by 5. */}
            <View style={styles.focusRing}>
              <View style={[styles.card, styles.cardActive]}>
                <Text style={styles.label}>FULL NAME</Text>
                <View style={styles.valueRow}>
                  <TextInput
                    style={[styles.value, styles.input, styles.nameInput]}
                    value={name}
                    onChangeText={setName}
                    placeholder={NAME_PLACEHOLDER}
                    placeholderTextColor={ob.ink30}
                    autoCapitalize="words"
                    // The designed caret below replaces the platform one.
                    caretHidden
                    selectionColor={ob.amber}
                  />
                  <Text
                    style={[styles.value, styles.mirror]}
                    numberOfLines={1}
                    onLayout={onMeasureName}>
                    {name.length > 0 ? name : NAME_PLACEHOLDER}
                  </Text>
                  <Caret left={nameTextWidth + ds(8)} height={ds(24)} />
                </View>
              </View>
            </View>

            {/* EMAIL ADDRESS — read only. This is the address the code was
                just sent to, so it is the one field on the page that is
                already proven; editing it here would mean re-verifying. */}
            <View style={[styles.card, styles.cardWarm]}>
              <View style={styles.cardText}>
                <Text style={styles.label}>EMAIL ADDRESS</Text>
                <Text style={[styles.value, styles.phoneValue]} numberOfLines={1}>
                  {email}
                </Text>
              </View>
              <View style={styles.verified}>
                <DrawnCheck size={ds(20)} />
                <Text style={styles.verifiedText}>Verified</Text>
              </View>
            </View>

            {/* PHONE NUMBER — collected, not verified. SMS auth needs an
                Indian sender and the legal work behind it; until that lands
                nothing is sent here, so it is a plain optional field and
                deliberately carries no Verified tag. */}
            <View style={[styles.card, styles.cardIdle]}>
              <Text style={styles.label}>PHONE NUMBER</Text>
              <TextInput
                style={[styles.value, styles.input, styles.emailInput]}
                value={phone}
                onChangeText={(t) => setPhone(t.replace(/[^0-9]/g, '').slice(0, 10))}
                placeholder="Optional"
                placeholderTextColor={ob.ink30}
                keyboardType="phone-pad"
                selectionColor={ob.amber}
              />
            </View>
          </View>

          {/* `margin-top:auto; padding:0 34px 34px` */}
          <View style={styles.footer}>
            <ObButton
              label="Continue"
              withArrow
              onPress={() => {
                // Persist what was typed so the rest of the app (the Home
                // greeting, Personal information) knows this student by their
                // own name instead of the sample profile's.
                saveProfile({
                  ...(name.trim() ? { name: name.trim() } : {}),
                  ...(email ? { email, emailVerified: true } : {}),
                  ...(phone ? { phone: formatPhone(phone), phoneVerified: false } : {}),
                });
                router.push('/exam');
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

// `width:2px;height:24px;background:#EEA31F;animation:caret 1.1s steps(1) infinite`
function Caret({ left, height }: { left: number; height: number }) {
  const opacity = useSharedValue(1);

  useEffect(() => {
    const step = { duration: CARET_HALF_MS, easing: Easing.steps(1, true) };
    opacity.value = withRepeat(
      withSequence(withTiming(1, step), withTiming(0, step)),
      -1,
      false
    );
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));

  return (
    <View style={[caretStyles.slot, { left }]} pointerEvents="none">
      {/* 2px is a hairline in the design — kept literal, not scaled. */}
      <Animated.View style={[{ width: 2, height, backgroundColor: ob.amber }, animatedStyle]} />
    </View>
  );
}

// The "Verified" tick draws itself in: `animation:draw .5s .2s ease both`.
function DrawnCheck({ size }: { size: number }) {
  const dashoffset = useSharedValue(DRAW_LEN);

  useEffect(() => {
    dashoffset.value = withDelay(
      DRAW_DELAY_MS,
      withTiming(0, { duration: DRAW_DURATION_MS, easing: CSS_EASE })
    );
  }, [dashoffset]);

  const animatedProps = useAnimatedProps(() => ({ strokeDashoffset: dashoffset.value }));

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <AnimatedPath
        d="M4 13 9.6 18.4 20 6.6"
        fill="none"
        stroke={ob.ink}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={DRAW_LEN}
        animatedProps={animatedProps}
      />
    </Svg>
  );
}

const caretStyles = StyleSheet.create({
  // Sits on top of the value row and centres the bar vertically, exactly as
  // `align-items:center` does in the CSS flex row.
  slot: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});

function createStyles(
  ds: (size: number) => number,
  tracking: (em: number, fontSize: number) => number
) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: ob.surface,
    },
    safeArea: {
      flex: 1,
    },
    // `padding:52px 34px 0`
    headlineBlock: {
      paddingTop: ds(52),
      paddingHorizontal: ds(34),
    },
    // 44px / 600 / lh 1.02 / -.035em
    headline: {
      fontFamily: obFont.sb600,
      fontSize: ds(44),
      lineHeight: ds(44 * 1.02),
      letterSpacing: tracking(-0.035, 44),
      color: ob.ink,
    },
    headlineBold: {
      fontFamily: obFont.xb800,
    },
    // `margin-top:14px; font-size:17px; line-height:1.45; color:#5F5A50`
    sub: {
      marginTop: ds(14),
      fontFamily: obFont.r400,
      fontSize: ds(17),
      lineHeight: ds(17 * 1.45),
      color: ob.ink80,
    },
    // `padding:32px 26px 0; flex-direction:column; gap:12px`
    fieldStack: {
      paddingTop: ds(32),
      paddingHorizontal: ds(26),
      flexDirection: 'column',
      gap: ds(12),
    },
    // `box-shadow:0 0 0 5px rgba(238,163,31,.18)` around a 20px radius card.
    focusRing: {
      padding: ds(5),
      borderRadius: ds(25),
      backgroundColor: ob.focusRing,
    },
    // `border-radius:20px; padding:18px 24px`
    card: {
      borderRadius: ds(20),
      paddingVertical: ds(18),
      paddingHorizontal: ds(24),
    },
    cardActive: {
      backgroundColor: ob.surface,
      borderWidth: 1.5,
      borderColor: ob.ink,
    },
    cardIdle: {
      backgroundColor: ob.surface,
      borderWidth: 1,
      borderColor: ob.hairline14,
    },
    cardWarm: {
      backgroundColor: ob.surfaceWarm,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    // 13px / 700 / ls .1em / #8C867A
    label: {
      fontFamily: obFont.b700,
      fontSize: ds(13),
      letterSpacing: tracking(0.1, 13),
      color: ob.ink55,
    },
    // `font-size:22px; font-weight:500` — the `margin-top:8px` from the spec
    // lives on whatever wraps the value, so the caret row centres correctly.
    value: {
      fontFamily: obFont.m500,
      fontSize: ds(22),
      color: ob.ink,
    },
    input: {
      padding: 0,
    },
    // Fills the caret row so the typing area spans the card.
    nameInput: {
      flex: 1,
    },
    // `margin-top:8px`
    cardText: { flex: 1, minWidth: 0, paddingRight: ds(12) },
    emailInput: {
      marginTop: ds(8),
    },
    phoneValue: {
      marginTop: ds(8),
    },
    valueRow: {
      marginTop: ds(8),
      flexDirection: 'row',
      alignItems: 'center',
    },
    // Invisible width probe for the caret's x position.
    mirror: {
      position: 'absolute',
      left: 0,
      top: 0,
      opacity: 0,
      pointerEvents: 'none',
    },
    // `gap:8px; font-size:15px; font-weight:700; color:#5F5A50`
    verified: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: ds(8),
    },
    verifiedText: {
      fontFamily: obFont.b700,
      fontSize: ds(15),
      color: ob.ink80,
    },
    // `margin-top:auto; padding:0 34px 34px`
    footer: {
      marginTop: 'auto',
      paddingHorizontal: ds(34),
      paddingBottom: ds(34),
    },
  });
}

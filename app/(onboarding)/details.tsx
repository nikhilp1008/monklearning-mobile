// 04 Your details — pixel replica of design_handoff_onboarding_flow
// `design/Onboarding Final v2.dc.html`, frame data-screen-label="04 Your details".
// Every number below is a raw design px lifted off that markup, passed through ds().
// The mockup's "9:41" status row is deliberately not reproduced — that is prototype
// chrome, and the real OS status bar sits there instead.
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ObButton, ObHeader } from '@/components/onboarding-kit';
import { ob, obFont, useDesignScale } from '@/constants/onboarding';
import { getSessionEmail } from '@/lib/auth';
import { saveProfile } from '@/lib/profile';

// `@keyframes caret{0%,45%{opacity:1}50%,95%{opacity:0}100%{opacity:1}}`
// at `1.1s steps(1) infinite` — a hard on/off, 550ms each half.

// The design's sample values. `Aarav Sharma` is the name the mockup shows typed
// into the active card; here it is the placeholder, since the field is real.
const NAME_PLACEHOLDER = 'Aarav Sharma';

/**
 * Two characters, not five or six.
 *
 * A longer floor looks safer and isn't — it rejects real students. Om, Ram,
 * Anu, Sai, Jay and Dev are all three characters or fewer, and a field that
 * refuses a student's actual name is a far worse failure than one that accepts
 * a short one. What is worth blocking is a field holding no name at all:
 * blank, or "12", or "...". So two characters, at least one of them a letter.
 */
const NAME_MIN = 2;
// Latin, Latin-Extended and Devanagari, spelled out rather than \p{L} — Hermes
// support for unicode property escapes is not worth depending on here.
const HAS_LETTER = /[A-Za-z\u00C0-\u024F\u0900-\u097F]/;

function isUsableName(value: string) {
  const trimmed = value.trim();
  return trimmed.length >= NAME_MIN && HAS_LETTER.test(trimmed);
}
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


export default function DetailsScreen() {
  const { ds, fs, tracking } = useDesignScale();
  const styles = useMemo(() => createStyles(ds, fs, tracking), [ds, fs, tracking]);
  const params = useLocalSearchParams<{ email?: string }>();
  const [email, setEmail] = useState((params.email ?? '').trim());

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const nameOk = isUsableName(name);

  // Reached without a param when the root gate resumes a half-finished
  // onboarding — the session already knows the address in that case.
  useEffect(() => {
    if (email) return;
    let cancelled = false;
    getSessionEmail().then((v) => {
      if (!cancelled && v) setEmail(v);
    });
    return () => {
      cancelled = true;
    };
  }, [email]);

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ObHeader title="Your details" />
        <KeyboardAvoidingView
          style={styles.safeArea}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <Text style={styles.sub}>We use your name in class.</Text>

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
                    placeholderTextColor={ob.placeholder}
                    autoCapitalize="words"
                    selectionColor={ob.amber}
                  />
                </View>
              </View>
            </View>

            {/* EMAIL ADDRESS — read only. This is the address the code was
                just sent to, so it is the one field on the page that is
                already proven; editing it here would mean re-verifying. */}
            {/* The address on one line, with the state as a tag under the
                card -- outside it, so the card holds the answer and nothing
                else. The tick used to sit to the right of the address, and between
                the glyph and its gap it took 32 of the card's 306pt. Measured
                in Onest at this size, that is the difference between
                "nikhil.kumar.p@monklearning.com" (287pt) fitting and wrapping
                -- and once it wrapped, the tick was stranded beside the first
                line. Moving the state below buys the width back, and the
                address is clamped to one line so nothing can wrap again.
                Truncation is "middle", not "tail": an address only overflows
                because the local part is long, and tail truncation would eat
                the domain -- "nikhilkumarpotnuru2007@gm..." doesn't tell a
                student which account this is, "nikhilkumarpot...@gmail.com"
                does. */}
            <View style={styles.emailGroup}>
              <View style={[styles.card, styles.cardWarm]}>
                <Text style={styles.label}>EMAIL ADDRESS</Text>
                <Text style={styles.value} numberOfLines={1} ellipsizeMode="middle">
                  {email}
                </Text>
              </View>
              <View style={styles.verifiedTag}>
                <Text style={styles.verifiedTagText}>Verified</Text>
              </View>
            </View>

            {/* PHONE NUMBER — collected, not verified. SMS auth needs an
                Indian sender and the legal work behind it; until that lands
                nothing is sent here, so it is a plain optional field and
                deliberately carries no Verified tag. */}
            <View style={[styles.card, styles.cardIdle]}>
              {/* "Optional" sits on the label row, as drawn. It was under the
                  field, where it read as a note about the whole form rather
                  than about this one answer. */}
              <View style={styles.labelRow}>
                <Text style={styles.label}>PHONE</Text>
                <Text style={styles.labelOptional}>OPTIONAL</Text>
              </View>
              <TextInput
                style={[styles.value, styles.input, styles.emailInput]}
                value={phone}
                onChangeText={(t) => setPhone(t.replace(/[^0-9]/g, '').slice(0, 10))}
                // Native cap as well as the slice above. Without it the field
                // paints the 11th digit, React re-renders with it removed, and
                // the student sees it flash on for a frame.
                maxLength={10}
                placeholder="+91 98765 43210"
                placeholderTextColor={ob.placeholder}
                keyboardType="phone-pad"
                selectionColor={ob.amber}
              />
            </View>
            <Text style={styles.hint}>No calls from a sales team. Ever.</Text>
          </View>

          {/* `margin-top:auto; padding:0 34px 34px` */}
          <View style={styles.footer}>
            <ObButton
              label={nameOk ? 'Continue' : 'Add your name'}
              withArrow
              disabled={!nameOk}
              onPress={() => {
                if (!nameOk) return;
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

// The "Verified" tick draws itself in: `animation:draw .5s .2s ease both`.
function createStyles(
  ds: (size: number) => number,
  fs: (size: number) => number,
  tracking: (em: number, fontSize: number) => number,
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
      fontSize: fs(44),
      lineHeight: ds(44 * 1.02),
      letterSpacing: tracking(-0.035, 44),
      color: ob.ink,
    },
    headlineBold: {
      fontFamily: obFont.xb800,
    },
    // `margin-top:14px; font-size:17px; line-height:1.45; color:#5F5A50`
    // 14pt under the title — `padding:14px 30px 0` in the handoff. This
    // briefly carried a paddingTop AND a marginTop of 14 each, which is the
    // gap that read as too wide.
    sub: {
      paddingHorizontal: ds(30),
      marginTop: ds(14),
      fontFamily: obFont.r400,
      fontSize: fs(16),
      lineHeight: fs(23),
      color: ob.ink80,
    },
    // `padding:32px 26px 0; flex-direction:column; gap:12px`
    fieldStack: {
      paddingTop: ds(30),
      paddingHorizontal: ds(30),
      flexDirection: 'column',
      gap: ds(12),
    },
    // The amber ring is gone with the rest of the old field system: a wash is
    // the app's mark for a choice made, and focus is not a choice.
    focusRing: {
      borderRadius: ds(14),
    },
    card: {
      borderRadius: ds(14),
      paddingVertical: ds(16),
      paddingHorizontal: ds(18),
    },
    // Focus darkens the outline by one step. It does not thicken it, so
    // nothing reflows as the student moves between fields.
    cardActive: {
      backgroundColor: ob.surface,
      borderWidth: 1,
      borderColor: ob.ink40,
    },
    cardIdle: {
      backgroundColor: ob.surface,
      borderWidth: 1,
      borderColor: ob.fieldBorder,
    },
    // The verified email: read-only, so it sits on a tint instead of white.
    // Label and address only -- the state tag hangs below the card -- so the
    // address gets the card's whole width instead of sharing it with a glyph.
    cardWarm: {
      backgroundColor: ob.fieldMuted,
      alignItems: 'flex-start',
    },
    // Card plus its tag, so the tag reads as belonging to this field rather
    // than floating in the stack's own 12pt gap.
    emailGroup: {
      flexDirection: 'column',
    },
    /**
     * "Verified" as a tag rather than a tick, and below the card rather than
     * inside it: the card is the answer, the tag is what we know about it.
     *
     * Green because that is what the state is; the onboarding palette has no
     * success colour of its own, so these are the app's #1C9B57 at 12% with
     * the same #12703E the observation row uses for text on a green wash --
     * #1C9B57 itself only manages 2.4:1 there.
     */
    verifiedTag: {
      marginTop: ds(8),
      alignSelf: 'flex-start',
      paddingHorizontal: ds(8),
      paddingVertical: ds(2),
      borderRadius: 99,
      backgroundColor: 'rgba(28,155,87,.12)',
    },
    verifiedTagText: {
      fontFamily: obFont.sb600,
      fontSize: fs(10),
      lineHeight: fs(14),
      letterSpacing: tracking(0.1, 10),
      textTransform: 'uppercase',
      color: '#12703E',
    },
    label: {
      fontFamily: obFont.sb600,
      fontSize: fs(10),
      letterSpacing: tracking(0.14, 10),
      color: ob.ink55,
    },
    value: {
      fontFamily: obFont.r400,
      fontSize: fs(19),
      letterSpacing: tracking(-0.01, 19),
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
    labelRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    labelOptional: {
      fontFamily: obFont.m500,
      fontSize: fs(10),
      letterSpacing: tracking(0.1, 10),
      color: ob.ink40,
    },
    // `font-size:13px; line-height:1.5; padding-top:2px`
    hint: {
      paddingTop: ds(2),
      fontFamily: obFont.r400,
      fontSize: fs(13),
      lineHeight: fs(20),
      color: ob.ink55,
    },
    emailInput: {
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
    // `margin-top:auto; padding:0 34px 34px`
    footer: {
      marginTop: 'auto',
      paddingHorizontal: ds(34),
      paddingBottom: ds(34),
    },
  });
}

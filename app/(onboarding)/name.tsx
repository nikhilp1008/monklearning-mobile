import { router } from 'expo-router';
import { useEffect, useRef, useState, type Ref } from 'react';
import { Text, TextInput, View, type TextInputProps } from 'react-native';

import { OnbLabel, OnbScreen } from '@/components/onboarding/onb-screen';
import { ob, obFont, useDesignScale } from '@/constants/onboarding';
import { saveAnswers } from '@/lib/onboarding-answers';
import { getProfile, saveProfile } from '@/lib/profile';

/**
 * The first screen after the email code, for a new account: the name, and a
 * phone number if they want class reminders.
 *
 * The account comes first now. Email and code decide whether this is a new
 * student or a returning one (who goes straight to Home), so the name and
 * phone are asked only of the new ones, and every question after this can
 * use the name.
 *
 * The phone is optional and not verified: there is no Indian SMS sender yet.
 */

// Latin, Latin-Extended and Devanagari, spelled out rather than \p{L}: Hermes
// support for unicode property escapes is not worth depending on here.
const HAS_LETTER = /[A-Za-zÀ-ɏऀ-ॿ]/;
const isUsableName = (v: string) => v.trim().length >= 2 && HAS_LETTER.test(v);

const onlyDigits = (text: string) => text.replace(/[^0-9]/g, '').slice(0, 10);

// `+91 98211 43307`. Empty in, empty out; a partial keeps what was typed, so a
// half-entered number is never saved as somebody else's real one.
function formatPhone(raw: string) {
  const digits = raw.replace(/[^0-9]/g, '');
  const local = digits.length > 10 ? digits.slice(-10) : digits;
  if (!local) return '';
  if (local.length !== 10) return `+91 ${local}`;
  return `+91 ${local.slice(0, 5)} ${local.slice(5)}`;
}

/** A bordered field that rings in marigold while it is being typed in. */
function Field({ prefix, inputRef, ...input }: TextInputProps & { prefix?: string; inputRef?: Ref<TextInput> }) {
  const { ds, fs } = useDesignScale();
  const [focused, setFocused] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: ds(14),
        borderWidth: 1.5,
        borderColor: focused ? ob.amber : ob.hairline14,
        boxShadow: focused ? [{ offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 4, color: ob.focusRing }] : [],
      }}>
      {prefix ? (
        <Text style={{ paddingLeft: ds(18), fontFamily: obFont.r400, fontSize: fs(19), color: ob.ink55 }}>
          {prefix}
        </Text>
      ) : null}
      <TextInput
        ref={inputRef}
        {...input}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={ob.placeholder}
        selectionColor={ob.amber}
        style={{
          flex: 1,
          height: ds(58),
          paddingHorizontal: prefix ? ds(10) : ds(18),
          fontFamily: obFont.r400,
          fontSize: fs(19),
          color: ob.ink,
        }}
      />
    </View>
  );
}

export default function NameScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const nameInput = useRef<TextInput>(null);
  const phoneInput = useRef<TextInput>(null);

  // A student who comes back to this screen finds what they typed.
  useEffect(() => {
    let live = true;
    getProfile().then((p) => {
      if (!live) return;
      if (p.name) setName(p.name);
      if (p.phone) setPhone(onlyDigits(p.phone.replace(/^\+91/, '')));
    });
    const id = setTimeout(() => nameInput.current?.focus(), 300);
    return () => {
      live = false;
      clearTimeout(id);
    };
  }, []);

  const ok = isUsableName(name);
  const next = () => {
    if (!ok) return;
    saveProfile({ name: name.trim(), ...(phone ? { phone: formatPhone(phone), phoneVerified: false } : {}) });
    saveAnswers({ started: true });
    router.push('/exam');
  };

  return (
    <OnbScreen
      keyboard
      title="What should we call you?"
      sub="Your full name, the way you’d like to see it."
      cta={{ label: ok ? 'Continue' : 'Add your name', disabled: !ok, onPress: next }}>
      <Field
        inputRef={nameInput}
        value={name}
        onChangeText={setName}
        placeholder="Aarav Sharma"
        autoCapitalize="words"
        autoComplete="name"
        textContentType="name"
        returnKeyType="next"
        submitBehavior="submit"
        onSubmitEditing={() => phoneInput.current?.focus()}
      />
      <OnbLabel>Phone, for class reminders · optional</OnbLabel>
      <Field
        inputRef={phoneInput}
        prefix="+91"
        value={phone}
        onChangeText={(t) => setPhone(onlyDigits(t))}
        placeholder="98765 43210"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        autoComplete="tel"
      />
    </OnbScreen>
  );
}

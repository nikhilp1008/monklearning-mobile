import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';

import { OnbScreen } from '@/components/onboarding/onb-screen';
import { ob, obFont, useDesignScale } from '@/constants/onboarding';
import { saveAnswers } from '@/lib/onboarding-answers';
import { getProfile, saveProfile } from '@/lib/profile';

/**
 * Screen 2 of the new onboarding: the name, before anything else.
 *
 * It used to come after the email code, on a "Your details" screen with the
 * email and phone. The questions now come first and the account last, so the
 * name opens the flow on its own; every question after it can use it.
 */

// Latin, Latin-Extended and Devanagari, spelled out rather than \p{L}: Hermes
// support for unicode property escapes is not worth depending on here.
const HAS_LETTER = /[A-Za-zÀ-ɏऀ-ॿ]/;
const isUsableName = (v: string) => v.trim().length >= 2 && HAS_LETTER.test(v);

export default function NameScreen() {
  const { ds, fs } = useDesignScale();
  const [name, setName] = useState('');
  const [focused, setFocused] = useState(false);
  const input = useRef<TextInput>(null);

  // A student who comes back to this screen finds what they typed.
  useEffect(() => {
    let live = true;
    getProfile().then((p) => {
      if (live && p.name) setName(p.name);
    });
    const id = setTimeout(() => input.current?.focus(), 300);
    return () => {
      live = false;
      clearTimeout(id);
    };
  }, []);

  const ok = isUsableName(name);
  const next = () => {
    if (!ok) return;
    saveProfile({ name: name.trim() });
    saveAnswers({ started: true });
    router.push('/exam');
  };

  return (
    <OnbScreen
      keyboard
      title="What should we call you?"
      sub="Your full name, the way you’d like to see it."
      cta={{ label: ok ? 'Continue' : 'Add your name', disabled: !ok, onPress: next }}>
      <View
        style={{
          borderRadius: ds(14),
          borderWidth: 1.5,
          borderColor: focused ? ob.amber : ob.hairline14,
          boxShadow: focused ? [{ offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 4, color: ob.focusRing }] : [],
        }}>
        <TextInput
          ref={input}
          value={name}
          onChangeText={setName}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Aarav Sharma"
          placeholderTextColor={ob.placeholder}
          autoCapitalize="words"
          autoComplete="name"
          textContentType="name"
          returnKeyType="next"
          onSubmitEditing={next}
          selectionColor={ob.amber}
          style={{
            height: ds(58),
            paddingHorizontal: ds(18),
            fontFamily: obFont.r400,
            fontSize: fs(19),
            color: ob.ink,
          }}
        />
      </View>
    </OnbScreen>
  );
}

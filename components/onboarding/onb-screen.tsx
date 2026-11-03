import { StatusBar } from 'expo-status-bar';
import type { ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { KeyboardSpacer } from '@/components/keyboard-spacer';
import { ObButton } from '@/components/onboarding-kit';
import { ob, obFont, useDesignScale } from '@/constants/onboarding';

/**
 * ONE FRAME FOR EVERY QUESTION IN THE NEW ONBOARDING.
 *
 * White, and no back arrow. The arrow sat on the title's line, so a two- or
 * three-line question wrapped against it and every heading started somewhere
 * different. Now the title runs the full width from the same spot on every
 * screen, lined up with the line under it and the answers below. Going back is
 * still the system swipe.
 *
 * Skip lives under Continue, and only on the questions, so the heading never
 * has to share its row.
 */
export function OnbScreen({
  title,
  sub,
  children,
  cta,
  onSkip,
  secondary,
  keyboard = false,
}: {
  title: string;
  sub?: string;
  children?: ReactNode;
  cta: { label: string; onPress: () => void; disabled?: boolean; busy?: boolean };
  /** Questions only: moves on without an answer. */
  onSkip?: () => void;
  /** A quieter second button under the first, e.g. "Later, from Home". */
  secondary?: { label: string; onPress: () => void };
  /** Screens with a text field lift their footer above the keyboard. */
  keyboard?: boolean;
}) {
  const { ds, fs } = useDesignScale();
  const insets = useSafeAreaInsets();

  const body = (
    <>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: ds(24) }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <OnbTitle title={title} sub={sub} />
        <View style={{ paddingHorizontal: ds(26), paddingTop: ds(22) }}>{children}</View>
      </ScrollView>

      <View style={{ paddingHorizontal: ds(30), paddingTop: ds(8), paddingBottom: onSkip ? ds(2) : ds(14) }}>
        <ObButton
          label={cta.label}
          withArrow
          disabled={cta.disabled}
          busy={cta.busy}
          onPress={cta.onPress}
        />
        {secondary ? (
          <ObButton
            label={secondary.label}
            variant="outline"
            onPress={secondary.onPress}
            style={{ marginTop: ds(12) }}
          />
        ) : null}
        {onSkip ? (
          <Pressable
            onPress={onSkip}
            hitSlop={ds(8)}
            accessibilityRole="button"
            style={({ pressed }) => ({ paddingVertical: ds(12), opacity: pressed ? 0.5 : 1 })}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: obFont.m500,
                fontSize: fs(15),
                color: ob.ink55,
              }}>
              Skip this question
            </Text>
          </Pressable>
        ) : null}
      </View>
    </>
  );

  return (
    <View style={{ flex: 1, backgroundColor: ob.surface }}>
      <StatusBar style="dark" />
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        {keyboard ? (
          <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            {body}
            <KeyboardSpacer bottomInset={insets.bottom} />
          </KeyboardAvoidingView>
        ) : (
          body
        )}
      </SafeAreaView>
    </View>
  );
}

/**
 * The heading every onboarding screen shares: full width, from the same spot,
 * with its line under it. Exported for the screens that keep their own body
 * (the email code screen) so their heading still lands in the same place.
 */
export function OnbTitle({ title, sub }: { title: string; sub?: string }) {
  const { ds, fs, tracking } = useDesignScale();
  return (
    <>
      <Text
        style={{
          paddingTop: ds(40),
          paddingHorizontal: ds(30),
          fontFamily: obFont.m500,
          fontSize: fs(24),
          lineHeight: fs(30),
          letterSpacing: tracking(-0.02, 24),
          color: ob.ink,
        }}>
        {title}
      </Text>
      {sub ? (
        <Text
          style={{
            marginTop: ds(10),
            paddingHorizontal: ds(30),
            fontFamily: obFont.r400,
            fontSize: fs(15),
            lineHeight: fs(22),
            color: ob.ink80,
          }}>
          {sub}
        </Text>
      ) : null}
    </>
  );
}

/** The quiet grey label over a group of answers ("Strongest", "Year"). */
export function OnbLabel({ children, first = false }: { children: ReactNode; first?: boolean }) {
  const { ds, fs } = useDesignScale();
  return (
    <Text
      style={{
        marginTop: first ? 0 : ds(22),
        marginBottom: ds(10),
        marginLeft: ds(4),
        fontFamily: obFont.sb600,
        fontSize: fs(13),
        color: ob.ink55,
      }}>
      {children}
    </Text>
  );
}

/**
 * The one line that answers back after a pick. It fades in when the answer
 * changes (keyed on its text), so the student sees the reply arrive.
 */
export function Insight({ text, style }: { text: string; style?: StyleProp<ViewStyle> }) {
  const { ds, fs } = useDesignScale();
  return (
    <Animated.View
      key={text}
      entering={FadeIn.duration(320)}
      style={[{ marginTop: ds(18), flexDirection: 'row', gap: ds(10), paddingHorizontal: ds(4) }, style]}>
      <Svg width={ds(13)} height={ds(13)} viewBox="0 0 16 16" style={{ marginTop: ds(4) }}>
        <Path
          d="M8 0C8.6 4.6 11.4 7.4 16 8C11.4 8.6 8.6 11.4 8 16C7.4 11.4 4.6 8.6 0 8C4.6 7.4 7.4 4.6 8 0Z"
          fill={ob.amber}
        />
      </Svg>
      <Text style={{ flex: 1, fontFamily: obFont.r400, fontSize: fs(15), lineHeight: fs(22), color: ob.ink80 }}>
        {text}
      </Text>
    </Animated.View>
  );
}

/** A white card with a hairline: the countdown, the weekends, the admit card. */
export function OnbCard({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  const { ds } = useDesignScale();
  return (
    <View
      style={[
        {
          borderRadius: ds(16),
          borderWidth: 1.5,
          borderColor: 'rgba(28,26,22,0.10)',
          backgroundColor: '#FFFFFF',
          paddingVertical: ds(16),
          paddingHorizontal: ds(18),
        },
        style,
      ]}>
      {children}
    </View>
  );
}

/** First name only, for the questions that address the student. */
export function firstName(name: string | null | undefined) {
  return (name ?? '').trim().split(/\s+/)[0] ?? '';
}

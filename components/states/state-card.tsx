import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { ObButton } from '@/components/onboarding-kit';
import { type StateGlyph } from '@/components/states/glyphs';
import { StatePlate } from '@/components/states/state-plate';
import { colors } from '@/constants/brand';
import { ob } from '@/constants/onboarding';
import { useScale } from '@/constants/scale';
import { shadow } from '@/lib/shadow';

export type StateAction = { label: string; onPress: () => void };

/**
 * THE CARD: A PAGE THAT HAS NOTHING ELSE TO SHOW.
 *
 * First use, couldn't load, a permission that is off, a daily limit, a chapter
 * with nothing left in it. One of the four shapes of a screen state (see
 * components/states/index.ts): the state takes the page's place, so it gets
 * the plate, a title, one line and one key.
 *
 * - The plate is the teacher's sky (StatePlate), the only colour on the card.
 * - The line says what happened, then what to do. Never a server's own words.
 * - One key. A second way out is a quiet link under it, never a second key.
 * - White card, hairline, soft drop: no tint fill.
 *
 * `tone="dark"` is the same card for the dark screens (the camera): the card
 * turns to glass over the dark ground and the key to cream, as on the
 * payment receipt.
 *
 * ANDROID: the shadow is lib/shadow (iOS props on iOS, a boxShadow on
 * Android), the hairline a plain border, the key ObButton (which already draws
 * a clean Android shadow): nothing here renders differently on the two.
 */
export function StateCard({
  glyph,
  icon,
  title,
  line,
  action,
  quiet,
  tone = 'light',
  style,
}: {
  glyph: StateGlyph;
  /** See StatePlate: the caller's own drawing in place of the glyph. */
  icon?: (size: number, color: string) => React.ReactNode;
  title: string;
  line?: string;
  action?: StateAction;
  quiet?: StateAction;
  tone?: 'light' | 'dark';
  style?: StyleProp<ViewStyle>;
}) {
  const { scale, verticalScale } = useScale();
  const dark = tone === 'dark';
  return (
    <View
      style={[
        {
          alignItems: 'center',
          paddingTop: verticalScale(28),
          paddingBottom: verticalScale(24),
          paddingHorizontal: scale(22),
          borderRadius: scale(24),
          borderWidth: StyleSheet.hairlineWidth * 2,
        },
        dark
          ? { backgroundColor: 'rgba(26,24,20,.55)', borderColor: 'rgba(255,253,248,.16)' }
          : {
              backgroundColor: '#FFFFFF',
              borderColor: 'rgba(28,26,22,.10)',
              ...shadow({ color: colors.ink, opacity: 0.12, radius: scale(14), y: scale(10), elevation: 3 }),
            },
        style,
      ]}
      accessibilityRole="summary">
      <StatePlate glyph={glyph} icon={icon} size={scale(60)} />
      <Text
        style={{
          marginTop: verticalScale(18),
          fontFamily: 'Onest_600SemiBold',
          fontSize: scale(19),
          lineHeight: scale(24),
          letterSpacing: scale(-0.35),
          textAlign: 'center',
          color: dark ? colors.paper : colors.ink,
        }}>
        {title}
      </Text>
      {!!line && (
        <Text
          style={{
            marginTop: verticalScale(6),
            maxWidth: scale(300),
            fontFamily: 'Onest_400Regular',
            fontSize: scale(15),
            lineHeight: scale(22),
            textAlign: 'center',
            color: dark ? 'rgba(255,253,248,.75)' : ob.ink80,
          }}>
          {line}
        </Text>
      )}
      {!!action && (
        <View style={{ marginTop: verticalScale(20) }}>
          <ObButton
            compact
            label={action.label}
            withArrow
            variant={dark ? 'cream' : 'ink'}
            onPress={action.onPress}
          />
        </View>
      )}
      {!!quiet && <QuietLink action={quiet} dark={dark} style={{ marginTop: verticalScale(14) }} />}
    </View>
  );
}

/** The second way out: a link, in the app's link colour. */
export function QuietLink({
  action,
  dark = false,
  style,
}: {
  action: StateAction;
  dark?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const { scale } = useScale();
  return (
    <Pressable
      onPress={action.onPress}
      hitSlop={scale(10)}
      accessibilityRole="button"
      style={({ pressed }) => [{ opacity: pressed ? 0.55 : 1 }, style]}>
      <Text
        style={{
          fontFamily: 'Onest_600SemiBold',
          fontSize: scale(14.5),
          color: dark ? '#F2C062' : ob.link,
          includeFontPadding: false,
        }}>
        {action.label}
      </Text>
    </Pressable>
  );
}

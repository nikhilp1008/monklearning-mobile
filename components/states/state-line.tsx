import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { Glyph, type StateGlyph } from '@/components/states/glyphs';
import { QuietLink, type StateAction } from '@/components/states/state-card';
import { StatePlate } from '@/components/states/state-plate';
import { colors } from '@/constants/brand';
import { ob } from '@/constants/onboarding';
import { useScale } from '@/constants/scale';
import { shadow } from '@/lib/shadow';

/**
 * THE LINE: PART OF A PAGE CAME UP EMPTY.
 *
 * A search that matched nothing, a section with nothing in it yet. The rest of
 * the page still works, so the state is a line, not a card: an ink outline
 * glyph (no sky; this is not the page's main event), the words, at most one
 * link. `emphasis` is the part to set in ink, e.g. the search that was typed.
 */
export function StateLine({
  glyph,
  emphasis,
  text,
  link,
  style,
}: {
  glyph: StateGlyph;
  emphasis?: string;
  text: string;
  link?: StateAction;
  style?: StyleProp<ViewStyle>;
}) {
  const { scale, verticalScale } = useScale();
  return (
    <View style={[{ flexDirection: 'row', alignItems: 'flex-start', gap: scale(12) }, style]}>
      <View
        style={{
          width: scale(34),
          height: scale(34),
          borderRadius: scale(11),
          borderWidth: 1.5,
          borderColor: 'rgba(28,26,22,.14)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Glyph name={glyph} size={scale(18)} color={colors.ink} weight={1.7} />
      </View>
      <View style={{ flex: 1, paddingTop: verticalScale(4) }}>
        <Text style={{ fontFamily: 'Onest_400Regular', fontSize: scale(15), lineHeight: scale(22), color: ob.ink80 }}>
          {!!emphasis && <Text style={{ fontFamily: 'Onest_600SemiBold', color: colors.ink }}>{emphasis} </Text>}
          {text}
        </Text>
        {!!link && <QuietLink action={link} style={{ marginTop: verticalScale(6), alignSelf: 'flex-start' }} />}
      </View>
    </View>
  );
}

/**
 * THE BANNER: A PASSING CONDITION.
 *
 * Offline, reconnecting, the microphone off. The page under it keeps working
 * from what it has, and the banner leaves by itself when the condition ends.
 * The marigold dot is the app's "live" mark, the same as on the live class.
 */
export function StateBanner({
  bold,
  text,
  link,
  style,
}: {
  bold: string;
  text?: string;
  link?: StateAction;
  style?: StyleProp<ViewStyle>;
}) {
  const { scale, verticalScale } = useScale();
  return (
    <View
      accessibilityRole="alert"
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          gap: scale(10),
          paddingVertical: verticalScale(11),
          paddingHorizontal: scale(14),
          borderRadius: scale(14),
          backgroundColor: '#FFFFFF',
          borderWidth: StyleSheet.hairlineWidth * 2,
          borderColor: 'rgba(28,26,22,.14)',
          ...shadow({ color: colors.ink, opacity: 0.12, radius: scale(10), y: scale(6), elevation: 2 }),
        },
        style,
      ]}>
      <View
        style={{
          width: scale(8),
          height: scale(8),
          borderRadius: scale(4),
          backgroundColor: colors.marigold,
          // The dot's halo: a plain outer ring, which every Android version draws.
          borderWidth: 0,
          boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: scale(4), color: 'rgba(238,163,31,.18)' }],
        }}
      />
      <Text style={{ flex: 1, fontFamily: 'Onest_400Regular', fontSize: scale(14), lineHeight: scale(19), color: ob.ink80 }}>
        <Text style={{ fontFamily: 'Onest_600SemiBold', color: colors.ink }}>{bold}</Text>
        {text ? ` ${text}` : ''}
      </Text>
      {!!link && <QuietLink action={link} />}
    </View>
  );
}

/**
 * THE MOMENT: A SMALL WIN, e.g. every plan for the day ticked. A sky tick and
 * what was done, in the student's own words. No confetti. Bigger wins keep
 * their full sky screens (payment confirmed, topic finished, class dismissed).
 */
export function StateMoment({
  title,
  line,
  style,
}: {
  title: string;
  line?: string;
  style?: StyleProp<ViewStyle>;
}) {
  const { scale, verticalScale } = useScale();
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          gap: scale(14),
          paddingVertical: verticalScale(14),
          paddingHorizontal: scale(16),
          borderRadius: scale(16),
          backgroundColor: '#FFFFFF',
          borderWidth: StyleSheet.hairlineWidth * 2,
          borderColor: 'rgba(28,26,22,.10)',
        },
        style,
      ]}>
      <StatePlate glyph="check" size={scale(40)} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontFamily: 'Onest_600SemiBold', fontSize: scale(15), lineHeight: scale(20), color: colors.ink }}>
          {title}
        </Text>
        {!!line && (
          <Text
            style={{
              marginTop: verticalScale(3),
              fontFamily: 'Onest_400Regular',
              fontSize: scale(13),
              lineHeight: scale(18),
              color: ob.ink55,
            }}>
            {line}
          </Text>
        )}
      </View>
    </View>
  );
}

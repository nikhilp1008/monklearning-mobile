import { useEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { Markup, STIX } from '@/components/textbook/markup';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

/** The foot of a one-at-a-time screen: an optional index button, and arrows for anyone who would rather tap. */
export function ReviseDock({
  index,
  count,
  onPrev,
  onNext,
  indexLabel,
  onIndex,
}: {
  index: number;
  count: number;
  onPrev: () => void;
  onNext: () => void;
  indexLabel?: string;
  onIndex?: () => void;
}) {
  const { scale } = useScale();
  const insets = useSafeAreaInsets();
  const arrow = (d: 'prev' | 'next', disabled: boolean, onPress: () => void) => (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={d === 'prev' ? 'Previous' : 'Next'}
      style={({ pressed }) => [
        st.round,
        { width: scale(44), height: scale(44), borderRadius: scale(22) },
        disabled && st.off,
        pressed && st.pressed,
      ]}>
      <Svg viewBox="0 0 16 16" width={scale(16)} height={scale(16)} fill="none">
        <Path
          d={d === 'prev' ? 'M10 3.5 5.5 8 10 12.5' : 'M6 3.5 10.5 8 6 12.5'}
          stroke={colors.ink}
          strokeWidth={1.9}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Pressable>
  );
  return (
    <View
      style={[
        st.dock,
        { paddingHorizontal: scale(20), paddingTop: scale(12), paddingBottom: Math.max(insets.bottom, scale(12)) + scale(6) },
      ]}>
      {indexLabel && onIndex ? (
        <Pressable
          onPress={onIndex}
          accessibilityRole="button"
          style={({ pressed }) => [st.pill, { minHeight: scale(44), paddingHorizontal: scale(16), gap: scale(8) }, pressed && st.pressed]}>
          <Svg viewBox="0 0 16 16" width={scale(16)} height={scale(16)} fill="none">
            <Path d="M5.5 4h8M5.5 8h8M5.5 12h8" stroke={colors.ink} strokeWidth={1.7} strokeLinecap="round" />
            <Circle cx={2.5} cy={4} r={1} fill={colors.ink} />
            <Circle cx={2.5} cy={8} r={1} fill={colors.ink} />
            <Circle cx={2.5} cy={12} r={1} fill={colors.ink} />
          </Svg>
          <Text style={[st.pillText, { fontSize: scale(14) }]}>{indexLabel}</Text>
        </Pressable>
      ) : (
        <View />
      )}
      <View style={[st.arrows, { gap: scale(8) }]}>
        {arrow('prev', index <= 0, onPrev)}
        {arrow('next', index >= count - 1, onNext)}
      </View>
    </View>
  );
}

/**
 * The index: a sheet over the screen, grouped by topic, in ink and grey only.
 * The item in view is in SemiBold and marked "Here". In the reader's face a
 * row can be a topic (its number quiet, its name, `strong` for the one open)
 * or one of its parts (`sub`), set in under the name and closer together.
 */
export function IndexSheet({
  open,
  title,
  groups,
  current,
  onPick,
  onClose,
  face = 'stix',
}: {
  open: boolean;
  title: string;
  groups: { heading: string; rows: { key: number; html: string; num?: string; sub?: boolean; strong?: boolean }[] }[];
  current: number;
  onPick: (k: number) => void;
  onClose: () => void;
  /** 'onest' where the rows are the reader's own headings, not maths. */ face?: 'stix' | 'onest';
}) {
  const { scale, verticalScale } = useScale();
  const insets = useSafeAreaInsets();
  const t = useSharedValue(0);
  useEffect(() => {
    t.value = withTiming(open ? 1 : 0, { duration: 300 });
  }, [open, t]);
  const scrim = useAnimatedStyle(() => ({ opacity: t.value }));
  // Closed, the sheet sits a full screen below the bottom edge. It used to
  // sit 700pt below, but the sheet is up to 80% of the screen tall, and on a
  // Pro Max (932pt) that is 745pt: its handle and title showed over the
  // dock's foot. Only big phones are that tall, so only iPhone showed it.
  const { height: screenH } = useWindowDimensions();
  const sheet = useAnimatedStyle(() => ({ transform: [{ translateY: (1 - t.value) * screenH }] }));
  return (
    <View pointerEvents={open ? 'auto' : 'none'} style={StyleSheet.absoluteFill}>
      <Animated.View style={[StyleSheet.absoluteFill, st.scrim, scrim]}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} accessibilityLabel="Close" />
      </Animated.View>
      <Animated.View
        style={[
          st.sheet,
          { borderTopLeftRadius: scale(24), borderTopRightRadius: scale(24), paddingBottom: insets.bottom + verticalScale(12) },
          sheet,
        ]}>
        <View style={[st.grab, { marginTop: scale(8), marginBottom: scale(4) }]} />
        <Text style={[st.sheetTitle, { fontSize: scale(17), paddingHorizontal: scale(20), paddingVertical: scale(8) }]}>{title}</Text>
        <ScrollView contentContainerStyle={{ paddingHorizontal: scale(20), paddingBottom: scale(12) }}>
          {groups.map((g) => (
            <View key={g.heading || 'all'}>
              {!!g.heading && <Text style={[st.group, { fontSize: scale(12), marginTop: scale(18) }]}>{g.heading}</Text>}
              {g.rows.map((r, i) => (
                <Pressable
                  key={r.key}
                  onPress={() => onPick(r.key)}
                  accessibilityRole="button"
                  style={({ pressed }) => [
                    st.row,
                    { paddingVertical: scale(r.sub ? 10 : 14), gap: scale(8) },
                    r.sub && { paddingLeft: scale(32) },
                    g.rows[i + 1]?.sub && st.joined,
                    pressed && st.pressed,
                  ]}>
                  {face === 'stix' ? (
                    <Markup
                      html={r.html}
                      size={scale(16)}
                      look="stix"
                      style={{
                        flex: 1,
                        fontFamily: r.key === current ? STIX.semibold : STIX.regular,
                        fontSize: scale(16),
                        lineHeight: scale(23),
                        color: colors.ink,
                      }}
                    />
                  ) : (
                    <>
                      {!!r.num && <Text style={[st.num, { fontSize: scale(13), width: scale(24) }]}>{r.num}</Text>}
                      <Text
                        style={{
                          flex: 1,
                          fontFamily: r.key === current || r.strong ? 'Onest_600SemiBold' : r.sub ? 'Onest_400Regular' : 'Onest_500Medium',
                          fontSize: scale(r.sub ? 14.5 : 15),
                          lineHeight: scale(22),
                          color: r.sub && r.key !== current ? colors.slate : colors.ink,
                        }}>
                        {r.html}
                      </Text>
                    </>
                  )}
                  {r.key === current && <Text style={[st.here, { fontSize: scale(12) }]}>Here</Text>}
                </Pressable>
              ))}
            </View>
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
}

const st = StyleSheet.create({
  dock: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FFFFFF' },
  arrows: { flexDirection: 'row' },
  round: { borderWidth: 1, borderColor: 'rgba(28,26,22,.16)', alignItems: 'center', justifyContent: 'center' },
  off: { opacity: 0.35 },
  pressed: { opacity: 0.5 },
  pill: { flexDirection: 'row', alignItems: 'center', borderRadius: 999, borderWidth: 1, borderColor: 'rgba(28,26,22,.16)' },
  pillText: { fontFamily: 'Onest_600SemiBold', color: colors.ink },
  scrim: { backgroundColor: 'rgba(28,26,22,.28)' },
  sheet: { position: 'absolute', left: 0, right: 0, bottom: 0, maxHeight: '80%', backgroundColor: '#FFFFFF' },
  grab: { alignSelf: 'center', width: 36, height: 5, borderRadius: 3, backgroundColor: 'rgba(28,26,22,.14)' },
  sheetTitle: { fontFamily: 'Onest_600SemiBold', color: colors.ink },
  group: { fontFamily: 'Onest_600SemiBold', color: colors.faint },
  row: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'rgba(28,26,22,.08)' },
  /** A topic's number, quiet, as on the chapter home. */
  /** A topic opened over its parts: no rule between them. */
  joined: { borderBottomWidth: 0 },
  num: { fontFamily: 'Onest_500Medium', color: colors.quiet, fontVariant: ['tabular-nums'] },
  here: { fontFamily: 'Onest_600SemiBold', color: colors.faint },
});

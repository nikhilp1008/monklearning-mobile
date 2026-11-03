import { LinearGradient } from 'expo-linear-gradient';
import { forwardRef, useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { colors } from '@/constants/brand';
import { CONTROL_LABEL_MAX_SCALE } from '@/constants/font-scale';
import { useScale } from '@/constants/scale';
import { hapticSwitched } from '@/lib/haptics';
import { shadow } from '@/lib/shadow';
import Svg, { Path } from 'react-native-svg';

/**
 * ONE TOPIC ON THE TOPICS PAGE, the step before a live class.
 *
 * Picked every day, so it is lighter than the onboarding's selector: the pill
 * stays white, its edge turns into the held mic's marigold gradient (the same
 * three stops as components/dock-face's MarigoldDisc), and it lifts on a soft
 * marigold shadow. A tap gives a small press-and-spring and a light tick.
 *
 * The ring is a 1.5pt gradient showing round a white face, and the face's
 * padding gives back exactly what the ring takes, so choosing never resizes a
 * pill and the grid cannot re-flow under the finger.
 */

const HELD = ['#F6C766', '#EEA31F', '#E8922A'] as const;
const RING = 1.5;
/** The idle edge's width; the gradient ring is this much wider. */
const EDGE = 1;

export function TopicChoice({
  label,
  selected,
  wide,
  onPress,
}: {
  label: string;
  selected: boolean;
  /** A long name takes the row to itself, as a rounded card, not a pill. */
  wide: boolean;
  onPress: () => void;
}) {
  const { scale, verticalScale } = useScale();
  const radius = wide ? scale(16) : scale(99);
  const padV = verticalScale(wide ? 10 : 9);
  const padH = scale(14);

  const size = { fontSize: scale(14), lineHeight: scale(19) };

  const pop = useSharedValue(1);
  const on = useSharedValue(selected ? 1 : 0);
  useEffect(() => {
    on.value = withTiming(selected ? 1 : 0, { duration: 180 });
    if (selected) {
      pop.value = withSequence(
        withTiming(0.96, { duration: 70 }),
        withSpring(1, { damping: 12, stiffness: 320 })
      );
    }
  }, [selected, on, pop]);
  const popStyle = useAnimatedStyle(() => ({ transform: [{ scale: pop.value }] }));
  const ringStyle = useAnimatedStyle(() => ({ opacity: on.value }));

  return (
    <Animated.View
      style={[
        wide && styles.wide,
        // White behind it, so the iOS shadow follows the pill's shape.
        { borderRadius: radius, backgroundColor: '#fff' },
        selected && lift,
        popStyle,
      ]}>
      <Pressable
        onPress={() => {
          if (!selected) hapticSwitched();
          onPress();
        }}
        accessibilityRole="radio"
        accessibilityLabel={label}
        accessibilityState={{ selected }}
        style={{ borderRadius: radius, overflow: 'hidden' }}>
        <View style={[StyleSheet.absoluteFill, styles.idleEdge, { borderRadius: radius }]} />
        <Animated.View style={[StyleSheet.absoluteFill, ringStyle]}>
          <LinearGradient
            colors={HELD}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
        <View
          style={[
            styles.face,
            {
              margin: RING,
              borderRadius: radius - RING,
              paddingVertical: padV - (RING - EDGE),
              paddingHorizontal: padH - (RING - EDGE),
            },
          ]}>
          {/* Always sized by the bolder weight, so picking a topic never
              widens its pill and nudges the next one along. */}
          <View>
            <Text style={[size, styles.text, styles.textOn, !selected && styles.hidden]}>
              {label}
            </Text>
            {selected ? null : <Text style={[size, styles.text, styles.overlay]}>{label}</Text>}
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}

/**
 * "NOT IN THE LIST?" — THE TOPIC A STUDENT TYPES, on the same page.
 *
 * It used to be a "Just start talking" row that opened a second page to type
 * on, behind a loading screen: three screens for one sentence. Now the field
 * sits under the topics, and Start learning takes whichever was given.
 *
 * It takes the marigold ring once it holds words, not on focus: a picked topic
 * stays lit until the first letter replaces it, so the page never shows two
 * marigold choices at once. Focus alone darkens the edge and the pencil.
 *
 * It grows to three lines rather than scrolling sideways, so a student can
 * read back what they wrote, and Return sends it, as Start learning does.
 */
export const TopicField = forwardRef<
  TextInput,
  {
    value: string;
    onChangeText: (text: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onSubmit: () => void;
    placeholder: string;
  }
>(function TopicField({ value, onChangeText, onFocus, onBlur, onSubmit, placeholder }, ref) {
  const { scale, verticalScale } = useScale();
  const radius = scale(16);
  const [focused, setFocused] = useState(false);
  const lit = value.trim().length > 0;
  const on = useSharedValue(lit ? 1 : 0);
  useEffect(() => {
    on.value = withTiming(lit ? 1 : 0, { duration: 180 });
  }, [lit, on]);
  const ringStyle = useAnimatedStyle(() => ({ opacity: on.value }));
  const lineHeight = scale(19);
  // Sized from what it holds, one to three lines: a multiline field does not
  // reliably grow by itself inside this row, and kept to one line it scrolled
  // the start of a long request out of sight.
  const [height, setHeight] = useState(lineHeight);
  // Cleared from outside (a topic was tapped), no size change is reported.
  useEffect(() => {
    if (!value) setHeight(lineHeight);
  }, [value, lineHeight]);

  return (
    <View style={[styles.wide, { borderRadius: radius, backgroundColor: '#fff' }, lit && lift]}>
      <View style={{ borderRadius: radius, overflow: 'hidden' }}>
        <View
          style={[
            StyleSheet.absoluteFill,
            styles.idleEdge,
            focused && styles.focusEdge,
            { borderRadius: radius },
          ]}
        />
        <Animated.View style={[StyleSheet.absoluteFill, ringStyle]}>
          <LinearGradient
            colors={HELD}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
        <View
          style={[
            styles.face,
            styles.fieldRow,
            {
              margin: RING,
              borderRadius: radius - RING,
              paddingLeft: scale(14) - (RING - EDGE),
              paddingRight: scale(12),
              paddingVertical: verticalScale(12) - (RING - EDGE),
              gap: scale(9),
            },
          ]}>
          <View style={{ height: lineHeight, justifyContent: 'center' }}>
            <Svg width={scale(15)} height={scale(15)} viewBox="0 0 24 24" fill="none">
              <Path
                d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4z"
                stroke={focused || lit ? colors.ink : colors.slate}
                strokeWidth={1.9}
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <TextInput
            ref={ref}
            value={value}
            // Return sends; a pasted line break becomes a space.
            onChangeText={(text) => onChangeText(text.replace(/\s*\n\s*/g, ' '))}
            onFocus={() => {
              setFocused(true);
              onFocus?.();
            }}
            onBlur={() => {
              setFocused(false);
              onBlur?.();
            }}
            onContentSizeChange={(e) =>
              setHeight(
                Math.min(lineHeight * 3, Math.max(lineHeight, e.nativeEvent.contentSize.height))
              )
            }
            onSubmitEditing={onSubmit}
            submitBehavior="blurAndSubmit"
            multiline
            placeholder={placeholder}
            placeholderTextColor={colors.faint}
            returnKeyType="go"
            enablesReturnKeyAutomatically
            maxLength={140}
            maxFontSizeMultiplier={CONTROL_LABEL_MAX_SCALE}
            selectionColor={colors.marigold}
            cursorColor={colors.marigold}
            accessibilityLabel="Type a topic"
            style={[
              styles.input,
              {
                fontSize: scale(14),
                lineHeight,
                height,
                paddingTop: 0,
                paddingBottom: 0,
                textAlignVertical: 'top',
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
});

const lift = shadow({ color: colors.marigold, opacity: 0.28, radius: 5, y: 3, elevation: 3 });

const styles = StyleSheet.create({
  wide: { width: '100%' },
  idleEdge: { borderWidth: EDGE, borderColor: 'rgba(28,26,22,.16)' },
  face: { backgroundColor: '#fff' },
  text: { fontFamily: 'Onest_500Medium', color: colors.ink },
  textOn: { fontFamily: 'Onest_600SemiBold' },
  hidden: { opacity: 0 },
  fieldRow: { flexDirection: 'row', alignItems: 'flex-start' },
  focusEdge: { borderColor: 'rgba(28,26,22,.42)' },
  input: { flex: 1, fontFamily: 'Onest_500Medium', color: colors.ink, includeFontPadding: false },
  overlay: { position: 'absolute', top: 0, left: 0, right: 0 },
});

import { useEffect, useState, type ReactNode } from 'react';
import { StyleSheet, Text, View, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { Path } from 'react-native-svg';

/**
 * THE STORY'S CLOCK, and the five ways an element can arrive on the board.
 *
 * The handoff is one 16-second loop expressed the only way CSS can express a
 * timeline: forty-odd `animation: <keyframe> 16s linear <delay>s infinite`
 * declarations that happen to share a duration. Every percentage in those
 * keyframes is a percentage OF THE LOOP — 8% is 1.28s, 25% is one beat — so
 * the whole design is already written against a single clock. It just has
 * forty copies of it.
 *
 * Here there is one. A shared value runs 0→1 over 16s and every element reads
 * its own window out of it, which means the parts cannot drift against each
 * other and the UI thread runs one animation rather than forty. `seg` turns
 * the timeline into the local 0→1 each element needs, and the windows below
 * are written as the fractions the stylesheet writes, so they can be checked
 * against it line by line.
 *
 * WHY THE DELAY WRAPS RATHER THAN CLAMPS. A CSS animation with a positive
 * delay shows the element's own static style until the delay elapses, then
 * loops from that offset forever. Taking `t - delay` modulo 1 gives the
 * steady state exactly, and it also gives the right FIRST pass here, because
 * every keyframe in this design ends at opacity 0 — so an element whose delay
 * has not yet come round reads its keyframe's tail and is invisible, which is
 * what CSS would have shown. That is a property of this design, not a general
 * truth, and it is why `hold` is not implemented as a wrap.
 */

export const LOOP_MS = 16000;

/** Local 0→1 for the window [a, b] of the timeline, clamped outside it. */
export function seg(t: number, a: number, b: number) {
  'worklet';
  if (t <= a) return 0;
  if (t >= b) return 1;
  return (t - a) / (b - a);
}

/** Where this element is in its own copy of the loop, given its delay. */
export function local(t: number, delaySec: number) {
  'worklet';
  const x = t - delaySec / 16;
  return x < 0 ? x + 1 : x;
}

/** The handoff's three easings, by the names it gives them. */
const easeIn = Easing.bezier(0.2, 0.8, 0.2, 1).factory();
const easeOut = Easing.bezier(0.4, 0, 0.6, 1).factory();
const easePop = Easing.bezier(0.2, 0.9, 0.3, 1.3).factory();
export const easeSnapIn = Easing.bezier(0.2, 0.8, 0.2, 1).factory();
export const easeSnapOut = Easing.bezier(0.4, 0, 0.2, 1).factory();
const easeInOut = Easing.bezier(0.42, 0, 0.58, 1).factory();

/** The master clock, plus the two loops that run on their own time. */
export function useStoryClock() {
  const t = useSharedValue(0);
  /** 7s idle float and 1s wave: independent of the 16s story in the design,
   *  so independent here. Folding them into the master clock would make the
   *  float a 16s cycle and the wave a fifth of the speed it was drawn at. */
  const float = useSharedValue(0);
  const wave = useSharedValue(0);
  useEffect(() => {
    t.value = withRepeat(withTiming(1, { duration: LOOP_MS, easing: Easing.linear }), -1);
    float.value = withRepeat(withTiming(1, { duration: 7000, easing: Easing.linear }), -1);
    wave.value = withRepeat(withTiming(1, { duration: 1000, easing: Easing.linear }), -1);
  }, [t, float, wave]);
  return { t, float, wave };
}

/**
 * A LAYER — a whole beat's worth of elements, faded in and out together.
 *
 * `lay` runs a 4s beat, `lay2` the 8s one beats 1 and 2 share. The design
 * leans on this: nothing on the board changes at the 4s mark except the pill
 * and the bubble, so the lesson written in beat 1 is still standing behind
 * the answer in beat 2. Beats 3 and 4 do the same trick with the dark
 * surface, which is why they do not re-fade between them.
 */
export function Layer({
  t,
  delay,
  long = false,
  children,
  style,
}: {
  t: SharedValue<number>;
  delay: number;
  /** true = `lay2`, the 8s layer. */
  long?: boolean;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const holdTo = long ? 0.482 : 0.232;
  const gone = long ? 0.5 : 0.25;
  const anim = useAnimatedStyle(() => {
    const p = local(t.value, delay);
    const inP = easeIn(seg(p, 0, 0.035));
    const outP = easeOut(seg(p, holdTo, gone));
    return {
      opacity: inP * (1 - outP),
      transform: [{ scale: 0.985 + 0.015 * inP }],
    };
  });
  return <Animated.View style={[style, anim]}>{children}</Animated.View>;
}

/**
 * THE WRITE-ON SPEEDS, and the one that does not write.
 *
 * `.grow` is where the reveal finishes. The `hold` pair is the design's own
 * fourth keyframe — "element is already fully visible when its layer appears"
 * — and it exists because not everything on a board is being written. A
 * chapter label and the lesson's title are the page it is written ON; a hand
 * does not draw those, and animating them the same way made the board read as
 * six separate things moving instead of one lesson being taught.
 *
 * So labels and headings hold and the working writes. `hold` still fades in
 * over its own 256ms at its own delay, because appearing between two frames
 * is a cut, and a cut is more movement than a fade rather than less.
 */
const WRITE = {
  wr: { on: 0.006, grow: 0.08, off0: 0.255, off1: 0.26 },
  wrf: { on: 0.004, grow: 0.05, off0: 0.255, off1: 0.26 },
  wr2: { on: 0.006, grow: 0.08, off0: 0.505, off1: 0.51 },
  wrf2: { on: 0.004, grow: 0.05, off0: 0.505, off1: 0.51 },
  hold: { on: 0, grow: 0.016, off0: 0.255, off1: 0.26 },
  hold2: { on: 0, grow: 0.016, off0: 0.505, off1: 0.51 },
} as const;

export type WriteKind = keyof typeof WRITE;

/**
 * HANDWRITING, as a reveal rather than a font.
 *
 * The design draws text on by growing a background from 0% to 100% of the
 * element's width with `background-clip: text`, so the glyphs are painted
 * only where the background has reached. There is no equivalent in RN, and
 * the visible result of that trick is simply a left-to-right wipe — so this
 * clips the text box instead, which looks the same and costs one view.
 *
 * THE WIDTH HAS TO BE MEASURED FIRST. The clip works by animating the
 * container's width, and a container whose width is animating from 0 cannot
 * also be the thing that tells us how wide the text wants to be — the text
 * would be laid out into 0pt and wrap to one letter per line. So a copy is
 * rendered at its natural width, invisible, purely to be measured; the real
 * one is absolutely positioned over it with a fixed width so it keeps its
 * line breaks while the clip moves across it. Fixed-width elements in the
 * spec (the two 282-wide paragraphs) skip the measuring pass.
 */
export function Writes({
  t,
  delay,
  kind,
  text,
  style,
  width,
  left,
  top,
}: {
  t: SharedValue<number>;
  delay: number;
  kind: WriteKind;
  text: string;
  style: StyleProp<TextStyle>;
  /** Given for the paragraphs the spec sets a width on; measured otherwise. */
  width?: number;
  left: number;
  top: number;
}) {
  const [measured, setMeasured] = useState(0);
  const w = width ?? measured;
  const k = WRITE[kind];
  /** A held element needs no clip, and therefore no measuring pass either. */
  const wipes = kind !== 'hold' && kind !== 'hold2';
  const anim = useAnimatedStyle(() => {
    const p = local(t.value, delay);
    const leave = 1 - seg(p, k.off0, k.off1);
    if (!wipes) return { opacity: seg(p, 0, k.grow) * leave };
    return {
      width: w * seg(p, k.on, k.grow),
      opacity: (p < k.on ? 0 : 1) * leave,
    };
  });

  if (!wipes) {
    return (
      <Animated.View style={[{ position: 'absolute', left, top }, anim]} pointerEvents="none">
        <Text style={[style, width === undefined ? null : { width }]}>{text}</Text>
      </Animated.View>
    );
  }

  return (
    <View style={{ position: 'absolute', left, top }}>
      {width === undefined && (
        <Text
          style={[style, { opacity: 0 }]}
          onLayout={(e) => setMeasured(e.nativeEvent.layout.width)}>
          {text}
        </Text>
      )}
      <Animated.View
        pointerEvents="none"
        style={[
          { overflow: 'hidden' },
          width === undefined && { position: 'absolute', left: 0, top: 0 },
          anim,
        ]}>
        <Text style={[style, w ? { width: w } : null]}>{text}</Text>
      </Animated.View>
    </View>
  );
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

/**
 * A STROKE, DRAWN.
 *
 * The design gives every drawn path `pathLength="100"` so its dash offset can
 * be written as a percentage. react-native-svg does not implement that
 * attribute — it is absent from the JS props and from the Apple side — so the
 * lengths here are the real ones, measured off the same path data with
 * `getTotalLength()` and recorded beside each call. Guessing them shows up as
 * a stroke that finishes early and then sits still, or one that never closes.
 */
export function Draw({
  t,
  delay,
  d,
  length,
  stroke,
  strokeWidth,
  long = false,
}: {
  t: SharedValue<number>;
  delay: number;
  d: string;
  /** getTotalLength() of `d`. See the note above. */
  length: number;
  stroke: string;
  strokeWidth: number;
  /** true = `draw2`, the variant that holds to the 8s layer's end. */
  long?: boolean;
}) {
  const off0 = long ? 0.505 : 0.255;
  const off1 = long ? 0.51 : 0.26;
  const props = useAnimatedProps(() => {
    const p = local(t.value, delay);
    return {
      strokeDashoffset: length * (1 - seg(p, 0, 0.07)),
      opacity: 1 - seg(p, off0, off1),
    };
  });
  return (
    <AnimatedPath
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      strokeDasharray={`${length}`}
      animatedProps={props}
    />
  );
}

/** `pop` — scale .6 → 1 with overshoot. The overshoot is in the easing, not
 *  in the keyframe, so it cannot be expressed as a plain interpolation. */
export function Pop({
  t,
  delay,
  long = false,
  children,
  style,
}: {
  t: SharedValue<number>;
  delay: number;
  long?: boolean;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const off0 = long ? 0.505 : 0.255;
  const off1 = long ? 0.51 : 0.26;
  const anim = useAnimatedStyle(() => {
    const p = local(t.value, delay);
    const inP = easePop(seg(p, 0, 0.025));
    return {
      opacity: seg(p, 0, 0.025) * (1 - seg(p, off0, off1)),
      transform: [{ scale: 0.6 + 0.4 * inP }],
    };
  });
  return <Animated.View style={[style, anim]}>{children}</Animated.View>;
}

/**
 * `up` — 46pt of travel and a fade, for the student's question.
 *
 * `travel` arrives already scaled. A worklet cannot call the design-scale
 * function, so passing the raw 46 would have shipped the one distance on this
 * board that ignores the device — right on a 390pt phone and wrong everywhere
 * else, and silently so.
 */
export function Up({
  t,
  delay,
  travel,
  long = false,
  children,
  style,
}: {
  t: SharedValue<number>;
  delay: number;
  /** Device points, already through `ds`. */
  travel: number;
  long?: boolean;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const off0 = long ? 0.505 : 0.255;
  const off1 = long ? 0.51 : 0.26;
  const anim = useAnimatedStyle(() => {
    const p = local(t.value, delay);
    const inP = easeIn(seg(p, 0, 0.03));
    return {
      opacity: seg(p, 0, 0.03) * (1 - seg(p, off0, off1)),
      transform: [{ translateY: travel * (1 - inP) }],
    };
  });
  return <Animated.View style={[style, anim]}>{children}</Animated.View>;
}

/**
 * THE LISTENING BARS in the "Drona is teaching" pill.
 *
 * Four 3×18 amber bars on a 1s ease-in-out cycle with staggered NEGATIVE
 * delays, which is how the design keeps them out of step — a negative delay
 * starts the animation already part-way through rather than waiting.
 */
export function WaveBars({ wave, scale }: { wave: SharedValue<number>; scale: (n: number) => number }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: scale(3), height: scale(18) }}>
      {[0.1, 0.4, 0.7, 0.25].map((phase) => (
        <WaveBar key={phase} wave={wave} phase={phase} scale={scale} />
      ))}
    </View>
  );
}

function WaveBar({
  wave,
  phase,
  scale,
}: {
  wave: SharedValue<number>;
  phase: number;
  scale: (n: number) => number;
}) {
  const anim = useAnimatedStyle(() => {
    const p = (wave.value + phase) % 1;
    // .3 → 1 → .3, eased between each pair of keyframes as CSS does it.
    const v = p < 0.5 ? 0.3 + 0.7 * easeInOut(p / 0.5) : 1 - 0.7 * easeInOut((p - 0.5) / 0.5);
    return { transform: [{ scaleY: v }] };
  });
  return (
    <Animated.View
      style={[
        { width: scale(3), height: scale(18), borderRadius: scale(2), backgroundColor: '#EEA31F' },
        anim,
      ]}
    />
  );
}

export const storyStyles = StyleSheet.create({
  fill: { ...StyleSheet.absoluteFillObject },
});

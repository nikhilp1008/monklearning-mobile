import { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useFrameCallback,
  useSharedValue,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import Svg, { ClipPath, Defs, Ellipse, FeGaussianBlur, Filter, G, Rect } from 'react-native-svg';

/**
 * THE DOCK'S RING — the moving gradient the command dock shows when a student
 * touches it, ported from `dock_handoff/Classroom Dock 8a 8b.dc.html`.
 *
 * The dock is plain white and colourless for the whole class. This is the only
 * colour it ever shows and it shows it only while someone is interacting: a
 * bright hairline hugging the pill, plus a soft halo around it, both drifting.
 * Hold the mic and it turns green and speeds up; pause and it turns grey and
 * stops where it stands; 1.5s after the last touch it fades out.
 *
 * ONE THING CANNOT BE BUILT THE PROTOTYPE'S WAY, and it is not a choice.
 * The prototype softens everything with CSS `filter: blur()`. React Native
 * 0.81 accepts `filter` in its types and implements it on Android, but on iOS
 * `RCTViewComponentView.mm` reads only `brightness` and `opacity` out of the
 * filter list — `blur` is silently dropped. Porting the markup literally would
 * have drawn hard-edged ovals on iPhone and the right thing on Android, which
 * is the same trap `fontStyle: 'italic'` set on the board.
 *
 * So every blur here happens inside SVG, where `FeGaussianBlur` has a real
 * native implementation on both platforms
 * (`apple/Filters/RNSVGFeGaussianBlur.mm`, `android/.../FeGaussianBlurView.java`).
 * The radii, colours, sizes, drift paths and periods are all the prototype's.
 */

export type RingMood = 'teacher' | 'student' | 'paused';

/** The prototype's palettes verbatim — its `T2`, `S2` and `G2`. */
const PALETTE: Record<RingMood, readonly [string, string, string, string]> = {
  teacher: ['#FFB13D', '#E8542F', '#FFD98A', '#FF7A3D'],
  student: ['#25B36A', '#12D6B8', '#B4F5D6', '#3FE0A0'],
  paused: ['#8A857A', '#B8B2A4', '#D6D1C4', '#A39D90'],
};

/**
 * The four blobs as fractions of the ring box, and their drift.
 *
 * `left/top/w/h` are the prototype's inline percentages. `from`/`to` are its
 * `auraA`–`auraD` keyframes as [translateX, translateY, scale], the two
 * translations being fractions of the blob's OWN width and height — that is
 * what a CSS percentage translate means, which is why they are multiplied by
 * `bw`/`bh` rather than by the ring.
 *
 * `hair` is the hairline layer's blur. The halo's is not listed because the
 * halo blurs once for all four, as the prototype does.
 *
 * `dur` is the CSS animation-duration; the animation is `alternate`, so a
 * round trip is twice it.
 */
const BLOBS = [
  { left: -0.1, top: -0.4, w: 0.6, h: 2.0, opacity: 1, dur: 4200, hair: 3,
    from: [-0.25, 0.35, 1.0], to: [0.7, 0.05, 1.3] },
  { left: -0.1, top: -0.4, w: 0.6, h: 2.0, opacity: 1, dur: 5100, hair: 3,
    from: [0.8, 0.45, 1.15], to: [0.0, -0.05, 0.85] },
  { left: 0.0, top: -0.3, w: 0.45, h: 1.7, opacity: 0.85, dur: 3600, hair: 2.4,
    from: [0.25, 0.7, 0.9], to: [0.45, -0.15, 1.2] },
  { left: -0.1, top: -0.4, w: 0.6, h: 2.0, opacity: 0.8, dur: 6000, hair: 3.9,
    from: [0.6, -0.1, 1.2], to: [-0.15, 0.5, 0.8] },
] as const;

/** The prototype's `fast`: `d * .42` while the student holds the mic. */
const FAST = 0.42;
/** Insets of the two layers from the pill's own edge, from the prototype. */
const HAIR_INSET = 1.5;
const HALO_INSET = 6;
/** `filter: blur(14px)` on the prototype's glow layer, and its `opacity:.55`. */
const HALO_BLUR = 14;
const HALO_OPACITY = 0.55;

type Field = { w: number; h: number };

/**
 * Where a blob is at phase `p`.
 *
 * A triangle off the phase, then smoothstepped: the triangle is CSS
 * `alternate` and the smoothstep is its `ease-in-out`. Shared by both layers
 * so a blob is in the same place in the hairline and in the halo, which is
 * what the prototype's identical `auraA`–`auraD` on both layers means.
 */
function blobAt(spec: (typeof BLOBS)[number], p: number, bw: number, bh: number) {
  'worklet';
  const tri = p < 0.5 ? p * 2 : 2 - p * 2;
  const t = tri * tri * (3 - 2 * tri);
  const [fx, fy, fs] = spec.from;
  const [tx, ty, ts] = spec.to;
  return { dx: (fx + (tx - fx) * t) * bw, dy: (fy + (ty - fy) * t) * bh, s: fs + (ts - fs) * t };
}

/**
 * THE HAIRLINE — a 1.5pt band of saturated colour right against the pill.
 *
 * Each blob is one blurred `<Ellipse>` in its own small `<Svg>`, moved by a
 * transform on the view around it. The SVG never changes, so its Core Image
 * pass is rasterised once and every frame after is a layer transform; only the
 * band's own 1.5pt shows, the pill covering the rest.
 */
function HairBlob({
  field,
  spec,
  colour,
  phases,
  index,
  id,
}: {
  field: Field;
  spec: (typeof BLOBS)[number];
  colour: string;
  phases: SharedValue<number[]>;
  index: number;
  id: string;
}) {
  const bw = field.w * spec.w;
  const bh = field.h * spec.h;
  // The blur spreads past the ellipse, so the canvas has to be wider than it
  // or the soft edge is cut off square. Three sigma is where a Gaussian ends.
  const pad = Math.ceil(spec.hair * 3);
  const sw = bw + pad * 2;
  const sh = bh + pad * 2;

  const style = useAnimatedStyle(() => {
    const { dx, dy, s } = blobAt(spec, phases.value[index] ?? 0, bw, bh);
    return { transform: [{ translateX: dx }, { translateY: dy }, { scale: s }] };
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        {
          position: 'absolute',
          left: field.w * spec.left - pad,
          top: field.h * spec.top - pad,
          width: sw,
          height: sh,
          opacity: spec.opacity,
        },
        style,
      ]}>
      <Svg width={sw} height={sh}>
        <Defs>
          {/* Widened: a filter's default region is the bounding box plus 10%,
              which would clip this blur. */}
          <Filter id={id} x="-60%" y="-60%" width="220%" height="220%">
            <FeGaussianBlur stdDeviation={spec.hair} />
          </Filter>
        </Defs>
        <Ellipse cx={sw / 2} cy={sh / 2} rx={bw / 2} ry={bh / 2} fill={colour} filter={`url(#${id})`} />
      </Svg>
    </Animated.View>
  );
}

const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);

function HaloBlob({
  field,
  origin,
  spec,
  colour,
  phases,
  index,
}: {
  field: Field;
  origin: { x: number; y: number };
  spec: (typeof BLOBS)[number];
  colour: string;
  phases: SharedValue<number[]>;
  index: number;
}) {
  const bw = field.w * spec.w;
  const bh = field.h * spec.h;
  const cx0 = origin.x + field.w * spec.left + bw / 2;
  const cy0 = origin.y + field.h * spec.top + bh / 2;
  const props = useAnimatedProps(() => {
    const { dx, dy, s } = blobAt(spec, phases.value[index] ?? 0, bw, bh);
    return { cx: cx0 + dx, cy: cy0 + dy, rx: (bw / 2) * s, ry: (bh / 2) * s };
  });
  return <AnimatedEllipse animatedProps={props} fill={colour} opacity={spec.opacity} />;
}

/**
 * THE HALO — the prototype's glow layer, in the prototype's order.
 *
 * Its light source is NOT a ring: the glow layer is `inset:-6` with
 * `overflow:hidden`, so what gets blurred is the pill-plus-6 rounded rect
 * FILLED with the drifting blob colours. Blurring that by 14 is what throws a
 * tight glow a few points past the pill, and the opaque pill then covers the
 * middle of it.
 *
 * That ordering is the whole reason this is SVG and not two nested views: the
 * clip has to happen BEFORE the blur, and an RN view can do either but never
 * blur what it has just clipped. Built the other way round — unclipped blobs,
 * each blurred on its own — the light source is a 190pt field instead of a
 * 76pt pill, and the glow washes a third of the screen instead of hugging the
 * dock. Measured that way first; it was not close.
 *
 * So: `<G filter=blur><G clipPath=pill+6>` with four ellipses inside, which is
 * `filter: blur(14px)` over `overflow:hidden` over the blobs, in that order.
 * The filter re-rasterises each frame because the ellipses move under it — one
 * Core Image pass over about 250x110 points, which is small enough to be
 * cheaper than the four separate blurred canvases the hairline uses.
 */
function Halo({
  ring,
  rotate,
  mood,
  phases,
  id,
}: {
  /** The pill's own box. The halo's clip is this plus HALO_INSET all round. */
  ring: Field;
  rotate: boolean;
  mood: RingMood;
  phases: SharedValue<number[]>;
  id: string;
}) {
  const boxW = ring.w + HALO_INSET * 2;
  const boxH = ring.h + HALO_INSET * 2;
  // Room for the blur to spread beyond the clip, or the glow ends square.
  const pad = Math.ceil(HALO_BLUR * 3);
  const w = boxW + pad * 2;
  const h = boxH + pad * 2;
  /**
   * Portrait turns the whole blob field 90 degrees — the prototype's
   * `[data-rot]` wrapper and its `fitRot()`, which sizes that wrapper from the
   * parent's opposite axis. Without it the blobs, 60% wide and 200% tall,
   * would streak the wrong way across a horizontal pill; with it a wide dock
   * and a tall one show the same drift.
   */
  const field: Field = rotate ? { w: boxH, h: boxW } : { w: boxW, h: boxH };
  const origin = { x: w / 2 - field.w / 2, y: h / 2 - field.h / 2 };
  const palette = PALETTE[mood];

  return (
    <Svg width={w} height={h} style={{ position: 'absolute', left: -pad, top: -pad }}>
      <Defs>
        <Filter id={`${id}-soft`} x="-50%" y="-50%" width="200%" height="200%">
          <FeGaussianBlur stdDeviation={HALO_BLUR} />
        </Filter>
        <ClipPath id={`${id}-box`}>
          <Rect
            x={pad}
            y={pad}
            width={boxW}
            height={boxH}
            rx={Math.min(boxW, boxH) / 2}
            ry={Math.min(boxW, boxH) / 2}
          />
        </ClipPath>
      </Defs>
      <G filter={`url(#${id}-soft)`}>
        <G clipPath={`url(#${id}-box)`}>
          <G rotation={rotate ? 90 : 0} origin={`${w / 2}, ${h / 2}`}>
            {BLOBS.map((spec, i) => (
              <HaloBlob
                key={i}
                field={field}
                origin={origin}
                spec={spec}
                colour={palette[i]}
                phases={phases}
                index={i}
              />
            ))}
          </G>
        </G>
      </G>
    </Svg>
  );
}

/** The hairline's blob field, rotated the same way the halo's is. */
function HairField({
  ring,
  rotate,
  mood,
  phases,
  id,
}: {
  ring: Field;
  rotate: boolean;
  mood: RingMood;
  phases: SharedValue<number[]>;
  id: string;
}) {
  const field: Field = rotate ? { w: ring.h, h: ring.w } : { w: ring.w, h: ring.h };
  const palette = PALETTE[mood];
  return (
    <View
      pointerEvents="none"
      style={[
        {
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: field.w,
          height: field.h,
          marginLeft: -field.w / 2,
          marginTop: -field.h / 2,
        },
        rotate && { transform: [{ rotate: '90deg' }] },
      ]}>
      {BLOBS.map((spec, i) => (
        <HairBlob
          key={i}
          field={field}
          spec={spec}
          colour={palette[i]}
          phases={phases}
          index={i}
          id={`${id}-h${i}`}
        />
      ))}
    </View>
  );
}

export function DockRing({
  mood,
  awake,
  vertical,
  id,
}: {
  mood: RingMood;
  /** True while a student is touching the dock, and for 1.5s after. */
  awake: boolean;
  /** The landscape rail. Portrait rotates its blob field; landscape does not. */
  vertical?: boolean;
  /** Unique across mounted rings — SVG ids are not scoped per `<Svg>`. */
  id: string;
}) {
  const [ring, setRing] = useState<Field | null>(null);
  const onLayout = useCallback(
    (w: number, h: number) => setRing((r) => (r && r.w === w && r.h === h ? r : { w, h })),
    []
  );

  const phases = useSharedValue<number[]>([0, 0, 0, 0]);
  /**
   * One frame callback for the whole ring, advancing all four phases.
   *
   * This is where `animation-duration` and `animation-play-state` live. A
   * changed duration takes effect on the next frame with no discontinuity —
   * restarting a `withRepeat` would have re-based the oscillation on wherever
   * the blob happened to be. Paused simply stops accumulating, which leaves
   * the blob standing where it is, exactly as the prototype's `paused` does.
   */
  const frozen = mood === 'paused';
  const fast = mood === 'student';
  useFrameCallback((frame) => {
    if (frozen || !awake) return;
    const dt = frame.timeSincePreviousFrame ?? 16;
    const next = [0, 0, 0, 0];
    for (let i = 0; i < 4; i++) {
      // A round trip is two durations: the CSS animation is `alternate`.
      const cycle = BLOBS[i].dur * 2 * (fast ? FAST : 1);
      next[i] = (phases.value[i] + dt / cycle) % 1;
    }
    phases.value = next;
  }, true);

  /** `glow`'s opacity, 0 to .55 over .5s, both ways. */
  const haloStyle = useAnimatedStyle(() => ({
    opacity: withTiming(awake ? HALO_OPACITY : 0, { duration: 500 }),
  }));

  /**
   * The hairline is revealed by a white cover shrinking upward, not by fading:
   * the prototype animates `#coverQa`'s height from 100% to 0% over .55s. The
   * ring wipes on from the bottom, which is what makes it read as being
   * switched on rather than turned up.
   */
  const coverStyle = useAnimatedStyle(() => ({
    height: withTiming(awake ? 0 : (ring?.h ?? 0) + HAIR_INSET * 2, { duration: 550 }),
  }));

  return (
    <>
      {/* Both layers sit behind the pill, so the pill's own white covers the
          middle of them and only the edge shows. */}
      <Animated.View
        pointerEvents="none"
        style={[styles.layer, { top: 0, left: 0 }, haloStyle]}>
        {ring && <Halo ring={ring} rotate={!vertical} mood={mood} phases={phases} id={id} />}
      </Animated.View>

      <View
        pointerEvents="none"
        onLayout={(e) => onLayout(e.nativeEvent.layout.width, e.nativeEvent.layout.height)}
        style={[
          styles.hair,
          { top: -HAIR_INSET, right: -HAIR_INSET, bottom: -HAIR_INSET, left: -HAIR_INSET },
        ]}>
        {ring && <HairField ring={ring} rotate={!vertical} mood={mood} phases={phases} id={id} />}
        <Animated.View style={[styles.cover, coverStyle]} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // The halo is positioned at the pill's own origin; its SVG reaches out past
  // it by its own padding, and nothing clips it at the view level — the clip
  // that matters happens inside the SVG, before the blur.
  layer: { position: 'absolute' },
  // The hairline does clip, because it is meant to read as a bright 1.5pt edge
  // around the pill rather than as a glow.
  hair: { position: 'absolute', borderRadius: 99, overflow: 'hidden' },
  cover: { position: 'absolute', left: 0, right: 0, top: 0, backgroundColor: '#FFFFFF' },
});

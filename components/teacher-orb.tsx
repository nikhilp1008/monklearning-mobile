import { useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Defs, Ellipse, Path, RadialGradient, Rect, Stop } from 'react-native-svg';

import type { TeacherId } from '@/lib/preferences';

/**
 * The teacher's orb, shared.
 *
 * Lived in app/profile.tsx, where it marks the chosen teacher. Home's
 * observation strip needs the same mark for the same reason -- to say WHICH
 * teacher is speaking -- so it moved here rather than being drawn a second
 * time and drifting.
 */

/** The two conic ramps and their halos, verbatim from the brand kit's
 *  about.html and index.html. */
export const ORB_PALETTES: Record<TeacherId, { conic: readonly string[]; halo: string }> = {
  drona: {
    conic: ['#6E2A06', '#E2601C', '#EEA31F', '#E2601C', '#6E2A06'],
    halo: '#FFD08A', // rgba(255,208,138,.85)
  },
  vedha: {
    conic: ['#C98A1F', '#FCEBC4', '#F2C36B', '#FCEBC4', '#C98A1F'],
    halo: '#FFF6E0', // rgba(255,246,224,.9)
  },
};

/** Shared by the orb cross-fade and Profile's Speaks knob. */
export const SWITCH_EASING = Easing.bezier(0.2, 0.75, 0.2, 1);

/**
 * The teacher's orb, as the landing page and the About page draw it.
 *
 *   1  conic-gradient(from 20deg, dark, mid, bright, mid, dark)  blur(9px)   6s
 *   2  radial-gradient(circle at 32% 30%, halo .85, transparent 55%) blur(5px) 9s reverse
 *   3  radial-gradient(closest-side, white .5, transparent) at 16%/10%  blur(3px)
 *
 * Layer 1 is a CONIC gradient, and that is the whole character of the mark:
 * colour sweeping around the centre like an iris. Two earlier attempts here
 * were a linear gradient and then a radial one -- a radial radiates from a
 * point, so it renders a shaded ball, which is a different object.
 *
 * Neither react-native-svg nor the SVG spec has a conic gradient, so this is
 * the standard construction for one: 96 angular wedges, each a flat colour
 * sampled along the ramp. At 56pt each wedge is 1.83pt of arc, which is below
 * the threshold where banding is visible -- and the ramp starts and ends on
 * the same colour, so there is no seam where the sweep closes either.
 *
 * The `blur(9px)` matters more than it looks, and ignoring it was the second
 * mistake here. Rendered at the site's own 80-110px the blur is ~9% of the
 * diameter and the sweep stays crisp; at 24A's 56px it is 16%, and it smooths
 * the conic almost flat. A sharp conic at this size is as wrong as a radial
 * one, in the other direction.
 *
 * `filter: blur` does not exist in React Native, but for a conic the blur is
 * separable and the angular half is exactly reproducible. At 56px the bulk of
 * the orb's area sits near r=17.4px, so a 9px arc-length blur is a Gaussian of
 * sigma = 9/17.4 rad = 30 degrees across the ramp -- so the ramp is convolved
 * with that Gaussian before it is drawn, which keeps 75% of the raw contrast
 * and matches the reference. The radial half of the blur shows up in two
 * places: the rim, which the parent's clip handles, and the centre, where all
 * 96 wedges converge on a singularity that renders as a visible spike -- so a
 * cap of the ramp's mean colour covers the middle 26%.
 */
const CONIC_WEDGES = 96;
const CONIC_FROM = 20; // `from 20deg`
const CONIC_R = 71; // 50*sqrt(2), so the square's corners stay covered

/** Wedge geometry is palette-independent, so it is built once. */
const WEDGE_PATHS: string[] = (() => {
  const step = 360 / CONIC_WEDGES;
  // 0deg is straight up and the angle increases clockwise, matching CSS.
  const at = (deg: number) => {
    const t = ((deg + CONIC_FROM) * Math.PI) / 180;
    return [50 + CONIC_R * Math.sin(t), 50 - CONIC_R * Math.cos(t)];
  };
  return Array.from({ length: CONIC_WEDGES }, (_, i) => {
    const [x0, y0] = at(i * step);
    // A hair of overlap, so no seam shows between neighbouring wedges.
    const [x1, y1] = at((i + 1) * step + 0.35);
    return `M50 50L${x0.toFixed(2)} ${y0.toFixed(2)}A${CONIC_R} ${CONIC_R} 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)}Z`;
  });
})();

/** The mean of the ramp — what a heavy blur resolves the centre to. */
function meanHex(stops: readonly string[]): string {
  const p = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  // The first and last stop are the same colour on both palettes, so the last
  // is dropped rather than counted twice.
  const used = stops.slice(0, -1).map(p);
  const avg = (j: number) => Math.round(used.reduce((n, c) => n + c[j], 0) / used.length);
  return `rgb(${avg(0)},${avg(1)},${avg(2)})`;
}

/** Interpolate two hex stops, kept as channels so the blur can average them. */
function mixRgb(a: string, b: string, f: number): [number, number, number] {
  const p = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [ar, ag, ab] = p(a);
  const [br, bg, bb] = p(b);
  return [ar + (br - ar) * f, ag + (bg - ag) * f, ab + (bb - ab) * f];
}

/** Degrees of Gaussian blur across the ramp — `blur(9px)` at 56px. See above. */
const CONIC_BLUR_DEG = 30;

/**
 * The unchosen orb.
 *
 * 24A lays `rgba(255,255,255,.66)` over it, and that works for Drona's browns
 * and fails for Vedha's creams. Measured against a white page: Drona veils to
 * 0.814 luminance, Vedha to 0.931 — seven hundredths off the page itself. One
 * reads as unchosen, the other as an empty circle, and they sit side by side.
 * Lowering opacity is the same operation and fails the same way, because
 * fading toward white IS a white veil.
 *
 * So the orb is greyed instead, and both palettes are normalised to one
 * lightness: each wedge keeps half its variation around a fixed 0.72 mean. The
 * sweep survives, so it is visibly the same object; the colour does not, which
 * is the whole signal.
 */

const IDLE_LUM = 0.72;
const IDLE_CONTRAST = 0.5;

const luminance = ([r, g, b]: [number, number, number]) =>
  (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

/**
 * Wedge colours along the ramp, convolved with the blur.
 *
 * Circular convolution, because the ramp wraps: wedge 0's neighbours include
 * wedge 95, and treating the join as an edge would darken it into the seam the
 * matched end stops exist to avoid.
 */
function wedgeColors(stops: readonly string[], dimmed: boolean): string[] {
  const raw = Array.from({ length: CONIC_WEDGES }, (_, i) => {
    const t = ((i + 0.5) / CONIC_WEDGES) * (stops.length - 1);
    const lo = Math.min(Math.floor(t), stops.length - 2);
    return mixRgb(stops[lo], stops[lo + 1], t - lo);
  });

  const sigma = CONIC_BLUR_DEG / (360 / CONIC_WEDGES);
  const half = Math.max(1, Math.round(3 * sigma));
  const kernel = Array.from({ length: 2 * half + 1 }, (_, d) =>
    Math.exp(-((d - half) ** 2) / (2 * sigma * sigma))
  );
  const weight = kernel.reduce((a, b) => a + b, 0);

  const blurred = raw.map((_, i) => {
    const acc: [number, number, number] = [0, 0, 0];
    kernel.forEach((w, j) => {
      const c = raw[(i + j - half + CONIC_WEDGES * 2) % CONIC_WEDGES];
      for (let ch = 0; ch < 3; ch++) acc[ch] += c[ch] * w;
    });
    return acc.map((v) => v / weight) as [number, number, number];
  });

  if (!dimmed) {
    return blurred.map((c) => `rgb(${c.map(Math.round).join(',')})`);
  }

  const lums = blurred.map(luminance);
  const mean = lums.reduce((a, b) => a + b, 0) / lums.length;
  return lums.map((l) => {
    const v = Math.round(255 * Math.min(1, Math.max(0, IDLE_LUM + (l - mean) * IDLE_CONTRAST)));
    return `rgb(${v},${v},${v})`;
  });
}

/**
 * Both states of both orbs, built once at module load.
 *
 * The convolution is ~14k multiply-adds per orb. Computing it inside the
 * component meant paying it on every tap; there are exactly four possible
 * results, so they are cached here and interaction never touches the maths.
 *
 * Declared HERE, below `wedgeColors` and the consts it reads, not up beside
 * TEACHERS. `wedgeColors` is a hoisted function declaration, but `luminance`,
 * `WEDGE_PATHS` and `CONIC_BLUR_DEG` are `const` -- so calling it any earlier
 * hit their temporal dead zone and threw at import time. tsc and eslint both
 * pass that; only running the app catches it.
 */
const ORB_FILLS: Record<TeacherId, { on: string[]; off: string[] }> = Object.fromEntries(
  (Object.keys(ORB_PALETTES) as TeacherId[]).map((id) => [
    id,
    {
      on: wedgeColors(ORB_PALETTES[id].conic, false),
      off: wedgeColors(ORB_PALETTES[id].conic, true),
    },
  ])
) as Record<TeacherId, { on: string[]; off: string[] }>;

export function TeacherOrb({
  teacher,
  dimmed = false,
  size,
}: {
  teacher: TeacherId;
  /** Greyed and normalised to one lightness — see IDLE_LUM. */
  dimmed?: boolean;
  size: number;
}) {
  const palette = ORB_PALETTES[teacher];
  const swirl = useSharedValue(0);
  const halo = useSharedValue(0);
  /** 0 chosen, 1 unchosen. Drives the cross-fade on the UI thread. */
  const off = useSharedValue(dimmed ? 1 : 0);

  useEffect(() => {
    swirl.value = withRepeat(withTiming(360, { duration: 6000, easing: Easing.linear }), -1, false);
    // Negative: `ringSpin` runs the other way, which is what stops the two
    // layers locking together into one rigid pattern.
    halo.value = withRepeat(withTiming(-360, { duration: 9000, easing: Easing.linear }), -1, false);
  }, [swirl, halo]);

  useEffect(() => {
    off.value = withTiming(dimmed ? 1 : 0, { duration: 320, easing: SWITCH_EASING });
  }, [dimmed, off]);

  const swirlTurn = useAnimatedStyle(() => ({ transform: [{ rotate: `${swirl.value}deg` }] }));
  const haloTurn = useAnimatedStyle(() => ({ transform: [{ rotate: `${halo.value}deg` }] }));
  const greyFade = useAnimatedStyle(() => ({ opacity: off.value }));
  const colourFade = useAnimatedStyle(() => ({ opacity: 1 - off.value }));

  const inset24 = -size * 0.24;
  const inset30 = -size * 0.3;
  const fills = ORB_FILLS[teacher];
  const capOn = useMemo(() => meanHex(palette.conic), [palette.conic]);
  const capOff = `rgb(${Math.round(255 * IDLE_LUM)},${Math.round(255 * IDLE_LUM)},${Math.round(255 * IDLE_LUM)})`;

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(28,26,22,.08)',
      }}>
      {/* Both conics share ONE rotation, so they cannot drift out of phase
          while the cross-fade is running. */}
      <Animated.View
        style={[
          { position: 'absolute', left: inset24, right: inset24, top: inset24, bottom: inset24 },
          swirlTurn,
        ]}>
        <Svg width="100%" height="100%" viewBox="0 0 100 100">
          <Defs>
            <RadialGradient id={`cap-on-${teacher}`} cx="50%" cy="50%" r="26%">
              <Stop offset="0" stopColor={capOn} stopOpacity={1} />
              <Stop offset="0.6" stopColor={capOn} stopOpacity={0.85} />
              <Stop offset="1" stopColor={capOn} stopOpacity={0} />
            </RadialGradient>
          </Defs>
          {WEDGE_PATHS.map((d, i) => (
            <Path key={i} d={d} fill={fills.on[i]} />
          ))}
          <Rect x={0} y={0} width={100} height={100} fill={`url(#cap-on-${teacher})`} />
        </Svg>
        <Animated.View style={[StyleSheet.absoluteFill, greyFade]}>
          <Svg width="100%" height="100%" viewBox="0 0 100 100">
            <Defs>
              <RadialGradient id={`cap-off-${teacher}`} cx="50%" cy="50%" r="26%">
                <Stop offset="0" stopColor={capOff} stopOpacity={1} />
                <Stop offset="0.6" stopColor={capOff} stopOpacity={0.85} />
                <Stop offset="1" stopColor={capOff} stopOpacity={0} />
              </RadialGradient>
            </Defs>
            {WEDGE_PATHS.map((d, i) => (
              <Path key={i} d={d} fill={fills.off[i]} />
            ))}
            <Rect x={0} y={0} width={100} height={100} fill={`url(#cap-off-${teacher})`} />
          </Svg>
        </Animated.View>
      </Animated.View>

      {/* The halo, counter-rotating. Two stops cross-faded rather than one
          whose colour changes, because an SVG gradient stop cannot animate. */}
      <Animated.View
        pointerEvents="none"
        style={[
          { position: 'absolute', left: inset30, right: inset30, top: inset30, bottom: inset30 },
          haloTurn,
        ]}>
        <Animated.View style={[StyleSheet.absoluteFill, colourFade]}>
          <Svg width="100%" height="100%" viewBox="0 0 100 100">
            <Defs>
              <RadialGradient id={`halo-${teacher}`} cx="32%" cy="30%" r="55%">
                <Stop offset="0" stopColor={palette.halo} stopOpacity={0.85} />
                <Stop offset="1" stopColor={palette.halo} stopOpacity={0} />
              </RadialGradient>
            </Defs>
            <Rect x={0} y={0} width={100} height={100} fill={`url(#halo-${teacher})`} />
          </Svg>
        </Animated.View>
        <Animated.View style={[StyleSheet.absoluteFill, greyFade]}>
          <Svg width="100%" height="100%" viewBox="0 0 100 100">
            <Defs>
              <RadialGradient id={`halo-off-${teacher}`} cx="32%" cy="30%" r="55%">
                <Stop offset="0" stopColor="#FFFFFF" stopOpacity={0.4} />
                <Stop offset="1" stopColor="#FFFFFF" stopOpacity={0} />
              </RadialGradient>
            </Defs>
            <Rect x={0} y={0} width={100} height={100} fill={`url(#halo-off-${teacher})`} />
          </Svg>
        </Animated.View>
      </Animated.View>

      {/* Layer 3 — the specular catch-light, static, as on the site. */}
      <Svg
        pointerEvents="none"
        style={StyleSheet.absoluteFill}
        width="100%"
        height="100%"
        viewBox="0 0 100 100">
        <Defs>
          <RadialGradient id={`spec-${teacher}`} cx="50%" cy="50%" r="50%">
            <Stop offset="0" stopColor="#FFFFFF" stopOpacity={0.5} />
            <Stop offset="1" stopColor="#FFFFFF" stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <Ellipse cx={36} cy={25} rx={20} ry={15} fill={`url(#spec-${teacher})`} />
      </Svg>
    </View>
  );
}

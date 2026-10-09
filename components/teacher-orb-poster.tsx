import { Canvas, Circle, RadialGradient, Shadow, vec } from '@shopify/react-native-skia';
import { type ViewStyle } from 'react-native';

import { ORB_POSTERS } from '@/constants/teachers';
import type { TeacherId } from '@/lib/preferences';

/**
 * THE TEACHER'S ORB AS A STILL — the 34pt mark in Home's header.
 *
 * On the Select Teacher screen the orb is alive: a shader with light moving
 * inside it. At 34 points, on a row the student scrolls past, none of that
 * motion is legible and all of its cost is still paid. So the header gets the
 * POSTER — the same sphere, lit the same way, drawn once. The handoff names
 * it that and ships the two as separate things for this reason.
 *
 * THE NUMBERS ARE THE CSS, CONVERTED, not matched by eye. A CSS radial
 * gradient with no explicit size runs to the FARTHEST CORNER of its box, so a
 * gradient centred at (35%, 30%) of a square reaches (1, 1) at a radius of
 * sqrt(.65^2 + .70^2) = .9552 of the side. Skia wants that radius stated.
 * Every fraction below is one of those conversions, and the comment beside it
 * says which CSS declaration it came from.
 *
 * ONE DIFFERENCE FROM CSS, DELIBERATE. `box-shadow`'s blur radius is twice the
 * Gaussian's standard deviation; Skia's `Shadow` takes the deviation itself.
 * The design's `18px` blur is therefore `9` here. Passing 18 would double the
 * shading and flatten the sphere.
 */

/** Centre of the body gradient, as a fraction of the orb's size. */
const BODY_C = { x: 0.35, y: 0.3 };
/** Farthest corner from BODY_C — `radial-gradient(circle at 35% 30%, ...)`. */
const BODY_R = Math.hypot(1 - BODY_C.x, 1 - BODY_C.y);

/** `radial-gradient(circle at 30% 24%, rgba(255,255,255,.7), transparent 36%)`. */
const HIGHLIGHT_C = { x: 0.3, y: 0.24 };
const HIGHLIGHT_R = Math.hypot(1 - HIGHLIGHT_C.x, 1 - HIGHLIGHT_C.y) * 0.36;

/** `inset 0 -10px 18px rgba(90,30,5,.3)` at the design's 34pt orb. */
const SHADE_DY = -10 / 34;
const SHADE_SIGMA = 18 / 2 / 34;
const SHADE_COLOR = 'rgba(90,30,5,0.3)';

/** `inset 0 0 0 1px rgba(255,255,255,.5)` — a hairline, so it does not scale. */
const RIM = 'rgba(255,255,255,0.5)';

export function TeacherOrbPoster({
  teacher,
  size,
  style,
}: {
  teacher: TeacherId;
  size: number;
  style?: ViewStyle;
}) {
  const poster = ORB_POSTERS[teacher];
  const r = size / 2;

  return (
    <Canvas pointerEvents="none" style={[{ width: size, height: size }, style]}>
      {/* The body. */}
      <Circle cx={r} cy={r} r={r}>
        <RadialGradient
          c={vec(size * BODY_C.x, size * BODY_C.y)}
          r={size * BODY_R}
          positions={poster.stops}
          colors={poster.body}
        />
      </Circle>

      {/* The catch-light, over it. */}
      <Circle cx={r} cy={r} r={r}>
        <RadialGradient
          c={vec(size * HIGHLIGHT_C.x, size * HIGHLIGHT_C.y)}
          r={size * HIGHLIGHT_R}
          colors={['rgba(255,255,255,0.7)', 'rgba(255,255,255,0)']}
        />
      </Circle>

      {/* The rim. Half a point in, so a 1pt stroke lands inside the edge
          rather than straddling it and fraying against the backdrop. */}
      <Circle cx={r} cy={r} r={r - 0.5} color={RIM} style="stroke" strokeWidth={1} />

      {/*
        THE SHADING, LAST — and the order is the whole point.

        CSS paints a box-shadow list front-to-back, so the design's
        `inset 0 -10px 18px …, inset 0 0 0 1px …` puts the dark shade ON TOP of
        the white rim. Drawn the other way round the rim stays at full strength
        all the way round and the orb reads as a flat disc with a bright
        outline rather than a lit sphere — which is exactly what the first build
        looked like beside the reference.

        `shadowOnly` paints the inner shadow without re-painting the circle it
        is attached to, so this lays the shade over everything above.
      */}
      <Circle cx={r} cy={r} r={r}>
        <Shadow
          dx={0}
          dy={size * SHADE_DY}
          blur={size * SHADE_SIGMA}
          color={SHADE_COLOR}
          inner
          shadowOnly
        />
      </Circle>
    </Canvas>
  );
}

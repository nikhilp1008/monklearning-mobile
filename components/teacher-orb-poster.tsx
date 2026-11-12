import { Canvas, Circle, RadialGradient, Shadow, vec } from '@shopify/react-native-skia';
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { type ViewStyle } from 'react-native';
import {
  useDerivedValue,
  useFrameCallback,
  useReducedMotion,
  useSharedValue,
  type FrameInfo,
} from 'react-native-reanimated';

import { ORB_POSTERS } from '@/constants/teachers';
import type { TeacherId } from '@/lib/preferences';

/**
 * THE DRIFT (Nikhil, 9 Nov 2026: "15%").
 *
 * The still orb read as a picture. Now the light inside it drifts: the
 * gradient's bright centre wanders by up to 15% of the orb's width on a slow,
 * uneven loop of about nine seconds, and the catch-light follows it at 60% so
 * the sphere keeps its shape. The gradient, its colours, the rim and the shade
 * are all unchanged; only where the light sits moves.
 *
 * It runs only while the screen holding the orb is in focus, and not at all
 * when the phone asks for reduced motion. Two teachers start the loop at
 * different points, so a screen showing both does not move in step.
 */
const DRIFT = 0.15;
const DRIFT_PHASE: Record<TeacherId, number> = { drona: 0, vedha: 1.7 };
const TAU = Math.PI * 2;

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

/**
 * ROOM ROUND THE ORB. The canvas is drawn a point larger than the orb on every
 * side and pulled back by the same amount, so it takes exactly the orb's space
 * in the layout. Drawn edge to edge, the orb lost its right and bottom sliver:
 * 46pt is a fraction of a pixel on most phones, the canvas rounds its pixel
 * size down, and the rim, which sits on the very edge, came out flattened on
 * those two sides.
 */
const PAD = 1;

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
  const c = r + PAD;
  const box = size + PAD * 2;

  // The drift's clock, in seconds, advanced only while the frame callback runs.
  const clock = useSharedValue(0);
  const tick = useCallback(
    (frame: FrameInfo) => {
      'worklet';
      clock.value += (frame.timeSincePreviousFrame ?? 16) / 1000;
    },
    [clock]
  );
  const frame = useFrameCallback(tick, false);
  const reduced = useReducedMotion();
  useFocusEffect(
    useCallback(() => {
      if (reduced) return;
      frame.setActive(true);
      return () => frame.setActive(false);
    }, [frame, reduced])
  );

  const amp = size * DRIFT * 0.5;
  const phase = DRIFT_PHASE[teacher];
  const bodyCentre = useDerivedValue(() => {
    const s = clock.value;
    const dx = amp * (Math.sin((s * TAU) / 9 + phase) + 0.35 * Math.sin((s * TAU) / 5.3 + phase * 2));
    const dy = amp * (Math.cos((s * TAU) / 11 + phase) + 0.35 * Math.sin((s * TAU) / 6.7 + phase));
    return vec(PAD + size * BODY_C.x + dx, PAD + size * BODY_C.y + dy);
  }, [amp, phase, size]);
  const highlightCentre = useDerivedValue(() => {
    const b = bodyCentre.value;
    const dx = (b.x - (PAD + size * BODY_C.x)) * 0.6;
    const dy = (b.y - (PAD + size * BODY_C.y)) * 0.6;
    return vec(PAD + size * HIGHLIGHT_C.x + dx, PAD + size * HIGHLIGHT_C.y + dy);
  }, [size]);

  return (
    <Canvas pointerEvents="none" style={[{ width: box, height: box, margin: -PAD }, style]}>
      {/* The body. */}
      <Circle cx={c} cy={c} r={r}>
        <RadialGradient
          c={bodyCentre}
          r={size * BODY_R}
          positions={poster.stops}
          colors={poster.body}
        />
      </Circle>

      {/* The catch-light, over it. */}
      <Circle cx={c} cy={c} r={r}>
        <RadialGradient
          c={highlightCentre}
          r={size * HIGHLIGHT_R}
          colors={['rgba(255,255,255,0.7)', 'rgba(255,255,255,0)']}
        />
      </Circle>

      {/* The rim. Half a point in, so a 1pt stroke lands inside the edge
          rather than straddling it and fraying against the backdrop. */}
      <Circle cx={c} cy={c} r={r - 0.5} color={RIM} style="stroke" strokeWidth={1} />

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
      <Circle cx={c} cy={c} r={r}>
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

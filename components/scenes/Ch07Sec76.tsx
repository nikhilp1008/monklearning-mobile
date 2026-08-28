/**
 * Ch07 · Section 76 — "Chapter 7 quick-recall cheat sheet"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Closing scene of the chapter: one red-margin one-liner per subtopic,
 * then the magic numbers in a green box. Mirrors Ch02's closing cheat sheet.
 *
 * Beats (en [0, 8.87, 24.66, 38.83, 52.57, 63.83, 79.19, 80.19]):
 *  0 title
 *  1 Newton: attractive, central, three safe cases
 *  2 Field: outside/shell/solid/ring one-liner
 *  3 g: max at surface, height has the 2, poles heavier
 *  4 Energy: U,V negative, zero field ≠ zero potential, ve=√2vo
 *  5 Satellites: T∝r^1.5, E negative, weightless=free fall
 *  6 Constant & binary: GM vs G, heavier star smaller circle
 *  7 green box: the magic numbers, chapter closes
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52
 *  bars x66, lines st x84: b1 y82..108(bl100) · b2 y120..146(bl138) ·
 *   b3 y158..184(bl176) · b4 y196..222(bl214) · b5 y234..260(bl252) ·
 *   b6 y272..298(bl290)
 *  b7 green box x140..940 y330..400(bl358+bl388)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec76({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the whole chapter, one sweep */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Chapter 7 — quick recall",
            "Chapter 7 — quick recall"
          )}
        </T>
      </Fade>

      {/* beat 1 — Newton's law */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M 66 82 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={84} y={100} size={12.5} fill={RED} script anchor="start">
          {t(
            "Newton: F=Gm₁m₂⁄r² — attractive, central; only points/spheres/sphere+point",
            "Newton: F=Gm₁m₂⁄r² — attractive, central; sirf points/spheres/sphere+point"
          )}
        </T>
      </Fade>

      {/* beat 2 — field intensity */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 66 120 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={84} y={138} size={12.5} fill={RED} script anchor="start">
          {t(
            "Field: outside=point mass · shell-in 0 · solid ∝ r · ring peaks at a⁄√2",
            "Field: outside=point mass · shell-in 0 · solid ∝ r · ring peak a⁄√2 par"
          )}
        </T>
      </Fade>

      {/* beat 3 — g */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M 66 158 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={84} y={176} size={12.5} fill={RED} script anchor="start">
          {t(
            "g: max at surface · height has the 2, depth doesn't · poles heavier",
            "g: surface par max · height mein 2, depth mein nahi · poles bhaari"
          )}
        </T>
      </Fade>

      {/* beat 4 — energy */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M 66 196 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={84} y={214} size={12.5} fill={RED} script anchor="start">
          {t(
            "Energy: U,V negative · zero field ≠ zero potential · v(e)=√2·v(o)",
            "Energy: U,V negative · zero field ≠ zero potential · v(e)=√2·v(o)"
          )}
        </T>
      </Fade>

      {/* beat 5 — satellites */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 66 234 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={84} y={252} size={12.5} fill={RED} script anchor="start">
          {t(
            "Satellites: T∝r^(3⁄2) · E=−GMm⁄2r (negative) · weightless=free fall",
            "Satellites: T∝r^(3⁄2) · E=−GMm⁄2r (negative) · weightless=free fall"
          )}
        </T>
      </Fade>

      {/* beat 6 — constant and binary */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 66 272 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={84} y={290} size={12.5} fill={RED} script anchor="start">
          {t(
            "G: orbits give GM, Cavendish gives G · heavier star, smaller circle",
            "G: orbits GM dete, Cavendish G deta · bhaari star, chhota circle"
          )}
        </T>
      </Fade>

      {/* beat 7 — the magic numbers, chapter closes */}
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.6)}
          d="M 140 330 h 800 q 12 0 12 12 v 60 q 0 12 -12 12 h -800 q -12 0 -12 -12 v -60 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.6}
          dur={0.8}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={362} size={15} fill={INK} weight={800}>
          {t(
            "magic numbers: v(o)≈7.9, v(e)≈11.2 km/s, T≈84 min, geo≈36000 km",
            "magic numbers: v(o)≈7.9, v(e)≈11.2 km/s, T≈84 min, geo≈36000 km"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.5)}>
        <T x={540} y={392} size={13} fill={GREEN} script>
          {t(
            "that is all of Gravitation, in your pocket",
            "yahi hai poora Gravitation, aapki jeb mein"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

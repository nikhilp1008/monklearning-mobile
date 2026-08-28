/**
 * Ch13 · Section 10 — "Worked example (JEE Advanced): the one-third result"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * 9 beats (this section's board_events/reveals arrays both have length 9).
 *
 * Beats (en [0, 9.73, 17.81, 26.59, 35.61, 47.25, 56.27, 62.44, 68.62]):
 *  0 shelf
 *  1 the claim: prove fraction of T with |x| < A/2 = ?
 *  2 reference circle: rotating radius, dot, vertical shadow drop, caption x = A sinθ
 *  3 x = A sinθ, θ:0→2π ⇒ |sinθ| < 1/2
 *  4 the two safe windows marked as green arcs + amber dashed thresholds on the circle
 *  5 Δθ = π/6 + 2π/6 + π/6 = 2π/3
 *  6 hero: fraction = Δθ/2π = 1/3
 *  7 method: equal angles ⇒ equal times, reason on the circle
 *  8 why not 1/2: fastest near mean, lingers less there
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl115 size14
 *  b2 | circle c(760,270) r110 · h-diam y270 x650..870 · v-diam x760 y160..380 ·
 *      radius arrow 760,270→855,215 · dot(855,215) · shadow line 855,215→855,270 dashed ·
 *      shadow dot(855,270) · caption "x = A sinθ" cx760 bl405
 *  b3 | st x70 bl150 size13 amber
 *  b4 | thresholds x705/x815 y174.7..365.3 dashed amber · top-arc 705,174.7→815,174.7 (via top) ·
 *      bottom-arc 815,365.3→705,365.3 (via bottom), both green
 *  b5 | st x70 bl195 size15
 *  b6 | box x70..350 y215..270 rx14 · line cx210 bl250 size22
 *  b7 | script13 st x70 bl300 amber
 *  b8 | st x70 bl338 size13 red
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Fraction of a period with the displacement small", "Chota displacement — period ka kitna fraction")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the claim */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={115} size={14} fill={INK} anchor="start" weight={700}>
          {t("prove: fraction of T with |x| < A/2 = ?", "prove karo: T ka fraction jahan |x| < A/2 = ?")}
        </T>
      </Fade>

      {/* beat 2 — the reference circle: a rotating radius casts a shadow */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 760 160 A 110 110 0 1 1 759.9 160" stroke={INK} sw={1.8} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Path d="M 650 270 H 870 M 760 160 V 380" stroke={MUTED} strokeWidth={1.2} fill="none" />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={arrowD(760, 270, 855, 215)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Circle cx={855} cy={215} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <Path d="M 855 215 V 270" stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 4" fill="none" />
        <Circle cx={855} cy={270} r={4} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.1)}>
        <T x={760} y={405} size={13} fill={INK}>
          x = A sinθ
        </T>
      </Fade>

      {/* beat 3 — the condition on sine */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={150} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          x = A sinθ (θ: 0→2π)  ⇒  |sinθ| {"<"} 1/2
        </T>
      </Fade>

      {/* beat 4 — the three windows, marked on the circle */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Path d="M 705 174.7 V 365.3" stroke={AMBER_DARK} strokeWidth={1.4} strokeDasharray="4 4" fill="none" />
        <Path d="M 815 174.7 V 365.3" stroke={AMBER_DARK} strokeWidth={1.4} strokeDasharray="4 4" fill="none" />
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.9)}
        d="M 705 174.7 A 110 110 0 0 1 815 174.7"
        stroke={GREEN}
        sw={3}
        dur={0.6}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.6)}
        d="M 815 365.3 A 110 110 0 0 1 705 365.3"
        stroke={GREEN}
        sw={3}
        dur={0.6}
      />

      {/* beat 5 — sum the angular widths */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={195} size={15} fill={INK} anchor="start" weight={700}>
          Δθ = π/6 + 2π/6 + π/6 = 2π/3
        </T>
      </Fade>

      {/* beat 6 — the hero result */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.3)}
          d="M 84 215 h 252 q 14 0 14 14 v 27 q 0 14 -14 14 h -252 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={210} y={250} size={22} fill={INK} weight={800}>
          fraction = Δθ/2π = 1/3
        </T>
      </Fade>

      {/* beat 7 — the method */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={300} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "equal angles ⇒ equal times — reason on the circle, not a formula",
            "equal angles ⇒ equal times — circle pe socho, formula pe nahi"
          )}
        </T>
      </Fade>

      {/* beat 8 — why not one half */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={70} y={338} size={13} fill={RED} anchor="start">
          {t("not 1/2: fastest near mean ⇒ lingers less there", "1/2 nahi: mean ke paas sabse fast ⇒ wahan kam rukti hai")}
        </T>
      </Fade>
    </Scene>
  );
}

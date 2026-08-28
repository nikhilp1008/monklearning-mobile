/**
 * Ch13 · Section 48 — "Formula board: standard systems and fine points"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 2.99, 9.36, 16.32, 22.3, 30.86, 36.83, 40.01]):
 *  0 shelf
 *  1 diagram: U-tube, floating body, Earth tunnel — one skeleton
 *  2 U-tube: T=2π√(L/2g) ; floating body: T=2π√(h/g)
 *  3 Earth tunnel/bowl: T=2π√(R/g) ≈ 84.6 min
 *  4 temperature error: ΔT/T=½αΔθ (rise ⇒ slow)
 *  5 large amplitude: T≈2π√(L/g)(1+θ₀²/16)
 *  6 ⟨speed⟩=4A/T=2Aω/π , v_rms=Aω/√2
 *  7 hero (high): period-twins √(L/g), √(h/g), √(R/g)
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | U-tube 655,95→695,95 (U-shape) · "U-tube" cx675 bl168 ·
 *      liquid-line y125 x715..785 · box x735..765 y105..145 · "floating body" cx750 bl168 ·
 *      circle c(855,125) r25 · "Earth/bowl" cx855 bl168
 *  b2 | st x70 bl100 size11
 *  b3 | st x70 bl126 size11
 *  b4 | st x70 bl152 size11
 *  b5 | st x70 bl178 size11
 *  b6 | st x70 bl204 size11
 *  b7 | box x70..600 y225..280 rx14 · line cx335 bl258 size15
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={18} fill={INK} script>
          {t("Standard periods, pendulum corrections, cycle averages", "Standard periods, pendulum corrections, cycle averages")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — three systems, one skeleton */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M 655 95 V 128 Q 655 150 675 150 Q 695 150 695 128 V 95" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={675} y={168} size={9} fill={INK}>
          {t("U-tube", "U-tube")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <Path d="M 715 125 H 785" stroke={MUTED} strokeWidth={1.2} fill="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Draw on={beat >= 1} delay={dl(1, 1.5)} d="M 735 105 h 30 v 40 h -30 z" stroke={INK} sw={1.6} dur={0.4} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <T x={750} y={168} size={9} fill={INK}>
          {t("floating body", "floating body")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d="M 855 100 A 25 25 0 1 1 854.9 100" stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={855} y={168} size={9} fill={INK}>
          {t("Earth/bowl", "Earth/bowl")}
        </T>
      </Fade>

      {/* beat 2 — U-tube and floating body periods */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={100} size={11} fill={INK} anchor="start" weight={700}>
          U-tube: T=2π√(L/2g) ; floating body: T=2π√(h/g)
        </T>
      </Fade>

      {/* beat 3 — Earth tunnel period */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={126} size={11} fill={INK} anchor="start" weight={700}>
          Earth tunnel/bowl: T=2π√(R/g) ≈ 84.6 min
        </T>
      </Fade>

      {/* beat 4 — temperature correction */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={152} size={11} fill={INK} anchor="start">
          temperature error: ΔT/T=½αΔθ (rise ⇒ slow)
        </T>
      </Fade>

      {/* beat 5 — large-amplitude correction */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={178} size={11} fill={INK} anchor="start">
          large amplitude: T≈2π√(L/g)(1+θ₀²/16)
        </T>
      </Fade>

      {/* beat 6 — cycle averages */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={204} size={11} fill={INK} anchor="start">
          ⟨speed⟩=4A/T=2Aω/π , v_rms=Aω/√2
        </T>
      </Fade>

      {/* beat 7 — the period-twins, high emphasis */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 84 225 h 502 q 14 0 14 14 v 27 q 0 14 -14 14 h -502 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={335} y={258} size={15} fill={INK} weight={800}>
          period-twins: √(L/g), √(h/g), √(R/g) — pendulum, float, planet
        </T>
      </Fade>
    </Scene>
  );
}

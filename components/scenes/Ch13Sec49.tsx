/**
 * Ch13 · Section 49 — "Derivation: SHM is the projection of uniform circular motion"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 3.44, 7.64, 14.14, 20.44, 28.27, 34.77, 43.37]):
 *  0 shelf
 *  1 diagram: circling bead projected onto both x and y axes
 *  2 particle: circle radius A, const ω, anticlockwise; angle = ωt+φ
 *  3 x = A cos(ωt+φ) , y = A sin(ωt+φ)
 *  4 hero (high): ẍ = −ω²A cos(ωt+φ) = −ω²x
 *  5 ⇒ shadow on x-axis = SHM, amplitude A, angular frequency ω
 *  6 hero (high): centripetal ω²A projects to SHM accel ω²x
 *  7 both projections (x,y) are SHM, 90° out of phase
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | circle c(760,220) r90 · x-axis y220 x670..850 · y-axis x760 y130..310 ·
 *      radius 760,220→828.94,162.13 · bead(828.94,162.13) r7 ·
 *      θ-arc 800,220→783,200.7 · "ωt+φ" x788 bl213 · "A" x800 bl185 ·
 *      dashed-x 828.94,162.13→828.94,220 · x-dot(828.94,220) red · "x" cx829 bl238 ·
 *      dashed-y 828.94,162.13→760,162.13 · y-dot(760,162.13) green · "y" x745 bl166 anchor-end
 *  b2 | st x70 bl105 size11
 *  b3 | st x70 bl140 size13
 *  b4 | box x70..400 y160..205 rx14 · line cx235 bl188 size16
 *  b5 | st x70 bl240 size11
 *  b6 | box x70..420 y265..310 rx14 · line cx245 bl292 size14
 *  b7 | script11 st x70 bl345
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

export default function Ch13Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t("Differentiate the projection twice", "Projection ko do baar differentiate karo")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the reference circle with both projections */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M 760 130 A 90 90 0 1 1 759.9 130" stroke={INK} sw={1.8} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d="M 670 220 H 850" stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d="M 760 310 V 130" stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d={arrowD(760, 220, 828.94, 162.13)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <Circle cx={828.94} cy={162.13} r={7} fill={AMBER_DARK} stroke={INK} strokeWidth={1.2} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.2)} d="M 800 220 A 30 30 0 0 0 783 200.7" stroke={INK} sw={1.3} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.7)}>
        <T x={788} y={213} size={10} fill={INK} anchor="start">
          ωt+φ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.9)}>
        <T x={800} y={185} size={11} fill={AMBER_DARK} anchor="start">
          A
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.1)}>
        <Path d="M 828.94 162.13 V 220" stroke={MUTED} strokeWidth={1.3} strokeDasharray="4 4" fill="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.3)}>
        <Circle cx={828.94} cy={220} r={6} fill={RED} />
        <T x={829} y={238} size={11} fill={RED}>
          x
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <Path d="M 828.94 162.13 H 760" stroke={MUTED} strokeWidth={1.3} strokeDasharray="4 4" fill="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.7)}>
        <Circle cx={760} cy={162.13} r={6} fill={GREEN} />
        <T x={745} y={166} size={11} fill={GREEN} anchor="end">
          y
        </T>
      </Fade>

      {/* beat 2 — the setup */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={105} size={11} fill={INK} anchor="start">
          {t(
            "particle: circle radius A, const ω, anticlockwise; angle = ωt+φ",
            "particle: circle radius A, const ω, anticlockwise; angle = ωt+φ"
          )}
        </T>
      </Fade>

      {/* beat 3 — the coordinates */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={140} size={13} fill={INK} anchor="start" weight={700}>
          x = A cos(ωt+φ) , y = A sin(ωt+φ)
        </T>
      </Fade>

      {/* beat 4 — differentiate twice, hero */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.3)}
          d="M 84 160 h 302 q 14 0 14 14 v 17 q 0 14 -14 14 h -302 q -14 0 -14 -14 v -17 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={235} y={188} size={16} fill={INK} weight={800}>
          ẍ = −ω²A cos(ωt+φ) = −ω²x
        </T>
      </Fade>

      {/* beat 5 — the conclusion */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={240} size={11} fill={INK} anchor="start">
          {t(
            "⇒ shadow on x-axis = SHM, amplitude A, angular frequency ω",
            "⇒ x-axis pe shadow = SHM, amplitude A, angular frequency ω"
          )}
        </T>
      </Fade>

      {/* beat 6 — the geometry of acceleration, hero */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.3)}
          d="M 84 265 h 342 q 14 0 14 14 v 17 q 0 14 -14 14 h -342 q -14 0 -14 -14 v -17 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={245} y={292} size={14} fill={INK} weight={800}>
          centripetal ω²A → projects to SHM accel ω²x
        </T>
      </Fade>

      {/* beat 7 — the bonus */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={345} size={11} fill={INK} script anchor="start">
          {t(
            "both projections (x,y) are SHM, 90° out of phase",
            "dono projections (x,y) SHM hain, 90° out of phase"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * Ch13 · Section 47 — "Formula board: projections and superposition"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 5.67, 18.77, 30.1, 47.46, 60.56, 72.25, 82.87]):
 *  0 shelf
 *  1 x=Acos(ωt+φ), v=−Aωsin(ωt+φ), a=−Aω²cos(ωt+φ)
 *  2 ẍ+ω²x=0 ⇒ ω=√(restoring constant/inertia)
 *  3 collinear: A=√(A₁²+A₂²+2A₁A₂cosδ) , tanφ=A₂sinδ/(A₁+A₂cosδ)
 *  4 in-phase/anti-phase/quadrature special cases
 *  5 diagram: perpendicular SHMs — line, ellipse, circle by phase
 *  6 δ=π/2: x²/A²+y²/B²=1 (circle if A=B)
 *  7 unequal frequencies ⇒ Lissajous
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl100 size11
 *  b2 | st x70 bl126 size11
 *  b3 | st x70 bl152 size10
 *  b4 | st x70 bl178 size10
 *  b5 | line(650,150)→(700,110) red · "δ=0" cx675 bl175 ·
 *      ellipse c(770,130) rx35 ry22 green · "δ=π/2" cx770 bl175 ·
 *      circle c(870,130) r25 amber · "A=B" cx870 bl175
 *  b6 | st x70 bl215 size11
 *  b7 | script10 st x70 bl250
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={18} fill={INK} script>
          {t("Reference-circle projections and combining SHMs", "Reference-circle projections aur SHMs combine karna")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the projections */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={100} size={11} fill={INK} anchor="start" weight={700}>
          x=Acos(ωt+φ), v=−Aωsin(ωt+φ), a=−Aω²cos(ωt+φ)
        </T>
      </Fade>

      {/* beat 2 — the defining equation */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={126} size={11} fill={INK} anchor="start" weight={700}>
          ẍ+ω²x=0 ⇒ ω=√(restoring constant/inertia)
        </T>
      </Fade>

      {/* beat 3 — collinear superposition */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={152} size={10} fill={INK} anchor="start" weight={700}>
          collinear: A=√(A₁²+A₂²+2A₁A₂cosδ) , tanφ=A₂sinδ/(A₁+A₂cosδ)
        </T>
      </Fade>

      {/* beat 4 — the three special cases */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={178} size={10} fill={INK} anchor="start">
          in-phase: A=A₁+A₂ · anti-phase: A=|A₁−A₂| · quadrature: A=√(A₁²+A₂²)
        </T>
      </Fade>

      {/* beat 5 — the perpendicular family */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 650 150 L 700 110" stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={675} y={175} size={9} fill={RED}>
          δ=0
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.1)} d="M 735 130 A 35 22 0 1 1 734.9 130" stroke={GREEN} sw={2.2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={770} y={175} size={9} fill={GREEN}>
          δ=π/2
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.2)} d="M 845 130 A 25 25 0 1 1 844.9 130" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2.9)}>
        <T x={870} y={175} size={9} fill={AMBER_DARK}>
          A=B
        </T>
      </Fade>

      {/* beat 6 — the quadrature ellipse equation */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={215} size={11} fill={INK} anchor="start" weight={700}>
          δ=π/2: x²/A²+y²/B²=1 (circle if A=B)
        </T>
      </Fade>

      {/* beat 7 — unequal frequencies */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={250} size={10} fill={INK} script anchor="start">
          {t(
            "unequal frequencies ⇒ Lissajous; freq ratio sets the loop count",
            "alag frequencies ⇒ Lissajous; freq ratio loops ki sankhya tay karta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

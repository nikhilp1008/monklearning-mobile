/**
 * Ch13 · Section 25 — "Formula board, part two: effective gravity and rigid pendulums"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 4.78, 13.44, 24.48, 37.02, 48.07, 55.23, 66.58]):
 *  0 shelf
 *  1 diagram: three arrows — lift up, lift down, car horizontal
 *  2 lift ↑: g_eff = g+a , lift ↓: g_eff = g−a
 *  3 car: g_eff = √(g²+a²) , tanθ₀ = a/g
 *  4 physical pendulum: T = 2π√(I/mgd) , L_eq = I/md
 *  5 torsional pendulum: T = 2π√(I/κ)
 *  6 free fall (high): a=g ⇒ g_eff=0, bob floats, never swings
 *  7 symbols: I = moment of inertia, κ = torque per twist
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | arrow1 x200 y140..100 green · "lift ↑" cx200 bl160 ·
 *      arrow2 x400 y100..140 red · "lift ↓" cx400 bl160 ·
 *      arrow3 x550..650 y120 ink · "car →" cx600 bl160
 *  b2 | st x70 bl200 size13
 *  b3 | st x70 bl230 size13
 *  b4 | st x70 bl265 size13
 *  b5 | st x70 bl300 size13
 *  b6 | script13 st x70 bl345 red
 *  b7 | script12 st x70 bl385
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t("Non-inertial frames, compound and torsional pendulums", "Non-inertial frames, compound aur torsional pendulums")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — three arrows: the three standard cases */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(200, 140, 200, 100)} stroke={GREEN} sw={2.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={200} y={160} size={11} fill={GREEN}>
          {t("lift ↑", "lift ↑")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={arrowD(400, 100, 400, 140)} stroke={RED} sw={2.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={400} y={160} size={11} fill={RED}>
          {t("lift ↓", "lift ↓")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d={arrowD(550, 120, 650, 120)} stroke={INK} sw={2.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={600} y={160} size={11} fill={INK}>
          {t("car →", "car →")}
        </T>
      </Fade>

      {/* beat 2 — lift up and down */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={200} size={13} fill={INK} anchor="start" weight={700}>
          lift ↑: g_eff = g+a  ,  lift ↓: g_eff = g−a
        </T>
      </Fade>

      {/* beat 3 — car accelerating horizontally */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={230} size={13} fill={INK} anchor="start" weight={700}>
          car: g_eff = √(g²+a²) , tanθ₀ = a/g
        </T>
      </Fade>

      {/* beat 4 — the physical pendulum */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={265} size={13} fill={INK} anchor="start" weight={700}>
          physical pendulum: T = 2π√(I/mgd) , L_eq = I/md
        </T>
      </Fade>

      {/* beat 5 — the torsional pendulum */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={300} size={13} fill={INK} anchor="start" weight={700}>
          torsional pendulum: T = 2π√(I/κ)
        </T>
      </Fade>

      {/* beat 6 — the delicious limiting case, high emphasis */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={345} size={13} fill={RED} script anchor="start">
          {t(
            "free fall (a=g) ⇒ g_eff=0: bob floats, never swings",
            "free fall (a=g) ⇒ g_eff=0: bob tairta hai, kabhi swing nahi karta"
          )}
        </T>
      </Fade>

      {/* beat 7 — keeping the symbols straight */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={385} size={12} fill={INK} script anchor="start">
          {t(
            "I = moment of inertia about pivot , κ = torque per unit twist",
            "I = pivot ke around moment of inertia , κ = per unit twist restoring torque"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

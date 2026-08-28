/**
 * Ch13 · Section 4 — "Derivation: velocity and acceleration from x(t)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.96, 19.87, 27.74, 40.42, 53.78, 67.82, 77.07]):
 *  0 shelf underline
 *  1 "A, φ constant — only t varies"
 *  2 x = A sin(ωt+φ) — the clean start
 *  3 arrow (d/dt) + v = dx/dt = Aω cos(ωt+φ)
 *  4 phase diagram: x(t) and v(t) waves, v leads by a quarter cycle
 *  5 arrow (d/dt) + a = dv/dt = −Aω² sin(ωt+φ) = −ω² x (red, high)
 *  6 checkmark: matches a = −ω²x, the property we started from
 *  7 verdict box: fastest through the mean, frozen at the ends
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | script12 st x70 bl108
 *  b2 | st x70 bl150 size18 (box 70..~330,136..156)
 *  b3 | arrow x100 y168..196 · "d/dt" st x112 bl188 script11 ·
 *      st x70 bl225 size17 (box 70..~430,212..231)
 *  b4 | row_x baseline150 x650..1010 · row_v baseline220 x605..965 (shift −45=leads) ·
 *      "x(t)" x640 bl155 anchor-end · "v(t)" x595 bl225 anchor-end
 *  b5 | arrow x100 y245..273 · "d/dt" st x112 bl264 script11 ·
 *      st x70 bl300 size16 red (box 70..~390,287..305)
 *  b6 | check 75,325→82,332→92,318 · st x100 bl345 script13 green (box ~100..390,328..352)
 *  b7 | box x230..850 y440..492 rx14 · line cx540 bl463
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
  MUTED,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Differentiating the displacement equation", "Displacement equation ko differentiate karna")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={108} size={12} fill={MUTED} script anchor="start">
          {t("A, φ constant — only t varies", "A, φ constant hain — sirf t change hota hai")}
        </T>
      </Fade>

      {/* beat 2 — the clean start */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={150} size={18} fill={INK} anchor="start" weight={700}>
          x = A sin(ωt + φ)
        </T>
      </Fade>

      {/* beat 3 — differentiate once */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={arrowD(100, 168, 100, 196)} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={112} y={188} size={11} fill={MUTED} script anchor="start">
          d/dt
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={70} y={225} size={17} fill={INK} anchor="start" weight={700}>
          v = dx/dt = Aω cos(ωt + φ)
        </T>
      </Fade>

      {/* beat 4 — cosine peaks exactly where sine is zero */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.3)}
        d="M650 150 C672 118 718 118 740 150 C762 182 808 182 830 150 C852 118 898 118 920 150 C942 182 988 182 1010 150"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.3)}
        d="M605 220 C627 188 673 188 695 220 C717 252 763 252 785 220 C807 188 853 188 875 220 C897 252 943 252 965 220"
        stroke={GREEN}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.0)}>
        <T x={640} y={155} size={13} fill={INK} anchor="end">
          x(t)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={595} y={225} size={13} fill={GREEN} anchor="end">
          v(t)
        </T>
      </Fade>

      {/* beat 5 — differentiate again, high emphasis */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={arrowD(100, 245, 100, 273)} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={112} y={264} size={11} fill={MUTED} script anchor="start">
          d/dt
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={70} y={300} size={16} fill={RED} anchor="start" weight={700}>
          a = dv/dt = −Aω² sin(ωt + φ) = −ω² x
        </T>
      </Fade>

      {/* beat 6 — the consistency check */}
      <Draw on={beat >= 6} delay={dl(6, 0.4)} d="M 75 325 L 82 332 L 92 318" stroke={GREEN} sw={2.2} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={100} y={345} size={13} fill={GREEN} script anchor="start">
          {t("matches a = −ω²x — where we started!", "wahi a = −ω²x — jahan se shuru kiya tha!")}
        </T>
      </Fade>

      {/* beat 7 — the physical reading */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.4)}
          d="M 244 440 h 592 q 14 0 14 14 v 24 q 0 14 -14 14 h -592 q -14 0 -14 -14 v -24 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.2}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={463} size={16} fill={INK} weight={800}>
          {t("fastest through the mean · frozen at the ends", "mean se sabse fast · ends par frozen")}
        </T>
      </Fade>
    </Scene>
  );
}

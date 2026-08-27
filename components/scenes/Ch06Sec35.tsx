/**
 * Ch06 · Section 35 — "Principle of moments, and a solving recipe"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 14.4, 23.36, 42.73, 56.64, 65.68, 77.12]; hi b1..b6 are 1 s
 * → ALL staggers ≤0.8 s):
 *  0 title (instant)
 *  1 lever figure: rod, fulcrum O, F₁/F₂ down arrows, d₁/d₂ markers
 *  2 Στ about O = 0 line
 *  3 amber card: +F₁d₁ − F₂d₂ = 0 ⇒ F₁d₁ = F₂d₂
 *  4 recipe chip 1: FBD, weights at CG
 *  5 recipe chip 2: force balance
 *  6 green box 3: torques where an unknown acts
 *  7 step 4 line + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | rod (170,200)→(560,200) · fulcrum apex(365,204) base 345/385 y232 ·
 *       "O" cx365 bl 252 · F₁ (220,150)→(220,192) red, label cx220 bl 140 ·
 *       F₂ (500,150)→(500,192) amber, label cx500 bl 140 · d₁ dash (220,218)→(357,218)
 *       label cx292 bl 242 · d₂ dash (373,218)→(500,218) label cx432 bl 242
 *  b2 | script13 st x620 bl 160
 *  b3 | amber card x620..1030 y190..250 · L1 sans15 cx825 bl 214 · L2 cx825 bl 240
 *  b4 | chip x80 y310 w440 h38
 *  b5 | chip x560 y310 w380 h38
 *  b6 | green box x80..940 y380..436 · script14 cx510 bl 414
 *  b7 | script13 st x80 bl 495 · underline y515 x80..640
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — derivation → recipe */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t(
            "principle of moments + the solving recipe",
            "principle of moments + solving ki recipe"
          )}
        </T>
      </Fade>

      {/* beat 1 — the light lever */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M 170 200 H 560" stroke={INK} sw={3} dur={0.5} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M 365 204 L 345 232 h 40 z"
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={365} y={252} size={12} fill={MUTED} weight={700}>
          O
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={arrowD(220, 150, 220, 192)} stroke={RED} sw={2.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={220} y={140} size={14} fill={RED} weight={700}>
          F₁
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={arrowD(500, 150, 500, 192)} stroke={AMBER} sw={2.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={500} y={140} size={14} fill={AMBER_DARK} weight={700}>
          F₂
        </T>
        <Path
          d="M 220 218 H 357 M 373 218 H 500"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 4"
        />
        <T x={292} y={242} size={12} fill={MUTED} weight={700}>
          d₁
        </T>
        <T x={432} y={242} size={12} fill={MUTED} weight={700}>
          d₂
        </T>
      </Fade>

      {/* beat 2 — rotational equilibrium about O */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={620} y={160} size={13} fill={INK} script anchor="start">
          {t(
            "no rotation ⇒ Στ about O = 0",
            "koi rotation nahi ⇒ O ke baare mein Στ = 0"
          )}
        </T>
      </Fade>

      {/* beat 3 — signs in, principle out */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.1)}
        d="M 632 190 h 386 q 12 0 12 12 v 36 q 0 12 -12 12 h -386 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={825} y={214} size={15} fill={INK} weight={700}>
          +F₁d₁ − F₂d₂ = 0
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={825} y={240} size={15} fill={INK} weight={700}>
          ⇒  F₁d₁ = F₂d₂
        </T>
      </Fade>

      {/* beat 4 — recipe step 1 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={80} y={310} w={440} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={14}>
          {t("1 · clean FBD — weights act at the CG", "1 · saaf FBD — weights CG par act karte")}
        </Chip>
      </Fade>

      {/* beat 5 — recipe step 2 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={560} y={310} w={380} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          2 · ΣFx = 0 , ΣFy = 0
        </Chip>
      </Fade>

      {/* beat 6 — the art: choose the point */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.1)}
        d="M 92 380 h 836 q 12 0 12 12 v 32 q 0 12 -12 12 h -836 q -12 0 -12 -12 v -32 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={510} y={414} size={14} fill={GREEN_DARK} script>
          {t(
            "3 · take torques ABOUT a point where an unknown acts — it DROPS OUT (the art)",
            "3 · torques wahan lo jahan koi unknown act karta — wo NIKAL jaata hai (asli kala)"
          )}
        </T>
      </Fade>

      {/* beat 7 — step 4 */}
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={80} y={495} size={13} fill={INK} script anchor="start">
          {t(
            "4 · solve — a negative answer just means you drew that arrow backwards; flip it, move on",
            "4 · solve karo — negative answer matlab arrow ulta khincha tha; palto, aage badho"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1)} d="M 80 515 h 640" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}

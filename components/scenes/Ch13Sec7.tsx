/**
 * Ch13 · Section 7 — "Worked example (CBSE): read off every quantity"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 3.31, 6.87, 10.68, 15.46, 19.02, 22.21, 26.02]):
 *  0 shelf + recall: x = A sin(ωt + φ)
 *  1 given: x = 0.05 sin(20π t) (SI units)
 *  2 sine-wave graph: A bracket (height), T bracket (repeat length)
 *  3 read off: A = 0.05 m, ω = 20π rad/s, φ = 0
 *  4 T = 2π/ω = 0.1 s , f = 10 Hz
 *  5 v_max = Aω = π ≈ 3.14 m/s
 *  6 a_max = Aω² = 20π² ≈ 197.4 m/s² (red, high)
 *  7 method verdict: compare → substitute → units
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020 · st x70 bl105 size13 muted
 *  b1 | st x70 bl145 size19
 *  b2 | axis y180 x620..1000 · wave baseline180 amp35 x620..1012 ·
 *      A-bracket 670,180→670,145 · "A" x682 bl166 · T-bracket y205 x620..816 · "T" cx718 bl232
 *  b3 | st x70 bl185 · st x70 bl215 · st x70 bl245 (size14 amber)
 *  b4 | st x70 bl290 size15
 *  b5 | st x70 bl325 size15
 *  b6 | st x70 bl360 size15 red
 *  b7 | box x230..850 y480..545 rx14 · line cx540 bl517
 */

import React from "react";
import { TSpan } from 'react-native-svg';
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

const Sub = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={5} fontSize={11}>
    {children}
  </TSpan>
);
const Up = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={-5}>{children}</TSpan>
);

export default function Ch13Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Given a displacement equation, find all constants", "Displacement equation se saare constants nikaalna")}
        </T>
      </Fade>

      {/* beat 0 — recall the standard form */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 0.8)}>
        <T x={70} y={105} size={13} fill={MUTED} anchor="start">
          {t("recall: x = A sin(ωt + φ)", "yaad: x = A sin(ωt + φ)")}
        </T>
      </Fade>

      {/* beat 1 — the given equation */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={145} size={19} fill={INK} anchor="start" weight={800}>
          x = 0.05 sin(20π t)   (SI units)
        </T>
      </Fade>

      {/* beat 2 — the graph: amplitude is height, period is repeat length */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 620 180 L 1000 180" stroke={INK} sw={1.4} dur={0.4} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M620 180 C645 145 693 145 718 180 C743 215 791 215 816 180 C841 145 889 145 914 180 C939 215 987 215 1012 180"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw on={beat >= 2} delay={dl(2, 1.7)} d={arrowD(670, 180, 670, 145)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={682} y={166} size={13} fill={AMBER_DARK} anchor="start">
          A
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.5)}
        d="M 620 205 L 816 205 M 620 199 L 620 211 M 816 199 L 816 211"
        stroke={AMBER_DARK}
        sw={1.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.0)}>
        <T x={718} y={232} size={13} fill={AMBER_DARK}>
          T
        </T>
      </Fade>

      {/* beat 3 — read off the constants */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={185} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          A = 0.05 m
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={70} y={215} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          ω = 20π rad/s
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={70} y={245} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          φ = 0
        </T>
      </Fade>

      {/* beat 4 — period and frequency */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={290} size={15} fill={INK} anchor="start" weight={700}>
          T = 2π/ω = 0.1 s ,  f = 10 Hz
        </T>
      </Fade>

      {/* beat 5 — maximum speed */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={325} size={15} fill={INK} anchor="start" weight={700}>
          v<Sub>max</Sub>
          <Up> = Aω = π ≈ 3.14 m/s</Up>
        </T>
      </Fade>

      {/* beat 6 — maximum acceleration, high emphasis */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={360} size={15} fill={RED} anchor="start" weight={700}>
          a<Sub>max</Sub>
          <Up> = Aω² = 20π² ≈ 197.4 m/s²</Up>
        </T>
      </Fade>

      {/* beat 7 — the method that scores full marks */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 244 480 h 592 q 14 0 14 14 v 24 q 0 14 -14 14 h -592 q -14 0 -14 -14 v -24 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.2}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={540} y={517} size={14} fill={INK} weight={700}>
          {t(
            "method: compare → substitute → attach units, always",
            "method: compare karo → substitute karo → hamesha units lagao"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

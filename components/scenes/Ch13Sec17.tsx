/**
 * Ch13 · Section 17 — "Worked example (CBSE): energy of a block on a spring"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 4.35, 9.35, 15.79, 20.63, 24.65, 33.36, 38.51]):
 *  0 shelf
 *  1 given: m=0.5kg, k=200N/m, A=4cm · find E, Kmax, Umax, vmax
 *  2 E = ½kA² = ½(200)(0.04)² = 0.16 J
 *  3 Kmax at mean (all K), Umax at extremes (all U)
 *  4 Kmax = Umax = E = 0.16 J
 *  5 hero: vmax = √(2E/m) = 0.8 m/s
 *  6 method: total first, then read maxima off it
 *  7 final answer chip
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl110 size14 · st x70 bl142 size13
 *  b2 | st x70 bl185 size15
 *  b3 | st x70 bl225 size13
 *  b4 | st x70 bl262 size16 amber
 *  b5 | box x70..560 y280..335 rx14 · line cx315 bl313 size17
 *  b6 | script13 st x70 bl375 amber
 *  b7 | box x150..930 y460..515 rx16 · line cx540 bl493 size16
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
  INK,
  AMBER_DARK,
  GREEN,
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

export default function Ch13Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Total energy, then the maxima and the top speed", "Total energy, phir maxima aur top speed")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the given data */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={110} size={14} fill={INK} anchor="start" weight={700}>
          m = 0.5 kg , k = 200 N/m , A = 4 cm
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={70} y={142} size={13} fill={INK} anchor="start" weight={700}>
          {t("find: E, K", "nikaalo: E, K")}
          <Sub>max</Sub>
          <Up>, U</Up>
          <Sub>max</Sub>
          <Up>, v</Up>
          <Sub>max</Sub>
        </T>
      </Fade>

      {/* beat 2 — the total energy */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={185} size={15} fill={INK} anchor="start" weight={700}>
          E = ½kA² = ½(200)(0.04)² = 0.16 J
        </T>
      </Fade>

      {/* beat 3 — the locations */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={225} size={13} fill={INK} anchor="start">
          {t("K", "K")}
          <Sub>max</Sub>
          <Up> {t("at mean (all K) , U", "mean par (sab K) , U")}</Up>
          <Sub>max</Sub>
          <Up> {t("at extremes (all U)", "extremes par (sab U)")}</Up>
        </T>
      </Fade>

      {/* beat 4 — both maxima equal the total */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={262} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          K<Sub>max</Sub>
          <Up> = U</Up>
          <Sub>max</Sub>
          <Up> = E = 0.16 J</Up>
        </T>
      </Fade>

      {/* beat 5 — the top speed, hero */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.3)}
          d="M 84 280 h 462 q 14 0 14 14 v 27 q 0 14 -14 14 h -462 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={315} y={313} size={17} fill={INK} weight={800}>
          v<Sub>max</Sub>
          <Up> = √(2E/m) = √(2×0.16/0.5) = 0.8 m/s</Up>
        </T>
      </Fade>

      {/* beat 6 — the method */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={375} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "total first, then read the maxima straight off it",
            "pehle total, phir maxima seedha usi se padho"
          )}
        </T>
      </Fade>

      {/* beat 7 — the final answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 166 460 h 748 q 16 0 16 16 v 23 q 0 16 -16 16 h -748 q -16 0 -16 -16 v -23 q 0 -16 16 -16"
          stroke={GREEN}
          sw={2.6}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={493} size={16} fill={INK} weight={800}>
          E = K<Sub>max</Sub>
          <Up> = U</Up>
          <Sub>max</Sub>
          <Up> = 0.16 J , v</Up>
          <Sub>max</Sub>
          <Up> = 0.8 m/s</Up>
        </T>
      </Fade>
    </Scene>
  );
}

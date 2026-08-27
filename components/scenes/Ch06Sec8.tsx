/**
 * Ch06 · Section 8 — "Worked example: three point masses [CBSE]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.86, 27.31, 36.78, 47.96, 59.14, 69.63, 77.4]):
 *  0 title
 *  1 figure: axes, 2kg@(0,0) 3kg@(4,0) 5kg@(0,3), red CoM dot + "?" (hidden at b6)
 *  2 givens + M = 10 kg + "sum mass first"
 *  3 component formula line
 *  4 x calc + amber ring on 3 kg
 *  5 y calc + amber ring on 5 kg
 *  6 result box + dashed drops + "(1.2 m, 1.5 m)" label replaces "?"
 *  7 sanity: green arrow toward 5 kg + lines
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  scale 60px/m, origin (170,430)
 *  b1 | axes (150,430)→(460,430) / (170,450)→(170,180) · x(478,436) y(170,168) ·
 *       dots 2kg(170,430) 3kg(410,430) 5kg(170,250) · labels end(140,452)/
 *       cx400 bl 464 / end(142,254) · CoM (242,340) r5 red · "?" st(258,326)
 *  b2 | L1 script13 st x540 bl 140 · L2 sans16 st x540 bl 175 · note script12 bl 205
 *  b3 | formula sans16 st x540 bl 250
 *  b4 | line sans16 st x540 bl 300 · ringD(410,430,15,10) amber
 *  b5 | line sans16 st x540 bl 350 · ringD(170,250,16,12) amber
 *  b6 | green box x540..900 y380..440 · result cx720 bl 418 · dashes (242,340)→axes ·
 *       label red st(256,364)
 *  b7 | arrow (228,320)→(192,270) green · label script12 cx300 bl 210 ·
 *       line script12 st x540 bl 480
 */

import React from "react";
import { Path, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  ringD,
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

const Sub = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={5} fontSize={11}>
    {children}
  </TSpan>
);
const Up = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={-5}>{children}</TSpan>
);

export default function Ch06Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the task */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t(
            "worked example [CBSE] — three point masses",
            "worked example [CBSE] — teen point masses"
          )}
        </T>
      </Fade>

      {/* beat 1 — place the masses */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d={`${arrowD(150, 430, 460, 430)} ${arrowD(170, 450, 170, 180)}`}
        stroke={INK}
        sw={2}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={478} y={436} size={14} fill={INK} anchor="start" weight={700}>
          x
        </T>
        <T x={170} y={168} size={14} fill={INK} weight={700}>
          y
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3)}
        d="M 164 430 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={140} y={452} size={13} fill={INK} anchor="end" weight={700}>
          2 kg
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.4)}
        d="M 404 430 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={400} y={464} size={13} fill={INK} weight={700}>
          3 kg
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.8)}
        d="M 163 250 a 7 7 0 1 0 14 0 a 7 7 0 1 0 -14 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 6.4)}>
        <T x={142} y={254} size={13} fill={INK} anchor="end" weight={700}>
          5 kg
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 8.5)}
        d="M 237 340 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={RED}
        fill={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1 && beat < 6} delay={dl(1, 9.5)}>
        <T x={258} y={326} size={15} fill={RED} anchor="start" weight={700}>
          ?
        </T>
      </Fade>

      {/* beat 2 — givens */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={140} size={13} fill={INK} script anchor="start">
          {t(
            "given: 2 kg (0,0) · 3 kg (4,0) · 5 kg (0,3)",
            "diya hai: 2 kg (0,0) · 3 kg (4,0) · 5 kg (0,3)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={540} y={175} size={16} fill={INK} anchor="start" weight={700}>
          M = 2 + 3 + 5 = 10 kg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.5)}>
        <T x={540} y={205} size={12} fill={AMBER_DARK} script anchor="start">
          {t("always sum the mass FIRST", "mass hamesha PEHLE jodo")}
        </T>
      </Fade>

      {/* beat 3 — the component formula */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={540} y={250} size={16} fill={INK} anchor="start" weight={700}>
          x
          <Sub>cm</Sub>
          <Up> = Σmᵢxᵢ / M ,   y</Up>
          <Sub>cm</Sub>
          <Up> = Σmᵢyᵢ / M</Up>
        </T>
      </Fade>

      {/* beat 4 — x: only the 3 kg counts */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 3)}
        d={ringD(410, 430, 15, 10)}
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={540} y={300} size={16} fill={INK} anchor="start" weight={700}>
          x
          <Sub>cm</Sub>
          <Up> = (2·0 + 3·4 + 5·0)/10 = 12/10 = 1.2 m</Up>
        </T>
      </Fade>

      {/* beat 5 — y: only the 5 kg counts */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 3)}
        d={ringD(170, 250, 16, 12)}
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={540} y={350} size={16} fill={INK} anchor="start" weight={700}>
          y
          <Sub>cm</Sub>
          <Up> = (2·0 + 3·0 + 5·3)/10 = 15/10 = 1.5 m</Up>
        </T>
      </Fade>

      {/* beat 6 — the answer lands */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 552 380 h 336 q 12 0 12 12 v 36 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={720} y={418} size={20} fill={INK} weight={700}>
          CoM = (1.2 m, 1.5 m)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <Path
          d="M 242 345 V 430 M 237 340 H 170"
          fill="none"
          stroke={RED}
          strokeWidth={1.4}
          strokeDasharray="5 5"
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={256} y={364} size={13} fill={RED} anchor="start" weight={700}>
          (1.2, 1.5) m
        </T>
      </Fade>

      {/* beat 7 — sanity check */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d={arrowD(228, 320, 192, 270)}
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={300} y={210} size={12} fill={GREEN_DARK} script>
          {t(
            "leans toward the heavy 5 kg ✓",
            "bhaari 5 kg ki taraf jhukta hai ✓"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <T x={540} y={480} size={12} fill={GREEN_DARK} script anchor="start">
          {t(
            "sanity: exactly what mass-weighting demands ✓",
            "sanity: bilkul wahi jo mass-weighting maangti hai ✓"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

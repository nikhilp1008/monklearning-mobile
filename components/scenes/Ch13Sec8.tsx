/**
 * Ch13 · Section 8 — "Worked example (NEET): the ratio shortcut"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 4.55, 11.68, 18.41, 24.75, 29.7, 34.05, 38.41]):
 *  0 shelf + stopwatch icon "30 s"
 *  1 given: vmax = 8π cm/s, amax = 16π² cm/s² · find A, T
 *  2 the trap: vmax=Aω & amax=Aω², crossed out — don't solve together
 *  3 ω = amax/vmax = 16π²/8π = 2π rad/s
 *  4 T = 2π/ω = 1 s
 *  5 hero: A = vmax/ω = 8π/2π = 4 cm
 *  6 why: dividing cancels A, leaves ω alone
 *  7 lock-in: amax/vmax = ω — the #1 NEET trick
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020 · clock c(960,110) r28 · hand 960,110→972,98 · "30 s" cx960 bl152
 *  b1 | st x70 bl110 · st x70 bl140 (size14)
 *  b2 | st x70 bl185 size14 · cross M65,172→292,192 M292,172→65,192 ·
 *      script12 st x70 bl218 red
 *  b3 | st x70 bl260 size15
 *  b4 | st x70 bl295 size15
 *  b5 | box x70..430 y310..362 rx14 · line cx250 bl342 size18
 *  b6 | script13 st x70 bl395
 *  b7 | box x180..900 y470..535 rx16 · line cx540 bl508 size16
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

export default function Ch13Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Max speed and max acceleration given, in thirty seconds", "vmax aur amax diye — thirty seconds mein")}
        </T>
      </Fade>

      {/* beat 0 — the clock is running */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.5} />
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.9)}
        d="M 960 82 A 28 28 0 1 1 959.9 82"
        stroke={INK}
        sw={2}
        dur={0.5}
      />
      <Draw on={beat >= 0} delay={dl(0, 1.5)} d="M 960 110 L 972 98" stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 0} delay={dl(0, 2.0)}>
        <T x={960} y={152} size={13} fill={INK}>
          30 s
        </T>
      </Fade>

      {/* beat 1 — the given data */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={110} size={14} fill={INK} anchor="start" weight={700}>
          {t("given: ", "diya hai: ")}v<Sub>max</Sub>
          <Up> = 8π cm/s , a</Up>
          <Sub>max</Sub>
          <Up> = 16π² cm/s²</Up>
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={70} y={140} size={14} fill={INK} anchor="start" weight={700}>
          {t("find: A, T", "nikaalo: A, T")}
        </T>
      </Fade>

      {/* beat 2 — the trap: do not solve two equations together */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={185} size={14} fill={INK} anchor="start" weight={700}>
          v<Sub>max</Sub>
          <Up> = Aω   and   a</Up>
          <Sub>max</Sub>
          <Up> = Aω²</Up>
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.0)}
        d="M 65 172 L 292 192 M 292 172 L 65 192"
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={70} y={218} size={12} fill={RED} script anchor="start">
          {t("✗ don't solve two equations together", "✗ do equations saath mat solve karo")}
        </T>
      </Fade>

      {/* beat 3 — the shortcut: divide */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={260} size={15} fill={INK} anchor="start" weight={700}>
          ω = a<Sub>max</Sub>
          <Up>/v</Up>
          <Sub>max</Sub>
          <Up> = 16π²/8π = 2π rad/s</Up>
        </T>
      </Fade>

      {/* beat 4 — period */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={295} size={15} fill={INK} anchor="start" weight={700}>
          T = 2π/ω = 1 s
        </T>
      </Fade>

      {/* beat 5 — amplitude, the hero result */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.3)}
          d="M 84 310 h 332 q 14 0 14 14 v 24 q 0 14 -14 14 h -332 q -14 0 -14 -14 v -24 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={250} y={342} size={18} fill={INK} weight={800}>
          A = v<Sub>max</Sub>
          <Up>/ω = 8π/2π = 4 cm</Up>
        </T>
      </Fade>

      {/* beat 6 — why it works */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={395} size={13} fill={AMBER_DARK} script anchor="start">
          {t("dividing cancels A — only ω is left standing", "divide karo to A cancel — sirf ω bachta hai")}
        </T>
      </Fade>

      {/* beat 7 — lock it in */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 196 470 h 688 q 16 0 16 16 v 33 q 0 16 -16 16 h -688 q -16 0 -16 -16 v -33 q 0 -16 16 -16"
          stroke={GREEN}
          sw={2.6}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={508} size={16} fill={INK} weight={800}>
          a<Sub>max</Sub>
          <Up> / v</Up>
          <Sub>max</Sub>
          <Up> = ω — {t("the #1 reused NEET trick", "NEET ki #1 reused trick")}</Up>
        </T>
      </Fade>
    </Scene>
  );
}

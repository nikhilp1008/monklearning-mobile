/**
 * Ch06 · Section 7 — "Locating the CoM by integration: the semicircular wire"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.23, 29.87, 41.3, 56.92, 75.43, 87.38, 106.24]):
 *  0 title
 *  1 diagram: axes, semicircle R=170 c(270,400), element at θ=50°, radius,
 *    θ arc, dθ label, dashed height y = R sinθ
 *  2 symmetry: mirror arrows + "symmetry ⇒ x_cm = 0"
 *  3 density lines: λ = M/πR · dm = (M/π) dθ (R cancels)
 *  4 assemble integral (two lines, M cancels)
 *  5 evaluate: [−cosθ]₀^π = 2 → result box y_cm = 2R/π
 *  6 CoM dot at (270,292) + ring + "empty space!" label (end-anchored x255)
 *  7 red habit note
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script22 cx540 bl 52
 *  b1 | x-axis (80,400)→(470,400) · y-axis (270,420)→(270,210) · labels x(478,406)
 *       y(270,198) · O(254,422) · arc (100,400)→(440,400) top (270,230) ·
 *       element arc 46°..54° amber sw6 · radius O→(379,270) · θ arc r36 ·
 *       θ(316,386) · dθ st(404,262) · dash (379,270)→(379,400) · "y = R sinθ" st(390,345)
 *  b2 | arrows (225,255)→(252,255) / (315,255)→(288,255) · label script13 cx150 bl 170
 *  b3 | L1 st x540 bl 150 · L2 st x540 bl 190 · caption script12 st x540 bl 222
 *  b4 | L1 st x540 bl 270 · L2 st x540 bl 310 · caption script12 st x540 bl 338
 *  b5 | line st x540 bl 380 · green box x540..960 y400..470 · result size22 cx750 bl 442
 *  b6 | dot (270,292) r5 · ringD(270,292,14,12) · label end x255 bl 325
 *  b7 | red bar x66 y500..585 · L1 script14 st x84 bl 525 · L2 script13 st x84 bl 555
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

export default function Ch06Sec7({ currentTime, reveals, language }: SceneProps) {
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
            "CoM of a semicircular wire — by integration",
            "semicircular wire ka CoM — integration se"
          )}
        </T>
      </Fade>

      {/* beat 1 — the setup figure */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d={`${arrowD(80, 400, 470, 400)} ${arrowD(270, 420, 270, 210)}`}
        stroke={INK}
        sw={2}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={478} y={406} size={14} fill={INK} anchor="start" weight={700}>
          x
        </T>
        <T x={270} y={198} size={14} fill={INK} weight={700}>
          y
        </T>
        <T x={254} y={422} size={13} fill={MUTED} weight={700}>
          O
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3)}
        d="M 100 400 A 170 170 0 0 1 440 400"
        stroke={INK}
        sw={3}
        dur={1.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.5)}
        d="M 388 278 A 170 170 0 0 0 370 262"
        stroke={AMBER}
        sw={6}
        dur={0.5}
      />
      <Draw on={beat >= 1} delay={dl(1, 6.5)} d="M 270 400 L 379 270" stroke={INK} sw={1.8} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 7.3)}>
        <T x={316} y={332} size={14} fill={INK} anchor="end" weight={700}>
          R
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 8)}
        d="M 306 400 A 36 36 0 0 0 293 372"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 8.7)}>
        <T x={316} y={386} size={13} fill={AMBER_DARK} weight={700}>
          θ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9.8)}>
        <T x={404} y={262} size={12} fill={AMBER_DARK} script anchor="start">
          dθ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 11.5)}>
        <Path
          d="M 379 275 V 400"
          fill="none"
          stroke={GREEN}
          strokeWidth={1.8}
          strokeDasharray="6 5"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12.5)}>
        <T x={390} y={345} size={13} fill={GREEN_DARK} anchor="start" weight={700}>
          y = R sinθ
        </T>
      </Fade>

      {/* beat 2 — symmetry kills x */}
      <Draw on={beat >= 2} delay={dl(2, 1)} d={arrowD(225, 255, 252, 255)} stroke={GREEN} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d={arrowD(315, 255, 288, 255)} stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={150} y={170} size={13} fill={GREEN_DARK} script>
          {t("symmetry ⇒ x", "symmetry ⇒ x")}
          <Sub>cm</Sub>
          <Up> = 0</Up>
        </T>
      </Fade>

      {/* beat 3 — the mass element */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={540} y={150} size={18} fill={INK} anchor="start" weight={700}>
          λ = M / πR
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={540} y={190} size={18} fill={INK} anchor="start" weight={700}>
          dm = λ · R dθ = (M/π) dθ
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={540} y={222} size={12} fill={AMBER_DARK} script anchor="start">
          {t("the R cancels — beautifully", "R cancel ho jaata hai — kya baat")}
        </T>
      </Fade>

      {/* beat 4 — assemble the integral */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={540} y={270} size={17} fill={INK} anchor="start" weight={700}>
          y
          <Sub>cm</Sub>
          <Up> = (1/M) ∫₀</Up>
          <TSpan dy={-6} fontSize={11}>
            π
          </TSpan>
          <TSpan dy={6}> (R sinθ)(M/π) dθ</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={540} y={310} size={17} fill={INK} anchor="start" weight={700}>
          {"     = (R/π) ∫₀"}
          <TSpan dy={-6} fontSize={11}>
            π
          </TSpan>
          <TSpan dy={6}> sinθ dθ</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={540} y={338} size={12} fill={GREEN_DARK} script anchor="start">
          {t("the M cancels too", "M bhi cancel ho gaya")}
        </T>
      </Fade>

      {/* beat 5 — evaluate */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={540} y={380} size={17} fill={INK} anchor="start" weight={700}>
          = (R/π) [−cosθ]₀
          <TSpan dy={-6} fontSize={11}>
            π
          </TSpan>
          <TSpan dy={6}> = (R/π) × 2</TSpan>
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 5)}
        d="M 552 400 h 396 q 12 0 12 12 v 46 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.8}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 6.5)}>
        <T x={750} y={442} size={22} fill={INK} weight={700}>
          y
          <TSpan dy={6} fontSize={14}>
            cm
          </TSpan>
          <TSpan dy={-6}> = 2R/π ≈ 0.64 R</TSpan>
        </T>
      </Fade>

      {/* beat 6 — floating in empty space */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1)}
        d="M 265 292 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={GREEN}
        fill={GREEN}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d={ringD(270, 292, 14, 12)}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 3.5)}>
        <T x={255} y={325} size={13} fill={GREEN_DARK} script anchor="end">
          {t("0.64 R up — empty space!", "0.64 R upar — khaali jagah!")}
        </T>
      </Fade>

      {/* beat 7 — the habit */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 500 v 85" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={84} y={525} size={14} fill={RED} script anchor="start">
          {t(
            "the habit: every point of the element must share the coordinate you average",
            "aadat: element ka HAR point wahi coordinate share kare jiska average nikaal rahe ho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={555} size={13} fill={RED} script anchor="start">
          {t(
            "otherwise the integral quietly lies to you",
            "warna integral chupchaap jhooth bol deta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

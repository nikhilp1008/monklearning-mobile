/**
 * Ch06 · Section 39 — "Worked example: ladder against a smooth wall [JEE Advanced]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.55, 30.81, 42.33, 43.33, 44.33, 45.33, 46.33] — b3..b7 are 1 s
 * in EN → instant staggers from b3 on):
 *  0 title + subline
 *  1 figure: floor, wall, ladder, N_w / W / N_f / f arrows, θ arc
 *  2 force list (right)
 *  3 force-balance line (instant)
 *  4 torques-about-foot line (instant)
 *  5 torque equation lines (instant)
 *  6 μ_min result box (instant)
 *  7 practical insight + underline (instant)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | floor (100,470)→(470,470) · wall (410,140)→(410,470) · ladder (172,466)→(403,192) sw4 ·
 *       N_w (405,195)→(330,195) green, label end(322,200) · W (287,327)→(287,400) red,
 *       "W" cx287 bl 422 · N_f (170,455)→(170,385) green, "N_f" cx170 bl 372 ·
 *       f (185,452)→(255,452) amber, "f" st(268,456) · θ arc M212,466 A42→(199,428) ·
 *       "θ"(225,448)
 *  b2 | script12 st x560 bl 150/178/206
 *  b3 | sans15 st x560 bl 250
 *  b4 | script12 st x560 bl 295
 *  b5 | sans14 st x560 bl 340 / bl 372
 *  b6 | green box x560..960 y395..455 · cx760 bl 432
 *  b7 | script13 st x80 bl 545 · underline y565 x80..620
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

export default function Ch06Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the classic */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "ladder against a smooth wall [JEE Advanced]",
            "smooth wall se tiki ladder [JEE Advanced]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={92} size={12} fill={MUTED} script>
          {t(
            "weight W, length L · smooth wall, rough floor, angle θ — minimum μ?",
            "weight W, length L · smooth wall, rough floor, angle θ — minimum μ?"
          )}
        </T>
      </Fade>

      {/* beat 1 — every force marked */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d="M 100 470 H 470 M 410 140 V 470" stroke={INK} sw={2.5} dur={1} />
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d="M 172 466 L 403 192" stroke={INK} sw={4} dur={0.9} />
      <Draw on={beat >= 1} delay={dl(1, 3.6)} d={arrowD(405, 195, 330, 195)} stroke={GREEN} sw={2.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={322} y={200} size={13} fill={GREEN_DARK} anchor="end" weight={700}>
          N
          <Sub>w</Sub>
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5)} d={arrowD(287, 327, 287, 400)} stroke={RED} sw={2.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <T x={287} y={422} size={13} fill={RED} weight={700}>
          W
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 6.4)} d={arrowD(170, 455, 170, 385)} stroke={GREEN} sw={2.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={170} y={372} size={13} fill={GREEN_DARK} weight={700}>
          N
          <Sub>f</Sub>
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 7.8)} d={arrowD(185, 452, 255, 452)} stroke={AMBER} sw={2.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 8.4)}>
        <T x={268} y={456} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          f
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 9.2)}
        d="M 212 466 A 42 42 0 0 0 199 428"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 9.8)}>
        <T x={225} y={448} size={13} fill={AMBER_DARK} weight={700}>
          θ
        </T>
      </Fade>

      {/* beat 2 — the list */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={560} y={150} size={12} fill={INK} script anchor="start">
          {t(
            "smooth wall → only horizontal N_w (top)",
            "smooth wall → sirf horizontal N_w (top par)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={560} y={178} size={12} fill={INK} script anchor="start">
          {t(
            "rough floor → N_f + friction f (foot)",
            "rough floor → N_f + friction f (foot par)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={560} y={206} size={12} fill={INK} script anchor="start">
          {t("weight W → at the midpoint", "weight W → midpoint par")}
        </T>
      </Fade>

      {/* beat 3 — quick force balance (1 s in EN) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={560} y={250} size={15} fill={INK} anchor="start" weight={700}>
          (i)  f = N
          <Sub>w</Sub>
          <Up>     (ii)  N</Up>
          <Sub>f</Sub>
          <Up> = W</Up>
        </T>
      </Fade>

      {/* beat 4 — the key move (1 s in EN) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={560} y={295} size={12} fill={GREEN_DARK} script anchor="start">
          {t(
            "torques about the FOOT — N_f and f both drop out",
            "torques FOOT ke baare mein — N_f aur f dono nikal jaate"
          )}
        </T>
      </Fade>

      {/* beat 5 — the torque equation (1 s in EN) */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={560} y={340} size={14} fill={INK} anchor="start" weight={700}>
          N
          <Sub>w</Sub>
          <Up> · L sinθ = W · (L/2) cosθ</Up>
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={560} y={372} size={14} fill={INK} anchor="start" weight={700}>
          ⇒  N
          <Sub>w</Sub>
          <Up> = (W/2) cotθ</Up>
        </T>
      </Fade>

      {/* beat 6 — μ_min (1 s in EN) */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.1)}
        d="M 572 395 h 376 q 12 0 12 12 v 36 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={760} y={432} size={17} fill={INK} weight={700}>
          μ
          <Sub>min</Sub>
          <Up> = f / N</Up>
          <Sub>f</Sub>
          <Up> = ½ cotθ</Up>
        </T>
      </Fade>

      {/* beat 7 — stand it upright (1 s in EN) */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={80} y={545} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "steeper ladder → smaller cotθ → less friction needed — stand it as upright as safe ✓",
            "ladder jitni seedhi → chhota cotθ → kam friction chahiye — jitna safe ho utni upright rakho ✓"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 80 565 h 640" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}

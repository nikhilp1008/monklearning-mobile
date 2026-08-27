/**
 * Ch06 · Section 38 — "Worked example: beam on two supports [JEE Main]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 19.71, 30.63, 38.91, 50.69, 51.69, 52.69, 53.69] — b4..b7 are 1 s
 * in EN; hi b1/b2 are 1 s → staggers ≤0.8 s from b4 on, short early too):
 *  0 title + subline
 *  1 figure: beam, supports A (x=0) and B (x=3), weight 200 N down at centre,
 *    N_A/N_B up arrows
 *  2 geometry line
 *  3 force balance (i)
 *  4 smart-move line: torques about A (instant)
 *  5 torque equation → N_B box (instant)
 *  6 back-substitute → N_A (instant)
 *  7 physical check line (instant)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | beam x180..660 y200..218 · A tri apex(180,222) · B tri apex(540,222) ·
 *       W arrow (420,238)→(420,300) red "200 N" cx420 bl 322 · N_A (180,190)→(180,130)
 *       green "N_A" cx180 bl 118 · N_B (540,190)→(540,130) green "N_B" cx540 bl 118 ·
 *       scale dashes y246: 0/2m/3m labels bl 268
 *  b2 | script12 st x700 bl 150
 *  b3 | sans15 st x700 bl 200
 *  b4 | script12 st x700 bl 250
 *  b5 | sans14 st x80 bl 390 · green box x560..1000 y365..425 cx780 bl 402
 *  b6 | sans15 st x80 bl 460
 *  b7 | script13 st x80 bl 520 · underline y540 x80..620
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

export default function Ch06Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — both conditions at once */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("beam on two supports [JEE Main]", "do supports par beam [JEE Main]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={92} size={12} fill={MUTED} script>
          {t(
            "4 m beam, 200 N · supports at 0 and 3 m — find N_A and N_B",
            "4 m beam, 200 N · supports 0 aur 3 m par — N_A aur N_B nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the layout */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M 180 200 h 480 v 18 h -480 z"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.2)}
        d="M 180 222 L 164 250 h 32 z M 540 222 L 524 250 h 32 z"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw on={beat >= 1} delay={dl(1, 2)} d={arrowD(420, 238, 420, 300)} stroke={RED} sw={2.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={420} y={322} size={13} fill={RED} weight={700}>
          200 N
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d={arrowD(180, 190, 180, 130)} stroke={GREEN} sw={2.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={180} y={118} size={13} fill={GREEN_DARK} weight={700}>
          N
          <Sub>A</Sub>
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.8)} d={arrowD(540, 190, 540, 130)} stroke={GREEN} sw={2.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <T x={540} y={118} size={13} fill={GREEN_DARK} weight={700}>
          N
          <Sub>B</Sub>
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.5)}>
        <T x={180} y={268} size={11} fill={MUTED} weight={700}>
          0
        </T>
        <T x={452} y={290} size={11} fill={MUTED} weight={700}>
          2 m
        </T>
        <T x={540} y={268} size={11} fill={MUTED} weight={700}>
          3 m
        </T>
      </Fade>

      {/* beat 2 — geometry */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={700} y={150} size={12} fill={INK} script anchor="start">
          {t(
            "weight at the centre (2 m) · A at 0 · B at 3 m",
            "weight centre par (2 m) · A 0 par · B 3 m par"
          )}
        </T>
      </Fade>

      {/* beat 3 — vertical balance */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={700} y={200} size={15} fill={INK} anchor="start" weight={700}>
          N
          <Sub>A</Sub>
          <Up> + N</Up>
          <Sub>B</Sub>
          <Up> = 200   (i)</Up>
        </T>
      </Fade>

      {/* beat 4 — the smart move (1 s in EN) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={700} y={250} size={12} fill={GREEN_DARK} script anchor="start">
          {t(
            "torques about A → N_A drops out (arm 0)",
            "torques A ke baare mein → N_A nikal jaata (arm 0)"
          )}
        </T>
      </Fade>

      {/* beat 5 — solve for N_B (1 s in EN) */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={80} y={390} size={14} fill={INK} anchor="start" weight={700}>
          N
          <Sub>B</Sub>
          <Up>(3) − (200)(2) = 0</Up>
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.4)}
        d="M 572 365 h 416 q 12 0 12 12 v 36 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={780} y={402} size={16} fill={INK} weight={700}>
          N
          <Sub>B</Sub>
          <Up> = 400/3 ≈ 133.3 N</Up>
        </T>
      </Fade>

      {/* beat 6 — back-substitute (1 s in EN) */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={80} y={460} size={15} fill={INK} anchor="start" weight={700}>
          N
          <Sub>A</Sub>
          <Up> = 200 − 133.3 = 66.7 N</Up>
        </T>
      </Fade>

      {/* beat 7 — physical check (1 s in EN) */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={80} y={520} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "check: B is nearer the weight → carries more · 133.3 + 66.7 = 200 ✓",
            "check: B weight ke zyada paas → zyada uthata · 133.3 + 66.7 = 200 ✓"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 80 540 h 540" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}

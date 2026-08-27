/**
 * Ch03 · Section 8 — "Board-level: resolving a 20 N pull at 60 degrees"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.4, 32.7, 55.7, 56.7, 73.8, 84.7, 99.3, 124.1]):
 *  0 heading + problem line
 *  1 "components" = RESOLVE
 *  2 figure: cart, F at 60°, Fx/Fy, arc
 *  3 GIVEN chips
 *  4 red: from horizontal → cos horizontal
 *  5 Fx = 10 N
 *  6 Fy ≈ 17.3 N
 *  7 ANSWER box + interpretation
 *  8 CHECK: reassemble to 20 N
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b0 | title cx540 bl 50 · underline M340 64 h400 · problem cx540 bl 84 s12
 *  b1 | line st x84 bl 112 s13 · underline M84 120 h330
 *  b2 | cart x140..280 y330..375 lbl cx210 bl 357 · wheels (175,385)/(245,385) r8 ·
 *       ground M80 393 h380 · O(275,335) · F→(345,214) lbl st x330 bl 280 ·
 *       Fx→(345,335) lbl cx310 bl 355 · Fy→(275,214) lbl end x263 bl 280 ·
 *       dashed (345,214)→(345,335) / →(275,214) · arc r24 lbl st x306 bl 320 ·
 *       caption cx280 bl 424
 *  b3 | chips x580 y150 w130 h34 · x730 y150 w270 h34
 *  b4 | red st x580 bl 220 / 242 s12
 *  b5 | st x580 bl 286 s15
 *  b6 | st x580 bl 326 s15
 *  b7 | box x580..1020 y356..404 text cx800 bl 386 s15 · caption cx800 bl 428 s11
 *  b8 | bar M566 452 v56 · green st x580 bl 470 / 494 s13
 */

import React from "react";
import { Circle } from 'react-native-svg';
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={20} fill={INK} script>
          {t("CBSE BOARD LEVEL — resolve the pull", "CBSE BOARD LEVEL — pull ko resolve karo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 64 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "a string pulls a toy cart: 20 N at 60° above the horizontal — find both components",
            "string se toy cart khincha: 20 N, horizontal se 60° upar — dono components nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — decode the question */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={112} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the word “components” is the examiner saying: RESOLVE",
            "“components” shabd examiner ka ishara hai: RESOLVE karo"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2)} d="M 84 120 h 340" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 2 — the figure first */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 152 330 h 116 q 12 0 12 12 v 21 q 0 12 -12 12 h -116 q -12 0 -12 -12 v -21 q 0 -12 12 -12"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Circle cx={175} cy={385} r={8} fill="none" stroke={INK} strokeWidth={2} />
        <Circle cx={245} cy={385} r={8} fill="none" stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.4)} d="M 80 393 h 380" stroke={MUTED} sw={1.6} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={210} y={357} size={12} fill={INK_LIGHT} script>
          {t("toy cart", "toy cart")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.8)} d={arrowD(275, 335, 345, 214)} stroke={INK} sw={2.8} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 4.8)}>
        <T x={330} y={280} size={13} fill={INK} weight={700} anchor="start">F = 20 N</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5.6)} d="M 299 335 A 24 24 0 0 0 287 314.2" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 6.2)}>
        <T x={306} y={320} size={12} fill={AMBER_DARK} weight={700} anchor="start">60°</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 7.4)} d={arrowD(275, 335, 345, 335)} stroke={GREEN} sw={2.8} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 8.2)}>
        <T x={310} y={355} size={13} fill={GREEN} weight={700}>Fx</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 9.2)} d={arrowD(275, 335, 275, 214)} stroke={AMBER_DARK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={263} y={280} size={13} fill={AMBER_DARK} weight={700} anchor="end">Fy</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 11)} d="M 345 214 V 335 M 345 214 H 275" stroke={MUTED} sw={1.3} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 13)}>
        <T x={280} y={424} size={12} fill={AMBER_DARK} script>
          {t("one pull, two jobs — the sledge again", "ek khinchav, do kaam — wahi sledge story")}
        </T>
      </Fade>

      {/* beat 3 — given */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Chip x={580} y={150} w={130} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          F = 20 N
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <Chip x={730} y={150} w={270} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14}>
          {t("θ = 60° to the HORIZONTAL", "θ = 60° HORIZONTAL se")}
        </Chip>
      </Fade>

      {/* beat 4 — that word decides everything */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={580} y={220} size={12} fill={RED} script anchor="start">
          {t(
            "angle from the horizontal → cos goes with the horizontal",
            "angle horizontal se hai → cos horizontal ke saath jayega"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={580} y={242} size={12} fill={RED} script anchor="start">
          {t(
            "“from the vertical” would swap them — check before writing",
            "“vertical se” hota to swap — likhne se pehle check karo"
          )}
        </T>
      </Fade>

      {/* beat 5 — horizontal */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={580} y={286} size={15} fill={INK} weight={700} anchor="start">
          Fx = 20 cos 60° = 20 × ½ = 10 N
        </T>
      </Fade>

      {/* beat 6 — vertical */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={580} y={326} size={15} fill={INK} weight={700} anchor="start">
          Fy = 20 sin 60° = 10√3 ≈ 17.3 N
        </T>
      </Fade>

      {/* beat 7 — answer + what it means */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 592 356 h 416 q 12 0 12 12 v 24 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={800} y={386} size={15} fill={INK} weight={800}>
          {t("Fx = 10 N drags · Fy ≈ 17.3 N lifts", "Fx = 10 N gaseeta · Fy ≈ 17.3 N uthata")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={800} y={428} size={11} fill={GREEN} script>
          {t(
            "the lift does no dragging — it eases the ground's push-back",
            "lift wala hissa gaseet-ta nahi — zameen ka dabav halka karta hai"
          )}
        </T>
      </Fade>

      {/* beat 8 — the 3-second check */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 566 452 v 56" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={580} y={470} size={13} fill={GREEN} script anchor="start">
          {t(
            "check: √(10² + 17.3²) = √400 = 20 N ✓ — the original returns",
            "check: √(10² + 17.3²) = √400 = 20 N ✓ — wahi original wapas"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={580} y={494} size={13} fill={GREEN} script anchor="start">
          {t(
            "anything but 20 → you swapped a sin for a cos",
            "20 ke alawa kuchh bhi → sin-cos swap ho gaya hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * Ch03 · Section 42 — "Resolve the launch, and out comes a parabola"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.9, 27.1, 40.7, 55.0, 70.5, 82.5, 91.5]):
 *  0 heading
 *  1 resolve u diagram
 *  2 tools per channel
 *  3 hero: drift + fall = PARABOLA
 *  4 the shape of everything (+ parabola glyph)
 *  5 T · H · R, 45°
 *  6 assumptions bar
 *  7 lands higher/lower → components
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | O(140,430) · u →(300,310) lbl (198,350) · ucosθ →(300,430) lbl cx220 bl 454 ·
 *       usinθ →(140,310) lbl end (128,370) · dashes (300,310)→(300,430) / (140,310)→(300,310) ·
 *       arc r36 lbl st (192,416)
 *  b2 | st x540 bl 130 / 158 s13
 *  b3 | box x540..1020 y186..232 text cx780 bl 216 s15
 *  b4 | caption st x540 bl 264 s12 · parabola M120 566 Q260 470 400 566
 *  b5 | st x540 bl 300 s13 · st x540 bl 324 s12
 *  b6 | bar M526 356 v56 · lines st x540 bl 374 / 398 s12
 *  b7 | bar M526 434 v52 · lines st x540 bl 452 / 476 s12
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
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

export default function Ch03Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "Resolve u — then each channel on its own",
            "u ko resolve karo — phir har channel apne dum par"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — resolve the launch */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Circle cx={140} cy={430} r={4.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={arrowD(140, 430, 300, 310)} stroke={INK} sw={3} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={198} y={350} size={15} fill={INK} weight={800}>u</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.8)} d={arrowD(140, 430, 300, 430)} stroke={AMBER_DARK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={220} y={454} size={13} fill={AMBER_DARK} weight={700}>u cosθ</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.4)} d={arrowD(140, 430, 140, 310)} stroke={GREEN} sw={2.8} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <T x={128} y={370} size={13} fill={GREEN} weight={700} anchor="end">u sinθ</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 6)} d="M 300 310 V 430 M 140 310 H 300" stroke={MUTED} sw={1.3} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 7)} d="M 176 430 A 36 36 0 0 0 168.8 408.4" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 7.6)}>
        <T x={192} y={416} size={12} fill={AMBER_DARK} weight={700} anchor="start">θ</T>
      </Fade>

      {/* beat 2 — the tools per channel */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={130} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "sideways: constant-velocity motion (no force there)",
            "sideways: constant-velocity motion (wahan koi force nahi)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={540} y={158} size={13} fill={GREEN} script anchor="start">
          {t(
            "up-down: the free-fall equations, in full",
            "upar-neeche: free-fall equations, poori tarah"
          )}
        </T>
      </Fade>

      {/* beat 3 — the parabola drops out */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M 552 186 h 456 q 12 0 12 12 v 22 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={780} y={216} size={15} fill={GREEN} weight={800} script>
          {t(
            "uniform drift + free fall = a PARABOLA",
            "uniform drift + free fall = PARABOLA"
          )}
        </T>
      </Fade>

      {/* beat 4 — the shape of everything */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={540} y={264} size={12} fill={INK} script anchor="start">
          {t(
            "every fountain jet, hose stream, basketball shot — the very same curve",
            "har fountain ki dhaar, hose ki stream, basketball shot — wahi ek curve"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.2)} d="M 120 566 Q 260 470 400 566" stroke={INK_LIGHT} sw={2.2} dur={1} />

      {/* beat 5 — the quantities follow */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={300} size={13} fill={INK} weight={700} anchor="start">
          {t(
            "T (time of flight) · H (max height) · R (range)",
            "T (time of flight) · H (max height) · R (range)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={540} y={324} size={12} fill={GREEN} script anchor="start">
          {t("the range is greatest at 45°", "range 45° par sabse badi hoti hai")}
        </T>
      </Fade>

      {/* beat 6 — the assumptions */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 526 356 v 56" stroke={AMBER_DARK} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={374} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "ASSUMPTIONS: no air drag — real drag cuts R and H, breaks the symmetry",
            "ASSUMPTIONS: air drag nahi — asli drag R aur H kaat deta hai, symmetry todta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={540} y={398} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "g constant · launch and landing at the SAME height",
            "g constant · launch aur landing EK hi height par"
          )}
        </T>
      </Fade>

      {/* beat 7 — when the formulas die */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 526 434 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={452} size={12} fill={RED} script anchor="start">
          {t(
            "lands higher or lower? the symmetric formulas no longer apply",
            "ooncha ya neecha gire? symmetric formulas kaam nahi karte"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={540} y={476} size={12} fill={INK} script anchor="start">
          {t(
            "go back to the component equations and work from there",
            "wapas component equations par jao aur wahin se kaam karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

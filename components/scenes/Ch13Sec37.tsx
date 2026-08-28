/**
 * Ch13 · Section 37 — "Formula board: forced oscillation and resonance"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 5.78, 21.77, 38.66, 51.55, 67.99, 83.1, 94.21]):
 *  0 shelf
 *  1 A = (F₀/m) / √((ω²−ω₀²)² + (bω/m)²)
 *  2 diagram: resonance curve — sharp (high Q) vs broad (low Q)
 *  3 ω_r ≈ ω₀ , A_res ≈ F₀/(bω₀)
 *  4 ω→0: A→F₀/k ; ω≈ω₀: A≈F₀/(bω₀)
 *  5 hero (high): Q = mω₀/b = 2π(energy stored/energy lost per cycle)
 *  6 light damping ⇒ ω'≈ω₀
 *  7 high-Q rings (high): ~Q/2π cycles before energy falls to 1/e
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl105 size12
 *  b2 | x-axis y260 x630..1010 → · y-axis x760 y275..90 ↑ · ω₀-dashed x760 y95..260 ·
 *      sharp M650,245 Q730,245 760,95 Q790,245 870,245 (green) · "high Q" x775 bl110 ·
 *      broad M630,245 Q690,245 760,175 Q830,245 1010,245 (amber) · "low Q" x790 bl180 ·
 *      "ω₀" cx760 bl278
 *  b3 | st x70 bl145 size13
 *  b4 | st x70 bl180 size12
 *  b5 | box x70..500 y205..260 rx14 · line cx285 bl238 size15
 *  b6 | script12 st x70 bl300 amber
 *  b7 | script13 st x70 bl340 red
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={18} fill={INK} script>
          {t("Driven amplitude, the resonance peak, and quality factor", "Driven amplitude, resonance peak, aur quality factor")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the master formula */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={105} size={12} fill={INK} anchor="start" weight={700}>
          A = (F₀/m) / √((ω²−ω₀²)² + (bω/m)²)
        </T>
      </Fade>

      {/* beat 2 — the resonance curve */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={arrowD(630, 260, 1010, 260)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={arrowD(760, 275, 760, 90)} stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <Path d="M 760 95 V 260" stroke={AMBER_DARK} strokeWidth={1.2} strokeDasharray="4 3" fill="none" />
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.6)}
        d="M650 245 Q730 245 760 95 Q790 245 870 245"
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={775} y={110} size={11} fill={GREEN} anchor="start">
          {t("high Q", "high Q")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.7)}
        d="M630 245 Q690 245 760 175 Q830 245 1010 245"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={790} y={180} size={11} fill={AMBER_DARK} anchor="start">
          {t("low Q", "low Q")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={760} y={278} size={11} fill={INK}>
          ω₀
        </T>
      </Fade>

      {/* beat 3 — the resonant peak */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={145} size={13} fill={INK} anchor="start" weight={700}>
          ω_r ≈ ω₀ , A_res ≈ F₀/(bω₀)
        </T>
      </Fade>

      {/* beat 4 — the two limits */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={180} size={12} fill={INK} anchor="start">
          ω→0: A→F₀/k  ;  ω≈ω₀: A≈F₀/(bω₀)
        </T>
      </Fade>

      {/* beat 5 — the quality factor, hero */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.3)}
          d="M 84 205 h 402 q 14 0 14 14 v 27 q 0 14 -14 14 h -402 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={285} y={238} size={15} fill={INK} weight={800}>
          Q = mω₀/b = 2π(energy stored/energy lost per cycle)
        </T>
      </Fade>

      {/* beat 6 — the light-damping simplification */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={300} size={12} fill={AMBER_DARK} script anchor="start">
          {t("light damping ⇒ ω'≈ω₀", "light damping ⇒ ω'≈ω₀")}
        </T>
      </Fade>

      {/* beat 7 — the ringing consequence, high emphasis */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={340} size={13} fill={RED} script anchor="start">
          {t(
            "high-Q rings ~Q/2π cycles before energy falls to 1/e",
            "high-Q ~Q/2π cycles tak ring karta hai, phir energy 1/e tak girti hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

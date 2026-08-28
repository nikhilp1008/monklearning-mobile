/**
 * Ch10 · Section 53 — "Extrapolating to absolute zero and the Kelvin scale"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,11.53,19.9,28.86] — beats 0-2 exactly 1s apart, so
 * those Fade delays stay ≤ ~0.3s):
 *  0 hook: plot P (fixed V) vs Celsius T — a straight line. Extend it back?
 *  1 the real line: 0°C to 100°C, pressure rising
 *  2 extrapolated back: crosses zero pressure at −273.15°C
 *  3 absolute zero — the coldest conceivable temperature
 *  4 same intercept for every gas — a property of temperature itself
 *  5 shift the origin here = the Kelvin scale, P ∝ T
 *  6 combine the three laws: PV=nRT — low pressure only, never quite reached
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl85
 *  b1 | axes x200..820 y100..330 · line (550,300)→(820,210) · "100°C" bl345
 *  b2 | extrapolated (200,330)→(550,300) · "0°C" x550 bl345 ·
 *       "-273.15°C" x200 bl345
 *  b3 | dot (200,330) · declaration mid x540 bl375
 *  b4 | note mid x540 bl405
 *  b5 | note mid x540 bl435
 *  b6 | box x370..710 y458..510 · equation mid x540 bl480 · caution mid x540 bl500
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={19} fill={INK} script>
          {t("extrapolating to absolute zero and the kelvin scale", "absolute zero aur kelvin scale tak extrapolate karna")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("P vs Celsius T is a straight line — extend it backward?", "P vs Celsius T ek seedhi line hai — peeche badhaayein?")}
        </T>
      </Fade>

      {/* beat 1 — the real line */}
      <Draw on={beat >= 1} delay={dl(1, 0.15)} d="M200 100 v230 M200 330 h620" stroke={INK_LIGHT} sw={1.6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M550 300 L820 210" stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={820} y={345} size={11} fill={MUTED} anchor="middle">100°C</T>
      </Fade>

      {/* beat 2 — extrapolated backward */}
      <Draw on={beat >= 2} delay={dl(2, 0.15)} d="M200 330 L550 300" stroke={MUTED} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={550} y={345} size={11} fill={MUTED} anchor="middle">0°C</T>
        <T x={200} y={345} size={11} fill={RED} anchor="middle">−273.15°C</T>
      </Fade>

      {/* beat 3 — absolute zero */}
      <Draw on={beat >= 3} delay={dl(3, 0.15)} d="M196 326 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0" stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={375} size={13} fill={RED} script weight={700} anchor="middle">
          {t("absolute zero — the coldest conceivable temperature", "absolute zero — sabse thanda temperature jo soch sakte")}
        </T>
      </Fade>

      {/* beat 4 — property of temperature itself */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={405} size={12} fill={MUTED} script anchor="middle">
          {t(
            "same for every gas — a property of temperature itself",
            "har gas ke liye same — temperature ki apni property"
          )}
        </T>
      </Fade>

      {/* beat 5 — the Kelvin scale */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={435} size={13} fill={AMBER_DARK} weight={700} anchor="middle">
          {t("shift the origin here ⇒ the Kelvin scale, P ∝ T", "yahan origin shift karo ⇒ Kelvin scale, P ∝ T")}
        </T>
      </Fade>

      {/* beat 6 — the ideal-gas equation */}
      <Draw on={beat >= 6} delay={dl(6, 0.15)} d="M370 458 h340 v52 h-340 z" stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={540} y={480} size={15} fill={GREEN} weight={800} anchor="middle">
          PV = nRT
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.85)}>
        <T x={540} y={500} size={10} fill={GREEN} anchor="middle">
          {t("low pressure only — absolute zero: approached, never reached", "sirf low pressure — absolute zero: kareeb, kabhi poora nahi")}
        </T>
      </Fade>
    </Scene>
  );
}

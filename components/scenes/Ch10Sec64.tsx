/**
 * Ch10 · Section 64 — "The phase diagram: triple point and critical point"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Note: en reveals have beats 4-6 exactly 1s apart, so those Fade delays
 * stay ≤ ~0.3s.
 *
 * Beats (en [0,8.87,22.02,29.61,41.56,42.56,43.56]):
 *  0 intro: P vs T plot = a phase diagram, map of preferred state
 *  1 three regions, three curves: fusion, vaporization, sublimation
 *  2 each curve is a two-phase equilibrium
 *  3 all three meet at the triple point — solid+liquid+vapour coexist
 *  4 for water: 273.16K, 611.7 Pa — anchors the kelvin
 *  5 vaporization curve ends at the critical point
 *  6 above critical T: no liquid-gas distinction at all
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl85
 *  b1 | axes x170..750 y100..300 · fusion (330,250)-(355,100) ·
 *       vaporization (330,250)-Q-(590,120) · sublimation (330,250)-(185,295) ·
 *       solid x230 y170 · liquid x420 y160 · gas x520 y260
 *  b2 | note mid x540 bl312
 *  b3 | dot (330,250) red · label mid x540 bl335
 *  b4 | water mid x540 bl358
 *  b5 | dot (590,120) amber · label mid x540 bl385
 *  b6 | note mid x540 bl412
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

export default function Ch10Sec64({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={18} fill={INK} script>
          {t("the phase diagram — triple point and critical point", "phase diagram — triple point aur critical point")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("P vs T is a phase diagram — a map of the preferred state", "P vs T ek phase diagram — preferred state ka naksha")}
        </T>
      </Fade>

      {/* beat 1 — regions and curves */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M170 100 v200 M170 300 h580" stroke={INK_LIGHT} sw={1.6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.35)} d="M330 250 L355 100" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.55)} d="M330 250 Q460 180 590 120" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M330 250 L185 295" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.05)}>
        <T x={230} y={170} size={12} fill={MUTED} anchor="middle">{t("solid", "solid")}</T>
        <T x={420} y={160} size={12} fill={MUTED} anchor="middle">{t("liquid", "liquid")}</T>
        <T x={520} y={260} size={12} fill={MUTED} anchor="middle">{t("gas", "gas")}</T>
      </Fade>

      {/* beat 2 — two-phase equilibrium */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={312} size={12} fill={MUTED} script anchor="middle">
          {t("each curve is a two-phase equilibrium", "har curve ek two-phase equilibrium hai")}
        </T>
      </Fade>

      {/* beat 3 — the triple point */}
      <Draw on={beat >= 3} delay={dl(3, 0.15)} d="M326 250 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0" stroke={RED} sw={2.4} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={335} size={13} fill={RED} script weight={700} anchor="middle">
          {t("triple point — solid, liquid, vapour all coexist", "triple point — solid, liquid, vapour saath rehte")}
        </T>
      </Fade>

      {/* beat 4 — water's triple point values */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={358} size={12} fill={INK} anchor="middle">
          {t("water: 273.16K, 611.7 Pa — anchors the kelvin", "water: 273.16K, 611.7 Pa — kelvin ka anchor")}
        </T>
      </Fade>

      {/* beat 5 — the critical point */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M586 120 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0" stroke={AMBER_DARK} sw={2.4} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={385} size={12} fill={AMBER_DARK} weight={700} anchor="middle">
          {t("critical point: water — 647K, 22.1 MPa", "critical point: water — 647K, 22.1 MPa")}
        </T>
      </Fade>

      {/* beat 6 — no distinction above critical T */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={412} size={13} fill={GREEN} script weight={700} anchor="middle">
          {t(
            "above critical T: no liquid-gas distinction at all",
            "critical T ke upar: liquid-gas ka farak khatam"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

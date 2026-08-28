/**
 * Ch10 · Section 73 — "Your complete formula toolkit"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Chapter Wrap-Up (1 of 2). A fast restatement of every subtopic's
 * headline formula, laid out as a 2×3 grid.
 *
 * Beats (en [0,5.89,20.91,30.55,39.77,55.47,56.47,57.47] — beats 5-7
 * exactly 1s apart, so those Fade/Draw delays stay ≤ ~0.3s):
 *  0 intro: a fast restatement, not a re-teach
 *  1 expansion: ΔL=αL₀ΔT, β=2α/γ=3α, stress=YαΔT
 *  2 calorimetry: Q=mcΔT, Q=mL, heat lost = heat gained
 *  3 conduction: H=KAΔT/L, R=L/KA (series add R, parallel add 1/R)
 *  4 radiation: P=eσA(T⁴−T₀⁴), λ_m T=b, Newton's cooling
 *  5 gases: P₁V₁/T₁=P₂V₂/T₂, PV=nRT, gas thermometer
 *  6 change of state: Q=mL, dP/dT=L/(TΔV)
 *  7 the one habit: kelvin, budget the heat, think in ratios
 *
 * Layout plan (2×3 grid, boxes w450 h56, col1 x60 col2 x570):
 *  b0 | intro mid x540 bl85
 *  b1 | box x60 y99 w450 h56 · header y119 · formula y141
 *  b2 | box x570 y99 w450 h56 · header y119 · formula y141
 *  b3 | box x60 y163 w450 h56 · header y183 · formula y205
 *  b4 | box x570 y163 w450 h56 · header y183 · formula y205
 *  b5 | box x60 y227 w450 h56 · header y247 · formula y269
 *  b6 | box x570 y227 w450 h56 · header y247 · formula y269
 *  b7 | closer mid x540 bl312
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  INK_LIGHT,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

function Box({
  x,
  y,
  header,
  formula,
  on,
  delay,
}: {
  x: number;
  y: number;
  header: string;
  formula: string;
  on: boolean;
  delay: number;
}) {
  return (
    <G>
      <Draw on={on} delay={delay} d={`M${x} ${y} h450 v56 h-450 z`} stroke={INK_LIGHT} sw={1.6} dur={0.4} />
      <Fade on={on} delay={delay + 0.2}>
        <T x={x + 16} y={y + 22} size={11} fill={AMBER_DARK} weight={700} anchor="start">
          {header}
        </T>
        <T x={x + 16} y={y + 44} size={12} fill={INK} anchor="start">
          {formula}
        </T>
      </Fade>
    </G>
  );
}

export default function Ch10Sec73({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={18} fill={INK} script>
          {t("your complete formula toolkit", "aapka poora formula toolkit")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("a fast restatement, not a re-teach", "ek tez restatement, re-teach nahi")}
        </T>
      </Fade>

      {/* beat 1 — expansion */}
      <Box x={60} y={99} header="EXPANSION" formula="ΔL=αL₀ΔT · β=2α, γ=3α · stress=YαΔT" on={beat >= 1} delay={dl(1, 0.1)} />

      {/* beat 2 — calorimetry */}
      <Box x={570} y={99} header="CALORIMETRY" formula="Q=mcΔT · Q=mL · heat lost = heat gained" on={beat >= 2} delay={dl(2, 0.1)} />

      {/* beat 3 — conduction */}
      <Box x={60} y={163} header="CONDUCTION" formula="H=KAΔT/L · R=L/KA (series: +R, parallel: +1/R)" on={beat >= 3} delay={dl(3, 0.1)} />

      {/* beat 4 — radiation */}
      <Box x={570} y={163} header="RADIATION" formula="P=eσA(T⁴−T₀⁴) · λ_m T=b · −dT/dt=k(excess)" on={beat >= 4} delay={dl(4, 0.1)} />

      {/* beat 5 — gases */}
      <Box x={60} y={227} header="GASES" formula="P₁V₁/T₁=P₂V₂/T₂ · PV=nRT · T=273.16×P/P(tp)" on={beat >= 5} delay={dl(5, 0.1)} />

      {/* beat 6 — change of state */}
      <Box x={570} y={227} header="CHANGE OF STATE" formula="Q=mL · dP/dT=L/(TΔV)" on={beat >= 6} delay={dl(6, 0.1)} />

      {/* beat 7 — the one habit */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={312} size={13} fill={AMBER_DARK} script weight={700} anchor="middle">
          {t(
            "one habit: work in kelvin, budget the heat, think in ratios",
            "ek aadat: kelvin mein kaam karo, heat budget karo, ratios mein socho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

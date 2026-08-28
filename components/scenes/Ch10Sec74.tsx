/**
 * Ch10 · Section 74 — "One-screen chapter revision" (FINAL section)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Chapter Wrap-Up (2 of 2) — the last section of Chapter 10. Companion
 * grid to Sec73, one takeaway box per subtopic, closing on the grand
 * heat-transfer mnemonic.
 *
 * Beats (en [0,5.29,22.87,23.87,24.87,25.87,26.87,27.87] — beats 2-7
 * exactly 1s apart, so those Fade/Draw delays stay ≤ ~0.3s):
 *  0 intro: every subtopic in a single breath
 *  1 temp & expansion: heat≠temperature, L/A/V→1/2/3, γ=3α, densest@4°C
 *  2 calorimetry: 5 legs, budget heat first, count the calorimeter
 *  3 conduction: DC-circuit analogy, poor conductor hogs ΔT, t∝thickness²
 *  4 radiation: P∝T⁴, hotter=bluer, blackbody absorbs+emits all
 *  5 thermometry: dilute gases agree→standard, absolute zero unreachable
 *  6 change of state: squeeze ice→melts, triple point, evap cools/boil needs heat
 *  7 grand mnemonic: solids conduct, fluids convect, vacuum only radiates
 *
 * Layout plan (2×3 grid, boxes w450 h72, col1 x60 col2 x570):
 *  b0 | intro mid x540 bl85
 *  b1 | box x60 y99 w450 h72 · header y117 · l1 y137 · l2 y157
 *  b2 | box x570 y99 w450 h72 · header y117 · l1 y137 · l2 y157
 *  b3 | box x60 y181 w450 h72 · header y199 · l1 y219 · l2 y239
 *  b4 | box x570 y181 w450 h72 · header y199 · l1 y219 · l2 y239
 *  b5 | box x60 y263 w450 h72 · header y281 · l1 y301 · l2 y321
 *  b6 | box x570 y263 w450 h72 · header y281 · l1 y301 · l2 y321
 *  b7 | box x230..850 y355..410 · header mid x540 bl376 · content bl400
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
  AMBER,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

function Box({
  x,
  y,
  header,
  l1,
  l2,
  on,
  delay,
}: {
  x: number;
  y: number;
  header: string;
  l1: string;
  l2: string;
  on: boolean;
  delay: number;
}) {
  return (
    <G>
      <Draw on={on} delay={delay} d={`M${x} ${y} h450 v72 h-450 z`} stroke={INK_LIGHT} sw={1.6} dur={0.4} />
      <Fade on={on} delay={delay + 0.2}>
        <T x={x + 16} y={y + 18} size={11} fill={AMBER_DARK} weight={700} anchor="start">
          {header}
        </T>
        <T x={x + 16} y={y + 38} size={11.5} fill={INK} anchor="start">
          {l1}
        </T>
        <T x={x + 16} y={y + 58} size={11.5} fill={INK} anchor="start">
          {l2}
        </T>
      </Fade>
    </G>
  );
}

export default function Ch10Sec74({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={18} fill={INK} script>
          {t("one-screen chapter revision", "ek-screen chapter revision")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("every subtopic in a single breath", "har subtopic ek hi saans mein")}
        </T>
      </Fade>

      {/* beat 1 — temperature & expansion */}
      <Box
        x={60}
        y={99}
        header="TEMPERATURE & EXPANSION"
        l1="heat ≠ temperature · L,A,V → 1,2,3"
        l2="γ=3α, stress=YαΔT · densest at 4°C"
        on={beat >= 1}
        delay={dl(1, 0.1)}
      />

      {/* beat 2 — calorimetry */}
      <Box
        x={570}
        y={99}
        header="CALORIMETRY"
        l1="5 legs: warm-melt-warm-boil-warm"
        l2="budget heat first · count the calorimeter"
        on={beat >= 2}
        delay={dl(2, 0.1)}
      />

      {/* beat 3 — conduction */}
      <Box
        x={60}
        y={181}
        header="CONDUCTION"
        l1="treat as a DC circuit"
        l2="poor conductor hogs ΔT · ice time ∝ thickness²"
        on={beat >= 3}
        delay={dl(3, 0.1)}
      />

      {/* beat 4 — radiation */}
      <Box
        x={570}
        y={181}
        header="RADIATION"
        l1="power ∝ T⁴ · hotter = bluer"
        l2="blackbody: absorbs all, emits all"
        on={beat >= 4}
        delay={dl(4, 0.1)}
      />

      {/* beat 5 — thermometry */}
      <Box
        x={60}
        y={263}
        header="THERMOMETRY"
        l1="dilute gases agree → the standard"
        l2="absolute zero unreachable · PV/T = const"
        on={beat >= 5}
        delay={dl(5, 0.1)}
      />

      {/* beat 6 — change of state */}
      <Box
        x={570}
        y={263}
        header="CHANGE OF STATE"
        l1="squeeze ice → it melts"
        l2="triple point = 3 phases meet · evap cools, boil needs heat"
        on={beat >= 6}
        delay={dl(6, 0.1)}
      />

      {/* beat 7 — the grand mnemonic */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M230 355 h620 v55 h-620 z" stroke={AMBER} sw={2.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={376} size={11} fill={AMBER_DARK} weight={700} anchor="middle">
          {t("THE GRAND MNEMONIC — three modes of heat transfer", "GRAND MNEMONIC — heat transfer ke teen modes")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.45)}>
        <T x={540} y={400} size={14} fill={INK} weight={800} anchor="middle">
          {t("solids conduct · fluids convect · vacuum only radiates", "solids conduct · fluids convect · vacuum sirf radiate")}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * P12Ch02 · Section 31 — "Formula toolkit: stored energy and energy density"
 * Subtopic: Capacitance, Dielectrics & Stored Energy
 * OPEN CHALKBOARD DESIGN WITH STORED ENERGY FORMULAS (NO CONTAINER BOXES):
 *  - 1. Stored Energy: U = ½ C V² = ½ Q V = Q² / (2C)
 *  - 2. Energy Density: u_E = U / Volume = ½ ε₀ E²  [Joules / m³]
 *  - 3. Energy in Dielectric Medium: u_E = ½ K ε₀ E²
 *  - Zero card box containers
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch02Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Formula Toolkit: Stored Energy U = ½ C V² & Energy Density u_E = ½ ε₀ E²", "Formula Toolkit: Stored Energy U = ½ C V² & Energy Density u_E = ½ ε₀ E²")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: THREE EQUIVALENT ENERGY FORMULAS */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("TOTAL STORED ENERGY U FORMULAS", "TOTAL STORED ENERGY U FORMULAS")}
          </T>
        </Fade>

        {/* Floating Formulas */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={15} fill={GREEN} weight={900} anchor="start">
            U = ½ C V²   (Best when Voltage V is constant!)
          </T>

          <T x={45} y={125} size={15} fill={AMBER_DARK} weight={900} anchor="start">
            U = ½ Q V   (Average Potential Work)
          </T>

          <T x={45} y={170} size={15} fill={RED} weight={900} anchor="start">
            U = Q² / (2C)   (Best when Charge Q is constant!)
          </T>
        </Fade>

        {/* Free Floating Rule */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={RED} weight={800}>
            Energy is stored IN THE ELECTRIC FIELD between the plates!
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: ELECTRIC ENERGY DENSITY u_E */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ENERGY DENSITY u_E (ENERGY PER UNIT VOLUME)", "ENERGY DENSITY u_E (ENERGY PER UNIT VOLUME)")}
          </T>
        </Fade>

        {/* Floating Energy Density Formulas */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={15} fill={INK} weight={800} anchor="start">
            1. Vacuum Energy Density:
          </T>

          <T x={65} y={125} size={17} fill={GREEN} weight={900} anchor="start">
            u_E = ½ ε₀ E²   [Joules / m³]
          </T>

          <T x={45} y={170} size={15} fill={AMBER_DARK} weight={800} anchor="start">
            2. Dielectric Medium (Constant K):
          </T>

          <T x={65} y={205} size={17} fill={GREEN} weight={900} anchor="start">
            u_E = ½ K ε₀ E²   [Joules / m³]
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Universal formula — holds for ANY electric field in space)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CAPACITOR ENERGY RECAP", "CAPACITOR ENERGY RECAP")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Total Energy U = u_E × (Plate Area A × Spacing d) = (½ ε₀ E²) (A d)!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Half of battery work W_battery = Q V is lost as heat during charging (U_capacitor = ½ Q V)!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Stored Energy Mastered: U = ½CV² = ½QV = Q²/(2C) and Energy Density u_E = ½ε₀E² (J/m³)! ✓",
            "★ Stored Energy Mastered: U = ½CV² = ½QV = Q²/(2C) and Energy Density u_E = ½ε₀E² (J/m³)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

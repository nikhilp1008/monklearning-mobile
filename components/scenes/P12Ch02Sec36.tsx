/**
 * P12Ch02 · Section 36 — "JEE Main: dielectric with the battery still connected"
 * Subtopic: Capacitance, Dielectrics & Stored Energy
 * OPEN CHALKBOARD DESIGN WITH CONNECTED BATTERY ANALYSIS (NO CONTAINER BOXES):
 *  - Dielectric K = 4 inserted while battery remains CONNECTED
 *  - Voltage V = V₀ (Constant!)
 *  - Capacitance C = 4 C₀
 *  - Charge Q = 4 Q₀ (Battery pumps ΔQ = 3 Q₀ extra charge)
 *  - Energy U = 4 U₀ (ΔU = 3 U₀)
 *  - Battery Work W_battery = ΔQ V₀ = 3 Q₀ V₀ = 6 U₀
 *  - Zero card box containers
 */

import React from "react";
import { G, Line, Path } from 'react-native-svg';
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

export default function P12Ch02Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("JEE Main: Dielectric with Battery Still Connected (Energy & Charge Pumped)", "JEE Main: Dielectric with Battery Still Connected (Energy & Charge Pumped)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: CONNECTED BATTERY SCHEMATIC */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DIELECTRIC (K = 4) INSERTION (BATTERY CONNECTED)", "DIELECTRIC (K = 4) INSERTION (BATTERY CONNECTED)")}
          </T>
        </Fade>

        {/* Battery & Capacitor Diagram */}
        <Fade on={beat >= 1}>
          <Line x1="45" y1="80" x2="380" y2="80" stroke={RED} strokeWidth={4} />
          <T x={395} y={84} size={13} fill={RED} weight={800} anchor="start">+4 Q₀ Charge</T>

          <Line x1="45" y1="200" x2="380" y2="200" stroke={GREEN} strokeWidth={4} />
          <T x={395} y={204} size={13} fill={GREEN} weight={800} anchor="start">−4 Q₀ Charge</T>

          {/* Battery V0 Connection */}
          <Line x1="215" y1="200" x2="215" y2="238" stroke={INK} strokeWidth={1.8} />
          <T x={215} y={252} size={13} fill={AMBER_DARK} weight={900} anchor="middle">Battery V = V₀ (Fixed)</T>

          {/* Charge Pumping Arrow from battery */}
          <Path d={arrowD(160, 240, 160, 95)} stroke={GREEN} strokeWidth={3} />
          <T x={145} y={160} size={12} fill={GREEN} weight={900} anchor="end">Extra ΔQ = 3 Q₀ Pumped!</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            Fixed Voltage V = V₀  ⇒  New Charge Q = 4 Q₀  (4× Increase!)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: BATTERY WORK VS CAPACITOR STORED ENERGY */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("BATTERY WORK ACCOUNTING (W_battery = 6 U₀)", "BATTERY WORK ACCOUNTING (W_battery = 6 U₀)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Initial Energy U₀ = ½ C₀ V₀²
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Final Energy U = ½ (4 C₀) V₀² = 4 U₀  (ΔU = + 3 U₀)
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Battery Work W_batt = ΔQ V₀ = (3 Q₀) V₀ = 6 U₀
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. W_batt (6 U₀) = ΔU (3 U₀) + W_mech (3 U₀)
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (50% work → stored energy, 50% → mechanical work pulling slab)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("JEE MAIN CONNECTED BATTERY SUMMARY", "JEE MAIN CONNECTED BATTERY SUMMARY")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Battery Connected → V = V₀ constant, C = KC₀, Q = KQ₀, U = KU₀, E = E₀ constant!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Always use U = ½ C V² when battery remains connected!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ JEE Main Mastered: Battery Connected -> V & E constant, Q & U increase by factor K (W_battery = 2 ΔU)! ✓",
            "★ JEE Main Mastered: Battery Connected -> V & E constant, Q & U increase by factor K (W_battery = 2 ΔU)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

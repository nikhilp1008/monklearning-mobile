/**
 * P12Ch02 · Section 33 — "Deriving the energy stored in a capacitor"
 * Subtopic: Capacitance Derivations
 * OPEN CHALKBOARD DESIGN WITH INTEGRAL CHARGING WORK PROOF (NO CONTAINER BOXES):
 *  - Charging process: Transferring charge dq from one plate to another at instant potential v = q / C
 *  - Differential work: dW = v dq = (q / C) dq
 *  - Calculus integration: U = ∫₀^Q (q / C) dq = Q² / (2C) = ½ C V²
 *  - Zero card box containers
 */

import React from "react";
import { Circle, G, Line, Path } from 'react-native-svg';
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

export default function P12Ch02Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Charge transfer animation
  const chargePos = Math.min(1, currentTime * 0.32);
  const dqY = 240 - chargePos * 140;

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Derivation: Capacitor Stored Energy U = ½ C V² = Q² / (2C) via Integral Work", "Derivation: Capacitor Stored Energy U = ½ C V² = Q² / (2C) via Integral Work")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: CHARGE TRANSFER SCHEMATIC */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("TRANSFERRING dq AT INSTANT POTENTIAL v = q / C", "TRANSFERRING dq AT INSTANT POTENTIAL v = q / C")}
          </T>
        </Fade>

        {/* Plates and charge transfer */}
        <Fade on={beat >= 1}>
          {/* Top Plate +q */}
          <Line x1="45" y1="80" x2="380" y2="80" stroke={RED} strokeWidth={4} />
          <T x={395} y={84} size={13} fill={RED} weight={900} anchor="start">+q Instant</T>

          {/* Bottom Plate -q */}
          <Line x1="45" y1="230" x2="380" y2="230" stroke={GREEN} strokeWidth={4} />
          <T x={395} y={234} size={13} fill={GREEN} weight={900} anchor="start">−q Instant</T>

          {/* Transferring dq charge element */}
          <Circle cx={215} cy={220 - Math.min(1, currentTime * 0.32) * 120} r={8} fill={AMBER_DARK} />
          <T x={215} y={220 - Math.min(1, currentTime * 0.32) * 120 - 10} size={11} fill={AMBER_DARK} weight={900} anchor="middle">+dq</T>

          {/* Transfer Arrow */}
          <Path d={arrowD(215, 215, 215, 95)} stroke={AMBER_DARK} strokeWidth={2} strokeDasharray="4 4" />
          <T x={230} y={155} size={13} fill={AMBER_DARK} weight={800} anchor="start">Work dW = v dq</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            Instant Potential: v(q) = q / C  (Increases linearly with charge!)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CALCULUS PROOF STEPS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP-BY-STEP INTEGRAL DERIVATION", "STEP-BY-STEP INTEGRAL DERIVATION")}
          </T>
        </Fade>

        {/* Floating Calculus Equations */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={INK} weight={800} anchor="start">
            1. dW = v dq = (q / C) dq
          </T>

          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. U = ∫₀^Q (q / C) dq = (1 / C) [ q² / 2 ]₀^Q
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. U = Q² / (2C)
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Substitute Q = C V  ⇒  U = ½ C V² = ½ Q V
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Matches area under linear v-q graph = ½ Base × Height)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("BATTERY ENERGY LOSS RECAP", "BATTERY ENERGY LOSS RECAP")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Battery supplies energy W_battery = Q V = C V², BUT capacitor only stores U = ½ C V²!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Exactly 50% of total energy supplied by battery is dissipated as heat in connecting wires!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Proof Completed: U = ∫ (q / C) dq = Q² / (2C) = ½ C V² (50% battery energy stored, 50% lost to heat)! ✓",
            "★ Proof Completed: U = ∫ (q / C) dq = Q² / (2C) = ½ C V² (50% battery energy stored, 50% lost to heat)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

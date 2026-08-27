/**
 * P12Ch06 · Section 64 — "Master revision: the 12 core formulas of Electromagnetic Induction"
 * Subtopic: Advanced EMI, Maxwell & Chapter Synthesis
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD,
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

export default function P12Ch06Sec64({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Master Revision: The 12 Essential Formulas of EMI", "Master Revision: The 12 Essential Formulas of EMI")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: FORMULAS 1 - 6: FLUX, FARADAY, MOTIONAL & ROTATING EMF */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FORMULAS 1 - 6: FLUX, FARADAY, MOTIONAL & ROTATING EMF", "FORMULAS 1 - 6: FLUX, FARADAY, MOTIONAL & ROTATING EMF")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Magnetic Flux: Φ_B = B · A = B A cos θ.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Faraday-Lenz Law: ε = -N (dΦ_B / dt), Induced Charge ΔQ = N ΔΦ_B / R.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Linear Motional EMF: ε = B l v, Dissipated Power P = B² l² v² / R.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Rotational EMF: Sliding rod rotation ε_rot = ½ B ω L²!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Formulas 1-6 cover basic flux, induction, and mechanical motion)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: FORMULAS 7 - 12: INDUCTANCE, ENERGY & GENERATORS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FORMULAS 7 - 12: INDUCTANCE, ENERGY & GENERATORS", "FORMULAS 7 - 12: INDUCTANCE, ENERGY & GENERATORS")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Solenoid Inductance: L = μ_0 n² A l = μ_0 N² A / l.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Mutual Inductance: M = μ_0 N₁ N₂ A_inner / l, M = k √(L₁ L₂).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Field Energy & Density: U_B = ½ L I², Energy Density u_B = B² / (2 μ_0).
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Generator & Maxwell: Peak ε_0 = NBAω, I_d = ε_0 (dΦ_E / dt)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Formulas 7-12 cover inductance, field energy, AC generators, and Maxwell)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CHAPTER 6 COMPLETE FORMULA MASTER SHIELD", "CHAPTER 6 COMPLETE FORMULA MASTER SHIELD")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            12 Core Formulas: 1. Φ=BAcosθ → 2. ε=-NdΦ/dt → 3. ΔQ=NΔΦ/R → 4. ε=Blv → 5. P=B²l²v²/R → 6. ε_rot=½BωL².
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            7. L=μ₀N²A/l → 8. M=μ₀N₁N₂A/l → 9. U_B=½LI² → 10. u_B=B²/(2μ₀) → 11. ε₀=NBAω → 12. I_d=ε₀(dΦ_E/dt).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Master Revision Complete: All 12 fundamental equations of Electromagnetic Induction summarized for quick review! ✓",
            "★ Master Revision Complete: All 12 fundamental equations of Electromagnetic Induction summarized for quick review! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

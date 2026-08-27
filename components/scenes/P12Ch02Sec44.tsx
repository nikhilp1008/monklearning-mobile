/**
 * P12Ch02 · Section 44 — "Deriving that the field inside vanishes and charge goes to the surface"
 * Subtopic: Conductors & Spherical Capacitors Derivations
 * OPEN CHALKBOARD DESIGN WITH GAUSSIAN PROOF (NO CONTAINER BOXES):
 *  - Gaussian surface S inside conductor volume
 *  - Electrostatic condition: E = 0 inside conductor
 *  - Flux Φ = ∮ E · dA = 0  =>  Q_enclosed = 0
 *  - Conclusion: Charge cannot exist in interior volume; all excess charge is forced to the outer surface!
 */

import React from "react";
import { G, Path } from 'react-native-svg';
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

export default function P12Ch02Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Derivation: Why Excess Charge Resides 100% on Conductor Outer Surface", "Derivation: Why Excess Charge Resides 100% on Conductor Outer Surface")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: GAUSSIAN SURFACE INSIDE CONDUCTOR */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("GAUSSIAN SURFACE INSIDE CONDUCTOR MATERIAL", "GAUSSIAN SURFACE INSIDE CONDUCTOR MATERIAL")}
          </T>
        </Fade>

        {/* Conductor & Gaussian Surface (Open Chalkboard) */}
        <Fade on={beat >= 1}>
          {/* Conductor Body */}
          <Path d="M 100 160 C 100 90, 260 70, 330 120 C 380 160, 350 230, 240 230 C 150 230, 100 200, 100 160 Z"
            fill="none" stroke={AMBER_DARK} strokeWidth={1.8} strokeDasharray="6 4" />
          <T x={345} y={95} size={13} fill={AMBER_DARK} weight={800}>Outer Surface</T>

          {/* Interior Gaussian Surface S */}
          <Path d="M 130 160 C 130 110, 240 100, 300 135 C 330 160, 310 205, 230 205 C 160 205, 130 190, 130 160 Z"
            stroke={RED} strokeWidth={1.8} strokeDasharray="4 4" fill="none" />
          <T x={220} y={160} size={13} fill={RED} weight={900} anchor="middle">Gaussian Surface S (E = 0)</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            Since E = 0 everywhere on S, Flux Φ_E = ∮ E · dA = 0 !
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CALCULUS PROOF STEPS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("GAUSS LAW CALCULUS PROOF", "GAUSS LAW CALCULUS PROOF")}
          </T>
        </Fade>

        {/* Floating Derivation Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={INK} weight={800} anchor="start">
            1. Gauss's Law: ∮_S E · dA = Q_enclosed / ε₀
          </T>

          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. Substitute E = 0 inside: 0 = Q_enclosed / ε₀
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Q_enclosed = 0 inside ANY interior volume!
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. All excess charge Q is pushed to outer boundary!
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Mutual electrostatic repulsion forces like charges apart)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DERIVATION VERDICT", "DERIVATION VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Interior charge density ρ = 0 for any conductor in static equilibrium!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Charges sit exclusively in a thin surface layer ~1 atomic thickness!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Proof Completed: Gauss's Law ∮ E·dA = Q_enclosed/ε₀ = 0 proves 100% of charge resides on outer surface! ✓",
            "★ Proof Completed: Gauss's Law ∮ E·dA = Q_enclosed/ε₀ = 0 proves 100% of charge resides on outer surface! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

/**
 * P12Ch02 · Section 32 — "Deriving the parallel plate capacitance formula"
 * Subtopic: Capacitance Derivations
 * OPEN CHALKBOARD DESIGN WITH GAUSSIAN PILLBOX DERIVATION (NO CONTAINER BOXES):
 *  - Parallel plates of area A and separation d
 *  - Surface charge density σ = Q / A
 *  - Electric field via Gauss Law: E = σ / ε₀ = Q / (ε₀ A)
 *  - Potential difference V = E d = Q d / (ε₀ A)
 *  - Result: C = Q / V = ε₀ A / d
 */

import React from "react";
import { G, Line, Path, Rect } from 'react-native-svg';
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

export default function P12Ch02Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Derivation: Parallel Plate Capacitance C = ε₀ A / d via Gauss's Law", "Derivation: Parallel Plate Capacitance C = ε₀ A / d via Gauss's Law")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: GAUSSIAN PILLBOX DIAGRAM */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PARALLEL PLATES AND GAUSSIAN SURFACE", "PARALLEL PLATES AND GAUSSIAN SURFACE")}
          </T>
        </Fade>

        {/* Plate Diagram */}
        <Fade on={beat >= 1}>
          {/* Top Plate +Q */}
          <Line x1="45" y1="80" x2="380" y2="80" stroke={RED} strokeWidth={4} />
          <T x={395} y={84} size={13} fill={RED} weight={900} anchor="start">+Q (σ = Q / A)</T>

          {/* Bottom Plate -Q */}
          <Line x1="45" y1="230" x2="380" y2="230" stroke={GREEN} strokeWidth={4} />
          <T x={395} y={234} size={13} fill={GREEN} weight={900} anchor="start">−Q (σ = −Q / A)</T>

          {/* Gaussian Pillbox */}
          <Rect x="180" y="65" width="80" height="115" stroke={AMBER_DARK} strokeWidth={1.8} strokeDasharray="4 4" fill="none" />
          <T x={220} y={55} size={12} fill={AMBER_DARK} weight={800} anchor="middle">Pillbox</T>

          {/* Field Vector E */}
          <Path d={arrowD(220, 85, 220, 225)} stroke={AMBER_DARK} strokeWidth={3} />
          <T x={235} y={155} size={15} fill={AMBER_DARK} weight={900}>E</T>

          <Line x1="30" y1="80" x2="30" y2="230" stroke={INK} strokeWidth={2} strokeDasharray="3 3" />
          <T x={20} y={155} size={13} fill={INK} weight={800} anchor="end">Gap d</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            Gauss Law: ∮ E · dA = Q_enc / ε₀  ⇒  E A_box = σ A_box / ε₀
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CALCULUS PROOF STEPS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP-BY-STEP PROOF", "STEP-BY-STEP PROOF")}
          </T>
        </Fade>

        {/* Floating Derivation Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={INK} weight={800} anchor="start">
            1. Surface Charge Density: σ = Q / A
          </T>

          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. Electric Field: E = σ / ε₀ = Q / (ε₀ A)
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Potential Difference: V = E d = Q d / (ε₀ A)
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Capacitance C = Q / V = ε₀ A / d  (Q.E.D.)
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Fringe field effects ignored assuming plate size &gt;&gt; gap d)
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
            C = ε₀ A / d proves capacitance is 100% determined by geometrical area A and gap d!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Independent of charge Q and potential V!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Proof Completed: C = Q / V = ε₀ A / d derived rigorously from Gauss's Law and V = E d! ✓",
            "★ Proof Completed: C = Q / V = ε₀ A / d derived rigorously from Gauss's Law and V = E d! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

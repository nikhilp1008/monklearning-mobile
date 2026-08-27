/**
 * P12Ch02 · Section 28 — "The dielectric — why an insulator boosts capacitance"
 * Subtopic: Capacitance, Dielectrics & Stored Energy
 * OPEN CHALKBOARD DESIGN WITH POLARIZED DIELECTRIC SLAB (NO CONTAINER BOXES):
 *  - Parallel plate capacitor with dielectric slab of constant K inserted
 *  - Atomic Dipole Polarization: Induced bound surface charges ±Q_p
 *  - Induced opposing field E_p reduces net internal field E = E₀ - E_p = E₀ / K
 *  - Potential drop V = V₀ / K  =>  Capacitance boost C = K C₀ !
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

export default function P12Ch02Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("The Dielectric: Polarization Boosts Capacitance to C = K C₀", "The Dielectric: Polarization Boosts Capacitance to C = K C₀")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: DIELECTRIC POLARIZATION SCHEMATIC */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("POLARIZATION OF DIELECTRIC MEDIUM", "POLARIZATION OF DIELECTRIC MEDIUM")}
          </T>
        </Fade>

        {/* Dielectric Slab Diagram */}
        <Fade on={beat >= 1}>
          {/* Top Free Charge Plate +Q */}
          <Line x1="45" y1="80" x2="380" y2="80" stroke={RED} strokeWidth={4} />
          <T x={395} y={84} size={14} fill={RED} weight={900} anchor="start">+Q Free</T>

          {/* Bottom Free Charge Plate -Q */}
          <Line x1="45" y1="230" x2="380" y2="230" stroke={GREEN} strokeWidth={4} />
          <T x={395} y={234} size={14} fill={GREEN} weight={900} anchor="start">−Q Free</T>

          {/* Dielectric Slab Outline (Open Chalkboard, No backdrop rect) */}
          <Rect x="60" y="95" width="310" height="120" fill="none" stroke={AMBER_DARK} strokeWidth={1.8} strokeDasharray="6 4" />
          <T x={215} y={160} size={15} fill={AMBER_DARK} weight={900} anchor="middle">Dielectric Slab (K &gt; 1)</T>

          {/* Bound Surface Charges -Qp (Top of slab), +Qp (Bottom of slab) */}
          <T x={215} y={112} size={12} fill={GREEN} weight={800} anchor="middle">− Bound Surface Charge −Q_p</T>
          <T x={215} y={205} size={12} fill={RED} weight={800} anchor="middle">+ Bound Surface Charge +Q_p</T>

          {/* External Field E0 and Internal Field Ep */}
          <Path d={arrowD(85, 85, 85, 225)} stroke={RED} strokeWidth={2.5} />
          <T x={75} y={160} size={13} fill={RED} weight={800} anchor="end">E₀</T>

          <Path d={arrowD(345, 210, 345, 100)} stroke={GREEN} strokeWidth={2} />
          <T x={358} y={160} size={13} fill={GREEN} weight={800} anchor="start">E_p</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            Net Internal Field E = E₀ − E_p = E₀ / K
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: VOLTAGE REDUCTION & CAPACITANCE MULTIPLICATION */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("VOLTAGE REDUCTION & CAPACITANCE BOOST", "VOLTAGE REDUCTION & CAPACITANCE BOOST")}
          </T>
        </Fade>

        {/* Floating Proof Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Net Electric Field: E = E₀ / K
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Potential Difference: V = E d = (E₀ d) / K = V₀ / K
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. New Capacitance: C = Q / V = Q / (V₀ / K)
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. C = K C₀ = K (ε₀ A / d)
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Dielectric Constant K = ε_r = C / C₀ &gt; 1)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SUMMARY OF DIELECTRIC EFFECTS", "SUMMARY OF DIELECTRIC EFFECTS")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Bound Surface Charge: Q_p = Q (1 − 1/K)   |   Polarization Vector P = ε₀ (K − 1) E!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Dielectrics increase capacitance WITHOUT electrical breakdown!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Dielectric Mastered: C = K C₀ because induced polarization weakens internal field to E = E₀/K! ✓",
            "★ Dielectric Mastered: C = K C₀ because induced polarization weakens internal field to E = E₀/K! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

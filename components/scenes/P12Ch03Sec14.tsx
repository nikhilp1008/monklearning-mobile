/**
 * P12Ch02 · Section 14 — "Worked example: the stretched-wire trap"
 * Beats (en [0,8,19,28,40,47,57,68]): 8 beats
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

export default function P12Ch03Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("NEET Speed Trap: The Stretched Wire", "NEET Speed Trap: The Stretched Wire")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: STRETCH TRAP & MISCONCEPTION */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STRETCH TRAP & COMMON MISCONCEPTION", "STRETCH TRAP & COMMON MISCONCEPTION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={RED} weight={800} anchor="start">
            1. Common Student Trap: Assuming R ∝ L and saying R' = 1.5 R (WRONG!)
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Why Wrong: Stretching a wire by 50% also thins its cross-section area A.
          </T>

          <T x={45} y={170} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            3. Volume Conservation: Vol = A × L = constant  ⇒  A' = A / 1.5.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Double Effect: Length increases by 1.5x AND area shrinks by 1.5x!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Always account for area reduction when stretching physical wires)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CORRECT DERIVATION & STRETCH LAW */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CORRECT DERIVATION & STRETCH LAW", "CORRECT DERIVATION & STRETCH LAW")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Volume Formula: R = (ρ L) / A = ρ L² / (A L) = ρ L² / Vol
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Proportionality: For constant volume, R ∝ L² !
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. New Resistance: R' = (1.5)² R = 2.25 R (125% increase).
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Resistivity Invariance: ρ remains 100% UNCHANGED!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Resistivity ρ is a material property; stretching changes R, not ρ)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STRETCH LAW VERDICT", "STRETCH LAW VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Stretching wire n times increases resistance by n² times (R' = n² R) due to volume conservation.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Resistivity ρ remains completely unchanged because material identity and temperature are unaffected.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Stretch Rule: R ∝ L² (Constant Volume). R' = 2.25 R, but ρ stays constant! ✓",
            "★ Stretch Rule: R ∝ L² (Constant Volume). R' = 2.25 R, but ρ stays constant! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

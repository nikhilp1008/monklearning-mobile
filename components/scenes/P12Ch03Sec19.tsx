/**
 * P12Ch02 · Section 19 — "Why metals and semiconductors respond oppositely"
 * Beats (en [0,10,20,31,41,49,61,74]): 8 beats
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

export default function P12Ch03Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Metals vs Semiconductors: Opposite Temperature Response", "Metals vs Semiconductors: Opposite Temperature Response")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: METALS POSITIVE TEMP COEFFICIENT */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("METALS: POSITIVE TEMPERATURE COEFFICIENT (α > 0)", "METALS: POSITIVE TEMPERATURE COEFFICIENT (α > 0)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Carrier Density n: Fully saturated; remains fixed with temperature.
          </T>

          <T x={45} y={125} size={14} fill={RED} weight={800} anchor="start">
            2. Lattice Vibration: Heating increases lattice ionic amplitude.
          </T>

          <T x={45} y={170} size={14} fill={INK} weight={800} anchor="start">
            3. Relaxation Time: Collisions multiply, causing τ to drop.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Result: ρ = m / (n e² τ) INCREASES with temperature!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Metal resistivity rises linearly near room temperature)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: SEMICONDUCTORS NEGATIVE COEFFICIENT */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SEMICONDUCTORS: NEGATIVE COEFFICIENT (α < 0)", "SEMICONDUCTORS: NEGATIVE COEFFICIENT (α < 0)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Thermal Excitation: Heating breaks covalent bonds, liberating e⁻ & holes.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Carrier Explosion: Carrier density n rises exponentially: n(T) ∝ e^(-Eg/2kT).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Overpowering Effect: Surge in n vastly dominates small drop in τ.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Result: ρ DECREASES exponentially with temperature!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Semiconductors become far more conductive when heated)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ALLOYS (MANGANIN & CONSTANTAN) VERDICT", "ALLOYS (MANGANIN & CONSTANTAN) VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Alloys have strong lattice disorder, making τ small and insensitive to temperature changes (α ≈ 0).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            High resistivity with near-zero temperature coefficient makes alloys perfect for precision standard resistors.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Metals: ρ increases (α>0). Semiconductors: ρ decreases (α<0). Alloys: α ≈ 0! ✓",
            "★ Metals: ρ increases (α>0). Semiconductors: ρ decreases (α<0). Alloys: α ≈ 0! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

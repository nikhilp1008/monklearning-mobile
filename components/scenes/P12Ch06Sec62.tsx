/**
 * P12Ch06 · Section 62 — "Integrated problem: motional emf meets self-inductance"
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

export default function P12Ch06Sec62({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Integrated Problem: Rod-on-Inductor SHM Oscillation ω = Bl / √(mL)", "Integrated Problem: Rod-on-Inductor SHM Oscillation ω = Bl / √(mL)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: STEP 1: L (dI/dt) = B l v ⇒ CURRENT I(x) = B l x / L */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 1: L (dI/dt) = B l v ⇒ CURRENT I(x) = B l x / L", "STEP 1: L (dI/dt) = B l v ⇒ CURRENT I(x) = B l x / L")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Motional EMF: Induced voltage ε = B l v = B l (dx/dt).
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Inductor Circuit Loop: L (dI/dt) = ε = B l (dx/dt).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Integrate with t: Integrate both sides: L ∫ dI = B l ∫ dx.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Position Current: I(x) = (B l / L) x!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Current in inductor is directly proportional to displacement x)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: STEP 2: F_restoring = − (B² l² / L) x ⇒ SHM ω = B l / √(m L) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 2: F_restoring = − (B² l² / L) x ⇒ SHM ω = B l / √(m L)", "STEP 2: F_restoring = − (B² l² / L) x ⇒ SHM ω = B l / √(m L)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Magnetic Force: F_mag = I l B = [ (B l / L) x ] l B = (B² l² / L) x.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Direction: Force opposes motion (restoring force F = -k_eff x).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Effective Spring Constant: k_eff = B² l² / L.
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. SHM Frequency: ω_SHM = √(k_eff / m) = B l / √(m L)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (SHM period T = 2π / ω_SHM = 2π √(m L) / (B l))
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("JEE ADVANCED INTEGRATED RESULT", "JEE ADVANCED INTEGRATED RESULT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Energy Conservation: Kinetic energy of rod converts into magnetic energy of inductor ½ m v² + ½ L I² = Constant.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Maximum Displacement: x_max = v_0 / ω_SHM = v_0 √(m L) / (B l).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ JEE Advanced Result: Motional EMF rod connected across inductor undergoes SHM with frequency ω_SHM = B l / √(m L)! ✓",
            "★ JEE Advanced Result: Motional EMF rod connected across inductor undergoes SHM with frequency ω_SHM = B l / √(m L)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

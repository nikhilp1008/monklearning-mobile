/**
 * P12Ch02 · Section 8 — "Mobility, and Ohm's law in two forms"
 * Beats (en [0,8,19,29,41,48,59,71]): 8 beats
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

export default function P12Ch03Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Mobility, and Ohm's law in two forms", "Mobility, and Ohm's law in two forms")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: CHARGE CARRIER MOBILITY */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CHARGE CARRIER MOBILITY μ", "CHARGE CARRIER MOBILITY μ")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Mobility Definition: μ = |v_d| / E (Drift velocity per unit field)
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Microscopic Formula: μ = (e τ) / m (Inversely proportional to mass m)
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Hole vs Electron: Electrons are more mobile than holes (m_e* &lt; m_h*).
          </T>

          <Draw on={beat >= 2} delay={dl(2, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. SI Unit & Dimensions: m²/(V·s) with dimensions [M⁻¹ T² A]
          </T>
        </Fade>

        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Higher mobility means higher conductivity σ = n e μ)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: OHM'S LAW MACROSCOPIC VS MICROSCOPIC */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("OHM'S LAW: MACROSCOPIC VS MICROSCOPIC", "OHM'S LAW: MACROSCOPIC VS MICROSCOPIC")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Macroscopic Form: V = I R (Applies to entire conductor device)
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Microscopic Form: J = σ E or E = ρ J (Applies locally point-by-point)
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Equivalence: V = EL, I = JA  ⇒  V = (J/σ)L = I(L/σA) = IR!
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Field Representation: J = σ E is a true vector field relation!
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Microscopic form is valid even in non-uniform geometry conductors)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("TWO FORMS SUMMARY VERDICT", "TWO FORMS SUMMARY VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Macroscopic V = IR measures total circuit variables (Voltage V and Current I).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Microscopic J = σE describes local field vectors at every point inside the conductor.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Macroscopic V=IR describes total device; Microscopic J=σE holds point-by-point! ✓",
            "★ Macroscopic V=IR describes total device; Microscopic J=σE holds point-by-point! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

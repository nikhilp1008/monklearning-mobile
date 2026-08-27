/**
 * P12Ch02 · Section 7 — "Current, drift velocity and current density"
 * Beats (en [0,9,14,30,42,56,66,76]): 8 beats
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

export default function P12Ch03Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Current, drift velocity and current density", "Current, drift velocity and current density")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: MACROSCOPIC CURRENT FORMULA */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MACROSCOPIC CURRENT I = n e A v_d", "MACROSCOPIC CURRENT I = n e A v_d")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Master Relation: I = n e A v_d (Connects drift motion to current)
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Electron Density n: Free charge carriers per unit volume (e⁻ / m³).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Cross-Section A: Current per area is uniform in standard wires.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Key Result: I ∝ v_d for a given conductor!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Where e = 1.6 × 10⁻¹⁹ C is fundamental charge)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: MICROSCOPIC CURRENT DENSITY VECTOR */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MICROSCOPIC CURRENT DENSITY VECTOR J", "MICROSCOPIC CURRENT DENSITY VECTOR J")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Definition: J = I / A = n e v_d (Current per unit area)
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Vector Form: J = n e v_d = σ E (Points parallel to E field!)
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. SI Unit & Dimensions: A / m² with dimensions [L⁻² A].
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Microscopic Ohm's Law: J = σ E !
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Unlike scalar current I, current density J is a true vector field)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("EQUATION SUMMARY VERDICT", "EQUATION SUMMARY VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Macroscopic current I = n e A v_d links microscopic carrier dynamics to measurable circuit current.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Microscopic current density J = I/A = n e v_d = σ E forms the foundation of microscopic Ohm's law.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Master Equation: I = neAv_d  and  J = ne v_d = σE. J is a true vector! ✓",
            "★ Master Equation: I = neAv_d  and  J = ne v_d = σE. J is a true vector! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

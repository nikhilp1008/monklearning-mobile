/**
 * C11 Ch01 · Section 11 — "Density, volume and temperature relations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. (section_type: formulas — a reference sheet.)
 *
 * Beats (en [0,8.36,20.48,37.72,56.07,71.77,85.94,94.81,110.51]):
 *  0 anchor: collecting the quantitative relations in one place
 *  1 the master relation, boxed: quantity = numerical value × unit
 *  2 density formula (left): ρ = m/V, SI/lab units, dimensional formula
 *  3 volume conversion chain (right): 1 L = 1000 mL = 1000 cm³ = 10⁻³ m³
 *  4 density unit conversion (left): 1 g/cm³ = 1000 kg/m³
 *  5 weight formula (right): W = mg
 *  6 Celsius→Kelvin (left): K = °C + 273.15
 *  7 Fahrenheit note (right): °F → °C → K, no direct formula needed
 *  8 factor-label discipline (bottom banner)
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script14 ink)        | T mid | x540  y88
 *  b1 | box + master relation (16)   | Draw/T| x290..790 y105..140
 *  b2 | ρ=m/V (16 bold, left)        | T mid | x270  y175
 *  b2 | caption (12 muted)           | T mid | x270  y195
 *  b3 | volume chain (15 bold, right)| T mid | x810  y175
 *  b3 | caption (12 muted)           | T mid | x810  y195
 *  b4 | density conv (16 bold, left) | T mid | x270  y235
 *  b4 | caption (12 muted)           | T mid | x270  y255
 *  b5 | W=mg (16 bold, right)        | T mid | x810  y235
 *  b5 | caption (12 muted)           | T mid | x810  y255
 *  b6 | K=°C+273.15 (16 bold, left)  | T mid | x270  y295
 *  b7 | F note (14, right)           | T mid | x810  y295
 *  b8 | factor-label banner (14)     | T mid | x540  y350
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={22} fill={RED} script>
          {t("density, volume and temperature relations", "density, volume aur temperature relations")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={14} fill={INK} script>
          {t(
            "collecting the quantitative relations of this subtopic — every one shows up in numericals",
            "is subtopic ke quantitative relations ek jagah — har ek numericals mein aata hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the master relation, boxed */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M 306 105 h 468 q 16 0 16 16 v 3 q 0 16 -16 16 h -468 q -16 0 -16 -16 v -3 q 0 -16 16 -16"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={131} size={16} fill={INK} weight={700} script={false}>
          quantity = numerical value × unit
        </T>
      </Fade>

      {/* beat 2 — density formula (left) */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={270} y={175} size={16} fill={INK} weight={700} script={false}>
          ρ = m / V
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={270} y={195} size={12} fill={MUTED} script>
          SI: kg/m³ · lab: g/cm³ · dim: [M L⁻³]
        </T>
      </Fade>

      {/* beat 3 — volume conversion chain (right) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={810} y={175} size={14} fill={INK} weight={700} script={false}>
          1 L = 1000 mL = 1000 cm³ = 10⁻³ m³
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={810} y={195} size={12} fill={MUTED} script>
          ⇒ 1 m³ = 10⁶ cm³
        </T>
      </Fade>

      {/* beat 4 — density unit conversion (left) */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={270} y={235} size={16} fill={INK} weight={700} script={false}>
          1 g/cm³ = 1000 kg/m³
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={270} y={255} size={12} fill={MUTED} script>
          {t("lab → SI: always ×1000", "lab → SI: hamesha ×1000")}
        </T>
      </Fade>

      {/* beat 5 — weight formula (right) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={810} y={235} size={16} fill={INK} weight={700} script={false}>
          W = m × g
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={810} y={255} size={12} fill={MUTED} script>
          {t("N · kg · g≈9.8 m/s² — mass fixed, weight varies", "N · kg · g≈9.8 m/s² — mass fixed, weight badalta")}
        </T>
      </Fade>

      {/* beat 6 — Celsius to Kelvin (left) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={270} y={295} size={16} fill={INK} weight={700} script={false}>
          K = °C + 273.15
        </T>
      </Fade>

      {/* beat 7 — Fahrenheit note (right) */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={810} y={295} size={14} fill={INK} script>
          {t("°F → °C → K (no direct °F→K formula needed)", "°F → °C → K (seedha °F→K formula nahi chahiye)")}
        </T>
      </Fade>

      {/* beat 8 — factor-label: a discipline, not a formula */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={540} y={350} size={14} fill={AMBER_DARK} script>
          {t(
            "factor-label: multiply by conversion factors so unwanted units cancel",
            "factor-label: conversion factors se gunao taaki anchahi units cancel ho jaye"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

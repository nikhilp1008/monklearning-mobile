/**
 * C11 Ch07 · Section 26 — "Electrochemical-cell formulas: EMF, free energy, equilibrium, Nernst"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 * section_type: formulas — reference sheet, everything accumulates.
 *
 * Beats (en [0, 6.83, 19.2, 27.99, 45.23, 57.6, 73.05, 87.72]):
 *  0 heading: the four cell equations
 *  1 E°cell = E°cathode − E°anode (both as reduction potentials)
 *  2 cell notation: anode | anode soln ‖ cathode soln | cathode
 *  3 ΔG° = −nFE°cell, F = 96500 C/mol
 *  4 log K = nE°cell / 0.0591 (298K)
 *  5 Ecell = E°cell − (0.0591/n) log Q (Nernst, 298K)
 *  6 red-margin: n = e⁻ in BALANCED cell rxn — Zn+2Ag⁺, n=2 even though Ag half shows 1e⁻
 *  7 units: E in volts; F in C/mol; Q,K dimensionless
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b1..b5 | formulas (sans17)   | T mid | x540 bl134/168/202/236/270
 *  b6 | margin bar x64 y300..336, text (sans15 red) x80 bl318
 *  b7 | units note (sans15)     | T mid | x540 bl370
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("n counts electrons in the whole cell, not one half", "n poore cell ke electrons ginta hai, ek half nahi")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("the four cell equations", "cell ki chaar equations")}
        </T>
      </Fade>

      {/* ===== beat 1 — E°cell ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={134} size={17} fill={INK} weight={700}>
          E°cell = E°cathode − E°anode
        </T>
      </Fade>

      {/* ===== beat 2 — cell notation ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={168} size={16} fill={INK}>
          anode | anode soln ‖ cathode soln | cathode
        </T>
      </Fade>

      {/* ===== beat 3 — free energy ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={202} size={17} fill={INK} weight={700}>
          ΔG° = −nFE°cell    ·    F = 96500 C mol⁻¹
        </T>
      </Fade>

      {/* ===== beat 4 — equilibrium constant ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={236} size={17} fill={INK} weight={700}>
          log K = n E°cell / 0.0591    (298 K)
        </T>
      </Fade>

      {/* ===== beat 5 — Nernst equation ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={270} size={17} fill={INK} weight={700}>
          Ecell = E°cell − (0.0591 / n) log Q    (Nernst, 298 K)
        </T>
      </Fade>

      {/* ===== beat 6 — n warning ===== */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 64 300 L 64 336" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={80} y={318} size={15} fill={RED} weight={700} anchor="start">
          {t(
            "n = e⁻ in the BALANCED cell rxn — Zn+2Ag⁺: n=2, even though Ag half shows 1e⁻",
            "n = BALANCED cell rxn ke e⁻ — Zn+2Ag⁺: n=2, Ag half mein 1e⁻ dikhe tab bhi"
          )}
        </T>
      </Fade>

      {/* ===== beat 7 — units ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={370} size={15} fill={MUTED}>
          {t("units: E in volts   ·   F in C mol⁻¹   ·   Q and K dimensionless", "units: E volts mein   ·   F C mol⁻¹ mein   ·   Q aur K dimensionless")}
        </T>
      </Fade>
    </Scene>
  );
}

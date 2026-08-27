/**
 * C11 Ch07 · Section 40 — Worked example (JEE Main): classify Cl₂ + NaOH and its reverse
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 13.74, 23.13, 34.22, 46.76, 64.68, 74.67, 87.13]):
 *  0 heading: classify and prove with oxidation numbers
 *  1 3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O (hot, conc.)
 *  2 Cl: 0 in Cl₂ · −1 in NaCl · +5 in NaClO₃
 *  3 red-margin: same element starts 0, ends −1 AND +5 → DISPROPORTIONATION
 *  4 electron check: 5Cl gain 5e⁻ · 1Cl loses 5e⁻ — balanced
 *  5 comproportionation = the reverse — 2 states converge back to 0
 *  6 5Cl⁻ + ClO₃⁻ + 6H⁺ → 3Cl₂ + 3H₂O
 *  7 answer (green): disproportionation; reverse is its comproportionation
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b1 | eqn (sans16)        | T mid | x540 bl134
 *  b2 | line (sans15)       | T mid | x540 bl168
 *  b3 | margin bar x64 y192..226, text (sans15 red) x80 bl210
 *  b4 | line (sans15)       | T mid | x540 bl260
 *  b5 | line (sans15)       | T mid | x540 bl294
 *  b6 | eqn (sans16)        | T mid | x540 bl328
 *  b7 | answer (sans16 700 grn) | T mid | x540 bl362
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
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("the fingerprint: one element, one O.N., two directions", "fingerprint: ek element, ek O.N., do directions")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={17} fill={INK} weight={700}>
          {t("classify and prove with oxidation numbers", "classify karo aur oxidation numbers se prove karo")}
        </T>
      </Fade>

      {/* ===== beat 1 — reaction ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={134} size={16} fill={INK} weight={700}>
          3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O   ({t("hot, conc.", "hot, conc.")})
        </T>
      </Fade>

      {/* ===== beat 2 — O.N. assignment ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={168} size={15} fill={INK}>
          Cl: 0 {t("in", "mein")} Cl₂   ·   −1 {t("in", "mein")} NaCl   ·   +5 {t("in", "mein")} NaClO₃
        </T>
      </Fade>

      {/* ===== beat 3 — the fingerprint ===== */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 64 192 L 64 226" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={80} y={210} size={15} fill={RED} weight={700} anchor="start">
          {t(
            "same element (Cl): starts 0, ends −1 AND +5 → DISPROPORTIONATION",
            "same element (Cl): 0 se shuru, −1 AND +5 pe khatam → DISPROPORTIONATION"
          )}
        </T>
      </Fade>

      {/* ===== beat 4 — electron check ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={260} size={15} fill={INK}>
          {t(
            "electron check: 5 Cl (0→−1, gain 5e⁻)  ·  1 Cl (0→+5, lose 5e⁻) — balanced ✓",
            "electron check: 5 Cl (0→−1, 5e⁻ gain)  ·  1 Cl (0→+5, 5e⁻ loss) — balanced ✓"
          )}
        </T>
      </Fade>

      {/* ===== beat 5 — the reverse ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={294} size={15} fill={INK}>
          {t("comproportionation = the reverse — 2 states converge back to 0", "comproportionation = ulta — 2 states wapas 0 pe converge")}
        </T>
      </Fade>

      {/* ===== beat 6 — reverse equation ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={328} size={16} fill={INK} weight={700}>
          5Cl⁻ + ClO₃⁻ + 6H⁺ → 3Cl₂ + 3H₂O
        </T>
      </Fade>

      {/* ===== beat 7 — answer ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={362} size={16} fill={GREEN} weight={700}>
          {t("disproportionation; the reverse reaction is its comproportionation", "disproportionation; reverse reaction uska comproportionation hai")}
        </T>
      </Fade>
    </Scene>
  );
}

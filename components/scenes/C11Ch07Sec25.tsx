/**
 * C11 Ch07 · Section 25 — "Titration formulas & the n-factor reference table"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 * section_type: formulas — reference sheet, everything accumulates.
 *
 * Beats (en [0, 7.25, 20.22, 33.71, 44.29, 56.92, 71.51, 81.83]):
 *  0 heading: redox titration — the working equations
 *  1 n-factor = Δ O.N. per atom × number of such atoms
 *  2 Equivalents = moles × n ; N = M × n
 *  3 meq = N×V(mL) = M×n×V(mL)
 *  4 red-margin: endpoint eq_ox=eq_red ⇒ M₁n₁V₁ = M₂n₂V₂
 *  5 n-factor table (acidic): MnO₄⁻=5, Cr₂O₇²⁻=6, C₂O₄²⁻=2, Fe²⁺=1
 *  6 red-margin: medium changes n — MnO₄⁻→MnO₂ (neutral) = only 3
 *  7 units: equivalents/n/K dimensionless — same volume unit
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b1 | formula (sans17)      | T mid | x540 bl134
 *  b2 | formula (sans17)      | T mid | x540 bl168
 *  b3 | formula (sans17)      | T mid | x540 bl202
 *  b4 | margin bar x64 y226..262, text (sans16 red) x80 bl244
 *  b5 | title (sans16 700) x540 bl290; 2×2 grid x64/560 y316/346
 *  b6 | margin bar x64 y372..406, text (sans16 red) x80 bl390
 *  b7 | units note (sans15)   | T mid | x540 bl430
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

export default function C11Ch07Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("n-factor: how many electrons per formula unit", "n-factor: formula unit ke peeche kitne electrons")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("redox titration — the working equations", "redox titration — working equations")}
        </T>
      </Fade>

      {/* ===== beat 1 — n-factor definition ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={134} size={17} fill={INK}>
          n-factor = (Δ O.N. {t("per atom", "per atom")}) × ({t("number of such atoms", "aise atoms ki ginti")})
        </T>
      </Fade>

      {/* ===== beat 2 — equivalents / normality ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={168} size={17} fill={INK}>
          {t("Equivalents = moles × n", "Equivalents = moles × n")}   ·   {t("Normality N = M × n", "Normality N = M × n")}
        </T>
      </Fade>

      {/* ===== beat 3 — meq ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={202} size={17} fill={INK}>
          meq = N × V(mL) = M × n × V(mL)
        </T>
      </Fade>

      {/* ===== beat 4 — endpoint condition ===== */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 64 226 L 64 262" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={80} y={244} size={16} fill={RED} weight={700} anchor="start">
          {t("endpoint: eq(ox) = eq(red)  ⇒  M₁n₁V₁ = M₂n₂V₂", "endpoint: eq(ox) = eq(red)  ⇒  M₁n₁V₁ = M₂n₂V₂")}
        </T>
      </Fade>

      {/* ===== beat 5 — n-factor table ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={290} size={16} fill={INK} weight={700}>
          {t("n-factors (acidic medium):", "n-factors (acidic medium):")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={64} y={316} size={16} fill={INK} anchor="start">
          MnO₄⁻ → Mn²⁺  :  n = 5
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={560} y={316} size={16} fill={INK} anchor="start">
          Cr₂O₇²⁻ → 2Cr³⁺  :  n = 6
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={64} y={346} size={16} fill={INK} anchor="start">
          C₂O₄²⁻ → 2CO₂  :  n = 2
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={560} y={346} size={16} fill={INK} anchor="start">
          Fe²⁺ → Fe³⁺  :  n = 1
        </T>
      </Fade>

      {/* ===== beat 6 — medium changes n ===== */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 64 372 L 64 406" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={80} y={390} size={16} fill={RED} weight={700} anchor="start">
          {t("medium changes n: MnO₄⁻ → MnO₂ (neutral) = only 3e⁻", "medium n badalta hai: MnO₄⁻ → MnO₂ (neutral) = sirf 3e⁻")}
        </T>
      </Fade>

      {/* ===== beat 7 — units ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={430} size={15} fill={MUTED}>
          {t("equivalents, n and K are dimensionless — keep both volumes in the SAME unit", "equivalents, n aur K dimensionless — dono volumes SAME unit mein")}
        </T>
      </Fade>
    </Scene>
  );
}

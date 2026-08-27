/**
 * C11 Ch07 · Section 41 — Worked example (JEE Advanced): ammonium dichromate — intramolecular redox
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 11.61, 19.03, 33.79, 41.13, 48.64, 63.06, 75.43]):
 *  0 heading: classify precisely: decomposition, disproportionation, or rarer?
 *  1 (NH₄)₂Cr₂O₇ → N₂ + Cr₂O₃ + 4H₂O (Δ)
 *  2 reactant: N=−3, Cr=+6 · products: N(N₂)=0, Cr(Cr₂O₃)=+3
 *  3 N: −3→0 — oxidised (loses e⁻)
 *  4 Cr: +6→+3 — reduced (gains e⁻)
 *  5 red-margin: 2 DIFFERENT elements change oppositely → INTRAMOLECULAR REDOX (sub-class of decomposition)
 *  6 not disproportionation — needs ONE element splitting; N ≠ Cr
 *  7 answer (green): intramolecular (decomposition) redox
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b1 | eqn (sans16)       | T mid | x540 bl134
 *  b2 | line (sans14)      | T mid | x540 bl168
 *  b3 | line (sans15)      | T mid | x540 bl202
 *  b4 | line (sans15)      | T mid | x540 bl230
 *  b5 | margin bar x64 y254..296, 2 lines (sans14 red) x80 bl272/292
 *  b6 | line (sans15)      | T mid | x540 bl330
 *  b7 | answer (sans16 700 grn) | T mid | x540 bl364
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

export default function C11Ch07Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("two different elements, one compound, opposite fates", "do alag elements, ek compound, opposite fates")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={16} fill={INK} weight={700}>
          {t("classify precisely: decomposition, disproportionation, or rarer?", "precisely classify karo: decomposition, disproportionation, ya rarer?")}
        </T>
      </Fade>

      {/* ===== beat 1 — reaction ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={134} size={16} fill={INK} weight={700}>
          (NH₄)₂Cr₂O₇ → N₂ + Cr₂O₃ + 4H₂O   (Δ)
        </T>
      </Fade>

      {/* ===== beat 2 — O.N. assignment ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={168} size={14} fill={INK}>
          {t("reactant: N=−3, Cr=+6", "reactant: N=−3, Cr=+6")}   ·   {t("products: N(N₂)=0, Cr(Cr₂O₃)=+3", "products: N(N₂)=0, Cr(Cr₂O₃)=+3")}
        </T>
      </Fade>

      {/* ===== beat 3 — N oxidised ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={202} size={15} fill={INK}>
          {t("N: −3 → 0 — oxidised (loses e⁻)", "N: −3 → 0 — oxidised (e⁻ lose)")}
        </T>
      </Fade>

      {/* ===== beat 4 — Cr reduced ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={230} size={15} fill={INK}>
          {t("Cr: +6 → +3 — reduced (gains e⁻)", "Cr: +6 → +3 — reduced (e⁻ gain)")}
        </T>
      </Fade>

      {/* ===== beat 5 — intramolecular ===== */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 64 254 L 64 296" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={80} y={272} size={14} fill={RED} weight={700} anchor="start">
          {t("2 DIFFERENT elements change oppositely in one compound", "2 ALAG elements ek compound mein opposite change")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={80} y={292} size={14} fill={RED} weight={700} anchor="start">
          {t("→ INTRAMOLECULAR REDOX (sub-class of decomposition)", "→ INTRAMOLECULAR REDOX (decomposition ka sub-class)")}
        </T>
      </Fade>

      {/* ===== beat 6 — not disproportionation ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={330} size={15} fill={INK}>
          {t("not disproportionation — needs ONE element splitting; N ≠ Cr", "disproportionation nahi — EK element splitting chahiye; N ≠ Cr")}
        </T>
      </Fade>

      {/* ===== beat 7 — answer ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={364} size={16} fill={GREEN} weight={700}>
          {t("intramolecular (decomposition) redox — N oxidised, Cr reduced", "intramolecular (decomposition) redox — N oxidised, Cr reduced")}
        </T>
      </Fade>
    </Scene>
  );
}

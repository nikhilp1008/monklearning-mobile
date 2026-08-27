/**
 * C11 Ch01 · Section 58 — "Formula recap: every relation of the chapter"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. (section_type: formula_recap — the whole
 * chapter's relations on one desk, closing Master Revision part 1 of 2.)
 *
 * Beats (en [0,10.58,31.23,52.23,76.04,91.14,102.49,123.74,140.72]):
 *  0 anchor: end of chapter — everything from all 4 parts, one desk
 *  1 measurement: density, K, F, litre/cm³ conversions
 *  2 uncertainty: sci notation, sum/diff vs product/quotient, round-half-even
 *  3 laws: mass conservation, Avogadro's law, definite/multiple proportions
 *  4 the mole triangle (the spine) + Avogadro's number; 22.4L is STP-only
 *  5 average atomic mass; M = 2×VD
 *  6 formulas: n=M/EFM, molecular=n×empirical, combustion C/H/O
 *  7 stoichiometry: mole ratio bridge, %yield, limiting reagent
 *  8 concentration: M/m/mole fraction/ppm, dilution, normality, density
 *
 * Layout plan (14 lines, generously spaced, all well within safe area):
 *  b0 y82 · b1 y104 · b2 y126/148 · b3 y172/194 · b4 y218/240 ·
 *  b5 y264 · b6 y286 · b7 y310/332 · b8 y356/378
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={17} fill={RED} script>
          {t("formula recap: every relation of the chapter", "formula recap: chapter ke saare relations")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={82} size={12} fill={INK} script>
          {t(
            "we've reached the end of the chapter — everything from all 4 parts onto one desk, starting with memory-relations",
            "chapter ke ant tak pahunch gaye — chaaron parts sab kuch ek hi mez par, shuru un relations se jo yaad se aana chahiye"
          )}
        </T>
      </Fade>

      {/* beat 1 — measurement */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={104} size={12} fill={INK} weight={700} script={false}>
          MEASUREMENT: density=m/V · K=°C+273.15 · °F=9/5°C+32 · 1L=1000cm³ · 1m³=10⁶cm³
        </T>
      </Fade>

      {/* beat 2 — uncertainty */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={126} size={12} fill={INK} weight={700} script={false}>
          {t(
            "scientific notation = coefficient(1-10) × 10ⁿ — only the coefficient's digits count",
            "scientific notation = coefficient(1-10) × 10ⁿ — sirf coefficient ke digits ginte"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={540} y={148} size={12} fill={MUTED} script>
          {t(
            "sum/diff → fewest decimal places · product/quotient → fewest sig figs · round half to EVEN",
            "sum/diff → sabse kam decimal places · product/quotient → sabse kam sig figs · half ko EVEN tak round"
          )}
        </T>
      </Fade>

      {/* beat 3 — laws */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={172} size={12} fill={INK} weight={700} script={false}>
          LAWS: mass conserved (closed system) · equal volumes = equal molecules (same T,P)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={540} y={194} size={12} fill={MUTED} script>
          {t(
            "definite proportions → fixed ratio · multiple proportions → small whole numbers",
            "definite proportions → fixed ratio · multiple proportions → chhote whole numbers"
          )}
        </T>
      </Fade>

      {/* beat 4 — the mole triangle (the spine) + STP caveat */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={218} size={13} fill={GREEN} weight={700} script={false}>
          {t(
            "THE MOLE TRIANGLE — the spine of the entire chapter · Nₐ = 6.022×10²³",
            "THE MOLE TRIANGLE — poore chapter ki spine · Nₐ = 6.022×10²³"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={540} y={240} size={12} fill={RED} weight={700} script={false}>
          {t(
            "22.4 L/mol is a GAS-ONLY ticket — valid at STP alone!",
            "22.4 L/mol sirf GAS ka ticket hai — sirf STP par valid!"
          )}
        </T>
      </Fade>

      {/* beat 5 — average atomic mass, M=2VD */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={264} size={12} fill={INK} weight={700} script={false}>
          {t(
            "average atomic mass = abundance-weighted mean · M = 2×VD (the 2 comes from H₂)",
            "average atomic mass = abundance-weighted mean · M = 2×VD (2 H₂ se aata)"
          )}
        </T>
      </Fade>

      {/* beat 6 — formulas */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={286} size={12} fill={INK} weight={700} script={false}>
          n = M/EFM · molecular = n×empirical · combustion: C←CO₂, H←H₂O, O←difference
        </T>
      </Fade>

      {/* beat 7 — stoichiometry */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={310} size={12} fill={INK} weight={700} script={false}>
          mol(A)/coeff(A) = mol(B)/coeff(B) · %yield = actual/theoretical × 100
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={332} size={12} fill={GREEN} weight={700} script={false}>
          {t(
            "limiting reagent = smallest(mol/coeff) — every product/leftover anchors on it",
            "limiting reagent = smallest(mol/coeff) — har product/leftover isi par anchor karta"
          )}
        </T>
      </Fade>

      {/* beat 8 — concentration */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={540} y={356} size={12} fill={INK} weight={700} script={false}>
          M=mol/L(soln) · m=mol/kg(solvent) · mole fraction=mol/total · ppm=fraction×10⁶
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={540} y={378} size={12} fill={RED} weight={700} script={false}>
          {t(
            "M₁V₁=M₂V₂ (dilution) · N=n-factor×M · M↔m ALWAYS needs DENSITY",
            "M₁V₁=M₂V₂ (dilution) · N=n-factor×M · M↔m ke liye HAMESHA DENSITY chahiye"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

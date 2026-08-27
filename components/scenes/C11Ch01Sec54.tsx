/**
 * C11 Ch01 · Section 54 — "Every concentration relation in one place"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. (section_type: formulas — the master sheet.)
 *
 * Beats (en [0,5.89,15.53,27.39,39.77,53.59,70.92,80.9,98.14]):
 *  0 anchor: interconversion is where marks are won and lost
 *  1 molarity: mol/L, volume-based → temp-dependent
 *  2 molality: mol/kg, mass-based → temp-independent
 *  3 mole fraction: dimensionless, temp-independent
 *  4 mass% / ppm / ppb: same fraction, different multiplier
 *  5 normality = n-factor×M; strength(g/L) = M × molar mass
 *  6 dilution/mixing: M₁V₁=M₂V₂; M(final)=total moles/total volume
 *  7 mass% → molarity, boxed: density bridges mass% and molarity
 *  8 molarity → molality exact, boxed: denominator = solvent mass in 1L
 *
 * Layout plan:
 *  b0 | anchor (script13 ink)        | T mid | x540  y84
 *  b1 | l (13 bold ink)              | T mid | x540  y108
 *  b2 | l (13 bold ink)              | T mid | x540  y130
 *  b3 | l (13 bold ink)              | T mid | x540  y152
 *  b4 | l (script12 muted)           | T mid | x540  y174
 *  b5 | l1/l2 (13 bold ink/muted)    | T mid | x540  y198/220
 *  b6 | l (script12 ink)             | T mid | x540  y244
 *  b7 | box (dashed amber, w620h68)  | Draw  | x230..850 y272..340
 *  b7 | formula/note inside          | T mid | x540  y298/322
 *  b8 | box (dashed amber, w620h68)  | Draw  | x230..850 y368..436
 *  b8 | formula/note inside          | T mid | x540  y394/418
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={18} fill={RED} script>
          {t("every concentration relation in one place", "har concentration relation ek jagah")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={84} size={13} fill={INK} script>
          {t(
            "let's set them all down — interconversion is where marks are won and lost",
            "sab likh lete hain — marks interconversion mein hi jeete aur haare jaate"
          )}
        </T>
      </Fade>

      {/* beat 1 — molarity */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={108} size={13} fill={INK} weight={700} script={false}>
          {t(
            "MOLARITY = mol(solute)/L(solution) [mol/L] — volume-based → temp-DEPENDENT",
            "MOLARITY = mol(solute)/L(solution) [mol/L] — volume-based → temp ke saath BADALTA"
          )}
        </T>
      </Fade>

      {/* beat 2 — molality */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={130} size={13} fill={INK} weight={700} script={false}>
          {t(
            "MOLALITY = mol(solute)/kg(solvent) [mol/kg] — mass-based → temp-INDEPENDENT",
            "MOLALITY = mol(solute)/kg(solvent) [mol/kg] — mass-based → temp se SWATANTRA"
          )}
        </T>
      </Fade>

      {/* beat 3 — mole fraction */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={152} size={13} fill={INK} weight={700} script={false}>
          MOLE FRACTION = mol(solute)/total mol, x₁+x₂=1 — {t("dimensionless", "dimensionless")}
        </T>
      </Fade>

      {/* beat 4 — mass% / ppm / ppb */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={174} size={12} fill={MUTED} script>
          {t(
            "mass% (×100), ppm (×10⁶), ppb (×10⁹) — same fraction, different multiplier",
            "mass% (×100), ppm (×10⁶), ppb (×10⁹) — same fraction, alag multiplier"
          )}
        </T>
      </Fade>

      {/* beat 5 — normality + strength */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={198} size={13} fill={INK} weight={700} script={false}>
          NORMALITY = n-factor × MOLARITY
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={540} y={220} size={12} fill={MUTED} script>
          {t(
            "STRENGTH (g/L) = MOLARITY × molar mass — recognize, don't rederive",
            "STRENGTH (g/L) = MOLARITY × molar mass — pehchaano, dobara mat nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 6 — dilution and mixing */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={244} size={12} fill={INK} script>
          {t(
            "dilution: M₁V₁=M₂V₂ (moles conserved) · mixing: M(final) = total moles / total volume",
            "dilution: M₁V₁=M₂V₂ (moles conserved) · mixing: M(final) = total moles / total volume"
          )}
        </T>
      </Fade>

      {/* beat 7 — mass% to molarity, boxed */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.3)}
        d="M 230 272 h 620 q 16 0 16 16 v 36 q 0 16 -16 16 h -620 q -16 0 -16 -16 v -36 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={540} y={298} size={14} fill={INK} weight={700} script={false}>
          M = 10·d·x / M(solute) — [d=density(g/mL), x=mass%]
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <T x={540} y={322} size={11} fill={MUTED} script>
          {t(
            "density bridges mass% (no volume info) and molarity (per volume)",
            "density hi mass% (volume info nahi) aur molarity (per volume) ko jodti"
          )}
        </T>
      </Fade>

      {/* beat 8 — molarity to molality exact, boxed */}
      <Draw
        on={beat >= 8}
        delay={dl(8, 0.3)}
        d="M 230 368 h 620 q 16 0 16 16 v 36 q 0 16 -16 16 h -620 q -16 0 -16 -16 v -36 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 8} delay={dl(8, 1.1)}>
        <T x={540} y={394} size={14} fill={INK} weight={700} script={false}>
          m = 1000·M / (1000d − M·M(solute))
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.9)}>
        <T x={540} y={418} size={11} fill={MUTED} script>
          {t(
            "denominator = g of SOLVENT in 1L solution — that's molality's definition",
            "denominator = 1L solution mein SOLVENT ka mass — yehi molality ki definition hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

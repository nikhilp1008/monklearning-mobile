/**
 * C11 Ch01 · Section 53 — "Parts per million, mole fraction and normality"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,7.25,28.08,52.91,70.57,88.24,110.94,133.72]):
 *  0 anchor: very dilute solutions — mass% clumsy, switch units
 *  1 ppm = g(solute)/1,000,000 g(solution); why it's cleaner than %
 *  2 real world: fluoride/hardness/sulphate/nitrate in water, all in ppm
 *  3 mole fraction = mol/total mol; trap: forgetting the solute itself
 *  4 normality = gram equivalents/L = molarity × n-factor
 *  5 example: H₂SO₄ basicity=2 → 0.16M=0.32N; forgetting n-factor costs marks
 *  6 dilution/mixing, boxed: M₁V₁=M₂V₂; moles add, volume adds
 *  7 the slip: water added ≠ final volume
 *
 * Layout plan:
 *  b0 | anchor (script13 ink)          | T mid | x540  y84
 *  b1 | l1 (13 bold ink)/l2(muted)     | T mid | x540  y108/130
 *  b2 | l1 (script12 ink)/l2(muted)    | T mid | x540  y154/176
 *  b3 | l1 (13 bold ink)/l2(red)       | T mid | x540  y200/222
 *  b4 | l1 (13 bold ink)/l2(muted)     | T mid | x540  y246/268
 *  b5 | l1 (13 bold green)/l2(red)     | T mid | x540  y292/314
 *  b6 | box (dashed amber, w680h45)    | Draw  | x200..880 y342..387
 *  b6 | formula inside/l2(muted)       | T mid | x540  y368/405
 *  b7 | l (script12 red)               | T mid | x540  y430
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={18} fill={RED} script>
          {t("parts per million, mole fraction and normality", "parts per million, mole fraction aur normality")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={84} size={13} fill={INK} script>
          {t(
            "very dilute solutions? mass% gets clumsy — chemistry SWITCHES units",
            "bahut dilute solutions? mass% bhi clumsy ho jaata — chemistry units BADAL leti"
          )}
        </T>
      </Fade>

      {/* beat 1 — ppm */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={108} size={13} fill={INK} weight={700} script={false}>
          ppm = g(solute) / 1,000,000 g(solution)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={540} y={130} size={12} fill={MUTED} script>
          {t(
            "2 ppm reads cleanly vs 0.00000002% — that's the whole point",
            "2 ppm saaf padhta vs 0.00000002% — yehi poora point hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — real world: water quality */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={154} size={12} fill={INK} script>
          {t(
            "the everyday language of water quality: fluoride in ppm (too little OR too much matters)",
            "paani ki quality ki roz ki bhasha: fluoride ppm mein (bahut kam YA bahut zyada dono matter karte)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={540} y={176} size={12} fill={MUTED} script>
          {t(
            "hardness, sulphate, nitrate in groundwater — all quoted the same way",
            "groundwater mein hardness, sulphate, nitrate — sab isi tarah bataye jaate"
          )}
        </T>
      </Fade>

      {/* beat 3 — mole fraction */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={200} size={13} fill={INK} weight={700} script={false}>
          {t(
            "mole fraction = mol(component) / total mol — fractions sum to 1 (binary)",
            "mole fraction = mol(component) / total mol — fractions jud kar 1 bante (binary)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={540} y={222} size={12} fill={RED} script>
          {t(
            "trap: forgetting the SOLUTE itself in the total — turns 1/10 into 1/9!",
            "trap: total mein khud SOLUTE ko shaamil karna bhool jaana — 1/10 ko 1/9 bana deta!"
          )}
        </T>
      </Fade>

      {/* beat 4 — normality */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={246} size={13} fill={INK} weight={700} script={false}>
          normality = gram equivalents / L(solution) = MOLARITY × n-factor
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={540} y={268} size={12} fill={MUTED} script>
          {t(
            "n-factor = basicity (acids) · acidity (bases) · electrons transferred (redox)",
            "n-factor = basicity (acids) · acidity (bases) · redox mein transferred electrons"
          )}
        </T>
      </Fade>

      {/* beat 5 — worked instance + warning */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={292} size={13} fill={GREEN} weight={700} script={false}>
          H₂SO₄: basicity=2 → 0.16M = 0.32N (1 mol → 2 eq. of H⁺)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={314} size={12} fill={RED} script>
          {t("forgetting the n-factor = losing the LAST mark", "n-factor bhoolna = sawaal ka AAKHIRI mark gawana")}
        </T>
      </Fade>

      {/* beat 6 — dilution/mixing, boxed */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.3)}
        d="M 200 342 h 648 q 16 0 16 16 v 13 q 0 16 -16 16 h -648 q -16 0 -16 -16 v -13 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={368} size={12} fill={INK} weight={700} script={false}>
          {t(
            "M₁V₁ = M₂V₂ (dilution) · mixing same solute: moles ADD, volume ADDS",
            "M₁V₁ = M₂V₂ (dilution) · same solute milaao: moles ADD, volume ADDS"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <T x={540} y={405} size={12} fill={MUTED} script>
          {t(
            "both are just: conserve the MOLES, recount the VOLUME",
            "dono bas itna: MOLES conserve karo, VOLUME dobara ginno"
          )}
        </T>
      </Fade>

      {/* beat 7 — the slip */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={430} size={12} fill={RED} script>
          {t(
            "the slip: water added ≠ final volume! add V(final) − V(initial), NOT V(final)",
            "chook: mila paani ≠ final volume! milana V(final) − V(initial), V(final) NAHI"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

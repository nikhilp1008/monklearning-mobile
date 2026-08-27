/**
 * C11 Ch01 · Section 26 — "The laws written as relations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. (section_type: formulas — a reference sheet.)
 *
 * Beats (en [0,12.29,28.84,39.43,49.84,65.8,80.65,104.63,121.86]):
 *  0 anchor: experimental generalisations, not proofs
 *  1 conservation of mass, as a relation
 *  2 definite proportions, as a relation
 *  3 multiple proportions, as a relation
 *  4 reciprocal proportions, stated compactly
 *  5 Avogadro's law: V ∝ n
 *  6 why gas problems are easy: work in litres, skip moles
 *  7 relative atomic mass definition, boxed (foundation of the mole concept)
 *  8 dimensional note: these are dimensionless ratios
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script13 ink)        | T mid | x540  y86
 *  b1 | relation (13 bold ink)       | T mid | x540  y112
 *  b2 | relation (13 bold ink)       | T mid | x540  y138
 *  b3 | relation (script12 ink)      | T mid | x540  y164
 *  b4 | relation (script12 ink)      | T mid | x540  y190
 *  b5 | relation (13 bold ink)       | T mid | x540  y220
 *  b6 | relation (script12 muted)    | T mid | x540  y248
 *  b7 | box (dashed amber, w620h50)  | Draw  | x230..850 y280..330
 *  b7 | title/sub inside             | T mid | x540  y298/320
 *  b8 | note (script12 muted)        | T mid | x540  y355
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={21} fill={RED} script>
          {t("the laws written as relations", "laws ko relations ke roop mein likhna")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={86} size={13} fill={INK} script>
          {t(
            "experimental generalisations, not proofs — but useful written compactly",
            "experimental generalisations hain, proofs nahi — par likhna madadgar hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — conservation of mass */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={112} size={13} fill={INK} weight={700} script={false}>
          Σmass(reactants) = Σmass(products) [closed system]
        </T>
      </Fade>

      {/* beat 2 — definite proportions */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={138} size={13} fill={INK} weight={700} script={false}>
          (mA/mB) sample 1 = (mA/mB) sample 2 — any source
        </T>
      </Fade>

      {/* beat 3 — multiple proportions */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={164} size={12} fill={INK} script>
          {t(
            "fix shared element's mass → other element's masses = simple whole-number ratio",
            "shared element ka mass fix karo → doosre element ke masses = simple whole-number ratio"
          )}
        </T>
      </Fade>

      {/* beat 4 — reciprocal proportions */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={190} size={12} fill={INK} script>
          {t(
            "reciprocal: A:B (direct) = A:B (via fixed C), or a simple multiple",
            "reciprocal: A:B (direct) = A:B (fixed C ke through), ya simple multiple"
          )}
        </T>
      </Fade>

      {/* beat 5 — Avogadro's law */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={220} size={13} fill={INK} weight={700} script={false}>
          V ∝ n (same T,P) ⇒ V₁/V₂ = n₁/n₂ — equal V = equal molecules
        </T>
      </Fade>

      {/* beat 6 — why gas problems are easy */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={248} size={12} fill={MUTED} script>
          {t(
            "2 vol H₂ : 1 vol O₂ ≡ 2 molecules : 1 molecule — work in LITRES, skip moles!",
            "2 vol H₂ : 1 vol O₂ ≡ 2 molecules : 1 molecule — LITRES mein kaam karo, moles skip!"
          )}
        </T>
      </Fade>

      {/* beat 7 — relative atomic mass, boxed */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.3)}
        d="M 246 280 h 588 q 16 0 16 16 v 18 q 0 16 -16 16 h -588 q -16 0 -16 -16 v -18 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={298} size={13} fill={INK} weight={700} script={false}>
          RELATIVE ATOMIC MASS = mass(atom) ÷ [(1/12) mass(¹²C)]
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={540} y={320} size={12} fill={INK} script>
          {t(
            "¹²C ≡ exactly 12 u — the foundation of the MOLE CONCEPT",
            "¹²C ≡ exactly 12 u — MOLE CONCEPT ki foundation"
          )}
        </T>
      </Fade>

      {/* beat 8 — dimensional note */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={540} y={355} size={12} fill={MUTED} script>
          {t(
            "these are DIMENSIONLESS ratios — underlying SI: mass (kg), volume (m³)",
            "ye DIMENSIONLESS ratios hain — underlying SI: mass (kg), volume (m³)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

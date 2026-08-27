/**
 * C11 Ch01 · Section 44 — "The balanced equation as a recipe in moles"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,17.92,32.94,48.56,66.14,81.92,98.65]):
 *  0 anchor: the equation IS a recipe (2H₂+O₂→2H₂O = flour+sugar→cakes)
 *  1 coefficients = the ratio; stoichiometry = quantitative bookkeeping
 *  2 the subtlety: the recipe speaks in MOLES, not grams
 *  3 the channel: given → moles → ratio → moles wanted → convert back
 *  4 guardrail: the equation must be balanced FIRST
 *  5 the master relation, boxed: mol/coefficient is the same for every species
 *  6 the rule: convert to moles first, never ratio raw grams
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | eq (18 bold ink)             | T mid | x540  y90
 *  b0 | caption (script13 muted)     | T mid | x540  y115
 *  b1 | l (script13 ink)             | T mid | x540  y145
 *  b2 | l1 (13 bold red)             | T mid | x540  y173
 *  b2 | l2 (script12 ink)            | T mid | x540  y198
 *  b3 | l (script12 amber-drk)       | T mid | x540  y225
 *  b4 | l (script13 red)             | T mid | x540  y253
 *  b5 | box (dashed amber, w560h40)  | Draw  | x260..820 y280..320
 *  b5 | formula inside (14 bold ink) | T mid | x540  y304
 *  b6 | l (script13 green)           | T mid | x540  y348
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={19} fill={RED} script>
          {t("the balanced equation as a recipe in moles", "balanced equation ek recipe hai, moles mein")}
        </T>
      </Fade>

      {/* beat 0 — anchor: the equation is a recipe */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={90} size={18} fill={INK} weight={700} script={false}>
          2 H₂ + O₂ → 2 H₂O
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.2)}>
        <T x={540} y={115} size={13} fill={MUTED} script>
          {t("= 2 cups flour + 1 cup sugar → 2 cakes (same idea!)", "= 2 cup atta + 1 cup cheeni → 2 cakes (same idea!)")}
        </T>
      </Fade>

      {/* beat 1 — coefficients = ratio, stoichiometry defined */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={145} size={13} fill={INK} script>
          {t(
            "coefficients = the RATIO — reading them is STOICHIOMETRY (quantitative bookkeeping)",
            "coefficients = RATIO — inhe padhna hi STOICHIOMETRY hai (quantitative bookkeeping)"
          )}
        </T>
      </Fade>

      {/* beat 2 — the subtlety: moles, not grams */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={173} size={13} fill={RED} weight={700} script={false}>
          {t("the recipe speaks in MOLES, not grams!", "recipe MOLES mein baat karti, grams mein nahi!")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={540} y={198} size={12} fill={INK} script>
          {t("NOT “2g H₂ + 1g O₂” — it's 2 MOL H₂ + 1 MOL O₂", "“2g H₂ + 1g O₂” NAHI — yeh 2 MOL H₂ + 1 MOL O₂ hai")}
        </T>
      </Fade>

      {/* beat 3 — the channel */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={225} size={12} fill={AMBER_DARK} script>
          {t(
            "given → MOLES → (coefficient ratio) → moles wanted → convert back (g/L/particles)",
            "diya hua → MOLES → (coefficient ratio) → chahiye wale moles → wapas convert (g/L/particles)"
          )}
        </T>
      </Fade>

      {/* beat 4 — guardrail: must be balanced first */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={253} size={13} fill={RED} script>
          {t(
            "equation MUST be balanced FIRST — unbalanced = wrong ratios = wrong answers",
            "equation PEHLE balanced hona CHAHIYE — unbalanced = galat ratios = galat answers"
          )}
        </T>
      </Fade>

      {/* beat 5 — the master relation, boxed */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.3)}
        d="M 266 280 h 548 q 16 0 16 16 v 8 q 0 16 -16 16 h -548 q -16 0 -16 -16 v -8 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={304} size={14} fill={INK} weight={700} script={false}>
          mol(species) / coefficient = SAME for every species in the equation
        </T>
      </Fade>

      {/* beat 6 — the rule to hold onto */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={348} size={13} fill={GREEN} script>
          {t(
            "convert mass/volume → MOLES first — NEVER ratio raw grams",
            "mass/volume → MOLES mein pehle convert karo — raw grams ka ratio KABHI nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

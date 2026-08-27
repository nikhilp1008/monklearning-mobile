/**
 * M11 Ch14 · Section 19 — "The three axioms and probability via sample points"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: formulas — the chapter's
 * foundational reference card. Box drawn once (beat1), axiom lines build
 * one at a time inside it (build-the-object, not paste-whole).
 *
 * Beats (board_reveal_at_english [0,9.47,20.39,33.37,52.48,61.78,74.84,85.42]):
 *  0 heading
 *  1 (HIGH) box drawn + Axiom 1 (Non-negativity): P(A) ≥ 0
 *  2 (HIGH) Axiom 2 (Normalization): P(S) = 1
 *  3 (HIGH) Axiom 3 (Additivity): A∩B=∅ ⇒ P(A∪B) = P(A) + P(B)
 *  4 probability via sample points: assign each ωᵢ a number P(ωᵢ)
 *  5 P(ωᵢ) ≥ 0, Σ P(ωᵢ) = 1 (all ωᵢ ∈ S)
 *  6 (green, ringed) P(E) = Σ P(ωᵢ) (ωᵢ ∈ E)
 *  7 GUARDRAIL: dimensionless, in [0,1] — the only "unit check"
 *
 * Layout plan (axiom box x140..940 y115..295; longer language counts):
 *  b1 | box + "AXIOM 1 — .. P(A) ≥ 0" (16, ink)     | Draw/T| x140..940 y115..295 / y150
 *  b2 | "AXIOM 2 — .. P(S) = 1" (16, ink)             | T mid | y200
 *  b3 | "AXIOM 3 — .. P(A∪B)=P(A)+P(B)" (16, ink)      | T mid | y250
 *  b4 | sentence (16, ink)                              | T mid | x210..870 y328..344
 *  b5 | "P(ωᵢ)≥0, ΣP(ωᵢ)=1 (all ωᵢ∈S)" (17, ink)          | T mid | x270..810 y362..382
 *  b6 | ringed "P(E) = ΣP(ωᵢ) (ωᵢ∈E)" (19, green)           | T mid | x340..740 y396..420
 *  b7 | guardrail chip (red, w760 h48)                        | Chip  | x160..920 y448..496
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, GREEN, RED, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch14Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("three short axioms — everything else is squeezed from these", "teen chote axioms — baaki sab inhi se nikalta hai")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t("The three axioms of probability (Kolmogorov)", "Probability ke teen axioms (Kolmogorov)")}
        </T>
      </Fade>

      {/* beat 1 — box + axiom 1 */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={roundRectD(140, 115, 800, 180, 12)} stroke={AMBER_DARK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={540} y={155} size={16} fill={INK} weight={700}>
          <TSpan fill={GREEN} fontWeight={800}>{t("AXIOM 1 (Non-negativity): ", "AXIOM 1 (Non-negativity): ")}</TSpan>
          {"P(A) ≥ 0"}
        </T>
      </Fade>

      {/* beat 2 — axiom 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={200} size={16} fill={INK} weight={700}>
          <TSpan fill={GREEN} fontWeight={800}>{t("AXIOM 2 (Normalization): ", "AXIOM 2 (Normalization): ")}</TSpan>
          {"P(S) = 1"}
        </T>
      </Fade>

      {/* beat 3 — axiom 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={250} size={15.5} fill={INK} weight={700}>
          <TSpan fill={GREEN} fontWeight={800}>{t("AXIOM 3 (Additivity): ", "AXIOM 3 (Additivity): ")}</TSpan>
          {"A∩B=∅ ⇒ P(A∪B) = P(A) + P(B)"}
        </T>
      </Fade>

      {/* beat 4 — sample points */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={335} size={16} fill={INK} weight={600}>
          {t("probability via sample points: assign each ωᵢ a number P(ωᵢ)", "sample points ke through: har ωᵢ ko P(ωᵢ) do")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={372} size={17} fill={INK} weight={700}>
          {"P(ωᵢ) ≥ 0,   Σ P(ωᵢ) = 1   (all ωᵢ ∈ S)"}
        </T>
      </Fade>

      {/* beat 6 — ringed */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={410} size={19} fill={GREEN} weight={800}>
          {"P(E) = Σ P(ωᵢ)   (ωᵢ ∈ E)"}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.0)} d={ringD(540, 400, 235, 26)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />

      {/* beat 7 — GUARDRAIL */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={160} y={450} w={760} h={48} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t('dimensionless, always in [0, 1] — the only "unit check"', 'dimensionless, hamesha [0, 1] mein — bas yehi "unit check"')}
        </Chip>
      </Fade>
    </Scene>
  );
}

/**
 * M11 Ch14 · Section 21 — "Deriving the first three results (impossible, complement, bounds)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: formulas. FLAGGED for extra
 * scrutiny (axiom-derivation section) — three genuine derivations, each
 * built as a vertically-stacked equality chain (same safe pattern as
 * Sec13's part-c derivation) rather than single-line finished formulas,
 * so each step lands on its own beat-internal delay before the boxed
 * conclusion. Verified algebraically: R1 cancels P(S) from both sides of
 * P(S)=P(S)+P(∅); R2 uses the Sec7 partition fact {A,A′} then Axiom 2;
 * R3 chains R2's result through Axiom 1 for the upper bound — all match
 * the narration exactly.
 *
 * Beats (board_reveal_at_english [0,8.96,22.02,45.57,62.55,82.69,98.56]):
 *  0 heading
 *  1 R1 setup: S, ∅ mutually exclusive, S∪∅=S — apply Axiom 3
 *  2 R1 chain: P(S)=P(S∪∅)=P(S)+P(∅) ⇒ P(∅)=0
 *  3 R2 setup: A, A′ mutually exclusive, exhaust S — Axiom 3 then 2
 *  4 (HIGH) R2 chain: P(A)+P(A′)=P(A∪A′)=P(S)=1 ⇒ P(A′)=1−P(A)
 *  5 R3 setup: lower bound = Axiom 1; upper bound from R2
 *  6 R3 chain: P(A)=1−P(A′)≤1 since P(A′)≥0 ⇒ 0≤P(A)≤1
 *
 * Layout plan (single column, centered; longer language counts):
 *  b1 | setup (15, ink)                              | T mid | x150..930 y120..134
 *  b2 | line1/line2 (17, ink) + boxed conclusion (19) | T mid | y163..250
 *  b3 | setup (15, ink)                                | T mid | x120..960 y262..276
 *  b4 | line1/line2 (17, ink) + ringed HIGH conclusion  | T mid | y300..385
 *  b5 | setup (15, ink)                                  | T mid | x220..860 y400..414
 *  b6 | line1 (17) + caption (13, muted) + boxed conclusion| T mid | y435..515
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, GREEN, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch14Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("watch the toolkit fall out of the axioms", "toolkit axioms se khud nikalta hai — dekho")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t("R1–R3: squeezing results from the axioms", "R1–R3: axioms se results nichodna")}
        </T>
      </Fade>

      {/* R1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={128} size={15} fill={INK} weight={600}>
          {t("R1 — S and ∅ are mutually exclusive, S∪∅=S. Apply Axiom 3:", "R1 — S aur ∅ mutually exclusive hain, S∪∅=S. Axiom 3 lagao:")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={165} size={17} fill={INK} weight={700}>
          {"P(S) = P(S ∪ ∅)"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={540} y={191} size={17} fill={INK} weight={700}>
          {"= P(S) + P(∅)"}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.2)} d={roundRectD(440, 210, 200, 40, 8)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <T x={540} y={236} size={18} fill={GREEN} weight={800}>
          {"⇒ P(∅) = 0"}
        </T>
      </Fade>

      {/* R2 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={266} size={15} fill={INK} weight={600}>
          {t("R2 — A and A′ are mutually exclusive and exhaust S. Apply Axiom 3, then Axiom 2:", "R2 — A aur A′ mutually exclusive hain, S ko exhaust karte hain. Axiom 3, phir 2:")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={303} size={17} fill={INK} weight={700}>
          {"P(A) + P(A′) = P(A ∪ A′)"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={540} y={329} size={17} fill={INK} weight={700}>
          {"= P(S) = 1"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={540} y={368} size={21} fill={GREEN} weight={800}>
          {"P(A′) = 1 − P(A)"}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.1)} d={ringD(540, 358, 175, 27)} stroke={AMBER_DARK} sw={2.4} dur={0.8} />

      {/* R3 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={402} size={15} fill={INK} weight={600}>
          {t("R3 — lower bound is Axiom 1; upper bound comes from R2:", "R3 — lower bound Axiom 1 hai; upper bound R2 se aata hai:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={440} size={17} fill={INK} weight={700}>
          {"P(A) = 1 − P(A′) ≤ 1"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={463} size={13} fill={MUTED} script>
          {t("since P(A′) ≥ 0", "kyunki P(A′) ≥ 0")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.9)} d={roundRectD(410, 480, 260, 44, 8)} stroke={GREEN} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={540} y={508} size={19} fill={GREEN} weight={800}>
          {"0 ≤ P(A) ≤ 1"}
        </T>
      </Fade>
    </Scene>
  );
}

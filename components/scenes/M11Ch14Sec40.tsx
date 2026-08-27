/**
 * M11 Ch14 · Section 40 — "Formula recap — foundations (Sample Space, Events, Axioms)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: formula_recap — a grid of
 * boxed formulas revealed in the order the chapter taught them (a
 * "notes page" moment, not new teaching). No segments_english/hinglish
 * in Supabase for this section (expected — see task brief); all text
 * comes directly from board_content. First of TWO formula_recap
 * sections for this chapter (foundations here; addition/computing/odds
 * in Sec41) since Probability has two teaching units, not the usual one.
 *
 * Beats (board_reveal_at_english [0,8.28,17.58,29.27,41.9,53.5,63.66]):
 *  0 heading
 *  1 Card1: n(S) = m₁×m₂×⋯×mₖ (k independent stages)
 *  2 Card2: total events = 2ⁿ, compound = 2ⁿ−n−1
 *  3 Card3: ME: A∩B=∅; exhaustive: ⋃Eᵢ=S; partition: both
 *  4 Card4: axioms — P(A)≥0; P(S)=1; A∩B=∅⇒P(A∪B)=P(A)+P(B)
 *  5 Card5: P(∅)=0; 0≤P(A)≤1; P(A′)=1−P(A)
 *  6 (HIGH) Card6: P(A) = n(A)/n(S) (equally likely only)
 *
 * Layout plan (2×3 card grid, col1 x=70 col2 x=550, w=460 h=95, row
 * pitch 110, rows y=115/225/335):
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

function Card({
  x, y, w, h, on, delay, stroke = INK,
}: { x: number; y: number; w: number; h: number; on: boolean; delay: number; stroke?: string }) {
  return <Draw on={on} delay={delay} d={roundRectD(x, y, w, h, 10)} stroke={stroke} sw={1.8} dur={0.5} />;
}

const COL1 = 70;
const COL2 = 550;
const CARD_W = 460;
const CARD_H = 95;
const ROW1 = 115;
const ROW2 = 225;
const ROW3 = 335;

export default function M11Ch14Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("your notes page: foundations, in the order you learned them", "aapka notes page: foundations, jis order mein seekha")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t("Formula Recap — foundations", "Formula Recap — foundations")}
        </T>
      </Fade>

      {/* Card 1 — counting */}
      <Card x={COL1} y={ROW1} w={CARD_W} h={CARD_H} on={beat >= 1} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={COL1 + CARD_W / 2} y={ROW1 + 40} size={15} fill={INK} weight={700}>
          {"n(S) = m₁ × m₂ × ⋯ × mₖ"}
        </T>
        <T x={COL1 + CARD_W / 2} y={ROW1 + 68} size={12} fill={MUTED}>
          {t("(k independent stages)", "(k independent stages)")}
        </T>
      </Fade>

      {/* Card 2 — counting events */}
      <Card x={COL2} y={ROW1} w={CARD_W} h={CARD_H} on={beat >= 2} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={COL2 + CARD_W / 2} y={ROW1 + 40} size={15} fill={INK} weight={700}>
          {"total events = 2ⁿ"}
        </T>
        <T x={COL2 + CARD_W / 2} y={ROW1 + 68} size={14} fill={INK} weight={700}>
          {"compound = 2ⁿ − n − 1"}
        </T>
      </Fade>

      {/* Card 3 — ME / exhaustive / partition */}
      <Card x={COL1} y={ROW2} w={CARD_W} h={CARD_H} on={beat >= 3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={COL1 + CARD_W / 2} y={ROW2 + 32} size={13.5} fill={INK} weight={700}>
          {"ME: A∩B = ∅"}
        </T>
        <T x={COL1 + CARD_W / 2} y={ROW2 + 58} size={13.5} fill={INK} weight={700}>
          {"exhaustive: ⋃ Eᵢ = S"}
        </T>
        <T x={COL1 + CARD_W / 2} y={ROW2 + 84} size={12} fill={MUTED}>
          {t("partition: BOTH conditions", "partition: DONO conditions")}
        </T>
      </Fade>

      {/* Card 4 — three axioms */}
      <Card x={COL2} y={ROW2} w={CARD_W} h={CARD_H} on={beat >= 4} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={COL2 + CARD_W / 2} y={ROW2 + 30} size={12} fill={MUTED} weight={700}>
          {t("AXIOMS", "AXIOMS")}
        </T>
        <T x={COL2 + CARD_W / 2} y={ROW2 + 54} size={13.5} fill={INK} weight={700}>
          {"P(A) ≥ 0;  P(S) = 1"}
        </T>
        <T x={COL2 + CARD_W / 2} y={ROW2 + 80} size={12.5} fill={INK} weight={700}>
          {"A∩B=∅ ⇒ P(A∪B)=P(A)+P(B)"}
        </T>
      </Fade>

      {/* Card 5 — consequences */}
      <Card x={COL1} y={ROW3} w={CARD_W} h={CARD_H} on={beat >= 5} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={COL1 + CARD_W / 2} y={ROW3 + 36} size={13.5} fill={INK} weight={700}>
          {"P(∅) = 0     0 ≤ P(A) ≤ 1"}
        </T>
        <T x={COL1 + CARD_W / 2} y={ROW3 + 64} size={14} fill={INK} weight={700}>
          {"P(A′) = 1 − P(A)"}
        </T>
      </Fade>

      {/* Card 6 — HIGH, the classical formula */}
      <Card x={COL2} y={ROW3} w={CARD_W} h={CARD_H} on={beat >= 6} delay={dl(6, 0)} stroke={GREEN} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={COL2 + CARD_W / 2} y={ROW3 + 42} size={18} fill={GREEN} weight={800}>
          {"P(A) = n(A) / n(S)"}
        </T>
        <T x={COL2 + CARD_W / 2} y={ROW3 + 70} size={12} fill={AMBER_DARK} weight={700}>
          {t("(equally likely only)", "(sirf equally likely)")}
        </T>
      </Fade>
    </Scene>
  );
}

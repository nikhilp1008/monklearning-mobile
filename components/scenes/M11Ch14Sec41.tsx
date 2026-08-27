/**
 * M11 Ch14 · Section 41 — "Formula recap — addition, computing, odds"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: formula_recap — second of two
 * (Sec40 covered foundations; this covers Subtopics 2's addition rule
 * through Subtopic 3's odds/empirical). No segments_english/hinglish in
 * Supabase (expected); all text from board_content directly. Same 2×3
 * boxed-card grid pattern as Sec40.
 *
 * Beats (board_reveal_at_english [0,7.0,15.62,23.3,33.11,40.62,48.3]):
 *  0 heading
 *  1 Card1: P(A∪B) = P(A)+P(B)−P(A∩B)
 *  2 Card2: P(A∪B∪C) = Σsingles − Σpairs + P(A∩B∩C)
 *  3 Card3: P(exactly one)=P(A)+P(B)−2P(A∩B); P(A′∩B′)=1−P(A∪B)
 *  4 (HIGH) Card4: P(at least one) = 1 − P(none)
 *  5 Card5: count with nPr (ordered), nCr (unordered)
 *  6 Card6: odds m:n ⇒ P=m/(m+n); P_emp=f/N
 *
 * Layout plan (2×3 card grid, col1 x=70 col2 x=550, w=460 h=95, row
 * pitch 110, rows y=115/225/335 — identical geometry to Sec40):
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
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

export default function M11Ch14Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("your notes page: addition, computing, odds", "aapka notes page: addition, computing, odds")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("Formula Recap — addition, computing, odds", "Formula Recap — addition, computing, odds")}
        </T>
      </Fade>

      {/* Card 1 — two-event addition */}
      <Card x={COL1} y={ROW1} w={CARD_W} h={CARD_H} on={beat >= 1} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={COL1 + CARD_W / 2} y={ROW1 + CARD_H / 2 + 6} size={15} fill={INK} weight={700}>
          {"P(A∪B) = P(A)+P(B)−P(A∩B)"}
        </T>
      </Fade>

      {/* Card 2 — three-event */}
      <Card x={COL2} y={ROW1} w={CARD_W} h={CARD_H} on={beat >= 2} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={COL2 + CARD_W / 2} y={ROW1 + 44} size={14} fill={INK} weight={700}>
          {"P(A∪B∪C) ="}
        </T>
        <T x={COL2 + CARD_W / 2} y={ROW1 + 70} size={13} fill={INK} weight={700}>
          {"Σsingles − Σpairs + P(A∩B∩C)"}
        </T>
      </Fade>

      {/* Card 3 — exactly one / neither */}
      <Card x={COL1} y={ROW2} w={CARD_W} h={CARD_H} on={beat >= 3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={COL1 + CARD_W / 2} y={ROW2 + 40} size={13} fill={INK} weight={700}>
          {"P(exactly one)=P(A)+P(B)−2P(A∩B)"}
        </T>
        <T x={COL1 + CARD_W / 2} y={ROW2 + 68} size={13} fill={INK} weight={700}>
          {"P(A′∩B′) = 1−P(A∪B)"}
        </T>
      </Fade>

      {/* Card 4 — HIGH: at least one */}
      <Card x={COL2} y={ROW2} w={CARD_W} h={CARD_H} on={beat >= 4} delay={dl(4, 0)} stroke={GREEN} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={COL2 + CARD_W / 2} y={ROW2 + CARD_H / 2 + 6} size={19} fill={GREEN} weight={800}>
          {"P(at least one) = 1 − P(none)"}
        </T>
      </Fade>

      {/* Card 5 — counting */}
      <Card x={COL1} y={ROW3} w={CARD_W} h={CARD_H} on={beat >= 5} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={COL1 + CARD_W / 2} y={ROW3 + 44} size={14} fill={INK} weight={700}>
          {"nPr "}
          <TSpan fill={MUTED} fontSize={12} fontWeight={600}>{t("(ordered)", "(ordered)")}</TSpan>
        </T>
        <T x={COL1 + CARD_W / 2} y={ROW3 + 70} size={14} fill={INK} weight={700}>
          {"nCr "}
          <TSpan fill={MUTED} fontSize={12} fontWeight={600}>{t("(unordered)", "(unordered)")}</TSpan>
        </T>
      </Fade>

      {/* Card 6 — odds / empirical */}
      <Card x={COL2} y={ROW3} w={CARD_W} h={CARD_H} on={beat >= 6} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={COL2 + CARD_W / 2} y={ROW3 + 40} size={13.5} fill={INK} weight={700}>
          {"odds m:n ⇒ P = m/(m+n)"}
        </T>
        <T x={COL2 + CARD_W / 2} y={ROW3 + 68} size={13.5} fill={INK} weight={700}>
          {"P_emp = f/N"}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * M11 Ch14 · Section 37 — "Worked example: three-event inclusion–exclusion (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: worked_examples. FLAGGED for
 * extra scrutiny — the last flagged section. Applies Sec31's 3-event
 * formula with real numbers; verified all 7 Venn regions by hand before
 * trusting the diagram:
 *   M-only=0.5−0.2−0.1+0.05=0.25   P-only=0.4−0.2−0.15+0.05=0.10
 *   C-only=0.3−0.1−0.15+0.05=0.10  M∩P(excl C)=0.2−0.05=0.15
 *   P∩C(excl M)=0.15−0.05=0.10     M∩C(excl P)=0.1−0.05=0.05
 *   M∩P∩C=0.05
 *   sum = 0.25+0.10+0.10+0.15+0.10+0.05+0.05 = 0.80 = P(M∪P∪C) ✓
 *
 * Beats (board_reveal_at_english [0,8.28,30.98,38.49,53.85,63.91,76.46]):
 *  0 heading
 *  1 problem: P(M)=0.5,P(P)=0.4,P(C)=0.3; pairwise 0.2,0.15,0.1; triple 0.05
 *  2 formula: P(M∪P∪C) = Σsingles − Σpairs + triple
 *  3 formula: = (0.5+0.4+0.3) − (0.2+0.15+0.1) + 0.05
 *  4 (HIGH, ringed) = 1.2 − 0.45 + 0.05 = 0.8
 *  5 GUARDRAIL: P(none of the three) = 1−0.8 = 0.2 — complement, instantly
 *  [group A erased at beat>=6]
 *  6 diagram: 3-circle Venn, all 7 regions labeled with real values
 *
 * Layout plan (Group A compact centered, erased beat>=6; Group B fresh
 * full-canvas 3-circle diagram, M(340,250,95)/P(460,250,95)/C(400,345,95);
 * longer language counts):
 *  b1 | problem, 2 lines (15, ink)                  | T mid | y128 / y152
 *  b2 | formula (16, ink)                             | T mid | y188
 *  b3 | formula (15, ink)                               | T mid | y218
 *  b4 | ringed HIGH "=1.2−0.45+0.05=0.8" (20, green)      | T mid | y260
 *  b5 | guardrail chip (red, w700 h44)                      | Chip  | x190..890 y298..342
 *  [group A erased beat>=6]
 *  b6 | 3 circles + M/P/C labels + 7 region values             | Draw/T
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { circleD } from "./math-kit";

export default function M11Ch14Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const aOn = beat >= 0 && beat < 6;

  const M = { cx: 340, cy: 250, r: 95 };
  const P = { cx: 460, cy: 250, r: 95 };
  const C = { cx: 400, cy: 345, r: 95 };

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("singles over-count the pairs, the center gets fixed once more", "singles pairs ko over-count karte hain, center ek baar aur fix hota hai")}
        </T>
      </Fade>

      {/* ===================== Group A — beats 0-5 ===================== */}

      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={17} fill={INK} weight={700}>
          {t("Three-event inclusion–exclusion (JEE Main)", "Teen-event inclusion–exclusion (JEE Main)")}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={132} size={15} fill={INK} weight={600}>
          {"P(M)=0.5, P(P)=0.4, P(C)=0.3; pairwise 0.2, 0.15, 0.1; triple 0.05"}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.9)}>
        <T x={540} y={155} size={15} fill={INK} weight={600}>
          {t("Find P(at least one subject).", "P(at least one subject) nikaalo.")}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={192} size={16} fill={INK} weight={700}>
          {"P(M∪P∪C) = Σsingles − Σpairs + triple"}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={225} size={15} fill={INK} weight={700}>
          {"= (0.5+0.4+0.3) − (0.2+0.15+0.1) + 0.05"}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={268} size={20} fill={GREEN} weight={800}>
          {"= 1.2 − 0.45 + 0.05 = 0.8"}
        </T>
      </Fade>
      <Draw on={aOn && beat >= 4} delay={dl(4, 1.0)} d={ringD(540, 258, 190, 26)} stroke={GREEN} sw={2.2} dur={0.7} />

      <Fade on={aOn && beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={190} y={300} w={700} h={44} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t("P(none of the three) = 1−0.8 = 0.2 — the complement, instantly", "P(teeno mein se koi nahi) = 1−0.8 = 0.2 — complement, turant")}
        </Chip>
      </Fade>

      {/* ===================== Group B — beat 6, never erased ===================== */}

      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={circleD(M.cx, M.cy, M.r)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d={circleD(P.cx, P.cy, P.r)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 1.0)} d={circleD(C.cx, C.cy, C.r)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={295} y={175} size={16} fill={INK} weight={800}>M</T>
        <T x={505} y={175} size={16} fill={INK} weight={800}>P</T>
        <T x={400} y={455} size={16} fill={INK} weight={800}>C</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.0)}>
        <T x={295} y={225} size={15} fill={INK} weight={700}>0.25</T>
        <T x={505} y={225} size={15} fill={INK} weight={700}>0.10</T>
        <T x={400} y={410} size={15} fill={INK} weight={700}>0.10</T>
        <T x={400} y={222} size={14} fill={INK} weight={700}>0.15</T>
        <T x={340} y={320} size={14} fill={INK} weight={700}>0.05</T>
        <T x={460} y={320} size={14} fill={INK} weight={700}>0.10</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={400} y={287} size={15} fill={GREEN} weight={800}>0.05</T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <T x={540} y={500} size={14} fill={INK} weight={600}>
          {t("all 7 regions sum to 0.8 = P(M∪P∪C) ✓", "saatho regions ka sum 0.8 = P(M∪P∪C) ✓")}
        </T>
      </Fade>
    </Scene>
  );
}

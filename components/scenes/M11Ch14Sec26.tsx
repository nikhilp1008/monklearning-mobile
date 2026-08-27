/**
 * M11 Ch14 · Section 26 — "Worked example: addition-rule composition (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: worked_examples. Two-column:
 * LEFT = Venn diagram with all 4 region values filled in (lens/A-only/
 * B-only immediately from the given data, "outside" fills in exactly
 * when P(A′∩B′) is derived), RIGHT = the three-question algebra chain.
 * Region check: 0.3(lens)+0.3(A-only)+0.2(B-only)+0.2(outside)=1.0 ✓.
 *
 * Beats (board_reveal_at_english [0,12.71,25.26,37.89,57.34,73.3,91.82]):
 *  0 heading
 *  1 given: P(A)=0.6, P(B)=0.5, P(A∩B)=0.3 — diagram + 3 region values
 *  2 P(A∪B) = 0.6+0.5−0.3 = 0.8
 *  3 P(exactly one) = 0.6+0.5−0.6 = 0.5
 *  4 cross-check: 0.8−0.3 = 0.5 ✓
 *  5 P(A′∩B′) = 1−0.8 = 0.2 (De Morgan) — diagram's 4th region fills in
 *  6 GUARDRAIL: addition rule → complement of union — JEE Main signature
 *
 * Layout plan (LEFT diagram x120..560 y175..420; RIGHT column x=650
 * anchor start; longer language counts):
 *  b1 | box + circles A(280,300,88)/B(392,300,88)   | Draw
 *  b1 | region values: lens 0.3 / A-only 0.3 / B-only 0.2 | T
 *  b2 | "P(A∪B)=0.6+0.5−0.3=0.8" (16)                | T st  | y230
 *  b3 | "P(exactly one)=0.6+0.5−0.6=0.5" (16)          | T st  | y265
 *  b4 | "check: 0.8−0.3=0.5 ✓" (13, green)               | T st  | y293
 *  b5 | "P(A′∩B′)=1−0.8=0.2 (De Morgan)" (16)              | T st  | y335
 *  b5 | outside region "0.2" fills in diagram                | T     | x500 y215
 *  b6 | guardrail chip (red, w820 h44)                          | Chip  | x130..950 y440..484
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { circleD, roundRectD, VennShade } from "./math-kit";

export default function M11Ch14Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const box = { x: 120, y: 175, w: 440, h: 245 };
  const A = { cx: 280, cy: 300, r: 88 };
  const B = { cx: 392, cy: 300, r: 88 };

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("addition rule → then its complement gives \"neither\"", "addition rule → phir complement se \"neither\" milta hai")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("Two events, three questions (JEE Main)", "Do events, teen sawaal (JEE Main)")}
        </T>
      </Fade>

      {/* beat 1 — given + diagram */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={128} size={15} fill={INK} weight={600}>
          {"P(A) = 0.6,  P(B) = 0.5,  P(A∩B) = 0.3"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={150} size={14} fill={MUTED}>
          {t("Find P(A∪B), P(exactly one), P(A′∩B′)", "P(A∪B), P(exactly one), P(A′∩B′) nikaalo")}
        </T>
      </Fade>

      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={roundRectD(box.x, box.y, box.w, box.h, 6)} stroke={MUTED} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={box.x + 20} y={box.y + 24} size={13} fill={MUTED} anchor="start" weight={700}>S</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.0)} d={circleD(A.cx, A.cy, A.r)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d={circleD(B.cx, B.cy, B.r)} stroke={INK} sw={2.2} dur={0.5} />
      <VennShade on={beat >= 1} delay={dl(1, 2.8)} include={[A, B]} fill={AMBER_DARK} opacity={0.4} {...box} />
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <T x={240} y={220} size={15} fill={INK} weight={700}>A</T>
        <T x={432} y={220} size={15} fill={INK} weight={700}>B</T>
        <T x={336} y={305} size={16} fill={INK} weight={800}>0.3</T>
        <T x={230} y={305} size={16} fill={INK} weight={800}>0.3</T>
        <T x={442} y={305} size={16} fill={INK} weight={800}>0.2</T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={620} y={225} size={16} fill={INK} anchor="start" weight={700}>
          {"P(A∪B) = 0.6+0.5−0.3 = 0.8"}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={620} y={260} size={16} fill={INK} anchor="start" weight={700}>
          {"P(exactly one) = 0.6+0.5−0.6 = 0.5"}
        </T>
      </Fade>

      {/* beat 4 — cross-check */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={620} y={288} size={13} fill={GREEN} weight={700}>
          {"check: 0.8 − 0.3 = 0.5 ✓"}
        </T>
      </Fade>

      {/* beat 5 — De Morgan, outside region fills in */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={620} y={328} size={16} fill={INK} anchor="start" weight={700}>
          {"P(A′∩B′) = 1−0.8 = 0.2"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={620} y={349} size={12} fill={MUTED} anchor="start">
          {t("(De Morgan: \"neither\")", "(De Morgan: \"neither\")")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={500} y={215} size={15} fill={RED} weight={800}>
          0.2
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={130} y={440} w={820} h={44} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("pattern: addition rule → complement of the union (the JEE Main signature)", "pattern: addition rule → union ka complement (JEE Main ka signature)")}
        </Chip>
      </Fade>
    </Scene>
  );
}

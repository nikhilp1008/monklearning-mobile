/**
 * M11 Ch14 · Section 29 — "Computing P(E) by counting: order or no order"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept. Opens Subtopic 3
 * "Computing Probabilities". Symbolic nPr/nCr (variables, not literal
 * numbers) written as plain "nPr"/"nCr" text per the Chapter 6-7
 * convention — no attempt at true superscript positioning for letters.
 *
 * Beats (board_reveal_at_english [0,15.36,31.06,40.62,52.91,65.71,78.51]):
 *  0 heading
 *  1 for equally likely outcomes, P(E)=n(E)/n(S) still holds — work moves to COUNTING
 *  2 too many outcomes to list → count with permutations and combinations
 *  3 (HIGH) LEFT box: order matters ⇒ nPr = n!/(n−r)!
 *  4 (HIGH) RIGHT box: order doesn't matter ⇒ nCr = n!/(r!(n−r)!)
 *  5 (HIGH) GUARDRAIL: first question always — does ORDER matter?
 *  6 GUARDRAIL: count n(E) and n(S) the SAME way
 *
 * Layout plan (two boxed columns x100..500 / x580..980 y260..345;
 * longer language counts):
 *  b1 | sentence (15, ink)                            | T mid | x160..920 y128..144
 *  b2 | sentence (15, ink)                              | T mid | x220..860 y158..174
 *  b3 | LEFT box + "order matters" (16) + formula (19,green)| Draw/T| y285 / y322
 *  b4 | RIGHT box + "order doesn't matter" (16) + formula     | Draw/T| y285 / y322
 *  b5 | guardrail chip (red, w800 h48)                          | Chip  | x140..940 y362..410
 *  b6 | guardrail chip (red, w760 h44)                            | Chip  | x160..920 y424..468
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch14Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("first question, always: does order matter?", "pehla sawaal, hamesha: order matter karta hai?")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("Computing P(E) when you can't list every outcome", "P(E) nikalna jab har outcome list nahi kar sakte")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={136} size={15} fill={INK} weight={600}>
          {t("P(E) = n(E)/n(S) still holds — the work moves to COUNTING", "P(E) = n(E)/n(S) abhi bhi sach hai — kaam COUNTING mein shift hota hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={166} size={15} fill={INK} weight={600}>
          {t("too many outcomes to list → count with permutations and combinations", "list karne layak zyada outcomes → permutations/combinations se ginno")}
        </T>
      </Fade>

      {/* beat 3 — LEFT: order matters */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={roundRectD(100, 262, 400, 85, 12)} stroke={GREEN} sw={2.2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={300} y={290} size={16} fill={INK} weight={700}>
          {t("order matters", "order matter karta hai")}
        </T>
        <T x={300} y={325} size={19} fill={GREEN} weight={800}>
          {"nPr = n! / (n−r)!"}
        </T>
      </Fade>

      {/* beat 4 — RIGHT: order doesn't matter */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={roundRectD(580, 262, 400, 85, 12)} stroke={GREEN} sw={2.2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={780} y={290} size={16} fill={INK} weight={700}>
          {t("order doesn't matter", "order matter nahi karta")}
        </T>
        <T x={780} y={325} size={19} fill={GREEN} weight={800}>
          {"nCr = n! / (r!(n−r)!)"}
        </T>
      </Fade>

      {/* beat 5 — GUARDRAIL, HIGH */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={140} y={370} w={800} h={48} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t("first question, ALWAYS: does ORDER matter? Arrangements → nPr. Selections → nCr.", "pehla sawaal, HAMESHA: ORDER matter karta hai? Arrangements → nPr. Selections → nCr.")}
        </Chip>
      </Fade>

      {/* beat 6 — GUARDRAIL */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={160} y={432} w={760} h={44} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("count n(E) and n(S) the SAME way — both ordered, or both unordered", "n(E) aur n(S) SAME tareeke se ginno — dono ordered, ya dono unordered")}
        </Chip>
      </Fade>
    </Scene>
  );
}

/**
 * M11 Ch01 · Section 26 — "Advanced: the two definitions of A △ B agree"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: worked_examples (ADVANCED).
 *
 * 7 beats (board_reveal_at_english has 7 entries, indices 0..6):
 *  0 title (always-on)
 *  1 CLAIM: (A∪B)−(A∩B) = (A−B)∪(B−A) + REPRESENT: mini-Venn, both crescents shaded
 *  2 element-chase: x∈LHS ⇔ (in≥1) AND NOT(in both)
 *  3 ⇔ in exactly one of A, B
 *  4 ⇔ (x∈A,x∉B) OR (x∈B,x∉A)
 *  5 ⇔ x∈(A−B)∪(B−A) = RHS
 *  6 GUARDRAIL: every step iff ⇒ equal; symmetric diff = one or other, not both
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "(A∪B)−(A∩B) = (A−B)∪(B−A)" (19) | T mid | x540 y110
 *  b1 | mini-Venn box(453,150,174,120) A(513,210,50) B(567,210,50), both crescents shaded
 *  b1 | "both sides = this shaded region" | T mid script | x540 y285
 *  b2 | proof line 1                  | T mid (15) | x540 y330
 *  b3 | proof line 2 (green)          | T mid (15) | x540 y365
 *  b4 | proof line 3                  | T mid (15) | x540 y400
 *  b5 | proof line 4                  | T mid (15) | x540 y435
 *  b6 | "every step iff ⇒ equal" (red)| T mid | x540 y505
 *  b6 | "= one or other, NOT both" (green script) | T mid | x540 y535
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, VennShade } from "./math-kit";

const AMBER_FILL = "#EEA31F";

export default function M11Ch01Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const A = { cx: 513, cy: 210, r: 50 };
  const B = { cx: 567, cy: 210, r: 50 };
  const box = { x: 453, y: 150, w: 174, h: 120 };

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("prove both A △ B definitions match", "A △ B ke dono definitions prove karo")}
        </T>
      </Fade>

      {/* beat 1 — CLAIM + REPRESENT */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={110} size={18} fill={INK} weight={800}>
          {"(A∪B) − (A∩B)   =   (A−B) ∪ (B−A)"}
        </T>
      </Fade>
      <VennShade on={beat >= 1} delay={dl(1, 1.6)} include={[A]} exclude={[B]} fill={AMBER_FILL} {...box} />
      <VennShade on={beat >= 1} delay={dl(1, 1.6)} include={[B]} exclude={[A]} fill={AMBER_FILL} {...box} />
      <Draw on={beat >= 1} d={circleD(A.cx, A.cy, A.r)} stroke={INK} sw={2} delay={dl(1, 1)} dur={0.5} />
      <Draw on={beat >= 1} d={circleD(B.cx, B.cy, B.r)} stroke={INK} sw={2} delay={dl(1, 1.3)} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={540} y={285} size={14} fill={MUTED} script>
          {t("both sides = this shaded region", "dono sides = yehi shaded region")}
        </T>
      </Fade>

      {/* beat 2 — element-chase step 1 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={330} size={15} fill={INK} weight={600}>
          {"x ∈ LHS  ⇔  (x∈A or x∈B)  AND  NOT(x∈A and x∈B)"}
        </T>
      </Fade>

      {/* beat 3 — the key reading */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={365} size={16} fill={GREEN} weight={800}>
          {"⇔  in exactly one of A, B"}
        </T>
      </Fade>

      {/* beat 4 — splits into two cases */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={400} size={15} fill={INK} weight={600}>
          {"⇔  (x∈A, x∉B)  OR  (x∈B, x∉A)"}
        </T>
      </Fade>

      {/* beat 5 — lands on RHS */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={435} size={15} fill={INK} weight={700}>
          {"⇔  x ∈ (A−B) ∪ (B−A)  =  RHS"}
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={505} size={17} fill={RED} weight={800}>
          {"every step is an iff  ⇒  LHS = RHS"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={535} size={15} fill={GREEN} script weight={700}>
          {t(
            "symmetric difference = “one or the other, NOT both”",
            "symmetric difference = “ek ya doosra, dono NAHI”"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

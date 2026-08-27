/**
 * M11 Ch01 · Section 21 — "De Morgan's laws: the operation flips"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 9.47, 25.26, 38.31, 47.19, 66.56, 77.14]):
 *  0 title (always-on)
 *  1 "not in (A or B)" = outside both = not in A AND not in B
 *  2 REPRESENT law 1: shade outside-both once, label it BOTH (A∪B)′ and A′∩B′
 *  3 REPRESENT law 2: shade everything-but-the-lens, label (A∩B)′ = A′∪B′
 *  4 element-chase: x∉(A∪B) ⟺ x∉A and x∉B
 *  5 GUARDRAIL one-liner: complement flips ∪→∩ and ∩→∪
 *  6 shading ILLUSTRATES; element-chasing PROVES
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "not in (A or B) = outside both = not A AND not B" | T mid | x540 y120
 *  b2 | D1 box(474,264,132,92) A(520,310,36) B(560,310,36), shade outside both
 *  b2 | "(A ∪ B)′  =  A′ ∩ B′" (17)  | T mid | x540 y372
 *  b3 | D2 box(474,369,132,92) same circles at cy=415, shade all-but-lens
 *  b3 | "(A ∩ B)′  =  A′ ∪ B′" (17)  | T mid | x540 y478
 *  b4 | element-chase line            | T mid | x540 y500
 *  b5 | flip one-liner (red)          | T mid | x540 y528
 *  b6 | illustrates-vs-proves         | T mid script | x540 y558
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, roundRectD, VennShade } from "./math-kit";

const AMBER_FILL = "#EEA31F";

function MiniVenn({
  on,
  delay,
  cx,
  cy,
  mode,
}: {
  on: boolean;
  delay: number;
  cx: number;
  cy: number;
  mode: "outside-both" | "all-but-lens";
}) {
  const r = 36;
  const A = { cx: cx - 20, cy, r };
  const B = { cx: cx + 20, cy, r };
  const box = { x: cx - 66, y: cy - 46, w: 132, h: 92 };
  return (
    <>
      <Draw on={on} d={roundRectD(box.x, box.y, box.w, box.h, 6)} stroke={MUTED} sw={1.6} delay={delay} dur={0.6} />
      {mode === "outside-both" ? (
        <VennShade on={on} delay={delay + 0.4} include={[]} exclude={[A, B]} fill={AMBER_FILL} {...box} />
      ) : (
        <>
          <VennShade on={on} delay={delay + 0.4} include={[A]} exclude={[B]} fill={AMBER_FILL} {...box} />
          <VennShade on={on} delay={delay + 0.4} include={[B]} exclude={[A]} fill={AMBER_FILL} {...box} />
          <VennShade on={on} delay={delay + 0.4} include={[]} exclude={[A, B]} fill={AMBER_FILL} {...box} />
        </>
      )}
      <Draw on={on} d={circleD(A.cx, A.cy, A.r)} stroke={INK} sw={2} delay={delay + 0.1} dur={0.5} />
      <Draw on={on} d={circleD(B.cx, B.cy, B.r)} stroke={INK} sw={2} delay={delay + 0.3} dur={0.5} />
      <Fade on={on} delay={delay + 0.9}>
        <T x={A.cx - A.r - 8} y={A.cy} size={13} fill={INK} anchor="end" weight={700}>A</T>
        <T x={B.cx + B.r + 8} y={B.cy} size={13} fill={INK} anchor="start" weight={700}>B</T>
      </Fade>
    </>
  );
}

export default function M11Ch01Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("complement a combination", "combination ka complement")}
        </T>
      </Fade>

      {/* beat 1 — the intuition */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={120} size={16} fill={INK} weight={700}>
          {t(
            "“not in (A or B)” = outside both = not in A AND not in B",
            "“(A or B) mein nahi” = dono ke bahar = A mein nahi AND B mein nahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — law 1 */}
      <MiniVenn on={beat >= 2} delay={dl(2, 0.3)} cx={540} cy={310} mode="outside-both" />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={540} y={372} size={17} fill={INK} weight={800}>
          {"(A ∪ B)′   =   A′ ∩ B′"}
        </T>
      </Fade>

      {/* beat 3 — law 2 */}
      <MiniVenn on={beat >= 3} delay={dl(3, 0.3)} cx={540} cy={415} mode="all-but-lens" />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={540} y={478} size={17} fill={INK} weight={800}>
          {"(A ∩ B)′   =   A′ ∪ B′"}
        </T>
      </Fade>

      {/* beat 4 — element-chase */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={503} size={14} fill={INK} weight={600}>
          {"x ∉ (A ∪ B)   ⇔   x ∉ A  and  x ∉ B"}
        </T>
      </Fade>

      {/* beat 5 — GUARDRAIL: the flip */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={530} size={15} fill={RED} weight={700}>
          {t("complement flips: ∪ → ∩   and   ∩ → ∪", "complement flip karta hai: ∪ → ∩   aur   ∩ → ∪")}
        </T>
      </Fade>

      {/* beat 6 — division of labour */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={560} size={14} fill={MUTED} script>
          {t(
            "shading ILLUSTRATES it; element-chasing PROVES it",
            "shading ILLUSTRATE karta hai; element-chase PROVE karta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

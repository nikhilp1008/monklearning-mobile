/**
 * M11 Ch14 · Section 22 — "Deriving the general addition rule"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: formulas. FLAGGED for extra
 * scrutiny — THE central derivation of the chapter, explicitly called
 * out in the task brief as a VennShade carve-up exactly like Chapter 1:
 * shade A, shade B−A as disjoint pieces, sum them. Two-column layout,
 * LEFT = the Venn carve-up (built and re-annotated, never erased), RIGHT
 * = the algebra chain, both culminating in the boxed HIGH final rule.
 *
 * Beats (board_reveal_at_english [0,18.6,29.35,38.57,47.79,54.87,71.17,82.01]):
 *  0 heading: "R4 — why we subtract the overlap"
 *  1 diagram: box S, circles A/B, shade ALL of A (green) + B−A (amber) —
 *    the two disjoint carve-up slabs
 *  2 formula: A∪B = A∪(B−A), A∩(B−A) = ∅
 *  3 formula: P(A∪B) = P(A) + P(B−A)  (Axiom 3)
 *  4 diagram: ring the lens A∩B — "this part of B overlaps A"
 *  5 formula: P(B) = P(A∩B) + P(B−A) ⇒ P(B−A) = P(B) − P(A∩B)
 *  6 (HIGH, boxed) P(A∪B) = P(A) + P(B) − P(A∩B)
 *  7 caption: lens counted in BOTH P(A) and P(B) → subtract one copy
 *
 * Layout plan (LEFT diagram box x130..610 y120..380; RIGHT column
 * x=700 anchor start; longer language counts):
 *  b1 | box + circles A(290,250,90)/B(400,250,90) + shading | Draw/VennShade
 *  b2 | "A∪B = A∪(B−A)" / "A∩(B−A)=∅" (17/13)             | T st  | x700..1020 y160..195
 *  b3 | "P(A∪B)=P(A)+P(B−A)" / "(Axiom 3)" (17/12)           | T st  | y225..255
 *  b4 | ring on lens cx345 cy250 rx50 ry55 + "A∩B" label       | Draw/T| x295..397 y178..324
 *  b5 | "P(B)=P(A∩B)+P(B−A)" / "⇒ P(B−A)=P(B)−P(A∩B)" (17)      | T st  | y290..320
 *  b6 | boxed HIGH "P(A∪B)=P(A)+P(B)−P(A∩B)" (22, green)          | Draw/T| x220..860 y430..485
 *  b7 | caption + arrow at lens (14, red)                            | T mid | x350..900 y500..535
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD, INK, MUTED, GREEN, RED, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { circleD, roundRectD, VennShade } from "./math-kit";

const AMBER_FILL = "#EEA31F";
const GREEN_FILL = "#1C9B57";

export default function M11Ch14Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const box = { x: 130, y: 120, w: 480, h: 260 };
  const A = { cx: 290, cy: 250, r: 90 };
  const B = { cx: 400, cy: 250, r: 90 };

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("carve into disjoint pieces — axiom 3 only works on those", "disjoint pieces mein todo — axiom 3 sirf unhi pe chalta hai")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t("R4 — why we subtract the overlap", "R4 — overlap kyun subtract karte hain")}
        </T>
      </Fade>

      {/* beat 1 — the carve-up diagram */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={roundRectD(box.x, box.y, box.w, box.h, 6)} stroke={MUTED} sw={2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={box.x + 20} y={box.y + 24} size={14} fill={MUTED} anchor="start" weight={700}>S</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={circleD(A.cx, A.cy, A.r)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={circleD(B.cx, B.cy, B.r)} stroke={INK} sw={2.2} dur={0.6} />
      <VennShade on={beat >= 1} delay={dl(1, 2.2)} include={[A]} fill={GREEN_FILL} opacity={0.32} {...box} />
      <VennShade on={beat >= 1} delay={dl(1, 2.6)} include={[B]} exclude={[A]} fill={AMBER_FILL} opacity={0.4} {...box} />
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <T x={250} y={165} size={16} fill={GREEN} weight={800}>A</T>
        <T x={460} y={200} size={15} fill={AMBER_DARK} weight={800}>{"B − A"}</T>
        <T x={440} y={165} size={16} fill={INK} weight={700}>B</T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={700} y={168} size={17} fill={INK} anchor="start" weight={700}>
          {"A∪B = A∪(B−A)"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={700} y={193} size={13} fill={MUTED} anchor="start">
          {"A∩(B−A) = ∅"}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={700} y={232} size={17} fill={INK} anchor="start" weight={700}>
          {"P(A∪B) = P(A) + P(B−A)"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={700} y={253} size={12} fill={MUTED} anchor="start">
          {t("(Axiom 3)", "(Axiom 3)")}
        </T>
      </Fade>

      {/* beat 4 — ring the lens */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={ringD(345, 250, 50, 55)} stroke={RED} sw={2.4} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={345} y={253} size={14} fill={RED} weight={800}>
          {"A∩B"}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={700} y={297} size={16} fill={INK} anchor="start" weight={700}>
          {"P(B) = P(A∩B) + P(B−A)"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={700} y={322} size={16} fill={INK} anchor="start" weight={700}>
          {"⇒ P(B−A) = P(B) − P(A∩B)"}
        </T>
      </Fade>

      {/* beat 6 — HIGH boxed final rule */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d={roundRectD(220, 430, 640, 56, 12)} stroke={GREEN} sw={2.6} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={465} size={22} fill={GREEN} weight={800}>
          {"P(A∪B) = P(A) + P(B) − P(A∩B)"}
        </T>
      </Fade>

      {/* beat 7 — closing caption */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d={arrowD(500, 400, 450, 335)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={620} y={512} size={14} fill={RED} weight={700}>
          {t("lens counted in BOTH P(A) and P(B) → subtract one copy", "lens dono P(A) aur P(B) mein count hua → ek copy hatao")}
        </T>
      </Fade>
    </Scene>
  );
}

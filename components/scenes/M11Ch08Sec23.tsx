/**
 * M11 Ch08 · Section 23 — "A GP is repeated multiplication — the chessboard"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=concept. Opens subtopic 3 (GP).
 *
 * Beats (en [0, 11.43, 29.18, 42.33, 54.36, 68.78, 83.8, 104.45]):
 *  0 title (always-on)
 *  1 THE DEMO — two panels: chessboard squares (left, 1,2,4,8,16 doubling) +
 *     exponential graph (right, a_n vs n curving upward with 5 discrete dots)
 *  2 defining property: ratio never changes
 *  3 formula: r = a_2/a_1 = a_3/a_2 = ... = a_k/a_(k-1)
 *  4 real-world examples
 *  5 red-margin: GP is exponential — log a_n plots as a line
 *  6 r>1 / 0<r<1 / r<0 behavior
 *  7 closer: AP always diverges, GP converges iff |r|<1
 *
 * Layout plan:
 *  b1 | LEFT chessboard: 5 squares x93..287 y100..134 · "→⋯" cx310 ·
 *       caption1 bl155 · caption2 bl175 cx200 | RIGHT graph: axes
 *       origin(650,230) x650..900 y100..230 · curve+5 dots · caption bl250 cx775
 *  b2 | text bl280 cx540
 *  b3 | formula bl312 cx540
 *  b4 | text bl344 cx540
 *  b5 | red bar x76 y370..440 · text bl390/430 x96
 *  b6 | text bl465 cx540
 *  b7 | text bl495 cx540
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, curveD, IntervalDot } from "./math-kit";

export default function M11Ch08Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const squares = [
    { x: 93, val: "1", fill: "#FEF3C7" },
    { x: 133, val: "2", fill: "#FDE68A" },
    { x: 173, val: "4", fill: "#FCD34D" },
    { x: 213, val: "8", fill: "#FBBF24" },
    { x: 253, val: "16", fill: "#F59E0B" },
  ];

  const curvePts = [
    { x: 665, y: 220 },
    { x: 705, y: 205 },
    { x: 745, y: 180 },
    { x: 785, y: 145 },
    { x: 825, y: 105 },
  ];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("Geometric progression: multiply by a fixed factor, over and over", "Geometric progression: baar baar wahi factor multiply karo")}
        </T>
      </Fade>

      {/* beat 1 — LEFT: chessboard doubling */}
      {squares.map((s, i) => (
        <Fade key={i} on={beat >= 1} delay={dl(1, 0.3 + i * 0.25)}>
          <Rect x={s.x} y={100} width={34} height={34} fill={s.fill} stroke={AMBER_DARK} strokeWidth={1.6} />
          <T x={s.x + 17} y={122} size={13} fill="#7C2D12" anchor="middle">{s.val}</T>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={310} y={122} size={16} fill={MUTED} anchor="middle">{"→ ⋯"}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={200} y={155} size={13} fill={INK} anchor="middle" script>
          {t("a = 1, r = 2 : doubling detonates", "a = 1, r = 2 : doubling detonate hota hai")}
        </T>
        <T x={200} y={175} size={12} fill={INK_LIGHT} anchor="middle">
          {"total = 2⁶⁴ - 1 ≈ 1.8×10¹⁹ grains"}
        </T>
      </Fade>

      {/* beat 1 — RIGHT: exponential graph */}
      <CartesianAxes on={beat >= 1} delay={dl(1, 2.6)} originX={650} originY={230} xLeft={650} xRight={900} yTop={100} yBottom={230} showTicks={false} />
      <Draw on={beat >= 1} delay={dl(1, 3.0)} d={curveD(curvePts)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      {curvePts.map((p, i) => (
        <IntervalDot key={i} on={beat >= 1} delay={dl(1, 3.4 + i * 0.2)} x={p.x} y={p.y} open={false} r={4.5} stroke={AMBER_DARK} />
      ))}
      <Fade on={beat >= 1} delay={dl(1, 4.3)}>
        <T x={775} y={250} size={13} fill={INK_LIGHT} anchor="middle" script>
          {t("a_n vs n : curves upward", "a_n vs n : upar ki taraf curve")}
        </T>
      </Fade>

      {/* beat 2 — defining property */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={280} size={15} fill={INK} anchor="middle" script>
          {t(
            "the defining property: the RATIO between consecutive terms never changes",
            "defining property: consecutive terms ka RATIO kabhi nahi badalta"
          )}
        </T>
      </Fade>

      {/* beat 3 — formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={312} size={16} fill={INK} anchor="middle">
          {"r = a_2/a_1 = a_3/a_2 = ... = a_k/a_(k-1)"}
        </T>
      </Fade>

      {/* beat 4 — real-world examples */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={344} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "compound interest, depreciation, viral spread — all everyday GPs",
            "compound interest, depreciation, viral spread — sab everyday GPs"
          )}
        </T>
      </Fade>

      {/* beat 5 — red-margin: GP is exponential */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 370 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={390} size={15} fill={RED} anchor="start" script>
          {t("a GP is 'exponential':", "GP 'exponential' hai:")}
        </T>
        <T x={96} y={430} size={15} fill={RED} anchor="start">
          {"log a_n plots as a straight line"}
        </T>
      </Fade>

      {/* beat 6 — r behavior */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={465} size={14} fill={INK} anchor="middle">
          {"r > 1: explosive growth.  0 < r < 1: decay.  r < 0: alternating signs."}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={495} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "an infinite AP always diverges; an infinite GP converges iff |r| < 1",
            "infinite AP hamesha diverge karta hai; infinite GP converge karta hai agar |r| < 1"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

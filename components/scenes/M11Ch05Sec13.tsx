/**
 * M11 Ch05 · Section 13 — "The answer gains a dimension: half-planes"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. First section of subtopic 2 (Two Variables) —
 * uses CartesianAxes + a drawn boundary line + HalfPlaneShade (real SVG clip
 * computed from a test point, never hand-eyeballed).
 *
 * Beats (en [0,13.82,20.22,32.94,41.56,52.14,64.34,73.81], hi
 * [0,12.12,19.03,31.83,39,48.38,57.69,67.07]):
 *  0 heading — CartesianAxes drawn (structure)
 *  1 text: recall 1-variable (mini inset number line, top-right corner)
 *  2 text: 2 variables → region of the plane (x/y axis labels land)
 *  3 formula: x + y = 4 — the boundary line drawn
 *  4 text: slices the plane into two pieces — first sample point (1,1)
 *  5 text: every point sits in exactly one place — points (2,2) on the line,
 *    (5,3) on the far side
 *  6 note (red-margin, high): answers with a REGION, never a point
 *  7 diagram: both half-planes shaded (test-point computed) + labeled
 *
 * Layout plan:
 *  b0 | CartesianAxes               | Draw  | origin(140,480) x90..960 y145..520
 *  b1 | mini inset number line      | Draw  | x820..950 y115
 *  b2 | "x"/"y" axis labels (16,ink)| T     | x955,500 / x125,150
 *  b3 | line x+y=4 + "x+y=4" label  | Draw+T| (140,220)-(400,480) · x300 y330
 *  b3 | "4" numerals (13,muted)     | T     | x400,500 / x115,225
 *  b4 | point (1,1) + tag           | circle/T | (205,415) · (213,412)
 *  b5 | point (2,2) on line + tag   | circle/T | (270,350) · (280,347)
 *  b5 | point (5,3) + tag           | circle/T | (465,285) · (473,282)
 *  b6 | boxed guardrail (red)       | Chip  | x170..910 y530..580
 *  b7 | HalfPlaneShade ×2 + labels  | Fade  | x180 y470(amber) / x650 y220(green)
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, GREEN_DARK, RED, AMBER, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, HalfPlaneShade, axisD, tickD, lineD } from "./math-kit";

export default function M11Ch05Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("one boundary line, TWO half-planes", "ek boundary line, DO half-planes")}
        </T>
      </Fade>

      {/* beat 0 — the plane */}
      <CartesianAxes on={beat >= 0} delay={dl(0, 0.3)} originX={140} originY={480} xLeft={90} xRight={960} yTop={145} yBottom={520} step={65} />

      {/* beat 1 — recall: 1 variable was a stretch of the line */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={axisD(815, 950, 115)} stroke={MUTED} sw={1.4} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={lineD(880, 115, 935, 115)} stroke={GREEN} sw={3} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={882} y={130} size={10} fill={MUTED}>
          {t("1 variable", "1 variable")}
        </T>
      </Fade>

      {/* beat 2 — now a plane: label both axes */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={955} y={500} size={16} fill={INK}>
          x
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={125} y={150} size={16} fill={INK}>
          y
        </T>
      </Fade>

      {/* beat 3 — the boundary line, x + y = 4 */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={lineD(140, 220, 400, 480)} stroke={INK} sw={2.4} dur={0.9} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={300} y={330} size={16} fill={INK} weight={700} anchor="start">
          x + y = 4
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={400} y={500} size={13} fill={MUTED}>
          4
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <T x={115} y={225} size={13} fill={MUTED} anchor="end">
          4
        </T>
      </Fade>

      {/* beat 4 — first sample point */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Circle cx={205} cy={415} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={213} y={412} size={11} fill={MUTED} anchor="start">
          (1, 1)
        </T>
      </Fade>

      {/* beat 5 — a point on the line, and one on the far side */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Circle cx={270} cy={350} r={5} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={280} y={347} size={11} fill={MUTED} anchor="start">
          {t("(2, 2) — on the line", "(2, 2) — line pe")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <Circle cx={465} cy={285} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={473} y={282} size={11} fill={MUTED} anchor="start">
          (5, 3)
        </T>
      </Fade>

      {/* beat 6 — the guardrail */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={170} y={530} w={740} h={50} fill={CREAM} stroke={RED} textFill={RED} size={17}>
          {t(
            "a two-variable inequality answers with a REGION, never a point",
            "do-variable inequality ka jawaab REGION hota hai, point kabhi nahi"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — both half-planes, shaded from real test points */}
      <HalfPlaneShade
        on={beat >= 7}
        delay={dl(7, 0.3)}
        x1={140}
        y1={220}
        x2={400}
        y2={480}
        testX={140}
        testY={480}
        boxX={90}
        boxY={145}
        boxW={870}
        boxH={375}
        fill={AMBER}
        opacity={0.18}
      />
      <HalfPlaneShade
        on={beat >= 7}
        delay={dl(7, 0.6)}
        x1={140}
        y1={220}
        x2={400}
        y2={480}
        testX={700}
        testY={200}
        boxX={90}
        boxY={145}
        boxW={870}
        boxH={375}
        fill={GREEN}
        opacity={0.18}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={180} y={470} size={16} fill={AMBER_DARK} weight={700} anchor="start">
          x + y &lt; 4
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={650} y={220} size={16} fill={GREEN_DARK} weight={700} anchor="start">
          x + y &gt; 4
        </T>
      </Fade>
    </Scene>
  );
}

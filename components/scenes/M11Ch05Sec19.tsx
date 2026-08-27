/**
 * M11 Ch05 · Section 19 — "Worked example: solve 2x+3y ≤ 12 graphically (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. First full worked example of subtopic 2 — the
 * graph IS the content; annotations sit directly on the relevant elements
 * rather than in a separate caption column.
 *
 * Beats (en [0,12.54,32,41.98,54.19,58.62,69.63,83.11], hi
 * [0,11.78,30.55,39.68,52.48,57.43,68.86,77.82]):
 *  0 heading: the problem — axes drawn
 *  1 text: intercepts x=6 (y=0), y=4 (x=0) — dots + ticks
 *  2 text: ≤ ⇒ solid line, boundary included — line drawn + annotation
 *  3 text: line misses origin, test (0,0) — origin dot (amber)
 *  4 formula (high): 2(0)+3(0)=0 ≤ 12 ✓ — computation + checkmark
 *  5 text: shade the half-plane containing the origin — HalfPlaneShade
 *  6 text: solution — all points on/below the line, boundary included
 *  7 diagram: region label 2x+3y≤12 settles in
 *
 * Layout plan:
 *  b0 | heading caption (16,ink)   | T mid | bl 112
 *  b0 | axes                       | Draw  | origin(140,500) x100..820 y140..500
 *  b1 | intercept dots + labels    | circle/T | (800,500)"(6,0)" / (140,180)"(0,4)"
 *  b1 | ticks + numerals 2,4,6/2,4 | Draw+T
 *  b2 | solid line + annotation    | Draw+T | (140,180)-(800,500) · (500,320)
 *  b3 | origin dot (amber) + label | circle/T | (140,500) · (100,520)
 *  b4 | computation + check (12,muted)+Draw | (160,478) · check(300,472)
 *  b5 | HalfPlaneShade (green)     | Fade
 *  b6 | solution caption (15,ink,scr)| T mid | bl 545
 *  b7 | region label (15,green)    | T st  | (280,420)
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, GREEN_DARK, AMBER, RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, HalfPlaneShade, tickD, checkD, lineD } from "./math-kit";

const ORIGIN_X = 140;
const ORIGIN_Y = 500;
const XSTEP = 110;
const YSTEP = 80;

export default function M11Ch05Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("solid line, origin test, shade the true side", "solid line, origin test, sach wali side shade karo")}
        </T>
      </Fade>

      {/* beat 0 — the problem, and the axes */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={112} size={16} fill={INK}>
          {t("solve 2x + 3y ≤ 12 graphically", "2x + 3y ≤ 12 ko graph se solve karo")}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 0} delay={dl(0, 1.0)} originX={ORIGIN_X} originY={ORIGIN_Y} xLeft={100} xRight={820} yTop={140} yBottom={500} showTicks={false} />

      {/* beat 1 — the two intercepts */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d={[2, 4, 6].map((v) => tickD(ORIGIN_X + v * XSTEP, ORIGIN_Y, 6)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.7)}
        d={[2, 4].map((v) => tickD(ORIGIN_X, ORIGIN_Y - v * YSTEP, 6)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.5}
      />
      {[2, 4, 6].map((v) => (
        <Fade key={v} on={beat >= 1} delay={dl(1, 1.1)}>
          <T x={ORIGIN_X + v * XSTEP} y={518} size={12} fill={MUTED}>
            {v}
          </T>
        </Fade>
      ))}
      {[2, 4].map((v) => (
        <Fade key={v} on={beat >= 1} delay={dl(1, 1.3)}>
          <T x={ORIGIN_X - 14} y={ORIGIN_Y - v * YSTEP + 4} size={12} fill={MUTED} anchor="end">
            {v}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <Circle cx={ORIGIN_X + 6 * XSTEP} cy={ORIGIN_Y} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={ORIGIN_X + 6 * XSTEP + 10} y={ORIGIN_Y - 8} size={12} fill={MUTED} anchor="start">
          (6, 0)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Circle cx={ORIGIN_X} cy={180} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={ORIGIN_X + 10} y={176} size={12} fill={MUTED} anchor="start">
          (0, 4)
        </T>
      </Fade>

      {/* beat 2 — the solid boundary line */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={lineD(ORIGIN_X, 180, ORIGIN_X + 6 * XSTEP, ORIGIN_Y)} stroke={INK} sw={2.4} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={500} y={318} size={12} fill={MUTED} anchor="start">
          {t("solid — boundary included", "solid — boundary included hai")}
        </T>
      </Fade>

      {/* beat 3 — test the origin */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Circle cx={ORIGIN_X} cy={ORIGIN_Y} r={6} fill={AMBER} stroke={INK} strokeWidth={1.4} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={ORIGIN_X - 12} y={ORIGIN_Y + 20} size={12} fill={MUTED} anchor="end">
          (0, 0)
        </T>
      </Fade>

      {/* beat 4 — the check */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={160} y={478} size={13} fill={INK} anchor="start">
          2(0)+3(0) = 0 ≤ 12
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.0)} d={checkD(365, 472, 14)} stroke={GREEN} sw={2.6} dur={0.4} />

      {/* beat 5 — shade the origin's half-plane */}
      <HalfPlaneShade
        on={beat >= 5}
        delay={dl(5, 0.3)}
        x1={ORIGIN_X}
        y1={180}
        x2={ORIGIN_X + 6 * XSTEP}
        y2={ORIGIN_Y}
        testX={ORIGIN_X}
        testY={ORIGIN_Y}
        boxX={100}
        boxY={140}
        boxW={720}
        boxH={360}
        fill={GREEN}
        opacity={0.18}
      />

      {/* beat 6 — the solution, stated */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={545} size={15} fill={INK} script>
          {t(
            "solution: all points on or below the line, boundary included",
            "solution: line ke upar ya neeche har point, boundary included"
          )}
        </T>
      </Fade>

      {/* beat 7 — the region, formally labeled */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={220} y={420} size={15} fill={GREEN_DARK} weight={700} anchor="start">
          2x + 3y ≤ 12
        </T>
      </Fade>
    </Scene>
  );
}

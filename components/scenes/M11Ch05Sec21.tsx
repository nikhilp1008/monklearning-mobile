/**
 * M11 Ch05 · Section 21 — "Worked example: corner points of a feasible triangle"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. System x+y≤4, x≥1, y≥0 — bounded triangle with
 * vertices (1,0), (4,0), (1,3), found by pairwise intersection.
 *
 * Beats (en [0,20.14,31.06,50.01,65.37,76.54,91.82,104.45], hi
 * [0,18.77,28.76,47.1,60.5,70.57,88.15,101.38]):
 *  0 heading: the problem — axes drawn
 *  1 text: each constraint is a half-plane; feasible region = overlap
 *  2 text: describe each constraint — 3 boundary lines drawn + triangle shaded
 *  3 text: vertices are pairwise intersections — 3 unlabeled dots appear
 *  4 formula: x=1, y=0 ⇒ (1,0) — vertex 1 labeled
 *  5 formula: x+y=4,y=0⇒(4,0); x+y=4,x=1⇒(1,3) — vertices 2,3 labeled
 *  6 note (red-margin, high): vertices (1,0),(4,0),(1,3) — a bounded triangle
 *  7 diagram: settled, "BOUNDED" tag
 *
 * Layout plan:
 *  b0 | heading caption (16,ink)   | T mid | bl 112
 *  b0 | axes                       | Draw  | origin(140,480) x100..700 y140..480
 *  b1 | caption (14,muted,scr)     | T mid | bl 145
 *  b2 | 3 boundary lines + labels  | Draw+T| x+y=4 (140,80)-(540,480) · x=1 (240,180)-(240,480)
 *  b2 | triangle shaded (green)    | path
 *  b3 | 3 unlabeled vertex dots    | circle| (240,480)/(540,480)/(240,180)
 *  b4 | vertex 1 label+calc        | T st  | (250,505)
 *  b5 | vertex 2,3 labels+calc     | T st  | (550,505) / (250,165)
 *  b6 | boxed guardrail (14,red)   | Chip  | x180..900 y545..591
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, tickD, lineD } from "./math-kit";

const ORIGIN_X = 140;
const ORIGIN_Y = 480;
const STEP = 100;

export default function M11Ch05Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("three lines, three corners", "teen lines, teen corners")}
        </T>
      </Fade>

      {/* beat 0 — the problem, and axes */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={112} size={16} fill={INK}>
          {t("corner points of x+y≤4, x≥1, y≥0", "x+y≤4, x≥1, y≥0 ke corner points")}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 0} delay={dl(0, 1.0)} originX={ORIGIN_X} originY={ORIGIN_Y} xLeft={100} xRight={700} yTop={140} yBottom={480} showTicks={false} />
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.6)}
        d={[1, 2, 3, 4].map((v) => tickD(ORIGIN_X + v * STEP, ORIGIN_Y, 6)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.4}
      />
      {[1, 2, 3, 4].map((v) => (
        <Fade key={v} on={beat >= 0} delay={dl(0, 2.0)}>
          <T x={ORIGIN_X + v * STEP} y={498} size={12} fill={MUTED}>
            {v}
          </T>
        </Fade>
      ))}

      {/* beat 1 — half-planes, and their overlap */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={145} size={14} fill={MUTED} script>
          {t("each constraint is a half-plane — the feasible region is their overlap", "har constraint ek half-plane hai — feasible region unka overlap hai")}
        </T>
      </Fade>

      {/* beat 2 — the three boundary lines, and the shaded triangle */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Path d={`M ${ORIGIN_X + STEP} ${ORIGIN_Y} L ${ORIGIN_X + 4 * STEP} ${ORIGIN_Y} L ${ORIGIN_X + STEP} 180 Z`} fill={GREEN} opacity={0.18} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d={lineD(ORIGIN_X, 80, ORIGIN_X + 4 * STEP, ORIGIN_Y)} stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={350} y={220} size={12} fill={MUTED} anchor="start">
          x + y = 4
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.0)} d={lineD(ORIGIN_X + STEP, ORIGIN_Y, ORIGIN_X + STEP, 180)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <T x={250} y={300} size={12} fill={MUTED} anchor="start">
          x = 1
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.1)}>
        <T x={160} y={500} size={11} fill={MUTED} anchor="start">
          y = 0
        </T>
      </Fade>

      {/* beat 3 — the vertices, located */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Circle cx={ORIGIN_X + STEP} cy={ORIGIN_Y} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Circle cx={ORIGIN_X + 4 * STEP} cy={ORIGIN_Y} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <Circle cx={ORIGIN_X + STEP} cy={180} r={5} fill={INK} />
      </Fade>

      {/* beat 4 — vertex 1: x=1, y=0 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={ORIGIN_X + STEP + 10} y={505} size={12} fill={MUTED} anchor="start">
          x=1, y=0 ⇒ (1,0)
        </T>
      </Fade>

      {/* beat 5 — vertices 2 and 3 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={ORIGIN_X + 4 * STEP + 10} y={505} size={12} fill={MUTED} anchor="start">
          y=0 ⇒ (4,0)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={ORIGIN_X + STEP + 10} y={168} size={12} fill={MUTED} anchor="start">
          x=1 ⇒ (1,3)
        </T>
      </Fade>

      {/* beat 6 — the guardrail conclusion */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={180} y={545} w={720} h={46} fill={CREAM} stroke={RED} textFill={RED} size={15}>
          {t("vertices: (1,0), (4,0), (1,3) — a bounded triangle", "vertices: (1,0), (4,0), (1,3) — ek bounded triangle")}
        </Chip>
      </Fade>
    </Scene>
  );
}

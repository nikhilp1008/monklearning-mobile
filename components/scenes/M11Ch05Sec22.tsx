/**
 * M11 Ch05 · Section 22 — "Worked example: area of a feasible region by
 * shoelace (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. System x+y≤6, x+2y≤8, x≥0, y≥0 — quadrilateral
 * (0,0),(6,0),(4,2),(0,4), area found by shoelace.
 *
 * Beats (en [0,19.63,29.27,48.38,69.89,84.39,95.4,108.03,115.11], hi
 * [0,23.72,32.43,51.71,71.25,85.16,94.46,107.86,116.57]):
 *  0 heading: the problem — axes drawn
 *  1 text: non-negativity confines to Q1 — hunt the vertices
 *  2 text: (0,0) satisfies all four; x-axis tighter bound x≤6 ⇒ (6,0)
 *  3 text: subtract x+y=6 from x+2y=8 ⇒ y=2, x=4 — vertex (4,2), both lines drawn
 *  4 text: y-axis tighter bound y≤4 ⇒ (0,4)
 *  5 formula: (0,0)→(6,0)→(4,2)→(0,4) — cyclic list, quadrilateral shaded
 *  6 formula: 0+(6·2)+(4·4)+0 = 12+16 = 28
 *  7 formula (high, boxed green): Area = ½×28 = 14 sq units
 *  8 diagram: settled
 *
 * Layout plan:
 *  b0 | heading caption (16,ink)   | T mid | bl 108
 *  b0 | axes                       | Draw  | origin(140,420) x100..660 y130..420
 *  b2 | (0,0)/(6,0) dots + labels  | circle/T | (140,420)/(620,420)
 *  b3 | 2 boundary lines + (4,2)   | Draw/circle/T | (620,420)-(460,290)-(140,160)
 *  b4 | (0,4) dot + label          | circle/T | (140,160)
 *  b5 | cyclic list (16,ink,w700)  | T mid | bl 475
 *  b5 | quadrilateral shaded green | path
 *  b6 | shoelace sum (16,ink,w700) | T mid | bl 510
 *  b7 | boxed area (18,green)      | Chip  | x390..690 y535..577
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, tickD, lineD } from "./math-kit";

const OX = 140;
const OY = 420;
const XSTEP = 80;
const YSTEP = 65;
const V60 = { x: OX + 6 * XSTEP, y: OY }; // (6,0)
const V42 = { x: OX + 4 * XSTEP, y: OY - 2 * YSTEP }; // (4,2)
const V04 = { x: OX, y: OY - 4 * YSTEP }; // (0,4)

export default function M11Ch05Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("four corners, one shoelace sum", "chaar corners, ek shoelace sum")}
        </T>
      </Fade>

      {/* beat 0 — the problem, and axes */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={108} size={16} fill={INK}>
          {t("area of x+y≤6, x+2y≤8, x≥0, y≥0", "x+y≤6, x+2y≤8, x≥0, y≥0 ka area")}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 0} delay={dl(0, 1.0)} originX={OX} originY={OY} xLeft={100} xRight={660} yTop={130} yBottom={OY} showTicks={false} />
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.6)}
        d={[2, 4, 6].map((v) => tickD(OX + v * XSTEP, OY, 6)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.9)}
        d={[2, 4].map((v) => tickD(OX, OY - v * YSTEP, 6)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.4}
      />

      {/* beat 1 — confined to the first quadrant */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={140} size={14} fill={MUTED} script>
          {t("non-negativity confines us to Q1 — hunt the vertices", "non-negativity Q1 tak confine karta hai — vertices dhoondo")}
        </T>
      </Fade>

      {/* beat 2 — (0,0) and (6,0) */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Circle cx={OX} cy={OY} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={OX - 12} y={OY + 16} size={11} fill={MUTED} anchor="end">
          (0,0)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <Circle cx={V60.x} cy={V60.y} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={V60.x} y={V60.y + 20} size={11} fill={MUTED}>
          (6,0)
        </T>
      </Fade>

      {/* beat 3 — the two slant lines meet at (4,2) */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={lineD(V60.x, V60.y, V42.x, V42.y)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 0.9)} d={lineD(V42.x, V42.y, V04.x, V04.y)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <Circle cx={V42.x} cy={V42.y} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <T x={V42.x + 12} y={V42.y - 8} size={11} fill={MUTED} anchor="start">
          (4,2)
        </T>
      </Fade>

      {/* beat 4 — (0,4) */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Circle cx={V04.x} cy={V04.y} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={V04.x + 12} y={V04.y - 4} size={11} fill={MUTED} anchor="start">
          (0,4)
        </T>
      </Fade>

      {/* beat 5 — the cyclic vertex list, and the shaded quadrilateral */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Path
          d={`M ${OX} ${OY} L ${V60.x} ${V60.y} L ${V42.x} ${V42.y} L ${V04.x} ${V04.y} Z`}
          fill={GREEN}
          opacity={0.18}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={540} y={475} size={16} fill={INK} weight={700}>
          (0,0) → (6,0) → (4,2) → (0,4)
        </T>
      </Fade>

      {/* beat 6 — the shoelace sum */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={510} size={16} fill={INK} weight={700}>
          0 + (6·2) + (4·4) + 0 = 12 + 16 = 28
        </T>
      </Fade>

      {/* beat 7 — the area, boxed */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={390} y={535} w={300} h={42} fill={GREEN} textFill="#fff" size={18} script={false}>
          {t("Area = ½ × 28 = 14 sq units", "Area = ½ × 28 = 14 sq units")}
        </Chip>
      </Fade>
    </Scene>
  );
}

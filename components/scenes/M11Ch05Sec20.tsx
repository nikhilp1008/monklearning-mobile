/**
 * M11 Ch05 · Section 20 — "Worked example: y > 2x, the origin-on-the-line trap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. Speed-trap worked example: origin is useless
 * here (line passes through it), so a second/third test point is needed.
 *
 * Beats (en [0,10.07,25.17,38.66,51.63,59.82,73.39,89], hi
 * [0,10.84,24.41,38.14,51.63,58.71,69.38,82.18]):
 *  0 heading: the problem — y > 2x
 *  1 note (red-margin, high, THE TRAP): y=2x passes through origin, (0,0) useless
 *  2 text: substitute (0,0): 0>0 false — but decides neither side
 *  3 text: pick (1,0): is 0>2(1)? No
 *  4 text: so (1,0) NOT in region — dotted line drawn, shade the other side
 *  5 text: confirm (0,1): is 1>0? Yes — sits on that other side
 *  6 text: strict > ⇒ dotted line; solution = open half-plane above y=2x
 *  7 diagram: region label y>2x settles in
 *
 * Layout plan:
 *  b0 | heading caption (16,ink)   | T mid | bl 112
 *  b0 | axes                       | Draw  | origin(140,500) x100..700 y140..500
 *  b1 | origin dot (muted, useless)| circle| (140,500)
 *  b1 | trap caption (14,red,scr)  | T mid | bl 545
 *  b2 | computation (12,muted)     | T st  | (155,478)
 *  b3 | (1,0) dot (amber) + calc   | circle/T | (250,500) · (265,478)
 *  b4 | dotted line + (1,0) fails  | Draw  | (140,500)-(470,170)
 *  b4 | HalfPlaneShade (green)     | Fade
 *  b5 | (0,1) dot (green) + calc   | circle/T | (140,445) · (155,430)
 *  b6 | solution caption (15,ink,scr)| T mid | bl 575
 *  b7 | region label (15,green)    | T st  | (300,250)
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, crossD, INK, MUTED, GREEN, GREEN_DARK, AMBER, RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, HalfPlaneShade, tickD, checkD } from "./math-kit";

const ORIGIN_X = 140;
const ORIGIN_Y = 500;
const XSTEP = 110;
const YSTEP = 55;
const LINE_X2 = ORIGIN_X + 3 * XSTEP; // x=3
const LINE_Y2 = ORIGIN_Y - 6 * YSTEP; // y=6

export default function M11Ch05Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("when origin is USELESS: pick (1,0) or (0,1)", "jab origin USELESS ho: (1,0) ya (0,1) chuno")}
        </T>
      </Fade>

      {/* beat 0 — the problem, and axes */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={112} size={16} fill={INK}>
          {t("solve y > 2x graphically", "y > 2x ko graph se solve karo")}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 0} delay={dl(0, 1.0)} originX={ORIGIN_X} originY={ORIGIN_Y} xLeft={100} xRight={700} yTop={140} yBottom={500} showTicks={false} />
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.6)}
        d={[1, 2, 3].map((v) => tickD(ORIGIN_X + v * XSTEP, ORIGIN_Y, 6)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.4}
      />
      {[1, 2, 3].map((v) => (
        <Fade key={v} on={beat >= 0} delay={dl(0, 2.0)}>
          <T x={ORIGIN_X + v * XSTEP} y={518} size={12} fill={MUTED}>
            {v}
          </T>
        </Fade>
      ))}

      {/* beat 1 — THE TRAP: origin is on the line */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Circle cx={ORIGIN_X} cy={ORIGIN_Y} r={5} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={545} size={14} fill={RED} script>
          {t(
            "TRAP: y=2x passes through the origin — (0,0) is useless",
            "TRAP: y=2x origin se guzarti hai — (0,0) useless hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — substitute the origin anyway */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={155} y={478} size={12} fill={MUTED} anchor="start">
          0 &gt; 0? FALSE — {t("decides neither side", "koi side decide nahi")}
        </T>
      </Fade>

      {/* beat 3 — pick (1,0) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Circle cx={ORIGIN_X + XSTEP} cy={ORIGIN_Y} r={5} fill={AMBER} stroke={INK} strokeWidth={1.2} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={ORIGIN_X + XSTEP + 12} y={ORIGIN_Y + 18} size={12} fill={MUTED} anchor="start">
          {t("(1,0): 0 > 2(1)? NO", "(1,0): 0 > 2(1)? NAHI")}
        </T>
      </Fade>

      {/* beat 4 — (1,0) fails; draw the dotted line; shade the other side */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={crossD(ORIGIN_X + XSTEP - 5, ORIGIN_Y - 5, 10, 10)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <Line x1={ORIGIN_X} y1={ORIGIN_Y} x2={LINE_X2} y2={LINE_Y2} stroke={INK} strokeWidth={2.4} strokeDasharray="7 5" />
      </Fade>
      <HalfPlaneShade
        on={beat >= 4}
        delay={dl(4, 1.4)}
        x1={ORIGIN_X}
        y1={ORIGIN_Y}
        x2={LINE_X2}
        y2={LINE_Y2}
        testX={ORIGIN_X}
        testY={445}
        boxX={100}
        boxY={140}
        boxW={600}
        boxH={360}
        fill={GREEN}
        opacity={0.16}
      />

      {/* beat 5 — confirm with (0,1) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Circle cx={ORIGIN_X} cy={445} r={5} fill={GREEN} stroke={INK} strokeWidth={1.2} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d={checkD(ORIGIN_X + 28, 440, 13)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={ORIGIN_X + 48} y={444} size={12} fill={MUTED} anchor="start">
          {t("(0,1): 1 > 0? YES", "(0,1): 1 > 0? HAAN")}
        </T>
      </Fade>

      {/* beat 6 — the solution, stated */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={575} size={15} fill={INK} script>
          {t(
            "strict > ⇒ dotted line — the open half-plane above y=2x",
            "strict > ⇒ dotted line — y=2x ke upar wala open half-plane"
          )}
        </T>
      </Fade>

      {/* beat 7 — the region, formally labeled */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={300} y={250} size={15} fill={GREEN_DARK} weight={700} anchor="start">
          y &gt; 2x
        </T>
      </Fade>
    </Scene>
  );
}

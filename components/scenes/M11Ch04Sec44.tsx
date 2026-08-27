/**
 * M11 Ch04 · Section 44 — "Roots live on a circle, equally spaced"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — the core geometric insight of the subtopic.
 *
 * Beats (board_reveal_at_english [0, 7.17, 15.62, 27.82, 38.4, 45.91, 57.69, 67.75]):
 *  0 subtitle: taking an nth root divides the angle
 *  1 text: divides angle by n, but angle known only up to 2π
 *  2 text: so there are n legitimate answers, spaced 2π/n apart
 *  3 THE DIAGRAM: two n-gons side by side — n=3 triangle (left), n=4 square (right)
 *  4 text "circle of radius r^(1/n)" + radius line drawn on the n=3 diagram
 *  5 formula z^n = r^n·e^(inθ) (De Moivre, Euler form) — chip
 *  6 guardrail (red-margin, high): powers multiply the angle; roots divide it over n branches
 *  7 text: nth roots of unity = same polygon on the unit circle, one vertex at 1 (ring the n=4
 *    diagram's 0° vertex — it already sits at angle 0, i.e. at "1")
 *
 * Layout plan:
 *  b0 | subtitle (15,amber_dark,w700)      | T mid | x540 y90
 *  b1 | text line (15,ink)                 | T mid | x540 y120
 *  b2 | text line (15,ink)                 | T mid | x540 y152
 *  b3 | n=3 circle+triangle c(280,380) r95  | Draw
 *  b3 | n=4 circle+square  c(800,380) r95   | Draw
 *  b3 | labels "n = 3" / "n = 4"            | T mid | (280,505) (800,505)
 *  b4 | shared caption (15,ink)             | T mid | x540 y225
 *  b4 | radius line + "r^(1/n)" on n=3 diag | Draw/T
 *  b5 | chip "z^n = r^n·e^(inθ)"            | Chip  | x540 c, y498..530
 *  b6 | red guardrail chip                  | Chip  | x540 c, y544..576
 *  b7 | ring + "1" label on n=4's 0° vertex | Draw/T
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { pointOnCircle, circleD, lineD } from "./math-kit";

const deg = (d: number) => (d * Math.PI) / 180;

// n = 3 (triangle), start angle 90° (apex up)
const CXL = 280, CYL = 380, RL = 95;
const N3_START = deg(90);
const n3Pts = [0, 1, 2].map((k) => pointOnCircle(CXL, CYL, RL, N3_START + k * ((2 * Math.PI) / 3)));

// n = 4 (square), start angle 0° (vertex sits on the +Re axis = "1")
const CXR = 800, CYR = 380, RR = 95;
const N4_START = 0;
const n4Pts = [0, 1, 2, 3].map((k) => pointOnCircle(CXR, CYR, RR, N4_START + k * ((2 * Math.PI) / 4)));

const n3Path = `M ${n3Pts[0].x} ${n3Pts[0].y} L ${n3Pts[1].x} ${n3Pts[1].y} L ${n3Pts[2].x} ${n3Pts[2].y} Z`;
const n4Path = `M ${n4Pts[0].x} ${n4Pts[0].y} L ${n4Pts[1].x} ${n4Pts[1].y} L ${n4Pts[2].x} ${n4Pts[2].y} L ${n4Pts[3].x} ${n4Pts[3].y} Z`;

const RADIUS_LABEL = pointOnCircle(CXL, CYL, RL / 2, N3_START);
const RING1_LABEL = pointOnCircle(CXR, CYR, RR + 40, N4_START);

export default function M11Ch04Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Roots Live on a Circle, Equally Spaced", "Roots Ek Circle Par Rehte Hain, Equally Spaced")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Taking an nth root divides the angle", "Nth root lena angle ko divide karta hai")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={120} size={15} fill={INK} anchor="middle">
          {t(
            "An nth root divides the angle by n — but the angle is known only up to 2π.",
            "Nth root angle ko n se divide karta hai — par angle sirf 2π tak known hai."
          )}
        </T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={152} size={15} fill={INK} anchor="middle">
          {t("So there are n legitimate answers, spaced 2π/n apart.", "To n legitimate answers hote hain, 2π/n apart spaced.")}
        </T>
      </Fade>

      {/* beat 3 — the two n-gon diagrams */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={circleD(CXL, CYL, RL)} stroke={MUTED} sw={1.6} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={n3Path} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        {n3Pts.map((p, i) => (
          <Circle key={i} cx={p.x} cy={p.y} r={4} fill={GREEN} />
        ))}
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d={circleD(CXR, CYR, RR)} stroke={MUTED} sw={1.6} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 2)} d={n4Path} stroke={AMBER_DARK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        {n4Pts.map((p, i) => (
          <Circle key={i} cx={p.x} cy={p.y} r={4} fill={AMBER_DARK} />
        ))}
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={280} y={505} size={14} fill={GREEN} anchor="middle" weight={700}>
          {t("n = 3 (triangle)", "n = 3 (triangle)")}
        </T>
        <T x={800} y={505} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("n = 4 (square)", "n = 4 (square)")}
        </T>
      </Fade>

      {/* beat 4 — the radius */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={225} size={15} fill={INK} anchor="middle">
          {t("They sit on a circle of radius r^(1/n) — a regular n-gon.", "Wo circle radius r^(1/n) par baithte hain — regular n-gon.")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={lineD(CXL, CYL, n3Pts[0].x, n3Pts[0].y)} stroke={GREEN} sw={1.8} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={RADIUS_LABEL.x + 14} y={RADIUS_LABEL.y} size={12} fill={GREEN} anchor="start" weight={700}>r^(1/n)</T>
      </Fade>

      {/* beat 5 — De Moivre contrast (powers) */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={430} y={498} w={220} h={32} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          z^n = r^n·e^(inθ)
        </Chip>
      </Fade>

      {/* beat 6 — guardrail: the duality */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={330} y={544} w={420} h={32} fill={CREAM} stroke={RED} textFill={INK} size={14} script={false}>
          {t("Powers multiply the angle — roots divide it over n branches", "Powers angle multiply — roots use n branches par divide")}
        </Chip>
      </Fade>

      {/* beat 7 — callback: roots of unity = same polygon, one vertex at 1 */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={ringD(n4Pts[0].x, n4Pts[0].y, 16, 14)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={RING1_LABEL.x} y={RING1_LABEL.y + 4} size={13} fill={RED} anchor="start" weight={700}>= 1</T>
        <T x={800} y={585} size={13} fill={RED} anchor="middle" script>
          {t("roots of unity: one vertex always at 1", "roots of unity: ek vertex hamesha 1 par")}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * M11 Ch03 · Section 36 — "Why one equation has infinitely many answers"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens subtopic 6 (Trigonometric Equations and Solutions).
 *
 * Beats (board_reveal_at_english [0, 8.02, 21.59, 35.16, 37.8, 47.87, 57.17, 67.93]):
 *  0 subtitle: a timetable, not a single time
 *  1 text: trig repeats forever, mirror partner too (data bug: literal — → "-")
 *  2 THE DIAGRAM: unit circle, y=1/2 line, two mirror points at π/6 and 5π/6
 *  3 heading: two layers of answer
 *  4 text: principal solution ∈ [0,2π) - two values π/6, 5π/6
 *  5 formula: general solution θ=nπ+(-1)ⁿπ/6, n∈Z (boxed)
 *  6 text: train-timetable analogy, n counts the laps
 *  7 red-margin: describe every solution in one stroke, not just find one
 *
 * Layout plan — left column (text) x60-460, right (diagram) x600-880:
 *  b0 | subtitle (14,amber)              | T st  | x60..440   y72..87  (bl 80)
 *  b1 | 2 lines (13)                     | T st  | x60..440   y96..131
 *  b2 | caption (12,w700)                | T mid | x600..880  y100..114 (bl 108)
 *  b2 | circle c(740,220) r90 + line + 2pts | Draw | x650..830  y130..310
 *  b3 | "Two layers..." (16,amber,w700) | T st  | x60..320  y272..288 (bl 280)
 *  b3 | underline                        | Draw  | x60..320  y288
 *  b4 | 2 lines (13)                     | T st  | x60..380   y304..337
 *  b5 | chip (amber)                     | Chip  | x60..380   y350..390
 *  b6 | text (13)                        | T st  | x60..400   y409..423 (bl 415)
 *  b7 | margin bar (red)                  | Draw | x60  y435..480
 *  b7 | closer 2 lines (13,red)           | T st | x76..440   y455..477
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, lineD, pointOnCircle } from "./math-kit";

const CX = 740;
const CY = 220;
const R = 90;
const LINE_Y = CY - R * 0.5;
const P1 = pointOnCircle(CX, CY, R, Math.PI / 6);
const P2 = pointOnCircle(CX, CY, R, (5 * Math.PI) / 6);

export default function M11Ch03Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={60} size={19} fill={RED} anchor="middle" script>
          {t("Why One Equation Has Infinitely Many Answers", "Ek Equation ke Anant Answers Kyun Hain")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={80} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("A timetable, not a single time", "Ek timetable, ek single time nahi")}
        </T>
      </Fade>

      {/* beat 1 — repeats forever, and mirrors */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={106} size={13} fill={INK} anchor="start">
          {t("Trig repeats: add any whole turns for", "Trig repeat karta hai: koi bhi whole turns jodo")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={60} y={129} size={13} fill={INK} anchor="start" weight={700}>
          {t("another solution - and so does its mirror.", "aur solution ke liye - mirror bhi milta hai.")}
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM: two mirror solutions on the circle */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={740} y={108} size={12} fill={INK} anchor="middle" weight={700}>
          {t("sinθ=1/2: two solutions, each repeats every 2π", "sinθ=1/2: do solutions, har ek 2π par repeat")}
        </T>
      </Fade>
      <Draw on={beat >= 2} d={circleD(CX, CY, R)} stroke={MUTED} sw={1.6} delay={dl(2, 0.2)} />
      <Draw on={beat >= 2} d={lineD(CX - R - 15, CY, CX + R + 15, CY)} stroke={MUTED} sw={1.2} delay={dl(2, 0.4)} />
      <Draw on={beat >= 2} d={lineD(CX, CY + R + 15, CX, CY - R - 15)} stroke={MUTED} sw={1.2} delay={dl(2, 0.4)} />
      <Draw on={beat >= 2} d={lineD(CX - R - 20, LINE_Y, CX + R + 20, LINE_Y)} stroke={RED} sw={1.4} delay={dl(2, 0.7)} />
      <Draw on={beat >= 2} d={lineD(CX, CY, P1.x, P1.y)} stroke={AMBER_DARK} sw={2} delay={dl(2, 1.0)} />
      <Draw on={beat >= 2} d={lineD(CX, CY, P2.x, P2.y)} stroke={AMBER_DARK} sw={2} delay={dl(2, 1.2)} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <Circle cx={P1.x} cy={P1.y} r={4} fill={AMBER_DARK} />
        <Circle cx={P2.x} cy={P2.y} r={4} fill={AMBER_DARK} />
        <T x={P1.x + 22} y={P1.y - 6} size={12} fill={AMBER_DARK} anchor="middle">π/6</T>
        <T x={P2.x - 24} y={P2.y - 6} size={12} fill={AMBER_DARK} anchor="middle">5π/6</T>
        <T x={CX + R + 30} y={LINE_Y + 4} size={11} fill={RED} anchor="start">y=1/2</T>
      </Fade>

      {/* beat 3 — two layers of answer, subheading */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={280} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Two layers of answer", "Answer ki do layers")}
        </T>
      </Fade>
      <Draw on={beat >= 3} d="M 60 288 L 320 288" stroke={AMBER_DARK} sw={1.6} delay={dl(3, 0.5)} />

      {/* beat 4 — the principal solution */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={310} size={13} fill={INK} anchor="start">
          {t("Principal solution ∈ [0,2π):", "Principal solution ∈ [0,2π):")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={60} y={333} size={13} fill={INK} anchor="start" weight={700}>
          θ = π/6 or θ = 5π/6
        </T>
      </Fade>

      {/* beat 5 — the general solution, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={60} y={350} w={320} h={40} fill={AMBER} textFill={INK} size={15} script={false}>
          θ=nπ+(-1)ⁿπ/6, n∈Z
        </Chip>
      </Fade>

      {/* beat 6 — the timetable analogy */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={415} size={13} fill={INK} anchor="start">
          {t("Like a train timetable - n counts the laps.", "Jaise train timetable - n laps ginta hai.")}
        </T>
      </Fade>

      {/* beat 7 — red-margin closer */}
      <Draw on={beat >= 7} d="M 60 435 L 60 480" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={76} y={455} size={13} fill={RED} anchor="start" weight={700}>
          {t("The job is never to find A solution -", "Kaam kabhi ek solution dhoondna nahi -")}
        </T>
        <T x={76} y={477} size={13} fill={RED} anchor="start">
          {t("describe EVERY solution in one stroke.", "HAR solution ek stroke mein describe karna hai.")}
        </T>
      </Fade>
    </Scene>
  );
}

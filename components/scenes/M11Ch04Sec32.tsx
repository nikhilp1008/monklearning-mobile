/**
 * M11 Ch04 · Section 32 — "Pitfalls & pro-tips: Argand plane and polar form"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — closes subtopic 3 (The Argand Plane and Polar Representation).
 *
 * Beats (board_reveal_at_english [0, 4.86, 14.08, 26.97, 38.83, 52.57, 62.12, 75.35]):
 *  0 heading: argument traps, polar shortcuts
 *  1 red-margin(high): never report arctan(y/x) without fixing the quadrant —
 *    headline + a small circle diagram: right half (arctan's actual range)
 *    bold amber, left half bold red ("can't reach here directly")
 *  2 text: calculator lives in (-π/2,π/2) — quadrant labels I/II/III/IV added
 *    to the diagram + right-column chip
 *  3 red-margin: principal value in (-π,π], arg(0) undefined — ring the
 *    origin + right-column chip
 *  4 text: r(cosθ-isinθ) is NOT polar form — staged wrong (crossed out, red)
 *    then right (green) — the wrong-vs-right pair the note implies
 *  5 text: don't mix degrees/radians in De Moivre — right-column chip
 *  6 text (pro-tip): sketch first; × adds arguments, ÷ subtracts — chip
 *  7 red-margin: any integer power → polar + De Moivre — chip
 *
 * Layout plan (diagram left c(250,350) r85; right column x520-940 stacked rows):
 *  b0 | subtitle (15,amber_dark,w700)     | T mid | x540 y90
 *  b1 | red headline (17,red,w700)        | T mid | x540 y125
 *  b1 | circle r85 + right-half arc(amber)+left-half arcs(red) | Draw
 *  b1 | caption (13,ink)                  | T mid | x250 y467
 *  b2 | quadrant labels I..IV r60         | T mid |
 *  b2 | chip row1 (amber border)          | Chip  | x520..940 y190..224
 *  b3 | ring on origin (red)              | Draw  | (250,350) rx14 ry12
 *  b3 | chip row2 (red border)            | Chip  | x520..940 y240..274
 *  b4 | crossed-out wrong form (red)      | T/Draw| x536 y300
 *  b4 | corrected form (green)            | T st  | x536 y336
 *  b5 | chip row4 (ink border)            | Chip  | x520..940 y376..410
 *  b6 | chip row5 (green border)          | Chip  | x520..940 y426..460
 *  b7 | chip row6 (red border, bold)      | Chip  | x520..940 y478..516
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { pointOnCircle, angleArcD, circleD } from "./math-kit";

const CX = 250, CY = 350, R = 85;
const deg = (d: number) => (d * Math.PI) / 180;

const quadLabels: { label: string; theta: number }[] = [
  { label: "I", theta: deg(45) },
  { label: "II", theta: deg(135) },
  { label: "III", theta: deg(225) },
  { label: "IV", theta: deg(315) },
];
const quadPts = quadLabels.map((q) => pointOnCircle(CX, CY, 60, q.theta));

export default function M11Ch04Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Pitfalls & Pro-Tips: Argand Plane and Polar Form", "Pitfalls & Pro-Tips: Argand Plane aur Polar Form")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Argument traps, polar shortcuts", "Argument ke traps, polar shortcuts")}
        </T>
      </Fade>

      {/* beat 1 — the #1 trap (high emphasis) + diagram: half the circle is all arctan gives you */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={125} size={17} fill={RED} anchor="middle" weight={700}>
          {t(
            "Never report arctan(y/x) without fixing the quadrant.",
            "Quadrant fix kiye bina arctan(y/x) ko argument mat likho."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={circleD(CX, CY, R)} stroke={MUTED} sw={1.6} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={angleArcD(CX, CY, R, -Math.PI / 2, Math.PI / 2)} stroke={AMBER_DARK} sw={3} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={angleArcD(CX, CY, R, Math.PI / 2, Math.PI)} stroke={RED} sw={3} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d={angleArcD(CX, CY, R, Math.PI, (3 * Math.PI) / 2)} stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={250} y={467} size={13} fill={INK} anchor="middle">
          {t("(-π/2, π/2) is only half the circle.", "(-π/2, π/2) circle ka aadha hi hissa hai.")}
        </T>
      </Fade>

      {/* beat 2 — quadrant placement + chip */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        {quadLabels.map((q, i) => (
          <T key={q.label} x={quadPts[i].x} y={quadPts[i].y} size={12} fill={INK} anchor="middle" weight={700}>
            {q.label}
          </T>
        ))}
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={520} y={190} w={420} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {t("Match the point's quadrant, then fix θ.", "Point ka quadrant match karo, phir θ fix karo.")}
        </Chip>
      </Fade>

      {/* beat 3 — principal range + arg(0) undefined */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={ringD(CX, CY, 14, 12)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Chip x={520} y={240} w={420} h={34} fill={CREAM} stroke={RED} textFill={INK} size={14} script={false}>
          {t("Principal value: (-π, π] — arg(0) undefined.", "Principal value: (-π, π] — arg(0) undefined hai.")}
        </Chip>
      </Fade>

      {/* beat 4 — the wrong-vs-right pair the note implies */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={536} y={300} size={15} fill={RED} anchor="start">r(cos θ - i sin θ)</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.4)} d={crossD(536, 288.3, 118, 16.35)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={664} y={300} size={13} fill={RED} anchor="start" weight={700}>
          {t("not polar form", "polar form nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={536} y={336} size={15} fill={GREEN} anchor="start">→ r(cos(-θ) + i sin(-θ))</T>
      </Fade>

      {/* beat 5 — degrees vs radians */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={520} y={376} w={420} h={34} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          {t("Don't mix degrees and radians in De Moivre.", "De Moivre ke andar degrees aur radians mix mat karo.")}
        </Chip>
      </Fade>

      {/* beat 6 — pro-tip */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={520} y={426} w={420} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          {t("Sketch first: × adds arguments, ÷ subtracts.", "Pehle sketch karo: × arguments add, ÷ subtract karta hai.")}
        </Chip>
      </Fade>

      {/* beat 7 — guardrail: powers */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={520} y={478} w={420} h={38} fill={CREAM} stroke={RED} textFill={INK} size={15} script={false}>
          {t("Any integer power → polar form + De Moivre.", "Kisi bhi integer power ke liye → polar form + De Moivre.")}
        </Chip>
      </Fade>
    </Scene>
  );
}

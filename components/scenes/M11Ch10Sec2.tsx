/**
 * M11 Ch10 · Section 2 — "One number tunes the whole family: eccentricity e"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — Subtopic 1 (The Conic Family), sec 2 of 7.
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 8.45, 22.87, 29.44, 40.79, 55.38, 67.41, 78.17];
 * reveals_hinglish = [0, 8.28, 22.61, 29.53, 39.51, 51.63, 63.15, 75.35].
 *
 * Beats:
 *  0(title,always-on) | "One number tunes the whole family: eccentricity e"
 *  1 | focus-directrix definition: small diagram (F, directrix, P, PF, PM) + e=PF/PM
 *  2 | THE DIAL: horizontal e-axis 0..~2, four small shape icons above it (circleD,
 *      ellipseD — new primitive, sampled parabola/hyperbola via curveD)
 *  3 | labels: e=0 -> Circle, 0<e<1 -> Ellipse
 *  4 | labels: e=1 -> Parabola, e>1 -> Hyperbola
 *  5 | guardrail (red, HIGH): parabola is the hinge, e=1 matches beta=alpha (ring "Parabola")
 *  6 | degenerate case intro: plane through the VERTEX collapses the slice
 *  7 | three degenerate icons: single point / one line / pair of intersecting lines
 *
 * Layout plan:
 *  b0 | title (26,red,script)                 | T mid | x540 y62
 *  b1 | caption (15,ink)                       | T mid | x540 y104
 *  b1 | directrix line + F,P,M + PF/PM + label | Draw/T| x140..390 y128..270
 *  b2 | axis (arrowD)                          | Draw  | (140,380)-(1000,380)
 *  b2 | 2 ticks (e=0,e=1)                      | Draw  | x160/x560 y374..386
 *  b2 | circle icon                             | Draw  | circleD(160,330,20)
 *  b2 | ellipse icon                            | Draw  | ellipseD(360,330,24,16)
 *  b2 | parabola icon                           | Draw  | curveD, vertex(560,348)
 *  b2 | hyperbola icon (2 branches)              | Draw  | curveD x2, center(760,330)
 *  b3 | "e=0"/"Circle" x160, "0<e<1"/"Ellipse" x360 | T mid | y410/430
 *  b4 | "e=1"/"Parabola" x560, "e>1"/"Hyperbola" x760 | T mid | y410/430
 *  b5 | ring "Parabola" (560,428)               | Draw  | ringD
 *  b5 | red callout                             | T mid | x560 y475
 *  b6 | degenerate intro text                    | T mid | x540 y510
 *  b7 | point/line/X icons x210/540/870 y531-561 | Draw  | + labels y584
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
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD, curveD, circleD, ellipseD } from "./math-kit";

function parabolaIcon(cx: number, yBase: number, halfW: number, height: number) {
  const pts: { x: number; y: number }[] = [];
  for (let u = -halfW; u <= halfW + 0.01; u += halfW / 4) {
    const v = (u * u) / (halfW * halfW) * height;
    pts.push({ x: cx + u, y: yBase - v });
  }
  return curveD(pts);
}

function hyperbolaBranch(cx: number, cy: number, a: number, b: number, sign: 1 | -1) {
  const pts: { x: number; y: number }[] = [];
  for (let s = -1.1; s <= 1.1 + 0.001; s += 0.275) {
    pts.push({ x: cx + sign * a * Math.cosh(s), y: cy - b * Math.sinh(s) });
  }
  return curveD(pts);
}

const PARABOLA_ICON_D = parabolaIcon(560, 348, 22, 32);
const HYP_ICON_RIGHT_D = hyperbolaBranch(760, 330, 10, 18, 1);
const HYP_ICON_LEFT_D = hyperbolaBranch(760, 330, 10, 18, -1);

export default function M11Ch10Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("One number tunes the whole family: eccentricity e", "Ek number puri family ko control karta hai: eccentricity e")}
        </T>
      </Fade>

      {/* beat 1 — focus/directrix definition */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={15} fill={INK} anchor="middle">
          {t(
            "Distance to focus ÷ distance to directrix = a constant e.",
            "Focus se distance ÷ directrix se distance = ek constant e."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d={lineD(160, 128, 160, 228)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={145} y={183} size={11} fill={MUTED} anchor="end">{t("directrix", "directrix")}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Circle cx={340} cy={165} r={3.5} fill={INK} />
        <T x={352} y={161} size={13} fill={INK} anchor="start" weight={700}>F</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Circle cx={250} cy={138} r={3.5} fill={INK} />
        <T x={238} y={133} size={12} fill={MUTED} anchor="end">P</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Circle cx={160} cy={138} r={3} fill={MUTED} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={lineD(250, 138, 160, 138)} stroke={MUTED} sw={1.6} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 2.05)} d={lineD(250, 138, 340, 165)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={250} y={258} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>e = PF / PM</T>
      </Fade>

      {/* beat 2 — the dial: axis + 4 shape icons */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={arrowD(140, 380, 1000, 380)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d={`${lineD(160, 374, 160, 386)} ${lineD(560, 374, 560, 386)}`} stroke={INK} sw={1.6} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={circleD(160, 330, 20)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={ellipseD(360, 330, 24, 16)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2.1)} d={PARABOLA_ICON_D} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d={HYP_ICON_RIGHT_D} stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 2} delay={dl(2, 2.95)} d={HYP_ICON_LEFT_D} stroke={INK} sw={2} dur={0.35} />

      {/* beat 3 — e=0 circle, 0<e<1 ellipse */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={160} y={410} size={13} fill={INK} anchor="middle">e = 0</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={160} y={430} size={14} fill={GREEN} anchor="middle" weight={700}>{t("Circle", "Circle")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={360} y={410} size={13} fill={INK} anchor="middle">0 &lt; e &lt; 1</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={360} y={430} size={14} fill={GREEN} anchor="middle" weight={700}>{t("Ellipse", "Ellipse")}</T>
      </Fade>

      {/* beat 4 — e=1 parabola, e>1 hyperbola */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={560} y={410} size={13} fill={INK} anchor="middle">e = 1</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={560} y={430} size={14} fill={GREEN} anchor="middle" weight={700}>{t("Parabola", "Parabola")}</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={760} y={410} size={13} fill={INK} anchor="middle">e &gt; 1</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={760} y={430} size={14} fill={GREEN} anchor="middle" weight={700}>{t("Hyperbola", "Hyperbola")}</T>
      </Fade>

      {/* beat 5 — guardrail: parabola is the hinge */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={ringD(560, 428, 44, 22)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={560} y={475} size={14} fill={RED} anchor="middle" weight={700}>
          {t("Parabola = the hinge: e = 1 matches β = α.", "Parabola = hinge: e = 1 matches β = α.")}
        </T>
      </Fade>

      {/* beat 6 — degenerate case intro */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={510} size={15} fill={INK} anchor="middle">
          {t(
            "If the cutting plane passes through the VERTEX, the slice collapses.",
            "Agar cutting plane VERTEX se guzre, to slice collapse ho jaata hai."
          )}
        </T>
      </Fade>

      {/* beat 7 — three degenerate outcomes */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Circle cx={210} cy={546} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={210} y={584} size={12} fill={MUTED} anchor="middle">{t("single point", "single point")}</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={lineD(515, 554, 565, 538)} stroke={INK} sw={2.5} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={540} y={584} size={12} fill={MUTED} anchor="middle">{t("one straight line", "one straight line")}</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.1)} d={`${lineD(850, 531, 890, 561)} ${lineD(850, 561, 890, 531)}`} stroke={INK} sw={2.2} dur={0.35} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={870} y={584} size={11} fill={MUTED} anchor="middle">{t("pair of intersecting lines", "pair of intersecting lines")}</T>
      </Fade>
    </Scene>
  );
}

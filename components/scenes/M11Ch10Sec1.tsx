/**
 * M11 Ch10 · Section 1 — "Four curves, one object"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens the chapter (Subtopic 1: The Conic Family).
 *
 * board_content seq1 is the heading ("Four curves, one object") -> always-on title.
 * seq2..seq8 (7 items) gate at beat>=1..beat>=7. reveals_english (8 values) =
 * [0, 7.77, 20.91, 33.88, 45.74, 58.37, 68.69, 78.34]; reveals_hinglish =
 * [0, 4.95, 17.24, 29.87, 41.39, 54.27, 61.78, 71.59].
 *
 * "One cone, four slices" is the chapter's one-off hand-drawn diagram (task brief):
 * a stylized double-cone = two triangles meeting at a shared apex, pure lineD, no
 * ellipseD rims. Vertex V(300,350); top nappe TL(210,180)/TR(390,180); bottom nappe
 * BL(210,520)/BR(390,520); axis vertical through x=300. alpha = angle at V between
 * the axis and generator V-TR (computed live via Math.atan2, ~28°). A generic
 * illustrative cutting plane crosses the axis at M(300,250) at 55° to mark what
 * beta means. The four classification cases build as a small ledger (icon tilt +
 * condition + result) to the right of the cone, one row per beat — this keeps the
 * single cone as "one hand, one demo" rather than redrawing 4 overlapping planes on
 * it. The guardrail beat (7) rings the Hyperbola row AND adds a second, real cut on
 * the main cone: a steep offset vertical line through BOTH nappes (RED), the actual
 * visual payoff of "two branches = one plane, both nappes."
 *
 * Beats:
 *  0(title, always-on) | "Four curves, one object"
 *  1 | intro line: circle/parabola/ellipse/hyperbola are one family
 *  2 | THE CONE: axis, vertex, both nappes, generator — labeled
 *  3 | alpha (vertex angle) + beta (generic plane-vs-axis angle), both arced+labeled
 *  4 | ledger row 1 (circle, beta=90) + row 2 (ellipse, alpha<beta<90)
 *  5 | ledger row 3 (parabola, beta=alpha)
 *  6 | ledger row 4 (hyperbola, 0<=beta<alpha)
 *  7 | guardrail: ring "Hyperbola", red note, steep RED line through both nappes
 *
 * Layout plan (all coords x,y):
 *  b0 | title (26,red,script)               | T mid  | x540 y62
 *  b1 | intro text (16,ink)                  | T mid  | x540 y104
 *  b2 | axis (muted)                         | Draw   | (300,155)-(300,550)
 *  b2 | 6 cone edges (ink)                   | Draw   | V-TL,V-TR,TL-TR,V-BL,V-BR,BL-BR
 *  b2 | vertex dot + "vertex"/"axis"/"generator" labels | circle+T | see code
 *  b3 | alpha arc+label (amber_dark)         | Draw+T | center V r50
 *  b3 | beta plane (amber) + arc+label        | Draw+T | center M(300,250) r26/28
 *  b3 | def text 2 lines (ink)               | T st   | x460 y175/200
 *  b4 | row1 icon+cond+arrow+result (Circle) | Draw+T | y246
 *  b4 | row2 icon+cond+arrow+result (Ellipse)| Draw+T | y290
 *  b5 | row3 icon+cond+arrow+result (Parabola)| Draw+T| y334
 *  b6 | row4 icon+cond+arrow+result (Hyperbola)| Draw+T| y378
 *  b7 | ring around "Hyperbola" word (red)   | Draw   | center(713,374)
 *  b7 | red bar + 2-line note                | Draw+T | x500 y428..478 / text x516 y446/470
 *  b7 | steep RED cone-line + 2 dots          | Draw   | (345,210)-(345,480)
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD, pointOnCircle, angleArcD } from "./math-kit";

const V = { x: 300, y: 350 };
const TL = { x: 210, y: 180 };
const TR = { x: 390, y: 180 };
const BL = { x: 210, y: 520 };
const BR = { x: 390, y: 520 };
const AXIS_TOP = { x: 300, y: 155 };
const AXIS_BOTTOM = { x: 300, y: 550 };
const M = { x: 300, y: 250 };

const thetaGen = Math.atan2(V.y - TR.y, TR.x - V.x); // ~1.0837 rad (62.09°)
const thetaAxis = Math.PI / 2;
const alphaMid = (thetaGen + thetaAxis) / 2;
const alphaLabelPt = pointOnCircle(V.x, V.y, 68, alphaMid);

const betaDeg = 55;
const betaRad = (betaDeg * Math.PI) / 180;
const PR = pointOnCircle(M.x, M.y, 26, betaRad);
const PL = pointOnCircle(M.x, M.y, 26, betaRad + Math.PI);
const betaMid = (betaRad + thetaAxis) / 2;
const betaLabelPt = pointOnCircle(M.x, M.y, 44, betaMid);

const genLabelPt = { x: V.x + 0.65 * (TR.x - V.x), y: V.y + 0.65 * (TR.y - V.y) };

// steep guardrail cut: vertical offset line through both nappes
const HX = 345;
const HY_TOP = 210;
const HY_BOT = 480;

function iconLine(cx: number, cy: number, deg: number, half: number) {
  const rad = (deg * Math.PI) / 180;
  const a = pointOnCircle(cx, cy, half, rad);
  const b = pointOnCircle(cx, cy, half, rad + Math.PI);
  return lineD(a.x, a.y, b.x, b.y);
}

export default function M11Ch10Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Four curves, one object", "Chaar curves, ek hi object")}
        </T>
      </Fade>

      {/* beat 1 — intro */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={16} fill={INK} anchor="middle">
          {t(
            "Circle, parabola, ellipse and hyperbola are all slices of ONE double cone.",
            "Circle, parabola, ellipse aur hyperbola — ye sab ek hi double cone ki slices hain."
          )}
        </T>
      </Fade>

      {/* beat 2 — the double cone */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={lineD(AXIS_TOP.x, AXIS_TOP.y, AXIS_BOTTOM.x, AXIS_BOTTOM.y)} stroke={MUTED} sw={1.4} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={lineD(V.x, V.y, TL.x, TL.y)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={lineD(V.x, V.y, TR.x, TR.y)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d={lineD(TL.x, TL.y, TR.x, TR.y)} stroke={INK} sw={2.2} dur={0.35} />
      <Draw on={beat >= 2} delay={dl(2, 1.65)} d={lineD(V.x, V.y, BL.x, BL.y)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2.05)} d={lineD(V.x, V.y, BR.x, BR.y)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2.45)} d={lineD(BL.x, BL.y, BR.x, BR.y)} stroke={INK} sw={2.2} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <Circle cx={V.x} cy={V.y} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.0)}>
        <T x={310} y={346} size={11} fill={MUTED} anchor="start">{t("vertex", "vertex")}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={300} y={138} size={12} fill={MUTED} anchor="middle">{t("axis", "axis")}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={365} y={238} size={12} fill={MUTED} anchor="start">{t("generator", "generator")}</T>
      </Fade>

      {/* beat 3 — alpha / beta */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={460} y={175} size={14} fill={INK} anchor="start">
          {t("α = semi-vertical angle, axis to generator.", "α = semi-vertical angle, axis se generator tak.")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={460} y={200} size={14} fill={INK} anchor="start">
          {t("β = angle the cutting plane makes with the axis.", "β = wo angle jo cutting plane axis ke saath banata hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.0)} d={angleArcD(V.x, V.y, 50, thetaGen, thetaAxis)} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={320} y={288} size={14} fill={AMBER_DARK} anchor="start">α</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.0)} d={lineD(PL.x, PL.y, PR.x, PR.y)} stroke={AMBER} sw={2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 2.6)} d={angleArcD(M.x, M.y, 28, betaRad, thetaAxis)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 3.1)}>
        <T x={317} y={212} size={14} fill={AMBER_DARK} anchor="start">β</T>
      </Fade>

      {/* beat 4 — ledger row 1 (circle) + row 2 (ellipse) */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={iconLine(472, 240, 0, 17)} stroke={AMBER} sw={2.2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={505} y={246} size={15} fill={INK} anchor="start">β = 90°</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={650} y={246} size={16} fill={INK} anchor="middle">→</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={675} y={246} size={17} fill={GREEN} anchor="start" weight={700}>{t("Circle", "Circle")}</T>
      </Fade>

      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={iconLine(472, 284, 35, 17)} stroke={AMBER} sw={2.2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={505} y={290} size={15} fill={INK} anchor="start">α &lt; β &lt; 90°</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.7)}>
        <T x={650} y={290} size={16} fill={INK} anchor="middle">→</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <T x={675} y={290} size={17} fill={GREEN} anchor="start" weight={700}>{t("Ellipse", "Ellipse")}</T>
      </Fade>

      {/* beat 5 — ledger row 3 (parabola) */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={iconLine(472, 328, 62, 17)} stroke={AMBER} sw={2.2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={505} y={334} size={15} fill={INK} anchor="start">β = α</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={650} y={334} size={16} fill={INK} anchor="middle">→</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={675} y={334} size={17} fill={GREEN} anchor="start" weight={700}>{t("Parabola", "Parabola")}</T>
      </Fade>

      {/* beat 6 — ledger row 4 (hyperbola) */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={iconLine(472, 372, 80, 17)} stroke={AMBER} sw={2.2} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={505} y={378} size={15} fill={INK} anchor="start">0 ≤ β &lt; α</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={650} y={378} size={16} fill={INK} anchor="middle">→</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={675} y={378} size={17} fill={GREEN} anchor="start" weight={700}>{t("Hyperbola", "Hyperbola")}</T>
      </Fade>

      {/* beat 7 — guardrail: ring Hyperbola, red note, real both-nappes cut */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={`M ${675 - 52} 374 C ${675 - 52} ${374 - 27}, ${751 + 8} ${374 - 29}, ${751 + 52} ${374 - 2} C ${751 + 55} ${374 + 25}, ${675 - 45} ${374 + 29}, ${675 - 54} ${374 + 3}`} stroke={RED} sw={2} dur={0.5} fill="none" />
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={lineD(500, 428, 500, 478)} stroke={RED} sw={4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={516} y={446} size={14} fill={RED} anchor="start" weight={700}>
          {t("Two branches = ONE plane,", "Do branches = EK hi plane,")}
        </T>
        <T x={516} y={470} size={14} fill={RED} anchor="start" weight={700}>
          {t("slicing BOTH nappes.", "jo BOTH nappes ko kaatta hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.6)} d={lineD(HX, HY_TOP, HX, HY_BOT)} stroke={RED} sw={2.6} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 2.3)}>
        <Circle cx={HX} cy={HY_TOP} r={3} fill={RED} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <Circle cx={HX} cy={HY_BOT} r={3} fill={RED} />
      </Fade>
    </Scene>
  );
}

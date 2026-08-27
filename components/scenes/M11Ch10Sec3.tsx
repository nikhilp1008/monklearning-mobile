/**
 * M11 Ch10 · Section 3 — "Two five-second classifiers"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — Subtopic 1 (The Conic Family), sec 3 of 7.
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 6.91, 16.55, 28.84, 43.95, 55.72, 64.0, 71.25];
 * reveals_hinglish = [0, 7.42, 17.15, 27.14, 38.06, 48.98, 57.34, 64.09].
 *
 * Two-column layout: LEFT = the no-xy-term test (equation -> A/C sign table ->
 * closes/opens guardrail, reusing Sec2's small circle/hyperbola-branch icons for
 * visual continuity). RIGHT = the xy-term/rotation case (tilted-axes icon ->
 * discriminant formula -> Delta table).
 *
 * Beats:
 *  0(title,always-on) | "Two five-second classifiers"
 *  1 | recap line: geometry test (beta vs alpha, vertex check)
 *  2 | LEFT: equation Ax²+Cy²+Dx+Ey+F=0 (A,C highlighted)
 *  3 | LEFT: 4-row sign table (A=C/same-unequal/one-zero/opposite -> shape)
 *  4 | LEFT guardrail (red,HIGH): same sign closes, opposite opens (2 icons)
 *  5 | RIGHT: xy-term -> rotated conic, tilted-axes icon
 *  6 | RIGHT formula: Δ = B² - 4AC (boxed)
 *  7 | RIGHT: 3-row Δ table + "rotation never changes Δ"
 *
 * Layout plan:
 *  b0 | title (26,red,script)              | T mid | x540 y62
 *  b1 | recap text (14,ink)                | T mid | x540 y100
 *  b2 | equation (A,C amber_dark bold)     | T st  | x60  y172
 *  b3 | 4 rows cond->result                | T st/mid/st | x60/280/310 y210..330
 *  b4 | circle icon x110 / hyperbola icon x350 + labels y388/418 | Draw+T
 *  b4 | red note                            | T mid | x230 y438
 *  b5 | 2-line text                         | T st  | x580 y140/164
 *  b5 | rotated-axes icon                   | Draw+T| center(800,240)
 *  b6 | Chip "Δ = B² - 4AC"                 | Chip  | x715 y320 w170 h50
 *  b7 | 3 rows cond->result                 | T st/mid/st | x600/820/850 y400..480
 *  b7 | closing note                        | T mid | x800 y525
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD, circleD, pointOnCircle, curveD } from "./math-kit";

function hyperbolaBranch(cx: number, cy: number, a: number, b: number, sign: 1 | -1, sMax = 1.0) {
  const pts: { x: number; y: number }[] = [];
  for (let s = -sMax; s <= sMax + 0.001; s += sMax / 4) {
    pts.push({ x: cx + sign * a * Math.cosh(s), y: cy - b * Math.sinh(s) });
  }
  return pts;
}

const HYP_R = curveD(hyperbolaBranch(350, 388, 7, 12, 1));
const HYP_L = curveD(hyperbolaBranch(350, 388, 7, 12, -1));

const OX = 800, OY = 240;
const XP = pointOnCircle(OX, OY, 55, (25 * Math.PI) / 180);
const XM = pointOnCircle(OX, OY, 55, (205 * Math.PI) / 180);
const YP = pointOnCircle(OX, OY, 55, (115 * Math.PI) / 180);
const YM = pointOnCircle(OX, OY, 55, (295 * Math.PI) / 180);

export default function M11Ch10Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Two five-second classifiers", "Do five-second classifiers")}
        </T>
      </Fade>

      {/* beat 1 — recap: geometry test */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={100} size={14} fill={INK} anchor="middle">
          {t(
            "Geometry: compare β with α — but first check the plane doesn't pass through the vertex.",
            "Geometry: β ko α se compare karo — par pehle check karo plane vertex se toh nahi guzar raha."
          )}
        </T>
      </Fade>

      {/* beat 2 — LEFT: equation, A and C highlighted */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={140} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Equation, no xy term:", "Equation, xy term ke bina:")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={172} size={16} fill={AMBER_DARK} anchor="start" weight={700}>A</T>
        <T x={78} y={172} size={16} fill={INK} anchor="start">x² + </T>
        <T x={122} y={172} size={16} fill={AMBER_DARK} anchor="start" weight={700}>C</T>
        <T x={140} y={172} size={16} fill={INK} anchor="start">y² + Dx + Ey + F = 0</T>
      </Fade>

      {/* beat 3 — LEFT: 4-row sign table */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={210} size={15} fill={INK} anchor="start">A = C</T>
        <T x={280} y={210} size={16} fill={INK} anchor="middle">→</T>
        <T x={310} y={210} size={17} fill={GREEN} anchor="start" weight={700}>{t("Circle", "Circle")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={250} size={15} fill={INK} anchor="start">{t("same sign, A ≠ C", "same sign, A ≠ C")}</T>
        <T x={280} y={250} size={16} fill={INK} anchor="middle">→</T>
        <T x={310} y={250} size={17} fill={GREEN} anchor="start" weight={700}>{t("Ellipse", "Ellipse")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={60} y={290} size={15} fill={INK} anchor="start">A = 0 {t("or", "ya")} C = 0</T>
        <T x={280} y={290} size={16} fill={INK} anchor="middle">→</T>
        <T x={310} y={290} size={17} fill={GREEN} anchor="start" weight={700}>{t("Parabola", "Parabola")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={60} y={330} size={15} fill={INK} anchor="start">{t("opposite signs", "opposite signs")}</T>
        <T x={280} y={330} size={16} fill={INK} anchor="middle">→</T>
        <T x={310} y={330} size={17} fill={GREEN} anchor="start" weight={700}>{t("Hyperbola", "Hyperbola")}</T>
      </Fade>

      {/* beat 4 — LEFT guardrail: closes vs opens */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={circleD(110, 388, 15)} stroke={INK} sw={1.8} dur={0.35} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={110} y={418} size={11} fill={MUTED} anchor="middle">{t("same sign → closes", "same sign → closes")}</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.7)} d={HYP_R} stroke={INK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 1.0)} d={HYP_L} stroke={INK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={350} y={418} size={11} fill={MUTED} anchor="middle">{t("opposite signs → opens", "opposite signs → opens")}</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.7)}>
        <T x={230} y={438} size={13} fill={RED} anchor="middle" weight={700}>
          {t("Same sign closes the curve; opposite opens it.", "Same sign curve ko band karta hai; opposite khol deta hai.")}
        </T>
      </Fade>

      {/* beat 5 — RIGHT: xy term -> rotated conic */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={580} y={140} size={14} fill={INK} anchor="start">
          {t("With an xy term present the conic is", "Jab xy term maujood ho, conic")}
        </T>
        <T x={580} y={164} size={14} fill={INK} anchor="start">
          {t("rotated — use the discriminant instead.", "rotated hota hai — discriminant use karo.")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d={`${lineD(750, OY, 850, OY)} ${lineD(OX, 190, OX, 290)}`} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 1.1)} d={lineD(XM.x, XM.y, XP.x, XP.y)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 1.5)} d={lineD(YM.x, YM.y, YP.x, YP.y)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={XP.x + 6} y={XP.y - 2} size={12} fill={INK} anchor="start">x'</T>
        <T x={YP.x - 8} y={YP.y - 4} size={12} fill={INK} anchor="end">y'</T>
      </Fade>

      {/* beat 6 — RIGHT formula: discriminant */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={715} y={320} w={170} h={50} fill="#FCF4E0" stroke={AMBER_DARK} textFill={INK} size={22} script={false}>
          Δ = B² − 4AC
        </Chip>
      </Fade>

      {/* beat 7 — RIGHT: 3-row Delta table + closing note */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={600} y={400} size={15} fill={INK} anchor="start">Δ &lt; 0</T>
        <T x={820} y={400} size={16} fill={INK} anchor="middle">→</T>
        <T x={850} y={400} size={17} fill={GREEN} anchor="start" weight={700}>{t("Ellipse", "Ellipse")}</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={600} y={440} size={15} fill={INK} anchor="start">Δ = 0</T>
        <T x={820} y={440} size={16} fill={INK} anchor="middle">→</T>
        <T x={850} y={440} size={17} fill={GREEN} anchor="start" weight={700}>{t("Parabola", "Parabola")}</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={600} y={480} size={15} fill={INK} anchor="start">Δ &gt; 0</T>
        <T x={820} y={480} size={16} fill={INK} anchor="middle">→</T>
        <T x={850} y={480} size={17} fill={GREEN} anchor="start" weight={700}>{t("Hyperbola", "Hyperbola")}</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={800} y={525} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Rotation never changes Δ.", "Rotation se Δ kabhi nahi badalta.")}
        </T>
      </Fade>
    </Scene>
  );
}

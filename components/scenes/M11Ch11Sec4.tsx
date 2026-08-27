/**
 * M11 Ch11 · Section 4 — "Edge cases in centroids, collinearity, and locus"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic "Applications: Centroid, Collinearity & Locus". Content is
 * a checklist of 4 independent edge-case facts (not one continuous derivation), so this file
 * uses the "tips"-style rapid sequence of boxed pitfalls (SCENE_AUTHORING_MATHS.md's own
 * guidance for that shape of content) laid out as a 2x2 grid of cards, one per topic —
 * deviates from the default row-band map (Step 3 permits this when the plan says so).
 *
 * CORRECTED CONTENT FRAMING: coordinator-confirmed correction — this subtopic (secs 1-12) is
 * 3D throughout, not 2D. Applied here where it matters: Card B's collinear-points icon is a
 * genuine project3D plot (reusing Sec2's verified A(1,0,1) B(3,2,3) C(4,3,4), k=2, projected at
 * a small local scale). Cards A/C/D stay representative sketches per the coordinator's own
 * carve-out — a centroid is a scalar-per-coordinate average (a triangle is planar regardless of
 * ambient dimension), and "r² > 0" / "2a > dist(F1,F2)" are algebraic conditions on scalars, not
 * spatial claims — matching how Sec3 treats its sphere/ellipsoid as representative sketches.
 *
 * Card B local projection: origin(650,235) scale=25 (independent of any other section's OX/OY,
 * a small local frame just for this icon). screenX=650+25y-12.99x screenY=235-25z+7.5x.
 *   A(1,0,1): dx=-12.99 dy=-25+7.5=-17.5 -> (637,217.5)->(637,218)
 *   B(3,2,3): dx=50-38.97=11.03 dy=-75+22.5=-52.5 -> (661,182.5)->(661,183)
 *   C(4,3,4): dx=75-51.96=23.04 dy=-100+30=-70 -> (673,165)
 * (Same k=2 ratio already verified in Sec2's header — reused here for consistency, not
 * re-derived.)
 *
 * reveals_english = [0, 9.73, 25.51, 36.78, 48.98, 64.94, 76.8, 91.56] (8 values, beats 0-7).
 * reveals_hinglish = [0, 11.35, 27.31, 36.61, 46.76, 60.84, 71.94, 85.08].
 *
 * Beats -> cards:
 *  0(title, always-on) | "When these applications degenerate"
 *  1 | Card A (top-left, x60-520 y95-260): centroid — always exists/unique, ignores side lengths
 *  2 | Card B (top-right, x560-1020 y95-260): collinearity — area = 0, degenerate triangle
 *  3 | Card C (bottom-left, x60-520 y280-470) part 1: sphere real only if r² > 0
 *  4 | Card C part 2 (red-margin note): r²=0 -> point; r²<0 -> ∅ (empty set)
 *  5 | Card D (bottom-right, x560-1020 y280-470) part 1: ellipsoid real only if 2a > dist(F1,F2)
 *  6 | Card D part 2: shortest path = the segment itself (justifies the ellipsoid condition)
 *  7 | LAND (verdict band): green checkmark + boxed closing statement
 *
 * Layout plan (all coords screen px):
 *  b1 | "CENTROID" header              | T start | (60,110)
 *  b1 | triangle P1(110,190)P2(180,190)P3(145,125) + centroid dot(145,168)+"G"(152,172) | Draw+circ+T
 *  b1 | 2-line text                    | T start | (230,140)/(230,164)
 *  b2 | "COLLINEARITY" header          | T start | (560,110)
 *  b2 | 3D line A(637,218)-C(673,165) + 3 dots | Draw+circ
 *  b2 | "Area = 0" label               | T mid   | (690,235)
 *  b3 | "SPHERE" header                | T start | (60,300)
 *  b3 | circle icon c(150,360) r40     | Draw    |
 *  b3 | 2-line text                    | T start | (220,335)/(220,359)
 *  b4 | dot + "r²=0 -> point" line     | circ+T  | dot(68,417) text(80,428)
 *  b4 | "r²<0 -> ∅" line (red)         | T start | (80,452)
 *  b5 | "ELLIPSOID" header             | T start | (560,300)
 *  b5 | ellipse c(650,350) rx55 ry25 + F1(601,350) F2(699,350) | Draw+circ+T
 *  b5 | 2-line condition text          | T start | (720,340)/(720,364)
 *  b6 | segment F1'(601,430)-F2'(699,430) + P(650,430) | Draw+circ
 *  b6 | "shortest path" label          | T mid   | (650,455)
 *  b7 | checkmark + boxed statement    | Draw+Chip | check(200,530,18) chip x240 y505 w620 h50
 */

import React from "react";
import { Circle, Ellipse } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD, checkD } from "./math-kit";

// Card A — centroid icon
const TRI_A = { x: 110, y: 190 };
const TRI_B = { x: 180, y: 190 };
const TRI_C = { x: 145, y: 125 };
const TRI_G = { x: 145, y: 168 }; // centroid = avg of the 3 vertices

// Card B — genuine 3D-projected collinear points (see header comment)
const CB_A = { x: 637, y: 218 };
const CB_B = { x: 661, y: 183 };
const CB_C = { x: 673, y: 165 };

// Card D — ellipsoid foci + midpoint segment (beat 6)
const F1 = { x: 601, y: 350 };
const F2 = { x: 699, y: 350 };

export default function M11Ch11Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("When these applications degenerate", "Jab ye applications degenerate hote hain")}
        </T>
      </Fade>

      {/* ===== Card A — centroid (beat 1) ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={110} size={13} fill={AMBER_DARK} anchor="start" weight={700}>CENTROID</T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.4)}
        d={`M ${TRI_A.x} ${TRI_A.y} L ${TRI_B.x} ${TRI_B.y} L ${TRI_C.x} ${TRI_C.y} Z`}
        stroke={INK}
        sw={1.6}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Circle cx={TRI_G.x} cy={TRI_G.y} r={4} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={152} y={172} size={11} fill={AMBER_DARK} anchor="start" weight={700}>G</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={230} y={140} size={14} fill={INK} anchor="start">
          {t("Centroid: always exists, always unique.", "Centroid: hamesha exist, hamesha unique.")}
        </T>
        <T x={230} y={164} size={14} fill={INK} anchor="start">
          {t("(unlike incentre — ignores side lengths)", "(incentre jaisa nahi, sides ignore)")}
        </T>
      </Fade>

      {/* ===== Card B — collinearity (beat 2) ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={560} y={110} size={13} fill={AMBER_DARK} anchor="start" weight={700}>COLLINEARITY</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d={lineD(CB_A.x, CB_A.y, CB_C.x, CB_C.y)} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <Circle cx={CB_A.x} cy={CB_A.y} r={3} fill={INK} />
        <Circle cx={CB_B.x} cy={CB_B.y} r={3} fill={INK} />
        <Circle cx={CB_C.x} cy={CB_C.y} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={690} y={235} size={12} fill={RED} anchor="middle" weight={700}>
          {t("Area = 0 — a degenerate 'triangle'.", "Area = 0 — ek degenerate 'triangle'.")}
        </T>
      </Fade>

      {/* ===== Card C — sphere reality condition (beats 3-4) ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={300} size={13} fill={AMBER_DARK} anchor="start" weight={700}>SPHERE</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d="M 110 360 A 40 40 0 1 0 190 360 A 40 40 0 1 0 110 360 Z" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={220} y={335} size={14} fill={INK} anchor="start">
          {t("A sphere is real only if", "Sphere real hai sirf tab jab")}
        </T>
        <T x={220} y={359} size={14} fill={INK} anchor="start">
          {t("r² > 0 (radius-squared positive).", "r² > 0 ho (radius-squared positive).")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Circle cx={68} cy={417} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={80} y={428} size={13} fill={INK} anchor="start">
          {t("r² = 0 → shrinks to a single point", "r² = 0 → sirf ek point reh jaata hai")}
        </T>
        <T x={80} y={452} size={13} fill={RED} anchor="start" weight={700}>
          {t("r² < 0 → ∅ (no real points)", "r² < 0 → ∅ (koi real point nahi)")}
        </T>
      </Fade>

      {/* ===== Card D — ellipsoid reality condition (beats 5-6) ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={560} y={300} size={13} fill={AMBER_DARK} anchor="start" weight={700}>ELLIPSOID</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Ellipse cx={650} cy={350} rx={55} ry={25} fill="none" stroke={INK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <Circle cx={F1.x} cy={F1.y} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={601} y={368} size={11} fill={RED} anchor="middle" weight={700}>F1</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <Circle cx={F2.x} cy={F2.y} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={699} y={368} size={11} fill={RED} anchor="middle" weight={700}>F2</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.0)}>
        <T x={720} y={340} size={13} fill={INK} anchor="start">
          {t("Ellipsoid real only if", "Ellipsoid real hai sirf tab jab")}
        </T>
        <T x={720} y={364} size={13} fill={INK} anchor="start">
          {t("sum (2a) > dist(F1,F2)", "sum (2a) > dist(F1,F2) ho")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0)} d={lineD(F1.x, 430, F2.x, 430)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Circle cx={650} cy={430} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={650} y={455} size={12} fill={RED} anchor="middle" weight={700}>
          {t("Shortest path = the segment itself.", "Shortest path hi seedha segment hai.")}
        </T>
      </Fade>

      {/* ===== beat 7 — land the result ===== */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={checkD(200, 530, 18)} stroke={GREEN} sw={2.5} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Chip x={240} y={505} w={620} h={50} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17}>
          {t(
            "Check every limit — don't 'find' a surface that isn't real.",
            "Har limit check karo — mat 'dhoondo' jo surface real nahi hai."
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

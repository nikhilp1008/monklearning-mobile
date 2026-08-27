/**
 * M11 Ch10 · Section 5 — "Example 1 (CBSE): a cone cut at an angle"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — Subtopic 1 (The Conic Family), sec 5 of 7.
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 7.85, 18.35, 31.15, 42.67, 50.26, 60.67,
 * 71.17]; reveals_hinglish = [0, 7.0, 19.54, 31.06, 41.3, 48.9, 59.65, 67.67].
 *
 * Example 1 (top, y100-360): a mini accurate cone (real 30°/50° angles, not
 * eyeballed — half-width computed from tan(30°) so the drawn generator truly
 * reads as 30° off the axis) on the left; the angle-compare reasoning building
 * to a boxed ELLIPSE on the right, then a red aside (JSON red-margin/HIGH) for
 * the boundary case beta=alpha -> PARABOLA.
 * Example 2 (bottom, y390-575): JEE speed question — the equation redraws once
 * (plain -> A/C highlighted, old version fully gated off, not overlaid) then a
 * boxed CIRCLE with the "no centre/radius needed" punchline.
 *
 * Beats:
 *  0(title,always-on) | "Example 1 (CBSE): a cone cut at an angle"
 *  1 | given: mini cone (α=30°,β=50°) + caption
 *  2 | compare 30<50<90 -> α<β<90 -> boxed ELLIPSE
 *  3 | guardrail (red,HIGH): if β=30°=α -> boxed PARABOLA
 *  4 | Example 2 header
 *  5 | equation 3x²+3y²-12x+6y-4=0
 *  6 | highlight: no xy term, A=C=3 (equation re-renders with A/C colored)
 *  7 | boxed CIRCLE + "no centre/radius needed"
 *
 * Layout plan:
 *  b1 | caption                              | T mid | x540 y104
 *  b1 | mini cone (vertex(200,235))           | Draw  | see code
 *  b2 | "30°<50°<90°" / "→ α<β<90°"           | T st  | x400 y140/170
 *  b2 | Chip ELLIPSE                          | Chip  | x400 y195 w180 h42
 *  b3 | red aside 2 lines + Chip PARABOLA     | T/Chip| x400 y270/295, chip y318
 *  b4 | Example2 header                       | T mid | x540 y390
 *  b5 | equation (plain, beat===5 only)       | T mid | x540 y425
 *  b6 | equation (A,C highlighted, beat>=6)   | T mid | x540 y425
 *  b6 | "A = C = 3"                           | T mid | x540 y460
 *  b7 | Chip CIRCLE + note                    | Chip/T| x540 y495 w160 h40 / y565
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD, angleArcD, pointOnCircle } from "./math-kit";

const V2 = { x: 200, y: 235 };
const HALFW = 110 * Math.tan((30 * Math.PI) / 180); // 63.5
const TL2 = { x: V2.x - HALFW, y: 125 };
const TR2 = { x: V2.x + HALFW, y: 125 };
const thetaGen2 = Math.atan2(V2.y - TR2.y, TR2.x - V2.x); // 60°
const thetaAxis2 = Math.PI / 2;
const alphaMid2 = (thetaGen2 + thetaAxis2) / 2;
const alphaLbl2 = pointOnCircle(V2.x, V2.y, 35, alphaMid2);

const M2 = { x: 200, y: 175 };
const betaDeg2 = 40; // tilt from horizontal = 90-50
const betaRad2 = (betaDeg2 * Math.PI) / 180;
const PR2 = pointOnCircle(M2.x, M2.y, 28, betaRad2);
const PL2 = pointOnCircle(M2.x, M2.y, 28, betaRad2 + Math.PI);
const betaMid2 = (betaRad2 + thetaAxis2) / 2;
const betaLbl2 = pointOnCircle(M2.x, M2.y, 25, betaMid2);

export default function M11Ch10Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} anchor="middle" script>
          {t("Example 1 (CBSE): a cone cut at an angle", "Example 1 (CBSE): cone ko angle par kaata gaya")}
        </T>
      </Fade>

      {/* beat 1 — given: mini cone + caption */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={15} fill={INK} anchor="middle">
          {t("Cone: α = 30°. Plane: β = 50°, not through the vertex.", "Cone: α = 30°. Plane: β = 50°, vertex se hoke nahi.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d={lineD(200, 110, 200, 250)} stroke={INK} sw={1.3} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={lineD(V2.x, V2.y, TL2.x, TL2.y)} stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d={lineD(V2.x, V2.y, TR2.x, TR2.y)} stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={lineD(TL2.x, TL2.y, TR2.x, TR2.y)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.65)} d={angleArcD(V2.x, V2.y, 35, thetaGen2, thetaAxis2)} stroke={AMBER_DARK} sw={1.6} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <T x={alphaLbl2.x + 4} y={alphaLbl2.y + 4} size={12} fill={AMBER_DARK} anchor="start" weight={700}>α = 30°</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d={lineD(PL2.x, PL2.y, PR2.x, PR2.y)} stroke={AMBER_DARK} sw={2} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 2.65)} d={angleArcD(M2.x, M2.y, 18, betaRad2, thetaAxis2)} stroke={AMBER_DARK} sw={1.6} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <T x={betaLbl2.x + 4} y={betaLbl2.y} size={12} fill={AMBER_DARK} anchor="start" weight={700}>β = 50°</T>
      </Fade>

      {/* beat 2 — compare -> ellipse */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={400} y={140} size={16} fill={INK} anchor="start">30° &lt; 50° &lt; 90°</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={400} y={170} size={16} fill={INK} anchor="start">→ α &lt; β &lt; 90°</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <Chip x={400} y={195} w={180} h={42} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={20} script={false}>
          {t("ELLIPSE", "ELLIPSE")}
        </Chip>
      </Fade>

      {/* beat 3 — guardrail: the boundary case */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={400} y={270} size={14} fill={RED} anchor="start" weight={700}>
          {t("What if β = 30° = α?", "Agar β = 30° = α ho to?")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={400} y={295} size={14} fill={RED} anchor="start" weight={700}>
          {t("→ parallel to a generator →", "→ generator ke parallel →")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <Chip x={400} y={318} w={200} h={42} fill="#FCF4E0" stroke={RED} textFill={RED} size={20} script={false}>
          {t("PARABOLA", "PARABOLA")}
        </Chip>
      </Fade>

      {/* beat 4 — Example 2 header */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={390} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Example 2 (JEE Main): classify by inspection", "Example 2 (JEE Main): inspection se classify karo")}
        </T>
      </Fade>

      {/* beat 5 — equation, plain (only during beat 5) */}
      <Fade on={beat === 5} delay={dl(5, 0)}>
        <T x={540} y={425} size={18} fill={INK} anchor="middle">3x² + 3y² − 12x + 6y − 4 = 0</T>
      </Fade>

      {/* beat 6 — equation, A/C highlighted (replaces beat 5's, fully gated) */}
      <Fade on={beat >= 6} delay={0}>
        <T x={454} y={425} size={18} fill={AMBER_DARK} anchor="start" weight={700}>3</T>
        <T x={468} y={425} size={18} fill={INK} anchor="start">x² + </T>
        <T x={517} y={425} size={18} fill={AMBER_DARK} anchor="start" weight={700}>3</T>
        <T x={531} y={425} size={18} fill={INK} anchor="start">y² − 12x + 6y − 4 = 0</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={540} y={460} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>A = C = 3</T>
      </Fade>

      {/* beat 7 — boxed CIRCLE + punchline */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={460} y={490} w={160} h={40} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={20} script={false}>
          {t("CIRCLE", "CIRCLE")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={565} size={13} fill={GREEN_DARK} anchor="middle">
          {t("No centre or radius needed.", "Centre ya radius nikalne ki zaroorat nahi.")}
        </T>
      </Fade>
    </Scene>
  );
}

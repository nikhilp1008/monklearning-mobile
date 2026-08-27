/**
 * M11 Ch09 · Section 38 — "Proof: the concurrency determinant, and the family procedure"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept, flagged for extra scrutiny (Proof:) — densest section in the subtopic
 * (9 beats). First literal 3x3 determinant/matrix grid in this chapter — built fresh from
 * primitives (two Draw bars + a 3x3 T grid), no new math-kit primitive added.
 *
 * board_content has N=9 items. Item[0] is the heading -> always-on title. Items[1..8] gate at
 * beat>=1..beat>=8. reveals_english/hinglish each have 9 values (idx 0..8).
 *
 * Concrete grounding example (verified below, reused so the abstract proof has real numbers):
 *   L1: x + y - 3 = 0   L2: x - y - 1 = 0   L3: 2x - y - 3 = 0
 *   J = (2,1): L1(2,1)=2+1-3=0 ✓  L2(2,1)=2-1-1=0 ✓  L3(2,1)=4-1-3=0 ✓  (all three concurrent)
 *   Coeffs: a1=1,b1=1,c1=-3 / a2=1,b2=-1,c2=-1 / a3=2,b3=-1,c3=-3
 *   det = 1[(-1)(-3)-(-1)(-1)] - 1[(1)(-3)-(-1)(2)] + (-3)[(1)(-1)-(-1)(2)]
 *       = 1[3-1] - 1[-3+2] + (-3)[-1+2] = 2 - (-1) + (-3) = 2+1-3 = 0  (script-verified, node -e)
 *
 * Beats:
 *  0(title, always-on) | "Proof: The Concurrency Determinant"
 *  1 | three lines Li ≡ aix+biy+ci=0, no two parallel
 *  2 | L1,L2 meet at J(x0,y0); L3 concurrent => also through J  [small concurrency diagram starts]
 *  3 | matrix-vector product -> rendered as 3 stacked scalar equations (per spec: lower-risk than
 *      a literal bracketed column-vector glyph)
 *  4 | homogeneous system has the nonzero solution (x0,y0,1)
 *  5 | GUARDRAIL (red-margin, high emphasis): nonzero solution only if determinant vanishes
 *  6 | THE PAYOFF (high emphasis): literal 3x3 determinant = 0, + concrete verification line
 *  7 | family procedure: L1+λL2=0, impose condition, solve for λ
 *  8 | quick rules: point -> substitute / slope -> -A/B / perpendicular -> product -1 (3 chips)
 *
 * Layout plan (all x-centered 540 unless noted; left-column proof stays x<800, right-column
 * diagram stays x>=790 so the two never collide even though both persist from beat 2 onward):
 *  b0 | title (26,red,script)                    | T mid   | x540 y62
 *  b1 | text (16,ink)                             | T mid   | x540 y108
 *  b2 | text (15,ink)                              | T mid   | x540 y145
 *  b2 | concurrency diagram: 3 segments thru J     | Draw x3 | around J(860,420), half-len 50
 *  b2 | J dot(amber_dark) + "J(2,1)" label          | circle+T| J label at x900 y420 start
 *  b2 | L1/L2/L3 short tags                        | T       | near each segment's far end
 *  b3 | 3 stacked scalar equations (16,ink)         | T mid x3| x540 y182/210/238
 *  b4 | text (15,ink)                              | T mid   | x540 y275
 *  b5 | guardrail box (red, roundRectD)             | Draw+T  | box x354..726 y300..354
 *  b6 | determinant bars (ink)                      | Draw x2 | x406 & x534, y374..474
 *  b6 | 3x3 grid of coefficients (ink)               | T x9    | cols 430/470/510 rows 400/428/456
 *  b6 | "= 0" (green, bold)                          | T start | x560 y434
 *  b6 | verification label + concrete determinant    | T x2    | x606 y408 / y432
 *  b7 | family-procedure text (15,ink)               | T mid   | x540 y506
 *  b8 | 3 rule chips (Point/Slope/Perp)               | Chip x3 | cx210/540/870 y531..567
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD, roundRectD } from "./math-kit";

// ---- concrete grounding example: L1:x+y-3=0, L2:x-y-1=0, L3:2x-y-3=0, J=(2,1) ----
// small concurrency diagram (right column) — pure line segments through J, no axes
// (a compact "asterisk" of 3 lines meeting at one point is the clearest, briefest way to
// show concurrency; a full Cartesian grid would compete for room with the determinant).
const JX = 860;
const JY = 420;
const HALF = 50;
// L1 slope -1 (math) -> screen direction (1,1)
const L1A = { x: JX + HALF * 0.707, y: JY + HALF * 0.707 }; // (895,455)
const L1B = { x: JX - HALF * 0.707, y: JY - HALF * 0.707 }; // (825,385)
// L2 slope +1 (math) -> screen direction (1,-1)
const L2A = { x: JX + HALF * 0.707, y: JY - HALF * 0.707 }; // (895,385)
const L2B = { x: JX - HALF * 0.707, y: JY + HALF * 0.707 }; // (825,455)
// L3 slope +2 (math) -> math dir (1,2) normalized (0.447,0.894) -> screen (0.447,-0.894)
const L3A = { x: JX + HALF * 0.447, y: JY - HALF * 0.894 }; // (882,375)
const L3B = { x: JX - HALF * 0.447, y: JY + HALF * 0.894 }; // (838,465)

export default function M11Ch09Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Proof: The Concurrency Determinant", "Proof: Concurrency Determinant")}
        </T>
      </Fade>

      {/* beat 1 — three lines, general form, no two parallel */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={108} size={16} fill={INK} anchor="middle">
          {t(
            "Three lines Li ≡ aix + biy + ci = 0, with no two of them parallel.",
            "Teen lines Li ≡ aix + biy + ci = 0, jinme koi do parallel nahi."
          )}
        </T>
      </Fade>

      {/* beat 2 — L1,L2 meet at J; concurrency means L3 through J too. Diagram starts here. */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={145} size={15} fill={INK} anchor="middle">
          {t(
            "L₁, L₂ meet at J(x₀, y₀); concurrency means L₃ also passes through J.",
            "L₁, L₂ J(x₀, y₀) par milte hain; concurrency ka matlab L₃ bhi wahi J se guzre."
          )}
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={lineD(L1B.x, L1B.y, L1A.x, L1A.y)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d={lineD(L2B.x, L2B.y, L2A.x, L2A.y)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 2.0)} d={lineD(L3B.x, L3B.y, L3A.x, L3A.y)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <Circle cx={JX} cy={JY} r={4.5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={900} y={424} size={13} fill={AMBER_DARK} anchor="start" weight={700}>J(2,1)</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.1)}>
        <T x={901} y={462} size={12} fill={MUTED} anchor="start">L₁</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.3)}>
        <T x={901} y={378} size={12} fill={MUTED} anchor="start">L₂</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={882} y={362} size={12} fill={MUTED} anchor="middle">L₃</T>
      </Fade>

      {/* beat 3 — matrix-vector product, rendered as 3 stacked scalar equations */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={182} size={16} fill={INK} anchor="middle">a₁x₀ + b₁y₀ + c₁ = 0</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={540} y={210} size={16} fill={INK} anchor="middle">a₂x₀ + b₂y₀ + c₂ = 0</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={540} y={238} size={16} fill={INK} anchor="middle">a₃x₀ + b₃y₀ + c₃ = 0</T>
      </Fade>

      {/* beat 4 — nonzero solution (x0,y0,1) */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={275} size={15} fill={INK} anchor="middle">
          {t(
            "This homogeneous system has the nonzero solution (x₀, y₀, 1).",
            "Is homogeneous system ka ek nonzero solution hai: (x₀, y₀, 1)."
          )}
        </T>
      </Fade>

      {/* beat 5 — GUARDRAIL (red-margin, high emphasis) */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(354, 300, 372, 54)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={540} y={319} size={14} fill={RED} anchor="middle" weight={700}>
          {t(
            "A homogeneous system has a nonzero solution",
            "Homogeneous system ka nonzero solution tabhi hota hai"
          )}
        </T>
        <T x={540} y={342} size={14} fill={RED} anchor="middle" weight={700}>
          {t("only if its determinant vanishes.", "jab uska determinant zero ho.")}
        </T>
      </Fade>

      {/* beat 6 — THE PAYOFF: literal 3x3 determinant = 0 (high emphasis), + concrete check */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={lineD(406, 374, 406, 474)} stroke={INK} sw={2.4} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 0.4)} d={lineD(534, 374, 534, 474)} stroke={INK} sw={2.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={430} y={400} size={17} fill={INK} anchor="middle">a₁</T>
        <T x={470} y={400} size={17} fill={INK} anchor="middle">b₁</T>
        <T x={510} y={400} size={17} fill={INK} anchor="middle">c₁</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={430} y={428} size={17} fill={INK} anchor="middle">a₂</T>
        <T x={470} y={428} size={17} fill={INK} anchor="middle">b₂</T>
        <T x={510} y={428} size={17} fill={INK} anchor="middle">c₂</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <T x={430} y={456} size={17} fill={INK} anchor="middle">a₃</T>
        <T x={470} y={456} size={17} fill={INK} anchor="middle">b₃</T>
        <T x={510} y={456} size={17} fill={INK} anchor="middle">c₃</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <T x={560} y={434} size={24} fill={GREEN} anchor="start" weight={700}>= 0</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={606} y={408} size={11} fill={MUTED} anchor="start">
          {t("For our example:", "Hamare example ke liye:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.9)}>
        <T x={606} y={432} size={12} fill={GREEN} anchor="start" weight={700}>
          |1, 1, -3; 1, -1, -1; 2, -1, -3| = 0
        </T>
      </Fade>

      {/* beat 7 — family procedure recap */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={506} size={15} fill={INK} anchor="middle">
          {t(
            "Family procedure: write L₁ + λL₂ = 0, impose the extra condition, solve for λ.",
            "Family procedure: L₁ + λL₂ = 0 likho, extra condition impose karo, λ solve karo."
          )}
        </T>
      </Fade>

      {/* beat 8 — quick rules, 3 chips */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <Chip x={115} y={531} w={190} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={16}>
          {t("Point ⇒ substitute", "Point ⇒ substitute")}
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <Chip x={470} y={531} w={140} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={16}>
          {t("Slope ⇒ -A/B", "Slope ⇒ -A/B")}
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <Chip x={780} y={531} w={180} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={16}>
          {t("Perp ⇒ product -1", "Perp ⇒ product -1")}
        </Chip>
      </Fade>
    </Scene>
  );
}

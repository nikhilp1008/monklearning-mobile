/**
 * M11 Ch09 · Section 12 — "The angle between two lines"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept, subtopic "Slope of a Line and Angles" — framed as a 4-step PROCEDURE
 * more than a derivation (task brief). board_content has 8 items; item[0] heading is the
 * always-on title, items[1..7] gate at beat>=1..7 (reveals_english has 8 entries, matching
 * useBeat's -1..7 range).
 *
 * Numbers verified (python): m1=1/3, m2=2 ⇒ 1+m1m2 = 1+2/3 = 5/3 ≠ 0 (NOT the degenerate
 * perpendicular case — deliberately avoided per task brief). m2-m1 = 5/3. tanθ = |(5/3)/(5/3)|
 * = 1 ⇒ θ = 45°. Independently: atan(2) - atan(1/3) = 63.43489...° - 18.43495...° = 45.0000°
 * exactly — both routes agree, so the diagram's two rays are genuinely 45° apart.
 *
 * Diagram geometry: two lines drawn through common point P0=(540,350) as short segments (not
 * full axes — this section is about the angle, not coordinates). Screen dx/dy computed directly
 * from each slope (dy = m·dx, y flips since SVG is y-down):
 *   line1 (m1=1/3, half-run 135px): (405,395) -> (675,305)
 *   line2 (m2=2,   half-run 45px):  (495,440) -> (585,260)
 * angleArcD uses standard math angles theta1=atan(1/3)=0.3217rad, theta2=atan(2)=1.1071rad —
 * both lines' upper-right rays already bracket the acute angle θ=45° directly (arc r=50).
 * The supplementary 180-θ=135° sits in the adjacent sector from theta2 to theta1+π=3.4633rad
 * (arc r=35, faint/MUTED until beat7 "closing" recolors it to AMBER_DARK to tie the callback).
 *
 * Beats:
 *  0(title, always-on) | "The Angle Between Two Lines"
 *  1 | anchor: two supplementary angles, modulus picks acute + THE DIAGRAM (lines, both arcs,
 *      slope labels) — diagram built here since the anchor narration literally describes it
 *  2 | formula: tanθ = |(m2-m1)/(1+m1m2)|, two-part reveal (LHS, then the modulus expression)
 *  3 | step 1 chip: check for a vertical line first
 *  4 | step 2 chip: 1+m1m2=0 ⇒ perpendicular, θ=90°
 *  5 | guardrail chip (red, "!"): zero denominator ⇒ perpendicular, not an error
 *  6 | step 3-4 chip: evaluate the ratio, θ=tan⁻¹ of it
 *  7 | closing: obtuse angle = 180°-θ (+ obtuse arc/label brighten as the callback)
 *
 * Layout plan (deviates from the default row-band map — noted, see spec Step 3):
 *  b0 | title (24,red,script)              | T mid | x540 y62
 *  b1 | anchor text (15,ink)                | T mid | x540 y100
 *  b1 | P0 dot                              | circle | (540,350) r3
 *  b1 | line1 (ink)                         | Draw | (405,395)->(675,305)
 *  b1 | m1 label "m1 = 1/3"                 | T st  | x686 y300
 *  b1 | line2 (ink)                         | Draw | (495,440)->(585,260)
 *  b1 | m2 label "m2 = 2"                   | T st  | x596 y254
 *  b1 | acute arc r50 (amber_dark)          | Draw | angleArcD(540,350,50,0.3217,1.1071)
 *  b1 | θ label                             | T st  | x591 y306
 *  b1 | obtuse arc r35 (muted->amber b7)    | Draw | angleArcD(540,350,35,1.1071,3.4633)
 *  b1 | "180 - θ" label (muted->amber b7)   | T end | x505 y316
 *  b2 | formula LHS "tanθ ="                | T end | x500 y150
 *  b2 | formula RHS "|(m2-m1)/(1+m1m2)|"    | T st  | x512 y150
 *  b3 | step1 badge "1" + 2-line caption    | Chip+T | cx162 y470..504 / caption y526,544
 *  b4 | step2 badge "2" + 2-line caption    | Chip+T | cx414 y470..504 / caption y526,544
 *  b5 | guardrail badge "!" (red) + caption | Chip+T | cx666 y470..504 / caption y526,544
 *  b6 | step3-4 badge + caption             | Chip+T | cx918 y470..504 / caption y526,544
 *  b7 | closing caption (14,amber_dark,script) | T mid | x540 y205
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
  AMBER,
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD, angleArcD, pointOnCircle } from "./math-kit";

const P0 = { x: 540, y: 350 };
const M1 = 1 / 3;
const M2 = 2;
const THETA1 = Math.atan(M1); // 0.3217 rad ≈ 18.43°
const THETA2 = Math.atan(M2); // 1.1071 rad ≈ 63.43°
const THETA_OBTUSE_END = THETA1 + Math.PI; // 3.4633 rad ≈ 198.43°

const RUN1 = 135;
const RUN2 = 45;
const L1A = { x: P0.x - RUN1, y: P0.y + RUN1 * M1 }; // (405,395)
const L1B = { x: P0.x + RUN1, y: P0.y - RUN1 * M1 }; // (675,305)
const L2A = { x: P0.x - RUN2, y: P0.y + RUN2 * M2 }; // (495,440)
const L2B = { x: P0.x + RUN2, y: P0.y - RUN2 * M2 }; // (585,260)

const ARC_R = 50;
const ARC_R_OBTUSE = 35;
const THETA_LABEL = pointOnCircle(P0.x, P0.y, ARC_R + 18, (THETA1 + THETA2) / 2);
const OBTUSE_LABEL = pointOnCircle(P0.x, P0.y, ARC_R_OBTUSE + 18, (THETA2 + THETA_OBTUSE_END) / 2);

const M1_LABEL = { x: L1B.x + 11, y: L1B.y - 5 };
const M2_LABEL = { x: L2B.x + 11, y: L2B.y - 6 };

// bottom checklist strip — four slots
const SLOT_X = [162, 414, 666, 918];
const BADGE_Y = 470;
const BADGE_H = 34;
const CAP_Y1 = 526;
const CAP_Y2 = 544;

export default function M11Ch09Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const obtuseHi = beat >= 7;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} anchor="middle" script>
          {t("The Angle Between Two Lines", "Do Lines Ke Beech Ka Angle")}
        </T>
      </Fade>

      {/* beat 1 — anchor text + THE DIAGRAM */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={100} size={15} fill={INK} anchor="middle">
          {t(
            "Two lines form two supplementary angles θ and 180° − θ; the modulus picks the acute one.",
            "Do lines mil kar do supplementary angles banate hain — θ aur 180° − θ; modulus acute wala chunta hai."
          )}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Circle cx={P0.x} cy={P0.y} r={3} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} dur={0.6} d={lineD(L1A.x, L1A.y, L1B.x, L1B.y)} stroke={INK} sw={2.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={M1_LABEL.x} y={M1_LABEL.y} size={14} fill={INK} anchor="start" weight={700}>
          m₁ = 1/3
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.0)} dur={0.6} d={lineD(L2A.x, L2A.y, L2B.x, L2B.y)} stroke={INK} sw={2.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={M2_LABEL.x} y={M2_LABEL.y} size={14} fill={INK} anchor="start" weight={700}>
          m₂ = 2
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.2)}
        dur={0.5}
        d={angleArcD(P0.x, P0.y, ARC_R, THETA1, THETA2)}
        stroke={AMBER_DARK}
        sw={2.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.9)}>
        <T x={THETA_LABEL.x} y={THETA_LABEL.y} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          θ
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.3)}
        dur={0.5}
        d={angleArcD(P0.x, P0.y, ARC_R_OBTUSE, THETA2, THETA_OBTUSE_END)}
        stroke={obtuseHi ? AMBER_DARK : MUTED}
        sw={obtuseHi ? 2.2 : 1.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.0)}>
        <T
          x={OBTUSE_LABEL.x}
          y={OBTUSE_LABEL.y}
          size={12}
          fill={obtuseHi ? AMBER_DARK : MUTED}
          anchor="end"
          weight={obtuseHi ? 700 : 600}
        >
          180° − θ
        </T>
      </Fade>

      {/* beat 2 — formula, two-part reveal */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={500} y={150} size={22} fill={INK} anchor="end" weight={700}>
          tanθ =
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={512} y={150} size={22} fill={INK} anchor="start" weight={700}>
          |(m₂ - m₁)/(1 + m₁m₂)|
        </T>
      </Fade>

      {/* beat 3 — step 1: vertical line check */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={SLOT_X[0] - 17} y={BADGE_Y} w={34} h={BADGE_H} fill={AMBER} stroke={INK} textFill={INK} size={16} script={false}>
          1
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={SLOT_X[0]} y={CAP_Y1} size={13} fill={INK} anchor="middle">
          {t("Vertical line first —", "Pehle vertical line dekho —")}
        </T>
        <T x={SLOT_X[0]} y={CAP_Y2} size={13} fill={INK} anchor="middle">
          {t("needs both slopes to exist.", "dono slopes zaroori hain.")}
        </T>
      </Fade>

      {/* beat 4 — step 2: perpendicular test */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={SLOT_X[1] - 17} y={BADGE_Y} w={34} h={BADGE_H} fill={AMBER} stroke={INK} textFill={INK} size={16} script={false}>
          2
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={SLOT_X[1]} y={CAP_Y1} size={13} fill={INK} anchor="middle">
          1 + m₁m₂ = 0 ⇒
        </T>
        <T x={SLOT_X[1]} y={CAP_Y2} size={13} fill={INK} anchor="middle">
          perpendicular, θ = 90°
        </T>
      </Fade>

      {/* beat 5 — guardrail: zero denominator is the degenerate case, not an error */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={SLOT_X[2] - 17} y={BADGE_Y} w={34} h={BADGE_H} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          !
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={SLOT_X[2]} y={CAP_Y1} size={13} fill={RED} anchor="middle" weight={700}>
          Zero denominator ⇒
        </T>
        <T x={SLOT_X[2]} y={CAP_Y2} size={13} fill={RED} anchor="middle" weight={700}>
          {t("perpendicular — not an error!", "perpendicular — error nahi hai!")}
        </T>
      </Fade>

      {/* beat 6 — step 3 + 4: evaluate, inverse tan */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={SLOT_X[3] - 27} y={BADGE_Y} w={54} h={BADGE_H} fill={AMBER} stroke={INK} textFill={INK} size={15} script={false}>
          3-4
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={SLOT_X[3]} y={CAP_Y1} size={13} fill={INK} anchor="middle">
          {t("Evaluate the ratio,", "Ratio evaluate karo,")}
        </T>
        <T x={SLOT_X[3]} y={CAP_Y2} size={13} fill={INK} anchor="middle">
          {t("θ = tan⁻¹ of it", "θ = tan⁻¹ uska")}
        </T>
      </Fade>

      {/* beat 7 — closing: obtuse angle callback */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={205} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("Obtuse angle, if asked: 180° − θ.", "Obtuse angle chahiye toh: 180° − θ.")}
        </T>
      </Fade>
    </Scene>
  );
}

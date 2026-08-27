/**
 * M11 Ch09 · Section 50 — "Worked example: bisectors are perpendicular (advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (advanced) — subtopic 6 (Angle Bisectors), continues directly
 * from Sec48's Example 1: verifies the two bisectors found there ARE perpendicular. Sec48's two
 * equations are treated as known/given (cited, not re-derived).
 *
 * board_content has 8 items; item[0] (heading) is the always-on title, items[1..7] gate at
 * beat>=1..7. reveals_english=[0,9.47,16.13,28.07,40.02,47.1,59.99,71.51] (8 values).
 * reveals_hinglish=[0,9.39,16.98,27.05,37.89,44.63,55.81,65.79] (8 values).
 *
 * Arithmetic verified independently (hand + re-checked with node before authoring — all match
 * the task brief exactly):
 *   14x - 112y + 101 = 0  =>  m1 = -A/B = -14/(-112) = 14/112 = 1/8 = 0.125  ✓
 *   64x + 8y + 81 = 0     =>  m2 = -A/B = -64/8 = -8                        ✓
 *   m1 * m2 = (1/8) * (-8) = -1  ✓  (node: (14/112)*(-64/8) === -1)
 *
 * Diagram (schematic, own clean screen-pixel slopes — NOT Sec48's actual plotted coordinates,
 * per task brief): two segments crossing at C=(820,325), built from direction vectors chosen so
 * their |rise/run| ratios visually echo the real slope magnitudes (1/8 shallow, 8 steep):
 *   DIR1 = (96, -12)  -> |DIR1.y/DIR1.x| = 12/96 = 1/8   (echoes m1's magnitude)
 *   DIR2 = (12, 96)   -> |DIR2.y/DIR2.x| = 96/12 = 8     (echoes m2's magnitude)
 *   Dot product (exact integers, no rounding): 96*12 + (-12)*96 = 1152 - 1152 = 0
 *   => DIR1 ⊥ DIR2 exactly, so the two drawn lines are genuinely perpendicular on screen, not
 *   just algebraically claimed. (Node-verified before authoring, see verify block in PR notes.)
 *   L1A=(916,313) L1B=(724,337) [line "m1", shallow]  L2A=(832,421) L2B=(808,229) [line "m2", steep]
 *   The 90° angle arc is NOT hand-picked degrees: thetaA/thetaB are computed at runtime via
 *   Math.atan2 from the actual drawn endpoints (same discipline as Sec11's runtime-computed
 *   theta) — evaluates to thetaA=7.125°, thetaB=97.125°, difference = 90.00000...° exactly,
 *   confirming the arc's sweep is a real right angle, not an approximation.
 *
 * Beats:
 *  0(title, always-on) | "Worked: Bisectors Are Perpendicular (Advanced)"
 *  1 | text: verify perpendicularity for Example 1's two bisectors
 *  2 | formula: 14x - 112y + 101 = 0 => m1 = 14/112 = 1/8  + diagram: draw line "m1" (shallow) + tag
 *  3 | formula: 64x + 8y + 81 = 0 => m2 = -64/8 = -8  + diagram: draw line "m2" (steep) + tag + crossing dot
 *  4 | formula (HIGH), boxed green: m1 . m2 = 1/8 x (-8) = -1  + diagram: 90° arc + label lands
 *  5 | text (2 lines): why it must hold — supplementary angles, differing by exactly 90°
 *  6 | RED-MARGIN GUARDRAIL (HIGH): if one angle is 2α, the other is 2(90° - α) — 90° apart
 *  7 | closing line: structural fact, a free sanity check every time
 *
 * Layout plan (left column = derivation, x60-560 anchor start x70; right column = diagram,
 * x700-980; both full-width bands above/below):
 *  b0 | title (24,red,script)                  | T mid       | x540 y64
 *  b1 | setup text (16,ink)                     | T mid       | x540 y100
 *  b2 | L "14x - 112y + 101 = 0" (16,ink)        | T start     | x70 y148
 *  b2 | L "=> m1 = 14/112 = 1/8" (16,ink,w700)   | T start     | x70 y180
 *  b2 | R line "m1" (ink) L1B->L1A               | Draw        | (724,337)->(916,313)
 *  b2 | R "m1 = 1/8" tag                          | T start     | x930 y308
 *  b3 | L "64x + 8y + 81 = 0" (16,ink)            | T start     | x70 y228
 *  b3 | L "=> m2 = -64/8 = -8" (16,ink,w700)      | T start     | x70 y260
 *  b3 | R line "m2" (ink) L2B->L2A                | Draw        | (808,229)->(832,421)
 *  b3 | R "m2 = -8" tag                            | T mid       | x808 y210
 *  b3 | R crossing dot C (ink)                     | circle      | (820,325) r4
 *  b4 | L boxed "m1 . m2 = 1/8 x (-8) = -1" (green)| Chip        | x70 y300 w310 h50
 *  b4 | R 90° angle arc (green)                     | Draw angleArcD | C r24 thetaA..thetaB
 *  b4 | R "90°" label (green)                       | T mid       | ~x847 y290 (runtime-computed)
 *  b5 | L "Why it must hold: the bisectors split" (14,ink)      | T start | x70 y392
 *  b5 | L "supplementary angles, differing by exactly 90°."     | T start | x70 y416
 *  b6 | red bar x60 y470..520                       | Draw        |
 *  b6 | guardrail 2-line text (15,red,w700)          | T start     | x76 y490 / y515
 *  b7 | closing caption (14,amber_dark,script)       | T mid       | x540 y564
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
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD, angleArcD, pointOnCircle } from "./math-kit";

/* schematic diagram — own clean screen-pixel slopes, NOT Sec48's actual plotted line, verified
 * perpendicular via exact-integer dot product (see header comment) */
const CX = 820;
const CY = 325;
const DIR1 = { x: 96, y: -12 }; // |y/x| = 1/8, echoes m1's magnitude — the "shallow" line
const DIR2 = { x: 12, y: 96 }; // |y/x| = 8, echoes m2's magnitude — the "steep" line
// dot check: 96*12 + (-12)*96 = 0 -> DIR1 ⊥ DIR2 exactly (integer arithmetic, no rounding)

const L1A = { x: CX + DIR1.x, y: CY + DIR1.y }; // (916,313)
const L1B = { x: CX - DIR1.x, y: CY - DIR1.y }; // (724,337)
const L2A = { x: CX + DIR2.x, y: CY + DIR2.y }; // (832,421)
const L2B = { x: CX - DIR2.x, y: CY - DIR2.y }; // (808,229)

// angle marked at C between the ray toward L1A and the ray toward L2B — computed at runtime
// from the actual drawn endpoints (not hardcoded degrees), same discipline as Sec11's theta.
const THETA_A = Math.atan2(CY - L1A.y, L1A.x - CX); // ≈ 7.125°
const THETA_B = Math.atan2(CY - L2B.y, L2B.x - CX); // ≈ 97.125° (diff ≈ 90.000°)
const ARC_R = 24;
const ANGLE_LABEL = pointOnCircle(CX, CY, ARC_R + 20, (THETA_A + THETA_B) / 2);

export default function M11Ch09Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} anchor="middle" script>
          {t(
            "Worked: Bisectors Are Perpendicular (Advanced)",
            "Worked: Bisectors Perpendicular Hain (Advanced)"
          )}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={100} size={16} fill={INK} anchor="middle">
          {t(
            "Verify perpendicularity for the two bisectors found in Example 1.",
            "Example 1 ke dono bisectors ki perpendicularity verify karo."
          )}
        </T>
      </Fade>

      {/* beat 2 — m1: formula (left) + diagram line "m1" (right) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={70} y={148} size={16} fill={INK} anchor="start">14x - 112y + 101 = 0</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={70} y={180} size={16} fill={INK} anchor="start" weight={700}>
          ⇒ m1 = 14/112 = 1/8
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={lineD(L1B.x, L1B.y, L1A.x, L1A.y)} stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={930} y={308} size={13} fill={INK} anchor="start" weight={700}>m1 = 1/8</T>
      </Fade>

      {/* beat 3 — m2: formula (left) + diagram line "m2" (right) + crossing dot */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={70} y={228} size={16} fill={INK} anchor="start">64x + 8y + 81 = 0</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={70} y={260} size={16} fill={INK} anchor="start" weight={700}>
          ⇒ m2 = -64/8 = -8
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.9)} d={lineD(L2B.x, L2B.y, L2A.x, L2A.y)} stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={808} y={210} size={13} fill={INK} anchor="middle" weight={700}>m2 = -8</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <Circle cx={CX} cy={CY} r={4} fill={INK} />
      </Fade>

      {/* beat 4 — landed result (HIGH): boxed product (left) + 90° arc lands (right) */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={70} y={300} w={310} h={50} fill="#FCF4E0" stroke={GREEN} textFill={GREEN_DARK} size={20} script={false}>
          m1 · m2 = 1/8 × (-8) = -1
        </Chip>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.7)} d={angleArcD(CX, CY, ARC_R, THETA_A, THETA_B)} stroke={GREEN} sw={2.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={ANGLE_LABEL.x} y={ANGLE_LABEL.y} size={13} fill={GREEN_DARK} anchor="middle" weight={700}>90°</T>
      </Fade>

      {/* beat 5 — why it must hold */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={70} y={392} size={14} fill={INK} anchor="start">
          {t(
            "Why it must hold: the bisectors split",
            "Yeh isliye hota hai: bisectors supplementary"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={70} y={416} size={14} fill={INK} anchor="start">
          {t(
            "supplementary angles, differing by exactly 90°.",
            "angles split karte hain — bilkul 90° ka fark."
          )}
        </T>
      </Fade>

      {/* beat 6 — RED-MARGIN GUARDRAIL (HIGH) */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d="M 60 470 L 60 520" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={490} size={15} fill={RED} anchor="start" weight={700}>
          {t("If one angle is 2α, the other is 2(90° - α) —", "Agar ek angle 2α hai, doosra 2(90° - α) hai —")}
        </T>
        <T x={76} y={515} size={15} fill={RED} anchor="start" weight={700}>
          {t("half-lines 90° apart.", "half-lines bilkul 90° door hain.")}
        </T>
      </Fade>

      {/* beat 7 — closing */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={564} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t(
            "So this perpendicularity is a structural fact, and a free sanity check every time.",
            "Toh yeh perpendicularity ek structural fact hai — har baar ka free sanity check."
          )}
        </T>
      </Fade>
    </Scene>
  );
}

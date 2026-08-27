/**
 * M11 Ch09 · Section 44 — "Angle bisectors: the equidistant lines"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — OPENS the "Angle Bisectors" subtopic. 8 board_content beats, reveal_at
 * indices 0-7 map directly to the `reveals` prop (item[0] = heading -> always-on title,
 * items[1..7] gate at beat>=1..beat>=7).
 * reveals_english (8) = [0.0, 10.24, 22.95, 31.23, 45.31, 56.92, 67.24, 80.21]
 * reveals_hinglish (8) = [0.0, 9.98, 19.63, 28.25, 39.68, 51.71, 61.78, 73.13]
 *
 * Beats:
 *  0(title, always-on) | "Angle Bisectors: the Equidistant Lines"
 *  1 | text: two lines crossing make four angles; bisectors split each exactly in half
 *  2 | THE DIAGRAM: two crossing lines through O (slope +1 / slope -1) + their two angle
 *      bisectors (horizontal/vertical, MUTED construction lines) + labels + caption
 *  3 | text: a point lies on a bisector exactly when equidistant from the two lines
 *  4 | formula (normal emphasis): (a1x+b1y+c1)/√(a1²+b1²) = ±(a2x+b2y+c2)/√(a2²+b2²)
 *  5 | text: dropping the moduli introduces a ± — the two signs give the two bisectors
 *  6 | RED-MARGIN GUARDRAIL (high emphasis): normalize c1, c2 > 0 before identifying which is which
 *  7 | closing: the two bisectors are always perpendicular — a free check on every answer
 *
 * Schematic diagram (no Cartesian axes — the concept is bisector STRUCTURE, not coordinates,
 * matching Sec2/Sec36/Sec37 precedent for schematic, non-axes diagrams in this chapter).
 * Screen pixel coordinates hand-picked directly per SCENE_AUTHORING_MATHS.md's explicit
 * allowance for schematic diagrams — no toScreen() needed.
 *
 * VERIFICATION (perpendicularity of the two drawn bisectors — mirrors the M11Ch04Sec61 header
 * precedent this chapter follows):
 *   O = (300, 350). Line 1 endpoints (195,245)-(405,455): direction = (405-195, 455-245)
 *     = (210, 210) -> simplifies to (1, 1) [screen "\" diagonal, slope +1].
 *   Line 2 endpoints (195,455)-(405,245): direction = (405-195, 245-455) = (210, -210)
 *     -> simplifies to (1, -1) [screen "/" diagonal, slope -1].
 *   The two angle bisectors of two lines are the normalized SUM and DIFFERENCE of their unit
 *   direction vectors (standard identity — each bisects one pair of vertical angles):
 *     u1 + u2 = (1,1) + (1,-1) = (2, 0) -> direction (1, 0) -> HORIZONTAL.
 *       Matches the drawn Bisector-h: BISH_B - BISH_A = (378-222, 350-350) = (156, 0)
 *       -> (1, 0) ✓ identical direction.
 *     u1 - u2 = (1,1) - (1,-1) = (0, 2) -> direction (0, 1) -> VERTICAL.
 *       Matches the drawn Bisector-v: BISV_B - BISV_A = (300-300, 428-272) = (0, 156)
 *       -> (0, 1) ✓ identical direction.
 *   Dot product of the two bisector directions: (1,0)·(0,1) = 1*0 + 0*1 = 0
 *     -> PERPENDICULAR, confirmed both algebraically and by inspection (one bisector is drawn
 *        dead horizontal, the other dead vertical, through the same point O).
 *   (Bonus, not required by the general fact: dot(u1,u2) = 1*1 + 1*(-1) = 0 too, i.e. THIS
 *    illustrative pair of lines — slope +1 and slope -1 — is itself perpendicular, exactly as
 *    the task's own suggested example describes. The caption states the GENERAL fact; this
 *    concrete pair is one verified instance of it, chosen because it is "trivially exact.")
 *
 * Layout plan:
 *  b0 | title (26,red,script)                    | T mid | x540 y62
 *  b1 | text (16,ink)                             | T mid | x540 y96
 *  b2 | Line 1 (ink)                              | Draw | (195,245)-(405,455)
 *  b2 | Line 2 (ink)                               | Draw | (195,455)-(405,245)
 *  b2 | O dot                                     | circle | (300,350) r4
 *  b2 | O label                                   | T start | x342 y367
 *  b2 | "Line 1" label                            | T start | x425 y447
 *  b2 | "Line 2" label                            | T start | x425 y253
 *  b2 | Bisector-h (muted, construction)          | Draw | (222,350)-(378,350)
 *  b2 | "Bisector 1" label (amber_dark)           | T start | x390 y372
 *  b2 | Bisector-v (muted, construction)          | Draw | (300,272)-(300,428)
 *  b2 | "Bisector 2" label (amber_dark)           | T mid | x300 y450
 *  b2 | caption (14, amber_dark)                  | T mid | x316 y496
 *  b3 | text 2-line (16,ink)                      | T start | x576 y168 / y194
 *  b4 | formula (19,ink,weight700)                | T mid | x540 y534
 *  b5 | text 2-line (16,ink)                      | T start | x576 y268 / y294
 *  b6 | red bar x560 y346..400 + text 2-line (15,red) | Draw+T start | x578 y368 / y392
 *  b7 | closing (15,amber_dark,script)             | T mid | x540 y578
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

const O = { x: 300, y: 350 };
const R = 105; // reach of the two crossing lines from O
const RB = 78; // reach of the two bisectors from O (drawn shorter — "construction" scale)

const LINE1_A = { x: O.x - R, y: O.y - R }; // (195,245)
const LINE1_B = { x: O.x + R, y: O.y + R }; // (405,455)
const LINE2_A = { x: O.x - R, y: O.y + R }; // (195,455)
const LINE2_B = { x: O.x + R, y: O.y - R }; // (405,245)
const BISH_A = { x: O.x - RB, y: O.y }; // (222,350)
const BISH_B = { x: O.x + RB, y: O.y }; // (378,350)
const BISV_A = { x: O.x, y: O.y - RB }; // (300,272)
const BISV_B = { x: O.x, y: O.y + RB }; // (300,428)

const FORMULA = "(a₁x + b₁y + c₁)/√(a₁² + b₁²) = ±(a₂x + b₂y + c₂)/√(a₂² + b₂²)";

export default function M11Ch09Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Angle Bisectors: the Equidistant Lines", "Angle Bisectors: Barabar Doori Wali Lines")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={96} size={16} fill={INK} anchor="middle">
          {t(
            "Two lines crossing make four angles — the bisectors split each exactly in half.",
            "Do lines cross hoti hain toh chaar angles bante hain — bisectors unhe half-half baant dete hain."
          )}
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM: two crossing lines, their two perpendicular bisectors */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={lineD(LINE1_A.x, LINE1_A.y, LINE1_B.x, LINE1_B.y)} stroke={INK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={lineD(LINE2_A.x, LINE2_A.y, LINE2_B.x, LINE2_B.y)} stroke={INK} sw={2.4} dur={0.5} />

      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <Circle cx={O.x} cy={O.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={342} y={367} size={13} fill={INK} anchor="start" weight={700}>O</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={425} y={447} size={13} fill={INK} anchor="start" weight={700}>Line 1</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={425} y={253} size={13} fill={INK} anchor="start" weight={700}>Line 2</T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 2.2)} d={lineD(BISH_A.x, BISH_A.y, BISH_B.x, BISH_B.y)} stroke={MUTED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <T x={390} y={372} size={13} fill={AMBER_DARK} anchor="start" weight={700}>Bisector 1</T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 3.0)} d={lineD(BISV_A.x, BISV_A.y, BISV_B.x, BISV_B.y)} stroke={MUTED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={300} y={450} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>Bisector 2</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 4.0)}>
        <T x={316} y={496} size={14} fill={AMBER_DARK} anchor="middle" weight={600}>
          {t(
            "The two angle bisectors are always perpendicular to each other.",
            "Dono angle bisectors hamesha ek doosre ke perpendicular hote hain."
          )}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={576} y={168} size={16} fill={INK} anchor="start">
          {t("A point lies on a bisector exactly", "Point bisector par tabhi hota hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={576} y={194} size={16} fill={INK} anchor="start">
          {t("when it is equidistant from the two lines.", "jab woh dono lines se equidistant ho.")}
        </T>
      </Fade>

      {/* beat 4 — formula, normal emphasis: plain bold ink text, not boxed */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={534} size={19} fill={INK} anchor="middle" weight={700} script={false}>
          {FORMULA}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={576} y={268} size={16} fill={INK} anchor="start">
          {t("Dropping the moduli introduces a ± —", "Moduli hataane se ± aata hai —")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={576} y={294} size={16} fill={INK} anchor="start">
          {t("the two signs give the two bisectors.", "dono signs se dono bisectors milte hain.")}
        </T>
      </Fade>

      {/* beat 6 — RED-MARGIN GUARDRAIL, high emphasis */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 560 346 L 560 400" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={578} y={368} size={15} fill={RED} anchor="start" weight={700}>
          {t("Identification rules need c₁, c₂ > 0 —", "Identification rules ke liye c₁, c₂ > 0 chahiye —")}
        </T>
        <T x={578} y={392} size={15} fill={RED} anchor="start" weight={700}>
          {t("normalize both constants positive first.", "pehle dono constants positive normalize karo.")}
        </T>
      </Fade>

      {/* beat 7 — closing */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={578} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t(
            "The two bisectors are always perpendicular — a free check on every answer.",
            "Dono bisectors hamesha perpendicular hote hain — har answer ka free check."
          )}
        </T>
      </Fade>
    </Scene>
  );
}

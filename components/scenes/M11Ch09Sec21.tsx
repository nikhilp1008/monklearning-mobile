/**
 * M11 Ch09 · Section 21 — "Reducing the general form to normal form"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic "Equations of a Line". Narration calls this the single
 * most error-prone step in the subtopic (the sign choice), so it gets a full worked
 * illustration, not just the abstract rule.
 *
 * board_content has 8 items: item[0] is the heading (always-on title). Items 1..7
 * (seq2..seq8) gate at beat>=1..beat>=7. reveals_english (8 values) =
 * [0, 7.59, 16.38, 27.05, 38.57, 47.36, 54.02, 69.63].
 *
 * Numbers verified from JSON's own algorithm, worked with A=3, B=4, C=-20 (line
 * 3x+4y-20=0), computed by node and checked here:
 *   √(A²+B²) = √(9+16) = √25 = 5.
 *   Move constant: 3x+4y = 20 (= -C, already positive here).
 *   C = -20 is NEGATIVE ⇒ rule says choose the sign OPPOSITE to C ⇒ choose +.
 *   Divide by +5: (3/5)x + (4/5)y = 4 ⇒ cos ω = 0.6, sin ω = 0.8, p = |-20|/5 = 4.
 *   Check: cos²ω + sin²ω = 0.36 + 0.64 = 1 ✓ (genuine unit vector).
 *   ω = arccos(0.6) ≈ 53.13°; sin ω = 0.8 > 0 too ⇒ both signs positive ⇒ Quadrant I
 *   (consistent — this is exactly the guardrail: fix ω from BOTH signs, not cos alone).
 *   WRONG-SIGN CONTRAST (the guardrail's concrete demonstration): dividing by -5 instead
 *   gives cos ω = -0.6, sin ω = -0.8, and the right side becomes -4, i.e. "p = -4" — an
 *   invalid negative distance. Crossed out on the board next to the correct p = 4.
 *   Diagram check: foot of perpendicular N = (p cos ω, p sin ω) = (4×0.6, 4×0.8) =
 *   (2.4, 3.2). On the line? 3(2.4) + 4(3.2) - 20 = 7.2 + 12.8 - 20 = 0 ✓.
 *   Screen mapping for the diagram (scale=18px/unit, origin O_screen=(840,470)):
 *     toScreen(x,y) = {x: 840+18x, y: 470-18y}
 *     line pt (0,5) -> (840,380)   line pt (20/3,0) -> (960,470)   N(2.4,3.2) -> (883.2,412.4)
 *
 * Beats:
 *  0 (title, always-on) | "Reducing Ax+By+C=0 to Normal Form"
 *  1 | move the constant across: Ax+By = -C            (+ concrete: 3x+4y-20=0 -> 3x+4y=20)
 *  2 | divide by ±√(A²+B²), sign so RHS positive        (+ concrete: √(9+16)=5)
 *  3 | GUARDRAIL — sign opposite to C's sign, boxed card with the wrong-vs-right demo
 *     (correct: C=-20 negative -> +, ÷+5 -> p=4 ✓ | wrong: ÷-5 -> p=-4, crossed out)
 *  4 | cos ω / sin ω formulas                            (+ concrete: 0.6 / 0.8)
 *     — diagram: axes + the line 3x+4y=20 drawn
 *  5 | boxed p formula                                   (+ concrete: p = |-20|/5 = 4)
 *     — diagram: perpendicular ON, foot N, angle arc, "p=4" / "ω≈53.13° (Quadrant I)"
 *  6 | GUARDRAIL — fix ω from cos ω AND sin ω together, never one alone
 *     (+ concrete: cos²ω+sin²ω=0.36+0.64=1, a genuine unit vector)
 *  7 | GUARDRAIL — closing: general form is the universal fallback that never fails
 *
 * Layout plan (deviates from the default row bands — this concept section is unusually
 * dense with mandatory guardrail content, so the story/demo/verdict bands are stretched
 * to fill the whole canvas below the title; the diagram lives in a side column at
 * x800-1044 so it costs no extra vertical budget):
 *  b0 | title (22,red,script)                  | T mid  | x540 y62
 *  b1 | general (15,ink)                       | T mid  | x540 y100
 *  b1 | concrete (13,amber_dark)                | T mid  | x540 y123
 *  b2 | general (15,ink)                       | T mid  | x540 y150
 *  b2 | concrete (13,amber_dark)                | T mid  | x540 y173
 *  b3 | card roundRectD x170..910 y194..286    | Draw (red)
 *  b3 | rule (15,red,w700)                     | T mid  | x540 y218
 *  b3 | checkD icon (green)                     | Draw   | (204,241)
 *  b3 | correct row (13,green)                  | T start| x220 y246
 *  b3 | crossD over wrong row                    | Draw (red)
 *  b3 | wrong row (13,red)                       | T start| x220 y270
 *  b4 | general formula (15,ink)                 | T mid  | x540 y314
 *  b4 | concrete (13,amber_dark)                 | T mid  | x540 y337
 *  b4 | diagram: axes + line (ink)                | Draw   | x800-985 y365-486
 *  b5 | chip boxed p formula                      | Chip   | x425..655 y362..398
 *  b5 | concrete landed (15,green,w700)            | T mid  | x540 y426
 *  b5 | diagram: perpendicular, N, angle arc, labels | Draw+T | around (883,412)
 *  b6 | rule (14,red,w700)                        | T mid  | x540 y454
 *  b6 | concrete verify (13,ink)                   | T mid  | x540 y478
 *  b7 | red bar x180 y500..534                     | Draw
 *  b7 | closing (15,red,w700)                       | T start| x200 y522
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
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD, angleArcD, pointOnCircle, roundRectD, checkD } from "./math-kit";

/* diagram geometry — scale=18px/unit, origin O_screen=(840,470) */
const OX = 840;
const OY = 470;
const SCALE = 18;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}
const LINE_P0 = toScreen(0, 5); // (840,380)
const LINE_P1 = toScreen(20 / 3, 0); // (960,470)
const N = toScreen(2.4, 3.2); // (883.2,412.4)
const OMEGA_RAD = Math.atan2(0.8, 0.6); // 0.9273 rad ≈ 53.13°

export default function M11Ch09Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const wrongRowW = en ? 190 : 200;
  const wrongRowX = 220;
  const wrongRowY = 270;
  const wrongRowSize = 13;
  const wrongRowTop = wrongRowY - 0.78 * wrongRowSize;
  const wrongRowH = 0.78 * wrongRowSize + 0.31 * wrongRowSize;

  const omegaLabelPt = pointOnCircle(OX, OY, 40, OMEGA_RAD / 2);
  const pLabelMid = { x: (OX + N.x) / 2, y: (OY + N.y) / 2 };

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Reducing Ax + By + C = 0 to Normal Form", "Ax + By + C = 0 Ko Normal Form Mein Lana")}
        </T>
      </Fade>

      {/* beat 1 — move the constant across */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={100} size={15} fill={INK} anchor="middle">
          {t("Move the constant across: Ax + By = -C", "Constant ko right mein le jao: Ax + By = -C")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={540} y={123} size={13} fill={AMBER_DARK} anchor="middle">
          e.g. 3x + 4y - 20 = 0  →  3x + 4y = 20
        </T>
      </Fade>

      {/* beat 2 — divide by the signed root */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={150} size={15} fill={INK} anchor="middle">
          {t(
            "Divide by ±√(A² + B²) — sign chosen so the right side is positive",
            "±√(A² + B²) se divide karo — sign aisa chuno ki right side positive aaye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={540} y={173} size={13} fill={AMBER_DARK} anchor="middle">
          √(3² + 4²) = √(9 + 16) = 5
        </T>
      </Fade>

      {/* beat 3 — GUARDRAIL: sign opposite to C, wrong-vs-right demo */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(170, 194, 740, 92, 14)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={540} y={218} size={15} fill={RED} anchor="middle" weight={700}>
          {t(
            "Pick the sign OPPOSITE to C — p is a distance, never negative",
            "C ke sign ke OPPOSITE sign chuno — p distance hai, kabhi negative nahi"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.1)} d={checkD(204, 241, 12)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={220} y={246} size={13} fill={GREEN} anchor="start" weight={700}>
          {t(
            "C = -20 is negative → choose + → ÷ (+5) → p = 4",
            "C = -20 negative hai → + sign chuno → ÷ (+5) → p = 4"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={wrongRowX} y={wrongRowY} size={wrongRowSize} fill={RED} anchor="start" weight={700}>
          {t("Wrong sign: ÷ (-5) → p = -4", "Galat sign: ÷ (-5) → p = -4")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.1)}
        d={crossD(wrongRowX, wrongRowTop, wrongRowW, wrongRowH)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />

      {/* beat 4 — cos ω / sin ω formulas */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={314} size={15} fill={INK} anchor="middle">
          cos ω = A / (±√(A²+B²))     sin ω = B / (±√(A²+B²))
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={540} y={337} size={13} fill={AMBER_DARK} anchor="middle">
          cos ω = 3/5 = 0.6     sin ω = 4/5 = 0.8
        </T>
      </Fade>

      {/* beat 4 — diagram: axes + the actual line 3x+4y=20 */}
      <Draw on={beat >= 4} delay={dl(4, 1.3)} d={lineD(800, 470, 985, 470)} stroke={MUTED} sw={1.4} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 1.5)} d={lineD(OX, 486, OX, 365)} stroke={MUTED} sw={1.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <Circle cx={OX} cy={OY} r={3} fill={INK} />
        <T x={826} y={478} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2)} d={lineD(LINE_P0.x, LINE_P0.y, LINE_P1.x, LINE_P1.y)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <T x={846} y={378} size={10} fill={MUTED} anchor="start">3x+4y=20</T>
      </Fade>

      {/* beat 5 — boxed p formula */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={425} y={362} w={230} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          p = |C| / √(A² + B²)
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={540} y={426} size={15} fill={GREEN} anchor="middle" weight={700}>
          p = |-20| / 5 = 4
        </T>
      </Fade>

      {/* beat 5 — diagram: perpendicular ON, foot N, angle arc, labels */}
      <Draw on={beat >= 5} delay={dl(5, 1.1)} d={lineD(OX, OY, N.x, N.y)} stroke={AMBER_DARK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <Circle cx={N.x} cy={N.y} r={3.5} fill={AMBER_DARK} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.9)} d={angleArcD(OX, OY, 24, 0, OMEGA_RAD)} stroke={INK} sw={1.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={pLabelMid.x + 10} y={pLabelMid.y - 4} size={12} fill={AMBER_DARK} anchor="start" weight={700}>
          p = 4
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={omegaLabelPt.x + 4} y={omegaLabelPt.y + 4} size={11} fill={INK} anchor="start">
          ω ≈ 53.13° (Quadrant I)
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL: fix ω from both signs together */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={454} size={14} fill={RED} anchor="middle" weight={700}>
          {t(
            "Fix ω from cos ω AND sin ω together — never from one alone",
            "ω ko cos ω AUR sin ω dono se fix karo — akela kabhi nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={540} y={478} size={13} fill={INK} anchor="middle">
          cos²ω + sin²ω = 0.36 + 0.64 = 1 — a genuine unit vector
        </T>
      </Fade>

      {/* beat 7 — GUARDRAIL: closing, universal fallback */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 180 500 L 180 534" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={200} y={522} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "General form is the only form that never fails — your universal fallback.",
            "General form kabhi fail nahi hota — yeh tumhara universal fallback hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}

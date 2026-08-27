/**
 * M11 Ch09 · Section 57 — "Worked example: image, and verifying equal distances"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples · subtopic "Straight Lines" reflection/image formula, then the
 * result is independently verified via the perpendicular-distance formula (Sec31's precedent for
 * compute-then-verify).
 *
 * Numbers verified (independently re-derived):
 *  P(1,1), line 3x - 4y + 5 = 0 -> a=3, b=-4, c=5.
 *  ax1+by1+c = 3(1)+(-4)(1)+5 = 3-4+5 = 4 ✓.  a²+b² = 9+16 = 25 ✓.
 *  step = -2(ax1+by1+c)/(a²+b²) = -2(4)/25 = -8/25 ✓.
 *  P' = (x1+step*a, y1+step*b) = (1+(-8/25)(3), 1+(-8/25)(-4)) = (1-24/25, 1+32/25)
 *     = (1/25, 57/25) ✓ exact (1-24/25=1/25; 25/25+32/25=57/25). Decimal: (0.04, 2.28).
 *  Distance of P from the line = |ax1+by1+c|/sqrt(a²+b²) = |4|/5 = 0.8 ✓.
 *  Distance of P' from the line: a*P'x+b*P'y+c = 3(1/25)-4(57/25)+5 = 3/25-228/25+125/25
 *     = -100/25 = -4. |-4|/5 = 0.8 ✓ — matches the claimed "distance of P' = 4/5 = 0.8" exactly.
 *  SIGN-FLIP note: the raw expression flips from +4 (at P) to -4 (at P') — same magnitude,
 *  opposite sign -> P and P' are genuinely on OPPOSITE SIDES of the line, at the SAME distance.
 *  That sign flip is the actual content of beat7's guardrail; the diagram makes it visible
 *  directly (P and P' drawn either side of the line) rather than restating the signed value
 *  on the board, since the JSON's own beat6 formula only carries the absolute distance.
 *  Foot of the perpendicular (midpoint of P,P', must lie on the line by construction):
 *  M = ((1+1/25)/2, (1+57/25)/2) = (13/25, 41/25) = (0.52, 1.64).
 *  Check M on line: 3(0.52)-4(1.64)+5 = 1.56-6.56+5 = 0 ✓.
 *  Clean points used to draw the line itself: (-3,-1) [3(-3)-4(-1)+5=-9+4+5=0 ✓],
 *  (5,5) [3(5)-4(5)+5=15-20+5=0 ✓].
 *
 * Beat-index: board_content has 8 items. item[0] heading -> always-on title. items[1..7] gate at
 * beat>=1..7. reveals_english=[0.0,6.14,15.02,24.23,31.91,43.09,51.54,60.16] (8 values).
 * reveals_hinglish=[0.0,7.77,15.87,28.5,36.1,49.07,56.83,63.4] (8 values).
 *
 * Beats:
 *  0(title, always-on) | "Worked: Image & Verifying Equal Distances"
 *  1 | problem statement + diagram object: axes, line 3x-4y+5=0 (two clean points), P(1,1)
 *  2 | formula: ax1+by1+c = 3-4+5 = 4,  a²+b² = 25
 *  3 | formula: step = -2(4)/25 = -8/25
 *  4 | LAND (boxed, GREEN, high emphasis): P' = (1-24/25, 1+32/25) = (1/25, 57/25)
 *     + diagram: P' dot (green) + decimal label, on the opposite side of the line from P
 *  5 | text: distance of P from the line is |4|/5 = 0.8
 *     + diagram: foot M marked, perpendicular P->M drawn (green), "0.8" labeled
 *  6 | formula/text: distance of P' from the line is 4/5 = 0.8
 *     + diagram: perpendicular M->P' drawn (green), "0.8" labeled — completes the full P-P'
 *       perpendicular chord, visually equal halves either side of the line
 *  7 | RED-MARGIN GUARDRAIL (high emphasis): equal distances, opposite sides = mirror image
 *
 * Layout plan (single centered text column x540 y64..358, one supporting diagram below):
 *  title (always-on)        | T mid script22 red      | x540 y64
 *  b1 statement              | T mid15                 | x540 y100
 *  b2 formula                  | T mid16                 | x540 y132
 *  b3 formula                    | T mid16                 | x540 y164
 *  b4 chip (HIGH, green box)       | Chip mid18 script=false  | x325 y186 w430 h40 (bottom 226)
 *  b5 statement                      | T mid15                 | x540 y258
 *  b6 formula/text                     | T mid15                 | x540 y292
 *  b7 guardrail (HIGH, red, 2 lines)     | T mid15 weight700 red    | x540 y332 / y358
 *  diagram: axes O(505,532) box x[395,668] y[378,574] SCALE=28, toScreen(x,y)={505+28x,532-28y}
 *    O=(505,532)  A(-3,-1)=(421,560)  B(5,5)=(645,392)  P(1,1)=(533,504)
 *    P'(0.04,2.28)=(506,468)  M(0.52,1.64)=(520,486)
 *  b1 | axes (no ticks)                    | CartesianAxes
 *  b1 | O dot + label                      | circle+T   | (505,532) label x492 y546 end
 *  b1 | line A->B (ink)                    | Draw       | (421,560)->(645,392)
 *  b1 | A,B endpoint dots (unlabeled)      | circle     | (421,560) (645,392)
 *  b1 | line label "3x - 4y + 5 = 0"       | T mid      | x560 y408
 *  b1 | P dot + label "P(1,1)"             | circle+T   | (533,504) label x544 y518 start
 *  b4 | P' dot (green) + label             | circle+T   | (506,468) label x494 y454 end
 *  b5 | M dot (green, small)               | circle     | (520,486)
 *  b5 | segment P->M (green)               | Draw       | (533,504)->(520,486)
 *  b5 | "0.8" label (P-half)               | T start    | x556 y490
 *  b6 | segment M->P' (green)              | Draw       | (520,486)->(506,468)
 *  b6 | "0.8" label (P'-half)              | T end      | x500 y494
 *  All label offsets checked >=10px clear of nearest stroke/dot; text-vs-text >=14px; re-checked
 *  against measured boxes after first render (see verify-scene.mjs run).
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
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD } from "./math-kit";

const SCALE = 28;
const OX = 505;
const OY = 532;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}

const O = { x: OX, y: OY };
const A = toScreen(-3, -1); // (421, 560)
const B = toScreen(5, 5); // (645, 392)
const P = toScreen(1, 1); // (533, 504)
const PPRIME = toScreen(1 / 25, 57 / 25); // (506, 468)
const M = toScreen(13 / 25, 41 / 25); // (520, 486)

export default function M11Ch09Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} anchor="middle" script>
          {t("Worked: Image & Verifying Equal Distances", "Worked: Image aur Equal Distances Verify Karna")}
        </T>
      </Fade>

      {/* ===== beat 1 — problem statement + diagram object (axes, line, P) ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={100} size={15} fill={INK} anchor="middle">
          {t(
            "Find the image of P(1,1) in the line 3x - 4y + 5 = 0.",
            "P(1,1) ka image nikaalo, line 3x - 4y + 5 = 0 mein."
          )}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.5)} originX={OX} originY={OY} xLeft={395} xRight={668} yTop={378} yBottom={574} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Circle cx={O.x} cy={O.y} r={3} fill={INK} />
        <T x={492} y={546} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={lineD(A.x, A.y, B.x, B.y)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <Circle cx={A.x} cy={A.y} r={3} fill={INK} />
        <Circle cx={B.x} cy={B.y} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={560} y={408} size={12} fill={INK} anchor="middle" weight={700}>3x - 4y + 5 = 0</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <Circle cx={P.x} cy={P.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <T x={544} y={518} size={12} fill={INK} anchor="start" weight={700}>P(1,1)</T>
      </Fade>

      {/* ===== beat 2 — formula: ax1+by1+c, a²+b² ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={132} size={16} fill={INK} anchor="middle">
          ax1 + by1 + c = 3 - 4 + 5 = 4,   a² + b² = 25
        </T>
      </Fade>

      {/* ===== beat 3 — formula: step ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={164} size={16} fill={INK} anchor="middle">
          step = -2(4)/25 = -8/25
        </T>
      </Fade>

      {/* ===== beat 4 — LAND: boxed P' (green, high emphasis) + diagram P' ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={325} y={186} w={430} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={18} script={false}>
          P&apos; = (1 - 24/25, 1 + 32/25) = (1/25, 57/25)
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <Circle cx={PPRIME.x} cy={PPRIME.y} r={4.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={494} y={454} size={12} fill={GREEN_DARK} anchor="end" weight={700}>P&apos; (0.04, 2.28)</T>
      </Fade>

      {/* ===== beat 5 — distance of P from the line (text) + diagram: P->M ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={258} size={15} fill={INK} anchor="middle">
          {t(
            "Distance of P from the line is |4|/5 = 0.8.",
            "P ki line se distance hai |4|/5 = 0.8."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Circle cx={M.x} cy={M.y} r={3.5} fill={GREEN} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={lineD(P.x, P.y, M.x, M.y)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={556} y={490} size={12} fill={GREEN} anchor="start" weight={700}>0.8</T>
      </Fade>

      {/* ===== beat 6 — distance of P' from the line (formula/text) + diagram: M->P' ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={292} size={15} fill={INK} anchor="middle">
          {t(
            "Distance of P' from the line is 4/5 = 0.8.",
            "P' ki line se distance hai 4/5 = 0.8."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d={lineD(M.x, M.y, PPRIME.x, PPRIME.y)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={500} y={494} size={12} fill={GREEN} anchor="end" weight={700}>0.8</T>
      </Fade>

      {/* ===== beat 7 — RED-MARGIN GUARDRAIL (high emphasis) ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={332} size={15} fill={RED} anchor="middle" weight={700}>
          {t("Equal distances, opposite sides —", "Equal distances, opposite sides —")}
        </T>
        <T x={540} y={358} size={15} fill={RED} anchor="middle" weight={700}>
          {t(
            "exactly what a mirror image must satisfy.",
            "bilkul yahi ek mirror image ka matlab hota hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}

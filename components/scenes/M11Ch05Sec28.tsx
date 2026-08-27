/**
 * M11 Ch05 · Section 28 — "Worked example: triangle perimeter (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. First worked example of subtopic 3, following
 * the five-step routine from Sec 26. Left column: steps + algebra. Right
 * column: the triangle, sides labeled as they're named.
 *
 * Beats (en [0,21.08,35.84,45.48,54.44,61.87,79.87,95.57], hi
 * [0,15.79,29.1,38.49,47.02,54.1,71.51,85.76]):
 *  0 heading: the problem — longest=2×shortest, third=shortest+2, perimeter≥42
 *  1 text: Step 1 — name x=shortest, cm; triangle drawn, sides labeled
 *  2 text: Step 2 — translate "perimeter at least 42"
 *  3 formula: x + 2x + (x+2) ≥ 42
 *  4 text: Step 3 — domain x>0 (a length)
 *  5 formula (high, boxed green): 4x+2≥42 ⇒ 4x≥40 ⇒ x≥10
 *  6 note (red-margin, high): Step 5 — shortest side ≥ 10 cm
 *  7 diagram: settled
 *
 * Layout plan:
 *  b0 | problem (17,ink,w700)      | T st  | x60 bl110
 *  b1 | triangle + side labels     | Draw+T| A(700,480) B(1000,480) C(780,300)
 *  b1 | Step 1 caption (14,ink,scr)| T st  | x60 bl152
 *  b2 | Step 2 caption (14,ink,scr)| T st  | x60 bl192
 *  b3 | formula (19,ink,w700)      | T st  | x60 bl232
 *  b4 | Step 3 caption (14,ink,scr)| T st  | x60 bl272
 *  b5 | boxed formula (19,green)   | Chip  | x60..480 y300..350
 *  b6 | boxed guardrail (15,red)   | Chip  | x60..540 y420..474 (left column, clear of triangle)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const A = { x: 700, y: 480 };
const B = { x: 1000, y: 480 };
const C = { x: 780, y: 300 };

export default function M11Ch05Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("name it, translate it, solve it — then say it in words", "naam do, translate karo, solve karo — phir words mein bolo")}
        </T>
      </Fade>

      {/* beat 0 — the problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={60} y={110} size={17} fill={INK} weight={700} anchor="start">
          {t("longest = 2×shortest; third = shortest+2; perimeter ≥ 42", "longest = 2×shortest; third = shortest+2; perimeter ≥ 42")}
        </T>
      </Fade>

      {/* beat 1 — Step 1: name the unknown, draw the triangle */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={152} size={14} fill={INK} script anchor="start">
          {t("Step 1 — let x = shortest side, in cm", "Step 1 — let x = shortest side, cm mein")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d={`M ${A.x} ${A.y} L ${B.x} ${B.y} L ${C.x} ${C.y} Z`} stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <T x={695} y={390} size={13} fill={MUTED} anchor="end">
          x
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={850} y={505} size={13} fill={MUTED}>
          2x
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={928} y={390} size={13} fill={MUTED} anchor="start">
          x+2
        </T>
      </Fade>

      {/* beat 2 — Step 2: translate */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={60} y={192} size={14} fill={INK} script anchor="start">
          {t("Step 2 — translate 'perimeter at least 42'", "Step 2 — 'perimeter at least 42' translate karo")}
        </T>
      </Fade>

      {/* beat 3 — the inequality */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={232} size={19} fill={INK} weight={700} anchor="start">
          x + 2x + (x+2) ≥ 42
        </T>
      </Fade>

      {/* beat 4 — Step 3: domain */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={60} y={272} size={14} fill={INK} script anchor="start">
          {t("Step 3 — domain: x > 0 (a length)", "Step 3 — domain: x > 0 (ek length)")}
        </T>
      </Fade>

      {/* beat 5 — solve */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={60} y={300} w={420} h={50} fill={GREEN} textFill="#fff" size={18} script={false}>
          4x+2 ≥ 42 ⇒ 4x ≥ 40 ⇒ x ≥ 10
        </Chip>
      </Fade>

      {/* beat 6 — Step 5: interpret (kept in the left column, clear of the triangle) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={60} y={420} w={480} h={54} fill={"#FCF4E0"} stroke={RED} textFill={RED} size={15}>
          {t(
            "Step 5 — the shortest side must be at least 10 cm",
            "Step 5 — shortest side kam se kam 10 cm honi chahiye"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

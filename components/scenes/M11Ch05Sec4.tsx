/**
 * M11 Ch05 · Section 4 — "The seven-step solving algorithm"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (en [0,12.54,20.74,31.91,49.66,55.04,72.19,76.54], hi
 * [0,11.43,19.37,30.12,45.14,50.6,64.77,69.12]) — one running worked example,
 * (2x+1)/3 ≥ x-1, carried through all seven steps in the right column while
 * the left column names each step:
 *  0 heading — divider + "STEPS"/"EXAMPLE" column headers
 *  1 step 1: clear fractions ×LCM — (2x+1)/3≥x-1 ⇒ 2x+1≥3x-3
 *  2 LCM positive ⇒ no flip (sub-annotation under row 1)
 *  3 steps 2-3: brackets/collect terms — 2x-3x≥-3-1 ⇒ -x≥-4
 *  4 step 4: general form ax ⋚ b — -x≥-4 (a=-1, b=-4)
 *  5 step 5 (red-margin, the danger step): ÷(-1), flip ⇒ x≤4
 *  6 step 6: interval notation — x≤4 ⇒ (-∞, 4]
 *  7 step 7: represent on a number line — filled dot at 4, ray left to -∞
 *
 * Layout plan:
 *  b0 | divider (rows 1-6 only)    | Draw   | x520 y100..405
 *  b0 | "STEPS"/"EXAMPLE" (18,w800)| T mid  | x300/770 y96..116 (bl 110)
 *  b1 | row1 L/R (17/18)           | T st   | x140/560 y135..156 (bl 150)
 *  b2 | row1 sub (13,muted)        | T st   | x160  y170..184 (bl 180)
 *  b3 | row2 L/R                   | T st   | x140/560 y214..234 (bl 228)
 *  b4 | row3 L/R                   | T st   | x140/560 y268..288 (bl 282)
 *  b5 | row4 L/R (red)             | T st   | x140/560 y322..342 (bl 336)
 *  b6 | row5 L/R                   | T st   | x140/560 y376..396 (bl 390)
 *  b7 | caption (16,ink)           | T mid  | x540  y416..433 (bl 428)
 *  b7 | "x ≤ 4" (18,green)         | T mid  | x560  y449..469 (bl 463)
 *  b7 | axis+tick "0"              | Draw   | x200..680 y490
 *  b7 | filled dot x=4 + ray left  | circle/Draw | c(560,490) → x210
 *  b7 | "(-∞, 4]" (16,green)       | T mid  | x560  y508..525 (bl 520)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { axisD, tickD, IntervalDot, lineD } from "./math-kit";

export default function M11Ch05Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t(
            "seven steps, one danger: dividing by a negative",
            "saat steps, ek hi khatra: negative se divide karna"
          )}
        </T>
      </Fade>

      {/* beat 0 — structure: divider (only spans the two-column list, rows 1-6)
          + column headers */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d={lineD(520, 100, 520, 405)} stroke={MUTED} sw={1.6} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.0)}>
        <T x={300} y={110} size={18} fill={INK} weight={800}>
          STEPS
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.6)}>
        <T x={770} y={110} size={18} fill={INK} weight={800}>
          EXAMPLE
        </T>
      </Fade>

      {/* beat 1 — step 1: clear fractions */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={140} y={150} size={17} fill={INK} weight={700} anchor="start">
          {t("1. clear fractions (×LCM)", "1. fractions clear karo (×LCM)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={560} y={150} size={18} fill={INK} weight={700} anchor="start">
          (2x+1)/3 ≥ x-1 ⇒ 2x+1 ≥ 3x-3
        </T>
      </Fade>

      {/* beat 2 — LCM positive, no flip */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={160} y={180} size={13} fill={MUTED} anchor="start">
          {t("LCM = 3 > 0 → no flip", "LCM = 3 > 0 → koi flip nahi")}
        </T>
      </Fade>

      {/* beat 3 — steps 2-3: brackets, collect terms */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={140} y={228} size={17} fill={INK} weight={700} anchor="start">
          {t("2–3. brackets, collect terms", "2-3. brackets, terms collect karo")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={560} y={228} size={18} fill={INK} weight={700} anchor="start">
          2x - 3x ≥ -3 - 1 ⇒ -x ≥ -4
        </T>
      </Fade>

      {/* beat 4 — step 4: general form ax ⋚ b */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={140} y={282} size={17} fill={INK} weight={700} anchor="start">
          {t("4. general form: ax ⋚ b", "4. general form: ax ⋚ b")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={560} y={282} size={18} fill={INK} weight={700} anchor="start">
          -x ≥ -4 &nbsp; (a = -1, b = -4)
        </T>
      </Fade>

      {/* beat 5 — step 5, the danger step (red-margin) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={140} y={336} size={17} fill={RED} weight={700} anchor="start">
          {t("5. divide by a — DANGER", "5. a se divide — KHATRA")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={560} y={336} size={18} fill={RED} weight={700} anchor="start">
          ÷(-1), flip ⇒ x ≤ 4
        </T>
      </Fade>

      {/* beat 6 — step 6: interval notation */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={140} y={390} size={17} fill={INK} weight={700} anchor="start">
          {t("6. interval notation", "6. interval notation")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={560} y={390} size={18} fill={INK} weight={700} anchor="start">
          x ≤ 4 ⇒ (-∞, 4]
        </T>
      </Fade>

      {/* beat 7 — step 7: represent on a number line */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={428} size={16} fill={INK}>
          {t("7. represent on a number line", "7. number line par dikhao")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={560} y={463} size={18} fill={GREEN} weight={700}>
          x ≤ 4
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.7)} d={axisD(200, 680, 490)} stroke={INK} sw={2} dur={1} />
      <Draw on={beat >= 7} delay={dl(7, 2.7)} d={tickD(280, 490, 6)} stroke={INK} sw={1.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 3.2)}>
        <T x={280} y={518} size={14} fill={MUTED}>
          0
        </T>
      </Fade>
      <IntervalDot on={beat >= 7} delay={dl(7, 3.7)} x={560} y={490} open={false} r={5} stroke={GREEN} />
      <Draw on={beat >= 7} delay={dl(7, 4.3)} d={arrowD(560, 490, 210, 490)} stroke={GREEN} sw={5} dur={0.8} />
      <Fade on={beat >= 7} delay={dl(7, 5.2)}>
        <T x={560} y={520} size={16} fill={GREEN}>
          (-∞, 4]
        </T>
      </Fade>
    </Scene>
  );
}

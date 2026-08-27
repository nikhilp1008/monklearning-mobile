/**
 * M11 Ch09 · Section 34 — "Pitfalls and pro-tips: distance formulas"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — CLOSES Subtopic 4 (Distance Formulas). Direct structural precedent:
 * M11Ch09Sec17.tsx / M11Ch09Sec26.tsx (2x2 red trap grid + full-width green pro-tip card with a
 * drawn mnemonic + closing band). The JSON tags both the opening guardrail (item2) and the
 * pro-tip (item6) with style "red-margin" — that field just marks "boxed/emphasized aside" in
 * this dataset; per the chapter's established tips-closer precedent the beat-5 aside renders as
 * the GREEN pro-tip card (matching Sec17/26 exactly), not red.
 *
 * board_content has 8 items. item[0]=heading -> always-on title. items[1..7] gate at beat>=1..7:
 * 4 red traps (b1-b4: skip-normalization, modulus/non-negative, denominator, unit-direction),
 * one green pro-tip card with a drawn same-side/opposite-side mnemonic (b5), a supporting text
 * line (b6), and the closing line(s) + "Subtopic 4 — complete" chip (b7).
 *
 * Beats (board_reveal_at_english [0, 6.31, 21.08, 31.74, 45.65, 55.81, 64.68, 71.68], 8 values):
 *  1 | trap (red): skipping normalization for parallel lines gives the wrong distance
 *  2 | trap (red): distance is non-negative — keep the modulus
 *  3 | trap (red): denominator is √(A²+B²), not A²+B², not |A|+|B|
 *  4 | trap (red): symmetric form needs the genuine unit direction (cosθ, sinθ)
 *  5 | pro-tip (green): sign of (Ax1+By1+C)/√(A²+B²) tells you the side — drawn mnemonic
 *      (a line with two "+" points on one side, one "-" point on the other)
 *  6 | text: same sign = same side, opposite signs = line separates them
 *  7 | closing (script, amber_dark, 2 lines) + "Subtopic 4 — complete" chip
 *
 * Layout plan (2x2 red trap grid, then full-width green pro-tip card, then closing band —
 * identical geometry to Sec17/Sec26 for visual consistency across this chapter's tips closers):
 *  b1 | card1 (red) 2-line   | Draw+T | box x60..520  y100..165
 *  b2 | card2 (red) 2-line   | Draw+T | box x560..1020 y100..165
 *  b3 | card3 (red) 2-line   | Draw+T | box x60..520  y185..250
 *  b4 | card4 (red) 2-line   | Draw+T | box x560..1020 y185..250
 *  b5 | pro-tip card (green) | Draw+T | box x100..980 y275..450
 *  b5 |   title              | T mid  | x540 y312
 *  b5 |   formula caption    | T mid  | x540 y342
 *  b5 |   mnemonic line      | Draw   | (350,420)->(750,340)
 *  b5 |   "+" dot A (620,340's line-relative above) + "+" dot B + "-" dot C, each + label
 *  b6 | text + underline     | T mid + Draw | x540 y476, bar y488
 *  b7 | closing 2-line + chip | T mid script + Chip | x540 y508/532, chip x420..660 y554..586
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD } from "./math-kit";

/** Trap/tip card: box draws first, then its (up to 2-line) text fades in — matches
 * the base spec's "thing first, name second" and Sec17/Sec26's convention. */
function Card({
  on,
  delay,
  x,
  y,
  w,
  h,
  stroke,
  sw = 2,
  cx,
  lines,
  textFill,
  size = 14,
}: {
  on: boolean;
  delay: number;
  x: number;
  y: number;
  w: number;
  h: number;
  stroke: string;
  sw?: number;
  cx: number;
  lines: [string, number][];
  textFill: string;
  size?: number;
}) {
  return (
    <>
      <Draw on={on} delay={delay} d={roundRectD(x, y, w, h)} stroke={stroke} sw={sw} dur={0.6} />
      <Fade on={on} delay={delay + 0.7}>
        {lines.map(([txt, ty], i) => (
          <T key={i} x={cx} y={ty} size={size} fill={textFill} anchor="middle" weight={700}>
            {txt}
          </T>
        ))}
      </Fade>
    </>
  );
}

/** One "which side" mnemonic point: a dot on the line's mnemonic plus a +/- sign label. */
function SideDot({
  on,
  delay,
  x,
  y,
  labelX,
  labelY,
  sign,
  color,
}: {
  on: boolean;
  delay: number;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  sign: string;
  color: string;
}) {
  return (
    <>
      <Fade on={on} delay={delay}>
        <Circle cx={x} cy={y} r={4.5} fill={color} />
      </Fade>
      <Fade on={on} delay={delay + 0.25}>
        <T x={labelX} y={labelY} size={14} fill={color} anchor="start" weight={700}>{sign}</T>
      </Fade>
    </>
  );
}

export default function M11Ch09Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} anchor="middle" script>
          {t("Pitfalls: Distance Formulas", "Pitfalls: Distance Formulas")}
        </T>
      </Fade>

      {/* beat 1 — trap: skipping normalization for parallel lines */}
      <Card
        on={beat >= 1}
        delay={dl(1, 0)}
        x={60}
        y={100}
        w={460}
        h={65}
        stroke={RED}
        sw={2.4}
        cx={290}
        textFill={RED}
        lines={[
          [t("Skipping normalization for parallel", "Parallel lines mein normalization"), 127],
          [t("lines gives the WRONG distance — rescale.", "skip mat karo — WRONG distance milega."), 151],
        ]}
      />

      {/* beat 2 — trap: distance is non-negative, keep the modulus */}
      <Card
        on={beat >= 2}
        delay={dl(2, 0)}
        x={560}
        y={100}
        w={460}
        h={65}
        stroke={RED}
        cx={790}
        textFill={RED}
        lines={[
          [t("Distance is NEVER negative —", "Distance kabhi NEGATIVE nahi hoti —"), 127],
          [t("keep the modulus in the point-line formula.", "point-line formula mein modulus rakho."), 151],
        ]}
      />

      {/* beat 3 — trap: the denominator is √(A²+B²), not A²+B², not |A|+|B| */}
      <Card
        on={beat >= 3}
        delay={dl(3, 0)}
        x={60}
        y={185}
        w={460}
        h={65}
        stroke={RED}
        cx={290}
        textFill={RED}
        lines={[
          [t("Denominator is √(A² + B²), not", "Denominator hai √(A² + B²), na ki"), 212],
          [t("A² + B², and not |A| + |B|.", "A² + B², na hi |A| + |B|."), 236],
        ]}
      />

      {/* beat 4 — trap: symmetric form needs the genuine unit direction */}
      <Card
        on={beat >= 4}
        delay={dl(4, 0)}
        x={560}
        y={185}
        w={460}
        h={65}
        stroke={RED}
        cx={790}
        textFill={RED}
        lines={[
          [t("In symmetric form, only the unit", "Symmetric form mein sirf unit"), 212],
          [t("direction (cosθ, sinθ) makes r true.", "direction (cosθ, sinθ) hi r true banati hai."), 236],
        ]}
      />

      {/* beat 5 — pro-tip: the sign of the signed distance tells you the side (drawn mnemonic) */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(100, 275, 880, 175)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={312} size={16} fill={GREEN_DARK} anchor="middle" weight={700}>
          {t("Pro-tip: the sign tells you the side", "Pro-tip: sign hi side bata deta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={342} size={15} fill={GREEN_DARK} anchor="middle">
          sign of (Ax₁ + By₁ + C)/√(A² + B²)
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.7)} d={lineD(350, 420, 750, 340)} stroke={INK} sw={2.2} dur={0.5} />
      <SideDot on={beat >= 5} delay={dl(5, 2.2)} x={650} y={355} labelX={660} labelY={352} sign="+" color={GREEN} />
      <SideDot on={beat >= 5} delay={dl(5, 2.5)} x={600} y={368} labelX={610} labelY={362} sign="+" color={GREEN} />
      <SideDot on={beat >= 5} delay={dl(5, 2.8)} x={430} y={405} labelX={440} labelY={411} sign="-" color={RED} />

      {/* beat 6 — same sign means same side */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={476} size={15} fill={INK} anchor="middle">
          {t(
            "Same sign means same side; opposite signs mean the line separates them.",
            "Same sign ka matlab same side; opposite signs matlab line unke beech se guzarti hai."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d={lineD(400, 488, 680, 488)} stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 7 — closing: settles "same side?" and "origin inside the triangle?"; subtopic 4 complete */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={508} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t("That settles 'same side?' and 'origin inside", "Yeh 'same side?' aur 'triangle ke andar")}
        </T>
        <T x={540} y={532} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t("the triangle?' with no extra construction.", "origin?' dono bina extra construction ke solve karta hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <Chip x={420} y={554} w={240} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={14}>
          {t("Subtopic 4 — complete", "Subtopic 4 — complete")}
        </Chip>
      </Fade>
    </Scene>
  );
}

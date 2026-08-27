/**
 * M11 Ch09 · Section 43 — "Pitfalls and pro-tips: intersection and family"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — CLOSES Subtopic 5 (Point of Intersection, Concurrency and Family of
 * Lines). Direct structural precedent: M11Ch09Sec17.tsx / Sec26.tsx / Sec34.tsx (2x2 red trap
 * grid + full-width green pro-tip card with a drawn mnemonic + closing band). Followed exactly
 * for consistency across the chapter's four tips closers.
 *
 * board_content has 8 items. item[0]=heading -> always-on title. items[1..7] gate at beat>=1..7:
 * 4 red traps (b1-b4: use L1+λL2=0 & skip the point, check-no-two-parallel guardrail, family
 * misses L2 itself, +,-,+ sign pattern), one green pro-tip card with a drawn "fan of lines
 * through one point" mnemonic (b5 — item6 is JSON-tagged "red-margin" but its text is
 * "Pro-tip:"-prefixed, so per the chapter's established convention it renders GREEN, matching
 * Sec17/26/34), a supporting text line (b6), and the closing line + "Subtopic 5 — complete"
 * chip (b7).
 *
 * Beats (board_reveal_at_english [0, 6.66, 20.14, 31.57, 44.46, 57.0, 68.01, 76.46], 8 values):
 *  1 | trap (red): line through an intersection + one condition -> use L1+λL2=0, skip the point
 *  2 | trap/guardrail (red): concurrency determinant = 0 isn't enough — still check no two
 *      lines are parallel
 *  3 | trap (red): the family L1+λL2=0 misses L2 itself — test that case separately
 *  4 | trap (red): expanding a determinant — keep the +, -, + sign pattern explicit
 *  5 | pro-tip (green): the trigger phrase "intersection of...and..." -> reach for L1+λL2=0;
 *      drawn mnemonic — 3 lines through one point (L1, L2 crossing + the family member) with a
 *      legend below naming each
 *  6 | text: finding the point first is almost always the slower, more error-prone path
 *  7 | closing (script, amber_dark) + "Subtopic 5 — complete" chip
 *
 * Layout plan (2x2 red trap grid, then full-width green pro-tip card, then closing band —
 * identical geometry to Sec17/26/34 for visual consistency across this chapter's tips closers):
 *  b1 | card1 (red) 2-line   | Draw+T | box x60..520  y100..165
 *  b2 | card2 (red) 2-line   | Draw+T | box x560..1020 y100..165
 *  b3 | card3 (red) 2-line   | Draw+T | box x60..520  y185..250
 *  b4 | card4 (red) 2-line   | Draw+T | box x560..1020 y185..250
 *  b5 | pro-tip card (green) | Draw+T | box x100..980 y275..450
 *  b5 |   title              | T mid  | x540 y312
 *  b5 |   caption (quoted trigger phrase) | T mid | x540 y342
 *  b5 |   fan icon: P(540,385); family line (540,360)-(540,410) amber; L1 (490,367)-(590,403)
 *  b5 |     ink; L2 (490,403)-(590,367) ink; P dot green_dark
 *  b5 |   legend row y432: L1 swatch+label cx~360, L2 swatch+label cx~498, L1+λL2 swatch+label
 *  b6 | text + underline     | T mid + Draw | x540 y478, bar y490 x400..680
 *  b7 | closing line + chip  | T mid script + Chip | x540 y508, chip x420..660 y536..570
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
 * the base spec's "thing first, name second" and Sec17/26/34's convention. */
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

/** One legend entry: a short line swatch followed by its label — used to name each ray of the
 * "fan through one point" mnemonic without any label touching a ray it doesn't belong to. */
function Legend({
  on,
  delay,
  x1,
  x2,
  y,
  labelX,
  color,
  label,
}: {
  on: boolean;
  delay: number;
  x1: number;
  x2: number;
  y: number;
  labelX: number;
  color: string;
  label: string;
}) {
  return (
    <>
      <Draw on={on} delay={delay} d={lineD(x1, y, x2, y)} stroke={color} sw={2.6} dur={0.35} />
      <Fade on={on} delay={delay + 0.2}>
        <T x={labelX} y={y + 6} size={13} fill={color} anchor="start" weight={700}>
          {label}
        </T>
      </Fade>
    </>
  );
}

export default function M11Ch09Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // fan mnemonic geometry — three lines through one point P
  const P = { x: 540, y: 385 };

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} anchor="middle" script>
          {t("Pitfalls: Intersection & Family", "Pitfalls: Intersection & Family")}
        </T>
      </Fade>

      {/* beat 1 — trap: line through intersection + one condition -> L1+λL2=0, skip the point */}
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
          [t("Line through an intersection + one", "Intersection se guzarti line + ek"), 127],
          [t("condition? Use L1 + λL2 = 0 — skip the point.", "condition? L1 + λL2 = 0 lo — point skip karo."), 151],
        ]}
      />

      {/* beat 2 — trap/guardrail: determinant = 0 isn't enough, still check no two parallel */}
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
          [t("Determinant zero doesn't settle it —", "Determinant zero hote hi mat ruko —"), 127],
          [t("still check no two lines are parallel.", "phir bhi check karo do lines parallel na ho."), 151],
        ]}
      />

      {/* beat 3 — trap: the family L1+λL2=0 misses L2 itself */}
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
          [t("The family L1 + λL2 = 0 misses L2", "Family L1 + λL2 = 0 mein L2 khud"), 212],
          [t("itself — test that case separately.", "miss hoti hai — alag se test karo."), 236],
        ]}
      />

      {/* beat 4 — trap: keep the +, -, + sign pattern explicit */}
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
          [t("Expanding a determinant? Keep the", "Determinant expand kar rahe ho?"), 212],
          [t("+, -, + sign pattern explicit.", "+, -, + sign pattern explicit rakho."), 236],
        ]}
      />

      {/* beat 5 — pro-tip: the trigger phrase (drawn "fan through one point" mnemonic) */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(100, 275, 880, 175)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={312} size={16} fill={GREEN_DARK} anchor="middle" weight={700}>
          {t("Pro-tip: the trigger phrase", "Pro-tip: trigger phrase pehchano")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={342} size={14} fill={GREEN_DARK} anchor="middle">
          {t(
            "'...intersection of ... and ...' → L1 + λL2 = 0",
            "'...intersection of ... and ...' → turant L1 + λL2 lo"
          )}
        </T>
      </Fade>
      {/* fan icon: L1 and L2 crossing at P, plus a third line (the family member) through P */}
      <Draw on={beat >= 5} delay={dl(5, 1.7)} d={lineD(490, 367, 590, 403)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 2.0)} d={lineD(490, 403, 590, 367)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 2.3)} d={lineD(540, 360, 540, 410)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <Circle cx={P.x} cy={P.y} r={3.5} fill={GREEN_DARK} />
      </Fade>
      {/* legend naming each ray, spaced so no label sits over another ray */}
      <Legend on={beat >= 5} delay={dl(5, 3.0)} x1={332} x2={354} y={430} labelX={360} color={INK} label="L1" />
      <Legend on={beat >= 5} delay={dl(5, 3.2)} x1={470} x2={492} y={430} labelX={498} color={INK} label="L2" />
      <Legend
        on={beat >= 5}
        delay={dl(5, 3.4)}
        x1={616}
        x2={638}
        y={430}
        labelX={644}
        color={AMBER_DARK}
        label="L1 + λL2 (family)"
      />

      {/* beat 6 — finding the point first is the slower path */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={478} size={15} fill={INK} anchor="middle">
          {t(
            "Finding the point first is almost always the slower, more error-prone path.",
            "Point pehle dhoondhna almost hamesha slower aur error-prone raasta hai."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d={lineD(400, 490, 680, 490)} stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 7 — closing: determinant dies => they meet; subtopic 5 complete */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={508} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t(
            "Determinant dies ⇒ they meet — with the no-two-parallel caveat.",
            "Determinant dies, matlab woh milti hain — no-two-parallel caveat ke saath."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Chip x={420} y={536} w={240} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={14}>
          {t("Subtopic 5 — complete", "Subtopic 5 — complete")}
        </Chip>
      </Fade>
    </Scene>
  );
}

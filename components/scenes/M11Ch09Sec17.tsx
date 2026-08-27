/**
 * M11 Ch09 · Section 17 — "Pitfalls and pro-tips: slope and angles"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — CLOSES Subtopic 2 (Slope of a Line and Angles). 8 board_content items:
 * item[0]=heading (always-on title), items[1..7] gate at beat>=1..7 — 4 red traps (b1-b4), one
 * green pro-tip card with a drawn rising/falling/flat/upright mnemonic (b5), two closing lines
 * (b6-b7, the second doubling as the subtopic's closing acknowledgment).
 *
 * Beats (board_reveal_at_english [0, 7.68, 26.2, 38.91, 57.69, 69.8, 84.22, 89.51], 8 values):
 *  1 | trap (red): vertical slope UNDEFINED, not infinity/zero
 *  2 | trap (red): perpendicular m1*m2 = -1, not +1
 *  3 | trap (red): angle alpha with a line needs +-tan alpha, not modulus
 *  4 | trap (red): Advanced problems must check the vertical case separately
 *  5 | pro-tip (green): glance at geometry first — 4 drawn mini-line icons + sign labels
 *  6 | text: the two-second sign check catches most slips
 *  7 | closing (script, amber_dark) + "Subtopic 2 — complete" chip
 *
 * Layout plan (2x2 red trap grid, then a full-width green pro-tip card, then closing band):
 *  b1 | card1 (red) 2-line   | Draw+T | box x60..520  y100..165
 *  b2 | card2 (red) 2-line   | Draw+T | box x560..1020 y100..165
 *  b3 | card3 (red) 2-line   | Draw+T | box x60..520  y185..250
 *  b4 | card4 (red) 2-line   | Draw+T | box x560..1020 y185..250
 *  b5 | pro-tip card (green) | Draw+T | box x100..980 y275..450
 *  b5 |   title              | T mid  | x540 y312
 *  b5 |   4 mini icons+labels| Draw+T | cx 210/430/650/870  y352..388 icon, y415 label
 *  b6 | text + underline     | T mid + Draw | x540 y478, bar y490
 *  b7 | closing line + chip  | T mid script + Chip | x540 y508, chip x420..660 y536..570
 */

import React from "react";
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
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD } from "./math-kit";

/** Trap/tip card: box draws first, then its (up to 2-line) text fades in — matches
 * the base spec's "thing first, name second" and the codebase's Sec20 convention. */
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

/** One rising/falling/flat/upright mini line icon with a sign label underneath. */
function SlopeIcon({
  on,
  delay,
  cx,
  cy,
  kind,
  label,
  color,
}: {
  on: boolean;
  delay: number;
  cx: number;
  cy: number;
  kind: "rising" | "falling" | "flat" | "vertical";
  label: string;
  color: string;
}) {
  const d =
    kind === "rising"
      ? lineD(cx - 20, cy + 16, cx + 20, cy - 16)
      : kind === "falling"
      ? lineD(cx - 20, cy - 16, cx + 20, cy + 16)
      : kind === "flat"
      ? lineD(cx - 22, cy, cx + 22, cy)
      : lineD(cx, cy - 20, cx, cy + 20);
  return (
    <>
      <Draw on={on} delay={delay} d={d} stroke={color} sw={3} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 45} size={13} fill={color} anchor="middle" weight={700}>
          {label}
        </T>
      </Fade>
    </>
  );
}

export default function M11Ch09Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} anchor="middle" script>
          {t("Pitfalls: Slope & Angles", "Pitfalls: Slope & Angles")}
        </T>
      </Fade>

      {/* beat 1 — trap: vertical slope is UNDEFINED */}
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
          [t("A vertical line's slope is UNDEFINED —", "Vertical line ki slope UNDEFINED hai —"), 127],
          [t("not infinity, not zero.", "infinity nahi, zero bhi nahi."), 151],
        ]}
      />

      {/* beat 2 — trap: perpendicular sign */}
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
          ["Perpendicular means m₁m₂ = -1,", 127],
          [t("not +1 — keep the minus sign.", "+1 nahi — minus sign mat bhoolo."), 151],
        ]}
      />

      {/* beat 3 — trap: angle alpha needs +-tan alpha */}
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
          [t("For 'angle α with a line', use ±tanα,", "'Angle α wali line' ke liye ±tanα lo,"), 212],
          [t("not the modulus — two lines exist.", "modulus nahi — do lines hoti hain."), 236],
        ]}
      />

      {/* beat 4 — trap: Advanced problems, check vertical case separately */}
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
          [t("In Advanced problems, always check", "Advanced problems mein hamesha"), 212],
          [t("the vertical-line case separately.", "vertical-line case alag check karo."), 236],
        ]}
      />

      {/* beat 5 — pro-tip: glance at the geometry first (drawn mnemonic) */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(100, 275, 880, 175)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={312} size={16} fill={GREEN_DARK} anchor="middle" weight={700}>
          {t("Pro-tip: glance at the geometry first", "Pro-tip: pehle geometry par nazar daalo")}
        </T>
      </Fade>
      <SlopeIcon on={beat >= 5} delay={dl(5, 1.2)} cx={210} cy={370} kind="rising" label="rising: +" color={GREEN} />
      <SlopeIcon on={beat >= 5} delay={dl(5, 1.7)} cx={430} cy={370} kind="falling" label="falling: -" color={RED} />
      <SlopeIcon on={beat >= 5} delay={dl(5, 2.2)} cx={650} cy={370} kind="flat" label="flat: 0" color={INK} />
      <SlopeIcon on={beat >= 5} delay={dl(5, 2.7)} cx={870} cy={370} kind="vertical" label="upright: undef." color={AMBER_DARK} />

      {/* beat 6 — the two-second sign check */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={478} size={15} fill={INK} anchor="middle">
          {t(
            "That two-second sign check catches most arithmetic slips before they cost marks.",
            "Wo two-second sign check zyada arithmetic slips ko marks jaane se pehle pakad leta hai."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d={lineD(400, 490, 680, 490)} stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 7 — closing: slope is the workhorse; subtopic 2 complete */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={508} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t(
            "Slope is the workhorse of the whole chapter — keep these poles straight.",
            "Slope is chapter ka workhorse hai — in dono poles ko clear rakho."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Chip x={420} y={536} w={240} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={14}>
          {t("Subtopic 2 — complete", "Subtopic 2 — complete")}
        </Chip>
      </Fade>
    </Scene>
  );
}

/**
 * M11 Ch09 · Section 26 — "Pitfalls and pro-tips: equations of a line"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — CLOSES Subtopic 3 (Equations of a Line). Direct structural precedent:
 * M11Ch09Sec17.tsx (2x2 red trap grid + full-width green pro-tip card + closing band).
 *
 * board_content has 8 items. item[0]=heading (always-on title), items[1..7] gate at beat>=1..7:
 * 4 red traps (b1-b4), one green pro-tip card with a drawn intercept mnemonic (b5), a supporting
 * text line (b6), and the closing line + "Subtopic 3 — complete" chip (b7).
 *
 * Beats (board_reveal_at_english [0, 6.23, 17.32, 28.33, 40.19, 51.63, 76.46, 78.68], 8 values):
 *  1 | trap (red): slope from general form is m = -A/B, not A/B
 *  2 | trap (red): a negative p in normal form means the wrong sign — flip it
 *  3 | trap (red): fix ω from the signs of BOTH cos ω and sin ω, never one alone
 *  4 | trap (red): origin/axis-parallel lines have no valid intercept form
 *  5 | pro-tip (green): set y=0 for x-intercept, x=0 for y-intercept — drawn mnemonic
 *  6 | text: substitution carries the signs for you, every time
 *  7 | closing (script, amber_dark) + "Subtopic 3 — complete" chip
 *
 * Layout plan (2x2 red trap grid, then full-width green pro-tip card, then closing band —
 * identical geometry to Sec17 for visual consistency across this subtopic's closer):
 *  b1 | card1 (red) 2-line   | Draw+T | box x60..520  y100..165
 *  b2 | card2 (red) 2-line   | Draw+T | box x560..1020 y100..165
 *  b3 | card3 (red) 2-line   | Draw+T | box x60..520  y185..250
 *  b4 | card4 (red) 2-line   | Draw+T | box x560..1020 y185..250
 *  b5 | pro-tip card (green) | Draw+T | box x100..980 y275..450
 *  b5 |   title              | T mid  | x540 y312
 *  b5 |   mini intercept icon: axes cx540 cy385, line (585,385)->(540,350),
 *  b5 |   x-int dot(585,385) green, y-int dot(540,350) amber_dark, labels x590/y403 start,
 *  b5 |   x486/y342 end
 *  b6 | text + underline     | T mid + Draw | x540 y478, bar y490
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
 * the base spec's "thing first, name second" and Sec17's convention. */
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

export default function M11Ch09Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} anchor="middle" script>
          {t("Pitfalls: Equations of a Line", "Pitfalls: Equations of a Line")}
        </T>
      </Fade>

      {/* beat 1 — trap: slope from general form is m = -A/B, not A/B */}
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
          [t("Slope from general form is m = -A/B,", "General form se slope hai m = -A/B,"), 127],
          [t("not A/B — don't drop the minus sign.", "A/B nahi — minus sign mat bhoolo."), 151],
        ]}
      />

      {/* beat 2 — trap: negative p means the wrong sign was chosen */}
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
          [t("A negative p in normal form means", "Normal form mein negative p ka matlab"), 127],
          [t("the wrong sign was chosen — flip it.", "galat sign chuna gaya — usko flip karo."), 151],
        ]}
      />

      {/* beat 3 — trap: fix ω from BOTH signs, never one alone */}
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
          [t("Read ω from the signs of BOTH", "ω ko dono signs se saath padho —"), 212],
          [t("cos ω and sin ω — never one alone.", "cos ω aur sin ω — akela nahi."), 236],
        ]}
      />

      {/* beat 4 — trap: no valid intercept form through origin / parallel to an axis */}
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
          [t("Lines through the origin or parallel", "Origin se guzarti ya axis ke parallel"), 212],
          [t("to an axis have no valid intercept form.", "lines ka valid intercept form nahi hota."), 236],
        ]}
      />

      {/* beat 5 — pro-tip: y=0 for x-intercept, x=0 for y-intercept (drawn mnemonic) */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(100, 275, 880, 175)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={312} size={16} fill={GREEN_DARK} anchor="middle" weight={700}>
          {t("Pro-tip: intercepts without memorising signs", "Pro-tip: signs yaad kiye bina intercepts")}
        </T>
      </Fade>
      {/* mini mnemonic: one line, its x-intercept (set y=0) and y-intercept (set x=0) */}
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={lineD(470, 385, 610, 385)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d={lineD(540, 345, 540, 425)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 1.7)} d={lineD(585, 385, 540, 350)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2.3)}>
        <Circle cx={585} cy={385} r={3.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={590} y={403} size={10} fill={GREEN_DARK} anchor="start" weight={700}>y = 0 → x-int</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.8)}>
        <Circle cx={540} cy={350} r={3.5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.0)}>
        <T x={486} y={342} size={10} fill={AMBER_DARK} anchor="end" weight={700}>x = 0 → y-int</T>
      </Fade>

      {/* beat 6 — the substitution carries the signs */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={478} size={15} fill={INK} anchor="middle">
          {t(
            "The substitution carries the signs for you, every time.",
            "Substitution har baar signs khud carry kar leta hai."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d={lineD(400, 490, 680, 490)} stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 7 — closing: general form never fails; subtopic 3 complete */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={508} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t(
            "And the general form never fails — keep it as your universal fallback.",
            "Aur general form kabhi fail nahi hoti — ise apna universal fallback rakho."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Chip x={420} y={536} w={240} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={14}>
          {t("Subtopic 3 — complete", "Subtopic 3 — complete")}
        </Chip>
      </Fade>
    </Scene>
  );
}

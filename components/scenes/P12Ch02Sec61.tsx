/**
 * P12Ch02 · Section 61 — "NEET speed trap: four identical capacitors"
 * Subtopic: Series & Parallel Combinations & Charge Sharing
 *
 * TWO DEFECTS FIXED (2026-08-21):
 *
 * 1. THE BOARD TAUGHT A COMPLETELY DIFFERENT PROBLEM FROM THE VOICE. The old
 *    scene drew an infinite ladder network and derived the golden-ratio result
 *    C_eq = C(1 + √5)/2 ≈ 1.618 C. The narration for this section never
 *    mentions a ladder, a quadratic, or the golden ratio — it works a NEET
 *    speed trap: four identical 4 µF capacitors, all in series and then all in
 *    parallel. A student heard one problem and watched another. Every quantity
 *    on the board now comes from the narration:
 *        n = 4, C = 4 µF
 *        series   C_s = C / n = 4 / 4  = 1 µF
 *        parallel C_p = n C   = 4 × 4  = 16 µF
 *        ratio    C_p / C_s   = 16 / 1 = 16 = n²   ✓ (n = 4)
 *    and the trap the voice names — writing 16 µF for the SERIES case by
 *    adding the values directly — is drawn and crossed out.
 *
 * 2. UNREACHABLE BLOCK + DEAD AIR. The section has 7 narration segments
 *    (board_reveal_at_english [0, 5.38, 16.47, 26.62, 36.27, 43.69, 54.27]), so
 *    useBeat only ever returns 0..6 — yet the closing badge, its heading, its
 *    two lines and the footer chip were gated on `beat >= 7` and never
 *    rendered. The old gate set was {0,1,3,4,6,7}: beats 2 and 5 were unused,
 *    so the board froze twice mid-narration. Every beat 0..6 is now used.
 *
 * Beats (7 segments → valid beats 0..6):
 *  0 "reach for the shortcut, don't grind arithmetic"   title + underline
 *  1 "four identical capacitors, each of four microfarads" both circuits drawn
 *  2 "the trap is adding the series values directly"    crossed-out 16 µF
 *  3 "series is simply C over n, four over four"        C_s = 1 µF
 *  4 "parallel is simply n times C"                     C_p = 16 µF
 *  5 "they differ by a factor of sixteen, which is n²"  the ratio check
 *  6 "speed rule for exam day"                          rule + footer chip
 */

import React from "react";
import { G, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

/** Capacitor drawn across a horizontal wire: two vertical plates at `x`. */
function CapH({ x, y, stroke }: { x: number; y: number; stroke: string }) {
  return (
    <G>
      <Line x1={x} y1={y - 13} x2={x} y2={y + 13} stroke={stroke} strokeWidth={2.6} />
      <Line x1={x + 12} y1={y - 13} x2={x + 12} y2={y + 13} stroke={stroke} strokeWidth={2.6} />
    </G>
  );
}

export default function P12Ch02Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const parallelRows = [154, 184, 214, 244];

  return (
    <Scene>
      {/* beat 0 — the framing */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("NEET speed trap: four identical capacitors",
             "NEET speed trap: four identical capacitors")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.8)} d="M 300 62 C 480 58, 640 66, 790 60" stroke={RED} sw={2.4} dur={0.7} />

      {/* ─────────── LEFT: the two arrangements, and the trap ─────────── */}
      <G transform="translate(40, 92)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={14} fill={RED} weight={800} anchor="start">
            {t("FOUR IDENTICAL CAPACITORS, EACH C = 4 µF",
               "FOUR IDENTICAL CAPACITORS, EACH C = 4 µF")}
          </T>
        </Fade>

        {/* beat 1 — all four in series */}
        <Fade on={beat >= 1} delay={dl(1, 0.8)}>
          <T x={45} y={56} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
            {t("all four in series", "all four in series")}
          </T>

          <Line x1="45" y1="86" x2="110" y2="86" stroke={INK} strokeWidth={2} />
          <Line x1="122" y1="86" x2="200" y2="86" stroke={INK} strokeWidth={2} />
          <Line x1="212" y1="86" x2="290" y2="86" stroke={INK} strokeWidth={2} />
          <Line x1="302" y1="86" x2="380" y2="86" stroke={INK} strokeWidth={2} />
          <Line x1="392" y1="86" x2="455" y2="86" stroke={INK} strokeWidth={2} />
          <CapH x={110} y={86} stroke={RED} />
          <CapH x={200} y={86} stroke={RED} />
          <CapH x={290} y={86} stroke={RED} />
          <CapH x={380} y={86} stroke={RED} />
        </Fade>

        {/* beat 1 — all four in parallel */}
        <Fade on={beat >= 1} delay={dl(1, 1.2)}>
          <T x={45} y={136} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
            {t("all four in parallel", "all four in parallel")}
          </T>

          <Line x1="110" y1="154" x2="110" y2="244" stroke={INK} strokeWidth={2} />
          <Line x1="380" y1="154" x2="380" y2="244" stroke={INK} strokeWidth={2} />
          <Line x1="45" y1="199" x2="110" y2="199" stroke={INK} strokeWidth={2} />
          <Line x1="380" y1="199" x2="455" y2="199" stroke={INK} strokeWidth={2} />
          {parallelRows.map((y) => (
            <G key={y}>
              <Line x1="110" y1={y} x2="238" y2={y} stroke={INK} strokeWidth={2} />
              <Line x1="250" y1={y} x2="380" y2={y} stroke={INK} strokeWidth={2} />
              <Line x1="238" y1={y - 11} x2="238" y2={y + 11} stroke={GREEN} strokeWidth={2.6} />
              <Line x1="250" y1={y - 11} x2="250" y2={y + 11} stroke={GREEN} strokeWidth={2.6} />
            </G>
          ))}
        </Fade>

        {/* beat 2 — the trap */}
        <Fade on={beat >= 2} delay={dl(2, 0.2)}>
          <T x={45} y={286} size={13.5} fill={RED} weight={800} anchor="start">
            {t("TRAP: 4 + 4 + 4 + 4 = 16 µF for the series case",
               "TRAP: 4 + 4 + 4 + 4 = 16 µF for the series case")}
          </T>
        </Fade>
        <Draw on={beat >= 2} delay={dl(2, 0.9)} d={crossD(45, 273, 315, 18)} stroke={RED} sw={2.2} dur={0.45} />
        <Fade on={beat >= 2} delay={dl(2, 1.3)}>
          <T x={45} y={314} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
            {t("that is the parallel answer wearing the wrong label",
               "that is the parallel answer wearing the wrong label")}
          </T>
        </Fade>
      </G>

      {/* ─────────── RIGHT: the shortcut, both answers, the check ─────────── */}
      <G transform="translate(560, 92)">
        <Badge n={2} cx={20} cy={18} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={23} size={14} fill={RED} weight={800} anchor="start">
            {t("NO ARITHMETIC NEEDED AT ALL", "NO ARITHMETIC NEEDED AT ALL")}
          </T>
        </Fade>

        {/* beat 3 — the series answer */}
        <Fade on={beat >= 3} delay={dl(3, 0.8)}>
          <T x={45} y={68} size={14} fill={INK} weight={800} anchor="start">
            {t("For n equal capacitors, each of value C:",
               "For n equal capacitors, each of value C:")}
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 1.2)}>
          <T x={45} y={106} size={17} fill={GREEN} weight={900} anchor="start">
            Series: C_s = C / n = 4 / 4 = 1 µF
          </T>
        </Fade>

        {/* beat 4 — the parallel answer */}
        <Fade on={beat >= 4} delay={dl(4, 0.3)}>
          <T x={45} y={150} size={17} fill={GREEN} weight={900} anchor="start">
            Parallel: C_p = n C = 4 × 4 = 16 µF
          </T>
        </Fade>

        {/* beat 5 — the n² check */}
        <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 45 176 L 455 176" stroke={INK} sw={1.7} dur={0.5} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={210} size={16} fill={AMBER_DARK} weight={900} anchor="start">
            C_p / C_s = 16 / 1 = 16 = n²
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.9)}>
          <T x={45} y={236} size={12.5} fill={MUTED} weight={600} anchor="start">
            {t("exactly what the general rule predicts — a free check on your work",
               "exactly what the general rule predicts — a free check on your work")}
          </T>
        </Fade>
      </G>

      {/* ─────────── LOWER: the speed rule ─────────── */}
      <G transform="translate(40, 430)">
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={23} size={14} fill={RED} weight={800} anchor="start">
            {t("SPEED RULE FOR EXAM DAY", "SPEED RULE FOR EXAM DAY")}
          </T>
        </Fade>

        <Fade on={beat >= 6} delay={dl(6, 0.8)}>
          <T x={45} y={54} size={14.5} anchor="start" fill={GREEN} weight={800}>
            {t("n equal capacitors: C / n in series, n C in parallel — write the answer straight down.",
               "n equal capacitors: C / n in series, n C in parallel — write the answer straight down.")}
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 1.1)}>
          <T x={45} y={78} size={13} anchor="start" fill={INK} weight={700}>
            {t("No working needed — that time saving is exactly what NEET is testing for.",
               "No working needed — that time saving is exactly what NEET is testing for.")}
          </T>
        </Fade>
      </G>

      {/* footer chip */}
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <Chip x={40} y={540} w={1000} h={44} fill={GREEN} textFill="#ffffff" size={15}>
          {t("★ Four 4 µF capacitors · series 1 µF · parallel 16 µF · ratio n² = 16",
             "★ Four 4 µF capacitors · series 1 µF · parallel 16 µF · ratio n² = 16")}
        </Chip>
      </Fade>
    </Scene>
  );
}

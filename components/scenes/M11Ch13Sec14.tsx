/**
 * M11 Ch13 · Section 14 — "Worked example: M.D. about the median via interpolation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples.
 *
 * Marks 0-10..40-50, f=7,8,10,9,6 (cf=7,15,25,34,40, N=40). N/2=20, median
 * class 20-30 (l=20,C=15,f=10,h=10). M=20+((20-15)/10)×10=25.
 * Mid-points 5,15,25,35,45; |x_i-25|=20,10,0,10,20; f_i|x_i-25|=140,80,0,
 * 90,120 (Σ=430). M.D.(M)=430/40=10.75 marks.
 *
 * Beats (board_reveal_at_english [0, 16.3, 31.15, 45.99, 64.68, 80.81, 93.87]):
 *  0 anchor: heading
 *  1 represent: given frequencies + cumulative frequencies (text)
 *  2 represent: N/2=20 ⇒ median class 20-30 (text)
 *  3 land (boxed, high emphasis): M = 20 + Frac(20-15,10)×10 = 25
 *  4 represent: THE table — x_i, f_i, |x_i-25|, f_i|x_i-25| + totals
 *  5 land (boxed, high emphasis): M.D.(M) = 430/40 = 10.75 marks
 *  6 note (red-margin): grouped median is NOT the middle mid-point
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 19, red, always-on)     | T mid | x540 y56
 *  b0 | heading (script 15, amber_dark)  | T mid | x540 y86
 *  b1 | given text (13, ink)             | T mid | x540 y110
 *  b2 | median-class text (13, ink)      | T mid | x540 y134
 *  b3 | boxed M formula (Frac, green)    | Draw+Row/Frac | box x330..750 y158..206
 *  b4 | table header + 5 rows + totals   | T mid | x150..610 y240..382
 *  b5 | boxed M.D. (green)               | Draw+T| box x340..740 y405..450
 *  b6 | red bar + note (14)              | Draw+T| x60 y478..496 · text y492
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Frac } from "./math-kit";

const COL_XI = 190;
const COL_FI = 270;
const COL_ABS = 370;
const COL_FD = 520;
const ROWS = [
  { y: 264, xi: 5, fi: 7, abs: 20, fd: 140 },
  { y: 288, xi: 15, fi: 8, abs: 10, fd: 80 },
  { y: 312, xi: 25, fi: 10, abs: 0, fd: 0 },
  { y: 336, xi: 35, fi: 9, abs: 10, fd: 90 },
  { y: 360, xi: 45, fi: 6, abs: 20, fd: 120 },
];

export default function M11Ch13Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={56} size={19} fill={RED} anchor="middle" script>
          {t("Worked Example: M.D. About the Median", "Worked Example: Median ke Baare Mein M.D.")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={86} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t("JEE Main: M.D. about the median, grouped marks", "JEE Main: grouped marks ka median M.D.")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={110} size={13} fill={INK} anchor="middle">
          {"Marks 0-10..40-50 with f_i = 7,8,10,9,6.  Cumulative: 7,15,25,34,40."}
        </T>
      </Fade>

      {/* beat 2 — locate the median class */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={134} size={13} fill={INK} anchor="middle">
          {t(
            "N/2 = 20 ⇒ first c.f. to reach 20 is 25 ⇒ median class 20-30",
            "N/2 = 20 ⇒ pehli c.f. jo 20 tak pahunche wo 25 ⇒ median class 20-30"
          )}
        </T>
      </Fade>

      {/* beat 3 — land (boxed, high emphasis): interpolate the median */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(330, 158, 420, 48)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={350} y={188} size={16} fill={INK} anchor="start" weight={700}>M = 20 +</T>
      </Fade>
      <Frac on={beat >= 3} delay={dl(3, 1.6)} x={470} y={188} size={16} numerator="20-15" denominator="10" width={55} />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={508} y={188} size={16} fill={GREEN} anchor="start" weight={800}>
          {"× 10 = 20+5 = 25"}
        </T>
      </Fade>

      {/* beat 4 — THE table: x_i, f_i, |x_i-25|, f_i|x_i-25| */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={COL_XI} y={240} size={12} fill={MUTED} anchor="middle" weight={700}>x_i</T>
        <T x={COL_FI} y={240} size={12} fill={MUTED} anchor="middle" weight={700}>f_i</T>
        <T x={COL_ABS} y={240} size={12} fill={MUTED} anchor="middle" weight={700}>{"|x_i-25|"}</T>
        <T x={COL_FD} y={240} size={12} fill={MUTED} anchor="middle" weight={700}>{"f_i|x_i-25|"}</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.4)} d="M 150 250 L 610 250" stroke={INK} sw={1.6} dur={0.5} />
      {ROWS.map((r, i) => (
        <Fade key={r.y} on={beat >= 4} delay={dl(4, 0.7 + i * 0.25)}>
          <T x={COL_XI} y={r.y} size={13} fill={INK} anchor="middle">{r.xi}</T>
          <T x={COL_FI} y={r.y} size={13} fill={INK} anchor="middle">{r.fi}</T>
          <T x={COL_ABS} y={r.y} size={13} fill={INK} anchor="middle">{r.abs}</T>
          <T x={COL_FD} y={r.y} size={13} fill={INK} anchor="middle">{r.fd}</T>
        </Fade>
      ))}
      <Draw on={beat >= 4} delay={dl(4, 2.1)} d="M 150 372 L 610 372" stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={COL_XI} y={382} size={13} fill={INK} anchor="middle" weight={700}>{t("Total", "Total")}</T>
        <T x={COL_FI} y={382} size={13} fill={INK} anchor="middle" weight={700}>40</T>
        <T x={COL_FD} y={382} size={13} fill={GREEN} anchor="middle" weight={700}>430</T>
      </Fade>

      {/* beat 5 — land (boxed, high emphasis): M.D. about the median */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(340, 405, 400, 45)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={433} size={17} fill={GREEN} anchor="middle" weight={800}>
          {"M.D.(M) = 430/40 = 10.75 marks"}
        </T>
      </Fade>

      {/* beat 6 — note: the median is NOT the middle mid-point */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 478 L 60 496" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={492} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "The grouped median is NOT the middle mid-point — it must be interpolated.",
            "Grouped median MIDDLE mid-point nahi hai — use interpolate karna hoga."
          )}
        </T>
      </Fade>
    </Scene>
  );
}

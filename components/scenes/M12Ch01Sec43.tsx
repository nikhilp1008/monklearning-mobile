/**
 * M12Ch01 · Section 43 — "Combination rules, decomposition, and periods"
 * Subtopic: Even, Odd, and Periodic Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice reads a rulebook: how symmetry survives sums and products, the
 * unique even/odd decomposition, then the standard periods and the three ways
 * they scale. A rulebook is exactly where a board collapses into bullets, so
 * every rule here is anchored to a REAL drawn figure — a mirror-symmetric
 * curve with its equal-height pair, a point-symmetric curve through the
 * origin, a 2×2 product grid with the surprising cell ringed, f and its
 * reflection f(−x) on one frame, and four honest waveforms (sin/cos, tan/cot,
 * |sin|/|cos|, {x}) each carrying a measured period bracket.
 *
 * Grid:
 *   header      y  30.. 96   title, underline, subtitle, full-width rule
 *   row 1       y 104..318   three panels: 40–348 | 372–700 | 724–1044
 *   row 2       y 328..465   the four standard-period waveforms, full width
 *   row 3       y 470..596   three panels: 40–348 | 372–700 | 724–1044
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "here is the rulebook"                  title + underline + subtitle + rule
 *  1  "even ± even, odd ± odd"                mirror-symmetric curve with its
 *                                             equal-height pair · point-symmetric
 *                                             curve through the origin · both rules
 *  2  "products — odd × odd flips to even"    2×2 product grid drawn out, the
 *                                             odd×odd cell shaded and ringed
 *  3  "the unique decomposition"              f (amber) and its reflection f(−x)
 *                                             (blue) on one frame + both fractions
 *  4  "the standard periods"                  four waveforms with period brackets:
 *                                             sin/cos 2π · tan/cot π · |sin|/|cos| π
 *                                             · {x} sawtooth 1
 *  5  "f(ax + b) has period T/|a|"            two stacked strips, the second at
 *                                             twice the frequency + the formula
 *  6  "a sum: LCM of the two periods"         two tick rulers of different pitch,
 *                                             their coincidences ruled in green
 *  7  "an absolute value often halves it"     sin x with its lower lobe → |sin x|
 *                                             with both lobes up, 2π → π
 *
 * Visual vocabulary (shared with Sections 44 and 45):
 *   AMBER_DARK  the given function / primary object
 *   BLUE        the reflection f(−x)
 *   GREEN_DARK  EVEN, and every settled result
 *   VIOLET      ODD
 *   RED         headings, warnings, the trap
 *   axes INK · measured brackets in the colour of the thing measured.
 */

import React from "react";
import { Circle, Line, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, ringD,
  INK, MUTED, GREEN, AMBER_DARK, GREEN_DARK, RED, PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";
const VIOLET = "#7C3AED";

/* ------------------------------------------------------------------ */
/* drawing helpers                                                     */
/* ------------------------------------------------------------------ */

/** sampled sine strip: y = y0 − amp·sin(2π(x−x0)/period + phase) */
function waveD(
  x0: number, x1: number, y0: number, amp: number,
  periodPx: number, phase = 0, n = 140
): string {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    const y = y0 - amp * Math.sin((2 * Math.PI * (x - x0)) / periodPx + phase);
    pts.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}

/** measured bracket: two end ticks joined by a rule */
const brk = (x1: number, x2: number, y: number) =>
  `M ${x1} ${y - 6} V ${y + 6} M ${x2} ${y - 6} V ${y + 6} M ${x1} ${y} H ${x2}`;

/** one tangent branch rising between the asymptotes at a and a+55 */
const tanBranch = (a: number) =>
  `M ${a + 7} 428 C ${a + 20} 422, ${a + 24} 411, ${a + 27.5} 402 ` +
  `C ${a + 31} 393, ${a + 35} 382, ${a + 48} 376`;

/* ---- row 1 · panel 1 : the two symmetries ---- */
const EVEN_MINI_D = "M 60 232 C 84 232, 90 174, 118 174 C 146 174, 152 232, 176 232";
const ODD_MINI_D = "M 214 242 C 240 242, 252 218, 272 210 C 292 202, 304 178, 330 178";

/* ---- row 1 · panel 3 : f and its reflection about the y-axis ---- */
const F_D = "M 816 210 C 842 206, 856 168, 884 176 C 912 184, 934 156, 954 160";
const F_MIRROR_D = "M 952 210 C 926 206, 912 168, 884 176 C 856 184, 834 156, 814 160";

/* ---- row 2 · the fractional-part sawtooth ---- */
const SAW_D = [820, 872, 924, 976].map((x) => `M ${x} 402 L ${x + 52} 376`).join(" ");
const SAW_FOOT = [820, 872, 924, 976];
const SAW_HEAD = [872, 924, 976, 1028];

/* ---- row 2 · |sin| / |cos| humps, period 55px ---- */
const ABS_HUMPS_D =
  "M 564 402 Q 591.5 354, 619 402 Q 646.5 354, 674 402 " +
  "Q 701.5 354, 729 402 Q 756.5 354, 784 402";

/* ---- row 3 · panel 6 : the two rulers ---- */
const TICKS_A = [380, 419, 458, 497, 536, 575, 614, 653, 692];
const TICKS_B = [380, 432, 484, 536, 588, 640, 692];

export default function M12Ch01Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("The rulebook — symmetry combines, periods scale",
             "Rulebook — symmetry combine hoti hai, periods scale")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 296 62 C 460 58, 660 66, 786 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("combination rules, the even-odd split, and every period worth knowing",
             "combination rules, even-odd split, aur har period jo yaad hona chahiye")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.6)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — sums and differences ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={40} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("①  sums and differences", "①  sums aur differences")}
        </T>
      </Fade>

      {/* the even mini-frame: mirror symmetry about the y-axis */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 52 210 H 184" stroke={INK} sw={1.5} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 118 246 V 174" stroke={INK} sw={1.5} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={EVEN_MINI_D} stroke={GREEN_DARK} sw={2.8} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Circle cx={87.5} cy={203} r={3.6} fill={GREEN_DARK} />
        <Circle cx={148.5} cy={203} r={3.6} fill={GREEN_DARK} />
      </Fade>
      <Line
        x1={87.5} y1={203} x2={148.5} y2={203}
        stroke={GREEN_DARK} strokeWidth={1.5} strokeDasharray="5 4"
        opacity={beat >= 1 ? 0.9 : 0}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={87.5} y={226} size={11} fill={MUTED} weight={700}>−x</T>
        <T x={148.5} y={226} size={11} fill={MUTED} weight={700}>x</T>
        <T x={118} y={264} size={12} fill={GREEN_DARK} weight={900}>even</T>
      </Fade>

      {/* the odd mini-frame: point symmetry about the origin */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 206 210 H 338" stroke={INK} sw={1.5} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 272 246 V 174" stroke={INK} sw={1.5} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={ODD_MINI_D} stroke={VIOLET} sw={2.8} dur={0.9} />
      <Line
        x1={245.25} y1={229} x2={298.75} y2={191}
        stroke={VIOLET} strokeWidth={1.5} strokeDasharray="5 4"
        opacity={beat >= 1 ? 0.9 : 0}
      />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Circle cx={245.25} cy={229} r={3.6} fill={VIOLET} />
        <Circle cx={298.75} cy={191} r={3.6} fill={VIOLET} />
        <Circle cx={272} cy={210} r={3.4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={272} y={264} size={12} fill={VIOLET} weight={900}>odd</T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={40} y={290} size={14} fill={GREEN_DARK} weight={900} anchor="start">
          even  ±  even   =   even
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={40} y={314} size={14} fill={VIOLET} weight={900} anchor="start">
          odd  ±  odd   =   odd
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the product grid ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={372} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("②  products — one of them flips",
             "②  products — ek flip ho jaata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={410} y={158} size={14} fill={INK} weight={900}>×</T>
        <T x={486} y={158} size={13} fill={INK} weight={800}>even</T>
        <T x={582} y={158} size={13} fill={INK} weight={800}>odd</T>
        <T x={430} y={197} size={13} fill={INK} weight={800} anchor="end">even</T>
        <T x={430} y={245} size={13} fill={INK} weight={800} anchor="end">odd</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d="M 438 168 V 264" stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.35)} d="M 534 168 V 264" stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d="M 630 168 V 264" stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d="M 438 168 H 630" stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.35)} d="M 438 216 H 630" stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d="M 438 264 H 630" stroke={MUTED} sw={1.4} dur={0.4} />
      <Rect
        x={534} y={216} width={96} height={48} fill={GREEN} stroke="none"
        opacity={beat >= 2 ? 0.2 : 0}
      />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={486} y={197} size={13} fill={GREEN_DARK} weight={900}>even</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={582} y={197} size={13} fill={VIOLET} weight={900}>odd</T>
        <T x={486} y={245} size={13} fill={VIOLET} weight={900}>odd</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={582} y={245} size={13} fill={GREEN_DARK} weight={900}>even</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.4)} d={ringD(582, 240, 42, 20)} stroke={RED} sw={2.1} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <T x={372} y={290} size={12.5} fill={RED} weight={800} anchor="start">
          {t("watch it — odd × odd flips to EVEN",
             "dhyan do — odd × odd, EVEN mein flip")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.9)}>
        <T x={372} y={314} size={12} fill={MUTED} weight={700} anchor="start">
          {t("the one that surprises people", "yahi log ko chaunkata hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the unique decomposition ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={724} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("③  the unique decomposition", "③  unique decomposition")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 806 186 H 962" stroke={INK} sw={1.5} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d="M 884 218 V 152" stroke={INK} sw={1.5} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1)} d={F_D} stroke={AMBER_DARK} sw={2.8} dur={0.9} />
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d={F_MIRROR_D} stroke={BLUE} sw={2.4} dur={0.9} />
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={966} y={164} size={11.5} fill={AMBER_DARK} weight={900} anchor="start">f(x)</T>
        <T x={802} y={164} size={11.5} fill={BLUE} weight={900} anchor="end">f(−x)</T>
        <Circle cx={884} cy={176} r={3.4} fill={INK} />
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={728} y={246} size={13.5} fill={GREEN_DARK} weight={900} anchor="start">even part  =</T>
        <T x={890} y={238} size={13} fill={GREEN_DARK} weight={800}>f(x) + f(−x)</T>
        <T x={890} y={264} size={13} fill={GREEN_DARK} weight={800}>2</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.6)} d="M 840 246 H 940" stroke={GREEN_DARK} sw={1.8} dur={0.4} />

      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <T x={728} y={296} size={13.5} fill={VIOLET} weight={900} anchor="start">odd part  =</T>
        <T x={890} y={288} size={13} fill={VIOLET} weight={800}>f(x) − f(−x)</T>
        <T x={890} y={314} size={13} fill={VIOLET} weight={800}>2</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 4.8)} d="M 840 296 H 940" stroke={VIOLET} sw={1.8} dur={0.4} />

      {/* ═══════════ beat 4 — the standard periods ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={40} y={340} size={13.5} fill={RED} weight={800} anchor="start">
          {t("④  the standard periods — memorise these cold",
             "④  standard periods — ye ratt lo")}
        </T>
      </Fade>

      {/* ---- sin x , cos x : period 2π ---- */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={158} y={364} size={12.5} fill={INK} weight={800}>sin x ,  cos x</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d="M 48 402 H 276" stroke={INK} sw={1.4} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 1.1)} d={waveD(48, 268, 402, 24, 110)} stroke={AMBER_DARK} sw={2.6} dur={1} />
      <Draw on={beat >= 4} delay={dl(4, 1.6)} d={waveD(48, 268, 402, 24, 110, Math.PI / 2)} stroke={MUTED} sw={1.9} dur={1} />
      <Draw on={beat >= 4} delay={dl(4, 2.6)} d={brk(48, 158, 442)} stroke={AMBER_DARK} sw={1.9} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 3.1)}>
        <T x={103} y={462} size={13} fill={AMBER_DARK} weight={900}>2π</T>
      </Fade>

      {/* ---- tan x , cot x : period π ---- */}
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={418} y={364} size={12.5} fill={INK} weight={800}>tan x ,  cot x</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.7)} d="M 300 402 H 536" stroke={INK} sw={1.4} dur={0.5} />
      {[308, 363, 418, 473, 528].map((a) => (
        <Line
          key={`asym${a}`} x1={a} y1={376} x2={a} y2={428}
          stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 5"
          opacity={beat >= 4 ? 1 : 0}
        />
      ))}
      {[308, 363, 418, 473].map((a, i) => (
        <Draw key={`tanb${a}`} on={beat >= 4} delay={dl(4, 4.2 + i * 0.18)}
          d={tanBranch(a)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      ))}
      <Draw on={beat >= 4} delay={dl(4, 5.1)} d={brk(308, 363, 442)} stroke={AMBER_DARK} sw={1.9} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 5.5)}>
        <T x={335.5} y={462} size={13} fill={AMBER_DARK} weight={900}>π</T>
      </Fade>

      {/* ---- |sin x| , |cos x| : period π ---- */}
      <Fade on={beat >= 4} delay={dl(4, 5.8)}>
        <T x={674} y={364} size={12.5} fill={INK} weight={800}>|sin x| ,  |cos x|</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 6.1)} d="M 556 402 H 792" stroke={INK} sw={1.4} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 6.4)} d={ABS_HUMPS_D} stroke={AMBER_DARK} sw={2.6} dur={1} />
      <Draw on={beat >= 4} delay={dl(4, 7.4)} d={brk(564, 619, 442)} stroke={AMBER_DARK} sw={1.9} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 7.8)}>
        <T x={591.5} y={462} size={13} fill={AMBER_DARK} weight={900}>π</T>
      </Fade>

      {/* ---- {x} : period 1 ---- */}
      <Fade on={beat >= 4} delay={dl(4, 8.1)}>
        <T x={924} y={364} size={12.5} fill={INK} weight={800}>{"{x}  fractional part"}</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 8.4)} d="M 812 402 H 1036" stroke={INK} sw={1.4} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 8.7)} d={SAW_D} stroke={AMBER_DARK} sw={2.6} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 9.5)}>
        {SAW_FOOT.map((x) => (
          <Circle key={`sf${x}`} cx={x} cy={402} r={3.2} fill={AMBER_DARK} />
        ))}
        {SAW_HEAD.map((x) => (
          <Circle key={`sh${x}`} cx={x} cy={376} r={3.2} fill={PAPER} stroke={AMBER_DARK} strokeWidth={1.6} />
        ))}
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 9.9)} d={brk(820, 872, 442)} stroke={AMBER_DARK} sw={1.9} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 10.3)}>
        <T x={846} y={462} size={13} fill={AMBER_DARK} weight={900}>1</T>
      </Fade>

      {/* ═══════════ beat 5 — an internal coefficient ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.15)}>
        <T x={40} y={488} size={13.5} fill={RED} weight={800} anchor="start">
          {t("⑤  an internal coefficient", "⑤  internal coefficient")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 40 512 H 250" stroke={INK} sw={1.3} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={waveD(40, 250, 512, 14, 105)} stroke={AMBER_DARK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={258} y={516} size={11.5} fill={AMBER_DARK} weight={900} anchor="start">f(x)</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.8)} d="M 40 550 H 250" stroke={INK} sw={1.3} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 2.1)} d={waveD(40, 250, 550, 14, 52.5)} stroke={GREEN_DARK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <T x={258} y={554} size={11.5} fill={GREEN_DARK} weight={900} anchor="start">f(ax + b)</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.2)}>
        <T x={40} y={588} size={14} fill={GREEN_DARK} weight={900} anchor="start">period  =  T / |a|</T>
        <T x={186} y={588} size={11} fill={MUTED} weight={700} anchor="start">
          {t("a compresses the cycle", "a cycle compress karta hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — a sum of two periodic parts ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.15)}>
        <T x={372} y={488} size={13.5} fill={RED} weight={800} anchor="start">
          {t("⑥  a sum of two periodic parts", "⑥  do periodic parts ka sum")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 380 514 H 692" stroke={AMBER_DARK} sw={1.8} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        {TICKS_A.map((x) => (
          <Line key={`ta${x}`} x1={x} y1={506} x2={x} y2={514} stroke={AMBER_DARK} strokeWidth={1.8} />
        ))}
        <T x={366} y={518} size={11.5} fill={AMBER_DARK} weight={900} anchor="end">T₁</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d="M 380 544 H 692" stroke={BLUE} sw={1.8} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        {TICKS_B.map((x) => (
          <Line key={`tb${x}`} x1={x} y1={536} x2={x} y2={544} stroke={BLUE} strokeWidth={1.8} />
        ))}
        <T x={366} y={548} size={11.5} fill={BLUE} weight={900} anchor="end">T₂</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.7)} d="M 536 502 V 552" stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 2.95)} d="M 692 502 V 552" stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <T x={372} y={578} size={14} fill={GREEN_DARK} weight={900} anchor="start">period  =  LCM (T₁ , T₂)</T>
        <T x={546} y={578} size={11} fill={RED} weight={800} anchor="start">
          {t("only if T₁ / T₂ is rational", "tabhi jab T₁ / T₂ rational ho")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the modulus halves it ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.1)}>
        <T x={724} y={488} size={13.5} fill={RED} weight={800} anchor="start">
          {t("⑦  an absolute value often halves it",
             "⑦  absolute value aksar aadha kar deta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.25)} d="M 732 528 H 842" stroke={INK} sw={1.3} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d={waveD(732, 842, 528, 16, 110)} stroke={AMBER_DARK} sw={2.5} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 0.45)} d={"M 856 528 L 894 528 M 884.2 522.1 L 894 528 L 884.2 533.9"} stroke={MUTED} sw={2} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 908 528 H 1018" stroke={INK} sw={1.3} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 0.55)}
        d="M 908 528 Q 935.5 496, 963 528 Q 990.5 496, 1018 528" stroke={GREEN_DARK} sw={2.5} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={787} y={562} size={12} fill={AMBER_DARK} weight={900}>sin x  —  2π</T>
        <T x={963} y={562} size={12} fill={GREEN_DARK} weight={900}>|sin x|  —  π</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.85)}>
        <T x={884} y={586} size={12} fill={MUTED} weight={700}>
          {t("the modulus folds the lower lobe up",
             "modulus lower lobe ko upar fold kar deta hai")}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * M12Ch01 · Section 23 — "Finding an inverse: swap and solve"
 * Subtopic: Composition and Inverse of Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Two things happen in this section: the four-step recipe run on a concrete
 * linear function, and the self-inverse special case. Both are drawn rather
 * than listed — the recipe as four linked steps, f(x) = 7 − 3x as a build
 * chain with its undo chain directly underneath, and the involution as two
 * real graphs: y = 1/x sitting symmetric about the mirror y = x (so it IS
 * its own inverse), against the fan y = x, y = 2x, y = 4x where q ∘ q lands
 * nowhere near the mirror.
 *
 * Grid:
 *   y  30..96   title band
 *   y 104..186  the four-step recipe (full width, four linked boxes)
 *   y 206..386  f(x) = 7 − 3x built and undone (40..660) · the trap (680..1044)
 *   y 396..542  involution (40..340) · p(x) = 1/x plotted (360..700) ·
 *               q(x) = 2x plotted (720..1044)
 *   y 556..596  the fast test
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "the recipe plus a special case"          title + underline + subtitle + rule
 *  1  "bijective, y=f(x), solve, swap"          the four numbered step boxes,
 *                                               linked by arrows
 *  2  "f(x) = 7 − 3x, undo in reverse"          build chain x →×(−3)→ −3x →+7→ 7−3x
 *                                               and undo chain x →−7→ x−7 →÷(−3)→
 *                                               (7−x)/3, then the boxed f⁻¹
 *  3  "the reciprocal is not the inverse"       1/(7−3x) written out and crossed,
 *                                               inverse ≠ reciprocal ringed
 *  4  "a self-inverse returns x twice over"     f(f(x)) = x + the x →f→f→ x loop
 *                                               with its return arrow
 *  5  "p(x) = 1/x is its own inverse"           both branches of y = 1/x with the
 *                                               mirror y = x drawn through them
 *  6  "q(x) = 2x gives 4x, not x"               the fan y = x, y = 2x, y = 4x —
 *                                               q ∘ q misses the mirror
 *  7  "compose with itself and check"           the closing test
 *
 * Visual vocabulary (shared with Sections 22 and 24 of this subtopic):
 *   axes INK with arrowheads · the function under study AMBER_DARK · derived
 *   results and inverses GREEN_DARK · traps, negations and headers RED ·
 *   reference lines (the mirror y = x) MUTED and dashed · function machines
 *   are CREAM boxes stroked in the colour of the step they perform.
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD, crossD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/** rectangle as a drawable closed path */
const boxD = (x: number, y: number, w: number, h: number) =>
  `M ${x} ${y} H ${x + w} V ${y + h} H ${x} Z`;

/* ---- beat 5 : y = 1/x on a genuinely square frame, origin (590,486),
       120x120 px window, isotropic HS = 20 px per unit → x,y ∈ [−3, 3] ---- */
const HX = 590, HY = 486, HS = 20;
const hx = (x: number) => HX + HS * x;
const hy = (y: number) => HY - HS * y;
const hypBranch = (x0: number, x1: number) => {
  const pts: string[] = [];
  for (let i = 0; i <= 28; i++) {
    const x = x0 + ((x1 - x0) * i) / 28;
    pts.push(`${hx(x).toFixed(1)} ${hy(1 / x).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
};
/* clipped to the square window on a reciprocal-symmetric domain (2.78 = 1/0.36),
   so x ∈ [0.36, 2.78] carries y ∈ [0.36, 2.78]: the arc and its mirror image in
   y = x are the SAME drawn arc, both fully inside the frame. */
const HYP_RIGHT = hypBranch(0.36, 2.78);
const HYP_LEFT = hypBranch(-2.78, -0.36);

/* ---- beat 6 : the fan, origin (760,540), isotropic FS = 30 px per unit,
       so y = x really is drawn at 45° ---- */
const FX = 760, FY = 540, FS = 30;
const fx = (x: number) => FX + FS * x;
const fy = (y: number) => FY - FS * y;
const rayD = (m: number, xmax: number) =>
  `M ${FX} ${FY} L ${fx(xmax).toFixed(1)} ${fy(m * xmax).toFixed(1)}`;

/* ---- beat 1 : the four step boxes ---- */
const STEP_X = [52, 306, 560, 814];
const STEP_W = 224;

export default function M12Ch01Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const steps: [string, string][] = [
    [t("check f is bijective", "check karo f bijective hai"), "1"],
    [t("write y = f(x)", "likho y = f(x)"), "2"],
    [t("solve for x in terms of y", "x ko y mein solve karo"), "3"],
    [t("swap x and y → f⁻¹(x)", "x aur y swap karo → f⁻¹"), "4"],
  ];

  return (
    <Scene>
      {/* ═══════════ beat 0 — framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Finding an inverse — swap and solve",
             "Inverse nikalna — swap karo aur solve karo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 330 62 C 470 58, 650 66, 752 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={80} size={12.5} fill={MUTED} script>
          {t("the standard recipe — plus the special case you should recognise on sight",
             "standard recipe — aur wo special case jo dekhte hi pehchaan lena chahiye")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — the four-step recipe ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("①  the recipe — four steps", "①  recipe — chaar steps")}
        </T>
      </Fade>
      {STEP_X.map((sx, i) => (
        <Draw key={`sb${i}`} on={beat >= 1} delay={dl(1, 0.8 + i * 0.9)}
          d={boxD(sx, 142, STEP_W, 44)} stroke={GREEN_DARK} sw={2.2} dur={0.5} fill={CREAM} />
      ))}
      {STEP_X.map((sx, i) => (
        <Fade key={`st${i}`} on={beat >= 1} delay={dl(1, 1.2 + i * 0.9)}>
          <Circle cx={sx} cy={164} r={12} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.9} />
          <T x={sx} y={168.5} size={13} fill={GREEN_DARK} weight={900}>{steps[i][1]}</T>
          <T x={sx + 120} y={168} size={12.5} fill={INK} weight={700}>{steps[i][0]}</T>
        </Fade>
      ))}
      {[0, 1, 2].map((i) => (
        <Draw key={`sa${i}`} on={beat >= 1} delay={dl(1, 1.9 + i * 0.9)}
          d={arrowD(STEP_X[i] + STEP_W + 2, 164, STEP_X[i + 1] - 13, 164)}
          stroke={MUTED} sw={1.9} dur={0.25} />
      ))}

      {/* ═══════════ beat 2 — f(x) = 7 − 3x, built then undone ═══════════ */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M 40 196 H 1044" stroke={MUTED} sw={1.1} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={44} y={218} size={13.5} fill={RED} weight={800} anchor="start">
          {t("②  f(x) = 7 − 3x — undo in reverse", "②  f(x) = 7 − 3x — ulta undo karo")}
        </T>
      </Fade>

      {/* build chain */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={44} y={267} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("build f", "f banao")}
        </T>
        <T x={128} y={268} size={16} fill={INK} weight={800}>x</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d={arrowD(142, 262, 172, 262)} stroke={INK} sw={2} dur={0.25} />
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={boxD(176, 244, 86, 36)} stroke={AMBER_DARK} sw={2.2} dur={0.4} fill={CREAM} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={219} y={267} size={14} fill={AMBER_DARK} weight={800}>× (−3)</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.2)} d={arrowD(262, 262, 292, 262)} stroke={INK} sw={2} dur={0.25} />
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={322} y={268} size={15} fill={INK} weight={800}>−3x</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.8)} d={arrowD(348, 262, 378, 262)} stroke={INK} sw={2} dur={0.25} />
      <Draw on={beat >= 2} delay={dl(2, 3)} d={boxD(382, 244, 72, 36)} stroke={AMBER_DARK} sw={2.2} dur={0.4} fill={CREAM} />
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={418} y={267} size={14} fill={AMBER_DARK} weight={800}>+ 7</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.6)} d={arrowD(454, 262, 484, 262)} stroke={INK} sw={2} dur={0.25} />
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={530} y={268} size={16} fill={AMBER_DARK} weight={900}>7 − 3x</T>
      </Fade>

      {/* undo chain */}
      <Fade on={beat >= 2} delay={dl(2, 4.8)}>
        <T x={44} y={325} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("undo f", "f undo karo")}
        </T>
        <T x={128} y={326} size={16} fill={INK} weight={800}>x</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5.2)} d={arrowD(142, 320, 172, 320)} stroke={INK} sw={2} dur={0.25} />
      <Draw on={beat >= 2} delay={dl(2, 5.4)} d={boxD(176, 302, 72, 36)} stroke={GREEN_DARK} sw={2.2} dur={0.4} fill={CREAM} />
      <Fade on={beat >= 2} delay={dl(2, 5.8)}>
        <T x={212} y={325} size={14} fill={GREEN_DARK} weight={800}>− 7</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 6)} d={arrowD(248, 320, 278, 320)} stroke={INK} sw={2} dur={0.25} />
      <Fade on={beat >= 2} delay={dl(2, 6.3)}>
        <T x={312} y={326} size={15} fill={INK} weight={800}>x − 7</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 6.6)} d={arrowD(348, 320, 378, 320)} stroke={INK} sw={2} dur={0.25} />
      <Draw on={beat >= 2} delay={dl(2, 6.8)} d={boxD(382, 302, 86, 36)} stroke={GREEN_DARK} sw={2.2} dur={0.4} fill={CREAM} />
      <Fade on={beat >= 2} delay={dl(2, 7.2)}>
        <T x={425} y={325} size={14} fill={GREEN_DARK} weight={800}>÷ (−3)</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 7.4)} d={arrowD(468, 320, 498, 320)} stroke={INK} sw={2} dur={0.25} />
      <Fade on={beat >= 2} delay={dl(2, 7.8)}>
        <T x={566} y={326} size={16} fill={GREEN_DARK} weight={900}>(7 − x) / 3</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 8.8)}>
        <T x={44} y={364} size={19} fill={GREEN_DARK} weight={900} anchor="start">f⁻¹(x) = (7 − x) / 3</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 9.6)} d="M 44 374 H 246" stroke={GREEN_DARK} sw={2.4} dur={0.5} />

      {/* ═══════════ beat 3 — the reciprocal trap ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={684} y={218} size={13.5} fill={RED} weight={800} anchor="start">
          {t("③  the classic trap", "③  classic trap")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={684} y={256} size={16} fill={RED} weight={800} anchor="start">f⁻¹(x) = 1 / (7 − 3x)</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.7)} d={crossD(684, 243, 175, 18)} stroke={RED} sw={2.2} dur={0.35} />
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={684} y={292} size={13} fill={INK} weight={700} anchor="start">
          {t("the reciprocal 1/f(x) is a", "reciprocal 1/f(x), inverse se")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <T x={684} y={316} size={13} fill={INK} weight={700} anchor="start">
          {t("completely different object", "bilkul alag cheez hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <T x={684} y={358} size={16} fill={GREEN_DARK} weight={900} anchor="start">
          {t("inverse ≠ reciprocal", "inverse ≠ reciprocal")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 5)} d={ringD(767, 352, 96, 18)} stroke={GREEN_DARK} sw={2} dur={0.8} />

      {/* ═══════════ beat 4 — the involution ═══════════ */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M 40 392 H 1044" stroke={MUTED} sw={1.1} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={44} y={410} size={13.5} fill={RED} weight={800} anchor="start">
          {t("④  a self-inverse (involution)", "④  self-inverse (involution)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={44} y={440} size={13.5} fill={INK} weight={700} anchor="start">
          {t("apply it twice and x comes back", "do baar apply karo, x wapas aata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={44} y={474} size={20} fill={GREEN_DARK} weight={900} anchor="start">f ( f (x) ) = x</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <T x={58} y={524} size={16} fill={INK} weight={800}>x</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.5)} d={arrowD(70, 516, 100, 516)} stroke={INK} sw={2} dur={0.25} />
      <Draw on={beat >= 4} delay={dl(4, 3.7)} d={boxD(104, 498, 48, 36)} stroke={AMBER_DARK} sw={2.2} dur={0.4} fill={CREAM} />
      <Fade on={beat >= 4} delay={dl(4, 4.1)}>
        <T x={128} y={524} size={16} fill={AMBER_DARK} weight={800}>f</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4.3)} d={arrowD(152, 516, 182, 516)} stroke={INK} sw={2} dur={0.25} />
      <Draw on={beat >= 4} delay={dl(4, 4.5)} d={boxD(186, 498, 48, 36)} stroke={AMBER_DARK} sw={2.2} dur={0.4} fill={CREAM} />
      <Fade on={beat >= 4} delay={dl(4, 4.9)}>
        <T x={210} y={524} size={16} fill={AMBER_DARK} weight={800}>f</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 5.1)} d={arrowD(234, 516, 264, 516)} stroke={INK} sw={2} dur={0.25} />
      <Fade on={beat >= 4} delay={dl(4, 5.5)}>
        <T x={282} y={526} size={20} fill={GREEN_DARK} weight={900}>x</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 6)} d={arrowD(288, 542, 62, 542)} stroke={GREEN_DARK} sw={1.8} dur={0.6} />

      {/* ═══════════ beat 5 — p(x) = 1/x is its own inverse ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={364} y={410} size={13.5} fill={RED} weight={800} anchor="start">
          {t("⑤  p(x) = 1/x — its own inverse", "⑤  p(x) = 1/x — apna hi inverse")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={364} y={446} size={13.5} fill={INK} weight={800} anchor="start">p(p(x)) = 1/(1/x) = x</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={364} y={478} size={13.5} fill={GREEN_DARK} weight={900} anchor="start">
          {t("so p⁻¹ = p", "to p⁻¹ = p")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.1)} d={arrowD(524, HY, 658, HY)} stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 2.5)} d={arrowD(HX, 544, HX, 424)} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <Line x1={hx(-2.8)} y1={hy(-2.8)} x2={hx(2.8)} y2={hy(2.8)}
          stroke={MUTED} strokeWidth={1.8} strokeDasharray="6 5" />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.4)} d={HYP_RIGHT} stroke={AMBER_DARK} sw={2.8} dur={0.9} />
      <Draw on={beat >= 5} delay={dl(5, 4.1)} d={HYP_LEFT} stroke={AMBER_DARK} sw={2.8} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={660} y={470} size={11.5} fill={AMBER_DARK} weight={800} anchor="start">y = 1/x</T>
        <T x={650} y={424} size={11.5} fill={MUTED} weight={800} anchor="start">y = x</T>
      </Fade>

      {/* ═══════════ beat 6 — q(x) = 2x is not ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={724} y={410} size={13.5} fill={RED} weight={800} anchor="start">
          {t("⑥  contrast — q(x) = 2x", "⑥  contrast — q(x) = 2x")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d={arrowD(726, FY, 850, FY)} stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={arrowD(FX, 544, FX, 426)} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <Line x1={FX} y1={FY} x2={fx(2)} y2={fy(2)}
          stroke={MUTED} strokeWidth={1.8} strokeDasharray="6 5" />
        <T x={826} y={484} size={11.5} fill={MUTED} weight={800} anchor="start">y = x</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.3)} d={rayD(2, 1.4)} stroke={AMBER_DARK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2.9)}>
        <T x={812} y={458} size={11.5} fill={AMBER_DARK} weight={800} anchor="start">q = 2x</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.4)} d={rayD(4, 0.85)} stroke={RED} sw={2.8} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={791} y={432} size={11.5} fill={RED} weight={800} anchor="start">q ∘ q = 4x</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.8)}>
        <T x={1004} y={500} size={11.5} fill={INK} weight={800} anchor="end">4x ≠ x</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.6)}>
        <T x={1004} y={524} size={11.5} fill={RED} weight={800} anchor="end">
          {t("not self-inverse", "self-inverse nahin")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the fast test ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 40 548 H 1044" stroke={MUTED} sw={1.2} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={540} y={568} size={13.5} fill={RED} weight={800}>
          {t("THE FAST TEST — compose the function with itself and see if it collapses to x",
             "FAST TEST — function ko khud se compose karo aur dekho ki wo x pe collapse hota hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={540} y={592} size={12.5} fill={MUTED} weight={700}>
          {t("if it does, the function is its own inverse — an involution",
             "agar hota hai, to function apna hi inverse hai — involution")}
        </T>
      </Fade>
    </Scene>
  );
}

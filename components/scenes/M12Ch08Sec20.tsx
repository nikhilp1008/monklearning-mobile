/**
 * M12Ch08 · Section 20 — "Modulus, inequality decode, and symmetry catalogue"
 * Subtopic: Advanced Regions: Modulus, Inequalities & Composite Areas
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The consolidation board for the subtopic. Every entry in the toolkit is
 * shown as the PICTURE it decodes to, never as a sentence: the modulus fold
 * is an actual curve with its negative lobe reflected up about the axis, the
 * diamond results are actual diamonds, each of the four inequality decodes is
 * an actual shaded half-plane / disc / wedge, the system is an actual overlap
 * with the origin marked as the test point, the composite is two candidate
 * ceilings crossing at s with both slabs shaded, and the symmetry catalogue is
 * three icons with their multipliers.
 *
 * SHARED VISUAL VOCABULARY (Sections 19 · 20 · 21 of this subtopic):
 *   · axes  — INK, x-axis arrow right, y-axis arrow up, origin marked O
 *   · primary curve / upper boundary — AMBER_DARK
 *   · secondary curve / lower boundary — BLUE
 *   · the piece BEFORE a split point — GREEN fill, opacity ≈ 0.20
 *   · the piece AFTER  a split point — AMBER fill, opacity ≈ 0.26
 *     (an undivided region is plain GREEN)
 *   · limits, corners, switch points, final answers — RED
 *   · prose and captions — MUTED, script face
 *
 * Layout bands:  title 30..80 · row 1 (① ②) 88..256 · row 2 (③ ④) 272..432
 *                row 3 (⑤ ⑥) 446..558 · closing banner 566..596
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "consolidate the toolkit — none of it     title + underline + the
 *      changes the integration"                 'what to integrate' subtitle
 *  1  "|f| = f where f ≥ 0, −f where f < 0 —    ① the fold figure: f drawn with
 *      split at the roots of f"                 its negative lobe in blue, the
 *                                               lobe reflected up in amber, both
 *                                               roots ringed, dashed splits
 *  2  "|x|/p + |y|/q ≤ 1 → 2pq ·                ② two diamonds drawn on their own
 *      |x| + |y| ≤ a → 2a²"                     mini axes with legs labelled
 *  3  "y ≤ f below · y ≥ f above ·              ③ four panels, each with axes, a
 *      x²+y² ≤ r² inside · y ≥ |x| the wedge"   boundary and the shaded side
 *  4  "a system is the intersection — test a    ④ a quarter-disc cut by a line,
 *      point, often the origin"                 overlap shaded, origin dotted
 *  5  "ceiling switches at x = s: split there,  ⑤ two ceilings crossing at s, the
 *      top₁ − bottom then top₂ − bottom"        two slabs shaded, split integral
 *  6  "y-axis → 2× right half · x-axis → 2×     ⑥ three symmetry icons with their
 *      upper half · four-fold → 4× Q1"          shaded fractions and ×2 ×2 ×4
 *  7  "decode first, integrate second —         rule + closing banner across the
 *      verify corners, sides, switch points"    full width of the board
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, INK_LIGHT, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

export default function M12Ch08Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  /* ---- ③ the four inequality decodes: [panel centre, caption] ---- */
  const decodeCaptions: [number, string, string][] = [
    [124, "y ≤ f  →  below the curve", "y ≤ f  →  curve ke neeche"],
    [306, "y ≥ f  →  above the curve", "y ≥ f  →  curve ke oopar"],
    [488, "x² + y² ≤ r²  →  inside", "x² + y² ≤ r²  →  circle ke andar"],
    [670, "y ≥ |x|  →  above the V", "y ≥ |x|  →  V ke oopar"],
  ];

  return (
    <Scene>
      {/* ═══════════ beat 0 — title ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("The decoding toolkit for advanced regions",
             "Advanced regions ke liye decoding toolkit")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 348 62 C 470 58, 630 66, 734 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t("none of it changes the integration — it only tells you WHAT to integrate",
             "isme se kuch bhi integration nahin badalta — yeh sirf batata hai KYA integrate karna hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — ① the modulus fold ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={36} y={106} size={13.5} fill={RED} weight={800} anchor="start">
          {t("① MODULUS EXPANSION", "① MODULUS EXPANSION")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={arrowD(44, 196, 306, 196)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={arrowD(52, 240, 52, 118)} stroke={INK} sw={2.2} dur={0.5} />
      {/* f itself — the lobe that dips below the axis */}
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d="M 70 132 Q 90 172 110 196" stroke={BLUE} sw={2.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d="M 110 196 Q 170 268 230 196" stroke={BLUE} sw={2.4} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d="M 230 196 Q 250 172 270 132" stroke={BLUE} sw={2.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <T x={170} y={254} size={12} fill={BLUE} weight={800}>{t("f < 0", "f < 0")}</T>
      </Fade>
      {/* |f| — the same lobe folded up */}
      <Draw on={beat >= 1} delay={dl(1, 4)} d="M 110 196 Q 170 124 230 196"
        stroke={AMBER_DARK} sw={3} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <Path d="M 110 196 Q 170 124 230 196 Z" fill={AMBER} opacity={0.26} />
        <T x={170} y={146} size={12} fill={AMBER_DARK} weight={900}>|f| = −f</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <Path d="M 110 118 L 110 240" stroke={RED} strokeWidth={1.7} strokeDasharray="6 5" />
        <Path d="M 230 118 L 230 240" stroke={RED} strokeWidth={1.7} strokeDasharray="6 5" />
        <Circle cx={110} cy={196} r={4.8} fill={RED} />
        <Circle cx={230} cy={196} r={4.8} fill={RED} />
        <T x={104} y={184} size={11.5} fill={RED} weight={800} anchor="end">x₁</T>
        <T x={236} y={184} size={11.5} fill={RED} weight={800} anchor="start">x₂</T>
      </Fade>
      {/* the statement */}
      <Fade on={beat >= 1} delay={dl(1, 6.2)}>
        <T x={320} y={142} size={16} fill={INK} weight={800} anchor="start">
          {t("|f| = f      where f ≥ 0", "|f| = f      jahan f ≥ 0")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.4)}>
        <T x={320} y={172} size={16} fill={INK} weight={800} anchor="start">
          {t("|f| = −f    where f < 0", "|f| = −f    jahan f < 0")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={320} y={206} size={13} fill={MUTED} script anchor="start">
          {t("split the domain at the roots of f", "domain ko f ke roots par split karo")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10.4)}>
        <T x={320} y={230} size={13} fill={RED} weight={800} anchor="start">
          {t("— exactly where the sign flips", "— theek wahan jahan sign flip hota hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — ② the diamond results ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={545} y={106} size={13.5} fill={RED} weight={800} anchor="start">
          {t("② THE DIAMOND RESULTS", "② DIAMOND RESULTS")}
        </T>
      </Fade>
      {/* diamond 1 — legs p and q */}
      <Draw on={beat >= 2} delay={dl(2, 1)} d={arrowD(592, 176, 748, 176)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d={arrowD(665, 236, 665, 118)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.7)} d="M 727 176 L 665 128 L 603 176 L 665 224 Z"
        stroke={AMBER_DARK} sw={2.6} dur={1.1} />
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <Path d="M 727 176 L 665 128 L 603 176 L 665 224 Z" fill={GREEN} opacity={0.2} />
        <T x={698} y={194} size={13} fill={GREEN_DARK} weight={900}>p</T>
        <T x={654} y={156} size={13} fill={GREEN_DARK} weight={900} anchor="end">q</T>
      </Fade>
      {/* diamond 2 — the classic, leg a */}
      <Draw on={beat >= 2} delay={dl(2, 4)} d={arrowD(830, 176, 972, 176)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 4.3)} d={arrowD(900, 240, 900, 114)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 4.7)} d="M 952 176 L 900 124 L 848 176 L 900 228 Z"
        stroke={AMBER_DARK} sw={2.6} dur={1.1} />
      <Fade on={beat >= 2} delay={dl(2, 5.8)}>
        <Path d="M 952 176 L 900 124 L 848 176 L 900 228 Z" fill={GREEN} opacity={0.2} />
        <T x={928} y={194} size={13} fill={GREEN_DARK} weight={900}>a</T>
        <T x={890} y={156} size={13} fill={GREEN_DARK} weight={900} anchor="end">a</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={665} y={252} size={13} fill={INK} weight={800}>
          {t("|x|/p + |y|/q ≤ 1  →  2pq", "|x|/p + |y|/q ≤ 1  →  2pq")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8.4)}>
        <T x={900} y={252} size={13} fill={INK} weight={800}>
          {t("|x| + |y| ≤ a  →  2a²", "|x| + |y| ≤ a  →  2a²")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — ③ the four inequality decodes ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={36} y={290} size={13.5} fill={RED} weight={800} anchor="start">
          {t("③ INEQUALITY DECODE — which side is the region?",
             "③ INEQUALITY DECODE — region kaunsi side hai?")}
        </T>
      </Fade>

      {/* panel 1 — y ≤ f : below */}
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={arrowD(44, 390, 206, 390)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d={arrowD(60, 398, 60, 314)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.7)} d="M 62 372 Q 130 316 198 340" stroke={AMBER_DARK} sw={2.6} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <Path d="M 62 372 Q 130 316 198 340 L 198 390 L 62 390 Z" fill={GREEN} opacity={0.24} />
      </Fade>

      {/* panel 2 — y ≥ f : above */}
      <Draw on={beat >= 3} delay={dl(3, 3.4)} d={arrowD(226, 390, 388, 390)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 3.6)} d={arrowD(242, 398, 242, 314)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 3.9)} d="M 244 372 Q 312 316 380 340" stroke={AMBER_DARK} sw={2.6} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 4.6)}>
        <Path d="M 244 372 Q 312 316 380 340 L 380 308 L 244 308 Z" fill={GREEN} opacity={0.24} />
      </Fade>

      {/* panel 3 — x² + y² ≤ r² : inside the circle */}
      <Draw on={beat >= 3} delay={dl(3, 5.6)} d={arrowD(412, 356, 566, 356)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 5.8)} d={arrowD(488, 404, 488, 306)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 6.1)}
        d="M 450 356 A 38 38 0 1 1 526 356 A 38 38 0 1 1 450 356"
        stroke={AMBER_DARK} sw={2.6} dur={1} />
      <Fade on={beat >= 3} delay={dl(3, 7.1)}>
        <Circle cx={488} cy={356} r={38} fill={GREEN} opacity={0.24} />
        <Path d="M 488 356 L 526 356" stroke={RED} strokeWidth={1.8} />
        <T x={508} y={350} size={12} fill={RED} weight={900}>r</T>
      </Fade>

      {/* panel 4 — y ≥ |x| : the wedge above the V */}
      <Draw on={beat >= 3} delay={dl(3, 8)} d={arrowD(594, 394, 750, 394)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 8.2)} d={arrowD(670, 402, 670, 332)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 8.5)} d="M 620 344 L 670 394 L 720 344" stroke={AMBER_DARK} sw={2.6} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 9.2)}>
        <Path d="M 670 394 L 620 344 L 720 344 Z" fill={GREEN} opacity={0.24} />
      </Fade>

      {decodeCaptions.map(([cx, ce, ch], i) => (
        <Fade key={`dc${cx}`} on={beat >= 3} delay={dl(3, 2.9 + i * 2.2)}>
          <T x={cx} y={424} size={11.5} fill={INK} weight={800}>{t(ce, ch)}</T>
        </Fade>
      ))}

      {/* ═══════════ beat 4 — ④ a system is the intersection ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={780} y={290} size={13.5} fill={RED} weight={800} anchor="start">
          {t("④ A SYSTEM ⇒ THE INTERSECTION", "④ SYSTEM ⇒ INTERSECTION")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d={arrowD(792, 396, 1038, 396)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 1.3)} d={arrowD(872, 408, 872, 302)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d="M 956 396 A 84 84 0 0 0 872 312"
        stroke={AMBER_DARK} sw={2.6} dur={0.9} />
      <Draw on={beat >= 4} delay={dl(4, 2.6)} d="M 824 320 L 1020 384" stroke={BLUE} sw={2.6} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <Path d="M 872 396 L 956 396 A 84 84 0 0 0 948 361 L 872 336 Z" fill={GREEN} opacity={0.26} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <Circle cx={948} cy={361} r={4.6} fill={RED} />
        <Circle cx={872} cy={396} r={5.4} fill={RED} />
        <T x={866} y={384} size={11} fill={RED} weight={800} anchor="end">
          {t("origin", "origin")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <T x={780} y={418} size={11.5} fill={INK} weight={700} anchor="start">
          {t("the region is the intersection of all of them",
             "region un sabka intersection hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.8)}>
        <T x={780} y={434} size={11.5} fill={MUTED} script anchor="start">
          {t("test an easy point to confirm the side",
             "side confirm karne ko ek easy point test karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — ⑤ the composite switch ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={36} y={462} size={13.5} fill={RED} weight={800} anchor="start">
          {t("⑤ COMPOSITE — THE CEILING SWITCHES AT x = s",
             "⑤ COMPOSITE — CEILING x = s PAR SWITCH")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={arrowD(52, 542, 306, 542)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d="M 60 526 L 290 480" stroke={BLUE} sw={2.6} dur={0.7} />
      <Draw on={beat >= 5} delay={dl(5, 1.9)} d="M 60 486 L 290 532" stroke={AMBER_DARK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <Path d="M 60 526 L 160 506 L 160 542 L 60 542 Z" fill={GREEN} opacity={0.24} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <Path d="M 160 506 L 290 532 L 290 542 L 160 542 Z" fill={AMBER} opacity={0.3} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <Path d="M 160 542 L 160 490" stroke={RED} strokeWidth={1.8} strokeDasharray="6 5" />
        <Circle cx={160} cy={506} r={5} fill={RED} />
        <T x={160} y={482} size={13} fill={RED} weight={900}>s</T>
        <T x={64} y={518} size={11} fill={BLUE} weight={800} anchor="start">top₁</T>
        <T x={256} y={526} size={11} fill={AMBER_DARK} weight={800} anchor="start">top₂</T>
        <T x={176} y={558} size={10.5} fill={MUTED} weight={700}>
          {t("bottom = the x-axis", "bottom = x-axis")}
        </T>
      </Fade>
      {/* the split integral */}
      <Fade on={beat >= 5} delay={dl(5, 4.6)}>
        <T x={320} y={500} size={17} fill={INK} weight={900} anchor="start">A =</T>
        <T x={366} y={508} size={34} fill={GREEN_DARK} weight={500}>∫</T>
        <T x={378} y={484} size={10.5} fill={GREEN_DARK} anchor="start">s</T>
        <T x={378} y={514} size={10.5} fill={GREEN_DARK} anchor="start">a</T>
        <T x={398} y={504} size={15} fill={GREEN_DARK} weight={800} anchor="start">(top₁ − bottom) dx</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.4)}>
        <T x={330} y={540} size={17} fill={INK} weight={900} anchor="start">+</T>
        <T x={366} y={548} size={34} fill={AMBER_DARK} weight={500}>∫</T>
        <T x={378} y={524} size={10.5} fill={AMBER_DARK} anchor="start">b</T>
        <T x={378} y={554} size={10.5} fill={AMBER_DARK} anchor="start">s</T>
        <T x={398} y={544} size={15} fill={AMBER_DARK} weight={800} anchor="start">(top₂ − bottom) dx</T>
      </Fade>

      {/* ═══════════ beat 6 — ⑥ the symmetry catalogue ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={545} y={462} size={13.5} fill={RED} weight={800} anchor="start">
          {t("⑥ SYMMETRY CATALOGUE — it saves real time",
             "⑥ SYMMETRY CATALOGUE — asli time bachata hai")}
        </T>
      </Fade>
      {/* icon 1 — symmetric about the y-axis: twice the right half */}
      <Draw on={beat >= 6} delay={dl(6, 1)} d="M 570 534 H 690" stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d="M 578 534 Q 630 464 682 534" stroke={AMBER_DARK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <Path d="M 630 499 Q 656 499 682 534 L 630 534 Z" fill={GREEN} opacity={0.34} />
        <Path d="M 630 476 L 630 540" stroke={RED} strokeWidth={1.7} strokeDasharray="5 5" />
        <T x={694} y={512} size={15} fill={RED} weight={900} anchor="start">× 2</T>
      </Fade>
      {/* icon 2 — symmetric about the x-axis: twice the upper half */}
      <Draw on={beat >= 6} delay={dl(6, 3.2)}
        d="M 754 506 A 46 30 0 1 1 846 506 A 46 30 0 1 1 754 506"
        stroke={AMBER_DARK} sw={2.6} dur={1} />
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <Path d="M 754 506 A 46 30 0 0 1 846 506 Z" fill={GREEN} opacity={0.34} />
        <Path d="M 746 506 L 854 506" stroke={RED} strokeWidth={1.7} strokeDasharray="5 5" />
        <T x={858} y={512} size={15} fill={RED} weight={900} anchor="start">× 2</T>
      </Fade>
      {/* icon 3 — four-fold: four times the first-quadrant piece */}
      <Draw on={beat >= 6} delay={dl(6, 5.2)} d="M 920 506 H 1004" stroke={INK_LIGHT} sw={1.6} dur={0.3} />
      <Draw on={beat >= 6} delay={dl(6, 5.4)} d="M 962 548 L 962 464" stroke={INK_LIGHT} sw={1.6} dur={0.3} />
      <Draw on={beat >= 6} delay={dl(6, 5.7)} d="M 996 506 L 962 472 L 928 506 L 962 540 Z"
        stroke={AMBER_DARK} sw={2.6} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 6.6)}>
        <Path d="M 996 506 L 962 472 L 928 506 L 962 540 Z" fill={GREEN} opacity={0.16} />
        <Path d="M 962 506 L 996 506 L 962 472 Z" fill={GREEN} opacity={0.4} />
        <T x={1008} y={512} size={15} fill={RED} weight={900} anchor="start">× 4</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={630} y={556} size={11} fill={MUTED} weight={700}>
          {t("about the y-axis", "y-axis ke baare mein")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.8)}>
        <T x={800} y={556} size={11} fill={MUTED} weight={700}>
          {t("about the x-axis", "x-axis ke baare mein")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7.2)}>
        <T x={962} y={556} size={11} fill={MUTED} weight={700}>
          {t("four-fold — the diamond", "four-fold — diamond")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the governing principle ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 36 568 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={590} size={15} fill={RED} weight={800}>
          {t("DECODE FIRST, INTEGRATE SECOND — verify every corner, every side and every switch point before you write a single integral",
             "PEHLE DECODE, DUSRE INTEGRATE — ek bhi integral likhne se pehle har corner, har side aur har switch point verify karo")}
        </T>
      </Fade>
    </Scene>
  );
}

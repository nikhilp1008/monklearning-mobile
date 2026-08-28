/**
 * M12Ch01 · Section 22 — "Computing a composite both ways"
 * Subtopic: Composition and Inverse of Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice computes f ∘ g and g ∘ f for the SAME pair and shows they
 * disagree, so the board has to actually carry out both substitutions and
 * actually evaluate both at x = 2. Nothing here is a bullet list: the two
 * functions are plotted on real axes, each composite is derived line by
 * line with the substituted formula boxed in its slot, and the numerical
 * test runs as two machine chains.
 *
 * Grid:
 *   y  30..96   title band
 *   y 104..190  the mechanical rule, as a pipeline (full width)
 *   y 216..390  three columns — 40..352 (the two functions, plotted),
 *               372..700 (f ∘ g), 720..1044 (g ∘ f)
 *   y 404..518  the x = 2 test (left, 40..620) and the verdict (right, 640..1044)
 *   y 534..596  the handoff: range of inner ⊆ domain of outer
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "make composition concrete, both orders"   title + underline + subtitle + rule
 *  1  "drop the inner formula into every slot"   x → [inner] → [outer( ▢ )] →
 *                                                outer(inner(x)) pipeline
 *  2  "f(x)=3x+1 and g(x)=x²−2 on the reals"     axes + the line + the parabola,
 *                                                both intercepts marked
 *  3  "f ∘ g: write x²−2 wherever f says input"  5-line derivation, the substituted
 *                                                x²−2 boxed, 3x²−5 ringed
 *  4  "g ∘ f: square 3x+1 and subtract two"      5-line derivation, 3x+1 boxed,
 *                                                9x²+6x−1 ringed
 *  5  "test at x = 2: seven versus forty seven"  two machine chains, 2→g→2→f→7
 *                                                and 2→f→7→g→47
 *  6  "so f ∘ g ≠ g ∘ f, order is not optional"  the ringed inequality + the two
 *                                                results side by side
 *  7  "confirm the handoff every time"           range-of-inner nested inside
 *                                                domain-of-outer
 *
 * Visual vocabulary (shared with Sections 23 and 24 of this subtopic):
 *   axes INK with arrowheads · the given function AMBER_DARK · the second
 *   given function BLUE · every derived result GREEN_DARK · traps, headers
 *   and negations RED · reference lines and asides MUTED · function machines
 *   are CREAM boxes stroked in the colour of the function they apply.
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** rectangle as a drawable closed path */
const boxD = (x: number, y: number, w: number, h: number) =>
  `M ${x} ${y} H ${x + w} V ${y + h} H ${x} Z`;

/* ---- beat 2 : the plot frame, origin (200,322) ---- */
const OX = 200, OY = 322, SX = 36, SY = 7.5;
const gx = (x: number) => OX + SX * x;
const gy = (y: number) => OY - SY * y;

const LINE_D =
  `M ${gx(-2.7).toFixed(1)} ${gy(3 * -2.7 + 1).toFixed(1)}` +
  ` L ${gx(3.1).toFixed(1)} ${gy(3 * 3.1 + 1).toFixed(1)}`;

const PARA_D = (() => {
  const pts: string[] = [];
  for (let i = 0; i <= 32; i++) {
    const x = -2.4 + (4.8 * i) / 32;
    pts.push(`${gx(x).toFixed(1)} ${gy(x * x - 2).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
})();

export default function M12Ch01Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Composition both ways — and they disagree",
             "Composition dono orders mein — aur dono alag")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 320 62 C 470 58, 650 66, 762 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={80} size={12.5} fill={MUTED} script>
          {t("compute f ∘ g and g ∘ f for the same pair — and watch them disagree",
             "ek hi pair ke liye f ∘ g aur g ∘ f nikalo — aur dono ko alag hote dekho")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — the mechanical rule, as a pipeline ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("①  the mechanical rule", "①  mechanical rule")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={300} y={161} size={18} fill={INK} weight={800}>x</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={arrowD(314, 154, 356, 154)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={boxD(360, 132, 120, 44)} stroke={BLUE} sw={2.2} dur={0.6} fill={CREAM} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={420} y={160} size={15} fill={BLUE} weight={800}>
          {t("inner", "inner")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d={arrowD(480, 154, 542, 154)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={513} y={144} size={11.5} fill={BLUE} weight={700}>inner(x)</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={boxD(546, 132, 144, 44)} stroke={AMBER_DARK} sw={2.2} dur={0.6} fill={CREAM} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={556} y={160} size={15} fill={AMBER_DARK} weight={800} anchor="start">outer (</T>
        <T x={664} y={160} size={15} fill={AMBER_DARK} weight={800} anchor="start">)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <Rect x={618} y={142} width={38} height={24} rx={5} fill="none"
          stroke={AMBER} strokeWidth={2} strokeDasharray="5 4" />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.2)} d={arrowD(690, 154, 746, 154)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={760} y={161} size={18} fill={AMBER_DARK} weight={800} anchor="start">outer( inner(x) )</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <T x={540} y={194} size={12.5} fill={INK} weight={700}>
          {t("substitute the whole formula of the inner function into every input slot — then simplify",
             "inner function ka poora formula outer ke har input slot mein daalo — phir simplify karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the two functions, plotted ═══════════ */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M 40 204 H 1044" stroke={MUTED} sw={1.1} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={44} y={228} size={13.5} fill={RED} weight={800} anchor="start">
          {t("②  the two functions, on ℝ", "②  dono functions, ℝ par")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={56} y={256} size={13} fill={AMBER_DARK} weight={800} anchor="start">f(x) = 3x + 1</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={56} y={282} size={13} fill={BLUE} weight={800} anchor="start">g(x) = x² − 2</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2)} d={arrowD(56, OY, 340, OY)} stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 2.4)} d={arrowD(OX, 380, OX, 240)} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={348} y={327} size={12} fill={INK} weight={800} anchor="start">x</T>
        <T x={192} y={248} size={12} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d={LINE_D} stroke={AMBER_DARK} sw={2.8} dur={1} />
      <Draw on={beat >= 2} delay={dl(2, 4.2)} d={PARA_D} stroke={BLUE} sw={2.8} dur={1.1} />
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <Circle cx={OX} cy={gy(1)} r={4} fill={AMBER_DARK} />
        <T x={188} y={300} size={11} fill={AMBER_DARK} weight={800} anchor="end">(0, 1)</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <Circle cx={OX} cy={gy(-2)} r={4} fill={BLUE} />
        <T x={212} y={356} size={11} fill={BLUE} weight={800} anchor="start">(0, −2)</T>
      </Fade>

      {/* ═══════════ beat 3 — f ∘ g ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={376} y={228} size={13.5} fill={RED} weight={800} anchor="start">
          {t("③  f ∘ g — feed g into f", "③  f ∘ g — g ko f mein daalo")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={376} y={256} size={15} fill={INK} weight={700} anchor="start">(f ∘ g)(x) = f( g(x) )</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={396} y={282} size={15} fill={INK} weight={700} anchor="start">= f( x² − 2 )</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <Rect x={431} y={268} width={56} height={21} rx={5} fill="none"
          stroke={AMBER} strokeWidth={1.8} strokeDasharray="5 4" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={396} y={308} size={15} fill={INK} weight={700} anchor="start">= 3( x² − 2 ) + 1</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        <T x={396} y={334} size={15} fill={INK} weight={700} anchor="start">= 3x² − 6 + 1</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.4)}>
        <T x={396} y={372} size={17} fill={GREEN_DARK} weight={900} anchor="start">= 3x² − 5</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 6.1)} d={ringD(440, 366, 66, 17)} stroke={GREEN_DARK} sw={2} dur={0.7} />

      {/* ═══════════ beat 4 — g ∘ f ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={724} y={228} size={13.5} fill={RED} weight={800} anchor="start">
          {t("④  g ∘ f — feed f into g", "④  g ∘ f — f ko g mein daalo")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={724} y={256} size={15} fill={INK} weight={700} anchor="start">(g ∘ f)(x) = g( f(x) )</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={744} y={282} size={15} fill={INK} weight={700} anchor="start">= g( 3x + 1 )</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <Rect x={779} y={268} width={56} height={21} rx={5} fill="none"
          stroke={AMBER} strokeWidth={1.8} strokeDasharray="5 4" />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={744} y={308} size={15} fill={INK} weight={700} anchor="start">= (3x + 1)² − 2</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.4)}>
        <T x={744} y={334} size={15} fill={INK} weight={700} anchor="start">= 9x² + 6x + 1 − 2</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.4)}>
        <T x={744} y={372} size={17} fill={GREEN_DARK} weight={900} anchor="start">= 9x² + 6x − 1</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 6.1)} d={ringD(806, 366, 78, 17)} stroke={GREEN_DARK} sw={2} dur={0.7} />

      {/* ═══════════ beat 5 — the numerical test at x = 2 ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 40 396 H 1044" stroke={MUTED} sw={1.1} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={44} y={420} size={13.5} fill={RED} weight={800} anchor="start">
          {t("⑤  test at x = 2", "⑤  x = 2 par test")}
        </T>
      </Fade>

      {/* chain 1 : 2 → g → 2 → f → 7 */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={44} y={459} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">(f ∘ g)(2)</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={140} y={459} size={16} fill={INK} weight={800}>2</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.7)} d={arrowD(152, 454, 180, 454)} stroke={INK} sw={2} dur={0.25} />
      <Draw on={beat >= 5} delay={dl(5, 1.9)} d={boxD(184, 436, 46, 36)} stroke={BLUE} sw={2.2} dur={0.4} fill={CREAM} />
      <Fade on={beat >= 5} delay={dl(5, 2.3)}>
        <T x={207} y={459} size={16} fill={BLUE} weight={800}>g</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.5)} d={arrowD(230, 454, 260, 454)} stroke={INK} sw={2} dur={0.25} />
      <Fade on={beat >= 5} delay={dl(5, 2.8)}>
        <T x={276} y={459} size={16} fill={INK} weight={800}>2</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.1)} d={arrowD(290, 454, 316, 454)} stroke={INK} sw={2} dur={0.25} />
      <Draw on={beat >= 5} delay={dl(5, 3.3)} d={boxD(320, 436, 46, 36)} stroke={AMBER_DARK} sw={2.2} dur={0.4} fill={CREAM} />
      <Fade on={beat >= 5} delay={dl(5, 3.7)}>
        <T x={343} y={459} size={16} fill={AMBER_DARK} weight={800}>f</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.9)} d={arrowD(366, 454, 396, 454)} stroke={INK} sw={2} dur={0.25} />
      <Fade on={beat >= 5} delay={dl(5, 4.3)}>
        <T x={416} y={461} size={20} fill={GREEN_DARK} weight={900}>7</T>
      </Fade>

      {/* chain 2 : 2 → f → 7 → g → 47 */}
      <Fade on={beat >= 5} delay={dl(5, 5.2)}>
        <T x={44} y={505} size={13.5} fill={BLUE} weight={800} anchor="start">(g ∘ f)(2)</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.6)}>
        <T x={140} y={505} size={16} fill={INK} weight={800}>2</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 5.9)} d={arrowD(152, 500, 180, 500)} stroke={INK} sw={2} dur={0.25} />
      <Draw on={beat >= 5} delay={dl(5, 6.1)} d={boxD(184, 482, 46, 36)} stroke={AMBER_DARK} sw={2.2} dur={0.4} fill={CREAM} />
      <Fade on={beat >= 5} delay={dl(5, 6.5)}>
        <T x={207} y={505} size={16} fill={AMBER_DARK} weight={800}>f</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 6.7)} d={arrowD(230, 500, 260, 500)} stroke={INK} sw={2} dur={0.25} />
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={276} y={505} size={16} fill={INK} weight={800}>7</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 7.3)} d={arrowD(290, 500, 316, 500)} stroke={INK} sw={2} dur={0.25} />
      <Draw on={beat >= 5} delay={dl(5, 7.5)} d={boxD(320, 482, 46, 36)} stroke={BLUE} sw={2.2} dur={0.4} fill={CREAM} />
      <Fade on={beat >= 5} delay={dl(5, 7.9)}>
        <T x={343} y={505} size={16} fill={BLUE} weight={800}>g</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 8.1)} d={arrowD(366, 500, 396, 500)} stroke={INK} sw={2} dur={0.25} />
      <Fade on={beat >= 5} delay={dl(5, 8.5)}>
        <T x={422} y={507} size={20} fill={GREEN_DARK} weight={900}>47</T>
      </Fade>

      {/* ═══════════ beat 6 — the verdict ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={760} y={448} size={28} fill={AMBER_DARK} weight={900} anchor="end">f ∘ g</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={842} y={458} size={34} fill={RED} weight={900}>≠</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={924} y={448} size={28} fill={BLUE} weight={900} anchor="start">g ∘ f</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.8)} d={ringD(842, 448, 170, 30)} stroke={RED} sw={2.2} dur={1} />
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={842} y={508} size={12.5} fill={INK} weight={700}>
          {t("3x² − 5   ≠   9x² + 6x − 1  —  order is never optional",
             "3x² − 5   ≠   9x² + 6x − 1  —  order kabhi optional nahin")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the handoff ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 40 526 H 1044" stroke={MUTED} sw={1.1} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={44} y={552} size={13.5} fill={RED} weight={800} anchor="start">
          {t("⑥  always confirm the handoff", "⑥  handoff hamesha confirm karo")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={44} y={578} size={12.5} fill={INK} weight={700} anchor="start">
          {t("the range of the inner function must lie inside the domain of the outer",
             "inner function ka range, outer function ke domain ke andar hona chahiye")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.4)}
        d={`M 680 564 A 120 30 0 1 1 920 564 A 120 30 0 1 1 680 564`}
        stroke={INK} sw={2} dur={1} />
      <Draw on={beat >= 7} delay={dl(7, 3.4)}
        d={`M 700 564 A 56 19 0 1 1 812 564 A 56 19 0 1 1 700 564`}
        stroke={GREEN_DARK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 4.3)}>
        <T x={756} y={568} size={11.5} fill={GREEN_DARK} weight={800}>
          {t("range of inner", "inner ka range")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.9)}>
        <T x={930} y={556} size={11.5} fill={INK} weight={700} anchor="start">
          {t("domain of the", "outer function")}
        </T>
        <T x={930} y={580} size={11.5} fill={INK} weight={700} anchor="start">
          {t("outer function", "ka domain")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.6)}>
        <T x={664} y={570} size={16} fill={GREEN_DARK} weight={900} anchor="end">range ⊆ domain</T>
      </Fade>
    </Scene>
  );
}

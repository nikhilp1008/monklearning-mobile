/**
 * M12Ch01 · Section 45 — "Periods and the exponential split"
 * Subtopic: Even, Odd, and Periodic Functions  (closing section of the subtopic)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Two worked examples, and both are genuinely drawn rather than narrated.
 *
 * LEFT — the fundamental period of sin 3x + cos 2x. Three stacked strips on a
 * shared horizontal scale of 190 px per π: the sum itself on top, then sin 3x
 * and cos 2x below it, each carrying a MEASURED period bracket (2π/3 and π)
 * struck on that same scale. The 2π bracket that lands on the sum is exactly
 * three of the first bracket and two of the second — you can lay them off by
 * eye, which is the whole content of the beat.
 *
 * RIGHT — the exponential split. One frame carries eˣ and e⁻ˣ, then cosh x
 * and sinh x are drawn onto it as the two halves. The closing beat stacks
 * them: at one abscissa a green bar of height cosh x sits on the axis and a
 * violet bar of height sinh x sits on top of it, and the top of the violet
 * bar lands on the eˣ curve. Every one of those endpoints is computed from
 * the frame's own qx()/qy() scale helpers.
 *
 * Grid:
 *   header        y  30.. 96   title, underline, subtitle, full-width rule
 *   divider       x 532        vertical rule, y 108..590
 *   left column   x  40..500   heading 118, f 146, strips at 200 / 324 / 448,
 *                              brackets 252 / 376 / 500, result 532, chip 548
 *   right column  x 560..1044  heading 118, aim 142, frame 146..384,
 *                              even row 426..456, odd row 486..516,
 *                              identity 568, closing note 590
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "two examples here"                    title + rule + the column headings
 *                                            and the vertical divider
 *  1  "take sin 3x + cos 2x"                 the sum plotted on the top strip
 *  2  "periods 2π/3 and π"                   both component strips + their
 *                                            measured brackets
 *  3  "test 2π — it is 3 of one, 2 of the    the 2π bracket struck across the sum,
 *      other"                                the arithmetic, the verdict chip
 *  4  "now split eˣ"                         axes + eˣ alone
 *  5  "even part = (eˣ + e⁻ˣ)/2 = cosh x"    e⁻ˣ (first spoken here), then cosh
 *                                            drawn onto the frame + fraction
 *  6  "odd part = (eˣ − e⁻ˣ)/2 = sinh x"     sinh drawn onto the frame + fraction
 *  7  "so eˣ = cosh x + sinh x"              the stacked bars proving it on the
 *                                            frame + the identity + the closing line
 *
 * Visual vocabulary (shared with Sections 43 and 44):
 *   AMBER_DARK  the given function / primary object   BLUE  the reflection e⁻ˣ
 *   GREEN_DARK  EVEN and every settled result         VIOLET  ODD
 *   RED         headings                              axes INK
 *   Brackets are drawn in the colour of the thing they measure. sin 3x is
 *   violet and cos 2x is green because sine is the odd one and cosine the
 *   even one — the same code the whole subtopic has been using.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";
const VIOLET = "#7C3AED";

/* ------------------------------------------------------------------ */
/* LEFT — one shared horizontal scale: 190 px per π, origin at x = 64  */
/* ------------------------------------------------------------------ */

const PXT = (t: number) => 64 + (190 * t) / Math.PI;
const TMAX = 2.15 * Math.PI;

function tPath(f: (t: number) => number, y0: number, amp: number, n = 190): string {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const t = (TMAX * i) / n;
    pts.push(`${PXT(t).toFixed(1)} ${(y0 - amp * f(t)).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}

const SUM_D = tPath((t) => Math.sin(3 * t) + Math.cos(2 * t), 200, 19);
const SIN3_D = tPath((t) => Math.sin(3 * t), 324, 26);
const COS2_D = tPath((t) => Math.cos(2 * t), 448, 26);

/** measured bracket: two end ticks joined by a rule */
const brk = (x1: number, x2: number, y: number) =>
  `M ${x1} ${y - 6} V ${y + 6} M ${x2} ${y - 6} V ${y + 6} M ${x1} ${y} H ${x2}`;

const BRK_SUM = brk(PXT(0), PXT(2 * Math.PI), 252);
const BRK_SIN = brk(PXT(0), PXT((2 * Math.PI) / 3), 376);
const BRK_COS = brk(PXT(0), PXT(Math.PI), 500);

/* ------------------------------------------------------------------ */
/* RIGHT — the exponential frame                                       */
/* ------------------------------------------------------------------ */

const QX0 = 802, QY0 = 300;
const qx = (x: number) => QX0 + 48 * x;
const qy = (y: number) => QY0 - 20 * y;

function sampleD(f: (x: number) => number, x0: number, x1: number, n = 96): string {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    pts.push(`${qx(x).toFixed(1)} ${qy(f(x)).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}

const EXP_D = sampleD((x) => Math.exp(x), -2, 2);
const NEXP_D = sampleD((x) => Math.exp(-x), -2, 2);
const COSH_D = sampleD((x) => Math.cosh(x), -2, 2);
const SINH_D = sampleD((x) => Math.sinh(x), -2, 2);

/** the abscissa where beat 7 stacks the two halves back into eˣ */
const XS = 1.4;
const SX = qx(XS);
const SY_AXIS = qy(0);
const SY_COSH = qy(Math.cosh(XS));
const SY_EXP = qy(Math.exp(XS));

export default function M12Ch01Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — two examples ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Two workouts — a period, and a split",
             "Do workouts — ek period, ek split")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 336 62 C 470 58, 640 66, 748 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("a fundamental period of a sum, then the exponential's symmetric halves",
             "ek sum ka fundamental period, phir exponential ke symmetric halves")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.4)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={0.9} />
      <Draw on={beat >= 0} delay={dl(0, 3)} d="M 532 108 V 590" stroke={MUTED} sw={1.2} dur={1} />
      <Fade on={beat >= 0} delay={dl(0, 3.4)}>
        <T x={40} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 1 — the fundamental period of a sum",
             "EXAMPLE 1 — sum ka fundamental period")}
        </T>
        <T x={560} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 2 — splitting the exponential",
             "EXAMPLE 2 — exponential ko split karna")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — the sum itself ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={40} y={146} size={14} fill={AMBER_DARK} weight={900} anchor="start">
          f(x) = sin 3x + cos 2x
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={arrowD(52, 200, 500, 200)} stroke={INK} sw={1.6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={SUM_D} stroke={AMBER_DARK} sw={2.8} dur={1.5} />

      {/* ═══════════ beat 2 — the two component periods ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={40} y={286} size={13.5} fill={VIOLET} weight={900} anchor="start">sin 3x</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={arrowD(52, 324, 500, 324)} stroke={INK} sw={1.6} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1)} d={SIN3_D} stroke={VIOLET} sw={2.6} dur={1.3} />
      <Draw on={beat >= 2} delay={dl(2, 2.4)} d={BRK_SIN} stroke={VIOLET} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={202} y={381} size={12.5} fill={VIOLET} weight={900} anchor="start">period 2π/3</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={40} y={410} size={13.5} fill={GREEN_DARK} weight={900} anchor="start">cos 2x</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.9)} d={arrowD(52, 448, 500, 448)} stroke={INK} sw={1.6} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 4.3)} d={COS2_D} stroke={GREEN_DARK} sw={2.6} dur={1.3} />
      <Draw on={beat >= 2} delay={dl(2, 5.7)} d={BRK_COS} stroke={GREEN_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 6.2)}>
        <T x={266} y={505} size={12.5} fill={GREEN_DARK} weight={900} anchor="start">period π</T>
      </Fade>

      {/* ═══════════ beat 3 — test 2π ═══════════ */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={BRK_SUM} stroke={GREEN_DARK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={456} y={257} size={13} fill={GREEN_DARK} weight={900} anchor="start">2π</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={40} y={532} size={13} fill={INK} weight={800} anchor="start">
          2π  =  3 × (2π/3)  =  2 × π
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <Chip x={40} y={548} w={250} h={36} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={17} script={false}>
          {t("fundamental period = 2π", "fundamental period = 2π")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <T x={302} y={558} size={12} fill={MUTED} weight={700} anchor="start">
          {t("nothing smaller works", "isse chhota kuch nahi chalta")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={302} y={578} size={12} fill={MUTED} weight={700} anchor="start">
          {t("so this one is fundamental", "isliye yahi fundamental hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — eˣ and its reflection ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={560} y={142} size={12} fill={MUTED} weight={700} anchor="start">
          {t("split eˣ into an even + an odd part",
             "eˣ ko even + odd part mein split karo")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={arrowD(694, QY0, 916, QY0)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 0.85)} d={arrowD(QX0, 384, QX0, 146)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 1.3)} d={EXP_D} stroke={AMBER_DARK} sw={2.8} dur={1.1} />
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={908} y={168} size={13} fill={AMBER_DARK} weight={900} anchor="start">eˣ</T>
      </Fade>

      {/* ═══════════ beat 5 — the even half ═══════════ */}
      {/* e⁻ˣ arrives here: segment 5 is the first to speak "e to the minus x" */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={NEXP_D} stroke={BLUE} sw={2.4} dur={1.1} />
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={696} y={168} size={13} fill={BLUE} weight={900} anchor="end">e⁻ˣ</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.8)} d={COSH_D} stroke={GREEN_DARK} sw={3} dur={1.2} />
      <Fade on={beat >= 5} delay={dl(5, 3.1)}>
        <T x={908} y={222} size={12.5} fill={GREEN_DARK} weight={900} anchor="start">cosh x</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <T x={560} y={440} size={13.5} fill={GREEN_DARK} weight={900} anchor="start">even part  =</T>
        <T x={700} y={426} size={14} fill={GREEN_DARK} weight={800}>eˣ + e⁻ˣ</T>
        <T x={700} y={456} size={14} fill={GREEN_DARK} weight={800}>2</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4.2)} d="M 664 436 H 736" stroke={GREEN_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 4.8)}>
        <T x={760} y={440} size={16} fill={GREEN_DARK} weight={900} anchor="start">=  cosh x</T>
      </Fade>

      {/* ═══════════ beat 6 — the odd half ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={SINH_D} stroke={VIOLET} sw={3} dur={1.2} />
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={696} y={376} size={12.5} fill={VIOLET} weight={900} anchor="end">sinh x</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={560} y={500} size={13.5} fill={VIOLET} weight={900} anchor="start">odd part  =</T>
        <T x={700} y={486} size={14} fill={VIOLET} weight={800}>eˣ − e⁻ˣ</T>
        <T x={700} y={516} size={14} fill={VIOLET} weight={800}>2</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.6)} d="M 664 496 H 736" stroke={VIOLET} sw={1.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <T x={760} y={500} size={16} fill={VIOLET} weight={900} anchor="start">=  sinh x</T>
      </Fade>

      {/* ═══════════ beat 7 — stack them back into eˣ ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)}
        d={`M ${SX.toFixed(1)} ${SY_AXIS.toFixed(1)} V ${SY_COSH.toFixed(1)}`}
        stroke={GREEN_DARK} sw={6.5} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 0.9)}
        d={`M ${SX.toFixed(1)} ${SY_COSH.toFixed(1)} V ${SY_EXP.toFixed(1)}`}
        stroke={VIOLET} sw={6.5} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <Circle cx={SX} cy={SY_EXP} r={4.2} fill={AMBER_DARK} />
        <Circle cx={SX} cy={SY_COSH} r={3.4} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.6} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.1)} d="M 560 538 H 1044" stroke={MUTED} sw={1.2} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={560} y={568} size={20} fill={AMBER_DARK} weight={900} anchor="start">eˣ  =</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.6)}>
        <T x={626} y={568} size={20} fill={GREEN_DARK} weight={900} anchor="start">cosh x</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={700} y={568} size={20} fill={INK} weight={900} anchor="start">+</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.4)}>
        <T x={724} y={568} size={20} fill={VIOLET} weight={900} anchor="start">sinh x</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.2)}>
        <T x={560} y={590} size={12} fill={MUTED} weight={700} anchor="start">
          {t("the canonical even and odd halves of eˣ — JEE Advanced probes this",
             "eˣ ke canonical even aur odd halves — JEE Advanced ise probe karta hai")}
        </T>
      </Fade>
    </Scene>
  );
}

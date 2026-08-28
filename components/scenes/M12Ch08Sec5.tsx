/**
 * M12Ch08 · Section 5 — "A clean area above the axis"
 * Subtopic: Area under Simple Curves
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The worked example the whole subtopic is built on: the area bounded by
 * y = x² + 2, the x-axis and the lines x = 0 and x = 2. The board is one
 * real graph on the left (drawn once at beat 0 and then annotated beat by
 * beat) and the running calculation down the right column, so the picture
 * and the algebra advance together instead of the picture standing still.
 *
 * Shared visual vocabulary with Sections 4 and 6:
 *   axes            INK, drawn with arrowD (head on +x and +y)
 *   the curve       BLUE  #0284c7
 *   area ABOVE      AMBER fill @ 0.22, strips + boundary in AMBER_DARK
 *   the answer      GREEN / GREEN_DARK
 *   limits          tick marks on the axis + the value, never a floating label
 *
 * Beat map (7 segments, gates 0..6 — every beat used):
 *  0  "area bounded by y = x²+2, the x-axis,   axes, ticks, the parabola, the
 *      and the lines x = 0 and x = 2"          two boundary lines x = 0 and
 *                                              x = 2, the curve label
 *  1  "safety check — x²+2 is always positive" the lowest point (0, 2) dotted,
 *                                              the [0,2] stretch of the axis
 *                                              highlighted green, the check
 *                                              written out on the right
 *  2  "so the area is ∫₀² (x²+2) dx"           the region shaded + ten strips
 *                                              of height y and width dx
 *  3  "antidifferentiate term by term"         = [ x³/3 + 2x ]₀²
 *  4  "evaluate at the limits"                 x = 2 and x = 0 ringed on the
 *                                              axis; 8/3 + 4; (8 + 12)/3
 *  5  "that gives twenty over three"           20/3 written beside the region
 *                                              and boxed as the answer
 *  6  "the takeaway"                           divider + the rule
 */

import React from "react";
import { Circle, Path, TSpan } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---------- the graph: y = x² + 2 on the board ---------- */

const OX = 170;   // screen x of x = 0
const OY = 496;   // screen y of y = 0
const SX = 150;   // px per unit x
const SY = 55;    // px per unit y

const px = (x: number) => OX + SX * x;
const py = (y: number) => OY - SY * y;
const f = (x: number) => x * x + 2;

const poly = (pts: [number, number][]) =>
  pts.map(([x, y], i) => `${i ? "L" : "M"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");

/** the curve, sampled in maths coordinates and mapped to the board */
const curveD = (x0: number, x1: number, n = 40) =>
  poly(
    Array.from({ length: n + 1 }, (_, i) => {
      const x = x0 + ((x1 - x0) * i) / n;
      return [px(x), py(f(x))] as [number, number];
    })
  );

/** the region under the curve between x0 and x1, down to the x-axis */
const regionD = (x0: number, x1: number) =>
  `${curveD(x0, x1)} L ${px(x1).toFixed(1)} ${OY} L ${px(x0).toFixed(1)} ${OY} Z`;

/** [ … ]  with a lower and an upper evaluation limit */
function Ev({ lo, hi, size }: { lo: string; hi: string; size: number }) {
  return (
    <>
      <TSpan fontSize={size * 0.6} dy={size * 0.32}>{lo}</TSpan>
      <TSpan fontSize={size * 0.6} dy={-size * 0.9}>{hi}</TSpan>
    </>
  );
}

/** ∫ with a lower and an upper limit, then the integrand */
function Lim({
  lo, hi, size, children,
}: {
  lo: string; hi: string; size: number; children: string | number | (string | number)[];
}) {
  return (
    <>
      <TSpan fontSize={size * 1.3}>∫</TSpan>
      <TSpan fontSize={size * 0.6} dy={size * 0.34}>{lo}</TSpan>
      <TSpan fontSize={size * 0.6} dy={-size * 0.92}>{hi}</TSpan>
      <TSpan fontSize={size} dy={size * 0.58}>{children}</TSpan>
    </>
  );
}

export default function M12Ch08Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  /* ten strips of width dx across [0, 2] */
  const strips = Array.from({ length: 10 }, (_, k) => 0.1 + k * 0.2);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the problem and the picture ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("A clean area above the axis", "Ek clean area, axis ke upar")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 348 62 C 470 58, 618 66, 732 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        <T x={540} y={84} size={13} fill={MUTED} script>
          {t("bounded by y = x² + 2, the x-axis, and the lines x = 0 and x = 2",
             "y = x² + 2, x-axis, aur lines x = 0 aur x = 2 se bounded")}
        </T>
      </Fade>

      {/* axes */}
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d={arrowD(110, OY, 556, OY)} stroke={INK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 0} delay={dl(0, 3.1)} d={arrowD(OX, 540, OX, 108)} stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 3.5)}>
        <T x={566} y={501} size={14} fill={INK} anchor="start">x</T>
        <T x={158} y={114} size={14} fill={INK} anchor="end">y</T>
        <T x={158} y={516} size={12.5} fill={MUTED} anchor="end">O</T>
      </Fade>
      {/* ticks on both axes */}
      <Draw on={beat >= 0} delay={dl(0, 3.7)}
        d={`M ${px(1)} ${OY - 6} L ${px(1)} ${OY + 6} M ${px(2)} ${OY - 6} L ${px(2)} ${OY + 6}`}
        stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 0} delay={dl(0, 3.9)}
        d={`M ${OX - 6} ${py(2)} L ${OX + 6} ${py(2)} M ${OX - 6} ${py(4)} L ${OX + 6} ${py(4)} M ${OX - 6} ${py(6)} L ${OX + 6} ${py(6)}`}
        stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 4.2)}>
        <T x={px(1)} y={518} size={12.5} fill={MUTED}>1</T>
        <T x={px(2)} y={518} size={12.5} fill={MUTED}>2</T>
        <T x={154} y={py(2) + 5} size={12.5} fill={MUTED} anchor="end">2</T>
        <T x={154} y={py(4) + 5} size={12.5} fill={MUTED} anchor="end">4</T>
        <T x={154} y={py(6) + 5} size={12.5} fill={MUTED} anchor="end">6</T>
      </Fade>
      {/* the parabola */}
      <Draw on={beat >= 0} delay={dl(0, 4.5)} d={curveD(-0.3, 2.2)} stroke={BLUE} sw={3} dur={1.4} />
      <Fade on={beat >= 0} delay={dl(0, 5.8)}>
        <T x={508} y={150} size={16} fill={BLUE} weight={800} anchor="start">y = x² + 2</T>
      </Fade>
      {/* the two vertical boundary lines */}
      <Draw on={beat >= 0} delay={dl(0, 6.3)} d={`M ${OX} ${OY} L ${OX} ${py(2)}`} stroke={AMBER_DARK} sw={3.4} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 6.7)} d={`M ${px(2)} ${OY} L ${px(2)} ${py(6)}`} stroke={AMBER_DARK} sw={3.4} dur={0.5} />
      <Fade on={beat >= 0} delay={dl(0, 7.1)}>
        <T x={132} y={442} size={13.5} fill={AMBER_DARK} weight={800} anchor="end">x = 0</T>
        <T x={484} y={196} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">x = 2</T>
      </Fade>

      {/* ═══════════ beat 1 — the safety check ═══════════ */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={`M ${OX} ${OY} L ${px(2)} ${OY}`} stroke={GREEN} sw={5} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Circle cx={OX} cy={py(2)} r={5.5} fill={GREEN_DARK} />
        {/* the label sits in the empty pocket above the parabola; the curve at
            screen x 196..306 runs at y 384 → 341, well below the glyph band. */}
        <T x={196} y={305} size={12.5} fill={GREEN_DARK} script anchor="start">
          {t("lowest value on the", "curve ki lowest")}
        </T>
        <T x={196} y={326} size={12.5} fill={GREEN_DARK} script anchor="start">
          {t("curve is 2", "value 2 hai")}
        </T>
      </Fade>
      {/* leader from the label down to the dotted lowest point (0, 2) */}
      <Draw on={beat >= 1} delay={dl(1, 1.6)}
        d={`M 200 334 L ${(OX + 3.3).toFixed(1)} ${(py(2) - 5.6).toFixed(1)}`}
        stroke={GREEN_DARK} sw={1.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={596} y={118} size={14} fill={GREEN_DARK} weight={800} anchor="start">
          {t("SAFETY CHECK", "SAFETY CHECK")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={596} y={144} size={13.5} fill={INK} anchor="start">
          {t("x² + 2 is positive for every x,", "har x ke liye x² + 2 positive hai,")}
        </T>
        <T x={596} y={166} size={13.5} fill={INK} anchor="start">
          {t("so the curve lies entirely above the x-axis.", "to curve poori tarah x-axis ke upar hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <T x={596} y={190} size={12.5} fill={MUTED} script anchor="start">
          {t("no sign worries — integrate straight through",
             "koi sign worries nahin — seedhe integrate karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the region and its strips ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Path d={regionD(0, 2)} fill={AMBER} opacity={0.24} />
      </Fade>
      {strips.map((x, i) => (
        <Draw key={`st${i}`} on={beat >= 2} delay={dl(2, 0.6 + i * 0.09)}
          d={`M ${px(x).toFixed(1)} ${py(f(x)).toFixed(1)} L ${px(x).toFixed(1)} ${OY}`}
          stroke={AMBER_DARK} sw={1.6} dur={0.35} />
      ))}
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={320} y={548} size={12.5} fill={AMBER_DARK} script>
          {t("strips of height y = x² + 2 and width dx, swept from 0 to 2",
             "height y = x² + 2 aur width dx ki strips, 0 se 2 tak")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={596} y={240} size={21} fill={INK} weight={800} anchor="start">
          {"Area = "}<Lim lo="0" hi="2" size={21}>{" (x² + 2) dx"}</Lim>
        </T>
      </Fade>

      {/* ═══════════ beat 3 — antidifferentiate term by term ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={620} y={292} size={21} fill={INK} weight={800} anchor="start">
          {"= [  x³/3  +  2x  ]"}<Ev lo="0" hi="2" size={21} />
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={620} y={316} size={12.5} fill={MUTED} script anchor="start">
          {t("x² → x³/3   ·   2 → 2x", "x² → x³/3   ·   2 → 2x")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — evaluate at the limits ═══════════ */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={ringD(px(2), 516, 22, 15)} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Circle cx={px(2)} cy={OY} r={5.5} fill={AMBER_DARK} />
        <Circle cx={OX} cy={OY} r={5.5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={620} y={362} size={18} fill={INK} weight={800} anchor="start">
          {t("at x = 2 :   8/3 + 4", "x = 2 par :   8/3 + 4")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={620} y={392} size={18} fill={MUTED} weight={800} anchor="start">
          {t("at x = 0 :   everything vanishes", "x = 0 par :   sab kuch gayab")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.4)}>
        <T x={620} y={428} size={21} fill={INK} weight={800} anchor="start">= (8 + 12) / 3</T>
      </Fade>

      {/* ═══════════ beat 5 — the answer ═══════════ */}
      {/* the answer sits just OUTSIDE the right boundary x = 2: every point
          inside the region is crossed by a strip (they are 30px apart, the
          glyphs are 64px wide), so the only clean spot is this pocket
          between the boundary line at px(2) = 470 and the x-axis arrow. */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={512} y={430} size={30} fill={GREEN_DARK} weight={900}>20/3</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Chip x={596} y={452} w={330} h={46} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={20} script={false}>
          {t("Area = 20/3 square units", "Area = 20/3 square units")}
        </Chip>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.9)} d={ringD(761, 475, 178, 30)} stroke={GREEN} sw={2.2} dur={0.9} />

      {/* ═══════════ beat 6 — the takeaway ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 596 524 H 1040" stroke={MUTED} sw={1.3} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={596} y={550} size={13.5} fill={RED} weight={800} anchor="start">
          {t("TAKEAWAY — f positive across the whole interval?",
             "TAKEAWAY — poore interval par f positive hai?")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={596} y={574} size={13} fill={INK} anchor="start">
          {t("Then no absolute value and no splitting — just integrate directly.",
             "To koi absolute value nahin, koi splitting nahin — seedhe integrate.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.4)}>
        <T x={320} y={572} size={12.5} fill={GREEN_DARK} script>
          {t("the region never crosses the axis, so the signed integral IS the area",
             "region axis ko cross hi nahin karta, to signed integral hi area hai")}
        </T>
      </Fade>
    </Scene>
  );
}

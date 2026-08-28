/**
 * M12Ch08 · Section 13 — "Line above a parabola"
 * Subtopic: Area between Two Curves
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The board is one real graph (left, x 70..560) plus the four-step worked
 * column (right, x 576..1040) and a rhythm band across the very bottom.
 *
 * Shared vocabulary for sections 13–15 of this subtopic:
 *   · axes in INK with arrowheads, origin O labelled below-left
 *   · the CURVE (parabola / cubic) is BLUE, the LINE is RED
 *   · the region between them is a single GREEN path at low opacity
 *   · strips are thin AMBER rectangles with an AMBER_DARK hairline
 *   · limits / results land in GREEN_DARK, traps and warnings in RED
 *
 * Plot frame: X(x) = 140 + 250x , Y(y) = 460 − 250y
 *   O = (140,460) · (1,1) = (390,210) · x = ½ at px 265
 *
 * Beat map (7 segments, gates 0..6 — every beat used):
 *  0  "the cleanest pairing — y = x and y = x²"
 *       title + underline + subtitle, both axes, the parabola (BLUE) and
 *       the line (RED) plotted with their equations
 *  1  "a small lens-shaped region trapped near the origin"
 *       the shaded lens between the two curves + the caption under the plot
 *  2  "intersect: x = x² ⇒ x(x−1) = 0 ⇒ x = 0, 1"
 *       ① column, dots + rings on the two crossings, dashed x = 1 and y = 1
 *       guides, the tick "1" on both axes, ring round the limits
 *  3  "at x = ½ the line gives 0.5, the parabola 0.25 — line on top"
 *       ③ column, dashed ordinate at x = ½, the two sample dots with their
 *       values, the gap arrow between them
 *  4  "∫₀¹ (x − x²) dx, antiderivative x²/2 − x³/3"
 *       ④ column with the integral and the antiderivative, nine strips
 *       filling the lens, the strip-height label x − x²
 *  5  "½ − ⅓ = 1/6"
 *       the evaluation line, the A = 1/6 chip beside the lens and its
 *       leader arrow into the shaded region
 *  6  "Intersect · Sketch · Sample · Integrate"
 *       the four-chip rhythm band across the bottom with its closing line
 */

import React from "react";
import { Circle, Path, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  ringD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---------- tiny path builders (local; kit stays untouched) ---------- */

const poly = (pts: [number, number][]) =>
  pts
    .map(([x, y], i) => `${i ? "L" : "M"} ${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ");

const sample = (
  a: number,
  b: number,
  n: number,
  P: (t: number) => [number, number]
): [number, number][] => {
  const out: [number, number][] = [];
  for (let i = 0; i <= n; i++) out.push(P(a + ((b - a) * i) / n));
  return out;
};

const curveD = (
  a: number,
  b: number,
  n: number,
  P: (t: number) => [number, number]
) => poly(sample(a, b, n, P));

/** closed ribbon between a TOP(t) and a BOT(t) parametrisation */
const bandD = (
  a: number,
  b: number,
  n: number,
  TOP: (t: number) => [number, number],
  BOT: (t: number) => [number, number]
) => poly([...sample(a, b, n, TOP), ...sample(a, b, n, BOT).reverse()]) + " Z";

/* ---------- the plot frame ---------- */

const X = (x: number) => 140 + 250 * x;
const Y = (y: number) => 460 - 250 * y;

const PARA = curveD(-0.12, 1.15, 72, (t) => [X(t), Y(t * t)]);
const LINE = curveD(-0.15, 1.3, 2, (t) => [X(t), Y(t)]);
const LENS = bandD(
  0,
  1,
  72,
  (t) => [X(t), Y(t)],
  (t) => [X(t), Y(t * t)]
);

const STRIP_XS = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

const RHYTHM: [number, string, string][] = [
  [60, "① INTERSECT", "① INTERSECT"],
  [306, "② SKETCH", "② SKETCH"],
  [552, "③ SAMPLE", "③ SAMPLE"],
  [798, "④ INTEGRATE", "④ INTEGRATE"],
];

export default function M12Ch08Sec13({
  currentTime,
  reveals,
  language,
}: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — title, axes, both curves ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={44} size={24} fill={RED} script>
          {t("Line above a parabola", "Line, parabola ke upar")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.1)}
        d="M 402 60 C 470 56, 610 64, 682 58"
        stroke={RED}
        sw={2.1}
        dur={0.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 1.7)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "the cleanest between-curves pairing:  y = x  and  y = x²",
            "sabse clean between-curves pairing:  y = x  aur  y = x²"
          )}
        </T>
      </Fade>

      {/* axes */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.2)}
        d={arrowD(72, 460, 502, 460)}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.6)}
        d={arrowD(140, 532, 140, 132)}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.1)}>
        <T x={510} y={466} size={15} fill={INK} anchor="start" weight={800}>
          x
        </T>
        <T x={132} y={128} size={15} fill={INK} anchor="end" weight={800}>
          y
        </T>
        <T x={122} y={494} size={14} fill={MUTED} anchor="end" weight={700}>
          O
        </T>
      </Fade>

      {/* the parabola (BLUE) and the line (RED) */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 3.4)}
        d={PARA}
        stroke={BLUE}
        sw={3}
        dur={1.1}
      />
      <Fade on={beat >= 0} delay={dl(0, 4.5)}>
        <T x={400} y={300} size={17} fill={BLUE} anchor="start" weight={800}>
          y = x²
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 4.9)}
        d={LINE}
        stroke={RED}
        sw={3}
        dur={0.9}
      />
      <Fade on={beat >= 0} delay={dl(0, 5.8)}>
        <T x={250} y={296} size={17} fill={RED} anchor="end" weight={800}>
          y = x
        </T>
      </Fade>

      {/* ═══════════ beat 1 — the lens ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Path d={LENS} fill={GREEN} opacity={0.18} stroke="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={288} y={512} size={14} fill={GREEN_DARK} script>
          {t(
            "a small lens-shaped region trapped between the two curves, near the origin",
            "origin ke paas dono curves ke beech phansa ek chhota lens-shaped region"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — intersect for the limits ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={576} y={114} size={15} fill={RED} anchor="start" weight={800}>
          {t("① INTERSECT — find the limits", "① INTERSECT — limits nikalo")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={586} y={152} size={24} fill={INK} anchor="start">
          x = x²
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={586} y={190} size={24} fill={INK} anchor="start">
          x ( x − 1 ) = 0
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <T x={586} y={228} size={24} fill={GREEN_DARK} anchor="start">
          x = 0 &nbsp;and&nbsp; x = 1
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 5.4)}
        d={ringD(716, 220, 142, 24)}
        stroke={GREEN_DARK}
        sw={2}
        dur={0.8}
      />

      {/* the two crossings on the graph */}
      <Fade on={beat >= 2} delay={dl(2, 5.9)}>
        <Circle cx={140} cy={460} r={6} fill={GREEN_DARK} />
        <Circle cx={390} cy={210} r={6} fill={GREEN_DARK} />
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 6.3)}
        d={ringD(140, 460, 20, 17)}
        stroke={GREEN_DARK}
        sw={1.9}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 6.6)}
        d={ringD(390, 210, 20, 17)}
        stroke={GREEN_DARK}
        sw={1.9}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 7.1)}>
        <Path
          d="M 390 460 L 390 210"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.5}
          strokeDasharray="6 6"
        />
        <Path
          d="M 140 210 L 390 210"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.5}
          strokeDasharray="6 6"
        />
        <T x={390} y={484} size={14} fill={INK_LIGHT} weight={700}>
          1
        </T>
        <T x={128} y={216} size={14} fill={INK_LIGHT} anchor="end" weight={700}>
          1
        </T>
      </Fade>

      {/* ═══════════ beat 3 — sample a point ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={576} y={268} size={15} fill={RED} anchor="start" weight={800}>
          {t(
            "③ SAMPLE a point — who is on top?",
            "③ SAMPLE ek point — upar kaun hai?"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={586} y={302} size={19} fill={INK} anchor="start">
          {t(
            "at x = ½ :   line → 0.5    parabola → 0.25",
            "x = ½ par :   line → 0.5    parabola → 0.25"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        <T x={586} y={332} size={19} fill={RED} anchor="start">
          0.5 &gt; 0.25 &nbsp;⇒&nbsp; {t("y = x is on TOP", "y = x hi TOP par hai")}
        </T>
      </Fade>

      {/* the sample ordinate on the graph */}
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <Path
          d="M 265 460 L 265 335"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.5}
          strokeDasharray="6 6"
        />
        <T x={265} y={484} size={14} fill={INK_LIGHT} weight={700}>
          ½
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <Circle cx={265} cy={335} r={6.5} fill={RED} />
        <T x={256} y={328} size={15} fill={RED} anchor="end" weight={800}>
          0.5
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <Circle cx={265} cy={398} r={6.5} fill={BLUE} />
        <T x={278} y={421} size={15} fill={BLUE} anchor="start" weight={800}>
          0.25
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 4)}
        d={arrowD(274, 341, 274, 392)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />

      {/* ═══════════ beat 4 — the integral and the strips ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={576} y={372} size={15} fill={RED} anchor="start" weight={800}>
          {t(
            "④ INTEGRATE — top minus bottom",
            "④ INTEGRATE — top minus bottom"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <T x={586} y={408} size={23} fill={INK} anchor="start">
          A = ∫₀¹ ( x − x² ) dx
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={586} y={444} size={23} fill={INK} anchor="start">
          = [ x²⁄2 − x³⁄3 ]₀¹
        </T>
      </Fade>

      {STRIP_XS.map((xi, i) => (
        <Fade key={`st${xi}`} on={beat >= 4} delay={dl(4, 1 + i * 0.14)}>
          <Rect
            x={X(xi) - 3}
            y={Y(xi)}
            width={6}
            height={Y(xi * xi) - Y(xi)}
            fill={AMBER}
            opacity={0.6}
            stroke={AMBER_DARK}
            strokeWidth={0.8}
          />
        </Fade>
      ))}
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.6)}
        d={arrowD(450, 254, 348, 276)}
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={456} y={250} size={16} fill={AMBER_DARK} anchor="start" weight={800}>
          x − x²
        </T>
      </Fade>

      {/* ═══════════ beat 5 — evaluate ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={586} y={478} size={23} fill={INK} anchor="start">
          = ½ − ⅓
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <Chip
          x={720}
          y={456}
          w={150}
          h={40}
          fill={CREAM}
          stroke={GREEN_DARK}
          textFill={GREEN_DARK}
          size={23}
          script={false}
        >
          = 1⁄6
        </Chip>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.6)}
        d={arrowD(392, 400, 322, 314)}
        stroke={GREEN_DARK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <Chip
          x={396}
          y={386}
          w={160}
          h={38}
          fill={CREAM}
          stroke={GREEN_DARK}
          textFill={GREEN_DARK}
          size={19}
          script={false}
        >
          A = 1⁄6
        </Chip>
      </Fade>

      {/* ═══════════ beat 6 — the rhythm band ═══════════ */}
      {RHYTHM.map(([cx, e, h], i) => (
        <Fade key={`rh${cx}`} on={beat >= 6} delay={dl(6, 0.3 + i * 0.7)}>
          <Chip
            x={cx}
            y={526}
            w={200}
            h={40}
            fill={CREAM}
            stroke={AMBER_DARK}
            textFill={AMBER_DARK}
            size={19}
          >
            {t(e, h)}
          </Chip>
        </Fade>
      ))}
      {[268, 514, 760].map((x, i) => (
        <Draw
          key={`ar${x}`}
          on={beat >= 6}
          delay={dl(6, 0.9 + i * 0.7)}
          d={arrowD(x, 546, x + 32, 546)}
          stroke={AMBER_DARK}
          sw={2}
          dur={0.3}
        />
      ))}
      <Fade on={beat >= 6} delay={dl(6, 3.6)}>
        <T x={540} y={589} size={13} fill={RED} script>
          {t(
            "do those four beats in order and the sign errors simply cannot happen",
            "in chaar beats ko order mein karo aur sign errors ho hi nahi sakte"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

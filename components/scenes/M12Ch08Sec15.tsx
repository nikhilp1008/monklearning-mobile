/**
 * M12Ch08 · Section 15 — "Choosing dy for a sideways parabola"
 * Subtopic: Area between Two Curves
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Third scene of the subtopic, same vocabulary as Sections 13 and 14:
 * axes in INK with arrowheads, the PARABOLA in BLUE, the LINE in RED, the
 * region as one GREEN path at low opacity, strips as thin AMBER
 * rectangles (here HORIZONTAL, because we integrate in y), limits and the
 * answer in GREEN_DARK, the warning in RED. Graph left, worked column
 * right, closing band across the bottom.
 *
 * Plot frame: X(x) = 140 + 50x , Y(y) = 370 − 40y
 *   O = (140,370) · y = 4 at py 210 · y = −2 at py 450
 *   crossings (x,y) = (4,4) → (340,210) and (1,−2) → (190,450)
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "bounded by y² = 4x and y = 2x − 4"
 *       title + underline + subtitle, axes, the sideways parabola (BLUE)
 *       and the line (RED) plotted with their equations
 *  1  "the parabola opens sideways, so horizontal strips, right − left"
 *       the shaded region + six horizontal strips + the dy / right−left
 *       annotation and the strategy caption
 *  2  "write both as functions of y"
 *       ① column: x = y²/4 and x = (y+4)/2
 *  3  "y² − 2y − 8 = 0 factors to y = −2 and y = 4"
 *       ② column, the two crossing dots + rings, dashed ordinate guides
 *       back to the y-axis and the y-limit ticks
 *  4  "at y = 0 the line gives x = 2, the parabola x = 0"
 *       ③ column, the highlighted y = 0 sample strip with both endpoint
 *       dots and their x-values
 *  5  "∫₋₂⁴ (line − parabola) dy; line part 15, parabola part 6"
 *       ④ column with the integral and the two pieces
 *  6  "15 − 6 = 9, so the area is nine square units"
 *       the 15 − 6 = 9 chip with its ring, and A = 9 written inside the
 *       shaded region
 *  7  "vertical strips would have forced a two-part integral"
 *       two RED dashed vertical strips on the graph (one between the two
 *       parabola branches, one between line and parabola), the ✗ note,
 *       and the closing band
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

/* ---------- tiny path builders ---------- */

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

/** closed ribbon between a RIGHT(t) and a LEFT(t) parametrisation in y */
const bandD = (
  a: number,
  b: number,
  n: number,
  R: (t: number) => [number, number],
  L: (t: number) => [number, number]
) => poly([...sample(a, b, n, R), ...sample(a, b, n, L).reverse()]) + " Z";

/* ---------- the plot frame ---------- */

const X = (x: number) => 140 + 50 * x;
const Y = (y: number) => 370 - 40 * y;

/** parabola  x = y²/4 , parametrised by y */
const px = (y: number) => (y * y) / 4;
/** line  x = (y + 4)/2 , parametrised by y */
const lx = (y: number) => (y + 4) / 2;

const PARA = curveD(-4, 4.9, 80, (y) => [X(px(y)), Y(y)]);
const LINE = curveD(-3.8, 5, 2, (y) => [X(lx(y)), Y(y)]);
const REGION = bandD(
  -2,
  4,
  72,
  (y) => [X(lx(y)), Y(y)],
  (y) => [X(px(y)), Y(y)]
);

const STRIP_YS = [-1.5, -0.5, 0.5, 1.5, 2.5, 3.5];

export default function M12Ch08Sec15({
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
          {t(
            "Choosing dy for a sideways parabola",
            "Sideways parabola ke liye dy chunna"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.1)}
        d="M 340 60 C 430 56, 640 64, 742 58"
        stroke={RED}
        sw={2.1}
        dur={0.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 1.7)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "the area bounded by the parabola  y² = 4x  and the line  y = 2x − 4",
            "parabola  y² = 4x  aur line  y = 2x − 4  se bounded area"
          )}
        </T>
      </Fade>

      {/* axes */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.2)}
        d={arrowD(88, 370, 492, 370)}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.6)}
        d={arrowD(140, 535, 140, 162)}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.1)}>
        <T x={500} y={376} size={15} fill={INK} anchor="start" weight={800}>
          x
        </T>
        <T x={132} y={158} size={15} fill={INK} anchor="end" weight={800}>
          y
        </T>
        <T x={130} y={392} size={14} fill={MUTED} anchor="end" weight={700}>
          O
        </T>
      </Fade>

      {/* the sideways parabola (BLUE) and the line (RED) */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 3.4)}
        d={PARA}
        stroke={BLUE}
        sw={3}
        dur={1.3}
      />
      <Fade on={beat >= 0} delay={dl(0, 4.7)}>
        <T x={450} y={200} size={17} fill={BLUE} anchor="start" weight={800}>
          y² = 4x
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 5.1)}
        d={LINE}
        stroke={RED}
        sw={3}
        dur={0.9}
      />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={376} y={166} size={17} fill={RED} anchor="start" weight={800}>
          y = 2x − 4
        </T>
      </Fade>

      {/* ═══════════ beat 1 — the region, horizontal strips ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Path d={REGION} fill={GREEN} opacity={0.18} stroke="none" />
      </Fade>
      {STRIP_YS.map((yi, i) => (
        <Fade key={`st${yi}`} on={beat >= 1} delay={dl(1, 1 + i * 0.2)}>
          <Rect
            x={X(px(yi))}
            y={Y(yi) - 3.5}
            width={X(lx(yi)) - X(px(yi))}
            height={7}
            fill={AMBER}
            opacity={0.62}
            stroke={AMBER_DARK}
            strokeWidth={0.8}
          />
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={334} y={274} size={15} fill={AMBER_DARK} anchor="start" weight={800}>
          dy
        </T>
        <T x={334} y={300} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("right − left", "right − left")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3)}
        d={arrowD(330, 270, 306, 270)}
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={308} y={474} size={14} fill={GREEN_DARK} anchor="start" script>
          {t(
            "the parabola opens SIDEWAYS —",
            "parabola SIDEWAYS khulta hai —"
          )}
        </T>
        <T x={308} y={504} size={14} fill={GREEN_DARK} anchor="start" script>
          {t(
            "horizontal strips are cleaner",
            "horizontal strips cleaner hongi"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — rewrite as x = f(y) ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={576} y={112} size={15} fill={RED} anchor="start" weight={800}>
          {t(
            "① Write both curves as x = f(y)",
            "① Dono curves ko x = f(y) likho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={586} y={148} size={22} fill={BLUE} anchor="start">
          {t("parabola:", "parabola:")} &nbsp; x = y²⁄4
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={586} y={182} size={22} fill={RED} anchor="start">
          {t("line:", "line:")} &nbsp; x = ( y + 4 )⁄2
        </T>
      </Fade>

      {/* ═══════════ beat 3 — intersect for the y-limits ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={576} y={220} size={15} fill={RED} anchor="start" weight={800}>
          {t("② Intersect — get the y-limits", "② Intersect — y-limits nikalo")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={586} y={250} size={19} fill={INK} anchor="start">
          y²⁄4 = ( y + 4 )⁄2
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={586} y={278} size={19} fill={INK} anchor="start">
          y² − 2y − 8 = 0
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.4)}>
        <T x={586} y={306} size={19} fill={GREEN_DARK} anchor="start">
          ( y − 4 )( y + 2 ) = 0 &nbsp;⇒&nbsp; y = −2, 4
        </T>
      </Fade>
      {/* the crossings and the y-limit guides on the graph */}
      <Fade on={beat >= 3} delay={dl(3, 6.2)}>
        <Circle cx={340} cy={210} r={6} fill={GREEN_DARK} />
        <Circle cx={190} cy={450} r={6} fill={GREEN_DARK} />
        <Path
          d="M 140 210 L 340 210"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.5}
          strokeDasharray="6 6"
        />
        <Path
          d="M 140 450 L 190 450"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.5}
          strokeDasharray="6 6"
        />
        <T x={130} y={216} size={14} fill={INK_LIGHT} anchor="end" weight={700}>
          4
        </T>
        <T x={130} y={456} size={14} fill={INK_LIGHT} anchor="end" weight={700}>
          −2
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 6.8)}
        d={ringD(340, 210, 19, 16)}
        stroke={GREEN_DARK}
        sw={1.9}
        dur={0.6}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 7.1)}
        d={ringD(190, 450, 19, 16)}
        stroke={GREEN_DARK}
        sw={1.9}
        dur={0.6}
      />

      {/* ═══════════ beat 4 — right vs left at y = 0 ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={576} y={344} size={15} fill={RED} anchor="start" weight={800}>
          {t(
            "③ Right vs left — sample at y = 0",
            "③ Right vs left — y = 0 par sample"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={586} y={374} size={18} fill={INK} anchor="start">
          {t("line", "line")} → x = 2 &nbsp;·&nbsp; {t("parabola", "parabola")} → x = 0
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.4)}>
        <T x={586} y={400} size={18} fill={RED} anchor="start">
          ⇒ {t("the LINE is the right curve", "LINE hi right curve hai")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d="M 140 370 L 240 370"
        stroke={AMBER_DARK}
        sw={6}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <Circle cx={140} cy={370} r={6.5} fill={BLUE} />
        <Circle cx={240} cy={370} r={6.5} fill={RED} />
        <T x={128} y={356} size={15} fill={BLUE} anchor="end" weight={800}>
          x = 0
        </T>
        <T x={248} y={356} size={15} fill={RED} anchor="start" weight={800}>
          x = 2
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={252} y={392} size={13} fill={MUTED} anchor="start" weight={700}>
          {t("at y = 0", "y = 0 par")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the integral in y ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={576} y={436} size={15} fill={RED} anchor="start" weight={800}>
          {t("④ Integrate in y", "④ y mein integrate karo")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={586} y={462} size={19} fill={INK} anchor="start">
          A = ∫₋₂⁴ [ ( y + 4 )⁄2 − y²⁄4 ] dy
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.4)}>
        <T x={586} y={488} size={17} fill={INK} anchor="start">
          {t("line part", "line part")} = 15 &nbsp;·&nbsp;{" "}
          {t("parabola part", "parabola part")} = 6
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the answer ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip
          x={586}
          y={501}
          w={300}
          h={40}
          fill={CREAM}
          stroke={GREEN_DARK}
          textFill={GREEN_DARK}
          size={21}
          script={false}
        >
          15 − 6 = 9 {t("sq units", "sq units")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.4)}
        d={ringD(736, 521, 168, 23)}
        stroke={GREEN_DARK}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={218} y={338} size={24} fill={GREEN_DARK} weight={900}>
          A = 9
        </T>
      </Fade>

      {/* ═══════════ beat 7 — why dy mattered ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Rect
          x={166}
          y={308}
          width={8}
          height={124}
          fill="none"
          stroke={RED}
          strokeWidth={2}
          strokeDasharray="5 5"
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <Rect
          x={286}
          y={231}
          width={8}
          height={65}
          fill="none"
          stroke={RED}
          strokeWidth={2}
          strokeDasharray="5 5"
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={170} y={300} size={13} fill={RED} weight={900}>
          ✗
        </T>
        <T x={290} y={224} size={13} fill={RED} weight={900}>
          ✗
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.9)}
        d={arrowD(304, 428, 186, 400)}
        stroke={RED}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.3)}>
        <T x={308} y={424} size={13.5} fill={RED} anchor="start" weight={800}>
          {t(
            "vertical strips meet TWO parabola",
            "vertical strips DO parabola branches"
          )}
        </T>
        <T x={308} y={444} size={13.5} fill={RED} anchor="start" weight={800}>
          {t(
            "branches — a two-part integral",
            "kaatti hain — two-part integral"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.2)}>
        <Rect
          x={60}
          y={554}
          width={960}
          height={38}
          rx={14}
          fill={CREAM}
          stroke={GREEN_DARK}
          strokeWidth={1.8}
          strokeDasharray="7 6"
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={540} y={579} size={17} fill={GREEN_DARK} script>
          {t(
            "choosing dy collapsed the whole thing into a single clean integral",
            "dy chunne ne poori cheez ko ek single clean integral mein collapse kar diya"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

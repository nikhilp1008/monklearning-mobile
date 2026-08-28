/**
 * M12Ch08 · Section 16 — "Region common to a parabola and a circle"
 * Subtopic: Area between Two Curves
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The whole section is ONE worked figure: the interior of y² = 4x cut against
 * the interior of x² + y² = 5. So the board is a real graph — axes, the real
 * parabola, the real circle of radius √5, the real intersection points (1, ±2),
 * the real shaded lens, and the real strips whose ceiling SWITCHES at x = 1.
 * The algebra lives in a column on the right and is fed one line per beat.
 *
 * Graph frame: origin (270, 326), 68 px per unit. Circle radius √5·68 ≈ 152.
 * Visual vocabulary (shared with Sec 17 and Sec 18):
 *   AMBER_DARK = first / primary curve   ·   BLUE = second curve
 *   GREEN fill @0.16 = the region        ·   strips = GREEN @0.28 outlined in
 *   their own ceiling's colour           ·   RED = intersections, limits, traps
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "JEE Advanced classic — interior of      title + underline + subtitle,
 *      y² = 4x AND interior of x² + y² = 5"    axes drawn, the two equation chips
 *  1  "the ceiling is not one curve but two"   the parabola + the circle plotted
 *                                              and labelled, with the two
 *                                              "parabola first / circle next"
 *                                              call-outs on the graph
 *  2  "substitute, x² + 4x − 5 = 0, x = 1,     rings round both crossing spots,
 *      reject −5"                              the three algebra lines, the
 *                                              crossed-out x = −5
 *  3  "meets at (1, 2) and (1, −2); symmetric  the region shaded, red dots +
 *      about the x-axis, so double"            coordinate labels, the mirror
 *                                              arrow across the axis, the ×2 chip
 *  4  "0→1 the parabola caps it, 1→√5 the      upper half shaded solid, 3 amber
 *      circle does; split at x = 1"            strips + 4 blue strips, the dashed
 *                                              x = 1 split, ticks at 1 and √5,
 *                                              ① ② badges, the split integral
 *  5  "first piece 4/3; second piece
 *      5π/4 − 1 − (5/2) sin⁻¹(1/√5)"           the two piece values, a² = 5 note
 *  6  "combine and double → 2/3 + 5π/2
 *      − 5 sin⁻¹(1/√5) ≈ 6.20"                 region outlined in green + the
 *                                              boxed answer
 *  7  "sanity: the whole disc is 5π ≈ 15.7,    the disc tinted whole, and the
 *      the region takes under half"            two comparison bars underneath
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
  crossD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---- graph frame ------------------------------------------------- */
const OX = 270;
const OY = 326;
const S = 68;
const px = (x: number) => OX + x * S;
const py = (y: number) => OY - y * S;

const R5 = Math.sqrt(5); // 2.2360679…
const CR = R5 * S; // circle radius in px ≈ 152.05

/** points on y² = 4x, i.e. x = y²/4, walked in y */
const paraPts = (yA: number, yB: number, n = 24): [number, number][] =>
  Array.from({ length: n + 1 }, (_, i) => {
    const y = yA + ((yB - yA) * i) / n;
    return [px((y * y) / 4), py(y)] as [number, number];
  });

const toPath = (pts: [number, number][], move = true) =>
  pts
    .map(
      ([x, y], i) =>
        `${i === 0 ? (move ? "M" : "L") : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`
    )
    .join(" ");

const paraUpD = toPath(paraPts(0, 2.55));
const paraDnD = toPath(paraPts(0, -2.55));

const circleD =
  `M ${px(-R5).toFixed(1)} ${OY} ` +
  `A ${CR.toFixed(1)} ${CR.toFixed(1)} 0 1 1 ${px(R5).toFixed(1)} ${OY} ` +
  `A ${CR.toFixed(1)} ${CR.toFixed(1)} 0 1 1 ${px(-R5).toFixed(1)} ${OY}`;

/** the full common region: parabola up, circle arc across, parabola down */
const regionD =
  toPath(paraPts(0, 2)) +
  ` A ${CR.toFixed(1)} ${CR.toFixed(1)} 0 0 1 ${px(1).toFixed(1)} ${py(
    -2
  ).toFixed(1)} ` +
  toPath(paraPts(-2, 0), false) +
  " Z";

/** just the upper half — the piece that actually gets integrated */
const upperD =
  toPath(paraPts(0, 2)) +
  ` A ${CR.toFixed(1)} ${CR.toFixed(1)} 0 0 1 ${px(R5).toFixed(1)} ${OY} ` +
  `L ${OX} ${OY} Z`;

/** strips: parabola-capped on [0, 1], circle-capped on [1, √5] */
const paraStrips = [0.22, 0.46, 0.72];
const circStrips = [1.25, 1.55, 1.85, 2.1];

export default function M12Ch08Sec16({
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
      {/* ═══════════ beat 0 — title, axes, the two boundaries ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t(
            "The common region — parabola ∩ circle",
            "Common region — parabola ∩ circle"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.2)}
        d="M 302 62 C 460 57, 640 67, 778 60"
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        <T x={540} y={80} size={12.5} fill={MUTED} script>
          {t(
            "a JEE Advanced classic — the interior of y² = 4x cut against the interior of x² + y² = 5",
            "ek JEE Advanced classic — y² = 4x ke interior ko x² + y² = 5 ke interior se kaato"
          )}
        </T>
      </Fade>

      {/* axes */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 3)}
        d={arrowD(100, OY, 470, OY)}
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 3.6)}
        d={arrowD(OX, 510, OX, 152)}
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 0} delay={dl(0, 4.4)}>
        <T x={480} y={332} size={15} fill={INK} weight={800} anchor="start">
          x
        </T>
        <T x={270} y={142} size={15} fill={INK} weight={800}>
          y
        </T>
        <T x={256} y={346} size={13} fill={MUTED} weight={700} anchor="end">
          O
        </T>
      </Fade>

      {/* the two equations, as chips in the work column */}
      <Fade on={beat >= 0} delay={dl(0, 5.4)}>
        <Chip
          x={500}
          y={88}
          w={240}
          h={38}
          fill={CREAM}
          stroke={AMBER_DARK}
          textFill={AMBER_DARK}
          size={18}
          script={false}
        >
          {t("parabola   y² = 4x", "parabola   y² = 4x")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6.4)}>
        <Chip
          x={760}
          y={88}
          w={280}
          h={38}
          fill={PAPER}
          stroke={BLUE}
          textFill={BLUE}
          size={18}
          script={false}
        >
          {t("circle   x² + y² = 5", "circle   x² + y² = 5")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={500} y={148} size={13} fill={MUTED} script anchor="start">
          {t(
            "we want the points that are INSIDE both at once",
            "hume woh points chahiye jo ek saath dono ke ANDAR hain"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — plot both curves, spot the two ceilings ═══════════ */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d={circleD}
        stroke={BLUE}
        sw={2.4}
        dur={1.4}
      />
      {/* whole-disc tint — drawn here for z-order, but it belongs to beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <Path d={circleD} fill={BLUE} opacity={0.09} />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.6)}
        d={paraUpD}
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.9}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.2)}
        d={paraDnD}
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.9}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={352} y={150} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          y² = 4x
        </T>
        <T x={150} y={196} size={14} fill={BLUE} weight={800} anchor="start">
          x² + y² = 5
        </T>
      </Fade>

      {/* the two-ceiling call-outs, straight onto the picture */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.4)}
        d={arrowD(252, 284, 296, 258)}
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={244} y={288} size={12} fill={AMBER_DARK} weight={700} anchor="end">
          {t("parabola caps", "pehle parabola")}
        </T>
        <T x={244} y={308} size={12} fill={AMBER_DARK} weight={700} anchor="end">
          {t("it first", "cap karta hai")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.6)}
        d={arrowD(442, 206, px(2.03), py(Math.sqrt(5 - 2.03 * 2.03)))}
        stroke={BLUE}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={490} y={198} size={12} fill={BLUE} weight={700} anchor="end">
          {t("circle takes over", "phir circle sambhaalta hai")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 7.4)}>
        <T x={500} y={180} size={14} fill={RED} weight={800} anchor="start">
          {t(
            "① THE CEILING IS TWO CURVES, NOT ONE",
            "① CEILING DO CURVES HAI, EK NAHI"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={500} y={202} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t(
            "the parabola caps the region near the origin, the circle further out",
            "origin ke paas parabola cap karta hai, aage jaakar circle"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the intersections, by algebra ═══════════ */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.2)}
        d={ringD(px(1), py(2), 30, 22)}
        stroke={RED}
        sw={2}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d={ringD(px(1), py(-2), 30, 22)}
        stroke={RED}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={500} y={234} size={14} fill={RED} weight={800} anchor="start">
          {t("② INTERSECTIONS — SOLVE, NEVER GUESS", "② INTERSECTIONS — SOLVE KARO, GUESS NAHI")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={500} y={260} size={15} fill={INK} weight={700} anchor="start">
          {t("substitute  y² = 4x  into  x² + y² = 5", "y² = 4x  ko  x² + y² = 5  mein daalo")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.6)}>
        <T x={500} y={288} size={18} fill={INK_LIGHT} weight={800} anchor="start">
          x² + 4x = 5
        </T>
        <T x={660} y={288} size={18} fill={INK_LIGHT} weight={800} anchor="start">
          ⇒
        </T>
        <T x={700} y={288} size={18} fill={INK_LIGHT} weight={800} anchor="start">
          x² + 4x − 5 = 0
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7.2)}>
        <T x={500} y={316} size={18} fill={INK_LIGHT} weight={800} anchor="start">
          (x + 5)(x − 1) = 0
        </T>
        <T x={676} y={316} size={18} fill={INK_LIGHT} weight={800} anchor="start">
          ⇒
        </T>
        <T x={712} y={316} size={18} fill={GREEN_DARK} weight={900} anchor="start">
          x = 1
        </T>
        <T x={772} y={316} size={17} fill={GREEN} weight={900} anchor="start">
          ✓
        </T>
        <T x={812} y={316} size={18} fill={RED} weight={800} anchor="start">
          x = −5
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 9)}
        d={crossD(808, 300, 70, 20)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 9.6)}>
        <T x={500} y={340} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t(
            "reject −5 — the parabola y² = 4x only lives at x ≥ 0",
            "−5 reject — parabola y² = 4x sirf x ≥ 0 par hai"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the points, the region, the symmetry ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Path d={regionD} fill={GREEN} opacity={0.16} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Circle
          cx={px(1)}
          cy={py(2)}
          r={6}
          fill={RED}
          stroke={PAPER}
          strokeWidth={2}
        />
        <T x={354} y={184} size={13} fill={RED} weight={800} anchor="start">
          (1, 2)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <Circle
          cx={px(1)}
          cy={py(-2)}
          r={6}
          fill={RED}
          stroke={PAPER}
          strokeWidth={2}
        />
        <T x={354} y={474} size={13} fill={RED} weight={800} anchor="start">
          (1, −2)
        </T>
      </Fade>
      {/* the mirror line and the fold-over arrow */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.4)}
        d={`M ${OX} ${OY} H ${px(R5).toFixed(1)}`}
        stroke={GREEN_DARK}
        sw={2.6}
        dur={0.6}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 3)}
        d={arrowD(436, 288, 436, 366)}
        stroke={GREEN_DARK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={444} y={286} size={11.5} fill={GREEN_DARK} weight={700} anchor="start">
          {t("mirror", "mirror")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <Chip
          x={38}
          y={244}
          w={74}
          h={34}
          fill={CREAM}
          stroke={GREEN_DARK}
          textFill={GREEN_DARK}
          size={18}
          script={false}
        >
          × 2
        </Chip>
        <T x={38} y={296} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("upper half,", "upper half,")}
        </T>
        <T x={38} y={316} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("doubled", "double kiya")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={500} y={374} size={15} fill={INK} weight={700} anchor="start">
          {t(
            "the curves meet at  (1, 2)  and  (1, −2)",
            "curves  (1, 2)  aur  (1, −2)  par milti hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={500} y={396} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t(
            "symmetric about the x-axis → integrate the upper half, then double",
            "x-axis ke baare mein symmetric → upper half integrate karo, phir double"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the composite ceiling and the split ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Path d={upperD} fill={GREEN} opacity={0.2} />
      </Fade>
      {paraStrips.map((x, i) => {
        const top = py(2 * Math.sqrt(x));
        return (
          <Fade key={`ps${x}`} on={beat >= 4} delay={dl(4, 0.8 + i * 0.25)}>
            <Rect
              x={px(x) - 5}
              y={top}
              width={10}
              height={OY - top}
              fill={GREEN}
              opacity={0.34}
              stroke={AMBER_DARK}
              strokeWidth={1.2}
            />
          </Fade>
        );
      })}
      {circStrips.map((x, i) => {
        const top = py(Math.sqrt(5 - x * x));
        return (
          <Fade key={`cs${x}`} on={beat >= 4} delay={dl(4, 2 + i * 0.25)}>
            <Rect
              x={px(x) - 5}
              y={top}
              width={10}
              height={OY - top}
              fill={GREEN}
              opacity={0.34}
              stroke={BLUE}
              strokeWidth={1.2}
            />
          </Fade>
        );
      })}
      {/* the split line at x = 1, plus the two limits on the axis */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 3.2)}
        d={`M ${px(1)} ${OY} V ${py(2)}`}
        stroke={RED}
        sw={2}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 3.6)}
        d={`M ${px(1)} ${OY - 7} V ${OY + 7}`}
        stroke={RED}
        sw={2.6}
        dur={0.2}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 3.8)}
        d={`M ${px(R5).toFixed(1)} ${OY - 7} V ${OY + 7}`}
        stroke={RED}
        sw={2.6}
        dur={0.2}
      />
      <Fade on={beat >= 4} delay={dl(4, 4.2)}>
        <T x={px(1)} y={348} size={13} fill={RED} weight={800}>
          1
        </T>
        <T x={px(R5) + 8} y={348} size={13} fill={RED} weight={800}>
          √5
        </T>
      </Fade>
      {/* the ① ② badges, sitting inside the two slabs */}
      <Fade on={beat >= 4} delay={dl(4, 4.8)}>
        <Circle
          cx={298}
          cy={294}
          r={12}
          fill={CREAM}
          stroke={AMBER_DARK}
          strokeWidth={2}
        />
        <T x={298} y={299} size={14} fill={AMBER_DARK} weight={900}>
          1
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <Circle cx={392} cy={294} r={12} fill={PAPER} stroke={BLUE} strokeWidth={2} />
        <T x={392} y={299} size={14} fill={BLUE} weight={900}>
          2
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={500} y={428} size={14} fill={RED} weight={800} anchor="start">
          {t(
            "③ THE CEILING SWITCHES — SPLIT THE INTEGRAL AT x = 1",
            "③ CEILING SWITCH HOTI HAI — INTEGRAL KO x = 1 PAR SPLIT KARO"
          )}
        </T>
      </Fade>
      {/* the split integral, assembled piece by piece so the limits sit right */}
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={500} y={462} size={19} fill={GREEN_DARK} weight={900} anchor="start">
          A/2
        </T>
        <T x={550} y={462} size={19} fill={GREEN_DARK} weight={900} anchor="start">
          =
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={578} y={468} size={30} fill={AMBER_DARK} weight={700} anchor="middle">
          ∫
        </T>
        <T x={592} y={444} size={11.5} fill={AMBER_DARK} weight={800} anchor="start">
          1
        </T>
        <T x={592} y={476} size={11.5} fill={AMBER_DARK} weight={800} anchor="start">
          0
        </T>
        <T x={606} y={462} size={19} fill={AMBER_DARK} weight={800} anchor="start">
          2√x dx
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10.4)}>
        <T x={694} y={462} size={19} fill={GREEN_DARK} weight={900} anchor="start">
          +
        </T>
        <T x={726} y={468} size={30} fill={BLUE} weight={700} anchor="middle">
          ∫
        </T>
        <T x={738} y={444} size={11.5} fill={BLUE} weight={800} anchor="start">
          √5
        </T>
        <T x={738} y={476} size={11.5} fill={BLUE} weight={800} anchor="start">
          1
        </T>
        <T x={768} y={462} size={19} fill={BLUE} weight={800} anchor="start">
          √(5 − x²) dx
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={606} y={498} size={11.5} fill={AMBER_DARK} weight={700} anchor="start">
          {t("① parabola is the lower one here", "① yahan parabola neeche wala hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 13)}>
        <T x={840} y={486} size={11.5} fill={BLUE} weight={700} anchor="start">
          {t("② circle is lower here", "② yahan circle neeche hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the two pieces evaluated ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Circle
          cx={510}
          cy={508}
          r={11}
          fill={CREAM}
          stroke={AMBER_DARK}
          strokeWidth={1.8}
        />
        <T x={510} y={513} size={13} fill={AMBER_DARK} weight={900}>
          1
        </T>
        <T x={532} y={514} size={18} fill={AMBER_DARK} weight={800} anchor="start">
          = 4/3
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <Circle cx={510} cy={540} r={11} fill={PAPER} stroke={BLUE} strokeWidth={1.8} />
        <T x={510} y={545} size={13} fill={BLUE} weight={900}>
          2
        </T>
        <T x={532} y={546} size={18} fill={BLUE} weight={800} anchor="start">
          = 5π/4 − 1 − (5/2) sin⁻¹(1/√5)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={840} y={514} size={11.5} fill={MUTED} weight={600} anchor="start">
          {t("catalogue antiderivative,", "catalogue antiderivative,")}
        </T>
        <T x={840} y={530} size={11.5} fill={MUTED} weight={600} anchor="start">
          {t("used with  a² = 5", "with  a² = 5")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — combine and double ═══════════ */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d={regionD}
        stroke={GREEN_DARK}
        sw={3}
        dur={1.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <Rect
          x={500}
          y={556}
          width={540}
          height={40}
          rx={12}
          fill={CREAM}
          stroke={GREEN_DARK}
          strokeWidth={2.2}
        />
        <T x={770} y={583} size={19} fill={GREEN_DARK} weight={900}>
          A = 2/3 + 5π/2 − 5 sin⁻¹(1/√5) ≈ 6.20 sq units
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the sanity check ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={44} y={520} size={13.5} fill={RED} weight={800} anchor="start">
          {t("SANITY CHECK", "SANITY CHECK")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <T x={44} y={540} size={12.5} fill={BLUE} weight={700} anchor="start">
          {t("whole disc  =  5π  ≈  15.71", "poora disc  =  5π  ≈  15.71")}
        </T>
        <Rect
          x={44}
          y={546}
          width={290}
          height={15}
          rx={5}
          fill={BLUE}
          opacity={0.28}
          stroke={BLUE}
          strokeWidth={1.4}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.6)}>
        <T x={44} y={578} size={12.5} fill={GREEN_DARK} weight={700} anchor="start">
          {t("common region  ≈  6.20", "common region  ≈  6.20")}
        </T>
        <Rect
          x={44}
          y={583}
          width={115}
          height={13}
          rx={5}
          fill={GREEN}
          opacity={0.42}
          stroke={GREEN_DARK}
          strokeWidth={1.4}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6.6)}>
        <T x={44} y={498} size={12} fill={GREEN_DARK} weight={700} anchor="start">
          {t(
            "the composite split was the whole skill",
            "composite split hi poori skill thi"
          )}
        </T>
        <T x={172} y={592} size={12} fill={GREEN_DARK} weight={700} anchor="start">
          {t("under half the disc ✓", "disc ke aadhe se kam ✓")}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * M12Ch08 · Section 18 — "Every hard area problem is a disguise"
 * Subtopic: Advanced Regions: Modulus, Inequalities & Composite Areas
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The narration names exactly three disguises and says the board shows all
 * three at a glance — so the board IS three drawn regions, side by side, and
 * each one is filled in with real geometry as its beat arrives:
 *   ① y = |x| — the V, its kink at the origin, the split at the corner, and a
 *      strip in each smooth piece.
 *   ② y ≥ x² and y ≤ x + 2 — the parabola, the line, both real crossings at
 *      (−1, 1) and (2, 4), the lens between them shaded. Above it, the smaller
 *      "an inequality is a REGION, not a curve" picture.
 *   ③ the composite ceiling — two curves crossing twice, so the tallest
 *      boundary switches twice; the area under the MAX shaded, split at both
 *      switch points into slabs 1, 2, 3.
 *
 * Visual vocabulary (shared with Sec 16 and Sec 17):
 *   AMBER_DARK = first curve   ·   BLUE = second curve
 *   GREEN fill @0.16 = the region   ·   strips = GREEN @0.4 in GREEN_DARK
 *   RED = corners, crossings, switch points — the things you must decode
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "you can already do one curve and two    title + underline + subtitle +
 *      curves; every hard one is a disguise"   the two "you already know" chips
 *  1  "the board shows all three at a glance"  the three panel frames, their
 *                                              disguise headers, and a thumbnail
 *                                              of each shape — the V, the two
 *                                              overlapping regions, the skyline —
 *                                              so the glance is real, not empty
 *  2  "disguise one is the modulus — a V with  panel ①: axes, the two rays of
 *      a kink; split at every corner"          y = |x|, the shaded region, the
 *                                              kink dot, the dashed split at the
 *                                              corner, a strip either side
 *  3  "disguise two: y ≤ f(x) is not a curve,  panel ② upper: a curve with the
 *      it is a region"                         whole half-plane below it shaded
 *                                              and an arrow pointing down
 *  4  "y ≥ x² and y ≤ x + 2 is an overlap"     panel ② main: parabola + line,
 *                                              (−1, 1) and (2, 4) dotted, the
 *                                              lens shaded, side labels
 *  5  "disguise three: the ceiling switches —  panel ③: both curves, the skyline
 *      a Mumbai skyline; split and add"        (the max) shaded, both switch
 *                                              points dashed to the axis, slabs
 *                                              1 · 2 · 3 numbered
 *  6  "each is a decoding puzzle then routine  the chain: decode the boundary →
 *      integration"                            routine integration → the integral
 *                                              writes itself
 *  7  "the mistakes are in the decoding, not   the three decoding failure points
 *      the calculus"                           as dashed red chips
 */

import React from "react";
import { Circle, Ellipse, Path, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
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

/* ---------- panel ② : y = x² and y = x + 2 ---------- */
const Q_X = 476;
const Q_Y = 400;
/** isotropic: 1 unit = 30 px on BOTH axes, so y = x + 2 really looks like slope 1
 *  and the marked crossing (2, 4) really sits 2 right and 4 up */
const Q_SX = 30;
const Q_SY = 30;
const qx = (x: number) => Q_X + Q_SX * x;
const qy = (v: number) => Q_Y - Q_SY * v;
const qPts = (a: number, b: number, n = 26) =>
  Array.from({ length: n + 1 }, (_, i) => {
    const x = a + ((b - a) * i) / n;
    return `${qx(x).toFixed(1)} ${qy(x * x).toFixed(1)}`;
  });
const paraD = "M " + qPts(-1.35, 2.15).join(" L ");
/** y = x + 2, drawn from the same helpers so it passes exactly through the two dots */
const lineD =
  `M ${qx(-1.7).toFixed(1)} ${qy(0.3).toFixed(1)} ` +
  `L ${qx(2.45).toFixed(1)} ${qy(4.45).toFixed(1)}`;
/** unit ticks so the different-looking panels can still be read off */
const qTicksX = [-1, 1, 2];
const qTicksY = [1, 2, 3, 4];
/** the lens: along the line from (−1,1) to (2,4), then back along the parabola */
const lensD =
  `M ${qx(-1).toFixed(1)} ${qy(1).toFixed(1)} L ${qx(2).toFixed(1)} ${qy(
    4
  ).toFixed(1)} L ` +
  qPts(2, -1).join(" L ") +
  " Z";

/* ---------- panel ③ : the composite / skyline ceiling ---------- */
const S_X = 748;
const S_Y = 404;
const S_SX = 46;
const S_SY = 36;
const sx = (x: number) => S_X + S_SX * x;
const sy = (v: number) => S_Y - S_SY * v;
const fA = (x: number) => 3.4 - 0.3 * (x - 3) * (x - 3);
const fB = (x: number) => 1.9 + 0.05 * x;
/** the two places where the tallest boundary changes (0.3x² − 1.75x + 1.2 = 0) */
const SW1 = 0.79372;
const SW2 = 5.03962;
const sPts = (f: (x: number) => number, a: number, b: number, n = 22) =>
  Array.from({ length: n + 1 }, (_, i) => {
    const x = a + ((b - a) * i) / n;
    return `${sx(x).toFixed(1)} ${sy(f(x)).toFixed(1)}`;
  });
const curveAD = "M " + sPts(fA, 0, 6.2, 30).join(" L ");
const curveBD = "M " + sPts(fB, 0, 6.2, 6).join(" L ");
const skylineD =
  "M " +
  sPts(fB, 0, SW1, 4)
    .concat(sPts(fA, SW1, SW2, 24))
    .concat(sPts(fB, SW2, 6.2, 4))
    .join(" L ") +
  ` L ${sx(6.2).toFixed(1)} ${S_Y} L ${sx(0).toFixed(1)} ${S_Y} Z`;

export default function M12Ch08Sec18({
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
      {/* ═══════════ beat 0 — what you already have ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t(
            "Every hard area problem is a disguise",
            "Har hard area problem ek disguise hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.1)}
        d="M 322 58 C 470 53, 630 63, 758 56"
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={74} size={12.5} fill={MUTED} script>
          {t(
            "the only extra work is stripping the disguise off — and three of them come back again and again",
            "extra kaam sirf disguise utaarna hai — aur teen disguises baar-baar aate hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <T x={236} y={112} size={13} fill={MUTED} script anchor="end">
          {t("you already have:", "tumhare paas pehle se:")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <Chip
          x={250}
          y={88}
          w={270}
          h={36}
          fill={CREAM}
          stroke={AMBER_DARK}
          textFill={AMBER_DARK}
          size={16}
          script={false}
        >
          {t("area under ONE curve", "ONE curve ke neeche ki area")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5.4)}>
        <Chip
          x={560}
          y={88}
          w={290}
          h={36}
          fill={PAPER}
          stroke={BLUE}
          textFill={BLUE}
          size={16}
          script={false}
        >
          {t("area between TWO curves", "TWO curves ke beech ki area")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 7.4)}>
        <T x={870} y={112} size={13} fill={RED} script anchor="start">
          {t("… in disguise, every time", "… har baar disguise mein")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — all three at a glance ═══════════ */}
      {([
        [36, 324],
        [376, 328],
        [720, 324],
      ] as [number, number][]).map(([x, w], i) => (
        <Fade key={`fr${i}`} on={beat >= 1} delay={dl(1, 0.3 + i * 0.4)}>
          <Rect x={x} y={134} width={w} height={318} rx={14} fill={CREAM} opacity={0.5} />
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={48} y={158} size={13} fill={RED} weight={800} anchor="start">
          {t("DISGUISE ① — THE MODULUS", "DISGUISE ① — MODULUS")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={388} y={158} size={13} fill={RED} weight={800} anchor="start">
          {t("DISGUISE ② — THE INEQUALITY", "DISGUISE ② — INEQUALITY")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={732} y={158} size={13} fill={RED} weight={800} anchor="start">
          {t("DISGUISE ③ — THE SWITCHING CEILING", "DISGUISE ③ — SWITCHING CEILING")}
        </T>
      </Fade>

      {/* the three shapes at a glance — thumbnails, so beat 1 shows what the
          voice claims it shows: a V, an overlap, a switching skyline */}
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Path
          d="M 254 146 L 270 168 L 286 146"
          stroke={AMBER_DARK}
          strokeWidth={2.4}
          fill="none"
        />
        <Circle cx={270} cy={168} r={2.8} fill={RED} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <Ellipse
          cx={640}
          cy={154}
          rx={16}
          ry={11}
          fill={AMBER_DARK}
          opacity={0.22}
          stroke={AMBER_DARK}
          strokeWidth={1.2}
        />
        <Ellipse
          cx={662}
          cy={154}
          rx={16}
          ry={11}
          fill={BLUE}
          opacity={0.22}
          stroke={BLUE}
          strokeWidth={1.2}
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        {([
          [978, 158, 10],
          [994, 146, 22],
          [1010, 154, 14],
        ] as [number, number, number][]).map(([bx, by, bh], i) => (
          <Rect
            key={`sky${i}`}
            x={bx}
            y={by}
            width={14}
            height={bh}
            fill={GREEN}
            opacity={0.35}
            stroke={GREEN_DARK}
            strokeWidth={1.2}
          />
        ))}
      </Fade>

      {/* ═══════════ beat 2 — the modulus V ═══════════ */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.3)}
        d={arrowD(80, 336, 320, 336)}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d={arrowD(198, 372, 198, 212)}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.6)}
        d="M 94 244 L 198 336"
        stroke={AMBER_DARK}
        sw={2.8}
        dur={0.5}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.2)}
        d="M 198 336 L 302 244"
        stroke={AMBER_DARK}
        sw={2.8}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={100} y={232} size={12} fill={AMBER_DARK} weight={800} anchor="start">
          y = −x
        </T>
        <T x={298} y={232} size={12} fill={AMBER_DARK} weight={800} anchor="end">
          y = x
        </T>
        <T x={94} y={356} size={11} fill={MUTED} weight={700}>
          −2
        </T>
        <T x={302} y={356} size={11} fill={MUTED} weight={700}>
          2
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <Path
          d="M 94 244 L 198 336 L 302 244 L 302 336 L 94 336 Z"
          fill={GREEN}
          opacity={0.16}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        {/* the split gutter — a translucent red band so the split reads as its own
            object and is not mistaken for a recoloured y-axis underneath it */}
        <Rect x={190} y={226} width={16} height={118} rx={5} fill={RED} opacity={0.16} />
        <Path
          d="M 198 344 V 226"
          stroke={RED}
          strokeWidth={2.6}
          strokeDasharray="9 6"
          fill="none"
        />
        <Circle cx={198} cy={336} r={5.5} fill={RED} stroke={PAPER} strokeWidth={1.8} />
        <T x={198} y={365} size={11.5} fill={RED} weight={800}>
          {t("kink — split here", "kink — yahin split")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <Rect
          x={141}
          y={290}
          width={10}
          height={46}
          fill={GREEN}
          opacity={0.4}
          stroke={GREEN_DARK}
          strokeWidth={1.2}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.9)}>
        <Rect
          x={245}
          y={290}
          width={10}
          height={46}
          fill={GREEN}
          opacity={0.4}
          stroke={GREEN_DARK}
          strokeWidth={1.2}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.8)}>
        <T x={48} y={386} size={12.5} fill={INK} weight={700} anchor="start">
          {t(
            "the modulus reflects the negative part",
            "modulus negative hisse ko upar reflect"
          )}
        </T>
        <T x={48} y={404} size={12.5} fill={INK} weight={700} anchor="start">
          {t("of the inside back up to positive", "kar deta hai — positive bana deta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9.6)}>
        <T x={48} y={428} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t(
            "SPLIT at every corner, integrate each piece",
            "har corner par SPLIT, har piece integrate"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={48} y={446} size={11.5} fill={MUTED} weight={600} anchor="start">
          {t(
            "— exactly the splitting you already do at the axis",
            "— wahi splitting jo tum axis par pehle se karte ho"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — an inequality is a region ═══════════ */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.3)}
        d="M 396 192 C 452 226, 552 182, 684 214"
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <Path
          d="M 396 192 C 452 226, 552 182, 684 214 L 684 246 L 396 246 Z"
          fill={GREEN}
          opacity={0.2}
        />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={388} y={178} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("y ≤ f(x)  is a REGION, not a curve", "y ≤ f(x)  ek REGION hai, curve nahi")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.8)}
        d={arrowD(500, 216, 500, 240)}
        stroke={GREEN_DARK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={698} y={240} size={11.5} fill={MUTED} weight={700} anchor="end">
          {t("everything on one side", "curve ke ek taraf ka sab kuch")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the overlap y ≥ x², y ≤ x + 2 ═══════════ */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.3)}
        d={arrowD(396, Q_Y, 620, Q_Y)}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d={arrowD(Q_X, 414, Q_X, 258)}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        {qTicksX.map((v) => (
          <Path
            key={`qtx${v}`}
            d={`M ${qx(v).toFixed(1)} ${Q_Y} V ${Q_Y + 6}`}
            stroke={MUTED}
            strokeWidth={1.6}
          />
        ))}
        {qTicksY.map((v) => (
          <Path
            key={`qty${v}`}
            d={`M ${Q_X} ${qy(v).toFixed(1)} H ${Q_X + 7}`}
            stroke={MUTED}
            strokeWidth={1.6}
          />
        ))}
        <T x={468} y={374} size={10.5} fill={MUTED} weight={700} anchor="end">
          1
        </T>
        <T x={468} y={284} size={10.5} fill={MUTED} weight={700} anchor="end">
          4
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.5)}
        d={paraD}
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.9}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.4)}
        d={lineD}
        stroke={BLUE}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <Path d={lensD} fill={GREEN} opacity={0.2} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <Circle
          cx={qx(-1)}
          cy={qy(1)}
          r={5.5}
          fill={RED}
          stroke={PAPER}
          strokeWidth={1.8}
        />
        <T x={434} y={364} size={11} fill={RED} weight={800} anchor="end">
          (−1, 1)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        <Circle
          cx={qx(2)}
          cy={qy(4)}
          r={5.5}
          fill={RED}
          stroke={PAPER}
          strokeWidth={1.8}
        />
        <T x={524} y={272} size={11} fill={RED} weight={800} anchor="end">
          (2, 4)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.6)}>
        <T x={560} y={274} size={12} fill={BLUE} weight={800} anchor="start">
          y = x + 2
        </T>
        <T x={560} y={294} size={10.5} fill={MUTED} weight={700} anchor="start">
          {t("y ≤ x + 2 → below", "y ≤ x + 2 → neeche")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.6)}>
        <T x={560} y={330} size={12} fill={AMBER_DARK} weight={800} anchor="start">
          y = x²
        </T>
        <T x={560} y={350} size={10.5} fill={MUTED} weight={700} anchor="start">
          {t("y ≥ x² → above", "y ≥ x² → upar")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8.4)}>
        <T x={388} y={430} size={12} fill={INK} weight={700} anchor="start">
          {t(
            "translate each side, then read off the boundaries",
            "har inequality ka side nikaalo, phir boundaries padho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 11)}>
        <T x={388} y={448} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t(
            "→ then it is a plain between-curves problem",
            "→ phir yeh ek plain between-curves problem hai"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the switching skyline ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={732} y={182} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "picture a Mumbai skyline: one building,",
            "ek Mumbai skyline socho: ek building,"
          )}
        </T>
        <T x={732} y={200} size={12.5} fill={MUTED} script anchor="start">
          {t("then a taller one, then a shorter one", "phir ek oonchi, phir ek chhoti")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.4)}
        d={arrowD(732, S_Y, 1040, S_Y)}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.9)}
        d={arrowD(S_X, 424, S_X, 268)}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.6)}
        d={curveAD}
        stroke={AMBER_DARK}
        sw={2.6}
        dur={1}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 3.4)}
        d={curveBD}
        stroke={BLUE}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 5} delay={dl(5, 4.2)}>
        <Path d={skylineD} fill={GREEN} opacity={0.18} />
        <T x={886} y={274} size={13} fill={AMBER_DARK} weight={900}>
          f
        </T>
        <T x={1038} y={316} size={13} fill={BLUE} weight={900} anchor="end">
          g
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.4)}>
        <Path
          d={`M ${sx(SW1).toFixed(1)} ${sy(fB(SW1)).toFixed(1)} V ${S_Y}`}
          stroke={RED}
          strokeWidth={1.8}
          strokeDasharray="6 5"
          fill="none"
        />
        <Circle
          cx={sx(SW1)}
          cy={sy(fB(SW1))}
          r={5}
          fill={RED}
          stroke={PAPER}
          strokeWidth={1.8}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <Path
          d={`M ${sx(SW2).toFixed(1)} ${sy(fB(SW2)).toFixed(1)} V ${S_Y}`}
          stroke={RED}
          strokeWidth={1.8}
          strokeDasharray="6 5"
          fill="none"
        />
        <Circle
          cx={sx(SW2)}
          cy={sy(fB(SW2))}
          r={5}
          fill={RED}
          stroke={PAPER}
          strokeWidth={1.8}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.8)}>
        <T x={766} y={422} size={12} fill={GREEN_DARK} weight={900}>
          1
        </T>
        <T x={882} y={422} size={12} fill={GREEN_DARK} weight={900}>
          2
        </T>
        <T x={1006} y={422} size={12} fill={GREEN_DARK} weight={900}>
          3
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={732} y={224} size={12} fill={INK} weight={700} anchor="start">
          {t(
            "split where the TALLEST boundary changes,",
            "wahan split karo jahan SABSE OONCHI boundary badle,"
          )}
        </T>
        <T x={732} y={242} size={12} fill={INK} weight={700} anchor="start">
          {t("integrate each slab, then add", "har slab integrate karo, phir jodo")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 11.5)}>
        <T x={882} y={448} size={15} fill={GREEN_DARK} weight={900}>
          A = A₁ + A₂ + A₃
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the unifying insight ═══════════ */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d="M 36 460 H 1044"
        stroke={MUTED}
        sw={1.3}
        dur={0.9}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={36} y={478} size={13.5} fill={RED} weight={800} anchor="start">
          {t(
            "THE UNIFYING INSIGHT — nothing new is integrated here",
            "UNIFYING INSIGHT — yahan kuch naya integrate nahi hota"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Chip
          x={120}
          y={486}
          w={250}
          h={34}
          fill={CREAM}
          stroke={RED}
          textFill={RED}
          size={14}
          script={false}
        >
          {t("decode the boundary", "boundary decode karo")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 3)}
        d={arrowD(382, 503, 446, 503)}
        stroke={INK}
        sw={2}
        dur={0.35}
      />
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <Chip
          x={458}
          y={486}
          w={250}
          h={34}
          fill={PAPER}
          stroke={BLUE}
          textFill={BLUE}
          size={14}
          script={false}
        >
          {t("routine integration", "routine integration")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 4.4)}
        d={arrowD(720, 503, 784, 503)}
        stroke={INK}
        sw={2}
        dur={0.35}
      />
      <Fade on={beat >= 6} delay={dl(6, 4.8)}>
        <Chip
          x={796}
          y={486}
          w={248}
          h={34}
          fill={CREAM}
          stroke={GREEN_DARK}
          textFill={GREEN_DARK}
          size={14}
          script={false}
        >
          {t("the integral writes itself", "integral khud likh jaata hai")}
        </Chip>
      </Fade>

      {/* ═══════════ beat 7 — where the marks are actually lost ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={36} y={552} size={13.5} fill={RED} weight={800} anchor="start">
          {t(
            "THE MISTAKES LIVE IN THE DECODING",
            "GALTIYAAN DECODING MEIN HOTI HAIN"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={1044} y={552} size={12.5} fill={GREEN_DARK} weight={800} anchor="end">
          {t(
            "the calculus itself stays routine ✓",
            "calculus khud routine hi rehta hai ✓"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <Chip
          x={36}
          y={562}
          w={320}
          h={34}
          fill={PAPER}
          stroke={RED}
          textFill={RED}
          size={14}
          script={false}
          dashed
        >
          {t("finding the corners", "corners dhoondhna")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <Chip
          x={376}
          y={562}
          w={320}
          h={34}
          fill={PAPER}
          stroke={RED}
          textFill={RED}
          size={14}
          script={false}
          dashed
        >
          {t("deciding the sides", "sides tay karna")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.6)}>
        <Chip
          x={716}
          y={562}
          w={320}
          h={34}
          fill={PAPER}
          stroke={RED}
          textFill={RED}
          size={14}
          script={false}
          dashed
        >
          {t("locating the switch points", "switch points locate karna")}
        </Chip>
      </Fade>
    </Scene>
  );
}

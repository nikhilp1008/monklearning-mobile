/**
 * M12Ch08 · Section 4 — "The area formulas and the standard catalogue"
 * Subtopic: Area under Simple Curves
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * This is the consolidation board for the subtopic. The voice recites six
 * formulas; a board that merely typed them out would teach nothing, so every
 * formula gets the picture it is a description of. Six figure panels in a
 * 3 × 2 grid, then the whisper-warning strip along the bottom.
 *
 * Shared visual vocabulary with Sections 5 and 6:
 *   axes            INK, drawn with arrowD (head on +x and +y)
 *   the curve       BLUE  #0284c7
 *   area ABOVE      AMBER fill @ 0.22, edges + strips in AMBER_DARK
 *   area BELOW      RED   fill @ 0.18
 *   the answer      GREEN / GREEN_DARK
 *   limits          tick marks on the axis + a letter, never a floating label
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "consolidate every formula in one place"   title + underline + subtitle
 *  1  "curve above the x-axis, ∫ₐᵇ y dx"          panel ①: axes, rising curve,
 *                                                 a and b ticked, amber region,
 *                                                 the formula underneath
 *  2  "against the y-axis, x = g(y), ∫꜀ᵈ x dy"    panel ②: same picture turned
 *                                                 on its side — horizontal
 *                                                 strips, c and d on the y-axis
 *  3  "entirely below the axis → |∫| = −∫"        panel ③: a lobe hanging under
 *                                                 the axis, shaded RED, the
 *                                                 signed-vs-absolute formula
 *  4  "crosses inside the interval → ∫|f|"        panel ④: one curve, one root,
 *                                                 red half + amber half, the
 *                                                 dashed split line
 *  5  "circle πa², ellipse πab"                   panel ⑤: circle of radius a
 *                                                 and ellipse with semi-axes
 *                                                 a and b, radii arrowed
 *  6  "the workhorse antiderivative √(a²−x²)"     panel ⑥: quarter circle with
 *                                                 the region under it shaded,
 *                                                 plus the antiderivative
 *  7  "<whisper> signed number vs area"           divider + the warning, with
 *                                                 ∫f dx crossed out and
 *                                                 ∫|f| dx ringed
 */

import React from "react";
import { Circle, Path, TSpan } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD, crossD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---------- tiny path helpers (screen-space) ---------- */

const poly = (pts: [number, number][]) =>
  pts.map(([x, y], i) => `${i ? "L" : "M"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");

const samp = (
  f: (u: number) => number,
  u0: number,
  u1: number,
  n = 30
): [number, number][] =>
  Array.from({ length: n + 1 }, (_, i) => {
    const u = u0 + ((u1 - u0) * i) / n;
    return [u, f(u)] as [number, number];
  });

/** region between a screen-space curve y = f(x) and the horizontal line y = base */
const areaD = (f: (x: number) => number, x0: number, x1: number, base: number) =>
  `${poly(samp(f, x0, x1))} L ${x1} ${base} L ${x0} ${base} Z`;

/** region between a screen-space curve x = g(y) and the vertical line x = base */
const areaYD = (g: (y: number) => number, y0: number, y1: number, base: number) =>
  `${poly(samp(g, y0, y1).map(([y, x]) => [x, y] as [number, number]))} L ${base} ${y1} L ${base} ${y0} Z`;

/** closed ellipse as a drawable path */
const ellD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;

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

/* ---------- the six panel curves, in screen coordinates ---------- */

/** ① a curve sitting above the axis y = 252 */
const gA = (x: number) => 252 - 22 * Math.sqrt(Math.max(0, (x - 70) / 10));
/** ② a curve read as x = g(y), to the right of the axis x = 420 */
const gB = (y: number) => 424 + 30 * Math.sqrt(Math.max(0, (252 - y) / 10));
/** ③ a lobe hanging entirely below the axis y = 162 */
const gC = (x: number) => 172 + 68 * Math.sin(((x - 772) / 236) * Math.PI);
/** ④ a curve that crosses the axis y = 430 at x = 210 */
const gD = (x: number) => 430 + 52 * Math.sin(((x - 110) / 200) * 2 * Math.PI);

export default function M12Ch08Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  /* strip abscissae for panels ① and ④, ordinates for panel ② */
  const stripsA = [148, 172, 196, 220, 244, 268, 288];
  const stripsB = [226, 212, 198, 184, 170, 158];
  const stripsD = [126, 146, 166, 186, 226, 246, 266, 286];

  return (
    <Scene>
      {/* ═══════════ beat 0 — title ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Every area formula in one place", "Har area formula ek hi jagah")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.4)}
        d="M 330 62 C 460 58, 620 66, 748 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.3)}>
        <T x={540} y={84} size={13} fill={MUTED} script>
          {t("keep them together — they are variations on a single idea",
             "inhe saath rakho — ye ek hi idea ke variations hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — ① curve above the x-axis ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={118} size={14} fill={RED} weight={800} anchor="start">
          {t("① curve ABOVE the x-axis", "① curve x-axis ke UPAR")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={arrowD(62, 252, 340, 252)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={arrowD(86, 268, 86, 136)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={346} y={257} size={12} fill={INK} anchor="start">x</T>
        <T x={76} y={140} size={12} fill={INK} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={poly(samp(gA, 88, 336))} stroke={BLUE} sw={2.6} dur={1.1} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={300} y={132} size={13} fill={BLUE} weight={800} anchor="middle">y = f(x)</T>
      </Fade>
      {/* the region and its strips */}
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <Path d={areaD(gA, 130, 300, 252)} fill={AMBER} opacity={0.24} />
      </Fade>
      {stripsA.map((x, i) => (
        <Draw key={`sA${x}`} on={beat >= 1} delay={dl(1, 3 + i * 0.09)}
          d={`M ${x} ${gA(x).toFixed(1)} L ${x} 252`} stroke={AMBER_DARK} sw={1.3} dur={0.3} />
      ))}
      {/* the limits, ticked on the axis */}
      <Draw on={beat >= 1} delay={dl(1, 3.8)} d="M 130 246 L 130 260 M 300 246 L 300 260" stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 4.1)}>
        <T x={130} y={276} size={14} fill={INK} weight={800}>a</T>
        <T x={300} y={276} size={14} fill={INK} weight={800}>b</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={196} y={306} size={17} fill={GREEN_DARK} weight={800}>
          {"Area = "}<Lim lo="a" hi="b" size={17}>{" y dx = "}</Lim>
          <Lim lo="a" hi="b" size={17}>{" f(x) dx"}</Lim>
        </T>
      </Fade>

      {/* ═══════════ beat 2 — ② measured against the y-axis ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={376} y={118} size={14} fill={RED} weight={800} anchor="start">
          {t("② against the y-axis · x = g(y)", "② y-axis ke against · x = g(y)")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={arrowD(398, 252, 672, 252)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={arrowD(420, 268, 420, 136)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={678} y={257} size={12} fill={INK} anchor="start">x</T>
        <T x={410} y={140} size={12} fill={INK} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.3)}
        d={poly(samp(gB, 252, 142).map(([y, x]) => [x, y] as [number, number]))}
        stroke={BLUE} sw={2.6} dur={1.1} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={560} y={150} size={13} fill={BLUE} weight={800} anchor="start">x = g(y)</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <Path d={areaYD(gB, 234, 152, 420)} fill={AMBER} opacity={0.24} />
      </Fade>
      {/* horizontal strips — the picture turned on its side */}
      {stripsB.map((y, i) => (
        <Draw key={`sB${y}`} on={beat >= 2} delay={dl(2, 3 + i * 0.1)}
          d={`M 420 ${y} L ${gB(y).toFixed(1)} ${y}`} stroke={AMBER_DARK} sw={1.3} dur={0.3} />
      ))}
      <Draw on={beat >= 2} delay={dl(2, 3.8)} d="M 414 234 L 428 234 M 414 152 L 428 152" stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 4.1)}>
        <T x={406} y={239} size={14} fill={INK} weight={800} anchor="end">c</T>
        <T x={406} y={157} size={14} fill={INK} weight={800} anchor="end">d</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.6)}>
        <T x={520} y={306} size={17} fill={GREEN_DARK} weight={800}>
          {"Area = "}<Lim lo="c" hi="d" size={17}>{" x dy"}</Lim>
        </T>
      </Fade>

      {/* ═══════════ beat 3 — ③ entirely below the axis ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={704} y={118} size={14} fill={RED} weight={800} anchor="start">
          {t("③ curve entirely BELOW the axis", "③ curve poori tarah axis ke NEECHE")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={arrowD(714, 162, 1038, 162)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 0.9)} d={arrowD(744, 268, 744, 134)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={738} y={138} size={12} fill={INK} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={poly(samp(gC, 772, 1008))} stroke={BLUE} sw={2.6} dur={1.1} />
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <Path d={areaD(gC, 772, 1008, 162)} fill={RED} opacity={0.18} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.9)} d="M 772 156 L 772 170 M 1008 156 L 1008 170" stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <T x={772} y={150} size={14} fill={INK} weight={800}>a</T>
        <T x={1008} y={150} size={14} fill={INK} weight={800}>b</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.7)}>
        <T x={890} y={214} size={13} fill={RED} script>
          {t("f(x) < 0 here — the raw integral is negative",
             "yahan f(x) < 0 — raw integral negative aata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.8)}>
        <T x={876} y={306} size={17} fill={GREEN_DARK} weight={800}>
          {"Area = | "}<Lim lo="a" hi="b" size={17}>{" f dx |  =  − "}</Lim>
          <Lim lo="a" hi="b" size={17}>{" f(x) dx"}</Lim>
        </T>
      </Fade>

      {/* ═══════════ beat 4 — ④ the curve crosses inside the interval ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={44} y={342} size={14} fill={RED} weight={800} anchor="start">
          {t("④ curve CROSSES the axis inside [a, b]", "④ curve [a, b] ke andar axis CROSS karta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={arrowD(62, 430, 340, 430)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d={arrowD(86, 500, 86, 360)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={346} y={435} size={12} fill={INK} anchor="start">x</T>
        <T x={76} y={364} size={12} fill={INK} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.3)} d={poly(samp(gD, 110, 310))} stroke={BLUE} sw={2.6} dur={1.2} />
      {/* the two halves, honestly coloured */}
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <Path d={areaD(gD, 110, 210, 430)} fill={RED} opacity={0.18} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <Path d={areaD(gD, 210, 310, 430)} fill={AMBER} opacity={0.24} />
      </Fade>
      {stripsD.map((x, i) => (
        <Draw key={`sD${x}`} on={beat >= 4} delay={dl(4, 3.2 + i * 0.07)}
          d={`M ${x} ${gD(x).toFixed(1)} L ${x} 430`}
          stroke={x < 210 ? RED : AMBER_DARK} sw={1.3} dur={0.3} />
      ))}
      {/* the split at the root */}
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <Path d="M 210 358 L 210 500" stroke={GREEN_DARK} strokeWidth={1.8} strokeDasharray="7 6" fill="none" />
        <Circle cx={210} cy={430} r={5} fill={GREEN_DARK} />
        <T x={216} y={370} size={12.5} fill={GREEN_DARK} script anchor="start">
          {t("split here", "yahan split karo")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4.4)} d="M 110 424 L 110 438 M 310 424 L 310 438" stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 4.7)}>
        <T x={110} y={454} size={14} fill={INK} weight={800}>a</T>
        <T x={310} y={454} size={14} fill={INK} weight={800}>b</T>
        <T x={158} y={470} size={22} fill={RED} weight={900}>−</T>
        <T x={262} y={402} size={22} fill={AMBER_DARK} weight={900}>+</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.4)}>
        <T x={196} y={512} size={17} fill={GREEN_DARK} weight={800}>
          {"Area = "}<Lim lo="a" hi="b" size={17}>{" | f(x) | dx"}</Lim>
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.2)}>
        <T x={196} y={532} size={12.5} fill={MUTED} script>
          {t("split at the crossing and add the magnitudes",
             "crossing par split karo aur magnitudes jodo")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — ⑤ the two catalogue results ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={376} y={342} size={14} fill={RED} weight={800} anchor="start">
          {t("⑤ two catalogue results — memorise these",
             "⑤ do catalogue results — yaad rakho")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d={ellD(452, 428, 56, 56)} stroke={BLUE} sw={2.6} dur={1} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <Path d={ellD(452, 428, 56, 56)} fill={AMBER} opacity={0.2} />
        <Circle cx={452} cy={428} r={3.4} fill={INK} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.9)} d={arrowD(452, 428, 492, 388)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.3)}>
        <T x={478} y={398} size={15} fill={INK} weight={900} anchor="start">a</T>
        <T x={452} y={508} size={17} fill={GREEN_DARK} weight={800}>Area = π a²</T>
        <T x={452} y={530} size={12} fill={MUTED} script>{t("circle, radius a", "circle, radius a")}</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3)} d={ellD(600, 428, 60, 36)} stroke={BLUE} sw={2.6} dur={1} />
      <Fade on={beat >= 5} delay={dl(5, 3.8)}>
        <Path d={ellD(600, 428, 60, 36)} fill={AMBER} opacity={0.2} />
        <Circle cx={600} cy={428} r={3.4} fill={INK} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4.1)} d={arrowD(600, 428, 658, 428)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 4.4)} d={arrowD(600, 428, 600, 394)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 4.8)}>
        <T x={632} y={422} size={15} fill={INK} weight={900}>a</T>
        <T x={588} y={410} size={15} fill={INK} weight={900} anchor="end">b</T>
        <T x={600} y={508} size={17} fill={GREEN_DARK} weight={800}>Area = π a b</T>
        <T x={600} y={530} size={12} fill={MUTED} script>{t("ellipse, semi-axes a and b", "ellipse, semi-axes a aur b")}</T>
      </Fade>

      {/* ═══════════ beat 6 — ⑥ the workhorse antiderivative ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={704} y={342} size={14} fill={RED} weight={800} anchor="start">
          {t("⑥ the workhorse antiderivative", "⑥ workhorse antiderivative")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d={arrowD(724, 470, 878, 470)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 0.9)} d={arrowD(748, 490, 748, 362)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d="M 748 378 A 92 92 0 0 1 840 470" stroke={BLUE} sw={2.6} dur={1} />
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <Path d="M 748 470 L 748 378 A 92 92 0 0 1 840 470 Z" fill={AMBER} opacity={0.24} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.4)} d="M 840 464 L 840 478 M 742 378 L 756 378" stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 2.7)}>
        <T x={840} y={492} size={14} fill={INK} weight={800}>a</T>
        <T x={736} y={383} size={14} fill={INK} weight={800} anchor="end">a</T>
        <T x={760} y={372} size={13} fill={BLUE} weight={800} anchor="start">y = √(a² − x²)</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <T x={880} y={412} size={15} fill={INK} weight={800} anchor="start">∫ √(a² − x²) dx</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <T x={880} y={440} size={13} fill={GREEN_DARK} weight={800} anchor="start">= (x/2) √(a² − x²)</T>
        <T x={880} y={464} size={13} fill={GREEN_DARK} weight={800} anchor="start">+ (a²/2) sin⁻¹(x/a) + C</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.2)}>
        <T x={868} y={508} size={12.5} fill={MUTED} script>
          {t("you reach for this in every circle and ellipse problem",
             "har circle aur ellipse problem mein yahi kaam aata hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the whispered warning ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 44 548 H 1036" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={44} y={572} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE WARNING — the plain definite integral is a SIGNED number; area is never negative.",
             "WARNING — plain definite integral ek SIGNED number hai; area kabhi negative nahin hota.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.2)}>
        <T x={44} y={592} size={13} fill={INK} anchor="start">
          {t("Below or across the axis: switch to ∫ | f(x) | dx and split at every root.",
             "Axis ke neeche ya across: ∫ | f(x) | dx par switch karo aur har root par split karo.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={646} y={566} size={15} fill={INK} anchor="start">∫ f dx</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 5.4)} d={crossD(640, 550, 74, 22)} stroke={RED} sw={2.2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 6)} d={arrowD(736, 562, 802, 562)} stroke={MUTED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 6.4)}>
        <T x={900} y={568} size={15} fill={GREEN_DARK} weight={800}>∫ | f | dx = AREA</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 6.8)} d={ringD(900, 562, 78, 22)} stroke={GREEN} sw={2.2} dur={0.7} />
    </Scene>
  );
}
